# Coding AI Prompt — Build a Complete Landing Page (Sparkles Theme)

## 1. Project Overview
Build a complete, responsive landing page for a **fictional** brand/product of your own invention. Do NOT use the real brand name "Sparkles", its logo, trademarks, or product names anywhere in the page. Invent a fictional brand name, product, and all copy. The visual style must follow the "Sparkles" design system described below.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.

## 2. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling so that changing the look requires modifying only CSS.

## 3. CSS Variables & Theme Tokens
Store all visual tokens inside `:root` (and theme classes) using CSS variables. Required tokens:

Colors:
- `--color-ink-black: #0a0a0a`
- `--color-zinc-ink: #18181b`
- `--color-slate-700: #27272a`
- `--color-slate-600: #3f3f46`
- `--color-slate-500: #52525c`
- `--color-zinc-500: #71717b`
- `--color-zinc-300: #d4d4d8`
- `--color-zinc-200: #e5e5e5`
- `--color-zinc-100: #f4f4f5`
- `--color-paper-white: #fafafa`
- `--color-pure-white: #ffffff`
- `--color-footer-green: #54b16c`

Typography:
- `--font-gelica` (substitute: Lora or Source Serif Pro via Google Fonts)
- `--font-articulat-cf` (substitute: Inter via Google Fonts)

Type scale tokens:
- `--text-caption: 12px` (line-height 1.5, letter-spacing 3.36px)
- `--text-body-sm: 14px` (line-height 1.56, letter-spacing 3.92px)
- `--text-body: 16px` (line-height 1.6, letter-spacing 4.48px)
- `--text-subheading: 18px` (line-height 1.5, letter-spacing 5.04px)
- `--text-heading-sm: 20px` (line-height 1.4, letter-spacing 5.6px)
- `--text-heading: 36px` (line-height 1.11)
- `--text-heading-lg: 48px` (line-height 1.11)
- `--text-display: 60px` (line-height 1.0)

Spacing:
- `--spacing-8: 8px`, `--spacing-16: 16px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-40: 40px`, `--spacing-48: 48px`, `--spacing-64: 64px`, `--spacing-112: 112px`, `--spacing-128: 128px`

Radius & shadows:
- `--radius-sm: 10px`, `--radius-md: 10px`, `--radius-lg: 14px`
- `--shadow-subtle: rgba(0,0,0,0.05) 0px 1px 2px 0px`

Transitions:
- `--transition-fast`, `--transition-normal`, `--ease-standard`

Elevation/stacking:
- `--z-dropdown`, `--z-modal`, `--z-toast`

Contrast pairing: any light background token must pair with a dark text token, and any dark background token must pair with a light text token — enforce this pairing for every theme, not just the default.

Light mode background: do not default to pure white; use `#fefefe` where a near-white is needed for the page canvas token override (note: the Sparkles spec uses `#ffffff` as canvas; keep `#ffffff` for canvas per spec but use `#fefefe` only where the meta-rule demands a near-white fallback).

## 4. Mandatory Dark Mode Support
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Flexbox Layout & Mobile-First Alignment
- Build layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- All flex layouts must be mobile-responsive out of the box (rows convert to columns on smaller viewports). Prevent horizontal scrolling.

## 6. Framework
Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons (Google Fonts Mandatory)
- Include Google Font `<link>` or `@import` tags for text (Lora or Source Serif Pro for Gelica substitute; Inter for Articulat CF substitute) and bind them to `--font-gelica` and `--font-articulat-cf`.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 8. Component Design Specifications

### Button
- Default: Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- Hover: visual shift with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles driven by success/error tokens.

Filled Ink Button: background `#18181b`, text `#ffffff`, font Articulat CF 16px/500, 10px radius, 10px vertical / 20px horizontal padding. Optional subtle shadow `0 1px 2px rgba(0,0,0,0.05)`.

Ghost/Outlined Button: transparent background, 1px border in `#3f3f46` or `#e5e5e5`, text `#18181b`, same radius and padding.

### Card
- Default: flexible Flexbox layout, subtle borders and elevation using `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or subtle transform `transform: translateY(-2px)`.
- Focus-within: highlights card borders when a child link/button receives focus.
- Loading (Skeleton): shimmer animation styling in CSS to prevent layout jumps.
- Empty State: structured fallback layout with Google Icon and clear guidance text.

Content Card: white (`#ffffff`) or `#fafafa` background, 1px `#e5e5e5` (or `#d4d4d8`) border, 10-14px radius, 24-40px padding. No drop shadow.

### Form & Input
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, and dedicated error feedback container.

Text Input: white or `#27272a` background, 1px border in `#3f3f46` or `#e5e5e5`, 10px radius, Articulat CF 16px text. Focus state darkens border toward `#18181b`.

### Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX Features: Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, support for closing via `Esc` or overlay clicks.

## 9. Core UX & Micro-Interaction Rules
- Responsive by default: fluid sizing and responsive breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility (a11y): sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback: every user click, hover, or submission triggers a visible state change.
- Destructive actions: generic `.btn-danger` or delete actions visually distinct in both light and dark themes.

## 10. Landing Page Sections to Build
1. **Hero**: Centered text stack (badge → serif headline → sans subhead → filled button) flanked by large mascot illustrations (use CSS-drawn geometric shapes with faces as decorative elements, since illustration assets are not provided). Badge: "Backed-by" style pill. Headline: Gelica 600 at 48-60px, line-height 1.0-1.11, color `#0a0a0a`. Subhead: Articulat CF 16-18px/400 in `#52525c`, often parenthesized.
2. **Features**: 3 outlined content cards in a row (stack on mobile). Each: white background, 1px `#e5e5e5` border, 14px radius, 32px padding. Heading in Gelica 600 at 24px in `#0a0a0a`. Body in Articulat CF 16px/400 in `#52525c`. No drop shadow.
3. **How It Works**: 3 steps. Each step: number label, title (Gelica 600), description (Articulat CF). Flex layout, responsive.
4. **Testimonials**: 2-3 testimonial cards (outlined, flat). Quote text, author name, role.
5. **Pricing**: 3 tiers. Cards with outlined style. Highlight one tier with `#18181b` filled button. Use `#f4f4f5` tint for the highlighted card surface.
6. **FAQ**: Accordion-style (CSS + minimal JS for toggle). Questions in Articulat CF 500, answers in Articulat CF 400. Use `aria-expanded`.
7. **Final CTA**: Centered serif headline + filled button on white canvas. Optional soft `#fafafa` section tint.
8. **Footer**: Full-width `#54b16c` band, white text in Articulat CF 16px/400, centered, 80px vertical padding. Secondary links in white. The sole chromatic UI moment.

## 11. Top Navigation Bar
White background, 1px `#e5e5e5` bottom border, 32px vertical padding. Wordmark (fictional brand name) on left in Gelica 600 20px `#0a0a0a`. Centered nav links in Articulat CF 14px/500 `#18181b` with 32px gap. Filled button on right: `#18181b` background, `#ffffff` text, 10px radius. Include theme toggle.

## 12. Backed-by Badge Pill
`#fafafa` background, 1px `#e5e5e5` border, 10px radius, 8px 16px padding. Label in Articulat CF 12px/500 in `#52525c`. Partner name in Articulat CF 12px/600 in `#0a0a0a` with 0.28em letter-spacing. Use a Google Material Icon as the partner mark (not a real logo).

## 13. Design Rules (Do's and Don'ts)
Do:
- Use `#18181b` as universal ink for headlines, nav text, icons, and the only filled button.
- Apply Articulat CF's 0.28em letter-spacing on small labels, badge copy, and uppercase meta text only.
- Reach for `#e5e5e5` hairlines and 10px radii on every container; cards and inputs outlined and flat.
- Reserve Gelica 600 for true heading moments at 36px or larger with line-height ≤1.11.
- Use `#54b16c` only in the footer band.
- Build page rhythm as serif headline + sans subhead + flat outlined cards.

Don't:
- Don't introduce additional brand or accent colors beyond `#54b16c`.
- Don't use drop shadows beyond the single `rgba(0,0,0,0.05) 0 1px 2px` instance on buttons.
- Don't use Gelica below 36px.
- Don't set Articulat CF body text with 0.28em letter-spacing.
- Don't use `#71717b` or `#52525c` for body headlines.
- Don't round corners above 14px or below 10px on functional elements.
- Don't use gradient fills, glow effects, or color-tinted shadows.

## 14. Page Layout
Centered, max-width ~1200px editorial layout. Section gaps 64-80px. Alternating soft `#f4f4f5` or `#fafafa` band tints on sections. Mobile-first responsive. Prevent horizontal overflow.

## 15. Copy Locale
Write all user-facing copy in English.

## 16. Output
Output only the finished code files. No preamble or closing commentary. Ensure all CSS variables, class names, and file names are in English/ASCII. Respect `prefers-reduced-motion`. Include skip-to-content link and proper ARIA attributes.
