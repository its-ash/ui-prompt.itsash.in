import { defineNuxtPlugin, useState } from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp) => {
  const stored = localStorage.getItem('pd-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored === 'light' || stored === 'dark' ? stored : prefersDark ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
  // Sync shared state after hydration so SSR markup and first client render match.
  nuxtApp.hook('app:mounted', () => {
    useState<'dark' | 'light'>('pd-theme').value = theme;
  });
});
