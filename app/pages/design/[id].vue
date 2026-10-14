<script setup lang="ts">
const route = useRoute();
const id = computed(() => String(route.params.id));

const library = await useLibrary();
const meta = computed(() => library.value.index.find((i) => i.id === id.value));
const { data: promptData } = await useAsyncData(`prompt-${id.value}`, () => usePromptFetch(id.value));
const prompt = computed(() => promptData.value ?? '');
const notFound = computed(() => library.value.index.length > 0 && !meta.value);
const demoSrc = computed(() => `/data/demos/${id.value}.html`);
const hasDemo = computed(() => meta.value?.hasDemo ?? false);

const pane = ref<'demo' | 'prompt'>('demo');
const isNarrow = ref(false);

onMounted(() => {
  const mq = window.matchMedia('(max-width: 860px)');
  isNarrow.value = mq.matches;
  const cb = (e: MediaQueryListEvent) => (isNarrow.value = e.matches);
  mq.addEventListener('change', cb);
  onUnmounted(() => mq.removeEventListener('change', cb));
});

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
      <div class="vv__wrap" :class="{ 'vv__wrap--nodemo': !hasDemo }">
        <!-- mobile pane switch -->
        <div v-if="hasDemo" class="vv__panetoggle" role="tablist" aria-label="View mode">
          <button
            type="button"
            role="tab"
            class="vv__ptab mono"
            :class="{ 'vv__ptab--on': pane === 'demo' }"
            :aria-selected="pane === 'demo'"
            :disabled="!hasDemo"
            @click="pane = 'demo'"
          >
            Preview
          </button>
          <button
            type="button"
            role="tab"
            class="vv__ptab mono"
            :class="{ 'vv__ptab--on': pane === 'prompt' }"
            :aria-selected="pane === 'prompt'"
            @click="pane = 'prompt'"
          >
            Prompt
          </button>
        </div>

        <!-- left: live demo -->
        <section v-show="hasDemo && (pane === 'demo' || !isNarrow)" class="vv__demo" aria-label="Theme demo preview">
          <div class="vv__demobar">
            <span class="vv__demourl mono">{{ meta.name }} demo</span>
            <a :href="demoSrc" target="_blank" rel="noopener" class="vv__open" aria-label="Open demo in new tab">
              <span class="material-symbols-rounded" aria-hidden="true">open_in_new</span>
            </a>
          </div>
          <iframe v-if="hasDemo" :src="demoSrc" class="vv__frame" title="Theme demo page" loading="lazy"></iframe>
          <div v-else class="vv__frame vv__frame--empty">
            <span class="mono">demo generating</span>
          </div>
        </section>

        <!-- right: prompt -->
        <aside v-show="pane === 'prompt' || !isNarrow" class="vv__side" aria-label="Prompt">
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

          <pre class="vv__prompt mono">{{ prompt || 'Prompt is being generated.' }}</pre>

          <div class="vv__actions">
            <button type="button" class="vv__copy" :disabled="!meta.ready" @click="copy">
              <span class="material-symbols-rounded" aria-hidden="true">
                {{ copied ? 'check' : 'content_copy' }}
              </span>
              {{ copied ? 'Copied' : 'Copy prompt' }}
            </button>
          </div>
        </aside>
      </div>
    </template>
  </div>
</template>

<style scoped>
.vv {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.vv__wrap {
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1.25rem 1.25rem;
}

.vv__panetoggle {
  display: none;
}

/* left: demo */

.vv__demo {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--bg-raised);
  overflow: hidden;
}

.vv__demobar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  height: 40px;
  padding: 0 0.375rem 0 0.875rem;
  border-bottom: 1px solid var(--border);
}

.vv__demourl {
  font-size: 0.6875rem;
  color: var(--text-faint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vv__open {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  color: var(--text-faint);
  transition:
    color var(--transition-fast),
    background var(--transition-fast);
}

.vv__open .material-symbols-rounded {
  font-size: 18px;
}

@media (hover: hover) and (pointer: fine) {
  .vv__open:hover {
    color: var(--text);
    background: var(--bg-hover);
  }
}

.vv__frame {
  flex: 1;
  width: 100%;
  min-height: 0;
  border: 0;
  background: #fff;
}

.vv__frame--empty {
  display: grid;
  place-items: center;
  background: var(--bg);
  color: var(--text-faint);
  font-size: 0.75rem;
}

/* right: prompt */

.vv__side {
  width: 440px;
  flex-shrink: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.vv__wrap--nodemo .vv__side {
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
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
}

.vv__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.5rem 0;
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
  text-align: right;
}

.vv__prompt {
  flex: 1;
  min-height: 0;
  overflow: auto;
  overscroll-behavior: contain;
  padding: 1rem 1.125rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--bg-raised);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font-family: var(--font-mono);
  font-size: 0.7188rem;
  line-height: 1.7;
  color: var(--text-dim);
}

.vv__actions {
  display: flex;
}

.vv__copy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  min-height: 44px;
  border: 0;
  border-radius: var(--radius-sm);
  background: var(--accent);
  color: var(--accent-ink);
  font: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    filter var(--transition-fast),
    transform var(--transition-fast);
}

.vv__copy:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (hover: hover) and (pointer: fine) {
  .vv__copy:not(:disabled):hover {
    filter: brightness(1.06);
  }
}

.vv__copy:not(:disabled):active {
  transform: scale(0.98);
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

.vv__backhome {
  color: var(--text);
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 1100px) {
  .vv__side {
    width: 360px;
  }
}

@media (max-width: 860px) {
  .vv__wrap {
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.75rem 1rem 1rem;
  }

  .vv__panetoggle {
    display: flex;
    gap: 0.25rem;
    padding: 0.25rem;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--bg-raised);
    align-self: flex-start;
  }

  .vv__ptab {
    min-height: 36px;
    padding: 0 1rem;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: var(--text-faint);
    font-size: 0.75rem;
    cursor: pointer;
  }

  .vv__ptab--on {
    background: var(--bg-hover);
    color: var(--text);
  }

  .vv__ptab:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .vv__side,
  .vv__wrap--nodemo .vv__side {
    width: 100%;
    flex: 1;
  }

  .vv__name {
    font-size: 1.125rem;
  }
}
</style>
