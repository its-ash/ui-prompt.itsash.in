## Role
You are an Expert Frontend Developer. Build a complete, production-ready landing page implementing the **Outseta visual style** (sunset marketplace at golden hour) for a **fictional brand** — invent a fictional brand name, product, and copy. Never use the real brand name "Outseta", its logo, trademarks, or product names anywhere in the page.

## Deliverables
Three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere. Use one consistent class-naming convention (BEM) across the entire deliverable. All user-facing copy must be in English.

## Architecture Rules (Mandatory)
- **CSS-First & Zero Inline CSS:** All styling lives in `style.css`. Target via class/ID selectors only. HTML must stay clean, semantic, and free of visual styling.
- **CSS Variables:** Store all tokens in `:root` (and theme classes). Required color tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Also define `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`. Enforce contrast pairing for every theme.
- **Light Mode Background:** Do not default to pure white; use `#fefefe` where near-white is needed.
- **Dark Mode:** Define dark tokens under `@media (prefers-color-scheme: dark)` and/or `.dark`. Background/text variables must switch seamlessly. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** Use `display: flex` with `align-items: center` by default (exception only when justified). Layouts must be mobile-responsive, converting rows to columns on small viewports, with no horizontal scrolling.
- **Tailwind CSS:** Use Tailwind (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless another framework is requested. Utility classes must map back to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons (Google Fonts Mandatory):** Load Google Fonts via `<link>`/`@import` and bind to `--font-base`. Use Google Material Symbols/Icons. No raw inline SVGs or local icon files.

## Theme Tokens (Outseta Style)
Define these in `:root`:

Colors:
- `--color-aubergine: #240029` (primary text, icon strokes, hairline borders, dark-section fill)
- `--color-fuchsia-signal: #df37a7` (primary action fill only)
- `--color-heather: #6d526d` (outlined action borders, linked labels)
- `--color-glowstick: #ffcc11` (hero gradient terminal only)
- `--color-plum-tinted: #d4ccd4` (default hairline border)
- `--color-ink: #222222` (icon strokes, link text)
- `--color-smoke: #bbadbb` (secondary dividers)
- `--color-charcoal: #333333` (body text fallback)
- `--color-frost: #767676` (input border resting state)
- `--color-forest: #15803d` (success text)
- `--color-mint: #bbf7d0` (green outline accent)
- `--color-honeydew: #dcfce7` (success badge background)
- `--color-strawberry: #ef4444` (red outline accent)
- `--color-mango: #22c55e` (green outline accent)
- `--color-canvas: #ffffff` (page background, card surface)
- `--color-hero-glow: linear-gradient(145deg, #ffbdd3, #fff1bd 40%, #fff1bd 60%, #ffcb0f)` (hero gradient)

Fonts (Google Fonts): Inter (weights 400,500,600,700) as `--font-inter-var`; Boldonse or Inter Tight 800 as `--font-kaio` (display); JetBrains Mono (400) as `--font-jetbrains-mono`; Permanent Marker (400) as `--font-permanent-marker`. Bind Inter to `--font-base`.

Spacing (base 4px): `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-12: 12px`, `--spacing-16: 16px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-48: 48px`, `--spacing-96: 96px`.

Radius: cards 14px, pills/badges 999px, images 6px, inputs 3px, buttons 6px. Shadows: card `0 0 0 1px rgba(41,0,41,0.11), 0 2px 2px rgba(32,0,36,0.05)`; button `inset 0 0 0 1px rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05)`.

## Style Rules
- Kaio 700 for every display headline at 56-80px; never pair with a second bold display font.
- Reserve `#df37a7` for one element per viewport — the primary CTA only. Not for links, borders, or text accents.
- Tint every shadow with brand purple `rgba(32-41,0,36,x)`; never neutral black shadows.
- JetBrains Mono at 0.10em tracking for section eyebrows above every H1/H2.
- Apply the 145deg sunset gradient to full-bleed hero bands only.
- Default radius hierarchy: 14px cards / 6px buttons / 3px inputs.
- Place 1-3 Permanent Marker annotations on the hero only, each pointing at a specific element with a hand-drawn SVG arrow.
- Text colors: only `#240029` (primary) and `#6d526d` (secondary), plus `#d4ccd4` for muted helpers. No neutral black `#000000` for shadows/text/borders.
- No 3D, illustration, or abstract graphics. UI-dominant, no photography.

## Component Requirements
- **Buttons:** Default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px touch target), Hover (brightness/shadow, cursor pointer), Focus (distinct focus ring via CSS vars), Active (transform scale 0.97), Loading (disabled, CSS spinner, no dimension distortion), Disabled (opacity 0.5, greyscale, not-allowed), Success/Error (temporary feedback via `--text-success`/`--text-error`). Primary Filled: `#df37a7` fill, white text, 6px radius, 12px 24px padding, Inter 16px weight 600. Ghost Outlined: transparent bg, 1px solid `#6d526d`, `#240029` text, 6px radius, 12px 24px padding, Inter 16px weight 500.
- **Cards:** Default (flex, subtle borders, elevation via `--bg-secondary` + vars), Hover (elevation/shadow shift or translateY -2px), Focus-within (border highlight), Loading skeleton (shimmer CSS, no layout jump), Empty state (Google Icon + guidance text).
- **Inputs:** States Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Flex container wrapping label, input, error feedback. Background `#ffffff`, border 1px solid `#767676`, radius 3px, padding 12px 16px, Inter 16px weight 400 text `#240029`, placeholder `#6d526d`.
- **Modal:** Opening/Open/Loading/Success/Error/Closing animated via CSS transitions. Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## Page Sections
Build these sections in order:
1. **Hero:** Full-bleed gradient band (`--color-hero-glow`), centered max-width 800px stack: JetBrains Mono 12px eyebrow at 0.10em tracking, Kaio 80px weight 700 headline in `#240029`, Inter 20px subhead, dual CTA row (primary filled + ghost outlined), then 3-column showcase card row offset upward into gradient with 16px gaps. 1-3 Permanent Marker annotations with hand-drawn SVG arrows.
2. **Features:** 3 cards (14px radius, 24px padding, purple-tinted shadow). Each: Phosphor icon, heading, body text.
3. **How It Works:** 3 numbered steps — 24px Aubergine circle with white 12px weight 600 number, 12px gap, Inter 16px weight 500 text `#240029`. No card background.
4. **Testimonials:** 3-up grid. White card, 14px radius, 32px padding, card shadow. 40px circular Aubergine avatar with white initial, name Inter 16px weight 600 `#240029`, role Inter 14px weight 400 `#6d526d`, quote Inter 14px line-height 1.5.
5. **Pricing:** 3 tiers. Cards with 14px radius, 24px padding. Highlight middle tier. Price, feature list, CTA button.
6. **FAQ:** Accordion-style questions with expand/collapse via CSS transitions.
7. **Final CTA:** Full-bleed `#240029` background, 80px vertical padding, white text. Kaio 56px weight 700 headline in white, Inter 16px body in `#d4ccd4`, primary filled button right-aligned, product screenshot card with 14px radius on right edge.
8. **Footer:** White background, 1px top border `#d4ccd4`. Max-width 1200px centered. Logo (concentric-circle mark + Kaio 20px wordmark) left, nav links, social icons (Font Awesome 6 Brands), secondary links.

Also include a **Navigation Bar:** sticky top, white bg, 1px bottom border `#d4ccd4`, max-width 1200px centered, 16px vertical padding. Logo left, Inter 14px weight 500 nav links with chevron dropdowns, GitHub icon, Log in ghost link, primary filled button right. Small "Migrating from another platform?" sub-bar link with arrow at right.

## UX & Micro-Interactions (Global)
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## Output
Output only the finished coding-AI prompt. No preamble, no closing commentary. Mirror Sections 1–4 structure with numbered headers and bolded sub-rules. Keep all CSS variable names, class names, and file names in English/ASCII. Translate any non-English copy guidance to English; user-facing copy must be in English. If the request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause.
