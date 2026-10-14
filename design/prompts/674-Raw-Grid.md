# CODING PROMPT — "RAW GRID" NEO-BRUTALIST LANDING PAGE

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete landing page on the first attempt. Every rule below is mandatory. Deliver production-quality, accessible, responsive code — no drafts, no apologies, no lorem ipsum.

---

## 0. THEME DEFINITION — "RAW GRID"

- **Style:** Neo-Brutalist, Scrappy, Graphic, Direct (2020s Neo-Brutalism)
- **Keywords:** thick borders, pink offset shadows, sage accents, dense grid, compact spacing, no-nonsense copy
- **Global Aesthetic Laws (apply to every component):**
  - Every surface and interactive element carries a hard `3px solid` border. No soft blurs, no gradients, no glassmorphism.
  - Shadows are hard-edged solid offsets, never blurred: `box-shadow: 5px 5px 0 #F472B6` (primary pink) and `3px 3px 0` black ink (secondary/small elements).
  - Sharp corners by default (`--radius-sm: 0`).
  - Hover = bold color shift at 150ms. Active/pressed = element translates INTO its shadow (shadow collapses to `0 0 0`, element moves by the offset). High-contrast, tactile, graphic-confident.
  - Dense rhythm: compact `1.2rem` gaps, tight typography, grid-line texture in the hero (CSS gradients only — never images).
  - **No raster images anywhere.** All visuals are built from CSS: borders, tints, offset shadows, chips, and Google Material Symbols icons.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **The `style="..."` attribute is forbidden in the HTML.**
- Target everything via class/ID selectors only.
- HTML stays semantic and styling-agnostic (`header`, `main`, `section`, `footer`, `h1`–`h3`, `nav`, `button`, `label`, `input`); reskinning the site must require CSS edits only.

**1.2 CSS Variables & Theme Tokens**
Define all visual tokens in `:root`. Exact values:

```css
:root {
  /* Action & ink */
  --primary: #111111;         /* borders, button ink, black offset shadows */
  --secondary: #F472B6;       /* hard pink accent: offset shadows, highlights */
  /* Surfaces */
  --bg-primary: #FAFAFA;      /* page background — never #ffffff */
  --bg-secondary: #FEFEFE;    /* card surfaces */
  --bg-tertiary: #F5F5F5;     /* gray chips, badges, meta strips */
  /* Text */
  --text-primary: #0A0A0A;
  --text-secondary: #555555;
  --text-success: #2F6B3F;
  --text-error: #D7263D;
  /* Tints */
  --pink-tint: #F2D4CF;       /* soft pink panels — dark text only */
  --sage: #86A882;            /* sage accent: borders, icons, chips */
  --sage-tint: #E5EDD6;       /* soft sage panels — dark text only */
  /* Borders (full shorthand) */
  --border-default: 3px solid #111111;
  --border-error: 3px solid #D7263D;
  --border-success: 3px solid #2F6B3F;
  /* Shape & depth */
  --radius-sm: 0;  --radius-md: 2px;  --radius-lg: 4px;
  --shadow-sm: 3px 3px 0 #111111;    /* small elements: black offset */
  --shadow-md: 5px 5px 0 #F472B6;    /* primary components: pink offset */
  /* Rhythm & motion */
  --spacing-gap: 1.2rem;
  --transition-fast: 120ms;
  --transition-normal: 150ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* Type */
  --font-base: 'Space Grotesk', sans-serif;
  /* Stacking */
  --z-dropdown: 100;  --z-modal: 200;  --z-toast: 300;
}
```

- **Contrast Pairing (enforced in every theme, not just default):** light surfaces (`#FAFAFA`, `#FEFEFE`, `#F5F5F5`, `--pink-tint`, `--sage-tint`) pair only with `--text-primary` dark text; dark/ink surfaces pair only with `--text-primary` light text. `--secondary` (#F472B6) and `--sage` (#86A882) are **never** used as backgrounds behind body text — they are reserved for borders, offset shadows, icons, and chips.

**1.3 Mandatory Dark Mode**
- **Exception note:** the source style spec lists dark mode as "None"; the mandatory dark-mode rule overrides this — dark mode must ship, styled as an inverted ink-on-paper variant of Raw Grid.
- Define dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>` (class takes precedence when applied):

```css
--primary: #FAFAFA;
--bg-primary: #0A0A0A;
--bg-secondary: #161616;
--bg-tertiary: #212121;
--text-primary: #FAFAFA;
--text-secondary: #A6A6A6;
--text-success: #7FC98B;
--text-error: #FF6B7E;
--pink-tint: #3B2530;   /* light text only */
--sage: #9DBE99;
--sage-tint: #252F26;   /* light text only */
--border-default: 3px solid #FAFAFA;
--border-error: 3px solid #FF6B7E;
--border-success: 3px solid #7FC98B;
--shadow-sm: 3px 3px 0 #FAFAFA;
--shadow-md: 5px 5px 0 #F472B6;   /* pink stays — it pops on ink */
```

- Background and text variables must flip seamlessly with **zero HTML restructuring**. Primary buttons invert automatically (light surface, dark text) because they are driven by tokens.
- **Toggle control:** a visible `.theme-toggle` button in the header with a Google Material Symbols icon (`dark_mode` / `light_mode`), correct `aria-pressed` state, and a dynamic `aria-label` ("Switch to dark theme" / "Switch to light theme").
- **Persistence:** store the choice in `localStorage`; on first visit fall back to `prefers-color-scheme`.
- **Exception clause:** one minimal inline theme-bootstrap `<script>` in `<head>` is permitted solely to apply the stored theme class before first paint and prevent a flash of the wrong theme; no other inline script may exist.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox (`display: flex`).
- **Every flex container defaults to `align-items: center`** unless an exception is justified with an inline CSS comment. Justified exceptions on this page: card columns (`stretch`, for equal heights) and card/step body text (`flex-start`, for readability).
- Card grids use `flex-wrap` with `gap: var(--spacing-gap)`; rows convert to a single column below `48em` (768px). Media queries are mobile-first `min-width` only.
- No horizontal scrolling at any viewport down to 320px. Use a fluid container: `width: min(100% - 2.5rem, 72rem); margin-inline: auto;` and `clamp()` for all type sizes.

**1.5 CSS Methodology**
- Use clean custom CSS organized in native `@layer` blocks, in order: `tokens, base, layout, components, utilities`. Do not add any CSS framework or CDN.
- Every component style maps back to the tokens above via reusable classes: `.btn`, `.btn--primary`, `.card`, `.chip`, `.input-group`, `.faq__item`, etc. Never hardcode hex values outside the token layer.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load **Space Grotesk** (weights 400, 500, 700) via Google Fonts `<link>` with `preconnect`. Bind it to `--font-base`. Body text is 400/1.5; headings and buttons are 700, uppercase kickers with slight positive tracking, hero display with tight negative tracking. Hero H1: `clamp(2.75rem, 7vw, 5rem)`.
- **Exception note:** the source spec's "Segoe UI / system-ui for hero headlines" directive is superseded by the mandatory Google Fonts rule — Space Grotesk is both the body and display face; system fonts may appear only as fallbacks inside the font stack.
- Icons: **Google Material Symbols (Sharp variant)** loaded via its Google Fonts stylesheet, with `font-variation-settings: 'FILL' 1` configured in CSS. **Raw inline SVGs and local icon files are forbidden.** Use only real glyph names, e.g.: `bolt`, `grid_view`, `rocket_launch`, `shield`, `speed`, `check`, `close`, `expand_more`, `format_quote`, `mail`, `arrow_forward`, `error`, `task_alt`, `progress_activity`, `dark_mode`, `light_mode`.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons — All States as CSS Classes**
- **Base `.btn`:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem; min-height: 44px; min-width: 44px; padding: 0.75rem 1.5rem; font-weight: 700; text-transform: uppercase; border: var(--border-default); cursor: pointer;` with transitions on `background-color`, `transform`, and `box-shadow` at `var(--transition-normal) var(--ease-standard)`.
- **`.btn--primary`:** background `--primary`, text `#FEFEFE` (light) / inverted in dark, `box-shadow: var(--shadow-md)` (pink offset).
- **`.btn--secondary`:** background `--bg-secondary`, text `--text-primary`, `box-shadow: var(--shadow-sm)` (black offset).
- **Hover (150ms):** bold color shift per the spec — e.g., secondary flips its fill to `--secondary` pink with ink text — plus `transform: translate(-2px, -2px)` and the shadow grows (7px pink / 4px ink).
- **Active/Pressed:** `transform: translate(3px, 3px)` and `box-shadow: 0 0 0` — the button slams into its shadow.
- **Focus:** global `:focus-visible { outline: 3px solid var(--primary); outline-offset: 3px; }` — the offset gap guarantees visibility on every surface in both themes. Never remove or restyle focus rings away.
- **Loading `.btn--loading`:** `pointer-events: none` (prevents double-clicks), `aria-busy="true"`, label replaced by the rotating Material Symbol `progress_activity` (CSS keyframe rotation) **without changing button dimensions** (fixed content box / consistent padding).
- **Disabled `[disabled]`:** `opacity: 0.5; filter: grayscale(1); box-shadow: none; cursor: not-allowed;` no transforms.
- **Success/Error:** `.btn--success` / `.btn--error` swap border and fill to the success/error tokens plus a status icon (`task_alt` / `error`); announce outcomes through an `aria-live="polite"` region that exists in the DOM from first render.
- **`.btn--danger`:** define it (error tokens, high-contrast in both themes) even though this page has no destructive action — the pattern must ship.

**2.2 Cards — Features, Testimonials, Pricing Tiers**
- **Default `.card`:** flex column, background `--bg-secondary`, `border: var(--border-default)`, `box-shadow: var(--shadow-sm)`, `border-radius: var(--radius-sm)`, internal `gap: var(--spacing-gap)`, consistent padding. Equal heights via the documented `stretch` exception.
- **Hover (interactive cards only — features and pricing):** `transform: translate(-2px, -2px)` with shadow growth. Testimonial cards are non-interactive: **no hover transform** (never fake interactivity).
- **Focus-within:** when a card's inner link/button receives focus, the card border shifts to `--secondary` or `--sage` — the relationship must be visible.
- **Loading (Skeleton):** ship a `.card--skeleton` class with a CSS shimmer sweep animation (linear-gradient, 1.2s loop) that preserves layout dimensions.
- **Empty State:** ship a `.card--empty` pattern — centered Material Symbol icon in a bordered chip plus one line of guidance text.

**2.3 Form & Input — Final CTA Email Capture**
- **Structure `.input-group`:** flex container wrapping a `<label>`, an `<input>`, and a dedicated `.form-error` feedback element with `aria-live="polite"`.
- **States, all defined in CSS:** empty; focused (the global focus ring plus a `--secondary` border shift); filled; valid (`.input--success`: success border + inline `task_alt` icon); invalid (`.input--error`: error border, `--text-error` message text, `error` icon — never color alone); disabled; read-only.
- The Final CTA form (Section 5.8) must exercise empty → focus → invalid (empty/malformed email) → valid → loading → success.

**2.4 Modal / Popup**
- Not applicable: no modal is requested — **do not build one.** Retain `--z-modal` unused. If an overlay were ever added, it must follow: animated open/close via CSS, centered flex backdrop, Material Symbol close button, focus trap, `Esc` and overlay-click dismissal.

**2.5 FAQ Accordion (Custom Widget — A11y Critical)**
- Pattern per item: `<h3><button class="faq__question" aria-expanded="false" aria-controls="..." id="...">Question <span class="material-symbols-sharp">expand_more</span></button></h3>` followed by `<div class="faq__answer" role="region" aria-labelledby="..." hidden>`.
- Toggle `aria-expanded` and `hidden` in `script.js`; chevron rotates 180°; open question gains a `--secondary` border highlight, 150ms.
- Fully keyboard operable (native `button` semantics, logical tab order); animation respects `prefers-reduced-motion`.
- First item renders open (`aria-expanded="true"`, answer visible).

**2.6 Theme Toggle**
- `.theme-toggle` is a 44×44px bordered button following all `.btn` state rules (hover shift, active press-into-shadow, focus ring), with icon swap, `aria-pressed`, and dynamic `aria-label` per Section 1.3.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` type, mobile-first breakpoints at 768px and 1024px, zero horizontal overflow at 320px.
- **Motion:** every state change transitions at `var(--transition-normal)` (150ms). Under `prefers-reduced-motion: reduce`, disable transforms, shimmer, spinner rotation, and `scroll-behavior: smooth`.
- **Accessibility:** body text contrast ≥ 4.5:1 and UI/large text ≥ 3:1 in **both** themes; never communicate state by color alone (always icon + text); semantic HTML5 with exactly one `h1`, logical `h2`/`h3` hierarchy; ARIA on the toggle, accordion, and live regions; complete keyboard operability; visible focus everywhere; a visually hidden skip-link to `<main>` as the first focusable element.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Anchors:** `scroll-margin-top` on sections so sticky-header navigation never obscures headings.
- **Hero grid texture:** decorative grid lines via CSS `linear-gradient` background only, adapted for dark mode, never an image.

---

## 4. DELIVERABLES & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` — separate, complete, runnable. Exactly one `<script src="script.js" defer></script>` before `</body>`, plus the single permitted theme-bootstrap line in `<head>` (Section 1.3 exception). Google Fonts `<link>`s in `<head>`.
- **Naming:** strict BEM (`block__element--modifier`) across the entire deliverable — never mix conventions.
- **Copy:** author all user-facing copy yourself, in **English**, in the Raw Grid voice — scrappy, direct, confident, zero fluff. Short declarative sentences. Punchy, benefit-led headlines (tone anchor: "Work fast. Ship loud."). Realistic testimonial quotes with first name + role, plausible pricing numbers, 4–5 genuine FAQ questions with 2–3 sentence answers. **No lorem ipsum anywhere.**
- **Placeholders:** the only permitted `href="#"` placeholders are the footer's secondary links to pages that don't exist (About, Careers, Privacy, Terms); anchor links to on-page sections must use real IDs.
- **Product identity:** invent one short, punchy product name and use it consistently across header wordmark, hero, footer, and copy.

---

## 5. PAGE SECTION SPECIFICATION (Build in This Order)

**5.1 Header (slim, sticky):** skip-link, then a flex bar (`align-items: center`, `justify-content: space-between`): bordered wordmark chip, anchor links to `#features`, `#how`, `#pricing`, `#faq` (hidden below 768px via media query — no JS menu), and the `.theme-toggle` at the right. `border-bottom: var(--border-default)`, background `--bg-primary`, z-index `--z-dropdown`.

**5.2 Hero:** dense CSS grid-line texture background; mobile: flex column; desktop: two-part flex row. One `h1` in Space Grotesk 700 with one word wrapped in `.highlight` (pink-tint background, 3px border, slight rotate for the scrappy feel). Direct subhead (1–2 sentences). CTA row: `.btn--primary` + `.btn--secondary`. A proof strip with `check` icons. Right side: a CSS-built graphic — a cluster of bordered stat/label chips with pink and black offset shadows.

**5.3 Features (3 cards):** kicker chip + `h2`; flex-wrap row of three equal `.card`s (1-up mobile, 3-up ≥ 768px), each with a Material Symbol icon in a bordered sage-tint badge, `h3`, direct description, and a "Learn more" text link with icon — demonstrating card hover and `:focus-within`.

**5.4 How It Works (3 steps):** three bordered step cards with oversized Space Grotesk numerals ("01", "02", "03") in pink/sage bordered chips, icon, title, short copy. Flex column mobile, row desktop, connected by a CSS pseudo-element rule line on desktop.

**5.5 Testimonials:** three non-interactive `.card`s — `format_quote` icon, quote copy, and an author row: bordered initials chip (alternating pink/sage tints), name, role.

**5.6 Pricing (3 tiers):** flex row of three `.card`s. Middle tier `.card--featured`: `--pink-tint` background, `--shadow-md` pink offset, a rotated (-2deg) "MOST POPULAR" badge chip, larger padding, and `.btn--primary`; side tiers use `.btn--secondary`. Each tier: name, big price, 3–4 list items with `check` icons. **Do not add a monthly/yearly toggle — it was not requested.**

**5.7 FAQ:** bordered container stack with `var(--spacing-gap)` gaps; 4–5 accordion items per Section 2.5; first item open.

**5.8 Final CTA:** high-impact panel — `--pink-tint` background, 3px border, `--shadow-md`; `h2`, one direct line, and the email capture `.input-group` (per Section 2.3) with a `.btn--primary` submit. On submit: validate → invalid shows `.form-error` in `--text-error` with `aria-live` announcement → valid shows `.btn--loading` (800ms) → `.btn--success` with a confirmation message in the live region. This front-end demo lives in `script.js`.

**5.9 Footer with secondary links:** `border-top: var(--border-default)`. Flex-wrap columns: wordmark + one-liner; "Product" group (real anchors to Features, Pricing, FAQ); "Company" group (About, Careers, Contact — `href="#"` permitted); "Legal" group (Privacy, Terms). Bottom bar: © 2025 + product name, "Back to top" link. No newsletter form here — the capture already lives in 5.8.

**5.10 `script.js` scope (nothing more):** theme bootstrap/toggle with `localStorage`; FAQ accordion; CTA form demo. No other JavaScript.

---

## 6. ACCEPTANCE CHECKLIST (verify before submitting)

- Zero inline `style` attributes; zero inline SVGs; icons are Material Symbols only.
- Dark mode fully functional: toggle works, `aria-pressed` correct, choice persists across reloads, correct `prefers-color-scheme` fallback, no theme flash.
- Every `.btn` state exists: hover, active press-into-shadow, focus ring, loading, disabled, success, error, danger.
- Cards show hover/focus-within where interactive; skeleton and empty-state classes ship.
- Full keyboard walkthrough succeeds: skip-link → toggle → anchors → CTAs → FAQ → form, with visible focus everywhere.
- No horizontal scroll at 320px; reduced-motion respected; contrast verified in both themes.
- BEM naming consistent end to end; copy in English, on-voice, lorem-ipsum-free; three files, one deferred script.
