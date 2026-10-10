<script setup lang="ts">
useHead({
  title: 'Demo - Prismflow (Aurora UI) - PromptDeck',
  meta: [{ name: 'description', content: 'Sample landing page built from the Aurora UI processed prompt.' }],
});

const mode = ref<'dark' | 'light'>('dark');
const sentForm = ref(false);
const formError = ref('');
const email = ref('');
const message = ref('');

const emailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));

function toggleMode() {
  mode.value = mode.value === 'dark' ? 'light' : 'dark';
}

function submit() {
  if (!emailValid.value) {
    formError.value = 'Enter a valid email address.';
    return;
  }
  formError.value = '';
  sentForm.value = true;
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
        <NuxtLink to="/demo" class="demo-nav__link demo-nav__link--active">Home</NuxtLink>
        <NuxtLink to="/demo/features" class="demo-nav__link">Features</NuxtLink>
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

    <section class="demo-hero">
      <div class="demo-aurora-bg" aria-hidden="true">
        <div class="demo-blob demo-blob--1"></div>
        <div class="demo-blob demo-blob--2"></div>
        <div class="demo-blob demo-blob--3"></div>
      </div>
      <div class="demo-hero__inner">
        <div class="demo-hero__copy">
          <h1 class="demo-hero__title">Interfaces that <em>breathe light</em></h1>
          <p class="demo-hero__sub">
            Prismflow renders product surfaces as slow, living gradients. One color field per viewport, calm by design,
            and sharp everywhere you read.
          </p>
          <div class="demo-hero__ctas">
            <NuxtLink to="/demo/pricing" class="demo-btn demo-btn--primary demo-btn--lg">
              <span class="material-symbols-rounded" aria-hidden="true">bolt</span>
              Start building
            </NuxtLink>
            <NuxtLink to="/demo/features" class="demo-btn demo-btn--ghost demo-btn--lg">See how it works</NuxtLink>
          </div>
        </div>
        <div class="demo-hero__art" aria-hidden="true">
          <div class="demo-orb">
            <span class="material-symbols-rounded demo-orb__icon">auto_awesome</span>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="demo-section">
      <h2 class="demo-section__title">Three moves, one atmosphere</h2>
      <p class="demo-section__sub">Every component sits on the same aurora field, so depth comes from color, not clutter.</p>
      <div class="demo-grid">
        <article class="demo-card">
          <span class="demo-card__icon material-symbols-rounded" aria-hidden="true">waves</span>
          <h3 class="demo-card__title">Living gradients</h3>
          <p class="demo-card__text">Backgrounds drift on 8-12 second loops. Subtle enough to sit under reading, alive enough to feel premium.</p>
        </article>
        <article class="demo-card">
          <span class="demo-card__icon material-symbols-rounded" aria-hidden="true">blur_on</span>
          <h3 class="demo-card__title">Glass surfaces</h3>
          <p class="demo-card__text">Cards, nav and pricing tiers use frosted panels with soft borders - readable in both modes.</p>
        </article>
        <article class="demo-card">
          <span class="demo-card__icon material-symbols-rounded" aria-hidden="true">palette</span>
          <h3 class="demo-card__title">Paired contrast</h3>
          <p class="demo-card__text">Every background token shadows a text token. Light and dark pass the same contrast bar.</p>
        </article>
      </div>
    </section>

    <section id="how" class="demo-section">
      <h2 class="demo-section__title">From token to atmosphere in three steps</h2>
      <div class="demo-steps">
        <div class="demo-step">
          <span class="demo-step__num">1</span>
          <div>
            <div class="demo-step__title">Define the field</div>
            <div class="demo-step__text">Pick three aurora stops and one anchor background. That is the whole palette.</div>
          </div>
        </div>
        <div class="demo-step">
          <span class="demo-step__num">2</span>
          <div>
            <div class="demo-step__title">Layer the depth</div>
            <div class="demo-step__text">Translucent blobs carry depth. Blend modes do the work plain shadows cannot.</div>
          </div>
        </div>
        <div class="demo-step">
          <span class="demo-step__num">3</span>
          <div>
            <div class="demo-step__title">Read with contrast</div>
            <div class="demo-step__text">Test every text block against the lightest frame of the animation, not the static one.</div>
          </div>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Teams that switched, stayed</h2>
      <div class="demo-grid">
        <blockquote class="demo-card">
          <p class="demo-quote__text">We shipped a premium page in two days. The gradient work sells the product before a single word is read.</p>
          <footer class="demo-quote__who">Mara Ostrowski, Design Lead at Kelpwork Studios</footer>
        </blockquote>
        <blockquote class="demo-card">
          <p class="demo-quote__text">Dark mode was already done right. We only tuned two tokens and both modes passed our contrast checks.</p>
          <footer class="demo-quote__who">Deniz Akin, Frontend Engineer at Ferryline</footer>
        </blockquote>
        <blockquote class="demo-card">
          <p class="demo-quote__text">The one-aurora-moment rule kept our dashboard clean while the landing pages got the drama.</p>
          <footer class="demo-quote__who">Jonah Reyes, Founder at Northbeam Labs</footer>
        </blockquote>
      </div>
    </section>

    <section class="demo-band">
      <h2 class="demo-band__title">Your next page already has a mood</h2>
      <p class="demo-band__sub">Start from the aurora field and keep it calm.</p>
      <div class="demo-hero__ctas">
        <NuxtLink to="/demo/pricing" class="demo-btn demo-btn--primary demo-btn--lg">
          <span class="material-symbols-rounded" aria-hidden="true">rocket_launch</span>
          Start free
        </NuxtLink>
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
          <a href="#" aria-label="Prismflow on LinkedIn"><span class="material-symbols-rounded" aria-hidden="true">work</span></a>
        </div>
        <p class="demo-footer__copy">Copyright 2026 Prismflow. Demo page generated from the Aurora UI prompt.</p>
      </div>
    </footer>
  </div>
</template>