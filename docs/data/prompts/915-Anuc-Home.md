# Landing Page Build Prompt — "Anuc Home" Editorial Gallery Theme (Style Reuse Only)

Build a complete, production-ready landing page that reuses the visual style of the "Anuc Home" editorial interior-design gallery. **Do not use the real brand name, logo, trademarks, or product names anywhere in the output.** Invent a fictional brand name, fictional product, and fictional copy throughout. The page must be a clean, magazine-like editorial gallery in warm white, with oversized serif headlines and monumental rounded geometric letterforms framing intimate interior photography.

## 1. File Structure & Architecture

Deliver exactly three files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere in the HTML. All styling must live in `style.css` targeted via class/ID selectors only. HTML must remain semantic, clean, and agnostic of visual styling so the look can change by editing CSS alone. Use one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.

## 2. CSS Variables & Theme Tokens

Store all visual tokens in `:root` and theme classes using CSS variables. Define at minimum:

- Colors: `--color-ink: #1a1a1e`, `--color-canvas: #f3f3f2`, `--color-paper: #ffffff`, `--color-ash: #d1d1d2`, `--color-stone: #c1c2bd`, `--color-linen: #e7e6e4`, `--color-graphite: #4d4942`, `--color-mist: #8d8d8f`, `--color-bronze: #9a682c`, `--color-slate: #4a626f`. Map these into the standard semantic tokens `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` so every theme pairing keeps contrast (light backgrounds with dark text, dark backgrounds with light text).
- Light mode background must not default to pure white; use the warm Canvas `#f3f3f2` as the page background. Where a white/near-white is needed, use `#fefefe` instead of `#ffffff` only if a pure white surface is unavoidable — otherwise use `--color-paper` `#ffffff` for elevated cards.
- Border radius & shadows: `--radius-sm: 0px`, `--radius-md: 0px`, `--radius-lg: 0px`, `--shadow-sm: none`, `--shadow-md: none`. The only rounded forms are the monumental logo shapes at `9999px`.
- Spacing & transitions: `--spacing-gap: 8px`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

## 3. Mandatory Dark Mode

Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Theme variables must switch seamlessly without HTML restructuring. Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label` state. In dark mode, maintain the warm editorial character with an inverted palette (dark warm canvas, light ink text) while keeping contrast pairings valid. Respect `prefers-reduced-motion`.

## 4. Typography & Icons

Use Google Fonts only. Load Instrument Sans (weights 400, 500) and Instrument Serif (weight 400) via `<link>` or `@import`, binding them to `--font-base` / `--font-instrument-sans` and `--font-instrument-serif`. Free substitutes: Inter for Instrument Sans, Cormorant Garamond for Instrument Serif. Use Google Material Symbols/Icons for all icons; forbid raw inline SVGs or local icon files.

Type scale tokens: `--text-caption: 15px`, `--text-body-lg: 18px`, `--text-subheading: 32px`, `--text-heading: 52px`, `--text-display: 74px`. Line heights: 1.20 for sans, 1.00–1.20 for serif.

## 5. Layout & Flexbox Rules

Build all layout structures with Flexbox. Every flex container must default to `align-items: center` unless explicitly justified. Mobile-first: convert rows to columns on small viewports, prevent horizontal scrolling. Page max-width 1440px; section gap 96px minimum; card padding 24px; element gap 8px. Base spacing unit 8px. Density compact in data sections, breathing in editorial sections.

## 6. Framework

Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply`) unless another framework is requested. All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Component & Section Specifications

Build the following sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

### Hero
Full-viewport multi-column image grid (4–5 columns) of interior photography tiles separated by 1–2px hairline borders in Ink. Overlay a monumental wordmark built from pure geometric shapes (full-radius arches and circles, 9999px radius) in Ink, roughly 250–300px tall, filling nearly the full viewport width. No captions, no overlays on photos. Top navigation: minimal horizontal bar, brand mark left (Instrument Sans 500, 15–16px, Ink), nav items right-aligned (Instrument Sans 400, 15–16px, uppercase, separated by bullet dots ·), no background fill, no border, no shadow, no sticky behavior.

### Features (3 cards)
Three article cards on Paper background, 24px padding, 0px radius, no border, no shadow. Each: date in Instrument Sans 400 15px Mist; title in Instrument Serif 400 32px Ink; category tag below with leading dot in Bronze or Slate, uppercase Instrument Sans 500 15px Ink. Cards stack vertically with 8–16px gaps. Precede section with small uppercase label (e.g., "FEATURES") Instrument Sans 500 15px Ink, then display headline Instrument Serif 400 52–74px Ink line-height 1.0–1.05.

### How It Works (3 steps)
Two-column editorial layout: wide left column with small uppercase label + oversized serif headline; right column with compact numbered list (3 steps) in Instrument Sans. Steps separated by generous whitespace, no dividers. Hairline divider between sections.

### Testimonials
Editorial section with small uppercase label + oversized serif headline left; right column with 2–3 testimonial blocks on Paper, 24px padding, 0px radius, no shadow. Quote in Instrument Serif 400 32px Ink; attribution in Instrument Sans 400 15px Mist.

### Pricing (3 tiers)
Three cards on Paper, 24px padding, 0px radius, no shadow. Each: tier name in Instrument Sans 500 15px uppercase Ink; price in Instrument Serif 400 52px Ink; feature list in Instrument Sans 400 15px Graphite; CTA ghost button. Middle tier may use Linen background for subtle emphasis. No chromatic fills.

### FAQ
Two-column editorial layout. Left: label + headline. Right: accordion list of questions. Each item: question in Instrument Sans 500 15px Ink; answer in Instrument Sans 400 15px Graphite. Expand/collapse via CSS transitions. Use Hairline Divider between items.

### Final CTA
Centered section on Canvas. Small uppercase label, display headline in Instrument Serif 400 52–74px Ink, supporting line in Instrument Sans 400 18px Graphite, ghost CTA button.

### Footer
Minimal footer on Canvas with secondary links in Instrument Sans 400 15px Graphite, separated by bullet dots. Hairline divider above. No background fill changes.

## 8. Component State Requirements

### Button (CTA — Outlined Ghost)
Rectangle, 0px radius, 1px solid Ink border, transparent background. Label Instrument Sans 500 15px uppercase Ink, letter-spacing 0.5px, followed by right-arrow icon (→). Padding 12px 24px. States: default, hover (border may thicken or background fills with Ink inverting text to white), focus (distinct focus ring via CSS variables), active (`transform: scale(0.97)`), loading (disabled interactions, CSS spinner without dimension distortion), disabled (opacity 0.5, greyscale, `cursor: not-allowed`), success/error temporary feedback via `--text-success`/`--text-error`. Minimum touch target 44x44px. Flex layout with `align-items: center; justify-content: center; gap: 0.5rem`.

### Card
Default: flexible Flexbox layout, subtle borders and elevation via `--bg-secondary` and CSS variables (here elevation via background stepping, no shadows). Hover: subtle transform `translateY(-2px)` or shadow shift (but no box-shadow per theme — use background/border change). Focus-within: highlight card borders when child link/button receives focus. Loading (skeleton): shimmer animation in CSS. Empty state: Google Icon + guidance text.

### Form & Input (if any)
States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Structure: flex container wrapping label, input, dedicated error feedback container.

### Modal (if any)
States: opening, open, loading, success/error, closing (CSS transitions). Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 9. Core UX & Micro-Interactions

Responsive by default, fluid sizing, no horizontal overflow. Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`. Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback. Mandatory visual feedback on every click/hover/submission. Destructive actions visually distinct in both themes.

## 10. Do's and Don'ts (Theme-Specific)

Do:
- Use Instrument Serif 400 at 52–74px for all display headlines.
- Set all radii to 0px for buttons, cards, tags; only logo shapes are rounded (9999px).
- Maintain warm off-white Canvas `#f3f3f2` as dominant background; never pure clinical white for full-page backgrounds.
- Use Ink `#1a1a1e` for all text and borders; let color do no work.
- Separate image grid cells with 1–2px hairline borders in Ink.
- Precede every display headline with a small uppercase Instrument Sans 500 label (15px).
- Apply 96px minimum vertical spacing between major sections.

Don't:
- No shadows, glows, or blur effects — elevation via background color stepping only (Canvas → Paper → Linen).
- No border-radius greater than 0px on any UI element except monumental logo shapes.
- No chromatic fills on buttons, backgrounds, or large UI surfaces — Bronze and Slate reserved for dot punctuation only.
- No Instrument Sans for display headlines.
- No body copy below 15px.
- No dense information without 96px section gap.
- No decorative gradients, textures, or background imagery behind text.

## 11. Copy & Content Rules

All user-facing copy must be in English. Invent a fictional brand name, fictional product, and fictional copy. Do not use the real brand name "Anuc Home", its logo, trademarks, or product names. Placeholders allowed only where content is genuinely unspecified. No lorem-ipsum-only submissions where real copy/labels were supplied by this spec — provide realistic invented English copy for all sections.

## 12. Dark Mode Toggle & Persistence

Implement a visible theme toggle with correct `aria-pressed` and `aria-label`. Persist choice in `localStorage`, fall back to `prefers-color-scheme` on first visit. All color tokens must switch seamlessly.

## 13. Deliverable Checklist

- `index.html`, `style.css`, `script.js` only.
- BEM naming convention throughout.
- No inline CSS.
- Google Fonts + Google Material Symbols only.
- Dark mode defined and toggleable.
- All sections present: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer.
- No horizontal scroll on mobile.
- All interactive states implemented for buttons and cards.
- Fictional brand name and copy only.
