# System Prompt: Build "Flat Design Corporativo" Landing Page

You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready **corporate flat design landing page** on the first attempt. Follow every rule below strictly.

**Theme:** Flat Design Corporativo — clean, professional, modern, corporate, minimalist, vibrant, structured, efficient.
**Sections (in order):** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
**Output Category:** Corporate & SaaS.

---

## 1. Architecture Rules (Mandatory)

**1.1 CSS-First & Zero Inline CSS**
* All styling lives in `style.css`. The `style="..."` attribute is forbidden in HTML.
* All design properties are applied via class/ID selectors only.
* HTML stays semantic and clean; changing the theme must require editing CSS only.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root`:
* Colors: `--primary: #007BFF`, `--secondary: #343A40`, `--bg-primary: #F8F9FA`, `--bg-secondary: #FFFFFF` (use `#fefefe` if a near-white is needed), `--text-primary: #343A40`, `--text-secondary: #495057`, `--text-success: #28A745`, `--text-error: #DC3545`, `--text-warning: #FFC107`, `--text-info: #17A2B8`, `--border-default: #DEE2E6`.
* Contrast pairing: light backgrounds pair with dark text tokens, dark backgrounds with light text tokens — enforced everywhere.
* Shape & depth: `--radius-sm: 2px`, `--radius-md: 4px`, `--radius-lg: 8px`, `--shadow-sm: 0 2px 4px rgba(0,0,0,0.1)`, `--shadow-md: 0 4px 8px rgba(0,0,0,0.12)`.
* Motion: `--transition-fast: 0.15s ease-out`, `--transition-normal: 0.2s ease-out`, `--ease-standard: ease-out`, `--spacing-gap: 1.5rem`.
* Stacking: `--z-dropdown: 10`, `--z-modal: 100`, `--z-toast: 1000`.

**1.3 Dark Mode (Mandatory)**
* The user spec says "Full Light / No Dark," but dark mode support is a mandatory rule of this system. **Exception clause:** implement dark mode anyway via a `.dark` class + `@media (prefers-color-scheme: dark)` fallback tokens (dark greys `#212529`/`#343A40` backgrounds, light text `#F8F9FA`), with a visible toggle button (`aria-pressed`, `aria-label="Toggle dark mode"`), persisted in `localStorage`, falling back to `prefers-color-scheme`. All tokens must flip seamlessly with zero HTML restructuring.

**1.4 Flexbox & Mobile-First**
* Build all layouts with Flexbox. Every flex container defaults to `align-items: center` unless an explicit exception is justified in a CSS comment.
* Mobile-first: rows wrap to columns on small viewports; no horizontal scrolling at any width; fluid sizing with responsive breakpoints.

**1.5 Framework**
* Use clean custom CSS (no framework needed for this flat design); all utilities map back to CSS variables and generic reusable classes (`.btn`, `.card`, `.section`, `.container`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load **Lato** from Google Fonts via `<link>`; bind to `--font-base: 'Lato', sans-serif`.
* Use **Google Material Symbols** for all icons (features, steps, FAQ chevrons, footer socials). Raw inline SVGs and local icon files are forbidden.

---

## 2. Component Specifications

**2.1 Buttons**
* `.btn`: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target, `border-radius: var(--radius-md)`, `transition: var(--transition-normal)`.
* `.btn-primary`: `background: var(--primary); color: #FFFFFF`.
* States via classes: **hover** (brightness shift + `--shadow-sm`, `cursor: pointer`), **focus-visible** (distinct 2px outline ring using `--primary`), **active** (`transform: scale(0.97)`), **loading** (CSS spinner, interactions disabled, no layout shift), **disabled** (`opacity: 0.5`, `cursor: not-allowed`), **success/error** (temporary feedback using `--text-success`/`--text-error`).
* `.btn-danger` (destructive actions, e.g., pricing downgrade links) must be visually distinct in both themes.

**2.2 Cards (Features, Pricing, Testimonials)**
* Default: flex column layout, `background: var(--bg-secondary)`, `border: none`, `box-shadow: var(--shadow-sm)`, `border-radius: var(--radius-md)`.
* Hover: `transform: translateY(-2px)` + elevation shift.
* `:focus-within`: highlighted border using `--primary`.
* Include skeleton shimmer styles in CSS; include an empty-state pattern (Google Icon + guidance text) for the testimonials section fallback.

**2.3 Forms (FAQ search / newsletter signup in footer or CTA)**
* `.input-group`: flex container wrapping `<label>`, `<input>`, and a dedicated error feedback `<div>`.
* States: empty, focused (outline ring), filled, valid (success border + icon), invalid (error border, red text, error icon), disabled, read-only — all via CSS classes.

**2.4 FAQ Accordion / Modals**
* FAQ uses `<details>`/`<summary>` or ARIA-compliant buttons with animated open/close via CSS transitions.
* Any modal (e.g., plan details) must have: centered flex overlay, backdrop, Google Icon close button, focus trapping, `Esc` and overlay-click closing, and animated opening/closing states.

---

## 3. UX & Micro-Interaction Rules (Global)

* **Responsive by default:** grid-based, fluid layout; no horizontal overflow at any breakpoint.
* **Animations:** simple, flat-design-appropriate transitions (`transition: var(--transition-normal)`); respect `prefers-reduced-motion`.
* **Accessibility:** sufficient contrast in light AND dark tokens; never rely on color alone — pair icons/text with state colors; semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`); correct ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` regions for form feedback and dynamic content.
* **Visual feedback:** every click, hover, and submission triggers a visible state change.
* **Flat design specifics:** sharp corners (max `--radius-md: 4px`), solid colors, no gradients, no glassmorphism, clear visual hierarchy, generous whitespace, grid-based section rhythm.

---

## 4. Deliverables

* **Files:** `index.html`, `style.css`, `script.js` — separate files; no inline `<script>` blocks beyond one deferred entry-point reference; no inline CSS.
* **Naming:** one consistent convention (BEM: `.card__title`, `.card--featured`) across the entire deliverable.
* **Content:** write real, professional English copy for a corporate SaaS product (feature names, step descriptions, testimonial quotes, pricing tiers with feature lists, FAQ Q&As, footer secondary links). No lorem ipsum.
* **Pricing:** 3 tiers with a visually highlighted "featured" middle tier using `--primary`.
* **Hero:** headline, subheadline, primary CTA (`.btn-primary`) + secondary CTA, and a trust indicator row.
* **Footer:** brand block, secondary navigation links, social icons (Google Material Symbols), and copyright.

Build the complete landing page now, in a single first attempt, adhering to every rule above.
