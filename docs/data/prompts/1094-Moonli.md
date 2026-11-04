# Coding AI Prompt — Moonli Landing Page (Fictional Brand)

## 1. Theme & Brand Context

You are building a complete landing page in the **Moonli** visual style. This is a **light theme**. You must **invent a fictional brand name, product, and all copy** — never use the real brand name "Moonli", its logo, trademarks, or product names anywhere in the page. All user-facing copy must be in English.

## 2. CSS-First Architecture & Zero Inline CSS

- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors. HTML must remain semantic and agnostic of visual styling.
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply` directives). All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).
- Enforce one consistent class-naming convention (BEM or fixed utility set) across the entire deliverable — never mix conventions.

## 3. CSS Variables & Theme Tokens

Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)` for dark mode):

**Colors:**
- `--color-lime-voltage: #b8ff65` — atmospheric section backgrounds only (hero, feature blocks), never button fill, text color, or icon tint
- `--color-obsidian: #000000` — primary text, all borders, all icons, logo mark
- `--color-paper-white: #fefefe` — page background, card surfaces, nav fills (use #fefefe, not #ffffff, where near-white is needed)
- `--color-fog-white: #f3f3f3` — secondary card surface, alternating section backgrounds
- `--color-ash-border: #e2e2e2` — card borders, hairline dividers
- `--color-smoke: #757575` — muted helper text, secondary metadata, captions
- `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` — generic theme tokens mapped to the above

**Contrast pairing:** light backgrounds pair with dark text; dark backgrounds pair with light text — enforce for every theme.

**Light mode background:** do not default to pure white; use `#fefefe` where near-white is needed.

**Border radius & shadows:**
- `--radius-sm: 30px` (cards)
- `--radius-md: 30px`
- `--radius-lg: 40px` (nav pills, buttons)
- `--radius-circle: 9999px`
- `--shadow-sm`, `--shadow-md` — defined but unused (no shadows in this system; elevation via borders/surface shifts)

**Spacing & transitions:**
- `--spacing-gap: 20px`
- `--transition-fast: 150ms`
- `--transition-normal: 250ms`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Elevation/stacking:**
- `--z-dropdown`, `--z-modal`, `--z-toast`

**Typography:**
- `--font-base: 'DM Sans', sans-serif` (Google Fonts, weights 400/500/700)
- Type scale tokens: `--text-caption: 14px`, `--text-body-sm: 16px`, `--text-subheading: 24px`, `--text-heading-sm: 38px`, `--text-heading: 48px`, `--text-display: 58px`
- Letter-spacing: `-0.05em` at 58px, `-0.03em` at 38–48px, `-0.01em` at 14–24px
- Line-height: 1.08 (display), 1.13–1.17 (large headings), 1.26 (subheadings), 1.45–1.50 (body), 1.75 (captions)

**Spacing scale (4px base):** 12, 16, 20, 40, 60, 80, 100, 120, 184, 200px.

## 4. Mandatory Dark Mode

- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or `.dark` class.
- Background/text variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label`.

## 5. Flexbox & Mobile-First

- All layouts use Flexbox (`display: flex`). Default every flex container to `align-items: center` unless explicitly justified otherwise.
- Mobile-responsive out of the box: rows convert to columns on small viewports, no horizontal scrolling.

## 6. Typography & Icons

- Google Fonts only: DM Sans (400/500/700) for text, Google Material Symbols/Icons for icons. No inline SVGs or local icon files.

## 7. Component Specifications

### Button (Nav Pill, CTA, etc.)
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled interactions, CSS spinner or animated Google Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary styles via `--text-success`/`--text-error`.

### Card
- Default: flex layout, subtle border, elevation via `--bg-secondary` + CSS variables.
- Hover: shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight border when child receives focus.
- Loading (Skeleton): shimmer animation in CSS.
- Empty state: Google Icon + guidance text.

### Form & Input
- States: empty, focused (outline ring), filled, valid, invalid (error border/icon/text), disabled, read-only.
- Structure: flex container wrapping label, input, error feedback container.

### Modal
- States: opening, open, loading, success/error, closing (CSS transitions).
- UX: centered flex, backdrop overlay, Google Icon close button, focus trapping, close via Esc/overlay click.

## 8. Core UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth CSS transitions on all state changes, respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes, never color-only state communication, semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 9. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where content genuinely unspecified.

## 10. Moonli-Specific Style Rules (Mandatory)

- **Color discipline:** #b8ff65 used ONLY as full-section or full-card background — never as button fill, text color, or icon tint. All icons, borders, text #000000. System is binary black/white with lime as the single third voice. No additional chromatic colors (no blues, purples, status hues).
- **No shadows or gradients** — strictly flat; elevation via border color (1px #e2e2e2) and surface shifts (white → fog → lime).
- **Border radius:** 30px on all cards/containers, 40px on nav-pill elements, 9999px on circles. No sharp corners below 30px.
- **Typography:** DM Sans 700 with letter-spacing -0.05em for text ≥48px. Never looser than -0.01em at body sizes or tighter than -0.05em at display.
- **No lime text on white or white text on lime at small sizes** — keep large to preserve 17.5:1 contrast.
- **Imagery:** no photography, no gradients, no filled illustrations. Line art only — single-weight black strokes (~1.5px), depicting geometric 3D objects (monitors, coins, books, crystals). Illustrations sit on lime backgrounds as atmospheric decoration.
- **Layout:** centered, max-width ~1200px. Hero is full-width lime block with centered headline and flanking line illustrations. Below: horizontally scrolling row of network cards (#fefefe, 30px radius) inside fog-white container. Two-column sections: lime column + fog-white column, each 30px radius. Generous vertical spacing (40–70px between sections). Nav: minimal top bar with pill-shaped CTA on right. Spacious density — white space dominates, content as discrete rounded cards.
- **Pair sections as adjacent rounded blocks** rather than separating with dividers — radius and color contrast create structure.

## 11. Landing Page Sections to Build

1. **Hero** — full-width #b8ff65 block, 30px radius, 60px vertical padding. Headline at 58px DM Sans 700, #000000, letter-spacing -0.05em, line-height 1.08. Subtext at 16px DM Sans 400, line-height 1.5. Black single-stroke line illustrations flanking text. Scroll-down indicator (48px black circle, white chevron) overlapping boundary with next section.
2. **Features** — 3 cards (#fefefe, 1px #e2e2e2 border, 30px radius, 30–40px padding). Black headings 38–48px, body 16px.
3. **How It Works** — 3 steps, laid out as rounded blocks.
4. **Testimonials** — cards with quotes.
5. **Pricing** — 3 tiers as cards.
6. **FAQ** — accordion-style, keyboard accessible.
7. **Final CTA** — lime atmospheric block.
8. **Footer** — secondary links, logo mark.

## 12. Dark Mode Adaptation

In dark mode, invert surfaces: page background becomes dark (near-black), text becomes light, lime accent remains as atmospheric block but verify contrast. Borders shift to dark-appropriate values. Maintain the two-tone-plus-lime discipline.

## 13. Output

Generate `index.html`, `style.css`, and `script.js` implementing all of the above. Invent fictional brand name, product, and copy. Do not use "Moonli" or any real brand identifiers. Ensure no inline CSS, full accessibility, and responsive behavior.
