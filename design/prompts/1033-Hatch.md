# Coding AI Prompt — Landing Page Build: "Hatch" Theme (Fictional Brand Required)

## 1. Project Overview & Brand Fictionalization

Build a complete, responsive landing page for a **fictional** creative-agency brand. Do NOT use the real brand name "Hatch", its logo, trademarks, or product names anywhere in the deliverable. Invent an original fictional brand name, product name, and all copy. The Hatch style reference below is to be used purely as a visual style guide — translate its palette, typography, spacing, and component vocabulary into the new fictional brand's identity.

Deliverable file structure: separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere in HTML. All styling lives in `style.css`.

## 2. CSS-First Architecture & Zero Inline CSS

- All design properties, layout rules, and states targeted via class or ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling so that changing the look requires editing only `style.css`.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.

## 3. CSS Variables & Theme Tokens

Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:

**Colors:**
- `--color-cream-paper: #f5f4f0` (page background/canvas)
- `--color-pure-white: #ffffff` (card/button surfaces)
- `--color-ink-black: #000000` (primary text, hairline borders, icon strokes)
- `--color-charcoal: #222222` (body text, secondary headings)
- `--color-slate: #333333` (nav text, subdued labels)
- `--color-fog: #dddfe2` (subtle link underlines, dividers)
- `--color-mint-splash: #99ffcc` (primary action fill, highlight swashes, active nav emphasis)
- `--color-plum-ink: #160042` (deep brand accent for dark surface text, illustration fills)
- `--color-aubergine: #26153f` (outlined action border, dark button outline variant)
- `--color-sky-pop: #7bbbff` (decorative illustration strokes, confetti dots, accent chips)
- `--color-bubblegum: #ff99cc` (decorative confetti dots, highlight swashes, playful accents)
- `--color-peach-pop: #ffcc99` (decorative dots, warm accent fills, illustration warm tones)

**Contrast pairing:** light backgrounds pair with dark text; dark backgrounds pair with light text — enforce for every theme, not just the default.

**Light mode background:** use `#f5f4f0` (cream paper), not pure white. Where a white/near-white is needed, use `#fefefe` instead of `#ffffff` for any near-white surface token.

**Border radius & shadows:**
- `--radius-sm: 4px`
- `--radius-md: 12px`
- `--radius-lg: 16px`
- `--radius-xl: 40px`
- `--radius-pill: 9999px`
- `--shadow-sm`, `--shadow-md` defined but set to `none` (Hatch avoids drop shadows entirely — depth comes from cream/white contrast + 1px borders only).

**Spacing & transitions:**
- `--spacing-gap: 24px`
- `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast` for stacking control.

**Typography tokens:**
- `--font-base` bound to Google Font "Inter" (substitute for Lota Grotes Que Alt).
- Recoleta substitute: Google Font "DM Serif Display" (weight 700 only) for all headlines/display.
- `--font-recoleta` → "DM Serif Display"
- `--font-lota` → "Inter"

**Type scale tokens:**
- `--text-caption: 14px` (line-height 1.5)
- `--text-body: 18px` (line-height 1.5)
- `--text-subheading: 24px` (line-height 1.3)
- `--text-heading-sm: 32px` (line-height 1.2, letter-spacing -0.9px)
- `--text-heading: 48px` (line-height 1.1, letter-spacing -1.34px)
- `--text-heading-lg: 64px` (line-height 1.1, letter-spacing -1.79px)
- `--text-display: 84px` (line-height 1.05, letter-spacing -2.35px)
- `--text-hero: 151px` (line-height 1.0, letter-spacing -4.23px)

## 4. Mandatory Dark Mode Support

- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` AND a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- User theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Require a visible toggle control with correct `aria-pressed`/`aria-label` state.
- In dark mode, maintain contrast pairing: dark backgrounds with light text. Adapt the cream canvas to a dark plum/ink surface (`#160042` or `#26153f`-adjacent) and white card surfaces to a dark elevated surface, keeping 1px borders.

## 5. Flexbox Layout & Mobile-First Alignment

- Build all layout structures using Flexbox (`display: flex`).
- Every flex container MUST default to `align-items: center` unless an explicitly justified exception exists.
- Mobile-responsive out of the box: convert rows to columns on smaller viewports. Prevent horizontal scrolling.
- Page max-width: 1200px, centered. Section gap: 96px. Card padding: 28-40px. Element gap: 24px.

## 6. Framework Default & Tailwind CSS Integration

Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives). All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons (Google Fonts Mandatory)

- Text: include Google Font `<link>` tags for "DM Serif Display" (700) and "Inter" (400, 700). Bind to `--font-recoleta` and `--font-base`/`--font-lota`.
- Icons: use Google Material Symbols/Icons. Explicitly forbid raw inline SVGs or local icon files.

## 8. Component Design Specifications

**Button Component:**
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles driven by `--text-success`/`--text-error`.

**Button variants (Hatch-specific):**
- Mint CTA (filled): bg `#99ffcc`, text `#000000`, 1px solid `#000000` border, 12px radius, padding 10px 16px, font Inter 700 18px.
- Outline (dark): transparent bg, 1px solid `#000000` border, 12px radius, padding 10px 16px, text `#000000` Inter 700.
- Pill Nav CTA: 9999px radius, bg `#99ffcc`, 1px solid `#000000` border, padding ~6px 16px, Inter 700.
- Always pair mint filled CTA with dark outline button as right-hand companion in button groups.

**Card Component:**
- Default: flexible flexbox layout, white `#ffffff` bg, 1px solid `#000000` border, 16px radius, padding 28-40px. No shadow.
- Hover: subtle transform `translateY(-2px)` (no shadow).
- Focus-within: highlight card border when child link/button receives focus.
- Loading (skeleton): shimmer animation in CSS, no layout jumps.
- Empty state: structured fallback with Google Icon + guidance text.

**Form & Input:**
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

**Modal/Popup:**
- States: opening, open, loading, success/error, closing (animated via CSS transitions).
- UX: centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 9. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility (a11y): sufficient contrast in both light and dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback: every click, hover, or submission triggers a visible state change.
- Destructive actions: `.btn-danger` visually distinct in both light and dark themes.

## 10. Hatch-Specific Visual Rules (Style Only)

- No box-shadow or drop-shadow on any element — depth from cream/white contrast + 1px borders only.
- No mint `#99ffcc` as card/large surface fill — reserve for buttons and highlight swashes.
- Only mint is a button color; sky/peach/pink are decorative only.
- Do not center-align body paragraphs longer than 3 lines — left-align at max-width 600px.
- Do not use Recoleta (DM Serif Display) below 24px — Lota (Inter) takes over at small sizes.
- Do not use pure `#000000` for large filled shapes/backgrounds — strokes, text, thin outlines only.
- Mint highlight swash: at most 1-2 keywords per headline. Irregular oval, ~8px horizontal padding per side, ~70% cap height, filled `#99ffcc`, no stroke, no shadow, slight rotation (-3° to 3°), sits behind text in z-order covering x-height/lower cap. Hand-drawn feel.
- Confetti dots: 6-12px filled circles in `#ff99cc`, `#7bbbff`, `#ffcc99`, `#99ffcc`, asymmetrically placed around headlines/illustrations, 4-8 per hero/section, varying size and color (no clustering).
- Cards: white bg, 1px solid black border, 16px radius, no shadow.
- Page bg: cream `#f5f4f0`.
- Body text: Inter 400 at 18px, line-height 1.5+.
- Headlines: DM Serif Display 700, tight negative tracking (-0.028em equivalent).
- Pastel accent rotation: mint = action only; sky/peach/pink cycle through decorative roles (confetti, illustration strokes, small accent chips). Rotate across the three non-action pastels for small elements.

## 11. Required Landing Page Sections

Build all of the following sections in order:

1. **Hero** — full-bleed cream canvas, large centered headline (DM Serif Display 700, 84-151px) with mint highlight swash behind 1-2 keywords, short paragraph below (Inter 400 18px, max-width 600px centered), two-button group (mint filled + dark outline) with 12px gap, scattered confetti dots, mascot character (blue speech bubble with pink headphones) in lower-left corner. Nav bar above: transparent/cream bg, fictional wordmark in DM Serif Display 700 24px left, center nav links Inter 400 14-18px with ~22px horizontal padding, mint pill CTA right. No sticky behavior, no mega-menu, no drop shadow.

2. **Features (3 cards)** — white cards, 1px black border, 16px radius, 32px padding, partner/icon centered, no shadow. Flex row converting to column on mobile.

3. **How It Works (3 steps)** — numbered steps with icon (Material Symbols), title (DM Serif Display), description (Inter). Flex layout, mobile-stacked.

4. **Testimonials** — quote cards, white bg, 1px black border, 16px radius, no shadow. Include avatar placeholder via Google Icon (no photos).

5. **Pricing (3 tiers)** — three cards, middle tier emphasized with mint accent border or mint highlight. Feature lists, price, CTA button per tier. Flex row → column on mobile.

6. **FAQ** — accordion-style, keyboard accessible, aria-expanded, smooth CSS transitions. No JS-driven validation logic beyond toggle.

7. **Final CTA** — centered headline with mint swash, short copy, mint filled CTA + outline companion.

8. **Footer** — secondary links, fictional brand wordmark, minimal. Flex layout, mobile-stacked.

## 12. Deliverable & Output Format

- File structure: `index.html`, `style.css`, `script.js`.
- Naming: BEM convention throughout.
- No unrequested placeholders: use real invented copy/labels for all sections; placeholders only where content genuinely unspecified.
- No lorem-ipsum-only submissions.

## 13. Edit Mode — Not Applicable

This is a from-scratch build; Edit Mode rules do not apply. However, if any requested style change cannot be achieved without adding markup, stop and ask rather than silently inserting new HTML.

## 14. Language Rule

All user-facing copy must be written in English. All CSS variable names, class names, and file names in English/ASCII.

## 15. Output Instruction

Output only the finished coding-AI prompt itself. No preamble, no closing commentary. Mirror the numbered-header structure above. If any user request conflicts with a mandatory rule, keep the mandatory rule and add a one-line explicit exception clause rather than silently dropping the rule.
