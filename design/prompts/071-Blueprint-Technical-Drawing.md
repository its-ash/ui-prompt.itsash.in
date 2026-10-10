# BUILD PROMPT — Complete Landing Page: "Blueprint / Technical Drawing" Theme (Data & Engineering)

**Your Role:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete, production-quality landing page on the first attempt. You write all HTML, CSS, and JS yourself, in full, immediately. Where any habit or convenience conflicts with a rule below, the rule wins.

**Project Brief:**
- **Product (invented, realistic):** "DraftLine" — a data-pipeline design, versioning, and observability platform for data engineering teams. Output category: Data & Engineering.
- **Copy Language:** All user-facing copy must be written in **English**. Write realistic, specific product copy — real feature names, plausible metrics, real-sounding testimonials and FAQs. Lorem ipsum is forbidden anywhere in the deliverable.
- **Theme:** Blueprint / Technical Drawing — drafting heritage. White line-work on a cyan/blue ground, grid paper, dimension lines, callouts, monospace annotations. Precise, technical, honest. Straight edges (0px radius), hairline dashed "dimension" borders, and uppercase monospace callout labels repeated across nav, cards, and inputs.
- **Required sections:** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML. No `<style>` blocks in the HTML.
- **Class/ID Selectors Only:** All design properties, layout rules, and states are targeted via class or ID selectors in `style.css`.
- **Minimal HTML Modifications:** HTML must remain clean, semantic, and style-agnostic — re-theming the site requires editing only `style.css`, never the markup.
- **CSS-Only Decoration:** All blueprint flourishes (corner crosshair ticks, dimension-line arrowheads, connector lines, grid overlays) must be built with pseudo-elements and CSS backgrounds — never extra DOM nodes, never inline SVG.

### 1.2 CSS Variables & Theme Tokens
Store all visual tokens in `:root` (light theme) with dark-theme overrides (see 1.3). Use these **canonical names and values**:

**Light theme — "Drafting Paper" (default, `:root`):**
- `--bg-primary: #f2f7fc` (cool drafting paper; never `#ffffff`), `--bg-secondary: #e6eff9`, `--bg-elevated: #dcebf8`
- `--primary: #0d3b66`, `--secondary: #8a5a00` (accessible amber ink), `--accent: #ffb703` (decorative line-work only, never for text on light surfaces)
- `--text-primary: #0d3b66`, `--text-secondary: #33597e`, `--text-success: #0e7a3f`, `--text-error: #b3261e`
- `--border-default: #135a96`, `--border-success: #0e7a3f`, `--border-error: #b3261e`
- `--grid-line: rgba(13,59,102,0.10)`, `--card-bg: rgba(254,254,254,0.7)`
- Shadows: `--shadow-sm: 0 1px 0 rgba(13,59,102,0.18)`, `--shadow-md: 0 2px 8px rgba(13,59,102,0.16)`, `--shadow-lg: 0 6px 18px rgba(13,59,102,0.20)`

**Dark theme — "Cyanotype" (`.dark` class + `prefers-color-scheme: dark`):**
- `--bg-primary: #0d3b66`, `--bg-secondary: #0f4a7d`, `--bg-elevated: #135a96`
- `--primary: #ffffff`, `--secondary: #ffb703`, `--accent: #ffb703`
- `--text-primary: #eaf4ff`, `--text-secondary: #9fc4e6`, `--text-success: #7be3a2`, `--text-error: #ff8f8f`
- `--border-default: #bcd9f0`, `--border-success: #7be3a2`, `--border-error: #ff8f8f`
- `--grid-line: rgba(234,244,255,0.14)`, `--card-bg: rgba(255,255,255,0.03)`
- Shadows: `--shadow-sm: 0 1px 0 rgba(255,255,255,0.15)`, `--shadow-md: 0 2px 8px rgba(0,0,0,0.35)`, `--shadow-lg: 0 6px 18px rgba(0,0,0,0.4)`

**Shared tokens (both themes):**
- `--radius-sm: 0px; --radius-md: 0px; --radius-lg: 0px; --radius-pill: 2px` (drafting is all straight edges)
- `--spacing-gap: 1rem`, plus the full reference scale `--space-1` (4px) through `--space-24` (96px)
- `--transition-fast: 120ms; --transition-normal: 200ms; --ease-standard: linear` (per the theme's drafting aesthetic)
- `--z-dropdown: 100; --z-modal: 200; --z-toast: 300`
- Type scale: `--text-xs` (0.75rem) through `--text-5xl` (4rem) exactly as in the reference token block
- `--dim-line: 1px dashed var(--text-secondary)` and `--bg-grid` (two `linear-gradient` layers over `--grid-line`), applied to `body` as grid paper at `background-size: 24px 24px`; an optional stronger major grid line every 120px is encouraged
- **Contrast Pairing:** Every light surface token pairs with dark ink tokens and every dark surface with light ink tokens — verify WCAG AA in both themes. Where a near-white surface is needed, use `#fefefe`, never `#ffffff`.

### 1.3 Mandatory Dual-Mode Theming (Light + Dark)
The source specification does not declare modes; you must implement and validate **both** before publishing:
- **Implementation:** Light tokens in `:root`; dark overrides defined in **both** `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>` (the class always wins). Provide a `.light` class that forces light mode.
- **Theme Switching:** Background, text, border, grid, and shadow variables must flip seamlessly with zero HTML restructuring. Both modes must preserve the blueprint language: light = blue ink line-work on drafting paper; dark = white line-work on cyanotype blue.
- **Persistence:** Store the user's choice in `localStorage` (key `theme`: `"light"` | `"dark"`); on first visit, fall back to `prefers-color-scheme`. All logic lives in the single deferred `script.js` — no inline scripts.
- **Toggle Control:** A visible button in the nav using Material Symbols (`light_mode` / `dark_mode`) with correct `aria-pressed` state and a dynamic `aria-label` ("Switch to dark theme" / "Switch to light theme").

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layout structures with **Flexbox**. Every flex container **must default to `align-items: center`** unless an exception is explicitly justified in a CSS comment.
- **Mobile-Friendly First:** Single-column layouts by default; multi-column arrangements at `≥768px` and `≥1024px` via flex-wrap and media queries. No horizontal scrolling at any viewport width from 320px up.
- Card grids (Features, Testimonials, Pricing): flex with wrap — 1 column mobile → 3 columns desktop.

### 1.5 CSS Approach
- Use **clean custom CSS** in `style.css` (no Tailwind build step, no CSS frameworks, no CDN stylesheets). Organize the file: tokens → base → components → sections → utilities.
- Port the reference base classes (`.nav`, `.btn`, `.btn--primary`, `.card`, `.input`, `.badge`) to the canonical token names above, then extend them with BEM elements/modifiers. No one-off styles.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** Load **Archivo** (400/500/600/700/800) and **IBM Plex Mono** (400/500/600) from Google Fonts via `<link>` with `preconnect`. Bind `--font-base`/`--font-display` to Archivo and `--font-mono` to IBM Plex Mono.
- **Icons:** Use **Google Material Symbols (Outlined)** only. Raw inline SVGs, local icon files, and emoji-as-icons are forbidden.
- **Type roles:** Headings = Archivo, bold, tight tracking (H1 via `clamp()` from `--text-3xl` mobile to `--text-5xl` desktop). Labels, callouts, annotations, buttons, nav wordmark, and card titles = IBM Plex Mono, uppercase, letter-spacing 0.06–0.08em. Body = Archivo at `--text-base`, line-height 1.6.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component (`.btn`, `.btn--primary`, `.btn--danger`)
Style every state via CSS classes:
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem`; mono font, uppercase; minimum touch target 44×44px; 1px solid border; `border-radius: var(--radius-pill)`; transparent background; `transition: background-color var(--transition-fast) var(--ease-standard), color var(--transition-fast) var(--ease-standard)`.
- **`.btn--primary`:** Filled with `var(--primary)`, text in `var(--bg-primary)` — white-on-blue in dark mode, blue-on-paper in light mode.
- **Hover:** Background overlay shift (e.g., `rgba(255,255,255,0.08)` dark / `rgba(13,59,102,0.06)` light) with `cursor: pointer`.
- **Focus-visible:** `outline: 2px solid var(--secondary); outline-offset: 2px`.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** Disables pointer events and prevents double-clicks; renders a CSS ring spinner (or rotating Material Symbol) inside a fixed-size box so button dimensions never change; announced to assistive tech when the action is async.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error (`.is-success` / `.is-error`):** Temporary feedback state tinting border and text with `--text-success` / `--text-error`, reverting after ~2s.
- **`.btn--danger`:** Visually distinct in both themes via `--border-error`/`--text-error`; define it even if the landing page currently has no destructive action.

### 2.2 Card Component (`.card`)
- **Default:** `border: var(--dim-line)`, `border-radius: 0`, `padding: var(--space-6)`, `background: var(--card-bg)`, `position: relative`; corner crosshair "+" tick marks via `::before`/`::after`. Card titles in mono uppercase per the reference.
- **Hover (interactive cards):** `transform: translateY(-2px)` plus a shadow shift.
- **Focus-within:** Border color shifts to `var(--secondary)` when a child link/button receives focus.
- **Loading (Skeleton):** `.card--skeleton` shimmer blocks that match final content dimensions (no layout jump), `aria-busy="true"` while loading; shimmer animation disabled under `prefers-reduced-motion`.
- **Empty State (`.card--empty`):** Structured fallback layout with a Material Symbol icon and clear guidance text; define the class in CSS with a usage comment for future empty lists.

### 2.3 Form & Input Requirements (`.field`, `.input`)
- **Structure:** A flex `.field` container wrapping a `<label>`, the `<input class="input">`, and a dedicated `.field__error` message container.
- **States:** Empty; Focused (accent border + `box-shadow: 0 0 0 1px var(--secondary)` ring per the reference); Filled; Valid (success border + Material Symbol `check` — never color alone, always icon + text); Invalid (error border, `--text-error` message, error icon, message exposed via `aria-live="polite"`); Disabled; Read-only.
- **Final CTA email form:** Client-side validation, inline errors, loading button state, and a success message region (`aria-live`). No backend — simulate submission with a short timeout.

### 2.4 Modal / Popup (conditional — only if you add one, e.g., a "View full plan details" dialog in Pricing)
- **States:** Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions using the transition tokens.
- **UX:** Centered flex overlay (`align-items: center`) with backdrop; Material Symbol close button; keyboard focus trapping; close via `Esc` and overlay click; stacked at `--z-modal`; focus returns to the trigger on close.

### 2.5 FAQ Accordion
- Trigger buttons with `aria-expanded` + `aria-controls`; panels with `role="region"` and `aria-labelledby`; Material Symbol `expand_more` chevron rotating 180°; CSS-animated expand/collapse (`grid-template-rows` or `max-height`) at `var(--transition-normal)`; fully keyboard operable; dashed separators between items.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** Fluid sizing via `clamp()` where helpful; zero horizontal overflow; verify at 320px.
- **Smooth Animations:** CSS transitions on all state changes using the tokens; `--ease-standard: linear` per the drafting aesthetic. **`prefers-reduced-motion: reduce` must disable transforms, shimmer, smooth scrolling, and accordion animation.**
- **Accessibility (a11y):** AA contrast in both Light and Dark modes; never rely on color alone to communicate state; semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), exactly one `<h1>` with logical heading order; a skip link; visible focus on every interactive element; full keyboard operability (no mouse-only interactions); `aria-live` regions for form feedback and dynamic price changes.
- **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
- **Sticky header:** `--z-dropdown` stacking, semi-transparent theme-tinted background with blur, dashed bottom border; anchor navigation uses smooth scrolling (respecting reduced motion) with `scroll-margin-top` on sections.

---

## 4. PAGE SECTION SPECIFICATIONS

Global pattern: every section opens with a monospace index label (e.g., `SEC. 01 — HERO`) over a dashed rule; vertical rhythm of `--space-24` between sections; content container max-width ~1200px.

### 4.1 Nav + Hero
- **Nav:** Mono wordmark "DRAFTLINE"; anchor links (Features, How It Works, Testimonials, Pricing, FAQ); theme toggle (per 1.3); primary CTA "Start Drafting"; mobile hamburger disclosure (`aria-expanded`, panel at `--z-dropdown`, closes on `Esc` and link click).
- **Hero:** Two-column desktop, stacked mobile. Left: mono callout eyebrow ("DWG NO. 001 — DATA INFRASTRUCTURE"), H1 (e.g., "Draft your data pipelines like blueprints."), subcopy, primary + secondary CTAs, and a mono annotation line ("SCALE 1:1 · REV A · SHEET 1/1").
- **Right:** A CSS-only schematic illustration — a pipeline diagram (INGEST → TRANSFORM → SERVE nodes) drawn with dashed borders, grid alignment, dimension lines with arrowheads, and mono callout labels, built entirely from divs and pseudo-elements. No images, no SVG.
- Optional trust strip: "TRUSTED BY DATA TEAMS AT" with monospace text wordmarks.

### 4.2 Features — 3 Cards
- Section label "SEC. 02 — FEATURES", H2, one-line intro.
- Three `.card` items, each with a Material Symbol icon in a dashed square (e.g., `schema`, `account_tree`, `monitoring`), mono uppercase title, body copy, and a mono "FIG. 0X" callout. Suggested features: version-controlled schemas, end-to-end lineage, live pipeline telemetry.
- Cards render in skeleton state on first paint (~600ms) before revealing content; hover lift and focus-within highlight per 2.2.

### 4.3 How It Works — 3 Steps
- Section label "SEC. 03 — HOW IT WORKS". Steps: `01 DRAFT`, `02 REVIEW`, `03 DEPLOY` — mono step numbers in dashed squares, titles, short copy.
- Desktop: horizontal layout with dashed dimension-line connectors (with arrowheads) between steps; mobile: vertical layout with a vertical dashed connector. Connectors are pseudo-elements only.

### 4.4 Testimonials
- Section label "SEC. 04 — FIELD REPORTS". Three quote `.card` items: quote text, optional Material Symbol `format_quote`, mono attribution ("— NAME · ROLE, COMPANY"), optional five-star row using `star` symbols. Quotes must contain plausible data-engineering outcomes (migration time cut, incident resolution, audit readiness).

### 4.5 Pricing — 3 Tiers
- Section label "SEC. 05 — PRICING". A monthly/annual segmented-control toggle (`aria-pressed`, prices update with an `aria-live` announcement).
- Tiers: DRAFT (free), STUDIO (featured), ENTERPRISE. The featured tier gets an accent dashed border, a `.badge` reading "RECOMMENDED SPEC", and slight elevation.
- Each card: mono tier name, price, feature list with Material Symbol `check` icons, and a CTA (`.btn--primary` on the featured tier). Annual prices show the discount.

### 4.6 FAQ
- Section label "SEC. 06 — FAQ". Five to six realistic Q&As (data residency, integrations, schema versioning, pricing, onboarding, SLAs) as an accessible accordion per 2.5.

### 4.7 Final CTA
- Section label "SEC. 07 — START DRAFTING". A panel styled as an engineering drawing's **title block**: dashed grid rows of mono metadata (PROJECT / DATE / REV / SHEET) framing an H2, supporting copy, and the email capture form per 2.3 with full empty/focus/filled/valid/invalid/loading/success states.

### 4.8 Footer
- Multi-column flex layout: brand block with mono tagline; secondary link groups (Product, Company, Resources — use meaningful in-page anchors where targets exist; `href="#"` is acceptable only for pages not yet built); social links as Material Symbols with `aria-label`s.
- Bottom bar: `© 2025 DRAFTLINE`, mono "REV A" annotation, and legal links.

---

## 5. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** Separate `index.html`, `style.css`, and `script.js`. Exactly one `<script src="script.js" defer></script>` — no other script tags, no inline JavaScript, no inline styles.
- **Naming Convention:** BEM only (`block__element--modifier`), consistent across the entire deliverable (`.nav__link`, `.btn--primary`, `.card__title`, `.field__error`). Never mix conventions.
- **script.js scope:** theme init/persistence/toggle, mobile menu, accordion, pricing toggle, form validation + simulated submit states, skeleton reveal. No external libraries.
- **No Unrequested Placeholders:** Realistic English copy everywhere; placeholder text is permitted only for link targets whose pages genuinely do not exist yet.
- **Pre-publication validation (both themes):** contrast check, keyboard-only pass, logical focus order, 320px width check, and reduced-motion pass. Do not declare the build complete until all pass.
