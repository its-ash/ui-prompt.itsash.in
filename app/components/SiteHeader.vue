<script setup lang="ts">
const props = withDefaults(defineProps<{ search?: boolean }>(), { search: true });
const { theme, toggle } = useTheme();
const q = ref('');
const field = useTemplateRef<HTMLInputElement>('field');

const submit = () => {
  const v = q.value.trim().slice(0, 80);
  navigateTo({ path: '/', query: v ? { q: v } : {} });
};

const typing = (t: EventTarget | null) =>
  t instanceof HTMLElement && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));

const onKey = (e: KeyboardEvent) => {
  if (!props.search || !field.value) return;
  if ((e.key === '/' && !typing(e.target)) || (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey))) {
    e.preventDefault();
    field.value.focus();
    field.value.select();
  }
};

onMounted(() => window.addEventListener('keydown', onKey));
onBeforeUnmount(() => window.removeEventListener('keydown', onKey));
</script>

<template>
  <header class="hd">
    <NuxtLink to="/" class="hd__brand" aria-label="UI-Prompt, library home">
      <img class="hd__mark" src="/favicon.svg" width="22" height="22" alt="" />
      <span class="hd__word">UI<em>-Prompt</em></span>
    </NuxtLink>

    <form v-if="search" class="hd__search" role="search" @submit.prevent="submit">
      <label for="hd-q" class="sr-only">Search the library</label>
      <span class="material-symbols-rounded hd__icon" aria-hidden="true">search</span>
      <input
        id="hd-q"
        ref="field"
        v-model="q"
        class="hd__input"
        type="search"
        placeholder="Search the library"
        autocomplete="off"
        maxlength="80"
        enterkeyhint="search"
      />
      <kbd class="hd__kbd mono" aria-hidden="true">/</kbd>
    </form>

    <button
      class="hd__mode"
      type="button"
      aria-label="Dark theme"
      :aria-pressed="theme === 'dark'"
      data-allow-mismatch="attribute"
      @click="toggle"
    >
      <span class="material-symbols-rounded hd__sun" aria-hidden="true">light_mode</span>
      <span class="material-symbols-rounded hd__moon" aria-hidden="true">dark_mode</span>
    </button>
  </header>
</template>

<style scoped>
.hd {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 60px;
  padding: 0 clamp(1rem, 3vw, 2rem);
  border-bottom: 1px solid var(--border);
  background: var(--bg);
}

.hd__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  min-height: 44px;
  margin-right: auto;
  text-decoration: none;
  color: var(--text);
}

.hd__mark {
  display: block;
  width: 22px;
  height: 22px;
  image-rendering: pixelated;
}

.hd__word {
  font-family: var(--font-display);
  font-size: 1.5rem;
  line-height: 1;
  letter-spacing: -0.01em;
}

.hd__word em {
  color: var(--accent);
}

.hd__search {
  flex: 0 1 26rem;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 44px;
  padding: 0 0.5rem 0 0.75rem;
  border: 1px solid var(--border-ui);
  border-radius: var(--radius-md);
  background: var(--bg-raised);
  transition: border-color var(--transition-fast);
}

.hd__search:focus-within {
  border-color: var(--text);
  outline: 2px solid var(--accent);
  outline-offset: 1px;
}

.hd__icon {
  font-size: 20px;
  color: var(--text-faint);
}

.hd__input {
  flex: 1;
  min-width: 0;
  height: 100%;
  border: 0;
  background: none;
  font-size: 0.9375rem;
}

.hd__input:focus {
  outline: none;
}

.hd__input::placeholder {
  color: var(--text-faint);
}

.hd__input::-webkit-search-cancel-button {
  appearance: none;
}

.hd__kbd {
  display: grid;
  place-items: center;
  min-width: 1.5rem;
  height: 1.5rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  color: var(--text-faint);
}

.hd__mode {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--border-ui);
  border-radius: var(--radius-md);
  color: var(--text);
  transition:
    background-color var(--transition-fast),
    transform var(--transition-fast);
}

.hd__mode .material-symbols-rounded {
  font-size: 20px;
}

.hd__sun {
  display: none;
}

html[data-theme='dark'] .hd__sun {
  display: block;
}

html[data-theme='dark'] .hd__moon {
  display: none;
}

@media (prefers-color-scheme: dark) {
  html:not([data-theme='light']) .hd__sun {
    display: block;
  }

  html:not([data-theme='light']) .hd__moon {
    display: none;
  }
}

@media (hover: hover) and (pointer: fine) {
  .hd__mode:hover {
    background: var(--bg-hover);
  }
}

.hd__mode:active {
  transform: scale(0.95);
}

@media (max-width: 640px) {
  .hd {
    gap: 0.5rem;
  }

  .hd__kbd {
    display: none;
  }

  .hd__search {
    flex-basis: 12rem;
  }
}

@media (max-width: 420px) {
  .hd__word {
    font-size: 1.3rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hd__mode:active {
    transform: none;
  }
}
</style>
