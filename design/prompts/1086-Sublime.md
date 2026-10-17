# Coding-AI Prompt: Complete Landing Page — Sublime Theme

You are an expert front-end developer. Build a complete, production-ready landing page using the **Sublime** visual theme. Follow every rule below strictly. Output three separate files: `index.html`, `style.css`, `script.js`. No inline CSS, no inline SVGs, no inline scripts beyond a single deferred entry-point reference.

## 1. Brand & Copy Rules

- **Invent a fictional brand name, product name, and all copy.** Never use the real brand name "Sublime", its logo, trademarks, or product names anywhere in the page. Use a placeholder fictional name (e.g., "Atelier", "Muse", "Quiet", etc.) and invent realistic marketing copy for every section.
- All user-facing copy must be in **English**.
- No lorem-ipsum-only submissions; every section must contain realistic, meaningful copy.

## 2. CSS-First Architecture & Zero Inline CSS

- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class or ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling.

## 3. CSS Variables & Theme Tokens

Define all tokens in `:root` (light mode default). Dark mode overrides under `@media (prefers-color-scheme: dark)` and `.dark` class.

**Colors:**
- `--color-moss-green: #38744d`
- `--color-signal-cyan: #00aaff`
- `--color-ice-wash: #e0f5ff`
- `--color-mint-whisper: #cbffa6`
- `--color-pure-black: #000000`
- `--color-graphite: #181816`
- `--color-paper: #ffffff`
- `--color-bone: #efefef`
- `--color-stone: #908f8e`
- `--color-fog: #a29e9c`
- `--color-slate: #6a6967`

**Standard tokens (required by architecture):**
- `--primary: var(--color-moss-green)`
- `--secondary: var(--color-graphite)`
- `--bg-primary: var(--color-paper)`
- `--bg-secondary: var(--color-bone)`
- `--text-primary: var(--color-pure-black)`
- `--text-secondary: var(--color-fog)`
- `--text-success: var(--color-moss-green)`
- `--text-error: #d32f2f`
- `--border-default: var(--color-fog)`
- `--border-error: #d32f2f`
- `--border-success: var(--color-moss-green)`
- `--radius-sm: 5px`
- `--radius-md: 5px`
- `--radius-lg: 5px`
- `--shadow-sm: none`
- `--shadow-md: none`
- `--spacing-gap: 15px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 300ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown: 100`
- `--z-modal: 200`
- `--z-toast: 300`

**Fonts:**
- `--font-base: 'Control Upright', 'Inter', sans-serif` (substitute Inter via Google Fonts since Control Upright is custom)
- `--font-serif: 'Times New Roman', 'Source Serif Pro', serif` (substitute Source Serif Pro via Google Fonts)
- Load Google Fonts via `<link>` tags. Use Inter (weights 400) and Source Serif Pro (weight 400) as substitutes.

**Typography tokens:**
- `--text-caption: 12px`
- `--text-body-sm: 14px`
- `--text-body: 16px`
- `--text-body-lg: 18px`
- `--text-subheading: 24px`
- `--text-heading-sm: 28px`
- `--text-heading: 64px`
- `--text-display: 142px`

**Spacing tokens:**
- `--spacing-8: 8px`
- `--spacing-20: 20px`
- `--spacing-60: 60px`
- `--spacing-100: 100px`
- `--spacing-160: 160px`
- `--spacing-200: 200px`

**Contrast pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text. Enforce in both themes.

**Light mode background:** Use `#fefefe` where near-white is needed, not `#ffffff` for elevated surfaces. Page canvas stays `#ffffff` (Paper).

## 4. Dark Mode (Mandatory)

- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- In dark mode: background becomes near-black, text becomes light, surfaces invert. Moss Green and Signal Cyan remain as accents but adjust contrast.
- Include a visible theme toggle button with `aria-pressed` and `aria-label`. Persist choice via `localStorage`, fall back to `prefers-color-scheme` on first visit.
- All transitions between themes must be smooth.

## 5. Flexbox Layout & Mobile-First

- All flex containers default to `align-items: center` unless explicitly justified.
- Mobile-responsive: rows become columns on small viewports. No horizontal scrolling.
- Page max-width: 1200px, centered. Section gap: 80–120px.

## 6. Typography Rules

- **Control Upright substitute (Inter):** weight 400 only. Sizes: 12, 14, 16, 18, 24, 28, 64, 142px.
  - Line height: 0.90–1.00 at display (64px+), 1.13–1.16 at headings (24–28px), 1.39 at body (12–18px).
  - Letter spacing: -2.84px at 142px, -1.28px at 64px, -0.56px at 28px, -0.48px at 24px, -0.36px at 18px, -0.32px at 16px, -0.21px at 14px, +0.096px at 12px.
  - OpenType features: `"ss12" on, "ss09" on` (apply via CSS `font-feature-settings`).
- **Times New Roman substitute (Source Serif Pro):** weight 400 only. Sizes: 14, 16, 18px. Line height 1.20–1.39. Letter spacing -0.03em at 14px, -0.02em at 16–18px. OpenType `"ss12" on`.
- **Single weight system:** No bold weights. Hierarchy via size and color only.
- Display headlines (64px+) line-height 0.90–1.00. Headlines always centered.
- Times New Roman (serif) only for body paragraphs and quotes. Never for UI controls, nav, or buttons.

## 7. Component Specifications

### Navigation Bar
- Transparent background, 50px top padding, 15px gap between logo and actions.
- Left: small organic bird/leaf icon (Google Material Symbol) + fictional brand wordmark in Control Upright 16px, color Pure Black.
- Right: outlined "login" button (transparent fill, Stone 1px border, 5px radius, 8px/18px padding) + green "try now" button (Moss Green fill, white text, 5px radius, 8px/18px padding, Control Upright 14px), separated by 10px gap.
- No sticky behavior. Nav scrolls with page.
- Include theme toggle.

### Green Filled Action Button
- Moss Green fill, white text, Control Upright 14px, letter-spacing -0.21px, 5px radius, 8px vertical / 18px horizontal padding.
- Only saturated color element per view. No hover state needed (green is already committed) — but still include subtle focus ring.
- States: default, hover (brightness shift), focus (outline ring), active (scale 0.97), loading (spinner), disabled (opacity 0.5, grayscale, not-allowed), success/error.

### Outlined Nav Button
- Transparent fill, Stone 1px border, Pure Black text, 5px radius, 8px/18px padding.

### Pill Tag
- Signal Cyan background, white text, 999px radius, Control Upright 12px, 4px/12px padding.

### Text Note Card
- Ice Wash or Mint Whisper background, Pure Black text, Control Upright 14–16px, 18–25px padding, 5px radius. No border, no shadow. Sometimes contains a Pill Tag at bottom.

### Image Collage Card
- Paper surface, Fog 1px border, 5px radius, 18px padding around image fill. Cards at slight offsets/rotations (not grid-aligned).

### Display Headline
- Control Upright 142px (hero) or 64px (section), weight 400, line-height 0.90–1.00, letter-spacing -2.84px at 142px / -1.28px at 64px. Color Pure Black. Centered.

### Quote Block
- Centered, Stone text, Control Upright 28px, line-height 1.13, 200px+ vertical padding. Whitespace is the container.

### Green Inline Text Block
- Moss Green text on Paper background, Control Upright 14px, left-aligned within 5px-radius container with no fill.

### Footer Surface
- Bone or Paper background, 40px top-radius on top edge, 25px padding, Control Upright 14px in Fog.

### Media Card with Play Overlay
- Image fill inside Fog 1px border, 5px radius. Play button: small circular icon in Pure Black centered on image.

## 8. Do's and Don'ts

**Do:**
- Use Control Upright (Inter) at weight 400 for all UI text.
- Set display headlines (64px+) to line-height 0.90–1.00.
- Use Moss Green for exactly one element per view.
- Keep page background at Paper (#ffffff); let Ice Wash or Mint Whisper carry color in content areas.
- Use 999px radius for tags/pills, 5px for functional buttons.
- Let image cards overlap and rotate slightly in collages.
- Reserve 142px for hero display only; section headings max 64px.

**Don't:**
- No additional font weights.
- No Times New Roman for UI controls/nav/buttons.
- No drop shadows on cards (elevation via surface color only).
- Don't pair Moss Green with Signal Cyan on same element.
- No border-radius between 5px and 999px on standard components.
- Don't right/left-align display headlines — always centered.
- Don't fill large areas with Signal Cyan.

## 9. Page Sections Required

Build these sections in order:

1. **Hero:** Centered 142px display headline + full-width 3D-rendered sculptural image below. Nav at top.
2. **Features:** 3 cards (Text Note Card or Image Collage Card style). Centered section heading at 64px.
3. **How It Works:** 3 steps. Numbered, centered, generous spacing.
4. **Testimonials:** Quote blocks with Stone text, centered, generous vertical padding.
5. **Pricing:** 3 tiers. Cards with surface colors, no shadows. One tier highlighted with Mint Whisper.
6. **FAQ:** Accordion-style, Fog borders, 5px radius.
7. **Final CTA:** Centered headline + green action button.
8. **Footer:** Bone/Paper background, 40px top-radius, secondary links, Fog text.

## 10. Accessibility & UX

- Semantic HTML5 elements. Correct ARIA roles/labels on custom widgets.
- Full keyboard operability. Focus rings on all interactive elements.
- `aria-live` regions for dynamic feedback.
- Sufficient contrast in both light and dark modes.
- Never rely solely on color for state communication.
- Respect `prefers-reduced-motion`.
- Smooth CSS transitions on all state changes.
- Every click/hover/submission triggers visible state change.
- Destructive actions visually distinct in both themes.

## 11. File Structure

- `index.html`, `style.css`, `script.js`.
- No inline `<script>` beyond single deferred entry-point reference.
- Consistent class-naming convention (BEM) throughout. Never mix conventions.

## 12. Imagery

- Use placeholder images via `https://placehold.co/` or similar. No real brand assets.
- Image cards at slight rotation/overlap in collage sections.

## 13. Deliverable

Output only the three files with their complete contents. No preamble, no closing commentary. Ensure the page is fully functional, responsive, and matches the Sublime theme precisely.
