# LANDING PAGE BUILD PROMPT — "MONOLITH — System Status"

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build the complete landing page on the first attempt. Write **all user-facing copy in English**. All class names, CSS variable names, and file names must be English/ASCII.

---

## 0. BUILD BRIEF & THEME DIRECTION

**Product concept:** "MONOLITH" — a system status / uptime observability platform for engineering teams. The page must read like a calm, precise, 2020s-contemporary data-visualization product: monolithic slab-like glass panels floating over a soft neumorphic gray canvas, with an "operational green" accent reserved exclusively for status semantics.

**Style keywords:** monolith, status, data visualization, animated, glass, translucent, gradient, blur, grid-layout, neumorphism, 3D/parallax, hover effects.

**Theme mode:** Light mode is the **default** theme (per the source spec). Dark mode remains **mandatory** as a fully supported secondary theme (Section 1.3), switchable via a visible toggle.

**Palette:**
- Primary: `#e9eaec` (canvas), `#1c1e24` (ink / dark surfaces), `#8a8f9a` (slate chrome — borders, grid lines, ornaments)
- Secondary: `#e4f0e4` (mint surface tint), `#2e7d32` (operational green), `#bcd9bc` (pale green)
- The palette contains no error red — derive one harmonized with the slate palette (`#b3261e` light / `#f2b8b5` dark).

**Signature effects:** `backdrop-filter` glass blur on translucent surfaces, neumorphic dual shadows on the gray canvas, blurred gradient "orbs" and a fine grid background pattern, 3D perspective tilt on the hero monolith dashboard, subtle scroll parallax, and keyframe-animated CSS-only data visualizations.

**Sections to build (in order):** fixed glass navbar (navigation scaffold hosting the theme toggle), Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ (accordion), Final CTA (email capture), Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- **No Inline CSS:** The `style="..."` attribute is forbidden. `<style>` blocks in HTML are forbidden.
- **Class/ID Selectors Only:** All design properties, layout rules, and states are targeted via class or ID selectors inside `style.css`.
- **Minimal HTML Modifications:** HTML must remain semantic, clean, and styling-agnostic — changing the site's look requires editing only `style.css`, never the markup.
- **No inline `<script>` blocks** are allowed beyond a single deferred entry-point reference (Section 4).

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Store every visual token in `:root` and theme classes. Components may reference **only** variables — no hardcoded hex outside token definitions.

Light theme (default):
```css
--font-display: 'Space Grotesk', sans-serif;
--font-base: 'Inter', sans-serif;
--primary: #1c1e24;            /* monolith ink — primary slab buttons */
--secondary: #2e7d32;           /* operational green — accents, focus rings */
--bg-primary: #e9eaec;          /* canvas — never pure white */
--bg-secondary: #fefefe;        /* elevated surface — use #fefefe, never #ffffff */
--bg-glass: rgba(254, 254, 254, 0.55);
--text-primary: #1c1e24;
--text-secondary: #4a4f5a;     /* derived dark slate; raw #8a8f9a FAILS AA as text */
--text-success: #256b2a;        /* AA-safe darkened green for small text */
--text-error: #b3261e;
--border-default: rgba(138, 143, 154, 0.35);
--border-success: #2e7d32;
--border-error: #b3261e;
--radius-sm: 8px; --radius-md: 14px; --radius-lg: 24px;
--shadow-sm: 5px 5px 12px rgba(28,30,36,0.10), -5px -5px 12px rgba(255,255,255,0.85);
--shadow-md: 10px 10px 24px rgba(28,30,36,0.14), -10px -10px 24px rgba(255,255,255,0.80);
--spacing-gap: 1.5rem;
--transition-fast: 150ms; --transition-normal: 300ms;
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--z-dropdown: 1000; --z-modal: 2000; --z-toast: 3000;
--blur-glass: 16px;
```

Dark theme tokens (see 1.3): `--primary: #e9eaec; --secondary: #66bb6a; --bg-primary: #1c1e24; --bg-secondary: #23262e; --bg-glass: rgba(35,38,46,0.55); --text-primary: #e9eaec; --text-secondary: #a9aeb8; --text-success: #8fd696; --text-error: #f2b8b5; --border-default: rgba(233,234,236,0.14); --border-success: #7fd486; --border-error: #f2b8b5;` with softened neumorphic shadows (`rgba(0,0,0,0.45)` / `rgba(255,255,255,0.04)`).

**Enforcement rules:**
- **Contrast Pairing:** Every light background token pairs with a dark text token and every dark background token with a light text token — in **both** themes. All text/background combinations must pass WCAG AA (4.5:1 normal text; 3:1 large text and non-text UI).
- `#8a8f9a` must **never** be used as a text color on light backgrounds — reserve it for borders, grid lines, and ornaments. `#e4f0e4` / `#bcd9bc` mint tints become translucent dark-green overlays (`rgba(102,187,106,0.12)`) in dark mode.
- Primary buttons invert cleanly: `background: var(--primary); color: var(--bg-secondary)` works in both themes via token swap.

**1.3 Mandatory Dark Mode Support**
- Define dark tokens under both a `.dark` class on `<html>` **and** `@media (prefers-color-scheme: dark)` as the no-preference base.
- **Theme Switching:** Background and text variables must flip seamlessly with no HTML restructuring; add smooth `background-color`/`color` transitions (`var(--transition-normal)`) on body and surfaces.
- **Persistence:** Store the user's choice in `localStorage` (e.g., key `monolith-theme`); first visit falls back to `prefers-color-scheme`. Apply the stored preference as early as possible in `script.js` (no inline pre-paint scripts — the `prefers-color-scheme` media query already prevents flash for system-preference users).
- **Toggle:** Visible sun/moon toggle (Google Material Symbols) in the navbar with correct `aria-pressed` and `aria-label`, a visible focus ring, and a minimum 44×44px touch target.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Every flex container defaults to `align-items: center` unless an exception is justified with a CSS comment (e.g., `align-items: stretch` for full-width card bodies).
- Use **CSS Grid** for macro layout (features/pricing/steps grids, footer columns) and **Flexbox** for component internals — matching the theme's `grid-layout` keyword.
- Mobile-first media queries; multi-column grids collapse to one column on small viewports (`grid-template-columns: repeat(auto-fit, minmax(...))`); **no horizontal scrolling at 320px**.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS or hand-authored custom CSS composed via Tailwind's `@layer` / `@apply` directives. Every utility must map back to CSS variables or generic reusable classes (`.btn`, `.card`, `.input-group`, `.glass-panel`, `.badge`). Never hardcode hex values in utilities.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- **Text:** Load **Space Grotesk** (display: headings, numerals) and **Inter** (body) via Google Fonts `<link>` with `preconnect`; bind them to `--font-display` and `--font-base`. Use fluid sizing via `clamp()`.
- **Icons:** Google Material Symbols (Outlined) via its stylesheet. **Raw inline SVGs and local icon files are forbidden.** Set `font-variation-settings` for weight/fill as needed.
- Decorative icons get `aria-hidden="true"`; icons conveying information carry an accessible label. All data visualizations must be built from HTML `div`s, CSS gradients, borders, and box-shadows — **no SVG, no canvas, no chart libraries**.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component (` .btn`, variants `.btn-primary`, `.btn-success`, `.btn-ghost`, `.btn-danger`)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, radius `var(--radius-sm)`, weight 600.
- **Hover:** Brightness/shadow lift with `cursor: pointer`.
- **Focus:** Distinct `:focus-visible` ring using `outline: 2px solid var(--secondary); outline-offset: 2px` — never remove outlines without replacement.
- **Active:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** Blocks interaction and double-clicks; renders a spinning Material Symbol or CSS spinner without distorting button dimensions (reserve width).
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error (`.is-success`, `.is-error`):** Temporary feedback driven by `--text-success` / `--text-error` (e.g., submit button shows a check briefly).
- **`.btn-danger`** must be visually distinct in both themes using error tokens.

**2.2 Card Component (`.card`, `.card--glass`)**
- **Default:** Glass slab — `background: var(--bg-glass)`; `backdrop-filter: blur(var(--blur-glass))` with `-webkit-` prefix and a solid `var(--bg-secondary)` fallback via `@supports`; 1px `var(--border-default)` border; `var(--radius-lg)`; `var(--shadow-sm)`; flex layout.
- **Hover:** `transform: translateY(-2px)` plus elevation shift to `--shadow-md`.
- **Focus-within:** Border highlights (`var(--secondary)`) when a child link/button receives focus.
- **Loading (skeleton):** `.skeleton` shimmer keyframe animation with identical final dimensions — no layout jumps; use on hero dashboard tiles during initial load.
- **Empty State (`.card--empty`):** Centered Material icon inside a neumorphic circle plus guidance text — used in the hero dashboard ("No incidents in the last 90 days").
- **Neumorphism a11y:** Embossed surfaces must always retain visible borders and labeled controls — never rely on embossing alone for affordance.

**2.3 Form & Input (`.input-group`, `.input`, `.field-error`)**
- **Structure:** Flex column wrapping `<label>`, the input field, and a dedicated error feedback container (`aria-live="polite"`).
- **States:** Empty; focused (outline ring); filled; valid (success border + check Material icon); invalid (error border, `aria-invalid="true"`, red message text + error icon); disabled; read-only.
- **Final CTA form:** Custom email validation (no page reload), inline messages, button loading → success transition, and an inline success confirmation using `--text-success`.

**2.4 Modal / Popup (mandatory spec for any dialog used)**
- **States:** Opening (fade + scale from 0.96), open, loading, success/error, closing — all animated via CSS transitions.
- **UX:** Fixed backdrop (`rgba(28,30,36,0.5)` + `backdrop-filter: blur(4px)`, `z-index: var(--z-modal)`); centered flex container (`align-items: center; justify-content: center`); Material "close" icon button with `aria-label`; `role="dialog"` + `aria-modal="true"`; keyboard focus trapping; return focus to trigger; close via `Esc` and overlay click.
- The **FAQ must be an accordion, not modals.**

**2.5 FAQ Accordion (`.faq-item`)**
- Each item: trigger `<button>` with `aria-expanded` and `aria-controls` + a panel animated via the `grid-template-rows: 0fr → 1fr` transition technique (no JS height math); chevron Material icon rotates 180°; fully keyboard operable; single-open behavior with smooth animation; panels remain readable if JS fails (`<noscript>` fallback or default-open rendering).

**2.6 Status & Data-Viz Components (CSS-only, theme-specific)**
- **`.status-pill`:** Pulsing green dot (box-shadow ripple keyframes) + "All Systems Operational" text — appears in hero and footer.
- **`.uptime-grid`:** 90 day-status bars built from divs, colored by tokens (success / error / slate); never color-only — each bar carries a text `title` and `aria-label` (e.g., "Day 42: degraded — 99.2% uptime").
- **`.sparkline` / `.metric-tile`:** Gradient line built with divs/clip-path with draw-in animation; metric tiles show label, count-up numeral (JS, reduced-motion-aware), delta arrow icon, micro sparkline.
- **`.gauge`:** Conic-gradient ring with mask, animating to value (used in Features).

**2.7 Navigation Bar (`.nav`)**
- Fixed glass bar: translucent `var(--bg-glass)` + `backdrop-filter` blur, hairline bottom border, `z-index: var(--z-dropdown)`.
- Left: "MONOLITH" wordmark in Space Grotesk + mini status dot. Right: theme toggle + compact primary CTA. Center: anchor links with smooth scroll (`scroll-margin-top` on sections).
- **Mobile:** Hamburger Material icon button (`aria-expanded` / `aria-controls`) opens a glass slide-down panel; stacked links; closes on link click or `Esc`; focus moves into the panel while open.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** Fluid `clamp()` typography, max-width ~1200px container, breakpoints at 768px and 480px, zero horizontal overflow at 320px.
- **Smooth Animations:** `transition: var(--transition-normal)` on all state changes; staggered entrance reveals via IntersectionObserver adding `.is-visible` (fade + 16px translateY). **Every animation, keyframe, and the JS parallax must be disabled or minimized under `@media (prefers-reduced-motion: reduce)`.**
- **3D/Parallax:** Hero monolith tilts via `perspective` + `rotateX/rotateY` transforms and flattens slightly on hover; blurred gradient orbs and the dashboard shift at different scroll rates (JS `requestAnimationFrame`) — all guarded by the reduced-motion media query.
- **Accessibility (a11y):** AA contrast in both modes; never rely solely on color for status (icon + text always); semantic landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`); one `h1` with logical heading order; skip-to-content link; full keyboard operability; visible focus everywhere; `aria-live` regions for form feedback and dynamic updates.
- **Mandatory Visual Feedback:** Every click, hover, toggle, accordion item, and submission triggers a visible state change.
- **Destructive Actions:** Any destructive control uses `.btn-danger` and is distinct in both themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** Separate `index.html`, `style.css`, `script.js`. Exactly one `<script src="script.js" defer></script>` before `</body>` — no other inline scripts, no `<style>` blocks, no `style=""` attributes. `script.js` is vanilla JS only: theme toggle + persistence, mobile nav, accordion, pricing billing toggle, form validation, scroll reveals, count-up numerals, parallax. No external JS libraries.
- **Naming Convention:** BEM only, consistently applied (`.hero`, `.hero__title`, `.card--glass`, `.btn--primary` style or `.btn-primary` — pick one form and keep it). A small generic set (`.container`, `.visually-hidden`) is permitted. Never mix conventions.
- **No Unrequested Placeholders:** Write realistic English copy for the fictional MONOLITH product — plausible metrics (e.g., 99.98% uptime, 40+ regions, <50ms check interval), believable testimonial names/roles/companies, and sensible pricing tiers. No lorem ipsum.
- All visuals are pure CSS (divs, gradients, shadows, Material Symbols) — no image assets required. Deliver all three files **complete and ready to run** by opening `index.html`.

---

## 5. PAGE SECTION SPECIFICATIONS

**5.1 Hero:** Two-column grid (~55/45) collapsing to one column. Left: eyebrow label, `h1` in Space Grotesk, subcopy, dual CTAs (`.btn-primary` "Start monitoring" + `.btn-ghost` "View live demo"), and a trust strip of three count-up metrics. Right: the **monolith dashboard** — a tilted glass slab (`perspective(1200px) rotateX(8deg) rotateY(-6deg)`) containing a header row with `.status-pill`, an uptime metric tile with sparkline, the 90-bar `.uptime-grid`, a regions list with status dots, a `.card--empty` "No incidents" row, and a caption. Background: fine grid pattern (1px `var(--border-default)` lines at 48px spacing, radially masked) plus blurred mint/green gradient orbs. Skeletons resolve to content on load; staggered entrance animations.

**5.2 Features (3 cards):** Section head pattern (slate letter-spaced eyebrow, `h2`, subcopy — reuse for every section). Three `.card--glass` items in a responsive grid, each with a Material icon, title, two-sentence copy, and a micro-viz: (1) Real-time monitoring — pulse dot + latency sparkline; (2) Incident timelines — CSS timeline viz; (3) SLA analytics — `.gauge` ring.

**5.3 How It Works (3 steps):** Numbered 01/02/03 in Space Grotesk with a gradient connector line (horizontal on desktop, vertical on mobile), Material icons per step, and short descriptions (connect endpoints → watch & alert → review analytics).

**5.4 Testimonials:** Three glass quote cards with `format_quote` Material icon (`aria-hidden`), neumorphic monogram avatar circles built from initials (no images), quote, name, role, and company.

**5.5 Pricing (3 tiers):** Three `.card--glass` tiers in a grid; the middle tier is elevated — green accent border, `var(--shadow-md)`, slight scale on desktop, and a "Most popular" badge pill. Monthly/annual toggle (segmented buttons with `aria-pressed`) that animates price updates and announces changes via `aria-live="polite"`; annual shows a "−20%" note. Feature lists use check Material icons; per-tier CTAs: primary on the highlighted tier, ghost on the others.

**5.6 FAQ:** Five to six accordion items (per 2.5) covering monitoring scope, alert channels, uptime calculation, data retention, self-hosting, and SLA reporting.

**5.7 Final CTA:** Full-width glass slab over a mint/green gradient backdrop: headline, subcopy, the email `.input-group` with a `.btn-primary` (all states per 2.1/2.3, inline success confirmation), privacy microcopy, and a small `.status-pill` reinforcing the theme.

**5.8 Footer with secondary links:** Four-column grid — brand block (wordmark, one-liner, mini status pill), Product links, Resources links, Company links. Bottom bar: © year, legal/secondary links (Privacy, Terms, Status, Security), and Material social icons with `aria-label`s. All links show hover feedback (underline/fade via `var(--transition-fast)`).
