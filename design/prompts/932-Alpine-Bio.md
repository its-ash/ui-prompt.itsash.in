# Alpine Bio Landing Page — Coding AI Prompt

## 1. Strict Rules & Architecture

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. Forbid the `style="..."` attribute in HTML.
- Target all design properties, layout rules, and states via class/ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` (and theme classes) using CSS variables:
- Colors: `--color-parchment: #f5f5f5`, `--color-warm-cream: #f8f4e6`, `--color-paper-white: #ffffff`, `--color-mist-gray: #e9e9e9`, `--color-ink: #1e1e1f`, `--color-carbon: #000000`, `--color-sky-blue: #8ec7e2`, `--color-pollen-yellow: #f7ca50`. Also expose generic tokens `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` mapped to the above.
- Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text, for every theme.
- Light mode background must not be pure white; use `#f5f5f5` (canvas) and `#f8f4e6` (warm sections). Where near-white is needed use `#fefefe`.
- Border radius/shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md` (shadows defined but applied as zero per theme rule).
- Spacing/transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Spacing scale tokens: `--spacing-4` (4px) through `--spacing-150` (150px) per the spec.
- Typography tokens: `--font-switzer`, `--font-geist`, `--font-pt-mono`, `--font-system-sans-serif`, plus `--text-caption`, `--text-body`, `--text-subheading`, `--text-heading-sm`, `--text-heading`, `--text-heading-lg`, `--text-display`.

**1.3 Mandatory Dark Mode Support**
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector, with seamless variable switching.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit; include a visible toggle with correct `aria-pressed`/`aria-label`.
- Exception: The Alpine Bio theme is calibrated around a cream canvas and must not be darkened in its default presentation; the dark-mode tokens are provided for structural compliance only and the default render must remain light. Do not invert the apothecary warmth.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- All flex layouts must be mobile-responsive (rows to columns on small viewports); prevent horizontal scrolling.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless another framework is requested.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Use Google Fonts for text and icons. Include `<link>`/`@import` for Switzer (or Inter/General Sans/DM Sans substitute), Geist (or Inter/Söhne), PT Mono (or JetBrains Mono/IBM Plex Mono), and system sans-serif fallback. Bind to `--font-base`/family tokens.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 2. Component Design Specifications

**2.1 Button Component**
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`), min touch target 44x44px, 22px pill radius, Sky Blue `#8ec7e2` fill, Carbon `#000000` text at 13px Geist weight 400, 12px vertical / ~16px horizontal padding, no border, no shadow.
- Always paired with a circular arrow icon to the right of the label.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.

**2.2 Card Component**
- Default: flexible flexbox layout, subtle borders/elevation via `--bg-secondary` and CSS variables, 22px radius.
- Hover: elevation/shadow shift or `transform: translateY(-2px)` (note: theme forbids shadows; use transform only).
- Focus-within: highlight borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and guidance text.

**2.3 Form & Input**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, and dedicated error feedback container.

**2.4 Modal / Popup**
- States: Opening, Open, Loading, Success/Error, Closing (all CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 4. Deliverable & Output Format

- File structure: separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- Naming: one consistent convention (BEM or fixed utility set) across the deliverable; never mix.
- No unrequested placeholders: real copy/labels where supplied; placeholders only where content genuinely unspecified.

## Theme Application — Alpine Bio

- Fictional brand: invent a fictional brand name, product, and copy. Never use the real brand name "Alpine Bio", its logo, trademarks, or product names anywhere in the page.
- Palette: canvas `#f5f5f5`, warm cream sections `#f8f4e6`, paper white `#ffffff`, mist gray `#e9e9e9`, ink `#1e1e1f`, carbon `#000000`, sky blue `#8ec7e2` (pill buttons only), pollen yellow `#f7ca50` (small typographic accents only).
- Typography: Switzer for display/headings 20px+ (weights 400/500, tight -0.0500em tracking); Geist for body 13–42px; PT Mono 13px for nav/labels uppercase; system sans-serif 12px micro-copy. Type scale: caption 12px, body 15px, subheading 18px, heading-sm 22px, heading 32px, heading-lg 48px, display 76px.
- Radius: 22px for buttons/labels/cards/pills; 3px for nav bar only. No sharp corners on user-facing controls.
- Zero drop shadows everywhere; depth via surface color shifts only.
- Flat, unshadowed, pill-rounded components. No gradients.
- Full-bleed, left-aligned layout; no centered max-width container for body sections. Hero is full-viewport image with centered overlay text. Editorial body sections start from left edge, content ~half viewport. 80px section gaps. Sticky top nav: logo left, PT Mono nav items center-left, pill Contact Us right.
- Nav items: INGREDIENTS ▾, APPLICATIONS, COMPANY, INTEL (use fictional equivalents).
- Pollen Yellow only for small typographic accents (breadcrumb labels, scroll cues, footer highlights) — never button fill or large background.
- Every pill button paired with right-side circular arrow icon.
- Photography: full-bleed high-res product close-ups, natural warm light, no people/props beyond food. (Use placeholder images with descriptive alt text.)

## Sections to Build

1. **Hero** — full-viewport background image, centered overlay: 76px Switzer weight 400 white headline, 18px Geist body copy, Primary Pill Button below, "SCROLL DOWN" indicator in Pollen Yellow at bottom.
2. **Features** — 3 cards (Application Showcase style: full-bleed image, 22px radius, PT Mono 13px white label bottom-left). Section heading in Switzer 32–48px left-aligned with carousel arrow controls right-aligned; dot indicators below.
3. **How It Works** — 3 steps, left-aligned, editorial layout.
4. **Testimonials** — cards on warm cream or canvas surface.
5. **Pricing** — 3 tiers.
6. **FAQ** — accordion-style questions.
7. **Final CTA** — left-aligned editorial block with pill button.
8. **Footer** — warm cream background, secondary links in PT Mono/Geist, pollen yellow accents.

Implement all component states (button, card, form, modal) per Section 2, with accessibility and responsiveness per Section 3. Output separate `index.html`, `style.css`, `script.js`.
