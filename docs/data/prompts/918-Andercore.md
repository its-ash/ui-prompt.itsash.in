# Andercore-Style Landing Page — Coding AI Specification

## 1. Project Overview & Theme
Build a complete, production-ready landing page for a fictional brand (invent a new name, product, and copy — never use "Andercore" or any real brand names, logos, trademarks, or product names). The visual language is a dark, industrial, control-room aesthetic: near-black canvases (#0b0405), crisp white type, sharp 4px corners, and a single rationed red (#e32735) used only for primary actions and active states. Structure is line-based: 1px borders (#382e30) define edges; no shadows, glows, or blur elevation.

## 2. Architecture & File Structure
- Deliver three separate files: `index.html`, `style.css`, `script.js`.
- No inline `style="..."` attributes anywhere in HTML. All styling via class/ID selectors in `style.css`.
- HTML must be semantic, clean, and styling-agnostic.
- Use one consistent class-naming convention (BEM) across the entire deliverable.
- No inline `<script>` blocks beyond a single deferred entry-point reference: `<script src="script.js" defer></script>`.
- Use Tailwind CSS via CDN or clean custom CSS driven by Tailwind `@layer`/`@apply`; all utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

## 3. CSS Variables & Theme Tokens
Define all tokens in `:root` and provide dark-mode overrides under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Required variables:

Colors:
- `--color-signal-red: #e32735`
- `--color-carbon: #0b0405`
- `--color-graphite: #150e0f`
- `--color-steel: #382e30`
- `--color-slate: #858182`
- `--color-chalk: #ffffff`
- `--color-foil: #000000`
- `--bg-primary: #0b0405`
- `--bg-secondary: #150e0f`
- `--text-primary: #ffffff`
- `--text-secondary: #858182`
- `--text-success: #e32735` (reuse red as success accent per theme)
- `--text-error: #e32735`
- `--border-default: #382e30`
- `--border-error: #e32735`
- `--border-success: #e32735`

Typography:
- `--font-base: 'Archivo', sans-serif`
- `--font-mono: 'Space Mono', monospace`
- `--text-caption: 12px` (line-height 1.5, letter-spacing 0)
- `--text-body-sm: 14px` (line-height 1.5, letter-spacing -0.28px)
- `--text-body: 16px` (line-height 1.5, letter-spacing -0.32px)
- `--text-subheading: 24px` (line-height 1.2, letter-spacing -0.48px)
- `--text-heading: 40px` (line-height 1.2, letter-spacing -0.8px)
- `--text-display: 56px` (line-height 1.1, letter-spacing -1.12px)

Spacing & Shape:
- `--spacing-8: 8px`, `--spacing-16: 16px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-40: 40px`, `--spacing-48: 48px`, `--spacing-64: 64px`
- `--radius-sm: 4px`, `--radius-md: 4px`, `--radius-lg: 4px` (all corners exactly 4px — no exceptions)
- `--shadow-sm: none`, `--shadow-md: none` (no shadows in this theme)
- `--spacing-gap: 24px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`

Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text. Enforce for every theme.

Light mode background: use `#fefefe` where a white/near-white is needed (nav bar). Do not default to pure white for section backgrounds.

## 4. Typography & Icons
- Import Google Fonts: Archivo (weights 400, 500) and Space Mono (weight 400) via `<link>` or `@import`. Bind to `--font-base` and `--font-mono`.
- Use Google Material Symbols/Icons for all icons. No raw inline SVGs or local icon files.
- Apply `-0.02em` letter-spacing to all Archivo type at all sizes.
- Headings use weight 500 (never 700+). Body/UI uses weight 400.
- Step numbers, serial codes, badges, and instrumentation labels use Space Mono 12px.

## 5. Dark Mode & Theme Switching
- Dark mode defined under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Background and text CSS variables switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed` and `aria-label` state.

## 6. Flexbox, Layout & Responsive Rules
- All flex containers default to `align-items: center` (`items-center`) unless explicitly justified.
- Mobile-first: convert rows to columns on small viewports; prevent horizontal scrolling.
- Page max-width: 1200px centered. Section gap: 80px. Card padding: 32px. Element gap: 24px.
- Navigation: thin fixed white bar at top, no shadow, separates from dark sections via background shift.

## 7. Component Specifications

### 7.1 Buttons
- Default: flex layout, `align-items: center`, `justify-content: center`, `gap: 0.5rem`; min touch target 44x44px.
- Primary CTA: Signal Red (#e32735) fill, white text 14px Archivo weight 500, padding 12px 24px, 4px radius, no shadow/gradient, borderless.
- Ghost/Dark: dark fill (#0b0405 or #150e0f), 1px #382e30 border, white text 14px Archivo weight 500, padding 12px 24px, 4px radius.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success` / `--text-error`.
- Destructive actions: visually distinct in both light and dark themes.

### 7.2 Cards
- Default: flexbox layout, subtle 1px #382e30 border, elevation via `--bg-secondary` and CSS variables, 32px padding, 4px radius.
- Hover: shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight border when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty State: structured fallback with Google Icon and guidance text.

### 7.3 Forms & Inputs
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

### 7.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### 7.5 Industrial Badge / Tag
- Transparent fill, 1px #858182 border, Space Mono 12px text in #858182, padding 8px 12px, 4px radius. Used as section eyebrows.

### 7.6 Step Progress Indicator
- Horizontal row of step labels in Archivo 14px. Active step: red (#e32735) text with 2px red underline bar. Inactive: #858182 text, no underline. Step numbers ('01', '02', '03') in Space Mono 12px right-aligned.

### 7.7 Feature Card with UI Mockup
- Dark card on #0b0405 canvas, 1px #382e30 border (or none), 32px padding, 4px radius. Contains small UI mockup in slightly lighter dark (#150e0f or #1a1213) with red #e32735 icon/dot accent. Heading in Archivo 24px white, body in 14px #858182.

### 7.8 Connector Line / Accent Divider
- 1px line in #382e30 with small square nodes (#ffffff) at junctions. Occasionally terminates in red #e32735 square node or brand mark. Links three-column challenge cards vertically into a single system.

### 7.9 Eyebrow / Section Label
- Space Mono 12px or Archivo 12px weight 500, all-caps where used, #858182 color, sometimes paired with 1px red #e32735 underline accent.

## 8. Page Sections (in order)
1. **Navigation Header**: white background (#fefefe), Archivo 14px nav links in dark text, logo left (fictional wordmark), utility links and CTAs right. Fixed thin bar, no shadow.
2. **Hero with Photographic Overlay**: full-bleed industrial image with dark gradient overlay, display headline at 56px Archivo weight 500 white, 1.10 line-height, -1.12px tracking. Body subtext at 16px muted white. Primary red CTA + ghost dark button inline below. Single gradient allowed: white-to-red (linear-gradient 90deg, #ffffff 18%, #e32735) on hero overlay edge or connector lines only.
3. **Features (3 cards)**: dark #0b0405 background, three-column grid with 32px gutters. Each card: 1px #382e30 border, 32px padding, 4px radius. Eyebrow badge above (Space Mono 12px, #858182, 1px #858182 border). Card heading 24px Archivo weight 500 white. Body 14px Archivo weight 400 #858182. Include UI mockup with red accent dot.
4. **How It Works (3 steps)**: step progress indicator + content. Horizontal row of steps labeled in Archivo 14px. Active step red with 2px red underline. Inactive #858182. Step numbers in Space Mono 12px right-aligned. Two-thirds left text, one-third right visual (chat + photo).
5. **Testimonials**: dark section, cards with 1px #382e30 border, 32px padding, 4px radius. Quote text in white Archivo 16px, attribution in #858182.
6. **Pricing (3 tiers)**: dark section, three cards. Each: 1px #382e30 border, 32px padding, 4px radius. Tier name in Archivo 24px white, price in Archivo 40px white, feature list in 14px #858182. Primary CTA on recommended tier (red fill), ghost on others.
7. **FAQ**: dark section, accordion items with 1px #382e30 borders. Question in Archivo 16px white, answer in 14px #858182. Expand/collapse via CSS transitions.
8. **Final CTA**: dark section, centered heading 40px white, body 16px #858182, red CTA button.
9. **Footer**: dark #0b0405 background, secondary links in #858182 Archivo 14px, fictional brand wordmark, 1px #382e30 top border. No shadows.

## 9. Core UX & Micro-Interaction Rules
- Responsive by default: fluid sizing and breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback: every click, hover, or submission triggers visible state change.
- Red used exclusively for single primary action per surface — never decorative or background fill.
- All corners exactly 4px — no pill shapes, no zero-radius hard edges.
- No drop shadows, glows, or blur-based elevation.
- No gradients except the single white-to-red hero/connector gradient.
- Headings weight 500 (not 700) at 40–56px.
- Space Mono for numeric step counters, product codes, instrumentation labels — never Archivo.
- Define card/panel edges with 1px #382e30 borders on dark, never box-shadow or background tint shifts.
- Dark-dominant after hero: do not alternate light/dark within a single content flow.

## 10. Imagery & Visuals
- Photography: industrial subjects (logistics trucks, construction sites, workers in hard hats) in golden-hour or moody low-light. Full-bleed with dark gradient overlays merging into #0b0405 backgrounds.
- UI mockups: flat dark-on-dark diagrams with red accent dots, never realistic product screenshots.
- Brand mark: fictional, used as logo and small red UI token (avatar, connector node).
- No illustration style — only photographic, diagrammatic, or pure typography on dark canvas.

## 11. Deliverable Requirements
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond deferred entry point.
- BEM naming convention throughout.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content genuinely unspecified.
- All user-facing copy in English.
- All CSS variable names, class names, and file names in English/ASCII.

## 12. Edit Mode (not applicable — this is a from-scratch build)
This is a new build; no existing markup constraints apply. However, if any requested style change cannot be achieved without adding markup, stop and ask the user rather than silently inserting new HTML.

## 13. Output
Output only the three files' contents as specified. No preamble, no closing commentary. Ensure the page is fully functional, responsive, accessible, and matches the Andercore industrial control-room aesthetic described above.
