<script setup lang="ts">
useHead({
  title: 'About - Prismflow Demo - PromptDeck',
});

const mode = ref<'dark' | 'light'>('dark');
const sentForm = ref(false);
const formError = ref('');
const email = ref('');
const nameRef = ref('');
const message = ref('');

const emailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
const nameValid = computed(() => nameRef.value.trim().length >= 2);

function toggleMode() {
  mode.value = mode.value === 'dark' ? 'light' : 'dark';
}

function submit() {
  if (!nameValid.value) {
    formError.value = 'Enter your name.';
    return;
  }
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
        <NuxtLink to="/demo" class="demo-nav__link">Home</NuxtLink>
        <NuxtLink to="/demo/features" class="demo-nav__link">Features</NuxtLink>
        <NuxtLink to="/demo/pricing" class="demo-nav__link">Pricing</NuxtLink>
        <NuxtLink to="/demo/about" class="demo-nav__link demo-nav__link--active">About</NuxtLink>
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
        <div class="demo-blob demo-blob--3"></div>
      </div>
      <div class="demo-pagehead__inner">
        <h1 class="demo-pagehead__title">A small studio with a single obsession</h1>
        <p class="demo-pagehead__sub">We tune color fields until interfaces feel inevitable. Contact form included, states and all.</p>
      </div>
    </section>

    <section class="demo-section">
      <div class="demo-contact">
        <div class="demo-contact__info">
          <h2 class="demo-section__title">Say hello</h2>
          <p class="demo-section__sub">
            Prismflow is a demo brand composed entirely from the Aurora UI prompt spec - proof that the processed
            PromptDeck prompts produce complete, accessible UI.
          </p>
          <div class="demo-steps">
        <div class="demo-step">
          <span class="demo-step__num demo-step__num--icon material-symbols-rounded" aria-hidden="true">mail</span>
          <div>
            <div class="demo-step__title">hello@prismflow.demo</div>
            <div class="demo-step__text">We reply within one working day.</div>
          </div>
        </div>
        <div class="demo-step">
          <span class="demo-step__num demo-step__num--icon material-symbols-rounded" aria-hidden="true">location_on</span>
          <div>
            <div class="demo-step__title">Remote, everywhere</div>
            <div class="demo-step__text">The studio is async by design.</div>
          </div>
        </div>
          </div>
        </div>
        <form v-if="!sentForm" class="demo-contact__form" novalidate @submit.prevent="submit">
          <div class="demo-input-group" :class="{ 'demo-input-group--error': formError && !nameValid }">
            <label for="demo-name">Name</label>
            <input id="demo-name" v-model="nameRef" type="text" autocomplete="name" placeholder="Your name" />
          </div>
          <div class="demo-input-group" :class="{ 'demo-input-group--error': formError && !emailValid }">
            <label for="demo-email">Work email</label>
            <input id="demo-email" v-model="email" type="email" autocomplete="email" placeholder="you@company.com" />
            <p v-if="formError" class="demo-input-group__error" role="alert">
              <span class="material-symbols-rounded" aria-hidden="true">error</span>
              {{ formError }}
            </p>
          </div>
          <div class="demo-input-group">
            <label for="demo-msg">Project note</label>
            <textarea id="demo-msg" v-model="message" rows="4" placeholder="A line or two about what you are building"></textarea>
          </div>
          <button type="submit" class="demo-btn demo-btn--primary demo-btn--lg">Send note</button>
        </form>
        <div v-else class="demo-contact__form" role="status">
          <p class="demo-contact__success">
            <span class="material-symbols-rounded" aria-hidden="true">check_circle</span>
            Note sent. We will reply to {{ email }} shortly, {{ nameRef.trim() }}.
          </p>
          <button type="button" class="demo-btn demo-btn--ghost" @click="sentForm = false">Send another</button>
        </div>
      </div>
    </section>

    <footer class="demo-footer">
      <div class="demo-footer__inner">
        <NuxtLink to="/demo" class="demo-nav__brand" aria-label="Prismflow home">
          <span class="demo-nav__mark" aria-hidden="true"></span>
          Prismflow
        </NuxtLink>
        <nav class="demo-footer__links" aria-label="Footer">
          <a href="#">Privacy policy</a>
          <a href="#">Terms of use</a>
          <a href="#">Contact</a>
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