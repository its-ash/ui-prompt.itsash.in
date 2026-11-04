// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'node:fs';
import path from 'node:path';

const GA_ID = 'G-3W9CR9BTM8';
const SITE_URL = 'https://ui-prompt.itsash.in';
const SITE_NAME = 'UI-Prompt';
const SITE_DESC =
  'Free library of 833 UI theme prompts with live demos. Pick a design style, preview the landing page, and copy the build prompt into your AI coding agent.';

// Prerender every theme page explicitly (trailing slash matches GitHub Pages URLs).
// design/ is the only data source; Nitro serves it under /data (no copies in public/).
const INDEX_FILE = '.cache/data/library-index.json';
const abs = (p: string) => path.resolve(import.meta.dirname, p);
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
    publicAssets: [
      { dir: abs('design/demos'), baseURL: '/data/demos', maxAge: 3600 },
      { dir: abs('design/thumbs'), baseURL: '/data/thumbs', maxAge: 3600 },
      { dir: abs('design/prompts'), baseURL: '/data/prompts', maxAge: 3600 },
      { dir: abs('.cache/data'), baseURL: '/data', maxAge: 3600 },
    ],
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
        { name: 'theme-color', content: '#12110f', media: '(prefers-color-scheme: dark)' },
        { name: 'theme-color', content: '#f4f1ea', media: '(prefers-color-scheme: light)' },
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
          href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap',
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
