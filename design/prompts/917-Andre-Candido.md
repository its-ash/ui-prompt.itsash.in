# Generated Coding-AI Prompt — Landing Page (André Cândido Editorial Style)

## 1. Project Overview & Brand Fiction
Build a complete, responsive landing page in a single-page editorial portfolio aesthetic inspired by André Cândido's style reference. **Invent a fictional brand name, product, and all user-facing copy.** Never use the real brand name "André Cândido", its logo, trademarks, or product names anywhere in the page. All copy must be original and written in English. Deliverables: separate `index.html`, `style.css`, and `script.js` files, with a single deferred `<script src="script.js" defer>` entry point in `index.html`.

## 2. CSS-First Architecture & Zero Inline CSS
- All styling lives strictly in `style.css`. Forbid `style="..."` attributes entirely.
- Target elements exclusively via class/ID selectors. Keep HTML semantic, clean, and styling-agnostic so the look can change by editing CSS only.
- Enforce one consistent class-naming convention (BEM recommended) across the entire deliverable; never mix conventions.

## 3. CSS Variables & Theme Tokens (`:root`)
Define all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:

**Colors**
- `--color-ink-black: #111118` (primary text, dark footer surface, filled button background)
- `--color-paper-white: #fefefe` (page canvas, card surfaces, inverted button text — use `#fefefe` not `#ffffff` where a near-white is needed)
- `--color-soft-ash: #dddddd` (muted borders, image placeholder backgrounds, secondary dividers)
- `--color-stone-gray: #bdbdbd` (list dividers, body-level borders, tertiary structural lines)
- `--color-slate: #7c7c7c` (helper text, de-emphasized body copy, subtle metadata)
- `--color-graphite: #333333` (link text and link borders in body context)
- `--color-true-black: #000000` (hard border accent in lists/structural dividers where maximum contrast is needed)
- `--color-night-forest: #283338` (navigation-specific borders and text)
- `--color-highlighter-yellow: #fef199` (yellow wash for highlight backgrounds and the dark footer accent only)

**Theme variables (mandatory pairing)**
- `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`
- Light background tokens must pair with dark text tokens and vice versa for every theme.

**Shape & elevation**
- `--radius-sm: 8px`, `--radius-md: 24px`, `--radius-lg: 800px`, plus `--radius-nav: 80px`, `--radius-badge: 50px`, `--radius-heading: 150px`
- `--shadow-sm`, `--shadow-md` (note: this theme uses no shadows by default; keep tokens defined but unused or minimal)

**Spacing & transitions**
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`

**Typography**
- `--font-base` bound to PP Mori substitute (Inter, Manrope, or DM Sans) via Google Fonts `<link>`/`@import`
- `--font-display` bound to Editorial New substitute (Playfair Display, DM Serif Display, or Libre Caslon Display) via Google Fonts
- `--text-caption`, `--text-body-sm`, `--text-body`, `--text-subheading`, `--text-heading-sm`, `--text-heading`, `--text-heading-lg`, `--text-display` per the type scale (12px/1.4/1.28px, 14px/1.4/1.5px, 16px/1.4/0, 18px/1.4, 24px/1.2, 48px/1.1, 72px/1.1, 160px/1.0)

## 4. Mandatory Dark Mode Support
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background/text variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Flexbox Layout & Mobile-First Alignment
- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless an explicitly justified exception exists.
- Mobile-responsive out of the box: convert rows to columns on small viewports; prevent horizontal scrolling.

## 6. Framework Default
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons (Google Fonts Mandatory)
- Include Google Font `<link>`/`@import` for both text families (Inter/Manrope/DM Sans for body; Playfair Display/DM Serif Display/Libre Caslon Display for display) and bind to `--font-base`/`--font-display`.
- Use Google Material Symbols/Icons for all icons. Forbid raw inline SVGs or local icon files.

## 8. Component Design Specifications

### Buttons
- **Filled Pill (Primary):** `#111118` fill, `#fefefe` text, PP Mori 14-15px weight 600, letter-spacing 0.107em, uppercase tracking, 24px radius, 16px×10px padding, 1px `#111118` border. Min touch target 44×44px.
- **Ghost Pill (Secondary):** transparent fill, 1px `#111118` border, `#111118` text, 24px radius, 16px×10px padding.
- **Capsule Link:** 8px radius, 1px border in `#333333` or `#111118`, PP Mori 14-15px weight 400.
- States: default, hover (brightness/shadow + cursor pointer), focus (distinct focus ring via CSS variables), active/pressed (`transform: scale(0.97)`), loading (disabled interactions, CSS spinner/animated Google Icon without dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).

### Cards
- **Work Card:** 8px radius, capsule-shaped (800px radius) image, project name overlaid in PP Mori 600, image bleeds to capsule shape regardless of source aspect ratio, no shadow. States: default, hover (elevation/shadow shift or `transform: translateY(-2px)`), focus-within (highlighted border when child link/button focused), loading (shimmer skeleton), empty (Google Icon + guidance text).
- **About Card (Sidebar):** portrait image, uppercase PP Mori 12-14px label "YOUR NEW PARTNER" with down-arrow icon, intro paragraph PP Mori 16px, embedded ghost button.
- **Project Detail Image Card:** 800px radius capsule/lozenge, no padding/border/shadow.

### Forms & Inputs
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

### Modal / Popup
- States: opening, open, loading, success/error, closing (all animated via CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 9. Core UX & Micro-Interaction Rules
- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both light and dark themes.

## 10. Page Sections to Build
Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

- **Hero:** Editorial New weight 200 at 70-160px display headline (full width, no max-width), PP Mori body subheadline, filled pill primary CTA + ghost pill secondary CTA. Circular text badge ("AVAILABLE NOW" style) as a single floating decorative element.
- **Features:** 3 work cards in an asymmetric editorial grid, capsule images, project names overlaid.
- **How It Works:** 3 numbered steps with PP Mori headings and body copy.
- **Testimonials:** client quotes with monochrome attribution.
- **Pricing:** 3 tiers with feature lists, one highlighted tier.
- **FAQ:** accordion-style Q&A with keyboard accessibility.
- **Final CTA:** dark `#111118` panel with massive pill button (outlined in `#fef199`, 150px radius, Editorial New or PP Mori text 48-72px, arrow icon in separate circular capsule 50px radius touching the main pill).
- **Footer:** dark `#111118` panel, yellow accent reappearance, secondary links, monochrome logo row.

## 11. Style Constraints (André Cândido)
- Use Editorial New weight 200 exclusively for display headlines at 48px or larger — never below 48px, never above weight 200.
- Keep the page 97% achromatic: Ink Black, Paper White, and grayscale neutrals handle 95% of visual load.
- Apply 0.107em letter-spacing to all PP Mori text at 12-15px.
- Use 24px radius for buttons, 8px for cards, 800px for images — preserve the dramatic radius scale.
- Reserve `#fef199` yellow for the dark footer panel only — the single chromatic event on the page.
- Maintain generous section gaps of 80-120px between major blocks.
- Let display headlines run full-width without max-width constraints.
- Navigation: sticky top bar, white background, 1px bottom border, logo block left, centered nav links (Work, Services, About) in PP Mori 15-16px, capsule CTA right, 80px radius on nav container edges in some breakpoints.
- Service/client logo row: horizontal monochrome logos, evenly spaced 24-40px gaps, grayscale filters, no borders.
- No shadows anywhere (this theme is shadow-free).

## 12. Deliverable & Output Format
- File structure: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond the single deferred entry-point reference.
- Naming convention: BEM (or one fixed utility set) consistently; never mix.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content is genuinely unspecified.
- All user-facing copy in English.

## 13. Edit Mode (not applicable — from-scratch build)
This is a from-scratch build; ignore edit-mode constraints.

## 14. Exception Clause
If any requested feature conflicts with a mandatory rule above, keep the mandatory rule and add a one-line explicit exception clause in the generated code comments rather than silently dropping the rule. (No conflicts expected for this build.)
