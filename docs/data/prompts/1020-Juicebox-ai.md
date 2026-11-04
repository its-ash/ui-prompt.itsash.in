# UI/UX Coding Prompt — Juicebox-Style Landing Page

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. Forbid `style="..."` in HTML.
- Target all design properties, layout rules, and states via class/ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:

Colors:
- `--color-royal-plum: #6a2f8d`
- `--color-plum-mist: #eee8fd`
- `--color-lilac-outline: #da9efd`
- `--color-forest-mark: #2f8d6e`
- `--color-obsidian: #1d161d`
- `--color-graphite: #2a2a2a` → use `#2a232a`
- `--color-smoke: #574e57`
- `--color-warm-gray: #786c78`
- `--color-mist-gray: #a89ea8`
- `--color-hairline: #d9d9d9`
- `--color-parchment: #f8f6f8`
- `--color-paper: #ffffff` → use `#fefefe` per light-mode rule
- `--color-carbon: #000000`

Typography:
- `--font-display: 'Inter Tight', sans-serif` (substitute for Roobert)
- `--font-body: 'Inter', sans-serif` (substitute for Haas Grot)
- `--font-mono: 'JetBrains Mono', monospace` (substitute for DM Mono)

Type scale tokens: `--text-caption` (10px), `--text-label-mono` (12px), `--text-body-sm` (14px), `--text-body` (16px), `--text-body-lg` (18px), `--text-heading-sm` (28px), `--text-heading` (40px), `--text-heading-lg` (48px), `--text-display` (64px), `--text-display-lg` (72px).

Spacing: `--spacing-4` (4px) through `--spacing-160` (160px) per scale. Radius: `--radius-sm: 2px` (use 2px everywhere). Shadows: `--shadow-md: inset 0 0 12px 0 rgba(0,0,0,0.5)` (active/pressed only). Transitions: `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: cubic-bezier(0.4,0,0.2,1)`. Z-index: `--z-dropdown`, `--z-modal`, `--z-toast`.

Contrast pairing: light backgrounds pair with dark text; dark backgrounds (Royal Plum) pair with white text. Enforce for every theme.

Light mode background: use `#f8f6f8` (Parchment), not pure white. Where white/near-white is needed, use `#fefefe`.

**1.3 Mandatory Dark Mode**
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background/text variables switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox & Mobile-First**
- Build layouts with Flexbox (`display: flex`).
- Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- Mobile-responsive out of the box: rows convert to columns on small viewports; no horizontal scrolling.

**1.5 Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`).
- Utility classes map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: include Google Font `<link>`/`@import` for Inter Tight, Inter, and JetBrains Mono; bind to `--font-display`, `--font-body`, `--font-mono`.
- Icons: use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons**
- Default: flex layout, `align-items: center; justify-content: center; gap: 0.5rem`, min touch target 44x44px.
- Hover: visual shift (brightness/shadow) + `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)` + inset shadow.
- Loading: disable interactions, prevent double-clicks, render CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles via `--text-success`/`--text-error`.

Variants:
- `.btn-filled-dark`: `#2a232a` bg, white text, 2px radius, 13px/14px padding, body font 16px medium.
- `.btn-ghost`: transparent bg, 1px `#1d161d` border, `#1d161d` text, same footprint.
- `.btn-pill-announcement`: `#eee8fd` bg, `#6a2f8d` text, 2px radius, 6px/12px padding, mono 12-13px, 0.077em tracking, uppercase, trailing arrow icon.

**2.2 Cards**
- Default: flex layout, subtle borders, elevation via surface lightness.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight border when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty State: Google Icon + clear guidance text.

**2.3 Forms & Inputs**
- States: Empty, Focused (outline ring), Filled, Valid, Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, and dedicated error feedback container.

**2.4 Modals/Popups**
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. CORE UX & MICRO-INTERACTIONS

- Responsive by default: fluid sizing, breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes, respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 4. DELIVERABLES

- File structure: separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- Naming convention: one consistent convention (BEM or fixed utility set) across the entire deliverable — never mix.
- No unrequested placeholders: real copy/labels where supplied; placeholders only where content genuinely unspecified.

## 5. CONTENT & BRANDING RULES

- Invent a fictional brand name, product, and copy. Never use the real brand name "Juicebox", its logo, trademarks, or product names (e.g., "PeopleGPT", "Juicebox Agents") in the page.
- Reuse only the visual style: cream Parchment canvas, Royal Plum accent, 2px radii, compact rectangular components, DM Mono labels, Roobert-style display headlines, etc.
- All user-facing copy must be in English.

## 6. PAGE SECTIONS TO BUILD

Build a complete landing page with these sections, in order:

1. **Top Announcement Banner** — Royal Plum bg, white centered text 14px, single line with "→ Watch Announcement" link.
2. **Top Navigation** — white bg, 1px bottom hairline border, ~64px height. Left: fictional wordmark (Obsidian). Center: nav items (FEATURES, PRICING, RESOURCES, CUSTOMERS) in 14px Smoke with dropdown carets. Right: SIGN IN text link, BOOK A DEMO ghost button, TRY FOR FREE filled dark CTA.
3. **Hero** — centered single column on Royal Plum wash: announcement pill chip → 72px display headline (negative tracking -0.04em) → 18px body paragraph → paired CTAs (filled dark + ghost) → search bar (white, 1px hairline border, 2px radius, magnifying-glass icon left, "Mar |" placeholder in Mist Gray, Royal Plum square submit button with white arrow right).
4. **Customer Logo Strip** — Parchment band, monochrome Smoke logos 18-24px height, 48px horizontal spacing, vertically centered, no cards.
5. **Features** — section index tag "[01] FEATURES" in DM Mono 12px Smoke 0.077em tracking, 24px above heading. Heading-lg 48px display font, Obsidian, -1.44px tracking. Then 1px hairline divider. Then 3 feature cards in a row: each with 2px radius, Paper bg, 1px hairline border, 20px padding. Card content: small icon (Material Symbols), heading, body copy, optional link.
6. **How It Works** — section index tag "[02] HOW IT WORKS". Tab bar: three DM Mono uppercase labels (SEARCH, INSIGHTS, ENGAGEMENT) separated by 1px Smoke dividers; active tab has 2px Royal Plum bottom border. Below: two-column feature block — left: Purple Product Frame (Royal Plum bg, 0px radius, noise dot overlay, product screenshot inside); right: 20px subheading chip (Royal Plum on Plum Mist), heading-lg 48px headline, 18px body copy, paired CTAs.
7. **Testimonials** — 2-3 quote cards on Paper bg with hairline borders, 2px radius. Quote text, author name (bold Obsidian), role/company (Smoke).
8. **Pricing** — 3 tiers in a row. Each card: Paper bg, hairline border, 2px radius, 20px padding. Tier name (mono label), price (display size), feature list, CTA button. Middle tier highlighted with Royal Plum border or Plum Mist bg.
9. **FAQ** — accordion-style Q&A. Questions in body font medium, answers in body font regular. Hairline dividers between items. Expand/collapse via CSS (details/summary or JS toggle).
10. **Final CTA** — Royal Plum full-bleed wash, white headline (display size), white body copy, paired CTAs (white filled + ghost on purple).
11. **Footer** — Parchment bg, hairline top border. Columns: brand + tagline, product links, company links, resources, legal. Bottom row: copyright + social icons (Material Symbols).

## 7. STYLE SIGNATURE (ENFORCE)

- Display headlines 40-72px in display font weight 400, letter-spacing -0.03em to -0.04em. Never bold headlines.
- Body copy 14-18px in body font weight 400, line-height 1.43-1.56, tracking -0.01em.
- DM Mono with 0.077em tracking for every eyebrow label, tab label, technical tag.
- 2px border-radius on every interactive element and card.
- Surface stack: Parchment → Paper → Plum Mist → Royal Plum. No drop shadows on cards/sections.
- Single inset shadow reserved for active/pressed button states only.
- Royal Plum used as accent only: hero washes, active states, product frames, search submit button, announcement banner. Never for body text.
- Obsidian `#1d161d` for text (never pure black). Graphite `#2a232a` for filled dark CTAs.
- Hairline `#d9d9d9` for all structural borders.

## 8. OUTPUT

Generate the complete landing page as three files: `index.html`, `style.css`, `script.js`. Use a single consistent naming convention (BEM recommended). Include all sections listed above with fictional brand copy. Ensure full responsiveness, dark mode support, accessibility, and keyboard operability. No inline CSS. No inline SVGs — use Material Symbols for all icons. No real brand references.
