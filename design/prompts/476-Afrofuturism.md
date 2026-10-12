# SYSTEM PROMPT — AFROFUTURISM LANDING PAGE (COMPLETE BUILD, FIRST ATTEMPT)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready landing page on the first attempt. The final deliverable is fully working code — HTML, CSS, and JS — following every rule below without omission.

**Mission:** A single-page marketing site in the **Afrofuturism** style with the following sections, in order: **Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.**

---

## 0. THEME BRIEF & CREATIVE DIRECTION

**Name / Era / Keywords:** Afrofuturism (claude-artisan/retrofuturism), 1950s–present. Black futurist design; celestial black grounds carrying sun-gold and electric color; strong radial systems, constellations, and orbit lines; a future that references lineage, craft, and celebration.

**Visual Signature:** Channel Sun Ra's cosmic visual language and the Afrofuturist world-building of Wakanda. The dark theme is the brand's hero presentation: a deep celestial black ground (`#100c1b`) with a warm ivory-gold text tone (`#fff8df`), sun-gold (`#f4b942`) as the primary signal color, electric teal (`#2dd4bf`) and violet (`#a78bfa`) as electric accents. Required decorative systems, all built in pure CSS (no images, no SVG):
- **Radial systems:** sun-gold radial-gradient glows radiating behind focal content (hero, Final CTA).
- **Constellations:** a fixed, tiled star-dot pattern built from the `--constellation` radial-gradient token, layered behind all content.
- **Orbit lines:** thin (1px) circular/elliptical rings with translucent gold/teal borders, slowly rotating around hero content.
- **Shadow & blur:** luminous glow shadows (`--shadow-glow`, `--shadow-orbit`) on cards/buttons; frosted-glass blur (`backdrop-filter`) on the sticky nav and the dialog backdrop.

**Copy Voice & Locale:** All user-facing copy must be written in **English** — elevated, warm, mythic but plain-spoken; it references stars, lineage, craft, orbit, and transmission. Write real, coherent copy; lorem ipsum is forbidden. Recommended product identity (refine, don't replace, the concept): **"Sankofa"** — a studio platform that carries heritage into the future. Anchors: Features = "Ancestral Archive", "Orbital Sync", "Golden Loom"; Steps = "Chart your constellation" → "Weave the thread" → "Transmit to the future"; Pricing tiers = "Dawn" (free), "Orbit" (featured, $24/mo), "Constellation" (custom); testimonial names honoring the diaspora (e.g., Amara Osei — Creative Director, Lagos; Jamil Carter — Founder, Neo-Kente Studio; Zola Mokoena — Product Lead, Sankofa Labs).

**Source Note (translated from original spec):** The source style sheet does not declare light/dark modes; therefore **both themes must be implemented and validated for contrast before publishing** (see Section 1.3).

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS

* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** Every design property, layout rule, and state is applied via class or ID selectors in `style.css`.
* **Minimal HTML Modifications:** HTML stays semantic and clean (`header`, `nav`, `main`, `section`, `footer`, `h1–h3`, `p`, `button`, `form`); the look must be changeable by editing CSS alone.

### 1.2 CSS Variables & Theme Tokens

Store **all** visual tokens in `:root` (light baseline) and `:root.dark` (dark), using exactly these canonical names plus the listed supplements. Do not invent alternative names for these concepts.

```css
:root {
  /* — canonical color tokens · LIGHT (sun-washed celestial ivory; never pure white) — */
  --bg-primary: #f7edda;
  --bg-secondary: #fefefe;      /* near-white surface — #fefefe, never #ffffff */
  --bg-raised: #fbf3e0;
  --text-primary: #1c1330;
  --text-secondary: #6b5b49;
  --primary: #f4b942;           /* fills, borders, glows */
  --primary-ink: #100c1b;       /* text placed on gold fills */
  --primary-strong: #7a4a00;     /* gold used AS text in light mode (AA on cream) */
  --secondary: #0f766e;
  --violet: #6b46c1;
  --text-success: #0f766e;
  --text-error: #b3261e;
  --border-default: rgba(28,19,48,.18);
  --border-success: rgba(15,118,110,.55);
  --border-error: rgba(179,38,30,.55);
  --constellation-opacity: .35;
  --shadow-glow: 0 0 0 1px rgba(122,74,0,.32), 0 18px 45px rgba(28,19,48,.12);
  --shadow-orbit: 0 0 28px rgba(15,118,110,.16);

  /* — shared tokens · BOTH MODES — */
  --radius-sm: 4px;  --radius-md: 12px;  --radius-lg: 24px;  --radius-pill: 999px;
  --shadow-sm: 0 2px 8px rgba(16,12,27,.10);
  --shadow-md: 0 10px 30px rgba(16,12,27,.16);
  --spacing-gap: 24px;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --transition-fast: 150ms;  --transition-normal: 300ms;
  --ease-standard: cubic-bezier(.22,.61,.36,1);
  --z-dropdown: 50;  --z-nav: 40;  --z-modal: 100;  --z-toast: 200;
  --font-base: 'Inter', system-ui, sans-serif;
  --font-display: 'Fraunces', Georgia, serif;   /* Exception: Georgia is a stack fallback only */
  --font-mono: 'Space Mono', ui-monospace, monospace;
  --text-xs: .75rem; --text-sm: .875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem; --text-4xl: 3rem; --text-5xl: 4rem;
  --constellation: radial-gradient(circle at 20% 15%, #f4b942 0 1px, transparent 2px),
                   radial-gradient(circle at 78% 34%, #2dd4bf 0 1px, transparent 2px);
}

:root.dark {
  /* — canonical color tokens · DARK (signature Afrofuturist celestial black) — */
  --bg-primary: #100c1b;
  --bg-secondary: #1d1630;
  --bg-raised: #2c2145;
  --text-primary: #fff8df;
  --text-secondary: #d3c6b2;
  --primary: #f4b942;
  --primary-ink: #100c1b;
  --primary-strong: #f4b942;     /* gold text is AA on dark grounds */
  --secondary: #2dd4bf;
  --violet: #a78bfa;
  --text-success: #2dd4bf;
  --text-error: #ff8a7a;
  --border-default: rgba(244,185,66,.45);
  --border-success: rgba(45,212,191,.55);
  --border-error: rgba(255,138,122,.55);
  --constellation-opacity: .75;
  --shadow-glow: 0 0 0 1px rgba(244,185,66,.45), 0 18px 45px rgba(0,0,0,.35);
  --shadow-orbit: 0 0 28px rgba(45,212,191,.22);
}

/* OS-level fallback so prefers-dark users see no flash before JS runs */
@media (prefers-color-scheme: dark) {
  :root:not(.light) { /* repeat the :root.dark values here */ }
}
```

* **Contrast Pairing (mandatory, both themes):** every light background token pairs with a dark text token and every dark background token pairs with a light text token. Gold `#f4b942` may be used as *text* only on dark grounds; in light mode, gold-as-text switches to `--primary-strong` (`#7a4a00`). Verify every text/background pair ≥ 4.5:1 (AA) in **both** modes before publishing.
* **Decorative layers** (constellation overlay, orbit rings, radial glows) sit at `z-index: 0` with `pointer-events: none`; content wrappers sit at `z-index: 1`; layered components use the `--z-*` tokens so dropdowns, nav, modal, and toast can never conflict.

### 1.3 Mandatory Dark Mode Support

* **Implementation:** Both themes are fully defined via the token blocks above (`:root` = light, `:root.dark` = dark, plus the `prefers-color-scheme` media fallback). No HTML restructuring to switch themes — only the class on `<html>` changes.
* **Theme Switching:** A visible toggle in the sticky nav: a `<button>` carrying a Material Symbols icon (`dark_mode` / `light_mode`), a dynamic `aria-label` ("Switch to dark theme" / "Switch to light theme"), and `aria-pressed="true"` while dark is active. Icon and label must swap with the theme.
* **Persistence:** Store the user's choice in `localStorage`; on first visit fall back to `prefers-color-scheme`, and when the OS reports no preference, default to **dark** (the brand's celestial-black signature). Apply the resolved class as early as possible in `script.js` to avoid a flash of wrong theme.

### 1.4 Flexbox Layout & Mobile-First Alignment

* **Default Alignment Rule:** every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
* **Mobile-Friendly First:** all flex/grid layouts are responsive out of the box — rows collapse to columns on small viewports, `flex-wrap: wrap` on nav/rows, fluid `clamp()` type sizing, and `overflow-x: clip` on `html`/`body` so nothing ever causes horizontal scrolling, including the absolutely-positioned orbit rings.
* **Baseline primitives (adopt and extend):** `.wrap` (max-width 880px, auto margins, vertical rhythm via `--space-*`), `.wrap--wide` (1120px for pricing/testimonials/footer), `.nav` (flex, centered, gap, sticky), `.grid` (`repeat(auto-fit, minmax(220px, 1fr))`, `gap: var(--space-4)`), `.row` (flex, wrap, centered), `.card`, `.btn`, `.badge`, `.input`.

### 1.5 CSS Framework & Naming Convention

* **Custom CSS is the framework here:** hand-authored, token-driven CSS (the source spec is framework-free). Do **not** mix in utility-class soup; every selector is a semantic component class.
* **Single convention — BEM-lite, matching the source primitives:** block (`card`), block--modifier (`btn--primary`, `card--featured`), block__element (`card__title`) where a named child is needed; plain element selectors (`h3`, `p`) inside a block for typography. Never mix conventions in one file.

### 1.6 Typography & Icons (Google Fonts Mandatory)

* **Text Fonts:** load via Google Fonts `<link>` (with `preconnect`): **Inter** (400/500/700) bound to `--font-base`; **Fraunces** (400/700) bound to `--font-display` for all headings; **Space Mono** (400/700) bound to `--font-mono` for eyebrow labels, stats, and prices. **Exception clause:** Georgia appears only as a fallback inside the `--font-display` stack — it is never the primary loaded face.
* **Icons:** Google **Material Symbols** (Outlined) loaded via the official Google Fonts stylesheet. Suggested glyph set: `auto_awesome`, `orbit`, `hub`, `rocket_launch`, `celebration`, `workspace_premium`, `insights`, `star`, `check_circle`, `error`, `check`, `expand_more`, `close`, `progress`, `dark_mode`, `light_mode`, `mail`, `arrow_outward`. Use `font-variation-settings: 'FILL' 1` for filled stars.
* **Forbidden:** raw inline SVGs, local icon files, emoji-as-icons, and brand glyphs (social links are text labels with an `arrow_outward` symbol, since Material Symbols has no brand icons).

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Buttons

All states styled via classes on the `.btn` base, which must be `display: flex; align-items: center; justify-content: center; gap: .5rem;` with a minimum 44×44px touch target:

* **Default:** variants `.btn--primary` (gold fill, `--primary-ink` text, `--shadow-glow`) and `.btn--ghost` (transparent, `--border-default` gold hairline).
* **Hover:** brightness lift + `translateY(-2px)` + intensified glow, `cursor: pointer`.
* **Focus:** `:focus-visible` ring using tokens (`outline: 3px solid var(--secondary); outline-offset: 3px`) for keyboard navigation.
* **Active/Pressed:** `transform: scale(0.97)` click feedback.
* **Loading:** `.is-loading` — disables pointer events, sets `aria-busy`, prevents double-clicks, and shows a CSS spinner or rotating Material `progress` icon **without changing button dimensions** (swap label content, preserve width/height).
* **Disabled:** `[disabled]` — `opacity: .5`, desaturated, `cursor: not-allowed`, no transform.
* **Success/Error:** `.is-success` / `.is-error` — temporary feedback styling driven by `--text-success` / `--text-error` (icon swap to `check` / `error` included).
* Also define `.btn--danger` (coral error treatment) so destructive actions are visually distinct in both themes, even if unused on this page.

### 2.2 Cards

* **Default:** `.card` — `--bg-secondary` surface, 1px `--border-default` gold hairline, `--shadow-glow`, radius `--radius-md`, padding `--space-6`, relative `z-index: 1`.
* **Hover:** `transform: translateY(-2px)` with elevation/glow shift (`transition: var(--transition-normal)`).
* **Focus-within:** border brightens to solid `--primary` and glow intensifies when a child link/button receives focus.
* **Loading (Skeleton):** a `.skeleton` utility with a shimmer `@keyframes` gradient animation, sized to content to prevent layout jumps (used inside the dialog while content renders).
* **Empty State:** a `.empty-state` pattern — centered flex column, Material icon inside a gold ring, clear guidance text in `--text-secondary` — defined in CSS for any content area that can render empty.

### 2.3 Forms & Inputs

The Final CTA and the dialog both contain an email capture built as a flex container wrapping `<label>`, `.input`, and a dedicated error-feedback element:

* **States:** empty; **focused** (token-based outline ring); filled; **valid** (`--border-success` + `check_circle` icon, `aria-invalid` removed); **invalid** (`--border-error`, `--text-error` message, `error` icon, `aria-invalid="true"`, `aria-describedby` pointing at the error element); disabled; read-only (`[readonly]` styling defined).
* **Feedback:** error and success messages live in an `aria-live="polite"` region; never color alone — icon + text always accompany state.

### 2.4 Dialog / Modal

Pricing tiers open a **plan-details dialog** implemented with the native `<dialog>` element (`showModal()`):

* **States:** opening (scale/fade-in `@keyframes`), open, **loading** (skeleton shimmer while content populates), **success/error** (embedded "reserve your seat" mini form flows loading → success check / error message), closing (animate out via the `cancel`-event pattern, then `close()`).
* **UX Features:** centered flex overlay (`align-items: center`), styled `::backdrop` (`rgba(16,12,27,.55)` + `backdrop-filter: blur(6px)`), a Material `close` icon button, keyboard focus trapping and `Esc` close provided natively, close on overlay click, focus returns to the trigger, `aria-labelledby` bound to the dialog title. Layered at `--z-modal`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** fluid `clamp()` type, `auto-fit` grids, mobile column collapse; no horizontal overflow at 320px.
* **Smooth Animations:** every state change transitions with `transition: all var(--transition-normal) var(--ease-standard)` (or targeted properties); orbit-ring rotation is slow (≥40s) and infinite; the global `@media (prefers-reduced-motion: reduce)` kill switch reduces all animation/transition durations to `.01ms`.
* **Accessibility (a11y):** AA contrast in both Light and Dark modes; semantic HTML5 landmarks; a visually-hidden skip link; logical DOM/focus order; full keyboard operability (no mouse-only interactions, visible focus everywhere); correct ARIA on custom widgets (theme toggle `aria-pressed`, FAQ `aria-expanded`, dialogs, `aria-live` regions for form/toast-style feedback). Never rely on color alone — pair every state with an icon and/or text.
* **Mandatory Visual Feedback:** every click, hover, and submission produces a visible state change.
* **Destructive/Distinct Actions:** `.btn--danger` and any destructive styling must be distinct in both themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **Files:** `index.html`, `style.css`, `script.js` — complete contents of all three in one response. HTML references exactly one external stylesheet and one `<script src="script.js" defer>`; no inline `<script>` blocks, no inline styles, no inline SVG.
* **Naming:** one BEM-lite convention across all three files (Section 1.5). JS is vanilla, dependency-free, `'use strict'`, organized in small IIFE modules (theme, dialog, form validation, smooth anchor scrolling honoring reduced motion).
* **No Unrequested Placeholders:** real, coherent English copy everywhere (Section 0 anchors); lorem ipsum is prohibited; placeholder text only for genuinely unspecified data (e.g., a sample contact email).
* **Meta:** `<html lang="en">`, descriptive `<title>`, meta description, and both `theme-color` meta variants (`prefers-color-scheme: light`/`dark`).

---

## 5. PAGE STRUCTURE — SECTION-BY-SECTION BUILD SPEC

**5.0 Global Shell:** fixed constellation layer via `body::before` (`background: var(--constellation)`, `background-size: 260px 220px`, `opacity: var(--constellation-opacity)`, `pointer-events: none`, `z-index: 0`); all sections `position: relative; z-index: 1`. Sticky `.nav`: brand wordmark ("SANKOfA" styled via `--font-mono`), anchor links (Features, How it works, Pricing, FAQ), the theme toggle, and a `.btn--primary` "Join the orbit" (opens the dialog). Frosted-glass nav: translucent `--bg-secondary` + `backdrop-filter: blur(10px)` with a solid-color fallback; layered at `--z-nav`.

**5.1 Hero:** radial sun-gold glow behind the headline (`.hero::before`, radial-gradient fading to transparent); two thin **orbit rings** (absolutely positioned `aria-hidden` circles with 1px translucent gold/teal borders, slow CSS rotation, hidden or static under reduced motion); a `.badge` eyebrow in mono gold ("A future with lineage"); `h1` in `--font-display` with one gold-accented keyword; muted subcopy in `--text-secondary`; dual CTAs — `.btn--primary` "Begin the transmission" and `.btn--ghost` "See how it works" (`#how`); a stats `.row` (three mono-font gold numbers: builders, studios, cities).

**5.2 Features:** three `.card`s in `.grid`; each with a Material icon inside a gold ring, an `--font-display` title (Ancestral Archive / Orbital Sync / Golden Loom), and muted copy; card hover lift + glow (Section 2.2).

**5.3 How It Works:** three steps in a responsive flex row (column on mobile); each step = circular gold-number badge (mono font), title, copy; on desktop a thin pseudo-element **orbit line** connects the badges; connector hidden on mobile.

**5.4 Testimonials:** three quote `.card`s; each with a monogram avatar (initials in a gold/teal/violet gradient ring — no photos), a five-star row (filled Material `star` in gold plus `sr-only` text "Rated 5 out of 5 stars"), the quote, and name + role in `--text-secondary`. Use the `--violet` accent for this section's borders.

**5.5 Pricing:** three tier cards in `.grid`; the middle "Orbit" tier uses `.card--featured` (raised surface, solid gold border, `--shadow-glow`, "Most chosen" `.badge`, slight scale-up on desktop); each tier shows name (mono), price in `--font-display`, and a feature list with teal `check_circle` icons; every tier's CTA opens the plan-details dialog (Section 2.4); focus-within highlights each tier.

**5.6 FAQ:** five `<details>`/`<summary>` items (native keyboard support, no JS required); `summary` styled as a full-width flex row (`align-items: center`, min-height 44px, `:focus-visible` ring) with question in `--font-display` and a `expand_more` icon rotating 180° on `[open]`; answers in `--text-secondary` with hairline dividers between items.

**5.7 Final CTA:** full-width section with its own radial gold glow and a subtle orbit accent; `h2` in `--font-display`; the email capture form (Section 2.3): visible label, `.input`, `.btn--primary` submit; on submit — validate → button `.is-loading` (spinner, double-click prevented) → `.is-success` (check icon, success text) with `aria-live` confirmation ("Transmission received — welcome to the constellation"), or invalid → error border, icon, and live error message.

**5.8 Footer:** `.wrap--wide` grid — brand wordmark + one-line tagline; three secondary link columns (Product: Features, How it works, Pricing, FAQ · Company: About, Contact, Careers, Press · Legal: Privacy, Terms, Cookies) — all links `--text-secondary` with hover to `--text-primary`; a social `.row` (text links "Instagram", "X", "YouTube" each with `arrow_outward`); bottom bar with © line in mono font. No dead ends: every link has a real `href` (page anchors where targets exist).

---

## 6. ACCEPTANCE CHECKLIST (VALIDATE BEFORE PUBLISHING)

1. Zero `style=""` attributes, zero inline SVGs, zero inline scripts beyond the single deferred `script.js`.
2. Both Light and Dark themes defined, toggleable, persisted via `localStorage`, OS-fallback, no wrong-theme flash for OS-dark users; toggle exposes correct `aria-pressed`/`aria-label`.
3. Every text/background pair ≥ 4.5:1 in **both** modes (spot-check gold text, muted text, error/success text).
4. Full keyboard pass: tab order, visible focus rings, FAQ and dialog operable, dialog traps focus and restores it on close.
5. All required states exist in CSS: button (default/hover/focus/active/loading/disabled/success/error), card (default/hover/focus-within/skeleton/empty), input (empty/focus/filled/valid/invalid/disabled/read-only), dialog (opening/open/loading/success/closing).
6. No horizontal scrolling at 320px; all flex containers default to `align-items: center`; `prefers-reduced-motion` honored globally.
7. Google Fonts only (Inter, Fraunces, Space Mono) and Material Symbols only; canonical token names exactly as specified; single BEM-lite convention throughout; real English Afrofuturist copy, zero lorem ipsum.
