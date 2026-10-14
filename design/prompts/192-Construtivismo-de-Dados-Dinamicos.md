# CODING-AGENT PROMPT — COMPLETE LANDING PAGE: "DYNAMIC DATA CONSTRUCTIVISM"

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page specified below in a single pass, on the first attempt. Every rule in this document is mandatory unless explicitly marked as an exception.

---

## 0. PROJECT BRIEF

* **Theme:** "Dynamic Data Constructivism" — a data-driven, dynamic, structured visual language for a business-intelligence and analytics platform.
* **Category:** Data & Engineering. **Era:** 2026+ Data Intelligence.
* **Visual identity:** animated geometric data visualizations, asymmetrical layouts that guide information flow, technical sans-serif + monospace typography, filter and drill-down micro-interactions, fluid and fast data transitions, deep blue and teal accents, a precise and analytical feel.
* **Sections (in this exact order):** sticky Header/Nav → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.
* **Copy:** Write ALL user-facing copy in **English**. Invent one consistent fictional product brand (e.g., "Metrica," a BI/analytics platform) and write realistic, specific, metric-driven copy (real numbers, real feature names, credible enterprise testimonials). Lorem ipsum is forbidden.
* **Reserved class names from the style spec — these exact classes MUST exist in `style.css` and be used:** `.data-chart-animated`, `.asymmetrical-layout`, `.filter-interaction`.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML. `<style>` blocks in the HTML are also forbidden — all styling lives in a dedicated `style.css`.
* **Class/ID selectors only:** every design property, layout rule, and state is targeted via class or ID selectors.
* **Minimal HTML modifications:** HTML must remain clean, semantic, and agnostic of visual styling, so the entire look can be changed by editing only `style.css`.
* **No direct style writes in JS:** dynamic states (chart bar heights, loading states, filtered series) must be toggled via CSS classes — including a predefined height scale (e.g., `.bar--25`, `.bar--50`, `.bar--75`, `.bar--100`). Never write `element.style.*` properties.

### 1.2 CSS Variables & Theme Tokens
Store ALL visual tokens in `:root` (light) and override them in the dark theme (see 1.3). The following variables are mandatory:

* **Colors (light mode):**
  * `--primary: #005691` (Deep Blue) · `--secondary: #20B2AA` (Teal)
  * `--accent-orange: #FF8C00` · `--accent-purple: #8A2BE2` · `--accent-yellow: #FFD700`
  * `--bg-primary: #FEFEFE` · `--bg-secondary: #ECF0F1` (Light Gray)
  * `--text-primary: #2C3E50` (Dark Slate) · `--text-secondary: #5D6D7E`
  * `--text-success: #0F8A73` · `--text-error: #C0392B`
  * `--border-default: #DDE3E5` · `--border-error` (error red family) · `--border-success` (teal-green family)
  * `--border-accent: #20B2AA` (drives the signature `border-right: 3px solid` constructivist rule)
* **Exception note:** the source spec lists `#FFFFFF` as the background; per token rules, `--bg-primary` must be `#FEFEFE`, reserving pure `#FFFFFF` only for card surfaces and chart canvases.
* **Contrast pairing:** every light background token pairs with a dark text token and every dark background token pairs with a light text token — in BOTH themes. Verify every text/background pair meets ≥ 4.5:1 contrast. Never place `--accent-yellow` or `--accent-orange` as text on light backgrounds (use them only as fills, borders, or on dark surfaces with dark text).
* **Shape, depth, motion, stacking:**
  * `--radius-sm: 2px` · `--radius-md: 6px` · `--radius-lg: 12px` (angular, constructivist feel)
  * `--shadow-sm`, `--shadow-md` (deepen in dark mode)
  * `--spacing-gap: 1.5rem` (plus a modular spacing scale)
  * `--transition-fast: 150ms ease-in-out` · `--transition-normal: all 0.3s ease-in-out` (per source spec) · `--ease-standard: ease-in-out`
  * `--z-header: 100` · `--z-dropdown: 1000` · `--z-modal: 2000` · `--z-toast: 3000`
* **Typography tokens:** `--font-base: 'Inter', sans-serif` (body) · `--font-mono: 'Roboto Mono', monospace` (metrics, data labels, eyebrows, prices, step numbers).

### 1.3 Mandatory Dark Mode Support
* **Implementation:** define dark-mode token overrides BOTH under `@media (prefers-color-scheme: dark)` AND a `.dark` class on `<html>`. Suggested dark palette: `--bg-primary: #0F1C26`, `--bg-secondary: #1B2A37`, `--text-primary: #ECF0F1`, `--text-secondary: #A4B0BA`, brightened `--primary: #3FA0DC` and `--secondary: #2DD4CB`, adjusted error/success tokens for dark-surface contrast.
* **Theme switching:** background and text variables must swap seamlessly with zero HTML restructuring.
* **Persistence:** read the saved choice from `localStorage` (fall back to `prefers-color-scheme` on first visit), apply the `.dark` class, and expose a visible toggle in the header with correct `aria-pressed` and `aria-label` states and a Google Material Symbols icon (`dark_mode` / `light_mode`).
* **Exception note:** the source style spec marked dark mode as not required; per mandatory architecture rules, dark mode remains mandatory — implement it as a cohesive "midnight analytics" variant of the same constructivist system.

### 1.4 Flexbox Layout & Mobile-First Alignment
* **Default alignment rule:** every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
* **Mobile-first:** all layouts are flex-based and stack from columns to rows as viewport grows (e.g., `flex-direction: column` under 768px). No horizontal scrolling at any breakpoint. Asymmetry is achieved with `flex-basis` ratios (e.g., 58% / 42% hero split), offset margins, and overlapping geometric accents — never with fixed pixel widths.
* **Signature constructivist details:** apply `transform: rotate(1deg)` to the hero data panel and select accent blocks (contained so nothing overflows), and use `border-right: 3px solid var(--border-accent)` as the recurring structural accent on panels, eyebrows, and featured cards.

### 1.5 Framework Default
* Use Tailwind CSS (CDN) or clean custom CSS organized in Tailwind's `@layer tokens/base/components/utilities` convention. Either way, the reusable component classes `.btn`, `.card`, `.input-group`, `.chip` MUST exist and map back to the CSS variables. Utility classes may never bypass the token system.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text:** load Inter and Roboto Mono via Google Fonts `<link>` tags; bind them to `--font-base` and `--font-mono`.
* **Icons:** use Google Material Symbols (Outlined or Rounded) via `<link>`. Raw inline SVGs and local icon files are explicitly forbidden. Suggested icons: `query_stats`, `insights`, `monitoring`, `hub`, `bolt`, `filter_alt`, `check`, `expand_more`, `menu`, `close`, `arrow_forward`, `dark_mode`, `light_mode`.
* **Charts without SVG:** build all data visualizations with pure CSS/HTML — flex bar charts, `conic-gradient` donuts/gauges, gradient/clip-path sparklines, and JS-driven count-up numbers.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`)
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px.
* **Hover:** brightness/shadow shift with `cursor: pointer`.
* **Focus:** distinct visible focus ring built from CSS variables (`outline` + `box-shadow`) for keyboard navigation.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading (`.is-loading`):** disables interaction, prevents double-clicks, renders a CSS spinner or animated Material icon without changing button dimensions.
* **Disabled (`.is-disabled` / `disabled`):** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error (`.is-success`, `.is-error`):** temporary feedback styles driven by `--text-success` / `--text-error`, paired with icon + text (never color alone).

### 2.2 Card Component (`.card`, `.card--featured`)
* **Default:** flexbox layout, subtle `--border-default` border, `--bg-secondary` or white surface, `--shadow-sm`.
* **Hover:** `transform: translateY(-2px)` and shadow elevation shift.
* **Focus-within:** border highlights when a child link/button receives focus.
* **Loading (`.card--skeleton`):** shimmer animation defined in CSS to prevent layout jumps.
* **Empty state (`.card--empty`):** structured fallback with a Material icon and clear guidance text.

### 2.3 Form & Input (`.input-group`)
* **States:** empty, focused (outline ring), filled, valid (success border + icon), invalid (error border, error text + icon), disabled, read-only.
* **Structure:** flex container wrapping a `<label>
