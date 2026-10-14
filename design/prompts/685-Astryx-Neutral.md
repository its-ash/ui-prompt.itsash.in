# BUILD PROMPT — "Astryx Neutral" Landing Page (Single-Shot, Production Quality)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete landing page described below in one attempt. Every rule in this document is mandatory. Where a rule conflicts with a personal habit or shortcut, the rule wins. Do not output partial code, explanations, or apologies — deliver the finished product.

---

## 0. PROJECT BRIEF & BUILD SCOPE

**0.1 Product & Theme Definition**
- Build a marketing landing page for **Astryx**, a fictional calm-workspace SaaS product.
- Design system: **Astryx Neutral** — a neutral minimalist system with system-first typography and calibrated contrast for maximum legibility.
- Keywords: neutral, minimal, system-font, monochrome, clean, Figtree, muted, accessible, meta, Astryx.
- Visual direction (2026 Meta): muted monochrome UI, clean corporate-dashboard composition, warm paper-white background. The accent color **is** the ink color (`#15110C`) — there are no chromatic accents anywhere except semantic success/error states.
- Visual effects: smooth transitions with `cubic-bezier(0.24, 1, 0.4, 1)`; fast motion 175ms, medium motion 410ms. **No heavy shadows** — depth comes exclusively from subtle borders, generous spacing, and restrained motion.
- No external images, no image CDNs. All visuals are built from typography, CSS, and Google icons (avatars are CSS monogram circles).

**0.2 Copy Language**
- **All user-facing copy must be written in English** — headlines, body text, buttons, labels, testimonials, FAQ, footer, `aria-labels`, `<title>`, meta description. Write realistic, specific, on-brand marketing copy. Lorem ipsum, "TODO", and generic filler are forbidden. External-route links (Blog, Changelog, etc.) may use `href="#"`; every on-page anchor must resolve to a real section ID.

**0.3 Required Sections (in this exact order)**
- **0.3.1 Sticky Header** — "Astryx" wordmark, anchor nav (Features, How it works, Pricing, FAQ), a **visible dark-mode toggle**, and a "Start free" button. On mobile (< 768px), nav links collapse behind a `menu` icon button that opens an accessible disclosure panel.
- **0.3.2 Hero** — eyebrow badge, one H1, supporting subheadline, primary CTA ("Start free" → `#pricing`) + secondary ghost CTA ("See how it works" → `#how-it-works`), and a small meta row (e.g., "99.9% uptime · SOC 2 Type II · WCAG 2.2 AA"). Centered flex composition. Recommended (optional): a CSS-only abstract dashboard-card cluster as the hero visual — monochrome muted panels, no images.
- **0.3.3 Features** — exactly 3 cards: Material Symbol icon, title, description. 3 columns on desktop → 1 column on mobile.
- **0.3.4 How It Works** — 3 numbered steps (01 / 02 / 03), each with icon, title, description; a subtle connector line on desktop; vertical stack on mobile.
- **0.3.5 Testimonials** — 3 cards: `format_quote` icon, quote, CSS monogram avatar (initials in a circle), name, role.
- **0.3.6 Pricing** — 3 tiers: Starter (free), Pro (paid, marked "Most popular", visually featured), Enterprise (custom). Each has a feature list with `check` icons and its own CTA. Include a **Monthly/Annual billing toggle** (see 2.5).
- **0.3.7 FAQ** — 5 accordion items (write plausible questions, e.g., free plan, migration, accessibility, security, team support).
- **0.3.8 Final CTA** — an **inverted monochrome band** (ink background + paper text in light mode; inverted in dark mode — preserve contrast pairing) containing a headline and an email capture form per 2.3, plus success feedback.
- **0.3.9 Footer** — brand blurb column + grouped secondary link columns (Product / Company / Resources) + bottom bar ("© 2026 Astryx" + Privacy, Terms, Status).

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML, as are `<style>` blocks and JS-assigned inline styles. The FAQ accordion must animate via the CSS `grid-template-rows: 0fr → 1fr` technique — never via JS-measured heights.
- **Class/ID Selectors Only:** all design properties, layout rules, and states are targeted via class or ID selectors in `style.css`.
- **Minimal HTML Modifications:** markup stays clean, semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`), agnostic of visual styling — restyling the site must require touching only `style.css`.

### 1.2 CSS Variables & Theme Tokens
Store every visual token in CSS variables. Use these baseline values, and **verify every text/background pair achieves ≥ 4.5:1 contrast in both themes** (target ≥ 7:1 for body copy — this theme's identity is calibrated legibility). Adjust any failing value; change nothing else about the palette mood.

```css
:root {
  --font-base: 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Light theme (default) */
  --primary: #15110C;          /* ink accent: buttons, links, focus rings */
  --secondary: #4E606F;        /* muted slate */
  --bg-primary: #F8F4ED;       /* warm paper background */
  --bg-secondary: #fefefe;     /* surfaces — the theme lists #FFFFFF; it is calibrated to #fefefe per the no-pure-white rule */
  --text-primary: #15110C;
  --text-secondary: #4E606F;
  --text-success: #1E6B40;
  --text-error: #B3261E;
  --border-default: rgba(5, 54, 89, 0.10);
  --border-strong: rgba(21, 17, 12, 0.22);
  --border-success: var(--text-success);
  --border-error: var(--text-error);

  --radius-sm: 8px;
  --radius-md: 12px;           /* theme default radius */
  --radius-lg: 20px;
  --shadow-sm: 0 1px 2px rgba(21, 17, 12, 0.05);
  --shadow-md: 0 10px 30px rgba(21, 17, 12, 0.07);  /* subtle only */
  --spacing-gap: 1.5rem;
  --transition-fast: 175ms;
  --transition-normal: 410ms;
  --ease-standard: cubic-bezier(0.24, 1, 0.4, 1);
  --z-dropdown: 100;
  --z-modal: 200;
  --z-toast: 300;
}
```

- **Contrast Pairing (mandatory, both themes):** every light background token pairs with a dark text token and every dark background token pairs with a light text token. Primary buttons use `background: var(--primary); color: var(--bg-primary)` so the pairing inverts automatically per theme.
- **Dark tokens** redefine *all* of the above (not just backgrounds). Baseline: `--primary / --text-primary: #F4F1EA`, `--secondary / --text-secondary: #A3ACB6`, `--bg-primary: #111112`, `--bg-secondary: #1F1F22`, `--text-success: #6BC98F`, `--text-error: #F2A2A2`, `--border-default: rgba(244,241,234,0.12)`, `--border-strong: rgba(244,241,234,0.28)`, dark-mode shadow variants using `rgba(0,0,0,…)`.
- Themed surfaces (`body`, cards, header, inputs) transition `background-color`, `color`, and `border-color` with `var(--transition-normal) var(--ease-standard)` so the theme swap cross-fades smoothly.
- Style `::selection { background: var(--primary); color: var(--bg-primary); }`.

### 1.3 Mandatory Dark Mode Support
- **Implementation — dual mechanism:** light tokens on `:root, html.light`; dark tokens on `html.dark`; plus `@media (prefers-color-scheme: dark) { html:not(.light):not(.dark) { /* dark tokens */ } }`. This gives a correct first paint from the OS preference with zero inline scripts, while the explicit classes override it after any user choice.
- **Persistence:** `script.js` reads `localStorage` key `astryx-theme` (`'light' | 'dark'`) on load and applies `html.light` / `html.dark`. On first visit (no stored value), set no class and let `prefers-color-scheme` decide.
- **Toggle:** the header button computes the *effective* theme (`.dark` class, or `matchMedia('(prefers-color-scheme: dark)')` when no class is set), flips it, persists it, swaps the Material Symbol (`dark_mode` / `light_mode`), and reflects state via `aria-pressed` (true when dark is active) and a descriptive `aria-label`. Theme switching must never alter DOM structure — tokens only.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layout structures with **Flexbox**. Multi-card rows use flex-wrap (e.g., children `flex: 1 1 280px`), not CSS grid.
- **Default Alignment Rule:** every flex container defaults to `align-items: center` unless an exception is explicitly justified with a CSS comment (permitted exceptions: pricing feature lists and step columns, which use `flex-start`/`stretch` for text alignment).
- **Mobile-First:** base styles target small screens; scale up with `min-width` media queries (768px, 1024px). No horizontal scrolling at any width ≥ 320px. Fluid type via `clamp()`.

### 1.5 Framework Default
- Use **clean custom CSS in `style.css`** organized in native cascade layers (`@layer tokens, reset, layout, components, utilities`). Do not use the Tailwind CDN or any build step (both would force inline scripts/styles, which are forbidden). Utility-ish helpers are allowed only as a small fixed set (`.container`, `.section`) mapped back to the tokens; component styling uses generic reusable classes (`.btn`, `.card`, `.input-group`).

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** load **Figtree** (weights 400–800) from Google Fonts via `<link>` with `preconnect`, bind to `--font-base`. *Exception clause: the theme's "system-first typography" keyword applies only to the fallback stack — Google-hosted Figtree is the mandatory primary typeface.*
- **Icons:** **Google Material Symbols (Outlined)** via the Google-hosted variable font stylesheet; set consistent `font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24`. **Forbidden:** raw inline `<svg>`, local icon files, emoji as icons, other icon CDNs. Decorative icons carry `aria-hidden="true"`; icon-only buttons need `aria-label`. Suggested set: `tune`, `accessibility_new`, `dashboard`, `link`, `design_services`, `rocket_launch`, `format_quote`, `check`, `expand_more`, `dark_mode`, `light_mode`, `menu`, `close`, `error`, `check_circle`, `progress`.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component (`.btn`)
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` — minimum 44×44px touch target, padding `0.875rem 1.75rem`, `border-radius: var(--radius-md)`, weight 600, transitions on background/color/border/transform/box-shadow at `var(--transition-fast) var(--ease-standard)`. Variants: `.btn--primary` (ink fill), `.btn--secondary` (ghost, 1px `--border-default` border), `.btn--icon` (44px square), `.btn--danger` (error-driven; visually distinct in both themes).
- **Hover:** perceptible brightness/border/shadow shift; `cursor: pointer`.
- **Focus:** `:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }` — never remove focus outlines without this replacement.
- **Active:** `transform: scale(0.97)`.
- **Loading (`.is-loading` + `aria-busy="true"`):** blocks pointer events and double submits; renders a CSS spinner (`::after` border spinner in `currentColor`) or rotating `progress` symbol — **button dimensions must not change**.
- **Disabled (`[disabled]`):** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error (`.btn--success` / `.btn--error`):** temporary post-submit feedback styles driven by `--text-success` / `--text-error` plus matching borders, then reverted.

### 2.2 Card Component (`.card`)
- **Default:** flex column (centered alignment for feature/testimonial cards), `background: var(--bg-secondary)`, `border: 1px solid var(--border-default)`, `border-radius: var(--radius-md)`, padding ~1.75rem, transitions at `var(--transition-normal) var(--ease-standard)`.
- **Hover:** `transform: translateY(-2px)` with border strengthening to `--border-strong` and/or `--shadow-sm` — subtle, never heavy.
- **Focus-within:** card border highlights when any child link/button receives focus.
- **Loading (Skeleton):** define `.card--skeleton` with a CSS shimmer keyframe (sweeping translucent gradient via `color-mix`, ~1.4s infinite) and fixed-size placeholder blocks — no layout jumps.
- **Empty State:** define `.card--empty` — centered Material Symbol plus short guidance text.
- **Featured pricing card (`.card--featured`):** inverted monochrome surface (ink bg + paper text in light mode; paper bg + ink text in dark mode), "Most popular" badge, subtle `--shadow-md`, contrast pairing preserved.

### 2.3 Form & Input (`.input-group`)
- **Structure:** flex column wrapping `<label for>`, `<input>`, and a dedicated error feedback container (`.input-group__error`, `aria-live="polite"`, reserved min-height).
- **States — style all of them:** empty; focused (border → `--primary` + soft ring); filled; valid (`.is-valid`: `--border-success` + `check_circle` status icon); invalid (`.is-invalid`: `--border-error`, `aria-invalid="true"`, error message + `error` icon using `--text-error`); disabled; read-only. Input base: `--bg-secondary`, 1px `--border-default`, `--radius-md`, min-height 48px.
- **Behavior:** vanilla-JS email validation on blur and submit; messages render inline in the live region (never `alert()`); on success show the button loading state (~1s), then `.btn--success` + a friendly inline confirmation, then reset. Style the inputs inside the inverted CTA band for contrast (paper-toned borders/placeholder).

### 2.4 Disclosure / Accordion (FAQ) & Overlays
- **FAQ accordion:** each item = `<button class="faq__trigger" aria-expanded="false" aria-controls="faq-panel-N">` with an `expand_more` chevron + `<div class="faq__panel" role="region">`. Open/close animates via CSS `grid-template-rows: 0fr → 1fr` (`--transition-normal`); chevron rotates 180°; `:focus-visible` ring; independent toggles; fully keyboard operable.
- **Modal (conditional):** not required for this page. If you add any overlay, it must include animated opening/open/loading/success/closing states, a centered flex container (`align-items: center`), backdrop, Material Symbol close button, keyboard focus trapping, `Esc` + overlay-click closing, and `--z-modal`.

### 2.5 Pricing Billing Toggle
- A switch with `role="switch"`, `aria-checked` (annual = true), and visible labels "Monthly" / "Annual — save 20%". Operable via Space/Enter. Prices live in existing HTML elements updated by JS (no injected nodes); announce the change in an `aria-live="polite"` region; reserve price width so the layout never jumps.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** container max-width ~1120px, fluid `clamp()` type scale, generous consistent section rhythm. Zero horizontal overflow at 320px+.
- **Smooth Animations:** every state change transitions (controls at `--transition-fast`, surfaces at `--transition-normal`, always `--ease-standard`). Respect `prefers-reduced-motion: reduce`: neutralize transitions, animations, and `scroll-behavior`.
- **Anchors:** `scroll-behavior: smooth` (reduced-motion respected) + `scroll-margin-top` on sections to offset the sticky header.
- **Scroll reveal:** subtle IntersectionObserver fade/translate (12px) adding `.in-view`; disabled entirely under reduced motion.
- **Accessibility:** skip-to-content link; one `<h1>` and logical heading order; semantic landmarks; ≥ 4.5:1 contrast in **both** modes; **never rely on color alone** — pair every state with an icon or text; visible focus on all interactive elements; full keyboard operability (mobile menu closes on `Esc` and link clicks, focus returns to its trigger); `aria-live` for all dynamic feedback (form errors, success, pricing announcements).
- **Mandatory Visual Feedback:** every click, hover, and submission produces a visible state change.
- **Destructive Actions:** no delete actions are expected; if any `.btn--danger` appears, it must be visually distinct in both light and dark themes.
- **Sticky header:** translucent `--bg-secondary` surface with `backdrop-filter: blur(10px)` and a hairline `--border-default` bottom edge; mobile menu panel stacks at `--z-dropdown`.

---

## 4. DELIVERABLES & OUTPUT FORMAT

- **File Structure:** exactly three files — `index.html`, `style.css`, `script.js`. The only `<script>` tag permitted is `<script src="script.js" defer></script>`. No other inline scripts or styles.
- **HTML shell:** `lang="en"`, viewport meta, descriptive `<title>` + meta description, Google Fonts `preconnect` + stylesheet links (Figtree and Material Symbols Outlined).
- **Naming Convention:** **BEM exclusively** (`.card__title`, `.btn--primary`, `.faq__trigger`, `.pricing__tier--featured`) plus the fixed layout primitives from 1.5. Never mix conventions.
- **JavaScript:** vanilla, `'use strict'`, feature-guarded, organized by concern (theme, nav, pricing, faq, form, reveal), no libraries, no console noise. JS may toggle classes and update text/ARIA of existing elements only — it must never inject new DOM nodes or inline styles.
- **Copy:** realistic English marketing copy for every section per 0.2/0.3 — no lorem ipsum, no unexplained placeholders. Anchor links must target real section IDs; only genuinely external routes may use `#`.

---

## 5. DEFINITION OF DONE (verify before submitting)

- Zero `style="..."` attributes; a single deferred `<script>` reference.
- Dark mode toggle works, persists across reload, and first paint honors the OS preference.
- Both themes pass ≥ 4.5:1 text contrast; focus rings visible everywhere.
- Full keyboard pass: logical tab order, `Esc` closes the mobile menu, accordion operable without a mouse.
- No horizontal scroll at 320px; `prefers-reduced-motion` respected.
- Every icon from Material Symbols (no SVGs); all custom classes BEM; all copy in polished English.
