# Landing Page — Modern Treasury Style (Fictional Brand)

You are a senior frontend engineer. Build a complete, production-ready landing page as three separate files: `index.html`, `style.css`, and `script.js`. Do NOT use inline `style="..."` attributes anywhere; all styling lives in `style.css`. Use semantic HTML5, Tailwind CSS utility classes (via CDN) mapped to CSS variables, and Google Fonts (Manrope for display/text, Inter for sans, IBM Plex Mono for mono) plus Google Material Symbols for icons. Invent a fictional brand name, product, and all copy — never use "Modern Treasury", its logo, trademarks, or product names.

## 1. Global Architecture Rules

- **CSS-First & Zero Inline CSS:** All visual rules in `style.css`. HTML stays clean and semantic. No `style` attributes.
- **CSS Variables:** Define all tokens in `:root` and a `.dark` class. Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.
- **Contrast Pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.
- **Light Mode Background:** Use `#fefefe`-ish warm paper `#ffffff` canvas (per theme). Dark mode uses a deep ink background.
- **Dark Mode Mandatory:** Provide tokens under `@media (prefers-color-scheme: dark)` and `.dark`. Theme choice persists via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** Every flex container defaults to `align-items: center`. Convert rows to columns on small viewports. No horizontal scroll.
- **Tailwind Integration:** Use Tailwind utilities mapped to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts only. Material Symbols for icons. No inline SVGs or local icon files.

## 2. Theme Tokens (Modern Treasury Style)

Colors: `--color-paper: #ffffff`, `--color-ink: #151515`, `--color-graphite: #424242`, `--color-steel: #706f6f`, `--color-rule-gray: #dcdcdc`, `--color-edge-gray: #cbcac8`, `--color-ice-panel: #f0f8f9`, `--color-forest-ledger: #0c221d`, `--color-plum-ledger: #543b4e`, `--color-network-green: #29735c`, `--color-mint-subscription: #bae0cf`, `--color-ledger-brown: #7b5953`.

Type scale tokens: `--text-footer-link` (mt-sans 330 14px/1.5), `--text-technical-label` (mt-mono 500 14px/1.2), `--text-control-label` (mt-sans 600 14px/1.5), `--text-nav` (mt-sans 500 14px/1.5), `--text-body` (mt-sans 360 16px/1.5), `--text-body-strong` (mt-sans 600 16px/1.5), `--text-feature-heading` (mt-neue-text 400 21px/1.3), `--text-section-heading` (mt-neue-text 400 32px/1.25), `--text-major-heading` (mt-neue-display 450 47px/1.25), `--text-hero-display` (mt-neue-display 450 71px/1.1). OpenType features `"cv10" 1, "ss07" 1, "ss08" 1` on all.

Spacing base 4px. Radii: cards 8px, links 2px, pills 16777200px, inputs 0px, buttons 2px, nav controls 4px. Shadows: subtle inset, xl soft. Max content width 1200px. Section gap 48px, card padding 24px, element gap 8px.

## 3. Component Requirements

Implement all states for: Button (default, hover, focus, active, loading, disabled, success/error), Card (default, hover, focus-within, loading skeleton, empty state), Form/Input (empty, focused, filled, valid, invalid, disabled, read-only), Modal (opening, open, loading, success/error, closing). Modals need backdrop, close icon, Esc/overlay close, focus trap.

## 4. Page Sections (in order)

1. **Global Nav Bar** — Paper bar, Ink nav 14px/500, 8px gaps, ink inset outlines, shadow. Dropdown trigger with chevron. Outlined nav button. Dark compact button for CTA.
2. **Hero** — Centered text stack: 71px/450 display headline in Ink, 16px/360 paragraph in rgba(21,21,21,0.8), Dark Standard Button, broad graph-paper payment-rail diagram below using Rule Gray + Network Green lines, monospace labels, centered dark logo node. No rounded dashboard cards.
3. **Features** — 3 Ice Narrative Cards (8px radius, 24px padding): Ledger Brown mono eyebrow, 32px/400 heading, 16px/360 Graphite body. Contained product artwork.
4. **How It Works** — 3 steps with technical labels, connectors (Network Green), numbered nodes.
5. **Testimonials** — Wide Ice Panel card: oversized monochrome wordmark left, 16px/360 Graphite testimonial, Dark Compact Button right, two Ink circular carousel controls (16777200px radius) above.
6. **Pricing** — 3 tiers: Paper/Ink cards with feature lists, highlighted tier on Plum Ledger or Ice Panel. Dark Standard Button CTAs.
7. **FAQ** — Accordion-style items with Ink headings, Graphite answers, smooth transitions, keyboard accessible.
8. **Final CTA** — Plum Ledger or Forest Ledger band with Paper heading and Dark Standard Button.
9. **Footer** — Forest Ledger full-width: newsletter row (Paper 16px/600 heading, square Paper email field 0px radius, Mint Subscribe button), translucent white divider, six columns of 14px/330 60%-white links. Group titles Paper 14px/600.

## 5. UX & Micro-Interactions

- Responsive, mobile-first, no horizontal overflow.
- CSS transitions on all state changes, respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, semantic HTML, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 6. Deliverables

- `index.html`, `style.css`, `script.js`. No inline script blocks beyond a single deferred entry point.
- One consistent class-naming convention (BEM) throughout.
- No lorem-ipsum-only; use realistic fictional copy for all sections.
- Do not use the real brand name, logo, trademarks, or product names anywhere. Invent a fictional fintech brand. All user-facing copy in English.
