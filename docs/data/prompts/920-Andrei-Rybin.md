# Coding AI Prompt — Landing Page (Andrei Rybin Theme)

## 1. Objective
Build a complete, responsive landing page using the **Andrei Rybin** visual style: a monochrome atelier notebook aesthetic — near-pure black on white, where typography and project tiles carry all visual weight. The page must use a **fictional brand name, product, and copy**; never reference the real brand, logo, trademarks, or product names.

## 2. File Structure & Deliverables
- `index.html`, `style.css`, `script.js` — separate files, no inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM) across the entire deliverable.
- No lorem-ipsum-only submissions where real copy was supplied; placeholders allowed only where content was genuinely unspecified.

## 3. CSS-First Architecture & Zero Inline CSS
- All styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Class/ID selectors only. HTML must remain clean, semantic, and agnostic of visual styling.
- All visual tokens stored as CSS variables in `:root` and theme classes.

## 4. CSS Variables & Theme Tokens
Define in `:root` (light) and `.dark` / `@media (prefers-color-scheme: dark)` (dark):

**Colors:**
- `--color-paper: #ffffff` (page background, card surfaces — use `#fefefe` where near-white needed)
- `--color-ink: #000000` (primary text, links, icons, structural borders)
- `--color-graphite: #858585` (secondary text, muted metadata, soft borders)
- `--color-stone: #8e8e90` (cool-toned hairline borders/dividers)
- `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` mapped to the monochrome palette (success/error remain neutral — no chromatic color).

**Contrast Pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.

**Border Radius & Shadows:**
- `--radius-sm: 8px`, `--radius-md: 16px`, `--radius-lg: 40px`
- `--shadow-sm: none`, `--shadow-md: none` (flatness is the philosophy)

**Spacing & Transitions:**
- `--spacing-gap: 10px`, `--transition-fast: 0.15s ease`, `--transition-normal: 0.25s ease`, `--ease-standard: ease`
- Spacing scale: `--spacing-4: 4px`, `--spacing-6: 6px`, `--spacing-8: 8px`, `--spacing-10: 10px`, `--spacing-16: 16px`, `--spacing-28: 28px`, `--spacing-40: 40px`, `--spacing-120: 120px`

**Elevation/Stacking:**
- `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`

## 5. Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or `.dark` class.
- User theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Visible toggle control with correct `aria-pressed` / `aria-label` state.
- In dark mode, invert Paper/Ink roles: background becomes near-black, text becomes near-white, Graphite/Stone adjust for contrast. No chromatic colors introduced.

## 6. Typography & Icons (Google Fonts Mandatory)
- Text: Google Font **Inter** (weight 400 only) via `<link>` or `@import`, bound to `--font-base`. Substitute: `system-ui, -apple-system, 'Segoe UI', sans-serif`.
- Letter-spacing: `-0.0170em` on body/caption text; `-0.4px` on the 24px intro paragraph.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.
- Type scale:
  - Caption: 12px, line-height 1.2
  - Subheading: 24px, line-height 1.23, letter-spacing -0.4px
- Single weight (400) throughout — no bold, no light, no italic.

## 7. Flexbox Layout & Mobile-First
- All layout structures use Flexbox (`display: flex`).
- Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- Mobile-responsive: rows convert to columns on smaller viewports. No horizontal scrolling.

## 8. Framework
- Tailwind CSS (or clean custom CSS driven by Tailwind `@layer` / `@apply`) unless another framework requested. Utility classes map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 9. Component Specifications

### 9.1 Button
- Default: Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`), min touch target 44x44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success` / `--text-error` (neutral in this theme).

### 9.2 Card
- Default: Flexbox layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlights card borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and guidance text.

### 9.3 Form & Input
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, dedicated error feedback container.

### 9.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via `Esc` or overlay clicks.

## 10. Core UX & Micro-Interactions
- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.

## 11. Style-Specific Rules (Andrei Rybin)
- **Achromatic only:** Ink on Paper, Graphite and Stone for soft hierarchy. No accent, no brand hue, no semantic state color.
- **Single weight:** Inter 400 is the only voice. No bold, no light, no italic.
- **No shadows, gradients, or fills** on tiles or buttons; borders are the only separator.
- **No centering of body text** except tile captions naturally centered beneath cards.
- **Radii:** 8px cards, 16px icons, 40px (or 9999px) pills and circular buttons. No radius below 8px on cards or above 16px on icons.
- **No navigation patterns** (hamburgers, sidebars, mega-menus); header is a single text strip.
- **No asymmetric or overlapping tile placements** — grid is structural truth.
- **Whitespace carries rhythm** — no dividers between header columns.
- **Section gap:** 120px between page bands. **Element gap:** 10px inside cards. **Card padding:** 16px.
- **Page max-width:** 1440px. Full-bleed on white canvas.

## 12. Page Sections (Landing Page)
Build these sections in order:

1. **Hero:** Full-bleed white band. Large Inter 24px Graphite welcome paragraph (the single largest type), contact email link (Inter 12px Ink) on the left. Whitespace-driven layout.
2. **Features:** 3 cards in a row (responsive). Each card: white surface, 8px radius, 16px padding, pill label (40px radius, 1px Ink border), circular arrow button (32px, 1px Ink border), caption beneath (Inter 12px Graphite, centered).
3. **How It Works:** 3 steps. Numbered or labeled steps with Inter 12px Ink text, 10px element gap, 120px section gap from previous.
4. **Testimonials:** Quote cards or text blocks. Inter 12px Graphite for body, Ink for attribution. No borders beyond 1px rules.
5. **Pricing:** 3 tiers. Cards with pill labels, price in Inter 24px (single use exception? No — keep 12px for prices; use 24px only for intro paragraph). Actually: prices at Inter 12px Ink, tier name as pill label. 3-column responsive grid.
6. **FAQ:** Accordion or list. Inter 12px Ink questions, Graphite answers. 1px Stone borders between items.
7. **Final CTA:** Centered text block with a pill-shaped button (9999px radius, 1px Ink border, white fill).
8. **Footer:** Secondary links in a single text strip (Inter 12px Ink, letter-spacing -0.0170em), whitespace-separated, no dividers.

## 13. Component Instances (Style Reference)

- **Project Tile Card:** White paper surface, 8px radius, no border, 16px padding. Pill label top-left (40px radius, 1px Ink border, 6px vertical / 8px horizontal padding, Inter 12px Ink). 32px circular arrow button top-right (1px Ink border). Caption (Inter 12px Graphite) centered beneath with 8px gap.
- **Pill Label:** Fully rounded capsule (40px or 9999px radius), white paper, 1px Ink border, 6px top/bottom + 8px left/right padding. Inter 12px Ink, letter-spacing -0.0170em.
- **Arrow Navigation Button:** 32px circle, white fill, 1px Ink border, centered right-arrow icon (16px). No shadow, no fill state.
- **Header Bar:** Full-bleed white band, 16px padding. Four text columns (name+role, showreel link, social links, index+about). All Inter 12px Ink, letter-spacing -0.0170em. Whitespace only, no dividers.
- **Intro Block:** Two columns. Left: Inter 12px Ink email. Right: Inter 24px Graphite, line-height 1.23. 40px row gap.
- **Project Grid:** 5 columns at full width, 16px gutters. Portrait aspect slots (~3:5). No borders/shadows between tiles.
- **Caption Label:** Inter 12px Graphite, centered, 8px below card. Format 'X → Y' or short noun phrase.

## 14. Edit Mode (Not Applicable)
This is a from-scratch build. Standard rules apply.

## 15. Output Format
Output **only** the finished prompt itself — no preamble, no closing commentary. Mirror the structure above (numbered headers, bolded sub-rules) for internal consistency. All copy in English. All CSS variable names, class names, and file names in English/ASCII. Fictional brand name and product throughout.
