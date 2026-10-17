# Coding-AI Prompt: (dot)connect-Style Landing Page

## 1. Project Overview
Build a complete, responsive, single-page landing site in separate `index.html`, `style.css`, and `script.js` files. Reuse the visual language of the supplied "(dot)connect" style reference — Swiss-engineering canvas, warm off-white stage, near-black ink, single ember-orange accent, extreme display typography, soft radii, border-driven elevation — but invent a fictional brand name, product, and all copy. Never use the real brand name "(dot)connect", its logo, trademarks, or product names anywhere in the page.

## 2. Mandatory Architecture Rules
- **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes. Target via class/ID selectors only. Keep HTML semantic and style-agnostic.
- **CSS Variables:** Define all tokens in `:root` and theme classes. Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.
- **Contrast Pairing:** Every light background token pairs with a dark text token and vice versa, in both themes.
- **Light Mode Background:** Use `#fcfbf8` (not pure white). Use `#fefefe` only where a near-white is genuinely needed.
- **Mandatory Dark Mode:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and/or `.dark`. Switch variables seamlessly. Persist choice via `localStorage`, falling back to `prefers-color-scheme`; include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** Use Flexbox; default `align-items: center` unless justified. Responsive rows→columns on small viewports; no horizontal scroll.
- **Framework:** Tailwind CSS or custom CSS driven by Tailwind `@layer`/`@apply`; utilities map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts only. Text via Google Font link/import bound to `--font-base`. Icons via Google Material Symbols/Icons. No inline SVGs or local icon files.

## 3. Theme Tokens (dot)connect Style
Colors: `--color-bone-canvas: #fcfbf8` (bg), `--color-charcoal-ink: #001011` (primary text/action), `--color-smoke-veil: #0f1e1f` (secondary text), `--color-ash-layer: #ededea` (elevated surfaces), `--color-mist-border: #c1c4c2` (hairlines), `--color-ember: #fd5321` (single accent CTA per viewport), `--color-signal-blue: #007aff` (ghost/outlined only).
Typography: AeonikPro (substitute Inter) weights 400/500, sizes 16/18/21/24/32/36/72/101, letter-spacing -0.025em at 72-101px, -0.012em at 32-36px, +0.010em at 16-18px, OpenType `"dlig" on, "ss02" on, "ss08" on`. Type scale tokens `--text-caption` (16px/1.5/0.16px), `--text-body` (18px/1.4/0.18px), `--text-subheading` (24px/1.4/-0.29px), `--text-heading-sm` (32px/1.1/-0.38px), `--text-heading` (36px/1.1/-0.72px), `--text-heading-lg` (72px/0.9/-1.8px), `--text-display` (101px/0.8/-2.53px).
Spacing base 8px; scale 8/16/24/32/48/64/72/80/96/160. Radii: cards 20px, links 44px, pills 48px, badges 8px, images 20px, buttons 24px. Page max-width 1200px, section gap 96px, card padding 24px, element gap 24px.

## 4. Component Requirements
- **Buttons:** Default flex `align-items:center; justify-content:center; gap:0.5rem`, min 44x44px. Hover brightness/shadow + cursor pointer. Focus ring via variables. Active `transform:scale(0.97)`. Loading disables + CSS spinner/icon without dimension change. Disabled opacity 0.5, greyscale, not-allowed. Success/Error via `--text-success`/`--text-error`.
- **Cards:** Flex layout, `--bg-secondary` + borders. Hover elevation/`translateY(-2px)`. Focus-within border highlight. Loading skeleton shimmer. Empty state with Google Icon + guidance text.
- **Forms/Inputs:** Empty/Focused/Filled/Valid/Invalid/Disabled/Read-only. Flex container with label, input, error feedback.
- **Modals:** Opening/Open/Loading/Success/Error/Closing animated. Centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## 5. UX & Micro-interactions
Responsive by default, no horizontal overflow. CSS transitions on all states respecting `prefers-reduced-motion`. Accessibility: contrast both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback. Mandatory visual feedback on every interaction. Destructive actions visually distinct in both themes.

## 6. Page Sections (in order)
1. **Top Navigation:** sticky bar, logo left at 19px, nav links center (about, offer, brainpower, stories, team, philosophy) 16px 24px gap, Ember CTA right. No bg/border.
2. **Hero:** full-width bone canvas, centered text max 900px. Headline 72-101px weight 400-500, letter-spacing -0.025em, line-height 0.8-0.9. Subtext 18px max 60ch. Arrow pill CTA centered. 120px vertical padding. Text is the hero.
3. **Features:** 3 offer cards (2-col grid) — 20px radius, 1px border, 32px padding, title 24px + 24px circular arrow icon, body 18px.
4. **How It Works:** 3 steps, section header with numbered label + parenthetical count, hairline divider.
5. **Testimonials:** cards with quote, author.
6. **Pricing:** 3 tiers.
7. **FAQ:** accordion-style.
8. **Final CTA:** centered headline + Ember CTA.
9. **Footer:** secondary links.

## 7. Style Rules to Enforce
- Ember (`#fd5321`) for exactly one CTA per viewport.
- Letter-spacing -0.025em at 72px+, +0.010em at body.
- Radii: cards 20px, buttons 24px, pills 44-48px — never mix.
- 96px section gaps; whitespace is the layout.
- Arrow Pill Button (dark fill) for inline 'more' actions; Ember reserved for header + key conversion.
- Enable `dlig`, `ss02`, `ss08` on all AeonikPro text.
- Hairline `#c1c4c2` 1px borders instead of shadows.
- No shadows, gradients, glows, blur. No filled blue. No body text below 16px or above 21px. Body left-aligned; only display headlines centered. Icons monoline 1.5-2px stroke.

## 8. Deliverables
Separate `index.html`, `style.css`, `script.js`. Consistent class-naming (BEM or fixed utility set) — never mix. No lorem-ipsum where real copy supplied; placeholders only where genuinely unspecified. Invent fictional brand/product/copy; never use real brand name/logo/trademarks.

Output only the finished code files. No preamble.
