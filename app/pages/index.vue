<script setup lang="ts">
const library = await useLibrary();

const search = useState('search', () => '');
const activeCategory = useState('category', () => 'All');

const items = computed(() => library.value.index);
const categories = computed(() => library.value.categories);
const readyCount = computed(() => items.value.filter((i) => i.ready).length);
const loading = computed(() => !items.value.length);

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase();
  return items.value.filter((item) => {
    if (activeCategory.value !== 'All' && item.category !== activeCategory.value) return false;
    if (!q) return true;
    return (
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });
});

const grouped = computed(() => {
  const groups: { category: string; items: typeof filtered.value }[] = [];
  const cats =
    activeCategory.value === 'All' ? [...categories.value, 'Uncategorized'] : [activeCategory.value];
  for (const c of cats) {
    const list = filtered.value.filter((i) =>
      c === 'Uncategorized' ? !categories.value.includes(i.category) : i.category === c
    );
    if (list.length) groups.push({ category: c, items: list });
  }
  return groups;
});

useHead({ title: 'PromptDeck - UI Theme Prompt Library' });
</script>

<template>
  <div class="pg">
    <SiteHeader :count="items.length || 833" />

    <main class="pg__main">
      <section class="pg__hero">
        <h1 class="pg__title">
          Design prompts that build<br />real interfaces.
        </h1>
        <p class="pg__sub">
          {{ items.length }} processed themes. Pick one, open the full prompt, copy it into your coding agent. Every prompt enforces tokens, dark mode and component states.
        </p>
        <div class="pg__stats mono">
          <span>{{ items.length }} themes</span>
          <span class="pg__statsep" aria-hidden="true">/</span>
          <span>{{ readyCount }} prompts ready</span>
          <span class="pg__statsep" aria-hidden="true">/</span>
          <span>{{ categories.length }} categories</span>
        </div>
      </section>


      <div v-if="loading" class="pg__loading" aria-busy="true">
        <span class="pg__sk pg__sk--wide"></span>
        <span v-for="i in 8" :key="i" class="pg__sk"></span>
      </div>

      <template v-else>
        <section v-for="group in grouped" :key="group.category" class="pg__group" :aria-label="group.category">
          <h2 class="pg__gtitle mono">
            {{ group.category }} <span class="pg__gcount">{{ group.items.length }}</span>
          </h2>
          <div class="pg__grid">
            <DesignCard v-for="item in group.items" :key="item.id" :item="item" />
          </div>
        </section>

        <div v-if="!filtered.length" class="pg__msg" role="status">
          Nothing matched "{{ search }}". Clear search or pick another category.
        </div>
      </template>
    </main>

    <footer class="pg__foot">

    </footer>
  </div>
</template>

<style scoped>
.pg {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.pg__main {
  flex: 1;
  width: 100%;
  padding: 0 0 5rem;
}

/* hero */

.pg__hero {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4.5rem 0 2.75rem;
  max-width: 44rem;
}

.pg__title {
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.05;
}

.pg__sub {
  color: var(--text-dim);
  font-size: 1rem;
  max-width: 56ch;
}

.pg__stats {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.75rem;
  color: var(--text-faint);
  margin-top: 0.25rem;
}

.pg__statsep {
  color: var(--border-strong);
}

/* groups + grid */

.pg__group {
  padding: 1.125rem 0 0.25rem;
}

.pg__gtitle {
  font-size: 0.71875rem;
  font-weight: 500;
  color: var(--text-faint);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.875rem;
}

.pg__gcount {
  color: var(--border-strong);
}

.pg__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.875rem;
}

/* statuses */

.pg__loading {
  padding: 2rem 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 0.5rem;
}

.pg__sk {
  height: 64px;
  border-radius: var(--radius-md);
  background: linear-gradient(90deg, var(--bg-raised) 35%, var(--bg-hover) 50%, var(--bg-raised) 65%);
  background-size: 300% 100%;
  animation: pg-shimmer 1.4s linear infinite;
}

.pg__sk--wide {
  grid-column: 1 / -1;
  height: 96px;
  margin-bottom: 0.75rem;
}

@keyframes pg-shimmer {
  to {
    background-position: -300% 0;
  }
}

.pg__msg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  color: var(--text-dim);
  padding: 5rem 0;
  font-size: 0.9063rem;
}

/* footer */

.pg__foot {
  border-top: 1px solid var(--border);
  padding: 1.5rem 0 2rem;
}

.pg__footnote {
  font-size: 0.6875rem;
  color: var(--text-faint);
}

@media (max-width: 740px) {
  .pg__hero {
    padding: 3rem 0 2rem;
  }

  .pg__title br {
    display: none;
  }

  .pg__grid {
    grid-template-columns: 1fr;
  }
}
</style>