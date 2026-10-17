# UI/UX Coding Prompt — Kagi-Style Landing Page

## 1. Role & Objective
You are a frontend coding agent. Build a complete, responsive landing page (separate `index.html`, `style.css`, `script.js`) themed after the provided "Kagi" style reference. The page must be CSS-first, mobile-first, accessible, and support mandatory dark mode. Invent a fictional brand name, product, and copy — never use the real brand name, logo, trademarks, or product names.

## 2. Architecture & Rules
- **CSS-First / Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes. Use class/ID selectors only. Keep HTML semantic and styling-agnostic.
- **CSS Variables:** Store all tokens in `:root` (and theme classes). Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`. Enforce contrast pairing for every theme.
- **Light Mode Background:** Do not default to pure white; use `#fefefe` where a near-white is needed. The Kagi canvas is `#ffffff` — map it to `--bg-primary` as an explicit theme token, not a default.
- **Dark Mode:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and/or `.dark`. Theme switching via `localStorage` with `prefers-color-scheme` fallback. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox:** Default `align-items: center` on every flex container unless justified. Mobile-responsive, no horizontal scroll.
- **Tailwind:** Use Tailwind CSS (or `@layer`/`@apply` driven custom CSS). Utilities map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts mandatory. Text: DM Sans (substitute for Lufga), system-ui, Arial. Icons: Google Material Symbols only — no inline SVGs or local icon files.

## 3. Theme Tokens (Kagi Style)
Define these color tokens:
- `--color-graphite-1000: #18181a`
- `--color-white: #ffffff`
- `--color-graphite-800: #454549`
- `--color-graphite-900: #2f2f31`
- `--color-graphite-100: #e6e6e8`
- `--color-graphite-200: #cfcfd1`
- `--color-graphite-300: #b7b7bb`
- `--color-graphite-600: #707077`
- `--color-chrome-lavender: #efecff`
- `--color-mist: #d6e3e8`
- `--color-kagi-violet: #6c5edc`
- `--color-lavender-panel: #c9c1ff`
- `--color-sunlit-gold: #ffb319`
- `--color-soft-apricot: #ffe1a4`

Typography tokens: `--text-button-label` (system-ui 400 14px/1.6), `--text-footer-label` (Arial 400 14px/1.43), `--text-nav` (Lufga-substitute 400 16px/1.5), `--text-body` (system-ui 400 16px/1.5), `--text-body-relaxed` (system-ui 400 16px/1.6), `--text-ecosystem-eyebrow` (Lufga-substitute 400 18px/1.6), `--text-card-heading` (Lufga-substitute 600 24px/1.33), `--text-inverted-section-heading` (Lufga-substitute 500 24px/1.33), `--text-section-heading` (Lufga-substitute 600 46px/1.13), `--text-display` (Lufga-substitute 600 60px/1.13).

Spacing: base 4px, comfortable density. Radius: cards 24px, links 5px, pills 48px, images 12px, inputs 32px, buttons 48px. Shadows: `--shadow-xl: rgba(0,0,0,0.09) 1px 8px 30px 0px`, `--shadow-lg: rgba(0,0,0,0.22) 0px 0px 24px 0px`. Layout: max-width 1176px, section gap 64px, card padding 24px, element gap 24px.

## 4. Component Specifications
Implement all states for each component:

**Button (Filled Capsule):** Graphite 1000 fill, white text, 48px radius, 7px 24px padding, system-ui 14px/400. States: default, hover (brightness/shadow, cursor pointer), focus (ring via CSS vars), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error feedback.

**Card (White Utility Tile):** White surface, 1px Graphite 100 border, 24px radius, 24px padding, Graphite 1000 text, 24px internal gaps. Interactive states: hover (translateY -2px), focus-within, skeleton loading shimmer, empty state (icon + guidance).

**Showcase Cards (Sunlit Gold / Lavender Panel):** 24px radius, 24px padding, white 12px-radius screenshot inset with `--shadow-lg`, Lufga 24px/600 title in Graphite 1000, Graphite 800 copy, Filled Capsule Button.

**Search Field:** White field, Graphite 1000 text, 1px Graphite 1000 border, 32px radius, 11px 21px padding, Graphite 600 placeholder, focus retains Graphite 1000 outline + `--shadow-xl`. Inverted variant: Graphite 900 bg, white text, 1px white border, Graphite 300 placeholder, white focus outline.

**Modal/Popup:** Opening/open/loading/success-error/closing animated states, centered flex, backdrop overlay, Material Icon close button, Esc/overlay close, focus trapping.

**Form/Input:** Empty, focused, filled, valid, invalid, disabled, read-only states. Flex wrapper with label, input, error container.

**FAQ Accordion:** Graphite 1000 rows, 1px Graphite 900 bottom borders, white Lufga 24px/500 questions, right-aligned thin white chevron, Graphite 200 answer copy, 24px gap below question, no separate panel.

**Footer Link Group:** Graphite 1000 bg, Arial 14px/400 labels in Graphite 300, links in Graphite 200, 12px row gaps, text columns (not cards).

## 5. Page Sections
Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer (secondary links).

- Hero: centered stack — display headline (Lufga 60px/600), supporting copy (Lufga 16px/400), wide pill search field with soft shadow, generous white space.
- Features: 3 White Utility Tiles in a responsive grid.
- How It Works: 3 steps with Material Icons, Graphite 1000 headings, Graphite 800 body.
- Testimonials: cards with Graphite 800 quote, Graphite 1000 name.
- Pricing: 3 tiers, middle tier highlighted with Chrome Lavender surface.
- FAQ: Graphite 1000 band, centered accordion column.
- Final CTA: centered headline + Filled Capsule Button.
- Footer: Graphite 1000, multi-column links, Arial labels.

## 6. UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 7. Deliverables
- Files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- Naming: one consistent convention (BEM) throughout — never mix.
- No lorem-ipsum-only submissions; use realistic invented copy for the fictional brand.

## 8. Dark Mode Mapping
In dark mode, invert surfaces: Graphite 1000 canvas becomes light? No — keep dark mode as a true inversion: dark canvas (`#18181a`-ish) with light text, pastel panels darkened appropriately, violet links adjusted for contrast. Ensure all contrast pairings hold.

Output only the finished prompt. No preamble or closing commentary. Mirror the numbered-header structure above.# UI/UX Coding Prompt — Kagi-Style Landing Page

## 1. Role & Objective
You are a frontend coding agent. Build a complete, responsive landing page (separate `index.html`, `style.css`, `script.js`) themed after the provided "Kagi" style reference. The page must be CSS-first, mobile-first, accessible, and support mandatory dark mode. Invent a fictional brand name, product, and copy — never use the real brand name, logo, trademarks, or product names.

## 2. Architecture & Rules
- **CSS-First / Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes. Use class/ID selectors only. Keep HTML semantic and styling-agnostic.
- **CSS Variables:** Store all tokens in `:root` (and theme classes). Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`. Enforce contrast pairing for every theme.
- **Light Mode Background:** Do not default to pure white; use `#fefefe` where a near-white is needed. The Kagi canvas is `#ffffff` — map it to `--bg-primary` as an explicit theme token, not a default.
- **Dark Mode:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and/or `.dark`. Theme switching via `localStorage` with `prefers-color-scheme` fallback. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox:** Default `align-items: center` on every flex container unless justified. Mobile-responsive, no horizontal scroll.
- **Tailwind:** Use Tailwind CSS (or `@layer`/`@apply` driven custom CSS). Utilities map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts mandatory. Text: DM Sans (substitute for Lufga), system-ui, Arial. Icons: Google Material Symbols only — no inline SVGs or local icon files.

## 3. Theme Tokens (Kagi Style)
Define these color tokens:
- `--color-graphite-1000: #18181a`
- `--color-white: #ffffff`
- `--color-graphite-800: #454549`
- `--color-graphite-900: #2f2f31`
- `--color-graphite-100: #e6e6e8`
- `--color-graphite-200: #cfcfd1`
- `--color-graphite-300: #b7b7bb`
- `--color-graphite-600: #707077`
- `--color-chrome-lavender: #efecff`
- `--color-mist: #d6e3e8`
- `--color-kagi-violet: #6c5edc`
- `--color-lavender-panel: #c9c1ff`
- `--color-sunlit-gold: #ffb319`
- `--color-soft-apricot: #ffe1a4`

Typography tokens: `--text-button-label` (system-ui 400 14px/1.6), `--text-footer-label` (Arial 400 14px/1.43), `--text-nav` (Lufga-substitute 400 16px/1.5), `--text-body` (system-ui 400 16px/1.5), `--text-body-relaxed` (system-ui 400 16px/1.6), `--text-ecosystem-eyebrow` (Lufga-substitute 400 18px/1.6), `--text-card-heading` (Lufga-substitute 600 24px/1.33), `--text-inverted-section-heading` (Lufga-substitute 500 24px/1.33), `--text-section-heading` (Lufga-substitute 600 46px/1.13), `--text-display` (Lufga-substitute 600 60px/1.13).

Spacing: base 4px, comfortable density. Radius: cards 24px, links 5px, pills 48px, images 12px, inputs 32px, buttons 48px. Shadows: `--shadow-xl: rgba(0,0,0,0.09) 1px 8px 30px 0px`, `--shadow-lg: rgba(0,0,0,0.22) 0px 0px 24px 0px`. Layout: max-width 1176px, section gap 64px, card padding 24px, element gap 24px.

## 4. Component Specifications
Implement all states for each component:

**Button (Filled Capsule):** Graphite 1000 fill, white text, 48px radius, 7px 24px padding, system-ui 14px/400. States: default, hover (brightness/shadow, cursor pointer), focus (ring via CSS vars), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error feedback.

**Card (White Utility Tile):** White surface, 1px Graphite 100 border, 24px radius, 24px padding, Graphite 1000 text, 24px internal gaps. Interactive states: hover (translateY -2px), focus-within, skeleton loading shimmer, empty state (icon + guidance).

**Showcase Cards (Sunlit Gold / Lavender Panel):** 24px radius, 24px padding, white 12px-radius screenshot inset with `--shadow-lg`, Lufga 24px/600 title in Graphite 1000, Graphite 800 copy, Filled Capsule Button.

**Search Field:** White field, Graphite 1000 text, 1px Graphite 1000 border, 32px radius, 11px 21px padding, Graphite 600 placeholder, focus retains Graphite 1000 outline + `--shadow-xl`. Inverted variant: Graphite 900 bg, white text, 1px white border, Graphite 300 placeholder, white focus outline.

**Modal/Popup:** Opening/open/loading/success-error/closing animated states, centered flex, backdrop overlay, Material Icon close button, Esc/overlay close, focus trapping.

**Form/Input:** Empty, focused, filled, valid, invalid, disabled, read-only states. Flex wrapper with label, input, error container.

**FAQ Accordion:** Graphite 1000 rows, 1px Graphite 900 bottom borders, white Lufga 24px/500 questions, right-aligned thin white chevron, Graphite 200 answer copy, 24px gap below question, no separate panel.

**Footer Link Group:** Graphite 1000 bg, Arial 14px/400 labels in Graphite 300, links in Graphite 200, 12px row gaps, text columns (not cards).

## 5. Page Sections
Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer (secondary links).

- Hero: centered stack — display headline (Lufga 60px/600), supporting copy (Lufga 16px/400), wide pill search field with soft shadow, generous white space.
- Features: 3 White Utility Tiles in a responsive grid.
- How It Works: 3 steps with Material Icons, Graphite 1000 headings, Graphite 800 body.
- Testimonials: cards with Graphite 800 quote, Graphite 1000 name.
- Pricing: 3 tiers, middle tier highlighted with Chrome Lavender surface.
- FAQ: Graphite 1000 band, centered accordion column.
- Final CTA: centered headline + Filled Capsule Button.
- Footer: Graphite 1000, multi-column links, Arial labels.

## 6. UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 7. Deliverables
- Files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- Naming: one consistent convention (BEM) throughout — never mix.
- No lorem-ipsum-only submissions; use realistic invented copy for the fictional brand.

## 8. Dark Mode Mapping
In dark mode, invert surfaces: dark canvas with light text, pastel panels darkened appropriately, violet links adjusted for contrast. Ensure all contrast pairings hold.

Output only the finished prompt. No preamble or closing commentary. Mirror the numbered-header structure above.
