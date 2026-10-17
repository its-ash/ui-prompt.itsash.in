# Landing Page Build Prompt — "Basis Theory" Visual Style (Fictional Brand)

You are an expert front-end engineer. Build a complete, production-ready landing page using the visual style described below. Reuse the style only: invent a fictional brand name, product, and all copy. Never use the real brand name "Basis Theory", its logo, trademarks, or product names anywhere in the page.

## 1. Architecture & Rules

- **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes in HTML. Target via class/ID selectors only.
- **CSS Variables:** Store all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`). Required tokens:
  - Colors: `--color-paper`, `--color-ink`, `--color-graphite`, `--color-cloud`, `--color-steel`, `--color-slate`, `--color-charcoal`, `--color-aqua-relay`, `--color-lime-notice`, `--color-volt-lime`, `--color-signal-sweep`
  - Contrast pairing enforced for both themes.
  - Light mode background must not be pure white where avoidable; use `#fefefe` for near-white surfaces.
  - Radius/shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, plus the card elevation stacks defined below.
  - Spacing/transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
  - Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
- **Mandatory Dark Mode:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class. Persist user choice via `localStorage`, fall back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** All layouts use flexbox. Every flex container defaults to `align-items: center` unless explicitly justified. Convert rows to columns on small viewports. No horizontal scrolling.
- **Tailwind CSS:** Use Tailwind (or clean custom CSS via `@layer`/`@apply`). Utilities map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Google Fonts & Icons (Mandatory):** Text via Google Fonts (Inter, Neo Grotesk substitutes Arial Narrow/Helvetica Neue, Chivo Mono, Kode Mono). Icons via Google Material Symbols. No inline SVGs or local icon files.

## 2. Theme Tokens (Light)

- `--color-paper`: #ffffff (page canvas, light cards, nav)
- `--color-ink`: #18181b (headings, primary text, logo, dark bands)
- `--color-graphite`: #27272a (dark cards, code panels, utility buttons)
- `--color-cloud`: #f4f4f5 (muted surfaces, pale cards)
- `--color-steel`: #d4d4d8 (hairline separators, diagram outlines)
- `--color-slate`: #71717a (nav labels, supporting copy, inactive tabs)
- `--color-charcoal`: #3f3f46 (emphasized body copy)
- `--color-aqua-relay`: #94faf0 (filled conversion buttons, selected markers, small diagram highlights)
- `--color-lime-notice`: #d4f796 (announcement strips, promotional controls)
- `--color-volt-lime`: #bff660 (developer buttons, compact highlights)
- `--color-signal-sweep`: linear-gradient(90deg, #07cddf 52%, #9eed15 100%) (rare connector accent)

Spacing scale (4,8,10,12,16,22,24,30,32,40,48,56,72,88,112,120). Radius: cards 16px, links 4px, pills 1000px, images 1000px, buttons 12px. Shadows: subtle inset, subtle-2 inset, plus card elevation stacks:
- Cloud Product Card: `0 0 0 1px rgba(0,0,0,.08), 0 .602px 2.288px -1.25px rgba(0,0,0,.18), 0 2.289px 8.696px -2.5px rgba(0,0,0,.16), 0 10px 38px -3.75px rgba(0,0,0,.06)`
- Graphite Product Card: `0 .602px 2.529px -1.25px rgba(0,0,0,.18), 0 2.289px 9.612px -2.5px rgba(0,0,0,.16), 0 10px 42px -3.75px rgba(0,0,0,.06)`
- White Technical Card: `0 2.767px 2.214px rgba(0,0,0,.02), 0 6.65px 5.32px rgba(0,0,0,.03)`

Typography tokens: `--text-nav` (Inter 500 14px/1), `--text-body` (Inter 500 14px/1.4 -0.098px), `--text-body-compact` (Inter 500 14px/1.14 -0.14px), `--text-button-label` (Inter 500 14px/1 -0.14px), `--text-technical-label` (Chivo Mono 400 14px/1.5), `--text-feature-heading` (Neo Grotesk Medium 500 32px/1.2 -0.96px), `--text-testimonial` (Inter 500 32px/1.3 -1.28px), `--text-display-section` (Neo Grotesk Medium 400 56px/1 -2.24px), `--text-display-section-inverse` (Neo Grotesk Medium 500 56px/1 -2.24px), `--text-display-hero` (Neo Grotesk Medium 400 80px/.8 -3.2px).

## 3. Dark Mode Tokens

Provide inverted contrast pairings so light backgrounds pair with dark text and dark backgrounds pair with light text. Persist choice via `localStorage` with `prefers-color-scheme` fallback. Include visible toggle with `aria-pressed`/`aria-label`.

## 4. Component Requirements

- **Buttons:** Default (flex, align-items center, justify-content center, gap .5rem, min 44x44px), Hover (brightness/shadow, cursor pointer), Focus (distinct focus ring via CSS vars), Active (transform scale .97), Loading (disabled, spinner/animated icon, no dimension change), Disabled (opacity .5, greyscale, not-allowed), Success/Error (temporary feedback via `--text-success`/`--text-error`).
- **Cards:** Default (flex, subtle borders/elevation), Hover (elevation shift / translateY -2px), Focus-within (border highlight), Loading skeleton (shimmer), Empty state (icon + guidance text).
- **Forms/Inputs:** Empty, Focused, Filled, Valid, Invalid, Disabled, Read-only states. Flex container with label, input, error feedback.
- **Modals:** Opening/Open/Loading/Success/Error/Closing animated. Centered flex, backdrop, Google Icon close button, focus trapping, Esc/overlay close.

## 5. Micro-Interactions & UX

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 6. Page Sections (in order)

1. **Lime Announcement Strip:** Full-width `#d4f796`, 0px radius, 8px vertical / 16px horizontal padding, 14px/21px Inter 500 `#18181b` at 80% opacity, centered single line.
2. **Public Navigation Bar:** `#ffffff`, 14px Inter 500 labels `#71717a`, 16px gaps between utility controls, 24px grouping gaps, logo/icons `#18181b`, 4px rounding for small link-focus, 1px `#d4d4d8` separator below. Graphite Header Button (`#27272a` fill, white 14px Inter 500, 12px radius, 8px 16px padding, inset `0 0 0 2px rgba(255,255,255,.13)`).
3. **Hero (two-column):** Left: display headline in Neo Grotesk Medium 80px/64px weight 400 -3.2px tracking `#18181b`; 14px Inter supporting copy `#71717a`; capability row (3 items, 16px gaps, 12px dark square icon tile, 14px Inter 500 `#18181b`, 8px icon-to-label); Aqua Conversion Button (`#94faf0` fill, `#18181b` 14px Inter 500, 16px radius, 12px 16px 12px 22px padding, 8px gap to arrow icon). Right: layered payment diagram — overlapping `#ffffff`/`#f4f4f5` sheets 16px radius, `#d4d4d8` outlines, `#27272a` central tile, `#94faf0`/`#bff660` tiny accents.
4. **Features (3 cards):** Cloud Product Card style (`#f4f4f5`, 16px radius, card elevation, 0px outer padding, edge-to-edge visuals) or Graphite Code Card (`#27272a`, 16px radius, code in 14px/21px Chivo Mono/Kode Mono, white core syntax with colored accents only for code content).
5. **How It Works (3 steps):** Numbered steps with icons, concise copy, technical labels in Chivo Mono.
6. **Testimonials:** Inverse Testimonial Panel — `#18181b` band, white 56px Neo Grotesk Medium heading, 32px/41.6px Inter 500 quote `rgba(255,255,255,.5)`, cards `#27272a` 16px radius.
7. **Pricing (3 tiers):** Cards with tier name, price, feature list, CTA button (Aqua for recommended, Graphite/Translucent for others).
8. **FAQ:** Accordion-style, accessible, keyboard operable.
9. **Final CTA:** Large headline + Aqua Conversion Button.
10. **Footer:** Secondary links, logo, copyright.

## 7. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point reference.
- Consistent class-naming (BEM or fixed utility set) throughout — never mix.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders only where genuinely unspecified.
- Invent a fictional brand name, product, and all copy. Never use "Basis Theory" or its trademarks.

## 8. Edit Mode (N/A — from scratch build)

If any requested change cannot be achieved without adding markup, stop and ask the user rather than silently inserting HTML.

Output only the finished prompt. No preamble, no closing commentary. Mirror numbered headers and bolded sub-rules. All copy in English. All CSS variable names, class names, file names in English/ASCII. If any conflict with mandatory rules, keep the mandatory rule and add a one-line explicit exception clause.
