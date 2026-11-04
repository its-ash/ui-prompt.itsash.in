# Landing Page Build Prompt — "Three" Theme

## 1. Project Overview
Build a complete, responsive landing page using the **Three** visual style: a dark, monochromatic developer-canvas aesthetic lit by a single molten-orange accent (`#ff4300`). The page must feel austere, bold, and confident. Invent a fictional brand name, product name, and all copy — never use "Three", "ThreeTools", or any real brand/trademark. All user-facing copy must be in English.

## 2. File Structure & Architecture
- Deliver separate `index.html`, `style.css`, and `script.js` files.
- No inline `style="..."` attributes anywhere in HTML.
- All styling lives in `style.css` using class/ID selectors only.
- Use BEM naming convention consistently across all classes.
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) with utilities mapping back to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- No inline `<script>` blocks beyond a single deferred entry-point reference.

## 3. CSS Variables & Theme Tokens
Define all tokens in `:root` and provide dark-mode overrides under `@media (prefers-color-scheme: dark)` and/or a `.dark` class.

Color tokens (from the Three style):
- `--color-ember-orange: #ff4300`
- `--color-void-black: #111111`
- `--color-obsidian: #181818`
- `--color-charcoal: #2b2a2a`
- `--color-graphite: #343434`
- `--color-steel: #666666`
- `--color-fog: #8d8d8d`
- `--color-ash: #999999`
- `--color-silver: #cacaca`
- `--color-pure-white: #ffffff`
- `--color-bone: #e9e6e6`

Map to semantic tokens:
- `--primary: var(--color-ember-orange)`
- `--bg-primary: var(--color-void-black)`
- `--bg-secondary: var(--color-obsidian)`
- `--bg-tertiary: var(--color-charcoal)`
- `--text-primary: var(--color-pure-white)`
- `--text-secondary: var(--color-silver)`
- `--text-muted: var(--color-ash)`
- `--text-subtle: var(--color-steel)`
- `--border-default: var(--color-graphite)`
- `--border-hairline: var(--color-silver)`
- `--text-success` / `--text-error` (define muted green/red variants for states)

Additional tokens:
- `--radius-sm: 7px`, `--radius-md: 15px`, `--radius-lg: 20px`, `--radius-xl: 25px`, `--radius-pill: 50px`, `--radius-full: 999px`
- `--shadow-sm`, `--shadow-md` (subtle, low-opacity; elevation is primarily tone-based)
- `--spacing-gap: 20px`
- `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown`, `--z-modal`, `--z-toast`

Typography:
- `--font-base: 'Inter', -apple-system, system-ui, sans-serif` (Google Font, weight 700 only)
- All text at weight 700. No 300/400/500/600 weights anywhere.
- Type scale tokens: `--text-body: 14px`, `--text-body-lg: 16px`, `--text-subheading: 20px`, `--text-heading-sm: 24px`, `--text-heading: 46px`, `--text-display: 68px`
- Letter-spacing: `-0.056em` at 68px, `-0.03em` at 46-48px, `-0.025em` at 24px, `-0.016em` at 20px, `-0.015em` at 16px, `-0.008em` at 14px
- Line-height: 1.00–1.25

Spacing scale (4px base): 4, 8, 12, 16, 20, 24, 32, 40, 44, 48, 56, 60, 76, 100, 120, 128px.

## 4. Dark Mode (Mandatory)
- Provide dark-mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class.
- The default theme is already dark; ensure light-mode overrides exist for completeness (invert surfaces/text) even though the design is dark-first.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Typography & Icons
- Load Google Fonts (Inter, weight 700) via `<link>` or `@import`.
- Use Google Material Symbols/Icons for all icons. No inline SVGs or local icon files.
- Bind font to `--font-base`.

## 6. Layout & Flexbox Rules
- All layouts use Flexbox (`display: flex`).
- Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first: convert rows to columns on small viewports; prevent horizontal scrolling.
- Page max-width: 1200px, centered.
- Section gaps: 80–100px vertical.
- Card padding: 20px; element gap: 20px.

## 7. Component Specifications

### 7.1 Button
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min 44x44px touch target, border-radius 15px, font-weight 700.
- Primary (Ember): `#ff4300` background, white text, 8px 20px padding.
- Ghost: transparent background, subtle border (`#343434`), white text, border-radius 15px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled interactions, CSS spinner or animated Google Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- Success/Error: temporary styles via `--text-success`/`--text-error`.
- Danger variant: visually distinct in both themes.

### 7.2 Card
- Default: flex layout, subtle border, elevation via surface tone (`#181818` on `#111111` canvas), border-radius 20–25px, padding 20px, no drop shadow.
- Hover (if interactive): `transform: translateY(-2px)` or shadow shift.
- Focus-within: highlight border when child receives focus.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty state: Google Icon + guidance text.

### 7.3 Form & Input (Email Capture Pill)
- Pill container: border-radius 50px, background `#181818`, ~44px height.
- Input: white placeholder text, 14px weight 700, dark surface.
- States: Empty, Focused (outline ring), Filled, Valid, Invalid (error border + red text + icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, error feedback container.

### 7.4 Modal/Popup
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### 7.5 Header
- Minimal horizontal bar: logo left (geometric icon ~24px + "BrandName" wordmark white 700 14–16px + "Beta" badge), single CTA right, no nav links.
- Beta badge: pill/rounded rect, white text on dark fill, border-radius 7px, padding 1–3px vertical / 5px horizontal, 9–10px weight 700.

### 7.6 Status Pill
- Inline cluster: 12px ember-orange icon/badge + "Closed"/status text in white 700 12px + muted helper text in `#999999` 12px.

### 7.7 Headline Block
- White text 46–68px weight 700, letter-spacing -0.025em to -0.056em, line-height 1.00–1.25, centered.

### 7.8 Subtext Block
- Ash-gray (`#999999`) or Silver (`#cacaca`) text 14–16px weight 700, centered, line-height ~1.25, one to two lines max.

## 8. Page Sections
Build these sections in order:
1. **Header** — logo + Beta badge left, single CTA right.
2. **Hero** — 3D visual placeholder (matte Y-shaped geometric object in deep red-orange with white wireframe grid, centered on void canvas, no container), then two-line bold headline, then two-line subtext, all centered with generous vertical padding (~100px).
3. **Email Capture** — pill-shaped form centered below hero.
4. **Features** — 3 cards (elevated surface, border, radius 20–25px), each with icon + title + description.
5. **How It Works** — 3 steps with number/icon + title + description.
6. **Testimonials** — cards with quote + author.
7. **Pricing** — 3 tiers (card per tier, highlight middle tier with ember accent).
8. **FAQ** — accordion-style Q&A.
9. **Final CTA** — headline + subtext + primary button.
10. **Footer** — secondary links, charcoal panel surface, no dividers.

## 9. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 10. Deliverables
- Separate `index.html`, `style.css`, `script.js`.
- BEM naming throughout.
- No lorem-ipsum-only submissions where real copy is expected; placeholders allowed only where content genuinely unspecified.
- All copy in English; fictional brand/product names only.
