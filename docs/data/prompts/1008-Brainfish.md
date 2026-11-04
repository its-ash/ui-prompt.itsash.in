# Coding AI Prompt: Complete Landing Page — Brainfish Theme

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside a dedicated `style.css` file. No `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

### 1.2 CSS Variables & Theme Tokens
Store all visual tokens inside `:root` (and theme classes) using CSS variables. Use these Brainfish tokens:

**Colors:**
- `--color-lime-sprint: #a3e635`
- `--color-paper-white: #ffffff` (use `#fefefe` where a near-white is needed)
- `--color-cream: #fcfff7`
- `--color-ink: #262626`
- `--color-black-ink: #000000`
- `--color-depth: #303030`
- `--color-rule: #e5e5e5`
- `--color-muted: #525252`
- `--color-muted-gray: #737373`
- `--color-mint-edge: #7ee2b8`
- `--color-mint-wash: #dcfff1`

Map to generic tokens: `--primary: var(--color-lime-sprint)`, `--secondary: var(--color-mint-edge)`, `--bg-primary: var(--color-paper-white)`, `--bg-secondary: var(--color-cream)`, `--text-primary: var(--color-ink)`, `--text-secondary: var(--color-muted)`, `--text-success: var(--color-mint-edge)`, `--text-error: #dc2626`, `--border-default: var(--color-rule)`, `--border-error: #dc2626`, `--border-success: var(--color-mint-edge)`.

**Contrast Pairing:** Any light background token must pair with a dark text token, and any dark background token must pair with a light text token — enforce for every theme.

**Radius & Shadows:**
- `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 9999px`
- `--shadow-sm: 2px 2px 0px 0px var(--color-ink)`, `--shadow-md: 2px 2px 0px 0px var(--color-ink)`

**Spacing & Transitions:**
- `--spacing-gap: 8px`, `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Elevation/Stacking:** `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`.

**Typography:** `--font-base: 'Geist', sans-serif`, `--font-emphasis: 'Fraunces', serif` (italic only, for one or two emphasis words inside Geist headlines).

### 1.3 Mandatory Dark Mode Support
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background and text CSS variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit; require a visible toggle control with correct `aria-pressed`/`aria-label` state.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- All flex layouts must be mobile-responsive (rows to columns on small viewports). Prevent horizontal scrolling.

### 1.5 Framework Default & Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 1.6 Typography & Icons (Google Fonts Mandatory)
- Include Google Font `<link>` or `@import` for Geist and Fraunces; bind to `--font-base` and `--font-emphasis`.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component
Style all states via CSS classes:
- **Default:** Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- **Hover:** Visual shift (brightness/shadow) with `cursor: pointer`.
- **Focus:** Distinct focus ring using CSS variables.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback styles driven by `--text-success` or `--text-error`.

Variants: Lime Primary (4px radius, `#a3e635` bg, `#262626` text, 1px ink border, 2px hard offset shadow on hover/active), Dark Block (0px radius, `#303030` bg, white text, 24px padding, 1px white border, hard offset shadow), Outlined Secondary (4px radius, white bg, ink text, 1px ink border, no shadow), Ghost Text Link (transparent, ink text, optional 1px underline on hover).

### 2.2 Card Component
- **Default:** Flexible Flexbox layout, subtle borders and elevation using `--bg-secondary` and CSS variables.
- **Hover:** Elevation/shadow shift or `transform: translateY(-2px)`.
- **Focus-within:** Highlights card borders when a child link/button receives focus.
- **Loading (Skeleton):** Shimmer animation in CSS to prevent layout jumps.
- **Empty State:** Structured fallback with Google Icon and clear guidance text.

Cream Stat Card variant: `#fcfff7` bg, 8px radius, 1px `#e5e5e5` border, no shadow, 24-32px padding. Number 48px Geist 600 ink. Description 18px Geist 400 muted. Source attribution 14px Geist 400 muted-gray.

### 2.3 Form & Input
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, dedicated error feedback container.

### 2.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (animated via CSS transitions).
- UX: Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via `Esc` or overlay clicks.

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** Fluid sizing and responsive breakpoints without horizontal overflow.
- **Smooth Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- **Accessibility (a11y):** Sufficient contrast in both Light and Dark modes. Never rely solely on color. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- **Mandatory Visual Feedback:** Every click, hover, or submission triggers a visible state change.
- **Destructive Actions:** `.btn-danger` visually distinct in both themes.

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- **Naming Convention:** Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- **No Unrequested Placeholders:** Prohibit lorem-ipsum-only submissions where real copy/labels are supplied; placeholders only where content genuinely unspecified.

## 5. EDIT MODE
Not applicable — this is a from-scratch build.

## 6. LANDING PAGE SPECIFIC REQUIREMENTS

- Invent a fictional brand name, product, and copy. Never use the real brand name "Brainfish", its logo, trademarks, or product names anywhere in the page.
- Sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
- Hero: split layout — large 56px Geist 600 headline (ink) with one or two Fraunces italic emphasis words, 18px Geist 400 subhead (muted), row with Lime Primary CTA + Outlined Secondary button. Right half: floating product UI card (chat/thread interface) with 1px ink border, 8px radius. Soft lime radial glow anchored upper-right. Topographic contour-line illustration as continuous background watermark across sections.
- Features: 3 cards in a grid, cream surface, 8px radius, 1px rule border, no shadow, 24px padding. Each with Google Material Icon, heading, description.
- How It Works: 3 steps with numbered markers, flex row (stacks on mobile).
- Testimonials: full-width cream band, large 36-48px Geist 600 quote with Fraunces italic emphasis, right column with 48px circular portrait, name (16px Geist 500), role (14px Geist 400 muted-gray). No card container.
- Pricing: 3 tiers as cards. Middle tier highlighted with lime accent border or dark block treatment. Each with price, feature list, CTA button.
- FAQ: accordion-style, keyboard accessible, `aria-expanded` toggling, smooth CSS transitions.
- Final CTA: full-width band with headline and Lime Primary button.
- Footer: secondary links in columns, muted-gray fine print, cream or white surface.
- Top nav: 67px height, white bg, logo (fictional wordmark + small fish icon in ink) left, four nav links centered (Geist 16px 500 ink), "Sign in" ghost link + Lime CTA right. No shadow, no bottom border.
- Customer logo strip below hero: "Trusted by" label (14px Geist 400 muted-gray) + 3-5 monochrome logos at 60% opacity.
- Status pill badge: mint-wash bg, mint-edge border, pill radius, mint dot + "All systems operational" text (14px Geist 500 ink). Only chromatic pair for live status.
- Pill tags: transparent bg, ink text, pill radius, 1px ink border, 12-14px Geist 500 uppercase 0.08em tracking for labels like "ROLE: ..." or "PLAN: ...".
- Type scale: caption 14px/1.14, body-sm 16px/1.25, body 18px/1.55, subheading 20px/1.5, heading-sm 28px/1.14/-0.56px, heading 36px/1.14/-0.18px, heading-lg 48px/1.08/-0.96px, display 56px/1.16/-0.28px.
- Letter spacing: display -0.28px, heading-lg -0.96px, heading -0.18px, heading-sm -0.56px; body normal.
- Geist weights 400/500/600; Fraunces weights 500/600 italic only for emphasis words inside Geist headlines. Never Fraunces for body, buttons, or full headlines. One italic word per headline.
- Shadows: only 2px solid offset in ink — never blur-based drop shadows. No shadow on cards (1px rule border on cream). Hard offset shadow on interactive elements on hover/active.
- Button radii: 4px (small inline) or 0px (large block). Pills reserved for tags and status indicators only.
- No second chromatic accent beyond lime and mint. No gradients except soft lime radial halo in hero. No uppercase tracking on body/headings — reserve for tiny labels/badges.
- Topographic contour illustration as continuous background watermark across entire sections, not a single hero image.
- Page max-width 1200px centered container, generous horizontal padding. Section gap 80px. Card padding 24px. Element gap 8px.
- All user-facing copy in English.

Output only the finished prompt. No preamble, no closing commentary. Mirror the structure above with numbered headers and bolded sub-rules.
