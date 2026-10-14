# BUILD PROMPT — "FAUVISM" LANDING PAGE
## Complete Specification for Coding AI — Single-Attempt, Production-Quality Build

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build a complete, responsive, one-page landing page in the **Fauvism** theme on the first attempt. Output the full, finished code — no questions, no partial deliverables.

**Mission:** Translate the Fauvist movement (Les Fauves, 1904–1908 — Matisse, Derain, Vlaminck) into UI: wild, non-naturalistic, highly saturated clashing color; bold, flat, unmixed color fields applied "straight from the tube"; expressive, loose, brush-like edges and borders; hard offset shadows instead of blur. Mood anchors: Matisse's *Woman with a Hat* (1905) and Derain's Collioure harbor paintings — color used arbitrarily and fearlessly.

**Page scope:** Header/Nav, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Copy rules:** The output category is **Art & Illustration**. Invent one coherent fictional product in this space (e.g., an illustration studio, art print shop, or creative learning platform) and write complete, real **English** copy for every headline, paragraph, feature, step, quote, price tier, FAQ answer, and footer link. No lorem ipsum anywhere.

**Mode mandate (translated from source):** The source spec declares no light/dark modes. You must therefore **define both a light and a dark theme and validate the page in both before considering it done.** A derived dark palette is provided in §1.2 — use it.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID selectors only:** All design properties, layout rules, and states must be targeted via class or ID selectors defined in `style.css`.
* **Minimal HTML modifications:** HTML must remain clean, semantic, and styling-agnostic. Changing the look must only require editing `style.css`, never the markup.
* **No behavioral attributes in HTML:** No `onclick` or similar inline handlers. All JavaScript behavior is attached in `script.js` via `addEventListener`, using `data-*` hooks (e.g., `data-theme-toggle`, `data-accordion-button`).

### 1.2 CSS Variables & Theme Tokens
Store **all** visual tokens in `:root` and the `.dark` theme class using CSS variables. Use exactly these light-mode tokens:

```css
:root {
  /* semantic core */
  --bg-primary: #fff8ee;      /* warm cream canvas */
  --bg-secondary: #ffe9d1;    /* peach field */
  --surface: #fefefe;         /* EXCEPTION: reference lists #ffffff; system rule mandates #fefefe */
  --surface-2: #ffe9d1;
  --text-primary: #1a1a1a;
  --text-secondary: #5c4a3a;
  --primary: #ff5e1a;         /* hot orange */
  --secondary: #1c3fab;       /* cobalt */
  --text-success: #00714f;    /* viridian darkened for AA body text */
  --text-error: #b0105a;      /* magenta darkened for AA body text */
  --border-default: #1a1a1a;
  --border-success: #00a878;
  --border-error: #d6146b;
  /* Fauvist hue fills (decorative fields) */
  --viridian: #00a878;
  --magenta: #d6146b;
  --cobalt: #1c3fab;
  /* radius */
  --radius-sm: 4px; --radius-md: 12px; --radius-lg: 24px; --radius-pill: 999px;
  /* hard offset shadows — ZERO blur */
  --shadow-sm: 3px 3px 0 var(--magenta);
  --shadow-md: 6px 6px 0 var(--secondary);
  /* (--shadow-bold / --shadow-bold-sm from the reference are aliases of --shadow-md / --shadow-sm) */
  /* typography */
  --font-base: 'Fraunces', 'Playfair Display', Georgia, serif;
  --font-display: 'Fraunces', 'Playfair Display', Georgia, serif;
  --text-xs: .75rem; --text-sm: .875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem; --text-4xl: 3rem; --text-5xl: 4rem;
  /* spacing */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --spacing-gap: var(--space-4);
  /* motion */
  --transition-fast: 150ms;
  --transition-normal: 250ms;
  --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1); /* springy, expressive */
  /* stacking */
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;
  /* signature moves */
  --brushstroke-border: 3px solid var(--border-default);
  --clash-gradient: linear-gradient(105deg, #ff5e1a 0%, #d6146b 45%, #1c3fab 100%);
  --footer-bg: #1a1a1a;
  --footer-text: #fff8ee;
}
```

**Mandatory dark-mode tokens** (apply under both `.dark` and `@media (prefers-color-scheme: dark)`):

```css
.dark {
  --bg-primary: #1b120a;   /* deep burnt umber */
  --bg-secondary: #2a1a10;
  --surface: #241811;
  --surface-2: #3a2415;
  --text-primary: #fff8ee;
  --text-secondary: #d9c4ab;
  --primary: #ff5e1a;       /* fills unchanged */
  --secondary: #8aa3ff;     /* lightened cobalt for text/links/borders on dark */
  --cobalt: #1c3fab;        /* fill only — always pair with cream text */
  --viridian: #00a878;      /* fill only — always pair with dark text */
  --magenta: #d6146b;      /* fill only — always pair with cream text */
  --text-success: #2fd6a0;
  --text-error: #ff6fa5;
  --border-default: #fff8ee; /* brushstroke border flips to cream */
  --border-success: #0ac48b;
  --border-error: #ff4d92;
  --shadow-sm: 3px 3px 0 #ff4d92;
  --shadow-md: 6px 6px 0 #8aa3ff;
  --footer-bg: #0f0a06;
  --footer-text: #fff8ee;
}
```

**Contrast pairing rule (enforced in BOTH themes, not just the default):**

| Fill / background | Required text color |
|---|---|
| `--primary` #ff5e1a | `#1a1a1a` |
| `--bg-secondary` / `--surface-2` #ffe9d1 | `#1a1a1a` |
| `--viridian` #00a878 | `#1a1a1a` |
| `--cobalt` #1c3fab | `#fff8ee` |
| `--magenta` #d6146b | `#fff8ee` |
| Light `--bg-primary` #fff8ee | `#1a1a1a` |
| Dark `--bg-primary` #1b120a | `#fff8ee` |

Never place cream text on orange or viridian fills; never place dark text on cobalt or magenta fills.

### 1.3 Mandatory Dark Mode Support
* Define dark tokens under **both** `@media (prefers-color-scheme: dark)` and a `.dark` class applied to `<html>` (guard the media query so it does not double-apply when `.dark` is active).
* Theme switching must work purely through CSS variables — **no HTML restructuring**.
* **Persistence:** Store the user's choice in `localStorage` (key: `fauvism-theme`). First visit falls back to `prefers-color-scheme`; if no preference is stored, also listen for live system changes.
* **Visible toggle control** in the header: icon-only button using Material Symbols (`dark_mode` / `light_mode`), minimum 44×44px, with `aria-pressed` and a dynamically updated `aria-label` ("Switch to dark mode" / "Switch to light mode").
* Include `<meta name="color-scheme" content="light dark">` and apply the theme as early as possible in `script.js` to minimize flash.

### 1.4 Flexbox Layout & Mobile-First Alignment
* Build all layout structure with **Flexbox** (`display: flex` or Tailwind flex utilities).
* **Default alignment rule:** Every flex container defaults to `align-items: center` (`items-center`) unless an explicitly justified exception applies. Declared exceptions for this build: text-heavy vertical stacks (card bodies, form groups, accordion panels, footer link groups) may use `flex-start`/`stretch` for readability.
* **Mobile-first:** Base styles are single-column; `min-width` media queries (or Tailwind `sm/md/lg` prefixes) add multi-column rows. No horizontal scrolling at any viewport width down to 320px.
* All interactive targets minimum 44×44px. Display typography uses fluid `clamp()` sizing built on the `--text-*` scale.

### 1.5 Framework & Styling Approach
* Primary approach: a **custom CSS design system in `style.css`** (tokens + reusable component classes: `.btn`, `.card`, `.input-group`, `.badge`, `.accordion`, etc.).
* Optionally augment with **Tailwind CSS via the Play CDN** for structural utilities only (flex, spacing, responsive prefixes). Never hardcode hex colors in utilities; every visual value must resolve to a CSS variable or component class. No `<style>` blocks in `index.html`.
* The base component classes from the reference spec (`.nav`, `.btn`, `.btn--primary`, `.card`, `.input`, `.badge`) are the foundation — preserve their visual DNA (brushstroke border, hard offset shadow, springy ease) and extend them with the full state matrix in §3.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text:** Load **Fraunces** (weights 400–900, plus italics) and **Playfair Display** via Google Fonts `<link>` tags with `preconnect`. Bind to `--font-base` / `--font-display`. Use Fraunces at heavy weights for display headlines.
* **Icons:** Use **Google Material Symbols (Rounded)** via the official Google Fonts stylesheet. Render as `<span class="material-symbols-rounded" aria-hidden="true">icon_name</span>`. **Raw inline SVGs and local icon files are forbidden.**
* Decorative icons get `aria-hidden="true"`; icon-only interactive elements get `aria-label`.

---

## 2. THEME DIRECTION — FAUVISM VISUAL LANGUAGE

* **2.1 Flat, unmixed color fields:** Backgrounds, cards, icon tiles, and section bands are single saturated hues applied in bold masses — as if squeezed straight from the tube. No subtle tints, no pastels, no soft gradients (the only permitted gradient is `--clash-gradient`, used sparingly: featured pricing frame and one decorative hero shape).
* **2.2 Brushstroke borders & hard shadows:** Every component boundary uses `--brushstroke-border` (thick, solid, hand-drawn feel). Elevation is expressed exclusively through hard offset shadows (`--shadow-sm`, `--shadow-md`) — **zero blur** on component shadows. Blur is permitted only on modal/scrim overlays.
* **2.3 Arbitrary, clashing color:** Color is assigned expressively, not naturalistically — a viridian section band, a cobalt testimonial field, an orange button on a magenta CTA. Adjacent hues should clash with energy. Always obey the §1.2 pairing table.
* **2.4 Expressive motion:** Slight rotations (−1° to 1°) on hover, springy `--ease-standard` transitions, tilted testimonial cards that straighten on hover. Motion is punchy, never floaty.
* **2.5 What this theme is NOT:** No glassmorphism, no soft drop-shadows, no muted neutrals, no thin hairline borders, no photorealism. If a choice feels safe and subtle, choose the bolder saturated option.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

### 3.1 Buttons (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--danger`, `.btn--success`, `.btn--error`, `.is-loading`)
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px; Fraunces 700; `--radius-md`; `--brushstroke-border`; background `--surface-2` with `--text-primary`.
* **Hover:** Background swaps to another saturated hue (base: `--viridian` with dark text; primary: `--magenta` with cream text and `--shadow-sm`), plus `translateY(-2px) rotate(-1deg)`; `cursor: pointer`.
* **Focus:** `:focus-visible` renders a distinct ring — `outline: 3px solid var(--secondary); outline-offset: 3px` — visible in both themes.
* **Active/Pressed:** `transform: scale(0.97)` (or `translateY(0) rotate(0)`).
* **Loading (`.is-loading`):** `aria-busy="true"`, interactions disabled, double-clicks prevented in JS; a CSS-only spinner (border-top animation in `currentColor`) replaces the label without changing button dimensions.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`, no transforms.
* **Success/Error:** `.btn--success` (viridian fill, dark text) and `.btn--error` (magenta fill, cream text) as temporary feedback states — always paired with an icon and `aria-live` text, never color alone.
* **Destructive:** Define `.btn--danger` (magenta fill, cream text) in the stylesheet, visually distinct in both themes, even if the page contains no destructive action.

### 3.2 Cards (`.card`, `.card--featured`, `.card--skeleton`, `.card--empty`)
* **Default:** Flex layout, `--surface` background, `--brushstroke-border`, `--radius-lg`, `--shadow-md`, generous `--space-6` padding.
* **Hover:** `translateY(-2px)` with a slight rotation (−0.5°) and a larger hard shadow offset.
* **Focus-within:** Border color shifts to `--secondary` when a child link/button receives focus.
* **Loading (skeleton):** Define a shimmer keyframe class with reserved dimensions to prevent layout jumps (part of the system, even if unused on this static page).
* **Empty state:** Define a fallback layout with a Material icon (e.g., `palette`) and clear guidance text.

### 3.3 Forms & Inputs (`.input-group`, `.input`, `.input-group__error`)
* **Structure:** Flex column wrapping a visible `<label for>`, the input, and a dedicated error-feedback container with reserved `min-height` (no layout jump).
* **States — all required:** empty, focused (cobalt border + `--shadow-sm` ring), filled, valid (`.is-valid`: viridian border + `check_circle` icon), invalid (`.is-invalid`: magenta border, `aria-invalid="true"`, `error` icon, error message), disabled (`opacity: .5`, `cursor: not-allowed`), read-only (dashed border).
* **Feedback:** The error/success container is an `aria-live="polite"` region. Submit flow: JS validates email format → invalid: message appears; valid: button enters `.is-loading` for ~1s → success message ("You're on the list") with `check_circle` in `--text-success`. No backend; simulate locally.

### 3.4 FAQ Accordion (`.faq__item`, `.faq__item--open`)
* Each question is a `<button>` (wrapped in `<h3>`) with `aria-expanded` and `aria-controls`; the panel has `role="region"` + `aria-labelledby`.
* Material `expand_more` icon rotates 180° on open, animated with `--transition-normal` `--ease-standard`.
* Panels animate open/closed via CSS (e.g., `grid-template-rows: 0fr → 1fr`). Fully keyboard operable; instant open/close under `prefers-reduced-motion`.

### 3.5 Modal / Overlay (conditional)
No modal is required by this brief — do not add one unless a section genuinely needs it. If any overlay is implemented, it must have: centered flex container (`align-items: center`), scrim backdrop at `--z-modal` (blur allowed here only), `role="dialog"` + `aria-modal` + labelledby, Material `close` icon button, keyboard focus trapping with focus return, close via `Esc` and scrim click, CSS-animated opening/open/closing states, and internal loading/success/error states.

---

## 4. PAGE SPECIFICATION — SECTION BY SECTION

### 4.0 Header & Navigation
* `<header>` landmark, sticky, `--surface` background, `--brushstroke-border` bottom, `z-index: var(--z-dropdown)`.
* `.nav` flex row, `align-items: center`, `justify-between`: brand wordmark (Fraunces 800, one word in `--primary`), anchor links (Features, How It Works, Testimonials, Pricing, FAQ) with saturated hover color and visible focus, the theme toggle (§1.3), and a compact `.btn--primary` CTA.
* **Mobile:** Links collapse behind a Material `menu` icon button; panel with column links, `aria-expanded`, `Esc` closes, focus returns to the toggle, panel at `--z-dropdown`.

### 4.1 Hero
* Two-column flex row (stacks to column below `lg`), `align-items: center`, on `--bg-primary`.
* **Copy side:** `.badge` pill, `<h1>` in Fraunces 900 with fluid `clamp()` sizing — highlight one phrase with a **flat `--viridian` marker background and dark text** (never gradient text); supporting paragraph in `--text-secondary`; CTA row (`.btn--primary` + `.btn--secondary` anchor); small muted trust line.
* **Visual side:** CSS-only Fauvist composition, `aria-hidden="true"`, `pointer-events: none`: 3–5 overlapping flat shapes (tilted rounded rectangle, circle, asymmetric-radius blob) filled with orange/cobalt/viridian/magenta, each with brushstroke border and hard shadow, slight rotations. Static by default; any gentle float animation must be wrapped in a motion-safe media query.

### 4.2 Features (3 cards)
* Section on a flat `--bg-secondary` field; kicker badge + `<h2>`.
* Three `.card` elements in a flex row (column on mobile). Each: 56px icon tile with an arbitrary flat hue (card 1 orange, card 2 cobalt, card 3 viridian — icon color per §1.2 pairing), a Material icon (`brush`, `palette`, `auto_awesome` or similar), `<h3>`, and two lines of real copy.
* Card hover and focus-within per §3.2.

### 4.3 How It Works (3 steps)
* Section on a flat **viridian field** with `#1a1a1a` text (bold Fauvist move; contrast verified).
* Three steps in a flex row (column on mobile): oversized Fraunces numeral in a flat tile, Material icon, `<h3>`, description. Step tiles are `--surface` cards with brushstroke borders and cobalt hard shadows.
* Dashed 3px connector line between steps on desktop; hidden on mobile.

### 4.4 Testimonials
* Section on a flat **cobalt field** with cream text.
* Three quote cards (`--surface`, dark text), tilted alternately `rotate(-1deg)` / `rotate(1deg)`, straightening on hover. Each: quote text, flat-color avatar circle containing the person's initials (pairing-correct text color), name, and role. Decorative `format_quote` Material icon allowed.

### 4.5 Pricing (3 tiers)
* Section on `--bg-primary`; three tiers in a flex row (column on mobile).
* **Middle tier `.card--featured`:** 3px `--clash-gradient` frame (pseudo-element or border-image), slight scale-up on desktop, `.badge` "Most popular" (magenta fill, cream text), `--shadow-md`. Must remain equally distinct in dark mode.
* Each tier: name, large Fraunces price, billing hint, feature list with Material `check` icons in `--text-success`, and a CTA (featured: `.btn--primary`; others: base `.btn`).

### 4.6 FAQ
* Section on `--bg-secondary`; content max-width ~760px, centered; `<h2>` + short intro; at least 5 real Q&A items built per §3.4.

### 4.7 Final CTA
* Full-bleed flat **magenta field**, cream text, brushstroke top and bottom borders.
* `<h2>` display headline, one supporting line, and the email-capture form per §3.3: on desktop a flex row (`align-items: center`) of `.input` + `.btn--primary` (orange fill, dark text — deliberate clash); stacked column on mobile. Full state matrix + `aria-live` feedback required.

### 4.8 Footer with Secondary Links
* `--footer-bg` field with `--footer-text`; brushstroke top border.
* Flex row wrap: brand block (wordmark, one-line tagline, social links as Material icon buttons with `aria-label`, 44px targets) + **three secondary link groups** (e.g., Product, Company, Support — 3–4 real-labeled links each; anchor to page sections where applicable).
* Links: muted cream, hover to `--primary`, visible focus ring. Bottom bar: copyright (fictional brand, current year) and a "Back to top" link.

---

## 5. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** Fluid sizing, mobile-first breakpoints, zero horizontal overflow at 320px.
* **Smooth animations:** CSS transitions on every state change using `--transition-fast` / `--transition-normal` and `--ease-standard`. A global `prefers-reduced-motion: reduce` block disables all transforms, rotations, spins, and panel animations.
* **Accessibility (a11y):** WCAG AA contrast in **both light and dark modes** — validate, don't assume. Never communicate state by color alone (pair with icons/text). Semantic HTML5 landmarks (`header`, `nav`, `main`, `footer`, `section` with `aria-labelledby`), a single `<h1>` in the hero with logical heading order, a skip-to-content link, visible focus everywhere, logical DOM/focus order, full keyboard operability (no mouse-only interactions), and `aria-live` regions for all dynamic feedback (form results, theme changes announced where appropriate).
* **Mandatory visual feedback:** Every click, hover, and submission triggers a visible state change.
* **Destructive actions:** `.btn--danger` must be visually distinct in both themes (defined in the system even if unused here).

---

## 6. DELIVERABLE & OUTPUT FORMAT

* **File structure:** Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry point (`<script defer src="script.js">`). No `<style>` blocks in HTML. No inline styles or inline event handlers.
* **Naming convention:** **BEM only** — `.block__element--modifier` (e.g., `.pricing-card--featured`, `.faq__item--open`). Never mix conventions. JavaScript hooks use `data-*` attributes, not styling classes.
* **No unrequested placeholders:** All user-facing copy is real, themed English text. Placeholder text is not permitted anywhere on this page.
* **Definition of Done — self-validate before submitting:**
  1. Light and dark themes both render correctly; toggle persists across reload; first visit respects `prefers-color-scheme`.
  2. Contrast spot-checks pass AA in both modes (headline on each colored field, button text on each fill, footer links).
  3. No horizontal scroll at 320px; all layouts stack cleanly.
  4. Full keyboard pass: skip link, nav, mobile menu, toggle, FAQ, form, all CTAs.
  5. `prefers-reduced-motion` disables all animation.
  6. Every button state in §3.1 exists in the stylesheet; form states in §3.3 all reachable.
  7. Zero `style="..."` attributes, zero inline handlers, zero inline SVGs, BEM consistent throughout.

Generate the complete, final code now.
