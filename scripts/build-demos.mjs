#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const DEMO_DIR = path.resolve('design/demos');
const STATE_FILE = path.resolve('.demo-state.json');
const CONCURRENCY = Number(process.env.DEMO_CONCURRENCY ?? 3);
const OLLAMA_URL = process.env.OLLAMA_URL ?? 'http://localhost:11434';
const MODEL = process.env.OLLAMA_MODEL ?? 'glm-5.3:cloud';

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
- Single file max ~14KB. Compact CSS. Keep sections short.
- Include: sticky nav with 4 links + theme toggle (dark/light, class-based, aria-pressed), hero (<= 2 lines), one 3-card grid section, one 3-step section, pricing (3 tiers, middle highlighted), testimonials (2), FAQ (3 details/summary), final CTA band, footer with copyright 2026.
- All copy in English, realistic, product-agnostic ("Nimbus" as brand unless the spec names one).
- Respect prefers-reduced-motion. No horizontal scroll. Buttons min 44px height.`;

async function callModel(userPrompt) {
  let lastErr;
  for (let attempt = 1; attempt <= 8; attempt++) {
    try {
      const res = await fetch(`${OLLAMA_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: SYSTEM },
            { role: 'user', content: userPrompt },
          ],
          stream: false,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} ${(await res.text()).slice(0, 160)}`);
      const data = await res.json();
      const content = data.message?.content;
      if (!content?.trim()) throw new Error('empty completion');
      return content.trim();
    } catch (err) {
      lastErr = err;
      const rateLimited = /429/.test(String(err));
      await new Promise((r) => setTimeout(r, rateLimited ? attempt * 60000 : attempt * 15000));
    }
  }
  throw lastErr;
}

function cleanHtml(text) {
  let out = text.trim();
  const fence = out.match(/^```(?:html)?\n?([\s\S]*?)\n?```$/);
  if (fence) out = fence[1].trim();
  const doc = out.search(/<!DOCTYPE html|<html/i);
  if (doc > 0) out = out.slice(doc);
  return out;
}

function looksLikeHtml(out) {
  return /<!DOCTYPE html/i.test(out) && /<\/html>/i.test(out) && out.length > 3000;
}

async function buildDemo(file) {
  const id = path.basename(file, '.md');
  const outPath = path.join(DEMO_DIR, `${id}.html`);
  if (state.done[id] && fs.existsSync(outPath) && looksLikeHtml(fs.readFileSync(outPath, 'utf8'))) {
    console.log(`skip  ${id}`);
    return;
  }
  const promptPath = path.resolve('design/prompts', `${id}.md`);
  if (!fs.existsSync(promptPath)) throw new Error('prompt missing');
  const spec = fs.readFileSync(promptPath, 'utf8');

  const out = cleanHtml(await callModel(spec));
  if (!looksLikeHtml(out)) throw new Error(`not html (len ${out.length})`);
  fs.writeFileSync(outPath, out + '\n');
  state.done[id] = { at: new Date().toISOString(), bytes: out.length };
  delete state.failed[id];
  console.log(`ok    ${id} (${Math.round(out.length / 1024)} KB)`);
}

const prompts = fs.readdirSync(path.resolve('design/prompts')).filter((f) => f.endsWith('.md'));
console.log(`[build-demos] ${prompts.length} themes, model=${MODEL}, concurrency=${CONCURRENCY}`);
let idx = 0;

async function worker() {
  while (idx < prompts.length) {
    const file = prompts[idx++];
    try {
      await buildDemo(file);
      saveState();
    } catch (err) {
      state.failed[file] = String(err?.message ?? err).slice(0, 300);
      console.error(`FAIL  ${file}: ${String(err?.message ?? err).slice(0, 140)}`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
saveState();
console.log(`[build-demos] done: ${Object.keys(state.done).length}, failed: ${Object.keys(state.failed).length}`);