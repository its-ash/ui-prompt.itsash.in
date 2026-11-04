# Landing Page Build Prompt — Apple (España) Style System

## 1. Role & Objective
You are an expert front-end engineer. Build a complete, responsive landing page from scratch using the Apple (España) visual style system described below. Invent a fictional brand name, fictional product name, and fictional copy for every section. Never use "Apple", "iPhone", "Mac", "iPad", or any real Apple trademark, logo, or product name anywhere in the markup, copy, or assets. All user-facing copy must be in English.

## 2. File Structure & Naming
- Deliver three separate files: `index.html`, `style.css`, `script.js`.
- No inline `<script>` blocks beyond a single deferred entry-point reference.
- Use one consistent class-naming convention (BEM) across the entire deliverable.
- No unrequested placeholders; use real fictional copy for all supplied labels and sections.

## 3. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. Forbid the `style="..."` attribute in HTML entirely.
- Target all design properties, layout rules, and states via class or ID selectors.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS only.

## 4. CSS Variables & Theme Tokens
Store all visual tokens in `:root` (and theme classes) using CSS variables. Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text, in every theme.

Required tokens:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Apple-style palette mapped onto these tokens: `--color-apple-ink: #1d1d1f`, `--color-fog-canvas: #f5f5f7`, `--color-pure-white: #ffffff`, `--color-graphite: #707070`, `--color-slate: #86868b`, `--color-charcoal: #333336`, `--color-smoke: #474747`, `--color-iron: #5b5b61`, `--color-ash: #e8e8ed`, `--color-electric-blue: #0071e3`, `--color-link-blue: #0066cc`, `--color-iridescent-spectrum: linear-gradient(60deg, rgb(8,148,255) 0%, rgb(201,89,221) 40%, rgb(255,46,84) 67%, rgb(255,144,3) 100%)`.
- Map `--bg-primary` to fog canvas `#f5f5f7`, `--bg-secondary` to pure white `#ffffff`, `--text-primary` to apple ink `#1d1d1f`, `--text-secondary` to graphite `#707070`, `--primary` to electric blue `#0071e3` (button fill only).
- Border radius & shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`. Set `--radius-sm: 18px`, `--radius-md: 28px`, `--radius-lg: 980px`. Shadows must be none/flat (system is intentionally shadow-free).
- Spacing & transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: `--font-base` bound to Google Font (Inter or Inter Tight as SF Pro substitute). `--font-display` for headings, `--font-text` for body.
- Do not default light-mode background to pure white; use fog canvas `#f5f5f7`. Where near-white is needed, use `#fefefe` instead of `#ffffff` for any generic white surfaces (keep `#ffffff` only for card surfaces per spec).

## 5. Mandatory Dark Mode
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background and text CSS variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 6. Flexbox Layout & Mobile-First Alignment
- Build all layout structures with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless an explicitly justified exception.
- All flex layouts must be mobile-responsive out of the box (rows become columns on small viewports). Prevent horizontal scrolling.

## 7. Framework Default & Tailwind Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply`) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 8. Typography & Icons (Google Fonts Mandatory)
- Strictly use Google Fonts for text and icons. Include Google Font `<link>` or `@import` tags (Inter / Inter Tight) and bind to `--font-base`.
- Use Google Material Symbols/Icons for all icons. Forbid raw inline SVGs or local icon files.

## 9. Component Design Specifications

### 9.1 Button Component
Style all states via CSS classes:
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`), minimum touch target 44x44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback states driven by `--text-success` / `--text-error`.

Variants:
- Primary buy button: pill, border-radius 980px, background `#0071e3`, white text at 17px weight 400, padding 8px 16px, no border, no shadow. Only place brand blue appears as fill.
- Ghost button: border 1px `#1d1d1f`, border-radius 980px, transparent background, text `#1d1d1f` at 17px weight 400, padding 10px 20px. Hover fills to `#1d1d1f` with white text.
- Inline text link: 17px weight 400, color `#0066cc`, no underline, optionally paired with small inline arrow/play icon.

### 9.2 Card Component
- Default: flexible flexbox layout, subtle borders and elevation using `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- Focus-within: highlight card borders when a child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and guidance text.

### 9.3 Form & Input
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, and dedicated error feedback container.

### 9.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 10. Core UX & Micro-Interaction Rules
- Responsive by default: fluid sizing and breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5 elements; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.

## 11. Landing Page Sections to Build
Build these sections in order, all using the Apple (España) style system:

1. **Hero**: Full-viewport-height section. Centered product visual (fictional) on fog canvas. Headline block anchored lower-left: product name at 21px SF Pro Display weight 600 `#1d1d1f`; main headline at 56–80px weight 600 `#1d1d1f`, line-height 1.07, letter-spacing tightening at scale; subtext at 17px SF Pro Text weight 400 `#707070`. Price label at 17px `#1d1d1f` with buy button pill to its right (12px gap). Inline "Learn more" link in `#0066cc`.
2. **Features (3 cards)**: 3-column card grid (responsive). Each card: 28px border-radius, white surface, no shadow, image at 28px radius, caption at 17–21px `#1d1d1f`. Hover lifts slightly.
3. **How It Works (3 steps)**: 3-step layout with numbered steps, short heading at 32–56px, body text at 17px `#707070`, generous vertical spacing 80–120px.
4. **Testimonials**: Centered quote text at 20–28px, attribution at 17px `#707070`, no card background, whitespace as divider.
5. **Pricing (3 tiers)**: 3-column pricing cards. Middle tier highlighted with fog/white surface progression. Buy button pill on each. Ghost button for secondary CTA.
6. **FAQ**: Accordion-style Q&A using flexbox, expand/collapse animated via CSS transitions, `aria-expanded` states.
7. **Final CTA**: Centered headline at 56–80px, subtext, primary buy button pill, ghost button secondary.
8. **Footer**: Dark translucent nav bar style (`#1d1d1f` at 0.8 opacity) with secondary links in `#f5f5f7` at 12px, 4-column link grid collapsing to single column on mobile, no borders/dividers (whitespace only).

## 12. Style System Constraints (Do/Don't)
- Use `#0071e3` exclusively for the buy/conversion button — never for links, icons, or decorative elements.
- Set all display headlines at weight 600, line-height 1.07; tighten tracking to -0.005em at 32px, open to 0.012em at 96px.
- Layer surfaces as Fog Canvas `#f5f5f7` → Pure White `#ffffff` → Ash `#e8e8ed` — never introduce new background colors.
- Apply 28px border-radius to all image and card containers; 980px for pills; 999px for chips — no sharp corners anywhere.
- Set body text at 17px weight 400 in `#1d1d1f` or `#707070`; never below 12px for any visible text.
- Use `#0066cc` for inline text links only — no underlines, no background fills, no button shapes.
- Center all product visuals horizontally; headline block lower-left with generous negative space.
- No shadows, gradients, or elevation on any card or button — flat by design.
- No accent colors beyond the iridescent spectrum gradient (decorative imagery only, never UI controls).
- No headlines below 32px.
- No border-radius below 18px on any container.
- Do not apply `#0071e3` to text, borders, or icons.
- No decorative dividers, rules, or section separators — whitespace is the only divider.
- No mixing font families: display font for headings, text font for body.

## 13. Typography Scale (enforce exactly)
- caption: 12px, line-height 1.33, letter-spacing -0.22px
- body-sm: 17px, line-height 1.47, letter-spacing -0.32px
- body: 20px, line-height 1.47, letter-spacing -0.2px
- subheading: 28px, line-height 1.14, letter-spacing -0.25px
- heading-sm: 32px, line-height 1.19, letter-spacing -0.16px
- heading: 56px, line-height 1.07, letter-spacing 0.22px
- heading-lg: 72px, line-height 1.07, letter-spacing 0.5px
- display: 96px, line-height 1.07, letter-spacing 1.15px

## 14. Spacing Scale (base unit 4px)
Use these spacing tokens: 4, 8, 12, 16, 20, 24, 28, 32, 40, 44, 48, 52, 76, 80, 100, 160 (px). Section gap 120px. Card padding 28px. Element gap 10px. Page max-width 1440px. Nav inner max-width 1024px.

## 15. Imagery & Decorative Effects
- Product photography/renders centered, floating on fog canvas, no frame/card/background.
- Iridescent light-ring gradient may appear as decorative atmospheric effect behind product only — never in UI controls.
- No stock photography, no illustration, no abstract graphics.

## 16. Edit Mode (not applicable — this is a from-scratch build)
N/A.

## 17. Deliverable Checklist
- [ ] Three separate files: `index.html`, `style.css`, `script.js`.
- [ ] BEM naming convention throughout.
- [ ] Zero inline CSS.
- [ ] All mandatory tokens defined.
- [ ] Dark mode implemented with persistence.
- [ ] All component states styled.
- [ ] All 8 sections present with fictional copy.
- [ ] No real Apple trademarks used.
- [ ] All user-facing copy in English.
