# Landing Page Build Prompt — "Beings" Editorial Portrait Theme

## 1. Project Overview
Build a complete, responsive landing page for a **fictional** brand (invent a name, product, and copy — never use the real "Beings" brand name, logo, trademarks, or product names). Theme: light, warm paper editorial portrait gallery. Sections: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. Deliver separate `index.html`, `style.css`, `script.js`. No inline CSS; no inline `<script>` beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) throughout.

## 2. Architecture & Mandatory Rules
- **CSS-First / Zero Inline CSS:** All styling in `style.css`; forbid `style="..."`. Target via class/ID selectors only; keep HTML semantic and styling-agnostic.
- **CSS Variables:** Define all tokens in `:root` and theme classes. Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm/md/lg`, `--shadow-sm/md`, `--spacing-gap`, `--transition-fast/normal`, `--ease-standard`, `--z-dropdown/modal/toast`, `--font-base`. Contrast pairing enforced for every theme.
- **Light Mode Background:** Use `#fefefe` where near-white needed; primary canvas is Paper White `#ffffff` (theme-appropriate, not pure default). Dark mode mandatory.
- **Dark Mode:** Provide tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Seamless variable switching. Persist choice via `localStorage`, fallback to `prefers-color-scheme`; visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox:** All layouts use `display: flex`; every flex container defaults to `align-items: center` unless justified exception. Mobile-responsive (rows→columns), no horizontal scroll.
- **Framework:** Tailwind CSS or clean custom CSS via `@layer`/`@apply`; utilities map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts only. Text: Space Grotesk (Die Grotesk B SemiBold substitute, weight 400), Archivo (Die Grotesk B Bold substitute), Archivo Black (Die Grotesk B/C Black substitute), Anton (Bonto substitute). Icons: Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 3. Theme Tokens (Beings)
Colors:
- `--color-paper-white: #ffffff` (primary canvas)
- `--color-milk-paper: #fff4ec` (warm light surface)
- `--color-cocoa-ink: #1b0800` (primary text, nav, dark surface)
- `--color-talent-peach: #f6c9a1` (display text on dark surfaces only)
- `--color-home-umber: #381a06` (deep editorial panel)
- `--color-join-blush: #fae3cf` (participation surface)
- `--color-shortlist-clay: #78492d` (saved-talent surface)
- `--color-shortlist-cream: #fdf4ed` (text on clay)
- `--color-peach-wash: #ffe2cc`
- `--color-profile-copper: #db9a68`
- `--color-fine-grey: #999999` (thin unfilled circular linework only)

Typography scale (all weights 400):
- nav-control: Space Grotesk 12px/16.8px, uppercase
- body: Space Grotesk 12px/16.8px
- skip-link: Space Grotesk 15px/21px
- partner-label: Space Grotesk 16px/17.6px
- intro-heading: Archivo 22px/24.2px
- statement-heading: Archivo Black 30px/35.25px
- display-title: Anton 66px/66px, letter-spacing -1.99px

Spacing base unit 6px; use 6/8/12px. Border radius 0px for links, images, buttons. Element gap 12px. No shadows. No rounded corners anywhere.

## 4. Component Specifications
- **Utility Header:** Paper White bar, Cocoa Ink 12px Archivo uppercase nav labels, 16.8px line-height, 8px internal link padding.
- **Text Nav Link:** transparent, Cocoa Ink, Archivo 12px/16.8px uppercase, 0px radius, 8px padding, no filled background.
- **Transparent Utility Button:** transparent bg, Cocoa Ink text+border, 0px radius, 0px padding, uppercase Archivo 12px/16.8px.
- **Skip Link:** White Space Grotesk 15px/21px on Cocoa Ink focus surface.
- **Intro Copy Block:** Cocoa Ink Archivo 22px/24.2px heading + compact Space Grotesk 12px/16.8px support copy.
- **Bonto Display Title:** Anton 66px/66px, -1.99px tracking, Talent Peach on Home Umber.
- **Dark Editorial Statement Panel:** Home Umber surface, Talent Peach Archivo Black 30px/35.25px statement + Space Grotesk 12px/16.8px support copy.
- **Sharp Portrait Media Block:** high-contrast tightly cropped portrait, raw 0px radius, no borders/shadows, on Paper White or Milk Paper.
- **Orbital Line Motif:** single oversized Fine Grey unfilled circular hairline overlapping portrait boundary and adjacent empty surface; interior transparent.
- **Shortlist Surface:** Shortlist Clay surface, Shortlist Cream Space Grotesk 16px/17.6px, square 0px geometry.
- **Partner Name Label:** Milk Paper Space Grotesk 16px/17.6px on Cocoa Ink or Home Umber.

Buttons: default flex (align-items center, justify-content center, gap 0.5rem), min 44x44px touch target; hover brightness/shadow + cursor pointer; focus ring via CSS vars; active scale(0.97); loading disables + CSS spinner without dimension change; disabled opacity 0.5 greyscale cursor not-allowed; success/error states via `--text-success`/`--text-error`.

Cards: flex layout, subtle borders/elevation via `--bg-secondary` vars; hover elevation/translateY(-2px); focus-within border highlight; loading skeleton shimmer; empty state with Google Icon + guidance text.

Forms/Inputs: empty/focused/filled/valid/invalid/disabled/readonly states; flex container with label, input, error feedback.

Modals: opening/open/loading/success-error/closing animated; centered flex, backdrop, Google Icon close button, focus trap, Esc/overlay close.

## 5. UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never color-only state; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No bright blue/green/red status colors; stay within Cocoa Ink and peach-to-umber range.

## 6. Section Composition Guidance
- Hero: Paper White canvas, compact 12px/16.8px uppercase Archivo nav row in Cocoa Ink, monumental Cocoa Ink identity wordmark, sharp-edged portrait crop.
- Features: 3 cards with sharp 0px geometry, no shadows.
- How It Works: 3 steps.
- Testimonials: editorial.
- Pricing: 3 tiers.
- FAQ: accessible accordion.
- Final CTA: participation surface (Join Blush).
- Footer: secondary links, partner labels.

Use invented fictional brand name/product/copy throughout. Never reference real "Beings" branding.

## 7. Deliverables
Separate `index.html`, `style.css`, `script.js`. BEM naming. No lorem-ipsum-only where real copy supplied; placeholders only where genuinely unspecified. No new HTML elements beyond existing structure if modifying later (N/A for fresh build). Output only the finished code files.
