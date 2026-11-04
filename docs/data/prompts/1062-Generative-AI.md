# Landing Page Build Prompt — Generative AI Theme (Style Reference: "fal-inspired")

## 1. Project Overview & Style Direction

Build a complete, responsive landing page for a **fictional generative AI product** (invent a brand name, product name, copy, and logo mark — never reuse the real brand name "fal", its logo, trademarks, or product names). The visual language is a playful generative-canvas aesthetic: clean white surfaces, one bold geometric sans (substitute with **Inter Tight** from Google Fonts, weights 400/500/600/700) at compressed tracking, dark filled buttons that sit flat against brightly-colored full-bleed section bands, and scattered 8-bit pixel-art decorations in lime, violet, and pink that break the otherwise minimal developer-tool grid.

Color is used sectionally — each band gets its own flat wash (sky-blue hero, lime highlight, violet CTA strip, pink testimonial accent) — so the page reads like a series of colored panels stitched together by white gutters. Components stay flat and sharp: 4px button radii, 12px card radii, hairline #e5e7eb borders, no shadows, no gradients, no rounded-pill controls.

**Deliverables:** separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere in HTML. All styling lives in `style.css`.

## 2. CSS-First Architecture & Design Tokens

### 2.1 CSS Variables (`:root`)

Define all visual tokens inside `:root` (and a `.dark` class / `@media (prefers-color-scheme: dark)` block). Required tokens:

**Colors (Light Mode):**
- `--color-pixel-lime: #f1ffd2`
- `--color-sky-cyan: #99ecff`
- `--color-electric-violet: #6120ee`
- `--color-deep-ultraviolet: #4a17b0`
- `--color-lavender-pixel: #ab77ff`
- `--color-lilac-wash: #d0b7f9`
- `--color-bubblegum-pink: #ffddfa`
- `--color-forest-pixel: #004012`
- `--color-cobalt-pixel: #0a4dce`
- `--color-paper-white: #fefefe` (use #fefefe, never #ffffff, where a near-white is needed)
- `--color-hairline-gray: #e5e7eb`
- `--color-fog-surface: #f4f4f5`
- `--color-ink-black: #000000`
- `--color-graphite: #1b1b1d`
- `--color-carbon: #252527`
- `--color-obsidian: #121216`
- `--color-slate-body: #383a42`
- `--color-ash: #787882`

**Semantic aliases (required):**
- `--primary: var(--color-carbon)`
- `--secondary: var(--color-electric-violet)`
- `--bg-primary: var(--color-paper-white)`
- `--bg-secondary: var(--color-fog-surface)`
- `--text-primary: var(--color-graphite)`
- `--text-secondary: var(--color-slate-body)`
- `--text-success: #16a34a`
- `--text-error: #dc2626`
- `--border-default: var(--color-hairline-gray)`
- `--border-error: #dc2626`
- `--border-success: #16a34a`

**Contrast pairing rule:** every light background token must pair with a dark text token, and every dark background token must pair with a light text token — enforce this in both light and dark themes.

**Radius & Shadows:**
- `--radius-sm: 4px`
- `--radius-md: 8px`
- `--radius-lg: 12px`
- `--shadow-sm: none`
- `--shadow-md: none` (shadows are explicitly forbidden in this theme)

**Spacing & Transitions:**
- `--spacing-gap: 16px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Elevation/Stacking:**
- `--z-dropdown: 100`
- `--z-modal: 200`
- `--z-toast: 300`

**Typography:**
- `--font-base: 'Inter Tight', sans-serif`
- `--font-mono: 'JetBrains Mono', monospace` (for code snippets / technical metadata)
- `--font-ui: 'Public Sans', sans-serif` (for buttons, tags, nav CTAs — apply `"ss01" on` via `font-feature-settings`)

**Type scale tokens:**
- `--text-caption: 12px`
- `--text-body-sm: 14px`
- `--text-body: 16px`
- `--text-subheading: 18px`
- `--text-heading-sm: 24px`
- `--text-heading: 30px`
- `--text-heading-lg: 48px`
- `--text-display: 60px`
- `--text-display-lg: 80px`

**Letter-spacing tokens (tighten with size):**
- `--tracking-display-lg: -0.025em` (at 80px)
- `--tracking-display: -0.025em` (at 60px)
- `--tracking-heading-lg: -0.02em` (at 48px)
- `--tracking-heading: -0.02em` (at 30px)
- `--tracking-body: -0.01em` (at 16px)
- `--tracking-normal: 0` (at 14px and below)

### 2.2 Dark Mode (Mandatory)

Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector on `<html>` or `<body>`. Background and text variables must switch seamlessly without HTML restructuring. Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible theme toggle control with correct `aria-pressed` and `aria-label` state. In dark mode, invert surfaces: page canvas becomes `--color-obsidian`, cards become `--color-graphite`, text becomes `--color-paper-white`, borders remain `--color-hairline-gray` (or a darker variant), and accent bands (sky cyan, etc.) retain their flat fills but with adjusted text contrast.

### 2.3 Flexbox & Mobile-First

- Use Flexbox (`display: flex`) for all layout structures.
- Every flex container must default to `align-items: center` unless an explicitly justified exception exists.
- Mobile-first: convert rows to columns on smaller viewports; prevent horizontal scrolling.
- Page max-width: 1200px, centered. Section gap: 64–80px. Card padding: 24–32px. Element gap: 8–16px. Base spacing unit: 8px.

### 2.4 Framework

Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives). All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`). Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.

### 2.5 Typography & Icons (Google Fonts Mandatory)

- Include Google Font `<link>` tags for **Inter Tight** (text) and **Material Symbols Outlined** (icons). Bind Inter Tight to `--font-base`.
- Explicitly forbid raw inline SVGs or local icon files. Use Material Symbols for all icons.
- OpenType feature `"ss01" on` for `--font-ui` (Public Sans substitute — use Inter Tight with `font-feature-settings: "ss01" on` as the closest available Google Font alternative).

## 3. Component Specifications

### 3.1 Button Component

Style all states via CSS classes (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.btn--danger`):

- **Default:** Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px. Primary: background `--color-carbon`, text `--color-paper-white`, radius `--radius-sm`, padding 12px 20px, font `--font-ui` weight 600 at 14–16px, letter-spacing -0.01em. No border, no shadow, no hover lift. Secondary (outlined): background `--color-paper-white`, text `--color-graphite`, border 1px solid `--color-graphite`, radius `--radius-sm`, same padding/font. Ghost: no background, no border, text `--color-graphite`, font `--font-ui` weight 600 at 14px.
- **Hover:** Primary lightens to `--color-slate-body` or inverts to white with dark text. Secondary inverts (fills to `--color-graphite`, text to `--color-paper-white`). Ghost: subtle background `--color-fog-surface`.
- **Focus:** Distinct focus ring using CSS variables (`outline` / `box-shadow`).
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Disables interactions, prevents double-clicks, renders a CSS spinner or animated Material Symbol without distorting button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback state styles driven by `--text-success` or `--text-error`.

### 3.2 Card Component

- **Default:** Flexible Flexbox layout, styled with subtle borders (`1px solid --border-default`) and elevation using `--bg-secondary` and CSS variables. Radius `--radius-lg` (12px) for content cards; `--radius-sm` (4px) for tags.
- **Hover:** Elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- **Focus-within:** Highlights card borders when a child link/button receives focus.
- **Loading (Skeleton):** Shimmer animation styling defined in CSS to prevent layout jumps.
- **Empty State:** Structured fallback layout featuring a Material Symbol icon and clear guidance text.

### 3.3 Form & Input Requirements

Account for states: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: Flex container wrapping a label, input field, and dedicated error feedback container. All inputs: radius `--radius-sm` (4px), border 1px `--border-default`.

### 3.4 Modal / Popup Requirements

Account for states: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions). UX features: centered flex container (`align-items: center`), backdrop overlay, Material Symbol close button, keyboard focus trapping, support for closing via `Esc` or overlay clicks.

## 4. Page Sections to Build

Build the following sections in order, each as a `<section>` with semantic HTML5:

1. **Announcement Bar** — full-bleed `--color-lilac-wash` background, ~36px height, centered text in Inter Tight 14px weight 500 `--color-graphite`. Single promotional line. Separated from nav by 1px `--color-hairline-gray` hairline.

2. **Top Navigation Bar** — `--color-paper-white` background, ~64px height, full-width with max-width 1200px content centered. Fictional logo mark on the left, nav links (Explore, Documentation, Pricing, Enterprise, Resources) in Inter Tight 14px weight 500 `--color-graphite`, Contact Sales ghost button + dark Login button on the right. Bottom border 1px `--color-hairline-gray`. Include theme toggle.

3. **Hero Section** — full-bleed `--color-sky-cyan` background, 96px top padding, 80–120px vertical padding. Headline "Generative media platform for developers." (or fictional equivalent) in Inter Tight 80px weight 700 `--color-ink-black`, letter-spacing -2.0px, line-height 0.9, constrained to ~50% page width on desktop. Subheadline in Inter Tight 16px weight 400 `--color-graphite`, max-width ~480px. Two CTAs side by side: dark filled "Get started" + white outlined "Contact Sales". Scatter pixel-art decorations (12px square blocks in `--color-pixel-lime` and `--color-lavender-pixel`) at left and right edges, positioned absolutely, overlapping content.

4. **Trust Logo Bar** — `--color-paper-white` background, 48–64px vertical padding. Horizontal row of 7 fictional company logos rendered in `--color-graphite` at consistent height ~24px, distributed evenly with flexbox `justify-between`. Below: left-aligned caption in Inter Tight 14px weight 400 `--color-slate-body`: "Trusted by over 1,500,000 developers and leading companies." Right-aligned same-size link "Enterprise Scale →".

5. **Features Section** — 3 cards in a responsive grid (3 columns desktop, 1 column mobile). Each card: `--color-paper-white` background, 1px solid `--color-hairline-gray` border, `--radius-lg` (12px), 24–32px padding. Icon (Material Symbol) at top, heading in Inter Tight 24px weight 600 `--color-ink-black`, description in Inter Tight 16px weight 400 `--color-slate-body`. Card hover: `transform: translateY(-2px)`.

6. **How It Works Section** — 3 steps in a horizontal row (stacks on mobile). Each step: numbered badge (4px radius, `--color-carbon` background, white text), heading in Inter Tight 24px weight 600, description in Inter Tight 16px weight 400 `--color-slate-body`. Connecting line between steps (1px `--color-hairline-gray`).

7. **Model Gallery Section** (optional showcase) — 4-column grid of cards with 3:4 aspect ratio portrait. Full-bleed image background (use placeholder images via `https://picsum.photos` or similar), `--radius-lg` (12px). Bottom 30% has subtle dark-to-transparent gradient overlay. Model name in Inter Tight 24–30px weight 600 `--color-paper-white`, bottom-left with 20px padding. No visible card border, no shadow.

8. **Testimonials Section** — `--color-bubblegum-pink` accent wash background (or white with pink accent blocks). 2x2 staggered grid of testimonial cards. Each card: `--color-paper-white` background, 1px solid `--color-hairline-gray` border, `--radius-lg` (12px), 24–32px padding. Top: company logo in `--color-graphite` ~24px tall. Body: quote in Inter Tight 14–16px weight 400 `--color-slate-body`, 4–6 lines. Bottom: avatar (32px square, `--radius-sm` 4px) + name in Inter Tight 14px weight 600 `--color-graphite` + title in Inter Tight 12px weight 400 `--color-ash`, horizontal with 12px gap. Scatter pixel-art decorations in lime and lavender.

9. **Pricing Section** — 3 tiers in a responsive row (stacks on mobile). Each tier card: `--color-paper-white` background, 1px solid `--color-hairline-gray` border, `--radius-lg` (12px), 24–32px padding. Tier name in Inter Tight 24px weight 600, price in Inter Tight 48px weight 700, feature list with Material Symbol check icons, CTA button (primary for recommended tier, secondary for others). Recommended tier: `--color-sky-cyan` background or `--color-fog-surface` with accent border.

10. **FAQ Section** — accordion-style. Each item: question in Inter Tight 18px weight 600 `--color-graphite`, answer in Inter Tight 16px weight 400 `--color-slate-body`. Expand/collapse via CSS transitions. Use Material Symbol `expand_more` icon. Border-bottom 1px `--color-hairline-gray` between items.

11. **Final CTA Band** — full-bleed `--color-deep-ultraviolet` background, 96px vertical padding. Centered headline in Inter Tight 36–48px weight 700 `--color-paper-white`. Dark filled button below (white text variant) reading "Start building". Overlay scattered pink `--color-bubblegum-pink` pixel-art blocks at right edge.

12. **Footer** — `--color-paper-white` background, top border 1px `--color-hairline-gray`. Multi-column layout: logo + tagline, link columns (Product, Resources, Company, Legal), social icons (Material Symbols). Bottom row: copyright text in Inter Tight 12px `--color-ash`, secondary links.

## 5. Core UX & Micro-Interaction Rules

- **Responsive by Default:** Fluid sizing and responsive breakpoints without horizontal overflow. Mobile-first.
- **Smooth Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- **Accessibility (a11y):** Sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets (accordion, modal, theme toggle), logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- **Mandatory Visual Feedback:** Every user click, hover, or submission must trigger a visible state change.
- **Destructive Actions:** Generic `.btn-danger` must be visually distinct in both light and dark themes.
- **No Shadows:** The design is intentionally flat — rely on hairline borders and color contrast for separation.
- **No Gradients on UI Elements:** Section bands use flat color fills; model cards use real images.
- **Pixel-Art Decorations:** Constructed from 8–16px square blocks in a single fill color (lime, lavender, pink, or yellow `#facc15`) with dark green `--color-forest-pixel` or cobalt `--color-cobalt-pixel` outline details. Positioned absolutely, overlapping content edges, rotating slightly. Decorative only — never used as functional UI colors.

## 6. Output Format

- **File Structure:** Separate `index.html`, `style.css`, and `script.js` files.
- **Naming Convention:** BEM (Block__Element--Modifier) throughout. Never mix conventions.
- **No Unrequested Placeholders:** Use real, invented copy for all labels, headings, and descriptions. Placeholders allowed only where content was genuinely left unspecified.
- **No Inline CSS:** Zero `style="..."` attributes in HTML.
- **No Inline SVGs:** Use Material Symbols exclusively for icons.
- **All user-facing copy in English.**

## 7. Edit Mode Note

This is a from-scratch build, not an edit. If any requested style change cannot be achieved without adding markup (e.g., a missing wrapper or icon element), stop and ask the user what they want instead of silently inserting new HTML.

## 8. Final Checklist

Before finishing, verify:
- [ ] All CSS variables defined in `:root` and dark mode.
- [ ] Dark mode toggle works with `localStorage` persistence.
- [ ] All buttons have hover, focus, active, loading, disabled states.
- [ ] All cards have hover, focus-within, loading (skeleton), empty states.
- [ ] All forms have empty, focused, filled, valid, invalid, disabled, read-only states.
- [ ] Flexbox used throughout; mobile-responsive; no horizontal scroll.
- [ ] Google Fonts (Inter Tight + Material Symbols) loaded.
- [ ] BEM naming consistent.
- [ ] No inline CSS, no inline SVGs.
- [ ] All copy is in English and fictional (no real brand names).
- [ ] `prefers-reduced-motion` respected.
- [ ] Semantic HTML5 and ARIA attributes present.
