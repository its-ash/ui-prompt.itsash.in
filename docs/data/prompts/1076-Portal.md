# Meta-Prompt: Portal Landing Page Build

You are an expert front-end developer. Build a complete, production-ready landing page using the **Portal** visual system described below. Output three separate files: `index.html`, `style.css`, and `script.js`. No inline CSS. No inline JavaScript beyond a single deferred entry-point reference. Use Tailwind CSS (via CDN) with custom CSS driven by CSS variables and `@layer`/`@apply` directives. Use Google Fonts (Inter as the Suisse Intl substitute) and Google Material Symbols/Icons. Enforce BEM naming convention throughout. All user-facing copy must be in English. Invent a fictional brand name, product, and copy — never use real brand names, logos, trademarks, or product names.

---

## 1. CSS-First Architecture & Zero Inline CSS

- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class or ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling. Changing the site's look must require modifying only `style.css`, not the markup.
- All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

## 2. CSS Variables & Theme Tokens

Store all visual tokens inside `:root` using CSS variables:

**Colors:**
- `--color-void-black: #000000;`
- `--color-obsidian-surface: #0f0f13;`
- `--color-carbon-border: #292929;`
- `--color-graphite-card-edge: #1d1d1d;`
- `--color-ash-mist: #2a2a36;`
- `--color-platinum-text: #e6e6e6;`
- `--color-foil-highlight: #ffffff;`
- `--color-steel-muted: #9e9e9e;`
- `--color-portal-violet: #b296f8;`
- `--color-wisteria: #594b7c;`
- `--color-indigo-plum: #4b3f71;`
- `--color-lavender-mist: #ede9fe;`
- `--color-fuchsia-ink: #571c60;`
- `--color-verdant-edge: #0e4f26;`
- `--color-mint-whisper: #dcfce7;`
- `--color-cobalt-vein: #264264;`
- `--color-deep-tide: #06425d;`
- `--color-ice-blue: #dbeafe;`

**Semantic mappings (required):**
- `--primary: var(--color-portal-violet);`
- `--secondary: var(--color-obsidian-surface);`
- `--bg-primary: var(--color-void-black);`
- `--bg-secondary: var(--color-obsidian-surface);`
- `--text-primary: var(--color-platinum-text);`
- `--text-secondary: var(--color-steel-muted);`
- `--text-success: var(--color-mint-whisper);`
- `--text-error: #f87171;` (use a red tone consistent with dark theme)
- `--border-default: var(--color-carbon-border);`
- `--border-error: #f87171;`
- `--border-success: var(--color-verdant-edge);`

**Border Radius & Shadows:**
- `--radius-sm: 10px;` (single radius for all elements)
- `--radius-md: 10px;`
- `--radius-lg: 10px;`
- `--shadow-sm: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;`
- `--shadow-md: rgba(178, 150, 248, 0.2) 0px 25px 50px -12px;`

**Spacing & Transitions:**
- `--spacing-gap: 16px;`
- `--transition-fast: 150ms;`
- `--transition-normal: 250ms;`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);`

**Elevation/Stacking:**
- `--z-dropdown: 100;`
- `--z-modal: 200;`
- `--z-toast: 300;`

**Typography:**
- `--font-base: 'Inter', sans-serif;` (Suisse Intl substitute)

**Contrast Pairing:** Every light background token must pair with a dark text token and every dark background token must pair with a light text token. Enforce this pairing for all themes.

**Light Mode Background:** Do not default to pure white. Where a white/near-white is needed, use `#fefefe` instead of `#ffffff`.

## 3. Mandatory Dark Mode Support

- Dark mode must always be defined. Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Theme switching must be seamless without HTML restructuring.
- User theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Require a visible toggle control with correct `aria-pressed`/`aria-label` state.
- Since this theme is dark-first, the default rendering is dark. Light mode tokens must still be defined for completeness.

## 4. Flexbox Layout & Mobile-First Alignment

- Build all layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- All flex layouts must be mobile-responsive out of the box (convert rows to columns on smaller viewports). Prevent horizontal scrolling.
- Use Tailwind flex utilities where appropriate, mapped back to CSS variables.

## 5. Typography & Icons (Google Fonts Mandatory)

- Include Google Font `<link>` or `@import` tags for Inter (weights 400, 500, 600, 900) and bind to `--font-base`.
- Use Google Material Symbols/Icons for all icons. Forbid raw inline SVGs or local icon files.
- Typography scale:
  - Caption: 12px, line-height 1.5, letter-spacing 0.20em, weight 500
  - Body-sm: 14px, line-height 1.43, letter-spacing 0.05em, weight 400
  - Body: 16px, line-height 1.5, letter-spacing 0.05em, weight 400
  - Subheading: 18px, line-height 1.56, letter-spacing 0.05em, weight 600
  - Heading-sm: 36px, line-height 1.11, letter-spacing -0.025em, weight 900
  - Heading: 48px, line-height 1.11, letter-spacing -0.025em, weight 900
  - Display: 72px, line-height 1.00, letter-spacing -0.025em, weight 900

## 6. Component Design Specifications

### 6.1 Button Component

Style all states via CSS classes:

- **Default:** Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px. Radius 10px.
- **Primary (filled violet):** Background `#b296f8`, text `#ffffff`, weight 500, 14px, padding 16px 24px, radius 10px, shadow `rgba(0,0,0,0.05) 0px 1px 2px 0px`.
- **Ghost:** Transparent background, 1px border `#292929`, text `#e6e6e6`, weight 500, 14px, padding 16px 24px, radius 10px.
- **Hover:** Visual shift (brightness/shadow) with `cursor: pointer`.
- **Focus:** Distinct focus ring using CSS variables (`outline` / `box-shadow`) for keyboard navigation.
- **Active/Pressed:** Click transform feedback (`transform: scale(0.97)`).
- **Loading:** Disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting button dimensions.
- **Disabled:** Reduced opacity (`opacity: 0.5`), greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback state styles driven by `--text-success` or `--text-error`.

### 6.2 Card Component

- **Default:** Flexible Flexbox layout, styled with subtle borders and elevation using `--bg-secondary` and CSS variables. Background `#0f0f13`, 1px border `#1d1d1d`, radius 10px, padding 16px, violet-tinted shadow `rgba(178,150,248,0.20) 0px 25px 50px -12px`.
- **Hover:** Elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- **Focus-within:** Highlights card borders when a child link/button receives focus.
- **Loading (Skeleton):** Shimmer animation styling defined in CSS to prevent layout jumps.
- **Empty State:** Structured fallback layout featuring a Google Icon and clear guidance text.
- Image fills top edge with no separate radius (clipped by card radius). Title in weight 600 at 18px, `#ffffff`. Body in weight 400 at 16px, `#e6e6e6`.

### 6.3 Badge Component

Transparent fill, 1px saturated border, desaturated pastel text, 12px weight 500, letter-spacing 0.20em, padding 2px 10px, radius 10px. Four variants:
- **Success:** border `#0e4f26`, text `#dcfce7`
- **Info:** border `#264264`, text `#dbeafe` (alternate: `#06425d` border)
- **Violet:** border `#4b3f71`, text `#ede9fe`
- **Pink:** border `#571c60`, text `#ede9fe`

### 6.4 Form & Input Requirements

- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, and dedicated error feedback container.
- Radius 10px. Border `#292929` default. Focus ring in violet.

### 6.5 Modal / Popup Requirements

- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, support for closing via `Esc` or overlay clicks.

### 6.6 Navigation

- Top bar: logo left, links center, contact CTA right. Background `#000000` or `#0f0f13`.
- Nav links: weight 400, 14px, color `#e6e6e6`, no underline, 10px radius for pill-style. Spacing 8px between items.
- Brand mark: white mark on dark header, 10px radius container, 'Portal' wordmark in `#ffffff`, weight 600.
- Announcement bar above nav: full-width dark band `#0f0f13`, body text `#e6e6e6` at 14px, optional close icon, 8px vertical padding.

### 6.7 Section Eyebrow Label

- All-caps label above section heading (e.g. 'WHAT WE DO').
- Weight 500, 12px, letter-spacing 0.20em, color `#9e9e9e`.

### 6.8 Display Heading

- Weight 900, 48–72px, color `#ffffff`, letter-spacing -0.025em, line-height 1.00–1.11.

## 7. Core UX & Micro-Interaction Rules

- **Responsive by Default:** Fluid sizing and responsive breakpoints without horizontal overflow. Mobile-first.
- **Smooth Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- **Accessibility (a11y):** Sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- **Mandatory Visual Feedback:** Every user click, hover, or submission must trigger a visible state change.
- **Destructive Actions:** Generic `.btn-danger` or delete actions must be visually distinct in both light and dark themes.

## 8. Landing Page Sections

Build the following sections in order:

1. **Announcement Bar** — slim banner above header, full-width dark band.
2. **Navigation** — top bar with logo, links, contact CTA.
3. **Hero** — full-viewport-height illustrated scene with overlaid text block in upper-left: eyebrow, headline (display, 72px weight 900), subtext, two CTAs (filled violet + ghost). Use a placeholder gradient or abstract violet/indigo illustration as hero background.
4. **Features** — 3-column feature card grid, 16px gap. Each card: background `#0f0f13`, 1px border `#1d1d1d`, radius 10px, violet-tinted shadow, padding 16px. Image flush to top edge. Title weight 600 at 18px `#ffffff`. Body weight 400 at 16px `#e6e6e6`.
5. **How It Works** — 3 steps with numbered indicators, titles, and descriptions. Use violet accent for step numbers.
6. **Testimonials** — cards with quote, author name, role, and avatar placeholder. Use card styling with violet shadow.
7. **Pricing** — 3 tiers with feature lists, price, and CTA button. Highlight middle tier with violet border or glow.
8. **FAQ** — accordion-style expandable questions. Use Material Symbols for expand/collapse icons.
9. **Final CTA** — centered section with headline, subtext, and primary CTA button. Violet glow background accent.
10. **Footer** — secondary links organized in columns, brand mark, copyright. Dark surface background.

## 9. Spacing & Layout

- Page max-width: 1200px content container.
- Section gap: 48px vertical.
- Card padding: 16px.
- Element gap: 16px.
- Base unit: 4px. Compact density.

## 10. Imagery & Iconography

- Use placeholder gradients or abstract violet/indigo illustrations for hero and card images.
- Iconography: line-based, stroked in `#b296f8` or `#e6e6e6` with consistent thin-to-medium stroke weight. Use Google Material Symbols.
- Page is image-heavy in hero, image-light in body sections.

## 11. Do's and Don'ts

**Do:**
- Use `#b296f8` as the only chromatic fill for action buttons; pair with `#ffffff` text and 10px radius.
- Set display headings in weight 900 at 48–72px with -0.025em letter-spacing and line-height 1.00–1.11.
- Give every card the violet-tinted shadow `rgba(178,150,248,0.20) 0px 25px 50px -12px`.
- Use the badge family with transparent fill, 1px saturated border, desaturated pastel text, 12px text, 0.20em letter-spacing, 10px radius.
- Use the single 10px radius uniformly across cards, buttons, badges, nav.
- Keep canvas at `#000000` and elevated surfaces at `#0f0f13`; use `#292929` and `#1d1d1d` as the only border tones.
- Track body text at 0.05em and small labels/badges at 0.20em; tighten display type to -0.025em.

**Don't:**
- Do not introduce a second accent color.
- Do not use weight 400–600 for display headings.
- Do not apply neutral gray drop-shadows to cards.
- Do not use radii other than 10px.
- Do not place light text on light badge fills or dark text on dark borders.
- Do not use `#ffffff` for body copy; reserve for display headings and brand marks. Body uses `#e6e6e6`.
- Do not soften section gap below 48px.

## 12. Deliverables

- Three separate files: `index.html`, `style.css`, `script.js`.
- No inline `<script>` blocks beyond a single deferred entry-point reference.
- BEM naming convention enforced across all classes.
- No lorem-ipsum-only submissions; use realistic fictional copy for all sections.
- All copy in English. Invent a fictional brand name and product.

## 13. Dark Mode Toggle

- Include a visible theme toggle in the nav with correct `aria-pressed`/`aria-label`.
- Persist choice via `localStorage`, fall back to `prefers-color-scheme`.
- Define light mode tokens for completeness even though dark is default. Light mode background should not be pure white; use `#fefefe` where near-white is needed.

## 14. Accessibility Requirements

- Sufficient contrast in both Light and Dark modes.
- Never rely solely on color to communicate state.
- Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `footer`, `article`).
- Correct ARIA roles/labels on custom widgets (accordion, modal, toggle).
- Logical DOM/focus order.
- Full keyboard operability (no mouse-only interactions).
- `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- Respect `prefers-reduced-motion` for all animations.

## 15. JavaScript Requirements

- Theme toggle logic with localStorage persistence.
- Mobile menu toggle (hamburger) with focus management.
- FAQ accordion expand/collapse.
- Smooth scroll for anchor links.
- Form validation feedback (if contact form present in footer).
- No behavioral JS for form validation, popups/modals, or utility functions beyond what is explicitly requested; ask user if such logic is needed.

---

Build the complete landing page now following all rules above. Output only the three files with their contents. No preamble. No closing commentary.
