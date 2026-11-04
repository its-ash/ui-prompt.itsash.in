# Landing Page Build Prompt — Uizard Theme (Fictional Brand)

## 1. Project Overview & Theme
Build a complete, production-ready landing page for a fictional AI design SaaS product. Do NOT use the real brand name "Uizard" or any of its trademarks, logos, or product names. Invent a fictional brand name and fictional product copy. The visual style must follow the "violet aurora over obsidian" aesthetic: near-black canvases, a single violet accent (#a881fe) as the charged brand color, achromatic UI, confident modern typography, architectural components with hairline borders, and a signature violet outer-glow on the primary CTA.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) across the entire deliverable.

## 2. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling.
- Use Tailwind CSS via `@layer` / `@apply` directives OR clean custom CSS. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 3. CSS Variables & Theme Tokens
Store all visual tokens in `:root` (and theme classes) using CSS variables. Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text.

Colors:
- `--color-violet-glow: #a881fe` (primary action fill, brand accent, hero glow origin, logo mark)
- `--color-deep-iris: linear-gradient(0deg, rgb(100,25,255), rgb(168,129,254))` (gradient deep stop)
- `--color-soft-lilac: linear-gradient(189.47deg, rgb(204,178,255) 4.76%, rgb(100,25,255) 92.85%)` (gradient highlight stop)
- `--color-signal-blue: #1e90ff` (blue action color for filled buttons, selected nav states, conversion moments)
- `--color-obsidian: #0b0b0b` (page canvas, card surface)
- `--color-void-black: #000000` (deepest surface tier, shadow base)
- `--color-graphite: #2e2e2e` (card/container borders)
- `--color-carbon: #212121` (secondary borders, subtle dividers)
- `--color-slate: #525252` (muted border accent)
- `--color-frost: #f5f5f5` (primary text on dark surfaces)
- `--color-pure-white: #ffffff` (headline text, input field fill, high-emphasis foreground)
- `--color-pewter: #aeaeae` (muted body text, secondary copy, metadata)

Theme aliases (map to the above):
- `--primary: var(--color-violet-glow)`
- `--secondary: var(--color-signal-blue)`
- `--bg-primary: var(--color-obsidian)`
- `--bg-secondary: var(--color-void-black)`
- `--text-primary: var(--color-frost)`
- `--text-secondary: var(--color-pewter)`
- `--text-success: #22c55e`
- `--text-error: #ef4444`
- `--border-default: var(--color-graphite)`
- `--border-error: var(--color-text-error)`
- `--border-success: var(--color-text-success)`

Border radius & shadows:
- `--radius-sm: 8px`
- `--radius-md: 12px`
- `--radius-lg: 16px`
- `--shadow-sm: 0 1px 2px rgba(0,0,0,0.3)`
- `--shadow-md: rgba(168, 129, 254, 0.64) 0px 2px 12px 0px, rgb(168, 129, 254) 0px 1px 1px 0px inset`
- `--shadow-xl: rgba(3, 3, 3, 0.12) 0px 12px 30px -4px`

Spacing & transitions:
- `--spacing-gap: 12px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

Elevation/stacking:
- `--z-dropdown: 100`
- `--z-modal: 200`
- `--z-toast: 300`

Typography tokens:
- `--font-base: 'Satoshi', 'Inter', sans-serif` (use Google Fonts: Inter as substitute for Satoshi; Clash Display as substitute for Clash Grotesk)
- `--font-display: 'Clash Display', 'Space Grotesk', sans-serif`

Type scale tokens:
- `--text-caption: 12px` (line-height 1.38, letter-spacing -0.3px)
- `--text-body-sm: 14px` (line-height 1.43, letter-spacing -0.154px)
- `--text-body: 16px` (line-height 1.4, letter-spacing -0.128px)
- `--text-subheading: 18px` (line-height 1.33, letter-spacing -0.126px)
- `--text-heading-sm: 20px` (line-height 1.29, letter-spacing -0.12px)
- `--text-heading: 24px` (line-height 1.25, letter-spacing -0.12px)
- `--text-heading-lg: 40px` (line-height 1.2, letter-spacing -1px)
- `--text-display: 72px` (line-height 1, letter-spacing -0.576px)

Spacing scale (base unit 4px):
- `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-12: 12px`, `--spacing-16: 16px`, `--spacing-20: 20px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-40: 40px`, `--spacing-48: 48px`, `--spacing-64: 64px`, `--spacing-120: 120px`

Layout tokens:
- `--page-max-width: 1200px`
- `--section-gap: 80px`
- `--card-padding: 24px`
- `--element-gap: 12px`

## 4. Mandatory Dark Mode Support
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` AND a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- User theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Require a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Flexbox Layout & Mobile-First Alignment
- Build all layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- All flex layouts must be mobile-responsive (rows convert to columns on small viewports). Prevent horizontal scrolling.

## 6. Typography & Icons (Google Fonts Mandatory)
- Include Google Font `<link>` tags for Inter (Satoshi substitute) and Clash Display (Clash Grotesk substitute), plus Google Material Symbols/Icons.
- Bind fonts to `--font-base` and `--font-display`.
- Forbid raw inline SVGs or local icon files; use Material Symbols for all icons.

## 7. Component Specifications

### 7.1 Button Component
Style all states via CSS classes:
- Default: Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- Hover: Visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: Distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: Disables interactions, prevents double-clicks, renders CSS spinner or animated Material Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: Temporary feedback styles driven by `--text-success` / `--text-error`.

Variants:
- Primary CTA (Violet): filled `#a881fe`, white text, Satoshi 16px/540, 12px radius, 12px 24px padding, signature outer glow shadow `rgba(168,129,254,0.64) 0px 2px 12px 0px, rgb(168,129,254) 0px 1px 1px 0px inset`. Use only for primary generation action.
- Secondary CTA (Blue): filled `#1e90ff`, white text, Satoshi 14px/540, 8px radius, 8px 16px padding. Use in nav bar for signup.
- Ghost Nav Link: transparent background, Frost text, Satoshi 14px/480, 8px horizontal padding. One nav item ('AI Design') carries a small violet sparkle icon.

### 7.2 Card Component
- Default: Flexible Flexbox layout, subtle borders and elevation using `--bg-secondary` and CSS variables.
- Hover: Elevation/shadow shift or subtle transform `translateY(-2px)`.
- Focus-within: Highlights card borders when child link/button receives focus.
- Loading (Skeleton): Shimmer animation styling defined in CSS to prevent layout jumps.
- Empty State: Structured fallback layout with Material Icon and clear guidance text.

Testimonial Card specifically: Obsidian fill, 1px Graphite border, 16px radius, 24px padding. Contains 40px circular avatar, handle in Satoshi 14px/560 Frost, body text in Satoshi 14px/400 Frost. Social platform icon (Twitter/Instagram) top-right in Pewter.

### 7.3 Form & Input Requirements
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, and dedicated error feedback container.

Generation Prompt Bar: white input field, 8px radius, ~56px height, Satoshi 16px/400 placeholder text in gray. Attached right-side violet Generate button (12px radius). Composite sits as a single rounded capsule — white-to-violet.

### 7.4 Modal / Popup Requirements
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: Centered flex container (`align-items: center`), backdrop overlay, Material Icon close button, keyboard focus trapping, close via Esc or overlay clicks.

## 8. Core UX & Micro-Interaction Rules
- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes. Never rely solely on color. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback: every click, hover, or submission triggers visible state change.
- Destructive actions: visually distinct `.btn-danger` in both light and dark themes.

## 9. Page Sections to Build
1. **Top Navigation Bar**: Obsidian background, ~64px height, 1200px max-width centered. Left: white logo wordmark with violet sparkle icon. Center: nav items in Satoshi 14px/480 Frost, 32px horizontal gap. Right: 'Sign up for free' button in Signal Blue, white text, Satoshi 14px/540, 8px radius, 8px 16px padding. No visible border bottom.

2. **Hero Section**: Full-width Obsidian canvas with large radial gradient bloom (rgb(204,178,255) → rgb(100,25,255) at 72.97% 270%) behind content. Centered 72px Clash Display headline (weight 540, letter-spacing -0.576px) in Pure White. 18px Satoshi 400 subhead in Pewter, max-width 600px. Below: 56px-tall prompt composite (white input, 8px radius, violet Generate button attached right with outer glow shadow).

3. **Trust Logo Strip**: Full-width horizontal band below hero. Company wordmarks in Frost at ~30% opacity, evenly distributed. Preceded by Satoshi 14px/400 caption "Trusted by individuals and teams at the world's boldest companies". Monochrome logos.

4. **Features (3 cards)**: 3-column grid of cards. Each card: Obsidian fill, 1px Graphite border, 16px radius, 24px padding. Title in Satoshi 20px/560 Frost, body in Satoshi 14px/400 Pewter. Include a Material Icon per card in Violet Glow. 12px element gaps.

5. **How It Works (3 steps)**: 3-column layout. Each step: numbered indicator (violet circle with white number), title in Satoshi 20px/560 Frost, description in Satoshi 14px/400 Pewter. 80px section gap above.

6. **Testimonials**: 3-column masonry grid of testimonial cards (varying heights). Use Testimonial Card spec. Generous gutters.

7. **Pricing (3 tiers)**: 3-column grid of pricing cards. Middle tier highlighted with violet border/glow. Each card: tier name (Satoshi 20px/560 Frost), price (Satoshi 40px/640 Frost), feature list (Satoshi 14px/400 Pewter with check icons), CTA button. 16px radius, 1px Graphite border.

8. **FAQ**: Accordion-style. Each item: question in Satoshi 16px/540 Frost, answer in Satoshi 14px/400 Pewter. Expand/collapse with CSS transitions. Use Material Icons for expand indicator.

9. **Final CTA**: Centered section. 40px Satoshi 560 Frost headline, 18px Pewter subhead, primary violet CTA button with glow. Obsidian canvas with subtle violet radial bloom.

10. **Footer**: Obsidian background. Logo left, link columns (Product, Company, Resources, Legal) in Satoshi 14px/400 Pewter. Bottom row: copyright in Satoshi 12px/400 Pewter. No border top — separates via canvas.

## 10. Do's and Don'ts
Do:
- Use #a881fe exclusively for primary generation action, sparkle icons, and hero glow origin.
- Apply violet outer-glow shadow only to primary CTA, never cards or inputs.
- Set card borders to exactly 1px #2e2e2e with 16px radius.
- Use 12px radius for buttons, 8px for inputs, 16px for cards, 9999px for pills.
- Keep body text at 16px/400 Satoshi in Frost on Obsidian; Pewter only for de-emphasized metadata.
- Reserve Clash Display for 72px hero headlines only; Satoshi carries everything below 40px.
- Maintain 80px vertical section gaps, 12px element gaps inside cards, 24px card padding.

Don't:
- Do not place #a881fe on anything other than primary action, sparkle icons, and hero glow origin.
- Do not use heavy drop shadows on cards.
- Do not apply light-theme colors (#ffffff fills, #f5f5f5 surfaces) — dark-first system; white appears only as text and inside generation prompt bar.
- Do not mix violet brand with Signal Blue on same surface — blue reserved for top-nav signup utility action.
- Do not set card radius below 16px or above 20px.
- Do not use Clash Display for subheadings, body, or UI labels.
- Do not introduce gradients on text or small UI elements — gradients live in hero bloom and logo mark only.

## 11. Imagery & Icons
- No photography, illustrations, or product screenshots in hero. The signature visual is the radial violet bloom (pure CSS gradient).
- Avatars in testimonials: small circular crops (40px).
- Company logos in trust strip: monochrome wordmarks in Frost at reduced opacity.
- Icons: minimal four-point sparkle in violet for AI indicators, small social platform glyphs in Pewter. Use Google Material Symbols exclusively.

## 12. Responsive & Accessibility
- Mobile-first. All sections stack vertically on small screens. Nav collapses to hamburger menu.
- Full keyboard operability. Focus rings visible. ARIA labels on all interactive elements.
- `prefers-reduced-motion` respected for all animations.
- Sufficient contrast: Frost (#f5f5f5) on Obsidian (#0b0b0b) = high contrast. Pewter (#aeaeae) on Obsidian = acceptable for secondary text.

## 13. File Structure & Naming
- `index.html` — semantic HTML5, no inline styles, no inline scripts beyond deferred entry point.
- `style.css` — all styles, CSS variables, responsive breakpoints.
- `script.js` — theme toggle (localStorage + prefers-color-scheme), mobile nav toggle, FAQ accordion, smooth scroll. No form validation logic unless explicitly requested.

## 14. Copy Requirements
- All user-facing copy must be in English.
- Invent a fictional brand name and fictional product copy. Do not use "Uizard" or any real brand names, logos, trademarks, or product names.
- No lorem-ipsum-only submissions; write realistic, compelling copy for all sections.

## 15. Exception Clause
If any requested style change cannot be achieved without adding markup (e.g., missing wrapper or icon element), stop and ask the user what they want instead of silently inserting new HTML. Do not introduce new HTML tags, components, or DOM nodes beyond what is specified above.
