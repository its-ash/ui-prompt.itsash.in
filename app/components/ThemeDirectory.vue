<script setup lang="ts">
defineProps<{ total: string; groups: { label: string; items: { id: string; name: string; num: string }[] }[] }>();
</script>

<template>
  <section class="dir" aria-labelledby="dir-h">
    <div class="dir__head">
      <h2 id="dir-h" class="dir__title">The full index</h2>
      <p class="dir__sub">All {{ total }} styles, filed by category. Open a drawer to scan names.</p>
    </div>
    <div class="dir__cols">
      <details v-for="g in groups" :key="g.label" class="dir__grp">
        <summary class="dir__sum">
          <span>{{ g.label }}</span>
          <span class="dir__n mono">{{ g.items.length }}</span>
        </summary>
        <ol class="dir__list">
          <li v-for="i in g.items" :key="i.id">
            <a :href="`/design/${i.id}/`" class="dir__link"><span class="dir__num mono">{{ i.num }}</span>{{ i.name }}</a>
          </li>
        </ol>
      </details>
    </div>
  </section>
</template>

<style scoped>
.dir {
  display: grid;
  gap: 1.5rem;
  padding: clamp(2.5rem, 6vw, 4.5rem) 0 1rem;
  border-top: 1px solid var(--text);
}

.dir__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  line-height: 1;
}

.dir__sub {
  margin-top: 0.5rem;
  color: var(--text-dim);
}

.dir__cols {
  columns: 3 18rem;
  column-gap: 2rem;
}

.dir__grp {
  break-inside: avoid;
  border-bottom: 1px solid var(--border);
}

.dir__sum {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 48px;
  cursor: pointer;
  list-style: none;
  font-size: 1rem;
  font-weight: 500;
}

.dir__sum::-webkit-details-marker {
  display: none;
}

.dir__sum::after {
  content: '+';
  font-family: var(--font-mono);
  color: var(--text-faint);
  order: 3;
}

.dir__grp[open] > .dir__sum::after {
  content: '-';
}

.dir__n {
  margin-left: auto;
  font-size: 0.75rem;
  color: var(--text-faint);
}

.dir__list {
  list-style: none;
  padding: 0 0 1rem;
  display: grid;
  gap: 0.125rem;
}

.dir__link {
  display: flex;
  gap: 0.75rem;
  padding: 0.25rem 0;
  font-size: 0.9063rem;
  color: var(--text-dim);
  text-decoration: none;
}

.dir__num {
  min-width: 2.75rem;
  font-size: 0.75rem;
  line-height: 1.9;
  color: var(--text-faint);
}

@media (hover: hover) and (pointer: fine) {
  .dir__link:hover {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}
</style>
