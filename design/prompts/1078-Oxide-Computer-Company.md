You are an expert front-end engineer. Build a complete, production-quality landing page using the design system specified below. Follow every rule strictly.

## 1. Project Setup & Architecture
- Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere in the HTML.
- Use Tailwind CSS via CDN with custom CSS driven by `@layer` / `@apply` directives where needed. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- Use semantic HTML5 elements, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability.
- Include Google Fonts: SuisseIntl substitute `Inter` for human-facing text and `JetBrains Mono` for technical labels. Bind them to `--font-suisseintl` and `--font-gt-america-mono` respectively. Use Google Material Symbols for any icons. Forbid raw inline SVGs or local icon files.
- All copy must be invented for a fictional brand — never use the real brand name "Oxide", its logo, trademarks, or product names. Invent a fictional infrastructure company name, product name, and all marketing copy in English.

## 2. CSS Variables & Theme Tokens
Define all tokens inside `:root` and under `@media (prefers-color-scheme: dark)` plus a `.dark` class selector for manual toggling. Dark mode is mandatory and must be the default presentation (this theme is dark-only in spirit, but the toggle and persistence must still exist).

Colors:
- `--color-void-black: #0b0e12`
- `--color-carbon: #181a1d`
- `--color-graphite: #1f2124`
- `--color-slate-base: #303235`
- `--color-fog: #5d5e61`
- `--color-steel: #818284`
- `--color-ash: #a3a4a5`
- `--color-silver: #bababb`
- `--color-bone: #dedede`
- `--color-phosphor-green: #00d892`
- `--color-deep-teal: #002923`
- `--color-emerald-depth: #005441`
- `--color-diagnostic-magenta: #9f3f53`
- `--color-syntax-violet: #c58aff`
- `--color-syntax-coral: #ff6285`
- `--color-syntax-forest: #006d4a`

Map to generic tokens: `--primary` → `--color-deep-teal`, `--secondary` → `--color-graphite`, `--bg-primary` → `--color-void-black`, `--bg-secondary` → `--color-carbon`, `--text-primary` → `--color-bone`, `--text-secondary` → `--color-silver`, `--text-muted` → `--color-steel`, `--border-default` → `--color-slate-base`, `--text-success` → `--color-phosphor-green`, `--text-error` → `--color-diagnostic-magenta`.

Contrast pairing: every light background token pairs with a dark text token and vice versa. Since this is a dark theme, `--bg-primary` (#0b0e12) pairs with `--text-primary` (#dedede); `--bg-secondary` (#181a1d) pairs with `--text-secondary` (#bababb).

Radius & shadows:
- `--radius-sm: 1px`, `--radius-md: 1px`, `--radius-lg: 1px` (sharp edges are signature — never above 1px on structural elements)
- `--shadow-subtle: inset 0 0 0 1px oklab(0.77 -0.184 0.054 / 0.15)`
- `--shadow-subtle-2: inset 0 0 0 1px oklab(0.79 -0.0002 -0.001 / 0.15)`

Spacing & transitions:
- `--spacing-4: 4px` through `--spacing-128: 128px` (full scale from spec)
- `--spacing-gap: 12px`, `--transition-fast: 150ms`, `--transition-normal: 250ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

Elevation/stacking: `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`.

Typography tokens:
- `--font-suisseintl: 'Inter', system-ui, sans-serif`
- `--font-gt-america-mono: 'JetBrains Mono', monospace`
- Type scale tokens: `--text-caption: 10px`, `--text-body: 14px`, `--text-subheading: 20px`, `--text-heading-sm: 25px`, `--text-heading: 36px`, `--text-display: 65px` with corresponding line-heights and letter-spacing.

Theme switching: persist user choice via `localStorage`, fall back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed` / `aria-label` state.

## 3. Layout & Flexbox Standards
- Mobile-first, responsive, no horizontal scrolling. Page max-width 1200px centered. Section gap 80px. Card padding 20px. Element gap 12px.
- Every flex container must default to `align-items: center` unless explicitly justified.
- Use Flexbox for all layout structures. Convert rows to columns on small viewports.
- Respect `prefers-reduced-motion`.

## 4. Typography Rules
- SuisseIntl (Inter substitute) for all human-facing text: headlines, body, nav, footer. Weight 400 only. Display sizes (50–65px) use negative tracking (-0.005em to -0.003em). Small sizes (11–12px) use positive tracking (0.044–0.053em).
- GT America Mono (JetBrains Mono substitute) for all technical labels: tabs, badges, button labels, nav annotations, code, metadata, status lines, figure captions. Wide positive tracking (0.014–0.064em). Never use for paragraphs longer than ~6 words. Never use SuisseIntl for technical labels under 14px.
- OpenType features: `"calt" 0, "ss02", "ss03", "ss06", "ss07", "ss08", "ss09"` on both.
- No bold (600+) or semibold anywhere. Weight 400 across both typefaces. Hierarchy comes from size and tracking.

## 5. Component Specifications

### Buttons
- Filled Primary: background `--color-deep-teal`, text `--color-phosphor-green` in GT America Mono 12px, tracking 0.053em, padding 6px 12px, border 1px solid `--color-deep-teal`, radius 1px. Reads as a status indicator that happens to be clickable.
- Outlined Ghost: transparent bg, 1px border in `--color-silver` or `--color-ash`, text matching, GT America Mono 12px tracking 0.053em, padding 6px 12px, radius 1px. Hover: border and text shift to `--color-bone`.
- Text Link: no bg, no border, text `--color-ash` in SuisseIntl 14px, no underline. Hover: text shifts to `--color-bone`.
- All buttons: flex layout `align-items: center; justify-content: center; gap: 0.5rem`, min touch target 44x44px, hover brightness/shadow shift with `cursor: pointer`, distinct focus ring via CSS variables, active `transform: scale(0.97)`, loading state disables interactions and renders CSS spinner without distorting dimensions, disabled `opacity: 0.5` greyscale `cursor: not-allowed`, success/error temporary states driven by `--text-success` / `--text-error`.

### Cards
- Background `--color-carbon`, 1px border `--color-slate-base`, radius 1px, padding 20px, no shadow (elevation via surface stepping only).
- Hover: subtle transform `translateY(-2px)` or shadow shift.
- Focus-within: highlight border.
- Loading skeleton: shimmer animation in CSS.
- Empty state: Google Icon + guidance text.

### Status Badge
- Background `--color-carbon`, inset 1px stroke in `--color-phosphor-green` at 15% opacity, text `--color-phosphor-green` in GT America Mono 10–11px tracking 0.064em uppercase, padding 1–2px vertical / 6–12px horizontal, radius 1px. Looks like an LED housing.

### Navigation Link
- GT America Mono 12px weight 400 tracking 0.053em uppercase, color `--color-silver` at rest, `--color-bone` on hover. Chevron indicators in matching color. No bg, no border, no underline. 20–24px horizontal spacing.

### Terminal Mockup Panel
- Background `--color-carbon`, 1px border `--color-slate-base`, radius 1px. Internal tab bar with monospace labels (CLI, API, CONSOLE) in GT America Mono 12px tracking 0.053em. Active tab: `--color-phosphor-green` text with 1px green underline. Body: monospace code lines in GT America Mono 13px with syntax coloring (green prompts, violet keys, coral values, green-300 comments). No shadow.

### CLI Prompt Card
- Background `--color-carbon`, 1px border `--color-slate-base`, radius 1px. Two-line: top line 'Rack 6' label in `--color-silver` 12px SuisseIntl with 'INITIALIZED' in `--color-phosphor-green` GT America Mono at right. Bottom: full-width green button bar `--color-deep-teal` with 'SIGN IN WITH SSO' in `--color-phosphor-green` GT America Mono 12px.

### Comparison Grid Diagram
- Two equal panels separated by 1px `--color-slate-base` vertical divider. Dashed 1px `--color-slate-base` borders forming floorplan grid. Accent lines in `--color-phosphor-green` and `--color-diagnostic-magenta` tracing paths. Magenta path terminates in 'STATUS ERROR 0x42B-0W' label in GT America Mono 11px tracking 0.58px color `--color-diagnostic-magenta`. Below: bullet list in SuisseIntl 14px color `--color-silver`.

### Forms & Inputs
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

### Modal / Popup
- States: opening, open, loading, success/error, closing (all animated via CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 6. Accessibility
- Sufficient contrast in both light and dark modes. Never rely solely on color to communicate state.
- Semantic HTML5, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability.
- `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- Mandatory visual feedback on every click, hover, submission.

## 7. Destructive Actions
- `.btn-danger` visually distinct in both themes. Note: diagnostic magenta is a terminal-readout color, not an error UI color — use `--color-diagnostic-magenta` only in CLI mockups/diagrams; for destructive buttons use a distinct red treatment that is clearly a UI affordance.

## 8. Color Rationing
- `--color-phosphor-green` rationed to: (1) active/initialized/selected state, (2) logo mark, (3) text on filled teal buttons. Never as background fill, never as border on non-status element, never as decorative accent in body copy.
- `--color-deep-teal` is the only chromatic fill surface — one or two primary actions per page maximum.
- `--color-diagnostic-magenta` only in CLI mockups, diagram annotations, code contexts.

## 9. Page Sections to Build
1. **Hero**: asymmetric layout — terminal mockup top-left (5/12), product render right (7/12), headline lower-left. Headline in SuisseIntl 50–65px weight 400 color `--color-bone` tracking -0.005em to -0.003em. Subtitle in SuisseIntl 18px color `--color-steel`. Status badge 'INITIALIZED' or similar. Filled primary CTA + outlined ghost CTA. Product render: full-bleed, no border, no radius, with green LED accents.
2. **Features**: 3 cards in a row (responsive to column on mobile). Each card: title in SuisseIntl, description in SuisseIntl 14px, technical label in GT America Mono. Icon via Google Material Symbols.
3. **How It Works**: 3 steps. Numbered in GT America Mono, title in SuisseIntl, description in SuisseIntl 14px. Connected by 1px hairline or dashed line.
4. **Testimonials**: 2–3 quote cards. Quote in SuisseIntl, attribution in GT America Mono 11px. Background `--color-carbon`.
5. **Pricing**: 3 tiers. Each: tier name in GT America Mono uppercase, price in SuisseIntl 36px, feature list in SuisseIntl 14px, CTA button. Middle tier highlighted with `--color-deep-teal` border or surface step.
6. **FAQ**: accordion. Question in SuisseIntl 14px, answer in SuisseIntl 14px color `--color-silver`. Toggle via Google Material Symbols icon. Animated expand/collapse via CSS transitions.
7. **Final CTA**: centered-ish (left-aligned per Oxide rules) band with headline in SuisseIntl 36px and a filled primary button.
8. **Footer**: `--color-carbon` background. Logo mark left, link columns (SuisseIntl 14px, headers in `--color-steel`, links in `--color-ash`), 12px row gap, no separators. Customer logo strip above or within footer: grayscale logos in `--color-fog`, 48px gaps, label 'POWERING THE BEST TEAMS' in GT America Mono 10px tracking 0.064em uppercase color `--color-steel`.

## 10. Imagery & Decorative Rules
- No decorative illustrations, no abstract gradients as graphic elements (radial gradient vignette behind hero only, subtle).
- Hardware/product photography presented raw: no border, no radius, no blur, no gradient overlay.
- Comparison section uses dashed-grid technical diagrams, not photography.
- Minimal icon set: monoline chevrons and arrows via Google Material Symbols only.

## 11. Deliverable
- Output `index.html`, `style.css`, `script.js` as separate files.
- No lorem-ipsum-only submissions where real copy is expected; all marketing copy must be invented, coherent, and in English.
- No unrequested placeholders.

## 12. Do's and Don'ts (enforce)
Do: use `#002923` as the only filled button bg paired with `#00d892` text in GT America Mono 12px; set border-radius to 1px on all structural elements; use GT America Mono 10–12px tracking 0.053–0.064em for every technical label; step surfaces by color (Void → Carbon → Graphite) with 1px Slate borders, never drop shadows; set headlines in SuisseIntl 50–65px weight 400 with negative tracking; reserve Phosphor Green for active states, logo, status indicators.

Don't: border-radius above 1px on buttons/badges/cards/nav; drop shadows for elevation; bold (600+) or semibold; Phosphor Green as background fill/page section/large decorative area; diagnostic magenta for user-facing alerts/form errors/destructive buttons; center body text or stack headlines in centered compositions (left-aligned with generous left margin); rounded photographic treatments, blur, or gradient overlays on product renders.

Build the complete landing page now. Ensure all CSS lives in `style.css`, all JS in `script.js`, and `index.html` contains only semantic markup with class/ID selectors — zero inline styles. Implement dark mode toggle with localStorage persistence and `prefers-color-scheme` fallback. Include the theme toggle control with proper ARIA state. Make every interactive element keyboard-accessible with visible focus rings. Respect `prefers-reduced-motion` on all animations. Output only the three files.
