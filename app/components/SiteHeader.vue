<script setup lang="ts">
const { theme, toggle } = useTheme();
defineProps<{ count?: number }>();
</script>

<template>
  <header class="hd">
    <div class="hd__bar">
      <NuxtLink to="/" class="hd__brand" aria-label="PromptDeck home">
        <span class="hd__mark" aria-hidden="true"></span>
        <span class="hd__name">PromptDeck</span>
        <span v-if="count" class="hd__count mono">{{ count }}</span>
      </NuxtLink>
      <div class="hd__right">
        <NuxtLink to="/demo" class="hd__demo">Demo site</NuxtLink>
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  border-radius: 5px;
  background: var(--text);
  display: inline-block;
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
  }

  .hd__demo {
    display: none;
  }
}
</style>