# Coding AI Prompt — Unicorn Studio Landing Page (Fictional Brand)

## 1. Strict Rules & Architecture

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. Forbid `style="..."` attributes in HTML.
- Target all design via class/ID selectors. Keep HTML semantic and styling-agnostic.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root`:
- Colors: `--color-void: #08080a`, `--color-charcoal: #0d0d12`, `--color-graphite: #17171c`, `--color-slate: #25252d`, `--color-iron: #31313a`, `--color-ash: #62626f`, `--color-fog: #8b8e9c`, `--color-pearl: #aeaac0`, `--color-chalk: #dad7de`, `--color-lavender-beam: #ab8ff1`, `--color-iris-glow: #8960f0`, `--color-webgl-aurora: radial-gradient(circle, rgb(142, 108, 228), rgb(114, 79, 201))`.
- Typography: `--font-overused-grotesk` (substitute Inter Tight), `--font-sprat` (substitute Migra), `--font-apple-system` (substitute Inter, -apple-system, system-ui). Text scale tokens: `--text-caption`, `--text-body`, `--text-subheading`, `--text-heading-sm`, `--text-heading`, `--text-heading-lg`, `--text-display`.
- Spacing: `--spacing-5` through `--spacing-118` per spec scale. Radius: `--radius-sm: 3px`, `--radius-md: 3px`, `--radius-lg: 10px`. Shadows: `--shadow-sm`, `--shadow-sm-2`, `--shadow-subtle`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Contrast pairing enforced for every theme.

**1.3 Mandatory Dark Mode**
- Dark mode is the default and only theme. Provide `@media (prefers-color-scheme: dark)` and `.dark` class tokens. Include a visible toggle with `aria-pressed`/`aria-label` persisting via `localStorage`, falling back to `prefers-color-scheme`.

**1.4 Flexbox & Mobile-First**
- Use Flexbox for all layouts. Default `align-items: center` on every flex container unless explicitly justified. Mobile-responsive, no horizontal scroll.

**1.5 Framework**
- Tailwind CSS via `@layer`/`@apply`, mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons**
- Google Fonts mandatory for text (Inter Tight as Overused Grotesk substitute, Inter as system substitute) and Google Material Symbols for icons. No inline SVGs or local icon files.

## 2. Component Specifications

**2.1 Buttons**
- Primary filled: `#dad7de` bg, `#08080a` text, 3px radius, 8px 14px padding, system font 14px weight 500, `box-shadow: #31313a 0 -1px 0 0`. Min touch target 44x44px.
- Ghost outlined: transparent, 1px border `#8b8e9c`, text `#aeaac0`, 3px radius, 6px 12px padding.
- States: hover (brightness/shadow), focus (distinct ring via CSS vars), active (`transform: scale(0.97)`), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`).

**2.2 Cards**
- `#17171c` fill, 1px border `#aeaac0` at 0.3 opacity, 10px radius, 30px padding. Hover: `transform: translateY(-2px)`. Focus-within border highlight. Skeleton shimmer. Empty state with Google Icon + guidance text.

**2.3 Forms & Inputs**
- Dark surface `#17171c`, 1px border `#8b8e9c`, 3px radius, system font 14px, placeholder `#62626f`. Focus: border `#ab8ff1`. States: empty, focused, filled, valid, invalid, disabled, read-only. Flex wrapper with label, input, error container.

**2.4 Modals**
- Centered flex, backdrop overlay, Google Icon close button, Esc/overlay close, focus trapping, CSS transition states (opening/open/loading/success/error/closing).

## 3. Core UX Rules
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never color-only state communication, semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 4. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline script blocks beyond single deferred entry point.
- Consistent class-naming (BEM) throughout.
- No lorem-ipsum where real copy is supplied; placeholders only where unspecified.
- **Invent a fictional brand name, product, and copy. Never use "Unicorn Studio", its logo, trademarks, or product names anywhere in the page.**

## 5. Page Sections Required
Build a complete landing page with these sections in order:
1. **Hero** — full-bleed `#08080a` canvas, centered radial gradient `radial-gradient(circle, rgb(142, 108, 228), rgb(114, 79, 201))` bleeding from lower-center. Eyebrow pill (3px radius, thin `#aeaac0` border, dark fill, 13px system font, Lavender Beam dot). Headline 64px Overused Grotesk weight 400, `#dad7de`, letter-spacing -4.03px, line-height 0.99. Subheadline 18px system font weight 400, `#aeaac0`, line-height 1.4. Primary filled button.
2. **Features** — 3 cards in a responsive flex row. Each: `#17171c` fill, 1px border `#aeaac0` at 0.3 opacity, 10px radius, 30px padding. Heading 32px Overused Grotesk weight 400 `#dad7de` letter-spacing -1.28px. Body 16px system font `#aeaac0` line-height 1.4. Optional Lavender Beam underline on inline links.
3. **How It Works** — 3 steps, centered stack, Overused Grotesk headings, system body text, generous 40-60px spacing.
4. **Testimonials** — cards with quote, author, role. Monochrome, `#17171c` surfaces.
5. **Pricing** — 3 tiers. Cards with price, features list, CTA button. Middle tier elevated (`#25252d`).
6. **FAQ** — accordion-style, keyboard accessible, `aria-expanded`.
7. **Final CTA** — centered section header stack + primary filled button.
8. **Footer** — secondary links, muted Ash text, monochrome.

Additional required elements:
- Navigation bar: transparent on `#08080a`, logo glyph + wordmark in Pearl, links (Inspiration, Resources, Pricing) in Pearl, filled Sign up button, ghost Login button. ~16px vertical padding, 19px gaps.
- Social proof logo strip: full-width band, centered "Loved by designers at" label 13px `#62626f`, horizontal row of monochrome logos in `#62626f`, 19px gaps. No colored logos.
- Section header stack: centered, Overused Grotesk 48-64px Chalk heading, 18px Fog subheading, optional action, 40-60px spacing.
- New announcement pill: `#08080a` fill, 1px border `#aeaac0` at 0.4 opacity, 3px radius, 5px 10px padding, 13px system font weight 500, `#aeaac0` text, leading 4px dot in `#ab8ff1`.
- Chromatic links: Pearl text with 1px bottom border in Lavender Beam or Iris Glow.
- Icons: stroke-based, 1-1.5px stroke, Fog default, Pearl on hover/active, outlined, never filled, mono only.

## 6. Edit Mode
Not applicable — this is a from-scratch build.

Output only the finished prompt. No preamble or closing commentary.
