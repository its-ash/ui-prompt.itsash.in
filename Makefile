run:
	npm run dev

build:
	npm run generate

docs: build
	@rm -rf docs
	@mv .output/public docs
	@touch docs/.nojekyll

deploy: docs
	git checkout main
	git add -A
	@git commit -m "$$(copilot -sp 'Analyze the staged git changes and generate a concise commit message. Output ONLY the commit message. Do not execute any commands. Do not include quotes, markdown, explanation, or bullet points.')" || git commit -m "Update site" --allow-empty-message || true
	git push origin main

process:
	node scripts/process-prompts.mjs

categorize:
	node scripts/categorize.mjs

demos:
	node --env-file-if-exists=.env scripts/build-demos.mjs

FROM ?= 400
SKIP ?= 478-Vintage-Lithograph-Victorian,655-Bold-Poster,667-Monochrome,684-Vellum,803-CENTO-one-hundred

redesign:
	DEMO_REDESIGN=1 DEMO_FROM=$(FROM) DEMO_CONCURRENCY=8 DEMO_SKIP=$(SKIP) node --env-file-if-exists=.env scripts/build-demos.mjs
	node scripts/check-dark.mjs
	node scripts/build-thumbs.mjs
	node scripts/bake-data.mjs

thumbs:
	node scripts/build-thumbs.mjs

brand:
	node scripts/build-brand.mjs

check-dark:
	node scripts/check-dark.mjs

fix-dark: check-dark
	node --env-file-if-exists=.env scripts/fix-dark.mjs
	node scripts/check-dark.mjs

redo-dark: check-dark
	node --env-file-if-exists=.env scripts/fix-dark.mjs --redo
	node scripts/check-dark.mjs

.PHONY: run build docs deploy process categorize demos redesign thumbs brand check-dark fix-dark redo-dark