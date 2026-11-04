# Coding AI Prompt — Complete Landing Page (CQCM Style Reference)

## 1. Project Overview
Build a complete, responsive landing page using the visual style of the "CQCM" reference (Verdant cooperative megaphone). The page must reuse the style only: invent a fictional brand name, product, and all user-facing copy. Never use "CQCM", its logo, trademarks, or product names anywhere in the deliverable. All copy must be written in English.

Required sections, in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere. Use one consistent class-naming convention (BEM) across the entire deliverable.

## 2. CSS-First Architecture & Zero Inline CSS
- All styling lives strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

## 3. CSS Variables & Theme Tokens
Store all visual tokens inside `:root` (and theme classes) using CSS variables:

Colors:
- `--color-cooperative-green: #44d991`
- `--color-civic-blue: #4c92e9`
- `--color-sunset-coral: #ff6a51`
- `--color-mint-whisper: #eaf9f2`
- `--color-ink-black: #000000`
- `--color-paper-white: #ffffff` (use `#fefefe` where a near-white is needed instead of pure white)
- `--color-steel-gray: #666666`

Also define the standard meta-prompt color tokens mapped to these: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

Contrast pairing: every light background token must pair with a dark text token; every dark background token must pair with a light text token, in both light and dark themes.

Typography:
- `--font-athletics`: substitute with "Archivo Black" (Google Fonts) for Athletics (weights 400, 500).
- `--font-manrope`: "Manrope" (Google Fonts, weight 400).
- `--font-base: var(--font-manrope)`.
- Type scale tokens: `--text-caption` (12px/1.3/0.12px), `--text-body-sm` (14px/1.3/0.14px), `--text-body` (16px/1.4/0.16px), `--text-subheading` (18px/1.3/0.18px), `--text-subheading-lg` (20px/1.3/0.22px), `--text-heading-sm` (22px/1/0.88px), `--text-heading` (48px/1/1.92px), `--text-heading-lg` (59px/1/2.36px), `--text-display` (78px/1/3.12px).
- Athletics letter-spacing: 0.04em at 22px and above; 0.004em at 16px and below. Manrope: 0.01em at 12–18px; 0.011em at 20–22px.

Spacing & shapes:
- Base unit 4px. Spacing tokens: `--spacing-8`, `--spacing-20`, `--spacing-40`, `--spacing-60`, `--spacing-80`, `--spacing-100`, `--spacing-120`, `--spacing-200`.
- `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 100px` (pill).
- `--shadow-sm`, `--shadow-md`, `--shadow-lg: rgba(0,0,0,0.1) 0px 0px 20px 0px`.
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.

## 4. Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background/text CSS variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Flexbox Layout & Mobile-First
- Build all layout structures with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless an explicitly justified exception exists.
- All flex layouts must be mobile-responsive (rows become columns on small viewports). Prevent horizontal scrolling.

## 6. Framework
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless another framework is requested. All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons
- Strictly use Google Fonts for text and icons. Include Google Font `<link>`/`@import` tags for "Archivo Black", "Manrope", and Google Material Symbols/Icons.
- Bind text fonts to `--font-base` (Manrope) and `--font-athletics` (Archivo Black).
- Explicitly forbid raw inline SVGs or local icon files. Use Material Symbols for all icons.

## 8. Component Design Specifications

### Buttons
- Default: flex layout (`display:flex; align-items:center; justify-content:center; gap:0.5rem`), min touch target 44x44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disable interactions, prevent double-clicks, render CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles driven by `--text-success`/`--text-error`.

Pill Button (Filled): background `#000000`, text `#ffffff`, Manrope 14–16px weight 400, letter-spacing 0.01em, uppercase, border-radius 100px, padding 10px 20px. No chromatic color as button fill — buttons are always black or outlined.

Pill Button (Ghost): background `#ffffff`, border 1px `#000000`, text `#000000`, Manrope 14px uppercase, border-radius 100px, padding 10px 20px.

### Cards
- Default: flexible Flexbox layout, subtle borders and elevation using `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or subtle transform (`translateY(-2px)`).
- Focus-within: highlight card borders when a child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with a Google Icon and clear guidance text.

### Forms & Inputs
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, and dedicated error feedback container.

### Modals / Popups
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via `Esc` or overlay clicks.

### News Card
- Background `#4c92e9` on upper image area, `#ffffff` on lower text area. Border-radius 8px. No shadow.
- Contains a circular image frame at top (border-radius 50%, centered, ~240–280px diameter), a tag badge (uppercase Athletics 12px), a date in Manrope 12px `#666666`, a headline in Manrope 16–18px weight 400 `#000000`, a short description in Manrope 14px `#000000`, and a black pill "LIRE"-style button at the bottom. Padding 20px on text section.

### Stat Block
- Solid chromatic fill (rotates through `#44d991`, `#eaf9f2`, `#4c92e9`, `#ffffff`, `#ff6a51`) per block. Border-radius 8px. Padding 20px.
- Number in Athletics 48–78px weight 500 letter-spacing 0.04em, `#000000`. Vertical label in uppercase Athletics 12–14px `#000000`, rotated or stacked beside the number.
- Blocks offset vertically to create a staircase composition (~30px vertical and horizontal offset between each).

### Category Tag
- Background `#ffffff`, text `#000000`, uppercase Athletics 12px weight 400 letter-spacing 0.04em. No border, square or 4px radius. Inline with a date in Manrope 12px `#666666`. Padding 0 or 7px vertical, 10px horizontal.

### Top Navigation Bar
- Background `#ffffff`, no border or 1px `#000000` bottom border. Logo (fictional wordmark with green geometric mark) at far left. Nav items in Manrope 14px weight 400 `#000000`, uppercase, separated by 20–30px horizontal gap. Ghost pill "PLUS"-style button at far right. Padding 15–20px vertical, 40px horizontal. Single non-sticky white bar.

### "See All" Link
- Text link with a small black filled circle bullet (8px) to the left of the label. Label uppercase Athletics 12px `#000000` letter-spacing 0.04em. No underline. Right-aligned companion to section headings.

### Section Heading
- Text in Manrope 22–24px weight 400 `#000000`, mixed case. Left-aligned. No decorative underline. Pairs with "See All" link to the right.

### Hero Green Panel
- Solid `#44d991` fill, no border, no shadow. Contains an uppercase Athletics headline at 48–78px, weight 500, letter-spacing 0.04em, color `#000000`. Black pill button (100px radius) at bottom-left with 10px 20px padding. Occupies full right half of hero on desktop; stacks below image on mobile.

### Hero Image Panel
- Full-bleed photographic image (use a placeholder image URL). No border-radius. Overlaid with `#44d991` dot pattern (grid of solid green circles ~30px, regular grid, partially bleeding off edges). Image extends to left edge of viewport and meets green panel with no gap.

### Circular Image Frame
- Image cropped to perfect circle (border-radius 50%), 4px subtle edge. Sits centered in a blue (`#4c92e9`) card surface. Diameter varies with context (~240–280px). Circle shape reserved for imagery only.

## 9. Core UX & Micro-Interactions
- Responsive by default: fluid sizing and breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- Mandatory visual feedback: every click, hover, or submission triggers a visible state change.
- Destructive actions: generic `.btn-danger` or delete actions visually distinct in both light and dark themes.

## 10. Style Rules (Do's and Don'ts)
- Use Athletics 400–500 for all display and badge text with letter-spacing 0.04em.
- Set pill buttons at 100px radius with `#000000` fill and `#ffffff` text in 14–16px Manrope, uppercase.
- Reach for `#44d991` as the dominant chromatic surface — hero, stat blocks, decorative dots — not for buttons or text accents.
- Crop images to circles inside blue (`#4c92e9`) news cards; reserve circle shape for imagery only.
- Stack stat blocks in a 5-block staircase with ~30px vertical and horizontal offset between each.
- Use `#eaf9f2` for soft card and nav surfaces when white feels too clinical.
- Separate nav items with 20–30px horizontal gap; keep nav a single non-sticky white bar.
- Do not use any chromatic color as a button fill.
- Do not add shadows to cards, buttons, or content — system is flat; only shadow is nav bar's soft halo.
- Do not mix Athletics into body copy or Manrope into hero headlines.
- Do not use letter-spacing tighter than 0.01em on Manrope or 0.04em on Athletics.
- Do not use coral (`#ff6a51`) more than once per surface.
- Do not use square corners on buttons — pill shape (100px) is the only button geometry; cards get 8px, small elements get 4px.
- Do not introduce gradients, blurs, or glass effects — system is flat, saturated, and solid.

## 11. Layout
- Page max-width 1280px, contained.
- Strong split-hero: photograph left, solid green panel right.
- Below hero, sections flow as full-width bands separated by 60–80px vertical gaps.
- Stats section: offset staircase of chromatic blocks (5 blocks, each shifted ~30px down and to the right).
- News/feature sections: 3-column card grid with 20px gutters.
- Navigation: single top bar, not sticky, clean white background.
- Content density comfortable — sections breathe, never feel packed.
- Rhythm alternates between solid chromatic blocks and white reading surfaces.

## 12. Sections to Build
1. **Hero**: split layout — left image panel with green dot overlay, right green panel with uppercase Athletics headline and black pill button.
2. **Features**: 3 news-style cards in a 3-column grid.
3. **How It Works**: 3 steps (use stat-block or card styling).
4. **Testimonials**: cards with circular image frames.
5. **Pricing**: 3 tiers (cards).
6. **FAQ**: accordion-style (CSS-driven, no JS logic beyond toggle if needed; ask user if validation/popup logic is required).
7. **Final CTA**: green panel with headline and pill button.
8. **Footer**: secondary links, white background.

## 13. Output Format
- Separate `index.html`, `style.css`, `script.js`.
- No inline `<script>` beyond a single deferred entry-point reference.
- BEM naming convention throughout.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content genuinely unspecified. All user-facing copy in English.

## 14. Edit Mode Note
Not applicable (from-scratch build). If any requested style change cannot be achieved without adding markup, stop and ask the user what they want instead of silently inserting new HTML. Do not write JavaScript for form validation, popups/modals, or utility/helper functions; ask the user how they want it handled.

Now generate the complete landing page following all rules above. Invent a fictional brand name and product. All copy in English. Use Google Fonts (Archivo Black + Manrope + Material Symbols). Implement dark mode with localStorage persistence and a toggle. Ensure full accessibility, keyboard operability, and responsive behavior. Output the three files.
