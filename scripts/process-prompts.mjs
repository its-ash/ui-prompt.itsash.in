#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const RAW_DIR = path.resolve('design/raw');
const OUT_DIR = path.resolve('design/prompts');
const STATE_FILE = path.resolve('.prompt-state.json');
const CONCURRENCY = Number(process.env.PROMPT_CONCURRENCY ?? 4);
const OLLAMA_URL = process.env.OLLAMA_URL ?? 'http://localhost:11434';
const MODEL = process.env.OLLAMA_MODEL ?? 'glm-5.3:cloud';
const AGENT_FILE = path.resolve('design/agent.md');

const systemPrompt = fs.readFileSync(AGENT_FILE, 'utf8') + `

---

### **7. LANGUAGE RULE (MANDATORY)**

The user request you receive will contain a theme name and a raw style specification. Process it by generating the finished coding-AI prompt as defined in Sections 1-6, but with these overrides:

* **Output Language:** ALWAYS write the generated prompt entirely in **English**, regardless of the language of the source specification. Translate any Portuguese/Spanish/other-language copy guidance, keywords, section names, and descriptions into English first.
* **Copy Locale Exception:** If the source spec explicitly demands user-facing copy in a non-English locale (e.g. pt-BR), convert that instruction to English: the generated prompt must instruct the coding AI to write all user-facing copy in English.
* Keep all CSS variable names, class names, and file names in English/ASCII.`;

fs.mkdirSync(OUT_DIR, { recursive: true });

const state = fs.existsSync(STATE_FILE)
  ? JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'))
  : { done: {}, failed: {} };

function saveState() {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

async function callModel(sysPrompt, userPrompt) {
  let lastErr;
  for (let attempt = 1; attempt <= 8; attempt++) {
    try {
      const res = await fetch(`${OLLAMA_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: sysPrompt },
            { role: 'user', content: userPrompt },
          ],
          stream: false,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText} ${(await res.text()).slice(0, 300)}`);
      const data = await res.json();
      const content = data.message?.content;
      if (!content || !content.trim()) throw new Error(`Empty completion: ${data.done_reason ?? 'unknown'}`);
      return content.trim();
    } catch (err) {
      lastErr = err;
      const rateLimited = /429/.test(String(err));
      if (attempt < 8) {
        await new Promise((r) => setTimeout(r, rateLimited ? attempt * 60000 : attempt * 10000));
      }
    }
  }
  throw lastErr;
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

function extractThemeName(txt, nameNoExt) {
  const h1 = txt.split('\n').find((l) => l.startsWith('# '));
  if (h1) return h1.slice(2).trim();
  return nameNoExt;
}

async function processFile(file) {
  const raw = fs.readFileSync(path.join(RAW_DIR, file), 'utf8');
  const block = extractAgentBlock(raw);
  if (!block) throw new Error('No "## AI Prompt" block found');
  const nameNoExt = path.basename(file, '.md');
  const themeName = extractThemeName(raw, nameNoExt)
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
  const out = await callModel(systemPrompt, userPrompt);
  const cleaned = cleanOutput(out);
  if (cleaned.length < 2000) throw new Error(`Output too small (${cleaned.length} chars)`);
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

const files = fs.readdirSync(RAW_DIR).filter((f) => f.endsWith('.md')).sort();

console.log(`[process-prompts] ${files.length} files, model=${MODEL}, concurrency=${CONCURRENCY}`);
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