import type { LibraryIndex } from '~/types';

const indexCache = '/data/library-index.json';
const promptCache = new Map<string, string | null>();
const ID_RE = /^[\w.-]+$/;

export async function fetchPrompt(id: string): Promise<string> {
  if (!ID_RE.test(id)) return '';
  if (import.meta.server) {
    const fs = await import('node:fs');
    const file = `${process.cwd()}/design/prompts/${id}.md`;
    return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
  }
  try {
    const res = await fetch(`/data/prompts/${id}.md`);
    return res.ok ? await res.text() : '';
  } catch {
    return '';
  }
}

export async function useLibrary(): Promise<Ref<LibraryIndex>> {
  const data = useState<LibraryIndex | null>('library', () => null);

  if (!data.value) {
    if (import.meta.server) {
      const fs = await import('node:fs');
      const file = `${process.cwd()}/.cache${indexCache}`;
      data.value = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : { generatedAt: '', categories: [], index: [] };
    } else {
      const res = await fetch(indexCache);
      if (!res.ok) throw new Error('library-index.json unavailable');
      data.value = (await res.json()) as LibraryIndex;
    }
  }

  return computed(() => data.value ?? { generatedAt: '', categories: [], index: [] }) as Ref<LibraryIndex>;
}

export async function usePrompt(id: string): Promise<Ref<string>> {
  const promptState = useState<string | null>(`prompt-${id}`, () => null);

  if (promptState.value === null) {
    if (import.meta.server) promptState.value = await fetchPrompt(id);
    else if (promptCache.has(id)) promptState.value = promptCache.get(id) ?? '';
    else {
      promptState.value = await fetchPrompt(id);
      promptCache.set(id, promptState.value);
    }
  }

  return computed(() => promptState.value ?? '') as Ref<string>;
}