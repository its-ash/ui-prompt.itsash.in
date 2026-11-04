# Coding-AI Prompt: AYOCIN-Themed Landing Page (Fictional Brand)

## 1. Project Overview
Build a complete, responsive, multi-section landing page using the AYOCIN visual style system. Invent a fictional brand name, product, and all user-facing copy. Never use the real brand name "AYOCIN", its logo, trademarks, or product names anywhere in the page. All copy must be invented and written in English.

## 2. Architecture & Rules
- **CSS-First, Zero Inline CSS:** All styling in `style.css`. No `style="..."` attributes. Use class/ID selectors only. HTML stays semantic and style-agnostic.
- **CSS Variables:** Define all tokens in `:root` and dark-mode overrides under `@media (prefers-color-scheme: dark)` and `.dark`. Include: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.
- **Contrast Pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.
- **Light Mode Background:** Use `#fcf6ec` (Porcelain Cream) as the default canvas, not pure white. Use `#fefefe` only where near-white is needed.
- **Dark Mode:** Mandatory. Provide dark tokens, seamless switching, `localStorage` persistence with `prefers-color-scheme` fallback, and a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** Use `display: flex` with `align-items: center` by default. Responsive, no horizontal scroll.
- **Tailwind CSS:** Use Tailwind (or clean custom CSS via `@layer`/`@apply`) mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts only. Text: Manrope (substitute for Systemia) weights 400, 500; Azeret Mono weight 500. Icons: Google Material Symbols. No inline SVGs or local icons.

## 3. AYOCIN Design Tokens

### Colors
- `--color-porcelain-cream`: #fcf6ec
- `--color-espresso-ink`: #2e2521
- `--color-parchment-border`: #d3ccc3
- `--color-stone-haze`: #cec1b2
- `--color-ivory-sand`: #f4e8d7
- `--color-daylight-wash`: #fdf0c7
- `--color-peach-wash`: #fdc6b3
- `--color-sunlit-stone-gradient`: linear-gradient(266.47deg, #c4b3a3 41.41%, #9f8e7a 97.58%)

### Typography
- Font base: Manrope (weights 400, 500), bound to `--font-base`.
- Mono: Azeret Mono (weight 500).
- Type scale tokens: `--text-caption` (12px/1.4/400), `--text-body` (14px/1.4/400), `--text-nav` (14px/1.2/500), `--text-button` (14px/1/500), `--text-heading` (36px/1/500), `--text-display` (60px/1/500), `--text-metric-display` (Azeret Mono 170px/0.9/-13.6px/500), `--text-masthead-display` (240px/0.8/500).

### Spacing & Shapes
- Spacing scale: 5, 8, 9, 10, 12, 14, 15, 18, 20, 30, 35, 40, 50, 60, 100, 120 (px), exposed as `--spacing-*`.
- Border radius: cards 10px, pills 9999px, inputs 0px, buttons 20px, circular controls 100%, decorative capsules 500px.
- Section gap 30px, card padding 20px, element gap 20px.

### Surfaces (Elevation)
- Level 0: Porcelain Canvas #fcf6ec
- Level 1: Daylight Field #fdf0c7
- Level 2: Ivory Sand Surface #f4e8d7
- Level 3: Peach Field #fdc6b3
- Level 4: Espresso Surface #2e2521
- No box shadows on cards/buttons/panels. Elevation via tonal fields, translucent overlays, blur (8px/16px for overlays; 70-80px for atmospheric light), and 1px rules.

## 4. Component Specifications

### Transparent Hero Header
Transparent fill, Porcelain Cream text in Systemia 14px/16.8px weight 500, thin low-opacity cream separator rules, integrated with hero image.

### Espresso Order Pill (dark filled button)
Espresso Ink fill, Porcelain Cream text, 1px Porcelain Cream border, Systemia 14px/14px weight 500, 20px radius, padding 10px 60px 10px 20px, arrow icon in right pocket.

### Porcelain Order Pill (light filled button)
Porcelain Cream fill, Espresso Ink text, 1px Espresso Ink border, same sizing, arrow in right pocket.

### Transparent Feature Tab
Transparent bg, Porcelain Cream Systemia 14px/19.6px weight 400, 1px rgba(252,246,236,0.1) border, 0px radius, padding 10px 20px.

### Ivory Circular Carousel Control
Ivory Sand fill, Espresso Ink icon, Espresso Ink border, 100% radius, zero padding, icon-only circular.

### Translucent Feature Card
rgba(178,162,139,0.1) fill, no shadow, 10px radius, zero padding (content provides 20px inset).

### Porcelain Content Card
Porcelain Cream fill, 10px radius, no shadow, 10px padding.

### Espresso Content Card
#2c2722 fill, 10px radius, zero shadow, zero outer padding, Porcelain Cream text.

### Espresso Underline Input (light surfaces)
Transparent fill, Espresso Ink text, 1px Espresso Ink underline/border, 0px radius, no padding.

### Cream Underline Input (dark surfaces)
Transparent fill, Porcelain Cream text 14px/19.6px Systemia, 1px rgba(252,247,237,0.1) rule, 0px radius, vertical padding 10px. Placeholder same cream family at reduced opacity.

### Feature Heading
Systemia 36px/36px weight 500, normal tracking, Porcelain Cream on dark/image panels. Compact, no bold.

### Monospaced Metric Display
Azeret Mono 170px/153px weight 500, -13.6px tracking, Porcelain Cream. Punctuation in Systemia 170px/153px weight 500.

## 5. Component State Requirements
- **Buttons:** default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring via CSS vars), active (transform scale 0.97), loading (disabled, spinner/animated icon, no dimension change), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via --text-success/--text-error).
- **Cards:** default (flex, subtle borders, elevation via vars), hover (elevation/shadow shift or translateY(-2px)), focus-within (border highlight), loading skeleton (shimmer CSS), empty state (Google Icon + guidance text).
- **Forms/Inputs:** empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container with label, input, error feedback.
- **Modals:** opening/open/loading/success-error/closing (CSS transitions), centered flex, backdrop overlay, Google Icon close button, focus trapping, Esc/overlay close.

## 6. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 7. Do's and Don'ts
- Do: Porcelain Cream default canvas, Espresso Ink default text. Nav/labels Systemia 14px weight 500; longer control labels Systemia 14px/19.6px weight 400. Feature headings Systemia 36px/36px weight 500; reserve 170px/240px for isolated editorial statements. Filled conversion buttons 20px radius, padding 10px 60px 10px 20px. Cards 10px radius, no shadow. Inputs/tabs 0px radius. 20px gaps between small groups, 30px section spacing. Place #fdf0c7 and #fdc6b3 in broad background bands only.
- Don't: No black #000000 as primary (use Espresso Ink). No blue/green/red/high-chroma accents. No drop shadows on cards/buttons/panels. No rounding inputs/tabs beyond 0px. No 9999px pills for content cards. No Systemia display above weight 500. No Sunlit Stone Gradient on every section (limit to atmospheric image/product backgrounds).

## 8. Page Structure (Landing Page Sections)
Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

- **Hero:** Full-bleed Stone Haze #cec1b2 product hero with soft architectural shadow blur (70-80px), centered tall illuminated product render, transparent top navigation in Porcelain Cream Systemia 14px/16.8px weight 500, Espresso Order Pill. Oversized masthead display title (240px) spanning composition.
- **Features:** Dark Espresso Ink #2e2521 feature panel with Porcelain Cream Systemia 36px/36px weight 500 heading, three-item transparent feature-tab row, no card shadows. Three feature cards.
- **How It Works:** Three steps with numbered Monospaced Metric Display or step indicators.
- **Testimonials:** Contained cards on warm surfaces.
- **Pricing:** Three tiers using Porcelain/Espresso content cards.
- **FAQ:** Accordion or list with underline inputs styling.
- **Final CTA:** Dark block with Cream Underline Input signup and Porcelain Order Pill.
- **Footer:** Secondary links, minimal.

## 9. Deliverables
- Separate files: `index.html`, `style.css`, `script.js`. No inline script blocks beyond single deferred entry-point reference.
- Consistent class-naming convention (BEM or fixed utility set) throughout. Never mix conventions.
- No lorem-ipsum-only submissions; invent real copy/labels for all sections.

## 10. Dark Mode Implementation
Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark`. Switch background/text variables seamlessly. Persist choice via `localStorage`, fallback to `prefers-color-scheme`. Visible toggle with correct `aria-pressed`/`aria-label`.

## 11. Edit Mode Note
If modifying existing markup, do not add new HTML elements, components, or DOM nodes. Define CSS only for existing elements. Do not write JS for validation/popups/utilities; ask user how to handle. If a style change requires new markup, stop and ask. (Not applicable for from-scratch build, but enforce if editing.)

## 12. Output
Output only the finished prompt. No preamble or closing commentary. Mirror numbered headers and bolded sub-rules. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause. All output in English. All user-facing copy in English. All CSS variable names, class names, file names in English/ASCII.
