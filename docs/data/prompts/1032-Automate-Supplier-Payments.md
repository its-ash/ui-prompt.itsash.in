# Landing Page Prompt — Automate Supplier Payments (Butcher Paper Bakery Ledger Theme)

## 1. Strict Architectural Rules to Enforce

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside a dedicated `style.css` file.
- Forbid the use of the `style="..."` attribute in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens inside `:root` (and theme classes) using CSS variables:
- Colors: `--color-buttercream: #fff6d2;`, `--color-marigold: #ffd801;`, `--color-ink-black: #000000;`, `--color-bone-white: #ffffff;`, `--color-char: #666664;`, `--color-oat: #cccbc7;`, `--color-fawn: #dcdce6;`.
- Map to semantic tokens: `--primary: var(--color-marigold);`, `--secondary: var(--color-char);`, `--bg-primary: var(--color-buttercream);`, `--bg-secondary: var(--color-bone-white);`, `--text-primary: var(--color-ink-black);`, `--text-secondary: var(--color-char);`, `--text-success: var(--color-ink-black);`, `--text-error: var(--color-ink-black);`, `--border-default: var(--color-ink-black);`, `--border-error: var(--color-ink-black);`, `--border-success: var(--color-ink-black);`.
- Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text.
- Light mode background must not be pure white; use `#fff6d2` (Buttercream) as the canvas. Where near-white is needed, use `#fefefe`.
- Border radius: `--radius-sm: 16px;`, `--radius-md: 20px;`, `--radius-lg: 9999px;`.
- Shadows: `--shadow-sm: none;`, `--shadow-md: rgba(70, 58, 0, 0.1) 0px 4px 12px 0px;`.
- Spacing: `--spacing-gap: 24px;`, plus the full 4px-based scale (`--spacing-4` through `--spacing-236`).
- Transitions: `--transition-fast: 150ms ease;`, `--transition-normal: 250ms ease;`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);`.
- Elevation: `--z-dropdown: 100;`, `--z-modal: 200;`, `--z-toast: 300;`.

**1.3 Mandatory Dark Mode Support**
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Switch background and text CSS variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless an explicitly justified exception exists.
- All flex layouts must be mobile-responsive (rows convert to columns on small viewports). Prevent horizontal scrolling.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply` directives) unless another framework is requested.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Use Google Fonts for text and icons. Include `<link>` or `@import` tags.
- Text: bind `--font-base` to DM Sans (substitute for Inter/Manrope). Use Champ (substitute: Roboto Slab, Zilla Slab, or Bitter) for display/headlines. Use DM Mono (substitute: IBM Plex Mono or JetBrains Mono) for numerical/ledger data.
- Icons: use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 2. Component Design Specifications to Enforce

**2.1 Button Component Requirements**
Style all states via CSS classes:
- Default: Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles driven by `--text-success`/`--text-error`.
- Variants: Pill Filled (Marigold) primary CTA; Pill Outlined (Black) secondary; Pill Filled (Black) high-emphasis secondary.

**2.2 Card Component Requirements**
- Default: flexible Flexbox layout, subtle borders/elevation using `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight card borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and clear guidance text.

**2.3 Form & Input Requirements**
- States: Empty, Focused (outline ring), Filled, Valid, Invalid, Disabled, Read-only.
- Structure: Flex container wrapping label, input field, and dedicated error feedback container.

**2.4 Modal / Popup Requirements**
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via `Esc` or overlay clicks.

## 3. Core UX & Micro-Interaction Rules to Enforce

- Responsive by default: fluid sizing and breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both Light and Dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.

## 4. Deliverables & Output Format

- File structure: separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Naming convention: enforce one consistent convention (BEM or fixed utility set) across the entire deliverable — never mix.
- No unrequested placeholders: prohibit lorem-ipsum-only submissions where real copy/labels were supplied; placeholders only where content was genuinely unspecified.

## 5. Page Content & Theme Specification

**Theme:** Light. Visual logic: "honest ledger on butcher paper" — confident, slightly retro, unapologetically saturated. Surfaces stack in warm cream tones; borders are hairline black; the only chromatic accent is a single yellow meaning "act now." Components feel handmade rather than enterprise.

**Color Tokens (exact):**
- Buttercream `#fff6d2` — page canvas, card surfaces, warm backgrounds.
- Marigold `#ffd801` — primary CTA fill, brand accent (school-bus yellow), reserved exclusively for action surfaces.
- Ink Black `#000000` — primary text, borders, icon strokes, structural outlines.
- Bone White `#ffffff` — reversed text on dark fills, surface inversion.
- Char `#666664` — secondary surfaces and muted structural fills.
- Oat `#cccbc7` — neutral button borders and subtle dividers.
- Fawn `#dcdce6` — faint cool-tinted neutral for secondary surface layers and quiet dividers.

**Typography:**
- Display/headlines: Champ (substitute Roboto Slab/Zilla Slab/Bitter), weights 500/800, sizes 26/38/54/72px, line-height 1.01–1.40, letter-spacing 0.01em.
- Body/UI: DM Sans (substitute Inter/Manrope/system-ui), weights 400/500/700, sizes 10/16/20px, line-height 1.00–2.33, tracking -0.02em at 20px, +0.016em at 10px.
- Mono: DM Mono (substitute IBM Plex Mono/JetBrains Mono), weight 400, size 18px, line-height 1.20, tracking 0.01em.
- Type scale: caption 10px/1.5; body 16px/1.5; subheading 20px/1.4/-0.4px; heading-sm 26px/1.2; heading 38px/1.16; heading-lg 54px/1.01; display 72px/1.01.

**Spacing & Shapes:**
- Base unit 4px; density spacious.
- Spacing scale: 4, 8, 12, 16, 20, 24, 28, 32, 36, 48, 60, 72, 80, 120, 132, 236 (px).
- Border radius: tags 9999px, cards 20px, inputs 16px, buttons 9999px.
- Shadow: `rgba(70, 58, 0, 0.1) 0px 4px 12px 0px` (floating UI only).
- Layout: page max-width 1200px; section gap 80px; card padding 32px; element gap 24px.

**Components to implement:**
- Pill Button Filled (Marigold): bg `#ffd801`, text `#000000`, radius 9999px, padding 20px 32px, DM Sans 16px weight 500.
- Pill Button Outlined (Black): transparent bg, border 1.5px solid `#000000`, text `#000000`, radius 9999px, padding 12–20px 32px, DM Sans 16px weight 500.
- Pill Button Filled (Black): bg `#000000`, text `#ffffff`, radius 9999px, padding 20px 32px, DM Sans 16px weight 500.
- Card Surface: bg `#ffffff`, radius 20px, padding 32px, optional soft shadow.
- Card Warm: bg `#fff6d2`, radius 20px, padding 32px, no border.
- Navigation Bar: bg `#fff6d2`, ~64px height, left logo, center nav links (DM Sans 16px weight 400, `#000000`), right action buttons. No border/shadow.
- Hero Full-bleed with scrim: full-viewport background image with warm dark scrim; centered headline Champ 72px weight 800 `#ffffff`; subtext DM Sans 18–20px `#ffffff`; Marigold pill CTA centered.
- Section Divider: 1px `#000000` line or 80px spacing gap.
- Input Field: bg `#ffffff`, border 1.5px solid `#cccbc7`, radius 16px, padding 16px, DM Sans 16px weight 400, placeholder `#666664`; focus border `#000000`.
- Feature Grid 3 Column: 3-column grid, 24px gap, cards 20px radius 32px padding; headings Champ 26px weight 800; body DM Sans 16px weight 400.
- Tag/Badge: bg `#fff6d2` or `#000000`, text `#000000` or `#ffffff`, radius 9999px, padding 6px 16px, DM Sans 13–16px weight 500.
- Stat Callout: large number Champ 54px weight 800; label DM Sans 16px weight 400; currency figures in DM Mono 18px.

**Do's:**
- Use Marigold exclusively for the single primary CTA per surface.
- All buttons border-radius 9999px (full pill).
- Champ weight 800 at 38–72px for display; weight 500 at 26px for sub-display; never DM Sans for headlines.
- Build on Buttercream canvas with white cards floating on top; never cool grays for surfaces.
- Hairline 1px `#000000` borders and 1.5px for interactive elements; shadows reserved for floating UI at `rgba(70,58,0,0.1) 0 4px 12px`.
- Pair every Marigold CTA with a black-outlined pill button as secondary partner.
- Section gaps 80px, element gaps 24px.

**Don'ts:**
- No blue/green/red chromatic accents; semantic colors expressed through form (borders, icons), not hue.
- No shadows on cards/content blocks.
- No sans-serif body text above 24px; Champ owns display territory.
- No pure white `#ffffff` page canvas; Buttercream is base.
- No mixed border-radius within same component category.
- No multiple yellow shades; Marigold is the only yellow.
- No gradients; flat and warm; depth via color layering (cream → white → ink).

**Surfaces:**
- Level 0 Canvas `#fff6d2`; Level 1 Card `#ffffff`; Level 2 Oat `#cccbc7`; Level 3 Ink `#000000`.

**Imagery:** Warm-toned, documentary-style lifestyle photography; warm color grade; hero full-bleed with dark overlay; product UI mockups as clean white cards inset in cream sections; no illustrations or 3D renders.

**Layout:** Full-bleed sections alternating cream canvas and white cards; hero full-viewport image with dark scrim and centered headline; simple top nav; content sections stack vertically with 80px gaps; cards in 2–3 column grids with 20px radius; centered, symmetric, unhurried.

**Sections to build (in order):**
1. Hero — full-bleed image with scrim, headline, subtext, Marigold CTA + outlined secondary.
2. Features — 3-column card grid (icon + heading + body).
3. How It Works — 3 numbered steps with icons and descriptions.
4. Testimonials — 2–3 quote cards with avatar, name, role.
5. Pricing — 3 tiers (Starter / Growth / Enterprise) with feature lists and CTA buttons.
6. FAQ — accordion-style Q&A.
7. Final CTA — centered headline + Marigold button on cream or ink surface.
8. Footer — secondary links, brand name, copyright.

**Brand & Copy Rule:** Invent a fictional brand name, product name, and all user-facing copy. Never use any real brand name, logo, trademark, or product name. All copy must be in English. Use realistic but fictional labels (e.g., "PayBridge," "LedgerFlow," "SettleUp").

**Additional Constraints:**
- No inline CSS; no inline SVGs; no local icon files.
- All interactive components must implement every state listed in Section 2.
- Ensure dark mode tokens are defined even though the default theme is light.
- Respect `prefers-reduced-motion`.
- Provide `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
