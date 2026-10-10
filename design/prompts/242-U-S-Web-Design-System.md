## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside a dedicated `style.css` file. **No `style="..."` attributes anywhere in the HTML.**
- Target all design properties, layout rules, and states via class or ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling — changing the site's look requires modifying only the CSS file, never the markup.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` using the U.S. Web Design System palette below. Do not hardcode hex values outside `:root`:

- **Colors:** `--color-bg: #ffffff` (use `#fefefe` if a near-white is needed), `--color-surface: #f0f0f0`, `--color-surface-strong: #e6e6e6`, `--color-border: #a9aeb1`, `--color-text: #1b1b1b`, `--color-text-muted: #565c65`, `--color-primary: #005ea2`, `--color-accent: #b50909`, `--color-primary-dark: #1a4480`, `--color-focus: #2491ff`.
- **Additional tokens:** `--radius-sm: 4px`, `--radius-md: 6px`, `--radius-lg: 8px`, `--radius-pill: 999px`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard: cubic-bezier(0.2, 0, 0, 1)`, `--z-dropdown`, `--z-modal`, `--z-toast`.
- **Signature "gov band" token:** `--gov-band: linear-gradient(180deg, var(--color-primary-dark) 0%, var(--color-primary-dark) 70%, var(--color-accent) 70%, var(--color-accent) 100%)` — apply as the nav's top edge (a deep federal-blue rule with a thin red hairline) and echo it as `--trust-rule: 4px solid var(--color-primary)` on the left border of every card.
- **Contrast pairing:** every light background token pairs with dark text tokens and vice versa, in both light and dark themes.

**1.3 Mandatory Dark Mode Support**
- Define dark mode tokens under `@media (prefers-color-scheme: dark)` **and** a `.dark` class selector. Suggested dark palette: `--color-bg: #1b1b1b`, `--color-surface: #21282e`, `--color-surface-strong: #2b333a`, `--color-text: #fefefe`, `--color-text-muted: #a9aeb1`, keep `--color-primary: #58b0ff`-adjusted for contrast on dark surfaces.
- Theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle button with correct `aria-pressed` and `aria-label` state ("Switch to dark mode" / "Switch to light mode").
- The source spec does not declare light/dark modes; validate contrast in **both** modes before delivering.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox (`display: flex`).
- Every flex container **must default to `align-items: center`** unless an explicitly justified exception exists (e.g., card grids stretching equal heights — document the exception in a CSS comment).
- All layouts must be mobile-responsive out of the box: multi-column rows (features, pricing, steps) convert to single columns on small viewports. No horizontal scrolling at any width.

**1.5 Framework Default**
- Use Tailwind CSS (or clean custom CSS via `@layer` / `@apply`) unless otherwise needed; all utility classes must map back to the CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load **Public Sans** from Google Fonts for both `--font-base` and `--font-display` (this is the USWDS official typeface); load **Roboto Mono** for `--font-mono` if needed.
- Use **Google Material Symbols** for all icons. **Explicitly forbidden: raw inline SVGs or local icon files.**
- All user-facing copy must be written in **English**, in plain-language style (short sentences, no jargon) consistent with U.S. federal government communication guidelines.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px. Primary variant: solid `--color-primary` background, white text, `border-bottom: 3px solid var(--color-accent)` (the trust rule under primary buttons).
- **Hover:** background shift toward `--color-primary-dark`, `cursor: pointer`.
- **Focus:** distinct `outline: 3px solid var(--color-focus); outline-offset: 2px;` ring for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** disables interactions, prevents double-clicks, renders a CSS spinner or animated Google Icon without distorting button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`.

**2.2 Cards (Features, Pricing tiers, Testimonials)**
- **Default:** Flexbox layout, `background: var(--color-surface)`, `border-left: var(--trust-rule)`, `box-shadow: var(--shadow-sm)`, `border-radius: var(--radius-sm)`.
- **Hover:** elevation shift to `--shadow-md` or subtle `transform: translateY(-2px)` (if interactive).
- **Focus-within:** highlight card borders when a child link/button receives focus.
- **Loading (Skeleton):** shimmer animation defined in CSS to prevent layout jumps.
- **Empty State:** structured fallback with a Google Icon and clear guidance text.

**2.3 Forms & Inputs (Final CTA email capture, if included)**
- **States:** Empty, Focused (focus ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- **Structure:** Flex container wrapping a label, input field, and dedicated error feedback container.

**2.4 FAQ Accordion**
- **States:** Opening, Open, Closing — animated via CSS transitions (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- **A11y:** semantic `<details>`/`<summary>` or ARIA `button` + `region` pattern with `aria-expanded`, `aria-controls`; full keyboard operability.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid sizing, no horizontal overflow at any breakpoint.
- **Smooth animations:** CSS transitions on all state changes, respecting `prefers-reduced-motion`.
- **Accessibility (a11y) — Section 508 / trust-first is the core identity of this theme:** sufficient contrast in both light and dark modes; never rely solely on color to communicate state; semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`); correct ARIA roles/labels on custom widgets; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- **Mandatory visual feedback:** every click, hover, or submission triggers a visible state change.
- **Destructive actions:** `.btn-danger` or delete actions must be visually distinct (use `--color-accent: #b50909`) in both light and dark themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File structure:** separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference.
- **Naming convention:** one consistent convention (BEM, e.g., `.btn--primary`, `.card__title`) across the entire deliverable — never mix conventions.
- **No unrequested placeholders:** write real, plain-language English copy for every section; no lorem ipsum.
- **Sections required (in order):**
  1. **Hero** — headline, subheadline, primary CTA button, secondary link-button; gov band rule along the top of the page.
  2. **Features** — 3 cards, each with a Google Material Symbol icon, title, and description.
  3. **How It Works** — 3 numbered steps with connecting visual rhythm.
  4. **Testimonials** — quote cards with attribution.
  5. **Pricing** — 3 tiers; middle tier visually emphasized (badge: "Most popular"); each with a CTA button.
  6. **FAQ** — accessible accordion, 5–6 plain-language questions.
  7. **Final CTA** — full-width band using `--color-primary-dark` background with light text and a primary action button.
  8. **Footer** — secondary links in multiple columns, plain-language legal/privacy links, and the theme toggle must remain reachable in the header nav.
- **Theme identity:** flat, high-legibility, trust-first federal aesthetic — Public Sans typeface, government blue/red/neutral palette, the signature gov band (deep blue + red hairline) on the nav top edge and card left borders, and subtle shadows only (`--shadow-sm`/`--shadow-md`), never heavy depth effects.
