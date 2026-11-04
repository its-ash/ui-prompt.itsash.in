# Coding AI Prompt — Complete Landing Page (Heynds Style)

## 1. Project Overview & Theme

Build a complete, production-ready landing page as separate `index.html`, `style.css`, and `script.js` files. The visual style must follow the "Heynds" design system: a near-white canvas (`#fffafa`) lit by a single vivid orange ember (`#f53900`) as the only chromatic color, flat surfaces, hairline dividers, tiny radii, and Geist typography. **Do not use the real brand name "Heynds", its logo, trademarks, or product names anywhere in the page.** Invent a fictional brand name, product, and all copy. All user-facing copy must be written in English.

## 2. Strict Architecture Rules

### 2.1 CSS-First Architecture & Zero Inline CSS
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors only.
- HTML must remain semantic and style-agnostic.

### 2.2 CSS Variables & Theme Tokens
Define all tokens in `:root` (and a `.dark` class / `@media (prefers-color-scheme: dark)` for dark mode):

**Colors:**
- `--color-ember-orange: #f53900` (primary accent — CTAs, accent text, icons, decorative accents)
- `--color-peach-wash: #ffe0d6` (tinted surfaces, badge backgrounds, secondary button fills)
- `--color-snow-canvas: #fffafa` (page background and elevated surfaces)
- `--color-ink-black: #040101` (primary text, headings, nav, icon strokes, input values)
- `--color-fog-gray: #827e7e` (secondary/helper text, placeholders)
- `--color-smoke-gray: #4d4b4b` (tertiary text, timestamps, micro-labels)
- `--color-ash-border: #e5e5e5` (hairline dividers, card borders, input borders)
- `--color-pebble-gray: #c0bcbc` (alternating section bands, disabled fills)

**Generic tokens (required by meta-rules):**
- `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`
- `--font-base`

Map the Heynds tokens onto these generic tokens (e.g., `--primary: var(--color-ember-orange)`, `--bg-primary: var(--color-snow-canvas)`, `--text-primary: var(--color-ink-black)`).

**Contrast pairing:** every light background pairs with dark text and vice versa in both themes. Light-mode background must not be pure white; use `#fffafa` (already specified). Where a near-white is needed, use `#fefefe`.

**Radius & shadows:**
- `--radius-sm: 4px` (buttons, form controls)
- `--radius-md: 8px` (cards, video frame)
- `--radius-lg: 12px` (panels)
- `--shadow-sm: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- `--shadow-md: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` (only one shadow layer exists in this system)

**Spacing & transitions:**
- `--spacing-gap: 24px`
- `--transition-fast: 150ms`
- `--transition-normal: 250ms`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Elevation/stacking:**
- `--z-dropdown: 100`, `--z-modal: 1000`, `--z-toast: 2000`

### 2.3 Mandatory Dark Mode
- Provide dark-mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Dark mode must invert the canvas to a dark surface with light text while keeping the ember orange accent legible; peach wash becomes a deep tinted surface.
- Theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed` and `aria-label`.

### 2.4 Flexbox Layout & Mobile-First
- Use Flexbox for all layout structures.
- Every flex container defaults to `align-items: center` unless an explicitly justified exception exists.
- Mobile-responsive out of the box: rows convert to columns on small viewports; no horizontal scrolling.

### 2.5 Framework
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply`). All utility classes map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons (Google Fonts Mandatory)
- Text: Geist via Google Fonts (substitute Inter if unavailable), bound to `--font-base`. Weights 400, 500, 600, 700.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 3. Design Tokens (Heynds-specific)

**Typography scale tokens:**
- `--text-caption: 12px` (line-height 1.4)
- `--text-body-sm: 14px` (line-height 1.4)
- `--text-body: 16px` (line-height 1.4)
- `--text-subheading: 20px` (line-height 1.33)
- `--text-heading-sm: 24px` (line-height 1.25)
- `--text-heading: 32px` (line-height 1.25)
- `--text-heading-lg: 40px` (line-height 1.11)
- `--text-display: 64px` (line-height 1.0)

**Spacing scale:** 8, 16, 24, 32, 40, 48, 64, 80, 112, 128, 240 (as `--spacing-8` … `--spacing-240`).

**Layout:** page max-width 1200px; section gap 80px; card padding 40px; element gap 24px.

**Radius families (do not mix):** buttons/form controls 4px; cards/video 8px; panels 12px; badges/icon containers 9999px.

**Shadow:** only `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`.

## 4. Component Specifications

### 4.1 Button Component
- Default: flex, `align-items: center`, `justify-content: center`, gap 0.5rem; min touch target 44x44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disables interaction, prevents double-clicks, CSS spinner or animated Google Icon without dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary styles via `--text-success` / `--text-error`.

Variants: Primary filled (ember orange bg, snow canvas text, 4px radius, 16px/24px padding, optional right-arrow icon), Secondary ghost (transparent, 1px ember border, ember text, 4px radius, 16/24px padding, optional sparkle icon).

### 4.2 Card Component
- Default: flex layout, subtle border/elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight border when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty State: Google Icon + guidance text.

Feature cards: borderless on snow canvas, leading ember icon inside 9999px-radius peach-wash circle (40px), title in ember Geist 500 18px, description in ink black Geist 400 16px line-height 1.4. 3-column grid, 24px gap.

### 4.3 Form & Input
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

### 4.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### 4.5 Landing Page Sections
Build these sections in order:
1. **Nav bar:** logo left, language selector + filled CTA right, 40px vertical padding.
2. **Hero:** centered text stack — eyebrow pill badge → two-tone display headline (line 1 ember, line 2 ink black, 64px Geist 600, line-height 1.0) → subheadline (ink black, 16px, max-width 640px, centered) → button pair (primary + ghost) → avatar social proof stack → availability badge → embedded product video frame.
3. **Features:** section headline with accent line ("The Interface" / "Instant AI" style), then 3-column feature card grid.
4. **How It Works:** 3 steps (numbered, icon + title + description).
5. **Testimonials:** cards with quote, name, role.
6. **Pricing:** 3 tiers (card per tier, highlighted middle tier).
7. **FAQ:** single-column accordion rows, hairline bottom borders, chevron rotates 180° on open, no background fill change.
8. **Final CTA:** centered headline + button.
9. **Footer:** secondary links, logo, copyright.

**Pill announcement badge:** peach-wash bg, ember text, Geist 500 14px, 9999px radius, 8px/16px padding, leading sparkle icon in ember.

**Avatar social proof stack:** 4–5 overlapping 32px circular avatars, bold ink-black line at 14px, muted fog-gray subline at 14px, centered.

**Availability badge:** small Apple logo icon 16px in ink black above centered "Available on:" label in fog gray 14px.

**Embedded product video:** 16:9 frame, 8px radius, 1px ash-border, subtle shadow, picture-in-picture presenter overlay bottom-right.

**Section headline with accent line:** two stacked centered lines — first ink black Geist 500 40–48px, second ember Geist 500 40–48px with trailing sparkle icon; subheadline beneath in ink black 16px.

**Decorative radiating line pattern:** thin peach-wash/pale-orange lines radiating from a central point filling hero and FAQ backgrounds; static, not animated.

## 5. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing, breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes; never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 6. Do's and Don'ts (Heynds)

**Do:**
- Use ember orange only for the single primary CTA, outlined action borders, icon accents — never as a surface fill for non-action content.
- Apply 4px radius to buttons/form controls, 9999px to badges/icon containers, 8px to cards — do not mix radius families.
- Use Geist 600–700 at 40–80px for display headlines, 1.0–1.11 line-height, centered.
- Separate content rows with 1px ash-border hairlines instead of background changes or heavy dividers.
- Use peach wash as a soft surface tint for badges, not full sections or large containers.
- Keep body text in ink black at 14–16px / 1.4; reserve fog gray for helper/muted text.
- Maintain 80–112px vertical gaps between major sections, 24px between elements within a section.

**Don't:**
- Don't introduce additional chromatic colors — single-orange discipline is the brand signature.
- Don't use large drop shadows, glowing effects, or 3D elevation.
- Don't use snow canvas as a card surface when the page is already on snow canvas — go borderless or add a 1px hairline.
- Don't apply ember orange to body paragraphs or long-form text — only accent words, icons, CTAs.
- Don't use sharp 0px corners — smallest radius is 4px.
- Don't place secondary text in ink black when it could be fog gray.
- Don't use gradients — purely flat color with one shadow layer.

## 7. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No lorem-ipsum-only submissions where real copy/labels are expected; placeholders allowed only where content was genuinely left unspecified.
- All copy in English; fictional brand name, product, and content (never "Heynds" or its trademarks).
