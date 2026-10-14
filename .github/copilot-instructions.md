---
name: UI-Prompt
description: Static Nuxt site - UI theme prompt library rendered to docs/ for GitHub Pages
---

# UI-Prompt

Prompt library site. Users filter by category, open a design full view, copy the build prompt.

## Commands

- `make run` - dev server
- `make docs` - regenerate `docs/` static output (runs `nuxt generate` first)
- `make deploy` - build docs, commit to main, push
- `make process` - regenerate prompts from `design/raw` via `design/agent.md` (needs `OPENROUTER_API_KEY`)
- `make categorize` - regenerate `design/categories.json`
- `make demos` - build missing demo pages in `design/demos` via NVIDIA (needs `NVIDIA_API_KEY` in `.env`); skips done demos
- `make thumbs` - screenshot new/changed demos to `design/thumbs/*.jpg` (Playwright); also runs in `npm run generate`
- `make brand` - render `public/og.png` (1200x630 share image), `apple-touch-icon.png` and `favicon.ico` from `public/favicon.svg`

## Structure

- `design/raw/*.md` - source theme specs (833 files), input only
- `design/prompts/*.md` - processed English prompts matching `design/raw` filenames
- `design/categories.json` - theme name, category, keywords, era
- `design/demos/*.html` - generated single-file demo page per prompt
- `design/thumbs/*.jpg` - demo screenshots shown on library cards
- `app/` - Nuxt 4 source. Index page lists themes grouped by category with demo thumbnails, `/design/[id]` demo iframe left + prompt right + copy
- `server/api/` - API reads `design/` at runtime; generation step bakes data at build time
- `docs/` - GitHub Pages artifact, committed to the repo

## SEO

- Site constants (`SITE_URL`, name, description, GA id) live at the top of `nuxt.config.ts`; pages read them via `useRuntimeConfig().public`.
- Theme URLs always end with `/` (GitHub Pages serves `design/<id>/index.html`); links, canonicals and sitemap must match.
- `bake-data.mjs` writes `public/sitemap.xml` and `public/robots.txt`.
- Theme pages: unique title (name + `No. <nnn>` when names collide), description <= 160 chars, CreativeWork + BreadcrumbList JSON-LD, thumbnail as og:image.

## Deploy

GitHub Pages via `docs/` folder. Repo settings: Pages -> deploy from branch -> main -> /docs. Custom domain `ui-prompt.itsash.in` via `public/CNAME` (copied into `docs/` on every build).

## Prompt pipeline

`scripts/process-prompts.mjs` reads each `design/raw/*.md`, extracts the AI prompt block, sends it with `design/agent.md` as system prompt to OpenRouter (glm-5.3), writes `design/prompts/<same-name>.md` in English, then deletes the processed raw file. State files `.prompt-state.json` track progress; the script is resumable and skips completed files.