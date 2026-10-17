# UI Build Prompt — ALIGNE-Themed Landing Page

## 1. Project Overview

Build a complete, responsive landing page using the ALIGNE editorial style system. The page must include: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, and Footer with secondary links. Invent a fictional brand name, product, and copy — never use "ALIGNE" or any real brand name, logo, trademark, or product name. All user-facing copy must be in English.

## 2. CSS-First Architecture & Zero Inline CSS

- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class/ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

## 3. CSS Variables & Theme Tokens

Store all visual tokens in `:root` (and theme classes) using CSS variables:

**Colors:**
- `--color-warm-charcoal: #24170f` (primary action background, high-prominence borders, dark surface bands, nav/footer text on light)
- `--color-soft-black: #151515` (body text, headings, general borders, link text)
- `--color-pure-white: #ffffff` (page canvas, card surfaces, text on dark bands)
- `--color-ash-gray: #ececec` (secondary surface for alternating sections)
- `--color-signal-blue: #0073ff` (accent for badge borders/text only)

Map to standard tokens: `--primary: var(--color-warm-charcoal)`, `--secondary: var(--color-ash-gray)`, `--bg-primary: var(--color-pure-white)`, `--bg-secondary: var(--color-ash-gray)`, `--text-primary: var(--color-soft-black)`, `--text-secondary: var(--color-warm-charcoal)`, `--text-success`, `--text-error`, `--border-default: var(--color-warm-charcoal)`, `--border-error`, `--border-success`.

**Contrast pairing:** Light backgrounds pair with dark text; dark backgrounds (`--color-warm-charcoal`) pair with light text (`--color-pure-white`).

**Light mode background:** Use `#fefefe` where a near-white canvas is needed instead of pure `#ffffff` for the page canvas token; keep `#ffffff` for card surfaces and dark-band text per spec.

**Border radius & shadows:**
- `--radius-sm: 0px`, `--radius-md: 0px`, `--radius-lg: 0px`
- `--shadow-sm: none`, `--shadow-md: rgba(0,0,0,0.15) 0px 2px 10px 0px`

**Spacing & transitions:**
- `--spacing-gap: 20px`
- `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-12: 12px`, `--spacing-16: 16px`, `--spacing-20: 20px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-36: 36px`, `--spacing-40: 40px`, `--spacing-56: 56px`, `--spacing-60: 60px`, `--spacing-80: 80px`, `--spacing-100: 100px`
- `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: ease`
- `--z-dropdown: 100`, `--z-modal: 1000`, `--z-toast: 1100`

**Typography tokens:**
- `--font-base: 'JetBrains Mono', 'IBM Plex Mono', 'Space Mono', monospace` (substitute for GT America Mono)
- `--font-display: 'Bebas Neue', 'Oswald', 'Barlow Condensed', sans-serif` (substitute for Nimbus Sans Extended)
- `--text-caption: 10px` (line-height 1.6, letter-spacing 0.93px)
- `--text-body: 14px` (line-height 1.7, letter-spacing 0.88px)
- `--text-heading-sm: 24px` (line-height 1.28, letter-spacing 0.24px)
- `--text-heading: 40px` (line-height 1.13, letter-spacing 4px)
- `--text-display: 60px` (line-height 1.07, letter-spacing 7.98px)

## 4. Mandatory Dark Mode

- Define dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- In dark mode: swap `--bg-primary` to `#24170f`, `--text-primary` to `#ffffff`, `--border-default` to `#ffffff`. Keep `--color-signal-blue` unchanged.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed` and `aria-label` state.

## 5. Flexbox Layout & Mobile-First

- All flex containers must default to `align-items: center` unless explicitly justified.
- Convert rows to columns on smaller viewports. Prevent horizontal scrolling.
- Page max-width: 1200px. Section gap: 64px. Card padding: 20px. Element gap: 20px.

## 6. Framework

Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons

- Include Google Font `<link>` tags for JetBrains Mono (or IBM Plex Mono) and Bebas Neue (or Oswald). Bind to `--font-base` and `--font-display`.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 8. Component Specifications

### 8.1 Buttons
- **Primary CTA:** Filled, `#24170f` background, `#ffffff` text, 0px radius, padding 17px 40px, GT America Mono 12px weight 500, letter-spacing 0.067em, uppercase, no shadow. Flex layout with `align-items: center`, min touch target 44x44px.
- **Ghost Outline:** Transparent background, 1px `#ffffff` border, `#ffffff` text, 0px radius, padding 17px 40px, same typography. Used on dark imagery.
- **States:** Hover (brightness/shadow shift, `cursor: pointer`), Focus (distinct focus ring via CSS variables), Active (`transform: scale(0.97)`), Loading (disabled, CSS spinner, no dimension distortion), Disabled (`opacity: 0.5`, greyscale, `cursor: not-allowed`), Success/Error (temporary feedback via `--text-success`/`--text-error`).

### 8.2 Cards
- **Product Card:** Full-bleed editorial photograph (0px radius, no border), product name in monospace 12px weight 500 `#151515`, inline 'NEW IN' badge (1px `#0073ff` border, `#0073ff` text, 0px radius, 5px 10px padding, 10px weight 500, letter-spacing 0.093em uppercase), price in monospace 12px weight 400 `#151515`. Small '+' icon in bottom-right of image. No card chrome.
- **Feature Card:** Image + title + description. Sharp edges, no shadow, no border-radius.
- **States:** Hover (elevation/shadow shift or `translateY(-2px)`), Focus-within (border highlight), Loading (shimmer skeleton), Empty (Google Icon + guidance text).

### 8.3 Forms & Inputs
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input, and error feedback container.

### 8.4 Modal/Popup
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### 8.5 Top Navigation Bar
- Transparent over hero. Logo mark far left. Nav links (SHOP, DISCOVER, currency selector, LOGIN, CART with count) far right. All text monospace 11px weight 500, letter-spacing 0.071em uppercase. `#ffffff` on dark hero / `#151515` on light sections.

### 8.6 Section Header
- Two-tier: small uppercase eyebrow (monospace 10px, letter-spacing 0.093em, `#151515`) above large extended heading (display font 40px weight 700, letter-spacing 4px, `#151515`). Centered or left-aligned.

### 8.7 Hero Image Section
- Full-bleed editorial photograph spanning viewport width. Centered text overlay: headline in display font 60px weight 700, letter-spacing 8px, `#ffffff`, uppercase. Ghost outline button below. No gradients, no overlays.

### 8.8 Category Split Banner
- Dark (`#24170f`) background. Two large images side by side. Small white silhouette product icon centered on each image.

### 8.9 Instagram Grid Card
- Full-bleed square/portrait image, 0px radius. Instagram icon (`#ffffff`, ~20px) overlaid bottom-left. No text, no border.

### 8.10 Footer Link Column
- Three-column layout (EXPLORE, CUSTOMER CARE, FOLLOW). Column title in display font 16px weight 700, letter-spacing 1.6px, `#151515`, uppercase. Links in monospace 12px weight 400, `#151515`, stacked with 8px row gap.

### 8.11 Quick-Add Plus Icon
- Small '+' glyph in bottom-right of product image, `#151515`, ~16px. No background, no border.

### 8.12 New In Badge
- 1px `#0073ff` border, `#0073ff` text, 0px radius, padding ~5px 10px, monospace 10px weight 500, letter-spacing 0.093em uppercase. Sits inline with product name.

## 9. Core UX & Micro-Interactions

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.

## 10. Do's and Don'ts (Enforce Strictly)

**Do:**
- 0px border-radius on all components.
- Display font with letter-spacing ≥4px for headings at 40px+.
- Monospace for all body, nav, button, badge, price text.
- `#24170f` filled primary action, `#ffffff` text on it.
- Reserve `#0073ff` exclusively for 'NEW IN' badge borders/text.
- Let photography bleed full-width, 0px radius, no borders/shadows.
- Uppercase for all UI text.

**Don't:**
- No border-radius > 0px.
- No sans-serif body font.
- No button colors other than `#24170f` (filled) or transparent with white border (ghost).
- No tracking below 0.01em on monospace body text.
- No `#0073ff` for anything larger than a badge.
- No card shadows, floating panels, or elevated modals.
- No illustrations, icons beyond tiny monochrome silhouettes, or decorative graphics.

## 11. Imagery

Full-bleed editorial photography is dominant. Images span edge-to-edge, 0px radius. High-contrast, natural-light, urban settings. No lifestyle staging, no props, no text overlays on product images. Only non-photographic elements: tiny white product silhouette icons on dark banners. ~70% of viewport is photograph.

## 12. Deliverables

- Separate `index.html`, `style.css`, `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable.
- No lorem-ipsum-only submissions where real copy/labels were supplied; placeholders allowed only where content was genuinely unspecified.
- All copy in English.

## 13. Section Requirements

Build these sections in order:
1. **Hero:** Full-bleed editorial photograph, centered headline (display font 60px, letter-spacing 8px, white, uppercase), ghost outline button below.
2. **Features:** 3 cards with image, title, description. Sharp edges, no shadow.
3. **How It Works:** 3 steps with number, title, description. Monospace labels.
4. **Testimonials:** Quote cards with author name and role. Flat, no shadow.
5. **Pricing:** 3 tiers with feature lists and CTA buttons. Middle tier highlighted with warm charcoal border.
6. **FAQ:** Accordion-style questions. Expand/collapse via CSS transitions.
7. **Final CTA:** Dark (`#24170f`) band with headline and primary CTA button.
8. **Footer:** Three-column link layout (EXPLORE, CUSTOMER CARE, FOLLOW) plus copyright. White background.
