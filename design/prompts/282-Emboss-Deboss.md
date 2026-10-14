# CODING PROMPT — Complete Landing Page · Theme: "Emboss / Deboss"

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build the complete landing page described below in a single attempt — full, production-ready code. No clarifying questions, no partial deliverables.

**Project Brief**

- **Deliverable:** A one-page marketing landing page for one coherent, fictional product you invent to fit the theme — a premium, tactile, print-heritage concept (e.g., an artisan stationery house, a letterpress design studio, or a premium typography toolkit). Write all user-facing copy yourself, in **English**, around that single concept.
- **Theme:** Emboss / Deboss — letterpress UI. Type looks stamped into or raised from tinted, tactile surfaces via a subtle 1px light/dark text-shadow pair. Keywords: pressed type, letterpress UI, tactile premium feel, morphism. Era: 2000s–present.
- **Output Category:** Glass & Soft UI — express soft-UI morphism through inset/outset tactile shadow pairs. No glass blur or `backdrop-filter` is required; the emboss/deboss system *is* the morphism signature.
- **Sections, in order:** Sticky header/nav → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.
- **Color Modes:** The source style declares no light/dark modes; therefore you must design, implement, and validate **both Light and Dark themes** before considering the build complete.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS

- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors defined in `style.css`.
- **Minimal HTML Modifications:** HTML must remain clean, semantic, and agnostic of visual styling — retheming the site must require editing only the CSS file.
- **Script Isolation:** Exactly one `<script src="script.js" defer></script>` reference. No inline `<script>` blocks. (An external Tailwind CDN `<script src="...">` tag is permitted; any *inline* Tailwind config block is not.)

### 1.2 CSS Variables & Theme Tokens

Store every visual token in `:root`, with dark-mode overrides under a `.dark` class and `@media (prefers-color-scheme: dark)`. Use this canonical token block (adapted from the theme reference — keep these exact names):

```css
:root {
  /* backgrounds & text (light) */
  --bg-primary: #dbd6cb;    /* page background — warm paper; never #ffffff */
  --bg-secondary: #d3cebf;  /* raised surfaces: header, cards */
  --bg-inset: #c8c2b0;      /* pressed wells: inputs, badges, icon wells */
  --text-primary: #4a4538;
  --text-secondary: #6e6857;
  /* brand */
  --primary: #7a5a3a;
  --secondary: #a8763f;
  /* feedback — pick muted green/brick-red hues harmonized with the warm
     palette; must pass WCAG AA on BOTH themes (suggested light-mode starts:
     --text-success: #4e6b3f; --text-error: #9c3a28) */
  --text-success: /* ... */;
  --text-error: /* ... */;
  --border-default: #b8b1a0;
  --border-success: /* ... */;
  --border-error: /* ... */;
  /* signature emboss/deboss pair */
  --shadow-lo: rgba(60, 55, 40, 0.45);
  --shadow-hi: rgba(255, 255, 250, 0.65);
  --emboss-text: 1px 1px 0 var(--shadow-hi), -1px -1px 1px var(--shadow-lo);
  --deboss-text: -1px -1px 0 var(--shadow-hi), 1px 1px 1px var(--shadow-lo);
  /* radius / shadow / spacing / motion / stacking */
  --radius-sm: 4px; --radius-md: 8px; --radius-lg: 14px; --radius-pill: 999px;
  --shadow-sm: 1px 1px 2px var(--shadow-lo), -1px -1px 1px var(--shadow-hi);
  --shadow-md: inset 2px 2px 3px var(--shadow-lo), inset -2px -2px 3px var(--shadow-hi);
  --shadow-lg: inset 3px 3px 6px var(--shadow-lo), inset -3px -3px 6px var(--shadow-hi);
  --spacing-gap: 24px; /* plus the --space-1 … --space-24 scale */
  --transition-fast: 150ms; --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;
  /* typography — Google Fonts, bound to --font-base */
  --font-base: 'Lora', 'EB Garamond', serif;   /* choose & load via Google Fonts */
  --font-display: 'Libre Caslon Display', 'Playfair Display', serif;
}
```

- **Contrast Pairing:** Every light background token must pair with a dark text token, and every dark background token with a light text token — enforce this pairing in **every** theme, not only the default.
- **Light Background Rule:** Never default to pure white; the warm paper tones above are the light-mode surfaces. If a near-white is genuinely needed, use `#fefefe`, never `#ffffff`.
- **Token Renaming:** The theme reference uses `--color-*` names; you must normalize everything into the canonical names above. `--bg-inset`, `--shadow-hi`, `--shadow-lo`, `--emboss-text`, and `--deboss-text` are approved theme extensions.

### 1.3 Mandatory Dark Mode Support

- **Implementation:** Provide dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`; the class must override the media query.
- **Dark Palette:** Design a warm dark counterpart (suggested starting point — validate and adjust for WCAG AA): `--bg-primary: #26221c; --bg-secondary: #2f2a22; --bg-inset: #1f1b15; --text-primary: #ece5d6; --text-secondary: #b3aa97; --primary: #c79a63; --secondary: #d9a86a; --border-default: #453f33; --shadow-lo: rgba(0,0,0,0.6); --shadow-hi: rgba(255,250,235,0.14)`.
- **Shadow Recalibration:** The emboss/deboss light/dark pair must be recalibrated for dark surfaces so stamped type remains legible — never reuse light-mode shadow values verbatim in dark mode.
- **Theme Switching:** Background and text variables must switch seamlessly with zero HTML restructuring.
- **Persistence:** Store the user's choice in `localStorage` (fall back to `prefers-color-scheme` on first visit) and provide a visible toggle control in the header with correct `aria-pressed` and a dynamic `aria-label` ("Switch to dark theme" / "Switch to light theme"). Initialize the theme at the top of `script.js` to minimize flash of the wrong theme.
- **Validation Clause:** The source style declares no color modes — treat dual-mode validation as a release gate, not an option.

### 1.4 Flexbox Layout & Mobile-First Alignment

- **Default Alignment Rule:** Every flex container must default to `align-items: center` unless an exception is explicitly justified in a CSS comment.
- **Mobile-Friendly First:** All flex layouts must be responsive out of the box — rows convert to columns on smaller viewports. No horizontal scrolling at any width from 320px up.
- **Sticky Header Offset:** Apply `scroll-margin-top` to all anchored sections so the sticky header never covers section headings.

### 1.5 Framework Default & Tailwind CSS Integration

- Use Tailwind CSS or clean custom CSS driven by `@layer` / `@apply`. If using the Tailwind CDN, do so **without an inline config block** — bind utilities to CSS variables via arbitrary values (e.g., `bg-[var(--bg-secondary)]`).
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`). No hardcoded hex values outside `:root` and the theme override blocks.

### 1.6 Typography & Icons (Google Fonts Mandatory)

- **Text:** Load Google Fonts via `<link>` (with preconnect) and bind them to `--font-base` and `--font-display`. Honor the theme's Georgia/Caslon letterpress intent with Google Fonts serif equivalents (e.g., `Lora` or `EB Garamond` for body, `Libre Caslon Display` or `Playfair Display` for headings). *Exception clause: the theme's Georgia/Caslon references express serif intent only — do not ship local or system font stacks as the primary faces.*
- **Icons:** Use Google Material Symbols (Rounded variant) for every icon — navigation, feature icons, checkmarks, stars, expand arrows, theme-toggle sun/moon, social glyphs, close buttons. Raw inline SVGs, local icon files, and emoji icons are forbidden.
- **Avatars:** Render testimonial avatars as initials set in a debossed circular well, or as a Material Symbol `person` icon.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component Requirements

Style all states via BEM classes (`.btn`, `.btn--primary`, `.btn--ghost`, `.btn--loading`, `.btn-danger`):

- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` Minimum touch target 44×44px. Embossed label (`--emboss-text`) on a raised surface (`--shadow-sm` combined with a soft drop shadow).
- **Hover:** Elevation/shadow shift or subtle brightness change, with `cursor: pointer`.
- **Focus:** Distinct `:focus-visible` ring built from `--primary` (`outline`/`box-shadow`, 2px offset) for keyboard navigation.
- **Active/Pressed:** The signature tactile moment — text flips to `--deboss-text`, surface swaps to inset `--shadow-lg`, plus `transform: scale(0.97)`.
- **Loading:** Disables interaction and prevents double-clicks/double-submits; renders a CSS border spinner or pulsing Material Symbol without changing button dimensions; expose `aria-busy="true"`.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback states driven by `--text-success` / `--text-error`, always paired with an icon or text — never color alone.
- **Danger:** `.btn-danger` must be visually distinct in both light and dark themes.
- The Final CTA submit button must demonstrate the full sequence: idle → loading → success (or error).

### 2.2 Card Component Requirements

Applies to Features cards, Testimonial cards, and Pricing tiers:

- **Default:** Flexible Flexbox (column) layout, `--bg-secondary`, `--radius-lg`, 1px `--border-default`, subtle elevation.
- **Hover:** `transform: translateY(-2px)` plus a shadow shift — apply one consistent hover behavior across all card types.
- **Focus-within:** Card border/accent highlights when a child link or button receives focus.
- **Loading (Skeleton):** Define a shimmer animation in CSS (`.card--skeleton`) that prevents layout jumps, even if only demonstrated on one card.
- **Empty State:** Define a structured fallback layout (`.card--empty`) featuring a Google Material Symbol and clear guidance text; use it for the form feedback area.

### 2.3 Form & Input Requirements (Final CTA email capture)

- **States:** Empty, Focused (debossed well deepens + `--primary` ring via `color-mix`), Filled, Valid (`--border-success` + check icon), Invalid (`--border-error`, red text, error icon, message), Disabled, Read-only.
- **Structure:** `.input-group` as a flex column wrapping a visible `<label>`, the `.input` field (debossed well: `--bg-inset` + `--shadow-md`), and a dedicated error/success feedback container with `aria-live="polite"`.
- **Validation:** Validate email format on blur and on submit; render inline messages; on success show a check icon and confirmation copy.

### 2.4 Modal / Popup Requirements

Applies to any overlay you choose to add (optional — e.g., a "compare plans" dialog). If none is implemented, keep `--z-modal` reserved and unused:

- **States:** Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
- **UX Features:** Centered flex container (`align-items: center`), backdrop overlay, Google Material Symbol close button, keyboard focus trapping, `role="dialog"` + `aria-modal`, and closing via `Esc` or overlay click.

### 2.5 FAQ Accordion Requirements

- Prefer native `<details>` / `<summary>`; otherwise use the ARIA button + region pattern with `aria-expanded` and `aria-controls`.
- Summary row: embossed question text, rotating Material Symbol `expand_more` icon, full-width touch target, clearly visible focus state.
- Animate expansion with CSS only; collapse animations under `prefers-reduced-motion`.

### 2.6 Pricing Requirements

- Three tiers; the middle tier is featured with a stronger raised treatment (deeper outset shadow or `--secondary` border) and a debossed `.badge` reading "Most Popular".
- Each tier: name, price set in embossed display type, billing period, feature list with Material Symbol `check` icons, and a CTA button with full §2.1 states (featured tier uses `.btn--primary`).
- Stack to a single column on mobile.

### 2.7 Testimonials Requirements

- Three cards: quote text, star rating (Material Symbol `star`), avatar (initials in a debossed circle), name, and role.
- Card hover and focus-within behavior per §2.2.

### 2.8 Header, Navigation & Theme Toggle Requirements

- Sticky header built on the theme's `.nav` pattern: flex, `align-items: center`, `--bg-secondary`, inset shadow, `--z-dropdown`.
- Desktop: inline anchor links to every section. Mobile: hamburger (Material Symbol `menu`) opening a drawer with focus trapping and `Esc`-to-close.
- Theme toggle per §1.3, placed in the header. Anchor navigation uses smooth scrolling, disabled under reduced motion.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** Fluid sizing and responsive breakpoints with zero horizontal overflow.
- **Smooth Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`), fully respecting `prefers-reduced-motion` (disable transforms, shimmer, and drawer/modal slides).
- **Accessibility (a11y):** WCAG AA contrast in both Light and Dark modes. Never rely solely on color to communicate state. Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), exactly one `<h1>` (in the Hero), logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback (form errors, success messages, loading states), and a skip-to-content link.
- **Mandatory Visual Feedback:** Every click, hover, or submission must trigger a visible state change.
- **Emboss Legibility Guard:** Text-shadow pairs must stay 1px-subtle and must never substitute for real color contrast.
- **Destructive Actions:** Any `.btn-danger` or delete-style action must be visually distinct in both themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** Separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond the single deferred entry-point reference. Zero `style=` attributes.
- **Naming Convention:** BEM only (`block__element--modifier`) across the entire deliverable — never mix conventions.
- **Copy:** Write realistic, on-brand English copy around your invented product concept. No lorem-ipsum-only submissions; placeholders only where content is genuinely unspecified.
- **script.js Scope:** Theme toggle + persistence, mobile drawer, optional FAQ single-open enhancement, email form validation with loading/success/error flow, and footer year. No other behavior; no external JS libraries.
- **Quality Gate:** Valid semantic HTML, no console errors, both themes visually validated, no horizontal scroll from 320px up.

---

## 5. EMBoss / DEBOSS SIGNATURE TECHNIQUE — REFERENCE

Condensed from the reference specification; port into your BEM class structure using the canonical token names from §1.2 (do not keep `--color-*` names):

- **Usage Map:** Headings, nav links, buttons, prices, and section titles are **embossed** (`--emboss-text`). Inputs, badges, step-number wells, icon wells, and placeholders are **debossed** (`--deboss-text`). Button `:active` flips emboss → deboss — that press is the theme's signature micro-interaction.
- **Component Reference:** `body` uses `--bg-primary` / `--text-primary` / `--font-base`. `.nav` is a flex bar on `--bg-secondary` with `--shadow-md`. `.btn` combines `--shadow-sm` + `--shadow-md`, transitions shadows with `--ease-standard`, and its `.btn--primary` variant uses `--secondary` as surface with a dark warm text color. `.card` sits on `--bg-secondary` with `--radius-lg` and a soft drop shadow. `.input` is a debossed well on `--bg-inset`. `.badge` is a debossed pill on `--bg-inset` with `--radius-pill`.
- **Textured Background:** Optionally add a subtle paper-grain texture using CSS gradients only (no image files); it must not reduce text contrast in either theme.
- **Dark Mode:** Recalibrate `--shadow-hi` / `--shadow-lo` per §1.3 and re-validate the stamped-type legibility.

---

## 6. SECTION-BY-SECTION REQUIREMENTS

1. **Header:** Sticky nav — wordmark in embossed display type, anchor links, theme toggle, compact CTA button; mobile hamburger drawer per §2.8.
2. **Hero:** Debossed `.badge` value proposition, `<h1>` in embossed display type, supporting subcopy in `--text-secondary`, primary + secondary CTA buttons, and a tactile visual composition built purely from embossed/debossed CSS surfaces (no image files required).
3. **Features:** Section heading + intro, then 3 cards — each with a Material Symbol icon inside a debossed circular well, embossed `<h3>`, and descriptive copy.
4. **How It Works:** 3 steps — each with a debossed number well (01/02/03), title, and description; horizontal with a connecting rule on desktop, stacked on mobile.
5. **Testimonials:** 3 cards per §2.7.
6. **Pricing:** 3 tiers per §2.6.
7. **FAQ:** 5–6 accordion items per §2.5.
8. **Final CTA:** A raised panel (`--radius-lg`) with embossed heading, subcopy, and the email-capture `.input-group` per §2.3, including the full submit lifecycle (idle → loading → success/error with `aria-live` feedback).
9. **Footer:** Secondary links grouped into 3–4 columns, social icons (Material Symbols), auto-updating copyright year, and a small embossed wordmark.

**Definition of Done:** All sections present and populated with real English copy · both themes toggleable, persisted, and AA-validated · every component state from §2 implemented in CSS · zero inline styles or inline scripts · keyboard-navigable end to end · no horizontal scroll · no console errors.
