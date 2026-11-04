You are an expert front-end coding agent. Build a complete, production-ready landing page that reuses the visual style described below, but invent a fictional brand name, product, and all copy. Never use the real brand name "FigureAI", its logo, trademarks, or product names anywhere in the deliverable.

## 1. Project Deliverables
- Separate files: `index.html`, `style.css`, `script.js`.
- No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer></script>`).
- No inline CSS (`style="..."` is forbidden). All styling lives in `style.css`.
- Use one consistent class-naming convention (BEM) across the entire deliverable. Never mix conventions.
- Do not use lorem-ipsum-only copy where real copy is expected; invent realistic fictional copy for all sections.

## 2. CSS-First Architecture & Tokens
- All visual tokens must be defined as CSS custom properties inside `:root` and a `.dark` class, plus `@media (prefers-color-scheme: dark)`.
- Colors (light defaults): `--color-lab-white: #fefefe;` (use `#fefefe` instead of `#ffffff` where near-white is needed), `--color-figure-black: #0c0c0c;`, `--color-absolute-black: #000000;`, `--color-machine-gray: #6d6d6d;`, `--color-calibration-gray: #cecece;`. Map these to the standard token set: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text in every theme. In dark mode, swap so `--bg-primary` becomes Absolute Black, `--text-primary` becomes Lab White, etc.
- Radius/shadow/spacing tokens: `--radius-sm: 8px;`, `--radius-md: 12px;`, `--radius-lg: 24px;`, `--radius-pill: 9999px;`, `--shadow-sm`, `--shadow-md` (keep shadows minimal/none per style). `--spacing-gap: 20px;`, `--transition-fast: 150ms ease;`, `--transition-normal: 250ms ease;`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);`.
- Elevation/stacking: `--z-dropdown: 100;`, `--z-modal: 200;`, `--z-toast: 300;`.
- Spacing scale (4px base): `--spacing-4` through `--spacing-96` per spec (4,8,16,20,24,28,32,40,48,56,60,80,96).
- Section gap 40px, card padding 32px, element gap 20px.

## 3. Typography & Icons (Google Fonts Mandatory)
- Text fonts via Google Fonts `<link>`: Space Grotesk (substitute for PP Neue Machina) weights 400; Inter (substitute for Neue Haas Grotesk) weights 400, 500. Bind to `--font-display` and `--font-base`.
- Icons: Google Material Symbols only. No inline SVGs or local icon files.
- Type scale tokens exactly as specified:
  - `--text-nav`: Space Grotesk 400, 14px/14px, letter-spacing 0.28px, uppercase.
  - `--text-button-label`: Inter 500, 14px/16.8px, letter-spacing 0.
  - `--text-body`: Inter 400, 16px/24px, letter-spacing -0.16px.
  - `--text-body-large`: Inter 400, 17px/27.2px, letter-spacing -0.17px.
  - `--text-editorial-heading`: Inter 400, 22px/24.2px, letter-spacing -0.22px.
  - `--text-media-heading`: Space Grotesk 400, 28px/31.08px, letter-spacing 0, uppercase.
  - `--text-technical-stat`: Space Grotesk 400, 52px/57.72px, letter-spacing 0.
  - `--text-display`: Space Grotesk 400, 122px/122px, letter-spacing -1.22px, uppercase.
- Apply OpenType feature `"ss12"` where specified via `font-feature-settings`.

## 4. Mandatory Dark Mode
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Visible toggle control with correct `aria-pressed`/`aria-label`.
- Background/text variables switch seamlessly without HTML restructuring.

## 5. Layout & Responsiveness
- Flexbox for all layout structures. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first, responsive breakpoints, no horizontal scrolling. Convert rows to columns on small viewports.
- Page is edge-to-edge editorial sequence, not centered card layout.

## 6. Component Requirements
Implement with all states via CSS classes:

**Transparent Overlay Header (98px tall):** blurred backdrop (10px or 16px), Figure mark + six nav labels in Lab White at 14px, uppercase, +0.28px tracking. Transparent over hero.

**Technical Navigation Link:** Space Grotesk 14px uppercase +0.28px. Lab White on dark media, Figure Black on light sections. Calibration Gray 1px dividers where needed.

**Hero (Figure Display Hero):** white edge-to-edge, humanoid product crop left half, Figure Black display title 122px/122px -1.22px right, supporting Inter 16px/24px -0.16px beneath.

**Technical Specification Rail:** right-aligned Machine Gray labels + Space Grotesk values 52px/57.72px, 16px/24px supporting labels, 1px Calibration Gray dividers per row.

**Cinematic Image Chapter:** full-bleed square-edged photo, lower-corner Lab White Space Grotesk uppercase 28px/31.08px heading + Lab White Inter 17px/27.2px paragraph.

**Black Pill Button:** Figure Black fill, Lab White Inter 500 14px/16.8px, 24px radius, 0px vertical / 32px horizontal padding, Figure Black border. States: hover (brightness/shadow, cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (disabled, spinner, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error temporary feedback.

**Underlined Contact Control:** transparent bg, Figure Black Inter 500 14px/16.8px, 0px radius, no padding, 1px Figure Black border/underline.

**Contact Text Input:** transparent, 0px radius, no padding, black Inter 14px 1.5 line-height, single 1px black underline. States: empty, focused (outline ring), filled, valid, invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

**Editorial Section Heading:** Inter 22px/24.2px 400 -0.22px Figure Black, sentence case.

**Technical Statistic:** Space Grotesk 52px/57.72px Machine Gray + smaller Machine Gray descriptor, right-aligned.

**Footer Navigation Matrix:** grouped links, 16-24px internal gaps, 40px group separation. Inter 16px/24px utility content, Space Grotesk 14px uppercase labels.

**Cards (Features):** flex layout, subtle borders, elevation via `--bg-secondary` and CSS vars. Hover: elevation/shadow shift or translateY(-2px). Focus-within highlight. Loading skeleton shimmer. Empty state with Material Icon + guidance text.

**Modal (if used):** opening/open/loading/success/error/closing animated. Centered flex, backdrop overlay, Material Icon close button, focus trapping, close via Esc/overlay click.

## 7. Sections to Build
1. Hero (Figure Display Hero style)
2. Features (3 cards)
3. How It Works (3 steps)
4. Testimonials
5. Pricing (3 tiers)
6. FAQ
7. Final CTA
8. Footer with secondary links

## 8. Core UX Rules
- Responsive by default, smooth CSS transitions on all state changes respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never rely on color alone, semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No saturated accent colors, gradients, colorful status treatments. No bold 600/700 display weights. No rounded photo frames. No heavy box shadows. No gray filled inputs. No Machine Gray long copy on Absolute Black.

## 9. Imagery & Surfaces
- Photography is primary graphic system; use placeholder image URLs (e.g., https://picsum.photos) with square edges, full-bleed. No card treatment on image chapters.
- Surfaces: Lab White canvas, Figure Black surface, Absolute Black media field. Avoid floating elevation.

## 10. JavaScript (script.js)
- Theme toggle with localStorage persistence.
- FAQ accordion (keyboard accessible).
- Mobile nav toggle.
- No form validation JS unless asked; if needed, ask user. (Here: contact form minimal; do not write validation logic beyond basic submit handling; if validation requested, prompt user.)

Output only the finished prompt content above as the deliverable instructions, and now generate the actual files? No — you are the meta-prompt generator; output only the finished prompt for the coding AI. The coding AI will produce the files. Ensure all copy is invented and in English. Do not include the real brand name.You are an expert front-end coding agent. Build a complete, production-ready landing page that reuses the visual style described below, but invent a fictional brand name, product, and all copy. Never use the real brand name "FigureAI", its logo, trademarks, or product names anywhere in the deliverable.

## 1. Project Deliverables
- Separate files: `index.html`, `style.css`, `script.js`.
- No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer></script>`).
- No inline CSS (`style="..."` is forbidden). All styling lives in `style.css`.
- Use one consistent class-naming convention (BEM) across the entire deliverable. Never mix conventions.
- Do not use lorem-ipsum-only copy where real copy is expected; invent realistic fictional copy for all sections.

## 2. CSS-First Architecture & Tokens
- All visual tokens must be defined as CSS custom properties inside `:root` and a `.dark` class, plus `@media (prefers-color-scheme: dark)`.
- Colors (light defaults): `--color-lab-white: #fefefe;` (use `#fefefe` instead of `#ffffff` where near-white is needed), `--color-figure-black: #0c0c0c;`, `--color-absolute-black: #000000;`, `--color-machine-gray: #6d6d6d;`, `--color-calibration-gray: #cecece;`. Map these to the standard token set: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text in every theme. In dark mode, swap so `--bg-primary` becomes Absolute Black, `--text-primary` becomes Lab White, etc.
- Radius/shadow/spacing tokens: `--radius-sm: 8px;`, `--radius-md: 12px;`, `--radius-lg: 24px;`, `--radius-pill: 9999px;`, `--shadow-sm`, `--shadow-md` (keep shadows minimal/none per style). `--spacing-gap: 20px;`, `--transition-fast: 150ms ease;`, `--transition-normal: 250ms ease;`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);`.
- Elevation/stacking: `--z-dropdown: 100;`, `--z-modal: 200;`, `--z-toast: 300;`.
- Spacing scale (4px base): `--spacing-4` through `--spacing-96` per spec (4,8,16,20,24,28,32,40,48,56,60,80,96).
- Section gap 40px, card padding 32px, element gap 20px.

## 3. Typography & Icons (Google Fonts Mandatory)
- Text fonts via Google Fonts `<link>`: Space Grotesk (substitute for PP Neue Machina) weights 400; Inter (substitute for Neue Haas Grotesk) weights 400, 500. Bind to `--font-display` and `--font-base`.
- Icons: Google Material Symbols only. No inline SVGs or local icon files.
- Type scale tokens exactly as specified:
  - `--text-nav`: Space Grotesk 400, 14px/14px, letter-spacing 0.28px, uppercase.
  - `--text-button-label`: Inter 500, 14px/16.8px, letter-spacing 0.
  - `--text-body`: Inter 400, 16px/24px, letter-spacing -0.16px.
  - `--text-body-large`: Inter 400, 17px/27.2px, letter-spacing -0.17px.
  - `--text-editorial-heading`: Inter 400, 22px/24.2px, letter-spacing -0.22px.
  - `--text-media-heading`: Space Grotesk 400, 28px/31.08px, letter-spacing 0, uppercase.
  - `--text-technical-stat`: Space Grotesk 400, 52px/57.72px, letter-spacing 0.
  - `--text-display`: Space Grotesk 400, 122px/122px, letter-spacing -1.22px, uppercase.
- Apply OpenType feature `"ss12"` where specified via `font-feature-settings`.

## 4. Mandatory Dark Mode
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Visible toggle control with correct `aria-pressed`/`aria-label`.
- Background/text variables switch seamlessly without HTML restructuring.

## 5. Layout & Responsiveness
- Flexbox for all layout structures. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first, responsive breakpoints, no horizontal scrolling. Convert rows to columns on small viewports.
- Page is edge-to-edge editorial sequence, not centered card layout.

## 6. Component Requirements
Implement with all states via CSS classes:

**Transparent Overlay Header (98px tall):** blurred backdrop (10px or 16px), Figure mark + six nav labels in Lab White at 14px, uppercase, +0.28px tracking. Transparent over hero.

**Technical Navigation Link:** Space Grotesk 14px uppercase +0.28px. Lab White on dark media, Figure Black on light sections. Calibration Gray 1px dividers where needed.

**Hero (Figure Display Hero style):** white edge-to-edge, humanoid product crop left half, Figure Black display title 122px/122px -1.22px right, supporting Inter 16px/24px -0.16px beneath.

**Technical Specification Rail:** right-aligned Machine Gray labels + Space Grotesk values 52px/57.72px, 16px/24px supporting labels, 1px Calibration Gray dividers per row.

**Cinematic Image Chapter:** full-bleed square-edged photo, lower-corner Lab White Space Grotesk uppercase 28px/31.08px heading + Lab White Inter 17px/27.2px paragraph.

**Black Pill Button:** Figure Black fill, Lab White Inter 500 14px/16.8px, 24px radius, 0px vertical / 32px horizontal padding, Figure Black border. States: hover (brightness/shadow, cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (disabled, spinner, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error temporary feedback.

**Underlined Contact Control:** transparent bg, Figure Black Inter 500 14px/16.8px, 0px radius, no padding, 1px Figure Black border/underline.

**Contact Text Input:** transparent, 0px radius, no padding, black Inter 14px 1.5 line-height, single 1px black underline. States: empty, focused (outline ring), filled, valid, invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

**Editorial Section Heading:** Inter 22px/24.2px 400 -0.22px Figure Black, sentence case.

**Technical Statistic:** Space Grotesk 52px/57.72px Machine Gray + smaller Machine Gray descriptor, right-aligned.

**Footer Navigation Matrix:** grouped links, 16-24px internal gaps, 40px group separation. Inter 16px/24px utility content, Space Grotesk 14px uppercase labels.

**Cards (Features):** flex layout, subtle borders, elevation via `--bg-secondary` and CSS vars. Hover: elevation/shadow shift or translateY(-2px). Focus-within highlight. Loading skeleton shimmer. Empty state with Material Icon + guidance text.

**Modal (if used):** opening/open/loading/success/error/closing animated. Centered flex, backdrop overlay, Material Icon close button, focus trapping, close via Esc/overlay click.

## 7. Sections to Build
1. Hero (Figure Display Hero style)
2. Features (3 cards)
3. How It Works (3 steps)
4. Testimonials
5. Pricing (3 tiers)
6. FAQ
7. Final CTA
8. Footer with secondary links

## 8. Core UX Rules
- Responsive by default, smooth CSS transitions on all state changes respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never rely on color alone, semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No saturated accent colors, gradients, colorful status treatments. No bold 600/700 display weights. No rounded photo frames. No heavy box shadows. No gray filled inputs. No Machine Gray long copy on Absolute Black.

## 9. Imagery & Surfaces
- Photography is primary graphic system; use placeholder image URLs (e.g., https://picsum.photos) with square edges, full-bleed. No card treatment on image chapters.
- Surfaces: Lab White canvas, Figure Black surface, Absolute Black media field. Avoid floating elevation.

## 10. JavaScript (script.js)
- Theme toggle with localStorage persistence.
- FAQ accordion (keyboard accessible).
- Mobile nav toggle.
- No form validation JS unless asked; if needed, ask user. (Here: contact form minimal; do not write validation logic beyond basic submit handling; if validation requested, prompt user.)

Output only the finished prompt content above as the deliverable instructions, and now generate the actual files? No — you are the meta-prompt generator; output only the finished prompt for the coding AI. The coding AI will produce the files. Ensure all copy is invented and in English. Do not include the real brand name.
