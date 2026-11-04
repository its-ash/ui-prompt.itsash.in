# Coding AI Prompt — Fictional Landing Page in the "Decide AI" Midnight Intelligence Style

You are a senior front-end engineer. Build a complete, production-quality landing page for a **fictional** AI product brand (invent a brand name, product name, copy, testimonials, pricing, and FAQ content — never reuse the real "Decide AI" name, logo, trademarks, or product names). The visual style is a midnight intelligence command center: near-black canvas, oversized editorial display type, a single mint-green accent, and extreme typographic contrast. Implement strictly per the rules below.

## 1. Architecture & File Structure
- Deliver three files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere.
- Use semantic HTML5 (`header`, `main`, `section`, `footer`, `nav`, `article`, `figure`, `blockquote`).
- Class naming: BEM throughout (e.g. `.hero`, `.hero__headline`, `.hero__headline--xl`). Never mix conventions.
- All styling lives in `style.css`. HTML stays clean and agnostic of visual styling.

## 2. CSS Variables & Theme Tokens
Define in `:root` (and a `.dark` class / `@media (prefers-color-scheme: dark)` override) at minimum:
- Colors: `--color-deep-obsidian: #030303`, `--color-pure-black: #000000`, `--color-frost: #ffffff`, `--color-silver-haze: #e5e7eb`, `--color-mint-signal: #73ffb9`, plus the standard tokens `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Map theme tokens: `--bg-primary: var(--color-deep-obsidian)`, `--text-primary: var(--color-frost)`, `--border-default: var(--color-silver-haze)`, `--primary: var(--color-mint-signal)`.
- Contrast pairing: every light surface pairs with dark text; every dark surface pairs with light text. Product cards are white (`#fefefe` where near-white is needed) with `#030303` text.
- Radius/shadows: `--radius-sm: 0px`, `--radius-md: 8.64px`, `--radius-lg: 9999px`, `--shadow-sm: none`, `--shadow-md: none` (flat system — no shadows).
- Spacing/transitions: `--spacing-gap`, `--transition-fast: 150ms`, `--transition-normal: 250ms`, `--ease-standard: cubic-bezier(0.4,0,0.2,1)`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: `--font-base` bound to the Google Font substitute (Inter with tight tracking, since PP Neue Montreal is not on Google Fonts). Load via `<link>`/`@import`. Use Google Material Symbols for all icons — no inline SVGs or local icon files.
- Spacing scale tokens: `--spacing-4` (4px) through `--spacing-112` (112px) per the provided scale.

## 3. Mandatory Dark Mode
- Default theme is dark (canvas `#030303`). Provide `@media (prefers-color-scheme: dark)` and a `.dark` class override for token switching.
- Persist user choice in `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Render a visible toggle control with correct `aria-pressed` and `aria-label`. All UI must remain usable in both themes (contrast pairing enforced).

## 4. Layout, Flexbox, Mobile-First
- Use Flexbox for all layout. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first: rows become columns on small viewports; no horizontal scrolling; fluid sizing; responsive breakpoints.
- Page max-width 1200px, content centered. Section gaps 80–120px.

## 5. Typography
- Single typeface (Inter substitute) for body, headings, and display. Weights 400/500/700.
- Type scale: caption 13px, body 16–17px (line-height 1.5–1.62), subheading 22px (1.38), heading-sm 30px (tracking -0.96px), heading 46px (-1.47px), heading-lg 54px (-1.73px), display 110px (-3.96px), display-xl 220px (-7.92px). Display line-height 1.0.
- OpenType `"ss01" on` where available. Letter-spacing values as specified.

## 6. Component States (enforce all)
- Buttons: default (flex, center, gap 0.5rem, min 44x44px), hover (brightness/shadow + cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (spinner, no dimension change, disabled interactions), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary, via `--text-success`/`--text-error`).
- Cards: default (flex, subtle border, elevation via tokens), hover (translateY(-2px)), focus-within (highlighted border), loading skeleton (shimmer), empty state (icon + guidance text).
- Forms/inputs: empty, focused, filled, valid, invalid, disabled, read-only; flex wrapper with label, input, error container.
- Modals: opening/open/loading/success-error/closing animated; centered flex, backdrop, Google Icon close button, focus trap, Esc/overlay close.

## 7. Global UX & Micro-interactions
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback, sufficient contrast in both themes, never color-only state communication.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 8. Style-Specific Rules (Decide AI Midnight Intelligence)
- Canvas `#030303`; product cards flip to white `#fefefe`/`#ffffff` with `#030303` text and `#e5e7eb` hairline border, 0px radius.
- Accent `#73ffb9` used only as bars, icons, arrow glyphs, and rare punctuation — never full button backgrounds or large surfaces.
- Buttons: 9999px pill radius, 6px 20px padding, 14px weight 500, white text, transparent or `#030303` background; underline on hover. No filled chromatic CTA.
- Cards: 0px sharp radius; never 1–8px. No box-shadows anywhere — flat, tonal-contrast elevation only.
- Marquee band: full-bleed, 200–400px weight 400 white text on `#030303`/`#000000`, infinite horizontal scroll, ✦ glyph separator.
- Step indicator bars: 3–4px wide, 40–60px tall; active `#73ffb9`, inactive `#e5e7eb`/transparent; uppercase label 13–14px above.
- Logo mark: PP Neue Montreal weight 700 at 16–18px white, preceded by ✦ glyph.
- Geometric icons: circular outline 48–64px, 1–1.5px stroke, no fill.
- Inline tags: 13px weight 500 uppercase, `#e5e7eb`, no background.
- Arrow links: 14–16px weight 500 white with underline; arrow glyph `#73ffb9` or white.
- Hero subheadline: 18–22px weight 400, `#e5e7eb`, line-height 1.38, max-width 60–70ch, separated by 12–20px gap and a 1px `#e5e7eb` rule.
- Body paragraphs left-aligned, 60–70ch measure. No centered body text.
- Body text never below 14px.

## 9. Page Sections (in order)
1. **Hero**: step indicator bars above a 110–220px display headline; subheadline; 1px rule; minimal top nav (logo left, links right, pill buttons).
2. **Features**: 3-column product card grid (light cards on dark canvas).
3. **How It Works**: 3 steps with step indicator bars.
4. **Testimonials**: quotes on dark canvas.
5. **Pricing**: 3 tiers.
6. **FAQ**: accordion-style questions.
7. **Final CTA**: display headline + pill button/arrow link.
8. **Footer**: secondary links, logo mark.

## 10. Deliverable Notes
- Invent all brand/product/copy content; never use real brand names, logos, trademarks, or product names.
- No lorem-ipsum-only where real copy is expected; placeholders only where genuinely unspecified.
- Output only the three files' contents as requested by the user's downstream instruction.

Now generate the landing page.
