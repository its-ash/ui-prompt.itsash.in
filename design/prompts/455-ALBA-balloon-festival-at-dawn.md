# Build Specification — ALBA: Balloon Festival at Dawn (Glassmorphism Landing Page)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality landing page on the first attempt — no partial output, no follow-up questions.

**Project:** Landing page for **"ALBA"**, a hot-air balloon festival at dawn. Visual language: **Glassmorphism**, 2020s Digital era (blurred translucent panels, layered dawn gradients, soft elevation, generous radii). **Sections required:** Sticky Header/Nav, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* Keep **all** styling in a dedicated `style.css` file. **Never** use the `style="..."` attribute anywhere in the HTML.
* Target every design property, layout rule, and state via **class or ID selectors only**.
* HTML must remain semantic and agnostic of visuals: re-theming the page must require touching only `style.css`, never the markup.
* Decorative visual elements (dawn-sky gradients, floating balloon orbs) must be CSS-generated — no external images, no background image URLs.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Define all tokens in `:root` (light mode is canonical) and override in `.dark` / `@media (prefers-color-scheme: dark)`. Required tokens:

* **Colors — Light Mode (canonical):**
  * `--primary: #6a5560` (deep mauve — primary action fills, paired with near-white text), `--primary-soft: #967f8a`, `--primary-alt: #7a5f6a`
  * `--secondary: #b06a7e` (dawn rose — accents, focus rings, badges), `--accent-peach: #e8a490`, `--accent-gold: #ffd9a0`
  * `--bg-primary: #f6ebe6` (warm dawn near-white — **never pure white**; use `#fefefe` only where a near-white surface is genuinely needed), `--bg-secondary: rgba(255, 250, 244, 0.55)` (glass surface tint)
  * `--text-primary: #3b2c33` (deep plum ink), `--text-secondary: #6a5560`
  * `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` — pick AA-compliant values for this palette (e.g., success ≈ `#2f7d5a`, error ≈ `#b3261e` in light mode; lighten both for dark mode).
* **Colors — Dark Mode (pre-dawn night):** deep plum backgrounds (e.g., `--bg-primary: #221922`, `--bg-secondary: rgba(64, 46, 58, 0.5)`), light text (`--text-primary: #f5ecef`, `--text-secondary: #c9b4bf`), glass borders `rgba(255,255,255,0.12)`, brightened peach/gold accents.
* **Contrast Pairing (mandatory in every theme):** every light background token pairs with a dark text token and vice versa. In dark mode, primary buttons invert to a light fill (e.g., `--accent-gold` or lightened mauve) with dark ink text — never dark text on a dark fill.
* **Glass tokens:** `--glass-bg`, `--glass-border`, `--glass-highlight`, `--glass-blur` (e.g., `16px`), `--glass-saturation`.
* **Radius & Shadows:** `--radius-sm: 10px`, `--radius-md: 18px`, `--radius-lg: 30px`, `--shadow-sm`, `--shadow-md` (add a soft layered `--shadow-glass` for glass panels).
* **Spacing & Transitions:** `--spacing-gap`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
* **Elevation/Stacking:** `--z-dropdown: 100`, `--z-nav: 900`, `--z-modal: 1000`, `--z-toast: 1100` — layered components must never collide.

**1.3 Mandatory Dark Mode Support**
* The source theme marks **Light as the default mode** — treat Light as the canonical first-paint presentation — but **Dark Mode is still mandatory and must be fully designed** as a "pre-dawn night" adaptation of the same palette (per tokens above).
* Provide dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`; all backgrounds and text must switch purely via variables, with **zero HTML restructuring**.
* Apply the stored theme as the **very first statements** of `script.js`: read `localStorage` key `"alba-theme"`; if absent, fall back to `prefers-color-scheme`; since Light is canonical, default to light when no preference exists.
* Include a **visible toggle** in the header (sun/moon Material Symbols icon) with correct `aria-pressed` state and `aria-label="Toggle dark mode"`, persisting the choice.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build every layout structure with **Flexbox** (`display: flex`). **Every flex container must default to `align-items: center`** unless an explicitly justified exception is documented (e.g., top-aligned step tiles).
* Mobile-first: single-column base; add breakpoints (≥640px, ≥900px, ≥1200px) that promote columns to rows. **No horizontal scrolling at any width** — use fluid widths, `min-width: 0` on flex children, `flex-wrap` where appropriate; never use `overflow-x: hidden` as a fix for layout bugs.

**1.5 Framework Default & Tailwind CSS Integration**
* Use **Tailwind CSS via the Play CDN** (`<script src="https://cdn.tailwindcss.com"></script>` in `<head>` — an external reference, not an inline logic block).
* Use Tailwind utilities **only for layout scaffolding** (flex, spacing, responsive utilities). All component styling lives in `style.css` inside `@layer components` (`.btn`, `.card`, `.input-group`, `.glass-panel`, …), driven by the CSS variables above. **Never hardcode hex values in utilities** — reference `var(--...)`.
* Enforce **one naming convention: BEM** (`.card`, `card__title`, `card--featured`, `btn--primary`, `is-loading` state classes). Never mix conventions.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Text: Google Fonts — **Poppins** (600/700) for display/headings bound to `--font-display`, **Inter** (400/500) for body bound to `--font-base`. Include via `<link>` with `preconnect` and `display=swap`.
* Icons: **Google Material Symbols (Rounded)** via the Google Fonts stylesheet, configured as a variable icon font (FILL, wght, opsz). **Explicitly forbidden: inline SVGs, emoji icons, local icon files.**
* Decorative icons get `aria-hidden="true"`; functional icons (close buttons, toggles) require accessible names.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component Requirements**
Style one `.btn` base — `display: flex; align-items: center; justify-content: center; gap: 0.5rem; min-height: 44px; min-width: 44px;` — with modifiers `.btn--primary` (mauve solid), `.btn--secondary` (glass/outline), `.btn--ghost`, `.btn--danger`, plus state classes:
* **Default:** flex layout per above; padding per size; `font-family: var(--font-base)`.
* **Hover:** brightness/elevation shift with `cursor: pointer` (`transition: var(--transition-normal)`).
* **Focus:** distinct ring via `box-shadow`/`outline` using `--secondary`; visible with `:focus-visible`.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading (`.is-loading`):** disables pointer events (prevents double-clicks), replaces label with a CSS spinner (animated ring or rotating Material Symbol) **without changing button dimensions**.
* **Disabled (`[disabled]`):** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`.
* **Success/Error (`.is-success` / `.is-error`):** temporary feedback styling driven by `--text-success` / `--text-error`, paired with an icon (never color alone).

**2.2 Card Component Requirements**
* **Default:** `.card` — flexbox glass surface (`backdrop-filter`, `--bg-secondary`, subtle `--border-default`, `--radius-md`).
* **Hover:** `transform: translateY(-2px)` + shift to `--shadow-md`.
* **Focus-within:** border highlights using `--secondary` when a child link/button is focused.
* **Loading (Skeleton):** `.card--skeleton` with a shimmer animation (gradient `background-position` keyframes) preserving exact final dimensions — no layout jumps.
* **Empty State:** `.card--empty` fallback layout with a Material Symbol and clear guidance text.

**2.3 Form & Input Requirements**
* Structure: `.input-group` flex column wrapping a `<label>`, the control, and a dedicated **error feedback container** (`aria-live="polite"`).
* States, all class-driven: **empty, :focus (outline ring via `--secondary`), filled, valid** (success border + check icon via `--border-success`), **invalid** (error border, error icon, error text colored `--text-error` — never color alone), **disabled**, **read-only**.

**2.4 Modal / Popup Requirements**
* One reusable booking modal: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, centered flex overlay (`align-items: center`) with blurred backdrop.
* **States:** opening, open, loading, success/error, closing — all animated via CSS transitions (opacity + `translateY`/scale).
* **UX:** focus trap in JS, close via `Esc` and overlay click, Material Symbol close button (`aria-label="Close"`), submit button enters `.is-loading`, then a success confirmation state with icon and message. Stack above everything at `--z-modal`.

**2.5 FAQ Accordion Requirements**
* Each item: `<button class="accordion__trigger">` with `aria-expanded` and `aria-controls`; panel with `role="region"` + `aria-labelledby`; `expand_more` icon rotating 180° on open.
* Height animation via CSS (grid `0fr → 1fr` technique or equivalent) with `transition: var(--transition-normal)`; fully keyboard operable; `:focus-visible` rings.

**2.6 Toast Requirements**
* A single bottom toast region with `aria-live="polite"` at `--z-toast`; success/error variants; auto-dismiss with exit transition; glass styling consistent with the theme.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid type via `clamp()`; fluid spacing; anchor targets offset with `scroll-margin-top` for the sticky header; CSS smooth scrolling disabled under `prefers-reduced-motion`.
* **Smooth animations:** `transition: var(--transition-normal)` on all state changes; entrance reveals via IntersectionObserver (fade + small translate). **Respect `prefers-reduced-motion`** — disable float loops, reveals become instant, transitions minimized.
* **Accessibility:** semantic HTML5 landmarks (`header`, `nav`, `main`, `footer`; each `<section aria-labelledby>`); one `h1`, logical heading order; a "Skip to content" link as the first focusable element; **AA contrast in both Light and Dark modes** — glass surfaces must remain readable over gradients (tint glass toward the text color as needed); **never rely on color alone** — pair every state with an icon and/or text; full keyboard operability; `aria-live` regions for form errors, toasts, and loading feedback.
* **Mandatory visual feedback:** every click, hover, toggle, and submission produces a visible state change.
* **Destructive actions:** define `.btn--danger` visually distinct in **both** themes (e.g., a "Clear selection" action inside the modal).
* **Decorative layers** (balloon orbs, sun glow) are `aria-hidden="true"` and `pointer-events: none`.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **Files:** `index.html`, `style.css`, `script.js`. `<head>` may reference only: Google Fonts links, Material Symbols stylesheet, Tailwind Play CDN. The **only** script reference is one `<script src="script.js" defer></script>` — no inline script blocks, no inline styles, no inline SVGs.
* **`style.css` ordering:** tokens (`:root`, `.dark`, media query) → base/reset → `@layer components` → component state classes → keyframes.
* **Naming:** BEM exclusively (`.card--featured`, `accordion__trigger`, `btn--primary`, `is-loading`).
* **Copy:** Write polished, final English copy throughout — on-theme (dawn, first light, wind, wonder). **No lorem ipsum.** All user-facing copy in English.
* **Self-contained:** no external images; avatars are initials over CSS gradients; all visuals are CSS gradients, filters, and blur.

---

## 5. ALBA-SPECIFIC BUILD SPECIFICATION

**5.1 Glassmorphism Visual Direction**
* Body background: fixed multi-layer **dawn gradient** (light: gold `#ffd9a0` → peach `#e8a490` → rose-mauve haze; dark: deep plum night with a faint horizon glow). This gradient sits behind everything; glass panels float above it.
* Glass surfaces: `backdrop-filter: blur(var(--glass-blur)) saturate(1.4)` with the `-webkit-` prefix; graceful fallback when unsupported (raise background alpha, keep borders).
* Decor: 3–5 slow-floating "balloon" orbs — blurred radial-gradient circles (`filter: blur(...)`, 8–14s alternating float keyframes) — plus a soft sun-glow radial near the hero horizon. All decorative, reduced-motion aware.
* Era styling: `--radius-lg` on major panels, layered soft shadows, gradient hairline borders on featured surfaces.

**5.2 Header:** Sticky glass navbar (`--z-nav`): "ALBA" wordmark, anchor links (Features, How It Works, Testimonials, Pricing, FAQ), theme toggle (Rule 1.3), and a "Get Tickets" `.btn--primary` opening the booking modal. On ≤640px, links collapse into an accessible disclosure (button + `aria-expanded` + panel); no overflow.

**5.3 Hero:** `min-height: 100svh` (with `100vh` fallback); centered glass panel with `h1` (e.g., "Rise with the sun."), supporting subhead, a meta line with Material Symbols (dates, location, admission), and two CTAs: `.btn--primary` "Reserve Your Dawn" (opens modal) and `.btn--secondary` "Explore the Festival" (anchor). Include a bouncing scroll-cue chevron (disabled under reduced motion).

**5.4 Features:** Three glass cards — suggested: **Sunrise Mass Launch** (`wb_twilight`), **Night Glow Spectacle** (`celebration`), **Festival Village** (`groups`). Icon in a glass circle, `h3`, 2–3 sentence copy. 1 column mobile → 3 columns ≥900px. Apply full `.card` state suite (Rule 2.2).

**5.5 How It Works:** Three numbered steps (**01 Pick your dawn · 02 Arrive before first light · 03 Lift off at sunrise**), each a glass tile with icon, `h3`, copy; gradient connector line on desktop, stacked on mobile.

**5.6 Testimonials:** Three glass cards with quote, avatar (initials over a gradient circle), name, and role. Demonstrate `.card--skeleton` shimmer briefly (~400ms) on first load before revealing, then settle with no layout shift.

**5.7 Pricing:** Three glass tiers — e.g., **Dawn Pass / Sky Pass / Alba VIP** — middle tier `.card--featured` with a gradient border and "Most Popular" badge (badge includes a star icon, not color alone). Each: tier name, price, per-person note, 4–5 features with check icons, CTA button opening the booking modal with the tier preselected (via `data-tier`). Stack on mobile.

**5.8 FAQ:** Five accordion items (Rule 2.5): weather/wind policy, refunds, accessibility, what to bring, parking & shuttles.

**5.9 Final CTA:** Wide glass panel with gradient glow; headline ("The sky is calling."), an email signup `.input-group` (label + input + submit `.btn--primary`, stacked on mobile). Client-side validation with `aria-live` error container; submit enters `.is-loading` (simulated ~1s async), then `.is-success` plus a success toast: "You're on the list — see you at first light."

**5.10 Footer:** `<footer>` with grouped secondary links (**Explore**: section anchors · **Info**: Safety Guidelines, Travel & Parking, Accessibility, Press Kit · **Legal**: Privacy, Terms), a contact line with Material Symbol icons, and `© 2025 ALBA Balloon Festival`. Social presence as plain text links (no SVG brand logos).

**5.11 `script.js` scope (single deferred file):** theme init/toggle/persistence (first statements); nav disclosure; accordion; modal open/close/focus-trap/Esc + simulated submit; email validation + async simulation + toast; testimonial skeleton timing; IntersectionObserver reveals. No frameworks, no other JS.

Build everything above in one complete pass.
