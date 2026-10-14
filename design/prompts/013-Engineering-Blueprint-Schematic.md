# LANDING PAGE BUILD SPEC — "ENGINEERING BLUEPRINT SCHEMATIC"

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete, production-ready Landing Page on the first attempt — one pass, no follow-up questions.

**Project Brief:**
- **Theme:** Engineering Blueprint Schematic — Technical, Precision, Engineered. Modern Industrial era. Keywords: blueprint, schematic, engineering, technical, grid, angular, wireframe, cyan, dark blue.
- **Output Category:** Data & Engineering — the page promotes an engineering-grade data platform (e.g., precision data pipelines, telemetry, observability). Write all user-facing copy in English, grounded in this domain, in a technical tone.
- **Sections (in this order):** Sticky Navigation, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
- **Visual Language:** exploded-view wireframes, angular leader lines with annotation labels, drafting grid background, technical iconography, neon-like line visibility. The page must read as an engineer's drafting sheet: dark blue paper, cyan schematic linework, orange annotation accents, monospaced type.

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden. Target everything via class/ID selectors.
- HTML stays semantic and style-agnostic: changing the theme must never require markup edits.

**1.2 CSS Variables & Theme Tokens**
- Define all tokens in `:root` (dark = default). No hardcoded hex values anywhere outside the token definitions — always `var(--...)`:

```css
:root {
  --bg-primary: #0b1623;      /* dark blue drafting paper */
  --bg-secondary: #0f1e2e;   /* elevated panel surface */
  --text-primary: #f0f0f0;
  --text-secondary: #8b9bb4; /* dim annotation text */
  --primary: #ff9f30;         /* orange accent: CTAs, highlights, annotations */
  --primary-contrast: #0b1623;
  --secondary: #4dd0e1;       /* schematic cyan: wireframes, leader lines, focus rings */
  --grid-line: #1c2b3a;
  --grid-size: 20px;
  --text-success: #00ff9d;
  --text-warning: #ff9f30;
  --text-error: #ff5252;      /* derived — source palette omits an error hue */
  --border-default: #1c2b3a;
  --border-success: #00ff9d;
  --border-error: #ff5252;
  --radius-sm: 0; --radius-md: 2px; --radius-lg: 4px; /* angular theme: sharp corners */
  --shadow-sm: 0 2px 8px rgba(0,0,0,.35);
  --shadow-md: 0 8px 24px rgba(0,0,0,.45);
  --glow-cyan: 0 0 10px rgba(77,208,225,.28); /* neon line visibility */
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms; --transition-normal: 250ms;
  --ease-standard: cubic-bezier(.4, 0, .2, 1);
  --z-dropdown: 1000; --z-modal: 2000; --z-toast: 3000;
  --font-base: 'JetBrains Mono', monospace;
  --font-body: 'Inter', sans-serif;
}
```

- **Drafting grid background** (applied to `body` and reinforced in Hero/Final CTA panels via a `.blueprint-grid` class):

```css
background-color: var(--bg-primary);
background-image: linear-gradient(var(--grid-line) 1px, transparent 1px),
                  linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
background-size: var(--grid-size) var(--grid-size);
```

- **Contrast pairing (every theme):** dark backgrounds pair with light text; the orange fill pairs with `--primary-contrast` text. Light mode never uses pure `#ffffff` — use `#fefefe`.
- **Light variant ("Drafting Paper") token overrides:** `--bg-primary: #fefefe; --bg-secondary: #eef2f7; --text-primary: #0b1623; --text-secondary: #46586e; --grid-line: #d8e1ea; --primary: #b45309; --primary-contrast: #fefefe; --secondary: #0e7490; --text-success: #00875a; --text-error: #d32f2f;` — accent hues are darkened specifically to preserve WCAG AA contrast on light paper.

**1.3 Mandatory Dark Mode Support**
- Dark mode is fully defined via a `.dark` class / `[data-theme]` attribute on `<html>`; all token swaps happen in CSS with zero HTML restructuring.
- Provide a visible theme toggle in the header (Material Symbol `dark_mode`/`light_mode`) with correct `aria-pressed` and `aria-label` state. Persist the choice in `localStorage`; on first visit with no stored value, default to dark mode, honoring `prefers-color-scheme: light` by loading the drafting-paper variant.
- **Exception (source spec):** the Engineering Blueprint Schematic specification designates a dark-first aesthetic ("Light: No / Dark: Full") — dark is the default and dominant experience, and the light variant must remain a blueprint drafting-paper interpretation, never a generic light theme.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout structure with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified.
- Mobile-first: multi-column rows collapse to `flex-direction: column` below ~768px. No horizontal scrolling at any viewport width. Center content in a max-width container (~72rem).

**1.5 Styling Approach**
- Use clean custom CSS in `style.css`, optionally organized with `@layer` (tokens, base, components, utilities). Reusable component classes — `.btn`, `.card`, `.input-group`, `.blueprint-grid`, `.leader-line`, `.corner-brackets` — must map back to the CSS variables. Do not mix a utility framework with the BEM naming mandated in Section 4.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load **JetBrains Mono** (400/500/700 — identity font for headings, nav, buttons, labels, annotations) and **Inter** (400/500 — long-form body copy in Testimonials/FAQ) via Google Fonts `<link>` tags, bound to `--font-base` / `--font-body`.
- Icons: **Google Material Symbols (Outlined)** only — e.g., `schema`, `precision_manufacturing`, `monitoring`, `task_alt`, `terminal`, `hub`, `insights`, `speed`, `expand_more`, `close`. Inline SVGs and local icon files are forbidden.

**1.7 Blueprint Visual Effects (CSS-only)**
- **Exploded-view wireframes:** compose from bordered `div`s (1px solid `var(--secondary)`), dashed connector lines, and `transform: translate/rotate` offsets — no images, no SVG.
- **Angular leader lines:** pseudo-element elbows (`border-left` + `border-bottom`) terminating in uppercase, letter-spaced annotation labels ("FIG. 01", "SECTION A-A", "REV 2.4") in `--text-secondary`.
- **Corner brackets:** `::before`/`::after` L-shaped borders in `--primary` or `--secondary` on cards and panels.
- **Neon visibility:** `box-shadow: var(--glow-cyan)` on schematic lines and hover borders. All glow/pulse/float animations must be gated behind `@media (prefers-reduced-motion: no-preference)`.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button**
- `.btn` base: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target, uppercase JetBrains Mono label, sharp corners.
- Variants: `.btn--primary` (fill `var(--primary)`, text `var(--primary-contrast)`), `.btn--secondary` (transparent, 1px cyan border, cyan text), `.btn--ghost`, `.btn--danger` (visually distinct in both themes).
- **Hover:** brightness/shadow shift, `cursor: pointer`, subtle glow. **Focus:** distinct ring via `outline: 2px solid var(--secondary); outline-offset: 2px;`. **Active:** `transform: scale(0.97)`. **Loading (`.is-loading`):** CSS spinner or rotating Material Symbol that preserves button dimensions, disables interaction, prevents double-clicks, sets `aria-busy="true"`. **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`. **Success/Error:** temporary state classes tinting border/text with `--text-success` / `--text-error`.

**2.2 Card**
- **Default:** flexible flex column, `var(--bg-secondary)` surface, 1px `var(--border-default)`, corner brackets, sharp corners. **Hover:** `translateY(-2px)`, border shifts to `var(--secondary)`, `--shadow-md` + glow. **Focus-within:** border shifts to `var(--primary)` when a child link/button receives focus. **Loading:** shimmer skeleton animation defined in CSS to prevent layout jumps. **Empty state:** Material Symbol + clear guidance text fallback.

**2.3 Form & Input**
- `.input-group`: flex container wrapping `<label>`, `<input>`, and a dedicated error feedback element (`aria-live="polite"`).
- States: empty, focused (cyan ring), filled, valid (success border + check icon), invalid (error border + icon + message, `aria-invalid`, `aria-describedby`), disabled, read-only.

**2.4 Modal / Popup**
- "Request Demo" dialog: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`; dark backdrop overlay; centered flex container (`align-items: center`); Opening/Open/Loading/Success/Error/Closing states animated via CSS transitions; closes via `Esc`, overlay click, and a Material Symbol `close` button; keyboard focus is trapped inside and returns to the trigger on close.

**2.5 Landing Page Section Blueprints**
- **Sticky Navigation:** flex, `align-items: center`, `justify-content: space-between`; wordmark + technical Material Symbol; anchor links (Features, How It Works, Pricing, FAQ) with cyan underline-offset hover/focus states; theme toggle (1.3); "Request Demo" `.btn--primary` opening the modal. Below 768px, collapses to a hamburger (`aria-expanded`) toggling a `--z-dropdown` flex-column panel.
- **Hero:** two-column flex (copy + schematic), column on mobile. Eyebrow annotation with leader line ("DWG NO. ENG-2025 · REV 2.4 · SCALE 1:1"); H1 + subheadline in the data/engineering voice; primary CTA "Start Building" + secondary outlined "View Documentation"; CSS exploded-view wireframe with dashed leader lines and a "FIG. 01 — PIPELINE SCHEMATIC" label; status strip with pulsing success dot + "ALL SYSTEMS NOMINAL".
- **Features (3 cards):** section header styled as a drawing title block ("FIG. 02 — SYSTEM CAPABILITIES"); three `.card` components in a flex row → column; each with a framed Material Symbol plate, index label (SYS-01…03), title, description, and a "View spec →" link (enables focus-within). Suggested topics: precision data pipelines, real-time telemetry, automated quality gates.
- **How It Works (3 steps):** "ASSEMBLY INSTRUCTIONS" framing; three steps with oversized outlined numerals 01/02/03 joined by a dashed cyan connector (horizontal on desktop, vertical on mobile, pure CSS); step title + description each.
- **Testimonials:** three cards styled as field/inspection reports: quote, divider, author (name, role, company), and a metadata row with a success `task_alt` icon ("VERIFIED · 99.99% UPTIME").
- **Pricing (3 tiers):** "PROCUREMENT SPECIFICATIONS"; Draft / Engineer / Enterprise; the middle tier is highlighted (orange border, "RECOMMENDED SPEC" label, elevated shadow); feature lists with success check icons; `.btn--primary` on the recommended tier, `.btn--secondary` elsewhere; the Enterprise CTA opens the modal. Optional monthly/annual billing toggle (`aria-pressed`, price changes announced via `aria-live`).
- **FAQ:** native `<details>`/`<summary>` accordion (keyboard-accessible without JS); summary shows the question plus an `expand_more` icon rotating 180° when open; smooth CSS open/close animation respecting reduced motion; 5–6 Q&As.
- **Final CTA:** full-width panel with intensified grid background + corner brackets; H2, short copy, and an email-capture `.input-group` + `.btn--primary` demonstrating the full state flow: focus → invalid (error message in `aria-live`) → valid (success border) → loading (spinner, disabled) → success (button success state + confirmation message).
- **Footer:** flex/grid columns — brand + tagline, secondary link groups (Product, Company, Resources), social icons (Material Symbols) with hover/focus states; legal row with copyright and drafting annotations ("SHEET 1 OF 1 · SCALE 1:1").

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` typography, breakpoints without horizontal overflow.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; `prefers-reduced-motion` disables float/pulse/shimmer/scroll effects while preserving opacity-only feedback.
- **Accessibility (a11y):** WCAG AA contrast in both themes; never rely on color alone — pair icons and text with every state; semantic landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`); skip-to-content link; logical DOM/focus order; full keyboard operability; `aria-live` regions for form errors, loading states, and dynamic feedback.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** any `.btn--danger` / delete action must be visually distinct in both light and dark themes.

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, `script.js`. No inline styles, no inline scripts beyond a single deferred entry point (`<script src="script.js" defer></script>`), no inline SVGs. Include `lang="en"`, viewport meta, title, and meta description.
- **Naming:** BEM exclusively (`.hero__title`, `.feature-card__icon`, `.btn--primary`, …). Never mix conventions.
- **`script.js` scope:** theme toggle + `localStorage` persistence + `prefers-color-scheme` fallback; mobile nav toggle; modal open/close + focus trap + `Esc`; form validation + simulated async submit (loading → success); optional pricing billing toggle; reduced-motion-aware smooth anchor scrolling. No other behavior.
- **Copy:** write real, final English copy for a data & engineering platform — no lorem ipsum. All headings, labels, and microcopy must be on-theme and technical in tone.
- Generate the complete code in a single pass; every section listed above must be present, fully styled, and functional in both themes.
