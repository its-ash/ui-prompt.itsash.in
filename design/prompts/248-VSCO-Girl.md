# System Prompt: Build "VSCO Girl" Landing Page (2019 Summer Aesthetic)

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build a **complete, production-quality landing page on the first attempt**. Theme: **VSCO Girl** — the 2019 summer teen aesthetic (faded warm film-filter photos, scrunchies, Hydro Flasks, seashells, beige/teal beachy palette, casual, sunny, laid-back). Generate the full final code immediately, following every rule below.

**Sections to build:** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links — plus a sticky Navigation bar with theme toggle.

**Copy Locale:** All user-facing copy must be written in **English**. Write original, on-theme copy in the casual, sunny 2019 VSCO Girl voice (e.g., "golden hour", "save the turtles", "sksksk" used sparingly and tastefully). **No lorem ipsum.** Invent one coherent fictional product — a summer essentials kit brand (metal straws, Hydro Flask, scrunchies, puka shells) — and keep every headline, feature, testimonial, and FAQ answer consistent with it.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No Inline CSS:** The `style="..."` attribute is **forbidden** anywhere in the HTML.
* **Class Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors defined in `style.css`.
* **Minimal HTML Modifications:** HTML must remain clean and semantic; changing the site's look must only require editing `style.css`, never the markup.

### 1.2 CSS Variables & Theme Tokens
Store **all** visual tokens in `:root` using CSS variables. Use the mandatory token names below, seeded with the VSCO Girl palette:

```css
:root {
  /* Mandatory theme tokens */
  --bg-primary: #f3ece1;       /* warm beige page background */
  --bg-secondary: #fbf7f0;     /* sand surface */
  --primary: #6fa8a3;           /* soft teal */
  --secondary: #e8a598;         /* sun-faded coral */
  --text-primary: #4a4038;      /* warm cocoa */
  --text-secondary: #8a7c68;    /* muted taupe */
  --text-success: #4d8f88;
  --text-error: #c96a5e;
  --border-default: #d8c9ae;
  --border-success: #4d8f88;
  --border-error: #c96a5e;

  /* VSCO Girl extended tokens */
  --surface-strong: #ece2d0;
  --shell: #f0d9c0;
  --radius-sm: 10px; --radius-md: 18px; --radius-lg: 28px; --radius-pill: 999px;
  --shadow-sm: 0 2px 8px rgba(74,64,56,0.08);
  --shadow-md: 0 6px 18px rgba(74,64,56,0.12);
  --shadow-lg: 0 12px 32px rgba(74,64,56,0.15);
  --font-base: 'Poppins', 'Segoe UI', sans-serif;
  --font-display: 'Caveat', 'Poppins', cursive;
  --spacing-gap: 1rem;
  --transition-fast: 0.15s var(--ease-standard);
  --transition-normal: 0.25s var(--ease-standard);
  --ease-standard: cubic-bezier(0.3, 0, 0.2, 1);
  --z-dropdown: 100; --z-modal: 200; --z-toast: 300;

  /* Signature VSCO Girl effects */
  --faded-wash: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(232,165,152,0.15));
  --scrunchie-underline: 3px dashed var(--secondary);
  --film-grain-opacity: 0.05;
}
```

* **Contrast Pairing:** Every light background token pairs with a dark text token and vice versa — enforce this in **both** light and dark themes. Never pair `--primary` (`#6fa8a3`) as a button background with white text at below 4.5:1 contrast; instead define a darker `--primary-strong: #4d807b` for filled primary buttons in light mode (or use `--text-primary` on light teal). **Verify contrast numerically; do not assume.**
* **Light Mode Background:** Do not use pure white. Where a near-white is needed, use `#fefefe`, never `#ffffff`.
* **Border Radius, Shadows, Spacing, Transitions, Z-index:** Always consume the tokens above — never hardcode values that duplicate them.

### 1.3 Mandatory Dark Mode Support
The source specification does not declare color modes — **you must design and validate dark mode yourself before publishing.** Dark mode must keep the warm, beachy mood (deep warm cocoa-teal backgrounds, sand-colored text — never pure black or cold gray):

```css
/* Suggested dark tokens — verify contrast before shipping */
--bg-primary: #211d17;  --bg-secondary: #2b261e;  --surface-strong: #373026;
--shell: #3e352a;  --text-primary: #f3ece1;  --text-secondary: #b5a68f;
--primary: #8fc0bb;  --secondary: #f0b3a6;  --primary-strong: #8fc0bb;
--text-success: #7fc4bc;  --text-error: #e89488;
--border-default: #4a4038;  --border-success: #7fc4bc;  --border-error: #e89488;
--faded-wash: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(232,165,152,0.10));
/* shadows switch to rgba(0,0,0,0.4–0.6) equivalents */
```

* **Implementation:** Provide dark tokens under both `@media (prefers-color-scheme: dark)` (applied when `:root` has no explicit class) and a `.dark` class selector. Backgrounds and text must switch seamlessly via variables only — no HTML restructuring.
* **Persistence:** Persist the user's choice in `localStorage` (key e.g. `theme`), falling back to `prefers-color-scheme` on first visit. Render a visible toggle in the nav using a Google Material Symbol (`light_mode` / `dark_mode`) with correct `aria-pressed` and `aria-label` state, swapped via `script.js`.
* **Dark-mode filled buttons:** On dark backgrounds, filled primary buttons may use `--primary` (`#8fc0bb`) with dark text (`#1b2624`) — again, verify ≥ 4.5:1.

### 1.4 Flexbox Layout & Mobile-First Alignment
* Build every layout structure with **Flexbox** (`display: flex`).
* **Default Alignment Rule:** Every flex container must default to `align-items: center` unless there is an explicitly justified exception (document the exception in a CSS comment).
* **Mobile-First:** All multi-column rows (features, steps, pricing, footer link columns) must collapse to a single column on small viewports (≤ 768px). **No horizontal scrolling at any breakpoint** — use fluid widths, `clamp()` type scaling, and `min-width: 0` where needed.

### 1.5 Framework & Styling Approach
Use **clean custom CSS** driven by the token block above (no Tailwind, no CSS frameworks, no build step). Map utilities to generic reusable class names (`.btn`, `.card`, `.input`, `.badge`, `.nav`) and extend with BEM.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text Fonts:** Load **Poppins** (weights 400/500/600/700) for body text and **Caveat** (weights 500/600/700) for display headlines via Google Fonts `<link>` tags in `<head>`. Bind them to `--font-base` and `--font-display`. Use `--font-display` (Caveat) for the hero headline, section titles, and the logo wordmark; Poppins everywhere else.
* **Icons:** Use **Google Material Symbols** (e.g., `wb_sunny`, `beach_access`, `water_drop`, `eco`, `favorite`, `star`, `check_circle`, `expand_more`, `light_mode`, `dark_mode`) loaded via the official Google Fonts stylesheet.
* **Explicitly forbidden:** raw inline SVGs, local icon files, emoji used as icons, and icon fonts other than Material Symbols.

---

## 2. VSCO GIRL ART DIRECTION (SIGNATURE MOVES)

Apply these three signature treatments consistently across nav, cards, buttons, and hero — they are the theme's identity:

* **Faded Wash:** Every raised surface (`.nav`, `.card`, `.btn`, hero panel, pricing tiers) layers `background-image: var(--faded-wash)` over its background color, like a warm film filter.
* **Scrunchie Underline:** Links, badges, and card bottoms use `border-bottom: var(--scrunchie-underline)` (3px dashed coral). Use it for the FAQ chevron divider, section eyebrow labels, and the featured pricing tier.
* **Film Grain + Faded Photos:** Add a CSS-only grain overlay (a fixed pseudo-element using layered `repeating-radial-gradient` dots at `--film-grain-opacity`, `pointer-events: none`) over photo panels. Treat all photos with a faded warm film filter via CSS: `filter: saturate(0.85) contrast(0.95) sepia(0.18) brightness(1.05)` plus the `--faded-wash` overlay. If photos are used, source them from `https://picsum.photos/seed/<seed>/<w>/<h>` with meaningful `alt` text; otherwise build CSS-only decorative panels (shell-toned gradients + large Material Symbol motifs). Never use inline SVG illustrations.
* **Mood:** Casual, sunny, laid-back, generous whitespace, pill-shaped everything, soft shadows — never corporate, never sharp.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

### 3.1 Button Component (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`)
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` pill radius, `--faded-wash` overlay, minimum touch target **44×44px**, `cursor: pointer`.
* **Hover:** Brightness/shadow shift (`box-shadow: var(--shadow-md)`; subtle `translateY(-1px)`).
* **Focus:** Distinct `:focus-visible` ring using `outline: 2px solid var(--primary); outline-offset: 2px` — never remove it.
* **Active/Pressed:** `transform: scale(0.97)` feedback.
* **Loading:** `.btn--loading` disables pointer events, prevents double-clicks, and renders a **CSS-only spinner** (border-based rotating ring) or animated Material Symbol — button dimensions must not change.
* **Disabled:** `opacity: 0.5`, desaturated, `cursor: not-allowed`.
* **Success/Error:** `.btn--success` / `.btn--error` temporary feedback styles driven by `--text-success` / `--text-error` (used by the Final CTA form submit).
* **Destructive:** If any destructive/reset action exists, style it via `.btn--danger`, visually distinct in **both** themes.

### 3.2 Card Component (`.card`, variants: `.feature-card`, `.pricing-card`, `.testimonial-card`)
* **Default:** Flexible flexbox column layout, `--bg-secondary` background, `--faded-wash` overlay, `1px solid var(--border-default)` border, `--radius-lg`, `--shadow-md`, scrunchie-dashed bottom border.
* **Hover:** `transform: translateY(-2px)` and shadow elevation to `--shadow-lg`.
* **Focus-within:** Card border highlights (`--primary`) when a child link/button receives keyboard focus.
* **Loading (Skeleton):** Define `.skeleton` shimmer animation (gradient sweep, `prefers-reduced-motion`-safe) and apply it to the Features grid on initial page load via `script.js` (simulated ~800ms fetch, then swap in real content) to prevent layout jumps.
* **Empty State:** Define a `.empty-state` pattern (large Google Material Symbol + short guidance text) available for any dynamic region.

### 3.3 Form & Input (`.input`, used in Final CTA email capture)
* **States:** Empty, Focused (teal outline ring: `box-shadow: 0 0 0 3px rgba(111,168,163,0.25)`), Filled, Valid (`--border-success` + `check_circle` icon), Invalid (`--border-error`, error text in `--text-error`, `error` icon), Disabled, Read-only.
* **Structure:** Flex container wrapping a `<label>`, the `<input type="email">`, a dedicated error-feedback `<p>` bound with `aria-describedby`, and an `aria-live="polite"` status region announcing validation and submit results.
* **Never rely on color alone:** pair error borders with icon + text messages.

### 3.4 FAQ Accordion (accessible disclosure — no modals on this page)
* Each FAQ item is a `<button aria-expanded>` trigger (44×44px target, `expand_more` Material Symbol that rotates 180° on open) controlling a panel with `role="region"` and `aria-labelledby`.
* **Open/close animated** via CSS transition on `grid-template-rows` (or max-height) — smooth in both themes, disabled under `prefers-reduced-motion`.
* Fully keyboard operable (Enter/Space toggles), visible focus rings, multiple items may be open independently. No JS-free `<details>` styling shortcuts that break the animation or ARIA contract.

---

## 4. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** Fluid sizing, `clamp()` typography, zero horizontal overflow at every breakpoint from 320px up.
* **Smooth Animations:** `transition: var(--transition-normal)` on all state changes; wrap all motion (reveals, shimmer, spinner, accordion) in `@media (prefers-reduced-motion: reduce)` overrides that disable transform/transition motion.
* **Accessibility (a11y):** ≥ 4.5:1 text contrast in **both** light and dark modes (verify numerically). Semantic HTML5 landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`), exactly one `<h1>`, logical heading hierarchy, a skip-to-content link, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback (form errors, submit status, theme change), and icon-only controls (theme toggle, social links) carrying `aria-label`.
* **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
* **Scroll behavior:** Anchor navigation uses smooth scrolling that respects `prefers-reduced-motion`; the active nav link is visually indicated.

---

## 5. PAGE STRUCTURE & SECTION SPECIFICATIONS

* **5.1 Navigation (sticky):** Pill-shaped `.nav` per the signature style — Caveat logo wordmark, anchor links (Features, How It Works, Pricing, FAQ), theme toggle, and a small `.btn--primary` CTA. On ≤ 640px, collapse links behind a hamburger disclosure button (`aria-expanded`, animated panel, `--z-dropdown` stacking) — never overflow or wrap awkwardly.
* **5.2 Hero:** Badge ("Summer 2019, revived"), Caveat display headline, one-sentence value proposition, primary CTA ("Get the kit") + ghost CTA ("See how it works"), and a film-filter photo/decorative panel with grain overlay. Headline and CTAs in a flex row on desktop, column on mobile.
* **5.3 Features (3 cards):** Three `.feature-card`s with Material Symbol icons — e.g., metal straws / "save the turtles" (`eco`), all-day Hydro Flask hydration (`water_drop`), scrunchies & shells accessories (`favorite`) — each with title + 2-line description. Skeleton load on first render (see 3.2).
* **5.4 How It Works (3 steps):** Three numbered steps (01 Pick your vibe → 02 We pack the essentials → 03 Unbox golden hour) connected by a dashed scrunchie-style line on desktop; stacked column on mobile.
* **5.5 Testimonials:** Three `.testimonial-card`s with 5-star Material Symbol `star` ratings, casual quotes in the VSCO voice, and initial-based avatar circles (shell background, initials in `--text-primary`).
* **5.6 Pricing (3 tiers):** "Beach Bum" (free), "Golden Hour" (mid, **featured** — elevated with `--primary-strong` background, paired light text, "most loved" badge, scrunchie border), "Full Send" (top). Each tier: name, price, feature list with `check_circle` icons, and a CTA button (featured tier gets `.btn--primary`).
* **5.7 FAQ:** 5–6 questions in the accessible accordion (shipping, what's in the kit, returns, eco credentials, gifting).
* **5.8 Final CTA:** Email capture card — label, `.input`, `.btn--primary` submit. Flow: client-side validation → `.btn--loading` (CSS spinner, ~1.2s simulated) → `.btn--success` with confirmation message announced via `aria-live`. Error state for invalid email.
* **5.9 Footer:** Brand blurb, three secondary link columns (Shop, Help, Company), social icon links (Material Symbols with `aria-label`), eco tagline, and copyright. Links use scrunchie-dashed hover underline.

---

## 6. DELIVERABLE & OUTPUT FORMAT

* **Files:** Three separate files — `index.html`, `style.css`, `script.js`. The HTML contains **one single `<script src="script.js" defer>` reference** and no inline `<script>` blocks.
* **Naming Convention:** **BEM** (`block__element--modifier`) exclusively — e.g., `.hero__title`, `.feature-card__icon`, `.pricing-card--featured`, `.faq__trigger`. Never mix conventions.
* **script.js scope (vanilla JS only, no libraries):** theme toggle + `localStorage` persistence; mobile nav disclosure; FAQ accordion; email form validation/loading/success flow; features-grid skeleton simulation; optional `IntersectionObserver` scroll reveals (reduced-motion aware).
* **No Unrequested Placeholders:** All copy must be real, on-theme English text. Placeholder images are permitted only for photos (picsum with seeds + descriptive `alt`).
* **First-attempt completeness:** Ship the entire landing page — every section, every state, both themes — in one output. Do not leave TODOs, stubs, or "to be implemented" sections.
