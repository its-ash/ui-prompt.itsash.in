# System Prompt: Build "RALLY — pong, reconsidered" Landing Page

You are a Senior Frontend Engineer and Expert UI Designer. Build the complete landing page on the first attempt. All user-facing copy must be in **English**.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **No `style="..."` attributes in HTML.**
- Target everything via class/ID selectors only.
- HTML stays semantic and clean; theme changes require CSS edits only.

**1.2 CSS Variables & Theme Tokens**
Define in `:root`:
- Colors: `--primary: #f4f1ea; --secondary: #a39d8f; --bg-primary: #fdfcf8; --bg-secondary: #f4f1ea; --text-primary: #191713; --text-secondary: #a39d8f; --text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Contrast pairing: light backgrounds pair with `--text-primary` (dark); dark surfaces pair with light text — enforced everywhere.
- Radii/shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.
- Spacing/transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode**
- Define dark tokens under `@media (prefers-color-scheme: dark)` **and** a `.dark` class on `<html>`/`<body>` (dark background derived from `#191713`, light text `#fdfcf8`, muted `#a39d8f`).
- Theme toggle button in the nav with `aria-pressed` and `aria-label` ("Toggle dark mode"); persist choice in `localStorage`, fall back to `prefers-color-scheme`.
- No HTML restructuring needed to switch themes.

**1.4 Flexbox Layout & Mobile-First**
- Every flex container defaults to `align-items: center` unless justified otherwise.
- Mobile-first: sections stack into single columns on small viewports; **no horizontal scrolling** at any width.

**1.5 Framework**
- Use Tailwind CSS (CDN or CLI) or custom CSS with `@layer`/`@apply`; all utilities map back to the CSS variables above. Reusable classes: `.btn`, `.card`, `.input-group`, `.section`, `.container`.

**1.6 Typography & Icons**
- Google Fonts: **Space Grotesk** (display/headings) + **Inter** (body), bound to `--font-base` / `--font-display`.
- Icons: Google Material Symbols only. **No inline SVGs, no local icon files.**

---

## 2. THEME DIRECTION — "RALLY — pong, reconsidered"

- **Mood:** 2020s contemporary interactive/game aesthetic; playful but precise. Think a modern reimagining of Pong: bold monochrome type, generous whitespace, soft neumorphic surfaces.
- **Neumorphism:** On `--bg-primary`/`--bg-secondary` surfaces, use dual box-shadows (light top-left `#ffffff`-tinted, dark bottom-right `#191713`-tinted at low opacity) for raised cards, buttons, and the pricing cards. In dark mode, invert shadow tones.
- **Signature motif:** A subtle Pong-court divider line (dashed `--secondary` border) between sections; the hero features a decorative neumorphic "paddle & ball" composition built purely from CSS (divs with border-radius and shadows — no new images).
- **Aspect Ratio:** Use `aspect-ratio` for the hero decorative panel and testimonial avatars (1:1 circles).
- **Hover Effects:** Cards lift (`transform: translateY(-2px)` + shadow shift), buttons brighten, nav links underline-slide, pricing tier highlights with a `--secondary` ring.

---

## 3. REQUIRED SECTIONS (in order)

1. **Nav:** Logo wordmark "RALLY", links (Features, How It Works, Pricing, FAQ), theme toggle, CTA button.
2. **Hero:** Headline "Pong, reconsidered." + subcopy + two CTAs ("Play Now" primary, "Watch Rally" secondary) + neumorphic decorative panel.
3. **Features:** 3 neumorphic cards (e.g., "Instant Matchmaking", "Adaptive Difficulty", "Global Leaderboards") each with a Google Icon, title, description.
4. **How It Works:** 3 numbered steps in a flex row (stack on mobile), step number styled as a neumorphic badge.
5. **Testimonials:** 3 quote cards with circular avatar placeholders, quote, name/handle.
6. **Pricing:** 3 tiers (Casual / Rally Pro / Champion) — middle tier visually emphasized (ring + "Most Popular" badge). Each tier: price, feature list, CTA button.
7. **FAQ:** Use native `<details>`/`<summary>` styled via CSS (no JS needed), with a Material Symbols chevron that rotates on `[open]`.
8. **Final CTA:** Full-width dark band (`--text-primary` background, light text) with headline + button.
9. **Footer:** Logo, secondary link columns (Product, Company, Support), social icon links (Material Symbols), copyright line.

---

## 4. COMPONENT STATE SPECIFICATIONS

**Buttons (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger`)**
- Default: `display:flex; align-items:center; justify-content:center; gap:0.5rem;` min 44×44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: visible focus ring via `outline`/`box-shadow` using CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled interaction, CSS spinner (Material Symbols `progress` with rotation animation) without layout shift.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.

**Cards**
- Default: neumorphic raised surface on `--bg-secondary`.
- Hover: `translateY(-2px)` + shadow elevation.
- `:focus-within`: border highlight for keyboard users.
- Skeleton: shimmer animation class defined in CSS (not required on load, but available).

**Forms (newsletter signup in footer or final CTA)**
- States: empty, focused (ring), filled, valid (success border/icon), invalid (error border, `--text-error` message, error icon), disabled.
- Structure: flex `.input-group` wrapping label, input, error container with `aria-live="polite"`.

**Accessibility & Motion**
- Sufficient contrast in both themes; never color-only state signals (pair icons/text with color).
- Semantic HTML5 (`header`, `main`, `section`, `footer`, `nav`), logical focus order, full keyboard operability.
- All transitions use `var(--transition-normal)`; wrap animations in `@media (prefers-reduced-motion: no-preference)`.
- Every click/hover produces visible feedback.

---

## 5. DELIVERABLES

- **Files:** `index.html`, `style.css`, `script.js` (theme toggle + any minimal interactivity only; single deferred `<script src="script.js" defer>` — no inline script blocks).
- **Naming:** One consistent convention (BEM: `.feature-card__title`, `.feature-card--featured`) throughout — never mix conventions.
- **Copy:** Write real, on-theme English copy for all sections — no lorem ipsum.
- **Responsive:** No horizontal overflow at 320px–1920px; test both light and dark themes.
