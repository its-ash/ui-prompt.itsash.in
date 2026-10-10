# SYSTEM PROMPT — CODING AGENT: "BLUEPRINT / ENGINEERING" LANDING PAGE

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce a complete, production-ready, single-page Landing Page in **one response** — no TODOs, no partial code, no lorem ipsum. The page must run in a modern browser by opening `index.html`.

**Theme:** Blueprint / Engineering — technical precision, white lines on blueprint blue, drafting grid overlays, dimension markers, architectural symbols, semi-circular timeline arcs, flat vector iconography, engineering-draft aesthetics, flat uniform technical lighting.

**Sections (in this exact order):** Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.

**Dual-Mode Concept (mandatory):**
- **Light mode = "Drafting Paper":** light blue-grey paper background, blueprint-blue technical lines, dark slate text.
- **Dark mode = "Classic Blueprint":** `#1E5DA2` blueprint-blue canvas, pure white technical lines, white text.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling must live in a dedicated `style.css` file. **The `style="..."` attribute is forbidden anywhere in the HTML.**
- All design properties, layout rules, and states must be targeted via class or ID selectors.
- HTML must remain clean, semantic, and styling-agnostic. The drafting grid, dimension markers, technical lines, and corner crosshairs must be CSS-driven (`repeating-linear-gradient`, borders, `::before`/`::after` pseudo-elements) — never extra presentational markup.

**1.2 CSS Variables & Theme Tokens**
Store every visual token in `:root` and override in `.dark`. Use exactly this token set (values may be fine-tuned only if WCAG AA contrast is preserved):

```css
:root { /* Light mode — "Drafting Paper" */
  --primary: #1E5DA2;
  --secondary: #5B9BD5;
  --bg-primary: #EEF3F9;
  --bg-secondary: #FEFEFE;
  --text-primary: #2E4053;
  --text-secondary: #52657A;
  --text-success: #1F7A3D;
  --text-error: #B3261E;
  --border-default: rgba(30, 93, 162, 0.45);
  --border-error: #B3261E;
  --border-success: #1F7A3D;
  --line-technical: #1E5DA2;
  --grid-line: rgba(30, 93, 162, 0.08);
  --accent-light: #A8D5FF;
  --btn-primary-bg: #1E5DA2;
  --btn-primary-text: #FFFFFF;
  --btn-secondary-text: #1E5DA2;
  --radius-sm: 2px; --radius-md: 4px; --radius-lg: 6px;
  --shadow-sm: 0 1px 2px rgba(46, 64, 83, 0.10);
  --shadow-md: 0 6px 16px rgba(46, 64, 83, 0.14);
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms; --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --z-dropdown: 1000; --z-modal: 2000; --z-toast: 3000;
  --font-technical: 'IBM Plex Mono', monospace;
  --font-base: 'Inter', sans-serif;
}

.dark { /* Dark mode — "Classic Blueprint" */
  --bg-primary: #1E5DA2;
  --bg-secondary: #17497F;
  --text-primary: #FFFFFF;
  --text-secondary: #C9E4FF; /* #A8D5FF is reserved for large labels/accents only */
  --text-success: #9CE8B5;
  --text-error: #FFDAD6;
  --border-default: rgba(255, 255, 255, 0.45);
  --border-error: #FFDAD6;
  --border-success: #9CE8B5;
  --line-technical: #FFFFFF;
  --grid-line: rgba(255, 255, 255, 0.10);
  --btn-primary-bg: #FEFEFE;
  --btn-primary-text: #17497F;
  --btn-secondary-text: #FFFFFF;
  --shadow-sm: 0 1px 2px rgba(10, 25, 45, 0.40);
  --shadow-md: 0 6px 16px rgba(10, 25, 45, 0.50);
}
```

- **Contrast pairing is mandatory in every theme:** light background tokens pair with dark text tokens; dark background tokens pair with light text tokens. All text/background pairs must meet WCAG AA (4.5:1 normal text, 3:1 large text) in both modes.
- Never use `#ffffff` as a background; use `#fefefe` where a near-white surface is required.
- Blueprint character: sharp corners (`--radius-*` of 2–6px), flat/subtle shadows, 1px solid technical borders.

**1.3 Mandatory Dark Mode**
- Define dark tokens under both a `.dark` class on `<html>` and an `@media (prefers-color-scheme: dark)` fallback. Theme switching must require **zero HTML restructuring**.
- Place a visible toggle in the header: Google Material Symbol icons (`light_mode` / `dark_mode`), correct `aria-pressed` state, and a dynamic `aria-label` ("Switch to dark theme" / "Switch to light theme").
- Persist the user's choice in `localStorage` (e.g., key `blueprint-theme`); fall back to `prefers-color-scheme` on first visit.
- **Explicit exception:** a single one-line inline script in `<head>` that applies the stored/preferred theme class before first paint (to prevent a flash of wrong theme) is the ONLY permitted inline script.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox (`display: flex` / Tailwind flex utilities).
- **Every flex container must default to `align-items: center`** unless there is an explicitly justified exception (e.g., card body stacking content top-aligned).
- Mobile-first: rows convert to columns below 768px; no horizontal scrolling at any viewport width; use a max-width container (e.g., 1200px) with fluid side padding.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (Play CDN) for layout/spacing utilities. **All visual design — colors, borders, shadows, states, animations — must live in `style.css`** as reusable component classes (`.btn`, `.card`, `.input-group`, etc.) that reference the CSS variables above. Never hardcode hex values inside component classes.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load via Google Fonts `<link>` tags: **IBM Plex Mono** (400–700) as `--font-technical` for headings, nav, labels, prices, and dimension markers (uppercase, letter-spaced), and **Inter** (400–600) as `--font-base` for body copy.
- Load **Google Material Symbols (Outlined)** for all icons. Suggested set: `architecture`, `straighten`, `square_foot`, `design_services`, `precision_manufacturing`, `grid_on`, `timeline`, `engineering`, `verified`, `check_circle`, `cancel`, `arrow_forward`, `expand_more`, `menu`, `close`, `light_mode`, `dark_mode`, `person`, `star`, `progress_activity`.
- **Raw inline SVGs and local icon files are forbidden for icons.** — *Explicit exception:* inline SVG is permitted **solely for decorative technical drawings** (hero schematic, timeline arcs) that require `stroke-dasharray` line-drawing animation. Such SVGs must be `aria-hidden="true"`, purely presentational, and never used as functional icons.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component (`.btn` + BEM variants)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; mono uppercase label; sharp corners; 1px solid border.
- **Hover:** brightness/shadow shift with `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring built from CSS variables (`outline` or `box-shadow`) — never remove focus styling without replacement.
- **Active/Pressed:** `transform: scale(0.97)` click feedback.
- **Loading (`.btn--loading`):** disables interaction, prevents double-clicks, renders a rotating Material Symbol `progress_activity` (or CSS spinner) **without changing button dimensions**.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error (`.btn--success`, `.btn--error`):** temporary feedback states driven by `--text-success` / `--text-error`, announced via an `aria-live` region.
- Variants: `.btn--primary` (filled), `.btn--secondary` (outlined, transparent), `.btn--ghost`, `.btn--danger` (visually distinct in both themes).

**2.2 Card Component (`.card`)**
- **Default:** flexible flexbox layout, `--bg-secondary` surface, 1px solid `--border-default`, `--radius-md`, `--shadow-sm`.
- **Hover (interactive cards only):** `transform: translateY(-2px)` and shift to `--shadow-md`.
- **Focus-within:** card border highlights when a child link/button receives focus.
- **Loading (Skeleton):** shimmer animation defined purely in CSS to prevent layout jumps.
- **Empty State:** structured fallback with a Google Icon and clear guidance text.
- Apply to Feature cards, Testimonial cards, and Pricing cards. Pricing adds a `.card--featured` variant with a dimension-marker-style "MOST POPULAR" badge.

**2.3 Form & Input Requirements (`.input-group`)**
- Structure: flex container wrapping a `<label>`, the input, and a dedicated error-feedback element with `aria-live="polite"`.
- **States (all CSS-class driven):** Empty, Focused (2px outline ring using `--primary`), Filled, Valid (`--border-success` + `check_circle` icon), Invalid (`--border-error`, error text + `cancel` icon, message announced in the live region), Disabled, Read-only.
- Never rely on color alone — pair every valid/invalid state with an icon and text.

**2.4 Modal / Popup Requirements (`.modal`)**
- Triggered by the header CTA and Pricing CTAs ("Request Demo").
- **States:** Opening, Open, Loading (submit), Success/Error, Closing — all animated via CSS transitions.
- Centered flex container (`align-items: center; justify-content: center`), backdrop overlay using a darkened `--bg-primary`, `--z-modal` stacking.
- Google Icon `close` button (44×44px, `aria-label="Close dialog"`), `role="dialog"` + `aria-modal="true"`, keyboard focus trapping, close via `Esc` and backdrop click, focus returned to the trigger on close, body scroll locked while open.

**2.5 FAQ Accordion (Disclosure)**
- Each item: a `<button>` with `aria-expanded` + rotating `expand_more` icon, controlling an answer region labelled by the button.
- Collapsed/expanded height transition via CSS; hover and `:focus-visible` states; fully keyboard operable; respects `prefers-reduced-motion`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

**3.1 Blueprint Visual Effects & Motion**
- **Drafting grid overlay:** a fixed, full-viewport, `pointer-events: none` layer behind content, built with `repeating-linear-gradient` (minor grid ~24px, major grid ~120px) using `--grid-line`. Fade in on page load (opacity 0→1, ~600ms).
- **Line-drawing animations:** decorative SVGs (hero schematic, timeline arcs) animate via `stroke-dasharray`/`stroke-dashoffset` from hidden to drawn when scrolled into view — an `IntersectionObserver` adds an `.is-drawn` class; CSS performs the animation.
- **Dimension marker reveals:** measurement annotations (e.g., "1440 UNITS", "SCALE 1:1", "REV A") built from 1px CSS lines with pseudo-element arrowheads and mono uppercase labels; they fade/slide in on scroll.
- **Semi-circular timeline:** How It Works steps connected by half-circle arcs (decorative SVG per the 1.6 exception, or CSS half-borders); arcs draw in on scroll; on mobile they collapse gracefully to a vertical dashed connector.
- **Section transitions:** technical precision — fade + slight `translateY`, `var(--transition-normal)`, staggered per element.
- **`prefers-reduced-motion`:** all transforms and draw animations reduce to simple opacity fades or are removed entirely.

**3.2 Responsive by Default**
- Fluid sizing (`clamp()` typography), standard breakpoints, zero horizontal overflow, no mouse-only interactions.

**3.3 Accessibility (a11y)**
- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), a skip-to-content link, logical `h1→h3` hierarchy, logical DOM/focus order, full keyboard operability, correct ARIA roles/labels on all custom widgets (toggle, accordion, modal, mobile menu), `aria-live` regions for dynamic feedback (form errors, loading, success), and AA contrast in both themes. Never communicate state by color alone.

**3.4 Mandatory Visual Feedback**
- Every click, hover, and submission must trigger a visible state change (`transition: var(--transition-normal)` on all state changes).

**3.5 Destructive Actions**
- Any `.btn--danger` / delete-style action must be visually distinct in both light and dark themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

**4.1 File Structure**
- Separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond the single deferred `script.js` entry point — plus the one-line theme-init snippet explicitly permitted in 1.3.

**4.2 Naming Convention**
- Use **BEM** (`block__element--modifier`) consistently across HTML, CSS, and JS hooks. Never mix conventions.

**4.3 Copy Requirements**
- Write realistic, on-theme **English** copy for a fictional precision-engineering product (invent a fitting brand name). Lorem ipsum is forbidden. All code comments in English.

---

## 5. PAGE STRUCTURE & SECTION SPECIFICATIONS

**5.0 Global Shell & Navigation**
- Sticky header: logo (Material Symbol `architecture` + mono wordmark), anchor links (Features, How It Works, Testimonials, Pricing, FAQ), theme toggle, and a `.btn--primary` "Request Demo" opening the modal. Smooth-scroll anchors with `scroll-margin-top`. Mobile: hamburger (`menu`/`close` icons) toggling a slide-down panel (`aria-expanded`, `--z-dropdown`), fully keyboard accessible.

**5.1 Hero**
- Full-viewport-height section on the drafting grid: mono kicker label, `h1` in `--font-technical`, subhead, two CTAs (`.btn--primary` "Start Building" → scrolls to Pricing; `.btn--secondary` "View Documentation"), dimension markers flanking the headline, corner crosshair marks, and a decorative animated SVG blueprint schematic (e.g., isometric structure/bridge/gear) that draws itself on load.

**5.2 Features (3 cards)**
- Section header with mono kicker, `h2`, and a dimension-line underline. Three `.card`s: Material Symbol icon inside a bordered technical square, mono `h3`, body text, and a small "spec" footer line. Hover elevation + focus-within per 2.2.

**5.3 How It Works (3 steps)**
- Three steps with numbered technical badges (01 / 02 / 03), each with an icon, `h3`, and text, connected by the semi-circular arcs specified in 3.1.

**5.4 Testimonials**
- Three `.card`s: star icons (`star`), quote, avatar (initials in a bordered circle or `person` symbol), name + role in mono. Subtle hover state.

**5.5 Pricing (3 tiers)**
- Three tiers with blueprint-flavored names (e.g., DRAFT / BLUEPRINT / FABRICATE): mono tier name, price, feature list with `check_circle` icons, and a CTA. Middle tier uses `.card--featured` with a "MOST POPULAR" dimension-marker badge and stronger border/elevation. CTAs open the demo modal with loading→success feedback.

**5.6 FAQ**
- 4–6 accordion items per spec 2.5, inside a bordered technical panel.

**5.7 Final CTA**
- Full-width inverted band (light mode: `--primary` blue panel with white text; dark mode: `#fefefe` panel with blueprint-blue text), `h2`, and an email-capture `.input-group` per 2.3 with a submit button showing loading→success states and `aria-live` confirmation.

**5.8 Footer**
- Multi-column: brand + tagline, secondary link columns (Product, Company, Resources), Material Symbol social icons, and a copyright line with a mono "REV A" version label. All links have hover and `:focus-visible` states.

---

## 6. EXECUTION DIRECTIVE

Output the complete `index.html`, `style.css`, and `script.js` in a single response, each file fully written and clearly labeled. The result must be a polished, accessible, dual-theme blueprint landing page that works on the first attempt.
