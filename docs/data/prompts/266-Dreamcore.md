# CODING AGENT PROMPT — "DREAMCORE" LANDING PAGE (COMPLETE BUILD, FIRST ATTEMPT)

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce a complete, production-ready landing page in a single pass — no partial output, no "to be continued."

**Theme:** **Dreamcore** (oneiric core) — hazy surreal dreamlike scenes, nostalgic uncanny imagery, soft glow, impossible spaces, balanced between comforting and unsettling. Era: 2020–present internet aesthetic. Output category: Retro & Pop.

**Sections required (in this order):** Sticky Navigation, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Language:** All user-facing copy must be written in **English**.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
* **Minimal HTML Modifications:** HTML must remain clean, semantic (HTML5 landmarks: `header`, `nav`, `main`, `section`, `footer`), and agnostic of visual styling — changing the look must only require editing the CSS file.

### 1.2 CSS Variables & Theme Tokens
Adopt the Dreamcore token set below as the canonical `:root` block, then **extend it** with the mandatory semantic tokens the source spec omits: `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--z-dropdown`, `--z-modal`, `--z-toast`.

```css
/* Dreamcore — design tokens */
/* 2020–present | Surreal dream/nostalgia internet aesthetic */
:root {
  /* color */
  --color-bg: #f3e9f7;
  --color-surface: #fdf6ff;
  --color-surface-strong: #ecd9f2;
  --color-border: #d9b8e8;
  --color-text: #3a1f4d;
  --color-text-muted: #6d4a80;
  --color-primary: #c04fd6;
  --color-accent: #f4c96b;
  --color-glow: #ffe9a8;
  /* radius */
  --radius-sm: 10px; --radius-md: 18px; --radius-lg: 28px; --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 10px rgba(150, 70, 170, 0.14);
  --shadow-md: 0 8px 28px rgba(150, 70, 170, 0.20);
  --shadow-lg: 0 20px 50px rgba(150, 70, 170, 0.26);
  --shadow-glow: 0 0 32px rgba(255, 233, 168, 0.55);
  /* font */
  --font-sans: 'Quicksand', 'Comic Neue', system-ui, sans-serif;
  --font-display: 'Cormorant Garamond', 'Playfair Display', serif;
  /* text scale, spacing, ease — as provided */
  /* signature: hazy nostalgic glow halo behind surfaces + soft radial mist bg */
  --bg-mist: radial-gradient(60% 50% at 20% 0%, #ffe9a8 0%, transparent 60%),
             radial-gradient(70% 60% at 90% 100%, #b8dfff 0%, transparent 55%),
             var(--color-bg);
  --glow-ring: 0 0 0 6px rgba(255, 233, 168, 0.35);
}
```

* **Contrast Pairing:** Every light background token must pair with a dark text token and every dark background token with a light text token — enforce this in **every** theme, not just the default.
* **Light Mode Background:** Never pure white. The mist base `#f3e9f7` is the page background; if a near-white is needed, use `#fefefe`, never `#ffffff`.
* **Radius & Shadows:** Use the provided `--radius-*`, `--shadow-*`, `--shadow-glow`, and `--glow-ring` tokens consistently.
* **Spacing & Transitions:** Use the provided `--space-*` scale; define `--transition-fast: 150ms` and `--transition-normal: 300ms`, both paired with `--ease-standard: cubic-bezier(0.2, 0, 0, 1)`.
* **Elevation/Stacking:** Define `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300` so layered components never collide.

### 1.3 Mandatory Dark Mode Support ("Night Dream" Mode)
The source spec declares light mode only — you **must** design and ship a dark mode and validate both before publishing.

* **Palette Derivation:** Create a "night dream" palette: deep indigo-violet backgrounds, moonlit lavender surfaces, pale lilac text. Brighten `--color-primary` for AA contrast on dark surfaces; retain `--color-accent` and `--color-glow` as dream-light sources; retune `--bg-mist` to moonlit tones (glow becomes moonlight). All values must pass WCAG AA contrast.
* **Implementation:** Provide dark tokens under **both** `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`. Background and text variables must switch seamlessly with zero HTML restructuring.
* **Persistence:** Store the user's choice in `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle in the nav with correct `aria-pressed` and `aria-label` ("Switch to dark mode" / "Switch to light mode") and a Google Material icon.
* **Validation Gate:** Verify both modes visually and for contrast before declaring the build complete.

### 1.4 Flexbox Layout & Mobile-First Alignment
* Build all layout structures with Flexbox. Every flex container **must default to `align-items: center`** unless an exception is justified in a CSS comment.
* Mobile-first: single column on small screens, wrapping to multi-column at ≥768px. Zero horizontal scrolling at any viewport ≥320px.

### 1.5 Class System & Framework
* The provided Dreamcore component classes (`.nav`, `.btn`, `.btn--primary`, `.card`, `.input`, `.badge`) are the **canonical design system** — start from the provided base component CSS and extend it. Use clean custom CSS with the BEM-lite convention already established (`block`, `block--modifier`, `block__element`).
* If you use Tailwind, utilities must be composed via `@layer` / `@apply` into these same class names. **Never mix conventions** — one naming system across the entire deliverable.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text:** Google Fonts — Quicksand (base), Cormorant Garamond (display; use italic for oneiric headlines), with Comic Neue / Playfair Display as declared fallbacks. Load via `<link>` with `preconnect`; bind to `--font-sans` and `--font-display`.
* **Icons:** Google Material Symbols (Rounded style suits the theme). **Inline SVGs, local icon files, and emoji-as-icons are forbidden.**

---

## 2. DREAMCORE VISUAL DIRECTION (SIGNATURE LOOK)

* **Signature Move:** A soft nostalgic glow halo — radial mist background plus diffuse glow shadow (`--shadow-glow` / `--glow-ring`) — wraps the nav, cards, and primary buttons, evoking hazy, uncanny dream light that sits between comforting and unsettling.
* **Mist Background:** `body` uses `--bg-mist` with `background-attachment: fixed` (warm glow top-left, cool blue bottom-right). Retune the mist for dark mode per 1.3.
* **Impossible Spaces:** Layered depth — floating CSS glow orbs in the hero, gently overlapping or offset elements, oversized display type. Nothing should feel rigidly grid-locked.
* **Nostalgic Uncanny:** Pill shapes, soft blurred edges, slightly unexpected scale shifts. Keep it gentle — a whisper of unease, never horror.
* **Soft Glow:** Subtle `text-shadow` halos on display headings only (never at the cost of AA contrast); `--glow-ring` focus states; `--shadow-glow` on interactive surfaces.
* **Imagery:** Build atmosphere primarily with CSS gradients and mist. If photos are used (hero visual, testimonial avatars), use picsum placeholders treated with a hazy duotone/blur overlay so they read as dream fragments. Decorative images get `alt=""`.
* **Motion Mood:** Slow, drifting transitions (`var(--transition-normal)` or slower); gentle floating idle animations; everything disabled under `prefers-reduced-motion`.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

### 3.1 Buttons (`.btn`, `.btn--primary`, `.btn--ghost`)
* **Default:** Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`); minimum touch target 44×44px; pill radius.
* **Hover:** `--shadow-md` + `--glow-ring`, `translateY(-1px)`, `cursor: pointer`.
* **Focus:** `.btn:focus-visible` — `outline: 2px solid var(--color-primary); outline-offset: 3px` for keyboard navigation.
* **Active/Pressed:** Extend the provided base CSS — pressed state must render `transform: scale(0.97)`.
* **Loading:** `.btn--loading` (or `[data-loading]`) — disables pointer events, prevents double submission, renders a CSS border-spinner or animated Material icon **without changing button dimensions**.
* **Disabled:** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`.
* **Success/Error:** Transient `.btn--success` / `.btn--error` styles driven by `--text-success` / `--text-error`, announced via `aria-live`.

### 3.2 Cards (`.card`)
* **Default:** Flexible flexbox layout, `--color-surface` background, `1px solid var(--color-border)`, `--radius-lg`, `--shadow-md` + `--shadow-glow`.
* **Hover (interactive cards):** `translateY(-2px)` + `--shadow-lg` + intensified glow.
* **Focus-within:** Border color shifts to `--color-primary` when a child link/button receives focus.
* **Loading (Skeleton):** `.card--skeleton` shimmer animation (CSS gradient sweep) with stable dimensions — no layout jump.
* **Empty State:** `.card--empty` fallback layout with a Material icon and clear guidance text.

### 3.3 Forms & Inputs (`.input`)
* **States:** Empty, Focused (`--color-primary` border + `--glow-ring`), Filled, Valid (`--border-success` + check icon), Invalid (`--border-error`, error text in `--text-error`, error icon), Disabled, Read-only.
* **Structure:** Flex `.input-group` wrapping a `<label>`, the input, and a dedicated error feedback container. Errors link via `aria-describedby`; the error container is an `aria-live="polite"` region.
* **Submit Flow:** Button enters loading → success; confirmation renders inline plus a toast; no page reload.

### 3.4 FAQ Accordion
* Each item: `<button aria-expanded aria-controls>` trigger + panel region; Material `expand_more` icon rotating 180° on open; smooth CSS height transition (e.g., `grid-template-rows: 0fr → 1fr`); fully keyboard operable; choose single-open or multi-open and be consistent.
* **If any true modal is added** (e.g., plan details): animate open/close via CSS, backdrop overlay, Material icon close button, keyboard focus trapping, close on `Esc` and overlay click, layered at `--z-modal`.

### 3.5 Toasts
* Form success/error feedback appears at `--z-toast`; `role="status"` / `aria-live`; auto-dismiss with an accessible close control; styled with card tokens.

### 3.6 Navigation (`.nav`)
* Sticky pill nav: logo (Material icon + wordmark), anchor links, theme toggle (per 1.3), primary CTA.
* **Mobile:** Hamburger (Material icon) reveals a dropdown menu at `--z-dropdown`; `aria-expanded`, `Esc` closes, focus managed — no mouse-only interactions.
* Anchor links smooth-scroll; sections get `scroll-margin-top` so the sticky nav never covers headings.

---

## 4. SECTION-BY-SECTION REQUIREMENTS

### 4.1 Hero
* Full-bleed mist scene with floating CSS glow orbs (`aria-hidden`, `pointer-events: none`).
* `.badge` pill above the headline; `<h1>` in Cormorant Garamond italic at display scale (fluid `clamp()` from mobile to `--text-5xl`); oneiric but comprehensible value copy; subhead in Quicksand (`--text-lg`, `--color-text-muted`).
* Two CTAs: `.btn--primary` + `.btn` ghost secondary, both ≥44px, wired to scroll targets (pricing / final CTA).
* Optional picsum visual inside a `.card` with haze overlay.

### 4.2 Features — 3 Cards
* Flex grid: 1 column mobile → 3 columns ≥768px.
* Each `.card`: glow icon chip (Material icon in a circular chip or `.badge`), title (`--text-xl`), description (`--text-base`, muted). Real English copy — no lorem ipsum.
* Hover lift + glow; focus-within border highlight.

### 4.3 How It Works — 3 Steps
* Numbered 01 / 02 / 03 in the display font; a connecting dotted "dream-thread" line via CSS (hidden or vertical on mobile).
* Each step: Material icon, short title, 1–2 sentence description. Vertical stack on mobile, horizontal ≥768px.

### 4.4 Testimonials
* 3 quote `.card`s: quote in italic Cormorant Garamond, avatar (picsum circle or Material icon initial), name + role, 5 Material star icons (rating conveyed via `aria-label`, never color alone).
* Static flex grid (accessible by default); define `.card--skeleton` shimmer classes for future async use.

### 4.5 Pricing — 3 Tiers
* 3 `.card`s: tier name, price (`--text-3xl` display font with `/month` caption), feature list with Material check icons, CTA button.
* Featured middle tier: `.card--featured` — elevated shadow, glow ring, `.badge` "Most Dreamed Of", `.btn--primary`; other tiers use `.btn`. The featured tier must be visually distinct in **both** light and dark modes.

### 4.6 FAQ
* 5–6 real English Q&As about the product; accordion per 3.4.

### 4.7 Final CTA
* Full-width band with intensified mist + glow; display headline; email `.input-group` + `.btn--primary` submit per 3.3; inline success confirmation + toast; `aria-live` announcements.

### 4.8 Footer
* Secondary links: About, Dream Journal, Privacy, Terms, Contact + social icons (Material, each with `aria-label`).
* Muted text (`--color-text-muted`) that still passes AA in both modes; copyright line; optional back-to-top link.

---

## 5. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** Fluid sizing via `clamp()`; breakpoints without horizontal overflow at any width ≥320px.
* **Smooth Animations:** `transition: var(--transition-normal) var(--ease-standard)` on all state changes; scroll-reveal animations allowed only if content is fully visible without JS and fully disabled under `prefers-reduced-motion`.
* **Accessibility (a11y):** WCAG AA contrast in light AND dark; never rely on color alone to communicate state; semantic HTML5 with a strict `h1 → h3` hierarchy; correct ARIA roles/labels on custom widgets; logical DOM/focus order; full keyboard operability; skip-to-content link; `aria-live` regions for all dynamic feedback.
* **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
* **Destructive/Distinct Actions:** Any danger-style action must be visually distinct and legible in both themes (define the tokens even if unused on this page).

---

## 6. DELIVERABLE & OUTPUT FORMAT

* **File Structure:** Separate `index.html`, `style.css`, and `script.js`. A single deferred `<script src="script.js" defer>` entry point; no inline `<script>` blocks; no `style=""` attributes anywhere.
* **Naming Convention:** One BEM-lite system throughout (`.block`, `.block--modifier`, `.block__element`), matching the provided Dreamcore classes.
* **Copy:** All user-facing copy in English, thematically Dreamcore (hazy, nostalgic, gently uncanny) yet clear and conversion-focused. No lorem-ipsum-only sections; picsum placeholders only for genuinely unspecified imagery.
* **Fonts/Icons:** Google Fonts + Google Material Symbols via CDN links.
* **Validation Gate (before declaring complete):** zero inline styles; dark mode works via toggle AND system preference and persists across reload; no horizontal scroll at 320px; full keyboard-only pass from nav through every section to footer; AA contrast verified in both modes; every interactive element has hover, focus, active, and (where applicable) loading/disabled states.
