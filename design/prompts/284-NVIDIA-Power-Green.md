# Landing Page Build Prompt — "NVIDIA Power Green" Theme

## 1. ROLE & OBJECTIVE

You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready Landing Page on the first attempt. Do not ask clarifying questions — make expert decisions and deliver the full code.

**Theme:** NVIDIA Power Green — High-Contrast, Neon Green Accent, Industrial Typography, Sharp Corners, GPU Power (2024–2026 GPU Computing era).
**Sections (in order):** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
**Language:** All user-facing copy must be written in **English**.

---

## 2. STRICT ARCHITECTURE RULES

### 2.1 CSS-First & Zero Inline CSS
- All styling lives in a dedicated `style.css`. **Forbidden:** any `style="..."` attribute in HTML.
- All styling targets class or ID selectors only.
- HTML stays semantic and clean; changing the theme must require editing only the CSS file.

### 2.2 CSS Variables & Theme Tokens
Define in `:root` (light) and override under `@media (prefers-color-scheme: dark)` and a `.dark` class:

- Colors: `--primary: #76b900` (NVIDIA Green), `--secondary: #df6500` (Orange, destructive/danger accents), `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default: #5e5e5e`, `--border-error`, `--border-success`.
- **Contrast pairing:** every light background token pairs with dark text and vice versa — enforce in both themes.
- **Light mode background:** do NOT use pure white; use `#fefefe` as the near-white base. Dark mode uses `#000000` dominant with `#1a1a1a` as secondary surface.
- Radius/shadow: `--radius-sm: 1px`, `--radius-md: 2px`, `--radius-lg: 2px` (sharp engineered corners — never exceed 2px), `--shadow-sm: rgba(0,0,0,0.3) 0px 0px 5px`, `--shadow-md`.
- Spacing/transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Accent colors: `--accent-green: #76b900`, `--accent-green-light: #bff230`, `--gray: #a7a7a7`.

### 2.3 Mandatory Dark Mode
- Dark mode tokens via both `@media (prefers-color-scheme: dark)` and `.dark` class.
- Theme toggle button in the nav with correct `aria-pressed` and `aria-label`; choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- **Theme note:** This theme's default identity is dark (black dominant). The dark theme is the primary expression; the light theme must invert to `#fefefe` backgrounds with `#000000` text while keeping `#76b900` as pure accent. Sections that alternate black/white in dark mode must alternate `#fefefe`/`#1a1a1a`-adjacent tones in light mode, always maintaining contrast pairing.

### 2.4 Flexbox & Mobile-First
- All layout containers use Flexbox with `align-items: center` by default (explicit exceptions allowed with justification).
- Mobile-responsive out of the box: nav, feature grid, pricing tiers, and footer link columns collapse to single-column stacks on small viewports. **No horizontal scrolling at any breakpoint.**

### 2.5 Framework
- Use Tailwind CSS (CDN or build) with custom CSS driven by `@layer`/`@apply`, OR clean custom CSS with reusable classes (`.btn`, `.card`, `.section-dark`, `.section-light`). Pick one and be consistent.

### 2.6 Typography & Icons
- **Fonts:** Google Fonts — use a heavy industrial sans (e.g., Archivo, Inter, or Roboto Condensed) via `<link>`/`@import`, bound to `--font-base`. Headlines default to `font-weight: 700`; hero headline ~36px+.
- **Icons:** Google Material Symbols/Icons only. **Forbidden:** inline SVGs and local icon files. (Exception: the source spec mentions Font Awesome — if you prefer Font Awesome via CDN `<link>`, that is an allowed alternative; choose one library and use it consistently. Never mix libraries, never inline SVGs.)
- Navigation links: `text-transform: uppercase; font-weight: 700`.

---

## 3. THEME-SPECIFIC VISUAL DIRECTION (MANDATORY)

- **NVIDIA Green (#76b900) is a pure accent only** — borders, underlines, hover highlights, focus rings, icon tints. **Never** use it as a large surface/fill color (small badge/underline fills are acceptable).
- Dark sections: `#000000` background, `#ffffff` text. Alternating section backgrounds (dark/light) must be clearly contrasted.
- Buttons: `border: 2px solid #76b900`, transparent background, uppercase 700-weight labels; hover fills/inverts with green border emphasis and white/green text shift; sharp 2px radius.
- Minimal shadows only: `rgba(0,0,0,0.3) 0px 0px 5px`.
- Industrial, engineered aesthetic: grid lines, thin `#5e5e5e` borders, monospace-adjacent labels (e.g., small uppercase section kickers like "01 / FEATURES") are encouraged.
- Orange `#df6500` reserved for danger/destructive or high-alert accents only.

---

## 4. COMPONENT SPECIFICATIONS

### 4.1 Buttons (`.btn`, `.btn-primary`, `.btn-danger`)
- Default: flex, `align-items: center; justify-content: center; gap: 0.5rem;` min touch target 44×44px, 2px green border, uppercase 700 text.
- Hover: brightness/shadow shift, `cursor: pointer`, green underline/edge highlight.
- Focus: distinct green focus ring (`outline`/`box-shadow` using `--primary`) for keyboard nav.
- Active: `transform: scale(0.97)`.
- Loading: disables interaction, prevents double-clicks, renders animated Google Icon spinner without changing button dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles via `--text-success` / `--text-error`.
- `.btn-danger`: visually distinct in both themes (orange/red border treatment).

### 4.2 Cards (Features, Pricing, Testimonials)
- Default: flexbox layout, `--bg-secondary` surface, thin `--border-default` border, 2px radius, minimal shadow.
- Hover: shadow shift or `transform: translateY(-2px)` with green border highlight.
- Focus-within: green border highlight when a child link/button is focused.
- Skeleton shimmer styles defined in CSS (for any async content).
- Empty state: Google Icon + guidance text fallback layout.
- Pricing cards: one tier marked "featured" with green 2px border and an uppercase badge; CTA buttons per tier.

### 4.3 Forms / Inputs (FAQ search, newsletter in footer, contact if used)
- States: empty, focused (green outline ring), filled, valid (success border/icon), invalid (error border, error text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, dedicated error container.
- FAQ: accessible accordion (`<details>`/`<summary>` or ARIA `button` + region), keyboard operable, green underline on open question.

### 4.4 Modal / Popup (if any CTA opens one)
- States: opening, open, loading, success/error, closing — all CSS-transition animated.
- Centered flex overlay, Google Icon close button, focus trapping, closes via `Esc` and overlay click.

---

## 5. GLOBAL UX & MICRO-INTERACTION RULES

- Responsive by default; fluid sizing; no horizontal overflow.
- CSS transitions on all state changes (`var(--transition-normal)`); respect `prefers-reduced-motion`.
- **Accessibility:** sufficient contrast in both themes; never rely on color alone for state; semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`); ARIA roles/labels on custom widgets; logical focus order; full keyboard operability; `aria-live` regions for dynamic feedback (form errors, toasts, loading).
- Every click/hover/submission triggers visible feedback.
- Smooth-scroll nav links to sections; sticky header with theme toggle.

---

## 6. DELIVERABLES

- **Files:** separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- **Naming:** one consistent convention (BEM or fixed utility set) throughout — never mix.
- **Copy:** write real, theme-appropriate English copy (GPU computing, performance, power). No lorem ipsum. Placeholders only where content is genuinely unspecified.
- All class names, variable names, and file names in ASCII/English.
