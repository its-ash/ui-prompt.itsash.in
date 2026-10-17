# Landing Page — Bejamas-Inspired Editorial Theme (Fictional Brand)

## 1. Objective
Build a complete, responsive landing page using a Bejamas-inspired visual language: a pale Paper Gray editorial canvas interrupted by immersive Carbon Ink panels with blurred acid-green light streaks, a single Voltage Lime conversion color, and Neue Montreal typography. The coding AI must invent a fictional brand name, product, and all copy — never use the real brand name "Bejamas," its logo, trademarks, or product names anywhere in the page.

## 2. Architecture & Rules
- **CSS-First, Zero Inline CSS:** All styling in `style.css`; no `style="..."` attributes. Use class/ID selectors only. Clean semantic HTML.
- **CSS Variables:** Define all tokens in `:root` and `.dark` / `@media (prefers-color-scheme: dark)`. Required tokens: `--color-paper-gray: #f3f3f4`, `--color-carbon-ink: #131314`, `--color-cloud-white: #ffffff`, `--color-divider-ash: #e0dfdf`, `--color-muted-graphite: #66646d`, `--color-disabled-steel: #838384`, `--color-voltage-lime: #befc65`, `--font-base` (Neue Montreal with Inter fallback), `--radius-sm/md/lg`, `--shadow-sm/md`, `--spacing-gap`, `--transition-fast/normal`, `--ease-standard`, `--z-dropdown/modal/toast`. Enforce contrast pairing in both light and dark themes. Light-mode background must not be pure white; use `#fefefe` where a near-white is needed.
- **Dark Mode Mandatory:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Persist user choice via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** All layouts use Flexbox; default `align-items: center` unless justified. Convert rows to columns on small viewports; prevent horizontal scroll.
- **Tailwind CSS:** Use Tailwind (or clean custom CSS via `@layer`/`@apply`) with utilities mapping to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts only. Use Inter as the Neue Montreal substitute. Google Material Symbols for icons; no inline SVGs or local icon files.
- **Accessibility:** Semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback, sufficient contrast in both themes, never rely on color alone for state, respect `prefers-reduced-motion`.

## 3. Design Tokens
- **Colors:** as listed above.
- **Typography:** Single family (Inter). Weights 400/500/600. Type scale tokens: `--text-skip-link` (14px/600), `--text-metadata` (14px/400), `--text-body` (16px/500), `--text-navigation` (18px/400), `--text-button` (20px/500), `--text-footer-nav` (20px/500), `--text-lead` (24px/500), `--text-section-heading` (30px/500), `--text-testimonial` (30px/500), `--text-problem-heading` (32px/500, -0.64px), `--text-editorial-display` (56px/500, -1.40px), `--text-hero-display` (72px/400, -2.52px). Line heights per spec.
- **Spacing:** Base 4px; scale 4/8/16/20/24/32/40/48/64/80/96/128. Section gap 32px, card padding 20px, element gap 20px.
- **Radius:** hero 32px, cards/links/images 17.6px, buttons 9999px, compact buttons 8px.
- **Shadows:** md only for rare floating controls: `0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)`.
- **Elevation:** Separation via color fields, 1px Divider Ash rules, radius changes — not persistent shadows.

## 4. Components & States
- **Overlay Site Header:** Unboxed top bar over dark hero and pale sections. Neue Montreal 18px/28px weight 400 nav; compact wordmark left. Cloud White text on dark imagery, Carbon Ink on Paper Gray. No card fill/shadow.
- **Lime Pill Conversion Button:** Voltage Lime fill, Carbon Ink text, 20px/28px weight 500, 9999px radius, 0px 24px padding. Compact header variant: 18px/28px, 8px 16px padding, 8px radius. All states: hover (brightness/shadow), focus ring, active scale(0.97), loading (spinner, disabled interaction), disabled (opacity 0.5, greyscale, not-allowed), success/error feedback.
- **Dark Outline Pill Button:** Transparent fill, Cloud White text, 1px solid Paper Gray border, 9999px radius, 10px 20px padding, 18px/28px weight 400.
- **Translucent Dark Pill Button:** rgba(19,19,20,0.5) fill, Cloud White text, 1px solid rgba(255,255,255,0.25) border, 9999px radius, 0px 24px padding.
- **Immersive Hero Panel:** Carbon Ink base with blurred acid-green abstract photography, 32px radius (contained). Cloud White 72px/86.4px weight 400 display at -2.52px; muted supporting labels 16px/24px weight 500 at reduced white opacity. Trust mark row: 16px/24px translucent Cloud White lead-in + monochrome Cloud White customer marks, 20px gaps, no cards.
- **Editorial Problem Split:** Two columns separated by 1px Divider Ash rule. Carbon Ink headings: 32px/37.76px weight 500 at -0.64px and 56px/66.08px weight 500 at -1.40px.
- **Featured Project Card:** 17.6px radius, no shadow. Visual areas Divider Ash or contained photography with rounded corners. Title 20px/32px weight 500, metadata 16px/24px weight 500 in Carbon Ink. Hover: translateY(-2px); focus-within highlight; skeleton loading shimmer; empty state with Google Icon + guidance text.
- **Project Metric Chip:** Cloud White fill, Carbon Ink text, 9999px radius, 8px 16px padding, 14px/20px weight 600. Stack with 6px gap.
- **Dark Testimonial Card:** Carbon Ink fill, 17.6px radius, no shadow, 128px 90px padding, near-white 30px/45px weight 500 quote.
- **Footer Navigation Column:** Carbon Ink 20px/32px weight 500 group labels, 14px/20px weight 400 indexing text. Footer on Paper Gray with Divider Ash rules, no raised panels.
- **Form/Input:** States empty/focused/filled/valid/invalid/disabled/readonly. Flex container wrapping label, input, error feedback. Error text + icon, success border/icon.
- **Modal:** Opening/open/loading/success/error/closing animated via CSS. Centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via Esc/overlay.

## 5. Page Sections
Hero (immersive dark panel with display copy, trust marks, lime CTA) → Features (3 cards on Paper Gray) → How It Works (3 steps) → Testimonials (dark testimonial card) → Pricing (3 tiers) → FAQ (accordion) → Final CTA (dark panel) → Footer (grouped link columns on Paper Gray).

## 6. Do's & Don'ts
- Do use Paper Gray as default canvas; reserve Voltage Lime for filled conversion buttons/selected controls; set display at 72px/86.4px weight 400 -2.52px; use 56px/66.08px weight 500 -1.40px for large editorial statements; round project cards/media 17.6px and hero 32px; use 1px Divider Ash rules; keep filled conversion buttons 9999px with 24px horizontal padding.
- Don't use Voltage Lime as page background/card fill/gradient; don't replace dark hero with flat lime/white; no heavy card shadows; no weight 600/700 major headlines; no square project imagery; no saturated blue/red/purple/orange accents; don't turn every section into white cards — preserve Paper Gray as uninterrupted editorial ground.

## 7. Deliverables
Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point. Consistent class naming (BEM or fixed utility set — never mix). No lorem-ipsum-only submissions where real copy is expected; placeholders only where content genuinely unspecified. All user-facing copy in English.

## 8. Imagery & Layout Notes
Imagery sparse but dominant: dark abstract macro photography of blurred lime-green ribbons/glassy highlights in hero panels. Work cards: contained product-focused photography or bold brand graphics, rounded 17.6px. Icons/marks monochrome. Page: light full-bleed editorial canvas, minimal top bar, large black visual interruptions, left-aligned hero display, proof marks, conversion control; another dark rounded panel with right-aligned explanatory block + paired pill buttons; pale sections flow with fine rules into asymmetric two-column editorial statements; featured-project grid with larger left tile + narrower right tile; sparse horizontal top nav; footer expands into grouped link columns on Paper Gray.

Generate the complete landing page now, following all rules above. Output only the finished code deliverables.
