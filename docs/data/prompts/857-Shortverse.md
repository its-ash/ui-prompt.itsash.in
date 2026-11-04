# Coding AI Prompt — Shortverse-Style Landing Page (Fictional Brand)

You are building a complete landing page for a **fictional brand** (invent a name, product, and all copy). Reuse only the visual style described below. Never use the real brand name "Shortverse", its logo, trademarks, or product names anywhere in the page.

## Deliverables
Separate `index.html`, `style.css`, and `script.js`. No inline `style="..."` attributes. No inline `<script>` blocks beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) throughout. All user-facing copy in English.

## 1. CSS-First Architecture & Tokens
Store all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`). Required tokens:

Colors (light mode):
- `--color-white-screen: #ffffff` (page bg, nav, hero utility buttons, light text on imagery)
- `--color-charcoal-ink: #262626` (headings, body, nav labels, film titles, dark icons)
- `--color-mist-tile: #f1f1f1` (commenter strips, quiet tiles, secondary surfaces)
- `--color-lilac-wash: #e4eaff` (pale icon tiles, highlighted utility surfaces)
- `--color-divider-ash: #eaeaea` (hairline borders, search outlines, footer base, separators)
- `--color-metadata-gray: #999999` (metadata, timestamps, muted helper copy)
- `--color-lavender-projector: #a77eff` (brand mark, section icons, large featured violet fields)
- `--color-ultraviolet-type: #6c00f4` (submission/account labels, violet icon details)

Theme tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.

Contrast pairing: light bg → dark text; dark bg → light text, in every theme. Light-mode page background must not be pure white where a tint fits; use `#fefefe` only where near-white is needed (here `#ffffff` is explicitly specified, so use it).

Spacing scale (4px base): `--spacing-4: 4px`, `8, 12, 16, 20, 24, 32, 40, 60, 64, 140`.

Border radius: cards 8px, icons 9999px, pills 9999px, badges 0px, inputs 5px, buttons 5px, imageTiles 0px.

Elevation: keep flat; hierarchy via photographic contrast, surface shifts, 1px `#eaeaea` or `rgba(0,0,0,0.15)` borders. Icon separation: `0 2px 0 rgba(0,0,0,0.25)`. No diffuse card shadows.

Dark mode: define under `@media (prefers-color-scheme: dark)` and `.dark` class. Persist user choice via `localStorage`, falling back to `prefers-color-scheme`. Provide a visible toggle with correct `aria-pressed`/`aria-label`.

## 2. Typography & Icons
Google Fonts mandatory. Include CooperHewitt substitute "Barlow Semi Condensed" (weights 300,500,600,700,800) and JetBrainsMono substitute "IBM Plex Mono" (weights 300,400,700,800) via `<link>`/`@import`, bound to `--font-base` and family tokens.

Type scale tokens:
- `--text-film-metadata`: JetBrainsMono 300 12px / 1.4 / 0.144px
- `--text-nav-label`: JetBrainsMono 800 14px / 1 / 1.12px
- `--text-body`: CooperHewitt 300 16px / 1.4 / 0
- `--text-film-title`: CooperHewitt 700 18px / 1.3 / 0
- `--text-footer-heading`: CooperHewitt 700 32px / 1.5 / 0.608px
- `--text-hero-display`: CooperHewitt 800 54px / 1 / 0.594px
- `--text-section-display`: CooperHewitt 800 54px / 0.88 / 0

Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 3. Layout & Flexbox
Flexbox for all layout. Every flex container defaults to `align-items: center` unless justified exception. Mobile-first, responsive, no horizontal scroll. Section gap 27px, card padding 16px, element gap 16px.

## 4. Components & States
Enforce all states via CSS classes (no inline styles):

Buttons: default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), hover (brightness/shadow, cursor pointer), focus (distinct ring via CSS vars), active (transform scale 0.97), loading (disabled interactions, CSS spinner/animated icon, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (via `--text-success`/`--text-error`).

Cards: default (flex, subtle borders, elevation via `--bg-secondary`), hover (shadow shift or translateY(-2px)), focus-within (border highlight), loading skeleton (shimmer, no layout jump), empty state (icon + guidance text).

Forms/inputs: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

Modals: opening/open/loading/success-error/closing (CSS transitions), centered flex, backdrop overlay, icon close button, focus trapping, Esc/overlay close.

## 5. Section Specifications (Landing Page)

**Nav (Top Catalog Navigation):** white bar, 1px `#eaeaea` bottom border. Category/account labels JetBrainsMono 14px/800 uppercase 1.12px tracking, `#262626`, 16px control gaps. Include search field (white input, 1px `#eaeaea` border, 5px radius, 14px horizontal padding, muted `#999999` placeholder, compact `#262626` search icon) and Lavender Submission Button (`#e4eaff` bg, `#6c00f4` JetBrainsMono 14px/800 uppercase 1.12px, 5px radius, 4px 24px padding).

**Hero (Hero Spotlight Frame):** full-bleed cinematic still, black-to-transparent left overlay, white text on right-visible image. Overlay copy: spotlight line 24px/700 CooperHewitt white; title 54px/800 1.0 line-height 0.6px tracking white; metadata 12px/300 JetBrainsMono uppercase white. Include White Watch-Film Button (white rect, `#262626` JetBrainsMono 14px/800 uppercase 1.12px, 1px rgba(0,0,0,0.15) border, 5px radius, 0px 20.88px padding, solid `#262626` play triangle before label) and Hero Slide Dots (small white/`#999999` circular indicators 9999px radius, tight 4px rhythm).

**Features (3 cards):** use Film Thumbnail Card style — sharp 0px-corner still, then `#262626` CooperHewitt 18px/700 title, smaller creator line, `#999999` JetBrainsMono 12px/300 uppercase metadata. 8px image/text separation, 12px gaps between cards. No rounding on stills.

**How It Works (3 steps):** Editorial Section Header style — 54px/800 CooperHewitt `#262626` at 0.88 line-height, 8px-radius `#e4eaff` icon tile, `#6c00f4` outlined section icon, JetBrainsMono uppercase see-all link nearby. Steps as text-first columns.

**Testimonials:** Comment Column style — CooperHewitt 18px/700 `#262626` title, 16px/300 `#262626` comment copy, 12px spacing between stacked text groups, no card outlines around main comment text. Commenter Activity Strip — avatar/name/status/timestamp in `#f1f1f1` strip, 5px radius, 16px padding, `#262626` name, `#999999` metadata.

**Pricing (3 tiers):** cards with 8px radius, `#eaeaea` borders, `#f1f1f1` surfaces. Use Pill Utility Marker (9999px radius, 8px padding) for badges. Destructive/differentiated tier visually distinct.

**FAQ:** accordion-style, flex layout, focus states, aria attributes.

**Final CTA:** Violet Join Banner — broad `#a77eff` field, `#ffffff` CooperHewitt 32px/700 at 48px line-height 0.6px tracking. Distinct from footer.

**Footer:** `#eaeaea` base surface, secondary links, `#262626` text.

## 6. UX & Micro-interactions
Responsive by default, smooth CSS transitions (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`. Accessibility: sufficient contrast both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback. Mandatory visual feedback on every interaction. Destructive actions visually distinct in both themes.

## 7. Copy Locale
All user-facing copy in English. Invent fictional brand name, product, and copy. Never use real brand names, logos, trademarks, or product names.

## 8. Naming & Placeholders
BEM naming. No lorem-ipsum-only where real copy is supplied; placeholders only where genuinely unspecified.

## 9. Edit Mode (not applicable — from-scratch build)

Output only the finished coding-AI prompt. No preamble. Mirror numbered headers and bolded sub-rules. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause.
