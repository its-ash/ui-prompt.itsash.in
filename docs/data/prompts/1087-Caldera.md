# Caldera Landing Page — Coding AI Prompt

## 1. Strict Rules & Architecture

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. Forbid `style="..."` attributes in HTML. Target all design via class/ID selectors. Keep HTML clean, semantic, and styling-agnostic.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` using the Caldera palette and type scale:
- Colors: `--color-ember: #fc5000`, `--color-plasma-violet: #524ae9`, `--color-sulfur: #f5f28e`, `--color-limestone: #f7f6f2`, `--color-pumice: #e2e2df`, `--color-obsidian: #070607`, `--color-chalk: #ffffff`.
- Map to semantic tokens: `--primary: var(--color-ember)`, `--secondary: var(--color-limestone)`, `--bg-primary: var(--color-pumice)`, `--bg-secondary: var(--color-limestone)`, `--text-primary: var(--color-obsidian)`, `--text-secondary: var(--color-obsidian)`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.
- Light mode background must not be pure white; use `#e2e2df` (Pumice) as canvas. Where near-white is needed use `#f7f6f2` (Limestone), never `#ffffff` except Chalk for high-contrast on dark surfaces.
- Radius: `--radius-sm: 16px`, `--radius-md: 20px`, `--radius-lg: 40px`, plus pills `800px` and inputs `100px`.
- Shadows: none — system is shadowless. Define `--shadow-sm/md` as `none`.
- Spacing: use provided scale tokens `--spacing-4` … `--spacing-92`. Element gap 16px, card padding 40px, section gap 80px.
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`. Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode**
Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Switch background/text variables seamlessly. Persist theme choice via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox Layout & Mobile-First**
Use Flexbox for all layouts. Every flex container defaults to `align-items: center` unless explicitly justified. Mobile-responsive out of the box: rows become columns on small viewports. No horizontal scrolling.

**1.5 Framework**
Use Tailwind CSS (or clean custom CSS via `@layer`/`@apply`). Utility classes must map to CSS variables or generic reusable classes (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons**
Use Google Fonts only. Text: Bebas Neue (substitute for PP Neue Corp Compact) via Google Fonts + DM Sans + system sans fallback. Bind to `--font-pp-neue-corp-compact`, `--font-dm-sans`, `--font-system-sans-serif`. Icons: Google Material Symbols only. No inline SVGs or local icons.

## 2. Component Specifications

**Buttons**
- Primary CTA: Ember fill, Obsidian text, 800px radius, padding 12px/24px, DM Sans 500 16px. Flex, min 44x44px. Hover brightness/shadow (no shadow — use brightness), cursor pointer. Focus ring via CSS vars. Active `transform: scale(0.97)`. Loading: disabled, spinner (CSS or Material Icon) no dimension change. Disabled opacity 0.5, greyscale, not-allowed. Success/error temporary states via `--text-success`/`--text-error`.
- Secondary Pill: transparent, 1.5px Obsidian border, Obsidian text, 40px radius, padding 16px all, DM Sans 500 16px.
- Outlined Ghost Link: transparent, no border, Obsidian text, 800px radius, padding 0/12px, DM Sans 500 16px.

**Cards**
- Stat Feature Card: Ember bg, Chalk text, 40px radius, 40px padding, no shadow. Metric number PP Neue Corp Compact 80px+ (Bebas Neue), label DM Sans 500 14–16px.
- Content Card: Limestone bg, no border/shadow, 40px radius, 40px padding. Category tag (Sulfur bg, Obsidian text, 800px radius, DM Sans 500 12–14px, padding 3–4px/8–10px), headline PP Neue Corp Compact 26–32px Obsidian letter-spacing 0.64px, date 12px system sans Obsidian.
- Plasma Hero Card: Plasma Violet bg with white halftone dot overlay, 40px radius, used sparingly.
- Hover: `transform: translateY(-2px)`. Focus-within highlights border. Skeleton shimmer. Empty state with Material Icon + guidance text.

**Inputs**
- Transparent bg, 1.5px Chalk border, 100px radius, padding 24px vertical / 32px left / 64px right, Chalk text, DM Sans 500. Dark sections only. States: empty, focused (ring), filled, valid, invalid, disabled, read-only. Flex container with label, input, error feedback.

**Modal**
- Opening/open/loading/success/error/closing animated. Centered flex, backdrop, Material Icon close button, focus trap, Esc/overlay close.

**Nav Bar**
- Pumice canvas continues. Nav items Obsidian DM Sans 500 16px, 9px gaps. Optional Limestone pill container 800px radius. Logo lockup left, social icons + CTA right. Dotted dividers (1.5px Obsidian dotted) where specified.

**Hero Halftone Block**
- Large rounded rect, Plasma Violet→Ember gradient with orange halftone dot pattern overlay, 40px radius, hero-scale (~50% viewport width). Most distinctive motif.

**Partner Logo Strip**
- Limestone bg card, 40px radius, 40px padding. Logos single row consistent height, separated by vertical 1.5px Obsidian dotted dividers. No individual containers.

**Dotted Divider**
- 1.5px dotted Obsidian line. Vertical in nav/partner strips, occasional horizontal section breaks.

## 3. Core UX & Micro-interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 4. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry reference.
- One consistent class-naming convention (BEM) across entire deliverable.
- No lorem-ipsum-only where real copy supplied; placeholders only where content unspecified.

## 5. Edit Mode (not applicable — from-scratch build)

## 6. Landing Page Requirements
Build a complete landing page with sections: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Theme application — Caldera:** warm limestone canvas (`#e2e2df`), molten orange (`#fc5000`) as only aggressive accent, Plasma Violet (`#524ae9`) hero halftone, Sulfur (`#f5f28e`) tags. Flat, shadowless. Ultrabold compressed display type (Bebas Neue substitute) up to 189px with +0.02em tracking and `"ss06","ss10"` where supported. DM Sans 500 for body/nav/buttons. 40px radius cards, 800px pills, 100px inputs. Halftone dot pattern as hero signature. Triple-radius system. No shadows, no rectangular buttons, no extra accent colors, no Regular/Bold DM Sans.

**Brand rule:** Invent a fictional brand name, product, and copy. Never use the real brand name "Caldera", its logo, trademarks, or product names anywhere in the page. All user-facing copy must be in English.

**Content:** Use realistic fictional copy for all sections. Include a 189px display headline in hero. Features: 3 cards with Sulfur tags. How It Works: 3 numbered steps. Testimonials: 2–3 quotes. Pricing: 3 tiers with one featured (Ember). FAQ: 4–6 questions. Final CTA with primary + secondary buttons. Footer with secondary links, social icons (Material Symbols), dotted dividers.

Output only the finished prompt. No preamble. Mirror sections 1–4 structure.# Caldera Landing Page — Coding AI Prompt

## 1. Strict Rules & Architecture

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. Forbid `style="..."` attributes in HTML. Target all design via class/ID selectors. Keep HTML clean, semantic, and styling-agnostic.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` using the Caldera palette and type scale:
- Colors: `--color-ember: #fc5000`, `--color-plasma-violet: #524ae9`, `--color-sulfur: #f5f28e`, `--color-limestone: #f7f6f2`, `--color-pumice: #e2e2df`, `--color-obsidian: #070607`, `--color-chalk: #ffffff`.
- Map to semantic tokens: `--primary: var(--color-ember)`, `--secondary: var(--color-limestone)`, `--bg-primary: var(--color-pumice)`, `--bg-secondary: var(--color-limestone)`, `--text-primary: var(--color-obsidian)`, `--text-secondary: var(--color-obsidian)`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.
- Light mode background must not be pure white; use `#e2e2df` (Pumice) as canvas. Where near-white is needed use `#f7f6f2` (Limestone), never `#ffffff` except Chalk for high-contrast on dark surfaces.
- Radius: `--radius-sm: 16px`, `--radius-md: 20px`, `--radius-lg: 40px`, plus pills `800px` and inputs `100px`.
- Shadows: none — system is shadowless. Define `--shadow-sm/md` as `none`.
- Spacing: use provided scale tokens `--spacing-4` … `--spacing-92`. Element gap 16px, card padding 40px, section gap 80px.
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`. Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode**
Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Switch background/text variables seamlessly. Persist theme choice via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox Layout & Mobile-First**
Use Flexbox for all layouts. Every flex container defaults to `align-items: center` unless explicitly justified. Mobile-responsive out of the box: rows become columns on small viewports. No horizontal scrolling.

**1.5 Framework**
Use Tailwind CSS (or clean custom CSS via `@layer`/`@apply`). Utility classes must map to CSS variables or generic reusable classes (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons**
Use Google Fonts only. Text: Bebas Neue (substitute for PP Neue Corp Compact) via Google Fonts + DM Sans + system sans fallback. Bind to `--font-pp-neue-corp-compact`, `--font-dm-sans`, `--font-system-sans-serif`. Icons: Google Material Symbols only. No inline SVGs or local icons.

## 2. Component Specifications

**Buttons**
- Primary CTA: Ember fill, Obsidian text, 800px radius, padding 12px/24px, DM Sans 500 16px. Flex, min 44x44px. Hover brightness, cursor pointer. Focus ring via CSS vars. Active `transform: scale(0.97)`. Loading: disabled, spinner no dimension change. Disabled opacity 0.5, greyscale, not-allowed. Success/error temporary states via `--text-success`/`--text-error`.
- Secondary Pill: transparent, 1.5px Obsidian border, Obsidian text, 40px radius, padding 16px all, DM Sans 500 16px.
- Outlined Ghost Link: transparent, no border, Obsidian text, 800px radius, padding 0/12px, DM Sans 500 16px.

**Cards**
- Stat Feature Card: Ember bg, Chalk text, 40px radius, 40px padding, no shadow. Metric number PP Neue Corp Compact 80px+ (Bebas Neue), label DM Sans 500 14–16px.
- Content Card: Limestone bg, no border/shadow, 40px radius, 40px padding. Category tag (Sulfur bg, Obsidian text, 800px radius, DM Sans 500 12–14px, padding 3–4px/8–10px), headline PP Neue Corp Compact 26–32px Obsidian letter-spacing 0.64px, date 12px system sans Obsidian.
- Plasma Hero Card: Plasma Violet bg with white halftone dot overlay, 40px radius, used sparingly.
- Hover: `transform: translateY(-2px)`. Focus-within highlights border. Skeleton shimmer. Empty state with Material Icon + guidance text.

**Inputs**
- Transparent bg, 1.5px Chalk border, 100px radius, padding 24px vertical / 32px left / 64px right, Chalk text, DM Sans 500. Dark sections only. States: empty, focused (ring), filled, valid, invalid, disabled, read-only. Flex container with label, input, error feedback.

**Modal**
- Opening/open/loading/success/error/closing animated. Centered flex, backdrop, Material Icon close button, focus trap, Esc/overlay close.

**Nav Bar**
- Pumice canvas continues. Nav items Obsidian DM Sans 500 16px, 9px gaps. Optional Limestone pill container 800px radius. Logo lockup left, social icons + CTA right. Dotted dividers (1.5px Obsidian dotted) where specified.

**Hero Halftone Block**
- Large rounded rect, Plasma Violet→Ember gradient with orange halftone dot pattern overlay, 40px radius, hero-scale (~50% viewport width). Most distinctive motif.

**Partner Logo Strip**
- Limestone bg card, 40px radius, 40px padding. Logos single row consistent height, separated by vertical 1.5px Obsidian dotted dividers. No individual containers.

**Dotted Divider**
- 1.5px dotted Obsidian line. Vertical in nav/partner strips, occasional horizontal section breaks.

## 3. Core UX & Micro-interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 4. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry reference.
- One consistent class-naming convention (BEM) across entire deliverable.
- No lorem-ipsum-only where real copy supplied; placeholders only where content unspecified.

## 5. Landing Page Requirements
Build a complete landing page with sections: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Theme application — Caldera:** warm limestone canvas (`#e2e2df`), molten orange (`#fc5000`) as only aggressive accent, Plasma Violet (`#524ae9`) hero halftone, Sulfur (`#f5f28e`) tags. Flat, shadowless. Ultrabold compressed display type (Bebas Neue substitute) up to 189px with +0.02em tracking. DM Sans 500 for body/nav/buttons. 40px radius cards, 800px pills, 100px inputs. Halftone dot pattern as hero signature. Triple-radius system. No shadows, no rectangular buttons, no extra accent colors, no Regular/Bold DM Sans.

**Brand rule:** Invent a fictional brand name, product, and copy. Never use the real brand name "Caldera", its logo, trademarks, or product names anywhere in the page. All user-facing copy must be in English.

**Content:** Use realistic fictional copy for all sections. Include a 189px display headline in hero. Features: 3 cards with Sulfur tags. How It Works: 3 numbered steps. Testimonials: 2–3 quotes. Pricing: 3 tiers with one featured (Ember). FAQ: 4–6 questions. Final CTA with primary + secondary buttons. Footer with secondary links, social icons (Material Symbols), dotted dividers.
