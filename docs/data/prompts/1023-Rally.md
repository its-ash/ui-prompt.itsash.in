# Landing Page Build Prompt — Rally Theme (Fictional Brand)

## 1. Project Overview & Theme Direction

Build a complete, production-ready landing page for a **fictional brand** (invent a name, product, and copy — never use "Rally" or any real trademark). The visual language is a **dark, cosmic farewell observatory**: a near-black canvas (`#0d100d`) scattered with faint starfield noise, a single elevated midnight-blue message card carrying content, and a solitary colorful planet anchoring the bottom. The palette is strictly three tones — Void, Midnight Surface, Halo white — plus a full-color 3D Earth illustration as the only chromatic element. No shadows, no gradients, no extra colors.

**Mood:** quiet, intimate, monastic, observatory-like. Generous spacing, soft 24px curves, hairline black borders, positive letter-spacing, restrained grotesque typography.

---

## 2. Strict Architectural Rules

### 2.1 CSS-First, Zero Inline CSS
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target via class/ID selectors only. Keep HTML semantic and styling-agnostic.

### 2.2 CSS Variables & Theme Tokens
Define in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`):

**Colors:**
- `--color-void: #0d100d` (page canvas)
- `--color-midnight-surface: #08102b` (elevated card surface)
- `--color-halo: #ffffff` (primary text)
- `--color-hairline: #000000` (borders/dividers)
- `--bg-primary: var(--color-void)`
- `--bg-secondary: var(--color-midnight-surface)`
- `--text-primary: var(--color-halo)`
- `--text-secondary: #b8bcc8`
- `--text-success: #4ade80`
- `--text-error: #f87171`
- `--border-default: var(--color-hairline)`
- `--border-error: var(--text-error)`
- `--border-success: var(--text-success)`

**Typography:**
- `--font-base: 'TikTok Sans Variable', 'Inter', system-ui, sans-serif` (load via Google Fonts; substitute Inter if TikTok Sans unavailable)
- `--font-micro: system-ui, -apple-system, 'Segoe UI', sans-serif`
- `--text-caption: 12px` (line-height 1.2)
- `--text-body: 24px` (line-height 1.4, letter-spacing 0.36px)
- `--text-heading: 32px` (line-height 1.1, letter-spacing 0.48px)
- OpenType feature `"cv04"` enabled globally on body text.

**Spacing & Shape:**
- `--spacing-20: 20px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-40: 40px`, `--spacing-48: 48px`
- `--radius-sm: 12px`, `--radius-md: 24px`, `--radius-lg: 9999px`
- `--shadow-sm: none`, `--shadow-md: none` (no shadows — color lift only)
- `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown: 10`, `--z-modal: 50`, `--z-toast: 100`

**Contrast pairing:** every light bg pairs with dark text and vice versa. Since the theme is dark-first, ensure `--bg-primary` (void) pairs with `--text-primary` (halo).

### 2.3 Mandatory Dark Mode
- Dark mode is the default and only theme. Still implement `@media (prefers-color-scheme: dark)` and a `.dark` class for token switching.
- Theme choice persists via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.

### 2.4 Flexbox & Mobile-First
- All layouts use `display: flex`. Default `align-items: center` unless explicitly justified.
- Mobile-responsive: rows collapse to columns below 768px. No horizontal scroll.

### 2.5 Tailwind CSS
- Use Tailwind via CDN or `@layer`/`@apply` in `style.css`. Utility classes must map back to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons
- Google Fonts: load TikTok Sans Variable (or Inter fallback) + Material Symbols.
- No inline SVGs or local icon files. All icons via Google Material Symbols.

---

## 3. Component Specifications

### 3.1 Button
- Flex: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;`
- Min touch target 44x44px.
- States: default, hover (brightness/shadow shift, cursor pointer), focus (outline ring via CSS vars), active (scale 0.97), loading (spinner, disabled interactions), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`).
- Radius 24px. No shadow.

### 3.2 Card (Farewell-style)
- Background `--color-midnight-surface`, 1px `--color-hairline` border, 24px radius, 40px padding.
- Flex layout, subtle elevation via color only.
- Hover: `translateY(-2px)`. Focus-within: highlight border. Loading skeleton with shimmer. Empty state with Google Icon + guidance text.

### 3.3 Form & Input
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Flex container wrapping label, input, error feedback.

### 3.4 Modal
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex, backdrop overlay, Google Icon close button, focus trapping, Esc/overlay close.

---

## 4. Global UX Rules
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes, respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

---

## 5. Page Sections (Landing Page)

Build these sections in order, all in dark theme, centered single-column, max-width 720px for content cards, full-viewport hero canvas:

1. **Hero** — Wordmark header (lowercase fictional brand name, white, centered, 12-16px system-ui, 32px padding top/bottom on void canvas). Headline 32px TikTok Sans, body 24px, single CTA button (24px radius). Starfield background across full height. No nav bar.
2. **Features** — 3 cards in a row (collapse to column on mobile), each with Google Material Icon, heading, body copy. Midnight Surface bg, hairline border, 24px radius.
3. **How It Works** — 3 steps, numbered, flex row (column on mobile), each with icon + title + description.
4. **Testimonials** — 2-3 quote cards, Midnight Surface, hairline border, 24px radius, author name + role.
5. **Pricing** — 3 tiers, flex row (column on mobile), each card with price, feature list, CTA button. Middle tier visually emphasized (hairline border accent, not color).
6. **FAQ** — Accordion-style (CSS-only or minimal JS), questions in Halo white, answers in secondary text. Hairline dividers.
7. **Final CTA** — Centered headline + button on void canvas, 48px vertical padding.
8. **Footer** — Secondary links (Privacy, Terms, Contact), centered, 12px system-ui, hairline top border. No social icons beyond Material Symbols if needed.

**Starfield:** sparse scattered white/light-blue dots, very low opacity, random distribution across full page background. Purely decorative.

**Planet Illustration:** full-color 3D Earth render placeholder (use a CSS gradient circle or image placeholder with descriptive alt), centered, ~50% viewport width, bottom of page, floating on void without container. Only chromatic element.

---

## 6. Deliverables
- `index.html`, `style.css`, `script.js` (separate files, no inline script beyond single deferred entry point).
- Consistent class naming (BEM). No mixed conventions.
- No lorem-ipsum-only submissions; use realistic fictional copy for all sections.
- Invent fictional brand name, product, and copy. Never use "Rally" or real trademarks.

---

## 7. Edit Mode
Not applicable — this is a from-scratch build.

---

## 8. Output
Generate only the three files' contents as specified. No preamble, no closing commentary. Mirror the structure above.
