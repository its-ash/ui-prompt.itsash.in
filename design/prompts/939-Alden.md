# Alden Landing Page — Coding AI Build Prompt

You are a senior frontend engineer. Build a complete, production-ready landing page following the **Alden** design system. The output must be three separate files: `index.html`, `style.css`, and `script.js`. Use Tailwind CSS via CDN with `@layer`/`@apply` directives mapping to CSS variables, or clean custom CSS driven by Tailwind utility classes. No inline `style="..."` attributes anywhere in the HTML. All design rules, states, and tokens must live in `style.css`.

---

## 1. Brand & Content Rules

- Invent a fictional brand name, product, and copy. Never use the real "Alden" name, logo, trademarks, or product names anywhere in the page.
- All user-facing copy must be in English.
- Do not use lorem-ipsum-only submissions; write real, meaningful English copy for every section.

## 2. CSS-First Architecture & Tokens

Store all visual tokens in `:root` as CSS variables. No inline CSS. Target all styling via class/ID selectors only.

**Colors:**
- `--color-parchment-cream: #f3f1eb`
- `--color-ink-black: #28262a`
- `--color-graphite: #4a4a4c`
- `--color-paper-white: #ffffff` (use `#fefefe` where a near-white is needed instead of pure white)
- `--color-fog-border: #dddcdd`
- `--color-silver: #cbcbcb`
- `--color-sky-highlight: #97cde5`
- `--color-sage-action: #c8dfaa`

Map these to the standard token names: `--primary: #c8dfaa`, `--secondary: #97cde5`, `--bg-primary: #ffffff`, `--bg-secondary: #f3f1eb`, `--text-primary: #28262a`, `--text-secondary: #4a4a4c`, `--text-success`, `--text-error`, `--border-default: #dddcdd`, `--border-error`, `--border-success`.

Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text, in every theme.

**Light Mode Background:** Use `#fefefe` instead of pure `#ffffff` where a near-white is needed. The page canvas is `#ffffff` (Paper White); parchment cream `#f3f1eb` is the alternate surface.

**Border Radius & Shadows:**
- `--radius-sm: 4px`, `--radius-md: 16px`, `--radius-lg: 24px`, `--radius-pill: 100px`
- No box-shadows. Elevation comes from surface contrast only. Define `--shadow-sm`, `--shadow-md` as `none`.

**Spacing & Transitions:**
- `--spacing-gap: 16px`, `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: ease`
- Spacing scale: 8, 16, 24, 32, 40, 48, 64, 80, 112px.

**Elevation/Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.

**Typography:**
- Load Google Fonts: Inter (substitute for Stk bureau Sans) and Source Serif 4 (substitute for Stk bureau Serif). Bind to `--font-base` and `--font-display`.
- `--font-base: 'Inter', sans-serif` (weights 400, 500, 600)
- `--font-display: 'Source Serif 4', serif` (weights 400, 500)
- Tight tracking: -0.04em at 56px, -0.03em at 40px, -0.02em at 16px, +0.02em at 12px (badges).

**Type Scale:**
- caption: 12px / 1.2 / 0.24px
- body-sm: 14px / 1.5 / -0.28px
- body: 16px / 1.5 / -0.32px
- subheading: 18px / 1.4 / -0.36px
- heading-sm: 24px / 1.3 / -0.48px
- heading: 32px / 1.2 / -0.64px
- heading-lg: 48px / 1.2 / -1.44px
- display: 56px / 1.0 / -2.24px

## 3. Mandatory Dark Mode

Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Background and text CSS variables must switch seamlessly. Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

In dark mode: invert surfaces (dark canvas, lighter cards), adjust text to light tones, keep Sky Highlight and Sage Action as functional accents. Maintain contrast pairing.

## 4. Flexbox Layout & Mobile-First

Build all layouts with Flexbox (`display: flex`). Every flex container must default to `align-items: center` unless explicitly justified. Mobile-responsive: convert rows to columns on small viewports. Prevent horizontal scrolling. Page max-width: 1200px centered. Section gap: 80px. Card padding: 40px. Element gap: 16px.

## 5. Framework

Use Tailwind CSS via CDN. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`, `.badge`).

## 6. Icons

Use Google Material Symbols/Icons via CDN. Forbid raw inline SVGs or local icon files.

## 7. Component Specifications

### Button (Pill Primary)
- Flex layout: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;`
- Min touch target 44x44px.
- Sage Action fill `#c8dfaa`, Ink Black text, 100px border-radius, 12px vertical / 20px horizontal padding, Inter 16px / 500. No border, no shadow.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disable interactions, prevent double-clicks, render CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles via `--text-success` / `--text-error`.

### Card (Feature Card)
- White fill, 16px border-radius, 1px Fog Border or no border, 40px padding.
- Headings 24px / 500 Ink Black, body 16px Graphite.
- No shadow, no hover lift.
- If interactive: hover elevation/shadow shift or subtle transform; focus-within highlights border; loading skeleton with shimmer; empty state with Google Icon and guidance text.

### Form & Input
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Flex container wrapping label, input field, and dedicated error feedback container.

### Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### Additional Components
- **Ghost Navigation Link:** No background, no border, Ink Black text 14–16px / 400, 8px vertical / 12px horizontal hit area. No underline; active state uses weight 500.
- **Pill Badge:** Fog Border or Sky Highlight fill, Ink Black or white text, 30–50px border-radius, 8px vertical / 16px horizontal padding, Inter 12px / 500, +0.24px tracking.
- **Cream Product Stage:** Parchment Cream background, 24px corner radius on inner device frames, 40–48px internal padding. No shadow.
- **Logo Strip:** Single horizontal row, 16px row-gap, monochrome Ink Black logos on white. No card frame, no divider.
- **Quote Block:** Source Serif 4 24–32px / 400, Ink Black, centered, highlighted phrase in Sky Highlight. Attributor: 40px avatar, 14px name 500, 12px role Graphite. Subtle blue gradient wash bottom-right.
- **Decorative Blue Wash:** Soft radial/linear gradient from Sky Highlight at low opacity fading to transparent. Anchored bottom-right of testimonial sections. Never a full background fill.
- **Top Navigation Bar:** White background, 16px vertical padding, logo left (wordmark Ink Black 18px / 500), nav links right 14px / 400 with 32px gaps. 'Get Started' is a Sage Action pill button. No shadow, no border-bottom.
- **Avatar Stack:** Circular 40px avatars with 1px Fog Border ring, overlapping 8–12px, loosely around section openers. No labels.

## 8. Core UX & Micro-Interactions

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes, respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.

## 9. Page Sections Required

Build a complete landing page with these sections in order:

1. **Hero:** Centered headline on white canvas. 56px Inter weight 400, Ink Black, letter-spacing -2.24px, line-height 1.00. Wrap one phrase in a span with color Sky Highlight. Subline at 18px / 400 / Graphite, 24px below. Pill CTA button 24px below subline. (Use a fictional product name and copy.)
2. **Features:** 3 feature cards. White fill, 16px radius, 1px Fog Border, 40px padding. Headings 24px / 500 Ink Black, body 16px Graphite. Vertical centered stack, not a multi-column grid.
3. **How It Works:** 3 steps. Centered stack with step numbers, headings, and descriptions.
4. **Testimonials:** Quote block with Source Serif 4, highlighted phrase in Sky Highlight, attributor block, decorative blue wash bottom-right.
5. **Pricing:** 3 tiers. Cards with white fill, 16px radius, Fog Border. Highlight the recommended tier with Sage Action accent. Include feature lists and pill CTA buttons.
6. **FAQ:** Accordion-style questions and answers. Use semantic HTML with ARIA attributes. Smooth CSS transitions for open/close.
7. **Final CTA:** Centered headline with Sky Highlight phrase, subline, and pill CTA button on white canvas. Optional parchment cream band.
8. **Footer:** Secondary links, logo wordmark, minimal layout. No sticky behavior.

## 10. Do's and Don'ts (Enforce in CSS)

- Keep canvas 98% achromatic — Sky Highlight and Sage Action are the only chromatic pixels.
- Use Inter for everything functional; Source Serif 4 only at 40px+ for editorial gravity.
- Tighten tracking aggressively.
- Use Sky Highlight on individual words inside headings only, never full lines, never backgrounds.
- 100px border-radius on every button and badge.
- Use Parchment Cream as a full band/container, never partial fills.
- Separate layers with white-to-cream contrast, not shadows or borders.
- No box-shadows. No new accent colors. No 24px radius on buttons. No Sky Highlight on body paragraphs or backgrounds. No serif for UI chrome. No Inter/system fonts as default. Stage product screenshots on Parchment Cream, not pure white.

## 11. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable. Never mix conventions.
- No unrequested placeholders where real copy was supplied.

## 12. Edit Mode (if modifying existing code)

If modifying existing markup: never introduce new HTML tags, components, or DOM nodes. Work only within existing element/class structure. Define CSS classes only for existing elements. Do not write JS for form validation, modals, or utility functions — ask the user how they want it handled. If a style change requires new markup, stop and ask the user.

## 13. Output

Output only the three files: `index.html`, `style.css`, and `script.js`. No preamble, no closing commentary. Include Google Fonts `<link>` tags in the HTML `<head>`. Include Google Material Symbols via CDN. Include Tailwind CSS via CDN. Ensure all CSS variables, dark mode, flexbox defaults, accessibility attributes, and component states are fully implemented.
