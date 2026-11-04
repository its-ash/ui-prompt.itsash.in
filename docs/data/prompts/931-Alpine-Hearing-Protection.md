# Coding AI Prompt — Complete Landing Page (Alpine Hearing Protection Style Reference)

## 1. Project Overview & Theme
Build a complete, responsive, single-page landing site (`index.html`, `style.css`, `script.js`) in the **Sunlit Scandinavian editorial** style. The page must be light-mode-first with mandatory dark mode support. Invent a fictional brand name, product names, and copy — do not use "Alpine Hearing Protection," its logo, trademarks, or product names anywhere in the page. The visual language only may be reused.

## 2. Strict Architecture Rules
- **CSS-First / Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes. Class/ID selectors only. HTML stays clean and semantic.
- **CSS Variables:** Define all tokens in `:root` and `.dark`/`@media (prefers-color-scheme: dark)`. Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.
- **Contrast Pairing:** Light backgrounds pair with dark text tokens; dark backgrounds pair with light text tokens in every theme.
- **Light Mode Background:** Do not default to pure white; use `#fefefe` where a near-white is needed.
- **Dark Mode:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark`. Theme choice persists via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** Use Flexbox (`display: flex`). Every flex container defaults to `align-items: center` unless explicitly justified. Mobile-responsive, no horizontal scroll.
- **Framework:** Tailwind CSS (or clean custom CSS via `@layer`/`@apply`). Utility classes map to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts only. Text font: DM Sans or Söhne (substitutes for Antarctica) via `<link>`/`@import`, bound to `--font-base`. Icons: Google Material Symbols/Icons only. No inline SVGs or local icon files.

## 3. Theme Tokens (Alpine Style)
Map the following into CSS variables:
- Colors: `--color-cocoa-ink: #200e0e`; `--color-signal-red: #ed212d`; `--color-canvas-white: #ffffff`; `--color-blush-cream: #f8f0ec`; `--color-rose-stone: #f3e7e2`; `--color-apricot-wash: #fde3d6`; `--color-warm-gray: #d2cfcf`; `--color-deep-espresso: #202020`.
- Radius: `--radius-sm: 2.23px` (apply to cards, buttons, badges, inputs, images — sharp corners are non-negotiable).
- No box-shadows on any component (elevation via background-color shifts only).
- Spacing scale: 4,5,6,7,8,10,11,12,14,15,16,20,24,25,30,64px.
- Page max-width: 1280px. Section gap: 64px. Card padding: 15px. Element gap: 8px.
- Typography: DM Sans/Söhne weights 400, 500, 545, 600. Sizes 10,12,13,14,16,18,24,27,42. Line heights 1.10–1.60. Letter spacing -0.01em to -0.02em at 18px+; normal below. Display headlines compress to -0.02em (e.g. -0.84px at 42px).

## 4. Page Sections
Build these sections in order: Guarantee Announcement Bar → Red Brand Bar → Hero → Category Navigation Bar → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer.

### Guarantee Announcement Bar
Narrow dark band at top, Cocoa Ink background, white centered uppercase text 10–12px weight 500, single line, no close button.

### Red Brand Bar
Full-width Signal Red bar ~48px tall, white hamburger icon left, centered brand wordmark in white weight 600, language selector + shopping bag icon right. Padding 10px top/bottom.

### Hero
Full-bleed lifestyle photograph (100% viewport width), white headline bottom-left weight 500 42px letter-spacing -0.84px, subhead weight 400 16px at 90% opacity, filled Cocoa Ink CTA with white text weight 500 14px padding 12px 20px radius 2.23px right-arrow icon, carousel dot indicator bottom-right.

### Category Navigation Bar
Centered row of 7 text-only links weight 500 16px Cocoa Ink, 64px vertical padding, 40px horizontal gap, no underlines/backgrounds/active state. Ghost "Help Me Choose" pill below: 1px Cocoa Ink border, 2.23px radius, transparent, label weight 500 14px with right-arrow, padding 10px 20px.

### Features (3 cards)
Product-style cards: 2.23px Cocoa Ink border, 2.23px radius, no shadow. Square image on solid colored background, padding 15px. Below image: title weight 600 16px, feature line weight 400 13px, tagline 13px, 5-star rating + review count 13px, price weight 600 16px. Top Seller badge (white bg, 2.23px radius, "Top Seller" weight 500 12px Cocoa Ink, padding 5px 10px) on one card. Color swatch row (4–5 squares ~16px, 2.23px radius) below image. No hover lift.

### How It Works (3 steps)
Editorial advice-card style: full-bleed or near-full-bleed image, title weight 600 18px, body weight 400 14px line-height 1.5. No card border/background; image is the container. Alternate white and Blush Cream section backgrounds.

### Testimonials
Advice-card style with portrait photo, quote weight 400 14px, attribution weight 600 13px. Horizontal scroll with circular outlined arrow buttons (32px diameter, 1px Cocoa Ink border, 2.23px radius, transparent fill).

### Pricing (3 tiers)
Cards with 2.23px Cocoa Ink border, 2.23px radius, no shadow, padding 15px. Tier name weight 600 16px, price weight 600 24px, feature list weight 400 13px, CTA button (filled Cocoa Ink for primary tier, ghost for others). Highlight one tier with Blush Cream background.

### FAQ
Accordion-style items: question weight 500 16px Cocoa Ink, answer weight 400 14px. 1px Warm Gray bottom border. Expand/collapse via CSS transitions respecting `prefers-reduced-motion`. Use Material Symbols for chevron.

### Final CTA
Centered text stack on Blush Cream background: headline weight 600 27px, subhead weight 400 16px, filled Cocoa Ink CTA button.

### Footer
White background, multi-column layout (secondary links), Cocoa Ink text weight 400 13px, Signal Red used only for brand mark. No shadows.

## 5. Component State Requirements
- **Buttons:** default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring via CSS vars), active (transform scale 0.97), loading (disabled, CSS spinner, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).
- **Cards:** default (flex, subtle border/elevation via vars), hover (translateY(-2px) or shadow shift — but note: no box-shadows globally; use background shift only), focus-within (border highlight), loading (skeleton shimmer), empty state (Google Icon + guidance text).
- **Forms/Inputs:** empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.
- **Modal:** opening/open/loading/success-error/closing animated via CSS transitions; centered flex container, backdrop overlay, Material Icon close button, focus trapping, close via Esc/overlay click.

## 6. UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes; never rely on color alone; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- Red (`#ed212d`) used only in brand bar, guarantee bar, and product status badges — never buttons/links/hover. Cocoa Ink is the only filled action color.

## 7. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM) across the entire deliverable.
- No lorem-ipsum-only submissions where real copy/labels were supplied; placeholders only where content genuinely unspecified.
- All copy in English.

## 8. Edit Mode (N/A — from-scratch build)
Not applicable; this is a from-scratch build.

Output only the finished prompt. No preamble or closing commentary.
