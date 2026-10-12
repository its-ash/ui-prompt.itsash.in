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
  <NuxtLink :to="`/design/${item.id}`" class="tk" :aria-label="`View ${item.name} theme and prompt`">
    <span class="tk__swatch" :style="{ background: swatch.bg }" aria-hidden="true">
      <span class="tk__dot" :style="{ background: swatch.fg }"></span>
    </span>
    <span class="tk__body">
      <span class="tk__name">{{ item.name }}</span>
      <span class="tk__meta mono">{{ item.category }}</span>
    </span>
    <span v-if="item.hasDemo" class="tk__demo mono">demo</span>
    <span v-else-if="!item.ready" class="tk__pending mono" title="Prompt generating">·</span>
  </NuxtLink>
</template>

<style scoped>
.tk {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
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

.tk__swatch {
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
  margin-left: auto;
  color: var(--text-faint);
  flex-shrink: 0;
}

.tk__demo {
  margin-left: auto;
  flex-shrink: 0;
  font-size: 0.625rem;
  color: var(--text-dim);
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  padding: 0.125rem 0.5rem;
}

@media (max-width: 640px) {
  .tk {
    gap: 0.625rem;
    padding: 0.5rem 0.625rem;
    min-height: 56px;
  }

  .tk__swatch {
    width: 32px;
    height: 32px;
  }
}
</style>