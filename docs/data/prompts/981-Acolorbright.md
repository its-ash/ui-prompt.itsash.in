# Coding AI Prompt — Acolorbright Landing Page (Fictional Brand)

## 1. Project Overview

Build a complete, responsive landing page for a **fictional brand** (invent a name, product, and copy — never use "Acolorbright" or any real trademark). The visual language is an achromatic editorial monolith: paper-white canvas, black-ink type, zero color, generous whitespace, serial numbered chapters. Output three separate files: `index.html`, `style.css`, `script.js`. No inline CSS. No inline SVGs. No lorem-ipsum-only copy where real labels are implied — invent plausible fictional copy.

## 2. Architecture Rules (Mandatory)

### 2.1 CSS-First & Zero Inline CSS
- All styling lives in `style.css`. No `style="..."` attributes.
- Target via class/ID selectors only. HTML stays semantic and style-agnostic.

### 2.2 CSS Variables & Theme Tokens
Define in `:root` (light theme default; this theme is light-only but dark-mode tokens must still be declared under `@media (prefers-color-scheme: dark)` and `.dark` for completeness, inverting paper/ink):

Colors:
- `--color-ink-black: #1a1a1a`
- `--color-charcoal: #262626`
- `--color-graphite: #666666`
- `--color-ash: #999999`
- `--color-fog: #e6e6e6`
- `--color-mist: #f2f2f2`
- `--color-paper: #ffffff`
- `--color-pure-black: #000000`

Map to generic tokens: `--primary: var(--color-ink-black)`, `--secondary: var(--color-graphite)`, `--bg-primary: var(--color-paper)`, `--bg-secondary: var(--color-mist)`, `--text-primary: var(--color-ink-black)`, `--text-secondary: var(--color-graphite)`, `--text-success`, `--text-error`, `--border-default: var(--color-fog)`, `--border-error`, `--border-success`.

Radius/shadow: `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 16px`, `--shadow-sm: none`, `--shadow-md: none` (system is shadowless).

Spacing/transitions: `--spacing-gap: 16px`, `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: ease`. Elevation: `--z-dropdown: 10`, `--z-modal: 100`, `--z-toast: 1000`.

Typography: `--font-base: 'RiformaLLWeb', 'Inter Tight', system-ui, sans-serif` (load Inter Tight from Google Fonts as substitute). `--font-arial: Arial, system-ui, sans-serif`.

Type scale tokens: `--text-caption: 12px`, `--text-body-sm: 16px`, `--text-body: 18px`, `--text-subheading: 24px`, `--text-heading: 40px`, `--text-display: 64px`. Letter-spacing uniformly `-0.01em` (e.g. `-0.12px`, `-0.16px`, `-0.18px`, `-0.24px`, `-0.4px`, `-0.64px`). Line heights: 1.2, 1.25, 1.25, 1.15, 1.1, 1.0.

Spacing scale: `--spacing-8: 8px`, `--spacing-16: 16px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-64: 64px`.

### 2.3 Mandatory Dark Mode
Provide dark-mode token overrides under `@media (prefers-color-scheme: dark)` and `.dark` class. Persist user choice via `localStorage`, fallback to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.

### 2.4 Flexbox & Mobile-First
Use Flexbox for layouts. Default `align-items: center` unless justified. Mobile-responsive, no horizontal scroll.

### 2.5 Tailwind or Clean Custom CSS
Use clean custom CSS with reusable classes (`.btn`, `.card`, `.input-group`). Utility classes map to CSS variables.

### 2.6 Google Fonts & Icons
Load Inter Tight from Google Fonts. Use Google Material Symbols for icons (hamburger, close, check, chevron). No inline SVGs or local icon files.

## 3. Component Specifications

### 3.1 Numbered Section Heading
32px circle, `#000000` fill, white numeral (1–5) in base font 400 at 18px, followed inline by H2 at 40px weight 400 `#1a1a1a`, letter-spacing -0.4px. Same baseline. No padding/border.

### 3.2 Hero Intro
Base font 40px weight 400 `#1a1a1a`, line-height 1.10, letter-spacing -0.4px, max-width ~720px, left-aligned, `padding-top: 256px`. Text only, no subhead/button.

### 3.3 Case Study / Feature Card
3-column grid. Image full-width, 12px radius, zero padding. Below: project name 16px weight 400 `#1a1a1a`, then description 16px `#666666`, 12px gap. No border/shadow/background.

### 3.4 Brand Identity Tile
Full-bleed image with 12px radius; image IS the tile. Title/caption follow.

### 3.5 Navigation Bar
Logo wordmark 18px weight 400 `#1a1a1a` left. Hamburger in 40px square white container, 1px `#1a1a1a` border, 16px radius, right-aligned. Transparent background, 32px horizontal padding.

### 3.6 Filled Dark Button
Background `#262626`, text `#ffffff`, base font 16px weight 400, padding 12px 6px, radius 8px, no border/shadow.

### 3.7 Outlined Light Button
Transparent bg, 1px `#e6e6e6` border, text `#1a1a1a`, base font 16px weight 400, padding 12px 6px, radius 8px.

### 3.8 List Row with Alternating Band
Full-width row, 8–16px vertical padding, `#f2f2f2` on odd rows / `#ffffff` on even. Text 16px weight 400 `#1a1a1a`. No borders.

### 3.9 Project Caption Block
Two lines: name 16px `#1a1a1a`, description 16px `#666666`, 12px gap. No box.

### 3.10 Footer
White bg, 32–64px top margin, 32px horizontal padding. Text 16px `#666666`. Secondary links.

### 3.11 Button States (all buttons)
Default flex `align-items: center; justify-content: center; gap: 0.5rem`, min 44x44px. Hover brightness/shadow + cursor pointer. Focus ring via CSS vars. Active `transform: scale(0.97)`. Loading disables + spinner. Disabled opacity 0.5 + greyscale + not-allowed. Success/Error temporary styles.

### 3.12 Card States (where interactive)
Default flex, subtle borders/elevation via vars. Hover `transform: translateY(-2px)`. Focus-within border highlight. Loading skeleton shimmer. Empty state with icon + guidance.

### 3.13 Form & Input
States: empty, focused, filled, valid, invalid, disabled, read-only. Flex container: label + input + error container.

### 3.14 Modal
States: opening, open, loading, success/error, closing (CSS transitions). Centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## 4. Core UX Rules

- Responsive by default, fluid sizing, no overflow.
- Smooth transitions respecting `prefers-reduced-motion`.
- Accessibility: contrast in both modes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` for dynamic feedback.
- Visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 5. Deliverables

- Files: `index.html`, `style.css`, `script.js`. Single deferred entry-point script reference.
- Naming: BEM consistently.
- No lorem-ipsum-only where copy is implied; invent fictional copy.
- Landing page sections: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
- Use numbered section headings (1–5+) as chapter spine.
- No real brand names/logos/trademarks; invent fictional brand, product, copy.

## 6. Do's & Don'ts (Theme-Specific)

Do: weight 400 only; letter-spacing -0.01em everywhere; numbered black circle badges; 12px image radius / 8px button radius; photography as only color; 64px+ section gaps, 256px hero top padding; `#f2f2f2` only for alternating bands.

Don't: no brand color/accent; no shadows/blur; no weight 600/700; no bordered/filled cards for body text; only 12/16/18/24/40/64px sizes; no icons beyond hamburger; no `#000000` for large text/body (reserve for badges/SVG fills).

## 7. Output

Output only the three files' contents as a single response with clear file delimiters. No preamble.
