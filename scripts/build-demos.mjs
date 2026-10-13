#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const DEMO_DIR = path.resolve('design/demos');
const STATE_FILE = path.resolve('.demo-state.json');
const CONCURRENCY = Number(process.env.DEMO_CONCURRENCY ?? 3);
const OLLAMA_URL = process.env.OLLAMA_URL ?? 'http://localhost:11434';
const MODEL = process.env.OLLAMA_MODEL ?? 'glm-5.3:cloud';
const NVIDIA_KEY = process.env.NVIDIA_API_KEY ?? '';
const FALLBACK_ENABLED = Boolean(NVIDIA_KEY);

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

async function callNvidia(userPrompt) {
  const res = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${NVIDIA_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'z-ai/glm-5.3-flash',
      messages: [
        { role: 'system', content: SYSTEM },
        { role: 'user', content: userPrompt },
      ],
      max_tokens: 16000,
      temperature: 0.5,
    }),
  });
  if (!res.ok) throw new Error(`NVHTTP ${res.status} ${(await res.text()).slice(0, 160)}`);
  const data = await res.json();
  const msg = data.choices?.[0]?.message;
  const content = msg?.content || msg?.reasoning_content;
  if (!content?.trim()) throw new Error('nv empty');
  return content.trim();
}

async function callModel(userPrompt) {
  let lastErr;
  for (let attempt = 1; attempt <= 8; attempt++) {
    try {
      if (FALLBACK_ENABLED) {
        const nv = await callNvidia(userPrompt);
        if (looksCandidate(nv)) return nv;
        throw new Error('nv weak output');
      }
      throw new Error('no primary');
    } catch (err) {
      lastErr = err;
      const rateLimited = /429|NVHTTP 4\d\d/.test(String(err));
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
        if (res.ok) {
          const data = await res.json();
          const content = data.message?.content;
          if (content?.trim() && looksCandidate(content.trim())) return content.trim();
        }
        if (res.status === 429) await new Promise((r) => setTimeout(r, 30000));
      } catch {}
      if (attempt < 8) await new Promise((r) => setTimeout(r, rateLimited ? attempt * 20000 : attempt * 8000));
    }
  }
  throw lastErr;
}

function looksCandidate(out) {
  return /<!DOCTYPE html/i.test(out) && out.length > 3000;
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
console.log(`[build-demos] ${prompts.length} themes, model=${MODEL}+nvidia, concurrency=${CONCURRENCY}`);
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