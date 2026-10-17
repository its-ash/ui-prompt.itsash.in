# Coding AI Prompt — Altitude Beverages Editorial Landing Page

You are an expert front-end engineer. Build a complete, production-ready landing page for a fictional beverage brand. Do NOT use the real brand name "Altitude Beverages", its logo, trademarks, or product names anywhere in the page. Invent an original fictional brand name, product names, and copy. The page must reuse only the visual style described below.

## 1. STRICT ARCHITECTURAL RULES

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. Forbid the `style="..."` attribute in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS only.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens inside `:root` (and theme classes) using CSS variables. Required tokens:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Contrast pairing: every light background token pairs with a dark text token, and every dark background token pairs with a light text token, in both themes.
- Light mode background must not be pure white; use `#fafafa` (Canvas White) as the page background. Where a white/near-white is needed, use `#fefefe`.
- Border radius & shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.
- Spacing & transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

Map the Altitude Beverages palette into these tokens:
- `--bg-primary`: `#fafafa` (Canvas White)
- `--bg-secondary`: `#d9d9d9` (Warm Ash)
- `--border-default`: `#cdcdce` (Mid Gray)
- `--text-primary`: `#07060b` (Ink Black)
- `--text-secondary`: `#000000` (Pure Black)
- Accent micro-contrast: `#ddfcff` (Glacial Mist)
- Dark section surface: `#0c0c14` (Dark Gradient base)

**1.3 Mandatory Dark Mode**
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless an explicitly justified exception exists.
- All flex layouts must be mobile-responsive out of the box (rows convert to columns on small viewports). Prevent horizontal scrolling.

**1.5 Framework Default**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Use Google Fonts for both text and icons. Include `<link>` or `@import` tags and bind to `--font-base`.
- Text faces: HelveticaNowDisplay (substitute Inter Tight, Archivo Black, or Manrope ExtraBold), EditorialNew (substitute PP Editorial New, Cormorant Garamond Light, or Playfair Display), DepartureMono (substitute JetBrains Mono, IBM Plex Mono, or Space Mono), ui-sans-serif (system-ui, -apple-system, sans-serif).
- Icons: Google Material Symbols/Icons only. Forbid raw inline SVGs or local icon files.

## 2. THEME & TYPOGRAPHY SPECIFICATION

**Color discipline:** Monochrome only. Color belongs only in product photography. No brand accent color in UI components. No shadows anywhere — depth comes from surface color steps (`#fafafa` → `#d9d9d9`) and gradient transitions.

**Type hierarchy (strict):**
- HelveticaNowDisplay: mega-scale display (160px/800, line-height 0.90, letter-spacing -0.05em) and caption marks (11px/800). Never use for body content.
- EditorialNew: mid-scale editorial copy (40–60px/200, line-height 1.06, letter-spacing -0.025em). Never below 14px.
- DepartureMono: everything functional — nav, buttons, inputs, metadata (11–12px/400, uppercase, letter-spacing -0.071em).
- ui-sans-serif: fallback body text at 16px/400, line-height 1.50.

**Type scale tokens:**
- `--text-caption`: 11px, line-height 1.79, letter-spacing -0.78px
- `--text-body`: 16px, line-height 1.5, letter-spacing -1.14px
- `--text-subheading`: 18px, line-height 1.43, letter-spacing -0.9px
- `--text-heading-sm`: 40px, line-height 1.06, letter-spacing -1px
- `--text-heading`: 60px, line-height 1.06, letter-spacing -1.5px
- `--text-display`: 160px, line-height 0.90, letter-spacing -8px

**Spacing & shapes:**
- Base unit 4px. Density comfortable.
- Spacing scale: 4, 8, 12, 16, 20, 24, 28, 36, 48, 56, 64px.
- Border radius: nav 100px, cards 44px, inputs 44px, buttons 100px.
- Page max-width 1440px. Section gap 36–80px. Card padding 16–24px. Element gap 8–16px.

**Surfaces:**
- Level 0 Canvas: `#fafafa` (page background)
- Level 1 Pill Surface: `#d9d9d9` (nav pill, button fills, card backgrounds)
- Level 2 Dark Gradient: `#0c0c14` base (full-bleed dark section)

**Elevation:** No shadows. Depth via surface color steps and gradient transitions only.

## 3. COMPONENT SPECIFICATIONS

**Pill Navigation Bar:** Floating pill, 100px radius, `#d9d9d9` background, absolutely positioned top center. Contains 4 monospace links (SHOP, ABOUT, FIND US, CART (0)) at 11–12px DepartureMono uppercase, `#07060b`. Logo top-left as wordmark in HelveticaNowDisplay 18px/500. 40px circular icon button top-right with `#d9d9d9` background and monogram. No background blur or border. Floats over whatever section is beneath.

**Pill Text Button:** 100px radius, `#fafafa` background, 1px `#cdcdce` border, 16–20px horizontal × 17px vertical padding. Label DepartureMono 11–12px, `#07060b`, uppercase, -0.071em tracking. Minimum touch target 44×44px.

**Display Hero Headline:** HelveticaNowDisplay 800 at 160px, line-height 0.90, letter-spacing -0.05em (-8px), `#07060b`. One or two lines maximum.

**Editorial Subheadline:** EditorialNew 200 at 40–60px, line-height 1.06, letter-spacing -0.025em, `#07060b`.

**Product Feature Card:** 44px radius, full-bleed product photography. Floating smaller product card anchored bottom-right overlapping the larger card. Overlay text in DepartureMono 11px for category labels and EditorialNew for product names.

**Floating Product Card:** 44px radius, `#d9d9d9` background or photographic fill. Small product shot, product name in EditorialNew, DepartureMono 11px uppercase category line. Overlaps main feature card for depth without shadows.

**Dark Gradient Section:** Full-width background using multi-stop linear gradient from `#06050a` to `#f5f6f1` (dark to light, top to bottom). Faintly visible watermark wordmark ('altitude' or fictional equivalent) centered. Purely atmospheric, no other UI content.

**Monospace Label Tag:** DepartureMono 11–12px, uppercase, -0.071em tracking, `#07060b`. No background, no border.

**Circular Icon Button:** 40–44px diameter circle (100px radius), `#d9d9d9` background, minimal glyph or monogram.

**Hairline Divider:** 1px line at `#cdcdce`. Rarely used; prefer whitespace.

## 4. COMPONENT STATE REQUIREMENTS

**Button:** Default (flex, align-items center, justify-content center, gap 0.5rem, min 44×44px), Hover (brightness/shadow shift, cursor pointer), Focus (distinct focus ring via CSS variables), Active (transform scale 0.97), Loading (disabled interactions, CSS spinner or animated Google Icon without dimension distortion), Disabled (opacity 0.5, greyscale, cursor not-allowed), Success/Error (temporary feedback via `--text-success`/`--text-error`).

**Card (interactive):** Default (flex layout, subtle borders, elevation via `--bg-secondary`), Hover (elevation/shadow shift or translateY(-2px)), Focus-within (highlight border on child focus), Loading (skeleton shimmer in CSS), Empty State (Google Icon + guidance text).

**Form & Input:** States Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: flex container wrapping label, input, and dedicated error feedback container.

**Modal/Popup:** States Opening, Open, Loading, Success/Error, Closing (all CSS-animated). Centered flex container (align-items center), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 5. CORE UX & MICRO-INTERACTIONS

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes (`.btn-danger`).

## 6. PAGE SECTIONS TO BUILD

Build a complete landing page with these sections, in order:
1. Hero: `#fafafa` background. Massive display headline (160px HelveticaNowDisplay 800) with one sentence of editorial serif subtext (EditorialNew 200) and a single pill text button. Use invented fictional copy.
2. Features: 3 product feature cards (44px radius, full-bleed photography placeholders, floating product cards overlapping).
3. How It Works: 3 steps, each with a monospace label tag, editorial heading, and short body copy.
4. Testimonials: editorial pull-quotes in EditorialNew 200 with author attribution in DepartureMono.
5. Pricing: 3 tiers with pill buttons, monospace labels, hairline dividers.
6. FAQ: accordion-style items with hairline dividers, keyboard accessible.
7. Final CTA: single massive display headline + one pill button on `#fafafa`.
8. Footer: secondary links in DepartureMono, monochrome, no heavy chrome.

## 7. DELIVERABLES

- Separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM or fixed utility set) across the entire deliverable — never mix conventions.
- No lorem-ipsum-only submissions where real copy/labels were supplied; placeholders allowed only where content was genuinely left unspecified. All user-facing copy must be in English.

## 8. IMAGERY & LAYOUT NOTES

- Photography is the sole source of color. Use placeholder images with saturated gradient backgrounds (orange, warm red, amber) for product shots; cans carry gradient wraps dark-to-light. Lifestyle elements as floating garnishes. No illustrations, no icons beyond minimal monogram marks. Imagery full-bleed or tightly contained within rounded frames — never small thumbnails.
- Full-bleed horizontal sections alternating light (`#fafafa`) and dark (gradient to near-black). Navigation floating pill centered at top. Hero single massive display headline with one sentence editorial subtext and one text button. Product sections use card-slot layout: one large feature card + one smaller floating product card overlapping. Dark section spans full width as tonal reset with faint watermark wordmark. Vertical rhythm generous (36–80px section gaps), content centered on max-width ~1200px. No sidebar, no grid-heavy density — every section is a single statement.

## 9. DO'S AND DON'TS

Do:
- Use HelveticaNowDisplay 800 at 160px for the primary hero headline — oversized and compressed, never comfortable or safe.
- Pair ultra-bold display with EditorialNew 200 for subheadings — the 200-vs-800 contrast is the identity.
- Keep all UI chrome monochrome (`#fafafa`, `#d9d9d9`, `#07060b`, `#cdcdce`); color only in product photography.
- Use 100px radius for nav pills and primary buttons; 44px for product cards and content containers.
- Set all nav, button labels, and metadata in DepartureMono uppercase 11–12px with -0.071em tracking.
- Maintain 36–80px section gaps for editorial whitespace.
- Let product photography be the only chromatic element.

Don't:
- No shadows on any component.
- No rounded corners below 44px for cards or 100px for buttons.
- No body text in HelveticaNowDisplay — display headlines at 60px+ only.
- No color for buttons, badges, or interactive elements.
- No chromatic section breaking the light/dark alternation.
- No line-heights above 1.06 for headlines.
- No icons or illustrations in UI — photography, monogram marks, pure typography only.

Output only the finished code files as specified. No preamble, no closing commentary.
