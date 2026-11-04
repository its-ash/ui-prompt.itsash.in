# SYSTEM PROMPT — BUILD THE "COASTAL STUDIO" LANDING PAGE

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality landing page for **"Coastal Studio"** — a coastal creative studio — on the first attempt. Every rule below is mandatory.

**Creative direction (translated from source spec):** A coastal creative studio aesthetic — photographic hero of a rocky coastline, editorial serif typography, semi-transparent glass blocks, an atmosphere of cliffs and sea. Deep navy, slate blue, and ocean-pearl overlays. Large editorial serif headlines over soft translucent panels. White text on navy. Primary buttons in Driftwood Pale (`#E6DED4`) with Deep Current (`#263C59`) text.

**Sections to build, in order:** Header/Nav → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links. Additionally, a "Start a Project" modal and a toast system serve as the interaction layer.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is **forbidden** anywhere in `index.html`.
- Inline event handlers (`onclick=""`, `onsubmit=""`, etc.) are **forbidden**. All behavior is attached via `addEventListener` in `script.js`.
- All design properties, layout rules, and states are targeted exclusively via class or ID selectors.
- HTML must remain clean, semantic, and style-agnostic: changing the site's look must never require touching the markup.

**1.2 CSS Variables & Theme Tokens**
Store every visual token in `:root` and override per theme. Define **exactly** these tokens:

```css
:root {
  /* Theme-locked brand palette (identical in light & dark) */
  --color-deep-current: #263C59;
  --color-coastal-slate: #6D89A6;
  --color-ocean-pearl: #AFC3D4;
  --color-seafoam-cloud: #C8D9E6;
  --color-driftwood: #E6DED4;
  --color-soft-black: #111827;

  /* Signature surfaces (theme-locked) */
  --glass-bg: linear-gradient(160deg, rgba(17,24,39,0.95), rgba(38,60,89,0.9));
  --glass-border: 1px solid rgba(175,195,212,0.25);
  --glass-blur: blur(12px);
  --hero-overlay: linear-gradient(180deg, rgba(109,137,166,0.42), rgba(38,60,89,0.88));
  --shadow-panel: 0 22px 60px rgba(0,0,0,0.35);

  /* Shape, depth, motion, stacking */
  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 20px;
  --shadow-sm: 0 6px 18px rgba(38,60,89,0.14);
  --shadow-md: 0 12px 32px rgba(38,60,89,0.20);
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms; --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --z-header: 900; --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;

  /* Typography */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-base: 'Inter', 'Segoe UI', sans-serif;

  /* Light-mode semantic tokens (default) */
  --primary: #263C59;
  --secondary: #6D89A6;
  --bg-primary: #E6DED4;      /* Driftwood Pale page background — never pure white */
  --bg-secondary: #C8D9E6;
  --bg-elevated: #F5F0E9;     /* use #fefefe only if a near-white field is required */
  --text-primary: #263C59;
  --text-secondary: #3F5A77;
  --text-inverse: #F6F9FC;    /* text on navy/glass surfaces */
  --text-success: #2E6B5B;
  --text-error: #A63A2B;
  --border-default: rgba(38,60,89,0.22);
  --border-success: #2E6B5B;
  --border-error: #A63A2B;
}
```

Dark-mode overrides (same token names): `--bg-primary: #111827; --bg-secondary: #1B2534; --bg-elevated: #22334A; --text-primary: #E9EFF5; --text-secondary: #AFC3D4; --text-success: #7EC9B4; --text-error: #E89380; --border-default: rgba(175,195,212,0.24); --border-success: #7EC9B4; --border-error: #E89380;` — applied under **both** `.dark` and `@media (prefers-color-scheme: dark) { :root:not(.light) { … } }` so the manual class always wins over the system preference.

- **Contrast pairing (mandatory in every theme):** Driftwood Pale backgrounds pair only with Deep Current text; navy/glass surfaces pair only with `--text-inverse` / Ocean Pearl text. Verify every pairing meets WCAG AA (≥ 4.5:1) in both modes.
- **Light mode background:** Driftwood Pale `#E6DED4`, never `#ffffff`; use `#fefefe` only where a near-white surface is unavoidable.

**1.3 Mandatory Dark Mode Support**
- Dark mode must always be defined via the tokens above; switching must require zero HTML restructuring.
- Persist the user's choice in `localStorage` (key: `coastal-studio-theme`), falling back to `prefers-color-scheme` on first visit. Apply the `.dark` class to `<html>` in `script.js` before first paint.
- Provide a visible toggle in the header with a Google Material Symbols icon (`dark_mode` / `light_mode`), correct `aria-pressed` state, and a dynamic `aria-label` ("Activate dark mode" / "Activate light mode").
- **Exception clause (partial light/dark):** The source style is marked "Partial." Honor this only as follows — the hero, all glass panels, and the footer remain navy in **both** modes as the signature look; all other page surfaces switch between Driftwood/Seafoam (light) and Soft Black/navy (dark). The full dark-mode token set is still mandatory.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structure with Flexbox (and CSS Grid only for equal-width card rows).
- Every flex container **defaults to `align-items: center`** unless an explicitly justified exception is documented (allowed exceptions: text blocks inside cards and FAQ answers use `align-items: flex-start` for editorial reading alignment).
- Mobile-first: rows collapse to columns below `768px`; nothing may cause horizontal scrolling at any viewport ≥ 320px (use `min-width: 0` on flex children and a `max-width: 1200px` container with `padding-inline: clamp(1.25rem, 4vw, 2.5rem)`).

**1.5 Framework & Naming Convention**
- Load Tailwind CSS via CDN and use it **only for layout utilities** (`flex`, `items-center`, `gap-*`, `grid`, responsive prefixes). Tailwind must never carry color, typography, shadow, radius, or state styling.
- All visual styling lives in BEM-named semantic classes in `style.css` (`.btn`, `.btn--primary`, `.card`, `.card--glass`, `.input-group`, `.modal`, `.toast`, `.faq__item`). This BEM + layout-utility split is the single enforced convention — never mix in any other naming style.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: Google Fonts — **Playfair Display** (editorial serif, all headlines, weights 400–700 + italic) bound to `--font-display`, and **Inter** (body, 400/500/600/700) bound to `--font-base`. Include `<link>` tags with `preconnect`.
- Icons: **Google Material Symbols (Rounded variant)** via the Google Fonts stylesheet. Raw inline SVGs and local icon files are **forbidden**.
- Headline scale: hero `clamp(2.75rem, 6vw, 4.75rem)`; section headings `clamp(1.9rem, 3.5vw, 2.6rem)`; body `1rem–1.125rem`, line-height 1.6–1.7.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
- Base `.btn`: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, `border-radius: var(--radius-md)`, `font-family: var(--font-base)`, weight 600.
- `.btn--primary`: background `var(--color-driftwood)`, color `var(--color-deep-current)` (theme-locked pairing, identical in both modes).
- `.btn--ghost`: transparent background, 1.5px border in Ocean Pearl with `--text-inverse` text on navy contexts; hover fills with `rgba(175,195,212,0.12)`.
- **Hover:** shadow lift (`var(--shadow-md)`) + `translateY(-1px)`, `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring — `outline: 3px solid var(--secondary); outline-offset: 3px`.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** disables pointer events to prevent double-clicks, shows the Material Symbol `progress_activity` with a CSS rotation animation, and must not change button dimensions.
- **Disabled/`[disabled]`:** `opacity: 0.5`, `filter: grayscale(0.6)`, `cursor: not-allowed`.
- **Success/Error (`.is-success` / `.is-error`):** temporary feedback driven by `--text-success` / `--text-error` (icon swap to `check_circle` or `error` + label change), never color alone.
- `.btn--danger`: visually distinct in both themes using `--text-error`/`--border-error` (used for the modal's "Reset form" control).

**2.2 Card Component (Glass Panels)**
- `.card--glass` must use the exact signature treatment: `background: var(--glass-bg); backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur); border: var(--glass-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-panel);` with `--text-inverse` text and Ocean Pearl accents.
- **Default:** flexible column layout, generous padding (`clamp(1.5rem, 3vw, 2.25rem)`).
- **Hover (interactive cards):** `transform: translateY(-2px)` + deepened shadow, transitioned with `var(--transition-normal)`.
- **Focus-within:** border brightens to `rgba(175,195,212,0.6)` when a child link/button receives focus.
- **Loading (`.card--skeleton`):** shimmer keyframe animation (translucent gradient sweep) with dimensions matching final content — no layout jumps. Demonstrate on the Testimonials cards as a brief (~600ms) load-in reveal.
- **Empty state (`.card--empty`):** centered Material Symbol (e.g., `sailing`) plus clear guidance text; define the pattern even if unused.

**2.3 Form & Input Requirements**
- Structure: `.input-group` flex column wrapping a `<label>`, the field, and a dedicated `.input-feedback` container.
- **States, all styled in CSS:** empty, focused (border `--secondary` + `box-shadow: 0 0 0 3px rgba(109,137,166,0.35)` ring), filled, valid (`--border-success` + `check_circle` icon), invalid (`--border-error`, `--text-error` message + `error` icon, `aria-invalid="true"`), disabled, read-only.
- On glass/navy surfaces, use the `.input--on-glass` variant: `rgba(230,222,212,0.12)` background, `--text-inverse` text, Ocean Pearl placeholders.

**2.4 Modal / Popup ("Start a Project")**
- **States:** opening (fade + `scale(0.96 → 1)`, 300ms), open, loading (submit), success/error, closing (reverse animation) — all via CSS transitions.
- **UX:** centered flex container (`align-items: center; justify-content: center`), backdrop `rgba(17,24,39,0.6)` with `blur(6px)`, dialog is a `.card--glass`, Material Symbol `close` icon button (44×44px) top-right, `role="dialog"` + `aria-modal="true"` + `aria-labelledby`, keyboard focus trap, close via `Esc` and overlay click (not dialog click), body scroll lock while open, focus returns to the trigger. Stack at `--z-modal`.

**2.5 FAQ Accordion**
- Use native semantic `<details>` / `<summary>`. Summary: flex, `align-items: center`, `justify-content: space-between`, custom `expand_more` Material Symbol that rotates 180° when `[open]`; remove the default marker.
- Animate the answer with the CSS grid-rows technique: `.faq__answer-wrap { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--transition-normal) var(--ease-standard); }` and `details[open] .faq__answer-wrap { grid-template-rows: 1fr; }` with `overflow: hidden` on the inner row. Fully keyboard operable natively; visible `:focus-visible` ring on the summary.

**2.6 Header, Navigation & Theme Toggle**
- Sticky header, transparent over the hero; a JS scroll listener toggles `.header--scrolled`, which applies the glass treatment (navy gradient + `blur(12px)`) so navigation stays legible over light sections. Stack at `--z-header`.
- Logo: Material Symbol `sailing` + "Coastal Studio" wordmark in Playfair Display.
- Nav links: Features, Process, Testimonials, Pricing, FAQ (smooth-scroll to section anchors, disabled under `prefers-reduced-motion`). Header CTA: "Start a Project" (`.btn--primary`, compact).
- Mobile: hamburger icon button with `aria-expanded` / `aria-controls`, animated icon, slide-down glass panel, closes on link click and `Esc`.
- Theme toggle per rule 1.3.

**2.7 Toast System**
- `.toast` fixed bottom-center, `role="status"` + `aria-live="polite"`, glass styling, Material Symbol + message, auto-dismiss after 4s with a dismiss button, slide-up entrance animation, stacked at `--z-toast`. Used for form success/error confirmations.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` sizing, breakpoints at 480/768/1024px, zero horizontal overflow from 320px up.
- **Smooth animations:** `transition: var(--transition-normal) var(--ease-standard)` on all state changes; `@media (prefers-reduced-motion: reduce)` disables transitions, animations, shimmer, and smooth scrolling.
- **Accessibility:** WCAG AA contrast in both modes; never rely on color alone (pair color with icons/text); semantic HTML5 landmarks (`header`, `nav`, `main`, `section[aria-labelledby]`, `footer`); exactly one `<h1>`; logical DOM/focus order; full keyboard operability; `aria-live` regions for form errors, toasts, and loading feedback; a "Skip to main content" skip link as the first focusable element.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** any destructive/reset control uses `.btn--danger`, visually distinct in both light and dark themes.

---

## 4. PAGE STRUCTURE & SECTION-BY-SECTION SPECIFICATIONS

**4.1 Hero**
- Full-viewport (`min-height: 100vh`) photographic background of a rocky coastline, layered as: `background: var(--hero-overlay), url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1920&auto=format&fit=crop') center/cover no-repeat, linear-gradient(160deg, #263C59, #111827);` — the final gradient doubles as the fallback if the image fails. This remote photo is the only permitted placeholder asset.
- Content (left-aligned, max-width 720px): uppercase eyebrow "COASTAL CREATIVE STUDIO" (Ocean Pearl, letter-spacing 0.25em); H1 in Playfair Display, white, e.g., *"Design shaped by the edge of the sea."*; one-sentence subcopy in Seafoam Cloud; two CTAs — "Start a Project" (`.btn--primary`, opens the modal) and "Explore Our Work" (`.btn--ghost`, scrolls to Features).
- Optional bottom scroll cue (`keyboard_arrow_down` icon, gentle bounce, disabled under reduced motion).

**4.2 Features — 3 cards**
- Section heading + short intro. Grid: 1 column mobile → 3 columns ≥ 768px, equal heights.
- Three `.card--glass` cards: **Brand Identity** (icon `brush`), **Web & Product Design** (icon `web`), **Art Direction & Content** (icon `theaters`). Each: icon in a circular Coastal Slate chip, Playfair h3, descriptive paragraph, "Learn more" text link with an arrow icon (`arrow_forward`, `aria-hidden="true"`).

**4.3 How It Works — 3 steps**
- Three steps: **01 Discover** (`explore`), **02 Design** (`palette`), **03 Deliver** (`sailing`). Oversized Playfair numerals in Ocean Pearl, step title, description.
- Desktop: horizontal row with a thin connecting line via a pseudo-element between steps; mobile: vertical column, line hidden.

**4.4 Testimonials**
- Three `.card--glass` quote cards: `format_quote` icon, `<blockquote>` text, a 5-star row (`star` icons, `aria-hidden="true"` plus a visually hidden "Rated 5 out of 5" label), and an author row with a circular initials avatar (Coastal Slate background, `--text-inverse` initials — no external avatar images), name, and role.
- Apply the skeleton reveal on initial load per rule 2.2.

**4.5 Pricing — 3 tiers**
- Tiers: **Shoreline** (from $2,400), **Tidewater** (from $4,800 — featured), **Open Sea** (custom quote). Prices set in Playfair Display.
- Featured card: `.card--featured` — desktop `scale(1.02)`, brighter border, elevated shadow, and a "Most Popular" pill badge (Driftwood background, Deep Current text — text badge, not color-only).
- Each card: tier name, price, 4–5 feature list items with `check` icons, and a CTA (featured: `.btn--primary`; others: `.btn--ghost`). Cards highlight on `:focus-within`.

**4.6 FAQ**
- Centered column, max-width 760px. Five to six real questions covering process, timelines, pricing, revisions, and remote collaboration — built per rule 2.5.

**4.7 Final CTA**
- Full-width section containing one large signature glass panel (exact tokens from 1.2): Playfair h2 (e.g., *"Let's build something with horizon."*), short supporting copy, and an email capture `.input-group` ("Get our field notes") with label, `.input--on-glass` field, feedback container, and a `.btn--primary` submit that runs the full state cycle: validate → loading → success (icon + label swap) → toast. Include a secondary "Start a Project" `.btn--ghost` that opens the modal.

**4.8 Footer**
- Always navy in both modes (gradient from `--color-soft-black` to `--color-deep-current`), `--text-inverse`/Ocean Pearl text.
- Columns: brand (logo + one-line tagline + social icon buttons using available Material Symbols such as `mail`, `rss_feed`, `camera_alt`, each with an `aria-label`); secondary link groups (Studio: About, Journal, Careers · Work: Case Studies, Services, Process · Legal: Privacy, Terms — legal links may use `href="#"` but must show hover/focus feedback).
- Bottom bar: "© {year} Coastal Studio. All rights reserved." with the year set dynamically in `script.js`.

**4.9 "Start a Project" Modal + Interaction Wiring**
- Modal per rule 2.4 containing a short contact form: Name (text), Email (email), Project summary (textarea) — each a full `.input-group` with all states from rule 2.3 — a `.btn--primary` submit with loading → success → auto-close (~1.5s) → toast, and a subtle `.btn--danger` "Reset form" control.
- `script.js` responsibilities: theme init/persistence/toggle; header scroll state; mobile menu; smooth scrolling; modal logic (open/close, focus trap, `Esc`, overlay click, scroll lock, focus return); client-side validation (email regex, required fields, `aria-invalid`, feedback messages); simulated async submit (`setTimeout` ~1200ms); toast helper; dynamic year; testimonial skeleton reveal. All wrapped for deferred execution.

---

## 5. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, `script.js`. The only `<script>` tag in the HTML is the single deferred entry point `<script src="script.js" defer></script>` plus the Tailwind CDN loader; Google Fonts and Material Symbols load via `<link>` tags with `preconnect`.
- **Naming:** BEM for every custom class; Tailwind utilities restricted to layout only (rule 1.5). One convention across the entire deliverable.
- **Copy:** all user-facing copy written in **English**, realistic and on-theme — no lorem ipsum. The hero photograph URL is the only permitted placeholder (content was genuinely unspecified); avatars use initials, icons use Material Symbols.
- **Quality gate before submitting:** zero inline styles, zero inline handlers, dark mode fully functional with persistence, no horizontal scroll at 320px, all keyboard paths operable, and every interactive element exhibits visible hover/focus/active feedback.
