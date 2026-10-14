---
name: PromptDeck
description: Static Nuxt site - UI theme prompt library rendered to docs/ for GitHub Pages
---

# PromptDeck

Prompt library site. Users filter by category, open a design full view, copy the build prompt.

## Commands

- `make run` - dev server
- `make docs` - regenerate `docs/` static output (runs `nuxt generate` first)
- `make deploy` - build docs, commit to main, push
- `make process` - regenerate prompts from `design/raw` via `design/agent.md` (needs `OPENROUTER_API_KEY`)
- `make categorize` - regenerate `design/categories.json`
- `make demos` - build missing demo pages in `design/demos` via NVIDIA (needs `NVIDIA_API_KEY` in `.env`); skips done demos
- `make modes` - detect each demo's dark mode (toggle click or prefers-color-scheme) into `design/modes.json` (Playwright)
- `make dark` - generate dark pages in `design/demos-dark` via NVIDIA, only for demos with no working dark mode
- `make thumbs` - screenshot light + dark variants to `design/thumbs/<id>.jpg` / `<id>.dark.jpg`; `modes` and `thumbs` also run in `npm run generate`

## Structure

- `design/raw/*.md` - source theme specs (833 files), input only
- `design/prompts/*.md` - processed English prompts matching `design/raw` filenames
- `design/categories.json` - theme name, category, keywords, era
- `design/demos/*.html` - generated single-file demo page per prompt
- `design/demos-dark/*.html` - generated dark pages for demos without a dark mode
- `design/modes.json` - per-demo dark-mode method + html/body attribute patches; `scripts/lib/modes.mjs` builds pinned light/dark variants from it
- `design/thumbs/*.jpg` - demo screenshots shown on library cards (light + `.dark`)
- `app/` - Nuxt 4 source. Index page lists themes grouped by category with demo thumbnails, `/design/[id]` demo iframe left + prompt right + copy. Cards and iframe load `<id>.dark.*` when the site theme is dark
- `server/api/` - API reads `design/` at runtime; generation step bakes data at build time
- `docs/` - GitHub Pages artifact, committed to the repo

## Deploy

GitHub Pages via `docs/` folder. Repo settings: Pages -> deploy from branch -> main -> /docs.

## Prompt pipeline

`scripts/process-prompts.mjs` reads each `design/raw/*.md`, extracts the AI prompt block, sends it with `design/agent.md` as system prompt to OpenRouter (glm-5.3), writes `design/prompts/<same-name>.md` in English, then deletes the processed raw file. State files `.prompt-state.json` track progress; the script is resumable and skips completed files.