#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { createChecker, hash, launch } from './lib/darkcheck.mjs';

const DEMO_DIR = path.resolve('design/demos');
const OUT_FILE = path.resolve('design/dark-check.json');
const CONCURRENCY = Number(process.env.CHECK_CONCURRENCY ?? 4);
const FORCE = process.argv.includes('--force');

const results = !FORCE && fs.existsSync(OUT_FILE) ? JSON.parse(fs.readFileSync(OUT_FILE, 'utf8')) : {};
const files = fs.readdirSync(DEMO_DIR).filter((f) => f.endsWith('.html'));
const ids = files
  .map((f) => path.basename(f, '.html'))
  .filter((id) => results[id]?.src !== hash(fs.readFileSync(path.join(DEMO_DIR, `${id}.html`), 'utf8')));
for (const id of Object.keys(results)) if (!files.includes(`${id}.html`)) delete results[id];

const save = () =>
  fs.writeFileSync(OUT_FILE, JSON.stringify(Object.fromEntries(Object.entries(results).sort(([a], [b]) => a.localeCompare(b))), null, 2));

console.log(`[check-dark] ${ids.length} pending`);
if (!ids.length) {
  save();
  process.exit(0);
}

const browser = await launch();

let idx = 0;
let done = 0;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    const checker = await createChecker(browser);
    while (idx < ids.length) {
      const id = ids[idx++];
      try {
        const file = path.join(DEMO_DIR, `${id}.html`);
        results[id] = { src: hash(fs.readFileSync(file, 'utf8')), ...(await checker.check(file)) };
      } catch (err) {
        console.error(`FAIL  ${id}: ${String(err?.message ?? err).slice(0, 140)}`);
      }
      if (++done % 100 === 0) {
        save();
        console.log(`[check-dark] ${done}/${ids.length}`);
      }
    }
    await checker.close();
  })
);

await browser.close();
save();
const counts = Object.values(results).reduce((a, r) => ((a[r.how] = (a[r.how] ?? 0) + 1), a), {});
const missing = Object.entries(results).filter(([, r]) => !r.dark).map(([id]) => id);
console.log('[check-dark] done', counts);
if (missing.length) console.log(`[check-dark] no dark mode: ${missing.length}\n${missing.join('\n')}`);
