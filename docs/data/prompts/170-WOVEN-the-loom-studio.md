# CODING AGENT PROMPT — "WOVEN — The Lom Studio" Glassmorphism Landing Page

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality, single-page landing page for **WOVEN — the loom studio**, an artisanal weaving studio brand, on the first attempt. The visual language is **Glassmorphism (Glass & Soft UI)**: translucent frosted panels floating over layered warm gradients, backdrop blur, soft neumorphic shadows, and gentle hover motion — evoking threads of light passing through handwoven cloth. Era: 2020s Digital. Light mode is the primary presentation.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling must live exclusively in a dedicated `style.css` file. The `style="..."` attribute is **forbidden** anywhere in the HTML.
* All design properties, layout rules, and states must be targeted via class or ID selectors only.
* HTML must remain clean, semantic (header, nav, main, section, article, footer), and agnostic of visual styling — reskinning the page must require editing only `style.css`.

**1.2 CSS Variables & Theme Tokens**
Store every visual token in `:root` (and theme overrides) using CSS variables:

* **Color tokens (WOVEN palette):** `--primary: #1f1610` (deep espresso), `--secondary: #d49a4a` (ochre thread), `--bg-primary: #f2e6d0` (warm cream — never pure white; use `#fefefe` only if a near-white is unavoidable), `--bg-secondary: #e8dcc8`, `--text-primary: #1f1610`, `--text-secondary: #a08c6e`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Choose success/error hues that harmonize with the warm palette while passing contrast.
* **Glassmorphism tokens:** `--glass-bg`, `--glass-bg-strong`, `--glass-border`, `--glass-blur`, `--glass-saturate` — consumed by `backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate))` and semi-transparent `rgba()` backgrounds.
* **Neumorphism tokens:** `--shadow-raised` and `--shadow-pressed` (dual light/dark shadows derived from the cream base) for soft raised/inset surfaces.
* **Shape & depth:** `--radius-sm: 8px`, `--radius-md: 16px`, `--radius-lg: 24px`, `--shadow-sm`, `--shadow-md`, plus an accent `--shadow-glow` for highlighted elements.
* **Spacing & motion:** `--spacing-gap`, `--spacing-section` (fluid, e.g., `clamp()`), `--transition-fast`, `--transition-normal`, `--ease-standard`.
* **Elevation:** `--z-dropdown` (sticky header), `--z-modal`, `--z-toast` — layered components must never conflict.
* **Contrast pairing:** every light background token pairs with a dark text token and vice versa, enforced in **every** theme, not just the default.

**1.3 Mandatory Dark Mode Support**
* Dark mode **must always be defined**, provided both via `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
* **Exception clause:** the source style marks Light as the primary theme — light mode is the default presentation, but dark mode remains mandatory and must be implemented as a warm, low-luminance variant of the same palette (`--bg-primary: #2c1f14`, `--bg-secondary: #1f1610`, `--text-primary: #f2e6d0`, with `--text-secondary` lightened as needed to pass contrast). Glass tokens must flip to dark translucent surfaces (`rgba(31,22,16,…)` backgrounds, light hairline borders), and the ambient gradient blobs must deepen accordingly.
* Theme switching must require zero HTML restructuring. Persist the user's choice via `localStorage`, falling back to `prefers-color-scheme` on first visit, with a visible toggle control carrying correct `aria-pressed` / `aria-label` state and a Material Symbol icon.

**1.4 Layout: CSS Grid + Flexbox, Mobile-First**
* Use **CSS Grid** for macro layouts (hero split, feature/pricing/testimonial card rows via `repeat(auto-fit, minmax(…))`, footer link columns) and **Flexbox** for all component-internal layouts.
* Every flex container **must default to `align-items: center`** unless an exception is explicitly justified in a CSS comment.
* Build mobile-first: multi-column grids and rows collapse to single columns on small viewports; no horizontal scrolling at any width; fluid `clamp()`-based typography.

**1.5 Framework Default**
* Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives) unless another framework is requested. Layout utilities are permitted, but all glass/neumorphic effects and all colors must live in reusable component classes (`.btn`, `.glass-card`, `.input-group`) mapped back to the CSS variables above. Never hardcode hex values inside component rules.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load **Fraunces** (display serif — headings, wordmark) and **Inter** (body) from Google Fonts via `<link>` or `@import`, bound to `--font-display` and `--font-base`.
* Use **Google Material Symbols (Rounded style)** for every icon. Raw inline SVGs, local icon files, and emoji-as-icons are explicitly forbidden.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
Style all states via CSS classes (`.btn`, `.btn--primary`, `.btn--ghost`, `.btn--danger`):
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px. Primary uses `--secondary` background with `--primary` text; ghost uses glass surface.
* **Hover:** brightness/shadow lift with `cursor: pointer`.
* **Focus:** distinct visible ring built from CSS variables (`outline` / `box-shadow`) for keyboard navigation.
* **Active/Pressed:** `transform: scale(0.97)` feedback.
* **Loading:** disables interaction, prevents double-clicks, renders a CSS spinner or animated Material Symbol without changing button dimensions; set `aria-busy`.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`, never color-only (pair with icon/text).
* `.btn--danger` must be visually distinct in both light and dark themes.

**2.2 Glass Card Component**
The `.glass-card` is the workhorse of this design (features, testimonials, pricing, FAQ, CTA panel):
* **Default:** `backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate))`, `background: var(--glass-bg)`, 1px `--glass-border`, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-md)`. Provide an `@supports not (backdrop-filter…)` fallback with a more opaque background.
* **Hover (if interactive):** `transform: translateY(-2px)` plus shadow/border brightening.
* **Focus-within:** accent border highlight when a child link/button receives focus.
* **Loading (Skeleton):** CSS shimmer animation that preserves layout dimensions.
* **Empty State:** fallback layout with a Material Symbol and clear guidance text.

**2.3 Form & Input Requirements**
Used for the email capture (final CTA and/or footer newsletter):
* **States:** Empty, Focused (outline ring), Filled, Valid (success border + check icon), Invalid (error border, `--text-error` message, error icon), Disabled, Read-only.
* **Structure:** flex `.input-group` wrapping a `<label>`, the input, and a dedicated error feedback container wired with `aria-describedby` and an `aria-live="polite"` region.

**2.4 FAQ Accordion & Modal/Overlay**
* **FAQ accordion:** built from `<button>` triggers with `aria-expanded` / `aria-controls` and panels with `role="region"`; smooth expand/collapse via CSS (grid-rows or max-height technique); rotating chevron Material Symbol; fully keyboard operable.
* **If any modal/popup is used:** centered flex container (`align-items: center`), backdrop overlay, Material Symbol close button, keyboard focus trapping, `Esc` and overlay-click closing, CSS-animated opening/open/closing states, and loading/success/error states — layered at `--z-modal`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid sizing, responsive breakpoints, zero horizontal overflow.
* **Smooth animations:** `transition: var(--transition-normal)` on all state changes; respect `prefers-reduced-motion` by disabling transforms, shimmer, and parallax while keeping essential opacity feedback.
* **Accessibility:** ≥ 4.5:1 text contrast in both themes — glass panels behind text must be opaque enough to guarantee this; never rely on color alone to communicate state; semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, a skip link, and `aria-live` regions for dynamic feedback (form errors, toasts, loading).
* **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
* **Glassmorphism integrity:** the ambient background must always show layered warm gradients (radial blobs in `#d49a4a`, `#a08c6e`, `#f2e6d0`) so blur has something to refract; decorative elements (woven crosshatch textures, thread lines) must be CSS-generated via gradients/pseudo-elements — no external image dependencies. Use `aspect-ratio` where decorative panels or avatars need stable proportions.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
* **Naming:** one consistent **BEM** convention (`block__element--modifier`) across the entire deliverable — never mix conventions.
* **Copy:** write real, polished English copy for the WOVEN brand (warm, tactile, artisanal, confident). No lorem ipsum — placeholders are permitted only where content is genuinely unspecified.
* **Completeness:** deliver the full page in one attempt — no TODOs, no truncated sections.

---

## 5. PAGE SECTION BLUEPRINT — WOVEN, the loom studio

**5.0 Sticky Glass Header**
Wordmark "WOVEN" in Fraunces, nav links (Features, Process, Testimonials, Pricing, FAQ), theme toggle, and a primary "Book a Workshop" button. Frosted glass bar at `--z-dropdown`. On mobile, collapse links behind a Material Symbol hamburger opening a glass slide-down panel.

**5.1 Hero**
Full-viewport section over the layered gradient backdrop with a subtle woven crosshatch overlay. Eyebrow label ("The Loom Studio"), large Fraunces headline (e.g., "Threads of light, woven by hand."), supporting subcopy, dual CTAs (primary + ghost), and a scroll cue. Optional decorative loom/thread motif built purely from CSS gradients and borders.

**5.2 Features — 3 Glass Cards**
Grid row of `.glass-card`s: "Handwoven Goods," "Workshops & Classes," "Bespoke Commissions." Each card: Material Symbol icon inside a neumorphic circle, title, description, hover lift.

**5.3 How It Works — 3 Steps**
Numbered steps ("01 Choose Your Thread," "02 Warp the Loom," "03 Weave & Finish") with numbered badges connected by a dashed thread line on desktop, stacking vertically on mobile.

**5.4 Testimonials**
Grid of glass quote cards: quotation, star rating via Material Symbols, student/client name and role. Avatar circles may use CSS gradient initials with `aspect-ratio: 1`.

**5.5 Pricing — 3 Tiers**
"Thread" (single workshop), "Weave" (monthly membership — highlighted with a "Most Popular" badge, accent border/glow, and subtle scale), "Loom" (studio access / full commission). Each card: price, feature list with check icons, CTA button. The highlighted tier must remain distinct in dark mode.

**5.6 FAQ**
Accessible accordion (per 2.4) with 5–6 real questions: skill level, materials included, shipping, returns, gift options, class sizes.

**5.7 Final CTA**
Large glass panel over an intensified gradient: headline, subcopy, email capture form with full input states (per 2.3), primary button with loading → success feedback announced via `aria-live`.

**5.8 Footer**
Brand block with tagline, secondary link columns (Studio: About, Journal, Contact · Support: Shipping, Returns, Care Guide · Legal: Privacy, Terms), social icons (Material Symbols with `aria-label`), and copyright. Grid columns collapse to a single stack on mobile.
