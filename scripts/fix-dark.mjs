#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { MODELS, callModel, requireKey } from './lib/nvidia.mjs';
import { createChecker, hash, launch } from './lib/darkcheck.mjs';

const DEMO_DIR = path.resolve('design/demos');
const CHECK_FILE = path.resolve('design/dark-check.json');
const CONCURRENCY = Number(process.env.DEMO_CONCURRENCY ?? 6);
const ROUNDS = 3;
const ONLY = process.env.DEMO_ONLY ? process.env.DEMO_ONLY.split(',').map((s) => s.trim()) : null;
const THEME_SEL = '#theme-toggle,#themeToggle,.theme-toggle,[data-theme-toggle],button[aria-label*="theme" i],button[aria-label*="dark" i],button[aria-label*="light" i],button[aria-label*="mode" i]';

requireKey('fix-dark');
if (!fs.existsSync(CHECK_FILE)) {
  console.error('[fix-dark] run `make check-dark` first');
  process.exit(1);
}

const check = JSON.parse(fs.readFileSync(CHECK_FILE, 'utf8'));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'pd-fixdark-'));

const SYSTEM = `You are a senior frontend engineer who writes CSS only. Return ONLY raw CSS. No markdown fences, no <style> tags, no comments, no explanation.`;

const task = (html, hint) => `The page below has no working dark mode. Write a dark-theme stylesheet that is applied when <html data-theme="dark">.

Rules:
- Every selector must start with html[data-theme="dark"].
- If the page defines CSS custom properties, override them first: html[data-theme="dark"]{--var: value; ...}.
- Then override every hard-coded light color that would remain: page background (html, body), header/nav, every section and card background, text, headings, links, borders, inputs, buttons, gradients, shadows, SVG fills/strokes, pseudo-elements.
- Dark palette derived from this theme's identity: dark surfaces (not pure #000), light text with WCAG AA contrast (4.5:1 body, 3:1 large), accents adjusted for dark backgrounds, softer shadows.
- Do not change layout, sizes, spacing, fonts, or animations. Colors only.
${hint ? `\nPrevious attempt failed: ${hint}\n` : ''}
PAGE:
${html}`;

const clean = (t) =>
  t
    .trim()
    .replace(/^```(?:css)?\s*/i, '')
    .replace(/```\s*$/, '')
    .replace(/<\/?style[^>]*>/gi, '')
    .trim();
const acceptCss = (t) => {
  const css = clean(t);
  return css.length > 200 && /html\[data-theme=["']?dark["']?\]/i.test(css) && !/<\/?(script|html|body)/i.test(css);
};

const ICONS = {
  sun: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
};

const KIT_CSS = `.pd-theme-btn{display:inline-grid;place-items:center;width:44px;height:44px;margin-left:.5rem;border-radius:999px;border:1px solid currentColor;background:transparent;color:inherit;cursor:pointer;flex-shrink:0}
.pd-theme-btn:focus-visible{outline:2px solid currentColor;outline-offset:2px}
.pd-theme-btn--float{position:fixed;right:16px;bottom:16px;z-index:60;background:#fff;color:#16171b;border-color:#d5d7dc}
html[data-theme="dark"] .pd-theme-btn--float{background:#1b1c21;color:#ededf0;border-color:#2d2f35}`;

const INIT_JS = `(()=>{try{const s=localStorage.getItem('theme');document.documentElement.dataset.theme=s==='dark'||s==='light'?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch{document.documentElement.dataset.theme='light'}})();`;

const TOGGLE_JS = `(()=>{const r=document.documentElement,I=${JSON.stringify(ICONS)};
let b=[...document.querySelectorAll(${JSON.stringify(THEME_SEL)})].find(e=>e.offsetParent!==null);
const own=!b;
if(own){b=document.createElement('button');b.type='button';b.className='pd-theme-btn';const h=document.querySelector('nav')||document.querySelector('header');h?h.appendChild(b):(b.classList.add('pd-theme-btn--float'),document.body.appendChild(b));}
const sync=()=>{const d=r.dataset.theme==='dark';b.setAttribute('aria-pressed',String(d));b.setAttribute('aria-label',d?'Switch to light mode':'Switch to dark mode');if(own)b.innerHTML=d?I.sun:I.moon;};
b.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();r.dataset.theme=r.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('theme',r.dataset.theme)}catch{}sync();},true);
sync();})();`;

function inject(html, css) {
  const head = `<script id="pd-theme-init">${INIT_JS}</script>\n<style id="pd-dark">\n${css}\n${KIT_CSS}\n</style>\n`;
  const body = `<script id="pd-theme-toggle">${TOGGLE_JS}</script>\n`;
  const withHead = /<\/head>/i.test(html) ? html.replace(/<\/head>/i, `${head}</head>`) : head + html;
  return /<\/body>/i.test(withHead) ? withHead.replace(/<\/body>(?![\s\S]*<\/body>)/i, `${body}</body>`) : withHead + body;
}

const ids = Object.entries(check)
  .filter(([id, r]) => (ONLY ? ONLY.includes(id) : !r.dark))
  .map(([id]) => id)
  .filter((id) => fs.existsSync(path.join(DEMO_DIR, `${id}.html`)));
if (process.env.DEMO_REVERSE === '1') ids.reverse();
console.log(`[fix-dark] ${ids.length} pending, models=${MODELS.join('|')}, concurrency=${CONCURRENCY}`);
if (!ids.length) process.exit(0);

const browser = await launch();
let idx = 0;
let ok = 0;
let fail = 0;

async function fix(id, checker) {
  const file = path.join(DEMO_DIR, `${id}.html`);
  const html = fs.readFileSync(file, 'utf8');
  if (/id="pd-dark"/.test(html)) return console.log(`skip  ${id} (already patched)`);
  if (!ONLY && hash(html) !== check[id].src) return console.log(`skip  ${id} (changed since check)`);
  let hint = '';
  for (let round = 1; round <= ROUNDS; round++) {
    const css = clean(await callModel(SYSTEM, task(html, hint), acceptCss, 8000));
    const out = inject(html, css);
    const probe = path.join(tmp, `${id}.html`);
    fs.writeFileSync(probe, out);
    const res = await checker.check(probe);
    if (res.dark && res.how === 'toggle') {
      fs.writeFileSync(file, out);
      check[id] = { src: hash(out), ...res };
      return console.log(`ok    ${id} (round ${round}, +${Math.round(css.length / 1024)} KB css)`);
    }
    hint = 'the toggle switched data-theme to "dark" but the page stayed mostly light. Override the html/body background and every large section, header and card background.';
    console.error(`redo  ${id} round ${round}: page did not turn dark`);
  }
  throw new Error(`no dark mode after ${ROUNDS} rounds`);
}

await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    const checker = await createChecker(browser);
    while (idx < ids.length) {
      const id = ids[idx++];
      try {
        await fix(id, checker);
        ok++;
      } catch (err) {
        fail++;
        console.error(`FAIL  ${id}: ${String(err?.message ?? err).slice(0, 160)}`);
      }
    }
    await checker.close();
  })
);

await browser.close();
fs.rmSync(tmp, { recursive: true, force: true });
const latest = fs.existsSync(CHECK_FILE) ? JSON.parse(fs.readFileSync(CHECK_FILE, 'utf8')) : {};
for (const id of ids) if (check[id]?.dark) latest[id] = check[id];
fs.writeFileSync(CHECK_FILE, JSON.stringify(Object.fromEntries(Object.entries(latest).sort(([a], [b]) => a.localeCompare(b))), null, 2));
console.log(`[fix-dark] done: ${ok}, failed: ${fail}`);
