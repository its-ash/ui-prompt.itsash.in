#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const RAW_DIR = path.resolve('design/raw');
const OUT_FILE = path.resolve('design/categories.json');
const STATE_FILE = path.resolve('.category-state.json');
const CONCURRENCY = 8;
const BASEURL = process.env.OPENROUTER_BASE_URL ?? 'https://openrouter.ai/api/v1';
const MODEL = process.env.PROMPT_MODEL ?? 'z-ai/glm-5.3-flash';
const API_KEY = process.env.OPENROUTER_API_KEY;

const CATEGORY_LIST = [
  'Art & Illustration',
  'Minimalism & Swiss',
  'Retro & Pop',
  'Glass & Soft UI',
  'Dark Tech & Cyber',
  'Brutalism & Raw',
  'Nature & Organic',
  'Luxury & Editorial',
  'Playful & Youth',
  'Corporate & SaaS',
  'Industrial & Mechanical',
  'Fantasy & Sci-Fi',
  'Typography-Driven',
  'Data & Engineering',
  'Cultural & Heritage',
];

const SYSTEM = `You categorize UI design themes. Given a theme name and short description, respond with ONLY a JSON object:
{"name": "<theme name in English>", "category": "<one category from the list>", "keywords": ["5-8 short English keywords describing the aesthetic"], "era": "<era like 2020s Modern, 1990s Retro, 1960s Psychedelic>", "description": "<one-sentence English description of the visual style>"}

Categories: ${CATEGORY_LIST.join(' | ')}

Rules:
- Respond in English. Translate theme names if given in another language.
- Pick exactly one category from the list.
- No markdown fences, no commentary, JSON only.`;

if (!API_KEY) {
  console.error('[categorize] OPENROUTER_API_KEY is not set');
  process.exit(1);
}

const files = fs.readdirSync(RAW_DIR).filter((f) => f.endsWith('.md')).sort();
const state = fs.existsSync(STATE_FILE)
  ? JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'))
  : { done: {}, failed: {} };
const output = fs.existsSync(OUT_FILE)
  ? JSON.parse(fs.readFileSync(OUT_FILE, 'utf8'))
  : {};

function summarize(raw) {
  const lines = raw.split('\n');
  const title = (lines.find((l) => l.startsWith('# ')) ?? '').slice(2).trim();
  const descLine = lines
    .slice(0, 30)
    .find((l) => l.length > 80 && !l.startsWith('#') && !l.startsWith('-') && !l.startsWith('!'));
  return { title, desc: (descLine ?? title).slice(0, 240) };
}

async function classify(file) {
  if (state.done[file] && output[path.basename(file, '.md')]) return;
  const raw = fs.readFileSync(path.join(RAW_DIR, file), 'utf8');
  const { title, desc } = summarize(raw);
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(`${BASEURL}/chat/completions`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: SYSTEM },
            { role: 'user', content: `Theme name: ${title || path.basename(file, '.md')}\nDescription: ${desc}` },
          ],
          temperature: 0.1,
          max_tokens: 500,
          response_format: { type: 'json_object' },
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      let text = data.choices?.[0]?.message?.content?.trim() ?? '';
      text = text.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
      const obj = JSON.parse(text);
      if (!obj.name || !obj.category || !CATEGORY_LIST.includes(obj.category)) {
        throw new Error(`bad category: ${obj.category}`);
      }
      output[path.basename(file, '.md')] = {
        name: obj.name,
        category: obj.category,
        keywords: Array.isArray(obj.keywords) ? obj.keywords.slice(0, 8) : [],
        era: obj.era ?? '',
        description: obj.description ?? '',
      };
      state.done[file] = true;
      delete state.failed[file];
      console.log(`ok    ${file} -> ${obj.category}`);
      return;
    } catch (err) {
      if (attempt === 4) {
        state.failed[file] = String(err?.message ?? err).slice(0, 300);
        console.error(`FAIL  ${file}: ${String(err?.message ?? err).slice(0, 120)}`);
      } else {
        await new Promise((r) => setTimeout(r, attempt * 3000));
      }
    }
  }
}

let idx = 0;
async function worker() {
  while (idx < files.length) {
    const f = files[idx++];
    try {
      await classify(f);
    } catch (err) {
      state.failed[f] = String(err?.message ?? err).slice(0, 300);
    }
    if (Object.keys(state.done).length % 50 === 0) {
      fs.writeFileSync(OUT_FILE, JSON.stringify(output, null, 2));
      fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
fs.writeFileSync(OUT_FILE, JSON.stringify(output, null, 2));
fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
console.log(`[categorize] done: ${Object.keys(output).length}/${files.length}, failed: ${Object.keys(state.failed).length}`);