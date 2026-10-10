# Coding Agent Prompt — "Dark Portfolio Hero" Landing Page

## 0. Project Brief

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete landing page below in a single attempt. All user-facing copy, comments, class names, and file names must be in **English**.

**Product:** "Dark Portfolio Hero" — a premium 2024–2026 creative-portfolio landing page for a fictional creative developer. Mood: contemplative, dark, editorial-premium.

**Stack:** Vanilla HTML/CSS/JS (no build step). GSAP 3 + ScrollTrigger via CDN. hls.js via CDN. Google Fonts (Inter + Instrument Serif). Google Material Symbols (Rounded). Three files: `index.html`, `style.css`, `script.js`.

**Sections (in this exact order):** animated loading screen → floating pill navbar → Hero (HLS video background) → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ (accordion) → Final CTA (with email capture) → Footer (secondary links).

---

## 1. Strict Rules & Architecture

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. **Forbidden:** `style="..."` attributes, `<style>` blocks in HTML, and presentation HTML attributes.
* Style only via class/ID selectors. HTML must stay semantic (`header`, `nav`, `main`, `section`, `footer`, `h1`–`h3`) and visually agnostic — re-theming must require CSS edits only.
* Organize `style.css` with native CSS `@layer` ordering: `tokens`, `base`, `layout`, `components`, `utilities`.

**1.2 CSS Variables & Theme Tokens**
Define every token in `:root` exactly as follows (add nothing that contradicts these values):

```css
:root {
  /* Colors */
  --primary: #89AACC;
  --secondary: #4E85BF;
  --bg-primary: #0a0a0a;
  --bg-secondary: #141414;
  --text-primary: #f5f5f5;
  --text-secondary: #888888;
  --text-success: #5fd39a;
  --text-error: #ff7a7a;
  --border-default: #1f1f1f;
  --border-error: rgba(255, 122, 122, 0.5);
  --border-success: rgba(95, 211, 154, 0.5);
  --accent-gradient: linear-gradient(90deg, #89AACC, #4E85BF);
  --glow: rgba(137, 170, 204, 0.35);
  --video-tint: #1a2a4a;
  --overlay-dark: rgba(10, 10, 10, 0.2);

  /* Typography */
  --font-base: 'Inter', sans-serif;
  --font-display: 'Instrument Serif', serif;

  /* Radius / Shadow */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 12px 32px rgba(0, 0, 0, 0.5);

  /* Spacing / Motion */
  --spacing-gap: clamp(1.25rem, 3vw, 2rem);
  --transition-fast: 150ms;
  --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* Elevation */
  --z-navbar: 100;
  --z-dropdown: 200;
  --z-modal: 300;
  --z-toast: 400;
  --z-loading: 500;
}
```
* **Gradient-border technique (reused everywhere):** composite backgrounds — `linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box` plus a `border-box` layer that is `var(--border-default)` at rest and `var(--accent-gradient)` on hover/focus, with `border: 1px solid transparent`. On hover, also apply `box-shadow: 0 0 16px var(--glow)`.
* **Contrast pairing:** light text tokens (`--text-primary`) pair only with dark backgrounds (`--bg-primary`, `--bg-secondary`); gradient-filled elements use dark `#0a0a0a` text on the blue gradient.

**1.3 Dark Mode (Dark-Only Theme — Explicit Exception)**
* The dark palette above is the global default and **only** theme; it fully satisfies the mandatory dark-mode rule at `:root`.
* **Exception clause:** the source specification marks light mode as "Not Recommended" — therefore no light palette, no `.dark` class, no `prefers-color-scheme` branching, no theme toggle, and no `localStorage` theme persistence are required.
* Accessibility of the dark theme is still mandatory: all text must meet WCAG AA contrast against `#0a0a0a` / `#141414`.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build every layout structure with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment (e.g., `stretch` for equal-height pricing cards).
* Mobile-first: card/step/tier rows use `flex-wrap` with `flex: 1 1 320px` children and collapse to a single column below ~768px. **Never** allow horizontal scrolling at any viewport width.
* Use fluid `clamp()` sizing for all headline type. Section anchors get `scroll-margin-top` to offset the fixed navbar.

**1.5 Styling Approach — Clean Custom CSS + BEM**
* Use clean, hand-written custom CSS (no Tailwind, no framework), per the custom-CSS option of the architecture standard; the source spec supplies a custom CSS token block, so custom CSS is the correct choice.
* **One naming convention only: BEM** (`block__element--modifier`), e.g., `.hero__headline`, `.pricing-card--featured`, `.btn--primary`. Never mix conventions, never invent classes without markup.

**1.6 Typography & Icons (Google Only — Mandatory)**
* Google Fonts via `<link>` with `preconnect`: **Inter** (400, 500, 600) for body/UI, **Instrument Serif** (400 + italic) for display headlines. All `h1`/`h2`/large numerals use `--font-display` in *italic*; everything else uses `--font-base`.
* Icons: **Google Material Symbols Rounded** via the official stylesheet, used as ligature text (e.g., `check`, `expand_more`, `format_quote`, `menu`, `close`, `progress_activity`, `mail`, `alternate_email`, `link`, `code`). Set `font-variation-settings` for consistent rendering.
* **Explicitly forbidden:** raw inline SVGs, local icon files, emoji icons, external image files. Avatars are CSS gradient circles with text initials; all decorative visuals are CSS gradients.

---

## 2. Component & Section Specifications

**2.1 Button System (`.btn`)**
* **Base:** `display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, `border-radius: var(--radius-pill)`, Inter 500, `transition: all var(--transition-fast) var(--ease-standard)`.
* **Variants:** `.btn--primary` (surface background + gradient-border hover technique per 1.2 — this is the CTA style), `.btn--ghost` (transparent, stroke border), `.btn--danger` (defined with `--text-error`/`--border-error` tokens for completeness).
* **States (all via CSS classes/attributes):** hover (gradient border + glow + `cursor: pointer`), `:focus-visible` (2px `--primary` outline with offset — never remove), active (`transform: scale(0.97)`), `.is-loading` (swap label for rotating Material Symbol `progress_activity` spinner; `pointer-events: none`; `aria-busy="true"`; dimensions unchanged), `[disabled]` (`opacity: 0.5`, grayscale, `cursor: not-allowed`), `.is-success` / `.is-error` (driven by `--text-success` / `--text-error`).

**2.2 Card System (`.card`)**
* **Default:** flexbox layout, `background: var(--bg-secondary)`, `border: 1px solid var(--border-default)`, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-sm)`, generous padding.
* **Hover:** `transform: translateY(-2px)`, `box-shadow: var(--shadow-md)`, border brightens toward `--glow`.
* **Focus-within:** border highlights when any child link/button receives focus.
* **Icon chip:** 44×44 rounded square with the gradient-ring technique containing one Material Symbol.

**2.3 Form & Input (Final CTA email capture)**
* **Structure:** `.input-group` — flex column (documented exception to the center rule) wrapping a `<label>`, an `<input type="email">`, and a dedicated `.input-group__feedback` container.
* **States:** empty, focus (gradient ring + glow), filled, valid (`--border-success` + `check` icon), invalid (`--border-error`, error text in `--text-error`, `error` icon, message linked via `aria-describedby`), disabled, read-only.
* **Behavior:** on submit, `preventDefault()`, validate with an email regex; invalid → inline error rendered into an `aria-live="polite"` region; valid → submit button enters `.is-loading` (blocks double-clicks) → `.is-success` with a success message announced via the same live region. Never rely on color alone — pair every error/success with icon + text.

**2.4 Loading Screen (`.loader`)**
* Fixed full-viewport overlay, `z-index: var(--z-loading)`, `background: var(--bg-primary)`, flex column centered; lock body scroll (`overflow: hidden`) while active.
* **Counter:** `000` → `100` animated via `requestAnimationFrame` over ~2.2s, three zero-padded digits (`font-variant-numeric: tabular-nums`), large Instrument Serif italic.
* **Rotating words:** "Design" → "Create" → "Inspire", cross-fading with a slight y-shift every ~0.9s. Implement with vanilla JS class toggling + CSS opacity/transform transitions — **do not** use Framer Motion/AnimatePresence (vanilla only).
* **Progress bar:** thin track with fill using `var(--accent-gradient)` and `box-shadow: 0 0 12px var(--glow)`, width synced to the counter.
* **Exit:** at 2.7s total, fade out over 0.6s (opacity + slight scale), then remove from the DOM, set `aria-hidden`, and restore body scroll.
* **Resilience:** all "initially hidden" states for page content must be applied by JS, never CSS — if JS fails, content must be fully visible. Under `prefers-reduced-motion`, shorten to a simple 0.3s fade.

**2.5 Floating Pill Navbar (`.nav`)**
* Fixed top, horizontally centered pill container: `background: rgba(20, 20, 20, 0.7)`, `backdrop-filter: blur(12px)`, 1px `--border-default`, `--radius-pill`, `z-index: var(--z-navbar)`.
* **Logo:** 36×36 circle with the gradient-ring technique, surface interior, gradient monogram; brand name beside it.
* **Links:** pill-shaped anchors to each section; hover = surface background; active state (gradient text + pill background) driven by `IntersectionObserver` as the user scrolls, with `aria-current` managed in JS.
* **"Say hi" button:** small `.btn--primary`.
* **Mobile (<768px):** collapse links behind a hamburger (Material Symbol `menu`) opening a dropdown panel (`--z-dropdown`); toggle has `aria-expanded` + `aria-controls`; `Esc` closes; focus returns to the toggle; panel uses the same blurred surface styling.
* Entrance: GSAP fade + `y: -20 → 0` after the loader completes.

**2.6 Hero (`.hero`)**
* `min-height: 100svh`, flex column centered, centered text.
* **Background layers (bottom to top):** (1) HLS `<video>` — absolute, `inset: 0`, `object-fit: cover`, `muted`, `autoplay`, `loop`, `playsinline`, `preload="metadata"`, `aria-hidden="true"`, `tabindex="-1"`. The video is a ~17-second looping abstract animation of dark fluid: organic waves and gradients in deep navy `#1a2a4a` and black, smooth continuous motion, no text or objects, ~2:1 aspect. (2) Black overlay `var(--overlay-dark)` (20%). (3) Bottom fade: a 12rem (`h-48` equivalent) element with `linear-gradient(to top, var(--bg-primary), transparent)` melting the video into the page background.
* **HLS implementation:** load hls.js from CDN; in `script.js` define `const HLS_URL = '...'; // PLACEHOLDER — replace with the real .m3u8 stream`; support native HLS on Safari via `canPlayType('application/vnd.apple.mpegurl')`; on error or before playback, show a CSS fallback — layered radial gradients in `--video-tint` with a slow drift keyframe animation (static under reduced motion).
* **Content:** small letter-spaced eyebrow label; massive Instrument Serif *italic* headline, `clamp(2.75rem, 8vw, 7rem)`; role-cycling line; one short muted sub-sentence; two CTAs ("View my work" = `.btn--primary`, "Say hi" = `.btn--ghost`); scroll indicator.
* **GSAP entrance (after loader):** timeline with `power3.out` — headline `y: 50 → 0`, opacity `0 → 1`, duration `1.2s`; eyebrow, roles, copy, CTAs, navbar, and scroll indicator staggered after it.
* **Role cycling:** array `["Creative Developer", "UI Designer", "Motion Artist"]`; every 2s swap with fade-in (opacity + `translateY(8px)` transition); the cycling element is `aria-hidden="true"` with a static screen-reader-only alternative listing all roles; pause cycling under `prefers-reduced-motion`.
* **Scroll indicator:** thin vertical track with a dot animating `translateY` in a 1.5s infinite loop (`@keyframes scroll-down`), `aria-hidden="true"`, hidden under reduced motion, "Scroll" label available to screen readers.

**2.7 Features — 3 `.card`s**
* Flex row (wrap) → column on mobile. Each card: gradient-ring icon chip (e.g., `auto_awesome`, `animation`, `devices`), Inter 600 title, muted description. Hover/focus-within per 2.2. GSAP ScrollTrigger reveal: `y: 30 → 0`, opacity fade, `stagger: 0.1`.

**2.8 How It Works — 3 steps**
* Three flex columns; step numerals `01 / 02 / 03` in Instrument Serif italic with gradient text (`background-clip: text`); title + muted copy per step; a gradient dashed connector line between steps on desktop (pseudo-element), hidden on mobile. ScrollTrigger reveal.

**2.9 Testimonials**
* Three `.card`s: `format_quote` Material Symbol in gradient, quote text, author row (flex, centered) with a 44px gradient-ring avatar circle containing text initials (no images), name in `--text-primary`, role in `--text-secondary`. Hover per 2.2.

**2.10 Pricing — 3 tiers**
* Three flex columns (equal height via documented `stretch` exception). Middle tier `.pricing-card--featured`: gradient border (composite technique), "Most popular" pill badge with gradient background and dark `#0a0a0a` text, slight elevation.
* Each tier: name, large Instrument Serif italic price + period, feature list with `check` Material Symbols in gradient, one `.btn` CTA (featured tier uses a gradient-filled button with dark text; others use `.btn--primary`).

**2.11 FAQ — accessible accordion**
* 5–6 items. Each: a `<button>` (min-height 44px, flex, `justify-content: space-between`, centered) containing the question and an `expand_more` icon that rotates 180° when open; `aria-expanded` + `aria-controls`; panel with `role="region"` + `aria-labelledby`, animated via CSS `grid-template-rows: 0fr → 1fr` transition; JS enforces one-open-at-a-time; fully keyboard operable.

**2.12 Final CTA**
* Section with a soft radial `--glow` backdrop; massive Instrument Serif italic headline; short copy; the email capture form per 2.3 plus a `.btn--primary` "Get in touch" mailto link. All feedback announced via `aria-live`.

**2.13 Footer**
* Top row: brand (logo + tagline) on the left; secondary link columns on the right — "Company" (About, Blog, Careers, Contact), "Resources" (Portfolio, Process, FAQ, Press), "Social" (44×44 icon buttons: `mail`, `alternate_email`, `link`, `code`, each with `aria-label`).
* Bottom bar: copyright with dynamic year via JS, "Back to top" smooth-scroll link, muted text.
* Link hover: gradient text or animated underline; visible `:focus-visible` rings everywhere.

**2.14 Modals**
* None are required. Do not add any modal or popup.

---

## 3. Core UX & Micro-Interaction Rules

* **Responsive by default:** fluid `clamp()` type, breakpoints ~640/768/1024px, zero horizontal overflow at any width.
* **Smooth animations:** every state change uses `transition: var(--transition-fast|normal) var(--ease-standard)`. Under `prefers-reduced-motion`: disable all loops (scroll dot, role cycling, video fallback drift — pause the video too), and make GSAP set final states instantly via `gsap.matchMedia()`.
* **Accessibility:** semantic landmarks; a skip-to-content link; every `<section>` has an `aria-labelledby` heading (`h2` in Instrument Serif italic); logical DOM/focus order; full keyboard operability (no mouse-only interactions); `aria-live` regions for form errors, success, and loading feedback; never communicate state by color alone (always icon + text); AA contrast throughout the dark theme.
* **Mandatory visual feedback:** every click, hover, and submission produces a visible state change.
* **Destructive actions:** none on this page, but `.btn--danger` and its error tokens must still be defined in CSS.
* **JS resilience:** scroll-reveal initial states are applied by JS only, so content is never hidden if GSAP or JS fails to load.

---

## 4. Deliverables & Output Format

* **Files:** `index.html`, `style.css`, `script.js`. `script.js` loads once via `defer`; GSAP, ScrollTrigger, and hls.js load via CDN `<script>` tags before it. No inline `<script>` logic, no inline styles, no `<style>` blocks.
* **Naming:** BEM exclusively, consistent across all three files.
* **Copy:** write realistic, premium, on-brand English copy for a creative developer portfolio — no lorem ipsum. The only permitted placeholder is the HLS stream URL, clearly marked `// PLACEHOLDER`.
* **No external assets:** no image files, no inline SVGs — only Google Fonts, Google Material Symbols, CSS gradients, and the HLS video.
* Output the complete, runnable code for all three files in a single response.
