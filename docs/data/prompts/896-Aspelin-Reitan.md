# Generated Coding-AI Prompt: Aspelin Reitan–Inspired Landing Page

## 1. Project Overview & Brand Fictionalization

Build a complete, production-ready landing page inspired by the "Aspelin Reitan" visual style reference. **Do not use the real brand name, logo, trademarks, or product names anywhere in the page.** Invent a fictional brand name, product, and all copy. All user-facing copy must be in English. The page must contain these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 2. Strict Architectural Rules

### 2.1 CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class or ID selectors only.
- Keep HTML semantic, clean, and agnostic of visual styling.

### 2.2 CSS Variables & Theme Tokens
Store all visual tokens inside `:root` and theme classes. Required tokens:

**Colors (Light Mode):**
- `--color-warm-parchment: #ffebd0` (primary canvas)
- `--color-candlelight: #fff8e9` (elevated surfaces)
- `--color-obsidian: #000000` (borders, text on cream)
- `--color-walnut-shell: #2f2116` (dark sections, footer)
- `--color-aged-bronze: #4f3622` (secondary dark surface)
- `--color-amber-glow: #fee197` (active accents, navigation active state)
- `--color-muted-gold: #987f61` (link borders on dark)

**Mapped standard tokens:**
- `--primary: var(--color-warm-parchment)`
- `--secondary: var(--color-walnut-shell)`
- `--bg-primary: var(--color-warm-parchment)`
- `--bg-secondary: var(--color-candlelight)`
- `--text-primary: var(--color-obsidian)`
- `--text-secondary: var(--color-walnut-shell)`
- `--text-success: #2d6a4f`
- `--text-error: #9b2226`
- `--border-default: var(--color-obsidian)`
- `--border-error: var(--color-text-error)`
- `--border-success: var(--color-text-success)`

**Shape & spacing tokens:**
- `--radius-sm: 8px; --radius-md: 8px; --radius-lg: 8px` (buttons/links only; images/cards = 0px)
- `--shadow-sm: none; --shadow-md: none` (no shadows by design)
- `--spacing-gap: 12px; --spacing-8: 8px; --spacing-12: 12px; --spacing-16: 16px; --spacing-20: 20px; --spacing-24: 24px; --spacing-36: 36px; --spacing-40: 40px; --spacing-60: 60px; --spacing-64: 64px; --spacing-100: 100px; --spacing-120: 120px`
- `--transition-fast: 150ms ease; --transition-normal: 250ms ease; --ease-standard: ease`
- `--z-dropdown: 100; --z-modal: 200; --z-toast: 300`
- `--font-base: 'Inter', sans-serif` (substitute for ModernEra)
- `--text-caption: 16px; --text-body: 18px; --text-subheading: 20px; --text-heading-sm: 24px; --text-heading: 28px; --text-display: 40px`

**Contrast pairing:** Every light background pairs with dark text; every dark background pairs with light (Warm Parchment) text. Enforce in both themes.

**Light mode background:** Use `#ffebd0` (Warm Parchment) as primary canvas — not pure white. Where near-white is needed, use `#fff8e9` (Candlelight), not `#ffffff`.

### 2.3 Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- In dark mode: swap `--bg-primary` to `--color-walnut-shell`, `--text-primary` to `--color-warm-parchment`, borders to `--color-warm-parchment`. Keep Amber Glow as accent.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed` and `aria-label`.

### 2.4 Flexbox & Mobile-First
- All layouts use `display: flex` with `align-items: center` by default unless explicitly justified.
- Mobile-responsive: convert rows to columns on small viewports. No horizontal scrolling.

### 2.5 Tailwind CSS Integration
Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`). All utility classes map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons
- Use Google Fonts: Inter (weights 400, 500) via `<link>` or `@import`, bound to `--font-base`.
- Use Google Material Symbols/Icons for any icons. No inline SVGs or local icon files.

## 3. Component Specifications

### 3.1 Buttons
- **Outlined Navigation Button (dark sections):** Transparent bg, 1px Warm Parchment border, 8px radius, 16px horizontal / 8px vertical padding, ModernEra 400 at 16px in Warm Parchment.
- **Outlined Action Button (cream sections):** Transparent bg, 1px Obsidian border, 8px radius, 18px horizontal / 16px vertical padding, ModernEra 500 at 16px in Obsidian. Hover: bg fills Obsidian, text shifts to Warm Parchment.
- All buttons: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`), min touch target 44x44px, hover brightness/shadow shift with `cursor: pointer`, focus ring via CSS variables, active `transform: scale(0.97)`, loading state with CSS spinner (no dimension distortion), disabled `opacity: 0.5` + greyscale + `cursor: not-allowed`, success/error temporary states via `--text-success`/`--text-error`.

### 3.2 Cards (Feature Cards)
- Flexible flexbox layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight card borders when child link/button receives focus.
- Loading skeleton: shimmer animation in CSS.
- Empty state: Google Icon + guidance text.
- Border-radius: 0px (sharp corners). No shadows.

### 3.3 Form & Input (Newsletter in Footer)
- States: empty, focused (outline ring), filled, valid, invalid (error border + red text + error icon), disabled, read-only.
- Structure: flex container wrapping label, input, and error feedback container.

### 3.4 Modal (if FAQ uses accordion, no modal needed; but include if any popup)
- Opening, open, loading, success/error, closing — all animated via CSS transitions.
- Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 4. Core UX & Micro-Interactions

- Responsive by default: fluid sizing, breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes, never rely solely on color for state, semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 5. Design-Specific Rules (Aspelin Reitan Style)

- **No filled CTAs, no drop shadows, no gradients.** Flat and outlined only.
- **No chromatic colors beyond Amber Glow and Muted Gold.** Warm-neutral palette only.
- **Type scale max 40px.** Weights max 500. No bold above 500.
- **Border-radius only on buttons and links (8px).** Images and cards are sharp-cornered (0px).
- **No white text on Warm Parchment.** White/Warm Parchment text reserved for Walnut Shell dark sections.
- **No icons, illustrations, or decorative graphics over photographs.** Photograph is the only visual layer.
- **Single typeface: Inter** (substitute for ModernEra). No serifs, no display fonts, no mono.
- **Body text: 18px / 1.25 in Inter 400.** Never below 16px. Generous line-height.
- **100px vertical section gaps.** Spacious gallery-walk rhythm.
- **Every link paired with visible border/bottom-line.** The line IS the affordance.
- **Full-bleed photography** as section anchors. UI chrome transparent/minimal over photos.
- **Page max-width: 1200px.** Section gap: 100px. Card padding: 40px. Element gap: 12-20px.

## 6. Section-by-Section Layout Requirements

### Hero
- Full-viewport (100vh) photograph background, no tint overlay.
- Headline bottom-left at 40px Inter 400 in Warm Parchment, 40px inset from left and bottom.
- Transparent header bar: wordmark top-left (16-18px Inter 500, letter-spaced), outlined "Portefølje" button + "Meny" text label top-right.
- No background fill on header.

### Features (3 cards)
- Cream canvas. 3-column grid (stack on mobile). Each card: image (sharp corners, no border), 40px space, project/feature name at 16px Inter 400 in Obsidian, left-aligned. No card container.

### How It Works (3 steps)
- Cream canvas. 3 steps in a row (stack on mobile). Each step: number label, heading at 24px Inter 500, description at 18px. Outlined connectors or simple flex layout.

### Testimonials
- Dark editorial section (Walnut Shell bg or full-bleed photo). Quote text in Warm Parchment at 20-24px. Author name at 16px. Muted Gold bottom border on quote.

### Pricing (3 tiers)
- Cream canvas. 3 pricing cards side by side (stack on mobile). Outlined borders (Obsidian on cream). Tier name, price at 28-40px, feature list, outlined CTA button. Middle tier may have Amber Glow accent border.

### FAQ
- Cream canvas. Accordion-style questions. Question at 18-20px Inter 500 in Obsidian. Answer at 18px. Bottom border (Obsidian) separating items. Expand/collapse via CSS transitions.

### Final CTA
- Dark editorial section (Walnut Shell or full-bleed photo). Headline at 28-40px in Warm Parchment. Outlined action button (Warm Parchment border).

### Footer
- Walnut Shell background. Warm Parchment text at 16px Inter 400. Single or two-column layout, 40px padding. Outlined buttons for any CTAs. Secondary links with bottom borders in Muted Gold.

## 7. Deliverables

- Separate `index.html`, `style.css`, `script.js` files. No inline `<script>` beyond a single deferred entry-point reference.
- Consistent class-naming convention (BEM) across entire deliverable. No mixed conventions.
- No lorem-ipsum-only submissions where real copy/labels are expected; placeholders only where content genuinely unspecified.
- All copy in English. Fictional brand name and product.

## 8. Edit Mode Note
This is a from-scratch build, not an edit. Full creative freedom within the constraints above. If any requested style change cannot be achieved without adding markup, stop and ask rather than silently inserting HTML.
