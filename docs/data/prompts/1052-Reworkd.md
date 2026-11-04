# Coding AI Prompt — Complete Landing Page (Reworkd Theme)

Build a complete, production-ready landing page using a CSS-first architecture with zero inline CSS. Deliver separate `index.html`, `style.css`, and `script.js` files. Use Tailwind CSS via CDN with custom CSS driven by CSS variables in `:root` and a `.dark` class. Use Google Fonts (Suisse Intl via Inter substitute, Selecta via Fraunces substitute, Geist Mono, Geist Sans via Inter substitute) and Google Material Symbols for icons. Invent a fictional brand name, product, and copy — never use the real brand name "Reworkd", its logo, trademarks, or product names.

## 1. CSS-First Architecture & Zero Inline CSS
- All styling strictly inside `style.css`. No `style="..."` attributes.
- Target only class/ID selectors. Keep HTML semantic and agnostic of visual styling.
- One consistent class-naming convention (BEM) across the entire deliverable.

## 2. CSS Variables & Theme Tokens
Define in `:root` (light) and `.dark` (dark) with contrast pairing (light bg → dark text, dark bg → light text):

Colors:
- `--color-iris-blue`, `--color-cobalt`, `--color-sky-glow`, `--color-mint-pulse`, `--color-midnight-iris`, `--color-ink`, `--color-pure-white`, `--color-lavender-mist`, `--color-pale-slate`, `--color-dove-gray`, `--color-iron`, `--color-graphite`, `--color-slate-mist`
- `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`

Light values: bg-primary #fefefe, bg-secondary #f0f5fe, text-primary #272c30, text-secondary #526068, border-default #e3e8ea. Dark values: bg-primary #1a1d21, bg-secondary #272c30, text-primary #fefefe, text-secondary #a6b4ba, border-default #3a4148.

Generic tokens: `--radius-sm` 6px, `--radius-md` 6px, `--radius-lg` 6px, `--radius-pill` 9999px, `--shadow-sm`, `--shadow-md`, `--shadow-xl`, `--shadow-product-mockup`, `--spacing-gap` 12px, `--transition-fast` 150ms, `--transition-normal` 250ms, `--ease-standard` cubic-bezier(0.4,0,0.2,1), `--z-dropdown` 100, `--z-modal` 1000, `--z-toast` 2000.

Typography tokens: `--font-selecta` (Fraunces), `--font-suisse-intl` (Inter), `--font-geist-mono` (Geist Mono), `--font-geist-sans` (Inter). Type scale tokens: `--text-caption` 10px, `--text-body` 14px, `--text-heading-sm` 18px, `--text-heading` 40px, `--text-heading-lg` 56px, `--text-display` 80px.

Spacing tokens: `--spacing-4` 4px through `--spacing-136` 136px per scale. Layout: `--max-width` 1200px, `--section-gap` 64px, `--card-padding` 12px, `--element-gap` 12px.

## 3. Mandatory Dark Mode
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Theme switch via `localStorage`, fallback to `prefers-color-scheme`. Visible toggle with `aria-pressed`/`aria-label`.
- Seamless variable switching, no HTML restructuring.

## 4. Flexbox Layout & Mobile-First
- All layouts use Flexbox. Default `align-items: center` unless justified exception.
- Mobile-responsive, rows → columns on small viewports. No horizontal scroll. Max-width 1200px centered.

## 5. Typography & Icons
- Google Fonts: Fraunces (Selecta substitute), Inter (Suisse Intl), Geist Mono, Inter (Geist Sans). Material Symbols for icons. No inline SVGs or local icons.

## 6. Component States
Buttons: default (flex, 44x44 min touch target), hover (brightness/shadow, cursor pointer), focus (ring via variables), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback). Cards: default, hover (translateY -2px), focus-within, loading skeleton, empty state. Forms: empty, focused, filled, valid, invalid, disabled, read-only. Modals: opening/open/loading/success-error/closing with transitions, backdrop, close button, focus trap, Esc/overlay close.

## 7. UX & Micro-interactions
- Responsive by default, smooth transitions respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` for dynamic feedback. Never rely on color alone.
- Visual feedback on every interaction. Destructive actions distinct in both themes.

## 8. Deliverables
- `index.html`, `style.css`, `script.js`. No inline script blocks beyond single deferred entry reference.
- BEM naming. No lorem-ipsum where real copy supplied; placeholders only where unspecified.

## 9. Edit Mode
Not applicable (from-scratch build).

## 10. Theme-Specific Rules (Reworkd)
- Use Selecta (Fraunces) exclusively for display headlines 40px+; never body. Suisse Intl (Inter) for all UI chrome. Geist Mono for code/eyebrow labels with 0.15em tracking.
- 6px radius for all rectangles; 9999px only for pills/tags/circular icons. No intermediate radii.
- Blue gradient (#5897f7 → #3872e6) on second line of hero/section headlines only, via background-clip text. First line solid Ink.
- Layered card shadow stack on hero product mockup and hover states only; static feature cards use 1px Pale Slate hairline border, no shadow.
- Hero on radial aurora (Iris Blue at 57% horizontal / 0% vertical fading to transparent) over Lavender Mist → white linear wash. Never flat white hero.
- Mint Pulse (#89ecb0) exclusively for Active status/success. No other green decoration.
- Tight negative tracking on Selecta above 40px (down to -0.025em); positive tracking (0.01–0.05em) for Suisse Intl body/labels.
- Cobalt (#3e79ea) reserved for primary CTA button only — only filled chromatic button.
- No dark backgrounds for cards/sections; daylight system. Ink for text/borders, never large fills.
- Only two blues: Iris Blue #3161df and Cobalt #3e79ea plus Sky Glow #3e9ed0 minor accent.
- Gradient system: Display Headline Fill (linear #5897f7→#3872e6, text clip, second line only); Hero Aurora (radial, 57%/0%, rgb(0,89,255)→rgba(129,118,255,0.73) at 36.5%→transparent over Lavender Mist→white); Section Wash (linear Lavender Mist→rgb(195,217,250), sparingly). No stacking, no aurora on cards, closed palette.

## 11. Page Structure (Sections)
1. **Sunset Banner** — full-width Ink bar, white text 12px, underlined Cobalt email link.
2. **Nav** — logo left, ghost nav items (Features, Pricing, Blog, Docs), outlined Sign Up button right.
3. **Hero** — centered text block: eyebrow label (Geist Mono 10-12px, 0.15em tracking, Graphite), Selecta 80px headline (first line solid Ink, second line blue gradient), Suisse Intl 16px subtext Iron, single Cobalt CTA. Below: wide product mockup card with browser chrome (3 dots, tab bar) and data table (Geist Mono IDs, Suisse Intl descriptions, Mint Pulse Active badges).
4. **Features** — 3 Elevated Cards (6px radius, 12px padding, 1px Pale Slate border, no shadow; hover shadow stack). Icon + title + body.
5. **How It Works** — 3 steps: number, title (Selecta), body.
6. **Testimonials** — centered quotes, author name/role.
7. **Pricing** — 3 tiers Elevated Cards; middle tier highlighted with Cobalt border or shadow.
8. **FAQ** — accordion, keyboard accessible, aria-expanded.
9. **Final CTA** — centered Selecta headline + Cobalt button.
10. **Footer** — secondary links, logo, copyright.

## 12. Copy Locale
All user-facing copy in English. Invent fictional brand/product names and content.

Generate only the finished prompt output; no preamble or closing commentary. Mirror numbered headers and bolded sub-rules. Keep mandatory rules; if conflict, add one-line explicit exception. Output entirely in English. Translate any non-English copy guidance to English. All CSS variable names, class names, file names in English/ASCII.
