# Build Prompt — Complete Landing Page · Theme: "Dark Mode" (Dark Tech & Cyber)

Act as a Senior Frontend Engineer and Expert UI Designer. Build a **complete, production-ready Landing Page in a single attempt** — fully coded, no stubs, no TODOs, no "add content here" markers. The page must be fully functional, accessible, and validated in **both light and dark presentations** before delivery.

**Theme:** Dark Mode (`claude-artisan/minimal-organic`) · **Era:** 2018–present · **Category:** Dark Tech & Cyber
**Keywords:** dark neutral backgrounds (never pure black), desaturated accents to avoid vibration, elevation via lighter surfaces (not cast shadows), reduced eye strain, OLED-friendly, developer-tool aesthetic (Linear, system dark modes).
**Sections (in order):** Hero · Features (3 cards) · How It Works (3 steps) · Testimonials · Pricing (3 tiers) · FAQ · Final CTA · Footer with secondary links.

---

## 0. Project Brief & Copy Rules

* **Product concept:** Author a fictional but plausible Dark Tech & Cyber product (suggested: a developer-first security/observability platform — you may name it). All copy must be specific, confident, and written entirely in **English**.
* **No lorem ipsum.** No copy was supplied by the requester, so you author real, finished English copy for every headline, description, testimonial, tier, and FAQ answer.
* **No external assets** except Google Fonts and Google Material Symbols. All visuals (hero mock, avatars, icons) are built with CSS and icon glyphs — no photographs, no image files.
* **Source note (translated from spec):** "The source does not declare modes; validate in light and dark before publishing." Treat dual-mode validation as a hard acceptance criterion.

---

## 1. Strict Rules & Architecture

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. **The `style="..."` attribute is forbidden anywhere in the HTML.** Inline event-handler attributes (`onclick`, etc.) are also forbidden — all behavior binds via `addEventListener` in `script.js`.
* Style only via class/ID selectors. HTML stays semantic and style-agnostic: changing the look must never require touching the markup.

**1.2 CSS Variables & Theme Tokens (mandatory names)**
Store all tokens in `:root`. The reference sheet uses `--color-*` names — **exception clause: the canonical mandatory names below take precedence; the reference values are mapped onto them, and the reference sheet's extra tokens (elevation ladder, type/space scales, fonts) are retained as supplements.**

```css
:root {
  /* Mandatory canonical tokens — dark values (canonical theme) */
  --bg-primary: #0c0c10;      /* page field — never #000 */
  --bg-secondary: #16161c;   /* nav/cards — elevation 1 */
  --bg-tertiary: #1e1e26;    /* inputs/buttons — elevation 2 */
  --bg-elevated: #26262f;    /* highest surface — elevation 3 */
  --text-primary: #e8e8ec;
  --text-secondary: #9a9aa5;
  --primary: #7c9cff;        /* desaturated periwinkle */
  --secondary: #7fd9c4;      /* desaturated mint accent */
  --text-success: #8fce9a;   /* desaturated — verify ≥ 4.5:1 on all --bg-* */
  --text-error: #e59a9a;     /* desaturated — verify ≥ 4.5:1 */
  --border-default: rgba(255,255,255,0.09);
  --border-success: rgba(143,206,154,0.45);
  --border-error: rgba(229,154,154,0.45);

  /* Shape, depth, motion */
  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 18px; --radius-pill: 999px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
  --shadow-md: 0 4px 10px rgba(0,0,0,0.45);
  --spacing-gap: 24px;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --transition-fast: 0.15s var(--ease-standard);
  --transition-normal: 0.25s var(--ease-standard);
  --z-dropdown: 100; --z-modal: 1000; --z-toast: 1100;

  /* Theme supplements (retain from reference sheet) */
  --elevation-0: var(--bg-primary); --elevation-1: var(--bg-secondary);
  --elevation-2: var(--bg-tertiary); --elevation-3: var(--bg-elevated);
  --font-base: 'Inter', -apple-system, system-ui, sans-serif;
  --font-display: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem; --text-4xl: 3rem; --text-5xl: 4rem;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
}
```

* **Signature rule:** elevation comes from stepping up `--elevation-*` surface tints, **not** from cast shadows. Shadows exist as tokens but are used only sparingly (skeleton depth on floating layers). Desaturated accents must never vibrate against the dark field.
* **Contrast pairing:** every light background token pairs with a dark text token and vice versa — enforced in **both** themes, not just the default.

**1.3 Mandatory Dual-Mode Support (dark-first theme)**
* **Exception clause: although this theme is dark-first, light mode is mandatory** — the source spec itself requires validation in both modes.
* Dark tokens live in `:root` **and** a `.theme-dark` class on `<html>`. Light tokens live in a `.theme-light` class **and** under `@media (prefers-color-scheme: light)` (so no-JS/first paint is correct). Suggested light values — verify WCAG AA (4.5:1) and adjust if needed:

```css
.theme-light { /* mirror these into @media (prefers-color-scheme: light) */
  --bg-primary: #f2f2f4;   /* soft neutral page — never #ffffff */
  --bg-secondary: #fefefe; /* cards/nav — lighter than page = elevated */
  --bg-tertiary: #fefefe;  /* inputs/buttons — separated by border + --shadow-sm */
  --bg-elevated: #fefefe;  /* floating layers — border + --shadow-md */
  --text-primary: #16161c; --text-secondary: #5d5d68;
  --primary: #3a55c9;      /* darkened: #7c9cff fails AA on light surfaces */
  --secondary: #0d7d66;
  --text-success: #217a43; --text-error: #b3453f;
  --border-default: rgba(0,0,0,0.10);
  --border-success: rgba(33,122,67,0.45); --border-error: rgba(179,69,63,0.45);
  --shadow-sm: 0 1px 2px rgba(16,16,22,0.08); --shadow-md: 0 4px 10px rgba(16,16,22,0.10);
}
```
* In light mode, preserve the "lighter surface = raised" signature (surfaces lighter than the page); floating layers separate via border + minimal shadow since surfaces cannot exceed `#fefefe`.
* **Theme toggle:** a visible control in the nav using Material Symbols (`dark_mode` / `light_mode`), with `aria-pressed` reflecting the active theme and an `aria-label` that updates (e.g., "Switch to light theme"). Choice persists in `localStorage`; first visit falls back to `prefers-color-scheme`; default when undetectable is dark (canonical). Switching themes must require **zero** HTML restructuring — tokens only.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout with Flexbox. **Every row-direction flex container defaults to `align-items: center`.** Sanctioned exceptions (document with a CSS comment): equal-height card grids use `stretch`, and `.input-group` stacks vertically with `stretch`.
* Mobile-first: rows collapse to columns on small viewports; **no horizontal scrolling at any width down to 320px**; fluid type via `clamp()` where scaling is needed.

**1.5 Framework Decision**
* **Exception clause: the reference sheet is framework-free custom CSS, so use clean custom CSS (no Tailwind build)** organized with `@layer` ordering: `tokens → base → components → sections → utilities`. All component styles map to generic reusable classes (`.btn`, `.card`, `.input-group`, `.badge`, `.nav`, .modal`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load **Inter** (base/display) and **JetBrains Mono** (code/terminal accents) via Google Fonts `<link>`; bind to `--font-base`, `--font-display`, `--font-mono`.
* Icons are **Google Material Symbols** only. **Raw inline SVGs and local icon files are forbidden.** Decorative icons get `aria-hidden="true"`; meaningful icons get accessible names.

---

## 2. Component Design Specifications

**2.1 Button (`.btn`, `.btn--primary`, `.btn--ghost`, `.btn--danger`)**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, `border-radius: var(--radius-pill)`, background `--bg-tertiary`, border `--border-default`, `transition: var(--transition-normal)`.
* **Hover:** background steps to `--elevation-3`, `cursor: pointer`.
* **Focus-visible:** distinct ring via `outline: 2px solid var(--primary); outline-offset: 2px`.
* **Active/pressed:** `transform: scale(0.97)`.
* **Loading (`.is-loading` / `aria-busy="true"`):** disables interaction and blocks double-submits; renders a pure-CSS spinner (rotating border ring) or animated Material Symbol; **button dimensions must not change** — reserve spinner space.
* **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`, no transforms.
* **Success/Error (`.is-success` / `.is-error`):** transient feedback tinted by `--text-success` / `--text-error` with a swapped icon; auto-reverts after ~2.5s.
* **Variants:** `.btn--primary` — dark: `color-mix(in srgb, var(--primary) 28%, var(--bg-tertiary))` fill with 50%-primary border and `--text-primary` label; light: solid `--primary` fill with `#fefefe` label (verify AA in both). `.btn--ghost` — transparent with border. `.btn--danger` — defined in the design system and visually distinct (red treatment) in **both** themes, even if unused on this page.

**2.2 Card (`.card`, `.card--featured`, `.card--skeleton`, `.card--empty`)**
* **Default:** background `--bg-secondary` (`--elevation-1`), `1px solid var(--border-default)`, `border-radius: var(--radius-lg)`, padding `--space-6`, flexbox interior.
* **Hover (interactive cards):** step surface to `--elevation-2` and brighten border — or a subtle `translateY(-2px)`; keep the minimal-organic calm.
* **Focus-within:** border highlights when any child link/button receives focus.
* **Skeleton:** `.card--skeleton` shimmer animation defined in CSS (no layout jumps; disabled under reduced motion).
* **Empty state:** `.card--empty` pattern — centered Material Symbol + short guidance text.

**2.3 Form & Input (`.input-group`)**
* **Structure:** flex column (`stretch`) wrapping a `<label>`, the field (`.input` / `textarea`), and a dedicated error-feedback element with reserved min-height so messages never shift layout.
* **States — all styled:** empty, focused (`border-color: var(--primary)` + `box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 25%, transparent)`), filled, valid (`.is-valid`: `--border-success` + check icon), invalid (`.is-invalid`: `--border-error`, `--text-error` message, error icon, `aria-invalid="true"`), disabled, read-only.
* **Never color-only:** pair every border tint with an icon and text. Error/status containers use `aria-live="polite"` and `aria-describedby` wiring.

**2.4 Modal (`.modal`)**
* **Structure:** fixed overlay, `display: flex; align-items: center; justify-content: center;`, `z-index: var(--z-modal)`; backdrop dims via `color-mix` black overlay; dialog = `--bg-secondary` surface, border, `--radius-lg`, max-width ~480px.
* **States:** opening/closing animated via CSS (opacity + slight scale, `var(--transition-normal)`; reduced-motion = fade only), open, loading (submit button enters loading state, dialog `aria-busy`), success (icon + confirmation, auto-close ~1.8s), error (inline message + retry).
* **UX:** close via `Esc`, backdrop click, and a Material Symbol `close` button with `aria-label`; focus is trapped inside while open, initial focus lands on the dialog/first field, focus returns to the trigger on close, body scroll locks. `role="dialog"`, `aria-modal="true"`, `aria-labelledby`/`aria-describedby`.

---

## 3. Page Section Specifications

**3.1 Global Scaffold & Nav**
* Skip link ("Skip to content"), `<header>` → sticky `.nav` (`--elevation-1`, bottom border): logo (Material Symbol + wordmark), anchor links to each section, theme toggle, CTA button. Mobile: links collapse behind a Material Symbol `menu` button (`aria-expanded`, `aria-controls`), panel at `--z-dropdown`, `Esc` closes, focus returns to the trigger. `scroll-behavior: smooth` + `scroll-margin-top` on sections (disabled under reduced motion). Max-width ~1152px container; section rhythm `--space-24` desktop / `--space-12` mobile; consistent section-header pattern (kicker, `<h2>`, lede).

**3.2 Hero**
* Two columns desktop (copy + visual), stacked mobile. Copy column: `.badge` (accent-tinted, e.g., "Now in public beta"), `<h1>` display type with one `--primary`-colored keyword, lede in `--text-secondary`, CTA row (`.btn--primary` + `.btn--ghost`), muted trust line in `--font-mono`.
* Visual: a **CSS-built terminal card** (`--bg-tertiary`, `--radius-lg`, border, `--font-mono`): header bar with three desaturated CSS dots, fake log lines tinted with `--primary`/`--secondary`/`--text-secondary`, blinking block cursor (animation off under reduced motion). Entire visual `aria-hidden="true"`. Optional: one subtle desaturated radial glow of `--primary` at ≤10% opacity behind the hero — must not reduce text contrast.

**3.3 Features — 3 cards**
* Grid: 3 columns desktop → 1 column mobile. Each `.card`: Material Symbol inside a tinted icon tile (`--bg-tertiary`, `--radius-md`), `<h3>`, description. Hover and `:focus-within` per 2.2.

**3.4 How It Works — 3 steps**
* Horizontal on desktop with a hairline connector (pseudo-element) between numbered `01 / 02 / 03` markers set in `--font-mono` and `--secondary`; vertical stack on mobile. Each step: marker, `<h3>`, short copy.

**3.5 Testimonials**
* 3-card grid. Each: quote text, monogram avatar (initials in a CSS circle — `--bg-tertiary`, `--secondary` text), name, role/company. Optional star row using Material Symbol `star` with `aria-label` ("Rated 5 out of 5") — never color-only.

**3.6 Pricing — 3 tiers**
* Middle tier is `.card--featured`: `--elevation-2`, `--primary` border, "Most popular" `.badge`, slightly stronger padding. Each tier: name, price in display type + period, feature list with Material Symbol `check` glyphs, CTA button. Tier 1 & 2 CTAs anchor-scroll to the Final CTA (`href="#cta"`); **Tier 3 ("Enterprise") opens the contact modal from 2.4** containing a short form (name, work email, message) exercising every input state plus modal loading/success/error. Featured card must remain fully readable in both themes.

**3.7 FAQ**
* 6 authored Q&A pairs using native `<details class="faq__item">` / `<summary>` (summary may contain an `<h3>` per the HTML content model). Summary: flex row, question, Material Symbol `expand_more` rotating 180° when open; visible `:focus-visible` ring; smooth open via CSS where possible. Closing line: "Still have questions?" button reuses the contact modal.

**3.8 Final CTA (`id="cta"`)**
* Centered band on `--elevation-1` (or subtle primary tint ≤8%): `<h2>`, supporting copy, **email capture form**: `.input-group` rendered as flex row on desktop (input flexes, button auto) and column on mobile. Visible-or-`sr-only` `<label>`, submit `.btn--primary`. On submit: validate (empty/invalid → `.is-invalid` + live error message); valid → button loading ~900ms (simulated) → success state (check icon, "You're in — check your inbox") or error fallback; a `role="status" aria-live="polite"` region announces every outcome.

**3.9 Footer with secondary links**
* Top: brand block (logo symbol, name, one-line tagline) + 2–3 link columns (Product / Company / Support). Bottom bar: auto-updating © year (via `script.js`), and 2–3 social icons (Material Symbols with descriptive `aria-label`s). **Every link must resolve to a real target** — in-page anchors where a section exists, the contact modal otherwise. No dead `href="#"` links.

---

## 4. Core UX & Micro-Interaction Rules

* **Responsive by default:** fluid sizing, breakpoints ~768/1024px, zero horizontal overflow at 320px.
* **Smooth animations:** every state change transitions via `transition: var(--transition-normal)` (fast feedback via `--transition-fast`); `@media (prefers-reduced-motion: reduce)` disables transitions, hover transforms, shimmer, and the cursor blink.
* **Accessibility:** WCAG AA contrast in **both** themes; semantic HTML5 landmarks (`header/nav/main/section/footer`) with `aria-labelledby`; one `<h1>`, logical heading hierarchy; full keyboard operability for nav menu, toggle, modal, FAQ, and forms; visible focus everywhere; `aria-live` for all dynamic feedback; 44px minimum targets; state is never communicated by color alone.
* **Mandatory visual feedback:** every click, hover, focus, and submission produces a visible state change.
* **Destructive actions:** `.btn--danger` is distinct in both themes (defined even if unused).

---

## 5. Deliverable & Output Format

* **Files:** separate `index.html`, `style.css`, `script.js`. The HTML contains exactly **one** `<script src="script.js" defer></script>` reference — no inline script blocks, no inline styles.
* **Naming:** strict **BEM** (`block__element--modifier`) plus the generic component blocks (`.btn`, `.card`, `.input-group`, `.badge`, `.nav`, `.modal`) — one convention, never mixed.
* **Placeholders:** none. All copy is finished English product copy; lorem ipsum is prohibited.
* **Completeness:** ship the entire page in one response — every section, every state, both themes, fully wired.

---

## 6. Acceptance Checklist (validate before delivery)

1. Zero `style="..."` attributes, zero inline scripts/handlers, one deferred `script.js`.
2. All mandatory token names present; contrast pairing holds in both themes.
3. Dark tokens in `:root` + `.theme-dark`; light tokens in `.theme-light` + `prefers-color-scheme: light`; toggle persists via `localStorage` with correct `aria-pressed`/`aria-label`.
4. Every button state (default/hover/focus/active/loading/disabled/success/error) styled; loading never changes dimensions.
5. Card hover, `:focus-within`, skeleton, and empty-state CSS all defined.
6. All input states styled; errors announced via `aria-live`; never color-only.
7. Modal: animated open/close, focus trap, `Esc` + backdrop + button close, focus restoration, scroll lock.
8. Keyboard-only pass completes: nav menu → theme toggle → pricing → modal → FAQ → CTA form.
9. 320px viewport: no horizontal scroll; all flex rows collapse to columns.
10. Reduced-motion: all animations and transforms disabled.
11. BEM naming consistent across all three files; no lorem ipsum; all links resolve.
12. Both light and dark visually validated — per the source note, the build is not complete until it passes in both modes.
