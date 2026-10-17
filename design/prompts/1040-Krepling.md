# Krepling-Style Landing Page — Coding AI Prompt

## 1. Project Overview

Build a complete, responsive landing page for a **fictional** SaaS product (invent a brand name, product name, and copy — never use "Krepling" or any real trademark). The visual style is a quiet white atelier: near-monochrome canvas with black text on white surfaces, a single violet accent (`#b154f9`) as the sole chromatic voice, generous whitespace, flat surfaces (no shadows), and rounded geometry (8px cards/buttons, 14px large containers, 30px hero-scale only). Decorative 3D objects are atmosphere only.

Deliverables: separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference. No inline CSS (`style="..."` forbidden). Use one consistent class-naming convention (BEM) throughout.

## 2. CSS-First Architecture & Tokens

All styling lives in `style.css`. Define all tokens in `:root`:

```css
:root {
  /* Colors */
  --color-bolt-violet: #b154f9;
  --color-ink-black: #000000;
  --color-paper-white: #ffffff;
  --color-mist-gray: #f1f1f1;
  --color-charcoal: #171717;
  --color-steel-gray: #6c6b6b;
  --color-fog-gray: #b3b3b3;

  /* Theme tokens (mapped for light/dark) */
  --primary: var(--color-bolt-violet);
  --secondary: var(--color-mist-gray);
  --bg-primary: #fefefe;
  --bg-secondary: var(--color-mist-gray);
  --text-primary: var(--color-ink-black);
  --text-secondary: var(--color-steel-gray);
  --text-success: #2e7d32;
  --text-error: #c62828;
  --border-default: var(--color-fog-gray);
  --border-error: var(--color-text-error);
  --border-success: var(--color-text-success);

  /* Radius & Shadows */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 30px;
  --shadow-sm: none;
  --shadow-md: none;

  /* Spacing */
  --spacing-gap: 8px;
  --spacing-4: 4px; --spacing-8: 8px; --spacing-12: 12px;
  --spacing-16: 16px; --spacing-20: 20px; --spacing-32: 32px;
  --spacing-48: 48px; --spacing-80: 80px; --spacing-96: 96px;
  --spacing-128: 128px; --spacing-192: 192px; --spacing-240: 240px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* Z-index */
  --z-dropdown: 100; --z-modal: 200; --z-toast: 300;

  /* Typography */
  --font-base: 'Inter', sans-serif;
  --text-caption: 16px;
  --text-body: 18px;
  --text-subheading: 24px;
  --text-heading-sm: 32px;
  --text-heading: 48px;
  --text-heading-lg: 64px;
  --text-display: 80px;
}
```

Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. In dark mode, invert: `--bg-primary` becomes `#171717`, `--text-primary` becomes `#ffffff`, `--bg-secondary` becomes `#2a2a2a`, etc. Maintain contrast pairing (light bg + dark text, dark bg + light text). Include a visible theme toggle with `aria-pressed`/`aria-label`, persisting choice via `localStorage` with fallback to `prefers-color-scheme`.

## 3. Typography & Icons

Use Google Fonts: import Inter (weight 400 only — the system ships weight 400 exclusively; never use 600/700). Bind to `--font-base`. Use Google Material Symbols for all icons. No inline SVGs or local icon files.

Type scale (weight 400 throughout):
- caption: 16px, line-height 1.3, letter-spacing 0.01em
- body: 18px, line-height 1.3, letter-spacing 0.01em
- subheading: 24px, line-height 1.2, letter-spacing 0.01em
- heading-sm: 32px, line-height 1.2, letter-spacing 0
- heading: 48px, line-height 1.2, letter-spacing -0.01em
- heading-lg: 64px, line-height 1.1, letter-spacing -0.01em
- display: 80px, line-height 1.1, letter-spacing -0.01em

## 4. Layout & Flexbox

- Mobile-first, flexbox-based layouts, `align-items: center` default on every flex container unless explicitly justified.
- Page max-width 1200px centered. Section gap 80px. Card padding 20px. Element gap 8px.
- No horizontal scrolling. Fluid sizing with responsive breakpoints.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.

## 5. Sections to Build

1. **Header/Nav**: White bg, 1px bottom border `#000000` at 10% opacity, ~21px vertical padding. Left: fictional wordmark. Center: nav links (Features, Pricing, Company, Resources) at 16px. Right: "Log in" ghost link + outlined violet "Get started" button (bg white, border 1.5px `#b154f9`, text `#b154f9`, radius 8px, padding 14px 20px).

2. **Hero**: Max-width 1200px centered. Left-aligned display headline 64–80px weight 400, `#000000`, letter-spacing -0.01em, line-height 1.1. Subtext 18–24px `#000000`, right-aligned or beside CTA. Filled violet CTA "Request a demo" below subtext (bg `#b154f9`, text white, radius 8px, padding 14px 20px). Floating pastel 3D decorative objects (coral/lavender/yellow cubes and spheres) in upper-right — decorative only, can be represented as styled placeholder divs with gradients (gradients allowed only inside decorative illustrations).

3. **Features**: 3 content cards. Each: bg white or `#f1f1f1`, 1px border `#b3b3b3`, radius 8px, padding 20px, no shadow. Title 24px, body 16px `#6c6b6b`. Include a small black icon in a rounded square tile (~32–40px) per card.

4. **How It Works**: 3 steps. Each step: number, title (24px), description (16px `#6c6b6b`). Connected visually with a simple line or numbered badges. No shadows.

5. **Testimonials**: 2–3 quote cards. bg white, 1px border `#b3b3b3`, radius 8px, padding 20px. Quote text 18px `#000000`, author name 16px `#6c6b6b`.

6. **Pricing**: 3 tiers. Each card: bg white, 1px border `#b3b3b3`, radius 8px, padding 20px. Highlighted tier (middle) gets a 1.5px `#b154f9` border. Price in display size, feature list with check icons (Material Symbols), CTA button (filled violet for highlighted, outlined for others).

7. **FAQ**: Centered max-width ~800px column of accordion rows. Full-width row, 1px bottom border `#000000`, padding 20px vertical. Question 16px weight 400 `#000000`, chevron icon right-aligned `#000000`. Expanded answer 16px `#6c6b6b`. Animate expand/collapse via CSS transitions. Use `aria-expanded`, `aria-controls`.

8. **Final CTA**: Centered block. Display headline 48–64px. Subtext 18px. Filled violet CTA button. bg `#f1f1f1` or white.

9. **Footer**: bg `#171717`, text/links `#ffffff`. Multi-column link grid. Generous vertical padding. Single dark inversion on the page.

## 6. Component State Requirements

**Buttons** (filled violet & outlined violet): default flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`), min touch target 44x44px. Hover: brightness/shadow shift, `cursor: pointer`. Focus: distinct focus ring via CSS variables. Active: `transform: scale(0.97)`. Loading: disabled interactions, CSS spinner, no dimension distortion. Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`. Success/Error temporary states via `--text-success`/`--text-error`.

**Cards**: hover elevation via `transform: translateY(-2px)` (border/shadow shift, no drop shadow). Focus-within highlights border. Skeleton loading shimmer (CSS). Empty state with Google Icon + guidance text.

**Forms/Inputs** (if any): empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

**Modal** (if used): opening/open/loading/success-error/closing animated via CSS. Centered flex, backdrop overlay, Google Icon close button, focus trapping, close via Esc/overlay click.

## 7. Accessibility & UX

- Sufficient contrast in both light/dark modes. Never rely solely on color for state.
- Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability.
- `aria-live` regions for dynamic feedback (form errors, toasts, loading).
- Every click/hover/submission triggers visible state change.
- Destructive actions visually distinct in both themes.
- Respect `prefers-reduced-motion`.

## 8. Do's and Don'ts (Style Enforcement)

**Do**: Use `#b154f9` exclusively for filled CTAs, outlined CTAs, active tab/link states. Build hierarchy with size and tracking, never bold weight. Use 8px radius for buttons/cards/small containers, 14px for larger panels, 30px only hero-scale. Communicate elevation with 1px borders or Mist Gray tint — never drop shadows. Let 3D decorative objects carry all color. Page canvas `#fefefe`/white, max-width 1200px, 80px section gaps. Reverse to `#171717` with white text only in footer.

**Don't**: No second brand color. No weight 600/700. No drop shadows on cards/buttons/modals. No 4px/12px radius on cards/buttons. No body text below 16px or above line-height 1.3. No UI text in decorative hues. No alternating dark/light section bands.

## 9. Output

Produce `index.html`, `style.css`, `script.js`. All copy must be in English for a fictional brand. No lorem-ipsum where real copy is implied — invent plausible product copy. No placeholders where content is specified. Ensure all CSS variable names, class names, file names are English/ASCII.
