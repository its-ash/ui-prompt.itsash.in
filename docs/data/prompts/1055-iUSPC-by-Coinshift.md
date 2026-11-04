# Coding-AI Prompt — iUSPC-Style Landing Page (Fictional Brand)

You are building a complete, production-grade landing page in the **"midnight trading floor"** aesthetic: near-black canvas with faint blue cast, flat surfaces separated by 1px hairline borders (no shadows), a single ember red-orange accent used only for ambient glow/focus/live-dot, Inter 300–600, all-caps tracked eyebrow labels, pill geometry on buttons/badges, full-bleed centered 1200px content blocks with 80px vertical gaps. **Invent a fictional brand name, product, and copy. Never use "iUSPC", "Coinshift", their logos, trademarks, or product names anywhere in the page.**

## 1. Architecture & File Structure
- Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference. No inline `style="..."` attributes anywhere.
- All styling lives in `style.css` via class/ID selectors only. HTML must stay semantic and styling-agnostic.
- Use Tailwind CSS (via CDN or build) with `@layer`/`@apply` mapping utilities back to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`). Never mix naming conventions — use BEM throughout.
- Google Fonts: load **Inter** (300,400,500,600) via `<link>` and bind to `--font-base`. Icons via **Google Material Symbols** only — no inline SVGs, no local icon files.

## 2. Design Tokens (`:root` + `.dark` / `prefers-color-scheme`)
Define all tokens as CSS variables:

Colors (dark default; light mode overrides under `@media (prefers-color-scheme: light)` and `.light`):
- `--color-abyss-ink: #020617` (canvas)
- `--color-deep-slate: #0a0e1a` (elevated surfaces)
- `--color-frost-white: #f1f5f9` (primary headline)
- `--color-cloud-gray: #e5e7eb` (body, hairlines)
- `--color-slate-mist: #64748b` (muted)
- `--color-graphite: #475569` (low-emphasis)
- `--color-steel-border: #353845` (outlined button borders)
- `--color-pale-mist: #cbd5e1`
- `--color-ember-glow: #fa3812` (ambient warmth only — never filled button bg)
- `--color-ember-border: #651a15`
- `--color-signal-green: #34d399` (live dot only)

Also expose the standard semantic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm/md/lg`, `--shadow-sm`, `--spacing-gap`, `--transition-fast/normal`, `--ease-standard`, `--z-dropdown/modal/toast`, `--font-base`.

Contrast pairing: light bg tokens pair with dark text tokens and vice versa in every theme. Light-mode background must not be pure white — use `#fefefe` where near-white is needed.

Typography tokens: `--text-caption` (11px/1.5/0.2px), `--text-body` (16px/1.63), `--text-body-lg` (18px/1.56), `--text-subheading` (20px/1.43), `--text-heading-sm` (24px/1.33), `--text-heading` (36px/1.2), `--text-heading-lg` (48px/1.11/-0.025em), `--text-display` (56px/1.08/-0.025em).

Spacing scale: 4,8,12,16,20,24,32,40,48,64,80,96,112,144,160,240 (px) as `--spacing-*`. Base unit 4px. Radius: nav/cards 8px, badges/buttons 9999px. Shadow: `--shadow-sm: 0 0 8px 0 rgba(250,56,18,0.15)`.

Layout: page max-width 1200px, section gap 80px, card padding 32px, element gap 24px.

## 3. Dark Mode (Mandatory)
- Provide tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Default theme is dark.
- Theme switching via `localStorage`, falling back to `prefers-color-scheme` on first visit. Visible toggle control with correct `aria-pressed`/`aria-label`.

## 4. Layout Standards
- Flexbox for all layout. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first: rows collapse to columns on small viewports; no horizontal scroll.
- Full-bleed dark sections stacked vertically, 80px gaps, content centered at 1200px max-width.

## 5. Component Specifications

**Ghost CTA Button:** outlined pill — 1px `--color-steel-border` border, transparent fill, Frost White text 14px Inter 500, 9999px radius, 10px/20px padding, right arrow Material Icon. Larger hero variant: 16px text, 12px/28px padding. Arrow icon shifts to Ember Glow on hover. States: default/hover (brightness+shadow, cursor pointer)/focus (focus ring via CSS vars)/active (scale 0.97)/loading (spinner, disabled interactions, no dimension distortion)/disabled (opacity 0.5, grayscale, not-allowed)/success/error (temporary, via `--text-success`/`--text-error`).

**Section Eyebrow:** 10–12px Inter 500, Cloud Gray or Slate Mist, uppercase, letter-spacing 0.200–0.300em, above headlines.

**Two-Tone Headline:** two lines, first Frost White, second Slate Mist, same size/weight (300), -0.025em tracking at 48px.

**Tier Card:** Deep Slate bg, 1px Cloud Gray hairline border, 8px radius, 32px padding. Left: title Frost White 500 16px + subtitle Slate Mist 12px. Right: Live Status Badge (pill, transparent, 6px Signal Green dot + "Live" Cloud Gray 12px 500, dot carries `--shadow-sm` ember glow).

**Top Nav:** full-width Abyss Ink, 1px bottom border (Cloud Gray 20% opacity). Left: 6px Ember dot + brand wordmark Frost White 16px 500. Center: nav links Cloud Gray 14px 500. Right: 3 utility icons (Material Symbols) in Slate Mist + ghost CTA.

**Two-Column Body Block:** two columns, 32px gap, 1200px max. Left: stacked label list (Slate Mist 16px) separated by 1px Cloud Gray hairlines. Right: paragraph Cloud Gray 16px, line-height 1.63, with optional 3px left Ember Glow border on emphasized callout.

**Trust Bar:** centered "BACKED BY" eyebrow (10px, tracked 0.300em, Cloud Gray 50% opacity) + horizontal row of 5–7 monochrome partner logos at 50% opacity, 48px gaps, 80–120px wide.

**Hero Ambient Background:** full-bleed Abyss Ink with faint perspective grid (1px Cloud Gray lines at 4–8% opacity converging center-bottom) + conic gradient Ember Glow warmth bleeding bottom-right at ~15% opacity. No images.

**Cards (Features):** default/hover (translateY -2px + shadow shift)/focus-within (border highlight)/loading skeleton (shimmer)/empty state (icon + guidance text).

**Forms/Inputs:** states empty/focused/filled/valid/invalid/disabled/readonly; flex wrapper with label, input, error container. (Use in any interactive demo.)

**Modal:** opening/open/loading/success/error/closing animated; centered flex, backdrop, Material Icon close button, focus trap, Esc/overlay close.

## 6. Micro-interactions & UX
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never color-only state; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submit.
- Destructive actions visually distinct in both themes (`.btn-danger`).

## 7. Page Sections (in order)
Hero (ambient bg, eyebrow, two-tone headline, sub-headline, ghost CTA) → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.

## 8. Output
- Files: `index.html`, `style.css`, `script.js`. BEM naming. No lorem-ipsum where real copy is implied — invent fictional copy/labels for the fictional brand. Placeholders only where genuinely unspecified.
- Edit-mode rules do not apply (this is a from-scratch build).

Output only the finished prompt. No preamble, no closing commentary. Mirror numbered headers and bolded sub-rules. All copy guidance in English. All CSS variable/class/file names in English/ASCII. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause.
