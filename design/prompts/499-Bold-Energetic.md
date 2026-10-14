# System Prompt: Build "Bold & Energetic" Landing Page

You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready Landing Page on the first attempt. Theme: **Bold & Energetic** — a modern digital poster (2015+) aesthetic: impactful, dynamic, high-energy, geometric, expressive, contrast-driven, youth-culture event style. All user-facing copy must be written in **English**.

**Sections required:** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling must live in a dedicated `style.css` file. **The `style="..."` attribute is forbidden anywhere in the HTML.**
- All design properties, layout rules, and states must be targeted via class or ID selectors only.
- HTML must remain clean, semantic, and styling-agnostic: changing the site's look must only require editing the CSS file.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` and theme classes:

- **Colors:** `--primary: #6C5CE7` (deep purple), `--secondary: #55E6C1` (soft mint), `--accent: #FF7675` (vivid orange), `--bg-primary: #2F3640` (dark slate), `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- **60/30/10 Balance:** Dark slate `#2F3640` must dominate ~60% of the visual field (grounding base); deep purple `#6C5CE7` and soft mint `#55E6C1` compose ~30% (dynamic blocks, geometric shapes, supporting typography); vivid orange `#FF7675` is reserved ~10% for the single most critical message per viewport (event date, primary CTA, headline punch).
- **Contrast Pairing:** Every light background token pairs with a dark text token and vice versa — enforce in both themes. Never place `#55E6C1` text on `#FF7675` backgrounds or similar low-contrast combos.
- **Light Mode Background:** Do not default to pure white; use a warm-tinted near-white such as `#fefefe` or a light slate tint that fits the poster mood. Use `#fefefe` instead of `#ffffff` wherever near-white is needed.
- **Radius/Shadows:** `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.
- **Spacing/Transitions:** `--spacing-gap`, `--transition-fast: 200ms`, `--transition-normal: 240ms`, `--ease-standard: ease`. All state transitions must run in the 200–260ms range per the theme spec.
- **Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode**
- Dark mode is the **default visual identity** of this theme (dark slate base). Define tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Theme switching must swap CSS variables only — no HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible theme toggle with correct `aria-pressed` and `aria-label` states.
- Light mode must reinterpret the palette as a light poster: light background, dark slate text, purple/mint blocks, orange accents — maintaining 60/30/10 balance and full contrast pairing.

**1.4 Flexbox Layout & Mobile-First**
- Build all layout structures with Flexbox (`display: flex`).
- Every flex container defaults to `align-items: center` unless an explicitly justified exception is documented in a CSS comment.
- All layouts must be mobile-responsive out of the box: multi-column rows (features, pricing, steps) collapse to single columns on small viewports. **No horizontal scrolling at any breakpoint.**

**1.5 Framework**
- Use Tailwind CSS or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives. All utility usage must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load Google Fonts via `<link>` or `@import` — use a bold, expressive display face (e.g., Poppins, Archivo Black, or Space Grotesk) for headlines and a clean sans (e.g., Inter) for body. Bind to `--font-base` and `--font-display`.
- Use Google Material Symbols/Icons for all icons. **Raw inline SVGs and local icon files are forbidden.**
- **Oversized typography is mandatory:** `--display-size: clamp(2.2rem, 6vw, 5rem)` for hero headlines; base `font-size: clamp(1rem, 1.2vw, 1.2rem)`. Headlines must feel like poster type.

---

## 2. COMPONENT SPECIFICATIONS

**2.1 Buttons**
All states via CSS classes (`.btn`, `.btn-primary`, `.btn-accent`, `.btn-ghost`, `.btn-danger`):
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` Minimum touch target 44×44px. Primary CTA uses the orange accent; secondary CTAs use purple/mint.
- **Hover:** Brightness/shadow shift, `cursor: pointer`.
- **Focus:** Distinct focus ring via CSS variables (`outline`/`box-shadow`) for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Disables interaction, prevents double-clicks, renders an animated Google Icon spinner without distorting button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback styles driven by `--text-success` / `--text-error`.

**2.2 Cards (Features, Pricing, Testimonials)**
- **Default:** Flexbox layout, subtle borders, elevation via `--bg-secondary` and shadow tokens. Geometric accent shapes (diagonal clips, offset blocks) in purple/mint are encouraged via CSS only.
- **Hover:** Elevation shift or `transform: translateY(-2px)`.
- **Focus-within:** Card border highlights when a child link/button receives focus.
- **Loading (Skeleton):** Shimmer animation defined in CSS to prevent layout jumps.
- **Empty State:** Google Icon + guidance text fallback layout.
- **Pricing tiers:** The recommended/middle tier must be visually elevated (larger, accent border, "Most Popular" badge). Destructive/downgrade actions use `.btn-danger`, distinct in both themes.

**2.3 Forms & Inputs (FAQ search, newsletter signup in Final CTA)**
- **States:** Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, error text, error icon), Disabled, Read-only.
- **Structure:** Flex container wrapping label, input, and dedicated error feedback container. Errors announced via `aria-live="polite"`.

**2.4 FAQ Accordion / Modal-like behavior**
- **States:** Collapsed, Expanded, Loading — animated with CSS transitions (200–260ms).
- Use semantic `<details>`/`<summary>` or ARIA-compliant custom accordion with `aria-expanded`, full keyboard operability, and visible focus states. Chevron rotation via CSS transform.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** Fluid sizing, no horizontal overflow at any viewport width.
- **Energetic motion:** CSS transitions on all state changes (`transition: var(--transition-normal)`); diagonal compositions and geometric shapes via CSS transforms (`translate3d(0,0,0)` for GPU acceleration). Respect `prefers-reduced-motion` — reduce/disable animation when requested.
- **Accessibility:** Sufficient contrast in both Light and Dark modes. Never rely on color alone to communicate state. Semantic HTML5 elements (`header`, `main`, `section`, `nav`, `footer`), correct ARIA roles/labels, logical DOM/focus order, full keyboard operability. `aria-live` regions for dynamic feedback (form errors, toasts, loading).
- **Mandatory visual feedback:** Every click, hover, or submission triggers a visible state change.
- **Scroll rhythm:** Sections should alternate visual weight (dark slate block → purple/mint block → dark slate) to create poster-like rhythm and energy.

---

## 4. DELIVERABLES

- **File structure:** Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- **Naming convention:** One consistent convention (BEM or a fixed utility set) across the entire deliverable — never mix conventions.
- **Copy:** Write all user-facing copy in English, on-theme (bold, energetic, event/youth-culture voice). No lorem ipsum — write real, punchy copy for every section. The hero must feature a prominent event-style date or key message in the orange accent.
- **Footer:** Secondary links (About, Contact, Privacy, Terms, Social) plus theme toggle placement consistent sitewide (sticky header recommended).

Build the complete landing page now, on the first attempt, with no placeholders left unfilled.
