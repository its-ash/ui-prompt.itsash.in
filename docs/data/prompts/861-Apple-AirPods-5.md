You are an Expert Frontend Engineer. Build a complete, production-quality landing page as a fictional brand inspired by the "Apple — cinema on white" visual style described below. Do NOT use the real brand name, logo, trademarks, or product names anywhere in the page; invent a fictional brand name, product name, and copy. All user-facing copy must be in English. Deliver separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere in the HTML. Use one consistent class-naming convention (BEM) across the entire deliverable.

## 1. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. No `style="..."` attributes. Target everything via class/ID selectors.
- HTML must remain clean, semantic, and agnostic of visual styling so the look can change by editing CSS only.

## 2. CSS Variables & Theme Tokens
Store all visual tokens in `:root` (and theme classes) using CSS variables. Enforce contrast pairing (light bg → dark text, dark bg → light text) for every theme.

Colors (light mode defaults):
- `--color-gallery-white: #fafafc`
- `--color-cloud-gray: #f5f5f7`
- `--color-studio-white: #ffffff` (where near-white is needed, prefer `#fefefe`)
- `--color-graphite: #1d1d1f`
- `--color-slate: #5b5b61`
- `--color-steel: #86868b`
- `--color-divider-gray: #d6d6d6`
- `--color-control-mist: #e2e2e5`
- `--color-apple-blue: #0071e3`
- `--color-link-blue: #0066cc`
- `--color-new-orange: #b64400`

Map these to the standard semantic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

Radius/shadow/spacing/transition tokens: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.

Border radius values: cards 28px, links 10px, buttons 9999px, media cards 20px, media controls 36px, purchase capsules 36px. Shadow: only `--shadow-subtle: rgba(0,0,0,0.11) 0px 0px 1px 0px inset` (no drop shadows on cards). Base spacing unit 4px. Section gap 163px. Card padding 20px. Element gap 4px.

Typography: load Google Fonts (Inter as substitute for SF Pro Display/Text) via `<link>`/`@import`, bind to `--font-base`. Apply the type scale tokens exactly: `--text-nav` (12px/1.33, -0.12px), `--text-badge` (12px/1.33, 600, -0.12px), `--text-body` (17px/1.47, -0.374px), `--text-body-strong` (17px/1.24, 600, -0.374px), `--text-button-label` (17px/1.24, -0.374px), `--text-section-heading` (24px/1.17, 600, 0.216px), `--text-chapter-kicker` (28px/1.14, 600, 0.196px), `--text-product-title` (32px/1.13, 600, 0.128px), `--text-hero-heading` (64px/1.06, 600, -0.576px), `--text-cinematic-heading` (80px/1.05, 600, -1.2px). OpenType features `"numr"` where applicable.

## 3. Mandatory Dark Mode
Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Background/text variables must switch seamlessly without HTML restructuring. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label`. Maintain contrast pairing in dark mode.

## 4. Flexbox Layout & Mobile-First
Use Flexbox for all layouts. Every flex container must default to `align-items: center` unless explicitly justified. Mobile-responsive out of the box (rows → columns on small viewports). Prevent horizontal scrolling.

## 5. Framework
Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). Utility classes must map back to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).

## 6. Icons
Use Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 7. Component States to Implement
Buttons: default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), hover (brightness/shadow, cursor pointer), focus (distinct focus ring via CSS vars), active (transform scale 0.97), loading (disabled interactions, CSS spinner/animated icon, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (driven by --text-success/--text-error).

Cards: default (flex, subtle borders, elevation via vars), hover (translateY(-2px) or shadow shift), focus-within (border highlight), loading skeleton (shimmer), empty state (Google Icon + guidance text).

Forms/inputs: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Structure: flex container wrapping label, input, error feedback container.

Modals: opening, open, loading, success/error, closing (CSS transitions). Centered flex (align-items center), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 8. Core UX & Micro-Interactions
Responsive by default. Smooth transitions (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`. Accessibility: sufficient contrast both modes, never color-only state, semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` regions for dynamic feedback. Mandatory visual feedback on every interaction. Destructive actions visually distinct in both themes.

## 9. Landing Page Sections
Build these sections in order, inventing fictional brand/product copy:
1. **Hero** — full-bleed cinematic media panel with left-aligned white copy: 32px/36px product label, 64px/68px headline at -0.58px tracking, lower-edge 36px-radius translucent price-and-buy capsule with Apple Blue #0071e3 purchase pill. Floating 36px media pause control and 36px-radius segmented progress capsule over the media.
2. **Features** — 3 editorial feature cards (Cloud Gray #f5f5f7, 28px radius, 20px padding, Graphite heading, Steel supporting copy, Link Blue text link). No shadows.
3. **How It Works** — 3 steps with numbered Google Icons, headings, and concise copy.
4. **Testimonials** — 3 testimonial cards with quote, name, role.
5. **Pricing** — 3 tiers with feature lists and CTA buttons (one highlighted "recommended" tier).
6. **FAQ** — accordion with keyboard support, aria-expanded.
7. **Final CTA** — centered headline + button.
8. **Footer** — secondary links, divider (1px Divider Gray), 12px/17px Steel metadata.

Global navigation: 44px bar with 12px SF Pro Text labels (rgba(255,255,255,0.8) on dark film, Graphite on light). Local product navigation: 52px bar with 32px product title and compact Apple Blue Buy pill. Section gaps 163px between major chapters.

Do's: Studio White/Cloud Gray canvas; SF Pro Display 600 headlines at 64px/68px (-0.58px) and 80px/84px (-1.2px); Apple Blue only for filled purchase pills (980px/9999px radius); Link Blue for text links only; 20px media radius, 28px card radius; 163px section gaps; shadowless cards; only inset edge where needed.

Don'ts: no 700-900 weight headlines; no square/4px purchase controls; no Link Blue filled buttons; no opaque hero copy cards; no drop shadows on Cloud Gray cards; no New Orange for warnings/errors/large fields (new-product annotations only); no section gaps below 163px.

Imagery: cinematic performance-led visuals; full-bleed footage with saturated light fields; contained 20px-radius panels with sparse white copy and translucent controls. Use placeholder images (https://picsum.photos) sized appropriately.

Output only the finished prompt. No preamble, no closing commentary. Mirror the numbered-header structure above. If the user's request conflicts with a mandatory rule, keep the mandatory rule and add a one-line explicit exception clause. All copy in English. Translate any non-English guidance to English. Keep CSS variable names, class names, file names in English/ASCII.
