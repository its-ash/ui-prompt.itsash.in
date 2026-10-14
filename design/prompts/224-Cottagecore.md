# Build Specification: Cottagecore Landing Page

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality **Cottagecore landing page** in a single attempt, using semantic HTML, a token-driven stylesheet, and minimal vanilla JS. The page promotes a fictional slow-living subscription box, **"Hearth & Hedgerow"** — seasonal baking kits, wildflower seeds, and handcrafted goods delivered each season. Write **all user-facing copy in English**, in a warm, unhurried, wholesome cottagecore voice (mushrooms, wildflowers, baking, cottages, slow living). Never use lorem ipsum.

**Requested sections (in order):** Hero · Features (3 cards) · How It Works (3 steps) · Testimonials · Pricing (3 tiers) · FAQ · Final CTA · Footer with secondary links.

---

## 1. Strict Rules & Architecture

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
- All design properties, layout rules, and states are applied exclusively via class or ID selectors.
- HTML remains clean, semantic, and style-agnostic: re-theming the page must require editing only `style.css`, never the markup.

**1.2 CSS Variables & Theme Tokens**
- Store every visual token in `:root` (and theme classes). These canonical tokens are mandatory: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.
- Contrast pairing: every light background token must pair with a dark text token, and every dark background token with a light text token — enforced in **both** themes.
- The light-mode page background is the warm cream `#f6f0e3`, never pure white. Where a near-white is needed, use `#fffdf7` or `#fefefe` — `#ffffff` is forbidden.
- Additional theme tokens (defined in Section 2): `--primary-strong`, `--secondary-strong`, `--text-on-primary`, `--bg-surface-strong`, `--gingham`, `--gingham-check`, `--stitch-border`, `--focus-ring`, `--radius-pill`, `--shadow-lg`, `--font-display`, `--font-script`, `--ease-entrance`, `--ease-exit`, plus the `--text-xs…--text-5xl` and `--space-1…--space-24` scales.

**1.3 Mandatory Dark Mode**
- Dark mode must always exist. Define dark token overrides both under a `.dark` class (applied to `<html>`) and under `@media (prefers-color-scheme: dark) { :root:not(.light) { … } }`.
- Theme switching must require zero HTML restructuring — only variable values change.
- Persist the user's choice in `localStorage`; on first visit fall back to `prefers-color-scheme`. Initialization happens in `script.js` (the single deferred entry point).
- Provide a visible toggle in the nav using sun/moon Google Material Symbols, with `aria-pressed` reflecting current state and a dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode").
- The source style spec declared no modes — you must design, implement, and validate **both light and dark** before delivering.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structure with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
- Mobile-first: all multi-column rows collapse to a single column on small viewports; no horizontal scrolling at any width ≥ 320px.

**1.5 Framework & Class Architecture**
- The reference specification supplies framework-agnostic custom CSS — implement it as clean custom CSS in `style.css` (no framework), organized with `@layer`-style section comments (tokens → base → components → sections → states). If you opt for Tailwind instead, every component class must be defined via `@layer components` with `@apply` mapping back to the CSS variables.
- Reusable component classes: `.nav`, `.btn`, `.btn--primary`, `.btn--danger`, `.card`, `.input`, `.input-group`, `.badge`. No magic values inside component rules — everything maps to variables.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Google Fonts only: **Nunito** (body, bound to `--font-base`), **Playfair Display** (headings, `--font-display`), **Caveat** (handwritten accents, `--font-script`). Include the `<link>` tags in `<head>`.
- Icons: Google Material Symbols (one variant — Rounded or Outlined — used consistently). Raw inline SVGs and local icon files are forbidden.

---

## 2. Cottagecore Theme Specification

**2.1 Design Direction**
Keywords: Cottagecore, farmcore, countrycore, soft floral, gingham, pastoral palettes, mushrooms, wildflowers, baking, cottages, handwritten/serif type, warm nostalgia, cozy, wholesome, slow-living. Era: 2018–present (peak 2020). Mood: Cottagecore Tumblr, "Anne with an E" moodboards. The look is soft, sun-warmed, and handmade — never corporate.

**2.2 Light Tokens (mandatory `:root`)**
```css
:root {
  /* color — canonical tokens (light) */
  --bg-primary: #f6f0e3;        /* warm cream page background */
  --bg-secondary: #fffdf7;      /* surface */
  --bg-surface-strong: #ede2c8; /* tinted surface */
  --text-primary: #3f3423;
  --text-secondary: #6b5c3f;
  --primary: #7a8450;           /* sage — decorative fills, large UI only */
  --primary-strong: #5a6636;    /* AA-safe sage for text, links, filled buttons */
  --text-on-primary: #fffdf7;
  --secondary: #c1694f;         /* terracotta — decorative accent */
  --secondary-strong: #9e4f38;  /* AA-safe terracotta for accent text */
  --text-success: #3f6e4f;  --border-success: #3f6e4f;
  --text-error: #9c3324;    --border-error: #9c3324;
  --border-default: #b8a473;
  --gingham: rgba(122, 132, 80, 0.16);
  --focus-ring: rgba(90, 102, 54, 0.25);
  /* radius / shadow */
  --radius-sm: 6px; --radius-md: 12px; --radius-lg: 20px; --radius-pill: 999px;
  --shadow-sm: 0 2px 5px rgba(63, 52, 35, 0.10);
  --shadow-md: 0 6px 14px rgba(63, 52, 35, 0.14);
  --shadow-lg: 0 12px 26px rgba(63, 52, 35, 0.16);
  /* typography */
  --font-base: 'Nunito', system-ui, sans-serif;
  --font-display: 'Playfair Display', 'Lora', Georgia, serif;
  --font-script: 'Caveat', cursive;
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem; --text-4xl: 3rem; --text-5xl: 4rem;
  /* spacing & motion */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --spacing-gap: 24px;
  --transition-fast: 150ms; --transition-normal: 200ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-entrance: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
  /* elevation */
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;
  /* signature motifs */
  --gingham-check: repeating-linear-gradient(90deg, var(--gingham) 0 8px, transparent 8px 16px),
                   repeating-linear-gradient(0deg, var(--gingham) 0 8px, transparent 8px 16px);
  --stitch-border: 2px dashed var(--border-default);
}
```

**2.3 Dark Tokens (apply under `.dark` and the dark media query)**
```css
.dark {
  --bg-primary: #211b10;        /* deep soil */
  --bg-secondary: #2b2416;      /* weathered timber */
  --bg-surface-strong: #3a3120;
  --text-primary: #f2ead6;      /* cream */
  --text-secondary: #cfc3a4;
  --primary: #a3b07a;           /* moonlit sage */
  --primary-strong: #a3b07a;
  --text-on-primary: #26210f;
  --secondary: #c1694f;
  --secondary-strong: #d99377;  /* ember terracotta */
  --text-success: #9cc5a5;  --border-success: #9cc5a5;
  --text-error: #e89b8a;    --border-error: #e89b8a;
  --border-default: #5a4d33;
  --gingham: rgba(163, 176, 122, 0.10);
  --focus-ring: rgba(163, 176, 122, 0.28);
  --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.35);
  --shadow-md: 0 6px 14px rgba(0, 0, 0, 0.40);
  --shadow-lg: 0 12px 26px rgba(0, 0, 0, 0.45);
  color-scheme: dark;
}
```
Verify every text/background pair meets WCAG AA (4.5:1 body text, 3:1 large text and UI) in both themes before delivering.

**2.4 Signature Visual Motifs (repeat consistently across the page)**
- **Gingham weave:** apply `--gingham-check` as `background-image` on the nav, cards, hero panel, final CTA, and footer (over `--bg-secondary`).
- **Stitched border:** `--stitch-border` on the nav's bottom edge, cards, inputs, buttons, and avatars.
- Pill radii (`--radius-pill`) for buttons and badges; `--radius-lg` for cards.
- Warm-tinted shadows only — never pure black in light mode.
- Decoration comes exclusively from CSS gradients and Material Symbols — no external images.

**2.5 Base Component Contract (port from the reference spec, replacing its `--color-*` names with the canonical tokens above)**
```css
body { margin: 0; color: var(--text-primary); font-family: var(--font-base); background: var(--bg-primary); }
.nav { display: flex; align-items: center; gap: var(--space-4); padding: var(--space-3) var(--space-6);
  background: var(--bg-secondary); background-image: var(--gingham-check); border-bottom: var(--stitch-border); }
.btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  min-height: 44px; min-width: 44px; font: 600 var(--text-base)/1 var(--font-base);
  color: var(--text-primary); padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
  background: var(--bg-secondary); border: var(--stitch-border); box-shadow: var(--shadow-sm); cursor: pointer;
  transition: transform var(--transition-normal) var(--ease-standard), box-shadow var(--transition-normal) var(--ease-standard); }
.btn--primary { background: var(--primary-strong); color: var(--text-on-primary); border: 2px solid var(--primary-strong); }
.card { background: var(--bg-secondary); background-image: var(--gingham-check); border: var(--stitch-border);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--text-primary); font: var(--text-base) var(--font-base);
  padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
  background: var(--bg-secondary); border: var(--stitch-border); }
.badge { display: inline-flex; align-items: center; gap: 0.4em; font: 600 var(--text-xs) var(--font-base);
  padding: 0.3em 0.9em; border-radius: var(--radius-pill); background: var(--bg-surface-strong);
  color: var(--text-primary); border: 1px solid var(--border-default); }
```

---

## 3. Component Design Specifications

**3.1 Buttons (`.btn`, `.btn--primary`, `.btn--danger`)**
- **Default:** flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`), minimum touch target 44×44px, pill radius, stitched border, Nunito 600.
- **Hover:** `translateY(-1px)` + `--shadow-md`, `cursor: pointer`.
- **Focus:** `.btn:focus-visible` — `outline: 2px solid var(--primary); outline-offset: 2px;` visible in both themes.
- **Active/Pressed:** `transform: scale(0.97)` with shadow reset — tactile click feedback.
- **Loading:** `.btn.is-loading` — `pointer-events: none` to prevent double-clicks, `aria-busy="true"`, and a CSS border-based spinner colored `--text-on-primary` that occupies reserved space so button dimensions never change.
- **Disabled:** `[disabled]` — `opacity: 0.5`, `filter: grayscale(0.5)`, `cursor: not-allowed`.
- **Success/Error:** `.btn.is-success` / `.btn.is-error` — temporary feedback styles driven by `--text-success` / `--text-error` (used by the newsletter submit).
- **Danger:** `.btn--danger` — berry-red fill/border using `--text-error`/`--border-error`, visually distinct in both light and dark themes; define it even if the landing page doesn't trigger it.

**3.2 Cards (`.card`)**
- **Default:** flexible flexbox column, gingham weave over `--bg-secondary`, stitched border, `--radius-lg`, `--shadow-md`, padding `--space-6`.
- **Hover (interactive cards):** `transform: translateY(-2px)` + `--shadow-lg`.
- **Focus-within:** border color shifts to `--primary-strong` when a child link/button receives focus.
- **Loading (skeleton):** `.skeleton` — shimmer keyframe animation (gradient sweep using `--bg-surface-strong`) that preserves layout dimensions; no layout jumps.
- **Empty state:** `.card--empty` — structured fallback with a Material Symbol icon and clear guidance text. Define these state classes in CSS even where a static page doesn't trigger them; use them wherever a natural trigger exists.

**3.3 Forms & Inputs (`.input-group`, `.input`, `.field-error`)**
- **Structure:** flex column wrapping a `<label>`, the `.input` field, and a dedicated error feedback element (`<p class="field-error" role="alert">`).
- **States — all styled via classes:** empty, focused (`border-color: var(--primary-strong); box-shadow: 0 0 0 3px var(--focus-ring);`), filled, valid (`.is-valid` — `--border-success` border + `check` icon), invalid (`.is-invalid` — `--border-error` border, error icon, error text), disabled, read-only.
- The Final CTA email form must implement validation, loading, and success states with an `aria-live="polite"` feedback region.

**3.4 FAQ Accordion**
- Build with `<button class="faq__trigger" aria-expanded="false" aria-controls="…" id="…">` headers and `<div class="faq__panel" role="region" aria-labelledby="…" hidden>` panels.
- Animate open/close via CSS (e.g., `grid-template-rows: 0fr → 1fr`) with `--transition-normal`; rotate an `expand_more` Material Symbol chevron 180° on open.
- Fully keyboard operable; visible focus states; respects `prefers-reduced-motion`.

**3.5 Modal / Popup (only if you introduce one)**
- **States:** opening, open, loading, success/error, closing — all animated via CSS transitions using `--ease-entrance` / `--ease-exit`.
- **UX:** centered flex overlay (`align-items: center; justify-content: center`), backdrop, Material Symbol `close` button, keyboard focus trapping, close via `Esc` and overlay click, `role="dialog"` + `aria-modal="true"`, `z-index: var(--z-modal)`.

**3.6 Navigation & Theme Toggle**
- Sticky `.nav` per Section 2.5: script wordmark (Caveat), anchor links, theme toggle (Section 1.3), and a `.btn--primary` CTA.
- Below ~768px, links collapse into a hamburger (`menu` icon button with `aria-expanded` / `aria-controls`) opening a gingham dropdown panel at `--z-dropdown`; close on `Esc` and on link click.

---

## 4. Page Section Requirements

**4.1 Hero**
- Centered flex column, generous `--space-24` vertical rhythm, subtle gingham panel with stitched border.
- `.badge` ("Handpacked in the countryside"), Caveat eyebrow ("slow living, delivered by the season"), Playfair Display H1 at `--text-4xl`–`--text-5xl` (fluid via `clamp()`), Nunito lede in `--text-secondary` (max ~60ch).
- CTA row: `.btn--primary` "Begin your season" + `.btn` "See what's inside" (anchor links).
- Decorative Material Symbols (`local_florist`, `grass`, `cottage`) as soft accents; fade/rise entrance animation with `--ease-entrance`, disabled under reduced motion.

**4.2 Features — 3 Cards**
- Section header pattern (used by all sections): Caveat eyebrow + Playfair H2 + Nunito lede.
- Three `.card`s in a wrapping flex row (`flex: 1 1 300px`), stacking to one column on mobile.
- Each card: Material Symbol icon inside a stitched circular chip (`bakery_dining` — Seasonal baking kits; `local_florist` — Wildflower seed library; `volunteer_activism` — Handcrafted goods), Playfair H3, Nunito copy. Hover lift + focus-within per 3.2.

**4.3 How It Works — 3 Steps**
- Three steps in a flex row connected on desktop by a dashed "stitch" line (CSS pseudo-element using `--border-default`); stacked column on mobile.
- Each step: numbered stitched circle + Material Symbol (`shopping_basket` — Choose your box; `forest` — We gather the season; `coffee` — Slow down & enjoy), Playfair H3, short copy.

**4.4 Testimonials**
- Three `.card` quote blocks in a wrapping flex row — static layout, no auto-rotating carousel.
- Quote set in Playfair Display italic (or Caveat); attribution with a CSS initials avatar (stitched circle, `--bg-surface-strong`), name, and locale.
- Rating: five `favorite` Material Symbol hearts inside `<span role="img" aria-label="Rated 5 out of 5">`.

**4.5 Pricing — 3 Tiers**
- Tiers: **Seedling** ($24/season), **Hearth** ($42/season, featured), **Homestead** ($68/season).
- Each is a `.card` with Playfair tier name, large price, per-season caption, feature list with `check` icons, and a CTA (`.btn--primary` for the featured tier, `.btn` for the others).
- Featured tier: `.card--featured` — solid 2px `--primary-strong` border (vs. dashed), "Most popular" `.badge`, `--shadow-lg`. If you add a billing toggle, it must be an accessible radio group.

**4.6 FAQ**
- Accordion per 3.4 with 5–6 questions (box contents, shipping timing, gifting, pausing/canceling, compostable packaging), wrapped in a stitched panel.

**4.7 Final CTA**
- Full-width gingham panel with stitched border, centered flex column: Playfair H2, Caveat subline, and the email capture form per 3.3.
- JS flow: validate email → invalid state with `role="alert"` message → `.is-loading` spinner (~1.2s, simulated) → `.is-success` button state + success message in an `aria-live="polite"` region. No backend calls.

**4.8 Footer with Secondary Links**
- Gingham background, stitched top border, wrapping flex columns: brand block (Caveat wordmark + one-liner), three link groups (Explore, Company, Support), and social links rendered as small stitched pill buttons with platform names (no brand SVGs).
- Links in `--text-secondary` with underline on hover **and** focus — never color-only. Bottom bar: copyright + "Made slowly" tagline.

---

## 5. Core UX & Micro-Interaction Rules

- **Responsive by default:** fluid sizing and `clamp()` typography; zero horizontal overflow from 320px up.
- **Smooth animations:** `transition: var(--transition-normal) var(--ease-standard)` on all state changes; a global `prefers-reduced-motion: reduce` block disables transforms, spins, and shimmer.
- **Accessibility:** AA contrast in both light and dark modes; never rely on color alone — pair every state with an icon or text. Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), a "Skip to content" link, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, and `aria-live` regions for all dynamic feedback (form errors, loading, success).
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** `.btn--danger` must be visually distinct in both themes.

---

## 6. Deliverables & Output Format

- **Files:** separate `index.html`, `style.css`, and `script.js`. The HTML contains exactly one script reference — `<script src="script.js" defer></script>` — and no inline scripts, no inline styles, and no inline event handlers; all listeners attach in `script.js`.
- **Naming:** BEM convention only (matching `.btn--primary`, `.card--featured`, `.faq__trigger`), applied consistently across HTML, CSS, and JS hooks — never mix conventions.
- **Head requirements:** `lang="en"`, viewport meta, title and description, Google Fonts links (Nunito, Playfair Display, Caveat), and the Material Symbols stylesheet.
- **Content:** original, coherent English copy for every section per the concept above — no lorem ipsum, no unrequested placeholders, no `#ffffff`, no inline SVGs, no external images.
- **Validation before delivery:** test light and dark modes, mobile and desktop widths, and keyboard-only navigation. Deliver complete, runnable code on the first attempt.
