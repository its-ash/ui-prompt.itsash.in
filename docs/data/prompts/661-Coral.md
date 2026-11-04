# LANDING PAGE BUILD SPECIFICATION — "CORAL" MAGAZINE EDITORIAL THEME

You are a Senior Frontend Engineer and Expert UI Designer. Build a **complete, production-quality landing page in a single attempt** using only the specification below. This is a greenfield build (no existing markup). All user-facing copy must be written in **English**. Follow every rule exactly — where this spec gives a concrete value, use it; where it gives a pattern, follow the pattern.

---

## 1. THEME SPECIFICATION — CORAL

### 1.1 Design Direction
**Warm-graphic magazine editorial, bold, condensed, 2020s design-studio era.** The design is type-led: no stock photography is required — Bebas Neue display typography IS the visual hero. Saturated coral is used sparingly but boldly (buttons, numerals, rules, icon tiles). Sections alternate between near-black full-bleed surfaces and warm cream surfaces to create editorial rhythm. Every display text is uppercase with `letter-spacing: 0.05em`.

### 1.2 Color Palette & Token Mapping

Raw palette → required CSS variables (defined in `:root`):

| Token | Value | Pairing / Usage |
|---|---|---|
| `--primary` | `#E85D5D` (Coral) | Accent: buttons, numerals, rules, icon tiles |
| `--secondary` | `#D44A4A` (Coral Dark) | Hover/pressed accent; coral for icons on light surfaces |
| `--bg-primary` | `#1A1A1A` (Ink) | Default page canvas (near-black) |
| `--bg-secondary` | `#F5F0E8` (Cream) | Alternating section canvas — **must pair with ink text** |
| `--text-primary` | `#F5F0E8` | Cream text — pairs with `--bg-primary` |
| `--text-secondary` | `#B9B9B9` | Muted text on ink (≈8.8:1) |
| `--text-success` | `#7ED492` | Success on ink/dark contexts |
| `--text-error` | `#E85D5D` | Error on ink/dark contexts (5.1:1 on ink) |
| `--border-default` | `#3A3A3A` | Borders on ink contexts |
| `--border-error` | `#E85D5D` | Error borders on ink contexts |
| `--border-success` | `#7ED492` | Success borders on ink contexts |

Also bind raw values: `--ink: #1A1A1A`, `--cream: #F5F0E8`, `--cream-dark: #E8E0D4`, `--gray: #6B6B6B`.

**Hard contrast rules (WCAG AA, verify ≥4.5:1 for body text in both modes):**
- **Never** place `#6B6B6B` (Gray) on `#1A1A1A` (Ink) — it fails (3.3:1). Gray is legal only on cream/`#fefefe` surfaces. On ink surfaces, muted text is `#B9B9B9`.
- **Never** place coral `#E85D5D` as text on cream `#F5F0E8` (3:1 — fails). On cream surfaces, coral is reserved for non-text decoration (rules, dashes, tiles with ink icons). Any coral-tinted display text on cream must use `--secondary` (`#D44A4A`) at sizes ≥2rem.
- Coral text and ink text on the coral surface both pass (5.1:1) — on a coral background, **all** text uses ink; never cream text on coral.
- Where a white/near-white surface is needed, use **`#fefefe`** — never `#ffffff`.

**Section-scoped token remapping.** Because sections alternate surfaces, remap the same token names inside section classes so contrast pairs are always valid:

```css
.section--cream {
  --bg-primary: #F5F0E8;   /* local canvas */
  --bg-secondary: #fefefe; /* local card surface */
  --text-primary: #1A1A1A;
  --text-secondary: #6B6B6B;
  --border-default: #E8E0D4;
  --text-error: #B33939;  --border-error: #B33939;
  --text-success: #1E7A3C; --border-success: #1E7A3C;
  --focus-ring: #1A1A1A;
}
.section--ink { /* uses :root values */ --focus-ring: #E85D5D; --bg-secondary: #242424; }
.section--coral {
  --bg-primary: #E85D5D; --text-primary: #1A1A1A; --text-secondary: #1A1A1A;
  --border-default: #1A1A1A; --focus-ring: #1A1A1A;
}
```

### 1.3 Typography (Google Fonts — mandatory)
- **Display:** `'Bebas Neue', sans-serif` → bind to `--font-display`. All display text (H1, H2, card titles, step numerals, prices, buttons, wordmarks, badges) uses `--font-display`, `text-transform: uppercase`, `letter-spacing: 0.05em`, `line-height: 0.95–1.05`.
- **Body:** `'Inter', sans-serif` (weights 400/500/600/700) → bind to `--font-base`. Body text is sentence case, never uppercase.
- Load both via `<link>` tags with `preconnect` (no `@import`). Provide fallbacks: `'Arial Narrow'` for display, `'Helvetica Neue'` for body.
- Scale guidance: H1 `clamp(3.25rem, 9vw, 7.5rem)`; H2 `clamp(2.5rem, 5vw, 4rem)`; card titles `1.5rem`; body `1rem–1.125rem`; kickers `0.875rem` Inter 600, `letter-spacing: 0.15em`.

### 1.4 Section Rhythm Map (light/default mode)
| # | Section | Surface class | Surface | Text |
|---|---|---|---|---|
| 0 | Sticky header | ink | `#1A1A1A` + blur | Cream |
| 1 | Hero | `section--ink` | `#1A1A1A` | Cream + coral accent |
| 2 | Features (3 cards) | `section--cream` | `#F5F0E8` | Ink |
| 3 | How It Works (3 steps) | `section--ink` | `#1A1A1A` | Cream + coral numerals |
| 4 | Testimonials (3 cards) | `section--cream` | `#F5F0E8` | Ink |
| 5 | Pricing (3 tiers) | `section--ink` | `#1A1A1A` | Cream |
| 6 | FAQ (accordion) | `section--cream` | `#F5F0E8` | Ink |
| 7 | Final CTA | `section--coral` | `#E85D5D` full-bleed | Ink only |
| 8 | Footer | `section--ink` | `#1A1A1A` | Cream + muted |

Each section: `<section id="..." class="section section--ink|cream|coral" aria-labelledby="...">`, wrapped content in a `.container` (`width: min(100% - 3rem, 1200px); margin-inline: auto`), vertical padding `clamp(4rem, 10vw, 7rem)`.

### 1.5 Editorial Flourishes (optional, choose up to 2)
Allowed only with guardrails: (a) a coral full-bleed marquee ticker strip between Hero and Features with scrolling ink Bebas words (`aria-hidden`, CSS-only animation, paused under `prefers-reduced-motion`); (b) oversized ghost outline display text (`-webkit-text-stroke: 1px rgba(245,240,232,.18)`, transparent fill, absolutely positioned, `aria-hidden`, `pointer-events: none`, hidden below 768px); (c) coral leading dashes before section kickers. All flourishes are decorative and must never carry content meaning.

---

## 2. MANDATORY ARCHITECTURE RULES

### 2.1 CSS-First & Zero Inline CSS
- **All styling lives in `style.css`.** The `style="..."` attribute is forbidden anywhere in HTML.
- Style via **class/ID selectors only**. HTML stays semantic and styling-agnostic.
- No `onclick`/inline handlers; all behavior binds in `script.js`.

### 2.2 CSS Variables & Theme Tokens
- Define every token in **1.2** plus: `--radius-sm: 2px; --radius-md: 4px; --radius-lg: 8px` (sharp, editorial corners — never rounded pill shapes); `--shadow-sm: 0 1px 2px rgba(0,0,0,.25); --shadow-md: 0 8px 24px rgba(0,0,0,.35)`; `--spacing-gap: 1.5rem`; `--transition-fast: 150ms; --transition-normal: 250ms; --ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`; `--z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200; --z-header: 900`; `--focus-ring` per section scope (used with `outline-offset: 2px`).
- Components must **only** consume variables — no hardcoded hex values inside component rules.

### 2.3 Dark Mode (Mandatory)
- Light mode = the Coral editorial default above. **Dark mode must always be defined** as a tonal-dark variant that preserves the alternating rhythm: `.section--ink` → `#121212` (cards `#1E1E1E`), `.section--cream` → `#242424` (cards `#2C2C2C`, text cream `#F5F0E8`, muted `#B9B9B9`, borders `#3A3A3A`, error `#E85D5D`, success `#7ED492`, focus ring `#E85D5D`); `.section--coral` keeps `#E85D5D` with ink text (still 5.1:1). Body/canvas `#121212`.
- Implement overrides under a `.dark` class on `<html>` **and** a `@media (prefers-color-scheme: dark)` block scoped to `html:not(.light)` as the no-JS fallback (duplicate only the token blocks — components already consume variables, so nothing else changes).
- **Persistence:** `script.js` must begin with theme initialization — read `localStorage` key `"coral-theme"` (`"light"`/`"dark"`); if absent, fall back to `prefers-color-scheme`; apply the class before anything else renders; listen to system changes only while no stored value exists.
- **Visible toggle** in the header: icon button with Material Symbols `dark_mode`/`light_mode` (swapped), `aria-pressed="true"` when dark is active, and a state-correct `aria-label` ("Activate dark mode" / "Activate light mode").

### 2.4 Flexbox & Mobile-First
- Build all layout with Flexbox (Tailwind `flex` utilities or custom CSS).
- **Every flex container defaults to `align-items: center`** (`items-center`). Explicitly justified exceptions are limited to: multi-line text blocks (card bodies, footer link columns, section headers, form field groups, FAQ trigger rows) which may use `flex-start`/`stretch`. Document each exception with a CSS comment.
- Mobile-first: rows of cards/steps collapse to a single column below 768px; the header nav collapses to a burger menu below 768px. **No horizontal scrolling at any viewport from 320px up.**
- Set `html { scroll-behavior: smooth; scroll-padding-top: 88px; }`, gating smooth scrolling behind `prefers-reduced-motion: no-preference`.

### 2.5 Tailwind CSS Integration
- Include Tailwind via the Play CDN `<script src="https://cdn.tailwindcss.com"></script>` and use it **only for structural layout utilities** (flex, grid, gap, padding, margin, max-width, responsive `md:` prefixes).
- **Forbidden:** arbitrary-value utilities (`bg-[#E85D5D]`), Tailwind color/font/shadow utilities, `dark:` variants, and any inline `tailwind.config` script. Every color, font, radius, and shadow comes from custom BEM classes in `style.css` consuming the CSS variables. Utilities must never carry theme values.

### 2.6 Google Fonts & Material Symbols (Icons mandatory via Google)
- Icons: **Google Material Symbols Rounded** only, loaded via Google Fonts `<link>` and configured with `font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24` (add an `.icon--fill` variant with `'FILL' 1` for stars). **Forbidden: raw inline SVGs, local icon files, emoji used as icons, third-party icon fonts.**
- Canonical glyph list (use only these): `menu`, `close`, `dark_mode`, `light_mode`, `expand_more`, `check`, `check_circle`, `error`, `format_quote`, `star`, `progress_activity`, `mail`, `arrow_upward`, `arrow_downward`, `bolt`, `auto_awesome`, `category`, `public`, `insights`, `style`, `trending_up`.

---

## 3. PAGE STRUCTURE & COMPONENT SPECIFICATIONS

### 3.0 Global Shell
- **Skip link** as the first focusable element: visually hidden until focused, jumps to `#main`.
- **Sticky header** (`z-index: var(--z-header)`, `backdrop-filter: blur(8px)`, translucent ink background, 1px bottom border): Bebas wordmark (cream, with one coral glyph), inline nav links (Features, How It Works, Testimonials, Pricing, FAQ — Inter 500, hover = coral underline + color shift in 150ms), the theme toggle, and a compact `.btn--primary` CTA. Below 768px, links hide behind a burger (`menu`/`close` icon swap, `aria-expanded`, `aria-controls`, panel at `--z-dropdown`, closes on link click and `Escape` with focus returned to the burger).

### 3.1 Hero (`#hero`)
Full-height ink section (`min-height: 90svh`), centered flex column. Contents: coral kicker line; giant Bebas H1 (only H1 on the page) with exactly one word wrapped in an accent `<span>` colored `var(--primary)`; Inter subline in `--text-secondary` (max-width ~60ch); CTA row (flex, `items-center`, wrap, `gap: var(--spacing-gap)`): `.btn--primary` + `.btn--secondary`; optional scroll cue (`arrow_downward`, aria-hidden). No imagery — typography is the hero.

### 3.2 Features — 3 Cards (`#features`)
Cream section. Section header (kicker + Bebas H2). Three `.card` blocks in a responsive 3→1 column grid. Each card: 48px coral tile containing an ink Material icon (`bolt`/`auto_awesome`/`category`), Bebas H3, Inter body in `--text-secondary`. Cards are non-interactive content — apply the global Card states from 3.10 (hover lift + coral top edge).

### 3.3 How It Works — 3 Steps (`#how-it-works`)
Ink section. Three steps in a responsive row (column on mobile) with an aria-hidden coral connector rule between them on desktop. Each step: oversized Bebas numeral `01 / 02 / 03` in `var(--primary)`, Bebas H3 title, Inter body in `--text-secondary`.

### 3.4 Testimonials — 3 Quote Cards (`#testimonials`)
Cream section. Three `.card` blocks: `format_quote` icon in `--secondary` (higher contrast on light), italic Inter quote, coral circular monogram with ink Bebas initials (pure CSS, no photos), name (Inter 700) + role (`--text-secondary`). Optional 5-star row: `star` icons in `--secondary` with `.icon--fill`, `aria-hidden`, plus visually-hidden text "Rated 5 out of 5".

### 3.5 Pricing — 3 Tiers (`#pricing`)
Ink section. **Billing toggle:** segmented control (`role="group"`, `aria-label="Billing period"`) with two buttons (Monthly / Yearly); active button carries `aria-pressed="true"` and the bold invert style (cream fill, ink text, 150ms); an `aria-live="polite"` region announces "Prices updated to [period] billing" on change.
Three `.card--pricing` blocks (local card surface `#242424`): Bebas tier name, large Bebas price + Inter suffix (`/mo`), feature list with coral `check` icons, CTA button. Middle tier is `.card--featured`: 2px coral border, absolute "MOST POPULAR" badge (coral fill, ink Bebas text), `.btn--primary`; outer tiers use `.btn--secondary`. JS swaps price text from `data-monthly`/`data-yearly` attributes.

### 3.6 FAQ — Accessible Accordion (`#faq`)
Cream section, centered column (max-width ~760px). Five–six items. Each item: `h3 > button` trigger (full-width flex between, `type="button"`, `aria-expanded`, `aria-controls`) + panel region. Panel opens/closes via `grid-template-rows: 0fr → 1fr` transition (250ms); chevron `expand_more` rotates 180deg. Open state = bold trigger + 3px coral left rule + rotated chevron (never color-only). First item starts open. **Progressive enhancement:** `script.js` adds class `js` to `<html>` as its first action; collapse behavior (FAQ panels, mobile menu) activates only under `html.js` — without JS, all content remains visible and readable.

### 3.7 Final CTA (`#cta`)
Full-bleed `section--coral`. Centered: kicker (ink), huge Bebas H2 (ink), short Inter subline (ink), and an **email capture form**: `.input-group` (flex column, documented items-center exception) with a visually-hidden or visible `<label for>`, `input type="email"` (`autocomplete="email"`, `inputmode="email"`, `novalidate` on the form), and a `.btn--ink` submit (ink fill, cream text; hover = bold invert to cream fill with ink text). All form/error state behavior per 3.11. Feedback renders in a cream pill (bg `#F5F0E8`, 4px left border in `--border-error`/`--border-success`, Material icon + ink text) inside an `aria-live="polite"` status region — this satisfies contrast on the coral surface.

### 3.8 Footer (`#footer`)
Ink section. Top area: brand column (Bebas wordmark + one-line muted tagline), three link columns with Bebas mini-titles (PRODUCT / COMPANY / SUPPORT) and Inter links in `--text-secondary` (hover: cream text + coral underline, 150ms). Social presence as small uppercase Bebas text links (e.g., INSTAGRAM / PINTEREST / TIKTOK) — no third-party brand icon fonts. Bottom bar (1px top border): © line with current year, legal links (Privacy, Terms), and a "Back to top" link with `arrow_upward`. Links that target page sections must use real anchors; genuinely external/undefined links may use `href="#"` but must still show full hover/focus states.

### 3.9 Button States (all via CSS classes)
- **Base `.btn`:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` min touch target 44×44px, `--font-display` 1.125rem uppercase with 0.05em tracking, `--radius-sm`, transitions on background/border/transform at `var(--transition-fast)`.
- **`.btn--primary`:** coral fill, **ink** text. **Hover:** fill `--secondary` + `--shadow-md` (bold 150ms color shift). **Focus-visible:** 2px `var(--focus-ring)` outline, 2px offset. **Active:** `transform: scale(0.97)`.
- **`.btn--secondary`:** transparent, 2px border + text in local `--text-primary`; **hover inverts** (fill `--text-primary`, text `--bg-primary`).
- **`.btn--ink`:** ink fill, cream text; hover inverts to cream fill/ink text.
- **Loading `.is-loading`:** `pointer-events: none`, `aria-busy` set by JS, label hidden via `visibility: hidden` while an absolutely-centered spinning `progress_activity` icon (800ms linear rotation) appears — button dimensions must not change; double-submission prevented in JS.
- **Disabled `[disabled]`:** `opacity: 0.5`, `filter: grayscale(1)`, `cursor: not-allowed`, no transforms.
- **Success/Error `.is-success` / `.is-error`:** temporary 1.5s border/icon flash using `--border-success`/`--border-error` with `check_circle`/`error` icon swap — never color-only.

### 3.10 Card States (global, reused by Features/Testimonials/Pricing)
- **Default:** flex column, `--bg-secondary` local surface, 1px `--border-default`, `--radius-md`, padding 1.75rem.
- **Hover:** `transform: translateY(-2px)`, `--shadow-md`, and a 3px coral top edge appearing (250ms).
- **Focus-within:** border shifts to `var(--primary)` when a child control (pricing buttons) receives focus.
- **Skeleton:** define a `.skeleton` shimmer utility (1.5s infinite gradient sweep, respects reduced motion) even if not triggered by default JS — it must exist for future dynamic cards.
- **Empty state:** define an `.empty-state` utility (centered flex, 48px muted Material icon, guidance text) for reuse.

### 3.11 Form & Input States
- **Structure:** flex `.input-group` wrapping label, input, and a dedicated error feedback container.
- **States:** empty (placeholder), **focused** (2px ink border + focus ring), filled, **valid** (`.is-valid`: `--border-success` + `check_circle` trailing icon), **invalid** (`.is-invalid`: 2px `--border-error`, `error` trailing icon, error message with icon + text, `aria-invalid="true"`, `aria-describedby`), disabled, read-only.
- **Flow:** submit → button `.is-loading` (spinner, ~900ms simulated delay) → regex validation → on failure: `.is-invalid` + live-region error message; on success: `.is-success` button flash, `.is-valid` input, live-region success message ("You're on the list."). `event.preventDefault()` — no backend, no page reload, no `alert()`.

### 3.12 Layered Components & Exclusions
- **No modals, popups, dropdown widgets, or toast libraries are in scope — do not add any.** The mobile nav panel (z `--z-dropdown`) is the only overlay; the header uses `--z-header`; `--z-toast`/`--z-modal` tokens must still be defined.

---

## 4. CORE UX, ACCESSIBILITY & MICRO-INTERACTIONS

### 4.1 Responsive by Default
Fluid `clamp()` typography, 3→1 column collapses, no horizontal overflow at 320px, all touch targets ≥44px.

### 4.2 Motion & Transitions
All hover color shifts at **150ms** (`--transition-fast`, per the Coral hover spec); structural/enter animations at 250ms (`--transition-normal`); easing `--ease-standard`. Wrap every animation/transition in `@media (prefers-reduced-motion: reduce)` fallbacks that disable transforms, marquees, and shimmer.

### 4.3 Accessibility Checklist
- Body text ≥4.5:1 in **both** modes (respect the traps in 1.2). Focus rings ≥3:1 against their section background.
- Never color alone: errors/success pair icons + text; FAQ open state uses icon rotation + weight + rule, not color.
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), one H1 only, sections `aria-labelledby`, logical DOM/focus order, full keyboard operability for nav, toggle, accordion, pricing toggle, and form. `aria-live` regions for form feedback, loading, and pricing updates.
- Theme toggle carries correct `aria-pressed` + `aria-label` at all times.

### 4.4 Mandatory Visual Feedback
Every click, hover, focus, and submission triggers a visible state change. There are **no destructive actions in this deliverable — do not invent any.**

---

## 5. DELIVERABLES & OUTPUT FORMAT

### 5.1 Files
- **`index.html`** — head with preconnects, Google Fonts links (Bebas Neue, Inter, Material Symbols Rounded), Tailwind CDN, `style.css`, and a **single** `<script src="script.js" defer></script>`. Body: skip link, header, `main` with the 8 sections in the 1.4 order, footer. **No inline `<style>` or inline `<script>` code blocks; no `style=` attributes.**
- **`style.css`** — organized with comments: 1) tokens (`:root`, `.dark`, media dark fallback, section scopes), 2) reset/base, 3) layout, 4) BEM components, 5) states, 6) keyframes, 7) media queries.
- **`script.js`** — `'use strict'`; first statements: theme init (`js` class + stored/system theme); then guarded modules (existence checks before binding) for: mobile nav, FAQ accordion, billing toggle, email form, footer year. Nothing else. No dependencies.

### 5.2 Naming Convention
**BEM only** (`block__element--modifier`, e.g., `.card__title`, `.btn--primary`), plus a consistent `.is-*` state-class convention and `data-*` JS hooks. Never mix conventions; Tailwind utilities appear only for structure.

### 5.3 Copy Requirements
Author all copy yourself in **English** — punchy, confident, magazine-editorial tone; verb-led button labels ≤3 words; consistent fictional brand (a 2020s fashion/editorial product or studio — invent the name and keep it coherent across nav, hero, and footer). **Lorem ipsum is forbidden entirely.** Placeholders are permitted only for genuinely undefined external link targets.

### 5.4 Pre-Delivery Self-Verification (must pass before finishing)
1. Zero `style=` attributes, inline SVGs, emoji icons, or raw hex values in HTML.
2. Dark mode toggles, persists, and initializes without flash of wrong theme.
3. Full keyboard pass: skip link → nav → toggle → FAQ → pricing toggle → form.
4. No horizontal scroll at 320px; no layout shift during button loading.
5. Both color modes meet the contrast pairs defined in 1.2; reduced-motion honored everywhere.
