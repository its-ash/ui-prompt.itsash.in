# Landing Page Prompt — Index Theme (Twilight Summit Command Center)

## 1. Project Overview
Build a complete, responsive landing page using the **Index** visual style: a violet-tinted dark dashboard aesthetic with a nocturnal palette, coral-to-red gradient CTA, and high-density product UI. The page must be delivered as three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.

**Fictional Brand Requirement:** Invent a fictional brand name, product name, and all copy. Never use the real brand name "Index," its logo, trademarks, or product names anywhere in the page. The style is reused only.

## 2. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors only. HTML must remain semantic and agnostic of visual styling.
- Use one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.

## 3. CSS Variables & Theme Tokens
Store all visual tokens in `:root` using CSS variables. Include at minimum:

**Colors:**
- `--color-abyss-black: #02030b`
- `--color-midnight-indigo: #04061c`
- `--color-slate-indigo: #0c0a2b`
- `--color-carbon-iris: #13151f`
- `--color-twilight-plum: #2c2b52`
- `--color-iris-border: #292a4d`
- `--color-graphite: #202333`
- `--color-steel: #353545`
- `--color-smoke: #9b9ba4`
- `--color-ash: #b4b4bb`
- `--color-bone: #ffffff`
- `--color-ember-coral: linear-gradient(135deg, oklch(0.81 0.15 47.92) 0%, oklch(0.69 0.26 16.93) 100%)`
- `--color-electric-blue: #0067ff`
- `--color-arc-violet: #665eff`
- `--color-chartreuse: #ffff00`

**Typography:**
- `--font-index: 'Inter Tight', 'Geist', sans-serif` (substitute for custom display face)
- `--font-inter: 'Inter', sans-serif`
- `--font-apple-system: -apple-system, BlinkMacSystemFont, sans-serif`

**Spacing & Shapes:**
- `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-12: 12px`, `--spacing-16: 16px`, `--spacing-20: 20px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-36: 36px`, `--spacing-48: 48px`, `--spacing-60: 60px`, `--spacing-72: 72px`, `--spacing-200: 200px`
- `--radius-nav: 30px`, `--radius-card: 12px`, `--radius-pill: 30px`, `--radius-button: 30px`, `--radius-large-card: 20px`, `--radius-feature-panel: 24px`, `--radius-small: 6px`
- `--shadow-sm: oklch(0.2 0 0 / 0.4) 1px 2px 6px 0px`
- `--shadow-md: oklch(0 0 0 / 0.1) 1px 1px 10px 0px`
- `--shadow-sm-2: oklch(0.89 0 0 / 0.18) 0px 1px 8px 0px`
- `--shadow-xl-2: rgba(0, 0, 0, 0.4) 0px 4px 40px 8px, rgba(0, 0, 0, 0.8) 0px 0px 0px 0px`

**Transitions & Z-index:**
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`

**Contrast Pairing:** Every light background token must pair with a dark text token and vice versa. Enforce for every theme.

**Light Mode Background:** Do not default to pure white. Use `#fefefe` where a white/near-white is needed.

## 4. Mandatory Dark Mode Support
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- User theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Flexbox Layout & Mobile-First Alignment
- Build all layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- All flex layouts must be mobile-responsive out of the box (rows convert to columns on smaller viewports). Prevent horizontal scrolling.

## 6. Framework Default & Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives) unless another framework is requested.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons (Google Fonts Mandatory)
- Include Google Font `<link>` or `@import` tags for Inter and Inter Tight (substitute for Index display face). Bind to `--font-base`.
- Use Google Material Symbols/Icons. Explicitly forbid raw inline SVGs or local icon files.

## 8. Component Design Specifications

### 8.1 Button Component
- **Default:** Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- **Hover:** Visual shift (brightness/shadow) with `cursor: pointer`.
- **Focus:** Distinct focus ring using CSS variables.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback state styles driven by `--text-success` or `--text-error`.

**Coral CTA Button (Primary Action):** Pill-shaped (30px radius), coral-to-red gradient fill (`oklch(0.81 0.15 47.92) → oklch(0.69 0.26 16.93)`), white text in Index 15px weight 500, padding 8px 20px. No border. The only warm element on the page. Used for "Start for free" in both nav and hero. **Never place more than once per viewport.**

**Ghost Nav Link (Secondary):** Text-only, Inter 15px weight 500, color `#b4b4bb`. No background, no border. Hover transitions to `#ffffff`. Padding 8px 12px.

### 8.2 Card Component
- **Default:** Flexible Flexbox layout, styled with subtle borders and elevation using `--bg-secondary` and CSS variables.
- **Hover:** Elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- **Focus-within:** Highlights card borders when a child link/button receives focus.
- **Loading (Skeleton):** Shimmer animation styling defined in CSS to prevent layout jumps.
- **Empty State:** Structured fallback layout featuring a Google Icon and clear guidance text.

**Feature Card:** Dark panel on Slate Indigo (`#0c0a2b`) background, 1px Iris Border (`#292a4d`), 20px radius. Internal padding 20px. Title in Index 22px weight 600 white, body in Inter 15px weight 400 `#9b9ba4`. Often contains a product screenshot or diagram. Arranged in 3-column grid with 16px gap.

### 8.3 Form & Input Requirements
- **States:** Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- **Structure:** Flex container wrapping a label, input field, and dedicated error feedback container.

### 8.4 Modal / Popup Requirements
- **States:** Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- **UX Features:** Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, support for closing via `Esc` or overlay clicks.

## 9. Core UX & Micro-Interaction Rules
- **Responsive by Default:** Fluid sizing and responsive breakpoints without horizontal overflow.
- **Smooth Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- **Accessibility (a11y):** Sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Require semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, and `aria-live` regions for dynamic feedback.
- **Mandatory Visual Feedback:** Every user click, hover, or submission must trigger a visible state change.
- **Destructive Actions:** Generic `.btn-danger` or delete actions must be visually distinct in both light and dark themes.

## 10. Color Strategy — Signal vs. Noise (95/5 Rule)
- 95% of the interface is violet-tinted dark neutrals (Abyss through Graphite) with bone-white text.
- Coral gradient = the only filled button fill on the entire site. Never use for tags, dots, or decorative fills.
- Electric Blue / Arc Violet / Ember Coral / Chartreuse = functional status dots and tag pills only. Each maps to a specific meaning (in-progress, planned, blocked, done). Never use as backgrounds or large fills.
- The mountain landscape gradient = brand identity at the hero only. Do not reuse for buttons, cards, or backgrounds elsewhere.
- When in doubt, stay in the neutrals. Color is earned, not applied.

## 11. Do's and Don'ts
**Do:**
- Use the coral-to-red gradient exclusively for the primary CTA — it is the only warm element and must remain scarce.
- Set all borders to 1px in Iris Border (`#292a4d`) or Graphite (`#202333`) — never 2px.
- Apply 30px radius to all interactive elements (buttons, nav, tags, inputs).
- Use 12–20px radius for cards and panels — never 4px or 8px.
- Enable tabular figures (`'tnum'`) in all contexts containing numbers.
- Map saturated colors to function: Electric Blue = in-progress, Arc Violet = planned, Ember Coral = blocked/high-priority, Chartreuse = done. Never use them decoratively.
- Keep card padding at 12px and element gap at 8px. White space is achieved through section gaps (64px), not internal padding.

**Don't:**
- Do not introduce new background colors — the system is a luminance stack: Abyss → Midnight → Slate → Carbon.
- Do not use shadows for elevation — the design relies on border luminance and background contrast, not drop shadows.
- Do not place the coral CTA more than once per viewport.
- Do not use `#ffffff` at 100% opacity for body text below 16px — use `#b4b4bb` or `#9b9ba4` for secondary/muted content.
- Do not use blue/violet/red as fill backgrounds for buttons — those colors are functional dots/tags only.
- Do not apply letter-spacing > 0.0150em or < 0.0030em.
- Do not use light mode variants — the system is nocturnal by design.

## 12. Page Sections to Build
Build the following sections in order, all user-facing copy in English:

1. **Frosted Nav Bar** — Semi-transparent dark surface (`rgba(12,10,43,0.6)`) with backdrop blur, 30px radius, floating above hero. 1px Iris Border edge. Logo left, nav links center (Inter 15px weight 500, `#b4b4bb`), Sign in + coral CTA pill right. Height ~48px, horizontal padding 8px.

2. **Hero** — Full-viewport mountain landscape at dusk (deep violet, magenta, indigo tones with glowing horizon line) as background. Centered headline (72px Index display face) over a semi-transparent dark overlay. Announcement badge (small pill, 30px radius, dark translucent fill, 1px Iris Border, Inter 13px weight 500 `#b4b4bb`) above headline. Coral CTA button below. One coral CTA per viewport.

3. **Logo Strip** — Single row of customer wordmarks at ~40px height, evenly spaced with 48px gap, Bone white at 60% opacity. No dividers, no background. Centered, max-width matches content area.

4. **Features (3 cards)** — 3-column grid with 16px gap. Each Feature Card: Slate Indigo background, 1px Iris Border, 20px radius, 20px internal padding. Title Index 22px weight 600 white, body Inter 15px weight 400 `#9b9ba4`. Embed product screenshots framed as macOS window (3 traffic-light dots, dark title bar, 12px radius, shadow `oklch(0 0 0 / 0.1) 1px 1px 10px`).

5. **How It Works (3 steps)** — 3-step horizontal or vertical flow with numbered indicators, thin connector lines in `#292a4d`, and concise descriptions. Use status dots where appropriate.

6. **Product Demo Section** — Single full-width product window frame spanning content width (max 1200px). macOS-style window chrome with traffic-light dots.

7. **Testimonials** — Card-based testimonials with quote text, author name, and role. Dark panel styling consistent with Feature Cards.

8. **Pricing (3 tiers)** — 3-column pricing cards. Each with tier name, price, feature list with status dots, and CTA. Middle tier may be highlighted with a subtle border emphasis (still 1px, Iris Border or Graphite).

9. **FAQ** — Accordion-style FAQ with expand/collapse animated via CSS transitions. Questions in Index or Inter, answers in Inter `#9b9ba4`.

10. **Final CTA** — Centered section with headline and coral CTA button. One coral CTA per viewport — if already used in hero, use a secondary treatment here or ensure only one coral CTA is visible at a time.

11. **Footer** — Minimal: logo strip + minimal links on the dark canvas. Secondary links in `#b4b4bb`, hover to `#ffffff`.

## 13. Surface System (Luminance Stack)
- Level 0 (Abyss `#02030b`): Deepest base — behind modals, behind hero landscape.
- Level 1 (Midnight `#04061c`): Page canvas — hero background, full-bleed sections.
- Level 2 (Slate Indigo `#0c0a2b`): Elevated panels — feature cards, dropdowns, product window frames.
- Level 3 (Carbon Iris `#13151f`): Inset surfaces — table rows, list items, input wells.
- Level 4 (Twilight Plum `#2c2b52`): Hover/active surface — selected rows, interactive feedback.

## 14. Typography Scale
- caption: 11px, line-height 1.5, letter-spacing 0.165px
- body: 15px, line-height 1.6, letter-spacing 0.225px
- subheading: 18px, line-height 1.5, letter-spacing 0.234px
- heading-sm: 24px, line-height 1.3, letter-spacing 0.216px
- heading: 32px, line-height 1.2, letter-spacing 0.192px
- heading-lg: 42px, line-height 1.2, letter-spacing 0.21px
- display: 72px, line-height 1.2, letter-spacing 0.216px

Enable `"tnum"` OpenType feature on all number contexts.

## 15. Status Tag Pill
Pill shape (30px radius), dark fill (Twilight Plum `#2c2b52` at 40% or `#0c0a2b`), 1px border in matching saturated color. Colored 6px dot left, text in Inter 12px weight 500. Padding 4px 10px. Colors map to priority/status: Electric Blue = in progress, Arc Violet = planned, Ember Coral = blocked, Chartreuse = done.

## 16. Product Table Row (if used in demo)
Carbon Iris (`#13151f`) background, 1px bottom border in `#202333`. Cells padded 8px 12px. Text Inter 13px weight 500 white. Status indicated by 8px colored dot preceding a 12px label. Compact row height ~36px.

## 17. Hierarchy Tree Node (if used in feature visuals)
Rounded rectangle (12px radius), dark fill (`#0c0a2b`), 1px border matching category color. Inter 13px weight 500 white label, right-aligned count badge in `#9b9ba4`. Connected by thin `#292a4d` lines.

## 18. Announcement Badge
Small pill (30px radius) above hero headline. Dark translucent fill (`#0c0a2b` at 50%), 1px Iris Border. Inter 13px weight 500 `#b4b4bb` text, centered. Padding 4px 12px.

## 19. Video Thumbnail Card (if used)
Horizontal card with thumbnail left (rounded 12px, ~120px wide), text right. Play button overlay: 40px circle, white fill at 20% opacity, centered triangle icon. Title Index 17px weight 600 white, description Inter 14px weight 400 `#9b9ba4`.

## 20. Gradient CTA Glow Ring (decorative)
Multi-layer radial glow: 70px cyan (`#c1ecf4`) blur, 26px indigo (`#8b7ee0`) ring, 52px violet (`#9d6ddd`) ring, 80px magenta (`#c676e7`) ring. Used behind hero illustration as celestial/atmospheric focal point.

## 21. Deliverables
- `index.html` — semantic HTML5, no inline styles, no inline scripts beyond deferred entry point.
- `style.css` — all styling, CSS variables, responsive breakpoints, animations, dark mode.
- `script.js` — theme toggle with localStorage persistence, FAQ accordion, any interactive state. No form validation logic unless explicitly requested; if needed, ask the user how they want it handled.

## 22. Accessibility Checklist
- Sufficient contrast in dark mode (bone white on midnight indigo).
- Never rely solely on color to communicate state — pair dots with labels.
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Correct ARIA roles/labels on custom widgets (accordion, toggle).
- Logical DOM/focus order.
- Full keyboard operability (no mouse-only interactions).
- `aria-live` regions for dynamic feedback (FAQ expand, theme toggle).
- Respect `prefers-reduced-motion`.

## 23. Final Notes
- All user-facing copy must be in English.
- Invent a fictional brand name and product — never use "Index" or any real trademark.
- The mountain landscape is the hero's signature visual identity — render it as a CSS gradient or background image placeholder, not as a decorative stock photo.
- No light mode variants. The system is nocturnal by design.
