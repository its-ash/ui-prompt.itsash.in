# Landing Page Build Prompt — Aqua Voice Style (Fictional Brand Required)

## 1. Project Overview
Build a complete, responsive landing page using the **Aqua Voice** visual style reference. The coding AI must invent a fictional brand name, product name, and all user-facing copy. **Never use "Aqua Voice," "Aqua," or any real brand name, logo, trademark, or product name in the page.** All copy must be original and in English. Deliver separate `index.html`, `style.css`, and `script.js` files.

## 2. CSS-First Architecture & Zero Inline CSS
- All styling must live in `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class or ID selectors only.
- Keep HTML semantic, clean, and agnostic of visual styling.

## 3. CSS Variables & Theme Tokens
Define all tokens in `:root` and dark mode overrides:

```css
:root {
  /* Colors */
  --color-sky-signal: #67beff;
  --color-electric-iris: #4288ff;
  --color-paper-white: #fafbfc;
  --color-mist: #f3f7fa;
  --color-fog: #f2f6fa;
  --color-linen: #e5e8ec;
  --color-ash: #efefef;
  --color-inkstone: #292c3d;
  --color-slate: #3e4150;
  --color-pewter: #686a76;
  --color-graphite: #7d7e7e;
  --color-silver: #c2c3c8;
  --color-obsidian: #171719;
  --color-midnight: #1e1e20;

  /* Mapped semantic tokens */
  --primary: var(--color-sky-signal);
  --secondary: var(--color-electric-iris);
  --bg-primary: var(--color-paper-white);
  --bg-secondary: var(--color-mist);
  --bg-card: var(--color-fog);
  --text-primary: var(--color-inkstone);
  --text-secondary: var(--color-slate);
  --text-muted: var(--color-pewter);
  --text-tertiary: var(--color-graphite);
  --border-default: var(--color-linen);
  --border-error: #e5484d;
  --border-success: #30a46c;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 20px;

  /* Shadows */
  --shadow-subtle: 0px 0px 0px 1px rgba(0,0,0,0.02), 0px 1px 1px 0.5px rgba(0,0,0,0.02), 0px 3px 3px 1.5px rgba(0,0,0,0.02), 0px 6px 6px -3px rgba(0,0,0,0.02), 0px 12px 12px -6px rgba(0,0,0,0.02), 0px 24px 24px -12px rgba(0,0,0,0.02);
  --shadow-elevated: inset 0 1px 0 rgb(255,255,255), 0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1px 1px 0.5px rgba(0,0,0,0.06), 0px 3px 3px 1.5px rgba(0,0,0,0.06), 0px 6px 6px -3px rgba(0,0,0,0.06), 0px 12px 12px -6px rgba(0,0,0,0.06), 0px 24px 24px -12px rgba(0,0,0,0.06);
  --shadow-floating: 0px 0px 0px 1px rgba(0,0,0,0.1), 0px 1px 1px 0.5px rgba(0,0,0,0.1), 0px 3px 3px 1.5px rgba(0,0,0,0.1), 0px 6px 6px -3px rgba(0,0,0,0.1), 0px 12px 12px -6px rgba(0,0,0,0.1), 0px 24px 24px -12px rgba(0,0,0,0.1);

  /* Spacing */
  --spacing-gap: 10px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-124: 124px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* Z-index */
  --z-dropdown: 100;
  --z-modal: 200;
  --z-toast: 300;

  /* Fonts */
  --font-base: 'Inter', sans-serif;
  --font-display: 'Inter', sans-serif;
  --font-mono: 'Geist Mono', monospace;

  /* Type scale */
  --text-caption: 11px;
  --text-body: 16px;
  --text-subheading: 20px;
  --text-heading-sm: 24px;
  --text-heading: 40px;
  --text-heading-lg: 56px;
  --text-display: 72px;
}
```

- Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text.
- Light mode background must not be pure white; use `#fafbfc` (Paper White) as the canvas.
- Where white/near-white is needed, use `#fefefe` instead of `#ffffff`.

## 4. Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background and text variables seamlessly.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed` and `aria-label`.

## 5. Typography & Icons
- Use Google Fonts: Inter (weights 200, 400, 500) for body/display; Geist Mono (weights 400, 500) for mono text. Load via `<link>` or `@import`.
- PP Neue Montreal is the primary display face but is not on Google Fonts; use Inter at weight 200 as the substitute for all display/headline text.
- Use Google Material Symbols/Icons for all icons. No inline SVGs or local icon files.
- Bind fonts to `--font-base`, `--font-display`, `--font-mono`.

## 6. Flexbox Layout & Mobile-First
- All layouts use Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-responsive: convert rows to columns on small viewports. Prevent horizontal scrolling.
- Max page width: 1200px, centered. Section gap: 80-120px. Card padding: 20-24px. Element gap: 10px.

## 7. Component Specifications

### 7.1 Announcement Bar
- Full-bleed Obsidian (`#171719`) bar, ~40px tall, centered white text at 12px, contains an inline "Download" link underlined. Top of page.

### 7.2 Primary Navigation
- White background, no border or shadow. Left: wordmark at 16px weight 500, uppercase. Right: nav links (Pricing, User Guide, Blog, Changelog, API, Download iOS) at 14px weight 400 in Slate, followed by a filled CTA. Padding ~24px horizontal.

### 7.3 Filled CTA Button
- Sky Signal (`#67beff`) background, white text, 8px radius, padding 10px 16px, weight 500 at 14px. No border, no shadow. Minimum touch target 44x44px.
- States: hover (brightness shift, cursor pointer), focus (outline ring via CSS vars), active (scale 0.97), loading (spinner, disabled interactions), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback).

### 7.4 Ghost Button
- Transparent background, Slate text at 14px weight 500, 8px radius, padding 10px 16px. No border. Hover: Ash (`#efefef`) fill.

### 7.5 Hero Headline
- Weight 200 (Inter substitute), 56-72px, Inkstone color, line-height 1.00-1.10. Left-aligned in wide single-column block (~680px max-width) with generous breathing room. No negative letter-spacing.

### 7.6 Key Hint Chip
- White background, Linen 1px border, 4px radius, padding 4px 10px, Geist Mono 13px weight 500 Slate. Used inline for keyboard keys.

### 7.7 Product Screenshot Card
- 20px radius, Fog or Mist background, 1px Linen border, padding 24px. Contains product UI screenshot with 12px inner radius. Apply the layered `--shadow-subtle` stack. Centered below text blocks.

### 7.8 Inline Link
- Electric Iris (`#4288ff`) color, weight 500, underlined. Hover: same color, opacity 0.8.

### 7.9 Status Dot
- 8px diameter filled circle in Sky Signal. Used sparingly for live/active state.

### 7.10 Feature Section
- Centered text block on Paper White or Mist background. Subheading at 40px weight 200, body at 16px weight 400 Slate, max-width ~680px, followed by Ghost CTA. Vertical rhythm 80-120px.

### 7.11 Card Component
- Default: flex layout, subtle borders, elevation via `--bg-secondary` and CSS vars.
- Hover: elevation/shadow shift or `translateY(-2px)`.
- Focus-within: highlight borders when child receives focus.
- Loading (skeleton): shimmer animation in CSS.
- Empty state: Google Icon + guidance text.

### 7.12 Form & Input
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, and dedicated error feedback container.

### 7.13 Modal / Popup
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 8. Page Sections Required
Build all of the following sections in order:

1. **Announcement Bar** — top utility strip.
2. **Primary Navigation** — minimal top bar.
3. **Hero** — left-aligned headline (56-72px, weight 200), subtext, filled CTA, product screenshot card below.
4. **Features** — 3 cards in a row (responsive to column on mobile), each with Google Icon, title, description.
5. **How It Works** — 3 steps with numbered indicators, title, description.
6. **Testimonials** — 2-3 quote cards with avatar placeholder, name, role, quote.
7. **Pricing** — 3 tiers (Basic, Pro, Enterprise) with feature lists, CTA buttons.
8. **FAQ** — accordion-style questions with expand/collapse.
9. **Final CTA** — centered headline, subtext, filled CTA button.
10. **Footer** — secondary links, copyright, social icons (Google Material Symbols).

## 9. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 10. Do's and Don'ts (Style Enforcement)
**Do:**
- Use weight 200 for all display/headline text (Inter substitute).
- Use Sky Signal (`#67beff`) only for filled primary CTA and live-status dot.
- Set headline line-height to 1.00-1.10.
- Keep card padding 20-24px, radii 12-20px.
- Use Ghost buttons for secondary actions; filled Sky Signal only for primary action per screen.
- Apply hairline Linen border + `rgba(0,0,0,0.02)` shadow for elevated surfaces.
- Center text blocks at max-width 680px.

**Don't:**
- Do not use weights above 500 for display text.
- Do not add color to body copy, headings, or backgrounds beyond the neutral scale.
- Do not apply large or saturated shadows (max `rgba(0,0,0,0.1)`).
- Do not use pill shapes (9999px) for primary buttons — 8px is the button radius.
- Do not introduce gradients, glassmorphism, or heavy blur.
- Do not set negative letter-spacing on headlines.
- Do not use Electric Iris as a fill — outline/link/ghost only.

## 11. Surfaces & Elevation
- Page Canvas: `#fafbfc`
- Section Band: `#f3f7fa`
- Card Surface: `#f2f6fa`
- Hover/Active Fill: `#efefef`
- Inverted Bar: `#171719`
- Product Screenshot Card shadow: layered `rgba(0,0,0,0.02)` stack.
- Elevated Panel shadow: inset white + layered `rgba(0,0,0,0.06)` stack.
- Floating Card shadow: layered `rgba(0,0,0,0.1)` stack.

## 12. Imagery
- Product UI screenshots in rounded cards against muted backgrounds. No lifestyle photography, stock imagery, or illustration.
- Faint geometric patterns on hero sections at near-white opacity (paper texture).
- Icons minimal and line-based, inline with text.

## 13. Deliverables
- Separate `index.html`, `style.css`, `script.js`.
- Enforce BEM naming convention consistently.
- No lorem-ipsum-only submissions; use realistic fictional copy for all sections.
- No inline `<script>` blocks beyond a single deferred entry-point reference.

## 14. Edit Mode (Not Applicable)
This is a from-scratch build. Edit mode rules do not apply.

## 15. Output
Output only the finished prompt. No preamble, no closing commentary. Mirror the structure above with numbered headers and bolded sub-rules. All copy instructions in English. All CSS variable names, class names, and file names in English/ASCII. The coding AI must invent a fictional brand name, product, and copy — never use "Aqua Voice" or any real brand identifiers.
