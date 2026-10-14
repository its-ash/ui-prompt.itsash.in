You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete, production-ready landing page on the first attempt, for the brand **wander. — a daydream of planets**.

**Project Brief:** A space/cosmic landing page (2020s contemporary). Keywords: floating, planets, space, cosmic, animated, glass, translucent, gradient, blur. The aesthetic is a pastel daydream: soft glass panels, blurred floating planets, gradient nebulas, neumorphic surfaces, and slow celestial motion. Light mode is the designated default aesthetic, but dark mode must still be fully implemented (see 1.3). All user-facing copy must be written in **English**, in a dreamy, wonder-struck tone (keep the lowercase "wander." wordmark). All visuals must be drawn with pure CSS — **no image files**.

- **Palette (Light):** Surfaces `#f6efe7` (warm cream), `#efe4ef` (lilac mist), `#e3e9f6` (periwinkle haze); accents `#ffd3b6` (peach), `#ffc9d9` (pink), `#c9f0dc` (mint).
- **Effects:** Backdrop filter, CSS filters, keyframe animations, transitions, transforms, gradients, box shadows, border radius, neumorphism.
- **Sections:** Hero; Features (3 cards); How It Works (3 steps); Testimonials; Pricing (3 tiers); FAQ; Final CTA; Footer with secondary links — plus a sticky glass header.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states are targeted via class or ID selectors.
* **Minimal HTML Modifications:** HTML stays semantic and styling-agnostic — changing the theme later must require edits to `style.css` only. Decorative planet/star elements are part of the authored markup (from-scratch build) and must carry `aria-hidden="true"`.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Store all tokens in `:root`; re-map them for dark mode (1.3). Required names:
* **Colors:** `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
* **Suggested Light mapping:** `--bg-primary: #f6efe7`, `--bg-secondary: #efe4ef`, plus `--bg-tertiary: #e3e9f6` for section alternation; accents `--accent-peach: #ffd3b6`, `--accent-pink: #ffc9d9`, `--accent-mint: #c9f0dc`. Because the palette is pale, derive a deep "ink plum" for `--text-primary` (e.g., `#2f2a45`) and a deep nebula violet for `--primary` (e.g., `#42386b`) so text and buttons hold WCAG AA contrast. Verify every pairing.
* **Contrast Pairing:** Every light background token pairs with a dark text token and vice versa — enforced in **both** themes.
* **Never pure white:** Backgrounds use the palette pastels; if a near-white is unavoidable, use `#fefefe`, never `#ffffff`.
* **Radius & Shadows:** `--radius-sm: 10px`, `--radius-md: 18px`, `--radius-lg: 28px` (dreamy soft geometry; add `--radius-full: 999px` for pills). `--shadow-sm`, `--shadow-md` as soft diffuse shadows; glass panels get layered translucent shadows with a faint colored glow; neumorphic surfaces use dual low-opacity shadows (light top-left, plum bottom-right).
* **Spacing & Transitions:** `--spacing-gap` (1.5rem base), `--transition-fast: 150ms`, `--transition-normal: 400ms`, `--ease-standard: cubic-bezier(0.22, 1, 0.36, 1)` (floaty ease-out).
* **Elevation:** `--z-header: 40`, `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300` — never hard-code z-index values.
* **Glass tokens:** `--glass-bg`, `--glass-border`, `--blur-amount` (e.g., 16px) so glass intensity is theme-adjustable.

**1.3 Mandatory Dark Mode Support**
* Define a complete **"night sky" dark theme**: deep space indigo backgrounds (e.g., `#0f0d1f` / `#17142b`), pale text from the light palette (`#f6efe7` family), the same pastel accents now glowing against dark, and glass surfaces re-mapped to translucent dark. Implement via `@media (prefers-color-scheme: dark)` **and** a `.dark` class.
* **Theme Toggle:** A visible header button with a Material Symbols icon (`dark_mode` / `light_mode` swap), correct `aria-pressed` and `aria-label` ("Switch to dark theme" / "Switch to light theme"). Persist choice in `localStorage`; fall back to `prefers-color-scheme` on first visit.
* Theme switching swaps CSS variables only — no HTML restructuring.
* **Exception clause:** The source style spec designates Light as the default aesthetic — ship the pastel light palette as the default `:root`, but a complete, toggleable dark mode is still mandatory. Never deliver light-only.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout with Flexbox. **Every flex container must default to `align-items: center`** unless an exception is explicitly justified in a CSS comment.
* **Mobile-first:** Rows become columns at breakpoints; fluid type via `clamp()`; **no horizontal scrolling at any width**. Contain decorative planets inside relatively positioned sections whose decorative layer uses `overflow: hidden`; interactive content must remain unclipped (focus rings fully visible).
* Add a visually hidden "Skip to content" link (revealed on focus) and `scroll-margin-top` on sections so anchor jumps clear the sticky header.

**1.5 Framework & CSS Organization**
* Use clean, modern custom CSS in `style.css`, organized with `@layer tokens, base, layout, components, utilities`. If you use Tailwind, integrate it only at the CSS layer (`@apply` inside component classes) so markup never mixes conventions.
* Build a small reusable system — `.btn` (+ modifiers), `.card`, `.input-group`, `.section`, `.container` — all mapping back to CSS variables.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load Google Fonts via `<link>`: **Fraunces** (display, weights 400–700, italics for dreamy flourishes) for headings and the wordmark; **Outfit** (300–600) for body. Bind to `--font-display` / `--font-base`. No local font files.
* Icons: **Google Material Symbols Rounded** only (soft glyphs suit the theme), loaded via its Google Fonts stylesheet as `<span class="material-symbols-rounded">name</span>`, tuned with `font-variation-settings` in CSS. **Forbidden:** raw inline SVGs, emoji-as-icons, or local icon files.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component** — all states via classes:
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target; pill radius; deep violet `--primary` fill with pale text (light) / pastel fill with ink text (dark).
* **Hover:** brightness/shadow lift + `cursor: pointer`.
* **Focus:** distinct ring from tokens (`outline` or `box-shadow` glow), clearly visible on pastel and on dark; use `:focus-visible`.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading:** `.is-loading` — blocks interaction, prevents double-clicks (JS guard), renders a CSS spinner or rotating Material Symbol **without changing button dimensions**.
* **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
* **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error` (used by the newsletter submit).
* **Variants:** `.btn--primary`, `.btn--glass` (translucent + `backdrop-filter`), `.btn--ghost`, and `.btn--danger` (defined for the system; visually distinct in both themes).

**2.2 Card Component** (Features, Steps, Testimonials, Pricing):
* **Default:** flexbox layout; translucent `--glass-bg` + `backdrop-filter: var(--blur-amount)`; 1px `--border-default` (perceptible in both themes — WCAG 1.4.11); `--radius-lg`; `--shadow-md`.
* **Hover:** elevation shift + `transform: translateY(-2px)` (suppressed under reduced motion).
* **Focus-within:** border/glow highlight when a child link or button receives focus.
* **Loading (Skeleton):** define a shimmer keyframe + `.skeleton` class (documented for async content).
* **Empty State:** define `.empty-state` — Material Symbol + guidance text — as a reusable fallback.

**2.3 Form & Input Requirements** (Final CTA newsletter):
* **Structure:** `.input-group` — flex container wrapping `<label>`, `<input type="email">`, and a dedicated error feedback element with `aria-live="polite"`.
* **States, all class-driven:** empty, focused (outline ring), filled, valid (`--border-success` + check Material Symbol), invalid (`--border-error`, `--text-error`, error icon, message text), disabled, read-only. Neumorphic inputs must keep a visible border and focus ring — never rely on embossing alone.
* `script.js` validates on submit: empty → "Please enter your email address."; malformed → a gentle on-brand error; valid → `.is-loading` (~1.2s simulated), then success state + `aria-live` confirmation ("Welcome aboard, dreamer."). Double submissions blocked.

**2.4 Modal / Popup:**
* No modal is required by the section list — the **FAQ must be an accordion, not a modal**: native `<details>/<summary>`, glass styling, chevron Material Symbol rotating on `[open]`, visible focus on `summary`.
* If any overlay is added, it must have: opening/open/closing states animated via CSS transitions, a centered flex container (`align-items: center`), backdrop overlay, Material Symbol close button, keyboard focus trapping, close on `Esc` and overlay click, and loading/success/error states.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid `clamp()` sizing, flex wrapping, zero horizontal overflow, verified from 320px up.
* **Celestial motion:** 3–5 hero planets built from pure `radial-gradient` spheres (one with a rotated elliptical pseudo-element ring), each statically blurred via `filter` once, then animated with **transform-only** float keyframes (distinct durations 10–20s, `alternate`); twinkling star layer via opacity keyframes. Never continuously animate `filter`/`blur` — blur once, float forever. Reveal-on-scroll fade-ups via IntersectionObserver toggling a class.
* **Smooth animations:** all state changes transition with `var(--transition-normal)`; under `prefers-reduced-motion: reduce`, pause floats/twinkles/shimmer, collapse transitions, and keep every state perceivable without animation.
* **Accessibility (a11y):** AA contrast in both themes (text ≥ 4.5:1); never communicate state by color alone (pair icons + text); semantic HTML5 with exactly one `<h1>` and logical heading order; ARIA roles/labels on custom widgets (nav toggle, theme toggle); logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback. All decorative layers are `aria-hidden="true"`.
* **Mandatory visual feedback:** every hover, click, and submission triggers a visible state change.
* **Backdrop-filter fallback:** with `@supports not (backdrop-filter: ...)`, glass surfaces fall back to opaque-enough rgba fills + borders so text stays readable.
* **Destructive actions:** none on this page, but keep `.btn--danger` defined and distinct in both themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, and `script.js` — complete and working. HTML contains exactly one `<script src="script.js" defer>` and no other inline scripts.
* **Naming Convention:** BEM only (`block__element--modifier`) across HTML and CSS — never mix conventions.
* **Copy:** author real, on-brand English copy for every section (headline, features, steps, pricing, FAQ Q&As, testimonials with fictional-but-realistic names and initials avatars in glass circles — no photos). No lorem ipsum. Footer/secondary links may use `href="#"` with meaningful labels, since no real pages exist.
* **Script scope (`script.js`):** theme toggle (+ persistence), mobile nav toggle, newsletter validation with loading/success/error, reveal-on-scroll. No other behavior required.

---

## 5. PAGE BLUEPRINT — "wander."

1. **Sticky glass header** — `backdrop-filter` blur; lowercase "wander." wordmark (Fraunces italic); anchor nav (Features, How it works, Testimonials, Pricing, FAQ); theme toggle; "Start dreaming" `.btn--primary`. On mobile, collapses to a Material Symbol menu button toggling a glass dropdown (`aria-expanded`, keyboard operable, `--z-dropdown`).
2. **Hero** — full-viewport; layered floating planets + twinkling stars (decorative, contained); `<h1>` dreamy headline + subhead; CTAs `.btn--primary` ("Begin the journey") and `.btn--glass` ("Explore features"); subtle scroll hint.
3. **Features — 3 glass cards** — each with a Material Symbol icon (e.g., `travel_explore`, `nights_stay`, `auto_awesome`), title, 1–2 sentence description, hover lift.
4. **How It Works — 3 steps** — numbered glass badges connected by a dashed orbit line on desktop; column on mobile, row on desktop; title + text per step.
5. **Testimonials** — 3 glass quote cards: `<figure>` / `<blockquote>` / `<figcaption>`, star glyphs, initials avatar, name + role.
6. **Pricing — 3 tiers** — middle tier featured ("most dreamt of" badge, gradient border, elevation); each tier: name, price + billing period, check-glyph feature list, CTA (middle = `.btn--primary`, sides = `.btn--glass`).
7. **FAQ** — 5–6 real on-brand Q&As as styled `<details>/<summary>` accordions.
8. **Final CTA** — wide glass panel over a gradient nebula; headline + `.input-group` newsletter form with the full state machine (2.3) + `.btn--primary` submit.
9. **Footer** — brand + tagline, three columns of secondary links (e.g., Product / Company / Support), bottom bar with copyright; icons via Material Symbols only.

Generate the complete `index.html`, `style.css`, and `script.js` now, on the first attempt, following every rule above.
