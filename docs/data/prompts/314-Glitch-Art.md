# BUILD PROMPT — "DATAMOSH" // GLITCH ART LANDING PAGE

**Directive:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready landing page in the **Glitch Art** style (output category: **Dark Tech & Cyber**) in a single pass — full code on the first attempt, no TODOs, no stubs. Every rule below is mandatory.

---

## 0. PROJECT BRIEF & THEME SPECIFICATION

### 0.1 Product Concept & Copy Direction
- **Product:** "DATAMOSH" — a browser-based glitch-art studio (datamoshing, pixel sorting, chromatic aberration tools for video/photo creators).
- **All user-facing copy must be written in English.** Tone: terminal / error-log register (`SIGNAL_ACQUIRED`, `ERR//`, `//SYS:`), cyberpunk-adjacent but always legible and professional. Write real, specific copy for every section — lorem ipsum is forbidden.
- Copy seeds (expand, don't pad): Hero H1 "CORRUPT THE SIGNAL. MAKE IT ART." · Features: Datamosh Engine / Pixel Sorter / Chromatic Suite · Steps: 01 UPLOAD → 02 CORRUPT → 03 EXPORT · Pricing tiers: GLITCH ($0) / DATAMOSH ($19/mo, featured) / SINGULARITY ($49/mo) · 5 real FAQ Q&As · Footer columns: Product, Company, Resources, Legal.

### 0.2 Theme Definition — Glitch Art (2010s–present)
- **Keywords:** datamosh, databending, RGB channel split / chromatic aberration, pixel sorting, block corruption, tearing, scan glitches, jitter, noise, broken-signal energy.
- **Visual register:** neon-on-black, sharp 0px corners, monospace typography, hard stepped motion, error-art framing.
- **Both light and dark themes must be built and validated before delivery** (the source spec declares no single mode; validate in light and dark before publishing).

### 0.3 Design Tokens (Mandatory Mapping)
Define exactly these tokens. The source catalog's `--color-*` names are **remapped** to the mandatory semantic names below — do not use `--color-*` names.

```css
:root, [data-theme="dark"] {
  /* mandatory semantic tokens — dark (default) */
  --bg-primary: #050505;
  --bg-secondary: #0d0d0d;
  --text-primary: #f2f2f2;
  --text-secondary: #8a8a8a;
  --primary: #ff003c;
  --secondary: #00f0ff;
  --text-success: #00ff5f;
  --text-error: #ff003c;
  --border-default: #ff003c;
  --border-error: #ff003c;
  --border-success: #00ff5f;

  /* supplementary theme tokens */
  --accent: #00f0ff;
  --on-primary: #050505;    /* text on red surfaces — ≥5:1, never #111 */
  --border-muted: #262626;  /* subtle dividers */

  /* radius — Glitch Art is sharp: all 0px */
  --radius-sm: 0px; --radius-md: 0px; --radius-lg: 0px; --radius-pill: 0px;

  /* shadows — RGB channel split */
  --shadow-sm: 2px 0 var(--primary), -2px 0 var(--secondary);
  --shadow-md: 4px 0 var(--primary), -4px 0 var(--secondary);
  --shadow-rgb-split: 2px 0 #ff003c, -2px 0 #00f0ff;

  /* typography */
  --font-base: 'Space Mono', 'Courier New', monospace;
  --font-display: 'Major Mono Display', var(--font-base);
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem; --text-4xl: 3rem; --text-5xl: 4rem;

  /* spacing */
  --spacing-gap: 24px;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;

  /* motion */
  --transition-fast: 120ms;
  --transition-normal: 250ms;
  --ease-standard: steps(2, jump-none);        /* signature stepped glitch easing */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1); /* non-glitch transitions */

  /* signature effects */
  --chromatic: drop-shadow(2px 0 #ff003c) drop-shadow(-2px 0 #00f0ff);
  --noise: repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 2px);

  /* elevation/stacking */
  --z-scanlines: 50; --z-header: 90; --z-dropdown: 100; --z-modal: 200; --z-toast: 300;
}

[data-theme="light"] {
  /* pre-validated for ≥4.5:1 text contrast — do not lighten these */
  --bg-primary: #e9e9e9;      /* never pure white */
  --bg-secondary: #fefefe;
  --text-primary: #0a0a0a;
  --text-secondary: #4a4a4a;
  --primary: #c10030;
  --secondary: #006670;
  --text-success: #006b30;
  --text-error: #c10030;
  --border-default: #c10030;
  --border-error: #c10030;
  --border-success: #006b30;
  --accent: #006670;
  --on-primary: #fefefe;
  --border-muted: #cfcfcf;
  /* neon kept for decorative split shadows only (never for text in light mode) */
  --shadow-sm: 2px 0 #ff003c, -2px 0 #00f0ff;
  --shadow-md: 4px 0 #ff003c, -4px 0 #00f0ff;
  --noise: repeating-linear-gradient(0deg, rgba(0,0,0,0.05) 0 1px, transparent 1px 2px);
}
```

### 0.4 Typography & Icons
- **Fonts (Google Fonts, mandatory):** Space Mono (body) and Major Mono Display (display headings), loaded via `<link>` tags, bound to `--font-base` / `--font-display`.
- **Icons (Google Material Symbols Outlined, mandatory):** loaded via the standard stylesheet link; used as `<span class="material-symbols-outlined" aria-hidden="true">icon_name</span>`. **Raw inline SVGs and local icon files are forbidden.**

### 0.5 Required Sections
Header/Nav (sticky) · Hero · Features (3 cards) · How It Works (3 steps) · Testimonials · Pricing (3 tiers) · FAQ · Final CTA · Footer with secondary links · Demo Modal · Toast.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID Selectors Only:** every visual property, layout rule, and state is styled via classes/IDs in `style.css`.
- **Minimal HTML Modifications:** HTML stays semantic and style-agnostic — reskinning must require editing `style.css` only. The only permitted data hooks are `data-text` attributes on glitch headings and `data-theme` on `<html>`.

### 1.2 CSS Variables & Theme Tokens
- All tokens from **0.3** live in `:root` / theme selectors; components consume only `var(--...)` — no raw hex values inside component rules (hex is allowed only inside the token definitions and keyframes that mirror token colors).
- **Contrast Pairing:** every light background token pairs with a dark text token and every dark background token pairs with a light text token — enforced in both themes.
- Radius, shadow, spacing, transition, easing, z-index, and signature effect tokens (`--chromatic`, `--noise`) must all be defined and used as specified above.

### 1.3 Mandatory Dark Mode Support
- **Dark is the default theme** (Glitch Art is dark-native): hardcode `data-theme="dark"` on `<html>`; `[data-theme="light"]` overrides tokens per 0.3.
- **Toggle:** a visible button in the header swaps themes. It must carry `aria-pressed="true"` when dark mode is active, an `aria-label` that updates ("Switch to light mode" / "Switch to dark mode"), and a Material Symbols icon swap (`dark_mode` / `light_mode`).
- **Persistence:** store the choice in `localStorage` (e.g., key `datamosh-theme`); on first visit fall back to `prefers-color-scheme`; if no preference, remain dark. Theme switching must not require any HTML restructuring.
- Both themes must be visually validated before delivery.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layout structures with **Flexbox** (`display: flex`).
- **Every flex container defaults to `align-items: center`** unless an exception is explicitly justified in a CSS comment (e.g., multi-line text columns may use `flex-start`).
- **Mobile-first:** rows convert to columns below 768px; no horizontal scrolling at any viewport width down to 320px.

### 1.5 Styling Approach & Naming Convention
- Use **clean, hand-written custom CSS** (no framework) in `style.css`, organized with native CSS `@layer` blocks in this order: `tokens`, `base`, `layout`, `components`, `effects`, `utilities`.
- **One naming convention only: BEM** (`.block`, `.block__element`, `.block--modifier`). Never mix conventions; every utility/component class must map back to the tokens.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- Include in `<head>`: Google Fonts preconnects, the Space Mono + Major Mono Display stylesheet, and the Material Symbols Outlined stylesheet.
- All icons are Material Symbols; **inline SVGs are forbidden** (explicit exception: none requested, so none granted).

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Buttons
Style all states via CSS classes (`.btn` base):
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; 2px border; `box-shadow: var(--shadow-rgb-split)`; `transition: transform var(--transition-fast) var(--ease-standard), box-shadow var(--transition-fast), filter var(--transition-fast)`.
- **Hover:** brightness shift + intensified chromatic shadow + a brief jitter burst (short `steps()` keyframe), `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring using `outline: 2px solid var(--secondary); outline-offset: 2px`.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** `disabled` + `aria-busy="true"`; CSS ring spinner (or rotating Material Symbol) rendered in the icon slot without changing button dimensions; label switches to "TRANSMITTING…"; prevents double-clicks.
- **Disabled:** `opacity: 0.5`, greyscale filter, `cursor: not-allowed`, no transform.
- **Success/Error feedback (`.is-success` / `.is-error`):** temporary states driven by `--text-success` / `--text-error` (border + icon + label change, e.g., "SIGNAL RECEIVED"), reverting after ~3s.
- **Variants:** `.btn--primary` (background `var(--primary)`, color `var(--on-primary)`), `.btn--ghost` (transparent, bordered), `.btn--danger` (defined in CSS, visually distinct in both themes, reserved for destructive actions).

### 2.2 Cards
- **Default:** flexbox layout, `background: var(--bg-secondary)`, 2px border, `box-shadow: var(--shadow-rgb-split)`, `padding: var(--space-6)`, radius 0.
- **Hover:** `transform: translateY(-2px)` + intensified chromatic shadow + brief jitter burst.
- **Focus-within:** border highlight when a child link/button receives focus.
- **Loading (`.card--skeleton`):** shimmer animation (sweeping gradient keyframe) defined in CSS to prevent layout jumps — used inside the demo modal.
- **Empty state (`.card--empty`):** structured fallback with a Material Symbol icon and guidance text; define the class even if unused on the page.

### 2.3 Forms & Inputs
- **Structure:** `.input-group` flex container wrapping a `<label>`, the input, and a dedicated error-feedback element (`<p class="input-group__error" role="status" aria-live="polite">`), wired via `for`/`id` and `aria-describedby`.
- **States (all styled):** empty, focused (outline ring via `--primary`), filled, valid (success border + check icon), invalid (error border + error icon + text message — never color-only), disabled, read-only.
- The newsletter form in the Final CTA is the live instance of every state.

### 2.4 Modal
- **States:** opening, open, loading (skeleton content), closing — all animated via CSS transitions (glitch tear-in: `clip-path` slice resolving to full + slight translate; tear-out reversed).
- **UX:** centered flex container (`align-items: center`) over a backdrop overlay; Material Symbols `close` button; keyboard focus trapping; close via `Esc` and overlay click; body scroll locked while open; focus returns to the trigger on close.
- **A11y:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing at the modal title.

### 2.5 Toast / Live Feedback
- Fixed-position toast at `z-index: var(--z-toast)`, `aria-live="polite"`, success/error variants (icon + text, never color-only), auto-dismiss after ~4s plus a close button. Used to confirm newsletter signup.

---

## 3. CORE UX & MICRO-INTERACTION RULES

### 3.1 Responsive by Default
Fluid sizing (`clamp()` for headings), responsive breakpoints, zero horizontal overflow from 320px up.

### 3.2 Motion & Glitch Governance
- All state changes transition via `transition: var(--transition-normal)` (or `--transition-fast`); glitch easing uses `var(--ease-standard)`.
- **Broken-signal rule:** glitch/jitter/tear animations are burst-based — short corruption bursts inside longer rest cycles (e.g., a 4s animation where corruption occupies only the first ~0.5s). Never run high-intensity distortion continuously.
- **`prefers-reduced-motion: reduce`:** disable ALL glitch, jitter, scan, tear, and smooth-scroll animations; keep only static ±2px chromatic offsets; transitions reduced to opacity/color only.
- **Readability guard:** the base text layer is always fully legible; effect layers are offset copies/slices behind or clipped around it. The fixed scanline overlay uses `var(--noise)` at low opacity, `pointer-events: none`, and `z-index: var(--z-scanlines)` (below header, dropdown, modal, and toast).

### 3.3 Accessibility
- **Contrast:** ≥4.5:1 for text, ≥3:1 for large text and UI borders in BOTH themes (the 0.3 values are pre-validated — do not alter them without re-checking).
- Never rely on color alone to communicate state (pair color with icon + text).
- Semantic HTML5 (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`, one `h1`); correct ARIA roles/labels on custom widgets; logical DOM/focus order; full keyboard operability — no mouse-only interactions; `aria-live` regions for form errors, toasts, and loading states.
- Style `::selection` (red background, `--on-primary` text) as a thematic flourish.

### 3.4 Feedback & Destructive Actions
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- `.btn--danger` / delete actions must be visually distinct in both light and dark themes.

---

## 4. PAGE SECTION SPECIFICATIONS

### 4.1 Header / Nav (sticky)
Flex nav on `var(--bg-secondary)` with 2px bottom border: text logo with glitch hover, links (Features, How It Works, Testimonials, Pricing, FAQ) with chromatic text-shadow hover and smooth in-page scrolling (`scroll-behavior: smooth` + `scroll-padding-top` matching header height), the theme toggle (per 1.3), and a `.btn--primary` "Get Access" CTA. Mobile: hamburger button (Material Symbols `menu`/`close`) with `aria-expanded` + `aria-controls`, menu converts to a column panel, closes on link click and `Esc`.

### 4.2 Hero
Status eyebrow line (`//SYS: SIGNAL_ACQUIRED v2.0.4`), `h1.glitch` headline with `data-text` attribute — implement the signature effect with `::before`/`::after` copies via `content: attr(data-text)`, one tinted `var(--primary)` offset left, one `var(--secondary)` offset right, animated with `clip-path: inset()` slice keyframes on burst cycles (per 3.2); at rest only a static ±2px chromatic `text-shadow` remains. Subcopy, primary CTA scrolling to Pricing, ghost CTA "View Demo" opening the modal (4.10). Include a CSS-only "corrupted terminal" visual (block corruption via clipped pseudo-element slices, pixel-sort bands via stacked gradients, tearing via translate keyframes, noise overlay). No external images.

### 4.3 Features — 3 cards
Section kicker + `h2` with chromatic hover. Three `.card` blocks, each with a Material Symbol (`broken_image`, `graphic_eq`, `blur_on` or similar), title, and real copy. Hover/focus-within per 2.2.

### 4.4 How It Works — 3 steps
Steps 01 / 02 / 03 with glitch-styled numerals, icon + title + copy each; on desktop a flex row connected by an animated scanline/tear divider; column layout on mobile.

### 4.5 Testimonials
Three quote cards: avatar as an initials block (no external images), quote, name, muted role. Hover applies the chromatic quote shadow.

### 4.6 Pricing — 3 tiers
GLITCH / DATAMOSH / SINGULARITY. Middle tier uses `.card--featured` with a `.badge` ("MOST CORRUPTED" — badge text `var(--on-primary)` on `var(--primary)`, radius 0) and the `.btn--primary`; other tiers use `.btn--ghost`. Feature lists use Material Symbols `check` icons. Prices get a glitch hover.

### 4.7 FAQ
Five native `<details>`/`<summary>` accordions: custom rotating `expand_more` icon, `:focus-visible` ring on summary, styled open state, real Q&A copy. No JS required.

### 4.8 Final CTA
Glitch `h2` + copy + newsletter form implementing the full lifecycle per 2.3/2.1: validate email on submit → invalid: inline error with icon + `aria-live` message → valid: button loading state (~1.2s simulated) → success state + toast (2.5).

### 4.9 Footer
Three to four secondary-link columns, a social row rendered as text links or generic Material Symbols (brand SVGs are forbidden), copyright line, a decorative `END_OF_TRANSMISSION //` status line, and a back-to-top link (`arrow_upward`).

### 4.10 Demo Modal
Per 2.4, opened from the hero ghost CTA: title, close button, a simulated player area that shows `.card--skeleton` shimmer briefly then reveals a CSS "signal" visual (scanlines + chromatic offset blocks), full focus trap and `Esc`/overlay-close behavior.

### 4.11 Toast
Per 2.5.

---

## 5. DELIVERABLE & OUTPUT FORMAT

### 5.1 Files
- **`index.html`** — semantic markup, Google Fonts + Material Symbols links, `data-theme="dark"` on `<html>`, zero inline styles, and exactly one script reference: `<script src="script.js" defer></script>`.
- **`style.css`** — all tokens, components, states, glitch effects, and theme variants, organized in `@layer` blocks per 1.5.
- **`script.js`** — behavior only: theme toggle + persistence, mobile nav, modal open/close/focus-trap, form validation + states, toast. No styling logic in JS.

### 5.2 Naming
BEM only, consistent across all three files; utility classes map back to tokens.

### 5.3 Copy
All user-facing copy in English, real and theme-appropriate; placeholders only where content was genuinely unspecified (there should be none).

### 5.4 Pre-Delivery Validation Checklist
Before finishing, verify: both themes meet contrast thresholds · keyboard-only pass through every interactive element · no horizontal scroll at 320px · `prefers-reduced-motion` silences all glitch motion · modal traps focus, closes on `Esc`/overlay, restores focus · form errors/success announce via `aria-live` · zero inline styles/scripts · no console errors.
