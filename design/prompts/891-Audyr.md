# Coding-AI Prompt: Build a Complete Landing Page — "Audyr" Monochrome Editorial Theme

## 1. Project Overview & Theme

Build a complete, responsive landing page for a **fictional SaaS product** (invent a fictional brand name, product name, and all copy — never use "Audyr" or any real trademark). The visual language is a **typeset monograph on cold-pressed paper**: near-monochrome, black ink on white stock, hairline rules, editorial breathing room. No brand color accent, no gradients, no illustrations. Typography carries all hierarchy.

**Theme:** Light. Mandatory dark mode must still be implemented (see §3).

## 2. Strict Architecture Rules

### 2.1 CSS-First & Zero Inline CSS
- All styling lives in `style.css`. **No `style="..."` attributes in HTML.**
- Target via class/ID selectors only. HTML stays semantic and styling-agnostic.

### 2.2 CSS Variables & Theme Tokens
Define all tokens in `:root` and `.dark` / `@media (prefers-color-scheme: dark)`:

**Colors (Light):**
- `--color-ink: #262626` (primary action fill)
- `--color-pure-paper: #ffffff` (card/elevated surfaces)
- `--color-soft-mist: #ededed` (hairline borders, dividers, input outlines)
- `--color-charcoal: #171717` (secondary dark surface, highlighted pricing card)
- `--color-ash: #686868` (secondary body text, nav links)
- `--color-slate: #515151` (tertiary text, icon strokes)
- `--color-muted: #737373` (helper/caption text)
- `--color-fog: #929292` (placeholder, disabled labels, desaturated logos)
- `--color-chalk: #cbcbcb` (shadow residue, ultra-low markers)
- `--color-mint-whisper: #ecfdf5` (accent wash for badges only)
- `--bg-primary: #ffffff` (page canvas — use `#fefefe` where near-white needed)
- `--bg-secondary: #ffffff` (card surfaces)
- `--text-primary: #262626`
- `--text-secondary: #686868`
- `--text-success: #16a34a` (mint-tinted badge text)
- `--text-error: #dc2626`
- `--border-default: #ededed`
- `--border-error: #dc2626`
- `--border-success: #ecfdf5`

**Contrast pairing:** every light bg token pairs with a dark text token; dark bg (`--color-charcoal`) pairs with `#ffffff` text and `#cbcbcb` subtext.

**Shadows:**
- `--shadow-subtle: rgba(0,0,0,0.04) 0px 1px 3px 0px`
- `--shadow-subtle-2: lab(0 0 0 / 0.05) 0px 1px 2px 0px`
- `--shadow-md: rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px`
- `--shadow-xl: lab(0 0 0 / 0.1) 0px 25px 50px -12px`
- `--shadow-button: inset 0 0 0 1px oklab(0.999 0 0 / 0.16), 0 1px 2px oklab(0.269 0 0 / 0.24)`

**Radii:** `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 14px`, `--radius-xl: 18px`, `--radius-pill: 9999px`

**Spacing:** `--spacing-4: 4px` through `--spacing-128: 128px` (4px base unit, full scale 4/8/12/16/20/24/32/36/40/48/56/64/80/96/128).

**Transitions:** `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: cubic-bezier(0.4,0,0.2,1)`

**Elevation/Stacking:** `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`

**Typography:** `--font-base: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`

### 2.3 Mandatory Dark Mode
- Implement dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Invert: page canvas becomes `#171717`-ish dark, text becomes light, borders become `#2a2a2a`, cards become `#1f1f1f`. Maintain contrast pairing.
- Include a visible toggle with `aria-pressed`/`aria-label`, persist via `localStorage`, fallback to `prefers-color-scheme`.

### 2.4 Flexbox & Mobile-First
- All layouts use Flexbox. Default `align-items: center` unless justified exception.
- Mobile-responsive: rows collapse to columns, no horizontal scroll.

### 2.5 Tailwind CSS
- Use Tailwind via CDN or `@layer`/`@apply`. Utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).

### 2.6 Google Fonts & Icons
- Load Inter (weights 400, 500, 600) via Google Fonts `<link>`.
- Use Google Material Symbols for all icons. No inline SVGs or local icon files.
- Apply OpenType features `"cv11", "ss01"` globally. Letter-spacing `-0.025em` on every text element.

## 3. Type Scale (enforce exactly)

| Role | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|------|-------------|----------------|-------|
| caption | 400 | 12px | 1.5 | -0.3px | `--text-caption` |
| body-sm | 400 | 14px | 1.5 | -0.35px | `--text-body-sm` |
| body | 400 | 16px | 1.56 | -0.4px | `--text-body` |
| subheading | 400 | 18px | 1.63 | -0.45px | `--text-subheading` |
| heading-sm | 600 | 20px | 1.5 | -0.5px | `--text-heading-sm` |
| heading | 600 | 24px | 1.4 | -0.6px | `--text-heading` |
| heading-lg | 600 | 30px | 1.38 | -0.75px | `--text-heading-lg` |
| display | 600 | 48px | 1.11 | -1.2px | `--text-display` |

## 4. Component Specifications

### 4.1 Top Navigation Bar
- Full-width, 64px tall, 1px bottom border `#ededed`. Logo left (24px square X-mark via Material Symbol). Center nav links at 14px Inter 500 `#686868`, hover `#262626`. Right: ghost "Sign In" link + dark filled "Get Started" button. No shadow.

### 4.2 Buttons
- **Dark Filled (Primary):** bg `#262626`, text `#ffffff`, 14px Inter 500, padding 10px 20px, radius 4px, inset highlight + micro shadow. Only button with visual weight.
- **Ghost Outline (Secondary):** transparent bg, 1px border `#ededed`, text `#262626`, same padding/radius.
- All states: hover (brightness/shadow shift, cursor pointer), focus (distinct ring), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error feedback.
- Min touch target 44x44px.

### 4.3 Cards
- White surface, 1px border `#ededed`, radius 14px, padding 32px.
- Hover: translateY(-2px) + shadow shift. Focus-within: border highlight. Skeleton loading shimmer. Empty state with icon + text.

### 4.4 Pricing Cards (3 tiers)
- Standard: white surface, border, radius 14px, padding 32px. Tier name 24px Inter 600 `#262626`. Price 36px Inter 600 `#262626` with "/ month" 14px `#686868`. Feature list 14px body, 8px row gap, dark check icons.
- Highlighted (middle tier): dark surface `#171717`, text `#ffffff`, subtext `#cbcbcb`. "Popular Option" pill badge floating above (mint `#ecfdf5` fill, green-tinted text).
- Pill Badge: radius 9999px, padding 4px 12px, 12px Inter 500. Default: `#ededed` fill, `#262626` text. Highlight: `#ecfdf5` fill, green text.

### 4.5 Pricing Toggle
- Segmented control, 40px tall, radius 4px, 1px border `#ededed`. Active: `#262626` fill, `#ffffff` text. Inactive: transparent, `#686868` text. "Save 20%" pill floats above active.

### 4.6 Hero Section
- Centered, max-width 720px, 80–120px vertical padding. Headline 48px Inter 600 `#262626`, tracking -1.2px, line-height 1.11. Subtext 18px Inter 400 `#686868`. Two-button row: filled + ghost. "No credit card required" microcopy 12px below.

### 4.7 Product Mockup Frame
- White surface, 1px border `#ededed`, radius 18px, shadow-xl. Inner UI chrome radius 8px. Floats below hero.

### 4.8 Tab Group
- Horizontal pill cluster, 36px tall, radius 4px, 1px border `#ededed`. Active: `#ededed` fill, `#262626` text. Inactive: transparent, `#686868` text. 4px gaps.

### 4.9 Logo Bar
- Single centered row, competitor wordmarks in `#929292`. 80–100px vertical padding.

### 4.10 Two-Column Feature Section
- Left: headline 30–36px Inter 600 `#262626`. Right: 18px Inter 400 body `#686868`. Gap 80–120px. No card/background.

### 4.11 Feature Checklist Item
- 14px Inter 400 `#262626`, preceded by 16px circular check icon `#262626`. 8px row gap.

### 4.12 Chat Bubble
- 32px circle, `#262626` bg, white speech-bubble icon (Material Symbol). Fixed bottom-right.

### 4.13 Modal/Popup
- Centered flex container, backdrop overlay, Google Icon close button, Esc/overlay close, focus trapping, CSS transition states (opening/open/loading/success/error/closing).

### 4.14 Forms/Inputs
- States: empty, focused (ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Flex container: label + input + error feedback.

## 5. Page Sections (in order)

1. **Top Navigation Bar**
2. **Hero Section** (headline, subtext, two buttons, microcopy)
3. **Product Mockup Frame** (with Tab Group)
4. **Logo Bar** (social proof)
5. **Features** — 3 cards (icon + heading + body)
6. **How It Works** — 3 steps (number + heading + body)
7. **Testimonials** — 2-3 quote cards
8. **Pricing** — 3 tiers with toggle
9. **FAQ** — accordion (expand/collapse)
10. **Final CTA** — headline + button
11. **Footer** — secondary links, copyright

## 6. Global UX Rules

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, never color-only state communication, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions (`.btn-danger`) visually distinct in both themes.
- Section padding 80–160px. Card padding 32px. Element gap 16–20px. Page max-width 1200px.

## 7. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point.
- Consistent class-naming (BEM). No mixed conventions.
- No lorem-ipsum where real copy fits; invent fictional brand/product/copy. Never use "Audyr".
- All user-facing copy in English.

## 8. Do's & Don'ts (enforce)

**Do:** Use `#262626` as only filled button bg. Apply `-0.025em` tracking to every text element. Use `#ededed` for all dividers/borders/outlines at 1px. Radii: 4/8/14/18/9999 only. Mint `#ecfdf5` only on small badges. Shadows limited to documented levels. 80–160px section padding.

**Don't:** No brand color accent. No radii outside 4/8/14/18/9999. No shadows heavier than card shadow. No second typeface. No `#ffffff` text on white surfaces, no `#ededed` body text. No gradients. No colored status indicators on marketing site.

## 9. Copy Locale

All user-facing copy must be in English. Invent a fictional brand name, product, and all marketing copy. Never reference "Audyr", its logo, trademarks, or product names.
