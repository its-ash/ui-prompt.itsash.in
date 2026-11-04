# Coding AI Prompt — Eddie Theme Landing Page

## 1. Theme & Architecture Rules

**Theme:** "Eddie" — Pastel sticker pack on warm cream paper. Light mode only. A soft-canvas product world: warm off-white stage (#f7f4f2) where generous rounded cards float on lavender-tinted shadows. Structural skeleton is near-black on cream; content cards burst into pastel lavender, vivid lime, and sky blue, each section feeling like a distinct room.

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- All design properties, layout rules, and states targeted via class/ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Store all visual tokens in `:root`:

Colors:
- `--color-graphite: #000000` (primary text, filled action buttons, dominant borders)
- `--color-cream: #f7f4f2` (page canvas)
- `--color-paper-white: #ffffff` (card surfaces, inverted text on black)
- `--color-lavender-mist: #eeeafa` (shadow tint / near-white lavender surface)
- `--color-ash: #cdcbd0` (hairline borders, link underlines, light dividers)
- `--color-slate: #4d4c51` (dark borders, separators for elevated surfaces)
- `--color-fog: #767481` (secondary body text, subdued borders)
- `--color-mist: #9a98a1` (nav inactive text, lightest nav border)
- `--color-wisteria: #d8d1ff` (primary lavender card surfaces, badge backgrounds, brand accent)
- `--color-periwinkle: #b7b2ff` (mid-violet badge fills, icon highlights)
- `--color-lime-voltage: #d2e534` (high-energy accent card, highlight badge)
- `--color-sky-signal: #89cdf3` (info badge background, location-tag accent)

Contrast pairing: light backgrounds pair with dark text (`--color-graphite`); dark backgrounds (black buttons) pair with light text (`--color-paper-white`).

Light mode background must be `#f7f4f2` (cream), never pure white. Where white/near-white is needed, use `#fefefe`-equivalent `#ffffff` only for card surfaces.

Radius & shadows:
- `--radius-sm: 2px`, `--radius-nav: 15px`, `--radius-btn: 25px`, `--radius-badge: 30px`, `--radius-card: 40px`
- `--shadow-elevated: rgba(198, 185, 237, 0.3) 5px 5px 20px 0px` (the only shadow in the system)

Spacing & transitions:
- `--spacing-5: 5px`, `--spacing-7: 7px`, `--spacing-8: 8px`, `--spacing-10: 10px`, `--spacing-12: 12px`, `--spacing-13: 13px`, `--spacing-15: 15px`, `--spacing-20: 20px`, `--spacing-24: 24px`, `--spacing-25: 25px`, `--spacing-30: 30px`, `--spacing-40: 40px`, `--spacing-50: 50px`, `--spacing-60: 60px`, `--spacing-100: 100px`
- `--transition-fast`, `--transition-normal`, `--ease-standard`

Elevation/stacking:
- `--z-dropdown`, `--z-modal`, `--z-toast`

Typography:
- `--font-base: 'Inter', sans-serif` (Google Fonts substitute for Founders Grotesk; weights 400, 600, 700)
- Type scale tokens: `--text-caption: 14px`, `--text-body-sm: 16px`, `--text-body: 18px`, `--text-subheading: 22px`, `--text-heading-sm: 26px`, `--text-heading: 30px`, `--text-heading-lg: 66px`, `--text-display: 119px`
- Line heights: caption 1.30, body 1.30, subheading 1.10, heading 1.10, display 0.80. Letter spacing normal at all sizes.

**1.3 Mandatory Dark Mode Support**
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- User theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layouts with Flexbox. Every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box (rows to columns on small viewports). No horizontal scrolling.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`). Utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Include Google Font `<link>`/`@import` for Inter (weights 400, 600, 700) bound to `--font-base`.
- Use Google Material Symbols/Icons. No raw inline SVGs or local icon files.

## 2. Component Design Specifications

**2.1 Button Component**
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`. Min touch target 44x44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, CSS spinner or animated Google Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error` (map to brand tokens).
- Filled black variant: `#000000` bg, white text, 25px radius, 10px/20px padding, 16px weight 600, lavender shadow.
- Ghost variant: white bg, 1px `#cdcbd0` (or `#4d4c51`) border, 25px radius, matching padding.

**2.2 Card Component**
- Default: flex layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight card borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS.
- Empty State: Google Icon + guidance text.

**2.3 Form & Input**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container.

**2.4 Modal / Popup**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. Core UX & Micro-Interaction Rules
- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark. Never rely solely on color. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 4. Deliverables & Output Format
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM or fixed utility set) across the entire deliverable — never mix.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders only where content genuinely unspecified.

## 5. Landing Page Sections (Required)
Build a complete landing page with these sections in order:
1. Hero — centered display headline (119px weight 700, line-height 0.80, black) with an inline mascot badge (lavender #d8d1ff rounded square, 30px radius, ~48px, black robot face icon) replacing a word. Below: row of three 30px-radius tag pills (5px/10px padding): lavender with building icon, sky blue with pin icon, lime with lightning icon. Labels 16px weight 400 black.
2. Features — 3 cards. Mix of lavender (#d8d1ff) and white surfaces, 40px radius, 20-40px padding. Each: 26-30px heading (weight 600), 16-18px body (weight 400), black text. Lavender shadow on elevated cards.
3. How It Works — 3 steps. Numbered steps with 30px-radius badges, headings 22-26px, body 16-18px. Cream or white surface.
4. Testimonials — white cards 30px radius with circular headshot (~48px), name 16-18px weight 600, role 14-16px weight 400 slate. Sit inside a lime accent card or on cream.
5. Pricing — 3 tiers. Cards 40px radius. Middle tier highlighted with lime (#d2e534) fill or lavender. Include price, feature list, CTA button.
6. FAQ — accordion-style. Questions 18-22px weight 600, answers 16-18px weight 400. Hairline dividers (#cdcbd0) between items.
7. Final CTA — lime (#d2e534) card 40px radius, 40px padding, heading 30-66px weight 700, filled black action button inside.
8. Footer — secondary links, cream or white surface, 16px weight 400 text, hairline top border.

## 6. Additional Style Rules (Eddie)
- Radius hierarchy strictly: 2px (small inline), 15px (nav/links), 25px (buttons), 30px (badges/inline cards), 40px (major feature cards). No intermediate values.
- Single shadow only: `rgba(198,185,237,0.3) 5px 5px 20px 0px` on nav, buttons, cards.
- No gradients. Flat fills only.
- Accent colors (#d8d1ff, #d2e534, #89cdf3) are surface fills only; all text on them must be black.
- Body text 16-18px weight 400 black on cream; never gray for primary copy.
- Page max-width 1200px. Section gap 80-100px. Card padding 20-40px. Element gap 10px.
- Floating nav: white pill, 15px radius, 10px/15px padding, lavender shadow. Left: mascot badge (#d8d1ff, 30px radius) + 'Accueil' 16px weight 600. Right: ghost button + filled black action button, 10px gap.
- Hairline divider: 1px solid #cdcbd0, used sparingly.
- Inline links: black text, 1px underline, 13px padding, no hover color change.

## 7. Brand & Copy
- Invent a fictional brand name, product, and copy. Never use the real brand name "Eddie", its logo, trademarks, or product names anywhere in the page. All user-facing copy must be in English.

## 8. Imagery & Icons
- Use Google Material Symbols for all icons (building, pin, lightning, robot face approximated via available symbols, close, etc.). No inline SVGs.
- Imagery: 3D product renders presented in isometric perspective on light gray stage with soft ground shadow; flat rounded brand-colored illustrations; one small headshot in name card. Overall: playful, product-forward, pastel, uncluttered.

## 9. Responsive & Accessibility
- Mobile-first. Convert rows to columns on small viewports. No horizontal scroll.
- Sufficient contrast in light and dark. Semantic HTML5. ARIA roles/labels on custom widgets. Logical focus order. Full keyboard operability. `aria-live` regions for dynamic feedback (FAQ, form errors, toasts).
- Respect `prefers-reduced-motion`.

## 10. Deliverable
Output separate `index.html`, `style.css`, `script.js`. Consistent class naming (BEM recommended). No placeholders where real copy is supplied. Include dark mode toggle with localStorage persistence and prefers-color-scheme fallback.
