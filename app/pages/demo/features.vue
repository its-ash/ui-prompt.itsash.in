<script setup lang="ts">
useHead({
  title: 'Features - Prismflow Demo - PromptDeck',
});

const mode = ref<'dark' | 'light'>('dark');

function toggleMode() {
  mode.value = mode.value === 'dark' ? 'light' : 'dark';
}

const metrics = [
  { label: 'Avg. page paint', value: '1.8s', trend: '-38%', down: false, icon: 'speed' },
  { label: 'Contrast pass rate', value: '100%', trend: 'AA both modes', down: false, icon: 'verified' },
  { label: 'Theme tokens', value: '34', trend: 'one file', down: false, icon: 'token' },
  { label: 'Bundle overhead', value: '0kb', trend: 'pure CSS', down: false, icon: 'package_2' },
];
</script>

<template>
  <div class="demo-root" :data-mode="mode">
    <header class="demo-nav">
      <NuxtLink to="/demo" class="demo-nav__brand" aria-label="Prismflow home">
        <span class="demo-nav__mark" aria-hidden="true"></span>
        Prismflow
      </NuxtLink>
      <nav class="demo-nav__links" aria-label="Primary">
        <NuxtLink to="/demo" class="demo-nav__link">Home</NuxtLink>
        <NuxtLink to="/demo/features" class="demo-nav__link demo-nav__link--active">Features</NuxtLink>
        <NuxtLink to="/demo/pricing" class="demo-nav__link">Pricing</NuxtLink>
        <NuxtLink to="/demo/about" class="demo-nav__link">About</NuxtLink>
      </nav>
      <div class="demo-nav__actions">
        <button type="button" class="demo-theme-toggle" :aria-pressed="mode === 'dark'" :aria-label="mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleMode">
          <span class="material-symbols-rounded" aria-hidden="true">{{ mode === 'dark' ? 'light_mode' : 'dark_mode' }}</span>
        </button>
        <NuxtLink to="/demo/pricing" class="demo-btn demo-btn--primary">Start free</NuxtLink>
      </div>
    </header>

    <section class="demo-pagehead">
      <div class="demo-aurora-bg" aria-hidden="true">
        <div class="demo-blob demo-blob--1"></div>
        <div class="demo-blob demo-blob--2"></div>
      </div>
      <div class="demo-pagehead__inner">
        <h1 class="demo-pagehead__title">Product surfaces that stay calm</h1>
        <p class="demo-pagehead__sub">Feature pages carry a lighter aurora. The hero owns the drama; content earns the focus.</p>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Numbers, not vibes</h2>
      <p class="demo-section__sub">The same aurora language, applied to plain layout. Depth from tokens, hierarchy from type weight.</p>
      <div class="demo-board">
        <article v-for="m in metrics" :key="m.label" class="demo-board__panel">
          <span class="demo-card__icon material-symbols-rounded" aria-hidden="true">{{ m.icon }}</span>
          <p class="demo-board__stat">{{ m.value }}</p>
          <p class="demo-board__label">{{ m.label }}</p>
          <p class="demo-board__trend" :class="{ 'demo-board__trend--down': m.down }">
            <span class="material-symbols-rounded" aria-hidden="true">{{ m.down ? 'trending_down' : 'trending_up' }}</span>
            {{ m.trend }}
          </p>
        </article>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Built to be rebuilt</h2>
      <div class="demo-steps">
        <div class="demo-step">
          <span class="demo-step__num">1</span>
          <div>
            <div class="demo-step__title">Copy the prompt</div>
            <div class="demo-step__text">Every theme on PromptDeck ships as a complete build specification for your coding agent.</div>
          </div>
        </div>
        <div class="demo-step">
          <span class="demo-step__num">2</span>
          <div>
            <div class="demo-step__title">Paste into your agent</div>
            <div class="demo-step__text">The spec enforces CSS-first structure, dark mode, tokens and component states automatically.</div>
          </div>
        </div>
        <div class="demo-step">
          <span class="demo-step__num">3</span>
          <div>
            <div class="demo-step__title">Get a real page</div>
            <div class="demo-step__text">This demo itself was composed from the Aurora prompt rules - tokens, states and modes included.</div>
          </div>
        </div>
      </div>
    </section>

    <section class="demo-band">
      <h2 class="demo-band__title">Try the whole spec on your next build</h2>
      <div class="demo-hero__ctas">
        <NuxtLink to="/demo/pricing" class="demo-btn demo-btn--primary demo-btn--lg">
          <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
          Get the prompt
        </NuxtLink>
        <NuxtLink to="/" class="demo-btn demo-btn--ghost demo-btn--lg">Back to library</NuxtLink>
      </div>
    </section>

    <footer class="demo-footer">
      <div class="demo-footer__inner">
        <NuxtLink to="/demo" class="demo-nav__brand" aria-label="Prismflow home">
          <span class="demo-nav__mark" aria-hidden="true"></span>
          Prismflow
        </NuxtLink>
        <nav class="demo-footer__links" aria-label="Footer">
          <NuxtLink to="/demo/about">Privacy policy</NuxtLink>
          <NuxtLink to="/demo/about">Terms of use</NuxtLink>
          <NuxtLink to="/demo/about">Contact</NuxtLink>
        </nav>
        <div class="demo-footer__social">
          <a href="#" aria-label="Prismflow on GitHub"><span class="material-symbols-rounded" aria-hidden="true">code</span></a>
          <a href="#" aria-label="Prismflow on X"><span class="material-symbols-rounded" aria-hidden="true">alternate_email</span></a>
        </div>
        <p class="demo-footer__copy">Copyright 2026 Prismflow. Demo page generated from the Aurora UI prompt.</p>
      </div>
    </footer>
  </div>
</template>