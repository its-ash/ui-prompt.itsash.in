#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { chromium } from 'playwright';
import { DEMO_DIR, buildVariants, hash, readModes } from './lib/modes.mjs';

const THUMB_DIR = path.resolve('design/thumbs');
const SIG_FILE = path.join(THUMB_DIR, '.sig.json');
const VIEW = { width: 1280, height: 800 };
const SCALE = 0.375;
const QUALITY = 62;
const BLANK_BYTES = 4000;
const CONCURRENCY = Number(process.env.THUMB_CONCURRENCY ?? 4);
const FORCE = process.argv.includes('--force');

fs.mkdirSync(THUMB_DIR, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'pd-thumbs-'));
const sig = !FORCE && fs.existsSync(SIG_FILE) ? JSON.parse(fs.readFileSync(SIG_FILE, 'utf8')) : {};
const modes = readModes();

const jobs = [];
for (const f of fs.readdirSync(DEMO_DIR).filter((f) => f.endsWith('.html'))) {
  const id = path.basename(f, '.html');
  const v = buildVariants(id, modes);
  for (const [mode, html] of Object.entries(v ?? {})) {
    const name = mode === 'dark' ? `${id}.dark` : id;
    const out = path.join(THUMB_DIR, `${name}.jpg`);
    if (!html) {
      fs.rmSync(out, { force: true });
      delete sig[name];
      continue;
    }
    const h = hash(html);
    if (sig[name] === h && fs.existsSync(out)) continue;
    jobs.push({ name, html, out, h });
  }
}

console.log(`[build-thumbs] ${jobs.length} pending`);
if (!jobs.length) {
  fs.writeFileSync(SIG_FILE, JSON.stringify(sig));
  process.exit(0);
}

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: VIEW, deviceScaleFactor: SCALE, reducedMotion: 'reduce', colorScheme: 'light' });
let idx = 0;
let ok = 0;
let fail = 0;

async function shoot({ name, html, out, h }) {
  const page = await ctx.newPage();
  const file = path.join(tmp, `${name}.html`);
  try {
    fs.writeFileSync(file, html);
    await page.goto(`file://${file}`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
    await page.evaluate(() => document.fonts?.ready).catch(() => {});
    await page.waitForTimeout(1200);
    const opts = { type: 'jpeg', quality: QUALITY, clip: { x: 0, y: 0, ...VIEW } };
    let buf = await page.screenshot(opts);
    if (buf.length < BLANK_BYTES) {
      await page.addStyleTag({ content: '*,*::before,*::after{opacity:1!important;transform:none!important;animation:none!important;transition:none!important}' }).catch(() => {});
      await page.waitForTimeout(3000);
      buf = await page.screenshot(opts);
    }
    fs.writeFileSync(out, buf);
    sig[name] = h;
    if (buf.length < BLANK_BYTES) console.warn(`BLANK ${name}`);
    ok++;
  } catch (err) {
    fail++;
    console.error(`FAIL  ${name}: ${String(err?.message ?? err).slice(0, 140)}`);
  } finally {
    await page.close();
  }
}

await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (idx < jobs.length) await shoot(jobs[idx++]);
  })
);

await browser.close();
fs.rmSync(tmp, { recursive: true, force: true });
fs.writeFileSync(SIG_FILE, JSON.stringify(sig));
console.log(`[build-thumbs] ok: ${ok}, failed: ${fail}`);
