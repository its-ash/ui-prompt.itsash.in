# Generated Coding-AI Prompt — Landing Page (AXEL ARIGATO Style)

## 1. Strict Rules & Architecture

### 1.1 CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside a dedicated `style.css`. Forbid the `style="..."` attribute in HTML entirely.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

### 1.2 CSS Variables & Theme Tokens
Store all visual tokens inside `:root` using CSS variables. Required tokens (AXEL ARIGATO palette, adapted to the generic token names):
- Colors: `--primary` = `#000000`, `--secondary` = `#faedbc`, `--bg-primary` = `#ffffff`, `--bg-secondary` = `#f3f3f3`, `--text-primary` = `#090909`, `--text-secondary` = `#090909`, `--text-success` = `#090909`, `--text-error` = `#090909`, `--border-default` = `#e9e9e9`, `--border-error` = `#090909`, `--border-success` = `#090909`.
- Also define brand-specific tokens: `--color-gallery-white: #ffffff`, `--color-ink-black: #000000`, `--color-near-black: #090909`, `--color-rule-gray: #e9e9e9`, `--color-studio-gray: #f3f3f3`, `--color-inactive-gray: #aaaaaa`, `--color-butter-ticket: #faedbc`.
- Contrast pairing: light backgrounds pair with dark text; the butter-yellow surface pairs with black text.
- Light mode background must not be pure white; use `#fefefe` where a near-white is needed (note: gallery white `#ffffff` is reserved for the gallery canvas per spec; use `#fefefe` for any secondary near-white surface).
- Border radius & shadows: `--radius-sm: 0px`, `--radius-md: 0px`, `--radius-lg: 0px`, `--shadow-sm: none`, `--shadow-md: none`.
- Spacing & transitions: `--spacing-gap: 16px`, `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: ease`.
- Elevation/stacking: `--z-dropdown: 100`, `--z-modal: 1000`, `--z-toast: 2000`.

### 1.3 Mandatory Dark Mode Support
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Switch background/text variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit; provide a visible toggle with correct `aria-pressed`/`aria-label`.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box: convert rows to columns on small viewports; prevent horizontal scrolling.

### 1.5 Framework Default & Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 1.6 Typography & Icons (Google Fonts Mandatory)
- Use Google Fonts for text and icons. Include Google Font `<link>`/`@import` tags and bind to `--font-base`.
- Text: Helvetica Now substitute — use Google Font "Inter" (weights 400, 500) mapped to the brand's 470/520 weights; bind to `--font-helveticanowvar`. Actually use `Helvetica Neue, Arial, sans-serif` fallback per spec; load Inter from Google Fonts as the web substitute.
- Icons: Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 2. Component Design Specifications

### 2.1 Button Component
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`), min touch target 44x44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles via `--text-success`/`--text-error`.
- Per brand spec: buttons are transparent, 0px radius, no filled black/colored/gradient buttons for public navigation; use spacing, not fills, for hit areas.

### 2.2 Card Component
- Default: flexible flexbox layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight card borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and clear guidance text.
- Per brand spec: 0px radius, no rounded cards, no shadows.

### 2.3 Form & Input Requirements
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, and dedicated error feedback container.
- Search input per spec: `#f3f3f3` background, `#090909` text, 1px solid `#6b7280` border, padding `8px 12px 8px 16px`, radius 0px, 13px/520 HelveticaNowVar, line-height 24.05px.

### 2.4 Modal / Popup Requirements
- States: Opening, Open, Loading, Success/Error, Closing (animated via CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. Core UX & Micro-Interaction Rules
- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility (a11y): sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 4. Deliverables
- File structure: separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Naming convention: one consistent convention (BEM or fixed utility set) across the entire deliverable; never mix.
- No unrequested placeholders: real copy/labels where supplied; placeholders only where content genuinely unspecified.

## 5. Edit Mode
Not applicable — this is a from-scratch build.

## 6. Brand & Copy Rules (Mandatory)
- The style reference is based on a real brand. You must invent a fictional brand name, products, and copy. Never use the real brand name, logo, trademarks, or product names anywhere in the page.
- All user-facing copy must be in English.

## 7. Page Structure — Landing Page
Build a complete Landing Page with these sections:
1. Hero — full-bleed editorial image module on gallery white, location/campaign label above, discovery link beneath.
2. Features — 3 cards (0px radius, no shadow, studio gray image surfaces).
3. How It Works — 3 steps.
4. Testimonials.
5. Pricing — 3 tiers.
6. FAQ.
7. Final CTA.
8. Footer — Butter Ticket `#faedbc` band with secondary links, 32px group gaps, 40px list separation, no cards/elevation.

## 8. Brand-Specific Visual Rules (AXEL ARIGATO Style)
- Gallery White `#ffffff` as default canvas; Butter Ticket `#faedbc` reserved for footer and service bands (e.g., delivery announcement strip above header).
- Navigation, utility links, discovery labels: HelveticaNowVar 13px weight 520, 0px tracking.
- Controls transparent, 0px radius; spacing defines hit areas.
- 1px solid Rule Gray `#e9e9e9` for structural dividers and image-grid boundaries.
- Default internal/inter-control gap 16px; supporting increments 4, 8, 12, 20, 24, 32, 40px.
- Editorial images square-cornered, separated by 20px in multi-column campaign grids.
- 9999px radius restricted to floating chat launcher only.
- No rounded 4/8/12px cards; no filled black/colored/gradient buttons for public nav; no `#aaaaaa` body copy; no type larger than 13px for interface; no box shadows on headers/images/inputs/footer; no vivid accents besides butter ticket; no rounded image masks/soft overlays/gradients over photography.
- Floating chat launcher: gallery white surface, black monochrome chat icon, 9999px radius, no banner.

Output only the finished prompt. No preamble, no closing commentary.The generated prompt is above. It instructs the coding AI to build the requested landing page under all mandatory architectural, accessibility, theming, and component-state rules, while applying the AXEL ARIGATO visual style with a fictional brand and English copy.
