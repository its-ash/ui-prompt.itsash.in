# Coding AI Prompt — Literal Theme Landing Page

## Role & Objective
You are a frontend coding agent. Build a complete, production-ready landing page for a fictional brand using the "Literal" visual style (a literary reading-room aesthetic). Invent a fictional brand name, product, and all copy. Never use the real brand name "Literal", its logo, trademarks, or product names anywhere in the page.

## Deliverables
- Three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."` forbidden).
- One consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- All user-facing copy must be in English.

## 1. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`.
- No `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling so that changing the look requires modifying only CSS.

## 2. CSS Variables & Theme Tokens
Store all visual tokens inside `:root` (and theme classes) using CSS variables:

**Colors:**
- `--color-forest-green: #278458` (primary CTA fill, brand accent, active states — single chromatic note)
- `--color-charcoal: #444340` (primary body/UI text, icon strokes, default borders)
- `--color-soft-gray: #f8f8f8` (page canvas and section backgrounds)
- `--color-warm-gray: #9a988b` (muted helper text, secondary metadata, de-emphasized links)
- `--color-hairline-gray: #eeeeee` (card/component borders, subtle dividers)
- `--color-paper-white: #ffffff` (card surfaces, button text, input fills)
- `--color-ink-black: #000000` (heading text, dark secondary action fill, heavy borders on featured headings)

Map these to the standard semantic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

**Contrast Pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text — enforce for every theme.

**Light Mode Background:** Use `#f8f8f8` (soft gray canvas), not pure white. Where near-white is needed, use `#fefefe`.

**Border Radius & Shadows:**
- `--radius-sm: 4px` (buttons, images)
- `--radius-md: 8px` (cards)
- `--radius-lg: 16px` (large media blocks)
- `--shadow-sm: 0 1px 3px rgba(0,0,0,0.04)`
- `--shadow-md: 0 1px 3px rgba(0,0,0,0.04)`

**Spacing & Transitions:**
- `--spacing-gap: 20px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Spacing Scale:** `--spacing-8: 8px`, `--spacing-16: 16px`, `--spacing-20: 20px`, `--spacing-24: 24px`, `--spacing-28: 28px`, `--spacing-40: 40px`, `--spacing-80: 80px`, `--spacing-160: 160px`, `--spacing-180: 180px`.

**Elevation/Stacking:** `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`.

**Typography tokens:**
- `--font-inter: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif`
- `--font-libre-baskerville: 'Libre Baskerville', Lora, 'Source Serif Pro', 'Crimson Text', serif`
- `--text-caption: 14px` (line-height 1.45)
- `--text-body: 16px` (line-height 1.45)
- `--text-subheading: 22px` (line-height 1.4)
- `--text-heading: 28px` (line-height 1.35)
- `--text-display: 40px` (line-height 1.35)

**Base unit:** 4px. Density: comfortable.

## 3. Mandatory Dark Mode Support
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Require a visible toggle control with correct `aria-pressed`/`aria-label` state.
- In dark mode: invert canvas to a dark warm tone, cards to a slightly lighter dark surface, text to light, borders to subtle dark dividers, and keep forest green as the accent. Maintain contrast ratios.

## 4. Flexbox Layout & Mobile-First Alignment
- Build all layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- All flex layouts must be mobile-responsive (convert rows to columns on small viewports). Prevent horizontal scrolling.

## 5. Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives). All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 6. Typography & Icons (Google Fonts Mandatory)
- Include Google Font `<link>` tags for Inter and Libre Baskerville. Bind to `--font-base`/`--font-inter`/`--font-libre-baskerville`.
- Use Google Material Symbols/Icons for all icons. Explicitly forbid raw inline SVGs or local icon files.
- Icons are line-based, single-stroke, `#444340` or `#9a988b`.

## 7. Component Design Specifications

### Button Component
- **Default:** Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- **Hover:** Visual shift (brightness/shadow) with `cursor: pointer`.
- **Focus:** Distinct focus ring using CSS variables (`outline`/`box-shadow`) for keyboard navigation.
- **Active/Pressed:** Click transform feedback (`transform: scale(0.97)`).
- **Loading:** Disables interactions, prevents double-clicks, renders a CSS spinner or animated Google Icon without distorting button dimensions.
- **Disabled:** Reduced opacity (`opacity: 0.5`), greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback state styles driven by `--text-success`/`--text-error`.

Button variants to include:
- **Primary CTA:** Filled `#278458` background, white text, Inter 15px weight 500, 4px radius, 14px vertical × 28px horizontal padding, right-arrow glyph after label. 100% width on mobile, auto on desktop.
- **Dark App Store Button:** Filled `#000000` background, white text, Inter 15px weight 500, 4px radius, 14px × 28px padding. Apple glyph precedes two-line label "Download on the App Store".
- **Ghost Nav Button (Sign in):** Transparent background, `#444340` text, Inter 15px weight 400, no border. Underline on hover.

### Card Component
- **Default:** Flexible Flexbox layout, styled with subtle borders and elevation using `--bg-secondary` and CSS variables.
- **Hover:** Elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- **Focus-within:** Highlights card borders when a child link/button receives focus.
- **Loading (Skeleton):** Shimmer animation styling defined in CSS to prevent layout jumps.
- **Empty State:** Structured fallback layout featuring a Google Icon and clear guidance text.

Card variants:
- **Feature Card:** `#ffffff` background, 1px `#eeeeee` border, 8px radius, 20px padding. Contains a subheading (Inter 22px weight 700 or Libre Baskerville 28px weight 500) followed by bullet text or a product screenshot. Optional very faint shadow `rgba(0,0,0,0.04)`.
- **Testimonial Card:** `#ffffff` background, 1px `#eeeeee` border, 8px radius, 20px padding. Layout: avatar (circular, ~40px) + display name in Inter 15px weight 500 + verified check + platform glyph on one row, quote text in Inter 15px weight 400 below.

### Form & Input Requirements
- **States:** Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- **Structure:** Flex container wrapping a label, input field, and dedicated error feedback container.
- **Search Input:** Borderless, transparent background, `#444340` placeholder text, magnifying-glass icon at left. Sits flush in the nav bar with no visible container.

### Modal / Popup Requirements
- **States:** Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- **UX Features:** Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, support for closing via `Esc` or overlay clicks.

## 8. Core UX & Micro-Interaction Rules
- **Responsive by Default:** Fluid sizing and responsive breakpoints without horizontal overflow.
- **Smooth Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- **Accessibility (a11y):** Sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- **Mandatory Visual Feedback:** Every user click, hover, or submission must trigger a visible state change.
- **Destructive Actions:** Generic `.btn-danger` or delete actions must be visually distinct in both light and dark themes.

## 9. Page Structure & Sections
Build a complete landing page with these sections in order:

1. **Navigation Bar:** Sticky top header, white background, 1px `#eeeeee` bottom border. Left: wordmark (fictional brand name) in Inter 22px weight 700 + green asterisk glyph. Center: full-width search input. Right: "Sign in" ghost link + green "Join →" CTA button. Height ~60px.

2. **Hero:** Centered vertical stack: serif headline (Libre Baskerville 40px weight 500, `#000000`, centered, line-height 1.35, two-line stack, ~8–12 words), short subtext (Inter 16px weight 400), two CTAs side by side (Primary CTA + Dark App Store Button), then a book-cover collage below (individual book covers as 4px-radius rectangular thumbnails, no shadows, slight rotation variation, layered with subtle overlap — covers provide all the color; no background tint or framing device).

3. **Features (3 cards):** 3-column grid of Feature Cards on `#f8f8f8` canvas. Each card: subheading + bullet list (Inter 15px weight 400, `#444340`, 10px vertical gap, no bullets — clean text stack only) or product screenshot tile (4px radius, no device frame). Section heading in Libre Baskerville 28px weight 500, `#000000`, centered.

4. **How It Works (3 steps):** 3-column layout with numbered steps. Each step: large number, title (Inter 22px weight 700 or Libre Baskerville 28px), description (Inter 15px weight 400). Centered section heading in serif.

5. **Testimonials:** 3-column grid of Testimonial Cards. Section heading "Loved by everyone" (or fictional equivalent) in Libre Baskerville 28px.

6. **Pricing (3 tiers):** 3-column grid of pricing cards. Each: tier name, price, feature list, CTA button. Middle tier highlighted with forest green border or accent. Use `#ffffff` cards on `#f8f8f8` canvas.

7. **FAQ:** Accordion-style FAQ items. Each: question (Inter 16px weight 500) + expandable answer (Inter 15px weight 400). Use semantic `<details>`/`<summary>` or accessible custom implementation.

8. **Final CTA:** Centered section with serif headline, short subtext, and a Primary CTA button. `#f8f8f8` canvas.

9. **Footer:** White background, `#eeeeee` top border. Secondary links, copyright, social icons (Google Material Symbols). Multi-column layout on desktop, stacked on mobile.

## 10. Layout Rules
- Page max-width: 1200px, centered.
- Section gap: 80px vertical.
- Card padding: 20px.
- Element gap: 20px.
- Sticky white nav bar at top.
- Rhythm: serif heading → optional CTA → grid of cards.
- No sidebar, no mega-menu, no sticky in-page nav.
- Centered, symmetric layout — reads like a printed page.

## 11. Do's and Don'ts (Enforce)
**Do:**
- Use `#278458` green exclusively for the primary CTA and the brand star glyph — never as a decorative accent on text, icons, or borders.
- Set headings in Libre Baskerville 28–40px weight 500; never substitute Inter or a system serif for display type.
- Keep page canvas at `#f8f8f8` and card surfaces at `#ffffff` with 1px `#eeeeee` border — avoid colored card backgrounds or drop shadows beyond `rgba(0,0,0,0.04)`.
- Use 4px radius for buttons and images, 8px for cards, 16px for large media blocks — never mix intermediate values like 6px or 12px.
- Center all section headings and keep the 3-column grid consistent across feature and testimonial sections.
- Default to Inter 15–16px weight 400 for body text with 1.45–1.50 line-height.
- Maintain 80px vertical section gaps.

**Don't:**
- Do not introduce a second chromatic color — the monochromatic system is the brand.
- Do not use Libre Baskerville for body text, captions, buttons, or any UI element — reserved for headings only.
- Do not use `#000000` as a primary CTA fill — `#278458` owns that role; `#000000` is only for the dark App Store button and heading text.
- Do not apply heavy drop shadows, glows, or colored shadows — elevation via border and 1–2% opacity shadow only.
- Do not use rounded pill buttons or radii above 16px — crisp and bookish, not bubbly.
- Do not add gradients, glassmorphism, or background images to cards or sections — surfaces stay flat.
- Do not break the centered, symmetric layout with asymmetric or left-aligned hero compositions.

## 12. Imagery & Content
- Imagery is content-driven, not decorative. Use placeholder book-cover thumbnails (4px radius, slight rotation, overlap) in the hero. Use placeholder product screenshots (4px radius, no device frame) in feature cards. Use circular avatar placeholders in testimonials.
- No stock photography, no abstract gradient art, no illustrations.
- Icons are line-based, single-stroke, `#444340` or `#9a988b`.

## 13. Naming & Conventions
- Enforce BEM naming (e.g., `.hero`, `.hero__title`, `.hero__title--large`).
- No lorem-ipsum-only submissions where real copy/labels are expected; invent fictional but realistic English copy for all sections.

## 14. JavaScript Requirements
- Theme toggle with `localStorage` persistence and `prefers-color-scheme` fallback.
- Mobile nav toggle (hamburger) if needed.
- FAQ accordion interactivity (if not using native `<details>`).
- Smooth scroll for anchor links.
- No form validation, popup/modal, or utility/helper JS beyond what's listed — ask the user if additional logic is needed.

## 15. Accessibility Checklist
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
- Sufficient contrast in both Light and Dark modes.
- Never rely solely on color to communicate state.
- Correct ARIA roles/labels on custom widgets.
- Logical DOM/focus order.
- Full keyboard operability.
- `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- Focus rings on all interactive elements.

Output only the three files' contents as specified. No preamble, no closing commentary.
