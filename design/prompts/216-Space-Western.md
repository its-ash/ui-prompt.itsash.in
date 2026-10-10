# CODING-AI PROMPT — COMPLETE LANDING PAGE BUILD · THEME: "SPACE WESTERN"

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready Landing Page described below on the first attempt, in a single pass. Every rule in this specification is mandatory — where your habits conflict with a rule, the rule wins.

---

## 0. PROJECT BRIEF & ART DIRECTION

**0.1 Theme & Mood** — "Space Western" (claude-artisan/retrofuturism, 1950s–present): science-fiction storytelling that borrows frontier motifs — dusty horizons, saloons, wanted posters, stamped labels, and practical, lived-in spacecraft. Reference moods: Cowboy Bebop, Firefly, the machinery of frontier science fiction.

**0.2 Visual Language & Effects** — Dusty desert neutrals against nocturnal space; stenciled utility type; star-map details; weathered panels with 1px dust-tone borders; stamped monospace labels; frontier red accents; layered shadow and blur (dust-gradient haze, blurred sticky nav floating over the star field). All decorative art — star fields, orbit dashes, dust haze, rivets, stamp frames — must be built with pure CSS (gradients, box-shadows, pseudo-elements). No images, no SVG.

**0.3 Dual-Mode Mandate** — The source style declares no light/dark modes; you must design, build, and validate **both** themes before delivery. Dark ("Nocturnal Space") is the brand default; Light ("Dusty Desert") is its sun-bleached counterpart. Both must pass the contrast checks in Section 3.

**0.4 Design Token Contract** — Map the source palette onto these mandatory token names:

*Dark theme (default, defined on `:root`):*
- `--bg-primary: #17151a` (nocturnal void) · `--bg-secondary: #272129` (weathered panel) · extra `--surface-raised: #44363a`
- `--text-primary: #f5e5c8` · `--text-secondary: #c6ae91`
- `--primary: #d56b3e` (frontier red) · `--secondary: #74bcc1` (star-chart teal) · extra `--dust: #b58b61`
- `--border-default`: derive from `--dust` (solid or alpha-reduced)
- `--text-success` / `--border-success`: desaturated green family that reads on dark (e.g., `#8fb573`)
- `--text-error` / `--border-error`: a true red clearly distinct from `--primary` (e.g., `#e5484d`)

*Light theme (overrides under the light theme class — starting values; tune until WCAG AA passes):*
- `--bg-primary: #efe6d4` (sun-bleached sand — never pure white; use `#fefefe` only where a near-white is genuinely required) · `--bg-secondary: #e4d7bd` · `--surface-raised: #d9c9a9`
- `--text-primary: #2a2119` · `--text-secondary: #6b5a44`
- `--primary: #c05323` (darkened for AA on sand; keep `#d56b3e` for large display fills) · `--secondary: #1e6b72` · `--dust: #8a6544`
- Success/error tokens re-tuned for light backgrounds

*Shared tokens:*
- Radius: `--radius-sm: 2px` · `--radius-md: 6px` · `--radius-lg: 12px` · `--radius-pill: 999px`
- Shadows: `--shadow-sm` (subtle lift) · `--shadow-md` = `0 1px 0 rgba(255,255,255,.18) inset, 0 8px 18px rgba(0,0,0,.3)` (re-tint the inset highlight for light mode) · signature `--shadow-stamp: 3px 3px 0` hard offset in the current `--text-primary` tone
- Spacing: source scale `--space-1 … --space-24` plus `--spacing-gap: var(--space-4)`
- Motion: `--ease-standard: cubic-bezier(.2,.75,.3,1)` · `--transition-fast: .15s var(--ease-standard)` · `--transition-normal: .3s var(--ease-standard)`
- Type scale: `--text-xs: .75rem` through `--text-5xl: 4rem` (use `clamp()` for `--text-2xl` and above)
- Stacking: `--z-dropdown`, `--z-modal`, `--z-toast` — strictly ordered values
- Signature: `--dust-gradient: linear-gradient(160deg, rgba(181,139,97,.28), transparent 52%)` (re-tune alpha for light mode)

**0.5 Typography & Icon Direction** — Stenciled display type for headlines and wordmark (uppercase, generous letter-spacing); utility sans for body; monospace for stamped labels, coordinates, prices, and attributions. Icons: Google Material Symbols, frontier/space vocabulary (e.g., `rocket_launch`, `explore`, `route`, `shield`, `handshake`, `receipt_long`, `pin_drop`, `star`, `check`, `close`, `expand_more`, `light_mode`, `dark_mode`, `arrow_forward`, `mail`). Decorative icons get `aria-hidden="true"`; icon-only controls get `aria-label`.

**0.6 Page Section Map (build in this order; write real English copy for every section — Space Western flavor lives in labels, stamps, and names while body copy stays plain and scannable; no lorem ipsum):**

1. **Header / Sticky Nav** — stencil brand wordmark (invent one fitting name, e.g., "RED DUST FREIGHT CO.", used consistently site-wide); anchor links: Features, How It Works, Testimonials, Pricing, FAQ; theme toggle; compact `.btn` "Book Passage". Sticky with `backdrop-filter: blur()` over the star field; wraps/stacks at ≤620px.
2. **Hero** — dashed-border stamp badge in mono (e.g., "TRANSMISSION // OUTER-RIM SUPPLY LINES"); single stencil `h1` stating the core promise (direction: "Frontier freight, delivered before dawn."); 1–2 sentence muted subcopy; CTA pair: `.btn--primary` "Book a Cargo Run" (scrolls to Pricing) + `.btn` "View the Star Charts" (scrolls to Features); decorative mono coordinates line; star-map backdrop via a fixed, `pointer-events: none` CSS star field plus `--dust-gradient` haze.
3. **Features — 3 cards** — auto-fit row of `.card`s: Material icon in a stamped chip, stencil `h3`, 2–3 sentence muted copy, mono stamp tag. Angles: armored cargo (`shield`), live star-chart routing (`explore`), frontier-grade support (`handshake`).
4. **How It Works — 3 steps** — mono step stamps "01 / 02 / 03"; dashed CSS connector between steps (horizontal on desktop, vertical on mobile); each step: icon, stencil title, copy. Flow: file the manifest → route is plotted → cargo delivered.
5. **Testimonials — 3 quote cards** — quote in body font; star rating via Material `star` icons (mix 4s and 5s); mono attribution ("— NAME · VESSEL/COMPANY"); CSS-only monogram avatar chip.
6. **Pricing — 3 tiers** — theme-voiced names (e.g., Drifter / Marshal / Syndicate); middle tier highlighted with a `--primary` border, stamped "RECOMMENDED" badge, `--shadow-md` elevation, and `.btn--primary`; outer tiers use `.btn`. Mono/display price with flavor unit ("per cycle"); 4–6 `check`-icon features per tier. All CTAs scroll to the Final CTA.
7. **FAQ — 4–6 items** — real questions in theme voice; accordion behavior per §2.5.
8. **Final CTA** — full-bleed weathered band (dust border, panel shadow, dust gradient): stencil headline, short copy, email-capture `.input-group` + `.btn--primary` "Join the Manifest" with full form-state behavior and `aria-live` feedback.
9. **Footer** — brand + one-line tagline; 2–3 groups of secondary links (e.g., Company, Routes, Legal — real English labels; `href="#"` permitted only for these unspecified destinations); bottom bar with mono stamp ("© 2071 RED DUST FREIGHT CO. — ALL ROUTES RESERVED") and a "Back to top" link.

Keep the source `.wrap` primitive (max-width 880px, centered, generous padding) as the content container; full-bleed backdrops (hero, final CTA) may exceed it.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML. No `<style>` blocks.
- Target all design properties, layout rules, and states via class or ID selectors only.
- HTML stays clean, semantic (header/nav/main/section/article/footer), and agnostic of visuals — changing the look must require editing only the CSS file.

**1.2 CSS Variables & Theme Tokens**
- Every visual value must come from a `var(--...)` token defined in §0.4; no raw hex/sizing literals inside component rules.
- **Contrast pairing:** any light background token must pair with a dark text token and any dark background token with a light text token — enforce the pairing in **both** themes, not just the default.
- Light-mode base is sun-bleached sand, never pure white; use `#fefefe` only where a near-white is genuinely required.
- Keep the CSS header comment: `/* Space Western — design tokens (generated from style_catalog.json) */` plus a reference-specification comment.

**1.3 Mandatory Dark Mode Support**
- Define dark tokens on `:root` (brand default) and light overrides via a theme class on `<html>` (`.light`/`.dark` class swap — pick one convention and stick to it).
- First visit: read `prefers-color-scheme`; if it resolves to light, start light, otherwise start dark. Persist the user's choice in `localStorage` (e.g., key `space-western-theme`); the stored choice always wins on return.
- The nav must contain a visible toggle: icon-only button with `aria-label` ("Switch to light theme" / "Switch to dark theme"), `aria-pressed` reflecting current state, and `light_mode`/`dark_mode` Material icon swap.
- Theming must be pure variable swaps — no HTML restructuring, no duplicate stylesheets, no inline style writes.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless an exception is justified in a CSS comment (e.g., text columns use `flex-start`).
- Mobile-first: rows collapse to columns at the source's 620px breakpoint (add one mid breakpoint if needed); zero horizontal scrolling from 320px up.
- **Exception:** the source `.grid` primitive may retain CSS Grid (`repeat(auto-fit, minmax(220px,1fr))`) for the Features and Pricing card rows; every other layout must be Flexbox.

**1.5 Styling Approach**
- The source specification ships a custom CSS token system, which counts as the requested styling approach: build with clean, framework-free semantic CSS. Do not introduce Tailwind or any other framework. All classes must map back to CSS variables and reusable primitives (`.btn`, `.card`, `.input-group`, `.badge`, `.nav`, `.wrap`, `.grid`, `.row`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load Google Fonts via `<link>` with `preconnect` and bind them to tokens: `--font-display: 'Saira Stencil One', Georgia, serif` (alternatives: 'Big Shoulders Stencil Display'); `--font-sans: 'Barlow', Arial, Helvetica, sans-serif`; `--font-mono: 'Courier Prime', 'Courier New', monospace`.
- **Exception:** the source token file lists Arial, Georgia, and 'Courier New' — retain them only as fallbacks in each stack; the primary faces must be the Google Fonts above.
- Icons: Google Material Symbols (Outlined) loaded from Google Fonts. Raw inline SVGs, local icon files, and emoji-as-icons are explicitly forbidden.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons** — style all states via classes:
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target. Variants: `.btn`, `.btn--primary` (frontier red + `--shadow-stamp`), `.btn--ghost`, `.btn--danger`.
- **Hover:** visible brightness/shadow shift with `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring built from `--secondary` (3px outline, 3px offset) for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)` click feedback.
- **Loading:** `.is-loading` — disables interaction, prevents double-clicks, renders a CSS spinner or pulsing Material icon without changing button dimensions; set `aria-busy="true"` via JS.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`, no transforms.
- **Success/Error:** `.is-success` / `.is-error` — temporary feedback driven by `--text-success` / `--text-error` with an icon swap, announced via `aria-live`.

**2.2 Cards** — for Features, Testimonials, and Pricing:
- **Default:** Flexbox column layout, `--bg-secondary` surface, `1px solid var(--dust)` border, `--shadow-md`, spacing via `--spacing-gap`.
- **Hover:** `transform: translateY(-2px)` plus shadow deepening on interactive cards.
- **Focus-within:** border shifts to `--secondary` when a child control receives focus.
- **Loading (Skeleton):** define `.card--skeleton` shimmer keyframes that prevent layout jumps (available for dynamic slots).
- **Empty State:** define `.card--empty` — Material icon plus clear guidance text.

**2.3 Forms & Inputs** — the Final CTA email capture:
- **Structure:** `.input-group` flex container wrapping a `<label>`, the input, and a dedicated error/feedback container (`<p aria-live="polite">`).
- **States:** empty; focused (accent ring); filled; valid (`--border-success` + check icon); invalid (`--border-error`, error text + icon, `aria-invalid="true"`, `aria-describedby`); disabled; read-only.
- Validate on submit; error and success copy in English; never rely on color alone — always pair color with an icon and text message.

**2.4 Modal / Popup (Conditional)** — not required by the section map; if you introduce any dialog, it must use a centered flex container (`align-items: center`), a backdrop overlay, a Material `close` icon button, keyboard focus trapping, close via `Esc` and overlay click, and CSS-animated open/close states.

**2.5 FAQ Accordion (Required)** — implement accessibly with either native `<details>`/`<summary>` (preferred: works without JS) or the `button[aria-expanded]` + region pattern:
- Summary row: flex, `align-items: center`, question in display font, `expand_more` icon rotating 180° on open via CSS transition.
- Open/close animated in CSS (e.g., `grid-template-rows: 0fr/1fr` technique), respecting `prefers-reduced-motion`.
- Visible `:focus-visible` ring on the summary/button, hover feedback, full keyboard operability.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` sizing, breakpoints per §1.4, no horizontal overflow at any width from 320px.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; keep the source `prefers-reduced-motion: reduce` kill-switch block verbatim in spirit (all animations/transitions collapse to ~0ms).
- **Accessibility (a11y):** WCAG AA contrast in **both** light and dark modes (per the source note, validate both before publishing). Never communicate state by color alone. Semantic HTML5 landmarks, a single `h1`, logical heading order, a skip-to-content link, correct ARIA roles/labels on the accordion and theme toggle, logical DOM/focus order, full keyboard operability, and `aria-live` regions for dynamic feedback (form errors, success, loading).
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** define `.btn-danger` so it is visually distinct from all other buttons in both light and dark themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File structure:** separate `index.html`, `style.css`, and `script.js`. A single deferred entry point (`<script src="script.js" defer></script>`); zero inline `<script>` blocks, zero `<style>` blocks, zero `style="..."` attributes.
- **Naming convention:** BEM (`block__element--modifier`), consistent with the source primitives (`.btn`, `.btn--primary`, `.card`, `.input`, `.badge`, `.nav`, `.wrap`, `.grid`, `.row`). Never mix conventions.
- **JS scope (only):** theme toggle + `localStorage` persistence; FAQ accordion behavior (if not native `<details>`); newsletter validation + success/error feedback; smooth-scroll enhancement for anchor links. The page must remain fully readable and navigable with JavaScript disabled.
- **No unrequested placeholders:** write real English copy for every section in the Space Western voice; `href="#"` is allowed only for the genuinely unspecified footer link destinations.
- **Acceptance checklist (validate before publishing):** both themes pass AA contrast; toggle persists and respects `prefers-color-scheme` on first visit; no horizontal scroll from 320–1440px; complete keyboard-only pass; all button and input states implemented per §2; `prefers-reduced-motion` respected; zero inline styles/scripts; all user-facing copy in English.
