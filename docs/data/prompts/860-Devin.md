# Coding-AI Prompt: Build a "Devin"-Style Landing Page

## 1. Project Overview
Build a complete, production-ready landing page for a **fictional** software product. Invent a fictional brand name, product name, and all copy. **Never use the real brand name "Devin", its logo, trademarks, or product names anywhere in the page.** Apply the visual style described below (electric ink on drafting paper: warm off-white canvas, near-black type, single electric violet-blue accent).

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) across the entire deliverable.

## 2. Strict Architecture Rules
- **CSS-First & Zero Inline CSS:** All styling lives in `style.css`. Forbid `style="..."` attributes. Target via class/ID selectors only. Keep HTML semantic and agnostic of visual styling.
- **CSS Variables:** Store all tokens in `:root` and theme classes. Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`. Enforce contrast pairing for every theme.
- **Light Mode Background:** Use `#f7f6f5` (Paper) as the default page background, not pure white. Where near-white is needed, use `#fefefe`.
- **Mandatory Dark Mode:** Define dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class. Switch variables seamlessly. Persist user choice via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** All layouts use Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified. Mobile-responsive, no horizontal scrolling.
- **Framework:** Tailwind CSS (or clean custom CSS via `@layer`/`@apply`), mapping utilities to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts only. Text: Inter (substitute for nbInternationalPro) and IBM Plex Mono (substitute for geistMono). Icons: Google Material Symbols. No inline SVGs or local icon files.

## 3. Theme Tokens (Devin Style)
Colors: `--color-paper: #f7f6f5` (page bg, nav, footer); `--color-carbon: #141414` (primary text, dark buttons, outlines); `--color-tile-gray: #efefef` (tiles, cards); `--color-mist: #e7e7e7` (inverse text on dark); `--color-graphite: #1f1f1f` (dark bento cards); `--color-steel: #7d7d7d` (eyebrows, muted labels); `--color-white: #ffffff` (text on dark/blue controls); `--color-electric-blue: #2200ff` (accent).

Map to generic tokens: `--primary: var(--color-electric-blue)`, `--bg-primary: var(--color-paper)`, `--text-primary: var(--color-carbon)`, etc.

Typography scale: micro 11px/1.2; nav 14px/1.4; code (IBM Plex Mono) 15px/1.5; body-strong 15px/1.5 w500; body 16px/1.5; body-large 17px/1.5; eyebrow 21px/1.5; heading-small 24px/1.27 w500 -0.48px; heading-inverse 26px/1.25 w500; display 64px/1.16 w500 -2.56px; hero-display 70px/1 w500 -2.8px. Use `--font-base` bound to Inter.

Spacing base 4px. Radius: cards 16px, links 2px, pills 200px, buttons 2px, accented controls 7.2px. Section gap 36px, card padding 12px, element gap 4px.

## 4. Components & States
Implement all states via CSS classes:
- **Buttons:** default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), hover (brightness/shadow, cursor pointer), focus (focus ring via variables), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`).
  - Carbon Compact Button: Carbon fill, White text, 2px radius, padding 6px 12px 5px.
  - Outlined Utility Button: transparent, 1px Carbon border, Carbon text, 2px radius, padding 6px 8px 5px 12px.
  - Pill Filter Button: transparent, Carbon text/border, 200px radius, padding 6px 8px 5px 12px.
  - Electric Blue Control: Electric Blue fill, White text, 7.2px radius.
  - Hero Action Pair: Carbon Compact + Outlined Utility, 8px gap, 16px body sizing.
- **Cards:** default (flex, subtle borders, elevation via variables), hover (translateY -2px), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + text).
  - Pale Logo Tile: Tile Gray, 16px radius, no shadow, 4px 0 padding, centered Steel mark.
  - Integration Tile: same, irregular skyline arrangement.
  - Dark Bento Feature Card: Graphite fill, 16px radius, no shadow, 0px outer padding; Mist headings 26px/1.25 w500; inset pale module.
- **Forms/Inputs:** empty, focused, filled, valid, invalid, disabled, read-only. Flex container with label, input, error feedback.
- **Modals:** opening/open/loading/success-error/closing animated; centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## 5. UX & Accessibility
Responsive, smooth transitions (`var(--transition-normal)`), respect `prefers-reduced-motion`. Sufficient contrast both modes. Never rely on color alone. Semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback. Visual feedback on every interaction. Destructive actions visually distinct in both themes.

## 6. Sections to Build
Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. All copy in English (fictional brand/product). Use Electric Blue sparingly for emphasized headline fragments, product links, icon strokes, rare 7.2px control. No bright colors beyond Electric Blue. No shadows on Tile Gray/Graphite cards. Display headings w500 only, tight tracking on 64/70px.

## 7. Dark Mode
Define dark tokens under media query and `.dark` class. Persist via localStorage. Include toggle with aria state.

Output only the finished prompt. No preamble. Mirror numbered structure.# Coding-AI Prompt: Build a "Devin"-Style Landing Page

## 1. Project Overview
Build a complete, production-ready landing page for a **fictional** software product. Invent a fictional brand name, product name, and all copy. **Never use the real brand name "Devin", its logo, trademarks, or product names anywhere in the page.** Apply the visual style described below (electric ink on drafting paper: warm off-white canvas, near-black type, single electric violet-blue accent).

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) across the entire deliverable.

## 2. Strict Architecture Rules
- **CSS-First & Zero Inline CSS:** All styling lives in `style.css`. Forbid `style="..."` attributes. Target via class/ID selectors only. Keep HTML semantic and agnostic of visual styling.
- **CSS Variables:** Store all tokens in `:root` and theme classes. Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`. Enforce contrast pairing for every theme.
- **Light Mode Background:** Use `#f7f6f5` (Paper) as the default page background, not pure white. Where near-white is needed, use `#fefefe`.
- **Mandatory Dark Mode:** Define dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class. Switch variables seamlessly. Persist user choice via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** All layouts use Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified. Mobile-responsive, no horizontal scrolling.
- **Framework:** Tailwind CSS (or clean custom CSS via `@layer`/`@apply`), mapping utilities to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts only. Text: Inter (substitute for nbInternationalPro) and IBM Plex Mono (substitute for geistMono). Icons: Google Material Symbols. No inline SVGs or local icon files.

## 3. Theme Tokens (Devin Style)
Colors: `--color-paper: #f7f6f5` (page bg, nav, footer); `--color-carbon: #141414` (primary text, dark buttons, outlines); `--color-tile-gray: #efefef` (tiles, cards); `--color-mist: #e7e7e7` (inverse text on dark); `--color-graphite: #1f1f1f` (dark bento cards); `--color-steel: #7d7d7d` (eyebrows, muted labels); `--color-white: #ffffff` (text on dark/blue controls); `--color-electric-blue: #2200ff` (accent).

Map to generic tokens: `--primary: var(--color-electric-blue)`, `--bg-primary: var(--color-paper)`, `--text-primary: var(--color-carbon)`, etc.

Typography scale: micro 11px/1.2; nav 14px/1.4; code (IBM Plex Mono) 15px/1.5; body-strong 15px/1.5 w500; body 16px/1.5; body-large 17px/1.5; eyebrow 21px/1.5; heading-small 24px/1.27 w500 -0.48px; heading-inverse 26px/1.25 w500; display 64px/1.16 w500 -2.56px; hero-display 70px/1 w500 -2.8px. Use `--font-base` bound to Inter.

Spacing base 4px. Radius: cards 16px, links 2px, pills 200px, buttons 2px, accented controls 7.2px. Section gap 36px, card padding 12px, element gap 4px.

## 4. Components & States
Implement all states via CSS classes:
- **Buttons:** default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), hover (brightness/shadow, cursor pointer), focus (focus ring via variables), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`).
  - Carbon Compact Button: Carbon fill, White text, 2px radius, padding 6px 12px 5px.
  - Outlined Utility Button: transparent, 1px Carbon border, Carbon text, 2px radius, padding 6px 8px 5px 12px.
  - Pill Filter Button: transparent, Carbon text/border, 200px radius, padding 6px 8px 5px 12px.
  - Electric Blue Control: Electric Blue fill, White text, 7.2px radius.
  - Hero Action Pair: Carbon Compact + Outlined Utility, 8px gap, 16px body sizing.
- **Cards:** default (flex, subtle borders, elevation via variables), hover (translateY -2px), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + text).
  - Pale Logo Tile: Tile Gray, 16px radius, no shadow, 4px 0 padding, centered Steel mark.
  - Integration Tile: same, irregular skyline arrangement.
  - Dark Bento Feature Card: Graphite fill, 16px radius, no shadow, 0px outer padding; Mist headings 26px/1.25 w500; inset pale module.
- **Forms/Inputs:** empty, focused, filled, valid, invalid, disabled, read-only. Flex container with label, input, error feedback.
- **Modals:** opening/open/loading/success-error/closing animated; centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## 5. UX & Accessibility
Responsive, smooth transitions (`var(--transition-normal)`), respect `prefers-reduced-motion`. Sufficient contrast both modes. Never rely on color alone. Semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback. Visual feedback on every interaction. Destructive actions visually distinct in both themes.

## 6. Sections to Build
Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. All copy in English (fictional brand/product). Use Electric Blue sparingly for emphasized headline fragments, product links, icon strokes, rare 7.2px control. No bright colors beyond Electric Blue. No shadows on Tile Gray/Graphite cards. Display headings w500 only, tight tracking on 64/70px.

## 7. Dark Mode
Define dark tokens under media query and `.dark` class. Persist via localStorage. Include toggle with aria state.
