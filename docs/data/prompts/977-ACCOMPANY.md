# Coding AI Prompt: ACCOMPANY-Themed Landing Page

Build a complete, responsive landing page using the following theme and architectural rules. All styling must live in a dedicated `style.css`; no inline `style="..."` attributes anywhere in the HTML. Use semantic HTML5, Flexbox for all layouts, and Google Fonts for typography/icons. Deliver three files: `index.html`, `style.css`, `script.js`.

## 1. Theme Identity & Fictional Brand

This style reference describes a real brand. **Do not use the real brand name "ACCOMPANY", its logo, trademarks, or product names anywhere in the page.** Invent a fictional brand name, product name, and all copy. Reuse only the visual style: monochrome editorial broadside on a bone-white canvas.

## 2. CSS-First Architecture & Zero Inline CSS

- Keep all styling strictly inside `style.css`. No inline CSS attributes.
- Target all design properties via class/ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable.

## 3. CSS Variables & Theme Tokens

Define all tokens in `:root`:

**Colors:**
- `--color-bone-white: #ffffff;` (page canvas, all surfaces)
- `--color-obsidian-ink: #000000;` (all text, headings, nav, borders, icons)
- `--color-carbon-edge: #0a0a0a;` (subtle structural dividers)

Map to system tokens: `--primary: #000000; --secondary: #0a0a0a; --bg-primary: #ffffff; --bg-secondary: #ffffff; --text-primary: #000000; --text-secondary: #000000; --text-success: #000000; --text-error: #000000; --border-default: #000000; --border-error: #000000; --border-success: #000000;`

**Typography:**
- `--font-items-light: 'Cormorant Garamond', serif;` (substitute for Items-Light)
- `--font-syndicatgroteskmedium: 'Inter', sans-serif;` (substitute for SyndicatGroteskMedium)
- `--font-arial: Arial, Helvetica, sans-serif;`
- `--font-base: var(--font-syndicatgroteskmedium);`

**Type Scale:**
- `--text-caption: 13px;` line-height 1.2, letter-spacing 0
- `--text-body-sm: 16px;` line-height 1.0, letter-spacing -0.48px
- `--text-subheading: 18px;` line-height 1.2, letter-spacing -0.54px
- `--text-heading: 44px;` line-height 1.1, letter-spacing -1.32px
- `--text-display: 80px;` line-height 0.9, letter-spacing -1.6px

**Spacing & Shapes:**
- `--spacing-10: 10px; --spacing-14: 14px; --spacing-21: 21px; --spacing-35: 35px; --spacing-71: 71px;`
- `--radius-sm: 0px; --radius-md: 0px; --radius-lg: 0px;`
- `--shadow-sm: none; --shadow-md: none;`
- `--spacing-gap: 10px; --transition-fast: 150ms ease; --transition-normal: 250ms ease; --ease-standard: ease;`
- `--z-dropdown: 10; --z-modal: 100; --z-toast: 1000;`

**Contrast Pairing:** Light backgrounds pair with dark text; dark backgrounds (none in this system) would pair with light text. Enforce for every theme.

**Light Mode Background:** Use `#ffffff` (bone canvas) as specified by the theme — this is the only surface.

## 4. Mandatory Dark Mode Support

Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. In dark mode, invert: background `#000000`, text `#ffffff`, borders `#ffffff`. Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Flexbox Layout & Mobile-First Alignment

- All flex containers must default to `align-items: center` unless explicitly justified.
- Mobile-responsive: convert rows to columns on smaller viewports. Prevent horizontal scrolling.
- Page max-width: 1200px centered container. Single-column vertical scroll layout.
- Section gap: 71px. Card padding: 14px. Element gap: 10px.

## 6. Framework & Typography

- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless another framework is requested.
- Google Fonts mandatory: include `<link>` tags for Cormorant Garamond (Light 300) and Inter (Medium 500). Bind to `--font-items-light` and `--font-syndicatgroteskmedium`.
- Icons: use Google Material Symbols. No raw inline SVGs or local icon files.

## 7. Component Specifications

### 7.1 Button Component
- Default: flex layout, `align-items: center`, `justify-content: center`, `gap: 0.5rem`. Min touch target 44x44px. 0px border-radius.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, CSS spinner or animated Google Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.
- **Note:** Buttons are typographic — no filled backgrounds, no pill shapes. Navigation/actions are text-based.

### 7.2 Card Component
- Default: flexbox layout, subtle borders, elevation via CSS variables.
- Hover: `transform: translateY(-2px)` or shadow shift.
- Focus-within: highlight borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS.
- Empty State: Google Icon + guidance text.
- **ACCOMPANY style:** 0px radius, no card background, no padding box. Image and text sit directly on white page. Hairline 1px #000000 border separates columns.

### 7.3 Form & Input
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, error feedback container.
- **Note:** No color-coded semantic states (no green/red). Use hairline border and typography to convey state.

### 7.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 8. Core UX & Micro-Interactions

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.
- **Zero elevation:** no shadows, no drop shadows, no box-shadows. Hierarchy via type scale, whitespace, hairline 1px borders.

## 9. Landing Page Sections

Build these sections in order:

1. **Top Navigation Bar:** Brand wordmark (fictional) top-left, nav items (WORK / ABOUT / SERVICES / CONTACT) top-right. SyndicatGroteskMedium 16px, uppercase, letter-spacing -0.48px, #000000. No background, no border, no shadow. Nav items separated by 35px gap. Sits directly on white canvas. Include theme toggle.

2. **Hero:** Editorial Display Headline — Items-Light (Cormorant Garamond Light substitute), 80px, line-height 0.90, letter-spacing -1.6px, #000000. Sets in 2-3 lines, left-aligned, wide column. No max-width on type itself. Below: Body Text Block (SyndicatGroteskMedium 16px, line-height 1.20, letter-spacing -0.48px) constrained to ~50-60ch. Then Hero Image Frame — large landscape image, 0px radius, no border/shadow, full-bleed. Arrow Navigation Controls (← →) at vertical center on left/right edges. Counter text '1/6' in 13px Arial below-left.

3. **Features (3 cards):** Project Card style — square/landscape image 0px radius, no border. Below image: uppercase Arial 13px label, then 2-3 line description in SyndicatGroteskMedium 16px. No card background, no padding box. Hairline 1px #000000 border separates columns. 3 equal columns with vertical hairline dividers.

4. **How It Works (3 steps):** Uppercase Section Label (Arial 13px) for step numbers, Body Text Block for descriptions. Separated by hairline dividers. 71px vertical gaps.

5. **Testimonials:** Body Text Block quotes, uppercase Arial 13px attribution. Hairline dividers between testimonials.

6. **Pricing (3 tiers):** Hairline-bordered columns, uppercase Arial 13px tier names, Items-Light 44px (heading scale) prices, Body Text Block feature lists. No filled buttons — typographic CTAs only.

7. **FAQ:** Uppercase Section Label questions, Body Text Block answers. Hairline dividers between items.

8. **Final CTA:** CTA Headline Block — Items-Light 80px, #000000, left-aligned, 2 lines. Pattern: 'We'd love to talk about how we can [fictional brand verb]. Get in touch.' Headline IS the call to action. No button.

9. **Footer:** Three columns — left: uppercase Arial 13px address; center: uppercase Arial 13px social links (EMAIL / INSTAGRAM / LINKEDIN / BEHANCE); right: uppercase Arial 13px 'BACK TO TOP'. All #000000 on #ffffff, no borders, 10px row gap. Include secondary links.

## 10. Deliverables

- File structure: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Naming: BEM convention throughout.
- No unrequested placeholders: use real invented copy/labels, not lorem ipsum, where content is implied by the section.
- All user-facing copy in English.

## 11. Edit Mode (N/A — from-scratch build)

This is a from-scratch build, so edit-mode constraints do not apply.

## 12. Do's and Don'ts (Enforce)

**Do:**
- Use #000000 on #ffffff exclusively — no accent colors, no grays, no tints for UI elements
- Set display headlines at 80px Items-Light (Cormorant Garamond Light) with line-height 0.90 and letter-spacing -1.6px
- Separate sections with 1px solid #000000 hairline rules, never background color changes or shadows
- Use uppercase Arial 13px for all project metadata, category tags, footer micro-labels
- Apply 0px border-radius to every image, card, button
- Give images generous breathing room: 71px section gap, 10-14px between image and caption
- Let the grotesque (SyndicatGroteskMedium/Inter Medium) handle everything below display scale

**Don't:**
- Never introduce color, gradients, or background tints — color lives only in photography
- Never use shadows, glows, or any simulated elevation
- Never use rounded corners on any element
- Never set body copy in the display serif — Items-Light reserved for 80px headlines only
- Never use color-coded semantic states (no green success, no red error) — use hairline border and typography
- Never fill buttons with backgrounds — navigation/actions are typographic
- Never crowd the layout — 71px vertical breathing room, images full edge-to-edge

## 13. Imagery

Photography is the sole carrier of color. Use placeholder images (via `https://placehold.co` or similar) with atmospheric, cinematic descriptions in alt text. Images full-bleed within frames, 0px radius, no masks, no rounded crops. Large editorial plates, not thumbnails. Image-to-text ratio is heavy.

## 14. Google Fonts Link

Include in `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Inter:wght@500&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet">
```

## 15. Accessibility Requirements

- Sufficient contrast in both light and dark modes.
- Never rely solely on color to communicate state.
- Semantic HTML5 elements, correct ARIA roles/labels on custom widgets.
- Logical DOM/focus order, full keyboard operability.
- `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- Theme toggle with `aria-pressed`/`aria-label`.

## 16. Responsive Breakpoints

- Mobile: single column, stacked layout, reduced headline sizes (display 48px on mobile).
- Tablet: 2-column where applicable.
- Desktop: full 3-column grids, 1200px max-width container.

Output only the three files. No preamble, no closing commentary.
