import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CATS_FILE = path.join(ROOT, 'design/categories.json');
const PROMPTS_DIR = path.join(ROOT, 'design/prompts');
const OUT_DIR = path.join(ROOT, 'public/data');

fs.rmSync(path.join(OUT_DIR, 'prompts'), { recursive: true, force: true });
fs.mkdirSync(path.join(OUT_DIR, 'prompts'), { recursive: true });

const cats = JSON.parse(fs.readFileSync(CATS_FILE, 'utf8'));

const index = [];
const categoriesSet = new Set();

for (const [id, meta] of Object.entries(cats)) {
  const promptPath = path.join(PROMPTS_DIR, `${id}.md`);
  const prompt = fs.existsSync(promptPath) ? fs.readFileSync(promptPath, 'utf8') : '';
  const ready = prompt.length > 500;
  index.push({
    id,
    name: meta.name ?? id,
    category: meta.category ?? 'Uncategorized',
    keywords: meta.keywords ?? [],
    era: meta.era ?? '',
    description: meta.description ?? '',
    ready,
    promptLength: prompt.length,
  });
  categoriesSet.add(meta.category ?? 'Uncategorized');
  fs.writeFileSync(path.join(OUT_DIR, 'prompts', `${id}.json`), JSON.stringify({ id, prompt }));
}

index.sort((a, b) => a.id.localeCompare(b.id));
const categories = [...categoriesSet].sort();

fs.writeFileSync(
  path.join(OUT_DIR, 'library-index.json'),
  JSON.stringify({ generatedAt: new Date().toISOString(), categories, index })
);

console.log(
  `[bake-data] ${index.length} themes, ${index.filter((i) => i.ready).length} ready, ${categories.length} categories; per-theme prompts in public/data/prompts`
);
console.log(`[bake-data] index size: ${Math.round(fs.statSync(path.join(OUT_DIR, 'library-index.json')).size / 1024)} KB`);