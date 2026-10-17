# Coding AI Prompt — Adopt Editorial Landing Page

You are building a complete landing page in the "Adopt" editorial broadsheet style. Output separate `index.html`, `style.css`, and `script.js` files. No inline CSS. Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) with all utility classes mapping to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`). Enforce one consistent class-naming convention (BEM or a fixed utility set) across the entire deliverable — never mix conventions. No inline `<script>` blocks beyond a single deferred entry-point reference.

## 1. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. Forbid `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so changing the look requires modifying only CSS.

## 2. CSS Variables & Theme Tokens
Store all visual tokens in `:root` (and theme classes) using CSS variables:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Adopt palette (light): `--color-bone: #f4f1ec` (page canvas), `--color-carbon: #1e1e1e` (primary text/rules), `--color-ash: #8c8c8c` (muted metadata/copyright), `--color-lampblack: #000000` (hard borders on outlined controls). Map these into the standard token set: `--bg-primary: var(--color-bone)`, `--text-primary: var(--color-carbon)`, `--text-secondary: var(--color-ash)`, `--border-default: var(--color-carbon)`.
- Contrast pairing: every light background token pairs with a dark text token and vice versa in every theme.
- Light mode background must not be pure white; use the warm Bone `#f4f1ec`. Where a near-white is needed, use `#fefefe` instead of `#ffffff`.
- Border radius & shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md` — but set all to `0px`/none per Adopt rules (no elevation).
- Spacing & transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Adopt spacing scale: `--spacing-7: 7px`, `--spacing-12: 12px`, `--spacing-23: 23px`, `--spacing-50: 50px`, `--spacing-70: 70px`, `--spacing-80: 80px`, `--spacing-140: 140px`.
- Typography tokens: `--font-base` (PPNeueMontreal substitute: Inter, Neue Haas Grotesk, or General Sans), `--font-display` (Cormorant Garamond Light condensed, or EB Garamond with letter-spacing -0.02em and line-height 0.9). Type scale: `--text-body-sm: 14px`, `--text-heading-sm: 18px`, `--text-display: 80px`, `--text-display-lg: 130px`.

## 3. Mandatory Dark Mode
- Define dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Switch background/text CSS variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.
- Dark variant: invert to a warm dark canvas (e.g., `#1a1815`) with light ink (`#f4f1ec`), maintaining the monochromatic editorial feel. Keep contrast pairing in both themes.

## 4. Flexbox Layout & Mobile-First
- Build all layouts with Flexbox. Every flex container must default to `align-items: center` unless an explicitly justified exception.
- Mobile-responsive out of the box: convert rows to columns on small viewports. Prevent horizontal scrolling.
- Page max-width ~1200px, 50px horizontal padding on all sides, single flat Bone canvas (no elevated tiers).

## 5. Typography & Icons (Google Fonts Mandatory)
- Use Google Fonts only. Text: include Google Font `<link>`/`@import` for Inter (PPNeueMontreal substitute) and Cormorant Garamond (ITC Garamond substitute). Bind to `--font-base` and `--font-display`.
- Icons: use Google Material Symbols/Icons only. Forbid raw inline SVGs or local icon files.

## 6. Adopt Style Rules (Enforce Strictly)
- Monochromatic only: no accent color, no chromatic hue. All borders/text/rules in `#1e1e1e` (Carbon). Use `#8c8c8c` (Ash) only for timestamps, metadata, copyright — never body/headings.
- No gradients, no box-shadows, no elevation. Flat canvas.
- Border-radius 0 on every element (buttons, tags, inputs, cards).
- No icons, illustrations, or imagery unless replacing a partner name with a logo. Type-only by default.
- Display headlines: serif, weight 300, 80–130px, line-height 0.90–0.92, letter-spacing -0.02em, left-aligned, dense editorial block.
- Body/labels: sans grotesque, 18px weight 500 (body) / 600 (column labels), letter-spacing 0.01em, line-height 1.33. Weight 500 is body max; 600 reserved for short labels.
- Section gaps 80–140px. Three-column content grid within 50px padding, ~40px gutters, no card backgrounds/borders.
- Components are invisible: no cards, no filled buttons, no elevation — only type, rules, whitespace.

## 7. Component Design Specifications
Apply these states via CSS classes:

**Buttons (Outlined Ghost):** transparent bg, 1px solid Carbon border, PPNeueMontreal 18px weight 500, letter-spacing 0.01em, padding 12px 24px, radius 0. No fill, no shadow. Hover: border darkens to `#000000`. Focus: distinct focus ring via CSS variables. Active: `transform: scale(0.97)`. Loading: disables interactions, CSS spinner/animated Google Icon without distorting dimensions. Disabled: opacity 0.5, greyscale, `cursor: not-allowed`. Success/Error: temporary feedback via `--text-success`/`--text-error`. Min touch target 44x44px. Flex layout `display:flex; align-items:center; justify-content:center; gap:0.5rem`.

**Cards (Features):** In Adopt style, "cards" must be type-only blocks — no backgrounds, borders, or shadows. Use flex layout, subtle spacing. Hover: subtle transform `translateY(-2px)` (optional, type-only). Focus-within highlights. Loading skeleton shimmer in CSS. Empty state with Google Icon + guidance text.

**Forms/Inputs:** States empty/focused/filled/valid/invalid/disabled/readonly. Flex container wrapping label, input, error feedback. Invalid: error border, red text, error icon. All radius 0.

**Modal/Popup:** Opening/open/loading/success-error/closing animated via CSS transitions. Centered flex, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc/overlay click.

## 8. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never rely solely on color for state, semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 9. Landing Page Sections
Build these sections with fictional brand/product/copy (invent a fictional brand name, product, and copy — never use the real "Adopt" brand name, logo, trademarks, or product names):
- Hero: large serif display headline (80–130px) + supporting grotesque subline + outlined ghost CTA.
- Features: 3 type-only columns (no cards) with bold label + 1–2 lines body.
- How It Works: 3 numbered steps.
- Testimonials: editorial quotes in serif.
- Pricing: 3 tiers as outlined ghost blocks (no fills).
- FAQ: accordion with hairline rules.
- Final CTA: serif headline + outlined button.
- Footer: three-cell row (brand, link, copyright in Ash).

Use section headers: two-digit number (01–04+) in PPNeueMontreal 14px weight 500 Carbon, letter-spacing 0.01em, section title same font/size/weight, 1px Carbon hairline rule full content width directly below. Hairline rules only under section labels, never decorative/mid-section.

## 10. Deliverables
- Separate `index.html`, `style.css`, `script.js`.
- No unrequested placeholders; placeholders only where content genuinely unspecified.
- All user-facing copy in English.

## 11. Edit Mode (if modifying existing markup)
- No new HTML tags/components/DOM nodes; work within existing structure.
- CSS classes only for existing elements.
- No JS for form validation, popups/modals, or utility helpers; ask user how to handle instead.
- If a style change needs new markup, stop and ask rather than silently inserting HTML.

Output only the finished prompt. No preamble or closing commentary. Mirror the numbered-header structure above. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause. All copy in English. All CSS variable names, class names, file names in English/ASCII.
