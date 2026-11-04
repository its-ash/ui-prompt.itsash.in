# BUILD SPECIFICATION — "CREATIVE MODE" LANDING PAGE
**Design-Studio · Multi-Accent · Expressive · Confident · 2020s Modern**

You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-quality landing page on the **first attempt**. This document is your binding specification — every rule is mandatory unless explicitly marked *(optional)*. Do not ask clarifying questions; make confident decisions within this spec.

## 0. PROJECT BRIEF & VISUAL DIRECTION

- **Theme:** Creative Mode — a design-led creative studio landing page on cream paper.
- **Brand:** Fictional studio **"Overprint®"** (or invent an equally confident name; use it consistently everywhere).
- **Sections, in this exact order:** Sticky Header → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials (3 quotes) → Pricing (3 tiers) → FAQ (5 items) → Final CTA (email capture) → Footer with secondary links.
- **Binding visual direction:** Oversized, ultra-heavy Archivo Black headlines; cream paper surfaces; saturated multi-accent splashes (rotated chips, thick underline strokes, blob shapes) in green/pink/orange/yellow; JetBrains Mono for all data, prices, numerals, and labels; Space Grotesk body; generous whitespace; alternate section backgrounds between `--bg-primary` and `--bg-secondary`, with one full-contrast band for the Final CTA. Nothing timid — expressive and confident.
- **Palette constants (identical in both modes):** Ink `#0F0F0F` · Paper/Cream `#EFE9D9` · Cream 2 `#E4DCC4` · Green `#1F8A4C` · Pink `#F06CA8` · Orange `#E85A1F` · Yellow `#F5C518`.
- **Accent distribution plan (prevent single-color monotony):** Hero highlights use pink block + yellow/green underline strokes; the three Feature cards cycle green → pink → orange; the three Process steps cycle green → pink → orange chips; Testimonial avatars/quote icons cycle pink → orange → green; Pricing tiers are green / featured-ink-with-yellow / orange; FAQ active accent is green; the CTA band and Footer each get a 4-color signature gradient rule (green→yellow→orange→pink).
- **Copy:** Author original, confident, expressive marketing copy in **English only**. Lorem ipsum is forbidden.

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID Selectors Only:** Every visual property, layout rule, and state is applied via class or ID selectors in `style.css`.
- **Minimal HTML Modifications:** HTML stays clean, semantic, and style-agnostic. Reskinning the site must require editing `style.css` only — never the markup.
- **No `<style>` blocks** and no styling `<script>` logic inside `index.html`.

### 1.2 CSS Variables & Theme Tokens
All tokens live in `:root`; theme switching redefines them under `.dark` (class on `<html>`) and `@media (prefers-color-scheme: dark)`. Use these **exact** names:

**Light mode (default — cream paper):**
```css
:root {
  /* Type */
  --font-display: 'Archivo Black', sans-serif;
  --font-base: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  /* Palette constants */
  --ink: #0F0F0F; --paper: #EFE9D9; --cream-2: #E4DCC4;
  /* Surfaces & text */
  --bg-primary: #EFE9D9; --bg-secondary: #E4DCC4; --bg-card: #F6F1E4;
  --bg-inset: #fefefe; /* never #ffffff anywhere */
  --text-primary: #0F0F0F; --text-secondary: #4A4638;
  /* Accents */
  --primary: #1F8A4C; --primary-strong: #166B3B; --secondary: #F06CA8;
  --accent-orange: #E85A1F; --accent-yellow: #F5C518;
  /* Semantic */
  --text-success: #17703E; --text-error: #C0261B;
  --border-default: rgba(15,15,15,0.15); --border-success: #17703E; --border-error: #C0261B;
  --focus-ring: #0F0F0F; --band-focus-ring: #F5C518;
  /* Inverted bands */
  --cta-band-bg: #0F0F0F; --cta-band-text: #EFE9D9;
  --card-feature-bg: #0F0F0F; --card-feature-text: #EFE9D9;
  /* Shape, depth, motion, stacking */
  --radius-sm: 6px; --radius-md: 14px; --radius-lg: 28px; --radius-pill: 999px;
  --shadow-sm: 0 2px 8px rgba(15,15,15,0.10); --shadow-md: 0 14px 32px rgba(15,15,15,0.16);
  --spacing-gap: 1.5rem; --section-pad: clamp(4rem, 10vw, 7.5rem);
  --transition-fast: 200ms; --transition-normal: 250ms;
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  --z-header: 50; --z-dropdown: 100; --z-modal: 1000; --z-toast: 1100;
}
```
**Dark mode (redefine in both `.dark` and the media query):**
```css
--bg-primary: #141310; --bg-secondary: #1E1C16; --bg-card: #1B1915; --bg-inset: #0F0F0F;
--text-primary: #EFE9D9; --text-secondary: #C7C0AB;
--primary: #2FAE63; --primary-strong: #1F8A4C;
--text-success: #3CB671; --text-error: #FF7A70;
--border-default: rgba(239,233,217,0.16); --border-success: #3CB671; --border-error: #FF7A70;
--focus-ring: #EFE9D9; --band-focus-ring: #0F0F0F;
--cta-band-bg: #EFE9D9; --cta-band-text: #0F0F0F;      /* paper inversion */
--card-feature-bg: #EFE9D9; --card-feature-text: #0F0F0F;
--shadow-sm: 0 2px 8px rgba(0,0,0,0.45); --shadow-md: 0 14px 32px rgba(0,0,0,0.55);
```
- **Contrast pairing matrix (enforced for every fill/text combination, both modes):** Green `#1F8A4C` fill → white text **only** at large sizes (≥24px, or ≥18.66px bold); small white labels require `--primary-strong` fill (6.5:1). Pink, orange, and yellow fills → **ink** text (6.7:1 / 5.4:1 / 11.7:1). Ink/paper band backgrounds → paper/ink text respectively. Accent-colored small text directly on cream is **forbidden** — accents are decorative or large-display only; body text is always `--text-primary`.
- **No pure white:** Light backgrounds are cream family; use `#fefefe` only where a near-white is genuinely needed (inputs, chips).
- **Verify every pairing** at ≥4.5:1 for body text and ≥3:1 for large text and UI components in **both** modes.

### 1.3 Mandatory Dark Mode Support
- Define dark tokens under **both** `@media (prefers-color-scheme: dark)` and a `.dark` class; switching themes must only swap variables — zero HTML restructuring.
- **Persistence:** Store the choice in `localStorage` (key `overprint-theme`); on first visit fall back to `prefers-color-scheme`. `script.js` applies the class to `<html>` as early as possible on load.
- **Visible toggle control** in the header: icon button (min 44×44px), Material Symbols `dark_mode` / `light_mode` icon swap, `aria-pressed` reflecting state, and an `aria-label` that updates ("Switch to dark theme" / "Switch to light theme").
- **Spec Exception:** The Creative Mode source spec declares "Dark: ✗ None"; per this specification's mandatory architecture, dark mode remains fully required and must be implemented as the ink↔paper inversion defined in §1.2 with identical accent hues.

### 1.4 Flexbox Layout & Mobile-First Alignment
- **Flexbox only** for all layout structure (`display: flex`, wrap, direction).
- **Default alignment rule:** Every flex container defaults to `align-items: center` unless an exception is explicitly declared. Authorized exceptions in this build: `.step` and `.accordion__item` content stacks use `align-items: flex-start` (justified: top-aligned reading flow); `.footer__col` uses `flex-start`.
- **Mobile-first:** All multi-column rows collapse to a single column below ~860px via `flex-wrap` and flexible basis (`flex: 1 1 <min>`); prevent horizontal scrolling at every viewport width (`overflow-x: clip` on `body`).
- **Authorized technique exception:** CSS Grid (`grid-template-rows: 0fr → 1fr`) is permitted **only** as the FAQ panel height-reveal animation technique — never for page layout.

### 1.5 Framework Default & CSS Approach
- Build with **clean custom CSS** in `style.css`, organized in cascade-ordered layers (comments or `@layer`): `tokens → base → layout → components → states → utilities`.
- Tailwind CSS is permitted *(optional)* — Play CDN or `@layer`/`@apply` — but all colors, shadows, radii, and transitions must resolve to the CSS variables above; hardcoded hex values outside `:root`/`.dark` token definitions are forbidden.
- **One consistent naming convention:** BEM (`block__element--modifier`) for all component classes; generic layout primitives defined once (`.container`, `.stack`, `.cluster`, `.section`, `.section--band`, `.section-head`); state hooks via `.is-*` (`.is-open`, `.is-loading`, `.is-success`, `.is-error`, `.is-scrolled`). Never mix conventions.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- Include in `<head>`: Google Fonts links for **Archivo Black** (display), **Space Grotesk** 400/500/700 (body), **JetBrains Mono** 400/700 (data), plus **Material Symbols Outlined**. Bind them to `--font-display`, `--font-base`, `--font-mono`.
- **Role rules:** Archivo Black is used **only** for the brand wordmark, H1/H2, card/tier/step titles, and the marquee — never body copy. Space Grotesk for body, nav, buttons, links. JetBrains Mono for eyebrows, numerals, prices, data strips, labels, small print (often uppercase with wide tracking).
- **Icons:** Google Material Symbols exclusively (`<span class="material-symbols-outlined">name</span>`). **Raw inline SVGs and local icon files are forbidden.**

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component (`.btn`, `.btn--primary`, `.btn--outline`, `.btn--accent`)
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` min touch target 44×44px; `--radius-pill`; 700-weight Space Grotesk label; `transition: all var(--transition-fast) var(--ease-standard)`.
- **Variants:** `--primary` = `--primary-strong` fill + white label; `--outline` = 2px `--text-primary` border, transparent fill, `--text-primary` label, hover fills with `--text-primary` bg and `--bg-primary` label; `--accent` = yellow fill + ink label (used on ink surfaces).
- **Hover:** brightness lift + `--shadow-sm`; cursor pointer.
- **Focus-visible:** `outline: 3px solid var(--focus-ring); outline-offset: 2px;` (inside inverted bands use `--band-focus-ring`).
- **Active/pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** disable pointer events, block double-clicks, render a CSS spinner (border spinner on `::after` or animated `progress` Material icon) **without changing button dimensions**; set `aria-busy="true"`.
- **Disabled (`.is-disabled` / `disabled`):** `opacity: 0.5; filter: grayscale(1); cursor: not-allowed;`
- **Success/Error (`.is-success` / `.is-error`):** temporary feedback using `--text-success` / `--text-error` tokens plus a `check_circle` / `error` Material icon — never color alone; confirm via an `aria-live` region.

### 2.2 Card Component (`.feature-card`, `.testimonial-card`, `.pricing-card`)
- **Default:** flex column; `--bg-card` surface; 1px `--border-default`; `--radius-lg`; `--shadow-sm`; padding `--spacing-gap` or more; `transition: transform var(--transition-normal) var(--ease-standard), box-shadow …`.
- **Hover (interactive cards only):** `transform: translateY(-4px)` + `--shadow-md` (the "subtle lift" effect).
- **Focus-within:** border shifts to `--primary` when a child link/button is focused (in addition to the child's own focus ring).
- **Skeleton/Empty states:** Not required — all cards are static marketing content; do not ship dead CSS for them.
- Each card family differentiates by **icon + title + accent modifier** (`.feature-card--green/--pink/--orange`), never by color alone.

### 2.3 Form & Input (Final CTA email capture, `.input-group`)
- **Structure:** flex container wrapping a real `<label>` (`.visually-hidden` allowed), the `<input>`, and a dedicated `.input-group__message` feedback container with `role="status"` / `aria-live="polite"`.
- **States (all styled in CSS):** empty; focused (`--band-focus-ring` ring on the band); filled; valid (success border + `check_circle` icon + `--text-success` message); invalid (`--border-error` + `error` icon + `--text-error` message, `aria-invalid="true"`); disabled; read-only.
- Input surface uses `--bg-inset` with `--text-primary` text; min-height 48px; `--radius-md`.

### 2.4 FAQ Accordion (`.accordion__trigger` / `.accordion__panel`)
- **Markup:** each trigger is a `<button>` with `aria-expanded` + `aria-controls`; each panel has `role="region"` + `aria-labelledby`.
- **States:** trigger hover (background tint), focus-visible ring, expanded (chevron `expand_more` icon rotates 180° over 200ms, item gains a green left accent bar — rotation + border + ARIA, never color alone).
- **Animation:** panel reveal via `grid-template-rows: 0fr → 1fr` (authorized in §1.4); `overflow: hidden; min-height: 0` on content.
- Fully keyboard operable (native buttons); independent open/close per item allowed.

### 2.5 Overlay Panels & Modals (mobile nav)
- The mobile nav panel is a fixed overlay at `--z-dropdown` (above the `--z-header` header), `--bg-primary` surface, animated in/out (translate + opacity, 250ms).
- **Open/Close states animated via CSS**; toggle button carries `aria-expanded`; `Esc` closes; focus moves into the panel on open and returns to the toggle on close; body scroll is locked while open.
- If any true modal is added *(optional)*, it must additionally: center via flex (`align-items: center`), use `--z-modal`, dim the page with a backdrop, trap focus, close on overlay click and `Esc`, and show Open/Loading/Success/Error/Closing states with CSS transitions.

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid type via `clamp()` — H1 `clamp(3rem, 9vw, 7.5rem)`, H2 `clamp(2rem, 5vw, 3.5rem)`, card titles `clamp(1.25rem, 2vw, 1.5rem)`, body `1.0625rem/1.65`; no horizontal overflow at any width.
- **Smooth animations:** every state change transitions in 200–250ms with `--ease-standard`; every hover/click produces visible feedback (lift, fill, underline, icon motion).
- **Reduced motion:** ship a global block — inside `@media (prefers-reduced-motion: reduce)`, force `animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important` for `*, *::before, *::after`. The marquee pauses; lifts/scales are suppressed; accordion still functions instantly.
- **Accessibility (a11y):** semantic landmarks (`header`, `main`, `footer`), one `h1` only, each `<section>` labeled via `aria-labelledby`; skip-to-content link visible on focus; logical DOM/focus order; full keyboard operability — no mouse-only interactions; correct ARIA on all custom widgets; `aria-live` for form feedback; decorative icons/spans marked `aria-hidden="true"`; contrast verified per §1.2 in both modes.
- **Destructive actions:** none expected; if one is ever added, style it with `.btn--danger` using `--text-error`/`--border-error`, visually distinct in **both** themes.

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` — three separate files. `index.html` contains **one** `<script src="script.js" defer></script>` reference and nothing else script-like; all JavaScript lives in `script.js`.
- `<head>` includes: title ("Overprint® — Design Studio…" style), meta description, viewport tag, the Google Fonts + Material Symbols links, and the stylesheet.
- **Naming:** BEM + the fixed primitives/state hooks of §1.5, used consistently across all three files.
- **Copy:** original, realistic English studio copy; `href="#"` placeholders are permitted **only** for footer links with no in-page target (e.g., Privacy/Terms); everything else is fully written.
- No unused/dead CSS or JS; zero console errors; all interactive elements wired to real behavior.

## 5. SECTION-BY-SECTION BUILD SPECIFICATION

### 5.1 Sticky Header
Sticky top, `--z-header`, `--bg-primary` with `--border-default` bottom edge; `.is-scrolled` (toggled by JS at scrollY > 8) adds `--shadow-sm`. Flex row, `align-items: center`, space-between: Archivo Black wordmark "OVERPRINT®" (accent-colored ®), anchor nav (Features, Process, Pricing, FAQ), theme toggle (§1.3), a compact `.btn--primary` "Start a project", and a hamburger `nav-toggle` (Material `menu`/`close` icon) below 860px that opens the §2.5 panel. Nav links: Space Grotesk, comfortable tap padding, hover underline-offset transition, visible focus rings.

### 5.2 Hero
`min-height: calc(100svh - 72px)`; centered flex column; two or three absolutely-positioned decorative accent blobs/rotated squares via `::before/::after` behind content. Eyebrow in mono uppercase wide-tracked green ("● DESIGN STUDIO — EST. 2018"). H1 in Archivo Black, `line-height: 0.95`, with 2–3 words wrapped in accent treatments: pink rotated chip (ink text), yellow and green thick underline strokes. Subhead Space Grotesk `--text-secondary`, max-width ~46ch. Dual CTAs (`.btn--primary` "Start a project" + `.btn--outline` "See our work"). Bottom data strip in JetBrains Mono separated by accent-colored bullets ("EST. 2018 / 214 PROJECTS / 31 AWARDS / 4 COUNTRIES"). Directly below: a full-width marquee band with top/bottom borders — Archivo Black uppercase items ("BRANDING ✦ DIGITAL ✦ MOTION ✦ STRATEGY") scrolling via CSS keyframes with duplicated content; disabled under reduced motion.

### 5.3 Features (3 cards)
Standard section pattern: `--bg-primary`, `--section-pad`, `.section-head` with mono eyebrow + H2. `.features__grid` is a flex-wrap row, gap `--spacing-gap`, cards `flex: 1 1 300px`. Each `.feature-card`: 56px accent icon tile (`--radius-md`, accent per modifier, ink Material icon: `palette` / `devices` / `movie`), Archivo Black H3, Space Grotesk body, and a "Learn more" link with `arrow_forward` that translates 4px on hover. Card hover lift per §2.2; focus-within per §2.2.

### 5.4 How It Works (3 steps)
Band on `--bg-secondary`. Three `.step` columns (flex-wrap, collapse below 900px, dashed connector line via pseudo-element on desktop only, `aria-hidden`). Each step: a rotated (−2deg) accent chip numeral ("01" green, "02" pink, "03" orange — accent bg with ink mono bold numerals), Archivo Black step title, short Space Grotesk copy.

### 5.5 Testimonials (3 quotes)
`--bg-primary`. Flex-wrap row of three `.testimonial-card`s. Each: oversized decorative `format_quote` Material icon in the card's accent, quote in Space Grotesk, author row with 48px circle avatar (accent bg + bold ink initials), name (700) and role in mono uppercase `--text-secondary`. *(Optional)* a 5-star rating rendered as an ink pill containing yellow `star` icons (never yellow stars directly on cream — fails contrast; identical treatment in dark mode).

### 5.6 Pricing (3 tiers)
Band on `--bg-secondary`. Three `.pricing-card`s (flex-wrap). Tier identities: green / featured / orange. Featured middle card uses `--card-feature-bg`/`--card-feature-text` (ink card on cream in light mode; paper card in dark mode), is elevated (`translateY(-6px)` + `--shadow-md` on desktop only, no scale on mobile), and carries an absolutely-positioned "MOST POPULAR" badge (yellow pill, ink mono uppercase text) that never causes layout shift. Prices in JetBrains Mono ~2.75rem with a mono suffix ("/project"). Feature lists use `check_circle` icons — green on cream cards, yellow on the featured ink card — plus text. CTAs: featured → `.btn--accent`; others → `.btn--outline`. No billing toggle.

### 5.7 FAQ (5 items)
`--bg-primary`; centered max-width 760px; five Q&As with realistic studio copy (timelines, revisions, file ownership, process, collaboration) built exactly per §2.4.

### 5.8 Final CTA
Full-contrast band: `--cta-band-bg`/`--cta-band-text` (ink band in light mode, paper band in dark mode), `--section-pad`, topped by the 6px four-color signature gradient rule, with one or two low-opacity accent splashes positioned away from text. Archivo Black H2, short supporting line, then the §2.3 email form in a flex-wrap row (max-width 560px): email input `flex: 1 1 240px` + `.btn--primary` submit "Send it". Focus rings inside the band use `--band-focus-ring`. On submit: validate → `.is-loading` (1.2s simulated) → `.is-success` with `check_circle` icon and an `aria-live` confirmation ("Got it — we'll reply within 24 hours."); the input disables on success.

### 5.9 Footer
`--bg-secondary`, topped by the same 4-color gradient rule. Flex-wrap columns: brand block (wordmark, one-line tagline, mono address) + link columns (Explore: in-page anchors; Studio: About/Careers/Journal `href="#"`; Contact: mono email + phone). Social row: mono uppercase text links ("INSTAGRAM", "DRIBBBLE", "LINKEDIN") each with a `north_east` Material icon. Bottom bar, flex space-between: "© <current year> Overprint®" (year injected by JS), Privacy · Terms, and a mono sign-off line. Link hover: `--primary` color + underline offset; visible focus rings.

### 5.10 JavaScript Behavior Contract (`script.js`)
`'use strict'`, single IIFE, no globals; `defer` entry point only. Implement exactly: **(1)** theme init + toggle per §1.3; **(2)** header `.is-scrolled`; **(3)** mobile nav panel per §2.5 (aria-expanded, Esc, scroll lock, focus management); **(4)** FAQ accordion toggling `aria-expanded`; **(5)** smooth in-page anchor scrolling honoring `prefers-reduced-motion`; **(6)** CTA form validation, loading, and success flow per §5.8; **(7)** footer year injection. No other scripts, no console errors.
