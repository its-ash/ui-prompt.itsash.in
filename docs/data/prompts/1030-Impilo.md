# UI/UX Coding Prompt — Impilo Landing Page

## 1. Project Scope & Deliverables
Build a complete, responsive landing page as three separate files: `index.html`, `style.css`, and `script.js`. No inline `<style>` or `<script>` blocks beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) across the entire deliverable. Invent a fictional brand name, product, and all copy — never use the real brand name "Impilo", its logo, trademarks, or product names anywhere in the page. All user-facing copy must be in English.

## 2. Theme & Visual Identity
Theme: **dark**. Deep midnight-violet canvas. No neutral grays or pure black anywhere — every dark surface stays in the violet family.

### 2.1 CSS Variables (define in `:root` and `.dark`)
Colors:
- `--color-deep-iris: #16165c` (page canvas, hero background, primary surface)
- `--color-iris-shadow: #232269` (elevated cards on dark canvas)
- `--color-iris-glow: #403cd5` (highlighted metric blocks, footer, mid-elevation panels)
- `--color-iris-pulse: #5350cc` (filled primary buttons, active/selected states)
- `--color-iris-border: #4846c6` (card borders on dark)
- `--color-iris-veil: #524fe1` (body/card border accent, hairline separators)
- `--color-lilac-mist: #b1a6f6` (line-art illustration stroke, decorative SVG only — never text or fills)
- `--color-clinical-cyan: #00b1ff` (data, links, chart strokes — never decorative fills)
- `--color-cyan-soft: #59b4ff` (secondary cyan accent)
- `--color-mint-vital: #00ffaa` (positive health signals only — never errors/warnings)
- `--color-teal-signal: #2ee9ff` (key data callouts)
- `--color-cloud-white: #ffffff` (primary text on dark, button text on dark)
- `--color-pearl: #f4f4f6` (soft icon strokes, dividers, light-section background)
- `--color-ash: #d8d8e3` (muted text on light sections, secondary borders)
- `--color-fog: #9494a9` (hairline dividers, disabled borders)

Map to semantic tokens: `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--primary`, `--secondary`.

Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text. Light-mode background (if toggled) must not be pure white — use `#fefefe` where near-white is needed.

Border radius & shadows:
- `--radius-sm: 7px` (icons)
- `--radius-md: 16px` (inputs)
- `--radius-lg: 24px` (cards)
- `--radius-pill: 9999px` (buttons, tags, tabs)
- `--radius-card-elevated: 32px`
- `--shadow-cta: 0 0 20px rgba(60, 57, 185, 0.4)`

Spacing & transitions:
- `--spacing-gap: 8px`
- `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`

### 2.2 Typography
Use Google Fonts. Primary text font: **Manrope** (free substitute for Gilroy) at weights 500 and 600 only — never 400 or 700. Bind to `--font-base`. Icons: Google Material Symbols/Icons. No raw inline SVGs or local icon files.

Type scale tokens:
- `--text-caption: 12px` (line-height 1.44, letter-spacing 0.24px)
- `--text-body-sm: 14px` (line-height 1.44, letter-spacing 0.28px)
- `--text-subheading: 18px` (line-height 1.44, letter-spacing -0.54px)
- `--text-heading-sm: 24px` (line-height 1.44, letter-spacing -0.72px)
- `--text-heading: 46px` (line-height 1.00, letter-spacing -1.84px)
- `--text-heading-lg: 54px` (line-height 1.00, letter-spacing -2.16px)
- `--text-heading-xl: 66px` (line-height 1.00, letter-spacing -2.64px)
- `--text-display: 92px` (line-height 0.92, letter-spacing -6.9px)
- `--text-display-xl: 124px` (line-height 0.92, letter-spacing -9.3px)

Weight 600 for all headings/display; weight 500 for body, links, buttons, cards. Aggressive negative tracking at large sizes is a signature — do not loosen it.

### 2.3 Dark Mode (Mandatory)
Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Theme switching must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label` state. Background and text variables must switch seamlessly without HTML restructuring.

### 2.4 Layout & Flexbox
Use Flexbox (`display: flex`) for all layout structures. Every flex container must default to `align-items: center` unless an explicitly justified exception. Mobile-first: convert rows to columns on small viewports; prevent horizontal scrolling. Page max-width 1200px for centered content; dark sections full-bleed edge-to-edge. Section gap 80px. Card padding 24px. Element gap 8px.

## 3. Sections to Build
1. **Hero** — full-bleed Deep Iris canvas. Left third: line-art illustration in Lilac Mist (`#b1a6f6`), 1-2px stroke, no fills, medical devices (stethoscope, monitor, laptop) as decorative atmosphere. Right two-thirds: headline at 92px Gilroy/Manrope weight 600, white, letter-spacing -6.9px, line-height 0.92. Single most important word wrapped in a dotted-outline box: 1px dashed Clinical Cyan (`#00b1ff`), 7px radius. Body subtext at 17px weight 500, Pearl (`#f4f4f6`). Ghost pill button: Pearl text/border, 9999px radius, 16px 24px padding. Dashboard card overlapping section bottom. Navigation bar: transparent, 80px height, logo left, nav links center in white at 17px weight 500 with dropdown arrows, pill "Request Demo" button right (Iris Pulse fill, white text, ambient violet shadow).
2. **Features** — 3 cards on dark canvas. Dark Canvas Card style: Iris Shadow bg, 24px radius, 1px Iris Border hairline, 24px padding. Each card: icon (7px radius container, Lilac Mist), heading at 24px weight 600 white, body at 17px weight 500 Pearl. Flex layout, mobile stacks to column.
3. **How It Works** — 3 steps. Numbered steps with Clinical Cyan accent numbers at 46-66px weight 600, title at 24px weight 600 white, description at 17px weight 500 Pearl. Horizontal on desktop, vertical on mobile.
4. **Testimonials** — cards on dark canvas. Iris Shadow bg, 24px radius, quote text in white at 17px weight 500, author name in white weight 600, role in Pearl at 14px. Optional subtle avatar placeholder using Material Symbols.
5. **Pricing** — 3 tiers. Cards: Iris Shadow bg, 24px radius, 1px Iris Border. Highlighted tier: Iris Glow bg with Iris Border hairline. Price at 66px weight 600 Clinical Cyan. Feature list with check icons in Mint Vital (`#00ffaa`) for positive. CTA button per tier (primary pill for highlighted, ghost for others).
6. **FAQ** — accordion. Questions in white at 18px weight 600, answers in Pearl at 17px weight 500. Expand/collapse via CSS transitions. Chevron icon from Material Symbols. Keyboard accessible.
7. **Final CTA** — full-width dark band. Headline at 66px weight 600 white, subtext at 17px Pearl, primary pill button (Iris Pulse). Optional dotted-outline emphasis on one word.
8. **Footer** — Iris Glow (`#403cd5`) background. Links in white at 14px weight 500. Secondary links grouped. Compliance badge pair optional in light inversion section above footer if applicable. Hard color cut from dark to light sections where used — no gradients.

## 4. Component State Requirements
- **Buttons**: Default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px touch target), Hover (brightness/shadow, cursor pointer), Focus (distinct focus ring via CSS variables), Active (transform scale 0.97), Loading (disabled interactions, CSS spinner or animated Material Icon, no dimension distortion), Disabled (opacity 0.5, greyscale, cursor not-allowed), Success/Error (temporary feedback via `--text-success`/`--text-error`).
- **Cards**: Default (flex, subtle borders, elevation via `--bg-secondary`), Hover (elevation/shadow shift or translateY(-2px)), Focus-within (highlight border when child focused), Loading (skeleton shimmer, no layout jump), Empty state (icon + guidance text).
- **Forms/Inputs** (if any): Empty, Focused (outline ring), Filled, Valid, Invalid, Disabled, Read-only. Flex container wrapping label, input, error feedback.
- **Modal** (if any): Opening/Open/Loading/Success/Error/Closing animated via CSS transitions. Centered flex, backdrop overlay, Material Icon close button, Esc/overlay close, focus trapping.

## 5. Accessibility & UX Rules
- Sufficient contrast in both light and dark modes. Never rely solely on color for state. Semantic HTML5. Correct ARIA roles/labels on custom widgets. Logical DOM/focus order. Full keyboard operability. `aria-live` regions for dynamic feedback. Respect `prefers-reduced-motion`. Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`). Mandatory visual feedback on every click/hover/submission. Destructive actions visually distinct in both themes.

## 6. Color Hierarchy (Enforce)
- Deep Iris is ALWAYS the canvas, never an accent.
- Iris Shadow is ALWAYS one level up.
- Iris Glow is for highlighted metric blocks.
- Iris Pulse is ONLY for pressed/active states and filled primary buttons.
- Lilac Mist is ONLY for line-art illustration and decorative SVG — never text or fills.
- Clinical Cyan and Mint Vital are the only two colors allowed to break the violet monochrome — they carry data meaning and must not be used as decorative backgrounds.
- Mint Vital is locked to positive health signals — never errors/warnings.
- Clinical Cyan is never a large solid fill on buttons or hero blocks.

## 7. Do's and Don'ts (Enforce)
- Do: use Deep Iris as page canvas for all dark sections; set all buttons/tags to 9999px radius; apply -0.075em letter-spacing at 92px+ display; reserve Clinical Cyan for data/links/chart strokes; pair Mint Vital with health-positive data; use dotted-outline Word Highlight Box for single most important word per headline (one per page max); hard color cut between dark and light sections at Pearl.
- Don't: never use neutral gray backgrounds; never mix weight 400 or 700; never apply Clinical Cyan as large solid fill; never use Mint Vital for errors; avoid sharp corners (min 7px icons, 16px inputs, 24px cards); never introduce a second typeface; never use white as card background on dark canvas; never use gradient transitions between dark/light sections.

## 8. Output Format
Deliver `index.html`, `style.css`, `script.js`. No inline CSS. All styling via class/ID selectors in `style.css`. HTML clean, semantic, agnostic of visual styling. No unrequested placeholders where real copy is supplied; placeholders only where content genuinely unspecified. Ensure no horizontal overflow, fully responsive, mobile-first.
