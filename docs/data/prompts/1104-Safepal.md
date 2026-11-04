# UI/UX Coding Prompt — Safepal-Style Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a **fictional brand** (invent a new name, logo wordmark, product, and copy — never use "Safepal", its logo, trademarks, or product names). The visual language is a cosmic violet cosmos: deep indigo night canvas, electric violet mid-page section bands, and mint-green as the sole chromatic accent. Dark theme is the default and mandatory; light mode must also be fully defined via CSS variables and a toggle with `localStorage` persistence.

## 2. Architecture & Rules (Mandatory)

**2.1 CSS-First, Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes anywhere in HTML.
- Target all design via class/ID selectors. HTML must stay semantic and style-agnostic.

**2.2 CSS Variables & Theme Tokens**
Define in `:root` and a `.dark` class / `@media (prefers-color-scheme: dark)`:
- Colors: `--primary` (#4a21ef violet), `--secondary` (#79efbd mint), `--bg-primary` (#0d0b33 deep indigo), `--bg-secondary` (#4a21ef signal field), `--bg-card` (#ffffff paper), `--bg-card-tint` (#f7f6ff lavender), `--text-primary` (#1d1d1d carbon), `--text-secondary` (#666666 steel), `--text-on-dark` (#ffffff), `--text-accent` (#79efbd mint), `--text-success` (#18d26e terminal green), `--text-error` (#ff4d4f), `--border-default` (rgba(255,255,255,0.12)), `--border-accent` (#79efbd), `--border-error`, `--border-success`.
- Contrast pairing: light bg → dark text; dark bg → light/mint text, in every theme.
- Light-mode background must not be pure white; use #fefefe where near-white is needed.
- Radius: `--radius-sm` 12px, `--radius-md` 24px, `--radius-lg` 48px, `--radius-pill` 100px.
- Shadows: `--shadow-sm` none (flat system), `--shadow-md` none. Elevation via color contrast only.
- Spacing: `--spacing-gap` 16px, `--transition-fast` 150ms, `--transition-normal` 250ms, `--ease-standard` cubic-bezier(0.4,0,0.2,1).
- Z-index: `--z-dropdown` 100, `--z-modal` 1000, `--z-toast` 2000.

**2.3 Dark Mode (Mandatory)**
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Seamless variable switching, no HTML restructuring.
- Persist choice via `localStorage`, fallback to `prefers-color-scheme`. Visible toggle with `aria-pressed`/`aria-label`.

**2.4 Flexbox & Mobile-First**
- All layouts use `display: flex`. Default `align-items: center` unless explicitly justified.
- Mobile-responsive: rows collapse to columns; no horizontal scroll.

**2.5 Tailwind CSS**
- Use Tailwind (or clean custom CSS via `@layer`/`@apply`). Utilities map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).

**2.6 Typography & Icons (Google Fonts Mandatory)**
- Text: Google Font link (Inter or Poppins substitute for AlibabaPuHuiTi-2) bound to `--font-base`. Weights 400, 700, 800, 900.
- Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 3. Theme Tokens (Safepal-Derived)

- Hero/dark base: #0d0b33 (Deep Indigo). Signal field: #4a21ef (violet, dominate mid-page bands). Mint accent: #79efbd. Terminal green: #18d26e (supporting accent only). Carbon text: #1d1d1d. Lavender mist: #f7f6ff. Paper white: #ffffff. Steel gray: #666666.
- Gradients: hero `linear-gradient(124.15deg, rgb(13,11,51) 0%, rgb(75,62,211) 218.07%)`; signal `linear-gradient(154.24deg, rgb(191,255,228) 11.19%, rgb(74,33,239) 62.38%)`.
- Type scale: caption 12px, body-sm 14px, body 16px (lh 1.57), subheading 18px, heading-sm 24px, heading 32px (lh 1.2), heading-lg 48px (lh 1.17), display 80px (lh 1.0). Headlines weight 700+ only; body 400.
- Spacing base 4px; section gap 80–113px; card padding 24px; element gap 12–16px.
- Radius: nav 12px, cards 24px, other 48px, buttons 100px (pill).
- Max content width 1200px. Full-bleed section backgrounds; content constrained.

## 4. Component Specifications

**4.1 Buttons**
- Default: flex, align-items center, justify-content center, gap 0.5rem, min 44x44px touch target.
- Hover: brightness/shadow shift, cursor pointer.
- Focus: distinct ring via CSS vars.
- Active: transform scale(0.97).
- Loading: disabled, spinner/animated Google Icon, no dimension distortion.
- Disabled: opacity 0.5, greyscale, cursor not-allowed.
- Success/Error: temporary styles via --text-success/--text-error.
- Pill Primary: 100px radius, mint fill, deep indigo text, weight 700, 16px, 12px 24px padding.
- Pill Ghost: 100px radius, transparent/white fill, 1–2px mint border, white/mint text.

**4.2 Cards**
- Default: flex layout, subtle border, elevation via color vars.
- Hover: elevation/shadow shift or translateY(-2px).
- Focus-within: highlight border on child focus.
- Loading (Skeleton): shimmer CSS animation.
- Empty State: Google Icon + guidance text.
- Wallet/Product card: 24px radius, white fill, no shadow, 24px padding.
- Testimonial card: 24px radius, white fill, 24–32px padding, no border/shadow, quote + 40px avatar + name (14px w700) + role (14px w400 steel).
- Feature card: 24px radius, lavender or white fill, generous padding, icon top, heading + body.
- Badge tag: pill or 12px radius, mint fill, dark text, 12px, 4–8px padding.

**4.3 Forms/Inputs**
- States: empty, focused (ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, error feedback.

**4.4 Modal/Popup**
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via Esc/overlay.

## 5. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes; never rely on color alone; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 6. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline script beyond single deferred entry-point reference.
- One consistent naming convention (BEM or fixed utility set) throughout — never mix.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where content genuinely unspecified.

## 7. Page Sections to Build
Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

- Hero: full-bleed deep indigo gradient, centered display headline 80px w800 white, subtext 18px w400 mint, floating isometric illustration (CSS/SVG-free: use Google Material Symbols or CSS shapes as placeholder visuals — no inline SVGs), 80–113px vertical padding. Nav transparent over hero.
- Features: 3-column card grid, violet section band background, centered heading 48px w800 white, body 16px white 0.8 opacity, white cards 24px radius 24px padding.
- How It Works: 3 steps with numbered mint badges, centered headings, generous spacing.
- Testimonials: 3-column grid of testimonial cards.
- Pricing: 3 tiers, pill buttons, mint accent on recommended tier.
- FAQ: accordion with keyboard support, aria-expanded.
- Final CTA: violet band, centered headline, pill primary button.
- Footer: white/dark surface, multi-column link grid, logo, social icons (Material Symbols), 48–64px padding.

## 8. Imagery & Decoration
- Isometric illustration style described but implement via CSS shapes/Google Icons (no inline SVGs, no local files). Sparkle/star marks as Material Symbols. Decorative gradient orbs via CSS radial gradients.
- Flat elevation: no shadows anywhere. Depth via color contrast and floating elements.

## 9. Copy Locale
All user-facing copy must be written in English.

## 10. Brand Fictionality
Invent a fictional brand name, product, and copy. Never use "Safepal" or its trademarks, logos, or product names anywhere in the page. Reuse only the visual style.
