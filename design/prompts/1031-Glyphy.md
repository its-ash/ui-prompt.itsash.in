# Glyphy Landing Page — Coding AI Prompt

You are a senior frontend engineer. Build a complete, multi-section landing page in a single deliverable consisting of three separate files: `index.html`, `style.css`, and `script.js`. Do not write any inline CSS or inline scripts beyond a single deferred script reference. Use semantic HTML5 throughout.

## 1. Project Context & Brand Invention

This page implements the **Glyphy** visual identity: a warm-cream canvas cut by horizontal sunset bands (yellow → orange → red → burgundy → plum), achromatic ink-on-buttercream typography, monumental neo-grotesque display type, pixel Japanese eyebrows, pill-shaped buttons, flat 14px-radius cards, and a dense hairline grid aesthetic.

**CRITICAL — Fictional Brand Rule:** Invent a completely fictional brand name, product name, tagline, and all marketing copy. Never use the real brand name "Glyphy", its logo, trademarks, or product names anywhere in the markup, copy, or asset references. The style is borrowed; the identity is new.

## 2. CSS-First Architecture & Zero Inline CSS

- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target elements via class/ID selectors only. Keep HTML semantic and styling-agnostic.
- Use one consistent naming convention (BEM) across the entire deliverable. Never mix conventions.

## 3. CSS Variables & Theme Tokens

Define all tokens in `:root` and mirror them under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Mandatory dark mode support with seamless variable switching.

**Colors:**
- `--color-buttercream: #fef9e6` (page canvas, light text on dark)
- `--color-ink: #000000` (primary text, hairlines, borders)
- `--color-carbon: #060606` (dark cards, filled buttons, nav)
- `--color-driftwood: #c7c3b4` (muted hairline borders)
- `--color-stone: #8d8b80` (secondary text, tertiary borders)
- `--color-amber-pulse: #fdc331` (band 1)
- `--color-ember-glow: #fe5722` (band 2)
- `--color-signal-red: #f0353c` (band 3)
- `--color-merlot-depth: #b4213d` (band 4)
- `--color-plum-shadow: #671c3b` (band 5)

**Generic theme tokens (map to above):**
`--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text, in every theme.

**Light mode background:** Use `#fef9e6` (Buttercream), never pure white. Where near-white is needed, use `#fefefe`.

**Border radius & shadows:** `--radius-sm` (14px), `--radius-md` (14px), `--radius-lg` (28px). No shadows anywhere — flat design. `--shadow-sm`, `--shadow-md` resolve to `none`.

**Spacing & transitions:** `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`. Base unit 4px; scale: 4, 8, 12, 16, 24, 32, 40, 80.

**Elevation/stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.

## 4. Typography & Icons (Google Fonts Mandatory)

- Text: Google Fonts `<link>` for Space Grotesk (700) as Neue Machina substitute, Inter as System85 substitute, JetBrains Mono as System85 Mono substitute, Press Start 2P as Pixel M Plus 10 substitute. Bind primary to `--font-base`.
- Icons: Google Material Symbols only. No inline SVGs or local icon files.
- Type scale tokens: `--text-caption` (12px), `--text-body-sm` (14px), `--text-body` (16px), `--text-subheading` (18px), `--text-heading-sm` (24px), `--text-heading` (32px), `--text-heading-lg` (40px), `--text-display` (64px), `--text-hero` (120px, line-height 0.75).

## 5. Mandatory Dark Mode

- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Theme switching persists via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed` and `aria-label`.

## 6. Flexbox Layout & Mobile-First

- All layouts use Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- Mobile-first responsive: rows convert to columns on small viewports. No horizontal scrolling.

## 7. Framework

Use Tailwind CSS via CDN with `@layer`/`@apply` directives in `style.css`. Utility classes map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

## 8. Component State Requirements

**Buttons (`.btn`):** Default flex, min 44x44px touch target, gap 0.5rem. Hover: brightness/shadow shift + pointer. Focus: distinct focus ring via CSS variables. Active: `transform: scale(0.97)`. Loading: disabled, spinner/icon, no dimension distortion. Disabled: opacity 0.5, greyscale, not-allowed. Success/Error: driven by `--text-success`/`--text-error`. Pill variant: 28px radius, 1px ink border, buttercream fill, 24px/27px padding. Ghost variant: transparent fill on colored bands.

**Cards (`.card`):** Default flex, subtle borders, elevation via `--bg-secondary`. Hover: `translateY(-2px)`. Focus-within: highlight border. Loading skeleton with shimmer. Empty state with Google Icon + guidance text.

**Forms/Inputs:** Empty, Focused, Filled, Valid, Invalid, Disabled, Read-only states. Flex container wrapping label, input, error feedback.

**Modals:** Opening/Open/Loading/Success/Error/Closing animated. Centered flex, backdrop, icon close button, focus trapping, Esc/overlay close.

## 9. Core UX & Micro-Interactions

- Responsive by default, fluid sizing, no overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, never color-only state communication, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 10. Page Sections Required

Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Visual style application:**
- Hero: Buttercream canvas, tiny pixel Japanese eyebrow (14-18px), monumental wordmark at 120px line-height 0.75 in Ink, right-aligned tagline, generous 40-80px padding.
- Sunset bands: stack Amber Pulse → Ember Glow → Signal Red → Merlot Depth → Plum Shadow as full-width category strips where appropriate (e.g., Final CTA or feature bands). Left-aligned name + right-aligned pill button, no rounded band corners, ~40px vertical padding.
- Cards: 14px radius, 27px padding, flat, no shadows. Dark cards (Carbon) with Buttercream text; light cards (Buttercream) with Ink text and Driftwood/Ink border.
- Symbol grid aesthetic: dense continuous grid with 1px Driftwood hairlines where applicable.
- Section headers: Pixel Japanese eyebrow 4-8px above 40px English headline, left-aligned.
- Buttons: pill 28px radius.
- Nav: Carbon bar, GLYPHY-style wordmark (fictional name), links, language toggle, 14px radius on nested containers.

## 11. Deliverables

- `index.html`, `style.css`, `script.js` as separate files. No inline script blocks beyond single deferred entry point.
- No lorem-ipsum-only where real copy is implied; invent realistic fictional copy.
- No unrequested placeholders.

## 12. Edit Mode — Not Applicable

This is a from-scratch build, not an edit of existing markup.

Output only the three files' contents as a single response, with clear file delimiters. No preamble, no closing commentary.
