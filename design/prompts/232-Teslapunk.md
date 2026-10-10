# Teslapunk Landing Page — Build Specification Prompt

You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready **Teslapunk Landing Page** on the first attempt. Follow every rule below without exception. All user-facing copy must be written in **English**.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in a dedicated `style.css` file. **Forbidden:** any `style="..."` attribute in HTML.
* All design properties, layout rules, and states are targeted via class or ID selectors only.
* HTML stays clean, semantic, and style-agnostic — changing the theme must never require markup edits.

**1.2 CSS Variables & Theme Tokens**
Use the provided Teslapunk token set inside `:root`, extended with the standard aliases:
* **Colors:** `--primary: #4fd8ff`, `--secondary: #d98a3d`, `--bg-primary: #060b1a`, `--bg-secondary: #0d1830`, `--text-primary: #eaf4ff`, `--text-secondary: #9fb8d9`, `--text-success`, `--text-error`, `--border-default: #a8622f`, `--border-error`, `--border-success`, plus `--color-brass: #c9a24b`, `--color-copper: #a8622f`, `--color-surface-2: #142544`.
* **Contrast Pairing:** Every light background pairs with dark text and vice versa — enforce in both light and dark themes. Light-mode surfaces must use `#fefefe` (never `#ffffff`) tinted toward the midnight-blue mood (e.g., `#f2f6fb`).
* **Radius/Shadows/Spacing/Transitions:** `--radius-sm: 3px`, `--radius-md: 10px`, `--radius-lg: 22px`, `--radius-pill: 999px`, `--shadow-sm`, `--shadow-md`, `--shadow-arc`, `--shadow-brass`, `--spacing-gap: 24px`, `--transition-fast: .15s`, `--transition-normal: .25s`, `--ease-standard: cubic-bezier(0.2, 0.8, 0.3, 1)`.
* **Elevation:** `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`.
* **Signature effects:** `--arc-gradient`, `--brass-trim`, `--bg-image` as defined in the reference tokens.

**1.3 Mandatory Dark Mode Support**
* Teslapunk is dark-native: `:root` defaults to the midnight-blue dark palette. Define a light-mode token set under `@media (prefers-color-scheme: light)` and a `.light` class override.
* Provide a visible theme toggle button (Google Material Symbols icon: `dark_mode` / `light_mode`) with correct `aria-pressed` and `aria-label`.
* Persist choice via `localStorage`; fall back to `prefers-color-scheme` on first visit. Switching themes must require zero HTML restructuring.
* Validate contrast in **both** light and dark before finishing — the source spec explicitly requires validation in both modes.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless an explicitly justified exception exists (e.g., feature card grids may use `stretch` — document why).
* All rows must collapse to columns on small viewports. No horizontal scrolling at any breakpoint.

**1.5 Framework Default**
* Use clean custom CSS driven by the provided component classes (`.nav`, `.btn`, `.btn--primary`, `.card`, `.input`, `.badge`) plus BEM naming for new components. Never mix conventions.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load via Google Fonts `<link>`: **Cinzel** (display headings), **Cormorant** (body serif), **JetBrains Mono** (labels, step numbers, pricing figures).
* Icons: **Google Material Symbols** only. **Forbidden:** raw inline SVGs or local icon files.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons**
* Default: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target.
* Hover: arc glow (`--shadow-arc`) + `translateY(-1px)`, `cursor: pointer`.
* Focus: distinct `:focus-visible` ring in `--color-primary`.
* Active/Pressed: `transform: scale(0.97)`.
* Loading: disables interaction, renders an animated CSS spinner (no dimension shift).
* Disabled: `opacity: .45`, greyscale, `cursor: not-allowed`.
* Success/Error: temporary feedback states driven by `--text-success` / `--text-error`.
* `.btn-danger` (destructive actions, e.g., "Cancel subscription" in pricing) must be visually distinct in both themes.

**2.2 Cards (Features, Pricing, Testimonials)**
* Default: Flexbox layout, `--color-surface` background with `--arc-gradient` overlay, brass-trim top border (`border-image: var(--brass-trim) 1`), `--shadow-brass`.
* Hover: `translateY(-2px)` + intensified arc shadow.
* `:focus-within`: highlighted brass/primary border when a child link/button gains focus.
* Skeleton shimmer animation for any async-loaded content.
* Empty state fallback layout with Google Icon + guidance text where applicable.

**2.3 Forms & Inputs (Final CTA email capture, FAQ search if included)**
* Flex container wrapping label, `.input` field, and a dedicated error feedback container.
* States: empty, focused (arc ring), filled, valid (success border + icon), invalid (error border, red text, error icon), disabled, read-only.
* Validation feedback announced via `aria-live="polite"`.

**2.4 Modal / Popup (FAQ answers may expand inline — no modal required)**
* If any modal exists: opening/open/closing animated via CSS transitions, centered flex container, backdrop overlay, Google Icon close button, focus trapping, closes on `Esc` and overlay click.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid sizing, no horizontal overflow, mobile-first breakpoints.
* **Smooth animations:** `transition: var(--transition-normal)` on all state changes; respect `prefers-reduced-motion` (disable transforms and crackling-glow pulses).
* **Accessibility:** semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), ARIA labels on the theme toggle and FAQ accordions, logical focus order, full keyboard operability, sufficient contrast in both modes, never color-only state communication.
* **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
* **Teslapunk signature:** crackling blue-white arc-lightning glow (`--shadow-arc`, `--arc-gradient`) paired with polished brass/copper coil trim (`--brass-trim`) repeated across hero, cards, pricing tiers, and CTA. A subtle CSS-animated "arc crackle" pulse on the hero primary button and filament-glow text-shadow on display headings — all disabled under `prefers-reduced-motion`.

---

## 4. DELIVERABLE & OUTPUT FORMAT

**4.1 Required Sections (in order)**
1. **Hero** — display headline, subcopy, primary `.btn--primary` CTA + secondary `.btn`, arc-gradient backdrop, badge ("Wireless Age, Est. 1899").
2. **Features** — 3 `.card` components with Google Icons, headings, and copy.
3. **How It Works** — 3 numbered steps using `--font-mono` numerals, brass-trim connectors.
4. **Testimonials** — 3 quote cards with attributed names/roles.
5. **Pricing** — 3 tiers as cards; middle tier highlighted with arc glow and a "Most Popular" `.badge`; each with a CTA button.
6. **FAQ** — accessible accordion (`<details>`/`<summary>` or ARIA pattern), keyboard operable, animated open/close.
7. **Final CTA** — full-width section with email `.input` + `.btn--primary`, inline validation feedback.
8. **Footer** — secondary links, theme toggle, copyright.

**4.2 File Structure**
* Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond one deferred entry-point reference. No inline CSS.
* All copy in English. No lorem ipsum — write real, on-theme Teslapunk copy (wireless electricity optimism, coil demonstrations, "the future is already humming").
* Naming: BEM consistently across the entire deliverable.

Generate the complete, final code now — all three files, fully styled, both themes validated.
