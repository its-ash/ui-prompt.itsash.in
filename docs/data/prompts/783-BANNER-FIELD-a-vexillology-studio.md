# BUILD PROMPT — "BANNER & FIELD" · Complete Neumorphic Landing Page (Vexillology Studio)

**Role & Mission.** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-quality landing page for **BANNER & FIELD — a vexillology studio** in a single attempt. The design language is **Neumorphism (2020s Digital)**: soft surfaces extruded from a warm bone canvas, heraldic gold accents, animated CSS-built flags, and gradient highlights. Follow every rule below exactly — where a shortcut and a rule conflict, the rule wins. All user-facing copy must be written in **English**.

---

## PROJECT BRIEF & DESIGN DIRECTION

**Concept.** A boutique flag-design studio: calm, tactile, precise, quietly animated. The page should feel like a flag-maker's workshop — extruded buttons and cards pressed out of the canvas, inset wells holding icons and quotes, gold reserved for moments of ceremony.

**Palette → Token Map (Light Mode — Branded Default):**
- `--bg-primary: #e8e2d4` (warm bone; the neumorphic canvas)
- `--bg-secondary: #efe9db` (subtle panel tint — CTA panel, footer band)
- `--primary: #2a2620` (deep ink — brand anchor)
- `--secondary: #8a8274` (stone — decorative accents and large display text only)
- `--text-primary: #2a2620`
- `--text-secondary: #6b6355` (darkened stone that passes AA on bone; raw `#8a8274` fails AA for body text)
- `--accent-gold: #a8862e`, `--accent-gold-soft: #e8dca0`, `--taupe: #b8b0a0`
- `--gradient-accent: linear-gradient(135deg, #e8dca0 0%, #a8862e 100%)`
- Neumorphic tokens: `--neu-light: rgba(255,255,255,0.85)`, `--neu-dark: rgba(163,155,134,0.5)`, `--shadow-neu-raised: 8px 8px 16px var(--neu-dark), -8px -8px 16px var(--neu-light)`, `--shadow-neu-inset: inset 5px 5px 12px var(--neu-dark), inset -5px -5px 12px var(--neu-light)`

**Neumorphism Craft Rules.**
- Component surfaces share the canvas tone so depth comes from dual shadows, not fills.
- Raised elements (buttons, cards, panels) use `--shadow-neu-raised`; wells (icon holders, inputs, quote panels, chips, step numerals) use `--shadow-neu-inset`.
- Generous radii; optional 1px `--border-default` hairline for definition.
- Gold gradient is seasoning, not sauce: CTA fills, featured pricing chip, step numerals, avatar fills, hero glow only.
- Never pure white anywhere; if a near-white is required, use `#fefefe`.

**Contrast Guardrails.** `#8a8274` and `#a8862e` fail AA against bone for body text — restrict them to decorative fills, borders, and display text ≥ 24px; use `#e8dca0` for gold text on dark surfaces. Verify every text/background pair in **both** themes.

**Motion Language.** Required named keyframes: `float` (hero flags, staggered delays), `wave` (subtle skew on flag surfaces), `spin` (loading icon), `shimmer` (skeleton), `fade-up` (scroll reveal). All state changes transition via `var(--transition-normal)` and `var(--ease-standard)`.

**Theme Mode Clause.** The source spec marks **Light as the primary mode** — treat Light as the branded default presentation, but **Dark Mode remains fully mandatory** per Rule 1.3; this clause sets priority, not scope.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in `index.html`.
- Target all design properties, layout rules, and states via class/ID selectors only.
- Keep HTML semantic and styling-agnostic: changing the site's look must require editing CSS only, never markup.

**1.2 CSS Variables & Theme Tokens**
- Define in `:root` exactly these tokens: `--primary, --secondary, --bg-primary, --bg-secondary, --text-primary, --text-secondary, --text-success, --text-error, --border-default, --border-error, --border-success, --radius-sm, --radius-md, --radius-lg, --shadow-sm, --shadow-md, --spacing-gap, --transition-fast, --transition-normal, --ease-standard, --z-dropdown, --z-modal, --z-toast` — plus the neumorphic and accent tokens from the brief.
- Suggested values: `--radius-sm: 8px; --radius-md: 16px; --radius-lg: 24px; --shadow-sm: 0 2px 6px rgba(42,38,32,0.08); --shadow-md: 0 10px 28px rgba(42,38,32,0.14); --spacing-gap: 1.5rem; --transition-fast: 150ms; --transition-normal: 300ms; --ease-standard: cubic-bezier(0.4, 0, 0.2, 1); --z-dropdown: 10; --z-modal: 100; --z-toast: 200`.
- Semantic colors (light): `--text-success: #3d6b47; --text-error: #a83a2e;` with matching borders; `--border-default: #d6cfbd`.
- **Contrast pairing:** every light background token pairs with dark text tokens and every dark background token pairs with light text tokens — enforced in Light **and** Dark themes.

**1.3 Mandatory Dark Mode Support**
- Define dark tokens twice: under `@media (prefers-color-scheme: dark)` **and** a `.dark` class on `<html>` (class wins when set). Set `color-scheme` accordingly so native controls follow.
- Dark palette: `--bg-primary: #242019; --bg-secondary: #2d2820; --text-primary: #e8e2d4; --text-secondary: #b8b0a0; --border-default: #3b362c; --neu-light: rgba(255,255,255,0.07); --neu-dark: rgba(0,0,0,0.5)`; gold text on dark: `#e8dca0`; brighten success/error (e.g., `#8fc79b` / `#e08373`). Recompute `--shadow-neu-*` from these — never simply invert colors.
- Switching is variable-only: zero HTML restructuring.
- **Persistence:** store choice in `localStorage` (key `bf-theme`); on first visit fall back to `prefers-color-scheme`; Light is the branded default when no signal exists.
- **Visible toggle:** fixed top-right neumorphic circular button (≥48px), Material Symbols `light_mode` / `dark_mode` icon swap, correct `aria-pressed` (true when dark is active) and `aria-label`, layered at `var(--z-dropdown)`.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout structure with Flexbox; every flex container **defaults to `align-items: center`** unless an exception is explicitly justified in a CSS comment.
- Mobile-first: single column by default; promote to rows at `min-width: 768px` (and `1024px` for wide rows). No horizontal scrolling at any viewport from 320px up.

**1.5 Framework & Class Architecture**
- Use clean custom CSS in `style.css` organized with `@layer` ordering: `tokens → base → layout → components → utilities` (Tailwind via CDN is permitted only for flex/spacing helpers; all visual styling still resolves to CSS variables).
- One naming convention only: **BEM** (`.hero__title`, `.card__icon`, `.btn--accent`). Never mix conventions; every utility maps to a variable or a reusable component class.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: load **Sora** (display, 600/700/800) and **Inter** (body, 400/500/600) from Google Fonts; bind to `--font-display` and `--font-base`.
- Icons: **Material Symbols Rounded** via Google Fonts `<link>`. Raw inline SVGs, local icon files, and emoji-as-icons are forbidden.
- Icon set: `flag, design_services, history_edu, verified, format_quote, check, expand_more, arrow_forward, light_mode, dark_mode, mail, error, check_circle, progress_activity, rss_feed, alternate_email`.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component Requirements**
- `.btn`: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px (48px min-height preferred), `--radius-md`.
- Variants: `.btn--raised` (neumorphic raised), `.btn--ghost` (inset well), `.btn--accent` (gold gradient fill with `--primary` ink text for contrast), `.btn--danger` (BEM form of `.btn-danger` — visually distinct in both themes, defined even if unused).
- **Hover:** shadow bloom + brightness shift, `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring via CSS variables (gold ring visible on both themes).
- **Active:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** interactions disabled, double-clicks prevented, Material Symbols `progress_activity` with the `spin` keyframe (or CSS border spinner); button dimensions must not change.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error (`.is-success` / `.is-error`):** temporary feedback driven by `--text-success` / `--text-error` with matching borders — never color-only; pair with icon or text change.

**2.2 Card Component Requirements**
- `.card`: flexible Flexbox layout (column), canvas-tone surface, `--radius-lg`, raised shadow, optional subtle `--border-default`.
- **Hover:** shadow bloom + `transform: translateY(-2px)`.
- **Focus-within:** gold border highlight when a child control receives focus.
- `.card--inset` variant for wells (quote panels, icon holders, chips).
- **Skeleton (`.is-loading`):** `shimmer` keyframe with fixed min-heights — no layout shift.
- **Empty state (`.card--empty`):** structured fallback with a Google Icon and clear guidance text (define it in CSS even if current content is static).

**2.3 Form & Input Requirements** (used by the Final CTA email capture)
- Structure: `.input-group` flex container wrapping a visible `<label>`, an `.input__wrapper` (input + status icon span), and a dedicated `.input__error` feedback container.
- Class-driven states: **empty, focused** (gold outline ring + deepened inset), **filled, valid** (success border + `check` icon), **invalid** (error border + `error` icon + message), **disabled, read-only**.
- A11y: input carries `aria-describedby` → error id and `aria-invalid="true"` when invalid; errors announced via an `aria-live="polite"` region; min-height 48px.

**2.4 FAQ Accordion Requirements (custom disclosure widget)**
- Per item: `<h3>` wrapping `<button class="faq__trigger" aria-expanded="false" aria-controls="faq-panel-N">` with question text + Material Symbols `expand_more` chevron; panel `<div class="faq__panel" id="faq-panel-N" role="region">`.
- Animate open/close with CSS only: `grid-template-rows: 0fr → 1fr` transition (inner wrapper `overflow: hidden`); chevron rotates 180° via `transform`.
- States: hover, `:focus-visible`, open (`.is-open`), closed; trigger ≥44px tall; Enter/Space operate natively.
- `prefers-reduced-motion` → instant open/close. JS only toggles `aria-expanded` and classes — no height math.
- **No modal, dropdown, carousel, chat widget, or navigation bar is in scope — do not add unrequested components.** (If a modal were ever required: focus trap, Esc/overlay-click close, animated open/close, `--z-modal` stacking.)

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid type via `clamp()`, breakpoints ~640/768/1024px, `max-width: 72rem` container, overflow guarded — zero horizontal overflow from 320px to 1440px.
- **Smooth animations:** every state change transitions with `var(--transition-normal)` / `var(--ease-standard)`; `prefers-reduced-motion: reduce` disables `float`, `wave`, `shimmer`, `spin`, `fade-up`, and scroll-reveal hiding — content stays fully visible.
- **Accessibility (a11y):** WCAG AA contrast in both themes; never rely on color alone; semantic HTML5 landmarks (`<main id="main">`, `<section aria-labelledby>`, `<footer>`); a visually hidden "Skip to content" link that appears on `:focus-visible` as the first focusable element; logical DOM/focus order; full keyboard operability; `aria-live` regions for form status, loading, and dynamic feedback; one `<h1>` (hero), `<h2>` per section, `<h3>` for card titles and FAQ triggers.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Flag motifs are pure CSS:** gradients, `border-radius`, `clip-path`, layered pseudo-elements, `aspect-ratio: 3 / 2`. No raster images, no external image requests, no inline SVG.
- **Scroll reveal (optional, progressive):** IntersectionObserver adds `.is-visible`; the initial hidden state applies only when JS has flagged `<html data-js>` **and** the user has no reduced-motion preference.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- Exactly three files: `index.html`, `style.css`, `script.js`. One `<script src="script.js" defer></script>` — zero inline script blocks, zero `style` attributes.
- `<head>`: `lang="en"`, viewport, `<meta name="color-scheme" content="light dark">`, meta description, `<title>BANNER & FIELD — Vexillology Studio</title>`, Google Fonts links (Sora, Inter, Material Symbols Rounded).
- BEM naming only, consistent across all three files.
- `script.js` responsibilities only: theme toggle + persistence + `aria-pressed` sync; FAQ accordion toggling; email form validation + simulated submit (loading → success) with `aria-live` feedback; pricing CTA loading feedback; optional scroll reveal.
- **No lorem ipsum.** Author original, specific English copy in the brand voice (confident, craft-proud, lightly wry). Placeholder `href="#"` links are permitted **only** in the Footer for pages not built.
- The page must render and function completely when the three files are opened directly in a browser.

---

## 5. PAGE CONTENT & SECTION SPECIFICATION

Build these eight sections in order inside `<main>` (plus the fixed theme toggle and skip link — the only global chrome). Copy directions below are guides; write real, finished copy — do not paste the guides verbatim.

**5.1 Hero — `#hero`.** `min-height: 88vh`, flex column, centered. Inset chip eyebrow ("A vexillology studio"). `<h1>` in Sora, `clamp(2.5rem, 6vw, 4.5rem)` — one strong line (direction: flags that survive distance, wind, and bad photocopies). Two-sentence sub in `--text-secondary`. CTA row: `.btn--accent` "Commission a Flag" → `#cta`; `.btn--ghost` "See the Process" → `#how` with `arrow_forward`. Flag gallery: flex row (wraps on mobile) of three `.flag` specimens — `aspect-ratio: 3 / 2`, `--radius-md`, raised shadow — each an original abstract flag built from layered gradients and `clip-path` (e.g., horizontal bone/gold bands with an ink canton disc; a diagonal division with a single counterchanged charge). Animate `float` with staggered `animation-delay` (0s / 0.6s / 1.2s) plus a subtle `wave` skew; hover lifts each flag. Below 768px, show at most two flags.

**5.2 Features — `#features`.** Kicker + `<h2>` + short lede. Three `.card`s (flex row → column). Each: `.card__icon` inset circle with a Material Symbol (`design_services`, `history_edu`, `verified`), `<h3>`, 2–3 concrete sentences. Suggested features: **Custom Flag Design** (brief to final artwork); **Vexillological Audit** (review against the classic principles — simple, meaningful, few colors, no lettering, legible at a distance); **Symbol & Heritage Research** (charges, colors, and the stories they carry).

**5.3 How It Works — `#how`.** Three steps, flex row on desktop with a connecting hairline (pseudo-element) that disappears on mobile. Each step: `.step__number` (gradient-filled or inset circle "01 / 02 / 03"), `<h3>`, two sentences. Steps: **Brief & Field Research** → **Design Iterations** (sketches to refined vector proposals with rationale) → **Production-Ready Handover** (master vectors, ratio variants, color and usage guide).

**5.4 Testimonials — `#testimonials`.** Three `.card--inset` quotes: gold `format_quote` icon, a 1–2 sentence quote with one concrete flag detail (readable from the far end of the marina; approved on the first council vote), author row with `.avatar` (gradient circle, ink initials), name + role + organization (mix a municipal heritage office, a yacht club, a cultural festival). Wrap the region in an `aria-live="polite"` container and define `.is-loading` shimmer styles with fixed min-heights.

**5.5 Pricing — `#pricing`.** Three tier cards: **Ensign** (starter, from ~$1,900), **Banner** (featured), **Standard-Bearer** (full service, custom quote) — set realistic final prices yourself. Featured tier: desktop `transform: scale(1.03)`, gold gradient top edge, "Most Popular" gradient chip. Each card: tier name, price + "per project" note, 4–5 feature lines with `check` icons, CTA (featured `.btn--accent`, others `.btn--raised`). Every CTA: click → `.is-loading` (~1.2s) → `.is-success` + `aria-live` confirmation → reset. No navigation.

**5.6 FAQ — `#faq`.** Four to six accordion items per spec 2.4. Suggested questions: typical timeline; deliverable formats; usage rights and licensing; flag proportions and standards; revision policy; remote/international clients. Answers must be substantive (2–4 sentences), never filler.

**5.7 Final CTA — `#cta`.** Large raised panel on `--bg-secondary` with a faint gold radial-gradient glow. `<h2>` + one supporting line. Email capture per spec 2.3: label "Work email", `type="email"` input, `.btn--accent` "Request the Brief Packet". Behavior: invalid → error state + `aria-live` message; valid → loading (~1.2s) → success (button success styling, input disabled, status "Your brief packet is on its way."). Simulated with `setTimeout`; no backend, no network calls.

**5.8 Footer — `<footer>`.** Flex-wrap layout on `--bg-secondary`: brand block (wordmark "BANNER & FIELD" + one-line studio description); link groups — **Studio** (The Process → `#how`, Pricing → `#pricing`, FAQ → `#faq`), **Resources** (Field Notes, Vexillology 101, Portfolio — `#` placeholders allowed only here), **Legal** (Privacy, Terms, Licensing — `#` placeholders). Icon row: `mail`, `alternate_email`, `rss_feed` with accessible names. Bottom bar: "© 2025 Banner & Field" + tagline (direction: "Every flag earns its fabric."). All footer links receive visible `:focus-visible` styles.

---

## 6. FINAL QA CHECKLIST

- Zero `style=""` attributes, zero inline SVGs, zero inline script bodies; exactly one deferred `script.js`.
- Theme toggle works, persists across reload, correct `aria-pressed` / `aria-label`; dark mode uses re-tuned neumorphic shadows, not inverted colors.
- No horizontal scroll from 320px to 1440px; every flex container defaults to `align-items: center`.
- Buttons: default, hover, focus, active, loading, disabled, and success/error states all styled.
- Cards: hover lift, `:focus-within`, skeleton, and empty-state styles present.
- Accordion: keyboard operable, `aria-expanded` synced, chevron animates, reduced motion respected.
- Form: all specified states reachable; errors announced via `aria-live`.
- WCAG AA contrast in both themes; no color-only state signals anywhere.
- BEM consistent across all files; every visual value traces to a CSS variable; all copy is final English — zero lorem ipsum.
