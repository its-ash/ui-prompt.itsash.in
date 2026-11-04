# Coding AI Prompt — MotherDuck-Style Landing Page (Fictional Brand)

## 1. Project Overview & Theme

Build a complete, responsive landing page for a **fictional data-infrastructure product**. The visual language is neo-brutalist, technical-playful: a warm cream canvas hosts monospace-first typography that treats every UI surface as a terminal readout, subverted by hand-drawn duck mascots, clouds, and crayon-bright accents. Hard 2px corners, zero-blur offset shadows, chromatic button borders cycling through a rainbow palette. Color is sparse: sky-blue carries all primary action weight; saturated yellow and orange belong to illustration and marquee rhythm.

**Critical:** Do NOT use the real brand name "MotherDuck", its logo, trademarks, or product names anywhere. Invent a fictional brand name, product name, and all copy. Reuse only the visual style.

**Theme:** Light mode primary, with full dark mode support via `@media (prefers-color-scheme: dark)` and a `.dark` class toggle persisted in `localStorage`.

Sections required: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 2. Strict Architecture Rules

### 2.1 CSS-First, Zero Inline CSS
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors only.
- HTML stays clean, semantic, and styling-agnostic.

### 2.2 CSS Variables & Theme Tokens
Define all tokens in `:root` (and theme classes) using `var(--...)`. Required color tokens:
- `--color-cream-paper: #f4efea` (page canvas)
- `--color-frost-white: #ffffff` (card/nav/input surfaces)
- `--color-chalk-gray: #f8f8f7` (secondary surface)
- `--color-ice-wash: #ebf9ff` (soft blue hover wash)
- `--color-notebook-pale: #f9fbe7` (yellow-green tinted surfaces)
- `--color-charcoal-ink: #383838` (primary text, borders, shadow color — never pure black)
- `--color-pencil-gray: #a1a1a1` (muted helper text, disabled outlines)
- `--color-graphite: #818181` (tertiary borders/dividers)
- `--color-soft-silver: #c0c0c0` (icon strokes, low-contrast accents)
- `--color-sky-crayon: #6fc2ff` (sole filled-action color)
- `--color-canary-banner: #ffde00` (marquee/highlight)
- `--color-duck-bill-orange: #ff9538` (illustration only, never UI control fill)
- Rainbow outline palette: `--color-coral-sketch: #f38e84`, `--color-peach-sketch: #f5b161`, `--color-mint-sketch: #38c1b0`, `--color-lilac-sketch: #b291de`, `--color-lime-sketch: #b3c419`, `--color-periwinkle-sketch: #7597ee`, `--color-slate-sketch: #84a6bc`, `--color-marigold-sketch: #e1c427`
- `--color-wet-cement: #54b4de` (illustration stroke)
- `--color-peach-blush: #fdedda` (illustrated section backgrounds only)

Contrast pairing: light backgrounds pair with dark text (`--color-charcoal-ink`); dark backgrounds pair with light text. Enforce for every theme.

Light mode background must not be pure white; use `#fefefe` where near-white is needed.

Radius/shadow/spacing/transition tokens:
- `--radius-sm: 2px` (all radii are 2px — non-negotiable)
- `--shadow-subtle: rgb(56, 56, 56) -6px 6px 0px 0px` (hard offset, zero blur)
- `--spacing-gap: 8px`, `--spacing-section: 80px`, `--spacing-card-pad: 40px`
- `--transition-fast: 150ms`, `--transition-normal: 250ms`, `--ease-standard: ease`
- `--z-dropdown`, `--z-modal`, `--z-toast` for stacking control

Typography tokens:
- `--font-aeonik-mono` (primary, monospace) — use Google Font substitutes JetBrains Mono, IBM Plex Mono, or Space Mono (weights 300, 400, 500, 600). Bind as `--font-base`.
- `--font-inter` (secondary, proportional) — Google Font Inter (weights 300, 400, 600, 700).
- Type scale tokens: `--text-caption: 11px`, `--text-body: 14px`, `--text-body-lg: 16px`, `--text-subheading: 18px`, `--text-heading-sm: 24px`, `--text-heading: 32px`, `--text-heading-lg: 40px`, `--text-display: 56px`. Letter-spacing 0.0200em globally. Line heights: 1.00, 1.20, 1.30, 1.40, 1.60.

### 2.3 Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Background/text variables switch seamlessly; no HTML restructuring.
- Persist user choice in `localStorage`, fall back to `prefers-color-scheme` on first visit. Visible toggle with correct `aria-pressed`/`aria-label`.

### 2.4 Flexbox, Mobile-First
- All layouts use Flexbox (`display: flex`).
- Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box: rows become columns on small viewports. No horizontal scroll.

### 2.5 Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS via `@layer`/`@apply`). Utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).

### 2.6 Google Fonts & Icons
- Text: Google Font `<link>`/`@import` for JetBrains Mono (or IBM Plex Mono/Space Mono) and Inter. Bind to `--font-base`.
- Icons: Google Material Symbols/Icons only. No inline SVGs or local icon files.

## 3. Component Specifications

### 3.1 Buttons
- **Default:** Flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`. Min touch target 44x44px.
- **Primary (filled):** Sky-blue `#6fc2ff` fill, `#383838` 1.5–2px border, `#383838` text in Aeonik Mono 500 at 14px, 2px radius, padding 10px 24px, hard offset shadow. Hover: shifts +6px right and +6px down to "press" into shadow. Active: returns to rest.
- **Secondary (outlined):** White/transparent fill, `#383838` 2px border, same text/padding/shadow. No fill.
- **Rainbow Outline:** Cycling border colors (coral, peach, mint, lilac, lime, periwinkle, slate, marigold). White fill, `#383838` text, 2px radius, 2px border, same shadow. Multiple instances distribute through palette.
- **Nav Start Free:** Sky-blue fill, `#383838` 1.5px border, white text in Aeonik Mono 600 at 12px uppercase, 2px radius, padding 8px 16px. No shadow.
- **States:** Hover (brightness/shadow shift, `cursor: pointer`), Focus (distinct ring via CSS vars), Active (scale 0.97), Loading (disabled, spinner/animated icon, no dimension distortion), Disabled (opacity 0.5, greyscale, `cursor: not-allowed`), Success/Error (temporary feedback via `--text-success`/`--text-error`).

### 3.2 Cards
- **Default:** Flexbox layout, subtle borders, elevation via `--bg-secondary` and CSS vars.
- **Hover:** Elevation/shadow shift or `transform: translateY(-2px)`.
- **Focus-within:** Highlight border when child link/button receives focus.
- **Loading (Skeleton):** Shimmer animation in CSS, no layout jump.
- **Empty State:** Google Icon + guidance text.

### 3.3 Forms & Inputs
- States: Empty, Focused (thicker border or shift to `#6fc2ff`, no glow), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input, dedicated error feedback container.
- Input: white fill, `#383838` 1.5–2px border, 2px radius, padding 10–12px horizontal. Placeholder in Aeonik Mono 400 at 14px, `#a1a1a1`. Square-cornered sky-blue submit button attached right.

### 3.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- UX: Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### 3.5 Top Navigation Bar
- White fill, full-width, 1px solid `#383838` bottom border. Not sticky.
- Logo left (orange duck + wordmark in Aeonik Mono 600 at 16px). Center links: PRODUCT, COMMUNITY, COMPANY (chevron-down carets), PRICING, DOCS, CONTACT US in Aeonik Mono 500 at 12px, `#383838`, 2px radius on hover. Right: LOG IN (ghost) + START FREE (blue button).

### 3.6 Hero Section
- Cream `#f4efea` canvas. Display headline in Aeonik Mono 300 at 56px, `#383838`, uppercase, letter-spacing 0.0200em, centered. Subtext in Aeonik Mono 400 at 18px, `#383838`, centered, max-width ~600px. Two-button row: Primary (sky-blue) + Secondary (outlined). Below: monochrome logo strip in `#383838`.

### 3.7 Product Screenshot Frame
- White surface, `#383838` 1.5–2px border, 2px radius, hard offset shadow. Contains a dark-mode product UI mock. Flanked on cream canvas by hand-drawn cloud/triangle/duck illustrations in `#54b4de` and `#383838` strokes with `#ff9538` fills, bleeding past frame edges.

### 3.8 Marquee Banner
- Full-bleed canary-yellow `#ffde00`, no border/shadow. Scrolling text in Aeonik Mono 600 at 18–20px, `#383838`, uppercase, repeated with separator gaps. Padding 12px vertical.

### 3.9 Testimonial Quote Card
- Canary-yellow `#ffde00` fill, `#383838` 2px border, 2px radius, padding 32–40px, hard offset shadow. Large open-quote glyph at top. Quote text in Aeonik Mono 400 at 18–20px. READ MORE link in Aeonik Mono 500, underlined, with external-link icon. Speaker photo overlaps bottom-left with white name-label card.

### 3.10 Community Tweet Card
- White fill, `#383838` 1.5–2px border, 2px radius, padding 24–32px, no shadow. Header: circular avatar + name (Aeonik Mono 600 at 14px) + handle (Aeonik Mono 400 at 12px, `#a1a1a1`) + platform icon (sky-blue). Body in Aeonik Mono 400 at 14px.

### 3.11 Yellow Status Badge
- Canary-yellow `#ffde00` fill, `#383838` 1px border, 2px radius, Aeonik Mono 600 at 11–12px, `#383838`, uppercase, padding 4px 8px.

### 3.12 Footer
- White or cream fill, 1px `#383838` top border, padding 48–64px vertical. Multi-column link grid: section headers in Aeonik Mono 600 at 14px, links in Aeonik Mono 400 at 14px. Logo + copyright row at bottom in Aeonik Mono 400 at 12px, `#a1a1a1`.

## 4. Core UX & Micro-Interactions

- Responsive by default: fluid sizing, breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes; never rely on color alone; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 5. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM or fixed utility set) throughout — never mix.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders only where content genuinely unspecified.

## 6. Edit Mode (N/A — from-scratch build)

This is a from-scratch build; Edit Mode rules do not apply.

## 7. Language

Write all user-facing copy in English. All CSS variable names, class names, and file names in English/ASCII.

## 8. Section-Specific Notes

- **Features:** 3 cards in a row (flex, wrapping on mobile). Each card: white fill, `#383838` border, 2px radius, hard offset shadow, padding 40px. Icon (Google Material Symbol) in sky-blue, heading in Aeonik Mono 600 at 18px, body in Aeonik Mono 400 at 14px.
- **How It Works:** 3 numbered steps. Large step number in Aeonik Mono 300 at 40px in `#a1a1a1`, title in Aeonik Mono 600 at 18px, description in Aeonik Mono 400 at 14px. Connected by a dashed `#383838` line or arrow.
- **Pricing:** 3 tiers. Middle tier highlighted with sky-blue border or canary-yellow fill. Each tier: name, price, feature list, CTA button. Use rainbow-outline buttons distributed across tiers where appropriate.
- **FAQ:** Accordion-style. Question in Aeonik Mono 600 at 16px, answer in Aeonik Mono 400 at 14px. Toggle icon (Material Symbol). Expand/collapse via CSS transitions.
- **Final CTA:** Cream canvas, centered headline in Aeonik Mono 300 at 40px, subtext, single sky-blue primary button with hard shadow.
- **Footer:** Multi-column link grid as specified, with duck mascot illustration in corner.

## 9. Imagery & Decoration

- Hand-drawn line art: ducks, clouds, triangles, speech bubbles, arrows in `#383838` and `#54b4de` strokes on cream canvas, with `#ff9538` fills for beaks/feet and `#ffde00` for highlight callouts. Intentionally imperfect, wobbly, pencil-sketch quality. Use CSS-drawn or SVG-free approximations (CSS shapes, borders) since inline SVGs are forbidden — use Google Material Symbols where icons are needed and CSS for decorative shapes.
- Product screenshots appear inside framed cards (white, 2px border, hard shadow) so crisp dark-mode product UI contrasts with loose cream-paper illustration.
- No photography except executive headshots in testimonials. No stock imagery, no gradient blobs.

## 10. Layout Rhythm

Centered max-width container at 1200px, full-bleed sections. Alternating rhythm: cream hero → cream product showcase (floating illustrations bleeding past edges) → full-bleed canary-yellow marquee → alternating white-card and cream-background content bands → yellow testimonial → cream community grid. Vertical section gaps 64–80px. Hero is centered text stack over logo strip. Subsequent sections are 2-column text+product-screenshot splits or 3–4-column card grids. Illustrations deliberately bleed past container edges into cream margin. Navigation is flat top bar, not sticky.

Output only the finished prompt. No preamble, no closing commentary.
