# CODING AGENT BUILD PROMPT — "GLASSHOUSE — the hot shop" (Glassmorphism Landing Page)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page described below **on the first attempt**. Every rule in this document is mandatory and non-negotiable.

---

## 0. Project Overview & Creative Direction

**0.1 — What you are building:** A single-page marketing landing page for **GLASSHOUSE — the hot shop** — a glassblowing studio (the "hot shop" is the workshop where glass is blown at ~1,100°C / 2,000°F). Sections required: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**0.2 — Style:** **Glassmorphism**, 2020s Digital era. Keywords: glasshouse, blower, animated, glass, translucent, gradient, blur. The glassmorphism is thematically literal — frosted, translucent UI surfaces evoke studio glass, and molten-glass orange (`#ff9d42`) glows like the furnace. Neumorphic soft-shadow touches on controls (inputs, toggle) over the warm canvas.

**0.3 — Required techniques:** Flexbox, `backdrop-filter` (with `-webkit-` prefix), CSS Filters (blurred glow orbs), Keyframe Animations, Transitions, Transforms, Gradients, Box Shadows, Border Radius.

**0.4 — Color palette:** Primary: `#0a0705`, `#e8dcc8`, `#ff9d42`. Secondary: `#a08c6e`, `#241a12`, `#e86a2e`. Full token mapping in §1.2.

**0.5 — Mandatory-rule note:** The source theme marks Light as the primary mode; Dark Mode remains **mandatory** (§1.3). Light is the default showcase mode; Dark must be an equally polished, first-class theme.

**0.6 — Copy:** Write **all user-facing copy in English**, publication-ready, on-theme (use real glassblowing vocabulary tastefully: furnace, gather, blowpipe, marver, anneal, kiln). **Lorem ipsum is prohibited.**

---

## 1. Strict Architecture Rules

**1.1 — CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. **The `style="..."` attribute is forbidden anywhere in the HTML.**
* Target everything via class selectors (BEM, §1.5). No element-only styling beyond a minimal reset.
* HTML stays clean, semantic, and presentation-agnostic — changing the look must never require markup edits.

**1.2 — CSS Variables & Theme Tokens**
Define every token below. All colors, radii, shadows, motion, and glass properties must be consumed via `var(--...)`:

```css
:root {
  /* Brand (shared across themes) */
  --primary: #ff9d42;          /* molten glass */
  --secondary: #a08c6e;        /* warm taupe */
  --accent-ember: #e86a2e;     /* furnace ember */

  /* Light mode (default) */
  --bg-primary: #e8dcc8;       /* warm cream base — never #ffffff */
  --bg-secondary: #d6c5a8;     /* deeper cream */
  --text-primary: #241a12;     /* dark coffee on light bg */
  --text-secondary: #6b5942;   /* AA-safe darkened taupe */
  --border-default: rgba(36, 26, 18, 0.16);
  --glass-bg: rgba(254, 254, 254, 0.32);   /* use 254,254,254 — never 255,255,255 */
  --glass-border: rgba(254, 254, 254, 0.55);
  --glass-highlight: rgba(254, 254, 254, 0.65);

  /* Feedback */
  --text-success: #1f7a53;
  --text-error: #b3261e;
  --border-success: var(--text-success);
  --border-error: var(--text-error);
  --focus-ring: #241a12;

  /* Glass & glow */
  --blur-strength: 18px;
  --glow-primary: 0 0 34px rgba(255, 157, 66, 0.45);

  /* Shape, depth, motion, stacking, type */
  --radius-sm: 10px; --radius-md: 16px; --radius-lg: 26px;
  --shadow-sm: 0 2px 10px rgba(36, 26, 18, 0.10);
  --shadow-md: 0 14px 38px rgba(36, 26, 18, 0.16);
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms; --transition-normal: 320ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --z-dropdown: 100; --z-modal: 200; --z-toast: 300;
  --font-display: 'Sora', sans-serif;
  --font-base: 'Inter', sans-serif;
}
```

* **Dark tokens (identical values in two places):** once under `.dark { ... }` and once under `@media (prefers-color-scheme: dark) { :root:not(.light) { ... } }` as a no-JS fallback: `--bg-primary: #0a0705; --bg-secondary: #241a12; --text-primary: #e8dcc8; --text-secondary: #c2ae8e; --border-default: rgba(232,220,200,0.16); --text-success: #7fe0b4; --text-error: #ff8a7a; --focus-ring: #e8dcc8; --glass-bg: rgba(36, 26, 18, 0.46); --glass-border: rgba(232, 220, 200, 0.18); --glass-highlight: rgba(232, 220, 200, 0.10);` plus deeper dark shadows.
* **Contrast pairing (hard rule):** light surfaces pair with `--text-primary: #241a12`; dark surfaces pair with `--text-primary: #e8dcc8`. Enforce in both themes. Verify every text/background pair meets WCAG AA (≥4.5:1; ≥3:1 for large text); if a derived value fails, adjust the value — never the token name.
* **Light-mode background:** never pure white. Where a near-white is needed, use `#fefefe` / `rgba(254, 254, 254, x)`.

**1.3 — Mandatory Dark Mode**
* Implement switching by toggling `.dark` / `.light` classes on `<html>` — theme switching must require **zero HTML restructuring**.
* `script.js` must always set one of the two classes: read `localStorage` key `"glasshouse-theme"`; on first visit fall back to `window.matchMedia('(prefers-color-scheme: dark)')`; if no OS preference is detectable, default to **Light** (the primary mode).
* Header must include a visible theme toggle button using a Material Symbols icon (`light_mode` / `dark_mode`) with correct `aria-pressed` state and dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode").

**1.4 — Flexbox Layout & Mobile-First Alignment**
* Build every layout structure with **Flexbox only** (`display: flex; flex-wrap: wrap`). Do not use CSS Grid.
* **Every flex container must default to `align-items: center`.** The only sanctioned deviations: `stretch` for equal-height card rows and `flex-start` for icon + multi-line text stacks — each deviation must carry a one-line CSS comment justifying it.
* Mobile-first: card rows collapse from 3-across to 1-column on small viewports; prevent horizontal scrolling by design (fluid `clamp()` type, `min-width: 0` on flex children, max-width container) — never by hiding overflow.

**1.5 — Styling Approach & Naming Convention**
* Hand-written custom CSS in `style.css`, organized with native `@layer` in this order: tokens → base/reset → layout → components → utilities.
* **BEM naming only** (`.hero__title`, `.price-card--featured`, `.nav__toggle`). Never mix conventions, never invent utility soup.

**1.6 — Google Fonts & Icons (Mandatory)**
* Text: Google Fonts — **Sora** (headings, `--font-display`) and **Inter** (body, `--font-base`) via `<link>` tags.
* Icons: **Google Material Symbols (Rounded)** via `<link>` + a shared `.icon` class using `font-variation-settings: 'FILL' 1, 'wght' 500`.
* **Inline SVGs, local icon files, and emoji icons are forbidden.**

---

## 2. Component Design Specifications

**2.1 — Buttons (`.btn`, `.btn--primary`, `.btn--glass`, `.btn--ghost`, `.btn--danger`)**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px. `.btn--primary` uses a molten gradient (`linear-gradient(135deg, #ff9d42, #e86a2e)`) with `#241a12` bold text and `--glow-primary`; `.btn--glass` and `.btn--ghost` use glass/outline treatments with `--text-primary`.
* **Hover:** brightness/glow shift with `cursor: pointer`; transitions via `var(--transition-fast)`.
* **Focus:** `:focus-visible` ring — `outline: 2px solid var(--focus-ring); outline-offset: 3px;` (visible in both themes).
* **Active:** `transform: scale(0.97)` pressed feedback.
* **Loading:** `.is-loading` sets `aria-busy="true"` (via JS), disables interaction to prevent double-clicks, and renders a CSS border-spinner (`.btn__spinner`, keyframe spin) sized so **button dimensions never change**.
* **Disabled:** `opacity: 0.5; filter: grayscale(1); cursor: not-allowed; pointer-events: none.`
* **Success/Error:** `.btn--success` / `.btn--error` feedback styles driven by `--text-success` / `--text-error`.
* Define `.btn--danger` (distinct red family, visible in both themes) in CSS even if unused on this page.

**2.2 — Glass Cards (`.card` family)**
* **Default:** glass surface recipe — `background: var(--glass-bg); backdrop-filter: blur(var(--blur-strength)); -webkit-backdrop-filter: blur(var(--blur-strength)); border: 1px solid var(--glass-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-md), inset 0 1px 0 var(--glass-highlight);` Flex column layout, `gap: var(--spacing-gap)` scaled down inside cards.
* **Hover (interactive cards):** `transform: translateY(-2px)` + glow/shadow shift.
* **Focus-within:** card border highlights when a child link/button receives focus.
* **Loading (skeleton):** define `.card--skeleton` with a `@keyframes shimmer` overlay; no layout jumps.
* **Empty state:** a reusable `.empty-state` pattern (glass panel + Material icon + guidance text).
* Glass surfaces holding body text must use enough background alpha (≥ 0.32 light / ≥ 0.46 dark) so text contrast remains AA after blur compositing. Provide an `@supports not (backdrop-filter: blur(1px))` fallback that raises background opacity.

**2.3 — Forms & Inputs (`.input-group`)**
* Structure: flex column wrapper containing `<label>`, the input, and a dedicated `.input-group__error` container with `aria-live="polite"`.
* **States:** empty, focused (`--focus-ring` outline + `--primary` glow), filled, valid (`--border-success` + `check_circle` icon), invalid (`--border-error`, error icon, red message text — never color alone, always icon + text), disabled, read-only.
* Inputs are neumorphic-glass: soft inset shadows on the cream canvas, translucent backgrounds, `--radius-md`.

**2.4 — Modal (`.modal`)**
* Triggered by every "Book the Hot Shop" / pricing CTA. Structure: `.modal-overlay` (fixed, centered flex, `align-items: center`, dim + blurred backdrop) → `.modal` glass panel at `--z-modal`, `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.
* **States:** opening (fade + scale-in via `var(--transition-normal)`), open, loading, success, error, closing — all CSS-animated.
* **Contents:** short booking form (Full name — required; Email — `type="email"`, required, validated) with a primary submit button that simulates ~1.2s loading, then swaps to a success panel (`check_circle` icon, confirmation copy, "Done" close button), announced via `aria-live`.
* **Behavior:** close via Esc, overlay click, and a Material `close` icon button; trap Tab focus inside while open; restore focus to the trigger on close; lock body scroll while open.

---

## 3. Core UX & Micro-Interaction Rules

* **Responsive by default:** fluid `clamp()` typography, anchor targets with `scroll-margin-top`, smooth `scroll-behavior`, zero horizontal overflow at 320px.
* **Animations:** every state change transitions via `var(--transition-fast/normal)` + `var(--ease-standard)`. Ambient decoration: 2–3 `.glow-orb` elements (radial gradients in `#ff9d42` / `#e86a2e` / `#a08c6e`, `filter: blur(80px)`, keyframed float, `aria-hidden="true"`, `pointer-events: none`, transform-only motion).
* **Reduced motion:** global `@media (prefers-reduced-motion: reduce)` block that zeroes animation/transition durations and disables float/shimmer/spin.
* **Accessibility:** WCAG AA contrast in both modes (including text over glass); never rely on color alone; semantic HTML5 landmarks (`header`, `nav[aria-label]`, `main`, `section[aria-labelledby]` + `h2`, `footer`); a skip-to-content link; logical DOM/focus order; full keyboard operability for nav, toggle, accordion, modal, and forms; `aria-live` regions for all form errors, loading, and success feedback.
* **Mandatory visual feedback:** every hover, click, focus, and submission produces a visible state change.
* **Performance:** restrict `backdrop-filter` to the header, cards, and modal (not every node).

---

## 4. Deliverables & Output Format

* **Files:** `index.html`, `style.css`, `script.js` — complete, final code in one response. `index.html` contains exactly one `<script src="script.js" defer></script>` and **no inline script blocks**. Include `lang="en"`, viewport meta, title, and meta description.
* **JS scope (only):** theme toggle + persistence, mobile nav, header scroll shadow, modal lifecycle + focus trap, form validation + simulated submits. No lorem ipsum — all copy is final English; the **only** permitted placeholders are `href="#"` targets for footer secondary links (labels must still be real).
* **Acceptance checklist:** all 8 sections render; dark mode toggles + persists; modal full lifecycle works; forms show valid/invalid/loading/success states; keyboard-only navigation completes every flow; zero inline styles; no horizontal scroll at 320px; AA contrast in both modes; reduced motion respected; fonts/icons exclusively from Google.

---

## 5. Page Section Blueprint

**5.1 — Header (`.site-header`):** sticky glass bar (blur + `--glass-border` bottom edge). Brand wordmark "GLASSHOUSE" with a decorative `local_fire_department` icon; anchor links (Features, Process, Reviews, Pricing, FAQ); theme toggle (§1.3); primary CTA "Book a Class" (opens modal). Mobile: hamburger (`menu`/`close` icons) toggling a glass dropdown menu at `--z-dropdown` with `aria-expanded`, closing on link click and Esc.

**5.2 — Hero (`.hero`):** near-full viewport, flex column, centered. Glass eyebrow pill, `h1` in Sora at `clamp(2.5rem, 6vw, 4.5rem)` (e.g., "Where fire becomes form."), supporting subcopy, CTA row (primary "Book the Hot Shop" → modal; ghost "Browse classes" → `#pricing`). Visual: a frosted CSS-only "class card" mockup (class name, time, furnace icon, "Spots left" tag — no images) floating over glow orbs.

**5.3 — Features (`.features`):** eyebrow + `h2` + lede; 3 glass cards with Material icons — `local_fire_department` (furnace-hot learning), `groups` (six seats per bench), `diamond` (you keep what you blow) — each with final English copy.

**5.4 — How It Works (`.steps`):** 3 numbered glass step cards ("01 Gather", "02 Shape & blow", "03 Anneal & take home") connected by a `--primary`→`--accent-ember` gradient rule (pseudo-element; hidden or vertical on mobile).

**5.5 — Testimonials (`.testimonials`):** 3 glass quote cards — `format_quote` icon, blockquote, a 5-star row (`star` icons with `aria-label="Rated 5 out of 5 stars"`), and a footer with glass initials-avatar, name, and role.

**5.6 — Pricing (`.pricing`):** 3 glass `.price-card` tiers with glassblowing-flavored names and realistic prices; middle tier `.price-card--featured` with "Most Popular" pill, stronger glow, and elevated transform; feature lists with `check_circle` icons; CTAs (ghost / primary / glass) all open the booking modal.

**5.7 — FAQ (`.faq`):** 4–6 native `<details class="faq__item">` / `<summary class="faq__summary">` pairs (experience needed, what to wear, age limits, annealing/take-home timing, gift cards), glass-styled, with a `chevron` icon rotating on `[open]` and a CSS open animation; fully keyboard operable by default.

**5.8 — Final CTA (`.cta-final`):** full-bleed glass panel over a molten gradient band; `h2` + copy + newsletter `.input-group` (email input + primary "Claim your seat" button) demonstrating every §2.3 state with `aria-live` feedback.

**5.9 — Footer (`.site-footer`):** brand + one-line blurb; three secondary link lists (Explore / Studio / Company — real labels, `href="#"` permitted here only); a social row of Material Symbols icon links with `aria-label`s (no fake brand logos); divider; copyright + small print.
