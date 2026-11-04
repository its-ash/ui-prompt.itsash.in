# Landing Page Prompt — Artandcommerce Editorial Theme

You are a frontend coding agent. Build a complete, responsive landing page using the design system below. Output three separate files: `index.html`, `style.css`, and `script.js`. No inline `style="..."` attributes; all styling lives in `style.css`. Use Tailwind CSS via CDN plus custom CSS driven by CSS variables and `@layer`/`@apply`. Use Google Fonts for all typography and Google Material Symbols for any icons. Never use raw inline SVGs or local icon files.

## 1. Design Tokens & CSS Variables

Define all tokens in `:root` and override them under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text.

```css
:root {
  /* Colors */
  --color-ink: #000000;
  --color-bone: #e7e7e7;
  --color-charcoal: #121212;
  --bg-primary: #e7e7e7;
  --bg-secondary: #e7e7e7;
  --text-primary: #000000;
  --text-secondary: #121212;
  --text-success: #000000;
  --text-error: #000000;
  --border-default: #000000;
  --border-error: #000000;
  --border-success: #000000;

  /* Typography */
  --font-base: 'EB Garamond', 'Cormorant Garamond', serif;
  --font-ui: 'Inter', 'Helvetica Neue', sans-serif;

  /* Radius & Shadow — strictly zero */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --shadow-sm: none;
  --shadow-md: none;

  /* Spacing & Transitions */
  --spacing-gap: 12px;
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --ease-standard: ease;

  /* Elevation / Stacking */
  --z-dropdown: 100;
  --z-modal: 200;
  --z-toast: 300;
}
```

Dark mode overrides: `--bg-primary: #121212; --bg-secondary: #000000; --text-primary: #e7e7e7; --text-secondary: #e7e7e7; --border-default: #e7e7e7;` (and matching success/error tokens). Theme switching must be seamless with no HTML restructuring. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed`/`aria-label`.

Spacing scale tokens: `--spacing-4: 4px; --spacing-8: 8px; --spacing-12: 12px; --spacing-16: 16px; --spacing-24: 24px; --spacing-32: 32px; --spacing-36: 36px; --spacing-44: 44px; --spacing-60: 60px; --spacing-80: 80px; --spacing-160: 160px;`.

Typography tokens: `--text-micro: 10px; --text-body: 16px; --text-subheading: 20px; --text-display: 56px;`. Use letter-spacing `-0.018em` for Garamond display/body, `0.027em`–`0.038em` for uppercase Grotesk UI.

## 2. Typography & Icons

- Load Google Fonts: EB Garamond (weight 400) and Inter (weights 400, 500, 700). Bind serif to `--font-base`, sans to `--font-ui`.
- Use Google Material Symbols for any icons (e.g., search, close, chevron). No inline SVGs.

## 3. Layout & Flexbox Rules

- Mobile-first, responsive, no horizontal overflow.
- Every flex container defaults to `align-items: center` unless explicitly justified.
- Max container width: 1440px, centered.
- Section gap: 44px. Element gap: 12px. Card padding: 16px.
- All border-radius: 0px. No box-shadows anywhere. Elevation via whitespace only.

## 4. Color & Style Constraints

- Use ONLY `#000000`, `#e7e7e7`, and `#121212`. No other colors, tints, accents, gradients, or status hues.
- No Garamond bold or italic — weight 400 only.
- All UI labels, nav, and metadata in uppercase sans with positive tracking.
- No centering of body text or nav; layout is flush-left, content anchored to left edge.
- Display headlines: Garamond 400 at 56px, line-height 1.10, letter-spacing -1.0px.
- Body: Garamond 400 at 16px, line-height 1.30, letter-spacing -0.29px.
- Subheading/intro: Garamond 400 at 20px, line-height 1.30, letter-spacing -0.36px.
- UI labels/nav: sans 500 uppercase at 10px, letter-spacing 0.033em.
- Section labels: sans 700 uppercase at 8px, letter-spacing 0.038em.
- Links/nav hover: 1px solid ink bottom border only. No fills, no color shifts.

## 5. Component Requirements

Invent a fictional brand name, product, and copy. Never use "art+commerce", "Artandcommerce", or any real brand/trademark. Write all user-facing copy in English.

### Header / Nav
- Full-width bone background, ~44px tall, 16px horizontal padding.
- Fictional logo in Garamond 400 at 16px, ink, flush left.
- Nav items in sans 500 uppercase 10px, tracking 0.033em, flush right, 16–23px gaps.
- Search icon (Material Symbols) at far right.
- No border-bottom, no shadow. Header dissolves into canvas.
- Hover: 1px ink bottom border on links.

### Hero (Full-Bleed Editorial Image)
- Edge-to-edge image, no margin, padding, radius, border, shadow.
- No text overlay. Image IS the hero.
- Below image: caption row spanning full width. Left: artist credit in Garamond 400 16px ink. Right: project tag in sans 500 uppercase 10px ink, tracking 0.033em. 44px gap above caption.

### Features (3 Cards)
- Three magazine-cover-style cards: single image each, centered, no border/shadow/radius, transparent container.
- 44px top/bottom padding. No text overlays on cards.
- Below each card: a short Garamond 16px caption and a sans 10px uppercase label.

### How It Works (3 Steps)
- Three steps in a vertical or horizontal flex layout (mobile: column).
- Each step: a section label (sans 700 uppercase 8px), a display or subheading title (Garamond 56px or 20px), and a body paragraph (Garamond 16px).
- 44px gaps between steps. Flush left.

### Testimonials
- Single testimonial block: quote in Garamond 20px, attribution in sans 10px uppercase with tracking 0.033em.
- No card chrome, no borders. Whitespace separates.

### Pricing (3 Tiers)
- Three columns on desktop, stacked on mobile.
- Each tier: section label (uppercase), price in Garamond 56px, feature list in Garamond 16px, CTA button.
- Buttons: flex, align-items center, justify-content center, gap 0.5rem, min 44x44px touch target, 0px radius, ink border 1px, bone background, ink text. Hover: bottom border emphasis or brightness shift. Focus: visible ring via CSS variables. Active: scale(0.97). Disabled: opacity 0.5, cursor not-allowed. Loading: spinner without dimension distortion.
- No filled CTA color — monochrome only.

### FAQ
- Accordion-style: question in sans 500 uppercase 10px or Garamond 16px, answer in Garamond 16px.
- Expand/collapse via CSS transitions. Keyboard accessible, aria-expanded.

### Final CTA
- Display headline (Garamond 56px) + short body + button. Centered or flush-left. 44px+ breathing room.

### Footer
- Full-width bone background, no top border/shadow.
- Single row: Garamond/Grotesk pairing. Small uppercase metadata (copyright, legal, social) with 12–16px gaps. Minimal.

## 6. Component States (Mandatory)

Style via CSS classes for: buttons (default, hover, focus, active, loading, disabled, success/error), cards (default, hover elevation shift translateY(-2px), focus-within border highlight, skeleton shimmer, empty state with icon + text), inputs (empty, focused ring, filled, valid, invalid with error text/icon, disabled, read-only), modal (opening/open/loading/success/error/closing animated). Even if not all components appear, define the classes.

## 7. Accessibility & UX

- Semantic HTML5, correct ARIA roles/labels on custom widgets.
- Logical DOM/focus order, full keyboard operability.
- `aria-live` regions for dynamic feedback (form errors, toasts, loading).
- Sufficient contrast in both light and dark modes.
- Never rely solely on color for state.
- Respect `prefers-reduced-motion`.
- Smooth CSS transitions on all state changes.
- Destructive actions visually distinct in both themes.

## 8. Deliverables

- `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM) across the entire deliverable.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where content genuinely unspecified.
- Theme toggle with localStorage persistence and prefers-color-scheme fallback.

Generate the complete landing page now. Output only the three files' contents with clear file markers. No preamble.
