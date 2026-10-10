<script setup lang="ts">
useHead({
  title: 'Pricing - Prismflow Demo - PromptDeck',
});

const mode = ref<'dark' | 'light'>('dark');

function toggleMode() {
  mode.value = mode.value === 'dark' ? 'light' : 'dark';
}
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
        <NuxtLink to="/demo/features" class="demo-nav__link">Features</NuxtLink>
        <NuxtLink to="/demo/pricing" class="demo-nav__link demo-nav__link--active">Pricing</NuxtLink>
        <NuxtLink to="/demo/about" class="demo-nav__link">About</NuxtLink>
      </nav>
      <div class="demo-nav__actions">
        <button type="button" class="demo-theme-toggle" :aria-pressed="mode === 'dark'" :aria-label="mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleMode">
          <span class="material-symbols-rounded" aria-hidden="true">{{ mode === 'dark' ? 'light_mode' : 'dark_mode' }}</span>
        </button>
        <NuxtLink to="/demo/about" class="demo-btn demo-btn--primary">Start free</NuxtLink>
      </div>
    </header>

    <section class="demo-pagehead">
      <div class="demo-aurora-bg" aria-hidden="true">
        <div class="demo-blob demo-blob--2"></div>
        <div class="demo-blob demo-blob--3"></div>
      </div>
      <div class="demo-pagehead__inner">
        <h1 class="demo-pagehead__title">Pricing that respects the work</h1>
        <p class="demo-pagehead__sub">Three tiers, the middle one lit. Switch tiers any month; tokens follow you.</p>
      </div>
    </section>

    <section class="demo-section">
      <div class="demo-grid">
        <article class="demo-price-card">
          <h3 class="demo-price-card__name">Solo</h3>
          <p class="demo-price-card__amount">$0 <span>/ month</span></p>
          <ul class="demo-price-card__list">
            <li><span class="material-symbols-rounded" aria-hidden="true">check_circle</span> One workspace</li>
            <li><span class="material-symbols-rounded" aria-hidden="true">check_circle</span> Community themes</li>
            <li><span class="material-symbols-rounded" aria-hidden="true">check_circle</span> Export tokens</li>
          </ul>
          <NuxtLink to="/demo/about" class="demo-btn demo-btn--ghost">Choose Solo</NuxtLink>
        </article>
        <article class="demo-price-card demo-price-card--hot">
          <span class="demo-price-card__tag">Most popular</span>
          <h3 class="demo-price-card__name">Studio</h3>
          <p class="demo-price-card__amount">$18 <span>/ month</span></p>
          <ul class="demo-price-card__list">
            <li><span class="material-symbols-rounded" aria-hidden="true">check_circle</span> Unlimited workspaces</li>
            <li><span class="material-symbols-rounded" aria-hidden="true">check_circle</span> Animated aurora presets</li>
            <li><span class="material-symbols-rounded" aria-hidden="true">check_circle</span> Contrast auditor</li>
          </ul>
          <NuxtLink to="/demo/about" class="demo-btn demo-btn--primary">Choose Studio</NuxtLink>
        </article>
        <article class="demo-price-card">
          <h3 class="demo-price-card__name">Agency</h3>
          <p class="demo-price-card__amount">$79 <span>/ month</span></p>
          <ul class="demo-price-card__list">
            <li><span class="material-symbols-rounded" aria-hidden="true">check_circle</span> Client handoff flows</li>
            <li><span class="material-symbols-rounded" aria-hidden="true">check_circle</span> Brand token locks</li>
            <li><span class="material-symbols-rounded" aria-hidden="true">check_circle</span> Priority support</li>
          </ul>
          <NuxtLink to="/demo/about" class="demo-btn demo-btn--ghost">Choose Agency</NuxtLink>
        </article>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Questions, answered</h2>
      <div class="demo-faq">
        <details>
          <summary>Do gradients hurt performance?
            <span class="material-symbols-rounded" aria-hidden="true">expand_more</span>
          </summary>
          <p>Only when done wrong. These loops animate background position on composited layers and pause outside the viewport.</p>
        </details>
        <details>
          <summary>Is light mode an afterthought?
            <span class="material-symbols-rounded" aria-hidden="true">expand_more</span>
          </summary>
          <p>No. Light mode uses a tinted near-white base and multiply blend, so the aurora stays soft without glare.</p>
        </details>
        <details>
          <summary>Can I lock brand colors?
            <span class="material-symbols-rounded" aria-hidden="true">expand_more</span>
          </summary>
          <p>Yes. Agency plans pin two of your brand stops and rebuild the complementary pairs around them.</p>
        </details>
        <details>
          <summary>How does billing work when I switch tiers?
            <span class="material-symbols-rounded" aria-hidden="true">expand_more</span>
          </summary>
          <p>Upgrades apply at once with prorated credit. Downgrades apply at the next cycle. Tokens never leave.</p>
        </details>
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