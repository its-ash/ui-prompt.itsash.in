# CODING-AGENT PROMPT — "TYPOGRAPHY-DRIVEN" LANDING PAGE (COMPLETE SINGLE-ATTEMPT BUILD)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality landing page in one attempt. Deliver finished code — no TODOs, no stubs, no lorem ipsum.

**Design Brief:**
- **Style:** Typography-Driven (`claude-artisan/minimal-organic`) — oversized expressive typography IS the design. Type carries everything: no photos, no illustrations, no gradients, no shadows. Bold, confident, editorial. Era: timeless (2018+ revival). Reference aesthetic: type-foundry sites and award-winning agency landings.
- **Source notes (translated):** The source spec does not declare color modes; you must derive and validate both light and dark before publishing. Reference specification: `references/00-flagship-implementation-specs/typographic.md`.
- **Brand concept:** Invent a coherent fictional independent type foundry (one confident name, e.g., "GRAVITAS"). All user-facing copy must be written in **English** — bold, editorial, real.
- **Sections (in order):** Sticky Nav (with theme toggle), Hero, kinetic marquee strip, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ (accordion), Final CTA (with email capture), Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **Forbidden:** `style="..."` attributes, inline `<script>` blocks (a single `<script src="script.js" defer>` is the only script reference), and presentational HTML attributes.
- Target everything via class/ID selectors. HTML stays semantic and style-agnostic — a full retheme must be possible by editing `style.css` only.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root`. The mandatory semantic set must exist, aliased to the theme tokens:

```css
:root {
  /* theme tokens (source spec — authoritative) */
  --color-bg: #f4f4f0;  --color-surface: #ffffff;  --color-surface-strong: #eaeae4;
  --color-border: #0f0f0f;  --color-text: #0f0f0f;  --color-text-muted: #55554e;
  --color-primary: #0f0f0f;  --color-accent: #ff3d00;  --color-on-accent: #0f0f0f;

  /* mandatory semantic aliases */
  --bg-primary: var(--color-bg);   --bg-secondary: var(--color-surface);
  --text-primary: var(--color-text);  --text-secondary: var(--color-text-muted);
  --primary: var(--color-primary);  --secondary: var(--color-surface-strong);
  --border-default: var(--color-border);
  --text-success: #0f7b3d;  --text-error: #c81e1e;
  --border-success: #0f7b3d;  --border-error: #c81e1e;

  /* shape & elevation: sharp editorial edges; elevation comes from rules, never shadow */
  --radius-sm: 0px; --radius-md: 0px; --radius-lg: 0px; --radius-pill: 999px;
  --shadow-sm: none; --shadow-md: none; --shadow-lg: none;

  /* type — exaggerated jumps; type IS the design */
  --font-display: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
  --font-sans: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'Space Mono', ui-monospace, monospace;
  --text-xs: .75rem; --text-sm: .875rem; --text-base: 1rem; --text-lg: 1.25rem;
  --text-xl: 1.75rem; --text-2xl: 2.75rem; --text-3xl: 4.25rem;
  --text-4xl: 6.5rem; --text-5xl: 9rem;
  --tight-tracking: -0.03em;

  /* space, motion, stacking */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --spacing-gap: var(--space-6);
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --transition-fast: 150ms var(--ease-standard);
  --transition-normal: 300ms var(--ease-standard);
  --z-dropdown: 100; --z-modal: 200; --z-toast: 300;
  --rule: 3px solid var(--color-text);
}
```

- **Contrast pairing:** every light background token pairs with a dark text token and vice versa, in every theme. Do not default to pure white; where a near-white is needed use `#fefefe`. **Exception:** the source palette explicitly defines `--color-surface: #ffffff`; retain that exact source value for light-mode surfaces.
- **Accent usage rule:** `#ff3d00` as *text* is only permitted at display sizes (≥ `--text-xl` bold) in light mode (≈3.2:1); it passes at normal sizes in dark mode. Text placed *on* accent always uses `--color-on-accent` (#0f0f0f, ≈5.4:1) in **both** themes.
- Display sizes must be fluid (e.g., `clamp(3.25rem, 12vw, var(--text-5xl))`) with `overflow-wrap: break-word` so long words never cause horizontal overflow.

**1.3 Mandatory Dark Mode Support**
- The source declares no modes; you must derive and validate dark mode. Define dark overrides in a `.dark` class on `<html>`:

```css
.dark {
  --color-bg: #0f0f0f;  --color-surface: #161614;  --color-surface-strong: #22221f;
  --color-border: #f4f4f0;  --color-text: #f4f4f0;  --color-text-muted: #a6a69c;
  --color-primary: #f4f4f0;  --color-accent: #ff3d00;  --color-on-accent: #0f0f0f;
  --text-success: #58c48c;  --text-error: #ff6b5e;
  --border-success: #58c48c;  --border-error: #ff6b5e;
}
```

- Token swapping must invert the design with **zero HTML changes** (buttons, inverted pricing card, and rules flip automatically via variables).
- **Persistence:** store the choice in `localStorage` ("theme"); fall back to `prefers-color-scheme` on first visit. Provide a visible toggle in the nav with correct `aria-pressed` and `aria-label` ("Switch to dark theme" / "Switch to light theme"), swapping the Material icon (`dark_mode` / `light_mode`).
- Validate contrast in both modes before finalizing (body ≥ 4.5:1, large display text ≥ 3:1).

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified (e.g., `stretch` for equal-height pricing cards).
- Mobile-first: rows collapse to columns below ~768px; no horizontal scrolling at any viewport from 320px up.

**1.5 Styling Approach & Naming Convention**
- Use clean custom CSS (the source token/component foundation above) — no framework needed. If you introduce Tailwind, every utility must map back to these tokens.
- **BEM naming only** (the source already uses `.btn--primary`); never mix conventions.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load via Google Fonts `<link>` tags: **Archivo** (variable, `wdth` 62–125 + `wght` 100–900) for display, **Inter** for body, **Space Mono** for eyebrows/labels. The source's commercial names (Neue Haas Grotesk, Söhne) are demoted to fallbacks only — Google Fonts are the primary faces.
- Icons: Google **Material Symbols Outlined** only. **Explicitly forbidden:** raw inline SVGs and local icon files. Icons are functional only (theme toggle, mobile menu, FAQ chevron, form validation, button arrows); all ornament is typography.
- Use `font-variation-settings` for the condensed editorial look (hero: `'wght' 800, 'wdth' 70`) and kinetic effects.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button (`.btn`, `.btn--primary`, `.btn--ghost`, `.btn--danger`)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: .5rem;` — `font: 700 var(--text-lg)/1 var(--font-display); letter-spacing: var(--tight-tracking);` pill radius, `--color-primary` bg with `--color-bg` text, min touch target 44×44px.
- **Hover:** `opacity: .8` plus a kinetic `font-variation-settings` weight shift (500→800).
- **Focus:** `:focus-visible` → `outline: 3px solid var(--color-accent); outline-offset: 3px;`.
- **Active:** `transform: scale(0.97)` combined with `opacity: .65`.
- **Loading (`.btn--loading`):** `aria-busy="true"`, pointer-events disabled (prevents double submits), CSS spinner (rotating Material `progress` icon or border circle) that does **not** change button dimensions.
- **Disabled:** reduced opacity (source value `.35` satisfies this), `filter: grayscale(1)`, `cursor: not-allowed`.
- **Success/Error:** temporary feedback classes driven by `--text-success` / `--text-error` (used by the email-capture submit).
- `.btn--primary`: accent bg + `--color-on-accent` text. `.btn--ghost`: transparent bg, `2px solid var(--border-default)`, inverts on hover. `.btn--danger`: error-colored, visually distinct in both themes (define even if unused).

**2.2 Card (`.card`)**
- **Default:** flex column, `background: var(--color-surface); border-top: var(--rule); padding: var(--space-6) 0;` headings in display font at `--text-2xl` with tight tracking.
- **Hover (interactive cards):** `transform: translateY(-2px)` + `border-top-color: var(--color-accent)` + heading weight shift — **no shadows** (tokens are `none`).
- **Focus-within:** accent border when a child link/button has focus.
- **Loading (`.card--skeleton`):** monochrome `--color-surface-strong` blocks with a subtle opacity pulse (no decorative gradients); define even if the static page never triggers it.
- **Empty state (`.card--empty`):** Material icon + short guidance text.

**2.3 Form & Input (email capture)**
- Structure: flex container wrapping `<label>`, `.input` (source recipe: transparent bg, no borders except `border-bottom: var(--rule)`, display font at `--text-xl`, tight tracking, placeholder in muted), and a dedicated error container with `aria-live="polite"`.
- **States:** empty; focused (`border-bottom-color: var(--color-accent)` — this underline is the visible focus indicator, ≥3:1 in both modes); filled; valid (`.input--valid`: success border + `check_circle` icon); invalid (`.input--error`: error border + `error` icon + error message text — never color alone); disabled; read-only.

**2.4 Modal / Popup**
- None is required for this build. If you introduce any overlay anyway, it must have: CSS-animated open/close, backdrop, centered flex container (`align-items: center`), Material icon close button, `Esc` + overlay-click closing, keyboard focus trap, `--z-modal` stacking.

**2.5 FAQ Accordion**
- Each item: `border-top: var(--rule)`; question is a full-width `<button>` (flex, space-between, `align-items: center`, display font at `--text-xl`) with `aria-expanded` / `aria-controls`; answer region animated via CSS (`grid-template-rows: 0fr → 1fr` technique).
- Chevron: Material `expand_more`, `transition: transform var(--transition-normal)`, rotates 180° when expanded. Fully keyboard operable; instant swap under reduced motion.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` type, flex wrap, no overflow — test 320px to 1440px.
- **Kinetic type (CSS-only, minimum three devices):** (1) staggered hero headline reveal (masked line translate/opacity with `animation-delay`); (2) infinite marquee strip (`translateX(-50%)` loop, duplicated content `aria-hidden`, pause on hover); (3) variable-font axis shifts on hover for nav links, buttons, and card headings (`font-variation-settings` transitions). **All** disabled under `prefers-reduced-motion: reduce`.
- **Smooth animations:** every state change uses `transition: var(--transition-normal)` (or `--transition-fast` for hovers).
- **Accessibility:** semantic HTML5 landmarks (`header/nav/main/section/footer`), skip link, single `h1`, logical heading order, visible focus everywhere, full keyboard operability, `aria-live` for form feedback and loading, WCAG AA contrast in both modes, never color-only state communication.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** `.btn--danger` must be distinct in both light and dark themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js`. One deferred `<script src="script.js" defer>` — no other script tags, no inline styles.
- **Naming:** BEM throughout; never mix conventions.
- **Head:** `lang="en"`, viewport meta, descriptive `<title>`, meta description, Google Fonts + Material Symbols `<link>` tags with `preconnect`.
- **Copy:** write real, confident English copy per the deck in Section 5 (light refinement allowed; lorem ipsum forbidden).

---

## 5. PAGE BUILD SPECIFICATION

**5.1 Nav (`.nav`, sticky):** flex, `align-items: center`, `gap: var(--space-6)`, surface bg, `border-bottom: var(--rule)`, display font + tight tracking. Contains: brand wordmark, links (Features, Process, Pricing, FAQ), theme toggle, small `.btn` CTA. Mobile: links collapse into a `menu`-icon button toggling a dropdown panel (flex column, surface bg, `--z-dropdown`, `aria-expanded`, `Esc`/outside-click close, focus management).

**5.2 Hero:** full-bleed, generous vertical padding; `.badge` eyebrow ("INDEPENDENT TYPE FOUNDRY — EST. 2018"); H1 in condensed caps — `clamp(3.25rem, 12vw, var(--text-5xl))`, `line-height: .95`, tight tracking — e.g., "TYPE IS THE INTERFACE." with **one** accent underline on the key word (`text-decoration: underline; thickness: .06em; color: var(--color-accent)`). Muted subhead at `--text-lg`. Two CTAs: `.btn--primary` "Browse the library" + `.btn--ghost` "See licensing". Staggered reveal animation.

**5.3 Marquee:** between Hero and Features; `border-block: var(--rule)`; repeating display-type strip ("NEW RELEASE — GRAVITAS SANS — 9 WEIGHTS × 7 WIDTHS — VARIABLE —") with accent typographic separators.

**5.4 Features (3 `.card`s):** mono index (01/02/03), display heading at `--text-2xl`, muted body, text link with `arrow_forward` icon. Interactive hover/focus-within per 2.2. Suggested copy: "Variable by default", "Optical sizes", "Licensing without lawyers".

**5.5 How It Works (3 steps):** oversized numerals at `clamp(4rem, 10vw, var(--text-4xl))` rendered as **outlined type** (`color: transparent; -webkit-text-stroke: 2px var(--color-text);` with solid fallback via `@supports`), display titles, muted descriptions, `border-top: var(--rule)` per step. Row → column on mobile.

**5.6 Testimonials (3):** pull quotes in display font `clamp(1.75rem, 3.5vw, var(--text-2xl))`, oversized typographic opening quote mark as the only ornament, mono uppercase attribution + muted role.

**5.7 Pricing (3 tiers):** flex row → column. Each `.card`-style plan: mono tier name, price in display type at `clamp(3rem, 6vw, var(--text-3xl))`, feature list with mono "+" markers, one CTA. Middle tier `.plan--featured`: fully inverted (`--color-primary` bg / `--color-bg` text — flips correctly in dark mode via tokens) + accent `.badge` "Most popular" + `.btn--primary`; others use `.btn--ghost`.

**5.8 FAQ:** 5 accordion items per 2.5 (licensing, webfonts, variable axes, trials, refunds).

**5.9 Final CTA:** giant statement headline ("Set your words in something better.") with the accent underline on the key word (the only second use of the accent-underline ornament budget); email capture per 2.3 — flex row (input grows + `.btn--primary` "Claim trial fonts") → column on mobile; submit runs loading → success state (check icon, success colors, `aria-live` message "Check your inbox — the trials are on their way.") or inline error for invalid email.

**5.10 Footer:** `border-top: var(--rule)`; oversized wordmark at `--text-4xl`; secondary link columns (Fonts / Licensing / Foundry + legal: Terms, Privacy) as flex wrap; mono small print with JS-injected year; "Back to top" link. Text links only — no social icons.

---

## 6. script.js BEHAVIORAL REQUIREMENTS

- **Theme system:** read `localStorage` → else `matchMedia('(prefers-color-scheme: dark)')`; toggle `.dark` on `<html>`; sync `aria-pressed` / `aria-label` / icon.
- **Mobile nav toggle** with `aria-expanded`, `Esc`, outside-click, and focus handling.
- **FAQ accordion** enhancement (native `details`/`summary` or ARIA button+region per 2.5).
- **Email validation:** client-side check, `.input--error` + `aria-live` message, submit → `.btn--loading` (≈1.2s) → success state; no double submits.
- **Marquee:** duplicate track content with `aria-hidden="true"` for a seamless loop.
- Optional: IntersectionObserver scroll reveals — disabled under reduced motion. No other JS; no behavioral code beyond the above.
