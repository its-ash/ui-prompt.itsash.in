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

## Structure

- `design/raw/*.md` - source theme specs (833 files), input only
- `design/prompts/*.md` - processed English prompts matching `design/raw` filenames
- `design/categories.json` - theme name, category, keywords, era
- `app/` - Nuxt 4 source. Index page lists themes grouped by category, `/design/[id]` full view + copy
- `server/api/` - API reads `design/` at runtime; generation step bakes data at build time
- `docs/` - GitHub Pages artifact, committed to the repo

## Deploy

GitHub Pages via `docs/` folder. Repo settings: Pages -> deploy from branch -> main -> /docs.

## Prompt pipeline

`scripts/process-prompts.mjs` reads each `design/raw/*.md`, extracts the AI prompt block, sends it with `design/agent.md` as system prompt to OpenRouter (glm-5.3), writes `design/prompts/<same-name>.md` in English. State files `.prompt-state.json` track progress; the script is resumable and skips completed files.