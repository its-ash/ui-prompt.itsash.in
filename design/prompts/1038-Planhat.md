# Planhat-Style Landing Page — Coding AI Prompt

## 1. Project Overview & Theme
Build a complete, responsive landing page for a **fictional** SaaS brand (invent a brand name, product name, and all copy — never use "Planhat" or any real trademark). The visual language is **cinematic monochrome editorial**: a dark, photographic hero fading into cool white space below, with hairline borders, large tightly-tracked display type, and generous whitespace. Chromatic color is absent from marketing surfaces except inside product-mockup illustrations (Ember Tag accent).

## 2. File Structure & Architecture
- Separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- All styling in `style.css` only — **zero inline `style="..."` attributes**. Use class/ID selectors exclusively.
- Naming convention: **BEM** consistently (`block__element--modifier`). Do not mix conventions.
- Use Tailwind CSS via CDN with `@layer`/`@apply` mapping utilities to CSS variables, or clean custom CSS driven by reusable classes (`.btn`, `.card`, `.input-group`).
- Semantic HTML5. Logical DOM/focus order. Full keyboard operability.

## 3. Design Tokens (`:root`)
Define all tokens as CSS variables. Light mode defaults; dark mode via `@media (prefers-color-scheme: dark)` and `.dark` class.

**Colors (light):**
- `--color-obsidian: #000000`
- `--color-paper-white: #fefefe` (use #fefefe, not #ffffff, where near-white needed)
- `--color-deep-ink: #121211`
- `--color-graphite: #575551`
- `--color-warm-stone: #958d7e`
- `--color-ember-tag: #e8552b`
- `--bg-primary: #ffffff`
- `--bg-secondary: #f5f5f3`
- `--bg-mockup: #f0eeea`
- `--text-primary: #000000`
- `--text-secondary: #121211`
- `--text-muted: #575551`
- `--text-warm: #958d7e`
- `--border-default: #000000`

**Dark mode:** invert surfaces (page canvas becomes near-black, text becomes near-white), keep hairline borders, preserve contrast pairing (light bg → dark text, dark bg → light text).

**Typography:**
- `--font-display: 'Inter Tight', 'General Sans', system-ui, sans-serif` (substitute for Geigy LL Duplex Var; apply manual negative tracking)
- `--font-base: 'Inter', system-ui, sans-serif`
- Type scale tokens: `--text-eyebrow: 10px`, `--text-caption: 12px`, `--text-body-sm: 14px`, `--text-body: 16px`, `--text-body-lg: 18px`, `--text-subheading: 24px`, `--text-heading-sm: 32px`, `--text-heading: 48px`, `--text-heading-lg: 60px`, `--text-display: 113px`
- Apply OpenType features to display: `font-feature-settings: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`

**Spacing & shapes:**
- Base unit 4px. Spacing tokens: `--spacing-4` through `--spacing-120` per scale.
- Radii: `--radius-sm: 4px` (buttons/inputs/tags), `--radius-md: 8px` (cards), `--radius-lg: 999px` (tags/pills)
- Shadows: `--shadow-sm`, `--shadow-md` (extremely soft, warm-tinted, mockup-only)
- Transitions: `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: cubic-bezier(0.4,0,0.2,1)`
- Z-index: `--z-dropdown`, `--z-modal`, `--z-toast`

**Google Fonts:** Load Inter and Inter Tight (or General Sans) via `<link>`/`@import`. Load Google Material Symbols for icons. No inline SVGs or local icon files.

## 4. Layout & Responsive Rules
- Max content width 1280px, centered. Full-width top nav.
- Mobile-first flexbox. Every flex container defaults to `align-items: center` unless justified exception.
- Convert rows to columns on small viewports. No horizontal scrolling.
- Respect `prefers-reduced-motion`.
- Theme toggle with `localStorage` persistence, fallback to `prefers-color-scheme`, visible control with correct `aria-pressed`/`aria-label`.

## 5. Section Specifications

**Hero:** Full-viewport dark photographic background (forest/nature with warm golden tones) with ~60% black gradient overlay. Left-aligned text block ~45% viewport width. 10px uppercase eyebrow (white, 0.1em tracking, 16–24px above heading). Headline 60px display, white, letter-spacing -2.7px, line-height 1.1. Subtext 18px Inter white. CTA: outlined light button (transparent, 1px white border, white text 12px uppercase 0.1em, 4px radius, 12px 20px padding, trailing chevron). Minimum 60% black wash for legibility.

**Top Nav:** Full-width white bar 64–72px, 1px Obsidian bottom border. Left: fictional wordmark in Obsidian. Center: 14px Inter 400 menu items with dropdown carets. Right: filled dark button (LOG IN style) + outlined ghost button (REQUEST A DEMO style with chevron).

**Features (3 cards):** 3-column grid. Each card: 8px radius, #f0eeea background, 24–32px padding. Top: stylized product UI mockup on neutral-warm surface (floating cards 4px radius, hairline borders, tag pills, occasional Ember Tag accent). Bottom: 18px Inter Obsidian title + 14px Inter Graphite description. No shadow.

**How It Works (3 steps):** Centered narrow text blocks or 3-column. Each step: number/eyebrow, 24px subheading, 14px body. Hairline dividers.

**Testimonials:** Centered narrow text blocks. Quote in 18–24px, attribution in 14px Graphite. Hairline borders between items.

**Pricing (3 tiers):** 3-column card grid. Each card: 8px radius, #f5f5f3 background, hairline border. Tier name (12px uppercase), price (48px display), feature list (14px), CTA button. Highlighted tier via border emphasis (no shadow).

**FAQ:** Accordion-style. Questions 16px Inter 500, answers 14px Graphite. Hairline dividers. Expand/collapse via CSS/JS with aria-expanded.

**Final CTA:** Centered narrow block. Display headline 48–60px, short description, outlined/filled button pair.

**Footer:** Vertical link groups at 14px Inter 400, 8px row gap, Obsidian text. Section titles 12px Inter 500 uppercase 0.1em Graphite. Hairline top border.

## 6. Component States (enforce all)

**Buttons:** default, hover (brightness/shadow + cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (disabled, spinner/icon, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary `--text-success`/`--text-error`). Minimum 44x44px touch target. Flex layout with gap 0.5rem.

**Cards:** default (flex, subtle border, elevation via surface color), hover (translateY(-2px) or shadow shift), focus-within (border highlight), loading (skeleton shimmer), empty state (Google Icon + guidance text).

**Forms/Inputs:** empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

**Modal (if used):** opening/open/loading/success-error/closing animated; centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## 7. UX & Micro-interactions
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes; never color-only state; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No lorem-ipsum-only submissions where real copy supplied; placeholders only where content genuinely unspecified. Invent all copy for the fictional brand.

## 8. Do's and Don'ts (enforce)
- Do: Geigy substitute for all display/heading ≥32px with negative tracking -0.02 to -0.06em scaled to size. Strict monochrome marketing (black/white/Warm Stone taupe only). Button text 10–12px Inter 500 uppercase 0.1em tracking with trailing chevron for directional actions. 4px radius interactive, 8px cards. 1px hairline Obsidian borders. Display 48–60px section intros, 113px hero-only. 10px uppercase eyebrow 0.1em, 16–24px above heading.
- Don't: no chromatic color on marketing surface (Ember Tag only inside mockups). No radius >8px on cards. No display type in Inter/system font. No drop shadows on cards (surface color + hairlines only). No letter-spacing looser than -0.01em on body or positive tracking below 10px. No centered body paragraphs (left-align). No text on hero without 60% black wash.

## 9. Deliverables
Output complete `index.html`, `style.css`, `script.js`. Invent fictional brand name, product, and all copy. All user-facing copy in English. Ensure theme toggle persists via localStorage with prefers-color-scheme fallback. Include all requested sections: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. No unrequested placeholders.
