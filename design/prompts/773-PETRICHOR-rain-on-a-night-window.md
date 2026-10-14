# SYSTEM SPECIFICATION — CODING AGENT BUILD BRIEF
## Landing Page: "PETRICHOR — Rain on a Night Window" (Glassmorphism, Complete Build, First Attempt)

You are a Senior Frontend Engineer and Expert UI Designer. Build a **complete, production-quality landing page in a single pass**. Do not ask clarifying questions — make reasonable, taste-driven decisions that stay strictly within this specification.

**Theme:** PETRICHOR — rain on a night window. Mood: monsoon, water droplets on glass, diffused city light through a wet window. **Style:** Glassmorphism, 2020s digital. **Signature effects:** blur, translucent glass surfaces, hover feedback. **Copy language:** All user-facing copy must be written in **English**.

**Required sections:** Header/Nav · Hero · Features (3 cards) · How It Works (3 steps) · Testimonials · Pricing (3 tiers) · FAQ · Final CTA · Footer with secondary links.

**Theme mode note:** The source spec marks **Light mode as primary** (`✓ Light / ○ Dark`). Light mode is therefore the default presentation — but Dark Mode support **remains mandatory** (see Rule 1.3); in this theme, dark mode is the literal "night window" mood and must be fully designed, not an afterthought.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML. No inline event-handler attributes (`onclick`, etc.) either — all JS behavior binds via `addEventListener` in `script.js`.
- **Class/ID selectors only:** Every visual property, layout rule, and state is targeted via class or ID selectors defined in `style.css`.
- **Clean, semantic markup:** HTML stays structural and agnostic of styling. Changing the look must require editing only `style.css`, never the markup.
- **No images, no inline SVGs:** All atmosphere (gradients, orbs, shadows, textures) is built purely with CSS. Icons come exclusively from Google Material Symbols.

### 1.2 CSS Variables & Theme Tokens
All visual tokens must live in `:root` and the `.dark` class. Use **exactly this mapping** for the PETRICHOR palette:

```css
:root {
  /* Light (default) — "monsoon daylight through wet glass" */
  --primary: #5a7ac9;            /* accent: links, focus rings, highlights */
  --secondary: #2a3350;          /* deep navy: primary button surface */
  --bg-primary: #dfe8ff;         /* soft rain-light base — NOT pure white */
  --bg-secondary: #fefefe;       /* elevated solid surface — never #ffffff */
  --text-primary: #2a3350;       /* dark text on light bg (pairing enforced) */
  --text-secondary: #7a8699;     /* supporting/meta copy */
  --text-success: #2e7d63;
  --text-error: #c2455a;
  --border-default: rgba(122, 134, 153, 0.30);
  --border-success: rgba(46, 125, 99, 0.55);
  --border-error: rgba(194, 69, 90, 0.55);
  --glass-bg: rgba(254, 254, 254, 0.40);
  --glass-border: rgba(201, 210, 232, 0.55);
  --shadow-text: 0 2px 16px rgba(90, 122, 201, 0.18);

  --radius-sm: 8px;  --radius-md: 14px;  --radius-lg: 24px;
  --shadow-sm: 0 2px 12px rgba(5, 7, 12, 0.08);
  --shadow-md: 0 14px 36px rgba(5, 7, 12, 0.16);
  --spacing-gap: 1.5rem;
  --transition-fast: 140ms;  --transition-normal: 280ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --z-header: 90;  --z-dropdown: 100;  --z-modal: 1000;  --z-toast: 1100;
  --font-base: 'Inter', sans-serif;
  --font-display: 'Outfit', sans-serif;
}

.dark {
  /* Dark — "rain on a night window" (the theme's native mood) */
  --bg-primary: #05070c;
  --bg-secondary: #2a3350;
  --text-primary: #dfe8ff;       /* light text on dark bg (pairing enforced) */
  --text-secondary: #c9d2e8;
  --text-success: #7fd8b4;
  --text-error: #ff9099;
  --border-default: rgba(223, 232, 255, 0.18);
  --glass-bg: rgba(42, 51, 80, 0.38);
  --glass-border: rgba(223, 232, 255, 0.14);
  --shadow-sm: 0 2px 12px rgba(0, 0, 0, 0.45);
  --shadow-md: 0 14px 36px rgba(0, 0, 0, 0.55);
  --shadow-text: 0 4px 28px rgba(90, 122, 201, 0.35);
}
```

- **Contrast pairing is mandatory in every theme:** light backgrounds pair with dark text, dark backgrounds with light text. Verify ≥ 4.5:1 for body text and ≥ 3:1 for large text in **both** modes. `#7a8699` on `#dfe8ff` is only acceptable for large/weighted meta text — for small secondary copy, derive a darker blend toward `#2a3350` instead of failing contrast.
- **No foreign hues:** Derive all tints/shades via `rgba()` blends of the six palette colors. The only permitted additions are the semantic success/error tokens above. Where white is needed, use `#fefefe`, never `#ffffff`.

### 1.3 Mandatory Dark Mode Support
- **Tokens:** Dark values live under the `.dark` class applied to `<html>`. Background and text variables must swap seamlessly with zero HTML restructuring.
- **Persistence:** `script.js` reads `localStorage` on load; on first visit, fall back to `prefers-color-scheme`. The toggle writes the choice back to `localStorage`.
- **Visible toggle control** in the header: a real `<button>` with dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode"), correct `aria-pressed` state, and Google Material Symbols `light_mode` / `dark_mode` icons (icon visibility switched via CSS classes, not inline swaps).
- **Design dark mode with equal care:** it is the literal theme concept — deep night glass, faint neon-blue glow (`--shadow-text`), luminous `#dfe8ff` text.

### 1.4 Flexbox Layout & Mobile-First Alignment
- **Build every layout structure with Flexbox.** Every flex container defaults to `align-items: center` unless an exception is explicitly justified below.
- **Documented exceptions (the only permitted deviations):** `.input-group` uses `flex-direction: column; align-items: stretch` (form fields need full-width labels/inputs); `.card` bodies and footer columns may use `flex-start` for top-aligned text; nav/header use `space-between` for main-axis distribution.
- **Mobile-first:** all rows convert to columns on small viewports via `clamp()` sizing and `@media` breakpoints. **Zero horizontal scrolling at any viewport width.**

### 1.5 Styling Approach
- Use Tailwind CSS **or** clean custom CSS — pick **one** path and never mix. Every utility must map back to the CSS variables above or to reusable semantic classes: `.btn`, `.card`, `.input-group`, `.glass`.
- If custom CSS: organize as tokens → base → components → sections, mirroring `@layer` discipline.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Fonts:** Load from Google Fonts — **Outfit** (display headings, `--font-display`) and **Inter** (body, `--font-base`) — via `<link>` tags with `display=swap`. Bind families only through the CSS variables. Use `clamp()` for fluid type scale; hero `h1` carries a subtle `text-shadow: var(--shadow-text)`.
- **Icons:** Google Material Symbols (Outlined). Forbid raw inline SVGs, local icon files, emoji-as-icons, and any other icon source. Suggested thematic icons: `water_drop`, `rainy`, `air`, `waves`, `bolt`, `format_quote`, `expand_more`, `arrow_forward`, `check_circle`, `error`, `light_mode`, `dark_mode`, `menu`, `close`, `progress_activity`.

---

## 2. THEME DIRECTION — PETRICHOR GLASSMORPHISM

### 2.1 Atmosphere Layer (pure CSS, decorative)
- **Background wash:** a soft, layered gradient built from `--bg-primary` with faint bands of `#c9d2e8` / `#2a3350`; in dark mode, a deep night wash of `#05070c` into `#2a3350`.
- **Ambient "city light" orbs:** 2–3 large, heavily blurred radial gradients of `#5a7ac9` and `#7a8699` positioned behind content (`filter: blur(...)`, `pointer-events: none`, `aria-hidden`) — the blurred streetlights of a rainy night.
- **Optional rain streak layer:** fine diagonal `repeating-linear-gradient` streaks on a fixed pseudo-element, animated slowly with `@keyframes` translation. Extremely subtle, `pointer-events: none`, stacked **below** content, and fully disabled under `prefers-reduced-motion`.

### 2.2 The Glass Recipe
Define a reusable `.glass` surface:
- `background: var(--glass-bg);`
- `backdrop-filter: blur(16px) saturate(150%);` plus the `-webkit-backdrop-filter` prefix;
- `border: 1px solid var(--glass-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);`
- **Fallback:** inside `@supports not (backdrop-filter: blur(1px))`, give `.glass` a more opaque background so content stays readable everywhere.
- Apply to: header, hero panel, all cards, pricing tiers, testimonial cards, final CTA panel.

### 2.3 Hover & Motion Language
- **Every interactive glass element** lifts on hover: `transform: translateY(-2px)`, stronger `--shadow-md`, brighter `--glass-border`, subtle `filter: brightness(1.05)`.
- All state changes transition with `transition: all var(--transition-normal) var(--ease-standard)`; quick feedback uses `--transition-fast`.
- Use `box-shadow`, `text-shadow`, `transforms`, and `border-radius` generously — this is the spec's requested CSS vocabulary.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

### 3.1 Buttons — `.btn` (all states, styled via CSS classes only)
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, `border-radius: var(--radius-md)`, `font-family: var(--font-base)`, medium weight.
- **Variants:** `.btn--primary` = deep navy surface (`var(--secondary)`) with `#dfe8ff` text in both themes; `.btn--secondary` = ghost glass (`var(--glass-bg)`, `var(--glass-border)`, `var(--text-primary)`); `.btn--danger` = visually distinct in both themes via `--text-error` / `--border-error`.
- **Hover:** brightness/shadow shift, `cursor: pointer`.
- **Focus-visible:** distinct ring via CSS variables (`box-shadow: 0 0 0 3px rgba(90, 122, 201, 0.45)` + offset outline) — never remove it.
- **Active/pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** disables interaction and double-clicks (`pointer-events: none`, `aria-busy="true"`), shows a rotating CSS spinner or animated `progress_activity` Material Symbol, and **never changes button dimensions**.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error (`.is-success` / `.is-error`):** temporary feedback tinted by `--text-success` / `--text-error`, paired with an icon and, where textual, an `aria-live` announcement — never color alone.

### 3.2 Cards — `.card` (glass)
- **Default:** flexible Flexbox column, `.glass` recipe, `--bg-secondary`-consistent surfaces, generous `--spacing-gap`.
- **Hover:** elevation shift + `translateY(-2px)` (see 2.3).
- **Focus-within:** card border highlights toward `--primary` whenever a child link/button receives focus.
- **Loading (skeleton):** define a shimmer `@keyframes` animation class (gradient sweep) that preserves layout dimensions.
- **Empty state:** define a structured fallback — centered Google Material Icon, short guidance text — reusable if any dynamic area renders no content.

### 3.3 Forms & Inputs — `.input-group` (used in the Final CTA email capture)
- **Structure:** a Flexbox container (`flex-direction: column; align-items: stretch` — the justified exception in 1.4) wrapping a `<label>`, the `<input>`, and a **dedicated error-feedback element** referenced by `aria-describedby` and announced via `aria-live="polite"`.
- **States (all styled via classes/pseudo-classes):** empty; focused (accent outline ring); filled; valid (`.is-valid`: success border + `check_circle` icon); invalid (`.is-invalid`: `--border-error`, error text, `error` icon + message — never color alone); disabled; read-only.
- **Submission flow:** validate in `script.js`; render button loading state, then success (`is-success` + status message) or error (`is-error` + message) feedback in the `aria-live` region.

### 3.4 Modal / Popup (conditional — only if you implement any overlay, e.g., a plan-details dialog)
- **States:** opening, open, loading, success/error, closing — all animated via CSS transitions.
- **UX:** centered Flexbox container (`align-items: center`), blurred backdrop overlay, Google Material Symbol `close` button, keyboard **focus trapping**, `role="dialog"` + `aria-modal`, close via `Esc` and overlay click, focus returns to the trigger on close. Stack at `--z-modal`; any toast at `--z-toast`.

### 3.5 FAQ Accordion
- Each trigger is a real `<button>` with `aria-expanded` and `aria-controls`; each panel carries `role="region"` + `aria-labelledby`. Panels animate open/close in pure CSS (e.g., `grid-template-rows: 0fr → 1fr` with inner `overflow: hidden`). The `expand_more` chevron rotates 180° on open. Fully keyboard operable; respect `prefers-reduced-motion`.

### 3.6 Header / Nav
- **Sticky glass header** (`.glass`, `position: sticky`, `z-index: var(--z-header)`): brand wordmark "Petrichor", anchor links with hover + focus-visible treatments, theme toggle (per 1.3).
- **Mobile:** below ~768px, links collapse behind a `menu`/`close` Material Symbol button; the menu panel is a glass dropdown at `--z-dropdown`, animated, keyboard operable, with a visible focus ring on the toggle.

---

## 4. PAGE STRUCTURE & CONTENT REQUIREMENTS

Write **original, specific English copy** in the theme's voice — no lorem ipsum, no filler. Invent one coherent product narrative (e.g., an ambient rain/focus-sleep companion) and keep every section consistent with it. Use semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`, exactly one `<h1>`, logical heading order.

1. **Hero** — `h1` display headline with soft `--shadow-text`, supporting subhead, one `.btn--primary` and one `.btn--secondary` CTA (Material Symbol `arrow_forward`), composed on a large `.glass` panel over the atmospheric background.
2. **Features** — exactly 3 `.card` glass cards: frosted icon circle (Material Symbols, e.g., `water_drop`, `air`, `rainy`), `h3` title, one concise benefit paragraph each.
3. **How It Works** — 3 numbered steps (`01 / 02 / 03` badges in glass circles), top-aligned, stacking vertically on mobile; a subtle connector line is allowed via CSS pseudo-elements only.
4. **Testimonials** — 3 glass cards: `format_quote` icon, quoted English copy, attribution with name + role and a monogram initials circle (no photos).
5. **Pricing** — 3 tiers with themed names (e.g., Drizzle / Monsoon / Tempest): price, feature list with `check_circle` icons, per-tier CTA. The middle tier uses `.card--featured`: accent border, elevation, and a "Most popular" badge.
6. **FAQ** — 5 themed questions as the accordion from 3.5.
7. **Final CTA** — full-width glass panel: `h2`, one line of persuasive copy, and the email capture `.input-group` from 3.3 with the full validate → loading → success/error flow.
8. **Footer** — secondary link columns (Product / Company / Legal), brand, copyright line; every link has hover and focus-visible feedback.

---

## 5. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` sizing, breakpoints without horizontal overflow, rows → columns on mobile, minimum 44px touch targets everywhere.
- **Smooth animations:** CSS transitions on all state changes via the token set; **must respect `prefers-reduced-motion`** (disable transforms, orb drift, rain layer, and shimmer when reduced).
- **Accessibility:** sufficient contrast in both modes; never rely on color alone for any state; semantic HTML5; correct ARIA roles/labels on the toggle, accordion, form feedback, and any modal; logical DOM/focus order; full keyboard operability with visible `:focus-visible` rings; `aria-live` regions for dynamic feedback.
- **Mandatory visual feedback:** every click, hover, focus, and submission produces a visible state change.
- **Destructive actions** (`.btn--danger`) must remain visually distinct in both light and dark themes.

---

## 6. DELIVERABLES & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` — separate, clean, commented. The HTML contains Google Fonts + Material Symbols `<link>` tags and **exactly one** `<script src="script.js" defer></script>` — no other script blocks, no inline styles.
- **script.js scope:** theme toggle + `localStorage` persistence with `prefers-color-scheme` fallback; mobile menu; FAQ accordion; form validation with loading/success/error states; modal logic (only if a modal exists), including focus trapping.
- **Naming:** BEM throughout (`block__element--modifier`), anchored on the semantic bases `.btn`, `.card`, `.input-group`, `.glass`. Never mix conventions.
- **No unrequested placeholders:** since no source copy was supplied, write real, thematic English copy for every section — placeholder text is not permitted.
- **Self-contained build:** no image assets, no external JS libraries, no inline SVGs. Deliver the complete landing page on this first attempt with nothing stubbed, commented-out, or left as TODO.
