# Lithic — Landing Page Build Prompt

You are a coding AI building a complete, production-ready landing page in the **Lithic** visual style. Generate separate `index.html`, `style.css`, and `script.js` files. Do not write inline CSS. Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) with all utility classes mapping back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`). Use Google Fonts for text (Inter as the substitute for Monument Grotesk) and Google Material Symbols/Icons for icons — never raw inline SVGs or local icon files.

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. Forbid `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` (and theme classes) using CSS variables. Define at minimum:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Lithic-specific tokens: `--color-ember-orange: #ff6600`, `--color-architect-violet: #5c2999`, `--color-lichen-green: #00cc88`, `--color-sandstone: #aa8855`, `--color-bark-brown: #665233`, `--color-honey-bronze: #eec07a`, `--color-obsidian: #000000`, `--color-paper-white: #ffffff`, `--color-warm-cream: #f6f3ee`, `--color-lavender-mist: #f6f1fe`, `--color-mint-whisper: #ebfef6`, `--color-ash-gray: #888888`, `--color-smoke: #e5e5e5`.
- Contrast pairing: any light background token pairs with a dark text token; any dark background pairs with a light text token.
- Light mode background: use `#fefefe` where near-white is needed, never pure `#ffffff` for page canvas; use `#f6f3ee` warm cream as default elevated surface.
- Border radius & shadows: `--radius-sm: 8px`, `--radius-md: 24px`, `--radius-lg: 24px`; `--shadow-sm: 0px 4px 8px 0px rgba(0,0,0,0.1)`, `--shadow-md: 0px 16px 32px 0px rgba(0,0,0,0.1)`, `--shadow-xl: 0px 16px 32px 0px rgba(0,0,0,0.5)`.
- Spacing & transitions: `--spacing-gap: 24px`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: `--font-base` bound to Inter (Google Fonts), weights 400 and 500. Letter-spacing `-0.02em` at every size. Type scale tokens: `--text-caption` (14px/1.52/-0.28px), `--text-body-sm` (16px/1.5/-0.32px), `--text-subheading` (20px/1.4/-0.4px), `--text-heading-sm` (24px/1.2/-0.48px), `--text-heading` (36px/1.2/-0.72px), `--text-display` (64px/1.0/-1.28px).

**1.3 Mandatory Dark Mode Support**
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit; include a visible toggle control with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures using Flexbox.
- Every flex container must default to `align-items: center` unless explicitly justified.
- All flex layouts must be mobile-responsive (rows convert to columns on small viewports). Prevent horizontal scrolling.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`). All utility classes map back to CSS variables or generic reusable class names.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Include Google Font `<link>`/`@import` for Inter and bind to `--font-base`.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min touch target 44x44px.
- Hover: visual shift (brightness/shadow), `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disable interactions, prevent double-clicks, render CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles via `--text-success`/`--text-error`.
- Lithic variants: Primary CTA — `#ff6600` fill, white text, weight 500, 16px, 24px radius, 12px/38px padding, `--shadow-sm`, trailing arrow icon. Ghost — transparent, 1px `#000000` border, black text weight 500, 8px radius, 10px/16px padding, trailing arrow icon.

**2.2 Card Component**
- Default: flexible flexbox, subtle borders/elevation using `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty State: structured fallback with Google Icon and clear guidance text.
- Lithic variants: Warm Feature Card (`#f6f3ee`, 24px radius, 40px padding, heading 24px weight 500, body 16px weight 400), Lavender Feature Panel (`#f6f1fe`, 24px radius, 40px padding, violet arc decoration), Mint Metric Callout (`#ebfef6`, 24px radius, 16-24px padding, green accent text).

**2.3 Form & Input Requirements**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

**2.4 Modal / Popup Requirements**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- UX: centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. CORE UX & MICRO-INTERACTION RULES

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.

## 4. DELIVERABLE & OUTPUT FORMAT

- File structure: separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Naming convention: one consistent convention (BEM or fixed utility set) across the entire deliverable — never mix.
- No unrequested placeholders: where real copy/labels are supplied, use them; placeholders only where content genuinely unspecified.

## 5. EDIT MODE (not applicable — this is a from-scratch build)

## 6. CONTENT & BRANDING RULES

- Invent a fictional brand name, product, and copy. Never use the real brand name "Lithic", its logo, trademarks, or product names anywhere in the page. The style reference is inspiration only.
- All user-facing copy must be in English.

## 7. LITHIC STYLE APPLICATION

Apply the Lithic aesthetic throughout:
- Single typeface Inter (substitute for Monument Grotesk), weights 400/500, letter-spacing `-0.02em` at every size.
- 24px border-radius on cards, panels, primary buttons; 8px on small controls.
- Surfaces alternate: page canvas `#fefefe`/white, warm cream `#f6f3ee` cards, lavender `#f6f1fe` panels, mint `#ebfef6` highlights, obsidian `#000000` hero vault.
- Concentric-arc decoration in warm tones (`#aa8855`, `#665233`, `#5c2999`) at low opacity as background/edge decoration only, never foreground content.
- Section gaps minimum 80px; card padding 40px; element gaps follow 8px scale.
- Page max-width 1200px, centered content container.
- Hero: full-bleed black vault, 64px display headline weight 500 white, line-height 1.0, tracking -1.28px; subhead 20px white at 70% opacity; ghost + primary buttons side by side with 16px gap.
- Top nav: white, wordmark left (weight 500, 20px, tracking -0.4px), nav links weight 400 16px with ~24px gap, right-aligned contact text link + ghost Dashboard button, vertical padding 16-24px. No sticky behavior.
- Brand logo strip: warm cream band, 80px vertical padding, 6-8 monochrome wordmarks ~100px wide, 64px gap, heading 36px weight 500 centered above.
- Availability status badge: 6-8px filled `#00cc88` circle + label 14px weight 400, right-aligned in rows.
- Check list item: 16-20px circular `#5c2999` icon with white check, 8-12px gap, label 16px weight 400, 12-16px vertical gap.
- CTA footer bar: full-width mint or cream band, centered text stack, headline 20-24px weight 500, links 16px weight 400 with 24-32px gap, arrow icons.

## 8. SECTIONS TO BUILD

Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. Use fictional copy and a fictional brand name. Ensure full responsiveness, dark mode, accessibility, and all component states (hover, focus, active, loading, disabled, empty, skeleton where applicable).

Output only the finished prompt deliverable as the three files. No preamble, no closing commentary.
