# SYSTEM PROMPT — BUILD THE "REPLICATE BLAZE GALLERY" LANDING PAGE

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce a complete, production-quality landing page on the first attempt — output the final code immediately, fully resolved, with no follow-up questions.

**Project:** `blaze` — a fictional AI model playground and developer community (Replicate-inspired, 2024–2026 era). Output category: **Dark Tech & Cyber** — deliver the dark-tech tone through near-black surfaces (#202020 / GitHub Dark #24292e), terminal-style monospace details, and inverse dark panels inside a light-first page.

**Required sections (in this exact order):** Hero (with AI model gallery strip), Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Design DNA (non-negotiable):**

- Explosive hero gradient: orange → red → magenta → pink, anchored on **#ea2804**.
- Massive display typography up to **128px**, weight **700–900**.
- **Exclusively pill geometry (`border-radius: 9999px`) on EVERYTHING** — buttons, cards, badges, inputs, avatars, code panels, images, and the final CTA panel.
- High-contrast near-black **#202020** and white palette.
- AI model gallery with generated imagery.
- Dotted-underline links.
- Green status badges (**#2b9a66**).
- Closing manifesto — **"imagine what you can build"** — rendered up to 128px, lowercase.
- Lowercase tags, badges, buttons, and nav links (`text-transform: lowercase`).
- All user-facing copy in **English**.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS

- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML. Zero exceptions.
- **Class/ID Selectors Only:** Every color, layout rule, state, and effect lives in `style.css`, targeted via class or ID selectors.
- **Minimal HTML Modifications:** HTML stays clean, semantic (header/nav/main/section/footer, h1–h3 hierarchy, button/a/img with alt text), and visually agnostic — re-theming the entire site must only require editing `style.css`.
- **No Inline JS:** No `onclick`/`on*` attributes; all behavior is bound with `addEventListener` inside `script.js`.

### 1.2 CSS Variables & Theme Tokens

Store every visual token in `:root` (light default) and override under `.dark` (and `@media (prefers-color-scheme: dark)` for the no-JS fallback). Required token set:

```css
:root {
  /* color */
  --primary: #ea2804;            /* brand red — large text, borders, fills, UI */
  --primary-strong: #c11a00;     /* AA-safe red for small text on light bg */
  --secondary: #dd4425;
  --bg-primary: #fefefe;         /* page background */
  --bg-secondary: #ffffff;       /* high-contrast surfaces: cards, pills */
  --bg-inverse: #202020;         /* dark panels: code, final CTA, footer */
  --bg-inverse-2: #24292e;      /* github dark — terminal/code surfaces */
  --text-primary: #202020;
  --text-secondary: #646464;
  --text-inverse: #ffffff;
  --text-success: #1e7f52;       /* AA-safe green for small text on light bg */
  --status-green: #2b9a66;      /* status dots, badges, icons, borders */
  --text-error: #c11a00;
  --border-default: rgba(32, 32, 32, 0.14);
  --border-error: #ea2804;
  --border-success: #2b9a66;
  --silver: #bbbbbb;

  /* explosive gradient — large display text only (all stops ≥ 3:1 on both themes) */
  --gradient-blaze: linear-gradient(92deg, #ea2804 0%, #dd4425 32%, #d6168a 66%, #ff4d9d 100%);

  /* radius — the all-pill mandate collapses every radius token to pill */
  --radius-sm: 9999px; --radius-md: 9999px; --radius-lg: 9999px; --radius-pill: 9999px;

  /* elevation */
  --shadow-sm: 0 2px 10px rgba(32, 32, 32, 0.08);
  --shadow-md: 0 12px 32px rgba(32, 32, 32, 0.14);
  --shadow-blaze: 0 16px 48px rgba(234, 40, 4, 0.28);   /* gradient glow */

  /* motion & space */
  --spacing-gap: 1.5rem;
  --transition-fast: 140ms; --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* stacking */
  --z-dropdown: 100; --z-modal: 1000; --z-toast: 1100;

  /* type */
  --font-display: "Archivo", system-ui, sans-serif;   /* weights 700–900 */
  --font-base: "Inter", system-ui, sans-serif;
  --font-code: "JetBrains Mono", monospace;
  --size-display-max: 128px;   /* no text may exceed this */
}
```

- **Dark overrides (`.dark`):** `--bg-primary: #202020; --bg-secondary: #24292e; --bg-inverse: #fefefe; --bg-inverse-2: #17191d; --text-primary: #fefefe; --text-secondary: #bbbbbb; --text-inverse: #202020; --text-success: #2b9a66; --text-error: #ff5a3c; --primary-strong: #ff5a3c; --border-default: rgba(255,255,255,0.16); --border-error: #ff5a3c;` plus deeper shadows (`rgba(0,0,0,0.4/0.5)`).
- **Contrast Pairing:** Every light background token pairs with a dark text token and every dark background token pairs with a light text token — enforced in both themes, no exceptions.
- **Contrast-safe reds/greens:** `#ea2804` and `#2b9a66` are reserved for large text (≥ 24px / 18.66px bold), icons, borders, and fills; small red/green text uses `--primary-strong` / `--text-success` per theme as defined above.
- **Exception (pure white):** The source palette explicitly brands `#ffffff` — keep it as the `--bg-secondary` surface token, while the page background stays `#fefefe` per the no-pure-white-default rule.
- **Pill scope:** The 9999px mandate applies to every component, control, card, badge, image, and panel. Full-bleed page surfaces (the canvas, header bar, footer band) are the only elements exempt; any inset container within them is a pill.

### 1.3 Mandatory Dark Mode Support

- **Implementation:** Dark tokens must exist under both a `.dark` class on `<html>` and `@media (prefers-color-scheme: dark)` (applied when no class is set). Background/text variables must flip seamlessly with zero HTML restructuring.
- **Persistence:** `script.js` reads `localStorage` (key `"blaze-theme"`); if absent, fall back to `prefers-color-scheme` on first visit. A visible pill icon-button toggle in the header (Material Symbols `light_mode` / `dark_mode`) must reflect state via `aria-pressed` and a descriptive `aria-label` ("toggle dark mode").
- **Exception (source spec):** The source spec marks dark mode "Not Recommended" — it remains mandatory here; ship light mode as the default presentation and dark mode as a fully supported, persisted, toggleable theme.

### 1.4 Flexbox Layout & Mobile-First Alignment

- **Flexbox only** for all layout structure (`display: flex` / grid only where a card grid genuinely needs it — otherwise flex with `flex-wrap`).
- **Default Alignment Rule:** Every flex container defaults to `align-items: center` unless an explicitly justified exception is documented in a CSS comment.
- **Mobile-first:** Rows collapse to columns below ~768px; no horizontal page overflow at any viewport (the hero gallery strip may use intentional, contained `overflow-x: auto` + `scroll-snap`).
- **Fluid display type:** All 128px display text uses `clamp()` (e.g., `clamp(2.75rem, 9vw, 128px)`) so it never overflows.

### 1.5 Framework Default & Tailwind CSS Integration

- Use clean, modern custom CSS in `style.css` (custom properties, flexbox, `clamp()`), optionally organized with `@layer` — no build step. If you include Tailwind, every utility must map back to the CSS variables above and to generic reusable classes (`.btn`, `.card`, `.input-group`, `.badge`, `.tag`).

### 1.6 Typography & Icons (Google Fonts Mandatory)

- **Text:** Load via Google Fonts `<link>` in `<head>`: **Archivo** (weights 700, 800, 900) → `--font-display`; **Inter** (400, 500, 600, 700) → `--font-base`; **JetBrains Mono** (400, 500, 700) → `--font-code`. Fallback stacks include `system-ui, sans-serif` / `monospace` per the source spec.
- **Icons:** Google Material Symbols only (via `<link>` / `@import`). Raw inline SVGs and local icon files are forbidden — including for the logo (the logo is a text wordmark: `blaze` in the display font, lowercase).
- **Exception (source fonts):** The source spec names `rb-freigeist` and `basier-square`, which are not distributed on Google Fonts — substitute the closest Google Fonts equivalents, Archivo (display) and Inter (body); JetBrains Mono is retained for code.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component Requirements

All variants: pill shape, flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`), minimum touch target 44×44px, lowercase labels, transitions on all state changes.

- **Variants:** `.btn-primary` (solid `--bg-inverse` fill with `--text-inverse` text — auto-inverts per theme), `.btn-gradient` (`--gradient-blaze` fill, white text, hero + featured-pricing CTA), `.btn-secondary` (transparent, 1.5px border, text `--text-primary`), `.btn-danger` (solid `--primary` fill, white text, warning icon — visually distinct in both themes), `.btn-ghost`, `.btn-icon` (44×44 circle for close/menu/copy/theme toggle).
- **Hover:** brightness lift and/or `--shadow-md`; `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring (2px `--primary` outline, 2px offset) for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** disables interaction, prevents double-clicks, renders a CSS spinner or rotating Material `progress` icon without changing button dimensions; JS sets `aria-busy="true"`.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** `.is-success` swaps in a green check icon + short label (e.g., "copied") using `--text-success`; `.is-error` uses `--text-error` — always icon + text, never color alone.

### 2.2 Card Component Requirements

`.card` base: pill geometry, `--bg-secondary` fill, 1.5px `--border-default`, generous padding (extra vertical padding so pill ends never clip content), flex column, `gap: var(--spacing-gap)`.

- **Default:** subtle border + `--shadow-sm`.
- **Hover:** `transform: translateY(-2px)` + `--shadow-md` + border shift toward `--primary`.
- **Focus-within:** card border highlights `--primary` when a child link/button receives focus.
- **Loading (Skeleton):** `.skeleton` shimmer keyframes (gradient sweep) on pill-shaped blocks, sized to the final content so there is zero layout jump — used in the modal loading state.
- **Empty State:** `.card--empty` pattern — centered Material icon inside a gradient-tinted circle plus clear guidance text.
- **Subtypes:** `.card--feature`, `.card--step`, `.card--testimonial`, `.card--gallery`, `.card--pricing`, `.card--pricing--featured` (2px gradient border via the padding-box/border-box double-background technique, "most popular" gradient pill badge, `--shadow-blaze`).

### 2.3 Form & Input Requirements

- **Structure:** `.input-group` — flex column, `gap: 0.5rem`, wrapping a visible label, a pill `.input` (min-height 48px, `padding-inline: 1.5rem` so text clears the curve), and a dedicated error container (`<p class="input__error">` with `aria-live="polite"`).
- **States (all CSS-class/selector driven):** empty, focused (border `--primary` + 3px red-tinted ring, never removing the ring without replacement), filled, valid (`--border-success` + inline check icon), invalid (`--border-error` + error icon + text message in `--text-error` — icon and message required, never color alone), disabled (`opacity: 0.5`, `cursor: not-allowed`), read-only (tinted background, `--silver` text).
- **Dark surfaces:** the Final CTA input group sits on the dark panel — white text, `--bg-inverse-2` fill, light borders, per the pairing rule.

### 2.4 Modal / Popup Requirements

Triggered by gallery cards ("open model details").

- **States:** opening (fade + `scale(0.96 → 1)`, ~200ms), open, loading (skeleton shimmer on image/title for ~600ms before content renders), success/error (inline feedback), closing (reverse animation, then hidden).
- **UX:** fixed backdrop (`rgba(32,32,32,0.6)` + `backdrop-filter: blur(4px)`, `z-index: var(--z-modal)`); dialog centered via flex (`align-items: center; justify-content: center`); pill panel, max-width ~640px, max-height 85vh, overflow auto; `.btn-icon` close with Material `close` icon and `aria-label="close dialog"`; `role="dialog"`, `aria-modal="true"`, `aria-labelledby`; keyboard focus trap (Tab/Shift+Tab cycled by JS); close via `Esc` and overlay click; focus returns to the trigger; body scroll locked while open; all animation disabled under `prefers-reduced-motion`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** fluid `clamp()` type scale (display max 128px; h2 ~`clamp(2rem, 5vw, 56px)`), wrapping flex layouts, zero horizontal overflow.
- **Smooth Animations:** `transition: var(--transition-normal)` on every state change; hero gradient blobs may drift slowly (20s+ loop); everything motion-related is disabled under `prefers-reduced-motion`.
- **Accessibility (a11y):** body text ≥ 4.5:1 and large display text ≥ 3:1 in both themes (the derived tokens in 1.2 guarantee this); never color-only state; semantic HTML5 with one `h1` and logical heading order; ARIA roles/labels on the toggle, accordion, modal, and menu; logical DOM/focus order; full keyboard operability; a visually hidden "skip to content" link; `aria-live` regions for form errors, toasts, and loading states; `::selection` styled with `--primary` and white text.
- **Dotted-Underline Links:** `text-decoration: underline dotted; text-decoration-thickness: 1.5px; text-underline-offset: 4px;` — hover/focus shifts color to `--primary` and the underline to solid.
- **Status Badges:** pill, `--status-green` dot + lowercase text label ("live", "running", "all systems operational") — the text label is mandatory.
- **Mandatory Visual Feedback:** every click, hover, focus, and submission produces a visible state change.
- **Destructive Actions:** `.btn-danger` must be defined and visually distinct in both themes (used or not).
- **Optional scroll reveals:** elements are fully visible by default; JS may add a one-time subtle entrance animation only when `prefers-reduced-motion` is unset — content must never remain invisible if JS fails.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** three separate files — `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond the single deferred entry point (`<script src="script.js" defer></script>`). No inline styles. No inline SVGs.
- **Naming Convention:** BEM only, everywhere — `.card__title`, `.card--pricing--featured`, `.hero__title`, `.nav__link`, `.faq__question`. Never mix conventions.
- **Head requirements:** `lang="en"`, viewport meta, title and meta description ("blaze — run any ai model with a single line of code"), Google Fonts links, Material Symbols link.
- **Images:** gallery/imagery via seeded picsum URLs (`https://picsum.photos/seed/<seed>/<w>/<h>`) with descriptive `alt` text — the only permitted placeholder, since imagery was genuinely unspecified.
- **Copy:** all user-facing copy in English, real and specific (see Section 5) — lorem ipsum is prohibited. No emoji. Tags, badges, buttons, nav links, and the manifesto are lowercase; body copy and FAQ answers are sentence case.
- **script.js scope:** theme toggle + persistence, mobile menu, accordion, modal (open/close/trap/Esc), gallery modal population, copy-to-clipboard with success feedback, email form validation with `aria-live` errors, toast region — all via `addEventListener`.

---

## 5. PAGE BLUEPRINT — SECTION-BY-SECTION SPECIFICATIONS

**5.0 Global chrome:** visually hidden skip link; sticky header (light surface, bottom border, backdrop blur) with the `blaze` wordmark, lowercase dotted-underline nav ("models", "pricing", "docs", "faq"), the theme toggle (`.btn-icon`), and a compact `.btn-primary` "start building". On mobile, nav links move into a pill dropdown panel (`--z-dropdown`) toggled by a `.btn-icon` menu button (Esc + click-outside close).

**5.1 Hero:** explosive gradient treatment — large blurred radial blobs (orange/red/magenta/pink, anchored #ea2804) radiating behind the content, decorative and `aria-hidden`. Content: green-dot status pill ("20,000+ models live"); `h1` "run any model. ship anything." at `clamp(2.75rem, 9vw, 128px)`, weight 800, tight leading, with "ship anything." gradient-clipped via `background-clip: text` (display-size text only); supporting sub-copy; CTA row — `.btn-gradient` "start building" (Material `arrow_forward`) + `.btn-secondary` "browse the gallery". Below: a pill terminal card (`--bg-inverse-2`, JetBrains Mono, palette-tinted syntax colors) showing `pip install blaze` / `blaze run flux-schnell --input photo.png`, with a `.btn-icon` copy button that flips to `.is-success` ("copied") and fires a toast. Below that: the **AI model gallery strip** — labeled "trending this week", horizontally scrollable (`scroll-snap`), 5–6 `.card--gallery` items, each a focusable `<button>` with a pill-cropped picsum image, a lowercase mono model name ("flux-schnell", "black-forest-xl", "sdxl-lightning", "kling-video", "whisper-v3", "llama-vision"), and a green "live" badge; hover lifts the card and scales the image; click opens the modal (5.9 pattern).

**5.2 Features (3 cards):** section tag "features" + `h2` "everything you need to ship ai". Three `.card--feature` items, each with a gradient-tinted pill icon chip (Material `bolt` / `tune` / `rocket_launch`), a lowercase tag, an `h3`, and copy: "one-line api" (call any model with a single request — no gpu setup, no docker, no yaml), "fine-tune in minutes" (upload a dataset, get a custom model before your coffee compiles), "deploy anywhere" (turn any run into an autoscaling production endpoint). Full card state set from 2.2.

**5.3 How It Works (3 steps):** tag "how it works" + `h2` "from prompt to production in three steps". Flex row (column on mobile) joined by a decorative dotted connector. Each `.card--step`: oversized gradient-clipped numeral ("01", "02", "03"), `h3`, copy — "pick a model" (browse the gallery or search 20,000+ community models), "run it" (with a mono code line: `blaze run flux-schnell --input prompt.txt`), "ship it" (push to a scalable endpoint with one flag: `--deploy`).

**5.4 Testimonials:** tag "testimonials" + `h2` "the community says it best". Three `.card--testimonial` items: pill-cropped picsum avatar, specific quote, name + role, and a dotted-underline handle link ("@mayabuilds", "@jonasdev", "@samortiz"). Quotes reference concrete outcomes (e.g., replaced a quarter of infra work with one api key; fine-tuning went from ssh and prayer to a form and a coffee; render pipeline 40s → 2s, costs down 80%).

**5.5 Pricing (3 tiers):** tag "pricing" + `h2` "pricing that scales with your curiosity". Three `.card--pricing` items: **hobby** — $0/mo, "for weekend experiments" (10,000 free runs, community models, browser playground, api access; `.btn-secondary` "start free"); **pro** — $19/mo, `.card--pricing--featured` with gradient border + "most popular" gradient badge (unlimited runs, fine-tuning, private models, priority gpu queue, production endpoints; `.btn-gradient` "go pro"); **team** — $99/mo, "for serious deployments" (everything in pro, sso + audit logs, usage analytics, dedicated support; `.btn-primary` "contact us"). Feature lists use Material `check` icons in `--status-green`.

**5.6 FAQ:** tag "faq" + `h2` "questions, answered". Five accessible accordion items (`<button class="faq__question" aria-expanded="false" aria-controls>` + region, rotating Material `expand_more` chevron, CSS height animation): what is blaze?; do i need my own gpu?; can i use models in commercial products?; how does pricing work after the free tier?; can i publish my own model to the gallery?

**5.7 Final CTA:** a giant pill panel (`--bg-inverse` fill, internal gradient glow blobs, mega vertical padding) containing the closing manifesto — **"imagine what you can build"** — lowercase, `clamp(2.75rem, 9vw, 128px)`, weight 800, white with "you can build" gradient-clipped. Below it, the email capture `.input-group` (label "get early access to new models", pill input, `.btn-gradient` "join the waitlist"): on submit the button enters `.is-loading` (~800ms simulated), then `.is-success` ("you're in") with a toast; an invalid email triggers the full invalid state with icon + `aria-live` message.

**5.8 Footer:** `--bg-inverse` band. Top row: `blaze` wordmark, one-liner "the community playground for open-source ai.", green "all systems operational" badge. Four lowercase dotted-underline link columns — product (models, pricing, docs, changelog), resources (blog, community, github, status), company (about, careers, contact, press), legal (privacy, terms, security, licenses) — `href="#"` permitted for these secondary links. Bottom row: "© 2025 blaze labs" + text social links (github, x, discord).

**5.9 Toast:** fixed bottom-center pill, `--z-toast`, `aria-live="polite"`, auto-dismiss ~2.5s, slide-up entrance, reduced-motion aware — used for copy confirmation and form success.

Generate the complete `index.html`, `style.css`, and `script.js` now, in a single pass, conforming to every rule above.
