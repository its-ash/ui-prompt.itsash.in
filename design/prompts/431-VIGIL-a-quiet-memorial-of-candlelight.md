# BUILD PROMPT — "VIGIL — A Quiet Memorial of Candlelight" Landing Page

**Your role:** Senior Frontend Engineer & Expert UI Designer. Build the complete, production-grade landing page now, in one attempt, to the specification below. Output finished code only — no scaffolding, no TODOs, no partial output.

---

## 0. PROJECT BRIEF & ART DIRECTION

**Theme:** VIGIL — a quiet memorial of candlelight
**Style:** Glassmorphism, 2020s Digital
**Mood keywords:** candle, vigil, glass, translucent, gradient, blur, hushed, reverent, luminous
**Mandatory techniques:** Flexbox, Backdrop Filter, CSS Filters, Keyframe Animations, Transitions, Transforms, Gradients, Box Shadows, Border Radius
**Mandatory effects:** Blur, Glass Effect, Gradients, Hover Effects
**Palette (authoritative):** `#080609` (deep ink plum), `#c9bdc9` (pale lavender), `#0a070c` (ink), `#0d090f` (charred plum), `#120b0c` (dark plum), `#d8c8d8` (pale lilac)

**Art direction:** Candles are rendered as *light, not objects* — soft radial glows in pale lavender, low-amplitude flicker keyframes, and slow drifting blurred orbs behind translucent glass panels. In Light mode, dark "ink glass" panes float over a lavender-mist gradient; in Dark mode, frosted lavender-tinted panes float over layered near-black plum. All motion is restrained: everything moves like a flame in still air.

**Typography:** Google Fonts only — **Cormorant Garamond** for display/headings (`--font-display`), **Inter** for body/UI (`--font-base`).
**Icons:** Google Material Symbols (Rounded) only, via `<link>` and `<span class="material-symbols-rounded">`. **Inline SVGs, icon fonts, and local icon files are forbidden.**
**Copy:** Write ALL user-facing copy in **English** — finished, real copy in a hushed, warm, reverent voice (e.g., "Light a candle. Hold a name in memory."). **No lorem ipsum.**

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. The `style="..."` attribute is **forbidden** anywhere in the HTML.
* Every design property, layout rule, and state is applied via **class or ID selectors only**.
* HTML stays semantic and presentation-agnostic — re-skinning the page must never require touching the markup.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Define all tokens in `:root` (Light) and override under `.dark` and `@media (prefers-color-scheme: dark)`:
* **Colors:** `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
* **Suggested values — Light (default):** `--bg-primary: #f1ecf2` (lavender mist; **never `#ffffff`** — use `#fefefe` where near-white is required), `--bg-secondary: #e6dee7`, `--text-primary: #080609`, `--text-secondary: rgba(18,11,12,0.68)`, `--primary: #080609` (button ink), `--secondary: #c9bdc9`.
* **Suggested values — Dark:** `--bg-primary: #0a070c`, `--bg-secondary: #120b0c` (elevated surfaces, `#0d090f` for depth layers), `--text-primary: #d8c8d8`, `--text-secondary: rgba(201,189,201,0.72)`, `--primary: #c9bdc9` (button), `--secondary: #c9bdc9`.
* **Glass tokens:** `--glass-bg` (Light: `rgba(254,254,254,0.38)` / Dark: `rgba(201,189,201,0.07)`), `--glass-border` (Light: `rgba(8,6,9,0.10)` / Dark: `rgba(216,200,216,0.14)`), `--glass-blur: 18px`, `--glow` (pale lavender flame-glow radial).
* **Contrast pairing:** every light background token pairs with dark text, every dark background token pairs with light text — enforced in **both** themes (WCAG AA minimum).
* **Shape, depth, motion, stacking:** `--radius-sm/md/lg`, `--shadow-sm/md`, plus `--glow-shadow` for candlelight; `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`; `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode Support**
* Dark mode **must always be fully defined** under `.dark` **and** `@media (prefers-color-scheme: dark)`; switching swaps CSS variables only, with zero HTML restructuring.
* Provide a visible theme toggle (Material Symbols `dark_mode` / `light_mode`) with correct `aria-pressed` and `aria-label`.
* Persist the user's choice in `localStorage`; initialization order: saved choice → `prefers-color-scheme` → Light.
* **Exception clause:** Per the design spec, Light mode is this theme's designated primary presentation — it is the default showcase and must be fully art-directed; Dark mode nonetheless ships with equal completeness per this rule.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structure with **Flexbox** (`display: flex` / Tailwind flex utilities). CSS Grid is permitted only for pricing/testimonial card rows if documented.
* Every flex container **must default to `align-items: center`** unless an exception is explicitly justified in a code comment (e.g., `.input-group` label stacking, footer link columns using stretch).
* Mobile-first: single-column base, rows scale up at breakpoints; **zero horizontal scrolling** from 320px up.

**1.5 Framework Default & Tailwind CSS Integration**
* Use **Tailwind CSS (Play CDN)** configured with the tokens above for layout/utilities; the visual identity — glass, glow, gradients, keyframes, component states — lives in `style.css` as BEM component classes.
* All utilities must resolve to CSS variables — **no hardcoded hex values outside `:root`/`.dark` token definitions**.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Include Google Fonts `<link>` tags; bind `--font-base: 'Inter'` and `--font-display: 'Cormorant Garamond'`.
* Use Google Material Symbols (Rounded) exclusively for all iconography.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
* **Default:** `.btn` — `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target, Inter font, transition on all state changes. Variants: `.btn--primary` (ink/pale-lavender pairing per theme), `.btn--ghost` (glass variant), `.btn--danger` (e.g., "Extinguish") — visually distinct in **both** themes.
* **Hover:** brightness/soft candle-glow shadow shift, `cursor: pointer`.
* **Focus:** distinct focus ring via `outline`/`box-shadow` using CSS variables — keyboard navigable.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading:** `.is-loading` — disables interaction (prevents double-clicks, `aria-busy="true"`), renders an animated Material icon (`hourglass_empty` rotation) or CSS spinner **without changing button dimensions**.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** temporary state classes driven by `--text-success` / `--text-error`.

**2.2 Card Component (`.card` + `.glass`)**
* **Default:** flexbox layout, `background: var(--glass-bg)`, `backdrop-filter: blur(var(--glass-blur))` + `-webkit-backdrop-filter`, 1px `var(--border-default)`, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-sm)`. Provide a solid fallback background inside `@supports not (backdrop-filter: blur(1px))`.
* **Hover:** `transform: translateY(-2px)` lift with shadow/glow shift.
* **Focus-within:** border highlights when a child link/button receives focus.
* **Loading (skeleton):** shimmer keyframe (gradient sweep) with reserved dimensions — no layout shift.
* **Empty state:** `.card--empty` fallback layout with a Google icon and clear guidance text.

**2.3 Form & Input Requirements**
* `.input-group` is a flex **column** (documented exception to centering default) wrapping: `<label>`, input field, and a **dedicated error-feedback container**.
* Style all states via classes: empty, focused (outline ring using `--glow`), filled, valid (`--border-success` + check icon), invalid (`--border-error`, error icon, error text), disabled, read-only.
* Error/success messages must be announced through an `aria-live="polite"` region.

**2.4 Modal / Popup Requirements**
* The FAQ must use an accessible **inline accordion, not a modal** (see 4.7). If any overlay is introduced anyway (e.g., a pricing detail dialog): states for opening/open/loading/success/error/closing all animated via CSS transitions; centered flex container (`align-items: center`); backdrop overlay; Material icon close button; keyboard focus trapping; close via `Esc` and overlay click; `role="dialog"` + `aria-modal="true"`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid type via `clamp()`, Tailwind breakpoints, no horizontal overflow at any width.
* **Smooth animations:** transitions on all state changes (`transition: var(--transition-normal)`); keyframes for candle flicker (subtle, irregular multi-step opacity/scale oscillation ~3–5% amplitude), drifting ambient orbs (2–4 large blurred gradient orbs, 20–40s loops, low opacity, `filter: blur()` or pre-blurred radial gradients), skeleton shimmer, and section reveals.
* **Reduced motion:** wrap all motion in `@media (prefers-reduced-motion: reduce)` — disable drift/flicker, reduce reveals to opacity fades.
* **Accessibility:** WCAG AA contrast in both Light and Dark modes; never rely on color alone — pair every state with an icon or text; semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`); correct ARIA roles/labels on custom widgets; logical DOM/focus order; **full keyboard operability**; `aria-live` regions for dynamic feedback (form results, FAQ optional).
* **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
* **Scroll reveals:** sections/cards fade-up on entry via `IntersectionObserver` toggling a class; CSS handles the transition.

---

## 4. SECTION-BY-SECTION BUILD SPECIFICATION

**4.1 Navigation:** Sticky glass navbar (`backdrop-filter` blur, `--glass-bg`), wordmark "VIGIL" in Cormorant Garamond, anchor links to every section, theme toggle, primary CTA. On mobile it collapses to a column behind a hamburger control (`aria-expanded`, keyboard operable, closes on link click and `Esc`).

**4.2 Hero:** Full-viewport (`min-height`), layered radial + linear gradients using the palette; a pale lavender candle-glow radial that gently flickers (pure CSS — no images); display headline in Cormorant Garamond, subcopy in Inter, two CTAs (`Light a Candle` primary; `Learn More` ghost that smooth-scrolls to How It Works); a subtle scroll cue.

**4.3 Features (3 glass cards):** e.g., *Light a Candle*, *Share a Memory*, *Keep the Vigil* — each with a Material icon inside a frosted circle, serif card title, body copy, and a learn-more link. Flex row on desktop, column on mobile; staggered reveal.

**4.4 How It Works (3 steps):** Steps 01/02/03 in oversized serif figures (e.g., *Dedicate → Share → Remember*); horizontal flex row with connector lines on desktop (CSS `::before` gradient rules — no extra markup), vertical timeline on mobile.

**4.5 Testimonials:** 3 glass quote cards — serif italic quotation, attribution with **initials monogram** inside a frosted circle (no photos, no external images anywhere in the build), and a relationship line ("Daughter of Margaret", etc.). Hover lift per 2.2.

**4.6 Pricing (3 tiers):** e.g., *Single Flame* (free), *Vigil Keeper* (featured), *Eternal Light* — featured middle tier elevated with border glow, slight scale on desktop, and a "Most Cherished" badge; feature lists with Material `check` icons; distinct CTA variants (primary on featured, ghost on others). All pricing buttons implement full button states per 2.1.

**4.7 FAQ:** 4–6 questions as an accessible accordion — `<button aria-expanded aria-controls>` + panel (`role="region"`, `aria-labelledby`), animated open/close via CSS transition (grid-rows or max-height), Material `expand_more` icon rotating with state, operable via keyboard (Enter/Space).

**4.8 Final CTA:** Full-width glass banner with a breathing candle glow; email `.input-group` with full validation states per 2.3 and client-side validation; submit button transitions Default → Loading → Success ("A candle has been lit.") or Error, all announced in an `aria-live` region; never lose user input on failure.

**4.9 Footer with secondary links:** Brand + one-line mission, grouped secondary links (Product, Company, Support, Legal), social links as Material icons with `aria-label`s, copyright small print, optional back-to-top anchor. All links are meaningful anchors — no dead `#` stubs without labels.

---

## 5. DELIVERABLE & OUTPUT FORMAT

* **Files:** `index.html`, `style.css`, `script.js` — fully separated. No inline CSS; no inline `<script>` blocks beyond a single deferred `<script src="script.js" defer></script>` entry point.
* **Naming:** BEM throughout (`.card`, `card__title`, `card--featured`) — never mix conventions.
* **`script.js` scope (vanilla JS only):** theme toggle + `localStorage` persistence, mobile nav, `IntersectionObserver` reveals, FAQ accordion, email validation + button state machine, smooth anchor scrolling.
* **Placeholders:** none — all copy is final, real, English text in the vigil voice; content is unspecified only where the brief left it open, and there you author it.
* **Pre-delivery verification:** no horizontal scroll at 320px+, both themes pass WCAG AA, every interactive element keyboard reachable, `prefers-reduced-motion` respected, no console errors, no external images.

Output the complete contents of `index.html`, `style.css`, and `script.js` now.
