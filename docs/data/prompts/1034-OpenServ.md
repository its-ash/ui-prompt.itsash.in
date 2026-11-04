# Generated Coding-AI Prompt — OpenServ-Style Landing Page

## 1. Role & Objective
You are a senior frontend engineer building a complete, production-ready landing page. Recreate the visual language of the provided "OpenServ" style reference exactly, but invent a fictional brand name, product, and all user-facing copy. Never use the real brand name "OpenServ", its logo, trademarks, or product names anywhere in the page. All copy must be in English.

## 2. Strict Architecture Rules
- **CSS-First / Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes in HTML. Use class/ID selectors only. Keep HTML clean, semantic, and styling-agnostic.
- **CSS Variables:** Define all tokens in `:root` (and theme classes) as CSS variables: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.
- **Contrast Pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text, in every theme.
- **Light Mode Background:** Do not default to pure white; use `#fefefe` where a near-white is needed. The canvas here is pure white `#ffffff` per the reference — keep it.
- **Dark Mode Mandatory:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and/or `.dark` class. Switch variables seamlessly. Persist choice via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** Use Flexbox for layouts. Every flex container defaults to `align-items: center` unless explicitly justified. Mobile-responsive out of the box; no horizontal scroll.
- **Tailwind/CSS:** Use Tailwind CSS (or clean custom CSS via `@layer`/`@apply`). Utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts only. Text: bind `--font-base` to a Google Font. Icons: Google Material Symbols/Icons only. No inline SVGs or local icon files.

## 3. Theme Tokens (OpenServ Visual Language)
Define these exact tokens:

Colors:
- `--color-signal-violet: #5f79ff` (primary action, active nav, icon accent, focused border)
- `--color-mint-pulse: #01fe93` (success, highlights, section stripe)
- `--color-pure-white: #ffffff` (canvas, card surface, button text on violet)
- `--color-ink-black: #000000` (primary text, headings, hairlines, footer ink)
- `--color-fog-gray: #f5f5f5` (card lift, subtle blocks)
- `--color-mist-gray: #a6a6a6` (muted nav, secondary borders, placeholders)
- `--color-ash-gray: #4d4d4d` (secondary body text)
- `--color-smoke-gray: #9c9c9c` (tertiary borders, disabled outlines)
- `--color-slate-gray: #707070` (helper text, metadata)
- `--color-tint-wash: #d9defc` (subtle violet accent surface)

Typography:
- `--font-sans-serif` for a 12px sans (weight 400, line-height 1.2).
- `--font-os-studio-grotesk`: substitute Inter, Manrope, or DM Sans (weight 400 only; sizes 12–72px; letter-spacing -0.02em to -0.017em at 20–24px; OpenType features `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`).
- `--font-os-chronik`: substitute Cormorant Garamond Light, Playfair Display Light, or EB Garamond Light (weight 300 only; sizes 18/24/34/72px; letter-spacing -0.020em at 72px, -0.015em at 24–34px; OpenType features as above).

Type scale tokens: `--text-caption` (12px/1.2), `--text-body` (15px/1.4), `--text-subheading` (20px/1.25), `--text-heading-sm` (24px/1.2), `--text-heading` (30px/1.18), `--text-heading-lg` (40px/1.1), `--text-display` (72px/0.9/-1.44px).

Spacing: base 4px, comfortable density. Scale: 4,8,12,16,20,24,28,32,40,48,60,64,80,120px as `--spacing-*`.

Radius: nav/cards/images 16px; badges/buttons 100px; inputs 12px.

Shadow: `--shadow-xl: 0px 0px 48px 0px rgba(0,0,0,0.1)` (floating nav only).

Layout: max-width 1200px container; section gap 80px; card padding 24px; element gap 10–20px.

## 4. Component Specifications

**Floating Nav Bar:** white pill, 16px radius, centered, 24px top margin, `--shadow-xl`. Logo lockup (concentric ring icon + wordmark in grotesque 15px black) left; nav links centered (15px black, 16px gaps); violet pill CTA right. Hover on ghost links shifts color to violet. All states via CSS classes.

**Violet Pill CTA:** `#5f79ff` fill, white text grotesque 15px, 100px radius, 10px/20px padding, arrow glyph after label. States: hover (brightness/shadow), focus (ring via variables), active (scale 0.97), loading (spinner, no dimension change, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error temporary.

**Ghost Nav Link:** text-only, grotesque 15px black, 8px horizontal padding, no underline/fill; hover shifts to violet.

**Content Card:** white bg, 1px `#f5f5f5`/`#a6a6a6` border, 16px radius, 24px padding. Header label violet caption; title grotesque 20–24px black; body 15px ash gray. Footer: violet pill button left + circular 40px expand button (1px `#a6a6a6` border, white fill, thin `+`) right. Interactive states: hover (translateY -2px), focus-within (border highlight), skeleton loading (shimmer), empty state (icon + guidance).

**Highlight Card:** same as content card but top half is 16px-radius image area (dark `#0a0a0a` bg with green-teal neural network graph in mint/violet at 60% opacity), full-bleed, no padding. Bottom half 24px padding.

**Editorial Headline Block:** centered stack on white. Display heading in serif 300 at 72px black, letter-spacing -1.44px, line-height 0.9. Subtitle grotesque 18–20px ash gray below with 16–20px gap. No decoration.

**Decorative Sparkle:** four-pointed star shapes and small circles in `#d9defc` at 10–20% opacity, scattered asymmetrically around display text.

**Section Divider Stripe:** 2–4px tall full-bleed band, split into segments of mint, violet, black. Closing band only.

**Logo Lockup:** circular concentric ring icon black + "wordmark" grotesque 400 black 15px, 8px gap.

**Expand Button:** circular 40px, 1px `#a6a6a6` border, white fill, thin `+` black.

## 5. Component State Requirements
Buttons: default, hover, focus, active, loading, disabled, success/error — all via CSS classes. Cards: default, hover, focus-within, skeleton loading, empty state. Forms/inputs: empty, focused (ring), filled, valid, invalid (error border/text/icon), disabled, read-only, with flex wrapper (label + input + error container). Modals: opening/open/loading/success-error/closing animated; centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## 6. Global UX Rules
- Responsive, fluid, no horizontal overflow.
- CSS transitions on all state changes (`var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never color-only state communication; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 7. Deliverables
Separate `index.html`, `style.css`, `script.js`. No inline script blocks beyond a single deferred entry-point reference. One consistent naming convention (BEM or fixed utility set) throughout. No lorem-ipsum-only submissions where real copy is supplied; placeholders only where genuinely unspecified.

## 8. Page Sections Required
Build a complete landing page with these sections in order:
1. Floating Nav Bar
2. Hero (editorial headline block + decorative sparkles + subtitle + violet pill CTA)
3. Features (3 content cards in a row, 20px gaps)
4. How It Works (3 steps)
5. Testimonials
6. Pricing (3 tiers)
7. FAQ
8. Final CTA
9. Footer with secondary links
10. Section divider stripes between bands as appropriate

Invent fictional brand name, product, and all copy. Use the mint-violet-black stripe only as closing bands. Keep cards flat (no shadows). Use 100px pills exclusively for buttons/badges. Pair typefaces per the logic: serif 300 for editorial moments, grotesque 400 for everything functional.

Output only the finished prompt itself. No preamble. No closing commentary. Mirror numbered headers and bolded sub-rules. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause. All output in English. All CSS variable names, class names, and file names in English/ASCII. User-facing copy must be in English.
