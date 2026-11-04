# Landing Page — AgentQL Theme (Fictional Brand)

## 1. Project Overview

Build a complete, production-ready landing page for a fictional developer-tool brand. Invent a fictional brand name, product name, and all user-facing copy. Never use the real brand name "AgentQL", its logo, trademarks, or product names anywhere in the page. Reuse only the visual style described below.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`). All styling lives in `style.css`. Use one consistent class-naming convention (BEM recommended) across the entire deliverable — never mix conventions.

## 2. Strict Architectural Rules

### 2.1 CSS-First Architecture & Zero Inline CSS
- All styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Class/ID selectors only. HTML must remain clean, semantic, and agnostic of visual styling.
- Changing the look must require modifying only CSS, not markup.

### 2.2 CSS Variables & Theme Tokens
Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:

**Colors**
- `--color-void: #0b0c0e`
- `--color-abyss: #0e111b`
- `--color-deep-sea: #0d172b`
- `--color-cobalt-panel: #12244f`
- `--color-frosted-lilac: #85a6e9`
- `--color-signal-blue: #2862d7`
- `--color-pulse-violet: #305fbd`
- `--color-aurora-purple: radial-gradient(79.43% 95.88% at 38.94% -53.46%, rgba(98, 95, 255, 0.38) 0px, rgba(0, 0, 0, 0))`
- `--color-plasma-pink: radial-gradient(27.99% 22.08% at 72.13% 103.46%, rgba(255, 125, 218, 0.33) 0px, rgba(0, 0, 0, 0))`
- `--color-quartz: #ffffff`
- `--color-ash: #abaebb`
- `--color-mist: #c7c9d1`
- `--color-slate: #3c3f44`
- `--color-obsidian-edge: #172540`
- `--color-inkline: #151e32`
- `--color-sapphire-hairline: #24375a`
- `--text-success: #28b6ff` (reused as success accent)
- `--text-error: #ff7dda` (reused as error accent)

**Contrast Pairing:** Every light background token pairs with a dark text token and vice versa. Enforce for every theme.

**Light Mode Background:** This is a dark-first theme; no light mode canvas is required, but dark mode tokens must still be defined under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector for completeness.

**Border Radius & Shadows**
- `--radius-sm: 2px`
- `--radius-md: 8px`
- `--radius-lg: 12px`
- `--radius-pill: 9999px`
- `--shadow-md: rgba(0, 0, 0, 0.2) 0px 3px 16px 0px`
- `--shadow-xl: rgba(0, 0, 0, 0.5) 0px 4px 30px 0px`
- `--shadow-xl-2: rgba(0, 0, 0, 0.34) 0px 20px 35px 0px, rgba(0, 0, 0, 0.25) 0px 4px 13px 0px`
- `--shadow-md-2: rgba(255, 255, 255, 0.35) 0px 2px 14px 0px`
- `--shadow-xl-3: rgba(0, 0, 0, 0.35) 0px 20px 34px 0px`
- `--shadow-subtle: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px`

**Spacing & Transitions**
- `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-12: 12px`, `--spacing-16: 16px`, `--spacing-20: 20px`, `--spacing-24: 24px`, `--spacing-28: 28px`, `--spacing-32: 32px`, `--spacing-36: 36px`, `--spacing-40: 40px`, `--spacing-64: 64px`, `--spacing-76: 76px`, `--spacing-80: 80px`, `--spacing-104: 104px`, `--spacing-160: 160px`, `--spacing-192: 192px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Elevation/Stacking**
- `--z-dropdown: 100`
- `--z-modal: 200`
- `--z-toast: 300`

### 2.3 Mandatory Dark Mode Support
- Dark mode tokens defined under `@media (prefers-color-scheme: dark)` and/or `.dark` class selector.
- Background and text CSS variables switch seamlessly without HTML restructuring.
- User theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Visible toggle control with correct `aria-pressed`/`aria-label` state.

### 2.4 Flexbox Layout & Mobile-First Alignment
- All layout structures use Flexbox (`display: flex`).
- Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box: rows convert to columns on smaller viewports. No horizontal scrolling.

### 2.5 Framework Default
Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives). All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons (Google Fonts Mandatory)
- Text: Google Fonts — Inter (weights 300, 400, 500, 600), Figtree (weights 500, 600), IBM Plex Mono (weight 400). Bind to `--font-inter`, `--font-figtree`, `--font-ibm-plex-mono`.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 3. Theme Specification — AgentQL Visual Style

**Canvas & Surfaces (layered, no shadows for definition):**
- Page base: `#0b0c0e` (Void)
- Primary canvas: `#0e111b` (Abyss)
- Elevated cards: `#0d172b` (Deep Sea)
- Highlighted cards: `#12244f` (Cobalt Panel)
- Surface order for elevation: `#0b0c0e` → `#0e111b` → `#0d172b` → `#12244f`

**Typography:**
- Inter: body copy, nav, buttons, labels, subheadings. Weight 300–400 for body; 500 for buttons/labels.
- Figtree: display/headings 32px+, weight 500, letter-spacing -0.02em.
- IBM Plex Mono: code blocks and inline code only, 13px.
- Type scale: body 16px/1.5, subheading 20px/1.38, heading-sm 28px/1.25, heading 36px/1.13, heading-lg 48px/1.13, display 64px/1.00.

**Aurora Glows (hero/section backgrounds only):**
- Purple radial: `radial-gradient(79.43% 95.88% at 38.94% -53.46%, rgba(98, 95, 255, 0.38) 0px, rgba(0, 0, 0, 0))`
- Pink radial: `radial-gradient(27.99% 22.08% at 72.13% 103.46%, rgba(255, 125, 218, 0.33) 0px, rgba(0, 0, 0, 0))`
- Never inside content cards or feature sections.

**Borders:** 1px in `#172540` (Obsidian Edge) or `#151e32` (Inkline). Avoid shadows alone for card definition.

**Shadows:** Heavy dark drop shadows for depth — `rgba(0,0,0,0.5) 0px 4px 30px` for elevated cards; `rgba(0,0,0,0.34) 0px 20px 35px, rgba(0,0,0,0.25) 0px 4px 13px` for floating visuals.

**Border Radius:** nav 8px, tags 9999px, cards 12px, small 2px, inputs 8px, buttons 9999px.

**Layout:** Centered max-width 1200px container, full-bleed dark canvas. Section gaps 80px. Card padding 24px. Element gap 8px.

## 4. Component Specifications

### 4.1 Buttons
- **Primary CTA:** White-filled pill — background `#ffffff`, text `#050606`, Inter 500 at 15–16px, border-radius 9999px, padding 10px 20px. No shadow, no border. Optional 1px hairline `#161618`.
- **Ghost Button:** Transparent, border 1px `#777a88`, text `#ffffff` Inter 500 15px, border-radius 9999px, padding 10px 20px.
- **Accent Gradient Button:** `linear-gradient(90deg, #305fbd, #625fff)`, text `#ffffff` Inter 500 14–15px, border-radius 9999px, padding 10px 20px. Sparingly used — once per page.
- **All buttons:** Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`), min touch target 44x44px. States: hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring via CSS variables), active (transform scale 0.97), loading (disabled interactions, CSS spinner, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).

### 4.2 Cards
- **Feature Card:** Background `#0e111b` or `#0d172b`, border 1px `#151e32` or `#172540`, border-radius 12px, padding 24px. Contains small icon, heading, supporting text. Elevated shadow on lift.
- **Highlighted Card:** Background `#12244f`, border 1px `#1e2b48`, border-radius 12px, padding 32px.
- **Pricing Tier Card:** Background `#0d172b`, border 1px `#172540`, border-radius 12px, padding 24px. Professional tier: background `#12244f`, border 1px `#1e2b48`, "Most Popular" pill badge top-right. Price in Figtree 48–64px weight 500. Feature list: Inter 14–15px, 4–6px row gaps, checkmark icons.
- **Card states:** hover (elevation/shadow shift or translateY(-2px)), focus-within (highlight borders), loading (skeleton shimmer), empty state (Google Icon + guidance text).

### 4.3 Code Snippet Block
- Background `#0d172b`, border 1px `#151e32`, border-radius 12px, padding 16px.
- Header row: filename (Inter 13px `#abaebb`) + copy icon.
- Code body: IBM Plex Mono 13px, line-height 1.5.
- Syntax colors: keywords `#ff7dda`, strings `#28b6ff`, comments `#8798c1`, plain text `#c7c9d1`. Line numbers `#3c3f44`.
- Floating drop shadow: `rgba(0,0,0,0.34) 0px 20px 35px 0px, rgba(0,0,0,0.25) 0px 4px 13px 0px`.

### 4.4 Navigation Bar
- Sticky top header, transparent or `#0b0c0e` at 90% opacity, height 56–64px.
- Logo left (Figtree 500), nav links Inter 14–15px weight 400, social + CTA buttons right.
- No visible border, no shadow. Active nav: `#ffffff`, inactive: `#abaebb`.

### 4.5 Section Label (Eyebrow)
- Inter 12–13px weight 500, uppercase, letter-spacing 0.02em, color `#abaebb`. Pairs with 36–48px Figtree heading below.

### 4.6 Integration Tile
- 80–96px square, background `#0d172b` with gradient overlay, border-radius 12px. Centered brand logo on violet-tinted surface. 4×N grid, 8–12px gaps.

### 4.7 Badge / Tag
- Background `#12244f` or `#0d172b`, text `#85a6e9` or `#ffffff`, Inter 12px weight 500, border-radius 9999px, padding 4px 12px.

### 4.8 Feature List Item
- Icon (checkmark/info) in `#8798c1` at 16px, text Inter 14–15px `#c7c9d1`, row gap 6–8px. Info icon triggers tooltip.

### 4.9 Stat Highlight Row
- Icon + label horizontal row, Inter 14–15px `#c7c9d1`, icon 16px `#8798c1`. Items separated 16–24px, 2-column grid inside signup prompt cards.

### 4.10 Modal / Popup (if used)
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### 4.11 Form & Input
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

## 5. Page Sections Required

Build these sections in order:

1. **Hero** — Two-column split: left holds two-line Figtree 64px headline with subtext and paired CTAs (Primary CTA + Ghost Button). Right holds multi-layered code-editor mockup extending to page edge, with floating code panels, heavy black drop shadows, slight rotation. Aurora purple + pink radial glows bleeding from hero corners. Include Navigation Bar (sticky, transparent).

2. **Features** — 3-column card grid (Feature Cards). Each: small icon (Google Material Symbol), heading (Inter 20px weight 500, `#ffffff`), body text (Inter 16px weight 400, `#c7c9d1`, line-height 1.5). Grid gap 16px, 80px section gap.

3. **How It Works** — 3 steps. Each step: number badge, heading, description, optional icon. Horizontal on desktop, vertical on mobile. Use Flexbox with `align-items: center`.

4. **Testimonials** — 2–3 testimonial cards. Each: quote text, author name, role/company, avatar (Google Material Symbol placeholder or initials). Card style: background `#0d172b`, border 1px `#172540`, border-radius 12px, padding 24px.

5. **Pricing** — 3-column card grid (Starter, Professional, Enterprise). Professional tier elevated: background `#12244f`, border 1px `#1e2b48`, "Most Popular" badge pill top-right. Price in Figtree 48–64px weight 500. Feature list with checkmark icons. CTA at bottom (white pill). 80px section gap.

6. **FAQ** — Accordion-style FAQ. Each item: question (Inter 16px weight 500, `#ffffff`), answer (Inter 14px, `#c7c9d1`). Expand/collapse via CSS transitions. Use semantic `<details>`/`<summary>` or accessible button pattern with ARIA.

7. **Final CTA** — Centered section with Figtree heading, supporting copy, and Primary CTA button. Aurora glow background.

8. **Footer** — Secondary links, social icons (Google Material Symbols), copyright. Background `#0b0c0e`. Flex layout, mobile-responsive.

## 6. Core UX & Micro-Interaction Rules

- **Responsive by Default:** Fluid sizing, responsive breakpoints, no horizontal overflow. Mobile-first.
- **Smooth Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`). Respect `prefers-reduced-motion`.
- **Accessibility:** Sufficient contrast in dark mode. Never rely solely on color for state. Semantic HTML5 elements. Correct ARIA roles/labels on custom widgets. Logical DOM/focus order. Full keyboard operability. `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- **Mandatory Visual Feedback:** Every click, hover, or submission triggers a visible state change.
- **Destructive Actions:** `.btn-danger` visually distinct in dark theme.

## 7. Do's and Don'ts (Enforce)

**Do:**
- Use 9999px radius for all interactive elements (buttons, badges, tags, nav pills).
- Use Figtree weight 500 for all display text 32px+ with -0.02em tracking.
- Use Inter weight 300–400 for body copy.
- Apply aurora gradient pair as large soft radial glows on dark hero/section backgrounds only.
- Layer surface colors in order for elevation without shadows.
- Use `#2862d7` or `#305fbd` for link text and code syntax, never for large fills.
- Apply 1px borders in `#172540` or `#151e32` to define cards.

**Don't:**
- Don't use bright fills on CTA buttons — white is the primary action color.
- Don't place radial gradient glows inside content cards or feature sections.
- Don't use Inter for headlines 32px+ — Figtree owns display.
- Don't use `#12244f` as a page background — highlight surface only.
- Don't add color to secondary text — keep `#abaebb` and `#c7c9d1` achromatic.
- Don't use sharp corners (0px) on interactive elements — minimum 2px code, 8px inputs, 12px cards.
- Don't apply elevation shadows to ghost/outline buttons.

## 8. Imagery & Decoration

No photography, no illustration, no 3D. The only decoration is the two large radial gradient glows (purple + pink) bleeding from hero corners. Hero right side: layered code-editor mockup with syntax highlighting in purple, blue, muted pink against `#0d172b` panels, overlapping with slight rotation and heavy black drop shadows. Integration section (if used): square tiles with brand logos on violet-tinted surfaces.

## 9. Output Requirements

- File structure: `index.html`, `style.css`, `script.js`.
- No inline `<script>` beyond single deferred entry-point reference.
- One consistent class-naming convention (BEM) throughout.
- No lorem-ipsum-only submissions — invent real fictional copy/labels for all sections. Placeholders allowed only where content is genuinely unspecified.
- All user-facing copy in English.
- All CSS variable names, class names, file names in English/ASCII.

## 10. Edit Mode Note

If modifying existing markup rather than building from scratch: never introduce new HTML tags/components/DOM nodes. Work only within existing element/class structure. Define CSS classes only for elements that already exist. Do not write JS for form validation, popups/modals, or utility functions — ask the user how they want it handled. If a style change requires new markup, stop and ask.
