# UI/UX Coding Prompt — Peppermint Landing Page

## 1. Project Overview & Architecture Rules

Build a complete, production-ready landing page using the **Peppermint** visual theme. The page must be a from-scratch build with separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference.

**Mandatory Architecture Rules:**
- **CSS-First & Zero Inline CSS:** All styling lives in `style.css`. Never use `style="..."` attributes in HTML. Target all design via class/ID selectors. HTML must be clean, semantic, and agnostic of visual styling.
- **CSS Variables:** Store all visual tokens in `:root` (and theme classes) using the exact variable names defined in Section 2. Light backgrounds must pair with dark text tokens and dark backgrounds with light text tokens.
- **Dark Mode:** Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class. Theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** Use Flexbox for all layouts. Every flex container must default to `align-items: center` unless a justified exception exists. Convert rows to columns on small viewports. Prevent horizontal scrolling.
- **Framework:** Use Tailwind CSS or clean custom CSS driven by Tailwind's `@layer`/`@apply` directives. All utility classes must map to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Use Google Fonts for text and Google Material Symbols/Icons for icons. Forbid raw inline SVGs or local icon files. Bind fonts to `--font-base`.
- **Naming Convention:** Enforce BEM consistently across the entire deliverable. Never mix conventions.
- **No Placeholders:** Do not use lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content was genuinely unspecified.

**Fictional Brand Requirement:** This spec describes the visual style of a real brand. Invent a fictional brand name, product, and copy. Never use the real brand name, logo, trademarks, or product names anywhere in the page.

## 2. Design Tokens (CSS Variables)

Define all tokens in `:root`:

**Colors:**
- `--color-midnight-sapphire: #0a1d4b`
- `--color-bright-violet: #9c8bf9`
- `--color-deep-indigo: #162d67`
- `--color-slate-violet: #3a486b`
- `--color-warm-cream: #fcf6ea`
- `--color-sand: #faedd2`
- `--color-graphite: #474b60`
- `--color-khaki: #b4ad98`
- `--color-pure-white: #ffffff`
- `--color-coral-pink: #ffb8d9`
- `--color-mint-wave: #68dacb`
- `--color-ice-blue: #bcdff0`
- `--color-pale-mint: #a1e8df`
- `--color-blush: #ffe9f4`

**Standard tokens:**
- `--primary: var(--color-midnight-sapphire)`
- `--secondary: var(--color-bright-violet)`
- `--bg-primary: var(--color-midnight-sapphire)`
- `--bg-secondary: var(--color-deep-indigo)`
- `--text-primary: var(--color-pure-white)`
- `--text-secondary: var(--color-slate-violet)`
- `--text-success: var(--color-mint-wave)`
- `--text-error: var(--color-coral-pink)`
- `--border-default: var(--color-graphite)`
- `--border-error: var(--color-coral-pink)`
- `--border-success: var(--color-mint-wave)`
- `--radius-sm: 16px`
- `--radius-md: 24px`
- `--radius-lg: 48px`
- `--shadow-sm: none`
- `--shadow-md: none`
- `--spacing-gap: 16px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown: 100`
- `--z-modal: 200`
- `--z-toast: 300`

**Fonts:**
- `--font-excon` (Google Font substitute: Space Grotesk or Archivo) — display/heading
- `--font-generalsans` (Google Font substitute: Inter or DM Sans) — body/UI
- `--font-base: var(--font-generalsans)`

**Type scale:**
- `--text-caption: 14px` (line-height 1.43)
- `--text-body-sm: 16px` (line-height 1.5)
- `--text-body: 18px` (line-height 1.43)
- `--text-subheading: 24px` (line-height 1.22, letter-spacing -1.32px)
- `--text-heading: 48px` (line-height 1.09, letter-spacing -2.21px)
- `--text-heading-lg: 90px` (line-height 0.92, letter-spacing -3.96px)
- `--text-display: 128px` (line-height 0.87, letter-spacing -5.12px)

**Spacing:** Use the normalized spacing scale (`--spacing-10` through `--spacing-120`) as defined. Page max-width 1200px. Section gap 40px. Card padding 24px. Element gap 16px.

**Contrast Pairing Rule:** Light backgrounds (`--color-warm-cream`, `--color-sand`, `--color-blush`) must pair with dark text (`--color-midnight-sapphire`). Dark backgrounds (`--color-midnight-sapphire`, `--color-deep-indigo`) must pair with light text (`--color-pure-white`).

**Light Mode Background:** Use `#fefefe` instead of `#ffffff` where a near-white is needed.

**No Shadows:** The design intentionally avoids drop shadows. Differentiate surfaces through color stepping and contrast alone.

## 3. Page Structure & Sections

Build the following sections in order:

### 3.1 Hero Section
- Full-bleed dark band (`#0a1d4b` background).
- Centered Excon display heading at 90–128px, weight 700, white, letter-spacing -3.96px to -5.12px, line-height 0.87–0.92.
- Subtext in Generalsans 18px, weight 400, white.
- Pill CTA button (Light on Dark variant) centered below.
- Large hand-drawn illustration bleeding from edges with ribbon strokes (Coral Pink, Mint Wave, Ice Blue, Pale Mint).
- Centered logo (monogram icon + wordmark in Generalsans weight 500, white) at the top. No visible nav bar or menu.

### 3.2 Features Section (3 Cards)
- Dark navy band continuing from hero.
- Section heading: Excon 90px, white, letter-spacing -3.96px, line-height 0.92. May include decorative underline in Coral Pink or Mint Wave.
- 3-column card grid (mobile: single column) with 16–20px gaps.
- Each Feature Card: 24px border-radius, solid color background (Warm Cream, Deep Indigo, Mint Wave, or Blush), 24px padding. Centered flat illustration filling ~60% of card. Optional small label in Generalsans 14px. No shadow, no border.

### 3.3 How It Works Section (3 Steps)
- Warm cream band (`#fcf6ea` or `#faedd2` background).
- Section heading: Excon 90px, Midnight Sapphire, letter-spacing -3.96px.
- 3-step layout (mobile: stacked) with step numbers, titles (Excon 24px+), and descriptions (Generalsans 18px).
- Use color stepping for step differentiation.

### 3.4 Testimonials Section
- Dark navy band.
- Section heading: Excon 90px, white.
- Testimonial cards: 24px border-radius, Deep Indigo (`#162d67`) background, white text, Generalsans 16–18px. No shadow.

### 3.5 Pricing Section (3 Tiers)
- Warm cream band.
- Section heading: Excon 90px, Midnight Sapphire.
- 3 pricing cards: 24px border-radius, solid backgrounds. Highlighted tier uses Deep Indigo or Bright Violet accent. Pill CTA buttons (Dark on Light variant) on each card.

### 3.6 FAQ Section
- Sand (`#faedd2`) background band.
- Section heading: Excon 90px, Midnight Sapphire.
- Single-column list of FAQ accordion items.
- **Closed state:** 16px border-radius, Warm Cream (`#fcf6ea`) background, 20px 28px padding. Question in Generalsans 16px weight 500, Midnight Sapphire. Plus icon (+) on right in Midnight Sapphire. 1px hairline border or none.
- **Open state:** Background shifts to Sand (`#faedd2`). Answer body in Generalsans 16px weight 400, Midnight Sapphire, line-height 1.5. Minus icon (−) replaces plus. Color shift is the state indicator.

### 3.7 Final CTA Section
- Dark navy band.
- Centered Excon heading (90px, white) with subtext.
- Pill CTA button (Light on Dark variant) centered.

### 3.8 Footer
- Dark navy band.
- Centered logo + secondary links in Generalsans 14–16px, white or Slate Violet.
- No visible nav bar — just logo and links.

## 4. Component Specifications

### 4.1 Button Component
- **Default:** Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`). Minimum touch target 44x44px.
- **Hover:** Visual shift (brightness/shadow) with `cursor: pointer`.
- **Focus:** Distinct focus ring using CSS variables.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Disables interactions, renders CSS spinner or animated Google Icon without distorting dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback styles driven by `--text-success` or `--text-error`.
- **Pill CTA (Light on Dark):** 48px border-radius, Warm Cream fill, Midnight Sapphire text, Generalsans 16px weight 500, padding 16px 28px. No shadow.
- **Pill CTA (Dark on Light):** 48px border-radius, Midnight Sapphire fill, white text, Generalsans 16px weight 500, padding 16px 28px.

### 4.2 Card Component
- **Default:** Flexible Flexbox layout, subtle borders and elevation via `--bg-secondary` and CSS variables.
- **Hover:** Elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- **Focus-within:** Highlights card borders when child link/button receives focus.
- **Loading (Skeleton):** Shimmer animation in CSS to prevent layout jumps.
- **Empty State:** Structured fallback with Google Icon and guidance text.

### 4.3 Form & Input (if applicable)
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, and dedicated error feedback container.

### 4.4 Modal / Popup (if applicable)
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay clicks.

## 5. Core UX & Micro-Interaction Rules

- **Responsive by Default:** Fluid sizing and responsive breakpoints without horizontal overflow.
- **Smooth Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- **Accessibility:** Sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- **Mandatory Visual Feedback:** Every user click, hover, or submission triggers a visible state change.
- **Destructive Actions:** Visually distinct in both light and dark themes.

## 6. Decorative Elements

- **Decorative Ribbon Stroke:** 2-3px stroke width, hand-drawn curve in Coral Pink, Mint Wave, Ice Blue, or Pale Mint. No fill, pure stroke. Used as background atmosphere in hero and feature sections.
- **Subtle Star/Sparkle Motif:** 4-pointed star shape in white or Mint Wave, 8–12px size. Scattered sparingly around illustrations and headings.
- **Hero Illustration:** Full-color flat illustration with hand-drawn character, 2-4 flowing ribbon strokes. No gradients, no shadows — flat color fills with clean outlines.
- **Feature Card Illustration:** Flat color illustration of an object or character sized to fill ~60% of the card. Solid color fills in the card's accent palette.

## 7. Do's and Don'ts

**Do:**
- Use Excon for all display headings at 48px+ with letter-spacing between -2px and -5px.
- Use Midnight Sapphire as the primary canvas color for dark sections.
- Use 48px border-radius for interactive buttons and 100px for full pills.
- Alternate between dark navy bands and warm cream bands for section rhythm.
- Use Generalsans at 16-18px for all body and UI text — never Excon below 24px.
- Differentiate surfaces through color stepping rather than shadows or borders.
- Use flat hand-drawn illustrations with flowing ribbon strokes as the primary visual element.

**Don't:**
- Do not use drop shadows for elevation.
- Do not use Excon below 24px.
- Do not use photography or 3D renders.
- Do not mix rounded and sharp corners.
- Do not use Bright Violet as a large surface — it is a rare accent.
- Do not add gradients.
- Do not use a visible navigation bar or menu.

## 8. Deliverables

- Separate `index.html`, `style.css`, and `script.js` files.
- BEM naming convention throughout.
- No inline `<script>` beyond a single deferred entry-point reference.
- All copy must be in English (invent fictional brand name, product, and copy — never use the real brand name, logo, trademarks, or product names).
