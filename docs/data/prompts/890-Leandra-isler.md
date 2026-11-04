# Coding-AI Prompt: Landing Page — Leandra-isler Theme (Style Reuse Only)

You are an expert front-end engineer. Build a complete, production-ready landing page using the visual style described below. **Do not use the real brand name "Praxis Leandra Isler", its logo, trademarks, or product names.** Invent a fictional brand name, product, and all copy. All user-facing copy must be written in English.

## 1. Strict Architectural Rules

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` using CSS variables:
- Colors: `--color-vellum-sand: #f4e6cd;` `--color-pressed-linen: #edddc3;` `--color-aged-ink: #1e211e;` `--color-charcoal-black: #000000;` `--color-twilight-bronze: #8f774b;` `--color-hayfield: #ba9d6a;` `--color-wheat-sheaf: #d6bd97;`
- Map to generic tokens: `--primary: var(--color-aged-ink);` `--bg-primary: var(--color-vellum-sand);` `--bg-secondary: var(--color-pressed-linen);` `--text-primary: var(--color-aged-ink);` `--text-secondary: var(--color-aged-ink);` `--border-default: var(--color-aged-ink);`
- Contrast pairing: light backgrounds pair with dark text; enforce for every theme.
- Light mode background: use `#f4e6cd` (Vellum Sand), never pure white. Where near-white is needed, use `#fefefe`.
- Radius & shadows: `--radius-sm: 4px;` `--radius-md: 4px;` `--radius-lg: 4px;` `--shadow-sm: none;` `--shadow-md: none;` (zero elevation by design).
- Spacing & transitions: `--spacing-gap: 8px;` `--transition-fast: 150ms ease;` `--transition-normal: 250ms ease;` `--ease-standard: ease;`
- Elevation/stacking: `--z-dropdown: 10;` `--z-modal: 20;` `--z-toast: 30;`

**1.3 Mandatory Dark Mode Support**
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Theme switching must be seamless without HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box: convert rows to columns on small viewports. Prevent horizontal scrolling.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`). All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: Use Google Fonts. PP Neue Montreal is unavailable on Google Fonts; substitute with **Inter** at weights 400 and 500 via Google Fonts `<link>` or `@import`, bound to `--font-base`. Also load Inter for all text.
- Icons: Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 2. Component Design Specifications

**2.1 Button Component**
- Default: Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- Hover: Visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: Distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: Disables interactions, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: Temporary feedback styles via `--text-success`/`--text-error`.
- **Theme override:** No filled/pill/rounded buttons. Interactive elements are 1px underlined links in `#1e211e` offset 2–4px below baseline. Hover shifts underline to 2px or nudges color toward `#8f774b`. Never boxed, never filled, never a chip. Buttons use `border-radius: 0`.

**2.2 Card Component**
- Default: Flexible Flexbox layout, subtle borders and elevation using `--bg-secondary` and CSS variables.
- Hover: Elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: Highlights card borders when child link/button receives focus.
- Loading (Skeleton): Shimmer animation in CSS.
- Empty State: Structured fallback with Google Icon and guidance text.
- **Theme override:** No card containers, no panels, no shadows. Sections separated by 80–120px vertical space and optional 1px hairlines in `#1e211e`. Feature cards are flat text blocks on Vellum Sand with hairline dividers only.

**2.3 Form & Input**
- States: Empty, Focused (outline ring), Filled, Valid, Invalid, Disabled, Read-only.
- Structure: Flex container wrapping label, input, and error feedback container.

**2.4 Modal / Popup**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- UX: Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: Sufficient contrast in both light and dark modes. Never rely solely on color. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 4. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where content genuinely unspecified.

## 5. Theme-Specific Style Specification (Leandra-isler)

**Colors:** Vellum Sand `#f4e6cd` (full-bleed canvas), Pressed Linen `#edddc3` (subtle section bands), Aged Ink `#1e211e` (text, hairlines), Charcoal Black `#000000` (display headings), Twilight Bronze `#8f774b` / Hayfield `#ba9d6a` / Wheat Sheaf `#d6bd97` (hero gradient only).

**Typography:** Inter (Google Fonts) at weights 400, 500. Type scale: caption 14px, body-sm 16px, body 18px, subheading 24px, heading-sm 26px, heading 40px, heading-lg 75px, display 173px. Line heights: 0.90, 1.00, 1.20, 1.40, 1.50. Letter spacing: -0.045em at 158–173px display, -0.030em at 75–122px, normal at body sizes.

**Spacing & Shapes:** Density comfortable. Spacing scale: 4, 6, 8, 10, 11, 13, 14, 17, 20, 26, 30, 32, 40, 50, 60, 120px. Border radius: tags 0px, cards 0px, images 4px, buttons 0px. Section gap 80–120px. Card padding 0px. Element gap 4–8px.

**Layout:** Full-bleed, edge-to-edge, no max-width container, no centered column, no sidebar. Hero is single viewport-height block: Vellum Sand gradient washes top, botanical photograph rises from bottom-right, massive multi-line display headline spans full width breaking at 3 lines. Sections alternate as full-bleed vellum bands separated by 80–120px vertical space and occasional 1px hairlines. Body text floats left in comfortable measure (~65 chars), not centered, not constrained to 1200px column. Nav is slim top bar (~70px): brand mark left, nav items center, single underlined CTA right.

**Hero gradient:** Vertical 4-stop linear gradient at 184deg: `#8f774b → #ba9d6a → #d6bd97 → #f4e6cd`, applied as subtle wash on hero only.

**Surfaces:** Zero elevation. No drop shadows, no border-based depth, no glassmorphism. Dimensionality only via hero gradient.

**Imagery:** Real botanical photography, tight specimen crop on warm background, full-color natural greens, no frame, no rounded corners larger than 4px, leaves extending past viewport edge. No illustrations, no decorative icons, no abstract shapes. Single plant photograph per major section.

**Do's:** Use Inter as single typeface. Scale hero headline to 122–173px weight 500 with letter-spacing -0.045em. Let Vellum Sand fill full viewport edge-to-edge with no max-width wrapper and no card panels. Separate sections with 80–120px vertical space plus optional 1px hairline in `#1e211e`. Mark interactive elements with 1px underline in `#1e211e` offset 2–4px below baseline. Use real botanical photography as only non-neutral color. Apply vertical 4-stop gradient on hero only.

**Don'ts:** No new colors. No filled/pill/rounded buttons. No cards/panels/boxed surfaces with shadows. No max-width centered column for hero headline. No dark mode inversion of palette (but dark mode tokens still required per architecture). No stock illustration, icons-as-decoration, or geometric shapes. Body text must stay 16–20px.

## 6. Page Sections to Build

1. **Hero:** Full-bleed Vellum Sand with 184deg gradient overlay. Display headline (invented, 3 lines, 158px Inter weight 500, letter-spacing -0.045em, line-height 0.90, color `#000000`, left-aligned, edge-to-edge). Botanical photograph bottom-right, leaves extending past viewport, no border, 4px radius on visible edges, no shadow. Slim top nav (~70px): brand mark left (small starburst + fictional brand name stacked at 14px weight 500), center nav items (HOME, SERVICES, BLOG, ABOUT, CONTACT at 14px weight 400), right CTA as 1px-underlined link.

2. **Features (3 cards):** Three flat text blocks on Vellum Sand, no containers. Each: heading 24–26px weight 500, body 18px weight 400, separated by 1px hairlines or 80–120px vertical space. No card backgrounds, no shadows, no icons.

3. **How It Works (3 steps):** Three numbered steps in full-bleed vellum bands. Step numbers as large display type (75px+). Body text 18px. Separated by hairlines and vertical space.

4. **Testimonials:** Full-bleed vellum section. Quote text 18–20px weight 400, attribution 14px. No card containers. Separated by hairlines.

5. **Pricing (3 tiers):** Three tiers as flat text columns separated by 1px hairlines. Tier name 24px weight 500, price 40–75px weight 500, feature list 16–18px. No filled buttons — CTA as underlined link. No card backgrounds.

6. **FAQ:** Accordion-style Q&A. Questions 18–20px weight 500, answers 18px weight 400. Expand/collapse via CSS transitions. No containers.

7. **Final CTA:** Full-bleed vellum section with large display headline (invented) and underlined CTA link. Botanical accent optional.

8. **Footer:** Same Vellum Sand canvas. Three-column grid at 14px weight 400: left contact, center navigation mirror, right legal/social. Densest info zone, smallest type, most whitespace. Optional 1px hairline above.

## 7. Naming & Output

- Use BEM naming convention throughout.
- File structure: `index.html`, `style.css`, `script.js`.
- All copy in English. Invent fictional brand name, product, and content. Never reference "Praxis Leandra Isler" or its real trademarks.

Output only the finished prompt. No preamble, no closing commentary.
