# Coding AI Prompt: Statamic-Style Landing Page

Build a complete, responsive landing page using the Statamic editorial sunset visual identity described below. Reuse the style only — invent a fictional brand name, product name, and all copy; never use the real brand name "Statamic", its logo, trademarks, or product names anywhere in the page.

## 1. Architecture & Rules

**1.1 CSS-First, Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors. Keep HTML semantic and styling-agnostic.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`):
- Colors: `--color-ink: #191a1b`, `--color-paper-white: #ffffff`, `--color-warm-shell: #fdf1ef`, `--color-driftwood: #beb9b3`, `--color-smoke: #5e5a5a`, `--color-graphite: #4e5154`, `--color-iron: #3f3f46`, `--color-mist: #cbd5e0`, `--color-electric-lime: #d4ff4c`, `--color-lavender-whisper: #cbc2ea`, `--color-lilac-mist: #d7e5fe`, `--color-blossom: #f5ddee`, `--color-plum-shadow: #4c305a`, plus `--color-dusk-gradient` and `--color-aurora-wash`.
- Contrast pairing: light backgrounds pair with dark text; dark surfaces pair with light text.
- Light background must not be pure white; use `#fefefe` where near-white is needed.
- Radii: `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 16px`, `--radius-pill: 9999px`.
- Shadows: `--shadow-sm`, `--shadow-subtle`, `--shadow-subtle-2`, `--shadow-subtle-3`, `--shadow-sm-2`, `--shadow-xl`, `--shadow-subtle-4`, `--shadow-xl-2`, `--shadow-subtle-5` (values per spec).
- Spacing: `--spacing-8` through `--spacing-208` (per scale). Section gap 64px, card padding 16px, element gap 16px.
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode**
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark`.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox & Mobile-First**
- All layouts use Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box; convert rows to columns on small viewports; no horizontal scroll.

**1.5 Tailwind CSS**
- Use Tailwind (or clean custom CSS via `@layer`/`@apply`). Utility classes map to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: load Google Fonts — Fraunces (substitute for p22-mackinac-pro), Lexend, JetBrains Mono (substitute for code-saver). Bind to `--font-display`, `--font-base`, `--font-mono`.
- Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 2. Component Specifications

**2.1 Buttons**
- Filled Primary: `#191a1b` bg, `#d4ff4c` text, Lexend 16px weight 500, 8px radius, 12px 24px padding, `--shadow-sm`. Flex layout, min 44x44px touch target.
- Ghost Outlined: transparent bg, 1.5px border `#cbc2ea`, text `#191a1b`, same sizing.
- States: hover (brightness/shadow + cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (disabled, spinner, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`).

**2.2 Cards**
- Default: flex layout, subtle border + elevation using `--bg-secondary` and CSS vars.
- Hover: elevation/shadow shift or `translateY(-2px)`.
- Focus-within: highlight border on child focus.
- Loading (skeleton): shimmer animation, no layout jump.
- Empty state: Google Icon + guidance text.

**2.3 Forms/Inputs**
- States: empty, focused (lavender ring), filled, valid, invalid (error border/text/icon), disabled, read-only.
- Structure: flex container with label, input, error feedback.

**2.4 Modals**
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex, backdrop overlay, Google Icon close button, focus trapping, Esc/overlay close.

## 3. Core UX & Micro-interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, never color-only state, semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submit.
- Destructive actions visually distinct in both themes.

## 4. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline script blocks beyond a single deferred entry-point.
- One consistent class-naming convention (BEM) throughout.
- No lorem-ipsum-only submissions where real copy was supplied; placeholders only where content genuinely unspecified.

## 5. Edit Mode (N/A — from-scratch build)

## 6. Page Sections to Build

1. **Hero**: Full-bleed warm gradient (`#fdf1ef` top to soft pink bottom). Centered headline stack (max-width ~800px): display headline at 80px Fraunces weight 300, color `#191a1b`, letter-spacing -4px, with one italic emphasis word. Subtext at 18px Lexend weight 400. Two CTAs side by side (filled primary + ghost outlined), then a small developer-note ghost link below. Floating island illustrations (palm trees, toucan, clouds) at left/right edges, partially clipped. Nav bar transparent over hero, white on scroll; sticky.

2. **Features**: 3 cards in a flex row (stack on mobile). Each card: icon circle (lavender or lime accent), title (Lexend 20px weight 600), description (Lexend 16px weight 400, `#5e5a5a`). Card elevation: 1px border + 40px diffuse shadow. 64px section gap, alternating warm-shell/white backgrounds.

3. **How It Works**: 3 steps, numbered with icon circles, connected by a horizontal line on desktop (vertical on mobile). Each step: number badge, title, short description. Centered headline at 36-60px display.

4. **Testimonials**: 2-3 quote cards with avatar icon circle, name, role, quote text in Lexend. Warm-shell background section.

5. **Pricing**: 3 tiers in flex row. Each: tier name, price (display serif), feature list with check icons, CTA button. Middle tier highlighted with dark fill or lavender border. Responsive stacking.

6. **FAQ**: Accordion items using `<details>`/`<summary>` or accessible toggle. Questions in Lexend 16px weight 500, answers in Lexend 14px. Focus rings, keyboard operable.

7. **Final CTA**: Centered headline (display serif), subtext, single filled primary button. Warm-shell background.

8. **Footer**: Multi-column link grid (secondary links), logo, copyright. Lexend 14px weight 300/400. Dark surface (`#191a1b`) background with light text, or warm-shell. Include theme toggle.

## 7. Style Reminders
- Display headlines: Fraunces weight 300-400, 60-96px, line-height 1.0-1.2, letter-spacing -0.05em, color `#191a1b`. Italic for emphasis words.
- Body/UI: Lexend weights 300-700, sizes 12-36px.
- Code/technical: JetBrains Mono 14px.
- Radii: 8px buttons/small cards, 12px images, 16px large cards, 9999px pills/icon circles.
- Shadows: barely-there 1-2px on buttons; dual (1px border + 40px diffuse) on large cards.
- Spacing rhythm: 16px element gaps, 64px section gaps.
- Warm-shell (`#fdf1ef`) must appear in at least one section.
- Never use `#d4ff4c` lime on light backgrounds; reserve for dark fills or small accent marks.
- Never use `#cbc2ea` lavender as a background fill — outline color only.
- Never use weight 600+ for display headlines.
- Never break serif/sans pairing.
- No more than one vivid color per surface.

## 8. Output
Generate `index.html`, `style.css`, and `script.js` as separate files. Use BEM naming. All copy in English. Invent a fictional brand name and product; do not reference "Statamic" or its trademarks. Include dark mode toggle, responsive layout, full accessibility, and all component states. Respect `prefers-reduced-motion`.
