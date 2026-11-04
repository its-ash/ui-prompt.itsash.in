# Landing Page Build Prompt — "Daylit" Theme

## 1. Project Overview

Build a complete, responsive landing page for a fictional fintech brand (invent a unique brand name, product name, and all copy — never use "Daylit" or any real trademark). The page must include these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. Use a single consistent class-naming convention (BEM) across the entire deliverable.

## 2. Architecture Rules

### 2.1 CSS-First, Zero Inline CSS
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target elements via class/ID selectors only. Keep HTML semantic and styling-agnostic.

### 2.2 CSS Variables & Theme Tokens
Define all tokens in `:root` (light mode) and under `@media (prefers-color-scheme: dark)` plus a `.dark` class. Required tokens:

Colors:
- `--color-wine-ink: #4d1520`
- `--color-midnight-wine: #360912`
- `--color-lemon-whisper: #faffa7`
- `--color-blush-rust: #662f3d`
- `--color-citrine-pop: #e6b800`
- `--color-mauve-ash: #825b63`
- `--color-parchment: #fbf9f6`
- `--color-pure-white: #ffffff`
- `--color-linen-beige: #f2eee7`
- `--color-sandstone: #d3cac3`
- `--color-driftwood: #aaa49f`
- `--color-slate-smoke: #717182`
- `--color-charcoal-ink: #101828`
- `--color-butter-cream: #feffe1`
- `--color-dawn-glow: #e9e3d8`
- `--color-rose-whisper: #d7a0a0`
- `--color-plum-echo: #906c7b`

Standardized tokens:
- `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`

Contrast pairing: every light background token pairs with a dark text token and vice versa in both light and dark themes. Light mode background uses `#fbf9f6` (not pure white); use `#fefefe` only where near-white is needed.

### 2.3 Mandatory Dark Mode
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Theme switching via CSS variables only, no HTML restructuring.
- Persist user choice in `localStorage`, fall back to `prefers-color-scheme` on first visit.
- Visible toggle control with correct `aria-pressed`/`aria-label`.

### 2.4 Flexbox Layout & Mobile-First
- All layouts use Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- Mobile-responsive out of the box: rows collapse to columns on small viewports. No horizontal scrolling.

### 2.5 Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). Utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons (Google Fonts Mandatory)
- Text: Google Font `<link>`/`@import` for Tt Commons Pro (substitute Switzer/General Sans/Inter if unavailable), Geist Mono (substitute JetBrains Mono/IBM Plex Mono), bind to `--font-base`.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 3. Theme Specification — Daylit

### Colors & Surfaces
- Page canvas: `#fbf9f6` (parchment). Card surface: `#ffffff`. Highlight fills: `#feffe1`, `#faffa7`. Inverted dark surface: `#360912`.
- Primary text/action: `#4d1520` (wine ink). Secondary text: `#717182`. Muted borders: `#f2eee7`, `#d3cac3`.

### Typography
- Primary: Tt Commons Pro, weights 400/500/600, sizes 9–85px. Display 56–85px at weight 400 with letter-spacing -0.021em to -0.04em, line-height 1.0–1.05. Body 16–18px at weight 400, line-height 1.5–1.6, letter-spacing -0.012em.
- Mono accent: Geist Mono, weights 400/500, sizes 12–14px, uppercase for pill badges.
- Type scale tokens: `--text-body-sm` (14px/1.5), `--text-body` (16px/1.5), `--text-subheading` (22px/1.33), `--text-heading-sm` (32px/1.2), `--text-heading` (44px/1.15), `--text-heading-lg` (56px/1.0), `--text-display` (76px/0.95).

### Spacing & Shapes
- Base unit 4px. Spacing scale: 4,8,12,16,20,24,32,40,60,64,76,80,88,92,96,128px.
- Border radius: cards/buttons/inputs/nav links 6px; badges 1440px; large buttons 24px; illustration cards 13px.
- Shadow: `--shadow-xl: rgba(77,21,32,0.16) 19px 32px 73px 0px` — hero-scale elevation only.
- Page max-width 1200px, section gap 80px, card padding 24px, element gap 8px.

### Gradients (atmospheric, large-scale only — never on text/buttons/small UI)
1. `linear-gradient(51.57deg, rgb(238,143,162) 20%, rgb(255,255,255) 77%)` — soft background glow behind hero headlines.
2. `linear-gradient(49deg, rgb(77,21,32) 20%, rgb(179,49,74) 162%)` — footer/inverted CTA.
3. `linear-gradient(120deg, rgba(250,255,167,0), rgba(255,187,117,0.4))` — decorative overlay in illustration panels.

### Imagery
Illustration-only, no photography. Flat geometric compositions in brand palette (wine outlines on lemon/cream fills), in 13px-radius panels. No people, no lifestyle photography, no product screenshots.

## 4. Component Specifications

### 4.1 Button
- Default: flex, `align-items: center`, `justify-content: center`, gap 0.5rem, min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disable interactions, prevent double-clicks, CSS spinner or animated Google Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.
- Primary filled: `#4d1520` bg, white/`#faffa7` text, 6px radius, padding 10px 20px or 12px 20px, weight 500 at 16px. Optional trailing yellow grid/dot icon.
- Ghost/text: no bg/border, `#4d1520` or `#717182` text at 16px weight 500, optional right-arrow chevron.
- Large button radius 24px where specified.

### 4.2 Card
- Default: flex layout, `#ffffff` bg, 1px `#f2eee7` border, 6px radius, 24px padding. Optional `--shadow-xl` for hero-scale elevation only.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight border when child link/button focused.
- Loading (skeleton): shimmer animation in CSS, no layout jumps.
- Empty state: Google Icon + guidance text.

### 4.3 Form & Input
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container.

### 4.4 Modal/Popup
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### 4.5 Additional Components (from theme)
- Navigation bar: full-width, `#fbf9f6` bg, 64–80px height. Logo left, nav links center-right (14–15px weight 500, `#4d1520`, 24–32px gap, caret icons), right side: Login, Capital, Book a Demo (filled). Optional thin `#f2eee7` bottom border.
- Announcement banner: full-bleed `#faffa7` bg, `#4d1520` text at 14px centered, close (×) button right.
- Hero headline: 56–68px, weight 400, `#4d1520`, letter-spacing -0.021 to -0.04em, line-height 1.0–1.05.
- Testimonial card: warm tinted bg (`#faffa7` or `#feffe1`), 1px matching border, 6–13px radius, 20–24px padding. Company name `#4d1520` 14px weight 600. Quote `#4d1520` 15–16px weight 400. Author line with 32px circular avatar, name weight 500 14px `#4d1520`, role `#717182`.
- Logo bar: parchment bg, grayscale/muted logos 40–48px height, 8–10px gaps, "Trusted by" label `#717182` left.
- Pill badge/tag: `#faffa7` or `#906c7b` bg, `#4d1520` or white text, 1440px radius, padding 4px 12px or 6px 14px, Geist Mono 500 12–14px uppercase. Optional left '+' icon.
- Illustration panel: 13px radius, `#faffa7` or `#feffe1` fill, flat geometric illustrations, 2-column hero (text left, visual right).
- Body text block: Tt Commons Pro 400 at 18px, `#4d1520` primary or `#717182` secondary, line-height 1.5–1.6, letter-spacing -0.012em, comfortable width within 1200px column.

## 5. UX & Micro-Interactions (Global)

- Responsive by default: fluid sizing, breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 6. Do's and Don'ts

Do:
- Use `#4d1520` as default text and primary button fill.
- Set canvas to `#fbf9f6`.
- Use 6px radius for cards/buttons/inputs; 1440px for pills only.
- Use weight 400 for display headings 44px+.
- Apply wine-tinted shadow only on hero-scale elevated cards.
- Use `#faffa7` as decorative accent fill, never as text on dark surfaces.
- Center content within 1200px max-width with 24–40px horizontal padding.

Don't:
- No cold grays (`#e5e7eb`, `#f3f4f6`, `#6b7280`).
- No 8px or 12px radius on cards/buttons.
- No weight 600/700 on body or headings (max 600 for emphasis).
- No pure black `#000000` text — use `#4d1520`.
- No drop shadows on buttons/nav/small elements.
- No blue/green/standard semantic status colors — communicate via opacity, position, single brand hue.
- No center-aligned body paragraphs longer than two lines — left-align; center only headlines and short CTAs.

## 7. Dark Mode Color Mapping

In dark mode, invert surfaces: canvas becomes `#360912` (midnight wine) or a darkened parchment; cards become `#4d1520`/`#662f3d` tints; text becomes `#fbf9f6`/`#faffa7`; borders become `#662f3d`/`#825b63`. Preserve contrast pairing and the warm tone — avoid cold grays. Keep `#faffa7` as accent fill (not text on dark). Ensure all interactive states remain visible.

## 8. Section Requirements

### Hero
- Announcement banner at top (optional).
- 2-column layout: left text (headline 56–68px, subheading, CTA buttons), right illustration panel (13px radius, lemon/cream fill, flat geometric illustration).
- Gradient glow behind headline (gradient 1).

### Features (3 cards)
- 3-column flex row (collapses to 1 column mobile). Each card: icon (Material Symbol), title, description. White bg, 6px radius, 24px padding.

### How It Works (3 steps)
- 3-step horizontal flow (collapses mobile). Numbered badges (pill style), title, description, connecting line/arrow.

### Testimonials
- 2–3 testimonial cards in flex row/wrap. Warm tinted bg, quote, author with avatar.

### Pricing (3 tiers)
- 3 pricing cards. Middle tier highlighted (elevated shadow or border accent). Each: tier name, price, feature list, CTA button.

### FAQ
- Accordion-style questions. Expand/collapse via CSS + minimal JS. `aria-expanded`, keyboard operable.

### Final CTA
- Centered headline, subtext, primary CTA button. Optional inverted dark band (gradient 2) or lemon accent.

### Footer
- Multi-column links (Product, Company, Resources, Legal). Brand logo, social icons (Material Symbols). Copyright. Inverted dark surface optional.

## 9. Deliverables

- `index.html`, `style.css`, `script.js`.
- All user-facing copy in English (invent fictional brand/product/copy).
- No lorem-ipsum-only submissions where real copy is implied — provide meaningful placeholder copy for all sections.
- No unrequested placeholders.

## 10. Output

Generate the complete code for all three files. Ensure every rule above is satisfied. Do not include any preamble or commentary — output only the code.
