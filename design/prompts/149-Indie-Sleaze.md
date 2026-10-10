# CODING AGENT PROMPT — "INDIE SLEAZE" LANDING PAGE (COMPLETE BUILD, FIRST ATTEMPT)

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce the complete, working code for a single-page Landing Page in one pass, on the first attempt. Do not ask clarifying questions and do not output placeholders — every requirement is defined below. All user-facing copy must be written in **English** (the source specification was Portuguese; translate all labels, keywords, and descriptions to English before use).

**Project:** Marketing landing page for a fictional nightlife photo-sharing app called **FLASHBANG** ("the party photoblog, reborn"). Theme: **Indie Sleaze** — the late-2000s hipster/blog-house party aesthetic (2006–2012, revived 2021): harsh on-camera flash photography, grain, messy taped-collage layouts, neon-on-black grit, ironic hedonistic tone, deliberately lo-fi.

**Sections to build (in order):** Sticky Nav → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. **Forbidden:** any `style="..."` attribute in the HTML.
* All design properties, layout rules, and states are applied exclusively via class/ID selectors.
* HTML stays semantic and style-agnostic: re-theming the page must require editing only `style.css`.
* Decorative effects (grain, tilts, flash glows, highlighter sweeps, dashed connectors) must be built with CSS pseudo-elements and gradients — never by adding extra empty DOM nodes.

**1.2 CSS Variables & Theme Tokens**
Store every visual token in `:root` and theme classes. Use exactly this canonical token block (values come from the approved Indie Sleaze spec; do not invent replacements):

```css
:root {
  /* color — semantic tokens (dark theme is the DEFAULT look) */
  --bg-primary: #0c0c0c;
  --bg-secondary: #161616;
  --bg-tertiary: #1f1f1f;
  --text-primary: #f5f5f2;
  --text-secondary: #b8b3ad;
  --primary: #ff2d9c;        /* hot pink neon */
  --secondary: #ccff00;      /* acid green accent */
  --flash: #ffffff;         /* blown-out flash white */
  --border-default: #3a3a3a;
  --text-success: #ccff00;
  --text-error: #ff5252;     /* distinct from brand pink so errors never read as branding */
  --border-success: #ccff00;
  --border-error: #ff5252;

  /* radius — snapshots have no rounding logic */
  --radius-sm: 1px; --radius-md: 2px; --radius-lg: 3px; --radius-pill: 999px;

  /* shadow — blown-out on-camera flash halos, not soft drop shadows */
  --shadow-sm: 0 0 0 1px rgba(255,255,255,0.08), 0 2px 10px rgba(0,0,0,0.6);
  --shadow-md: 0 0 24px rgba(255,255,255,0.14), 0 8px 24px rgba(0,0,0,0.7);
  --shadow-lg: 0 0 40px rgba(255,255,255,0.18), 0 16px 40px rgba(0,0,0,0.75);

  /* spacing / motion */
  --spacing-gap: 1rem;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --transition-fast: 150ms; --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.3, 0, 0.4, 1);

  /* elevation */
  --z-dropdown: 1000; --z-modal: 2000; --z-toast: 3000;

  /* type — Google Fonts first; system stacks are fallbacks only */
  --font-sans: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'Anton', 'Impact', 'Arial Black', sans-serif;
  --font-mono: 'Space Mono', 'Courier New', ui-monospace, monospace;

  /* signature moves */
  --flash-grain: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>");
  --collage-tilt: rotate(-1.5deg);
  --collage-tilt-alt: rotate(1deg);
}
```

* **Contrast pairing:** every light background token pairs with a dark text token and vice versa, in both themes. The acid green `--secondary` may never be used as small-text color on light backgrounds — in light mode it is a chip/highlight background paired with black text only.
* **Light mode background:** never `#ffffff`; use `#fefefe` and washed print-greys (see 1.3).
* **Validation mandate:** the source spec declares no modes — before finishing, verify every text/background pair in BOTH themes meets WCAG AA (≥ 4.5:1 body text, ≥ 3:1 large text and UI borders); adjust the light-mode pink/green values if any pair fails.

**1.3 Mandatory Dark Mode Support**
* The provided palette IS the dark theme and is the default. Additionally define a full **light theme** as an "overexposed drugstore print" variant under a `.light` class on `<html>` (mirrored under `@media (prefers-color-scheme: light)` for first visit): `--bg-primary: #fefefe`, `--bg-secondary: #f2f0ea`, `--bg-tertiary: #e9e5dd`, `--text-primary: #141414`, `--text-secondary: #57524b`, `--border-default: #c9c3b8`, darkened brand pink for text usage (e.g., `--primary: #c4006e`); keep flash halos and grain (reduce grain opacity to ~0.25 in light mode).
* Theme switching swaps variables only — no HTML restructuring.
* **Persistence:** store the choice in `localStorage` (key `indie-sleaze-theme`); first visit falls back to `prefers-color-scheme`.
* **Toggle:** visible button in the nav with a Google Material Symbols icon (`dark_mode` / `light_mode`), correct `aria-pressed` and an `aria-label` that updates with state.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build every layout structure with Flexbox (`display: flex`).
* Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
* Mobile-first: multi-column rows collapse to single columns on small viewports; **the page must never scroll horizontally** (in-section horizontal scroll-snap carousels are allowed if they clip within their container).
* All interactive targets ≥ 44×44px.

**1.5 Framework & Naming Convention**
* Plain, framework-free custom CSS in `style.css` (no Tailwind build step, no CSS-in-JS).
* **BEM naming only** (`block`, `block__element`, `block--modifier`, e.g., `.btn`, `.btn--primary`, `.card__title`) — one convention across the whole deliverable, never mixed.
* Required reusable generic classes: `.btn`, `.btn--primary`, `.btn--ghost`, `.btn--danger`, `.card`, `.input`, `.badge`, `.nav`, `.section`, `.container`.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load via `<link>` in `<head>`: **Anton** (display), **Archivo** (sans), **Space Mono** (mono), plus **Google Material Symbols** (outlined variant) for all icons.
* Bind them to `--font-display`, `--font-sans`, `--font-mono`. The system fonts from the source stacks (Impact, Helvetica Neue, Courier New) remain as fallbacks only.
* **No raw inline SVGs and no local icon files.** *Explicit exception:* the `--flash-grain` data-URI SVG defined in the tokens is the single permitted SVG — it is a background texture, not an icon.
* Decorative icons get `aria-hidden="true"`; meaningful icons always carry text labels.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

Implement the base component styles from the approved reference CSS (grain on `body`/`.nav`/`.btn`/`.card`, collage tilts, flash-halo shadows, mono/display type), then extend each component with the full state matrix below.

**2.1 Button (`.btn` and variants)**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` display font, uppercase, ≥ 44px height, `transform: var(--collage-tilt-alt)`, grain background, 1px `--border-default`, `--shadow-sm`, `cursor: pointer`.
* **Hover:** straightens (`rotate(0deg) translateY(-1px)`) + `--shadow-md`.
* **Focus:** distinct `:focus-visible` ring in acid green (`outline: 2px solid var(--secondary); outline-offset: 2px`).
* **Active/Pressed:** `rotate(0deg) translateY(0)` + `--shadow-sm`.
* **Loading:** `[aria-busy="true"]` / `.btn--loading` disables interaction (prevents double submits) and swaps the label for a rotating Material Symbol (`progress`) or CSS spinner without changing button dimensions.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`, no tilt.
* **Success/Error:** temporary feedback classes tinted by `--text-success` / `--text-error`, always paired with an icon + text (never color alone).
* **Danger (`.btn--danger`):** visually distinct in both themes via `--text-error` / `--border-error`.

**2.2 Card (`.card`)**
* **Default:** flexbox column, `--bg-secondary` + grain, 1px `--border-default`, `--radius-md`, `--shadow-md`, `transform: var(--collage-tilt)`; alternate siblings use `--collage-tilt-alt` for the taped-collage mess.
* **Hover:** straightens to `rotate(0deg) translateY(-2px)` + `--shadow-lg`.
* **Focus-within:** border shifts to `--primary` when a child link/button receives focus.
* **Loading (Skeleton):** `.card--skeleton` shimmer (CSS gradient animation) that preserves final dimensions — no layout jump.
* **Empty state:** fallback layout with a Material Symbol, a mono caption, and clear guidance text.

**2.3 Form & Input (`.input-group`, `.input`)**
* Structure: flex `.input-group` wrapping a `<label>`, the field, and a dedicated error/feedback container.
* States via classes/attributes: empty, focused (pink ring: `box-shadow: 0 0 0 3px rgba(255,45,156,0.3)`), filled, valid (`--border-success` + check icon), invalid (`--border-error`, error icon, error message in an `aria-live="polite"` container), disabled, read-only.
* Placeholder color `--text-secondary`; full-width inputs use `box-sizing: border-box`.

**2.4 Modal / Popup (`.modal`)**
* Used for the Pricing "Start now" action: a lightweight signup modal (email input + submit).
* **States:** opening, open, loading, success/error, closing — all animated via CSS transitions (`var(--transition-normal)`).
* **UX:** fixed overlay, flex-centered (`align-items: center`), grainy dark backdrop, close button with Material Symbol `close`, focus trapped while open, focus returns to the trigger on close, closes on `Esc` and backdrop click, `role="dialog"` + `aria-modal="true"` + labelled title, z-index `--z-modal`.

**2.5 Accordion (FAQ)**
* Button-triggered panels: `aria-expanded`, `aria-controls`, Material Symbol `expand_more` rotating 180° when open, CSS-animated height, fully keyboard operable.

**2.6 Toast (`.toast`)**
* For form success/error feedback: fixed region, `role="status"` / `aria-live="polite"`, z-index `--z-toast`, auto-dismiss, colored edge + icon + text (never color alone).

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid `clamp()` type scale, flex-wrap layouts, zero horizontal overflow.
* **Smooth animations:** `transition: var(--transition-normal)` on all state changes; **respect `prefers-reduced-motion`** — disable the marquee, tilts, transforms, shimmer, and smooth scrolling when set.
* **Accessibility (a11y):** skip-to-content link; semantic landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`); exactly one `<h1>`; logical heading order; full keyboard operability (no mouse-only interactions); visible `:focus-visible` styles everywhere; never rely on color alone to communicate state; AA contrast in both themes; `aria-live` regions for all dynamic feedback.
* **Mandatory visual feedback:** every click, hover, focus, and submission produces a visible state change.
* **Destructive actions:** `.btn--danger` must be visually distinct in both light and dark themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* Exactly three files: `index.html`, `style.css`, `script.js`. The only script tag is one deferred `<script src="script.js" defer></script>` before `</body>` — no inline `<script>` blocks, no inline styles.
* `script.js` (vanilla, no libraries) handles: theme toggle + `localStorage` persistence + `prefers-color-scheme` fallback; mobile nav; smooth anchor scrolling (reduced-motion aware); FAQ accordion; modal open/close + focus trap; email validation + loading/success states + toast.
* BEM naming throughout; no mixed conventions.
* **No lorem ipsum.** Write real, on-theme English copy for every section (see §7).
* Output the complete code for all three files in one response, immediately, on the first attempt.

---

## 5. THEME DIRECTION — "INDIE SLEAZE" AESTHETIC RULES

Translate these mandatory aesthetic moves into CSS only (no extra DOM):

* **Harsh on-camera flash:** all elevation uses the white flash-halo `--shadow-*` tokens; Hero and Final CTA get a radial `--flash` glow (blown-out flash blowout) behind the headline.
* **Grain everywhere:** `--flash-grain` overlay on `body`, `.nav`, `.card`, `.btn`, and testimonial polaroids — the whole page must feel shot on a point-and-shoot at 1 AM.
* **Taped collage:** crooked tilts (`--collage-tilt` / `--collage-tilt-alt`) on cards, buttons, and polaroids; elements straighten on hover/focus.
* **Neon-on-black:** hot pink `--primary` and acid green `--secondary` against near-black; acid-green highlighter sweep behind one key display word (CSS background on the text, not extra elements).
* **Lo-fi details:** Space Mono for timestamps, captions, kickers, and numbering; dashed borders like cut tape on step connectors; uppercase Anton headlines with tight tracking.
* **Ironic, hedonistic tone:** copy winks at blog-house culture (flash photography, party photoblogs, American Apparel-era fashion, MySpace-era internet) without naming real brands.
* **Marquee ticker:** a CSS-animated scrolling strip of party phrases under the Hero (e.g., "ONE MORE SONG", "EVERYONE'S A DJ", "NO CAMERA, NO ENTRY", "SEE YOU AT 2 AM"); duplicate loop content is `aria-hidden="true"`; animation paused under reduced motion.

---

## 6. PAGE STRUCTURE — SECTION-BY-SECTION SPEC

1. **Sticky Nav (`.nav`):** flex, `align-items: center`; FLASHBANG wordmark in display font; anchor links (Features, How It Works, Testimonials, Pricing, FAQ); theme toggle; primary CTA button. Mobile: Material Symbol `menu` toggles a dropdown panel (`--z-dropdown`, `aria-expanded`, closes on `Esc`/link click).
2. **Hero:** `.badge` (acid green, e.g., "EST. 2008 · REVIVED 2021"); giant uppercase `<h1>` with an acid-green highlight on one word; subcopy in `--text-secondary`; two CTAs (`.btn--primary` + `.btn--ghost`); mono caption ("shot on a point-and-shoot, 1:47 AM"); flash-blowout glow + grain; marquee ticker at the bottom.
3. **Features — 3 `.card`s:** mono kicker + display `<h2>`; each card: Material Symbol in a flash-halo chip, `<h3>`, copy, mono tag; alternating tilts; hover/focus-within per §2.2.
4. **How It Works — 3 steps:** mono numbers `01 / 02 / 03`, display step titles, short copy; desktop 3-column flex row, mobile single column joined by a dashed CSS connector.
5. **Testimonials:** 3–4 polaroid cards — light frame, thick bottom caption area, alternating tilts, Space Mono caption with name, handle, and timestamp; photo area uses seeded `https://picsum.photos` images with descriptive `alt` text (or a CSS gradient + grain placeholder if images are omitted); horizontal scroll-snap on mobile, wrapped flex row on desktop.
6. **Pricing — 3 tiers:** three `.card`s; middle tier featured with `.badge` "MOST WANTED", opposite tilt, `--shadow-lg`; tier names, big display prices + mono suffix, feature lists with Material Symbol `check`, one `.btn` per tier; featured tier uses `.btn--primary`; every tier CTA opens the signup modal (§2.4).
7. **FAQ:** 5–6 ironic-but-informative questions using the §2.5 accordion; mono numbering (`Q.01`…).
8. **Final CTA:** full-width flash-blowout section; display headline; email `.input-group` per §2.3; submit runs loading → success state + toast; inline validation errors announced via `aria-live`.
9. **Footer:** flex columns — brand blurb, secondary link groups (Product, Company, Legal), social links as text or generic Material Symbols with descriptive `aria-label`s (no brand SVGs); mono copyright line with an ironic sign-off.

---

## 7. CONTENT & COPY RULES

* **All user-facing copy in English.**
* Tone: ironic, hedonistic, lo-fi, confident — blog-house party energy, never corporate.
* Write real copy for every heading, button, card, step, testimonial, tier, FAQ answer, and footer link. No lorem ipsum, no "TBD", no empty sections.
