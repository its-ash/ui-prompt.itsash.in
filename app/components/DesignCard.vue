<script setup lang="ts">
import type { DesignItem } from '~/types';

const props = defineProps<{ item: DesignItem }>();

const swatch = computed(() => {
  let h = 0;
  for (const ch of props.item.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const hue = h % 360;
  const sat = 30 + (h % 25);
  return {
    fg: `hsl(${hue} ${sat}% 52%)`,
    bg: `hsl(${hue} ${sat}% 52% / 0.28)`,
  };
});
</script>

<template>
  <NuxtLink
    :to="`/design/${item.id}`"
    class="tk"
    :aria-label="`View ${item.name} theme and prompt`"
  >
    <span class="tk__shot" :style="item.hasThumb ? undefined : { background: swatch.bg }" aria-hidden="true">
      <img v-if="item.hasThumb" :src="`/data/thumbs/${item.id}.jpg`" alt="" width="480" height="300" loading="lazy" decoding="async" />
      <span v-else class="tk__noshot mono">{{ item.ready ? 'demo pending' : 'prompt pending' }}</span>
    </span>
    <span class="tk__swatch" :style="{ background: swatch.bg }" aria-hidden="true">
      <span class="tk__dot" :style="{ background: swatch.fg }"></span>
    </span>
    <span class="tk__body">
      <span class="tk__name">{{ item.name }}</span>
      <span class="tk__meta mono">{{ item.category }}</span>
    </span>
    <span v-if="!item.ready" class="tk__pending mono" title="Prompt generating">·</span>
  </NuxtLink>
</template>

<style scoped>
.tk__shot {
  grid-column: 1 / -1;
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 10;
  background: color-mix(in srgb, var(--text) 6%, transparent);
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

.tk__shot img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
}

@media (hover: hover) and (pointer: fine) {
  .tk:hover .tk__shot img {
    transform: scale(1.03);
  }
}

@media (prefers-reduced-motion: reduce) {
  .tk__shot img {
    transition: none;
  }
}

.tk {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  column-gap: 0.75rem;
  row-gap: 0.625rem;
  padding: 0 0 0.625rem;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--bg-raised);
  text-decoration: none;
  color: var(--text);
  min-height: 64px;
  transition:
    border-color var(--transition-fast),
    background var(--transition-fast),
    transform var(--transition-fast);
}

@media (hover: hover) and (pointer: fine) {
  .tk:hover {
    border-color: var(--border-strong);
    background: var(--bg-hover);
    transform: translateY(-1px);
  }
}

.tk:active {
  transform: scale(0.99);
}

.tk__noshot {
  font-size: 0.625rem;
  color: var(--text-dim);
}

.tk__swatch {
  margin-left: 0.75rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
}

.tk__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
}

.tk__body {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.tk__name {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.005em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tk__meta {
  font-size: 0.6875rem;
  color: var(--text-faint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tk__pending {
  margin-right: 0.75rem;
  color: var(--text-faint);
  flex-shrink: 0;
}


@media (max-width: 640px) {
  .tk {
    column-gap: 0.625rem;
    min-height: 56px;
  }

  .tk__swatch {
    margin-left: 0.625rem;
    width: 32px;
    height: 32px;
  }

  .tk {
    padding: 0 0 0.5rem;
  }
}
</style>