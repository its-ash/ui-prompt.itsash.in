# Coding AI Prompt — AVNIER-Themed Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a **fictional brand** (invent a new name, logo wordmark, product names, and copy — never use "AVNIER" or any real brand trademarks). The visual language is a nocturnal film-set aesthetic: an almost binary black-and-white system, technical monospace utility text, oversized custom-display category labels, dark grainy equipment-focused photography, and sharp square controls. Purple or warm production-light color must remain contained inside imagery only — never in the interface palette.

Deliverables: separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`). All styling lives in `style.css` via class/ID selectors only.

## 2. Design Tokens (CSS Variables)
Define all tokens in `:root` and a `.dark` class / `@media (prefers-color-scheme: dark)` block. Mandatory dark mode with `localStorage` persistence and a visible toggle with correct `aria-pressed`/`aria-label`, falling back to `prefers-color-scheme` on first visit.

Colors:
- `--color-black: #000000`
- `--color-white: #ffffff`
- `--color-charcoal-ink: #0a0a0a`
- `--color-focus-gray: #737373`
- `--primary: var(--color-black)` (light) / `var(--color-white)` (dark)
- `--secondary: var(--color-white)` (light) / `var(--color-black)` (dark)
- `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` — enforce contrast pairing: light bg pairs with dark text, dark bg pairs with light text, in every theme.
- Light-mode background must not be pure white where a tint is appropriate; where near-white is needed use `#fefefe`.

Typography (Google Fonts mandatory — no inline SVGs, no local icon files):
- `--font-space-mono`: "Space Mono" (weight 400), substitute "IBM Plex Mono".
- `--font-avnier-font`: a broad compact display face; substitute "Space Mono" (weights 400, 500) since the custom face is unavailable. Bind via `--font-base`.
- `--font-rubik`, `--font-arial`, `--font-gtstandard-m` are not required; use only Space Mono + display substitute.
- Type scale tokens: `--text-utility-link` (Space Mono 400 12px / 1.4 / 0.996px), `--text-body` (13px / 1.2), `--text-footer-heading` (14px / 1.43), `--text-account-label` (14px / 1.2), `--text-image-panel-heading` (display 500 15px / 1.14), `--text-hero-heading` (display 500 25px / 1.18), `--text-editorial-heading` (display 500 33px / 1.3), `--text-category-heading` (display 500 55px / 1.18).

Spacing & shapes:
- Spacing tokens `--spacing-4`..`--spacing-80` per spec (4,5,8,10,12,13,15,16,19,20,22,24,27,30,50,80).
- `--radius-sm/md/lg: 0px`; cards, images, inputs, buttons all 0px radius. Exception: circular floating close control may be fully round.
- Shadows: `--shadow-subtle: 0 0 0 1px #000000`; `--shadow-subtle-2: 0 0 0 1px rgba(0,0,0,0.55)`. No soft drop shadows.
- `--spacing-gap: 10px` (element gap), section gap 50px, card padding 30px.
- `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.

## 3. Layout & Architecture Rules
- Flexbox for all layouts; every flex container defaults to `align-items: center` unless justified.
- Mobile-first, no horizontal scroll; rows collapse to columns on small viewports.
- Tailwind CSS (or clean custom CSS via `@layer`/`@apply`) mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).
- Naming convention: BEM throughout; never mix conventions.
- Google Material Symbols/Icons for all icons; no raw inline SVGs or local icon files.
- Semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Respect `prefers-reduced-motion`.
- No lorem-ipsum where real copy is supplied; placeholders only where content genuinely unspecified.

## 4. Component State Requirements
Enforce full state styling via CSS classes (no inline styles):
- Buttons: default (flex, center, gap 0.5rem, min 44x44px), hover (brightness/shadow, cursor pointer), focus (ring via variables), active (scale 0.97), loading (disabled, spinner/icon, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`).
- Cards: default, hover (translateY -2px), focus-within, loading skeleton (shimmer), empty state (icon + guidance).
- Forms/inputs: empty, focused, filled, valid, invalid, disabled, read-only; flex wrapper with label, input, error container.
- Modals: opening/open/loading/success-error/closing (CSS transitions), centered flex, backdrop, icon close button, focus trap, Esc/overlay close.

Global: responsive by default, smooth transitions on state changes, sufficient contrast both themes, never color-only state communication, mandatory visual feedback on every interaction, destructive actions visually distinct in both themes.

## 5. Page Sections to Build
1. **Hero** — black split carousel: dark product photo left, `#000000` info panel right. White product title in display 25px/29.5px weight 500; supporting copy Space Mono 13px uppercase white. 1px white carousel rule beneath with numbered stops, 0px radius. Minimal top nav: Space Mono 13px uppercase white links, centered white wordmark, thin outlined square search/account/bag icons. Dark hero discovery link: white uppercase mono text beside circular outlined play-arrow icon, transparent bg, 0px radius, no padding, 1px white outline only on icon.
2. **Features** — 3 cards (sharp 0px, ruled, no shadows).
3. **How It Works** — 3 steps.
4. **Testimonials**.
5. **Pricing** — 3 tiers.
6. **FAQ**.
7. **Final CTA**.
8. **Footer** — secondary links: 4-block service benefit row (thin white line icons + Space Mono 12px uppercase white copy, 10px gap), ruled link columns (Space Mono 14px/20.02px white titles + smaller links), newsletter email field (transparent on black, 1px white border, white text, 0px radius, padding 15px 50px 15px 0px, right-aligned outlined arrow submit), legal/payment row. Divide zones with 1px white rules.

Additional components from spec: White Editorial Introduction (white full-width, offset text block, display 33px/42.9px weight 500 black uppercase heading, Space Mono 13px uppercase paragraph, outlined black play-arrow link). Category Index Row (white, 1px black top rules, display 55px/64.9px weight 500 black uppercase labels, small counts, right-aligned thin outlined triangle arrow, 0px). Editorial Image Tile (edge-to-edge sharp dark tiles, eyebrow Space Mono 13px white, title display 15px/17.1px weight 500 white, right arrow). Shipping Utility Strip (white, Space Mono 13px uppercase black, plus-sign separators, 10px gap). Black Skip Button (black filled, white Space Mono 15px uppercase tracked 1px, padding 9px 30px 11px, 0px). Close Control (circular black with white diagonal cross — exception to square system).

## 6. Do's and Don'ts (enforce)
Do: white default canvas, black full-bleed hero/footer bands; Space Mono 12–15px for nav/labels/footer/inputs; display 55px/64.9px weight 500 black on white for category labels; 1px solid black/white rules instead of shadows; 0px radius on cards/images/buttons/inputs; 50px section gaps, 30px card padding, 10px compact gaps; dark near-monochrome photography with color contained in image.
Don't: saturated accents, gradients, colored status pills, tinted button fills; round commerce controls beyond circular close; soft drop shadows; large headings in Space Mono when display available; lowercase/sentence-case for nav/utility/category/metadata; turn every link into filled button (keep transparent text-and-arrow discovery links on both surfaces); bright high-key lifestyle photography.

## 7. Surfaces & Elevation
Surfaces physically flat. Separation via abrupt white/black bands and 1px rules; only depth cue is restrained 0 0 0 1px outline on isolated controls and focused inputs.

## 8. Imagery
Photographic, product-focused: close crops of bags, garments, production hardware, work surfaces in low-key lighting, full-bleed inside sharp rectangular panels, often so dark equipment silhouettes merge with black sections. Icons: thin outlined white/black line drawings, technical equipment-label character.

## 9. Output
Produce `index.html`, `style.css`, `script.js` only. Invent all brand/product/copy content; never reference the real brand. Ensure dark mode toggle, persistence, accessibility, and all component states are implemented.# Coding AI Prompt — AVNIER-Themed Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a **fictional brand** (invent a new name, logo wordmark, product names, and copy — never use "AVNIER" or any real brand trademarks). The visual language is a nocturnal film-set aesthetic: an almost binary black-and-white system, technical monospace utility text, oversized custom-display category labels, dark grainy equipment-focused photography, and sharp square controls. Purple or warm production-light color must remain contained inside imagery only — never in the interface palette.

Deliverables: separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`). All styling lives in `style.css` via class/ID selectors only.

## 2. Design Tokens (CSS Variables)
Define all tokens in `:root` and a `.dark` class / `@media (prefers-color-scheme: dark)` block. Mandatory dark mode with `localStorage` persistence and a visible toggle with correct `aria-pressed`/`aria-label`, falling back to `prefers-color-scheme` on first visit.

Colors:
- `--color-black: #000000`
- `--color-white: #ffffff`
- `--color-charcoal-ink: #0a0a0a`
- `--color-focus-gray: #737373`
- `--primary: var(--color-black)` (light) / `var(--color-white)` (dark)
- `--secondary: var(--color-white)` (light) / `var(--color-black)` (dark)
- `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` — enforce contrast pairing: light bg pairs with dark text, dark bg pairs with light text, in every theme.
- Light-mode background must not be pure white where a tint is appropriate; where near-white is needed use `#fefefe`.

Typography (Google Fonts mandatory — no inline SVGs, no local icon files):
- `--font-space-mono`: "Space Mono" (weight 400), substitute "IBM Plex Mono".
- `--font-avnier-font`: a broad compact display face; substitute "Space Mono" (weights 400, 500) since the custom face is unavailable. Bind via `--font-base`.
- `--font-rubik`, `--font-arial`, `--font-gtstandard-m` are not required; use only Space Mono + display substitute.
- Type scale tokens: `--text-utility-link` (Space Mono 400 12px / 1.4 / 0.996px), `--text-body` (13px / 1.2), `--text-footer-heading` (14px / 1.43), `--text-account-label` (14px / 1.2), `--text-image-panel-heading` (display 500 15px / 1.14), `--text-hero-heading` (display 500 25px / 1.18), `--text-editorial-heading` (display 500 33px / 1.3), `--text-category-heading` (display 500 55px / 1.18).

Spacing & shapes:
- Spacing tokens `--spacing-4`..`--spacing-80` per spec (4,5,8,10,12,13,15,16,19,20,22,24,27,30,50,80).
- `--radius-sm/md/lg: 0px`; cards, images, inputs, buttons all 0px radius. Exception: circular floating close control may be fully round.
- Shadows: `--shadow-subtle: 0 0 0 1px #000000`; `--shadow-subtle-2: 0 0 0 1px rgba(0,0,0,0.55)`. No soft drop shadows.
- `--spacing-gap: 10px` (element gap), section gap 50px, card padding 30px.
- `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.

## 3. Layout & Architecture Rules
- Flexbox for all layouts; every flex container defaults to `align-items: center` unless justified.
- Mobile-first, no horizontal scroll; rows collapse to columns on small viewports.
- Tailwind CSS (or clean custom CSS via `@layer`/`@apply`) mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).
- Naming convention: BEM throughout; never mix conventions.
- Google Material Symbols/Icons for all icons; no raw inline SVGs or local icon files.
- Semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Respect `prefers-reduced-motion`.
- No lorem-ipsum where real copy is supplied; placeholders only where content genuinely unspecified.

## 4. Component State Requirements
Enforce full state styling via CSS classes (no inline styles):
- Buttons: default (flex, center, gap 0.5rem, min 44x44px), hover (brightness/shadow, cursor pointer), focus (ring via variables), active (scale 0.97), loading (disabled, spinner/icon, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`).
- Cards: default, hover (translateY -2px), focus-within, loading skeleton (shimmer), empty state (icon + guidance).
- Forms/inputs: empty, focused, filled, valid, invalid, disabled, read-only; flex wrapper with label, input, error container.
- Modals: opening/open/loading/success-error/closing (CSS transitions), centered flex, backdrop, icon close button, focus trap, Esc/overlay close.

Global: responsive by default, smooth transitions on state changes, sufficient contrast both themes, never color-only state communication, mandatory visual feedback on every interaction, destructive actions visually distinct in both themes.

## 5. Page Sections to Build
1. **Hero** — black split carousel: dark product photo left, `#000000` info panel right. White product title in display 25px/29.5px weight 500; supporting copy Space Mono 13px uppercase white. 1px white carousel rule beneath with numbered stops, 0px radius. Minimal top nav: Space Mono 13px uppercase white links, centered white wordmark, thin outlined square search/account/bag icons. Dark hero discovery link: white uppercase mono text beside circular outlined play-arrow icon, transparent bg, 0px radius, no padding, 1px white outline only on icon.
2. **Features** — 3 cards (sharp 0px, ruled, no shadows).
3. **How It Works** — 3 steps.
4. **Testimonials**.
5. **Pricing** — 3 tiers.
6. **FAQ**.
7. **Final CTA**.
8. **Footer** — secondary links: 4-block service benefit row (thin white line icons + Space Mono 12px uppercase white copy, 10px gap), ruled link columns (Space Mono 14px/20.02px white titles + smaller links), newsletter email field (transparent on black, 1px white border, white text, 0px radius, padding 15px 50px 15px 0px, right-aligned outlined arrow submit), legal/payment row. Divide zones with 1px white rules.

Additional components from spec: White Editorial Introduction (white full-width, offset text block, display 33px/42.9px weight 500 black uppercase heading, Space Mono 13px uppercase paragraph, outlined black play-arrow link). Category Index Row (white, 1px black top rules, display 55px/64.9px weight 500 black uppercase labels, small counts, right-aligned thin outlined triangle arrow, 0px). Editorial Image Tile (edge-to-edge sharp dark tiles, eyebrow Space Mono 13px white, title display 15px/17.1px weight 500 white, right arrow). Shipping Utility Strip (white, Space Mono 13px uppercase black, plus-sign separators, 10px gap). Black Skip Button (black filled, white Space Mono 15px uppercase tracked 1px, padding 9px 30px 11px, 0px). Close Control (circular black with white diagonal cross — exception to square system).

## 6. Do's and Don'ts (enforce)
Do: white default canvas, black full-bleed hero/footer bands; Space Mono 12–15px for nav/labels/footer/inputs; display 55px/64.9px weight 500 black on white for category labels; 1px solid black/white rules instead of shadows; 0px radius on cards/images/buttons/inputs; 50px section gaps, 30px card padding, 10px compact gaps; dark near-monochrome photography with color contained in image.
Don't: saturated accents, gradients, colored status pills, tinted button fills; round commerce controls beyond circular close; soft drop shadows; large headings in Space Mono when display available; lowercase/sentence-case for nav/utility/category/metadata; turn every link into filled button (keep transparent text-and-arrow discovery links on both surfaces); bright high-key lifestyle photography.

## 7. Surfaces & Elevation
Surfaces physically flat. Separation via abrupt white/black bands and 1px rules; only depth cue is restrained 0 0 0 1px outline on isolated controls and focused inputs.

## 8. Imagery
Photographic, product-focused: close crops of bags, garments, production hardware, work surfaces in low-key lighting, full-bleed inside sharp rectangular panels, often so dark equipment silhouettes merge with black sections. Icons: thin outlined white/black line drawings, technical equipment-label character.

## 9. Output
Produce `index.html`, `style.css`, `script.js` only. Invent all brand/product/copy content; never reference the real brand. Ensure dark mode toggle, persistence, accessibility, and all component states are implemented.
