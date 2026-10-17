# UI/UX Prompt: Penpot-Style Landing Page (Fictional Brand)

## 1. Project Overview
Build a complete, responsive landing page for a fictional design-tool product. **Do not use the real brand name "Penpot" or any of its trademarks, logos, or product names anywhere in the page.** Invent a fictional brand name, product name, and all copy. Reuse only the visual style described below. Deliver separate `index.html`, `style.css`, and `script.js` files. Use one consistent class-naming convention (BEM) throughout. No inline CSS; all styling lives in `style.css`.

## 2. Architecture & Mandatory Rules
- **CSS-First, Zero Inline CSS:** No `style="..."` attributes. All design via class/ID selectors in `style.css`.
- **CSS Variables:** Define all tokens in `:root` and `.dark` / `@media (prefers-color-scheme: dark)`. Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.
- **Contrast Pairing:** Every light background token pairs with a dark text token; every dark background token pairs with a light text token, in both themes.
- **Light Mode Background:** Use `#fafafa` (never `#ffffff`).
- **Dark Mode:** Mandatory. Provide tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class. Theme choice persists via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** All layouts use `display: flex`; default `align-items: center`. Convert rows to columns on small viewports; no horizontal scroll.
- **Tailwind CSS:** Use Tailwind (or `@layer`/`@apply` driving custom CSS) mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts only. Text: Work Sans (weights 400, 500, 700) bound to `--font-base`. Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 3. Theme Tokens (Penpot Style)
Map the following to CSS variables:
- `--color-deep-space-violet: #151035` (dark hero/nav/shell)
- `--color-bright-teal: #1ccac7` (primary action, emphasis word, active tab)
- `--color-rich-violet: #2f226c` (subtle borders/dividers on dark)
- `--color-off-white: #fafafa` (light canvas, body text on dark)
- `--color-light-gray: #eeeeee` (hairline borders on light)
- `--color-silver: #d3d3d3` (button borders, disabled outlines)
- `--color-pure-black: #000000` (body text on light, max-contrast borders)
- `--radius-sm: 8px` (controls)
- `--radius-md: 20px` (cards)
- `--radius-lg: 9999px` (pills)
- `--font-base: 'Work Sans', sans-serif`
- Letter-spacing: `-0.028em` uniformly across all sizes.
- Type scale: caption 12px, body-sm 14px, body 16px, body-lg 18px, subheading 24px, heading 48px, heading-lg 52px, display 72px. Line heights: 1.10 display, 1.20 headings, 1.50 body.
- Spacing base unit 4px; scale 4,8,12,16,20,24,32,40. Section gap 80-120px. Card padding 20-24px. Element gap 8-12px. Max content width 1200px.

## 4. Visual Rules
- **No drop shadows anywhere.** Depth via color contrast and hairline borders only.
- Controls (buttons, inputs, links): 8px radius. Cards: 20px radius. Pills: 9999px.
- Dark sections (`#151035`) separate from light sections (`#fafafa`) by color block, no shadow/divider.
- Light surface borders: 1px `#eeeeee`. Dark surface ghost control borders: 1px `#fafafa`.
- Teal (`#1ccac7`) rationed to: CTAs, one emphasis word per hero headline (final word), active tab indicators. Never body text, icons, or backgrounds.
- No additional chromatic colors in UI chrome. Let product screenshots carry color.
- Never use `#ffffff`; use `#fafafa`.
- Headlines weight 700 with tight tracking; UI labels weight 500; body weight 400.

## 5. Sections Required
1. **Hero:** Full-viewport dark (`#151035`) stage, centered. Headline at 48-72px Work Sans 700, `#fafafa`, letter-spacing -0.028em, line-height 1.10-1.20, final word in `#1ccac7`. Centered CTA pair: filled teal primary button + ghost outlined button. Large product screenshot frame below, rounded 8-20px, slightly cropped at viewport bottom. Generous vertical padding 80-120px.
2. **Features:** 3 cards on light `#fafafa` canvas. Each card: `#fafafa` bg, 20px radius, 1px `#eeeeee` border, 20-24px padding, no shadow. Title Work Sans 700 at 24px, body 400 at 16px `#000000`. Card hover: subtle transform `translateY(-2px)` or elevation shift. Focus-within highlight border.
3. **How It Works:** 3 steps, numbered, on light canvas. Flex row (column on mobile). Each step: number badge, title, description.
4. **Testimonials:** Cards on light canvas, 20px radius, hairline border, no shadow.
5. **Pricing:** 3 tiers on light canvas. Highlighted tier uses teal accent border or teal CTA. Cards 20px radius.
6. **FAQ:** Accordion-style, accessible (keyboard operable, ARIA). Hairline borders.
7. **Final CTA:** Dark `#151035` block with centered headline (final word teal) and teal CTA button.
8. **Footer:** Dark `#151035` with secondary links, logo mark, subtle `#fafafa` text.

## 6. Component State Requirements
- **Buttons:** Default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px touch target), Hover (brightness/shadow shift, cursor pointer), Focus (distinct ring via CSS vars), Active (scale 0.97), Loading (disabled, spinner, no dimension distortion), Disabled (opacity 0.5, greyscale, not-allowed), Success/Error (temporary feedback via `--text-success`/`--text-error`).
- **Cards:** Default flex layout, subtle border + elevation via vars; Hover elevation/transform; Focus-within border highlight; Loading skeleton shimmer; Empty state with Google Icon + guidance text.
- **Forms/Inputs:** Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Flex container wrapping label, input, error feedback.
- **Modal/Popup:** Opening/Open/Loading/Success/Error/Closing animated via CSS transitions. Centered flex, backdrop overlay, Google Icon close button, focus trapping, close via Esc or overlay click.

## 7. UX & Accessibility
- Responsive by default; fluid sizing; no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Sufficient contrast in both themes. Never rely on color alone for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Every click/hover/submission triggers visible state change.
- Destructive actions visually distinct in both themes.

## 8. Deliverables
- `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point reference.
- BEM naming convention throughout.
- No lorem-ipsum-only where real copy is expected; invent fictional brand copy and labels. Placeholders only where content genuinely unspecified.

## 9. Copy Locale
All user-facing copy must be in English.

## 10. Output
Return only the finished coding-AI prompt. No preamble or closing commentary. Mirror sections 1-4 structure with numbered headers and bolded sub-rules. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause.
