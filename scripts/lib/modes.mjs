import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export const DEMO_DIR = path.resolve('design/demos');
export const DARK_DIR = path.resolve('design/demos-dark');
export const MODES_FILE = path.resolve('design/modes.json');

const ON = 'min-width: 0px';
const OFF = 'min-width: 999999px';

export const readModes = () => (fs.existsSync(MODES_FILE) ? JSON.parse(fs.readFileSync(MODES_FILE, 'utf8')) : {});
export const writeModes = (m) =>
  fs.writeFileSync(MODES_FILE, JSON.stringify(Object.fromEntries(Object.entries(m).sort(([a], [b]) => a.localeCompare(b))), null, 2));

export const hash = (s) => crypto.createHash('sha1').update(s).digest('hex').slice(0, 12);

// Pin prefers-color-scheme in CSS and matchMedia strings so the OS setting cannot flip the page.
export function forceMedia(html, mode) {
  return html
    .replace(/prefers-color-scheme\s*:\s*dark/gi, mode === 'dark' ? ON : OFF)
    .replace(/prefers-color-scheme\s*:\s*light/gi, mode === 'dark' ? OFF : ON);
}

// Re-apply captured <html>/<body> attribute changes before and after the page's own scripts run.
export function applyPatch(html, patch) {
  if (!patch || (!patch.html && !patch.body)) return html;
  const data = JSON.stringify(patch).replace(/</g, '\\u003c');
  const js = `<script>(()=>{const P=${data};const ap=(el,p)=>{if(!el||!p)return;for(const c of p.add||[])el.classList.add(c);for(const c of p.del||[])el.classList.remove(c);for(const[k,v]of Object.entries(p.set||{}))v===null?el.removeAttribute(k):el.setAttribute(k,v);};const run=()=>{ap(document.documentElement,P.html);ap(document.body,P.body);};run();document.addEventListener('DOMContentLoaded',run);addEventListener('load',()=>{run();setTimeout(run,60);});})();</script>`;
  return /<head[^>]*>/i.test(html) ? html.replace(/<head[^>]*>/i, (m) => m + js) : js + html;
}

// Returns { light, dark } HTML for a demo id, or null when the demo is missing.
export function buildVariants(id, modes = readModes()) {
  const src = path.join(DEMO_DIR, `${id}.html`);
  if (!fs.existsSync(src)) return null;
  const html = fs.readFileSync(src, 'utf8');
  const m = modes[id];
  const base = forceMedia(html, 'light');
  const genDark = path.join(DARK_DIR, `${id}.html`);
  const dark = fs.existsSync(genDark)
    ? forceMedia(fs.readFileSync(genDark, 'utf8'), 'dark')
    : m?.method === 'toggle'
      ? applyPatch(base, m.dark)
      : m?.method === 'media'
        ? forceMedia(html, 'dark')
        : m?.base === 'dark'
          ? base
          : null;
  return { light: applyPatch(base, m?.light), dark };
}
