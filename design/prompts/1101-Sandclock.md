# UI/UX Coding Prompt — Sandclock-Inspired DeFi Yield Terminal Landing Page

## 1. Project Overview

Build a complete, responsive landing page for a fictional DeFi yield protocol. The visual style is inspired by a "DeFi command terminal at midnight" aesthetic: matte black canvas, hairline graphite borders, flat surfaces, one vivid mint-green signal color, and typography that does all the work. **Invent a fictional brand name, product name, and all copy. Never use the real brand name "Sandclock", its logo, trademarks, or product names anywhere in the page.** All user-facing copy must be written in English.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`). Enforce one consistent class-naming convention (BEM) across the entire deliverable.

## 2. CSS-First Architecture & Zero Inline CSS

- All styling must live strictly inside `style.css`. No `style="..."` attributes in HTML.
- All design properties, layout rules, and states must be targeted via class or ID selectors.
- HTML must remain clean, semantic, and agnostic of visual styling so that changing the look requires modifying only CSS.

## 3. CSS Variables & Theme Tokens

Define all tokens in `:root` (and theme classes). Required tokens:

**Colors:**
- `--color-abyss: #0a0a0a` (page canvas)
- `--color-carbon: #171717` (card/panel surface)
- `--color-graphite: #222222` (hairline borders/dividers)
- `--color-ash: #9b9b9b` (muted secondary text, helper labels)
- `--color-chalk: #ffffff` (primary text, icons)
- `--color-signal-mint: #3fe280` (sole chromatic accent)
- `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--bg-primary`, `--bg-secondary`

**Contrast pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text. Enforce for every theme.

**Light mode background:** Do not default to pure white. Use `#fefefe` where a near-white is needed.

**Border radius & shadows:**
- `--radius-sm`, `--radius-md: 12px`, `--radius-lg: 16px`, `--shadow-sm`, `--shadow-md`
- Button radius: 16px. Card radius: 12px. Pill radius: 9999px. Hero button radius: 64px.

**Spacing & transitions:**
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`
- Spacing scale: 8, 16, 24, 32, 40, 48, 64, 80, 112px.

**Elevation/stacking:**
- `--z-dropdown`, `--z-modal`, `--z-toast`.

**Typography:**
- `--font-base` bound to Inter (Google Font).
- Display font: Aeonik (fallback Satoshi or General Sans) — Google Font substitute only. Use 400 weight at 72px for hero display text only.
- Inter weights 400 and 500. Positive letter-spacing 0.05em on all Inter text.
- Type scale tokens: `--text-caption` (14px/1.43/0.7px), `--text-body` (16px/1.5/0.8px), `--text-subheading` (20px/1.4/1px), `--text-heading-sm` (24px/1.33/1.2px), `--text-heading` (36px/1.11/1.8px), `--text-display` (72px/1/-1.8px).

## 4. Mandatory Dark Mode Support

- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- User theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Require a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Flexbox Layout & Mobile-First Alignment

- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- All flex layouts must be mobile-responsive out of the box (rows convert to columns on small viewports). Prevent horizontal scrolling.

## 6. Framework & Tailwind CSS Integration

- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons (Google Fonts Mandatory)

- Include Google Font `<link>` or `@import` tags for Inter (and a display substitute such as Satoshi/General Sans via Google Fonts where available) and bind to `--font-base`.
- Use Google Material Symbols/Icons for all icons. Forbid raw inline SVGs or local icon files.

## 8. Component Design Specifications

### 8.1 Button Component
- Default: Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback states driven by `--text-success`/`--text-error`.

**Button variants for this theme:**
- **Primary CTA:** `#3fe280` background, `#0a0a0a` text, Inter 500 16px, letter-spacing 0.05em, padding 12px 24px, border-radius 16px, no shadow. Single subtle button lift shadow `rgba(24, 39, 75, 0.08) 0px 2px 3px 0px`.
- **Ghost Button:** transparent background, 1px `#222222` border, `#ffffff` text, Inter 500 16px, padding 12px 24px, border-radius 16px. Small Google Icon precedes label.
- **Connect Wallet Button:** `#ffffff` fill, `#0a0a0a` text, Inter 500 16px, border-radius 9999px (pill). Top-right nav utility.

### 8.2 Card Component
- Default: flexible Flexbox layout, subtle borders and elevation using `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlights card borders when a child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and clear guidance text.

**Card variants for this theme:**
- **TVL Stat Card:** `#171717` background, 1px `#3fe280` border, 12px radius, 16-24px padding. Small Ash label (14px, uppercase tracking) above large white value (36px Inter 500).
- **Generic Card:** `#171717` background, 1px `#222222` border, 12px radius, 16px padding. No shadow.
- **Announcement Card:** `#171717` background, 12px radius. Top half: full-bleed image/gradient artwork. Bottom half: pill badge (Announcement/Security) in Graphite with white text, then heading (20px Inter 500 white) and body (14px Inter 400 Ash). 16px padding on text block.
- **Security Badge Tile:** `#171717` background, 12px radius, centered layout. 24px white line icon at top, 14px Inter 400 white label below. No border, no shadow.

### 8.3 Form & Input Requirements
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, and dedicated error feedback container.

### 8.4 Modal / Popup Requirements
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay clicks.

## 9. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing and breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.

## 10. Page Sections to Implement

Build a landing page with these sections in order:

1. **Hero:** Two-column split. Left: 72px Aeonik 400 display headline (single statement moment). Right: supporting copy + dual CTA stack (Primary CTA + Ghost Button). Partner logo strip below hero spanning full container width with even horizontal distribution (white logos on Abyss canvas, no borders/separators).
2. **Features:** 3 cards in a grid. Use Generic Card or Feature Icon Block style. Icon-plus-label units with white or Signal Mint icons (16-20px) and white labels (14px Inter 400), 4-8px gap, aligned to vertical rhythm. No background or border on icon blocks.
3. **How It Works:** 3 steps. Compact, information-dense. Use cards or numbered feature blocks.
4. **Testimonials:** Card-based testimonials using Generic Card style.
5. **Pricing:** 3 tiers using Generic Card style. Highlight one tier (e.g., with Signal Mint border like TVL Stat Card).
6. **FAQ:** Accordion or list. Use semantic HTML. Accessible expand/collapse.
7. **Final CTA:** Centered heading + Primary CTA button. Generous spacing.
8. **Footer:** Secondary links, minimal. White text on Abyss.

## 11. Layout & Visual Rules (Theme-Specific)

- Max-width ~1200px centered container on full-bleed Abyss canvas.
- Section gaps: 48-64px between major sections.
- Card padding: 16px. Element gap: 16px.
- Navigation: minimal top bar, left-aligned logo, center-left nav links (Inter 400 16px white; active state has 3px solid `#3fe280` bottom border), right-aligned Connect Wallet pill (white, 9999px radius).
- No sticky behavior beyond standard top bar.
- No gradients. No drop shadows on cards/modals/panels (only the single subtle button lift).
- No border-radius below 12px on containers or below 16px on buttons.
- Signal Mint `#3fe280` used ONLY for: primary CTAs, active nav indicators, and border on live-data stat cards. Every other surface achromatic.
- Inter letter-spacing 0.05em on all text.
- Aeonik 400 at 72px for hero display text only. Never for subheadings or body.
- Default canvas `#0a0a0a`, cards `#171717`, borders `#222222`. Layer depth via color shift, not shadow.
- Ash `#9b9b9b` only for de-emphasized text/helper labels.
- Connect Wallet is the only inverted-color (white) UI element in nav.

## 12. Imagery & Icons

- Minimal imagery. No product photography, lifestyle imagery, or illustration chrome. Text-and-data UI.
- Icons: monochrome line icons in white via Google Material Symbols, used sparingly as functional markers.
- Announcement cards may use external artwork (gradients allowed only there as external asset break).

## 13. Naming & Deliverables

- Enforce BEM naming convention consistently.
- File structure: `index.html`, `style.css`, `script.js`.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content genuinely unspecified. Invent fictional brand/product/copy as needed.
- No new HTML elements beyond what the design requires; keep markup semantic and minimal.

## 14. Edit Mode (Not Applicable)

This is a from-scratch build, not a modification of existing markup. All sections above apply in full.

## 15. Final Notes

- Ensure all interactive elements have visible focus states, hover states, and active states.
- Respect `prefers-reduced-motion` for all animations.
- Use `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- All copy in English. Invent a fictional brand name and product — never reference "Sandclock" or its trademarks.
