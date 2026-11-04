# BUILD SPECIFICATION — "UKIYO-E" LANDING PAGE

**Mission:** You are a Senior Frontend Engineer and Expert UI Designer. Build a **complete, production-quality landing page in a single attempt** — no partial deliverables, no TODOs, no truncation. The page promotes a fictional brand, **"Floating World Press"** — an online woodblock-print atelier offering courses and limited-edition prints. All user-facing copy must be written in **polished, original English** consistent with the theme.

**Design language (Ukiyo-e, 1603–1868 Edo-period Japan):** Flat fields of warm washi-cream color bounded by **bold ink key-lines** (2.5px solid borders — the woodblock registration line), **hard offset shadows with zero blur** (stacked woodblock impressions), **vermillion seal-stamp (hanko) squares** as recurring accents, **Prussian blue / wave blue** nature motifs (Mt Fuji, Hokusai's Great Wave), **asymmetric balance**, generous **negative space (ma)**, a subtle **paper-grain texture**, and deliberate 1px **"misregistration" shifts** on interaction. No soft blurs, no glassmorphism, no gradients between colors — only flat fills, key-lines, and hard shadows.

**Sections required (in order):** Sticky Nav → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling must live in `style.css`. **Explicitly forbidden:** any `style="..."` attribute in the HTML.
* All design properties, layout rules, and states must be targeted via class or ID selectors.
* HTML must remain clean, semantic, and styling-agnostic — changing the site's look must only require editing `style.css`.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` using the block below (extend it, never rename the canonical `--color-*` tokens). The system aliases (`--primary`, `--bg-primary`, etc.) are **mandatory**:

```css
:root {
  /* Ukiyo-e light — warm washi paper, sumi ink, Prussian blue, vermillion */
  --color-bg: #eee3c8;
  --color-surface: #f6ecd2;
  --color-surface-strong: #e6d7ac;
  --color-border: #1c1a15;
  --color-text: #1c1a15;
  --color-text-muted: #4a4736;
  --color-primary: #1d4e89;
  --color-accent: #b23a2e;
  --color-wave: #2f6f8f;
  --color-success: #3e6b4f;
  --color-error: #b23a2e;

  /* mandatory system aliases */
  --primary: var(--color-primary);
  --secondary: var(--color-accent);
  --bg-primary: var(--color-bg);
  --bg-secondary: var(--color-surface);
  --text-primary: var(--color-text);
  --text-secondary: var(--color-text-muted);
  --text-success: var(--color-success);
  --text-error: var(--color-error);
  --border-default: var(--color-border);
  --border-success: var(--color-success);
  --border-error: var(--color-error);

  /* radius / shadow / spacing / motion / stacking */
  --radius-sm: 0px; --radius-md: 2px; --radius-lg: 2px; --radius-pill: 999px;
  --shadow-sm: 2px 2px 0 rgba(28,26,21,0.15);
  --shadow-md: 4px 4px 0 rgba(28,26,21,0.18);
  --shadow-lg: 6px 6px 0 rgba(28,26,21,0.22);
  --spacing-gap: 16px;
  --transition-fast: 150ms var(--ease-standard);
  --transition-normal: 250ms var(--ease-standard);
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;

  /* type */
  --font-base: 'Zen Old Mincho', 'Noto Serif JP', Georgia, serif;
  --font-display: 'Zen Old Mincho', 'Shippori Mincho', serif;

  /* signature tokens */
  --keyline: 2.5px solid var(--color-border);
  --seal-stamp: var(--color-accent);
}
```

* **Contrast pairing:** every light background token pairs with a dark text token and vice versa — enforce this in both themes. The light background is `#eee3c8` (never pure white; use `#fefefe` only if a near-white is unavoidable).
* **Dark palette (mandatory — the source spec does not declare modes; you must design and contrast-validate both light and dark before delivery):** a "night print" palette of deep sumi-ink indigo with an inverted cream key-line. Apply the exact block below under **both** a `.dark` class selector and `@media (prefers-color-scheme: dark) { :root:not(.light) { … } }`:

```css
.dark {
  --color-bg: #14181d;        /* deep sumi-ink indigo */
  --color-surface: #1c222a;
  --color-surface-strong: #262e38;
  --color-border: #e8ddc2;    /* inverted cream key-line */
  --color-text: #eee3c8;
  --color-text-muted: #b3a88e;
  --color-primary: #4a7fb5;   /* lifted Prussian blue */
  --color-accent: #d95c4a;    /* lifted vermillion */
  --color-wave: #5f9cba;
  --color-success: #7fae8a;
  --color-error: #d95c4a;
  --shadow-sm: 2px 2px 0 rgba(0,0,0,0.45);
  --shadow-md: 4px 4px 0 rgba(0,0,0,0.5);
  --shadow-lg: 6px 6px 0 rgba(0,0,0,0.55);
}
```

* Verify every text/surface combination meets WCAG AA (4.5:1 body text, 3:1 large text and UI borders) in **both** modes; adjust token values upward if any pair fails.

**1.3 Mandatory Dark Mode Support**
* Dark mode must be fully functional: tokens switch via `.dark` / media query with **no HTML restructuring**.
* Provide a **visible theme toggle** in the nav (Google Material Symbol `dark_mode` / `light_mode`) with correct `aria-pressed` and a dynamic `aria-label` ("Switch to dark theme" / "Switch to light theme").
* Persist the user's choice in `localStorage` (key `theme`); on return visits apply it. On first visit, fall back to `prefers-color-scheme`. The JS must always set one of the classes `.dark` / `.light` so the media query (guarded with `:not(.light)`) never fights the explicit choice.
* First paint must be correct without JS (the media query handles it); a brief transition flip on a stored-choice mismatch is acceptable — **no inline scripts are permitted** to pre-paint.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox. **Every flex container must default to `align-items: center`** unless an exception is explicitly justified in a CSS comment (e.g., stretch-aligned card content columns).
* Mobile-first: rows convert to columns on small viewports; **no horizontal scrolling at any width**; use `clamp()` for fluid typography between the `--text-*` scale steps.

**1.5 Framework Choice**
* Do **not** add a Tailwind build step. Write clean hand-authored CSS in `style.css`, organized with native CSS `@layer` in this order: `tokens` → `base` → `layout` → `components` → `sections` → `utilities`. All component styling uses the reusable class names defined below (`.nav`, `.btn`, `.card`, `.input`, `.badge`) — never one-off utility soup for theme styling.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load via `<link>` (with `preconnect`): **Zen Old Mincho** (400–900), **Noto Serif JP** (400, 700), and **Shippori Mincho** (500, 800). Bind them to `--font-base` / `--font-display`. Body text uses `--font-base`; all display headings use `--font-display` at heavy weights.
* Icons: **Google Material Symbols Rounded** only. **Explicitly forbidden:** raw inline SVGs, local icon files, emoji-as-icons. Decorative theme art (waves, Mt Fuji, wave dividers, paper grain) must be built **purely in CSS** (gradients, `clip-path`, borders, pseudo-elements) — no SVG assets.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component (`.btn`)**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; flat fill (`--color-surface`), `border: var(--keyline)`, `box-shadow: var(--shadow-sm)`, `cursor: pointer`.
* **Hover:** `transform: translate(-1px, -1px)` with `--shadow-md` (the print "lifts off the page").
* **Focus:** distinct `:focus-visible` ring using `outline: 2px solid var(--color-primary); outline-offset: 3px`.
* **Active/Pressed:** `transform: translate(1px, 1px)` with `box-shadow: none` (the block is "pressed into the paper").
* **Loading (`.btn--loading`, set `aria-busy="true"`):** disables pointer events to prevent double-clicks, keeps exact button dimensions, and renders a CSS spinner — a small rotating vermillion seal-square (`@keyframes` rotation) paired with the text "Working…". No layout shift.
* **Disabled (`[disabled]`):** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`, no transforms.
* **Success/Error:** `.btn--success` / `.btn--error` temporary feedback states driven by `--text-success` / `--text-error` tokens (border + icon swap, never color alone).
* **Variants:** `.btn--primary` (Prussian blue fill, cream `#f6ecd2` text), `.btn--accent` (vermillion fill, cream text), `.btn--ghost` (transparent, key-line appears on hover), `.btn--danger` (error-token fill, visually distinct in **both** light and dark themes).

**2.2 Card Component (`.card`)**
* **Default:** flat `--color-surface` fill, `border: var(--keyline)`, `box-shadow: var(--shadow-md)`, `border-radius: var(--radius-md)`, and a 16×16px vermillion seal-stamp via `.card::before` in the top-right corner.
* **Hover:** elevation shift to `--shadow-lg` plus `transform: translateY(-2px)` **and** a signature 1px "misregistration" shift — the inner fill (a pseudo-element inset by the key-line) offsets 1px diagonally, echoing woodblock registration drift.
* **Focus-within:** when a child link/button receives focus, the card border shifts to `--color-primary`.
* **Loading (skeleton):** define `.card--skeleton` with a shimmer `@keyframes` animation over muted placeholder blocks sized to the final content — no layout jump when content swaps in.
* **Empty state:** define `.empty-state` (centered Material Symbol, short guidance text) as part of the card system.

**2.3 Form & Input Requirements**
* The Final CTA contains an email-capture form. Structure: a flex `.input-group` wrapping a `<label>`, an `.input` field, and a dedicated error-feedback container.
* **States (all CSS-class driven):** Empty, Focused (key-line ring via `box-shadow` using `--color-primary`), Filled, Valid (success border + `check_circle` icon), Invalid (error border, `--text-error` message text + `error` icon, message announced via `aria-live="polite"`), Disabled, Read-only.
* `.input` base: full width, `--color-surface-strong` fill, `border: var(--keyline)`, placeholder in `--color-text-muted`. Never communicate a state by color alone — always pair color with an icon and/or text.

**2.4 Modal / Overlay Requirements (applies to the mobile navigation overlay)**
* **States:** Opening, Open, Closing — all animated via CSS transitions (`--transition-normal`).
* **UX:** fixed full-screen overlay with a dimmed backdrop (`rgba` of `--color-border`), stacked at `--z-modal`, centered flex container (`align-items: center`), a close button using Material Symbol `close`, **keyboard focus trapping**, body scroll lock, close via `Esc` and via backdrop click. Use `role="dialog"`, `aria-modal="true"`, and a labelled title.
* **Toast (`.toast`):** fixed bottom, stacked at `--z-toast`, `aria-live="polite"`, success/error variants, auto-dismiss after ~4s, close button with Material Symbol `close`, slide/fade CSS transitions.

---

## 3. PAGE COMPOSITION — SECTION-BY-SECTION SPEC

**3.0 Global Shell**
* Skip-to-content link (visually hidden until focused), `<header>` with sticky `.nav` (brand mark = wordmark + vermillion seal square via `.nav::after`, anchor links, theme toggle, primary CTA, hamburger `menu` icon below 768px), `<main>` with one `<section>` per required block (each with an `id`, a heading, and `aria-labelledby`), and `<footer>`.
* Between major sections, render **wave divider bands**: CSS-only scallop patterns (repeating radial-gradients in `--color-wave` / `--color-primary` on `--color-bg`).
* Apply a global **paper-grain texture** via a fixed `body::after` overlay (layered repeating gradients at ≤4% opacity, `pointer-events: none`) that works in both light and dark modes without harming contrast.

**3.1 Hero**
* Asymmetric 60/40 two-column flex (stacks on mobile). Left: a `.badge` ("Edo-period craft, modern studio"), display headline in `--font-display` up to `--text-5xl` (fluid via `clamp()`), muted subcopy, and two CTAs (`.btn--primary` "Browse the Collection", `.btn--ghost` "Watch the Process"). Below, an asymmetric 3-figure stat row. Exploit negative space — do not fill every pixel.
* Right: **CSS-only art** — a Mt Fuji silhouette (Prussian blue `clip-path` polygon with a cream snow cap) rising over layered wave scallops referencing the Great Wave. Mark it `aria-hidden="true"`; it must never capture focus or cause overflow.

**3.2 Features (3 cards)**
* Section heading + short intro, then three `.card` blocks (Material Symbols: `brush`, `landscape`, `print` — or equally thematic choices), each with title and 2–3 lines of copy. On desktop, stagger the middle card slightly (`translateY`) for asymmetric balance. Cards receive full hover/focus-within behavior per 2.2.

**3.3 How It Works (3 steps)**
* Three steps in a flex row on desktop (column on mobile), connected by a CSS wave/dashed line. Each step: a vermillion seal-stamp square containing a kanji numeral (`一`, `二`, `三` — decorative, `aria-hidden="true"`, with a visually-hidden "Step 1/2/3" text), a step title, and copy.

**3.4 Testimonials**
* Three quote cards (`.card`) with a `format_quote` Material Symbol, quote, name, and role. Offset one card for asymmetric balance. On page load, `script.js` shows `.card--skeleton` shimmer for ~900ms, then swaps in the real content with a fade (skipped entirely under `prefers-reduced-motion`).

**3.5 Pricing (3 tiers)**
* Three pricing cards; the middle "Studio" tier is featured: vermillion seal badge "Most Popular", `--shadow-lg`, slight scale/offset, `.btn--primary` CTA while flanking tiers use `.btn--ghost`. Each tier lists price, 4–5 features with `check_circle` icons, and a CTA with full button states per 2.1. Add a short footnote under the row.

**3.6 FAQ**
* 5–6 questions as a button-driven accordion: each trigger is a `<button>` with `aria-expanded` and `aria-controls`, chevron `expand_more` icon rotating 180° on open, panel animated via CSS (`grid-template-rows: 0fr → 1fr` or equivalent). Fully keyboard operable; no mouse-only interactions.

**3.7 Final CTA**
* Full-width band with a CSS wave-motif background, display headline, supporting line, and the email-capture form per 2.3. Submit flow: button enters `.btn--loading` → on valid email, `.btn--success` + toast "You're on the list" (`aria-live`); on invalid, inline error message + `.input` invalid state.

**3.8 Footer**
* Brand block (wordmark + seal square), 3 columns of secondary links (e.g., Atelier/About, Process, Shipping & Care, Contact, Privacy, Terms — in-page `#` anchors are acceptable), small-print copyright line, and a back-to-top link. All links must be real, styled, focusable elements.

---

## 4. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid sizing, no horizontal overflow at any breakpoint, touch targets ≥44×44px.
* **Smooth animations:** `transition: var(--transition-normal)` on all state changes; **respect `prefers-reduced-motion`** — disable transforms, shimmer, spinner rotation, and accordion/toast motion.
* **Accessibility (a11y):** AA contrast in both light and dark modes (validate before delivery); semantic HTML5 landmarks; correct ARIA roles/labels on the toggle, accordion, overlay, and toast; logical DOM/focus order; full keyboard operability; `aria-live` regions for form errors, loading, and toasts; never rely on color alone.
* **Mandatory visual feedback:** every click, hover, focus, and submission triggers a visible state change.
* **Destructive actions:** any `.btn--danger` must be visually distinct in both themes.

---

## 5. DELIVERABLE & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, and `script.js`. Exactly one `<script src="script.js" defer></script>` reference — no inline script blocks. Google Fonts and Material Symbols `<link>` tags in `<head>`.
* **Naming:** strict **BEM** (`block__element--modifier`) for every custom class — never mix conventions.
* **Copy:** real, polished English copy throughout — **no lorem ipsum**, no unrequested placeholders, no TODO comments, no console errors.
* Deliver all three files complete on the first attempt.
