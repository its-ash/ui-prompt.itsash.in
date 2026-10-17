# Coding AI Prompt — Fabric-Themed Landing Page

## 1. Project Overview & Architecture Rules

Build a complete, production-ready landing page for a **fictional brand** (invent a new brand name, product name, and all copy — never use "Fabric", its logo, trademarks, or product names). The visual style must follow the "Fabric" editorial-manuscript aesthetic described below. Deliver three files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere in the HTML.

### 1.1 CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`.
- Forbid the `style="..."` attribute in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

### 1.2 CSS Variables & Theme Tokens
Store all visual tokens inside `:root` (and theme classes) using CSS variables. Contrast pairing: any light background token pairs with a dark text token, and any dark background token pairs with a light text token, for every theme.

Light mode tokens (default):
- Colors: `--color-electric-violet: #1100ff`; `--color-ink-violet: #19154e`; `--color-press-black: #0a0a0a`; `--color-carbon: #000000`; `--color-paper-white: #fefefe`; `--color-newsprint: #f3f3f3`; `--color-graphite: #666666`; `--color-slate: #333333`; `--color-pewter: #404040`; `--color-ash: #b3b3b3`; `--color-smoke: #737373`; `--color-gold: #fff500`.
- Map these into semantic tokens: `--primary: var(--color-press-black)`; `--secondary: var(--color-newsprint)`; `--bg-primary: var(--color-paper-white)`; `--bg-secondary: var(--color-newsprint)`; `--text-primary: var(--color-press-black)`; `--text-secondary: var(--color-graphite)`; `--text-success` / `--text-error` defined for both themes; `--border-default: var(--color-carbon)`; `--border-error` / `--border-success`.
- Border radius: `--radius-sm: 8px`; `--radius-md: 16px`; `--radius-lg: 24px`.
- Shadows: `--shadow-subtle: rgba(0,0,0,0.1) 0px 1px 1px 0px, rgba(0,0,0,0.05) 0px 2px 4px 0px`; `--shadow-violet-glow: rgba(17,0,255,0.15) 0px 0px 40px 0px`.
- Spacing: `--spacing-gap: 10px`; transitions: `--transition-fast: 150ms ease`; `--transition-normal: 250ms ease`; `--ease-standard: cubic-bezier(0.4,0,0.2,1)`.
- Elevation/stacking: `--z-dropdown: 100`; `--z-modal: 200`; `--z-toast: 300`.
- Typography: `--font-base: 'Inter', system-ui, sans-serif`; `--font-display: 'GT Alpina Light'` (substitute Google Font: 'Cormorant Garamond' weight 300) for hero headlines; `--font-manrope: 'Manrope', sans-serif`.
- Type scale tokens: `--text-caption: 11px`; `--text-body: 16px`; `--text-body-lg: 18px`; `--text-subheading: 28px`; `--text-heading: 52px`; `--text-display: 80px`.

Light mode background must not be pure white; use `#fefefe` for `--color-paper-white` as specified.

### 1.3 Mandatory Dark Mode Support
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background and text CSS variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed` / `aria-label` state.
- In dark mode, maintain contrast pairing and the editorial restraint (achromatic palette with violet glow accents only).

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- All flex layouts must be mobile-responsive (rows convert to columns on small viewports). Prevent horizontal scrolling.

### 1.5 Framework Default & Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives) unless another framework is requested.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 1.6 Typography & Icons (Google Fonts Mandatory)
- Use Google Fonts for text and icons. Include Google Font `<link>` or `@import` tags. Bind text font to `--font-base`.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 2. Component Design Specifications

### 2.1 Button Component
Style all states via CSS classes:
- Default: Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- Hover: Visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: Distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: Disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: Temporary feedback styles driven by `--text-success` / `--text-error`.

Variants:
- `.btn-primary`: filled `#0a0a0a` bg, white text, 8px radius, Inter 600 at 15-16px, padding 10px 12px, `--shadow-subtle`.
- `.btn-ghost`: no fill, text and 1px border in `#19154e`, 8-16px radius, underlined by default.

### 2.2 Card Component
- Default: Flexible Flexbox layout, subtle borders and elevation using `--bg-secondary` and CSS variables.
- Hover: Elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- Focus-within: Highlights card borders when a child link/button receives focus.
- Loading (Skeleton): Shimmer animation in CSS to prevent layout jumps.
- Empty State: Structured fallback layout with Google Icon and guidance text.

### 2.3 Form & Input
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, and dedicated error feedback container.

### 2.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay clicks.

## 3. Core UX & Micro-Interaction Rules
- Responsive by default: fluid sizing and breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility (a11y): Sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback: every click, hover, or submission triggers a visible state change.
- Destructive actions: visually distinct in both light and dark themes.

## 4. Deliverable & Output Format
- File structure: separate `index.html`, `style.css`, `script.js`.
- Naming convention: enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No unrequested placeholders: prohibit lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content was genuinely left unspecified.

## 5. Landing Page Sections to Build
Build these sections in order, all using the Fabric editorial aesthetic (achromatic palette, GT Alpina Light serif headlines, hairline black borders, violet glow accents only):

1. **Hero** — White background, centered text stack (max-width ~800px headline). Display serif at 80px weight 300, letter-spacing -1.6px, color `#0a0a0a`. Supporting subtext Inter 400 at 16-18px `#666666` centered. Rating row above headline: Inter 400 15px with 5 gold star icons (`#fff500`). Tilted product preview cards (rotated -5° to +5°, overlapping, z-index layering) floating around the hero with violet glow halo behind the cluster. Primary CTA button + ghost link button.
2. **Features** — 3 cards. White bg, 16-24px radius, optional 1px black border. Padding 24px. Heading in GT Alpina Light 32px weight 300. Body Inter 400 16px `#666666`. Bottom link in Ink Violet with 1px underline.
3. **How It Works** — 3 steps. Numbered steps with serif step titles, Inter body descriptions, hairline separators.
4. **Testimonials** — Cards with quote text, author name, role, avatar placeholder circle. White bg, 16px radius, subtle shadow.
5. **Pricing** — 3 tiers. Cards with tier name, price, feature list, CTA button. Highlight middle tier with subtle border emphasis. Use `.btn-primary` for highlighted tier, `.btn-ghost` for others.
6. **FAQ** — Accordion-style Q&A. Questions in Inter 500, answers in Inter 400 `#666666`. Expand/collapse via CSS transitions. Keyboard accessible.
7. **Final CTA** — Centered headline in GT Alpina Light, supporting text, primary CTA button, ghost link.
8. **Footer** — Secondary links in Inter 400/500, hairline top border, `#666666` text, hover to `#0a0a0a`.

## 6. Style-Specific Rules (Fabric)
- Use `#0a0a0a` for all filled action buttons — the system's only filled surface.
- Set hero headlines in GT Alpina Light (Cormorant Garamond substitute) weight 300 at 52-80px with -0.02em letter-spacing.
- Draw all structural borders at 1px in `#000000`.
- Apply 8px radius to buttons/nav, 16px to cards, 24px to large feature cards.
- Use `#19154e` (Ink Violet) for all link text and outlined-action borders — never `#1100ff` for text.
- Keep palette 98% achromatic — `#1100ff` appears only as soft glow halos, focus rings, and shadow tints behind product cards.
- Use Inter weight 400 body, 500 UI labels, 600 button text — never above 600 in UI.
- Don't use `#1100ff` as filled button background or body text.
- Don't use sans-serif for hero headline.
- Don't apply heavy drop shadows — only `--shadow-subtle` and violet glow.
- Don't introduce new chromatic colors.
- Don't use 40px radius on cards (reserved for pills/badges).
- Don't set body text below 15px or above 18px.
- Don't use blue link colors — all links `#19154e` with 1px border underline.

## 7. Imagery & Icons
- No lifestyle photography. Use tilted product screenshot cards as decorative hero elements (placeholder colored rectangles with rounded corners are acceptable as stand-ins).
- Icons minimal: Google Material Symbols for utility controls (search, menu, star, chevron, etc.).
- Annotation markers: small colored circles (8-12px) in violet/coral with adjacent pill labels (author name, 11px Inter 500, white text on colored bg, 40px radius) where relevant.

## 8. Responsive Behavior
- Mobile-first. Hero headline scales down (80px → 52px → 32px). Cards stack vertically. Nav collapses to hamburger (Google Material icon). Pricing tiers stack. Prevent horizontal scroll.

## 9. JavaScript (script.js)
- Theme toggle with localStorage persistence and `prefers-color-scheme` fallback.
- Mobile nav toggle.
- FAQ accordion expand/collapse.
- Smooth scroll for anchor links.
- No form validation, popup/modal, or utility helper logic beyond what's listed; if additional logic is needed, ask the user.

## 10. Accessibility Checklist
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`, `article`).
- ARIA roles/labels on custom widgets (accordion `aria-expanded`, toggle `aria-pressed`).
- Logical DOM/focus order; full keyboard operability.
- `aria-live` regions for dynamic feedback (FAQ, theme toggle).
- Sufficient contrast in both themes.
- Never rely solely on color for state.

Generate the three files now. Invent a fictional brand name, product, and all copy. Do not use "Fabric" or any real brand assets. Output only the code.
