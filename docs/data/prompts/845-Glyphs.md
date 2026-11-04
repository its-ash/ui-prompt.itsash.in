# Coding-AI Prompt: Complete Landing Page — "Glyphs" Theme

You are an expert front-end developer. Build a complete, responsive landing page using the **Glyphs** visual style described below. The deliverable must be three separate files: `index.html`, `style.css`, and `script.js`. No inline `style` attributes. No inline `<script>` blocks beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) across the entire deliverable.

## 0. Brand & Copy Rule (Mandatory)

The Glyphs style originates from a real brand. You must **invent a fictional brand name, product, and copy**. Never use the real brand name, logo, trademarks, or product names anywhere in the page. All user-facing copy must be written in English.

## 1. CSS-First Architecture & Zero Inline CSS

- Keep all styling strictly inside `style.css`. Forbid `style="..."` in HTML.
- Target all design via class/ID selectors only. HTML must remain clean, semantic, and agnostic of visual styling.
- Changing the site's look must require modifying only the CSS file, not the markup.

## 2. CSS Variables & Theme Tokens

Store all visual tokens inside `:root` (and theme classes) using CSS variables. Required tokens:

**Colors:**
- `--color-paper: #ffffff`
- `--color-blush-paper: #f7eef1`
- `--color-control-gray: #eeeeee`
- `--color-mint-wash: #e9f3eb`
- `--color-ink: #000000`
- `--color-cherry-ink: #42242e`
- `--color-workshop-green: #1e3219`
- `--color-acid-glyph: #9aff00`
- `--color-signal-orange: #f66a06`
- `--color-mustard-proof: #f2ad0d`
- `--color-cyan-blueprint: #1ad1e6`
- `--color-ochre-ink: #604900`
- `--color-burnt-ink: #4d2f1a`
- `--color-blueprint-ink: #243f42`

**Standard system tokens (mapped to Glyphs values):**
- `--primary: var(--color-acid-glyph)`
- `--secondary: var(--color-cyan-blueprint)`
- `--bg-primary: var(--color-paper)`
- `--bg-secondary: var(--color-blush-paper)`
- `--text-primary: var(--color-workshop-green)`
- `--text-secondary: var(--color-ink)`
- `--text-success: var(--color-workshop-green)`
- `--text-error: var(--color-cherry-ink)`
- `--border-default: var(--color-cyan-blueprint)`
- `--border-error: var(--color-cherry-ink)`
- `--border-success: var(--color-workshop-green)`
- `--radius-sm: 5px`
- `--radius-md: 10px`
- `--radius-lg: 10px`
- `--shadow-sm: none`
- `--shadow-md: none`
- `--spacing-gap: 40px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: ease`
- `--z-dropdown: 100`
- `--z-modal: 1000`
- `--z-toast: 2000`

**Typography:**
- `--font-base: 'Cormorant Garamond', serif` (Google Fonts, weight 400 only)
- `--text-nav: 400 14px/1.43 var(--font-base)`
- `--text-body: 400 18px/1.4 var(--font-base)`
- `--text-label: 400 20px/1.25 var(--font-base)`
- `--text-kicker: 400 24px/1.25 var(--font-base)`
- `--text-intro: 400 34px/1.18 var(--font-base)`
- `--text-testimonial: 400 50px/1.1 var(--font-base)`
- `--text-display: 400 80px/1 var(--font-base)`
- `--text-decorative-glyph: 400 480px/1 var(--font-base)`

**Spacing:**
- `--spacing-4: 4px`
- `--spacing-20: 20px`
- `--spacing-24: 24px`
- `--spacing-36: 36px`
- `--spacing-40: 40px`
- `--spacing-60: 60px`
- `--spacing-80: 80px`
- `--spacing-100: 100px`
- `--spacing-140: 140px`

**OpenType features:** Apply `"calt", "clig", "kern", "liga"` to all text.

**Contrast pairing:** Enforce light-bg/dark-text and dark-bg/light-text for every theme. No drop shadows anywhere — surfaces separate through flat color, 1px outlines, raw image cropping, and overlap.

## 3. Mandatory Dark Mode

- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background and text CSS variables switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.
- In dark mode, maintain the Glyphs spirit: invert paper/ink relationships while keeping colored accent slabs intact.

## 4. Flexbox Layout & Mobile-First

- Build all layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- All flex layouts must be mobile-responsive (rows convert to columns on small viewports). Prevent horizontal scrolling.

## 5. Framework & Tailwind

- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 6. Typography & Icons

- Strictly use Google Fonts for text and icons. Include Google Font `<link>` or `@import` for Cormorant Garamond (weight 400) and Google Material Symbols/Icons.
- Forbid raw inline SVGs or local icon files. Use Material Symbols for any icons (close, arrows, check, etc.).

## 7. Component Specifications

### Buttons
- Default: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;`. Minimum touch target 44x44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles driven by `--text-success`/`--text-error`.

**Lime Purchase Button:** Acid Glyph fill, Workshop Green 14px text, square corners (`--radius-sm: 5px`), highlighter-block silhouette.

**Orange Circular Control:** Signal Orange circular surface, 50% radius, Cherry Ink icon/arrow, 0px internal padding.

### Cards
- Default: flexible Flexbox layout, subtle borders and elevation using `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or subtle transform (`translateY(-2px)`).
- Focus-within: highlights card borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and clear guidance text.

**Cyan Feature Annotation Card:** Cyan Blueprint fill, 10px radius, padding `36px 99.896px 40px 40px`, Ochre Ink kicker at 24px, Signal Orange continuation link at 18px.

**Mustard Feature Annotation Card:** Mustard Proof fill, 10px radius, padding `36px 40px 40px 99.896px`, Burnt Ink text/borders.

**Cherry Feature Annotation Card:** Cherry Ink fill, 10px radius, padding `36px 40px 40px 99.896px`, Paper body copy, Signal Orange link at 18px.

### Forms & Inputs
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, and dedicated error feedback container.

### Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay clicks.

## 8. Core UX & Micro-Interactions

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both Light and Dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.

## 9. Landing Page Sections

Build these sections in order:

1. **Header:** Paper background, Workshop Green logo, 14px nav links, fluorescent Lime Purchase Button, Language Pill (9999px radius, 1px Workshop Green border, 4px vertical padding).

2. **Hero:** Left-aligned Workshop Green headline at 80px/80px on Paper. Oversized 480px/480px translucent/clipped decorative glyph. Exposed black Bézier paths, circular handles, Cyan Blueprint guide lines. Intro statement at 34px/40px, 40px gap from display type, broad Paper space around.

3. **Features (3 cards):** Use the three annotation card variants (Cyan, Mustard, Cherry) with asymmetric padding, kickers, and continuation links. Paper editor canvas with Cyan Blueprint 1px border behind/around cards.

4. **How It Works (3 steps):** Numbered steps with 24px kickers, 18px body copy, 20px element gaps, 40px section gaps. Use Workshop Green text on Paper, with colored accent markers.

5. **Testimonials:** Acid Glyph panel, 10px radius, Workshop Green quote at 50px/54.968px. Flanked by raw rectangular black-and-white portrait crops. Navigation arrows at 50px/54.968px in Workshop Green.

6. **Pricing (3 tiers):** Three pricing cards on Paper/Blush Paper surfaces, 10px radius, no shadows. Lime Purchase Button as primary CTA on the featured tier. 40px gaps between cards.

7. **FAQ:** Accordion-style, flex layout, Workshop Green questions at 20px, body answers at 18px. Expand/collapse via CSS transitions. Keyboard accessible.

8. **Final CTA:** Large saturated Acid Glyph field with Workshop Green headline and Lime Purchase Button.

9. **Footer:** Paper background, secondary links at 14px, Workshop Green text, 20px gaps. Include theme toggle.

## 10. Deliverables

- File structure: separate `index.html`, `style.css`, `script.js`.
- Naming: BEM convention throughout.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders allowed only where content is genuinely unspecified.
- All user-facing copy in English.

## 11. Do's and Don'ts

**Do:**
- Use Paper as dominant canvas; reserve colored surfaces for self-contained feature moments.
- Set display headlines in Symbol Helper 400 at 80px/80px in Workshop Green.
- Use 14px/20.02px for nav, 18px/25.2px for text links.
- Apply 10px radius to feature cards and canvases; 5px to rectangular buttons.
- Build colored feature cards with 36px top, 40px bottom padding, and documented asymmetric side padding.
- Use Acid Glyph for filled purchase surfaces with Workshop Green text.
- Keep primary layout gaps at 40px between content groups, 20px between related controls/text.

**Don't:**
- Do not introduce bold/semibold; keep weight 400, hierarchy via 14px–480px scale.
- Do not round rectangular public actions into pills; reserve 9999px for language chips.
- Do not use drop shadows on cards, panels, or frames.
- Do not replace Cyan Blueprint product outlines with neutral gray borders.
- Do not make Mustard/Cyan/Orange the default purchase fill; use Acid Glyph.
- Do not hide vector nodes, handles, rulers, interface chrome in product imagery.
- Do not use gradients; color changes are flat, sharply bounded fields.

## 12. Imagery & Surfaces

- Visuals dominated by contained font-editor screenshots and abstract type-design process graphics: Bézier paths, node circles, pen handles, rulers, small toolbars, oversized translucent glyph outlines.
- Testimonial imagery: high-contrast black-and-white close portrait crops with raw rectangular edges around lime quote block.
- Icons sparse, monochrome technical marks (Material Symbols).
- Surfaces separate through flat color, 1px outlines, raw image cropping, overlap — never box shadows.

Now build the complete landing page following every rule above. Output only the three files' contents, clearly delimited by filename.
