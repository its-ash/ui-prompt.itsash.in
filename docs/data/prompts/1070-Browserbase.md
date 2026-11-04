# Browserbase-Style Landing Page — Coding AI Prompt

You are building a complete, production-quality landing page from scratch. Follow every rule below. Output three separate files: `index.html`, `style.css`, `script.js`. No inline CSS anywhere. No inline SVGs or local icon files — use Google Material Symbols for icons and Google Fonts for text. Use Tailwind CSS via CDN with `@layer`/`@apply` directives mapping to CSS variables, or clean custom CSS driven by Tailwind utilities. All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`). Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions. No lorem-ipsum-only submissions; invent realistic fictional copy, brand name, product name, and labels. Never use the real brand name "Browserbase", its logo, trademarks, or product names anywhere in the page — invent a fictional brand and product.

## 1. CSS-First Architecture & Zero Inline CSS

- All styling lives strictly in `style.css`. Forbid the `style="..."` attribute in HTML entirely.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing only CSS.
- No new HTML tags or DOM nodes beyond what the page structure requires; work within the existing element/class structure when modifying.

## 2. CSS Variables & Theme Tokens

Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:

**Colors (Browserbase palette):**
- `--color-ink-black: #000000` (primary text, filled action buttons, card borders, dividers)
- `--color-paper-white: #ffffff` (page canvas, card surfaces, button text on dark fills)
- `--color-faint-slate: #f8fafc` (logo strip cards, secondary panel backgrounds, alternating section tint)
- `--color-lavender-mist: #e2e9f3` (feature card surfaces, section background tints)
- `--color-blue-gray-mist: #c5d3e8` (hero background tint, code-card surfaces, soft borders)
- `--color-cream-wash: #fffde6` (warm secondary card surfaces, badge backgrounds)
- `--color-sky-tint: #c4edff` (code/terminal block backgrounds, inline highlight washes, light badge fills)
- `--color-graphite: #686562` (muted body text, secondary borders)
- `--color-signal-orange: #ff4500` (typographic accent only — headlines and footer band; never buttons)

Map these to the standard semantic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Light background tokens pair with dark text tokens and dark background tokens pair with light text tokens for every theme.

**Light mode background:** use `#fefefe` where a white/near-white is needed rather than pure `#ffffff` for the page canvas token where appropriate; keep `--color-paper-white: #ffffff` for card surfaces and button text.

**Border radius & shadows:**
- `--radius-sm: 3px` (browser mockup, inputs)
- `--radius-md: 4px` (cards)
- `--radius-lg: 50px` (pill buttons)
- `--shadow-sm`, `--shadow-md`: define as `none` by default — elevation is communicated through surface color and 1px borders, never drop shadows. The only shadow is a single soft blue-gray halo (`#c5d3e8`) behind the hero illustration area.

**Spacing & transitions:**
- `--spacing-gap: 16px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Elevation/stacking:**
- `--z-dropdown: 100`
- `--z-modal: 1000`
- `--z-toast: 1100`

**Typography tokens:**
- `--font-base: 'Inter', sans-serif` (plain UI face; substitute for GT Planar/Standard Mono unavailable faces)
- `--font-display: 'GT America', 'Inter', sans-serif` (substitute for GT Planar; apply `font-feature-settings: "ss05" on` to all display text)
- `--font-mono: 'JetBrains Mono', monospace` (substitute for GT Standard Mono)
- Type scale tokens: `--text-caption: 14px`, `--text-body: 16px`, `--text-subheading: 24px`, `--text-heading: 34px`, `--text-heading-lg: 45px`, `--text-display: 189px`

Spacing scale tokens: `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-12: 12px`, `--spacing-16: 16px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-40: 40px`, `--spacing-48: 48px`, `--spacing-56: 56px`, `--spacing-60: 60px`, `--spacing-96: 96px`, `--spacing-224: 224px`.

## 3. Mandatory Dark Mode Support

- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` AND a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring. In dark mode, invert surfaces (ink black becomes canvas, paper white becomes text), keep signal orange as the typographic accent, and adjust lavender/blue-gray tints to darker equivalents with sufficient contrast.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label` state.
- Ensure sufficient contrast in both light and dark modes; never rely solely on color to communicate state.

## 4. Flexbox Layout & Mobile-First Alignment

- Build all layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception (e.g., top-aligned two-column rows use `align-items: flex-start`).
- All flex layouts must be mobile-responsive out of the box: convert rows to columns on smaller viewports. Prevent horizontal scrolling.
- Page max-width: 1200px, centered. Section gap: 64-96px. Card padding: 16-24px. Element gap: 8-16px.

## 5. Framework Default & Tailwind CSS Integration

- Use Tailwind CSS via CDN. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`). Use `@layer`/`@apply` directives in `style.css` where helpful.

## 6. Typography & Icons (Google Fonts Mandatory)

- Include Google Font `<link>` tags for Inter (weights 400, 500), GT America substitute (weights 400, 500), and JetBrains Mono (weight 400). Bind them to `--font-base`, `--font-display`, `--font-mono`.
- Use Google Material Symbols for all icons. Forbid raw inline SVGs or local icon files.

## 7. Component Design Specifications

**Pill Action Button (Primary):**
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`), min touch target 44x44px. Background `#000000`, text `#ffffff`, font plain 16px weight 500, padding 8px 21px, border-radius 50px, no border, compact height ~36px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles driven by `--text-success`/`--text-error`.

**Ghost Button:**
- Background transparent, border 1px `#000000`, text `#000000`, plain 16px weight 500, padding 8px 21px, border-radius 50px. Icon to the right of label with 6px gap.

**Orange Highlight Box:**
- Background `#ff4500`, text `#000000`, display font at heading size, normal weight. Inline within headline, same baseline and size. Padding ~2px 6px, no border-radius or very slight (~2px). One highlight box per headline maximum.

**Feature Card:**
- Background `#e2e9f3`, border-radius 4px, padding 16-24px. Contains browser-window mockup (white card, 3-dot chrome, ~3px radius, light gray border), headline in display 16-24px weight 500, body in plain 16px `#686562`, and a 'Get started' pill button at the bottom. Hover: elevation/shadow shift or subtle `transform: translateY(-2px)`. Focus-within: highlights card borders when child link/button receives focus. Loading (skeleton): shimmer animation in CSS. Empty state: structured fallback with Google Icon and guidance text.

**Logo Card:**
- Background `#f8fafc`, border-radius 4px, padding 24px vertical / 24-32px horizontal. Single grayscale company logo centered. Horizontal row with 6-8px column gaps.

**Code/Terminal Card:**
- Background `#c5d3e8` or `#c4edff`, border-radius 4px, padding 16-24px. Mono label at top in mono 14px. One or more light input fields below (white fill, ~3px radius, 1px lavender border).

**Browser Window Mockup:**
- White surface, 1px `#e2e9f3` border, border-radius ~3px. Top bar with three small circular dots in `#c5d3e8`. Content area with simplified UI in monochrome + single-orange language.

**Section Header:**
- Centered. Two-line: large headline in display 34-45px weight 500, `#000000`, letter-spacing -0.68 to -0.9px, with orange highlight box on key phrase. Subtitle below in plain 16px weight 400, `#686562`, line-height 1.50. 16-24px gap between headline and subtitle.

**Mono Eyebrow Label:**
- Mono 14px weight 400, letter-spacing 0.06em, uppercase, color `#000000` or `#686562`. Centered or left-aligned, 16-24px from nearest content block.

**Footer Band:**
- Background `#ff4500`, text `#000000`. Full-bleed. Content stacks centered with plain text links and metadata.

**Modal/Popup (if used):**
- States: opening, open, loading, success/error, closing — all animated via CSS transitions. Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay clicks.

**Form & Input (if used):**
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input field, and dedicated error feedback container.

## 8. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing and responsive breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback: every click, hover, or submission triggers a visible state change.
- Destructive actions: visually distinct `.btn-danger` in both light and dark themes.
- Apply `font-feature-settings: "ss05" on` to all display (gtPlanar-substitute) text.
- Display headlines: letter-spacing -0.02em to -0.05em (tighter as size increases).
- Never use `#ff4500` as button background, border, or hover state — typographic accent only.
- Never use box-shadow for card elevation — surface color contrast and 1px borders instead.
- Never use a display font for body text below 24px — plain (Inter) is the only UI face below 24px.
- Never use 999px radius on buttons — 50px pill is the specific mid-weight.
- Never use chromatic text colors for body copy — text is `#000000` or `#686562` only.
- Never place multiple orange highlight boxes in the same headline — one phrase per line.
- Never use `#0000ee` or browser default link blue — underlined `#000000` is the link style.

## 9. Page Structure & Sections

Build a complete landing page with these sections in order:

1. **Navigation Bar** — sticky top bar, ~56px height, `#ffffff` bg with 1px `#e2e9f3` bottom border. Left: logo (orange B icon + plain wordmark, fictional brand). Center: nav links in plain 16px `#000000`, 16px column gap. Right: 'Log in' text link, 'Sign up' text link, 'Get a demo' pill button. Links spaced 21px apart. Include theme toggle.

2. **Hero** — full-bleed `#c5d3e8` background with dot texture. Centered headline in display 45px weight 500, `#000000`, letter-spacing -0.9px, with `#ff4500` highlight box around key phrase (same size, padding 2px 6px). Subtitle in plain 16px weight 400, `#686562`, line-height 1.50. Primary CTA: black pill button. Secondary CTA: ghost button. Include a pixel-art data-mountain hero illustration (coarse pixel art, green/yellow/orange/black pixels, jagged ridges, light blue dot-textured sky) occupying large hero real estate.

3. **Logo Strip** — full-width quiet band on white. 6-8 grayscale company logos in logo cards (`#f8fafc`, 4px radius, 24px padding), horizontal row with 8px gaps.

4. **Features (3 cards)** — 3-column (or 4-column) grid on lavender surfaces. Each feature card: `#e2e9f3` bg, 4px radius, 24px padding, browser window mockup inside, headline in display 24px weight 500, body in plain 16px `#686562`, 'Get started' black pill button at bottom.

5. **How It Works (3 steps)** — centered section header with eyebrow, headline with orange highlight, subtitle. Three steps in a row: mono eyebrow number, display heading, plain body text. Top-aligned, not centered.

6. **Two-Column API Block** — left: code/terminal card (~55% width) with mono label and white input fields. Right: headline in plain/display 18-24px, body in plain 16px `#686562`, underlined `#000000` text link. Top-aligned, 24-32px gap.

7. **Testimonials** — centered section header. 2-3 testimonial cards on `#f8fafc` or `#fffde6` surfaces with quote text in plain 16px, attribution in mono 14px uppercase.

8. **Pricing (3 tiers)** — centered section header. Three pricing cards: middle tier highlighted with `#e2e9f3` surface and black pill CTA; side tiers on white with ghost buttons. Each: tier name in mono eyebrow, price in display 45px, feature list in plain 16px, CTA button.

9. **FAQ** — centered section header. Accordion-style FAQ items with mono eyebrow questions, plain body answers. Expand/collapse via CSS/JS with smooth transitions.

10. **Final CTA** — centered section on `#c5d3e8` or white with large display headline (orange highlight), subtitle, black pill CTA.

11. **Footer Band** — full-bleed `#ff4500` bg, `#000000` text. Centered content: plain text links, metadata in mono 14px, copyright. Secondary links included.

## 10. Deliverables

- Separate `index.html`, `style.css`, `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Enforce BEM naming convention consistently.
- No unrequested placeholders where real copy was supplied; invent realistic fictional copy, brand name, product name, and labels.
- All copy in English.

## 11. Edit Mode (not applicable — this is a from-scratch build)

Not applicable; building from scratch.

Generate the complete landing page now. Output only the three files' contents with clear file-name headers. No preamble, no closing commentary.
