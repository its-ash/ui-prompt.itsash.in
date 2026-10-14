# CODING AGENT PROMPT — BUILD THE "NEON SIGN / TUBE" LANDING PAGE

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready landing page on the first attempt. The source specification is written in English below; all user-facing copy must be written in **English**.

---

## 0. PROJECT BRIEF & THEME DIRECTION

**0.1 Theme Identity — "Neon Sign / Tube"**
Translate heritage neon-tube signage to the web: glowing tube strokes on a dark ground, saturated pink/cyan/orange light bloom, subtle flicker and reflection, nightlife/retro/vivid mood. Bar and nightlife branding with synthwave crossover energy. The signature moves are (a) a layered `text-shadow` bloom (`--tube-text-glow`) on display headlines, and (b) a bright tube-stroke border plus `box-shadow` bloom (`--tube-stroke`) applied to the nav, primary buttons, and card borders.

**0.2 Brand & Copy**
Invent one coherent fictional brand for a **custom neon sign studio** (e.g., a studio that designs, hand-bends, and ships custom neon signs for bars, venues, and homes). Write **real, complete English copy** for every section — headlines, subcopy, feature descriptions, testimonials, pricing, FAQ answers, footer text. **Lorem ipsum is forbidden.** Tone: confident, vivid, nightlife-flavored, never corporate.

**0.3 Required Sections (in this order)**
1. **Sticky Nav** — pill-shaped tube-stroke container (per theme spec), brand wordmark in the display font with tube glow, anchor links (Features, How It Works, Pricing, FAQ), theme toggle, CTA button. On mobile: a Material `menu` icon button (proper `aria-expanded`/`aria-controls`) opening a dropdown panel at `--z-dropdown`.
2. **Hero** — badge chip, display headline in the display font with `--tube-text-glow` and a **flicker animation on exactly one accent word**, subcopy, two CTAs (primary scrolls to Pricing, secondary scrolls to How It Works), CSS-only decorative neon tube element (e.g., a glowing rounded tube ring or underline), radial-gradient light blooms (pink/cyan/orange, low opacity), and a subtle reflection gradient beneath the headline.
3. **Features** — exactly 3 cards, each with a Material icon inside a tube-stroke ring, a title, and 2–3 sentences of copy.
4. **How It Works** — exactly 3 steps with numbered tube-circle badges (01/02/03) connected by a glowing gradient tube line; each step has a title and copy.
5. **Testimonials** — 3 quote cards with 5-star ratings (Material `star` icons + accessible label), quote, name, role, and avatar rendered as **initials inside a neon-ringed circle** (no external images).
6. **Pricing** — 3 tiers with concrete prices, feature lists with Material `check` icons, the middle tier highlighted with an orange "Most Popular" badge (`.badge`), and a CTA per tier. Clicking a CTA triggers the button loading state (~1.2s) then a confirmation toast.
7. **FAQ** — 5 real questions (e.g., production time, indoor/outdoor use, power draw, custom logos, warranty) as native `<details>`/`<summary>` accordions with a rotating Material `expand_more` chevron. No modal.
8. **Final CTA** — email capture form (label + input + button) with full validation states and toast feedback.
9. **Footer** — brand blurb, 3 columns of secondary links (link to in-page anchors where a target exists; otherwise `href="#"` with descriptive accessible names), social links as Material icons, copyright line.

**0.4 Mode Validation Requirement**
The source specification declares no color modes and explicitly requires: **validate the design in both light and dark mode before delivering.** Dark is this theme's canonical expression; light is a fully tuned "dayglow" variant. Both are mandatory (see 1.3).

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 **CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. **The `style="..."` attribute is forbidden anywhere in the HTML.**
* Target every design property, layout rule, and state via class or ID selectors only.
* HTML must remain clean, semantic, and styling-agnostic: changing the site's look must require editing only `style.css`, never the markup.

### 1.2 **CSS Variables & Theme Tokens**
Store all tokens in `:root`, then override per mode. Use these **mandatory canonical names**, mapped to the theme palette (dark = canonical values):

* **Colors:** `--bg-primary: #0a0710` (dark ground), `--bg-secondary: #150e22` (surface), `--primary: #ff2ee0` (neon pink), `--secondary: #24f0ff` (cyan), `--text-primary: #fbeaff`, `--text-secondary: #c6a9d6`, `--border-default: rgba(255, 79, 216, 0.35)`, `--text-success: #24f0ff`, `--text-error: #ff3355`, `--border-success: rgba(36, 240, 255, 0.5)`, `--border-error: rgba(255, 51, 85, 0.5)`.
* **Supplementary theme tokens (allowed in addition):** `--bg-surface-strong: #1f1530`, `--glass-tube: #2a1e3d`, `--accent-orange: #ff9d2e`, `--radius-pill: 999px`, `--font-display: 'Pacifico', cursive`, `--tube-text-glow: 0 0 4px #fff, 0 0 12px var(--primary), 0 0 28px var(--primary), 0 0 48px rgba(255,46,224,0.5)`, `--tube-stroke: 2px solid var(--primary)`.
* **Error vs. primary:** `--text-error` must remain clearly distinguishable from the pink `--primary` in **both** modes.
* **Radius & shadows:** `--radius-sm: 6px`, `--radius-md: 14px`, `--radius-lg: 24px`; glow-bloom elevation per theme: `--shadow-sm: 0 0 6px rgba(255,46,224,0.55), 0 0 2px rgba(255,46,224,0.9)`, `--shadow-md: 0 0 18px rgba(255,46,224,0.55), 0 0 40px rgba(255,46,224,0.30)`, plus `--shadow-lg: 0 0 32px rgba(36,240,255,0.45), 0 0 70px rgba(255,46,224,0.30)`. Redefine reduced-alpha shadow variants for light mode.
* **Spacing & transitions:** `--spacing-gap: 16px` plus the `--space-1…--space-24` scale (4/8/12/16/24/32/48/64/96px); `--transition-fast: 150ms`, `--transition-normal: 250ms`, `--ease-standard: cubic-bezier(0.2, 0, 0, 1)`.
* **Elevation/stacking:** `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`.
* **Typography tokens:** `--font-base: 'Poppins', system-ui, sans-serif`; text scale `--text-xs` through `--text-5xl` per the theme spec.
* **Contrast pairing:** every light background token must pair with a dark text token and every dark background token with a light text token — enforced in **every** theme, not just the default.
* **Light mode ground:** never pure white. Use a pale lavender "dayglow" ground (suggested `--bg-primary: #f2ecfa`, `--bg-secondary: #fefefe`, `--bg-surface-strong: #f8f3ff`, `--glass-tube: #ece2f9`, `--text-primary: #241636`, `--text-secondary: #5d4b78`). Where a near-white is needed, use `#fefefe`, never `#ffffff`. In light mode, deepen neon hues used as text/border ink (suggested `--primary: #c90ea8`, `--secondary: #0890b0`, `--text-error: #c81e3c`, `--text-success: #067a92`) while keeping the vivid `#ff2ee0`/`#24f0ff` only inside glow shadow layers. Verify WCAG AA for all pairings before delivering.

### 1.3 **Mandatory Dark Mode Support**
* Define dark tokens under **both** `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`; define light tokens under the light media query and a `.light` class. Switching modes must require **zero HTML restructuring**.
* **Persistence:** store the user's choice in `localStorage`; on first visit fall back to `prefers-color-scheme`. The media-query-driven defaults prevent a flash of the wrong theme before the deferred script runs.
* **Toggle control:** a visible button in the nav with Material `dark_mode`/`light_mode` icons, correct `aria-pressed` state, and a descriptive `aria-label` (e.g., "Toggle dark mode"). The focus ring color must also flip per mode (white ring on dark, dark ring on light).

### 1.4 **Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox (Tailwind flex utilities or `display: flex`).
* **Every flex container defaults to `align-items: center`** (`items-center`) unless an exception is explicitly justified in a CSS comment.
* Mobile-first: rows convert to columns on small viewports; **horizontal scrolling is forbidden at every breakpoint**; all interactive targets are at least 44×44px.

### 1.5 **Framework Default & Tailwind CSS Integration**
* Use Tailwind CSS via the Play CDN `<script src="https://cdn.tailwindcss.com"></script>` for **layout, spacing, and responsive utilities only** (flex, grid, gap, padding, breakpoints).
* **All colors, fonts, radii, shadows, and effects must come from BEM component classes in `style.css` bound to CSS variables** — never from Tailwind color utilities. Do not add a `tailwind.config` inline script block.

### 1.6 **Typography & Icons (Google Fonts Mandatory)**
* Load **Poppins** (weights 400/500/600/700) as `--font-base` and **Pacifico** (400) as `--font-display` via Google Fonts `<link>` tags. **Exception clause:** the source stack lists `Futura` and `Brush Script MT`, which are not Google Fonts — drop them; Poppins and Pacifico (already in the source stack) take their place.
* Use **Google Material Symbols (Rounded)** for every icon (menu, close, dark_mode, light_mode, star, check, expand_more, error, check_circle, mail, arrow_forward, feature icons, person). **Inline SVGs and local icon files are forbidden.**

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 **Button Component**
Base `.btn`: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;`, pill radius, tube-stroke border with glow `box-shadow`, min 44×44px, `transition` on shadow/transform. Style **all** states via CSS classes:
* **Hover:** brightness/shadow shift plus `translateY(-1px)`, `cursor: pointer`.
* **Focus:** distinct `:focus-visible` ring using a mode-aware focus token.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading (`.is-loading`):** disables interaction and prevents double-clicks; renders a CSS spinner or rotating Material `progress_activity` icon; **button dimensions must not change**.
* **Disabled (`[disabled]`):** `opacity: 0.5`, greyscale filter, `cursor: not-allowed`, no transform, no glow.
* **Success/Error (`.is-success` / `.is-error`):** temporary feedback styles driven by `--text-success`/`--text-error` and matching border tokens.
* **Variants:** `.btn--primary` (pink tube stroke + pink glow), `.btn--secondary` (cyan tube stroke per theme spec base `.btn`). This page contains **no destructive actions — do not invent any**; if one were ever added, `.btn-danger` must be visually distinct in both themes.

### 2.2 **Card Component**
* **Default:** Flexbox layout, `--glass-tube` background, `1px solid var(--border-default)`, `--radius-lg`, glow `--shadow-sm`, generous padding.
* **Hover:** `transform: translateY(-2px)` and elevation/glow shift to `--shadow-md`.
* **Focus-within:** highlight the card border when any child link/button receives focus.
* **Loading (Skeleton):** define `.card--skeleton` shimmer animation in CSS that preserves layout dimensions.
* **Empty State:** define `.card--empty` with a Material icon and clear guidance text for reuse.

### 2.3 **Form & Input Requirements**
* **Structure:** `.input-group` flex container wrapping a `<label>`, the `.input` field, and a dedicated error feedback container (`.input-error`: Material `error` icon + message text, `aria-live="polite"`, wired via `aria-describedby`; input gets `aria-invalid="true"` when invalid).
* **States — all styled:** empty, focused (cyan ring via `box-shadow`), filled, valid (`.is-valid`: cyan border + `check_circle` icon), invalid (`.is-invalid`: error border, error icon, red message text), disabled, read-only.
* **Behavior:** the Final CTA form validates email in real time with English messages, shows inline error/success, and confirms success with a toast.

### 2.4 **Modal / Popup Requirements**
This brief requires **no modal** (FAQ = native accordions; feedback = inline + toast). If you add any dialog anyway, it must have: CSS-animated opening/open/closing states plus loading/success/error states, a centered flex container (`align-items: center`), backdrop overlay, Material `close` icon button, keyboard focus trapping, and closing via `Esc` or overlay click, layered at `--z-modal`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid sizing, breakpoints, zero horizontal overflow.
* **Smooth animations:** `transition: var(--transition-normal)` on all state changes; respect `prefers-reduced-motion` by disabling the flicker animation, glow pulses, transforms, and smooth scrolling.
* **Accessibility (a11y):** WCAG AA contrast in both light and dark modes; **never rely on color alone** (pair every error/success with an icon and text); semantic HTML5 elements; correct ARIA roles/labels on the theme toggle, mobile menu, and toast (`role="status"` / `aria-live`); logical DOM/focus order; full keyboard operability.
* **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change (button loading on pricing CTAs, toast confirmations, accordion expansion, hover glows).
* **Theme-specific motion:** a subtle neon flicker keyframe on one hero word (brief opacity/glow dips, long steady loop), a glow pulse on tube elements on hover, and radial light-bloom gradients — all CSS-only, all disabled under reduced motion.
* **Anchors:** smooth scroll (wrapped in `prefers-reduced-motion: no-preference`) with `scroll-margin-top` so the sticky nav never covers section headings.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **File structure:** separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond the single deferred entry point (`<script src="script.js" defer></script>`); external CDN references (Tailwind, Google Fonts, Material Symbols) in `<head>` are permitted.
* **Naming convention:** BEM only (`block__element--modifier`, e.g., `.btn--primary`, `.pricing-card__feature`) for all component classes, plus Tailwind layout utilities. **Never mix conventions.**
* **script.js scope:** theme toggle with `localStorage` persistence and `prefers-color-scheme` fallback; mobile menu open/close (Esc + link click, focus management); FAQ enhancement only (native `<details>` must work without JS); email validation with inline feedback; toast component at `--z-toast`; pricing CTA loading demo; smooth anchor scrolling. No other libraries.
* **Copy:** all user-facing copy in English, real and on-brand — no lorem ipsum, no placeholder text where content is specified in Section 0.3.
* **Final validation:** before delivering, verify both light and dark modes render correctly, all contrast pairings pass AA, no horizontal scroll exists at any width, and every interactive element is keyboard operable.
