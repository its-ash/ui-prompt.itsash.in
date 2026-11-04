import type { DesignItem } from '~/types';

export type Sort = 'match' | 'num' | 'new' | 'az' | 'za' | 'long';

export interface Row {
  item: DesignItem;
  num: number;
  cat: string;
  era: string;
  tags: string[];
  name: string;
  kw: string;
  meta: string;
  desc: string;
  words: string[];
}

export interface Hit {
  r: Row;
  s: number;
}

const DECADE = /\b(1[5-9]\d|20\d)\d/;

export const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const norm = (s: string) =>
  s
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();

export const decadeOf = (e: string) => {
  const m = DECADE.exec(e);
  return m ? Number(m[1]) * 10 : 0;
};

export const eraOf = (e: string) => {
  const d = decadeOf(e);
  return !d ? 'timeless' : d >= 1950 ? `${d}s` : 'pre-1950';
};

export const eraLabel = (s: string) => (s === 'pre-1950' ? 'Before 1950' : s === 'timeless' ? 'Timeless' : s);

export const eraRank = (s: string) => (s === 'timeless' ? -2 : s === 'pre-1950' ? -1 : Number.parseInt(s, 10));

export const tagLabel = (t: string) => t.replace(/-/g, ' ');

export function toRow(item: DesignItem): Row {
  const name = norm(item.name);
  const kw = norm(item.keywords.join(' | '));
  const meta = norm(`${item.category} ${item.era}`);
  return {
    item,
    num: Number.parseInt(item.id, 10) || 0,
    cat: slug(item.category),
    era: eraOf(item.era),
    tags: [...new Set(item.keywords.map(slug).filter(Boolean))],
    name,
    kw,
    meta,
    desc: norm(item.description),
    words: [...new Set(`${name} ${kw} ${meta}`.split(/[^a-z0-9]+/).filter((w) => w.length > 2))],
  };
}

export const tokens = (q: string) => norm(q).split(/\s+/).filter(Boolean).slice(0, 8);

const near = (a: string, b: string) => {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  while (i < a.length && a[i] === b[i]) i++;
  if (i === a.length && i === b.length) return true;
  return (
    a.slice(i + 1) === b.slice(i + 1) ||
    a.slice(i) === b.slice(i + 1) ||
    a.slice(i + 1) === b.slice(i) ||
    (a[i] === b[i + 1] && a[i + 1] === b[i] && a.slice(i + 2) === b.slice(i + 2))
  );
};

const fuzzy = (r: Row, t: string) =>
  t.length > 3 && r.words.some((w) => near(w, t) || (w.length > t.length && near(w.slice(0, t.length), t)));

export function score(r: Row, ts: string[]) {
  let s = 0;
  for (const t of ts) {
    const v =
      /^\d+$/.test(t) && r.num === Number(t)
        ? 20
        : r.name.startsWith(t) || r.name.includes(` ${t}`)
          ? 10
          : r.name.includes(t)
            ? 7
            : r.kw.includes(t)
              ? 5
              : r.meta.includes(t)
                ? 4
                : r.desc.includes(t)
                  ? 2
                  : fuzzy(r, t)
                    ? 1
                    : 0;
    if (!v) return 0;
    s += v;
  }
  return s;
}

const col = new Intl.Collator('en', { sensitivity: 'base', numeric: true });

export const sorters: Record<Sort, (a: Hit, b: Hit) => number> = {
  match: (a, b) => b.s - a.s || a.r.num - b.r.num,
  num: (a, b) => a.r.num - b.r.num,
  new: (a, b) => b.r.num - a.r.num,
  az: (a, b) => col.compare(a.r.item.name, b.r.item.name) || a.r.num - b.r.num,
  za: (a, b) => col.compare(b.r.item.name, a.r.item.name) || a.r.num - b.r.num,
  long: (a, b) => b.r.item.promptLength - a.r.item.promptLength || a.r.num - b.r.num,
};

export const SORTS: { value: Sort; label: string }[] = [
  { value: 'match', label: 'Best match' },
  { value: 'num', label: 'Number' },
  { value: 'new', label: 'Newest first' },
  { value: 'az', label: 'Name A to Z' },
  { value: 'za', label: 'Name Z to A' },
  { value: 'long', label: 'Longest prompt' },
];
