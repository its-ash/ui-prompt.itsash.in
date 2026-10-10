<script setup lang="ts">
const route = useRoute();
const id = computed(() => String(route.params.id));

const library = await useLibrary();
const meta = computed(() => library.value.index.find((i) => i.id === id.value));
const { data: promptData } = await useAsyncData(`prompt-${id.value}`, () => usePromptFetch(id.value));
const prompt = computed(() => promptData.value ?? '');
const notFound = computed(() => library.value.index.length > 0 && !meta.value);

async function usePromptFetch(themeId: string): Promise<string> {
  if (import.meta.server) {
    const fs = await import('node:fs');
    const file = `${process.cwd()}/public/data/prompts/${themeId}.json`;
    return fs.existsSync(file) ? (JSON.parse(fs.readFileSync(file, 'utf8')) as { prompt: string }).prompt : '';
  }
  try {
    const res = await fetch(`/data/prompts/${themeId}.json`);
    return res.ok ? ((await res.json()) as { prompt: string }).prompt : '';
  } catch {
    return '';
  }
}

const copied = ref(false);

async function copy() {
  if (!prompt.value) return;
  const { copyText } = await import('~/composables/useCopy');
  const ok = await copyText(prompt.value);
  if (ok) {
    copied.value = true;
    setTimeout(() => (copied.value = false), 1800);
  }
}

const escHandler = (e: KeyboardEvent) => {
  if (e.key === 'Escape') navigateTo('/');
};

onMounted(() => window.addEventListener('keydown', escHandler));
onUnmounted(() => window.removeEventListener('keydown', escHandler));

const promptSize = computed(() => {
  const len = prompt.value.length;
  if (!len) return '';
  const kb = len / 1024;
  return `${kb.toFixed(1)} KB`;
});

const words = computed(() => (prompt.value ? prompt.value.trim().split(/\s+/).length : 0));

useHead(() => ({
  title: meta.value ? `${meta.value.name} - PromptDeck` : 'PromptDeck',
}));
</script>

<template>
  <div class="vv">
    <SiteHeader />

    <div v-if="notFound" class="vv__missing" role="alert">
      <span class="material-symbols-rounded" aria-hidden="true">search_off</span>
      <p>That theme is not in the library.</p>
      <NuxtLink to="/" class="vv__backhome">Back to library</NuxtLink>
    </div>

    <template v-else-if="meta">
      <div class="vv__wrap">
        <aside class="vv__side">
          <NuxtLink to="/" class="vv__back" aria-label="Back to library">
            <span class="material-symbols-rounded" aria-hidden="true">arrow_back</span>
            Library
          </NuxtLink>

          <h1 class="vv__name">{{ meta.name }}</h1>
          <p class="vv__desc">{{ meta.description }}</p>

          <dl class="vv__meta">
            <div class="vv__row">
              <dt>Category</dt>
              <dd>{{ meta.category }}</dd>
            </div>
            <div class="vv__row">
              <dt>Era</dt>
              <dd>{{ meta.era || '-' }}</dd>
            </div>
            <div class="vv__row">
              <dt>Prompt</dt>
              <dd class="mono">{{ promptSize }} &middot; {{ words }} words</dd>
            </div>
          </dl>

          <ul v-if="meta.keywords.length" class="vv__tags" aria-label="Keywords">
            <li v-for="kw in meta.keywords" :key="kw">{{ kw }}</li>
          </ul>

          <div class="vv__actions">
            <button type="button" class="vv__copy" :disabled="!meta.ready" @click="copy">
              <span class="material-symbols-rounded" aria-hidden="true">
                {{ copied ? 'check' : 'content_copy' }}
              </span>
              {{ copied ? 'Copied' : 'Copy prompt' }}
            </button>
            <span v-if="!meta.ready" class="vv__pending mono">generating...</span>
          </div>
        </aside>

        <div class="vv__mainwrap">
          <article class="vv__paper" aria-label="Prompt full view">
            <pre class="vv__prompt">{{ prompt || 'Prompt is being generated. Check back soon.' }}</pre>
          </article>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.vv {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.vv__wrap {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.25rem 3rem;
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
}

/* side */

.vv__side {
  width: 280px;
  flex-shrink: 0;
  position: sticky;
  top: 92px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.vv__back {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  width: fit-content;
  font-size: 0.8125rem;
  color: var(--text-faint);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.vv__back .material-symbols-rounded {
  font-size: 18px;
}

@media (hover: hover) and (pointer: fine) {
  .vv__back:hover {
    color: var(--text);
  }
}

.vv__back:active {
  transform: scale(0.98);
}

.vv__name {
  font-size: 1.375rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.12;
  text-wrap: balance;
}

.vv__desc {
  font-size: 0.8438rem;
  color: var(--text-dim);
  line-height: 1.55;
}

.vv__meta {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
  margin: 0;
}

.vv__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.5625rem 0;
  border-bottom: 1px solid var(--border);
}

.vv__row:last-child {
  border-bottom: none;
}

.vv__row dt {
  font-size: 0.75rem;
  color: var(--text-faint);
}

.vv__row dd {
  font-size: 0.7813rem;
  color: var(--text);
  text-align: right;
  margin: 0;
}

.vv__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  list-style: none;
}

.vv__tags li {
  font-size: 0.6875rem;
  color: var(--text-faint);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.1875rem 0.5625rem;
}

.vv__actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.vv__copy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  min-height: 44px;
  border-radius: var(--radius-sm);
  background: var(--accent);
  color: var(--accent-ink);
  font-size: 0.875rem;
  font-weight: 600;
  transition:
    filter var(--transition-fast),
    transform var(--transition-fast);
}

@media (hover: hover) and (pointer: fine) {
  .vv__copy:hover {
    filter: brightness(1.06);
  }
}

.vv__copy:active {
  transform: scale(0.98);
}

.vv__pending {
  font-size: 0.6875rem;
  color: var(--text-faint);
  text-align: center;
}

/* paper */

.vv__mainwrap {
  flex: 1;
  min-width: 0;
  display: flex;
}

.vv__paper {
  flex: 1;
  min-width: 0;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--bg-raised);
  overflow: hidden;
  display: flex;
}

.vv__prompt {
  flex: 1;
  margin: 0;
  padding: 1.75rem 2rem;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: anywhere;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  line-height: 1.7;
  color: var(--text-dim);
}

/* states */

.vv__missing {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 6rem 1.5rem;
  color: var(--text-dim);
}

.vv__missing .material-symbols-rounded {
  font-size: 32px;
  color: var(--text-faint);
}

.vv__missing p {
  font-size: 0.9063rem;
}

.vv__backhome {
  color: var(--text);
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 860px) {
  .vv__wrap {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.25rem 1rem 2rem;
  }

  .vv__side {
    position: static;
    width: 100%;
  }

  .vv__copy {
    position: sticky;
    bottom: 0.75rem;
    z-index: 5;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  }

  .vv__prompt {
    padding: 1.25rem;
    font-size: 0.71875rem;
  }
}
</style>