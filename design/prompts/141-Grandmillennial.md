# CODING AGENT PROMPT — Build the "Grandmillennial" Landing Page (Single Attempt)

**Your Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce the complete, production-ready landing page code immediately, in a single attempt. Do not ask clarifying questions — where a decision is open, choose the option that best serves the theme defined below.

---

## 0. PROJECT BRIEF & ART DIRECTION

**0.1 Theme: Grandmillennial** ("granny chic" / grandmacore, 2019–present). Keywords: chintz florals, ruffles, needlepoint, scalloped edges, toile, warm traditional, ornate but cozy, nostalgic maximal comfort. Mental reference: grandmillennial interiors as featured in House Beautiful.

**0.2 Signature visual moves (mandatory, CSS-only — no image files):**
* **Scalloped bottom edges** (piecrust/doily trim) on the nav and every card, implemented with the `--scallop-edge` radial-gradient token on an `::after` pseudo-element.
* **Ditsy chintz dot pattern** printed at low opacity on card/panel surfaces via the `--ditsy-pattern` token; must be theme-aware (see §1.3).
* **Needlepoint "stitch" details:** 2px dashed borders or repeating-gradient stitch lines used as dividers and as the connector line between the three "How It Works" steps.
* **Ruffled section dividers:** layered, offset scallop gradients between major sections.
* **Ornate-but-cozy typography:** Playfair Display for display headings, Libre Franklin for body text.
* Warm maximal comfort: layered borders, gold accents, pattern-on-pattern — balanced with generous whitespace and strict readability. Elevation via the shadow tokens is part of the look.

**0.3 Brand & copy:** Invent one coherent fictional brand suited to the aesthetic (e.g., heirloom tea blends, hand-embroidery kits, or vintage-inspired home goods). **All user-facing copy must be written in English** — warm, nostalgic, personal voice ("grandma's parlor, minus the dust"). Write real copy for every heading, paragraph, button, testimonial, price tier, and FAQ answer. No lorem ipsum.

**0.4 Required sections, in this order:**
1. Sticky header/nav — brand wordmark, anchor links, theme toggle, CTA button
2. Hero — eyebrow badge, display headline, subcopy, two CTAs, CSS-only decorative chintz/toile-style vignette (layered gradients, no images)
3. Features — exactly 3 cards
4. How It Works — exactly 3 steps
5. Testimonials — 3 quote cards
6. Pricing — exactly 3 tiers, middle tier highlighted
7. FAQ — 4–6 accordion items
8. Final CTA — newsletter signup form
9. Footer — secondary link groups + copyright

**0.5 Reference note:** The source specification does not declare color modes; you must define and validate **both light and dark themes before delivering** (see §1.3 and §4.4). Include this comment at the top of `style.css`: `/* Reference specification: references/00-flagship-implementation-specs/grandmillennial.md */`

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. **Explicitly forbidden:** the `style="..."` attribute anywhere in the HTML.
* All design properties, layout rules, and states are targeted via class or ID selectors.
* HTML stays semantic and style-agnostic: changing the look must never require touching the markup.

**1.2 CSS Variables & Theme Tokens** — declare in `:root` (light = default):

```css
:root {
  /* mandatory color tokens */
  --primary: #b3435a;        /* rose chintz red */
  --secondary: #4f7a5c;      /* sage green */
  --bg-primary: #faf3e8;     /* warm cream page background */
  --bg-secondary: #fffaf1;   /* card/surface background */
  --bg-tertiary: #f5e6d3;   /* strong surface / CTA band */
  --text-primary: #3f2e22;  /* espresso brown */
  --text-secondary: #6f5a45;/* muted taupe */
  --text-success: #4f7a5c;
  --text-error: #a83232;     /* brick red, distinct from --primary */
  --border-default: #d8b892;/* antique gold-tan */
  --border-error: #a83232;
  --border-success: #4f7a5c;
  --on-primary: #fffaf1;     /* text on primary fills */
  --gold: #c8933f;           /* extra theme token */
  /* radius / shadow */
  --radius-sm: 8px; --radius-md: 16px; --radius-lg: 28px; --radius-pill: 999px;
  --shadow-sm: 0 2px 6px rgba(63,46,34,.12);
  --shadow-md: 0 8px 18px rgba(63,46,34,.16);
  --shadow-lg: 0 16px 34px rgba(63,46,34,.2);
  /* spacing / motion / stacking */
  --spacing-gap: 24px;
  --transition-fast: 150ms; --transition-normal: 250ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --z-dropdown: 100; --z-modal: 200; --z-toast: 300;
  /* fonts */
  --font-base: 'Libre Franklin', sans-serif;
  --font-display: 'Playfair Display', serif;
  /* signature patterns — must re-resolve per theme */
  --scallop-edge: radial-gradient(circle at 10px 0, transparent 9px, var(--bg-secondary) 9.5px) 0 0/20px 12px repeat-x;
  --ditsy-pattern: radial-gradient(var(--ditsy-dot-1) 1.4px, transparent 1.6px) 0 0/18px 18px,
                   radial-gradient(var(--ditsy-dot-2) 1px, transparent 1.2px) 9px 9px/18px 18px;
  --ditsy-dot-1: rgba(179,67,90,.18);
  --ditsy-dot-2: rgba(79,122,92,.16);
}
```

* Also define the reference type scale (`--text-xs` … `--text-5xl`) and space scale (`--space-1` … `--space-24`) and use them for all sizing.
* **Contrast pairing:** every light background token pairs with a dark text token, and every dark background token pairs with a light text token — enforced in both themes.
* **Never pure white:** the cream tokens above are the light backgrounds; if a near-white is ever required, use `#fefefe`, never `#ffffff`.
* No hardcoded hex/px duplicates of token values inside component rules — consume tokens via `var(...)`.

**1.3 Mandatory Dark Mode**
* Provide dark tokens under a `.dark` class **and** an `@media (prefers-color-scheme: dark)` fallback for first visits. Suggested palette (verify AA contrast; adjust if a pair fails):

```css
.dark {
  --primary: #d4627a; --secondary: #93b39c;
  --bg-primary: #2a211a; --bg-secondary: #342a20; --bg-tertiary: #403426;
  --text-primary: #f2e6d5; --text-secondary: #cdb69c;
  --text-success: #93b39c; --text-error: #e89191;
  --border-default: #7d664e; --border-error: #e89191; --border-success: #93b39c;
  --on-primary: #2a211a; --gold: #d9a959;
  --ditsy-dot-1: rgba(212,98,122,.22); --ditsy-dot-2: rgba(147,179,156,.18);
}
```

* Background/text variables must switch seamlessly with **no HTML restructuring**. Buttons filled with `--primary` use `--on-primary` text and must hit 4.5:1 in both themes.
* The scallop edge and ditsy pattern must re-resolve from variables so they render correctly in dark mode — never bake light hex values into pattern gradients. Set `color-scheme` correctly per theme.
* **Persistence & toggle:** visible toggle in the nav (Material Symbols `light_mode` / `dark_mode`), correct `aria-pressed` and a descriptive `aria-label` that updates with state; persist choice in `localStorage`, fall back to `prefers-color-scheme` on first visit; apply in `script.js` on load; switching themes must not shift layout.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox. Every flex container **defaults to `align-items: center`** unless an exception is explicitly justified in a CSS comment (e.g., `align-items: stretch` for equal-height pricing cards).
* Mobile-first: base styles target small screens; scale up with `min-width` media queries (e.g., 768px, 1024px). Multi-column rows (features, steps, testimonials, pricing) collapse to one column on small screens.
* No horizontal scrolling at any viewport from 320px up; use fluid type via `clamp()` where helpful.

**1.5 Styling Approach: Clean Custom CSS**
* Use hand-written custom CSS (no Tailwind build, no frameworks) — the reference specification supplies a custom component class system, which counts as the requested approach. All styles map to reusable semantic classes (`.btn`, `.card`, `.input-group`, `.badge`, `.nav`) driven exclusively by the §1.2 tokens. Do not invent one-off utility classes; do not mix naming conventions.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load via Google Fonts `<link>` tags (with `preconnect`): **Playfair Display** (400/700 + italic) bound to `--font-display`, and **Libre Franklin** (300–700) bound to `--font-base`.
* Icons: **Google Material Symbols Rounded** via `<span class="material-symbols-rounded" aria-hidden="true">icon_name</span>`. **Explicitly forbidden:** raw inline SVGs, local icon files, emoji used as icons.
* Suggested icons: `local_florist`, `favorite`, `chair`, `emoji_food_beverage`, `content_cut`, `check`, `star`, `arrow_forward`, `menu`, `close`, `expand_more`, `light_mode`, `dark_mode`, `progress_activity`, `error`, `person`.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button (`.btn`; variants `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.btn--danger`)**
* **Default:** `display:flex; align-items:center; justify-content:center; gap:.5rem;` minimum 44×44px touch target, pill radius, 2px border, transitions on transform/box-shadow using the motion tokens.
* **Hover:** lift `translateY(-1px)` + `--shadow-md`, `cursor: pointer`.
* **Focus:** distinct `:focus-visible` ring (`outline: 2px solid var(--secondary); outline-offset: 2px`) for keyboard navigation.
* **Active/pressed:** `transform: scale(0.97)` click feedback.
* **Loading (`.btn--loading`):** `aria-busy="true"`, interactions disabled to prevent double-clicks, CSS-animated spinner (rotating `progress_activity` symbol or border spinner) that does not distort button dimensions.
* **Disabled:** `opacity: .5`, greyscale filter, `cursor: not-allowed`, hover/active transforms removed.
* **Success/Error (`.btn--success`, `.btn--error`):** temporary feedback states driven by `--text-success` / `--text-error` (used by the newsletter submit flow).
* `.btn--primary`: fill `--primary`, text `--on-primary`. `.btn--danger` must be visually distinct in **both** themes. All states are class-driven — never mutate styles via JS.

**2.2 Card (`.card`)**
* **Default:** `background: var(--ditsy-pattern), var(--bg-secondary);` 2px `--border-default` border, `--radius-lg`, `--shadow-md`, generous padding, and the signature scalloped bottom edge via `::after` with `--scallop-edge` (per the reference spec).
* **Hover (interactive cards only):** `translateY(-2px)` + `--shadow-lg`.
* **Focus-within:** border shifts to `--primary` or `--gold` when a child link/button receives focus.
* **Skeleton (`.card--skeleton`):** CSS shimmer animation reserving final dimensions to prevent layout jumps (define it even if unused on first paint).
* **Empty state (`.card--empty`):** fallback layout with a Material Symbol and clear guidance text.
* **Badge (`.badge`):** gold pill (`--gold` background, dark text, `--radius-pill`, bold small text) used for the hero eyebrow and the "Most Popular" pricing tag.
* Used for Features (3), Testimonials (3), Pricing (3). The featured pricing tier gets `.card--featured`: gold badge, stronger shadow, distinct treatment visible in both themes.

**2.3 Form & Input (`.input-group`)**
* **Structure:** flex-column wrapper containing a `<label for>`, the `<input class="input">`, and a dedicated feedback element (`<p class="input-group__error" role="alert">` inside an `aria-live="polite"` region).
* **States, all via classes:** empty; focused (`border-color: var(--primary)` + 3px primary ring at ~20% alpha — re-derived from tokens so it works in dark mode); filled; valid (`.input--valid`: `--border-success` + `check` icon); invalid (`.input--invalid`: `--border-error`, message in `--text-error`, `error` icon); disabled; read-only.
* **Newsletter form (Final CTA):** validate email format in `script.js`; on submit the button enters loading → success (check icon + "You're on the list" announced via `aria-live`) or error (inline message; never a browser `alert()`); the page never reloads.

**2.4 Overlays (conditional)**
* This landing page requires **no modal** — the FAQ uses accordions (§2.5). If you introduce any overlay (e.g., a mobile menu drawer), it must: sit in a flex container using `align-items: center` (or docked with justified exception), dim the page with a backdrop, close via `Esc` and overlay click, trap keyboard focus, offer a Material Symbols `close` button, and animate open/close via CSS transitions on transform/opacity only.
* Respect stacking: dropdown panels use `--z-dropdown`, overlays `--z-modal`, transient toasts `--z-toast`.

**2.5 Accordion (FAQ)**
* Each item: `<button class="faq-item__trigger" aria-expanded="false" aria-controls="...">` holding the question and an `expand_more` icon that rotates 180° when open; panel with `role="region"` and `aria-labelledby`, expanding via a smooth CSS height transition (grid-rows or max-height technique).
* `aria-expanded` always reflects reality; fully keyboard operable; visible focus ring on triggers.

**2.6 Navigation**
* Sticky nav: `--bg-secondary` background, 3px `--border-default` bottom border, scallop edge hanging below via `::after` (per reference spec), brand wordmark in `--font-display`.
* Desktop: anchor links (Features, How It Works, Testimonials, Pricing, FAQ) + theme toggle + primary CTA scrolling to `#pricing`.
* Mobile (<768px): links collapse behind a `menu` icon button (`aria-expanded`, `aria-controls`); the panel expands below the nav at `--z-dropdown`, is keyboard reachable, closable with `Esc`, and all targets remain ≥44×44px.
* Anchor scrolling: `scroll-behavior: smooth` (disabled under reduced motion) plus `scroll-margin-top` on sections so the sticky nav never covers headings.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid sizing, zero overflow, verify 320px → 1440px.
* **Smooth animations:** every state change transitions with `var(--transition-normal)` / `var(--transition-fast)`; under `prefers-reduced-motion: reduce`, remove transforms, lifts, shimmer, and smooth scroll — keep instant state changes only.
* **Accessibility (a11y):** WCAG AA contrast in both light and dark modes; never rely on color alone (invalid inputs pair color with icon + message; testimonial star ratings include a visually hidden "Rated 5 out of 5" text); semantic HTML5 landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`); exactly one `h1`; logical DOM/focus order; full keyboard operability with no mouse-only interactions; `aria-live` regions for dynamic form feedback; decorative icons `aria-hidden="true"`; include a "Skip to content" link.
* **Mandatory visual feedback:** every click, hover, focus, and submission triggers a visible state change.
* **Destructive actions:** any destructive control uses `.btn--danger`, visually distinct in both themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

**4.1 Files:** separate `index.html`, `style.css`, `script.js`. The only script reference is a single `<script src="script.js" defer></script>`. No inline `<style>` or `<script>` blocks.

**4.2 Naming convention:** BEM (`block__element--modifier`) everywhere, consistent with the reference classes (`.btn--primary`, `.card`, `.nav`). Never mix conventions. Base element resets (`body`, box-sizing) are the only bare-selector styles allowed.

**4.3 Content:** real, on-theme English copy for every string (§0.3). Placeholder `href="#"` is permitted only for footer/legal links with no real destination. No lorem ipsum.

**4.4 Pre-publication validation (required — the source spec demands light + dark verification):** before delivering, self-check and fix: (a) both themes pass AA contrast for all text and icon pairs; (b) scallop edges and ditsy patterns render correctly in dark mode; (c) keyboard-only pass over nav, theme toggle, accordions, and the newsletter form; (d) reduced-motion pass; (e) no horizontal scroll at 320px; (f) theme choice persists across reload. Deliver the final code only after all checks pass.
