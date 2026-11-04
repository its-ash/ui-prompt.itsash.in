# Coding AI Prompt — Buddy-Themed Landing Page

## 1. Role & Objective
You are an expert front-end developer. Build a complete, production-ready landing page using the **Buddy** engineering-blueprint theme described below. Invent a fictional brand name, product, and copy — never use the real brand name "Buddy", its logo, trademarks, or product names. All user-facing copy must be in English.

Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline `style="..."` attributes. Use one consistent class-naming convention (BEM) across the entire deliverable.

## 2. Strict Architecture Rules

**2.1 CSS-First & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. No inline CSS. Target via class/ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling.

**2.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Contrast pairing: light bg pairs with dark text, dark bg pairs with light text — for every theme.
- Light mode background must not be pure white; use `#fefefe` where near-white is needed.
- Border radius & shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.
- Spacing & transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

Map the Buddy palette into these tokens plus Buddy-specific tokens (e.g. `--color-lime-spark: #bfff5a`, `--color-cobalt-signal: #1a67fd`, `--color-forest-depth: #0b3d28`, `--color-paper-white: #fcfcfd`, `--color-midnight-ink: #1d2130`, `--color-carbon: #151720`, `--color-obsidian: #0a0d16`, `--color-mist-gray: #ebeef7`, `--color-slate-edge: #d5d9e8`, `--color-silver-wash: #d6d6d7`, `--color-pewter: #6b6d72`, `--color-graphite: #474950`, `--color-mint-tint: #d8fbed`). Include the radial gradient tokens (`--color-cyan-beam`, `--color-mint-pulse`, `--color-citron-wave`, `--color-orchid-glaze`, `--color-amber-glow`) and shadow tokens (`--shadow-subtle` through `--shadow-subtle-15`) as defined in the spec.

**2.3 Mandatory Dark Mode**
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Theme switching via CSS variables without HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label`.

**2.4 Flexbox Layout & Mobile-First**
- Use Flexbox (`display: flex`) for all layout structures.
- Every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-responsive: convert rows to columns on small viewports. Prevent horizontal scrolling.

**2.5 Framework**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless another framework is requested. Utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**2.6 Typography & Icons (Google Fonts Mandatory)**
- Text: include Google Font `<link>`/`@import` for IBM Plex Sans (weights 400,500,600,700) and IBM Plex Mono (weight 500). Bind to `--font-base`. Substitute allowed: Inter, Source Sans 3, Manrope. IBM Plex Mono substitute: JetBrains Mono.
- Icons: use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 3. Theme Visual Specification — Buddy

**Canvas & Grid:** Page background `#fcfcfd` with a subtle 1px grid overlay in `rgba(235,238,247,0.6)` at 24-32px cell size across hero and feature sections. Grid fades at section edges.

**Typography:**
- IBM Plex Sans: 400 body, 500 nav/labels, 600 buttons/subheadings, 700 display. Negative tracking: -3.6px at 80px, -1.0px at 48px, -0.26px at 22px. OpenType `"liga" 0`.
- IBM Plex Mono: 12px/500, 2px letter-spacing, uppercase, `#6b6d72` for eyebrow labels.
- Type scale: caption 12px/lh2/2px tracking; subheading 18px/lh1.45; heading-sm 22px/lh1.43/-0.26px; heading 48px/lh1/-1px; display 80px/lh0.9/-3.6px.

**Shapes:** cards 24px radius, pills 9999px, images 8px, buttons 56px, nav links 44px, small cards 14px. No square corners or default 4px radius.

**Shadows:** use the provided subtle shadow stacks exactly. Product screenshot card uses the five-stop translucent `#1d2130` stack. Feature cards use hue-tinted glow at 8% opacity at 10px and 24px stops. Lime CTA button uses inset highlight + inset bottom shadow.

**Spacing:** base 8px, comfortable density. Scale: 8,16,24,32,40,48,72,96,120. Page max-width 1200px, section gap 80px, card padding 24px, element gap 16px.

**Color usage rules:**
- Lime `#bfff5a` is the sole primary action color — never pair with another saturated button fill on the same screen. Never use for large surface fills.
- Cobalt `#1a67fd` for links, brand mark, nav active indicator.
- Text: `#1d2130` nav, `#151720` body, `#0a0d16` display/headings. Never `#000000`.
- Borders: `#ebeef7` / `#d5d9e8`.
- Dark section (testimonials): `#0a0d16` with white text.
- Amber card (testimonial): radial gradient `#ffd888`→`#ffc650`.

**Gradient system:** gradients serve only three purposes: (1) feature-card top-arc strokes (distinct hue per card), (2) headline brushstrokes (multicolor sweep under 1-2 keywords), (3) testimonial card fill. Radial tokens: amber `#ffd888`→`#ffc650`, pink `#ffb5f1`→`#ff9dec`, citron `#ecf174`→`#e5ed38`, mint `#5df7b6`→`#19f79a`, cyan `#7ae3ff`→`#46d8ff`. All `radial-gradient(100% 100% at 50% 0px, ...)` anchored top center.

**Brushstroke underline:** 2-3px tall, 40-80% of word width, 2-4px below baseline, multicolor linear gradient cyan→green→yellow→pink.

**Do's:** negative letter-spacing proportional; IBM Plex Mono eyebrows; product-screenshot five-stop shadow; canvas `#fcfcfd` with grid; dark `#0a0d16` only for testimonial/banner bands.

**Don'ts:** no lime for large fills; no extra saturated hues beyond rainbow palette for strokes/brushstrokes/testimonial; no square corners; no `#000000` text; no multiple shadow base colors on same element; no centered body paragraphs (left-aligned only); no radial gradients for text/icons/borders.

## 4. Component Specifications

**4.1 Buttons**
- Lime CTA: 56px radius, fill `#bfff5a`, text `#0a0d16`, IBM Plex Sans 16px/500, padding 16px 32px, inset top highlight `rgba(255,255,255,0.72)` + inset bottom shadow `rgba(29,33,48,0.12)`. Optional lime glow on hover via 8% `#bfff5a` layered shadow.
- Outlined Action: transparent fill, 1px border `#fcfcfd` or current text color, 56px radius, padding 16px 32px, text same color, 16px/500. Inverts on dark sections.
- Ghost Nav Link: no background, text `#1d2130`, 16px/500. Active state `#1a67fd`. Wrapped in 44px-radius container in pill nav.
- States: default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px touch target), hover (brightness/shadow, cursor pointer), focus (distinct focus ring via CSS vars), active/pressed (transform scale 0.97), loading (disabled interactions, CSS spinner or animated Google Icon, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).

**4.2 Cards**
- Feature Card (Fanned): 24px radius, white `#fcfcfd` fill, curved gradient stroke across top arc in distinct hue, icon 24px line-art `#1d2130` at top, label IBM Plex Sans 16px/500 `#1d2130` below, hue-tinted glow shadow at 8% opacity.
- Product Screenshot Card: 8px radius image, no border, five-stop translucent shadow stack.
- Testimonial Card: warm radial gradient `#ffd888`→`#ffc650`, 24px radius, text `#0a0d16`, attribution IBM Plex Sans 14px/600 with role lighter weight, amber glow shadow at 8%.
- Card states: default (flex layout, subtle borders, elevation), hover (elevation/shadow shift or translateY(-2px)), focus-within (highlight borders when child link/button focused), loading (skeleton shimmer in CSS), empty state (Google Icon + guidance text).

**4.3 Forms & Inputs**
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

**4.4 Modal / Popup**
- States: opening, open, loading, success/error, closing (CSS transitions).
- UX: centered flex container (align-items center), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

**4.5 Pill Tab Strip**
- Container: 9999px radius, white `#fcfcfd`, 1px border `#ebeef7`, soft layered shadow.
- Tabs: 44px-radius pills. Active fills `#151720` with text `#fcfcfd`. Inactive transparent with `#1d2130` text.

**4.6 Customer Logo Strip**
- Logos in `#1d2130` (light) or `#fcfcfd` (dark). Equal spacing flex row, 40px column-gap. No borders/backgrounds.

**4.7 Eyebrow Label**
- IBM Plex Mono 12px/500, 2px tracking, uppercase, `#6b6d72`. Centered above headlines.

**4.8 Inline Feature Link**
- `#1a67fd`, no underline default, underline on hover, 16px/400 inline.

**4.9 Gradient Brushstroke Underline**
- 2-3px tall horizontal stroke, 40-80% of word width, 2-4px below baseline, multicolor linear gradient cyan→green→yellow→pink.

## 5. Core UX & Micro-Interactions
- Responsive by default; fluid sizing; no horizontal overflow.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 6. Page Structure — Landing Page

Build these sections in order:
1. **Hero** — centered headline stack with eyebrow label, display headline (80px) with gradient brushstroke under 1-2 keywords, subheading, Lime CTA + Outlined Action buttons, feature-card fan below on full-width grid-paper background.
2. **Features** — 3 feature cards (fanned style) with distinct hue strokes, icon + label.
3. **How It Works** — 3 steps with numbered indicators, headings, descriptions.
4. **Testimonials** — dark `#0a0d16` band with amber gradient testimonial card, attribution, logo wall.
5. **Pricing** — 3 tiers with feature lists, CTA buttons (lime primary on recommended tier).
6. **FAQ** — accordion-style questions with expand/collapse.
7. **Final CTA** — centered headline + Lime CTA button on grid-paper canvas.
8. **Footer** — secondary links, logo, copyright.

Navigation: top bar with logo left, center links (Changelog, Docs, Pricing, Contact as ghost nav links), lime CTA right. Floating pill tab strip below feature screenshots for section anchors.

## 7. Deliverable Constraints
- Separate `index.html`, `style.css`, `script.js`. No inline script blocks beyond single deferred entry-point reference.
- BEM naming convention throughout.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content genuinely unspecified.
- Invent fictional brand name, product, and copy. Never use real brand name "Buddy", logo, trademarks, or product names.

## 8. Dark Mode Toggle Implementation
- Toggle control with `aria-pressed`/`aria-label`.
- Persist via `localStorage`; fallback to `prefers-color-scheme`.
- All color tokens switch seamlessly.

## 9. Accessibility Checklist
- Semantic HTML5 elements.
- ARIA roles/labels on custom widgets (accordion, modal if used, toggle).
- Logical tab order; visible focus rings.
- `aria-live` for dynamic feedback (FAQ expand, form errors if any).
- Contrast sufficient in both themes.
- Respect `prefers-reduced-motion`.

Now generate the complete three-file deliverable following all rules above. Output only the code files with clear file markers. No preamble or closing commentary.
