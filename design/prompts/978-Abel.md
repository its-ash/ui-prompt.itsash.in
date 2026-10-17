# Abel — Landing Page Build Prompt

## 1. Project Overview

Build a complete, production-ready landing page for a fictional fragrance brand (invent a fictional brand name, product names, and copy — never use the real brand name "Abel", its logo, trademarks, or product names). The visual style is an editorial fragrance lookbook: cream paper, near-black ink, whisper-light sans-serif headlines (weight 300), and a monospaced uppercase voice for all functional microcopy. Spacing is generous and sectional; full-bleed photographic plates alternate with white product surfaces. The single non-neutral chromatic note is a warm parchment cream used sparingly as tint/accent — never as bold fill. All color temperature comes from photography.

**Sections to include (in order):** Hero (full-bleed plate), Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 2. File Structure & Naming

- Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No inline CSS (`style="..."` forbidden). All styling in `style.css` via class/ID selectors only.
- No lorem-ipsum-only submissions where real copy is implied; invent realistic fictional copy for all sections.

## 3. CSS-First Architecture & Theme Tokens

Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:

**Colors:**
- `--color-ink-black: #030303`
- `--color-paper-white: #fefefe` (use #fefefe, not #ffffff, where near-white is needed)
- `--color-parchment-cream: #f6eada`
- `--color-ash-gray: #cccccc`
- `--color-stone-gray: #dad9d5`
- `--color-pencil-gray: #807e81`

Map these to the standard semantic tokens required by the system: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text, in every theme.

**Typography:**
- `--font-base` bound to Google Font "Inter" as fallback for Founders Grotesk (substitute). Load via Google Fonts `<link>`.
- `--font-mono` bound to Google Font "JetBrains Mono" as fallback for Founders Grotesk Mono. Load via Google Fonts `<link>`.
- `--font-founders-grotesk` and `--font-founders-grotesk-mono` custom properties referencing the above.

**Type scale tokens:**
- `--text-caption: 12px` (line-height 1.15, letter-spacing 0.36px)
- `--text-body: 15px` (line-height 1.45, letter-spacing 0.15px)
- `--text-body-lg: 18px` (line-height 1.35)
- `--text-subheading: 20px` (line-height 1.25)
- `--text-display: 28px` (line-height 0.92, letter-spacing -0.56px)
- `--text-heading: 32px` (line-height 1.2)

**Spacing & Shapes:**
- Base unit 4px. Spacious density.
- `--spacing-8: 8px`, `--spacing-12: 12px`, `--spacing-20: 20px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-40: 40px`, `--spacing-64: 64px`, `--spacing-80: 80px`, `--spacing-120: 120px`
- `--radius-sm: 0px`, `--radius-md: 0px`, `--radius-lg: 0px` (all corners sharp — zero border-radius on buttons, cards, images, inputs)
- `--shadow-sm: none`, `--shadow-md: none` (no shadows, no elevation — flat system)
- `--spacing-gap: 12px`, `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`

**Layout:**
- Page max-width 1440px. Section gap 72px. Card padding 40px. Element gap 12px.

## 4. Mandatory Dark Mode

Dark mode must always be defined. Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. In dark mode, invert the ink/paper relationship: dark background with light text, preserving the parchment cream as accent tint. Theme switching must be seamless without HTML restructuring. User theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Flexbox Layout & Mobile-First

- All layout structures use Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-first responsive: convert rows to columns on smaller viewports. Prevent horizontal scrolling.
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested. All utility classes map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 6. Typography & Icons

- Text: Google Fonts "Inter" (substitute for Founders Grotesk) and "JetBrains Mono" (substitute for Founders Grotesk Mono). Bind to `--font-base` and `--font-mono`.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 7. Component Specifications

### 7.1 Button
- Default: Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- Solid CTA: solid #030303 fill, #ffffff text. Mono 12–13px, weight 400, uppercase, letter-spacing 0.03em. 10px vertical × 40px horizontal padding. Zero border-radius. No hover fill change — invert to #ffffff with #030303 text and 1px border.
- Ghost link: inline Mono 12–13px, uppercase, letter-spacing 0.03em, #030303, 1px underline. No background, no border, no padding. 12px gap to surrounding elements.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles driven by `--text-success`/`--text-error`.

### 7.2 Card
- Default: flexible Flexbox layout, subtle borders and elevation using `--bg-secondary` and CSS variables. Zero border-radius.
- Hover: elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- Focus-within: highlights card borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS.
- Empty State: structured fallback with Google Icon and guidance text.

### 7.3 Form & Input
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.
- Text Input: transparent background, 1px bottom border in #030303, no side borders, no radius. Placeholder/input text in Founders Grotesk 300 or Mono 12–14px, #030303. 10–12px vertical padding. No focus ring — persistent bottom border is the only affordance.

### 7.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### 7.5 Announcement Bar
- Full-width white bar, 38–40px vertical padding. Center-aligned copy in Mono 12px, weight 400, uppercase, letter-spacing 0.03em, #030303. Close (×) icon right-aligned. No background fill — flush against white canvas, no border.

### 7.6 Site Header with Wordmark
- Transparent over imagery, white on solid sections. Wordmark centered in Founders Grotesk 500, 32px, #030303, letter-spacing 0.01em. Left: MENU in Mono 12px uppercase with hamburger icon, 12px gap. Right: search icon + CART label, Mono 12px uppercase, 20px gap between items. All vertically centered with 20px vertical padding.

### 7.7 Hero Full-Bleed Plate
- Edge-to-edge photography filling viewport, no border, no radius. Caption block anchored bottom-left with 40px left padding: section title in Mono 13–14px uppercase (e.g. 'INTRODUCING, MIAMI SPLIT'), supporting body in Founders Grotesk 300 at 15–16px, and an underlined Mono ghost link 12px. Text color #ffffff on dark imagery, #030303 on light imagery.

### 7.8 Product Detail Card
- White #ffffff canvas. Product name in Founders Grotesk 500, 20px, #030303, letter-spacing 0.02em, centered. Category line 'EAU DE PARFUM' in Mono 12px uppercase above it. Centered product image (transparent PNG, no background, no shadow). Below: scent note descriptor in Founders Grotesk 300, 15–16px, centered. CTA button beneath with 32px gap. No card border, no shadow.

### 7.9 Editorial Caption Block
- Left-aligned, max-width ~360px. Section eyebrow in Mono 13px uppercase, 11–12px below it body copy in Founders Grotesk 300 at 15–16px, line-height 1.45. #030303 on light backgrounds, #ffffff on dark imagery.

### 7.10 Footer
- White or Stone Gray #dad9d5 background. 38px top/bottom padding. Mono 12px uppercase labels for column headers. Mono 12px for links. No heavy dividers — grouping through generous whitespace and 40px column gap.

### 7.11 Navigation Drawer Trigger
- Icon + label pair in Mono 12px uppercase, 12px gap between icon and text. #030303. No background, no border. Tapping reveals full-screen overlay menu on white with large Mono link stack.

### 7.12 Section Label
- Founders Grotesk Mono 13–14px, weight 400, uppercase, letter-spacing 0.03em, #030303. Leading uppercase, 20px top margin from preceding section.

## 8. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing and responsive breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback: every click, hover, or submission triggers a visible state change.
- Destructive actions: generic `.btn-danger` visually distinct in both light and dark themes.

## 9. Do's and Don'ts (Style-Specific)

**Do:**
- Set every headline in Founders Grotesk weight 300 — the whisper-light cut is the brand's editorial signature.
- Use Founders Grotesk Mono 12–14px uppercase with +0.03em letter-spacing for all buttons, links, navigation, and section labels.
- Run the system on #030303 ink and #ffffff paper; introduce #f6eada Parchment Cream only as subtle surface tint or hairline accent, never as bold fill block.
- Give every section 72px vertical breathing room.
- Keep all corners sharp — zero border-radius.
- Alternate full-bleed photographic plates with white product surfaces for lookbook rhythm.
- Use the 28px compressed Mono display (line-height 0.92, letter-spacing -0.02em) for section-level mono headings.

**Don't:**
- Don't use elevation, drop shadows, or any depth effect — flat system.
- Don't introduce saturated chromatic colors into the UI palette.
- Don't use Founders Grotesk weight 700 or 800 for headlines.
- Don't set Mono text in sentence case; all functional monospaced copy is uppercase.
- Don't use icons larger than 16px in navigation or 20px in utility contexts.
- Don't fill buttons with color — buttons are either solid #030303 (primary) or ghost underlined Mono text (secondary).
- Don't add borders or backgrounds to product imagery.

## 10. Imagery & Layout Notes

- Full-bleed editorial photography is the visual engine. Use placeholder images (via `https://placehold.co` or similar) sized to fill sections. Image-to-text ratio roughly 70/30.
- Full-bleed layout with no max-width constraint on canvas; text blocks constrained to ~360–480px columns anchored bottom-left or centered.
- Section rhythm: 72px gaps; content within sections breathes through 20–40px internal padding.
- Navigation: minimal header bar (logo centered, menu left, cart right) over thin announcement bar — no sticky behavior, no mega-menu.
- PDP-style sections use centered single-column stack rather than two-column product layout.

## 11. Deliverable Checklist

- [ ] `index.html`, `style.css`, `script.js` as separate files.
- [ ] All tokens defined in `:root` and dark mode overrides.
- [ ] Theme toggle with localStorage persistence.
- [ ] All 8 sections present and styled.
- [ ] Zero inline CSS.
- [ ] BEM naming consistent.
- [ ] Google Fonts and Material Symbols loaded.
- [ ] All component states implemented (button, card, input, modal).
- [ ] Responsive, no horizontal scroll.
- [ ] Accessibility: semantic HTML, ARIA, keyboard operability, aria-live regions.
- [ ] Fictional brand name and copy — no real brand trademarks used.

## 12. Important Exception

The source spec describes a real brand's visual style. Reuse the style only: invent a fictional brand name, product, and copy. Never use the real brand name, logo, trademarks, or product names in the page. All user-facing copy must be in English.
