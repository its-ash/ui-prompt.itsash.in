# Build Prompt — Atlassian Design System Landing Page (Corporate & SaaS)

You are a Senior Frontend Engineer and Expert UI Designer. Build a **complete, production-quality landing page on the first attempt** for a fictional B2B work-management SaaS product, styled after the **Atlassian Design System (ADS)**. Generate the full final code immediately, following every rule below without omission.

---

## 1. PROJECT BRIEF & DESIGN DIRECTION

**Theme:** Atlassian Design System (ADS), 2017–present, flat-platform aesthetic — the visual language of Jira, Confluence, and Trello marketing pages.
**Tone:** Friendly-professional productivity. Clear hierarchy, generous whitespace, componentized Atlaskit-style UI, strong content and accessibility guidance baked in.
**Aesthetic Constraints:** Flat surfaces with restrained elevation (shadow scale `sm/md/lg` only — never dramatic). No gradients anywhere **except** the signature accent bar. No glassmorphism, no neumorphism, no oversized hero shadows. Crisp 1px borders, compact radii (3/6/10px), pill-shaped lozenge badges.
**Light Palette (from source spec):** bg `#f7f8f9`, surface `#fefefe` *(source declares `#ffffff`; render as `#fefefe` per the near-white rule — visually identical)*, surface-strong `#f1f2f4`, border `#dcdfe4`, text `#172b4d`, text-muted `#44546f`, primary `#0052cc`, accent `#36b37e`.
**Signature Moves (mandatory):** (1) A thin 3px two-color accent bar (`--accent-bar`, blue → green gradient) capping the top of every raised surface — nav, cards, highlighted pricing tier. (2) A consistent low-elevation shadow scale. (3) A 2px blue focus ring on all interactive elements.
**Source Note (translated):** "The source specification does not declare color modes; validate in light and dark before publishing." Dark mode is therefore **mandatory** and must be contrast-validated in both themes.
**Copy Locale:** All user-facing copy must be written in **English**.

---

## 2. STRICT RULES & ARCHITECTURE

### 2.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
- **Minimal HTML Modifications:** HTML must remain clean, semantic (header, nav, main, section, footer), and agnostic of visual styling — retheming the page must require editing only `style.css`, never the markup.

### 2.2 CSS Variables & Theme Tokens
Store **all** visual tokens in `:root` and the `.dark` theme class. Extend — never rename — the source spec's token names, and add the mandatory canonical aliases:

```css
:root {
  /* Atlassian Design System — light tokens */
  --color-bg: #f7f8f9;
  --color-surface: #fefefe;
  --color-surface-strong: #f1f2f4;
  --color-surface-hover: #e9ebef;
  --color-surface-active: #dcdfe4;
  --color-border: #dcdfe4;
  --color-text: #172b4d;
  --color-text-muted: #44546f;
  --color-primary: #0052cc;
  --color-primary-hover: #0747a6;
  --color-on-primary: #ffffff;
  --color-accent: #36b37e;
  --color-danger: #de350b;
  --color-on-danger: #ffffff;

  /* Mandatory canonical aliases */
  --primary: var(--color-primary);
  --secondary: var(--color-accent);
  --bg-primary: var(--color-bg);
  --bg-secondary: var(--color-surface);
  --text-primary: var(--color-text);
  --text-secondary: var(--color-text-muted);
  --text-success: #006644;
  --text-error: #ae2e24;
  --border-default: var(--color-border);
  --border-success: #36b37e;
  --border-error: #ae2e24;

  /* Badge (lozenge) */
  --badge-bg: #e3fcef;
  --badge-text: #006644;

  /* Radius / shadow / spacing / motion / elevation */
  --radius-sm: 3px; --radius-md: 6px; --radius-lg: 10px; --radius-pill: 999px;
  --shadow-sm: 0 1px 2px rgba(9,30,66,0.13);
  --shadow-md: 0 4px 8px rgba(9,30,66,0.14), 0 0 1px rgba(9,30,66,0.28);
  --shadow-lg: 0 8px 16px rgba(9,30,66,0.16), 0 0 1px rgba(9,30,66,0.31);
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --spacing-gap: var(--space-6);
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --transition-fast: 120ms var(--ease-standard);
  --transition-normal: 240ms var(--ease-standard);
  --z-dropdown: 1000; --z-modal: 2000; --z-toast: 3000;

  /* Typography */
  --font-sans: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
  --font-display: var(--font-sans);
  --font-base: var(--font-sans);
  --font-mono: 'Roboto Mono', 'SFMono-Regular', ui-monospace, monospace;
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem; --text-4xl: 3rem; --text-5xl: 4rem;

  /* Signature */
  --focus-ring: 0 0 0 2px rgba(0,82,204,0.4);
  --accent-bar: linear-gradient(90deg, var(--color-primary), var(--color-accent));
}
```

- **Tokenize Everything:** The source spec's hardcoded hover hexes (`#e9ebef`, `#dcdfe4`, `#0747a6`, `#e3fcef`, `#006644`) must be converted into the variables above — zero raw hex values outside `:root`/`.dark`.
- **Contrast Pairing:** Every light background token pairs with a dark text token and every dark background token with a light text token — enforced in both themes, not just the default.
- **Accent Warning:** Never use `--color-accent` (`#36b37e`) as text color on light backgrounds (fails WCAG AA); green communication on light surfaces uses `--text-success` (`#006644`).

### 2.3 Mandatory Dark Mode Support
- **Token Set:** Provide the dark palette via a `.dark` class on `<html>` **and** duplicate it inside `@media (prefers-color-scheme: dark)` scoped to `:root:not(.light)` so no-JS users with dark OS preferences still get dark mode:

```css
.dark {
  --color-bg: #091e42;
  --color-surface: #172b4d;
  --color-surface-strong: #253858;
  --color-surface-hover: #2c4166;
  --color-surface-active: #344563;
  --color-border: #44546f;
  --color-text: #f7f8f9;
  --color-text-muted: #b3bac5;
  --color-primary: #4c9aff;
  --color-primary-hover: #85b8ff;
  --color-on-primary: #091e42;
  --color-accent: #57d9a3;
  --color-danger: #ff7452;
  --color-on-danger: #091e42;
  --text-success: #79f2c0;
  --text-error: #ffbdad;
  --border-success: #57d9a3;
  --border-error: #ff8f73;
  --badge-bg: rgba(87,217,163,0.16);
  --badge-text: #79f2c0;
  --focus-ring: 0 0 0 2px rgba(76,154,255,0.6);
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.45);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.5), 0 0 1px rgba(0,0,0,0.6);
  --shadow-lg: 0 8px 16px rgba(0,0,0,0.55), 0 0 1px rgba(0,0,0,0.65);
}
```

- **Seamless Switching:** Backgrounds and text must flip purely through CSS variables — no HTML restructuring, no duplicated markup.
- **Persistence:** Store the choice in `localStorage` (e.g., key `ads-theme`), falling back to `prefers-color-scheme` on first visit. Theme application must be the **first operation** in `script.js`.
- **Visible Toggle:** A theme toggle button in the nav with a Google Material Symbol (`dark_mode` / `light_mode`), correct `aria-pressed` state, and an `aria-label` ("Switch to dark theme" / "Switch to light theme").
- **Validation:** Verify WCAG AA contrast (4.5:1 body text, 3:1 large text and UI boundaries) in **both** themes before finalizing.

### 2.4 Flexbox Layout & Mobile-First Alignment
- **Default Alignment Rule:** Every flex container defaults to `align-items: center` (`items-center`) unless an exception is explicitly justified — text-heavy card columns may use `items-start`, but each exception must carry a justifying CSS comment.
- **Mobile-Friendly First:** All row layouts collapse to columns on small viewports; nothing may cause horizontal scrolling at 320px. Use a max-width container (~1200px) with `box-sizing: border-box` and fluid type/spacing.

### 2.5 Framework Default & Tailwind CSS Integration
- Use **Tailwind CSS** (CDN or build) for layout, spacing, and responsive utilities only.
- All component styling lives in `style.css` under `@layer components` (or plain CSS) using the reusable class names `.nav`, `.btn`, `.card`, `.input`, `.input-group`, `.badge` and their BEM variants — utilities must never carry raw color values; every color references a CSS variable.

### 2.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** Load **Inter** via Google Fonts `<link>` (with preconnect) and bind it to `--font-base`/`--font-sans`. *Exception clause: the theme's proprietary "Charlie Sans" is unavailable on Google Fonts — Inter is the mandatory replacement, preserving the spec's fallback stack.* Load Roboto Mono only if monospace text is used.
- **Icons:** Use **Google Material Symbols** (`material-symbols-outlined`) exclusively. Raw inline SVGs and local icon files are forbidden. *Exception clause: Atlassian's native iconography is replaced by Material Symbols per this mandatory rule.* Icons are decorative (`aria-hidden="true"`) unless they are the sole content of an icon-only control, which then requires an `aria-label`.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

Use this adapted foundation (extend, never rename), then complete every state below:

```css
body { margin: 0; color: var(--text-primary); font-family: var(--font-base); background: var(--bg-primary); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
  background: var(--color-surface); box-shadow: var(--shadow-sm); position: sticky; top: 0; z-index: var(--z-dropdown); }
.nav::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--accent-bar); }
.btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; min-height: 44px;
  font: 600 var(--text-sm)/1 var(--font-sans); color: var(--text-primary);
  padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
  background: var(--color-surface-strong); border: 1px solid transparent; cursor: pointer;
  transition: background var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast); }
.btn:hover { background: var(--color-surface-hover); }
.btn:active { background: var(--color-surface-active); transform: scale(0.97); }
.btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.btn[disabled] { opacity: 0.5; cursor: not-allowed; filter: grayscale(0.6); transform: none; }
.btn--primary { background: var(--color-primary); color: var(--color-on-primary); }
.btn--primary:hover { background: var(--color-primary-hover); }
.card { background: var(--bg-secondary); border-radius: var(--radius-lg); border: 1px solid var(--border-default);
  box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; overflow: hidden; }
.card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--accent-bar); }
.input { width: 100%; box-sizing: border-box; min-height: 44px; color: var(--text-primary);
  font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md); background: var(--color-surface); border: 2px solid var(--border-default); }
.input::placeholder { color: var(--text-secondary); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--focus-ring); }
.badge { display: inline-flex; align-items: center; gap: 0.4em; font-size: var(--text-xs); font-weight: 600;
  padding: 0.3em 0.8em; border-radius: var(--radius-pill); background: var(--badge-bg); color: var(--badge-text); }
```

### 3.1 Button Component Requirements
- **Default:** Flex, centered, `gap: 0.5rem`, minimum touch target 44×44px.
- **Hover:** Background shift + subtle shadow, `cursor: pointer`.
- **Focus:** Distinct `:focus-visible` ring via `--focus-ring` for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Class `.btn--loading` disables pointer events (prevents double-clicks) and renders a CSS spinner or rotating Material Symbol (`progress_activity`) **without changing button dimensions**; set `aria-busy="true"`.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback styles (`.btn--success`, `.btn--error`) driven by `--text-success` / `--text-error`, paired with an icon — never color alone.
- **Variants:** `.btn` (subtle default), `.btn--primary`, `.btn--danger` (uses `--color-danger`/`--color-on-danger`, visually distinct in both themes), `.btn--ghost` (transparent, for nav links).

### 3.2 Card Component Requirements
- **Default:** Flexible flexbox layout, subtle border + elevation using `--bg-secondary` and CSS variables, 3px accent bar cap.
- **Hover (interactive cards):** `transform: translateY(-2px)` and shadow `md → lg` — subtle, never dramatic.
- **Focus-within:** Border highlights to `--color-primary` when a child link/button receives focus.
- **Loading (Skeleton):** Define a shimmer animation class for card grids to prevent layout jumps.
- **Empty State:** Structured fallback with a Material Symbol and clear guidance text, defined for card grids even though content is static.

### 3.3 Form & Input Requirements
- **States:** Empty, Focused (2px primary border + ring), Filled, Valid (success border + check icon), Invalid (error border, `--text-error` message, error icon, `aria-invalid`), Disabled, Read-only.
- **Structure:** `.input-group` flex container wrapping a `<label for>`, the `.input`, and a dedicated error feedback element with `aria-live="polite"`.

### 3.4 Modal / Popup Requirements (conditional — e.g., "Watch demo")
- **States:** Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
- **UX:** Centered flex container (`align-items: center`), backdrop overlay, Material Symbol close button, keyboard focus trap, `aria-modal`, close via `Esc` or overlay click, focus restored to the trigger on close. The FAQ must use an accordion, not modals.

---

## 4. LANDING PAGE SECTION REQUIREMENTS

Build these sections in order, each as a `<section>` with an `id`, an `aria-labelledby` heading, and `scroll-margin-top` for the sticky nav:

- **4.1 Global Navigation (sticky):** Wordmark (Material Symbol + product name), anchor links (Features, How It Works, Testimonials, Pricing, FAQ), theme toggle, "Get started" `.btn--primary`. Below ~768px, links collapse into a hamburger panel (animated, `aria-expanded`/`aria-controls`, closes on `Esc`, link click, or resize). Include a "Skip to main content" skip link before the nav.
- **4.2 Hero:** Two-column layout (copy + visual) stacking on mobile. `h1` headline, benefit-driven subcopy, dual CTAs (`.btn--primary` "Start free trial"; `.btn` "Watch demo" with `play_circle`), and a trust line with an avatar stack of initials circles. The visual is a **CSS-composed product mockup** — a mini kanban board built from `.card`, `.badge`, avatar circles, and a progress bar using only tokens (no external images; if any image is truly needed, use picsum with descriptive alt text).
- **4.3 Features (3 cards):** Section `h2` + intro; responsive grid (1 column mobile → 3 columns desktop) of `.card--feature`, each with a Material Symbol in a tinted square, `h3`, description, and optional "Learn more" link. One card carries a `.badge` ("New").
- **4.4 How It Works (3 steps):** Numbered steps (number in a primary-colored pill), `h3` + text each, connected by a line on desktop (hidden on mobile).
- **4.5 Testimonials:** 3 `.card--testimonial` in a responsive grid: initials avatar circle, blockquote, name, role, company; optional 5-star row (Material Symbol `star` with `aria-label` "Rated 5 out of 5").
- **4.6 Pricing (3 tiers):** Accessible monthly/annual segmented toggle (`aria-pressed`, annual shows a "Save 20%" `.badge`); prices update with a transition and a polite `aria-live` announcement. Three `.card--pricing` tiers — the middle one highlighted with a "Most popular" `.badge`, stronger border/elevation, and `.btn--primary` (others use `.btn`). Each tier: name, price, per-seat caption, feature list with `check` Material Symbols, CTA.
- **4.7 FAQ:** 4–6 items using native `<details>`/`<summary>` (or button + region with `aria-expanded`), styled chevron that rotates on open, animated open/close.
- **4.8 Final CTA:** Full-bleed band on `--color-surface-strong` containing a headline and an email capture form: `.input-group` (label, `.input` type=email, error container) + `.btn--primary`. On submit: button enters loading state, then a success message with a `check_circle` icon appears in the `aria-live` region; invalid emails show the full invalid state per 3.3.
- **4.9 Footer:** Brand block (logo, tagline, social icon buttons with `aria-label`s) plus 3–4 secondary link columns (Product, Company, Resources, Legal) and a bottom bar with copyright and Terms/Privacy links. Links get hover/focus underline styles.
- **4.10 Copy Rules:** All copy in English, friendly-professional Atlassian marketing voice, sentence-case headings, one consistent fictional product name throughout. **No lorem ipsum** — write real, benefit-driven copy for every section.

---

## 5. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** Fluid sizing and breakpoints with zero horizontal overflow; test at 320px.
- **Smooth Animations:** `transition: var(--transition-normal)` on all state changes; global `prefers-reduced-motion: reduce` rule that disables animations/transitions; smooth anchor scrolling (also disabled under reduced motion).
- **Accessibility (a11y):** AA contrast in light **and** dark; never rely on color alone (pair icons + text); semantic HTML5; correct ARIA roles/labels on the toggle, accordion, mobile menu, segmented control, and modal; logical DOM/focus order; full keyboard operability; `aria-live` regions for form errors, loading, and pricing announcements; single `h1`, logical heading hierarchy.
- **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
- **Destructive Actions:** `.btn--danger` must be visually distinct in both themes (only if used).

---

## 6. DELIVERABLE & OUTPUT FORMAT

- **Files:** Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single `<script src="script.js" defer>` reference. No inline styles anywhere.
- **Naming Convention:** BEM only for components (`.btn--primary`, `.card--pricing`, `.input-group`, `.footer__link`) — never mix conventions; Tailwind utilities are restricted to layout/spacing.
- **Head:** `lang="en"`, viewport meta, descriptive `<title>` and meta description, Google Fonts and Material Symbols `<link>` tags.
- **No Unrequested Placeholders:** Real English copy everywhere; placeholders only where content was genuinely unspecified.
- **Behavioral JS (script.js only):** theme toggle + persistence, mobile nav, FAQ accordion behavior (if not native), pricing toggle, form validation with loading/success states, optional scroll-reveal via IntersectionObserver — all progressive enhancement; content must remain readable with JS disabled.

Generate the complete, working code now, on the first attempt, in `index.html`, `style.css`, and `script.js`.
