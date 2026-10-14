# SYSTEM PROMPT — CODING AGENT TASK: "THE OBSERVATORY" LANDING PAGE (COMPLETE BUILD, FIRST ATTEMPT)

**Your Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-grade landing page described below in a single response. Follow every rule in this document literally. Where copy is not supplied, author polished, realistic English copy that fits the theme — never lorem ipsum.

---

## 0. PROJECT BRIEF — "THE OBSERVATORY"

**Theme:** Space/Cosmic landing page, 2020s contemporary. A precision-instrument aesthetic: glass panels floating over a cosmic sky, star-chart line work, soft neumorphic controls, coral accents.

**Keyword → Visual Translation (enforce all):**
* **observatory / chart** → orbital ring motifs, constellation-line decorations, star-chart dial graphics — all built in pure CSS (gradients, borders, pseudo-elements).
* **star / space / cosmic** → layered starfield backgrounds with twinkling keyframes; nebula gradient washes.
* **animated** → twinkle, drift, float, and orbit keyframes; scroll-reveal entrances; hover micro-interactions.
* **glass / translucent / blur** → `backdrop-filter: blur()` glass panels for header, cards, and modal, with `@supports` fallbacks.
* **gradient** → gradient text accents, gradient borders on key panels, gradient nebula background blobs.
* **neumorphism** → soft dual-shadow extruded surfaces (icon tiles, step badges, toggle, inputs) adapted per theme.

**Light/Dark:** Light mode is the **default** presentation. Dark mode is **mandatory and fully complete** — the "deep space" expression of the same design. Both modes are token-driven and switchable without touching HTML.

**Copy Locale:** All user-facing copy must be written in **English**.

**Sections (build in this exact order):** Sticky Header → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ (accordion) → Final CTA → Footer with secondary links. Do not add sections beyond this list.

### 0.1 Mandatory Color Token Map (Light = default / Dark = secondary)

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--primary` | `#ff6a5a` | `#ff6a5a` | Accent fills, rings, icons, large UI |
| `--secondary` | `#c95a4e` | `#c95a4e` | Secondary accent, rating icons |
| `--primary-contrast` | `#020308` | `#020308` | Text on coral fills (never white on coral) |
| `--bg-primary` | `#dfe6f5` | `#020308` | Page background |
| `--bg-secondary` | `#c9d2e8` | `#0a0d18` | Alternate section bands |
| `--text-primary` | `#0a0d18` | `#dfe6f5` | Headings, body |
| `--text-secondary` | `#4a5473` | `#c9d2e8` | Muted copy |
| `--text-accent` | `#a63d33` | `#ff6a5a` | Accent-colored *text* only |
| `--text-success` | `#0c6b42` | `#4ade80` | Success feedback |
| `--text-error` | `#b3261e` | `#ff8a80` | Error feedback |
| `--border-default` | `rgba(10,13,24,0.12)` | `rgba(201,210,232,0.14)` | Card/input borders |
| `--border-success` | `#0c6b42` | `#4ade80` | Valid input borders |
| `--border-error` | `#b3261e` | `#ff8a80` | Invalid input borders |
| `--focus-ring` | `#a63d33` | `#ff6a5a` | `:focus-visible` rings (≥3:1 non-text contrast) |
| `--glass-bg` | `rgba(254,254,254,0.42)` | `rgba(10,13,24,0.48)` | Glass panel fill |
| `--glass-border` | `rgba(255,255,255,0.6)` | `rgba(201,210,232,0.16)` | Glass edge highlight |

**Contrast Rules (non-negotiable):**
* Every light background token pairs with a dark text token, and every dark background token pairs with a light text token, in **both** themes.
* Never use `#ffffff` as a background; any near-white surface uses `#fefefe`.
* `#ff6a5a` coral is reserved for fills, borders, icons, and large display text. Small accent-colored body text must use `--text-accent` (`#a63d33` in light mode) to pass WCAG AA.
* All text must meet WCAG AA (4.5:1) in both themes; verify every token pairing above.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. **Forbidden:** the `style="..."` attribute anywhere in HTML.
* All design properties, layout rules, and states are targeted exclusively via class/ID selectors.
* HTML must stay clean, semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`, one `h1` in the Hero, logical heading order) and agnostic of visuals — a re-theme must require CSS edits only.

**1.2 CSS Variables & Theme Tokens**
Include this exact token scaffold at the top of `style.css` (you may extend it, never rename or omit these tokens):

```css
:root {
  --font-base: 'Inter', system-ui, sans-serif;
  --font-display: 'Space Grotesk', var(--font-base);
  --radius-sm: 10px; --radius-md: 18px; --radius-lg: 28px;
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms; --transition-normal: 250ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --z-dropdown: 100; --z-modal: 1000; --z-toast: 1100;
  --glass-blur: 16px;
}
```
Plus the Light token block on `:root, :root[data-theme="light"]` and the Dark token block on `:root[data-theme="dark"]` using every value from the table in Section 0.1 (including `color-scheme: light` / `color-scheme: dark`).

**1.3 Mandatory Dark Mode Support**
* Dark tokens must be defined both under `:root[data-theme="dark"]` and, for first visit with no stored preference, mirrored under `@media (prefers-color-scheme: dark) { :root:not([data-theme]) { … } }`.
* `script.js` must run the theme logic first: read `localStorage` ("theme"); if absent, fall back to `matchMedia('(prefers-color-scheme: dark)')`; then set `document.documentElement.dataset.theme`. Every toggle writes to `localStorage`.
* A **visible toggle button** lives in the header: Google icon (`dark_mode` / `light_mode`, swapped via CSS on `[data-theme]`), `aria-pressed="true"` when dark is active, and a dynamic `aria-label` ("Switch to dark theme" / "Switch to light theme"). The button itself is a neumorphic glass circle ≥44px.
* Background, text, border, glass, and shadow variables must all flip seamlessly with zero HTML changes. Set `color-scheme` per theme so native scrollbars/form controls match.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build every layout with Flexbox. **Every flex container must declare `align-items: center` by default.** Exceptions are permitted only where stacking text requires top alignment (e.g., `.card__body`, footer link columns) and must be marked with a CSS comment `/* exception: stacked content */`.
* Mobile-first: all multi-column rows (features, steps, testimonials, pricing, footer columns, hero CTA pair) collapse to a single column on small viewports. **No horizontal scrolling at any width down to 320px** — clip decorative layers with `overflow: hidden` on their positioning context, never fixed pixel widths on content.
* Recommended breakpoints: `640px`, `820px` (nav collapses to hamburger), `1024px`.

**1.5 Styling Approach — Clean Custom CSS, Tailwind-Style Layering**
* Use vanilla CSS organized in cascade layers mirroring Tailwind's order: `@layer tokens, base, layout, components, utilities`.
* Define reusable component classes — `.btn`, `.card`, `.input-group`, `.glass`, `.container`, `.visually-hidden` — and compose sections from them. No one-off utility soup; no mixing conventions.
* `.container { width: min(100% - 3rem, 1200px); margin-inline: auto; }`.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load via `<link>` with `preconnect`: **Space Grotesk** (display/headings) and **Inter** (body), bound to `--font-display` / `--font-base`.
* All icons come from **Google Material Symbols (Rounded variant)** via the Google Fonts stylesheet, with `font-variation-settings` enabling `FILL 1` where solid icons are needed. **Raw inline SVGs and local icon files are explicitly forbidden** — including decorative graphics, avatars, and social links (use text labels or available Material icons instead).
* Decorative cosmic visuals (starfields, nebulas, orbits, constellations) must be pure CSS: radial/linear gradients, box-shadow star dots, bordered pseudo-elements. All decorative layers get `aria-hidden="true"` and `pointer-events: none`.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
Base class `.btn` with BEM modifiers: `.btn--primary` (fill `--primary`, text `--primary-contrast`), `.btn--ghost` (transparent, `--border-default` border, `--text-primary`; hover gains a glass tint), `.btn--danger` (distinct in both themes: light `#b3261e` fill with `#fefefe` text; dark `#ff8a80` fill with `#020308` text). Style every state via CSS classes:
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, `border-radius: var(--radius-md)`.
* **Hover:** brightness/shadow shift, `cursor: pointer`.
* **Focus:** visible `:focus-visible` ring using `--focus-ring` (outline + soft glow) — never remove it.
* **Active:** `transform: scale(0.97)`.
* **Loading (`.is-loading`):** `aria-busy="true"`, pointer-events disabled to prevent double-clicks, and a CSS spinner (or rotating Material icon) rendered in a fixed-size icon slot so button dimensions never change.
* **Disabled (`[disabled]`):** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
* **Success/Error (`.is-success` / `.is-error`):** temporary feedback styles driven by `--text-success` / `--text-error` + matching icons, used by the newsletter form.

**2.2 Card Component**
Reusable `.card` + `.card--glass` used by Features, Testimonials, and Pricing:
* **Default:** Flexbox column layout, `background: var(--glass-bg)`, `backdrop-filter: blur(var(--glass-blur)) saturate(1.4)` (+ `-webkit-` prefix + `@supports` solid fallback), `--border-default` or `--glass-border` border, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-md)`.
* **Hover:** `transform: translateY(-2px)` + elevated shadow; icon tile micro-rotation.
* **Focus-within:** border highlights when a child link/button receives focus.
* **Loading (skeleton):** define `.skeleton` shimmer (sweeping linear-gradient keyframe) sized to card anatomy — used inside the demo modal while it "loads".
* **Empty state:** define `.card--empty` (centered Google icon + guidance text) even if not triggered by default content.

**2.3 Form & Input Component (`.input-group`)**
Used for the footer newsletter signup. Structure: flex container wrapping a label (`.visually-hidden` when appropriate), the input, a status icon slot, a submit `.btn`, and a dedicated feedback container:

```html
<form class="input-group" novalidate>
  <label class="visually-hidden" for="newsletter-email">Email address</label>
  <input class="input" id="newsletter-email" type="email" autocomplete="email"
         placeholder="you@example.com" required aria-describedby="newsletter-feedback">
  <button class="btn btn--primary" type="submit">Subscribe</button>
  <p class="input-group__feedback" id="newsletter-feedback" role="status" aria-live="polite"></p>
</form>
```

Cover all states in CSS: **empty, focused** (ring via `--focus-ring`), **filled, valid** (`--border-success` + check icon), **invalid** (`--border-error`, error icon, error text with `--text-error`, `aria-invalid="true"` on the input), **disabled, read-only**. Validate on submit (and inline on blur); on valid submit show `.is-loading` for ~1.2s (simulated), then a success state with check icon + polite live-region confirmation. Never rely on color alone — errors pair an icon with text.

**2.4 Modal / Popup (Hero "View live demo")**
The Hero's secondary CTA opens `.modal` — a glass demo viewer:
* **States:** opening (fade + `scale(0.96→1)`, ~200ms), open, loading (`.skeleton` bars shimmer ~800ms before revealing the demo), and closing (reverse transition). Respect `prefers-reduced-motion` (no scale/transform).
* **UX:** fixed overlay with blurred backdrop (`rgba` + `backdrop-filter`), centered flex container with `align-items: center`, content in a glass panel (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`), Google icon close button (`close`, ≥44px, `--z-modal`), body scroll locked while open.
* **Behavior:** focus moves into the modal on open, Tab focus is trapped inside, close via `Esc`, overlay click, or close button; focus returns to the trigger. The demo content is a CSS-built star chart (orbital rings, twinkling dots, one orbiting planet dot keyframe).

**2.5 Accordion (FAQ)**
Each item: trigger `<button class="faq-item__trigger" aria-expanded="…" aria-controls="…">` containing the question plus a Material `expand_more` icon that rotates 180° when open, followed by a panel `<div class="faq-item__panel" role="region">`. Animate height with the `grid-template-rows: 0fr → 1fr` technique + `overflow: hidden` inner wrapper, transitioned with `var(--transition-normal)`. Fully keyboard operable; JS allows one panel open at a time and sets `aria-expanded` correctly. The rotated icon plus panel visibility communicate state — never color alone.

---

## 3. PAGE SECTION BUILD SPECIFICATION

**3.1 Global Cosmic Background System**
Fixed, full-viewport decorative layer behind all content: (a) a starfield built from multiple radial-gradient/box-shadow dot layers with staggered `twinkle` opacity keyframes; (b) two or three blurred gradient "nebula" blobs (radial gradients in coral/periwinkle tones, `filter: blur()`) drifting on slow `float` keyframes; (c) an occasional shooting-star keyframe (a thin gradient line translating diagonally, firing rarely). `pointer-events: none; aria-hidden`; `overflow-x: clip` on `body`. In light mode the sky reads as a pale dawn-blue field with visible stars; in dark mode, deep space.

**3.2 Sticky Header (`z-index: var(--z-dropdown)`)**
Glass bar (backdrop blur, glass border-bottom): logo (Material `travel_explore` icon + "The Observatory" wordmark in `--font-display`), anchor nav (Features, How It Works, Testimonials, Pricing, FAQ), theme toggle (§1.3), and a compact `.btn--primary` "Start free" linking to `#pricing`. On scroll past ~24px add `.header--scrolled` (deeper blur + shadow). Below `820px`: hamburger button (`menu` icon, `aria-expanded`/`aria-controls`) opening a glass slide-down panel — Esc closes it, focus moves into it, links close it on click.

**3.3 Hero**
Full-height section over the star chart: a large CSS orbital-ring + constellation-line decoration. Content: an eyebrow chip with a pulsing coral "live" dot ("Real-time sky data"), `h1` with one word clipped to a coral→periwinkle gradient (`background-clip: text`), supporting subhead, and a CTA pair — `.btn--primary` "Start exploring free" (`href="#pricing"`) and `.btn--ghost` "View live demo" (opens §2.4 modal). Below: two reassurance chips ("No card required · Cancel anytime"). Add a bouncing `keyboard_arrow_down` scroll cue linking to `#features`. Reveal-on-load animation (fade + rise), reduced-motion safe.

**3.4 Features — Exactly 3 Glass Cards**
Grid: 3 columns → 1 column on mobile. Each `.card--glass`: neumorphic icon tile with a Material icon (`satellite_alt` — "Live sky chart"; `notifications_active` — "Smart pass & event alerts"; `auto_awesome` — "Deep-sky catalog of 40,000+ objects"`), `h3`, one-sentence body copy, and a subtle "Learn more →" text link (anchor to `#faq`). Apply all §2.2 card states.

**3.5 How It Works — Exactly 3 Steps**
Flex row → column. Each step: neumorphic numbered badge (01/02/03) containing a Material icon (`my_location`, `satellite`, `edit_note`), `h3`, copy. Connect the steps on desktop with a gradient horizontal line (pseudo-element) that becomes a vertical line on mobile.

**3.6 Testimonials — 3 Glass Cards**
Each: Material `format_quote` icon, quote, a 5-star rating row (Material `star` icons using `--secondary` in light / `--primary` in dark, with `aria-label="Rated 5 out of 5 stars"` — never color-only), a gradient circle avatar with initials, and name + role. Author realistic personas (e.g., an astrophotographer, a high-school science teacher, an amateur astronomer).

**3.7 Pricing — Exactly 3 Tiers**
`Stargazer` (Free), `Voyager` ($9/mo, middle, `.card--popular`: coral gradient border, "Most popular" badge, slight elevation/scale), `Observatory` ($19/mo). Each card: tier name, price + period, 4–5 line feature list with Material `check` icons, and a CTA — `.btn--primary` on the popular tier, `.btn--ghost` on the others — all linking to `#cta` or `#faq`. Cards obey all §2.2 states including focus-within.

**3.8 FAQ — Accessible Accordion**
5–6 questions in a single-column glass panel (data sources, device support, offline mode, canceling, accuracy, team plans), built per §2.5. First item open by default.

**3.9 Final CTA (`id="cta"`)**
Full-width glass panel with a gradient border (padding/border-image technique) and faint constellation decoration: `h2` ("Your window to the universe is open"), one supporting line, `.btn--primary` "Start exploring free" + `.btn--ghost` "Talk to us" (`mailto:`).

**3.10 Footer with Secondary Links**
Top row (flex, wraps to column): brand block (logo, one-line tagline, newsletter `.input-group` per §2.3 with label "Get the weekly sky briefing"), then three link columns — **Product** (Features, Pricing, FAQ → real section anchors), **Company** (About, Careers, Contact), **Resources** (Sky calendar, Guides, Support) — using `href="#"` only where no destination exists. Bottom row: copyright with the current year, Privacy/Terms links, and a back-to-top `.btn--ghost` circle (`arrow_upward` icon). All footer links get a visible `:focus-visible` ring and hover state. Social icons are optional; if included, use text labels or Material icons only — no brand SVGs.

---

## 4. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid type via `clamp()`, no fixed widths, no horizontal overflow; verify at 320px.
* **Smooth animations:** every state change transitions with `var(--transition-normal)`/`--transition-fast` and `--ease-standard`. Under `@media (prefers-reduced-motion: reduce)`: kill twinkle/drift/orbit/bounce/shooting-star keyframes and transform-based reveals; keep instant opacity changes. Animate only `transform`/`opacity` (except the accordion grid-rows trick).
* **Accessibility:** AA contrast in both themes; semantic HTML5 landmarks (`header/nav/main/section[aria-labelledby]/footer`); a visually-hidden skip link to `#main`; logical DOM/focus order; full keyboard operability for toggle, menu, accordion, modal, and forms (no mouse-only interactions); `aria-live` regions for the newsletter feedback; state never communicated by color alone (icons + text everywhere); scroll-reveal must never hide content if JS fails — gate the pre-reveal hidden state behind a class that `script.js` adds to `<html>` first.
* **Mandatory visual feedback:** every hover, click, focus, and submission produces a visible state change.
* **Destructive actions:** none exist on this page, but `.btn--danger` must still be defined per §2.1 and remain distinct in both themes.
* **Anchor navigation:** `scroll-behavior: smooth` (wrapped in `prefers-reduced-motion: no-preference`) and `scroll-padding-top` matching the sticky header height.

---

## 5. DELIVERABLE & OUTPUT FORMAT

* **Files:** three separate code blocks in this order — `index.html`, `style.css`, `script.js`. `index.html` contains zero inline styles and exactly one script reference: `<script src="script.js" defer></script>`. Head includes: charset, viewport, title, meta description, `theme-color` (light + `media` dark variant), preconnects, and the Google Fonts + Material Symbols stylesheets.
* **`script.js` scope (vanilla only, no dependencies):** theme init/toggle/persistence (§1.3), mobile menu, header scrolled state, IntersectionObserver scroll-reveals, FAQ accordion, modal open/close/focus-trap/Esc/overlay-click, newsletter validation + simulated submit with loading/success/error, back-to-top smooth scroll.
* **Naming:** BEM everywhere — e.g., `.header__nav`, `.hero__title`, `.card--glass`, `.btn--primary`, `.faq-item__trigger`, `.input-group__feedback`. One convention, never mixed.
* **No unrequested placeholders:** author real on-theme English copy for all headings, body text, testimonials, tiers, and FAQ answers. `href="#"` is permitted only for genuinely unspecified link destinations.
* **Definition of done (self-verify before responding):** light mode default + complete dark mode; toggle persists across reloads; zero inline styles; every token from §0.1/§1.2 present; all button/card/form/modal/accordion states styled; full keyboard pass; both themes at AA contrast; no horizontal scroll at 320px; reduced-motion respected; no inline SVGs anywhere.
