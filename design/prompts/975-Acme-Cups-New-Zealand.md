# Landing Page Build Prompt — Fictional Ceramics Brand (Editorial Gallery Theme)

Build a complete, responsive landing page for a **fictional ceramics/cups brand** inspired by an austere editorial gallery aesthetic. Do NOT use the real brand name "Acme Cups New Zealand", its logo, trademarks, or product names (e.g., Roman Cup Mini, Kōkako 002). Invent a fictional brand name, product names, and all copy. Apply the style only.

## 1. Strict Architecture Rules

**1.1 CSS-First & Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target elements via class/ID selectors only. Keep HTML semantic and styling-agnostic.

**1.2 CSS Variables & Theme Tokens**
Define in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`):
- Colors: `--color-ink-black: #000000`, `--color-gallery-white: #fefefe`, `--color-concrete-canvas: #e3e2e2`, `--color-ash-border: #c3c3c3`, `--color-steel-mute: #aeaaaa`, `--color-pewter-caption: #666666`, `--color-terracotta-alert: #9b1b01`, plus `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Contrast pairing: light backgrounds pair with dark text and vice versa in every theme.
- Light-mode page background must be `#e3e2e2` (concrete canvas), not pure white. Use `#fefefe` where near-white is needed.
- Radius/shadow: `--radius-sm: 3px` (single radius for everything), `--shadow-sm: none`, `--shadow-md: none` (flat, shadowless system).
- Spacing/transitions: `--spacing-gap: 8px`, `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: ease`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: `--font-base` bound to Google Font Inter (fallback for Helvetica Neue; load weights 400, 500, 700). Use `font-family: "Helvetica Neue", Inter, Arial, Helvetica, sans-serif;`. OpenType `"kern" 0, "liga" 0`.
- Type scale tokens: `--text-caption: 10px`, `--text-body: 14px`, `--text-heading-sm: 20px`, `--text-heading: 26px`, `--text-heading-lg: 30px`, `--text-display: 48px`, `--text-wordmark: 148px`. Letter spacing: `-0.009em` at 30px+, `+0.015em` to `+0.020em` at 10-13px uppercase labels.

**1.3 Mandatory Dark Mode**
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Persist choice via `localStorage`, fall back to `prefers-color-scheme`. Include visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox & Mobile-First**
- Flexbox for all layouts. Default `align-items: center`. Mobile-responsive, no horizontal scroll.

**1.5 Tailwind Integration**
- Use Tailwind CSS or clean custom CSS via `@layer`/`@apply`. Utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons**
- Google Fonts only. Text via Inter link. Icons via Google Material Symbols — but per theme rules, use ONLY "→" and "←" arrow glyphs as text characters; no other iconography.

## 2. Component Specifications

**Buttons:** Flex (`display:flex; align-items:center; justify-content:center; gap:0.5rem`), min 44x44px touch target. States: hover (brightness/shadow shift, cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`). Ghost button: transparent/`#fefefe` fill, 1px `#000000` border, 3px radius, padding 7-9px vertical × 12-16px horizontal, 12-13px uppercase weight 500 with +0.015em tracking, label followed by "→". No fill state, no shadow.

**Cards:** Flex layout, 1px `#c3c3c3` border, 3px radius, no shadow, `#fefefe` surface. Hover: subtle transform `translateY(-2px)`. Focus-within highlight. Skeleton shimmer. Empty state with text.

**Forms/Inputs:** States empty/focused/filled/valid/invalid/disabled/readonly. Flex wrapper with label, input, error container. 1px `#c3c3c3` border, 3px radius, padding 9-12px, 14px weight 400. Focus border `#000000`. Error border `#9b1b01`.

**Modal:** Opening/open/loading/success/error/closing animated. Centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## 3. Core UX Rules

- Responsive by default, no horizontal overflow.
- CSS transitions on state changes, respect `prefers-reduced-motion`.
- Accessibility: contrast in both themes, never color-only state, semantic HTML5, ARIA, keyboard operability, `aria-live` regions.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 4. Deliverables

- Files: `index.html`, `style.css`, `script.js`. No inline script blocks beyond single deferred entry point.
- Naming: consistent BEM convention throughout.
- No lorem-ipsum where real copy is supplied; placeholders only where unspecified.

## 5. Theme Visual Rules (Editorial Gallery)

- All border-radius = 3px everywhere.
- 1px solid `#000000` primary borders, 1px solid `#c3c3c3` secondary borders. No shadows ever.
- Uppercase +0.015em to +0.020em tracking for all UI labels under 14px.
- Achromatic palette only; product photography is the only color source.
- Wordmark at 148px weight 700 as display moment; never below 48px or weight change.
- "→" appended to button labels as universal interactive cue. No other icons.
- Product images on `#fefefe` with generous whitespace, framed by 1px border.
- Left-aligned body text; never center long-form copy.
- Helvetica Neue (Inter fallback) only.
- Page max-width 1440px, section gap 64px, card padding 24px, element gap 8px.
- Three-column layout: left sidebar (wordmark + category list), center content, right utility column.

## 6. Landing Page Sections

Build these sections in order:
1. **Hero** — Full-bleed dark product photograph background. Left-aligned fictional wordmark at 148px weight 700 `#fefefe`. Right-aligned tagline block 20px weight 400 `#fefefe`, line-height 1.30. Ghost button CTA "SHOP NOW →" with `#fefefe` fill, `#000000` border, `#000000` text.
2. **Features** — 3 cards in a grid. Each: 1px `#c3c3c3` border, 3px radius, `#fefefe` surface. Title uppercase weight 700, body text 14px. No icons beyond arrow glyphs.
3. **How It Works** — 3 steps. Numbered in 48px weight 700. Step title 20px weight 700 uppercase. Description 14px. Separated by 1px borders.
4. **Testimonials** — 2-3 quote blocks. Left-aligned. Author name uppercase 12px weight 500. Quote 16-20px weight 400. Separated by 1px `#c3c3c3` borders.
5. **Pricing** — 3 tiers. Each card: 1px border, 3px radius. Tier name uppercase 13px weight 700. Price 30px weight 700. Feature list 14px. CTA ghost button. Highlight middle tier with `#000000` border (primary) vs `#c3c3c3` for others.
6. **FAQ** — Accordion-style. Question 16px weight 500. Answer 14px. 1px border separators. Expand/collapse via CSS/JS with "→" indicator rotation.
7. **Final CTA** — Centered text block on `#e3e2e2`. Headline 30-48px weight 700. Ghost button CTA.
8. **Footer** — `#e3e2e2` background. Multi-column links (uppercase 12px). Secondary links. Wordmark at 26-30px. 1px top border `#c3c3c3`.

All copy must be invented and in English. Use fictional product names, testimonials, pricing, and FAQ content. Never reference the real brand.

Output only the finished prompt. No preamble. No closing commentary.
