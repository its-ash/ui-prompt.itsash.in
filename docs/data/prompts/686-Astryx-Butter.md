# Build Prompt: "Astryx Butter" Landing Page

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-grade landing page in a single pass — final code only, no placeholders, no TODOs. The theme is **Astryx Butter**: a warm golden, premium, playful "2026 Meta" aesthetic with expressive display typography and vibrant complementary blue accents, evoking a premium golden butter / food-lifestyle brand. Write **all user-facing copy in English** (translate any non-English brand guidance into English before use). Do not ask clarifying questions — make confident, on-theme decisions.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in a dedicated `style.css`.
* **Minimal HTML Modifications:** HTML must remain clean, semantic (HTML5 landmarks: `header`, `nav`, `main`, `section`, `article`, `footer`), and agnostic of visual styling. Reskinning the site must require editing only the CSS file.

### 1.2 CSS Variables (`var(--...)`) & Theme Tokens
Store all visual tokens in `:root` (light) and in a `.dark` class (mirrored under `@media (prefers-color-scheme: dark)`). Use **exactly** these tokens:

**Light mode (`:root`):**
```css
--primary: #E2A400;          /* Golden */
--primary-bright: #FBCE03;    /* Bright Yellow — hero/CTA band surfaces */
--primary-dark: #D69804;      /* Dark Gold — pressed/hover on gold */
--secondary: #0064E0;         /* Blue Accent */
--secondary-light: #2694FE;   /* Light Blue */
--bg-primary: #FFF9EC;        /* Warm butter-white page background (never #ffffff) */
--bg-secondary: #FFFDF2;      /* Warm near-white card surface */
--text-primary: #241A00;      /* Deep warm brown — pairs with all light/gold surfaces */
--text-secondary: #6E5B1F;    /* Muted warm brown */
--text-on-primary: #241A00;   /* Text on golden buttons/surfaces */
--text-on-secondary: #FFFFFF; /* Text on blue buttons */
--text-success: #1E7B34; --text-error: #B3261E;
--border-default: #E9D8A6; --border-error: #B3261E; --border-success: #1E7B34;
--font-base: 'Outfit', sans-serif;
--font-display: 'Sarina', cursive;
--radius-sm: 8px; --radius-md: 12px; --radius-lg: 24px;
--shadow-sm: 0 2px 8px rgba(43, 31, 0, 0.08);
--shadow-md: 0 10px 28px rgba(43, 31, 0, 0.14);
--spacing-gap: 1.5rem;
--ease-standard: cubic-bezier(0.24, 1, 0.4, 1);
--transition-fast: 175ms cubic-bezier(0.24, 1, 0.4, 1);
--transition-normal: 410ms cubic-bezier(0.24, 1, 0.4, 1);
--z-dropdown: 1000; --z-modal: 2000; --z-toast: 3000;
```

**Dark mode (`.dark` + `@media (prefers-color-scheme: dark)`):**
```css
--bg-primary: #1A1408; --bg-secondary: #251D0D;
--text-primary: #FFF6D6; --text-secondary: #D6C289;
--secondary: #2694FE; --text-on-secondary: #071A33;
--text-success: #7BD88F; --text-error: #FFB4A6;
--border-default: #463817; --border-error: #FFB4A6; --border-success: #7BD88F;
/* Gold tokens and --text-on-primary remain unchanged: gold surfaces keep dark text in both themes */
```

* **Contrast Pairing:** Every theme must pair light backgrounds with dark text tokens and dark backgrounds with light text tokens — enforce this for both themes, not just the default. Verify WCAG AA: 4.5:1 for body text, 3:1 for large text and UI components in **both** modes.
* **Gold-as-Text Rule:** Never use `--primary`/`--primary-bright` as text color on light backgrounds (fails contrast). Gold is for surfaces, borders, fills, and icons; body text uses `--text-primary`/`--text-secondary`; the accent color for text links/emphasis is `--secondary`.
* **Native accent-color:** Set `accent-color: var(--secondary)` on native inputs and checkboxes.

### 1.3 Mandatory Dark Mode Support
* **Implementation:** Define dark tokens under both `@media (prefers-color-scheme: dark)` (applied only when no stored preference exists) and a `.dark` class on `<html>`. Background and text variables must switch seamlessly with no HTML restructuring.
* **Persistence:** `script.js` must read `localStorage` (key: `astryx-theme`) on load — the very first operation the script performs — falling back to `prefers-color-scheme` on first visit, and apply/remove the `.dark` class accordingly.
* **Visible Toggle:** A `.theme-toggle` button in the header showing a sun/moon Google Icon, with correct `aria-pressed` state and a descriptive `aria-label` that updates on toggle ("Switch to dark mode" / "Switch to light mode").

### 1.4 Flexbox Layout & Mobile-First Alignment
* Build all layout structures with **Flexbox** (`display: flex` or Tailwind flex utilities).
* **Default Alignment Rule:** Every flex container must default to `align-items: center` (`items-center`) unless an explicitly justified exception is documented in a CSS comment (e.g., left-aligned text blocks inside cards).
* **Mobile-Friendly First:** All rows convert to columns on small viewports (~≤768px). Use a centered max-width container (~1152px) with fluid `clamp()` typography. Horizontal scrolling is prohibited — achieve this through proper fluid sizing and `flex-wrap`, never by hiding overflow.

### 1.5 Framework Default & Tailwind CSS Integration
Use Tailwind CSS (CDN) or clean custom CSS following Tailwind's utility conventions / `@layer` / `@apply` directives. All utilities must map back to the CSS variables above. Define reusable component classes — `.btn`, `.card`, `.input-group`, `.section`, `.container` — that consume the tokens.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text:** Load via Google Fonts `<link>`: **Outfit** (weights 400, 500, 600, 700) bound to `--font-base` for all body/UI text, and **Sarina** (400) bound to `--font-display` — used **only** for the hero headline, section display accents, the wordmark, and the "Most Popular" badge. Never use Sarina for body text, buttons, or labels.
* **Icons:** Use Google Material Symbols (Rounded axis) via `<link>`. Icon markup: `<span class="material-symbols-rounded" aria-hidden="true">icon_name</span>`. **Raw inline SVGs, local icon files, and emoji-as-icons are forbidden.**

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component (`.btn` + variants `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.btn--danger`)
Style every state via CSS classes:
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, `border-radius: var(--radius-sm)`. Primary = gold background + `--text-on-primary`; Secondary = blue background + `--text-on-secondary`; Ghost = transparent with 2px `--border-default` border. All transitions use `var(--transition-fast)`.
* **Hover:** Visual shift — `filter: brightness(1.06)` plus `--shadow-sm` — with `cursor: pointer`.
* **Focus:** Distinct keyboard focus ring: `outline: 2px solid var(--secondary); outline-offset: 2px;` never remove outlines.
* **Active/Pressed:** `transform: scale(0.97)` click feedback.
* **Loading (`.btn--loading`):** Disables interaction (`pointer-events: none;` + `disabled` attribute to prevent double-clicks) and renders a CSS-only spinner (border-based, colored via `currentColor`) **without changing button dimensions** — maintain a stable width and keep the label space reserved.
* **Disabled:** `opacity: 0.5; filter: grayscale(1); cursor: not-allowed;`
* **Success/Error (`.btn--success`, `.btn--error`):** Temporary feedback styles driven by `--text-success` / `--text-error` (border, text, and matching check/close Material Icons), reverting after feedback completes.

### 2.2 Card Component (`.card` + `.card--featured`, `.card--skeleton`)
* **Default:** Flexbox layout (documented exception: inner text blocks left-aligned), background `--bg-secondary`, 1px `--border-default` border, `border-radius: var(--radius-md)`, padding per `--spacing-gap`.
* **Hover (interactive cards):** `transform: translateY(-2px)` and elevation shift to `--shadow-md`, with border shifting toward gold.
* **Focus-within:** Card border highlights (`--primary`) when a child link/button receives focus.
* **Loading (Skeleton):** Define `.card--skeleton` with a CSS shimmer `@keyframes` animation (safe area dimensions) that prevents layout jumps.
* **Empty State:** Define a structured fallback layout class featuring a Google Icon plus guidance text.

### 2.3 Form & Input Requirements (`.input-group`)
* **Structure:** Flex container wrapping a `<label>`, the input field, and a dedicated error feedback element (`<p class="input-group__error">` with `aria-live="polite"`).
* **States:** Empty (`:placeholder-shown`), Focused (outline ring via `--secondary`), Filled, Valid (`.input--valid` — success border + check Material Icon), Invalid (`.input--invalid` — error border, `--text-error` message, error icon), Disabled, Read-only. **Never rely on color alone** — every state pairs color with an icon and/or text message.

### 2.4 Accordion & Modal/Popup Requirements
* **FAQ Accordion:** Each item is an `<h3>` wrapping a `<button class="accordion__trigger">` with `aria-expanded="true|false"` and `aria-controls`, controlling a panel with `role="region"` + `aria-labelledby`. Panel opens/closes animated via CSS only (`grid-template-rows: 0fr → 1fr` or equivalent) using `var(--transition-normal)`. Chevron Google Icon rotates 180° on open. Fully keyboard operable; respects `prefers-reduced-motion`.
* **Modal/Popup (if any overlay is used):** States Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions. Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via `Esc` and overlay click, layered at `var(--z-modal)`.

---

## 3. CORE UX & MICRO-INTERACTION RULES
* **Responsive by Default:** Fluid sizing, breakpoints at ~640/768/1024px, zero horizontal overflow.
* **Smooth Animations:** All state changes transition with `var(--transition-normal)`; micro-feedback (hover/active) uses `var(--transition-fast)`; easing is always `cubic-bezier(0.24, 1, 0.4, 1)`. All animations respect `prefers-reduced-motion: reduce` (transitions collapse, transforms removed, no parallax/auto-play motion). Content must never be hidden behind JS-only reveal animations.
* **Accessibility (a11y):** AA contrast in Light and Dark modes; semantic HTML5 landmarks; exactly one `<h1>` (hero) with a logical `h2`/`h3` hierarchy; a skip-to-content link; logical DOM/focus order; full keyboard operability (no mouse-only interactions); `aria-live` regions for dynamic feedback (form errors, loading, success); visible focus states everywhere; each section labeled via `aria-labelledby` pointing at its heading; smooth anchor scrolling with `scroll-margin-top` compensating for the sticky header (disabled under reduced motion).
* **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
* **Destructive/Secondary Distinction:** `.btn--danger` (if used) must be visually distinct in both themes. Color never communicates state alone.
* **Brand Atmosphere:** Achieve the "warm golden butter, blue-on-gold, playful meta" mood with CSS only — soft warm radial glows, golden band surfaces with `--primary-bright`, blue accent chips/icons on gold, subtle playful rotations on decorative badges, warm-tinted shadows. No external image assets are required; avatar placeholders are initial-letter circles (gold background, `--text-on-primary`).

---

## 4. DELIVERABLE & OUTPUT FORMAT
* **File Structure:** Three separate files — `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single `<script src="script.js" defer>` reference. No inline styles. No inline event handlers (`onclick` etc.).
* **Naming Convention:** BEM only (`block__element--modifier`) across the entire deliverable — never mix conventions.
* **No Unrequested Placeholders:** Write real, thematic English marketing copy for the Astryx Butter brand (hero, features, steps, testimonials, pricing tiers, FAQ answers, footer). Lorem ipsum is prohibited. Keep all class names, variable names, and file names in English/ASCII.

---

## 5. PAGE BLUEPRINT — REQUIRED SECTIONS (in this order)

1. **Global Sticky Header:** Wordmark "Astryx Butter" (Sarina for "Astryx", Outfit for "Butter"), anchor nav (Features, How It Works, Testimonials, Pricing, FAQ), the `.theme-toggle` control, and a header CTA button. Warm translucent background with `--border-default` bottom border. On mobile, the nav must remain keyboard accessible (collapsing to an `aria-expanded` menu button or wrapping to a column) with no horizontal scroll.
2. **Hero:** Full-bleed golden band (`--primary-bright`, dark text), oversized playful decorative Material Icons (e.g., `bakery_dining`, `restaurant`, `bolt`) used as blue-accented chips or semi-transparent ornaments, an `<h1>` in `--font-display` with one accent word in `--secondary`, an Outfit subheadline, and two CTAs: `.btn--secondary` (primary action, blue on gold) + `.btn--ghost` (secondary, dark border on gold). Subtle entrance animation (reduced-motion safe).
3. **Features (3 cards):** Each `.card` with a Material Icon in a golden circle, `<h3>` title, and descriptive copy. Flex row on desktop → column on mobile. Hover lift per 2.2.
4. **How It Works (3 steps):** Numbered gold step markers (1–2–3) with Material Icons, titles, and copy, connected by a CSS pseudo-element line (horizontal on desktop, vertical/hidden on mobile).
5. **Testimonials (3 cards):** Five filled `star` Material Icons each, a quote, an initial-letter avatar circle, name and role. Optional subtle playful card rotation (≤2°, removed under reduced motion).
6. **Pricing (3 tiers):** `.card` per tier — tier name, large Outfit price, "per month" note, feature list with `check` icons, CTA button. Middle tier is `.card--featured`: blue `--secondary` border, slight elevation/scale, a Sarina "Most Popular" badge, and a `.btn--secondary` CTA; side tiers use `.btn--primary`. Stack vertically on mobile without overflow.
7. **FAQ:** Accordion per 2.4 with 5–6 real thematic Q&As.
8. **Final CTA:** Golden band mirroring the hero, Sarina headline, and an email-capture `.input-group` + `.btn--primary`. On submit: validate (empty/invalid email → `.input--invalid` + `aria-live` error message); valid → button enters `.btn--loading` (~1s) then `.btn--success` with an inline success message ("You're on the list!") announced via `aria-live`. No page reload (`preventDefault`).
9. **Footer with secondary links:** Deep warm surface with light paired text tokens (in light mode, a dark `#241A00`-family footer with `--text-primary` inverted accordingly — verify the pairing rule). Brand blurb, three columns of secondary links (Product, Company, Support), social icons (Material), and a bottom bar with copyright and legal links. All links have hover/focus states with a non-color affordance (e.g., underline).

Deliver the complete, working `index.html`, `style.css`, and `script.js` now — first attempt, production-ready, fully theme-switchable, accessible in both Light and Dark modes.
