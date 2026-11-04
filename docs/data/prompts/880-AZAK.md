# Landing Page Build Prompt — AZAK-Inspired Expedition Vehicle Style

You are a frontend coding AI. Build a complete, production-ready landing page in a dark, technical, dossier-like aesthetic inspired by an expedition-vehicle brand. **Do not use the real brand name "AZAK", its logo, trademarks, or product names anywhere.** Invent a fictional brand name, product name, and all copy. All user-facing copy must be in English.

## 1. Architecture & File Structure

- Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere.
- Use semantic HTML5 elements. Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- All styling lives strictly inside `style.css`. Target elements via class/ID selectors only.
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 2. CSS Variables & Theme Tokens

Define all tokens inside `:root` and a `.dark` class / `@media (prefers-color-scheme: dark)` block. Dark mode is mandatory and must switch seamlessly without HTML restructuring. User theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit; provide a visible toggle control with correct `aria-pressed` / `aria-label` state.

Colors:
- `--color-ultra-light-azak-grey: #f8f7f3` (light editorial canvas, reversed text, navigation text, feature-tile text, fine underlines)
- `--color-dark-azak-black: #121211` (primary page field, dark section surface, dark text on pale product stage, footer base)
- `--color-medium-azak-grey: #85837e` (secondary explanatory copy, inactive feature labels, metadata, legal text)
- `--color-terrain-slate: #3a4a49` (contained product-render backdrop, muted dark visual surface)

Also define the generic semantic tokens for contrast pairing in both themes: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Any light background token must pair with a dark text token and vice versa for every theme.

Light mode background must not default to pure white; where a white/near-white is needed use `#fefefe` instead of `#ffffff`.

Additional tokens:
- `--radius-sm: 0px; --radius-md: 0px; --radius-lg: 0px;` (all observed text controls square at 0px radius)
- `--shadow-sm`, `--shadow-md` (flat elevation — separation comes from surface changes and 1px rules, not shadows)
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`
- `--font-base` bound to the Google Font below.

Typography: Use Google Fonts only. Include `<link>` for FT Aktual substitute — use `Arial, Helvetica Neue, sans-serif` fallback stack via `--font-ft-aktual`. Load weights 300, 400, 500. Define type-scale tokens:
- `--text-microcopy`: 400 / 10px / 1.3
- `--text-caption`: 400 / 14px / 1.3
- `--text-body`: 400 / 16px / 1.4
- `--text-feature-tile`: 400 / 16px / 1.2
- `--text-body-strong`: 500 / 16px / 1.4
- `--text-product-support`: 300 / 20px / 3.33
- `--text-section-intro`: 300 / 30px / 1.1
- `--text-display`: 300 / 45px / 1.0
- `--text-product-code`: 300 / 68px / 1.0

Spacing: base unit 6px. Scale tokens `--spacing-6: 6px`, `--spacing-18: 18px`, `--spacing-36: 36px`, `--spacing-72: 72px`, `--spacing-144: 144px`. Section gap 144px; card padding 18px; element gap 4px.

Icons: Use Google Material Symbols/Icons only. Forbid raw inline SVGs or local icon files.

## 3. Layout & Flexbox Rules

- Build all layout structures using Flexbox (`display: flex`). Every flex container must default to `align-items: center` unless an explicitly justified exception.
- Mobile-first: all flex layouts must be responsive out of the box, converting rows to columns on smaller viewports. Prevent horizontal scrolling.
- Full-bleed vertical narrative. Compact dark header, screen-dominant photographic hero with headline at lower left. Pale split section with contained product render left and generous empty text field right. Dark editorial bands. Six-column horizontal feature-selector row anchored at bottom. Content spacious: major section padding ~144px, tighter dark-section spacing ~72px. No visible card grid or boxed dashboard layout.
- No rounded corners anywhere (0px radius on buttons, tiles, image frames, tags, navigation controls).

## 4. Component Specifications

### Transparent Site Header
Persistent top navigation over dark hero. `#121211` header field, `#f8f7f3` wordmark, 16px/22.4px FT Aktual weight 400 navigation. Links unboxed, 18px horizontal internal spacing, 4px–17px local gaps. Include a theme toggle with correct ARIA state.

### Hero Image Field
Full-bleed opening statement over a darkened expedition/vehicle photograph. Image content beneath a near-black `#121211` veil so `#f8f7f3` display text stays dominant. Headline in FT Aktual 300, 45px/45px. Position a small underlined text link nearby (not a filled control). Use a placeholder image URL for the hero photograph.

### Underlined Exploration Link
`#f8f7f3` text on `#121211`, no fill, no radius, 1px `#f8f7f3` bottom rule. 3px vertical spacing between text and underline. All states (hover, focus, active) styled via CSS classes.

### Split Product Introduction
Equal visual halves: Terrain Slate `#3a4a49` render field at left, Ultra Light Azak Grey `#f8f7f3` text field at right. Dark Azak Black `#121211` for the 30px weight-300 statement, Medium Azak Grey `#85837e` for supporting phrase. Use a placeholder image for the product render.

### Product Series Marker
Oversized product-code treatment within pale product section. Product identifier in Dark Azak Black `#121211`, FT Aktual 300 at 68px/68px. Secondary product-status text in 20px weight 300. Sparse pale `#f8f7f3` surface.

### Black Editorial Feature Section
`#121211` full-width field with `#f8f7f3` 45px/45px weight-300 heading at upper left. 16px/22.4px weight-400 explanatory copy in a separate upper-right column. Leave central field intentionally open — do not fill with extra cards, statistics, or ornamental graphics.

### Feature Selector Tile (3 cards in Features section)
Transparent background, 0px radius, 18px left/right padding, 18px top padding, 0px bottom padding. 1px top border in `#f8f7f3`. Active title and description in `#f8f7f3`; inactive tiles use `#85837e`. Feature Tile Copy Stack: title in FT Aktual 16px weight 400, supporting line below with 8px internal gap, left aligned, constrained to tile column. No icon containers or colored state fills.

### How It Works (3 steps)
Present as a horizontal row on dark `#121211` field. Each step: a small step number in `#85837e` microcopy, a title in `#f8f7f3` 16px weight 400, and a short description in `#85837e` 16px weight 400. Separated by 1px `#f8f7f3` rules or generous spacing. No cards, no shadows.

### Testimonials
On `#121211` field. Quote text in `#f8f7f3` 300 weight at 20px or 30px, attribution in `#85837e` 16px weight 400. Simple, no card containers, no avatars with rounded frames. Use Google Material Symbols for quote marks if needed.

### Pricing (3 tiers)
On `#f8f7f3` pale stage. Three columns separated by 1px `#121211` vertical rules (no cards, no shadows). Tier name in `#121211` 16px weight 500, price in `#121211` 45px weight 300, feature list in `#85837e` 16px weight 400, CTA as underlined exploration link style. Highlight recommended tier with a 1px `#121211` top rule or subtle emphasis — no filled badges.

### FAQ
On `#121211` field. Questions in `#f8f7f3` 16px weight 400, answers in `#85837e` 16px weight 400. Use native `<details>`/`<summary>` or minimal JS toggle. No card containers. 1px `#f8537e`-free hairline rules between items (use `#f8f7f3` at low opacity or `#85837e`).

### Final CTA
Full-width `#121211` band. Large statement in `#f8f7f3` 45px weight 300 at left, underlined exploration link at right. 144px vertical padding.

### Minimal Legal Footer
`#121211` with 68px top padding, 30px bottom padding. Legal and secondary links in `#85837e`, retaining `#f8f7f3` only for priority footer navigation. No social icons beyond Google Material Symbols if needed.

## 5. Button & Interactive Component States

All states styled via CSS classes only:
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`), min touch target 44x44px, 0px radius.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables for keyboard navigation.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback driven by `--text-success` / `--text-error`.

Card (if interactive): default flexible flexbox with subtle borders and elevation via `--bg-secondary`; hover elevation/shadow shift or `transform: translateY(-2px)`; focus-within highlights borders; loading skeleton shimmer; empty state with Google Icon and guidance text.

Form & Input (if any): states empty, focused (outline ring), filled, valid, invalid, disabled, read-only. Flex container wrapping label, input, error feedback.

Modal (if any): opening/open/loading/success-error/closing animated via CSS transitions; centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 6. Core UX & Micro-Interactions

- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes. Never rely solely on color to communicate state. Semantic HTML5, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.
- Responsive by default, fluid sizing, no horizontal overflow.

## 7. Do's and Don'ts

Do:
- Use `#121211` as dominant field, reserve `#f8f7f3` for text, pale product stages, and hairline rules.
- Set principal statements in FT Aktual weight 300 at 45px/45px.
- Use FT Aktual 16px/22.4px weight 400 for global navigation and standard explanatory copy.
- Keep all observed text controls square at 0px radius.
- Build feature-selector tiles with 18px left/right padding, 18px top padding, 0px bottom padding, and `#f8f7f3` top border.
- Use 144px vertical section padding for major narrative transitions and 72px for tighter dark-section spacing.
- Use `#85837e` only for secondary content on `#121211`; do not place it as small text on `#f8f7f3`.

Don't:
- Do not introduce saturated interface accents, gradients, or colored button fills.
- Do not use bold display headings; keep primary display copy at FT Aktual weight 300.
- Do not round buttons, tiles, image frames, tags, or navigation controls beyond 0px radius.
- Do not turn the exploration link into a filled `#f8f7f3` button.
- Do not place feature content inside raised cards or add shadowed panels.
- Do not use `#85837e` as a primary heading or navigation color.
- Do not fill the open central space of dark editorial sections with extra cards, statistics, or ornamental graphics.

## 8. Imagery & Surfaces

Imagery is sparse but dominant: full-bleed, dark, low-key field photography for the hero (use placeholder image URLs), large contained photorealistic 3D product renders against muted blue-green ground for the split section. Photography and renders occupy more visual space than text but remain subdued under dark overlays or restrained studio lighting. Visible interface iconography is effectively absent.

Surfaces (flat, no shadows):
- Level 0: Dark Azak Black `#121211` — primary page canvas, hero veil, editorial sections, footer.
- Level 1: Terrain Slate `#3a4a49` — product-render field.
- Level 2: Ultra Light Azak Grey `#f8f7f3` — pale product specification stage.

Elevation: interface layers stay flat. Separation comes from full-bleed surface changes, image contrast, and 1px rules rather than box shadows, floating cards, or inset depth.

## 9. Deliverable Notes

- Invent a fictional brand name, product name, and all copy. Never use the real brand name, logo, trademarks, or product names.
- Use placeholder image URLs (e.g., `https://placehold.co/...`) for all photography and renders.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content is genuinely unspecified.
- Ensure the page includes all requested sections: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
