# CODING AGENT PROMPT — COMPLETE LANDING PAGE: "STREET ART / GRAFFITI" (SINGLE-ATTEMPT BUILD)

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce the complete, final code for a marketing landing page in your **first response** — full `index.html`, `style.css`, and `script.js`. No scaffolding, no TODOs, no clarifying questions.

**Product context (invent coherent details, write real copy):** Build for **"BURNER"** — a fictional platform connecting graffiti writers to legal walls, crews, and supply drops. Era direction: 1970s–present writer culture — NYC subway whole-car pieces of the '70s–'80s plus contemporary legal-wall burners. **All user-facing copy must be written in English**, in an energetic writer-culture voice ("burners," "pieces," "throw-ups," "can control," "crew"). No lorem ipsum.

**Sections (in this order):** sticky Header/Nav → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **Forbidden:** `style="..."` attributes, `<style>` blocks in HTML, and presentational HTML attributes.
- Target everything via class/ID selectors. HTML must remain semantic and style-agnostic — retheming the site must require CSS edits only.
- The token and component specs in §1.2 and §3 below are the **authoritative design spec** (no external reference files exist).

**1.2 CSS Variables & Theme Tokens (Mandatory)**
Define ALL tokens in `:root` (dark = default, per source spec) and mirror the full color set in a `.light` theme class (§1.3). Never hardcode hex values outside token definitions.

```css
:root {
  /* ===== Street Art / Graffiti — DARK theme (default per source spec) ===== */
  /* color */
  --color-bg: #2b2b2b;
  --color-surface: #383838;
  --color-surface-2: #454545;
  --color-text: #f5f5f0;
  --color-text-muted: #b8b8b0;
  --color-primary: #ff3b3b;
  --color-accent: #ffd400;
  --color-cyan: #26c6da;
  --color-keyline: #0a0a0a;
  /* mandatory semantic aliases */
  --primary: var(--color-primary);
  --secondary: var(--color-accent);
  --bg-primary: var(--color-bg);
  --bg-secondary: var(--color-surface);
  --text-primary: var(--color-text);
  --text-secondary: var(--color-text-muted);
  --text-success: var(--color-cyan);
  --text-error: #ff6b6b;
  --border-default: var(--color-keyline);
  --border-success: var(--color-cyan);
  --border-error: var(--color-primary);
  /* on-fill ink tokens (contrast pairing) */
  --color-on-primary: var(--color-keyline);  /* black on #ff3b3b ≈ 5.4:1 */
  --color-on-accent: var(--color-keyline);   /* black on #ffd400 — both modes */
  --color-accent-ink: #ffd400;               /* accent used AS text on dark */
  /* radius */
  --radius-sm: 2px; --radius-md: 8px; --radius-lg: 18px; --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.30);
  --shadow-md: 0 6px 18px rgba(0,0,0,0.40);
  --shadow-spray: 0 0 0 4px var(--color-keyline), 0 10px 24px rgba(0,0,0,0.45);
  --shadow-drip: 0 8px 0 -2px rgba(255,59,59,0.35), 0 12px 4px -4px rgba(0,0,0,0.4);
  /* font */
  --font-display: 'Titan One', 'Archivo Black', Impact, sans-serif;
  --font-sans: 'Archivo Black', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'Archivo', 'Helvetica Neue', system-ui, sans-serif;
  --font-mono: ui-monospace, monospace;
  /* text scale */
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem; --text-4xl: 3rem; --text-5xl: 4rem;
  /* space */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --spacing-gap: var(--space-4);
  /* ease & transitions */
  --ease-standard: cubic-bezier(0.3, 0.9, 0.4, 1.2);
  --transition-fast: 120ms var(--ease-standard);
  --transition-normal: 240ms var(--ease-standard);
  /* stacking */
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;
  /* signature effects */
  --spray-texture: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 0, transparent 3%),
                   radial-gradient(circle at 70% 60%, rgba(255,255,255,0.04) 0, transparent 4%),
                   radial-gradient(circle at 40% 80%, rgba(255,255,255,0.04) 0, transparent 3%);
  --wildstyle-outline: 0 0 0 3px var(--color-keyline), 0 0 0 5px var(--color-accent);
  --bg-image: linear-gradient(165deg, #383838 0%, #2b2b2b 55%, #1f1f1f 100%);
}
```

- **Contrast pairing:** every light background token pairs with dark text tokens and every dark background token pairs with light text tokens — enforced in BOTH themes.
- **Light-mode ground is concrete grey — never pure white.** If a near-white panel is genuinely required, use `#fefefe`, not `#ffffff`.
- **Ink-vs-fill rule:** `--color-accent` is a FILL color (always paired with `--color-on-accent` black text). When accent, cyan, or red appear AS TEXT, use the ink variants (`--color-accent-ink`, the light-mode `--color-cyan`/`--color-primary` values). In dark mode, `#ff3b3b` is reserved for large text and fills; small red text uses `--text-error`.

**1.3 Mandatory Dark Mode**
- Source spec note (translated): *"The source does not declare modes; validate both light and dark before publishing."* → Both themes are required and must both pass validation.
- The provided palette = **dark theme (default `:root`)**. Derive the **light theme** as a concrete-grey ground (suggested tokens below — adjust only as needed to satisfy WCAG AA):

```css
/* ===== LIGHT theme — concrete-grey ground (derived; validate AA before publishing) ===== */
.light {
  --color-bg: #e3e3db;
  --color-surface: #ecece4;
  --color-surface-2: #f5f5ef;   /* near-white; #fefefe if a pure-white panel is ever needed */
  --color-text: #141414;
  --color-text-muted: #52524b;
  --color-primary: #d61f1f;     /* darkened red ink for light ground */
  --color-accent: #ffd400;      /* FILL ONLY — always pair with --color-on-accent */
  --color-accent-ink: #8a7000;  /* accent used AS text on light surfaces */
  --color-cyan: #0a6f80;        /* darkened cyan ink for light ground */
  --color-keyline: #0a0a0a;    /* hard black keylines stay */
  --color-on-primary: #fefefe;  /* near-white ink on darkened red ≈ 5.5:1 */
  --text-error: #c62828;
  --shadow-spray: 0 0 0 4px var(--color-keyline), 0 10px 24px rgba(0,0,0,0.18);
  --shadow-drip: 0 8px 0 -2px rgba(214,31,31,0.25), 0 12px 4px -4px rgba(0,0,0,0.25);
  --spray-texture: radial-gradient(circle at 20% 30%, rgba(0,0,0,0.05) 0, transparent 3%),
                   radial-gradient(circle at 70% 60%, rgba(0,0,0,0.04) 0, transparent 4%),
                   radial-gradient(circle at 40% 80%, rgba(0,0,0,0.04) 0, transparent 3%);
  --bg-image: linear-gradient(165deg, #ecece4 0%, #e3e3db 55%, #d4d4ca 100%);
}
```

- **Implementation:** apply the light token set via the `.light` class AND mirror it inside `@media (prefers-color-scheme: light) { :root:not(.dark) { … } }` so no-JS visitors get their OS preference; the JS-applied `.light`/`.dark` classes always win. Background and text variables must flip with zero HTML restructuring.
- **Theme toggle:** a visible header button using Material Symbols `light_mode`/`dark_mode`, with correct `aria-pressed` and `aria-label` ("Switch to light mode" / "Switch to dark mode"); persists via `localStorage` (e.g., key `burner-theme`); falls back to `prefers-color-scheme` on first visit.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox. **Every flex container defaults to `align-items: center`** unless an exception is explicitly justified in a CSS comment.
- Mobile-first: rows collapse to columns on small viewports; **no horizontal scrolling at any width ≥ 320px**; all tap targets ≥ 44×44px.

**1.5 Styling Approach**
- The token-driven custom CSS below is the single source of truth. Tailwind is permitted **only** for structural layout utilities (flex/grid/gap), and any utility used must resolve back to the CSS variables above. Never mix naming conventions — BEM everywhere (§6).

**1.6 Google Fonts & Icons (Mandatory)**
- Google Fonts `<link>`: **Titan One** (display), **Archivo Black** (headings/UI emphasis), **Archivo** 400/600/700 (body copy, bound to `--font-body` — body paragraphs use `--font-body` for readability).
- Icons: **Google Material Symbols (Rounded, FILL 1)** loaded via the Google Fonts stylesheet and used by ligature name. **Forbidden:** inline SVGs, local icon files, emoji-as-icons.

---

## 2. THEME VISUAL LANGUAGE — THE GRAFFITI SIGNATURE (repeat everywhere)

- **Signature move:** bold interlocking bubble/wildstyle letterforms with a hard black keyline plus a thin color pinstripe, spray-can grain texture over a concrete-grey ground. Apply to every major component — this is the identity.
- **Keyline + pinstripe:** use `--wildstyle-outline` and `--shadow-spray` on primary components (buttons, cards, badges, chips, hero panel, featured pricing tier).
- **Wildstyle display type:** `--font-display` (Titan One) for the `<h1>` and section headings; fake the keyline with a stacked `text-shadow` (8-direction black keyline + one accent pinstripe offset + soft drop). Rotate headline words ±1–2° for tagging energy; keep body copy upright and readable.
- **Spray grain:** layer `--spray-texture` over `body` and card surfaces; add denser grain patches via extra `radial-gradient` layers where the composition needs it.
- **Drips:** CSS-only drips via `::before`/`::after` (rounded-bottom blobs with keyline `box-shadow`) hanging from the hero headline panel, badges, and the featured pricing card. **No images anywhere.**
- **High-contrast fills:** red / yellow / cyan appear as bold fill blocks with hard black keylines — never as washed-out pastels.
- **Optional flourish:** one CSS-only marquee ticker strip (`aria-hidden`, Titan One, keyline text: "WILDSTYLE • THROW-UP • BURNER • PIECE • TOP-TO-BOTTOM •") between Hero and Features; must be static under `prefers-reduced-motion`.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

Use these base classes verbatim as the foundation — extend, do not dilute. **One required adjustment:** `.btn--primary` must use `color: var(--color-on-primary)` instead of `var(--color-text)` to pass WCAG AA (black-on-red in dark ≈ 5.4:1; `#fefefe`-on-red in light ≈ 5.5:1) — this also strengthens the keyline aesthetic.

```css
body { margin: 0; color: var(--color-text); font-family: var(--font-body); background: var(--bg-image);
       background-image: var(--spray-texture), var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
       background: var(--color-surface); border-bottom: 4px solid var(--color-keyline);
       box-shadow: 0 2px 0 var(--color-accent); }
.btn { font: 800 var(--text-base)/1 var(--font-display); letter-spacing: .02em; color: var(--color-text);
       padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
       background: var(--color-surface-2); box-shadow: 0 0 0 3px var(--color-keyline); cursor: pointer;
       transition: transform var(--transition-fast), box-shadow var(--transition-fast); }
.btn:hover { transform: rotate(-1deg) translateY(-2px); box-shadow: var(--wildstyle-outline); }
.btn:active { transform: scale(0.97) rotate(0); }
.btn:focus-visible { outline: 3px solid var(--color-cyan); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: 0 0 0 3px var(--color-keyline); }
.btn--primary { background: var(--color-primary); color: var(--color-on-primary); font-weight: 900;
                box-shadow: var(--wildstyle-outline); }
.btn--primary:hover { box-shadow: var(--wildstyle-outline), var(--shadow-drip); }
.card { background: var(--color-surface); background-image: var(--spray-texture);
        border-radius: var(--radius-lg); padding: var(--space-6); box-shadow: var(--shadow-spray); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-body);
         padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
         background: var(--color-surface-2); box-shadow: 0 0 0 3px var(--color-keyline); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: 0 0 0 3px var(--color-keyline), 0 0 0 5px var(--color-cyan); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 800 var(--text-xs)/1 var(--font-display);
         letter-spacing: .04em; padding: .35em .85em; border-radius: var(--radius-pill);
         background: var(--color-accent); color: var(--color-on-accent); box-shadow: 0 0 0 3px var(--color-keyline); }
@media (prefers-reduced-motion: reduce) { /* extend to cover EVERY animation on the page */ }
```

**3.1 Buttons — every state, styled via classes**
- **Default:** flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`; ≥44px touch target.
- **Hover:** rotation/lift + `--wildstyle-outline`; `cursor: pointer`.
- **Focus-visible:** 3px cyan outline, 3px offset — never remove.
- **Active/pressed:** `transform: scale(0.97)`, rotation reset.
- **Loading (`.btn--loading`):** `pointer-events: none` + `aria-busy="true"`; spinner = rotating Material Symbol (`progress`) or CSS ring; button dimensions must not change; prevents double submits.
- **Disabled:** `opacity: .5`, `filter: grayscale(1)`, `cursor: not-allowed`, transforms off.
- **Success/Error (`.btn--success`, `.btn--error`):** temporary feedback states driven by `--text-success`/`--text-error` (used by the Final CTA form).
- **Variants:** `.btn` (default surface), `.btn--primary`, `.btn--ghost` (transparent, keyline underline on hover), `.btn--danger` (visually distinct in BOTH themes).

**3.2 Cards**
- **Default:** flexbox column, surface + spray texture, `--radius-lg`, `--shadow-spray`.
- **Hover:** `translateY(-2px)` + shadow shift (grow `--shadow-spray` or add `--shadow-drip`).
- **Focus-within:** keyline/cyan border highlight when a child link/button receives focus.
- **Skeleton (`.card--skeleton`):** shimmer animation defined in CSS (gradient sweep) — define it even if the static page never mounts it.
- **Empty state (`.card--empty`):** Material Symbol + short guidance text layout, defined in CSS.

**3.3 Forms & Inputs (Final CTA email capture)**
- **Structure:** `.input-group` flex column wrapping a `<label>`, the `.input`, and a dedicated error container.
- **States via classes:** empty, focus (keyline + cyan ring), filled, valid (`.input--valid`: cyan border + `check` icon), invalid (`.input--invalid`: red border + `error` icon + message), disabled, read-only.
- **Error feedback:** dedicated element linked via `aria-describedby` with `aria-live="polite"`; icon + text — **never color alone**. Success confirmation is also announced via `aria-live`.

**3.4 FAQ Accordion (custom disclosure widget)**
- Each item: `<button class="faq__trigger" aria-expanded="false" aria-controls="faq-panel-n">` + `<div id="faq-panel-n" role="region">`.
- Material Symbol `expand_more` rotates 180° on open; animate expansion via CSS (`grid-template-rows: 0fr → 1fr` or equivalent) — instant under reduced motion.
- Fully keyboard operable (native buttons); single-open policy; first item open by default; visible focus states.

**3.5 Modal / Popup (conditional)**
- No modal is required by the section list. If you introduce any overlay, it must: use `--z-modal`, be a flex-centered dialog with a backdrop, animate open/close, trap focus, close on `Esc` and overlay click, and provide a Material Symbol `close` button.

---

## 4. PAGE SECTIONS BLUEPRINT

All content sections live in `<main>`; exactly one `<h1>` (Hero); each section is a `<section>` with an `<h2>` and an `id` matching the nav anchors. Copy: real, specific, English, writer-culture voice.

**4.1 Header/Nav (sticky):** `.nav` per spec. Brand wordmark in Titan One with keyline treatment. Anchor links to every section. Theme toggle (§1.3). Primary CTA "Find a Wall". Mobile: hamburger (`menu` icon) disclosure with `aria-expanded`, closing on `Esc` and link click. Include a skip-to-content link.

**4.2 Hero:** full-bleed concrete ground + spray texture; `.badge` (e.g., "FRESH PAINT • SINCE '73"); wildstyle `<h1>` (e.g., "OWN THE WALL.") with keyline text-shadow and CSS drips; muted subhead explaining the platform; `.btn--primary` ("Find Your Wall") + `.btn--ghost` ("See the Burners"); a stat-chip row (legal walls / writers / cities) using keylined pills. Optional marquee ticker below (§2).

**4.3 Features (3 cards):** section heading with keyline underline; three `.card`s color-coded red / yellow / cyan via keylined icon chips with Material Symbols — e.g., Legal Wall Map (`map`), Crew Pages (`groups`), Supply Drops (`local_shipping`). Archivo Black title + 2–3 sentence body each. Hover/focus-within per §3.2.

**4.4 How It Works (3 steps):** 01 "Scout the Wall" → 02 "Plan the Piece" → 03 "Paint & Burn". Oversized Titan One numerals with `--shadow-drip`; steps connected by a dashed CSS spray line; icon + title + body each; column stack on mobile.

**4.5 Testimonials:** three quote `.card`s with fictional writer aliases, crews, and cities (e.g., "REKA — TWS CREW, BROOKLYN"); 5-star rating via `star` Material Symbols with `aria-label`; avatar = initials in a keylined circle (no external images).

**4.6 Pricing (3 tiers):** `.card` tiers named **Toy** (free) / **Writer** (featured) / **King** (premium). Featured tier: accent fill or `--wildstyle-outline`, slight `rotate(-1deg)`, `--shadow-drip`, and a `.badge` ("MOST DOPE"). Feature lists with `check` icons; per-tier CTA (featured uses `.btn--primary`). Real prices and feature copy.

**4.7 FAQ:** 5–6 items per §3.4 covering legal walls, skill level, supplies, crews, and cancellations.

**4.8 Final CTA:** full-width panel with spray texture + drips; wildstyle `<h2>`; email capture per §3.3 with loading → success button states ("You're on the list" + `check` icon).

**4.9 Footer:** brand + one-liner; secondary link groups (About, Walls, Community, Shop, Legal); social icon links with `aria-label`; copyright line; "Back to top" link. All links get visible hover/focus feedback.

---

## 5. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid type via the token scale with `clamp()`; no horizontal overflow from 320px to desktop.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; `--ease-standard` for the energetic feel; **`prefers-reduced-motion: reduce`** disables transforms, marquee, drip animation, and smooth scrolling — extend the provided block to cover every animation you add.
- **Accessibility (a11y):** WCAG AA contrast in BOTH modes (validate per the §1.2 ink rules); never rely on color alone for state; semantic HTML5 landmarks; correct ARIA on the theme toggle, mobile menu, accordion, and form; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic form feedback; visible focus styles everywhere.
- **Mandatory visual feedback:** every click, hover, focus, and submission produces a visible state change.
- **Destructive/distinct actions:** `.btn--danger` must be visually distinct in both light and dark themes.
- **JS behaviors (`script.js`):** theme toggle + persistence; mobile menu; FAQ accordion; email validation with loading/success button states; smooth anchor scrolling (respecting reduced motion, with `scroll-margin-top` for the sticky nav); optional IntersectionObserver reveal animations that activate only when JS adds a readiness class — content must be fully visible without JS.

---

## 6. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js`. HTML links the stylesheet in `<head>` and includes **a single** `<script src="script.js" defer>` — no other script blocks.
- **Naming:** BEM consistently (`.nav__links`, `.btn--primary`, `.faq__trigger`, `.tier--featured`, `.input-group__error`…). Never mix conventions.
- **Copy:** all user-facing copy in **English**, real and specific; placeholders only where content was genuinely unspecified (there should be none).
- **Output the complete final code in your first response** — all three files, fully implemented.
- **Pre-delivery validation checklist:** AA contrast in light AND dark (the source spec declared no modes — both must be validated); keyboard-only walkthrough; no horizontal scroll; reduced motion honored; all component states present (hover/focus/active/loading/disabled/valid/invalid); zero inline styles; theme choice persists across reload.
