# System Prompt: Build "Retro Barbershop Clássica" Landing Page

You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready landing page for a **Classic Retro Barbershop** on the first attempt. Theme: 1920s–1940s classic, masculine, authentic, refined, welcoming. Output category: **Retro & Pop**.

**Sections required:** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling must live in a dedicated `style.css` file. **Forbidden:** the `style="..."` attribute anywhere in HTML.
* All design properties, layouts, and states must be targeted via class or ID selectors only.
* HTML must remain clean, semantic, and style-agnostic — changing the site's look requires editing only CSS.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root`:
* **Colors:** `--primary: #800020` (Burgundy), `--secondary: #006400` (Bottle Green), `--bg-primary: #F5F5DC` (Cream), `--bg-secondary: #FFFFFF` (use `#fefefe` where near-white is needed), `--text-primary: #4A2C2A` (Dark Brown), `--text-secondary: #36454F` (Lead Gray), `--accent-gold: #B8860B` (Aged Gold), `--accent-navy: #000080`, `--text-success`, `--text-error`, `--border-default: #B8860B`, `--border-error`, `--border-success`.
* **Contrast pairing:** every background token must pair with a readable text token (cream bg → dark brown text; dark brown bg → cream text). Enforce this in every section.
* **Shape & depth:** `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.
* **Spacing & motion:** `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
* **Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Dark Mode**
* **Mandatory:** define dark mode tokens under `@media (prefers-color-scheme: dark)` **and** a `.dark` class (e.g., `--bg-primary: #2b1a17` deep leather brown, `--text-primary: #F5F5DC`).
* Provide a visible theme toggle with correct `aria-pressed` / `aria-label` state; persist choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
* All burgundy/gold/brown accents must remain distinguishable and accessible in dark mode.

**1.4 Flexbox Layout & Mobile-First**
* Build all layouts with Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
* Mobile-first responsiveness: card grids (3 cards, 3 steps, 3 pricing tiers) stack to a single column on small viewports; no horizontal scrolling at any width.

**1.5 Framework Default**
* Use Tailwind CSS (or custom CSS via `@layer` / `@apply`) mapping all utilities back to the CSS variables above. Reusable classes: `.btn`, `.btn-primary`, `.btn-gold`, `.btn-danger`, `.card`, `.input-group`, `.section-title`.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Google Fonts only: **Bebas Neue** for display headings, **Playfair Display** (robust serif) for body/headings, **Great Vibes** or similar elegant script for accents (e.g., "Since 1923", section eyebrows). Bind to `--font-base`, `--font-display`, `--font-script`.
* Icons: Google Material Symbols only. **Forbidden:** raw inline SVGs or local icon files. Use icons like `content_cut`, `face`, `schedule`, `star`, `verified`.

---

## 2. RETRO THEME SPECIFICS

* **Textures:** implement `.leather-texture-bg` and `.wood-texture-bg` as CSS-only textures (subtle repeating gradients/noise via CSS — no external images).
* **Decorative borders:** 2px solid `#B8860B` borders, double-border frames, ornamental dividers on section titles.
* **Vintage illustrations:** use Material Symbols compositions or CSS-drawn decorative elements (pole stripes, scissors) — no external image files.
* **Micro-interactions:** subtle "shine" sweep effect on hover for buttons and cards (CSS `::after` gradient sweep, `transition: var(--transition-normal)`).
* **Section transitions:** "curtain" / film-roll feel — subtle reveal animations on scroll (CSS transitions + `IntersectionObserver`), respecting `prefers-reduced-motion`.
* **Typography effects:** `text-shadow: 1px 1px 2px rgba(0,0,0,0.2)` on display headings; letter-spaced uppercase Bebas Neue titles.
* All user-facing copy in **English** (barbershop names, service names, testimonials, FAQ).

---

## 3. COMPONENT STATES (MANDATORY)

**3.1 Buttons**
* Default: flex, `align-items: center; justify-content: center; gap: 0.5rem`; min 44×44px touch target.
* Hover: shine sweep + brightness shift, `cursor: pointer`. Focus: distinct gold focus ring. Active: `transform: scale(0.97)`.
* Loading: disabled interaction, CSS spinner, no dimension shift. Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* `.btn-danger` (e.g., "Decline" in pricing) must be visually distinct in both themes.

**3.2 Cards (Features, Pricing, Testimonials)**
* Default: cream/white bg, gold border, `--shadow-sm`. Hover: `translateY(-2px)` + shadow shift + shine.
* `:focus-within` highlights the gold border when a child link/button is focused.
* Skeleton shimmer styles for loading; structured empty state (Google Icon + guidance text) for FAQ/testimonials if content fails.

**3.3 Forms (FAQ contact / CTA email capture)**
* States: empty, focused (gold outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
* Flex container wrapping label, input, and dedicated error feedback container; errors announced via `aria-live="polite"`.

**3.4 FAQ Accordion**
* Keyboard operable (`<details>`/`<summary>` or ARIA widget), animated open/close via CSS transitions, gold chevron icon rotation, full keyboard support.

---

## 4. CORE UX & ACCESSIBILITY

* Fluid sizing, responsive breakpoints, zero horizontal overflow.
* All state changes animated with `transition: var(--transition-normal)`, honoring `prefers-reduced-motion`.
* WCAG-sufficient contrast in both light and dark modes; never color-only state communication (pair icons/text with color).
* Semantic HTML5 (`header`, `main`, `section`, `footer`, `nav`), logical focus order, skip-link, `aria-live` regions for dynamic feedback.
* Every click/hover triggers visible feedback.

---

## 5. DELIVERABLE

* **Files:** `index.html`, `style.css`, `script.js` (theme toggle, accordion, scroll reveals, form validation feedback). No inline `<script>` beyond one deferred entry point.
* **Naming:** one consistent BEM convention throughout.
* **Copy:** real, themed English copy for all sections — no lorem ipsum. Barbershop name example: "The Classic Blade — Barbershop & Shave Parlor".
* Pricing tiers: e.g., "The Trim", "The Classic Cut", "The Full Gentleman" — with a highlighted "Most Popular" middle tier.
* Footer: secondary links (Services, About, Book Appointment, Contact, social icons via Material Symbols).

Generate the complete code now — all files, fully styled, all states implemented, no placeholders left unfinished.
