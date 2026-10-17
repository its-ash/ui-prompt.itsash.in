# Landing Page — Studio.Design Style (Fictional Brand)

## 1. Architecture & Styling Rules

**1.1 CSS-First, Zero Inline CSS**
- All styling lives in a single `style.css`. No `style="..."` attributes anywhere in the HTML.
- Target all design via class/ID selectors only. Keep `index.html` semantic and styling-agnostic.
- Deliverables: separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.

**1.2 CSS Variables & Theme Tokens**
Define in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`):
- Colors: `--color-studio-canvas: #eeeeee`, `--color-paper-white: #fefefe`, `--color-charcoal-ink: #222222`, `--color-graphite: #333333`, `--color-soft-ash: #555555`, `--color-absolute-black: #000000`.
- Dark mode overrides: canvas becomes `#1a1a1a`, paper white becomes `#2a2a2a`, charcoal ink becomes `#f7f7f7`, graphite `#cccccc`, soft ash `#999999`. Maintain contrast pairing for every theme.
- Radius: `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 12px`.
- Shadow: `--shadow-md: 0px 2px 15px 0px rgba(0,0,0,0.1)`.
- Spacing: use 4px base unit tokens `--spacing-4` through `--spacing-140` per the scale (4,8,12,16,20,24,28,32,48,56,60,64,100,140).
- Transitions: `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: cubic-bezier(0.4,0,0.2,1)`.
- Elevation: `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`.
- Typography: `--font-base` (Inter), `--font-tight` (Inter Tight). Load via Google Fonts `<link>`.

**1.3 Mandatory Dark Mode**
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class.
- Persist user choice via `localStorage`, fallback to `prefers-color-scheme` on first visit.
- Include a visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox & Mobile-First**
- All layouts use `display: flex`. Default `align-items: center` unless explicitly justified.
- Mobile-responsive: rows collapse to columns on small viewports. No horizontal scroll.

**1.5 Tailwind Integration**
- Use Tailwind CSS (or `@layer`/`@apply` with custom CSS). Utility classes map to CSS variables or generic classes (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: Google Fonts Inter and Inter Tight via `<link>`, bound to `--font-base` / `--font-tight`.
- Icons: Google Material Symbols only. No inline SVGs or local icon files. Font Awesome is forbidden; use Material Symbols for any brand/social glyphs (exception: none — replace brand glyphs with Material Symbols).

## 2. Component Specifications

**2.1 Buttons**
- Default: flex, `align-items: center; justify-content: center; gap: 0.5rem`, min 44x44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled, CSS spinner, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: driven by `--text-success` / `--text-error` (define these in both themes).
- Variants per spec: Filled (charcoal fill, white text, 8px radius, 12px 24px padding, Inter 16px/600, -0.64px tracking), Compact Dark Arrow (charcoal fill, 4px radius, 12px vertical / 24px left / 20px right padding, trailing Material arrow icon), White Inverse (white fill, graphite text, 1px charcoal border, 8px radius), Bare Text (transparent, black text/border, 0 radius, no padding).
- Hover Lift: prominent buttons gain `--shadow-md` on hover only.

**2.2 Cards**
- Default: flex layout, subtle borders, elevation via `--bg-secondary` and CSS vars.
- Hover: `transform: translateY(-2px)` + shadow shift.
- Focus-within: highlight border.
- Loading (Skeleton): shimmer animation in CSS.
- Empty state: Google Icon + guidance text.

**2.3 Forms & Inputs**
- States: Empty, Focused (ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container.

**2.4 Modal/Popup**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex (`align-items: center`), backdrop overlay, Material close button, focus trapping, close via Esc/overlay.

## 3. Global UX Rules

- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth animations via `transition: var(--transition-normal)`, respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 4. Deliverables & Content

- File structure: `index.html`, `style.css`, `script.js`.
- Naming: one consistent convention (BEM) across all classes.
- No lorem-ipsum-only submissions; use realistic fictional copy for an invented brand (do NOT use "Studio.Design", its logo, trademarks, or product names — invent a fictional creative-platform brand name and copy).
- Sections: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## Style Application (Studio.Design aesthetic)

- Page field: Studio Canvas `#eeeeee` (light) / dark equivalent. Large uninterrupted canvas fields; do not turn every section into white cards.
- Display text: Charcoal Ink `#222222` (light) / `#f7f7f7` (dark). Hero statement Inter 80px/600, 80px line-height, -3.2px tracking, left-aligned.
- Section headings: Inter 48px/700, 52.8px line-height, -1.92px tracking.
- Public nav: Inter Tight 15px/500, 21px line-height.
- Body: Inter 16px/400 (or the detected sans-serif 16px/400). Body-strong: Inter 700 16px, 1.4 line-height, -0.64px tracking.
- Hero: asymmetric — oversized left-aligned headline, overlapping center-right collage of vivid portfolio images with 4px/8px corners (mismatched sizes, no uniform grid, no padding inside tiles), compact right-side description + 8px charcoal filled button with white text.
- Features: heading Inter 48px/700 + edge-to-edge product/creative visual (no padded white card).
- Dark expanded nav panel: charcoal `#222222` bg, white headings Inter 16px/700 26.56px line-height, `#f7f7f7` child links Inter 16px/400, 16px gaps.
- Footer: canvas bg, Inter Tight 15px/500, charcoal links, soft ash `#555555` legal text, 15–16px grid gaps, 4px micro-gaps.
- Spacing: 16px element gaps, 24px horizontal control padding, 12px vertical control padding. Section gap 60px. Card padding 24px.
- Radius: 8px standard buttons/dark cards, 4px compact buttons/image tiles, 12px utility surfaces. No pill (9999px) controls.
- Shadows: only prominent button hover uses `--shadow-md`. No broad card shadows; no shadows on portfolio tiles or black showcase cards.
- Black showcase cards: `#000000` bg, 8px radius, no shadow, 0 padding when visual fills edge-to-edge.
- Portfolio tiles: raw vivid artwork fill, overlapping mismatched sizes, corners alternate 4px/8px, no padding, no shadow.
- No saturated UI accents, semantic-color badges, or colored primary buttons. UI chrome limited to `#eeeeee`, `#ffffff`, `#222222`, `#333333`, `#000000`.
- Imagery: creator-work-led (vivid editorial graphics, illustrated scenes, bold typography, photography, poster crops). Site UI monochrome so artwork supplies color.
- Icons sparse, compact, monochrome; brand-social glyphs via Material Symbols (exception to Google-Icons-only rule: none — use Material Symbols).

## 5. Edit Mode — N/A (from-scratch build)

Build from scratch per sections above. If any requested style change cannot be achieved without adding markup, stop and ask before inserting new HTML.
