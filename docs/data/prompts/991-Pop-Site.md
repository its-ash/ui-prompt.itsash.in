You are an expert front-end engineer. Build a complete, responsive landing page in the "Pop Site" visual style described below. Use a fictional brand name and fictional product/copy — never use "Pop Site", "pop site", or any real brand trademarks, logos, or product names. All user-facing copy must be in English.

## 1. Architecture & File Structure

- Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Use one consistent class-naming convention (BEM) across all files. Never mix conventions.
- Zero inline CSS: no `style="..."` attributes. All styling lives in `style.css` via class/ID selectors.
- HTML must stay clean, semantic, and agnostic of visual styling so the look can change by editing only CSS.
- Use Tailwind CSS via CDN with `@layer`/`@apply` directives mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).
- Use Google Fonts: Satoshi (primary display/UI) with substitutes Inter, General Sans, Switzer; Inter for input fields; system-ui fallback. Include `<link>` tags. Use Google Material Symbols/Icons only — no raw inline SVGs or local icon files.

## 2. Design Tokens (CSS Variables in `:root`)

Define all tokens as CSS variables. Provide dark mode under `@media (prefers-color-scheme: dark)` and a `.dark` class, with seamless variable switching and `localStorage` persistence (fall back to `prefers-color-scheme` on first visit). Include a visible toggle with correct `aria-pressed`/`aria-label`.

Colors (light):
- `--color-page-white: #fefefe` (use #fefefe instead of pure white where white/near-white needed)
- `--color-ink-black: #000000`
- `--color-charcoal: #171717`
- `--color-granite: #5e5e5e`
- `--color-slate: #6e6e73`
- `--color-mist: #d2d2d7`
- `--color-wash-blue: #e3eeff`
- `--color-signal-blue: #3b82f6`
- `--color-link-blue: #6ea5ff`

Map to standard tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Enforce contrast pairing: light bg → dark text, dark bg → light text in every theme.

Radius: `--radius-sm: 8px`, `--radius-md: 22px`, `--radius-lg: 9999px`. Shadows: `--shadow-sm: 0 2px 8px rgba(0,0,0,0.08)` (max allowed). Spacing: `--spacing-gap`, `--spacing-8..--spacing-120` per scale. Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`. Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

Typography tokens: `--font-base` (Satoshi), `--font-inter`, `--font-system-ui`. Type scale tokens `--text-caption` (12px/1.2), `--text-body` (15px/1.4), `--text-subheading` (21px/1.3/-0.63px), `--text-heading` (53px/1.2/-2.44px), `--text-display` (93px/1.0/-4.65px), `--text-display-xl` (120px/0.9/-7.08px). Letter spacing tightens on 53px+.

## 3. Layout & UX Rules

- Mobile-first, Flexbox (`display: flex`) for all layout structures. Every flex container defaults to `align-items: center` unless explicitly justified.
- Page max-width 1200px, section gap 80px, card padding 20px, element gap 12–16px. Base unit 4px, comfortable density.
- No horizontal scrolling. Fluid sizing and responsive breakpoints.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.

## 4. Component Specifications

Implement all states via CSS classes:

Buttons:
- Primary pill: #3b82f6 bg, #ffffff text, Satoshi 500 15px, radius 9999px, padding 12px 24px, no border. Hover darken #2f6fd6. Min touch target 44x44px. States: hover, focus ring, active scale(0.97), loading (CSS spinner, no dimension change, disables interaction), disabled (opacity 0.5, greyscale, not-allowed), success/error via tokens.
- Secondary pill: #ffffff bg, 1px #171717 border, #171717 text, radius 9999px, padding 10px 20px.
- Tertiary rounded: radius 26px, same color/border logic as secondary.

Cards (Section Showcase): white, 8px radius, 1px #171717 border, 20px padding. Phone-screen preview image top (8px radius, #f5f5f7 surface), title Satoshi 500 21px #000000, description Satoshi 400 13px #5e5e5e. 3-column grid. States: default, hover (translateY -2px), focus-within, loading skeleton (shimmer), empty state (Google Icon + guidance text).

Inline claim form: white pill radius 9999px, 1px #171717 border, containing borderless input placeholder 'yourname' (Satoshi 15px 400), suffix badge '.pop.site' styled as secondary button, primary blue CTA. (Use fictional suffix appropriate to fictional brand.)

Social proof badge: centered above hero, thin-bordered pill radius 9999px, 1px #d2d2d7 border, Satoshi 13px 400, bolded brand name emphasis.

Hero phone mockup carousel: row of overlapping iPhone-proportion frames, 22px radius, black borders, fanned/overlapping layout, drop shadow 0 20px 40px rgba(0,0,0,0.12) only on frames.

Phone preview frame: black-bordered, 22px outer radius, inner content radius 18–20px.

Navigation bar: white bg, no border/shadow. Left brand wordmark Satoshi 700 ~18px with asterisk. Right text-only links Satoshi 400 13–15px spaced 13px, plus 'Create Account' and 'Log In' text links. No background buttons.

Section heading block: centered, Satoshi 700 53–93px #000000, line-height 1.0–1.1, negative letter-spacing. Subhead Satoshi 15–21px 400 #5e5e5e. 'See all below' link #3b82f6 below. Margins 40–60px top/bottom.

Footer: white bg, 22px top border-radius on inner blocks, Satoshi 400 13px #5e5e5e links, minimal columns, no heavy bg.

Floating action widget: 40px circle #171717 bg, white icon, absolute bottom-right.

Modal (if used): opening/open/loading/success-error/closing animated; centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

Forms/inputs: states empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

## 5. Page Sections

Build these sections in order:
1. Navigation bar
2. Hero: social proof badge, monumental Satoshi display headline (93–120px), subhead, inline claim form, hero phone mockup carousel
3. Features: centered section heading + 3-column showcase card grid
4. How It Works: 3 steps
5. Testimonials
6. Pricing: 3 tiers
7. FAQ
8. Final CTA
9. Footer with secondary links

Use fictional brand, product, and copy throughout. Reserve #3b82f6 exclusively for primary CTAs and active link states — never decoration/icons/backgrounds. No drop shadows on cards/buttons/sections (depth via borders/radius). No gradients on host page. No serif/mono/decorative fonts. One primary blue button per viewport maximum. Display sizes never below 53px for section headlines.

## 6. Deliverables

- `index.html`, `style.css`, `script.js`
- No unrequested placeholders where real copy is supplied; placeholders only where content genuinely unspecified.
- Ensure dark mode toggle, persistence, and accessibility as specified.

Output only the finished coding prompt.You are an expert front-end engineer. Build a complete, responsive landing page in the "Pop Site" visual style described below. Use a fictional brand name and fictional product/copy — never use "Pop Site", "pop site", or any real brand trademarks, logos, or product names. All user-facing copy must be in English.

## 1. Architecture & File Structure

- Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Use one consistent class-naming convention (BEM) across all files. Never mix conventions.
- Zero inline CSS: no `style="..."` attributes. All styling lives in `style.css` via class/ID selectors.
- HTML must stay clean, semantic, and agnostic of visual styling so the look can change by editing only CSS.
- Use Tailwind CSS via CDN with `@layer`/`@apply` directives mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).
- Use Google Fonts: Satoshi (primary display/UI) with substitutes Inter, General Sans, Switzer; Inter for input fields; system-ui fallback. Include `<link>` tags. Use Google Material Symbols/Icons only — no raw inline SVGs or local icon files.

## 2. Design Tokens (CSS Variables in `:root`)

Define all tokens as CSS variables. Provide dark mode under `@media (prefers-color-scheme: dark)` and a `.dark` class, with seamless variable switching and `localStorage` persistence (fall back to `prefers-color-scheme` on first visit). Include a visible toggle with correct `aria-pressed`/`aria-label`.

Colors (light):
- `--color-page-white: #fefefe` (use #fefefe instead of pure white where white/near-white needed)
- `--color-ink-black: #000000`
- `--color-charcoal: #171717`
- `--color-granite: #5e5e5e`
- `--color-slate: #6e6e73`
- `--color-mist: #d2d2d7`
- `--color-wash-blue: #e3eeff`
- `--color-signal-blue: #3b82f6`
- `--color-link-blue: #6ea5ff`

Map to standard tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Enforce contrast pairing: light bg → dark text, dark bg → light text in every theme.

Radius: `--radius-sm: 8px`, `--radius-md: 22px`, `--radius-lg: 9999px`. Shadows: `--shadow-sm: 0 2px 8px rgba(0,0,0,0.08)` (max allowed). Spacing: `--spacing-gap`, `--spacing-8..--spacing-120` per scale. Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`. Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

Typography tokens: `--font-base` (Satoshi), `--font-inter`, `--font-system-ui`. Type scale tokens `--text-caption` (12px/1.2), `--text-body` (15px/1.4), `--text-subheading` (21px/1.3/-0.63px), `--text-heading` (53px/1.2/-2.44px), `--text-display` (93px/1.0/-4.65px), `--text-display-xl` (120px/0.9/-7.08px). Letter spacing tightens on 53px+.

## 3. Layout & UX Rules

- Mobile-first, Flexbox (`display: flex`) for all layout structures. Every flex container defaults to `align-items: center` unless explicitly justified.
- Page max-width 1200px, section gap 80px, card padding 20px, element gap 12–16px. Base unit 4px, comfortable density.
- No horizontal scrolling. Fluid sizing and responsive breakpoints.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.

## 4. Component Specifications

Implement all states via CSS classes:

Buttons:
- Primary pill: #3b82f6 bg, #ffffff text, Satoshi 500 15px, radius 9999px, padding 12px 24px, no border. Hover darken #2f6fd6. Min touch target 44x44px. States: hover, focus ring, active scale(0.97), loading (CSS spinner, no dimension change, disables interaction), disabled (opacity 0.5, greyscale, not-allowed), success/error via tokens.
- Secondary pill: #ffffff bg, 1px #171717 border, #171717 text, radius 9999px, padding 10px 20px.
- Tertiary rounded: radius 26px, same color/border logic as secondary.

Cards (Section Showcase): white, 8px radius, 1px #171717 border, 20px padding. Phone-screen preview image top (8px radius, #f5f5f7 surface), title Satoshi 500 21px #000000, description Satoshi 400 13px #5e5e5e. 3-column grid. States: default, hover (translateY -2px), focus-within, loading skeleton (shimmer), empty state (Google Icon + guidance text).

Inline claim form: white pill radius 9999px, 1px #171717 border, containing borderless input placeholder 'yourname' (Satoshi 15px 400), suffix badge styled as secondary button, primary blue CTA. (Use fictional suffix appropriate to fictional brand.)

Social proof badge: centered above hero, thin-bordered pill radius 9999px, 1px #d2d2d7 border, Satoshi 13px 400, bolded brand name emphasis.

Hero phone mockup carousel: row of overlapping iPhone-proportion frames, 22px radius, black borders, fanned/overlapping layout, drop shadow 0 20px 40px rgba(0,0,0,0.12) only on frames.

Phone preview frame: black-bordered, 22px outer radius, inner content radius 18–20px.

Navigation bar: white bg, no border/shadow. Left brand wordmark Satoshi 700 ~18px with asterisk. Right text-only links Satoshi 400 13–15px spaced 13px, plus 'Create Account' and 'Log In' text links. No background buttons.

Section heading block: centered, Satoshi 700 53–93px #000000, line-height 1.0–1.1, negative letter-spacing. Subhead Satoshi 15–21px 400 #5e5e5e. 'See all below' link #3b82f6 below. Margins 40–60px top/bottom.

Footer: white bg, 22px top border-radius on inner blocks, Satoshi 400 13px #5e5e5e links, minimal columns, no heavy bg.

Floating action widget: 40px circle #171717 bg, white icon, absolute bottom-right.

Modal (if used): opening/open/loading/success-error/closing animated; centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

Forms/inputs: states empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

## 5. Page Sections

Build these sections in order:
1. Navigation bar
2. Hero: social proof badge, monumental Satoshi display headline (93–120px), subhead, inline claim form, hero phone mockup carousel
3. Features: centered section heading + 3-column showcase card grid
4. How It Works: 3 steps
5. Testimonials
6. Pricing: 3 tiers
7. FAQ
8. Final CTA
9. Footer with secondary links

Use fictional brand, product, and copy throughout. Reserve #3b82f6 exclusively for primary CTAs and active link states — never decoration/icons/backgrounds. No drop shadows on cards/buttons/sections (depth via borders/radius). No gradients on host page. No serif/mono/decorative fonts. One primary blue button per viewport maximum. Display sizes never below 53px for section headlines.

## 6. Deliverables

- `index.html`, `style.css`, `script.js`
- No unrequested placeholders where real copy is supplied; placeholders only where content genuinely unspecified.
- Ensure dark mode toggle, persistence, and accessibility as specified.
