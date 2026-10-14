# CODING AGENT PROMPT — Op Art Landing Page (1960s Optical Art)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready landing page on the first attempt. The condensed source spec is embedded below. Where the source spec conflicts with the mandatory rules in Sections 1–4, the mandatory rules win; every such conflict is resolved with an explicit one-line exception clause inline. Reference specification: `references/00-flagship-implementation-specs/op-art.md`.

**Mission:** A single-page landing site in the **Op Art / Optical Art (1960s)** style — Bridget Riley's *Movement in Squares*, Victor Vasarely's concentric targets. Near-monochrome, high-contrast vibration: precise repeating black/near-white stripes, concentric rings, graduated square grids; illusions of motion, depth, and warping; mechanical, hypnotic precision. One sanctioned chromatic accent: signal red `#e10600`. All optical patterns must be pure CSS (repeating gradients) — no raster images anywhere on the page.

**Copy:** Invent one coherent fictional brand (suggested: **OPTIKA**, a precision pattern-design engine for the web) and write all user-facing copy in **English** — real, on-theme copy for every section. Lorem ipsum is forbidden. Keep the brand name consistent across nav, hero, pricing, and footer.

---

## Theme Direction & Design Tokens

**Mandatory token mapping** — define in `:root` (light) and override in both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>` (place the `.dark` block after the media query so explicit user choice wins):

| Token | Light value | Dark value | Usage |
|---|---|---|---|
| `--bg-primary` | `#fefefe` | `#0a0a0a` | Page background |
| `--bg-secondary` | `#f0f0f0` | `#1c1c1c` | Alternate bands, input fills |
| `--text-primary` | `#0a0a0a` | `#fefefe` | Headings, body |
| `--text-secondary` | `#4a4a4a` | `#b0b0b0` | Muted copy |
| `--primary` | `#0a0a0a` | `#fefefe` | Primary fills, pattern ink |
| `--secondary` | `#e10600` | `#ff453a` | Accent: badges, focus rings, CTA highlights |
| `--text-error` / `--border-error` | `#e10600` | `#ff5147` | Error states |
| `--text-success` / `--border-success` | `#0f6b3f` | `#35d07f` | Success states |
| `--border-default` | `#0a0a0a` | `#fefefe` | All structural borders (3px standard) |
| `--radius-sm` / `--radius-md` / `--radius-lg` | `0px` | `0px` | Precise geometry, no softness |
| `--radius-pill` | `999px` | `999px` | Badges only |
| `--shadow-sm` / `--shadow-md` / `--shadow-lg` | `0 0 0 transparent` / `0 6px 0 #0a0a0a` / `0 10px 0 #0a0a0a` | flip ink to `#fefefe` | Hard offset shadows |
| `--z-dropdown` / `--z-modal` / `--z-toast` | `40` / `50` / `60` | same | Layering (add `--z-nav: 30` for sticky nav) |
| `--spacing-gap` | `24px` | same | Default flex gap (extend with the `--space-1…24` scale) |
| `--transition-fast` / `--transition-normal` | `120ms` / `240ms` | same | All state changes |
| `--ease-standard` | `steps(6, end)` | same | Mechanical stepped easing |

**Pattern tokens** (define as CSS variables so dark mode can invert the ink): `--stripe-pattern` (90° repeating, 6px `#0a0a0a` / 6px `#fefefe`), `--stripe-pattern-tight` (3px pitch), `--concentric-pattern` (repeating-radial, 4px rings). **Exception (no-pure-white rule):** the source spec's `#ffffff` is replaced by `#fefefe` everywhere, including inside pattern gradients — the delta is imperceptible and optical vibration is preserved.

**Contrast pairing (enforced in both modes):** `--bg-primary` always pairs with `--text-primary`; `--bg-secondary` pairs with `--text-primary`; any element filled with `--primary` uses `--bg-primary` as its text color (they co-invert, so pairing survives theme switching). Never hardcode a text color against a token fill.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
- Target everything via class/ID selectors; keep HTML semantic and styling-agnostic (no presentational markup, no wrapper divs whose only job is styling).
- Reskinning the page must require editing `style.css` only.

**1.2 CSS Variables & Theme Tokens**
- Every color, radius, shadow, spacing, transition, easing, and z-index value must come from the token table above. Zero raw hex values in component rules.
- Extended tokens: `--font-base`, `--font-display`, `--font-mono`, the `--text-xs…--text-5xl` scale, the `--space-1…--space-24` scale, and the three pattern tokens.

**1.3 Mandatory Dark Mode**
- Dark tokens defined under both `@media (prefers-color-scheme: dark)` and `.dark` (class block last, so it wins).
- Patterns invert in dark mode (near-white ink on near-black); hard shadows flip to near-white offsets.
- Visible theme toggle in the nav: Material Symbol `dark_mode`/`light_mode`, correct `aria-pressed` and `aria-label` ("Switch to dark mode" / "Switch to light mode"). Persist choice in `localStorage`; on first visit fall back to `prefers-color-scheme`.
- The source spec declares no modes — you must validate the finished page in **both light and dark** before considering it complete (see Section 5).

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment (the only sanctioned exceptions: footer link columns and pricing/feature card tops use `flex-start`).
- Mobile-first: multi-column rows become single columns below 768px. No horizontal scrolling at any width from 320px up — solve root causes with `max-width: 100%` and contained patterns, not by hiding overflow.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS via the Play CDN `<script src="https://cdn.tailwindcss.com"></script>` for structural utilities only (flex, gaps, wrapping, max-widths, responsive prefixes). Do not add a Tailwind config script.
- All color, typography, and component styling is done in `style.css` via BEM classes bound to CSS variables. Tailwind color utilities and arbitrary-value utilities with hex values are forbidden.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load Google Fonts via `<link>`: **Jost** (geometric, Futura-equivalent) bound to `--font-display`, **Inter** (Helvetica Neue–equivalent) bound to `--font-base`, **Space Mono** bound to `--font-mono`.
- **Exception (Google Fonts rule):** the source's Futura/Helvetica Neue stacks are replaced by these Google-hosted equivalents; the historical names may remain only as fallbacks inside the font stacks.
- Icons: Google Material Symbols Outlined stylesheet; icons rendered as `<span class="material-symbols-outlined">…</span>`. Raw inline SVGs and local icon files are forbidden.
- Display headings: `--font-display`, uppercase, tight letter-spacing. Eyebrow labels and step numerals: `--font-mono`, uppercase, wide letter-spacing.

---

## 2. COMPONENT & SECTION SPECIFICATIONS

**2.1 Buttons (`.btn`, `.btn--primary`, `.btn--inverse`, `.btn--danger`)**
- Default: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` 3px `--border-default`, hard `--shadow-md`, minimum 44×44px touch target, `--font-base` 700.
- Hover: solid inversion (`--primary` fill, `--bg-primary` text) plus a 6px stripe band via `border-image: var(--stripe-pattern)`. **Exception (a11y override):** the source's stripe-fill hover with a white label fails contrast — do not implement it; use the inversion + stripe band instead.
- Focus: `:focus-visible` → 3px `--secondary` outline, 3px offset.
- Active: `transform: scale(0.97)`.
- Loading (`.is-loading` + `aria-busy="true"`): interactions disabled, double-clicks prevented, a rotating hollow **square** spinner (3px border, `--radius-lg`) replaces the icon without changing button dimensions.
- Disabled: `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- Success/Error (`.is-success`, `.is-error`): temporary states driven by `--text-success`/`--text-error` with a Material Symbol `check`/`error` icon swap.
- `.btn--danger` must be defined in the CSS library (red accent treatment, distinct in both modes) even if unused on this page.

**2.2 Cards (`.card`, variants `--inverted`, `--tier`, `--quote`)**
- Default: `--bg-secondary` or `--bg-primary` surface, 3px `--border-default`, `--shadow-md`, `::before` top band of `--stripe-pattern` (10px), `overflow: hidden`, flex column.
- Hover: `translateY(-2px)` + `--shadow-lg`.
- `:focus-within`: border switches to `--secondary`.
- Define `.skeleton` (shimmer animation, no layout jump) and `.empty-state` (Material Symbol + guidance text) classes in the CSS library.

**2.3 Forms & Inputs (`.input-group`, `.input`, `.input-group__error`)**
- Structure: flex column wrapping `<label>`, `<input class="input">`, and a dedicated error container with `aria-live="polite"`.
- States via CSS: empty (`:placeholder-shown`), focused (3px `--secondary` border + ring), filled, valid (`.is-valid`: `--border-success` + `check` icon), invalid (`.is-invalid`: `--border-error`, error icon, message), disabled, read-only.
- Placeholder color: `--text-secondary`.

**2.4 Modal (`.modal`, `.modal__backdrop`, `.modal__close`)**
- Pricing tiers each open a "Plan details" modal: `role="dialog"`, `aria-modal="true"`, centered flex (`align-items: center`), backdrop overlay, `--z-modal`, Material Symbol `close` button with `aria-label="Close dialog"`.
- Animated opening/open/closing via CSS transitions; loading state (skeleton) then content; success/error feedback inside.
- Keyboard: focus trap while open, `Esc` and backdrop click close, focus returns to the trigger, body scroll locked.

**2.5 Toast (`.toast`)**
- Bottom-positioned, `--z-toast`, `role="status"` / `aria-live="polite"`, auto-dismiss, close button. Used for form success feedback.

**2.6 Page Sections (in order)**

- **Nav (sticky):** brand wordmark (display font) with a CSS concentric-target mark; anchor links with hover underline in `--primary`; theme toggle (1.3); compact `.btn--primary` CTA; bottom edge `border-image: var(--stripe-pattern) 6`. Below 768px, links collapse into a `<details>`-based disclosure panel. Add a "Skip to main content" link (visually hidden until focused) and `scroll-padding-top` for anchor jumps.
- **Hero:** flex column, centered. Red `.badge` eyebrow; single `<h1>` in display font, uppercase; supporting paragraph in `--text-secondary`; CTA row (`.btn--primary` + `.btn`) that wraps on mobile. Behind/beside the copy, a decorative Riley-style *Movement in Squares* field — a CSS-only graduated grid of `aria-hidden="true"` squares whose widths step down toward a slit, or layered repeating gradients. Copy sits on a solid `--bg-primary` panel so contrast is never compromised. Any pattern animation is gated behind `prefers-reduced-motion`.
- **Features (3 cards):** section header (mono eyebrow + `<h2>` + lede) above a flex row of three `.card`s (column below 768px). Each card: Material Symbol icon set inside a square tile backed by `--concentric-pattern` (Vasarely target), `<h3>`, body copy. Full card state matrix from 2.2.
- **How It Works (3 steps):** semantic `<ol>`; each step shows a giant outlined numeral (01/02/03, display font, text-stroke) , Material Symbol, `<h3>`, copy. Steps are joined by a horizontal `.steps__rule` filled with `--stripe-pattern`; the rule is removed or verticalized on mobile.
- **Testimonials:** three `.card--quote` cards in a wrapping flex row; oversized `format_quote` Material Symbol; quote, then author row: `.avatar` (black square, `--radius-lg`, white initials — no photos), name in `--text-primary`, role in `--text-secondary`. Make the middle card `--inverted` for rhythm; pairing rules hold in both modes.
- **Pricing (3 tiers):** three `.card--tier` cards; the middle tier is `--featured`: inverted fill, `--shadow-lg`, slight scale-up, red `.badge` "MOST POPULAR". Each tier: name (display font), large price + period, feature list with Material Symbol `check` icons (one `close` for an excluded feature — never color alone), a `.btn` CTA (featured uses `.btn--inverse`), and a "Plan details" trigger opening the 2.4 modal.
- **FAQ:** 5–6 `<details class="faq__item">` / `<summary>` pairs (no JS needed); 3px `--border-default` dividers; `expand_more` chevron rotating 180° on `[open]`; `:focus-visible` ring on `summary`; answers in `--text-secondary`.
- **Final CTA:** full-width inverted band (`--primary` fill, `--bg-primary` text) with `--stripe-pattern` border-image top and bottom; `<h2>` in display font; email capture form per 2.3 (input + `.btn--inverse`); on submit: validate → `.is-invalid` + live error, or loading → `.is-success` + toast.
- **Footer:** inverted band. Brand block + tagline; three secondary-link groups (Product, Company, Resources — `href="#"` permitted since destinations are unspecified); bottom bar with copyright (dynamic year via JS) and small legal links. Link hover: `--secondary` underline; focus rings visible on the inverted background. Footer columns may use `align-items: flex-start` (sanctioned exception).

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid type via the `--text-*` scale with clamp() where helpful; sections padded `--space-16` mobile / `--space-24` desktop inside a max-width container; zero horizontal overflow from 320px up.
- **Smooth animations:** every state change transitions via `transition: var(--transition-normal)`. **Exception (theme easing):** per the Op Art spec, easing is mechanical `steps(6, end)` rather than smooth curves — transitions still apply to all state changes. Under `prefers-reduced-motion`: disable all animations/transitions and replace high-frequency vibrating fills (`--stripe-pattern-tight`) with solid bands (photosensitivity safeguard).
- **Accessibility:** body text contrast ≥ 4.5:1 in both modes; never communicate state by color alone (pair every success/error with an icon and text); semantic HTML5 landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`); one `<h1>`, logical heading order; full keyboard operability; visible focus everywhere; `aria-live` regions for form errors, loading, and toasts.
- **Mandatory visual feedback:** every click, hover, and submission produces a visible state change.
- **Destructive actions:** `.btn--danger` visually distinct in both light and dark themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, `script.js`. The only `<script>` references are the Tailwind CDN (external, in `<head>`) and one deferred `script.js` entry point. No inline script blocks.
- **script.js scope:** theme toggle + `localStorage` persistence + `prefers-color-scheme` fallback, email validation and button state orchestration, modal open/close with focus trap and `Esc`, toast helper, dynamic copyright year. Nothing else.
- **Naming:** BEM everywhere for components (`.card__title`, `.btn--primary`, `.faq__item`); transient states use `.is-*` classes (`.is-loading`, `.is-invalid`). Never mix conventions.
- **No unrequested placeholders:** no lorem ipsum, no TODOs, no empty headings. All copy is final English text; `href="#"` is permitted only for the unspecified footer/legal destinations.

---

## 5. ACCEPTANCE CRITERIA — LIGHT + DARK VALIDATION

Before publishing, verify in **both themes** (the source spec declares no modes; validation in light and dark is mandatory): (1) zero `style="..."` attributes and zero inline SVGs; (2) every color/radius/shadow/transition resolves to a token; (3) contrast passes in both modes, including inverted bands, badges, and pattern-adjacent text; (4) full keyboard walkthrough — skip link, nav disclosure, links, FAQ, modal trap + `Esc`, form validation; (5) no horizontal scroll from 320px to 1920px; (6) reduced-motion users get a static, non-vibrating page; (7) theme choice survives reload; (8) all eight sections present in order with a single `<h1>`.
