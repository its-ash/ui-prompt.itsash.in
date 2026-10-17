# Coding AI Prompt — GitButler-Style Landing Page

## 1. Project Overview
Build a complete, responsive landing page using a fictional brand name, product, and copy. Do NOT use the real brand name "GitButler", its logo, trademarks, or product names. Reuse only the visual style described below. Output separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) throughout.

## 2. Strict Architecture Rules
- **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes. Use class/ID selectors only. HTML stays semantic and styling-agnostic.
- **CSS Variables:** Define all tokens in `:root` and theme classes. Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`. Enforce contrast pairing (light bg ↔ dark text, dark bg ↔ light text) in every theme.
- **Light Mode Background:** Use `#f3f2f1` (Paper) as default canvas, not pure white. Where near-white is needed, use `#fefefe`.
- **Dark Mode Mandatory:** Provide tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class. Background/text variables switch seamlessly. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox Layout:** Every flex container defaults to `align-items: center` unless explicitly justified. Mobile-first, responsive, no horizontal scroll.
- **Framework:** Tailwind CSS or clean custom CSS via `@layer`/`@apply`. Utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts only. Text: Bodoni Moda (But Head substitute), Inter, JetBrains Mono (Geist Mono substitute), Source Code Pro. Icons: Google Material Symbols/Icons. No inline SVGs or local icon files.

## 3. Theme Tokens (GitButler Style)
Define these CSS variables mapped to the style:

Colors:
- `--color-paper: #f3f2f1`
- `--color-white: #ffffff`
- `--color-ink: #1c1917`
- `--color-charcoal: #272321`
- `--color-deep-graphite: #3a3532`
- `--color-warm-gray: #7c716a`
- `--color-steel: #aaa29d`
- `--color-rule-gray: #cac6c3`
- `--color-aqua-mist: #d3f3f3`
- `--color-aqua-midtone: #8dd9d9`
- `--color-outline-aqua: #9fe4e4`
- `--color-butler-teal: #25b1b1`
- `--color-deep-teal: #1d8a8a`

Fonts:
- `--font-but-head: 'Bodoni Moda', serif`
- `--font-inter: 'Inter', sans-serif`
- `--font-geist-mono: 'JetBrains Mono', monospace`
- `--font-source-code-pro: 'Source Code Pro', monospace`

Type scale tokens:
- `--text-caption: 400 12px/1.5 var(--font-inter)`
- `--text-nav: 500 12px/1.2 var(--font-inter)`
- `--text-body-small: 400 14px/1.2 var(--font-inter)`
- `--text-code: 400 14px/1.5 var(--font-geist-mono)`
- `--text-body: 400 16px/1.5 var(--font-inter)`
- `--text-feature-title: 600 18px/1.2 var(--font-inter)`
- `--text-wordmark: 400 40px/1.5 var(--font-but-head)`
- `--text-command-panel-heading: 400 48px/1 var(--font-but-head)`
- `--text-section-heading: 400 60px/1 var(--font-but-head)`
- `--text-display: 400 82px/1 var(--font-but-head)`

Spacing: base unit 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 36, 40, 48, 60, 80px. Section gap 32px, card padding 20px, element gap 20px.

Border radius: links 20px, pills 60px, badges 100px, images 16px. Square buttons 0px.

Shadows: `--shadow-sm: 0px 1px 6px 0px rgba(0,0,0,0.1), 0px 24px 44px 3px rgba(0,0,0,0.2)` (terminal). `--shadow-xl: inset 0px 4px 100px 0px rgb(58,53,50)` (command panel).

## 4. Component Specifications

### Public Header
Top nav bar. Ink wordmark in But Head 40px/60px beside compact Inter nav at 14px/16.8px weight 500. Links in Ink with 20px gaps. Square-corner transparent sign-up control + small Butler Teal login control.

### Square Outline Button
Transparent fill, 1px solid Ink border, Ink label, 0px radius, 12px 20px padding. Hard-edged counterweight to rounded controls.

### Teal Login Button
Butler Teal fill, White text, 8px radius, 12px 20px padding. Reserve for conversion controls.

### Hero Platform Toggle
60px radius, 1px Rule Gray outline. Segments in But Head 40px/40px. Active CLI: Deep Graphite fill, White text. Inactive Desktop: transparent, Ink text.

### Dark Install Command Panel
Deep Graphite fill, 0px radius, 16px padding. Title in But Head 48px/48px White. Command in Geist Mono 14px/21px with Deep Teal and Outline Aqua accents. Inset shadow.

### Pill Documentation Button
Transparent, 1px Rule Gray border, 60px radius, 10px 14px 10px 16px padding. Ink icon, Warm Gray text 16px/24px.

### Terminal Product Demo
White 16px-radius frame, narrow light chrome strip, Charcoal code area. Geist Mono 14px/21px White code with Deep Teal/Outline Aqua fragments. Terminal shadow.

### Feature Tab Strip
Contiguous White tab row, 1px Rule Gray borders, 8px outer corners. Ink labels, 12px padding, small muted line icon. Selected tab: 4px Butler Teal top rule.

### Feature Grid Tile
Two-row, three-column grid, 1px Rule Gray dividers, 8px outer corners on Paper. 20px padding, Ink icon, Inter 18px/21.6px weight 600 title, Inter 16px/24px Warm Gray body.

### Open Source Badge
White fill, 100px radius, 8px 12px padding, Deep Teal Inter 15px/18px weight 500 text. Place over Aqua Mist or Butler Teal surfaces.

### Teal Conversion Card
Butler Teal or Aqua Mist fill, 20px radius, 58px vertical 32px horizontal padding. Headline in But Head 60px/60px. On teal: White headline, pale supporting copy. On aqua: Ink headline.

### Community Quote
Inter 16px/24px Ink quote, small circular avatar, Inter identity line. Two-column composition, 32px gaps. 100px-radius outline circles with 1px Rule Gray borders for carousel arrows.

## 5. Required States (Enforce for All Components)
- **Buttons:** default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), hover (brightness/shadow, pointer), focus (outline/box-shadow ring), active (scale 0.97), loading (disabled, spinner/icon, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback via --text-success/--text-error).
- **Cards:** default (flex, subtle borders, elevation), hover (shadow shift or translateY(-2px)), focus-within (border highlight), loading (skeleton shimmer), empty state (icon + guidance text).
- **Forms/Inputs:** empty, focused (ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex wrapper with label, input, error container.
- **Modals:** opening, open, loading, success/error, closing (CSS transitions). Centered flex, backdrop, Google Icon close button, focus trapping, Esc/overlay close.

## 6. Global UX Rules
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never color-only state communication, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 7. Page Sections to Build
Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

Use the GitButler visual style: Paper canvas, Ink display type, teal punctuation, technical grids, warm graphite surfaces, restrained teal activation. Invent fictional brand name, product, and copy. Never use real brand name, logo, trademarks, or product names.

## 8. Deliverables
- `index.html`, `style.css`, `script.js`
- BEM naming convention
- No lorem-ipsum-only where real copy supplied; placeholders only where unspecified
- No new HTML elements beyond existing structure if editing (not applicable for from-scratch build)
