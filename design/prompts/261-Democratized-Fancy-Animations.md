# CODING-AGENT PROMPT — Landing Page: "Democratized Fancy Animations" (Dark Cosmic, Shader-Driven Motion)

**Role & Objective.** Act as a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality landing page in a single attempt — no follow-up questions, no partial output. The page markets a lightweight (~29 KB) animation engine that democratizes fancy WebGL-style effects (fluid distortion, volumetric light, blob tracking, particle physics, cursor-reactive parallax) with zero shader knowledge and 120 fps performance. Invent a fitting product name and write confident, cosmic, developer-friendly copy. Every effect must be built with CSS, SVG filters, and minimal vanilla JS — no WebGL libraries, no animation frameworks, no build step.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
- All design properties, layout rules, and states are applied via class or ID selectors only.
- HTML must remain semantic and styling-agnostic: retheming the site must require edits to `style.css` only.
- The only permitted non-semantic markup: one hidden SVG `<defs>` filter block (see 3.6a) and one `<script src="script.js" defer>` reference.

**1.2 CSS Variables & Theme Tokens**
Define every token in `:root` (English/ASCII names):
- **Colors:** `--primary: #7B2FBE` (Shader Purple); `--secondary: #00E5FF` (Glow Cyan); `--bg-primary: #050510` (Deep Black); `--bg-secondary: #1a1a4e` (Cosmic Blue); `--text-primary: #F0F0FF` (Luminous White); `--text-secondary: rgba(240, 240, 255, 0.72)`; `--text-success: #00E5FF` / `--border-success: rgba(0, 229, 255, 0.6)` (Glow Cyan is this palette's success signal); `--text-error: #FF4081` / `--border-error: rgba(255, 64, 129, 0.6)` (Plasma Pink is this palette's error signal); `--border-default: rgba(240, 240, 255, 0.14)`; extra accents `--accent-pink: #FF4081` (Plasma Pink) and `--accent-gold: #FFD54F` (Particle Gold).
- **Contrast pairing (mandatory in every state):** dark backgrounds (`#050510`, `#1a1a4e`) always pair with Luminous White text; any light surface (e.g., a Luminous White button fill or badge) always pairs with Deep Black text. Pure white `#ffffff` is forbidden — the only white in this design is `#F0F0FF`. Verify WCAG AA (4.5:1 body, 3:1 large text); if an accent fails for small text, restrict it to large text, icons, borders, and glows.
- **Shape & depth:** `--radius-sm: 10px`; `--radius-md: 18px`; `--radius-lg: 28px`; `--shadow-sm: 0 4px 24px rgba(0,0,0,0.4)`; `--shadow-md: 0 8px 40px rgba(0,0,0,0.5)`; glow tokens `--glow-cyan`, `--glow-purple`, `--glow-pink`.
- **Spacing & motion:** `--spacing-gap: 1.5rem`; `--transition-fast: 180ms ease-out`; `--transition-normal: 600ms cubic-bezier(0.23, 1, 0.32, 1)`; `--ease-standard: cubic-bezier(0.23, 1, 0.32, 1)`.
- **Layering:** `--z-nav: 900`; `--z-dropdown: 1000`; `--z-modal: 2000`; `--z-toast: 3000`.
- **Cursor tracking:** `--mx` and `--my` on `:root`, updated by JS and consumed via `calc()` for blob tracking and parallax.
- **Typography:** `--font-display` (Space Grotesk), `--font-base` (Inter).

**1.3 Mandatory Dark Mode (Dark-Only Exception)**
Dark mode must be defined via `@media (prefers-color-scheme: dark)` and/or a `.dark` class on `<html>`, with background/text variables switching seamlessly and no HTML restructuring. *Exception (dark-only theme): this design is intentionally dark-exclusive — the token set in 1.2 is the single default theme, a `.dark` class must still exist as the canonical hook, no light palette may be invented, and the visible toggle + localStorage persistence requirement is waived.*

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout structure with Flexbox.
- Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment (documented exceptions: full-width form fields and card grids may use `stretch`).
- Mobile-first: single-column stacks by default; rows only at ≥768px / ≥1024px. No horizontal scrolling at any viewport from 320px up.

**1.5 Styling Approach — Custom CSS, No Build Step**
Hand-written custom CSS in `style.css`, organized with native `@layer` (order: tokens, base, layout, components, effects, utilities). No Tailwind, no preprocessors, no CSS-in-JS. All styling flows through the 1.2 tokens and reusable component classes (`.btn`, `.card`, `.input-group`, `.nav`, `.section`).

**1.6 Typography & Icons — Google Fonts Mandatory**
- **Text:** load Space Grotesk (display) and Inter (body) via Google Fonts `<link>` tags (with `preconnect`); bind to `--font-display` and `--font-base`.
- **Icons:** Google Material Symbols (Rounded style) via `<link>` — used for feature icons, step markers, UI controls (`menu`, `close`, `expand_more`, `check`, `arrow_forward`), and loading spinners (`progress_activity`). Raw inline SVG icons, local icon files, and emoji-as-icons are forbidden.
- *Exception:* one hidden inline `<svg>` containing only `<filter>` definitions (feTurbulence + feDisplacementMap) is required for the fluid-distortion background — it is a functional effect primitive, not an icon.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component (`.btn`)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; `border-radius: var(--radius-md)`.
- **Variants:** `.btn--primary` (Luminous White fill, Deep Black text — highest-contrast CTA); `.btn--secondary` (transparent, Glow Cyan border + text); `.btn--danger` (Plasma Pink, visually distinct).
- **Hover:** glow shadow (`--glow-cyan` / `--glow-pink`) + brightness shift; `cursor: pointer`; labels gain chromatic aberration (`text-shadow: -2px 0 var(--accent-pink), 2px 0 var(--secondary)`).
- **Focus:** distinct keyboard ring via `box-shadow` built from tokens — never remove outlines without replacement.
- **Active:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** interactions disabled to prevent double-clicks, `aria-busy="true"`, rotating Material Symbol or CSS spinner; button dimensions must not change.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`.

**2.2 Card Component (`.card`)**
- **Default:** flex column, layered over `--bg-secondary` tones, 1px `--border-default`, `--radius-lg`, `--shadow-sm`.
- **Hover:** `transform: translateY(-2px)`, shadow/glow shift, border brightens.
- **Focus-within:** border highlights when a child link/button receives focus.
- **Loading:** `.card--skeleton` with a CSS shimmer keyframe matching final dimensions to prevent layout jumps.
- **Empty state:** structured fallback with a Material Symbol and guidance text.

**2.3 Form & Input (`.input-group`)**
- **Structure:** flex container wrapping a `<label>`, an `<input>`, and a dedicated error/feedback container.
- **States (all class-driven):** empty, focused (token-based ring), filled, valid (`--border-success` + check icon), invalid (`--border-error`, error text, error icon), disabled, read-only.
- Feedback renders in an `aria-live="polite"` region; never color-only — pair borders with icons and text.

**2.4 FAQ Accordion & Modal/Popup**
- FAQ is a semantic accordion: `<button aria-expanded>` + region pair per item; smooth height transition (`grid-template-rows` or `max-height`) using `--transition-normal`; `expand_more` icon rotates; fully keyboard operable.
- If any modal/lightbox is included, it must cover: opening/open/closing states animated via CSS transitions, loading and success/error states, centered flex container (`align-items: center`), backdrop overlay, Material Symbol close button, keyboard focus trapping, close via `Esc` and overlay click, `aria-modal`, and focus restoration.

---

## 3. CORE UX & MICRO-INTERACTION RULES

**3.1 Responsive by Default** — fluid `clamp()` typography, breakpoints at ~480/768/1024px, no horizontal overflow, all touch targets ≥44px.

**3.2 Smooth, GPU-Accelerated Animation** — every state change transitions with `var(--transition-normal)` (600ms cubic-bezier(0.23, 1, 0.32, 1)); micro-feedback uses `--transition-fast`. Animate only `transform` and `opacity`; use `transform: translate3d(...)` and `will-change: transform` on persistently animated layers only (blob, parallax, particles). Target constant 60fps. Under `prefers-reduced-motion: reduce` — disable parallax, blob tracking, particle motion, turbulence animation, chromatic aberration, and morphing; keep simple opacity fades for reveals.

**3.3 Accessibility** — sufficient contrast per 1.2; never communicate state by color alone; semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`); correct ARIA roles/labels on custom widgets (accordion, mobile menu); logical DOM/focus order; full keyboard operability; skip-to-content link; `aria-live` regions for dynamic feedback (form errors, loading, success).

**3.4 Mandatory Visual Feedback & Story-Driven Motion** — every click, hover, and submission triggers a visible state change. Choreograph scroll reveals with IntersectionObserver: each section enters with purpose (eyebrow → heading → copy → cards), children staggered via `transition-delay`. Nav links glow/underline on hover; the sticky header gains a backdrop blur when scrolled.

**3.5 Destructive Actions** — any destructive control uses `.btn--danger` and is visually distinct against the cosmic background.

**3.6 Signature Visual Effects (theme-critical — all required)**
- **a. Fluid distortion background:** one hidden SVG with `<filter id="fluid-distortion">` using feTurbulence (`type="fractalNoise"`, `baseFrequency` ≈ 0.008–0.012, `numOctaves` 2–3) + feDisplacementMap (scale ≈ 20–40). Apply `filter: url(#fluid-distortion)` to a dedicated background layer only — never to text containers. Animate `baseFrequency` with `<animate>` for living, fluid movement.
- **b. Volumetric light:** stacked `radial-gradient` layers (Glow Cyan, Shader Purple, Plasma Pink at low opacity) with slow drift/rotate keyframes and `mix-blend-mode: screen`, behind all content.
- **c. Chromatic aberration:** on hover of the hero H1, section headings, and button labels — `text-shadow: -2px 0 var(--accent-pink), 2px 0 var(--secondary)`; transition the `text-shadow`.
- **d. Floating particles:** a fixed `.particles` layer with 14–18 `.particle` elements; `@keyframes float` drifts them upward with opacity pulses; randomize size, position, color (Particle Gold, Glow Cyan, Plasma Pink), `animation-delay`, and duration via `nth-child` rules — never via inline styles.
- **e. Blob tracking:** a fixed, blurred, soft radial-gradient circle (`mix-blend-mode: screen`, `pointer-events: none`) following the cursor via `transform: translate3d(var(--mx), var(--my), 0)`; JS smooths movement with lerp + `requestAnimationFrame`. Hide on coarse pointers and reduced motion.
- **f. Morphing section transitions:** decorative edges between sections use animated `clip-path: polygon()` shapes (identical vertex count when animating); the Final CTA panel morphs subtly. Text must never be clipped.
- **g. 3D cursor parallax:** hero depth layers move with `transform: translate3d(calc(var(--mx) * <factor>), calc(var(--my) * <factor>), 0)` at factors of 0.1–0.4; subtle (max ~30px); disabled for touch/reduced motion.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- Exactly three files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond the single deferred `script.js` reference; no inline styles; no inline event handlers (`addEventListener` only).
- **Naming:** BEM throughout (`.card`, `.card__title`, `.card--featured`). Never mix conventions.
- **No unrequested placeholders:** write real English marketing copy for every section (product name, headlines, feature copy, testimonials with realistic names/roles, pricing tiers, FAQ answers). Use `"#"` hrefs only for genuinely unlinked footer links.
- Must run as-is in a modern browser with no build step; the only external resources are Google Fonts and Google Material Symbols.

---

## 5. PAGE STRUCTURE & SECTION SPECIFICATIONS

**5.0 Sticky header/nav:** logo (Material Symbol + wordmark), anchor links to all sections, compact primary CTA, accessible animated hamburger → dropdown menu at `--z-dropdown` on mobile (`Esc` closes, `aria-expanded`). Header gains `.is-scrolled` backdrop blur.

**5.1 Hero (full viewport):** layered composition — fluid-distortion layer (3.6a), volumetric lights (3.6b), particles (3.6d), blob (3.6e), parallax depth layers (3.6g). Eyebrow ("The 29 KB animation engine"), H1 with chromatic-aberration hover, subheadline, two CTAs (primary "Start building" → `#pricing`; secondary "See it in motion" → `#how-it-works`), animated scroll cue.

**5.2 Features — exactly 3 cards:** (1) shader-grade effects with zero shader math (fluid distortion, volumetric light presets); (2) 120fps performance on a ~29 KB GPU-accelerated pipeline; (3) reactive by default (blob tracking, particle physics, cursor parallax). Each card: Material Symbol, title, copy; hover per 2.2.

**5.3 How It Works — exactly 3 steps:** numbered 01/02/03 (e.g., "Drop it in" → "Pick a preset" → "Ship it everywhere"), connected by an animated gradient line, staggered scroll reveals.

**5.4 Testimonials — 3 quote cards:** gradient initial avatars (no external images), quote, name, role; hover lift per 2.2.

**5.5 Pricing — 3 tiers:** Free / Pro / Studio; middle tier featured (`.card--featured`): "Most popular" badge, glow border, slight scale; each tier lists price, features with check Material Symbols, and a CTA (featured uses `.btn--primary`).

**5.6 FAQ — 5–6 items** per 2.4 (performance, browser support, accessibility/reduced motion, framework compatibility, what the 29 KB includes, licensing).

**5.7 Final CTA:** morphing clip-path panel (3.6f) with glow; headline, supporting line, and an `.input-group` email capture per 2.3 with button loading → success/error states and `aria-live` feedback.

**5.8 Footer:** secondary link columns (Product, Company, Resources), Material Symbol social icons, copyright, legal links; subtle glowing top border.

---

## 6. JAVASCRIPT BEHAVIOR SPECIFICATION (`script.js` — vanilla only, no libraries)

- `mousemove` → update `--mx`/`--my` on `document.documentElement` (normalized to viewport), smoothed via lerp inside `requestAnimationFrame` for the blob; parallax consumes the same properties via CSS `calc()`.
- IntersectionObserver → add `.is-visible` for choreographed, staggered reveals.
- FAQ accordion and mobile menu toggles (`aria-expanded`; `Esc` closes menu).
- Newsletter form: `preventDefault`, email validation, button `.is-loading`, then success/error message in the `aria-live` region.
- Smooth anchor scrolling (respect `prefers-reduced-motion`).
- Header `.is-scrolled` state on scroll.
- Guard all motion features with `matchMedia` checks (`pointer: coarse`, `prefers-reduced-motion`); use passive listeners; keep the script lightweight in the spirit of the ~29 KB engine.
