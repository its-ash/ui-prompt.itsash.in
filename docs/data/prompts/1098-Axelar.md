# Landing Page Build Prompt — "Axelar" Dark Command-Center Theme (Fictional Brand Required)

Build a complete, responsive landing page from scratch using the visual style described below. **Do NOT use the real brand name "Axelar", its logo, trademarks, or product names anywhere in the output.** Invent a fictional brand name, product name, tagline, and all copy. All user-facing copy must be written in English.

## 1. Architecture & Styling Rules

1.1 **CSS-First, Zero Inline CSS.** All styling lives in a single `style.css`. No `style="..."` attributes in HTML. All design properties targeted via class/ID selectors only. HTML must remain semantic and styling-agnostic.

1.2 **CSS Variables & Theme Tokens.** Define all tokens in `:root` and theme classes. Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`. Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text. Light-mode background must not be pure white; use `#fefefe` where near-white is needed. Use the Axelar palette below as the dark theme's tokens.

1.3 **Mandatory Dark Mode.** Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class. Theme variables must switch seamlessly. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle with correct `aria-pressed`/`aria-label`.

1.4 **Flexbox, Mobile-First.** Use Flexbox (`display: flex`) for all layouts. Every flex container must default to `align-items: center` unless explicitly justified otherwise. Layouts must be mobile-responsive, converting rows to columns on small viewports. Prevent horizontal scrolling.

1.5 **Tailwind CSS.** Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested. Utility classes must map back to CSS variables or reusable component classes (`.btn`, `.card`, `.input-group`).

1.6 **Google Fonts & Icons (Mandatory).** Use Google Fonts for text and Google Material Symbols/Icons for icons. No raw inline SVGs or local icon files. Bind fonts to `--font-base` and related tokens.

## 2. Design Tokens (Axelar Style)

**Colors (dark theme):**
- `--color-signal-orange: #ff6314` (primary action, product surfaces, active states)
- `--color-node-green: #33ffac`, `--color-node-violet: #5b76ff`, `--color-node-magenta: #ff2ad4`, `--color-node-cyan: #16c4ff` (8–10px dot indicators only)
- `--color-abyss: #04070a` (canvas)
- `--color-void: #000000` (deepest layer, SVG icon fills)
- `--color-obsidian: #0f1214` (nav, hover backgrounds)
- `--color-charcoal: #1a1d1f` (borders, dividers)
- `--color-carbon: #090c0f` (card surfaces)
- `--color-steel: #676f7a` (muted text, secondary borders)
- `--color-cloud: #c6ced7`, `--color-mist: #e1e6eb`, `--color-snow: #f0f5fa`, `--color-white: #ffffff`

**Typography:**
- Clashgrotesk (500, 600) for headings, nav, buttons, links — letter-spacing 0.033em.
- Inter (400, 600) for body copy.
- DM Mono (400, 500) for technical labels, metadata, badges.
- Type scale: caption 12px, body-sm 14px, body 16px, body-lg 19px, subheading 21px, heading-sm 28px, heading 37px, heading-lg 56px, display 74px.

**Spacing & Shapes:**
- Base unit 6px; comfortable density.
- Spacing scale: 4,5,7,9,12,14,16,19,20,24,28,32,42,43,48,64px.
- Radii: cards 8px, small 4px, badges 100px, inputs/buttons 24px.
- Shadows: subtle inset ring (`rgb(255,255,255) 0 0 0 1px inset`), subtle-2 inset ring. No drop shadows for elevation — use tonal stepping.
- Page max-width 1280px; section gap 64px; card padding 24px; element gap 24px.

**Surface Hierarchy:** `#000000` → `#04070a` (canvas) → `#090c0f` (cards) → `#0f1214` (nav) → `#1a1d1f` (borders). Depth via tonal stepping only.

## 3. Component Specifications

3.1 **Buttons:** Default flex layout (`display:flex; align-items:center; justify-content:center; gap:0.5rem`), min touch target 44x44px. Hover brightness/shadow + `cursor:pointer`. Focus ring via CSS variables. Active `transform: scale(0.97)`. Loading disables interaction, shows CSS spinner/animated Google Icon without dimension change. Disabled `opacity:0.5`, greyscale, `cursor:not-allowed`. Success/Error temporary states via `--text-success`/`--text-error`. Signal Orange filled pill (24px radius) for primary; ghost outlined pill (1px solid white) for secondary. All button text uppercase, Clashgrotesk 500, 14–16px, letter-spacing 0.033em.

3.2 **Cards:** Flexible flexbox layout, subtle borders and elevation via `--bg-secondary` and CSS variables. Hover elevation/shadow shift or `transform: translateY(-2px)`. Focus-within highlights borders. Loading skeleton shimmer. Empty state with Google Icon + guidance text. Dark Partner Card: bg `#090c0f`, border 1px `#1a1d1f`, radius 8px, padding 24px, category dot + DM Mono label header, 2×2 logo grid with 1px `#1a1d1f` cell borders. Orange Product Card: bg `#ff6314`, radius 8px, padding 24px, numbered step in white circle, dotted-pattern icon, DM Mono category tag, Clashgrotesk heading, Inter body at reduced opacity.

3.3 **Forms/Inputs:** States: empty, focused (outline ring), filled, valid, invalid, disabled, read-only. Flex container wrapping label, input, error feedback. Pill radius 24px, inset border `#e1e6eb`, placeholder `#676f7a`.

3.4 **Modal/Popup:** Opening/open/loading/success-error/closing animated via CSS transitions. Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

3.5 **Announcement Bar:** Full-width, bg `#33ffac`, text Clashgrotesk 500 14px uppercase `#04070a`, height ~40px, dismissible with × icon.

3.6 **Navigation Bar:** Fixed/sticky, bg `#0f1214`, height ~60px. Logo left, nav links center (Clashgrotesk 500 14px `#f0f5fa`), social icons + Signal Orange CTA pill right.

3.7 **Category Dot Badge:** 8–10px filled circle in node accent color + DM Mono label.

3.8 **Pill Badge:** 100px radius, bg `#1a1d1f` or accent, DM Mono 400 12–14px, border 1px `#676f7a` for neutral, padding 4px 12px.

3.9 **Trust Indicator Strip:** Horizontal row, small icon + DM Mono 400 12px `#676f7a` labels, minimal weight.

## 4. Page Sections (in order)

1. **Announcement Bar** — dismissible green strip.
2. **Navigation Bar** — fixed, logo + links + social + CTA.
3. **Hero** — split layout: left text block (headline Clashgrotesk 600 56–74px white; subhead 21–28px `#f0f5fa`; body Inter 400 19px reduced opacity; CTA pair: Signal Orange filled + ghost outlined pill), right side diamond-lattice visual (repeating rhombus outlines `#1a1d1f` on `#04070a`, scattered node dots, one diamond with pink-magenta gradient glow). Trust indicator strip at hero bottom.
4. **Features** — 3 cards (use Orange Product Card or Dark Partner Card style). Dark canvas.
5. **How It Works** — 3 steps with numbered indicators.
6. **Testimonials** — cards with quote + author.
7. **Pricing** — 3 tiers.
8. **FAQ** — accordion items.
9. **Final CTA** — centered call to action with button pair.
10. **Footer** — secondary links, logo, social icons.

## 5. UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 6. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM or fixed utility set) throughout — never mix.
- No lorem-ipsum-only submissions where real copy is implied; placeholders allowed only where content genuinely unspecified. Invent fictional brand/product/copy; never use "Axelar" or its trademarks.

## 7. Additional Constraints

- No decorative gradients except the single orange linear-gradient on the hero lattice glow.
- No shadows for elevation; tonal stepping only.
- Node accent colors only as 8–10px dots/badges, never as large fills.
- Clashgrotesk not for body paragraphs over two lines; use Inter.
- Radii strictly: 24px buttons/inputs, 8px cards, 100px pill badges, 4px small inline.
- Canvas must be `#04070a`, never pure black `#000000` as page background.
- Light sections (if any) flip surface stack: white canvas, `#f0f5fa` secondary text, `#e1e6eb` borders, `#04070a` headings. Orange product cards remain as color punctuation.
