# SYSTEM PROMPT — BUILD THE "SONORA" MUSIC STREAMING LANDING PAGE
### Theme: Flat Design Musical Intuitivo · Output Category: Minimalism & Swiss

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page described below **on the first attempt**, in a single response. All user-facing copy must be written in **English**.

---

## 0. PROJECT BRIEF & SECTION SPECIFICATION

### 0.1 Theme & Style Direction
- **Product:** A music streaming service (suggested brand name: **"Sonora"**). Mood: intuitive, modern, engaging, vibrant, personalized, seamless, dynamic — a "2026+ Sound Experience."
- **Aesthetic:** Flat Design fused with **Minimalism & Swiss** principles: solid color blocks, zero gradients, zero skeuomorphism, crisp edges, a strict underlying grid, typography-led hierarchy, generous whitespace, and restrained accent usage (accents cover roughly 10% of any viewport).
- **Signature visual effects (mandatory):** flat UI elements with music-reactive color accents, clean sans-serif typography, flat album art, simple music control icons, fluid play/pause micro-interactions, and fast seamless transitions.
- **Light/Dark:** Full dual-theme support. **Dark is the default theme** (per source spec: `background: #1A1A1A; color: #FFFFFF`); a complete, equally polished Light theme must also be delivered.

### 0.2 Color Palette (source spec, translated)
- **Primary:** Deep Purple `#6A0DAD`, Sky Blue `#00BFFF`, White `#FFFFFF`, Black `#1A1A1A`
- **Secondary/Accents:** Lime Green `#32CD32`, Vibrant Orange `#FF8C00`, Shock Pink `#FF00CC`, Dark Gray `#333333`

### 0.3 Section-by-Section Requirements (in this exact order)
1. **Sticky Header:** Wordmark ("Sonora", Montserrat 800, paired with a Material Symbol such as `graphic_eq`), anchor nav (Features, How It Works, Testimonials, Pricing, FAQ), theme toggle control, and a "Get Started" CTA. Collapses to a hamburger (`menu` icon) slide-down panel on mobile.
2. **Hero:** Two-column flex layout (stacks on mobile). Left: uppercase kicker, oversized H1, subheadline, dual CTA (primary "Start Free" + ghost "Explore Features"), one-line trust statement. Right: a `.music-player-flat` mockup containing `.album-art-flat` (CSS-composed geometric flat art — solid shapes only, no photos), track title/artist, progress bar, transport controls (prev / `.control-icon-simple` play-pause / next), and an animated CSS equalizer.
3. **Features — 3 cards:** Suggested topics: Adaptive Discovery (personalized mixes), Music-Reactive Interface (colors respond to the track), Seamless Everywhere (cross-device playback). Each card: flat colored icon tile, H3, concise copy.
4. **How It Works — 3 steps:** Oversized Swiss numerals (01 / 02 / 03), title, copy per step.
5. **Testimonials:** 3 cards with real-sounding quotes, flat colored initial avatars (no photos), name, and role.
6. **Pricing — 3 tiers:** Free ($0), Premium ($9.99/mo, **featured**: solid `--primary` fill, white text, "Most Popular" badge), Family ($14.99/mo). Feature lists with Material check icons; one CTA per tier.
7. **FAQ:** Accessible accordion with 5–6 real questions (free tier limits, offline mode, cancellation, devices, student plans).
8. **Final CTA:** Full-bleed flat Deep Purple color block: H2, supporting copy, email capture form or prominent CTA button.
9. **Footer:** Brand + one-liner, 3–4 secondary link columns (Product, Company, Support, Legal), social icons (Material Symbols), dynamic copyright year.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** The `style="..."` attribute is **forbidden** anywhere in the HTML.
- **Class/ID Selectors Only:** Every design property, layout rule, and state must live in `style.css` and be targeted via class or ID selectors.
- **Minimal HTML Modifications:** HTML must remain clean, semantic (`header`, `nav`, `main`, `section`, `footer`, `h1–h3` hierarchy), and visually agnostic — retheming the site must require editing only `style.css`.

### 1.2 CSS Variables & Theme Tokens
Store **all** visual tokens in `:root` (Dark theme = default) and override for Light via a `.light` class and `@media (prefers-color-scheme: light)`:

```css
:root {
  /* Color tokens — Dark (DEFAULT) */
  --primary: #6A0DAD;        /* Deep Purple — use as FILL with white text; never as text color on dark backgrounds (fails contrast) */
  --secondary: #00BFFF;      /* Sky Blue — accent text on dark OK; as a fill, pair with #1A1A1A text, never white */
  --accent-lime: #32CD32;    /* Lime Green — success + accent; as a fill, pair with #1A1A1A text */
  --accent-orange: #FF8C00;  /* Vibrant Orange — accent, sparingly */
  --accent-pink: #FF00CC;    /* Shock Pink — accent, sparingly */
  --bg-primary: #1A1A1A;
  --bg-secondary: #333333;
  --bg-surface: #242424;     /* flat surface between the two */
  --text-primary: #FFFFFF;
  --text-secondary: #B3B3B3;
  --text-success: #32CD32;
  --text-error: #FF4D4D;     /* derived accessible error red (palette lacks a true red) */
  --border-default: #333333;
  --border-error: #FF4D4D;
  --border-success: #32CD32;

  /* Shape, depth, motion */
  --radius-sm: 0px;          /* Swiss flat: crisp edges */
  --radius-md: 4px;
  --radius-lg: 8px;
  --shadow-sm: none;         /* flat design exception — see below */
  --shadow-md: none;
  --spacing-gap: 1.5rem;
  --transition-fast: 0.15s ease-in-out;
  --transition-normal: 0.2s ease-in-out;  /* source spec: all 0.2s ease-in-out */
  --ease-standard: ease-in-out;

  /* Elevation/stacking */
  --z-dropdown: 100;
  --z-modal: 200;
  --z-toast: 300;

  /* Type */
  --font-base: "Montserrat", sans-serif;
  --container-max: 1200px;
}
/* Light overrides: --bg-primary: #F7F5FB (lavender-tinted, NOT #ffffff); --bg-secondary: #EDE9F5;
   --bg-surface: #FEFEFE; --text-primary: #1A1A1A; --text-secondary: #333333; --border-default: #DDD6E8; */
```

- **Contrast Pairing:** Every light background token must pair with dark text tokens and every dark background token with light text tokens — enforced in **both** themes, not just the default. Never default a light background to pure white; use `#fefefe` where a near-white surface is required.
- **Flat shadow exception (explicit):** The source spec mandates `box-shadow: none`; therefore `--shadow-sm`/`--shadow-md` resolve to `none`, and elevation is achieved exclusively through solid color blocks and 1px flat separators — never blurred drop shadows.
- **Flat border exception (explicit):** The source spec mandates `border: none` on default surfaces; borders are permitted **only** for focus rings, error/success states, ghost buttons, and 1px flat separators.

### 1.3 Mandatory Dark Mode Support
- **Dark is the default theme** and must remain fully defined; the Light theme must be equally complete. Both are token-swap only — **no HTML restructuring** may be required to switch themes.
- **Theme Switching:** Provide a visible toggle in the header using Material Symbols (`dark_mode` / `light_mode`) with correct `aria-pressed` and `aria-label` ("Switch to light theme" / "Switch to dark theme").
- **Persistence:** Store the user's choice in `localStorage`; on first visit, fall back to `prefers-color-scheme` (defaulting to dark when no preference is reported).

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layout structures with **Flexbox**. Every flex container must default to `align-items: center` unless an exception is explicitly justified in a CSS comment (e.g., multi-line card content may use `flex-start`).
- **Mobile-first:** Hero, features, steps, testimonials, pricing, and footer must stack from row to column on small viewports. No horizontal scrolling at any width. Use fluid `clamp()` sizing and a `--container-max` centered wrapper with consistent Swiss grid alignment.

### 1.5 Framework Default & CSS Architecture
- Use **clean custom CSS in `style.css` organized with `@layer`** (tokens → base → layout → components → utilities). If you opt for Tailwind via CDN instead, every utility must map back to the CSS variables above, and reusable component classes (`.btn`, `.card`, `.input-group`) must still exist. Pick one approach and apply it consistently.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** Load **Montserrat** (weights 400–900) via Google Fonts `<link>` with preconnect, bound to `--font-base`. Swiss hierarchy: display headlines `clamp(2.5rem, 6vw, 4.5rem)` at weight 800 with `-0.02em` tracking; uppercase kickers at `0.75rem`, weight 700, `0.15em` letter-spacing in an accent color; body copy at `1rem–1.125rem`, line-height 1.6.
- **Icons:** Use **Google Material Symbols** exclusively. Raw inline SVGs, local icon files, and emoji are **forbidden**.
- **Reserved class names (mandatory, from source spec):** `.music-player-flat`, `.album-art-flat`, `.control-icon-simple` must exist and be used for the hero player, album art, and play/pause control respectively.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component Requirements
Style all states via CSS classes on a `.btn` base (flex: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;`, minimum touch target 44×44px):
- **Variants:** `.btn--primary` (fill `--primary`, white text), `.btn--secondary` (fill `--secondary`, `#1A1A1A` text — never white on sky blue), `.btn--ghost` (transparent, 1px `--border-default`, hover shifts border/text to `--secondary`), `.btn--danger` (fill `--text-error`, white text — visually distinct in both themes).
- **Hover:** Flat feedback — `filter: brightness(1.1)` or a solid color swap; `cursor: pointer`. No shadows.
- **Focus:** Distinct ring — `outline: 2px solid var(--secondary); outline-offset: 2px` for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** Disables interaction, prevents double-clicks, renders a CSS spinner or rotating Material Symbol without changing button dimensions.
- **Disabled:** `opacity: 0.5; filter: grayscale(1); cursor: not-allowed`.
- **Success/Error:** Temporary feedback states driven by `--text-success` / `--text-error` (used on the email-capture submit).

### 2.2 Card Component Requirements
- **Default:** Flat surface (`--bg-secondary` or `--bg-surface`), 1px `--border-default` separator, `border-radius: var(--radius-md)`, flexbox interior, no shadow.
- **Hover:** `transform: translateY(-2px)` and/or a border-color shift to `--secondary` — flat, subtle.
- **Focus-within:** Card border highlights when a child link/button receives focus.
- **Loading (Skeleton):** Define a shimmer keyframe utility for future dynamic cards so layout never jumps.
- **Empty State:** Define a fallback pattern (Material Icon + short guidance text) for reuse.
- **Concrete cards:** `.feature-card` (flat accent-colored icon tile), `.step-card` (oversized numeral in `--secondary`, weight 900), `.testimonial-card` (flat initial avatar circle), `.pricing-card` with `--featured` modifier (solid `--primary` fill, white text, "Most Popular" badge in `--accent-pink` or `--accent-lime` with `#1A1A1A` text, CTA in white or sky-blue fill with dark text).

### 2.3 Form & Input Requirements
- The email capture (Final CTA or Hero) uses an `.input-group` flex container wrapping: a `<label>`, the `<input>`, and a dedicated error-feedback element with `aria-live="polite"`.
- **States to style:** empty, focused (outline ring), filled, valid (`--border-success` + check icon), invalid (`--border-error`, error text + error icon), disabled, read-only.
- `script.js` validates the email and renders success (button success state + inline confirmation inside the `aria-live` region).

### 2.4 Modal / Accordion Requirements
- **FAQ accordion (required):** `<button aria-expanded>` headers + panels, animated open/close via CSS (`grid-template-rows: 0fr → 1fr` or equivalent), `expand_more` Material Symbol rotating 180° on open, fully keyboard-operable, one-panel-open-at-a-time behavior in `script.js`.
- **Modal (spec applies if any modal is included, e.g., plan comparison):** Opening/Open/Loading/Success/Error/Closing states all animated via CSS transitions; centered flex container (`align-items: center`) with backdrop overlay; Google Icon close button; keyboard focus trapping; close via `Esc` and overlay click; `--z-modal` stacking.

---

## 3. CORE UX & MICRO-INTERACTION RULES
- **Responsive by default:** fluid sizing, no horizontal overflow at any breakpoint.
- **Smooth animations:** Every state change uses `transition: var(--transition-normal)` (0.2s ease-in-out per source spec). All motion — equalizer, transforms, color pulses — must be disabled or reduced under `prefers-reduced-motion`.
- **Music-reactive color accents (CSS-only):** An animated equalizer (4–5 bars, staggered `scaleY` keyframes) in the hero player; accent elements (equalizer bars, progress fill) cycle through `--accent-pink`, `--accent-lime`, `--accent-orange`, `--secondary`. Subtle, never seizure-inducing.
- **Play/pause micro-interaction:** `.control-icon-simple` toggles Material Symbols `play_arrow` ↔ `pause` with a smooth scale/opacity crossfade, `aria-pressed` state, and pauses the equalizer/progress animation when "paused."
- **Accessibility (a11y):** Sufficient contrast in both themes (never `#6A0DAD` as text on dark backgrounds; never white text on `#00BFFF` or `#32CD32` fills). Never rely on color alone — pair icons and text with every state. Semantic HTML5 landmarks, a skip link, correct ARIA roles/labels on the accordion, theme toggle, and mobile nav, logical focus order, full keyboard operability, and `aria-live` regions for form feedback.
- **Mandatory visual feedback:** Every click, hover, and submission triggers a visible state change.
- **Destructive actions:** `.btn--danger` must be visually distinct in both Light and Dark themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT
- **File structure:** Separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer></script>`). No JS libraries or frameworks.
- **Naming convention:** BEM (`block__element--modifier`) consistently across the entire deliverable — never mix conventions. The three reserved source-spec classes (`.music-player-flat`, `.album-art-flat`, `.control-icon-simple`) are treated as BEM blocks.
- **`script.js` scope:** theme toggle + `localStorage` persistence, FAQ accordion, play/pause state toggle, email validation + success feedback, mobile nav toggle, dynamic footer year. Nothing more.
- **Copy:** Write all user-facing copy in **English** — real brand voice, real feature names, real testimonial personas, real pricing, real FAQ answers. Lorem ipsum and unrequested placeholders are prohibited.
- **Output:** Deliver the complete, finished code for all three files in one response, on the first attempt.
