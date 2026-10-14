# SYSTEM PROMPT — Coding Agent Task
## Build "KEY — A Wire to Nowhere" — Complete Vintage/Nostalgic Landing Page (First Attempt, Production-Ready)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Deliver a complete, polished landing page in one pass.

**Art Direction:** "KEY — a wire to nowhere" — a 2020s-contemporary tribute to the telegraph key: brass, aged paper, morse dots and dashes, humming wires, long-distance longing. Keywords: morse, telegraph, vintage, nostalgic, animated, gradient. Required effects: **Glow, Neumorphism, Gradients, Micro-animations, Hover Effects.** Techniques: Flexbox, CSS Filters, Keyframe Animations, Transitions, Transforms, Gradients, Box Shadows, Border Radius.

**Sections (in order):** Hero • Features (3 cards) • How It Works (3 steps) • Testimonials • Pricing (3 tiers) • FAQ • Final CTA • Footer with secondary links. Include a minimal sticky header (logo, anchor nav, theme toggle) and a "Skip to content" link.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. **The `style="..."` attribute is forbidden.**
* Style exclusively via class/ID selectors. HTML must remain clean, semantic, and styling-agnostic — reskinning the page must require CSS edits only, never markup changes.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` (overridden in `.dark`). Required names: `--primary, --secondary, --bg-primary, --bg-secondary, --text-primary, --text-secondary, --text-success, --text-error, --border-default, --border-error, --border-success, --radius-sm, --radius-md, --radius-lg, --shadow-sm, --shadow-md, --spacing-gap, --transition-fast, --transition-normal, --ease-standard, --z-dropdown, --z-modal, --z-toast`.

**Light mode (canonical) — map the given palette:**
* `--primary: #382715` — the source lists `#38271562` (8-digit hex = dark brown at ~38% alpha). Keep it verbatim as `--primary-veil: #38271562` for translucent overlays, gradient stops, and glow halos; use its solid form for `--primary`.
* `--secondary / --accent: #e8c98f` (brass key) and `--muted: #8a795c` (weathered ink).
* `--bg-primary: #e8dcc8` (aged paper) — **never pure white**; use `#fefefe` only if a near-white surface is genuinely needed. `--bg-secondary:` a lighter cream tint derived from the palette for elevated cards.
* `--text-primary: #241a10`, `--text-secondary: #8a795c`; `--text-success:` patina green, `--text-error:` sealing-wax red — final values must clear 4.5:1 on paper backgrounds. `--border-default`: soft palette-derived brown; `--border-success`/`--border-error` match the text tokens.
* **Contrast pairing is mandatory in every theme:** light backgrounds pair with dark text; dark surfaces pair with light text (e.g., `#e8dcc8` ↔ `#241a10`/`#170f08`; `#170f08`/`#241a10` ↔ `#e8dcc8`).
* **Theme-extension tokens (required):** `--gradient-brass` (135° gradient from `#e8c98f` to `#8a795c`), `--gradient-paper`, `--glow-brass` (warm brass box-shadow halo), `--shadow-neu` (dual neumorphic shadow tuned to the paper background), `--font-display`, `--font-base`, `--font-mono`.

**1.3 Mandatory Dark Mode Support**
* **Exception clause:** the source style spec designates Light as the theme's primary identity (✓ Light / ○ Dark) — light mode is therefore the default, canonical presentation. **Dark mode is still mandatory** and must be fully implemented, not stubbed.
* Build the "night telegraph office": `--bg-primary: #170f08`, `--bg-secondary: #241a10`, `--text-primary: #e8dcc8`, `--text-secondary:` a brightened `#8a795c` tint that clears 4.5:1 on `#170f08`, borders in warm dark browns, brass glow intensified, neumorphic shadows retuned for dark surfaces.
* Provide tokens under both a `.dark` class and `@media (prefers-color-scheme: dark)`; switching must require zero HTML restructuring.
* Persist the choice in `localStorage`; first visit falls back to `prefers-color-scheme`, then to light. Visible toggle (Material Symbols `light_mode`/`dark_mode`) with correct `aria-pressed` and dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode").

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build every layout with Flexbox. **Every flex container defaults to `align-items: center`** unless an exception is explicitly justified.
* Mobile-first: all multi-column rows (features, steps, testimonials, pricing, footer) collapse to a single column on small viewports; **no horizontal scrolling at any width from 320px up**.

**1.5 Framework Default & Tailwind CSS Integration**
* Use Tailwind CSS — or clean custom CSS organized with `@layer`/`@apply`. All utilities must resolve to CSS variables or reusable component classes (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Google Fonts only, loaded via `<link>`/`@import`:
  * `--font-display: 'Fraunces'` — nostalgic, characterful serif for headings.
  * `--font-base: 'Libre Franklin'` — readable vintage-flavored body copy.
  * `--font-mono: 'IBM Plex Mono'` — morse strings, telegraph micro-labels, prices, postmarks.
* Icons: **Google Material Symbols only**. **Raw inline SVGs and local icon files are forbidden.**

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component Requirements** — all states via CSS classes:
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` min 44×44px. Variants: `.btn--primary` (brass gradient fill, dark `#241a10` text, subtle glow), `.btn--secondary` (neumorphic pressed-paper button, letterpress text), `.btn--ghost` (text + underline "wire").
* **Hover:** brightness/shadow shift, brass glow intensification, `cursor: pointer`.
* **Focus:** distinct focus ring from CSS variables, visible on paper and dark backgrounds.
* **Active:** `transform: scale(0.97)` — a telegraph key being tapped.
* **Loading:** disables interaction, blocks double-clicks, shows a CSS spinner or pulsing Material Symbol **without changing button dimensions**.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** temporary states driven by `--text-success`/`--text-error` (e.g., CTA flips to "Sent" with a `check` icon).
* **Destructive (if any):** `.btn-danger`, visually distinct in both themes.

**2.2 Card Component Requirements** (Features, Testimonials, Pricing):
* **Default:** flexible flex column, `--bg-secondary` surface, subtle `--border-default` border, neumorphic elevation, `--radius-lg`. Style cards as aged telegram slips with decorative morse dot/dash rules (pure CSS) and mono postmark micro-labels.
* **Hover:** `transform: translateY(-2px)` plus shadow/glow shift.
* **Focus-within:** border highlights when a child link/button is focused.
* **Loading (skeleton):** shimmer keyframe in CSS; zero layout jump.
* **Empty state:** Material Symbol + guidance-text pattern (define even if unused).

**2.3 Form & Input Requirements** (Final CTA email capture):
* **States:** empty, focused (outline ring), filled, valid (success border + `check_circle`), invalid (error border, `--text-error` message + `error` icon), disabled, read-only.
* **Structure:** flex `.input-group` wrapping `<label>`, `<input>`, and a dedicated error-feedback container wired to an `aria-live="polite"` region. Style as a telegram transmission line (mono font, underline).

**2.4 Modal / Popup Requirements (conditional)**
* If any overlay is introduced (e.g., demo lightbox): Opening → Open → Loading → Success/Error → Closing, all CSS-animated; centered flex container (`align-items: center`), backdrop, Material Symbol close button, keyboard focus trap, close on `Esc` and overlay click, `role="dialog"` + `aria-modal`.

**2.5 FAQ Accordion Requirements**
* Each item: a `<button>` trigger with `aria-expanded`/`aria-controls`, a rotating `expand_more` Material Symbol, and a panel that animates open/closed via CSS transitions with no abrupt jumps. Fully keyboard operable; hover/focus feedback on triggers.

**2.6 Section-by-Section Build Specification**
* **Header (sticky):** morse monogram logo (`−·−` for "K"), anchor nav (Features, How It Works, Testimonials, Pricing, FAQ), theme toggle, compact `.btn--primary` CTA. On mobile the nav collapses behind a keyboard-accessible menu button. Sections get `scroll-margin-top`; smooth scrolling with a `prefers-reduced-motion` override.
* **Hero:** oversized Fraunces headline, a decorative mono morse line (`−·− · −·−−` = "KEY"), animated gradient backdrop (paper + drifting brass radial glow via keyframed `background-position`), a blinking telegraph indicator dot, and two CTAs: `.btn--primary` "Send the First Message" (scrolls to Final CTA) and `.btn--secondary` "Read the Wire" (scrolls to Features). Optional pure-CSS telegraph-key silhouette built from gradients, filters, and border-radius — no images, no SVG.
* **Features (3 cards):** each with a Material Symbol in a neumorphic brass-wash circle, a title, 2–3 lines of copy, and a mono micro-label (e.g., `MSG 01 — STOP`). Suggested angles (write original English copy in the same voice): 1) The Wire — instant transmission; 2) The Key — tactile, deliberate sending; 3) The Silence — quiet, human, ad-free.
* **How It Works (3 steps):** steps "Tap the Key → Ride the Wire → Arrive Somewhere," connected by a CSS gradient "wire" with an animated traveling pulse dot; the wire becomes vertical on mobile.
* **Testimonials:** 3 telegram-styled quote cards: mono quote block with `— STOP` separators, initials-monogram avatar inside a neumorphic circle (no external images), name + role, Material Symbol star rating with an accessible text label (never color/icon alone).
* **Pricing (3 tiers):** "Local Wire" (free), "Long Distance" (featured — brass gradient border, glow, mono "MOST POPULAR" badge), "Continental" (premium). Each card: tier name, mono price, feature list with Material Symbol checks, per-tier CTA (featured uses `.btn--primary`, others `.btn--secondary`). Optionally add an accessible monthly/annual switch (`role="switch"`, `aria-checked`) — only if implemented cleanly.
* **FAQ:** 4–6 themed questions using the 2.5 accordion.
* **Final CTA:** full-width animated-gradient panel with brass glow, short poetic headline, the 2.3 email form with a Loading → Success button state ("Message sent — the wire hums."), inline `aria-live` feedback, and decorative morse.
* **Footer with secondary links:** dark-token inversion (bg `#170f08`, text `#e8dcc8` — contrast-paired; adapts via tokens in dark mode). Columns: Product anchors, Company, Resources, and social links (Material Symbols) — every secondary link must resolve to a real anchor or themed destination, no dead `href="#"`. Legal bar with © line and a morse sign-off.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid type via `clamp()`; no horizontal overflow from 320px up.
* **Smooth animations:** transition on all state changes with `var(--transition-normal)`. Required keyframes: `pulse` (breathing morse dot), `travel` (wire current), `shimmer` (skeleton), `blink` (telegraph indicator), `gradient-shift` (hero backdrop). All motion is disabled under `prefers-reduced-motion: reduce` with graceful static fallbacks.
* **Accessibility (a11y):** ≥4.5:1 body-text contrast in **both** modes; never color alone to communicate state; semantic HTML5 (`header/main/section/nav/footer`, logical `h1`→`h2` order); ARIA roles/labels on the theme toggle, accordion, and any switch; logical DOM/focus order; full keyboard operability; `aria-live` regions for form errors, success feedback, and loading states; visible "Skip to content" link.
* **Mandatory visual feedback:** every click, hover, focus, and submission triggers a visible state change.
* **Effects discipline:** glow halos, neumorphic press states, drifting gradients, hover lift, tap-down scale — but glow and gradients must never reduce text contrast or cover interactive targets. Layer stacked UI with `--z-dropdown` (mobile menu), `--z-modal` (any dialog), `--z-toast` (any success toast).

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, and `script.js`. No inline styles; no inline `<script>` blocks beyond the single deferred `script.js` reference; no inline SVGs; no external or local image assets — build all visuals from CSS, gradients, filters, Material Symbols, and typography.
* **Naming convention (single, consistent):** BEM for custom component classes (`.btn`, `.btn--primary`, `.card__title`, `.faq__trigger`) authored in `style.css` (via `@layer components` if using Tailwind), with Tailwind utilities reserved strictly for layout/spacing. Never mix in ad-hoc class names.
* **Copy:** write all user-facing copy in English, in the wistful telegraph voice. **No lorem ipsum** — invent coherent, on-theme content for every section, label, and link.
* **Acceptance:** the page must be complete, polished, and production-ready on the first attempt — every section, every interactive state (default / hover / focus / active / loading / disabled / valid / invalid / open / closed), both light and dark themes, and reduced-motion behavior all functional.
