# Coding-AI Prompt — Fictional Landing Page in the "Modal" Phosphor-Terminal Style

You are an expert front-end engineer. Build a complete, production-quality landing page for a **fictional** developer-infrastructure product. Do **not** reuse the real brand name "Modal", its logo, trademarks, or product names anywhere in the deliverable. Invent a new fictional brand name, product name, feature names, testimonials, and pricing copy. The visual language must follow the specification below exactly.

## 1. Project Deliverables & File Structure
- Separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No unrequested placeholders: where copy is unspecified, invent realistic fictional copy; do not leave lorem-ipsum-only sections.

## 2. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. Forbid `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors only.
- Keep HTML semantic, clean, and agnostic of visual styling so the look can change by editing CSS alone.

## 3. CSS Variables & Theme Tokens
Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:

**Colors (dark theme — the only theme, but dark-mode support is still mandatory):**
- `--color-void-black: #000000` (page canvas)
- `--color-ground-iron: #181818` (primary button fill, card surfaces)
- `--color-carbon-veil: #212525` (elevated surfaces, nav)
- `--color-circuit-border: #485346` (outlined/ghost action border, hairline)
- `--color-phosphor-blue-black: #1f2a33` (secondary hairline borders)
- `--color-charcoal-rust: #231c1c` (code-window inner panels)
- `--color-lime-pulse: #7fee64` (primary brand accent — rationed, one per viewport)
- `--color-phosphor-white: #ddffdc` (primary text, headings, icon strokes, filled button text)
- `--color-mint-frost: #def0dd` (light section canvas, secondary text on dark)
- `--color-sage-60: #8cab87` (body copy default)
- `--color-sage-40: #677d64` (muted helper text)
- `--color-moss-70: #9cbf93` (eyebrow labels)
- `--color-moss-80: #aed2a4` (lead paragraph text)
- `--color-fern-link: #859984` (inline link text)
- `--color-deep-fern: #697368` (small uppercase labels, footer text)
- `--color-pine-15: #3e4a3c` (secondary outlined action border)

**Standard semantic tokens (map to the above):**
`--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

**Contrast pairing:** every light background token pairs with a dark text token and vice versa — enforce for every theme.

**Light-mode background:** do not default to pure white; where a white/near-white is needed use `#fefefe`. (The light section canvas here is `#def0dd` (Mint Frost), not white.)

**Border radius & shadows:** `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 16px`, `--shadow-sm`, `--shadow-md` (nav bar only: `rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px`).

**Spacing & transitions:** `--spacing-gap: 20px`, `--transition-fast`, `--transition-normal: 300ms`, `--ease-standard: ease-out`, plus `--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)`.

**Elevation/stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.

## 4. Mandatory Dark Mode Support
- Provide dark-mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Flexbox Layout & Mobile-First Alignment
- Build all layout structures with Flexbox (`display: flex`).
- Every flex container **must default to `align-items: center`** unless an explicitly justified exception exists.
- All flex layouts must be mobile-responsive (rows convert to columns on small viewports). Prevent horizontal scrolling.

## 6. Framework Default & Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons (Google Fonts Mandatory)
- Text: include Google Font `<link>`/`@import` for **Inter** (substitute for Inter Variable) and **Space Grotesk** (substitute for Goga). Bind to `--font-base` and `--font-display`.
- Set `font-feature-settings: "cv11"` on Inter globally and `"ss01"` on the display face globally — these variants are part of the brand identity, not optional.
- Icons: use Google Material Symbols/Icons only. Forbid raw inline SVGs or local icon files.

## 8. Component Design Specifications

### 8.1 Button Component
Style all states via CSS classes:
- **Default:** Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- **Hover:** Visual shift (brightness/shadow) with `cursor: pointer`.
- **Focus:** Distinct focus ring using CSS variables.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Disables interactions, prevents double-clicks, renders a CSS spinner or animated Google Icon without distorting button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback styles driven by `--text-success`/`--text-error`.

Button variants required:
- **Primary Filled Button:** `#181818` bg, `#ddffdc` text + 1px border, 12px radius, 32px padding all sides. Inter 16px weight 500, letter-spacing -0.352px.
- **Ghost Outline Button:** transparent bg, 1px `#ddffdc` border, `#ddffdc` text, 12px radius, 32px padding. Inter 16px weight 500.
- **Accent Pill Button:** 9999px radius, `#7fee64` bg, dark text (`#181818`/`#000000`), 12–16px vertical / 20–24px horizontal padding. Inter 16px weight 500. Rationed: one per viewport maximum.
- **Outlined Ghost Link:** transparent bg, 1px `#485346` border at reduced opacity, 9999px radius, 8px padding. Text `#859984`. Inter 14px weight 500.

### 8.2 Card Component
- **Default:** Flexible Flexbox layout, subtle borders and elevation using `--bg-secondary` and CSS variables.
- **Hover:** Elevation/shadow shift or subtle transform (`translateY(-2px)`).
- **Focus-within:** Highlights card borders when a child link/button receives focus.
- **Loading (Skeleton):** Shimmer animation in CSS to prevent layout jumps.
- **Empty State:** Structured fallback with a Google Icon and clear guidance text.

Card variants required:
- **Code Window Card:** ~12–16px radius, dark interior (`#181818`/`#212525`), 1px hairline `#485346` border. Top bar with three traffic-light dots. Content in monospace (Fira Mono substitute via Google Fonts), syntax-highlighted: keywords `#7fee64`, strings `#ddffdc`, comments `#677d64`. Optional right-aligned title in `#9cbf93` at 12px Inter weight 500. No shadow.
- **Workload Card:** 8px radius, `#1f2a33` bg, 32px padding. Top: 3D isometric icon in `#7fee64`, 120px square. Title: display face 24px weight 400, `#ddffdc`, 16px top margin. Description: Inter 16px weight 400, `#8cab87`, 8px top margin. No border, no shadow.

### 8.3 Form & Input Requirements
Account for states: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: flex container wrapping label, input field, and dedicated error feedback container.

### 8.4 Modal / Popup Requirements
Account for states: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions). UX features: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, support for closing via `Esc` or overlay clicks.

## 9. Core UX & Micro-Interaction Rules
- Responsive by default: fluid sizing and responsive breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility (a11y): sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- Mandatory visual feedback: every click, hover, or submission triggers a visible state change.
- Destructive actions: visually distinct in both light and dark themes.

## 10. Landing Page Sections (in order)
1. **Navigation Bar:** fixed top, full-width, `#212525` bg, 10px backdrop blur, 1px bottom border `#1f2a33`. Height ~64px, horizontal padding 24px. Left: logo (lime 3D mark + fictional wordmark in display face 20px weight 500, `#ddffdc`). Center: nav links (Inter 14px weight 500, `#ddffdc`, 32px gap). Right: 'Login' text link (`#859984`) + 'Sign Up' Accent Pill Button.
2. **Hero Section:** full-bleed `#000000` canvas, centered stack. Headline display face 64px weight 500, lh 1.0, letter-spacing -0.448px — first two words in `#7fee64`, remainder in `#ddffdc`. Subhead Inter 20px weight 400, `#aed2a4`, max-width ~640px centered. Two CTAs side by side with 12px gap: Accent Pill + Ghost Outline. Below: centered 3D lime cube with radial green glow halo (`rgba(195,198,64,0.85)` fading to transparent). Long-duration ambient animation (80s) for cube rotation; spring easing `cubic-bezier(0.34, 1.56, 0.64, 1)` for key illustrations.
3. **Features (3 cards):** 3-column grid, 20px gap, each a Workload Card (Inference/Training/Sandboxes-style capability cards with isometric 3D icons in `#7fee64`). Section: eyebrow label (`#9cbf93`, Inter 12px weight 500, uppercase, +0.6px tracking) → display heading (`#ddffdc`) → muted body (`#8cab87`) → grid.
4. **How It Works (3 steps):** numbered steps with display-face titles and Inter body copy in muted sage. Flex row on desktop, column on mobile. Use Google Material Symbols for step icons.
5. **Testimonials:** cards with quote text in `#8cab87`, author name in `#ddffdc`, role in `#677d64`. Flex layout, responsive.
6. **Pricing (3 tiers):** three pricing cards. Middle tier highlighted with `#7fee64` accent border/pill. Each card: tier name (display face), price (display face large), feature list with Google Material Symbols check icons, CTA button.
7. **FAQ:** accordion-style questions. Use `<details>`/`<summary>` or accessible custom accordion. Smooth transitions. `aria-expanded` states.
8. **Final CTA:** centered section with display-face headline, muted subhead, Accent Pill Button.
9. **Footer:** compact, dark, link columns in muted green (`#859984`/`#677d64`). Include secondary links, fictional brand name, copyright.

## 11. Style Rules (Do's and Don'ts)
**Do:**
- Use `#7fee64` as a fill on exactly one element per viewport — the hero CTA pill, an active tag, or the logo. Never tile it across a surface.
- Set Inter `font-feature-settings: "cv11"` and display face `"ss01"` globally.
- Default body text to `#8cab87` on `#000000`.
- Render headlines in the display face with negative tracking (-0.336px at 42px, -0.448px at 64px).
- Use 12px radius for buttons and 8px for cards.
- Communicate depth through surface value shifts (`#000000` → `#181818` → `#212525`) and 1px `#485346` hairlines. Shadows only on the nav bar.
- Use 32px padding on primary cards and content blocks.

**Don't:**
- Do not use `#7fee64` as text color on body copy — fills, logo, and hero phrase only.
- Do not apply drop shadows to cards, buttons, or content blocks (nav bar only).
- Do not introduce blue, purple, or any non-green chromatic accents.
- Do not use `#ddffdc` for body paragraphs — reserved for headings, icons, button text. Body copy uses muted sage scale.
- Do not set display headings in Inter — display face mandatory for H1–H4 and card titles.
- Do not use 9999px radius on cards or panels — pill radius reserved for CTAs, tags, link chips.
- Do not use raw white `#ffffff` or pure green `#00ff00`.

## 12. Motion & Transitions
- Primary transition duration 300ms with ease-out for UI state changes (color, background, border, fill, stroke, text-decoration-color — all transition together).
- Spring easing `cubic-bezier(0.34, 1.56, 0.64, 1)` sparingly for 3D cube and key illustrations.
- 80s ambient animation for hero cube rotation.
- No bouncy/playful easings on UI chrome.
- Respect `prefers-reduced-motion`.

## 13. The Phosphor Metaphor
The design speaks the visual language of a CRT terminal: black void canvas, pale-green phosphor type (slightly warm), single status LED (vivid lime). Ask: "Would this look right on a high-end oscilloscope display?" Rules out: neon effects, glow filters on text, scanline textures, monospace-as-decoration, anything reading as "hacker movie" rather than "professional infrastructure tool."

## 14. Edit Mode (not applicable — this is a from-scratch build)
N/A.

## 15. Final Notes
- All user-facing copy must be in English.
- All CSS variable names, class names, and file names in English/ASCII.
- Invent a fictional brand name and never use "Modal" or its marks.
- Output only the three files' contents as the deliverable. No preamble.
