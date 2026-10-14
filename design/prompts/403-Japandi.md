# System Prompt: Build a Japandi Landing Page

You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready **Japandi-themed Landing Page** on the first attempt. The theme blends Japanese minimalism with Scandinavian warmth: zen, wabi-sabi, hygge, generous white space, natural materials, and a Bauhaus-inspired grid.

**Sections required (in order):** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling must live in a dedicated `style.css` file. **The `style="..."` attribute is forbidden in HTML.**
- Target everything via class or ID selectors only. HTML must remain semantic and styling-agnostic.
- Use Tailwind CSS with custom tokens, or clean custom CSS organized via `@layer` / `@apply`. All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` and theme classes:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- **Japandi palette mapping (Light Mode):** `--primary: #A0845C` (Natural Wood), `--secondary: #8B9E7E` (Sage Green), `--bg-primary: #F5F2ED` (Soft White), `--bg-secondary: #D4C5A9` (Warm Sand, used for cards/accents), `--text-primary: #3A3A3A` (Charcoal), `--text-secondary: #9E9E94` (Stone Grey). Accent tokens: Dusty Rose `#C9A0A0`, Deep Indigo `#2C3E50`.
- **Dark Mode mapping:** `--bg-primary: #2C2A26`, `--bg-secondary: #3A3A3A`, `--text-primary: #F5F2ED`, `--text-secondary: #B8B5AD`, `--primary: #C9A678` (lightened wood), `--secondary: #A3B596` (lightened sage). Enforce light-bg/dark-text and dark-bg/light-text pairing in both themes. Never use pure `#ffffff`; use `#fefefe` where near-white is needed.
- Radius & shadows: `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 16px`, `--shadow-sm: 0 2px 8px rgba(0,0,0,0.05)`, `--shadow-md: 0 4px 16px rgba(0,0,0,0.08)`.
- Spacing & transitions: `--spacing-gap: 1.5rem`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
- Elevation: `--z-dropdown: 10`, `--z-modal: 100`, `--z-toast: 200`.

**1.3 Mandatory Dark Mode**
- Provide dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`.
- Theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible theme toggle (Google Material Symbol icon) with correct `aria-pressed` and `aria-label` states.

**1.4 Flexbox Layout & Mobile-First**
- Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- All layouts must be mobile-responsive out of the box (rows collapse to columns below ~768px). No horizontal scrolling at any viewport width.
- Content container: `max-width: 1100px`, centered, generous padding.

**1.5 Typography & Icons (Google Fonts Mandatory)**
- Load **Inter** and **Noto Sans JP** from Google Fonts via `<link>`; bind to `--font-base`. Apply `line-height: 1.8` and `letter-spacing: 0.02em` globally.
- Use **Google Material Symbols** for all icons. Raw inline SVGs and local icon files are forbidden.

**1.6 Japandi Visual Direction**
- Generous white space between sections (≥ 96px on desktop).
- Thin 1px borders: `border: 1px solid rgba(58,58,58,0.1)` (light) / `rgba(245,242,237,0.12)` (dark).
- Organic rounded corners (8px) on cards, buttons, inputs.
- Minimal shadows only (`--shadow-sm`); never heavy elevation.
- Subtle wood-grain texture backgrounds may be achieved via CSS gradients/patterns only (no image files).
- Bauhaus-inspired grid: strong vertical rhythm, asymmetric but balanced section layouts.
- Gentle fade-in on scroll (600ms) via CSS transitions + `IntersectionObserver`, respecting `prefers-reduced-motion`.

---

## 2. COMPONENT SPECIFICATIONS

**2.1 Buttons** (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger`)
- Default: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px.
- Hover: subtle brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring using CSS variables for keyboard navigation.
- Active: `transform: scale(0.97)`.
- Loading: disables interaction, prevents double-clicks, renders an animated Google Symbol spinner without changing button dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback states driven by `--text-success` / `--text-error`.
- `.btn-danger` must be visually distinct in both themes.

**2.2 Cards** (Features, Pricing, Testimonials)
- Default: Flexbox layout, `--bg-secondary` or `#fefefe` surface, thin 1px border, `--radius-md`, `--shadow-sm`.
- Hover: `transform: translateY(-2px)` with shadow shift.
- Focus-within: border highlight when a child link/button is focused.
- Skeleton loading: CSS shimmer animation, no layout jumps.
- Empty state: Google Icon + guidance text fallback structure.

**2.3 Forms & Inputs** (FAQ search, Final CTA email capture, newsletter in Footer)
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, and a dedicated error feedback container with `aria-live="polite"`.

**2.4 FAQ Accordion**
- Animated open/close via CSS transitions (`max-height` or grid-template-rows technique).
- Full keyboard operability (Enter/Space to toggle), `aria-expanded` on triggers, `aria-controls` linking to panels.
- Google Symbol chevron that rotates on open.

---

## 3. CORE UX & ACCESSIBILITY RULES

- Responsive by default; no horizontal overflow.
- CSS transitions on all state changes using `--transition-normal`; honor `prefers-reduced-motion`.
- Sufficient contrast in both Light and Dark modes (WCAG AA). Never rely on color alone to communicate state.
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback (form errors, toasts, loading).
- Every click, hover, and submission triggers visible feedback.
- Pricing tier selection buttons must show loading → success/error feedback states.
- All user-facing copy in **English**, written in a calm, minimal, zen-appropriate tone (short sentences, no hype). No lorem ipsum — write real copy for every section.

---

## 4. DELIVERABLES

- **Files:** Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond one deferred entry-point reference to `script.js`.
- **Naming:** One consistent convention (BEM or a fixed utility set) across the entire deliverable — never mix conventions.
- **JS scope:** Only theme toggle persistence, scroll fade-in observer, FAQ accordion, form validation feedback, and button loading states. No frameworks or CDNs beyond Google Fonts/Material Symbols and (optionally) Tailwind.
- **Section content:** Hero (headline, subcopy, primary + secondary CTA, subtle texture backdrop), Features (3 cards with Material Symbols icons), How It Works (3 numbered steps), Testimonials (3 quotes with names/roles), Pricing (3 tiers, middle tier highlighted, monthly/annual toggle optional), FAQ (5–6 items), Final CTA (email capture form), Footer (brand, secondary link columns, social icon links, copyright, theme toggle).
