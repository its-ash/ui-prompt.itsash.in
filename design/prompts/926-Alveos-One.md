# Coding-AI Prompt: Complete Landing Page — Alveos One Theme

## 1. Project Overview

Build a complete, responsive landing page using the **Alveos One** visual style system. The page must include these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, and Footer with secondary links.

**Fictional Brand Requirement:** Invent a fictional brand name, product name, and all copy. Do NOT use "Alveos One", its logo, trademarks, or product names anywhere in the deliverable. The Alveos One style is to be reused only as a visual reference.

## 2. Architecture & File Structure

- Deliver three separate files: `index.html`, `style.css`, `script.js`.
- No inline `style="..."` attributes anywhere in HTML.
- No inline `<script>` blocks beyond a single deferred entry-point reference.
- Use one consistent class-naming convention (BEM) across all markup and CSS.
- All styling lives in `style.css`. HTML must remain semantic and styling-agnostic.

## 3. CSS Variables & Theme Tokens

Define all tokens in `:root` and a `.dark` class / `@media (prefers-color-scheme: dark)` block.

### Colors
```
--color-linen-canvas: #fcf9f7;
--color-bone-white: #fefefe;
--color-graphite-ink: #000000;
--color-nightshade-black: #05060b;
--color-deep-harbor: #030f1c;
--color-charcoal-slate: #1d1d1d;
--color-iron-grey: #262628;
--color-obsidian: #111112;
--color-stone-grey: #575757;
--color-ash: #717171;
--color-pebble: #989695;
--color-concrete: #a5a5a5;
--color-dove: #bababa;
--color-clay-shadow: #d1cfcd;
--color-haze: #ecedef;
--color-spotlight-gradient: radial-gradient(50% 95% at 50% 108.6%, rgb(252, 249, 247) 0%, rgb(168, 156, 138) 100%);
```

Standard semantic aliases (map to tokens above):
```
--primary: var(--color-nightshade-black);
--secondary: var(--color-charcoal-slate);
--bg-primary: var(--color-linen-canvas);
--bg-secondary: var(--color-bone-white);
--text-primary: var(--color-graphite-ink);
--text-secondary: var(--color-charcoal-slate);
--text-muted: var(--color-stone-grey);
--text-success: #2e7d32;
--text-error: #c62828;
--border-default: var(--color-clay-shadow);
--border-strong: var(--color-charcoal-slate);
--border-error: var(--color-text-error);
--border-success: var(--color-text-success);
```

### Radius, Shadows, Spacing, Transitions, Elevation
```
--radius-sm: 12px;
--radius-md: 25px;
--radius-lg: 100px;
--shadow-sm: rgba(0, 0, 0, 0.06) 0px 1px 5px 0px;
--shadow-md: rgba(0, 0, 0, 0.05) 0px 2px 10px 0px;
--shadow-xl: rgba(0, 0, 0, 0.08) 0px 8px 30px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
--spacing-gap: 10px;
--transition-fast: 150ms ease;
--transition-normal: 250ms ease;
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--z-dropdown: 100;
--z-modal: 200;
--z-toast: 300;
```

Spacing scale tokens: `--spacing-5` through `--spacing-150` per the source scale (5,7,8,9,10,14,15,20,24,25,26,30,32,50,80,150 px).

### Typography
- Load **Hanken Grotesk** from Google Fonts (weights 400, 500, 600, 700) with OpenType features `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`.
- Load **Inter** as fallback body font (weight 400).
- Load Google Material Symbols/Icons for all icons. No inline SVGs or local icon files.
- `--font-base: 'Hanken Grotesk', 'Inter', system-ui, sans-serif;`
- `--font-mono: 'SF Mono', ui-monospace, monospace;`

Type scale tokens: `--text-micro` (10px), `--text-caption` (12px), `--text-body-sm` (16px), `--text-body` (18px), `--text-body-lg` (20px), `--text-subheading` (24px), `--text-heading-sm` (28px), `--text-heading` (36px), `--text-heading-lg` (38px), `--text-display` (52px).

### Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- In dark mode: canvas becomes `#0a0a0b`, cards become `#141416`, text becomes near-white; maintain contrast pairing (light bg → dark text, dark bg → light text).
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible theme toggle control with correct `aria-pressed` and `aria-label`.

## 4. Layout & Flexbox Rules

- Use Flexbox (`display: flex`) for all layout structures.
- Every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-first: convert rows to columns on small viewports; prevent horizontal scrolling.
- Page max-width: 1200px, centered.
- Section vertical gap: 80px.
- Card padding: 24px.
- Element gap: 10px.

## 5. Component Specifications

### 5.1 Top Navigation Bar
- Sticky header, transparent over hero, linen-toned over content.
- Left: wordmark (fictional brand) in Hanken Grotesk 18px weight 500.
- Center: 4 nav links in 16px weight 400.
- Right: Pre-Order CTA button.
- Vertical padding ~20px, horizontal full-bleed with 40px side gutter.
- No visible border.

### 5.2 Pre-Order CTA Button (Primary)
- Background: `--color-nightshade-black`, text: `--color-bone-white`.
- Hanken Grotesk 16px weight 500, padding 10px 20px, border-radius 12px.
- No border, no shadow.
- States: default, hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring), active (transform scale 0.97), loading (spinner, disabled interaction), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via success/error text tokens).
- Minimum touch target 44x44px.

### 5.3 Pill Eyebrow Label
- Background: `--color-bone-white`, text: `--color-iron-grey`, border 1px `--color-clay-shadow`.
- Hanken Grotesk 12px weight 500, padding 7px 14px, border-radius 100px (full pill).
- Optional subtle box-shadow `--shadow-sm`.

### 5.4 Hero Section with Spotlight
- Full-viewport opening. Background: `--color-spotlight-gradient`.
- Vertically centered stack: pill label → 52px display headline (Graphite Ink) → 18px body subtext (Charcoal Slate, max-width 560px) → product device image in lower third.
- No horizontal split. Breathing room dominant.

### 5.5 Image Feature Card
- Full-bleed photograph clipped to 25px radius.
- Dark gradient overlay (transparent top → near-black bottom) for text legibility.
- White headline 28–36px weight 600, white body 18px weight 400, both bottom-left aligned with 24px padding.
- Aspect ratio ~3:4. Shadow `--shadow-md`.
- States: default, hover (elevation/shadow shift or translateY(-2px)), focus-within (highlight border), loading (skeleton shimmer), empty (icon + guidance text).

### 5.6 Two-Column Card Grid
- Two equal-width Image Feature Cards side by side, ~20px gutter.
- Repeats vertically (2×N).
- Sits on Bone White or Linen Canvas.

### 5.7 Press Logos Bar
- Centered on Linen Canvas or Bone White.
- Eyebrow 'AS SEEN ON' in Hanken Grotesk 12px weight 500, letter-spacing 0.4440em, flanked by 1px horizontal lines in Charcoal Slate extending ~120px each side.
- Row of 5 press logos in Graphite Ink, 24–32px tall, evenly spaced.
- Below: 'AND OVER 500 NEWS SITES' in tracked-out caps + 9px SF Mono 'Verified by BrandPush.co' subline.

### 5.8 Outlined Secondary Button
- Transparent or Bone White background, 1px border in Charcoal Slate or Stone Grey, text in same dark tone.
- Hanken Grotesk 16px weight 500, padding 10px 20px, border-radius 12px.
- All button states as in 5.2.

### 5.9 Dark Footer
- Background: `--color-nightshade-black`, text/borders in Bone White at reduced opacity.
- Padding 40–60px vertical.
- Secondary nav, legal copy, utility links in 12–14px Hanken Grotesk weight 400.

### 5.10 Additional Landing Sections
- **Features:** 3 cards using Image Feature Card pattern (or content cards on Bone White).
- **How It Works:** 3 steps with numbered indicators, flex row (stacks on mobile).
- **Testimonials:** Cards with quote, author name, role; centered or 2-column.
- **Pricing:** 3 tiers, middle tier emphasized (border or shadow), each with feature list and CTA.
- **FAQ:** Accordion using `<details>`/`<summary>` or equivalent, animated via CSS.
- **Final CTA:** Centered band with headline, subtext, primary button.
- **Footer:** as in 5.9 with secondary links.

## 6. Core UX & Micro-Interactions

- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions use `.btn-danger` visually distinct in both themes.
- Responsive by default, no horizontal overflow.

## 7. Do's and Don'ts (Enforce)

### Do
- Use 25px border-radius for all image cards, feature cards, photograph containers.
- Use Nightshade Black as primary action button fill with white text and 12px radius — never introduce a chromatic CTA color.
- Set page canvas to Linen Canvas for body sections; Bone White surfaces only as raised cards.
- Use Hanken Grotesk for all primary type with OpenType features enabled.
- Apply 0.4440em letter-spacing to small all-caps labels (10–12px).
- Use warm radial gradient only for hero spotlight.
- Keep shadows nearly invisible (0.05–0.08 opacity, low blur).

### Don't
- Do not introduce any chromatic color — system is 0% colorful.
- Do not use sharp 0px or small 4px radii on feature cards.
- Do not use brand-colored CTA (blue/green/red).
- Do not use heavy or layered shadows.
- Do not use multiple gradients — hero radial is the only one.
- Do not pair Hanken Grotesk with geometric/condensed display face.
- Do not center-align long body paragraphs — centered only for headlines, hero copy, single-line metadata; body text left-aligned.

## 8. Imagery & Content

- All imagery photographic (no illustrations, 3D renders, abstract graphics). Use placeholder image URLs (e.g., picsum or similar) with appropriate aspect ratios.
- Press logos rendered as flat black monochrome marks (use text placeholders if no logos available).
- Product device is the visual anchor of the hero.
- All user-facing copy must be in English.

## 9. Deliverable Checklist

- [ ] `index.html`, `style.css`, `script.js` as separate files.
- [ ] BEM naming convention throughout.
- [ ] No inline CSS.
- [ ] All CSS variables defined in `:root` and dark mode.
- [ ] Dark mode toggle with localStorage persistence.
- [ ] Google Fonts (Hanken Grotesk, Inter) + Material Symbols loaded.
- [ ] All component states implemented (hover, focus, active, loading, disabled, success, error).
- [ ] Responsive mobile-first layout, no horizontal scroll.
- [ ] Accessibility: ARIA, keyboard nav, focus rings, aria-live regions.
- [ ] All copy in English; fictional brand name used (no "Alveos One").
- [ ] All 8 sections present: Hero, Features, How It Works, Testimonials, Pricing, FAQ, Final CTA, Footer.
