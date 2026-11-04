# CODING-AGENT PROMPT — "NORMCORE" LANDING PAGE (COMPLETE BUILD, FIRST ATTEMPT)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete Landing Page on the first attempt. Generate the final code immediately, following every rule in this document. Do not ask clarifying questions — where copy is unspecified, write it yourself in the voice defined in Section 0.5.

**Objective:** A single-page marketing site themed **Normcore**, containing, in order: Header/Nav, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

---

## 0. THEME DIRECTION — NORMCORE

**0.1 Definition:** Anti-fashion minimalism. Era: 2013–present. Keywords: neutral, generic, unbranded plainness, beige/gray/denim ordinariness, anti-trend, blends in, comfort over statement.

**0.2 The Signature Move:** The deliberate **absence** of a signature move. Flat beige/gray surfaces, a plain 1px rule (`--plain-rule`), and exactly one muted denim accent line (`--generic-accent-line`) reused sparingly on the nav and inputs. Anything more would read as a "look," which Normcore rejects.

**0.3 Forbidden:** Gradients, glassmorphism, glow/neon, expressive display typefaces, large transforms, decorative illustrations, emoji in UI copy, star ratings, avatar photos, brand flourishes, and any effect that draws attention to itself.

**0.4 Comfort Over Statement:** Generous whitespace, readable line lengths (max ~65ch per paragraph), comfortable touch targets, barely-there shadows.

**0.5 Copy Direction:** All user-facing copy in plain, understated **English**. Hype-free, plain-spoken, generic-utilitarian tone (e.g., "It works. That's the pitch."). Invent a deliberately generic, unbranded product concept (e.g., a no-frills notes or task utility) with a plain one-word name. No lorem ipsum anywhere.

**0.6 Canonical Reference:** The token sheet in §1.2 is the canonical reference specification (`references/00-flagship-implementation-specs/normcore.md`). Reproduce it faithfully as the foundation of `style.css`, with all comments in English.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* **No Inline CSS:** The `style="..."` attribute is forbidden. No inline `<style>` blocks.
* **Class/ID Selectors Only:** All design properties, layout rules, and states are targeted via class or ID selectors in `style.css`.
* **Minimal HTML Modifications:** HTML stays clean, semantic, and style-agnostic. Changing the site's look must require editing only the CSS file, never the markup.

**1.2 CSS Variables & Theme Tokens**
Store all tokens in `:root` and override per theme. Reproduce this canonical sheet (extend, never rename):

```css
:root {
  color-scheme: light;
  /* color — light theme (default) */
  --color-bg: #e9e7e2;
  --color-surface: #f5f4f1;
  --color-surface-strong: #dcdad4;
  --color-border: #b8b5ad;
  --color-text: #2f2e2b;
  --color-text-muted: #6a6862;
  --color-primary: #4a5568;
  --color-accent: #7c8a99;
  --color-denim: #5c7189;
  /* mandatory semantic aliases */
  --primary: var(--color-primary);
  --secondary: var(--color-accent);
  --bg-primary: var(--color-bg);
  --bg-secondary: var(--color-surface);
  --text-primary: var(--color-text);
  --text-secondary: var(--color-text-muted);
  --border-default: var(--color-border);
  --text-success: #4d6b54;
  --text-error: #a34d42;
  --border-success: #4d6b54;
  --border-error: #a34d42;
  /* radius: nothing special, off-the-shelf default corners */
  --radius-sm: 4px; --radius-md: 6px; --radius-lg: 8px; --radius-pill: 999px;
  /* shadow: barely there, no statement */
  --shadow-sm: 0 1px 2px rgba(47,46,43,0.08);
  --shadow-md: 0 2px 6px rgba(47,46,43,0.1);
  --shadow-lg: 0 6px 14px rgba(47,46,43,0.12);
  /* font — Roboto (Google Fonts) with the generic system stack behind it, on purpose */
  --font-base: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
  --font-sans: var(--font-base);
  --font-display: var(--font-base);
  --font-mono: ui-monospace, 'Courier New', monospace;
  /* text scale */
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.25rem; --text-2xl: 1.5rem; --text-3xl: 2rem; --text-4xl: 2.5rem; --text-5xl: 3.25rem;
  /* space */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --spacing-gap: var(--space-4);
  /* transitions */
  --ease-standard: ease;
  --transition-fast: 140ms var(--ease-standard);
  --transition-normal: 240ms var(--ease-standard);
  /* elevation */
  --z-dropdown: 100; --z-modal: 200; --z-toast: 300;
  /* the "signature move": the absence of one */
  --plain-rule: 1px solid var(--color-border);
  --generic-accent-line: 2px solid var(--color-denim);
}

/* Dark theme — same tokens, inverted, contrast pairing preserved */
.dark {
  color-scheme: dark;
  --color-bg: #262522;
  --color-surface: #31302c;
  --color-surface-strong: #3d3b36;
  --color-border: #55534b;
  --color-text: #e9e7e2;
  --color-text-muted: #a09d94;
  --color-primary: #8f9db0;
  --color-accent: #a4b2c1;
  --color-denim: #89a0ba;
  --text-success: #8fae96; --text-error: #d08a80;
  --border-success: #8fae96; --border-error: #d08a80;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.35);
  --shadow-md: 0 2px 6px rgba(0,0,0,0.4);
  --shadow-lg: 0 6px 14px rgba(0,0,0,0.45);
}
@media (prefers-color-scheme: dark) {
  :root:not(.light) { /* identical overrides as .dark */ }
}
```

* **Contrast Pairing (mandatory in every theme):** Light backgrounds pair with dark text; dark backgrounds pair with light text. In dark mode, `.btn--primary` must override to `background: var(--color-denim); color: #262522;` (lightened denim + dark text) to preserve pairing.
* **No Pure White:** Never use `#ffffff`. The theme's near-white is `#f5f4f1`; if a brighter white is ever unavoidable, use `#fefefe`.
* **Base components:** Adopt the canonical base classes verbatim (comments translated to English): `body`, `.nav` (flex, gap `--space-4`, surface background, `border-bottom: var(--plain-rule)`, `border-top: var(--generic-accent-line)`), `.btn` (+ `:hover`, `:active`, `:focus-visible`, `[disabled]`, `--primary`), `.card`, `.input` (+ `::placeholder`, `:focus`), `.badge`, and the reduced-motion guard. Extend them per Sections 2–3; do not restyle them into a "look."

**1.3 Mandatory Dark Mode Support**
* Dark mode **must** be defined: tokens under both `@media (prefers-color-scheme: dark)` (guarded by `:root:not(.light)`, so no-JS users get their system theme with no flash) and a `.dark` class on `<html>`.
* **Theme Switching:** Background and text variables must switch seamlessly with zero HTML restructuring.
* **Persistence:** Store the choice in `localStorage` (key `theme`: `'light'` or `'dark'`); fall back to `prefers-color-scheme` on first visit. Provide a **visible toggle button in the nav** on all viewports: `<button class="btn btn--theme">` with a Google Material Symbol (`dark_mode` / `light_mode`), `aria-pressed="true"` when dark mode is active, and `aria-label="Toggle dark theme"`. `script.js` applies the stored class on load, flips it on click, and syncs `aria-pressed`, `aria-label`, and the icon ligature.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox.
* **Default Alignment Rule:** Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment (e.g., pricing cards use `align-items: stretch` for equal heights; card interiors use `flex-direction: column` with `align-items: flex-start` for text blocks).
* **Mobile-Friendly First:** Rows convert to columns below 768px (stack earlier below 640px where content demands). No horizontal scrolling at any viewport down to 320px. Fluid type via `clamp()` where the scale jumps.

**1.5 Styling Approach & Naming Convention**
* Use **clean, hand-written custom CSS** extending the canonical token sheet — no frameworks, no build step, no utility-class soup. Every class must be a generic, reusable component class mapped to the tokens (`.btn`, `.card`, `.input-group`).
* **One Convention Only:** BEM (`block__element--modifier`), consistent with the canonical `.btn--primary` pattern. Never mix conventions.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* **Text:** Load **Roboto** (weights 400, 500) from Google Fonts via `<link>` with `preconnect`, and bind it to `--font-base` with the generic system stack as fallback. **Exception clause:** the Normcore spec demands "the most generic system stack available, on purpose" — Roboto is the one Google Font that satisfies both the Google Fonts requirement and the generic-utilitarian aesthetic; loading any expressive or display Google Font is forbidden.
* **Icons:** Use **Google Material Symbols (Outlined)** via the Google Fonts link for every icon (e.g., `menu`, `close`, `check`, `expand_more`, `dark_mode`, `light_mode`, `error`, `check_circle`). Raw inline SVGs and local icon files are forbidden.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px. Base per canonical sheet: 500-weight `--text-base`, padding `--space-3 --space-6`, `--radius-md`, surface background, `--plain-rule` border, `--shadow-sm`, `cursor: pointer`.
* **Hover:** Background shifts to `--color-surface-strong` and shadow to `--shadow-md`. No color statements.
* **Focus:** `:focus-visible` ring via `outline: 2px solid var(--color-accent); outline-offset: 2px;` for keyboard navigation.
* **Active/Pressed:** `transform: scale(0.97)` with shadow back to `--shadow-sm`.
* **Loading (`.is-loading` + `disabled`):** Blocks pointer events to prevent double-clicks; hides the label with `visibility: hidden` and renders an absolutely-centered CSS spinner (`border: 2px solid currentColor; border-right-color: transparent; border-radius: 50%;` spinning) so button dimensions never change.
* **Disabled:** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`, no hover/active effects.
* **Success/Error:** `.is-success` (success border + `check_circle` icon + `--text-success`) and `.is-error` (error border + `error` icon + `--text-error`) as temporary feedback states, driven by the CSS variables.
* **Variants:** `.btn` (default), `.btn--primary` (denim background, `#f5f4f1` text; dark-mode override per §1.2), and `.btn--danger` (muted brick `#a34d42` background, light text, visually distinct in both themes) — define `.btn--danger` even though no destructive action exists in the specified sections.

**2.2 Card**
* **Default:** Flex column, `--bg-secondary` surface, `--plain-rule` border, `--radius-lg`, `--shadow-sm`, padding `--space-6`.
* **Hover:** Shadow shifts to `--shadow-md` only. No `translateY` — movement reads as a "look," which Normcore rejects.
* **Focus-within:** Border color shifts to `--color-accent` when a child link/button receives focus (define the rule; apply if any card contains a focusable child).
* **Loading (Skeleton):** Define `.skeleton` in CSS with a plain opacity-pulse animation (no gradient shimmer — gradients are forbidden) to prevent layout jumps; apply to any asynchronously rendered content.
* **Empty State:** Define a `.card--empty` fallback layout: a muted Google Material Symbol, one line of plain guidance text, centered.

**2.3 Form & Input**
* **States:** Empty; Focused (accent border + `box-shadow: 0 0 0 3px rgba(124,138,153,0.25)` per canonical sheet); Filled; Valid (`.input--valid`: success border + `check` icon); Invalid (`.input--invalid`: `--border-error` border, the `--generic-accent-line` left border recolored to `--border-error`, error icon, red message text via `--text-error`); Disabled; Read-only.
* **Structure:** `.input-group` flex container wrapping a visible `<label>`, the `.input` field (min height 44px, `--generic-accent-line` left border per canonical sheet), and a dedicated error feedback element `<p class="input-group__error" aria-live="polite">` referenced by the input's `aria-describedby`. Never placeholder-only labels. Never communicate errors by color alone — icon + text + border.

**2.4 Modal / Popup (Conditional)**
* The specified sections require **no modal** — do not add one. If an overlay ever becomes necessary, it must have: animated Opening/Open/Loading/Success/Error/Closing states via CSS transitions; a centered flex container (`align-items: center; justify-content: center`); a dimmed backdrop at `--z-modal`; a Google Material Symbol close button; keyboard focus trapping; `role="dialog"`, `aria-modal="true"`, `aria-labelledby`; close via `Esc` and overlay click; body scroll lock.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** Fluid sizing, breakpoints at 640/768/1024px, zero horizontal overflow (test at 320px). `html { scroll-behavior: smooth; }` for anchor navigation.
* **Smooth Animations:** All state changes transition via `var(--transition-fast)` (micro) or `var(--transition-normal)` (panels, accordion). Respect `prefers-reduced-motion: reduce` with a global animation/transition/scroll-behavior kill switch.
* **Accessibility (a11y):** WCAG AA contrast in **both** light and dark modes (≥4.5:1 body text, ≥3:1 large text and UI borders — verify the muted tokens in both themes). Never rely on color alone for state. Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), one `h1`, logical heading order, a "Skip to content" link as the first focusable element, visible `:focus-visible` rings everywhere, full keyboard operability (no mouse-only interactions), and `aria-live` regions for dynamic feedback (form errors, loading, success).
* **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
* **Destructive Actions:** `.btn--danger` must be visually distinct in both themes (defined per §2.1).

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **File Structure:** Separate `index.html`, `style.css`, `script.js`. The only script reference is a single `<script src="script.js" defer></script>`. No other inline `<script>` blocks. All Google Fonts links (`Roboto` + Material Symbols) in `<head>` with `preconnect`. `lang="en"`, meta viewport, plain meta description, plain `<title>`.
* **Naming Convention:** BEM only, across the entire deliverable.
* **No Unrequested Placeholders:** The user supplied no copy, so write complete, real English copy in the Normcore voice (§0.5). Lorem ipsum, emoji, and TODO stubs are forbidden.
* **script.js Scope (vanilla JS only, no libraries):** (a) theme toggle + `localStorage` persistence + ARIA/icon sync; (b) mobile nav menu toggle; (c) Final CTA form validation with loading → success simulation. Nothing else.

---

## 5. PAGE SECTION BUILD SHEET

**5.1 Header/Nav:** Sticky `<header class="nav">` per the canonical sheet (surface background, `--plain-rule` bottom, `--generic-accent-line` top). Plain-text wordmark (500 weight, no logo icon), anchor links (Features, How it works, Pricing, FAQ) with underline on hover/focus, theme toggle (§1.3), and a `.btn--primary` "Get started" CTA. Below 768px, links collapse into a `.nav__menu` panel toggled by a `.nav__toggle` button (Material `menu`/`close`): `aria-expanded`, `aria-controls`, Escape closes and returns focus, panel uses `--z-dropdown`, links close the menu on activation.

**5.2 Hero:** `.badge` with a plain line ("No account needed"), `<h1>` at `clamp(--text-3xl, --text-5xl)` and 500 weight (max ~20 words, plain promise), `--text-secondary` subcopy at `--text-lg` (max 65ch), and a CTA row: `.btn--primary` "Get started" + `.btn` "How it works" (flex, gap `--spacing-gap`, wrapping to full-width column below 640px). Optional plain photograph or solid `--color-surface-strong` block with `--plain-rule` border and real alt text — no gradients or illustration.

**5.3 Features (3 cards):** `<section id="features">` with plain `<h2>` and one muted intro line. `.features__grid`: flex, wrap, gap `--space-6`; three `.card`s (`flex: 1 1 280px`), each with a muted Material Symbol, `<h3>`, and a plain description. Card states per §2.2.

**5.4 How It Works (3 steps):** `<section id="how-it-works">`. `.steps` flex row (column on mobile), three `.step`s separated by `--plain-rule` (inline-start borders on desktop, top borders on mobile). Each step: a `01 / 02 / 03` numeral in `--font-mono` and `--text-secondary`, an `<h3>`, and a plain description.

**5.5 Testimonials:** Three `<figure class="card">` blocks in a flex-wrap grid: `<blockquote><p>` quote at `--text-lg`, `<figcaption>` attribution in `--text-sm`/`--text-secondary` ("— Dana, customer since 2021"). Generic first names only. No star ratings, no photos; an optional plain initials disc on `--color-surface-strong` is allowed.

**5.6 Pricing (3 tiers):** `<section id="pricing">` with plain `<h2>` and sub-line ("Plain prices. Cancel whenever."). Flex-wrap grid of three `.card--tier`s (documented `align-items: stretch` exception; inner flex column with `margin-top: auto` on the CTA for equal heights). Tiers named **Basic / Standard / Pro** with plain integer prices ($0 / $8 / $15 per month). The middle tier is `.card--featured`: `--generic-accent-line` top border + `.badge` "Most common" — no other highlight. Each tier: `<h3>`, price line, `<ul>` of plain features with Material `check` icons, and a CTA (featured: `.btn--primary`; others: `.btn`) linking to `#cta`.

**5.7 FAQ:** `<section id="faq">` with 4–6 **native** `<details class="faq__item">` (no JS accordion). Each `<summary>` wraps an `<h3>` question plus a Material `expand_more` icon that rotates 180° via `details[open]` with `var(--transition-fast)`. Items separated by `--plain-rule`; summary has comfortable padding, `cursor: pointer`, hover surface shift, and `:focus-visible` ring. Native keyboard/screen-reader behavior must remain intact.

**5.8 Final CTA:** `<section id="cta">`, centered. Plain `<h2>`, one muted line, then `<form class="input-group" novalidate>` (flex, gap `--spacing-gap`, column on mobile): visible `<label>`, `<input class="input" type="email" required>`, `.btn--primary` submit. Flow: on submit, prevent default → validate → **invalid:** `.input--invalid` + message ("Enter a valid email address.") in the `aria-live` error container, focus the input → **valid:** button enters `.is-loading` (spinner, dimensions fixed, double-clicks blocked), input disabled → after ~900ms: button `.is-success` ("Done" + `check_circle`), announce "You're on the list." via a polite live region, input read-only. Errors clear on the next keystroke.

**5.9 Footer:** `<footer class="footer">` on `--bg-primary` with a `--plain-rule` top border. Flex-wrap columns (column on mobile): wordmark + one plain line ("Made to be used, not admired."); secondary links (About, Help, Privacy, Terms, Status, Contact) as a `<ul>` of `--text-secondary` anchors with underline on hover/focus; small print "© 2025 [Product]. All rights reserved."

---

## 6. PRE-PUBLISH VALIDATION CHECKLIST

The source specification does not declare color modes — therefore, **before publishing, validate every section in both light and dark mode**: backgrounds, text, muted text, borders, shadows, focus rings, primary-button pairing, badges, inputs, and footer. Additionally pass: (a) a keyboard-only run (skip link, nav toggle, FAQ, form, theme toggle); (b) a 320px-viewport run with zero horizontal scroll; (c) a `prefers-reduced-motion` run; (d) zero inline styles, a single deferred script, no console errors, valid HTML; (e) all copy real, plain English — no lorem ipsum, no emoji.
