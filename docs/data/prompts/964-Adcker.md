# Coding AI Prompt — Adcker-Style Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a **fictional brand** (invent a name, product, and copy — never use "Adcker" or any real trademark). The visual language is a **brutalist editorial poster on warm museum paper**: monochromatic, extreme typographic scale, zero chromatic accents, sharp corners, zero elevation. All user-facing copy must be in **English**.

## 2. File Structure
Deliver exactly three files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."` forbidden). Use one consistent class-naming convention (BEM) throughout.

## 3. CSS Architecture & Tokens
All styling lives in `style.css`. Define these tokens in `:root`:

**Colors:**
- `--color-ink-black: #191919` (all text, borders, links — sole foreground)
- `--color-bone-canvas: #efedea` (page background, surfaces, nav)
- `--color-stone-veil: #e3e1de` (secondary surface variation)
- `--bg-primary: var(--color-bone-canvas)`
- `--bg-secondary: var(--color-stone-veil)`
- `--text-primary: var(--color-ink-black)`
- `--text-secondary: var(--color-ink-black)`
- `--border-default: var(--color-ink-black)`
- `--border-error: var(--color-ink-black)`
- `--border-success: var(--color-ink-black)`

**Contrast pairing:** Light backgrounds pair with Ink Black text; inverted sections use Ink Black as full surface with Bone Canvas text.

**Typography:**
- `--font-base`: Google Font "Inter" (substitute for nhm/psl/psr), loaded via `<link>` in HTML.
- Type scale tokens: `--text-caption: 16px`, `--text-body: 21px`, `--text-subheading: 34px`, `--text-heading: 69px`, `--text-display: 173px`, `--text-display-lg: 185px`.
- Display letter-spacing: -0.05em (-8.65px at 173px, -9.25px at 185px). Body letter-spacing: -0.8px at 16px, -1.05px at 21px. Subheading: -0.51px. Heading: -1.035px.
- Line heights: caption 1.2, body 1.0, subheading 1.0, heading 1.0, display 0.78, display-lg 0.80.

**Spacing & Shapes:**
- Base unit 4px. Spacing tokens: `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-20: 20px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-112: 112px`, `--spacing-200: 200px`.
- `--radius-sm: 0px`, `--radius-md: 0px`, `--radius-lg: 0px` (all corners sharp — mandatory).
- `--shadow-sm: none`, `--shadow-md: none` (zero elevation — mandatory).
- `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: ease`.
- `--z-dropdown: 10`, `--z-modal: 20`, `--z-toast: 30`.

**No chromatic colors anywhere.** No brand accents, no semantic state colors. The monochromatic discipline is the design. All interactive elements are text links with underlines, not colored buttons.

## 4. Mandatory Dark Mode
Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. In dark mode, invert: background becomes Ink Black (#191919), text becomes Bone Canvas (#efedea). Include a visible theme toggle with correct `aria-pressed`/`aria-label`. Persist choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Theme switching must not require HTML restructuring.

## 5. Layout & Typography Rules
- Mobile-first, Flexbox (`display: flex`), default `align-items: center` on all flex containers unless explicitly justified.
- Page max-width 1400px, centered. Section gap 200px. Card padding 32px. Element gap 8px.
- Display text at 173px or 185px only — never between 70px and 170px. Line-height 0.78–0.80 for display. Letter-spacing -0.05em on all display text.
- Body text: 16px or 21px only. Never larger than 21px or smaller than 16px.
- All text weight 400 unless explicitly 700. Hierarchy comes from scale, not weight.
- No border-radius on any element. No shadows, glows, or elevation. Completely flat.
- Respect `prefers-reduced-motion`.

## 6. Icons
Use Google Material Symbols/Icons via `<link>`. No inline SVGs or local icon files.

## 7. Page Sections
Build these sections in order:

1. **Top Navigation Bar** — Fixed, logo (fictional brand name) left at 16px weight 700, "Menu" right at 16px weight 400. No background, no border. Ink Black text on Bone Canvas.
2. **Hero** — Massive centered display headline (185px, weight 400, line-height 0.80, letter-spacing -9.25px) filling viewport width. Embed a candid photograph inline within the text flow (as punctuation). Quiet metadata label nearby at 16px. 200px spacing below.
3. **Features** — 3 case-study-style cards. Flat, no border/shadow, 32px padding, Bone Canvas surface. Project title at 69px (psl substitute), caption at 16px. Images flush, 0px radius. Flex row on desktop, column on mobile.
4. **How It Works** — 3 steps. Display subheadings at 34px, body text at 21px. 200px section gap. No numbered badges with color — use typographic scale.
5. **Testimonials** — Editorial quotes at 21px body with 16px attribution. No card containers, no borders. Whitespace-separated.
6. **Pricing** — 3 tiers. Flat sections on Bone Canvas (or Stone Veil for middle tier). Title at 69px, price at 34px, features at 16px. Text links with underlines as CTAs — no filled buttons.
7. **FAQ** — Accordion using native `<details>`/`<summary>` or semantic markup. 21px questions, 16px answers. Underline on hover. No color change.
8. **Final CTA** — Display headline at 173px, text link CTA with underline.
9. **Footer** — Secondary links at 16px, Stone Veil or Bone Canvas background. No borders. Minimal.

## 8. Component States (enforce via CSS classes)
- **Buttons/Links:** Default (underline affordance), Hover (brightness/shadow shift, cursor pointer), Focus (distinct focus ring via CSS vars), Active (scale 0.97), Disabled (opacity 0.5, greyscale, not-allowed), Loading (spinner without dimension distortion), Success/Error (temporary feedback via text color tokens).
- **Cards:** Default (flex, subtle border via `--border-default`, elevation via vars), Hover (translateY(-2px)), Focus-within (highlight border), Loading (shimmer skeleton), Empty state (Google Icon + guidance text).
- **Forms/Inputs:** Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, error text, error icon), Disabled, Read-only. Flex container wrapping label, input, error feedback.
- **Modals:** Opening, Open, Loading, Success/Error, Closing (CSS transitions). Centered flex, backdrop overlay, Google Icon close button, Esc/overlay close, focus trapping.

## 9. Accessibility
- Semantic HTML5 elements, correct ARIA roles/labels on custom widgets.
- Sufficient contrast in both light and dark modes (15.1:1 AAA target).
- Never rely solely on color for state. Full keyboard operability. Logical DOM/focus order.
- `aria-live` regions for dynamic feedback (form errors, toasts, loading).

## 10. Responsive & Motion
- Fluid sizing, responsive breakpoints, no horizontal overflow. Convert flex rows to columns on small viewports.
- CSS transitions on all state changes (`transition: var(--transition-normal)`). Respect `prefers-reduced-motion`.

## 11. Destructive Actions
Any `.btn-danger` or delete action must be visually distinct in both light and dark themes (use weight/scale emphasis, not color — monochromatic constraint).

## 12. Edit Mode (not applicable — this is a from-scratch build)

## 13. Output
Output only the three files. No preamble, no commentary. Ensure the fictional brand name, product, and copy are invented and never reference "Adcker" or any real trademark. All copy in English.
