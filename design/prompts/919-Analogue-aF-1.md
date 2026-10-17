# Coding AI Prompt: Build a Complete Landing Page in the "Analogue aF-1" Editorial Style

## 1. Project Overview
Build a complete, responsive landing page inspired by the "Analogue aF-1" visual style: a luxury editorial print aesthetic — stark white canvases, Garamond serif whispers for editorial moments, a single jolt of electric cobalt blue reserved exclusively for the primary action, flat surfaces defined by hairline borders and generous corner radii (20–30px), depth via layering soft radial washes and full-bleed photography behind film-strip frames. Confident negative space, confident typography, no decoration that doesn't earn its place.

**Fictional Brand Requirement:** Invent a completely fictional brand name, product name, and all copy. Never use the real brand name "Analogue aF-1", its logo, trademarks, or product names anywhere in the page. All user-facing copy must be in English.

## 2. Architecture & File Structure
- Deliver three separate files: `index.html`, `style.css`, `script.js`.
- No inline `<script>` blocks beyond a single deferred entry-point reference.
- No inline CSS (`style="..."`) anywhere in HTML. All styling lives in `style.css` via class/ID selectors.
- Use Tailwind CSS (via CDN) with custom CSS variables mapped through `@layer`/`@apply` where needed. All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- Semantic HTML5 elements (`header`, `main`, `section`, `footer`, `nav`, `article`).

## 3. CSS Variables & Theme Tokens (`:root`)
Define all tokens in `:root` and a `.dark` class / `@media (prefers-color-scheme: dark)` block:

**Colors (Light Mode):**
- `--color-cobalt-signal: #002fff` (primary action only — filled buttons, selected nav states, focused conversion moments)
- `--color-pure-white: #fefefe` (page canvas, card surfaces, button text on cobalt fill)
- `--color-graphite: #171717` (primary body text, headings, hairline borders, icon strokes)
- `--color-carbon: #070707` (deepest text, dark gradient anchors)
- `--color-ink: #000000` (absolute black for borders, icons, film-strip frame)
- `--color-fog: #ededed` (card surface lift, input fields, subtle bg differentiation)
- `--color-mist: #b9b9b9` (light surface wash, disabled/decorative backgrounds)
- `--color-dove: #c3c3c3` (mid-neutral border for tertiary dividers)
- `--color-iron: #696969` (muted body copy, secondary borders, placeholder text)
- `--color-cobalt-mist: radial-gradient(50% 75%, rgb(0, 54, 140) 0%, rgb(0, 79, 206) 10.68%, rgb(237, 237, 237) 100%)`

**Standardized tokens (map to above):**
- `--primary: var(--color-cobalt-signal)`
- `--secondary: var(--color-graphite)`
- `--bg-primary: var(--color-pure-white)`
- `--bg-secondary: var(--color-fog)`
- `--text-primary: var(--color-graphite)`
- `--text-secondary: var(--color-iron)`
- `--text-success: var(--color-graphite)` (neutral — no greens)
- `--text-error: var(--color-graphite)` (neutral — no reds)
- `--border-default: var(--color-fog)`
- `--border-error: var(--color-graphite)`
- `--border-success: var(--color-graphite)`

**Contrast Pairing:** Every light background token must pair with a dark text token and vice versa in dark mode. Enforce for both themes.

**Dark Mode:** Define dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Background and text CSS variables must switch seamlessly. User theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

**Border Radius & Shadows:**
- `--radius-sm: 10px`
- `--radius-md: 15px`
- `--radius-lg: 20px`
- `--radius-xl: 30px`
- `--radius-pill: 100px`
- `--shadow-sm: none`
- `--shadow-md: none`
- `--shadow-inset-glow: inset 0 0 0 1px rgba(255, 255, 255, 0.15)`

**Spacing & Transitions:**
- `--spacing-gap: 10px`
- `--transition-fast: 150ms`
- `--transition-normal: 300ms`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Elevation/Stacking:**
- `--z-dropdown: 10`
- `--z-modal: 100`
- `--z-toast: 1000`

## 4. Typography (Google Fonts Mandatory)
- Include Google Font `<link>` tags for text and icons. Use **EB Garamond** (weight 400) as substitute for ITC Garamond Std Light Narrow, and **Inter** (weight 400) as substitute for Graphik Medium. Use **Google Material Symbols** for icons (globe, close, etc.). Forbid raw inline SVGs or local icon files.
- Bind `--font-base: 'Inter', sans-serif` and `--font-serif: 'EB Garamond', serif`.
- Graphik/Inter: weight 400 at all sizes. Garamond: weight 400 only, never bold.
- Type scale tokens: `--text-caption: 11px`, `--text-body: 15px`, `--text-heading-sm: 22px`, `--text-heading: 34px`, `--text-heading-lg: 40px`, `--text-display: 64px`, plus `--text-hero-display: 150px`.
- Letter-spacing: -0.067em at 150px, -0.022em at 40px, -0.023em at 30px, -0.017em at 17px, -0.017em at 15px, -0.018em at 64px. Tight tracking (-0.018em or tighter) for all display text above 30px.
- Line heights: 0.85, 0.90, 1.00, 1.20, 1.50 as specified.

## 5. Layout & Flexbox Rules
- Mobile-first, responsive, no horizontal scrolling.
- Every flex container must default to `align-items: center` unless explicitly justified.
- Page max-width: 1200px, centered.
- Section gaps: 50px vertical.
- Card padding: 20px. Element gap: 10px.
- Convert rows to columns on small viewports.

## 6. Component Specifications

### 6.1 Button Component
- **Default:** Flex (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`), min touch target 44x44px.
- **Primary (`.btn--primary`):** Background `#002fff`, text `#ffffff`, Graphik/Inter 14px weight 400, padding 10px 20px, border-radius 10px, no border, no shadow. The system's one chromatic moment — use sparingly.
- **Ghost (`.btn--ghost`):** Transparent bg, text `#171717`, Graphik/Inter 14px, padding 10px 20px, border 1px solid `#ededed`, radius 10px. Hover: border darkens to `#171717`.
- **Hover:** Visual shift (brightness/shadow) with `cursor: pointer`.
- **Focus:** Distinct focus ring using CSS variables.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback styles driven by neutral scale (no warm colors).

### 6.2 Card Component
- **Default:** Flexbox layout, subtle borders, elevation via `--bg-secondary` and CSS variables. Radius 20px for cards, 30px for product imagery.
- **Hover:** Elevation/shadow shift or `transform: translateY(-2px)`.
- **Focus-within:** Highlights card borders when child link/button receives focus.
- **Loading (Skeleton):** Shimmer animation in CSS to prevent layout jumps.
- **Empty State:** Structured fallback with Google Icon and clear guidance text.

### 6.3 Form & Input
- **Email Input (`.input--email`):** Background `#ffffff`, no border, placeholder `#b9b9b9` Graphik/Inter 14px, padding 15px 20px, radius 15px. Inset white glow `rgba(255,255,255,0.15) 0px 0px 0px 1px inset` is the only shadow. Visually merges with adjacent button into continuous pill.
- **States:** Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, text, icon), Disabled, Read-only.
- **Structure:** Flex container wrapping label, input, and dedicated error feedback container.

### 6.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay clicks.

## 7. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 8. Landing Page Sections
Build all of the following sections with the Analogue aF-1 aesthetic:

1. **Hero:** Full-bleed white canvas. Centered wordmark in Graphik/Inter 14px, `#000000`. Massive headline 'Analogue aF-1'-style display (use fictional brand) in Graphik/Inter 150px, `#ffffff`, letter-spacing -10px, centered over radial blue gradient (rgb(0,54,140) → rgb(0,79,206) → rgb(237,237,237)). Subtitle in Graphik/Inter 14px, `#ededed`. Email input inline with primary action button ('Stay tuned'). Camera product render centered in lower half.

2. **Features (3 cards):** Three product detail cards, background `#ededed`, radius 30px, no shadow, no border. Product renders centered. Stack vertically in left column of 2-col layout with 50px gaps. Include hover elevation and focus-within.

3. **How It Works (3 steps):** Three-step editorial layout with Garamond serif headings, Graphik/Inter body text, numbered steps, generous negative space.

4. **Testimonials:** Small square card with rounded corners (20px), portrait photo with name overlay in `#ffffff` serif. Floating in layout. Include empty state and skeleton loading.

5. **Pricing (3 tiers):** Three pricing cards. Middle tier highlighted with cobalt `#002fff` primary button. Use neutral scale only (no warm colors). Include hover/focus states.

6. **FAQ:** Accordion-style FAQ using flexbox, with expand/collapse animated via CSS transitions. Keyboard accessible.

7. **Final CTA:** Full-bleed section with primary action button and supporting copy.

8. **Footer:** Secondary links, press logo strip (horizontal row of logos in `#696969` separated by 1px vertical dividers in `#ededed`), language selector (globe icon + 'English'), centered wordmark.

Also include:
- **Film-Strip Editorial Section:** Full-bleed dark photograph with black film-perforation pattern (sprocket holes) vertically on left/right edges. Centered serif headline in `#ffffff`, EB Garamond 40px weight 400, letter-spacing -0.88px. Scroll prompt pill floating at bottom center (`#ffffff` bg, 100px radius, 'Keep scrolling' in Graphik/Inter 12px, `#696969`).
- **Pre-Order Action Card:** Right-aligned block. Heading 'Pre-order now' in Graphik/Inter 34px, `#171717`, letter-spacing -1.02px. Subtitle in Graphik/Inter 14px, `#696969`. Price in Graphik/Inter 22px, `#171717`. Primary button + ghost button. Payment note in Graphik/Inter 11px, `#696969`.
- **Brand Wordmark:** Top-center logo lockup — lowercase wordmark in Graphik/Inter, `#000000`. No tagline, no icon.
- **Language Selector:** Top-right locale switcher — globe icon + 'English' in Graphik/Inter 12px, `#171717`.

## 9. Do's and Don'ts (Enforce)
**Do:**
- Use Garamond weight 400 at 40–64px for editorial moments (quotes, product names, section openers).
- Reserve `#002fff` exclusively for the single primary action per screen. Never for decoration, tags, or secondary buttons.
- Apply 20px radius to cards, 30px to product imagery.
- Anchor sections with 50px vertical gaps, card padding 20px.
- Use Graphik/Inter weight 400 exclusively. No bold/light variants.
- Frame full-bleed photography with film-strip perforation motif for analog/nostalgic imagery.
- Set letter-spacing at -0.018em or tighter for display text above 30px.

**Don't:**
- Never apply `#002fff` to backgrounds, icons, or text — button fill only.
- No drop shadows. Flat surfaces and hairline borders only. Only shadow permitted is inset white glow on inputs.
- No bold weights on Garamond.
- Never use corner radii below 10px for interactive elements.
- No gradients on UI components — only atmospheric washes on full-bleed sections.
- No warm colors, greens, oranges, or reds for any state. Use neutral scale for success/error.
- No Garamond for functional UI text (buttons, labels, inputs). Graphik/Inter handles everything functional.

## 10. Deliverable Checklist
- [ ] `index.html`, `style.css`, `script.js` as separate files.
- [ ] All CSS variables defined in `:root` and dark mode variants.
- [ ] Dark mode toggle with localStorage persistence.
- [ ] Google Fonts (EB Garamond, Inter) + Material Symbols loaded.
- [ ] All component states implemented (hover, focus, active, loading, disabled, success, error, empty, skeleton).
- [ ] Flexbox with `align-items: center` default.
- [ ] Mobile-responsive, no horizontal scroll.
- [ ] Full accessibility (ARIA, keyboard nav, focus trapping in modals, `aria-live` regions).
- [ ] `prefers-reduced-motion` respected.
- [ ] Fictional brand name, product, and copy — no real brand references.
- [ ] All user-facing copy in English.
