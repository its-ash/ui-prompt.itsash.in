# Landing Page Build Prompt — "Composer" Theme

## 1. Project Overview
Build a complete, responsive landing page for a **fictional SaaS product** (invent a brand name, product name, and all copy — never use "Composer" or any real brand/trademark). The visual style is a light, Bauhaus-inspired editorial system: an ash-gray Concrete canvas scattered with vivid confetti color blocks, a 244px display headline, pill-shaped buttons, and hairline gray borders. The page must include these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 2. Architecture & File Structure
- **Files:** `index.html`, `style.css`, `script.js` — no inline `<script>` blocks beyond a single deferred entry-point reference; no inline `style="..."` attributes anywhere.
- **Naming convention:** BEM (`block__element--modifier`) consistently across all classes. Never mix conventions.
- **CSS-first:** All styling lives in `style.css`. HTML must remain semantic and agnostic of visual styling.
- **Framework:** Tailwind CSS via CDN with custom CSS driven by Tailwind `@layer` / `@apply` directives. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 3. CSS Variables & Theme Tokens
Define all tokens in `:root` using the exact values below. Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text.

```css
:root {
  /* Colors */
  --color-signal-blue: #1871da;
  --color-pulse-green: #1ec072;
  --color-hot-pink: #f6609f;
  --color-cotton-candy: #ffb4ed;
  --color-solar-yellow: #ffbb38;
  --color-ember-orange: #ff5500;
  --color-forest-moss: #31805a;
  --color-tangerine: #ffa724;
  --color-ultraviolet: #9664d7;
  --color-deep-iris: #0c4cbe;
  --color-azure: #1f86ff;
  --color-alert-red: #c60808;
  --color-deep-moss: #1c372a;
  --color-concrete: #e5e7eb;
  --color-obsidian: #000000;
  --color-paper: #ffffff;
  --color-carbon: #101516;
  --color-mist: #f7f7f7;
  --color-pebble: #bec6cc;
  --color-ash: #cccccc;
  --color-smoke: #d7d7d7;
  --color-stone: #999999;
  --color-graphite: #262d2f;
  --color-iron: #666666;
  --color-slate: #808080;

  /* Semantic aliases */
  --primary: var(--color-signal-blue);
  --secondary: var(--color-pulse-green);
  --bg-primary: var(--color-concrete);
  --bg-secondary: var(--color-paper);
  --bg-tertiary: var(--color-mist);
  --text-primary: var(--color-obsidian);
  --text-secondary: var(--color-iron);
  --text-success: var(--color-pulse-green);
  --text-error: var(--color-alert-red);
  --border-default: var(--color-concrete);
  --border-error: var(--color-alert-red);
  --border-success: var(--color-pulse-green);

  /* Radius & Shadows */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 9999px;
  --shadow-subtle: rgba(24, 113, 218, 0.25) 0px 1px 2px 0px;
  --shadow-xl: rgba(0,0,0,0.01) 45px 68px 33px 0px, rgba(0,0,0,0.02) 25px 38px 27px 0px, rgba(0,0,0,0.03) 11px 17px 20px 0px, rgba(0,0,0,0.04) 3px 4px 11px 0px;
  --shadow-xl-2: rgba(31,33,35,0.03) 54px 82px 39px 0px, rgba(31,33,35,0.09) 31px 46px 33px 0px, rgba(31,33,35,0.15) 14px 20px 24px 0px, rgba(31,33,35,0.18) 3px 5px 13px 0px;

  /* Spacing */
  --spacing-gap: 8px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-160: 160px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* Z-index */
  --z-dropdown: 100;
  --z-modal: 200;
  --z-toast: 300;

  /* Typography */
  --font-base: 'Inter', sans-serif;
  --font-display: 'Inter', sans-serif;
}
```

**Font note:** The spec calls for Neue Haas Grotesk Display (substitute: Inter) as primary and Inter as secondary. Since neither is a Google Font natively, use **Inter** (Google Font) for both roles. Load via Google Fonts `<link>`.

## 4. Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector on `<html>`.
- Dark mode must flip: `--bg-primary` to `--color-carbon` (#101516), `--bg-secondary` to `--color-graphite` (#262d2f), `--text-primary` to `--color-paper` (#ffffff), `--text-secondary` to `--color-ash` (#cccccc), `--border-default` to `--color-graphite`.
- Include a visible theme toggle button in the nav with `aria-pressed` and `aria-label` that updates dynamically.
- Persist choice via `localStorage`; fall back to `prefers-color-scheme` on first visit.
- All contrast pairings must hold in both modes.

## 5. Typography
- Load **Inter** (weights 400, 500, 600, 700) and **Google Material Symbols** from Google Fonts.
- Bind `--font-base` and `--font-display` to Inter.
- Type scale (create utility classes or CSS variables):
  - caption: 12px / 1.5 / 0.3px tracking
  - body-sm: 14px / 1.43 / 0.35px
  - body: 16px / 1.5 / 0.4px
  - subheading: 20px / 1.33 / 0.5px
  - heading-sm: 24px / 1.25 / 0.6px
  - heading: 32px / 1.2 / 0.8px
  - heading-lg: 56px / 1.07 / 1.4px
  - display: 64px / 1.07 / 1.28px
  - display-xl: 244px / 1.0 / 2.44px
- All letter-spacing must be positive (0.01em minimum). Never negative.
- Display headline (hero) must reach 244px on desktop, scaling down responsively.

## 6. Layout Rules
- **Flexbox everywhere:** `display: flex` with `align-items: center` as default on every flex container unless explicitly justified otherwise.
- **Mobile-first:** Convert rows to columns on small viewports. Prevent horizontal scrolling.
- **Page max-width:** 1200px centered column below the fold. Hero is full-bleed (no max-width container).
- **Section gap:** 64px between sections.
- **Card padding:** 24px. **Element gap:** 8px.
- **Base unit:** 4px. **Density:** compact.

## 7. Component Specifications

### 7.1 Navigation Bar
- Paper background, 1px Concrete bottom border, 16px vertical padding, sticky on scroll.
- Logo (fictional brand wordmark) left, nav links centered, Login (ghost link) + Sign Up (filled black pill) right.
- Pill nav links: Inter 14px weight 500, Obsidian text, 8px/12px padding, no border/background, 16px gaps.
- Sign Up variant: Obsidian bg, Paper text, 9999px radius.
- Include theme toggle button with `aria-pressed`/`aria-label`.

### 7.2 Hero Section
- Full-bleed Concrete canvas. Split composition: left-aligned text block (~40% width) with display headline (244px) + subtitle (24-32px) + CTA button. Right 60%: cluster of confetti color blocks (sharp 0px radius rectangles in Signal Blue, Pulse Green, Hot Pink, Solar Yellow, Cotton Candy) at various sizes (40-200px), absolutely positioned.
- CTA: Filled Black Button (Obsidian bg, Paper text, 9999px radius, 12px/24px padding, Inter 16px weight 500, right arrow → glyph).
- Include a Gradient Underline Accent (20px tall, fading from Hot Pink/Pulse Green/Solar Yellow to transparent) beneath a key word in the headline.

### 7.3 Confetti Color Blocks
- Solid-filled rectangles, 0px border-radius, sizes 40-200px, positioned absolutely or in a grid.
- Colors: Signal Blue, Pulse Green, Hot Pink, Solar Yellow, Cotton Candy.
- These are decorative geometric composition elements, not data.

### 7.4 Filled Black CTA Button
- Obsidian bg, Paper text, 9999px radius, 12px vertical / 24px horizontal padding, Inter 16px weight 500.
- States: default, hover (brightness/shadow shift, cursor pointer), focus (blue-tinted focus ring `0 1px 2px 0 rgba(24,113,218,0.25)`), active (scale 0.97), loading (spinner, disabled interactions), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary, driven by success/error tokens).
- Minimum touch target 44x44px.

### 7.5 Ghost Text Link
- Inter 16px weight 500, Obsidian text, no bg/border. Underline on hover only.

### 7.6 Highlighted Body Text
- Body text (16px Inter 400) with selected words wrapped in Cotton Candy (#ffb4ed) background fill, 2-4px padding, 0 radius. Editorial marker-pen effect.

### 7.7 Gradient Underline Accent
- 20px tall horizontal line, linear-gradient from solid chromatic color (Hot Pink/Pulse Green/Solar Yellow) to transparent. Pseudo-element, 4px below accompanying text.

### 7.8 Elevated Card
- Paper bg, 6px radius, 1px Concrete border, 24px padding.
- Optional multi-layer soft shadow (shadow-xl) for floating cards; zero/minimal shadow on flat sections.
- States: default, hover (translateY -2px + shadow shift), focus-within (border highlight), loading (skeleton shimmer), empty state (Google Icon + guidance text).

### 7.9 Icon Container
- 2px radius, 16-20px padding, filled with chromatic accent or Concrete gray. Icons 16-20px in Paper or Obsidian.

### 7.10 Features Section
- 3-column card grid. Each card: Paper bg, 6px radius, 1px Concrete border, 24px padding. Icon container (2px radius, chromatic fill) + heading (Inter 20px weight 600, Obsidian) + body text (16px weight 400, Obsidian, 1.5 line-height).

### 7.11 How It Works Section
- 3 steps. Each: step number (display size, Obsidian), title, description. Connected by a visual flow (flex row on desktop, column on mobile).

### 7.12 Testimonials Section
- Cards with quote text (16px Inter 400), author name (14px weight 600), role (14px weight 400, Iron). Paper bg, 6px radius, 1px Concrete border.

### 7.13 Pricing Section
- 3 tiers. Each card: tier name, price (display size), feature list, CTA button. Middle tier highlighted with Concrete border emphasis or subtle shadow. Use Cotton Candy highlight on "recommended" badge.

### 7.14 FAQ Section
- Accordion-style. Question (Inter 16px weight 600) + answer (16px weight 400). Toggle via CSS/JS. Use `aria-expanded` on triggers.

### 7.15 Final CTA Section
- Full-width band. Large display headline, subtitle, single Filled Black CTA button. Optional confetti blocks in background.

### 7.16 Footer
- Carbon bg, Paper text, Deep Moss secondary surface. 64px vertical padding. Links in Inter 14px weight 400. Full-width dark band, edge-to-edge. Include secondary links (Privacy, Terms, etc.) and a small brand wordmark.

### 7.17 Section Divider Bands
- Full-width horizontal bands in chromatic accent (Pulse Green, Hot Pink, Solar Yellow) or Mist, 8-16px tall, between sections.

## 8. Core UX & Micro-Interactions
- **Responsive:** Fluid sizing, responsive breakpoints, no horizontal overflow.
- **Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`). Respect `prefers-reduced-motion`.
- **Accessibility:** Sufficient contrast in both modes. Never rely solely on color for state. Semantic HTML5. Correct ARIA roles/labels. Logical DOM/focus order. Full keyboard operability. `aria-live` regions for dynamic feedback.
- **Visual feedback:** Every click, hover, submission triggers visible state change.
- **Destructive actions:** Visually distinct in both themes (use Alert Red).

## 9. Icons
- Use **Google Material Symbols** exclusively. No inline SVGs or local icon files.
- Render in 2px-radius containers with solid chromatic fills.

## 10. Deliverables
- `index.html` — semantic, clean markup with BEM classes.
- `style.css` — all tokens, components, responsive rules, dark mode.
- `script.js` — theme toggle, FAQ accordion, mobile nav, smooth scroll. No inline scripts.
- All user-facing copy in English.
- Invent a fictional brand name, product name, and all marketing copy. Never reference "Composer" or any real brand.

## 11. Do's and Don'ts (Enforce Strictly)
**Do:**
- Use 9999px radius for all buttons, tags, nav items.
- Let display headline reach 244px; don't constrain to 48-64px.
- Deploy confetti blocks as geometric composition — 0px radius, solid fills, scattered.
- Use blue-tinted shadow for focus rings and brand elevation.
- Set body/headings in Obsidian on Paper/Concrete — 21:1 contrast floor.
- Use Cotton Candy highlight on emphasized words in body copy.
- Keep letter-spacing positive at all sizes (0.01em minimum).

**Don't:**
- Don't create chromatic filled CTA — only Obsidian filled button.
- Don't use shadows on flat sections — rely on 1px Concrete borders.
- Don't set body text below 14px or above 16px.
- Don't apply radius larger than 6px to cards/containers.
- Don't use more than 3 chromatic accents in a single composition.
- Don't substitute blue-tinted shadow with neutral shadow on interactive elements.
- Don't set display headline below 56px or use negative letter-spacing.

## 12. Output
Generate only the three files (`index.html`, `style.css`, `script.js`) with complete, production-ready code. No placeholders where real copy is expected. No preamble or commentary.
