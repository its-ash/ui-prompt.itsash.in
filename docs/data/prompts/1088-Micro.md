# Coding AI Prompt — Micro Landing Page Build

Build a complete, production-grade landing page for a fictional productivity brand (invent a new brand name, product name, and all copy — never use the real brand "Micro" or any of its trademarks). Deliver three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) across the entire deliverable.

## 1. Architecture Rules (Mandatory)

- **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. Forbid `style="..."` attributes. Target via class/ID selectors only. Keep HTML semantic and styling-agnostic.
- **CSS Variables & Theme Tokens:** Define all visual tokens in `:root` using the Micro token set below. Enforce contrast pairing for every theme.
- **Mandatory Dark Mode:** Provide dark-mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label`.
- **Flexbox Layout & Mobile-First:** Use Flexbox for all layout structures. Every flex container defaults to `align-items: center` unless explicitly justified. Mobile-responsive out of the box; convert rows to columns on small viewports; prevent horizontal scrolling.
- **Framework:** Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Use Google Fonts for text (Inter as the haffer substitute; Playfair Display 900 as the perfectlyNineties substitute) and Google Material Symbols/Icons for all icons. Forbid raw inline SVGs or local icon files.

## 2. Design Tokens (Micro Theme)

Define these in `:root`:

**Colors:**
- `--color-ink-black: #221f1c` (primary text, dark CTA backgrounds)
- `--color-paper-white: #f5f5f5` (page canvas, card backgrounds)
- `--color-pure-white: #ffffff` (elevated product card surfaces)
- `--color-stone-gray: #797267` (secondary text, icon strokes)
- `--color-pebble: #8c8a88` (tertiary text, disabled)
- `--color-slate-edge: #27272a` (hairline borders)
- `--color-azure-action: linear-gradient(to right in oklab, rgb(81, 139, 219) 0%, rgb(54, 186, 184) 100%)` (primary action gradient)
- `--color-teal-pulse: #36bab8` (teal text accent for links/tags)
- `--color-mint-wash: #cbfbf1` (pastel surface tint)
- `--color-peach-wash: #f8ebd8` (pastel surface tint)
- `--color-lavender-wash: #ede9fe` (pastel surface tint)
- `--color-teal-mist: #cff2ef` (pastel surface tint)
- `--color-coral-marker: #ed6d68` (icon accent)
- `--color-amber-marker: #e5a057` (icon accent)
- `--color-orchid-marker: #bf89cd` (icon accent)
- `--color-forest-edge: #1a3a12` (dark green border for mockup)
- `--color-signal-green: #3a6b2a` (supporting accent)
- `--color-live-lime: #7efa55` (supporting accent)

**Mapped theme tokens (required by architecture):**
- `--primary: #518bdb`, `--secondary: #36bab8`
- `--bg-primary: #f5f5f5`, `--bg-secondary: #ffffff`
- `--text-primary: #221f1c`, `--text-secondary: #797267`
- `--text-success: #3a6b2a`, `--text-error: #ed6d68`
- `--border-default: rgba(0,0,0,0.065)`, `--border-error: #ed6d68`, `--border-success: #3a6b2a`
- `--radius-sm: 8px`, `--radius-md: 14px`, `--radius-lg: 18px`
- `--shadow-sm: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)`
- `--shadow-md: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`
- `--spacing-gap: 8px`, `--transition-fast: 150ms ease`, `--transition-normal: 300ms ease`, `--ease-standard: cubic-bezier(0.4,0,0.2,1)`
- `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`
- `--font-base: 'Inter', sans-serif` (haffer substitute); display font: `'Playfair Display', serif` at weight 900 (perfectlyNineties substitute)

**Spacing:** base unit 4px; use the provided spacing scale tokens (`--spacing-4` through `--spacing-240`).

**Shadows:** use the provided shadow tokens (`--shadow-subtle`, `--shadow-md`, `--shadow-xl`, etc.).

**Elevation:** default card `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)`; bordered card adds `0 0 0 1px oklab(0.24 0.003 0.007 / 0.065)`; elevated mockup `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`; pressed button `inset 0 -2px 0 0 rgba(0,0,0,0.2)`.

## 3. Typography Scale

- Eyebrow: 10px, line-height 1.4, letter-spacing 1px
- Caption: 12px, line-height 1.4
- Body-sm: 14px, line-height 1.5
- Body: 16px, line-height 1.5
- Subheading: 18px, line-height 1.5
- Heading-sm: 24px, line-height 1.4, letter-spacing -0.6px
- Heading: 30px, line-height 1.25, letter-spacing 0.6px
- Heading-lg: 48px, line-height 1.2, letter-spacing 0.96px
- Display: 72px, line-height 1, letter-spacing 1.44px
- Hero-mark: 96px, line-height 1, letter-spacing -2.4px

Display headlines (hero, section H1s) use the display font at 700 weight with 0.02em positive tracking. Body and product UI use the base font.

## 4. Component Requirements

**Buttons:** Dark Filled (Ink Black bg, white text, 8px radius, 10px 16px padding, haffer 500 14px), White Filled (white bg, Ink Black text, same shape), Ghost Text (transparent bg, Ink Black text, 8px radius, 8px 12px padding). All must implement Default, Hover, Focus, Active/Pressed (scale 0.97), Loading (CSS spinner, no dimension change), Disabled (opacity 0.5, greyscale, not-allowed cursor), Success/Error states. Minimum 44x44px touch target. Flex layout with `align-items: center`, `justify-content: center`, `gap: 0.5rem`.

**Cards:** Product Card (white bg, 1px border rgba(0,0,0,0.065), 14px radius, 12px 16px padding), Context Graph Node (white bg, 18px radius, 16px padding, 2-3px accent border in marker color), Soft Pastel Feature Block (pastel wash bg, 18px radius, 32px padding, no border/shadow). Include Hover (translateY -2px), Focus-within, Loading (skeleton shimmer), Empty State (Google Icon + guidance text).

**Forms/Inputs:** Search/Prompt Input (white bg, 1px border rgba(0,0,0,0.1), 8px radius, 10px 14px padding, placeholder in pebble, focus 2px ring in azure action, leading icon in stone gray). Implement Empty, Focused, Filled, Valid, Invalid, Disabled, Read-only states. Flex container wrapping label, input, error feedback.

**Modal/Popup:** Opening, Open, Loading, Success/Error, Closing states (CSS transitions). Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

**Pill Nav Tab:** Transparent bg, Ink Black text, haffer 500 14px, trailing 6px chevron in stone gray, 6px 12px padding, 8px radius. Active: paper-white fill.

**Sidebar Nav Item:** Transparent bg, 20px row height, 12px horizontal padding, 8px radius, haffer 400 14px Ink Black. Active: paper-white fill, haffer 500. Leading 16px icon in stone gray (active: Ink Black).

**Badge/Tag:** Transparent or paper-white bg, Ink Black text, 9999px radius, 4px 10px padding, haffer 500 12px. Colored status: marker color at 0.15 opacity bg, full opacity text. No border.

**Section Eyebrow Pill:** White bg at 0.9 opacity, 9999px radius, 4px 12px padding, haffer 500 12px Ink Black, optional leading icon 12px.

**Floating Audio Player:** White bg, 14px radius, shadow-md, 8px 12px padding, 280-320px wide. 40px album art, track title haffer 600 12px Ink Black, artist haffer 400 10px stone gray, transport controls in stone gray with play in Ink Black.

**Hero Product Mockup Container:** No card chrome; edge-to-edge, subtle shadow-md, 18px radius, 1px Forest Edge border.

## 5. Page Sections

Build these sections in order:
1. **Hero:** Full-bleed blue-to-teal gradient (linear-gradient to right, #518bdb → #36bab8). Centered eyebrow pill, centered display headline (perfectlyNineties substitute, 72px, white, 1.44px tracking, line-height 1.0), centered subhead (haffer 400 18px, white at 0.9 opacity), button pair (Dark Filled "Sign up" + White Filled "Talk to sales", 32px gap), floating product mockup overlapping the horizon line with Forest Edge border.
2. **Features:** 3 soft pastel feature blocks (rotate through mint, peach, lavender, teal-mist washes), 18px radius, 32px padding. Headline haffer 600 20-24px Ink Black, body haffer 400 14px stone gray.
3. **How It Works:** 3 steps with numbered indicators, left-aligned text, product UI screenshots as floating cards.
4. **Testimonials:** Card-based quotes with avatar, name, role.
5. **Pricing:** 3 tiers (Starter, Pro, Enterprise) as product cards with feature lists and CTA buttons.
6. **FAQ:** Accordion-style questions with expand/collapse.
7. **Final CTA:** Centered headline + button on paper-white canvas.
8. **Footer:** Secondary links, logo, copyright.

## 6. Core UX & Micro-Interactions

- Responsive by default; fluid sizing; no horizontal overflow.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 7. Do's and Don'ts (Micro Specific)

- Use the blue→teal gradient only on the hero.
- Set hero/section display headlines in the display font at 30-72px with 0.02em positive tracking.
- Set body and product UI in the base font.
- Use 8px radius for buttons/inputs/nav; 14px for product rows; 18px for feature blocks/graph nodes.
- Keep product surfaces #ffffff with 1px border and subtle two-layer shadow.
- Reach for pastel washes for marketing feature blocks; let canvas stay #f5f5f5.
- Color icons categorically with Teal Pulse, Coral Marker, Amber Marker, Orchid Marker, Azure Action — never monochrome the icon set.
- Do not apply gradient sky beyond hero.
- Do not use display font for body/buttons/nav/product UI.
- Do not skip 1px border on product cards.
- Do not use 4px radius on feature cards.
- Do not introduce new chromatic accents beyond the named marker palette.
- Do not center body copy in product UI — left-align data; only hero headline and section H1s centered.
- Do not use pure black #000000 for text — use #221f1c.

## 8. Deliverables

- `index.html`: semantic HTML5, no inline styles, deferred script reference.
- `style.css`: all tokens, components, dark mode, responsive breakpoints.
- `script.js`: theme toggle with localStorage, FAQ accordion, modal logic, loading states.

Invent a fictional brand name, product name, and all copy. Never use "Micro" or any real brand trademarks. All user-facing copy in English.
