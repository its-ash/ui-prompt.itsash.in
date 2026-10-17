# Landing Page — Basha-Franklin Style (Fictional Brand)

## 1. Architecture & Strict Rules

**1.1 CSS-First & Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML. Target visuals only via class/ID selectors. Keep HTML semantic and styling-agnostic.

**1.2 CSS Variables & Theme Tokens**
Define in `:root` (and `.dark`/`@media (prefers-color-scheme: dark)`):
- Colors: `--color-plaster-canvas: #f4ede6`, `--color-gallery-white: #fefefe`, `--color-ink: #000000`, `--color-footer-cream: #eddbcc`, `--color-reception-navy: #001060`, `--color-terracotta-wash: #e5c0a4`; plus standard tokens `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Contrast pairing: light backgrounds pair with dark text, dark backgrounds with light text in every theme.
- Light background must not be pure white; use `#fefefe` where white is needed.
- Radius/shadows: `--radius-sm: 0px`, `--radius-md: 0px`, `--radius-lg: 0px`, `--shadow-sm: none`, `--shadow-md: none`.
- Spacing/transitions: `--spacing-gap: 9px`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode**
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark`. Persist choice via `localStorage`, fallback to `prefers-color-scheme`, visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox & Mobile-First**
- All layouts via Flexbox. Default `align-items: center` unless justified. Mobile-responsive, no horizontal scroll.

**1.5 Tailwind Integration**
- Use Tailwind CSS or clean custom CSS driven by `@layer`/`@apply`. Utilities map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts)**
- Text: Google Fonts (substitute STKBureau-Sans with Arial/Helvetica, STKBureau-Serif with Cormorant Garamond/Georgia). Bind to `--font-base`.
- Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 2. Component Specifications

**2.1 Buttons**
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled, CSS spinner/animated icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary styles via `--text-success`/`--text-error`.
- All buttons 0px radius, transparent backgrounds, Ink or Footer Cream text. No filled conversion buttons.

**2.2 Cards**
- Default: flex layout, subtle borders, elevation via `--bg-secondary` and variables.
- Hover: `transform: translateY(-2px)` or shadow shift.
- Focus-within: highlight borders on child focus.
- Loading (Skeleton): shimmer animation.
- Empty State: Google Icon + guidance text.
- 0px radius, no shadows, 0px padding inside project tiles.

**2.3 Forms & Inputs**
- States: Empty, Focused, Filled, Valid, Invalid, Disabled, Read-only.
- Structure: flex container with label, input, error feedback.
- Footer newsletter field: transparent navy bg, Footer Cream text, 1px Footer Cream rule, 0px radius/padding, paired with transparent 14px arrow button.

**2.4 Modal/Popup**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex, backdrop overlay, Google Icon close button, focus trapping, Esc/overlay close.

## 3. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 4. Deliverables
- Files: `index.html`, `style.css`, `script.js`. No inline script blocks beyond single deferred entry point.
- Naming: one consistent convention (BEM or fixed utility set), never mixed.
- No unrequested placeholders where real copy supplied; placeholders only where content unspecified.

## 5. Brand & Copy Rule
The source style references a real brand. The coding AI must invent a fictional brand name, product, and copy. Never use the real brand name "Basha-Franklin", its logo, trademarks, or product names anywhere in the page. All user-facing copy must be in English.

## 6. Page Sections
Build a complete landing page with: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 7. Style Application
- Plaster Canvas `#f4ede6` as primary page field; Gallery White `#fefefe` only for masthead/bright planes.
- Eyebrows/compact links: 12px uppercase STKBureau-Sans, 15.6px line height, +0.48px tracking.
- Editorial nav/lead statements: 29px STKBureau-Serif, 34.2px line height, -0.576px tracking.
- All buttons/inputs/cards/links/images at 0px radius.
- 1px Ink grid rules for project columns; 0px padding inside tiles.
- Spacing: 9px close relationships, 36px nav group separation, 93px major footer groups.
- Navy footer with Footer Cream text/controls.
- No rounded corners, pills, shadows, gradients, multicolor accents.
- Terracotta Wash only for large warm feature surfaces/decorative fills.
- Architecture photography as principal visual language; sharp-cornered rectangular cells, edge-to-edge crops.

## 8. Layout
- Thin Gallery White masthead spanning viewport: centered wordmark, menu trigger left, social links right.
- Full-bleed photography below header; then Plaster Canvas portfolio index with continuous Ink rules.
- Asymmetric three-column mosaic: text in grid cells above/beside raw rectangular images; varied tile dimensions.
- Sections flow without alternating color bands until large Reception Navy footer endcap.
- Spacious at section scale, compact within captions/utilities/grid seams.

## 9. Dark Mode
- Define dark tokens. Maintain contrast pairing. Persist via localStorage with prefers-color-scheme fallback. Visible toggle with aria-pressed/aria-label.

Output only the finished prompt. No preamble or closing commentary. Mirror Sections 1–4 structure.
