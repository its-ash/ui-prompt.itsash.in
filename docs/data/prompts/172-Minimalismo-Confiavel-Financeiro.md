# CODING AGENT PROMPT — COMPLETE LANDING PAGE BUILD

**Theme:** "Trustworthy Financial Minimalism" (source: *Minimalismo Confiável Financeiro*) · **Category:** Minimalism & Swiss · **Era:** 2026+ Smart Finance

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page described below on the first attempt. Output the full final code for all files in a single response — no clarifying questions, no partial deliverables, no TODOs.

**Product:** A one-page marketing site for a professional financial consulting firm. Design language: Swiss/International Typographic Minimalism — clean structured layouts, generous negative space, strict grid alignment, hairline 1px rules, restrained color, serif display headings over sans-serif body copy, minimalist data charts, data-focus micro-interactions, smooth professional transitions. The visual core must communicate credibility and security. Keywords: finance, consulting, investment, professional, trustworthy, minimalist, clean, secure, data-driven, reliable.

**Required sections, in order:** (1) Hero, (2) Features — 3 cards, (3) How It Works — 3 steps, (4) Testimonials, (5) Pricing — 3 tiers, (6) FAQ, (7) Final CTA, (8) Footer with secondary links — plus a sticky professional navigation bar and a consultation-booking modal with toast feedback (specified in 2.4–2.7).

**Copy rule:** Write ALL user-facing copy in English. Invent one credible firm name (e.g., "Meridian Capital Advisory") and keep it consistent. Write realistic, professional finance copy for every section — headlines, service descriptions, testimonial quotes, pricing features, FAQ answers. Lorem ipsum is forbidden.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
- Target every design property, layout rule, and state via class or ID selectors only.
- Keep HTML semantic and style-agnostic: re-theming the site must require editing `style.css` only, never the markup.

**1.2 CSS Variables & Theme Tokens**
Define every visual token in `:root` exactly as follows:

```css
:root {
  /* Surfaces */
  --bg-primary: #fefefe;        /* near-white page background — #ffffff is forbidden */
  --bg-secondary: #F0F2F5;      /* light gray alternating sections */
  --bg-inverse: #001F3F;        /* navy band: Final CTA + Footer */

  /* Brand */
  --primary: #001F3F;           /* Azul Marinho navy */
  --primary-contrast: #fefefe;  /* text/icons on --primary */
  --secondary: #C0C0C0;         /* Prata silver: borders, dividers */
  --accent-gold: #FFD700;        /* Dourado: accent only */
  --accent-gold-contrast: #001F3F;

  /* Text */
  --text-primary: #001F3F;
  --text-secondary: #56657A;    /* muted slate body copy */
  --text-inverse: #fefefe;      /* text on --bg-inverse */
  --text-success: #15803D;      /* palette green darkened for WCAG AA on light */
  --text-error: #800020;        /* Borgonha burgundy */

  /* Borders */
  --border-default: #C0C0C0;
  --border-subtle: #E3E6EA;
  --border-success: #15803D;
  --border-error: #800020;

  /* Shape & depth */
  --radius-sm: 4px;  --radius-md: 8px;  --radius-lg: 16px;
  --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 8px 24px rgba(0, 31, 63, 0.10);

  /* Spacing & motion */
  --spacing-gap: 1.5rem;
  --spacing-section: clamp(4rem, 8vw, 6rem);
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 300ms ease-in-out;
  --ease-standard: ease-in-out;

  /* Elevation */
  --z-dropdown: 1000;  --z-modal: 2000;  --z-toast: 3000;

  /* Type */
  --font-heading: "Gelasio", Georgia, serif;
  --font-base: "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-mono: "Roboto Mono", "Courier New", monospace;
}
```

- **Contrast pairing:** every light background token pairs with a dark text token and every dark background token with a light text token — enforced in every theme, not just the default.
- **No pure white:** the palette's Branco `#FFFFFF` is implemented as `#fefefe` on all near-white surfaces (mandatory architecture rule; no exception).
- **Green contrast:** `#2ECC40` fails AA on light backgrounds — use `#15803D` for light-mode success text/borders; reserve `#2ECC40` for dark mode and chart fills.
- **Gold discipline:** `#FFD700` is never text on light backgrounds; use it only for badge backgrounds (paired with `--accent-gold-contrast` text), accent underlines, and the featured pricing tier.
- Type scale: clamp()-based fluid sizes — serif `--font-heading` for all headings and prices, `--font-base` for body (line-height 1.6), `--font-mono` for stats, chart labels, and step numerals.

**1.3 Mandatory Dark Mode Support**
- Define the dark token set under a `.dark` class on `<html>` **and** mirror it inside `@media (prefers-color-scheme: dark) { html:not(.light) { … } }` so an explicit `.light` class always wins:

```css
html.dark {
  --bg-primary: #00101F;   --bg-secondary: #001F3F;   --bg-inverse: #F0F2F5;
  --primary: #fefefe;      --primary-contrast: #001F3F;
  --secondary: #8A97A8;    --accent-gold: #FFD700;    --accent-gold-contrast: #00101F;
  --text-primary: #F0F2F5; --text-secondary: #A8B4C2; --text-inverse: #001F3F;
  --text-success: #2ECC40; --text-error: #FF8FA3;
  --border-default: #2E3D4F; --border-subtle: #1B2A3A;
  --border-success: #2ECC40; --border-error: #FF8FA3;
  --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.45);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.55);
}
```

- Theme toggle: a visible button in the nav (Material Symbols `light_mode`/`dark_mode`) with correct `aria-pressed` and dynamic `aria-label`; choice persists via `localStorage`; falls back to `prefers-color-scheme` on first visit. Switching requires zero HTML restructuring.
- **Exception clause:** the source specification requested light-mode-only (Light ✓ / Dark ✗); Dark Mode remains mandatory under these architecture rules — implement it fully with the deep-navy set above, with light mode as the default.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout container with Flexbox (`display: flex` / Tailwind flex utilities). CSS Grid is not used.
- Every flex container defaults to `align-items: center` (`items-center`) unless an exception is justified in a CSS comment.
- All rows wrap or collapse to columns below ~768px; no horizontal scrolling at any viewport from 320px up. Minimum touch target: 44×44px.
- Wrap all sections in one max-width container (~72rem) with consistent horizontal padding.

**1.5 Framework: Tailwind CSS**
- Include Tailwind CSS via the Play CDN and use it for layout utilities only (flex, gap, padding, responsive prefixes).
- All color, typography, radius, shadow, and state styling must come from `style.css` classes bound to `var(--...)` — never hard-coded Tailwind color utilities.
- Utilities must map to generic reusable classes: `.btn`, `.card`, `.input-group`, `.nav-professional`, `.service-card-clean`, `.data-chart-minimal`.

**1.6 Typography & Icons — Google Fonts Mandatory**
- Load via `<link>` (with preconnect): **Gelasio** (headings), **Inter** (body), **Roboto Mono** (data). Bind them to `--font-heading`, `--font-base`, `--font-mono`.
- **Exception clause:** the source spec requested `Georgia, serif`; Google Fonts are mandatory — Gelasio is the Google Fonts metric-compatible successor to Georgia, so bind it with Georgia as system fallback only.
- Icons: Google **Material Symbols Outlined** via its Google Fonts stylesheet. Render as `<span class="material-symbols-outlined" aria-hidden="true">icon_name</span>` (decorative icons hidden; functional icons carry accessible names). Raw inline SVGs, local icon files, emoji icons, raster images, and chart libraries are all forbidden — every visual is typographic, iconographic, or pure CSS.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger`)**
- **Default:** `display:flex; align-items:center; justify-content:center; gap:0.5rem;` min 44×44px, `--radius-sm`, transition `var(--transition-normal)`. `.btn-primary`: `var(--primary)` bg + `var(--primary-contrast)` text. `.btn-secondary`: transparent bg, 1px `var(--border-default)`, `var(--text-primary)` text.
- **Hover:** brightness shift + `--shadow-sm`, `cursor:pointer`.
- **Focus:** distinct `:focus-visible` ring built from tokens (outline/box-shadow) for keyboard navigation.
- **Active:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** blocks interaction and double-clicks; renders a CSS border spinner or rotating Material Symbol without changing button dimensions.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error (`.is-success` / `.is-error`):** temporary feedback colored by `--text-success` / `--text-error` with `check_circle` / `error` icons; used on form submits.
- **`.btn-danger`:** burgundy-based, visually distinct in both themes.

**2.2 Card Component (`.card`, `.service-card-clean`, `.testimonial-card`, `.pricing-tier`)**
- **Default:** flex column, `var(--bg-primary)` surface, 1px `var(--border-default)`, `var(--radius-sm)`, `var(--shadow-sm)`.
- **Hover:** `var(--shadow-md)` + `transform: translateY(-2px)`.
- **Focus-within:** border shifts to `var(--primary)` when a child link/button is focused.
- **Skeleton:** define `.card--skeleton` shimmer (animated gradient) that preserves layout dimensions.
- **Empty:** define `.card--empty` (Material Symbol + guidance text) as part of the system.

**2.3 Form & Input (`.input-group`)**
- Structure: flex container wrapping `<label>`, `<input>`, and a dedicated error `<p>`.
- States: empty, `:focus` (token ring), filled, valid (`.is-valid`: `--border-success` + check icon), invalid (`.is-invalid`: `--border-error`, error icon, message in `--text-error`, `aria-invalid="true"`, `aria-describedby`), disabled, read-only.
- Implement in the consultation modal form (name, email, optional message) and the footer newsletter signup; validate in `script.js` with per-field messages announced via `aria-live`.

**2.4 Modal / Popup (`.modal`)**
- States: opening, open, loading, success, closing — all animated via CSS transitions (opacity + scale, `var(--transition-normal)`).
- Centered flex overlay (`align-items:center; justify-content:center`), `rgba(0,31,63,0.55)` backdrop, content card on `var(--bg-primary)`, `z-index: var(--z-modal)`.
- Close via Material Symbol `close` button (`aria-label="Close dialog"`), `Esc`, and overlay click; focus trapped while open; focus returns to the trigger on close; body scroll locked.
- All "Book a Consultation" CTAs open this modal; submit runs loading → success (check icon, `--text-success` message) with a defined error fallback.

**2.5 Navigation (`.nav-professional`)**
- Sticky top bar, flex `align-items:center`, `var(--bg-primary)` with hairline bottom border; gains `--shadow-sm` after scroll (JS class toggle).
- Contents: serif wordmark + `account_balance` mark; anchor links with smooth scroll to each section; theme toggle (1.3); primary CTA opening the consultation modal.
- Mobile: wordmark + toggle + hamburger (`menu` icon); panel is a flex-column dropdown (`--z-dropdown`) toggled with `aria-expanded`/`aria-controls`, closing on link click and `Esc`.

**2.6 Page Section Specifications**
- **2.6.1 Hero:** two-column flex (copy | visual) → column on mobile. Copy: eyebrow label, serif `h1`, sans subcopy, dual CTAs (primary → modal; secondary anchor → Features), trust row of three `--font-mono` stats (e.g., "$2.4B advised · 25 years · 98% retention") with count-up on first scroll into view. Visual: `.data-chart-minimal` — a pure-CSS bar chart: flex-aligned column `div`s with percentage heights, navy bars with one gold highlight bar, hairline axis and grid lines, mono labels; bars animate from zero height on scroll into view (IntersectionObserver); a CSS-only value chip on bar hover via data attributes. No SVG, no images, no libraries.
- **2.6.2 Features — 3 `.service-card-clean`:** e.g., Investment Strategy, Retirement & Wealth Planning, Risk & Tax Optimization. Each: Material Symbol in a bordered tile, serif `h3`, body copy, "Learn more" link (card shows focus-within). Row wraps to column. Section on `--bg-secondary`.
- **2.6.3 How It Works — 3 steps:** numerals 01/02/03 in `--font-mono`, connected by a hairline rule (horizontal desktop, vertical mobile), each step: Material Symbol, serif title, description (Discovery → Strategy Design → Ongoing Stewardship).
- **2.6.4 Testimonials — 3 `.testimonial-card`:** serif quote, gold star row (`star` icons, `aria-hidden` + accessible rating text), CSS monogram circle (initials, `--primary` bg, `--primary-contrast` text — no photos), name + role. Section on `--bg-secondary`.
- **2.6.5 Pricing — 3 `.pricing-tier`:** flex row → column; middle tier featured with gold "Most Recommended" badge (gold bg + `--accent-gold-contrast` text), `--shadow-md`, subtle elevation; each: tier name, large serif/mono price, feature list with `check_circle` icons, CTA (primary on featured, secondary elsewhere) opening the modal.
- **2.6.6 FAQ:** 5–6 native `<details>`/`<summary>` items (fees, fiduciary standard, minimums, data security, process, cancellation); summary = serif question + `expand_more` icon rotating 180° when open; smooth open transition (grid-rows or max-height technique; instant fallback acceptable); hairline dividers between items. Section on `--bg-secondary`.
- **2.6.7 Final CTA:** full-bleed band, `var(--bg-inverse)` bg + `var(--text-inverse)` text; serif headline, one supporting line, a single `.btn` using `--primary`/`--primary-contrast` (auto-inverts per theme to always contrast the band), small print ("No obligation · Confidential").
- **2.6.8 Footer with secondary links:** on `--bg-inverse` tokens; flex-wrap columns — brand (wordmark, tagline, contact with `mail`/`phone` icons), three link groups (Company: About, Team, Careers; Services: section anchors; Legal: Privacy, Terms, Disclosures), newsletter `.input-group` (2.3) with success toast; bottom bar: © year, legal links, social icon links (Material Symbols, each with `aria-label`). All links show `:focus-visible`.

**2.7 Toast (`.toast`)**
- Fixed bottom-right (bottom-center on mobile), `z-index: var(--z-toast)`, `role="status"` / `aria-live="polite"`; success and error variants accented with `--text-success` / `--text-error`; auto-dismiss with CSS transition; used for newsletter signup and modal success.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` sizing, wrap/column breakpoints, zero horizontal overflow from 320px up.
- **Smooth animations:** every state change transitions with `var(--transition-normal)` (300ms ease-in-out per the source spec; list explicit properties rather than `transition: all`); all motion respects `prefers-reduced-motion` (animations reduce to none/instant).
- **Accessibility:** WCAG AA contrast in both themes (tokens above are pre-checked); never communicate state by color alone — pair color with icons or text; semantic HTML5 landmarks (`header`, `nav`, `main`, `section[aria-labelledby]`, `footer`); one `h1` with logical heading order; logical DOM/focus order; full keyboard operability — no mouse-only interactions; skip-to-content link; `aria-live` regions for form errors, toasts, and loading states.
- **Mandatory visual feedback:** every click, hover, focus, and submission produces a visible state change.
- **Data-focus micro-interactions:** chart bars animate on view; stats count up; chart bars show value chips on hover; featured pricing tier lifts on hover.
- **Swiss discipline:** navy + neutrals dominate; green/gold/burgundy appear only as semantic or accent color; hairline 1px rules; flush-left alignment; no decorative gradients or clutter.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate, complete `index.html`, `style.css`, `script.js`. The only `<script>` tags permitted: the Tailwind Play CDN and one `<script src="script.js" defer></script>`. No inline scripts, no inline styles, no inline event handlers (`addEventListener` only).
- **Naming convention:** one fixed kebab-case descriptive set — `.nav-professional`, `.data-chart-minimal`, `.service-card-clean`, `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger`, `.card`, `.pricing-tier`, `.testimonial-card`, `.faq-item`, `.input-group`, `.modal`, `.modal-overlay`, `.toast`, `.theme-toggle`, `.footer-links` — extend only in the same style; never mix BEM or any other convention.
- **External resources:** Google Fonts (Gelasio, Inter, Roboto Mono) and Material Symbols via `<link>` only; no other external assets.
- **Copy:** realistic English copy throughout (no lorem ipsum); all names, labels, and values consistent across sections.
- **Definition of done:** dark mode toggles and persists correctly; modal traps focus and closes via `Esc`/overlay; all form states demonstrable; all buttons expose hover/focus/active/loading/disabled styles; no `style=` attributes anywhere; no horizontal scroll at 320px; reduced-motion respected.
- **Output:** the complete, runnable code for all three files in one response, in this order: `index.html`, `style.css`, `script.js`.
