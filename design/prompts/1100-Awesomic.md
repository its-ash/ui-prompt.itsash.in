# Coding AI Prompt — Awesomic-Themed Landing Page

You are an expert front-end engineer. Build a complete, production-ready landing page as three separate files: `index.html`, `style.css`, and `script.js`. Do not write any inline CSS. All styling must live in `style.css` using class/ID selectors only. Use Tailwind CSS utility classes mapped to CSS variables where appropriate, plus custom CSS driven by `@layer`/`@apply`. Use semantic HTML5 elements. Use Google Fonts for typography (DM Sans as the substitute for Cosmica) and Google Material Symbols for icons — no inline SVGs or local icon files.

The page must invent a fictional brand name, product, and copy. Never use the real brand name "Awesomic", its logo, trademarks, or product names anywhere in the page. Reuse only the visual style described below.

## 1. Theme Tokens (CSS Variables)

Define all tokens in `:root` and provide a `.dark` class plus `@media (prefers-color-scheme: dark)` overrides. Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text.

Colors:
- `--color-obsidian: #09090b` (primary action buttons, hero headlines, dominant text)
- `--color-graphite: #18181b` (body text, nav text, badge text)
- `--color-slate: #27272a` (secondary headings, elevated card surfaces)
- `--color-iron: #3f3f46` (muted text, button labels on light surfaces, badge text)
- `--color-steel: #52525b` (icon strokes, supporting metadata)
- `--color-fog: #71717a` (helper text, tertiary labels)
- `--color-ash: #a1a1aa` (placeholder text, disabled labels, light icon strokes)
- `--color-mist: #d4d4d8` (subtle borders, secondary card fills, link pill backgrounds)
- `--color-cloud: #ececee` (primary border color)
- `--color-paper: #f4f4f5` (canvas background, card surfaces, badge fills)
- `--color-snow: #ffffff` (elevated surfaces, input fields, ghost button backgrounds)
- `--color-ember: #ff5a00` (accent badges only — YC batch tags, highlight chips)
- `--color-magenta-spark: #fe45e2` (rare decorative card accent)

Surfaces:
- `--bg-canvas: #f4f4f5`
- `--bg-card: #ffffff`
- `--bg-subtle: #fafafa`
- `--bg-dark: #18181b`
- `--bg-deep-dark: #27272a`

Semantic tokens:
- `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`

Radius:
- `--radius-sm: 12px` (tags, small controls)
- `--radius-md: 14px` (buttons, inputs)
- `--radius-lg: 36px` (cards, large surfaces)
- `--radius-pill: 10000px` (pill CTAs)

Shadows:
- `--shadow-subtle`, `--shadow-subtle-2`, `--shadow-subtle-3`, `--shadow-subtle-4`, `--shadow-subtle-5`, `--shadow-md` (values per spec)
- Card elevation: no shadow; use `1px solid var(--color-cloud)` border.

Spacing scale: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 64, 68, 80, 120px as `--spacing-*`.

Transitions:
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown`, `--z-modal`, `--z-toast`

Typography:
- `--font-base: 'DM Sans', sans-serif` (Google Font, weights 300–700)
- Type scale tokens: `--text-caption: 12px`, `--text-body: 15px`, `--text-body-lg: 18px`, `--text-subheading: 20px`, `--text-heading-sm: 32px`, `--text-heading: 40px`, `--text-heading-lg: 56px`, `--text-display: 64px`
- Line heights: 1.0–1.8 per scale; letter spacing normal.

Dark mode: provide full dark token overrides under `.dark` and `@media (prefers-color-scheme: dark)`. Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label`. Ensure seamless variable switching without HTML restructuring.

## 2. Layout & Responsive Rules

- Centered max-width container: 1200px.
- Section gap: 80px vertical.
- Card padding: 28px.
- Element gap: 8px.
- Mobile-first flexbox layouts; default `align-items: center` on every flex container unless explicitly justified.
- Prevent horizontal scrolling; convert rows to columns on small viewports.
- Respect `prefers-reduced-motion`.

## 3. Component Requirements

Buttons:
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`; min touch target 44x44px.
- Variants: Primary Dark (obsidian fill, white text, 1.5px solid #2c2e34 border, inset highlight shadow, 14px radius, 12px/16px padding), Ghost White (white fill, iron text, 1px iron border, pill radius, 20px padding), Neutral Light (fafafa fill, graphite text, 14px radius, 12px/16px padding, no border).
- States: hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring via CSS variables), active (scale 0.97), loading (disabled, CSS spinner, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback via success/error tokens).

Cards:
- Default: flex layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `translateY(-2px)`.
- Focus-within: highlight border on child focus.
- Loading skeleton: shimmer animation in CSS.
- Empty state: Google Icon + guidance text.

Forms/Inputs:
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container.
- Email input: white background, graphite text, 14px radius, 12px/16px padding, 1px transparent border.

Modals/Popups (if used): opening/open/loading/success-error/closing animated; centered flex, backdrop overlay, Google Icon close button, focus trapping, close via Esc or overlay click.

## 4. Section Structure (Landing Page)

Build these sections in order:
1. **Hero**: split composition — massive left-aligned headline (56–64px, weight 600, obsidian, line-height 1.12–1.28) with rotating keyword animation; right-aligned compact email-capture form with supporting paragraph (15px, steel). 80px vertical padding.
2. **Features**: 3 cards (white, 36px radius, 1px cloud border). Image fills top half; bottom 28px padding with 20px weight 600 title (obsidian) and tag pills (transparent, 1px cloud border, 12px radius, 4px/8px padding, 13px graphite).
3. **How It Works**: 3 steps with number, title, description.
4. **Testimonials**: quotes with author info.
5. **Pricing**: 3 tiers with feature lists and CTA buttons.
6. **FAQ**: accordion-style Q&A.
7. **Final CTA**: centered headline + CTA button.
8. **Footer**: secondary links, logo, copyright.

Additional components:
- Navigation bar: sticky white header, logo left, nav links center (14px), login + dark CTA right. No visible border.
- Logo strip: grayscale logos in fog at 60–70% opacity, horizontally centered, even spacing, no container.
- Stats block: large number (40–56px, weight 600, obsidian) with adjacent descriptor (14px, weight 400, steel).
- Dark feature block: slate/deep-dark background, 28–36px radius, 24px padding, white headline (32px, weight 700), list items prefixed with right-arrow icon (20px, weight 500, white).
- Tag pills: outlined (transparent, 1px cloud border) and filled (iron bg, snow text).
- Orange accent badge: ember bg, white text, 12px radius, 4px/8px padding, 12px weight 500 — only for YC-style credential chips.
- Breakthrough image section: full-bleed nature photo, 48–64px top corner radius, no overlay/text.

## 5. Do's and Don'ts

Do:
- Use obsidian for all primary action buttons.
- Set card border-radius to 36px; rely on 1px solid cloud borders instead of shadows.
- Keep body text at 14–15px DM Sans weight 400 in graphite.
- Reserve ember exclusively for accent badges and credential chips.
- Use 56–64px weight 600 with line-height 1.12–1.28 for display headlines.
- Apply 28px card padding and 80px section rhythm.
- Use pill radius (10000px) for nav CTAs, 14px for inline buttons.

Don't:
- Don't introduce new accent colors.
- Don't use drop shadows on cards.
- Don't set display headlines below weight 600.
- Don't use ember for body text, links, or large fills.
- Don't use border-radius below 12px on any container.
- Don't break the single-font rule.
- Don't use pure black (#000000); obsidian is the deepest permitted ink.

## 6. Accessibility & UX

- Sufficient contrast in both light and dark modes.
- Never rely solely on color to communicate state.
- Semantic HTML5; correct ARIA roles/labels on custom widgets.
- Logical DOM/focus order; full keyboard operability.
- `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- Smooth CSS transitions on all state changes, respecting `prefers-reduced-motion`.

## 7. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- Consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No lorem-ipsum-only submissions where real copy is expected; use realistic fictional copy for the invented brand.

## 8. Dark Mode Toggle

Implement theme switching with persistence via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.

Output only the three files. No preamble or closing commentary.
