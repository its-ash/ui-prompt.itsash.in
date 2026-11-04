<script setup lang="ts">
import type { DesignItem } from '~/types';

const props = defineProps<{ item: DesignItem; eager?: boolean }>();
const emit = defineEmits<{ copied: [name: string, ok: boolean] }>();

const num = computed(() => props.item.id.split('-')[0]);
const href = computed(() => `/design/${props.item.id}/`);
const state = ref<'idle' | 'busy' | 'done'>('idle');
let timer: ReturnType<typeof setTimeout> | undefined;

async function copy() {
  if (state.value === 'busy') return;
  state.value = 'busy';
  const ok = await copyFrom(() => fetchPrompt(props.item.id));
  state.value = ok ? 'done' : 'idle';
  emit('copied', props.item.name, ok);
  clearTimeout(timer);
  if (ok) timer = setTimeout(() => (state.value = 'idle'), 1600);
}

onBeforeUnmount(() => clearTimeout(timer));
</script>

<template>
  <article class="cd">
    <div class="cd__shot">
      <img
        v-if="item.hasThumb"
        :src="`/data/thumbs/${item.id}.jpg`"
        alt=""
        width="480"
        height="300"
        :loading="eager ? 'eager' : 'lazy'"
        :fetchpriority="eager ? 'high' : 'auto'"
        decoding="async"
      />
      <span v-else class="cd__noshot mono">Preview pending</span>
    </div>

    <div class="cd__body">
      <p class="cd__no mono">
        <span>No. {{ num }}</span>
        <span class="cd__era">{{ item.era || 'Timeless' }}</span>
      </p>
      <h3 class="cd__name">
        <NuxtLink :to="href" class="cd__link" prefetch-on="interaction">{{ item.name }}</NuxtLink>
      </h3>
      <div class="cd__foot">
        <span class="cd__cat">{{ item.category }}</span>
        <button
          type="button"
          class="cd__copy"
          :class="{ 'cd__copy--done': state === 'done' }"
          :aria-label="`Copy prompt for ${item.name}`"
          :aria-busy="state === 'busy'"
          :disabled="!item.ready"
          @click="copy"
        >
          <span class="material-symbols-rounded" aria-hidden="true">{{ state === 'done' ? 'check' : 'content_copy' }}</span>
          <span class="cd__copytxt">{{ state === 'done' ? 'Copied' : 'Copy' }}</span>
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.cd {
  container-type: inline-size;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.375rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--bg-raised);
  transition:
    border-color var(--transition-fast),
    box-shadow var(--transition-normal),
    opacity 260ms var(--ease-standard),
    translate 260ms var(--ease-standard);
}

@starting-style {
  .cd {
    opacity: 0;
    translate: 0 8px;
  }
}

.cd:has(.cd__link:focus-visible) {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.cd__shot {
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: var(--radius-sm);
  background: var(--bg-hover);
}

.cd__shot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--text) 10%, transparent);
  pointer-events: none;
}

.cd__shot img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: scale 360ms var(--ease-standard);
}

.cd__noshot {
  font-size: 0.75rem;
  color: var(--text-faint);
}

.cd__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 0.5rem 0.25rem;
}

.cd__no {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.6875rem;
  color: var(--text-faint);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.cd__era {
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.cd__name {
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -0.005em;
  text-wrap: balance;
  overflow-wrap: anywhere;
}

.cd__link {
  color: var(--text);
  text-decoration: none;
}

.cd__link:focus-visible {
  outline: none;
}

.cd__link::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
}

.cd__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.375rem;
}

.cd__cat {
  min-width: 0;
  font-size: 0.8125rem;
  color: var(--text-dim);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.cd__copy {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  min-width: 44px;
  height: 44px;
  margin-right: -0.25rem;
  padding: 0 0.75rem;
  border: 1px solid var(--border-ui);
  border-radius: var(--radius-md);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text);
  background: var(--bg-raised);
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    scale var(--transition-fast);
}

.cd__copy .material-symbols-rounded {
  font-size: 18px;
}

.cd__copy--done {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--ink-on);
}

.cd__copy[aria-busy='true'] {
  cursor: progress;
}

.cd__copy:not(:disabled):active {
  scale: 0.96;
}

@media (hover: hover) and (pointer: fine) {
  .cd:hover {
    border-color: var(--border-ui);
    box-shadow: 0 18px 32px -24px var(--shadow);
  }

  .cd:hover .cd__shot img {
    scale: 1.035;
  }

  .cd__copy:not(:disabled):not(.cd__copy--done):hover {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--accent-ink);
  }
}

@container (max-width: 230px) {
  .cd__body {
    padding: 0.625rem 0.25rem 0;
  }

  .cd__name {
    font-size: 1.125rem;
  }

  .cd__era,
  .cd__copytxt {
    display: none;
  }

  .cd__copy {
    padding: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cd {
    transition:
      border-color var(--transition-fast),
      opacity 200ms ease-out;
  }

  @starting-style {
    .cd {
      translate: none;
    }
  }

  .cd__shot img,
  .cd__copy {
    transition: none;
  }

  .cd:hover .cd__shot img,
  .cd__copy:not(:disabled):active {
    scale: none;
  }
}

@media (prefers-contrast: more) {
  .cd {
    border-color: var(--border-ui);
  }
}
</style>
