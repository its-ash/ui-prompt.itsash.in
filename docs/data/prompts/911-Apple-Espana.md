You are an expert front-end engineer. Build a complete, production-ready Landing Page using the following style system and requirements. Output three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`). Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) with all utility classes mapping back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`). Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.

**BRAND/IP RULE (MANDATORY):** The source style references a real brand. You must NOT use that brand's name, logo, trademarks, or product names anywhere in the page. Invent a fictional brand name, fictional product name, and fictional copy. The visual style (colors, typography, spacing, layout rhythm) is the only thing to reuse.

---

## 1. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`.
- Forbid `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling so that changing the look requires modifying only CSS.

## 2. CSS Variables & Theme Tokens (`:root`)
Define all visual tokens in `:root` (and theme classes). Required tokens:

Colors:
- `--color-obsidian: #1d1d1f`
- `--color-frost-white: #f5f5f7`
- `--color-pure-black: #000000`
- `--color-paper-white: #ffffff`
- `--color-carbon: #111111`
- `--color-platinum: #86868b`
- `--color-graphite: #333336`
- `--color-silver-mist: #cccccc`
- `--color-smoke: #424245`
- `--color-apple-blue: #0071e3`
- `--color-link-blue: #0066cc`
- `--color-halo-blue: #2997ff`
- `--color-signal-orange: #f56900`
- `--color-iris-violet: #8668ff`
- `--color-reef-teal: #00a1b3`

Generic token aliases required by the architecture:
- `--primary: var(--color-apple-blue)`
- `--secondary: var(--color-graphite)`
- `--bg-primary: var(--color-pure-black)`
- `--bg-secondary: var(--color-obsidian)`
- `--text-primary: var(--color-frost-white)`
- `--text-secondary: var(--color-platinum)`
- `--text-success: #34c759`
- `--text-error: #ff3b30`
- `--border-default: var(--color-smoke)`
- `--border-error: var(--color-text-error)`
- `--border-success: var(--color-text-success)`
- `--radius-sm: 10px`
- `--radius-md: 28px`
- `--radius-lg: 36px`
- `--shadow-sm: none`
- `--shadow-md: none`
- `--spacing-gap: 12px`
- `--transition-fast: 150ms`
- `--transition-normal: 300ms`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown: 100`
- `--z-modal: 200`
- `--z-toast: 300`

Typography:
- `--font-sf-pro-display: 'Inter', system-ui, sans-serif` (substitute for SF Pro Display)
- `--font-sf-pro-text: 'Inter', system-ui, sans-serif` (substitute for SF Pro Text)
- `--font-base: var(--font-sf-pro-text)`
- Type scale tokens: `--text-caption`, `--text-body`, `--text-heading-sm`, `--text-heading`, `--text-heading-lg`, `--text-display`, `--text-hero` with values per spec (10px/14px/19px/24px/32px/56px/80px).

Spacing tokens: `--spacing-4` through `--spacing-160` per spec (4px base unit).

Contrast pairing: any light background token pairs with a dark text token; any dark background token pairs with a light text token. Enforce this pairing for every theme, not just default.

Light mode background must not default to pure white where a mood color fits; where white/near-white is needed use `#fefefe`. For this theme, Paper White `#ffffff` is explicitly permitted for light sections per spec.

## 3. Mandatory Dark Mode Support
- Define dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Theme switching must be seamless without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 4. Flexbox Layout & Mobile-First Alignment
- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless an explicitly justified exception.
- Mobile-responsive out of the box: convert rows to columns on smaller viewports. Prevent horizontal scrolling.

## 5. Typography & Icons (Google Fonts Mandatory)
- Include Google Font `<link>` or `@import` for Inter (weights 400, 600, 700) and bind to `--font-base`.
- Use Google Material Symbols/Icons for all icons. Forbid raw inline SVGs or local icon files.

## 6. Component Design Specifications

### Button Component
Style all states via CSS classes:
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`), min touch target 44x44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles driven by `--text-success` / `--text-error`.

Button variants needed: Primary CTA (filled Apple Blue pill, 36px radius), Ghost Price Label (borderless text), Secondary/Link buttons, Danger button (visually distinct in both themes).

### Card Component
- Default: flexible flexbox layout, subtle borders/elevation using `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight card borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and guidance text.

### Form & Input Requirements
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

### Modal / Popup Requirements
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay clicks.

## 7. Core UX & Micro-Interaction Rules
- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 8. Page Sections Required
Build a complete Landing Page with these sections, in this order:
1. Promo Banner (slim bar above nav, obsidian bg, centered 12px text with inline blue link).
2. Top Navigation Bar (pure black bg, 980px pill radius, sticky, Apple logo glyph left, nav items centered 12px, search & bag icons right, semi-transparent on scroll with backdrop blur).
3. Hero Stage (full-bleed pure black, max-width 1440px centered, product image 50–60% viewport height, headline bottom-left 80px SF Pro Display 700 frost white, eyebrow with logo glyph, price + CTA cluster).
4. Features (3 cards) — dark feature stages, stacked rounded photo cards (28px radius) with overlaid white text, 88–120px vertical gaps. Single-subject, never grids.
5. How It Works (3 steps) — light detail band, two-column image+copy, orange category eyebrow, 56px headline, body in platinum.
6. Testimonials — light section, single-subject or two-column, no card grids.
7. Pricing (3 tiers) — light section, three tier cards with BEM naming, distinct CTA per tier (only one filled chromatic button per viewport).
8. FAQ — accordion with animated open/close, keyboard accessible.
9. Final CTA — dark stage, large headline + single filled blue button.
10. Footer with secondary links — obsidian bg, multi-column link lists, legal text in platinum.

## 9. Style Application Rules (from source spec)
- Use `#0071e3` Apple Blue as the filled CTA fill on `#000000` backgrounds — the only filled chromatic button color permitted.
- Use 28px border-radius for all photo cards and content containers; 36px for standard buttons; 980px for pill nav and chip elements.
- Headline type: SF Pro Display 600–700 at 56–80px with negative letter-spacing (-0.84px at 56px, -0.24px at 80px).
- Alternate between Pure Black `#000000` feature stages and Paper White `#ffffff` detail bands with 88–120px section gaps.
- Tag category content with Signal Orange `#f56900` eyebrows at 17px SF Pro Text 600 — never apply orange to body text or buttons.
- Render all body text in Platinum `#86868b` on white sections and Frost White `#f5f5f7` on dark sections — never use pure `#ffffff` for paragraph copy.
- Use 980px border-radius for top navigation bar and pill-shaped interactive elements.
- No drop shadows, box-shadows, or CSS elevation — depth from surface contrast only (`#000000`, `#111111`, `#1d1d1f`).
- No more than one filled chromatic button per viewport.
- No card grids, masonry layouts, or multi-column text blocks — content is single-subject or two-column image+text.
- Do not apply orange/violet/teal accent colors to text paragraphs, backgrounds, or large surfaces — category labels only.
- Do not use `#ffffff` for body paragraph text on white backgrounds.
- No gradients, textures, or decorative backgrounds — only subtle `#000000`→`#111111` surface transition.
- Border-radius values restricted to: 10px, 28px, 32px, 36px, 980px.
- Photography is dominant: full-bleed within containers, 28px radius on cards or edge-to-edge in light sections. No illustrations, no abstract graphics.
- Icons: outlined SF Symbols style, single-weight strokes, monochrome Frost White on dark and Obsidian on light.
- Three-act cinematic page rhythm: dark hero → dark feature stages → light detail band. Never break dark→dark→light cadence.
- Aggressive negative letter-spacing increasing with size; tight line-heights for display (1.05–1.14), generous for body (1.43–1.83). Use `"numr"` font feature for tabular numerals in pricing/specs.
- Use `max-width: 1440px` content centering. Section gaps 88–120px. Card padding 28px. Element gap 10–12px.

## 10. Deliverables
- `index.html`, `style.css`, `script.js` — separate files.
- BEM naming convention throughout.
- No lorem-ipsum-only submissions where real copy/labels were supplied; invented fictional copy is required (since real brand names are forbidden).
- All user-facing copy must be in English.

## 11. Edit Mode Note
This is a from-scratch build, not an edit of existing markup. All rules in Section 8 (Edit Mode) are waived; full component construction is expected.

Generate the complete landing page now. Output only the three files' contents, clearly labeled. No preamble, no closing commentary.
