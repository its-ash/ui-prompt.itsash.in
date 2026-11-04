# CODING AGENT PROMPT — "OLLAMA PURE GRAYSCALE" LANDING PAGE

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready, single-page landing page on the first attempt. Output the full, finished code in a single response — no questions, no partial deliverables, no TODOs.

**Project Brief:**
- **Theme:** "Ollama Pure Grayscale" — Radical Minimalism, Pure Grayscale, Pill Geometry, Zero Shadows, rounded display typography, developer-CLI monochrome aesthetic (2024–2026 Radical CLI Minimalism era).
- **Sections, in DOM order:** sticky Header (supporting chrome), Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
- **Copy:** ALL user-facing copy must be written in **English**. Write real, concise, developer-focused copy about running large language models locally (privacy, one-command simplicity, open-source models). Lorem ipsum is prohibited.
- **Design philosophy:** Extreme restraint — each section presents exactly one clear idea. Depth is created **only** through background-color shifts and 1px borders. Zero chromatic color anywhere.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is **forbidden** in the HTML.
- All design properties, layout rules, and states are targeted via class or ID selectors only.
- HTML must remain clean, semantic (header, nav, main, section, footer), and agnostic of visual styling — changing the look must only require editing the CSS file.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Store every visual token in `:root`, mapped to this grayscale palette (translated from source): Black `#000000`, White `#ffffff`, Light Gray `#e5e5e5`, Snow `#fafafa`, Almost Black `#262626`, Stone `#737373`, Silver `#a3a3a3`, Dark `#090909`.

*Light mode (default, `:root`):*
- `--primary: #000000` · `--secondary: #262626`
- `--bg-primary: #fafafa` (Snow — page canvas; per the no-pure-white-background rule, `#ffffff` is reserved for card surfaces only, never the page background)
- `--bg-secondary: #ffffff` (cards/surfaces) · `--bg-inverse: #090909` (terminal, inverted bands)
- `--text-primary: #000000` · `--text-secondary: #737373` (Stone — passes WCAG AA on Snow/White) · `--text-inverse: #fafafa`
- `--text-success: #000000` · `--text-error: #000000` · `--border-default: #e5e5e5` · `--border-strong: #000000` · `--border-success: #000000` · `--border-error: #000000`
- `--radius-sm: 12px` · `--radius-md: 12px` · `--radius-lg: 12px` · `--radius-pill: 9999px`
- `--shadow-sm: none` · `--shadow-md: none` (declared to satisfy the token contract, but see the zero-shadow exception in 1.2.1)
- `--spacing-gap: 1.5rem` · `--transition-fast: 150ms` · `--transition-normal: 250ms` · `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown: 100` · `--z-modal: 200` · `--z-toast: 300`
- `--font-base: 'SF Pro Rounded', 'Nunito', system-ui, sans-serif` · `--font-mono: 'JetBrains Mono', monospace`

**1.2.1 Zero-Shadow Exception (mandatory):** The theme forbids shadows on any element. `--shadow-sm` and `--shadow-md` must be declared but set to `none`, and **`box-shadow` is prohibited in every context** — including hover states and focus rings. Focus visibility must use `outline`; hover depth must use background/border color shifts only.

**1.2.2 Grayscale State Exception (mandatory):** Success and error tokens exist but hold grayscale values. Because hue is forbidden, every success/error/invalid state **must** be communicated with a Google Material Symbol (check / error / close) plus a text label — never by color alone. Invalid inputs use a `2px` border (`--border-error`) vs. the default `1px`, plus icon plus message.

**1.2.3 Binary Radius System:** Only two radius values may appear anywhere in the deliverable: `12px` for containers (cards, terminal, modal, FAQ items) and `9999px` for **everything interactive** (buttons, inputs, tags, badges, avatars, toggles, pills). No other radius value is permitted.

**1.2.4 Contrast Pairing:** Every light background token pairs with a dark text token and vice versa, in both themes. Verify these exact pairs: `#000000` on `#fafafa`/`#ffffff`; `#737373` on `#fafafa`/`#ffffff`; `#fafafa` on `#090909`; `#fefefe` on `#090909`; `#a3a3a3` on `#090909`/`#262626`. All body text must meet WCAG AA (4.5:1) in both modes.

**1.3 Mandatory Dark Mode Support**
- **Exception clause:** The source style spec marks dark mode as "not recommended" — dark mode is nonetheless **mandatory** and must ship fully functional; light mode is the default presentation.
- Define dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class: `--bg-primary: #090909`, `--bg-secondary: #262626`, `--bg-inverse: #fafafa`, `--text-primary: #fefefe`, `--text-secondary: #a3a3a3`, `--border-default: #262626`, `--border-strong: #fefefe`, `--primary: #fefefe` (primary button inverts to white fill with `#090909` text), `--secondary: #e5e5e5`.
- Inverted surfaces flip fully: the Final CTA band and the featured pricing card become light (`#fafafa`/`#ffffff` fill, black text) in dark mode. The terminal stays dark in both modes (`#262626` bg, `#737373` border in dark).
- **Persistence:** Store the user's choice in `localStorage`; fall back to `prefers-color-scheme` on first visit. Provide a visible pill-shaped toggle in the header using Material Symbols (`dark_mode`/`light_mode`) with correct `aria-pressed` and `aria-label` state. Theme switching must require zero HTML restructuring.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless there is an explicitly justified exception (the only permitted exception: multi-line text stacks inside cards may use `align-items: flex-start`).
- Mobile-first: all multi-column rows (features, steps, pricing, testimonials) collapse to a single column on small viewports. No horizontal scrolling at any breakpoint. Use fluid type via `clamp()` (headlines: `clamp(2.25rem, 5vw, 3rem)`).

**1.5 Framework Default & Tailwind CSS Integration**
- Use clean custom CSS driven by Tailwind's `@layer` / `@apply` structure (tokens → base → components → utilities) in `style.css`. Do **not** load the Tailwind CDN script (it would violate the single-script rule in Section 4).
- All utilities must map back to CSS variables or generic reusable classes: `.btn`, `.card`, `.input-group`.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- **Exception clause:** SF Pro Rounded is not available on Google Fonts. Load **Nunito** (weights 400;500;700 — its rounded terminals approximate SF Pro Rounded) via Google Fonts `<link>`, and keep `'SF Pro Rounded'` first in the `--font-base` stack so Apple users get it natively. Load **JetBrains Mono** (400;500) for terminal/code copy.
- Headlines: 48px (clamped), `font-weight: 500`, `--font-base`. Body: `font-weight: 400`, comfortable line-height.
- **Icons:** Google Material Symbols (Rounded variable font) only. Inline SVGs and local icon files are **explicitly forbidden** — including the Ollama llama mark; use a lowercase text wordmark instead.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component (`.btn` + BEM modifiers)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` pill radius (`--radius-pill`), min touch target 44×44px, `font-weight: 500`, `transition: var(--transition-fast)`.
- **Variants:** `.btn--primary` (fill `--primary`, inverse text; hover shifts fill to `#262626` light / `#e5e5e5` dark); `.btn--secondary` (fill `--bg-secondary`, 1px `--border-default`, primary text; hover darkens border to `--border-strong` and shifts bg to `#fafafa`); `.btn--ghost` (transparent, borderless; hover adds a `#e5e5e5`/`#262626` background shift).
- **Hover:** color/border shift only + `cursor: pointer`. No shadows, no elevation.
- **Focus:** `:focus-visible` renders a `2px solid var(--border-strong)` outline with `2px` offset — never `box-shadow`.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** disables interaction (prevent double-clicks), swaps the label for a CSS border-rotation spinner in grayscale or an animated Material Symbol, preserves exact button dimensions, sets `aria-busy="true"`.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error:** temporary state swapping label to a check/error Material Symbol + text ("Done" / "Failed"), driven by `--text-success`/`--text-error`, announced via `aria-live`.
- **Danger (`.btn--danger`):** solid `#000000` fill with white text, a trash Material Symbol, and an explicit text label ("Delete") in light mode; inverts to solid `#fefefe` fill with black text in dark mode. Must be visually distinct in both themes.

**2.2 Card Component (`.card`)**
- **Default:** `--bg-secondary` fill, `1px solid var(--border-default)`, `--radius-md` (12px), generous padding, flexbox interior. No shadow.
- **Hover (interactive cards only):** border darkens toward `--border-strong` and background shifts to `#fafafa` (light) / border to `#737373` (dark). No `translateY`, no shadow.
- **Focus-within:** border becomes `--border-strong` when a child link/button receives focus.
- **Loading (skeleton):** CSS shimmer sweeping between `#e5e5e5` and `#fafafa` (inverted in dark), fixed heights to prevent layout jumps, disabled under `prefers-reduced-motion`.
- **Empty state:** centered Material Symbol + one line of guidance text in `--text-secondary`.

**2.3 Form & Input (`.input-group`)**
- Flex column wrapping: a `<label>`, a pill input (`--radius-pill`, 1px `--border-default`, min-height 44px, `--bg-secondary` fill), and a dedicated error-feedback container.
- **States:** empty; focused (2px `--border-strong` outline ring); filled; valid (check Material Symbol + `--border-success`); invalid (2px `--border-error`, error Material Symbol, message text in a container with `aria-live="polite"`); disabled (opacity 0.5, `cursor: not-allowed`); read-only (flat bg `#fafafa`, no ring).
- The Final CTA section must contain a working email-capture form exercising this full state matrix: validate on submit, show loading on the submit button, then a success state (check icon + "You're on the list") — all in grayscale, all announced via `aria-live`.

**2.4 Modal / Popup**
- The Hero's "Download" button opens a modal: centered flex overlay (`align-items: center`), backdrop `rgba(0,0,0,0.4)`, panel with 12px radius, 1px border, `--bg-secondary` fill, `--z-modal` stacking.
- **States:** opening (fade + slight scale via CSS transition), open, loading (skeleton rows while "fetching" platforms), success/error (icon + text), closing (reverse animation). All animations respect `prefers-reduced-motion`.
- **UX:** Material Symbol close button (`close`), `Esc` and overlay-click close, keyboard focus trap, focus restored to the trigger on close, `role="dialog"` + `aria-modal="true"` + labelled by its heading.

**2.5 Page Section Specifications**
- **Header (supporting chrome):** sticky, `--bg-primary` fill, 1px bottom border `--border-default`, flex row (`align-items: center`): lowercase text wordmark (weight 500), anchor nav (Features, How It Works, Pricing, FAQ), theme toggle, compact `.btn--primary` CTA. Below the mobile breakpoint, hide the nav links (keep wordmark + toggle + CTA) — no hamburger needed. Anchored sections use `scroll-margin-top`; enable CSS smooth scrolling (disabled under reduced motion).
- **Hero:** one clear idea — "Run large language models locally." Centered flex column: pill eyebrow tag ("Open source · Local-first", 1px border), 48px weight-500 headline, one-line subhead in `--text-secondary` (max ~52ch), two pill CTAs (`.btn--primary` "Download" opening the modal; `.btn--secondary` "Read the docs"). Below: a terminal card — 12px radius, `#090909` bg, 1px `#262626` border, JetBrains Mono, showing `$ ollama run llama3` with 2–3 output lines in `#a3a3a3` and a CSS-animated blinking cursor (reduced-motion safe).
- **Features:** section heading + 3-card grid (3 columns desktop → 1 column mobile). Each card: a 44px pill badge containing a Material Symbol (`shield`, `terminal`, `folder` — privacy, one-command simplicity, open model library), a weight-500 title, one sentence in `--text-secondary`.
- **How It Works:** 3 steps in a 3-column → 1-column grid. Each step: a pill number badge (1/2/3, black fill, white numeral; inverted in dark), a short title, one line of copy (e.g., install → pull → run).
- **Testimonials:** 3 quote cards (3 → 1 columns). Each: a pill-circle initials avatar (black fill, white initials; inverted in dark), a short quote, name in weight 500, role in `--text-secondary`.
- **Pricing:** 3 tier cards (3 → 1 columns). The middle tier is highlighted by **inversion, not shadow**: `#000000` fill with `#fafafa` text in light mode (flips to `#ffffff` fill with `#090909` text in dark mode), plus a pill "Most popular" tag. Each tier: name, large weight-500 price, a short feature list with `check` Material Symbols, and a pill CTA (`.btn--primary`-style inverted on the featured tier, `.btn--secondary` on the others).
- **FAQ:** 4–6 items in a centered max-width (~720px) column. Each item: 12px container, 1px border, a `<button>` header with `aria-expanded` + `aria-controls`, a rotating `expand_more` Material Symbol (180° on open), and an animated panel. Fully keyboard operable; no mouse-only interactions.
- **Final CTA:** full-width inverted band (`--bg-inverse` fill, inverse text, generous padding): one headline, one line of copy, and the email-capture `.input-group` (pill input + pill submit) specified in 2.3.
- **Footer:** 1px top border, flex/grid layout with 2–3 columns of secondary links (Product, Resources, Company — real link labels, `--text-secondary` default, `--text-primary` on hover), plus a copyright line. Restrained; no new components.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid sizing, no horizontal overflow at any width from 320px up.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; every animation honors `prefers-reduced-motion` (reduce to instant/no-motion).
- **Accessibility (a11y):** semantic HTML5 throughout; each `<section>` has an `id` and is `aria-labelledby` its heading; a visually hidden "Skip to content" link that appears on focus; logical DOM/focus order; full keyboard operability for nav, modal, accordion, toggle, and forms; `aria-live` regions for all dynamic feedback (form errors, loading, success). Never rely on color alone to communicate any state — critical in a zero-chromatic theme.
- **Mandatory visual feedback:** every click, hover, focus, and submission triggers a visible state change (bg shift, border shift, icon swap, or transform).
- **Destructive actions:** `.btn--danger` must be visually distinct in both light and dark themes (see 2.1).

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** three separate files — `index.html`, `style.css`, `script.js`. The HTML contains exactly one `<script>` tag: a deferred reference to `script.js`. No inline scripts, no inline styles, no inline SVGs.
- **Head:** Google Fonts `<link>` tags for Nunito, JetBrains Mono, and Material Symbols (Rounded); proper `<title>` and meta description.
- **Naming convention:** BEM only (`block__element--modifier`) across the entire deliverable — never mix conventions.
- **JS scope:** vanilla, minimal — theme toggle with `localStorage` + `prefers-color-scheme` fallback, FAQ accordion, modal open/close with focus trap, email form validation/loading/success. No libraries, no console errors.
- **Copy:** real, on-theme English copy everywhere; lorem ipsum and stub labels are prohibited.
- **Completeness:** ship the entire landing page, fully functional in both light and dark mode, in this single response.
