# Coding AI Prompt: Featurebase-Style Dark Landing Page

## 1. Project Overview

Build a complete, responsive landing page for a fictional SaaS product using a dark, near-black visual theme inspired by a "violet-lit support console" aesthetic. The page must feel like a quiet, composed stage with luminous product workspaces emerging from the lower edge. Invent a fictional brand name, product name, and all copy — never use "Featurebase" or any real brand name, logo, trademark, or product name.

**Deliverables:** Separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference.

## 2. Strict Architecture Rules

### 2.1 CSS-First & Zero Inline CSS
- All styling must live in `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors only. HTML must remain semantic and agnostic of visual styling.
- One consistent class-naming convention (BEM) across the entire deliverable.

### 2.2 CSS Variables & Theme Tokens
Define all tokens in `:root` and under `.dark` / `@media (prefers-color-scheme: dark)`:

**Colors:**
- `--color-void-canvas: #050608`
- `--color-ink-surface: #0a0b0f`
- `--color-charcoal-panel: #0f1219`
- `--color-steel-panel: #151822`
- `--color-slate-edge: #1f1e2a`
- `--color-cloud-white: #ffffff`
- `--color-frost-text: #dee1ea`
- `--color-misted-slate: #b2b8cd`
- `--color-quiet-slate: #8f94a6`
- `--color-signal-violet: #7064f2`
- `--color-violet-atmosphere: linear-gradient(to right, rgba(145, 130, 248, 0.1), rgba(192, 132, 252, 0.1), rgba(145, 130, 248, 0.1))`
- `--color-slate-lift: linear-gradient(to top, rgba(93, 104, 144, 0.15), rgba(93, 104, 144, 0.1), rgba(0, 0, 0, 0))`

Map to semantic tokens: `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--primary`, `--secondary`.

Contrast pairing: light backgrounds pair with dark text tokens; dark backgrounds pair with light text tokens. Enforce for every theme.

Light mode background: use `#fefefe` where a white/near-white is needed (not `#ffffff`).

**Border Radius & Shadows:**
- `--radius-sm: 12px`, `--radius-md: 16px`, `--radius-lg: 24px`
- `--shadow-sm: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)`
- `--shadow-md: 0 0 0 1px rgba(0,0,0,0.4), 0 20px 25px -5px rgba(0,0,0,0.3), 0 8px 10px -6px rgba(0,0,0,0.3)`
- `--shadow-lg: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)`

**Spacing & Transitions:**
- `--spacing-gap: 16px`, `--transition-fast: 150ms`, `--transition-normal: 250ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Elevation/Stacking:**
- `--z-dropdown: 100`, `--z-modal: 1000`, `--z-toast: 2000`

**Typography:**
- `--font-base: 'Inter', Arial, sans-serif` (Google Fonts)
- Type scale tokens: `--text-caption`, `--text-nav`, `--text-body`, `--text-feature-heading`, `--text-lead`, `--text-section-heading`, `--text-display` with the specified sizes, weights, line heights, and letter spacings.

### 2.3 Mandatory Dark Mode
- Dark mode defined under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Theme switching via CSS variables only — no HTML restructuring.
- User choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Visible toggle control with correct `aria-pressed`/`aria-label`.

### 2.4 Flexbox Layout & Mobile-First
- All layouts use Flexbox (`display: flex`).
- Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive: rows convert to columns on small viewports. No horizontal scrolling.

### 2.5 Tailwind CSS Integration
Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply`). All utility classes map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons (Google Fonts Mandatory)
- Text: Google Font `<link>` for Inter (weights 400, 500, 600, 700), bound to `--font-base`.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 3. Component Specifications

### 3.1 Navigation Bar
- Transparent full-width bar over Void Canvas.
- Nav items: Inter 14px/500, 20px line height, Frost Text or Cloud White, 16px vertical / 24px horizontal padding, 0px radius.
- Header conversion button: `rgba(255,255,255,0.92)` fill, Charcoal Panel text, Inter 14px/600, 8px vertical / 16px horizontal padding, matching border, 12px radius.

### 3.2 Hero Section
- Centered dark hero on Void Canvas.
- Display heading: Inter 48px/500, 66px line height, -0.96px tracking, Cloud White.
- Lead: Frost Text, Inter 23px/400.
- Conversion button: `rgba(255,255,255,0.92)` fill, Charcoal Panel text, 12px radius.
- Paired conversion controls (primary white + outlined dark demo button).
- Outlined dark demo button: transparent fill, Cloud White/Frost Text label Inter 14px/500, 1px Slate Edge border, 12px vertical / 16px horizontal padding, 12px radius.
- Hiring announcement pill above heading: Ink Surface, 1px Slate Edge border, Inter 14px/500 muted text, 9999px radius, compact 6px–8px internal spacing. Low-contrast, not a white action.
- Product workspace visual rising from lower hero edge.

### 3.3 Product Workspace Frame
- Charcoal Panel, 16px radius, 1px Slate Edge border.
- Desktop content: left navigation rail, conversation list, central message stream, right details panel.
- Outer edge framed with restrained Signal Violet glow (`--color-violet-atmosphere`).
- Product conversation cards: Steel Panel or Charcoal Panel fills, 16px radius, 16px padding. Nested rows separated by 1px Slate Edge lines. Metadata in Quiet Slate. Selected avatars/status marks in Signal Violet.

### 3.4 Feature Section Cards
- `rgba(11,12,17,0.8)` over Void Canvas, 16px radius, compact shadow `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)`.
- Large editorial feature cards: 80px vertical padding, horizontal content aligned to page composition.
- Feature text block: heading Inter 36px/500, 40px line height, -0.72px tracking, Cloud White or `#f8f9fc`. Frost Text body copy. 16px separation from white action button.

### 3.5 Product Navigation Tabs
- Transparent dark-background tabs, Inter 16px/500, 24px line height.
- Active labels: Cloud White. Inactive: Misted Slate.
- 12px-radius tab containers, 12px by 16px padding where tab receives visible surface.

### 3.6 Partner Logo Strip
- Centered Frost Text caption above monochrome Cloud White and Misted Slate logos on Void Canvas.
- Logos unboxed, grayscale, generous empty black space. No card containers.

### 3.7 Floating Support Launcher
- 9999px Signal Violet circular control, Cloud White chat icon (Material Symbols).
- Lower-right page edge. Compact dark outline/shadow for separation from product screenshot.

### 3.8 Button Component (All States)
- Default: Flex layout, `align-items: center`, `justify-content: center`, `gap: 0.5rem`. Minimum 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disabled interactions, CSS spinner or animated Material Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success` / `--text-error`.

### 3.9 Card Component (All States)
- Default: Flexbox, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight borders when child link/button receives focus.
- Loading (Skeleton): CSS shimmer animation, no layout jumps.
- Empty State: Google Icon + clear guidance text.

### 3.10 Form & Input (All States)
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, dedicated error feedback container.

### 3.11 Modal/Popup (All States)
- States: Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
- Centered flex container (`align-items: center`), backdrop overlay, Material Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 4. Page Sections (in order)

1. **Navigation Bar** — transparent bar with logo (fictional), nav links, header conversion button, theme toggle.
2. **Hero** — hiring pill, display heading, lead paragraph, paired conversion buttons, product workspace visual rising from lower edge with violet glow.
3. **Product Navigation Tabs** — feature-category switcher above product demo.
4. **Features** — 3 feature cards. Each: feature heading (Inter 18px/600), body copy, product visual or icon. Use Dark Feature Section Card styling.
5. **How It Works** — 3 steps. Each: step number, heading, description, visual. Flex row on desktop, column on mobile.
6. **Testimonials** — 2-3 testimonial cards with quote, author name, role, avatar placeholder (Material Icon). Charcoal Panel cards with 16px radius.
7. **Pricing** — 3 tiers. Each: tier name, price, feature list, CTA button. Middle tier highlighted with Signal Violet border/accent. Use card styling.
8. **FAQ** — accordion-style. Each item: question (clickable), answer (expandable). Use Material Icons for expand/collapse. Flex layout.
9. **Final CTA** — centered heading, lead, conversion button. Void Canvas background with violet atmosphere wash.
10. **Footer** — secondary links in columns, copyright, social icons (Material Symbols). Frost Text / Misted Slate text on Void Canvas.

## 5. Core UX & Micro-Interaction Rules

- **Responsive by default:** Fluid sizing, responsive breakpoints, no horizontal overflow.
- **Smooth animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`). Respect `prefers-reduced-motion`.
- **Accessibility:** Sufficient contrast in both light and dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- **Mandatory visual feedback:** Every click, hover, submission triggers visible state change.
- **Destructive actions:** `.btn-danger` visually distinct in both themes.

## 6. Do's and Don'ts

**Do:**
- Use Void Canvas `#050608` as default page background; reserve Ink Surface through Steel Panel for nested layers.
- Set public nav and compact buttons in Inter 14px/500, 20px line height.
- Use Inter 48px/500 with -0.96px tracking for display; Inter 36px/500 with -0.72px for section headings.
- Use `rgba(255,255,255,0.92)` with Charcoal Panel text for filled public conversion buttons.
- Apply 12px radius to buttons/inputs, 16px to cards/product frames, 9999px to pills/circular launchers.
- Use 1px Slate Edge borders to divide dark product panes and outline dark secondary controls.
- Keep Signal Violet concentrated in logo marks, selected states, and soft product-demo illumination.

**Don't:**
- No bright colored filled conversion buttons; public filled actions remain `rgba(255,255,255,0.92)`.
- No radii below 12px for buttons or above 16px for product cards.
- No display headings in 600 or 700 weight; use Inter 500 at 48px or 36px.
- No Slate Edge separators replaced with light gray or white dividers.
- No partner logos as bordered cards; keep unboxed on Void Canvas.
- No Signal Violet spread across body text, full backgrounds, or every control.
- No heavy bright shadows; use supplied black shadow stacks only on floating panels and raised links.

## 7. Imagery & Visual Language

- Text-dominant, no lifestyle photography.
- Contained product screenshots: dark support-software interfaces, 16px rounded outer frames, fine blue-gray dividers, miniature avatars/icons, selective violet glow around outer edges or selected controls.
- Product visuals as explanatory evidence, occupying broad horizontal space beneath copy.
- Icons: small monochrome glyphs (Material Symbols), Signal Violet for brand mark, selected-state diamonds, floating chat launcher.

## 8. Layout

- Full-bleed Void Canvas composition.
- Slim top nav, centered hero stack, product workspace visual rising from lower hero edge.
- Opening screen: centered display heading, two-line lead, paired conversion controls, then large wide demo preceded by horizontal feature-category tab row.
- Subsequent sections: left-aligned 36px section heading + explanatory copy, then wide contained product screenshot below or alongside.
- Open black bands for centered social proof.
- Spacious at page scale; product visuals information-dense (multi-column app-shell grids).
- Circular support launcher persists at lower-right edge.

## 9. Output Requirements

- All user-facing copy in English.
- Invent a fictional brand name, product name, and all copy. Never use "Featurebase" or any real brand.
- No lorem-ipsum-only submissions; write real, plausible copy for all sections.
- File structure: `index.html`, `style.css`, `script.js`.
- BEM naming convention throughout.
- Include Google Fonts `<link>` for Inter and Material Symbols.
- Include dark mode toggle with localStorage persistence.
- Include FAQ accordion functionality in script.js.
- Include theme toggle functionality in script.js.
- No inline CSS. No inline SVGs. No local icon files.
