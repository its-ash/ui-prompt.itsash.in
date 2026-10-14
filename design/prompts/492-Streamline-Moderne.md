# Landing Page Build Prompt — "Streamline Moderne" Theme

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete Landing Page on the first attempt. Deliver production-ready code — no placeholders where real copy is expected.

**Theme:** Streamline Moderne (1930s Art Moderne) — aerodynamic curves, horizontal speed lines, rounded locomotive/ocean-liner silhouettes, silver/cream/chrome accents, sleek and futuristic-for-its-time.

**Sections required:** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in a dedicated `style.css` file. **Forbidden:** any `style="..."` attribute in HTML.
- All design properties, layout rules, and states must be targeted via class or ID selectors.
- HTML must remain clean, semantic, and agnostic of visual styling — changing the look requires editing only the CSS file.

**1.2 CSS Variables & Theme Tokens**
Use the provided Streamline Moderne token block as your foundation, extended with these mandatory tokens:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` — map them onto the theme palette (`--primary: #16414d`, `--accent: #c9a34b`, `--chrome: #9aa7ac`, `--bg-primary: #f2efe9`, `--bg-secondary: #e6e2d8`, `--text-primary: #1c2226`, `--text-muted: #52605f`, `--border-default: #b9c1c6`).
- **Contrast Pairing:** Every light background token must pair with a dark text token and vice versa — enforce in both light and dark themes.
- **Light Mode Background:** Never pure white; use `#fefefe` where a near-white surface is needed (map `--color-surface` accordingly).
- Radius/shadows: `--radius-sm: 10px`, `--radius-md: 20px`, `--radius-lg: 40px`, `--radius-pill: 999px`; `--shadow-sm/md/lg` as specified.
- Spacing/transitions/easing: `--space-*` scale, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.16, 1, 0.3, 1)`.
- Stacking: `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`.
- Theme motifs: keep `--speed-lines` (repeating horizontal chrome stripes) and `--chrome-band` (vertical chrome gradient) as signature decorative tokens.

**1.3 Mandatory Dark Mode**
- Define dark mode tokens under `@media (prefers-color-scheme: dark)` **and** a `.dark` class on `<html>`/`<body>`; both must override the same variable names so switching requires zero HTML restructuring.
- Dark palette suggestion: deep petrol `#0d1b20` background, `#12242b` surface, `#1c2226`-inverted text `#eef1f0`, muted `#9aa7ac`, primary shifts to a lighter teal `#3d7a8a`, accent gold `#d4b06a` — verify WCAG AA contrast in both modes before publishing.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible theme toggle button (Google Icon `dark_mode`/`light_mode`) with correct `aria-pressed` and `aria-label` states.

**1.4 Flexbox Layout & Mobile-First**
- Build all layout structures with Flexbox. **Every flex container defaults to `align-items: center`** unless an explicitly justified exception is documented in a CSS comment.
- Mobile-first: multi-column rows (features, pricing tiers, steps) collapse to a single column on small viewports. No horizontal scrolling at any breakpoint.

**1.5 Framework**
- Use clean custom CSS driven by the provided token block (Tailwind optional via `@layer`/`@apply` if you prefer, but the token variables and component classes below are mandatory). All utilities must map back to the theme variables and generic reusable class names (`.btn`, `.card`, `.input-group`, `.badge`, `.nav`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: load **Poppins** via Google Fonts `<link>` as `--font-sans`; load **Bebas Neue** as `--font-display` for headlines (period-appropriate condensed display). Bind both to variables.
- Icons: **Google Material Symbols** only. **Forbidden:** raw inline SVGs, local icon files, or emoji icons.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons (`.btn`, `.btn--primary`, `.btn--danger`, `.btn--chrome`)**
- Default: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` — fully rounded pill (`--radius-pill`), minimum touch target 44×44px.
- Hover: `transform: translateX(3px)` with `--shadow-md` shift and `cursor: pointer` (the "speed" nudge is the theme's signature interaction).
- Focus: distinct `:focus-visible` ring using `--color-accent`, `outline-offset: 2px`.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: `.is-loading` class — disables interaction, prevents double-clicks, swaps the label icon for an animated spinning Google Icon (`animation: spin`), without distorting button dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`, no transform.
- Success/Error: temporary feedback styles driven by `--text-success` / `--text-error`.
- `.btn--danger`: visually distinct destructive style in both light and dark themes.

**2.2 Cards (`.card`)**
- Default: Flexbox layout, `--radius-lg`, subtle border, `--shadow-md`, left speed-line band via `::before` (as specified in the token CSS).
- Hover: `transform: translateY(-2px)` with `--shadow-lg` elevation shift.
- `:focus-within`: highlight border in `--color-accent` when a child link/button receives focus.
- Loading skeleton: shimmer animation class defined in CSS to prevent layout jumps.
- Empty state: fallback layout with a Google Icon and clear guidance text.

**2.3 Forms & Inputs (`.input`, `.input-group`)**
- States: empty, focused (primary ring via `box-shadow` + `color-mix`), filled, valid (success border + check icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, and a dedicated error feedback element with `aria-live="polite"`.

**2.4 Modal / FAQ Accordion**
- FAQ may use native `<details>/<summary>` styled via CSS, or a modal pattern if you choose modals: opening/open/closing animated with CSS transitions, centered flex overlay, backdrop, Google Icon close button, keyboard focus trapping, close via `Esc` and overlay click.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid sizing, no horizontal overflow at any breakpoint.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; wrap motion in `@media (prefers-reduced-motion: reduce)` to disable transforms/animations.
- **Accessibility:** WCAG AA contrast in both light and dark modes. Never rely on color alone to communicate state. Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`), correct ARIA roles/labels on custom widgets (theme toggle, accordion), logical focus order, full keyboard operability.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Theme application:** apply the Streamline Moderne signature — repeating horizontal speed-line bands (`--speed-lines`) and chrome gradients (`--chrome-band`) on the nav, cards, buttons, hero, and footer; fully-rounded aerodynamic ends everywhere; nautical/machine-form section dividers (rounded "hull" curves between sections).

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` — separate. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS.
- **Naming:** one consistent convention (BEM: `.card`, `.card__title`, `.card--featured`) across the entire deliverable — never mix conventions.
- **Copy:** write all user-facing copy in **English**, in a 1930s Streamline Moderne voice — sleek, confident, machine-age optimism (e.g., "Streamlined from bow to stern", "Built for speed, engineered for tomorrow"). No lorem ipsum; write real headlines, feature copy, testimonial names/quotes, pricing tier details, and FAQ Q&As.
- **Section content:** Hero (headline, subcopy, primary + secondary CTA, decorative speed-line motif), Features (3 cards with Google Icons), How It Works (3 numbered steps styled as a horizontal "assembly line" with chrome connectors), Testimonials (3 quotes), Pricing (3 tiers, middle tier `.card--featured` with a `.badge`), FAQ (5–6 questions), Final CTA (full-width band with `--chrome-band` or primary background), Footer (brand, secondary links, legal line).
- **JS scope:** theme toggle with `localStorage` persistence, FAQ accordion behavior (if not native `<details>`), smooth scroll to anchors, and any form feedback — all in `script.js`.

Produce the complete, working code now.
