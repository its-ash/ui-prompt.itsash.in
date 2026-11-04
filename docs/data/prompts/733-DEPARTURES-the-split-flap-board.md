# BUILD PROMPT — CODING AGENT BRIEF

**Project:** "DEPARTURES — The Split-Flap Board" — Complete Artistic/Creative Landing Page
**Delivery:** Single complete build, first attempt, production quality. No partial output, no stubs, no "TODO" sections.

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. You are building a complete, single-page artistic landing page themed around vintage airport split-flap departure boards (Solari boards), reimagined with 2020s contemporary styling. The page markets a fictional product named **DEPARTURES** — a creative launchpad tool that takes ideas from "runway" to "departure" — with all copy written in flight/departure vocabulary.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No Inline CSS:** The `style="..."` attribute is **forbidden** anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and interactive states must be targeted via class or ID selectors defined in `style.css`.
* **Minimal HTML Modifications:** HTML must remain clean, semantic, and style-agnostic — changing the theme must require editing `style.css` only, never the markup.

### 1.2 CSS Variables & Theme Tokens (DEPARTURES Palette)
All visual tokens must live in `:root` (light) and be overridden in `.dark` / `@media (prefers-color-scheme: dark)`. Required base structure:

```css
:root {
  /* Palette — DEPARTURES */
  --primary: #ffb52e;          /* amber — signature split-flap accent */
  --secondary: #8a7a58;        /* bronze — muted accent */
  --bg-primary: #e8dcc0;       /* warm cream — page background (never #ffffff) */
  --bg-secondary: #0d0b08;     /* deep espresso — board panels / dark surfaces */
  --bg-card: #efe4cc;          /* neumorphic card surface on cream */
  --text-primary: #16130e;     /* espresso text on cream */
  --text-secondary: #6b5d3d;   /* darkened bronze — AA-safe on cream for small text */
  --text-on-dark: #e8dcc0;     /* cream text on dark surfaces */
  --text-success: #256b45;
  --text-error: #b3362b;
  --border-default: rgba(22, 19, 14, 0.18);
  --border-error: rgba(179, 54, 43, 0.6);
  --border-success: rgba(37, 107, 69, 0.6);

  --radius-sm: 4px;   /* flap tiles */
  --radius-md: 12px;  /* buttons, inputs */
  --radius-lg: 22px;  /* cards, board panels */

  --shadow-sm: 0 2px 6px rgba(22, 19, 14, 0.10);
  --shadow-md: 0 10px 30px rgba(22, 19, 14, 0.18);
  --shadow-neu: 8px 8px 18px rgba(22, 19, 14, 0.14), -8px -8px 18px rgba(255, 252, 240, 0.85);
  --shadow-neu-inset: inset 4px 4px 10px rgba(22, 19, 14, 0.15), inset -4px -4px 10px rgba(255, 252, 240, 0.8);

  --spacing-gap: 1.5rem;
  --transition-fast: 150ms;
  --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  --z-dropdown: 100;
  --z-modal: 1000;
  --z-toast: 1100;

  --font-display: 'Bebas Neue', sans-serif;  /* signage-style headings */
  --font-mono: 'IBM Plex Mono', monospace;   /* board tiles, codes, labels */
  --font-base: 'Inter', sans-serif;          /* body copy */
}
```

Dark theme overrides (minimum): `--bg-primary: #0a0806; --bg-secondary: #16130e; --bg-card: #14110c; --text-primary: #e8dcc0; --text-secondary: #b8a988; --text-success: #6fce97; --text-error: #ff9a8a; --border-default: rgba(232, 220, 192, 0.16);` plus darkened `--shadow-*` and neumorphic shadow tokens (`rgba(0,0,0,0.55)` dark side / `rgba(255,240,210,0.05)` light side). Amber `--primary` remains constant in both themes.

* **Contrast Pairing (mandatory, both themes):** cream/light backgrounds pair only with espresso/bronze-dark text; espresso/dark backgrounds pair only with cream or amber text. Verify every surface pairing in both themes.
* **Never use `#ffffff`.** If a near-white is ever genuinely needed, use `#fefefe`. The cream `--bg-primary` is the intended light background.

### 1.3 Mandatory Dark Mode Support
* **Implementation:** Define dark tokens under both `.dark` and `@media (prefers-color-scheme: dark)`, structured so the `.dark` class can override the media query (e.g., `:root:not(.light)` logic or equivalent).
* **Default Presentation — Explicit Exception Clause:** The style specification selects **Light as the primary mode**; therefore Light is the default presentation and the fallback on first visit when no preference is stored. Dark Mode is nonetheless **mandatory** and must be fully designed, toggleable, and polished.
* **Persistence:** Store the user's choice in `localStorage` (e.g., key `departures-theme`); fall back to `prefers-color-scheme` on first visit. Provide a visible toggle in the header with correct `aria-pressed` and `aria-label` ("Switch to dark mode" / "Switch to light mode"), using Material Symbols `dark_mode` / `light_mode`.
* **No Theme Flash — Explicit Exception Clause:** A **single one-line inline script** in `<head>` that applies the persisted theme class to `<html>` before first paint is the ONLY permitted deviation from the no-inline-script rule, solely to prevent a flash of wrong theme.

### 1.4 Flexbox Layout, Mobile-First & Authorized Grid Usage
* **Default Alignment Rule:** Every flex container must default to `align-items: center` (`items-center`) unless an explicitly justified exception applies (documented exception: `stretch` inside cards so child buttons/lists fill the card width).
* **Mobile-First:** All layouts must be responsive out of the box — multi-column rows collapse to a single column on small viewports, type scales fluidly via `clamp()`, and horizontal scrolling is forbidden in any viewport width.
* **Grid Exception — Explicit Exception Clause:** The source style spec explicitly demands **CSS Grid**, which is therefore authorized for: (a) the split-flap board module, (b) the hero two-column layout, (c) feature/pricing/testimonial/step card rows, and (d) footer columns. All flex containers used elsewhere must still default to `align-items: center`.

### 1.5 Framework Default
* Use **Tailwind CSS** or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives. Given the heavy custom animation work (neumorphism, flap keyframes), custom CSS in `style.css` organized by sections/components is fully acceptable.
* All utilities must map back to the CSS variables and reusable generic class names (`.btn`, `.card`, `.input-group`, `.board`, `.faq__item`). Do not hardcode hex values in component rules — reference `var(--...)`.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Fonts via Google Fonts `<link>` tags** (with `preconnect`, not `@import`): `Bebas Neue` (display), `Inter` (body), `IBM Plex Mono` (board/mono). Bind them to `--font-display`, `--font-base`, `--font-mono`.
* **Icons:** Use **Google Material Symbols (Outlined)** via the standard Google Fonts link. **Raw inline SVGs and local icon files are forbidden.** All icons must be `aria-hidden="true"` with adjacent visible or visually-hidden text labels.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component (`.btn` + variants)
All states styled via CSS classes only:
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target **44×44px**, `border-radius: var(--radius-md)`, `font-family: var(--font-mono)` uppercase for labels, `transition: var(--transition-normal) var(--ease-standard)`.
* **Variants:** `.btn-primary` (amber gradient `linear-gradient(180deg, #ffc85c, #ffb52e)` with espresso `--text-primary` text and subtle text-shadow), `.btn-secondary` (neumorphic cream surface, espresso text, `var(--shadow-neu)`), `.btn-dark` (espresso surface, cream text — used on dark panels), `.btn-danger` (see 3.5).
* **Hover:** brightness shift (`filter: brightness(1.05)`) and/or shadow lift; `cursor: pointer`.
* **Focus:** Distinct `:focus-visible` ring — `outline: 2px solid var(--primary); outline-offset: 2px;` plus an inner dark ring via `box-shadow` for contrast on amber surfaces. Ring must be clearly visible on both cream and dark backgrounds.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading (`.is-loading`):** disables interaction (pointer-events none, `aria-busy="true"`), renders a rotating Material Symbol `sync` (or CSS ring spinner) without changing button dimensions (fixed `min-width`).
* **Disabled:** `opacity: 0.5; filter: grayscale(0.6); cursor: not-allowed;`.
* **Success/Error (`.is-success`, `.is-error`):** temporary feedback styles driven by `--text-success` / `--text-error` (border + icon color shift; never color alone — swap icon glyph too).

### 2.2 Card Component (`.card` + variants)
* **Default:** Flex/grid layout with `var(--bg-card)` surface, `var(--radius-lg)`, subtle `var(--border-default)` border, neumorphic `var(--shadow-neu)`.
* **Hover (interactive cards):** `transform: translateY(-2px)` + shadow shift to `var(--shadow-md)`.
* **Focus-within:** card border highlights (`--primary`) when a child link/button receives focus.
* **Loading (Skeleton):** Define `.skeleton` shimmer in CSS (`background: linear-gradient(90deg, ...); background-size: 200%; animation: shimmer 1.5s infinite`) so no layout jump occurs — the classes must exist and be reusable.
* **Empty State:** Define a structured `.state-empty` fallback: large Material Symbol + short guidance text.
* **Variants required:** `.card-neu` (features/steps), `.card-fare` (pricing), `.card-boarding` (testimonials — see 6.5).

### 2.3 Form & Input Component (`.input-group`)
Used in the Final CTA email capture:
* **States — all styled:** Empty, Focused (focus ring per 2.1), Filled, Valid (success border + `check` Material Symbol, colored via `--text-success`), Invalid (error border via `--border-error`, error text in `--text-error`, `error` icon, `aria-invalid="true"`, `aria-describedby` pointing to error message), Disabled, Read-only.
* **Structure:** Flex column wrapping a `<label>` (mono, uppercase, letter-spaced), the input (neumorphic inset surface `var(--shadow-neu-inset)`), and a **dedicated error feedback container** with `aria-live="polite"`.
* Validation fires on blur and on submit; inline messages only — `alert()` is forbidden.

### 2.4 Modal / Popup Component
Each pricing tier includes a "Fare details" link that opens a modal:
* **States:** Opening (fade + slight `scale(0.96)→1`), Open, Loading (brief simulated fare-rule fetch with spinner), Success/Error feedback inside, Closing (reverse animation) — all via CSS transitions/classes.
* **UX:** Centered flex container (`align-items: center; justify-content: center`), dimmed/blur backdrop, close button using Material Symbol `close` with `aria-label="Close dialog"`, full keyboard focus trap, `Esc` and overlay-click both close, focus returns to the triggering link. `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing at the modal title. Layered at `var(--z-modal)`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

### 3.1 Responsive by Default
* Fluid `clamp()` type scale (e.g., `h1: clamp(2.75rem, 6vw, 5rem)`), fluid section padding (`clamp(4rem, 10vw, 7rem)`), breakpoints for column collapse. Zero horizontal overflow at any width, including 320px.

### 3.2 Smooth Animations & Motion Discipline
* Every state change transitions with `var(--transition-normal) var(--ease-standard)`.
* Required keyframes: `flap-in` (split-flap entry, see 5.2), `shimmer`, `status-pulse` (BOARDING status), scroll-cue bounce, `spin` (loading).
* **`prefers-reduced-motion: reduce`:** disables flap cycles, parallax/tilt, pulses, and smooth scrolling; renders a static, fully legible board; caps any remaining opacity fades at 200ms. This is non-negotiable.

### 3.3 Accessibility (a11y)
* Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), logical heading order (one `h1`), skip-to-content link.
* WCAG AA contrast in **both** modes; if bronze `#8a7a58` fails AA for small text on cream, use the darkened `--text-secondary` and reserve raw bronze for large/decorative text.
* **Never color alone:** board statuses (BOARDING / ON TIME / DELAYED / DEPARTED) differ by label text and may pair a Material Symbol icon; the BOARDING pulse is decorative, not informational.
* Keyboard operability for: mobile menu, accordion, modal, form. Logical DOM/focus order; visible focus everywhere.
* `aria-live` regions for form errors and submission feedback. The ambient board animation must NOT spam screen readers — announce nothing per-tile; provide a visually-hidden static description of the board.

### 3.4 Mandatory Visual Feedback
Every click, hover, focus, and submission triggers a visible state change (button transforms, card lifts, accordion expansion, tile flips, form state styles).

### 3.5 Destructive Actions
Define `.btn-danger` (e.g., footer "Delete account" style link if included) — visually distinct red in **both** light and dark themes, never relying on hover alone.

---

## 4. DELIVERABLE & OUTPUT FORMAT

### 4.1 File Structure
* Three files: `index.html`, `style.css`, `script.js`. The only script tag is `<script src="script.js" defer></script>` — plus the single authorized one-line theme bootstrap in `<head>` (per 1.3). No other inline scripts.
* All animations, layout, and theming live in `style.css`; all behavior (theme toggle, flap orchestration, accordion, modal, validation, parallax) lives in `script.js`, vanilla JS only, no frameworks, no console errors, everything degrades gracefully without JS.

### 4.2 Naming Convention
* **BEM only**, consistently across the entire deliverable: `.board__tile`, `.card-fare__price`, `.faq__item--open`, `.hero__cta`. Never mix conventions.

### 4.3 Copy Rules
* **All user-facing copy in English.** No lorem ipsum, no placeholder text — write real, thematic, on-brand copy per Section 6. Fictional names, routes, and fares are expected content, not placeholders.

---

## 5. THEME DIRECTION — "DEPARTURES, THE SPLIT-FLAP BOARD"

### 5.1 Concept & Mood
Mid-century Solari departure board reimagined for the 2020s: warm **cream paper** venue (`#e8dcc0`) with soft neumorphic embossing, deep **espresso hardware** panels (`#0d0b08`, `#16130e`, `#0a0806`), and glowing **amber** (`#ffb52e`) — the classic split-flap yellow. Typography is signage-inspired: condensed caps display (Bebas Neue), technical monospace details (IBM Plex Mono), clean body (Inter). Flight metaphor throughout: ideas are "flights," launching is "departing," plans are "fare classes."

### 5.2 Signature Module: The Split-Flap Board (`.board`)
* **Panel:** Dark `--bg-secondary` surface, `var(--radius-lg)`, inset shadow for depth, faint top sheen gradient, a mono header row (`DEPARTURES` + a live local-time clock) and column labels: `FLIGHT · DESTINATION · GATE · STATUS`.
* **Tiles:** Each character sits in a tile (`.board__tile`) — square, `var(--radius-sm)`, background slightly lighter than the panel (`#1a1610`), inset shadow, and a **center horizontal hairline** (`::after`, 1px, darker) reproducing the flap split. Characters: `var(--font-mono)`, uppercase, cream or amber, subtle amber `text-shadow: 0 0 6px rgba(255,181,46,.35)`. Size via `clamp()` for responsiveness.
* **Animation:** On load, tiles flip to final characters — `transform-origin: center; animation: flap-in` rotating through `rotateX(-92deg) → 0` with `perspective` on the parent wrapper, staggered `animation-delay` per tile. Every few seconds, JS updates one row (destination/status) with rapid sequential flapping, swapping the character at the 90° midpoint.
* **Graceful degradation:** The final board content is hardcoded and fully readable without JS; JS only animates. Static under reduced motion.
* **Sample rows** (write in this format): `DP-204 · TOKYO · B12 · BOARDING`, `DP-117 · LISBON · A04 · ON TIME`, `DP-326 · NYC/JFK · C07 · DELAYED`, `DP-058 · BERLIN · B02 · DEPARTED`, `DP-441 · SÃO PAULO · A11 · ON TIME` — 5–6 rows.

### 5.3 Effects (all required by the style spec)
* **Neumorphism:** Cards and secondary buttons on cream use `var(--shadow-neu)`; inputs and tile wells use `var(--shadow-neu-inset)`. Dark-mode neumorphic shadows per 1.2. Neumorphism must never compromise focus visibility.
* **Gradients:** Amber button gradient (2.1), a warm radial amber glow behind the hero, subtle vertical sheen on the board panel, optional gradient accent on one hero display word.
* **3D/Parallax:** Hero board wrapped in a `perspective` container with a mouse-move tilt of max ±4° (`requestAnimationFrame`, disabled on touch and reduced motion) plus subtle scroll parallax on the background glow via `transform: translateY`. Tiles layered with slight `translateZ`.
* **Text Shadows:** Board character glow (5.2) and a faint relief text-shadow on display headings.
* **Keyframe/Transition tech:** CSS Grid, Flexbox, keyframe animations, transitions, transforms, gradients, box shadows, text shadows, border radius — all must appear in the final CSS.

---

## 6. PAGE SECTION SPECIFICATIONS

### 6.1 Global Header & Navigation
Sticky, blurred cream (dark in dark mode), logo `DEPARTURES` in `var(--font-display)` with an amber flap-square accent; anchor links (Features, How It Works, Testimonials, Pricing, FAQ) with smooth scroll + `scroll-margin-top`; theme toggle (per 1.3); compact primary CTA "Book a seat". Mobile: `menu` Material Symbol opens a dropdown panel at `var(--z-dropdown)` — `aria-expanded`, `aria-controls`, keyboard operable, `Esc` closes.

### 6.2 Hero
Two-column grid (copy + board) collapsing to one column. Mono eyebrow `NOW BOARDING · GATE 26`; `h1` in Bebas (suggested: **"NOW BOARDING: IDEAS WORTH LAUNCHING"** with amber gradient on the key word); supporting subcopy; CTAs: `.btn-primary` "Start boarding" (→ Final CTA) and `.btn-secondary` "View flight classes" (→ Pricing); mono trust row (e.g., `12,409 IDEAS DEPARTED · 98% ON-TIME LAUNCHES`). Right column: the split-flap board (5.2) with parallax tilt. Bouncing `keyboard_arrow_down` or `flight` scroll cue linking to Features.

### 6.3 Features — 3 Cards
Grid `3 → 1` (tablet intermediate allowed). Each `.card-neu`: amber chip with a Material Symbol (`alt_route`, `groups`, `insights` or similar), mono eyebrow (`AMENITY 01/02/03`), title, 2–3 sentences of real copy. Suggested features: **Runway** (idea planning), **Crew** (collaboration), **Tower** (launch analytics). Hover lift + focus-within per 2.2.

### 6.4 How It Works — 3 Steps
Boarding sequence: `01 CHECK IN` (capture the idea), `02 BOARD` (assign the crew), `03 DEPART` (launch). Oversized mono step numbers, Material Symbol per step, neumorphic step cards, connected by a dashed bronze line that animates/fills on scroll (IntersectionObserver; static under reduced motion).

### 6.5 Testimonials
Three `.card-boarding` cards styled as **boarding passes**: cream surface, perforated left edge (punched holes via radial-gradient + dashed divider), mono route codes (`LIS → BER`), fictional passenger name + role, real quote, star rating (`star` Material Symbols with accessible label), barcode strip via `repeating-linear-gradient`. Grid `3 → 1`, hover lift.

### 6.6 Pricing — 3 Tiers
Fare classes: **ECONOMY** ($0), **BUSINESS** (featured, e.g., $24/mo), **FIRST CLASS** (e.g., $59/mo). Grid `3 → 1`; featured middle card is dark board-styled (espresso surface, cream text, amber CTA) with a mono amber `MOST POPULAR` tag, slightly elevated. Each tier: fare list with `check` icons, CTA button, and a "Fare details" link opening the spec-compliant modal (2.4). Featured card must remain distinct in both themes.

### 6.7 FAQ — Accordion
5–6 thematic questions (e.g., "Can I change my flight plan mid-journey?"). Accessible accordion: `<button>` with `aria-expanded` + `aria-controls`, region panel animated via CSS (grid-template-rows or max-height transition), `expand_more` icon rotating 180°, keyboard operable, multiple panels may stay open.

### 6.8 Final CTA
Full-width dark board panel (espresso background, amber glow). Display heading in Bebas (suggested: **"CLEARED FOR DEPARTURE"**), short subcopy, the email signup `.input-group` (2.3) with `.btn-primary` "Get my boarding pass" — inline success confirmation via `aria-live`, optional toast at `var(--z-toast)`. Include a small decorative flap row spelling "DEPART".

### 6.9 Footer with Secondary Links
Espresso strip (both themes). Columns: brand + tagline + social Material Symbol icons (aria-labeled, `href="#"`), then **Product**, **Company**, **Support** link columns (secondary links, real labels: Features, Pricing, FAQ, About, Careers, Contact, Help Center, Status). Legal row: dynamic copyright year (JS), Privacy/Terms/Cookies links. All text meets contrast pairing rules.

---

## 7. ACCEPTANCE CHECKLIST (verify before delivering)

1. Zero `style="..."` attributes; zero inline SVGs; single deferred `script.js` + one-line theme bootstrap.
2. All Section 1.2 tokens present in both light and dark themes; contrast pairing holds everywhere.
3. Theme toggle persists via `localStorage`, respects `prefers-color-scheme`, correct ARIA states.
4. No horizontal scroll at 320px; all grids collapse correctly.
5. Every button/input/card state in Section 2 exists in CSS.
6. Modal passes focus trap, `Esc`, overlay click, focus restore, animated open/close.
7. Split-flap board animates on load, updates periodically, is static/readable without JS and under reduced motion.
8. All animations gated by `prefers-reduced-motion`.
9. All copy is real English flight-metaphor copy — no lorem ipsum.
10. BEM naming used consistently; no hardcoded hex values in component rules.
11. Keyboard-only walkthrough completes: nav → sections → pricing modal → FAQ → CTA form → footer.
12. All icons are Google Material Symbols, `aria-hidden`, with accessible labels.
