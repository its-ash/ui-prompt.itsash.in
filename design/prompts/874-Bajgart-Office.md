# Coding AI Prompt — Bajgart Office-Themed Landing Page

## 1. Project Overview

Build a complete, production-ready landing page for a fictional brand (invent a fictional brand name, product, and copy — never use "Bajgart", "Bajgart Office", or any real trademark). The visual language is an editorial gallery-wall aesthetic: a vast white canvas where whisper-weight serif statements and raw portfolio crops carry more visual mass than interface chrome. All UI is achromatic (black, white, pale gray) except a single restrained green availability signal.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere in the HTML. Use one consistent class-naming convention (BEM) across the entire deliverable.

## 2. CSS-First Architecture & Zero Inline CSS

- All styling lives strictly in `style.css`.
- No `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors only.
- HTML must stay clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

## 3. CSS Variables & Theme Tokens

Define all tokens in `:root` and a `.dark` class / `@media (prefers-color-scheme: dark)` block. Enforce contrast pairing (light bg → dark text, dark bg → light text) for every theme.

```css
:root {
  /* Colors */
  --color-gallery-white: #ffffff;
  --color-ink: #000000;
  --color-paper-gray: #f6f6f6;
  --color-quiet-gray: #878787;
  --color-availability-green: #189e48;

  /* Standardized aliases required by architecture */
  --primary: var(--color-ink);
  --secondary: var(--color-paper-gray);
  --bg-primary: var(--color-gallery-white);
  --bg-secondary: var(--color-paper-gray);
  --text-primary: var(--color-ink);
  --text-secondary: var(--color-quiet-gray);
  --text-success: var(--color-availability-green);
  --text-error: #c0392b;
  --border-default: #e5e5e5;
  --border-error: #c0392b;
  --border-success: var(--color-availability-green);

  /* Radius & Shadows */
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 50px;
  --radius-pill: 9999px;
  --radius-image: 80px;
  --radius-button-large: 60px;
  --radius-card: 0px;
  --shadow-sm: none;
  --shadow-md: none;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-gap: 8px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* Elevation */
  --z-dropdown: 100;
  --z-modal: 1000;
  --z-toast: 2000;

  /* Fonts */
  --font-base: 'DM Sans', sans-serif;
  --font-display: 'Cormorant Garamond', serif;
  --font-display-italic: 'Cormorant Garamond', serif;
  --font-micro: 'Inter', sans-serif;
}
```

Light-mode background must not be pure white where a near-white is needed; use `#fefefe` for any near-white surface. Gallery canvas stays `#ffffff` per spec.

## 4. Mandatory Dark Mode

- Provide dark tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- In dark mode: gallery white becomes a deep ink surface, ink becomes light text, paper gray becomes a dark utility surface, quiet gray lightens, availability green stays.
- Theme switching via a visible toggle with correct `aria-pressed`/`aria-label`.
- Persist choice in `localStorage`, falling back to `prefers-color-scheme` on first visit.
- All background/text variables switch seamlessly without HTML restructuring.

## 5. Typography & Icons (Google Fonts Mandatory)

Include Google Font links in `<head>`:
- Cormorant Garamond (Light 300, Light Italic 300) — substitute for Rhymes Text
- DM Sans (400, 500, 700) — substitute for Saans
- Inter (400) — substitute for Satoshi

Use Google Material Symbols for all icons. No raw inline SVGs or local icon files.

Type scale tokens (define as utility classes mapping to these):
- `--text-micro-metadata`: Inter 400, 12px, 1.2, 0px
- `--text-label`: DM Sans 400, 14px, 1.21, 0px
- `--text-label-medium`: DM Sans 500, 14px, 1.29, 0px
- `--text-body`: DM Sans 400, 16px, 1.5, 0px
- `--text-body-strong`: DM Sans 700, 16px, 1.5, 0px
- `--text-display`: Cormorant Garamond 300, 56px, 1.05, -3.36px
- `--text-display-italic`: Cormorant Garamond Italic 300, 56px, 1.05, -3.36px
- `--text-hero-sans-emphasis`: DM Sans 400, 70px, 1.03, -1.4px
- `--text-hero-display`: Cormorant Garamond 300, 72px, 1.0, -4.32px
- `--text-hero-display-italic`: Cormorant Garamond Italic 300, 72px, 1.0, -5.04px

## 6. Flexbox Layout & Mobile-First

- All layout structures use Flexbox (`display: flex`).
- Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first: rows become columns on small viewports. No horizontal scrolling.
- Section gap: 64px. Card padding: 16px. Element gap: 8px.

## 7. Framework

Use Tailwind CSS via CDN (or clean custom CSS driven by Tailwind `@layer`/`@apply`). All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`). Prefer custom CSS classes for theme-specific styling.

## 8. Component Specifications

### 8.1 Persistent Split Header
- White horizontal header, no visible divider.
- Centered two-line wordmark (fictional brand name) in Rhymes-style serif lockup.
- Left: compact Paper Gray navigation pills with 8px gap.
- Right: Availability Green dot + capacity text, then Compact Black Pill Button.
- Flex layout, mobile-responsive (stack on small screens).

### 8.2 Soft Navigation Pill
- `#f6f6f6` bg, `#000000` 14px Saans text, 50px radius, 8px vertical / 16px horizontal padding.
- Compact, 8px gap between pills.

### 8.3 Availability Indicator
- Small circular `#189e48` dot + 14px Saans Regular copy on white.
- Only for current capacity/time-sensitive availability, never generic success.

### 8.4 Compact Black Pill Button
- `#000000` fill, `#ffffff` text, 50px radius, 8px 16px padding.

### 8.5 Standard Black Pill Button
- `#000000` fill, `#ffffff` text, 60px radius, 12px vertical / 16px horizontal padding.

### 8.6 Industry Filter Tag
- `#f6f6f6` pill, `#000000` 12px Saans text, 50px radius, 8px vertical / 16px horizontal padding.
- Tiny colored dot before label. 8px gap between tags.

### 8.7 Case Study Crop
- Raw edge-to-edge project screenshots, 0px radius, no shadow.
- Unequal widths, gallery runs beyond central text alignment.

### 8.8 Client Proof Row
- Centered 14px Saans supporting sentence above widely spaced muted client wordmarks in `#878787` or grayscale.

### 8.9 Editorial Manifesto Block
- Centered 56px Rhymes Text Light heading, 59px line-height, -3.36px tracking.
- One phrase in Rhymes Text Light Italic at same treatment.
- Explanatory copy below in 16px Saans Regular, 24px line-height.

### 8.10 FAQ Split Section
- Left column: compact text + Standard Black Pill Button (60px radius).
- Right column: plain `#000000` 16px Saans questions.
- Rows separated by generous white space, minimal circular plus affordance on white.
- No bordered cards.

### 8.11 Founder Testimonial Column
- Three unboxed columns on white.
- 16px Saans Regular quote text, 24px line-height.
- Attribution: circular cropped avatar (80px or 12px crop), `#000000` name, `#878787` role/company.

### 8.12 Button States (all buttons)
- Default: flex, `align-items: center; justify-content: center; gap: 0.5rem`, min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, CSS spinner or animated Material Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success` / `--text-error`.

### 8.13 Card States (feature cards)
- Default: flex layout, subtle borders, elevation via `--bg-secondary`.
- Hover: `transform: translateY(-2px)` or shadow shift.
- Focus-within: highlight border on child focus.
- Loading (Skeleton): shimmer animation in CSS.
- Empty State: Google Icon + guidance text.

### 8.14 Form & Input States
- Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Flex container wrapping label, input, error feedback container.

### 8.15 Modal/Popup States
- Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container, backdrop overlay, Material Icon close button, focus trapping, close via Esc or overlay click.

## 9. Page Sections Required

1. **Hero** — left-aligned introductory hero on Gallery White. 72px/72px Rhymes Text Light 300 headline at -4.32px tracking; splice one phrase in Rhymes Text Light Italic 300 at 72px/72px; follow with 16px/24px Ink Saans Regular copy. Include industry filter tags and a Standard Black Pill Button. Below: edge-to-edge horizontal case-study collage with raw 0px-radius crops of unequal widths.

2. **Features** — 3 cards. Unboxed on white, 0px radius, no shadows. Flex layout, hover lift.

3. **How It Works** — 3 steps. Clean numbered steps with Saans copy.

4. **Testimonials** — 3 unboxed columns on white per Founder Testimonial Column spec.

5. **Pricing** — 3 tiers. Unboxed or minimal pill-based, achromatic, black CTA pills.

6. **FAQ** — split layout per FAQ Split Section spec.

7. **Final CTA** — centered manifesto-style block with black pill button.

8. **Footer** — secondary links, muted gray text, no boxes.

## 10. Core UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes. Never rely solely on color. Semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No gradients, colored page backgrounds, or tinted panels.
- No rounded white cards; testimonial/FAQ/proof content stays unboxed on white.
- No drop shadows on portfolio crops, pills, or content modules.
- Reserve `#189e48` for availability dot and capacity text only — never as filled button, generic success, section background, or decorative block.
- Do not treat project-artwork colors as global accents.

## 11. Deliverable Notes

- File structure: `index.html`, `style.css`, `script.js`.
- Naming: BEM throughout.
- No lorem-ipsum-only submissions where real copy is implied; invent fictional, coherent copy for the fictional brand.
- All user-facing copy in English.
- All CSS variable names, class names, file names in English/ASCII.

## 12. Dark Mode Color Mapping (explicit)

- `--bg-primary`: light `#ffffff` → dark `#0a0a0a`
- `--bg-secondary`: light `#f6f6f6` → dark `#1a1a1a`
- `--text-primary`: light `#000000` → dark `#f5f5f5`
- `--text-secondary`: light `#878787` → dark `#a0a0a0`
- `--primary` (buttons): light `#000000` → dark `#ffffff` with inverted text
- `--color-availability-green`: unchanged `#189e48` in both themes

## 13. Edit-Mode Clarification

This is a from-scratch build, not an edit of existing markup. All standard component and state rules apply. If any requested style cannot be achieved without adding markup, stop and ask rather than silently inserting HTML.

---

Generate the three files (`index.html`, `style.css`, `script.js`) following every rule above. Output only the finished code. No preamble, no closing commentary.
