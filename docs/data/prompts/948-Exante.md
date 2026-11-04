# Coding AI Prompt — Exante-Style Landing Page

## 1. Project Overview

Build a complete, responsive landing page using the visual language described below. **Invent a fictional brand name, product, and all copy.** Never use the real brand name "Exante", its logo, trademarks, or product names anywhere in the markup or copy. All user-facing copy must be in English.

Deliverables: separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere. Use one consistent class-naming convention (BEM) throughout.

## 2. Architecture & Theming Rules

**2.1 CSS-First, Zero Inline CSS**
- All styling lives in `style.css`. HTML must be semantic and style-agnostic.
- Target all design via class/ID selectors only.

**2.2 CSS Variables & Theme Tokens**
Define in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`):
- Colors: `--color-obsidian: #1e211e`, `--color-paper: #ffffff`, `--color-pure-black: #000000`, `--color-graphite: #4b4d4b`, `--color-ash: #d2d3d2`, `--color-neon-mint: #90fc95`. Plus standard tokens `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Contrast pairing: light bg → dark text, dark bg → light text in every theme.
- Light mode background must not be pure white where avoidable; use `#fefefe` for near-white surfaces. (Paper `#ffffff` is reserved for cards/nav per spec.)
- Radius: `--radius-sm: 2px`, `--radius-md: 2px`, `--radius-lg: 8px` (images only). Shadows: none — elevation via color contrast only (`--shadow-sm: none`, etc.).
- Spacing: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Z-index: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: `--font-base` bound to Geist Variable (Google Fonts substitute: Inter). Display face Alliance No.2 → substitute Fraunces (Google Fonts) with -2% tracking. Mono: Geist Mono → substitute JetBrains Mono.

**2.3 Mandatory Dark Mode**
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Persist choice via `localStorage`, fallback to `prefers-color-scheme`. Visible toggle with correct `aria-pressed`/`aria-label`.

**2.4 Flexbox & Mobile-First**
- All layouts use Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive, no horizontal scroll.

**2.5 Tailwind CSS Integration**
- Use Tailwind (or clean custom CSS via `@layer`/`@apply`). Utility classes must map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).

**2.6 Typography & Icons**
- Google Fonts only for text and icons. Use Google Material Symbols for icons. No inline SVGs or local icon files.

## 3. Typography Scale (enforce exactly)

| Role | Family | Weight | Size | Line Height | Letter Spacing |
|------|--------|--------|------|-------------|----------------|
| caption | Geist Mono | 400 | 12px | 1.2 | +0.72px |
| body-sm | Geist Variable | 400 | 14px | 1.4 | -0.28px |
| body | Geist Variable | 400 | 16px | 1.4 | -0.32px |
| body-lg | Geist Variable | 400 | 19px | 1.5 | -0.38px |
| subheading | Geist Variable | 400 | 24px | 1.4 | -0.48px |
| heading-sm | Alliance No.2 | 400 | 28px | 1.2 | -1.12px |
| heading | Alliance No.2 | 400 | 52px | 1.1 | -2.08px |
| heading-lg | Alliance No.2 | 400 | 58px | 1.0 | -2.32px |
| display | Alliance No.2 | 300 | 80px | 1.0 | -4px |

Eyebrow labels: Geist Mono 12px UPPERCASE +0.72px, always above section headlines.

OpenType features: Alliance No.2 `"ss10" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`; Geist Variable `"ss03" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`.

## 4. Component Specifications

**Buttons:**
- Filled Dark: Obsidian bg, Paper text, 14px Geist, 2px radius, 11px/16px padding, no border.
- Outlined Dark: transparent bg, 1px Obsidian border, Obsidian text, 2px radius.
- Outlined Light: transparent bg, 1px Paper border at 50% opacity, Paper text, 2px radius (for dark surfaces).
- All buttons: flex, align-items center, justify-content center, gap 0.5rem, min 44x44px touch target. States: hover (brightness/shadow + cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (spinner, no dimension change, disabled interactions), disabled (opacity 0.5, greyscale, not-allowed), success/error (via --text-success/--text-error).

**Cards:** 2px radius, 24px padding, no border, subtle bg. Hover: translateY(-2px). focus-within border highlight. Skeleton shimmer. Empty state with Google Icon + guidance text.

**Forms/Inputs:** states empty/focused/filled/valid/invalid/disabled/readonly. Flex container with label, input, error feedback.

**Modal:** opening/open/loading/success/error/closing animated. Centered flex, backdrop, Google Icon close button, focus trap, Esc/overlay close.

**FAQ Accordion:** Paper bg, 1px Ash bottom border only, 24px vertical padding, 19px Geist Obsidian question. No card chrome.

**Stat Card:** Paper bg, 2px radius, 24px padding, no border. Eyebrow Geist Mono 12px uppercase, number 80px Alliance No.2 Light, descriptor 16px Geist Graphite. Floats on Neon Mint.

## 5. Page Sections (in order)

1. **Top Navigation Bar** — Paper bg, 64–72px height, horizontal flex 24px gap. Logo left, dropdown links center, two dark buttons right. No shadow, no border-bottom.
2. **Dark Hero Section** — Full-bleed Obsidian, ~640px tall. Split: text-left max-width 560px with 80px Alliance No.2 Light headline (#ffffff, -4px tracking, 1.00 line-height), 19px Geist body at 80% opacity. Two buttons: Filled Light (white bg, dark text) and Outlined Light. Wireframe cube graphic (1px Neon Mint strokes) bleeding off right edge.
3. **Features (3 cards)** — White bg. Eyebrow + 52px heading. 3-column card grid, 24px padding, 2px radius.
4. **How It Works (3 steps)** — White bg. 3-column step layout with number, title, description.
5. **Neon Mint Highlight Band** — Full-bleed #90fc95, 120px vertical padding. Eyebrow + 52px heading in Obsidian. 4-column Stat Cards (white, 2px radius). Wireframe cubes in Obsidian bleeding right.
6. **Testimonials** — White bg. 2-3 testimonial cards.
7. **Pricing (3 tiers)** — White bg. 3-column pricing cards, middle tier highlighted.
8. **FAQ** — White bg, max-width 800px centered. 52px heading. Accordion rows.
9. **Final CTA** — Obsidian full-bleed section with headline + button.
10. **Footer** — Paper bg, multi-column link grid, Obsidian text, 1px Ash hairline divider above.

## 6. Do's and Don'ts

- Use Alliance No.2 for all display/heading text ≥28px with negative tracking -0.01em to -0.05em.
- Every section-intro label in Geist Mono 12px UPPERCASE +0.06em.
- 2px radius on buttons/cards/inputs/tags; 8px for images only.
- Neon Mint only as full-bleed section background or large surface — never button fill or text color on small elements.
- Obsidian for filled buttons and primary text.
- At least one full-bleed Obsidian section and one full-bleed Neon Mint section per page.
- Headlines line-height 1.00–1.10; body 1.40–1.50.
- No soft/large radii above 8px.
- No Neon Mint as button/link/text accent.
- No drop shadows or blur — elevation via color contrast only.
- No body copy below 14px or above 24px.
- No pure black for large fills/text — Obsidian handles surfaces.
- No more than one chromatic color per page.
- No headings in Geist when Alliance No.2 is available.

## 7. UX & Micro-Interactions (global)

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never color-only state communication, semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 8. Output

Provide `index.html`, `style.css`, `script.js`. Enforce BEM naming. No lorem-ipsum-only submissions where real copy is expected; placeholders only where content genuinely unspecified. Include dark mode toggle with persistence. All copy in English. Invent fictional brand/product/copy — never reference "Exante".
