# Coding AI Prompt — Arsenijs Fabrica Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a fictional beauty/skincare brand (invent a name and all copy; do NOT use "Arsenijs Fabrica" or any real brand name, logo, trademark, or product name). The visual style is an editorial beauty spread under gallery lights: expansive white surfaces, whisper-weight display type (Onest weight 200 at display sizes), generous negative space, and a single vivid orange accent cutting through monochrome. Sections required: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 2. File Structure
- `index.html` — semantic HTML5, no inline styles.
- `style.css` — all styling, CSS variables, Tailwind `@layer`/`@apply` where applicable.
- `script.js` — deferred entry point only; handles theme toggle persistence, FAQ accordion, modal open/close, mobile nav. No inline `<script>` blocks beyond a single deferred reference.

## 3. Architecture Rules
- **Zero inline CSS.** All styling via class/ID selectors in `style.css`.
- **CSS variables in `:root`** for all tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.
- **Contrast pairing:** light backgrounds pair with dark text and vice versa in every theme.
- **Light mode background:** use `#fefefe` where near-white is needed; never pure `#ffffff` as a default page background token (use the theme's specified white `#ffffff` only as a surface token, not the root background default). Actually use `#ffffff` per spec for canvas; ensure `--bg-primary` maps to `#ffffff`.
- **Dark mode mandatory:** define tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Theme toggle with `localStorage` persistence, fallback to `prefers-color-scheme`, visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox default:** every flex container defaults to `align-items: center`; mobile-first, no horizontal scroll.
- **Tailwind CSS** integration via `@layer`/`@apply`; utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Google Fonts mandatory:** Onest (weights 200,300,400,500,600,800) with Inter/General Sans/DM Sans fallback; bind to `--font-base`. Icons via Google Material Symbols — no inline SVGs or local icon files.
- **Naming convention:** BEM throughout; never mix conventions.
- **No lorem-ipsum-only** submissions; invent real fictional copy for all sections.

## 4. Theme Tokens (Arsenijs Fabrica Style)
Colors:
- `--color-ember-orange: #f15730` (filled CTA buttons)
- `--color-tangerine-blaze: #f7651a` (promotional surfaces)
- `--color-apricot-whisper: #ff8562` (borders, link underlines, icon strokes)
- `--color-graphite-black: #111111` (body text, structural borders)
- `--color-inkwell: #0d1717` (headings, nav)
- `--color-pure-white: #ffffff` (canvas, card surfaces, text on dark/orange)
- `--color-mist-gray: #eeeeee` (soft borders on white)
- `--color-smoke: #818181` (secondary captions)

Map to semantic tokens: `--primary: #f15730`, `--secondary: #f7651a`, `--bg-primary: #ffffff`, `--bg-secondary: #ffffff`, `--text-primary: #111111`, `--text-secondary: #818181`, `--border-default: #111111`, etc.

Typography: Onest sole typeface. Display sizes 48px+ at weight 200-300 with aggressive negative letter-spacing (-0.019em at 14px scaling to -0.091em at 152px). Body/UI at 400-500. Type scale: caption 12px, body-sm 14px, body 16px, subheading-sm 20px, subheading 23px, heading-sm 32px, heading 48px, heading-lg 52px, display 152px. Line heights 0.90-1.60.

Spacing: compact density. Use provided scale (4,5,8,9,10,12,13,15,20,24,25,30,40,50,90px). Section gap 80px, card padding 20px, element gap 10px. Page max-width 1280px.

Border radius: tags 30px, cards 10px, images 15px, inputs 30px, avatars 3000px, buttons 600px (pill).

Elevation: ZERO box-shadows. Depth via borders and color only.

## 5. Component Specifications

### Buttons
- Primary pill: `#f15730` bg, white text, 600px radius, 15px 40px padding, Onest 500 14px. Hover → `#f7651a`. Active `scale(0.97)`. Focus ring via CSS vars. Loading spinner without dimension change. Disabled opacity 0.5 + greyscale + `not-allowed`. Min touch target 44x44px.
- Ghost/white pill: white bg, `#111111` text, same radius/padding.
- On-orange modal submit: white bg, `#f15730` text, 600px radius, 15px 48px padding, Onest 500 16px.
- Danger button distinct in both themes.

### Cards (Outlined Product Card)
- White bg, 1.5px `#ff8562` border, 10px radius, 20px padding. Image fills width. Title Onest 500 16px `#0d1717`. Price/CTA Onest 400 14px `#111111`. No shadow. Hover: `translateY(-2px)`. Focus-within border highlight. Skeleton shimmer. Empty state with Google Icon + guidance text.

### Forms/Inputs
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Flex container wrapping label, input, error feedback. Input radius 30px.

### Modal (Email Capture)
- `#f7651a` bg, 10px radius, ~480px wide, centered on dimmed page (rgba black ~60%). Header: heart icon + 'skincare community' Onest 300 italic 32px white. Body Onest 400 16px white. Email input: transparent, 2px white border, 30px radius, 13px 20px padding, white placeholder. Submit white pill. Close X top-right 2px white stroke, ~20px square, 16px margin. Animated open/close, focus trap, Esc/overlay close, `aria-modal`.

### Navigation
- Sticky white header ~64px. Logo Onest 600 uppercase tight left. Nav links Onest 400 14px `#0d1717`, 24px gaps. Utility icons right, 20px gaps, 1.5px line-art, optional badge in `#f7651a` with white 9px text. No shadow.
- Announcement bar: full-bleed ~32px, `#111111` bg, white text 11px Onest 400 centered.

### Stat Callout
- Number Onest 200 152px `#111111`, line-height 0.90, letter-spacing -13.83px. Label Onest 400 14px `#818181` beneath. No bg/border.

### Feature Row (Trust Signals)
- Inline row. Each: 20px line-art icon `#111111` + 10px gap + label Onest 400 14px `#111111`. 40px between items. No bg/border.

### Close Button (Modal X)
- 2px white stroke X, ~20px square, absolute top-right, 16px margin. No bg/border/radius.

### Nav Icon Button
- No bg, 1.5px `#111111` line-art ~20px, optional circular badge.

## 6. Section Layout
- Hero: full-bleed product photo bg, bottom-left display headline Onest 200 52px `#0d1717`, line-height 1.00, letter-spacing -2.91px. White pill CTA. Right side floating Smoke annotations. Asymmetric.
- Features: 3-column grid of outlined cards.
- How It Works: 3 steps.
- Testimonials: cards or quotes.
- Pricing: 3 tiers.
- FAQ: accordion.
- Final CTA: orange surface or white with primary button.
- Footer: secondary links, dark or white.

Vertical rhythm 80px section gaps. Max-width 1280px container. Asymmetric compositions; centering only for hero overlay text and modal content.

## 7. UX/Micro-interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely on color alone; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions distinct in both themes.

## 8. Output Requirements
- Separate `index.html`, `style.css`, `script.js`.
- BEM naming throughout.
- Invent fictional brand name, products, copy — never use "Arsenijs Fabrica" or real trademarks.
- No placeholders where real copy is supplied; placeholders only where content genuinely unspecified.

## 9. Edit Mode
N/A (from-scratch build).

## 10. Dark Mode
Define full dark token set. Ensure all contrast pairings. Toggle persists via localStorage.

## 11. Google Fonts
Include `<link>` for Onest (weights 200,300,400,500,600,800) and Material Symbols. Bind Onest to `--font-base`. Fallback Inter/General Sans/DM Sans.

## 12. Deliverable
Produce the three files. Ensure all sections present, all states styled, all accessibility requirements met. Use invented fictional brand and copy throughout.
