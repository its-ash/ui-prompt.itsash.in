# Coding-AI Prompt: Complete Landing Page — "Getanchor" Style System

## 1. Strict Rules & Architecture to Enforce

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. Forbid `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:

Colors:
- `--color-ink: #1e1e1e`
- `--color-cream-canvas: #e3d7cd`
- `--color-warm-white: #f0e9e5`
- `--color-paper-white: #f5f2f0`
- `--color-pure-white: #ffffff`
- `--color-sand-border: #c9c9c7`
- `--color-stone-text: #767676`
- `--color-charcoal: #000000`
- `--color-terracotta: #ee884f`

Also map to the standard semantic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

Contrast pairing: every light background must pair with a dark text token and every dark background with a light text token, in both themes.

Light-mode background must not be pure white; use `#e3d7cd` (cream canvas) as the page base. Where a near-white is needed, use `#fefefe` instead of `#ffffff`.

Radius & shadows:
- `--radius-sm: 4px`
- `--radius-md: 4px`
- `--radius-lg: 4px`
- `--radius-pill: 4800px`
- `--shadow-subtle: 0px 1px 1px 0px rgba(0,0,0,0.06), 0px 2px 1px 0px rgba(0,0,0,0.04), 0px 4px 1px 0px rgba(0,0,0,0.01)`

Spacing & transitions:
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`

Elevation/stacking:
- `--z-dropdown`, `--z-modal`, `--z-toast`

Typography:
- `--font-base: 'Archivo', sans-serif` (load via Google Fonts)
- Type scale tokens: `--text-caption`, `--text-body`, `--text-subheading`, `--text-heading-sm`, `--text-heading`, `--text-heading-lg`, `--text-display` with the sizes/line-heights/letter-spacings from the spec.

**1.3 Mandatory Dark Mode Support**
- Provide dark-mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless an explicitly justified exception exists.
- All flex layouts must be mobile-responsive (rows become columns on small viewports). No horizontal scrolling.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless another framework is requested.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Use Google Fonts for text (Archivo, weights 400 and 600) and bind to `--font-base`.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 2. Component Design Specifications to Enforce

**2.1 Button Component**
Style all states via CSS classes:
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`), min touch target 44x44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback state styles driven by `--text-success`/`--text-error`.

Variants required: Primary CTA (terracotta pill `#ee884f` fill, white text, 4800px radius, 8px 24px padding, no border/shadow), Dark CTA (ink `#1e1e1e` fill, white text, pill), Ghost Nav (no fill/border, ink text, 400 weight), Danger (`.btn-danger`, visually distinct in both themes).

**2.2 Card Component**
- Default: flexible flexbox layout, subtle borders, elevation using `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or subtle transform (`translateY(-2px)`).
- Focus-within: highlights card borders when a child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty State: structured fallback with Google Icon and clear guidance text.

**2.3 Form & Input**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, and dedicated error feedback container.

**2.4 Modal / Popup**
- States: Opening, Open, Loading, Success/Error, Closing (all CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.

## 4. Deliverables & Output Format

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where content is genuinely unspecified.

## 5. Content & Branding Override

- Invent a fictional brand name, product, and copy. Never use "Getanchor", its logo, trademarks, or product names anywhere in the page.
- All user-facing copy must be written in English.

## 6. Page Sections to Build

Build a complete landing page with these sections in order:

1. **Hero** — two-column split: text-left (eyebrow label, headline, description, primary CTA) and visual-right (product card on a warm peach-to-cream gradient panel). Page background `#f0e9e5`. Eyebrow: Archivo 600, 11px, letter-spacing 0.66px, uppercase, ink. Headline: Archivo 600, 68px, ink, letter-spacing -2.04px, line-height 0.9. Body: Archivo 400, 16px, ink. Primary CTA: terracotta pill.
2. **Features (3 cards)** — three-up grid of feature cards. Each: warm white `#f0e9e5` surface, 4px radius, 24px padding, no border/shadow. Title Archivo 600, 15px, ink. Description Archivo 400, 15px, stone text. 24px gap.
3. **How It Works (3 steps)** — three numbered steps in a row (stack on mobile). Each step: number in terracotta, title Archivo 600 18px ink, description Archivo 400 15px stone text. Connected by a subtle hairline or spacing.
4. **Testimonials** — 2–3 testimonial cards on cream canvas. Each: quote in Archivo 400 16px ink, author name Archivo 600 14px ink, role Archivo 400 13px stone text. Subtle border or shadow.
5. **Pricing (3 tiers)** — three pricing cards. Middle tier highlighted with terracotta border or accent. Each: tier name (eyebrow style), price in display size, feature list with check icons, CTA button. Use terracotta pill for the highlighted tier's CTA, dark pill for others.
6. **FAQ** — accordion of 5–6 questions. Question in Archivo 600 16px ink, answer in Archivo 400 15px stone text. Expand/collapse via CSS transitions. Keyboard accessible.
7. **Final CTA** — centered section on cream canvas: headline Archivo 600 44px ink, short description, terracotta pill CTA.
8. **Footer** — multi-column footer on cream canvas: logo, nav links grouped, secondary links, copyright. Links in stone text, hover to ink.

## 7. Style-Specific Rules (from the spec)

- Use only `#ee884f` for primary action fills — never a second chromatic accent.
- Headlines in Archivo 600 with -0.03em tracking; never 400 for display sizes.
- Use the warm cream surface stack (`#e3d7cd` → `#f0e9e5` → `#f5f2f0` → `#ffffff`) for elevation — never pure white as the page base.
- Apply 4800px radius to all buttons, badges, and icon containers (pill shape is signature).
- Use 4px radius for all cards, inputs, and nav containers.
- Keep shadows under 4px blur with opacity ≤ 0.06 (paper grain, not depth).
- Eyebrows and nav labels in 11px Archivo 600, 0.06em letter-spacing, uppercase.
- Do not use pure black `#000000` for body text; use `#1e1e1e`.
- Do not round cards to 8/12/16px — the 4px card + 4800px button contrast is the system.
- No heavy drop shadows or colored glows; the system is nearly flat.
- Do not center body copy in paragraphs — keep paragraphs left-aligned.
- Do not use weight 700 or 800 — Archivo only ships 400 and 600.
- Do not mix cream and pure-white backgrounds within a single section; pick one surface tone and commit.
- Hero right panel gradient: `linear-gradient(180deg, #e8a87a 0%, #f0c9a3 40%, #f0e9e5 100%)` — use only for full-bleed media containers, never as section background or button fill.
- Partner-style logo bar (if included) on cream canvas, monochrome ink logos, 80–120px section gap.
- OpenType features: `"ss01" on`.

## 8. Navigation Bar

- Flat top bar: logo left, centered nav items (Ghost Nav Button style), single dark CTA pill right.
- No sticky behavior.
- Elevation shadow (the subtle three-layer shadow) on the nav bar.

## 9. Dark Mode Adaptation

- In dark mode, invert the cream stack to warm dark tones while preserving the terracotta accent and ink-on-cream contrast logic. Keep terracotta `#ee884f` as the single chromatic accent in both themes.
- Ensure all text/background pairings maintain sufficient contrast in both themes.

## 10. Output

Produce `index.html`, `style.css`, and `script.js` implementing the above. Use BEM class naming throughout. No inline styles. All copy in English. Invent a fictional brand name and product. Include theme toggle with persistence. Include responsive breakpoints. Include all component states (button states, card hover/focus, input states, modal if used, accordion FAQ). Respect `prefers-reduced-motion`. Ensure full keyboard accessibility and ARIA attributes.
