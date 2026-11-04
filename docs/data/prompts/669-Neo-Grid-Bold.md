# CODING AGENT BUILD BRIEF — LANDING PAGE: "NEO-GRID BOLD" (PRODUCT: GRIDPULSE)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page specified below **on the first attempt** — full `index.html`, `style.css`, and `script.js`, fully working, no TODOs, no partial output.

**Theme:** "Neo-Grid Bold" — a 2020s neo-brutalist, editorial, graphic landing page. Off-white paper background, ink-black text, a single neon-yellow accent, 2px black borders on columns, thick rule lines, dense grids with compact 1.2rem gaps, high-contrast stat-heavy content, confident graphic voice. **Fictional product (use verbatim):** GRIDPULSE — real-time design analytics for creative teams.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.0 Theme Brief & Design Language
- **Surfaces:** Paper `#F5F4EF` page background, tinted `#ECECE8` surfaces, ink `#0A0A0A` text/borders, neon yellow `#D4E000` as the ONLY decorative accent. No gradients, no raster images anywhere — the design is purely typographic and geometric (borders, neon blocks, stat numbers, rule lines).
- **Fonts:** Space Grotesk for the hero/CTA headlines and all body copy; Bebas Neue for every other display element (section titles, stat numbers, prices, step numerals, wordmark, marquee). Both via Google Fonts.
- **Shape language:** Sharp corners everywhere; hard offset shadows (zero blur); 2px borders; uppercase display type.

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML. No inline event handlers (`onclick` etc.) — all JS wiring via `addEventListener`.
- **Class/ID Selectors Only:** All design properties, layout rules, and states are targeted via class or ID selectors in `style.css`.
- **Minimal HTML Modifications:** HTML stays semantic and style-agnostic; changing the theme later must require editing only `style.css`.

### 1.2 CSS Variables & Theme Tokens (Mandatory)
Store all tokens in `:root` exactly as defined below (additional tokens allowed; these are required):

```css
:root {
  /* Brand */
  --primary: #D4E000;      /* neon yellow — the ONLY accent */
  --secondary: #0A0A0A;    /* ink (fixed brand constant, do not reference for text/borders — use the flipping tokens below) */
  --accent: #D4E000;       /* alias of --primary; keep in sync */
  /* Surfaces */
  --bg-primary: #F5F4EF;   /* paper — page background, NEVER #ffffff */
  --bg-secondary: #ECECE8;/* tinted surface */
  --bg-invert: #0A0A0A;   /* inverted bands (swaps in dark mode) */
  /* Text */
  --text-primary: #0A0A0A;
  --text-secondary: #64645E; /* darkened from Muted #8A8A85 to pass 4.5:1 on paper */
  --text-inverse: #F5F4EF;   /* text on ink or neon surfaces */
  --text-success: #166534;
  --text-error: #B3261E;
  /* Borders */
  --border-default: #0A0A0A;
  --border-width: 2px;
  --border-success: #166534;
  --border-error: #B3261E;
  /* Radius — intentionally sharp */
  --radius-sm: 0px; --radius-md: 0px; --radius-lg: 0px;
  --radius-pill: 999px;    /* ONLY for the pricing "MOST POPULAR" badge */
  /* Shadows — hard offset, zero blur */
  --shadow-sm: 4px 4px 0 0 var(--secondary);
  --shadow-md: 8px 8px 0 0 var(--secondary);
  /* Spacing & motion */
  --spacing-gap: 1.2rem;
  --transition-fast: 200ms; --transition-normal: 250ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  /* Type */
  --font-display: 'Bebas Neue', 'Space Grotesk', sans-serif;
  --font-base: 'Space Grotesk', sans-serif;
  /* Elevation */
  --z-header: 100; --z-dropdown: 200; --z-modal: 300; --z-toast: 400;
}
```

- **Contrast Pairing (enforced, both themes):** light surfaces (paper, neon) pair only with ink text; dark surfaces (ink) pair only with paper text. Neon NEVER carries white/paper text — always ink `#0A0A0A`.
- **Pure White Ban:** Never use `#ffffff`; if a brighter white than paper is ever needed, use `#fefefe`.
- **Single-Accent Discipline:** Neon is the only decorative color. Success/error colors are functional feedback only, never decoration.
- **Token discipline:** Components must reference the theme-flipping tokens (`--text-primary`, `--border-default`, `--bg-primary`, etc.), not raw hex or the fixed `--secondary`, so dark mode works automatically.

### 1.3 Mandatory Dark Mode Support
- **Implementation:** Define dark tokens via a `.dark` class on `<html>` (this is the single source of truth):

```css
.dark {
  --bg-primary: #0A0A0A; --bg-secondary: #1C1C17; --bg-invert: #F5F4EF;
  --primary: #E6FF3D; --accent: #E6FF3D;
  --text-primary: #F5F4EF; --text-secondary: #A8A8A0; --text-inverse: #0A0A0A;
  --border-default: #F5F4EF;
  --text-success: #4ADE80; --text-error: #F87171;
  --border-success: #4ADE80; --border-error: #F87171;
  --shadow-sm: 4px 4px 0 0 var(--text-primary);
  --shadow-md: 8px 8px 0 0 var(--text-primary);
}
```

- **Theme Switching:** No HTML restructuring — only variable values change. The inverted CTA band flips automatically via `--bg-invert`/`--text-inverse`.
- **Persistence:** `script.js` must, as its very first operation, read `localStorage` key `"gridpulse-theme"`; if absent, fall back to `matchMedia('(prefers-color-scheme: dark)')`; default is light. Apply/remove the `.dark` class on `documentElement`.
- **Toggle:** A visible 44x44px bordered icon button in the header, Material Symbols `dark_mode`/`light_mode`, with synced `aria-pressed` and a dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode").
- **Source-Spec Exception (Dark Mode):** The source style spec lists Dark Mode as "✗ None" — it remains mandatory in this build system; ship the inverted ink theme above regardless.

### 1.4 Flexbox Layout & Mobile-First Alignment
- **Default Alignment Rule:** Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment. Justified exceptions for this build: equal-height card rows and nav panels (`stretch`), and multiline text stacks inside cards (`flex-start`).
- **Mobile-Friendly First:** Build at ~320px first. All 3-column rows (features, steps, testimonials, pricing) collapse to 1 column below 40em; the stat grid is 2-column below 64em, 4-column above. The CTA form stacks below 40em. No horizontal scrolling at any width.
- **Dense-Grid Exception:** CSS Grid may be used only for the hero stat mosaic's 2D cell alignment; every other layout structure uses Flexbox.

### 1.5 Framework Default & Naming Convention
- Use **clean custom CSS in `style.css`** (no Tailwind runtime, no CDN scripts, no build step). Every visual value must flow through the tokens in 1.2.
- **Naming:** BEM only, consistently, across all markup, styles, and JS hooks — never mix conventions. Required reusable classes: `.btn`, `.card`, `.input-group`.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Fonts:** Load via `<link>` with `preconnect`: Bebas Neue; Space Grotesk 400/500/700. Bind to `--font-display` and `--font-base`. Uppercase is applied via CSS (`text-transform: uppercase`) on display classes; body and FAQ answer copy stays sentence case.
- **Type rules:** Bebas Neue is display-only — never for body text. Space Grotesk 700 uppercase, tracking `-0.02em`, `line-height: 0.95` for hero/CTA headlines. Body copy: Space Grotesk 400, ~1rem, `line-height: 1.6`. Fluid sizes via `clamp()`.
- **Icons:** Google Material Symbols Outlined via its Google Fonts stylesheet. **Raw inline SVGs and local icon files are forbidden.** Decorative icons get `aria-hidden="true"`. Required glyph names: `insights`, `visibility`, `fact_check`, `check`, `close`, `error`, `check_circle`, `menu`, `dark_mode`, `light_mode`, `expand_more`, `arrow_forward`, `arrow_upward`, `progress_activity`, `grid_off`.

---

## 2. COMPONENT & PAGE DESIGN SPECIFICATIONS

### 2.1 Button Component Requirements (`.btn`)
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` — minimum 44x44px touch target; Space Grotesk 700, uppercase, letter-spacing `0.04em`; sharp corners; 2px border. Variants: `.btn--primary` (neon `--primary` fill, ink text, ink border, `--shadow-sm`), `.btn--secondary` (transparent fill, 2px `--border-default` border, `--text-primary` text), `.btn--ink` (ink fill, paper text — used on the neon featured pricing card).
- **Hover:** `translate(-2px, -2px)` and shadow grows to `--shadow-md`; `cursor: pointer`; 200ms transition.
- **Focus:** Distinct `:focus-visible` ring — global rule `outline: 2px solid var(--border-default); outline-offset: 2px;` and inside inverted bands override `outline-color: var(--text-inverse)`.
- **Active/Pressed:** `transform: scale(0.97)` with shadow collapsing to zero (the pressed-into-paper effect).
- **Loading:** `.btn--loading` — `pointer-events: none`, prevents double submission; absolutely-centered spinner (spinning `progress_activity` icon or CSS ring in current text color); the label becomes `visibility: hidden`; button width/height must not change.
- **Disabled:** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`, no hover/active transforms.
- **Success/Error:** `.btn--success` / `.btn--error` — temporary feedback states driven by `--text-success`/`--text-error` (border + text + icon), passing contrast in both themes.
- **Destructive:** Define `.btn-danger` (error-driven, visually distinct in both themes) even though this page does not use it.

### 2.2 Card Component Requirements (`.card`)
- **Default:** Flex column, `--bg-primary` fill, 2px `--border-default` border, compact padding, participates in dense grids with `gap: var(--spacing-gap)`.
- **Hover:** `translateY(-2px)` plus shadow lift `--shadow-sm`; 250ms transition.
- **Focus-within:** When a child link/button receives focus, the card shows a neon outer ring via `box-shadow: 0 0 0 2px var(--primary)`.
- **Loading (Skeleton):** Define `.card--skeleton` with a CSS shimmer keyframe (sheen sweep over `--bg-secondary` blocks); no layout jump; disabled under reduced motion.
- **Empty State:** Define `.card--empty` — centered `grid_off` icon plus guidance text. (Skeleton and empty must exist in CSS for completeness; the static page need not render them.)
- **Variants:** `.card--feature`, `.card--testimonial`, `.card--pricing`, `.card--pricing--featured`.

### 2.3 Form & Input Requirements (`.input-group`)
- **Structure:** Flex column wrapping a `<label>`, the input, and a dedicated error feedback container (`.input-group__error` with `aria-live="polite"`, reserved `min-height` to prevent layout shift). Justified alignment exception: `align-items: stretch`.
- **States:** Empty; Focused (keep ink border + `box-shadow: 0 0 0 2px var(--primary)` neon ring); Filled; Valid (`.input-group--valid`: `--border-success` border + trailing `check_circle` icon); Invalid (`.input-group--invalid`: `--border-error` border, `--text-error` message text, `error` icon, input gets `aria-invalid="true"`); Disabled; Read-only.
- **Base input:** Paper background, 2px ink border, min-height 48px, Space Grotesk, sharp corners.

### 2.4 Modal / Dialog Requirements (Conditional — only if you add one)
- **States:** Opening, Open, Loading, Success/Error, Closing — all animated with CSS transitions (250ms).
- **UX:** Centered flex overlay (`align-items: center`), backdrop, Material `close` button, keyboard focus trap, closes on `Esc` and overlay click, uses `--z-modal`.

### 2.5 FAQ Accordion Requirements
- Use native `<details class="accordion__item">` + `<summary class="accordion__summary">` (works without JS). Summary is a flex row (`align-items: center`, `justify-content: space-between`): question in Space Grotesk 700 uppercase + trailing `expand_more` icon that rotates 180deg when `[open]` (200ms). Remove default markers. Items are separated by 2px `--border-default` rules. Summary hover: `--bg-secondary` fill. Answers in sentence-case Space Grotesk. Full keyboard operability comes free from native semantics.

### 2.6 Landing Page — Section-by-Section Build (copy is mandatory, use verbatim)
All copy in **English**. No lorem ipsum anywhere. Uppercase display text may be typed as given; transforms via CSS.

- **0. Header (`.header`):** Sticky, `--bg-primary`, 2px bottom border, `--z-header`. Flex row (`align-items: center`, `justify-content: space-between`): wordmark "GRIDPULSE" (Bebas), nav anchors (FEATURES / HOW IT WORKS / PRICING / FAQ), theme toggle (1.3), compact primary button "START FREE". Below 40em: hide inline links; show a "MENU" `.nav-toggle` button (`aria-expanded`, `aria-controls`) opening `.nav-panel` — an absolute, 2px-bordered dropdown at `--z-dropdown`, flex column, full-width tappable rows; closes on `Esc` and outside click. Include a visually-hidden-until-focused skip link to `#main`. Set `html { scroll-behavior: smooth; scroll-padding-top: 5rem; }`.
- **1. Hero (`#top`):** Kicker "FOR TEAMS THAT SHIP LOUD" (small uppercase 700 with a 2px rule line). H1 in Space Grotesk 700 uppercase, `clamp(2.75rem, 9vw, 6.5rem)`: "EVERY PIXEL, SCORED." — the word "SCORED." sits on a neon highlight block (`.hl`: `--primary` background, constant ink text, slight padding). Sub copy (max-width 46ch): "GRIDPULSE audits every screen you ship against brand rules and attention data — live, in the browser, before anything goes out the door." CTA row (flex, wrap, gap 1.2rem): `.btn--primary` "START SCORING — FREE" and `.btn--secondary` "SEE HOW IT WORKS". Micro-proof line: "NO CREDIT CARD · 2-MIN SETUP".
  - **Stat band (`.stat-grid`, CSS-Grid exception):** Dense mosaic reading as one bordered table — container has 2px border, background `--border-default`, `gap: var(--border-width)`, cells filled `--bg-primary`; 4 columns → 2 on mobile. Each `.stat`: giant Bebas number (`clamp(2.5rem, 6vw, 4.5rem)`) + small uppercase label in `--text-secondary`. Copy: "12,400+ / TEAMS ON THE GRID" · "2.1M / SCREENS AUDITED" · "31% / FASTER DESIGN REVIEWS" · "4.9/5 / AVG REVIEW SCORE".
  - **Marquee (`.marquee`, `aria-hidden="true"`):** Full-bleed band between hero and features, 2px top/bottom borders, neon fill, ink Bebas 1.25rem: "GRID SCORES • ATTENTION HEATMAPS • AUTO AUDITS • ZERO GUESSWORK • " repeated; two identical flex tracks animating `translateX` in a seamless loop (~24s linear infinite); pause on hover; fully disabled under reduced motion (static single line).
- **2. Features (`#features`):** Section head pattern (`.section-head`): kicker "01 / FEATURES", H2 in Bebas "MEASURED, NOT DEBATED.", and a 2px rule line filling remaining flex space. Three `.card--feature` (3-col → 1-col): neon 56px square icon badge (2px ink border, ink icon) using `insights` / `visibility` / `fact_check`, Bebas H3, sentence-case body in `--text-secondary`. Copy: 1) "LIVE GRID SCORES" — "Every layout gets a 0–100 score the moment it renders. Rhythm, spacing, contrast, alignment — measured, not debated." 2) "ATTENTION HEATMAPS" — "See where eyes land before users do. Predictive heatmaps flag dead zones and loud zones on every screen you ship." 3) "ONE-CLICK AUDITS" — "Sweep your whole product against brand rules on schedule. Violations arrive ranked, annotated, and ready to fix."
- **3. How It Works (`#how-it-works`):** Kicker "02 / HOW IT WORKS", H2 "SHIP IT. SCORE IT. PROVE IT." Three `.step` blocks in a flex row (→ column): giant Bebas numerals "01 / 02 / 03" (`clamp(4rem, 8vw, 6rem)`), Bebas step titles, sentence-case body; `arrow_forward` icons between steps (rotate 90deg on mobile). Copy: 01 "CONNECT" — "Point GRIDPULSE at your staging URL or Figma frames. Setup takes two minutes." 02 "SHIP" — "Keep designing. Every save is scored, mapped, and diffed in real time." 03 "PROVE IT" — "Export audit-ready reports that turn design opinions into numbers."
- **4. Testimonials (`#testimonials`):** Kicker "03 / PROOF", H2 "LOUD TEAMS. LOUDER NUMBERS." Three `.card--testimonial`: oversized Bebas quote glyph, sentence-case quote (Space Grotesk), a small bordered metric chip, attribution (700 uppercase name + `--text-secondary` role). Copy: 1) "We stopped arguing in review. The score argues for us." — MAYA CHEN, HEAD OF DESIGN, LOOPWIRE — chip "+42% FASTER APPROVALS". 2) "GRIDPULSE caught 300 brand violations before launch week. It paid for itself in one sprint." — JONAS FERREIRA, BRAND DIRECTOR, KAVO — chip "300 VIOLATIONS CAUGHT". 3) "Our board finally gets design ROI. The stat slides do the talking." — PRIYA NAIR, VP PRODUCT, FIELDNOTE — chip "0 DESIGN DEBATES SINCE Q1".
- **5. Pricing (`#pricing`):** Kicker "04 / PRICING", H2 "PAY FOR SIGNAL, NOT NOISE." Three `.card--pricing` (3-col → 1-col, equal heights via `stretch`, CTA pinned with `margin-top: auto`): Bebas plan name, giant Bebas price, feature list with `check` icons (flex, `align-items: center`, 0.5rem gap). Middle tier = `.card--pricing--featured`: neon `--primary` fill, ink text, `--shadow-md`, absolute pill badge "MOST POPULAR" (ink fill, neon text, `--radius-pill`, the only pill on the page) — its CTA is `.btn--ink`. Copy: SOLO — $0 — "1 PROJECT / LIVE GRID SCORES / 7-DAY HISTORY" — `.btn--secondary` "START FREE". TEAM — $29 per editor/mo — "UNLIMITED PROJECTS / ATTENTION HEATMAPS / AUTO AUDITS / SLACK ALERTS" — "START SCORING". SCALE — $99/mo — "EVERYTHING IN TEAM / SSO + API ACCESS / AUDIT-READY EXPORTS / DEDICATED ONBOARDING" — `.btn--secondary` "TALK TO US". Footnote line: "PRICES IN USD · CANCEL ANYTIME · THE GRID REMEMBERS."
- **6. FAQ (`#faq`):** Kicker "05 / FAQ", H2 "ASK THE GRID." Five `<details>` items per 2.5, questions verbatim: "HOW DOES THE GRID SCORE WORK?" / "DO I HAVE TO CHANGE MY DESIGN TOOLS?" / "IS THE FREE PLAN REALLY FREE?" / "CAN I EXPORT REPORTS FOR STAKEHOLDERS?" / "DO YOU STORE OUR SCREENS?" — with real one-to-two-sentence answers you write in the same confident voice (e.g., score = brand rules weighted into 0–100; no plugins needed; free forever with 1 project; exports on Team+; encrypted renders, one-click delete).
- **7. Final CTA (`#cta`):** Inverted band: `--bg-invert` background, `--text-inverse` text, 2px top/bottom borders, generous padding. H2 (Space Grotesk 700 uppercase, `clamp(2.5rem, 7vw, 5rem)`): "STOP GUESSING. START SCORING." with "SCORING." on the `.hl` neon block (constant ink text — verify contrast in both themes). Sub line: "Early access is open. Bring your noisiest screens." Email capture per 2.3: flex row (→ column) of input (placeholder "WORK EMAIL") + `.btn--primary` "GET EARLY ACCESS". On submit: validate (email pattern) → `.btn--loading` ~1.2s → success (`.btn--success` + `aria-live` status "You're on the grid. Check your inbox.") or inline error ("That email doesn't parse. Try again?"). No backend — this is a simulated demo submit with full real state behavior.
- **8. Footer (`.footer`):** `--bg-secondary`, 2px top border. Brand block: wordmark, one-liner "REAL-TIME DESIGN ANALYTICS FOR TEAMS THAT SHIP LOUD.", social text links "X / TWITTER · DRIBBBLE · LINKEDIN" (700 uppercase, neon 2px underline on hover — no icon dependencies). Four secondary link columns: PRODUCT (Features, Pricing, Changelog, Roadmap), COMPANY (About, Careers, Press, Contact), RESOURCES (Docs, Grid Score Guide, API Reference, Status), LEGAL (Privacy, Terms, Security). Link to existing page anchors where a section matches; otherwise `href="#"` is acceptable for fictional destinations. Bottom bar (flex, space-between, wrap): "© {YEAR} GRIDPULSE — ALL PIXELS ACCOUNTED FOR." (year injected by JS) and a "BACK TO TOP" control with `arrow_upward`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** Fluid `clamp()` sizing; breakpoints at 40em and 64em; zero horizontal overflow — verify at 320px.
- **Smooth Animations:** All state changes transition with `var(--transition-fast)` / `var(--transition-normal)` and `var(--ease-standard)`. Under `prefers-reduced-motion: reduce`: disable transforms, marquee animation, shimmer, and smooth scrolling; keep instant state changes.
- **Accessibility (a11y):** Verified contrast in both modes (ink on paper ≈ 17:1; ink on neon ≥ 12:1; `--text-secondary` ≥ 4.5:1 on both backgrounds — re-verify any value you change). Never rely on color alone: valid/invalid/success/error always pair color with an icon and text. Semantic HTML5 landmarks (`header`, `nav[aria-label]`, `main`, `section[aria-labelledby]`, `footer`), one `h1`, logical heading order, logical DOM/focus order, skip link, full keyboard operability (menu, accordion, form, toggle), `aria-live` regions for form feedback, `aria-pressed` on the toggle, `aria-hidden` on decorative marquee/icons.
- **Mandatory Visual Feedback:** Every hover, click, focus, and submission triggers a visible state change — no silent interactions.
- **Destructive Actions:** `.btn-danger` must be visually distinct in both themes (error fill/border driven by `--text-error`/`--border-error`).

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** Three files — `index.html`, `style.css`, `script.js`. `<head>` order: charset, viewport, `<title>GRIDPULSE — Every Pixel, Scored.</title>`, meta description, preconnects, Google Fonts links (Bebas Neue; Space Grotesk; Material Symbols Outlined), `style.css`, then a single `<script src="script.js" defer></script>`. No other script tags, no inline styles, no libraries, no build step.
- **script.js scope:** (1) theme init/persistence/toggle as its first operation; (2) mobile nav panel; (3) email form validation + simulated submit with loading/success/error states; (4) footer year. FAQ must work with zero JS (native `<details>`). All features degrade gracefully — no content hidden if JS fails.
- **Naming Convention:** BEM only, everywhere, consistently.
- **No Unrequested Placeholders:** All copy above is verbatim-mandatory; every other visible string is real English copy in the same voice. No lorem ipsum. No raster images.
- **Self-check before submitting:** 320px shows no horizontal scroll; full keyboard pass; theme choice persists across reload; dark mode has no invisible text, borders, or shadows; reduced-motion pass; all button/card/input states from Sections 2.1–2.3 are defined in CSS.
- **Output:** Deliver all three files, complete and functional, in a single response on the first attempt.
