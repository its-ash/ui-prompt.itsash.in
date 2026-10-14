# CODING AGENT PROMPT — LANDING PAGE: "VHS / ANALOG VIDEO"

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Deliver a complete, production-quality landing page in a single attempt.

**Project Brief:** Build a marketing landing page themed **VHS / Analog Video** — the 1980s–90s home-video aesthetic: scanlines/interlacing, chromatic (cyan/magenta) text bleed, tracking distortion, tape warble, grain, a REC/timestamp HUD, and warm nostalgic degradation. Invent ONE coherent fictional product that fits this theme (e.g., a VHS-tape digitization & restoration service, or a retro streaming platform for analog-era media) and write ALL user-facing copy in English around that single concept. Required sections: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. Deliverables: `index.html`, `style.css`, `script.js`.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. The `style="..."` attribute, inline `<style>` blocks, and presentational HTML attributes are forbidden.
* Target every design property, layout rule, and state via class or ID selectors only.
* Keep HTML semantic and styling-agnostic: retheming the page must require editing CSS only, never markup.

**1.2 CSS Variables & Theme Tokens**
* Store all visual tokens in `:root` (dark theme = default) using the canonical block in Section 5. Extend it — never weaken it — with these mandatory semantic aliases: `--primary: var(--color-primary); --secondary: var(--color-accent); --bg-primary: var(--color-bg); --bg-secondary: var(--color-surface); --text-primary: var(--color-text); --text-secondary: var(--color-text-muted); --border-default: var(--color-border);`
* Define the missing feedback tokens: `--text-success`, `--text-error`, `--border-success`, `--border-error` (success may derive from accent cyan `#2de2e6`; error from the red family, e.g. `#ff5c5c` — chosen values must pass WCAG AA contrast wherever used as text).
* Replace every hardcoded hex inside component rules (e.g., `.btn--primary { color: #0a0a0f }`, `.badge { color: #0a0a0f }`) with dedicated tokens such as `--color-on-primary` so both themes can flip them.
* Add the tokens the spec omits: `--spacing-gap: var(--space-4); --transition-fast: 120ms; --transition-normal: 240ms;` plus `--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1)` for large fades (the spec's `--ease-standard: steps(6, end)` remains the signature for micro-interactions).
* Define stacking tokens `--z-dropdown: 100; --z-modal: 400; --z-toast: 500;` and use them for the mobile nav panel, any overlay, and feedback messages.
* Contrast pairing: every light background token must pair with a dark text token and every dark background token with a light text token — enforced in BOTH themes, not only the default.

**1.3 Mandatory Dark Mode & Light Mode Support**
* The source palette is dark-first: dark is the canonical look and the default in `:root`. BOTH themes are still mandatory — the source spec explicitly requires validating in light and dark before publishing.
* Implement switching via a `.light` class on `<html>` that overrides color and texture tokens; switching must require zero HTML restructuring.
* Light mode direction — "daylight dub / faded tape label": warm off-white backgrounds (never `#ffffff`; use `#fefefe` or warm paper tones from the `#f0ece0` family), dark ink text (`#1a1a22` family), surfaces one step darker than the page background, clearly visible borders. It must feel like a designed light theme, not a washed-out dark theme.
* All texture variables (`--scanlines`, `--tape-grain`, `--chroma-shadow`) must be redefined per theme: light mode uses dark scanlines (`rgba(0,0,0,0.05)`–`0.08`) and adjusted chroma ghosts so artifacts remain visible on light surfaces.
* Toggle: a visible button in the nav with a Material Symbol icon, correct `aria-pressed` and `aria-label` ("Switch to light theme" / "Switch to dark theme"). Persist the choice in `localStorage` (e.g., key `vhs-theme`); on first visit fall back to `prefers-color-scheme`, and if no preference is expressed, default to dark. Apply the stored theme at the top of `script.js` on execution; do not add any extra inline scripts.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build every layout structure with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment (e.g., text blocks inside cards may use `flex-start`).
* Mobile-first: single-column stacks on small viewports expanding to rows on desktop; zero horizontal scrolling at any viewport from 320px upward.

**1.5 CSS Architecture & Naming Convention**
* Use clean custom CSS — the provided spec is the foundation; no utility framework is required for this build. Any utility class you introduce must map back to the tokens.
* Naming convention: BEM only (`block__element--modifier`), matching the spec's `.btn--primary` pattern. Never mix conventions.
* Organize `style.css` with section comments in this order: tokens → base → components → page sections → themes → animations → reduced-motion.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load text fonts from Google Fonts via `<link>`. Body sans: the spec's `'Helvetica Neue', Arial` is not a Google font, so lead with a Google-hosted equivalent (e.g., **Inter**) keeping the original fallbacks. Display/mono: the spec's `'VCR OSD Mono'` is not available on Google Fonts, so substitute a Google Fonts CRT-style monospace — **VT323** (recommended) or Share Tech Mono — keeping `'Courier New', monospace` fallbacks. Exception clause: do not load VCR OSD Mono or any font from non-Google sources; Google Fonts only.
* Bind fonts to tokens: `--font-base` (body), `--font-display` (headings, HUD, labels, buttons), `--font-mono` (timestamps, counters, attributions).
* Icons: Google Material Symbols via the standard `<link>` stylesheet — used for feature icons, FAQ chevrons, theme toggle, form validation icons, footer/social icons, and status icons. Raw inline SVGs, local icon files, and emoji-as-icons are forbidden.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button** (base `.btn`, variant `.btn--primary` per Section 5)
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` with a minimum touch target of 44×44px (`min-height: 44px`); typography per spec.
* **Hover:** the spec's signature — `translateX(1px)`, chromatic text-shadow, accent border — plus `cursor: pointer` and a visible brightness/shadow shift.
* **Focus:** distinct `:focus-visible` ring using tokens (spec: `outline: 2px solid var(--color-accent); outline-offset: 2px`). Never remove outlines.
* **Active/Pressed:** stepped click feedback (spec's `translateX(0)` plus `transform: scale(0.97)`) — must be perceptible.
* **Loading:** `.btn--loading` with `aria-busy="true"` and `disabled`: blocks interaction and double-clicks, renders a CSS spinner (border/conic animation) or animated Material Symbol, and preserves the button's exact dimensions.
* **Disabled:** `opacity: 0.5`, greyscale filter, `cursor: not-allowed`, no hover/transform/text-shadow effects (per spec).
* **Success/Error:** temporary `.btn--success` / `.btn--error` classes driven by `--text-success` / `--text-error`, always paired with a Material Symbol icon (check/error) — never color alone — reverting to default afterward.
* Also define `.btn-danger` for destructive actions, visually distinct in both themes.

**2.2 Card** (base `.card` per Section 5)
* **Default:** flexible Flexbox column layout, `--color-surface` background, `1px solid var(--color-border)`, `--radius-md`, `--shadow-md`, scanline overlay, `position: relative`.
* **Hover** (interactive cards only): elevation shift plus `transform: translateY(-2px)`; `cursor: pointer` only if genuinely clickable.
* **Focus-within:** card border highlights when a child link/button receives keyboard focus.
* **Loading (Skeleton):** `.card--skeleton` shimmer animation (gradient sweep) styled in CSS to match final dimensions and prevent layout jumps.
* **Empty State:** `.card--empty` fallback layout with a Material Symbol and clear guidance text.

**2.3 Form & Input** (base `.input` per Section 5)
* Include at least one real form: an email/newsletter signup in the Final CTA (or footer). Structure: a flex `.input-group` wrapping a `<label>`, the `<input class="input">`, and a dedicated feedback element wired with `aria-describedby` and `aria-live="polite"`.
* **States**, all class-driven: empty, focused (accent ring per spec), filled, valid (`.input--valid`: success border + check icon), invalid (`.input--invalid`: error border, error icon, error message text — never color alone), disabled, read-only.
* `script.js` validates email format on submit, shows inline errors, sets the submit button to loading, then shows a success message.

**2.4 Accordion (FAQ) & Modal/Popup**
* FAQ is an accessible accordion: each item uses a `<button class="faq__trigger" aria-expanded="false" aria-controls="…">` inside an `<h3>`, with a panel carrying `role="region"` + `aria-labelledby`; a Material Symbol chevron rotates on toggle; open/close animated via CSS transitions (`--transition-normal`); JS only toggles ARIA/hidden state.
* Fully keyboard operable (Enter/Space), logical focus order, no mouse-only interactions.
* If any modal is introduced (optional): centered flex overlay (`align-items: center`), backdrop, animated opening/open/closing states, loading and success/error states, Material Symbol close button, keyboard focus trap, close via `Esc` and overlay click, `--z-modal` stacking.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid type via `clamp()` where appropriate; no horizontal overflow from 320px up.
* **Smooth animations:** every state change transitions with `--transition-fast` / `--transition-normal`; the stepped `--ease-standard` delivers the mechanical dubbed-tape feel on micro-states.
* **Reduced motion:** extend the spec's `prefers-reduced-motion` block to disable every animation — tracking sweeps, tape warble, grain flicker, REC blink, shimmer, spinner motion, smooth scrolling — while keeping every state perceivable without motion.
* **Accessibility:** WCAG AA contrast in both themes for all text, including muted text on surfaces. Chromatic bleed is permitted on headings/labels only — never body copy — with offsets ≤ 2px so legibility is preserved. Never rely on color alone: the REC dot always pairs with the "REC" text; validation always pairs icon + message. Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), a single `<h1>`, logical heading order, a skip link, correct ARIA on the theme toggle and accordion, visible focus everywhere, and `aria-live` regions for all dynamic feedback.
* **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
* **Destructive actions:** `.btn-danger` must be visually distinct in both light and dark themes.

---

## 4. DELIVERABLES & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, `script.js`. Exactly one `<script src="script.js" defer></script>` reference; no other inline scripts; no inline styles.
* **Naming:** BEM only, consistent across the entire deliverable.
* **Copy:** author original, coherent, on-theme English copy for the invented product — nav labels, hero headline and subcopy, 3 feature cards, 3 steps, 3 testimonials (names + roles), 3 pricing tiers (names, prices, feature lists, one highlighted), 6+ substantive FAQ entries, final CTA, and footer. Lorem ipsum is forbidden.
* **No external assets:** no images, no icon files, no JS libraries — only Google Fonts and Google Material Symbols via `<link>`. All visuals are CSS (gradients, pseudo-elements, keyframes).
* **script.js scope:** theme toggle + persistence, FAQ accordion, form validation with loading/success/error, live HUD timestamp clock, and mobile nav menu behavior. Nothing else.

---

## 5. VHS / ANALOG VIDEO THEME SPECIFICATION

Use this token block as the canonical foundation (dark = default); the additions from Section 1.2 are mandatory:

```css
:root {
  --color-bg: #0a0a0f; --color-surface: #16161f; --color-surface-strong: #1e1e2a; --color-border: #3a3a4a;
  --color-text: #f0ece0; --color-text-muted: #a3a0ae; --color-primary: #ff3b5c; --color-accent: #2de2e6; --color-tape-yellow: #f5c518;
  --radius-sm: 2px; --radius-md: 4px; --radius-lg: 6px; --radius-pill: 999px;
  --shadow-sm: 0 2px 6px rgba(0,0,0,.5); --shadow-md: 0 6px 18px rgba(0,0,0,.55); --shadow-lg: 0 12px 32px rgba(0,0,0,.6);
  --font-sans: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'VT323', 'VCR OSD Mono', 'Courier New', monospace;
  --font-mono: 'VT323', 'Share Tech Mono', 'Courier New', ui-monospace, monospace;
  --text-xs: .75rem; --text-sm: .875rem; --text-base: 1rem; --text-lg: 1.125rem; --text-xl: 1.375rem;
  --text-2xl: 1.75rem; --text-3xl: 2.25rem; --text-4xl: 3rem; --text-5xl: 4rem;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --ease-standard: steps(6, end);
  --chroma-shadow: -1.5px 0 var(--color-accent), 1.5px 0 var(--color-primary);
  --scanlines: repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0 1px, transparent 1px 3px);
  --tape-grain: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,.06), transparent 70%);
}
```

Canonical base components — extend with every state from Section 2; do not weaken:

```css
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg) var(--tape-grain); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6); background: var(--color-surface); border-bottom: 2px solid var(--color-primary); background-image: var(--scanlines); position: relative; }
.nav strong { font-family: var(--font-display); letter-spacing: .04em; text-shadow: var(--chroma-shadow); }
.btn { font: 600 var(--text-base)/1 var(--font-display); color: var(--color-text); padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm); background: var(--color-surface-strong); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); cursor: pointer; transition: transform .1s var(--ease-standard), text-shadow .1s var(--ease-standard); }
.btn:hover { transform: translateX(1px); text-shadow: var(--chroma-shadow); border-color: var(--color-accent); }
.btn:active { transform: translateX(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; text-shadow: none; }
.btn--primary { background: var(--color-primary); color: var(--color-on-primary); border-color: var(--color-primary); }
.card { background: var(--color-surface); border-radius: var(--radius-md); box-shadow: var(--shadow-md); padding: var(--space-6); border: 1px solid var(--color-border); background-image: var(--scanlines); position: relative; }
.card h3 { text-shadow: var(--chroma-shadow); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-mono); padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm); background: var(--color-surface-strong); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-accent) 35%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-display); padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-primary); color: var(--color-on-primary); }
```

**Signature effects to implement (all pure CSS, all reduced-motion-aware):**
* **Scanlines / interlacing:** the `--scanlines` overlay on every raised surface (nav, cards, hero, footer) via `background-image` layering or a `::before` pseudo-element with `pointer-events: none`; keep overlay alpha low so text stays crisp.
* **Chromatic bleed:** `--chroma-shadow` on headings, the nav wordmark, card titles, and badges — cyan ghost left, red ghost right. Headings/labels only; never body copy.
* **Tracking distortion:** an occasional horizontal "tracking error" band (light, slightly skewed strip) that sweeps down the viewport via keyframes every ~8–14s over ~700ms, implemented on a fixed pseudo-element.
* **Tape warble:** subtle, low-frequency horizontal jitter/skew (≤ 2px, stepped easing) on the hero heading only — never impeding readability.
* **Grain / warm degradation:** `--tape-grain` on the body background; optionally a very subtle opacity-flicker layer (alpha ≤ 0.06).
* **Date/REC HUD:** a fixed corner HUD in `--font-mono`: a blinking "REC" indicator (CSS-animated dot or Material Symbol, always paired with the "REC" text) plus a live VHS-style timestamp (e.g., `PM 11:58 12.24.87`) updated by `script.js`. Decorative: `aria-hidden="true"`, `pointer-events: none`, stacked above content but below any modal, and repositioned or hidden on small viewports if it risks overlapping interactive elements.
* **Light-mode texture variants:** redefine `--scanlines`, `--tape-grain`, and `--chroma-shadow` under the `.light` theme (dark scanline lines, adjusted ghost alpha/offsets) so artifacts survive on light surfaces. Validate both themes before finishing.

---

## 6. LANDING PAGE SECTION REQUIREMENTS

All sections live inside `<main>`, carry anchor `id`s matching the nav, share a consistent max-width container (~1100–1200px) with token-based padding, and stack in this order:

* **Nav (global):** `.nav` per Section 5 — wordmark in `--font-display` with chroma bleed; links to every section; theme toggle; primary CTA button. Mobile: links collapse behind a menu button opening a dropdown panel (`--z-dropdown`), fully keyboard operable. Smooth in-page scrolling (disabled under reduced motion).
* **Hero:** near-full-viewport flex column, centered; a `.badge` eyebrow; `<h1>` in `--font-display` with chroma bleed and the tape-warble animation; supporting paragraph; two CTAs (`.btn--primary` + default `.btn`); decorative HUD elements (REC indicator, timestamp, "SP/LP" mode label); tracking-sweep animation active; background = `--color-bg` + grain + scanlines.
* **Features:** section heading (display font, chroma bleed) + exactly 3 `.card` articles in a responsive flex row (1 column mobile → 3 columns desktop, equal heights via stretch). Each card: Material Symbol icon (accent or tape-yellow), `<h3>`, description, and a "Learn more" link so `:focus-within` highlighting is demonstrable.
* **How It Works:** exactly 3 steps styled as tape-counter tracks — numerals in `--font-mono` ("TRACK 01/02/03" or "COUNTER 0001"), each with a title and text; visually connected on desktop (flex row with connector borders) and stacked on mobile.
* **Testimonials:** 3 quote cards styled as "tape labels" — quote, attribution in mono ("name / role" like credits), a small `.badge` (e.g., "VERIFIED PLAYBACK"), tape-yellow accents; hover elevation per Section 2.2.
* **Pricing:** exactly 3 tiers; the middle tier highlighted (`.badge` "BEST VALUE" in tape-yellow, accent border, `--shadow-lg`, slightly larger on desktop). Each tier: name in display font, price in large mono, feature list with Material check icons, CTA button (`.btn--primary` on the highlighted tier). Pricing CTAs scroll to the Final CTA form.
* **FAQ:** accessible accordion per Section 2.4 with 6+ substantive on-theme Q&As; chevron rotation; consistent initial state (all closed or first open — pick one).
* **Final CTA:** high-impact band on `--color-surface-strong` with scanlines; display heading with chromatic bleed; the newsletter `.input-group` from Section 2.3 with the full state machine (focus, valid, invalid, loading, success) and `aria-live` feedback.
* **Footer:** flex layout wrapping to columns on mobile — brand + one-line description, 2–3 groups of secondary links (pointing to in-page anchors where targets exist), Material Symbol social icons, a mono-font copyright line, and a decorative "EJECT" tape legend using a Material Symbol eject icon. Muted footer text must still pass AA contrast in both themes.
