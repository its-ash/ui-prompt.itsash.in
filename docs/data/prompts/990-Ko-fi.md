# Landing Page Build Prompt — Ko-fi-Style Theme

## 1. Project Overview

Build a complete, responsive landing page for a **fictional brand** (invent a name, product, and copy — never use "Ko-fi", its logo, trademarks, or product names). The visual language is a warm indie café chalkboard on cream paper: rounded pill shapes, sticker-book black outlines instead of shadows, a cream canvas, and a single soft periwinkle blue as the only accent. Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere in the HTML.

## 2. Theme & Tokens

### 2.1 Color Tokens (define in `:root` and `.dark`)

Light mode (`:root`):
- `--color-oat-cream: #e9dfd2` — secondary surface (feature cards, warm fills, tags)
- `--color-morning-fog: #e5e7eb` — page canvas, subtle borders, dividers
- `--color-ink-black: #202020` — primary text, dark filled buttons, icon fills
- `--color-sticker-black: #000000` — heavy borders on cards, images, logo
- `--color-paper-white: #fefefe` — card surfaces above canvas, text on dark buttons, inputs
- `--color-kofi-blue: #aac9f7` — blue wash for highlight backgrounds, decorative bands
- `--color-cobalt-pop: #72a4f2` — primary action hover/pressed state

Mapped semantic tokens:
- `--primary: var(--color-cobalt-pop)`
- `--secondary: var(--color-oat-cream)`
- `--bg-primary: var(--color-morning-fog)`
- `--bg-secondary: var(--color-oat-cream)`
- `--text-primary: var(--color-ink-black)`
- `--text-secondary: #5a5a5a`
- `--text-success: #2e7d32`
- `--text-error: #c62828`
- `--border-default: var(--color-sticker-black)`
- `--border-error: var(--color-text-error)`
- `--border-success: var(--color-text-success)`

Dark mode (`@media (prefers-color-scheme: dark)` and `.dark` class):
- Invert canvas to a warm dark gray (e.g. `#1a1a1a`), card surfaces to `#2a2a2a`, text to `#f5f5f5`, borders to `#f5f5f5`, keep accent blue `#aac9f7` but adjust contrast. Every light background token must pair with a dark text token and vice versa.

### 2.2 Typography

- Display font: **Bowlby One** (Google Fonts substitute for bogue-black) — weights 400, sizes 60px/72px, line-height 1.00. Bind to `--font-display`.
- Body/UI font: **DM Sans** (Google Fonts) — weights 400, 600, sizes 14/16/20/24/30px, line-height 1.20–1.50. Bind to `--font-base`.
- Icons: The spec references Font Awesome 6 Pro/Solid and Font Awesome 6 Brands. **Mandatory rule:** use Google Material Symbols/Icons via Google Fonts `<link>` for all icons. **Exception clause:** if a specific Font Awesome glyph is required by the design, you may load Font Awesome 6 Free CDN as a supplementary icon set, but Material Symbols remain the default and preferred icon system. Never use raw inline SVGs or local icon files.

Type scale tokens: `--text-caption` (14px/1.43), `--text-body` (16px/1.5), `--text-subheading` (20px/1.4), `--text-heading-sm` (24px/1.33), `--text-heading` (30px/1.2), `--text-display` (60px/1), `--text-display-lg` (72px/1).

### 2.3 Spacing, Radius, Shadows

- Base unit 4px. Spacing tokens: `--spacing-4` (4px), `--spacing-8` (8px), `--spacing-12` (12px), `--spacing-16` (16px), `--spacing-20` (20px), `--spacing-24` (24px), `--spacing-28` (28px), `--spacing-32` (32px), `--spacing-40` (40px), `--spacing-80` (80px), `--spacing-96` (96px), `--spacing-128` (128px).
- Radius: `--radius-sm: 16px`, `--radius-md: 24px`, `--radius-lg: 40px`, plus `--radius-pill: 9999px`.
- Shadows: none on cards/buttons/images (sticker border replaces elevation). Define `--shadow-sm`/`--shadow-md` for focus rings only.
- Transitions: `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: cubic-bezier(0.4,0,0.2,1)`.
- Elevation: `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`.

### 2.4 Layout

- Max-width 1200px centered container on full-bleed cream canvas.
- Section gap 64px. Card padding 28px. Element gap 20px.
- Mobile-first: convert multi-column grids to single column below 768px. No horizontal scrolling.

## 3. Component Specifications

### 3.1 Buttons

All buttons: flex (`display:flex; align-items:center; justify-content:center; gap:0.5rem`), min touch target 44x44px, pill radius 9999px.

- **Primary (Kofi Blue):** bg `#aac9f7`, text `#202020`, DM Sans 16px weight 600, padding 20px vertical / 20-28px horizontal. Hover/pressed → `#72a4f2`. States: hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring via CSS vars), active (scale 0.97), loading (disabled interactions, CSS spinner, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).
- **Dark (Pill):** bg `#202020`, text `#ffffff`, radius pill, padding 20px all sides, DM Sans 14-16px weight 600. Used for "Sign up free" nav CTA.
- **Outline (Learn More):** text `#202020` on white card, pill radius, 20px padding, no border, standalone pill label.

### 3.2 Cards

- **Sticker Card (Creator Profile):** white fill, 40px radius, 2-3px solid `#000000` border, no shadow. Full-bleed photo (40px radius) above creator info. States: hover (translateY -2px), focus-within (border highlight), loading (shimmer skeleton), empty state (Google Icon + guidance text).
- **Oat Feature Card:** oat cream fill, 24px radius, 40-80px padding, contains bogue-black display heading, DM Sans body, outline pill button. Sits inside white card frame on canvas.

### 3.3 Form & Input

- **Pill Input:** white fill, pill radius, 28px horizontal padding, 2px `#000000` border, DM Sans 16px placeholder. Focus: border shifts to `#aac9f7`. States: empty, focused, filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

### 3.4 Modal

- States: opening, open, loading, success/error, closing (CSS transitions). Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### 3.5 Category Tag Pill

- White fill, pill radius, 20px horizontal padding, DM Sans 16px weight 400 ink black. Active: 2px ink black border. Leading 20px icon.

### 3.6 Top Navigation

- Transparent over canvas, pill dark CTA, nav links DM Sans 16px weight 400. Logo: bogue-black "Ko-fi-style" wordmark (fictional) with coffee-cup icon. No background bar. Padding 16-20px vertical.

### 3.7 Section Headline Block

- Centered bogue-black heading 60px line-height 1.0, DM Sans 20px subheading. 40-64px bottom margin.

## 4. Page Sections (in order)

1. **Hero** — centered bogue-black display headline, DM Sans subtitle, single blue pill CTA, illustration below (hand-drawn mascot style, Kofi Blue accents).
2. **Features** — 3 cards (Sticker Card style), 3-column grid.
3. **How It Works** — 3 steps with icons and text.
4. **Testimonials** — creator showcase 3-up grid of sticker-bordered photo cards.
5. **Pricing** — 3 tiers.
6. **FAQ** — accordion-style.
7. **Final CTA** — centered headline + blue pill button.
8. **Footer** — secondary links, logo, social icons.

## 5. Dark Mode

- Implement via `@media (prefers-color-scheme: dark)` AND `.dark` class toggle.
- Persist user choice in `localStorage`, fall back to `prefers-color-scheme` on first visit.
- Visible toggle control with correct `aria-pressed`/`aria-label`.
- Seamless variable switching, no HTML restructuring.

## 6. Accessibility

- Sufficient contrast in both modes. Never rely solely on color for state. Semantic HTML5. Correct ARIA roles/labels. Logical DOM/focus order. Full keyboard operability. `aria-live` regions for dynamic feedback. Respect `prefers-reduced-motion`.

## 7. Naming Convention

Use BEM consistently: `.block`, `.block__element`, `.block--modifier`. Never mix conventions.

## 8. Edit Mode

N/A — this is a from-scratch build.

## 9. Deliverables

- `index.html`, `style.css`, `script.js`
- No lorem-ipsum where real copy is supplied; invent fictional but realistic copy for all sections.
- No unrequested placeholders.
