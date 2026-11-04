# Coding AI Prompt — Graphite Landing Page

You are a senior front-end engineer. Build a complete, production-grade landing page using the **Graphite** design system. The output must be three separate files: `index.html`, `style.css`, and `script.js`. No inline `style="..."` attributes anywhere. All styling lives in `style.css`. Use semantic HTML5, Flexbox layouts, Tailwind CSS utility classes mapped to CSS variables, and Google Fonts (Inter as the substitute for matterFont) plus Google Material Symbols for icons. Never use raw inline SVGs or local icon files.

## 1. Brand & Copy Rules

- Invent a fictional brand name, product name, and all copy. Never use the real brand name "Graphite", its logo, trademarks, or product names anywhere in the page.
- All user-facing copy must be in English.
- Do not use lorem ipsum where real copy can be written; invent plausible, on-brand copy for every section.

## 2. Design Tokens (define in `:root` and `.dark`)

### Colors (dark theme — default and only theme, but still define `@media (prefers-color-scheme: dark)` and `.dark` class for consistency)
```
--color-obsidian-canvas: #0a0a0a;
--color-true-black: #000000;
--color-charcoal-surface: #171717;
--color-graphite-edge: #262626;
--color-steel-border: #464646;
--color-cloud-white: #fafafa;
--color-paper-white: #e5e5e5;
--color-fog: #a1a1a1;
--color-ash: #737373;
--color-signal-orange: #ff8833;
--color-solar-spectrum: linear-gradient(90deg, #ffb931 15%, #ffffff 30%, #ffffff 40%, #2e73fc 50%);
```
Map these to the standard semantic tokens: `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--border-default`, `--border-emphasis`, `--primary`, `--secondary`, `--text-success`, `--text-error`, `--border-error`, `--border-success`.

### Typography
- Font family: Inter (Google Fonts), bound to `--font-base`.
- OpenType features: `"clig" 0, "liga" 0`.
- Type scale tokens: `--text-micro-nav` (10px/700, lh 2), `--text-caption` (12px/400, lh 1.33), `--text-nav-control` (14px/500, lh 1.43), `--text-body` (16px/400, lh 1.25), `--text-body-relaxed` (16px/400, lh 1.5), `--text-body-large` (18px/400, lh 1.25), `--text-subheading` (20px/500, lh 1.4), `--text-feature-heading` (24px/600, lh 1.17), `--text-section-heading` (36px/500, lh 1.11), `--text-display` (60px/500, lh 1, letter-spacing -1.5px).
- Letter spacing: -1.5px at display size; -0.9px at 18px for compact link treatment; normal elsewhere.

### Spacing, Radius, Shadows
- Base unit 8px. Spacing tokens: `--spacing-8` (8px), `--spacing-16` (16px), `--spacing-24` (24px), `--spacing-32` (32px), `--spacing-48` (48px), `--spacing-56` (56px), `--spacing-64` (64px), `--spacing-72` (72px), `--spacing-128` (128px), `--spacing-224` (224px).
- Radius: `--radius-sm` 8px (buttons), `--radius-md` 10px (cards, frames, shells), `--radius-lg` 9999px (pills). Badges 20px.
- Shadows: `--shadow-sm` `rgba(0,0,0,0.25) 0px 4px 4px 0px`; `--shadow-md` `rgba(0,0,0,0.3) 0px 8px 10px 0px`; `--shadow-subtle` `rgba(101,129,128,0.15) 0px 0px 2px 2px inset, rgba(32,47,46,0.15) 0px 0px 4px 4px inset`; plus inset edge shadow `rgb(255,255,255) 0px 1px 0px 0px, rgba(0,0,0,0.1) 0px -2px 6px 0px`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.

## 3. Layout Rules

- Page max-width 1152px, centered, on uninterrupted Obsidian Canvas background.
- Section gap 224px. Card padding 16px. Element gap 8px.
- Mobile-first Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified. Convert rows to columns on small viewports. No horizontal scrolling.
- Respect `prefers-reduced-motion`.

## 4. Dark Mode & Theme Switching

- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed` and `aria-label`.

## 5. Component Specifications

### Top Announcement Bar
- Full-width strip, `#171717` background, 1px `#262626` borders top/bottom, compact centered 14px/500 Cloud White text, low-emphasis Fog trailing link. 8px internal vertical spacing.

### Floating Primary Navigation
- Contained shell: Obsidian Canvas background, 1px `#262626` border, 10px radius, 16px horizontal padding, 8px control gaps. Logo, six 14px/500 Fog nav links, account controls, Paper White sign-up button (Pale Conversion Button style).

### Buttons
- **Pale Conversion Button:** Paper White `#e5e5e5` fill, `#171717` 14px/500 text, 8px radius, 8px 16px padding, 1px `rgba(255,255,255,0.1)` edge, inset shadow `rgb(255,255,255) 0px 1px 0px 0px, rgba(0,0,0,0.1) 0px -2px 6px 0px`. Minimum 44x44px touch target.
- **Charcoal Secondary Button:** `#262626` fill, Cloud White 14px/500 text, 1px `#464646` border, 8px radius, 8px 16px padding, shadow `rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.1) 0px 1px 2px -1px`.
- **Transparent Navigation Control:** transparent bg, Fog 14px/500 text, 1px `rgba(255,255,255,0.1)` border, 8px radius, 8px 16px padding.
- **Dark Pill Icon Button:** `#171717` fill, Cloud White icon, `#262626` edge, 9999px radius, 32px square hit area, shadow `rgba(0,0,0,0.25) 0px 4px 4px 0px`.
- All buttons: default flex (`align-items: center; justify-content: center; gap: 0.5rem`), hover brightness/shadow + `cursor: pointer`, focus ring via CSS variables, active `transform: scale(0.97)`, loading state with CSS spinner without dimension distortion, disabled `opacity: 0.5` + greyscale + `cursor: not-allowed`, success/error temporary states via `--text-success`/`--text-error`.

### Hero
- Left-aligned display headline: 60px/500, 60px line-height, -1.5px tracking, Cloud White. Right side: hollow glowing polygon graphic (offset rotated rounded-square outlines, 10–20px corner rounding, mostly Cloud White strokes, soft black glow, sparse Solar Spectrum gradient accents, hollow center, blurred duplicate outlines for depth). Below headline: Paper White and Graphite Edge 14px/500 buttons.

### Product Demo Frame
- Obsidian Canvas, 1px `#262626` border, 10px radius, overflow hidden, inset shadow `rgba(101,129,128,0.15) 0px 0px 2px 2px inset, rgba(32,47,46,0.15) 0px 0px 4px 4px inset`. Dark blurred code-review media with Cloud White overlay label. Bottom: compact True Black feature tabs (1px `#262626` border, 4px radius, 12px horizontal padding, 8px gaps, 12–14px Fog text) in one tight horizontal row.

### Customer Story Cards (3 in a row)
- 10px radius, 1px `#262626` border, Obsidian Canvas lower content area, isolated logo panel above (light or partner-colored). 12px/400 outlined label chip, 16px body copy. Shadow `rgba(0,0,0,0.3) 0px 8px 10px 0px`.

### Feature Mosaic Card
- Obsidian Canvas panel, 1px `#262626` border, 10px radius, 16px padding around copy, embedded product imagery clipped to same radius. 24px/600 Cloud White heading, Fog 16px copy, Signal Orange 16px/400 inline link with small right arrow (no filled container).

### Inline Orange Link
- Signal Orange `#ff8833`, 16px/400, 20px line height, paired with small right arrow. Never in a filled container.

### Luminous Polygon Graphic
- Several offset, rotated rounded-square outlines with 10–20px corner rounding, mostly Cloud White strokes, soft black glow, sparse Solar Spectrum gradient accents. Hollow center, blurred duplicate outlines for depth. Not a filled illustration.

## 6. Sections to Build

1. **Hero** — asymmetric: left display headline + conversion buttons; right luminous polygon graphic.
2. **Features** — 3 Feature Mosaic Cards in a row (icon, 24px/600 heading, Fog 16px copy, orange inline link).
3. **How It Works** — 3 steps with numbered indicators, headings, and descriptions.
4. **Testimonials** — 3 Customer Story Cards in a carousel/row.
5. **Pricing** — 3 tiers (starter, pro, enterprise) with feature lists and CTA buttons.
6. **FAQ** — accordion-style questions with expand/collapse.
7. **Final CTA** — centered headline + Paper White conversion button.
8. **Footer** — secondary links, logo, copyright.

## 7. Accessibility & UX

- Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `footer`, `article`).
- Correct ARIA roles/labels on custom widgets (accordion, modal, carousel).
- Logical DOM/focus order, full keyboard operability.
- `aria-live` regions for dynamic feedback.
- Sufficient contrast in dark theme. Never rely solely on color for state.
- Smooth CSS transitions on all state changes, respecting `prefers-reduced-motion`.
- Mandatory visual feedback on every click/hover/submission.

## 8. File Structure & Naming

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM) across the entire deliverable. Never mix conventions.
- No unrequested placeholders; invent real copy where unspecified.

## 9. Edit Mode — N/A (from-scratch build)

This is a from-scratch build; all rules in Section 1–4 of the system prompt apply fully.

## 10. Output

Output only the three files' contents clearly separated, with no preamble or closing commentary. Ensure every section, component, and state described above is implemented. Do not use the real brand name "Graphite" or any of its trademarks anywhere in the output.
