# Landing Page Prompt — "Made With Gsap" Editorial Ink Theme

## 1. Task
Build a complete, responsive landing page from scratch. The visual style is an editorial ink-on-warm-concrete aesthetic: near-monochrome canvas with a single vivid lime accent, architectural display typography, nearly-sharp radii, and hard borders (no shadows, no gradients). Invent a fictional brand name, product, and copy — never use the real brand name "Made With Gsap", its logo, trademarks, or product names anywhere in the page.

## 2. File Structure & Architecture
- Deliver three separate files: `index.html`, `style.css`, `script.js`.
- No inline `style="..."` attributes anywhere in HTML. All styling lives in `style.css` via class/ID selectors.
- Use Tailwind CSS (via CDN) for utility classes, but all utilities must map back to CSS variables or reusable semantic classes (`.btn`, `.card`, `.input-group`). Prefer `@layer` / `@apply` in `style.css` where appropriate.
- Single deferred `<script src="script.js" defer>` entry point in `<head>`. No inline `<script>` blocks.
- Enforce one consistent naming convention (BEM) across all classes. Never mix conventions.

## 3. CSS Variables & Theme Tokens
Define all tokens in `:root` (light theme) and under `@media (prefers-color-scheme: dark)` and/or `.dark` class:

**Colors:**
- `--color-lime-voltage: #c9fe6e;`
- `--color-concrete: #f1f1f1;`
- `--color-ink: #121212;`
- `--color-charcoal-edge: #252525;`
- `--color-fog: #777777;`
- `--color-graphite: #1a1a1a;`
- `--color-paper: #ffffff;`
- `--bg-primary: var(--color-concrete);`
- `--bg-secondary: var(--color-paper);`
- `--text-primary: var(--color-ink);`
- `--text-secondary: var(--color-fog);`
- `--text-success: #2e7d32;`
- `--text-error: #c62828;`
- `--border-default: var(--color-ink);`
- `--border-error: var(--color-charcoal-edge);`
- `--border-success: var(--color-lime-voltage);`

**Contrast pairing:** In dark mode, swap so dark backgrounds pair with light text and vice versa. Light background tokens must pair with dark text tokens in light mode; dark background tokens must pair with light text tokens in dark mode.

**Light mode background:** Use Concrete `#f1f1f1`, not pure white. Where a white/near-white is needed, use `#fefefe` instead of `#ffffff`.

**Radius & Shadows:**
- `--radius-sm: 2px;`
- `--radius-md: 8px;`
- `--radius-lg: 12px;`
- `--shadow-sm: none;` (system avoids shadows)
- `--shadow-md: none;`

**Spacing & Transitions:**
- `--spacing-gap: 16px;`
- `--transition-fast: 150ms;`
- `--transition-normal: 250ms;`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);`

**Elevation/Stacking:**
- `--z-dropdown: 100;`
- `--z-modal: 200;`
- `--z-toast: 300;`

## 4. Dark Mode
- Implement dark mode via `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`.
- Theme variables must switch seamlessly without HTML restructuring.
- Persist user choice in `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed` and `aria-label`.

## 5. Typography & Icons
- Load Google Fonts: Inter Tight (weights 500, 700) as substitute for LayGrotesk. Bind to `--font-base`.
- Use Google Material Symbols for all icons. No raw inline SVGs or local icon files.
- Apply OpenType features: `"cswh", "dlig", "hlig", "kern", "liga", "ss02"`.

**Type scale tokens:**
- `--text-caption: 12px;` (line-height 1.3, letter-spacing 0)
- `--text-body-sm: 18px;` (line-height 1.2)
- `--text-body: 22px;` (line-height 1.2)
- `--text-subheading: 40px;` (line-height 1.08, letter-spacing -0.4px)
- `--text-heading-sm: 44px;` (line-height 1.08, letter-spacing -0.44px)
- `--text-heading: 65px;` (line-height 1.0, letter-spacing -1.3px)
- `--text-heading-lg: 100px;` (line-height 0.9, letter-spacing -3px)
- `--text-display: 250px;` (line-height 0.8, letter-spacing -10px)

Display sizes (65-250px) use weight 700 only. Body/UI use weight 500 at 18-22px. No weight 400 anywhere.

## 6. Layout & Flexbox
- All layout structures use Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-first: convert rows to columns on small viewports. No horizontal scrolling.
- Page max-width: 1440px, centered. Section gaps: 80-120px. Card padding: 24-32px. Element gap: 12-16px.

## 7. Component Specifications

### Header Navigation
- Concrete background, 1px Ink bottom border. Sticky, height ~64-72px.
- Left: brand wordmark (fictional name) at 22px weight 700, Ink.
- Center: nav links at 18px weight 500, Ink, 15-16px horizontal padding.
- Right: "Sign In" text link + lime CTA button.

### Hero Section
- Concrete canvas. Headline at 100px weight 700, Ink, line-height 0.90, letter-spacing -3px, left-aligned, 60% viewport width.
- Supporting paragraph at 22px weight 500, Fog, max-width 480px, positioned right or below.
- Lime CTA button: `#c9fe6e` fill, Ink text, 2px radius, 16px×10px padding, 12px inline arrow icon left of label.

### Features (3 Cards)
- 3-column grid on desktop, stacking on mobile.
- Each card: Concrete or Paper surface, 8px radius, 1px Ink border, 24-32px padding.
- Icon (Material Symbols, 24px, Ink or lime), heading at 44px weight 700, body at 18px weight 500 Fog.
- Hover: subtle border color shift to lime or charcoal. No shadows.

### How It Works (3 Steps)
- 3 steps in a row (stack on mobile), each with a large numeral (65-100px weight 700, Ink or lime), heading, and description.
- Connecting line or arrow between steps (1px Ink, no decoration).

### Testimonials
- 2-3 testimonial cards. Dark inverted surface (Ink `#121212`) for at least one card to alternate rhythm.
- Quote text at 22-40px weight 500, Paper/Concrete text. Author name at 18px weight 700, role at 12px uppercase Fog.

### Pricing (3 Tiers)
- 3 pricing cards side by side. Middle/featured tier has lime border (2px) and lime CTA.
- Price at 65-100px weight 700. Feature list with check icons (Material Symbols).
- Ghost outline button for non-featured tiers; lime filled for featured.

### FAQ
- Accordion-style. Each item: question at 22px weight 700, Ink; answer at 18px weight 500, Fog.
- Toggle via CSS/JS with smooth height transition. Chevron icon rotates on open.
- Use `aria-expanded`, `aria-controls`.

### Final CTA
- Full-bleed dark inverted section (Ink background). Headline at 65-100px weight 700, Paper text.
- Lime CTA button centered or left-aligned.

### Footer
- Concrete background, 1px Ink top border, 40-60px vertical padding.
- 3-4 column link grid. Column headers: 12px uppercase, Fog, weight 700. Links: 18px, Ink, weight 500, 12px row gap.
- Bottom row: copyright + small links.

## 8. Component State Requirements

### Button
- Default: flex, `align-items: center`, `justify-content: center`, gap 0.5rem, min 44×44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disable interactions, CSS spinner or animated Material Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary styles via `--text-success` / `--text-error`.

### Card
- Default: flex layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: `transform: translateY(-2px)` or border color shift.
- Focus-within: highlight border when child link/button focused.
- Loading (Skeleton): shimmer animation in CSS.
- Empty State: Google Icon + guidance text.

### Form & Input
- States: Empty, Focused (outline ring), Filled, Valid, Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, error feedback container.

### Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container, backdrop overlay, Material Icon close button, Esc/overlay click to close, focus trapping.

## 9. UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 10. Do's & Don'ts (Style)
- Use Inter Tight weight 700 at 65-250px for display headlines, line-height ≤ 1.00, negative letter-spacing scaled.
- Reserve Lime Voltage for primary CTAs and active accent borders — max 1-2 instances per viewport.
- Card radii 8-12px, button/link radii 2px. No pill shapes.
- Dark inverted sections for demos/features, seamless flow back to Concrete canvas.
- Concrete as page background, Ink for text/borders.
- Tilt demo cards -12° to +12° in overlapping fans for showcase sections.
- Body text 18-22px weight 500.
- No secondary chromatic colors. No box-shadows. No line-height above 1.08 for display. No center-aligned headlines. No radius above 12px. No gradients. No weight 400.

## 11. Copy Locale
All user-facing copy must be written in English.

## 12. Deliverable Notes
- No lorem-ipsum-only submissions where real copy is expected; placeholders allowed only where content was genuinely unspecified.
- Ensure the page is fully functional, accessible, and visually consistent with the editorial ink-on-concrete theme described above.
