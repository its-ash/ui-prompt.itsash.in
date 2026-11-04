# Landing Page — "AI for Business" Brutalist Editorial Showroom

Build a complete, responsive landing page for a fictional AI-for-business product using a brutalist-editorial visual system. Invent a fictional brand name, product name, and all copy. Never use the real brand name "Dayos", its logo, trademarks, or product names anywhere in the page.

## 1. CSS-First Architecture & Zero Inline CSS

- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors. HTML must remain semantic and styling-agnostic.
- Separate deliverables: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.

## 2. CSS Variables & Theme Tokens

Store all tokens in `:root` using these exact names and values:

**Colors:**
- `--color-carbon-black: #000000`
- `--color-paper-white: #ffffff`
- `--color-warm-canvas: #e5e5e5`
- `--color-mist-gray: #f3f3f3`
- `--color-ash: #c6c6c6`
- `--color-smoke: #979797`
- `--color-slate: #444444`
- `--color-graphite: #2f2f2f`
- `--color-mint-chip: #d1ffca`
- `--color-voltage-yellow: #fff100`

**Semantic aliases (map to the above):**
- `--primary: var(--color-carbon-black)`
- `--secondary: var(--color-slate)`
- `--bg-primary: var(--color-warm-canvas)`
- `--bg-secondary: var(--color-paper-white)`
- `--text-primary: var(--color-carbon-black)`
- `--text-secondary: var(--color-slate)`
- `--text-success: var(--color-mint-chip)`
- `--text-error: #ff3b30`
- `--border-default: var(--color-ash)`
- `--border-error: #ff3b30`
- `--border-success: var(--color-mint-chip)`

**Typography:**
- `--font-base: 'Inter', sans-serif` (substitute for SuisseIntl)
- `--font-display: 'Anton', sans-serif` (substitute for SuisseIntlCond)
- `--font-mono: 'JetBrains Mono', monospace` (substitute for SuisseIntlMono)

**Type scale tokens:**
- `--text-caption: 0.75rem` (12px, line-height 1.6, letter-spacing -0.03em)
- `--text-body-sm: 0.875rem` (14px, line-height 1.3, letter-spacing -0.011em)
- `--text-body: 1rem` (16px, line-height 1.25)
- `--text-subheading: 1.125rem` (18px, line-height 1.33)
- `--text-subheading-lg: 1.25rem` (20px, line-height 1.2)
- `--text-heading-sm: 1.75rem` (28px, line-height 1.3, letter-spacing -0.03em)
- `--text-heading: 2.5rem` (40px, line-height 1.1, letter-spacing -0.02em)
- `--text-heading-lg: 3rem` (48px, line-height 0.9, letter-spacing -0.03em)
- `--text-display: 5rem` (80px, line-height 0.9, letter-spacing -0.03em)
- `--text-display-xl: 8.125rem` (130px, line-height 0.9, letter-spacing -0.03em)

**Spacing & shape:**
- `--spacing-8: 0.5rem`, `--spacing-16: 1rem`, `--spacing-24: 1.5rem`, `--spacing-40: 2.5rem`, `--spacing-64: 4rem`, `--spacing-80: 5rem`, `--spacing-96: 6rem`
- `--spacing-gap: 1.5rem`
- `--radius-sm: 0.25rem`, `--radius-md: 0.5rem`, `--radius-lg: 2rem`, `--radius-xl: 3rem`, `--radius-pill: 4rem`
- `--shadow-sm: none`, `--shadow-md: none` (flat by design — zero shadows)
- `--transition-fast: 150ms`, `--transition-normal: 250ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`

**Contrast pairing rule:** every light background token pairs with a dark text token and vice versa. Enforce for all themes.

**Light mode background:** use `#e5e5e5` (warm canvas), never pure white. Where near-white is needed, use `#fefefe`.

## 3. Mandatory Dark Mode

- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Dark mode palette: background `#1a1a1a`, cards `#2a2a2a`, text `#f5f5f5`, inverted blocks `#000000` (unchanged), mint and yellow accents unchanged.
- Theme switching must work without HTML restructuring. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed` and `aria-label`.

## 4. Flexbox Layout & Mobile-First

- All layout via Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- Mobile-first: rows convert to columns on small viewports. No horizontal scrolling.
- Page max-width: 1200px, centered. Section gap: 80px. Card padding: 24px. Element gap: 16-24px.

## 5. Tailwind CSS Integration

- Use Tailwind CSS via CDN or `@layer`/`@apply` directives. All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

## 6. Typography & Icons (Google Fonts Mandatory)

- Google Fonts `<link>` for Inter, Anton, JetBrains Mono. Bind to `--font-base`, `--font-display`, `--font-mono`.
- Icons: Google Material Symbols only. No raw inline SVGs or local icon files.

## 7. Component Specifications

**Buttons:**
- `.btn-primary` (Filled Dark): `#000000` bg, `#ffffff` text, 8px radius, 16px 24px padding, Inter 16px/500. Min touch target 44x44px.
- `.btn-secondary` (Ghost Border): transparent bg, 1.5px solid `#444444` border, `#444444` text, 4px radius, 16px horizontal padding.
- `.btn-text` (Text Link): no bg/border, `#000000` text, 0-4px radius, underline on hover.
- All states: hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring via CSS vars), active (transform scale 0.97), loading (disabled, CSS spinner, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).

**Cards:**
- `.card` (Standard): `#ffffff` bg, 24-32px radius, no shadow, no border, 24px padding.
- `.card-inverted`: `#000000` bg, 32px radius, white text, no shadow.
- `.card-top-arc`: 64px 64px 0px 0px radius (top corners rounded, bottom flat).
- Interactive cards: hover (translateY -2px), focus-within (border highlight), skeleton loading (shimmer), empty state (Google Icon + guidance text).

**Mint Tag:** `#d1ffca` bg, `#000000` text, 64px radius, 8px 16px padding, 12px JetBrains Mono 400.

**Voltage Highlight:** `#fff100` bg or text on select elements (email links, micro-accents).

**Nav Pill:** `#ffffff` bg, 48px radius, floating capsule. Nav height 8rem. Links: 16px Inter 500 `#444444`, 24px gap.

**Modals:** opening/open/loading/success-error/closing states via CSS transitions. Centered flex, backdrop overlay, Google Icon close button, Esc/overlay close, focus trapping.

## 8. Core UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, never rely solely on color for state, semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 9. Page Sections (in order)

1. **Hero** — Split layout: left 50% has 130px Anton 700 uppercase headline (line-height 0.9, letter-spacing -3.9px, `#000000`) on `#e5e5e5` canvas. Right 50% has a 3D product render placeholder (textured cubes with brand labels). Nav pill at top (8rem height, centered white pill, 48px radius). Include a filled black "Schedule a Demo" button.

2. **Features** — 3 cards on `#e5e5e5` canvas. Each: `#ffffff` bg, 32px radius, 24px padding, 40px Inter 450 uppercase heading `#000000`, 16px body text `#444444`. Mint tag above each title.

3. **How It Works** — 3 steps. Mono labels (12px JetBrains Mono) for step numbers. Headings in 40px Inter 450 uppercase. Body in 16px `#444444`.

4. **Testimonials** — Standard cards with quote text, author name, role. Use inverted card variant for one testimonial for contrast.

5. **Pricing** — 3 tiers. Standard cards. Highlight one tier with inverted card or mint tag "Popular". Buttons per tier.

6. **FAQ** — Accordion-style. Use `<details>`/`<summary>` or flex containers. All styling via CSS classes.

7. **Final CTA** — Inverted dark section: full-width `#000000` bg, 80px vertical padding, 80px Anton 700 uppercase headline `#ffffff`, 16px `#979797` body text. Filled white button or outlined.

8. **Footer** — Compact dark band. Secondary links. Mono labels for metadata.

## 10. Deliverables

- `index.html`, `style.css`, `script.js`.
- BEM naming convention throughout.
- No lorem-ipsum-only submissions; invent real fictional copy for all sections.
- All user-facing copy in English.

## 11. Edit Mode (not applicable — this is a from-scratch build)

N/A for this request.

## 12. Conflict Resolution

If any user request conflicts with a mandatory rule above, keep the mandatory rule and add a one-line explicit exception clause rather than silently dropping the rule. No inline SVGs (use Google Material Symbols). No box-shadows (flat design). No pure white page background (use `#e5e5e5`). No mixed-case headings (all uppercase). No SuisseIntlCond below 48px equivalent (use Anton only at display sizes). No subtle gray borders on cards (use surface color contrast). No chromatic large surface fills (mint/yellow accent-only). No display heading line-height above 0.95. No pure white `#ffffff` as page background. Where near-white needed, use `#fefefe`.
