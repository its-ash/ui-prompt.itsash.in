# Coding-AI Prompt: Complete Landing Page — HeroKit Theme

## 1. Project Overview & Theme

Build a complete, responsive landing page for a fictional brand. You must invent a fictional brand name, product, and all user-facing copy. Do NOT use the real brand name "HeroKit", its logo, trademarks, or product names anywhere in the page. The page must be delivered as three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere in the HTML.

**Theme:** Dark editorial poster aesthetic. Obsidian black canvas (`#000000`) with a single chromatic accent — Pale Lemon (`#ffffa7`). Display type is huge, tight-tracked, editorial-poster style. Components stay light: thin borders, 8px radii, no drop shadows, no gradients. Generous density and negative space.

## 2. CSS-First Architecture & Tokens

Keep all styling strictly inside `style.css`. Use class/ID selectors only. Store all visual tokens in `:root` using CSS variables, and provide dark-mode overrides under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. User theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit, with a visible toggle control carrying correct `aria-pressed`/`aria-label`.

### Color Tokens

```css
:root {
  --color-pale-lemon: #ffffa7;
  --color-electric-yellow: #fddd05;
  --color-obsidian: #000000;
  --color-paper: #ffffff;
  --color-graphite: #333333;
  --color-mist: #999999;
  --color-steel: #808080;
}
```

Contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text. Light mode background must not be pure white; use `#fefefe` where a near-white is needed.

### Typography Tokens

Use Google Fonts. Primary face: Inter (substitute for PP Neue Montreal). Secondary display: a wide grotesque substitute. System sans-serif stack for micro labels. Bind fonts to `--font-base`. Use Google Material Symbols/Icons for all icons; no raw inline SVGs or local icon files.

Type scale tokens:

```css
--text-caption: 12px;
--text-body-sm: 16px;
--text-body: 20px;
--text-subheading: 30px;
--text-heading: 32px;
--text-heading-lg: 50px;
--text-display: 120px;
--text-display-lg: 144px;
```

Letter spacing: `-0.16px` at body, `-0.6px` at subheading, `-4.8px` at display. Line heights: 1.0–1.4. Single weight 400 throughout; weight 500 only for navigation links.

### Spacing & Shape Tokens

```css
--spacing-8: 8px;
--spacing-12: 12px;
--spacing-16: 16px;
--spacing-20: 20px;
--spacing-24: 24px;
--spacing-32: 32px;
--spacing-36: 36px;
--spacing-40: 40px;
--spacing-64: 64px;
--spacing-80: 80px;
--spacing-128: 128px;
--spacing-192: 192px;
--radius-sm: 8px;
--radius-md: 8px;
--radius-lg: 8px;
--shadow-sm: none;
--shadow-md: none;
--spacing-gap: 10px;
--transition-fast: 150ms ease;
--transition-normal: 250ms ease;
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--z-dropdown: 100;
--z-modal: 200;
--z-toast: 300;
```

All border radii are 8px. No drop shadows. No gradients on UI surfaces.

## 3. Layout Standards

Build layout with Flexbox. Every flex container must default to `align-items: center` unless explicitly justified otherwise. Mobile-first responsive: convert rows to columns on small viewports, prevent horizontal scrolling. Page max-width 1200px, centered. Section gap 80px. Card padding 20px. Element gap 10px. Full-bleed sections alternating Obsidian and (at most one) Pale Lemon wash.

## 4. Component Specifications

### Button Component
- **Primary Filled (Pale Lemon):** Background `#ffffa7`, text `#000000`, 8px radius, padding 14px 20px, Inter 16px weight 400, letter-spacing -0.16px. No border. One per viewport maximum.
- **Primary Filled (Electric Yellow):** Background `#fddd05`, text `#000000`, 8px radius, padding 8px 16px, 16px weight 400. Used in nav "Try for free".
- **Ghost Navigation Link:** No background, text `#ffffff`, Inter Medium 16px, padding 14px vertical. Hover inverts to Pale Lemon fill with `#000000` text.
- **Outlined Ghost Button:** Transparent background, 1px `#ffffff` border, text `#ffffff`, 8px radius, padding 8px 16px.

States for all buttons: default, hover (brightness/shadow shift, cursor pointer), focus (distinct ring via CSS variables), active (transform scale 0.97), loading (disabled, CSS spinner, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`). Minimum touch target 44x44px. Flex layout with `align-items: center; justify-content: center; gap: 0.5rem`.

### Card Component (Product Gallery)
- Background `#000000`, 1px border `#333333`, 8px radius, 20px padding. Image fills card body edge-to-edge. Footer row: 6px Pale Lemon status dot, 12px uppercase "HERO" label in `#ffffff`, asset name in `#999999`. No hover elevation, no scale, no shadow.

### Form & Input
States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, and error feedback container.

### Modal / Popup
States: opening, open, loading, success/error, closing (CSS transitions). Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### Navigation (Sticky Top)
Height ~56px, transparent over canvas (Obsidian on scroll), full-bleed. Left: fictional wordmark in `#ffffff` with small lemon bolt icon. Right: three ghost nav links + Electric Yellow "Try for free" button, 10px gap. No shadow, no border bottom.

### Browser Frame Mockup
1px border (use `#ffffff` per spec example), 8px radius, dark interior `#0a0a0a`, centered with 80–120px margin. Top bar: three 6px `#808080` traffic-light dots. Content area fills with screenshot/animation.

### Logo Sticker Strip
Single horizontal row of platform logos in white on Obsidian. Caption "Works with your favorite site builder" at 12px above. No cards, no borders, no hover.

### Status Badge Dot
6px filled circle Pale Lemon paired with 12px uppercase label in `#ffffff`. No border, no padding around dot.

### Asset Tag (HERO label)
12px Inter weight 400 uppercase, text `#ffffff`, bullet separator between dot and label.

## 5. Required Sections

Build these sections in order:

1. **Hero:** Full-bleed Pale Lemon `#ffffa7` background. Display headline 120px Inter, `#000000`, line-height 1.0, letter-spacing -4.8px. Subhead 20px weight 400 `#000000`, max-width ~480px. CTA button group below. Right side: floating 3D render (warm amber bubbles) bleeding off canvas edges. 80px section padding. Split layout: headline+CTA left max-width 480px, render right.

2. **Logo Sticker Strip:** Social proof platforms. Caption 12px above. White logos on Obsidian.

3. **Features:** 3 product gallery cards in 3-column grid, 10px gutters. Each card: image, footer with status dot + "HERO" label + asset name.

4. **How It Works:** 3 steps. Left-anchored editorial layout. 30px subheadings, 20px body. 80px section gaps.

5. **Testimonials:** Cards with quote, author name, role. Inverted surface `#ffffff` or Obsidian with border. No shadows.

6. **Pricing:** 3 tiers. Cards with border, 8px radius. Highlight one tier with Pale Lemon accent. Feature lists with Google Material Icons checkmarks.

7. **FAQ:** Accordion-style. Question/answer pairs. Keyboard accessible, `aria-expanded`. Smooth CSS transitions.

8. **Final CTA:** Section divider style: full-bleed Obsidian, 80px vertical padding, centered 50px headline in `#ffffff`, letter-spacing -1px, followed by single Pale Lemon filled CTA button.

9. **Footer:** Secondary links, micro labels at 12px system sans-serif. Inverted surface `#ffffff` or Obsidian.

## 6. UX & Accessibility

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Sufficient contrast in both light and dark modes. Never rely solely on color for state. Semantic HTML5. Correct ARIA roles/labels. Logical DOM/focus order. Full keyboard operability. `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.
- Focus rings on all interactive elements.

## 7. Naming Convention

Use BEM naming consistently: `.block`, `.block__element`, `.block--modifier`. Do not mix conventions.

## 8. Edit Mode

Not applicable — this is a from-scratch build.

## 9. Deliverables

- `index.html`, `style.css`, `script.js`
- Google Fonts `<link>` tags in HTML head
- Google Material Symbols/Icons via CDN
- All copy in English
- Fictional brand name, product, and copy — never "HeroKit" or its trademarks
- No lorem-ipsum-only submissions; use realistic invented copy

## 10. Special Constraints

- Never introduce a second chromatic accent beyond Pale Lemon
- Never use drop shadows or scale-on-hover for elevation
- Never set body type below 16px or above 20px
- Never mix border radii; 8px only
- Never place Pale Lemon on a light section background
- Never add gradients to UI surfaces
- Never center-align body copy or nav items; left-anchored editorial style
- Display headlines at 100–120px with letter-spacing -4.8px and line-height 1.0
- Let 3D renders bleed off canvas edges in hero/section openers
- Maintain 80px section gaps and 10px element gaps

Output only the three files' contents as specified. No preamble, no closing commentary.
