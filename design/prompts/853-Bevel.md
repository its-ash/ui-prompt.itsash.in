# Coding AI Prompt — Bevel-Themed Landing Page

## 1. Project Overview & Constraints

Build a complete, responsive, mobile-first landing page using the **Bevel** visual style (a bright white health-journal aesthetic with mist-blue bento surfaces and softly glowing wearable dashboard imagery). All user-facing copy must be invented for a **fictional brand** — never use the real brand name "Bevel", its logo, trademarks, or product names anywhere in the markup, copy, or asset references. Invent a fictional product name, brand name, and all supporting copy.

Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere in the HTML. All styling lives in `style.css`. Use one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.

## 2. Strict Architecture Rules

**2.1 CSS-First & Zero Inline CSS**
- Keep all styling strictly inside `style.css`.
- Forbid the `style="..."` attribute in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

**2.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` (and theme classes) using CSS variables. Include at minimum:

Colors:
- `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

Bevel-specific color tokens (map into the above where appropriate, and keep as named tokens):
- `--color-paper-white: #ffffff`
- `--color-charcoal: #1f2025`
- `--color-ink: #222326`
- `--color-cloud-card: #ebf0f8`
- `--color-body-gray: #747679`
- `--color-signal-gold: #ffca00`
- `--color-coral-signal: #ffab94`
- `--color-recovery-green: #31ce01`
- `--color-metric-blue: #415eee`
- `--color-sleep-lilac: #b9a6ff`
- `--color-hero-sky: linear-gradient(#d2e5ff, #fff9ee)`

Contrast pairing: any light background token must pair with a dark text token, and any dark background token must pair with a light text token — enforce this for every theme, not just the default. Light mode background must not default to pure white; where a white/near-white is needed use `#fefefe` instead of `#ffffff` (note: Bevel's Paper White `#ffffff` is an explicit brand token and may be used as specified).

Radius & shadows:
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.

Bevel shadows:
- `--shadow-md: rgba(0, 0, 0, 0.25) 0px 0px 16px -8px`
- `--shadow-subtle: rgb(255, 255, 255) 0px 1px 0px 0px inset`
- `--shadow-lg: rgb(255, 255, 255) 0px 0px 24px 0px inset`
- `--shadow-md-2: rgba(0, 0, 0, 0.15) 0px 2px 16px 0px`
- `--shadow-subtle-2: rgba(255, 255, 255, 0.36) 0px 1px 0px 0px inset`

Spacing & transitions:
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.

Elevation/stacking:
- `--z-dropdown`, `--z-modal`, `--z-toast`.

Typography tokens:
- `--font-base` bound to the Google Font substitute (Inter), with weights 400, 500, 600.
- Type scale tokens: `--text-caption`, `--text-nav`, `--text-brand-nav`, `--text-body`, `--text-section-label`, `--text-card-heading`, `--text-display`, `--text-hero-display` with the sizes, line-heights, letter-spacings, and weights specified in the Bevel spec.

Spacing tokens: `--spacing-8`, `--spacing-16`, `--spacing-24`, `--spacing-32`, `--spacing-40`, `--spacing-48`, `--spacing-80`, `--spacing-96`, `--spacing-160` (base unit 8px).

**2.3 Mandatory Dark Mode**
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

**2.4 Flexbox Layout & Mobile-First**
- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless an explicitly justified exception exists.
- Mobile-responsive out of the box: convert rows to columns on smaller viewports. Prevent horizontal scrolling.

**2.5 Framework**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply`) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**2.6 Typography & Icons (Google Fonts Mandatory)**
- Include Google Font `<link>` or `@import` for Inter (substitute for SF Pro) and bind to `--font-base`.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 3. Component & Section Specifications

Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Hero**
- Full-width rounded hero field using `--color-hero-sky` gradient as background.
- Floating capsule navigation bar over hero: Paper White rounded bar, 32px radius, 12-20px backdrop blur, 16px internal control spacing. Brand text Ink at 18px/25.2px weight 500 +0.16px tracking; secondary links Body Gray at 16px/22.4px weight 500.
- Centered two-line headline in Ink at 80px/80px weight 600, -2.4px tracking.
- Body Gray supporting copy at 24px/31.2px weight 400.
- Charcoal Download Pill: Charcoal fill, Cloud Card label and Apple icon color, 128px radius, 8px vertical / 16px horizontal padding, 16px/22.4px weight-500 text. Capsule-shaped, not rectangular.
- Hero Rating Strip: compact Signal Gold stars beside small Body Gray metadata below the pill, 12px metadata text, visually subordinate.
- Overlapping iPhone and Apple Watch renders centered beneath headline, raw and dimensional, contained by hero background (no card border).

**Features (3 Cloud Feature Cards)**
- Cloud Card surface `#ebf0f8`, 24px radius, 32px padding, no border, no shadow.
- Feature name in Ink at 40px/40px weight 600 -1.2px tracking.
- Body copy in Body Gray at 24px/31.2px weight 400.
- Inset Metric Visualization: compact health charts, circular scores, metric chips inside rounded 16px-24px imagery. Use Recovery Green, Metric Blue, Sleep Lilac, Coral Signal only as data-category accents against pale surfaces.

**How It Works (3 steps)**
- Three steps with numbered indicators, titles, and descriptions. Use Cloud Card surfaces or Paper White bands. Maintain 80px section gaps.

**Testimonials**
- Community Story Carousel Card: portrait-format photographic and app-capture tiles, 16px rounded corners, image lift shadow `rgba(0, 0, 0, 0.25) 0px 0px 16px -8px`, outer carousel tiles fade into page edge.

**Pricing (3 tiers)**
- Three pricing cards. Use Cloud Card surfaces for standard tiers, Charcoal for highlighted tier. Include tier name, price, feature list, CTA button. Buttons follow Charcoal Download Pill styling for primary CTA.

**FAQ**
- Accordion-style FAQ. Accessible expand/collapse with keyboard support and ARIA attributes.

**Final CTA**
- Centered final call-to-action with headline, supporting copy, and Charcoal Download Pill.

**Footer**
- Footer Link Group: Ink 18px/25.2px weight-500 links under compact headings on Paper White. 16px vertical link spacing, 160px section padding around footer content.

**Additional Bevel components to include where appropriate:**
- Wearable Partner Row: compatibility proof — Ink 24px/21.6px weight-600 heading -0.24px tracking above a single horizontal row of monochrome Charcoal partner wordmarks, 24px gaps, no enclosing cards.
- Recognition Laurel Pair: two small neutral-gray laurel marks and award labels centered above next display headline, Body Gray labels, 16px gap between awards.
- Elevated QR Download Card: compact Charcoal card with Cloud Card text and high-contrast QR code, 16px radius, `rgba(0, 0, 0, 0.15) 0px 2px 16px 0px` elevation.

## 4. Component Design Specifications

**Button Component**
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`), min touch target 44x44px.
- Hover: visual shift (brightness/shadow), `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles via `--text-success` / `--text-error`.

**Card Component**
- Default: flexible flexbox layout, subtle borders and elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlights card borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and clear guidance text.

**Form & Input**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

**Modal / Popup**
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay clicks.

## 5. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both Light and Dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.

## 6. Do's and Don'ts (Bevel)

Do:
- Use Paper White `#ffffff` as default canvas and Cloud Card `#ebf0f8` for large feature surfaces.
- Set display headings in Ink `#222326`, weight 600, -0.03em tracking at 40px, 64px, 80px.
- Use 80px vertical section gaps and 32px padding inside Cloud Feature Cards.
- Use 128px radius, 8px 16px padding, Charcoal fill, Cloud Card text for public download buttons.
- Use 24px or 32px card radii and 16px-24px radii for product imagery.
- Keep Body Gray supporting copy at 24px/31.2px weight 400.
- Restrict Recovery Green, Metric Blue, Sleep Lilac, Coral Signal to health-data visuals and soft washes.

Don't:
- Do not use saturated metric colors as universal page backgrounds or filled public conversion buttons.
- Do not set large headings above 600 weight or remove -0.03em tracking.
- Do not use square buttons; public download controls require 128px radius.
- Do not add visible borders to Cloud Feature Cards; use `#ebf0f8` surfaces with no border and no shadow.
- Do not replace 80px section rhythm with dense 24px-40px stacked sections.
- Do not use heavy drop shadows on cards; reserve `rgba(0, 0, 0, 0.25) 0px 0px 16px -8px` for floating imagery.
- Do not turn Body Gray supporting copy into black or weight 600 text.

## 7. Deliverables

- Separate `index.html`, `style.css`, `script.js`.
- No inline `<script>` blocks beyond a single deferred entry-point reference.
- BEM class naming throughout.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content genuinely unspecified. (Invent fictional copy for all sections.)

## 8. Edit Mode

Not applicable — this is a from-scratch build. If modifying existing markup later, never introduce new HTML tags/components/DOM nodes; work only within existing element/class structure; define CSS classes only for elements that already exist; do not write JS for form validation, popups/modals, or utility helpers — ask the user how they want it handled instead.

## 9. Output

Produce the three files with the Bevel-themed landing page implementing all sections and rules above. Use invented fictional brand/product names and copy. Ensure dark mode, accessibility, responsiveness, and all component states are implemented.
