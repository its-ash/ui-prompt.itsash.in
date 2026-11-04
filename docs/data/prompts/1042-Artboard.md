# Landing Page Prompt — Artboard Theme (Light)

You are an expert frontend developer. Build a complete, responsive landing page using **HTML, CSS, and JavaScript** in three separate files: `index.html`, `style.css`, and `script.js`. No inline `<style>` or `<script>` blocks beyond a single deferred entry-point reference. Use **Tailwind CSS** (via CDN) plus a custom `style.css` driven by CSS variables and `@layer`/`@apply` directives. All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

## 1. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. Forbid the `style="..."` attribute in HTML.
- Target all design properties via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

## 2. CSS Variables & Theme Tokens
Store all visual tokens in `:root` (and a `.dark` class) using CSS variables. Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds with light text.

```css
:root {
  /* Colors */
  --color-midnight-ink: #0d1400;
  --color-lime-voltage: #aaff00;
  --color-paper-white: #ffffff;
  --color-olive-stone: #838976;
  --color-soft-mist: #e6e7e4;
  --color-peach-wash: #ffe4c3;
  --color-sky-wash: #cbedff;
  --color-mint-wash: #caf3aa;

  /* Semantic aliases */
  --primary: var(--color-midnight-ink);
  --secondary: var(--color-olive-stone);
  --bg-primary: var(--color-paper-white);
  --bg-secondary: var(--color-soft-mist);
  --text-primary: var(--color-midnight-ink);
  --text-secondary: var(--color-olive-stone);
  --text-success: var(--color-mint-wash);
  --text-error: #b00020;
  --border-default: var(--color-soft-mist);
  --border-error: #b00020;
  --border-success: var(--color-mint-wash);

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Shadows — intentionally none; elevation via color/borders */
  --shadow-sm: none;
  --shadow-md: none;

  /* Spacing */
  --spacing-gap: 8px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-100: 100px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* Z-index */
  --z-dropdown: 100;
  --z-modal: 1000;
  --z-toast: 1100;

  /* Typography */
  --font-base: 'Inter', system-ui, sans-serif;
  --font-display: 'Vend Sans', 'Inter', system-ui, sans-serif;
}
```

Light Mode background must not be pure white where a near-white is needed; use `#fefefe` instead of `#ffffff` for any near-white surface. The page canvas here is `#ffffff` (Paper White) per spec.

## 3. Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background/text variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 4. Flexbox Layout & Mobile-First
- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box: convert rows to columns on small viewports; prevent horizontal scrolling.

## 5. Typography & Icons (Google Fonts Mandatory)
- Text: load Google Fonts via `<link>`/`@import` — Inter (substitute for Vend Sans) and system-ui. Bind to `--font-base` / `--font-display`.
- Icons: use Google Material Symbols/Icons only. Forbid raw inline SVGs or local icon files.

## 6. Component Specifications

### Top Navigation Bar
- White background, 8px radius on interactive elements, 20px horizontal padding on nav items, 11px row gap between link groups.
- Logo lockup left, nav links center-left, outlined action buttons (Unlock, Login) right: 1px `#0d1400` border, 8px radius, 19px horizontal / 11px vertical padding, Vend Sans 13px weight 600 at +0.045em tracking.

### Outlined Action Button (primary)
- 1px solid `#0d1400` border, 8px radius, white fill, `#0d1400` text at 13px weight 600, wide tracking (+0.045em). Padding 8px 19px. No shadow, no fill on hover — border only.

### Filled Dark Button (high-emphasis)
- `#0d1400` background, `#ffffff` text, 8px radius, 8px 19px padding. Reserved for the single most important action per screen.

### Category Filter Pill
- Pill shape, 8px radius, 1px `#0d1400` border, white fill, 11px weight 600 uppercase tracking +0.045em. Active variant: `#0d1400` fill, `#ffffff` text. Horizontal scrollable row, 4px gap.

### Category Feature Card
- White background, 12px radius, 1px `#e6e7e4` hairline border, no shadow, 12px padding. Contains a 2×2 grid of mockup preview tiles (each 8px radius, 4px gap) and a category label below at 19px weight 400, -0.023em tracking. Some cards use pastel washes (`#ffe4c3`, `#cbedff`, `#caf3aa`) as background.

### Mockup Preview Tile
- 8px radius, white/transparent background, no visible border. Arranged in 2×2 grids within category cards. Image-driven only.

### Hero Section
- Centered stack on white. 61px weight 600 headline, `#0d1400`, letter-spacing -2.01px. 19px body subhead, -0.44px tracking. Above headline: horizontal row of 4 icon+text labels (Online Editor, Video Mockups, AI Generators, Figma Plugin) at 11px weight 600 wide tracking, each preceded by a 12px-radius line icon in `#0d1400`. 64px vertical padding above/below.

### Icon+Label Feature Strip
- Row of 4 items, each a 12px-radius outlined icon paired with 11px uppercase label. 12px gap icon-to-text, ~32px between items. Icons stroke-based, 1.5px weight, `#0d1400`.

### Client Logo Strip
- Horizontal row of monochrome logos in `#838976`, centered, 48px vertical padding. Uniform height ~32px, 48–64px horizontal spacing.

### Badge / Tag
- 8px radius, thin 1px `#838976` or `#0d1400` border, white fill, 11px weight 600 +0.045em tracking, 4px vertical / 8px horizontal padding.

### Category Accent Card
- Pastel wash background (`#ffe4c3`, `#cbedff`, or `#caf3aa`), 12px radius, 24px+ padding. Contains a 19px weight 400 label in `#0d1400` and a 2×2 mockup tile grid below with 8px gap.

### Button States (all via CSS classes)
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min 44×44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success` / `--text-error`.

### Card States (interactive)
- Default: flex layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty State: structured fallback with Google Icon and guidance text.

### Form & Input States
- Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

### Modal / Popup States
- Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via `Esc` or overlay click.

## 7. Core UX & Micro-Interactions
- Responsive by default: fluid sizing, breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 8. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content was genuinely unspecified.

## 9. Brand & Copy
- Invent a fictional brand name, product, and copy. Never use the real brand name "Artboard", its logo, trademarks, or product names anywhere in the page. All user-facing copy must be in English.

## 10. Page Sections to Build
1. Hero (centered stack, icon+label strip above headline)
2. Features (3 cards)
3. How It Works (3 steps)
4. Testimonials
5. Pricing (3 tiers)
6. FAQ
7. Final CTA
8. Footer with secondary links

## 11. Design Do's & Don'ts
Do:
- Use Vend Sans (Inter substitute) for all display, heading, and label text; let system-ui carry body copy at 16px.
- Apply -2.01px tracking at 61px and -0.99px at 43px — headlines compressed, not airy.
- Use wide tracking (+0.045em) on all 11–13px labels; these read as uppercase tags, not body text.
- Default buttons to outlined style (1px `#0d1400` border, white fill, 8px radius); reserve filled-dark for the single most important action per screen.
- Use 8px radius for buttons, badges, nav; 12px for cards and icon containers — only these two radii.
- Pull `#aaff00` Lime Voltage only for active states, selected indicators, highlight tags — never as large fill/background.
- Code categories with the three pastel washes (peach, sky, mint) at card level; rest of page stays achromatic.

Don't:
- No filled colorful buttons — outlined-first, filled-dark-second.
- No wide label tracking on body/paragraph text.
- No drop shadows or elevation on cards — depth via pastel washes and hairline borders.
- No `#aaff00` as page background or large surface fill.
- Don't mix `#0d1400` with pure `#000000`.
- No third border-radius value.
- No gradient fills — flat, solid pastel card surfaces.

## 12. Layout
- Max-width 1200px centered content column.
- Hero: centered text stack, no split layout, no sidebar, pure white background.
- Below hero: client logo strip, then single-row horizontal mockup showcase with large color-coded cards.
- Main content: 3-column grid of category cards, each with 2×2 mockup tile grid and label. Cards alternate white and pastel-wash backgrounds.
- Single top nav bar — no sidebar, no mega-menu.
- Sections separated by 64px vertical gaps, no visible dividers; whitespace carries structure.

## 13. Imagery
- Mockup photographs (devices, apparel, packaging, print materials, tote bags, laptops) are the heroes. Full-color, product-focused, tight crops on solid backgrounds, object isolated, no lifestyle context. Mockup tiles use 8px radius in 2×2 grids. Homepage is a gallery: imagery dominates text. No illustrations, abstract graphics, or 3D renders.

## 14. Type Scale
- caption: 11px, line-height 1.2, letter-spacing 0.5px
- body: 16px, line-height 1.5, letter-spacing 0.5px
- subheading: 19px, line-height 1.5, letter-spacing -0.44px
- heading: 43px, line-height 1.2, letter-spacing -0.99px
- display: 61px, line-height 1.2, letter-spacing -2.01px

Vend Sans (Inter substitute) weights 400, 600, 700. system-ui weights 400, 700 at 16px with 0.031em tracking.

Output only the finished code in the three files described. No preamble, no closing commentary. Ensure all mandatory rules above are satisfied. If any requested style change cannot be achieved without adding markup, stop and ask before inserting new HTML.
