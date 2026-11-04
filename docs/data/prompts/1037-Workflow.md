# Coding AI Prompt — Build a "Workflow" Editorial Manuscript Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a **fictional** brand/product (invent a fictional name, product, and copy — never use the real "Workflow" brand name, logo, trademarks, or product names). Theme: **light**, editorial-manuscript aesthetic — white paper canvas, whisper-weight serif headlines, near-monochrome palette with a single dusty-sage accent. Deliver separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.

## 2. Strict Architecture Rules

**2.1 CSS-First & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. Forbid `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class/ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS only.

**2.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Map the Workflow palette onto these plus theme-specific tokens: `--color-ink-black: #1a1a1a`, `--color-paper-white: #ffffff`, `--color-graphite: #6a6a6a`, `--color-warm-charcoal: #4d3f32`, `--color-fog: #f6f6f6`, `--color-linen: #ececec`, `--color-hairline: #e3e3e3`, `--color-pebble: #8d8d8d`, `--color-sage: #547e69`, `--color-mint-wash: #f1fcf6`.
- Contrast pairing: any light background token pairs with a dark text token; any dark background pairs with a light text token — enforce for every theme.
- Light mode background must not be pure white; use `#fefefe` where a white/near-white is needed (page canvas uses `#ffffff` per spec, but prefer `#fefefe` for near-white surfaces).
- Border radius & shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.
- Spacing & transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

**2.3 Mandatory Dark Mode**
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit; provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

**2.4 Flexbox Layout & Mobile-First**
- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless an explicitly justified exception.
- Mobile-responsive out of the box (rows → columns on small viewports). Prevent horizontal scrolling.

**2.5 Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`). All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**2.6 Typography & Icons (Google Fonts Mandatory)**
- Use Google Fonts for text and icons. Include `<link>`/`@import` for Crimson Pro (weight 300), Inter (400, 500), and Georgia (400, system fallback allowed). Bind to `--font-base`/`--font-crimson-pro`/`--font-inter`/`--font-georgia`.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 3. Theme Tokens (Workflow Editorial Manuscript)

**Colors:** Ink Black `#1a1a1a` (primary text, icon strokes, borders, nav links); Paper White `#ffffff` (canvas, card surfaces, button text on dark fills); Graphite `#6a6a6a` (secondary text, helper copy, muted borders); Warm Charcoal `#4d3f32` (warm-toned text/borders); Fog `#f6f6f6` (subtle section backgrounds, button hover fills, nav border, badge surfaces); Linen `#ececec` (card tint, secondary panels); Hairline `#e3e3e3` (dividers/soft borders); Pebble `#8d8d8d` (tertiary icon strokes); Sage `#547e69` (green outline accent for tags, dividers, focused edges); Mint Wash `#f1fcf6` (primary page canvas / white card surfaces).

**Typography:** Crimson Pro 300 for headlines/section titles (26px, 32px, line-height 1.00). Inter 400 for body/UI; Inter 500 reserved for button labels and active nav emphasis. Georgia 400 (13px) only for inline editorial body in article-preview blocks. Type scale: caption 11px/1.4, body-lg 16px/1.5, heading-sm 26px/1, heading 32px/1.

**Spacing & Shapes:** base unit 4px; comfortable density. Spacing scale 4,8,12,16,20,24,32,40,44,48,56,72,80,100,104,164. Border radius: cards 12px, pills 9999px, badges 4px, images 12px, buttons 8px. Shadows: sm `rgba(0,0,0,0.06) 0px 2px 6px 0px`; subtle stacked `rgba(0,0,0,0.03)` layers. Layout: page max-width 1080px, section gap 80px, card padding 24px, element gap 16px.

## 4. Component Specifications

**Buttons:** Default flex (`display:flex; align-items:center; justify-content:center; gap:0.5rem`), min touch target 44x44px. Hover: brightness/shadow shift, `cursor:pointer`. Focus: distinct focus ring via CSS vars. Active: `transform:scale(0.97)`. Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions. Disabled: `opacity:0.5`, greyscale, `cursor:not-allowed`. Success/Error: temporary feedback via `--text-success`/`--text-error`. Primary CTA is a ghost text button (Ink Black Inter 500, no fill, no border, arrow glyph). Secondary is an outlined button (white fill, 1px Ink Black border, 8px radius). Approve action is an outlined Sage pill (9999px radius). No filled colored CTAs.

**Cards (Feature):** White surface, no border, subtle multi-layer shadow (rgba 0.03 stack), 12px radius, 24px padding. Title Crimson Pro 300 26px Ink Black; body Inter 400 15px Graphite. May contain nested preview panel. Include hover elevation (`translateY(-2px)`), focus-within border highlight, skeleton shimmer loading state, empty state with Google Icon + guidance text.

**Badges:** Pill Badge — Fog bg, Graphite text 12–13px Inter 400, 4px radius, 4px 8px padding. Sage Status Pill — white fill, Sage 1px border, Sage text 13px Inter 500, 9999px radius.

**Tabs:** No background. Inter 400 14px. Active: Ink Black text + Sage 2px underline, 16px h / 8px v padding. Inactive: Graphite text, no underline. 24px gap between tabs.

**Nav Bar:** White bg, 1px Fog bottom border. Wordmark Inter 500 16px Ink Black. Links Inter 400 14px Ink Black, 16px gap. Flat horizontal list, no dropdowns.

**Product Preview Panel:** White surface, 8px radius, 1px Hairline border, optional soft drop shadow. Internal browser-chrome bar with traffic-light dots and tab labels Inter 12px. Content area shows product UI at smaller scale.

**Trust Logo Grid:** Centered section title Inter 400 14px Graphite, then 5-column grid of monochrome brand wordmarks in Warm Charcoal/Graphite, equal sizing/spacing.

**Comment Thread Panel:** White fill, 1px Hairline left/full border, 8px radius, 16px padding. Circular 24px avatar, Inter 400 13–14px name/timestamp, Inter 400 14px body. Reaction/reply row with Sage icon tints.

**Walkthrough Video Card:** White circular 48px avatar thumbnail, 1px Hairline border, centered on Fog panel. Duration label Inter 500 12px Ink Black on white pill badge 4px radius. Sits inside Feature Card.

**Share/Approve Action Row:** Inline group — 'Share' ghost Inter 500 14px Ink Black, then outlined Sage pill 'Approve' 9999px radius, 6px 12px padding. No filled background buttons.

**Forms/Inputs:** States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: flex container wrapping label, input, dedicated error feedback container. Use `aria-live` for errors.

**Modal/Popup:** States: Opening, Open, Loading, Success/Error, Closing (all CSS transitions). Centered flex container (`align-items:center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 5. Core UX & Micro-Interactions
- Responsive by default; fluid sizing; no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 6. Page Sections to Build
Hero (centered stack: serif headline → supporting paragraph → ghost CTA → tab bar → product preview panel), Features (3 cards in 2×2-ish grid with 80px gaps), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. Center content in 1080px max-width column, 80px section gaps. Full-width white sections. No sidebars or asymmetric compositions.

## 7. Do's and Don'ts (enforce)
- Set every headline in Crimson Pro 300 — never bold serif or sans heading.
- Inter 400 for body/UI; Inter 500 only for button labels and active nav emphasis.
- Surfaces: Paper White, Fog, Linen; Mint Wash only for semantically positive status.
- Sage only for active underlines, approval pills, functional icon accents — never as fill, never on CTA background.
- Radii: 4px badges, 8px buttons, 12px cards/images, 9999px pills — no mixing.
- 1px hairline borders (#e3e3e3/#f6f6f6) as primary separation; shadow only for product preview card.
- Center content in 1080px column with 80px section gaps; whitespace carries layout.
- No filled colored CTA; no new hues; no bold/semibold headlines; no large drop shadows or colored glows (elevation under rgba 0.06); no 0px or 16px+ card radius; no color for decorative shapes/washes; Georgia only for editorial article-preview blocks.

## 8. Deliverables
Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference. BEM naming convention throughout. No lorem-ipsum-only submissions where real copy/labels are implied — invent fictional but realistic copy for all sections. All user-facing copy must be in English. Do not use the real brand name, logo, trademarks, or product names anywhere. Include dark mode toggle with persistence. Ensure all component states (button loading/disabled/success/error, card skeleton/empty, input validation, modal open/close) are implemented via CSS classes. Respect `prefers-reduced-motion`. Provide semantic HTML5 and full keyboard accessibility. Output only the three files' contents as the deliverable.
