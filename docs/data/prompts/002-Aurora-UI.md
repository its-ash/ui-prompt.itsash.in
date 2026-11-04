# System Prompt: Aurora UI Landing Page — Complete Build Specification

You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality **Landing Page** in a single attempt. Follow every rule below without exception.

**Theme:** Aurora UI — Ethereal, Gradient, Premium, Animated
**Sections (in order):** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. **Forbidden:** any `style="..."` attribute in HTML.
* All design properties, layout rules, and states are targeted via class or ID selectors only.
* HTML must remain clean, semantic, and styling-agnostic — changing the look requires editing only the CSS file.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` and theme classes:

* **Colors:** `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
* **Aurora palette:** `--aurora-blue: #0080FF`, `--aurora-magenta: #FF1493`, `--aurora-cyan: #00FFFF`, plus purple and orange/yellow stops for complementary pairs (blue↔orange, purple↔yellow).
* **Contrast Pairing:** Every light background token pairs with a dark text token; every dark background token pairs with a light text token — in **both** themes.
* **Light Mode Background:** Do NOT use pure white. Use a soft atmospheric near-white (`#fefefe` blended with a faint aurora tint, e.g. `#f7f5ff` or similar) as the base.
* **Radius/Shadow:** `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, plus `--glass-blur` for frosted-glass surfaces.
* **Spacing/Transitions:** `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
* **Elevation:** `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode**
* Dark mode is the **hero mode** of this theme: deep atmospheric background (near-black navy, e.g. `#0a0e1a`) with luminous aurora gradients flowing over it.
* Implement tokens under `@media (prefers-color-scheme: dark)` **and** a `.dark` class on `<html>` or `<body>`.
* Provide a visible theme toggle button (sun/moon **Google Icon**) with correct `aria-pressed` and `aria-label` states.
* Persist choice via `localStorage`; fall back to `prefers-color-scheme` on first visit. Theme switch must not require any HTML restructuring.

**1.4 Flexbox Layout & Mobile-First**
* Build all layout structures with Flexbox. **Every flex container defaults to `align-items: center`** unless an exception is explicitly justified in a CSS comment.
* All layouts are mobile-responsive out of the box: card grids and step rows wrap or stack into columns on small viewports. **No horizontal scrolling at any breakpoint.**

**1.5 Framework Default**
* Use **Tailwind CSS** (CDN or build) or clean custom CSS structured with Tailwind's `@layer`/`@apply`. All utilities must map back to CSS variables or generic reusable classes (`.btn`, `.card`, `.input-group`, `.section`, `.aurora-bg`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Text: load a Google Font (e.g., **Poppins** for headings, **Inter** for body) via `<link>`/`@import`; bind to `--font-base` / `--font-heading`.
* Icons: **Google Material Symbols** only. **Forbidden:** raw inline SVGs or local icon files.

---

## 2. AURORA VISUAL EFFECT SPECIFICATION

* **Backgrounds:** Large flowing gradients using `radial-gradient` and `conic-gradient` with multiple stops (blue → purple → pink → teal), `background-size: 200% 200%`.
* **Animation:** Subtle continuous `@keyframes` loops of **8–12 seconds** (gradient position shifts, hue drift) applied to hero and section backgrounds. Respect `prefers-reduced-motion` — freeze or drastically reduce all animations.
* **Depth:** Layer multiple translucent gradient blobs (`.aurora-blob` divs) with `filter: saturate(1.2)` and `mix-blend-mode: screen` (dark mode) / `multiply` (light mode) for iridescent atmospheric depth.
* **Glassmorphism:** Cards, navbar, and pricing tiers use frosted glass: `backdrop-filter: blur(...)`, translucent `--bg-secondary`, subtle `--border-default` edges — this is the "Glass & Soft UI" output category.
* **Buttons/CTAs:** Gradient-filled primary buttons (blue→magenta), soft glass secondary buttons.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

**3.1 Buttons**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px.
* **Hover:** Brightness/shadow shift, `cursor: pointer`.
* **Focus:** Distinct focus ring via CSS variables (`outline`/`box-shadow`) for keyboard navigation.
* **Active:** `transform: scale(0.97)` click feedback.
* **Loading:** Disables interaction, prevents double-clicks, renders a CSS spinner or animated Google Icon without distorting dimensions.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** Temporary feedback states driven by `--text-success` / `--text-error`.
* **Danger:** `.btn-danger` visually distinct in both themes.

**3.2 Cards (Features, Pricing, Testimonials)**
* **Default:** Flexible Flexbox layout, glass surface (`--bg-secondary` + blur), subtle borders and elevation.
* **Hover:** Elevation shift or `transform: translateY(-2px)` with soft glow.
* **Focus-within:** Card border highlights when a child link/button receives focus.
* **Skeleton:** Shimmer animation defined in CSS (no layout jumps).
* **Empty State:** Structured fallback with a Google Icon and guidance text (used if any dynamic area lacks content).

**3.3 Forms & Inputs (FAQ search, newsletter signup in footer/final CTA)**
* States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
* Structure: Flex container wrapping label, input, and a dedicated error feedback container.

**3.4 Modals (FAQ answers may use accordions instead — if any modal exists)**
* States: Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
* Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via `Esc` or overlay click.

---

## 4. SECTION-BY-SECTION REQUIREMENTS

* **Hero:** Full-viewport animated aurora mesh-gradient background, headline + subheadline, primary CTA button + secondary glass button, subtle scroll indicator.
* **Features:** 3 glass cards, each with a Google Icon, title, and description; hover lift effect.
* **How It Works:** 3 numbered steps in a flex row (stacks on mobile), connected visually by a gradient line or arrow icons.
* **Testimonials:** 3 quote cards with avatar placeholder (initials circle, gradient fill), quote, and attribution.
* **Pricing:** 3 tiers — Free, Pro (highlighted, elevated, "Most Popular" badge), Enterprise. Each with CTA button; Pro tier uses the strongest aurora gradient treatment.
* **FAQ:** Accessible accordion (`<details>`/`<summary>` or ARIA pattern) — keyboard operable, animated open/close, never color-only state.
* **Final CTA:** Full-width gradient band with headline and primary button.
* **Footer:** Secondary links (About, Privacy, Terms, Contact, Social), theme toggle, copyright. Links must have visible focus states.

---

## 5. CORE UX & ACCESSIBILITY RULES

* **Responsive by default:** fluid sizing, no horizontal overflow at any width.
* **Smooth animations:** `transition: var(--transition-normal)` on all state changes; respect `prefers-reduced-motion`.
* **A11y:** Sufficient contrast in both light and dark modes. Never rely on color alone to communicate state. Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`), correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback (form errors, toasts, loading).
* **Mandatory visual feedback:** every click, hover, or submission triggers a visible state change.
* **All user-facing copy in English.** No lorem ipsum — write real, on-theme marketing copy for every section.

---

## 6. DELIVERABLE & OUTPUT FORMAT

* **Files:** Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
* **Naming:** One consistent convention (BEM or a fixed utility set) across the entire deliverable — never mix conventions.
* **No unrequested placeholders:** All copy, labels, and content must be real and complete.
* Generate the **final code immediately** — no clarifying questions, no partial output.
