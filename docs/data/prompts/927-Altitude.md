# Coding AI Prompt — Altitude-Themed Landing Page (Fictional Brand)

You are a senior frontend engineer. Build a complete, production-quality landing page using **HTML, CSS, and JavaScript** in separate files (`index.html`, `style.css`, `script.js`). Do not write any code in this response beyond the deliverable files; follow every rule below exactly.

## 1. Brand & Content Rules
- The visual style is inspired by a "midnight financial editorial" aesthetic: near-black canvas, off-white serif headlines (Libre Baskerville), razor-thin Inter secondary type, hairline borders, mountain ridge linework, painterly landscape photography, and a single blue accent.
- **Invent a fictional brand name, product, and copy.** Never use the real brand name "Altitude", its logo, trademarks, or product names. All user-facing copy must be in **English**.
- No lorem-ipsum-only submissions; write realistic, on-brand English copy for every section.

## 2. CSS-First Architecture & Zero Inline CSS
- All styling lives in `style.css`. **No `style="..."` attributes in HTML.**
- Target everything via class/ID selectors. Keep HTML semantic, clean, and styling-agnostic.
- One consistent class-naming convention (BEM) across the entire deliverable.

## 3. CSS Variables & Theme Tokens
Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`). Required tokens:

Colors:
- `--color-carbon-canvas: #181818`
- `--color-obsidian: #111111`
- `--color-graphite-card: #1f1f1f`
- `--color-slate-elevated: #262626`
- `--color-iron-peak: #323232`
- `--color-bone: #eeeeee`
- `--color-ash: #e4e4e4`
- `--color-fog: #a4a19b`
- `--color-smoke: #5e5d59`
- `--color-pewter: #4b4b4b`
- `--color-pure-white: #ffffff`
- `--color-voltage-blue: #2b7fff`
- `--color-mid-navy: #1a365d`

Also map to generic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

Typography:
- `--font-libre-baskerville` (Google Fonts: Libre Baskerville, weights 400, 500)
- `--font-inter` (Google Fonts: Inter, weights 400, 500, 600, 700)
- `--font-fira-code` (Google Fonts: Fira Code, weights 400, 600)
- `--font-base: var(--font-inter)`
- Type scale tokens: `--text-caption`, `--text-body`, `--text-heading-sm`, `--text-heading`, `--text-heading-lg`, `--text-display` per spec.

Spacing & shape tokens:
- `--spacing-4` through `--spacing-224` per spec scale.
- `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 16px`.
- `--shadow-sm`, `--shadow-md`, `--shadow-subtle`, etc. per spec.
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.

Contrast pairing: light bg tokens pair with dark text; dark bg tokens pair with light text. Enforce for every theme.

Light-mode background: do not default to pure white; use `#fefefe` where near-white is needed. (This theme is dark-first; light mode is optional but if defined must follow pairing rules.)

## 4. Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or `.dark` class.
- Seamless variable switching without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Visible toggle control with correct `aria-pressed`/`aria-label`.

## 5. Flexbox & Mobile-First
- Use Flexbox (`display: flex`) for all layouts.
- Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box: rows convert to columns on small viewports; no horizontal scrolling.

## 6. Framework
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless otherwise requested. Utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons
- Google Fonts mandatory for text and icons. Include `<link>`/`@import` for Libre Baskerville, Inter, Fira Code.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 8. Component State Requirements
Enforce for all interactive components:
- **Buttons:** default (flex, min 44x44px touch target), hover (brightness/shadow, cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (spinner/icon, no dimension change, disables interaction), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).
- **Cards:** default (flex, subtle borders, elevation via `--bg-secondary`), hover (shadow/translateY -2px), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance text).
- **Forms/Inputs:** empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.
- **Modals:** opening/open/loading/success-error/closing (CSS transitions), centered flex, backdrop, Google Icon close button, focus trapping, close via Esc/overlay click.

## 9. Core UX & Micro-interactions
- Responsive by default; fluid sizing; no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes; never rely solely on color; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 10. Required Sections (in order)
1. **Hero** — full-viewport `#181818` canvas; centered stack: display headline (Libre Baskerville 72px, `#eeeeee`, ls -0.025em), single-line subhead (Inter 18px, `#a4a19b`), ghost CTA below; continuous 1px `#a4a19b` mountain ridge line full-width near bottom.
2. **Features** — 3 cards (use Workflow Tile style: off-white `#e7e5e4`–`#ffffff` on dark canvas, 8px radius, 24px padding, centered 24px outline icon in `#1a365d`, label Inter 13px weight 500 `#181818`). 5-column grid with 12px gaps (or responsive equivalent).
3. **How It Works** — 3 steps with serif section header (Libre Baskerville 48px weight 400 `#eeeeee`, ls -0.025em) + subhead Inter 16px `#a4a19b`.
4. **Testimonials** — card-based, dark surfaces, hairline borders.
5. **Pricing** — 3 tiers with ghost buttons, badges, data table rows where applicable.
6. **FAQ** — accordion-style, keyboard accessible, `aria-expanded`.
7. **Final CTA** — centered, ghost button.
8. **Footer** — `#111111` background, 64px vertical padding, wordmark, nav links, legal in Inter 13px weight 400 `#a4a19b`, 1px `#1f1f1f` top border. Secondary links included.

## 11. Navigation
- Single 64px-tall top bar: wordmark left, three nav links center (Platform, Security, Blog), Login right. No sticky behavior, no hamburger. Navigation Link style: no bg/border, Inter 14px weight 400 `#eeeeee`; active state 1px `#aeaeae` bottom border.

## 12. Component Styling Details
- **Ghost Button:** transparent bg, 1px solid `#eeeeee` border, `#eeeeee` text Inter 14px weight 500, 4px radius, 16px h / 8px v padding. Hover → `#262626` bg. Filled-inverse (white bg, black text) rare; ghost is default.
- **Input Field:** `#1f1f1f` bg, 1px `#323232` border, 4px radius, 12px padding, Inter 14px weight 400 `#eeeeee`. Placeholder `#5e5d59`. Focus ring 2px `#2b7fff` outer glow.
- **Badge/Status Pill:** `#5e5d59` or `#323232` bg, Inter 11px weight 500 `#eeeeee`, 4px radius, 6px 10px padding, uppercase +0.05em tracking. No colored fill.
- **Data Table Row:** alternating transparent / `#262626`, 1px `#262626` bottom border, Inter 13px weight 400 `#eeeeee`, 16px v padding. Header: Inter 11px weight 500 uppercase +0.05em `#a4a19b`.
- **Terminal Window:** `#1f1f1f` bg, 8px radius, 1px `#262626` border, traffic-light dots top-left (red `#ff5f57`, yellow `#febc20`, green `#28c840`), sidebar 200px Inter 13px `#eeeeee` on `#181818`, main pane Fira Code 14px `#eeeeee` on `#1f1f1f`.
- **Image Card/Hero Visual:** 16px radius, 1px `#262626` border, `#1f1f1f` fallback bg. Mountain landscape photography (painterly, blue-gray, atmospheric). No gradients, no 3D renders.
- **Product Feature Split:** max-width 1200px centered; left 40% (serif heading + body + "Try Me →" text link in Inter 14px weight 500 `#2b7fff`), right 60% (terminal window over mountain landscape), 8px container radius. Section gap 80px above/below.
- **Serif Section Header:** Libre Baskerville 48px weight 400 `#eeeeee`, lh 1.15, ls -0.025em. Subhead Inter 16px weight 400 `#a4a19b`.

## 13. Surfaces & Elevation
- Surface stack: `#111` → `#181` → `#1f` → `#26` → `#32` (ascending luminance).
- Card shadow: `0px 2px 15px 0px rgba(51,51,51,0.05), 0px 1px 2px -1px rgba(51,51,51,0.05)`.
- Button shadow: `0px 0px 0px 1px oklab(0 0 0 / 0.2), 0px 2px 15px 0px rgba(51,51,51,0.05), 0px 1px 2px -1px rgba(51,51,51,0.05)`.
- Modal shadow: `0px 0px 0px 1px oklab(0.999994 0.0000455678 0.0000200868 / 0.1), 0px 8px 24px 0px rgba(0,0,0,0.3), 0px 2px 8px 0px rgba(0,0,0,0.2)`.

## 14. Do's and Don'ts
- Do: Libre Baskerville weight 400 at 36–72px for headlines; never substitute sans-serif.
- Do: maintain surface stack.
- Do: 4px radius buttons/inputs/badges; 8px cards; 16px only large image containers.
- Do: body text Inter 14px weight 400 `#eeeeee`; muted `#a4a19b`; placeholders `#5e5d59`.
- Do: 8px element gaps, 12px card padding; section rhythm 24/32/64/80px.
- Do: mountain ridge line or landscape photography for visual storytelling; no gradient meshes, 3D orbs, neon glows.
- Do: communicate status via weight/border/tracking; reserve `#2b7fff` for inline links and focus ring only.
- Don't: bold (700) headlines.
- Don't: introduce new accent colors (monochromatic + one blue).
- Don't: heavy drop shadows (0.05 opacity whispers).
- Don't: round above 16px; no pill shapes.
- Don't: use `#ffffff` as body text; use `#eeeeee`.
- Don't: pair Inter with another sans-serif for headings.
- Don't: apply gradients to UI surfaces.

## 15. Layout
- Max-width 1200px centered, full-bleed dark canvas.
- Hero: centered single-column stack (display headline → subhead → ghost CTA) with mountain ridge line full-width at bottom.
- Product sections alternate: (1) dark product-visual-right (40% copy left, 60% terminal-over-landscape right); (2) dark copy-right with light off-white workflow card grid on left.
- Section gaps 80px vertical rhythm.
- Navigation: 64px top bar, wordmark left, three nav links center, Login right; no sticky, no hamburger.
- Page flows dark-to-dark with one light-section interruption (workflow grid) for contrast.

## 16. Imagery
- Photography dominant: painterly atmospheric mountain landscapes in muted blue-grays. Full-bleed or large contained images behind product terminal screenshots ("looking through a window at the product").
- Continuous single-line mountain ridge SVG across hero, 1px `#a4a19b`.
- Icons: outline-style, 1.5px stroke, monochrome `#1a365d` or `#a4a19b`, never filled.
- No 3D renders, no abstract gradient art, no stock lifestyle photography.

## 17. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- BEM naming convention throughout.
- No unrequested placeholders where real copy was supplied.

## 18. Edit Mode (not applicable — this is a from-scratch build)
- N/A.

## 19. Output
Produce the three files with complete, runnable code. Include Google Fonts links, Material Symbols, Tailwind via CDN if used, and all CSS variables. Ensure dark mode toggle, localStorage persistence, FAQ accordion, and pricing interactions work. All copy in English. Fictional brand only.
