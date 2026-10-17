# Coding-AI Prompt: Grove AI-Inspired Landing Page (Fictional Brand)

## 0. Brand & Copy Constraint (Mandatory)
The provided style reference describes a real brand. You must **reuse only the visual style**. Invent a completely fictional brand name, product name, product category, and all user-facing copy. Never use the real brand name "Grove AI", the product name "Grace", the phrase "Meet Grace", or any real trademarks, logos, or product names from the source. All user-facing copy must be written in English. All CSS variable names, class names, and file names must be in English/ASCII.

## 1. Strict Rules & Architecture

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` (and theme classes) using CSS variables:
- Colors: `--primary` (#0b835c), `--secondary` (#1c2b27), `--bg-primary` (#ffffff), `--bg-secondary` (#eff1f6), `--text-primary` (#1c1c1e), `--text-secondary` (#303033), `--text-muted` (#676768), `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.
- Light mode background must not be pure white; use #fefefe where a near-white is needed. (Note: spec canvas is #ffffff; treat as the brand canvas but prefer #fefefe for card-internal backgrounds.)
- Border radius: `--radius-sm` (8px), `--radius-md` (12px), `--radius-lg` (20px), `--radius-xl` (24px), `--radius-pill` (9999px).
- Shadows: `--shadow-subtle`, `--shadow-subtle-2`, `--shadow-subtle-3`, `--shadow-subtle-4` per spec values.
- Spacing: `--spacing-4` … `--spacing-96` per 4px scale.
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode Support**
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background/text variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit; include a visible toggle control with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build layouts with Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box (rows → columns on small viewports). No horizontal scrolling.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). Utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: Google Fonts — Libre Caslon Text (display serif), Geist (body/interface), Geist Mono (monospace). Bind to `--font-base` etc.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 2. Component Design Specifications

**2.1 Button Component**
- Default: flex, `align-items: center; justify-content: center; gap: 0.5rem`, min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, CSS spinner/animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.
- Variants: Filled Dark Button (#1c1c1e fill, white text, pill radius, inset white highlight + 1px outer shadow) and Outlined Button (transparent, #1c1c1e border, pill radius). Canonical CTA pair.

**2.2 Card Component**
- Default: flex layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty State: Google Icon + clear guidance text.

**2.3 Form & Input**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container.

**2.4 Modal / Popup**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- UX: centered flex (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. Core UX & Micro-Interaction Rules
- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth animations on state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely solely on color; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 4. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM) across the entire deliverable.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders only where content genuinely unspecified.

## 5. Landing Page Sections Required
Build a complete landing page with these sections in order:
1. Top Announcement Banner (dark green strip, white text, Geist 12–14px, 4px vertical padding, centered single line + trailing arrow).
2. Sticky Navigation Bar (white, subtle bottom border, logo left, nav links, ghost pill "Sign In" right, 16px vertical padding).
3. Hero (announcement pill, serif headline with single green brand word, subhead max 520px, two-column split with floating product mockup card on right).
4. Features (3 cards, Mist Gray surface, 20px radius, 24px padding).
5. How It Works (3 steps).
6. Testimonials (carousel cards, white, 20px radius, 32px padding, hairline shadow).
7. Pricing (3 tiers).
8. FAQ.
9. Final CTA (centered CTA pair).
10. Footer (secondary links).

## 6. Style Application Notes
- Hero headline: Libre Caslon Text 92px, weight 400, line-height 1.2, letter-spacing -0.011em. First word #1c1c1e, brand word #0b835c.
- Announcement pill: transparent, 1px #0b835c border, 9999px radius, Geist 12px uppercase 0.1em tracking, #0b835c text, 8px 16px padding.
- Stat card: Mist Gray fill, 20px radius, 24px padding, number Geist 40px weight 600 #1c1c1e, label Geist 14px #303033.
- Testimonial card: white, 20px radius, 32px padding, hairline shadow (0 0 1px rgba(0,0,0,0.35) + 0 1px 2px rgba(0,0,0,0.25) inset).
- Small-caps labels: Geist 12px, 0.1em tracking, uppercase, #0b835c or #676768.
- Proof-point formula: small-caps green label → green directional icon → big dark number (Geist 40px weight 600) → single-line caption (Geist 14px #303033).
- Body copy left-aligned, capped ~520px.
- Page max-width 1200px, section gaps 80px+, card padding 24px, element gap 10px.
- Radii: 8/12px (tight), 20/24px (cards), 9999px (pills). Nothing between 14–18px.
- Shadows: max 1–2px blur; hairline halos only.
- Palette: monochrome plus one green (#0b835c). No new accent colors.
- Green reserved for: brand word in serif headlines, small-caps labels, icon/directional accents. Never solid button fill or large background.
- Imagery: documentary/human-centered; grayscale logo strips at reduced contrast; line-based minimal icons colored Forest Grove.

## 7. Output
Output only the finished deliverable structure per Section 4. No preamble, no closing commentary. Mirror Sections 1–4 numbering and bolded sub-rules. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause.
