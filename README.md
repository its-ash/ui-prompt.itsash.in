# PromptDeck

UI theme prompt library. Browse 833 design themes by category, open a theme in full view, copy the build prompt and paste it into an AI coding agent.

Static Nuxt 4 site. Deploys to GitHub Pages from the `docs/` folder.

## Usage

- `make run` - start dev server
- `make docs` - build the static site into `docs/`
- `make deploy` - build `docs/`, commit and push to `main`

GitHub Pages settings: Pages -> Deploy from branch -> `main` -> `/docs`.

## Prompt pipeline

Source theme specs live in `design/raw/` (833 markdown files). `scripts/process-prompts.mjs` reads each file, extracts the AI prompt block, and sends it to OpenRouter (glm) with `design/agent.md` as the system prompt. Output is written to `design/prompts/` in English, one file per source file. `scripts/categorize.mjs` labels every theme with a category, name, keywords and era into `design/categories.json`.

Run `make process` or `make categorize` with `OPENROUTER_API_KEY` set. Both scripts are resumable - they skip files already done.

`npm run generate` bakes the processed data via `scripts/bake-data.mjs` into `public/data/library.json` before building, so the static site needs no server.

## Structure

```
app/                  Nuxt source (index list + design detail pages)
design/raw/           source theme specs
design/prompts/       processed English build prompts
design/categories.json
public/data/          baked library.json for the static site
scripts/              pipeline scripts
docs/                 static output deployed to GitHub Pages
```