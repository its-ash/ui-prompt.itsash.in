// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'node:fs';

const GA_ID = 'G-3W9CR9BTM8';
const SITE_URL = 'https://ui-prompt.itsash.in';
const SITE_NAME = 'UI-Prompt';
const SITE_DESC =
  'Free library of 833 UI theme prompts with live demos. Pick a design style, preview the landing page, and copy the build prompt into your AI coding agent.';

// Prerender every theme page explicitly (trailing slash matches GitHub Pages URLs).
const INDEX_FILE = 'public/data/library-index.json';
const designRoutes: string[] = fs.existsSync(INDEX_FILE)
  ? JSON.parse(fs.readFileSync(INDEX_FILE, 'utf8')).index.map((i: { id: string }) => `/design/${i.id}/`)
  : [];

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  runtimeConfig: {
    public: { siteUrl: SITE_URL, siteName: SITE_NAME, siteDescription: SITE_DESC },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', ...designRoutes],
      // Each design page embeds only its own prompt (fetched at render time),
      // so payloads stay small. /data/*.json are copied as-is.
      ignore: ['/data/**'],
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: `${SITE_NAME} - UI Theme Prompt Library`,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: SITE_DESC },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'theme-color', content: '#0c0d10', media: '(prefers-color-scheme: dark)' },
        { name: 'theme-color', content: '#fbfbfc', media: '(prefers-color-scheme: light)' },
        { name: 'application-name', content: SITE_NAME },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      script: [
        { src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, async: true },
        {
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
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
