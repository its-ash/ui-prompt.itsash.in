You are an expert front-end developer. Build a complete, production-quality landing page for a fictional B2B product brand (invent a fictional brand name, product, and copy — never use the real brand name "Getburnt", its logo, trademarks, or product names anywhere in the page). The visual style must follow the "Getburnt" editorial monochrome-on-warm-paper system described below. Deliver three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere. Use one consistent naming convention (BEM) across the entire deliverable.

## 1. CSS-First Architecture & Zero Inline CSS
- All styling lives in `style.css`. HTML must be clean, semantic, and agnostic of visual styling.
- Target all design properties via class or ID selectors only.
- Changing the look must require editing only `style.css`.

## 2. CSS Variables & Theme Tokens
Define all tokens in `:root` (and dark-mode overrides) using CSS variables:

Colors:
- `--color-ink: #1a1a17` (primary text, filled buttons, dark surfaces, heading strokes — warm near-black, never pure #000)
- `--color-paper: #ffffff` (page canvas, card surfaces, light sections, button borders on dark)
- `--color-ash: #5f5f5d` (secondary body text, helper text, muted borders, metadata)
- `--bg-primary: var(--color-paper)`
- `--bg-secondary: var(--color-paper)`
- `--text-primary: var(--color-ink)`
- `--text-secondary: var(--color-ash)`
- `--text-success` / `--text-error`: keep within the warm-monochrome palette (use ink/ash tints, no saturated green/red)
- `--border-default: var(--color-ash)`
- `--border-error` / `--border-success`: warm-monochrome tints only

Typography:
- `--font-nyght-serif`: "Fraunces", serif, weight 300 (substitute for Nyght Serif; Google Fonts)
- `--font-switzer`: "Inter", sans-serif (substitute for Switzer; Google Fonts)
- `--font-base: var(--font-switzer)`
- Type scale tokens: `--text-caption: 14px`, `--text-body: 16px`, `--text-subheading: 20px`, `--text-heading-sm: 26px`, `--text-heading: 48px`, `--text-heading-lg: 62px`, `--text-display: 72px`
- Line heights: body 1.5; display 1.0–1.2. Letter spacing: Switzer 0.03em uniform; Nyght Serif 0.01em at 62–72px, 0.03em at 26–48px.

Spacing & shapes:
- Base unit 8px. Spacing tokens: `--spacing-8: 8px`, `--spacing-16: 16px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-40: 40px`, `--spacing-48: 48px`, `--spacing-64: 64px`, `--spacing-96: 96px`, `--spacing-120: 120px`.
- `--radius-sm: 6px` (cards, mockups, rectangular surfaces)
- `--radius-md: 6px`
- `--radius-lg: 1440px` (buttons, tags, nav active states — full pill)
- `--shadow-sm` / `--shadow-md`: none/flat — the system avoids drop shadows; use hairline borders and surface contrast instead.
- `--spacing-gap: 8px`, `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`

Contrast pairing: light backgrounds pair with dark text; dark backgrounds (#1a1a17 panels) pair with light text (#ffffff). Enforce for every theme.

Light mode background: use `#fefefe` where a near-white is needed (not pure #ffffff for page canvas exceptions); page canvas may be #ffffff per spec.

## 3. Mandatory Dark Mode
- Provide dark-mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background and text variables switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed` and `aria-label`.

## 4. Flexbox Layout & Mobile-First
- All layout uses Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box: rows convert to columns on small viewports. No horizontal scrolling.
- Page max-width 1200px centered. Section gaps 48–64px. Card padding 24px. Element gap 8px.

## 5. Framework
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested. Utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

## 6. Typography & Icons
- Google Fonts mandatory: Fraunces (weights 300) for display/headings; Inter (400, 500, 600) for body/nav/buttons. Bind to `--font-nyght-serif` and `--font-switzer`.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 7. Component Specifications

Buttons (`.btn`, `.btn--primary`, `.btn--ghost`):
- Default: flex, align-items center, justify-content center, gap 0.5rem; min touch target 44x44px.
- Hover: brightness/shadow shift, cursor pointer.
- Focus: distinct focus ring via CSS variables.
- Active/pressed: transform scale(0.97).
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: opacity 0.5, greyscale, cursor not-allowed.
- Success/error: temporary feedback via `--text-success`/`--text-error`.
- Pill shape: 1440px radius. Primary: #1a1a17 bg, #ffffff text, 28px horizontal padding. Ghost: transparent bg, 1px border #1a1a17 (or #ffffff on dark), matching padding.

Cards (`.card`):
- Default: flex layout, subtle border, elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or translateY(-2px).
- Focus-within: highlight border when child link/button receives focus.
- Loading (skeleton): shimmer animation in CSS, no layout jumps.
- Empty state: Google Icon + guidance text.

Forms/Inputs:
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red-ish text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, and dedicated error feedback container.

Modals:
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via Esc or overlay click.

## 8. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 9. Landing Page Sections
Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

Style guidance (Getburnt editorial monochrome):
- Hero: 50/50 split — left column Nyght Serif weight 300 headline at 62–72px, color #1a1a17, letter-spacing 0.01em, line-height 1.0; Switzer 16px weight 400 subtext in #5f5f5d; pill CTA (#1a1a17 bg, #ffffff text, 1440px radius, 28px horizontal padding, Switzer 15px weight 500). Right column: full-bleed photograph with no border-radius (use a placeholder image URL).
- Features: 3-column workflow cards — white surface, 6px radius, 24px padding, 1px border #5f5f5d. Each: product mockup area on #1a1a17 dark panel at top; Switzer 14px weight 500 eyebrow label in #1a1a17 with 0.06em tracking; Nyght Serif 26px weight 300 heading; Switzer 16px weight 400 body in #5f5f5d.
- How It Works: 3 steps with icon bullets (16–18px monochrome, 1.5px stroke, #1a1a17), Switzer 20px weight 500 labels, Ash body text.
- Testimonials: cards on white surface, 6px radius, hairline border, Nyght Serif 26px quote, Switzer attribution.
- Pricing: 3 tiers, white cards, 6px radius, hairline border; one tier emphasized via #1a1a17 inverted surface with #ffffff text.
- FAQ: accordion-style, keyboard accessible, aria-expanded.
- Final CTA: centered Nyght Serif heading + pill button.
- Footer: secondary links, Switzer 14px, #5f5f5d text.

Do's: Nyght Serif weight 300 for all headings/display; keep #1a1a17/#ffffff/#5f5f5d triad; 1440px radius on buttons/tags/nav active; 0.03em tracking on Switzer; 6px radius on cards/mockups; product mockups on #1a1a17 dark panels; 48–64px section gaps.

Don'ts: no saturated brand colors; no Nyght Serif weights other than 300; no square/12px+ radii on buttons/tags; no pure #000000 text (use #1a1a17); no heavy drop shadows; no line-height above 1.2 on Nyght Serif display; no gradients on text/buttons/text containers.

Surfaces: Paper #ffffff (canvas), Ink Plate #1a1a17 (inverted panels). Elevation via hairline 1px borders in #5f5f5d, surface contrast, whitespace — no drop shadows.

Imagery: use placeholder image URLs (e.g., https://picsum.photos) for the hero photo and mockup areas. No icons beyond minimal 1.5px stroke monochrome marks (Google Material Symbols). No illustration system.

## 10. Deliverables
- `index.html`, `style.css`, `script.js`.
- BEM naming throughout.
- No lorem-ipsum-only submissions where real copy is implied; invent realistic fictional copy for all sections.
- Include a theme toggle (light/dark) with localStorage persistence.

## 11. Edit Mode
Not applicable (from-scratch build).

Output only the finished prompt. No preamble, no closing commentary. Mirror the numbered-header structure above. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause. All user-facing copy must be in English. All CSS variable names, class names, and file names in English/ASCII.
