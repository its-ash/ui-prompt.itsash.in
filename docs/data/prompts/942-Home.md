# Landing Page — Sunlit Eucalyptus Grove on Warm Parchment

## 1. Project Overview & Architecture Rules

Build a complete, responsive landing page as three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. Use **Tailwind CSS** (via CDN or build) with custom CSS in `style.css` driven by Tailwind `@layer` / `@apply` directives where helpful, but all visual tokens must live as CSS variables. Enforce **zero inline CSS** — no `style="..."` attributes anywhere; all styling via class/ID selectors.

**Naming convention:** BEM (`.block__element--modifier`) consistently across the entire deliverable. Never mix conventions.

**Fictional brand:** Invent a fictional brand name, product, and copy. Do NOT use "Airtree", "airtree", or any real trademark/logo/product name from the source reference. All user-facing copy in English.

## 2. Design Tokens (CSS Variables)

Define all tokens in `:root` and switch them under `@media (prefers-color-scheme: dark)` and a `.dark` class. Contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text in every theme.

```css
:root {
  /* Colors — Light */
  --color-parchment-cream: #f7f6e3;
  --color-ink-black: #262d29;
  --color-electric-lemon: #ffff48;

  --bg-primary: #f7f6e3;
  --bg-secondary: #f7f6e3;
  --text-primary: #262d29;
  --text-secondary: #262d29;
  --text-success: #262d29;
  --text-error: #262d29;
  --border-default: #262d29;
  --border-error: #262d29;
  --border-success: #262d29;

  /* Typography */
  --font-prody: 'Playfair Display', serif; /* substitute for Prody */
  --font-suisseintl: 'Inter', sans-serif; /* substitute for SuisseIntl */
  --font-suisseintl-book: 'Inter', sans-serif; /* substitute for SuisseIntl Book */
  --font-base: var(--font-suisseintl);

  /* Type scale */
  --text-caption: 13px;
  --text-body: 16px;
  --text-subheading: 19px;
  --text-heading-sm: 21px;
  --text-heading: 33px;
  --text-heading-lg: 42px;
  --text-display: 131px;

  /* Spacing (base 4px, spacious density) */
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-28: 28px;
  --spacing-112: 112px;
  --spacing-gap: 20px;
  --section-gap: 112px;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 18px;
  --radius-lg: 37px;
  --radius-pill: 9999px;

  /* Shadows — none on cards/buttons; elevation via background contrast */
  --shadow-sm: none;
  --shadow-md: none;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --ease-standard: ease;

  /* Z-index */
  --z-dropdown: 10;
  --z-modal: 50;
  --z-toast: 100;
}
```

Dark mode: invert canvas to ink surface (`#262d29`) with parchment text (`#f7f6e3`); accent lemon remains `#ffff48`. Define under `@media (prefers-color-scheme: dark)` and `.dark`. Provide a visible theme toggle with `aria-pressed`/`aria-label`, persist choice in `localStorage`, fall back to `prefers-color-scheme` on first visit.

**Light mode background:** use `#f7f6e3` (parchment cream), never pure white. Where near-white is needed, use `#fefefe`.

## 3. Typography & Icons

Include Google Fonts via `<link>`: Playfair Display (400) and Inter (400, 500, 600). Bind `--font-base` to Inter. Use Google Material Symbols/Icons for all icons — no inline SVGs or local icon files. Line-height 1.15 across type scale.

## 4. Layout & Responsiveness

- Max content width 1280px, centered.
- Section vertical gaps 75–112px (use `--section-gap`).
- Flexbox for all layouts; default `align-items: center` on every flex container unless explicitly justified.
- Mobile-first: convert rows to columns on small viewports; prevent horizontal scrolling.
- Card padding 37px; element gap 9–20px.

## 5. Component Specifications

### Top Navigation
Fixed top bar, cream background, no border/shadow. Left: fictional wordmark in SuisseIntl 400 ~21px ink. Center/right: three link groups at 13px SuisseIntl Book 400, 9px gap, each link preceded by a 4px circle outline dot. Far right: pill CTA (ghost or filled). Nav links: subtle opacity change on hover, no background change. Min touch target 44x44px.

### Hero Statement
Full-bleed atmospheric band with subtle sky-to-cream wash overlay and scattered organic decorative dots (4–12px, warm accent hue, asymmetric, purely atmospheric, restricted to hero/transitional sections). Centered Prody (Playfair) display headline at 131px, line-height 1.15, ink color, weight 400. Optional subtext at 19px Inter 400. Max-width 960px, vertical padding 112px top/bottom. No background fill beyond the wash. **Never bold Prody at 131px.**

### Pill CTA — Filled
Background `#ffff48`, text `#262d29`, border-radius 9999px, padding 8px 18px, Inter 400 at 14px. The only filled button — reserved for highest-priority actions. One per section maximum. States: hover (brightness/shadow shift, cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error temporary feedback.

### Pill CTA — Ghost
Transparent background, 1px border in parchment/ink at low opacity, border-radius 9999px, padding 8px 18px, Inter 400 at 13px, ink text. For nav-adjacent actions.

### Portfolio Card
Border-radius 37px, no visible border, cream background or image fill. Image fills edge-to-edge with 37px clip. Bottom-left label overlay: Inter 400 at 14px, parchment text over photography (with subtle shadow) or ink over solid. Horizontal scroll row, 28px gap, arrow controls. Hover: subtle transform translateY(-2px). Focus-within highlights border. Skeleton shimmer loading state. Empty state with Google Icon + guidance text.

### Carousel Arrow Button
40×40px, border-radius 8px, 1px ink border, transparent fill. Arrow icon centered, stroke 1.5px. Hover: background ink, arrow inverts to parchment.

### Logo Strip
Single horizontal row of grayscale company wordmarks in ink at uniform visual weight, ~40px cap height, ~75px horizontal spacing. Monochrome only.

### Testimonial Block
Centered, max-width 720px. Attribution line: Inter 400 at 13px ink. Quote: Inter 400 at 28px ink with curly typographic quotes. Company name + heart icon (12px) below at 14px. Two 40×40px ghost arrow buttons (8px radius, 1px ink border) centered 37px below.

### Portfolio Program Card
Cream background, 37px radius, 37px padding. Headline Inter 600 at 21–33px ink. Yellow pill CTA below. Textual variant, no image.

### Footer
Cream background, 37px padding, single row of text links at 13px Inter 400 ink separated by spacing. No dividers, no social icons beyond simple wordmark repetition.

### Features (3 cards)
Each card: cream surface, 37px radius, 37px padding, icon (Material Symbol), heading (Inter 600, 21px), body (Inter 400, 16px). Flex column, gap 20px. Hover elevation shift. Focus-within border highlight. Skeleton + empty states.

### How It Works (3 steps)
Numbered steps 1–3 with large numeral (Prody/Playfair 42px), title (Inter 600, 21px), description (Inter 400, 16px). Flex row on desktop, column on mobile.

### Pricing (3 tiers)
Three cards: cream surface, 37px radius, 37px padding. Tier name (Inter 600, 21px), price (Prody 42px), feature list with check icons, CTA button (filled for recommended tier, ghost for others). Recommended tier distinguished by ink border or subtle accent. Flex row → column on mobile.

### FAQ
Accordion items: question (Inter 500, 19px) with expand/collapse icon, answer (Inter 400, 16px). Smooth CSS transition. Keyboard operable. `aria-expanded` on triggers.

### Final CTA
Centered block: headline (Prody 42px), subtext (Inter 400, 19px), filled pill CTA. Cream canvas with generous vertical padding (112px).

## 6. Global UX Rules

- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes (use ink + border treatment, never a second saturated hue).
- No box-shadow on cards/buttons; rely on radius + background contrast.
- No gradients on buttons/cards/page backgrounds (hero wash exception).
- No second saturated color; emphasis via yellow or weight change only.
- Yellow (`#ffff48`) only for filled primary CTAs — never body text, icons, or decorative fills.
- Display type never under 80px for Prody; under 80px reads as body.
- Monochrome logos only.

## 7. Deliverables

- `index.html`, `style.css`, `script.js` (separate files).
- BEM naming throughout.
- No lorem-ipsum-only where real copy supplied; placeholders only where genuinely unspecified.
- All user-facing copy in English, fictional brand/product.
- Dark mode toggle with persistence, theme switch without HTML restructuring.
- All component states (default, hover, focus, active, loading, disabled, success/error) implemented via CSS classes.
- Modal/popup if used: opening/open/loading/success-error/closing animated, backdrop, Google Icon close, focus trap, Esc/overlay close.

## 8. Edit Mode (not applicable — from-scratch build)

This is a from-scratch build; ignore edit-mode constraints. If any requested style change later requires new markup, the coding AI must stop and ask before inserting HTML.

## Output

Produce the three files with complete, production-ready, accessible, responsive code implementing all sections above under the sunlit parchment theme. Ensure dark mode works, all states are styled, and no inline CSS is used.The finished prompt has been generated above. It instructs the coding AI to build a complete, responsive landing page under the sunlit parchment theme with all requested sections, enforcing CSS-first architecture, mandatory dark mode, zero inline CSS, flexbox alignment, Google Fonts/Icons, full component states, accessibility, and fictional branding.
