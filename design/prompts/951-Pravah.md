# Coding-AI Prompt: Complete Landing Page — "Pravah" Style Theme

## 1. Project Overview
Build a complete, responsive landing page for a fictional product/brand. **Invent a fictional brand name, product name, and all copy.** Never use the real brand name "Pravah", its logo, trademarks, or product names anywhere in the deliverable. The visual style must faithfully reuse the "Pravah" design language described below (warm parchment canvas, aubergine-black inversion sections, ABCfavorit-style single-family grotesque, pointillist/technical aesthetic) while all naming, headings, and body copy are original and fictional.

Deliverables: separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions. No lorem-ipsum-only submissions; use realistic fictional copy for all supplied sections.

## 2. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. **No inline CSS** (`style="..."` forbidden).
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

## 3. CSS Variables & Theme Tokens
Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:

Colors (light theme — Pravah palette):
- `--color-parchment: #f3f1ed` (primary page canvas; do not default to pure white)
- `--color-pure-white: #fefefe` (card surfaces, badge fills, inset panels — use `#fefefe` where near-white is needed)
- `--color-ink-black: #181011` (primary text, default borders, nav strokes, structural outlines)
- `--color-charcoal: #222222` (secondary headings, heavier text)
- `--color-aubergine-black: #302023` (full-bleed dark-section backgrounds only)
- `--color-ash: #aaaaaa` (muted text, inactive states, lighter borders)
- `--color-dim: #666666` (captions, timestamps, tertiary metadata)
- `--color-bone: #d8d4d4` (hairline borders, illustration fills, low-emphasis dividers)

Map these to the standard semantic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Enforce contrast pairing: any light background token pairs with a dark text token, and any dark background token pairs with a light text token, for every theme.

Border radius & shadows: `--radius-sm: 4px`, `--radius-md: 4px`, `--radius-lg: 4px`, `--radius-pill: 100px`, `--shadow-sm`, `--shadow-md` (shadows used only for glass notification cards; otherwise depth via tone shifts and 1px borders). Spacing & transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`. Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

Typography tokens: `--font-base` bound to a neutral geometric grotesque (Inter via Google Fonts as the substitute for ABCfavorit Book; load via `<link>`/`@import`). Type scale tokens: `--text-caption: 12px`, `--text-body-sm: 14px`, `--text-body-lg: 17px`, `--text-subheading: 20px`, `--text-heading-sm: 28px`, `--text-heading: 32px`, `--text-heading-lg: 40px`, `--text-display: 48px`. Enable OpenType features `"ss04" on, "ss11" on` globally on all text instances.

Spacing scale (base unit 8px): `--spacing-8: 8px`, `--spacing-16: 16px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-48: 48px`, `--spacing-64: 64px`, `--spacing-80: 80px`, `--spacing-96: 96px`, `--spacing-112: 112px`, `--spacing-160: 160px`. Page max-width: 1200px. Section gap: 64px. Card padding: 24px. Element gap: 8px.

## 4. Mandatory Dark Mode Support
Dark Mode must always be defined. Provide dark-mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector. Theme switching must be seamless without HTML restructuring. Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Require a visible toggle control with correct `aria-pressed`/`aria-label` state. In dark mode, invert the parchment canvas to a deep warm dark (e.g. `#1a1614`) and lift text to light tones, keeping the aubergine-black sections as the lightest dark band; maintain contrast pairing for every token.

## 5. Flexbox Layout & Mobile-First Alignment
Build all layouts with Flexbox. Every flex container must default to `align-items: center` unless an explicitly justified exception. All flex layouts must be mobile-responsive out of the box (rows convert to columns on small viewports). Prevent horizontal scrolling. Page max-width 1200px centered container.

## 6. Framework Default & Tailwind CSS Integration
Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons (Google Fonts Mandatory)
Strictly use Google Fonts for both text and icons. Text: include Google Font `<link>`/`@import` (Inter) and bind to `--font-base`. Icons: use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 8. Component Design Specifications

### 8.1 Button Component
Style all states via CSS classes:
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`), min touch target 44x44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables (`outline`/`box-shadow`) for keyboard navigation.
- Active/Pressed: click transform feedback (`transform: scale(0.97)`).
- Loading: disables interactions, prevents double-clicks, renders a CSS spinner or animated Google Icon without distorting button dimensions.
- Disabled: reduced opacity (`opacity: 0.5`), greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback state styles driven by `--text-success`/`--text-error`.

Provide two button variants per the Pravah style:
- Pill CTA Button: fully rounded (100px radius) ghost button — Ink Black 1px border on transparent fill, 400 weight at 15px, Ink Black text, padding 8px 20px. No fill state — always outlined.
- Square Outlined Button: 4px radius, Ink Black 1px border, 4px 16px padding, 400 weight at 14-15px.

### 8.2 Card Component
Include (if interactive):
- Default: flexible Flexbox layout, styled with subtle borders and elevation using `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- Focus-within: highlights card borders when a child link/button receives focus.
- Loading (Skeleton): shimmer animation styling defined in CSS to prevent layout jumps.
- Empty State: structured fallback layout featuring a Google Icon and clear guidance text.

Feature cards: white fill, 4px radius, 1px Bone border, 24px padding. Alert/status card: white fill, 4px radius, 1px Bone border, 16px padding, max-width 280px, with uppercase label badge (2px 8px padding, 400 12px Ink Black, 0.10em letter-spacing, 4px radius), alert title at 14px 700 Ink Black, explanation at 12px 400 Ash.

### 8.3 Form & Input Requirements
Account for states: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: flex container wrapping label, input field, and dedicated error feedback container. 4px radius on inputs.

### 8.4 Modal / Popup Requirements
Account for states: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions). UX features: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, support for closing via `Esc` or overlay clicks.

## 9. Core UX & Micro-Interaction Rules
- Responsive by default: fluid sizing and responsive breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility (a11y): sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- Mandatory visual feedback: every user click, hover, or submission must trigger a visible state change.
- Destructive actions: generic `.btn-danger` or delete actions must be visually distinct in both light and dark themes.

## 10. Page Sections to Build
Build the following sections in order, with fictional copy:

1. **Top Navigation Bar**: Parchment background, no fill, 1px Bone bottom border, 64px total height. Left: small diamond icon (8px) + fictional brand name at 15px 400 Ink Black. Center: nav links (e.g., Problem, Technology, Team) at 14px 400 Ink Black, 12px gap. Right: outlined pill button (100px radius, 1px Ink Black border, 8px 20px padding, "Get In Touch" at 15px). Include the theme toggle control.

2. **Hero**: two-column split — left 45% text on Parchment, right 55% full-bleed dark image. Left column: intro line at 28-32px 400 in Ash (e.g., "The grid is at its limits."), main headline at 40-48px 400 in Ink Black with -0.02em letter-spacing, then outlined pill button "Get In Touch". Right column: full-bleed dark image of power infrastructure rendered as a white dot-matrix pattern on Aubergine Black background, with two glass notification cards overlaid (semi-transparent white, 4px radius, backdrop blur, 12px padding, 700 14px alert titles). Glass notification card shadow: `0 4px 20px rgba(0,0,0,0.15), backdrop-filter: blur(8px)`.

3. **Features (3 cards)**: Parchment background, 64px section padding. Three equal cards in a row (stack on mobile). Each card: white fill, 4px radius, 1px Bone border, 24px padding. Diamond grid icon (3×3 or 4×4 grid of 8-10px diamonds in Ash) as visual marker, heading at 20px 700 Ink Black, body at 14-15px 400 Charcoal. Uppercase section label badge above ("FEATURES").

4. **How It Works (3 steps)**: Parchment background. Three steps in a row, each with a numbered indicator (diamond grid icon or simple numeral), heading at 20px 700, body at 14-15px 400. Separated by 1px Bone dividers or generous gaps.

5. **Testimonials**: Parchment background. 2-3 testimonial cards (white fill, 4px radius, 1px Bone border, 24px padding) with quote text at 15px 400 Charcoal, author name at 14px 700 Ink Black, role at 12px 400 Ash.

6. **Pricing (3 tiers)**: Parchment background. Three pricing cards in a row. Middle tier visually emphasized (e.g., Ink Black 1px border thicker or Aubergine Black header band — but Aubergine Black only for full-bleed sections; use a subtle tonal shift instead). Each card: white fill, 4px radius, 1px Bone border, 24px padding. Tier name at 14px 700 uppercase tracked, price at 40px 400 Ink Black, feature list at 14px 400, CTA button (pill or square outlined).

7. **FAQ**: Parchment background. Accordion-style items with question at 17px 700 Ink Black and answer at 15px 400 Charcoal. 1px Bone dividers between items. Expand/collapse via CSS + minimal JS (no new HTML elements beyond existing structure).

8. **Final CTA**: Full-bleed Aubergine Black (#302023) section (the single inversion band). White heading at 40px 400, Ash body at 15px 400, outlined pill button (white border/text variant) centered.

9. **Footer**: Parchment background, 1px Bone top border. Multi-column layout with fictional brand name, secondary links (Problem, Technology, Team, Privacy, Terms), copyright at 12px 400 Ash. All links at 14px 400 Ink Black.

## 11. Pravah Style Rules to Enforce
- Use ABCfavorit-style single-family grotesque (Inter substitute) at weight 400 for all body and most display text; 700 reserved for emphasis lines, nav, and specific heading accents — never decorative.
- Letter-spacing: -0.02em on all text 28px and above; 0.10em on all uppercase labels and badges 12px or smaller.
- Enable font features 'ss04' and 'ss11' globally.
- Parchment canvas for all default page backgrounds; reserve Aubergine Black for full-bleed section inversions only (at most one per page — the Final CTA).
- 4px radius on all cards, badges, inputs; 100px radius (pill) only on primary CTAs.
- Uppercase tracked label pattern (12px, 0.10em, 2px 8px padding, 4px radius) for all section classifications and status tags.
- Separate list items in dark sections with 1px Ink Black dividers at 30% opacity, not extra vertical padding.
- No chromatic accent colors — entire palette warm-neutral; no blue/green/red.
- No shadows for card/button elevation — depth from surface tone shifts and 1px borders only (exception: glass notification card shadow).
- No multiple font families — single grotesque; hierarchy via weight and size alone.
- No 700 weight for body text or long-form copy.
- No Aubergine Black for inline elements or small components.
- No gradients on text, buttons, or backgrounds — flat, printed feel.
- No rounded corners above 8px on cards/containers — only pill CTA gets 100px.

## 12. Do Not Use Real Brand Assets
Invent a fictional brand name, product, and copy. Never use "Pravah", its logo, trademarks, or product names. Diamond grid icons and wireframe illustrations may be recreated as CSS/SVG-free (use CSS borders/divs or Material Symbols) — no raw inline SVGs; prefer CSS-drawn shapes or Material Symbols icons.

## 13. Output
Output only the finished prompt itself. No preamble, no closing commentary. Mirror the structure above with numbered headers and bolded sub-rules. Ensure all copy guidance, keywords, section names, and descriptions are in English. All CSS variable names, class names, and file names in English/ASCII. User-facing copy must be in English.
