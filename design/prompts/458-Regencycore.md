# Regencycore Landing Page — Build Specification for Coding Agent

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality Landing Page on the first attempt. Theme: **Regencycore** (Bridgerton-inspired Regency romance revival — pastel florals, empire silhouettes, pearls, ornate script, gilt frames, aristocratic, dreamy, floral, niche; era 2020–present).

**Required sections:** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Source notes (translated from the original spec):** The source style specification does **not** declare light/dark modes and instructs to *validate in both light and dark before publishing* — you must therefore author the dark palette yourself and verify contrast in both modes. All user-facing copy must be written in **English**, in an aristocratic, romantic, lightly playful Regency tone. No lorem ipsum.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
* **Minimal HTML Modifications:** HTML must remain clean, semantic, and styling-agnostic — changing the site's look must require editing only the CSS file, never the markup.

### 1.2 CSS Variables & Theme Tokens
Adopt the following Regencycore token block **verbatim** as your design foundation in `:root`:

```css
:root {
  /* color */
  --color-bg: #fbeef0;
  --color-surface: #fffaf6;
  --color-surface-strong: #f6e0e4;
  --color-border: #e3b8c2;
  --color-text: #4a2c3a;
  --color-text-muted: #8a6274;
  --color-primary: #c1436a;
  --color-accent: #c9a35c;
  --color-sage: #8fa583;
  /* radius */
  --radius-sm: 8px; --radius-md: 16px; --radius-lg: 28px; --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(193, 67, 106, 0.10);
  --shadow-md: 0 8px 20px rgba(193, 67, 106, 0.14);
  --shadow-lg: 0 18px 36px rgba(193, 67, 106, 0.16);
  /* font */
  --font-sans: 'Cormorant Garamond', Georgia, serif;
  --font-display: 'Great Vibes', 'Snell Roundhand', cursive;
  --font-mono: ui-monospace, monospace;
  /* text scale, spacing, ease — per source spec */
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem; --text-4xl: 3rem; --text-5xl: 4rem;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
  /* signature ornament: double gilt frame */
  --gilt-frame: 1px solid var(--color-accent);
  --gilt-outer: 2px solid var(--color-border);
  --floral-wash: radial-gradient(120% 100% at 100% 0%, rgba(201,163,92,0.14), transparent 55%);
}
```

You **must** extend it with these mandatory semantic aliases and missing tokens:

```css
:root {
  /* semantic aliases */
  --primary: var(--color-primary);
  --secondary: var(--color-accent);
  --bg-primary: var(--color-bg);
  --bg-secondary: var(--color-surface);
  --text-primary: var(--color-text);
  --text-secondary: var(--color-text-muted);
  --border-default: var(--color-border);
  --font-base: var(--font-sans);
  /* state + motion + layering tokens */
  --text-success: #4e6a45;   /* darkened sage for AA contrast on light surfaces */
  --text-error: #a12633;     /* deep crimson, distinct from --color-primary */
  --border-success: #8fa583;
  --border-error: #a12633;
  --spacing-gap: var(--space-6);
  --transition-fast: 150ms;
  --transition-normal: 280ms;
  --z-dropdown: 100;
  --z-modal: 200;
  --z-toast: 300;
}
```

* **Contrast Pairing:** Every light background token must pair with a dark text token and every dark background token with a light text token — enforce this in **both** themes.
* **Light Mode Background:** Never pure white; the spec's `#fbeef0` blush is the page background. Where a near-white is needed, use `#fefefe`, never `#ffffff`.
* **Signature Ornament:** The double gilt frame (a slim gold hairline inset within a soft blush border, like a miniature portrait frame — implemented via `border` + `outline` with negative `outline-offset`) must repeat on the nav, every card, and the primary button. A script display face (`Great Vibes`) is used for headlines and brand marks.

### 1.3 Mandatory Dark Mode Support
Dark mode **must** be authored by you (the source spec omits it) as a "Midnight Salon" palette — candlelit ballroom: deep aubergine/plum surfaces, blush-cream text, brightened gilt. Suggested starting values (validate and adjust for WCAG AA):

```css
--color-bg: #241a21; --color-surface: #2e222b; --color-surface-strong: #3b2b35;
--color-border: #6b4a58; --color-text: #f6e8ed; --color-text-muted: #cfa9b8;
--color-primary: #e093ab; --color-accent: #d9b878; --color-sage: #a9c0a0;
--text-success: #a9c39d; --text-error: #f0929f; --border-success: #a9c0a0; --border-error: #f0929f;
--shadow-sm/md/lg: deeper rose-black shadows (e.g., rgba(20,10,14,0.4)+);
--floral-wash: radial-gradient(120% 100% at 100% 0%, rgba(217,184,120,0.10), transparent 55%);
```

* **Implementation:** Define dark tokens under both `@media (prefers-color-scheme: dark) { :root:not(.light) { … } }` and `:root.dark { … }` so a stored class preference can override the OS setting without any HTML restructuring.
* **Contrast Pairing in Dark:** The gilt hairline and blush borders must remain clearly visible on plum. Filled primary buttons in dark mode must flip to dark text (`#2b1c23`) on the lightened rose to preserve the pairing rule.
* **Persistence:** Store the user's choice in `localStorage` (e.g., key `regencycore-theme`); fall back to `prefers-color-scheme` on first visit. Provide a visible toggle control in the nav — a gilt-framed pill button with a Google Material Symbol (`light_mode` / `dark_mode`) — carrying correct `aria-pressed` and `aria-label` state, updated by `script.js`.

### 1.4 Flexbox Layout & Mobile-First Alignment
* Build all layout structures with **Flexbox** (and CSS Grid only for card grids).
* **Default Alignment Rule:** Every flex container must default to `align-items: center` unless there is an explicitly justified exception (e.g., `.input-group` stacks label/input/error vertically and may use `flex-start`).
* **Mobile-Friendly First:** Rows must convert to columns on smaller viewports; no horizontal scrolling at any width from 320px up. Test at 320px, 768px, 1024px, 1440px.

### 1.5 Styling Approach — Custom CSS Design System
* The provided Regencycore token stylesheet **is** the framework: implement with clean custom CSS in `style.css`. Do **not** introduce Tailwind or any other framework.
* All component styles must map back to the CSS variables and generic reusable class names (`.btn`, `.card`, `.input`, `.badge`, `.nav`), extended with BEM elements/modifiers.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text:** Load **Cormorant Garamond** (body/serif) and **Great Vibes** (script display) via Google Fonts `<link>` tags (with `preconnect`), bound to `--font-sans` / `--font-base` and `--font-display`.
* **Icons:** Use **Google Material Symbols Rounded** exclusively. Explicitly forbidden: raw inline SVGs, local icon files, emoji-as-icons, and external image assets. Decorative elements (pearls, florals, gilt flourishes) must be pure CSS — e.g., pearls as `radial-gradient` circles with highlight offsets, floral washes as layered gradients, dividers as dotted "pearl strings."
* Icon markup pattern: `<span class="material-symbols-rounded" aria-hidden="true">icon_name</span>`; control `FILL`/weight via a CSS class using `font-variation-settings`, never inline styles.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

Adopt the source spec's base classes (`.nav`, `.btn`, `.card`, `.input`, `.badge`) and extend them so every state below is fully styled via CSS classes.

### 2.1 Button Component
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` Minimum touch target 44×44px. Pill radius per spec.
* **Hover:** `translateY(-1px)` lift with `--shadow-md` and `cursor: pointer`.
* **Focus:** Distinct `:focus-visible` ring using `--color-primary` (`outline`/`box-shadow`), visible in both themes.
* **Active/Pressed:** `transform: scale(0.97)` click feedback.
* **Loading:** `.btn--loading` (with `aria-busy="true"` on the button) — disables pointer events, prevents double-clicks/submissions, and renders a CSS-only spinner (rotating ring using `currentColor`) without distorting button dimensions.
* **Disabled:** `opacity: 0.5`, greyscale filter, `cursor: not-allowed`, no transform.
* **Success/Error:** `.btn--success` / `.btn--error` temporary feedback states driven by `--text-success` / `--text-error` (used by the Final CTA form).
* **Danger variant:** Define `.btn--danger` in the stylesheet (deep crimson fill, distinct in both light and dark) as part of the complete design system, even if the page contains no destructive action.
* **Primary:** `.btn--primary` per spec (rose fill, gilt border); in dark mode it must satisfy the contrast pairing rule from 1.3.

### 2.2 Card Component
* **Default:** Flexible flexbox layout, `--color-surface` background, double gilt frame (`border` + inset `outline`), `--shadow-md`, `--radius-lg`.
* **Hover:** `transform: translateY(-2px)` with elevation shift to `--shadow-lg`.
* **Focus-within:** Card borders/gilt outline intensify when a child link or button receives focus.
* **Loading (Skeleton):** `.card--skeleton` with a CSS shimmer animation (`@keyframes`) that preserves layout dimensions; demonstrate it on the Testimonials cards during a brief simulated load (~600ms), disabled under `prefers-reduced-motion`.
* **Empty State:** `.card--empty` structured fallback with a Google Material Symbol and clear guidance text, defined in the stylesheet as part of the component system.

### 2.3 Form & Input Requirements
Used by the Final CTA email capture (and any future form):
* **States:** Empty, Focused (the spec's rose ring via `box-shadow` + `color-mix`), Filled, Valid (`.input--valid` — sage border + check Material Symbol), Invalid (`.input--invalid` — crimson border, `--text-error` message, error Material Symbol), Disabled, Read-only.
* **Structure:** `.input-group` flex container (column; justified `flex-start` exception) wrapping a `<label>`, the `.input` field, and a dedicated error feedback element (`id` referenced by `aria-describedby`, inside an `aria-live="polite"` region).
* **Never color-only:** Valid/invalid states must always pair color with an icon and/or text message.

### 2.4 FAQ Accordion (Disclosure)
* Build with native `<details>` / `<summary>` for free keyboard operability — no mouse-only interactions.
* **Summary:** Question in Cormorant serif + `expand_more` Material Symbol that rotates 180° when open; full-width touch target ≥44px tall; `cursor: pointer`.
* **Panel:** Animated open/close via CSS transition (e.g., `grid-template-rows` or `max-height` technique); animation disabled under `prefers-reduced-motion` while content remains fully accessible.
* If you introduce any modal/overlay beyond this spec, it must follow standard modal rules (centered flex, backdrop, icon close button, focus trap, `Esc`/overlay-click close, `--z-modal`).

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** Fluid `clamp()` typography, responsive breakpoints, zero horizontal overflow.
* **Smooth Animations:** `transition: var(--transition-normal) var(--ease-standard)` on all state changes; honor `prefers-reduced-motion` globally (disable transforms, lifts, shimmer, and scroll-behavior; keep the functional loading spinner).
* **Accessibility (a11y):** WCAG AA contrast in both Light and Dark modes. Semantic HTML5 landmarks (`header`, `main`, `footer`, `section` with `aria-labelledby`), a single `h1`, logical heading hierarchy, skip-to-content link, `lang="en"`, correct ARIA roles/labels on custom widgets (theme toggle, mobile menu), logical DOM/focus order, full keyboard operability, and `aria-live` regions for dynamic feedback (form errors, success, loading).
* **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
* **Destructive Actions:** `.btn--danger` must be visually distinct in both themes (see 2.1).
* **Anchor Navigation:** `scroll-behavior: smooth` (reduced-motion aware) and `scroll-margin-top` on sections to offset the sticky nav.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **File Structure:** Separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer></script>`). No inline styles anywhere.
* **Naming Convention:** BEM throughout (`block__element--modifier`), matching the spec's `.btn--primary` pattern — never mix conventions.
* **Copy:** Write original, coherent English copy in a Regency tone (e.g., "Request an Invitation," "The Season Awaits," "Most Sought After"). Invent a consistent fictional offering (e.g., a members' social club for the modern season) and keep terminology consistent across all sections. Lorem ipsum is forbidden.
* **No Unrequested Components:** Build exactly the eight requested sections plus the header/nav and theme toggle. Do not add carousels, chat widgets, cookie banners, or analytics.
* **`script.js` scope:** theme init/toggle/persistence, mobile nav menu, Final CTA form validation + simulated submit (loading → success), footer current year. Optional: subtle IntersectionObserver reveal animations that never hide content when JS fails.

---

## 5. PAGE BLUEPRINT (SECTION-BY-SECTION)

### 5.1 Header / Nav
Sticky header wrapping the spec's `.nav` (gilt-framed, `--radius-lg`): script brand mark in `Great Vibes` (e.g., "The Gilded Season"), links to Features / How It Works / Testimonials / Pricing / FAQ, the theme toggle (1.3), and a compact `.btn--primary` "Request an Invitation" → `#cta`. On mobile (<768px), links collapse into an accessible disclosure panel toggled by a button with `aria-expanded` / `aria-controls`, hamburger/close Material Symbols, `Esc` to close, no horizontal scroll.

### 5.2 Hero
Near-full-viewport (`min-height: 80vh`) centered flex column over `--floral-wash`: `.badge` eyebrow (e.g., "Now Assembling the Season"), `h1` in `Great Vibes` at `clamp()` display size, Cormorant lede paragraph, two CTAs (`.btn--primary` "Request an Invitation" → `#cta`; secondary `.btn` "Peruse the Offerings" → `#features`), and a CSS pearl-string divider. Optional decorative corner flourishes in pure CSS gradients only.

### 5.3 Features — 3 Cards
Section header (script eyebrow + serif `h2`), then a 1-col → 3-col responsive grid of `.card`s. Each card: Material Symbol inside a gilt-ringed circle, `h3` title, two–three lines of copy, and an inline text link. Apply hover lift and `:focus-within` gilt glow (2.2).

### 5.4 How It Works — 3 Steps
Three steps with ornate `Great Vibes` numerals ("1", "2", "3") inside gilt-ring circles, step titles and copy. On desktop, connect steps with a horizontal CSS pearl-string line; stack vertically on mobile with the line running vertically.

### 5.5 Testimonials
Three gilt-framed `.card`s, each with a script/CSS oversized quotation mark or `format_quote` Material Symbol, one–two sentence quote, and a CSS pearl avatar (radial-gradient circle, no images) with an aristocratic English name and title (e.g., "Lady Arabella Whitmore, Debutante of the Season"). Demonstrate the skeleton shimmer on initial load (2.2).

### 5.6 Pricing — 3 Tiers
Three `.card`s in a responsive grid: e.g., "The Debutante" (entry), "The Diamond" (featured), "The Duchess" (premium). The featured middle tier uses `.card--featured` — intensified double gilt frame, `.badge` reading "Most Sought After," stronger elevation, slight scale on desktop. Each tier: script name, price, feature list with `check` Material Symbols in sage, and a `.btn` (featured tier gets `.btn--primary`).

### 5.7 FAQ
Five–six `<details>`/`<summary>` accordion items (2.4) inside a max-width column, styled with the gilt-frame language at `--radius-md`.

### 5.8 Final CTA
A dramatic full-width panel on `--color-surface-strong` with the double gilt frame: script `h2`, short persuasive line, and the email capture `.input-group` (label, pill `.input`, `.btn--primary` submit). Flow: empty → validate on submit → invalid shows `.input--invalid` + error icon + message in the `aria-live` region → valid shows `.btn--loading` (spinner, `aria-busy`) → `.btn--success` with check icon and a success message ("Your card has been sent.") announced via `aria-live`. Simulate the request with a timeout; no backend.

### 5.9 Footer
Top gilt hairline divider; script brand mark + one-line tagline; two–three columns of secondary links ("The Estate," "Correspondence," "Fine Print" — anchor to page sections where sensible, otherwise descriptive `href="#"` links); social icon buttons (Material Symbols) with `aria-label`s; muted copyright line with the current year injected by JS.

---

## 6. ACCEPTANCE CHECKLIST

Before delivering, verify: zero inline styles; zero inline SVGs/images; all tokens from 1.2 present; dark mode authored, toggleable, persisted, and AA-validated in both themes; every flex container defaults to `align-items: center` (documented exceptions only); all button states (hover/focus/active/loading/disabled/success/error/danger) styled; card hover/focus-within/skeleton/empty states styled; form states complete with non-color-only feedback and `aria-live`; FAQ fully keyboard operable; no horizontal scroll 320–1440px; `prefers-reduced-motion` respected; BEM naming consistent; separate `index.html` / `style.css` / `script.js` with a single deferred script; all copy in themed English.
