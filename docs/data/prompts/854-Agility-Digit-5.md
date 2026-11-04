# Landing Page Build Prompt — Digit 5 Theme (Agility Style)

## 1. Project Overview

Build a complete, single-page landing site for a **fictional brand** (invent a plausible brand name, product, and copy; never use the real brand name "Agility", its logo, trademarks, or product names). The visual style must strictly follow the Digit 5 / Agility design system described below. Deliver three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM recommended) across the entire deliverable.

## 2. Mandatory Architecture Rules

### 2.1 CSS-First & Zero Inline CSS
- Keep all styling strictly inside `style.css`. Forbid the `style="..."` attribute in HTML.
- Target all design properties via class/ID selectors. HTML must remain semantic and styling-agnostic.

### 2.2 CSS Variables & Theme Tokens
Store all visual tokens in `:root` and theme classes using CSS variables:

**Colors (Digit 5 palette):**
- `--color-warm-white: #f0eeeb;`
- `--color-off-black: #292827;`
- `--color-true-black: #000000;`
- `--color-graphite: #393837;`
- `--color-charcoal: #30302f;`
- `--color-light-gray: #d6d3ce;`
- `--color-bright-white: #ffffff;`
- `--color-middle-gray: #938f89;`
- `--color-pale-steel: #c2bfba;`

Map these to semantic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text, for every theme.

Light mode background must not default to pure white; use `#f0eeeb` as the page canvas. Where a white/near-white is needed, use `#fefefe` instead of `#ffffff`.

**Shape & Elevation Tokens:**
- `--radius-sm: 2px;` (icons)
- `--radius-md: 6px;` (buttons, compact controls)
- `--radius-lg: 12px;` (cards, media, navigation)
- `--radius-pill: 24px;` (large destination panels only)
- `--shadow-sm`, `--shadow-md`: define but keep neutral (surfaces separate through color shifts, not shadows; navigation uses translucency + backdrop blur).
- `--spacing-gap: 18px;`
- `--section-gap: 55px;`
- `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`

**Spacing Scale:** 5, 6, 8, 10, 11, 12, 13, 15, 18, 30, 50, 55, 88, 100, 143, 150 (px). Card padding 18px. Element gap 18px.

### 2.3 Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background/text CSS variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle with correct `aria-pressed`/`aria-label`.

In dark mode, invert the warm palette: page canvas becomes `#292827`/`#000000`, text becomes `#f0eeeb`, utility cards become `#393837`, etc. Maintain the neutral, no-saturated-colors rule.

### 2.4 Flexbox & Mobile-First
- Build all layouts with Flexbox (`display: flex`). Every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-first responsive: convert rows to columns on small viewports. Prevent horizontal scrolling.

### 2.5 Framework
Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons (Google Fonts Mandatory)
- Text: Google Fonts. Use **Inter** as substitute for Agility Diatype, **IBM Plex Mono** as substitute for Agility Diatype Mono, **Arial** as substitute for Helvetica Neue. Bind primary to `--font-base`.
- Icons: Google Material Symbols/Icons only. Forbid raw inline SVGs or local icon files.

**Type Scale (define as CSS variables/tokens):**
- `--text-hero-eyebrow`: IBM Plex Mono 700, 12px/12px, 0.96px tracking
- `--text-technical-label`: IBM Plex Mono 700, 12px/12px, 0.72px tracking
- `--text-nav`: Inter 400, 14px/14px (1.25 lh), -0.14px tracking
- `--text-interface-text`: Inter 400, 19px/1.2, -0.19px tracking
- `--text-feature-heading`: Inter 700, 19px/1.2, -0.19px tracking
- `--text-card-heading`: Inter 400, 28px/28px (1.0 lh), -0.56px tracking
- `--text-section-heading`: Inter 400, 36px/36px (1.0 lh), -1.08px tracking
- `--text-hero-heading`: Inter 400, 62px/57.66px (0.93 lh), -1.86px tracking

Apply OpenType features `"ss01", "ss07", "ss09", "ss10", "ss11"` where supported (best-effort via CSS).

## 3. Component Specifications

### 3.1 Buttons
- **Warm White Compact Button:** `#f0eeeb` fill, `#292827` text in IBM Plex Mono 12px/12px weight 700, 0.72px tracking, 6px radius, padding 13px vertical / 15px horizontal.
- **Black Outline Button:** `rgba(0,0,0,0.8)` fill, `#f0eeeb` text, 1px `#f0eeeb` border, 6px radius, 15px padding all sides.
- **Graphite Pill Destination Panel:** `#393837` fill, `#f0eeeb` text, 1px `#f0eeeb` border, 24px radius, 18px padding all sides. Entire panel clickable; do not nest a second filled control.

All buttons must implement: default (flex, align-items center, justify-content center, gap 0.5rem, min touch target 44x44px), hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring via CSS vars), active (transform: scale(0.97)), loading (disabled, CSS spinner/animated icon, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).

### 3.2 Cards
- **Utility Diagram Card:** `#d6d3ce` background, 12px radius, no shadow, 18px bottom padding, 88.3281px top space for title/diagram. 28px/28px Inter 400 heading tracked -0.56px, compact dark body copy, thin `#292827` outlined diagram blocks near bottom.
- **White Media Card:** `#ffffff` fill, 12px radius, no box shadow, full-bleed imagery clipped to rounded edge.
- **Rounded Editorial Image:** 12px radius, image cropped edge-to-edge, soft low-contrast treatment on `#f0eeeb` sections.

Interactive cards must implement: default (flex, subtle borders/elevation via vars), hover (shadow shift or translateY(-2px)), focus-within (border highlight), loading (skeleton shimmer), empty state (Google Icon + guidance text).

### 3.3 Navigation (Translucent Global Navigation)
Floating rounded 12px bar: `#e8e3d8b3` translucent tan fill, 57px backdrop blur, `#f0eeeb` text in Inter 14px/14px weight 400, -0.14px tracking. Item gaps 10px. Compact 6px-radius controls inside. Include theme toggle. Mobile: collapse to hamburger with accessible disclosure.

### 3.4 Hero Media Stage
Full-bleed product-film container: machine photography over `#000000` or `#292827` with strong dark overlay. Overlay `#f0eeeb` monospace eyebrow 12px/12px weight 700, 0.96px tracking, and `#f0eeeb` display headline 62px/57.66px weight 400, -1.86px tracking. Minimal controls; pause indicator at lower edge. Include a Warm White Compact Button. Use a placeholder video/image (no real brand assets).

### 3.5 Technical Section Eyebrow
Uppercase IBM Plex Mono 12px/12px weight 700, 0.72px tracking. `#292827` on light sections, `#f0eeeb` on dark sections. 18px gap above content.

### 3.6 Text-First Introduction Block
Small mono eyebrow on left, large text column on right. Main copy in Inter 36px/36px weight 400, -1.08px tracking, `#292827`. Surrounding `#f0eeeb` canvas uninterrupted by card borders.

### 3.7 Dark Resource Footer
`#292827` background, `#f0eeeb` headings/links, 12px uppercase mono label treatment for category markers. No elevation; divide groups with spacing and thin `#938f89` strokes.

### 3.8 Forms & Inputs (if any)
States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

### 3.9 Modal / Popup (if used)
States: opening, open, loading, success/error, closing (CSS transitions). Centered flex container (align-items center), backdrop overlay, Material Icon close button, focus trapping, close via Esc/overlay click.

## 4. Core UX & Micro-Interactions
- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No saturated UI colors; palette stays neutral from `#f0eeeb` through `#000000`.
- No drop shadows on `#ffffff` or `#d6d3ce` cards.
- No border radii larger than 12px for media cards, utility cards, or compact buttons (only large destination panels use 24px).
- No 9999px pill radius.
- No 600-700 weight for large display headlines; use Inter 400 at 62px or 36px.
- Do not place light-section copy on pure white by default; reserve `#ffffff` for contained cards, `#f0eeeb` for canvas.

## 5. Page Sections to Build

1. **Hero** — Hero Media Stage with eyebrow, headline, compact button, pause indicator.
2. **Features** — 3 equal Utility Diagram Cards in a row.
3. **How It Works** — 3 steps (use Utility Diagram Cards or numbered blocks with Technical Section Eyebrow).
4. **Testimonials** — contained cards on `#ffffff` or `#d6d3ce` with 12px radius, no shadow.
5. **Pricing** — 3 tiers; use Graphite Pill Destination Panel treatment for the highlighted tier, standard cards for others.
6. **FAQ** — accordion using existing elements only; CSS-driven open/close.
7. **Final CTA** — dark band (`#292827`) with `#f0eeeb` copy and a Warm White Compact Button or Graphite Pill.
8. **Footer** — Dark Resource Footer with secondary links, category markers in mono.

## 6. Deliverables
- Files: `index.html`, `style.css`, `script.js`.
- Naming: consistent BEM (or fixed utility set) throughout.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content genuinely unspecified.
- All user-facing copy in English.

## 7. Edit-Mode Reminder (if modifying existing markup)
If working on existing markup: never introduce new HTML tags/components/DOM nodes; define CSS classes only for existing elements; do not write JS for form validation/popups/utilities (ask user instead); if a style change needs new markup, stop and ask.

## 8. Output
Output only the finished prompt itself — no preamble, no closing commentary. Mirror the structure above. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause. All copy in English.
