# CODING-AI PROMPT — LANDING PAGE: "SYNE TYPOGRAPHY"

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready landing page on the first attempt. The theme is **"Syne Typography"** — a Typography-Driven, Modern Experimental design in the voice of an art center / experimental type foundry. Per the source specification, the page ships in **full dark mode only** (Light ✗ / Dark ✓).

**Objective:** Deliver `index.html`, `style.css`, and `script.js` implementing: sticky Header/nav, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, and Footer with secondary links. All user-facing copy must be written in **English**.

---

## 1. THEME DIRECTION & DESIGN TOKENS

**1.1 Art Direction**
- Category: Typography-Driven. The entire design is built from type scale, weight, whitespace, hairline rules, and oversized numerals — **no photography, no illustrations, no gradients**. Graphic accents must be CSS-only (hairlines, index labels, outlined ghost text, numerals).
- Voice: confident, editorial, experimental — art-center/gallery tone.
- **All text on the page is strictly left-aligned** (headlines, cards, pricing, testimonials, footer). Never center-align text content.
- Hero visual: 2D isolated typography on a solid background — white Syne text on solid `#0B2B43`, tight tracking, 90% leading, left-aligned, the text block centered within the viewport, occupying roughly 50–60% of the hero scale.

**1.2 Color Tokens (define on `:root`)**
- `--primary: #FFFFFF` (foreground / CTA surface color); `--secondary: #0B2B43` (deep navy canvas)
- `--bg-primary: #0B2B43`; `--bg-secondary: #123A5A` (elevated navy surface)
- `--text-primary: #FFFFFF`; `--text-secondary: rgba(255, 255, 255, 0.72)`
- `--text-success: #4ADE80`; `--text-error: #FF7A7A`; `--border-success: rgba(74, 222, 128, 0.5)`; `--border-error: rgba(255, 122, 122, 0.5)`; `--border-default: rgba(255, 255, 255, 0.16)`
- **Contrast pairing (mandatory):** every dark navy surface pairs with white/light text; every near-white surface (primary buttons, featured pricing tier) pairs with `#0B2B43` text. Never violate this pairing.
- **Near-white surfaces:** where a white surface is required, use `#fefefe`, never `#ffffff`. Pure `#FFFFFF` is permitted for text only.

**1.3 Typography Signature (mandatory)**
- Load **Syne** from Google Fonts (weights 400;500;600;700;800) via `<link>`. Bind `--font-base: 'Syne', sans-serif` and use Syne for **all** text on the page.
- Canonical display treatment — apply to every display heading (H1–H2) and oversized numeral:
```css
font-family: 'Syne', sans-serif;
color: var(--text-primary);
font-weight: 700;
letter-spacing: -0.04em;
line-height: 0.9;
```
- Body copy: weight 400–500, `line-height: 1.6`, `letter-spacing: normal`, color `var(--text-secondary)` — readable leading is required for paragraphs; the 0.9 leading is reserved for display type.
- Micro-labels (eyebrows, index labels, nav items, button labels, attributions): uppercase, weight 600, `letter-spacing: 0.1em`, `--text-micro` sizing.
- Fluid type scale via `clamp()`: `--text-display: clamp(3.25rem, 9vw, 8rem)`, `--text-h2: clamp(2.25rem, 5vw, 4.25rem)`, `--text-h3: clamp(1.5rem, 3vw, 2.25rem)`, `--text-body: clamp(1rem, 1.1vw, 1.125rem)`, `--text-small: 0.875rem`, `--text-micro: 0.75rem`.

**1.4 Layout Tokens**
- `--radius-sm: 2px; --radius-md: 4px; --radius-lg: 8px` (sharp, graphic corners)
- `--shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.35); --shadow-md: 0 12px 32px rgba(0, 0, 0, 0.45)`
- `--spacing-gap: clamp(1.25rem, 3vw, 2rem)`
- `--transition-fast: 150ms; --transition-normal: 300ms; --ease-standard: cubic-bezier(0.22, 1, 0.36, 1)`
- `--z-dropdown: 100; --z-modal: 200; --z-toast: 300`

---

## 2. STRICT RULES & ARCHITECTURE

**2.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **Forbidden:** any `style="..."` attribute in HTML.
- Target everything via class or ID selectors. HTML stays semantic and styling-agnostic — changing the look must never require markup edits.

**2.2 CSS Variables Only**
- Every color, radius, shadow, spacing, transition, and z-index value must be consumed as `var(--...)`. No hard-coded values inside component rules (the `:root` token definitions themselves excepted).

**2.3 Mandatory Dark Mode — Dark-Only Exception**
- Dark mode is the default and **only** theme: define all dark token values directly on `:root`.
- **Explicit exception:** per the Syne Typography specification (Light ✗ / Dark ✓ Full), do **not** build a light theme, a `.dark` class, a `prefers-color-scheme` light variant, or a theme toggle; the toggle/`localStorage` persistence requirement is waived. Keep the architecture fully variable-driven so a light theme could be added later via CSS alone.

**2.4 Flexbox Layout & Mobile-First**
- Build every layout structure with Flexbox. **Every flex container defaults to `align-items: center`** unless an exception is explicitly justified. Documented exceptions: card/pricing grids may use `align-items: stretch` for equal-height columns.
- Mobile-first: multi-column rows (features, steps, testimonials, pricing, footer columns) collapse to a single column on small viewports via `flex-wrap` and media queries. **No horizontal scrolling at any width.**

**2.5 Framework Default & Tailwind Integration**
- Default to Tailwind CSS (CDN or build) with all custom component classes defined in `style.css` via `@layer` / `@apply`, every utility mapped back to the CSS variables. If no framework build is available, deliver clean hand-authored CSS organized in the same layered structure (tokens → base → components → utilities).
- Define generic reusable classes — `.btn`, `.card`, `.input-group`, `.section`, `.container` — and reuse them; never restyle per-instance.
- The Tailwind CDN `<script src>` (if used) is permitted in addition to the single deferred `script.js` entry point.

**2.6 Typography & Icons (Google-only)**
- Text: Google Fonts **Syne** via `<link>` (see 1.3). Icons: **Google Material Symbols (Outlined)** via the official `<link>`, rendered with the `<span class="material-symbols-outlined">` pattern.
- **Forbidden:** raw inline SVGs, local icon files, emoji used as icons, and icon libraries from any other source.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

**3.1 Buttons** — all states via CSS classes:
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px. Variants: `.btn--primary` (near-white `#fefefe` surface, `#0B2B43` text) and `.btn--ghost` (transparent, 1px `var(--border-default)` border, white text). Labels in uppercase micro-label style.
- **Hover:** visible shift (brightness change and/or `--shadow-sm`), `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring using `outline` with `var(--primary)` and offset — keyboard navigation must be obvious.
- **Active:** `transform: scale(0.97)` click feedback.
- **Loading:** `.btn--loading` disables interaction (pointer-events + `aria-busy`), renders a spinning Material Symbol (`progress`) or CSS spinner, and must not change button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale filter, `cursor: not-allowed`.
- **Success/Error:** `.btn--success` / `.btn--error` temporary feedback styles driven by `--text-success` / `--text-error`.
- **Danger:** `.btn-danger` must be visually distinct in the dark theme (error-red border and text).

**3.2 Cards** (Features, Testimonials, Pricing tiers):
- **Default:** flexible flex-column layout, `--bg-secondary` or transparent with 1px `var(--border-default)`, `--radius-md`, generous padding, `transition: var(--transition-normal)`.
- **Hover:** `transform: translateY(-2px)` plus shadow/border shift on interactive cards; static cards get a border-color shift only.
- **Focus-within:** border highlights toward `var(--primary)` when a child link/button receives focus.
- **Loading (skeleton):** define `.card--skeleton` with a shimmer keyframe animation that preserves final dimensions — no layout jump.
- **Empty state:** structured fallback with a Material Symbol icon and clear guidance text.

**3.3 Forms & Inputs** (conditional — apply to any text input the design includes, e.g., an email capture; do not add forms beyond what the design calls for):
- **States:** empty, focused (outline ring via variables), filled, valid (success border + check icon), invalid (error border, `--text-error` message, error icon), disabled, read-only.
- **Structure:** flex-column `.input-group` wrapping `<label>`, the field, and a dedicated error container wired to `aria-live="polite"` and `aria-describedby`.

**3.4 Modal / Popup** (conditional — the FAQ must NOT use a modal):
- The FAQ is an inline accordion. If any modal is introduced elsewhere, it must implement: opening / open / loading / success / closing states animated via CSS transitions; centered flex container (`align-items: center`); backdrop overlay; Material Symbol close button; keyboard focus trap; close via `Esc` and overlay click; correct `role="dialog"`, `aria-modal`, and focus restoration on close.

---

## 4. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` sizing, no horizontal overflow, media-query breakpoints.
- **Smooth animations:** every state change transitions with `transition: var(--transition-normal)`; fully respect `prefers-reduced-motion: reduce` (disable transforms, spins, shimmer, and smooth scrolling).
- **Accessibility:** maintain WCAG-AA contrast in the dark theme (verify every token pair, including `--text-secondary` on navy). Never communicate state by color alone — pair color with icon or text. Use semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`), correct ARIA roles/labels on custom widgets (accordion buttons with `aria-expanded` + `aria-controls`), logical DOM/focus order, full keyboard operability, a skip-to-content link, and `aria-live` regions for dynamic feedback.
- **Mandatory visual feedback:** every hover, click, and submission produces a visible state change (nav underline offsets, button states, card lifts, accordion motion).
- **Anchors & nav:** smooth-scroll to section anchors; the sticky header must not trap focus.

---

## 5. PAGE BUILD SPECIFICATION

Build in order, with real English copy in the art-center voice. Invent one coherent fictional brand (e.g., an experimental type foundry or design studio) and write all headlines, body copy, testimonial names/roles, pricing tiers, and FAQ entries for it. **No lorem ipsum anywhere.**

1. **Header (sticky):** wordmark in Syne 800; anchor nav links (Features, How It Works, Testimonials, Pricing, FAQ); one `.btn--primary` CTA; accessible mobile menu (Material Symbol `menu` button with `aria-expanded`/`aria-controls`, flex-column panel, closes on `Esc` and link click).
2. **Hero:** full-viewport solid `var(--bg-primary)`; isolated typographic composition — uppercase eyebrow, display headline at `--text-display` with the canonical treatment (Syne 700, `-0.04em`, `0.9` line-height, strictly left-aligned), one supporting line in `--text-secondary`, and two CTAs (`.btn--primary` + `.btn--ghost`). The text block is centered in the viewport and spans ~50–60% of its scale. Optional CSS-only graphic accent (hairline rule or oversized outlined numeral).
3. **Features (3 cards):** section header with index label ("01 — Features" micro-label style) + H2; three `.card` components in a flex row (wrapping to a single column on mobile), each with a Material Symbol icon, H3, and copy; hover border/elevation shift.
4. **How It Works (3 steps):** three steps marked by oversized Syne numerals (01 / 02 / 03) used as graphic elements, hairline rules between steps, left-aligned H3 + copy; flex row → column.
5. **Testimonials:** three quote blocks — large quote text in Syne 500–600, attribution in micro-label style (name + role), hairline separators; flex row → column.
6. **Pricing (3 tiers):** three `.card` tiers; the middle tier is `.card--featured` — inverted (near-white `#fefefe` surface, `#0B2B43` text, "Most popular" micro-label) with the `.btn--primary`; outer tiers use ghost buttons. Each tier: name, large Syne price, feature list with Material Symbol `check` icons, CTA. Equal-height columns (`align-items: stretch` — the documented exception).
7. **FAQ:** 5–6 accordion items; each header is a `<button aria-expanded>` with a rotating Material Symbol `expand_more` and an animated panel (CSS `grid-template-rows` or `max-height` transition, reduced-motion safe). No modal.
8. **Final CTA:** full-width isolated typographic statement mirroring the hero treatment (display headline + `.btn--primary`).
9. **Footer:** top hairline border; wordmark; 2–3 columns of secondary links (e.g., Product, Company, Legal) with hover/focus states; small print and copyright. Link targets may use `href="#"` where no destination exists — this is the only permitted placeholder.

---

## 6. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, `script.js`. No inline `<style>` blocks; no inline `<script>` blocks beyond a single deferred entry point (`<script src="script.js" defer></script>`) — plus the permitted Tailwind CDN script if used.
- **Naming:** one consistent **BEM** convention across the entire deliverable (`.card`, `.card__title`, `.card--featured`, `.btn--primary`, `.faq__item`, `.faq__panel`…). Never mix conventions.
- **Copy:** all user-facing copy in **English**, original and on-brand. No lorem-ipsum submissions; placeholders only where content was genuinely unspecified.
- **Completeness:** ship the full page on the first attempt with every component state (hover, focus, active, loading, disabled, skeleton, empty) defined in CSS, even where not all are triggered on load.
