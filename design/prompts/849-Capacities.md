# Coding AI Prompt — Capacities-Themed Landing Page

## 1. Project Overview & Architecture Rules

Build a complete, responsive landing page for a fictional productivity/knowledge-work brand. **Do NOT use the real brand name "Capacities" or any of its trademarks, logos, or product names anywhere in the deliverable.** Invent an original fictional brand name, product name, and all copy. The visual style must follow the "Capacities" design system described below, but all user-facing copy must be in English.

### 1.1 File Structure
- `index.html` — semantic HTML5 markup only, no inline styles.
- `style.css` — all styling, organized with `:root` tokens, theme classes, and component classes.
- `script.js` — deferred entry point; handles theme toggle, FAQ accordion, mobile menu, and scroll behavior only. No inline `<script>` blocks in HTML.

### 1.2 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** Never use `style="..."` attributes in HTML.
- **Class/ID Selectors Only:** All design properties, layout rules, and states targeted via class or ID selectors.
- **Minimal HTML Modifications:** HTML must remain clean, semantic, and agnostic of visual styling. Changing the look should require modifying only `style.css`.

### 1.3 CSS Variables & Theme Tokens
Store all visual tokens inside `:root` (and theme classes) using CSS variables. Required tokens:

**Colors (Light Mode):**
- `--color-paper-white: #ffffff`
- `--color-ink: #1a1a1d`
- `--color-charcoal: #454447`
- `--color-graphite: #5c5959`
- `--color-ash: #a7a2a1`
- `--color-porcelain: #f5f4f3`
- `--color-stone: #ecebea`
- `--color-butter-paper: #fffbeb`
- `--color-sunlit-wash: radial-gradient(100% 70% at 50% 0%, oklch(0.9243 0.1151 95.76 / 0.5) 0%, rgba(0, 0, 0, 0) 100%)`
- `--color-honey-line: #fde68a`
- `--color-amber-ink: #945424`
- `--color-cloud-blue: #eff6ff`
- `--color-blue-note-edge: #d2e6fe`
- `--color-lilac-note-edge: #f0e2ff`

Map these to the standard semantic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

**Contrast Pairing:** Every light background token must pair with a dark text token, and every dark background token must pair with a light text token. Enforce this in both light and dark themes.

**Light Mode Background:** Use `#fefefe` where a near-white is needed instead of pure `#ffffff` for the page canvas (per meta-rule). Card surfaces may use `#ffffff`.

**Border Radius & Shadows:**
- `--radius-sm: 6px`, `--radius-md: 8px`, `--radius-lg: 16px`, `--radius-xl: 20px`, `--radius-pill: 9999px`
- `--shadow-subtle: rgba(0,0,0,0.04) 0px 1px 2px 0px`
- `--shadow-sm: rgba(0,0,0,0.05) 0px 2px 4px 0px, rgba(0,0,0,0.03) 0px 1px 2px 0px`
- `--shadow-md: rgba(0,0,0,0.08) 0px 4px 12px 0px, rgba(0,0,0,0.04) 0px 2px 4px 0px`

**Spacing & Transitions:**
- `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-12: 12px`, `--spacing-16: 16px`, `--spacing-20: 20px`, `--spacing-24: 24px`, `--spacing-28: 28px`, `--spacing-32: 32px`, `--spacing-40: 40px`, `--spacing-48: 48px`, `--spacing-56: 56px`, `--spacing-64: 64px`, `--spacing-80: 80px`, `--spacing-96: 96px`, `--spacing-128: 128px`
- `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Elevation/Stacking:**
- `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`

### 1.4 Mandatory Dark Mode Support
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- User theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed` and `aria-label` state.

### 1.5 Flexbox Layout & Mobile-First Alignment
- Build all layout structures using Flexbox (`display: flex`).
- **Default Alignment Rule:** Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- All flex layouts must be mobile-responsive (convert rows to columns on smaller viewports). Prevent horizontal scrolling.

### 1.6 Framework & Tailwind Integration
- Use Tailwind CSS via CDN or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 1.7 Typography & Icons (Google Fonts Mandatory)
- **Text:** Include Google Font `<link>` tags for Inter, and a system sans fallback. Bind to `--font-inter` and `--font-ui-sans-serif`. Include JetBrains Mono via Google Fonts for mono metadata.
- **Icons:** Use Google Material Symbols/Icons. Explicitly forbid raw inline SVGs or local icon files.

## 2. Typography Tokens

Define these type-scale tokens in `:root`:

- `--text-micro: 400 10px/1.5 ui-sans-serif`
- `--text-mono-metadata: 400 12px/1.33 'JetBrains Mono', monospace`
- `--text-nav: 400 14px/1.43 ui-sans-serif`
- `--text-eyebrow: 600 14px/1.43 ui-sans-serif` with `letter-spacing: 0.35px`
- `--text-body: 400 16px/1.5 ui-sans-serif`
- `--text-heading-small: 600 18px/1.56 ui-sans-serif` with `letter-spacing: -0.45px`
- `--text-heading: 700 36px/1.25 ui-sans-serif` with `letter-spacing: -0.9px`
- `--text-display: 700 48px/1.05 'Inter', sans-serif` with `letter-spacing: -1.44px`
- `--text-hero-display: 700 64px/1.05 'Inter', sans-serif` with `letter-spacing: -1.92px`

## 3. Component Specifications

### 3.1 Top Navigation Bar
- 64px high, Paper White background.
- Ink logo text at 18px/700 (fictional brand name).
- Charcoal navigation links at 14px/500.
- Compact controls on 4px grid; 8px radius on icon controls.
- 1px solid Porcelain separator only where needed.
- Mobile: hamburger menu with slide-down panel.

### 3.2 Seasonal Announcement Strip
- Full-width Sunlit Wash strip below navigation.
- 1px solid Honey Line border top and bottom.
- Amber Ink text at 14px/500, 8px vertical padding.
- Compact icon-plus-text gap (8px). Google Material Icon.

### 3.3 Buttons
- **Compact Inverted Header Button:** Ink fill, Paper White 14px/500 text, 6px radius, 6px 10px padding, 1px white border where against pale surfaces.
- **Filled Conversion Button:** Ink fill, Paper White 16px/500 text, 6px radius, 8px 14px padding, 6px gap to arrow icon.
- **Text Discovery Button:** Transparent surface, Charcoal 16px/500 text, 1px Charcoal border, 8px radius, 8px 12px padding.
- **Pill Audience Filter:** Paper White fill, Ash text 14px, 1px Porcelain border, 9999px radius, 8px 14px padding. Selected state: Butter Paper fill, Honey Line border, Amber Ink text.

All buttons must implement: Default, Hover (brightness/shadow, cursor pointer), Focus (distinct focus ring via CSS variables), Active (transform scale 0.97), Loading (spinner, disabled interactions), Disabled (opacity 0.5, greyscale, cursor not-allowed), Success/Error (temporary feedback via `--text-success` / `--text-error`). Minimum touch target 44x44px.

### 3.4 Floating Knowledge Object (Hero Decorative)
- Small Paper White note cards, 12px or 16px radius.
- 1px Stone or pastel-tinted border (Blue Note Edge or Lilac Note Edge).
- Shadow: `0 1px 2px rgba(0,0,0,0.04)`.
- 14px/600 Ink titles, tiny muted metadata, isolated pastel icon tiles.
- Positioned as peripheral, slightly rotated fragments around central hero copy.

### 3.5 Metric Card
- Paper White surface, 1px Stone border, 16px radius, 28px padding, `0 1px 2px rgba(0,0,0,0.04)`.
- Centered: 8px icon tile, Ink 36px/700 value, 14px/600 label, Ash 12px supporting copy.

### 3.6 Testimonial Card
- Paper White card, 1px Stone border, 16px radius, 28px padding, `0 1px 2px rgba(0,0,0,0.04)`.
- Quote in Graphite at 15px/400, line-height 1.7.
- Oversized Ash quotation glyph as quiet corner detail.

### 3.7 Media Testimonial Frame
- Contained photographic frame, 12px radius, shadow `0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)`.
- Solid black circular play control with white triangular icon.
- Caption centered below in Graphite italic.

### 3.8 Publication Logo Row
- Uppercase Ash 10px/400 label above centered row of monochrome gray publication marks.
- Logos subdued, 24px+ horizontal separation.

### 3.9 Footer Link Group
- 14px/400 Ash links in vertical lists, 8px gaps.
- Group headings: 14px/600 uppercase, 0.35px tracking.
- Separate footer regions with 1px Porcelain rules.

## 4. Page Sections Required

Build all of the following sections in order:

1. **Hero** — Centered multi-line Inter Ink headline (64px/1.05, -1.92px tracking), supporting paragraph in Graphite, paired conversion buttons (Filled + Text Discovery), localized Sunlit Wash radial glow behind opening statement, scattered floating knowledge objects around edges. Pill audience filter row above or below headline.

2. **Features** — 3 cards in a row (responsive: stack on mobile). Each card: icon tile, heading-small title, body copy. Use card styling (Stone border, 16px radius, 28px padding, subtle shadow).

3. **How It Works** — 3 steps. Each step: numbered indicator, heading, description. Flex layout, mobile-responsive.

4. **Testimonials** — Multi-column testimonial cards (2-3 columns responsive). Include one Media Testimonial Frame (video placeholder with play button).

5. **Pricing** — 3 tiers. Each tier: plan name, price, feature list, CTA button. Highlighted middle tier with Butter Paper background and Honey Line border.

6. **FAQ** — Accordion-style. Question/answer pairs. Keyboard accessible (Enter/Space to toggle, aria-expanded). Smooth CSS transitions.

7. **Final CTA** — Centered headline, supporting text, Filled Conversion Button. Sunlit Wash localized glow.

8. **Footer** — Grouped link columns, publication logo row optional, 1px Porcelain separators, Ash links.

## 5. Core UX & Micro-Interaction Rules

- **Responsive by Default:** Fluid sizing, responsive breakpoints, no horizontal overflow. Mobile-first.
- **Smooth Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- **Accessibility:** Sufficient contrast in both Light and Dark modes. Never rely solely on color for state. Semantic HTML5 elements, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback (FAQ, form errors, toasts).
- **Mandatory Visual Feedback:** Every click, hover, or submission triggers visible state change.
- **Destructive Actions:** `.btn-danger` visually distinct in both themes.

## 6. Naming Convention

Use BEM naming convention consistently: `.block__element--modifier`. No mixing conventions.

## 7. Deliverables

- `index.html`, `style.css`, `script.js` as separate files.
- No inline `<script>` blocks beyond a single deferred entry-point reference: `<script src="script.js" defer></script>`.
- No lorem-ipsum-only submissions where real copy/labels are expected; invent meaningful fictional copy for all sections.
- No unrequested placeholders.

## 8. Do's and Don'ts (Capacities Style)

**Do:**
- Use Paper White (#ffffff) as default canvas and card surface.
- Set display headlines in Inter 700: 64px/1.05 with -1.92px tracking for hero, 48px/1.05 with -1.44px for editorial transitions.
- Use Ink (#1a1a1d) with Paper White text for filled conversion buttons; 6px radius, 8px 14px padding.
- Build trust, metric, testimonial cards with 16px radius, 28px padding, 1px Stone (#ecebea) border, `0 1px 2px rgba(0,0,0,0.04)`.
- Use Sunlit Wash, Honey Line, Amber Ink together for promotional strips and warm selected pills.
- Keep body copy Graphite (#5c5959) at 16px/1.5; Ash (#a7a2a1) only for metadata/supporting text.
- Use 4px spacing base; compact clusters with 6px, 8px, 12px, 16px gaps; major sections 73px gap.

**Don't:**
- Do not use saturated blue, violet, green, or red as page-wide conversion colors; reserve pastel blue and lilac for object-card accents.
- Do not use pill radii on rectangular conversion buttons; keep filled/discovery buttons at 6px or 8px radius.
- Do not make cards borderless or heavily elevated; use Stone outlines and subtle shadow.
- Do not set body text in Ink by default; reserve Ink for headings, emphatic labels, filled controls.
- Do not spread Sunlit Wash across whole content sections; confine to announcement layer, selected filters, localized hero glow.
- Do not use loose positive tracking on large headings; keep display tracking at -0.0300em and section-heading at -0.0250em.
- Do not introduce dense dashboard grids above the fold; lead with one centered thought and peripheral object fragments.

## 9. Imagery Guidance

- Hero: contained floating note, task, document, bookmark objects as white or softly tinted mini-cards with tiny pastel icons and faint shadow.
- One contained lifestyle video frame with natural bright photography, rounded corners, black circular play overlay.
- Faint outline file/note icons drift in whitespace of subsequent sections as low-contrast atmosphere.
- Page is text-dominant; imagery acts as evidence that ideas are tangible connected objects.

## 10. Output

Generate the three files (`index.html`, `style.css`, `script.js`) implementing the complete landing page following all rules above. Ensure dark mode works, all interactive states are styled, accessibility is maintained, and the fictional brand name is used consistently throughout. No real brand names or trademarks. All copy in English.
