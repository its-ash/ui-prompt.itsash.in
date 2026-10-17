import process from 'node:process';
import { Agent, fetch } from 'undici';

// NVIDIA can queue long prompts for minutes before sending headers; Node's default 300s headers timeout aborted those as 'fetch failed'.
const dispatcher = new Agent({ headersTimeout: 0, bodyTimeout: 600000, connectTimeout: 30000 });

// LLM_URL/LLM_KEY/LLM_MODELS point every script at any OpenAI-compatible router; NVIDIA is the fallback.
const NVIDIA_URL = `${(process.env.LLM_URL ?? 'https://integrate.api.nvidia.com/v1').replace(/\/+$/, '')}/chat/completions`;
export const NVIDIA_KEY = process.env.LLM_KEY ?? process.env.NVIDIA_API_KEY ?? '';
export const MODELS = (process.env.LLM_MODELS ?? process.env.NVIDIA_MODELS ?? 'nvidia/nemotron-3-super-120b-a12b,openai/gpt-oss-20b')
  .split(',')
  .map((m) => m.trim())
  .filter(Boolean);
// Router models think until the 300s gateway cut-off; LLM_REASONING=none makes them answer directly.
const REASONING = process.env.LLM_REASONING ? { reasoning_effort: process.env.LLM_REASONING } : {};
const TIMEOUT_MS = Number(process.env.DEMO_TIMEOUT_MS ?? 1500000);

export function requireKey(tag) {
  if (NVIDIA_KEY) return;
  console.error(`[${tag}] LLM_KEY or NVIDIA_API_KEY is not set (add it to .env)`);
  process.exit(1);
}

async function callNvidia(system, model, userPrompt, maxTokens, timeoutMs = TIMEOUT_MS) {
  const res = await fetch(NVIDIA_URL, {
    dispatcher,
    method: 'POST',
    headers: { Authorization: `Bearer ${NVIDIA_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: userPrompt },
      ],
      max_tokens: maxTokens,
      temperature: 0.5,
      ...REASONING,
      stream: true,
    }),
    signal: AbortSignal.timeout(timeoutMs),
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

export async function callModel(system, userPrompt, accept = looksLikeHtml, maxTokens = 16000, models = MODELS, timeoutMs = TIMEOUT_MS, clean = cleanHtml) {
  let lastErr;
  for (let attempt = 1; attempt <= 6; attempt++) {
    const model = models[(attempt - 1) % models.length];
    try {
      const out = clean(await callNvidia(system, model, userPrompt, maxTokens, timeoutMs));
      if (accept(out)) return out;
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

export function cleanHtml(text) {
  let out = text.trim();
  const fence = out.match(/^```(?:html)?\n?([\s\S]*?)\n?```$/);
  if (fence) out = fence[1].trim();
  const doc = out.search(/<!DOCTYPE html|<html/i);
  if (doc > 0) out = out.slice(doc);
  return out;
}

export function looksLikeHtml(out) {
  return (
    /<!DOCTYPE html/i.test(out) &&
    /<\/html>/i.test(out) &&
    /<title>[^<]*<\/title>/i.test(out) &&
    /<style[\s>]/i.test(out) &&
    !/<link[^>]+href=["'](?!https?:)[^"']+\.css/i.test(out) &&
    out.length > 3000
  );
}
