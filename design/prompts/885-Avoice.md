# Landing Page — Avoice Style (Fictional Brand)

## 1. Strict Rules & Architecture

### 1.1 CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. No `style="..."` attributes anywhere in the HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can be changed by editing CSS alone.

### 1.2 CSS Variables & Theme Tokens
Store all visual tokens inside `:root` (and theme classes) using CSS variables. Required tokens from the Avoice palette:

Colors:
- `--color-drawing-ink: #0a1217`
- `--color-paper: #ffffff`
- `--color-drafting-gray: #f1f1f1`
- `--color-hairline: #e6e7e8`
- `--color-stone: #85898b`
- `--color-graphite: #54595d`
- `--color-archive-black: #000000`
- `--color-signal-lime: #cdfe00`
- `--color-blueprint-wash: #dceaf8`
- `--color-material-wash: #f4e3cd`
- `--color-site-wash: #ddefe2`
- `--color-review-status: #5b4678`
- `--color-input-status: #9a6700`
- `--color-complete-status: #1a7f55`
- `--color-plan-blue: #24476b`

Also define the standard meta-tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.

Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text, in every theme.

Light mode background must not be pure white; use `#fefefe` where a near-white is needed.

Border radius tokens: `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 24px`. Shadow tokens: `--shadow-subtle`, `--shadow-md`, `--shadow-xl` as specified.

Spacing scale: 4, 5, 6, 8, 9, 10, 11, 12, 14, 16, 20, 24, 36, 40, 44, 56 (px).

Typography: `--font-aspekta` (substitute Google Font Inter, weights 350–700) and `--font-ui-monospace` (substitute Geist Mono, weights 350/700). Define type scale tokens: `--text-micro-label`, `--text-product-tab`, `--text-utility-link`, `--text-utility-nav`, `--text-body`, `--text-trust-heading`, `--text-card-heading`, `--text-hero-display`, `--text-section-display`, `--text-dark-section-display` with the exact sizes, weights, line-heights, and letter-spacing from the spec.

### 1.3 Mandatory Dark Mode
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless an explicitly justified exception exists.
- All layouts must be mobile-responsive (rows collapse to columns on small viewports). No horizontal scrolling.

### 1.5 Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 1.6 Typography & Icons (Google Fonts Mandatory)
- Use Google Fonts for text (Inter as Aspekta substitute) and icons (Google Material Symbols/Icons).
- Forbid raw inline SVGs or local icon files. Include `<link>`/`@import` tags and bind text to `--font-base`.

## 2. Component Design Specifications

### 2.1 Button Component
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min touch target 44×44px.
- Hover: visual shift (brightness/shadow), `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disable interactions, prevent double-clicks, render CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles driven by `--text-success`/`--text-error`.

Lime Pill Demo Button variant: `#cdfe00` fill, `#0a1217` label in Aspekta 14px weight 550 with 0.35px tracking, 999px radius, 24px horizontal padding, no border.

Secondary Gray Tile Button variant: `#f1f1f1` fill, `#0a1217` text, 1px `#e6e7e8` border, 8px radius, 36px padding all sides.

### 2.2 Card Component
- Default: flexible flexbox layout, subtle borders and elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight card borders when a child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and clear guidance text.

Platform Feature Card: `#f1f1f1` background, 8px radius, 36px internal padding, `#0a1217` heading in Aspekta 24px weight 550 with -0.24px tracking. Embed a white product widget with 12px radius and 16px padding near the lower edge.

### 2.3 Form & Input
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, and dedicated error feedback container.

### 2.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via `Esc` or overlay click.

## 3. Core UX & Micro-Interaction Rules
- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both Light and Dark modes; never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions (`.btn-danger`) visually distinct in both themes.

## 4. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM or fixed utility set) across the entire deliverable — never mix conventions.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders only where content was genuinely unspecified.

## 5. Brand & Copy Rule (Fictional Brand)
This spec describes the visual style of a real brand. Reuse the style only: invent a fictional brand name, product, and copy. Never use the real brand name "Avoice", its logo, trademarks, or product names anywhere in the page. All user-facing copy must be in English.

## 6. Page Structure — Sections to Build
1. **Announcement Strip** — full-width `#cdfe00` background, `#0a1217` text; 10px weight-650 label on a `#0a1217` dark chip tracked at 1.2px; compact 13px report text with report link at weight 550.
2. **Two-Tier Header** — `#ffffff` surface divided by 1px `#e6e7e8` rules; utility nav Aspekta 13px weight 350; primary nav 15px weight 400; small 6px gaps around compact controls.
3. **Hero Split Panel** — `#0a1217` left panel with 35.2px radius and neighboring 24px-radius visual panel. Title in `#ffffff` Aspekta 48px weight 650, uppercase, 45.6px line-height, -1.2px tracking; supporting copy in muted light gray. Include a `#cdfe00` 999px demo button.
4. **Trust Logo Tile row** — monochrome marks on `#f1f1f1`, 8px radius, no shadow, visually quiet against `#ffffff` canvas.
5. **Features (3 cards)** — `#f1f1f1` background, 8px radius, 36px padding, `#0a1217` Aspekta 24px weight 550 titles with -0.24px tracking. Embed a `#ffffff` 12px-radius document widget at the card base.
6. **How It Works (3 steps)** — pale workflow modules (`#dceaf8`, `#f4e3cd`, or `#ddefe2`), 24px or 35.2px radius, `#0a1217` titles, uppercase utility link style (Aspekta 12px weight 550, 0.96px tracking).
7. **Testimonials** — document-preview cards: `#ffffff`, 12px radius, 16px padding, 1px `#e6e7e8` dividers; metadata in `#85898b`, progress strokes in `#24476b`, completion marks in `#1a7f55`.
8. **Pricing (3 tiers)** — cards with hairline borders, no shadow; highlight tier with `#cdfe00` accent; Lime Pill Demo Button for primary CTA.
9. **FAQ** — accordion-style, `#e6e7e8` dividers, `#0a1217` questions, `#54595d` answers.
10. **Final CTA** — `#000000` full-width surface, `#ffffff` display text, `#cdfe00` as the only saturated callout.
11. **Footer** — `#000000` surface, `#ffffff` text, secondary links; broad rounded dark modules only where product content needs containment.

## 7. Dark Product Tab (interactive preview)
Compact dark product tab bar: transparent 22.4px-radius tabs with `rgba(255,255,255,0.75)` Aspekta 11px labels (uppercase, 0.88px tracking); selected tab renders as `#ffffff` with `#0a1217` text.

## 8. Do's and Don'ts
Do:
- Use `#ffffff` as main canvas and `#0a1217` for major contrast sections.
- Reserve `#cdfe00` for Lime Pill Demo Buttons, selected states, announcement emphasis, and graphic framing.
- Set hero display copy in Aspekta 48px weight 650 with -1.2px tracking and 45.6px line-height when uppercase.
- Set dark-section display copy in Aspekta 56px weight 650 with -1.96px tracking and 54.88px line-height.
- Use Aspekta 12px weight 550 with 0.96px tracking for uppercase utility links.
- Use 1px `#e6e7e8` borders and no shadow for ordinary white cards.
- Use 999px radii for demo buttons and status badges; 12px for document cards; 24px or 35.2px for major feature panels.

Don't:
- Do not use gradients; all major surfaces are solid fills.
- Do not apply `#cdfe00` as a page background or body-text color outside short highlighted signals.
- Do not replace `#0a1217` feature fields with softer charcoal tones.
- Do not use a 16px default radius for every component; reserve 16px for media and image containers.
- Do not make public navigation heavier than Aspekta 15px weight 400 or utility navigation heavier than 13px weight 350.
- Do not add shadows to standard cards; keep them flat with `#e6e7e8` hairlines.
- Do not use semantic badge colors outside compact product-status contexts.

## 9. Imagery & Layout Notes
- Product-led imagery: contained software screenshots showing specifications, status lists, progress bars, and document markup; architecture photography and black-on-white plan drawings for domain context.
- Photography dark and atmospheric, often cropped behind a floating white product interface; plans as raw technical sheets, sometimes framed by `#cdfe00` side blocks.
- Icons small, monochrome outlined utility marks.
- Section gap 24px; card padding 16px; element gap 6px.

## 10. Output
Produce `index.html`, `style.css`, and `script.js` only. Use semantic HTML5, Google Fonts (Inter + Material Symbols), and Tailwind-driven custom CSS. Ensure full accessibility, dark mode support, and responsive behavior. All copy in English. Invent a fictional brand name and product — never reference "Avoice".
