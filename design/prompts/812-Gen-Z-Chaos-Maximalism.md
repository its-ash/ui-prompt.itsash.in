# CODING AGENT PROMPT — BUILD TASK: "GEN Z CHAOS / MAXIMALISM" LANDING PAGE

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a **complete, production-quality landing page** on the **first attempt**. Deliver finished, fully working code with no gaps, no partial scaffolds, and no "to be implemented" sections.

**Theme:** Gen Z Chaos / Maximalism — chaotic, maximalist, colorful, expressive. Keywords: chaos, clutter, stickers, raw, collage, mixed media, loud, internet culture, ironic. Era: 2023+ Internet Core.

**Palette (clashing brights):** Neon magenta `#FF00FF`, neon green `#00FF00`, neon yellow `#FFFF00`, electric blue `#0000FF`, plus saturated gradient/rainbow mixes. Light mode reads as a cut-paper **zine collage**; dark mode reads as **neon-on-black internet core**. Both Light and Dark modes are required in full.

**Required sections (in this order):** Global Header/Nav (with theme toggle), Hero, Features (3 cards), How It Works (3 steps), Testimonials (3 quotes), Pricing (3 tiers), FAQ (accordion), Final CTA (email capture), Footer with secondary links.

**Copy:** Write ALL user-facing copy in **English**, in an ironic, hyper-online Gen Z internet-culture voice (headline energy: "BE NORMAL ABOUT THE INTERNET (CHALLENGE: FAILED)"). Author real copy for every section. **Lorem ipsum is forbidden.**

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. The `style="..."` attribute is **forbidden** anywhere in the HTML.
* All design properties, layout rules, and states are applied via class or ID selectors only.
* HTML stays semantic and style-agnostic; restyling the site must never require markup edits. All chaos effects (rotations, scatter, jitter, marquee, blend modes) are CSS classes — never inline styles.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Define all tokens in `:root` (light) and override in `.dark`. Required tokens:
`--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.
Theme-specific extras (also required): `--neon-magenta`, `--neon-green`, `--neon-yellow`, `--neon-blue`, `--font-display`, and rotation utilities for scatter (e.g., `.rotate-1`…`.rotate-4` with fixed values).

**Token rules (mandatory):**
* **Light mode:** `--bg-primary` is NOT `#ffffff` — use `#fefefe` or a warm zine-paper off-white that fits the collage mood. `--text-primary` is near-black (`#0A0A0A`).
* **Dark mode:** `--bg-primary` near-black (`#0A0A0A` or darker), `--text-primary` `#fefefe` or neon-tinted light. Neon accents stay saturated and pop against black.
* **Contrast pairing is mandatory in BOTH themes:** light backgrounds pair with dark text; dark backgrounds pair with light text. No exceptions.
* **Neon fill/text pairing (enforced everywhere):** text on neon-yellow, neon-green, or neon-magenta fills must be near-black (≥ 4.5:1); text on electric-blue fills must be `#fefefe` (black on blue fails contrast). Never place neon text on a same-family background.
* **Neon as text:** on light backgrounds, neon hues are restricted to **fills, borders, stickers, and large display type** (magenta only, ≥ 3:1) — never body copy. On dark backgrounds, magenta/green/yellow text is allowed (high contrast); electric blue is **never** used as text on dark at body size — use it for fills, borders, and glows, or a lightened blue variant for display type. Body copy always uses `--text-primary` / `--text-secondary`.
* Hard offset "sticker" shadows (e.g., `4px 4px 0 var(--text-primary)`) may define `--shadow-sm` / `--shadow-md` to fit the theme; tokens must exist and be used.

**1.3 Mandatory Dark Mode Support**
* Define dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`.
* `script.js`: on load, read the persisted theme from `localStorage`; if absent, fall back to `prefers-color-scheme`; apply the `.dark` class. The toggle flips and persists the choice.
* A **visible, sticker-styled toggle in the header** with correct `aria-pressed` state and a descriptive `aria-label`.
* All effects (blend modes, saturation, shadows, gradients) must be re-tuned per theme — no washed-out or unreadable combinations in either mode.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox (Tailwind flex utilities or custom flex classes).
* Every flex container defaults to `align-items: center` unless an exception is explicitly justified.
* Mobile-first: hero stacks, cards/pricing/testimonials collapse to one column, marquees remain single-line, nav links wrap gracefully. **Zero horizontal scrolling** — every scattering parent is `position: relative` with `overflow: hidden`, and `overflow-x: clip` is set on `html`/`body`. No absolutely positioned element may create overflow.

**1.5 Framework Default & Tailwind CSS Integration**
* Use Tailwind CSS, or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives.
* All utilities must map back to the CSS variables; author reusable component classes: `.btn`, `.card`, `.input-group`, `.sticker`, `.marquee`.
* One component system with modifiers — do not fork multiple button/card variants.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Include Google Fonts via `<link>` (with preconnect): **"Bungee"** for display/headings (bound to `--font-display`) and **"Space Grotesk"** for body (bound to `--font-base`). Apply via CSS variables only.
* Icons: **Google Material Symbols only.** Raw inline SVGs and local icon files are **forbidden**. Build stickers from Material Symbols icons, typographic badges ("NEW!", "100%", "certified unhinged"), sparing emoji as decorative copy, and CSS-drawn shapes (thick borders, `clip-path` starbursts, layered gradients).
* **Exception clauses for the raw theme spec (mandatory rule kept, adjusted):**
  * `transform: rotate(random)` is not valid CSS — author **fixed, varied rotation values** (e.g., -6°, 3°, -2°, 5°) per sticker/element via rotation utility classes to simulate randomness.
  * "GIF overload": real GIF assets cannot be assumed — **simulate GIF energy with pure-CSS animation loops** (pulsing gradients, blinking stickers, spinning starbursts, gradient-shift display text via `background-clip: text`). The page must render fully with zero external image assets.
  * "Noise/glitch": achieve via layered CSS gradients, `repeating-linear-gradient` scanlines, and RGB-split `text-shadow` offsets. Inline SVG filters are forbidden (no-SVG rule).

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component (`.btn` + `.btn--primary`, `.btn--secondary`, `.btn--danger`)**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target **44×44px**. Loud sticker styling (thick border, hard offset shadow). Rotation on buttons ≤ 2° and must never compromise the touch target or label readability.
* **Hover:** brightness/shadow shift with `cursor: pointer`.
* **Focus:** distinct high-contrast focus ring (outline + offset, built from tokens) that remains visible over busy backgrounds in **both** themes.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading:** disables interaction, prevents double-clicks, renders an animated Material Symbol (`progress_activity` with CSS rotation) or CSS spinner **without changing button dimensions**.
* **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
* **Success/Error:** temporary feedback states styled with `--text-success` / `--text-error` plus matching borders — communicated via icon **and** text, never color alone.
* **`.btn-danger`:** visually distinct (hot error color, thick border) and clearly different from primary in both themes.

**2.2 Card Component (`.card` + `--feature`, `--step`, `--quote`, `--pricing`, `--skeleton`, `--empty`)**
* **Default:** flexible Flexbox layout (column), `--bg-secondary`, thick `--border-default`, radius tokens, hard offset shadow.
* **Hover:** `transform: translateY(-2px)` with elevated "peel" shadow, animated via `--transition-normal`.
* **Focus-within:** border highlight when a child link/button receives focus.
* **Loading (skeleton):** define shimmer keyframes and `.card--skeleton` styles in CSS (required in the stylesheet even if not displayed on first paint).
* **Empty state:** define `.card--empty` pattern with a Material Symbol and clear guidance copy.
* **Chaos layering:** decorative sticker badges may overlap card corners (`position: absolute`, `aria-hidden="true"`) but must **never cover or clip card text or interactive elements**.

**2.3 Form & Input Requirements (`.input-group`, `.field`, `.field--valid`, `.field--error`)**
* **Structure:** flex column wrapper containing a visible `<label>` (with `for`/`id` binding), the `<input>`, and a dedicated error/feedback container element.
* **States (all styled):** empty, focused (outline ring), filled, valid (success border + check Material Symbol), invalid (error border, `--text-error` message, warning icon, message announced via `aria-live="polite"`), disabled, read-only (define styles even if unused).
* **Final CTA form behavior:** on submit, show loading → then simulated success or error (JS timeout, no backend); feedback text renders in an `aria-live` region; button swaps state classes per 2.1. Double-submission prevented.

**2.4 FAQ Accordion**
* Each item: heading `<button aria-expanded="...">` + content panel (`role="region"`, labelled by the button).
* Panels animate open/closed via CSS transitions (e.g., `grid-template-rows: 0fr → 1fr`).
* Fully keyboard operable, visible focus, state indicated by an icon (rotating Material Symbol) **plus** `aria-expanded` — never color alone.
* Under `prefers-reduced-motion`: instant open/close.

**2.5 Modal / Popup (conditional)**
* Only include a modal if you add a purposeful overlay (e.g., an easter-egg "chaos mode" dialog). If implemented, it must have: opening/open/closing CSS-animated states, loading state if async, success/error feedback styles, centered flex overlay (`align-items: center`), backdrop, Material Symbol close button, keyboard focus trap, close via `Esc` and overlay click, `role="dialog"` + `aria-modal` + accessible name, stacked at `--z-modal`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid sizing, breakpoints, zero horizontal overflow.
* **Mandatory visual feedback:** every click, hover, focus, and submission triggers a visible state change.
* **Smooth animations:** all state changes use `--transition-fast` / `--transition-normal` with `--ease-standard`.
* **`prefers-reduced-motion`:** jitter disabled, marquees render as static text, drag disabled, transitions minimized — the page must be fully usable with **zero motion**.
* **Marquee implementation:** CSS `translateX` keyframe loop on a track; the animated track is `aria-hidden="true"` (taglines are decorative); never encode essential information only in a marquee. Reduced motion → static.
* **Jitter:** small translate/rotate keyframes (±1px, ±0.5°) on decorative stickers and the logo only — never on body text.
* **`mix-blend-mode: multiply/screen` and `filter: saturate(150%)`:** decorative layers only. Blended/saturated layers must never sit between body text and its background — all text blocks sit on solid backplates (`--bg-primary` / `--bg-secondary`).
* **z-index chaos (controlled):** decorative scatter stacks freely but always **below** functional layers. Header/nav sits above scatter; dropdowns, modals, and feedback use `--z-dropdown` / `--z-modal` / `--z-toast`. Nothing decorative may ever cover the header, forms, focus rings, or overlays.
* **Accessibility (a11y):** semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), skip-to-content link, exactly one `<h1>`, logical heading order, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability for all functional UI, `aria-live` regions for dynamic feedback, AA contrast in both themes, never color-alone state communication.
* **Decorative scatter:** all stickers/glows/starbursts are `aria-hidden="true"` and `pointer-events: none` — except the optional draggable stickers below.
* **Drag-and-drop (optional, decorative only):** stickers may be draggable via pointer events in `script.js` as a purely non-functional flourish. They remain `aria-hidden`, must never trap focus or block interactive UI, and are exempt from keyboard operability **only because they are decoration with no function**. Disable under reduced motion. If in doubt, omit — the page must be complete without it.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **File structure:** separate `index.html`, `style.css`, `script.js`. The HTML references the stylesheet in `<head>` and contains exactly **one** `<script src="script.js" defer>` — no other inline `<script>` blocks.
* **Naming convention:** one consistent convention across the deliverable — **BEM** for all authored component classes (`.card`, `.card--pricing`, `.card__title`). If Tailwind utilities are used, they handle layout only; never invent ad-hoc non-BEM component classes. Never mix conventions.
* **`script.js` scope (keep minimal):** theme toggle + `localStorage` persistence, FAQ accordion, CTA form state simulation, optional decorative sticker drag. Nothing else.
* **No unrequested placeholders:** all copy is authored on-voice English; no lorem ipsum; no fake external assets; the page renders fully offline except Google Fonts/Icons CDN links.

---

## 5. PAGE SECTIONS BUILD SPECIFICATION

**5.0 Global Header:** wordmark in the display font, anchor nav links to all sections, theme toggle (sticker-styled, per 1.3). Links have visible focus rings; header z-index above all scatter, below `--z-modal`.

**5.1 Hero:** one `<h1>` in the display font, huge (`clamp()` sizing), CSS-only gradient or RGB-split glitch treatment; on-voice ironic headline; short sub-copy; two CTAs (`.btn--primary` neon fill + `.btn--secondary` outline). One or two slightly rotated (±2°) marquee strips on solid backplates. 5–8 scattered stickers (varied fixed rotations, contained, `aria-hidden`). Background: layered CSS gradients + blend-mode blobs, decorative only.

**5.2 Features — 3 cards:** section `<h2>` + intro line; three `.card--feature` items with a Material Symbol sticker badge, bold title, short body copy; alternating card rotations (−1.5°, 1°, −2°); hover lift per 2.2.

**5.3 How It Works — 3 steps:** three `.card--step` items with oversized neon numerals (01/02/03) in the display font, one-line copy each; connected visually by dashed borders or a rotated marquee divider; column layout on mobile.

**5.4 Testimonials — 3 quotes:** chat-bubble / fake-screenshot `.card--quote` items: `@username` handle, quote copy, star rating via Material Symbols; varied rotations and neon fills with **correct text pairing per 1.2**; optional slow marquee row of short reaction tags.

**5.5 Pricing — 3 tiers:** three `.card--pricing` items; middle tier visually loudest (neon border/fill, slight scale/rotation, on-voice sticker badge like "THE MAIN CHARACTER"). Each tier: name, price, feature list with Material Symbol checks, one fully state-complete `.btn` (primary on the middle tier, secondary on the others).

**5.6 FAQ — accordion:** 5–6 on-voice questions implementing 2.4 exactly.

**5.7 Final CTA:** full-bleed loud block — display-font headline, short copy, email capture `.input-group` + `.btn--primary` with complete state behavior per 2.3.

**5.8 Footer:** secondary links (About, Contact, Privacy, Terms), social icon links (Material Symbols with `aria-label`), small print, on-voice sign-off. All links keyboard-focusable with visible rings.

---

**Execution order:** produce the three complete files in one pass — `index.html`, `style.css`, `script.js` — fully implementing every rule above on the **first attempt**, with no omissions, no inline styles, and no placeholders.
