# Coding-AI Prompt: Aaron Poe & Co Landing Page

## 1. Project Overview & Style Reuse
Build a complete, responsive landing page for a **fictional brand** (invent a fictional name, product, and copy — do not use "Aaron Poe & Co", its logo, trademarks, or product names anywhere in the output). Reuse only the visual style system described below. All user-facing copy must be in English.

## 2. File Structure & Architecture
- Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Zero inline CSS (`style="..."` forbidden). All styling lives in `style.css` via class/ID selectors.
- Use Tailwind CSS utilities mapped to CSS variables, or clean custom CSS driven by Tailwind `@layer`/`@apply`. All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).
- Enforce one consistent class-naming convention (BEM) across the entire deliverable.
- No lorem-ipsum-only submissions; invent real, meaningful copy for all sections.

## 3. CSS Variables & Theme Tokens (`:root`)
Define all tokens in `:root`:

**Colors:**
- `--color-coral-rose: #ea587d;`
- `--color-pure-white: #fefefe;` (use `#fefefe` instead of `#ffffff` for white/near-white backgrounds)
- `--color-cloud: #f2f2f2;`
- `--color-bone: #d9d8d4;`
- `--color-char: #282828;`
- `--color-ink: #121212;`
- `--color-black: #000000;`
- `--color-fog: #b3b3b3;`
- `--color-mist: #cccccc;`

**Typography:**
- `--font-base: 'Geist', Inter, Satoshi, General Sans, sans-serif;`
- `--font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`
- `--font-display: 'Geist', Inter, sans-serif;`
- `--text-caption-sm: 10px; --text-body: 16px; --text-subheading: 18px; --text-heading: 30px;`

**Spacing & Shapes:**
- `--radius-sm: 4px; --radius-md: 4px; --radius-lg: 24px;`
- `--shadow-subtle: rgb(242, 242, 242) 0px 0px 0px 1px inset;`
- `--spacing-gap: 16px; --section-gap: 120px; --card-padding: 24px;`
- `--page-max-width: 720px;`
- `--transition-fast: 150ms ease; --transition-normal: 250ms ease; --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);`
- `--z-dropdown: 100; --z-modal: 200; --z-toast: 300;`

**Contrast Pairing:** Every light background token must pair with a dark text token and vice versa. Enforce for every theme.

## 4. Mandatory Dark Mode
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- In dark mode, invert the canvas to `#121212` (Inverted surface) and text to `#fefefe`; coral accent remains `#ea587d`.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Typography & Icons
- Load Google Fonts: Geist (weights 300, 400, 500) via `<link>` or `@import`. Bind to `--font-base`.
- Use Google Material Symbols/Icons for any icons. Forbid raw inline SVGs or local icon files.
- Apply OpenType features `"ss02", "lnum"` on Geist.
- Negative letter-spacing at all sizes: `-0.056em` at 8px, `-0.037em` at 10px, `-0.025em` at 16px, `-0.011em` at 18px, `-0.033em` at 30px.
- Line heights: 1.00 (micro), 1.17 (caption), 1.38 (body), 2.67 (subheading/bio), 1.07 (heading).

## 6. Layout & Flexbox Rules
- All layout structures use Flexbox (`display: flex`). Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first responsive: convert rows to columns on small viewports. Prevent horizontal scrolling.
- Page max-width 720px, centered, with 120px section gaps.
- ~80% whitespace; sections separated by 100–120px with no visible dividers.

## 7. Component Specifications

**Wordmark Logo:** Bold text-only mark in `#000000` or `#282828`, 18–20px, tight tracking, flush-left with generous left margin. No icon.

**Pill Navigation Bar:** Floating horizontal pill, centered at top. Background `#f2f2f2`, border-radius 24px, padding 8px, height ~40px. Three nav items spaced ~16px. No shadow. Items: Geist 12px weight 400, `#282828`, letter-spacing -0.4px.

**Nav Item Default:** No background, no border, padding 8px 16px.

**Nav Item Active:** Prefixed with 6px coral pink dot (`#ea587d`), 8px left of text, 2px gap. No bold change, no background shift, no underline.

**Ghost Button (Start a Project):** Text-only in pill nav, 12–14px weight 400, `#282828`. No fill/border default. Hover: `#f2f2f2` background or 1px `#282828` border.

**Bio Text Block:** Centered, max-width 520–640px, Geist 16–18px weight 400, `#282828`, line-height 1.38–1.5 (or 2.67 for generous rhythm). Two paragraphs, one blank line between. No decoration.

**Section Heading with Coral Border:** Text in `#ea587d`, Geist 24–30px weight 300–500, letter-spacing -0.99px, line-height 1.07. Optional 1px solid `#ea587d` border-bottom, 24px below text.

**Hairline Card:** White surface `#fefefe`, 1px solid `#e5e5e5` or `#cccccc`, border-radius 4px, padding 24px. No drop shadow. Optional inset shadow `rgb(242,242,242) 0px 0px 0px 1px inset`.

**Project Tile:** Larger card variant, border-radius 4px, 1px border, padding 32–48px. Project title Geist 16px weight 500 `#121212`, description Geist 14px weight 400 `#282828`, coral-pink category label.

**Inset Border Divider:** 1px inset shadow using `#f2f2f2`.

## 8. Component State Requirements

**Buttons (all states via CSS classes):**
- Default: flex, align-items center, justify-content center, gap 0.5rem, min 44x44px touch target.
- Hover: brightness/shadow shift, cursor pointer.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: transform scale(0.97).
- Loading: disables interactions, CSS spinner or animated Google Icon, no dimension distortion.
- Disabled: opacity 0.5, greyscale, cursor not-allowed.
- Success/Error: temporary styles via `--text-success`/`--text-error`.

**Cards (if interactive):**
- Default: flex layout, subtle borders, elevation via `--bg-secondary`.
- Hover: shadow shift or translateY(-2px).
- Focus-within: highlight borders.
- Loading (Skeleton): shimmer animation in CSS.
- Empty State: Google Icon + guidance text.

**Forms/Inputs:**
- States: Empty, Focused (outline ring), Filled, Valid, Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, error feedback container.

**Modals (if used):**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- UX: centered flex container, backdrop overlay, Google Icon close button, Esc/overlay close, focus trapping.

## 9. Core UX & Micro-Interactions
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No drop shadows on cards, buttons, or nav — flat system. No `#ea587d` as button fill. No positive letter-spacing. No new chromatic colors. No dark mode as default.

## 10. Landing Page Sections
Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

- **Hero:** Wordmark logo top-left, pill nav floating centered, centered bio text block ~200px from top, vast whitespace.
- **Features:** 3 Hairline Cards in a responsive flex row (stack on mobile).
- **How It Works:** 3 steps with numbered coral-pink labels and tight tracking.
- **Testimonials:** Centered quote text in Geist, hairline card containers.
- **Pricing:** 3 tiers as Hairline Cards, coral-pink accent on recommended tier border.
- **FAQ:** Expandable items using semantic details/summary, hairline borders.
- **Final CTA:** Centered heading in coral pink, ghost button.
- **Footer:** Secondary links, wordmark, minimal.

## 11. Deliverable Notes
- Invent a fictional brand name, product, and all copy. Never reference "Aaron Poe & Co".
- All copy in English.
- CSS variable names, class names, file names in English/ASCII.
- No unrequested placeholders where real copy is supplied.

## 12. Edit Mode (if modifying existing markup)
If targeting existing markup: no new HTML tags/components/DOM nodes; CSS classes only for existing elements; no JS for validation/popups/utilities (ask user instead); clarify before assuming if markup changes needed.
