# UI/UX Coding Prompt — LE CAMP Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a **fictional brand** (invent a new brand name, product, and copy — never use "LE CAMP", its logo, trademarks, or real product names). The visual language is an alpine expedition base-camp aesthetic: near-monochrome canvas (#ffffff / #000000) pierced by a single flare-red accent (#fe3a3a), with dramatic photographic scale and badge-style illustration. Sections: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 2. Architecture & File Structure
- Separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere.
- All styling lives in `style.css`. Use class/ID selectors only. Keep HTML semantic and styling-agnostic.
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) mapping utilities to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No lorem-ipsum-only submissions; invent real fictional copy and labels.

## 3. CSS Variables & Theme Tokens
Define all tokens in `:root` (and theme classes) in `style.css`:

Colors:
- `--color-signal-red: #fe3a3a;`
- `--color-carbon-ink: #000000;`
- `--color-summit-white: #fefefe;` (use `#fefefe` instead of pure white where a white/near-white is needed)
- `--color-ridge-gray: #767676;`
- `--bg-primary: var(--color-summit-white);`
- `--bg-secondary: #f5f5f5;`
- `--bg-cream: #f5f0e8;`
- `--bg-dark: #0a1628;`
- `--text-primary: var(--color-carbon-ink);`
- `--text-secondary: var(--color-ridge-gray);`
- `--text-on-dark: var(--color-summit-white);`
- `--text-success` / `--text-error` (define for form states)
- `--border-default: var(--color-carbon-ink);`
- `--border-input: var(--color-ridge-gray);`
- `--border-error` / `--border-success`

Typography (Google Fonts mandatory):
- Text: Bricolage Grotesque (substitute for Agrandir) via Google Fonts `<link>`/`@import`, bound to `--font-display`.
- Body/UI: Inter (substitute for DM Sans) via Google Fonts, bound to `--font-base`.
- Mono labels: JetBrains Mono or IBM Plex Mono via Google Fonts, bound to `--font-mono`.
- `--font-base`, `--font-display`, `--font-mono`.
- Type scale tokens: `--text-caption: 10px;`, `--text-body: 16px;`, `--text-subheading: 26px;`, `--text-display: 90px;`

Spacing & shapes:
- `--spacing-5: 5px; --spacing-10: 10px; --spacing-15: 15px; --spacing-20: 20px; --spacing-30: 30px; --spacing-40: 40px; --spacing-60: 60px;`
- `--radius-sm: 10px; --radius-md: 20px; --radius-lg: 35px;`
- `--shadow-sm: 0 2px 12px rgba(254,58,58,0.25);` (primary CTA)
- `--shadow-md: 0 4px 20px rgba(10,22,40,0.4);` (badges)
- `--spacing-gap: 10px;`
- `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`

Contrast pairing: any light background token pairs with a dark text token; any dark background token pairs with a light text token — enforce for every theme.

Light mode background must not be pure white; use `#fefefe` where a white/near-white is needed. Do not default to pure white.

## 4. Mandatory Dark Mode
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Flexbox, Mobile-First, Accessibility
- Build layouts with Flexbox (`display: flex`). Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box: convert rows to columns on smaller viewports; prevent horizontal scrolling.
- Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Respect `prefers-reduced-motion` for animations.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`).

## 6. Icons
- Use Google Material Symbols/Icons only. Forbid raw inline SVGs or local icon files.

## 7. Component Specifications

### Primary CTA Button (Pill)
- Filled `#fe3a3a` background, `#fefefe` text, display font 400 at 14px, 35px border-radius (pill), 10px vertical × 20px horizontal padding, no border. Drop shadow `0 2px 12px rgba(254,58,58,0.25)`.
- States: default, hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring via CSS vars), active (transform scale 0.97), loading (disabled interactions, CSS spinner, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).
- Min touch target 44x44px. Flex layout `display: flex; align-items: center; justify-content: center; gap: 0.5rem;`.

### Secondary Button (Rounded)
- Transparent or `#fefefe` background, `#000000` text, base font 400 at 14px, 10px border-radius, 10px×20px padding, 1px solid `#000000` border. Lower visual weight.

### Menu Trigger
- Transparent background, text color adapts to surface, base font 400 at 14px, hamburger icon (three horizontal lines) left of label, 10px border-radius, 10px×20px padding.

### Display Heading (Agrandir 90)
- Display font weight 600 at 90px, line-height 1.0, normal letter-spacing. `#fefefe` over dark imagery, `#000000` over light surfaces.

### Section Label (Mono Tag)
- Mono font 400 at 10px, line-height 1.3, letter-spacing 0.04em, uppercase, `#000000`. Sits above section headings.

### Program Patch Badge
- Shield/badge-shaped (rounded top, flat/pointed bottom), ~120px wide, 2px stroke, monochromatic fill in `#fe3a3a`, `#4a7fc5`, or `#fefefe` outline on dark. Contains line-art iconography and program name in base font 400 at 10–12px. Floating decorative elements in hero.

### Cream Feature Card
- `#f5f0e8` background, 20px border-radius, 40px padding all sides, no border, no shadow. Contains section label (mono tag) in `#000000` and body heading in `#fe3a3a` at display 26–90px.

### Input Field
- `#fefefe` background, 1px solid `#767676` border, 10px border-radius, base font 400 at 16px, 10px×15px padding. Placeholder in `#767676`. Focus: border shifts to `#000000`.

### Navigation Bar
- Fixed top bar, transparent over hero / `#fefefe` with 1px `#000000` bottom border over light sections. Brand mark (red triangle badge) left, CTA pill + menu trigger right. 15px vertical padding.

### Stat Block
- Centered or left-aligned, base font 400 at 16px body with 26px emphasis on the number. No card wrapper.

### Card (Features)
- Flexible flexbox layout, subtle borders and elevation using `--bg-secondary` and CSS vars. Hover: elevation/shadow shift or subtle transform (translateY -2px). Focus-within: highlights borders. Loading (skeleton): shimmer animation in CSS. Empty state: Google Icon + guidance text.

### Modal (if used)
- States: opening, open, loading, success/error, closing (CSS transitions). Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 8. Page Sections
1. **Hero** — full-bleed dark (`#0a1628`) mountain photograph at 100vh. Centered headline (display 90px, `#fefefe`). Subtext (base 16px, `#fefefe`, opacity 0.85). Three program patch badges floating around headline. Section label above headline (mono 10px uppercase, `#fefefe`).
2. **Features** — 3 cards on `#fefefe`, max-width 1200px, 60px vertical padding. Each card: icon (Material Symbols), heading, body.
3. **How It Works** — 3 steps, `#f5f5f5` background, numbered steps with mono labels.
4. **Testimonials** — centered single-column, `#fefefe` background.
5. **Pricing** — 3 tiers, `#f5f0e8` cream cards, primary CTA on recommended tier.
6. **FAQ** — accordion-style, `#fefefe` background, `#000000` borders.
7. **Final CTA** — `#fe3a3a` accent reserved for the button only; section background `#fefefe` or `#f5f5f5`.
8. **Footer** — secondary links, `#000000` text on `#fefefe`, 1px top border.

Section rhythm: dark hero → white → light gray → cream card, with 60px vertical gaps. Body sections max-width 1200px centered with generous side padding.

## 9. Do's and Don'ts
- Use `#fe3a3a` exclusively for primary CTAs, brand logo, and emphasis body text — never as background fill for large non-action surfaces.
- Set display headlines at 90px display weight 600, line-height 1.0.
- Apply 35px radius to primary CTA, 10px to secondary — radius difference signals action weight.
- Use mono 10px uppercase with 0.04em letter-spacing for section labels above headings.
- Separate sections with 60px vertical gaps; alternate `#fefefe`, `#f5f5f5`, `#f5f0e8`.
- Keep all structural borders at 1px solid `#000000`.
- Use `#767676` only for input borders — never text, buttons, or card edges.
- Do not introduce any color outside `#fe3a3a`, `#000000`, `#fefefe`/`#ffffff`, `#767676` (plus the `#4a7fc5` badge accent and `#0a1628` dark hero and `#f5f0e8` cream).
- Do not apply drop shadows to cards, panels, or neutral surfaces — elevation only on red CTA and hero illustrations.
- Do not set body text above 18px or use display font for running prose.
- Do not use 0px or 4px border-radius — only 10px, 20px, 35px.
- Do not place red text on red background or white on white.
- Do not use cream as full-page background — card surface only.
- Do not use gradients — strictly flat color and photography.

## 10. Deliverables
- `index.html`, `style.css`, `script.js`.
- Google Fonts `<link>`/`@import` for display, base, and mono fonts plus Material Symbols.
- All copy in English (invent fictional brand/product/content).
- No unrequested placeholders where real copy was supplied; placeholders only where content genuinely unspecified.

## 11. Edit Mode (N/A — from-scratch build)
This is a from-scratch build; edit-mode constraints do not apply. If any requested style change cannot be achieved without adding markup, stop and ask.
