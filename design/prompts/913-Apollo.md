# Coding AI Prompt — Apollo Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a fictional brand (invent a brand name, product, and copy — never reuse any real brand name, logo, trademark, or product name from the source spec). The visual style is "Apollo": a warm, editorial, print-publication-inspired light theme. Theme mood: warm cream canvas, hairline ash-gray rules, whisper-thin display serif, a single terracotta accent rationed to actions/accents, deep espresso brown as structural dark. Output three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere.

## 2. CSS-First Architecture & Zero Inline CSS
- All styling lives in `style.css`. HTML must be clean, semantic, and styling-agnostic.
- Target all design via class/ID selectors only. Use one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- Minimal HTML modifications: changing the look must require editing only CSS.

## 3. CSS Variables & Theme Tokens
Define all tokens in `:root` (light) and under `@media (prefers-color-scheme: dark)` plus a `.dark` class selector. Required tokens:

**Colors (Light):**
- `--color-espresso-bark: #3c261c` (primary text, nav bg, structural borders)
- `--color-terracotta-ember: #e97451` (primary action borders, active nav, logo monogram)
- `--color-iris-ink: #4a43dd` (decorative display headings only)
- `--color-honey-parchment: #f7efc5` (highlight washes, eyebrow bg)
- `--color-warm-linen: #f9f8f0` (page canvas — never pure white)
- `--color-ash-mist: #dddedf` (hairline borders/dividers)
- `--color-blush-cream: #fcede8` (hover/callout surfaces)
- `--color-lilac-mist: #e4e3f2` (secondary panel surface)
- `--color-carbon: #000000` (image fills, footer text only)

Map these to generic theme tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Enforce contrast pairing: light bg ↔ dark text, dark bg ↔ light text in every theme.

**Dark mode tokens:** Provide dark equivalents under `@media (prefers-color-scheme: dark)` and `.dark` class. Invert canvas to a warm dark espresso-tinted surface; keep terracotta accent; ensure all contrast pairings hold. Theme switching must be seamless without HTML restructuring.

**Shape/Spacing/Elevation tokens:**
- `--radius-sm/md/lg` all `3px` (non-negotiable — no radius larger than 3px anywhere)
- `--shadow-sm/md`: none (no drop shadows; separation via hairlines/tonal shifts)
- `--spacing-gap: 20px`, `--section-gap: 68px`, `--card-padding: 45px`
- `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`
- `--font-base` bound to MonaSans (substitute Inter via Google Fonts)
- `--font-display` bound to a whisper-thin serif (substitute Cormorant at weight 300 via Google Fonts)

**Spacing scale tokens:** `--spacing-10,14,17,18,20,23,30,34,40,45,60,68,90` (px values per spec).

## 4. Mandatory Dark Mode Support
- Provide dark tokens under both `@media (prefers-color-scheme: dark)` and `.dark` class.
- Include a visible theme toggle with correct `aria-pressed`/`aria-label`.
- Persist choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.

## 5. Flexbox Layout & Mobile-First
- All layouts use Flexbox (`display: flex`). Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first responsive: rows collapse to columns on small viewports; no horizontal scrolling.
- Page max-width 1200px centered. Section vertical gap 68px. Card/section padding 45px. Element gap 20px.

## 6. Typography & Icons (Google Fonts Mandatory)
- Text: load Google Fonts (Inter as MonaSans substitute; Cormorant as paradigm-pro substitute at weight 300) via `<link>`/`@import`, bind to `--font-base`/`--font-display`.
- Icons: Google Material Symbols only. No raw inline SVGs or local icon files. (Note: Apollo uses minimal icons — only the W monogram logo; use a styled text/SVG-free monogram glyph or Material Symbol as the brand mark, not a real logo.)

## 7. Component Specifications

**Buttons:**
- Primary CTA: transparent fill, 1px terracotta border, 3px radius, padding 23px 45px. Text: weight 500, 12px, uppercase, letter-spacing 0.07em. Color: warm linen on espresso nav, espresso on warm linen canvas. No shadow.
- Ghost: transparent fill, 1px warm linen border, 3px radius, padding 17px 34px. Text: weight 500, 12px, uppercase, letter-spacing 0.07em, color warm linen. On espresso nav.
- All states: default, hover (brightness/shadow shift + cursor pointer), focus (distinct focus ring via CSS vars), active (transform scale 0.97), loading (spinner, disabled interactions, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via success/error tokens).
- Minimum touch target 44x44px. Flex layout with align-items center, justify-content center, gap 0.5rem.

**Cards (feature cards):** Flexbox layout, subtle ash-mist borders, no shadow, 3px radius, 45px padding. Hover: subtle transform translateY(-2px) + tonal shift. Focus-within: highlight border. Loading skeleton: shimmer animation. Empty state: Google Icon + guidance text.

**Form/Input (if any):** Empty, focused, filled, valid, invalid, disabled, read-only states. Flex container with label, input, error feedback.

**Modal:** Opening/open/loading/success-error/closing animated via CSS transitions. Centered flex, backdrop overlay, Google Icon close button, focus trapping, close via Esc/overlay click.

## 8. Global UX & Micro-interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No drop shadows anywhere. Separation via hairline borders (ash mist) and tonal shifts only.

## 9. Section Requirements (invent fictional copy)
1. **Hero:** Full-bleed photograph (warm golden-hour), espresso nav overlaid, display headline (paradigm-pro weight 300, 47px, line-height 0.95, letter-spacing 0.08em, warm linen) + eyebrow label (MonaSans weight 500, 14px, uppercase, 0.07em tracking, warm linen) centered over image. Primary CTA.
2. **Features:** 3 cards in a row (collapse on mobile). Each: eyebrow label, heading, body, optional feature list with terracotta dot bullets.
3. **How It Works:** 3 steps, numbered, with descriptions.
4. **Testimonials:** Quotes with attribution.
5. **Pricing:** 3 tiers with feature lists and CTAs.
6. **FAQ:** Accordion-style (CSS-driven, keyboard accessible).
7. **Final CTA:** Centered display heading + button.
8. **Footer:** Secondary links, brand mark, legal.

## 10. Apollo-Specific Styling Rules
- 3px border-radius on every interactive element, card, and image — non-negotiable.
- Ash Mist (#dddedf) for all hairline borders, dividers, card edges.
- Espresso Bark for all body text and structural dark; reserve #000000 for image fills only.
- Terracotta Ember only for primary action borders, active nav states, logo monogram — never large surface fill.
- paradigm-pro weight 300 for all display/hero headlines.
- Uppercase with 0.07-0.1em tracking on section headings, nav links, eyebrow labels.
- 68px vertical section gaps, 45px card/section padding.
- No border-radius > 3px; no #ffffff backgrounds (use warm linen #f9f8f0); no drop shadows; no terracotta large fills; no iris ink for body/nav; no font-weight > 300 for display serif; no mixing multiple accent colors in one view.
- Type scale: caption 12px/1.84, body-sm 14px/1.5, body 18px/1.55, body-lg 20px/1.49, subheading 32px/1.27, heading 36px/1.17, display 47px/0.95. Letter spacing per spec table.
- Feature list bullets: 6px terracotta dot, 14px indent, 14px vertical gap, line-height 1.84.
- Section eyebrow: weight 600, 12px, uppercase, 0.1em tracking, espresso, 30px above heading.
- Section heading: weight 500, 32px, line-height 1.27, uppercase, 0.07em tracking, espresso.
- Display heading (serif): paradigm-pro weight 300, 36px, line-height 0.97, 0.03em tracking, iris ink for brand-voice or espresso for standard.
- Body text: weight 400, 18px, line-height 1.55, espresso, max measure ~600px, 20px paragraph spacing.
- Nav: espresso bg, ~60px height, links weight 500 12px uppercase 0.1em tracking warm linen, padding 17px 34px, active link terracotta border-bottom. Center W monogram in terracotta ~24px. Right: primary CTA.

## 11. Deliverables
- `index.html`, `style.css`, `script.js` separate. No inline script beyond deferred entry reference.
- BEM naming throughout.
- No lorem-ipsum-only where real copy is expected; placeholders only where content genuinely unspecified.
- All user-facing copy in English.

## 12. Edit-Mode (N/A — from-scratch build)
Not applicable; this is a new build.

Generate the three files now. Ensure every interactive state, accessibility requirement, and Apollo styling rule above is implemented. Do not use the real brand name "Apollo" or any of its trademarks — invent a fictional brand.
