# CODING PROMPT — BUILD "ICHIGO ICHIE — 一期一会" ZEN LANDING PAGE (Single Attempt)

**Your Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page specified below **in one response, on the first attempt**. Every rule in this document is mandatory unless explicitly marked as an exception clause. Where your habits conflict with this brief, this brief wins.

---

## 0. THEME BRIEF & DESIGN DIRECTION

**0.1 Concept:** ICHIGO ICHIE (一期一会, "one time, one meeting") — the tea-ceremony principle that each moment occurs exactly once. The page must feel like translucent washi paper layered over warm morning light: quiet, airy, precise. Generous breathing room, no saturated fills, and a single vermillion accent used like a hanko seal — tiny, deliberate, rare. Era: 2020s contemporary. Mood keywords to honor: japanese · clock · minimal · zen · glass · translucent · gradient · blur.

**0.2 Palette Mapping (use these exact provided values):**

| Provided value | Role | Token |
|---|---|---|
| `#f6f1e6` | Light-mode canvas (warm washi cream) | `--bg-primary` |
| `#00000005` | Near-invisible black wash → glass card fill | `--glass-tint` |
| `#00000004` | Softer glass wash | `--glass-tint-soft` |
| `#c9bfa86e` | Gold @ 43% → borders, washes, glow source | `--border-default`, glow source |
| `#d8cdb26e` | Sand @ 43% → secondary borders/washes | `--secondary-translucent` |
| `#b03a2e44` | Vermillion @ 27% → accent/error source | `--accent-translucent` |
| `#b03a2e` (solid, derived) | Vermillion accent, error, focus, seal marks | `--text-error`, `--accent` |
| `#c9bfa8` (solid, derived) | Gold — primary buttons | `--primary` |
| `#d8cdb2` (solid, derived) | Sand — secondary accents | `--secondary` |

* Keep all 8-digit alpha-hex values **verbatim** in tokens where translucency is the design intent; derive solid versions (alpha stripped) only where a token must carry text or fills.
* **Translucent tokens may never be used as text colors** and may never be the sole layer beneath text. Glass surfaces must composite to ≥ 4.5:1 against their text color in both themes.

**0.3 Required Visual Effects (all CSS-only):**
* **Glass:** `backdrop-filter: blur(18px) saturate(140%)` (with `-webkit-` prefix) on the nav, all cards, the modal, and the final-CTA panel, using the glass tint tokens.
* **Ambient gradients:** fixed, `filter: blur(80px)` radial washes (gold, sand, vermillion — all at low alpha) drifting slowly behind content, layered at a low `--z` value, `pointer-events: none`.
* **Glow:** soft gold `box-shadow` halos on hover/focus and on the featured pricing tier; halos strengthen in dark mode.
* **Neumorphism:** light mode uses soft dual shadows (dark down-left, light up-right) on the cream canvas for medallions and controls; **dark mode must adapt** to glow + hairline borders, since neumorphic dual shadows do not read on dark backgrounds — this adaptation is mandatory.
* **Grain:** one fixed full-viewport overlay at ≤ 5% opacity using a data-URI SVG `feTurbulence` texture, `pointer-events: none`. **Exception clause:** this data-URI is a decorative texture, not an icon — the "Material Symbols only" rule in 1.6 still applies unchanged.
* **Clock motif:** a pure-CSS zen clock in the hero — thin ring (`aspect-ratio: 1/1`, `border-radius: 50%`, gold hairline), hands built from pseudo-elements with slow `transform: rotate()` keyframes, small center dot. Animation pauses under `prefers-reduced-motion`.
* **Vertical writing:** the kanji 一期一会 appears once as a decorative vertical column (`writing-mode: vertical-rl`) beside the hero headline, `aria-hidden="true"`, hidden below 640px. All functional copy stays horizontal English.

**0.4 Typography & Icons (Google-only):**
* Fonts: **Zen Old Mincho** (display, 400/600/700) and **Zen Kaku Gothic New** (body, 400/500/700) via Google Fonts `<link>` with `preconnect`. Bind to `--font-display` and `--font-base`. Kanji decorations render in `--font-display`. Body ≥ 16px, line-height ≥ 1.6, display sizes fluid via `clamp()`.
* Icons: **Google Material Symbols (Rounded)** stylesheet; every icon is `<span class="material-symbols-rounded" aria-hidden="true">name</span>`. **Raw inline SVGs and local icon files are forbidden.** Use only names that exist in the set (e.g., `hourglass_top`, `self_improvement`, `spa`, `wb_twilight`, `format_quote`, `check`, `close`, `expand_more`, `arrow_forward`, `menu`, `progress_activity`).

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. **The `style="..."` attribute is forbidden anywhere in the HTML**, including `<html>`, `<body>`, and decorative elements. No `<style>` blocks in the HTML.
* All design properties target class or ID selectors. No presentational markup.
* JS adds/removes classes only (`is-open`, `is-loading`, `is-invalid`, `.dark`); it never writes styles. HTML stays clean, semantic, and theme-agnostic — restyling must be achievable by editing `style.css` alone.

**1.2 CSS Variables & Theme Tokens**
Every visual value must be tokenized (no raw hex inside component rules). Define in `:root`:
* **Mandatory:** `--primary` (#c9bfa8), `--secondary` (#d8cdb2), `--bg-primary` (#f6f1e6), `--bg-secondary` (a slightly lighter washi, e.g. #fbf8f0), `--text-primary` (#221f1a sumi ink), `--text-secondary` (#6b6353 taupe — verify ≥ 4.5:1), `--text-success` (#4d7c5c tea green), `--text-error` (#b03a2e), `--border-default` (`#c9bfa86e` verbatim), `--border-error`, `--border-success` (solid ≥ 60% alpha variants).
* **Theme extras:** `--accent` (#b03a2e), `--glass-tint` (#00000005), `--glass-tint-soft` (#00000004), `--secondary-translucent` (#d8cdb26e), `--accent-translucent` (#b03a2e44), `--glow-gold`, `--bg-elevated`, `--font-base`, `--font-display`.
* Where a near-white is needed, use **`#fefefe`, never `#ffffff`**. The light canvas is #f6f1e6 — never drift to pure white.
* **Contrast pairing (mandatory in both themes):** every light background token pairs with a dark text token and vice versa; `--bg-primary` and `--text-primary` must always flip together.
* **Shape & depth:** `--radius-sm: 8px`, `--radius-md: 16px`, `--radius-lg: 28px`, `--shadow-sm`, `--shadow-md` (neumorphic dual shadows in light mode; glow shadows in dark mode).
* **Motion & space:** `--spacing-gap: 1.5rem`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.22, 1, 0.36, 1)`.
* **Stacking:** `--z-dropdown: 100`, `--z-modal: 1000`, `--z-toast: 1100`, plus dedicated low values for ambient layers and grain so decorative layers can never intercept content or conflict with components.

**1.3 Mandatory Dark Mode Support**
* Dark mode ("Ink") must be fully implemented as an equal-quality theme. **Exception clause:** the source spec designates Light as the primary aesthetic — ship light as the default look, but dark mode remains a complete theme, not an afterthought.
* Token strategy: `:root` holds light tokens; `:root.dark` holds dark tokens; `@media (prefers-color-scheme: dark) { :root:not(.dark):not(.light) { …dark tokens… } }` so system preference is honored on first visit while an explicit user choice always wins.
* Dark palette: warm sumi canvas (#161310 or similar), raised `--bg-secondary`, `--text-primary` cream #f6f1e6, `--text-secondary` warm taupe, glass tints inverted to light-at-low-alpha (e.g. `rgba(246,241,230,0.05)`), borders from sand at ~25% alpha, vermillion brightened (e.g. #d4574a) to hold ≥ 4.5:1 where used as text, gold glow strengthened.
* Switching is a pure token swap — **no HTML restructuring**, no second stylesheet.
* **Persistence:** store the choice in `localStorage` (`ichigo-theme`); first visit falls back to `prefers-color-scheme`. A visible header toggle swaps a Material Symbols sun/moon icon, keeps correct `aria-pressed` (true = dark active) and `aria-label` ("Switch to dark theme" / "Switch to light theme").

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build every layout with Flexbox. **Every flex container defaults to `align-items: center`**; any exception (e.g., equal-height pricing cards using `stretch`) must be documented with a CSS comment.
* Mobile-first: base styles are single-column stacked flex; `min-width` breakpoints (640px, 1024px) introduce rows. Use `flex-wrap` so content can never force horizontal scrolling at any width ≥ 320px.
* `html { scroll-behavior: smooth; }` with `scroll-margin-top` on sections to offset the sticky nav; disable smooth scroll under `prefers-reduced-motion`.

**1.5 CSS Approach & Naming Convention**
* **Framework choice: clean custom CSS, no Tailwind.** **Exception clause:** the spec requires hand-tuned `backdrop-filter`, filters, `writing-mode`, and neumorphic shadows, so write plain CSS in `style.css` and pull in no framework or utility CDN. Organize with native `@layer` in this order: `reset`, `tokens`, `base`, `layout`, `components`, `utilities`.
* **One naming convention: BEM** — `block__element--modifier` (`.hero`, `.hero__kanji`, `.card--feature`, `.btn--primary`). Never mix conventions. State classes are the sole allowed non-BEM pattern (`is-*`).
* All component classes map back to CSS variables or generic reusable names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons**
* Google Fonts only (Section 0.4). No system-font stacks as primary identity faces.
* Google Material Symbols Rounded only for icons. **No raw inline SVGs, no local icon files** (the grain data-URI in 0.3 is the single sanctioned exception, and it is a texture, not an icon).

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons (`.btn`, `.btn--primary`, `.btn--ghost`, `.btn--danger`)**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;`, minimum 44×44px touch target, radius and padding from tokens, font-weight 500. Primary = solid gold with ink text; Ghost = transparent with `--border-default` and `--text-primary`; Danger = vermillion treatment, visually distinct from primary in **both** themes.
* **Hover:** brightness/elevation shift + gold glow shadow + `cursor: pointer`, transitioned with `--transition-normal` / `--ease-standard`.
* **Focus:** `:focus-visible` ring built from accent tokens (2px outline, 2px offset) — visible on both themes, never removed; mouse focus is not ringed.
* **Active:** `transform: scale(0.97)`.
* **Loading:** class `is-loading` sets `aria-busy`, disables pointer events (double-click safe), and renders a rotating `progress_activity` Material Symbol or CSS border spinner **without changing button dimensions**.
* **Disabled:** `opacity: 0.5`, greyscale via `filter`, `cursor: not-allowed`, no hover/active transforms.
* **Success/Error:** `.btn--success` / `.btn--error` temporary feedback styles driven by `--text-success` / `--text-error`, used by the Final CTA submit flow.

**2.2 Cards (`.card`, variants: `--feature`, `--step`, `--quote`, `--tier`)**
* **Default:** flex column, `background: var(--glass-tint)` + `backdrop-filter: blur(18px) saturate(140%)`, 1px `--border-default` border, `--radius-lg`, `--shadow-sm` (light) / glow (dark).
* **Hover:** `transform: translateY(-2px)` + glow intensification.
* **Focus-within:** border shifts toward the accent when a child control (link, tier CTA) receives focus.
* **Loading (skeleton):** `.card--skeleton` with a shimmer `@keyframes` gradient sweep and fixed min-heights per placeholder block so layout never jumps — ship it as part of the design system.
* **Empty state:** `.card--empty` fallback — centered Material Symbol in a soft circle + one line of English guidance text.

**2.3 Forms & Inputs (`.input-group` — used by the Final CTA email capture)**
* **Structure:** flex container wrapping a visible `<label>` (tied via `for`), the `.input` field, and a dedicated `.input-group__error` container (`aria-live="polite"`, empty in markup, populated by JS).
* **States via classes:** empty, focus (accent ring via `box-shadow`), filled, valid (`is-valid`: `--border-success` + `check` icon), invalid (`is-invalid`: `--border-error`, vermillion helper text + `error` Material Symbol — **never color alone**), disabled, read-only.
* Client-side validation on blur and submit, English messages, announced via the live region.

**2.4 Modal (`.modal` — triggered by Pricing tier CTAs)**
* **States:** opening, open, loading (spinner while "reserving a seat"), success, error, closing — all animated with 300ms CSS transitions/keyframes in and out.
* **UX:** full-screen flex overlay (`align-items: center; justify-content: center`), blurred semi-transparent backdrop, glass panel at `--z-modal`.
* **Controls:** Material Symbols `close` icon button (44×44px, `aria-label="Close dialog"`); close via Esc, overlay click, and button.
* **A11y:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby`; focus trapped while open; focus returns to the trigger on close; background content made inert; dynamic status in an `aria-live="polite"` region.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid `clamp()` type and spacing; verify zero horizontal overflow at 320 / 768 / 1024 / 1440px.
* **Smooth motion:** every state change transitions via tokens; a `prefers-reduced-motion: reduce` kill-switch disables the clock hands, blob drift, shimmer, hover transforms, and smooth scroll — states must still change instantly.
* **Accessibility (a11y):** AA contrast in both themes; semantic landmarks (`header`, `nav`, `main`, `section[aria-labelledby]`, `footer`); a single `h1` then logical heading order; a "Skip to content" link; full keyboard operability for nav, FAQ, modal, form, and theme toggle; visible focus everywhere; logical DOM/focus order; `aria-live` regions for form errors and modal status. **Never communicate state by color alone** — every error/success/open state pairs color with an icon, text, or shape change.
* **Mandatory visual feedback:** every hover and activation produces a visible change; every submission shows loading, then terminal, feedback.
* **Decorative layers** (gradients, grain, clock, kanji) are `aria-hidden` and `pointer-events: none` — they never intercept interaction or focus.
* **Destructive/danger styling:** vermillion `.btn--danger` must remain clearly distinct from the gold primary in both themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **Files:** `index.html`, `style.css`, `script.js` — complete, final, runnable by opening `index.html`. The only `<script>` in the HTML is one `<script src="script.js" defer></script>`. `<html lang="en">`, viewport meta, descriptive `<title>`, Google Fonts + Material Symbols `<link>`s in `<head>`.
* **script.js scope (nothing more):** theme toggle + persistence; mobile nav toggle; FAQ accordion; modal open/close + focus trap + Esc/overlay close + return focus; pricing CTA loading→modal flow; email validation + `aria-live` feedback + success state; respect `prefers-reduced-motion`. No libraries, no analytics, no dead code.
* **Naming:** BEM only (Section 1.5), one convention, never mixed.
* **Copy:** all user-facing copy in **English**, authored to theme (Section 5). The kanji 一期一会 may appear only as decorative brand marks. **No lorem ipsum anywhere** — write real copy for every section, since no copy was supplied.
* Return full contents of all three files in this one response.

---

## 5. PAGE SECTION BUILD SPECIFICATION (in order)

**5.0 Shell:** skip link → sticky glass `header` → `main` → `footer`. Header nav: brand "ICHIGO ICHIE" + small 一期一会, anchors (Features, How It Works, Testimonials, Pricing, FAQ), theme toggle. Mobile: anchors collapse behind a `menu` icon button (`aria-expanded`, `aria-controls`); panel opens as a flex column, closes on link click and Esc.

**5.1 Hero:** full-bleed, flex column centered, over ambient gradient blobs + grain. CSS clock motif per 0.3. `h1` display headline (e.g., "Every moment happens once."), one supporting sentence, two CTAs: `.btn--primary` "Begin the Practice" and `.btn--ghost` "See the Ritual" (anchor to How It Works). Vertical kanji column 一期一会 (`aria-hidden`) beside the `h1` at ≥ 640px.

**5.2 Features — 3 cards:** section `h2` + one-line lede; flex row of three `.card--feature` (wrap → column on mobile). Each: circular neumorphic medallion with a Material Symbol (suggest `self_improvement`, `spa`, `hourglass_top`), `h3`, ~2 lines of English copy on presence / ritual / impermanence.

**5.3 How It Works — 3 steps:** semantic `ol` flex row (column on mobile); three `li.step`: numbered circle (01/02/03), Material Symbol, `h3`, copy (suggested arc: "Set the space" → "Steep the moment" → "Savor once"). A hairline gold connector joins steps on desktop (pseudo-element) and reflows vertically on mobile.

**5.4 Testimonials:** three `.card--quote`: `format_quote` symbol, English quote, author row — circular avatar (`aspect-ratio: 1/1`, `border-radius: 50%`, gold wash with ink initials), name + role. Flex row → column; natural height variation encouraged.

**5.5 Pricing — 3 tiers:** flex row with `align-items: stretch` (the one documented 1.4 exception). Each `.card--tier`: name, price, one-line descriptor, feature list with `check` icons, CTA `.btn`. Middle tier `.card--tier--featured`: gold glow + vermillion "Most cherished" badge + `scale(1.02)` on desktop only. CTAs enter `.is-loading` (~800ms), then open the reservation modal (2.4) with a "Your seat is being held" success flow.

**5.6 FAQ:** 4–6 items (author real questions, e.g., "What does ichigo ichie mean?", "Do I need any experience?"). Each: `button.faq__question` (`aria-expanded`, `aria-controls`) + `expand_more` chevron + panel (`role="region"`, `aria-labelledby`) animated via the grid-rows or max-height technique; one-open-at-a-time; open state shown by icon rotation + border change (never color alone).

**5.7 Final CTA:** glass panel over a warm gradient wash; `h2` + one line of copy + `.input-group` email capture (2.3): label "Email address", `.btn--primary` "Reserve Your Moment". Submit → loading → inline invalid feedback or success (button morphs to success state with `check`; polite live region announces the welcome copy). No navigation.

**5.8 Footer:** brand block (name, small kanji, one-line philosophy), three secondary link groups (Explore, Company, Resources) inside `nav aria-label="Secondary"`, and a © line. Links have underline hover transitions and visible focus rings. Flex wraps to stacked columns on mobile.

---

## 6. ACCEPTANCE CHECKLIST (verify before submitting)

1. Zero `style="..."` attributes; no `<style>` blocks; single deferred `script.js` reference.
2. Every color, radius, shadow, transition, and z-index reads from a CSS variable; themes flip by tokens only.
3. Dark mode complete, toggleable, persisted, `prefers-color-scheme` fallback, correct `aria-pressed`/`aria-label`.
4. No horizontal scroll at any width; all flex containers default to `align-items: center` (documented exceptions only).
5. All button states present (hover/focus/active/loading/disabled/success/error), min 44×44px, dimensions stable while loading.
6. All card states present (default/hover/focus-within) plus skeleton and empty classes.
7. All input states present with icon + text errors and `aria-live` feedback.
8. Modal animated both directions, closable three ways, focus trapped and restored, `aria-modal` correct.
9. Only Material Symbols Rounded icons (grain data-URI texture is the sole exception); only Zen Old Mincho + Zen Kaku Gothic New.
10. All copy real, English, on-theme; kanji decorative only; no lorem ipsum.
11. `prefers-reduced-motion` honored for clock, drift, shimmer, hover transforms, smooth scroll.
12. BEM throughout; native `@layer` organization; no frameworks.
13. Every interactive element gives visible feedback; nothing relies on color alone; AA contrast in both themes.
