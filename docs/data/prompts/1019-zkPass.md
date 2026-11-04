# Coding-AI Prompt: zkPass-Style Dark Landing Page (Fictional Brand)

You are an expert front-end engineer. Build a complete, production-quality landing page in a dark "encrypted terminal meets editorial broadsheet" aesthetic. Reuse the visual style only: invent a fictional brand name, product, and all copy. Never use the real brand name "zkPass", its logo, trademarks, or product names (TransGate, TransGate SDK, $ZKP, etc.) anywhere in the page. All user-facing copy must be in English.

## 1. Strict Architectural Rules

**1.1 CSS-First, Zero Inline CSS.** Keep all styling in `style.css`. Forbid `style="..."` in HTML. Target via classes/IDs only. HTML must stay semantic and styling-agnostic.

**1.2 CSS Variables & Theme Tokens.** Define all tokens in `:root` and a `.dark` class / `@media (prefers-color-scheme: dark)`:
- Colors: `--primary` (#c5ff4a), `--secondary` (#597321), `--bg-primary` (#060606), `--bg-secondary` (#1f1f1f), `--bg-tertiary` (#252525), `--bg-hover` (#313131), `--text-primary` (#ffffff), `--text-secondary` (#e5e5e5), `--text-muted` (#7a7a8a), `--text-caption` (#8a8a8a), `--border-default` (#252525), `--border-strong` (#3d3d3d), `--border-accent` (#c5ff4a), `--text-success` (#c5ff4a), `--text-error` (#ff4a4a), `--border-error` (#ff4a4a), `--border-success` (#c5ff4a). Plus `--color-void` (#000000), `--color-olive-depth` (#597321), `--color-moss-shadow` (#314013).
- Contrast pairing: light backgrounds pair with dark text, dark backgrounds with light text — enforce in every theme.
- Light mode background must not be pure white; use #fefefe where needed.
- Radius: `--radius-sm` (2px), `--radius-md` (4px), `--radius-lg` (4px). Shadows: `--shadow-glow` (0 0 8px 0 rgba(197,255,74,0.45)).
- Spacing: `--spacing-gap` (16px), `--transition-fast` (150ms), `--transition-normal` (250ms), `--ease-standard` (cubic-bezier(.4,0,.2,1)).
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode.** Provide tokens under `@media (prefers-color-scheme: dark)` and `.dark`. Theme switching via `localStorage` with `prefers-color-scheme` fallback. Visible toggle with `aria-pressed`/`aria-label`.

**1.4 Flexbox First.** All layouts use flexbox. Every flex container defaults to `align-items: center` unless justified. Mobile-first, responsive, no horizontal scroll.

**1.5 Tailwind CSS.** Use Tailwind (or clean custom CSS via `@layer`/`@apply`) mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).

**1.6 Google Fonts.** Text: PT Serif (300), Inter Tight (400/500/600), JetBrains Mono (400/500/600) via Google Fonts `<link>`. Icons: Google Material Symbols. No inline SVGs or local icon files except the dotted-globe SVG illustration (pointillist dots, allowed as the single hero graphic).

## 2. Design Tokens (zkPass Style)

- Canvas #060606, card #1f1f1f, raised #252525, hover #313131.
- Accent #c5ff4a only in three roles: filled CTA, glowing border, one italic accent word per headline.
- Display: PT Serif 300, negative tracking (-0.025em at 56px → -0.035em at 130px), line-height 0.88–0.95, OpenType "liga","dlig".
- UI: Inter Tight, uppercase labels 0.18–0.26em tracking.
- Code: JetBrains Mono 13px, line-height 1.55.
- Radius: tags 2px, cards 0px, buttons 4px, pills 9999px.
- No drop shadows except the lime glow on CTAs.
- Surface separation via border color steps, never shadows.

## 3. Component Requirements

**Buttons:** default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), hover (brightness/shadow, cursor pointer), focus (ring via CSS vars), active (scale 0.97), loading (spinner, disabled, no double-click), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback via --text-success/--text-error).

**Cards:** default (flex, subtle border, elevation via --bg-secondary), hover (translateY -2px), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance).

**Forms/Inputs:** empty, focused, filled, valid, invalid, disabled, read-only. Flex wrapper with label, input, error container.

**Modals:** opening/open/loading/success/error/closing animated. Centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## 4. Core UX Rules

- Responsive, fluid, no horizontal overflow.
- CSS transitions on state changes, respect `prefers-reduced-motion`.
- a11y: contrast both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 5. Deliverables

Files: `index.html`, `style.css`, `script.js`. Single deferred entry-point reference. One consistent naming convention (BEM). No lorem-ipsum where real copy is supplied; placeholders only where genuinely unspecified.

## 6. Page Sections

Build these sections in order:

1. **Top Navigation Bar** — sticky, black bg, 1px bottom border #252525, height 64px, max-width 1280px centered. Left: fictional wordmark in PT Serif 300 20px white. Center: 5 ghost nav items uppercase Inter Tight 13px 500 0.18em white. Right: lime CTA button with glow.
2. **Hero** — #060606 canvas. Eyebrow bracket label `[ BUILT FOR HUMANS & AGENTS ]` Inter Tight 11px 500 uppercase 0.22em #7a7a8a. Headline PT Serif 300 89px line-height 0.94 tracking -3.1px white, with one italic #c5ff4a accent word. Body Inter Tight 14px 400 line-height 1.55 #e5e5e5 max-width 480px centered. Dotted-globe SVG (white dots opacity 0.4–0.7) behind headline. Lime CTA below. Full-width 6px #c5ff4a divider bar beneath hero.
3. **Features** — 3 sharp cards (#1f1f1f, 1px #252525, padding 40px, radius 0). Each: tracked metadata label, PT Serif 300 32–40px title, Inter Tight 14px body, code-block panel at bottom with JetBrains Mono and lime tokens + status pill.
4. **How It Works** — 3 steps, numbered metadata labels, serif titles, body text, left/right mirrored layout.
5. **Testimonials** — 2–3 cards with quote, author, role. Monochrome, border separation.
6. **Pricing** — 3 tiers. Middle tier highlighted with lime border/glow. Feature lists, CTA per tier.
7. **FAQ** — accordion with expand/collapse, focus states, aria-expanded.
8. **Final CTA** — centered headline with one italic lime accent word, lime button.
9. **Footer** — secondary links, wordmark, copyright. Monochrome.

Invent a fictional brand name and all copy. Use the dotted globe as the only large graphic. No photographs. Output only the finished prompt.Build a complete dark "encrypted terminal meets editorial broadsheet" landing page. Reuse the visual style only: invent a fictional brand name, product, and all copy. Never use the real brand name "zkPass", its logo, trademarks, or product names (TransGate, TransGate SDK, $ZKP, etc.) anywhere. All user-facing copy in English.

## 1. Strict Architectural Rules

**1.1 CSS-First, Zero Inline CSS.** All styling in `style.css`. Forbid `style="..."`. Target via classes/IDs. Semantic, styling-agnostic HTML.

**1.2 CSS Variables & Theme Tokens.** Define in `:root` and `.dark` / `@media (prefers-color-scheme: dark)`:
- Colors: `--primary` (#c5ff4a), `--secondary` (#597321), `--bg-primary` (#060606), `--bg-secondary` (#1f1f1f), `--bg-tertiary` (#252525), `--bg-hover` (#313131), `--text-primary` (#ffffff), `--text-secondary` (#e5e5e5), `--text-muted` (#7a7a8a), `--text-caption` (#8a8a8a), `--border-default` (#252525), `--border-strong` (#3d3d3d), `--border-accent` (#c5ff4a), `--text-success` (#c5ff4a), `--text-error` (#ff4a4a), `--border-error` (#ff4a4a), `--border-success` (#c5ff4a), plus `--color-void` (#000000), `--color-olive-depth` (#597321), `--color-moss-shadow` (#314013).
- Contrast pairing enforced in every theme. Light-mode background must not be pure white; use #fefefe where needed.
- Radius: `--radius-sm` (2px), `--radius-md` (4px), `--radius-lg` (4px). Shadow: `--shadow-glow` (0 0 8px 0 rgba(197,255,74,0.45)).
- Spacing: `--spacing-gap` (16px), `--transition-fast` (150ms), `--transition-normal` (250ms), `--ease-standard` (cubic-bezier(.4,0,.2,1)).
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode.** Tokens under `@media (prefers-color-scheme: dark)` and `.dark`. Switching via `localStorage` with `prefers-color-scheme` fallback. Visible toggle with `aria-pressed`/`aria-label`.

**1.4 Flexbox First.** Flexbox layouts; every flex container defaults to `align-items: center` unless justified. Mobile-first, responsive, no horizontal scroll.

**1.5 Tailwind CSS.** Use Tailwind or clean custom CSS via `@layer`/`@apply`, mapping to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).

**1.6 Google Fonts.** PT Serif (300), Inter Tight (400/500/600), JetBrains Mono (400/500/600) via Google Fonts `<link>`. Icons: Google Material Symbols. No inline SVGs or local icon files except the dotted-globe hero illustration.

## 2. Style Tokens

- Canvas #060606, card #1f1f1f, raised #252525, hover #313131.
- Accent #c5ff4a only in three roles: filled CTA, glowing border, one italic accent word per headline.
- Display: PT Serif 300, negative tracking, line-height 0.88–0.95, OpenType "liga","dlig".
- UI: Inter Tight, uppercase labels 0.18–0.26em tracking.
- Code: JetBrains Mono 13px, line-height 1.55.
- Radius: tags 2px, cards 0px, buttons 4px, pills 9999px.
- No drop shadows except lime glow on CTAs. Surface separation via border color steps.

## 3. Component Requirements

**Buttons:** default (flex, center, gap 0.5rem, min 44x44px), hover (brightness/shadow, pointer), focus (ring via vars), active (scale 0.97), loading (spinner, disabled, no double-click), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback).

**Cards:** default (flex, subtle border, elevation via --bg-secondary), hover (translateY -2px), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance).

**Forms/Inputs:** empty, focused, filled, valid, invalid, disabled, read-only. Flex wrapper with label, input, error container.

**Modals:** opening/open/loading/success/error/closing animated. Centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## 4. Core UX Rules

Responsive, fluid, no horizontal overflow. CSS transitions on state changes, respect `prefers-reduced-motion`. a11y: contrast both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` for dynamic feedback. Mandatory visual feedback on every interaction. Destructive actions distinct in both themes.

## 5. Deliverables

Files: `index.html`, `style.css`, `script.js`. Single deferred entry-point reference. One consistent naming convention (BEM). No lorem-ipsum where real copy supplied; placeholders only where genuinely unspecified.

## 6. Page Sections

Build in order:

1. **Top Nav** — sticky, black bg, 1px bottom border #252525, height 64px, max-width 1280px centered. Left: fictional wordmark PT Serif 300 20px white. Center: 5 ghost nav items uppercase Inter Tight 13px 500 0.18em white. Right: lime CTA with glow.
2. **Hero** — #060606 canvas. Eyebrow bracket `[ BUILT FOR HUMANS & AGENTS ]` Inter Tight 11px 500 uppercase 0.22em #7a7a8a. Headline PT Serif 300 89px line-height 0.94 tracking -3.1px white with one italic #c5ff4a accent word. Body Inter Tight 14px 400 line-height 1.55 #e5e5e5 max-width 480px centered. Dotted-globe SVG (white dots opacity 0.4–0.7) behind headline. Lime CTA below. Full-width 6px #c5ff4a divider bar beneath.
3. **Features** — 3 sharp cards (#1f1f1f, 1px #252525, padding 40px, radius 0). Each: tracked metadata label, PT Serif 300 32–40px title, Inter Tight 14px body, code-block panel at bottom with JetBrains Mono and lime tokens + status pill.
4. **How It Works** — 3 steps, numbered metadata labels, serif titles, body text, mirrored layout.
5. **Testimonials** — 2–3 cards with quote, author, role. Monochrome, border separation.
6. **Pricing** — 3 tiers. Middle tier highlighted with lime border/glow. Feature lists, CTA per tier.
7. **FAQ** — accordion with expand/collapse, focus states, aria-expanded.
8. **Final CTA** — centered headline with one italic lime accent word, lime button.
9. **Footer** — secondary links, wordmark, copyright. Monochrome.

Invent a fictional brand name and all copy. Use the dotted globe as the only large graphic. No photographs. Output only the finished prompt.
