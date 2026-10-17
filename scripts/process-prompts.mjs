#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { MODELS, callModel, requireKey } from './lib/nvidia.mjs';

const RAW_DIR = path.resolve('design/raw');
const OUT_DIR = path.resolve('design/prompts');
const STATE_FILE = path.resolve('.prompt-state.json');
const CONCURRENCY = Number(process.env.PROMPT_CONCURRENCY ?? 4);
const AGENT_FILE = path.resolve('design/agent.md');

const systemPrompt = fs.readFileSync(AGENT_FILE, 'utf8') + `

---

### **7. LANGUAGE RULE (MANDATORY)**

The user request you receive will contain a theme name and a raw style specification. Process it by generating the finished coding-AI prompt as defined in Sections 1-6, but with these overrides:

* **Output Language:** ALWAYS write the generated prompt entirely in **English**, regardless of the language of the source specification. Translate any Portuguese/Spanish/other-language copy guidance, keywords, section names, and descriptions into English first.
* **Copy Locale Exception:** If the source spec explicitly demands user-facing copy in a non-English locale (e.g. pt-BR), convert that instruction to English: the generated prompt must instruct the coding AI to write all user-facing copy in English.
* Keep all CSS variable names, class names, and file names in English/ASCII.`;

requireKey('process-prompts');
fs.mkdirSync(OUT_DIR, { recursive: true });

const state = fs.existsSync(STATE_FILE)
  ? JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'))
  : { done: {}, failed: {} };

function saveState() {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function cleanOutput(text) {
  let out = text.trim();
  const fenceMatch = out.match(/^```(?:markdown|md)?\n([\s\S]*?)\n?```$/);
  if (fenceMatch) out = fenceMatch[1];
  return out.trim();
}

function extractAgentBlock(raw) {
  const lines = raw.split('\n');
  const start = lines.findIndex((l) => /^Act as a Senior Frontend Engineer/.test(l));
  if (start === -1) return null;
  let end = -1;
  for (let i = start + 1; i < lines.length; i++) {
    if (lines[i] === '```') {
      end = i;
      break;
    }
  }
  if (end === -1) return null;
  return lines.slice(start, end).join('\n').trim() + '\n';
}

// Style-reference specs (no agent block): keep everything above the Quick Start code dumps.
function extractStyleSpec(raw) {
  if (!/^## Agent Prompt Guide/m.test(raw)) return null;
  const cut = raw.search(/^## (Similar Brands|Quick Start)/m);
  return (cut === -1 ? raw : raw.slice(0, cut)).trim() + '\n';
}

const BRAND_RULE = `\n\nThis spec describes the visual style of a real brand. The generated prompt must reuse the style only: tell the coding AI to invent a fictional brand name, product and copy, and to never use the real brand name, logo, trademarks or product names in the page.`;

function extractThemeName(txt, nameNoExt) {
  const h1 = txt.split('\n').find((l) => l.startsWith('# '));
  if (h1) return h1.slice(2).trim();
  return nameNoExt;
}

async function processFile(file) {
  const raw = fs.readFileSync(path.join(RAW_DIR, file), 'utf8');
  const style = extractStyleSpec(raw);
  const block = extractAgentBlock(raw) ?? (style && style + BRAND_RULE);
  if (!block) throw new Error('No agent block or style spec found');
  const nameNoExt = path.basename(file, '.md');
  const themeName = extractThemeName(raw, nameNoExt)
    .replace(/\s*[—:]\s*Style Reference\s*$/i, '')
    .replace(/\s*[:—]\s*/g, ' - ')
    .replace(/[\r\n]+/g, ' ')
    .trim();

  const outName = nameNoExt + '.md';
  const outPath = path.join(OUT_DIR, outName);

  if (state.done[file] && fs.existsSync(outPath) && fs.statSync(outPath).size > 2000) {
    fs.rmSync(path.join(RAW_DIR, file), { force: true });
    console.log(`skip  ${file} (already done)`);
    return;
  }

  const userPrompt =
    block +
    `\n\nUser request: Create a complete Landing Page.\n- Landing Page Theme: ${themeName}\n- Sections to add: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links`;
  const cleaned = cleanOutput(await callModel(systemPrompt, userPrompt, (t) => t.length >= 4500, 32000, MODELS, undefined, cleanOutput));
  if (cleaned.length < 4500) throw new Error(`Output too small (${cleaned.length} chars)`);
  fs.writeFileSync(outPath, cleaned + '\n');
  fs.rmSync(path.join(RAW_DIR, file), { force: true });
  state.done[file] = {
    at: new Date().toISOString(),
    bytes: cleaned.length,
    name: themeName,
    source: nameNoExt,
  };
  delete state.failed[file];
  console.log(`ok    ${file} -> ${outName} (${cleaned.length} bytes)`);
}

const ONLY = process.env.PROMPT_ONLY?.split(',').map((s) => s.trim());
const files = fs.readdirSync(RAW_DIR).filter((f) => f.endsWith('.md') && (!ONLY || ONLY.includes(f.slice(0, -3)))).sort();

console.log(`[process-prompts] ${files.length} files, models=${MODELS.join('|')}, concurrency=${CONCURRENCY}`);
let idx = 0;

async function worker() {
  while (idx < files.length) {
    const file = files[idx++];
    try {
      await processFile(file);
      saveEvery(10);
    } catch (err) {
      const msg = String(err?.message ?? err).slice(0, 500);
      state.failed[file] = msg;
      console.error(`FAIL  ${file}: ${msg.slice(0, 160)}`);
    }
  }
}

let saved = 0;
function saveEvery(n) {
  if (++saved % n === 0) saveState();
}

await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
saveState();
const failures = Object.keys(state.failed).length;
console.log(`[process-prompts] finished: ${Object.keys(state.done).length} done, ${failures} failed`);
if (failures > 0) {
  console.error('[process-prompts] failed files listed in .prompt-state.json');
  process.exitCode = 1;
}