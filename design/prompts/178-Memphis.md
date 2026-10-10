# CODING AI PROMPT — Memphis-Style Landing Page (Full Build, First Attempt)

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce a complete, production-ready, single-page landing page in the **Memphis** style (1980s Memphis Group: vibrant, geometric, bold, postmodern, playful, anti-minimalist) on the **first attempt**. No drafts, no partial output — deliver the full final code.

**Objective:** A landing page with the following sections: **Sticky Header (with theme toggle), Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ (accordion), Final CTA (with email capture form), Footer (with secondary links).**

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No Inline CSS:** The `style="..."` attribute is **forbidden** anywhere in the HTML. All styling lives in `style.css`.
* **Class/ID Selectors Only:** Every design property, layout rule, and state must be targeted via class or ID selectors.
* **Minimal HTML Modifications:** HTML must remain semantic and style-agnostic. Reskinning the page must only require editing `style.css`. Decorative Memphis shapes are positioned/styled exclusively via CSS classes and pseudo-elements (`::before`/`::after`) — never via inline styles or presentational attributes.

### 1.2 CSS Variables (`var(--...)`) & Theme Tokens
Store **all** visual tokens in `:root` and override them in the dark theme. Mandatory tokens:

* **Brand Colors:** `--primary: #FF1493` (hot pink), `--secondary: #0066FF` (electric blue), `--accent-yellow: #FFD700`, `--accent-red: #FF3333`, `--mint: #00E5A0`, `--coral: #FF7F50`, `--purple: #9B59B6`, `--turquoise: #1ABC9C`.
* **Surfaces:** `--bg-primary: #FEFEFE` (**never `#FFFFFF`** — the light background must be `#FEFEFE` with CSS pattern overlays), `--bg-secondary` (card/panel surface).
* **Text:** `--text-primary`, `--text-secondary`, `--text-success` (map to `--mint`), `--text-error` (map to `--accent-red`).
* **Borders:** `--border-default` (3px solid, per the Memphis spec) driven by `--border-color`; `--border-error`, `--border-success`.
* **Contrast Pairing (mandatory, both themes):** Light backgrounds pair with dark text; dark backgrounds pair with light text. Specifically: hot pink, yellow, mint, coral, and red fills must pair with near-black text (`#111111`-family) for AA contrast; electric blue (`#0066FF`) pairs with white text. **Never** place yellow text on light backgrounds or white text on hot pink/yellow fills for body-size copy.
* **Radius:** `--radius-sm`, `--radius-md`, `--radius-lg` all set to `0px` (Memphis = sharp corners); `--radius-circle: 50%` reserved for circles, icon tiles, and avatar dots.
* **Shadows (Memphis signature — hard offset, zero blur):** `--shadow-sm: 4px 4px 0 var(--shadow-color)`, `--shadow-md: 8px 8px 0 var(--shadow-color)`, where `--shadow-color` is near-black in light mode and a bright accent in dark mode. No soft/blurred drop shadows anywhere.
* **Spacing & Motion:** `--spacing-gap`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard`, plus `--rotate-decor: 6deg` and `--rotate-hover: 3deg` for playful rotation.
* **Elevation:** `--z-dropdown`, `--z-modal`, `--z-toast` to prevent stacking conflicts.

### 1.3 Mandatory Dark Mode Support (Full)
* **Implementation:** Define the full dark palette under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`. Dark mode is a **full** reskin: deep navy/purple background (e.g., `#16162A`-family), light text (`#FEFEFE`-family), borders and hard shadows switching to bright accent colors so the geometric shapes keep popping.
* **Theme Switching:** Background and text tokens must flip via CSS variables only — zero HTML restructuring.
* **Persistence:** Store the user's choice in `localStorage`, fall back to `prefers-color-scheme` on first visit, and expose a **visible toggle button** in the header (Google Material Symbol `dark_mode`/`light_mode`) with correct `aria-pressed` and `aria-label` state, updated by `script.js`.
* **Contrast:** Every token pairing must pass WCAG AA in **both** light and dark modes.

### 1.4 Flexbox Layout & Mobile-First Alignment
* Build all layout structures with **Flexbox** (`display: flex` / Tailwind flex utilities).
* **Default Alignment Rule:** Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
* **Mobile-Friendly First:** All rows (feature cards, pricing tiers, steps, footer columns) collapse to columns on small viewports. **No horizontal scrolling at any breakpoint.** Decorative absolute-positioned shapes must never cause overflow — clip them within their section (`overflow: hidden` on decorated sections).

### 1.5 Framework Default & Tailwind CSS Integration
* Use **Tailwind CSS** (or clean custom CSS organized in Tailwind's `@layer` with `@apply`) unless another framework is requested.
* All utility values must map back to the CSS variables above — **no raw hex values in markup or utilities**. Reusable component classes (`.btn`, `.card`, `.input-group`, `.accordion__item`) must exist as single-source definitions.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text:** Load **Poppins** from Google Fonts via `<link>` (weights 400;600;700;800;900). Headings and display text use **700–900** weights per the Memphis spec; body copy may use 400/600 for readability. Bind via `--font-base: 'Poppins', sans-serif`.
* **Icons:** Use **Google Material Symbols** (Rounded style) for every icon (features, stars, checks, chevrons, social, theme toggle). Raw inline `<svg>` icons and local icon files are **forbidden**.
* **Squiggle Exception Clause:** The Memphis spec calls for squiggly/zigzag borders via SVG — implement these **CSS-only** (repeating gradients, `border-image`, `clip-path: polygon()`) or as SVG **data-URIs inside `style.css` backgrounds**; never as inline `<svg>` markup in the HTML. This exception applies to decorative squiggles only — icons remain Google Material Symbols exclusively.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component Requirements
Style all states via CSS classes (`.btn` + BEM variants: `.btn--primary`, `.btn--secondary`, `.btn--outline`, `.btn--danger`):

* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` — minimum touch target **44×44px**. Memphis treatment: 3px solid border, hard offset shadow (`--shadow-sm`), sharp corners, bold 700+ text.
* **Hover:** `cursor: pointer`; translate `(-2px, -2px)` with the shadow growing to `--shadow-md` and a subtle `rotate(var(--rotate-hover))` tilt. Brightness must not break contrast.
* **Focus:** Distinct, thick focus ring (offset `outline` or `box-shadow` using `--secondary`) for keyboard navigation — visible in both themes.
* **Active/Pressed:** `transform: scale(0.97)` with the shadow collapsing to `0` (button "stamps" down).
* **Loading:** Disables interaction, prevents double-clicks, and renders a CSS spinner or animated Google Material Symbol (`progress`/`sync` with a CSS rotation animation) **without changing button dimensions**.
* **Disabled:** `opacity: 0.5`, greyscale filter, `cursor: not-allowed`, no shadow shift.
* **Success/Error:** Temporary feedback styles driven by `--text-success` / `--text-error` tokens (e.g., the Final CTA submit flips to a mint success state with a `check_circle` icon).
* **Danger:** `.btn--danger` uses vivid red `#FF3333` with near-black text, visually distinct in **both** themes.

### 2.2 Card Component Requirements
Applies to Feature cards, Testimonial cards, and Pricing tiers (`.card`):

* **Default:** Flexbox column layout, `--bg-secondary` surface, 3px solid border, `--shadow-sm`, `--radius-md` (0px).
* **Hover:** `transform: translateY(-2px)` plus a subtle tilt up to `3deg` maximum (playful but usable); shadow grows to `--shadow-md`. Decorative corner shapes on cards may rotate the full **5–15deg** on hover.
* **Focus-within:** Card border shifts to `--secondary` when a child link/button receives focus.
* **Loading (Skeleton):** Define shimmer animation classes in CSS (gradient sweep) so any async content slot never causes layout jumps.
* **Empty State:** Define a reusable fallback pattern — large Google Material Symbol + short guidance text — available if any dynamic slot renders nothing.

### 2.3 Form & Input Requirements (Final CTA email capture)
* **States — all styled:** Empty, Focused (thick accent outline ring), Filled, Valid (mint border + `check_circle` icon), Invalid (`--border-error`, red helper text + `error` icon), Disabled, Read-only.
* **Structure:** `.input-group` as a flex container wrapping: `<label>`, the `<input>`, and a dedicated error feedback element with `aria-live="polite"`. Errors must be communicated by text + icon, **never color alone**.

### 2.4 FAQ Accordion (Custom Widget) & Overlay Rules
* **Accordion:** Each FAQ item = a `<button>` (with `aria-expanded` and `aria-controls`) + a content region (`role="region"`, `aria-labelledby`). The chevron (Material Symbol `expand_more`) rotates 180° via CSS transition. Open/close animated in pure CSS (e.g., `grid-template-rows: 0fr → 1fr`). Fully keyboard operable; no mouse-only interactions.
* **Modals:** Not required for this page. If any overlay is introduced (e.g., a mobile menu panel), it must follow modal rules: backdrop, `Esc` to close, overlay-click close, focus trapping, and animated open/close via CSS transitions.

---

## 3. CORE UX & MICRO-INTERACTION RULES (Memphis Motion Language)

* **Responsive by Default:** Fluid type and spacing; no horizontal overflow at any width.
* **Memphis Motion:** Apply pop-in entrance animations (`scale(0.9) rotate(-4deg) → scale(1) rotate(0)` with a slight overshoot ease) to sections and cards on scroll-in, staggered floating/wobble on decorative shapes, and **5–15deg playful rotation on hover for decorative geometric elements** (buttons/cards cap at 3deg for usability). All motion uses `transition: var(--transition-normal)` and **must be fully disabled under `prefers-reduced-motion`**.
* **Accessibility (a11y):** WCAG AA contrast in both themes; never rely on color alone for state; semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`); correct ARIA on the accordion, theme toggle, and any custom widget; logical DOM/focus order; full keyboard operability; `aria-live` regions for form feedback. All decorative shapes: `aria-hidden="true"`, `pointer-events: none`, and layered below content via z-index tokens.
* **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
* **Destructive Actions:** Any delete/danger action is visually distinct in both themes via `.btn--danger`.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **File Structure:** Three separate files — `index.html`, `style.css`, `script.js`. The HTML contains exactly **one** `<script>` tag, `defer`-red, pointing at `script.js`. No inline `<script>` blocks, no inline styles.
* **Naming Convention:** **BEM** (`block__element--modifier`) exclusively across HTML classes and CSS. Never mix conventions.
* **Copy:** Write all user-facing copy in **English** with an energetic, fun, bold Memphis brand voice. Invent a coherent fictional brand (product name, tagline, feature names, testimonial personas, pricing plan names, FAQ questions). **No lorem ipsum** — every section ships with real, themed copy.

---

## 5. PAGE BUILD SPEC — SECTION BY SECTION

1. **Sticky Header:** Brand wordmark (two-tone Poppins 900), anchor links (Features, How It Works, Testimonials, Pricing, FAQ), the **dark-mode toggle** (per 1.3), and a hamburger (Material Symbol `menu`) that opens a keyboard-accessible slide-down panel on mobile.
2. **Hero:** Dotted-pattern background (CSS `radial-gradient` repeat) plus scattered decorations — CSS triangles (`clip-path: polygon()`), circles (`border-radius: 50%`), zigzag strips, and squiggles (per the 1.6 exception) — all `aria-hidden`. Oversized Poppins 900 headline with per-word accent colors applied via classes, subheadline, two CTAs (`.btn--primary` + `.btn--outline`), and a rotated "sticker" badge. Staggered pop-in on load.
3. **Features (3 cards):** Section heading with a squiggle underline; three `.card`s, each with a rotated colored icon tile (Material Symbol), title, and description — each card using a different palette accent (pink / blue / yellow family).
4. **How It Works (3 steps):** Three numbered circles (thick borders, alternating accent colors) connected by a dashed/zigzag CSS line; step title + text; vertical stack on mobile.
5. **Testimonials:** Three quote cards with star ratings (Material Symbol `star`, plus `aria-label="Rated 5 out of 5"`), quote, avatar rendered as a CSS accent-colored circle with bold initials (**no external images**), name and role. Alternating accent borders.
6. **Pricing (3 tiers):** Three `.card`s; the middle tier is the highlighted plan with a rotated hot-pink "MOST POPULAR" sticker badge, distinct background, and slight scale/elevation. Each tier: plan name, large price, feature list with `check` icons, and a full-state `.btn` CTA (popular tier uses `.btn--primary`, others `.btn--outline`).
7. **FAQ:** Accordion per **2.4** — 5–6 real Q&A items, thick-bordered, chevron rotation, animated expansion.
8. **Final CTA:** Full-width bold band (electric blue or hot pink fill with a subtle pattern overlay, correct text pairing per 1.2), headline, and the email capture form per **2.3** with client-side validation, a simulated loading state (~1s), and a success state announced via `aria-live`.
9. **Footer:** Contrasting band; brand + tagline, 2–3 secondary link columns (Product / Company / Support), social icon buttons (Material Symbols with focus rings), and a copyright line. Link hover: accent color shift + underline.

---

## 6. JAVASCRIPT REQUIREMENTS (`script.js` only)

* **Theme toggle:** Read `localStorage` → fall back to `prefers-color-scheme` → toggle `.dark` on `<html>`, swap the Material Symbol, and sync `aria-pressed`/`aria-label`.
* **Accordion:** Toggle `aria-expanded` and the open class per FAQ item.
* **Reveal animations:** `IntersectionObserver` adds an `.is-visible` class for pop-ins; fully skipped when `prefers-reduced-motion` is set.
* **Form:** Validate the email (regex), render valid/invalid states per 2.3, simulate submit loading → success with `aria-live` announcement.
* **Navigation:** Smooth anchor scrolling (respecting reduced motion) and the mobile menu panel toggle.
* No other JavaScript. No external JS libraries. Keep the script minimal, commented, and organized by feature.

**Output the complete final code for `index.html`, `style.css`, and `script.js` now — fully styled, fully responsive, dark-mode-ready, accessible, and true to the Memphis aesthetic — in a single response.**
