# CODING-AI PROMPT — SWISS PUNK / NEW WAVE LANDING PAGE

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready landing page on the first attempt — no partial output, no follow-up questions.

**Theme:** Swiss Punk / New Wave (1978–1990) — the Basel/California rebellion against rigid International Style: deconstructed Swiss grids, tilted and layered typography, wide letter-spacing, stepped baselines, thick rules, photographic collage, Greiman-style digital gradients, hard offset shadows, brutalist hard edges. Art-direction references: April Greiman, *Does It Make Sense?* (1986); Wolfgang Weingart, *Typographische Monatsblätter*.

**Objective:** Deliver `index.html`, `style.css`, and `script.js` implementing these sections: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. The source style specification did not declare light/dark modes — therefore you must design, implement, and validate **both light and dark themes** before publishing. All user-facing copy must be written in **English**.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
All styling lives in `style.css`:

* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states are targeted via class or ID selectors.
* **Minimal HTML Modifications:** HTML stays clean, semantic, and styling-agnostic — changing the site's look must require editing only the CSS file, never the markup.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Store every visual token in `:root` using this canonical block (extend it, never rewrite the names):

```css
:root {
  /* color — Swiss Punk palette (light) */
  --color-bg: #f1f0ea;
  --color-surface: #fefefe; /* mandatory override: never use #ffffff anywhere */
  --color-surface-strong: #e7e5db;
  --color-border: #16161a;
  --color-text: #16161a;
  --color-text-muted: #4c4c50;
  --color-primary: #ff2e63;
  --color-accent: #08b2e3;
  --color-yellow: #ffd400;
  --color-success: #086d48;
  --color-error: #c41f2e;
  /* mandatory semantic aliases */
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
  /* radius: rule-driven grid rebellion, hard edges */
  --radius-sm: 0px; --radius-md: 0px; --radius-lg: 0px; --radius-pill: 999px;
  /* shadow: hard offset, no blur — layered print collage */
  --shadow-sm: 3px 3px 0 var(--color-border);
  --shadow-md: 5px 5px 0 var(--color-border);
  --shadow-lg: 9px 9px 0 var(--color-border);
  /* font — Google Fonts, tight Swiss grotesk pushed wide */
  --font-base: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
  --font-sans: var(--font-base);
  --font-display: var(--font-base);
  --font-mono: 'Space Mono', ui-monospace, monospace;
  /* text scale */
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem;
  --text-4xl: 3rem; --text-5xl: 4rem;
  /* space */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --spacing-gap: var(--space-4);
  /* motion */
  --ease-standard: cubic-bezier(0.6, 0, 0.4, 1);
  --transition-fast: 0.12s var(--ease-standard);
  --transition-normal: 0.25s var(--ease-standard);
  /* stacking */
  --z-nav: 90; --z-dropdown: 100; --z-modal: 200; --z-toast: 300;
  /* signature: deconstructed grid — tilt + hard shadow */
  --tilt-deg: -2.5deg;
  --rule-line: 3px solid var(--color-border);
}
```

* **Contrast Pairing:** Every light background token pairs with dark text, every dark background token pairs with light text — enforced in both themes. Explicit Swiss Punk pairings: backgrounds using `--color-yellow` or `--color-accent` must always use `#16161a` text in **both** themes; backgrounds using `--color-primary` must use `#16161a` text for body-size copy (`#fefefe` permitted only for large display text ≥ `--text-2xl` bold). Verify final contrast ≥ 4.5:1 for body text and ≥ 3:1 for large text; adjust token lightness if a pairing fails.
* **Light Mode Background:** Never pure white — the theme background is `#f1f0ea`; where a white surface is needed, use `#fefefe` (already tokenized above), never `#ffffff`.

**1.3 Mandatory Dark Mode Support**
Dark mode must always be defined and validated:

* **Dark Token Set:** Override the color tokens under a `.dark` class AND under `@media (prefers-color-scheme: dark) { :root:not(.light) { ... } }` (duplicate the same block in both places so no-JS visitors still get dark mode). Dark values: `--color-bg: #16161a; --color-surface: #1e1e24; --color-surface-strong: #282830; --color-border: #f1f0ea; --color-text: #f1f0ea; --color-text-muted: #a6a6ad; --color-success: #3ddc97; --color-error: #ff6b7a;` — keep `--color-primary`, `--color-accent`, `--color-yellow` unchanged. Inverting `--color-border` keeps the hard offset shadows visible on dark backgrounds.
* **Theme Switching:** Background and text variables must flip with zero HTML restructuring.
* **Persistence:** Store the user's choice in `localStorage`, fall back to `prefers-color-scheme` on first visit, and expose a visible toggle control in the nav with correct `aria-pressed` and `aria-label` ("Switch to dark theme" / "Switch to light theme") and a Google Material icon (`dark_mode` / `light_mode`). Apply the class via the single deferred script; the media-query fallback covers first paint.

**1.4 Flexbox Layout & Mobile-First Alignment**

* **Default Alignment Rule:** Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment. The only permitted exceptions: stepped-baseline type stacks and collage clusters may use `align-items: flex-start` to preserve the staggered composition.
* **Mobile-Friendly First:** All flex rows convert to columns on small viewports; no horizontal scrolling anywhere. Rotated elements must stay ≤ 3deg and be guarded with `overflow-x: hidden` on `body` as a safety net.

**1.5 Framework Default**
Use clean custom CSS extending the base classes in Section 5. Tailwind CSS is permitted only if every utility maps back to the CSS variables or the generic class names (`.btn`, `.card`, `.input-group`) via `@layer`/`@apply`. Never mix naming conventions.

**1.6 Typography & Icons (Google Fonts Mandatory)**

* **Text:** Load **Archivo** (weights 400–900) and **Space Mono** from Google Fonts via `<link>` tags with `preconnect`; bind them to `--font-base` and `--font-mono` as tokenized above.
* **Icons:** Use Google Material Symbols (Rounded) loaded via `<link>`, instantiated as `<span class="material-symbols-rounded">icon_name</span>`. Raw inline SVGs and local icon files are explicitly forbidden.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
Extend the canonical `.btn` base from Section 5. All states styled via CSS classes:

* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` uppercase, `letter-spacing: .08em`, 3px border, hard shadow, minimum touch target 44×44px.
* **Hover:** `transform: rotate(var(--tilt-deg)) translate(-1px,-1px); box-shadow: var(--shadow-md); cursor: pointer;`
* **Focus:** `.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }` — distinct in both themes.
* **Active/Pressed:** `transform: translate(2px,2px); box-shadow: none;` — the shadow snaps flush.
* **Loading:** `.btn.is-loading` disables pointer events, prevents double-clicks, sets `aria-busy="true"`, and renders a CSS spinner (a rotating 1em square with a 3px border and one accent-colored edge — no blur) without changing button dimensions.
* **Disabled:** `opacity: .5; filter: grayscale(1); cursor: not-allowed; transform: none;`
* **Success/Error:** `.btn.is-success` / `.btn.is-error` apply `--text-success` / `--text-error` borders and icon feedback as temporary states.
* **Variants:** `.btn--primary` (primary background, `#16161a` text per 1.2), `.btn--outline` (transparent, 3px border), `.btn--danger` (error background; `#fefefe` text in light mode, `#16161a` text in dark mode) — visually distinct in both themes.

**2.2 Card Component**
Extend the canonical `.card` base; add tilt modifiers (`.card--tilt-left { transform: rotate(-1deg); }`, `.card--tilt-right { transform: rotate(0.8deg); }`) and alternate them across grids:

* **Default:** Flexbox layout, `--color-surface` background, 3px border, `--shadow-lg`, hard edges.
* **Hover:** `transform: translateY(-2px)` plus a shadow shift (keep the hard offset, no blur).
* **Focus-within:** Border color shifts to `--color-accent` when a child link/button receives focus.
* **Loading (Skeleton):** Define `.card__skeleton` blocks with a shimmer keyframe animation (respect `prefers-reduced-motion`) that preserves final dimensions.
* **Empty State:** Define `.card--empty` — a Google Material icon in a tilted tile plus clear English guidance text.

**2.3 Form & Input Requirements**
Extend the canonical `.input` base. Structure every field as `.input-group` wrapping: a `<label>`, the input, and a dedicated `.input-group__error` container with `aria-live="polite"`:

* **States:** Empty, Focused (accent ring per Section 5), Filled, Valid (`.is-valid`: success border + check Material icon), Invalid (`.is-invalid`: error border, `--text-error` message, error icon), Disabled, Read-only.
* The Final CTA newsletter form must implement real email validation with inline English error messages, a loading submit state, and a success confirmation.

**2.4 Modal / Popup Requirements**
No modal is required by the section list. If you add any overlay (e.g., a lightbox), it must have: opening/open/closing states animated via CSS transitions, a backdrop overlay, a centered flex container (`align-items: center`), a Google Material icon close button, keyboard focus trapping, `aria-modal`, closing via `Esc` and overlay clicks, and defined loading/success/error states, all layered at `var(--z-modal)`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** Fluid `clamp()` type sizing, breakpoints without horizontal overflow; hero display type scales from mobile to desktop.
* **Smooth Animations:** `transition: var(--transition-fast)` on micro-interactions and `var(--transition-normal)` on state changes. Under `prefers-reduced-motion: reduce`, disable all rotations, marquees, shimmer, and transforms — keep only color changes.
* **Accessibility (a11y):** Skip-to-content link; semantic landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`); exactly one `<h1>`; logical DOM/focus order; full keyboard operability (no mouse-only interactions); `aria-live` regions for form feedback and any toast; never rely on color alone — pair every state with an icon and/or text; maintain ≥ 4.5:1 body-text contrast in **both** light and dark modes.
* **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change — the tilt-and-snap shadow language IS the feedback system; use it consistently.
* **Destructive Actions:** `.btn--danger` must be visually distinct in both themes.
* **Marquee/Ticker:** If you add a New Wave ticker strip, mark the duplicated track `aria-hidden="true"` and pause the animation under reduced motion.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **File Structure:** Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry point: `<script src="script.js" defer></script>`. Google Fonts and Material Symbols `<link>` tags live in `<head>`.
* **Naming Convention:** BEM only (`block__element--modifier`), extending the base classes from Section 5 — one consistent convention across the entire deliverable, never mixed.
* **No Unrequested Placeholders:** Author real, coherent English copy for a fictional product (suggested direction: a layout/design tool that "breaks the grid," e.g., a brand like "GRIDBREAK") — no lorem ipsum. Photographic placeholders use only `https://picsum.photos/seed/<seed>/<width>/<height>.jpg` with descriptive `alt` text.

---

## 5. SWISS PUNK / NEW WAVE — CANONICAL BASE CLASSES & SIGNATURE MOVES

**5.1 Canonical Base Classes (extend verbatim, do not rewrite):**

```css
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
  padding: var(--space-3) var(--space-6); background: var(--color-surface);
  border: 3px solid var(--color-border); box-shadow: var(--shadow-md);
  transform: rotate(-0.6deg); }
.btn {
  font: 700 var(--text-base)/1 var(--font-sans); letter-spacing: .08em; text-transform: uppercase;
  color: var(--color-text); padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
  background: var(--color-yellow); border: 3px solid var(--color-border);
  box-shadow: var(--shadow-sm); cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast); }
.btn:hover { transform: rotate(var(--tilt-deg)) translate(-1px,-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(2px,2px); box-shadow: none; }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #16161a; }
.card { background: var(--color-surface); color: var(--color-text);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
  border: 3px solid var(--color-border); padding: var(--space-6);
  transform: rotate(0.8deg); }
.input {
  width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
  padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
  background: var(--color-surface); border: 3px solid var(--color-border);
  box-shadow: var(--shadow-sm); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
  box-shadow: var(--shadow-sm), 0 0 0 3px color-mix(in srgb, var(--color-accent) 30%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
  text-transform: uppercase; letter-spacing: .06em; padding: .3em .8em; border-radius: var(--radius-pill);
  color: #16161a; background: var(--color-accent); border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) {
  .btn { transition: none; } .btn:hover, .btn:active { transform: none; }
}
```

**5.2 Signature Aesthetic Moves (apply throughout):**

* **Deconstructed Swiss grid:** Compose on an underlying 12-column grid, then deliberately break it — overlapping type, rotated section labels, oversized marginal numerals (`01 / 02 / 03`) in `--font-mono`, and thick `--rule-line` dividers as structural elements.
* **Tilted, layered type:** Hero headline in 2–3 stacked layers at different sizes/rotations with negative margins and `z-index` layering; stepped baselines (each line indented further); wide tracking (≥ .08em) and uppercase for all display type and labels.
* **Photographic collage:** Picsum images with 3px borders + hard offset shadows, slight rotations, overlapping placement, and duotone treatment (`filter: grayscale(1) contrast(1.1)` plus `mix-blend-mode: multiply/screen` overlays in primary/accent).
* **Greiman gradients:** Sparing `linear-gradient` blends (primary → accent) as image overlays or thin accent strips — never behind body text.
* **Hard edges everywhere:** radius 0 on all components except pill badges.

---

## 6. PAGE SECTION SPECIFICATIONS

* **6.1 Header/Nav:** Sticky `.nav` with tilted brand wordmark, anchor links (Features, How It Works, Pricing, FAQ), the theme toggle (per 1.3), and a `.btn--primary` CTA. On mobile, collapse links behind a menu button with `aria-expanded` and keyboard support — no horizontal scroll.
* **6.2 Hero:** Layered tilted display headline (clamp-scaled, stepped baselines), supporting subcopy, two CTAs (`.btn--primary` + `.btn--outline`), a `.badge`, and a photographic collage cluster (per 5.2). Recommended: a repeating uppercase ticker strip below the hero (e.g., "DECONSTRUCT THE GRID — NEW WAVE — 1978–1990 —").
* **6.3 Features:** Section label + thick rule; three `.card` blocks with alternating tilt modifiers, Material icons inside tilted icon tiles, headline, and body copy; full hover/focus-within states per 2.2.
* **6.4 How It Works:** Three steps with oversized numerals on stepped baselines, connecting `--rule-line` rules, alternating left/right alignment, and short English descriptions.
* **6.5 Testimonials:** Three quote cards (one accent-colored variant), picsum avatars with hard borders, attributions in `--font-mono`, alternating tilts.
* **6.6 Pricing:** Three tiers; the middle tier is featured (primary-colored 3px border, `--shadow-lg`, extra tilt, `.badge` reading e.g. "MOST WAVE"); feature lists with Material `check` icons; one `.btn` per tier. Optional monthly/annual toggle — if included, it must be a real accessible control with `aria-pressed` and visible price updates.
* **6.7 FAQ:** Accessible accordion — either native `<details>/<summary>` or `button` + region with `aria-expanded`/`aria-controls`; animated open/close via CSS transitions; a Material `add` icon that rotates to indicate state; fully keyboard operable; never color-only state.
* **6.8 Final CTA:** Full-bleed band with `--color-primary` background and `#16161a` text (per 1.2 pairing), giant tilted type, and the newsletter `.input-group` implementing the complete state machine from 2.3 with `aria-live` feedback and a loading submit button.
* **6.9 Footer:** Inverted block — in light mode use `#16161a` background with `#f1f0ea` text; in dark mode use `--color-surface-strong`. Include secondary link columns (Product, Company, Resources), Material Symbol social icons, a small tilted wordmark, and copyright line.

---

## 7. ACCEPTANCE CHECKLIST (validate before publishing)

* Zero `style="..."` attributes; zero inline SVGs; zero inline scripts beyond the single deferred entry point.
* BEM naming consistent across all three files.
* Dark mode: toggle works, persists via `localStorage`, falls back to `prefers-color-scheme`, correct `aria-pressed`/`aria-label`, hard shadows remain visible on dark backgrounds.
* Both themes pass contrast pairing rules from 1.2 at ≥ 4.5:1 body / 3:1 large text.
* No horizontal scroll at 320px, 768px, 1024px, 1440px; all flex rows collapse to columns on mobile.
* Every interactive element has hover, focus-visible, and active feedback; all animations respect `prefers-reduced-motion`.
* All eight sections present with real English copy; all images are picsum URLs with descriptive alt text.
