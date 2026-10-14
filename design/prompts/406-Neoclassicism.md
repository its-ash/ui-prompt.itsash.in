# Neoclassicism Landing Page — Build Specification for Coding Agent

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce a complete, production-ready landing page in a single pass — no drafts, no TODOs, no placeholder stubs.

**Project Brief:**
- **Theme:** Neoclassicism (1760s–1830s Greco-Roman revival). Strict symmetric composition, centered layouts, column/pediment motifs used as *structural framing, not decoration*. Cream/marble-white surfaces with muted gold and deep ink accents. Serif type evoking carved stone. Reference moods: the Panthéon in Paris, Jacques-Louis David's history paintings, Wedgwood's Jasperware relief medallions.
- **Sections (in order):** Header/Nav, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ (accordion), Final CTA (newsletter form), Footer with secondary links.
- **Source note (translated from spec):** The source palette does not declare light/dark modes — you must author a dark mode and validate contrast in **both** light and dark before considering the work complete.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML. All styling lives in `style.css`.
- **Class/ID Selectors Only:** Every design property, layout rule, and state is applied via class or ID selectors.
- **Minimal HTML Modifications:** HTML stays semantic and styling-agnostic (`header`, `nav`, `main`, `section`, `footer`, `h1–h3` hierarchy). Changing the site's look must require editing only `style.css`.

### 1.2 CSS Variables & Theme Tokens
Adopt the following token block as the **canonical foundation** of `style.css` (extend it, do not rename its variables):

```css
/* Neoclassicism — design tokens */
/* 1760s–1830s | Symmetric Greco-Roman revival: marble, muted gold, ink, restraint */
:root {
/* color */
--color-bg: #f2ede0;
--color-surface: #faf7ef;
--color-surface-2: #e3dbc7;
--color-text: #1f2733;
--color-text-muted: #5a5850;
--color-primary: #8a6d3b;
--color-accent: #2f3b52;
--color-marble-vein: #c9c0a8;
--color-ink: #14181f;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-plinth: 0 1px 0 #ffffff inset, 0 10px 22px rgba(31,39,51,0.14);
--shadow-relief: 0 1px 2px rgba(31,39,51,0.22);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'EB Garamond', 'Trajan Pro', 'Cinzel', 'Georgia', serif;
--font-display: 'Cinzel', 'Trajan Pro', serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: 2.25rem;
--text-4xl: 3rem;
--text-5xl: 4rem;
/* space */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
/* ease */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: pediment cap + fluted-column divider */
--pediment-cap: linear-gradient(180deg, var(--color-surface-2) 0 3px, transparent 3px);
--fluted-divider: repeating-linear-gradient(90deg, var(--color-marble-vein) 0 1px, transparent 1px 10px);
}
```

- **Mandatory semantic aliases:** In addition to the block above, define and use these tokens, mapped to the palette: `--primary: var(--color-primary)`, `--secondary: var(--color-accent)`, `--bg-primary: var(--color-bg)`, `--bg-secondary: var(--color-surface)`, `--text-primary: var(--color-text)`, `--text-secondary: var(--color-text-muted)`, `--border-default: var(--color-marble-vein)`.
- **Success/Error tokens (not in source palette — derive in-theme):** `--text-success` / `--border-success` as a muted laurel green (e.g., `#4a6741` light mode) and `--text-error` / `--border-error` as a deep oxblood red (e.g., `#8c3a2e` light mode). Both must pass WCAG AA contrast in light **and** dark modes.
- **Required additions:** `--shadow-sm: var(--shadow-relief)`, `--shadow-md: var(--shadow-plinth)`, `--spacing-gap: var(--space-6)`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--z-dropdown: 100`, `--z-modal: 1000`, `--z-toast: 1100`.
- **Contrast Pairing:** Every light background token must pair with a dark text token and every dark background token with a light text token — enforced in both themes, not just the default.
- **Light Mode Background:** Never pure white. The cream `#f2ede0` is the page ground; if a near-white is needed, use `#fefefe`, never `#ffffff`.

### 1.3 Mandatory Dark Mode Support
- **Implementation:** Author a dark mode ("Ink & Marble") since the source does not declare one. Provide tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>` (class wins when present). Starting point — verify and adjust until AA passes:

```css
.dark {
--color-bg: #14181f;
--color-surface: #1f2733;
--color-surface-2: #2a3444;
--color-text: #f2ede0;
--color-text-muted: #b5ae9d;
--color-primary: #c9a86a;
--color-accent: #93a7c7;
--color-marble-vein: #3d4657;
--color-ink: #e9e2cf;
}
```

- **Theme Switching:** Background and text variables must swap seamlessly with no HTML restructuring; shadows may deepen for legibility on dark grounds.
- **Persistence:** Store the user's choice in `localStorage` (e.g., key `theme`); on first visit fall back to `prefers-color-scheme`. Provide a visible toggle control in the nav with correct `aria-pressed` and `aria-label` state (see 2.6).

### 1.4 Flexbox Layout & Mobile-First Alignment
- **Flexbox for structure:** Build all layout containers with `display: flex`.
- **Default Alignment Rule:** Every flex container defaults to `align-items: center` unless an exception is justified in a CSS comment (the single permitted exception: equal-height card rows may use `align-items: stretch` for symmetric card grids).
- **Mobile-Friendly First:** All flex rows convert to columns on small viewports (`flex-direction: column` under your mobile breakpoint); use `flex-wrap` and `clamp()` for fluid type; horizontal scrolling is forbidden at any width.

### 1.5 Styling Approach & Naming Convention
- **Clean custom CSS** in `style.css` — the provided base component classes (`.nav`, `.btn`, `.card`, `.input`, `.badge`) are the foundation; extend them, do not rewrite their token references. If you introduce Tailwind, it may only be used via `@layer`/`@apply` mapping back to these variables — never mix raw utility classes with BEM.
- **One convention — BEM** — everywhere: `.btn--primary`, `.card--featured`, `.faq__item`, `.footer__links`. Never mix conventions in a single deliverable.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** Load **Cinzel** (display/headings/buttons — carved Roman capitals; it stands in for Trajan Pro, which is not a webfont) and **EB Garamond** (body paragraphs — readable serif at text sizes) via Google Fonts `<link>` tags in `<head>`. Bind them to `--font-display` and `--font-sans` per the token block. Headings and buttons are uppercase with generous letter-spacing (`.06em`+), evoking carved inscription.
- **Icons:** Use **Google Material Symbols (Outlined)** loaded via Google Fonts. Raw inline SVGs, local icon files, and emoji-as-icons are explicitly forbidden. Use icons with restraint — the theme demands it (feature medallions, form validation, FAQ chevron, theme toggle, close buttons only).

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component
Style all states via CSS classes, extending the provided `.btn` base:
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; uppercase letterspaced per the base class.
- **Hover:** Inset gold ring + relief shadow (per provided base), `cursor: pointer`.
- **Focus:** Distinct `:focus-visible` ring using `--color-accent` with 3px offset for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)` with shadow removed — tactile "stamp" feedback.
- **Loading (`.btn--loading`):** Disables pointer events, prevents double-clicks/double-submits, and renders a CSS spinner (border-based, `currentColor`) or rotating Material Symbol — without changing button dimensions (reserve spinner space or overlay absolutely).
- **Disabled:** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`, no shadow.
- **Success/Error (`.btn--success`, `.btn--error`):** Temporary post-submit feedback driven by `--text-success` / `--text-error`, announced to screen readers via an `aria-live` region.
- **Variants:** `.btn--primary` (accent ground, surface text — per provided base), `.btn--secondary` (surface ground, ink border), and `.btn--danger` (oxblood `--text-error` ground) — the danger variant must be visually distinct in **both** light and dark themes.

### 2.2 Card Component
Extend the provided `.card` (surface ground, `--pediment-cap` image, marble-vein border, plinth shadow, centered text):
- **Default:** Flexible flexbox layout, symmetric internal spacing.
- **Hover (interactive cards):** `transform: translateY(-2px)` plus a shadow shift.
- **Focus-within:** Card border shifts to `--color-accent` when any child link/button receives focus.
- **Loading (`.card--skeleton`):** Shimmer animation defined in CSS (gradient sweep keyframes) to prevent layout jumps; shimmer is disabled under `prefers-reduced-motion`.
- **Empty (`.card--empty`):** Structured fallback with a Material Symbol icon and clear guidance text.

### 2.3 Form & Input Requirements
The Final CTA contains a newsletter form; apply these rules to every input:
- **States:** Empty, Focused (accent underline per provided base **plus** a soft `box-shadow` ring), Filled, Valid (`--border-success` underline + `check_circle` Material icon), Invalid (`--border-error` underline, error icon, red message text), Disabled, Read-only.
- **Structure:** Flex column container wrapping a visible `<label for="...">`, the `.input` field, and a dedicated error feedback `<p>` bound with `aria-live="polite"`. Never communicate state by color alone — always pair color with icon and text.

### 2.4 Modal / Popup Requirements
If any dialog is included (optional — e.g., a plan-details or legal dialog), it must satisfy: **States** — Opening, Open, Loading, Success/Error, Closing, all animated via CSS transitions; **UX** — centered flex container (`align-items: center`), backdrop overlay at `--z-modal`, Material Symbol close button, keyboard focus trapping, restore focus on close, closable via `Esc` and overlay click, `role="dialog"` + `aria-modal="true"`.

### 2.5 Accordion (FAQ)
- Use native `<details>`/`<summary>` (or a `button` + region pattern with `aria-expanded`/`aria-controls` if scripting single-open behavior).
- Summary row: symmetric, uppercase small-caps question text, Material Symbol `expand_more` chevron rotating 180° on open.
- Animate open/close via a CSS height technique; fall back to instant toggle under `prefers-reduced-motion`. Fully keyboard operable.

### 2.6 Theme Toggle
- Icon-only button in the nav using Material Symbols (`dark_mode` / `light_mode`), swapping icon with the theme.
- Correct `aria-pressed` and dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode"); persists via `localStorage`; falls back to `prefers-color-scheme` on first visit; toggles `.dark` on `<html>` with no layout shift.

---

## 3. PAGE SECTION SPECIFICATIONS

All sections are **strictly symmetric and centered**, separated by `--space-24` rhythm, with ornament confined to structural framing (pediment caps, fluted dividers, relief medallions) — never floating decoration.

- **3.1 Header/Nav:** Sticky `.nav` per provided base (gold bottom border + marble-vein `::after`). Brand wordmark in Cinzel, centered anchor links to each section, theme toggle. On mobile: brand + toggle + a menu button revealing a dropdown panel at `--z-dropdown` (keyboard operable, `Esc` closes).
- **3.2 Hero:** Centered flex column, ~85vh min-height. A CSS-drawn pediment/entablature rule (borders/gradients only — no images) frames the content structurally. Eyebrow `.badge`, `h1` in Cinzel via `clamp()`, restrained lede in EB Garamond, two CTAs (`.btn--primary` + `.btn--secondary`), `--fluted-divider` separator beneath. Subtle marble-vein background texture via CSS gradients.
- **3.3 Features:** Exactly 3 `.card` items in a symmetric flex row (wraps to a single column on mobile). Each: circular relief medallion containing a Material Symbol (Jasperware reference), `h3`, body text. Apply hover/focus-within states per 2.2.
- **3.4 How It Works:** 3 steps marked with Roman numerals **I / II / III** in medallions, connected by a fluted divider line on desktop, stacked symmetrically on mobile. Each step: numeral, `h3`, description.
- **3.5 Testimonials:** 3 quotes in a symmetric layout. Oversized Cinzel quotation mark, centered quote text, attribution with initials medallion (no photos), name, and role.
- **3.6 Pricing:** 3 tiers; the middle tier is `.card--featured` — elevated with `--color-surface-2` or accent border, a "Recommended" `.badge`, and slightly stronger shadow. Each tier: name, price, feature list with `check` Material icons, CTA button per 2.1. The featured tier must remain distinct in both light and dark modes.
- **3.7 FAQ:** Accordion per 2.5 with 5–6 real questions and answers written in the theme's voice.
- **3.8 Final CTA:** Pediment-framed centered panel: headline, supporting line, newsletter form per 2.3 (email `.input` + `.btn--primary` submit). Submit flow: loading state → success feedback (button success state + inline confirmation message in an `aria-live` region).
- **3.9 Footer:** `--fluted-divider` top rule, centered composition. Secondary link groups (e.g., Explore, Company, Legal) with clearly labeled, focusable links — anchor to page sections where possible; `href="#"` is permitted only for genuinely unspecified targets. Small print line beneath, stacked symmetrically on mobile.

---

## 4. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** Fluid sizing and breakpoints with zero horizontal overflow at any viewport.
- **Smooth Animations:** `transition: var(--transition-normal) var(--ease-standard)` on all state changes; a global `prefers-reduced-motion` block disables transforms, shimmer, chevron rotation, and smooth scrolling.
- **Accessibility (a11y):** Semantic HTML5 landmarks, logical heading hierarchy, skip-to-content link, visible `:focus-visible` styles everywhere, full keyboard operability (no mouse-only interactions), WCAG AA contrast in both modes, never color-only state communication, and `aria-live` regions for dynamic feedback (form errors, submit success, theme change).
- **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
- **Destructive Actions:** `.btn--danger` must be visually distinct in both light and dark themes.
- **Anchor Navigation:** Smooth-scroll to sections, respecting reduced motion.

---

## 5. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** Three separate files — `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single `<script src="script.js" defer></script>` entry point; Google Fonts `<link>` tags in `<head>`.
- **Naming Convention:** BEM exclusively, extending the provided `.btn--primary` modifier pattern. Never mix conventions.
- **Copy:** All user-facing copy written in **English**, authored in-theme — stately, restrained, with carved-stone gravitas (invent a fitting brand name). No lorem ipsum; real headlines, feature copy, testimonials, pricing, and FAQ answers are required. Placeholder `href="#"` is permitted only for genuinely unspecified footer/legal targets.
- **Completion Gate:** Before declaring the work done, validate every text/background pairing in **both light and dark modes** (the source palette declared none) and fix any AA failures. The deliverable must run correctly in a browser on the first attempt.
