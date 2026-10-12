# WILDLINE Landing Page — Build Specification for Coding AI

**ROLE & OBJECTIVE:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready **WILDLINE** landing page — **Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, and Footer with secondary links**, plus a sticky glass header — **in a single response, on the first attempt**. Every rule below is mandatory. Do not ask clarifying questions; make expert decisions and deliver finished code.

**PROJECT BRIEF:**
- **Concept:** WILDLINE — *"a savanna that draws itself."* Position it as a generative vector-art experience: the user picks a horizon, and a savanna scene — sun, grass, wildlife outlines — sketches itself into being, line by line, ready to frame and export.
- **Style:** Glassmorphism fused with an organic savanna/vector aesthetic. **Era:** 2020s Digital. **Keywords:** vector, safari, glass, translucent, blur.
- **Signature motion:** elements "draw" themselves into place (staggered reveals, growing lines, rising grass) — built purely with CSS.
- **Core palette:** `#f2e8d4` (sun-bleached sand), `#4a3a28` (deep cocoa), `#5a4a32` (bark brown), `#a08c6a` (dry grass), `#6a5a44` (acacia), `#c9b896` (parchment tan).
- **Presentation:** Light mode is the default and primary presentation.
- **Copy:** Write all user-facing copy in **English** — original, on-theme, concise. **No lorem ipsum anywhere.** Suggested direction (refine freely, stay coherent): Features — *Self-Drawing Vectors, Glass Layering, Living Scenes*; Steps — *1. Choose your horizon → 2. Watch it draw → 3. Frame & export*; Pricing tiers — *Wanderer (free), Explorer (most popular), Cartographer (pro)* with realistic prices; Testimonials — fictional designers with names/roles; FAQ — 5–6 real Q&As.

---

## 1. STRICT RULES & ARCHITECTURE

### **1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **The `style="..."` attribute is forbidden** anywhere in the HTML.
- Target every design property, layout rule, and state via class or ID selectors only.
- Keep HTML semantic and style-agnostic: re-theming the page must require editing `style.css` only.
- Decorative nodes (grass blades, clouds, glows) may exist in HTML but must be minimal, carry `aria-hidden="true"`, and hold no styling attributes.

### **1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` (light default), overridden under `.dark`. Required mapping:

```css
:root {
  --primary: #4a3a28;        /* primary actions, headings */
  --secondary: #6a5a44;      /* icons, secondary accents */
  --accent: #a08c6a;         /* decorative strokes, borders, icon fills — NEVER body text */
  --bg-primary: #f2e8d4;     /* page background — not pure white */
  --bg-secondary: #c9b896;   /* solid elevated surfaces */
  --text-primary: #4a3a28;
  --text-secondary: #5a4a32;
  --text-success: #2f6b45;
  --text-error: #a23e2a;
  --border-default: rgba(90, 74, 50, 0.18);
  --border-success: rgba(47, 107, 69, 0.5);
  --border-error: rgba(162, 62, 42, 0.5);
  --glass-bg: rgba(242, 232, 212, 0.55);
  --glass-border: rgba(255, 255, 255, 0.45);
  --glass-blur: 16px;
  --font-display: "Fraunces", serif;
  --font-base: "Inter", sans-serif;
  --radius-sm: 8px; --radius-md: 14px; --radius-lg: 24px;
  --shadow-sm: 0 2px 10px rgba(74, 58, 40, 0.10);
  --shadow-md: 0 12px 32px rgba(74, 58, 40, 0.16);
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms; --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --z-dropdown: 100; --z-modal: 200; --z-toast: 300;
}
.dark {
  --primary: #c9b896; --secondary: #a08c6a; --accent: #c9b896;
  --bg-primary: #241c13; --bg-secondary: #33291d;
  --text-primary: #f2e8d4; --text-secondary: #c9b896;
  --text-success: #7ec99b; --text-error: #e8947c;
  --border-default: rgba(242, 232, 212, 0.16);
  --border-success: rgba(126, 201, 155, 0.5);
  --border-error: rgba(232, 148, 112, 0.5);
  --glass-bg: rgba(42, 33, 23, 0.55);
  --glass-border: rgba(242, 232, 212, 0.14);
}
```

- **Contrast pairing (mandatory in both modes):** light backgrounds (`#f2e8d4`, `#c9b896`, light glass) pair only with dark text (`#4a3a28`, `#5a4a32`); dark backgrounds (`#241c13`, `#33291d`, dark glass) pair only with light text (`#f2e8d4`, `#c9b896`). Pair button surfaces with the inverted text token — e.g., `.btn--primary { background: var(--primary); color: var(--bg-primary); }` — so contrast survives theme flips with no extra rules.
- `--accent` (`#a08c6a`) is decorative only — never for text conveying information.
- **Never use `#ffffff`.** If a near-white surface is unavoidable, use `#fefefe`.
- Opacity fine-tuning is allowed; token names, pairing rules, and the no-pure-white rule are not.

### **1.3 Mandatory Dark Mode Support**
- Provide dark tokens via both `@media (prefers-color-scheme: dark)` (first-visit fallback) and a `.dark` class on `<html>`.
- Persist the user's choice in `localStorage` and apply it before first paint (no flash); fall back to `prefers-color-scheme` when no stored choice exists.
- Ship a visible header toggle (sun/moon Material Symbols) with `aria-pressed` reflecting state and a dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode").
- Backgrounds, text, glass surfaces, borders, shadows, and every component state must flip via variables only — no HTML restructuring, no duplicated component CSS.
- **Exception clause:** Light mode is the theme's default and primary presentation per the brief; Dark mode remains fully mandatory and must be an equally polished warm-espresso counterpart — never a grayscale inversion.

### **1.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout structure with Flexbox.
- **Every flex container defaults to `align-items: center`** unless an exception is justified in a code comment.
- Mobile-first: multi-column rows (features, steps, testimonials, pricing, footer) collapse to a single column below 768px; **no horizontal scrolling at any width**; fluid type and spacing via `clamp()`.
- Section grids: `display: flex; flex-wrap: wrap; gap: var(--spacing-gap);`.

### **1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (build step or Play CDN) with a token/config layer — **or** hand-written custom CSS of equal discipline. Either way:
- Author all component styles in `style.css` using Tailwind's `@layer components` / `@apply` (or plain CSS), exposed as **reusable class names**: `.glass-panel`, `.btn`, `.card`, `.input-group`, `.segmented`, `.faq__item`, etc.
- Utilities may compose the internals of those classes but must not scatter raw utility strings across HTML — markup carries component-level class names only.

### **1.6 Typography & Icons (Google Fonts Mandatory)**
- Load **Google Fonts** via `<link>` with `preconnect`: **Fraunces** (display/headings; italic accents allowed) and **Inter** (body/UI). Bind them to `--font-display` and `--font-base`.
- Load **Google Material Symbols (Rounded)** once; use it for **every icon** — UI glyphs, feature icons, avatars, chevrons, social/contact glyphs.
- **Raw inline `<svg>`, local icon fonts, and icon image files are forbidden.** *Exception clause: this prohibition is absolute — including decorative scenery. Build the savanna (sun, sky, hills, grass, clouds) entirely from CSS gradients, pseudo-elements, border-radius shapes, and Material Symbols.*
- Body text ≥16px; line measure ≤70ch; headings use `--font-display` with fluid sizes.

---

## 2. COMPONENT & SECTION SPECIFICATIONS

### **2.1 Buttons**
Variants: `.btn--primary`, `.btn--glass` (frosted), `.btn--ghost`, `.btn--danger`. All states via classes:
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; `border-radius: var(--radius-md)`.
- **Hover:** brightness/shadow shift with `cursor: pointer`.
- **Focus:** distinct ring via `outline`/`box-shadow` using theme variables, visible on `:focus-visible`.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** interactions disabled (double-submit prevented); label swaps to a rotating Material Symbol (`progress_activity`) or CSS spinner — **button dimensions must not change**; set `aria-busy="true"`.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error (`.is-success` / `.is-error`):** temporary feedback tinted by `--text-success` / `--text-error`, always paired with a Material Symbol — never color alone.
- `.btn--danger` must be visually distinct in **both** themes (solid clay on light, brighter clay on espresso).

### **2.2 Cards (Glass)**
Used for Features, Testimonials, Pricing, and the reusable `.glass-panel`:
- **Default:** Flexbox layout; `background: var(--glass-bg); backdrop-filter: blur(var(--glass-blur)) saturate(140%);` (with `-webkit-` prefix); `border: 1px solid var(--glass-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);` plus an inset top-edge highlight for the glass rim.
- **Hover:** `transform: translateY(-2px)` with shadow elevation shift.
- **Focus-within:** card border highlights when a child link/button receives focus.
- **Loading:** define `.skeleton` shimmer keyframes — layout-stable, no jumps.
- **Empty state:** define `.card--empty` with a Material Symbol and clear guidance text.

### **2.3 Forms & Inputs**
Used by the Final CTA email capture:
- Structure: `.input-group` flex container wrapping a **visible `<label>`**, the `<input type="email">`, and a dedicated `.input-group__error` feedback container (`aria-live="polite"`).
- Class-driven states: **empty, focused** (outline ring), **filled, valid** (success border + check icon), **invalid** (error border, `--text-error` message, error icon — never color alone), **disabled, read-only**.
- The submit button implements **loading → success/error** per 2.1 (success example: check icon + "Welcome to the herd — check your inbox.").

### **2.4 Modal / Demo Dialog**
The Hero's "Watch it draw" button opens `.modal`:
- Centered flex overlay (`align-items: center; justify-content: center;`), blurred backdrop, glass content panel, Material Symbol close button with `aria-label`.
- **States:** opening (fade/scale-in), open, loading (spinner while the "scene loads"), content (a pure-CSS mini savanna that draws itself on loop), error fallback class, closing (fade-out). All animated via CSS transitions.
- Accessibility: `role="dialog"`, `aria-modal="true"`, labeled by its heading; **keyboard focus trapped** inside; closes on `Esc` and backdrop click; focus returns to the trigger.

### **2.5 Landing Page Section Blueprint**

**2.5.1 Sticky Glass Header:** Frosted bar (`backdrop-filter`, translucent `--glass-bg`); WILDLINE wordmark in Fraunces with a `gesture` Material Symbol; anchor nav to every section; theme toggle (1.3); primary CTA. Mobile: hamburger with `aria-expanded`/`aria-controls` toggling a glass dropdown (`--z-dropdown`); closes on link click and `Esc`. Include a "Skip to content" link.

**2.5.2 Hero:** Full-viewport CSS savanna scene — layered gradient sky (`#f2e8d4` → `#c9b896` → deeper tan), radial-gradient sun with soft glow, horizon hill silhouettes via pseudo-elements, blurred drifting clouds, and grass blades that **scale up from the horizon with staggered delays**. Content floats on a large `.glass-panel`: eyebrow pill, H1 (Fraunces) whose **underline draws itself** (animated `background-size` gradient), subcopy, primary CTA "Start drawing" plus `.btn--glass` "Watch it draw" (opens the 2.4 modal), and a scroll cue. All scenery `aria-hidden="true"`.

**2.5.3 Features — 3 glass cards:** Responsive 3→1 flex grid. Each card: frosted icon badge (Material Symbol), H3, description, hover lift per 2.2. Copy per the brief (e.g., *Self-Drawing Vectors, Glass Layering, Living Scenes*).

**2.5.4 How It Works — 3 steps:** Flex row→column; numbered glass badges (1–3); a **dashed connector that grows (`scaleX`) when scrolled into view**; per-step Material Symbol + short copy.

**2.5.5 Testimonials:** Three glass quote cards (flex grid, 3→1); `format_quote` Material Symbol, quote text, avatar as a glass circle with initials or a `person` Material Symbol, name + role.

**2.5.6 Pricing — 3 tiers:** Wanderer / Explorer / Cartographer. Middle tier marked "Most popular" via a stronger border, glass glow, and badge text (never color alone). Each card: tier name, price, tagline, feature list with `check` icons, CTA (`.btn--primary` on the popular tier, `.btn--ghost` elsewhere). Add an accessible **Monthly/Annual segmented control**: two buttons with `aria-pressed`, JS swaps prices from `data-*` attributes, an `aria-live="polite"` status announces the change; pressed state shows fill + ring.

**2.5.7 FAQ:** 5–6 native `<details class="faq__item">` / `<summary>` glass rows; chevron (`expand_more`) rotates 180° on `[open]` via CSS; smooth answer reveal; fully keyboard operable through native semantics.

**2.5.8 Final CTA:** Full-width glass panel over a deeper-toned savanna gradient band; H2, supporting line, and the email capture form from 2.3 with complete state behavior.

**2.5.9 Footer with secondary links:** Flex columns (wrap → column on mobile): brand blurb; link groups *Product / Company / Resources* (anchor to sections where applicable; `href="#"` only for genuinely non-existent pages); social/contact as Material Symbols (`mail`, `share`, `rss_feed`, `language`) with `aria-label`s; legal row (Privacy, Terms) and a dynamic copyright year.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` sizing, standard breakpoints, zero horizontal overflow; `scroll-behavior: smooth` with a `prefers-reduced-motion` override; `scroll-margin-top` on sections to offset the sticky header.
- **Smooth animations:** transition every state change with `var(--transition-normal)` / `var(--transition-fast)` and `var(--ease-standard)`; honor `prefers-reduced-motion` by disabling draw-in choreography, cloud drift, shimmer, and transforms — content must remain fully visible.
- **Scroll choreography ("the savanna draws itself"):** an IntersectionObserver in `script.js` adds `.in-view` to `.reveal` elements, triggering staggered fade/rise/line-grow transitions (delays via a custom property). **Progressive enhancement:** content is visible by default without JS — pre-hidden states activate only after JS confirms it has loaded.
- **Accessibility:** ≥4.5:1 text contrast in **both** modes — glass panels carrying body text must keep sufficient background opacity over every backdrop zone (raise opacity locally over the sun glow if needed). Never communicate state by color alone. Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), logical DOM/focus order, full keyboard operability (no mouse-only interactions), visible `:focus-visible` rings, correct ARIA on all custom widgets, `aria-live` regions for form errors, the pricing toggle, and loading feedback.
- **Mandatory visual feedback:** every click, hover, toggle, and submission produces a visible state change.
- **Glass fallbacks:** wrap `backdrop-filter` in `@supports`; unsupported browsers receive higher-opacity solid glass so text stays readable.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` — strictly separated. The only script reference is a **single `<script src="script.js" defer>`**; no inline script blocks. No inline styles anywhere.
- **Naming:** one convention throughout — **BEM** (`block__element--modifier`). Never mix conventions.
- **Copy:** real, original, on-theme English copy for every section (per the Project Brief). **No lorem ipsum, no "TODO", no unrequested placeholder content.** No external images — all visuals via CSS, typography, and Material Symbols.
- **Completeness:** deliver the entire landing page — every section, every component state, both themes, all interactions — fully working **in this single first response**. Verify mentally against every numbered rule above before outputting.
