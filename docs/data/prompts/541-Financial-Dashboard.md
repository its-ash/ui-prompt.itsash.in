# BUILD SPECIFICATION — "Financial Dashboard" Landing Page (BI/Analytics · 2020s Modern)

## 0. PROJECT BRIEF

Act as a Senior Frontend Engineer and Expert UI Designer. Generate the **complete, production-ready code on the first attempt** for **"LedgerPulse"** — a fictional financial analytics & BI platform. Design language: **2020s Modern BI/Analytics** — precise, trustworthy, metric-forward, data-dense but breathable. Keywords to express visually and in copy: revenue metrics, profit/loss visualization, budget tracking, financial ratios, portfolio performance, cash flow, audit trail, period comparisons.

**Mandatory sections, in this exact order:**

1. Sticky Header (logo, nav links, theme toggle, CTA button)
2. Hero (headline, subheadline, dual CTAs, live mock dashboard preview)
3. Features — exactly 3 cards
4. How It Works — exactly 3 steps
5. Testimonials — 3 quotes
6. Pricing — exactly 3 tiers
7. FAQ — 5 questions in an accessible accordion
8. Final CTA (with email capture form)
9. Footer with secondary link groups

**All user-facing copy must be written in English.** Write realistic fintech marketing copy with real numbers, real labels, and real feature names — lorem ipsum is prohibited.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** The `style="..."` attribute is **forbidden anywhere in the HTML**. Chart bar heights, sparkline bar heights, and all dynamic visuals must be driven by CSS classes or per-element CSS custom properties **declared inside `style.css`** (e.g., `.waterfall__bar--revenue { --bar-value: 62%; }`).
- **Class/ID Selectors Only:** All design properties, layout rules, and states are targeted via class or ID selectors.
- **Minimal HTML Modifications:** HTML stays semantic and styling-agnostic — a full re-theme must be achievable by editing `style.css` only.

### 1.2 CSS Variables & Theme Tokens
Define all tokens in `:root` (light) and override under `.dark` / `@media (prefers-color-scheme: dark)`:

- **Colors (required names):** `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, plus theme-specific: `--profit`, `--loss`, `--variance-warning`, `--primary-contrast`.
- **Financial palette:** Trust dark blue `#003366` as `--primary`; profit green `#22C55E` as `--profit`; loss red `#EF4444` as `--loss`; budget-variance orange (e.g., `#F59E0B`) as `--variance-warning`; neutral greys for balance surfaces.
- **Accessible text variants:** `#22C55E` and `#EF4444` fail text-contrast on light backgrounds. Keep them for chart bars/fills, but define `--text-success` / `--text-error` as darkened variants in light mode (e.g., `#15803D` / `#DC2626`) and lightened variants in dark mode (e.g., `#4ADE80` / `#F87171`).
- **Light mode background:** Do **not** use pure white. Use a cool, financial grey-blue (e.g., `#F4F6FA`) for `--bg-primary` and `#FEFEFE` (never `#ffffff`) for `--bg-secondary` (cards, preview panels).
- **Dark mode surfaces:** Deep navy-charcoal (e.g., `#0B1220` primary, `#111C2E` secondary). In dark mode, shift `--primary` to a lighter trust blue (e.g., `#3B82F6`) so buttons and accents keep contrast; `--primary-contrast` flips accordingly.
- **Contrast Pairing (mandatory in every theme):** every light background token pairs with a dark text token and vice versa. Verify WCAG AA for all text in both modes.
- **Shape & depth:** `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 16px`, `--shadow-sm`, `--shadow-md` (subtle, crisp — financial, not playful).
- **Motion & space:** `--spacing-gap`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
- **Elevation/stacking:** `--z-dropdown: 1000`, `--z-modal: 2000`, `--z-toast: 3000` (sticky header sits below `--z-dropdown`). No ad-hoc z-index values.

### 1.3 Mandatory Dark Mode Support
- Provide dark tokens under **both** `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`, so switching never requires HTML restructuring.
- **Persistence:** store the user's choice in `localStorage`; fall back to `prefers-color-scheme` on first visit.
- **No flash of wrong theme:** a single minimal inline bootstrap `<script>` in `<head>` (setting the `.dark` class before first paint) is the **only permitted inline script** — everything else lives in `script.js`.
- **Toggle control:** visible in the sticky header — Material Symbols `light_mode` / `dark_mode` icon button with correct `aria-pressed` and `aria-label` ("Switch to dark theme" / "Switch to light theme"), and visible focus ring.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build every layout structure with **Flexbox** (`display: flex` / Tailwind flex utilities).
- **Default rule:** every flex container defaults to `align-items: center` (`items-center`) unless a documented exception exists (e.g., feature card internals stacking with `stretch`).
- **Mobile-first:** all multi-column arrangements (features row, pricing tiers, footer link columns, hero content + preview) collapse to a single column on small viewports. **No horizontal page scrolling at any breakpoint.** The audit trail table may scroll horizontally only inside its own `overflow-x: auto` wrapper.

### 1.5 Framework: Tailwind CSS
- Use **Tailwind CSS** (CDN build acceptable) for layout/spacing/typography utilities only.
- All colors, component skins, states, and animations live in `style.css` as reusable classes (`.btn`, `.card`, `.input-group`, `.kpi-tile`, `.badge-trend`) mapped to the CSS variables. Never hardcode hex values in utility classes.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Fonts:** Google Fonts — `Inter` as `--font-base` and `Space Grotesk` as `--font-display` (headlines, KPI values). Include via `<link>` tags.
- **Tabular numerals:** all metric values, prices, and table cells use `font-variant-numeric: tabular-nums` so animated numbers never jitter.
- **Icons:** Google **Material Symbols (Outlined)** via `<link>`; render as `<span class="material-symbols-outlined">trending_up</span>`. **Inline SVGs, local icon files, and emoji-as-icons are forbidden.**

---

## 2. PAGE STRUCTURE & SECTION SPECIFICATIONS

### 2.0 Sticky Header
- Flex row: logo (text wordmark "LedgerPulse" in `--font-display`), nav links (Features, How It Works, Pricing, FAQ — anchor links with smooth scroll), theme toggle, and a `.btn .btn--primary` "Start Free Trial".
- Sticks to top with `--bg-primary` at reduced opacity + backdrop blur and a `--border-default` bottom hairline; never overlaps modals (respect z-tokens).
- Collapses to a mobile menu (hamburger via Material Symbols `menu`) — must be fully keyboard operable with `aria-expanded` and visible focus.

### 2.1 Hero
- **Left column:** headline (e.g., "Every dollar, accounted for — in real time"), subheadline referencing revenue metrics, cash flow, and audit-ready reporting; dual CTAs — primary "Start Free Trial" and secondary "View Live Demo" (opens the demo modal, §3.4).
- **Trust strip:** 3 inline stats with count-up values (e.g., "$4.2B tracked annually", "12,000 finance teams", "99.98% audit accuracy").
- **Right column — mock dashboard preview card** (the visual centerpiece), containing, top to bottom:
  - **Row of 3 KPI tiles:** label (e.g., "Net Revenue", "Operating Margin", "Free Cash Flow"), count-up value formatted with `Intl.NumberFormat` (USD currency or %), a **percentage-change badge** (§4.2) showing period comparison ("vs Q3"), and a **sparkline** (§4.4).
  - **Cash Flow Waterfall chart** (§4.3) with axis labels: Opening Balance → Revenue (+) → Expenses (−) → Taxes (−) → Net Position (total).
  - **Budget vs Actual variance list:** 3 line items (e.g., "Marketing — under budget 8%", "Payroll — over budget 3%") using `--variance-warning` / `--border-success` variance coloring, each paired with an icon + text (never color alone).
  - **Compact audit trail table** (§4.5): 4 rows + totals row, sticky column header.
- The preview card uses `--bg-secondary`, `--radius-lg`, `--shadow-md`, and a subtle `--border-default` frame.

### 2.2 Features — Exactly 3 Cards
- Section heading + 3 equal `.card` components in a flex row (column on mobile):
  1. **"Profit & Loss, Visualized"** — revenue/expense charts, margin trends (icon: `monitoring`).
  2. **"Budgets That Flag Themselves"** — budget tracking, variance alerts (icon: `account_balance_wallet`).
  3. **"Audit-Ready by Default"** — immutable audit trail, financial ratios (icon: `verified`).
- Each card: Material Symbol in a tinted badge, `--font-display` title, 2–3 sentence description, and a text link "Learn more →" (focusable — triggers card `:focus-within` styling).

### 2.3 How It Works — Exactly 3 Steps
- Numbered `01 / 02 / 03` in `--font-display`, connected by a horizontal rule that becomes vertical on mobile:
  1. **Connect your ledger** (`sync`) — banks, ERP, spreadsheets.
  2. **Build live dashboards** (`dashboard`) — P&L, cash flow, ratios.
  3. **Monitor & audit** (`fact_check`) — variance alerts, export-ready audit trail.
- Flex row, `items-center`, column stack under 768px.

### 2.4 Testimonials — 3 Quotes
- 3 `.card` quotes in a flex row (column on mobile). Each: quote text with a concrete metric ("We closed month-end 5 days faster"), 5-star rating rendered as Material Symbols `star` (filled via `font-variation-settings`), author name, role + company (e.g., "CFO, Northwind Capital"), and a **CSS-styled initials avatar** (colored circle with the author's initials — no external images, no SVG).

### 2.5 Pricing — Exactly 3 Tiers
- **Monthly/Annual toggle** above the cards: accessible button with `aria-pressed`, updates all prices with a short count/fade animation, shows a "Save 20%" badge on annual; price changes announced via an `aria-live="polite"` region.
- Tiers: **Starter $29**, **Growth $79** (highlighted: `--primary` border, "Most Popular" pill, slight `scale`/elevation), **Enterprise "Custom"**.
- Each tier: name, price (formatted via `Intl.NumberFormat` in JS), per-month label, 4–5 feature list items with Material Symbols `check` icons, and a CTA button (`.btn--primary` for Growth, `.btn--outline` for the others; Enterprise CTA reads "Contact Sales").

### 2.6 FAQ — 5 Questions, Accessible Accordion
- Use native `<details>` / `<summary>` (or button + region with `aria-expanded` / `aria-controls`).
- Style: `summary` as a flex row with `expand_more` icon that rotates 180° on open; open/close animated via CSS (`grid-template-rows` transition or equivalent — no JS height math).
- Questions cover: data security, integrations, audit export, plan limits, cancellation. Keyboard operable and visible focus at all times.

### 2.7 Final CTA
- Full-bleed band on `--primary` (dark blue) with `--primary-contrast` light text — contrast pairing enforced in both themes.
- Headline + one-line support copy + **email capture form** (§3.3): label, email input, submit button showing **loading → success** states inline, with an `aria-live="polite"` feedback container ("You're on the list — check your inbox.").

### 2.8 Footer with Secondary Links
- Flex layout: brand column (wordmark + one-line description) + 3–4 link groups (Product, Company, Resources, Legal) as text links (no brand/social SVGs — use text labels).
- Bottom bar: © 2025 LedgerPulse, theme-toggle duplicate or theme note, and legal links. All links have visible hover and focus states.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

### 3.1 Buttons
All states via CSS classes — no JS style mutation:
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target **44×44px**; variants `.btn--primary`, `.btn--outline`, `.btn--ghost`.
- **Hover:** brightness/elevation shift, `cursor: pointer`.
- **Focus:** distinct ring via `outline` / `box-shadow` using CSS variables — visible in both themes.
- **Active:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** disables interaction (prevents double-clicks), swaps label for a **CSS-only spinner** or animated Material Symbol (`progress` with rotation) — button dimensions must not change.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error (`.is-success` / `.is-error`):** temporary feedback tinted by `--text-success` / `--text-error`.
- **Danger (`.btn-danger`):** must be visually distinct in both light and dark themes (define even if unused on this page).

### 3.2 Cards
- **Default:** flexbox layout, `--bg-secondary`, `1px solid --border-default`, `--radius-lg`, `--shadow-sm`.
- **Hover (interactive cards only):** `--shadow-md` + `transform: translateY(-2px)`.
- **Focus-within:** border highlights to `--primary` when a child link/button receives focus.
- **Skeleton (`.card--skeleton`):** shimmer animation defined in CSS — used for the demo modal's loading state; must not cause layout shift.
- **Empty state pattern:** define a reusable `.empty-state` layout (Material Symbol + guidance text) in CSS.

### 3.3 Forms & Inputs (Final CTA email capture)
- **Structure:** flex column `.input-group` wrapping `<label>`, `<input type="email">`, and a dedicated error/success feedback `<p>` with `aria-live="polite"`.
- **States (all CSS-class driven):** empty, focused (outline ring via variables), filled, valid (`--border-success` + `check` icon), invalid (`--border-error`, error text, `error` icon — never color alone), disabled, read-only.

### 3.4 Modal (triggered by Hero "View Live Demo")
- **States:** opening, open, loading (skeleton card), success/error, closing — all animated with CSS transitions (`--transition-normal`).
- **UX:** centered flex container (`align-items: center`), dimmed backdrop, close button using Material Symbol `close`, **keyboard focus trap**, closes via `Esc` and overlay click, focus returns to the trigger on close, `role="dialog"` + `aria-modal="true"` + accessible name.

---

## 4. FINANCIAL DATA VISUALIZATION & ANIMATION REQUIREMENTS

### 4.1 Count-Up Number Animations
- Animate KPI values and trust-strip stats with `requestAnimationFrame` + easing, triggered by `IntersectionObserver` (once per element).
- Format values with **`Intl.NumberFormat`** (`en-US`, `USD` currency for money, percent for margins) — never string-concatenated symbols.
- **`prefers-reduced-motion`: render the final value instantly** (no animation).

### 4.2 Trend & Variance Indicators
- `.badge-trend` pills: Material Symbols `trending_up` / `trending_down` / `trending_flat` + text ("+12.4% vs Q3"). Up = `--text-success`, down = `--text-error`, flat = `--text-secondary` — **icon + text always accompany color**.
- Percentage-change badges animate in with a short fade/slide on load; variance line items use `--variance-warning` (over budget) and `--border-success` (under budget) with matching icons.

### 4.3 Waterfall Chart (CSS-only)
- Build with flexbox columns of `div`s — **no SVG, no canvas, no inline styles**. Positive bars rise in `--profit` green, negative bars fall in `--loss` red, total bars in neutral grey / `--primary`. Floating bar offsets achieved via margins or transforms driven by per-bar CSS custom properties declared in `style.css`.
- Include a baseline, value labels (tabular numerals), and a legend; bars animate height on scroll into view (disabled under reduced motion).

### 4.4 Sparklines
- **Div-based mini bar sparklines** (flex row of thin bars; heights via nth-child or modifier classes in CSS) — no inline SVG. Up-trending sparklines tinted `--profit`, down-trending `--loss`, with `aria-hidden="true"` and the trend conveyed by the adjacent badge text.

### 4.5 Audit Trail Table
- Semantic `<table>`: `<thead>` with **`position: sticky` column headers** (background from `--bg-secondary` so content never shows through), `<tbody>` rows (timestamp, action, user, amount), and a **`<tfoot>` totals row** (bold, `--border-default` top rule, tabular numerals).
- Amount cells colored by `--text-success` / `--text-error` with a `+`/`−` sign prefix (never color alone). Wrapper has `overflow-x: auto` on mobile.

### 4.6 Currency & Number Formatting
- All JS-rendered numbers use `Intl.NumberFormat`; static HTML copy may use pre-formatted values. Consistent currency symbol, thousands separators, and 1–2 decimal places across the page.

---

## 5. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid type/spacing, standard breakpoints, zero horizontal page overflow.
- **Smooth animations:** every state change uses `transition: var(--transition-normal)`; **all motion respects `prefers-reduced-motion`** (disable transforms, count-ups, shimmer; keep instant state changes).
- **Accessibility:** WCAG AA contrast in **both light and dark modes**; semantic HTML5 (`header`, `main`, `section`, `nav`, `footer`); ARIA roles/labels on the toggle, accordion, modal, and menu; logical DOM/focus order; **full keyboard operability**; `aria-live` regions for form feedback and pricing changes.
- **Mandatory visual feedback:** every click, hover, focus, and submission produces a visible state change.
- **Never color-alone:** every profit/loss/variance signal pairs color with an icon, sign, or text label.

---

## 6. DELIVERABLES & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` — fully separated. No inline `<script>` blocks beyond the single permitted theme-bootstrap snippet in `<head>` (§1.3) and one deferred `script.js` reference.
- **Naming convention:** **BEM** (`block__element--modifier`) for all custom classes; Tailwind utilities allowed for layout only. Never mix conventions.
- **No unrequested placeholders:** all copy, labels, numbers, and link names must be real, theme-appropriate English content. Placeholder text is permitted only for genuinely unspecified content (there is none in this brief).
- **Output the complete code for all three files in your first response** — no partial builds, no "to be continued" sections.
