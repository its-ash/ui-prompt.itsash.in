# Coding AI Prompt — Subframe-Themed Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a fictional brand/product. The visual style is "Subframe": a monochrome designer's workbench — warm off-white canvas, graphite-black ink, zero chromatic accent. The page must invent a fictional brand name, product name, and all copy. Never use the real "Subframe" brand name, logo, trademarks, or product names. All user-facing copy must be in English.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere.

## 2. CSS-First Architecture & Zero Inline CSS
- All styling lives exclusively in `style.css`. No inline CSS.
- Target all design properties via class or ID selectors only.
- HTML structure stays clean, semantic, and agnostic of visual styling.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.

## 3. CSS Variables & Theme Tokens
Store all visual tokens in `:root` (and `.dark` class) using CSS variables. Include at minimum:

**Colors:**
- `--color-page-canvas: #fafafa`
- `--color-hairline-border: #e5e7eb`
- `--color-card-surface: #ededed`
- `--color-divider-mid: #dadada`
- `--color-graphite: #242424`
- `--color-ink-black: #171717`
- `--color-pencil: #5c5c5c`
- `--color-faint-graphite: #a3a3a3`
- `--primary: var(--color-graphite)`
- `--secondary: var(--color-card-surface)`
- `--bg-primary: var(--color-page-canvas)`
- `--bg-secondary: var(--color-card-surface)`
- `--text-primary: var(--color-ink-black)`
- `--text-secondary: var(--color-pencil)`
- `--text-success: #171717` (monochrome; success communicated via icon + text, not color)
- `--text-error: #171717` (monochrome; error communicated via icon + text, not color)
- `--border-default: var(--color-hairline-border)`
- `--border-error: var(--color-ink-black)`
- `--border-success: var(--color-ink-black)`

**Contrast Pairing:** Light backgrounds pair with dark text tokens; dark surfaces (`#242424`) pair with `#fafafa` text. Enforce for every theme.

**Border Radius & Shadows:**
- `--radius-sm: 16px`
- `--radius-md: 24px`
- `--radius-lg: 9999px`
- `--shadow-sm: inset 0 4px 4px -2px rgba(255,255,255,0.25), inset 0 -4px 4px -2px rgba(0,0,0,0.25), inset -2px 0 2px -2px rgba(255,255,255,0.1)`

**Spacing & Transitions:**
- `--spacing-gap: 8px`
- `--spacing-8: 8px`, `--spacing-16: 16px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-48: 48px`, `--spacing-64: 64px`, `--spacing-96: 96px`, `--spacing-128: 128px`, `--spacing-192: 192px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Elevation/Stacking:**
- `--z-dropdown: 1000`, `--z-modal: 2000`, `--z-toast: 3000`

**Typography:**
- `--font-inter: 'Inter', sans-serif`
- `--font-instrument-serif: 'Instrument Serif', serif`
- `--font-fragment-mono: 'JetBrains Mono', monospace`
- `--font-ui-monospace: 'SF Mono', Menlo, monospace`
- `--text-caption: 12px`, `--text-body-sm: 14px`, `--text-body: 18px`, `--text-subheading: 24px`, `--text-heading-sm: 28px`, `--text-heading: 48px`, `--text-display: 96px`

**Fonts:** Load Google Fonts for Inter (weights 500, 600, 700), Instrument Serif (weight 400), and JetBrains Mono (weight 400). Bind to variables. Use Google Material Symbols for all icons. No raw inline SVGs or local icon files.

## 4. Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Dark mode palette: invert canvas to `#171717`, text to `#fafafa`, card surface to `#242424`, borders to `#2a2a2a`, graphite fill to `#fafafa` with `#171717` text. Maintain contrast pairing.
- Theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Flexbox Layout & Mobile-First
- All layout structures use Flexbox (`display: flex`). Default alignment rule: every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box: convert rows to columns on smaller viewports. Prevent horizontal scrolling.
- Page max-width: 1200px, centered. Section gap: 64px. Card padding: 24px. Element gap: 8px.

## 6. Framework
Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply` directives). All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons
- Google Fonts mandatory for text and icons (Material Symbols).
- Inter: weight 500 body/controls, 600 subheadings/nav, 700 section headlines. Heavy negative tracking: -0.05em at display (96px+), -0.025em at 18px+.
- Instrument Serif: weight 400, 80–128px, line-height 1.0, letter-spacing -0.025em. Used as a single inline word/phrase inside or after an Inter headline — never full sentences or body text.
- JetBrains Mono: weight 400, 18px, for inline code-like elements, tag labels, technical callouts.
- ui-monospace: weight 500, 10px, for micro-labels and keyboard shortcuts.

## 8. Component Specifications

### Button
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`. Min touch target 44x44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.
- Dark Filled: bg `#242424`, text `#fafafa`, 16px radius, padding 8px 20px, Inter 500 14px, inset highlight bevel.
- Ghost/Outlined: transparent bg, 1px `#e5e7eb` border, text `#171717`, 16px radius, padding 8px 20px.
- Watch Demo: ghost style with play-triangle icon preceding text.

### Card
- Default: flex layout, `#ededed` bg, 24px radius, 24px padding, no border, no shadow.
- Hover: subtle transform `translateY(-2px)`.
- Focus-within: highlight border.
- Loading (Skeleton): shimmer animation in CSS.
- Empty State: Google Icon + guidance text.

### Form & Input
- States: Empty, Focused (outline ring), Filled, Valid, Invalid (error border, text, icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, error feedback container.

### Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### Pill Nav Group
- Dark capsule `#242424`, 9999px radius, 2–3 segments in `#fafafa` text. Active segment highlighted. Padding 8px 16px per segment.

### Top Navigation Bar
- Centered group of 3 text links (Pricing, Docs, Blog) with 32px row gap, right-aligned "Log in" text link and "Start for free" filled button. Logo mark top-left, very small. No background container. Inter 500 14px. Active/hovered `#171717`, inactive `#a3a3a3`.

### Hero Display Headline
- Inter 700, 96px, line-height 1.0, letter-spacing -4.8px, color `#171717`, centered.

### Serif Accent Phrase
- Instrument Serif 400, 80–128px, line-height 1.0, letter-spacing -3.2px, color `#171717`, single inline word/phrase.

### Section Heading
- Inter 700, 48px, line-height 1.13, letter-spacing -1.2px, color `#171717`, left-aligned. Followed by two-line body subhead Inter 500 18px `#5c5c5c`, 32px gap.

### Product Showcase Frame
- 24px radius, 1px `#e5e7eb` border, no shadow, no padding. Contains screenshot/mockup.

### Grayscale Logo Strip
- Horizontal row of 4–6 logos in `#a3a3a3` or `#5c5c5c`, equal spacing 48–64px gap, no container, on canvas.

### Icon Mark
- Stroke-only icons `#171717`, 20–24px, 1.5px stroke. Simple geometric forms.

## 9. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 10. Do's and Don'ts (enforce in generated CSS)
- Do use `#242424` filled button bg with `#fafafa` text.
- Do apply -0.025em letter-spacing on headings 18px+; tighten to -0.05em at display 96px+.
- Do use 24px radius on cards/images/nav; 16px on buttons; 9999px on pills.
- Do separate surfaces by one lightness step (`#fafafa` → `#ededed`), not shadow.
- Do place a single Instrument Serif phrase inside/after an Inter headline.
- Do keep section gaps 48–64px.
- Do render logos/icons in grayscale.
- Don't introduce chromatic color anywhere.
- Don't use drop shadows for elevation.
- Don't use Inter for display headlines above 96px when Instrument Serif available.
- Don't use `#000000`; use `#171717` or `#242424`.
- Don't set border-radius below 16px on interactive elements.
- Don't use Inter weight 400 for body; minimum 500.
- Don't put backgrounds on logo strips.

## 11. Page Sections to Build
1. **Hero**: Centered stack — dark segmented pill at top, large Inter headline (96px), single-line subhead, two side-by-side buttons (filled + ghost). 64px gap headline→subhead. No side image.
2. **Grayscale Logo Strip**: 5 logos, `#a3a3a3`, 64px gap, centered, no container.
3. **Features**: 3 cards in a row (`#ededed`, 24px radius, 24px padding). Inter 600 18px heading `#171717`, Inter 500 14px body `#5c5c5c`, 16px gap within card.
4. **How It Works**: 3 steps with section heading + subhead, then numbered steps with icon marks.
5. **Testimonials**: Cards with quote, author, role. Monochrome.
6. **Pricing**: 3 tiers. Middle tier highlighted via `#242424` dark surface or border emphasis.
7. **FAQ**: Accordion with expand/collapse, keyboard accessible, `aria-expanded`.
8. **Final CTA**: Centered headline + subhead + filled button.
9. **Footer**: Secondary links, logo mark, copyright. No background container.

Each section: left-aligned heading + subhead block where applicable, then content beneath with 48–64px gaps. Centered max-width 1200px layout.

## 12. Imagery
- Bordered product screenshots/UI mockups in 24px-radius frames with 1px `#e5e7eb` border, no shadow.
- Single grayscale logo strip.
- No lifestyle photography, gradients, or 3D renders.
- All imagery occupies text-dominant layout.

## 13. Output Format
- Separate `index.html`, `style.css`, `script.js`.
- BEM class naming throughout.
- No unrequested placeholders where real copy is supplied; placeholders only where content genuinely unspecified.
- Invent fictional brand name, product, and all copy. Never use "Subframe" or its trademarks.

## 14. Edit Mode (not applicable — from-scratch build)
N/A; this is a from-scratch build.

## 15. Language
All copy, labels, section names, and descriptions in English. CSS variable names, class names, file names in English/ASCII. If any source spec demanded non-English copy, convert to English.
