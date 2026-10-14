**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete Landing Page on the first attempt — fully functional, accessible, and polished, with nothing left unstyled or broken.

- **Landing Page Theme:** Fluent Design 2 (Fluent 2) — Microsoft's Windows 11 design language.
- **Output Category:** Glass & Soft UI.
- **Sections (in order):** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Design DNA to express everywhere:** Fluent 2's five fundamentals — **light, depth, motion, material, scale**. Materials: **Solid**, **Mica** (tints long-lived surfaces with the base/desktop color, subtle blur), **Acrylic** (transient surfaces: strong backdrop blur + translucency + hairline stroke), **Smoke** (scrims/backdrops). Signature moves: **reveal highlight** on interactive surfaces, subtle depth via layered soft shadows, rounded corners (4/8/12px), flat-platform clarity softened with glass translucency.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML. No `<style>` blocks in `index.html`.
- **Class/ID Selectors Only:** Every design property, layout rule, and state must be applied via class or ID selectors defined in `style.css`.
- **Minimal HTML Modifications:** HTML must remain clean, semantic, and styling-agnostic — changing the site's look must only require editing the CSS file, never the markup.

### 1.2 CSS Variables (`var(--...)`) & Theme Tokens
All visual tokens live in `:root` (light) and are overridden for dark (see 1.3). Use exactly this Fluent 2 token foundation, extended with the mandatory semantic aliases:

```css
:root {
  /* color — light */
  --color-bg: #f3f3f3;
  --color-surface: rgba(255,255,255,0.70);
  --color-mica: rgba(243,243,243,0.85);
  --color-acrylic: rgba(252,252,252,0.60);
  --color-text: #1b1b1b;
  --color-text-muted: #616161;
  --color-primary: #0f6cbd;
  --color-accent: #005fb8;
  --color-stroke: rgba(0,0,0,0.10);
  /* mandatory semantic aliases (map — never duplicate raw values) */
  --bg-primary: var(--color-bg);
  --bg-secondary: var(--color-surface);
  --text-primary: var(--color-text);
  --text-secondary: var(--color-text-muted);
  --primary: var(--color-primary);
  --secondary: var(--color-accent);
  --border-default: var(--color-stroke);
  --text-success: #0f7b0f;
  --text-error: #c43131;
  --border-success: #0f7b0f;
  --border-error: #c43131;
  /* radius */
  --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px; --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.14);
  --shadow-md: 0 8px 16px rgba(0,0,0,0.14);
  --shadow-lg: 0 32px 64px rgba(0,0,0,0.19);
  --shadow-card-stroke: inset 0 0 0 1px rgba(0,0,0,0.06), inset 0 -1px 0 rgba(0,0,0,0.10);
  /* blur */
  --blur-acrylic: 30px; --blur-acrylic-thin: 60px;
  /* font */
  --font-sans: 'Segoe UI Variable', 'Segoe UI', 'Open Sans', system-ui, sans-serif;
  --font-display: 'Segoe UI Variable Display', 'Segoe UI', 'Open Sans', sans-serif;
  --font-mono: 'Cascadia Code', 'Roboto Mono', ui-monospace, monospace;
  /* text scale */
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem; --text-4xl: 3rem; --text-5xl: 4rem;
  /* space */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --spacing-gap: var(--space-4);
  /* motion */
  --transition-fast: 120ms; --transition-normal: 240ms;
  --ease-standard: cubic-bezier(0.33, 0, 0.67, 1);
  --ease-decel: cubic-bezier(0.1, 0.9, 0.2, 1);   /* entrances */
  --ease-accel: cubic-bezier(0.7, 0, 1, 0.5);     /* exits */
  /* elevation */
  --z-dropdown: 1000; --z-modal: 2000; --z-toast: 3000;
  /* signature */
  --reveal-highlight: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.35), transparent 60%);
  --acrylic-noise: 0.02;
}
```

- **Contrast Pairing:** Every light background token must pair with dark text tokens, and every dark background token with light text tokens — enforced in every theme, not just the default.
- **Light Mode Background:** Base is `#f3f3f3`, never pure white; where a near-white is genuinely needed, use `#fefefe`, not `#ffffff`.
- **Fluid Type:** Use `clamp()` for display sizes (e.g., hero headline scales from `--text-3xl` on mobile to `--text-5xl` on desktop).

### 1.3 Mandatory Dark Mode Support
The source style does not declare explicit modes — you must define and validate both light and dark before considering the work complete.
- **Implementation:** Define dark tokens under BOTH `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`. Use exactly:
  - `--color-bg: #1b1b1b; --color-surface: rgba(255,255,255,0.06); --color-mica: rgba(32,32,32,0.85); --color-acrylic: rgba(58,58,58,0.60); --color-text: #ffffff; --color-text-muted: #c8c8c8; --color-primary: #479ef5; --color-accent: #60cdff; --color-stroke: rgba(255,255,255,0.10);`
  - Deepen shadows in dark mode (e.g., `--shadow-md: 0 8px 16px rgba(0,0,0,0.36)`) and soften the reveal highlight (e.g., `rgba(255,255,255,0.12)`).
  - Re-tune `--text-success` / `--text-error` for AA contrast on dark backgrounds.
- **Theme Switching:** Variables must swap seamlessly with no HTML restructuring and no duplicated markup.
- **Persistence:** Store the user's choice in `localStorage`; fall back to `prefers-color-scheme` on first visit. Provide a visible toggle button (Material Symbols `dark_mode` / `light_mode`) with correct `aria-pressed` and a dynamic `aria-label` ("Switch to dark theme" / "Switch to light theme").
- **Contrast Verification:** White text on `#0f6cbd` (light) and on `#479ef5` (dark) must pass WCAG AA at the sizes used; if a pair fails, introduce a dedicated button-fill token that passes — never ship a failing pair.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layout structure with Flexbox (CSS Grid permitted only for the card/pricing grids where it reduces complexity).
- **Default Alignment Rule:** Every flex container must default to `align-items: center` unless an exception is explicitly justified in a CSS comment.
- **Mobile-Friendly First:** Single-column stacks below 768px, multi-column above; fluid sizing; zero horizontal overflow at a 320px viewport.

### 1.5 Styling Framework
- The supplied raw CSS token architecture is the requested framework: write clean, custom, token-driven CSS. If you use Tailwind, it may only be via `@layer` / `@apply`, with every utility mapping back to the tokens above — never raw hardcoded values.
- Reusable component classes: `.btn`, `.btn--primary`, `.btn--secondary`, `.btn--danger`, `.card`, `.nav`, `.input`, `.badge`, extended with BEM modifiers per section.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** Load **Open Sans** (weights 400/600/700) from Google Fonts via `<link>` with `preconnect`. **Exception clause:** Fluent 2 natively specifies Segoe UI Variable, which is not a Google Font — therefore the font stacks must begin with `'Segoe UI Variable', 'Segoe UI'` (native Windows rendering) and fall back to the Google Font Open Sans on all other platforms, then `system-ui`. Bind the stacks to `--font-sans` / `--font-display`. If monospace is used, load **Roboto Mono** from Google Fonts behind `'Cascadia Code'`.
- **Icons:** Google Material Symbols — use the **Rounded** variant (matches Fluent 2's rounded geometry) via the official `<link>`. **Explicitly forbidden:** raw inline SVGs, local icon files, and emoji used as icons.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component
Style all states via CSS classes only:
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; `border-radius: var(--radius-md)` (or `--radius-pill` for hero CTAs); Fluent elevation (`--shadow-sm`); `--font-display` at `--text-base`, weight 600.
- **Variants:** `.btn--primary` (filled `--color-primary`, white text), `.btn--secondary` (Acrylic surface: translucent background + `backdrop-filter: blur(var(--blur-acrylic))` + hairline `--color-stroke` inset), `.btn--danger` (visually distinct in both themes), `.btn--ghost` (transparent, subtle hover fill).
- **Hover:** `filter: brightness(1.05)`, shadow shift to `--shadow-md`, reveal-highlight glow; `cursor: pointer`.
- **Focus:** `:focus-visible` ring — `outline: 2px solid var(--color-accent); outline-offset: 2px;` for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)` click feedback.
- **Loading:** `.is-loading` — disables interaction (`pointer-events: none`), prevents double submits, renders a CSS spinner (border-based) or animated Material Symbol in place of the label without changing button dimensions (reserve the space).
- **Disabled:** `opacity: 0.5`, desaturated, `cursor: not-allowed`, no transforms.
- **Success/Error:** `.is-success` / `.is-error` temporary feedback using `--text-success` / `--text-error`, always paired with an icon and text — never color alone.

### 2.2 Card Component
- **Default:** Flexbox layout, `background: var(--color-surface)`, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-card-stroke), var(--shadow-sm)`, `padding: var(--space-6)`.
- **Materials:** Long-lived surfaces (nav, footer band) use **Mica** (`--color-mica`, tinted with the base color, subtle `backdrop-filter: blur() saturate(1.5)`); transient surfaces (modals, flyouts, mobile menu) use **Acrylic** (`--color-acrylic` + `backdrop-filter: blur(var(--blur-acrylic)) saturate(1.5)` + hairline stroke); **Smoke** for scrims (`rgba(0,0,0,0.4)` with optional slight blur). An optional noise overlay may be applied strictly as a `background-image` data-URI texture for material authenticity — never as icons.
- **Hover:** `transform: translateY(-2px)` with elevation to `--shadow-md`/`--shadow-lg`; reveal highlight follows the pointer via `--x`/`--y` custom properties (JS `pointermove`; CSS-only fallback: centered).
- **Focus-within:** Border/outline highlight when a child link or button receives focus.
- **Loading (Skeleton):** Shimmer animation class (gradient sweep) preserving exact dimensions — no layout jumps.
- **Empty State:** Structured fallback with a Material Symbol icon and clear guidance text.

### 2.3 Form & Input Requirements
Used in the Final CTA email capture (and any other field):
- **States:** Empty, focused (2px `--color-primary` outline ring), filled, valid (`--border-success` + check Material Symbol), invalid (`--border-error`, error icon, error text in `--text-error`), disabled, read-only.
- **Structure:** Flex `.input-group` wrapping a `<label>` (explicitly bound with `for`), the `.input` field, and a dedicated error feedback element (`role="alert"`, `aria-live="polite"`); set `aria-invalid` and `aria-describedby` on the input.
- **Behavior:** Client-side validation in `script.js` with visible, announced feedback; the submit button demonstrates loading → success states.

### 2.4 Modal / Popup Requirements
If any dialog is used (e.g., plan details):
- **States:** Opening (fade + scale 0.96→1, `--ease-decel`, ~200ms), open, loading, success/error, closing (faster, `--ease-accel`, ~150ms) — all animated via CSS transitions.
- **UX Features:** Centered flex overlay (`align-items: center; justify-content: center`), Smoke backdrop, Acrylic panel at `--z-modal`, Material Symbol close button (`aria-label="Close"`), keyboard focus trap, focus returns to the trigger on close, closes via `Esc` and overlay click, `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.

---

## 3. SECTION-BY-SECTION PAGE SPECIFICATIONS

All user-facing copy must be written in **English**. Invent one coherent fictional product (e.g., a modern team productivity platform) and write specific, realistic copy — no lorem ipsum.

- **Sticky Navigation:** Mica material bar — logo, anchor links (Features, How It Works, Testimonials, Pricing, FAQ), theme toggle, primary CTA. On mobile: hamburger button (Material Symbol) opening an Acrylic flyout with `aria-expanded`, `aria-controls`, full keyboard support, at `--z-dropdown`.
- **Hero:** Mica-tinted backdrop with a soft accent gradient; display headline (fluid `clamp()` from `--text-3xl` → `--text-5xl`, `--font-display`); subhead in `--text-secondary` at `--text-lg`; two CTAs (`.btn--primary` filled + `.btn--secondary` acrylic); a CSS-built hero visual (layered translucent glass cards, gradients, Material Symbols — no binary image assets). Staggered entrance animations (fade-up, `--ease-decel`), disabled under reduced motion.
- **Features (3 cards):** Responsive grid (1 column mobile → 3 columns ≥768px). Each card: Material Symbol icon inside a tinted rounded square (`--radius-md`), title, description. Reveal highlight + elevation on hover.
- **How It Works (3 steps):** Numbered 01/02/03 with a CSS connecting line on desktop; vertical stack on mobile. Each step: Material Symbol, title, short text.
- **Testimonials:** 3 quote cards in a static grid (no carousel). Each: CSS initials avatar (rounded, tinted), quote, name, role, 5-star rating via Material Symbols with `aria-label="Rated 5 out of 5 stars"`.
- **Pricing (3 tiers):** Middle tier highlighted — `.badge` "Most popular", accent border, `--shadow-lg`, slight elevation. Each card: tier name, price with billing period, feature list with check Material Symbols, CTA (`.btn--primary` on the featured tier, `.btn--secondary` elsewhere). Optional monthly/annual toggle — if included, it must be a real `role="switch"` with `aria-checked` that visibly updates prices.
- **FAQ:** Accessible accordion — `<details>`/`<summary>` or button + region pattern with `aria-expanded`/`aria-controls`; chevron Material Symbol rotates on open; animated expansion (CSS grid-rows or max-height, `--ease-decel`); independent toggles; fully keyboard operable.
- **Final CTA:** Acrylic panel over a subtle accent gradient; headline, supporting line, email capture form (per 2.3) whose submit button demonstrates loading → success; an `aria-live` status region announces the outcome.
- **Footer:** Mica/solid band; brand + tagline, secondary link groups (Product, Company, Resources, Legal), social links (Material Symbols with `aria-label`), copyright line, "Back to top" link. All links have hover and `:focus-visible` states.

---

## 4. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** Fluid sizing and breakpoints without horizontal overflow; verify at 320px, 768px, 1024px, and 1440px.
- **Smooth Animations:** `transition: var(--transition-normal)` on all state changes; entrances use `--ease-decel`, exits `--ease-accel`; fully respect `prefers-reduced-motion: reduce` (disable transforms, reveal highlight, shimmer, smooth scrolling).
- **Accessibility (a11y):** WCAG AA contrast in both light and dark modes; never rely on color alone to communicate state; semantic HTML5 (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`); skip-to-content link; logical DOM/focus order; full keyboard operability (no mouse-only interactions); `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- **Mandatory Visual Feedback:** Every click, hover, and submission must trigger a visible state change.
- **Destructive Actions:** `.btn--danger` must be visually distinct in both light and dark themes.
- **Fluent Motion Feel:** 150–300ms durations; connected, physical, purposeful — no bounce, no gratuitous parallax.
- **Smooth anchor scrolling** via `scroll-behavior: smooth` (guarded by reduced motion) with a sticky-nav scroll offset.

---

## 5. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** Separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry point (`<script src="script.js" defer></script>`). No inline CSS, no `<style>` blocks.
- **Naming Convention:** BEM throughout (`.card`, `card__title`, `card--pricing`, `btn--primary`, `faq__item`) — one consistent convention, never mixed.
- **No Unrequested Placeholders:** All copy is real, English, and product-specific; placeholders are permitted only where content was genuinely left unspecified.
- **Definition of Done (first attempt):** Theme toggle persists and works; the mobile nav flyout works; the FAQ accordion works; the form validates with announced feedback; all component states (hover/focus/active/loading/disabled/success/error) are styled; both themes pass AA contrast; zero console errors; zero horizontal scroll.
