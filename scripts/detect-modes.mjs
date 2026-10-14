#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { chromium } from 'playwright';
import { DEMO_DIR, forceMedia, hash, readModes, writeModes } from './lib/modes.mjs';

const VIEW = { width: 1280, height: 800 };
const DARK_MAX = 0.42;
const MIN_DELTA = 0.12;
const CONCURRENCY = Number(process.env.MODES_CONCURRENCY ?? 4);
const FORCE = process.argv.includes('--force');
const TOGGLES = [
  '#theme-toggle',
  '#themeToggle',
  '.theme-toggle',
  '[data-theme-toggle]',
  'button[aria-label*="theme" i]',
  'button[aria-label*="dark" i]',
  'button[aria-label*="light" i]',
  'button[aria-label*="mode" i]',
  '[aria-pressed]',
];

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'pd-modes-'));
const modes = readModes();
const ids = fs
  .readdirSync(DEMO_DIR)
  .filter((f) => f.endsWith('.html'))
  .map((f) => path.basename(f, '.html'))
  .filter((id) => FORCE || modes[id]?.src !== hash(fs.readFileSync(path.join(DEMO_DIR, `${id}.html`), 'utf8')));

console.log(`[detect-modes] ${ids.length} pending`);
if (!ids.length) process.exit(0);

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: VIEW, deviceScaleFactor: 0.25, reducedMotion: 'reduce', colorScheme: 'light' });

async function luminance(meter, page) {
  const b64 = (await page.screenshot({ type: 'jpeg', quality: 50 })).toString('base64');
  return meter.evaluate(async (data) => {
    const img = new Image();
    img.src = `data:image/jpeg;base64,${data}`;
    await img.decode();
    const c = document.createElement('canvas');
    c.width = 64;
    c.height = 40;
    const g = c.getContext('2d');
    g.drawImage(img, 0, 0, 64, 40);
    const px = g.getImageData(0, 0, 64, 40).data;
    let sum = 0;
    for (let i = 0; i < px.length; i += 4) sum += (0.2126 * px[i] + 0.7152 * px[i + 1] + 0.0722 * px[i + 2]) / 255;
    return sum / (px.length / 4);
  }, b64);
}

const snap = (page) =>
  page.evaluate(() => {
    const read = (el) => ({
      cls: el ? [...el.classList] : [],
      attrs: el ? Object.fromEntries([...el.attributes].filter((a) => a.name !== 'class').map((a) => [a.name, a.value])) : {},
    });
    return { html: read(document.documentElement), body: read(document.body) };
  });

function diff(a, b) {
  const one = (x, y) => {
    const add = y.cls.filter((c) => !x.cls.includes(c));
    const del = x.cls.filter((c) => !y.cls.includes(c));
    const set = {};
    for (const k of new Set([...Object.keys(x.attrs), ...Object.keys(y.attrs)])) if (x.attrs[k] !== y.attrs[k]) set[k] = y.attrs[k] ?? null;
    return add.length || del.length || Object.keys(set).length ? { add, del, set } : undefined;
  };
  const p = { html: one(a.html, b.html), body: one(a.body, b.body) };
  return p.html || p.body ? p : null;
}

async function load(page, html, name) {
  const file = path.join(tmp, name);
  fs.writeFileSync(file, html);
  await page.goto(`file://${file}`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(500);
}

async function detect(id, page, meter) {
  const html = fs.readFileSync(path.join(DEMO_DIR, `${id}.html`), 'utf8');
  const res = { src: hash(html), method: 'none', base: 'light' };
  await load(page, forceMedia(html, 'light'), `${id}.light.html`);
  const l0 = await luminance(meter, page);
  res.base = l0 < DARK_MAX ? 'dark' : 'light';
  const before = await snap(page);

  for (const sel of TOGGLES) {
    const btn = page.locator(sel).filter({ visible: true }).first();
    if (!(await btn.count())) continue;
    await btn.click({ timeout: 2000 }).catch(() => {});
    await page.waitForTimeout(450);
    const l1 = await luminance(meter, page);
    const flipped = (l1 < DARK_MAX) !== (l0 < DARK_MAX) && Math.abs(l1 - l0) > MIN_DELTA;
    if (!flipped) continue;
    const patch = diff(before, await snap(page));
    if (!patch) continue;
    res.method = 'toggle';
    res[l1 < l0 ? 'dark' : 'light'] = patch;
    return res;
  }

  await load(page, forceMedia(html, 'dark'), `${id}.dark.html`);
  const l2 = await luminance(meter, page);
  if ((l2 < DARK_MAX) !== (l0 < DARK_MAX) && Math.abs(l2 - l0) > MIN_DELTA) res.method = 'media';
  return res;
}

let idx = 0;
let done = 0;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    const page = await ctx.newPage();
    const meter = await ctx.newPage();
    while (idx < ids.length) {
      const id = ids[idx++];
      try {
        modes[id] = await detect(id, page, meter);
      } catch (err) {
        console.error(`FAIL  ${id}: ${String(err?.message ?? err).slice(0, 140)}`);
      }
      if (++done % 50 === 0) {
        writeModes(modes);
        console.log(`[detect-modes] ${done}/${ids.length}`);
      }
    }
  })
);

await browser.close();
fs.rmSync(tmp, { recursive: true, force: true });
writeModes(modes);
const counts = Object.values(modes).reduce((a, m) => ((a[`${m.method}/${m.base}`] = (a[`${m.method}/${m.base}`] ?? 0) + 1), a), {});
console.log('[detect-modes] done', counts);
