# React Email-Inspired Landing Page — Coding AI Prompt

You are an expert frontend developer. Build a complete, responsive landing page using **HTML, CSS, and JavaScript** in separate files (`index.html`, `style.css`, `script.js`). The page must follow a dark, developer-tool aesthetic inspired by an "obsidian workshop" style: deep black canvas, hairline white edges, thin borders, near-zero elevation, and a single cyan accent used only for glows and the brand icon. **Invent a fictional brand name, product, and copy — never use "React Email", its logo, trademarks, or product names.**

## 1. Architecture & Rules

- **CSS-First, Zero Inline CSS:** All styling in `style.css`. No `style="..."` attributes. Use class/ID selectors only. HTML must stay clean and semantic.
- **CSS Variables:** Define all tokens in `:root` and a `.dark` class / `@media (prefers-color-scheme: dark)`. Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.
- **Contrast Pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text — enforce in every theme.
- **Light Mode Background:** Not pure white; use `#fefefe` where near-white is needed.
- **Dark Mode Mandatory:** Provide dark tokens under `prefers-color-scheme: dark` and `.dark`. Persist user choice via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** Use `display: flex` with default `align-items: center` unless justified. Convert rows to columns on small viewports. No horizontal scroll.
- **Tailwind or Custom CSS:** Use Tailwind (or clean custom CSS via `@layer`/`@apply`) with utilities mapping to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Google Fonts Mandatory:** Load Inter and a monospace (JetBrains Mono or Fira Code) via `<link>`/`@import`; bind to `--font-base` and `--font-mono`. Use Google Material Symbols for icons — no inline SVGs or local icon files.
- **Naming Convention:** Use BEM consistently across all classes.

## 2. Design Tokens (React Email Style)

### Colors
- `--color-obsidian: #000000` (page canvas)
- `--color-carbon: #0f0f10` (card/elevated surface)
- `--color-graphite: #27272a` (borders, dividers, nav bg)
- `--color-filament: #e5e7eb` (hairline borders on badges/outlined controls)
- `--color-paper: #ffffff` (primary text, filled CTA bg, icon strokes)
- `--color-fog: #abafb4` (secondary text, subdued body)
- `--color-ash: #6e727a` (muted helper text, metadata)
- `--color-mist: #99a1af` (tertiary text, icon strokes, disabled fg)
- `--color-silver: #cad5e2` (decorative icon strokes)
- `--color-slate: #364153` (deep icon fills, secondary button text)
- `--color-sleet: #f3f4f6` (code editor chrome, light surface insets)
- `--color-neon-cyan: #52e1fe` (blue text accent for links/tags — never primary CTA)
- `--color-beacon-teal: #25aeba` (glow halo behind hero product imagery)
- `--color-amber: #ffb86a` (decorative icon accent, editorial highlight)

### Typography
- Inter (weights 400, 460, 500) — primary interface/editorial. Headlines weight 500 with aggressive negative tracking (-0.05em at 68px, -0.025em at 35px, -0.01em at 18px, -0.008em at 16px).
- Monospace (JetBrains Mono or Fira Code, weight 400) — terminal commands, file labels, badge text, inline code.
- Type scale: caption 12px, body-sm 14px, body 16px, subheading 18px, heading-sm 20px, heading 24px, heading-lg 35px, display 68px.

### Spacing & Shapes
- Base unit 4px. Comfortable density.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 104, 160, 216px.
- Border radius: badges 2px, buttons 8px, cards 12px, heroPanels 24px, largeSurfaces 18px.
- Shadows: subtle inset hairline `rgba(255,255,255,0.1) 0px 0px 0px 1px inset, rgba(255,255,255,0.15) 0px 1px 0px 0px inset`; subtle-2 `rgba(0,0,0,0.05) 0px 1px 2px 0px`; md glow `rgba(37,174,186,0.1) 0px 0px 9px 4px`.
- Page max-width 1200px. Section gap 80px. Card padding 20px. Element gap 12px.

### Elevation
- Cards/editor windows: `rgba(0,0,0,0.05) 0px 1px 2px 0px`.
- Inset hairline on all interactive surfaces.
- Hero product visualization glow: `rgba(37,174,186,0.1) 0px 0px 9px 4px`.

## 3. Component Specifications

### Buttons
- **Primary CTA:** White filled bg, Obsidian text, 8px radius, 16px×10px padding, Inter 500 14px. Inset hairline shadow. Right-arrow icon (→) in Obsidian, 6px after label. Min touch target 44×44px.
- **Ghost Secondary:** Transparent bg, Filament text, Inter 500 14px, 8px radius, 16px×10px padding. Inset hairline border. Hover: bg Graphite.
- **Terminal Command Badge:** CommitMono 13px Filament on Carbon bg, 8px radius, 4px×12px padding, 1px Graphite border. Copy icon right-aligned 6px from text. Sits inline with primary CTA as peer.
- States: default, hover (brightness/shadow + cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (spinner, disabled, no double-click), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).

### Cards
- Flexible Flexbox layout, subtle borders, elevation via `--bg-secondary` and CSS vars.
- Hover: elevation/shadow shift or `translateY(-2px)`.
- Focus-within: highlight borders when child link/button focused.
- Loading skeleton with shimmer animation.
- Empty state: Google Icon + clear guidance text.

### Forms & Inputs
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container.

### Modals/Popups
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via Esc or overlay click.

### Top Navigation Bar
- Graphite bg, flush top. Logo left (brand icon + wordmark Paper), nav links center (Fog, hover Paper), GitHub star badge right. Height ~56px, max-width 1200px centered, 40px horizontal padding. Sticky, minimal.

### Hero Section
- Obsidian bg. Display headline 68px Inter 500, Paper, letter-spacing -0.05em, line-height 0.94. Subtext 18px weight 400, Fog, max-width 480px. Row: white filled button + terminal command badge. Right side: product visualization with radial glow `radial-gradient(rgba(37,99,235,0.1), transparent 80%)` bleeding off canvas edge. Asymmetric: text left 40-45%, visualization right.

### Feature Section Heading
- Inter 35px weight 500, Paper, letter-spacing -0.025em, line-height 1.00. 16px gap to subheading: Inter 18px weight 400, Fog, line-height 1.40. 80px vertical space above/below.

### Tab Switcher
- Carbon bg, 24px radius pill. Two tabs: inactive transparent Fog text; active Graphite fill Paper text. Inter 14px weight 500, 8px padding, 2px gap.

### Code Editor Window
- Carbon bg, 12px radius, 1px Graphite border. Traffic-light dots top-left 6px from edge. File label centered CommitMono 13px Mist. Copy icon top-right. Code body CommitMono with Amber keywords, Paper strings, Slate comments. 20px internal padding.

### Email Preview Card
- Sleet bg (inverted). 12px radius, right half of split pane. Inter 14px-18px body, system font stack for email body. Renders logo, heading, paragraph, CTA (white button, black text, 8px radius).

### Editor Toolbar
- Sleet bar, 12px top radius. Icon buttons row: B, I, U, S, link, image, list, list-ordered, H1-H3, heading dropdown. 16px Slate icons. Separator 1px Filament at 16px intervals. Active: icon fills Obsidian.

### Editor Content Card
- Sleet bg, 12px bottom radius. Padding 24px. Inter 16px body Obsidian text. H2 20px weight 600. Bullet lists 4px indent. 'Try it! Type /' prompt bottom in CommitMono.

### GitHub Star Badge
- Carbon bg, 8px radius, 1px Graphite border. GitHub octocat + star icon Mist, star count Paper Inter 14px weight 500. 8px×8px padding.

### Brand App Icon
- 36px square, 8px radius, Neon Cyan bg with subtle radial glow. White interlocked atom/circle glyph centered, 1.5px stroke. Used hero (larger) and nav (compact).

## 4. Page Sections

Build these sections in order:
1. **Hero** — asymmetric text left + product visualization right with radial glow.
2. **Features** — 3 cards in a row (flex, responsive to column on mobile). Each: icon, title, description.
3. **How It Works** — 3 steps. Numbered, icon, title, description. Horizontal on desktop, vertical on mobile.
4. **Testimonials** — 2-3 quote cards with avatar (Google Icon placeholder), name, role, quote.
5. **Pricing** — 3 tiers. Card with title, price, feature list, CTA button. Highlight middle tier.
6. **FAQ** — accordion-style (details/summary or JS). Question + answer.
7. **Final CTA** — centered headline + subtext + primary button + terminal badge.
8. **Footer** — logo, secondary links (4 columns), copyright, social icons (Google Material Symbols).

## 5. UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 6. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point reference.
- BEM naming convention throughout.
- No lorem-ipsum-only; use realistic fictional copy for all sections.
- All user-facing copy in English.

## 7. Do's and Don'ts (from style reference)

**Do:**
- Inter weight 500 for all headings and CTAs.
- Apply -0.05em letter-spacing at 68px scaling down to -0.008em at 16px.
- Pair every primary CTA with a terminal command badge as visual peer.
- Use inset hairline shadow on all interactive surfaces.
- Reserve Neon Cyan and Beacon Teal for product visualization glows and brand icon only — never text or UI controls.
- Maintain split-pane pattern (code left / preview right) for code-related sections.
- Set 80px section gaps and 12px internal element gaps.

**Don't:**
- No heavy drop shadows — inset hairlines and 1-2px shadows only.
- No saturated colors beyond the three accents.
- No Inter weight 600/700 for UI (700 only inside email preview system font stack).
- No uniform corner rounding — mix 2px/8px/12px/18px/24px.
- No cyan/teal for text or button backgrounds.
- No CTAs on light backgrounds.
- No gradients on UI elements — only atmospheric radial glows behind product visualizations.

Output only the finished prompt. No preamble or closing commentary.
