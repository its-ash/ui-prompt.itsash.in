import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CATS_FILE = path.join(ROOT, 'design/categories.json');
const PROMPTS_DIR = path.join(ROOT, 'design/prompts');
const DEMOS_DIR = path.join(ROOT, 'design/demos');
const THUMBS_DIR = path.join(ROOT, 'design/thumbs');
const OUT_DIR = path.join(ROOT, 'public/data');
const SITE_URL = 'https://ui-prompt.itsash.in';

fs.rmSync(path.join(OUT_DIR, 'prompts'), { recursive: true, force: true });
fs.rmSync(path.join(OUT_DIR, 'demos'), { recursive: true, force: true });
fs.rmSync(path.join(OUT_DIR, 'thumbs'), { recursive: true, force: true });
fs.mkdirSync(path.join(OUT_DIR, 'prompts'), { recursive: true });
fs.mkdirSync(path.join(OUT_DIR, 'demos'), { recursive: true });
fs.mkdirSync(path.join(OUT_DIR, 'thumbs'), { recursive: true });

const cats = JSON.parse(fs.readFileSync(CATS_FILE, 'utf8'));

const index = [];
const categoriesSet = new Set();

for (const [id, meta] of Object.entries(cats)) {
  const promptPath = path.join(PROMPTS_DIR, `${id}.md`);
  const prompt = fs.existsSync(promptPath) ? fs.readFileSync(promptPath, 'utf8') : '';
  const demoPath = path.join(DEMOS_DIR, `${id}.html`);
  const demo = fs.existsSync(demoPath) ? fs.readFileSync(demoPath, 'utf8') : '';
  const thumbPath = path.join(THUMBS_DIR, `${id}.jpg`);
  const hasThumb = demo.length > 3000 && fs.existsSync(thumbPath);
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
    hasDemo: demo.length > 3000,
    hasThumb,
  });
  categoriesSet.add(meta.category ?? 'Uncategorized');
  if (prompt) fs.writeFileSync(path.join(OUT_DIR, 'prompts', `${id}.json`), JSON.stringify({ id, prompt }));
  if (demo) fs.writeFileSync(path.join(OUT_DIR, 'demos', `${id}.html`), demo);
  if (hasThumb) fs.copyFileSync(thumbPath, path.join(OUT_DIR, 'thumbs', `${id}.jpg`));
}

index.sort((a, b) => a.id.localeCompare(b.id));
const categories = [...categoriesSet].sort();

fs.writeFileSync(
  path.join(OUT_DIR, 'library-index.json'),
  JSON.stringify({ generatedAt: new Date().toISOString(), categories, index })
);

const today = new Date().toISOString().slice(0, 10);
const urls = [`${SITE_URL}/`, ...index.map((i) => `${SITE_URL}/design/${encodeURIComponent(i.id)}/`)];
fs.writeFileSync(
  path.join(ROOT, 'public/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u, n) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod><priority>${n ? '0.8' : '1.0'}</priority></url>`)
    .join('\n')}\n</urlset>\n`
);
fs.writeFileSync(path.join(ROOT, 'public/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(
  `[bake-data] ${index.length} themes, ${index.filter((i) => i.ready).length} ready, ${index.filter((i) => i.hasDemo).length} demos, ${index.filter((i) => i.hasThumb).length} thumbs, ${categories.length} categories; per-theme prompts in public/data/prompts`
);
console.log(`[bake-data] index size: ${Math.round(fs.statSync(path.join(OUT_DIR, 'library-index.json')).size / 1024)} KB`);