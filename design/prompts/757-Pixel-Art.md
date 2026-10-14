# SYSTEM PROMPT — BUILD A "PIXEL ARCADE" LANDING PAGE (1980s NES Aesthetic)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Produce a complete, production-ready **Pixel Art themed Landing Page** (retro, 8-bit/16-bit, 1980s arcade, blocky, nostalgic) on the first attempt. The page promotes a fictional retro-game-creation product — invent one coherent brand name (in the spirit of "PIXELFORGE") and use it consistently. **All user-facing copy must be written in English**, in an authentic arcade voice. No lorem ipsum.

**Sections to build, in order:** Site Header (HUD bar), Hero, Marquee Strip, Features (3 cards), How It Works (3 steps), Testimonials (3 quotes), Pricing (3 tiers), FAQ (accordion), Final CTA (newsletter form), Footer (secondary links).

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in a dedicated `style.css`. The `style="..."` attribute is **forbidden** anywhere in the HTML. Target everything via class/ID selectors.
- HTML must remain semantic and presentation-agnostic (`header`, `nav`, `main`, `section`, `footer`, `details`, `form`) so the theme can be changed by editing CSS only.
- No presentational attributes (`bgcolor`, `align`, etc.). Structure and copy only in markup.

**1.2 CSS Variables & Theme Tokens (Pixel Art Palette)**
Define all tokens in `:root` (light default), override for dark mode (see 1.3). Use exactly these names, with these recommended starting values — then **verify every text/background pair achieves WCAG AA ≥ 4.5:1 in BOTH themes** and darken/lighten any failing value:

```css
:root {
  /* Typography */
  --font-display: 'Press Start 2P', 'VT323', monospace;   /* headings, buttons, prices, nav */
  --font-base: 'VT323', monospace;                        /* body, forms, FAQ answers (min 18px) */

  /* Color — Light Mode (arcade cream, never pure white) */
  --primary: #0058f8;            /* NES blue   */  --primary-contrast: #fefefe;
  --secondary: #f8b800;          /* NES yellow */  --secondary-contrast: #121212;
  --accent-red: #d82800; --accent-green: #00a800; --accent-cyan: #3cbcfc;
  --bg-primary: #f2ecdc;         /* arcade cabinet cream */
  --bg-secondary: #fefefe;       /* card/panel surfaces */
  --bg-invert: #121212;          /* footer/inverted bars */ --text-invert: #f2ecdc;
  --text-primary: #121212;  --text-secondary: #4f4a3d;
  --text-success: #0b6b0b;  --text-error: #b71c1c;
  --border-default: #121212; --border-success: #0b6b0b; --border-error: #b71c1c;
  --pixel-outline: #121212;      /* hard outline color */
  --pixel-shadow: #121212;      /* hard offset shadow color */

  /* Shape, elevation, motion, stacking */
  --radius-sm: 0; --radius-md: 0; --radius-lg: 0;
  --shadow-sm: 2px 2px 0 0 var(--pixel-shadow);
  --shadow-md: 4px 4px 0 0 var(--pixel-shadow);
  --spacing-gap: 1rem; /* ALL spacing/padding/sizes must sit on a 4px/8px grid */
  --transition-fast: 60ms; --transition-normal: 120ms; --ease-standard: linear;
  --z-scanlines: 80; --z-header: 90; --z-dropdown: 100; --z-modal: 200; --z-toast: 300;
}
```

Dark mode overrides (under both `.dark` and the media query in 1.3): `--primary: #3cbcfc; --primary-contrast: #121212; --bg-primary: #12121e; --bg-secondary: #1f1f33; --bg-invert: #fefefe; --text-invert: #12121e; --text-primary: #f8f8f8; --text-secondary: #a8a8c0; --text-success: #58d854; --text-error: #fc7460; --border-default: #e8e8f0; --border-success: #58d854; --border-error: #fc7460; --pixel-outline: #f0f0f0; --pixel-shadow: #000000;`

- **Contrast Pairing (mandatory in every theme):** any light background token pairs with a dark text token and vice versa — including `--primary`/`--primary-contrast`, `--secondary`/`--secondary-contrast`, and the inverted footer pair.
- **Theme exception clauses (rules kept, values adapted):** the radius and shadow tokens remain defined as required, but radius values are **0** (sharp pixel edges) and shadows are **hard-edged with 0 blur** (`4px 4px 0 0`), per the theme's `box-shadow: 4px 0 0 #000` spec. Pixel borders must be built from solid `border` (3–4px) plus stacked `box-shadow` layers — never `border-radius`.
- Apply `image-rendering: pixelated` (with `crisp-edges` fallback) to any raster imagery, and `-webkit-font-smoothing: none` on `--font-display` text (best-effort anti-aliasing removal per theme spec).

**1.3 Mandatory Dark Mode Support**
- Dark tokens apply via `@media (prefers-color-scheme: dark)` (native, no-flash default) AND via a `.dark` class on `<html>` for manual override, with a `.light` class to force light. Theme switching must require **zero HTML restructuring** — only variable values change.
- Provide a visible **pixel-styled theme toggle button** in the header using Material Symbols `dark_mode` / `light_mode`, with correct `aria-pressed` and `aria-label` ("Switch to dark mode" / "Switch to light mode").
- Persist the user's choice in `localStorage` (key `theme`); fall back to `prefers-color-scheme` on first visit. Logic lives in `script.js` (deferred) — **no inline bootstrap scripts**.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout with Flexbox (`display: flex` / Tailwind flex utilities). **Every flex container defaults to `align-items: center`** unless an exception is explicitly justified. Permitted exceptions (each must be listed in a comment block at the top of `style.css`): equal-height card/pricing rows (`items-stretch`) and stacked form/input groups.
- Mobile-first: rows of cards, steps, and form fields collapse to `flex-direction: column` below 768px. **No horizontal scrolling at any viewport width** (test 320px). Use fluid `clamp()` typography.
- Sticky header must not cover anchors: set `scroll-margin-top` on sections and `scroll-behavior: smooth` (disabled under `prefers-reduced-motion`).

**1.5 Framework & Utility Layer**
- Use **Tailwind CSS via the Play CDN** (`<script src="https://cdn.tailwindcss.com"></script>` in `<head>`, with no inline `tailwind.config` script) — this CDN reference plus the single deferred `script.js` are the **only** permitted `<script>` tags.
- Tailwind utilities are for **layout only** (`flex`, `items-center`, `justify-between`, `gap-*`, `flex-col md:flex-row`, `max-w-*`, `px-*`). **Forbidden:** Tailwind color, `rounded-*`, and `shadow-*` utilities — those bypass theme tokens.
- All visual identity lives in `style.css` as reusable component classes (`.btn`, `.card`, `.input-group`, `.pricing-card`, etc.), every one mapped back to the CSS variables above.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load **Press Start 2P** (display: headings, buttons, prices, nav — never below 12px, uppercase) and **VT323** (base: body copy, forms, FAQ answers — never below 18px) via Google Fonts `<link>` tags with `preconnect`. Bind them to `--font-display` and `--font-base`.
- Icons: **Google Material Symbols (Outlined, FILL 1)** loaded via the official stylesheet. **Raw inline SVGs and local icon files are forbidden.** Wrap icons in blocky bordered chips so they sit naturally in the pixel frame.
- Decorative pixel art (sprites, hearts, coins, dithering, starfields) must be **drawn with pure CSS** — box-shadow pixel grids and repeating/conic gradients — never SVG or raster files.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button (`.btn`, variants `--primary`, `--secondary`, `--ghost`, `--danger`)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px (use min-height 48px), `--font-display` 12px, 3–4px solid `--pixel-outline` border, hard offset shadow `var(--shadow-md)`, zero radius.
- **Hover:** brightened fill or lighter token swap + shadow grows to 6px 6px 0; `cursor: pointer`.
- **Focus-visible:** distinct 3px solid outline (use `--accent-cyan`) with 3px offset — never remove focus rings.
- **Active/pressed:** `transform: translate(2px, 2px)` and shadow collapses to 0 (pressed-in effect). **Exception clause:** the mandatory pressed feedback is implemented as translate + shadow collapse instead of `scale(0.97)` to preserve the pixel grid.
- **Loading (`.is-loading`):** disabled, double-click proof (`pointer-events: none`, `aria-busy="true"`), label swapped for a CSS pixel spinner built with `steps()` timing; fixed `min-width` so dimensions never distort.
- **Disabled:** `opacity: 0.5; filter: grayscale(1); cursor: not-allowed;` shadow removed.
- **Success/Error (`.is-success` / `.is-error`):** temporary fill flash using `--accent-green` / `--accent-red` **plus** an icon and an `aria-live` message — never color alone.

**2.2 Card (`.card`, variants `--featured`, `--skeleton`, `--empty`)**
- **Default:** flex column, `var(--spacing-gap)` gaps, `--bg-secondary` fill, 4px pixel outline, hard shadow, padding on the 4/8px grid.
- **Hover (interactive cards only):** `transform: translateY(-4px)` and shadow grows to 6px.
- **Focus-within:** outline color shifts to `--primary` when a child link/button is focused.
- **Skeleton (`.card--skeleton`):** blocky placeholder rectangles with a **step-based shimmer** (`steps()` opacity keyframes — no smooth fades), sized to match real content so layout never jumps. Define it even though the page loads statically.
- **Empty (`.card--empty`):** centered Material icon (e.g., `videogame_asset`) + short guidance text.

**2.3 Form & Input (`.input-group`, `.input`, `.input__error`)**
- Structure: flex column wrapping a visible `<label>` (VT323), the input, and a dedicated error message container.
- Style all states via classes: **empty, focused** (3px `--primary` outline + offset pixel ring), **filled, valid (`.is-valid`: `--border-success`, check icon, success text), invalid (`.is-invalid`: `--border-error`, `--text-error` message with error icon, `aria-invalid="true"`, error linked via `aria-describedby`), disabled, read-only.**
- Inputs: `--bg-secondary` fill, 4px pixel border, VT323 20px, height 48px, zero radius.

**2.4 FAQ Accordion — No Modals in This Build**
- Use native `<details class="faq__item">` / `<summary>` (keyboard-accessible by default). Summary = full-width blocky bar, flex `items-center justify-between`, question in Press Start 2P 12–14px, trailing Material `add` icon that jumps to a 45° rotation when open (**instant**, no transition — on-theme).
- `details[open]` gets an accent outline; `summary:focus-visible` gets the standard pixel ring.
- **Do not add any modal or popup dialog — none was requested.** If one ever becomes necessary, it must follow: centered flex overlay with backdrop, Material icon close button, Esc and overlay-click close, and focus trapping.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid sizing, `clamp()` typography, flex-wrap grids; verify 320px / 768px / 1024px / 1440px with zero horizontal overflow.
- **Animation — Pixel Art exception clause:** the transition tokens and `prefers-reduced-motion` respect rule stand, but per the theme's "instant transitions" directive all durations clamp to ≤ 120ms `linear`, color/fill swaps may be **0s (instant)**, and every looping effect uses **`steps()` timing** (frame-by-frame). Under `prefers-reduced-motion: reduce`: blinking cursor becomes static, marquee becomes static centered text, sprite animations pause.
- **Mandatory signature effects:** (a) blinking block cursor after the H1 (`steps(2)` 1s infinite); (b) blinking "PRESS START" prompt in the hero; (c) at least one CSS-drawn sprite with ≥ 2 frame-by-frame frames animated via `steps(1, end)` keyframes; (d) full-width scrolling **marquee strip** ("INSERT COIN ★ PRESS START ★ HIGH SCORE ★ 1UP…") — track content duplicated with the duplicate `aria-hidden="true"`, `animation-play-state: paused` on hover/focus; (e) optional CRT scanline overlay (fixed, `pointer-events: none`, ≤ 5% black repeating gradient, `z-index: var(--z-scanlines)`).
- **Accessibility (a11y):** semantic landmarks; exactly one `<h1>` then logical h2/h3 order; skip-to-content link as the first focusable element; full keyboard operability (menu, accordion, form, toggle); `aria-live="polite"` regions for form feedback and loading states; AA contrast in **both** modes; never color-only state communication (always icon + text); touch targets ≥ 44px; `lang="en"`; all decorative sprites and marquee duplicates `aria-hidden`.
- **Mandatory visual feedback:** every hover, focus, and click on any interactive element produces a visible state change; nav/footer links get a pixel highlight or underline on hover.
- **Destructive actions:** none exist on this page, but still define `.btn--danger` (error-red fill, black outline, distinct in both themes) for consistency.

---

## 4. PAGE SECTION SPECIFICATIONS

**4.1 Site Header (HUD bar):** sticky, `--bg-secondary`, 4px pixel bottom border, `z-index: var(--z-header)`. Flex `items-center justify-between`: brand wordmark (Press Start 2P), anchor nav (Features, How It Works, Pricing, FAQ), theme toggle, small `.btn--primary` "Start". Below 768px: nav links hide behind a Material `menu` button toggling a dropdown panel (`--z-dropdown`, flex column `items-center`) — JS toggles `aria-expanded`/`aria-controls`, closes on Escape and outside click, moves focus into the panel.

**4.2 Hero:** full-viewport-feel section (`min-height: calc(100vh - 64px)`), flex column `items-center`, centered text. Background: light mode = cream with a subtle dithered band (conic-gradient checkerboard); dark mode = deep navy with a CSS starfield (radial-gradient dots on an 8px grid). Kicker line ("★ NEW GAME ★"), H1 in Press Start 2P (`clamp(1.5rem, 5vw, 3rem)`) ending in the **blinking block cursor**, VT323 subhead, CTA pair (`.btn--primary` "Press Start" + `.btn--secondary` anchor "Explore Features"), blinking "PRESS START" prompt below, and one animated CSS pixel sprite (coin, heart, or starship — `aria-hidden`).

**4.3 Marquee Strip:** black bar, Press Start 2P yellow text, scrolling per Section 3 rules; placed between Hero and Features (may repeat before the footer).

**4.4 Features (3 cards):** section heading + VT323 intro, then a flex row (→ column on mobile) of 3 `.card`s: bordered icon chip with a Material Symbol, Press Start 2P title (≤ 16px), VT323 body, optional pixel badge ("NEW" / "1UP"). Copy topics must be coherent with the fictional product.

**4.5 How It Works (3 steps):** three flex-column steps labeled **LEVEL 1 / LEVEL 2 / LEVEL 3** (number plate in Press Start 2P inside a bordered square), Material icon, h3 title, VT323 text. Connect steps with a dashed pixel line (repeating-linear-gradient) — horizontal on desktop, vertical on mobile.

**4.6 Testimonials (3 quotes):** flex-wrap row of quote cards, each with a blocky avatar square (CSS dither fill or Material `person` icon), VT323 quote, name in Press Start 2P 12px, role in VT323 `--text-secondary`, and a 5-star row of Material `star` icons with visually-hidden text "Rated 5 out of 5 stars" (never color-only).

**4.7 Pricing (3 tiers):** flex row `items-stretch` (equal heights; comment the exception), column on mobile. Each tier: name (Press Start 2P), large price (Press Start 2P) + "/month" (VT323), 4–6 feature lines with Material `check` icons in `--text-success`, and a CTA (`.btn--primary` on the featured tier, `.btn--secondary` on the others). The **middle tier is `--featured`**: extra 4px accent outline, "MOST POPULAR" pixel badge, larger padding — no scaling transforms.

**4.8 FAQ:** max-width 720px container; 5–6 native `<details>` items (Section 2.4) with real Q&A copy about the fictional product.

**4.9 Final CTA:** full-width blocky panel filled with `--primary` and `--primary-contrast` text (pairing enforced). Newsletter form: flex row (column on mobile) with a visible email label, `.input` (48px height), and a `.btn` "Start Playing". Behavior: `script.js` validates the email (regex), shows inline error via `aria-describedby` + `aria-live`, sets the button to `.is-loading` (simulated ~1.2s), then flips to `.is-success` with a confirmation message ("READY PLAYER ONE — check your inbox") or `.is-error` — never color alone.

**4.10 Footer:** inverted bar (`--bg-invert` / `--text-invert`, contrast-paired). Flex-wrap layout: brand + one-line tagline, three secondary link columns (Product / Company / Support), a social row of Material icon buttons each with `aria-label`, and a bottom flex bar with copyright (auto-updating year) plus Privacy/Terms links. Pixel dashed divider above the bottom bar.

---

## 5. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` — delivered in full in one response. The only permitted `<script>` tags are the Tailwind CDN reference in `<head>` and a single `<script src="script.js" defer></script>`.
- **Naming convention (never mix):** Tailwind's fixed utility set for layout only + BEM (`block__element--modifier`) for every component class in `style.css`. No ad-hoc class names.
- **`script.js` scope only:** theme toggle + `localStorage` persistence; mobile menu (aria-expanded, Escape, outside click); newsletter validation/loading/success/error flow with `aria-live`; footer year. No libraries, no other behavioral code.
- **Copy:** real English arcade-voice copy everywhere — no lorem ipsum, no unrequested placeholders (the brand name and product copy are yours to write, since they were unspecified).
- **Definition of Done checklist:** zero `style=` attributes; zero inline script blocks; light + dark both pass AA contrast; every button/input state from Sections 2.1–2.3 exists in CSS; keyboard-only pass (tab, enter, escape) works end to end; no horizontal scroll at 320px; `prefers-reduced-motion` neutralizes all loops; theme choice survives reload; all decorative elements `aria-hidden`; all icons from Material Symbols; all fonts from Google Fonts.
- Output the three complete files now, in one response.
