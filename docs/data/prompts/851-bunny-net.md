# Coding AI Prompt — Fictional Landing Page in the "bunny.net" Orbital Rabbit Relay Style

## 1. Strict Rules & Architecture

### 1.1 CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside a dedicated `style.css` file.
- Forbid the use of `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so that changing the look requires modifying only `style.css`.

### 1.2 CSS Variables & Theme Tokens
Store all visual tokens inside `:root` (and theme classes) using CSS variables. Use the following token set derived from the reference style:

Colors:
- `--color-cloud-canvas: #e1f2ff`
- `--color-ice-surface: #eff8ff`
- `--color-white-surface: #fefefe`
- `--color-mist-divider: #d3e2f1`
- `--color-graphite: #666666`
- `--color-edge-navy: #183d6d`
- `--color-launch-bay: #051e38`
- `--color-network-deep: #022e57`
- `--color-signal-blue: #8bb3da`
- `--color-signal-orange: #fd8d32`
- `--color-coral-launch: linear-gradient(180deg, #ff7a53, #ffa84a)`
- `--color-comet-spectrum: linear-gradient(85.19deg, #ff2a64 -133.27%, #ffaf48 105.93%)`

Also define generic theme tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

Contrast pairing: any light background token must pair with a dark text token, and any dark background token must pair with a light text token, in every theme.

Light mode background must not be pure white; use `#e1f2ff` (Cloud Canvas) as the default page background. Where a white/near-white is needed, use `#fefefe`.

Border radius and shadows:
- `--radius-sm: 6px`
- `--radius-md: 10px`
- `--radius-lg: 20px`
- `--shadow-sm: 0px 4px 11px rgb(212, 211, 221)`
- `--shadow-md: 0px 6px 40px rgba(0, 0, 0, 0.04)`

Spacing and transitions:
- `--spacing-gap: 15px`
- `--section-gap: 32px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

Elevation/stacking:
- `--z-dropdown: 100`
- `--z-modal: 1000`
- `--z-toast: 2000`

### 1.3 Mandatory Dark Mode Support
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Ensure background and text CSS variables switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Require a visible toggle control with correct `aria-pressed`/`aria-label` state.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- All flex layouts must be mobile-responsive out of the box (rows convert to columns on smaller viewports). Prevent horizontal scrolling.

### 1.5 Framework Default & Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives) unless another framework is requested.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 1.6 Typography & Icons (Google Fonts Mandatory)
- Use Google Fonts for text and icons. Include Google Font `<link>` or `@import` tags.
- Text: Rubik (weights 400, 500, 600, 700) bound to `--font-base` (Rubik). Fallback: Arial Rounded MT Bold for headings, Arial for body.
- Icons: Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.
- OpenType features: `"kern"`.

Type scale tokens:
- `--text-caption: 400 14px/2.07 Rubik`
- `--text-body: 400 18px/1.2 Rubik`
- `--text-card-title: 700 20px/1.3 Rubik`
- `--text-rating: 700 28px/1 Rubik`
- `--text-section-heading: 700 45px/1.2 Rubik`
- `--text-promo-heading: 700 45px/1.3 Rubik`
- `--text-hero-display: 700 54px/1.2 Rubik`

## 2. Component Design Specifications

### 2.1 Button Component Requirements
Style all states via CSS classes:
- Default: Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- Hover: Visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: Distinct focus ring using CSS variables (`outline` / `box-shadow`) for keyboard navigation.
- Active/Pressed: Click transform feedback (`transform: scale(0.97)`).
- Loading: Disables interactions, prevents double-clicks, renders a CSS spinner or animated Google Icon without distorting button dimensions.
- Disabled: Reduced opacity (`opacity: 0.5`), greyscale, `cursor: not-allowed`.
- Success/Error: Temporary feedback state styles driven by `--text-success` or `--text-error`.

### 2.2 Card Component Requirements
For interactive cards:
- Default: Flexible Flexbox layout, styled with subtle borders and elevation using `--bg-secondary` and CSS variables.
- Hover: Elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- Focus-within: Highlights card borders when a child link/button receives focus.
- Loading (Skeleton): Shimmer animation styling defined in CSS to prevent layout jumps.
- Empty State: Structured fallback layout featuring a Google Icon and clear guidance text.

### 2.3 Form & Input Requirements
Account for:
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping a label, input field, and dedicated error feedback container.

### 2.4 Modal / Popup Requirements
Account for:
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX Features: Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, support for closing via `Esc` or overlay clicks.

## 3. Core UX & Micro-Interaction Rules
- Responsive by Default: Fluid sizing and responsive breakpoints without horizontal overflow.
- Smooth Animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility (a11y): Sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory Visual Feedback: Every user click, hover, or submission must trigger a visible state change.
- Destructive Actions: Generic `.btn-danger` or delete actions must be visually distinct in both light and dark themes.

## 4. Deliverables
- File Structure: Separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Naming Convention: Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No Unrequested Placeholders: Prohibit lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content was genuinely left unspecified.

## 5. Brand & Content Rules (Important)
- This spec describes the visual style of a real brand. Reuse the style only.
- Invent a fictional brand name, product, and copy. Never use the real brand name, logo, trademarks, or product names in the page.
- All user-facing copy must be written in English.

## 6. Page Specification

Build a complete landing page with the following sections, using the token set and style rules above:

- **Hero**: Launch Bay (`#051e38`) base, 20px radius, deep blue illustrated backdrop. Left column: white Rubik 700 54px/64.8px headline, white Rubik 400 body copy, Coral Launch gradient trial button (Rubik 500 20px/24px, 6px radius, directional arrow icon) with a white or Signal Blue 14px/22px reassurance line. Right side: large contained mascot-and-rocket illustration. Floating dark navigation bar (20px radius, translucent navy) over the hero with white 16px/19px Rubik links, 15px horizontal item spacing, compact 5px–10px internal control padding. Outlined login control (transparent fill, 1px white border, white 16px/19px Rubik 400, 6px radius, 10px padding). Gradient get-started control (Coral Launch gradient, white Rubik 500, 6px radius, compact nav-scale padding). Partner logo rail directly below hero (muted dark gray or Edge Navy, grayscale, low visual hierarchy).

- **Features (3 cards)**: Cloud Canvas capability section. Centered Edge Navy Rubik 700 45px/54px heading, Edge Navy Rubik 400 24px/38px supporting line. Two columns of White Surface Product Capability Cards around a central rabbit technician illustration, preserving generous empty blue space. Each card: White Surface, 10px radius, 18px 20px 18px 32px padding, shadow 0px 6px 40px rgba(0,0,0,0.04), compact colorful product illustration beside Edge Navy Rubik 700 20px/26px title and Edge Navy body copy.

- **How It Works (3 steps)**: On Cloud Canvas. Three evenly spaced step blocks with Edge Navy headings and body copy, using 15px standard content gaps and 32px section gap. Use Google Material Symbols for step icons.

- **Testimonials**: On Cloud Canvas or Ice Surface. Cards with White Surface, 10px radius, Edge Navy text, compact padding. Include rating display (Rubik 700 28px). Use Google Material Symbols for quote/star icons.

- **Pricing (3 tiers)**: Three pricing cards on Cloud Canvas. White Surface cards, 10px radius, shadow. Highlighted tier uses Launch Bay or Network Deep background with white text and Coral Launch CTA. Include feature lists with Google Material Symbols check icons.

- **FAQ**: Accordion-style on Cloud Canvas. Edge Navy headings, collapsible items with smooth CSS transitions. Use Google Material Symbols for expand/collapse icons.

- **Final CTA**: Network Deep (`#022e57`) 10px-radius promotion banner, 30px 32px padding. White Rubik 700 45px/58.5px left-aligned heading, Coral Launch conversion button, Signal Blue supporting note, right-aligned rocket illustration.

- **Footer**: Cloud Canvas base. Multi-column footer navigation. Edge Navy for branded links, Graphite for secondary text, thin `#e1f2ff` separators. Include secondary links.

- **Hiring Corner Widget**: Small white card anchored at lower-left viewport edge, 10px radius, compact padding, illustrated bunny character, Edge Navy 18px Rubik text, small Edge Navy close control.

## 7. Additional Constraints
- Page max-width: 1140px, centered.
- Section gap: 32px. Card padding: 30px. Element gap: 15px.
- Density: comfortable.
- Do not replace Cloud Canvas with pure white across an entire page.
- Do not use Coral Launch or Signal Orange as a universal status-color system.
- Do not render light-surface headings in black; use Edge Navy.
- Do not make feature cards square or pill-shaped; use 10px card radius.
- Do not apply heavy shadows beyond 0px 6px 40px rgba(0,0,0,0.04) to standard white cards.
- Do not use filled blue conversion buttons in place of Coral Launch gradient.
- Do not set public navigation links above 16px/19px or heavier than Rubik 400.
- All copy must be in English. Invent fictional brand/product names and content.
