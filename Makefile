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

modes:
	node scripts/detect-modes.mjs

dark: modes
	DEMO_VARIANT=dark node --env-file-if-exists=.env scripts/build-demos.mjs

thumbs:
	node scripts/build-thumbs.mjs

.PHONY: run build docs deploy process categorize demos modes dark thumbs