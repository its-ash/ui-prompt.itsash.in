You are an expert front-end engineer. Build a complete, production-ready landing page for a fictional note-taking / productivity brand inspired by the "Goodnotes" visual style reference below. You must invent a fictional brand name, product name, and all marketing copy. Never use the real brand name "Goodnotes", its logo, trademarks, or product names anywhere in the page.

## Deliverables
- `index.html`, `style.css`, `script.js` as separate files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."` forbidden).
- One consistent class-naming convention (BEM) across the entire deliverable.

## Theme & Visual Direction
- Light theme by default, with mandatory dark mode support via `@media (prefers-color-scheme: dark)` and a `.dark` class toggle. User choice persists in `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed`/`aria-label`.
- Paper-white command canvas: near-zero visual noise, almost no shadow, no gradients, spare chromatic palette. The single saturated color `#57d2ee` (aqua) appears exclusively on the primary CTA button. Borders rather than shadows define surfaces. Single 10px radius applies universally to buttons, cards, inputs, and UI chrome (4px only for focus/link rings).
- Zero box-shadow anywhere. Elevation expressed purely through borders.

## CSS Variables (define in `:root` and theme classes)
Colors: `--color-pure-canvas: #ffffff` (page bg, card bg, CTA text), `--color-midnight-ink: #000000` (headlines, body, UI borders), `--color-deep-charcoal: #1e1e1e` (ghost button text/borders, secondary headings), `--color-graphite: #111213` (dark nav/footer, link text in dark contexts), `--color-slate: #565656` (body copy on cards), `--color-fog: #888889` (muted helper text), `--color-ash: #666666` (tertiary text), `--color-steel: #333333` (badge text), `--color-border-medium: #e8e8e8` (tab underlines, nav separators), `--color-border-soft: #bebebe` (card/modal borders), `--color-aqua-spark: #57d2ee` (primary CTA fill, selected nav), `--color-teal-deep: #45bfdb` (brand surface wash), `--color-cyan-mist: #bcedf8` (outlined button borders), `--color-cyan-text: #6dd9f2` (blue outline accent), `--color-sky-link: #0299e0` (hyperlinks in white contexts), `--color-highlighter-yellow: #f2e6b3` (inline highlighter wash). Also include warm off-white `#f6f5ee` and dark shell `#111213` surfaces.

Also define `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` mapped to the above, ensuring contrast pairing in both light and dark modes (light bg → dark text; dark bg → light text). Where a white/near-white is needed, use `#fefefe` instead of `#ffffff` in dark mode surfaces.

Radius/shadow/spacing/transition tokens: `--radius-sm`, `--radius-md`, `--radius-lg` (all 10px except 4px for rings), `--shadow-sm`, `--shadow-md` (set to `none`), `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.

Typography: Google Fonts only. Use Plus Jakarta Sans (substitute for Roobert) via `<link>`/`@import`, bound to `--font-base`. Weights 400/500/600/700. Type scale tokens `--text-caption` (10px/1.6), `--text-body-sm` (14px/1.43), `--text-body` (16px/1.4), `--text-subheading` (18px/1.38), `--text-heading-sm` (22px/1.25/-0.35px), `--text-heading` (24px/1.2/-0.48px), `--text-heading-lg` (40px/1.11/-1.68px), `--text-display` (48px/1/-2.4px). Letter-spacing: -0.05em at 48px, -0.042em at 40px, -0.02em at 24px, -0.016em at 20–22px; normal at body/small. Icons: Google Material Symbols only (no inline SVGs, no local icon files). Font Awesome 6 Brands substitute with Simple Icons SVG is forbidden — use Material Symbols for all icons.

## Layout & Architecture Rules
- CSS-first: all styling in `style.css`, class/ID selectors only, zero inline CSS, clean semantic HTML agnostic of visual styling.
- Flexbox for all layouts: `display: flex`, default `align-items: center` unless explicitly justified. Mobile-first, responsive, no horizontal scroll. Convert rows to columns on small viewports.
- Tailwind CSS integration via `@layer`/`@apply` mapping to CSS variables and generic reusable classes (`.btn`, `.card`, `.input-group`).
- Spacing base unit 4px; comfortable density. Section gap 80px desktop, card padding 24px, element gap 24px, page max-width 1200px centered.
- Border radius: 10px universally (buttons, cards, inputs, UI chrome); 4px only for focus/link rings. Tags 10px, links 4px, inputs 10px, buttons 10px, cards 10px.
- No box-shadow anywhere. Borders define surfaces: 0.5–1px solid `#bebebe` or `#e8e8e8`.

## Component Requirements (style all states via CSS classes)
Buttons:
- Primary CTA (Aqua Fill): `#57d2ee` bg, `#111213` text, 10px radius, padding 8px 16px, Roobert 500 15–16px, no shadow. Minimum 44x44px touch target. Default flex `align-items: center; justify-content: center; gap: 0.5rem`. Hover brightness/shadow shift + cursor pointer. Focus ring via CSS vars. Active `transform: scale(0.97)`. Loading: disables interactions, prevents double-clicks, CSS spinner/animated Material Icon without distorting dimensions. Disabled: opacity 0.5, greyscale, cursor not-allowed. Success/Error temporary feedback via `--text-success`/`--text-error`.
- Ghost Nav Button: transparent bg, `#1e1e1e` text, 1px solid `#1e1e1e` border, 10px radius, padding 10px 12px, 400 14–15px.
- Teal Tinted Feature Button (tab control): `rgba(87,210,238,0.1)` bg, 1px solid `rgba(87,210,222,0.4)` border, `#222222` text, 0px radius, padding 20px 30px, 500 16px. Full-width section tabs.
- "Learn More" Text Link: `#6dd9f2` on teal sections, `#0299e0` on white sections, 500 14–16px, includes "→" arrow, no underline default, 4px focus ring radius.

Cards:
- White Content Card: `#ffffff` bg, 0.5px solid `#bebebe` border, 10px radius, 24px padding, no shadow. Body `#565656` 16px/1.4. Headline `#000000` 20–24px weight 600. Hover: `transform: translateY(-2px)` or shadow shift (but no shadow — use border color shift). Focus-within highlights border. Loading skeleton shimmer in CSS. Empty state: Material Icon + guidance text.

Forms/Inputs:
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback container.

Modal/Popup:
- States: opening, open, loading, success/error, closing (CSS transitions). Centered flex container, backdrop overlay, Material Icon close button, keyboard focus trapping, close via Esc or overlay click.

## Sections to Build
1. **Hero**: centered headline layout — large Roobert 700 headline (48px, -0.05em, line-height 1.0), one sentence subtext, single cyan CTA. Tabbed product screenshot panel below spanning ~70% content width. Sticky top nav: logo left, nav links center-right, cyan CTA pinned far right. Ghost nav buttons for dropdown triggers (Product, Built For, Resources).
2. **Features**: 3-column card grid (white content cards). Each card: headline `#000000` 20–24px weight 600, body `#565656` 16px/1.4, "Learn more →" link.
3. **How It Works**: 3 steps. Alternating 2-column text-left/product-right layout at desktop, centered stacks at mobile. Section gap 80px.
4. **Testimonials**: cards with quote, author, role. White cards with `#bebebe` border.
5. **Pricing**: 3 tiers. Cards with feature lists, CTA buttons (primary for recommended tier, ghost for others).
6. **FAQ**: accordion-style. Use semantic details/summary or custom with ARIA. Smooth CSS transitions.
7. **Final CTA**: centered heading + subtext + cyan CTA button.
8. **Footer**: secondary links, dark shell background `#111213`, logo, social icons (Material Symbols), marquee logo strip above footer (white bg, no border, logos `#000000` grayscale, marquee-scroll 28s linear infinite, padding 20px 0, 40px+ gap, no card wrapping, subtle overflow mask).

## Additional Components
- **Tab Navigation Strip**: full-width strip, border-bottom 1px solid `#e8e8e8`, 0px radius. Active tab: Roobert 600, 16px, `#000000`, border-bottom 2px solid `#000000`, padding 10px 20px. Inactive: Roobert 400, 16px, `#666666`, padding 10px 20px. Used in hero product panel and "Built for any kind of work" / AI sections.
- **Section Heading Block**: Roobert 700, 40px, `#000000`, letter-spacing -1.68px, line-height 1.11, centered. Below: Roobert 400, 18px, `#666666`, line-height 1.4, centered, max-width 560px. Vertical gap 16px.
- **Highlighter Text Accent**: inline span with `#f2e6b3` background, 0px radius, flat highlighter stroke.
- **Product UI Screenshot Card**: contained in white card (10px radius, 1px solid `#bebebe`) or floating on white. Screenshot edges rounded 10px. No shadow.
- **Logo Marquee Strip**: white bg, no border, logos `#000000`/grayscale, marquee-scroll 28s linear infinite, padding 20px 0, 40px+ gap, no card wrapping, subtle overflow mask.

## UX & Micro-interaction Rules (enforce globally)
- Responsive by default: fluid sizing, breakpoints, no horizontal overflow.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light/dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback (form errors, toasts, loading).
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions: distinct `.btn-danger` in both themes.

## Copy & Content
- All user-facing copy in English. Invent fictional brand name, product name, feature names, testimonials, pricing tiers, FAQ questions/answers. No lorem-ipsum-only submissions where real copy is expected; placeholders allowed only where content genuinely unspecified.
- Never use "Goodnotes" or any real brand/trademark/product name.

## Output
Output only the finished coding prompt itself — no preamble, no closing commentary. Mirror Sections 1–4 structure with numbered headers and bolded sub-rules. Include a one-line explicit exception clause if any conflict with mandatory rules. Ensure dark mode, CSS variables, flexbox, Google Fonts/Icons, component states, accessibility, and file structure are all explicitly mandated.
