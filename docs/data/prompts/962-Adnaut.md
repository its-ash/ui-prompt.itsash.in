# Coding AI Prompt — Adnaut-Themed Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a fictional brand (invent a fictional product name, company name, and copy — do NOT use "Adnaut" or any of its trademarks, logos, or product names). The visual style must follow the Adnaut design system described below: a nocturnal, mission-control aesthetic with near-black carbon canvas, sodium-yellow (#ffe900) as the single saturated UI accent, ultra-light display typography, rounded glassy cards, and isometric 3D vignettes as atmospheric decoration.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere in HTML. Use one consistent class-naming convention (BEM) across the entire deliverable.

## 2. Strict Architectural Rules

### 2.1 CSS-First, Zero Inline CSS
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class/ID selectors only.
- HTML must stay clean, semantic, and agnostic of visual styling.

### 2.2 CSS Variables & Theme Tokens
Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Adnaut palette mapping (dark theme): `--bg-primary: #1f1d01` (carbon canvas); `--bg-secondary: #282828` (graphite cards); `--text-primary: #d7d7d7` (frost body); `--text-secondary: #f2f2f2` (cloud headlines); `--primary: #ffe900` (sodium yellow); `--secondary: #00ff1a` (lime pulse, used sparingly); plus `--color-slate: #707070`, `--color-ash: #8d8d8d`, `--color-charcoal: #333333`, `--color-pure-white: #fefefe` (use `#fefefe` instead of `#ffffff` where near-white is needed; pure white `#ffffff` only on yellow fills).
- Contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text — enforce for every theme.
- Border radius & shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.
- Spacing & transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

### 2.3 Mandatory Dark Mode
- Dark mode must always be defined via `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit; provide a visible toggle with correct `aria-pressed`/`aria-label`.

### 2.4 Flexbox & Mobile-First
- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- All layouts mobile-responsive; convert rows to columns on small viewports; no horizontal scrolling.

### 2.5 Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). All utility classes map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons (Google Fonts Mandatory)
- Text: Google Fonts — Archivo (weights 100, 300, 400) for display/headings; Geist (300, 400, 500, 600) for UI/body; Geist Mono (400, 600) for monospace moments. Bind to `--font-base`/`--font-display`/`--font-mono`. Include `<link>` or `@import`.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 3. Design Tokens (Adnaut System)

### Colors
- Sodium Yellow `#ffe900` — primary CTA fills, active nav, accent cards, logo wordmark.
- Lime Pulse `#00ff1a` — editorial accent, max 1-2 keyword words per page.
- Carbon `#1f1d01` — page canvas (never pure black).
- Graphite `#282828` — elevated cards, outlined button borders.
- Slate `#707070` — secondary borders, dividers.
- Frost `#d7d7d7` — primary body/UI text.
- Cloud `#f2f2f2` — headline/display text.
- Pure White `#ffffff` — text on yellow fills only.
- Ash `#8d8d8d` — muted helper text, metadata.
- Charcoal `#333333` — deep accents in illustrations.

### Typography
- Archivo: weights 100, 300, 400; sizes 16, 18, 24, 32, 56, 64px; line-height 1.00 (large) / 1.50.
- Geist: weights 300, 400, 500, 600; sizes 14, 16, 20px; line-height 1.00, 1.10, 1.50.
- Geist Mono: weights 400, 600; sizes 14, 16, 24, 56px; line-height 1.00, 1.50.
- Type scale tokens: `--text-caption` (14px/1.5), `--text-body-sm` (16px/1.5), `--text-subheading` (20px/1.5), `--text-heading-sm` (24px/1.1), `--text-heading` (32px/1.1), `--text-heading-lg` (56px/1.0), `--text-display` (64px/1.0).

### Spacing & Shapes
- Base unit 8px. Spacing scale: 8, 16, 24, 32, 40, 48, 64, 80, 96px.
- Border radius: nav 8px, tags 4px, cards 16px, buttons 16px, large-panels 24px.
- Page max-width 1280px. Section gap 64px. Card padding 24-32px. Element gap 24px.

### Elevation
- No drop shadows. Cards separated by 1px `#707070` hairline borders and `#282828` fill against `#1f1d01` canvas.
- Accent cards elevated by yellow fill alone.

## 4. Component Specifications

### 4.1 Button
- Default: flex, `align-items: center`, `justify-content: center`, gap 0.5rem; min touch target 44x44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interaction, prevents double-clicks, CSS spinner or animated Google Icon without dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.
- Primary CTA: Sodium Yellow fill, black text, 16px radius, padding 20px 24px, Geist weight 500-600 at 16px. Often paired with a separate square yellow arrow button flush right (compound control).
- Outlined Nav Button: transparent bg, 1px Sodium Yellow border, yellow text, 8px radius, padding 12px 16px; becomes filled yellow on active/hover.

### 4.2 Card
- Default: flex layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight border when child link/button focused.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty State: Google Icon + guidance text.
- Large Content Card: Graphite `#282828` bg, 1px `#707070` border, 16px radius, 32px padding, wide (60-70% viewport), tall, generous whitespace. Variants may use lighter interior fill (`#f2f2f2` or `#1f1d01`) for inverted contrast.
- Accent Card: Sodium Yellow `#ffe900` bg, dark text, 16px radius, 24-32px padding. Max 1-2 per viewport.

### 4.3 Form & Input
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container.

### 4.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### 4.5 Sticky Bottom Navigation
- Dark surface `#282828`, thin top border `#707070`, horizontally centered items, 8px radius on items. Contains nav items (HOME active = yellow, SERVICES, TECHNOLOGY, ABOUT US, LIFE AT ADNAUT, CONTACT US, RESOURCES) with dropdown carets. Subtle backdrop. Floats at viewport bottom.

### 4.6 Hero Headline Block
- Archivo weight 300, 56-64px, Cloud `#f2f2f2`, line-height 1.00, left portion (40-50% width).
- Subtext in Frost `#d7d7d7`, 16-18px, weight 400, to the right or below, constrained 40-50% width.
- Small yellow outlined 'WATCH US IN ACTION' tag button (1px `#ffe900` border, 8px radius, 12px 16px padding) between headline and visual.

### 4.7 Keyword Emphasis Text
- Same Archivo weight 300 as surrounding headline, colored `#00ff1a`. Max 1-2 per page. Ration strictly.

### 4.8 Contact Info Block
- Yellow phone icon + 'Contact Us' text in white, email in Frost `#d7d7d7` at 16px, inside bordered panel styled like Large Content Card.

### 4.9 Color Dot Indicator
- 6-8px squares in a row, each a different accent color, decorative.

### 4.10 Section Headline with Caret
- Archivo weight 100-300, 48-64px, sometimes followed by small yellow caret/arrow icon. Centered or left-aligned. No underline/decoration.

## 5. Page Sections Required
Build these sections in order:
1. Hero (headline block + supporting text + CTA + 3D vignette area)
2. Features (3 cards)
3. How It Works (3 steps)
4. Testimonials
5. Pricing (3 tiers)
6. FAQ
7. Final CTA
8. Footer with secondary links

## 6. Core UX & Micro-Interaction Rules
- Responsive by default; fluid sizing; no horizontal overflow.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No pure black backgrounds; use `#1f1d01`.
- No sharp corners (0px) on interactive elements.
- No drop shadows for card elevation.
- Yellow rationed: never more than ~20% of any viewport.
- Lime Pulse green: max 1-2 words per page.
- Display headlines ultra-light (100-300), never bold 600+.
- Archivo for display, Geist for UI — never mix at same size.

## 7. 3D Vignettes
Use placeholder atmospheric elements (CSS/SVG-free, Google Icons only) representing dark 3D isometric renders — do not embed actual images unless using CSS gradients/shapes. Keep visual density low: large dark canvas areas punctuated by one vignette and 1-2 yellow accents per viewport.

## 8. Output Format
- File structure: `index.html`, `style.css`, `script.js`.
- Naming: BEM throughout.
- No lorem-ipsum-only where real copy is implied; invent fictional but realistic copy/labels for the fictional brand.
- All user-facing copy in English.

## 9. Dark Mode Persistence & Toggle
Implement theme toggle with `localStorage` persistence and `prefers-color-scheme` fallback; correct `aria-pressed`/`aria-label`.

## 10. Final Notes
- Invent a fictional brand name, product, and copy. Never use "Adnaut" or its trademarks.
- Ensure the page feels like a control room: restrained, precise, lit by a single warm-yellow lamp.
