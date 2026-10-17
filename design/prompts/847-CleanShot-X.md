# CleanShot X–Style Landing Page — Coding Prompt

You are a front-end coding agent. Build a complete, responsive landing page (Hero, Features with 3 cards, How It Works with 3 steps, Testimonials, Pricing with 3 tiers, FAQ, Final CTA, Footer with secondary links) in the CleanShot X visual style. Invent a fictional brand name, product, and copy — never use the real brand name, logo, trademarks, or product names. Output separate `index.html`, `style.css`, and `script.js` files. No inline `style="..."` attributes. Use one consistent class-naming convention (BEM). Use Tailwind CSS via CDN with `@layer`/`@apply` driven by CSS variables, or clean custom CSS.

## 1. CSS-First Architecture & Tokens

Define all tokens in `:root` and a `.dark` class plus `@media (prefers-color-scheme: dark)`:

Colors: `--color-paper-white: #ffffff; --color-absolute-ink: #000000; --color-graphite: #161618; --color-soft-charcoal: #6a6a6b; --color-studio-black: #0f0f12; --color-electric-capture-blue: #0d44e8; --color-electric-blue-sweep: linear-gradient(90deg, #161618 0%, #161618 60%, #174ef2 100%);`

Light-mode background must not be pure white where a near-white is needed — use `#fefefe` for any near-white surface; page canvas uses `--color-paper-white`. Contrast pairing: light backgrounds pair with dark text tokens, dark backgrounds (Studio Black) pair with `--color-paper-white` text.

Spacing: base 4px; tokens `--spacing-4` (4px) through `--spacing-200` (200px) as in spec. Radius: `--radius-sm` 14px, `--radius-md` 20px, `--radius-lg` 40px, plus `--radius-pill` 9999px. Shadows: `--shadow-sm`, `--shadow-sm-2`, `--shadow-sm-3`, `--shadow-lg`, `--shadow-card` (the recorded four-layer graphite shadow), `--shadow-button-blue` (blue inset shadow). Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`. Z-index: `--z-dropdown`, `--z-modal`, `--z-toast`.

Typography: Google Sans Flex (weights 400, 450, 550, 600) via Google Fonts `<link>`, bound to `--font-base`. Substitute Inter if unavailable. Type-scale tokens: `--text-micro-label` (13px/550/1.23), `--text-caption` (13px/450/1.23), `--text-metadata` (14px/550/1.43), `--text-body-small` (14px/450/1.43), `--text-nav` (15px/550/1.6), `--text-body` (18px/450/1.67, +0.18px tracking), `--text-feature-heading` (20px/600/1.4), `--text-section-heading` (40px/600/1.2, -0.8px tracking), `--text-display` (60px/600/1.1, -1.2px tracking). Hero headline: 60px/600, 66px line-height, -1.2px tracking, Absolute Ink, with only the final key word in Electric Blue Sweep gradient text. Section headings: 40px/600, 48px line-height, -0.8px tracking. Supporting paragraphs: Soft Charcoal, 18px/450, 30px line-height — never Absolute Ink.

Icons: Google Material Symbols only; no inline SVGs or local icon files.

## 2. Mandatory Dark Mode

Provide dark tokens under `.dark` and `@media (prefers-color-scheme: dark)`. Background and text variables must switch seamlessly. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle with correct `aria-pressed`/`aria-label`. In dark mode, maintain contrast pairing: dark backgrounds use light text.

## 3. Layout & Components

Flexbox everywhere; every flex container defaults to `align-items: center` unless justified. Mobile-first, no horizontal scroll; convert rows to columns on small viewports.

Components required with full states:
- Buttons: default, hover (brightness/shadow + cursor pointer), focus (ring via CSS vars), active (scale 0.97), loading (spinner, disabled, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error. Minimum 44x44px touch target. Electric Purchase Button: blue fill, white text, 14px radius, 16px horizontal padding, 1px white border, blue inset shadow. White Outline Demonstration Button: white fill, graphite text/border, 14px radius, 20px horizontal padding, play icon with 8px gap. Transparent Outline Navigation Button: transparent bg, 1px graphite border, 14px radius, 16px left / 13px right padding. Circular Icon Control: 40px circle, rgba(22,22,24,0.05) fill, 9999px for small chips, 48px for larger.
- Cards: default (flex, subtle border, elevation), hover (translateY -2px), focus-within, loading skeleton (shimmer), empty state (icon + guidance text). Testimonial cards: white, 20px radius, recorded four-layer graphite shadow, 16px internal spacing, graphite metadata, absolute ink quotes.
- Forms/Inputs: empty, focused (ring), filled, valid, invalid (error border/text/icon), disabled, read-only. Dark Surface Input: transparent bg, white text, 1px rgba(255,255,255,0.24) border, 16px radius, 18px horizontal padding, on Studio Black surface.
- Modal: opening/open/loading/success/error/closing animated; centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

Badges: Studio Announcement Badge (studio black fill, white text 14px/550 +0.14px tracking, 14px radius, 8/8/8/13 padding). Light Utility Badge (white fill, graphite text, 14px radius, same padding, graphite shadow).

## 4. Section Specifications

- Hero: centered white canvas; Studio Black announcement badge above headline; two-line headline (60px/600, -1.2px); Soft Charcoal description (18px/450, 30px lh); side-by-side Electric Purchase Button + White Outline Demonstration Button; guarantee line; pale blue atmospheric glow contained behind hero (not a section background).
- Features: 3 cards, 20px radius, graphite shadow.
- How It Works: 3 steps.
- Testimonials: horizontal carousel of 3 white 20px-radius cards with graphite shadow; author labels 14px/550; quote copy graphite; small circular arrow controls.
- Pricing: 3 tiers.
- FAQ: accordion.
- Final CTA.
- Footer: secondary links.
- Trust logo strip: muted gray marks, 8px/15px gaps, white background.
- Studio Black product band: left-to-right Studio Black → Electric Blue Sweep accent, dark-surface input, white text.

Imagery: product-led; 20px rounded media cards with layered macOS-window depth; no unframed screenshots; no generic decorative illustrations.

## 5. UX & Accessibility

Responsive by default; smooth CSS transitions respecting `prefers-reduced-motion`; sufficient contrast in both modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback. Mandatory visual feedback on every interaction. Destructive actions visually distinct in both themes.

## 6. Deliverables

Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference. No lorem-ipsum where real copy is implied — use invented fictional copy. No unrequested placeholders. Do not use the real brand name, logo, trademarks, or product names anywhere.
