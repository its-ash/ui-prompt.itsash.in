#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { readModes } from './lib/modes.mjs';

const DARK = process.env.DEMO_VARIANT === 'dark';
const DEMO_DIR = path.resolve(DARK ? 'design/demos-dark' : 'design/demos');
const STATE_FILE = path.resolve(DARK ? '.demo-dark-state.json' : '.demo-state.json');
const DARK_OVERRIDE = `\nDARK VARIANT: Render this theme in its dark mode by default. Use dark backgrounds, light text, and accents adjusted for contrast on dark surfaces, while keeping the theme's identity (typography, layout, motifs). Do not include a light/dark toggle.`;
const CONCURRENCY = Number(process.env.DEMO_CONCURRENCY ?? 6);
const NVIDIA_URL = 'https://integrate.api.nvidia.com/v1/chat/completions';
const NVIDIA_KEY = process.env.NVIDIA_API_KEY ?? '';
const MODELS = (process.env.NVIDIA_MODELS ?? 'nvidia/nemotron-3-super-120b-a12b,nvidia/nemotron-3.5-lightning-30b-a3b,openai/gpt-oss-20b').split(',').map((m) => m.trim()).filter(Boolean);
const TIMEOUT_MS = Number(process.env.DEMO_TIMEOUT_MS ?? 480000);

if (!NVIDIA_KEY) {
  console.error('[build-demos] NVIDIA_API_KEY is not set (add it to .env)');
  process.exit(1);
}

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

async function callNvidia(model, userPrompt) {
  const res = await fetch(NVIDIA_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${NVIDIA_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: SYSTEM },
        { role: 'user', content: userPrompt },
      ],
      max_tokens: 16000,
      temperature: 0.5,
      stream: true,
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`NVHTTP ${res.status} ${(await res.text()).slice(0, 160)}`);
  const dec = new TextDecoder();
  let buf = '';
  let out = '';
  for await (const chunk of res.body) {
    buf += dec.decode(chunk, { stream: true });
    const lines = buf.split('\n');
    buf = lines.pop();
    for (const line of lines) {
      if (!line.startsWith('data: {')) continue;
      try {
        out += JSON.parse(line.slice(6)).choices?.[0]?.delta?.content ?? '';
      } catch {}
    }
  }
  if (!out.trim()) throw new Error(`${model} empty`);
  return out.trim();
}

async function callModel(userPrompt) {
  let lastErr;
  for (let attempt = 1; attempt <= 6; attempt++) {
    const model = MODELS[(attempt - 1) % MODELS.length];
    try {
      const out = cleanHtml(await callNvidia(model, userPrompt));
      if (looksLikeHtml(out)) return out;
      throw new Error(`${model} weak output (len ${out.length})`);
    } catch (err) {
      lastErr = err;
      console.error(`retry ${model} attempt ${attempt}: ${String(err?.message ?? err).slice(0, 120)}`);
      const wait = /NVHTTP 429/.test(String(err)) ? attempt * 30000 : attempt * 5000;
      if (attempt < 6) await new Promise((r) => setTimeout(r, wait));
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
  return (
    /<!DOCTYPE html/i.test(out) &&
    /<\/html>/i.test(out) &&
    /<title>[^<]*<\/title>/i.test(out) &&
    /<style[\s>]/i.test(out) &&
    !/<link[^>]+href=["'](?!https?:)[^"']+\.css/i.test(out) &&
    out.length > 3000
  );
}

async function buildDemo(file) {
  const id = path.basename(file, '.md');
  const outPath = path.join(DEMO_DIR, `${id}.html`);
  if (fs.existsSync(outPath) && looksLikeHtml(fs.readFileSync(outPath, 'utf8'))) {
    console.log(`skip  ${id}`);
    return;
  }
  const promptPath = path.resolve('design/prompts', `${id}.md`);
  if (!fs.existsSync(promptPath)) throw new Error('prompt missing');
  const spec = fs.readFileSync(promptPath, 'utf8');

  const out = await callModel(
    `${spec}\n\n---\nDELIVERY OVERRIDE: Output one self-contained HTML file. Put every CSS rule the spec assigns to style.css inside a single <style> tag in <head>, and every script inside an inline <script>. No local <link rel="stylesheet">, no <script src> to local files. Close the <title> tag.${DARK ? DARK_OVERRIDE : ''}`
  );
  if (!looksLikeHtml(out)) throw new Error(`not html (len ${out.length})`);
  fs.writeFileSync(outPath, out + '\n');
  state.done[id] = { at: new Date().toISOString(), bytes: out.length };
  delete state.failed[id];
  console.log(`ok    ${id} (${Math.round(out.length / 1024)} KB)`);
}

const modes = DARK ? readModes() : {};
const prompts = fs
  .readdirSync(path.resolve('design/prompts'))
  .filter((f) => f.endsWith('.md'))
  .filter((f) => {
    const id = path.basename(f, '.md');
    const out = path.join(DEMO_DIR, `${id}.html`);
    if (DARK && !(modes[id]?.method === 'none' && modes[id]?.base === 'light')) return false;
    return !(fs.existsSync(out) && looksLikeHtml(fs.readFileSync(out, 'utf8')));
  });
if (process.env.DEMO_REVERSE === '1') prompts.reverse();
console.log(`[build-demos] ${DARK ? 'dark ' : ''}${prompts.length} pending, models=${MODELS.join('|')}, concurrency=${CONCURRENCY}`);
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