# UI/UX Coding Prompt — Control Landing Page

You are an expert frontend developer. Build a complete, production-quality landing page for a fictional brand (invent a fictional brand name, product, and copy — never use the real "Control" brand name, logo, trademarks, or product names). The visual style is "Editorial Swiss grid meets creative tool": a white canvas, hard black borders, a near-monochrome palette punctured by vivid green/orange/yellow accents, brutalist typographic contrast between massive display type and tiny uppercase mono labels, flat surfaces with depth from borders only.

## 1. Strict Architecture Rules

**1.1 CSS-First & Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors. Keep HTML semantic and styling-agnostic.

**1.2 CSS Variables & Theme Tokens**
Store all tokens in `:root`. Enforce contrast pairing (light bg ↔ dark text, dark bg ↔ light text) for every theme.

Colors:
- `--color-obsidian: #000000` (primary text, structural borders)
- `--color-paper: #ffffff` (page canvas, inverted text on dark surfaces, button labels on green fills)
- `--color-gridline: #d2d2d2` (subtle dividers)
- `--color-slate: #3d3d3d` (secondary text)
- `--color-smoke: #c6c6c0` (mid-tier borders, inactive strokes)
- `--color-fog: #babab9` (hairline borders)
- `--color-ash: #acaca6` (faint outlines, placeholder chrome)
- `--color-graphite: #606060` (deemphasized body text, metadata)
- `--color-stone: #828282` (tertiary captions, disabled)
- `--color-concrete: #7a7a7a` (disabled button surfaces)
- `--color-bone: #f5f5f4` (card surfaces, elevated panels — one shade off white)
- `--color-voltage-green: #01ea40` (primary action buttons, active states, live feedback)
- `--color-ember-orange: #ff5c02` (filled action buttons, selected nav, conversion moments)
- `--color-highlighter-yellow: #ffdb4d` (decorative borders, selection marks, editorial accents — never used as fill)

Typography:
- `--font-melange` (display/headline, weight 500, substitutes: GT Sectra Display, Canela, Editorial New)
- `--font-favorit-mono` (micro-labels/UI chrome, weight 400, substitutes: JetBrains Mono, IBM Plex Mono, Space Mono)
- `--font-arial` (fallback body, substitutes: system-ui, -apple-system, sans-serif)

Type scale tokens:
- `--text-body: 16px` (line-height 1.52, letter-spacing -0.37px)
- `--text-subheading: 25px` (line-height 1.2, letter-spacing -0.58px)
- `--text-heading: 36px` (line-height 1.07, letter-spacing -1.84px)
- `--text-heading-lg: 71px` (line-height 1.06, letter-spacing -3.55px)
- `--text-display: 146px` (line-height 1.01, letter-spacing -8.47px)

Spacing & shapes:
- Base unit 8px. `--spacing-15: 15px`.
- Border radius: full 273px, cards 8px, pills 80px, buttons 40px.
- Page max-width 1200px. Section gap 80–120px. Card padding 24px. Element gap 15px.
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md` (shadows defined but unused per style — depth via borders).
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.

Light mode background must not be pure white where a near-white is needed; use `#fefefe` instead of `#ffffff` for any white/near-white background tokens. (Note: `--color-paper` stays `#ffffff` per spec for canvas; apply the `#fefefe` rule only to generic white backgrounds.)

**1.3 Mandatory Dark Mode**
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background/text variables switch seamlessly without HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox & Mobile-First**
- Use Flexbox for all layouts. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box (rows → columns on small viewports). No horizontal scrolling.

**1.5 Framework**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). Utility classes map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Include Google Font links/imports for Melange substitute (GT Sectra Display unavailable — use a Google-available editorial serif substitute such as "Playfair Display" or "Fraunces" as the Melange stand-in), Favorit Mono substitute (JetBrains Mono or Space Mono), and Arial fallback (system-ui).
- Use Google Material Symbols/Icons. No raw inline SVGs or local icon files.

## 2. Component Specifications

**2.1 Buttons**
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min touch target 44x44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error` (use green/orange appropriately per editorial rules).
- Green Action Button: `#01ea40` fill, 0px border, 40px radius (pill), Favorit Mono 10px uppercase, `#000000` text, letter-spacing -0.03em, padding ~12px 20px.
- Ghost Nav Link: no bg/border, `#000000` text, Arial 16px, generous horizontal padding, underline only on hover.

**2.2 Cards (Outline Card)**
- 8px radius, 1–2px `#000000` border, `#ffffff` or `#f5f5f4` fill, no shadow, padding 15–24px.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight borders when child link/button focused.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty State: Google Icon + clear guidance text.

**2.3 Forms & Inputs**
- States: Empty, Focused (outline ring), Filled, Valid, Invalid (error border, red-ish text via `--text-error`, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container.

**2.4 Modal/Popup**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. Core UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions (`.btn-danger`) visually distinct in both themes.
- Do not use color-coded semantic states (green=success, red=error) for the editorial system — communicate state via typography and borders instead. (Exception: the green action button itself is the brand accent, not a semantic success state.)

## 4. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM) across the entire deliverable.
- No lorem-ipsum-only submissions where real copy is expected; placeholders only where content genuinely unspecified.

## 5. Edit Mode — N/A (from-scratch build)

## 6. Page Sections to Build

Build the following sections, in order, all left-anchored editorial stacks:

1. **Hero**: small mono caption label (Favorit Mono 9–10px uppercase, -0.03em tracking), massive Melange headline (71–146px, two lines), supporting mono paragraph (max width 480–560px), then a full-width bordered canvas preview below the fold (Grid Canvas Frame: 8px radius, 1px black border, white fill, internal fine `#d2d2d2` grid lines at 16px intervals, optional bottom toolbar with mono icons in `#01ea40` and yellow marks).

2. **Features**: 3 Outline Cards in a single-column magazine stack (not a multi-column grid). Each card: 8px radius, 2px black border, `#f5f5f4` fill, 24px padding, 16:9 image area with same border/radius, caption below in Favorit Mono 9px uppercase -0.03em.

3. **How It Works**: 3 steps, each with a mono caption label, headline, and short body paragraph. Left-anchored, generous vertical spacing (80–120px between).

4. **Testimonials**: 2–3 quote blocks with mono caption attribution, left-aligned, bordered cards.

5. **Pricing**: 3 tiers as Outline Cards. One tier highlighted with `#01ea40` (or `#ff5c02`) filled action button. Use Status Pills for "Popular" markers.

6. **FAQ**: accordion-style items with black borders, mono labels, expand/collapse via CSS transitions. No new HTML elements beyond existing structure; use `<details>`/`<summary>`.

7. **Final CTA**: massive Melange headline + Green Action Button.

8. **Footer**: secondary links in Arial 16px, social links (Insta, X, Discord) as Social Link Mono Tags, 40px insets, 1px black top border.

## 7. Do's and Don'ts (enforce strictly)

Do:
- Melange at 71–146px for every primary headline; never below 36px.
- All UI labels in Favorit Mono 9–10px uppercase, -0.03em tracking.
- `#01ea40` sparingly — one primary action per screen.
- Card radius 8px, button radius 40px (full pill). No mid-range radii (16px/24px).
- 1–2px black borders for surface definition; no shadows.
- Section gaps 80–120px.
- Pair every product screenshot with visible grid texture.

Don't:
- More than two vivid colors per screen (green for action, one accent for emphasis).
- Melange below 25px.
- Drop shadows, glows, or blur.
- Arial for hero text (fallback body only).
- Center-align body paragraphs (strictly left-anchored).
- Gradient fills.
- Color-coded semantic states (green=success, red=error) — use typography and borders.

## 8. Navigation Bar

Top bar: 100% width, 1px solid black bottom border, 80px height, white bg. Logo wordmark in Melange 500 at 25px, 40px left padding. Center nav links (Tutorials, Pricing, Login) in Arial 16px black. Right cluster of social links (Insta, X, Discord) in Arial 16px, 40px right padding.

## 9. Imagery & Icons

Product screenshots dominate; always inside visible grid frame. No lifestyle photography, no abstract illustration. Icon style: monoline mono, thin strokes, single-weight, no color fills. All visuals serve the tool.

## 10. Output

Produce `index.html`, `style.css`, `script.js` with BEM naming. Invent a fictional brand name and copy. Never reference "Control" or its trademarks. Ensure dark mode toggle, localStorage persistence, reduced-motion support, and full keyboard accessibility.# UI/UX Coding Prompt — Control Landing Page

You are an expert frontend developer. Build a complete, production-quality landing page for a fictional brand (invent a fictional brand name, product, and copy — never use the real "Control" brand name, logo, trademarks, or product names). The visual style is "Editorial Swiss grid meets creative tool": a white canvas, hard black borders, a near-monochrome palette punctured by vivid green/orange/yellow accents, brutalist typographic contrast between massive display type and tiny uppercase mono labels, flat surfaces with depth from borders only.

## 1. Strict Architecture Rules

**1.1 CSS-First & Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors. Keep HTML semantic and styling-agnostic.

**1.2 CSS Variables & Theme Tokens**
Store all tokens in `:root`. Enforce contrast pairing (light bg ↔ dark text, dark bg ↔ light text) for every theme.

Colors:
- `--color-obsidian: #000000` (primary text, structural borders)
- `--color-paper: #ffffff` (page canvas, inverted text on dark surfaces, button labels on green fills)
- `--color-gridline: #d2d2d2` (subtle dividers)
- `--color-slate: #3d3d3d` (secondary text)
- `--color-smoke: #c6c6c0` (mid-tier borders, inactive strokes)
- `--color-fog: #babab9` (hairline borders)
- `--color-ash: #acaca6` (faint outlines, placeholder chrome)
- `--color-graphite: #606060` (deemphasized body text, metadata)
- `--color-stone: #828282` (tertiary captions, disabled)
- `--color-concrete: #7a7a7a` (disabled button surfaces)
- `--color-bone: #f5f5f4` (card surfaces, elevated panels — one shade off white)
- `--color-voltage-green: #01ea40` (primary action buttons, active states, live feedback)
- `--color-ember-orange: #ff5c02` (filled action buttons, selected nav, conversion moments)
- `--color-highlighter-yellow: #ffdb4d` (decorative borders, selection marks, editorial accents — never used as fill)

Typography:
- `--font-melange` (display/headline, weight 500, substitutes: GT Sectra Display, Canela, Editorial New)
- `--font-favorit-mono` (micro-labels/UI chrome, weight 400, substitutes: JetBrains Mono, IBM Plex Mono, Space Mono)
- `--font-arial` (fallback body, substitutes: system-ui, -apple-system, sans-serif)

Type scale tokens:
- `--text-body: 16px` (line-height 1.52, letter-spacing -0.37px)
- `--text-subheading: 25px` (line-height 1.2, letter-spacing -0.58px)
- `--text-heading: 36px` (line-height 1.07, letter-spacing -1.84px)
- `--text-heading-lg: 71px` (line-height 1.06, letter-spacing -3.55px)
- `--text-display: 146px` (line-height 1.01, letter-spacing -8.47px)

Spacing & shapes:
- Base unit 8px. `--spacing-15: 15px`.
- Border radius: full 273px, cards 8px, pills 80px, buttons 40px.
- Page max-width 1200px. Section gap 80–120px. Card padding 24px. Element gap 15px.
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md` (shadows defined but unused per style — depth via borders).
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.

Light mode background must not be pure white where a near-white is needed; use `#fefefe` instead of `#ffffff` for any white/near-white background tokens. (Note: `--color-paper` stays `#ffffff` per spec for canvas; apply the `#fefefe` rule only to generic white backgrounds.)

**1.3 Mandatory Dark Mode**
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background/text variables switch seamlessly without HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox & Mobile-First**
- Use Flexbox for all layouts. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box (rows → columns on small viewports). No horizontal scrolling.

**1.5 Framework**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). Utility classes map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Include Google Font links/imports for Melange substitute (GT Sectra Display unavailable — use a Google-available editorial serif substitute such as "Playfair Display" or "Fraunces" as the Melange stand-in), Favorit Mono substitute (JetBrains Mono or Space Mono), and Arial fallback (system-ui).
- Use Google Material Symbols/Icons. No raw inline SVGs or local icon files.

## 2. Component Specifications

**2.1 Buttons**
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min touch target 44x44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error` (use green/orange appropriately per editorial rules).
- Green Action Button: `#01ea40` fill, 0px border, 40px radius (pill), Favorit Mono 10px uppercase, `#000000` text, letter-spacing -0.03em, padding ~12px 20px.
- Ghost Nav Link: no bg/border, `#000000` text, Arial 16px, generous horizontal padding, underline only on hover.

**2.2 Cards (Outline Card)**
- 8px radius, 1–2px `#000000` border, `#ffffff` or `#f5f5f4` fill, no shadow, padding 15–24px.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight borders when child link/button focused.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty State: Google Icon + clear guidance text.

**2.3 Forms & Inputs**
- States: Empty, Focused (outline ring), Filled, Valid, Invalid (error border, red-ish text via `--text-error`, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container.

**2.4 Modal/Popup**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. Core UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions (`.btn-danger`) visually distinct in both themes.
- Do not use color-coded semantic states (green=success, red=error) for the editorial system — communicate state via typography and borders instead. (Exception: the green action button itself is the brand accent, not a semantic success state.)

## 4. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM) across the entire deliverable.
- No lorem-ipsum-only submissions where real copy is expected; placeholders only where content genuinely unspecified.

## 5. Edit Mode — N/A (from-scratch build)

## 6. Page Sections to Build

Build the following sections, in order, all left-anchored editorial stacks:

1. **Hero**: small mono caption label (Favorit Mono 9–10px uppercase, -0.03em tracking), massive Melange headline (71–146px, two lines), supporting mono paragraph (max width 480–560px), then a full-width bordered canvas preview below the fold (Grid Canvas Frame: 8px radius, 1px black border, white fill, internal fine `#d2d2d2` grid lines at 16px intervals, optional bottom toolbar with mono icons in `#01ea40` and yellow marks).

2. **Features**: 3 Outline Cards in a single-column magazine stack (not a multi-column grid). Each card: 8px radius, 2px black border, `#f5f5f4` fill, 24px padding, 16:9 image area with same border/radius, caption below in Favorit Mono 9px uppercase -0.03em.

3. **How It Works**: 3 steps, each with a mono caption label, headline, and short body paragraph. Left-anchored, generous vertical spacing (80–120px between).

4. **Testimonials**: 2–3 quote blocks with mono caption attribution, left-aligned, bordered cards.

5. **Pricing**: 3 tiers as Outline Cards. One tier highlighted with `#01ea40` (or `#ff5c02`) filled action button. Use Status Pills for "Popular" markers.

6. **FAQ**: accordion-style items with black borders, mono labels, expand/collapse via CSS transitions. No new HTML elements beyond existing structure; use `<details>`/`<summary>`.

7. **Final CTA**: massive Melange headline + Green Action Button.

8. **Footer**: secondary links in Arial 16px, social links (Insta, X, Discord) as Social Link Mono Tags, 40px insets, 1px black top border.

## 7. Do's and Don'ts (enforce strictly)

Do:
- Melange at 71–146px for every primary headline; never below 36px.
- All UI labels in Favorit Mono 9–10px uppercase, -0.03em tracking.
- `#01ea40` sparingly — one primary action per screen.
- Card radius 8px, button radius 40px (full pill). No mid-range radii (16px/24px).
- 1–2px black borders for surface definition; no shadows.
- Section gaps 80–120px.
- Pair every product screenshot with visible grid texture.

Don't:
- More than two vivid colors per screen (green for action, one accent for emphasis).
- Melange below 25px.
- Drop shadows, glows, or blur.
- Arial for hero text (fallback body only).
- Center-align body paragraphs (strictly left-anchored).
- Gradient fills.
- Color-coded semantic states (green=success, red=error) — use typography and borders.

## 8. Navigation Bar

Top bar: 100% width, 1px solid black bottom border, 80px height, white bg. Logo wordmark in Melange 500 at 25px, 40px left padding. Center nav links (Tutorials, Pricing, Login) in Arial 16px black. Right cluster of social links (Insta, X, Discord) in Arial 16px, 40px right padding.

## 9. Imagery & Icons

Product screenshots dominate; always inside visible grid frame. No lifestyle photography, no abstract illustration. Icon style: monoline mono, thin strokes, single-weight, no color fills. All visuals serve the tool.

## 10. Output

Produce `index.html`, `style.css`, `script.js` with BEM naming. Invent a fictional brand name and copy. Never reference "Control" or its trademarks. Ensure dark mode toggle, localStorage persistence, reduced-motion support, and full keyboard accessibility.
