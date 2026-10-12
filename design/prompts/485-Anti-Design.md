# CODING AGENT PROMPT — Build a Complete "Anti-Design" (Brutalist) Landing Page

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce the complete, production-ready landing page in your first response — full HTML, full CSS, full JS. No placeholders, no TODOs, no truncation.

---

## 0. PROJECT BRIEF & THEME DIRECTION

- **Theme:** Anti-Design (claude-artisan/brutalist), 2016–present. A reaction against polished "design-by-committee" minimalism.
- **Keywords:** Anti-Design, ugly design, undesign, deliberate rule-breaking, clashing type, misalignment, default/system styling embraced, rejection of visual hierarchy conventions, provocative, expressive, DIY, brutalist.
- **Visual Direction:** Balenciaga site experiments; art/fashion microsites.
- **Signature Moves (apply everywhere):** hard offset double drop-shadows in clashing colors (mis-registered print plates), slight rotation on every surface via `--tilt-a` / `--tilt-b`, 0px border radius, mixed default system fonts, dashed focus outlines, abrupt `steps(1)` transitions, exaggerated default-browser type sizes.
- **Color Palette (Light):** bg `#ffe600`, surface `#ff00ff`, surface-strong `#00ffff`, border `#000000`, text `#000000`, text-muted `#1a1a1a`, primary `#0000ff`, accent `#ff0000`.
- **Light/Dark:** The source does not declare modes; you must define, implement, and validate both light and dark before publishing (see Rule 1.3).
- **Mandatory Sections (in this order):** Sticky Nav (with theme toggle), Hero, Features (3 cards), How It Works (3 steps), Testimonials (3 quotes), Pricing (3 tiers), FAQ (5–6 items, accordion), Final CTA (email capture), Footer with secondary links.
- **Copy:** All user-facing copy in **English**. Write original, provocative, DIY-voice copy for a coherent fictional product (e.g., a "deliberately unpolished" tool/service). Lorem ipsum is forbidden.
- **Aesthetic Guardrail (non-negotiable):** The provocation lives **only in decoration** — tilts, clashing shadows, mixed type, hard borders, misregistered offsets. It must never damage usability: body text contrast ≥ 4.5:1 in both modes, interactive targets ≥ 44×44px, full keyboard operability, logical DOM/reading order. Intentional misalignment is achieved **only via `transform`** (rotate/translate) — never by breaking the flex model, document flow, or semantic order.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is **forbidden** anywhere in the HTML.
- Target everything via class/ID selectors. Keep HTML semantic and style-agnostic.
- Adopt the provided base component classes (`.nav`, `.btn`, `.card`, `.input`, `.badge`) verbatim as your foundation, then extend them with BEM modifiers (`.btn--primary`, `.card--feature`, `.faq__item`, etc.).

**1.2 CSS Variables & Theme Tokens**
Store all tokens in `:root`. Start from this block and extend it with the mandatory canonical aliases:

```css
/* Anti-Design — design tokens */
/* 2016–present | Reaction against polished 'design-by-committee' minimalism */
/* Reference specification: references/00-flagship-implementation-specs/anti-design.md */
:root {
  /* color */
  --color-bg: #ffe600;
  --color-surface: #ff00ff;
  --color-surface-strong: #00ffff;
  --color-border: #000000;
  --color-text: #000000;
  --color-text-muted: #1a1a1a;
  --color-primary: #0000ff;
  --color-accent: #ff0000;

  /* mandatory canonical aliases */
  --primary: var(--color-primary);
  --secondary: var(--color-accent);
  --bg-primary: var(--color-bg);
  --bg-secondary: var(--color-surface);
  --text-primary: var(--color-text);
  --text-secondary: var(--color-text-muted);
  --text-success: #006400;   /* must validate ≥4.5:1 on every surface it renders on */
  --text-error: #b30000;     /* decorative #ff0000 is reserved for borders/shadows/large display text only */
  --border-default: var(--color-border);
  --border-error: #b30000;
  --border-success: #006400;
  --focus-color: #0000ff;    /* redefined in dark mode — see 1.3 */

  /* radius: none, deliberately harsh defaults */
  --radius-sm: 0px; --radius-md: 0px; --radius-lg: 0px; --radius-pill: 0px;

  /* shadow: clashing double offset, mimicking mis-registered print */
  --shadow-sm: 3px 3px 0 #ff0000;
  --shadow-md: 5px 5px 0 #0000ff, -3px -3px 0 #00ffff;
  --shadow-lg: 8px 8px 0 #ff0000, -5px -5px 0 #0000ff;

  /* font: deliberately clashing default-browser choices */
  --font-sans: 'Times New Roman', Times, serif;
  --font-display: 'Comic Sans MS', 'Chalkboard SE', cursive;
  --font-mono: 'Courier New', monospace;
  --font-base: var(--font-sans);

  /* text: default browser sizes exaggerated */
  --text-xs: 0.7rem; --text-sm: 0.9rem; --text-base: 1rem; --text-lg: 1.2rem;
  --text-xl: 1.6rem; --text-2xl: 2.1rem; --text-3xl: 2.8rem;
  --text-4xl: 3.6rem; --text-5xl: 4.8rem;

  /* space */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --spacing-gap: var(--space-4);

  /* transitions: abrupt, no easing — but durations exist so state changes are perceivable */
  --transition-fast: 60ms; --transition-normal: 120ms; --ease-standard: steps(1);

  /* elevation/stacking */
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;

  /* intentional misregistration rotation */
  --tilt-a: rotate(-1.6deg);
  --tilt-b: rotate(1.1deg);
}
```

- **Contrast Pairing:** Every light background token pairs with dark text and vice versa — enforce for **both** themes, not just the default. Neon surfaces (`#ff00ff`, `#00ffff`) pair with `#000000` text (validated: 6.7:1 and ~16.7:1); the yellow bg pairs with `#000000` (~16.5:1).
- **Light Mode Background:** The theme bg is `#ffe600` — never pure white. Where a near-white surface is needed (inputs), use **`#fefefe`, not `#ffffff`** — correct the provided `.input` rule accordingly.
- **Success/Error tokens:** Body-size feedback text must pass 4.5:1 against the surface it renders on. The raw `#ff0000` accent fails 4.5:1 on `#ffe600` for body text — use the darker `--text-error` for messages and keep `#ff0000` for decorative borders/shadows/large display type. Validate every token/surface pair and document values in CSS comments.

**1.3 Mandatory Dark Mode**
- Dark Mode **must always be defined**, even though the source theme did not declare it.
- Implement token overrides under both `@media (prefers-color-scheme: dark)` (for `:root` without an explicit user class) **and** a `.dark` class on `<html>`, so variables switch with zero HTML restructuring. Set the `color-scheme` property per mode so native form controls match.
- **Suggested dark palette (validate before publishing):** `--color-bg: #1a1a1a`, `--color-text: #ffffff`, `--color-text-muted: #d9d9d9`, `--color-border: #fefefe` (black borders would vanish on a dark page — borders on neon surfaces may stay `#000000` where contrast validates), `--focus-color: #ffff00`, `--text-success: #00ff00`, `--text-error: #ff4d4d`. Neon surfaces keep their `#000000` text pairing in both modes.
- **Persistence:** Read the user's choice from `localStorage` (falling back to `prefers-color-scheme` on first visit), apply it before first paint to avoid a flash, and expose a visible toggle in the nav: a real `<button>` with `aria-pressed` and `aria-label` ("Toggle dark mode"), a Google Material icon (`dark_mode` / `light_mode`) swapped via CSS classes, and a perceivable pressed state in both themes.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox.
- **Default Alignment Rule:** every flex container defaults to `align-items: center` unless there is an explicitly justified exception. **Exception clause (theme-specific):** card rows (Features, Testimonials, Pricing) may use `align-items: flex-start` so tilted cards of differing heights don't stretch — document each exception in a CSS comment.
- **Misalignment exception:** all "broken grid" effects come from `transform: var(--tilt-a|b)` and offset shadows — never from mixed `align-items`/`justify-content` chaos or negative-margin flow breaks.
- **Mobile-first:** rows collapse to columns below ~640px; nothing may cause horizontal scrolling. Because rotated surfaces can overflow, set `overflow-x: clip` on `body`/`main` and keep tilts contained within section padding.
- The sticky nav must stay fully usable on mobile (flex-wrap, no horizontal scroll, no hidden links).

**1.5 Framework Default**
- Implement with clean custom CSS in `style.css` driven by the token block above (Tailwind is acceptable only if all utilities map back to these variables via `@theme`/`@layer`/`@apply`). Every reusable pattern must resolve to a generic class (`.btn`, `.card`, `.input-group`, `.badge`, `.toast`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- **Icons:** Google Material Symbols only. Include the Material Symbols stylesheet and use `<span class="material-symbols-rounded">…</span>`. Raw inline SVGs and local icon files are **forbidden**.
- **Fonts:** Include Google Fonts `<link>` tags. **Exception clause:** the theme's system-font stacks (`'Times New Roman'`, `'Comic Sans MS'`/`'Chalkboard SE'`, `'Courier New'`) are the *deliberate* Anti-Design choice and take precedence — but the Google Fonts link must still be included, loading fallback faces slotted *inside* those stacks (e.g., a clashing display face and a mono face appended after the system fonts) so typography never silently breaks on platforms lacking Comic Sans/Times.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons — every state styled via CSS classes**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` bold `--font-display`, 3px solid border, `--shadow-sm`, `transform: var(--tilt-b)`, minimum touch target 44×44px.
- **Hover:** background shift (`#d0d0d0`) **and** `transform: rotate(0deg)` (the button "straightens out" — the theme's signature hover), `cursor: pointer`.
- **Focus:** `.btn:focus-visible` renders `outline: 4px dashed var(--focus-color); outline-offset: 4px;` — visible in both modes (the offset renders the ring against the page background, where it passes 3:1).
- **Active:** `box-shadow: none; transform: translate(3px, 3px);` — the mis-registered print plate "presses in".
- **Loading (`.btn--loading`):** pointer-events disabled, double-click prevented, a Google Material icon (`progress`) spinning via CSS keyframes **without changing button dimensions** (reserve the icon space; under `prefers-reduced-motion`, replace the spin with a static "LOADING…" text label or opacity pulse so the state stays perceivable).
- **Disabled:** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`, no hover transform.
- **Success/Error (`.btn--success`, `.btn--error`):** temporary feedback styles driven by `--text-success`/`--text-error` and `--border-success`/`--border-error`, paired with icon + text (never color alone).
- **Danger (`.btn--danger`):** define it even if unused — visually distinct in **both** themes (red border + validated red text pairing on its actual surface).

**2.2 Cards — Features, Testimonials, Pricing tiers**
- **Default:** flex column layout, `--bg-secondary` (or `--surface-strong` for the highlighted pricing tier) with `#000000` text pairing, 3px border, `--shadow-lg`, alternating `--tilt-a`/`--tilt-b` between siblings.
- **Hover:** visible shift — the tilt inverts or straightens and the shadow offsets grow (e.g., `9px 9px 0`), no soft blur, `transition: var(--transition-normal) var(--ease-standard)`.
- **Focus-within:** when a child link/button receives focus, the card border switches to `--focus-color` (dashed) so keyboard users see which card holds focus.
- **Loading (`.card--skeleton`):** hard-edged stepped shimmer (animated `repeating-linear-gradient`, no blur) that preserves exact layout dimensions; disabled under `prefers-reduced-motion`.
- **Empty (`.card--empty`):** fallback layout with a Material icon and clear guidance copy — define the class in CSS even if unused.

**2.3 Forms & Inputs — Final CTA email capture**
- **Structure:** `.input-group` flex container wrapping a `<label>`, the `.input` field, and a dedicated `.input-error` container with `aria-live="polite"`.
- **States (all as classes):** empty, focus (4px dashed `--focus-color` outline), filled, valid (`--border-success` + check Material icon), invalid (`--border-error`, error text in `--text-error`, error icon), disabled, read-only.
- **Input background must be `#fefefe`**, never `#ffffff`. Placeholder: italic, `--text-secondary`.
- **JS behavior (in `script.js`):** on submit — prevent default, validate email format, render the inline error into the aria-live container on failure, set `.input--valid`/`.input--invalid`, drive the button through loading → success/error states, and fire a toast (below). Prevent double submission; never rely on color alone (icon + message always accompany state).

**2.4 Toast (feedback surface) & Modal (conditional)**
- **Toast:** a single fixed-position `role="status"` / `aria-live="polite"` region that always exists in the DOM, shown/hidden via a class, stacked at `--z-toast`, dismissible, auto-hiding (~4s), with success and error variants using validated token pairings in both modes.
- **Modal (only if you add one, e.g., a "Why does it look like this?" explainer from the Hero):** states opening/open/loading/success/closing animated with `steps(1)` easing; centered flex overlay (`align-items: center`) with backdrop at `--z-modal`; Google Material icon close button; keyboard focus trap; closable via `Esc` and overlay click; content hidden from AT when closed.

**2.5 FAQ Accordion**
- Build with native `<details>`/`<summary>` or a `button[aria-expanded]` + panel pattern — either way: fully keyboard operable, visible dashed focus ring on the trigger, closed content truly hidden from assistive tech, and open/close animation respecting `prefers-reduced-motion`.

---

## 3. SECTION-BY-SECTION BUILD REQUIREMENTS

- **Nav (sticky):** `.nav` per the base spec — `#00ffff` surface, 3px border, `--shadow-md`, `--tilt-a`. Contains the fictional product wordmark (deliberately clashing `--font-display`), anchor links to every section, and the theme toggle. `z-index: var(--z-dropdown)`.
- **Hero:** oversized `--font-display` headline (clamp up to `--text-5xl`), a subline in `--font-mono`, a tilted `.badge`, two CTAs (`.btn--primary` + `.btn`), a deliberately "broken" decorative frame built from surface colors + clashing shadows, and a CSS-animated marquee strip of repeated uppercase mono text (duplicate content `aria-hidden="true"`; animation stops under reduced motion). Semantic `<section aria-labelledby>`.
- **Features (3 cards):** flex row → column on mobile; each `.card--feature` has a Material icon, `<h3>`, and copy; alternate tilts and shadow directions between cards.
- **How It Works (3 steps):** semantic `<ol>` with three `<li>` steps; oversized `--font-display` numerals that overlap their edges **via transform only**; `--font-mono` step titles; DOM order remains 1 → 2 → 3.
- **Testimonials (3 quotes):** `.card--testimonial` with `<blockquote>` + `<cite>`, tilted `.badge` author chips, alternating tilts. Demonstrate or define `.card--skeleton` for these cards.
- **Pricing (3 tiers):** flex row → column; middle tier highlighted with `--surface-strong` bg and a tilted "MOST POPULAR" `.badge`; huge clashing prices; feature lists using check/close Material icons **paired with text** (never icon-only); each tier ends in a CTA button (`.btn--primary` on the highlighted tier).
- **FAQ:** 5–6 genuine Q&A pairs in the product's DIY voice, accordion per 2.5, dashed borders and mono numbering.
- **Final CTA:** giant tilted display headline + the email capture form per 2.3, with toast feedback per 2.4.
- **Footer:** semantic `<footer>`; flex layout with grouped secondary links (Product / Company / Legal) collapsing to a column on mobile; muted text at validated contrast; every link keyboard-focusable with a dashed underline focus style.

---

## 4. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid type via `clamp()`, breakpoints without horizontal overflow (tilts contained per 1.4).
- **Transitions:** every state change uses `transition: var(--transition-fast|normal) var(--ease-standard)` — **exception clause:** abrupt `steps(1)` easing is the theme's deliberate signature and replaces smooth easing, but every hover/focus/active/submission **must still produce a clearly perceivable change**. `prefers-reduced-motion: reduce` disables marquee, shimmer, spin, and animated transforms (static tilts may remain; loading feedback switches to a text/opacity alternative).
- **Accessibility:** sufficient contrast in both Light and Dark modes (validate every text/border/focus token against every surface it renders on); semantic HTML5 landmarks; correct ARIA roles/labels on the toggle, accordion, toast, and any modal; logical focus order; full keyboard operability; `aria-live` regions for form errors, toasts, and loading; state is never communicated by color alone.
- **Mandatory visual feedback:** every click, hover, focus, and submission triggers a visible state change.
- **Destructive/distinct actions:** `.btn--danger` is distinct in both themes.

---

## 5. DELIVERABLES & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` — three separate files. No inline `style` attributes. No inline `<script>` blocks beyond the single deferred `script.js` reference.
- **Naming:** one consistent BEM convention across the entire deliverable (base blocks `.nav`, `.btn`, `.card`, `.input`, `.badge`, `.toast`; modifiers like `.btn--primary`, `.card--feature`, `.faq__item`). Never mix conventions.
- **JS scope (in `script.js` only):** theme init/persist/toggle, FAQ accordion behavior (if JS-enhanced), CTA form validation + loading/success/error flow, toast manager. Nothing else.
- **Copy:** real, original English copy everywhere — no lorem ipsum, no placeholder text.
- **Completeness:** output the entire landing page in one response — complete HTML, complete CSS, complete JS. No omissions, no "rest follows the same pattern" shortcuts.
