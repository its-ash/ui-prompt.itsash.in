# Landing Page Build Prompt — "fastht.ml" Sticker-Pack Style

## Role & Deliverables
You are a front-end coding agent. Build a complete, production-ready landing page using **three separate files**: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. Enforce one consistent class-naming convention (BEM) across the entire deliverable.

## Brand & Copy Rule (Critical)
The visual style references a real brand. You must **invent a fictional brand name, product, and all copy**. Never use the real brand name, logo, trademarks, or product names anywhere in the page. All user-facing copy must be in English.

## 1. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling.

## 2. CSS Variables & Theme Tokens
Store all visual tokens inside `:root` (and theme classes) using CSS variables:

**Colors:**
- `--color-sticker-green: #3cdd8c`
- `--color-sticker-yellow: #ffc435`
- `--color-sticker-pink: #e699d9`
- `--color-periwinkle-violet: #7575f0`
- `--color-soft-periwinkle: #939eeb`
- `--color-deep-aubergine: #3a2234`
- `--color-mint-cream: #d4f7e6`
- `--color-cotton-candy: #ffccf7`
- `--color-butter-cream: #ffeecc`
- `--color-lavender-mist: #e8e8fc`
- `--color-dusty-mauve: #eddee9`
- `--color-carbon: #000000`
- `--color-paper-white: #ffffff`
- `--color-fog: #f3f3f3`
- `--color-silver: #e5e7eb`
- `--color-ash: #cccccc`
- `--color-graphite: #999999`
- `--color-slate: #333333`

**Generic tokens (required by architecture):**
- `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`

Map generic tokens to the theme palette. Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text. Light mode background must not be pure white where a theme color fits; use `#fefefe` where near-white is needed.

**Border radius & shadows:**
- `--radius-sm: 16px`, `--radius-md: 24px`, `--radius-lg: 40px`
- `--shadow-sm: rgba(255,255,255,0.1) 0px 2px 4px 0px inset, rgba(0,0,0,0.5) 0px 4px 8px 0px`
- `--shadow-md: rgba(255,255,255,0.5) 0px 2px 2px 0px, rgba(0,0,0,0.2) 0px 3px 3px 0px`

**Spacing & transitions:**
- `--spacing-gap: 16px`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4,0,0.2,1)`

**Elevation:** `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`

**Typography tokens:**
- `--font-base: 'Geist', sans-serif` (Google Fonts: Geist, weights 400, 500)
- `--font-mono: 'Geist Mono', monospace` (Google Fonts: Geist Mono, weight 500)
- Type scale tokens: `--text-caption: 14px`, `--text-body-sm: 16px`, `--text-subheading: 20px`, `--text-heading-sm: 24px`, `--text-heading: 32px`, `--text-heading-lg: 60px`, `--text-display: 72px`

## 3. Mandatory Dark Mode
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 4. Flexbox Layout & Mobile-First
- Build all layouts using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- All layouts must be mobile-responsive out of the box (rows to columns on small viewports). Prevent horizontal scrolling.

## 5. Framework
Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply` directives). All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 6. Typography & Icons
- Use Google Fonts for text: Geist (400, 500) and Geist Mono (500). Include `<link>` or `@import`.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 7. Component State Requirements

**Buttons:**
- Default: flex layout, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min touch target 44x44px.
- Hover: visual shift with `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.

**Cards:**
- Default: flexible flexbox, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS.
- Empty State: Google Icon + guidance text.

**Forms/Inputs:**
- States: Empty, Focused, Filled, Valid, Invalid, Disabled, Read-only.
- Structure: flex container wrapping label, input, and error feedback container.

**Modals/Popups (if used):**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 8. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes, never rely solely on color, semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.

## 9. Page Structure & Sections
Build a landing page with these sections in order:
1. **Hero** — centered single-column stack: floating nav pill, display headline, subtext, CTA row. Scatter 3–5 oversized confetti shapes (circles, rounded squares, capsule pills) in Sticker Green, Yellow, Pink, Periwinkle Violet, absolutely positioned, partially off-canvas. Nav pill: 9999px radius, Lavender Mist fill, embossed shadow, logo badge left, black "Read docs" button right.
2. **Features** — 3 tinted feature cards (Mint Cream, Cotton Candy, Butter Cream or other pastels), 24px radius, 32px padding, no border/shadow.
3. **How It Works** — 3 steps with numbered pills, Geist text.
4. **Testimonials** — cards with quotes and avatars.
5. **Pricing** — 3 tiers with pill buttons.
6. **FAQ** — full-bleed Periwinkle Violet band, two-column: left eyebrow/heading/subtext in Carbon, right column 6–8 white accordion cards (16px radius, no shadow), plus icon right-aligned.
7. **Final CTA** — centered headline + black pill button.
8. **Footer** — secondary links.

## 10. Style Rules (fastht.ml sticker-pack)
- 9999px radius on every button, nav, tag, pill.
- Two-layer embossed shadow on interactive sticker elements: `rgba(255,255,255,0.5) 0px 2px 2px 0px, rgba(0,0,0,0.2) 0px 3px 3px 0px`.
- Alternate full-bleed color bands vertically: light canvas → Deep Aubergine → Periwinkle Violet.
- Geist weight 400 body, weight 500 UI; never above 500.
- Tight negative letter-spacing on display: -0.015em at 72px, scaling to 0 at body.
- Geist Mono 14px, 1.8 line-height for code blocks; color keywords with site accents.
- No colored CTA — primary action always black filled.
- No square/4px-radius buttons.
- Cards sit on hard color blocks or flat white canvas, not layered neutrals.
- No serif/script/display fonts — Geist and Geist Mono only.
- Body line-height ≥ 1.4, code line-height ≥ 1.6.
- Periwinkle Violet is a section-level full-bleed background, not a small accent.
- No drop shadows on FAQ cards or demo cards.

## 11. Dark Code-Demo Section (optional but on-theme)
If included: full-bleed Deep Aubergine band, 96px vertical padding, centered white heading at 60px, two-column grid (code block left with 16px radius, near-black fill, Geist Mono 14px; demo card right, Paper White, 20px radius, 32px padding, rounded image).

## 12. Output
Output only the three files' contents as specified. No preamble, no closing commentary. Ensure all copy is invented and in English. No real brand names, logos, or trademarks.
