# UI/UX Coding Prompt — Altius-Themed Landing Page (Fictional Brand)

## 1. Project Overview & Brand Fidelity
Build a complete, responsive landing page for a **fictional brand** (invent a name, product, and copy — never use "Altius" or any real brand name, logo, trademark, or product name). Reuse only the visual style described below. All user-facing copy must be in English.

## 2. Strict Architecture Rules
- **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes. Use class/ID selectors only.
- **CSS Variables:** Define all tokens in `:root` and `.dark`/`@media (prefers-color-scheme: dark)` blocks. Use `--color-*`, `--font-*`, `--text-*`, `--spacing-*`, `--radius-*`, `--shadow-*`, `--z-*`, `--transition-*`, `--ease-standard`.
- **Contrast Pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text — in every theme.
- **Light Mode Background:** Use `#fefefe` where near-white is needed; never pure `#ffffff` for page background.
- **Dark Mode Mandatory:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Persist choice via `localStorage`, fallback to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** All layouts use `display: flex`; default `align-items: center`. Responsive breakpoints prevent horizontal overflow.
- **Tailwind CSS:** Use Tailwind (or `@layer`/`@apply`) mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).
- **Google Fonts Only:** Matter → substitute Inter (weights 400/500/700); Fabrikatmono → substitute JetBrains Mono (weights 400/500). Bind to `--font-matter`/`--font-fabrikatmono`. Icons via Google Material Symbols only — no inline SVGs or local icons.

## 3. Design Tokens (Altius Style)
**Colors:**
- `--color-obsidian-ember: #190501` (dark canvas)
- `--color-dark-cocoa: #340a01` (elevated dark surface)
- `--color-molten-core: #631303` (inset glow source)
- `--color-signal-red: #951c04` (outlined action border)
- `--color-flare-orange: #fa5838` (primary accent)
- `--color-warm-blush: #fcac9c` (soft wash)
- `--color-vapor-peach: #feeae6` (light section bg)
- `--color-linen: #f7f6ff` (text on dark)
- `--color-warm-ash: #baadab` (muted borders/text on light)
- `--color-pure-black: #000000` (decorative fills)
- `--color-mist: #cccccc` (input borders on light)

**Typography:** Inter (Matter substitute) weights 400/500/700, tight tracking. JetBrains Mono (Fabrikatmono substitute) weights 400/500. Type scale: caption 14px, body 16px, subheading 20px, heading-sm 24px, heading 48px, display 60px. Line heights/letter-spacing per spec.

**Spacing:** Base 4px; scale 4,8,12,16,20,24,32,40,48,64,80,108,128. **Radius:** tags 4px, cards 8px, inputs 4px, buttons 4px. **Shadow:** `--shadow-lg: rgb(99,19,3) 0px 0px 20px 0px inset` (filled buttons only). **Layout:** max-width 1200px, section gap 80px, card padding 32px, element gap 10px. **Z-index:** `--z-dropdown`, `--z-modal`, `--z-toast`.

## 4. Component Specifications

### Top Navigation Bar
Dark Obsidian Ember bg, full-width, ~64px height. Logo (Flare Orange) left; nav links right in Linen 16px weight 500; 2 icon-only social buttons. No border-bottom.

### Hero Section
Full-viewport Obsidian Ember bg. Centered stack: 60px display headline (Linen, -2.58px tracking), 16px subtext at 70% opacity, dual CTAs (filled primary + outlined ghost). Below: 12 vertical Flare Orange bars (40-80px wide, 240px tall) with center-to-edge opacity fade.

### Filled Primary Button
Dark Cocoa→Molten Core bg, Linen text 16px weight 500, padding 8px 20px, radius 4px, inset shadow `--shadow-lg`, no border. Min touch target 44x44px. States: hover (brightness/shadow shift, cursor pointer), focus (ring via CSS vars), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary `--text-success`/`--text-error`).

### Outlined Ghost Button
Transparent bg, 1px border (Linen or Signal Red by context), matching text, 16px weight 500, padding 8px 20px, radius 4px, no shadow.

### Investor Logo Grid
4-column grid (responsive 2-3), Obsidian Ember bg. Logos in Linen at ~70% opacity. Centered eyebrow "TRUSTED BY LEADING INVESTORS AND BUILDERS" in Flare Orange Fabrikatmono 14px uppercase.

### Section Header (Tag + Heading)
Vertical stack: Fabrikatmono 14px uppercase Flare Orange tag (optional 12x12 outlined square icon), 16px gap, then 48px heading (Linen on dark / Obsidian Ember on light, -1.92px tracking).

### Problem Statement Card
Linen bg on Vapor Peach section, 40px padding, 8px radius, 1px Warm Ash border. Left: coral wireframe illustration; right: 16px body text in Obsidian Ember.

### Solutions Feature Card
Dark Cocoa bg, 8px radius, 32px padding, 1px Signal Red border. Top-left: "01/02/03" Fabrikatmono 14px Flare Orange. Top-right: small line-art icon Flare Orange. Center: 24px heading Linen (-0.8px). Body: 16px Linen at 80% opacity. No drop shadow.

### Input Field
Transparent or Vapor Peach bg, 1px border (Mist on light / Signal Red on dark), padding 10px 12px, radius 4px, 16px weight 400, placeholder 60% opacity. States: empty, focused (ring), filled, valid, invalid, disabled, read-only.

### Footer
Obsidian Ember bg, 64px+ vertical padding. Two 32x32 outlined social icons (X, LinkedIn) with 1px Flare Orange border, 4px radius, Flare Orange line-art icons. Minimal text.

### Hero Gradient Bar
Vertical rectangles Flare Orange, center-to-edge opacity fade, 11-13 bars varying widths.

### Eyebrow Tag Label
Fabrikatmono 14px uppercase, -0.05em tracking, Flare Orange on dark / Signal Red on light, preceded by small outlined square icon.

## 5. Page Sections (in order)
1. **Hero** — as specified.
2. **Investor Logo Grid** — social proof band.
3. **Features** — 3 Solutions Feature Cards in a grid.
4. **How It Works** — 3 steps using Section Header + numbered cards.
5. **Testimonials** — cards on Vapor Peach section.
6. **Pricing** — 3 tiers (use cards; highlight middle tier with Signal Red border).
7. **FAQ** — accordion-style, inputs optional.
8. **Final CTA** — centered on Obsidian Ember with dual buttons.
9. **Footer** — as specified.

## 6. Thermal Section Rhythm (Mandatory)
Alternate dark (Obsidian Ember) and light (Vapor Peach) sections. Never more than 2-3 dark sections before a Vapor Peach break. Flare Orange crosses both modes as the single accent.

## 7. Do's and Don'ts
- Do: Obsidian Ember as default dark canvas; 60px Matter 700 -2.58px for display; Flare Orange sparingly as punctuation; inset ember-glow on filled buttons; alternate dark/peach sections; 4px button radius / 8px card radius; Fabrikatmono 14px uppercase Flare Orange for tags.
- Don't: no drop shadows on cards (hairline borders only); no blue/cool tones; no Flare Orange filled buttons; no display below 48px or above 60px; no more than 2-3 dark sections without peach break; no generic sans fallbacks as primary; no colored body text (Linen on dark / Obsidian Ember on light).

## 8. UX & Accessibility (Mandatory)
- Responsive by default, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Sufficient contrast both modes; never rely solely on color for state. Semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Visible feedback on every click/hover/submission. Destructive actions visually distinct in both themes.
- Modal/popup: opening/open/loading/success/error/closing animated; centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## 9. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point.
- Consistent class naming (BEM) throughout — never mix conventions.
- No lorem-ipsum-only where real copy supplied; placeholders only where content genuinely unspecified.
- Invent fictional brand name, product, and all copy. Never use "Altius" or any real brand.

## 10. Edit Mode (if modifying existing markup)
No new HTML tags/components/DOM nodes; CSS only for existing elements; no JS for validation/popups/helpers (ask user instead); clarify before assuming if markup addition needed.
