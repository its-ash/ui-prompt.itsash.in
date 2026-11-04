# Landing Page Prompt — Morphic-Style Dark Cinema Theme

## 1. Project Overview
Build a complete, responsive landing page for a fictional AI storytelling product. The visual style is a dark cinema canvas: pure black backgrounds, a tightly stepped neutral surface stack, a single vivid blue accent (#0075ff), and Inter typography with whisper-tight tracking on display sizes. Invent a fictional brand name, product name, tagline, and all copy. Do not use the real brand name "Morphic" or any of its trademarks, logos, or product names anywhere in the page.

## 2. File Structure & Conventions
- Deliver exactly three files: `index.html`, `style.css`, `script.js`.
- No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer></script>`).
- No inline CSS (`style="..."` is forbidden). All styling lives in `style.css` via class/ID selectors.
- Use one consistent class-naming convention (BEM) across the entire deliverable. Never mix conventions.
- No lorem-ipsum-only submissions. Write realistic, original copy for all sections (Hero, Features, How It Works, Testimonials, Pricing, FAQ, Final CTA, Footer).

## 3. CSS-First Architecture & Theme Tokens
Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:

**Colors:**
- `--color-pure-black: #000000`
- `--color-surface-one: #212121`
- `--color-surface-two: #292929`
- `--color-surface-three: #333333`
- `--color-paper-white: #ffffff`
- `--color-fog: #e5e7eb`
- `--color-mist: #f5f5f5`
- `--color-mid-gray: #999999`
- `--color-steel: #737373`
- `--color-graphite: #666666`
- `--color-slate: #525252`
- `--color-charcoal: #404040`
- `--color-electric-blue: #0075ff`

**Semantic aliases (required):**
- `--primary: var(--color-electric-blue)`
- `--secondary: var(--color-surface-two)`
- `--bg-primary: var(--color-pure-black)`
- `--bg-secondary: var(--color-surface-one)`
- `--text-primary: var(--color-paper-white)`
- `--text-secondary: var(--color-mid-gray)`
- `--text-success: #22c55e`
- `--text-error: #ef4444`
- `--border-default: var(--color-fog)`
- `--border-error: var(--text-error)`
- `--border-success: var(--text-success)`

**Contrast pairing:** Every light background token must pair with a dark text token and every dark background token with a light text token. Enforce this pairing in both themes.

**Light mode background:** Do not default to pure white; use `#fefefe` where a near-white is needed.

**Border radius & shadows:**
- `--radius-sm: 7px`
- `--radius-md: 10px`
- `--radius-lg: 16px`
- `--radius-xl: 24px`
- `--radius-pill: 100px`
- `--shadow-image: rgba(0,0,0,0.1) 0px 20px 25px -5px, rgba(0,0,0,0.1) 0px 8px 10px -6px`

**Spacing & transitions:**
- `--spacing-gap: 8px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Elevation/stacking:**
- `--z-dropdown: 100`
- `--z-modal: 200`
- `--z-toast: 300`

**Typography:**
- `--font-base: 'Inter', system-ui, sans-serif`
- Load Inter from Google Fonts (weights 400, 500, 600, 700) with OpenType features `"cv11", "ss01"`.
- Use Google Material Symbols/Icons for all icons. No raw inline SVGs or local icon files.

## 4. Mandatory Dark Mode Support
- Dark mode is the default visual theme, but a visible theme toggle must still be provided.
- Implement dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector on `<html>` or `<body>`.
- Theme switching must update background/text CSS variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- The toggle must have correct `aria-pressed` and `aria-label` state.
- Provide a light mode variant using the same token structure (light backgrounds, dark text) so the toggle is functional, even though the brand's primary identity is dark.

## 5. Flexbox Layout & Mobile-First Alignment
- Build all layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- All layouts must be mobile-responsive out of the box (rows convert to columns on small viewports). Prevent horizontal scrolling.
- Page max-width: 1280px, centered. Section gap: 96px. Card padding: 12px. Element gap: 8px.

## 6. Framework
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons
- Strictly use Google Fonts for text (Inter) and Google Material Symbols/Icons for icons.
- Include Google Font `<link>` or `@import` tags and bind to `--font-base`.
- Explicitly forbid raw inline SVGs or local icon files.

## 8. Component Design Specifications

### 8.1 Buttons
Style all states via CSS classes:
- **Default:** Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- **Hover:** Visual shift (brightness/shadow) with `cursor: pointer`.
- **Focus:** Distinct focus ring using CSS variables (`outline` / `box-shadow`) for keyboard navigation.
- **Active/Pressed:** Click transform feedback (`transform: scale(0.97)`).
- **Loading:** Disables interactions, prevents double-clicks, renders a CSS spinner or animated Google Icon without distorting button dimensions.
- **Disabled:** Reduced opacity (`opacity: 0.5`), greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback state styles driven by `--text-success` or `--text-error`.

Button variants:
- **Primary CTA:** Filled `#0075ff` background, `#ffffff` text at 14px Inter weight 500, 7px border-radius, 8px vertical padding, 16px horizontal padding. No border, no shadow.
- **Secondary:** Filled `#292929` background, `#ffffff` text, same sizing.
- **Outline:** Transparent background, 1px `#e5e7eb` border at low opacity, `#ffffff` text, same sizing.

### 8.2 Cards
- **Default:** Flexible Flexbox layout, styled with subtle borders and elevation using `--bg-secondary` and CSS variables.
- **Hover:** Elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- **Focus-within:** Highlights card borders when a child link/button receives focus.
- **Loading (Skeleton):** Shimmer animation styling defined in CSS to prevent layout jumps.
- **Empty State:** Structured fallback layout featuring a Google Icon and clear guidance text.

Card variants:
- **Image Showcase Card:** No visible background (image fills the card), 10px border-radius, no padding, optional soft shadow. Cards sit directly on the black canvas with no border.
- **Workflow Card:** `#212121` background, 10px border-radius, 1px `#e5e7eb` border at low opacity, 12px internal padding. Image fills top portion at 16px top-corner radius. Title at 14px Inter weight 600 `#ffffff`. Description at 12px Inter weight 400 `#999999`.

### 8.3 Forms & Inputs
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping a label, input field, and dedicated error feedback container.

### 8.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX Features: Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, support for closing via `Esc` or overlay clicks.

## 9. Core UX & Micro-Interaction Rules
- **Responsive by Default:** Fluid sizing and responsive breakpoints without horizontal overflow.
- **Smooth Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- **Accessibility (a11y):** Sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Require semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, and `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- **Mandatory Visual Feedback:** Every user click, hover, or submission must trigger a visible state change.
- **Destructive Actions:** Generic `.btn-danger` or delete actions must be visually distinct in both light and dark themes.

## 10. Landing Page Sections
Build all of the following sections with original fictional copy:

1. **Navigation Bar:** Transparent background over black canvas, fixed/sticky height ~64px. Logo (mark + wordmark) on left at 20px, center nav links at 14px Inter weight 500 `#ffffff`, right side has 'Log in' text link and an outline 'Start creating' button. No visible background, no border. Include theme toggle.

2. **Hero:** Two-column layout. Left: announcement bar with 'New' badge (filled `#0075ff`, `#ffffff` text 'New' at 12px Inter weight 500, 7px border-radius, 4px vertical padding, 8px horizontal padding) inline with body text at 12px Inter weight 400 `#999999`. Two-tone headline: Line 1 at 52px Inter weight 700 `#ffffff` letter-spacing -3.2px line-height 1.15; Line 2 at 52px Inter weight 700 `#999999` letter-spacing -3.2px line-height 1.15. No margin between lines. Right: body text + dual CTAs (primary blue + secondary dark).

3. **Features:** 3 cards. Use Workflow Card or Image Showcase Card style. Each with title and description.

4. **How It Works:** 3 steps with numbered indicators, titles, and descriptions.

5. **Testimonials:** Avatar stack (overlapping circular avatars at 20px diameter with 2px black border) alongside testimonial text at 12px Inter weight 400 `#999999`.

6. **Pricing:** 3 tiers with feature lists and CTA buttons.

7. **FAQ:** Accordion-style questions and answers.

8. **Final CTA:** Centered headline + primary button.

9. **Footer:** Secondary links, logo, copyright.

## 11. Two-Tone Headline System
Every major section uses a two-line headline device: Line 1 is the statement in `#ffffff`, Line 2 is the context in `#999999`. Both lines are the same size and weight (52px/700 for hero, 40px/700 for sections). The gray line should always be a descriptor or elaboration, never a repeat of line 1. Apply consistently across every section header.

## 12. Surface Elevation Strategy
Use four surface levels: `#000000` (canvas) → `#212121` (card) → `#292929` (raised) → `#333333` (floating). Never use in-between values. Cards on canvas use `#212121`, buttons on cards use `#292929`, highest-elevation elements use `#333333`.

## 13. Do's and Don'ts
**Do:**
- Use `#0075ff` exclusively for primary actions and the 'New' badge — never as decorative accent, background tint, or text color outside clickable elements.
- Apply the two-tone headline pattern for all section headers and hero.
- Use the surface stack for hierarchy; never introduce new shades between steps.
- Apply -0.0620em letter-spacing at 52px and -0.0480em at 40px for display text.
- Use 10px radius for image/showcase cards and 7px radius for buttons.
- Keep all borders at 1px `#e5e7eb` at very low opacity (10-20%).
- Use Inter weight 500 for all buttons, 700 for display, 400 for body.

**Don't:**
- Never use a second chromatic color.
- Never apply drop shadows to UI components — shadows reserved for image cards in showcase grid only.
- Never use `#ffffff` text for body copy — body text should be `#999999` or lower contrast.
- Never center-align body paragraphs — only headlines, CTAs, and hero text block are centered; body copy left-aligned.
- Never use border-radius values outside the defined scale (7px, 10px, 16px, 24px, 32px, 100px).
- Never place colored background behind text blocks — canvas must remain pure black.
- Never use gradient backgrounds.

## 14. Imagery & Layout
- Imagery is the star: AI-generated photographs/renders in tightly-cropped rectangular cards. Use placeholder images (via `https://picsum.photos` or similar) styled as generated content.
- Showcase grid: two rows, seven columns of borderless image cards spanning full content width.
- Workflow carousel: horizontally-scrolling card row (6+ cards) with left/right arrow controls and a 'See more' button.
- Product UI mockup section: centered single-column, mockup panel ~80% content width, `#212121` background, 16px border-radius, 1px `#e5e7eb` border at low opacity, 12px internal padding.
- Section gaps: 96px. Navigation: minimal top bar, no background fill, floating on black canvas.

## 15. Deliverable Requirements
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond single deferred entry-point.
- Enforce BEM naming convention consistently.
- All user-facing copy must be in English.
- Respect `prefers-reduced-motion` for all animations.
- Ensure full keyboard operability and correct ARIA roles/labels.

## 16. Exception Clause
If any requested style conflicts with a mandatory rule above, keep the mandatory rule and add a one-line explicit exception clause in the generated code comments rather than silently dropping the rule.
