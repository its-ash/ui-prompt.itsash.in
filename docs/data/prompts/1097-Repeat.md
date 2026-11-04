# Landing Page Build Prompt — "Repeat" Editorial Highlighter-on-Paper Theme

You are a senior front-end engineer. Build a complete, production-ready landing page using the "Repeat" visual system described below. Output three separate files: `index.html`, `style.css`, and `script.js`. Use a single deferred entry-point reference in `index.html` (no inline `<script>` blocks). Use BEM class naming consistently across the entire deliverable. Invent a fictional brand name, product, and copy — never use the real "Repeat" brand name, logo, trademarks, or product names anywhere in the page.

## 1. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML semantic, clean, and agnostic of visual styling so the look can change via CSS alone.

## 2. CSS Variables & Theme Tokens
Store all visual tokens in `:root` (and theme classes) using CSS variables:

Colors:
- `--color-ink: #171717`
- `--color-paper: #ffffff` (use `#fefefe` where a near-white is needed)
- `--color-notebook-cream: #ede7e2`
- `--color-olive-ink: #37352f`
- `--color-highlight-lime: #f5ff7d`
- `--color-lavender-wash: #e2d8ff`
- `--color-periwinkle-wash: #c3d5fc`
- `--bg-primary: var(--color-paper)`
- `--bg-secondary: var(--color-notebook-cream)`
- `--text-primary: var(--color-ink)`
- `--text-secondary: var(--color-olive-ink)`
- `--text-success` / `--text-error` (define sensible values)
- `--border-default: var(--color-ink)`
- `--border-error` / `--border-success` (define sensible values)

Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text — enforce for every theme.

Radius & shadows:
- `--radius-sm: 3px`, `--radius-md: 8px`, `--radius-lg: 20px`, `--radius-xl: 25px`, `--radius-pill: 100px`
- `--shadow-sm: rgba(0, 0, 0, 0.01) 0px 4px 8px -2px`

Spacing & transitions:
- `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-12: 12px`, `--spacing-16: 16px`, `--spacing-24: 24px`, `--spacing-40: 40px`, `--spacing-48: 48px`, `--spacing-96: 96px`
- `--spacing-gap: 4px`, `--transition-fast`, `--transition-normal`, `--ease-standard`

Elevation/stacking:
- `--z-dropdown`, `--z-modal`, `--z-toast`

## 3. Mandatory Dark Mode
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background and text variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit; include a visible toggle control with correct `aria-pressed`/`aria-label`.

## 4. Flexbox Layout & Mobile-First Alignment
- Build all layout structures with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- All flex layouts must be mobile-responsive (rows collapse to columns on small viewports); prevent horizontal scrolling.

## 5. Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested. Map utility classes back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 6. Typography & Icons (Google Fonts Mandatory)
- Include Google Font `<link>`/`@import` for Poppins (weights 400, 500, 600) and Montserrat (weights 400, 500, 600); bind to `--font-poppins` and `--font-montserrat`.
- Use Google Material Symbols/Icons only — no raw inline SVGs or local icon files.

## 7. Type Scale
- caption: 13px / 1.5
- body-sm: 15px / 1.6
- body: 17px / 1.5
- subheading: 20px / 1.3
- heading-sm: 24px / 1.2
- heading: 29px / 1.2
- heading-lg: 34px / 1.2
- display: 37px / 1.2
Bind these to `--text-*` tokens.

## 8. Component Design Specifications

### Top Navigation Bar
Horizontal bar: fictional wordmark left, product/blog links center, black 100px-radius pill CTA right. White/transparent background above hero. Nav links 15px Montserrat 500; CTA 15px Montserrat 600 white on Ink.

### Primary Filled CTA Button
Black pill, 100px radius, Ink background, Paper text, 15px Montserrat 600, ~12px 20px padding. Sits on white or cream surfaces only — never directly on lime. Implement all states: default, hover (brightness/shadow + cursor pointer), focus (distinct focus ring via CSS vars), active (transform: scale(0.97)), loading (disabled, CSS spinner, no dimension distortion), disabled (opacity 0.5, greyscale, not-allowed), success/error (driven by success/error tokens). Minimum 44x44px touch target.

### Hero Lime Section
Full-bleed Highlight Lime background. Headline 37px Poppins 600 uppercase in Ink, 1.20 leading. Subhead 17px Montserrat 400 in Ink. White CTA card centered below (card-on-color composition).

### Hero White CTA Card
Paper rounded card, 25px radius, thin 1px Ink border, generous ~40px vertical padding. Contains arrow glyph and secondary text link below.

### Secondary Text Link
Underlined Montserrat 15px 400 in Ink, no background/border. Always paired below the primary CTA card.

### Section Heading (Uppercase Poppins)
29–37px Poppins 600 uppercase in Ink, 1.20 line-height, left-aligned. Optional Ink underline divider below.

### Brand Product Card
25px-radius card with full-bleed product photo on solid colored background (teal/pink/cream). 20px image radius via overflow:hidden. No border, no shadow. Three-up grid.

### Testimonial Stat Card
25px-radius white card with thin Ink border, 15px padding. Structure: product image on top (rounded), then stat in 17–20px Poppins 600, then quote in Montserrat 400, then attribution.

### Logo Grid Tile
Olive Ink rounded square, 25–50px radius, 1:1 aspect ratio, customer brand wordmark in Paper at ~17px Montserrat 600 centered. Four-up row. No border/shadow.

### Feature Row
Two-column on Notebook Cream: text block left (headline + body + bullet list in 17px Montserrat), product screenshot right in 20px-radius frame. 40px vertical padding. Headline Poppins 600 uppercase or 24px sentence-case.

### Footer
Paper or Notebook Cream background, multi-column link grid 15px Montserrat 400 Ink, logo and copyright at bottom. Minimal.

### Card Component States (where interactive)
Default (flex layout, subtle borders, elevation via vars), hover (elevation/shadow shift or translateY(-2px)), focus-within (highlighted border on child focus), loading (skeleton shimmer defined in CSS), empty state (Google Icon + guidance text).

### Form & Input States
Empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, and dedicated error feedback container.

### Modal / Popup States
Opening, open, loading, success/error, closing (all CSS transitions). Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 9. Core UX & Micro-Interactions
- Responsive by default; fluid sizing and breakpoints; no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely on color alone; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- Use Highlight Lime only as full-bleed section background — never text, border, button fill, or icon.
- No colored buttons (blue/green/red) — actions are Ink-filled or Paper-outlined only.
- Shadows no heavier than `rgba(0,0,0,0.01)`; system is flat.
- Strictly Poppins + Montserrat — no third typeface.
- Minimum 20–25px radius on cards/images; no sharp corners.
- Never place primary CTA directly on lime — wrap in white card first.
- Headings line-height no looser than 1.30.
- No gradients — flat colors only; tonal shifts via solid surface swaps.

## 10. Page Sections to Build
Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 11. Deliverables
- Separate `index.html`, `style.css`, `script.js`.
- No inline `<script>` blocks beyond a single deferred entry-point reference.
- BEM naming consistently throughout.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content genuinely unspecified.
- All user-facing copy must be in English.

## 12. Edit Mode (if modifying existing markup)
- Never introduce new HTML tags, components, or DOM nodes; work only within existing structure.
- Define CSS classes only for elements already in markup.
- Do not write JS for form validation, popups/modals, or utility helpers; ask the user how they want it handled instead.
- If a style change requires added markup, stop and ask rather than silently inserting HTML.

Output only the finished prompt itself. No preamble, no closing commentary. Mirror the numbered-header structure above. If the request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause. All output in English. All CSS variable names, class names, and file names in English/ASCII.
