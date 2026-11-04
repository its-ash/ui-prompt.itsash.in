<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

export interface Facet {
  slug: string;
  label: string;
  count: number;
  on: boolean;
  to: RouteLocationRaw;
}

defineProps<{ all: Facet; cats: Facet[]; eras: Facet[]; tags: Facet[]; idp: string }>();
</script>

<template>
  <div class="fp">
    <section class="fp__grp" :aria-labelledby="`${idp}-cat`">
      <h2 :id="`${idp}-cat`" class="fp__h mono">Category</h2>
      <ul class="fp__list">
        <li v-for="c in [all, ...cats]" :key="c.slug">
          <NuxtLink
            :to="c.to"
            class="fp__row"
            :class="{ 'fp__row--on': c.on, 'fp__row--zero': !c.count && !c.on }"
            :aria-current="c.on ? 'true' : undefined"
            :prefetch="false"
          >
            <span class="fp__label">{{ c.label }}</span>
            <span class="fp__n mono">{{ c.count }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="fp__grp" :aria-labelledby="`${idp}-era`">
      <h2 :id="`${idp}-era`" class="fp__h mono">Era</h2>
      <ul class="fp__chips">
        <li v-for="e in eras" :key="e.slug">
          <NuxtLink
            :to="e.to"
            class="fp__chip"
            :class="{ 'fp__chip--on': e.on, 'fp__row--zero': !e.count && !e.on }"
            :aria-current="e.on ? 'true' : undefined"
            :prefetch="false"
          >
            {{ e.label }} <span class="fp__n mono">{{ e.count }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="fp__grp" :aria-labelledby="`${idp}-tag`">
      <h2 :id="`${idp}-tag`" class="fp__h mono">Mood and material</h2>
      <ul class="fp__chips">
        <li v-for="t in tags" :key="t.slug">
          <NuxtLink
            :to="t.to"
            class="fp__chip"
            :class="{ 'fp__chip--on': t.on, 'fp__row--zero': !t.count && !t.on }"
            :aria-current="t.on ? 'true' : undefined"
            :prefetch="false"
          >
            <span v-if="t.on" class="material-symbols-rounded fp__x" aria-hidden="true">check</span>
            {{ t.label }} <span class="fp__n mono">{{ t.count }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.fp {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.fp__grp {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.fp__h {
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-faint);
}

.fp__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.fp__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-height: 40px;
  padding: 0 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.9063rem;
  color: var(--text);
  text-decoration: none;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
}

.fp__label {
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.fp__n {
  font-size: 0.75rem;
  color: var(--text-faint);
}

.fp__row--on {
  background: var(--ink);
  color: var(--ink-on);
  font-weight: 600;
}

.fp__row--on .fp__n,
.fp__chip--on .fp__n {
  color: inherit;
  opacity: 0.8;
}

.fp__row--zero {
  color: var(--text-faint);
}

.fp__chips {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.fp__chip {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  min-height: 36px;
  padding: 0 0.75rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  font-size: 0.8438rem;
  color: var(--text);
  text-decoration: none;
  transition:
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    color var(--transition-fast);
}

.fp__chip--on {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
  font-weight: 600;
}

.fp__x {
  font-size: 16px;
  margin-left: -0.25rem;
}

@media (hover: hover) and (pointer: fine) {
  .fp__row:not(.fp__row--on):hover {
    background: var(--bg-hover);
  }

  .fp__chip:not(.fp__chip--on):hover {
    border-color: var(--border-ui);
    background: var(--bg-hover);
  }
}

@media (pointer: coarse) {
  .fp__row,
  .fp__chip {
    min-height: 44px;
  }
}
</style>
