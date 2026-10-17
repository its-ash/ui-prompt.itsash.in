# Landing Page Build Prompt — "Captions" Style Theme (Fictional Brand)

## 1. Project Overview

Build a complete, responsive landing page for a **fictional brand** (invent a new product name, logo wordmark, and copy — never use "Captions", its logo, trademarks, or product names). Apply the "Captions" visual style: a sunlit editing desk aesthetic — paper-white grain-textured canvas, frosted floating header, pale-air-blue editor surfaces, charcoal editorial headlines, tight creator footage. Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline CSS anywhere. No inline `<script>` blocks beyond a single deferred entry-point reference.

## 2. Mandatory Architecture Rules

**2.1 CSS-First & Zero Inline CSS**
- All styling lives in `style.css`. Forbid `style="..."` attributes in HTML.
- Target via class/ID selectors only. Keep HTML semantic and style-agnostic.

**2.2 CSS Variables & Theme Tokens**
Store all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`). Required color tokens (map from spec):
- `--color-paper-white: #ffffff` (use `#fefefe` where near-white needed)
- `--color-air-wash: #effbff`
- `--color-mist-border: #e8eff2`
- `--color-steel-inset: #d0d6d7`
- `--color-ash-copy: #7e8486`
- `--color-graphite-copy: #434647`
- `--color-editorial-ink: #2a2c2d`
- `--color-charcoal: #1d1f20`
- `--color-prism-cyan: #00d0ff`
- `--color-sky-fade: linear-gradient(180deg, #effbff 40%, #a6ecff 100%)`
- `--color-cyan-halo: #ccf6ff`
- Standard tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.
- Enforce light-bg/dark-text and dark-bg/light-text contrast pairing in every theme.
- Light mode background must not be pure white; use the paper-white token (`#fefefe` where near-white needed).
- Border radius/shadow/spacing/transition tokens as listed in spec (12px cards, 40px feature media, 9999px pills, 20px images, 12px inputs/buttons, 58px editor actions).

**2.3 Mandatory Dark Mode**
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and/or `.dark`.
- Theme switching via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Visible toggle with correct `aria-pressed`/`aria-label`.

**2.4 Flexbox & Mobile-First**
- All layouts use Flexbox. Default `align-items: center` unless justified exception.
- Mobile-responsive, no horizontal scroll; rows collapse to columns on small viewports.

**2.5 Tailwind / CSS**
- Use Tailwind CSS or clean custom CSS via `@layer`/`@apply`. Utility classes map to CSS variables or generic reusable classes (`.btn`, `.card`, `.input-group`).

**2.6 Typography & Icons (Google Fonts Mandatory)**
- Text: load Google Fonts — substitute Exposure with Libre Baskerville (serif) and DenimINK with Inter (sans). Bind to `--font-base`/`--font-display`.
- Icons: Google Material Symbols/Icons only. No inline SVGs or local icon files.

## 3. Typography Tokens

Implement the type scale as CSS classes/tokens:
- `--text-utility`: Inter 500, 11px, lh 1.45, ls 0.22px
- `--text-caption`: Inter 400, 13px, lh 1.38, ls 0.3px
- `--text-editor-label`: Inter 500, 14px, lh 1.71, ls 0.14px
- `--text-nav`: Inter 400, 16px, lh 1.2, ls 0
- `--text-body`: Inter 400, 16px, lh 1.33, ls 0
- `--text-feature-label`: Inter 500, 18px, lh 1.3, ls 0
- `--text-card-heading`: Inter 400, 24px, lh 1, ls -0.24px
- `--text-feature-heading`: Inter 400, 32px, lh 1, ls 0
- `--text-hero-display`: Libre Baskerville 400, 48px, lh 1.41, ls -0.48px
- `--text-section-display`: Libre Baskerville 400, 48px, lh 1, ls -0.48px
- `--text-display-xl`: Libre Baskerville 400, 72px, lh 1.1, ls 0

Spacing scale (4px base): 4,8,12,16,20,24,32,36,40,44,52,60,64,80,100,160. Section gap 160px. Card padding 20px. Element gap 16px.

Shadows: `--shadow-subtle` (0.5px inset #d0d6d7), `--shadow-md` (rgba(0,0,0,.05) 0 4px 10px), `--shadow-xl` (rgba(190,210,235,.45) 0 0 80px), `--shadow-subtle-2` (cyan halo inset).

## 4. Component Specifications

**Floating Frosted Header:** translucent white surface, 120px backdrop blur, 1px #d0d6d7 outline, 30px radius. Logo left, centered 16px DenimINK nav, compact outlined account pill far right. Fixed, inset from viewport edges.

**Navigation Link:** DenimINK 400 16px Charcoal, 16px gaps. Dropdown triggers same + small ink chevron (Material Icon).

**Outlined Sign-up Pill:** Paper White, Charcoal text DenimINK 500 16px, 1px Charcoal border, 9999px radius, 11px/16px padding.

**Dark Ink Button:** Charcoal fill, Paper White text, 12px radius, 0.5px inset edge when among pale controls.

**Editor Utility Button:** Paper White, Editorial Ink text, 0.5px #d0d6d7 border, 58px radius, padding 11px 12px 11px 16px.

**Prism Tool Chip:** Air Wash fill, 12px radius, Cyan Halo inset. Label in Prism Cyan. Cyan only inside product-editing chips.

**Video Upload Workspace:** Paper White editor shell on Air Wash workspace, 12px radius, 1px Mist Border edge. Centered stacked-footage illustration + DenimINK 500 14px upload prompt. Narrow control strip below with 12px gaps.

**Style Thumbnail Card:** portrait video imagery, 12px radius, Charcoal border on selected. Label below in compact DenimINK. Four-up tight rhythm.

**Pale Blue Feature Media Card:** Air Wash, 20px side/top padding, 40px bottom padding, 40px radius. Vertical video inside 20px radius. Fade toward Sky Fade downward.

**Feature Copy Stack:** titles DenimINK 400 32px/32px Charcoal. Paragraphs DenimINK 400 16px/20.8px Ash Copy. 1px Mist Border between stacked points.

**FAQ Accordion Row:** full-width Paper White row, 1px Mist Border bottom rule, DenimINK 400 question Charcoal, small ink plus right-aligned. Spacious, no shadow/filled hover.

**Footer Link Column:** Paper White. DenimINK labels/links Charcoal; secondary legal/auxiliary Ash Copy 13px/18px +0.325px tracking.

## 5. Page Sections (in order)

1. **Hero:** centered two-line Exposure headline (48px/67.68px, -0.48px, Editorial Ink) above large contained editor workspace (Air Wash, 12px radius) + four-up portrait style thumbnails. Grain-textured Paper White canvas.
2. **Features:** 3 cards (Air Wash or white, 12px radius, flat with borders/inset). Each: icon (Material Symbol), title, body.
3. **How It Works:** 3 steps with numbered markers, titles, descriptions.
4. **Testimonials:** quote cards with avatar, name, role.
5. **Pricing:** 3 tiers (outlined/standard, highlighted, dark ink). Feature lists, CTA buttons.
6. **FAQ:** full-width accordion rows with plus icons, expand/collapse via CSS/JS.
7. **Final CTA:** centered headline + button on Paper White or Air Wash band.
8. **Footer:** dense link columns + legal row.

## 6. Core UX Rules

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never color-only state; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submit.
- Destructive actions visually distinct in both themes.
- Button states: default (flex, 44x44 min touch target), hover, focus ring, active scale(0.97), loading (spinner, no dimension change), disabled (opacity .5, grayscale, not-allowed), success/error.
- Card states: default, hover (translateY -2px), focus-within, skeleton shimmer, empty state.
- Form/input states: empty, focused, filled, valid, invalid, disabled, readonly.
- Modal states if used: opening/open/loading/success-error/closing, backdrop, close button, Esc/overlay close, focus trap.

## 7. Deliverables & Naming

- Files: `index.html`, `style.css`, `script.js`. Single deferred entry-point reference only.
- One consistent class-naming convention (BEM or fixed utility set) throughout — never mix.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where content genuinely unspecified. All user-facing copy in English.

## 8. Dark Mode Toggle

Implement toggle in header; persist choice in `localStorage`; fall back to `prefers-color-scheme`. Update `aria-pressed`/`aria-label`.

## 9. Grain Texture

Apply a fine grain/noise filter over Paper White and pale-blue backgrounds (CSS SVG filter or pseudo-element) to avoid sterile surfaces.

## 10. Exception Clause

If any requested style cannot be achieved without adding markup (e.g., missing wrapper/icon), stop and ask the user rather than silently inserting HTML. Do not introduce new HTML tags beyond the existing planned structure. No behavioral JS for form validation/popups unless requested; if requested, ask how to handle. All copy must be original fictional content — never reference "Captions" or its trademarks.
