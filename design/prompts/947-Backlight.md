# Backlight Landing Page — Coding AI Prompt

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Use class/ID selectors only. HTML must remain clean, semantic, and agnostic of visual styling.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` using CSS variables. Required tokens:
- Colors: `--primary` (#dd3508), `--secondary` (#f3b8a9), `--bg-primary` (#e4ddd5), `--bg-secondary` (#ffffff), `--text-primary` (#151515), `--text-secondary` (#4f4f4f), `--text-success`, `--text-error`, `--border-default` (#4f4f4f), `--border-error`, `--border-success`.
- Backlight-specific tokens: `--color-vermillion` (#dd3508), `--color-peach-hairline` (#f3b8a9), `--color-cream-vellum` (#e4ddd5), `--color-bone-white` (#ffffff), `--color-midnight-ink` (#151515), `--color-graphite` (#4f4f4f), `--color-charcoal` (#333333), `--color-ochre-tan` (#d7cabb), `--color-press-black` (#000000).
- Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text.
- Light mode background must not be pure white; use #e4ddd5 (Cream Vellum) as canvas. Use #fefefe where near-white is needed.
- Border Radius & Shadows: `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (20px), `--shadow-sm`, `--shadow-md` (none — flat design).
- Spacing & Transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/Stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode Support**
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Theme switching must not require HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- All flex layouts must be mobile-responsive (rows convert to columns on smaller viewports). Prevent horizontal scrolling.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS or clean custom CSS driven by Tailwind's `@layer`/`@apply` directives.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Use Google Fonts for text and icons. No raw inline SVGs or local icon files.
- Text: Instrument Sans (weights 400, 500, 600) and Fragment Mono (weights 400, 700) via Google Fonts `<link>` or `@import`, bound to `--font-base` and `--font-mono`.
- Icons: Google Material Symbols/Icons.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component Requirements**
- Default: Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`), min touch target 44x44px.
- Hover: Visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: Distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: Disable interactions, prevent double-clicks, render CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: Temporary feedback styles driven by `--text-success`/`--text-error`.
- Primary Pill Button: Bone White fill, Midnight Ink text, 1px Midnight Ink border, 80px radius, 12px 24px padding, Instrument Sans 14px weight 500.
- Outlined Action Button: Transparent fill, 1px Vermillion border, Midnight Ink text, 80px radius, 12px 24px padding, Instrument Sans 14px weight 500.

**2.2 Card Component Requirements**
- Default: Flexible Flexbox layout, styled with subtle borders and elevation using `--bg-secondary` and CSS variables.
- Hover: Elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- Focus-within: Highlights card borders when a child link/button receives focus.
- Loading (Skeleton): Shimmer animation styling in CSS to prevent layout jumps.
- Empty State: Structured fallback layout with Google Icon and clear guidance text.
- Product Card: Bone White fill, Graphite 1px border, 8px radius, 16-24px padding, Instrument Sans 18px weight 500 title in Midnight Ink, body at 14px in Graphite. No shadow, no hover elevation.

**2.3 Form & Input Requirements**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, and dedicated error feedback container.
- Email Input: Transparent background, 1px Bone White border, Bone White placeholder text, 4px radius, Instrument Sans 14px, 12px 16px padding. No focus ring color change — border remains same weight.

**2.4 Modal / Popup Requirements**
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX Features: Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, support for closing via `Esc` or overlay clicks.

## 3. CORE UX & MICRO-INTERACTION RULES

- Responsive by Default: Fluid sizing and responsive breakpoints without horizontal overflow.
- Smooth Animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility (a11y): Sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory Visual Feedback: Every user click, hover, or submission must trigger a visible state change.
- Destructive Actions: Generic `.btn-danger` or delete actions must be visually distinct in both light and dark themes.

## 4. DELIVERABLE & OUTPUT FORMAT

- File Structure: Separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Naming Convention: Enforce one consistent class-naming convention (BEM or fixed utility set) across the entire deliverable — never mix conventions.
- No Unrequested Placeholders: Prohibit lorem-ipsum-only submissions where real copy/labels were supplied; placeholders allowed only where content was genuinely left unspecified.

## 5. EDIT MODE

Not applicable — this is a from-scratch build.

## 6. THEME & STYLE SPECIFICATIONS (Backlight)

**Theme:** Light. Warm editorial language built on cream vellum and one vermillion accent.

**Color Tokens (CSS variables):**
- `--color-vermillion`: #dd3508 (orange accent for outlined action borders, linked labels, lightweight interactive emphasis; NOT primary CTA color)
- `--color-peach-hairline`: #f3b8a9 (orange outline accent for tags, dividers, focused UI edges; NOT primary CTA color)
- `--color-cream-vellum`: #e4ddd5 (page canvas below hero, input borders, soft surface washes)
- `--color-bone-white`: #ffffff (card surfaces, button fills on orange hero, nav text on dark/orange, inverted typography)
- `--color-midnight-ink`: #151515 (primary headings, body text, dark section backgrounds, chat bubble fills, button borders on light)
- `--color-graphite`: #4f4f4f (card borders, secondary text, muted UI rules)
- `--color-charcoal`: #333333 (link text on light surfaces, image strokes, secondary borders)
- `--color-ochre-tan`: #d7cabb (badge backgrounds and borders, secondary surface tint)
- `--color-press-black`: #000000 (icon fills, tight border accents, true-black for print-style contrast moments)

**Typography:**
- Instrument Sans (Google Font): weights 400, 500, 600. Sizes: 12, 14, 16, 18, 20, 24, 28, 32, 39, 48. Line heights: 1.00, 1.15, 1.20, 1.25, 1.30, 1.43. Letter spacing: -0.020em at 14px and up; +0.020em at 12px caption. Primary interface and editorial typeface. Weight 500 for nav and buttons, weight 600 for headings, weight 400 for body.
- Fragment Mono (Google Font): weights 400, 700. Sizes: 14, 16. Line heights: 1.00, 1.15, 1.30. Letter spacing: -0.08em at 14px, -0.02em at 16px. Accent monospace for timestamps, metadata labels, small data tags.
- Type scale tokens: `--text-caption` (12px/17px/0.24px), `--text-body-sm` (14px/20px/-0.28px), `--text-body` (16px/21px/-0.32px), `--text-subheading` (18px/23px/-0.36px), `--text-heading-sm` (20px/24px/-0.4px), `--text-heading` (24px/29px/-0.48px), `--text-heading-lg` (32px/37px/-0.64px), `--text-display` (39px/45px/-0.78px), `--text-display-lg` (48px/48px/-0.96px).

**Spacing & Shapes:**
- Base unit: 4px. Density: comfortable.
- Spacing scale: 4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 120px.
- Border radius: cards 8px, badges 60px, inputs 4px, buttons 80px, chat-bubbles 20px.
- Layout: page max-width 1200px, section gap 64-96px, card padding 16-24px, element gap 16px.

**Components:**
- Primary Pill Button: Bone White fill, Midnight Ink text, 1px Midnight Ink border, 80px radius, 12px 24px padding, Instrument Sans 14px weight 500. Sits on Vermillion hero as only permitted action element.
- Outlined Action Button: Transparent fill, 1px Vermillion border, Midnight Ink text, 80px radius, 12px 24px padding, Instrument Sans 14px weight 500.
- Email Input: Transparent background, 1px Bone White border, Bone White placeholder text, 4px radius, Instrument Sans 14px, 12px 16px padding. No focus ring color change.
- Transparent Nav Bar: Sits directly on Vermillion hero with no background fill. Logo 'BACKLIGHT' left in Bone White, Instrument Sans 12px weight 600, uppercase wide tracking. Nav items in Bone White, 14px weight 500, with Peach Hairline underline for active state. Primary CTA is Bone White pill button flush right.
- Hero Band: Vermillion background spanning full viewport width, 64-96px vertical padding, left-aligned content with 1200px max-width. Display headline in Bone White at 48px, body at 18px in Bone White. Hero is the only place Vermillion appears as a surface.
- Dark Contrast Band: Midnight Ink background, Bone White text, 64-96px vertical padding. Used sparingly — once per page.
- Chat Bubble Card (Dark): Midnight Ink fill, Bone White text, 20px radius, 16px padding, small avatar circle on left. Name + Fragment Mono 14px timestamp above message, message in Instrument Sans 16px weight 400.
- Chat Bubble Card (Light): Bone White fill, Graphite 1px border, Midnight Ink text, 20px radius, 16px padding. Same internal structure as dark variant.
- FAQ Accordion Row: Full-width row, Graphite 1px hairline divider, 24px vertical padding, Instrument Sans 18px weight 500 question text in Midnight Ink. Plus icon right-aligned in Vermillion, 20px. No background fill, no card chrome.
- Carousel Arrow Button: Circular button, 40px diameter, Bone White fill, Midnight Ink 1px border, Midnight Ink chevron icon centered.
- Product Card: Bone White fill, Graphite 1px border, 8px radius, 16-24px padding, Instrument Sans 18px weight 500 title in Midnight Ink, body at 14px in Graphite. No shadow, no hover elevation.
- Pill Badge: Ochre Tan background, Graphite 1px border, 60px radius (pill), 4px 12px padding, Instrument Sans 12px weight 500 in Midnight Ink.
- Sticky Promo Banner: Midnight Ink fill, 8px radius, Bone White text, Fragment Mono 12px weight 700 for 'NEW' label in Vermillion, headline at 16px Instrument Sans weight 500, inline thumbnail image on right with Peach Hairline border.
- Footer: Sits on Vermillion hero continuation or transitions to Midnight Ink. Bone White text, Instrument Sans 14px, link columns separated by Peach Hairline vertical rules. Logo bottom-left in Bone White uppercase.

**Do's:**
- Use Vermillion as full-bleed hero background — only place this color appears as a surface.
- Set border-radius to 80px (full pill) for all primary buttons and 8px for all cards and rectangular elements.
- Apply -0.02em letter-spacing to all Instrument Sans text at 14px and above; +0.02em at 12px caption.
- Use Cream Vellum as page canvas and Bone White for all cards and surfaces on it.
- Use Fragment Mono at 14px with -0.08em tracking for timestamps, metadata, small data labels in chat bubbles.
- Use chat-bubble cards (dark or light, 20px radius) to dramatize team conversations and social proof.
- Limit Vermillion accents on light backgrounds to thin 1px borders and small icons (FAQ plus, carousel arrows).

**Don'ts:**
- No drop shadows, glow effects, or box-shadow on cards, buttons, or modals — flat design.
- Do not use Vermillion as filled button background — only outlined-action border and hero surface.
- Do not use Peach Hairline as text color or interactive fill — decorative border only.
- Do not introduce a second chromatic accent color — monochromatic warm with one red.
- No gradients anywhere — solid colors only.
- Do not use Midnight Ink as body text on Vermillion hero — all hero text must be Bone White.
- Do not center-align headlines — left-aligned with generous left padding.

**Elevation:** Flat by design. No drop shadows, no elevation effects. Surface separation via color contrast between warm cream canvas and Bone White cards, and thin 1px Graphite borders.

**Imagery:** Three modes: (1) small circular avatar portraits inside chat bubble cards at ~32px with subtle Peach Hairline border, (2) inline product/media thumbnails in sticky promo banner with 1px Peach Hairline stroke, (3) full-bleed media crops on right edge of content sections with sharp rectangular edges (no rounding). Warm-toned editorial photography — never stock-lifestyle. No illustrations, no 3D renders, no abstract graphics.

**Layout:** Left-aligned, max-width 1200px, full-bleed section bands. Hero is full-viewport-width Vermillion band with left-aligned headline and email capture. Below hero, alternates between Cream Vellum canvas and occasional Midnight Ink full-bleed bands. Content blocks use 64-96px vertical section gaps. FAQ is single-column list of left-aligned questions with right-aligned Vermillion plus icons. Carousel sections use left/right circular arrow buttons above horizontally-scrolling content. Navigation is transparent top bar flush with hero — no sticky behavior, no background fill until hero ends. Page reads top-to-bottom as sequence of editorial spreads: orange cover, cream pages with card grids and chat dramatizations, one black inversion page, then warm footer.

## 7. LANDING PAGE SECTIONS

Build a complete landing page with the following sections:
1. **Hero** — Full-bleed Vermillion band with transparent nav bar, left-aligned display headline, body text, email capture input, and Bone White pill CTA button.
2. **Features** — 3 product cards on Cream Vellum canvas with Instrument Sans headings and Graphite body text. No shadows, 8px radius, Graphite borders.
3. **How It Works** — 3 steps with numbered indicators, left-aligned text, and optional media crops on the right edge.
4. **Testimonials** — Chat bubble cards (alternating dark and light variants) dramatizing team conversations and pain points, with avatar circles and Fragment Mono timestamps.
5. **Pricing** — 3 tiers with Pill Badge labels, product card styling, and outlined action buttons.
6. **FAQ** — Accordion list with Graphite hairline dividers, Instrument Sans questions, and Vermillion plus icons.
7. **Final CTA** — Dark Contrast Band (Midnight Ink) with Bone White headline and outlined action button.
8. **Footer** — Link columns separated by Peach Hairline vertical rules, logo bottom-left in Bone White uppercase.

## 8. BRANDING REQUIREMENT

This spec describes the visual style of a real brand. Reuse the style only: invent a fictional brand name, product, and copy. Never use the real brand name, logo, trademarks, or product names in the page. All user-facing copy must be in English.
