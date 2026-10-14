# BUILD PROMPT — "ANDROID HOLO" LANDING PAGE (Single-Shot, Production-Ready)

**Your Role:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete Landing Page on the **first attempt** — production-ready, no follow-up questions, no TODOs, no stubs.

**Deliverable:** A complete landing page themed **Android Holo** (Era: 2011–2014 — pre-Material Android: Honeycomb UI, Ice Cream Sandwich UI, Jelly Bean stock UI, Google Now on Jelly Bean, Holo Light/Dark system themes).

**Design Signature (non-negotiable):** Near-black backgrounds, minimal flat chrome, a **single glowing cyan/holo-blue accent** used for every interactive highlight, thin geometric condensed sans type with uppercase labels, and **glow (never drop shadow) as the substitute for elevation**.

**Sections to build:** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Reference specification:** `references/00-flagship-implementation-specs/android-holo.md` — the tokens below are authoritative if the file is unavailable.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* Keep **all** styling in a dedicated `style.css` file. The `style="..."` attribute is **forbidden** anywhere in the HTML.
* Target all design properties, layout rules, and states exclusively via **class or ID selectors**.
* HTML must remain clean, semantic, and style-agnostic: re-theming the site requires editing only `style.css`, never the markup. JS may only toggle state classes/ARIA attributes — never write inline styles from JS.

**1.2 CSS Variables & Theme Tokens**
Start `style.css` with this authoritative token block, verbatim:

```css
/* Android Holo — design tokens */
/* 2011–2014 | Pre-Material Android: near-black chrome, single glowing cyan accent */
:root {
  /* color */
  --color-bg: #000000;
  --color-surface: #0c0f10;
  --color-surface-2: #171b1c;
  --color-text: #e8f7fa;
  --color-text-muted: #8a9a9d;
  --color-primary: #33b5e5;
  --color-primary-bright: #8fdce8;
  --color-divider: #2a2f30;
  --color-danger: #ff4444;
  /* radius */
  --radius-sm: 0px; --radius-md: 2px; --radius-lg: 2px; --radius-pill: 999px;
  /* shadow (glow substitutes for elevation) */
  --shadow-glow: 0 0 8px rgba(51,181,229,0.55), 0 0 1px rgba(51,181,229,0.9);
  --shadow-glow-strong: 0 0 16px rgba(51,181,229,0.75), 0 0 2px rgba(143,220,232,0.9);
  /* blur */
  --blur-none: 0px;
  /* font */
  --font-sans: 'Roboto Condensed', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'Roboto Condensed', 'Droid Sans', sans-serif;
  --font-mono: 'Droid Sans Mono', ui-monospace, monospace;
  /* text scale */
  --text-xs: 0.6875rem; --text-sm: 0.8125rem; --text-base: 0.9375rem; --text-lg: 1.0625rem;
  --text-xl: 1.25rem; --text-2xl: 1.5rem; --text-3xl: 2rem; --text-4xl: 2.75rem; --text-5xl: 3.5rem;
  /* space */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  /* ease */
  --ease-standard: linear;
  /* extra: holo underline + focus glow */
  --holo-underline: linear-gradient(90deg, transparent, var(--color-primary), transparent);
  --bg-image: none;
}
```

Then extend `:root` with these **mandatory** semantic tokens (aliases into the Holo palette). All styling must consume tokens — no raw hex values outside `:root`/theme scopes:

```css
:root {
  --color-success: #99cc00;             /* Holo green */
  --primary: var(--color-primary);
  --secondary: var(--color-primary-bright);
  --bg-primary: var(--color-bg);
  --bg-secondary: var(--color-surface);
  --text-primary: var(--color-text);
  --text-secondary: var(--color-text-muted);
  --text-success: var(--color-success);
  --text-error: var(--color-danger);
  --border-default: var(--color-divider);
  --border-error: var(--color-danger);
  --border-success: var(--color-success);
  /* layout & motion */
  --spacing-gap: var(--space-4);
  --transition-fast: 0.1s;
  --transition-normal: 0.2s;
  /* elevation-by-glow mapping (exception: no drop shadows anywhere) */
  --shadow-sm: 0 0 1px rgba(51,181,229,0.35);
  --shadow-md: var(--shadow-glow);
  /* stacking */
  --z-nav: 90; --z-dropdown: 100; --z-modal: 200; --z-toast: 300;
}
```

* **Contrast pairing:** every dark background token pairs with a light text token and every light background token pairs with a dark text token — enforced in **every** theme, not just the default.
* **Light-mode background:** never pure white. Holo Light uses a light-gray page background (`#f3f3f3`) with `#fefefe` surfaces where near-white is required.
* **Elevation exception clause:** Holo expresses elevation through **glow**, never drop shadows. Do not write `box-shadow` rules with y-offsets; all elevation maps to `--shadow-glow` / `--shadow-glow-strong`.
* **Timing exception clause:** `--ease-standard: linear` is era-authentic and must be kept. All state transitions use `transition: <property> var(--transition-fast | var(--transition-normal)) var(--ease-standard)` with short durations so motion stays crisp.

**1.3 Mandatory Dark & Light Mode Support**
The source specification does not declare modes; therefore you must **implement and validate BOTH light and dark modes before publishing**.
* **Holo Dark is the base/default theme** — the `:root` block above defines it (near-black chrome, glowing cyan).
* **Holo Light overrides** must be defined both under `@media (prefers-color-scheme: light)` and a `.theme-light` class (or `[data-theme="light"]`) so switching never requires HTML restructuring — only token swaps. Because the flagship theme is dark-first, the media-query/class pair applies the **light** palette while dark remains the base:

```css
/* Holo Light — token overrides */
--color-bg: #f3f3f3;
--color-surface: #fefefe;
--color-surface-2: #e5e5e5;
--color-text: #171b1c;
--color-text-muted: #5f6b6d;    /* darkened for ≥4.5:1 on light surfaces */
--color-primary: #0077aa;       /* darkened holo blue — passes 4.5:1 as text, 3:1 as border */
--color-primary-bright: #005f82;/* hover/emphasis darkens on light backgrounds */
--color-divider: #d1d1d1;       /* authentic Holo Light divider */
--color-danger: #cc0000;        /* darkened for text contrast */
--color-success: #4d7c0f;
--shadow-glow: 0 0 8px rgba(0,119,170,0.35), 0 0 1px rgba(0,119,170,0.6);
--shadow-glow-strong: 0 0 16px rgba(0,119,170,0.55), 0 0 2px rgba(0,119,170,0.8);
```
* **Theme switching:** a visible toggle in the nav (Google Material Symbol `dark_mode`/`light_mode`) with correct `aria-pressed` and `aria-label`. Persist the user's choice via `localStorage`; fall back to `prefers-color-scheme` on first visit (light scheme → Holo Light; dark or no preference → Holo Dark, the signature look).
* **No inline scripts are permitted**, so first paint is handled by the `prefers-color-scheme` media query; the single deferred `script.js` reconciles the stored preference as early as possible in its execution.
* **Validation gate:** verify WCAG AA contrast for body text, muted text, and all accents-as-text in **both** themes before declaring the work complete.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structure with **Flexbox** (`display: flex`).
* Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment (e.g., stacked text blocks inside feature cards may use `flex-start`).
* Mobile-first: rows collapse to columns on small viewports; **zero horizontal scrolling at 320px**; fluid type via the `--text-*` scale; a centered max-width container (~1120px) for section content.

**1.5 Styling Approach & Class Naming**
* Use clean, hand-authored custom CSS driven by the tokens above (Tailwind is acceptable only if every utility maps back to these variables and to the reusable component classes).
* Follow the theme's existing naming convention consistently: blocks (`.btn`, `.card`, `.input`, `.badge`, `.nav`) with `--modifier` variants (`.btn--primary`, `.card--featured`) and `__element` parts where needed (`.card__title`, `.input-group__label`). **Never mix conventions.**
* Reproduce the reference base component classes exactly — `.nav`, `.btn` (with `:hover`, `:active`, `:focus-visible`, `[disabled]`), `.btn--primary`, `.card`, `.input` (with `::placeholder`, `:focus`), `.badge`, plus the `prefers-reduced-motion` guard — and extend them with the state rules in Section 2.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load **Roboto Condensed** (weights 300/400/700) from Google Fonts and bind it to `--font-sans`/`--font-display` as the base typeface. For `--font-mono`, load **Roboto Mono** from Google Fonts (Droid Sans Mono is unavailable as a web font; keep it in the stack as a local fallback).
* Load **Google Material Symbols (Outlined)** for every icon. **Raw inline SVGs and local icon files are forbidden.**
* Apply uppercase treatment with letter-spacing (0.05em–0.1em) to: nav links, buttons, badges, card titles, section kickers, pricing tier names, and footer column headings. Body copy stays sentence case for readability.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons**
* **Default:** flex layout (`align-items: center; justify-content: center; gap: 0.5rem`), uppercase condensed label, minimum touch target **44×44px**.
* **Hover:** border-color → `--color-primary`, text → `--color-primary-bright`, `cursor: pointer`; primary variant intensifies to `--shadow-glow-strong`.
* **Focus:** `:focus-visible` renders the **glow ring** (`box-shadow: var(--shadow-glow)`) as the focus indicator — verify it maintains ≥3:1 contrast against adjacent colors in both themes so the glow is a valid focus ring.
* **Active/Pressed:** `background: rgba(51,181,229,0.12)` plus `transform: scale(0.97)` feedback.
* **Loading:** state class or `aria-busy="true"` — disables pointer events, prevents double-clicks/double submits, renders a **CSS-only spinner** (rotating cyan arc) or animated Material Symbol, sized to the text line so **button dimensions never change**.
* **Disabled:** opacity 0.35, greyscale, `cursor: not-allowed`.
* **Success/Error:** temporary `.is-success` / `.is-error` states driven by `--text-success` / `--text-error`, always paired with a Material Symbol icon **and** text (never color alone), announced via an `aria-live` region.
* **Danger:** define `.btn--danger` using `--color-danger` with a red glow — visually distinct in both light and dark themes.

**2.2 Cards**
* **Default:** `--color-surface` background, 1px `--border-default` hairline, `--radius-md` (2px), generous padding, flexible flex layout.
* **Hover:** border-color → `--color-primary` with a soft glow; optional subtle `translateY(-2px)`. Never a drop shadow.
* **Focus-within:** when any child link/button receives focus, the card border turns primary and glows (`.card:focus-within`).
* **Loading (skeleton):** cyan-tinted shimmer animation over `--color-surface-2` blocks, pre-reserving exact layout space — no jumps.
* **Empty state:** fallback layout with one large muted Material Symbol plus short guidance text.
* **Required variants:** `.card--feature` (icon + title + copy), `.card--step` (numbered), `.card--testimonial` (quote + attribution + holo underline accent), `.card--pricing` plus `.card--featured` for the middle tier (primary border, glow, "MOST POPULAR" badge).

**2.3 Forms & Inputs**
* **Structure:** flex-column `.input-group` wrapping an uppercase `.input-group__label`, the `.input` field, and a dedicated `.input-group__error` feedback container (`aria-live="polite"`, wired via `aria-describedby`).
* Use the Holo underline field: transparent background, bottom hairline `--border-default`; focus switches to a 2px primary bottom border plus glow.
* **States to style:** empty, focused, filled, valid (success border + check icon), invalid (error border, error icon, red message text), disabled, read-only.
* The Final CTA email capture uses this component; success shows a confirmation message + icon in `--text-success`, announced via `aria-live`.

**2.4 FAQ Accordion & Overlay Behavior**
* FAQ items are disclosure widgets: a `<button aria-expanded>` question plus an answer region; the chevron Material Symbol rotates on open; answer height/opacity animates with `var(--transition-normal) var(--ease-standard)`.
* Question hover: cyan text and/or the `--holo-underline` gradient; focus-visible: glow ring. State is communicated by icon rotation **plus** `aria-expanded` — never color alone.
* If any modal/overlay is introduced (optional): center via flex (`align-items: center`), backdrop overlay at `--z-modal`, keyboard focus trapping, close on `Esc` and backdrop click, CSS-transitioned open/close.

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid sizing, max-width breakpoints, no horizontal overflow from 320px up; the sticky nav must not cover anchored section tops (use `scroll-margin-top`).
* **Smooth, era-crisp motion:** every state change transitions (`--transition-fast`/`--transition-normal` with `--ease-standard`). Respect `prefers-reduced-motion: reduce` — disable transitions, spinner rotation, shimmer, and smooth scrolling; keep instant color/state changes.
* **Accessibility (a11y):** WCAG AA contrast in **both** Holo Dark and Holo Light. Never rely on color alone. Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), logical DOM/focus order, full keyboard operability (menu, accordion, toggle, forms), correct ARIA roles/labels on custom widgets, and `aria-live` regions for form errors, success, and loading feedback.
* **Mandatory visual feedback:** every hover, click, focus, and submission triggers a visible change (glow shift, underline, tint, icon/state swap).
* **Single accent discipline:** cyan is the only interactive highlight color; red is reserved for destructive/error; green only for confirmation. No additional accent hues anywhere.
* **Destructive actions:** any destructive control uses `.btn--danger` and must remain visually distinct in both themes.

## 4. LANDING PAGE COMPOSITION (SECTIONS & CONTENT)

Write original, coherent **English** marketing copy for a fictional product identity that fits the retro-Android/Holo world — invent one consistent product name and use it across all sections. **No lorem ipsum anywhere.** All user-facing copy is in English.

1. **Sticky Header / Nav** — `.nav`: brand wordmark (uppercase condensed), anchor links, theme toggle (rule 1.3), primary CTA button. Nav links get the `--holo-underline` gradient on hover. On mobile: a Material Symbol `menu` button with `aria-expanded` opening a dropdown panel at `--z-dropdown`, or a clean wrapping column — never horizontal scroll.
2. **Hero** — full-bleed near-black band: kicker `.badge`, condensed uppercase display headline with the glowing cyan accent on the key phrase (a subtle cyan `text-shadow` glow is permitted here — the one place text may glow), muted subcopy, two CTAs (`.btn--primary` + `.btn`), and a faint cyan radial glow rendered purely in CSS behind the composition.
3. **Features** — three `.card--feature` cards in a flex row (column on mobile): glowing cyan Material Symbol icon, uppercase title, muted body copy; card states per rule 2.2.
4. **How It Works** — three `.card--step` steps with oversized numerals `01 / 02 / 03` (mono or condensed, cyan with glow), connected by a thin cyan connector line (horizontal on desktop, hidden or vertical on mobile), short uppercase titles and copy.
5. **Testimonials** — three `.card--testimonial` cards: `--holo-underline` accent, quote copy, a circular avatar token built from a Material Symbol `person` inside a bordered, glowing circle, attribution name and uppercase role in muted tone.
6. **Pricing** — three `.card--pricing` tiers; middle tier is `.card--featured` with primary border, glow, and a "MOST POPULAR" `.badge`; uppercase tier name, large condensed price, feature list with cyan Material Symbol checks, one CTA per tier (featured gets `.btn--primary`), fine print in muted text.
7. **FAQ** — five to six accordion items per rule 2.4.
8. **Final CTA** — full-width band on `--color-surface-2`: uppercase headline, subcopy, inline email capture (`.input-group` + `.btn--primary`, wrapping to a column on mobile), privacy microcopy; full input state support per rule 2.3 including loading, success, and error feedback.
9. **Footer** — secondary links grouped into three to four columns (e.g., Product, Company, Resources, Legal) plus brand, copyright, and small print; muted text, top divider, link hover = cyan + holo underline; semantic `<footer>`.

## 5. DELIVERABLE & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, and `script.js`. No inline `style` attributes; no inline `<script>` blocks beyond the single deferred `script.js` reference.
* **Naming:** one convention throughout — the theme's `block--modifier` / `block__element` pattern; never mix conventions.
* **Token order in `style.css`:** the Holo Dark `:root` block (verbatim, rule 1.2) → mandatory semantic aliases → Holo Light overrides (media query + class, rule 1.3) → base component classes → extensions and section styles.
* **JS scope:** vanilla and minimal — theme toggle + `localStorage` persistence, mobile menu, accordion, form state handling, smooth anchor scrolling (respecting reduced motion). No behavioral logic beyond what is specified.
* **No unrequested placeholders:** all copy is real, thematic English; placeholders only where genuinely unavoidable (and none should be).
* **First-attempt completeness:** ship a fully working page, then self-verify before delivering — light + dark contrast (AA), keyboard pass, 320px no-overflow, reduced-motion pass, and theme persistence across reload. Fix any failure before submitting the final code.
