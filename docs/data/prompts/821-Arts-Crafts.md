# BUILD SPECIFICATION — ARTS & CRAFTS LANDING PAGE (William Morris Revival, 1880s–1910)

**Your Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready landing page on the first attempt. Every rule below is mandatory and must not be dropped, relaxed, or silently omitted.

**Theme & Visual Direction:** Arts & Crafts movement (William Morris, John Ruskin; Morris & Co. wallpapers; Kelmscott Press). Keywords: intricate botanical patterns and repeats, handcraft over machine production, earthy natural palettes, ornamental borders, medieval revival typography, historical. The page must feel like a hand-printed Kelmscott volume: parchment surfaces, deep umber ink, Morris red and sage accents, thick double rules, and a repeating diagonal "leaf-stitch" band motif. **Note from the source specification (translated):** it declares no color modes — therefore you must define and validate BOTH light and dark modes before publishing.

**Page Structure (build these sections, in this order):**
1. **Header/Nav** — wordmark in display type, anchor links to each section, dark-mode toggle, primary CTA button, ornamental bottom border.
2. **Hero** — double-framed ornamental panel: badge, a single `<h1>` in medieval revival display type, supporting copy, two buttons (primary + secondary), botanical repeat band. Any pattern behind text must be subtle or confined to edges so contrast stays ≥ 4.5:1 in both modes.
3. **Features** — exactly 3 cards, each with a Google Material Symbol, title, and copy.
4. **How It Works** — exactly 3 numbered steps (Roman numerals I–III in display type) connected by a leaf-stitch rule (vertical rule on mobile).
5. **Testimonials** — at least 3 quote cards, each with a CSS monogram medallion (ornamental circle with initials — no external images), quote, name, and role.
6. **Pricing** — exactly 3 tiers; the middle tier is visually highlighted with a badge.
7. **FAQ** — an accordion of at least 5 items built from native `<details>`/`<summary>`, working with zero JavaScript.
8. **Final CTA** — newsletter email capture (input + submit button) with full state design.
9. **Footer** — secondary link columns, Material Symbol social icons with `aria-label`s, small print, ornamental top border.

All user-facing copy must be written in **English** — concise, on-theme (e.g., hero headline such as "Crafted by Hand, Built to Endure"; suggested pricing tier names: Apprentice / Journeyman / Guild Master). No lorem ipsum anywhere.

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
* Target every element via class or ID selectors only.
* HTML remains semantic and clean (`header`, `nav`, `main`, `section`, `article`, `footer`), agnostic of visual styling so the theme can be re-skinned from the CSS file alone.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
* Reproduce this condensed Arts & Crafts token sheet as the base `:root` (reference spec: `references/00-flagship-implementation-specs/arts-and-crafts.md`):

```css
:root {
  --color-bg: #ece2cd; --color-surface: #fbf5e6; --color-surface-strong: #e3d3ac;
  --color-border: #6b4a2b; --color-text: #2b2013; --color-text-muted: #5c4a30;
  --color-primary: #7a2e2e; --color-accent: #4a6741;
  --radius-sm: 3px; --radius-md: 4px; --radius-lg: 6px; --radius-pill: 4px; /* handcraft: soft, never a perfect pill */
  --shadow-sm: 0 1px 3px rgba(43,32,19,.2); --shadow-md: 0 4px 10px rgba(43,32,19,.22); --shadow-lg: 0 10px 22px rgba(43,32,19,.26);
  --font-sans: 'Crimson Text','EB Garamond',Georgia,serif;
  --font-display: 'IM Fell English','Crimson Text',Georgia,serif;
  --text-xs: .75rem; --text-sm: .875rem; --text-base: 1rem; --text-lg: 1.125rem; --text-xl: 1.375rem;
  --text-2xl: 1.75rem; --text-3xl: 2.25rem; --text-4xl: 3rem; --text-5xl: 4rem;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --ease-standard: ease-out;
  --leaf-repeat: repeating-linear-gradient(135deg, var(--color-accent) 0 3px, transparent 3px 14px);
  --border-frame: 3px double var(--color-border);
}
```

* **Extend it with the mandatory semantic tokens and aliases:** `--primary: var(--color-primary); --secondary: var(--color-accent); --bg-primary: var(--color-bg); --bg-secondary: var(--color-surface); --text-primary: var(--color-text); --text-secondary: var(--color-text-muted); --text-success: #3f5c38; --text-error: #9c3434; --border-default: var(--color-border); --border-success; --border-error; --spacing-gap: var(--space-4); --transition-fast: 150ms; --transition-normal: 250ms; --z-dropdown: 100; --z-modal: 200; --z-toast: 300`.
* **Contrast pairing:** every light background token (`#ece2cd`, `#fbf5e6`, `#e3d3ac`) pairs only with dark text tokens (`#2b2013`, `#5c4a30`); every dark background token pairs with parchment text — enforced per theme, not just the default. Verify success/error tokens against surfaces (≥ 4.5:1) and adjust per mode if needed.
* The light background is never pure white — keep the parchment `#ece2cd`; if a near-white is ever required, use `#fefefe`, never `#ffffff`.

**1.3 Mandatory Dark Mode Support**
* Define a full dark palette under both `@media (prefers-color-scheme: dark)` and a `.dark` class (class takes precedence). Derive aged-umber equivalents, e.g.: `--color-bg: #211a11; --color-surface: #2b2013; --color-surface-strong: #3b2d1b; --color-border: #a5875c; --color-text: #ece2cd; --color-text-muted: #bda984; --color-primary: #9c4444; --color-accent: #8fae7d;` plus dark-adapted success/error tokens and deeper shadows (e.g., `rgba(0,0,0,.45)`-based). `--leaf-repeat` and `--border-frame` re-derive automatically from the variables.
* Background and text variables must switch with no HTML restructuring; add a smooth `background-color`/`color` transition.
* **Persistence:** store the user's choice in `localStorage` (e.g., key `theme`), fall back to `prefers-color-scheme` on first visit, and render a visible toggle in the nav (Material Symbol `dark_mode` / `light_mode`) with correct `aria-pressed` and `aria-label` state.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox.
* **Every flex container defaults to `align-items: center`** unless an exception is explicitly justified with a CSS comment (e.g., stacked card bodies may use `flex-start`).
* Mobile-first: nav links, feature grid, steps, testimonials, and pricing tiers must stack into single columns on small viewports; no horizontal scrolling at any width; fluid type via `clamp()` is encouraged; ornamental bands must never cause overflow.

**1.5 Framework Default & Tailwind CSS Integration**
* Primary styling is hand-written component CSS in `style.css` built on the token sheet (`.nav`, `.btn`, `.btn--primary`, `.card`, `.input`, `.badge`). Tailwind CSS may be used for layout utilities only, and any `@apply` usage must map back to the CSS variables.
* Enforce one naming convention — BEM (`block__element--modifier`), matching the token sheet's `.btn--primary` pattern — across the entire deliverable. Never mix conventions.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load **Google Fonts** via `<link>` (with `preconnect`): *IM Fell English* (display) and *Crimson Text* + *EB Garamond* (body serifs), bound to `--font-display` and `--font-sans`. Headlines use `--font-display` (medieval revival); body copy uses `--font-sans`.
* Icons: **Google Material Symbols (Outlined)** via the official stylesheet. Raw inline SVGs and local icon files are forbidden.
* All botanical ornament must be pure CSS: the `--leaf-repeat` stitch band, `--border-frame` double rules, layered `repeating-linear-gradient` patterns, and pseudo-element flourishes. No SVG decoration.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component Requirements** — base `.btn` per the token sheet (flex; `align-items: center; justify-content: center; gap: 0.5rem`; minimum touch target 44×44px; 2px solid border; `--radius-md`; `--shadow-sm`; transitions on `transform`/`box-shadow` using `var(--transition-fast)` and `--ease-standard`):
* **Default:** parchment surface, umber text; `.btn--primary` = Morris red background with `#f7ecd8` text.
* **Hover:** `translateY(-1px)` + `--shadow-md` + subtle brightness shift; `cursor: pointer`.
* **Focus:** `:focus-visible` shows a distinct ring — `outline: 2px solid var(--color-accent); outline-offset: 2px` — clearly visible in both themes.
* **Active/Pressed:** `transform: scale(0.97)`. *(Exception clause: the reference stylesheet's `.btn:active { transform: translateY(0) }` is superseded — the pressed state must include `scale(0.97)`.)*
* **Loading (`.is-loading`):** sets `aria-busy="true"`, blocks interaction and double-clicks, and renders a CSS-only spinner (a `currentColor` border spinner or a rotating Material Symbol `progress` glyph) that does not change the button's dimensions.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`, no hover/active transforms.
* **Success/Error:** `.btn--success` / `.btn--error` temporary feedback states driven by `--text-success` / `--text-error` (paired backgrounds/borders), always accompanied by an icon or label change — never color alone.

**2.2 Card Component Requirements** — used for Features, Testimonials, and Pricing (`.card`: `--color-surface` background, `--radius-lg`, `--border-frame` double border, signature top `border-image: var(--leaf-repeat) 8`, `--shadow-md`, flexible Flexbox layout):
* **Default:** title/copy spacing from `--space-*` tokens.
* **Hover:** interactive cards (pricing tiers) elevate — `translateY(-2px)` + `--shadow-lg`; static cards receive a gentler shadow shift.
* **Focus-within:** when a child button/link is focused, the card border shifts to `--color-primary`.
* **Loading (Skeleton):** define `.card--skeleton` with a CSS shimmer animation that causes no layout jumps (for any async region).
* **Empty State:** any dynamic region that can be empty must show a fallback with a Material Symbol and guidance text.
* **Pricing highlight:** the middle tier gets a thicker ornamental frame, a `.badge` ("Guild's Choice" or "Most Popular"), and `--color-primary` framing; it must remain distinct in dark mode.

**2.3 Form & Input Requirements** — newsletter capture in the Final CTA (base `.input` per the token sheet):
* **Structure:** `.input-group` flex container wrapping a `<label>`, the `.input` field, and a dedicated error/feedback container with `aria-live="polite"`.
* **States:** empty (muted placeholder), focused (`--color-primary` border + `0 0 0 3px rgba(122,46,46,.18)` ring — re-derive the ring color for dark mode), filled, valid (success border + `check` Material Symbol), invalid (error border, error text, `error` icon + message in the live region), disabled, read-only.
* **Submit flow:** idle → loading (button loading state, double-submit prevented) → success (`.btn--success` + inline confirmation with icon in the `aria-live` region) or error (inline message — never a browser `alert()`).

**2.4 Modal / Popup Requirements** — the section list requires no modal, and none may be added unrequested. *(Exception clause: only if a modal becomes genuinely unavoidable, it must be a centered flex overlay — `align-items: center` — with a backdrop, animated opening/closing via CSS transitions, a Material Symbol close button, keyboard focus trapping, `Esc`/overlay-click dismissal, and opening/open/loading/success/error/closing states.)*

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid sizing, breakpoints that stack grids into columns, zero horizontal overflow; ornamental bands must never introduce overflow.
* **Smooth animations:** transitions (`var(--transition-fast)` / `var(--transition-normal)`, `--ease-standard`) on all state changes; extend the token sheet's `prefers-reduced-motion: reduce` block to disable ALL animation — shimmer, spinner, leaf-band motion, and accordion transitions. If smooth anchor scrolling is used, disable it under reduced motion.
* **Accessibility (a11y):** verified contrast in light (dark ink on parchment) and dark (parchment on umber) modes; never rely on color alone to communicate state; semantic HTML5; a single `<h1>` in the hero with a logical h2/h3 hierarchy; a skip-to-content link; visible `:focus-visible` rings everywhere (including `<summary>` and footer links); full keyboard operability — the FAQ uses native `<details>`/`<summary>` with the default marker removed, the summary styled as a button row, and an `expand_more` Material Symbol rotated open via CSS only; `aria-live` regions for all dynamic feedback; correct ARIA roles/labels on the theme toggle and any custom widget.
* **Mandatory visual feedback:** every click, hover, and submission produces a visible state change.
* **Destructive actions:** none are expected on this page; if any appear, `.btn--danger` must be visually distinct in both light and dark themes.

## 4. DELIVERABLE & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, and `script.js`. The HTML may contain only a single `<script src="script.js" defer>` reference — no inline script blocks, no inline styles. `script.js` handles only: the theme toggle with `localStorage` persistence, and the newsletter submit flow (loading → success/error). The FAQ must function with zero JavaScript.
* **Naming:** BEM (`block__element--modifier`) throughout the deliverable; no mixing with other conventions.
* **Content:** real, on-theme English copy for every section — the user supplied the section list, not lorem-ipsum placeholders; placeholders are permitted only where content is genuinely unspecified.
* **Validation before publishing:** verify both light and dark modes, all component states, keyboard-only navigation, and mobile viewports.
