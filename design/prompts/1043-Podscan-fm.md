You are an expert front-end developer. Build a complete, production-ready landing page in a single HTML/CSS/JS deliverable split into three separate files: `index.html`, `style.css`, and `script.js`. Use the Podscan.fm visual style described below, but invent a fictional brand name, product, and copy. Never use the real brand name "Podscan", its logo, trademarks, or product names anywhere in the page.

## 1. Architecture & Rules

**1.1 CSS-First, Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors. Keep HTML semantic, clean, and styling-agnostic.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` using CSS variables. Light mode only (theme is light). Required tokens:
- Colors: `--primary: #059669` (emerald signal), `--secondary: #18181b` (onyx ink), `--bg-primary: #ffffff`, `--bg-secondary: #f4f4f5`, `--text-primary: #18181b`, `--text-secondary: #52525b`, `--text-muted: #71717a`, `--text-tertiary: #a1a1aa`, `--text-success: #16a34a`, `--text-error: #b91c1c`, `--border-default: #e5e7eb`, `--border-silver: #d4d4d8`, `--border-success: #059669`, `--accent-violet: #9333ea`, `--accent-indigo: #4f46e5`, `--accent-pink: #ec4899`, `--accent-cobalt: #2563eb`, `--accent-teal: #14b8a6`, `--accent-marigold: #eab308`, `--wash-mint: #ecfdf5`, `--wash-sky: #eff6ff`, `--wash-lilac: #f3e8ff`, `--wash-sprout: #d1fae5`.
- Radius: `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 16px`, `--radius-pill: 9999px`.
- Shadows: `--shadow-subtle`, `--shadow-md`, `--shadow-xl`, `--shadow-green-hover`, `--shadow-xl-2`.
- Spacing: `--spacing-4` through `--spacing-216` per scale. `--spacing-gap: 16px`, `--transition-fast: 150ms`, `--transition-normal: 250ms`, `--ease-standard: ease`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: `--font-display` (Inter Tight), `--font-base` (system sans stack), `--font-mono` (monospace stack).

**1.3 Dark Mode**
Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Include a visible toggle with `aria-pressed`/`aria-label`, persisting choice via `localStorage` with fallback to `prefers-color-scheme`.

**1.4 Flexbox & Mobile-First**
All layouts use `display: flex` with `align-items: center` by default. Mobile-responsive: rows collapse to columns on small viewports. No horizontal scrolling.

**1.5 Tailwind CSS**
Use Tailwind CSS via CDN with `@layer`/`@apply` directives mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons**
- Google Fonts: Inter Tight (weights 400, 600, 700) for display; system sans for body. Include `<link>` tags.
- Google Material Symbols for all icons. No inline SVGs or local icon files.

## 2. Component Specifications

**2.1 Buttons**
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled, spinner/animated icon, no dimension change.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary states via `--text-success`/`--text-error`.
- Variants: Primary Green (emerald fill, white text), Black Onyx (onyx fill), Violet Tier (violet fill), Ghost (white fill, ash border).

**2.2 Cards**
- Default: flex layout, subtle borders, elevation via CSS variables.
- Hover: `transform: translateY(-2px)` + shadow shift.
- Focus-within: highlight border.
- Loading (skeleton): shimmer animation.
- Empty state: Google Icon + guidance text.

**2.3 Forms & Inputs**
- States: empty, focused (green ring), filled, valid, invalid (error border/text/icon), disabled, read-only.
- Structure: flex container with label, input, error feedback.

**2.4 Modal**
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex, backdrop overlay, Google Icon close button, Esc/overlay close, focus trapping.

## 3. UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes, respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` for dynamic feedback.
- Visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 4. Deliverables
- Files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point.
- Naming: consistent BEM convention throughout.
- No lorem-ipsum where real copy is supplied; placeholders only where genuinely unspecified.

## 5. Page Sections (in order)
1. **Hero** — centered stack: 60px display headline (Inter Tight 700, letter-spacing -0.66px, line-height 1.0, max-width 720px), 18px subhead (system sans 400, #52525b, line-height 1.5, max-width 560px), side-by-side Primary Green CTA + Ghost CTA, trust line at 14px #71717a, then horizontal stat row (3 items: small emerald icon + bold value + muted descriptor).
2. **Features** — 3-card grid (use-case cards): white card, 1px ash border, radius 8px, padding 20px, left-aligned 24px emerald icon in soft square, bold label 14px 600 #18181b, one-line descriptor 13px #71717a. 3 columns, 16px gaps.
3. **How It Works** — 3 steps: numbered step with emerald circle, title 18px 600, description 14px #52525b. Horizontal on desktop, stacked on mobile.
4. **Testimonials** — 2-3 testimonial cards: white card, ash border, radius 12px, padding 24px. Quote text 16px #18181b, author name 14px 600, role 12px #71717a, avatar 40px circle.
5. **Pricing** — 3-tier cards: white, radius 12px, padding 32px, ash border. Top-left 24px category icon in 40px tinted square. Tier name 18px 600. Price 36px 700 with /mo 14px #71717a. Feature list 14px with green check marks. Professional card: 2px emerald border + "Most Popular" emerald pill overlapping top edge. CTAs: green for starter, black for pro, violet for enterprise.
6. **FAQ** — accordion-style: question 16px 600 #18181b, answer 14px #52525b, 1px ash border dividers, expand/collapse via CSS + JS.
7. **Final CTA** — centered: 36px heading #18181b, 16px subtext #52525b, Primary Green CTA button, mint wash background block.
8. **Footer** — white background, 1px top border ash. Logo wordmark pill (onyx fill, white text, radius 9999px). 4 columns of secondary links (14px #52525b, hover #18181b). Copyright line 12px #71717a.

## 6. Style Details
- Page background: #ffffff. Max-width 1200px centered, 32px gutters.
- Section gaps: 64px vertical.
- Card padding: 24px. Element gap: 16px.
- Borders: 1px #e5e7eb everywhere. Shadows: subtle only, reserved hover/floating.
- Typography: negative letter-spacing on all text (-0.4px to -0.66px).
- Radius: cards 12px, inputs 12px, buttons 8px, pills/badges 9999px. Never above 16px on cards/inputs.
- No gradients, no blur, no decorative imagery. Data-first, flat, border-driven.
- Categorical icons: green=monitoring, violet=discovery, blue=API, pink=audience. 40px circular tinted disks.
- Washes (#ecfdf5, #eff6ff, #f3e8ff) only as ~100px callout blocks behind positive/info/premium messaging.

## 7. Navigation Bar
- Sticky, white bg, 1px bottom border #e5e7eb, height 64px, horizontal padding 32px.
- Nav items 14px 500 #52525b, active/hover #18181b.
- Far-right: pill-shaped black "Try Free" button (radius 9999px).
- Logo wordmark badge: pill, #18181b fill, white text, padding 6px 14px, radius 9999px.
- Subtle nav shadow when sticky: 0px 1px 3px rgba(0,0,0,0.1).

## 8. Live Intelligence Feed Card (include in Hero or Features area)
- White card, radius 12px, 1px ash border, padding 16px.
- Top tab row: "Live Intelligence" active with 2px emerald underline, two inactive tabs 14px 500 #52525b.
- Feed rows: 56px height, 32px square brand avatar, two-line mention 14px 400 #18181b, 12px timestamp #71717a, sentiment pill badge aligned right.
- Sentiment badges: Neutral (#f4f4f5 bg, #52525b text), Positive (#d1fae5 bg, #16a34a text), Negative (light rose bg, #b91c1c text). Pill radius 9999px, padding 2px 10px, 12px 500.
- Internal row dividers: 1px #f4f4f5.

## 9. Database Search Bar
- Centered contained block ~800px wide on faint bordered card.
- Container: radius 12px, 1px ash border, padding 4px 4px 4px 16px.
- Inner input: flush, 16px 400 #18181b, placeholder #a1a1aa.
- Trailing 36px square black submit button, white "Search →" 14px 600.
- Search icon glyph inside input at 16px #71717a.

## 10. Naming & Constraints
- Use BEM naming convention consistently.
- All user-facing copy in English.
- Invent fictional brand name, product, and content. Never reference "Podscan" or its trademarks.
- No lorem-ipsum where real copy is appropriate; use realistic invented content.

Generate the complete `index.html`, `style.css`, and `script.js` files now.
