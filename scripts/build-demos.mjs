#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { MODELS as DEFAULT_MODELS, callModel, looksLikeHtml, requireKey } from './lib/nvidia.mjs';
import { createChecker, launch } from './lib/darkcheck.mjs';

const DEMO_DIR = path.resolve('design/demos');
const STATE_FILE = path.resolve('.demo-state.json');
const BRIEF = fs.readFileSync(path.resolve('design/design-brief.md'), 'utf8');
const MODELS = process.env.DEMO_MODELS ? process.env.DEMO_MODELS.split(',').map((m) => m.trim()).filter(Boolean) : DEFAULT_MODELS;
const TIMEOUT_MS = Number(process.env.DEMO_TIMEOUT_MS ?? 480000);
const NOTE = process.env.DEMO_NOTE ?? '';
const ROUNDS = 2;
const ONLY = process.env.DEMO_ONLY ? process.env.DEMO_ONLY.split(',').map((s) => s.trim()) : null;
const CONCURRENCY = Number(process.env.DEMO_CONCURRENCY ?? 6);

requireKey('build-demos');

fs.mkdirSync(DEMO_DIR, { recursive: true });

const state = fs.existsSync(STATE_FILE)
  ? JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'))
  : { done: {}, failed: {} };

function saveState() {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

const SYSTEM = `You generate complete single-file demo webpages from a design prompt spec.

Output rules:
- Return ONLY the complete HTML source. No markdown fences, no commentary, no explanation.
- One self-contained file: <!DOCTYPE html> with <style> for all CSS and <script> for minimal JS in <head>/end of body. No external files.
- Google Fonts via <link> tags allowed. Google Material Symbols via <link> allowed.
- Single file, 20-35KB. Compact but complete CSS.
- Include: sticky nav with 4 links + theme toggle (see Theme toggle contract below), hero (<= 2 lines), one 3-card grid section, one 3-step section, pricing (3 tiers, middle highlighted), testimonials (2), FAQ (3 details/summary), final CTA band, footer with copyright 2026.
- All copy in English, realistic, product-agnostic ("Nimbus" as brand unless the spec names one).
- Respect prefers-reduced-motion. No horizontal scroll. Buttons min 44px height.

${BRIEF}`;

async function buildDemo(file, checker) {
  const id = path.basename(file, '.md');
  const outPath = path.join(DEMO_DIR, `${id}.html`);
  if (!ONLY && fs.existsSync(outPath) && looksLikeHtml(fs.readFileSync(outPath, 'utf8'))) {
    console.log(`skip  ${id}`);
    return;
  }
  const promptPath = path.resolve('design/prompts', `${id}.md`);
  if (!fs.existsSync(promptPath)) throw new Error('prompt missing');
  const spec = fs.readFileSync(promptPath, 'utf8');

  const prompt =
    `${spec}\n\n---\nDELIVERY OVERRIDE: Output one self-contained HTML file. Put every CSS rule the spec assigns to style.css inside a single <style> tag in <head>, and every script inside an inline <script>. No local <link rel="stylesheet">, no <script src> to local files. Close the <title> tag.\nQUALITY: Define colors as CSS variables on :root and a full dark palette under :root[data-theme="dark"]; a visible theme toggle button sits in the nav (id="theme-toggle", aria-pressed, sun/moon icon, contrast in both modes). Every section has generous, consistent vertical padding; the hero fills its width (two-column with a real visual, or centered) with no empty half.${NOTE ? `\n\nREDESIGN NOTES: ${NOTE}` : ''}`;
  let out = '';
  for (let round = 1; round <= ROUNDS; round++) {
    out = await callModel(SYSTEM, prompt, looksLikeHtml, 32000, MODELS, TIMEOUT_MS);
    const probe = path.join(os.tmpdir(), `pd-demo-${id}.html`);
    fs.writeFileSync(probe, out);
    const res = await checker.check(probe);
    fs.rmSync(probe, { force: true });
    if (res.dark) break;
    if (round === ROUNDS) throw new Error('generated page has no working dark mode');
    console.error(`redo  ${id}: no working dark mode`);
  }
  fs.writeFileSync(outPath, out + '\n');
  state.done[id] = { at: new Date().toISOString(), bytes: out.length };
  delete state.failed[id];
  console.log(`ok    ${id} (${Math.round(out.length / 1024)} KB)`);
}

const prompts = fs
  .readdirSync(path.resolve('design/prompts'))
  .filter((f) => f.endsWith('.md'))
  .filter((f) => {
    const id = path.basename(f, '.md');
    if (ONLY) return ONLY.includes(id);
    const out = path.join(DEMO_DIR, `${id}.html`);
    return !(fs.existsSync(out) && looksLikeHtml(fs.readFileSync(out, 'utf8')));
  });
if (process.env.DEMO_REVERSE === '1') prompts.reverse();
console.log(`[build-demos] ${prompts.length} pending, models=${MODELS.join('|')}, concurrency=${CONCURRENCY}`);
let idx = 0;

async function worker() {
  const checker = await createChecker(browser);
  while (idx < prompts.length) {
    const file = prompts[idx++];
    try {
      await buildDemo(file, checker);
      saveState();
    } catch (err) {
      state.failed[file] = String(err?.message ?? err).slice(0, 300);
      console.error(`FAIL  ${file}: ${String(err?.message ?? err).slice(0, 140)}`);
    }
  }
  await checker.close();
}

const browser = await launch();
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
await browser.close();
saveState();
console.log(`[build-demos] done: ${Object.keys(state.done).length}, failed: ${Object.keys(state.failed).length}`);