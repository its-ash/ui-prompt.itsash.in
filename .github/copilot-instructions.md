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
- `make demos` - build missing demo pages in `design/demos` via NVIDIA (needs `NVIDIA_API_KEY` in `.env`); skips done demos. System prompt = output rules + `design/design-brief.md`; each page must pass the Playwright dark-mode check. Env: `DEMO_ONLY=id1,id2` (rebuild those), `DEMO_MODELS=moonshotai/kimi-k3,google/gemma-4-31b-it` (best quality), `DEMO_NOTE="..."` (redesign notes), `DEMO_TIMEOUT_MS`
- `make thumbs` - screenshot new/changed demos to `design/thumbs/*.jpg` (Playwright); also runs in `npm run generate`
- `make check-dark` - Playwright check that each demo has a working dark mode (toggle click or prefers-color-scheme); results in `design/dark-check.json`
- `make fix-dark` - NVIDIA (kimi-k3, gemma-4 fallback) writes `html[data-theme="dark"]` CSS for demos with no dark mode; the script injects it plus a standard toggle (`#pd-dark`, `#pd-theme-init`, `#pd-theme-toggle`) and verifies in Playwright before saving
- `make redo-dark` - same, but also re-does pages already patched; `node scripts/fix-dark.mjs --reinject` refreshes only the injected toggle script
- `make brand` - render `public/og.png` (1200x630 share image), `apple-touch-icon.png` and `favicon.ico` from `public/favicon.svg`

## Structure

- `design/raw/*.md` - source theme specs (833 files), input only
- `design/prompts/*.md` - processed English prompts matching `design/raw` filenames
- `design/categories.json` - theme name, category, keywords, era
- `design/design-brief.md` - design rules distilled from the `design` skill, appended to the demo generator's system prompt (theme spec wins on aesthetics, brief wins on craft)
- `design/demos/*.html` - generated single-file demo page per prompt
- `design/thumbs/*.jpg` - demo screenshots shown on library cards
- `app/` - Nuxt 4 source. Index page lists themes grouped by category with demo thumbnails, `/design/[id]` demo iframe left + prompt right + copy
- `server/api/` - API reads `design/` at runtime; generation step bakes data at build time
- `docs/` - GitHub Pages artifact, committed to the repo

## Demo generation rules

- ALWAYS generate or redesign demos through `scripts/build-demos.mjs` so the NVIDIA system prompt includes `design/design-brief.md` (distilled from the `design` skill). Never call NVIDIA for page design without it.
- Default models: `moonshotai/kimi-k3`, fallback `google/gemma-4-31b-it` (benchmarked best on NVIDIA free tier). Nemotron spends its budget on reasoning.
- Redesign one page: `DEMO_ONLY=<id> DEMO_NOTE="<audit of current page>" make demos`, then check both modes, mobile, console, and fix leftovers by hand.

## SEO

- Site constants (`SITE_URL`, name, description, GA id) live at the top of `nuxt.config.ts`; pages read them via `useRuntimeConfig().public`.
- Theme URLs always end with `/` (GitHub Pages serves `design/<id>/index.html`); links, canonicals and sitemap must match.
- `bake-data.mjs` writes `public/sitemap.xml` and `public/robots.txt`.
- Theme pages: unique title (name + `No. <nnn>` when names collide), description <= 160 chars, CreativeWork + BreadcrumbList JSON-LD, thumbnail as og:image.

## Deploy

GitHub Pages via `docs/` folder. Repo settings: Pages -> deploy from branch -> main -> /docs. Custom domain `ui-prompt.itsash.in` via `public/CNAME` (copied into `docs/` on every build).

## Prompt pipeline

`scripts/process-prompts.mjs` reads each `design/raw/*.md`, extracts the AI prompt block, sends it with `design/agent.md` as system prompt to OpenRouter (glm-5.3), writes `design/prompts/<same-name>.md` in English, then deletes the processed raw file. State files `.prompt-state.json` track progress; the script is resumable and skips completed files.