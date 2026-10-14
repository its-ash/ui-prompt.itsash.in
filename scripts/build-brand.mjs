#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { chromium } from 'playwright';

const PUBLIC = path.resolve('public');
const THUMBS = path.resolve('design/thumbs');
const SVG = fs.readFileSync(path.join(PUBLIC, 'favicon.svg'), 'utf8');
const PICKS = ['002-Aurora-UI', '008-Art-Nouveau-Florido', '140-Risograph-Zine-Aesthetic', '005-Grunge-Rock-dos-Anos-90', '001-Minimalism-Swiss-Style', '006-Psicodelico-Anos-60'];
const COUNT = fs.readdirSync(path.resolve('design/prompts')).filter((f) => f.endsWith('.md')).length;

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const thumbs = PICKS.map((id) => path.join(THUMBS, `${id}.jpg`)).filter((f) => fs.existsSync(f));

const og = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;700&family=Geist+Mono:wght@500&display=swap" rel="stylesheet">
<style>
*{margin:0;box-sizing:border-box}body{width:1200px;height:630px;background:#0c0d10;color:#ededf0;font-family:Sora,sans-serif;display:grid;grid-template-columns:470px 1fr;overflow:hidden}
.l{padding:64px 0 64px 64px;display:flex;flex-direction:column;justify-content:space-between}
.b{display:flex;align-items:center;gap:14px;font-size:30px;font-weight:700;letter-spacing:-.02em}.b svg{width:44px;height:44px;image-rendering:pixelated}
h1{font-size:54px;line-height:1.04;letter-spacing:-.035em;font-weight:700}
p{font:500 18px 'Geist Mono',monospace;color:#a0a4ad}
.g{display:grid;grid-template-columns:repeat(2,330px);gap:18px;padding:36px;transform:rotate(-6deg) translate(20px,-40px)}
.g img{width:330px;height:206px;object-fit:cover;object-position:top;border-radius:12px;border:1px solid #2d2f35;box-shadow:0 20px 40px -12px #000}
</style></head><body>
<div class="l"><div class="b">${SVG}<span>UI-Prompt</span></div><h1>${COUNT} UI theme prompts with live demos.</h1><p>ui-prompt.itsash.in</p></div>
<div class="g">${thumbs.map((t) => `<img src="file://${esc(t)}">`).join('')}</div>
</body></html>`;

const icon = (size) =>
  `<!doctype html><html><head><style>*{margin:0}body{width:${size}px;height:${size}px;display:grid;place-items:center;background:${size > 64 ? '#ffffff' : 'transparent'}}svg{width:${Math.round(size * (size > 64 ? 0.78 : 1))}px;height:${Math.round(size * (size > 64 ? 0.78 : 1))}px}</style></head><body>${SVG}</body></html>`;

// ICO container holding one PNG image.
function pngToIco(png, size) {
  const head = Buffer.alloc(22);
  head.writeUInt16LE(0, 0);
  head.writeUInt16LE(1, 2);
  head.writeUInt16LE(1, 4);
  head.writeUInt8(size >= 256 ? 0 : size, 6);
  head.writeUInt8(size >= 256 ? 0 : size, 7);
  head.writeUInt8(0, 8);
  head.writeUInt8(0, 9);
  head.writeUInt16LE(1, 10);
  head.writeUInt16LE(32, 12);
  head.writeUInt32LE(png.length, 14);
  head.writeUInt32LE(22, 18);
  return Buffer.concat([head, png]);
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'pd-brand-'));
const browser = await chromium.launch();
try {
  const shot = async (html, w, h, opts) => {
    const file = path.join(tmp, `${w}x${h}.html`);
    fs.writeFileSync(file, html);
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(`file://${file}`, { waitUntil: 'networkidle' }).catch(() => {});
    await page.evaluate(() => document.fonts?.ready).catch(() => {});
    const buf = await page.screenshot({ ...opts, clip: { x: 0, y: 0, width: w, height: h } });
    await page.close();
    return buf;
  };
  fs.writeFileSync(path.join(PUBLIC, 'og.png'), await shot(og, 1200, 630, { type: 'png' }));
  fs.writeFileSync(path.join(PUBLIC, 'apple-touch-icon.png'), await shot(icon(180), 180, 180, { type: 'png' }));
  fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), pngToIco(await shot(icon(32), 32, 32, { type: 'png', omitBackground: true }), 32));
  console.log('[build-brand] og.png, apple-touch-icon.png, favicon.ico written');
} finally {
  await browser.close();
  fs.rmSync(tmp, { recursive: true, force: true });
}
