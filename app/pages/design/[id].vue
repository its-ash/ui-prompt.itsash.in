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
      <div class="vv__wrap">
        <!-- mobile pane switch -->
        <div class="vv__panetoggle" role="tablist" aria-label="View mode">
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
