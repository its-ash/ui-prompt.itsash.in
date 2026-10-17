# Landing Page Build Prompt — "Granola" Theme (Fictional Brand Required)

## 1. Project Overview & Brand Fictionalization

Build a complete, responsive landing page from scratch using the visual language described below. **You must invent a fictional brand name, product, and all user-facing copy.** Never use the real brand name "Granola", its logo, trademarks, or product names anywhere in the markup, text, or assets. Treat the specification below as a pure style reference only.

## 2. Strict Architectural Rules

**2.1 CSS-First & Zero Inline CSS**
- Keep all styling in a dedicated `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors. HTML must remain semantic and styling-agnostic.

**2.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`). Required tokens:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Plus the Granola-specific tokens below.
- Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.
- Light mode background must NOT be pure white; use `#f7f7f2` (Parchment Canvas). Where near-white is needed use `#fefefe`.
- Radius/shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.
- Spacing/transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

**Granola-specific color tokens (map into the standard token set):**
- `--color-parchment-canvas: #f7f7f2` (page background, disabled input surfaces)
- `--color-pure-surface: #ffffff` (cards, nav, inputs, overlays)
- `--color-midnight-ink: #0e0f0c` (primary heading/body text)
- `--color-deep-charcoal: #292929` (nav/footer text, secondary headings)
- `--color-carbon: #454745` (medium-emphasis links/body)
- `--color-slate: #72726e` (tertiary nav, metadata, muted helper text)
- `--color-graphite: #818179` (list secondary text)
- `--color-ash-border: #e3e3e3` (hairline dividers, card borders)
- `--color-stone-border: #d5d5d2` (button borders on white-fill)
- `--color-fog-surface: #eaebe5` (hover fills, subtle overlays)
- `--color-olive-press: #b2c248` (decorative accent surfaces only — never button bg/text)
- `--color-forest-cta: #5b6f00` (primary filled CTA only)
- `--color-fern-border: #788c15` (accent borders, icon tints)
- `--color-sprout-tint: #e5eacd` (secondary pill backgrounds)
- `--color-twitter-blue: #1d9bf0` (social proof icons only)
- `--color-link-cobalt: #006fd6` (inline text links)
- `--color-ember-fill: #e95d3d` (recording indicator dot only)
- `--color-ember-border: #bd4a30` (recording indicator border)

**2.3 Mandatory Dark Mode**
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or `.dark` class.
- Theme variables switch seamlessly without HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label`.

**2.4 Flexbox & Mobile-First**
- All layouts use Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box (rows → columns on small viewports). No horizontal scrolling.

**2.5 Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS via `@layer`/`@apply`). Utility classes map to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

**2.6 Typography & Icons (Google Fonts Mandatory)**
- Text: Google Fonts. Bind to `--font-base`/`--font-melange`/`--font-quadrant`. Use DM Sans or Instrument Sans as Melange substitute; Playfair Display or Lora as Quadrant substitute (Google Fonts available). Include `<link>`/`@import`.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 3. Typography Tokens

- `--font-melange`: DM Sans (substitute), weights 300/400/500/600, sizes 13/14/15/16/20/24px, line-height 1.00–1.50, letter-spacing 0.01em. All UI text.
- `--font-quadrant`: Playfair Display (substitute), weight 400 only, sizes 16/18/20/24/36/48/68px, line-height 1.00–1.40, letter-spacing -0.015em at 48/68px, +0.01em at smaller heading sizes. Headings/display only.
- Type scale tokens: `--text-caption` (13px, lh 1.23, ls 0.13px), `--text-heading-sm` (20px, lh 1.33, ls 0.2px), `--text-heading` (36px, lh 1.25, ls -0.54px), `--text-heading-lg` (48px, lh 1.11, ls -0.72px), `--text-display` (68px, lh 1.0, ls -1.02px).

## 4. Spacing, Shapes, Shadows

- Base unit 4px. Spacing scale: 4/8/12/16/20/24/32/48/56/64/96/112/160/172/176/192px as `--spacing-*`.
- Border radius: cards 8px, inputs 8px, buttons 9999px, cardsXL 16px, tooltips 4px, pillBadge 9999px, cardsLarge 12px, decorativeBlobs 64px.
- Shadows: `--shadow-subtle` (inset 0 0 2px rgba(0,0,0,0.03)), `--shadow-xl` (0 0 36px rgba(0,0,0,0.03)), `--shadow-xl-2` (0 8px 48px rgba(0,0,0,0.15)).
- Layout: page max-width 1200px, section gap 64px, card padding 24px, element gap 16px.

## 5. Component Specifications

**5.1 Button**
- Default: flex, align-items center, justify-content center, gap 0.5rem, min touch target 44x44px.
- Hover: visual shift + cursor pointer.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: transform scale(0.97).
- Loading: disables interactions, CSS spinner/animated Google Icon, no dimension distortion.
- Disabled: opacity 0.5, greyscale, cursor not-allowed.
- Success/Error: temporary styles via `--text-success`/`--text-error`.
- Variants: Primary Download (Forest CTA bg, white text, 9999px radius, Apple icon left), Announcement Pill (Sprout Tint bg, ink text, stone border, 9999px), White Surface (white bg, ink text, stone border, 8px radius), Ghost Text (transparent, cobalt text, no border, 9999px).

**5.2 Card**
- Default: flex layout, subtle borders, elevation via `--bg-secondary`.
- Hover: elevation/shadow shift or translateY(-2px).
- Focus-within: highlight borders on child focus.
- Loading (Skeleton): shimmer animation in CSS.
- Empty State: Google Icon + guidance text.
- Variants: Feature Card (parchment bg, 8px radius, 24px padding, ash border, no shadow), Social Testimonial Card (white bg, ash border, 12px radius, 16px padding, shadow-xl-2), Product Note Card (white bg, 12px radius, 0.5px stone border, hairline dividers, olive highlight rows).

**5.3 Form & Input**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container.

**5.4 Modal/Popup**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, focus trapping, Esc/overlay close.

## 6. Landing Page Sections to Build

1. **Hero**: centered stack. Quadrant 68px weight 400 ink headline, letter-spacing -0.015em, line-height 1.0. Melange 20px weight 400 slate subheadline below with 16px margin-top. Primary CTA: Forest CTA bg, white text, Melange 16px weight 500, 9999px radius, padding 12px 24px, Apple icon inline-left. Gap headline→CTA: 32px. Page bg parchment. Below fold: split product mockup panel floating on white with thin border.

2. **Features**: 3-column grid of Feature Cards (parchment bg, 8px radius, 24px padding, ash border). Each: label (Melange 14px weight 500 Forest CTA, uppercase, 0.01em tracking), headline (Quadrant 24px weight 400 ink), body (Melange 15px weight 400 slate, lh 1.5), product screenshot full card width below.

3. **How It Works**: 3 steps. Numbered display heading (Quadrant), Melange body description. Flex row on desktop, column on mobile. 64px section gap.

4. **Testimonials**: 3-column masonry-like grid of Social Testimonial Cards (white bg, ash border, 12px radius, 16px padding, shadow-xl-2). Avatar 40px circle, username Melange 15px weight 600 #0f1419, handle Melange 14px #536471, body system-ui 15px #0f1419 lh 1.4, inline links cobalt, timestamp + heart count #536471 at 13px, "Read N replies" ghost link cobalt.

5. **Pricing**: 3 tiers. Cards with white bg, ash border, 8px radius, 24px padding. Tier name (Melange), price (Quadrant display), feature list (Melange), CTA button per tier. Highlight middle tier with Forest CTA border or sprout tint.

6. **FAQ**: Accordion-style. Question (Melange 16px weight 500 ink), answer (Melange 15px slate). Hairline dividers. Expand/collapse via CSS (details/summary or class toggle).

7. **Final CTA**: centered. Quadrant headline, Melange subtext, primary CTA button. Parchment or white bg.

8. **Footer**: secondary links grid. Melange 14px slate links. Logo marquee strip above (white bg, top/bottom ash border, 16px padding, CSS marquee 75s infinite, logos desaturated #292929/#72726). Footer bg white or parchment.

## 7. Navigation Bar

Sticky top. White bg, backdrop-filter blur(16px), border-bottom 0.5px stone, shadow-xl. Logo + wordmark left (fictional). Nav links center: Melange 15px weight 400 #292929, 16px horizontal gap. Right: Download pill button (Forest CTA, white text, 9999px radius, 8px 16px padding). ~56px tall. Hoverable dropdowns: 8px radius white panels, 0.5px borders, no mega-menu.

## 8. Core UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth animations: transitions on state changes (0.15s ease for hover color/border/fill; 0.2s ease for layout/opacity). Respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes. Never rely solely on color. Semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- Animation philosophy: utilitarian and fast. 75s infinite marquee for logo strip. 0.9s blink for recording dot. bg-slide for rainbow AI gradient (decorative only). No entrance/scroll-triggered reveals.

## 9. Do's and Don'ts (enforce strictly)

**Do:**
- Quadrant weight 400 at -0.015em tracking for hero/section headings (48px+); Melange for all UI controls/labels/body.
- Forest CTA (#5b6f00) exclusively for filled primary action buttons.
- 9999px radius for pill buttons/badges/chips; 8px for cards/inputs/rectangular controls.
- 0.5px solid #d5d5d2 or 1px solid #e3e3e3 as dominant border weight — hairline only, never 2px+.
- Page bg #f7f7f2 (Parchment Canvas), not pure white. White reserved for card surfaces/elevated components.
- Olive-green spectrum as a family; Twitter Blue only in social embed contexts.
- Section vertical rhythm 64px; 24px card padding for feature cards, 16px for compact cards.

**Don't:**
- Don't use Quadrant for UI labels/buttons/body text.
- Don't add drop shadows to cards beyond social proof card exception (shadow-xl-2).
- Don't use Olive Press (#b2c248) as button bg or text color — decorative highlight surface only.
- Don't apply color backgrounds to full page sections — alternate white and parchment only; chromatic backgrounds only as small card-level accents.
- Don't letter-space Quadrant headings positively (only -0.015em or +0.01em for smaller sizes).
- Don't use rainbow gradient as UI element background — animated text/icon decoration within AI-enhanced copy indicators only.
- Don't substitute system fonts for Melange in nav/button labels.

## 10. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point reference.
- One consistent class-naming convention (BEM or fixed utility set) across entire deliverable — never mix.
- No lorem-ipsum-only submissions where real copy/labels were supplied; placeholders only where content genuinely unspecified.
- All user-facing copy in English (fictional brand).

## 11. Additional Component Details

- **AI Enhanced Badge**: pill, sprout tint bg, fern border, 9999px radius, 4px 10px padding, Melange 13px weight 500 Forest CTA text. Sparkle/AI icon 14px in olive-press preceding label. Use within product mockups.
- **Recording Indicator Dot**: 8px circle, ember fill bg, ember border, blink animation 0.9s ease. Within note-taking UI mockups.
- **Meeting Type Tag**: white bg, stone border, 8px radius, 6px 12px padding, Melange 14px weight 400 ink. Active: sprout tint bg, Forest CTA text, fern border. Horizontal scrollable row, 8px gap.
- **Logo Marquee Strip**: white bg, top/bottom ash border, 16px 0 padding. Logos in #292929 or #72726. CSS marquee infinite. No hover states.

## 12. Imagery & Layout Notes

- Product screenshot composites as primary visual language — no lifestyle photography or abstract illustration.
- Hero: split-panel UI mockups (raw notes view beside AI-enhanced view), borderless floating card frames on parchment canvas.
- Video feed thumbnails: user avatar crops ~60x80px rounded 8px, inline with product UI.
- Social proof section image-free, text-based Twitter card reproductions.
- Logo strip: monochrome partner wordmarks desaturated.
- Icons minimal outlined/mono at 16-20px, used sparingly.
- Imagery density very low — most screen area white/parchment text surface.
- Max-width 1200px centered, symmetric horizontal padding. Single continuous white-to-parchment alternation: white nav → white hero → white product demo strip → white logo marquee (bordered) → feature section on parchment → testimonials on white → CTA footer. No dark sections.
- Testimonials: 3-column masonry-like card grid, 16px column gaps.
- Nav: slim centered bar ~56px, blur backdrop, logo left, 4-5 nav links center at 16px gaps, single pill Download button right.
- Vertical section gaps 64px. No mega-menu.
