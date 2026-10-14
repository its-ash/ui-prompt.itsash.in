# BUILD PROMPT — BATIK-THEMED LANDING PAGE (FULL SPECIFICATION FOR CODING AI)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a **complete, production-ready landing page in a single first attempt**. Follow every rule in this document exactly — no rule may be omitted, relaxed, or deferred. Output the full final code for all three files with no truncation, no "rest of the code" placeholders, and no follow-up questions.

**Project:** A single-page landing page for a fictional artisan batik textile house — hand-drawn *tulis* batik, natural indigo dyeing, and heritage Javanese patterns. Write all user-facing copy in polished **English** with an artisan/heritage voice. No lorem ipsum.

**Sections required (in order):** Sticky Nav + Theme Toggle → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **All styling must live in `style.css`.** The `style="..."` attribute is **forbidden anywhere in the HTML**.
- Target every element via **class or ID selectors only**. No tag selectors beyond base resets (`body`, headings, `*` box-sizing).
- Keep the HTML **semantic and style-agnostic** (landmarks, headings, lists, buttons) so the entire theme could be swapped by editing CSS alone.

### 1.2 Design Tokens (CSS Variables) — Canonical Token Block
Use **exactly this consolidated `:root` block** (mandatory token names + Batik theme tokens). Do not rename tokens:

```css
:root {
  /* color — light mode "cloth day" */
  --bg-primary: #f3e6cd;        /* natural cloth ground */
  --bg-secondary: #faf1de;      /* surface */
  --bg-raised: #e7d3ab;         /* surface-2 */
  --text-primary: #2b1c12;
  --text-secondary: #6b5335;    /* muted brown */
  --primary: #2c4a6e;           /* indigo dye */
  --secondary: #b5501f;         /* rust accent */
  --accent-ochre: #c68a2e;      /* decorative ochre — ornament only, never body text */
  --indigo-deep: #1c3350;
  --on-primary: #faf1de;        /* text color paired ON --primary backgrounds */
  --on-secondary: #faf1de;      /* text color paired ON --secondary backgrounds */
  --text-success: #3f6b34;
  --text-error: #a93226;
  --border-default: #e7d3ab;
  --border-success: #3f6b34;
  --border-error: #a93226;

  /* radius */
  --radius-sm: 6px; --radius-md: 14px; --radius-lg: 26px; --radius-pill: 999px;

  /* shadow (cloth elevation) */
  --shadow-sm: 0 4px 12px rgba(43,28,18,0.14);
  --shadow-md: 0 10px 26px rgba(43,28,18,0.18);

  /* spacing & motion */
  --spacing-gap: 24px;
  --transition-fast: 0.15s;
  --transition-normal: 0.25s;
  --ease-standard: cubic-bezier(0.33, 0.0, 0.2, 1);

  /* elevation */
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;

  /* typography — Google Fonts */
  --font-base: 'Cormorant Garamond', system-ui, serif;
  --font-display: 'Marcellus', 'Cormorant Garamond', serif;

  /* Batik texture tokens */
  --crackle-veins: repeating-conic-gradient(from 20deg at 30% 40%,
      rgba(43,28,18,0.05) 0deg 4deg, transparent 4deg 26deg);
  --motif-border: repeating-linear-gradient(90deg,
      #2c4a6e 0 6px, #c68a2e 6px 8px, transparent 8px 22px);
  --kawung-dots: repeating-radial-gradient(circle at 12px 12px,
      rgba(44,74,110,0.18) 0 3px, transparent 3px 24px);
}
```

- **Contrast pairing rule (both themes):** every light background token must pair with a dark text token and every dark background token with a light text token. `--on-primary` / `--on-secondary` must flip with the theme (see 1.3).
- **Ochre (`#c68a2e`) fails body-text contrast on the cream ground** — use it only for borders, ornaments, badges, and decorative motifs, never for paragraphs.

### 1.3 Mandatory Dark Mode
The source specification **does not declare light/dark modes and requires validation in both before publishing** — therefore you must author the dark palette yourself:

- Implement dark mode via a `.dark` class on `<html>` **and** an `@media (prefers-color-scheme: dark) { :root:not(.light) { … } }` fallback so first-visit users get their OS preference.
- Define this dark token set ("night cloth"), then validate every pairing ≥ 4.5:1 for body text and ≥ 3:1 for large text/UI edges:

```css
.dark {
  --bg-primary: #131b29;   --bg-secondary: #1b2a41;   --bg-raised: #243655;
  --text-primary: #f3e6cd; --text-secondary: #c9ab7e;
  --primary: #8fb0d9;      /* lightened indigo — dark text must sit on it */
  --secondary: #d96b33;    --accent-ochre: #d99a3c;   --indigo-deep: #0d1522;
  --on-primary: #131b29;    --on-secondary: #131b29;   /* pairing flips! */
  --text-success: #9ac48a; --text-error: #e8836b;
  --border-default: #3a5170; --border-success: #9ac48a; --border-error: #e8836b;
  --shadow-sm: 0 4px 12px rgba(0,0,0,0.45); --shadow-md: 0 10px 26px rgba(0,0,0,0.55);
  --crackle-veins: repeating-conic-gradient(from 20deg at 30% 40%,
      rgba(243,230,205,0.05) 0deg 4deg, transparent 4deg 26deg);
}
```

- **Theme switching must be token-only** — no HTML restructuring, no duplicated stylesheets.
- **Persistence:** in `script.js`, read `localStorage('theme')` on load; if absent, fall back to `prefers-color-scheme`; apply `.dark` or `.light` class accordingly and save on toggle.
- **Visible toggle control** in the nav: a 44×44px icon button containing both Material Symbols (`dark_mode`, `light_mode`) shown/hidden via CSS based on the html class, with dynamic `aria-label` ("Switch to dark theme" / "Switch to light theme") and `aria-pressed` reflecting the current dark state.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build **all layout structures with Flexbox** (`display: flex`). Do not use CSS Grid.
- **Every flex container defaults to `align-items: center`** unless a section explicitly needs stretch (document the exception in a CSS comment if used).
- **Mobile-first:** all multi-column rows (features, steps, testimonials, pricing, footer columns, hero) are `flex-wrap: wrap` with `flex: 1 1 280px` children so they collapse to a single column on small viewports. **No horizontal scrolling at 320px width.**
- Nav collapses to an accessible hamburger below 768px (button with `aria-expanded` + `aria-controls`, flex-column panel, Esc closes it, focus returns to the button).

### 1.5 Styling Approach
Use **clean custom vanilla CSS** matching the provided base component classes (`.nav`, `.btn`, `.btn--primary`, `.card`, `.input`, `.badge`) as the foundation — extend them per Section 3 below. Do **not** introduce Tailwind or any other framework. All styles must consume the tokens from 1.2; no hard-coded colors outside `:root`/`.dark`.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- Load **Google Fonts** via `<link>` with `preconnect`: **Cormorant Garamond** (400, 500, 600 + italics) bound to `--font-base`, and **Marcellus** (400) bound to `--font-display` for all headings.
- Load **Google Material Symbols (Rounded)** via `<link>` and use `<span class="material-symbols-rounded">icon_name</span>` for every icon (nav toggle, feature glyphs, check marks, stars, chevrons, quote marks, social icons).
- **Inline SVGs and local icon files are forbidden.**

---

## 2. PAGE STRUCTURE & SECTION REQUIREMENTS

All sections live inside `<main>` (except nav/footer), each as `<section id="…" aria-labelledby="…">` with an `<h2>`. Include a visually-hidden skip link to `#main`. Apply `scroll-margin-top` for the sticky nav and smooth `scroll-behavior` (disabled under reduced motion).

- **2.1 Nav (sticky):** Marcellus wordmark "Tulis House" linking to top; anchor links (Features, How It Works, Testimonials, Pricing, FAQ); theme toggle (1.3); primary CTA "View Cloth" → `#pricing`. Bottom edge uses `--motif-border` as a 3px signature stripe.
- **2.2 Hero:** eyebrow `.badge` ("Hand-drawn in wax · Dyed in indigo"), `--font-display` `<h1>`, lede paragraph, two CTAs (`.btn--primary` "Explore the Collection" + `.btn` ghost "Book a Workshop" → `#how-it-works`). Right side: a decorative panel built purely from CSS (`--kawung-dots`, `--crackle-veins`, ochre/indigo gradients, `--motif-border` frame) — **no external images anywhere on the page**.
- **2.3 Features (3 cards):** `<h2>` + three `.card`s, each with a circular ochre-ringed Material Symbol (`gesture`, `water_drop`, `workspace_premium`), `<h3>`, copy on hand-drawn craft, natural dye, and court heritage patterns.
- **2.4 How It Works (3 steps):** three flex steps with large `--radius-pill` number badges (01/02/03), symbols, `<h3>`s ("Draw the Wax", "Crackle & Dye", "Boil & Reveal"), connected on wide screens by a `--motif-border` divider line.
- **2.5 Testimonials (3 cards):** each with `format_quote` symbol, real-sounding English quote, 5 `star` symbols, and an initials avatar (flex circle, indigo ground, `--on-primary` text), name + role.
- **2.6 Pricing (3 tiers):** `.card`s for "Kawung — Single Cloth · $68", featured "Parang — Atelier Bundle · $145" (scaled up, accent top border, `.badge` "Most Popular"), "Tulis Commission — from $320". Each has a feature list (`check` symbols) and a CTA (featured uses `.btn--primary`; others `.btn`).
- **2.7 FAQ:** 5 native `<details>/<summary>` items with authored English Q&A. Custom styling: summary is a flex row (question + `chevron_right` symbol rotating 90deg on `[open]`), visible `:focus-visible` ring, no default marker, generous hit area.
- **2.8 Final CTA:** full-width indigo panel (indigo-deep ground, `--crackle-veins` overlay, `--motif-border` top and bottom stripes), `<h2>` + copy + **newsletter form** (see 3.3) with a live status region.
- **2.9 Footer:** `--motif-border` divider on top; flex columns (brand blurb, "Shop" links, "Studio" links, "Follow" Material Symbol social links); bottom bar with © line and secondary legal links (Privacy, Terms, Shipping). All links are valid in-page anchors or `href="#"` with `aria-label`s describing the target.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

### 3.1 Buttons — Full State Matrix
Extend the provided `.btn` base (flex; `align-items: center; justify-content: center; gap: 0.5rem`; min 44×44px) with CSS classes for **every state**: **default**, **hover** (shadow `--shadow-sm` + `translateY(-1px)`, `cursor: pointer`), **focus-visible** (`outline: 2px solid var(--primary); outline-offset: 3px`), **active** (`transform: scale(0.97)`), **loading** (`.is-loading`: `pointer-events: none`, animated CSS spinner or rotating Material Symbol, fixed dimensions — no layout shift), **disabled** (`opacity: 0.5`, greyscale, `cursor: not-allowed`), and **success/error feedback** (`.btn--success` / `.btn--error` using `--text-success` / `--text-error` tokens, visible in both themes). `.btn--primary` must use `--on-primary` for its text so contrast flips correctly in dark mode. Destructive variants (`.btn--danger`), if used, must be visually distinct in both themes.

### 3.2 Cards — Full State Matrix
- **Default:** flexbox, `--bg-secondary` ground, `--crackle-veins` texture, 4px accent top border, `--shadow-md`, `--radius-lg`.
- **Hover:** `translateY(-2px)` + shadow shift. **Focus-within:** border highlights `--primary` when a child link/button is focused.
- **Loading:** define `.card--skeleton` shimmer animation styles in CSS (part of the component system). **Empty state:** define `.card--empty` (Material Symbol + guidance text pattern). Skeletons must reserve real dimensions to prevent layout jumps.

### 3.3 Forms & Inputs (Newsletter)
Structure: flex column wrapping `<label for>`, `<input class="input" type="email" required>`, and a dedicated `.form-status` container with `aria-live="polite"`. Style all states in CSS: **empty, focus** (indigo border ring, no default outline), **filled, valid** (success border + `check` icon), **invalid** (error border, `--text-error` message, `error` icon), **disabled**, **read-only**. In `script.js`: prevent default, validate email, show inline error or success message in the live region, and briefly drive the submit button through its **loading → success** states.

### 3.4 Modals
**No modal is in scope for this build — do not add one.** (For the record, any future modal must implement: animated open/close, backdrop overlay, centered flex, icon close button, `Esc` + overlay-click dismissal, focus trapping, and `--z-modal` stacking.)

---

## 4. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid type via `clamp()`, wrap-based collapse, zero horizontal overflow at 320px.
- **Motion:** every state change transitions with `var(--transition-normal) var(--ease-standard)`; wrap all animation/transition in `@media (prefers-reduced-motion: reduce)` overrides that disable transforms, shimmer, and smooth scroll.
- **Accessibility:** WCAG-AA contrast in **both light and dark**; semantic HTML5 landmarks and heading order (one `<h1>`, sequential `<h2>/<h3>`); ARIA only where semantics fall short (toggle, hamburger, live regions); logical DOM/focus order; full keyboard operability — every interactive element reachable and usable by keyboard; never rely on color alone to communicate state (pair errors with icons + text, stars with `aria-label`).
- **Mandatory visual feedback:** every hover, click, focus, and submission produces a visible state change.
- **Never rely on color alone; never leave a state unstyled.**

---

## 5. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` — complete, final, in one response. Only a single `<script src="script.js" defer></script>` reference in the HTML; **no inline `<script>` blocks**.
- **Naming:** BEM (`.card__title`, `.btn--primary`) consistently across all three files — never mix conventions. CSS organized with section comments mirroring the token blocks above.
- **JS scope (from-scratch build):** theme toggle + persistence, mobile nav, newsletter validation/feedback. No other behavioral scripts.
- **Copy:** authored, thematic English for every heading, paragraph, button, FAQ answer, and alt/aria label. No lorem ipsum anywhere.
- **Definition of Done (self-check before responding):** zero inline styles; zero inline SVGs; dark mode toggles and persists correctly with flipped contrast pairings; all button/card/input states defined in CSS; keyboard-only pass through nav → links → FAQ → form succeeds; no horizontal scroll at 320px; reduced-motion respected; both themes pass ≥ 4.5:1 body-text contrast.
