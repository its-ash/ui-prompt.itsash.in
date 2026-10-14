<script setup lang="ts">
import type { LibraryIndex } from '~/types';

const { theme, toggle } = useTheme();
defineProps<{ count?: number }>();

const search = useState('search', () => '');
const category = useState('category', () => 'All');
const library = useState<LibraryIndex | null>('library');
const route = useRoute();

const options = computed(() => {
  const index = library.value?.index ?? [];
  const counts = new Map<string, number>();
  for (const i of index) counts.set(i.category, (counts.get(i.category) ?? 0) + 1);
  return [
    { value: 'All', label: `All categories (${index.length})` },
    ...(library.value?.categories ?? []).map((c) => ({ value: c, label: `${c} (${counts.get(c) ?? 0})` })),
  ];
});

function onSearch() {
  if (route.path !== '/') navigateTo('/');
}
</script>

<template>
  <header class="hd">
    <div class="hd__bar">
      <NuxtLink to="/" class="hd__brand" aria-label="UI-Prompt home">
        <img class="hd__mark" src="/favicon.svg" width="18" height="18" alt="" />
        <span class="hd__name">UI-Prompt</span>
        <span v-if="count" class="hd__count mono">{{ count }}</span>
      </NuxtLink>
      <form class="hd__search" role="search" @submit.prevent="onSearch">
        <span class="material-symbols-rounded hd__sicon" aria-hidden="true">search</span>
        <input
          v-model="search"
          type="search"
          class="hd__input"
          placeholder="Search themes or keywords"
          aria-label="Search themes"
          maxlength="80"
          @input="onSearch"
        />
        <span class="hd__sep" aria-hidden="true"></span>
        <label class="hd__cat">
          <span class="sr-only">Category</span>
          <select v-model="category" class="hd__select mono" aria-label="Filter by category" @change="onSearch">
            <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
          </select>
          <span class="material-symbols-rounded hd__caret" aria-hidden="true">expand_more</span>
        </label>
      </form>
      <div class="hd__right">
        <button
          class="hd__mode"
          type="button"
          :aria-pressed="theme === 'dark'"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggle"
        >
          <span class="material-symbols-rounded" aria-hidden="true">
            {{ theme === 'dark' ? 'light_mode' : 'dark_mode' }}
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hd {
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--bg) 86%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

@media (prefers-reduced-transparency: reduce) {
  .hd {
    background: var(--bg);
    backdrop-filter: none;
  }
}

.hd__bar {
  padding: 0 1.25rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.hd__search {
  flex: 1;
  min-width: 0;
  max-width: 40rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 38px;
  padding: 0 0.875rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--bg-raised);
  color: var(--text-faint);
  transition: border-color var(--transition-fast);
}

.hd__search:focus-within {
  border-color: var(--border-strong);
  color: var(--text);
}

.hd__sicon {
  font-size: 18px;
}

.hd__input {
  flex: 1;
  min-width: 0;
  height: 100%;
  border: none;
  background: none;
  color: var(--text);
  font-family: inherit;
  font-size: 0.8438rem;
}

.hd__input:focus {
  outline: none;
}

.hd__input::placeholder {
  color: var(--text-faint);
}

.hd__sep {
  width: 1px;
  height: 18px;
  background: var(--border);
  flex-shrink: 0;
}

.hd__cat {
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 0;
  max-width: 45%;
  height: 100%;
}

.hd__select {
  appearance: none;
  width: 100%;
  height: 100%;
  padding: 0 1.375rem 0 0.25rem;
  border: none;
  background: none;
  color: var(--text-dim);
  font-size: 0.75rem;
  text-overflow: ellipsis;
  cursor: pointer;
}

.hd__select:focus-visible {
  outline: 2px solid var(--border-strong);
  outline-offset: 2px;
  border-radius: 4px;
}

.hd__select option {
  background: var(--bg-raised);
  color: var(--text);
}

.hd__caret {
  position: absolute;
  right: 0;
  font-size: 18px;
  pointer-events: none;
  color: var(--text-faint);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.hd__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text);
}

.hd__mark {
  width: 18px;
  height: 18px;
  display: block;
  image-rendering: pixelated;
}

.hd__name {
  font-size: 0.9063rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.hd__count {
  font-size: 0.6875rem;
  color: var(--text-faint);
  margin-left: 0.25rem;
}

.hd__right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.hd__demo {
  display: inline-flex;
  align-items: center;
  height: 34px;
  padding: 0 0.875rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  font-size: 0.8125rem;
  color: var(--text-dim);
  text-decoration: none;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    background var(--transition-fast);
}

.hd__demo:hover {
  color: var(--text);
  border-color: var(--border-strong);
  background: var(--bg-hover);
}

.hd__demo:active {
  transform: scale(0.98);
}

.hd__mode {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text-dim);
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);
}

.hd__mode:hover {
  color: var(--text);
  border-color: var(--border-strong);
}

.hd__mode:active {
  transform: scale(0.94);
}

.hd {
  border-bottom: 1px solid var(--border);
}

@media (max-width: 640px) {
  .hd__bar {
    padding: 0 1rem;
    gap: 0.5rem;
  }

  .hd__search {
    padding: 0 0.625rem;
  }

  .hd__cat {
    max-width: 38%;
  }

  .hd__demo,
  .hd__count,
  .hd__name {
    display: none;
  }
}
</style>