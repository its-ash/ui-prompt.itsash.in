# BUILD PROMPT — Complete Landing Page · Theme: "Asymmetric / Broken Grid"

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-grade landing page on the first attempt. The page sells a fictional editorial-layout tool for designers and creative teams, brand name **OFFSET**. Every rule below is mandatory. All user-facing copy must be written in **English** (translate any non-English source material before use).

---

## 1. THEME DIRECTION — ASYMMETRIC / BROKEN GRID

**1.1 Identity**
- **Style:** claude-artisan/minimal-organic, editorial, expressive, 2017–present.
- **Keywords:** broken grid, offset layout, intentional off-grid, overlapping elements, dynamic tension and asymmetry, layered z-depth, diagonal flow.
- **Reference world:** Awwwards agency sites, fashion lookbooks.

**1.2 Signature Moves (all mandatory, applied consistently)**
- **Hard offset shadows, zero blur:** `--shadow-sm: 4px 4px 0`, `--shadow-md: 8px 8px 0`, `--shadow-lg: 14px 14px 0` — solid, never diffused.
- **Slight rotation off-axis:** `--tilt-1: rotate(-1.4deg)`, `--tilt-2: rotate(1.1deg)` on cards, buttons, badges, nav, and media blocks.
- **Overlap via negative margin:** `--overlap: -14px` for stacked/adjacent cards, testimonial clusters, and hero media over headline.
- **Hard edges:** all radii are `0px` (tension comes from position, not softness); only pills (`--radius-pill: 999px`) for badges.
- **Thick borders:** 2–3px solid `--color-border` on cards, inputs, nav, media.
- **Diagonal flow:** every section composes content along a descending/ascending diagonal — alternate left/right alignment, staggered card offsets, stepped step blocks. No perfectly centered, symmetric stacks anywhere except where explicitly required (modal backdrop centering).

**1.3 Tension vs. Legibility Guards**
- Rotation stays within ±1.5deg; interactive elements must keep a minimum 44×44px effective touch target after transforms.
- Overlapping elements must never cover text or interactive controls; use `--z-dropdown/--z-modal/--z-toast`-tier stacking for layered surfaces.
- Off-grid composition must never create horizontal overflow (see 2.4).

---

## 2. STRICT RULES & ARCHITECTURE

**2.1 CSS-First Architecture & Zero Inline CSS**
- **No inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID selectors only:** every design property, layout rule, and state is defined in `style.css` and targeted via classes/IDs.
- **Minimal HTML modifications:** HTML stays semantic and style-agnostic — restyling the site must require editing `style.css` only.

**2.2 CSS Variables & Theme Tokens**
Store all tokens in `:root` using the reference spec's vocabulary, **plus** the mandatory semantic aliases. Light mode block:

```css
:root {
  /* color */
  --color-bg: #f5f4f0;
  --color-surface: #fefefe;            /* near-white, never #ffffff */
  --color-surface-strong: #101010;
  --color-border: #101010;
  --color-text: #101010;
  --color-text-muted: #55534c;
  --color-primary: #ff3d1a;
  --color-accent: #1a1aff;
  --text-success: #0e7a44;  --text-error: #c0180c;
  --border-success: #0e7a44; --border-error: #c0180c;
  /* mandatory aliases */
  --primary: var(--color-primary);   --secondary: var(--color-accent);
  --bg-primary: var(--color-bg);     --bg-secondary: var(--color-surface);
  --text-primary: var(--color-text); --text-secondary: var(--color-text-muted);
  --border-default: var(--color-border);
  /* radius / shadow / spacing / motion */
  --radius-sm: 0px; --radius-md: 0px; --radius-lg: 0px; --radius-pill: 999px;
  --shadow-sm: 4px 4px 0 rgba(16,16,16,0.9);
  --shadow-md: 8px 8px 0 rgba(16,16,16,0.9);
  --shadow-lg: 14px 14px 0 rgba(16,16,16,0.9);
  --spacing-gap: 24px;
  --transition-fast: 120ms; --transition-normal: 240ms;
  --ease-standard: cubic-bezier(0.7, 0, 0.3, 1);
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;
  /* type */
  --font-sans: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
  --font-base: var(--font-sans);
  --font-display: var(--font-sans);
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem;
  --text-4xl: 3rem; --text-5xl: 4rem;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --tilt-1: rotate(-1.4deg); --tilt-2: rotate(1.1deg); --overlap: -14px;
}
```

- **Contrast pairing (mandatory):** every light background token pairs with dark text, every dark background token pairs with light text — enforced in both modes. Any element using `--color-primary` as background keeps `#101010` text; accent backgrounds use white text on light-mode accent and `#101010` text on dark-mode accent.

**2.3 Mandatory Dark Mode Support**
The source spec declares no modes and demands validation in light and dark before publishing — therefore dark mode is mandatory, not optional.
- **Token strategy:** duplicate this dark set under **both** `@media (prefers-color-scheme: dark) { :root:not(.light) { … } }` **and** `:root.dark { … }`; define `:root.light { … }` to force light explicitly:

```css
/* dark values */
--color-bg: #101010; --color-surface: #1a1a19; --color-surface-strong: #f5f4f0;
--color-border: #f5f4f0; --color-text: #f5f4f0; --color-text-muted: #a6a29a;
--color-primary: #ff3d1a; --color-accent: #6f6fff;          /* lightened for dark bg */
--text-success: #58c98b; --text-error: #ff6b5e;
--border-success: #58c98b; --border-error: #ff6b5e;
--shadow-sm: 4px 4px 0 rgba(245,244,240,0.9);
--shadow-md: 8px 8px 0 rgba(245,244,240,0.9);
--shadow-lg: 14px 14px 0 rgba(245,244,240,0.9);            /* light hard shadows on dark bg */
```

- **Inversion logic:** `--color-surface-strong` inverts per mode (dark panel in light mode, light panel in dark mode) and its inner text token flips accordingly — never dark-on-dark or light-on-light.
- **Theme switching:** zero HTML restructuring required — only CSS variable flips.
- **Persistence:** `script.js` reads `localStorage` ("theme"); on first visit falls back to `prefers-color-scheme`; applies `.dark` or `.light` on `<html>`.
- **Toggle control:** visible button in the nav (Material Symbols `dark_mode` / `light_mode`), with correct `aria-pressed` and `aria-label` state, and `cursor: pointer`.

**2.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout structure with **Flexbox** (`display: flex` / Tailwind flex utilities).
- **Default alignment rule:** every flex container defaults to `align-items: center` (`items-center`) unless an explicitly justified exception exists (e.g., stretched pricing cards).
- **Mobile-first:** rows become columns below ~768px; reduce/remove negative-margin overlaps on small viewports so nothing is obscured; prevent horizontal scrolling — apply `overflow-x: clip` on `body` as a safety net for rotated/overlapping elements and verify at 320px.

**2.5 Framework Default & Tailwind CSS Integration**
- Use **Tailwind CSS** (Play CDN permitted) for layout utilities (`flex`, `items-center`, `gap-*`, responsive prefixes).
- All utility usage maps back to CSS variables or the reusable component classes from the reference spec: `.nav`, `.btn`, `.btn--primary`, `.card`, `.input`, `.badge` — implemented in `style.css` (via `@layer components` / `@apply` or clean custom CSS), never restyled ad hoc in markup.

**2.6 Typography & Icons (Google Fonts Mandatory)**
- **Text:** load **Archivo** (weights 400–900) and **JetBrains Mono** from Google Fonts via `<link>`; bind to `--font-base`, `--font-display`, and `--font-mono`.
- **Exception clause:** the reference token 'Neue Haas Grotesk' is proprietary and unavailable on Google Fonts — substitute Archivo as the grotesk while retaining the `'Helvetica Neue', Arial` fallback chain.
- **Icons:** Google Material Symbols only, via `<link>` and ligature spans (e.g., `<span class="material-symbols-outlined">arrow_forward</span>`). **Raw inline SVGs and local icon files are forbidden.**
- **Images (optional):** placeholder photography allowed only via `https://picsum.photos/seed/<seed>/<w>/<h>`, with descriptive `alt` text, explicit `width`/`height`, `loading="lazy"` below the fold, and a CSS grayscale/contrast filter so imagery stays palette-cohesive in both modes.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

**3.1 Button (`.btn`, `.btn--primary`, `.btn--loading`, `.btn--success`, `.btn--error`)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px; `border: 2px solid var(--color-border); box-shadow: var(--shadow-sm); transform: var(--tilt-1);` bold `--text-base` type; `--radius-md` (0px).
- **Hover:** `transform: translate(-2px,-2px) var(--tilt-1); box-shadow: var(--shadow-md); cursor: pointer;` (use `transition: var(--transition-fast) var(--ease-standard)` on transform/shadow).
- **Focus:** distinct focus ring for keyboard navigation — `.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }`.
- **Active/Pressed:** `transform: translate(0,0) scale(0.97) var(--tilt-1); box-shadow: var(--shadow-sm);`.
- **Loading:** `.btn--loading` sets `aria-busy="true"`, disables interaction and prevents double-clicks (`pointer-events: none`), and renders a CSS-only spinner (animated border circle) or animated Material icon **without changing button dimensions** (reserve spinner space).
- **Disabled:** `opacity: 0.5; filter: grayscale(1); cursor: not-allowed; transform: none; box-shadow: none;`.
- **Success/Error:** temporary feedback classes swap border/text to `--text-success`/`--text-error` with a check/error Material icon and an `aria-live` announcement; `.btn--primary` uses `--color-primary` background with `#101010` text in both modes.
- **Destructive:** no destructive actions are expected; if any `.btn-danger` is introduced it must be visually distinct (error tokens) in both light and dark.

**3.2 Card (`.card`, `.card--feature`, `.card--testimonial`, `.card--pricing`, `.card--inverted`, `.card--empty`, `.card--skeleton`)**
- **Default:** flexible Flexbox column, `background: var(--color-surface); border: 3px solid var(--color-border); box-shadow: var(--shadow-md); padding: var(--space-6); transform: var(--tilt-2);` with `.card:nth-of-type(2n) { transform: var(--tilt-1); margin-top: var(--overlap); }` for the broken-grid rhythm.
- **Hover:** `transform: translate(-2px,-2px) var(--tilt-2); box-shadow: var(--shadow-lg);`.
- **Focus-within:** when a child link/button receives focus, the card border shifts to `--color-accent`.
- **Loading (skeleton):** `.card--skeleton` shimmer via animated `linear-gradient` in CSS, fixed `min-height`, no layout jumps.
- **Empty state:** `.card--empty` fallback layout with one Material icon, clear guidance text, and an action button.
- **Inverted:** `.card--inverted` uses `--color-surface-strong` with the mode-appropriate paired text color.

**3.3 Form & Input (`.input`, `.input-group`)**
- **Structure:** flex container wrapping a `<label>` (bound with `for`), the input, and a dedicated error-feedback container (`aria-live="polite"`).
- **States (all styled via classes):** empty; focused (`border-color: var(--color-accent); box-shadow: 4px 4px 0 rgba(26,26,255,0.4);` with mode-aware accent); filled; valid (`--border-success` + check icon); invalid (`--border-error`, `--text-error` message, error icon); disabled (reduced opacity, `not-allowed`); read-only.
- **Behavior:** `script.js` handles the Final CTA newsletter form — prevent default, simulate loading (`.btn--loading`, ~1.2s), then success state with icon and `aria-live` status. Client-side email validation only; no backend.

**3.4 FAQ Accordion**
- Use native semantic `<details>`/`<summary>` pairs (no JS required), styled per theme: 2px borders, mono question numbering, Material `expand_more` icon rotating 180° on `[open]`, hover and `:focus-visible` feedback on `summary`.
- Smooth open/close via CSS transition (opacity/transform), disabled under `prefers-reduced-motion`. Never rely on color alone to indicate open state.

**3.5 Modal / Popup (only if you introduce one — not required for this page)**
- **States:** opening, open, loading, success/error, closing — all animated via CSS transitions.
- **UX:** centered flex container (`align-items: center; justify-content: center`), backdrop overlay, Material icon close button, keyboard focus trapping, closeable via `Esc` and overlay click, `role="dialog"` + `aria-modal="true"`.

---

## 4. PAGE COMPOSITION — SECTION-BY-SECTION BLUEPRINT

Order: nav → Hero → Features → How It Works → Testimonials → Pricing → FAQ → Final CTA → Footer.

**4.0 Global Nav (`.nav`)**
Sticky top nav per the reference spec: `display: flex; align-items: center; gap: var(--space-4); padding: var(--space-3) var(--space-6); background: var(--color-surface); border-bottom: 3px solid var(--color-border); transform: skewX(-1deg);` — containing the OFFSET wordmark (display font), 3–4 anchor links (Features, How it works, Pricing, FAQ) with `:focus-visible` rings and hover underline, the theme toggle (2.3), and a primary CTA button. Below ~768px the links wrap or stack in a column — no horizontal scroll. Include a visually hidden skip link and use CSS smooth scrolling (guarded by `prefers-reduced-motion`).

**4.1 Hero**
Off-center editorial composition: tilted mono kicker badge (`.badge`, pill radius, `--tilt-1`), oversized display headline (`clamp(2.5rem, 8vw, var(--text-5xl))`, uppercase, tight leading), one muted supporting sentence, and a CTA cluster of `.btn--primary` + default `.btn`. Layered z-depth: a tilted, 3px-bordered, `--shadow-lg` media block (grayscale picsum image, `--tilt-1`) overlaps the headline using negative margin and a `--z-*` token, pushing the section's flow diagonally down-right. All text remains fully readable; nothing interactive is overlapped.

**4.2 Features — 3 cards**
Section header with mono index label (e.g., "01 — FEATURES") tilted slightly. Three `.card--feature` blocks in a flex row: alternating tilts, staggered vertical offsets (diagonal descent), each containing a Material icon inside a 2px-bordered square chip, a bold title, and 1–2 lines of muted copy. On mobile: single column, tilts kept subtle, overlaps removed.

**4.3 How It Works — 3 steps**
Diagonal staircase: step 2 and step 3 progressively offset (progressive `margin-top`), never aligned. Each step: a tilted mono number badge (01 / 02 / 03), short bold title, brief text, and an arrow Material icon suggesting flow direction. Mobile: column order preserved, offsets reset.

**4.4 Testimonials**
Editorial cluster: one large `.card--inverted` pull-quote (layered on top via negative margins and z tokens) overlapping two smaller tilted `.card--testimonial` cards. Mono attributions with fictional names/roles; optional small grayscale avatar images with 2px borders. Text on the inverted card obeys the contrast pairing rule in both modes.

**4.5 Pricing — 3 tiers**
Three `.card--pricing` blocks: Free / Studio / Team with realistic prices (e.g., $0, $16/mo, $39/mo) in display type, mono period labels, feature lists with Material check icons, and one CTA button per tier. The featured middle tier uses `.card--inverted` + a tilted pill badge "MOST POPULAR" (`--color-primary` background, `#101010` text), `--shadow-lg`, slight negative translate to overlap neighbors (z-token layering, nothing covered). Mobile: single column, featured tier visually distinct.

**4.6 FAQ**
Constrained but deliberately off-center container, tilted mono section label, 6 realistic Q&A `<details>` items per 3.4. Reuse no modals.

**4.7 Final CTA**
Full-bleed `.card--inverted`-style panel (`--color-surface-strong` background, paired inverted text in both modes): oversized display headline, one supporting line, the email-capture form per 3.3 (`.input` + `.btn--primary` with loading → success flow and `aria-live` feedback), a mono trust microcopy line ("No credit card · Cancel anytime"), and one or two tilted decorative border/shadow elements for layered depth.

**4.8 Footer with secondary links**
Continues the inverted panel or sits on `--color-bg` with a 3px top border. Flex-wrap layout (`align-items: center` default): brand wordmark + one-line description, three link groups (Product, Company, Legal) as anchor lists, social links with Material icons and `aria-label`s, and a mono copyright line. Links: hover underline with 3px offset, visible `:focus-visible` ring, `--text-secondary`-colored but never color-only meaning. Wraps to column on mobile without overflow.

---

## 5. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` type, responsive breakpoints, zero horizontal overflow at 320px — verify especially around rotated/overlapping elements.
- **Smooth animations:** `transition: var(--transition-normal) var(--ease-standard)` on all state changes (shadows, transforms, colors, accordion). Under `prefers-reduced-motion: reduce`: remove tilts, transitions, spinner motion, icon rotation, and scroll-reveal animation entirely (content fully visible without motion).
- **Progressive enhancement:** any scroll-reveal must not hide content when JS fails — elements are visible by default.
- **Accessibility (a11y):** semantic landmarks (`header`, `main`, `section[aria-labelledby]`, `footer`), a single `h1` with logical heading order, contrast ≥ 4.5:1 for text and ≥ 3:1 for focus rings/borders in **both light and dark**, never color-only state (always icon + text + border), full keyboard operability with logical DOM/focus order, and `aria-live` regions for dynamic feedback (form success/error, loading states).
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Stacking discipline:** nav < dropdown (`--z-dropdown`) < modal (`--z-modal`) < toast (`--z-toast`); no layered component may obscure interactive content.

---

## 6. COPY & CONTENT DIRECTION (ENGLISH ONLY)

- **Brand:** OFFSET — a fictional editorial layout tool for designers and creative teams. Tone: editorial, confident, punchy; body copy in sentence case; labels/kickers in uppercase mono with letter-spacing.
- Write **real, finished English copy** for every section — headline, feature titles/descriptions, step titles, testimonial quotes with invented names/roles, pricing tiers and feature lists, 6 FAQ Q&As, CTA, and footer text. **No lorem ipsum.**
- **Copy locale exception:** although the source specification was drafted in Portuguese, all user-facing copy, labels, aria-labels, and comments must be delivered in English; keep all class names, variable names, and file names in ASCII English.

---

## 7. DELIVERABLE & OUTPUT FORMAT

- **File structure:** three separate files — `index.html`, `style.css`, `script.js`. The only script reference in HTML is `<script src="script.js" defer></script>`; external CDN references for Google Fonts, Material Symbols, and Tailwind are permitted.
- **CSS organization:** `@layer` order — tokens → base → components (`nav`, `btn`, `card`, `input`, `badge`, `details`) → utilities; include the base rules from the reference spec (body reset, component classes, reduced-motion guard) and extend them per Sections 1–4.
- **Naming convention:** BEM only, consistent everywhere (`btn--primary`, `card--inverted`, `nav__link`) — never mix conventions.
- **script.js scope:** theme toggle with `localStorage` persistence (2.3) and the newsletter form simulation (3.3). No other behavioral JS unless specified.
- **No unrequested placeholders:** since full copy direction is provided (Section 6), submit complete copy; placeholder imagery is allowed only via the picsum rule in 2.6.
- **Pre-publication QA (mandatory, per source spec):** validate the page in **both light and dark modes**, at 320px/768px/desktop widths, with keyboard only, and with reduced motion enabled — fix all contrast, overflow, and focus issues before delivering.
- Deliver everything in a single complete response: final `index.html`, `style.css`, and `script.js`, ready to run as-is.
