**Role:** You are an Expert Frontend Engineer. Build a complete, production-ready landing page following the design system and specifications below. Do NOT use the real brand name "Adaptive ML" or any of its trademarks, logos, or product names — invent a fictional brand name, product, and copy throughout.

**Objective:** Deliver a responsive, accessible landing page with the following sections: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, and Footer with secondary links. Theme: light editorial monochrome ("Adaptive ML" style). Stack: separate `index.html`, `style.css`, `script.js`. Use Tailwind CSS via CDN with custom CSS variables mapped through `@layer`/`@apply`. Google Fonts only (no inline SVGs; use Material Symbols for icons).

---

## 1. STRICT ARCHITECTURE RULES

**1.1 CSS-First & Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML. Target via classes/IDs only. Keep HTML semantic and styling-agnostic.

**1.2 CSS Variables & Theme Tokens**
Define in `:root` (light) and `.dark` / `@media (prefers-color-scheme: dark)` (dark). Required tokens:
- Colors: `--primary` (#272421 Ink), `--secondary` (#edebe8 Paper Warm), `--bg-primary` (#ffffff), `--bg-secondary` (#edebe8), `--bg-tertiary` (#e3e3e2), `--text-primary` (#272421), `--text-secondary` (#7d7c7a), `--text-success` (#7d7c7a neutral), `--text-error` (#7d7c7a neutral), `--border-default` (#edebe8), `--border-error` (#7d7c7a), `--border-success` (#7d7c7a), `--color-charcoal` (#333333), `--color-mist` (#eeeeed).
- Contrast pairing: every light bg pairs with dark text and vice versa in both themes. Light mode bg must not be pure white for surfaces; use #fefefe where near-white needed. Canvas is #ffffff (exception: page canvas).
- Radius: `--radius-sm` (9px), `--radius-md` (9px), `--radius-lg` (9px). Pills/tags use 9999px via utility class.
- Shadows: `--shadow-sm` (none), `--shadow-md` (0px 4px 12px rgba(39,36,33,0.1)).
- Spacing: `--spacing-gap` (8px), `--spacing-section` (96px). Use 4px base scale tokens.
- Transitions: `--transition-fast` (150ms), `--transition-normal` (250ms), `--ease-standard` (cubic-bezier(0.4,0,0.2,1)).
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode**
- Provide dark tokens under `.dark` and `@media (prefers-color-scheme: dark)`. Dark mode inverts surfaces: bg-primary → #272421, text-primary → #ffffff, borders → #3a3734, etc. Maintain contrast pairing.
- Persist choice via `localStorage`, fallback to `prefers-color-scheme`. Visible toggle with `aria-pressed`/`aria-label`.

**1.4 Flexbox & Mobile-First**
- All layouts use flexbox. Default `align-items: center` unless justified. Mobile-responsive, no horizontal scroll. Rows → columns on small viewports.

**1.5 Tailwind Integration**
- Use Tailwind utilities mapping to CSS variables / generic classes (`.btn`, `.card`, `.input-group`). No inline styles.

**1.6 Typography & Icons**
- Google Fonts: Egyptienne F (substitute Source Serif Pro) for display; Inter (substitute for Diatype) for UI/body; JetBrains Mono (substitute for Diatype Mono) for mono labels. Bind to `--font-serif`, `--font-sans`, `--font-mono`.
- Icons: Google Material Symbols only. No inline SVGs.

---

## 2. COMPONENT SPECIFICATIONS

**Buttons (Filled Dark / Outlined Ghost)**
- Default: flex, align-items center, justify-content center, gap 0.5rem; min 44x44px touch target.
- Hover: brightness/shadow shift, cursor pointer.
- Focus: distinct focus ring via CSS vars.
- Active: transform scale(0.97).
- Loading: disabled, spinner (CSS or animated Material Icon), no dimension distortion.
- Disabled: opacity 0.5, greyscale, cursor not-allowed.
- Success/Error: temporary styles via `--text-success`/`--text-error` (neutral Stone + icon in this theme).
- Filled Dark: bg #272421, text #ffffff, 13px mono uppercase, 0.090em tracking, 500 weight, 9px radius, 10px 24px padding, no border. Optional trailing arrow icon.
- Outlined Ghost: transparent bg, 1px border #edebe8, Ink text, same typography/padding/radius.

**Cards (Use Case / Feature)**
- Default: flex layout, subtle borders, elevation via `--bg-secondary` + vars.
- Hover: elevation/shadow shift or translateY(-2px).
- Focus-within: highlight border.
- Loading (Skeleton): shimmer animation in CSS, no layout jump.
- Empty State: Google Icon + guidance text.
- Use Case Card: 9px radius, full-bleed gradient image, white label overlay bottom-left 16-24px inset, 15px sans 500. No border/shadow. 3-col grid, gap 12-16px.
- Platform Feature Card: bg #edebe8, 9px radius, shadow `--shadow-md`, 24-32px padding. 2-col internal: left 160x160 geometric icon in Ink; right: 11px mono uppercase step label (Stone), 24-32px serif heading, 15px body paragraph. 2-col grid.

**Forms/Inputs**
- States: Empty, Focused (outline ring), Filled, Valid, Invalid (error border/text/icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, error feedback.

**Modal/Popup**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container, backdrop overlay, Material Icon close button, focus trapping, close via Esc/overlay.

**Workflow Tab Pill**
- Stadium 9999px radius. Active: Ink bg, white text. Inactive: transparent, Ink text, 1px Ink border. 13px mono uppercase, 0.090em tracking, 10px 20px padding. 4-8px gap.

**Step Number Label**
- 11px mono, 0.090em tracking, uppercase, Stone. Pattern "001 ADAPT". Above heading.

**Case Study Tag**
- Paper Warm bg, Ink text, 9999px radius, 11px mono uppercase, 0.090em tracking, 6px 12px padding. Paired with customer logo above.

**Customer Logo Strip**
- Single row, grayscale Stone, generous whitespace, optional Case Study pill beneath logo. No borders/backgrounds.

**Hero Section**
- White canvas, centered within 1200px. Headline 77-94px serif, weight 400, -0.030em tracking, Ink, line-height 0.9-1.0, max 3 lines. Sub-paragraph 15-18px sans 400, Stone. Dark filled button beside/below. 80-120px top padding.

**Footer Logo Mark**
- Three-dot cluster icon + "Adaptive"-style wordmark in sans 500 Ink, raised "ML" superscript in 11px mono 0.090em tracking.

---

## 3. CORE UX & MICRO-INTERACTIONS (GLOBAL)
- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth CSS transitions on all state changes, respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely on color alone; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes (neutral Stone + icon, no red).

## 4. DELIVERABLES
- Files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point.
- Naming: one consistent convention (BEM) across all.
- No lorem-ipsum-only where real copy supplied; placeholders only where unspecified.
- Invent fictional brand name/product/copy. Never use "Adaptive ML".

## 5. CONTENT SECTIONS TO BUILD
1. **Hero** — centered serif headline (max 3 lines), Stone sub-paragraph, filled dark CTA with arrow.
2. **Features** — 3 use-case cards in 3-col grid with gradient placeholders (CSS gradients) + white labels.
3. **How It Works** — 3 platform feature cards in 2-col grid (or 3-col responsive) with step labels, serif headings, body text.
4. **Testimonials** — customer logo strip + quotes (Stone text, serif attribution) in cards.
5. **Pricing** — 3 tiers using card surfaces, filled dark CTA on recommended tier, ghost on others.
6. **FAQ** — accordion with Material Icons, keyboard operable, aria-expanded.
7. **Final CTA** — centered serif headline + filled dark button.
8. **Footer** — logo mark, secondary links (mono uppercase), social icons (Material Symbols), copyright.

## 6. COLOR DISCIPLINE
Zero chromatic tokens. All UI color via warm neutrals. Gradient artwork on use-case cards is content (CSS gradients as placeholders). Status indicators use Stone + iconography (check/x/dot), never color.

## 7. TYPOGRAPHY SCALE
Use provided scale: caption 11px, body 15px, subheading 18px, heading-sm 24px, heading 32px, heading-lg 48px, display 77px, display-xl 94px. Serif only for display/hero/section headings. Mono for labels/nav/buttons. Sans for body/UI.

## 8. LAYOUT
Centered max-width 1200px, 24px gutters. Section gap 96px. Card padding 24px. Element gap 8px. Seamless white-to-white section transitions; depth via Paper Warm surfaces + rare 12px shadow.

Generate the complete files now. Ensure dark mode toggle persists and all component states are implemented. Use placeholder CSS gradients for use-case card artwork.
