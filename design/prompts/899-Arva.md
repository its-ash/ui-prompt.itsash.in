# UI/UX Specification Prompt — Landing Page (Arva Pastoral Editorial Style)

## Role
You are an expert front-end coding agent. Build a complete, responsive, accessible landing page using the Arva pastoral editorial design system described below. Output separate `index.html`, `style.css`, and `script.js` files. Do not write any code in this response — this is your build specification.

## 1. Brand & Copy Constraint (Mandatory)
The visual style references a real brand. You must **invent a fictional brand name, product, and all copy**. Never use the name "Arva", its logo, trademarks, or product names anywhere in the page. All headlines, body text, button labels, and testimonials must be original fictional content appropriate to a sustainable-agriculture / regenerative-supply-chain startup.

## 2. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class or ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling.

## 3. CSS Variables & Theme Tokens
Define all tokens in `:root` (light) and under `@media (prefers-color-scheme: dark)` and `.dark`:

Colors:
- `--primary`: #07503f (Forest Ink)
- `--secondary`: #e8fe85 (Vivid Lime)
- `--bg-primary`: #f1efdf (Bone canvas — never pure white)
- `--bg-secondary`: #ffffff (card surfaces)
- `--bg-tertiary`: #efefef (Ash Gray)
- `--text-primary`: #212529 (Charcoal)
- `--text-secondary`: #353535 (Graphite)
- `--text-muted`: #6d6d6d (Pewter)
- `--text-success` / `--text-error`: define accessible success/error hues
- `--border-default`: #c3cda7 (Moss) or #353535
- `--border-error` / `--border-success`: define accordingly
- Pastel tiles: `--color-sky-card`: #b2cee7, `--color-peach-card`: #fceace, `--color-sage-card`: #e6ecd5
- `--color-forest-ink`: #07503f, `--color-vivid-lime`: #e8fe85

Where a near-white is needed, use #fefefe instead of #ffffff for backgrounds (card surfaces may remain #ffffff per spec).

Contrast pairing: every light background token pairs with a dark text token; every dark background (forest green bands) pairs with light text.

Spacing/shapes:
- `--radius-sm`: 20px, `--radius-md`: 30px, `--radius-lg`: 100px, `--radius-pill`: 110px
- `--shadow-sm`, `--shadow-md`: define but use sparingly (elevation comes from color shifts, not shadows)
- `--spacing-gap`: 8px, `--spacing-section`: 50px, `--spacing-card-padding`: 30px
- `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`

Typography:
- `--font-base`: Inter (Google Fonts)
- `--font-serif`: Reckless substitute — use "Cormorant Garamond" or "Source Serif Pro" via Google Fonts (Reckless is not on Google Fonts)
- Type scale tokens: `--text-caption` (12px), `--text-body-sm` (14px), `--text-body` (16px), `--text-subheading` (24px), `--text-heading-sm` (37px), `--text-heading` (45px), `--text-heading-lg` (57px), `--text-display` (80px)

## 4. Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Theme switching via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Visible toggle control with correct `aria-pressed` / `aria-label`.
- In dark mode: invert canvas to a deep charcoal/forest-tinted dark; keep forest green as accent; pastel tiles darken; text becomes light. Maintain contrast.

## 5. Flexbox & Mobile-First
- All layouts use Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box; convert rows to columns on small viewports; prevent horizontal scrolling.

## 6. Framework
Use Tailwind CSS via CDN (or clean custom CSS with `@layer`/`@apply`). All utility classes map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons
- Google Fonts only: Inter (weights 100–600) and a serif substitute (Cormorant Garamond or Source Serif Pro, weights 300/500/600).
- Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 8. Component State Requirements
Apply to all interactive components (buttons, cards, inputs, modals if any):

Buttons:
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min touch target 44x44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disables interaction, CSS spinner or animated Material Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success` / `--text-error`.

Cards:
- Default: flex layout, subtle borders, elevation via surface color (no box-shadow).
- Hover: `transform: translateY(-2px)` or shadow shift.
- Focus-within: border highlight.
- Loading (skeleton): shimmer animation.
- Empty state: Material Icon + guidance text.

Forms/Inputs:
- States: empty, focused (ring), filled, valid, invalid (error border + icon + red text), disabled, read-only.
- Structure: flex container wrapping label, input, error feedback.

Modal (if used): opening/open/loading/success/error/closing animated; centered flex; backdrop; Material Icon close button; Esc/overlay close; focus trap.

## 9. Core UX & Micro-Interactions
- Responsive by default, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes; never rely on color alone; semantic HTML5; correct ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 10. Deliverables
- Files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM) across the entire deliverable.
- No lorem-ipsum-only submissions; use realistic fictional copy where the spec implies content.

## 11. Page Sections to Build
Build these sections in order, each full-bleed with internal content centered at max-width 1200px:

1. **Lime Marquee Strip** — full-bleed #e8fe85 bar, 32px height, repeating dark text (Inter 13px #212529) separated by outlined checkmark Material Icons. Sits above header.
2. **Header** — #07503f background, 60px height, centered fictional wordmark with a leaf Material Icon, nav links left (Inter 15px white), right side: white pill "GET IN TOUCH" (110px radius) + language selector. Include theme toggle.
3. **Hero** — full-viewport (100vh) landscape agricultural photograph as background, centered white serif headline at 57–80px (weight 300, letter-spacing -0.012em), two pill buttons below (filled forest "I'M A FARMER"-style primary + ghost outlined "I'M A COMPANY"-style secondary), "Scroll to Explore ↓" at bottom center (Inter 13px). No overlay.
4. **Features** — 3 cards in a row on bone canvas, each a Pastel Quilt Card (20px radius, 30px padding) in rotating pastel surfaces (sky, peach, sage). Each: Material Icon top, heading (Reckless 24–37px), body (Inter 14–17px). Convert to single column on mobile.
5. **How It Works** — 3 steps on bone canvas, numbered, serif headings, body text, left-aligned, max 60ch. Forest green step numbers.
6. **Testimonials** — 3-column quilted card row (sky/peach/sage surfaces), each with raster logo placeholder, quote (Inter 14–15px), author name (Inter 500–600 14px), role (Inter 400 13px).
7. **Pricing** — 3 tiers on bone canvas, cards with 20px radius, white surface, forest filled CTA button (pill 100px). Highlighted tier uses forest green band or pastel surface.
8. **FAQ** — accordion-style, bone canvas, serif questions, Inter answers, Material Icon expand/collapse. Keyboard accessible.
9. **Final CTA** — forest green full-bleed band, white serif headline, white body, white pill button.
10. **Footer** — #07503f background, white text/links, multi-column link grid, Inter 14–15px, logo lockup repeated, 110px+ top padding.

## 12. Design Rules to Enforce
- Page canvas is #f1efdf (Bone) — never #ffffff as base.
- 100px pill radius on every button; 20px+ on cards; 33px on inputs.
- Pair Reckless (serif) 45–57px headlines with Inter 14–17px body.
- Lime #e8fe85 appears only on marquee strip and promotional micro-accents.
- Pastel tiles rotate within a single row like a quilted series.
- Forest green bands are structural backbone (header, interstitials, footer).
- Hero headlines 57–80px Reckless weight 300 or Inter weight 600, centered, over full-bleed photography.
- No shadows/elevation on cards; depth via surface color shifts.
- No new saturated colors beyond forest green and vivid lime.
- Reckless never below 24px or for body copy.
- No centered body paragraphs (max 60ch, left-aligned); headlines/hero may be centered.
- One pastel surface per card.

## 13. Imagery
Use placeholder image URLs (e.g., https://picsum.photos) for landscape/agricultural photography. Full-bleed, naturalistic, warm-toned. No illustrations.

## Output
Generate the three files (`index.html`, `style.css`, `script.js`) implementing the above. Ensure all mandatory rules (CSS-first, dark mode, flexbox, accessibility, Google Fonts/Icons, component states) are satisfied. Include a visible theme toggle with localStorage persistence. Do not use the real brand name "Arva" or any of its trademarks.
