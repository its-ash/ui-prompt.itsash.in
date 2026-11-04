You are an expert front-end engineer. Build a complete, production-ready landing page as three separate files: `index.html`, `style.css`, and `script.js`. Do not write any inline CSS; all styling must live in `style.css` and be driven by CSS variables and class/ID selectors only. The HTML must remain semantic, clean, and agnostic of visual styling so that the entire look can be changed by editing CSS alone.

## Theme & Brand
Recreate the visual language of a warm editorial cookbook-author atelier: a cream-paper canvas, elegant transitional serif typography, and a single warm near-black ink that carries every text and action. **Invent a fictional brand name, product, and copy. Never use the real brand name, logo, trademarks, or product names of the reference site anywhere on the page.** All user-facing copy must be in English.

## CSS-First Architecture & Tokens
Define every visual token inside `:root` (and a `.dark` class / `@media (prefers-color-scheme: dark)`) using CSS variables:
- Colors: `--primary: #290a08`, `--secondary: #810c00`, `--bg-primary: #f6f0e1`, `--bg-secondary: #fffaec`, `--text-primary: #290a08`, `--text-secondary: #290a08`, `--text-success`, `--text-error`, `--border-default: #e5e7eb`, `--border-error`, `--border-success`, `--accent-link: #fff3cc`, `--paper-white: #ffffff`.
- Contrast pairing: light backgrounds pair with dark ink text; the dark ink surface (`#290a08`) pairs with paper-white text.
- Light-mode background must be `#f6f0e1` (Parchment Canvas), never pure white. Where a near-white is needed use `#fefefe`-equivalent `#ffffff` only for the highest surface lift.
- Radius: `--radius-sm: 0px`, `--radius-md: 0px`, `--radius-lg: 0px` (zero radius is the signature geometry).
- Shadows: `--shadow-sm: none`, `--shadow-md: none` (intentionally shadowless).
- Spacing: `--spacing-gap`, plus scale tokens `--spacing-8` through `--spacing-160` based on an 8px base unit.
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: `--font-base` (Modale Antique substitute: Lora or Source Serif Pro), `--font-display` (Jannon Neo substitute: Cormorant Garamond or EB Garamond). Load both via Google Fonts `<link>` tags. Use Google Material Symbols for any icons; no inline SVGs or local icon files.

## Dark Mode
Implement dark mode via `@media (prefers-color-scheme: dark)` and a `.dark` class toggle. Persist the user's choice in `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed` and `aria-label`. In dark mode, invert the cream canvas to a warm dark surface and the ink text to a warm cream, preserving the tonal two-tone character and the zero-radius, shadowless aesthetic.

## Layout & Typography Rules
- Flexbox for all layout; every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- Mobile-first, responsive, no horizontal scrolling; convert rows to columns on small viewports.
- Max content width 1200px, centered, fully contained (no full-bleed sections).
- Type scale: display 120px, heading-lg 80px, heading 48px, heading-sm 32px, subheading-lg 29px, subheading 26px, body 20px, body-sm 18px. Display/heading text uses `--font-display` at weight 300 with letter-spacing -0.03em (48px+) / -0.02em (20–32px) and line-height 1.0–1.1. Body/UI uses `--font-base` at weight 400/500 with -0.01em tracking.
- Zero border-radius on every element. No shadows, no gradients, no decorative borders. Hierarchy comes from type scale, whitespace, and the cream/ink contrast.
- Section separation is 80–96px of pure whitespace; never horizontal rules or color bands. Continuous cream canvas from top to bottom.
- Inline links use `--accent-link` (#fff3cc) text color with no underline; never blue.

## Component States (enforce via CSS classes)
- Buttons: default (flex, centered, gap 0.5rem, min 44×44px touch target), hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring via CSS vars), active (transform: scale(0.97)), loading (disabled interactions, CSS spinner, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error temporary states.
- Cards: default (flex, subtle border, elevation via surface tokens), hover (translateY(-2px) or shadow shift), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance text).
- Forms/inputs: empty, focused, filled, valid, invalid, disabled, read-only states; flex container wrapping label, input, and error feedback.
- Modal: opening/open/loading/success-error/closing animated states; centered flex, backdrop, Google Icon close button, focus trapping, Esc/overlay close.

## Core UX
- Smooth CSS transitions on all state changes respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes, never color-only state communication, semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## Page Sections (in order)
1. **Hero**: centered display headline (Jannon Neo 80–120px weight 300, ink, -0.03em tracking, line-height 1.0) on parchment canvas with 96–113px vertical padding. No subtitle, no CTA, no decoration — the type is the hero.
2. **Features**: 3 cards on linen (`#fffaec`) surfaces, 0px radius, no border/shadow, 48px padding. Each card: serif heading + body copy + optional inline link.
3. **How It Works**: 3 steps, magazine-paced, generous whitespace.
4. **Testimonials**: editorial quotes in serif, ink on cream.
5. **Pricing**: 3 tiers; the primary action button is the only filled button (ink bg, paper-white text, 0px radius, 8px/16px padding). Other actions defer to it.
6. **FAQ**: accessible accordion with keyboard support and ARIA.
7. **Final CTA**: centered serif headline + single filled order button.
8. **Footer**: minimal text-only links in Modale Antique 18px weight 500, ink, on parchment canvas, 24px top/bottom padding, no background fill, no border-top — separated by whitespace alone. Include secondary links.

## Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent naming convention (BEM) throughout; never mix conventions.
- No lorem-ipsum-only submissions where real copy/labels are expected; placeholders only where content was genuinely unspecified.
- No new HTML elements beyond a reasonable semantic structure; if a style change needs markup that doesn't exist, stop and ask.

Output only the finished prompt itself, with no preamble or closing commentary, mirroring the numbered-header structure above.
