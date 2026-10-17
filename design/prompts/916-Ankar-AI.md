You are an expert front-end engineer. Build a complete, responsive landing page using the "Ankar AI" editorial-monochrome design system described below. Output three separate files: `index.html`, `style.css`, and `script.js`. Do not use inline CSS. All styling must live in `style.css` using class/ID selectors only. Use Tailwind CSS utility classes in HTML only where they map to CSS variables or reusable generic class names (`.btn`, `.card`, `.input-group`); prefer clean custom CSS driven by Tailwind's `@layer`/`@apply` directives.

## Brand & Copy Rules
- Invent a fictional brand name, product name, and all user-facing copy. Never use "Ankar", "Ankar AI", or any real trademark, logo, or product name from the source spec.
- All user-facing copy must be in English.
- Use realistic, non-placeholder content for all sections.

## Design Tokens (define in `:root` as CSS variables)
Colors:
- `--color-obsidian: #000000` (primary text, hairline borders, icon strokes)
- `--color-paper-white: #fefefe` (page canvas, card surfaces, text on dark)
- `--color-ink: #171717` (filled button bg, dark card surfaces, hero base)
- `--color-charcoal: #1f1f1f` (dark feature card surfaces, elevated dark panels)
- `--color-graphite: #515151` (secondary text, muted labels)
- `--color-slate: #979797` (muted helper text, disabled labels)
- `--color-ash: #b9b9b9` (soft surface tint, placeholder backgrounds)
- `--color-fog: #cfcfcf` (dividers, input borders, ghost button fills)
- `--color-mist: #c5c5c5` (light borders on muted backgrounds)

Map these to the standard token set: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

Typography (Google Fonts mandatory):
- Text: Load Google Fonts. Use "Cormorant Garamond" (weight 300) as substitute for the display serif, "Inter" (weights 400, 500) as substitute for the body sans, "JetBrains Mono" (weight 400) as substitute for monospace. Bind primary font to `--font-base`.
- Icons: Use Google Material Symbols/Icons. No raw inline SVGs or local icon files.
- Type scale tokens: `--text-caption: 12px`, `--text-body: 14px`, `--text-body-lg: 16px`, `--text-subheading: 18px`, `--text-heading-sm: 24px`, `--text-heading: 32px`, `--text-heading-lg: 40px`, `--text-display: 48px`, `--text-display-xl: 64px`.
- Display/heading serif: weight 300, line-height 0.98–1.06, letter-spacing -0.01em (-0.24px at 24px scaling to -0.64px at 64px).
- Body sans: weight 400 for body, 500 for nav labels and emphasis. Line-height 1.30–1.58.
- Monospace: weight 400, 12px/14px, for labels, tags, metadata.

Spacing & Shapes:
- Spacing scale: 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 26, 32, 40, 48, 64, 200 (px) as `--spacing-*` tokens.
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Border radius: 4px for all rectangular UI (buttons, nav, links, cards). 100px only for icon containers (pills).
- `--radius-sm: 4px`, `--radius-md: 4px`, `--radius-lg: 4px`.
- `--shadow-sm`, `--shadow-md` (define but use none per design rules — no drop shadows).
- `--z-dropdown`, `--z-modal`, `--z-toast`.
- Page max-width: 1200px. Section gap: 80px. Card padding: 20px. Element gap: 10px.

## Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- In dark mode: invert backgrounds/texts appropriately. Hero stays dark; page canvas becomes dark with light text. Maintain contrast pairing (light bg → dark text, dark bg → light text).
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible theme toggle control with correct `aria-pressed`/`aria-label` state.

## Layout & Responsive Rules
- Mobile-first. Flexbox for all layouts (`display: flex`, default `align-items: center` unless justified exception).
- Convert rows to columns on small viewports. Prevent horizontal scrolling.
- Full-bleed hero (100vw) breaks the 1200px column; all other content constrained to 1200px centered column.
- Feature grid: 4 columns desktop → 2 → 1.
- Section rhythm: 80px gaps. Whitespace as dividers, no lines.

## Component Specifications

### Navigation Bar
- Transparent over hero (white text on dark), turns white with dark text on scroll.
- Logo left: brand name in sans 500 16px with small geometric mark (use a Material Symbol).
- Centered nav items: sans 14px weight 400, 24px gap, chevron-down carets for dropdowns.
- Right: ghost button "Book a demo" (1px white border, transparent bg, white text, 10px 16px padding, 4px radius).
- Padding 16px vertical. Max-width 1200px centered. No border, no shadow.
- No sticky behavior above the fold.

### Hero Section
- Full-bleed `#000000` background with soft radial light burst gradient: warm white core → muted orange → red → blue → purple at edges → black at corners.
- Centered 1200px column. Headline in display serif weight 300 at 64px, white, line-height 1.00, letter-spacing -0.64px.
- Subtext in sans 16px weight 400, `#cfcfcf`.
- Filled white button below: white bg, `#171717` text, sans 500 14px, 10px 16px padding, 4px radius.

### Feature Cards (3 cards)
- 4-column grid (use 3 cards + empty or 4th placeholder), 20px gap, on white page.
- Each card: `#1f1f1f` dark surface with subtle radial gradient wash, 4px radius, 24px padding.
- White 24px icon top-center (Material Symbol).
- Title in sans 500 16px white.
- Description below the card (outside dark surface) in sans 400 14px `#515151`, max 2 lines.
- No border, no shadow.

### How It Works (3 steps)
- Left-aligned section heading block: optional eyebrow (Space Mono 12px with icon prefix), title in serif 300 40px `#171717` line-height 1.00 letter-spacing -0.40px, subtext in sans 400 16px `#515151` max-width 640px.
- 3 steps in a row (flex), each with a numbered indicator (monospace), title (sans 500 16px), description (sans 400 14px `#515151`).

### Testimonials
- White surface cards, contained 16:9 image at top, 4px radius.
- Quote in sans 400 16px `#171717`, line-height 1.58.
- Attribution row: 32px circular avatar, name in sans 500 14px `#171717`, role in mono 12px `#979797`.
- Dark filled "Learn more" button below: `#171717` bg, white text, sans 500 14px, 10px 16px padding, 4px radius.
- Carousel arrow controls: 32×32px square, `#171717` bg, white chevron, 4px radius, side-by-side centered cluster.

### Pricing (3 tiers)
- 3 cards in a row. Middle tier highlighted (e.g., subtle `#171717` bg with white text) or bordered with hairline `#000000`.
- Each: tier name (mono 12px), price (serif 300 48px), feature list (sans 14px), CTA button.
- Filled button for primary tier, ghost for others.

### FAQ
- Accordion-style. Question in sans 500 16px `#171717`. Answer in sans 400 14px `#515151`.
- Expand/collapse via CSS transitions. Use `aria-expanded`, `aria-controls`.
- Plus/minus icon (Material Symbol).

### Final CTA
- Dark section (`#171717` or `#000000`), centered. Headline in serif 300 48px white. Subtext in sans 16px `#cfcfcf`. White filled button.

### Footer
- White bg, hairline top border `#000000`. Multi-column links (Product, Company, Resources, Legal). Logo left. Copyright in mono 12px `#979797`. Secondary links in sans 14px `#515151`.

## Button Component (all states via CSS classes)
- Default: flex, `align-items: center`, `justify-content: center`, gap 0.5rem. Min touch target 44×44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled interactions, CSS spinner or animated Material Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.
- `.btn-primary` (filled `#171717` bg, white text), `.btn-ghost` (transparent, 1px border), `.btn-danger`.

## Card Component
- Default: flex layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: `transform: translateY(-2px)` or shadow shift.
- Focus-within: highlight border when child link/button focused.
- Loading skeleton: shimmer animation in CSS.
- Empty state: Material Icon + guidance text.

## Form & Input (if any)
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Flex container wrapping label, input, error feedback.

## Modal (if any)
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex, backdrop overlay, Material Icon close button, focus trapping, Esc/overlay close.

## Global UX Rules
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes. Never rely solely on color. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## File Structure
- `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM) across the entire deliverable.
- No lorem-ipsum-only submissions; use realistic copy where the spec implies content.

## Edit Mode
Not applicable — this is a from-scratch build.

## Additional Constraints
- No chromatic accent colors — strictly monochrome.
- No bold (600+) weights for the serif — whisper-weight 300 is the signature.
- No line-height above 1.10 on display sizes.
- No drop shadows on cards, buttons, or nav.
- No pill-shaped (fully rounded) buttons — 4px corners only.
- Don't use system sans-serif fallback for user-facing content beyond utility micro-copy.
- Don't center-align body paragraphs or long-form descriptions — left-align with max-width column.
- Let dark surfaces create hierarchy instead of shadows.
