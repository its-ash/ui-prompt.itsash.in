# Generated Prompt for Coding AI

## 1. Project Overview
Build a complete, responsive **landing page** in the visual style of the provided "Apple" reference spec, but for a **fictional brand**. Invent a fictional brand name, product name, and all copy. Never use the real brand name "Apple", its logo, trademarks, or product names (e.g., iPhone, Mac, SF Pro) anywhere in the page. Use the style only.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`).

## 2. Architecture & Theming Rules
- **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. HTML must be clean, semantic, and agnostic of visual styling. Target via class/ID selectors only.
- **CSS Variables:** Store all tokens in `:root` using the exact names from the spec (e.g., `--color-gallery-white`, `--color-studio-mist`, `--color-ink`, `--color-apple-blue`, `--color-pricing-blue`, `--color-launch-orange`, `--font-sf-pro-display`, `--font-sf-pro-text`, `--spacing-*`, `--shadow-subtle`, etc.). Since SF Pro is proprietary, substitute with the spec's listed substitutes (Inter, Helvetica Neue, Arial) via Google Fonts. Use Inter as primary substitute.
- **Contrast Pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.
- **Light Mode Background:** Use `#fefefe` where near-white is needed; primary canvas is `#ffffff` per spec.
- **Border Radius & Shadows:** Use `--radius-*` tokens mapping to spec values (cards 28px, links 10px, pills 36px, badges 0px, images 28px, inputs 980px, buttons 9999px, navigation 20px). Shadows only `--shadow-subtle` / `--shadow-subtle-2` (1px outlines). No drop shadows on cards/capsules.
- **Spacing & Transitions:** `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`. Section gap 90px, card padding 28px, element gap 20px.
- **Elevation/Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.
- **Mandatory Dark Mode:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and/or `.dark` class. Theme switching via `localStorage`, fallback to `prefers-color-scheme`. Visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** All layouts via Flexbox. Every flex container defaults to `align-items: center` unless justified. Responsive, no horizontal scroll.
- **Tailwind CSS:** Use Tailwind (or clean custom CSS via `@layer`/`@apply`) mapping utilities to CSS variables. Generic classes: `.btn`, `.card`, `.input-group`.
- **Typography & Icons:** Google Fonts only (Inter for text). Google Material Symbols for icons. No inline SVGs or local icon files.

## 3. Component Specifications
Enforce all states for each component:

**Buttons:** default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), hover (brightness/shadow, cursor pointer), focus (ring via CSS vars), active (transform scale(0.97)), loading (disabled, spinner, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`).

**Cards:** default (flex, subtle borders, elevation via vars), hover (translateY(-2px)), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance text).

**Forms/Inputs:** states empty/focused/filled/valid/invalid/disabled/readonly. Flex container wrapping label, input, error feedback.

**Modals:** opening/open/loading/success-error/closing (CSS transitions). Centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

**Apple-specific components to build (fictional brand):**
- Global store nav (44px, white, compact links, rgba(0,0,0,0.8) labels; opened state #fafafc with 1px #e6e6e8 edge + blur(20px)).
- Product local nav (white bar, product name SF Pro Display 19px/600, pill controls, 20px radius, #d6d6d6 hairline).
- Outlined Explore Pill (transparent, #1d1d1f text, 1px #86868b outline, 9999px radius, SF Pro Text 12px/400).
- Pricing Blue Pill (#0071e3 fill, #ffffff 12px text, 9999px radius).
- Hero Product Stage (#ffffff full-bleed, centered product label 21px/600, 80px/600 display at 84px line-height -1.2px tracking, device render below, no card).
- Floating Pricing Callout (#ffffff 28px capsule, 14px/600 #1d1d1f pricing, Pricing Blue pill inside, no shadow).
- Section Anchor Navigation (horizontal SF Pro Text 17px/500, -0.374px tracking, transparent, 28px vertical padding, no underline).
- Highlights Stage (#f5f5f7 section, Ink heading, Apple Blue link, #ffffff 28px cards no shadow).
- Feature Media Card (#ffffff, 28px radius, no border/shadow, 24px/600 or 40px/600 statement above, media may crop).
- Carousel Playback Control (translucent rgba(210,210,215,0.64) track, 36px radius, rgba(0,0,0,0.56) glyphs).
- Editorial Feature Block (small Ink kicker, large left-aligned display, SF Pro Text 17px/400 body at 21px line-height -0.374px tracking, oversized image from opposite side).
- Rounded Search Input (#ffffff fill, #1d1d1f 13px Arial, 24px left / 45px right padding, 1px #86868b outline, 980px radius).
- Launch Status Label (#b64400 12px/600, 16px line-height, -0.12px tracking, plain text, no pill).

## 4. Page Sections Required
1. Hero (product label + 80px display + device render + floating pricing callout)
2. Features (3 cards)
3. How It Works (3 steps)
4. Testimonials
5. Pricing (3 tiers)
6. FAQ
7. Final CTA
8. Footer with secondary links

## 5. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 6. Naming & Quality
- One consistent class-naming convention (BEM) throughout. Never mix conventions.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where genuinely unspecified. Invent fictional copy for all sections.
- No gradients. No shadows on cards/capsules/editorial blocks. No #0071e3 as large hero background. No bold 700 hero headlines. No colored status pills for launch labels.

## 7. Edit Mode
Not applicable (from-scratch build).

## 8. Output
Output only the finished prompt deliverables as code files per spec. No preamble. All copy in English. All CSS variable names, class names, file names in English/ASCII.# Generated Prompt for Coding AI

## 1. Project Overview
Build a complete, responsive **landing page** in the visual style of the provided "Apple" reference spec, but for a **fictional brand**. Invent a fictional brand name, product name, and all copy. Never use the real brand name "Apple", its logo, trademarks, or product names (e.g., iPhone, Mac, SF Pro) anywhere in the page. Use the style only.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`).

## 2. Architecture & Theming Rules
- **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. HTML must be clean, semantic, and agnostic of visual styling. Target via class/ID selectors only.
- **CSS Variables:** Store all tokens in `:root` using the exact names from the spec (e.g., `--color-gallery-white`, `--color-studio-mist`, `--color-ink`, `--color-apple-blue`, `--color-pricing-blue`, `--color-launch-orange`, `--font-sf-pro-display`, `--font-sf-pro-text`, `--spacing-*`, `--shadow-subtle`, etc.). Since SF Pro is proprietary, substitute with the spec's listed substitutes (Inter, Helvetica Neue, Arial) via Google Fonts. Use Inter as primary substitute.
- **Contrast Pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.
- **Light Mode Background:** Use `#fefefe` where near-white is needed; primary canvas is `#ffffff` per spec.
- **Border Radius & Shadows:** Use tokens mapping to spec values (cards 28px, links 10px, pills 36px, badges 0px, images 28px, inputs 980px, buttons 9999px, navigation 20px). Shadows only `--shadow-subtle` / `--shadow-subtle-2` (1px outlines). No drop shadows on cards/capsules.
- **Spacing & Transitions:** `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`. Section gap 90px, card padding 28px, element gap 20px.
- **Elevation/Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.
- **Mandatory Dark Mode:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and/or `.dark` class. Theme switching via `localStorage`, fallback to `prefers-color-scheme`. Visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** All layouts via Flexbox. Every flex container defaults to `align-items: center` unless justified. Responsive, no horizontal scroll.
- **Tailwind CSS:** Use Tailwind (or clean custom CSS via `@layer`/`@apply`) mapping utilities to CSS variables. Generic classes: `.btn`, `.card`, `.input-group`.
- **Typography & Icons:** Google Fonts only (Inter for text). Google Material Symbols for icons. No inline SVGs or local icon files.

## 3. Component Specifications
Enforce all states for each component:

**Buttons:** default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), hover (brightness/shadow, cursor pointer), focus (ring via CSS vars), active (transform scale(0.97)), loading (disabled, spinner, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`).

**Cards:** default (flex, subtle borders, elevation via vars), hover (translateY(-2px)), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance text).

**Forms/Inputs:** states empty/focused/filled/valid/invalid/disabled/readonly. Flex container wrapping label, input, error feedback.

**Modals:** opening/open/loading/success-error/closing (CSS transitions). Centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

**Apple-specific components to build (fictional brand):**
- Global store nav (44px, white, compact links, rgba(0,0,0,0.8) labels; opened state #fafafc with 1px #e6e6e8 edge + blur(20px)).
- Product local nav (white bar, product name SF Pro Display 19px/600, pill controls, 20px radius, #d6d6d6 hairline).
- Outlined Explore Pill (transparent, #1d1d1f text, 1px #86868b outline, 9999px radius, SF Pro Text 12px/400).
- Pricing Blue Pill (#0071e3 fill, #ffffff 12px text, 9999px radius).
- Hero Product Stage (#ffffff full-bleed, centered product label 21px/600, 80px/600 display at 84px line-height -1.2px tracking, device render below, no card).
- Floating Pricing Callout (#ffffff 28px capsule, 14px/600 #1d1d1f pricing, Pricing Blue pill inside, no shadow).
- Section Anchor Navigation (horizontal SF Pro Text 17px/500, -0.374px tracking, transparent, 28px vertical padding, no underline).
- Highlights Stage (#f5f5f7 section, Ink heading, Apple Blue link, #ffffff 28px cards no shadow).
- Feature Media Card (#ffffff, 28px radius, no border/shadow, 24px/600 or 40px/600 statement above, media may crop).
- Carousel Playback Control (translucent rgba(210,210,215,0.64) track, 36px radius, rgba(0,0,0,0.56) glyphs).
- Editorial Feature Block (small Ink kicker, large left-aligned display, SF Pro Text 17px/400 body at 21px line-height -0.374px tracking, oversized image from opposite side).
- Rounded Search Input (#ffffff fill, #1d1d1f 13px Arial, 24px left / 45px right padding, 1px #86868b outline, 980px radius).
- Launch Status Label (#b64400 12px/600, 16px line-height, -0.12px tracking, plain text, no pill).

## 4. Page Sections Required
1. Hero (product label + 80px display + device render + floating pricing callout)
2. Features (3 cards)
3. How It Works (3 steps)
4. Testimonials
5. Pricing (3 tiers)
6. FAQ
7. Final CTA
8. Footer with secondary links

## 5. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 6. Naming & Quality
- One consistent class-naming convention (BEM) throughout. Never mix conventions.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where genuinely unspecified. Invent fictional copy for all sections.
- No gradients. No shadows on cards/capsules/editorial blocks. No #0071e3 as large hero background. No bold 700 hero headlines. No colored status pills for launch labels.

## 7. Edit Mode
Not applicable (from-scratch build).

## 8. Output
Output only the finished prompt deliverables as code files per spec. No preamble. All copy in English. All CSS variable names, class names, file names in English/ASCII.
