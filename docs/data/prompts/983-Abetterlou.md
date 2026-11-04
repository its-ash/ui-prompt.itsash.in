# Coding AI Prompt — Abetterlou Landing Page

## 1. Strict Rules & Architecture

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. Forbid `style="..."` attributes in HTML. Target all design properties via class/ID selectors only. Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` (and theme classes) using CSS variables:
- Colors: `--color-espresso: #140b00`, `--color-midnight-cocoa: #0b0600`, `--color-warm-cream: #fff1e0`, `--color-soft-cream: #f1f1f1`, `--color-walnut: #43392d`, `--color-cedar: #4f4538`, `--color-driftwood: #85796c`, `--color-burnt-edge: #181109`, `--color-amber-forge: #ffb442`.
- Map to semantic tokens: `--primary: var(--color-amber-forge)`, `--bg-primary: var(--color-espresso)`, `--bg-secondary: var(--color-midnight-cocoa)`, `--text-primary: var(--color-warm-cream)`, `--text-secondary: var(--color-driftwood)`, `--text-success`, `--text-error`, `--border-default: var(--color-walnut)`, `--border-error`, `--border-success`.
- Contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text — enforce for every theme.
- Light mode background: do not default to pure white; use `#fefefe` where near-white is needed.
- Radius & shadows: `--radius-sm: 6px`, `--radius-md: 6px`, `--radius-lg: 9999px`, `--shadow-sm`, `--shadow-md`. Note: pill radius (9999px) for buttons/inputs/links; 6px for cards/nav/structural surfaces.
- Spacing & transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode Support**
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or `.dark` class. Theme variables switch seamlessly without HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build layouts with Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified otherwise. Mobile-responsive out of the box (rows to columns on small viewports). No horizontal scrolling.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless another framework requested. Utility classes map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: include Google Font `<link>`/`@import` for PP Neue Montreal (substitute Inter if unavailable) and bind to `--font-base`. Weights 400 and 500 only — no weight 600+.
- Icons: use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 2. Component Design Specifications

**2.1 Button Component**
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`), min touch target 44x44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring via CSS variables for keyboard nav.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles via `--text-success`/`--text-error`.

**2.2 Card Component**
- Default: flexible flexbox, subtle borders and elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight card borders when child link/button focused.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and guidance text.

**2.3 Form & Input**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

**2.4 Modal / Popup**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in light/dark. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visibly distinct in both themes.

## 4. Deliverables & Output Format

- File structure: separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- Naming convention: one consistent convention (BEM or fixed utility set) across the deliverable — never mix.
- No unrequested placeholders: prohibit lorem-ipsum-only submissions where real copy/labels supplied; placeholders only where content genuinely unspecified.

## 5. Edit Mode
Not applicable — this is a from-scratch build.

## 6. Theme: Abetterlou — "Embers on saddle leather"

**Style summary:** Warm dark "private clinic at dusk" system. Coffee-black canvas (#140b00), cream typography (#fff1e0), single amber accent (#ffb442) firing only on action. PP Neue Montreal at weights 400/500, geometric and clinical but editorial due to cream ink and tight negative tracking on 43–81px. Shape contrast: full-pill controls (buttons/inputs/links ~9999px radius) sit on gently squared 6px surfaces. Restraint: one chromatic accent, two font weights, compact 12px gaps, 52px section breath.

**Tokens:**
- Colors as listed in 1.2.
- Typography: PP Neue Montreal (substitute Inter if needed), weights 400/500. Sizes per scale: caption 12px (lh 1.4, ls 0.12px), body 14px (lh 1.5), body-lg 16px, subheading 19px, heading-sm 22px (ls -0.05px), heading-lg 35px (ls -0.21px), display 43px (ls -0.3px), display-lg 55px (ls -0.44px), hero 73px (ls -0.8px), hero-xl 81px (ls -1.13px). OpenType features `"ss01" on, "kern" on, "liga" on`.
- Spacing: 4,6,8,9,10,12,13,14,16,20,24,28,32,52,72,152px. Section gap 52px, card padding 12px, element gap 12px.
- Border radius: nav 6px, cards 6px, icons 9999px, inputs 9999px, buttons 9999px.
- Page max-width 1200px.

**Do's:**
- Amber Forge (#ffb442) exclusively for primary actions and one-per-section accent moments — never large surface fills.
- Pill radius (9999px) on all buttons/inputs/inline links; 6px on cards/nav/structural surfaces.
- PP Neue Montreal weight 400 body, 500 headings/emphasis only — no 600+.
- Tight negative letter-spacing at 27px+, scaling -0.05px at 22px to -1.13px at 81px.
- Section vertical spacing 52px, element gaps 12px.
- Cream Outlined Pill beside Amber Filled Pill for primary/secondary hierarchy.
- Elevation via Amber-on-Espresso contrast and 1px Walnut hairlines — never box-shadows or blur.

**Don'ts:**
- No second chromatic accent.
- No pure black (#000000) or pure white (#ffffff); stay in Espresso→Warm Cream band.
- No box-shadows, blurs, or glows — depth via border tone and color contrast only.
- No pill button inside 6px card frame; no card with 9999px radius.
- No body text below 14px or above 18px.
- No amber text on light sections — on Cream surfaces use Espresso for primary text.
- No more than two font weights on a single screen.

**Surfaces:** Espresso Canvas #140b00 (base), Midnight Cocoa #0b0600 (footer/recessed), Walnut Outline #43392d (borders), Amber Signal #ffb442 (action fill), Warm Cream #fff1e0 (inverse light bands).

**Elevation:** none — flat, depth via color contrast and 1px hairlines.

**Imagery:** Cinematic masculine lifestyle photography (60+ men, golden-hour outdoor). Full-bleed hero with Espresso scrim. No illustrations/product shots/abstract graphics except clock-dial data viz. Monochrome line icons in Warm Cream ~16–20px inside Walnut-bordered circular containers.

**Layout:** Max-width 1200px centered rail, full-bleed hero. Hero split: left rail headline+subtext+CTA, right side photograph. Below: 3-up feature grid on Espresso canvas with hairline bottom borders. Section rhythm alternates Espresso bands and occasional Cream bands (FAQ flips to Cream-on-Espresso). Headlines left-align by default, 52px vertical breath. Transparent top nav becomes solid Espresso on scroll. Comfortable but compact density.

**Components to build (invent fictional brand name, product, and copy — never use real brand names/logos/trademarks):**

1. **Hero:** full-bleed photograph with Espresso scrim. Headline 73px PP Neue Montreal weight 400, #fff1e0, ls -0.80px, lh 1.0. Subtext 16px weight 400 #85796c, max-width 440px. Amber Filled Pill Button (#ffb442 fill, #fff1e0 text, 9999px radius, 12px 15px padding) + 36px Amber Forge Arrow Icon Circle.

2. **Features (3 cards):** transparent surfaces, 1px #43392d bottom border, 12px padding. Each: 40px circular Walnut-bordered icon container, 14px weight 500 #fff1e0 title, 14px weight 400 #85796c body. 12px gap icon-to-text.

3. **How It Works (3 steps):** numbered steps with title + body, consistent styling.

4. **Testimonials:** quote cards with author attribution.

5. **Pricing (3 tiers):** tier cards with price, feature list, CTA button.

6. **FAQ accordion:** on #fff1e0 surface, full-width rows, 1px #43392d separator, question 17px weight 500 #140b00, + icon right in #140b00, 14px vertical padding per row.

7. **Final CTA:** centered headline + Amber Filled Pill Button.

8. **Footer:** Midnight Cocoa #0b0600 surface, Warm Cream/Driftwood content, compact rows, legal text caption 12px, secondary links.

**Additional components:** Top nav (transparent→Espresso on scroll, ABL-style monogram left, nav links center, outlined Cream pill "Patient Portal" + Amber filled "Join the list" right, 6px radius on inner elements). Pill input field (transparent, 1px #4f4538 border, 9999px radius, 12px vertical padding, 14px #85796c placeholder→#fff1e0 on input, focus border #ffb442). Badge/tag (Walnut fill or outlined Cream, 9999px radius, 4–10px vertical padding, 12px text). Clock-dial data graphic optional (Midnight Cocoa band, 60 Warm Cream dots ring, vertical pendulum line, 69px numeric readout, 13px label).

**Brand:** Invent a fictional brand name, product, and all copy. Never use real brand names, logos, trademarks, or product names. All user-facing copy in English.

**Deliverables:** `index.html`, `style.css`, `script.js`. Consistent naming convention. No unrequested placeholders. Include dark mode toggle with localStorage persistence and `prefers-color-scheme` fallback. Google Fonts + Material Symbols. No inline SVGs. No inline CSS. Mobile-first responsive. Respect `prefers-reduced-motion`. Full keyboard accessibility.
