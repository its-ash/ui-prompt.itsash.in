# Coding AI Prompt — Kindsight-Style Landing Page (Fictional Brand)

You are building a complete landing page for a **fictional brand**. Reuse the Kindsight visual style (cream canvas, olive hero, terracotta CTA, chartreuse decorative accent, Times Now display serif, Founders Grotesk body) but invent a fictional brand name, product, and all copy. Never use the real brand name "Kindsight", its logo, trademarks, or product names anywhere in the page.

## 1. Architecture & File Structure

- Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- All styling lives in `style.css`. Zero inline `style="..."` attributes in HTML. Use class/ID selectors only.
- Use Tailwind CSS via CDN (or clean custom CSS driven by Tailwind `@layer`/`@apply`). All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- Use Google Fonts for text (Playfair Display as Times Now substitute for display; Inter as Founders Grotesk substitute for body/UI) and Google Material Symbols for icons. No raw inline SVGs or local icon files.

## 2. CSS Variables & Theme Tokens

Define all tokens in `:root` and a `.dark` class / `@media (prefers-color-scheme: dark)` block:

- Colors: `--primary` (terracotta `#de7653`), `--secondary` (chartreuse `#e1f079`), `--bg-primary` (`#faf5f1` cream), `--bg-secondary` (`#fefffa` linen), `--bg-tertiary` (`#e5e1d6` warm sand), `--bg-dark` (`#3d4128` olive hero), `--text-primary` (`#0e0f0a` ink), `--text-secondary` (`#0a0a0a` midnight), `--text-on-dark` (`#faf5f1`), `--text-success`, `--text-error`, `--border-default` (`#0e0f0a` at 10–15% opacity), `--border-error`, `--border-success`.
- Contrast pairing: light backgrounds pair with dark text; dark olive hero pairs with light text. Enforce for every theme.
- Light mode background must not be pure white; use `#faf5f1`. Where near-white is needed use `#fefffa`, never `#ffffff` for surfaces (pure white only for button text on terracotta).
- Radius: `--radius-sm` (3px), `--radius-md` (10px), `--radius-lg` (24px), `--radius-pill` (50px), `--radius-badge` (18px).
- Shadows: `--shadow-sm` (`0 1px 2px rgba(14,15,10,0.04)`), `--shadow-md` (none beyond sm — depth comes from tonal contrast).
- Spacing: `--spacing-gap` (24px), plus the full 4px scale (`--spacing-4` … `--spacing-96`).
- Transitions: `--transition-fast` (150ms), `--transition-normal` (250ms), `--ease-standard` (cubic-bezier(0.4,0,0.2,1)).
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: `--font-display` (Playfair Display), `--font-base` (Inter).

## 3. Mandatory Dark Mode

- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background and text variables switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label`.

## 4. Flexbox & Mobile-First

- Build layouts with Flexbox (`display: flex`). Every flex container must default to `align-items: center` unless explicitly justified otherwise.
- Mobile-responsive out of the box: convert rows to columns on small viewports. Prevent horizontal scrolling.
- Max content width 1200px centered. Section gaps 80–120px. Card padding 40px. Element gaps 12–24px.

## 5. Typography Rules

- Display headlines: Playfair Display weight 200–300, sizes 30–120px, line-height 0.78–1.00, letter-spacing -0.017em to -0.064em. Never above weight 400.
- Body/UI: Inter weight 400 at 16px default, line-height 1.40, letter-spacing -0.008em. Weight 500 for UI emphasis.
- Italic emphasis system: exactly one word per display headline is italicized and underlined with a hand-drawn chartreuse stroke. The word is the conceptual climax. On dark olive hero, chartreuse is used for both text color and underline. On cream sections, the italic word stays ink-black with chartreuse underline. Never use chartreuse as body text color.
- Never center-align body paragraphs. Only display headlines and logo trust bar may be centered.

## 6. Component Specifications

### Buttons
- Primary filled CTA: terracotta `#de7653` background, white text, 10px radius, Inter 400 16px, padding 14px 24px, no border. Min touch target 44x44px.
- Outline ghost (hero secondary): chartreuse `#e1f079` background, ink text, 10px radius, same padding.
- Outlined coral pill: 2px solid `#e7573d` border, `#e7573d` text, transparent fill, 50px pill radius, Inter 400 14–16px, padding 12px 24px.
- Login outlined: 1px solid ink border, transparent fill, ink text, 10px radius, padding 8px 20px.
- All states: hover (brightness/shadow + cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (disabled, CSS spinner, no dimension distortion), disabled (opacity 0.5, greyscale, not-allowed), success/error (temp feedback via success/error tokens).

### Cards
- Feature cards: no background fill on cream canvas, no visible border, 0 radius on card; inner screenshot 24px radius with faint shadow. Flex layout. Hover: subtle transform. Focus-within: highlight border. Skeleton loading shimmer. Empty state with Google Icon + guidance text.

### Form Inputs
- 1px solid deep olive `#24280f` border, transparent or linen fill, 10px radius, padding 12px 16px, Inter 16px deep-olive text. Placeholder at 40% opacity. Focus: 2px chartreuse outline/border shift. States: empty, focused, filled, valid, invalid, disabled, read-only. Flex container wrapping label, input, error feedback.

### Modal
- Opening/open/loading/success-error/closing animated via CSS transitions. Centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via Esc or overlay click.

### Notification Badge
- Linen `#fefffa` background, 18px radius, subtle border, padding 16px 20px. Label caps 10px weight 500 at 60% opacity. Name 16px weight 500. Detail 14px. Coral dot 8px for alert state.

### Score Circle
- 120px diameter, 6px stroke. Track warm sand `#e5e1d6`. Fill chartreuse `#e1f079` arc. Center number Times Now 300 40px ink. Label below Inter 14px.

## 7. Page Sections (in order)

1. **Promotional Banner (top strip):** full-width, cream bg, centered single-line text Inter 14px ink, chartreuse filled pill button at right. ~48px height, above nav.
2. **Navigation:** cream bg, hairline bottom border, logo left, links center (Products, Who We Serve, Pricing, Resources, Company), Login outlined + Get a Demo filled right. No sticky.
3. **Hero:** full-bleed dark olive `#3d4128`. 2-column split: oversized Times Now headline left (40–50% width) with one italic chartreuse-underlined word; layered product mockup right (50–60%) with overlapping linen cards, 24px radius, hairline borders, charts/badges in chartreuse & terracotta, faint shadow. Chartreuse ghost button + terracotta CTA.
4. **Logo Trust Bar:** cream bg, centered, 60px vertical padding. Times Now 300 40px headline "Driving these missions forward" centered. Single row of 5–6 monochrome ink logos, 32px height, evenly spaced.
5. **Features:** cream bg, 80px vertical padding. 3 cards in a row (stack on mobile). Each: image/screenshot left or top with 24px radius, Times Now 50–60px headline, Inter 16–18px body max-width 480px, one italic chartreuse-underlined display word.
6. **How It Works:** 3 steps, warm-sand `#e5e1d6` block. Numbered steps with Google Icon, Times Now subheading, Inter body.
7. **Testimonials:** cream bg. 2–3 quote cards with linen surface, 24px radius, ink text, attribution.
8. **Pricing:** 3 tiers on cream. Cards: linen bg, 24px radius, hairline border. Tier name Times Now, price display, feature list with check icons, CTA button (filled terracotta for recommended, outlined for others).
9. **FAQ:** cream bg. Accordion with hairline borders, Inter questions, expandable answers, Material Symbols expand icon.
10. **Final CTA:** olive hero panel or warm-sand block. Times Now headline with italic chartreuse emphasis, terracotta filled button.
11. **Footer:** cream bg, hairline top border. Logo, secondary links columns, copyright. Inter 14px.

## 8. Core UX Rules

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark. Never rely solely on color. Semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 9. Copy Requirements

All user-facing copy in English. Invent a fictional brand name, product, and realistic copy for every section. No lorem-ipsum-only submissions where real copy is expected; placeholders only where content is genuinely unspecified. No real brand names, logos, trademarks, or product names.

## 10. Deliverables

Separate `index.html`, `style.css`, `script.js`. BEM naming. No inline styles. No inline SVGs. Google Fonts + Material Symbols only. Dark mode toggle with persistence. All component states implemented. Mobile-first responsive.
