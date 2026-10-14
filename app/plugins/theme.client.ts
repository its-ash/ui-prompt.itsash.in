import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin(() => {
  if (import.meta.server) return;
  const stored = localStorage.getItem('pd-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored ?? (prefersDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
});