# CODING AGENT PROMPT — COMPLETE LANDING PAGE: "SWISS MODERN" (Minimalism & Swiss)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete Landing Page on the first attempt — a single, finished, production-grade deliverable with no TODOs, no stubs, and no follow-up questions. The page must be fully functional, accessible, responsive, and visually precise.

**Landing Page Theme:** Swiss Modern — Clean, Precise, Bauhaus-Inspired, Geometric (1920s Bauhaus + 2024 Modern).
**Sections to build:** Header/Navigation, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

---

## 0. THEME & STYLE SPECIFICATION

**0.1 Design Identity**
- Keywords: swiss, modern, bauhaus, clean, precise, Archivo, Nunito, visible grid, asymmetric, geometric shapes, red accent, black white.
- The result must feel like a 1920s Bauhaus poster rebuilt with 2024 engineering: pure geometry, hard edges, visible structure, and a single red focal accent.

**0.2 Color Palette (Light Mode)**
- Primary: Pure White `#ffffff`, Pure Black `#000000`, Red Accent `#ff3300`.
- Secondary: Light Grey `#f5f5f5`, Medium Grey `#cccccc`, Dark Grey `#333333`.

**0.3 Typography**
- Headings/display: **Archivo** weight 800 (700 for sub-headings); uppercase kickers with wide letter-spacing.
- Body: **Nunito** weight 400 (700 for emphasis).
- Precise hierarchy: oversized Hero display headline, stepped Archivo sizes per section heading (`h1` → `h2` → `h3`), generous whitespace.

**0.4 Visual Effects**
- Visible grid lines (60px × 60px) as background texture.
- Asymmetric layouts: offset columns, staggered cards, 7/5 splits.
- Geometric shapes — circles, rectangles, lines — built purely with CSS (bordered `div`s), never SVG.
- Red accent `#ff3300` as the single focal color; clean transitions at 200ms.

**0.5 Provided CSS Technical — implement exactly, with values bound to CSS variables**
```css
.accent-red { color: var(--secondary); }            /* --secondary: #ff3300 */
.grid-visible { background-image: linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px); background-size: 60px 60px; }
.geo-shape  { position: absolute; }
.geo-circle { border: 2px solid var(--primary); border-radius: 50%; }
.geo-rect   { border: 2px solid var(--secondary); }
```
Keep these exact class names and behaviors; binding to variables lets dark mode invert them automatically.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
- All design properties, layout rules, and states are applied via class or ID selectors only.
- HTML must remain clean, semantic, and style-agnostic: re-theming the page must require editing only `style.css`, never the markup.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` (light) and override under `.dark` / `@media (prefers-color-scheme: dark)`:
- **Colors (required):** `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- **Swiss mapping (light mode):** `--primary: #000000`, `--secondary: #ff3300`, `--bg-primary: #ffffff`, `--bg-secondary: #f5f5f5`, `--text-primary: #000000`, `--text-secondary: #333333`, `--text-success: #0a7d33`, `--text-error: #d40000`, `--border-default: #000000`, `--border-error: #d40000`, `--border-success: #0a7d33`. Also define `--grey-medium: #cccccc`, `--on-primary` (text color placed on `--primary` surfaces), `--font-display`, `--font-base`, `--grid-line`, `--grid-size: 60px`.
- **Contrast Pairing:** every light background token must pair with a dark text token and every dark background token with a light text token — enforced for every theme, not just the default (e.g., `.btn-primary { background: var(--primary); color: var(--on-primary); }` must flip correctly in dark mode).
- **Light Mode Background:** do not default to pure white; pick a background fitting the theme's mood, and where a near-white is needed use `#fefefe` instead of `#ffffff`. **Exception:** the Swiss Modern specification explicitly requires Pure White `#ffffff` as the light-mode background — this overrides the default; set `--bg-primary: #ffffff` in light mode.
- **Radius & shadows:** `--radius-sm`, `--radius-md`, `--radius-lg` (set all to `0px` — Swiss Modern demands sharp corners; the tokens exist so a future theme can change them without markup edits); `--shadow-sm: 4px 4px 0 var(--primary)`, `--shadow-md: 8px 8px 0 var(--primary)` (hard Bauhaus offset shadows that auto-invert in dark mode).
- **Spacing & transitions:** `--spacing-gap: 1.5rem`, `--transition-fast: 150ms`, `--transition-normal: 200ms`, `--ease-standard: cubic-bezier(0.25, 0.25, 0, 1)`.
- **Elevation/stacking:** `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300` — no ad-hoc z-index values.

**1.3 Mandatory Dark Mode Support**
- Dark mode must always be defined: provide dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`.
- Swiss dark palette: `--bg-primary: #0a0a0a`, `--bg-secondary: #141414`, `--text-primary: #fefefe`, `--text-secondary: #cccccc`, `--primary: #fefefe`, `--on-primary: #000000`, `--border-default: #fefefe`, `--grid-line: rgba(255,255,255,0.06)`, plus brighter `--text-error` / `--text-success` variants for contrast; keep `--secondary: #ff3300` (it holds ≥ 4.5:1 against `#0a0a0a` for large text and accents).
- Background and text variables must switch seamlessly with zero HTML restructuring.
- **Persistence:** store the user's choice in `localStorage`, fall back to `prefers-color-scheme` on first visit, and expose a visible toggle with correct `aria-pressed` / `aria-label` state.
- **Exception:** the source specification marked Dark Mode as "✗ No" — this is explicitly overridden: dark mode support is mandatory for this build and must be implemented to the full standard above.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout structure with Flexbox (`display: flex` / Tailwind flex utilities).
- Every flex container defaults to `align-items: center` (`items-center`) unless an exception is explicitly justified in a CSS comment (e.g., editorial text blocks set to `flex-start` for the asymmetric Swiss rhythm).
- Mobile-first: all flex rows must collapse to columns on small viewports; prevent horizontal scrolling at every breakpoint down to 320px.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (Play CDN) for layout utilities; all theme styling lives in `style.css`.
- Utilities must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`, `.faq-item`); never hardcode hex values inside utility compositions.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load **Archivo** (700, 800) and **Nunito** (400, 700) via Google Fonts `<link>` tags; bind `--font-display: 'Archivo'` and `--font-base: 'Nunito'`.
- Load **Google Material Symbols** for every functional icon (`menu`, `close`, `check`, `expand_more`, `arrow_forward`, `dark_mode`/`light_mode`, `format_quote`, etc.).
- Raw inline SVGs and local icon files are forbidden. Decorative geometry is CSS-only (`.geo-shape`, `.geo-circle`, `.geo-rect`).

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component Requirements** — all states via CSS classes:
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` sharp corners, Archivo 700 uppercase label with letter-spacing, minimum touch target 44×44px. Variants: `.btn-primary` (black fill / white text; auto-inverts in dark mode), `.btn-accent` (red `#ff3300` fill / white text), `.btn-outline` (2px black border, transparent fill), `.btn-danger` (error-red fill — visually distinct in both themes).
- **Hover:** precise Swiss shift — background inversion or appearance of the hard offset shadow (`--shadow-sm`), plus `cursor: pointer`.
- **Focus:** distinct `outline: 2px solid var(--secondary); outline-offset: 2px;` ring for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** disables pointer events, prevents double-clicks, renders an animated Google icon or CSS spinner without changing button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`, never color alone — always paired with an icon or text change.

**2.2 Card Component Requirements** (`.card` — used by Features, Testimonials, Pricing):
- **Default:** flexible Flexbox layout, 2px `--border-default` border, `--bg-secondary` or white surface, sharp corners, no soft blur shadows.
- **Hover:** `transform: translateY(-2px)` plus hard offset shadow `--shadow-sm` (desktop only).
- **Focus-within:** border shifts to `--secondary` (red) when a child link/button receives focus.
- **Loading (skeleton):** shimmer animation defined in CSS, preserving final dimensions to prevent layout jumps.
- **Empty state:** structured fallback layout featuring a Google icon and clear guidance text.

**2.3 Form & Input Requirements** (email capture in the Final CTA):
- **Structure:** flex `.input-group` wrapping a visible `<label>`, the input, and a dedicated error-feedback container.
- **States:** empty; focused (2px red outline ring); filled; valid (success border + check icon); invalid (error border, `--text-error` message + error icon, tied via `aria-describedby` and announced in an `aria-live` region); disabled; read-only.
- **Swiss input style:** 2px black border, white surface, Nunito text; focus and error states recolor the border via tokens.

**2.4 Modal / Popup Requirements** (governs the mobile navigation overlay and any other overlay):
- **States:** opening, open, loading, success/error, closing — all animated via `transition: var(--transition-normal)`.
- **UX:** flex container, backdrop overlay, Google icon close button, keyboard focus trapping, close via `Esc` and overlay click, focus returned to the trigger on close.
- The FAQ must be an accordion, not a modal (see 5.7).

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` typography and breakpoints without horizontal overflow; verify at 320px, 768px, and 1024px+.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; fully respect `prefers-reduced-motion` (disable transforms, shimmer, and smooth scrolling; keep opacity-only fades).
- **Accessibility (a11y):** sufficient contrast in both light and dark modes; never rely on color alone to communicate state; semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`); a skip-to-content link; correct ARIA roles/labels on the theme toggle, mobile menu, and accordion; logical DOM/focus order; full keyboard operability; `aria-live` regions for form errors and success feedback.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** `.btn-danger` must be visually distinct in both light and dark themes.
- **Decorative geometry:** all `.geo-shape` elements are `aria-hidden="true"` with `pointer-events: none` so they never intercept clicks or screen readers.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File structure:** separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference; no inline styles anywhere.
- **Naming convention:** one fixed, flat kebab-case convention matching the provided spec classes — `.accent-red`, `.grid-visible`, `.geo-shape`, `.geo-circle`, `.geo-rect`, plus `.btn`, `.btn-primary`, `.card`, `.card-featured`, `.input-group`, `.faq-item`, `.theme-toggle`, etc. Never mix conventions (no BEM, no camelCase).
- **Copy:** invent one coherent fictional product (e.g., a precision grid-based design tool) and write all user-facing copy in English — short, declarative, Swiss-precise sentences. No lorem ipsum; no placeholder-only sections.
- **Completeness:** deliver the finished page in one pass — all sections, all states, both themes.

---

## 5. PAGE STRUCTURE & SECTION REQUIREMENTS

**5.1 Header (sticky navigation — required infrastructure for anchor links and the mandatory theme toggle)**
- White surface with a 2px black bottom border; flex row: geometric logo mark (CSS red square + black circle + Archivo wordmark), anchor links (Features, How It Works, Testimonials, Pricing, FAQ) with smooth scrolling, the theme toggle (Material Symbol `dark_mode`/`light_mode`, `aria-pressed`, `aria-label`), and a mobile menu button opening the overlay per 2.4.

**5.2 Hero**
- `.grid-visible` background; asymmetric 7/5 flex split — copy left, geometric composition right (`.geo-circle`, `.geo-rect`, rules/lines).
- Oversized Archivo 800 headline (`clamp(2.5rem, 6vw, 5rem)`) with exactly one word in `.accent-red`; Nunito lede below; primary `.btn-primary` CTA + `.btn-outline` secondary CTA; a 3-metric stats strip aligned to the grid.

**5.3 Features (3 cards)**
- Section header: red uppercase kicker + Archivo `h2`.
- Three `.card` components in an asymmetric grid (middle card offset with `translateY` on desktop); each pairs a CSS geometric icon composition or Material Symbol with an Archivo `h3` and Nunito body; exactly one card carries the red accent detail; hover/focus-within per 2.2.

**5.4 How It Works (3 steps)**
- Three steps in a flex row (column on mobile): giant Archivo numerals `01 / 02 / 03` (one in `.accent-red`), connected by a 2px line (horizontal on desktop, vertical on mobile), each with a step title and one-sentence body.

**5.5 Testimonials**
- Three quote `.card`s in a staggered/asymmetric arrangement; `.geo-circle` avatar with initials; red Material Symbol `format_quote` accent; name (Archivo 700) + role (Nunito, `--text-secondary`).

**5.6 Pricing (3 tiers)**
- Three `.card` tiers in a 3-column grid (1 column on mobile); the middle tier is `.card-featured`: 2px red border, hard offset shadow `--shadow-md`, a red "Most popular" tag, and the strongest CTA (`.btn-accent`); other tiers use `.btn-outline` / `.btn-primary`.
- Each tier: Archivo tier name, large Archivo price, Nunito feature list with Material Symbol `check` icons.

**5.7 FAQ**
- Accessible accordion: 5–6 items; each question is a `<button>` with `aria-expanded` + `aria-controls`; answer region animated via CSS (`grid-template-rows: 0fr → 1fr` or equivalent) at `var(--transition-normal)`; Material Symbol `expand_more` chevron rotating 180°; fully keyboard operable.

**5.8 Final CTA**
- Inverted block: black surface (light mode) / `--bg-secondary` with white border (dark mode); oversized white Archivo headline with one `.accent-red` word; decorative `.geo-shape` accents; email-capture form per 2.3 with `.btn-accent` submit.
- Inline success state (check icon + confirmation message in an `aria-live` region) and inline error state — no page reload, no `alert()`.

**5.9 Footer**
- Inverted surface (black in light mode / `#141414` in dark mode); flex/grid columns of secondary links (Product, Company, Legal — real English labels; link to page sections where applicable, `href="#"` only where no target genuinely exists); social links as Material Symbols; copyright line; repeated small geometric logo mark.

---

## 6. DEFINITION OF DONE

- Zero `style="..."` attributes; zero inline `<script>` beyond the deferred entry point; zero inline SVGs.
- Dark mode fully functional: toggle persists via `localStorage`, defaults to `prefers-color-scheme`, and all tokens plus `.grid-visible` / `.geo-*` invert correctly.
- Full keyboard pass: skip link, focus rings, accordion, mobile menu, and form all operable without a mouse.
- No horizontal scrolling at 320px; every interaction shows visible feedback within 200ms; `prefers-reduced-motion` respected.
- All copy is real, English, and on-brand; all fonts and icons load from Google Fonts / Google Material Symbols.
