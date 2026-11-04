# Generated Prompt for Coding AI

You are an expert front-end developer. Build a complete, production-quality landing page using a **CSS-first architecture** with **zero inline CSS**, **mandatory dark mode**, **flexbox layout**, **Tailwind CSS** (or clean custom CSS driven by Tailwind's `@layer`/`@apply`), **Google Fonts** for text and icons, and **full component state coverage**. Output three separate files: `index.html`, `style.css`, and `script.js`. Use a single consistent class-naming convention (BEM) across the entire deliverable. No inline `<script>` blocks beyond a single deferred entry-point reference.

---

## 1. Theme & Visual System — "Bedouin's Daughter" (Nocturnal Zine)

**Important:** This spec describes the visual style of a real brand. Reuse the style only. Invent a fictional brand name, products, and copy. Never use the real brand name, logo, trademarks, or product names anywhere in the page.

**Theme:** Dark. The canvas is near-black; butter yellow is the continuous editorial thread.

### 1.1 Color Tokens (define in `:root` and a `.dark`/`prefers-color-scheme` scope)

```
--color-void: #000000;
--color-charcoal: #080808;
--color-ink: #111111;
--color-white: #ffffff;
--color-ash: #999999;
--color-desert-butter: #f5e78d;
```

Contrast pairing: light surfaces pair with dark text; dark surfaces pair with light/yellow text. The default canvas is `--color-void` (not pure white). Where a near-white is needed, use `#fefefe`.

### 1.2 Typography Tokens (Google Fonts mandatory)

Load via `<link>`/`@import`. Map families to `--font-*`:

- `--font-rom`: ROM substitute → Arial, Helvetica, sans-serif. Weights 400, 700.
- `--font-gaisyr`: Gaisyr substitute → Libre Baskerville, Georgia, serif. Weights 400, 700.
- `--font-abc-rom-extended`: Arial Narrow, Arial, sans-serif. Weight 500.
- `--font-rom-extended`: Arial Narrow, Impact, sans-serif. Weights 400, 700.
- `--font-gtstandard-m`: Arial, Helvetica, sans-serif. Weight 400.

Type scale tokens:

```
--text-announcement: 500 10px/1.00 var(--font-abc-rom-extended);
--text-button-label: 700 12px/1.00 var(--font-rom);
--text-body: 400 14px/1.40 var(--font-rom);
--text-utility-link: 400 14px/1.40 var(--font-rom); letter-spacing 1.68px;
--text-section-kicker: 700 14px/1.20 var(--font-gaisyr);
--text-editorial-quote: 700 16px/1.20 var(--font-gaisyr);
--text-editorial-heading: 700 20px/1.10 var(--font-gaisyr); letter-spacing 1.2px;
--text-display: 700 48px/1.20 var(--font-rom-extended);
```

### 1.3 Spacing, Radius, Shadow, Elevation Tokens

Base unit 4px. Spacing scale: `--spacing-4` 4px, `--spacing-8` 8px, `--spacing-12` 12px, `--spacing-16` 16px, `--spacing-20` 20px, `--spacing-24` 24px, `--spacing-32` 32px, `--spacing-40` 40px, `--spacing-64` 64px, `--spacing-100` 100px.

Radius: cards 0px, links 0px, pills 100px, badges 2px, images 0px, buttons 20px.

Shadow: `--shadow-subtle: inset 0 0 0 1px #ffffff;` (white keyline).

Elevation: flat surfaces separated by `--color-desert-butter` hairlines, tonal shifts from void to ink, and the white inset keyline on dark purchase buttons. No cast shadows, no gradients.

Layout: section gap 64px, card padding 12px, element gap 12px.

### 1.4 Mandatory Dark Mode

Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Theme switching must not require HTML restructuring. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label`.

### 1.5 Flexbox & Mobile-First

All layouts use Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified. Mobile-responsive out of the box (rows → columns on small viewports). No horizontal scrolling.

### 1.6 Icons

Use Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

---

## 2. Component Specifications

### 2.1 Announcement Marquee
Full-width `#000000` bar, repeating `#ffffff` uppercase ABC ROM Extended 10px/500, 10px line height, single-line messages, animated horizontal loop over 40s linear.

### 2.2 Editorial Utility Navigation
ROM 14px/700, lowercase, `#f5e78d` text. 1px solid `#f5e78d` divider separating nav from hero. Padding 10px horizontal / 22px vertical where a padded nav row is needed. Transparent background over imagery.

### 2.3 Transparent Yellow Navigation Control
Transparent bg, `#f5e78d` text, 1px `#f5e78d` border, 0px radius, no internal padding. Text-like, not a filled button.

### 2.4 White Outline Pill Link
Transparent fill, `#ffffff` text, 1px solid `#ffffff` border, 100px radius, 12px vertical / 24px horizontal padding. ROM 12px/700 uppercase, 12px line height.

### 2.5 White Filled Pill Link
`#ffffff` fill, `#000000` text and border, 100px radius, 12px 24px padding. ROM 12px/700 uppercase, 12px line height.

### 2.6 Add-to-Bag Button
`#111111` fill, `#ffffff` text, 1px solid `#ffffff` border, 20px radius, 8px vertical / 12px horizontal padding. Retain white `0 0 0 1px` inset outline when an explicit edge is needed.

### 2.7 Product Tile
Transparent, 0px radius, no border, no shadow, 0px card padding. White product copy over/beneath imagery. 12px internal rhythm. Add-to-bag control remains its own `#111111` rounded element.

### 2.8 New Product Badge
Transparent fill, `#f5e78d` text, 1px `#f5e78d` border, 2px radius, 6px vertical / 10px horizontal padding. ROM 10px/400, 10px line height, uppercase, 1.2px tracking.

### 2.9 Tracked Collection Link
Transparent fill, `#f5e78d` text, no radius. ROM or Gaisyr 14px/400, 19.6px line height, uppercase, 1.68px letter spacing. Text-decoration-color transition only on hover (no filled hover state).

### 2.10 Editorial Section Heading
`#f5e78d` Gaisyr 20px/700, 22px line height, 1.2px tracking only for highly editorial uppercase labels. Short; let surrounding black space carry scale.

### 2.11 Extended Display Statement
ROM Extended 48px/700, 57.6px line height, uppercase, normal tracking, `#ffffff` text on `#080808` or photographic dark field.

### 2.12 Button States (all buttons)
Default: flex, `align-items: center; justify-content: center; gap: 0.5rem`, min touch target 44x44px.
Hover: brightness/shadow shift, `cursor: pointer`.
Focus: distinct focus ring via CSS variables.
Active/Pressed: `transform: scale(0.97)`.
Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
Success/Error: temporary feedback via `--text-success`/`--text-error`.

### 2.13 Card States (product tiles)
Default: flex layout, subtle borders/elevation using `--bg-secondary` and CSS variables.
Hover: elevation/shadow shift or `transform: translateY(-2px)`.
Focus-within: highlight borders when child link/button receives focus.
Loading (Skeleton): shimmer animation in CSS, no layout jumps.
Empty State: Google Icon + guidance text.

### 2.14 Form & Input States
Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Flex container wrapping label, input, dedicated error feedback container.

### 2.15 Modal/Popup States
Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions). Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

---

## 3. Page Sections Required

Build a complete landing page with these sections:

1. **Hero** — full-bleed sun-drenched photographic field; oversized butter-yellow wordmark (`#f5e78d`) spanning upper composition; transparent utility nav (ROM 14px/700) with `#f5e78d` 1px divider overlaying the image; nav rule overlays image rather than sitting in opaque header.
2. **Features** — 3 cards (product tiles / editorial cards) with raw-edge imagery, white metadata, butter-yellow accents.
3. **How It Works** — 3 steps with numbered markers, ROM body copy, butter-yellow kickers.
4. **Testimonials** — editorial quotes in Gaisyr, butter-yellow on black.
5. **Pricing** — 3 tiers with add-to-bag style buttons, white pill links, feature lists.
6. **FAQ** — accordion-style, butter-yellow questions, ash body answers.
7. **Final CTA** — `#080808` panel with `#ffffff` ROM Extended 48px/700 uppercase display statement at 57.6px line height and a transparent `#ffffff`-outline pill link (12px 24px padding, 100px radius).
8. **Footer** — deep black band with secondary links, ROM utility labels, hairline dividers.

---

## 4. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing, breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No gradients. No soft drop shadows. Flat black surface separation with occasional 1px rules.
- Do not replace `#f5e78d` with generic white/neon yellow for headings, nav, borders, badges.
- Do not use rounded cards (product tiles: 0px radius, no shadow, no container padding).
- Do not turn all actions into white filled pills; reserve white pill for inverted conversion links.
- No radius between 20px and 100px for buttons.
- Do not set large campaign headings in Gaisyr; use ROM Extended for 48px display.

---

## 5. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- BEM naming convention throughout.
- No lorem-ipsum-only submissions where real copy is implied; placeholders allowed only where content genuinely unspecified. Invent fictional brand name, products, and copy. Never use the real brand name, logo, trademarks, or product names.
- All user-facing copy in English.

---

## 6. Edit Mode (not applicable — this is a from-scratch build)

N/A.

---

Output only the three files' content structure as described. Begin with `index.html`.You are an expert front-end developer. Build a complete, production-quality landing page using a CSS-first architecture with zero inline CSS, mandatory dark mode, flexbox layout, Tailwind CSS (or clean custom CSS driven by Tailwind's @layer/@apply), Google Fonts for text and icons, and full component state coverage. Output three separate files: index.html, style.css, and script.js. Use a single consistent class-naming convention (BEM) across the entire deliverable. No inline <script> blocks beyond a single deferred entry-point reference.

## 1. Theme & Visual System — "Bedouin's Daughter" (Nocturnal Zine)

This spec describes the visual style of a real brand. Reuse the style only. Invent a fictional brand name, products, and copy. Never use the real brand name, logo, trademarks, or product names anywhere in the page.

Theme: Dark. The canvas is near-black; butter yellow is the continuous editorial thread.

### 1.1 Color Tokens (define in :root and a .dark / prefers-color-scheme scope)

--color-void: #000000;
--color-charcoal: #080808;
--color-ink: #111111;
--color-white: #ffffff;
--color-ash: #999999;
--color-desert-butter: #f5e78d;

Contrast pairing: light surfaces pair with dark text; dark surfaces pair with light/yellow text. The default canvas is --color-void (not pure white). Where a near-white is needed, use #fefefe.

### 1.2 Typography Tokens (Google Fonts mandatory)

Load via <link>/@import. Map families to --font-*:

- --font-rom: ROM substitute → Arial, Helvetica, sans-serif. Weights 400, 700.
- --font-gaisyr: Gaisyr substitute → Libre Baskerville, Georgia, serif. Weights 400, 700.
- --font-abc-rom-extended: Arial Narrow, Arial, sans-serif. Weight 500.
- --font-rom-extended: Arial Narrow, Impact, sans-serif. Weights 400, 700.
- --font-gtstandard-m: Arial, Helvetica, sans-serif. Weight 400.

Type scale tokens:

--text-announcement: 500 10px/1.00 var(--font-abc-rom-extended);
--text-button-label: 700 12px/1.00 var(--font-rom);
--text-body: 400 14px/1.40 var(--font-rom);
--text-utility-link: 400 14px/1.40 var(--font-rom); letter-spacing 1.68px;
--text-section-kicker: 700 14px/1.20 var(--font-gaisyr);
--text-editorial-quote: 700 16px/1.20 var(--font-gaisyr);
--text-editorial-heading: 700 20px/1.10 var(--font-gaisyr); letter-spacing 1.2px;
--text-display: 700 48px/1.20 var(--font-rom-extended);

### 1.3 Spacing, Radius, Shadow, Elevation Tokens

Base unit 4px. Spacing scale: --spacing-4 4px, --spacing-8 8px, --spacing-12 12px, --spacing-16 16px, --spacing-20 20px, --spacing-24 24px, --spacing-32 32px, --spacing-40 40px, --spacing-64 64px, --spacing-100 100px.

Radius: cards 0px, links 0px, pills 100px, badges 2px, images 0px, buttons 20px.

Shadow: --shadow-subtle: inset 0 0 0 1px #ffffff; (white keyline).

Elevation: flat surfaces separated by --color-desert-butter hairlines, tonal shifts from void to ink, and the white inset keyline on dark purchase buttons. No cast shadows, no gradients.

Layout: section gap 64px, card padding 12px, element gap 12px.

### 1.4 Mandatory Dark Mode

Provide dark mode tokens under @media (prefers-color-scheme: dark) and a .dark class selector. Theme switching must not require HTML restructuring. Persist user choice via localStorage, falling back to prefers-color-scheme on first visit. Include a visible toggle control with correct aria-pressed/aria-label.

### 1.5 Flexbox & Mobile-First

All layouts use Flexbox. Every flex container defaults to align-items: center unless explicitly justified. Mobile-responsive out of the box (rows → columns on small viewports). No horizontal scrolling.

### 1.6 Icons

Use Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 2. Component Specifications

### 2.1 Announcement Marquee
Full-width #000000 bar, repeating #ffffff uppercase ABC ROM Extended 10px/500, 10px line height, single-line messages, animated horizontal loop over 40s linear.

### 2.2 Editorial Utility Navigation
ROM 14px/700, lowercase, #f5e78d text. 1px solid #f5e78d divider separating nav from hero. Padding 10px horizontal / 22px vertical where a padded nav row is needed. Transparent background over imagery.

### 2.3 Transparent Yellow Navigation Control
Transparent bg, #f5e78d text, 1px #f5e78d border, 0px radius, no internal padding. Text-like, not a filled button.

### 2.4 White Outline Pill Link
Transparent fill, #ffffff text, 1px solid #ffffff border, 100px radius, 12px vertical / 24px horizontal padding. ROM 12px/700 uppercase, 12px line height.

### 2.5 White Filled Pill Link
#ffffff fill, #000000 text and border, 100px radius, 12px 24px padding. ROM 12px/700 uppercase, 12px line height.

### 2.6 Add-to-Bag Button
#111111 fill, #ffffff text, 1px solid #ffffff border, 20px radius, 8px vertical / 12px horizontal padding. Retain white 0 0 0 1px inset outline when an explicit edge is needed.

### 2.7 Product Tile
Transparent, 0px radius, no border, no shadow, 0px card padding. White product copy over/beneath imagery. 12px internal rhythm. Add-to-bag control remains its own #111111 rounded element.

### 2.8 New Product Badge
Transparent fill, #f5e78d text, 1px #f5e78d border, 2px radius, 6px vertical / 10px horizontal padding. ROM 10px/400, 10px line height, uppercase, 1.2px tracking.

### 2.9 Tracked Collection Link
Transparent fill, #f5e78d text, no radius. ROM or Gaisyr 14px/400, 19.6px line height, uppercase, 1.68px letter spacing. Text-decoration-color transition only on hover (no filled hover state).

### 2.10 Editorial Section Heading
#f5e78d Gaisyr 20px/700, 22px line height, 1.2px tracking only for highly editorial uppercase labels. Short; let surrounding black space carry scale.

### 2.11 Extended Display Statement
ROM Extended 48px/700, 57.6px line height, uppercase, normal tracking, #ffffff text on #080808 or photographic dark field.

### 2.12 Button States (all buttons)
Default: flex, align-items: center; justify-content: center; gap: 0.5rem, min touch target 44x44px.
Hover: brightness/shadow shift, cursor: pointer.
Focus: distinct focus ring via CSS variables.
Active/Pressed: transform: scale(0.97).
Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
Disabled: opacity: 0.5, greyscale, cursor: not-allowed.
Success/Error: temporary feedback via --text-success/--text-error.

### 2.13 Card States (product tiles)
Default: flex layout, subtle borders/elevation using --bg-secondary and CSS variables.
Hover: elevation/shadow shift or transform: translateY(-2px).
Focus-within: highlight borders when child link/button receives focus.
Loading (Skeleton): shimmer animation in CSS, no layout jumps.
Empty State: Google Icon + guidance text.

### 2.14 Form & Input States
Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Flex container wrapping label, input, dedicated error feedback container.

### 2.15 Modal/Popup States
Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions). Centered flex container (align-items: center), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. Page Sections Required

Build a complete landing page with these sections:

1. Hero — full-bleed sun-drenched photographic field; oversized butter-yellow wordmark (#f5e78d) spanning upper composition; transparent utility nav (ROM 14px/700) with #f5e78d 1px divider overlaying the image; nav rule overlays image rather than sitting in opaque header.
2. Features — 3 cards (product tiles / editorial cards) with raw-edge imagery, white metadata, butter-yellow accents.
3. How It Works — 3 steps with numbered markers, ROM body copy, butter-yellow kickers.
4. Testimonials — editorial quotes in Gaisyr, butter-yellow on black.
5. Pricing — 3 tiers with add-to-bag style buttons, white pill links, feature lists.
6. FAQ — accordion-style, butter-yellow questions, ash body answers.
7. Final CTA — #080808 panel with #ffffff ROM Extended 48px/700 uppercase display statement at 57.6px line height and a transparent #ffffff-outline pill link (12px 24px padding, 100px radius).
8. Footer — deep black band with secondary links, ROM utility labels, hairline dividers.

## 4. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing, breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (transition: var(--transition-normal)), respecting prefers-reduced-motion.
- Accessibility: sufficient contrast in both light/dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; aria-live regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No gradients. No soft drop shadows. Flat black surface separation with occasional 1px rules.
- Do not replace #f5e78d with generic white/neon yellow for headings, nav, borders, badges.
- Do not use rounded cards (product tiles: 0px radius, no shadow, no container padding).
- Do not turn all actions into white filled pills; reserve white pill for inverted conversion links.
- No radius between 20px and 100px for buttons.
- Do not set large campaign headings in Gaisyr; use ROM Extended for 48px display.

## 5. Deliverables

- Separate index.html, style.css, script.js. No inline <script> blocks beyond a single deferred entry-point reference.
- BEM naming convention throughout.
- No lorem-ipsum-only submissions where real copy is implied; placeholders allowed only where content genuinely unspecified. Invent fictional brand name, products, and copy. Never use the real brand name, logo, trademarks, or product names.
- All user-facing copy in English.

Begin with index.html.
