# UI/UX Coding Prompt — Textla-Themed Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a fictional SMS marketing product. Invent a fictional brand name, product name, and all copy/labels. Do not use the real brand name "Textla", its logo, trademarks, or product names anywhere in the deliverable. Reuse only the visual style described below. Output three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS anywhere.

## 2. Strict Architecture Rules

### 2.1 CSS-First & Zero Inline CSS
- Keep all styling strictly inside `style.css`. Forbid the `style="..."` attribute in HTML.
- Target all design properties via class/ID selectors only.
- Keep HTML semantic, clean, and agnostic of visual styling so the look can change by editing CSS only.

### 2.2 CSS Variables & Theme Tokens
Define all tokens in `:root` and `.dark`/`@media (prefers-color-scheme: dark)`:

Colors:
- `--color-sunlit-cream: #f2ee98` (page canvas)
- `--color-forest-ink: #10380b` (text, borders, shadows, fills)
- `--color-marigold: #fce519` (accent, star ratings, hero CTA, decorative icons)
- `--color-sage-wash: #dbe8ac` (subtle panel tint)
- `--color-vivid-fern: #30be60` (outline accent)
- `--color-parchment: #fefde6` (elevated card surface)
- `--color-snowcap: #ffffff` (high-contrast text on dark surfaces, mockup interiors)

Semantic tokens:
- `--primary: var(--color-forest-ink)`
- `--secondary: var(--color-marigold)`
- `--bg-primary: var(--color-sunlit-cream)`
- `--bg-secondary: var(--color-parchment)`
- `--text-primary: var(--color-forest-ink)`
- `--text-secondary: var(--color-forest-ink)`
- `--text-success: var(--color-vivid-fern)`
- `--text-error: #b00020`
- `--border-default: var(--color-forest-ink)`
- `--border-error: #b00020`
- `--border-success: var(--color-vivid-fern)`

Shape/spacing/elevation:
- `--radius-sm: 16px`, `--radius-md: 40px`, `--radius-lg: 1440px`
- `--shadow-sm: 8px 8px 0 0 var(--color-forest-ink)`
- `--shadow-md: 8px 8px 0 0 var(--color-forest-ink)`
- `--spacing-gap: 24px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`

Typography:
- `--font-base: 'RethinkSans'` (Google Fonts substitute: Inter, Manrope, or Plus Jakarta Sans)
- `--font-display: 'National 2 Condensed'` (Google Fonts substitute: Bebas Neue, Oswald, or Antonio)
- Load Google Fonts via `<link>` or `@import`. Use Google Material Symbols for all icons. No inline SVGs or local icon files.

Contrast pairing: light backgrounds pair with dark text; dark surfaces (Forest Ink stat bars) pair with cream/white text. Enforce in every theme.

Light mode background must not be pure white; use Sunlit Cream `#f2ee98`. Where near-white is needed, use `#fefefe`.

### 2.3 Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Switch background/text variables seamlessly without HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed` and `aria-label`.

Dark mode palette (invent a coherent dark variant): dark canvas with cream/ink inverted accents, preserving the botanical mood. Keep all token names identical.

### 2.4 Flexbox & Mobile-First
- Use Flexbox (`display: flex`) for all layout structures.
- Every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box: rows become columns on small viewports. No horizontal scrolling.

### 2.5 Framework
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons
- Google Fonts mandatory for text and icons. Bind fonts to `--font-base` and `--font-display`.

## 3. Component & Section Specifications

### 3.1 Global States (apply to all interactive components)
- Default, Hover (brightness/shadow shift, `cursor: pointer`), Focus (distinct focus ring via CSS variables), Active/Pressed (`transform: scale(0.97)`), Loading (disabled, CSS spinner, no dimension distortion), Disabled (`opacity: 0.5`, greyscale, `cursor: not-allowed`), Success/Error (driven by success/error tokens).
- Smooth transitions: `transition: var(--transition-normal)` on all state changes, respecting `prefers-reduced-motion`.
- Accessibility: semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback, never rely on color alone.

### 3.2 Buttons
- Pill radius 1440px. Minimum touch target 44x44px.
- Variants: Marigold Pill CTA (marigold bg, forest ink text, 12px 28px padding), Forest Pill Button (forest ink bg, cream text), Ghost Text Button (no bg/border, trailing chevron), Outlined Call Button (1px forest ink border, leading phone icon).
- Pair filled pill CTAs with a ghost text-link sibling (two-button rhythm).

### 3.3 Cards
- 40px radius, 24-40px padding. Hard offset shadow `8px 8px 0 0 #10380b` on elevated cards. Hover: `transform: translateY(-2px)`. `:focus-within` highlights border. Skeleton shimmer loading state. Empty state with Google Icon + guidance text.

### 3.4 Form & Input
- States: Empty, Focused, Filled, Valid, Invalid, Disabled, Read-only. Structure: flex container with label, input, error feedback container.

### 3.5 Modal/Popup
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions). Centered flex, backdrop overlay, Google Icon close button, focus trapping, close via Esc or overlay click.

### 3.6 Required Sections
1. **Hero**: two-column split. Left: oversized display headline (National 2 Condensed, up to 180px, italic 800 for hero word), subtext, dual CTA (Marigold pill + ghost chevron), star rating row with "Five star rating" label. Right: Product Dashboard Card overlapping a cactus line illustration. Cream canvas.
2. **Features**: 3 cards. Each: 40px circular Marigold icon container with line-art icon, label in 24-32px National 2 Condensed 700, optional subtext. 2-column layout pairing icon list with chat bubble illustration.
3. **How It Works**: 3 steps. Numbered display numerals, title, description. Flex row/column responsive.
4. **Testimonials**: 2-column grid of Parchment cards. Avatar, name 20px RethinkSans 700, role 16px 600, quote 24-32px National 2 Condensed 700, 5 marigold stars. Optional G2 Leader ribbon overlapping top-right. Optional hard offset shadow.
5. **Pricing**: 3 tiers. Cards with feature lists, price in display numerals, CTA button. Middle tier highlighted (Marigold accent or Forest Ink fill).
6. **FAQ**: accordion with accessible expand/collapse, keyboard operable, `aria-expanded`.
7. **Final CTA**: Forest Ink or Marigold band, oversized headline, dual CTA.
8. **Footer**: secondary links, logo wordmark, social icons (Material Symbols).

### 3.7 Additional Components
- Status Pill Badge (Forest Ink fill/cream text default; Marigold fill/ink text active).
- Star Rating Display (5 marigold stars + label).
- Feature List Item (40px circular Marigold icon + label).
- G2 Leader Ribbon (red/orange gradient, pointed bottom).
- Stat Counter Bar (full-width Marigold band, 4-column, large condensed numbers + labels, 80px vertical padding).
- Video Testimonial Frame (16:9, 40px radius, 1px border, hard shadow, caption below).
- Chat Bubble Card (white, 40px radius, asymmetric tail corner, sender/reply bubbles, circle avatar initials).
- Navigation Bar (transparent, 16px links, outlined phone button + Marigold "Try for free" pill, dark green wordmark logo).

## 4. Imagery & Layout
- Hand-drawn monochrome line illustrations (cacti, clouds, sunbursts, desert flora) in 1.5-2px Forest Ink strokes on cream canvas. Flat, unshaded, scene-fillers in hero negative space and feature backgrounds. Never inside cards.
- Product screenshots framed as cards with hard offset shadows.
- Photography limited to one embedded customer video frame; everything else illustrated.
- Max-width 1200px centered, 40px gutters. Section rhythm alternates Sunlit Cream and Forest Ink bands with 80-120px vertical gaps. 2-column testimonial grids, 4-column stat bars. Navigation is single transparent top bar; no sidebar or sticky mega-menu.

## 5. Do's and Don'ts
Do:
- Use Forest Ink for all body text, borders, icons, primary action fills.
- Apply hard 8px offset shadow to elevated cards/product mockups only; never buttons or inputs.
- Use National 2 Condensed at 56px+ for headlines with -0.03em letter-spacing.
- Pair every filled pill CTA with a ghost text-link sibling.
- Use Sunlit Cream as page canvas; Parchment only for card surfaces needing lift.
- Use Marigold sparingly: star ratings, hero CTAs, decorative icon accents. Never body text or large fills.
- Keep button radii 1440px and card/image radii 40px.

Don't:
- Don't use Marigold for body text.
- Don't use soft Gaussian shadows; only hard 8px offset in Forest Ink.
- Don't use condensed display face below 20px.
- Don't introduce blue, purple, or non-green/yellow hues.
- Don't use sharp 0px radii (16px minimum).
- Don't set RethinkSans below weight 600.
- Don't use white as page background; white only inside product mockups and on dark green surfaces.

## 6. Deliverables
- Files: `index.html`, `style.css`, `script.js`.
- Naming convention: BEM throughout (e.g., `.hero`, `.hero__title`, `.hero--dark`). Never mix conventions.
- No lorem-ipsum-only submissions where real copy is implied; placeholders only where content genuinely unspecified.
- All user-facing copy in English.

## 7. Edit Mode (not applicable — from-scratch build)
N/A.

## 8. Output
Output only the finished coding prompt content above as the deliverable instructions. No preamble, no closing commentary. Ensure all CSS variable names, class names, and file names are English/ASCII. Translate any non-English copy guidance to English. If a requested style conflicts with a mandatory rule, keep the mandatory rule and add a one-line explicit exception clause.
