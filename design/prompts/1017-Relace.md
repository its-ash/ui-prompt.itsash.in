# Coding AI Prompt — Relace-Themed Landing Page

You are building a complete, production-quality landing page. Follow every rule below exactly. Output three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere. Use one consistent class-naming convention (BEM) across the entire deliverable.

## 0. Brand & Content Rules (Mandatory)

- Invent a **fictional brand name, product name, and copy**. Never use the real brand name "Relace", its logo, trademarks, or product names anywhere in the page. All user-facing copy must be in **English**.
- Do not use lorem-ipsum where real copy is expected; write plausible, on-brand English copy for every section.

## 1. CSS-First Architecture & Zero Inline CSS

- All styling lives strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling so the entire look can change by editing CSS alone.
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) with utility classes mapping back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 2. CSS Variables & Theme Tokens

Store all visual tokens in `:root` (and theme classes) using CSS variables. Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text, in every theme.

**Colors (Relace palette):**
- `--color-page-cream: #fffef2` (universal page + card background — never #ffffff)
- `--color-ink-black: #191918` (primary text, dark surfaces, code windows)
- `--color-rule-black: #000000` (structural hairlines/borders)
- `--color-warm-stone: #75756f` (muted body text, secondary borders, inactive links)
- `--color-linen-beige: #edece0` (secondary elevated surface, tags, hover washes)
- `--color-ash-gray: #bab9b0` (tertiary dividers, inactive UI)
- `--color-amber-signal: #fcaa2d` (rationed accent — CTAs, single inline accent words, left-border indicators only)

**Standard tokens (map to the above):**
- `--primary: var(--color-amber-signal)`
- `--secondary: var(--color-linen-beige)`
- `--bg-primary: var(--color-page-cream)`
- `--bg-secondary: var(--color-linen-beige)`
- `--text-primary: var(--color-ink-black)`
- `--text-secondary: var(--color-warm-stone)`
- `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` (define sensible warm-toned values)
- `--radius-sm: 2px`, `--radius-md: 2px`, `--radius-lg: 2px`
- `--radius-badge: 800px`, `--radius-icon: 800px`
- `--shadow-sm: none`, `--shadow-md: none` (no shadows — hairlines only)
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`
- `--font-base`, `--font-mono`

**Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 60, 64, 96 (px), exposed as `--spacing-4` … `--spacing-96`.

**Typography tokens:** `--text-mono-xs` (10px/1.2/0.4px), `--text-mono-sm` (12px/1.2/0.36px), `--text-caption` (14px/1.5/-0.42px), `--text-body-sm` (16px/1.5/-0.64px), `--text-body` (18px/1.5/-0.72px), `--text-subheading` (20px/1.06/-0.6px), `--text-heading` (36px/1.1/-1.8px), `--text-heading-lg` (40px/1.1/-1.6px), `--text-display` (64px/1.1/-3.2px).

## 3. Mandatory Dark Mode

- Define dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Even though the theme is light-first, dark mode must be fully defined with contrast pairing preserved (e.g., cream becomes ink, ink becomes cream, amber stays).
- Background and text variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed`/`aria-label`.

## 4. Flexbox Layout & Mobile-First

- Build all layouts with Flexbox (`display: flex`). Every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box: convert rows to columns on small viewports. Prevent horizontal scrolling.
- Max content width 1200px, centered, ~40px horizontal padding. Section gaps 40–60px.

## 5. Typography & Icons (Google Fonts Mandatory)

- Text: load Google Fonts via `<link>`/`@import`. Use **Instrument Sans** (weights 400, 500) as the Parabole Trial substitute bound to `--font-base`, and **JetBrains Mono** (weight 400) as the Decima Mono Pro substitute bound to `--font-mono`. Bind `--font-base` accordingly.
- Icons: use Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 6. Relace Visual Rules (Mandatory)

- Background is always `#fffef2` (never `#ffffff` or cool neutrals). Where near-white is needed, use `#fefefe`.
- Display heading tracking `-0.05em` (-3.2px at 64px) to compress headlines.
- `#fcaa2d` used exclusively for filled CTAs, single inline accent words in headlines, and left-border list indicators. Never for body text, large fills, or decoration.
- 2px border-radius on all rectangular components (buttons, cards, inputs, code windows). 800px only for badges and icon containers.
- Decima Mono substitute (JetBrains Mono) for all UI chrome: version labels, timestamps, metadata tags, code.
- Separate sections with 1px `#000000` hairlines — never shadows, never background shifts.
- Left-align all headlines and body text. Never center text blocks.
- No drop shadows anywhere. No cool grays/blues. No system sans-serif for headlines.
- No card grids/masonry/multi-column matrices — keep 1–2 column editorial flows.

## 7. Component States (Enforce for All Components)

**Buttons (Amber CTA + Ghost Outline):**
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min 44x44px touch target.
- Hover: brightness/shadow shift (no elevation), `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, CSS spinner or animated Google Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.

Amber CTA: filled `#fcaa2d` bg, `#191918` text, 2px radius, 10px 20px padding, label in JetBrains Mono 12px (0.04em tracking) or Instrument Sans Medium 14px, often with ↗ arrow icon. No hover elevation.

Ghost Outline: transparent/`#fffef2` bg, 1px `#000000` border, `#191918` text, 2px radius, 10px 20px padding. Same label typography. Lighter-weight sibling; never standalone.

**Cards (Features):** default flex layout with subtle borders and elevation via `--bg-secondary` + CSS vars; hover elevation/shadow shift or `transform: translateY(-2px)`; focus-within highlights borders; loading skeleton shimmer; empty state with Google Icon + guidance text.

**Forms/Inputs:** states empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, dedicated error feedback container.

**Modal/Popup (if used):** opening/open/loading/success-error/closing animated via CSS transitions; centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc/overlay click.

## 8. Core UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark; never rely on color alone; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback (errors, toasts, loading).
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 9. Required Sections & Content

Build these sections in order, all left-aligned editorial flow:

1. **Navigation Bar** — sticky full-width `#fffef2`, ~60–80px height, 1px `#000000` bottom border. Logo lockup left (small square icon + wordmark in Instrument Sans), nav links in Instrument Sans 16px left-of-center, amber CTA + "APP" text link far right. ~40px horizontal padding.

2. **Hero** — 64px Instrument Sans Regular, `#191918`, tracking -3.2px, line-height 1.10, left-aligned. Two-column split: left 60% headline, right 40% body text + CTA pair. No hero image. Headline contains one amber accent word.

3. **Brand Trust Strip** — horizontal row of grayscale logos (~60% opacity), preceded by small mono label "Trusted by the best leading brands" in 12px JetBrains Mono. Generous spacing (~40–60px gaps), no dividers.

4. **Features (3 cards)** — each card: flexible flexbox, subtle borders, `--bg-secondary`. Hover elevation/transform. Include focus-within, loading skeleton, empty state.

5. **How It Works (3 steps)** — editorial left-aligned stack, numbered steps with amber left-border indicators or mono labels.

6. **Code Window with Image Overlay** — full-bleed warm landscape photograph band. Overlaid code window `#191918`, 2px radius, positioned center-left. Three traffic-light dots (8px) top-left. Code in 12px JetBrains Mono, keywords amber, strings linen, comments warm-stone. No shadow — flat on image.

7. **Concentric Circles Diagram** — three nested circles, thin `#000000` borders, innermost solid `#75756f`, outer two `#edece0`/transparent. Labels 12px Instrument Sans outside each ring. Small logo glyph center. 2px radius on hard edges.

8. **Horizontal Timeline Strip** — full-width band with dense vertical tick marks (hundreds of 1px lines), short amber tick markers at key positions, version labels in 10px JetBrains Mono at corners (e.g., "v3.001", "v3.851").

9. **Testimonials** — left-aligned editorial rows, 1px hairline separators.

10. **Pricing (3 tiers)** — left-aligned, hairline borders, amber CTA on recommended tier. No shadows.

11. **FAQ Accordion** — full-width rows, 20px 40px padding, 1px `#000000` bottom border, question 16–18px Instrument Sans left-aligned, "+" icon 20px right-aligned. Expanded reveals answer at 16px body. No background change on hover. Implement expand/collapse via CSS + minimal JS (no form validation/popup logic beyond this).

12. **Final CTA** — left-aligned headline with amber accent word + CTA pair.

13. **Footer** — secondary links, mono labels, hairline top border.

## 10. Deliverables

- `index.html`, `style.css`, `script.js`.
- BEM naming convention throughout.
- No unrequested placeholders where real copy was supplied.

## 11. Edit-Mode Note

This is a from-scratch build, so Edit Mode does not apply. If any requested style change later requires new markup, stop and ask the user rather than silently inserting HTML.

## 12. Output

Output only the finished prompt content above as the instruction set — no preamble, no closing commentary. The coding AI must now execute this prompt and produce the three files.
