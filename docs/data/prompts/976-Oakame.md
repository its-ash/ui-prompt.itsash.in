# Landing Page Build Prompt — Fictional Brand in the Oakâme Style

## 1. Project Setup & Architecture

- **Deliverables:** Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- **Naming convention:** BEM throughout (`block__element--modifier`). Never mix conventions.
- **CSS-First / Zero Inline CSS:** All styling lives in `style.css`. Forbid `style="..."` attributes. HTML must be semantic, clean, and styling-agnostic so the look can change by editing CSS alone.
- **Framework:** Tailwind CSS via `@layer`/`@apply` directives, with utility classes mapped to CSS variables or generic reusable classes (`.btn`, `.card`, `.input-group`).
- **No real brand assets:** Invent a fictional brand name, products, and copy. Never use "Oakâme", its logo, trademarks, or product names. Translate all user-facing copy to English.

## 2. Design Tokens (CSS Variables in `:root`)

Define all tokens as CSS variables:

**Colors:**
- `--color-walnut-ink: #403a34` (text, borders, filled button)
- `--color-linen-canvas: #f6f1eb` (page/card/button background)
- `--color-charcoal-note: #333333` (secondary body text)
- `--color-slate-whisper: #555555` (tertiary/helper text)
- `--text-primary: var(--color-walnut-ink)`
- `--text-secondary: var(--color-charcoal-note)`
- `--text-tertiary: var(--color-slate-whisper)`
- `--bg-primary: var(--color-linen-canvas)`
- `--bg-secondary: var(--color-linen-canvas)`
- `--border-default: 1px solid var(--color-walnut-ink)`
- `--border-error`, `--border-success` (define for form states)
- `--text-success`, `--text-error` (define for feedback states)

**Typography:**
- `--font-base`: Google Font substitute for BwGradual — use **Inter** with `cv11`, `ss01` features enabled. Import via Google Fonts `<link>`.
- Type scale tokens: `--text-label: 10px`, `--text-caption: 12px`, `--text-body-sm: 18px`, `--text-body: 20px`, `--text-heading-sm: 40px`, `--text-heading: 50px`, `--text-heading-lg: 60px`, `--text-display: 120px`, `--text-display-xl: 180px`, `--text-display-hero: 250px`.
- Apply OpenType features `"ss01" on, "cv11" on, "tnum" on` globally.
- Letter-spacing: tight `-0.056em` on 120px+; near-zero `-0.004em` on 18–20px; wide `+0.083em` to `+0.100em` on 10–12px uppercase labels.
- Line-heights: 1.10–1.50 per scale.

**Spacing & Shapes:**
- `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-20: 20px`, `--spacing-40: 40px`, `--spacing-68: 68px`.
- `--radius-sm: 0px`, `--radius-md: 0px`, `--radius-lg: 0px` (square default); pill radius `9999px` applied only to buttons, tags, cart badge.
- `--shadow-sm`, `--shadow-md`: defined but set to `none` (system is shadowless).
- `--spacing-gap: 20px`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.

**Contrast pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text — enforce for every theme.

**Light mode background:** Use `#f6f1eb` (Linen Canvas), not pure white. Where white/near-white is needed, use `#fefefe`.

## 3. Mandatory Dark Mode

- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Dark palette must invert contrast: dark background with light text, maintaining the monochromatic warm-stone mood (e.g., dark walnut background, linen text). No chromatic accents.
- Theme switching via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Visible toggle control with correct `aria-pressed`/`aria-label` state.

## 4. Layout Standards

- **Flexbox-first:** All containers use `display: flex` with default `align-items: center` unless explicitly justified.
- **Mobile-first:** Responsive breakpoints, rows collapse to columns on small viewports, no horizontal scrolling.
- **Full-bleed page model:** No max-width on primary content axis for hero; centered ~1400px max-width with 20–30px page padding for text/category content; imagery bleeds edge-to-edge.
- **Section gaps:** 60–120px vertical. Hairline 1px Walnut Ink dividers between sections — never background color changes, cards, or shadows.

## 5. Typography & Icons

- Google Fonts: Inter (substitute) with `cv11`, `ss01` features. Import via `<link>`.
- Google Material Symbols/Icons for all icons (account, cart, dropdown caret, checkmarks, FAQ chevrons). Forbid raw inline SVGs or local icon files.

## 6. Component Specifications

### Top Navigation Bar
- Full-bleed, 60–80px height, Linen Canvas background, no fill/border/shadow except bottom hairline divider.
- Left: wordmark at 18px, weight 500, Walnut Ink, underlined by single hairline.
- Center: "PRODUCTS" label with small dropdown caret.
- Right: text-link nav items (uppercase, 12px, +0.083em tracking), account icon, cart icon with 12px numeric badge in 16px Walnut Ink circle with Linen Canvas text.
- Column-gap 20–30px. No sticky header.

### Pill Navigation Button
- 1px Walnut Ink border, 9999px radius, 8px 20px padding.
- Label: 12px, weight 500, uppercase, +0.083em tracking, Walnut Ink on Linen Canvas, no fill.
- Hover: exact color inversion (Walnut Ink fill, Linen Canvas text).

### Filled Action Button
- Solid Walnut Ink background, Linen Canvas text, 0px radius, 12px 24px padding.
- Label: 12px, weight 500, uppercase, +0.083em tracking.
- Max one filled button per viewport. Others pill-outlined or text-only.

### Product Category Card
- Square aspect, 0px radius, 1px Walnut Ink border, 20px gutters, no internal padding, image bleeds to edges, no overlay text.

### Hero Display Title
- Product name: 120–250px, weight 400, line-height 1.10, letter-spacing -0.056em, Linen Canvas on dark photo. Above: 10px tracked-out uppercase label (+0.100em) same color.

### Section Display Heading
- 50–60px, weight 500, uppercase, letter-spacing -0.056em, line-height 1.20–1.24, Walnut Ink on Linen Canvas, full content width, wraps 3–4 lines. Eyebrow label above.

### Eyebrow Label
- 10–12px, weight 500, uppercase, +0.083em to +0.100em tracking, Walnut Ink.

### Asymmetric Image-Text Split
- Two columns: left holds small right-aligned label (18–20px); right holds body copy (18–20px, weight 400, Charcoal Note, line-height 1.50, max ~50ch). Photo bleeds below/beside. 60–120px vertical breathing room.

### Body Copy Block
- 18–20px, weight 400, Charcoal Note or Walnut Ink, line-height 1.50, letter-spacing -0.004em, max ~50ch. Sentence case for body; uppercase sparingly.

### Hairline Divider
- 1px solid Walnut Ink, full-bleed or content-width. Only section separator.

### Icon (Nav)
- Outline-style, 20px, 1px stroke, Walnut Ink. Cart badge: 12px text in 16px Walnut Ink circle, Linen Canvas text.

### Button States (all buttons)
- Default: flex, `align-items: center; justify-content: center; gap: 0.5rem`, min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disables interaction, CSS spinner/animated icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary styles via `--text-success`/`--text-error`.

### Card States (Feature cards, Pricing cards)
- Default: flex layout, subtle borders, elevation via `--bg-secondary` + CSS vars.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight border when child receives focus.
- Loading (skeleton): shimmer animation in CSS, no layout jumps.
- Empty state: Google Icon + guidance text.

### Form & Input States (if any inputs)
- Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Flex container wrapping label, input, error feedback.

### Modal/Popup States (if used)
- Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
- Centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via Esc/overlay click.

## 7. Section Requirements (Landing Page)

Build these sections in order:

1. **Hero:** Full-viewport (100vw × ~80vh) lifestyle photograph background. Bottom-left: Hero Display Title (10px eyebrow + 120–250px product name in Linen Canvas). Bottom-right: Hero Thumbnail Strip (4 thumbnails ~140×90px, 0px radius, 20px gap; active has 1px Linen Canvas border). No additional chrome/overlays.

2. **Features (3 cards):** 3-column grid (responsive: 1 col mobile, 3 col desktop), 20px gutters. Each card: square-ish image, 0px radius, 1px Walnut Ink border, no overlay text. Eyebrow + Section Display Heading above.

3. **How It Works (3 steps):** 3-column layout (responsive). Each step: large display number (120px+), short title (40–50px), body copy (18–20px Charcoal Note). Separated by hairline dividers.

4. **Testimonials:** Asymmetric image-text split or centered quote blocks. Quote text 18–20px, attribution 12px tracked-out uppercase. Hairline dividers between.

5. **Pricing (3 tiers):** 3-column grid (responsive). Each tier: card with 1px Walnut Ink border, 0px radius. Tier name (eyebrow), price (display size), feature list (body), CTA button (one filled max per viewport — others pill-outlined). Highlight recommended tier via border emphasis only (no shadow/color).

6. **FAQ:** Accordion-style. Each item: question (18–20px, weight 500) with chevron icon, answer (body copy). Expand/collapse via CSS transitions. One open at a time optional.

7. **Final CTA:** Centered block. Section Display Heading + short body copy + one Filled Action Button. Linen Canvas background, hairline dividers above/below.

8. **Footer:** Secondary links in columns (text links, 12px uppercase tracked). Hairline top border. No background change. Include fictional brand wordmark.

## 8. Core UX & Micro-Interactions (Global)

- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely on color alone for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback (form errors, toasts, loading).
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes (`.btn-danger`).

## 9. Do's and Don'ts (Style Enforcement)

**Do:**
- Use Linen Canvas (#f6f1eb) as the only background. Never a second surface color or white card.
- All borders 1px solid Walnut Ink. No border-radius on cards, images, content blocks — 0px only.
- Pill radius (9999px) exclusively for buttons, tags, cart badge. Everything else square.
- Reserve display sizes (120–250px) for hero product names and section openers. Never body copy or inline links.
- +0.083em to +0.100em letter-spacing on every 10–12px uppercase label. Tighten to -0.056em above 100px.
- Default body text 18–20px weight 400 Walnut Ink, line-height 1.50. 12px only for tracked-out labels.
- Separate sections with full-width 1px Walnut Ink hairline — never background color, cards, or shadows.

**Don't:**
- No chromatic accent, gradient, or shadow anywhere. Palette is two colors plus charcoal variants.
- No body text below 18px. Smaller must be uppercase tracked-out, not running copy.
- No border-radius on images, category cards, section blocks. Square edges are the system.
- Don't mix two dark text colors in same paragraph. Walnut Ink for headings, Charcoal Note for body.
- No more than one filled Walnut Ink button per viewport.
- No intermediate type sizes (24, 28, 32, 36px). Scale jumps 20→40.
- No text/badges/UI overlaid on lifestyle photography except hero display title and thumbnail strip.

## 10. Output Constraints

- Output only the finished code files as specified. No preamble, no closing commentary.
- Edit-mode rules do not apply (this is a from-scratch build).
- If a requested style change cannot be achieved without adding markup, stop and ask rather than silently inserting HTML.
