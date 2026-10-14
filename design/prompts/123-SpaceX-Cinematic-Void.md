# CODING PROMPT — LANDING PAGE: "SPACEX CINEMATIC VOID"

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page specified below in a single attempt. Every rule in this document is mandatory. Where a rule conflicts with a personal habit, the rule wins.

**Objective:** A single-page marketing site for a fictional commercial launch-services company, styled as a cinematic aerospace void: pure black canvas, full-viewport photography, spectral white uppercase typography, one ghost button language, zero shadows, zero cards, zero containers.

---

## 0. THEME SPECIFICATION — "SPACEX CINEMATIC VOID"

* **Name:** SpaceX Cinematic Void
* **Type:** Pure Black Void · Full-Viewport Photography · D-DIN Industrial · Universal Uppercase · Ghost Buttons · Zero Everything
* **Keywords:** cinematic, void, industrial, uppercase, positive tracking, ghost buttons, full-viewport, spectral white, aerospace stencil, zero shadows
* **Era:** 2024–2026 Aerospace Engineering
* **Mode:** Dark only — light mode is explicitly not recommended by the style spec
* **Palette:**
  * Spatial Black `#000000` — the only canvas
  * Spectral White `#f0f0fa` — all text; slight blue-violet tint like starlight
  * Ghost Surface `rgba(240,240,250,0.10)` — button fill
  * Ghost Border `rgba(240,240,250,0.35)` — button border and 1px hairlines
  * Overlay `rgba(0,0,0,0.50)` — photography legibility scrim
  * Pure White `var(--white-100)` = `#fefefe` (never `#ffffff`)
* **Visual language:** Every content section is a 100vh cinematic scene built on full-viewport photography (`background-size: cover`) with a dark gradient overlay for legibility. Text sits directly on the photography — no cards, no filled containers, no shadows, no rounded surfaces. The 32px border radius is reserved for the ghost button only. All text is uppercase with positive letter-spacing (0.96px–1.17px) — aerospace stencil discipline. Hero display: 48px, weight 700, line-height 1.00.
* **Brand:** Invent a fictional launch-services brand (suggested: "AETHER DYNAMICS"). Never use the SpaceX name, logo, or assets.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
* Every visual rule targets a class or ID selector. HTML remains semantic and style-agnostic.
* Scene photography is declared in `style.css` via scene modifier classes (e.g., `.scene--hero { background-image: url(...) }`) — never as inline styles or presentational `<img>` wrappers.

**1.2 CSS Variables & Theme Tokens**
Define exactly these tokens in `:root`:

```css
:root {
  /* Color */
  --primary: #f0f0fa;                       /* Spectral White */
  --secondary: rgba(240,240,250,0.10);      /* Ghost Surface */
  --bg-primary: #000000;                    /* Spatial Black */
  --bg-secondary: #000000;                  /* No lifted surfaces exist */
  --text-primary: #f0f0fa;
  --text-secondary: rgba(240,240,250,0.72);
  --text-success: #57e389;
  --text-error: #ff5c5c;
  --border-default: rgba(240,240,250,0.35); /* Ghost Border */
  --border-error: rgba(255,92,92,0.60);
  --border-success: rgba(87,227,137,0.60);
  --overlay: rgba(0,0,0,0.50);
  --white-100: #fefefe;
  /* Radius — zero-radius theme; --radius-lg is reserved for the ghost button ONLY */
  --radius-sm: 0;
  --radius-md: 0;
  --radius-lg: 32px;
  /* Shadows — forbidden by theme */
  --shadow-sm: none;
  --shadow-md: none;
  /* Spacing & motion */
  --spacing-gap: 2rem;
  --transition-fast: 150ms;
  --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* Elevation */
  --z-dropdown: 1000;
  --z-modal: 1100;
  --z-toast: 1200;
  /* Typography */
  --font-base: 'Barlow', Arial, Verdana, sans-serif;
  --tracking-display: 0.96px;
  --tracking-nav: 1.17px;
  --tracking-body: 0.96px;
  --leading-display: 1.00;
  --leading-body: 1.60;
}
```

* **Contrast pairing:** every background in this theme is dark and pairs exclusively with light text tokens — enforce this everywhere.
* **Zero shadows:** `box-shadow` is forbidden site-wide; focus rings use `outline`, never shadow.

**1.3 Mandatory Dark Mode**
* Dark mode is the only mode. Define the full palette at `:root`, mirror it under a `.dark` class and `@media (prefers-color-scheme: dark)`, and force it with `<meta name="color-scheme" content="dark">` plus `color-scheme: dark` in CSS.
* **Exception:** the style spec marks light mode "Not Recommended / Dark: Full" — therefore no light palette exists and no theme toggle is rendered. This is the explicit, sanctioned exception to the standard toggle + `localStorage` requirement.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Every layout container is flexbox and defaults to `align-items: center`; any deviation must carry a CSS comment justifying it.
* Mobile-first: all multi-column rows collapse to single columns below 768px. No horizontal scrolling at any viewport width from 320px up.

**1.5 Framework & Naming Convention**
* Hand-authored CSS in `style.css` using Tailwind-style utility conventions, structured in `@layer`-like sections (tokens → base → components → scenes → utilities). Do not load the Tailwind CDN script — the only permitted `<script>` tag is the single deferred `script.js`.
* One naming convention only: BEM (`.scene`, `.scene__content`, `.btn-ghost`, `.btn-ghost--loading`, `.form-group`, `.form-group__error`). Never mix conventions.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Google Fonts only, loaded via `<link>` tags. **Exception:** D-DIN is not distributed on Google Fonts — load **Barlow** (weights 400/500/700), the closest DIN-heritage Google Font, as `--font-base` with `Arial, Verdana` fallbacks to preserve the industrial DIN character.
* Icons: Google Material Symbols Outlined via the Google Fonts stylesheet. Inline SVGs and local icon files are forbidden. Decorative icons carry `aria-hidden="true"`.
* **Universal uppercase:** author all copy in sentence case in the HTML; uppercase is applied exclusively via `text-transform: uppercase` in CSS (protects screen-reader pronunciation).
* **Type scale:** hero display `clamp(40px, 6vw, 48px)` / 700 / line-height 1.00 / tracking 0.96px (48px is the spec ceiling); section headlines 32px/700; item titles 20px/700; body 17px/400 / line-height 1.60 / tracking 0.96px; nav, buttons, labels, and eyebrows 12–14px / 500–700 / tracking 1.17px.

---

## 2. COMPONENT & SECTION SPECIFICATIONS

**2.1 Global Scene System**
* `.scene`: `position: relative; min-height: 100vh; min-height: 100svh; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #000000; background-size: cover; background-position: center;`
* `.scene::before`: absolute inset 0 gradient scrim built from `var(--overlay)`, stronger toward the bottom where text sits. Content sits above it at `z-index: 1`.
* Photography: hotlink stable, high-resolution, dark-toned aerospace stock (Unsplash/Pexels: night launch, engine test, Earth from orbit, starfield). Every scene keeps `background-color: #000000` so a failed image still yields a legible pure-black scene.
* `.scene__content`: max-width 1200px; inline padding `clamp(1.25rem, 5vw, 4rem)`; text centered by default.
* Every section sets `scroll-margin-top: 80px` for anchor navigation.

**2.2 Header & Navigation**
* Fixed header at `var(--z-dropdown)`: brand wordmark left, anchor nav (CAPABILITIES / PROTOCOL / TRANSMISSIONS / TIERS / BRIEFING), compact ghost button "RESERVE" right. Links: uppercase, tracking 1.17px, `--text-secondary` → `--text-primary` on hover/focus, ≥44px touch targets.
* On scroll past 8px, JS toggles a class adding `background: var(--overlay)` and a 1px bottom hairline.
* Mobile (<768px): links collapse into a toggle button (Material Symbol `menu` ↔ `close`) opening a fixed full-screen black menu (flex column, centered). Requirements: `aria-expanded` + `aria-controls` on the toggle; Esc closes; focus moves into the menu on open, is trapped while open, and returns to the toggle on close; activating a link closes the menu; body scroll locked while open.

**2.3 Ghost Button — the Only Button Style**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` min 44×44px; padding `0.75rem 2rem`; background `var(--secondary)`; border `1px solid var(--border-default)`; border-radius `var(--radius-lg)`; uppercase; tracking 1.17px; `cursor: pointer`; transitions on background/border/transform at `var(--transition-fast)`.
* **Hover:** background lifts to `rgba(240,240,250,0.20)`, border brightens to `rgba(240,240,250,0.60)`.
* **Focus-visible:** `outline: 2px solid var(--text-primary); outline-offset: 3px;` — never box-shadow.
* **Active:** `transform: scale(0.97)`.
* **Loading (`.btn-ghost--loading`):** `pointer-events: none`; `aria-busy="true"`; a rotating Material Symbol `progress_activity` (or CSS ring) replaces the label without changing button dimensions; double submits impossible.
* **Disabled:** `opacity: 0.5; cursor: not-allowed;`.
* **Success/Error:** temporary states using `--border-success`/`--text-success` and `--border-error`/`--text-error`.
* **Danger (`.btn-ghost--danger`):** defined with error tokens for future destructive actions; visually distinct on black; unused on this page.

**2.4 Scene 01 — Hero**
* Full-viewport night-launch photography; content bottom-anchored (`justify-content: flex-end` + generous bottom padding).
* Eyebrow line ("COMMERCIAL LAUNCH SERVICES — LOW EARTH ORBIT AND BEYOND"), a single `h1` display headline (≤8 words, mission-control voice), one support sentence in `--text-secondary`, one ghost button "RESERVE YOUR LAUNCH" with an `arrow_forward` symbol.
* Scroll cue: "SCROLL" label + thin vertical hairline with a subtle pulse animation (disabled under reduced motion). The `h1` appears exactly once on the page.

**2.5 Scene 02 — Features ("3 cards" → flat columns)**
* The section list says "3 cards," but the theme mandates zero cards: render the three features as **flat, borderless text columns** — no background, no shadow, no radius. A 1px top hairline (`var(--border-default)`) per column is the only permitted delineation.
* Each column: Material Symbol icon (e.g., `rocket_launch`, `schedule`, `public`), 20px title, two-line description. Desktop: three equal flex columns with `var(--spacing-gap)`; mobile: stacked.
* Columns are non-interactive: no hover transform or focus state is required — readability only.

**2.6 Scene 03 — How It Works (3 steps)**
* Eyebrow "02 / PROTOCOL" + headline. Three steps as flat columns: oversized stencil numerals "01 / 02 / 03" (display font, reduced opacity), step title, description. Desktop: columns joined by 1px horizontal hairlines; mobile: stacked with a vertical hairline. Non-interactive.

**2.7 Scene 04 — Testimonials**
* Eyebrow "03 / TRANSMISSIONS". Three quotes as flat text blocks: quote at 24px/500, attribution (name + role) at 13px uppercase, tracking 1.17px, `--text-secondary`, preceded by a short 1px hairline. No quotation-card backgrounds. Desktop: three columns; mobile: stacked. Non-interactive.

**2.8 Scene 05 — Pricing (3 tiers)**
* Eyebrow "04 / MISSION TIERS". Three flat tier columns separated by 1px vertical hairlines (horizontal on mobile): tier name, price, short feature list with Material Symbol `check` bullets, and one ghost button per tier stretched to the column width.
* Featured middle tier: the only bordered element on the page — a `1px solid var(--border-default)` outline (no fill, no radius, no shadow) plus an uppercase "MOST POPULAR" eyebrow. All buttons remain the single ghost style.
* Suggested tiers: SUBORBITAL / ORBITAL (featured) / INTERPLANETARY, with authored prices and feature lists.

**2.9 Scene 06 — FAQ**
* Eyebrow "05 / BRIEFING". Five to six native `<details>`/`<summary>` items in a centered column (max-width 760px), separated by 1px hairlines.
* Summary: flex row, question at 18px uppercase + `expand_more` symbol rotating 180° via `details[open]`, ≥56px tap target. Natively keyboard accessible — no JS.
* Answer: `--text-secondary` with comfortable padding.

**2.10 Scene 07 — Final CTA & Email Capture**
* Full-viewport Earth-from-orbit photography, centered: display headline, one support line, and the page's only form — a launch-manifest email capture.
* **Structure:** `.form-group` flex column wrapping a visible label, the input, and a dedicated status container (`role="status"`, `aria-live="polite"`).
* **Input:** transparent background, `1px solid var(--border-default)`, radius 0, spectral text, uppercase, ≥48px height, placeholder in `--text-secondary`.
* **States:** empty, focus (2px spectral outline ring), filled, valid (`--border-success` + `check_circle` icon), invalid (`--border-error` + `error` icon + message text — never color alone; `aria-invalid` toggled; message linked via `aria-describedby`), disabled, read-only.
* **Submit:** ghost button "JOIN THE MANIFEST"; validate (HTML5 + JS regex), enter loading state, simulate a ~1.2s async request, then render success (status container: `check_circle` + confirmation copy; button briefly in success state). Errors render inline in the status container.

**2.11 Footer**
* The only section exempt from the 100vh scene rule: auto height, pure black, 1px top hairline.
* Brand wordmark + one-line tagline; secondary link columns (COMPANY / MISSIONS / LEGAL), reusing in-page anchors where targets exist; bottom row: copyright with current year + small uppercase legal line. Links: `--text-secondary` → `--text-primary` on hover, visible focus ring.

**2.12 Toast (optional global feedback)**
* `.toast`: fixed bottom-center, `#000000` background with 1px `var(--border-default)` border, radius 0, uppercase 13px, `z-index: var(--z-toast)`, `role="status"`, auto-dismiss ~4s, `close` symbol button. Inline form status remains the source of truth.
* No modals, skeletons, or empty states are part of this build — do not add them.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid `clamp()` sizing; breakpoints at 768px (fine-tune at 480px); zero horizontal overflow from 320px up.
* **Smooth animations:** all state changes transition at `var(--transition-fast)`/`var(--transition-normal)` with `var(--ease-standard)`. Scene content reveals on scroll (IntersectionObserver adds a class: 16px rise + fade). Under `prefers-reduced-motion: reduce`, all animations, pulses, reveals, and smooth scrolling are disabled.
* **Accessibility (a11y):** semantic landmarks (`header`/`nav`/`main`/`section`/`footer`); one `h1`; skip-to-content link visible on focus; every interactive element keyboard operable with a visible focus ring; decorative icons `aria-hidden`; dynamic feedback announced via `aria-live`; body text contrast ≥ 4.5:1 (verify `--text-secondary` on black); state is never communicated by color alone — always icon + text.
* **Mandatory visual feedback:** every hover, focus, click, and submission produces a visible state change.
* **Destructive actions:** none exist on this page; `.btn-ghost--danger` is defined but unused.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **Files:** `index.html`, `style.css`, `script.js` — nothing else, delivered complete in one response. The HTML contains exactly one `<script src="script.js" defer></script>`; no inline scripts, no inline styles, no inline SVGs.
* **HTML head:** `lang="en"`, title, meta description, `<meta name="color-scheme" content="dark">`, Google Fonts `<link>` tags for Barlow (400/500/700) and Material Symbols Outlined.
* **style.css order:** tokens → reset/base → components → scenes/sections → utilities. BEM naming only.
* **script.js scope:** header scrim, mobile menu, scroll reveal, form validation + simulated submit, toast, current-year injection. No other behaviors.
* **Copy:** all user-facing copy authored in **English** (the source style spec was Portuguese — translate everything), in a terse, declarative mission-control voice. No lorem ipsum, no exclamation marks, real thematic content for every requested section. Placeholders are permitted only where content was genuinely unspecified — author original copy for those cases.
