<script setup lang="ts">
import type { DesignItem } from '~/types';

const props = defineProps<{ item: DesignItem }>();

const swatch = computed(() => {
  let h = 0;
  for (const ch of props.item.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const hue = h % 360;
  const sat = 30 + (h % 25);
  return `hsl(${hue} ${sat}% 52% / 0.22)`;
});

const meta = computed(() => props.item.era || props.item.category);
</script>

<template>
  <NuxtLink :to="`/design/${item.id}`" class="tk" :aria-label="`View ${item.name} theme and prompt`">
    <span class="tk__frame" aria-hidden="true">
      <span class="tk__shot" :style="item.hasThumb ? undefined : { background: swatch }">
        <img
          v-if="item.hasThumb"
          :src="`/data/thumbs/${item.id}.jpg`"
          alt=""
          width="480"
          height="300"
          loading="lazy"
          decoding="async"
        />
        <span v-else class="tk__noshot mono">{{ item.ready ? 'Demo pending' : 'Prompt pending' }}</span>
      </span>
    </span>
    <span class="tk__body">
      <span class="tk__text">
        <span class="tk__name">{{ item.name }}</span>
        <span class="tk__meta mono">{{ meta }}</span>
      </span>
      <span v-if="!item.ready" class="tk__badge mono" title="Prompt generating">Pending</span>
      <span v-else class="tk__go material-symbols-rounded" aria-hidden="true">arrow_outward</span>
    </span>
  </NuxtLink>
</template>

<style scoped>
.tk {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--bg-raised);
  color: var(--text);
  text-decoration: none;
  overflow: hidden;
  transition:
    border-color var(--transition-normal),
    box-shadow var(--transition-normal),
    transform var(--transition-normal);
}

.tk:focus-visible {
  outline: 2px solid var(--text);
  outline-offset: 2px;
}

.tk:active {
  transform: scale(0.985);
  transition-duration: 100ms;
}

/* preview */

.tk__frame {
  display: block;
  padding: 0.375rem 0.375rem 0;
}

.tk__shot {
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 10;
  border-radius: calc(var(--radius-lg) - 0.375rem);
  background: color-mix(in srgb, var(--text) 5%, transparent);
  overflow: hidden;
}

.tk__shot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--text) 9%, transparent);
  pointer-events: none;
}

.tk__shot img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 450ms var(--ease-standard);
}

.tk__noshot {
  font-size: 0.6875rem;
  color: var(--text-dim);
}

/* body */

.tk__body {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0.875rem 0.8125rem;
}

.tk__text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.1875rem;
}

.tk__name {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tk__meta {
  font-size: 0.6875rem;
  line-height: 1.3;
  color: var(--text-faint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tk__go {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 999px;
  font-size: 1rem;
  color: var(--text-faint);
  background: color-mix(in srgb, var(--text) 5%, transparent);
  opacity: 0;
  transform: translate(-0.25rem, 0.25rem);
  transition:
    opacity var(--transition-normal),
    transform var(--transition-normal),
    color var(--transition-normal);
}

.tk__badge {
  flex-shrink: 0;
  padding: 0.125rem 0.5rem;
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  font-size: 0.625rem;
  color: var(--text-dim);
}

@media (hover: hover) and (pointer: fine) {
  .tk:hover {
    border-color: var(--border-strong);
    box-shadow: 0 10px 28px -14px rgb(0 0 0 / 0.35);
    transform: translateY(-2px);
  }

  .tk:hover .tk__shot img {
    transform: scale(1.025);
  }

  .tk:hover .tk__go {
    opacity: 1;
    transform: none;
    color: var(--text);
  }
}

.tk:focus-visible .tk__go {
  opacity: 1;
  transform: none;
}

@media (hover: none) {
  .tk__go {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tk,
  .tk__shot img,
  .tk__go {
    transition: opacity 150ms ease;
  }

  .tk:hover,
  .tk:active,
  .tk:hover .tk__shot img {
    transform: none;
  }
}

@media (prefers-contrast: more) {
  .tk {
    border-color: var(--text-faint);
  }
}

@media (max-width: 640px) {
  .tk__body {
    padding: 0.625rem 0.75rem 0.6875rem;
  }
}
</style>
