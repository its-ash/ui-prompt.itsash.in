# Coding AI Prompt — Build a Complete Landing Page in the "Adam Lippes" Editorial Atelier Style

## 1. Project Overview
Build a complete, responsive landing page for a **fictional brand** (invent a plausible fictional name, product, and copy — never use "Adam Lippes", its logo, trademarks, or product names). The visual language is a monochrome editorial atelier on cream paper: zero chromatic accents, zero decorative gradients, near-zero corner radii, hairline rules as the primary structural divider, and dense editorial typography. Photography provides all visual interest; UI chrome recedes.

## 2. File Structure & Naming
Deliver exactly three files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer></script>`). No inline CSS (`style="..."` forbidden). Use one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions. Semantic HTML5 elements throughout.

## 3. CSS-First Architecture & Theme Tokens
All styling lives in `style.css`. Define all tokens in `:root` (and theme classes) using CSS variables:

**Colors (light theme defaults):**
- `--color-bone-canvas: #fefcf8` (page background — warm off-white, never pure white)
- `--color-press-white: #fefefe` (card/input/overlay surfaces; use `#fefefe` not `#ffffff` where a near-white is needed)
- `--color-onyx-black: #000000` (primary text, hairlines, filled buttons, icons)
- `--color-graphite: #403f3e` (secondary text/icons)
- `--color-carbon: #121212` (deep alt-black)
- `--color-iron: #1d1d1d` (refined button borders)
- `--color-slate: #2f2f2f` (mid-emphasis labels)
- `--color-stone: #4c4c4a` (secondary body text, subtle borders)
- `--color-ash: #b2b0ae` (light neutral action fill on dark surfaces)

Map these to the standard token names required by the system: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Enforce contrast pairing: light backgrounds pair with dark text tokens, dark backgrounds pair with light text tokens, in every theme.

**Typography:** `--font-base` bound to a Google Font. Optima is not available on Google Fonts; use **Jost** (geometric sans, Futura-inspired) as the closest Google Fonts substitute, with fallback stack `Jost, "Avenir Next", "Futura PT", "ITC Avant Garde Gothic", sans-serif`. Include the Google Fonts `<link>` for Jost (weights 400) and Google Material Symbols. Bind `--font-base: 'Jost', sans-serif`. Do not use Arial as a primary face.

**Type scale tokens:** `--text-caption: 10px`, `--text-body: 14px`, `--text-heading: 24px` with corresponding line-heights (1.2–1.5) and letter-spacing (0.0310em body, 0.0640em uppercase nav/buttons).

**Spacing & shapes:** density compact. Spacing tokens `--spacing-5` through `--spacing-40` (5,6,8,9,10,12,13,14,15,16,17,20,24,30,32,40px). Border radius: `--radius-sm: 0px` (cards/buttons/dividers), `--radius-md: 0px`, `--radius-lg: 0px`; pills `1000px`, badges `40px`. Shadows: `--shadow-sm: rgba(0,0,0,0.05) 0px 4px 5px 0px`, `--shadow-md` (reuse lg value `rgba(0,0,0,0.15) 0px -8px 24px 0px`). Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`. Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`. Section gap 48px, card padding 16px, element gap 10px, page max-width 1440px.

**Zero chromatic accents:** no color, gradient, or accent hue anywhere. Monochrome only.

## 4. Mandatory Dark Mode
Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Background/text variables must switch seamlessly. Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label`. In dark mode, invert to a dark canvas with light text while preserving the monochrome editorial character (no chroma).

## 5. Layout & Flexbox Standards
Use Flexbox (`display: flex`) for all layout structures. Every flex container must default to `align-items: center` unless an explicitly justified exception. Mobile-first: convert rows to columns on small viewports, prevent horizontal scrolling. Fluid sizing and responsive breakpoints.

## 6. Typography & Icons
Use Google Fonts (Jost) for text and Google Material Symbols for all icons. Forbid raw inline SVGs or local icon files. Nav and button labels uppercase at 11–12px with letter-spacing 0.0640em.

## 7. Component Specifications

**Top Navigation Bar:** full-width, white (`--color-press-white`) background, 1px Onyx Black hairline bottom border, subtle `--shadow-sm`. Left: 5 uppercase nav links (Optima/Jost 11px, 400, 0.0640em tracking, Onyx Black). Center: fictional brand wordmark, uppercase, stacked two lines, 0.0640em tracking. Right: "SEARCH" label, account icon, cart icon with circular count badge (~16px, Onyx Black bg, white numeral). Height ~60px, fixed, z-index `--z-dropdown`. Mobile: collapse links into a hamburger (Material Symbol) with accessible drawer.

**Filled Action Button (Onyx):** solid Onyx Black bg, Press White text, Jost 12px uppercase, 0.0640em tracking, 400. Padding 12px 20px. Radius 0px. No shadow. Hover: invert to white bg / black border / black text. All states per Section 8.

**Ghost Button:** transparent/Bone Canvas bg, 1px Onyx Black border, Onyx Black text, same typography/padding/radius.

**Hero Overlay Text Block:** left third of a full-bleed editorial image. Heading Jost 24px, 400, Onyx Black, ~0.74px tracking. Subtext Jost 14px, Stone. Filled Onyx button CTA. Left-aligned, vertically centered. Use a placeholder image URL (e.g., `https://picsum.photos/seed/.../1440/720`) — no real brand imagery.

**Product/Feature Card:** white or transparent bg, no border, 0px radius. Image on white seamless bg. Below: name (Jost 14px, Onyx Black, lowercase) left-aligned, price/value right-aligned. Underneath: 8×8px color swatches with 1px Onyx Black border, 5px gap. Padding 16px. No hover lift — only subtle image zoom or text underline. Include skeleton loading state (shimmer CSS animation) and empty state (Material Icon + guidance text).

**Category Banner Card:** two-column/full-bleed cropped photo, text overlay left third. Heading Jost 24px Onyx Black. Subtext Jost 14px Stone. Filled Onyx button. No border/background — photo is the card.

**Circular Carousel Arrow:** 24×24px circle, Stone (`#b2b0ae`) fill, small black arrow icon centered. No border/shadow.

**Cart Count Badge:** small circular badge, Onyx Black bg, white numeral, ~16px diameter, top-right of cart icon.

**Color Swatch:** 8×8px square, no radius, 1px Onyx Black border. Horizontal row, 5px gaps. Active swatch gets heavier border or filled interior.

**Email Signup Bar:** full-width, Bone Canvas bg, 1px Onyx Black hairline top border. Single line copy Jost 12–14px Onyx Black left-aligned, "+" expand icon far right. Padding 16px vertical.

**Text Link:** Jost 16px Onyx Black, no underline default, underline on hover. Lowercase.

**Promo Hairline Rule:** 1px Onyx Black horizontal line — primary structural divider.

## 8. Button Component States (all via CSS classes)
Default: flex layout (`display:flex; align-items:center; justify-content:center; gap:0.5rem`), min touch target 44×44px.
Hover: visual shift (brightness/shadow) + `cursor:pointer`.
Focus: distinct focus ring via CSS variables (`outline`/`box-shadow`) for keyboard nav.
Active/Pressed: `transform: scale(0.97)`.
Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Material Icon without distorting dimensions.
Disabled: `opacity:0.5`, greyscale, `cursor:not-allowed`.
Success/Error: temporary feedback styles driven by `--text-success`/`--text-error`.

## 9. Card Component States (where interactive)
Default: flex layout, subtle borders/elevation via `--bg-secondary` and CSS vars.
Hover: elevation/shadow shift or `transform: translateY(-2px)`.
Focus-within: highlight card borders when child link/button receives focus.
Loading (Skeleton): shimmer animation in CSS, no layout jumps.
Empty State: structured fallback with Material Icon + clear guidance text.

## 10. Form & Input Requirements
States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: flex container wrapping label, input field, dedicated error feedback container. Use `aria-live` for dynamic feedback.

## 11. Modal/Popup Requirements
States: Opening, Open, Loading, Success/Error, Closing (all CSS-transition animated). Centered flex container (`align-items:center`), backdrop overlay, Material Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 12. Core UX & Micro-Interactions (global)
Responsive by default, fluid sizing, no horizontal overflow. CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`. Accessibility: sufficient contrast in both light and dark; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels on custom widgets; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback. Mandatory visual feedback on every click/hover/submission. Destructive actions (`.btn-danger`) visually distinct in both themes.

## 13. Landing Page Sections (in order)
1. **Hero** — full-bleed editorial image with left-third overlay text block + filled CTA.
2. **Features** — 3 cards in a responsive grid (5-col on desktop scaling down), each with image, name, short copy, swatches.
3. **How It Works** — 3 steps with numbered markers (hairline rules, no chroma), icon + title + description, flex row → column on mobile.
4. **Testimonials** — 2–3 quote blocks with hairline rules, attribution, no avatars with color.
5. **Pricing** — 3 tiers as cards with hairline borders, feature lists, filled/ghost CTA per tier, highlighted tier via border weight (not color).
6. **FAQ** — accordion using `<details>`/`<summary>` or accessible custom widget, hairline dividers, keyboard operable.
7. **Final CTA** — full-width strip with heading + filled button.
8. **Footer** — secondary links, email signup bar, hairline top border, monochrome.

All copy must be invented (fictional brand/product), in English. No lorem-ipsum-only where real copy is implied; placeholders allowed only where genuinely unspecified. No real brand names/trademarks.

## 14. Deliverables Recap
- `index.html`, `style.css`, `script.js` only.
- BEM naming, consistent.
- Dark mode with localStorage persistence + toggle.
- All component states implemented.
- Mobile-first, no horizontal scroll.
- Google Fonts (Jost) + Material Symbols only.

Output only the three files' content as the coding AI would produce them. No preamble. No inline CSS. No inline SVGs. No chromatic accents. Sharp corners (0px) except badges (40px) and pill (1000px). Hairlines as primary dividers. Cream canvas `#fefcf8` as page background.
