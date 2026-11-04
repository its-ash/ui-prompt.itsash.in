# Coding AI Prompt: Cinematic Editorial Desert Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a fictional digital-workers product brand. The visual identity is a **cinematic editorial desert** — full-bleed terrain photography against monumental serif headlines, reading like a luxury magazine spread. Invent a fictional brand name, product name, and all copy. Never use "11x", "11x.ai", "Alice the SDR", "Ask Julian", or any real trademark. All user-facing copy must be in English.

Deliverables: separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere. Use one consistent class-naming convention (BEM) throughout.

## 2. CSS-First Architecture & Zero Inline CSS
- All styling lives in `style.css`. HTML stays semantic and agnostic of visual styling.
- Target all design via class/ID selectors only. No `style="..."` attributes.
- Changing the look must require editing only CSS, never markup.

## 3. CSS Variables & Theme Tokens
Define all tokens in `:root` (light) and under `@media (prefers-color-scheme: dark)` plus a `.dark` class. Required tokens:

**Colors (light):**
`--color-obsidian: #000000;` `--color-paper-white: #fefefe;` `--color-deep-teal: #0b252a;` `--color-bone: #f6f5f5;` `--color-sandstone: #f5ece5;` `--color-ash-blush: #ede2d7;` `--color-stone: #d7cecc;` `--color-iron: #e1dad9;` `--color-pewter: #afaeae;` `--color-charcoal: #222222;` `--color-dusty-sky: #c5d5e8;` `--color-mist-mint: #d4e6eb;` `--color-wisteria: #efe5f9;` `--color-desert-clay: #e7d3bf;` `--color-slate-teal: #406e7a;` `--color-saddle-brown: #4c312b;`

**Semantic aliases:** `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--primary`, `--secondary`.

**Contrast pairing:** every light background token pairs with a dark text token and every dark background token pairs with a light text token in both themes.

**Light background:** do not default to pure white; use `#fefefe` where white is needed. Page canvas uses `--color-paper-white`.

**Radius & shadows:** `--radius-sm: 8px;` `--radius-md: 16px;` `--radius-lg: 32px;` `--shadow-sm`, `--shadow-md` (minimal — only chat widget uses shadow).

**Spacing & transitions:** `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.

**Elevation/stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.

**Typography:** `--font-base` bound to the Google Font substitute (Bodoni Moda or Playfair Display, both free Google Fonts). No sans-serif anywhere.

**Dark mode:** implement under `@media (prefers-color-scheme: dark)` and `.dark` class. Background and text variables switch seamlessly. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed`/`aria-label`.

## 4. Typography
- Use Google Fonts only. Include `<link>` for Bodoni Moda (weights 400, 500, 700) and Google Material Symbols.
- No raw inline SVGs or local icon files.
- Type scale tokens: `--text-caption: 14px`, `--text-body-sm: 16px`, `--text-subheading: 19px`, `--text-heading-sm: 28px`, `--text-heading: 46px`, `--text-heading-lg: 64px`, `--text-display: 74px`, `--text-display-xl: 152px`.
- Letter-spacing: `-0.045em` at 74px+, `-0.04em` at 46–64px, `-0.02em` at 14–32px.
- Line-heights: 0.85 at display-xl, 1.0 at display, 1.1 at heading sizes, 1.2 at subheading/heading-sm, 1.4 at body.

## 5. Layout & Flexbox
- Mobile-first, responsive, no horizontal overflow.
- All flex containers default to `align-items: center` unless explicitly justified otherwise.
- Max content width 1200px centered. Hero and dark bands full-bleed.
- Section gaps 48–80px. Card padding 16–24px. Element gaps 8–16px.

## 6. Component Specifications

**Buttons (`.btn`):**
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min 44x44px touch target.
- Primary light: black fill, white text, 999px radius, 12px 24px padding, weight 500, 16px, letter-spacing -0.32px, 1px white hairline border.
- Primary dark: white fill, black text, same radius/padding.
- Danger: visually distinct in both themes.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled, spinner or animated Material Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary styles via `--text-success`/`--text-error`.

**Cards:**
- Section card (pastel): one of four pastel tints, 16px radius, 24px padding, no shadow, no border. Black text. Headings 32–46px weight 700; body 18px weight 400.
- Portrait worker card: 32px radius, 1px border `#e1dad9`, full-bleed portrait photo, overlaid status badge top-left (8px radius, semi-transparent dark bg, white 14px weight 500).
- Hover: `transform: translateY(-2px)` or shadow shift. Focus-within highlights border. Skeleton shimmer loading state. Empty state with Material Icon + guidance text.

**Navigation bar:** white bg, 8px vertical padding, logo left ("brand" in weight 700, 24px), nav links center (16px weight 500, black), black pill CTA right. 1px bottom hairline `#e1dad9`. No shadow.

**Announcement bar:** black bg, white text 14px weight 500, centered, full-width, ~40px height, arrow Material Icon link.

**Hero (full-bleed):** photographic desert background, white text overlay. Display headline 74–152px weight 700, white, letter-spacing -0.045em. Subheadline 18–19px weight 400, white, 1.4 line-height. White pill CTA. Photography warm-toned, cinematic (use placeholder image URLs).

**Status badge:** pill, 8px radius, under 32px height, white or semi-transparent black bg, 14px weight 500.

**Feature tag pill:** slate-teal bg, white text, 8px radius, 4px 12px padding, 14px weight 500. Used only on dark sections.

**Dark narrative band:** deep teal bg, full-bleed, white centered text. Display headline 46–74px, body 18px, white pill CTA. Row of slate-teal feature tag pills. Followed by cream/bone card surface.

**Chat widget:** fixed bottom-right, pill, dark teal bg, circular avatar, white "Ask [Name]" 14px weight 500, ~48px height, minimal shadow.

**Footer:** stone or white bg, multi-column link grid, 14–16px, black text. Logo and legal line at bottom.

**Forms/inputs:** states — empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

**Modal:** opening/open/loading/success-error/closing animated. Centered flex, backdrop overlay, Material Icon close button, Esc/overlay close, focus trapping.

## 7. Page Sections (in order)
1. Announcement bar
2. Navigation bar
3. Hero (full-bleed)
4. Features — 3 pastel cards (2-column grid, alternate tints with white space between; never stack two pastel cards adjacent without white space)
5. How It Works — 3 steps
6. Testimonials
7. Pricing — 3 tiers
8. FAQ
9. Final CTA
10. Footer with secondary links

## 8. UX & Micro-interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- No drop shadows on cards/buttons (only chat widget minimal shadow).
- No gradients on UI components except subtle warm fade `#f8f9f7 → #d7cecd` minimally.
- No sharp corners under 8px on interactive elements.
- Left-align body paragraphs longer than two lines.
- Pastel cards never adjacent without white space.

## 9. Imagery
Use placeholder image URLs (e.g., https://picsum.photos) for full-bleed desert terrain backgrounds and portrait photos. Warm-toned cinematic treatment. No overlays, no duotone.

## 10. Do's and Don'ts (enforce)
- Do use oversized serif 74px+ weight 700 for hero/section headlines.
- Do set pill buttons to exactly 999px radius, 12px 24px padding.
- Do use four pastel tints as only color punctuation on light sections.
- Do alternate white spreads and deep teal bands.
- Do use full-bleed landscape photography as section backgrounds.
- Do set letter-spacing -0.045em display, -0.02em body.
- Do use slate-teal feature tag pills exclusively on dark sections.
- Don't use sans-serif anywhere.
- Don't use blue/red/green/yellow as functional UI colors.
- Don't add drop shadows to cards/buttons.
- Don't use sharp corners under 8px on interactive elements.
- Don't center-align body paragraphs longer than two lines.
- Don't introduce gradients on UI components (except minimal warm fade).
- Don't stack more than one pastel card tint adjacent.

## 11. Dark Mode Toggle
Provide visible toggle with `aria-pressed`/`aria-label`, persisting via `localStorage`, falling back to `prefers-color-scheme`.

## 12. Output
Generate `index.html`, `style.css`, `script.js` with BEM naming, no placeholders where real copy is supplied (invent fictional copy), Google Fonts + Material Symbols only, zero inline CSS, mandatory dark mode, flexbox mobile-first, full accessibility. Do not use the real brand name or trademarks. All copy in English.
