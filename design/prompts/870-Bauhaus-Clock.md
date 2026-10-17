# Coding AI Prompt — Bauhaus Clock Landing Page

## 1. Project Overview
Build a complete, responsive, accessible landing page for a **fictional brand** (invent a fictional brand name, product name, and all copy). Never use the real brand name, logo, trademarks, or product names referenced in the style source. The visual style must follow the Bauhaus Clock design system described below. Deliver separate `index.html`, `style.css`, and `script.js` files. No inline CSS. No inline `<script>` blocks beyond a single deferred entry-point reference.

## 2. Architecture & Rules (Mandatory)
- **CSS-First, Zero Inline CSS:** All styling in `style.css`. No `style="..."` attributes. Class/ID selectors only. Clean, semantic, agnostic HTML.
- **CSS Variables:** Store all tokens in `:root` and `.dark` class. Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.
- **Contrast Pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.
- **Light Mode Background:** Use `#eef0f2` (Gallery Gray) as the page canvas, not pure white. Use `#fefefe` where near-white is needed.
- **Dark Mode:** Mandatory. Provide tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Theme choice persists via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox:** Default `align-items: center` on every flex container unless explicitly justified. Mobile-first, responsive, no horizontal scroll.
- **Tailwind CSS:** Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). Utilities map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts mandatory. Text: Inter (substitute for native system sans). Icons: Google Material Symbols/Icons. No inline SVGs or local icon files. Include `<link>` tags.
- **Naming Convention:** Use BEM consistently across all deliverables. Never mix conventions.
- **No Unrequested Placeholders:** Use real, invented copy for all sections. No lorem ipsum.

## 3. Theme Tokens — Bauhaus Clock

### Colors
- `--color-gallery-gray`: `#eef0f2` (page canvas, header field, low-contrast sections)
- `--color-porcelain`: `#ffffff` (review cards, floating nav, light panels)
- `--color-instrument-ink`: `#04080d` (hero headlines, body copy, dark product-media fields)
- `--color-charcoal-type`: `#121317` (secondary headings, testimonial quotes)
- `--color-slate`: `#6a6b6f` (muted explanatory copy, low-emphasis labels)
- `--color-graphite`: `#4a4e52` (footer links, subdued inline navigation)
- `--color-dial-teal`: `#a1e5e4` (large feature-card surface, illuminated dial treatment — isolated use only)
- `--color-mint-glass`: `#d5efef` (text-highlight bands, pale feature surfaces)
- `--color-evergreen-dial`: `#00753e` (occasional clock-dial feature surface — isolated product artwork only)
- `--color-machine-night-gradient`: `radial-gradient(53% 128% at 36.4% -18.1%, #6d6f73 0%, #04080d 95.8527%)` (dark clock/product-media atmosphere)
- `--color-icy-display-gradient`: `linear-gradient(#d6f6ff 0%, #f2ffff 100%)` (pale luminous aqua product callouts)
- `--color-luminous-teal-gradient`: `radial-gradient(50% 50% at 50% 24.1%, #bfffff 0%, #29cfcf 100%)` (radial glow within dial-focused graphics)

### Typography
- Font: Inter (Google Fonts), weights 400, 500, 599, 600, 700.
- OpenType features: `"blwf", "cv03", "cv04", "cv09", "cv11"`.
- Type scale:
  - micro-label: 400, 12px, 1.2 lh, 0px tracking
  - body: 400, 20px, 1.4 lh, -0.2px tracking
  - body-strong: 600, 20px, 1.2 lh, 0px tracking
  - product-name: 400, 32px, 1.2 lh, 0px tracking
  - testimonial-quote: 400, 32px, 1.2 lh, +0.192px tracking
  - section-heading: 600, 40px, 1.1 lh, -0.2px tracking
  - feature-heading: 600, 60px, 1.07 lh, -1.02px tracking
  - hero-display: 600, 96px, 1.0 lh, -1.152px tracking
  - oversized-display: 500, 215px, 1.2 lh, -3.225px tracking

### Spacing & Shapes
- Density: comfortable.
- Spacing scale: 4, 5, 8, 10, 12, 14, 15, 16, 20, 23, 25, 30, 35, 50, 75, 100 (px).
- Border radius: cards 30px, links 100px, pills 9999px, images 30px, buttons 100px, small-controls 12px.
- Shadows:
  - subtle: `rgba(0,0,0,0.1) 0px 1px 2px 0px`
  - subtle-2: `rgba(0,0,0,0.1) 0px 0px 0px 0.5px`
  - subtle-3: `rgba(18,19,23,0.02) 0px 0px 0px 1px`
  - sm: `rgba(0,0,0,0.15) 0px -5px 7px 4px inset, rgba(255,255,255,0.5) 0px 2px 0.5px 0px inset`
  - Floating nav: `0 0 0 0.5px rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.1)` with `blur(9px)`
  - Black purchase pill: `inset 0 2px 0.5px 0 rgb(255,255,255), inset 0 1px 1px 0 rgba(255,255,255,0.5), 0 0 1px 0 rgba(0,0,0,0.1), 0 2px 4px 0 rgba(0,0,0,0.1), 0 12px 30px 0 rgba(0,0,0,0.1)`
  - Featured review tile: `0 0 0 1px rgba(18,19,23,0.02)`
- Section gap: 50px. Card padding: 30px. Element gap: 15px.

### Component Specifications
- **Floating Product Navigation:** Porcelain bar, 9999px radius, blur(9px), fine gray perimeter shadow. Clock emblem + 32px/38.4px product name at left. Black purchase pill at right.
- **Black Purchase Pill:** Instrument Ink or black background, white text, 100px radius, 8px vertical padding, 20px system-sans, layered control shadow.
- **Aqua Announcement Pill:** Icy Display Gradient, 9999px radius, 8px horizontal spacing, 20px/25px medium text in Instrument Ink. Small Luminous Teal Gradient dot before label + subtle right chevron.
- **Hero Display Statement:** Instrument Ink, ui-sans-serif 600, 96px/96px, -1.2px tracking. Centered on Gallery Gray. Release pill as only colored punctuation above.
- **Cinematic Clock Media Frame:** Wide black frame, 30px radius, no visible border. Machine Night Gradient within dark imagery. Blurred teal light, mechanical dial details, low-key interior footage.
- **Star Testimonial Marker:** Five small Charcoal Type star icons, compact horizontal row, 8px gaps. Directly above testimonial carousel on Gallery Gray.
- **Editorial Testimonial:** Charcoal Type, ui-sans-serif 400, 32px/38.4px, +0.2px tracking. Circular 9999px avatar, 20px/24px near-600 author name, 16px/19.2px secondary role label.
- **Review Tile:** Porcelain, 30px radius, 30px padding, no shadow. Selective words highlighted with Mint Glass rectangular inline bands. Instrument Ink review text + compact author metadata.
- **Featured Review Tile:** Porcelain, 30px radius, 75px top padding, 30px side/bottom padding, 1px outline rgba(18,19,23,0.02). Longer review copy, no strong elevation.
- **Aqua Feature Card:** Dial Teal surface, 30px radius, 75px top padding, 50px horizontal padding, 30px bottom padding. Instrument Ink typography. Exceptional color field, not repeating neutral card.
- **Benefit Checklist Row:** 20px+ Instrument Ink text, small circular check icon at left, 15px internal gap. Rows separated by 15px. Unboxed Gallery Gray background.
- **Footer Utility Link:** Graphite or 70% Instrument Ink, ui-sans-serif 400, 20px/24px. 500 weight for maker credit. No underlines. Restrained inline spacing.

### Do's
- Use Gallery Gray as default canvas and Porcelain for testimonial/floating-nav surfaces.
- Hero statements: ui-sans-serif 600 at 96px/96px, -1.2px tracking.
- Major section headings: ui-sans-serif 600 at 60px/64px, -1px tracking.
- 30px radii for media frames and cards; 100px for purchase controls; 9999px for pills.
- Standard review tiles: exactly 30px padding, 15px gaps between compact content rows.
- Dial Teal, Mint Glass, Evergreen Dial: isolated product-display surfaces or text highlights only.
- Floating-bar shadow: blur(9px), rgba(0,0,0,0.1) 0 1px 2px 0, 0.5px perimeter shadow.

### Don'ts
- Do not replace Gallery Gray canvas with pure white across the full page.
- No squared card corners; 30px radius for cards and product media.
- Do not put every content block in an elevated card; standard white cards have no shadow.
- No saturated aqua/green as universal button fill; keep Dial Teal and Evergreen Dial inside product-display surfaces.
- No headings above 600 weight or wide tracking; use -0.2px at 40px, -1px at 60px, -1.2px at 96px.
- No generic blue browser-link treatment; footer links use Graphite or 70% Instrument Ink.
- Do not flatten clock imagery into bright catalog photography; retain black fields, blurred teal illumination, mechanical close-up atmosphere.

## 4. Page Sections (In Order)
1. **Hero:** Aqua Announcement Pill above centered hero-display headline (Instrument Ink, 96px/96px, -1.2px tracking) on Gallery Gray. Below: 30px-radius black cinematic clock-media frame (Machine Night Gradient). Floating Product Navigation bar overlays on scroll.
2. **Features (3 cards):** Three feature cards. Use Aqua Feature Card (Dial Teal) for one exceptional card; Porcelain tiles for others. Oversized centered section heading (60px/64px, -1px tracking).
3. **How It Works (3 steps):** Three steps with benefit checklist styling. Instrument Ink text, circular check icons, 15px gaps. Gallery Gray background, unboxed.
4. **Testimonials:** Star Testimonial Marker (5 stars) above editorial testimonial quote. Carousel of Review Tiles (Porcelain, 30px radius, 30px padding, Mint Glass highlights). Include one Featured Review Tile variant.
5. **Pricing (3 tiers):** Three pricing tiers. Use Porcelain cards with 30px radius. Black Purchase Pill for primary CTA. Benefit checklist rows for feature lists.
6. **FAQ:** Accordion-style FAQ. Porcelain or Gallery Gray surfaces. Instrument Ink questions, Slate answers. Smooth CSS transitions.
7. **Final CTA:** Centered section with oversized heading, benefit checklist reassurance, black purchase pill CTA. Gallery Gray background.
8. **Footer:** Utility links in Graphite, 20px/24px. Maker credit in 500 weight. Restrained inline spacing, no underlines. Secondary links only.

## 5. Component States (Mandatory)
- **Buttons:** Default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), Hover (brightness/shadow, cursor pointer), Focus (distinct focus ring via CSS variables), Active (transform scale 0.97), Loading (disabled, CSS spinner, no dimension distortion), Disabled (opacity 0.5, greyscale, cursor not-allowed), Success/Error (temporary feedback via --text-success/--text-error).
- **Cards:** Default (flex, subtle borders, elevation via --bg-secondary), Hover (elevation/shadow shift or translateY -2px), Focus-within (highlight borders), Loading skeleton (shimmer animation), Empty state (Google Icon + guidance text).
- **Forms/Inputs:** Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Flex container wrapping label, input, error feedback.
- **Modals:** Opening, Open, Loading, Success/Error, Closing (CSS transitions). Centered flex (align-items center), backdrop overlay, Google Icon close button, keyboard focus trapping, Esc/overlay close.

## 6. UX & Micro-Interactions (Global)
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`). Respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes. Never rely solely on color for state. Semantic HTML5. Correct ARIA roles/labels. Logical DOM/focus order. Full keyboard operability. `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 7. Deliverables
- `index.html`, `style.css`, `script.js`.
- BEM naming convention throughout.
- No inline CSS. No inline SVGs. Google Fonts and Material Symbols only.
- All copy in English (fictional brand, invented product name and content).
- Dark mode toggle with localStorage persistence and prefers-color-scheme fallback.
