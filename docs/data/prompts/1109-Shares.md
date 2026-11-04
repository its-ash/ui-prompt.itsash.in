# Landing Page Build Prompt — "Shares" Theme (Ivory Terminal with Violet Pulse)

## 1. Project Overview

Build a complete, responsive landing page for a fictional fintech brand. Invent a fictional brand name, product name, tagline, and all user-facing copy. Never use any real brand name, logo, trademark, or product name. The visual style is a clinical monochrome fintech interface on near-white porcelain surfaces, where a single vivid violet (#594ff4) marks every deliberate action. No decorative gradients, no chromatic ornamentation, no shadow theatrics.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.

## 2. Architecture Rules

### 2.1 CSS-First & Zero Inline CSS
- Keep all styling strictly inside `style.css`. Forbid `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors only. HTML must remain clean, semantic, and agnostic of visual styling.

### 2.2 CSS Variables & Theme Tokens
Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:

Colors:
- `--color-signal-violet: #594ff4`
- `--color-inkstone: #1f1f1f`
- `--color-graphite: #333333`
- `--color-slate: #5d5d5d`
- `--color-smoke: #888888`
- `--color-ash: #b0b0b0`
- `--color-mist: #e7e7e7`
- `--color-cloud: #f6f6f6`
- `--color-porcelain: #ffffff` (use `#fefefe` where near-white is needed instead of pure white)
- `--color-obsidian: #000000`

Plus the mandatory generic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

Contrast pairing: every light background token must pair with a dark text token; every dark background token must pair with a light text token — enforce for every theme.

Border radius & shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, plus `--shadow-xl: rgba(0, 0, 0, 0.12) 0px 0px 60px -13px`.

Spacing & transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.

Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

Typography: `--font-base` bound to Google Font (Aeonik substitute: Inter, DM Sans, or Manrope at weights 500/700). Use Google Fonts `<link>`/`@import`. Icons via Google Material Symbols/Icons only — no raw inline SVGs or local icon files.

### 2.3 Mandatory Dark Mode
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

### 2.4 Flexbox & Mobile-First
- Use Flexbox (`display: flex`) for all layout structures.
- Every flex container must default to `align-items: center` unless an explicitly justified exception.
- All layouts mobile-responsive out of the box (rows → columns on small viewports). Prevent horizontal scrolling.

### 2.5 Tailwind CSS Integration
Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 3. Typography & Type Scale

- Primary font: Inter (Google Fonts) as Aeonik substitute, weights 500 and 700 only.
- OpenType features: `"ss01" on, "cv11" on`.
- Type scale tokens: `--text-caption` (14px/1.5), `--text-heading-sm` (20px/1.33, letter-spacing 1.5px), `--text-heading` (26px/1.2, 1.95px), `--text-heading-lg` (36px/1.15, 2.7px), `--text-display` (56px/1.1, 4.2px), `--text-display-lg` (72px/1.05, 5.4px).
- Letter-spacing 0.075em on uppercase eyebrows and display headlines.
- Sizes available: 14, 15, 16, 17, 18, 20, 26, 36, 56, 72px. Line heights 1.00–1.50.

## 4. Spacing, Shapes & Elevation

- Base unit 4px. Spacing scale: 4, 8, 12, 16, 20, 24, 28, 32, 48, 52, 96px.
- Border radius: tags/buttons 99px (pill), cards 36px, images 10px, inputs 16px, accordion 16px.
- Shadows: only `--shadow-xl` for layered product mockups. No shadows on buttons, cards, or inputs.
- Layout: max-width 1200px centered container. Section gap 64px. Card padding 32px. Element gap 24px.

## 5. Component Specifications

### 5.1 Buttons
- Pill Primary Button: Signal Violet fill, white text, Aeonik 500 16px, 99px radius, padding 12px 28px (or 16px 28px), no shadow. Text example "Get started".
- Ghost Navigation Button: transparent/white bg, Signal Violet border + text, 99px radius, Aeonik 500 16px, padding 10px 24px.
- States (CSS classes): default, hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring via CSS vars), active/pressed (transform scale 0.97), loading (disabled interactions, CSS spinner/animated Google Icon, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via --text-success/--text-error).
- Minimum touch target 44x44px. Flex layout with align-items center, justify-content center, gap 0.5rem.

### 5.2 Cards
- Feature Highlight Card: transparent/white bg, no border. Signal Violet monoline icon (2px stroke, 32px) top, heading Aeonik 700 20px Inkstone, body Aeonik 500 16px Slate, vertical rhythm 16–24px.
- Product Showcase Card: white or Cloud bg, 36px radius, 32px padding. Left: heading (Aeonik 700 36px Inkstone), body (Aeonik 500 16px Slate), CTA pill. Right: layered product mockup floating with --shadow-xl.
- States: default, hover (transform translateY(-2px) or shadow shift), focus-within (border highlight), loading skeleton (shimmer CSS, no layout jump), empty state (Google Icon + guidance text).

### 5.3 Form & Input
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container.

### 5.4 Modal/Popup
- States: opening, open, loading, success/error, closing — all animated via CSS transitions.
- Centered flex container (align-items center), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### 5.5 FAQ Accordion Item
- Cloud bg, 16px radius, padding 20px 24px. Question Aeonik 500 16px Inkstone, chevron icon right (Inkstone). Closed by default; expanded reveals body text in Slate. Instant quiet toggle.

### 5.6 Navigation Bar
- White bg, full-width, 64–80px height. Left: logo mark (Signal Violet geometric shape + wordmark). Center: nav links (Aeonik 500 16px Inkstone, dropdown chevrons). Right: Ghost or Primary pill CTA. Hairline bottom border Ash or none. Sticky top.

### 5.7 Layered Product Mockup Cluster
- Three overlapping screenshots: phone mockup front-left, dashboard panel center-right, code/JSON panel back-right. 10–16px radius each, --shadow-xl. Accent green line chart (#1AAB8B approx) inside dashboard as only secondary color.

### 5.8 Stats Display Block
- Large figure Aeonik 700 26–36px Inkstone, small percentage delta muted green below. Label Aeonik 500 14–16px Smoke above. Horizontal row, 24–32px gaps.

### 5.9 Section Eyebrow Label
- Aeonik 500 14–16px, letter-spacing 0.075em, uppercase, centered or left. Color Inkstone or Smoke. Paired with large heading below.

### 5.10 Dark Footer
- Obsidian or Inkstone bg, white/Slate text. Links Aeonik 500 16px. Padding 48–64px vertical. Logo, nav columns, legal text in multi-column grid. Full-bleed.

### 5.11 Stat Badge / Tag
- 99px radius, padding 4px 12px, Aeonik 500 14px. Variants: Signal Violet bg + white text (active/selected), or Cloud bg + Inkstone text (neutral).

## 6. Page Sections (in order)

1. **Hero**: centered headline (Aeonik 700, 72px, Inkstone, line-height 1.05, letter-spacing 0.075em) + subtext (Aeonik 500, 17px, Slate, line-height 1.50). Below: layered product mockup cluster.
2. **Features**: 3-column grid of Feature Highlight Cards (icon + heading + body).
3. **How It Works**: 3 steps with numbers/icons, headings, descriptions.
4. **Testimonials**: quote cards with author name/role.
5. **Pricing**: 3 tiers with price, feature list, CTA pill.
6. **FAQ**: centered single column max-width ~720px of FAQ Accordion Items.
7. **Final CTA**: centered headline + subtext + primary pill button.
8. **Footer**: dark full-bleed band with logo, nav columns, legal text, secondary links.

## 7. Core UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels on custom widgets; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No animations, parallax, or scroll-triggered effects beyond state transitions (system is static and clinical).

## 8. Do's and Don'ts

Do:
- Use #594ff4 exclusively for primary actions, active states, brand iconography — never decorative/background.
- 99px radius on all interactive buttons (pill).
- 36px radius + 32px padding on content cards.
- Aeonik 500 body/UI, Aeonik 700 headings — no other weights/families.
- 0.075em letter-spacing on uppercase eyebrows and display headlines.
- #f6f6f6 Cloud as card surface (elevation via tint, not shadow).
- Reserve single soft shadow for floating product mockups only.
- Section gaps 64px, element gaps 24px.

Don't:
- No additional chromatic colors (98% monochrome).
- No sharp corners (0–4px) on cards/images — 16px+ radius.
- No heavy drop shadows on UI elements.
- No gradient fills anywhere (flat by design).
- No serif/slab/display fonts.
- No body text above 16px or headings below 26px.
- No emoji or multicolor icon sets — monoline monocolor 1.5–2px stroke.
- No parallax/scroll-triggered effects.

## 9. Copy & Brand

Invent a fictional brand name, product, and all copy. All user-facing copy must be in English. Placeholders allowed only where content genuinely unspecified. No lorem-ipsum-only submissions where real copy supplied — here all copy is to be invented by the coding AI.

## 10. Output

Produce `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point. BEM naming throughout. Ensure dark mode toggle, localStorage persistence, prefers-color-scheme fallback, and full accessibility.
