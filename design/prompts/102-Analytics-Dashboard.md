**ROLE & MISSION**

You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete, production-quality **Landing Page** on the **first attempt** — no drafts, no placeholders, no "to be implemented" comments.

- **Landing Page Theme:** Analytics Dashboard (flat-platform aesthetic — Stripe Dashboard / Vercel Analytics / modern admin panels)
- **Sections to build:** Top Navigation, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links
- **Output Category:** Data & Engineering — all copy must sound technical, credible, and specific (metrics, events, pipelines, SQL, funnels), written for a B2B data/engineering audience
- **Language:** ALL user-facing copy must be written in **English**. No lorem ipsum — write real, specific product copy and invent one consistent product name used across every section.

**Design Signature (mandatory aesthetic):** Thin 1px hairline borders (`--hairline`) on every surface (nav, cards, inputs, table-like rows, footer), paired with uppercase, letter-spaced KPI label styles and tabular numerals (`font-feature-settings: 'tnum' 1, 'lnum' 1`). Neutral surfaces, dense but scannable, clear hierarchy, function-first legibility. Exactly two accent colors: indigo `#4f46e5` (primary) and green `#16a34a` (positive/accent). Red `#dc2626` is reserved exclusively for errors, negative deltas, and destructive actions. Flat surfaces with subtle shadows only — no gradients, no glassmorphism, no decorative noise.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
All styling must live strictly inside a dedicated `style.css` file:

- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML. No `<style>` blocks in `index.html`.
- **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
- **Minimal HTML Modifications:** HTML must remain clean, semantic, and agnostic of visual styling — changing the site's look must only require editing `style.css`, never the markup.

### 1.2 CSS Variables & Theme Tokens
Adopt the provided design-token system as the single source of truth in `:root`, and extend it with the mandatory aliases below.

**Provided tokens (keep as-is):**
```css
:root {
  --color-bg: #f5f6f8; --color-surface: #ffffff; --color-surface-strong: #eef0f4;
  --color-border: #e2e5eb; --color-text: #1b2130; --color-text-muted: #5b6274;
  --color-primary: #4f46e5; --color-accent: #16a34a; --color-negative: #dc2626;
  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 14px; --radius-pill: 999px;
  --shadow-sm: 0 1px 2px rgba(16,24,40,0.06); --shadow-md: 0 2px 8px rgba(16,24,40,0.08);
  --shadow-lg: 0 8px 24px rgba(16,24,40,0.10);
  --font-sans: 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem; --text-4xl: 3rem;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --tabular: 'tnum' 1, 'lnum' 1;
  --hairline: 1px solid var(--color-border);
}
```

**Mandatory aliases (define in `:root`, referencing the tokens above):**
`--primary` (→ `--color-primary`), `--secondary` (→ `--color-accent`), `--bg-primary` (→ `--color-bg`), `--bg-secondary` (→ `--color-surface`), `--text-primary` (→ `--color-text`), `--text-secondary` (→ `--color-text-muted`), `--text-success` (→ `--color-accent`), `--text-error` (→ `--color-negative`), `--border-default` (→ `--color-border`), `--border-error` (→ `--color-negative`), `--border-success` (→ `--color-accent`).

**Additional required tokens:** `--spacing-gap` (default `var(--space-4)`), `--transition-fast: 150ms var(--ease-standard)`, `--transition-normal: 300ms var(--ease-standard)`, `--z-dropdown`, `--z-modal`, `--z-toast` (ordered so layered components never conflict).

**Contrast Pairing:** Every light background token must pair with a dark text token and every dark background token with a light text token — enforce this in both light AND dark themes.

**Light Mode Background:** The page canvas is `#f5f6f8` (never pure white). `#ffffff` is permitted only for card surfaces sitting on the `#f5f6f8` canvas; anywhere else a near-white is needed, use `#fefefe`, not `#ffffff`.

### 1.3 Mandatory Dark Mode Support
The source specification does not declare color modes — you must derive the dark palette yourself and validate both light and dark before publishing.

- **Implementation:** Override all color tokens under `@media (prefers-color-scheme: dark)` AND under a `.dark` class selector (declared after the media query so the manual class wins). Suggested starting point (final values must pass WCAG AA): `--color-bg: #0f1218; --color-surface: #161b24; --color-surface-strong: #1e2430; --color-border: #2a3140; --color-text: #e9edf4; --color-text-muted: #98a1b3; --color-primary: #818cf8; --color-accent: #4ade80; --color-negative: #f87171;` with reduced shadow opacity (rely on hairlines for elevation in dark).
- **Theme Switching:** Background and text variables must switch seamlessly with zero HTML restructuring.
- **Persistence:** Store the user's choice in `localStorage`; fall back to `prefers-color-scheme` on first visit. Apply the theme in the deferred `script.js` — the CSS media query handles the correct first paint for system-preference users, and the `.dark` class applies persisted manual overrides, so no flash of wrong theme occurs.
- **Toggle Control:** A visible toggle in the nav with a Google Material Symbols icon (`light_mode` / `dark_mode`), correct `aria-pressed` state, and a descriptive `aria-label` that updates with state.
- **Dark-Safe Mixing:** Any `color-mix()` tint (badges, focus rings) must mix with `var(--color-surface)` or `transparent` — never hard-coded `white` — so tints adapt to both themes.

### 1.4 Flexbox Layout & Mobile-First Alignment
Build all layout structures with **Flexbox**:

- **Default Alignment Rule:** Every flex container must default to `align-items: center` unless there is an explicitly justified exception (document the exception in a CSS comment).
- **Mobile-Friendly First:** All flex layouts must be responsive out of the box — multi-column rows collapse to single-column stacks on small viewports; card grids use `flex-wrap: wrap` with `flex-basis` sizing. No horizontal scrolling at any viewport width (320px minimum).

### 1.5 Styling Approach
Use clean custom CSS organized with cascade layers — `@layer tokens, base, components, sections, utilities` — consistent with the provided component system. Do not add Tailwind or any CSS framework. All component classes must be generic and reusable (`.btn`, `.card`, `.input-group`, `.badge`, `.nav`) and every utility must map back to CSS variables.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** Load **Inter** (weights 400, 500, 600, 700) and **IBM Plex Mono** (weights 400, 500, 600) from Google Fonts via `<link>` with `preconnect`. Bind them to `--font-sans` and `--font-mono`. Use the mono font for numbers, badges, step indicators, and KPI deltas.
- **Icons:** Use **Google Material Symbols (Outlined)** via the Google Fonts stylesheet. Raw inline SVGs, local icon files, emoji-as-icons, and other icon libraries are explicitly forbidden.
- **Charts:** All data visualizations (hero bar chart, sparklines) must be built from CSS only — flex containers of `div` bars. No SVG, no chart libraries, no canvas. Each chart needs an `aria-label` summarizing the data plus a visible text alternative for screen readers.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component
Style all states via CSS classes (`.btn`, `.btn--primary`, `.btn--danger`):

- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, `border-radius: var(--radius-md)`, hairline border, `transition: var(--transition-fast)`.
- **Hover:** Background/border shift (`--color-surface-strong`) with `cursor: pointer`.
- **Focus:** Distinct `:focus-visible` ring — `outline: 2px solid var(--color-primary); outline-offset: 2px` — visible in both themes.
- **Active/Pressed:** `transform: scale(0.97)` click feedback.
- **Loading:** `.btn--loading` disables pointer events (prevents double-clicks), renders a CSS spinner (border-based, current-color) or animated Material Symbol, and must not change button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale filter, `cursor: not-allowed`.
- **Success/Error:** `.btn--success` / `.btn--error` temporary feedback states driven by `--text-success` / `--text-error`.
- **Danger:** `.btn--danger` must be visually distinct in BOTH light and dark themes.

### 2.2 Card Component
- **Default:** Flexbox column layout, `--color-surface` background, hairline border, `--radius-lg`, `--shadow-sm`, generous padding.
- **Hover:** Elevation shift to `--shadow-md` plus subtle `transform: translateY(-2px)` — apply only to interactive cards.
- **Focus-within:** Card border highlights (primary color) when a child link/button receives focus.
- **Loading (Skeleton):** Define `.skeleton` shimmer animation classes (no layout shift); apply them to the hero dashboard preview for a brief simulated load (~600ms) before revealing content.
- **Empty State:** Define a structured `.empty-state` pattern (Material Symbol icon + muted guidance text) used as the demo modal's fallback if the demo "fails to load."

### 2.3 Form & Input Requirements
- **States:** Empty, Focused (primary border + 3px `color-mix` ring), Filled, Valid (success border + check Material Symbol), Invalid (error border, red helper text, error icon), Disabled, Read-only.
- **Structure:** `.input-group` flex container wrapping a `<label>`, the `.input` field, and a dedicated error-feedback element wired to `aria-live="polite"` and `aria-describedby`.

### 2.4 Modal / Popup Requirements
The hero's "Watch demo" button opens a demo modal:

- **States:** Opening (fade + scale-in), Open, Loading (skeleton "buffering" state), Success/Error, Closing — all animated via CSS transitions using `--transition-normal`.
- **UX Features:** Centered flex container (`align-items: center`), dimmed backdrop overlay, close button with a Material Symbol (`close`), `role="dialog"` + `aria-modal="true"` + labelled title, keyboard focus trapping, close via `Esc` and overlay click, and focus returned to the trigger button on close. Stack at `--z-modal`.

### 2.5 FAQ Accordion
Build with a `<button aria-expanded>` + region pattern (or `<details>/<summary>` with custom styling): animated open/close via CSS, rotating chevron Material Symbol, fully keyboard operable, `aria-controls` wiring, no color-only state indication.

### 2.6 Toast Component
Define a toast for form feedback: `role="status"`, `aria-live="polite"`, stacked at `--z-toast`, auto-dismiss with a CSS transition, close button included.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** Fluid type and spacing, standard breakpoints, zero horizontal overflow at any width.
- **Smooth Animations:** CSS transitions on all state changes using `transition: var(--transition-normal)`; every animation must be disabled under `@media (prefers-reduced-motion: reduce)`. Respect this for smooth anchor scrolling too.
- **Accessibility (a11y):** WCAG AA contrast in both light and dark modes. Never rely on color alone to communicate state (pair color with icons, text, or motion). Semantic HTML5 landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`), a skip-to-content link, strict heading hierarchy (one `h1`, logical `h2`/`h3`), correct ARIA roles/labels on all custom widgets, logical DOM/focus order, full keyboard operability (no mouse-only interactions), and `aria-live` regions for all dynamic feedback (form errors, toasts, loading states, price changes).
- **Mandatory Visual Feedback:** Every click, hover, and submission must trigger a visible state change.
- **Destructive/Negative Distinctness:** `.btn--danger` and negative deltas must be unmistakable in both themes; red is never used decoratively.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** Three separate files — `index.html`, `style.css`, `script.js`. The only script reference is a single `<script src="script.js" defer></script>`. No inline `<script>` blocks, no inline styles, no external JS libraries.
- **Naming Convention:** BEM exclusively (`.block__element--modifier`, e.g., `.pricing__tier--featured`). Never mix conventions.
- **Copy:** All user-facing copy in English, real and specific to the analytics product — no lorem ipsum, no unrequested placeholders. Placeholder text is allowed only inside the email input.
- **JS Scope (vanilla, all in `script.js`):** theme toggle + persistence, mobile menu, FAQ accordion, demo modal (open/close/focus trap), pricing billing toggle, email form validation with loading → success states + toast, skeleton reveal, footer year. Zero console errors.

---

## 5. PAGE CONTENT & SECTION SPECIFICATIONS

**5.1 Top Navigation (sticky):** Flex row — product wordmark with a Material Symbol logo mark, anchor links (Features, How It Works, Pricing, FAQ), theme toggle, and a `.btn--primary` "Start free" CTA. Hairline bottom border, `--color-surface` background. On mobile, links collapse into a hamburger (Material Symbol `menu`) toggling a flex-column dropdown menu at `--z-dropdown`, with `aria-expanded` state.

**5.2 Hero:** Two-column flex layout (stacks on mobile). Left: mono uppercase badge (e.g., "Real-time event analytics"), `h1` headline with a specific technical promise, subcopy, CTA row — `.btn--primary` "Start free trial" and `.btn` "Watch demo" (opens the modal) — plus a muted trust line. Right: a mock dashboard preview `.card` containing a mini topbar, three KPI tiles (uppercase letter-spaced labels, tabular-numeral values, green/red delta badges with `arrow_upward`/`arrow_downward` icons), and a CSS-only bar chart (12 flex `div` bars, `aria-label` describing the trend). The preview renders as a skeleton shimmer for ~600ms, then reveals.

**5.3 Features — 3 cards:** Flex-wrap grid of `.card`s, each with a Material Symbol icon in a `--color-surface-strong` tile, an uppercase KPI-style label, `h3` title, and concrete copy. Suggested angles: real-time dashboards, flexible funnels/segmentation, warehouse-native SQL integrations.

**5.4 How It Works — 3 steps:** Horizontal flex row on desktop (stacked on mobile): mono step indicators (01/02/03), Material Symbol icon per step, title, and copy; hairline connector rules between steps on desktop.

**5.5 Testimonials:** Three quote `.card`s — quote text, hairline divider, CSS initials avatar circle, name, and muted role/company. Use believable data-engineering personas.

**5.6 Pricing — 3 tiers:** Starter (free), Pro (featured — `--color-surface-strong` or primary border treatment, "Recommended" badge, `.btn--primary`), Enterprise. Each tier: name, price with tabular numerals, feature list with `check` Material Symbols, CTA button. Include a Monthly/Annual segmented toggle (`aria-pressed`, keyboard operable) that swaps prices with an `aria-live` announcement and shows an annual-savings badge.

**5.7 FAQ:** Five to six realistic technical questions as an accessible accordion (per 2.5); first item open by default.

**5.8 Final CTA:** Full-width band on `--color-surface-strong` (or primary-tinted via `color-mix`), headline, subcopy, and an email capture `.input-group` — inline validation (invalid: error border, icon, `aria-live` message; valid: success state), submit `.btn--primary` showing loading spinner then success state, plus a confirmation toast.

**5.9 Footer:** Hairline top border. Flex layout: brand + one-line tagline, then grouped secondary link columns (Product, Company, Resources, Legal) that stack on mobile, and a bottom row with muted copyright (current year via JS) and legal links. All footer links must be real, resolvable anchors.

Build the complete landing page now — final, polished, fully functional code on the first attempt.
