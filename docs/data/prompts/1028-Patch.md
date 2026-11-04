# Landing Page Build Prompt — "Patch" Theme (Fictional Brand)

You are a senior frontend engineer. Build a complete, production-ready landing page as three separate files: `index.html`, `style.css`, and `script.js`. No inline CSS, no inline SVGs, no local icon files. Use Google Fonts for typography and Google Material Symbols for icons. Invent a fictional brand name, product, and all copy — never use the real brand name "Patch", its logo, trademarks, or product names anywhere in the deliverable.

---

## 1. CSS-First Architecture & Zero Inline CSS

- Keep all styling strictly inside `style.css`. Forbid `style="..."` attributes in HTML.
- Target all design via class/ID selectors only. HTML must stay semantic and styling-agnostic.
- Use one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.

## 2. CSS Variables & Theme Tokens (`:root`)

Define all tokens in `:root` using CSS variables. Contrast pairing: every light background token pairs with a dark text token, and every dark background token pairs with a light text token.

```css
:root {
  /* Colors */
  --color-electric-indigo: #1f00ff;
  --color-patch-orange: #ff622b;
  --color-pure-white: #ffffff;
  --color-fog-gray: #f2f2f2;
  --color-bone: #f8f8f8;
  --color-mist: #ececec;
  --color-gridline: #d3d3d3;
  --color-ink: #212121;

  /* Semantic aliases */
  --bg-primary: var(--color-pure-white);
  --bg-secondary: var(--color-fog-gray);
  --bg-tertiary: var(--color-bone);
  --bg-canvas: var(--color-electric-indigo);
  --text-primary: var(--color-ink);
  --text-secondary: var(--color-gridline);
  --text-on-canvas: var(--color-pure-white);
  --text-accent: var(--color-electric-indigo);
  --border-default: var(--color-electric-indigo);
  --border-on-canvas: var(--color-pure-white);
  --border-muted: var(--color-d3d3d3, #d3d3d3);
  --border-input: var(--color-mist);
  --accent-cta: var(--color-patch-orange);

  /* Radius & Shadows (no shadows used — borders carry weight) */
  --radius-sm: 5px;
  --radius-md: 5px;
  --radius-lg: 5px;
  --shadow-sm: none;
  --shadow-md: none;

  /* Spacing */
  --spacing-gap: 11px;
  --spacing-section: 80px;
  --spacing-card: 24px;

  /* Transitions */
  --transition-fast: 100ms ease;
  --transition-normal: 150ms ease;
  --ease-standard: ease;

  /* Elevation */
  --z-dropdown: 100;
  --z-modal: 200;
  --z-toast: 300;

  /* Typography */
  --font-display: 'Bebas Neue', 'Anton', sans-serif;
  --font-body: 'Archivo', 'Inter', sans-serif;
}
```

Light mode background must not default to pure white where a mood-appropriate tone fits; use `#fefefe` only where a near-white is needed. Here the canvas is pure white per spec — acceptable since it is the designated page canvas.

## 3. Mandatory Dark Mode

- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background/text variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed` and `aria-label`.

## 4. Flexbox & Mobile-First

- All layouts use Flexbox (`display: flex`). Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first: convert rows to columns on small viewports. Prevent horizontal scrolling.

## 5. Tailwind CSS Integration

Use Tailwind CSS via CDN with `@layer`/`@apply` directives in `style.css`. All utility classes map back to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).

## 6. Typography & Icons

- Text: Google Fonts — Bebas Neue (display substitute for PP Right) and Archivo (body). Bind to `--font-display` and `--font-body`.
- Icons: Google Material Symbols only. Forbid raw inline SVGs or local icon files.

## 7. Component Specifications

### Hero (Full-Bleed Indigo)
- Background `#1f00ff`, full viewport. Optional faint gridline overlay using `#d3d3d3` at 20% opacity.
- Headline in display font 800 at 90–133px, line-height 0.85, color `#ffffff`, uppercase, centered.
- Below headline: a white card (5px radius, 1px `#1f00ff` border) containing a centered black-line sketch illustration placeholder.
- Ghost white CTA button on the canvas.
- Square corner marker (01) in top-right.

### Features (3 Cards)
- White illustration cards: `#ffffff` bg, 1px `#1f00ff` border, 5px radius, padding 24–38px.
- Each card: centered sketch illustration placeholder, heading in display font 800 uppercase, body in Archivo 400.
- 3-column grid on `#f2f2f2` surface, collapsing to 1 column on mobile.

### How It Works (3 Steps)
- Numbered section header (01, 02, 03) in display font 800 ~29px, color `#1f00ff`.
- Each step: number marker in bordered square, heading, description. Left-aligned body copy.

### Testimonials
- Cards on `#f2f2f2` surface. Quote text in Archivo 400, author in Archivo 600 uppercase.
- Bordered cards, 5px radius, no shadows.

### Pricing (3 Tiers)
- Background `#ffffff`, 1px `#d3d3d3` border, 5px radius.
- Tier name in display font 800 24–29px uppercase, color `#1f00ff`.
- Commitment text in Archivo 400 14px, color `#212121`.
- Filled orange INQUIRE button (`#ff622b`, white text, Archivo 600 uppercase 13–14px, 5px radius).
- 3-column grid on `#f2f2f2` surface.

### FAQ
- Accordion-style rows with 1px borders. Question in Archivo 600, answer in Archivo 400.
- Toggle via JS (aria-expanded).

### Final CTA
- Full-bleed indigo section with headline and filled orange CTA button.

### Footer
- Secondary links in Archivo 400/600. Social proof icon cluster (small bordered squares with glyphs).

## 8. Button States (CSS classes)

- Default: flex, `align-items: center`, `justify-content: center`, gap 0.5rem, min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled, CSS spinner, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.

Filled orange CTA is the ONLY filled chromatic button. All others are outlined or text.

## 9. Card States

- Default: flex layout, subtle borders, elevation via `--bg-secondary`.
- Hover: `transform: translateY(-2px)` or shadow shift.
- Focus-within: border highlight.
- Loading (skeleton): shimmer animation.
- Empty state: Google Icon + guidance text.

## 10. Form & Input States

- Empty, Focused (outline ring), Filled, Valid, Invalid, Disabled, Read-only.
- Flex container wrapping label, input, error feedback container.
- Input: `#ffffff` bg, 1px `#ececec` border, 5px radius, padding 11px 14px, Archivo 400 14px `#212121`. Placeholder `#d3d3d3`. Focus: 1px `#1f00ff`.

## 11. Modal Requirements

- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, Esc/overlay close, focus trapping.

## 12. Core UX Rules

- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth CSS transitions on state changes, respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes, never rely solely on color, semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 13. Do's and Don'ts (enforce in generated code)

Do:
- Use `#1f00ff` as dominant chromatic — backgrounds, borders, headings, links.
- Use display font 800 with line-height 0.85–0.94 for all display headings. Never use display font for body copy.
- Use `#ff622b` exclusively for filled CTA buttons.
- Use 1px borders in `#1f00ff` (light) or `#ffffff` (indigo). No shadows.
- Use 5px border-radius consistently.
- Pair every section with a two-digit square corner marker.
- Use Archivo 400 body, 300 secondary, 600 uppercase labels/buttons.

Don't:
- No filled blue buttons.
- No display font below 21px.
- No drop shadows.
- No colors outside indigo/orange/white/grayscale.
- No radius beyond 5px.
- No weights 100–200.
- No centered body text (headlines may center; body always left-aligned).

## 14. Deliverables

- `index.html`, `style.css`, `script.js` — separate files. No inline `<script>` beyond single deferred entry-point reference.
- BEM naming convention throughout.
- No lorem-ipsum-only where real copy is expected; placeholders only where content genuinely unspecified.
- All user-facing copy in English.

## 15. Edit Mode (not applicable — from-scratch build)

This is a from-scratch build, so edit-mode constraints do not apply.

---

Build the complete landing page now following all rules above. Output only the three files with their contents, no preamble.
