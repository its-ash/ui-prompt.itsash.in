# UI/UX Specification Prompt — "Raise" Landing Page

## 1. Project Overview

Build a complete, responsive landing page for a fictional brand using the "Raise" design language: a sunlit open-ledger aesthetic with a near-white canvas, hairline cool-gray dividers, and a single deep navy (`#0c2764`) as the only saturated color. The page must be delivered as three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere in the HTML. All styling must live in `style.css` via class/ID selectors only.

**Brand rule:** Invent a fictional brand name, product name, and all copy. Never use "Open Collective," its logo, trademarks, or product names. All user-facing copy must be written in English.

## 2. Architecture & Rules

### 2.1 CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`.
- Forbid `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing only CSS.

### 2.2 CSS Variables & Theme Tokens
Store all visual tokens inside `:root` (and theme classes) using CSS variables. Required tokens:

**Colors:**
- `--color-collective-navy: #0c2764` (primary headings, primary CTA fill, brand mark, active nav)
- `--color-inkwell: #0f172b` (primary body text, high-emphasis copy, button text on light backgrounds)
- `--color-slate-ink: #1d293d` (secondary headings, icon strokes)
- `--color-pencil-graphite: #314158` (tertiary headings, supporting labels)
- `--color-muted-slate: #45556c` (secondary body text, captions)
- `--color-distant-mist: #62748e` (muted helper text, secondary icons, tertiary links)
- `--color-frost-border: #e2e8f0` (hairline borders, card outlines, input borders, dividers)
- `--color-silver-whisper: #c3c6cb` (placeholder text, disabled chrome, decorative dividers)
- `--color-paper-white: #ffffff` (page canvas, card surfaces, button fills, inputs)
- `--color-cloud-mist: #f1f5f9` (subtle elevated surface for nested elements or alternate bands)
- `--color-success-green: #16a34a` (soft green tint for approved status badges — low saturation)
- `--color-success-green-light: #dcfce7` (very light green tint background for approved badges)
- `--color-warning-amber: #d97706` (soft amber for pending status badges)
- `--color-warning-amber-light: #fef3c7` (soft amber tint background for pending badges)
- `--color-error-red: #dc2626` (muted red for reject actions and error states)

**Contrast pairing:** Every light background token must pair with a dark text token, and every dark background token must pair with a light text token. Enforce this for every theme.

**Light mode background:** Use `#ffffff` (Paper White) as the page canvas — do not default to pure white elsewhere; where a near-white is needed use `#fefefe`.

**Border radius & shadows:**
- `--radius-sm: 8px`
- `--radius-md: 12px`
- `--radius-lg: 16px`
- `--shadow-sm: 0 1px 2px rgba(0,0,0,0.05)`
- `--shadow-md: rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px`

**Spacing & transitions:**
- `--spacing-gap: 16px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Elevation/stacking:**
- `--z-dropdown: 100`
- `--z-modal: 200`
- `--z-toast: 300`

**Typography:**
- `--font-base: 'Inter', sans-serif`
- Type scale tokens: `--text-caption: 14px`, `--text-body-sm: 16px`, `--text-body: 18px`, `--text-subheading: 20px`, `--text-heading-sm: 32px`, `--text-heading: 40px`, `--text-heading-lg: 60px`, `--text-display: 72px`

### 2.3 Mandatory Dark Mode Support
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background and text CSS variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.
- In dark mode, maintain the same contrast pairing rules: light backgrounds pair with dark text, dark backgrounds pair with light text. Adapt the navy accent and neutral scale to remain legible and harmonious.

### 2.4 Flexbox Layout & Mobile-First Alignment
- Build all layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- All flex layouts must be mobile-responsive out of the box (convert rows to columns on smaller viewports). Prevent horizontal scrolling.

### 2.5 Tailwind CSS Integration
- Use Tailwind CSS (via CDN or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons (Google Fonts Mandatory)
- Include Google Font `<link>` or `@import` for Inter with weights 400, 500, 600, 700, 800. Bind to `--font-base`.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.
- Apply OpenType features: `"calt" on, "rlig" on` (default contextual alternates and ligatures).
- Letter spacing: `-0.025em` across all sizes (tightened tracking from 14px upward).
- Line heights: 1.00–1.71 depending on role.

## 3. Component Specifications

### 3.1 Top Navigation Bar
- White background, 1px Frost Border bottom.
- Left: brand mark (navy 'C' logomark + fictional wordmark in Inkwell, 16px weight 600).
- Center: nav links in Inkwell at 16px weight 500, with chevron-down icons on dropdowns (Material Symbols).
- Right: 'Log In' as ghost text button, 'Sign Up' as filled navy button (white text, 12px radius, 8px 16px padding, 16px weight 600).
- Sticky positioning. Include theme toggle button.
- Mobile: collapse to hamburger menu with accessible toggle.

### 3.2 Hero Section
- White background, centered text stack.
- Headline: Inter 60–72px weight 800, color Collective Navy, letter-spacing -0.025em, line-height 1.00–1.20, centered, two lines. Sits directly on white with no background panel.
- Subtext: Inter 18px weight 400, color Pencil Graphite, line-height 1.63, max-width 640px, centered.
- Below: composition of UI cards (expense list on left, balance summary on right) overlapping with a watercolor-style illustration. Use a CSS placeholder or decorative element for the illustration (no real image files required — use a styled div with soft pink/gray gradient washes and organic border-radius to evoke the watercolor feel).
- CTA buttons: primary filled navy + secondary ghost.

### 3.3 Features Section (3 Cards)
- 3-column grid on desktop, single column on mobile.
- Each card: white surface, 1px Frost Border, 12px radius, 32px padding, subtle shadow.
- Card content: Material Symbol icon (in navy or distant mist), heading (Slate Ink, 20px weight 600), body text (Muted Slate, 16px weight 400).
- Hover: elevation shift (`transform: translateY(-2px)`) with shadow transition.
- Focus-within: highlight card border.

### 3.4 How It Works (3 Steps)
- 3-step horizontal layout on desktop, vertical on mobile.
- Each step: number badge (navy circle with white number), heading, description.
- Connecting line or arrow between steps (hairline border color).
- Use Material Symbols for step icons.

### 3.5 Testimonials
- 2–3 testimonial cards in a grid.
- Each card: white surface, 1px border, 12px radius, 32px padding.
- Content: quote text (Inkwell, 18px weight 400, italic optional), author name (Inkwell, 16px weight 600), author title/company (Distant Mist, 14px weight 400), circular avatar placeholder.
- Subtle shadow on cards.

### 3.6 Pricing (3 Tiers)
- 3-column card layout, middle tier highlighted (navy border or subtle elevation).
- Each tier: plan name (heading), price (display size, navy), billing period (muted), feature list with check icons (Material Symbols), CTA button.
- Highlighted tier: navy border 2px, slightly elevated shadow, "Most Popular" badge (status pill style).
- Buttons: filled navy for highlighted tier, outlined for others.

### 3.7 FAQ
- Accordion-style FAQ items.
- Each item: question (Inkwell, 18px weight 600) with chevron-down icon, answer (Muted Slate, 16px weight 400) revealed on click.
- 1px Frost Border between items.
- Smooth CSS transition for expand/collapse.
- Keyboard accessible (Enter/Space to toggle, aria-expanded).

### 3.8 Final CTA
- Centered text block on white canvas.
- Headline (navy, 40px weight 700), subtext (Pencil Graphite, 18px weight 400), primary CTA button.
- Optional: subtle Cloud Mist background band for visual separation.

### 3.9 Footer
- White background with 1px Frost Border top.
- Multi-column layout: brand column (logo + tagline), link columns (Product, Company, Resources, Legal), social icons (Material Symbols).
- Bottom bar: copyright text (Distant Mist, 14px), secondary links.
- Mobile: stack columns vertically.

### 3.10 Button Component (All States)
Command the coding AI to style all button states via CSS classes:
- **Default:** Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- **Hover:** Visual shift (brightness/shadow) with `cursor: pointer`.
- **Focus:** Distinct focus ring using CSS variables (`outline` / `box-shadow`) for keyboard navigation.
- **Active/Pressed:** Click transform feedback (`transform: scale(0.97)`).
- **Loading:** Disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting button dimensions.
- **Disabled:** Reduced opacity (`opacity: 0.5`), greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback state styles driven by `--color-success-green` or `--color-error-red`.

Button variants: `.btn-primary` (filled navy), `.btn-ghost` (transparent, Inkwell text), `.btn-outline` (white fill, Frost Border), `.btn-danger` (visually distinct in both light and dark themes).

### 3.11 Card Component (All States)
- **Default:** Flexible Flexbox layout, styled with subtle borders and elevation using `--color-paper-white` and CSS variables.
- **Hover:** Elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- **Focus-within:** Highlights card borders when a child link/button receives focus.
- **Loading (Skeleton):** Shimmer animation styling defined in CSS to prevent layout jumps.
- **Empty State:** Structured fallback layout featuring a Google Icon and clear guidance text.

### 3.12 Form & Input Requirements (if any inputs appear)
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, and dedicated error feedback container.
- All inputs: 12px radius, Frost Border, Inkwell text, Distant Mist placeholder.

### 3.13 Status Pill Badge
- 12px radius, small padding ~2px 8px, Inter 12px weight 600, uppercase, tight letter-spacing.
- 'APPROVED': very light green tint background with darker green text.
- 'PENDING': soft amber tint with amber text.
- Low-saturation washes only.

### 3.14 Expense Approval Card (Hero Composition)
- White surface, 1px Frost Border, 12px radius, 32px padding.
- Left: 32px circular avatar, expense title (Inkwell, 16px weight 600), category metadata (Muted Slate, 14px weight 400), timestamp (Distant Mist).
- Right: amount (Inkwell, 16px weight 600), currency subtitle, status pill.
- When pending: Approve/Reject button group.
- Subtle card shadow.

### 3.15 Balance Summary Card (Hero Composition)
- White surface, 1px Frost Border, 12px radius, 32px padding.
- Section labels: Muted Slate, 14px weight 500.
- Values: Inkwell, 32px weight 700, with USD currency in lighter weight beside.
- Stack rows with 16–24px vertical gaps.
- No charts or gradients — typographic hierarchy only.

### 3.16 Modal / Popup Requirements (if any modals appear)
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: Centered flex container (`align-items: center`), backdrop overlay, Material Symbol close button, keyboard focus trapping, close via Esc or overlay click.

## 4. Core UX & Micro-Interaction Rules

- **Responsive by default:** Fluid sizing and responsive breakpoints without horizontal overflow. Mobile-first approach.
- **Smooth animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- **Accessibility (a11y):** Sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Require semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability (no mouse-only interactions), and `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- **Mandatory visual feedback:** Every user click, hover, or submission must trigger a visible state change.
- **Destructive actions:** `.btn-danger` or delete actions must be visually distinct in both light and dark themes.
- **Reduced motion:** Respect `prefers-reduced-motion: reduce` by disabling or minimizing animations.

## 5. Deliverables

- **File structure:** Separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference.
- **Naming convention:** Enforce BEM naming convention across the entire deliverable — never mix conventions.
- **No unrequested placeholders:** Prohibit lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content was genuinely left unspecified. Since this is a landing page, generate realistic fictional copy for all sections.
- **Class naming:** Use BEM (e.g., `.hero__headline`, `.card--highlighted`, `.btn--primary`).

## 6. Tonal Discipline

- Collective Navy (`#0c2764`) is the only saturated hue. It must earn its placement — headlines, brand mark, primary CTA fill, active nav.
- Every other element lives in the neutral scale from Frost Border (`#e2e8f0`) through Distant Mist (`#62748e`) to Inkwell (`#0f172b`).
- Status badges introduce muted tints (soft green for approved, soft amber for pending) — the only departures from grayscale, and only at small badge scale.
- Any design that adds a new saturated color should be questioned.

## 7. Do's and Don'ts

**Do:**
- Use `#0c2764` as the only saturated color — for headlines, brand mark, and primary CTA fill.
- Set headlines at 60–72px weight 800 with -0.025em letter-spacing.
- Separate cards with 1px `#e2e8f0` borders and the standard card shadow; no multiple shadow layers.
- Apply 12px radius consistently to buttons, cards, inputs, and badges.
- Use the full Inter weight range (400–800) for hierarchy rather than introducing a second typeface.
- Pad cards with 32px and stack section content with 48–80px vertical gaps.
- Keep body text in `#0f172b` (Inkwell), not pure black; muted helper copy in `#62748e` (Distant Mist).

**Don't:**
- Do not introduce additional saturated colors.
- Do not use heavy elevation (no deep shadows, no glow effects).
- Do not use a second display typeface.
- Do not place hero headlines on colored panels or gradient backgrounds — they sit directly on white.
- Do not use 4px or 8px radii on buttons and cards — 12px is the system standard.
- Do not use pure `#000000` for text; use `#0f172b`.
- Do not crowd the page with UI chrome — rely on whitespace and typographic weight.

## 8. Layout Specifications

- Page max-width: 1200px, centered on white canvas.
- Section gap: 48–80px vertical.
- Card padding: 32px.
- Element gap: 16px.
- Hero: centered text stack, oversized navy headline, subtext, then card composition with illustration.
- Below hero: alternating generous whitespace sections and card grids (2-column or 3-column).
- Navigation: single sticky top bar, logo left, links center, auth actions right.
- No sidebar navigation, no mega-menus, no dark sections — entire page lives on white (light mode) with dark mode support via theme tokens.

## 9. Imagery & Icons

- Watercolor illustration: use a CSS-styled placeholder (soft pink/gray gradient washes, organic border-radius, no defined container) to evoke the hand-drawn feel. No real image files required.
- Icons: Google Material Symbols, outlined, 1.5–2px stroke weight, in Inkwell or Distant Mist. Never filled or multicolored.
- Avatars: circular placeholders with initials or neutral gray backgrounds.

## 10. Responsive Breakpoints

- Mobile: < 640px — single column, stacked layouts, hamburger nav.
- Tablet: 640px–1024px — 2-column grids where applicable.
- Desktop: > 1024px — full 3-column grids, side-by-side compositions.
- Prevent horizontal scrolling at all breakpoints.
