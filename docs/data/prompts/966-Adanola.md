# Prompt for Coding AI — Adanola-Themed Landing Page (Fictional Brand)

## 1. Project Overview
Build a complete, responsive landing page for a **fictional** activewear/fashion brand inspired by the Adanola editorial lookbook aesthetic. **Do not use the real brand name "Adanola", its logo, trademarks, or product names.** Invent a fictional brand name (e.g., "VANTREL", "MORVEN", "SOLSTICE") and original product/copy. All user-facing copy must be in English.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."` forbidden). Use one consistent class-naming convention (BEM) throughout.

## 2. Mandatory Architecture Rules

### 2.1 CSS-First, Zero Inline CSS
All styling lives in `style.css`. Target via class/ID selectors only. HTML must remain semantic and styling-agnostic.

### 2.2 CSS Variables & Theme Tokens
Define all tokens in `:root` (light) and `.dark` / `@media (prefers-color-scheme: dark)` (dark). Required tokens:

**Colors (light):**
- `--color-carbon-ink: #000000` (primary text, filled buttons, hairlines)
- `--color-paper-white: #fefefe` (page canvas, card surfaces)
- `--color-soft-mist: #e5e7eb` (alternation, disabled, skeletons)
- `--color-warm-fog: #f0efe7` (off-white banding)
- `--color-blush-sand: #f5ebd5` (warm cream highlight)
- `--color-smoke-charcoal: #333333` (secondary text, input borders)
- `--color-onyx: #1d1d1d` (dark borders/separators)
- `--color-stone-gray: #cccccc` (placeholders)
- `--color-slate: #2f3440`, `--color-olive-drab: #636355`, `--color-maroon-clay: #523037`, `--color-deep-iris: #222845`, `--color-pewter: #677284`, `--color-driftwood: #dfccbe`, `--color-pale-tide: #badce4` (photography/editorial surfaces)

**Generic semantic tokens (map to above):** `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

**Contrast pairing:** light bg → dark text; dark bg → light text, enforced in every theme.

**Dark mode palette:** invert surfaces (bg-primary becomes near-black `#0a0a0a`, text-primary becomes `#fefefe`), keep accent surfaces muted; ensure all contrast pairings hold.

**Shape/spacing tokens:**
- `--radius-sm: 0px`, `--radius-md: 4px`, `--radius-lg: 4px` (no 8px+ anywhere)
- `--shadow-sm: none`, `--shadow-md: none` (flat design, no shadows)
- `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-12: 12px`, `--spacing-16: 16px`, `--spacing-20: 20px`, `--spacing-24: 24px`, `--spacing-gap: 8px`
- `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: ease`
- `--z-dropdown: 100`, `--z-modal: 1000`, `--z-toast: 1100`

**Typography:** `--font-base` (Favorit substitute: Inter via Google Fonts). Load Inter from Google Fonts. `--font-nunito-sans` (Nunito Sans) for minor chrome. Letter-spacing `0.025em` (0.35px body, 0.5px headings, 0.75px display). OpenType features `"ss01" on, "cv11" on`.

### 2.3 Mandatory Dark Mode
Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Theme switching via `localStorage` with fallback to `prefers-color-scheme`. Visible toggle with correct `aria-pressed`/`aria-label`.

### 2.4 Flexbox & Mobile-First
All flex containers default to `align-items: center`. Mobile-responsive, no horizontal scroll; rows collapse to columns on small viewports.

### 2.5 Tailwind CSS
Use Tailwind (or clean custom CSS via `@layer`/`@apply`) mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).

### 2.6 Google Fonts & Icons
Text: Inter (Google Fonts). Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 3. Component Specifications

### 3.1 Buttons
- **Ghost CTA (primary):** transparent fill, 1px solid `--color-carbon-ink` border, 4px radius, padding 6px 24px, Favorit 12px weight 500, carbon ink text. Hover: subtle bg shift. Focus: visible ring. Active: `transform: scale(0.97)`. Loading: spinner, disabled interactions. Disabled: opacity 0.5, grayscale, `cursor: not-allowed`.
- **Filled (secondary/Quick Add):** solid carbon ink fill, white text, 4px radius, 4px 10px padding.
- **Danger:** distinct in both themes.
- Min touch target 44x44px.

### 3.2 Cards (Feature cards)
Flat, no shadow/border, 0px radius on images, 16px padding, `--color-paper-white` bg. Hover: subtle `translateY(-2px)`. Focus-within highlight. Skeleton shimmer. Empty state with Google Icon + guidance text.

### 3.3 Forms/Inputs
States: empty, focused (ring), filled, valid, invalid (error border + red text + icon), disabled, read-only. Structure: flex container with label, input, error feedback. Underlined input style: 1px `--color-smoke-charcoal` bottom border, no side borders, no fill, 4px radius on terminals, placeholder at 60% opacity.

### 3.4 Modal
Opening/open/loading/success/error/closing animated. Centered flex, backdrop overlay, Google Icon close button, focus trap, Esc/overlay close.

## 4. Core UX Rules
- Responsive by default, smooth transitions respecting `prefers-reduced-motion`.
- Accessibility: contrast both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct both themes.

## 5. Page Sections (in order)
1. **Announcement Bar:** black bg, white Favorit 9px weight 400 centered text (e.g., "FREE Standard Delivery on orders over €125"), full-bleed, 4-6px vertical padding.
2. **Top Nav:** white bg, 1px carbon ink bottom border. Left: category links (SHOP, ACTIVE, SWEATS, SPRING SUMMER) Favorit 12px weight 500. Center: wordmark (fictional brand) Favorit 30px weight 700. Right: icon cluster (wishlist heart, search, account, bag) as Material Symbols 16px. Dark mode toggle included.
3. **Hero:** full-bleed lifestyle image (no radius, no overlay), centered headline in white Favorit 30px weight 400 with 0.75px letter-spacing (e.g., "The Ultimate staples"), ghost CTA below ("SHOP ACTIVE").
4. **Slide Pagination Dots:** two thin rectangular bars (~30px × 2px), active carbon ink, inactive stone gray.
5. **Features (3 cards):** 3-column grid (collapses to 1 on mobile), flat cards with Google Icon, heading (Favorit 20px weight 700), body text (Favorit 14px).
6. **How It Works (3 steps):** numbered steps with icon, title, description. Compact 4px-based spacing, 64px section gap.
7. **Testimonials:** quote cards, flat, no shadow, Favorit 14px body.
8. **Pricing (3 tiers):** 3-column grid, flat cards, ghost/filled CTA per tier.
9. **FAQ:** accordion using `<details>`/`<summary>` or flex, no JS required for toggle; styled with hairlines.
10. **Final CTA:** centered headline + ghost CTA on subtle surface band (`--color-warm-fog` or `--color-blush-sand`).
11. **Footer:** secondary links, minimal, hairline top border, small Favorit 12px text.

## 6. Imagery & Layout Rules
- Photography-dominant; use placeholder images (e.g., `https://picsum.photos`) with 0 radius, edge-to-edge.
- Full-bleed page model, content max-width 1440px.
- 4-column product grid where applicable; 2-column editorial splits; 1-column nav.
- 64px+ vertical gaps between major sections; 8-16px within cards.
- No shadows, no gradients, no decorative borders; hairline 1px rules only.
- Border radius: 0px for cards/images/tags, 4px for buttons/inputs only.
- Category tab filter above any grid: text tabs Favorit 12px weight 500, active = carbon ink bg + white text + 0px radius, inactive = black text on white, 4-6px gap, no underlines.

## 7. Color Swatch Row (if product cards present)
12x12px squares, 4px gap, outlined active swatch (1px carbon ink), inactive no border.

## 8. Chat Widget
Circular floating button bottom-right, ~48px, carbon ink fill, white speech-bubble Material Symbol, flat (no shadow), always on top.

## 9. Deliverable Checklist
- [ ] `index.html`, `style.css`, `script.js` separate
- [ ] BEM naming throughout
- [ ] Dark mode functional with toggle + localStorage
- [ ] All states implemented (hover/focus/active/loading/disabled for buttons; skeleton/empty for cards)
- [ ] Google Fonts (Inter) + Material Symbols loaded
- [ ] No inline CSS or SVGs
- [ ] Fictional brand name, no real Adanola trademarks
- [ ] All copy in English
- [ ] Responsive, no horizontal scroll
- [ ] `prefers-reduced-motion` respected

Generate the code now.
