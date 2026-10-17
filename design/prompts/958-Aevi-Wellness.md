# Coding AI Prompt — Aevi Wellness Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a fictional wellness brand (invent a name — do NOT use "Aevi Wellness" or any real brand). The page must showcase a Nordic apothecary aesthetic: achromatic palette, whisper-weight typography, hairline borders, product photography overlapping cards, and a single muted slate-blue accent. Deliver separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."` forbidden). Use BEM class naming consistently.

## 2. CSS-First Architecture & Zero Inline CSS
- All styling lives in `style.css`. HTML must remain semantic and styling-agnostic.
- Target all design properties via class/ID selectors only.
- No `style` attributes in HTML.

## 3. Theme Tokens (`:root` + `.dark` + `prefers-color-scheme`)
Define these CSS variables:

**Colors (light):**
- `--color-powder-blue: #d5e0ea;`
- `--color-slate-bloom: #a3bfdb;`
- `--color-warm-ink: #231f20;`
- `--color-true-black: #000000;`
- `--color-paper-white: #ffffff;`
- `--color-mist-gray: #5f6368;`
- `--bg-primary: #ffffff;`
- `--bg-secondary: #d5e0ea;`
- `--text-primary: #231f20;`
- `--text-secondary: #5f6368;`
- `--text-success: #231f20;`
- `--text-error: #231f20;`
- `--border-default: #231f20;`
- `--border-soft: #d5e0ea;`
- `--border-error: #231f20;`
- `--border-success: #231f20;`
- `--accent: #a3bfdb;`

**Dark mode overrides** (under `@media (prefers-color-scheme: dark)` and `.dark` class): swap `--bg-primary` to `#1a1a1a`, `--bg-secondary` to `#2a2a2a`, `--text-primary` to `#f5f5f5`, `--border-default` to `#f5f5f5`, `--border-soft` to `#3a3a3a`, keeping accent `#a3bfdb`. Ensure contrast pairing holds.

**Typography:**
- `--font-base: 'Inter', sans-serif;` (Google Fonts, weights 300 and 500)
- `--text-caption: 10px;` line-height 1.29
- `--text-body: 14px;` line-height 1.31
- `--text-body-lg: 16px;` line-height 1.33
- `--text-heading-sm: 24px;` line-height 1.11
- `--text-heading: 28px;` line-height 1.1
- `--text-heading-lg: 36px;` line-height 1.09
- `--text-heading-xl: 42px;` line-height 1.08
- `--text-display: 54px;` line-height 1.08

**Spacing & Shapes:**
- `--spacing-4: 4px;` `--spacing-8: 8px;` `--spacing-12: 12px;` `--spacing-16: 16px;` `--spacing-24: 24px;` `--spacing-28: 28px;` `--spacing-32: 32px;` `--spacing-48: 48px;` `--spacing-64: 64px;` `--spacing-80: 80px;`
- `--radius-sm: 2px;` `--radius-pill: 60px;`
- `--shadow-sm: none;` `--shadow-md: none;` (no shadows anywhere)
- `--transition-fast: 150ms;` `--transition-normal: 250ms;` `--ease-standard: ease;`
- `--z-dropdown: 10;` `--z-modal: 20;` `--z-toast: 30;`
- `--spacing-gap: 8px;`

## 4. Mandatory Dark Mode
- Implement under `@media (prefers-color-scheme: dark)` AND `.dark` class.
- Persist user choice via `localStorage`, fall back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed`/`aria-label`.

## 5. Flexbox & Mobile-First
- All layouts use Flexbox. Default `align-items: center` on every flex container unless justified exception.
- Mobile-responsive: rows become columns on small viewports. No horizontal scroll.

## 6. Tailwind CSS Integration
Use Tailwind via CDN with `@layer`/`@apply` mapping to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`). All utility classes map back to tokens.

## 7. Typography & Icons (Google Fonts Mandatory)
- Include Google Fonts `<link>` for Inter (weights 300, 500) and Google Material Symbols for icons.
- Bind font to `--font-base`. Forbid raw inline SVGs or local icon files.

## 8. Component Specifications

### Button
- **Primary Pill:** `#a3bfdb` bg, white text, 14px weight 500, 60px radius, 16px horizontal / 12px vertical padding. No shadow. Flex layout, min 44x44px touch target.
- **Ghost/Outlined:** transparent bg, 1px border `#d5e0ea`, text `#231f20`, 2px radius, 16px horizontal / 8-12px vertical padding.
- States: hover (brightness/shadow shift, cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback via success/error tokens).

### Card (Editorial Section Card)
- White bg, 1px hairline border `#231f20`, 2px radius, 16px padding. No shadow. Hover: subtle transform translateY(-2px). Focus-within: border highlight. Skeleton loading shimmer. Empty state with Google Icon + guidance text.

### Form Input
- 1px bottom border `#231f20` only (no sides/top), transparent bg, placeholder 14px weight 300. Focus: border darkens to `#000000`. States: empty, focused, filled, valid, invalid, disabled, read-only.

### Modal
- Opening/open/loading/success-error/closing animated. Centered flex, backdrop overlay, Google Icon close, Esc/overlay close, focus trapping.

## 9. Global UX Rules
- Responsive by default, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, never color-only state communication, semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` regions.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 10. Page Sections Required
1. **Hero:** Full-bleed product photography background, large display headline (54px, weight 300), primary pill CTA, brand wordmark as decorative overlay at display size.
2. **Features:** 3 editorial cards (white bg, hairline border, 2px radius) with icon + title + description.
3. **How It Works:** 3 steps with number, title, description, connected by hairline dividers.
4. **Testimonials:** `#d5e0ea` background band, 5-star row in `#231f20`, centered 14px weight 300 quote, attribution in 10-12px small caps.
5. **Pricing:** 3 tiers, cards with hairline borders, primary pill CTA on recommended tier.
6. **FAQ:** Accordion-style, hairline dividers, expand/collapse via CSS transitions.
7. **Final CTA:** `#d5e0ea` band with display headline and primary pill button.
8. **Footer:** Secondary links, hairline top border, minimal.

## 11. Do's and Don'ts (enforce strictly)
- `#a3bfdb` exclusively for primary action button — never decorative fill, text, or large background.
- All headlines weight 300, line-height 1.08–1.11. Never bold a heading.
- 60px radius only for primary pill button; everything else 2px.
- Section separation via `#d5e0ea` bands and 1px `#231f20` hairlines — no shadows, no large margins.
- Product photography full-bleed, no padding/frames.
- Palette 95%+ achromatic. Chromatic use only functional.
- 4px base spacing, snap to multiples of 4.
- NO second accent color. NO shadows/glows/blur. NO border-radius >2px except pill. NO headings weight 400+. NO vibrant colors for icons/links/hover. NO padded product photography. NO colored/filled card backgrounds.

## 12. Imagery & Layout
- Photography dominant, full-bleed, overlapping. Labels float bottom-left in white type.
- Max-width ~1200px centered, hero/section bands full-bleed. Sections alternate white and powder-blue bands. 48px section gaps. Text-left/image-right in editorial sections, centered-stacked in product grids.

## 13. Deliverables
- `index.html`, `style.css`, `script.js`.
- BEM naming convention throughout.
- All user-facing copy in English.
- Invent fictional brand name, products, and copy. Never use real brand names, logos, trademarks, or product names.
- No lorem-ipsum-only; use realistic wellness copy.

## 14. Edit Mode Note
Not applicable — this is a from-scratch build.

## 15. Output
Generate the three files with complete, production-ready code. Ensure no inline CSS, no inline SVGs, Google Fonts/Icons only, full dark mode, accessibility, and all specified sections.The prompt has been generated above. It instructs the coding AI to build a complete, responsive landing page following the Aevi Wellness design system with all mandatory architectural rules (CSS-first, zero inline CSS, mandatory dark mode, flexbox defaults, Google Fonts/Icons, accessibility, and full component state coverage) enforced. All copy is specified in English, and the coding AI is directed to invent a fictional brand name and products rather than reuse real trademarks.
