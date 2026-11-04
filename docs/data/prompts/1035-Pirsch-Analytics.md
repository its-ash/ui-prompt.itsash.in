# Landing Page — Pirsch Analytics Style (Fictional Brand)

You are a senior front-end engineer. Build a complete, production-ready landing page as three separate files: `index.html`, `style.css`, and `script.js`. Do not write any code in this response other than the deliverable files when asked; this prompt is your specification.

## 1. Project Overview

Build a single-page marketing landing page for a **fictional** analytics SaaS product. Invent a fictional brand name, product name, tagline, and all copy. Never use the real brand name "Pirsch", its logo, trademarks, or product names anywhere in the page, markup, or assets. The visual language must reuse the Pirsch style reference: warm cream paper canvas, ink-black hairline borders, sunshine-yellow highlighter accent, DM Sans typography, sticky-note rounded cards, flat ink-on-paper aesthetic.

## 2. Mandatory Architecture Rules

**2.1 CSS-First, Zero Inline CSS.** All styling lives in `style.css`. No `style="..."` attributes in HTML. Target via class/ID selectors only. HTML stays semantic and styling-agnostic.

**2.2 CSS Variables & Tokens.** Define all tokens in `:root` and theme classes. Required tokens:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Theme-specific: `--color-sunshine-highlight` (#ffda6e), `--color-mint-signal` (#6ece9d), `--color-cream-paper` (#f8f5ed), `--color-ink` (#000000), `--color-graphite` (#707070).
- Radius: `--radius-sm` (6px), `--radius-md` (12px), `--radius-lg` (24px), `--radius-pill` (9999px).
- Shadows: `--shadow-sm`, `--shadow-md` (both set to `none` — this system is flat).
- Spacing: `--spacing-gap` (16px), plus `--spacing-8`, `--spacing-16`, `--spacing-24`, `--spacing-32`, `--spacing-48`, `--spacing-64`, `--spacing-128`, `--spacing-192`.
- Transitions: `--transition-fast` (150ms ease), `--transition-normal` (250ms ease), `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: `--font-base` bound to DM Sans.

**2.3 Contrast Pairing.** Light backgrounds pair with dark text; dark backgrounds pair with light text. Enforce in every theme.

**2.4 Light Mode Background.** Use `#f8f5ed` (cream paper), never pure white. Use `#fefefe` only where a near-white is genuinely needed.

**2.5 Mandatory Dark Mode.** Provide dark tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class. In dark mode, invert to a dark canvas with light text while preserving the two-accent discipline (yellow and mint remain accent-only). Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle with correct `aria-pressed`/`aria-label`.

**2.6 Flexbox Layout.** All flex containers default to `align-items: center`. Mobile-first responsive; convert rows to columns on small viewports; no horizontal scroll.

**2.7 Tailwind CSS.** Use Tailwind via `@layer`/`@apply` or utility classes mapping back to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).

**2.8 Google Fonts.** Load DM Sans (weights 400, 500) and Google Material Symbols via `<link>`/`@import`. Bind DM Sans to `--font-base`. Activate OpenType features `"ss03", "ss04"` globally. Forbid raw inline SVGs or local icon files.

## 3. Theme & Visual Language

- Canvas: `#f8f5ed` cream paper, unbroken across sections.
- Text: `#000000` ink for headings/emphasis, `#707070` graphite for body/captions.
- Borders: 1px solid `#000000` hairline on cards, images, inputs, grouped elements; 1px `#707070` for subtle dividers.
- Accent: `#ffda6e` sunshine highlight — rationed to one filled CTA per view plus small callout fills. Never large surfaces.
- Status: `#6ece9d` mint signal — status dots, positive chips only. Never CTA backgrounds.
- Radius: 24px cards/buttons/large tiles; 12px images/smaller tiles; 9999px tags/step badges; 6px inputs.
- Zero shadows, blurs, gradients, overlays, decorative fills. Flat ink-on-paper.
- Typography: DM Sans only. Display 64px weight 500, letter-spacing -0.016em, line-height 1.25. Step badges uppercase 14px weight 500, letter-spacing +0.286em.
- Max container width 1200px, centered. Section gaps 64px. Card padding 32px. Element gap 16px.

## 4. Sections Required

Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Hero:** Centered stack — pill step badge (24x24 left cell with numeral, step name uppercase) above a 64px display headline, then 18px graphite subtext capped ~640px, then sunshine filled CTA button. 64px section padding.

**Features:** 2-column card grid (3 cards, 32px gap). Each card: cream fill, 24px radius, 1px ink border, 32px padding, 24px ink heading, 18px graphite body. No shadow.

**How It Works:** 3 numbered step badges (pill, 9999px radius, split zones) with display headline and subtext per step.

**Testimonials:** Cards with quote, author name, role, avatar tile (12px radius, cream fill, 1px ink border).

**Pricing:** 3 tiers. Each tier card with name, price, feature list, CTA. Middle tier may use sunshine highlight for its CTA only.

**FAQ:** Accordion-style questions with smooth CSS transitions, keyboard accessible.

**Final CTA:** Centered stack — avatar tile → 64px display question → 18px graphite subtext → sunshine button. 64px padding top/bottom.

**Footer:** Secondary links, minimal, graphite text, 1px graphite dividers.

## 5. Component Specifications

**Buttons:** Flex (`align-items: center; justify-content: center; gap: 0.5rem`), min 44x44px touch target. States: hover (brightness/shadow shift, cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (disabled, CSS spinner, no dimension distortion), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).

**Cards:** Flex layout, subtle borders, elevation via `--bg-secondary` and vars. Hover (translateY -2px), focus-within (highlight border), loading skeleton (shimmer), empty state (Google Icon + guidance text).

**Forms/Inputs:** States empty/focused/filled/valid/invalid/disabled/readonly. Flex container wrapping label, input, error feedback container.

**Modal:** Opening/open/loading/success/error/closing animated via CSS transitions. Centered flex, backdrop, Google Icon close button, focus trapping, Esc/overlay close.

## 6. Core UX Rules

- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth transitions on all state changes, respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never color-only state communication, semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 7. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point reference.
- One consistent class-naming convention (BEM) throughout.
- No lorem-ipsum-only submissions; use real invented copy/labels. Placeholders only where content genuinely unspecified.
- Edit-mode rules do not apply (this is a from-scratch build).

## 8. Output

Output only the finished prompt itself — no preamble, no closing commentary. Use numbered headers and bolded sub-rules. All copy in English. All CSS variable names, class names, file names in English/ASCII. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause.
