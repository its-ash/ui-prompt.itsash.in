# Idle Finance — Landing Page Build Prompt

## 1. Project Overview & Brand Constraint

Build a complete, responsive landing page using the **Idle Finance visual style** (deep-ocean DeFi terminal aesthetic). The page must include these sections in order: **Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links**.

**Brand constraint:** This style references a real brand. You must invent a **fictional brand name, product name, and all copy**. Never use the real brand name, logo, trademarks, or product names anywhere in the deliverable. All user-facing copy must be in **English**.

## 2. Strict Architecture Rules

**2.1 CSS-First & Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML. Use class/ID selectors only. Keep HTML semantic and agnostic of visual styling.

**2.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`). Required tokens:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Idle Finance palette mapped to tokens: `--bg-primary: #17202e` (Abyss Navy), `--bg-secondary: #202a3e` (Tide Card), `--primary: #6ae4ff` (Spectral Cyan), `--text-primary: #ffffff` (Bone White), `--text-secondary: #cdd0d6` (Fog Gray), `--border-default: #000000` (Carbon Black hairline).
- Gradients: `--color-horizon-glow: radial-gradient(circle, rgb(8, 33, 143) 40%, rgb(41, 138, 203) 100%)`, `--color-yield-gradient: linear-gradient(73.6deg, rgb(52, 237, 179) 2.11%, rgb(0, 209, 255))`.
- Radius: `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 15px`, `--radius-pill: 80px`.
- Spacing: `--spacing-gap: 16px`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text — enforce for every theme.

**2.3 Mandatory Dark Mode**
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or `.dark` class.
- Theme switching must not require HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed` / `aria-label`.

**2.4 Flexbox & Mobile-First**
- Use Flexbox for all layout. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box (rows → columns on small viewports). No horizontal scrolling.

**2.5 Framework**
- Use Tailwind CSS (or clean custom CSS via `@layer` / `@apply`), mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).

**2.6 Typography & Icons**
- Google Fonts mandatory: Open Sans (weights 400, 600, 700) as `--font-base` / primary; Source Sans Pro (400, 500, 600, 700) for tabular micro-data. Bind via `<link>` or `@import`.
- Icons: Google Material Symbols/Icons only. No inline SVGs or local icon files.

## 3. Component Specifications

**3.1 Buttons**
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min 44×44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled interactions, CSS spinner / animated Google Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary styles via `--text-success` / `--text-error`.
- Pill Action (Filled): 80px radius, `#ffffff` fill, `#000000` text, 14px Open Sans 600, 12px 20px padding.
- Ghost Link: transparent fill, 8px radius, 1px `#6ae4ff` border, 14px Spectral Cyan text, arrow glyph follows label.

**3.2 Cards**
- Default: flex layout, subtle borders, elevation via `--bg-secondary` + CSS variables. No shadows.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight card border on child focus.
- Loading (Skeleton): shimmer animation in CSS.
- Empty State: Google Icon + guidance text.
- Yield Card: `#202a3e` bg, 1px `#000000` border, 15px radius, 20–24px padding. Top row: circular protocol icon + 20px Open Sans 600 white name + 12px Fog Gray category. Middle: 36px Open Sans 700 white APY with 12px muted "Up to" above. Bottom: 80px-radius TVL pill (12px Source Sans Pro) + circular chain badge (`#6ae4ff` stroke) + arrow chevron.

**3.3 Forms & Inputs**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

**3.4 Modal / Popup**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

**3.5 Chain Badge**
- 80px radius circle/capsule, `#6ae4ff` stroke, transparent or `#202a3e` fill, 12px Spectral Cyan label.

**3.6 Tab Pill (Ecosystem Filter)**
- Active: `#ffffff` fill, `#000000` text, 80px radius, 12px 20px padding, Open Sans 600.
- Inactive: transparent, `#cdd0d6` text, 14px Open Sans 400. Exactly one active at a time.

**3.7 Protocol Logo Tile**
- `#202a3e` bg, 15px radius, centered brand logo (~24px height), 40–60px vertical padding. 3-up grid wrapping to 2-up. No text labels.

**3.8 Stat Block**
- Centered, no wrapper. Number 56–100px Open Sans 700 white; label 14px Fog Gray beneath.

**3.9 Top Announcement Bar**
- Full-width strip, slightly lighter than canvas bg, 14px Open Sans 400 centered `#cdd0d6` text. Inline links Spectral Cyan with underline on hover.

**3.10 Navigation Header**
- Transparent over canvas, left logo (white mark + wordmark), centered 14px Open Sans 400 white nav links, right-aligned pill action button. 64–80px height. No border.

**3.11 Hero Headline**
- 100px Open Sans 700 white, line-height ~1.2, letter-spacing -0.0360em. Centered above yield card row. Single word split in Spectral Cyan.

**3.12 Trust Strip**
- Bottom band, `#cdd0d6` 14px labels above partner logo row. Logos white at 40–60% opacity. TVL/yield figures right-aligned Open Sans 600 white.

## 4. Core UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 5. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM or fixed utility set) throughout — never mix.
- No lorem-ipsum-only where real copy is supplied; placeholders only where content genuinely unspecified.

## 6. Section-Specific Layout Notes

- **Hero:** radial blue gradient bloom from upper-left over `#17202e` canvas; centered 100px headline; 3-column yield card row beneath as data dashboard.
- **Features:** 3 cards (Yield Card style) in a row.
- **How It Works:** 3 steps with icons + headings + descriptions.
- **Testimonials:** quote cards with attribution.
- **Pricing:** 3 tiers with feature lists and CTA buttons.
- **FAQ:** accordion-style Q&A.
- **Final CTA:** centered headline + pill button pair.
- **Footer:** secondary links, trust strip, logo.
- Section gaps: 80px vertical. Max-width 1200px centered. Card padding 24px. Element gap 16px.

## 7. Do's and Don'ts (Idle Finance)

**Do:** pill (80px) radius on every button/tab/chain badge; cards `#202a3e` with 1px `#000000` hairline border, no shadows; reserve Spectral Cyan for hero highlight words, outlined action borders, functional icons; headlines 56–100px Open Sans 700 with -0.0360em tracking; radial blue gradient only as background bloom behind hero; pair every filled button with a ghost Spectral Cyan link; 80px vertical section gaps.

**Don't:** no new accent hues; no rounded shadows/glows/blur on cards; don't mix Open Sans and Source Sans Pro in the same line; no square/4px radii on primary buttons; no dark text on dark canvas; don't apply cyan to large filled areas; no light theme surfaces or white card backgrounds.
