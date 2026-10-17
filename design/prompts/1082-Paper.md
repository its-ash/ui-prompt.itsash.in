# UI/UX Coding Prompt — Paper Theme Landing Page

You are an expert frontend engineer. Build a complete, production-quality landing page following the **Paper** visual style system described below. Output three separate files: `index.html`, `style.css`, and `script.js`. No inline CSS or inline scripts beyond a single deferred entry-point reference.

## 1. Architecture & Rules

- **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes. Use class/ID selectors only. HTML stays semantic and style-agnostic.
- **CSS Variables & Tokens:** Define all tokens in `:root` and dark-mode overrides under `@media (prefers-color-scheme: dark)` and `.dark`. Include: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.
- **Contrast Pairing:** Every light background token pairs with a dark text token; every dark background pairs with a light text token, in both themes.
- **Light Mode Background:** Use `#efefe4` (Bone Canvas) as page background — never pure white. Use `#fefefe` only where near-white is required.
- **Dark Mode:** Mandatory. Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** All layouts use Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified. Mobile-responsive, no horizontal scroll.
- **Framework:** Tailwind CSS via CDN or clean custom CSS driven by Tailwind `@layer`/`@apply`. Utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts mandatory. Text: Matter (substitute: Manrope or Inter Tight), Inter, and JetBrains Mono. Icons: Google Material Symbols. No raw inline SVGs or local icon files.

## 2. Paper Theme Tokens

**Colors:**
- `--color-bone-canvas: #efefe4` (page background)
- `--color-paper-white: #fcfcf9` (card/panel surfaces)
- `--color-bright-card: #ffffff` (highest elevation, product chrome, code panels)
- `--color-mist: #f3f3f4` (alternate band, inset surface)
- `--color-ash-gray: #e3e3e3` (denser card backgrounds)
- `--color-stone: #d7d7d6` (hairline borders, separators)
- `--color-smoke: #c1c1c0` (secondary borders, muted dividers)
- `--color-pewter: #a8a8a8` (icon strokes, decorative fills)
- `--color-graphite: #909090` (secondary body text, lighter half of two-tone headline)
- `--color-slate: #83837e` (subdued headings, captions)
- `--color-iron: #666666` (helper text, metadata)
- `--color-lava: #434341` (near-black emphasis text)
- `--color-carbon: #222222` (nav chrome, high-contrast text)
- `--color-ink: #181818` (primary text, nav active, filled button background)
- `--color-studio-blue: #5d8cd7` (brand mark, decorative vectors, code accents only)
- `--color-wash-blue: #81adec` (soft body accents, nav underlines)

**Typography:**
- Display/headline: Matter (substitute Manrope) — weights 360/400/480/500/550, sizes 14/18/48/64px, tracking -1.28px@64px, -0.96px@48px, -0.28px@14px, OpenType `"calt" on, "ss01" on`.
- UI/body: Inter — weights 400/500/600, sizes 12/14/16/18/24/36px, tracking -0.30px@12px, -0.14px@14px, -0.16px@16px, -0.18px@18px, 0.10px@24px, OpenType `"calt" on`.
- Mono: JetBrains Mono — weight 400, sizes 11/12px, tracking +0.17px@11px, +0.19px@12px, OpenType `"calt" on`.

**Type Scale:**
- caption: 11px / 1.33 / 0.17px
- body: 14px / 1.56 / -0.14px
- body-lg: 18px / 1.75 / -0.18px
- subheading: 24px / 1.3 / 0.1px
- heading-sm: 36px / 1.2 / -0.36px
- heading: 48px / 1.14 / -0.96px
- display: 64px / 1.0 / -1.28px

**Spacing & Shapes:**
- Base unit 4px, compact density. Scale: 4, 8, 12, 16, 24, 32, 36, 40, 44, 60, 64, 120, 172px.
- Radius: tags 9999px, buttons 4px, cards 8px, heroPanels 20px, largeCards 12px, imageFrames 24px.
- Shadows: `--shadow-sm` = `rgba(0,0,0,0.08) 0px 8px 8px -4px, rgba(0,0,0,0.08) 0px 2px 4px -2px, rgba(0,0,0,0.08) 0px 1px 1px -1px, rgba(0,0,0,0.08) 0px 0px 0px 1px`; `--shadow-md` = `rgba(0,0,0,0.12) 0px 4px 10px 0px, rgba(0,0,0,0.12) 0px 2px 4px -1px, rgba(0,0,0,0.12) 0px 0px 4px -1px`.
- Layout: max-width 1200px, section gap 96px, card padding 32px, element gap 8px.

## 3. Component Specifications

**Filled Dark Button:** `#181818` bg, `#fcfcf9` text, 4px radius, 6px 14px padding, Inter 14px weight 500, no border. Lowercase label, no trailing arrow. States: hover brightness/shadow + cursor pointer; focus ring via CSS vars; active `transform: scale(0.97)`; loading disables interactions with CSS spinner; disabled opacity 0.5 grayscale cursor not-allowed; success/error temporary feedback via `--text-success`/`--text-error`.

**Ghost Link Button:** Transparent bg, `#181818` text, no border, Inter 14px weight 500, trailing arrow glyph (→) at 6px gap. Same state rules as above.

**Nav Link:** Inter 14px weight 400, `#181818` text, 8px horizontal padding, no underline. Active endpoint in weight 500. Right-aligned cluster: 'sign up' weight 400, 'downloads →' weight 500.

**Brand Wordmark:** 'Paper' (replace with fictional brand name) in Inter 16px weight 600, `#181818`, preceded by 14×14 `#5d8cd7` rounded-square mark.

**Two-Tone Headline:** Matter weight 400 at 64px (display) or 48px (heading), split across two visual weights: first line `#181818`, continuation `#83837e`, same size. Tracking -1.28px@64px, -0.96px@48px. Line height 1.0–1.14. Never bold, italic, or different font.

**Eyebrow Label:** Inter 12px weight 500, `#909090`, often lowercase. Optional 8px gap to heading.

**Lead Paragraph:** Matter 18px weight 400, `#666666`, line-height 1.75, max-width ~56ch. No drop-cap, no bold inline emphasis.

**Product Screenshot Card:** `#fcfcf9` surface, 8px radius, 32px padding, elevated with three-layer card shadow (`--shadow-md`). Traffic-light dots top-left `#c1c1c0`, sidebar `#909090`, main canvas white, right panel `#f3f3f4` inputs 4px radius.

**Logo Cloud:** Centered eyebrow + grid of customer wordmarks in `#83837e`, 40–48px tall, 32–40px gap, centered. No dividers, no card wrapping.

**Code Block:** 8px radius, 12–24px padding, `#fcfcf9` bg, hairline `#d7d7d6` border. Paper Mono 11–12px weight 400. File paths/keywords in `#5d8cd7`, comments in `#909090`. No syntax rainbow.

**Ghost Card:** `#fcfcf9` bg, 1px `#d7d7d6` border, 8px radius, 24–32px padding. Flat, no shadow.

**Geometric Pattern Overlay:** Thin-line isometric grid in `#d7d7d6` at ~20% opacity, anchored upper-right, clipped to triangular wedge. Never full-bleed.

**Card (interactive):** Flexbox layout, subtle borders/elevation via `--bg-secondary` and CSS vars. Hover: elevation/shadow shift or `transform: translateY(-2px)`. Focus-within: highlight borders. Loading: shimmer skeleton. Empty state: Google Icon + guidance text.

**Form/Input:** States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

**Modal:** States: opening, open, loading, success/error, closing (CSS transitions). Centered flex (`align-items: center`), backdrop overlay, Google Icon close button, focus trapping, close via Esc/overlay click.

## 4. UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- Naming convention: BEM throughout, no mixing.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where content genuinely unspecified.

## 5. Page Structure

Build a complete landing page with these sections in order:
1. **Hero** — eyebrow → two-tone headline → lead paragraph → button pair (filled + ghost) → product screenshot card below, centered, slightly wider than text column.
2. **Logo Cloud** — centered eyebrow + monochrome customer wordmarks.
3. **Features** — 3 Ghost Cards in a row: icon + title + description.
4. **How It Works** — 3 steps: number + title + description, connected visually.
5. **Testimonials** — 2–3 quote cards with avatar placeholder (Google Icon), name, role, quote.
6. **Pricing** — 3 tiers: name, price, feature list, CTA button. Middle tier highlighted.
7. **FAQ** — accordion items with expand/collapse, keyboard accessible.
8. **Final CTA** — centered two-tone headline + lead + filled button.
9. **Footer** — logo, link columns, secondary links, copyright.

Section rhythm: eyebrow → headline → lead → content block, separated by 96px vertical gaps. Centered max-width 1200px container on full-bleed Bone Canvas. Nav: flat top bar, left-aligned logo, right-aligned CTA cluster, no sticky shadow, no mega-menu.

## 6. Brand & Copy Rules

- **Invent a fictional brand name, product name, and all copy.** Never use "Paper", "Paper app", or any real brand's name, logo, trademarks, or product names. The generated page must feel like an original product using the Paper visual language only.
- All user-facing copy must be in English.
- Use realistic, non-lorem placeholder content that fits a fictional productivity/design tool.

## 7. Do's and Don'ts (enforce)

**Do:**
- Use `#181818` as the only filled-button background — never a chromatic CTA color.
- Split headlines into two visual weights: first line Ink (`#181818`), continuation Slate (`#83837e`), both same Matter display size.
- Set page background to Bone Canvas (`#efefe4`); reserve `#ffffff` for elevated cards and product chrome only.
- Use 4px radius for buttons/tags, 8px for cards, 12–24px for product frames — never mix on same surface.
- Keep body in Matter 18px weight 400 at `#666666` with 1.75 line-height.
- Use three-layer card shadow only on product screenshots and floating panels — marketing cards stay flat with hairline borders.
- Limit blue (`#5d8cd7`) to brand mark, decorative vectors, and code accents — never button fill or large text.

**Don't:**
- Don't add chromatic accent for CTAs, links, or active states — action language is neutral dark.
- Don't use white (`#ffffff`) as page background.
- Don't bold inline keywords in body copy.
- Don't apply card shadow to headings, logos, or icon rows.
- Don't set two-tone headline in two different sizes or fonts.
- Don't use saturated semantic colors (red/green/yellow) for status — use Pewter or Iron.
- Don't add gradients — flat, warm, achromatic; product screenshot provides only visual richness.

## 8. Deliverables

Output `index.html`, `style.css`, `script.js` as separate files. Include Google Font links and Material Symbols. Ensure dark mode toggle, FAQ accordion, and pricing highlight work via JS. All interactive components fully styled with all states. No placeholder lorem-ipsum where real copy is provided.
