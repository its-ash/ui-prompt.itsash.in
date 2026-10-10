# BUILD PROMPT — "GRUNGE DESIGN" LANDING PAGE (1990s Brutalist · David Carson / Ray Gun)

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce a complete, production-quality landing page in a single pass. The theme is **Grunge Design** — distressed, dirty, photocopied, torn-edged, chaotic-overlap, anti-grid brutalism ("Brutalism & Raw" category, 1990s era, David Carson / Ray Gun magazine). The *chaos is purely aesthetic and CSS-driven*; the engineering underneath must be strict, semantic, accessible, and fully themeable.

**Sections (in this order):** Header/Nav → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA (email capture) → Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. **Forbidden:** `style="..."` attributes, inline event handlers (`onclick`, etc.), and `<style>` blocks in HTML.
* All design properties, layout rules, and states are targeted via **class/ID selectors only**.
* HTML stays clean, semantic, and style-agnostic — re-theming the page must require CSS edits only, never markup changes.
* All JavaScript lives in `script.js`, attached exclusively via `addEventListener`. The HTML contains exactly **one** `<script src="script.js" defer></script>` reference and nothing else.

**1.2 CSS Variables & Theme Tokens (canonical block — adopt verbatim)**
Use this token system as the single source of truth. The `--color-*` names below fulfill the mandatory semantic roles (`--color-bg` = bg-primary, `--color-surface` = bg-secondary, `--color-text` = text-primary, `--color-text-muted` = text-secondary, `--color-primary` = primary, `--color-accent` = secondary/accent, `--color-border` = border-default):

```css
:root {
  /* color — DARK theme (default, per source spec) */
  --color-bg: #1a1815;
  --color-surface: #24211c;
  --color-surface-strong: #2e2a23;
  --color-border: #55503f;
  --color-text: #ece6d8;
  --color-text-muted: #a89f8a;
  --color-primary: #c1391f;
  --color-on-primary: #fff2e0;   /* constant pair for primary fills */
  --color-accent: #d9b23c;      /* used as FILL; always pair with --color-ink text */
  --color-accent-text: #d9b23c; /* accent as foreground; re-tokened per theme */
  --color-ink: #0c0b09;
  /* mandatory state tokens */
  --color-success: #9aab61;
  --color-error: #ff6b4a;
  --color-border-success: var(--color-success);
  --color-border-error: var(--color-error);

  /* radius — torn/rough, no clean rounding */
  --radius-sm: 0px; --radius-md: 2px; --radius-lg: 0px; --radius-pill: 2px;

  /* shadow — hard offset "photocopy" shadows */
  --shadow-sm: 2px 2px 0 var(--color-ink);
  --shadow-md: 4px 4px 0 var(--color-ink);
  --shadow-lg: 6px 6px 0 var(--color-ink);
  /* clipped-element equivalents (clip-path kills box-shadow; use filter) */
  --drop-sm: drop-shadow(2px 2px 0 var(--color-ink));
  --drop-md: drop-shadow(4px 4px 0 var(--color-ink));
  --drop-lg: drop-shadow(6px 6px 0 var(--color-ink));

  /* font — Google Fonts are the effective primaries */
  --font-sans: 'Special Elite', 'Courier New', monospace;
  --font-display: 'Oswald', 'Impact', 'Arial Narrow', sans-serif;
  --font-mono: 'Special Elite', 'Courier New', ui-monospace, monospace;

  /* text scale */
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.9rem; --text-3xl: 2.6rem;
  --text-4xl: 3.6rem; --text-5xl: 5rem;

  /* space */
  --space-1: 4px; --space-2: 7px; --space-3: 11px; --space-4: 15px; --space-6: 22px;
  --space-8: 30px; --space-12: 44px; --space-16: 60px; --space-24: 90px;
  --spacing-gap: var(--space-4);

  /* ease + transitions — stepped "photocopier jitter" */
  --ease-standard: steps(4, end);
  --transition-fast: 80ms;
  --transition-normal: 160ms;

  /* elevation/stacking */
  --z-dropdown: 10; --z-modal: 100; --z-toast: 200;

  /* texture */
  --grain-opacity: 0.6;
  --grain-svg: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>");
  --torn-clip: polygon(0% 2%, 3% 0%, 8% 3%, 15% 0%, 22% 2%, 30% 0%, 40% 3%, 50% 0%, 60% 2%, 70% 0%, 80% 3%, 90% 0%, 100% 2%, 100% 98%, 92% 100%, 85% 97%, 75% 100%, 65% 98%, 55% 100%, 45% 97%, 35% 100%, 25% 98%, 15% 100%, 8% 97%, 0% 100%);
}

/* LIGHT theme — "photocopied paper" (never pure white) */
.theme-light {
  --color-bg: #d8d2bf;
  --color-surface: #cfc8b2;
  --color-surface-strong: #c3ba9f;
  --color-border: #55503f;
  --color-text: #1a1815;
  --color-text-muted: #57503e;
  --color-primary: #a92e17;   /* darkened rust for AA on paper */
  --color-accent: #d9b23c;    /* constant fill; always pair with --color-ink text */
  --color-accent-text: #8a6c14;
  --color-ink: #0c0b09;
  --color-success: #4f6223;
  --color-error: #b32410;
  --grain-opacity: 0.35;
}
```

* **Contrast pairing (mandatory, every theme):** light background tokens pair with dark text tokens; dark background tokens pair with light text tokens. `--color-primary` fills always pair with `--color-on-primary`; `--color-accent` fills always pair with `--color-ink`.
* **Light mode background:** never pure white. Use the aged-paper tones above; `#fefefe` only if a near-white is genuinely required.
* **Shadow/clip-path rule:** `clip-path` clips `box-shadow`. Any element using `--torn-clip` must use `filter: var(--drop-md)` (or sm/lg) instead of `box-shadow` so the hard photocopy shadow follows the torn silhouette.

**1.3 Mandatory Dark Mode Support**
* The provided palette **is the dark theme** and is the default. The source spec explicitly requires validating in **both light and dark before publishing** — build the `.theme-light` block above and verify contrast in both.
* **Implementation:** toggle `.theme-light` on `<html>`; `:root` holds the dark palette. On first visit, honor `prefers-color-scheme`; afterwards, persist the user's choice in `localStorage` (e.g., key `grunge-theme`). Theme switching must require zero HTML restructuring.
* **Toggle control:** a visible button in the nav showing a Google Material Symbol (`dark_mode` / `light_mode`), with correct `aria-pressed` (true when dark) and descriptive `aria-label`, styled like a `.btn` variant. Announce the change via an `aria-live="polite"` region.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with **Flexbox**. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
* Mobile-first: single-column stacks on small viewports, multi-column rows from `768px` up (flex-wrap + `flex: 1 1 <min>`). **No horizontal scrolling at any width from 320px to 1920px** — use `clamp()` for display type, `overflow-wrap`, and `body { overflow-x: hidden; }` as a safety net for rotated/oversized decorative elements.
* Anti-grid chaos is achieved via transforms (rotations, offsets, overlaps) *inside* a flex skeleton — never via layout hacks that break responsiveness.

**1.5 Styling Approach**
* Hand-written, token-driven custom CSS (the provided token system is the framework for this build). No CSS frameworks; if any utility layer is introduced it must map back to these tokens via `@layer`/`@apply`-style grouping.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load **Special Elite** and **Oswald** via Google Fonts `<link>` in `<head>`. The source stacks listed `Courier New`/`Impact` first — **explicit adjustment:** Google Fonts must be the effective primaries (as shown in the token block); system fonts remain fallbacks only.
* Icons: **Google Material Symbols (Sharp style)** via Google Fonts link, e.g., `<span class="material-symbols-sharp">check</span>`. **Forbidden:** raw inline SVG icon elements and local icon files.
* **Exception clause:** the fractal-noise grain SVG data-URI is permitted **strictly as a CSS background texture** (`var(--grain-svg)`). It is a texture, not an icon, and must never appear as an inline HTML element.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button (`.btn`)**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` — Oswald 700, 2px `--color-ink` border, hard offset shadow, stepped transition, minimum touch target **44×44px**. Variants: `.btn--primary` (primary fill + `--color-on-primary` text), `.btn--ghost` (transparent bg, ink border), `.btn--danger` (error-driven fill/border, visually distinct in **both** themes).
* **Hover:** `translate(-1px,-1px) rotate(-0.5deg)` + shadow steps up (`--shadow-md`), `cursor: pointer`.
* **Focus:** `:focus-visible` → `outline: 3px solid var(--color-accent-text); outline-offset: 2px;` — never remove.
* **Active/Pressed:** `translate(1px,1px)`, shadow removed — the "stamped" feel.
* **Loading (`.btn--loading`):** disables interaction and prevents double-clicks; renders a CSS spinner (stepped rotation animation) or animated Material Symbol `progress`; **button dimensions must not change**; set `aria-busy="true"`.
* **Disabled:** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`.
* **Success/Error (`.btn--success` / `.btn--error`):** temporary feedback states driven by `--color-success` / `--color-error`, announced via `aria-live`.

**2.2 Card (`.card`)**
* **Default:** grain background (`var(--grain-svg)` + `background-blend-mode: overlay`), 2px `--color-border` border, `clip-path: var(--torn-clip)`, `filter: var(--drop-md)`, slight rotation (≤0.6deg on interactive cards; decorative cards may rotate more).
* **Hover (interactive cards only):** `translateY(-2px)` + rotation shift + shadow steps up to `--drop-lg`.
* **Focus-within:** border shifts to `--color-accent-text` when a child link/button receives focus.
* **Loading (`.card--skeleton`):** photocopier "light-bar" sweep shimmer animation defined in CSS; must not cause layout jumps; `aria-hidden="true"`; disabled under reduced motion.
* **Empty state (`.card--empty`):** structured fallback with a Material Symbol and clear guidance text.

**2.3 Form & Input (`.input-group`)**
* **Structure:** flex-column `.input-group` wrapping `<label>`, `<input class="input">`, and a dedicated `.input-error` container (`aria-live="polite"`, empty until needed).
* **States:** empty; focused (primary border + `--shadow-sm` per spec); filled; **valid** (`.input--valid`: success border + Material Symbol `check`); **invalid** (`.input--invalid`: error border, `--color-error` message, Material Symbol `error`, message linked via `aria-describedby`); disabled (opacity + `not-allowed`); read-only (dashed border, muted).
* Never rely on color alone — icons + text messages always accompany valid/invalid states.

**2.4 FAQ Accordion (`.faq-item`)**
* Pattern per item: `<h3><button class="faq-trigger" aria-expanded="false" aria-controls="faq-panel-N">Question <span class="material-symbols-sharp">expand_more</span></button></h3>` + `<div class="faq-panel" id="faq-panel-N" role="region">Answer</div>`.
* JS toggles `aria-expanded` and panel visibility; CSS animates open/close (`grid-template-rows: 0fr → 1fr` or height) with `var(--transition-normal) var(--ease-standard)`; chevron rotates 90deg.
* Fully keyboard operable (native button), visible focus, hover feedback on triggers.

**2.5 Overlay/Modal (only if introduced)**
* The requested sections do not require a modal — do not add one gratuitously. If any overlay becomes necessary: centered flex container (`align-items: center`), backdrop, Material Symbol close button, Esc + overlay-click close, focus trapping, animated open/close, `z-index: var(--z-modal)`, correct `role="dialog"`/`aria-modal` semantics.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid `clamp()` sizing, flex-wrap breakpoints, zero horizontal overflow.
* **Smooth (stepped) animations:** every state change transitions with `transition: <property> var(--transition-fast|normal) var(--ease-standard)`. Extend the spec's `prefers-reduced-motion` block to **all** animated elements: no transitions, no transforms, no rotations, no skeleton/shimmer animation, no grain flicker.
* **Accessibility (a11y):** WCAG AA contrast in **both** themes (spot-validate: body text, muted text, primary button, accent badge, featured pricing card, success/error text). Never color-only state communication. Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `blockquote`, `footer`), exactly one `h1`, logical heading order, a visually-hidden skip-to-content link, correct ARIA on all custom widgets (accordion, theme toggle, mobile menu), full keyboard operability, and `aria-live` regions for dynamic feedback (form errors, loading, theme change, toasts).
* **Controlled chaos clause:** "broken legibility" applies to **decorative display type only** (overlaps, rotations, misprint shadows, stroke ghosts). All informational text — body copy, labels, buttons, prices, FAQ answers — stays unrotated (or ≤0.5deg), ≥4.5:1 contrast, fully legible. Interactive elements keep ≥44×44px hit targets regardless of rotation, and decorative overlaps must never cover interactive elements.
* **Mandatory visual feedback:** every click, hover, focus, and submission triggers a visible state change.
* **Destructive actions:** `.btn--danger` must be visually distinct in both light and dark themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, `script.js`. One deferred `<script src="script.js" defer>` reference; Google Fonts links (Special Elite, Oswald, Material Symbols Sharp) in `<head>`.
* **Naming:** BEM exclusively (`.block__element--modifier`), consistent with the spec's `.btn--primary` convention (e.g., `.card--featured`, `.faq-trigger`, `.input--invalid`, `.section-label`). Never mix conventions.
* **CSS organization:** (1) tokens (`:root` + `.theme-light`), (2) base/reset, (3) texture utilities (grain, splatter, misprint), (4) components, (5) section styles, (6) responsive + reduced-motion — with comment headers per layer.
* **Copy:** invent coherent, original **English** copy for a fictional brand fitting the 1990s underground zine aesthetic (raw, anti-corporate, punchy). **No lorem ipsum.** All user-facing text in English.
* **No external image assets:** every texture (grain, splatter, torn edges, misprints) is CSS-only via the data-URI, gradients, blend modes, clip-paths, and text-shadows.
* **JS scope:** theme toggle + persistence, FAQ accordion, mobile nav menu, and Final CTA form validation with loading/success/error states. No libraries, no inline scripts, no unrequested widgets.

---

## 5. PAGE COMPOSITION & SECTION-BY-SECTION REQUIREMENTS

**Global motifs (define once, reuse everywhere):**
* `.section-label` — every section `h2` rendered as a rotated "zine tab" strip: Oswald uppercase, `--color-primary` or `--color-accent` fill with correct contrast pairing, hard shadow, alternating rotation between −1deg and +1.5deg.
* `.splatter` — CSS-only dirt/splatter via layered `radial-gradient`s (`--color-primary`/`--color-ink`, low opacity), absolutely positioned, `aria-hidden="true"`, `pointer-events: none`.
* `.misprint` — photocopy misregistration on display type: layered `text-shadow` (e.g., `3px 2px 0 var(--color-primary)`) and/or `-webkit-text-stroke` ghost offsets.
* Global grain: `body::before` fixed overlay using `var(--grain-svg)`, `mix-blend-mode: overlay`, `opacity: var(--grain-opacity)`, `pointer-events: none`.

**5.1 Header/Nav (`.nav`):** brand wordmark (Oswald, slight rotation), anchor links (Features, How It Works, Testimonials, Pricing, FAQ), theme toggle, `.btn--primary` CTA. Grain background, 3px ink bottom border, `rotate(-0.4deg)` per spec (contained — no horizontal scroll). Mobile: links collapse behind a Material Symbol `menu` button (`aria-expanded`) toggling a flex-column panel at `z-index: var(--z-dropdown)`; Escape closes it.

**5.2 Hero:** layered collage — oversized overlapping headline lines (Oswald, `clamp()` up to `--text-5xl`, mixed rotations, one word in `--color-primary` with `.misprint`), `.badge` rotated −2deg, Special Elite subcopy in `--color-text-muted`, two CTAs (`.btn--primary` + `.btn--ghost`), a torn decorative panel (`--torn-clip`) behind, `.splatter` accents. Single `h1`; logical DOM order; decorations never cover CTAs.

**5.3 Features (3 `.card`s):** Material Symbol icon per card (accent-colored), `h3` Oswald uppercase, Special Elite body; alternating rotations (−0.5deg / 0.4deg / −0.3deg); drop-shadow per the clip-path rule; flex-wrap → three-across at ≥768px.

**5.4 How It Works (3 steps):** giant degraded numerals (01/02/03 — Oswald, text-stroke or low opacity, rotated), step title + copy, torn dashed connector (`repeating-linear-gradient`), staggered vertical offsets on desktop (anti-grid), single column on mobile.

**5.5 Testimonials (3 quotes):** torn "zine clipping" cards — `blockquote` (Special Elite), `cite` (author + role), Material Symbol `format_quote`, alternating rotations, one featured with an accent border; grain; flex-wrap responsive.

**5.6 Pricing (3 tiers):** `.card` per tier; middle tier `.card--featured` — `--color-primary` fill with `--color-on-primary` text (contrast pairing enforced), rotated `.badge` "MOST POPULAR", `--drop-lg`; Oswald price; feature list with Material Symbol `check` items; `.btn--primary` CTA on the featured tier, `.btn` on the others. Validate the featured card's contrast in both themes.

**5.7 FAQ:** 5–6 items per spec 2.4, separated by 2px `--color-ink`/`--color-border` rules, hover + focus feedback on triggers.

**5.8 Final CTA:** big overlapping Oswald statement; `.input-group` email capture + `.btn--primary` submit (flex row → column on mobile). Full state machine: submit → `.btn--loading` (spinner, `aria-busy`) → invalid email shows `.input--invalid` + `aria-live` error → valid shows `.btn--success` + success message ("You're on the list") via `aria-live`. Simulate async with a short `setTimeout`.

**5.9 Footer:** 3–4 flex-wrap columns of secondary links (pointing to page anchors where possible), social icons via Material Symbols, brand wordmark, copyright, 3px ink top border, muted text at ≥4.5:1 contrast.

---

## 6. ACCEPTANCE CHECKLIST (validate before publishing — in LIGHT and DARK)

1. Zero `style=""` attributes, zero inline handlers, exactly one deferred script.
2. Both themes pass AA contrast on: body text, muted text, primary button, accent badge, featured pricing card, success/error text.
3. Theme toggle persists across reload; first visit honors `prefers-color-scheme`; `aria-pressed`/`aria-label` correct.
4. Full keyboard-only pass: every interactive element reachable, visible focus ring, accordion and mobile menu operable, no focus traps.
5. No horizontal scroll from 320px to 1920px.
6. `prefers-reduced-motion: reduce` disables all transitions, transforms, rotations, and shimmer.
7. All icons are Material Symbols; no inline SVGs in HTML (grain data-URI in CSS only).
8. Every requested section present, in order, with real English copy; buttons, cards, and inputs demonstrate all required states.
