# Landing Page Build Specification — "Light Academia" Theme

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready **Landing Page** on the first attempt.

**Theme:** Light Academia (2020–present) — warm creams, beige, soft gold, and sage; sunlit libraries, linen, pastoral scholarship; serif typography; gentle, airy, hopeful, romantic learning. The provided "Light Academia — design tokens" CSS block (reference specification: `references/00-flagship-implementation-specs/light-academia.md`) is the **canonical token and base-component source** — adopt it and extend it as mandated below.

**Required sections:** Hero; Features (3 cards); How It Works (3 steps); Testimonials; Pricing (3 tiers); FAQ; Final CTA; Footer with secondary links.

**Mode validation:** The source style spec does not declare light/dark modes and requires validation in both light and dark before publishing — therefore a full Dark Mode is **mandatory** (see 1.3).

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
* Target every element exclusively via class or ID selectors.
* Keep HTML semantic and styling-agnostic — changing the theme must never require markup edits.

**1.2 CSS Variables & Theme Tokens**
* Adopt the provided token block verbatim as the foundation: `--color-bg: #f7f0e3`, `--color-surface: #fffdf7`, `--color-surface-strong: #efe4c9`, `--color-border: #d8c9a3`, `--color-text: #3b3226`, `--color-text-muted: #7a6d55`, `--color-primary: #a97142`, `--color-accent: #7c8b5f`, `--color-gold: #c9a24a`, plus the full radius, shadow, font, text-size, space, and ease scales, `--bg-image`, and `--gold-rule`.
* **Extend** the set with the mandatory semantic variables, themed to fit: `--primary` (→ `var(--color-primary)`), `--secondary` (→ `var(--color-accent)`), `--bg-primary` (→ `var(--color-bg)`), `--bg-secondary` (→ `var(--color-surface)`), `--text-primary` (→ `var(--color-text)`), `--text-secondary` (→ `var(--color-text-muted)`), `--text-success` (deep sage, e.g. `#5f7047`), `--text-error` (warm brick, e.g. `#a4543f`), `--border-default`, `--border-success`, `--border-error`, plus `--spacing-gap`, `--transition-fast` (150ms), `--transition-normal` (300ms), `--z-dropdown`, `--z-modal`, `--z-toast`.
* Contrast pairing is mandatory in every theme: light backgrounds pair with dark text tokens, dark backgrounds with light text tokens.
* Never use pure `#ffffff`; where a near-white is required, use `#fefefe`. The light background is the warm cream `#f7f0e3`.
* **Signature move (repeat consistently):** the sunlit radial gold glow (`--bg-image`) on the page background, and the thin gold hairline rule (`--gold-rule`) — under the nav, atop every `.card`, and beneath section headings.

**1.3 Mandatory Dark Mode Support**
* Dark Mode must always be defined. Design a "candlelit library" counterpart: deep espresso backgrounds (`--color-bg: #221c13`, `--color-surface: #2b2418`, `--color-surface-strong: #3b3120`), warm cream text (`--color-text: #f1e9d6`, `--color-text-muted: #b5a789`), lightened warm tan primary (`#c9925e`), lightened sage accent (`#a3b384`), softened gold (`#d4b56a`), dark borders (`#554732`), deeper shadows, and a dimmer radial glow. On dark surfaces, the filled primary button must invert to dark espresso text on the lightened tan to preserve contrast pairing.
* Implement the dark tokens twice: under `@media (prefers-color-scheme: dark)` and under a `.dark` class on `<html>`, so automatic and manual switching work with zero HTML restructuring.
* Provide a visible theme toggle in the nav (Google Material Symbols sun/moon icon) with correct `aria-pressed` and `aria-label` ("Switch to dark mode" / "Switch to light mode"). Persist the choice in `localStorage`; fall back to `prefers-color-scheme` on first visit. Apply the stored theme as early as possible in the deferred `script.js` to minimize flash.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build every layout structure with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
* Mobile-first: nav links, feature cards, pricing tiers, steps, and footer columns collapse from rows to columns on small viewports. No horizontal scrolling at any width from 320px up.

**1.5 Framework Default & CSS Integration**
* **Exception clause:** the source specification mandates a hand-written custom CSS token/component system; therefore build with clean custom CSS and do not introduce Tailwind or any utility framework. Never mix conventions.
* Organize `style.css` in clear layers: tokens → base/reset → components (`.nav`, `.btn`, `.card`, `.input`, `.badge`) → page sections → dark-mode overrides → motion preferences.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load Google Fonts via `<link>` with `preconnect`: **Lora** (body serif), **Playfair Display** (display serif), **Cormorant Garamond** (alternate serif), **Courier Prime** (mono). Bind them to `--font-sans`, `--font-display`, `--font-mono` exactly as tokenized.
* Icons come exclusively from **Google Material Symbols** (Outlined). Raw inline SVGs and local icon files are forbidden. All decorative flourish (gold rules, radial glow, quotation marks) must be pure CSS or Material Symbols glyphs.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
* Base `.btn` per the reference spec: flex layout, centered, `gap: 0.5rem`, minimum touch target 44×44px. Variants via BEM: `.btn--primary` (filled `--color-primary`, cream text), `.btn--gold` (gold border emphasis), `.btn--danger` (visually distinct in both themes).
* All states class-driven: **hover** (gold border + `--color-surface-strong` background, `cursor: pointer`); **focus** (`:focus-visible` — 2px `--color-primary` outline, 2px offset); **active/pressed** (`transform: scale(0.97)`); **loading** (CSS spinner — rotating Material Symbol or CSS ring — that never changes button dimensions; disables pointer events and prevents double submits); **disabled** (`opacity: 0.5`, greyscale, `cursor: not-allowed`); **success/error** temporary feedback colored by `--text-success` / `--text-error`.

**2.2 Card Component**
* Base `.card` per the reference spec: `--color-surface` background, 1px `--color-border`, `--radius-md`, `--shadow-sm`, generous padding, gold hairline `::before` top rule.
* Interactive cards (pricing tiers): hover elevation (`--shadow-md` + `translateY(-2px)`); `:focus-within` gold border when a child control receives focus.
* Define a skeleton state (`.card--skeleton`) with a CSS shimmer animation that preserves layout dimensions.
* Define an empty-state pattern (Material Symbol + guidance text) for any region that can render without content.

**2.3 Form & Input Component**
* Use `.input` per the reference spec (italic muted placeholder; gold focus ring via `color-mix` with an `rgba()` fallback).
* Account for every state: empty, focused, filled, valid (sage border + check Material Symbol), invalid (error border, `--text-error` message, error icon), disabled, read-only.
* Structure each field as a flex column: `<label>`, input, and a dedicated error container (`.form-field__error`) wired to an `aria-live="polite"` region.

**2.4 Modal / Popup Component**
* If any overlay is used (e.g., expanded pricing details), it must be: a centered flex container (`align-items: center`) over a dimmed backdrop at `--z-modal`; animated open/close purely with CSS transitions; closable via `Esc`, overlay click, and a Material Symbol close button with `aria-label`; keyboard focus trapped while open; styled loading and success/error states.
* The FAQ must NOT be a modal — implement it as an accessible accordion (see 5.7).

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid type via `clamp()` for hero/display sizes; no horizontal overflow from 320px up.
* **Smooth animations:** every state change transitions with `var(--transition-normal)` / `var(--ease-standard)`; fully respect `prefers-reduced-motion` (disable transforms, shimmer, and glow animation).
* **Accessibility:** WCAG AA contrast in both light and dark themes; never communicate state by color alone (pair icons/text with color); semantic HTML5 landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`); a skip-to-content link; logical DOM/focus order; full keyboard operability for nav, accordion, toggle, and forms; `aria-live` regions for form feedback and dynamic messages.
* **Mandatory visual feedback:** every hover, click, and submission produces a visible change (nav link gold underlines, button state shifts, accordion animation, form success/error messaging).
* **Destructive actions:** `.btn--danger` must remain distinct in both themes.
* **Technical notes:** the fixed `background-attachment` may relax to `scroll` on small viewports for performance; provide an `rgba()` fallback for the `color-mix()` focus ring.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **File structure:** separate `index.html`, `style.css`, `script.js`. The only script reference is one `<script src="script.js" defer></script>`; no inline script blocks, no inline styles.
* **Naming convention:** BEM throughout (`block__element--modifier`), matching the reference (`.btn--primary`, `.card`, `.nav`). Never mix conventions.
* **Copy:** write all user-facing copy in **English**, in the Light Academia voice — hopeful, romantic, scholarly (sunlit libraries, marginalia, pastoral learning). No lorem ipsum: author real headlines, body copy, testimonials, pricing features, and FAQ answers. Invent a coherent product concept that fits the mood (e.g., a reading-and-learning companion or digital study library) and keep every section on-message.
* **`script.js` scope:** theme toggle + `localStorage` persistence, mobile nav toggle, FAQ accordion, newsletter form validation with loading/success/error feedback, and smooth anchor scrolling that moves focus to the target heading. No external JS libraries or CDNs beyond Google Fonts/Material Symbols.

---

## 5. PAGE COMPOSITION & SECTION REQUIREMENTS

**5.1 Navigation (sticky `.nav`):** wordmark in Playfair Display; anchor links (Features, How It Works, Testimonials, Pricing, FAQ) with gold hover underlines and `:focus-visible` rings; theme toggle; primary CTA `.btn--primary`; gold hairline bottom rule via `.nav::after`. Collapses to a column/hamburger below ~768px with an `aria-expanded` control.

**5.2 Hero:** full-width, centered flex column over the sunlit radial glow; large Playfair Display headline (fluid `clamp()`), Lora supporting paragraph, one `.badge` (e.g., "Now enrolling — Autumn term"), and two CTAs (`.btn--primary` + ghost `.btn`). Airy vertical rhythm using `--space-24`.

**5.3 Features (3 cards):** flex row that wraps to a column on mobile; each `.card` holds a gold Material Symbol, serif card title, and Lora description.

**5.4 How It Works (3 steps):** three numbered steps with oversized gold serif numerals, separated by gold hairline rules; vertical stack on mobile.

**5.5 Testimonials:** three `.card` quotes — italic Lora quotations with a decorative gold quotation mark (CSS or Material Symbol), attribution in `--color-text-muted` (name + role).

**5.6 Pricing (3 tiers):** three `.card` tiers; the middle tier is featured (`--color-surface-strong` background, gold border, `.badge` "Most popular", slight elevation); each tier lists features with sage check Material Symbols and a CTA button; stacks to a single column on mobile.

**5.7 FAQ:** accessible accordion of 4–6 items; each trigger is a real `<button>` with `aria-expanded` + `aria-controls`, a Material Symbol chevron that rotates, and a CSS-animated panel; fully keyboard operable.

**5.8 Final CTA:** a full-bleed panel on `--color-surface-strong` with gold hairline rules, serif headline, and a newsletter form (`.input` + `.btn--primary`) demonstrating loading → success/error states with `aria-live` feedback.

**5.9 Footer:** gold hairline top rule; secondary link columns (Product, Company, Resources, Legal) in `--color-text-muted`; small print; all links keyboard-focusable with visible focus rings; theme-aware in both light and dark modes.
