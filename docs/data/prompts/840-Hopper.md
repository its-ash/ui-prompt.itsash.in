# Coding AI Prompt — Hopper-Themed Landing Page

## 1. Project Overview & Deliverables

Build a complete, responsive landing page inspired by the **Hopper** visual style reference. The page must use a **fictional brand name, product, and copy** — never the real brand name, logo, trademarks, or product names. All user-facing copy must be in English.

Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere in the HTML.

## 2. CSS-First Architecture & Tokens

All styling lives in `style.css`. Use class/ID selectors only. Keep HTML semantic, clean, and agnostic of visual styling.

Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`):

**Colors (Light):**
- `--color-hopper-blue: #1878ec`
- `--color-white: #ffffff` (use `#fefefe` where near-white is needed)
- `--color-cloud: #f6f6f6`
- `--color-mist: #ededed`
- `--color-divider-gray: #d9d9d9`
- `--color-ink: #111111`
- `--color-graphite: #606060`
- `--color-placeholder-gray: #b3b3b3`

**Contrast pairing:** light backgrounds pair with dark text; dark backgrounds pair with light text. Enforce in every theme.

**Typography:**
- `--font-base: 'Nunito Sans', sans-serif` (substitute for Proxima Nova), loaded via Google Fonts.
- Font weights: 400, 600, 700, 800.
- Type scale tokens: `--text-destination-link` (14px/1.43/400), `--text-body` (16px/1.5/400), `--text-nav` (16px/1.5/600), `--text-section-heading` (20px/1.4/700), `--text-card-heading` (24px/1.33/700), `--text-app-heading` (32px/1.25/800).
- Letter spacing: `-0.16px` on tightened 16px UI text; otherwise normal.

**Spacing & Shapes:**
- Base unit 4px. Spacing scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56 (as `--spacing-*`).
- Section gap: 48px. Card padding: 12px. Element gap: 8px.
- Border radius: cards 16px, links 4px, pills 9999px, images 32px, inputs 0px, buttons 1000px, compact controls 12px.
- Shadows: `--shadow-sm`, `--shadow-md` (used sparingly; surfaces rely on tonal shifts and 1px borders, not shadows).
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

**Dark Mode:** Mandatory. Define dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle with correct `aria-pressed`/`aria-label`.

## 3. Layout & Framework

Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

Flexbox for all layout structures. Every flex container defaults to `align-items: center` unless explicitly justified. Mobile-first, responsive, no horizontal overflow.

Google Fonts mandatory for text and icons: use Google Material Symbols/Icons for all icons. No raw inline SVGs or local icon files.

## 4. Component Specifications

**Hero:** Contained destination photograph with 32px radius. Overlay transparent navigation row in white (`#ffffff`, 16px/24px, weight 600) with white line icons. Right-aligned utility controls (sign-in button: transparent fill, 1px white border, 12px radius, 8px/24px padding; circular utility icon button: transparent fill, 1px white outline, 50% radius, 8px padding). Centered horizontal booking search bar: white pill (9999px radius), 1px `#d9d9d9` field dividers, `#111111` values, `#b3b3b3` placeholders, 24px left / 25px top / 7px bottom / 4px right padding. Circular `#1878ec` search submit button (9999px radius) seated inside the right end of the bar.

**Features (3 cards):** Flat `#f6f6f6` surface, 16px radius, no shadow, no internal card padding. 1px `#d9d9d9` border only where separation from white background is needed. Image-first composition.

**How It Works (3 steps):** White content space, numbered steps with `#1878ec` accents, 1px `#d9d9d9` dividers, compact Proxima Nova headings.

**Testimonials:** White surface, `#111111` quote text, `#606060` attribution, subtle 1px `#d9d9d9` borders.

**Pricing (3 tiers):** Flat surfaces, `#f6f6f6` for standard tiers, `#1878ec` promotional tile (32px radius, no shadow, white copy/icons) for highlighted tier. 1px `#d9d9d9` borders where needed.

**FAQ:** Accordion-style, `#ffffff` surface, 1px `#d9d9d9` dividers, `#111111` questions, `#606060` answers. Keyboard-accessible expand/collapse.

**Final CTA:** `#1878ec` promotional tile (32px radius, no shadow, white copy), or white surface with blue button.

**Footer:** `#ededed` band. 20px/28px weight-700 `#111111` section heading. Four columns of `#1878ec` 14px/20px weight-400 links, 8px vertical rhythm. Graphite `#606060` secondary text.

## 5. Button Component Requirements

Style all states via CSS classes:
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`), min touch target 44x44px.
- Hover: visual shift (brightness/shadow), `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success` / `--text-error`.

## 6. Card Component Requirements

- Default: flexible flexbox, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty State: structured fallback with Google Icon and guidance text.

## 7. Form & Input Requirements

States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: flex container wrapping label, input field, and dedicated error feedback container.

## 8. Modal / Popup Requirements

States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions). Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 9. Core UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth animations on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.

## 10. Naming Convention

Use BEM consistently across the entire deliverable. Never mix conventions.

## 11. No Unrequested Placeholders

Do not use lorem-ipsum-only submissions where real copy/labels are expected; placeholders allowed only where content is genuinely unspecified.

## 12. Imagery & Iconography

Photography is the primary atmospheric visual. Use placeholder images with appropriate alt text. Icons are compact white or dark line symbols (Google Material Symbols). QR code and store-rating graphics as functional acquisition proof in the app section.

## 13. Do's and Don'ts (Enforced)

**Do:**
- Use `#ffffff` as default content surface; reserve `#f6f6f6`/`#ededed` for muted section bands.
- Use `#111111` for headings at specified sizes/weights.
- Use `#1878ec` for search submission, destination links, compact promotional surfaces.
- Use 1000px/9999px radii for horizontal hero controls and search surfaces.
- Use 32px radii for large photographic hero frames and blue promotional tiles.
- Use 1px solid `#d9d9d9` dividers between search fields and on bordered card edges.
- Keep common control padding at 8px vertical / 12px horizontal; 8px gaps between tightly related controls.

**Don't:**
- No drop shadows on `#f6f6f6` cards or `#1878ec` promotional tiles.
- No `#1878ec` as page background; confine to links, search submission, contained promotional areas.
- No dark text or filled dark buttons replacing hero navigation's transparent white treatment.
- No sharp corners on hero imagery; retain 32px image radius.
- No more than 1px `#d9d9d9` border for structural separation.
- No navigation, sign-in, or trip links below 16px/24px weight 600.
- No individually rounded search inputs; retain shared white pill surface and 0px field radii.
