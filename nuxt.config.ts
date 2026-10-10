// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      // Each design page embeds only its own prompt (fetched at render time),
      // so payloads stay small. /data/*.json are copied as-is.
      ignore: ['/data/**'],
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'PromptDeck - UI Theme Prompt Library',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Browse UI theme prompts, preview in full view, copy and build.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/demo.css'],
});
