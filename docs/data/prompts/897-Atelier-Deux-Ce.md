# Generated Coding-AI Prompt: Atelier Deux-Cé Landing Page

## 1. STRICT RULES & ARCHITECTURE TO ENFORCE

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside a dedicated `style.css` file.
- Forbid the `style="..."` attribute in HTML entirely.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Store all visual tokens inside `:root` using CSS variables. Use the following tokens exactly:

Colors:
- `--color-ink-black: #000000`
- `--color-canvas-white: #ffffff` (use `#fefefe` where a near-white is needed instead of pure white)
- `--color-warm-linen: #eee5da`
- `--color-pale-sage: #d8ddc6`
- `--color-driftwood: #d8d0c5`
- `--color-olive-stone: #afb371`
- `--color-weathered-taupe: #9c978a`
- `--color-soft-pebble: #aaaaa4`
- `--color-garden-green: #259558`

Standard meta tokens:
- `--primary: var(--color-ink-black)`
- `--secondary: var(--color-pale-sage)`
- `--bg-primary: var(--color-canvas-white)`
- `--bg-secondary: var(--color-warm-linen)`
- `--text-primary: var(--color-ink-black)`
- `--text-secondary: var(--color-weathered-taupe)`
- `--text-success: var(--color-garden-green)`
- `--text-error: var(--color-ink-black)`
- `--border-default: var(--color-ink-black)`
- `--border-error: var(--color-ink-black)`
- `--border-success: var(--color-garden-green)`
- `--radius-sm: 0px`
- `--radius-md: 0px`
- `--radius-lg: 0px`
- `--shadow-sm: none`
- `--shadow-md: none`
- `--spacing-gap: 24px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: ease`
- `--z-dropdown: 10`
- `--z-modal: 20`
- `--z-toast: 30`

Typography tokens:
- `--font-helvetica: "Helvetica Neue", Helvetica, Arial, sans-serif`
- `--font-minion-3: "Cormorant Garamond", "EB Garamond", "Minion Pro", serif`
- `--text-caption: 16px`
- `--text-subheading: 20px`
- `--text-heading: 24px`

Spacing tokens:
- `--spacing-8: 8px`
- `--spacing-12: 12px`
- `--spacing-18: 18px`
- `--spacing-24: 24px`
- `--spacing-40: 40px`
- `--spacing-48: 48px`

Contrast pairing: any light background token pairs with Ink Black text; the Garden Green footer pairs with Canvas White text. Enforce this for every theme.

Light mode background must not default to pure white where a warm tone fits; use the warm neutral scale for section bands. Where pure white is needed, use `#fefefe`.

Border radius and shadows: all `0px` / `none`. No rounded corners, no shadows anywhere.

**1.3 Mandatory Dark Mode Support**
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background and text CSS variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed` and `aria-label` state.
- In dark mode, invert the warm palette to dark equivalents while keeping the editorial flat aesthetic and the Garden Green footer accent.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified otherwise.
- All flex layouts must be mobile-responsive, converting rows to columns on smaller viewports. Prevent horizontal scrolling.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Include Google Font `<link>` or `@import` tags for text fonts (Cormorant Garamond, EB Garamond as substitutes for minion-3; Helvetica system stack for UI) and bind them to `--font-base` / `--font-helvetica`.
- Use Google Material Symbols/Icons for any icons. Forbid raw inline SVGs or local icon files. Note: this system uses a single minimal hamburger icon only — do not introduce additional icons.

## 2. COMPONENT DESIGN SPECIFICATIONS TO ENFORCE

**2.1 Button Component Requirements**
- Default: Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum touch target 44x44px.
- Hover: Visual shift with `cursor: pointer`.
- Focus: Distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: Disables interactions, prevents double-clicks, renders a CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: Temporary feedback state styles driven by `--text-success` or `--text-error`.
- Note: This design system has no filled/ghost/pill buttons. Buttons are text links only. The `.btn` class should render as an inline text link with 1px black underline on hover.

**2.2 Card Component Requirements**
- Default: Flexible Flexbox layout, subtle borders and elevation using CSS variables. In this system: no border, no shadow, no padding around images — the image is the card.
- Hover: Subtle transform (`transform: translateY(-2px)`) — keep minimal.
- Focus-within: Highlights card borders when a child link/button receives focus.
- Loading (Skeleton): Shimmer animation styling defined in CSS.
- Empty State: Structured fallback layout with a Google Icon and clear guidance text.

**2.3 Form & Input Requirements**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, and dedicated error feedback container.

**2.4 Modal / Popup Requirements**
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX Features: Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, support for closing via `Esc` or overlay clicks.

## 3. CORE UX & MICRO-INTERACTION RULES TO ENFORCE

- Responsive by default: fluid sizing and responsive breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility (a11y): Sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback: every user click, hover, or submission triggers a visible state change.
- Destructive actions: `.btn-danger` or delete actions must be visually distinct in both light and dark themes.

## 4. DELIVERABLE & OUTPUT FORMAT

- File structure: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Naming convention: enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No unrequested placeholders: prohibit lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content was genuinely left unspecified.

## 5. BRANDING & COPY RULES

- Invent a fictional brand name, product, and copy. Never use "Atelier Deux-Cé", its logo, trademarks, or product names anywhere in the page.
- All user-facing copy must be in English.
- The visual style must reuse the Atelier Deux-Cé aesthetic only: warm earth-tone palette, 0px radii, no shadows, no gradients, Helvetica + serif editorial contrast, positive letter-spacing, full-bleed photography-driven layout.

## 6. LANDING PAGE SPECIFICATION

Build a complete landing page with the following sections. Use the warm neutral scale for section backgrounds, alternating between Canvas White, Warm Linen, Pale Sage, Driftwood, and Olive Stone to create tonal rhythm. No shadows, no gradients, no radii beyond 0px. All type uses positive letter-spacing (0.02em body, 0.04em nav/labels/caps). Type scale: 16 / 17 / 20 / 24px only.

**Hero (Split-Screen):** Full-bleed, two edge-to-edge photographs meeting at a hard vertical center seam, no gap, no border, 0px radius. Each half full-bleed. Floating caption on one half: project name in Helvetica weight 600 16px #ffffff letter-spacing 0.64px, supporting lines in weight 400 16px #ffffff. Small white mark (~32px) above the caption. Wordmark top-left in Helvetica weight 600 20px #000000 letter-spacing 0.8px. Hamburger icon top-right as a 1px black stroke. No nav background fill. Background of photographic regions is implicit; surrounding canvas uses Canvas White.

**Features (3 cards):** 2-column or 3-column grid of project-style cards. Each card: full-bleed rectangular image with 0px radius, no border, no padding. Below the image: feature name in Helvetica weight 600 16px #000000 letter-spacing 0.64px, then description in Helvetica weight 400 16px #000000 letter-spacing 0.64px on the line below. 48px column gap. No card background, no shadow — the image is the card. Section background: Pale Sage or Warm Linen.

**How It Works (3 steps):** Narrow reading column (~480–600px) on a warm neutral band. Section label at top — 'HOW IT WORKS' — in Helvetica weight 600 16px #000000 letter-spacing 0.64px, all caps. 24px gap below. Three numbered steps, each with a step title in Helvetica weight 600 16px and body in minion-3 or Helvetica 17px #000000 line-height 1.2 letter-spacing 0.34px. 24px gap between steps. No icons beyond text numerals.

**Testimonials:** Full-bleed section on a warm neutral band (Driftwood or Olive Stone). Narrow reading column. Quote text in minion-3 or Helvetica 17px #000000 line-height 1.2 letter-spacing 0.34px. Attribution in Helvetica weight 600 16px #000000 letter-spacing 0.64px. No quotation marks decoration, no avatar images, no cards — text only on the warm surface.

**Pricing (3 tiers):** 3-column grid of pricing entries. Each: tier name in Helvetica weight 600 16px #000000 letter-spacing 0.64px, price in Helvetica weight 600 24px #000000, feature list in Helvetica weight 400 16px #000000 letter-spacing 0.64px. No card backgrounds, no borders thicker than hairlines, no shadows. 48px column gap. Section background: Canvas White or Warm Linen. CTA is a text link ('GET STARTED' or 'CHOOSE PLAN') in Helvetica weight 600 16px #000000 letter-spacing 0.64px, all caps, 1px black underline on hover only.

**FAQ:** Narrow reading column (~480–600px) on a warm neutral band. Section label 'FAQ' in Helvetica weight 600 16px #000000 letter-spacing 0.64px, all caps. Questions in Helvetica weight 600 16px #000000 letter-spacing 0.64px. Answers in minion-3 or Helvetica 17px #000000 line-height 1.2 letter-spacing 0.34px. 24px gap between items. No accordion chrome, no icons — plain text with spacing.

**Final CTA:** Full-bleed section on a warm neutral band (Pale Sage or Olive Stone). Narrow reading column. Headline in Helvetica weight 600 20px or 24px #000000 letter-spacing 0.8px or 0.96px. Supporting line in minion-3 or Helvetica 17px. CTA text link in Helvetica weight 600 16px #000000 letter-spacing 0.64px, all caps, 1px black underline on hover.

**Footer:** Full-viewport-width band, background #259558 (Garden Green), no radius, no border, 40–48px vertical padding. Footer links in Helvetica weight 400 16px #ffffff letter-spacing 0.64px. Credits in same style. The single chromatic color in the system lives here and nowhere else. Include secondary links (About, Contact, Privacy, Terms, etc.) as plain text links.

## 7. DO'S AND DON'TS (ENFORCE STRICTLY)

Do:
- Let full-bleed photography drive every primary screen — type and chrome are captions, not the subject.
- Stack sections using the warm neutral scale to create rhythm without shadows.
- Use the two type families in deliberate contrast: Helvetica for functional UI and metadata, minion-3 (substituted with Cormorant Garamond / EB Garamond) for editorial body paragraphs.
- Apply letter-spacing 0.02em to body and 0.04em to navigation, labels, and uppercase tags across both families.
- Keep all component radii at 0px.
- Reserve Garden Green (#259558) exclusively for the footer.
- Set the type scale at 16 / 17 / 20 / 24px only.

Don't:
- Do not add box-shadows, drop shadows, glows, or gradient overlays.
- Do not introduce saturated colors beyond the single footer green.
- Do not round corners on cards, buttons, images, or tags.
- Do not use filled buttons, ghost buttons, or pill buttons — only text links and the footer band.
- Do not use icons beyond a single minimal hamburger.
- Do not set type in negative letter-spacing.
- Do not add decorative borders thicker than 1px hairlines, and never use border colors outside the neutral scale.

## 8. OUTPUT

Generate separate `index.html`, `style.css`, and `script.js` files. Use BEM naming convention consistently. No inline styles. No inline scripts beyond a single deferred entry-point reference. All copy in English. Invent a fictional brand name and product — never use "Atelier Deux-Cé" or its trademarks. Use placeholder images (via picsum or similar) for photography, full-bleed and edge-to-edge with 0px radius. Ensure dark mode support via `prefers-color-scheme` and `.dark` class with localStorage persistence and a visible toggle. Ensure full keyboard accessibility and responsive mobile-first layout.
