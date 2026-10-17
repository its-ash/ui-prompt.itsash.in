# Landing Page Build Prompt — "Aninix" Style System

You are a senior front-end engineer. Build a complete, production-ready landing page using the visual style system described below. **Do not use the name "Aninix", its logo, trademarks, or product names anywhere in the deliverable.** Invent a fictional brand name, product, and all copy. All user-facing copy must be in English.

## 1. File Structure & Naming

- Deliver exactly three files: `index.html`, `style.css`, `script.js`.
- No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer></script>`).
- No inline CSS (`style="..."` is forbidden).
- Use one consistent class-naming convention throughout (BEM recommended). Never mix conventions.
- All styling lives in `style.css`, targeted via class/ID selectors only. HTML must remain clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

## 2. CSS Architecture — Variables & Tokens

Define all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:

**Colors**
- `--color-indigo-switch: #374fd5` (accent; used ONLY for CTA fills, logo mark, and attribution chips — never as large-section background)
- `--color-pure-white: #ffffff`
- `--color-soft-mist: #f0f0f0`
- `--color-carbon-black: #000000`
- `--color-ink-black: #171717`
- `--color-shadow-gray: #333333`
- `--color-steel: #89909a`
- `--color-midnight: #0b1118`
- `--color-fog: #ced3d9`
- `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--bg-primary`, `--bg-secondary`, `--border-default`, `--border-error`, `--border-success` (mapped to the palette above with correct contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text)

**Typography**
- `--font-base` bound to Google Fonts. Use Inter as the system-ui substitute and a heavy geometric display face (Inter 700/800 acceptable) for Euclid Circular A; Source Serif Pro for the Mackinac editorial accent. Load via `<link>` tags in `<head>`.
- Type scale variables: `--text-caption: 12px`, `--text-body-sm: 14px`, `--text-body: 16px`, `--text-body-lg: 18px`, `--text-subheading: 20px`, `--text-heading: 32px`, `--text-heading-lg: 48px`, `--text-display: 72px` with corresponding line-heights and letter-spacing (-0.72px at display, -0.48px at heading-lg, -0.32px at heading).

**Spacing, Radius, Shadows, Elevation**
- `--spacing-4` through `--spacing-120` per the scale (4,8,10,12,13,16,20,24,28,40,48,80,120 px).
- `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 16px`, `--radius-xl: 24px`.
- `--shadow-sm: rgba(104,116,123,0.15) 0px 2px 7px 0px, rgba(104,116,123,0.3) 0px 5px 15px 0px` (used ONLY on the primary CTA button).
- `--z-dropdown`, `--z-modal`, `--z-toast`.
- `--transition-fast`, `--transition-normal`, `--ease-standard`.

**Contrast Pairing:** Every light background token must pair with a dark text token and vice versa, for every theme.

**Light Mode Background:** Use `#fefefe` where a near-white is needed instead of pure `#ffffff` (canvas stays `#ffffff` per spec).

## 3. Mandatory Dark Mode

- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background and text variables switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 4. Layout Rules

- Use Flexbox (`display: flex`) for all layout structures. Every flex container must default to `align-items: center` unless explicitly justified otherwise.
- Mobile-first responsive: convert rows to columns on small viewports; prevent horizontal scrolling.
- Page max-width 1200px centered; 80px outer horizontal padding on nav; 80px section gaps; 24px card padding; 10px element gap.
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 5. Typography & Icons

- Strictly Google Fonts for text and icons. Use Google Material Symbols/Icons for all icons. Forbid raw inline SVGs or local icon files.
- Text: Inter (400/500/700) for body/system-ui substitute; heavy geometric display (Inter 700/800) for Euclid Circular A substitute; Source Serif Pro for Mackinac editorial accent. Bind display to `--font-display`, body to `--font-base`.
- Never use more than 2 type families on a single screen (display + body; Mackinac only for editorial pull-quotes).

## 6. Component Specifications

**Buttons**
- `.btn` base: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min touch target 44x44px.
- `.btn-primary`: indigo fill `#374fd5`, white text, 8px radius, 24px×13px padding, body weight 16px, dual-layer shadow (the only shadow in the system). Optional small icon prefix.
- `.btn-ghost`: transparent fill, 1px `#89909a` border, 8px radius, 24px×10px padding, text `#333333` at 16px weight 500, no shadow.
- States: hover (brightness/shadow shift, `cursor: pointer`), focus (distinct focus ring via CSS variables), active (`transform: scale(0.97)`), loading (disabled, spinner/animated icon, no dimension distortion), disabled (`opacity: 0.5`, greyscale, `cursor: not-allowed`), success/error (temporary feedback via `--text-success`/`--text-error`).

**Cards**
- `.card-light`: `#f0f0f0` or `#ffffff` surface, 16px radius, 40px+ padding, no border, no shadow. Centered product visual. Bottom-left indigo attribution chip.
- `.card-dark`: `#0b1118` surface, 16px radius, 40px+ padding, no shadow. White/light-gray content. Same indigo chip bottom-left.
- `.card` interactive states: hover (`transform: translateY(-2px)` + shadow shift), focus-within (border highlight), loading skeleton (shimmer CSS animation), empty state (Google Icon + guidance text).

**Aninix Attribution Chip**
- Indigo `#374fd5` fill, white text at 12px caption weight, 4px radius, 4px×8px padding. Bottom-left on both light and dark showcase cards.

**Navigation Bar**
- White transparent, full-width, 80px horizontal padding. Left: logo mark (indigo rounded square ~20px with white play triangle) + wordmark. Center: text links (16px, body weight, `#333333`). Right: ghost "Install plugin" + ghost "Log in". No background fill, no border, no sticky shadow.

**Hero Display Block**
- Centered on white. Display type 72px / weight 700-800 / -0.72px tracking in `#000000`. Subhead 20px system-ui weight 400 in `#333333`. 40-48px vertical gap.

**Social Proof Line**
- 14px body-sm, muted gray `#333333`, centered, unadorned.

**Section Heading**
- 48px, weight 700, -0.48px tracking, `#000000`, centered or left-aligned. 40px gap to content below.

**Forms/Inputs (if any)**
- States: empty, focused (outline ring), filled, valid, invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

**Modal (if any)**
- States: opening, open, loading, success/error, closing (CSS transitions). Centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via Esc/overlay click.

## 7. UX & Micro-Interactions (Global)

- Responsive by default; fluid sizing; no horizontal overflow.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- Never use `#000000` for body text below 24px; use `#171717` or `#333333`.
- Never add icons inside body text or cards; iconography restricted to logo, CTA prefixes, nav.
- Never use indigo accent on text longer than a single word (chips, buttons, glyph only).
- Never add gradients; system is flat by philosophy.
- Let the dual-layer button shadow be the only shadow; keep cards and nav flat.
- Alternate light (`#f0f0f0`/`#ffffff`) and dark (`#0b1118`) showcase cards for rhythm.

## 8. Page Sections to Build

1. **Hero**: centered stack — display headline → subhead → primary CTA → social proof line → two-card gallery row (one light, one dark showcase card).
2. **Features**: 3 cards (light/dark alternating) with heading, description, icon (Google Material Symbol).
3. **How It Works**: 3 steps with numbered indicators, title, description.
4. **Testimonials**: editorial pull-quote using Mackinac accent, attribution.
5. **Pricing**: 3 tiers with feature lists and CTA buttons.
6. **FAQ**: accordion-style questions with expand/collapse.
7. **Final CTA**: centered headline + primary button.
8. **Footer**: secondary links, logo, copyright.

## 9. Deliverable Notes

- Invent a fictional brand name, product, and all copy. Never use "Aninix" or any real brand identifiers.
- No lorem-ipsum-only submissions where real copy is expected; placeholders only where content genuinely unspecified.
- Ensure all Google Fonts/Icons load correctly.
- Test both light and dark modes.

## 10. Edit Mode (if modifying existing markup)

If working on existing markup: never introduce new HTML tags/components/DOM nodes; work only within existing element/class structure; define CSS classes only for existing elements; do not write JS for form validation, popups/modals, or utility functions — ask the user how to handle instead; if a style change requires new markup, stop and ask. (Not applicable for this from-scratch build, but enforce if editing.)

---

Output only the three files' contents as specified. No preamble, no closing commentary.
