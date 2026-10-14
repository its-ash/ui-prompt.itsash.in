#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const DEMO_DIR = path.resolve('design/demos');
const THUMB_DIR = path.resolve('design/thumbs');
const VIEW = { width: 1280, height: 800 };
const SCALE = 0.375;
const QUALITY = 62;
const BLANK_BYTES = 4000;
const CONCURRENCY = Number(process.env.THUMB_CONCURRENCY ?? 4);
const FORCE = process.argv.includes('--force');

fs.mkdirSync(THUMB_DIR, { recursive: true });

const ids = fs
  .readdirSync(DEMO_DIR)
  .filter((f) => f.endsWith('.html'))
  .map((f) => path.basename(f, '.html'))
  .filter((id) => {
    if (FORCE) return true;
    const thumb = path.join(THUMB_DIR, `${id}.jpg`);
    return !fs.existsSync(thumb) || fs.statSync(thumb).mtimeMs < fs.statSync(path.join(DEMO_DIR, `${id}.html`)).mtimeMs;
  });

console.log(`[build-thumbs] ${ids.length} pending`);
if (!ids.length) process.exit(0);

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: VIEW, deviceScaleFactor: SCALE, reducedMotion: 'reduce' });
let idx = 0;
let ok = 0;
let fail = 0;

async function shoot(id) {
  const page = await ctx.newPage();
  try {
    await page.goto(`file://${path.join(DEMO_DIR, `${id}.html`)}`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
    await page.evaluate(() => document.fonts?.ready).catch(() => {});
    await page.waitForTimeout(1200);
    const opts = { type: 'jpeg', quality: QUALITY, clip: { x: 0, y: 0, ...VIEW } };
    let buf = await page.screenshot(opts);
    if (buf.length < BLANK_BYTES) {
      await page.addStyleTag({ content: '*,*::before,*::after{opacity:1!important;transform:none!important;animation:none!important;transition:none!important}' }).catch(() => {});
      await page.waitForTimeout(3000);
      buf = await page.screenshot(opts);
    }
    fs.writeFileSync(path.join(THUMB_DIR, `${id}.jpg`), buf);
    if (buf.length < BLANK_BYTES) console.warn(`BLANK ${id}`);
    ok++;
  } catch (err) {
    fail++;
    console.error(`FAIL  ${id}: ${String(err?.message ?? err).slice(0, 140)}`);
  } finally {
    await page.close();
  }
}

await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (idx < ids.length) await shoot(ids[idx++]);
  })
);

await browser.close();
console.log(`[build-thumbs] ok: ${ok}, failed: ${fail}`);
