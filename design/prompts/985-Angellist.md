# Coding-AI Prompt: Angellist-Style Landing Page (Fictional Brand)

## 1. Project Overview
Build a complete, responsive landing page for a **fictional brand** (invent a name, product, and copy; never use "Angellist", its logo, trademarks, or product names). Theme: light editorial annual on matte paper. Deliverable: separate `index.html`, `style.css`, `script.js`. No inline CSS; no inline `<script>` beyond a single deferred entry-point reference.

## 2. Mandatory Architecture Rules
- **CSS-First / Zero Inline CSS:** All styling in `style.css`. No `style="..."` attributes. Class/ID selectors only. Semantic, style-agnostic HTML.
- **CSS Variables:** Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)` for dark mode). Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`. Contrast pairing enforced for every theme.
- **Light Mode Background:** Use `#ccd5d6` (Sage Mist) as dominant canvas; use `#fefefe` where near-white needed (not `#ffffff` for page bg; cards may use `#ffffff`).
- **Dark Mode:** Always defined under `@media (prefers-color-scheme: dark)` and `.dark`. Seamless variable switching. Persist choice via `localStorage`, fallback to `prefers-color-scheme`. Visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox:** `display: flex` with `align-items: center` default unless justified. Mobile-responsive (rows→columns), no horizontal scroll.
- **Framework:** Tailwind CSS (or clean custom CSS via `@layer`/`@apply`) mapping utilities to CSS variables / reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts mandatory. Text: Inter Tight (substitute for angellistDisplay) and Inter (substitute for angellist) via `<link>`/`@import`, bound to `--font-base`. Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 3. Theme Tokens (Angellist-style, fictional brand)
Colors: `--color-inkwell-teal: #001d21`; `--color-vellum-lavender: #bdbbff`; `--color-sage-mist: #ccd5d6`; `--color-paper-white: #ffffff`; `--color-bone: #f9f9f7`; `--color-driftwood: #eaebea`; `--color-slate-veil: #647577`; `--color-pewter-deep: #43585a`; `--color-gunmetal: #213a3d`; `--color-patina: #002b31`; `--color-frost: #a7b0b1`; `--color-pebble: #859394`; `--color-mist: #b2bfc1`; `--color-olive-violet-wash: linear-gradient(98.78deg, rgb(127,120,51) 6.69%, rgb(137,142,229) 40.89%, rgb(137,142,229) 83.02%, rgb(134,123,54) 100.19%)`.

Typography: display font weight 400 only; body font weights 400/500/550. Type scale tokens `--text-caption` (13px/1.5/-0.002em) through `--text-display-2xl` (288px/0.75/-0.025em) per spec. OpenType features `"lnum" on, "tnum" on, "ss01" on, "ss02" on, "ss03" on` on both families.

Spacing: 8px base; tokens `--spacing-8`…`--spacing-224`. Radius: tags/cards/buttons/links-pill = 9999px; text highlight = 2px. Page max-width 1280px. Section gap 80–96px. Card padding 24px. Element gap 8px.

## 4. Component Requirements
- **Pill Button (Filled):** 9999px radius, 4px 12px padding, Inkwell Teal fill, Paper White text, weight 500 at 14px, letter-spacing -0.004em. No border/shadow. States: default, hover (brightness/shadow + cursor pointer), focus (ring via CSS vars), active (scale 0.97), loading (spinner, disabled, no double-click), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`).
- **Pill Button (Ghost):** 9999px, 1px Paper White border, transparent fill, Paper White text.
- **Section Badge:** 9999px, Vellum Lavender fill, Inkwell Teal text, weight 500 at 13–14px, 4px 10px padding.
- **Nav Bar:** Full-width Inkwell Teal, logo left (Paper White), links center (14px/500), ghost pill CTA right. Flat, no shadow.
- **Display Headline Hero:** 144–288px, weight 400, line-height 0.75–0.80, letter-spacing -0.025em, fill Olive→Violet gradient. Mixed-weight duotone letterforms within a word.
- **Display Headline Section:** 60–80px, Inkwell Teal, line-height 1.05–1.10, letter-spacing -0.02em, optional lavender highlight on key phrase.
- **Text Highlight:** Vellum Lavender rectangle behind 1–2 words, 2px radius, flush behind baseline, Inkwell Teal text on top (AAA contrast).
- **Feature Image Card:** Three equal cards, 9999px radius, no shadow, full-bleed image or solid color (Vellum Lavender / Inkwell Teal), Paper White body text bottom-left 16px/400.
- **Horizontal Band Stack:** Full-bleed 5–7 bands 50px each, sequence Sage Mist → Driftwood → Frost → Pebble → Pewter Deep → Gunmetal → Inkwell Teal. No text/dividers.
- **Two-Column Split:** 60/40, heading left, body right 18px/1.6, vertically centered, Sage Mist bg.
- **Body Paragraph:** 18px/1.6/-0.004em, Inkwell Teal on Sage Mist, max ~50ch, left-aligned only.
- **Footer Anchor:** Pill, Patina bg, Paper White text, 9999px, same padding as nav ghost.
- **Card states (if interactive):** default, hover (translateY -2px), focus-within, loading skeleton (shimmer), empty state (icon + text).
- **Form/Input states:** empty, focused (ring), filled, valid, invalid (error border/text/icon), disabled, read-only. Flex wrapper label+input+error container.
- **Modal:** opening/open/loading/success/error/closing animated; centered flex, backdrop, Google Icon close, Esc/overlay close, focus trap.

## 5. UX & Micro-Interactions
Responsive by default (fluid, breakpoints, no overflow). CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`. Accessibility: sufficient contrast both modes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback. Mandatory visual feedback on every interaction. Destructive actions visually distinct in both themes.

## 6. Sections to Build
Hero (full-bleed Inkwell Teal, monumental gradient display headline 260–288px, subline 18px Bone, no centered lockup), Features (3 pill cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. Use Horizontal Band Stack between major sections. 60/40 split for editorial blocks.

## 7. Do/Don't (enforce)
- Display type min 60px when meaningful; 9999px radius on all buttons/tags/badges/cards; gradient only on display headlines; lavender highlight only with Inkwell Teal text (8:1+); weight 550 for labels/buttons, 500 for inline emphasis, never 700+; body 18px canonical, 16px floor for chrome; separate sections with band stack.
- No pure white display text on dark (gradient is display color); no second accent; no 2/4px radii on interactives (highlight only); no centered body copy; no drop shadows (surface tone shifts only); no breaking pill on nav CTA; no gradient below 60px.

## 8. Naming & Deliverables
Consistent BEM naming throughout. No lorem-ipsum where real copy supplied; placeholders only where unspecified. No new elements in edit mode (N/A here—fresh build). If a style change needs markup not present, stop and ask.

## 9. Output
Output only the finished prompt content above as instructions to the coding AI. No preamble. Write all user-facing copy in English. Never use the real brand name/logo/trademarks/product names; invent fictional ones. Translate any non-English guidance to English. Keep CSS vars, class names, file names in English/ASCII.
