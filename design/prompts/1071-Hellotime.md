# UI/UX Coding Prompt — Hellotime Theme Landing Page

## 1. Project Overview
Build a complete, responsive landing page using the **Hellotime** visual style: a near-monochrome, editorial, command-center aesthetic. White canvas, near-black type, one electric blue gradient accent used only on inline hero keywords, flat surfaces with hairline borders, 16px card radii, and a single dark filled CTA button. **Do not use the real brand name "Hellotime" or any of its trademarks, logos, or product names.** Invent a fictional brand name, product, and all copy. Write all user-facing copy in English.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline `style="..."` attributes. Use one consistent class-naming convention (BEM) throughout.

## 2. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`.
- Forbid `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors only.
- Keep HTML semantic, clean, and agnostic of visual styling.

## 3. CSS Variables & Theme Tokens
Define all tokens in `:root` and under `@media (prefers-color-scheme: dark)` plus a `.dark` class. Enforce contrast pairing (light bg → dark text, dark bg → light text) for every theme.

Colors:
- `--color-ink: #151619`
- `--color-smoke: #7f8491`
- `--color-fog: #c8cad0`
- `--color-ash: #e1e2e5`
- `--color-mist: #f3f3f5`
- `--color-paper: #fefefe` (use #fefefe, not #ffffff, where a near-white is needed)
- `--color-charcoal: #25272d`
- `--color-graphite: #363940`
- `--color-pewter: #b0b3bb`
- `--color-signal-green: #059669`
- `--color-electric-blue: linear-gradient(90deg, #0560fd 0%, #3a8dff 50%, #c3d9ff 100%)`

Also map to generic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

Typography:
- `--font-base: 'Inter', sans-serif` (Google Font; substitute for SF Pro).
- Type scale tokens: `--text-caption` (14px/1.5), `--text-body` (16px/1.5), `--text-subheading` (18px/1.6), `--text-heading-sm` (20px/1.33), `--text-heading` (24px/1.2), `--text-heading-lg` (40px/1.14/-0.4px), `--text-heading-xl` (48px/1.14/-0.8px), `--text-display` (64px/1/-1.2px), `--text-display-lg` (80px/1/-1.6px).

Spacing & shapes:
- Base unit 8px. Spacing tokens `--spacing-8` … `--spacing-240` per scale.
- `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 16px`.
- `--shadow-sm`, `--shadow-md` (keep minimal/flat; shadows discouraged but tokens defined).
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.

Dark mode: provide tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Persist user choice via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.

## 4. Mandatory Rules
- Flexbox layouts default to `align-items: center` unless justified exception.
- Mobile-first, responsive, no horizontal scroll.
- Tailwind CSS or clean custom CSS via `@layer`/`@apply`; utility classes map to CSS variables or generic classes (`.btn`, `.card`, `.input-group`).
- Google Fonts mandatory for text and icons (Material Symbols). No inline SVGs or local icon files.
- Smooth transitions on state changes; respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` for dynamic feedback.
- Every interaction triggers visible state change.
- Destructive actions visually distinct in both themes.

## 5. Component State Requirements
Buttons: default (flex, center, gap 0.5rem, min 44x44px), hover (brightness/shadow, pointer), focus (ring via variables), active (scale 0.97), loading (spinner/icon, no dimension change, disabled interactions), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`).

Cards: default (flex, subtle borders, elevation via variables), hover (translateY(-2px) or shadow shift), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance text).

Forms/inputs: empty, focused (ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

Modals: opening/open/loading/success-error/closing animated via CSS; centered flex, backdrop, Google Icon close, focus trap, close via Esc/overlay.

## 6. Section Requirements (Landing Page)
Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

Style per Hellotime spec:
- Top nav: white bg, 8px vertical padding, 1px Fog bottom border. Logo + wordmark 18px/600 Ink. 4 nav links 14px/500 Graphite, 32px gap. Ghost outlined button (Pewter border, 8px radius, 16px horizontal padding). Sticky.
- Hero: centered column, 64–80px top padding. Eyebrow pill link 'A different kind of pricing →' with 1px Ink border, 9999px radius, 12px/500. Headline 80px/700, -1.6px tracking, one phrase filled with Electric Blue gradient. Subtext 18px/400 Smoke, max-width ~640px. Filled dark button centered below.
- Features: 3 cards, white bg, 1px Fog border, 16px radius, 32px padding. Flex layout.
- How It Works: 3 steps, numbered, 16px radius cards or flat rows.
- Testimonials: 2-column grid (1 col under 768px), 24px gap, white bg, 1px Fog border, 16px radius, 32px padding. Partner logo 20px height top-left, quote 16px/400 Ink, attribution 14px/500 name + 14px/400 Smoke role.
- Pricing: 3 tiers, cards with 16px radius, hairline borders. Highlighted tier uses Charcoal fill (inverted) or Mist wash.
- FAQ: accordion-style, hairline borders, smooth expand/collapse.
- Final CTA: Dark Filled Card (Charcoal bg, Paper text, 16px radius, 32px padding).
- Footer: secondary links, hairline top border, Smoke text.

Do's/Don'ts enforcement:
- Body 16px/400, 1.5 line-height, Ink; Smoke for metadata/helper/secondary.
- 16px radius cards/sections; 8px buttons/inputs/nav.
- Electric Blue gradient ONLY on inline keyword highlights in headlines — never button fill, never large background.
- Charcoal filled buttons as single primary action per section; others ghost/outlined Pewter.
- Headlines 64–80px/700, letter-spacing -1.2 to -1.6px; body 16px/400.
- 64–80px vertical rhythm between sections; 32px card padding.
- Product UI timeline bars sole source of saturated color (if any product UI shown).
- No drop shadows, glows, colored elevation.
- No rounded radii above 20px.
- No center-aligned body paragraphs (only headlines, CTAs, short labels).
- No color for status/state — use weight, fill, border changes.
- No serif/display/script faces; grotesque only.

## 7. Output Format
- Files: `index.html`, `style.css`, `script.js`.
- BEM naming convention consistently.
- No lorem-ipsum-only where real copy supplied; placeholders allowed only where unspecified.
- No new HTML elements beyond what's needed; if a change requires new markup, ask first (Edit Mode rule applies only if modifying existing; here it's a fresh build, so standard build rules apply).

## 8. Dark Mode
Implement dark mode tokens, toggle, persistence, and accessibility as specified. Ensure contrast pairing in dark theme.

Generate the complete landing page now following all rules above.# UI/UX Coding Prompt — Hellotime Theme Landing Page

## 1. Project Overview
Build a complete, responsive landing page using the **Hellotime** visual style: a near-monochrome, editorial, command-center aesthetic. White canvas, near-black type, one electric blue gradient accent used only on inline hero keywords, flat surfaces with hairline borders, 16px card radii, and a single dark filled CTA button. **Do not use the real brand name "Hellotime" or any of its trademarks, logos, or product names.** Invent a fictional brand name, product, and all copy. Write all user-facing copy in English.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline `style="..."` attributes. Use one consistent class-naming convention (BEM) throughout.

## 2. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`.
- Forbid `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors only.
- Keep HTML semantic, clean, and agnostic of visual styling.

## 3. CSS Variables & Theme Tokens
Define all tokens in `:root` and under `@media (prefers-color-scheme: dark)` plus a `.dark` class. Enforce contrast pairing (light bg → dark text, dark bg → light text) for every theme.

Colors:
- `--color-ink: #151619`
- `--color-smoke: #7f8491`
- `--color-fog: #c8cad0`
- `--color-ash: #e1e2e5`
- `--color-mist: #f3f3f5`
- `--color-paper: #fefefe` (use #fefefe, not #ffffff, where a near-white is needed)
- `--color-charcoal: #25272d`
- `--color-graphite: #363940`
- `--color-pewter: #b0b3bb`
- `--color-signal-green: #059669`
- `--color-electric-blue: linear-gradient(90deg, #0560fd 0%, #3a8dff 50%, #c3d9ff 100%)`

Also map to generic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

Typography:
- `--font-base: 'Inter', sans-serif` (Google Font; substitute for SF Pro).
- Type scale tokens: `--text-caption` (14px/1.5), `--text-body` (16px/1.5), `--text-subheading` (18px/1.6), `--text-heading-sm` (20px/1.33), `--text-heading` (24px/1.2), `--text-heading-lg` (40px/1.14/-0.4px), `--text-heading-xl` (48px/1.14/-0.8px), `--text-display` (64px/1/-1.2px), `--text-display-lg` (80px/1/-1.6px).

Spacing & shapes:
- Base unit 8px. Spacing tokens `--spacing-8` … `--spacing-240` per scale.
- `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 16px`.
- `--shadow-sm`, `--shadow-md` (keep minimal/flat; shadows discouraged but tokens defined).
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.

Dark mode: provide tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Persist user choice via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.

## 4. Mandatory Rules
- Flexbox layouts default to `align-items: center` unless justified exception.
- Mobile-first, responsive, no horizontal scroll.
- Tailwind CSS or clean custom CSS via `@layer`/`@apply`; utility classes map to CSS variables or generic classes (`.btn`, `.card`, `.input-group`).
- Google Fonts mandatory for text and icons (Material Symbols). No inline SVGs or local icon files.
- Smooth transitions on state changes; respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` for dynamic feedback.
- Every interaction triggers visible state change.
- Destructive actions visually distinct in both themes.

## 5. Component State Requirements
Buttons: default (flex, center, gap 0.5rem, min 44x44px), hover (brightness/shadow, pointer), focus (ring via variables), active (scale 0.97), loading (spinner/icon, no dimension change, disabled interactions), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`).

Cards: default (flex, subtle borders, elevation via variables), hover (translateY(-2px) or shadow shift), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance text).

Forms/inputs: empty, focused (ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

Modals: opening/open/loading/success-error/closing animated via CSS; centered flex, backdrop, Google Icon close, focus trap, close via Esc/overlay.

## 6. Section Requirements (Landing Page)
Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

Style per Hellotime spec:
- Top nav: white bg, 8px vertical padding, 1px Fog bottom border. Logo + wordmark 18px/600 Ink. 4 nav links 14px/500 Graphite, 32px gap. Ghost outlined button (Pewter border, 8px radius, 16px horizontal padding). Sticky.
- Hero: centered column, 64–80px top padding. Eyebrow pill link 'A different kind of pricing →' with 1px Ink border, 9999px radius, 12px/500. Headline 80px/700, -1.6px tracking, one phrase filled with Electric Blue gradient. Subtext 18px/400 Smoke, max-width ~640px. Filled dark button centered below.
- Features: 3 cards, white bg, 1px Fog border, 16px radius, 32px padding. Flex layout.
- How It Works: 3 steps, numbered, 16px radius cards or flat rows.
- Testimonials: 2-column grid (1 col under 768px), 24px gap, white bg, 1px Fog border, 16px radius, 32px padding. Partner logo 20px height top-left, quote 16px/400 Ink, attribution 14px/500 name + 14px/400 Smoke role.
- Pricing: 3 tiers, cards with 16px radius, hairline borders. Highlighted tier uses Charcoal fill (inverted) or Mist wash.
- FAQ: accordion-style, hairline borders, smooth expand/collapse.
- Final CTA: Dark Filled Card (Charcoal bg, Paper text, 16px radius, 32px padding).
- Footer: secondary links, hairline top border, Smoke text.

Do's/Don'ts enforcement:
- Body 16px/400, 1.5 line-height, Ink; Smoke for metadata/helper/secondary.
- 16px radius cards/sections; 8px buttons/inputs/nav.
- Electric Blue gradient ONLY on inline keyword highlights in headlines — never button fill, never large background.
- Charcoal filled buttons as single primary action per section; others ghost/outlined Pewter.
- Headlines 64–80px/700, letter-spacing -1.2 to -1.6px; body 16px/400.
- 64–80px vertical rhythm between sections; 32px card padding.
- Product UI timeline bars sole source of saturated color (if any product UI shown).
- No drop shadows, glows, colored elevation.
- No rounded radii above 20px.
- No center-aligned body paragraphs (only headlines, CTAs, short labels).
- No color for status/state — use weight, fill, border changes.
- No serif/display/script faces; grotesque only.

## 7. Output Format
- Files: `index.html`, `style.css`, `script.js`.
- BEM naming convention consistently.
- No lorem-ipsum-only where real copy supplied; placeholders allowed only where unspecified.
- No new HTML elements beyond what's needed; if a change requires new markup, ask first (Edit Mode rule applies only if modifying existing; here it's a fresh build, so standard build rules apply).

## 8. Dark Mode
Implement dark mode tokens, toggle, persistence, and accessibility as specified. Ensure contrast pairing in dark theme.

Generate the complete landing page now following all rules above.
