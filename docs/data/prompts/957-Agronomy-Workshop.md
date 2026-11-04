# Coding AI Prompt — Agronomy Workshop Landing Page

## 1. Role & Objective
You are a frontend coding agent. Build a complete, production-ready **Landing Page** themed **"Agronomy Workshop"** — a print-meets-product catalog / newsprint zine aesthetic. Deliver separate `index.html`, `style.css`, and `script.js` files. Invent a fictional brand name, product names, and all user-facing copy. Never use the real brand name "Agronomy Workshop", its logo, trademarks, or product names anywhere in the page; reuse only the visual style.

## 2. Strict Architecture Rules

**2.1 CSS-First, Zero Inline CSS**
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors only.
- Keep HTML clean, semantic, and styling-agnostic.

**2.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` (and theme classes) using CSS variables. Define and use at minimum:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Agronomy Workshop palette (map into the above where sensible, and also define the source tokens): `--color-workshop-blue: #0076ff`, `--color-hail-yellow: #f4eb59`, `--color-pale-sky: #c3d7ee`, `--color-canvas: #ffffff`, `--color-bone: #eeede8`, `--color-ink: #000000`, `--color-press-black: #1e1e1e`, `--color-smudge: #888888`, `--color-ash: #666666`.
- Contrast pairing: every light background token pairs with a dark text token and vice versa, in both themes.
- Light mode background must not be pure white where a warm off-white fits; use `#fefefe` instead of `#ffffff` where near-white is needed. Page canvas may use `#ffffff`; panels/cards use `#eeede8` (Bone).
- Border radius & shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`. (Note: this theme uses flat surfaces with no shadows; elevation via color shifts only.)
- Spacing & transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: `--font-base` bound to Google Font; `--text-caption`, `--text-body`, `--text-heading-sm`, `--text-display`.

**2.3 Mandatory Dark Mode**
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

**2.4 Flexbox Layout & Mobile-First**
- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified otherwise.
- All layouts mobile-responsive; convert rows to columns on small viewports; prevent horizontal scrolling.

**2.5 Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**2.6 Typography & Icons (Google Fonts Mandatory)**
- Use Google Fonts for text and icons. Include `<link>`/`@import` tags.
- Text: use Google Font equivalents for the theme voices — condensed display (Oswald or Barlow Condensed) for headings, a serif (IBM Plex Serif) for body, and a mono (Space Mono) for micro-labels. Bind primary to `--font-base`.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 3. Theme-Specific Style Specifications

**Colors & Surfaces**
- Page canvas: `#ffffff`; panels/cards: `#eeede8` (Bone); soft blue callout: `#c3d7ee` (Pale Sky); promo strip: `#f4eb59` (Hail Yellow).
- Text: body `#1e1e1e` (Press Black); headings/borders `#000000` (Ink); muted `#888888` (Smudge); helper `#666666` (Ash).
- Accent: `#0076ff` (Workshop Blue) for action buttons and active link states only — never decorative.
- No additional accent colors beyond Workshop Blue, Hail Yellow, Pale Sky.

**Typography**
- Body copy: serif at 14px / line-height 1.14 / letter-spacing -0.02em (stamped editorial feel).
- Display headings: condensed grotesque at 32–54px, line-height ~0.81, letter-spacing -0.02em, weight 500.
- Micro-labels (prices, tags, nav): mono at 10px, letter-spacing +0.1em, uppercase.
- Type scale: caption 10px/1.2/1px; body 14px/1.14/-0.28px; heading-sm 32px/0.81/-0.64px; display 54px/1/-1.08px.

**Spacing & Shapes**
- Base unit 4px; density compact.
- Spacing scale: 4, 8, 12, 16, 20, 40px.
- Border radius: tags 5px; cards 0px; banners 0px; buttons 5px.
- Section gap 40px; card padding 16–20px; element gap 4–12px.
- No drop shadows. Flat surfaces with 1px solid black hairline borders for structure. Elevation via color surface shifts only.

**Imagery**
- Large, full-bleed, sharp-edged (0px radius) editorial photography; no overlays, no filters. Use placeholder images (e.g., picsum) sized appropriately.

**Layout**
- Full-bleed, no max-width container. Dense, zine-like rhythm with tight 40px section gaps and little breathing room. Elements separated by hairline rules rather than whitespace.

## 4. Component Design Specifications

**Buttons**
- Default: flex, `align-items: center`, `justify-content: center`, gap 0.5rem; min touch target 44x44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disable interactions, prevent double-clicks, CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary styles via `--text-success`/`--text-error`.
- Shop CTA: Workshop Blue bg, white text, 5px radius, 20px horizontal padding, 6–10px vertical padding, uppercase tracked text, full column width in sidebars.

**Cards**
- Default: flex layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty State: Google Icon + guidance text.

**Forms & Inputs**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

**Modal/Popup**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 5. Core UX & Micro-Interactions (Global)
- Responsive by default; fluid sizing; no horizontal overflow.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 6. Deliverables & Naming
- Files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM or fixed utility set) across the entire deliverable — never mix.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders only where content genuinely unspecified.
- All user-facing copy in English.

## 7. Sections to Build
1. Hero — large condensed display heading, subcopy in serif, Workshop Blue CTA, full-bleed editorial image.
2. Features — 3 cards with icon (Material Symbols), title, description.
3. How It Works — 3 numbered steps.
4. Testimonials — quotes with attribution.
5. Pricing — 3 tiers with feature lists and CTA buttons.
6. FAQ — collapsible questions.
7. Final CTA — centered call to action.
8. Footer — secondary links, brand mark, copyright.

Use the theme's dense hairline-bordered grid aesthetic throughout. Apply 1px black borders between sections/cards where appropriate. Keep all imagery sharp-edged.

## 8. Output
Output only the finished prompt content as instructed; now generate the three files (`index.html`, `style.css`, `script.js`) implementing the above. Ensure no real brand name, logo, trademark, or product name from the source theme appears. Invent a fictional brand.
