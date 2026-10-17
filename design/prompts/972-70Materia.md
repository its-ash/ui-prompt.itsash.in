# Coding-AI Prompt: Complete Landing Page — 70Materia Theme (Achromatic Material-Library Frame)

## 1. Project Scope & Deliverables

Build a complete, single-page landing page with the following sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere in the markup. All styling lives in `style.css`.

Invent a fictional brand name, product name, and all copy. Never use the real brand name "70Materia", the product code "AT.OLO", or any real trademark/logo from the source style reference. Treat the supplied visual style as inspiration only.

## 2. Strict Architecture Rules

**2.1 CSS-First & Zero Inline CSS**
- All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
- HTML must remain clean, semantic, and agnostic of visual styling.

**2.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` and under `@media (prefers-color-scheme: dark)` and a `.dark` class:

Colors:
- `--color-obsidian: #000000` (primary text, hairline borders)
- `--color-bone: #ffffff` (page highlights, card surfaces, text on dark)
- `--color-graphite: #1e1e1e` (filled button background, footer, dark UI blocks)
- `--color-ash: #bababa` (dominant page canvas, muted dividers)

Map to generic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.

Light mode background must not be pure white; use `#bababa` as the page canvas. Where white/near-white is needed, use `#fefefe` instead of `#ffffff`.

Typography:
- `--font-matter`: "Matter" (substitute Inter, Söhne, or Untitled Sans at weight 400). Load via Google Fonts. Use weight 400 only — never bold/semibold.
- `--font-matter-mono`: "Matter Mono" (substitute JetBrains Mono, IBM Plex Mono, or Berkeley Mono). Load via Google Fonts. Weight 400, letter-spacing 0.02em (12px) and 0.04em (10px), OpenType `"tnum"`.

Type scale tokens:
- `--text-caption: 10px` (line-height 1.3, letter-spacing 0.4px)
- `--text-body: 15px` (line-height 1.2)
- `--text-subheading: 19px` (line-height 1.2)
- Additional sizes: 20px (hero/logo), 12px (mono labels/buttons).

Spacing & shapes:
- Base unit 8px. Tokens: `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-12: 12px`, `--spacing-24: 24px`, `--spacing-100: 100px`, `--spacing-180: 180px`.
- `--radius-sm: 0px`, `--radius-md: 0px`, `--radius-lg: 3px` (buttons only).
- `--shadow-sm`, `--shadow-md`: defined but set to `none` — this system uses no shadows.
- `--spacing-gap: 8px`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.

**2.3 Mandatory Dark Mode**
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class.
- Background and text variables switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

**2.4 Flexbox & Mobile-First**
- Use Flexbox for all layout structures.
- Every flex container must default to `align-items: center` unless an explicitly justified exception.
- Mobile-responsive out of the box: convert rows to columns on small viewports. Prevent horizontal scrolling.

**2.5 Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`). All utility classes map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**2.6 Google Fonts & Icons (Mandatory)**
- Text: Google Font `<link>`/`@import` for Inter (Matter substitute) and JetBrains Mono (Matter Mono substitute). Bind to `--font-matter` and `--font-matter-mono`.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 3. Component Design Specifications

**3.1 Buttons**
- Default: Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem`), min touch target 44x44px.
- Outlined button (primary style): 1px solid `#000000` border, transparent background, 3px radius, 8px vertical × 24px horizontal padding. Label in Matter Mono 12px, weight 400, letter-spacing 0.02em, uppercase, `#000000`. No hover fill — stays outlined at all times.
- Filled dark button: background `#1e1e1e`, white Matter Mono 12px label, 3px radius, 8px × 24px padding. Reserved for high-intent actions.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles via `--text-success`/`--text-error`.

**3.2 Cards (Image Card)**
- Zero radius, no border, no shadow. Images sit directly on canvas or white panel. Sharp corners only.
- Hover: subtle transform (`translateY(-2px)`) where interactive.
- Focus-within: highlights card borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and guidance text.

**3.3 Forms & Inputs (Newsletter Underline Input)**
- Underlined text input: no background, no border except 1px `#000000` bottom border. 0px radius. Placeholder in Matter 15px `#000000`.
- States: Empty, Focused (outline ring), Filled, Valid, Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, dedicated error feedback container.

**3.4 Modal/Popup**
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 4. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 5. Section-Specific Requirements

**Hero:** Full-viewport edge-to-edge photograph, no overlay, no gradient, no text within image area. Nav floats on top: logo (fictional brand) in Matter 20px `#000000` left; nav items (MATERIALS, APPLICATIONS, PRODUCTS, PROJECTS, JOURNAL, COMPANY, NEWS, CONTACTS) in Matter Mono 10px uppercase, letter-spacing 0.04em, `#000000`, right-aligned. No nav background.

**Features (3 cards):** Centered two-column grid max-width 960px on `#bababa` canvas. Each column: full-bleed image (sharp corners), Matter Mono 10px uppercase label, Matter 15px paragraph `#000000`, outlined button beneath. 24px row gap. Columns separated by canvas, not divider.

**How It Works (3 steps):** Vertical sequence of full-bleed editorial moments. Each step: image or two-column image+text block. Generous section spacing 100–180px vertical padding. Museum-walk rhythm.

**Testimonials:** Editorial blocks with Matter 15px quotes, Matter Mono 10px attribution labels. Left-aligned. No card chrome beyond canvas/paper surfaces.

**Pricing (3 tiers):** Three columns on canvas. Each tier: Matter Mono 10px label, Matter 19px price, Matter 15px feature list, outlined button. Filled dark button for recommended tier. Sharp corners, no shadows.

**FAQ:** Accordion-style. Each item: Matter 15px question, expanded answer in Matter 15px. Underline separators only. Keyboard accessible.

**Final CTA:** Centered block on canvas. Matter 19px headline, Matter 15px supporting text, filled dark button.

**Footer:** Dark band `#1e1e1e`, text `#ffffff` in Matter Mono 10–12px. Links, address, legal. Minimal.

**Persistent Product Caption:** Fixed label bottom-left of viewport: Matter Mono 10px uppercase, letter-spacing 0.04em, `#000000`, e.g. fictional product code. No background, no border.

## 6. Do's and Don'ts (Enforce)

Do:
- Set every heading and body run in Matter at weight 400. Use size and space for hierarchy.
- Use Matter Mono 10–12px with letter-spacing 0.02em–0.04em for all labels, nav items, button text, product codes.
- Let product photography fill viewport edge-to-edge; never crop, frame, or overlay UI on hero images.
- Build buttons as 1px outlined rectangles with 3px radius and 8px × 24px padding.
- Use `#bababa` as page canvas; white `#ffffff` only as inset paper or text on dark surfaces.
- Keep corner radius 3px for buttons, 0px for everything else.
- Apply tabular numerals (`"tnum"`) on all text containing numbers.

Don't:
- Do not introduce any chromatic accent color. Palette is permanently achromatic.
- Do not use drop shadows, gradients, or glow effects.
- Do not round card corners, image corners, or section containers.
- Do not use bold or semibold weight from Matter.
- Do not place colored text, icons, or borders on functional UI.
- Do not center body copy in editorial sections; left-align descriptions and labels.
- Do not use a filled white input field with visible border; form fields defined by single bottom underline only.

## 7. Naming Convention

Enforce one consistent class-naming convention (BEM) across the entire deliverable. Never mix conventions.

## 8. Output

Output only the finished prompt content above as the instruction set for the coding AI. No preamble, no closing commentary. Mirror the numbered header structure. Translate any non-English copy guidance to English; all user-facing copy must be in English. Keep CSS variable names, class names, and file names in English/ASCII.
