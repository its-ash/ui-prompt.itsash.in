1. **Role & Objective**
You are an expert frontend engineer. Build a complete, responsive landing page for a fictional brand (invent a new brand name, product, and copy; do not use "Index", its logo, trademarks, or product names). The visual style must follow the "Index" blueprint wireframe theme: dark, near-black canvas, dashed containment lines, one muted periwinkle annotation accent (#7089ba), matte flat surfaces, no shadows, and Raveo Variable weight 1000 display typography. Deliver separate `index.html`, `style.css`, and `script.js` files. Use one consistent class-naming convention (BEM) throughout. Do not use inline CSS.

2. **CSS-First Architecture & Tokens**
- Keep all styling in `style.css`; forbid `style="..."` in HTML.
- Target all design through class/ID selectors only.
- Store all tokens in `:root` and theme classes using CSS variables.
- Required color tokens: `--color-void: #000000;`, `--color-carbon: #1c1c1c;`, `--color-graphite: #4d4d4d;`, `--color-steel: #808080;`, `--color-ash: #ababab;`, `--color-paper: #ffffff;`, `--color-periwinkle-annotation: #7089ba;`.
- Contrast pairing: light text on dark surfaces, dark text on light surfaces where applicable.
- Light mode background must not be pure white; use `#fefefe` where a near-white is needed.
- Required shape/spacing tokens: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.
- Required typography tokens: `--font-base` bound to Google Font Raveo Variable substitute (Inter Variable, Manrope, or another grotesque with weight axis 900+), plus a monospace substitute (JetBrains Mono, IBM Plex Mono, or Space Mono) for eyebrow/mono labels.
- Use Google Fonts only for text and Google Material Symbols/Icons only for icons. No inline SVGs or local icon files.

3. **Mandatory Dark Mode**
- Implement dark mode under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background/text CSS variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed` and `aria-label` state.

4. **Layout, Flexbox & Responsive Rules**
- Use Flexbox for all layout structures.
- Every flex container must default to `align-items: center` unless explicitly justified otherwise.
- Build mobile-first, converting rows to columns on smaller viewports and preventing horizontal scrolling.
- Max content width: 1200px centered.
- Section gap: 80px. Card padding: 24px. Element gap: 10px.
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless another framework is requested. Utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

5. **Typography Rules**
- Display headlines at 70px, weight 1000, line-height 1.10, letter-spacing -0.04em.
- Use weight 1000 for display headlines ≥32px.
- Use weight 500 for subheadings and labels.
- Use weight 400 for body text.
- Use Geist Mono substitute at 9px, weight 500, tracking +0.02em, uppercase for eyebrows, version tags, step labels, and micro-labels.
- Type scale only: 9 / 12 / 14 / 16 / 24 / 32 / 70. Do not add intermediate sizes.
- OpenType features `"tnum" on, "ss01" on` where available.

6. **Component & Section Requirements**
- **Dashed Section Container:** Every content section must be wrapped in a 1px dashed border container. On Carbon surfaces use `1px dashed #000000`; on light surfaces use `1px dashed #1c1c1c`. Never use solid borders for section containment. Dash pattern approximately 4px on / 4px off.
- **Hero:** Carbon full-bleed background with subtle radial gradient fading from Carbon center to Void edges. Eyebrow chip: mono 9px, white, 1px dashed white border, 100px radius, 4px 12px padding. Headline: 70px weight 1000, white, centered. Subtext: 16px weight 400, Steel, centered, max-width ~520px. Action: outlined pill button, 1px white border, 100px radius, 8px 18px padding, 14px weight 500 white. Centered stack, max content width ~720px.
- **Features (3 cards):** Three equal columns inside a dashed container. Each card: no fill, no shadow, 32px periwinkle icon centered top, 16px weight 500 label beneath, 14px weight 400 Steel description. Cards separated by even column gap, not borders.
- **How It Works (3 steps):** Centered 32px weight 1000 heading. Three equal-width columns separated by 24px gap. Each step: 40px circle icon container in Carbon with periwinkle stroke icon centered, 16px weight 500 label, 14px weight 400 Steel description. Wrapped in dashed container.
- **Testimonials:** Dashed container. Use cards with Carbon surface, no shadows, dashed or subtle borders only. Include quote, author name, role, and optional periwinkle accent mark. Keep layout responsive.
- **Pricing (3 tiers):** Three tier cards in a dashed container. Each tier: plan name, price, feature list, outlined pill CTA. Use periwinkle only for small annotation accents, never as button fill. Highlight one tier using dashed border or surface lift, not color fill.
- **FAQ:** Dashed container. Use accessible accordion pattern with semantic buttons, `aria-expanded`, and keyboard support. Animate open/close via CSS transitions.
- **Final CTA:** Dashed container with centered headline, short supporting text, and outlined pill button.
- **Footer:** Secondary links, brand wordmark, and minimal navigation. Use dashed top border or container treatment. No heavy footer blocks.

7. **Button Component Requirements**
- Default: flex layout, `align-items: center`, `justify-content: center`, gap 0.5rem, minimum 44x44px touch target.
- Hover: visual shift with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disable interactions, prevent double-clicks, render CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: opacity 0.5, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles using `--text-success` or `--text-error`.
- Buttons are outlined pills only: 1px white border on dark surfaces, 100px radius, no fill. Do not introduce filled buttons.

8. **Card, Form, and Modal Requirements**
- Cards: flexible flexbox layout, subtle borders/elevation using Carbon surface and CSS variables; hover elevation/shadow shift or subtle transform; `focus-within` highlight; loading skeleton shimmer; empty state with Google Icon and guidance text.
- Forms/inputs: empty, focused, filled, valid, invalid, disabled, and read-only states. Structure as flex container with label, input, and dedicated error feedback container.
- Modals: opening, open, loading, success/error, and closing states animated via CSS transitions. Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

9. **Core UX & Micro-Interactions**
- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth CSS transitions on all state changes using `var(--transition-normal)`, respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback for every click, hover, or submission.
- Destructive actions visually distinct in both themes.

10. **Color & Style Restrictions**
- Do not introduce any color outside the achromatic stack and #7089ba periwinkle. No greens, reds, oranges, or accent gradients.
- Do not use weight 400 Raveo for headlines.
- Do not use solid 1px borders where dashed borders are required.
- Do not add drop shadows, glows, or blur effects to cards or buttons.
- Do not center-align body paragraphs; center only hero headlines and short CTAs. Feature panels and descriptions left-aligned.
- Do not use #7089ba as button fill or active-link background.
- Do not break the type scale.

11. **Imagery & Illustration**
- Use line-art geometric illustration in CAD/wireframe style: isometric boxes, gears, pipelines, funnels in 1px periwinkle strokes on Carbon squares with 20px radius.
- Include stippled white particle accents sparingly.
- No photography, product screenshots, lifestyle images, or 3D renders.
- Illustrations occupy at most 30% of any section.

12. **Deliverables**
- Separate `index.html`, `style.css`, and `script.js`.
- No inline `<script>` blocks beyond a single deferred entry-point reference.
- Enforce BEM naming consistently.
- No unrequested placeholders where real copy/labels are supplied; placeholders allowed only where content is genuinely unspecified.
- All user-facing copy must be in English.

13. **Edit Mode Note**
If modifying existing markup instead of building from scratch: do not introduce new HTML tags, components, or DOM nodes; define CSS only for existing elements; do not write JavaScript for form validation, popups/modals, or utility helpers; ask the user how to handle such logic; if a style change requires new markup, stop and ask instead of silently inserting HTML.
