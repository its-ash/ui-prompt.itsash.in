# Expert UI/UX Coding Prompt — Complete Landing Page

## 1. Project Overview & Architecture

You are building a complete, responsive landing page for a **fictional brand** of your own invention (invent a brand name, product name, tagline, and all copy). **Do NOT use Apple, Apple Watch, or any real brand name, logo, trademark, or product name.** Reuse only the visual style described below.

**Deliverables:** separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere in the HTML.

**Naming convention:** BEM throughout (e.g. `.hero__title`, `.btn--primary`, `.card--feature`). Never mix conventions.

**Framework:** Tailwind CSS via CDN is permitted for utility scaffolding, but all design tokens must live in CSS variables inside `style.css`, and reusable components (`.btn`, `.card`, `.input-group`) must be defined with `@layer components` / `@apply`. Final visual authority is `style.css`.

**Fonts & Icons:** Use Google Fonts only. SF Pro is unavailable on Google Fonts — substitute **Inter** for both display and body (Inter is the documented substitute). Load via `<link>` in `<head>`. Use Google Material Symbols (rounded) for all icons (search, bag, plus, accordion chevrons, check marks). No inline SVGs, no local icon files.

## 2. CSS-First Architecture & Theme Tokens

All visual tokens live in `:root` (light) and `.dark` / `@media (prefers-color-scheme: dark)` (dark). No inline CSS. Class/ID selectors only. Minimal, semantic HTML.

### 2.1 Color Tokens (Light Mode — default)

```
--color-pure-canvas: #f5f5f7;
--color-paper-white: #ffffff;
--color-obsidian: #1d1d1f;
--color-iron-gray: #707070;
--color-slate: #474747;
--color-charcoal: #333336;
--color-mist: #e2e2e5;
--color-fog: #d6d6d6;
--color-void: #000000;
--color-signal-blue: #0071e3;
--color-deep-link-blue: #0066cc;
--color-pulse-green: #03aa49;
--color-deep-green: #03873a;
--color-ultraviolet: #8668ff;
--color-ember-orange: #ed6300;
--color-lagoon-teal: #00a1b3;
```

**Contrast pairing rule:** every light background token pairs with a dark text token and vice versa, in both themes. Enforce for every theme, not just default.

**Light mode background:** page canvas is `#f5f5f7` (not pure white); cards are `#ffffff`. Where a near-white is needed, use `#fefefe` instead of `#ffffff` for non-card surfaces.

### 2.2 Dark Mode (Mandatory)

Provide a complete dark token set under `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`. Invert surfaces: canvas becomes a near-black graphite (e.g. `#1d1d1f`), cards become `#2a2a2d`, text becomes `#f5f5f7`. Chromatic accents (blue, green, violet, orange, teal) remain identical in both themes. Provide a visible theme toggle (sun/moon Material Symbol) with correct `aria-pressed` and `aria-label`. Persist choice in `localStorage`, falling back to `prefers-color-scheme` on first visit. Switching must not require HTML restructuring.

### 2.3 Generic Tokens

```
--primary: var(--color-signal-blue);
--secondary: var(--color-mist);
--bg-primary: var(--color-pure-canvas);
--bg-secondary: var(--color-paper-white);
--text-primary: var(--color-obsidian);
--text-secondary: var(--color-slate);
--text-success: var(--color-pulse-green);
--text-error: var(--color-ember-orange);
--border-default: var(--color-fog);
--border-error: var(--color-ember-orange);
--border-success: var(--color-pulse-green);
--radius-sm: 10px;
--radius-md: 28px;
--radius-lg: 36px;
--radius-pill: 980px;
--shadow-sm: none;
--shadow-md: none;
--spacing-gap: 8px;
--transition-fast: 150ms ease;
--transition-normal: 250ms ease;
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--z-dropdown: 100;
--z-modal: 1000;
--z-toast: 2000;
--font-base: 'Inter', system-ui, sans-serif;
```

**No shadows anywhere** — elevation comes from surface contrast and 1px hairlines only. `--shadow-sm`/`--shadow-md` are defined as `none`.

### 2.4 Typography Tokens

```
--text-caption: 12px;   /* lh 1.33, ls -0.036px */
--text-body-sm: 14px;   /* lh 1.43, ls -0.14px */
--text-body: 17px;      /* lh 1.47, ls -0.272px */
--text-subheading: 21px;/* lh 1.33, ls 0.231px */
--text-heading-sm: 28px;/* lh 1.14, ls -0.252px */
--text-heading: 39px;   /* lh 1.07, ls -0.351px */
--text-heading-lg: 64px;/* lh 1.06, ls -0.96px */
--text-display: 96px;   /* lh 1.04, ls -1.824px */
```

Display sizes (64–96px) use weight 600 with negative tracking; body uses 400, links/buttons use 600. Never heavier than 600 for display.

### 2.5 Spacing & Layout Tokens

Spacing scale: 4, 8, 9, 10, 13, 14, 15, 18, 20, 24, 28, 32, 40, 80, 89, 160 (px). Page max-width 1440px; content column ~980px, left-aligned, never centered. Section gaps 80–120px. Card padding 28px. Element gap 8–12px.

## 3. Layout & Component Rules

### 3.1 Flexbox & Mobile-First
- Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first: rows become columns below 768px. No horizontal scrolling.
- All layouts responsive out of the box.

### 3.2 Required Sections (in order)
1. **Sticky Top Navigation** — white fill, 1px bottom border `#d6d6d6`. Nav labels SF Pro substitute (Inter) 12px/400/`#1d1d1f`. Logo at left in `#000000`. Right-side utility items (search, bag) at 980px pill radius with `#f5f5f7` background. Theme toggle included.
2. **Utility Bar** — full-width `#f5f5f7` band above nav. Single line 12px/400 centered text. Inline link in `#0066cc`.
3. **Hero** — `#ffffff` canvas. Centered product image (up to 1200px). Below: kicker (brand logo glyph + product name, 12px/600/uppercase/tight tracking/`#1d1d1f`), then display headline 64–96px/600/`#1d1d1f` with one or two verbs tinted in `#03aa49`, `#0066cc`, `#8668ff`, `#ed6300`, or `#00a1b3`. Headline left-aligned within 980px column. Then **Price + Action Stack**: 'Desde 269 €'-style price in 14px/400 left, followed by Primary Action Button, 8px gap.
4. **Features** — 3 large cards, 28px radius, `#ffffff` on `#f5f5f7` canvas, 1px hairline border `#1d1d1f` (subtle/often absent). Full-bleed product photo; caption 17px/400/`#1d1d1f` anchored to right edge in narrow column. Hover: `transform: translateY(-2px)`. `focus-within` highlights border.
5. **How It Works** — 3 steps. Full-bleed band alternating `#ffffff`/`#f5f5f7`. Step number in large display numeral (44px, weight 600, tabular). Title 28px/600. Body 17px/400.
6. **Testimonials** — 3 cards on `#f5f5f7`. Quote 21px/400, author 14px/600. No shadows.
7. **Pricing** — 3 tiers. Cards 28px radius. Featured tier uses `#0071e3` pill CTA; others use neutral pill. Hairline borders only.
8. **FAQ** — accordion using Pill Disclosure Items (980px radius, transparent, 1px `#d6d6d6` border, '+' icon left, label 14px/400). Expand/collapse animated via CSS max-height transition. `aria-expanded` on trigger.
9. **Final CTA** — full-bleed band, left-aligned display headline with tinted verb, Primary Action Button.
10. **Footer** — `#f5f5f7`, 4-column link grid, 12px/400 labels, hairline top border. Secondary links only.

### 3.3 Component Specifications

**Button — Primary Action:** pill 980px radius, fill `#0071e3`, text `#ffffff` Inter 17px/600, letter-spacing -0.022em, padding 11px vertical / 20px horizontal. No border, no shadow. Min touch target 44x44px. States: hover (brightness shift, cursor pointer), focus (distinct ring via `--color-signal-blue` outline/box-shadow), active (scale 0.97), loading (disabled, CSS spinner, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary `--text-success`/`--text-error` tint).

**Button — Neutral Pill:** identical geometry, fill `#e2e2e5`, text `#333336`.

**Card:** flex layout, `#ffffff`, 1px hairline, 28px radius. Hover elevation via `translateY(-2px)`. `focus-within` border highlight. Skeleton shimmer loading state. Empty state with Material Symbol + guidance text.

**Form/Input (if any):** states empty/focused/filled/valid/invalid/disabled/readonly. Flex container wrapping label, input, error feedback. Error text `#ed6300` with icon. `aria-live` on error region.

**Modal (if used):** opening/open/loading/success/error/closing animated via CSS transitions. Centered flex (`align-items: center`), backdrop overlay, Material Symbol close button, Esc/overlay close, focus trapping.

### 3.4 Micro-interactions & Accessibility
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Sufficient contrast in both themes. Never rely on color alone for state.
- Semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Every click/hover/submission triggers visible feedback.
- Destructive actions visually distinct in both themes.
- No box-shadows, glows, gradients on text/buttons/cards. Hairlines and surface contrast only.
- Chromatic accents (green/violet/orange/teal) are word-tints only — never backgrounds, buttons, or large fills.
- Body copy 17px singular; never above 20px or below 14px.
- Allowed radii only: 10, 28, 32, 36, 980px.
- Headlines left-aligned; never center display type or price+CTA cluster.
- Links: `#0066cc` with 1px underline. Never browser-default blue.

## 4. Deliverable & Output Format

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry point.
- BEM naming throughout.
- No lorem-ipsum-only submissions where real copy is implied — invent fictional brand copy (product name, features, testimonials, pricing tiers, FAQ) in English.
- All user-facing copy in English (even though source style is Spanish-market).
- Include the theme toggle and dark mode persistence.

## 5. Edit Mode — Not Applicable

This is a from-scratch build; Edit Mode rules do not apply. However, if any requested visual cannot be achieved without adding markup, stop and ask before inserting new HTML.

---

**Final instruction to coding AI:** Build the complete landing page now, following every rule above. Output the three files (`index.html`, `style.css`, `script.js`) with no preamble and no closing commentary. Ensure dark mode, accessibility, responsiveness, and all component states are fully implemented. Use only the fictional brand you invent — never Apple or its trademarks.
