# Coding AI Prompt — Langbase-Themed Landing Page

## 1. Role & Objective
You are a senior front-end engineer. Build a complete, production-quality landing page in a **single-file-per-concern structure** (`index.html`, `style.css`, `script.js`) using the **Langbase visual style** (midnight aurora console). Invent a fictional brand name, product, and all copy — never use "Langbase", its logo, trademarks, or product names anywhere in the page.

## 2. Strict Architecture Rules
1. **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. Forbid `style="..."` in HTML. Use class/ID selectors only. HTML must remain semantic and style-agnostic.
2. **CSS Variables:** Define all tokens under `:root` and `.dark` / `@media (prefers-color-scheme: dark)`. Required tokens:
   - Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--bg-recess`, `--text-primary`, `--text-secondary`, `--text-muted`, `--text-ash`, `--border-default`, `--border-wire`, `--border-error`, `--border-success`, `--color-aurora`.
   - Radius: `--radius-sm` (4px), `--radius-md` (12px), `--radius-pill` (9999px).
   - Shadows: `--shadow-subtle` (only on primary CTA).
   - Spacing: `--spacing-4`, `--spacing-8`, `--spacing-12`, `--spacing-16`, `--spacing-24`, `--spacing-32`, `--spacing-40`, `--spacing-48`, `--spacing-80`.
   - Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
   - Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
   - Typography: `--font-base` (GeistSans), `--font-mono` (GeistMono).
3. **Contrast Pairing:** Every light background token pairs with a dark text token and vice versa, in both light and dark themes. (This theme is dark-first; light theme is optional but dark mode must be mandatory and complete.)
4. **Light Mode Background:** Where a near-white is needed, use `#fefefe`, never `#ffffff`.
5. **Dark Mode Mandatory:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class. Theme choice persists via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
6. **Flexbox & Mobile-First:** All layouts use `display: flex` with `align-items: center` by default. Convert rows to columns on small viewports. No horizontal scrolling.
7. **Tailwind CSS:** Use Tailwind (or `@layer`/`@apply` driven custom CSS) mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).
8. **Google Fonts & Icons:** Load GeistSans (substitute Inter if unavailable) and GeistMono (substitute JetBrains Mono) via Google Fonts `<link>`. Use Google Material Symbols for all icons. No inline SVGs or local icon files.

## 3. Design Tokens (Langbase)
- Canvas: `#232324` (never pure black as page bg).
- Nav band: `#0e0e10`.
- Recessed surfaces: `#181818`.
- Primary text: `#fafafa`; secondary: `#ebeced`; muted: `#a1a1aa`; ash: `#696970`; smoke: `#454546`.
- Borders: `#5c5c61` (wire), `#232324` (hairline).
- Aurora gradient: `linear-gradient(to right, #f6d1ac, #f3b5d2, #c7b8f5, #a7eadc, #afcdf6)` — decoration only, never button fill/text/border.
- Typography: GeistSans 400/500/600/700, sizes 12/14/16/18/20/48, tracking -0.025em. GeistMono 400/500, sizes 12/13/16/60/72, tracking -0.3em at 60-72px. OpenType `"ss01" on, "cv11" on`.
- Radius: tags/icons/inputs 4px, cards 12px, buttons 9999px, large buttons 100px.
- Shadow: only primary CTA — `rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.1) 0px 1px 2px -1px`.
- Spacing base 4px. Page max-width 1200px. Section gap 64-80px. Card padding 24px. Element gap 12px.

## 4. Component Specifications
Enforce all states via CSS classes:

**Buttons**
- Default: flex, `align-items: center`, `justify-content: center`, gap 0.5rem, min 44x44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled, spinner (CSS or animated Material Icon), no dimension change.
- Disabled: opacity 0.5, greyscale, `cursor: not-allowed`.
- Success/Error: temporary styles via `--text-success`/`--text-error`.
- Primary pill: `#fafafa` bg, `#000000` text, 9999px radius, padding 8px 16px or 10px 20px, GeistSans 14px 500, subtle shadow. No color change on hover.
- Ghost: transparent bg, 1px `#5c5c61` border, `#fafafa` text, 9999px radius, same padding.

**Cards**
- Default: flex, `#232324` bg, 1px `#5c5c61` border, 12px radius, 24px padding, no shadow.
- Hover: `transform: translateY(-2px)` or shadow shift.
- Focus-within: border highlight.
- Loading skeleton: shimmer animation.
- Empty state: Material Icon + guidance text.

**Forms/Inputs**
- States: empty, focused (outline ring), filled, valid, invalid (error border + icon + red text), disabled, readonly.
- Structure: flex container with label, input, error feedback.
- Input: `#181818` bg, 1px `#5c5c61` border, 4px radius, 12px 16px padding, GeistMono 13px (code) / GeistSans 14px (text), placeholder `#a1a1aa`, focus = 1px `#fafafa` border, no glow.

**Modal/Popup**
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex, backdrop overlay, Material Icon close button, focus trapping, Esc/overlay close.

## 5. Page Sections (in order)
1. **Announcement Strip** — full-width band, 1px `#232324` border all sides, centered GeistSans 12px `#a1a1aa`, small 4px-radius 16px icon, 8px vertical padding.
2. **Sticky Nav** — `#0e0e10` bg, 1px `#232324` bottom border, ~56px height, flex: logo left, links center (GeistSans 14px 500 `#a1a1aa`), primary pill CTA right. Theme toggle included.
3. **Hero** — two-column split: left = headline + dual CTAs; right = fragmented aurora bars (8px height, varying widths, aurora gradient). Overlaid on visible coordinate grid (1px `#232324` lines). Headline: GeistSans 48px 500 `#fafafa`, -1.2px tracking, 56px line-height, max 2 lines (or GeistMono 60px terminal feel).
4. **Logo Trust Strip** — "Trusted by developers at 5000+ companies" caption (GeistSans 12px `#a1a1aa`), then 6+5 grid of monochrome wordmarks (`#fafafa` or `#a1a1aa`), 24px gap, 32px row gap.
5. **Features** — 3 cards (Dark Card Surface style), each with icon, title, description.
6. **How It Works** — 3 steps with numbers/icons, descriptions.
7. **Testimonials** — 3 testimonial cards.
8. **Pricing** — 3 tiers with feature lists and CTAs.
9. **FAQ** — accordion-style Q&A.
10. **Final CTA** — centered headline + primary pill button.
11. **Footer** — secondary links, copyright, theme toggle.

## 6. Core UX Rules
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never color-only state communication, semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No chromatic colors for buttons/links/icons except aurora decoration.

## 7. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM) throughout — never mix.
- No lorem-ipsum-only submissions where real copy is expected; placeholders only where content genuinely unspecified.
- All copy in English (fictional brand).

## 8. Output
Return only the three files' contents in clearly labeled code blocks. No preamble, no closing commentary. Ensure the page is complete and functional.# Coding AI Prompt — Langbase-Themed Landing Page

## 1. Role & Objective
You are a senior front-end engineer. Build a complete, production-quality landing page in a single-file-per-concern structure (`index.html`, `style.css`, `script.js`) using the **Langbase visual style** (midnight aurora console). Invent a fictional brand name, product, and all copy — never use "Langbase", its logo, trademarks, or product names anywhere in the page.

## 2. Strict Architecture Rules
1. **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. Forbid `style="..."` in HTML. Use class/ID selectors only. HTML must remain semantic and style-agnostic.
2. **CSS Variables:** Define all tokens under `:root` and `.dark` / `@media (prefers-color-scheme: dark)`. Required tokens:
   - Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--bg-recess`, `--text-primary`, `--text-secondary`, `--text-muted`, `--text-ash`, `--border-default`, `--border-wire`, `--border-error`, `--border-success`, `--color-aurora`.
   - Radius: `--radius-sm` (4px), `--radius-md` (12px), `--radius-pill` (9999px).
   - Shadows: `--shadow-subtle` (only on primary CTA).
   - Spacing: `--spacing-4`, `--spacing-8`, `--spacing-12`, `--spacing-16`, `--spacing-24`, `--spacing-32`, `--spacing-40`, `--spacing-48`, `--spacing-80`.
   - Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
   - Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
   - Typography: `--font-base` (GeistSans), `--font-mono` (GeistMono).
3. **Contrast Pairing:** Every light background token pairs with a dark text token and vice versa, in both light and dark themes. (This theme is dark-first; light theme is optional but dark mode must be mandatory and complete.)
4. **Light Mode Background:** Where a near-white is needed, use `#fefefe`, never `#ffffff`.
5. **Dark Mode Mandatory:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class. Theme choice persists via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
6. **Flexbox & Mobile-First:** All layouts use `display: flex` with `align-items: center` by default. Convert rows to columns on small viewports. No horizontal scrolling.
7. **Tailwind CSS:** Use Tailwind (or `@layer`/`@apply` driven custom CSS) mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).
8. **Google Fonts & Icons:** Load GeistSans (substitute Inter if unavailable) and GeistMono (substitute JetBrains Mono) via Google Fonts `<link>`. Use Google Material Symbols for all icons. No inline SVGs or local icon files.

## 3. Design Tokens (Langbase)
- Canvas: `#232324` (never pure black as page bg).
- Nav band: `#0e0e10`.
- Recessed surfaces: `#181818`.
- Primary text: `#fafafa`; secondary: `#ebeced`; muted: `#a1a1aa`; ash: `#696970`; smoke: `#454546`.
- Borders: `#5c5c61` (wire), `#232324` (hairline).
- Aurora gradient: `linear-gradient(to right, #f6d1ac, #f3b5d2, #c7b8f5, #a7eadc, #afcdf6)` — decoration only, never button fill/text/border.
- Typography: GeistSans 400/500/600/700, sizes 12/14/16/18/20/48, tracking -0.025em. GeistMono 400/500, sizes 12/13/16/60/72, tracking -0.3em at 60-72px. OpenType `"ss01" on, "cv11" on`.
- Radius: tags/icons/inputs 4px, cards 12px, buttons 9999px, large buttons 100px.
- Shadow: only primary CTA — `rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.1) 0px 1px 2px -1px`.
- Spacing base 4px. Page max-width 1200px. Section gap 64-80px. Card padding 24px. Element gap 12px.

## 4. Component Specifications
Enforce all states via CSS classes:

**Buttons**
- Default: flex, `align-items: center`, `justify-content: center`, gap 0.5rem, min 44x44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled, spinner (CSS or animated Material Icon), no dimension change.
- Disabled: opacity 0.5, greyscale, `cursor: not-allowed`.
- Success/Error: temporary styles via `--text-success`/`--text-error`.
- Primary pill: `#fafafa` bg, `#000000` text, 9999px radius, padding 8px 16px or 10px 20px, GeistSans 14px 500, subtle shadow. No color change on hover.
- Ghost: transparent bg, 1px `#5c5c61` border, `#fafafa` text, 9999px radius, same padding.

**Cards**
- Default: flex, `#232324` bg, 1px `#5c5c61` border, 12px radius, 24px padding, no shadow.
- Hover: `transform: translateY(-2px)` or shadow shift.
- Focus-within: border highlight.
- Loading skeleton: shimmer animation.
- Empty state: Material Icon + guidance text.

**Forms/Inputs**
- States: empty, focused (outline ring), filled, valid, invalid (error border + icon + red text), disabled, readonly.
- Structure: flex container with label, input, error feedback.
- Input: `#181818` bg, 1px `#5c5c61` border, 4px radius, 12px 16px padding, GeistMono 13px (code) / GeistSans 14px (text), placeholder `#a1a1aa`, focus = 1px `#fafafa` border, no glow.

**Modal/Popup**
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex, backdrop overlay, Material Icon close button, focus trapping, Esc/overlay close.

## 5. Page Sections (in order)
1. **Announcement Strip** — full-width band, 1px `#232324` border all sides, centered GeistSans 12px `#a1a1aa`, small 4px-radius 16px icon, 8px vertical padding.
2. **Sticky Nav** — `#0e0e10` bg, 1px `#232324` bottom border, ~56px height, flex: logo left, links center (GeistSans 14px 500 `#a1a1aa`), primary pill CTA right. Theme toggle included.
3. **Hero** — two-column split: left = headline + dual CTAs; right = fragmented aurora bars (8px height, varying widths, aurora gradient). Overlaid on visible coordinate grid (1px `#232324` lines). Headline: GeistSans 48px 500 `#fafafa`, -1.2px tracking, 56px line-height, max 2 lines (or GeistMono 60px terminal feel).
4. **Logo Trust Strip** — "Trusted by developers at 5000+ companies" caption (GeistSans 12px `#a1a1aa`), then 6+5 grid of monochrome wordmarks (`#fafafa` or `#a1a1aa`), 24px gap, 32px row gap.
5. **Features** — 3 cards (Dark Card Surface style), each with icon, title, description.
6. **How It Works** — 3 steps with numbers/icons, descriptions.
7. **Testimonials** — 3 testimonial cards.
8. **Pricing** — 3 tiers with feature lists and CTAs.
9. **FAQ** — accordion-style Q&A.
10. **Final CTA** — centered headline + primary pill button.
11. **Footer** — secondary links, copyright, theme toggle.

## 6. Core UX Rules
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never color-only state communication, semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No chromatic colors for buttons/links/icons except aurora decoration.

## 7. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM) throughout — never mix.
- No lorem-ipsum-only submissions where real copy is expected; placeholders only where content genuinely unspecified.
- All copy in English (fictional brand).

## 8. Output
Return only the three files' contents in clearly labeled code blocks. No preamble, no closing commentary. Ensure the page is complete and functional.
