You are an expert frontend engineer. Build a complete, production-ready landing page using a **CSS-first architecture** with **zero inline CSS**. Create separate `index.html`, `style.css`, and `script.js` files. Use semantic HTML5, Tailwind CSS utility classes (mapped to CSS variables), and Google Fonts (Season VF substitute: Cormorant Garamond; Uncut Sans substitute: DM Sans; Modern Era Mono substitute: IBM Plex Mono) plus Google Material Symbols for icons. Never use raw inline SVGs or local icon files.

## 1. Theme: Baselayer — "electric ledger in midnight"

Invent a fictional brand name, product, and copy. Never use the real brand name, logo, trademarks, or product names. Treat the interface as an institutional document opened onto a luminous risk-analysis console.

### 1.1 CSS Variables & Theme Tokens

Define all tokens in `:root` and provide dark mode under `@media (prefers-color-scheme: dark)` plus a `.dark` class selector. Persist theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit, with a visible toggle control carrying correct `aria-pressed`/`aria-label`.

Colors:
- `--color-ledger-navy`: `linear-gradient(90deg, #09234f 0%, #384ce3 100%)`
- `--color-registry-blue`: `#384ce3`
- `--color-network-teal`: `#1888a2`
- `--color-paper-white`: `#fefefe`
- `--color-ink-black`: `#000000`
- `--color-carbon`: `#121012`
- `--color-mint-paper`: `#eff5f0`
- `--color-sky-paper`: `#c4f0ff`
- `--color-rule-gray`: `#e5e5e5`
- `--color-steel-rule`: `#ced3dc`
- `--color-quiet-gray`: `#595959`

Standard tokens:
- `--primary`: `#384ce3`
- `--secondary`: `#1888a2`
- `--bg-primary`: `#fefefe`
- `--bg-secondary`: `#eff5f0`
- `--text-primary`: `#000000`
- `--text-secondary`: `#595959`
- `--text-success`: `#1888a2`
- `--text-error`: `#d32f2f`
- `--border-default`: `#e5e5e5`
- `--border-error`: `#d32f2f`
- `--border-success`: `#1888a2`
- `--radius-sm`: `4px`
- `--radius-md`: `4px`
- `--radius-lg`: `4px`
- `--shadow-sm`: `none`
- `--shadow-md`: `none`
- `--spacing-gap`: `12px`
- `--transition-fast`: `150ms ease`
- `--transition-normal`: `250ms ease`
- `--ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown`: `100`
- `--z-modal`: `200`
- `--z-toast`: `300`
- `--font-base`: `'DM Sans', sans-serif`
- `--font-display`: `'Cormorant Garamond', serif`
- `--font-mono`: `'IBM Plex Mono', monospace`

Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text in both themes.

### 1.2 Typography Scale

- `--text-eyebrow`: Modern Era Mono 500, 12px, 1.15, 0px
- `--text-nav`: Uncut Sans 500, 15px, 0.8, 0px
- `--text-body`: Uncut Sans 400, 16px, 1.5, 0px
- `--text-mono-action`: Modern Era Mono 500, 16px, 1.15, 0px
- `--text-body-large`: Uncut Sans 400, 20px, 1.4, -0.18px
- `--text-panel-heading`: Uncut Sans 500, 24px, 1.35, -0.24px
- `--text-section-heading`: Season VF 515, 48px, 1.1, -0.24px
- `--text-hero-display`: Season VF 515, 72px, 1.02, -0.36px

### 1.3 Spacing & Layout

Base unit 4px. Spacing scale: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 52, 64, 80, 96, 164. Page max-width 1312px. Section gap 32px. Card padding 20px. Element gap 12px. Border radius: cards 0px, links 4px, buttons 4px, navigation 4px. No box shadows; depth via 1px borders, opposing surface colors, grid overlays.

## 2. Layout & Component Rules

- Flexbox for all layouts; default `align-items: center` unless justified exception.
- Mobile-first responsive; no horizontal scrolling.
- All utility classes map to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).
- One consistent class-naming convention (BEM) across the entire deliverable.

### 2.1 Button States

Style all states via CSS classes: default (flex, center, gap 0.5rem, min 44x44px), hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring via CSS variables), active (transform scale 0.97), loading (disabled interactions, CSS spinner or animated Google Icon, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).

### 2.2 Card States

Default (flex layout, subtle borders, elevation via `--bg-secondary`), hover (elevation/shadow shift or translateY(-2px)), focus-within (highlight borders), loading skeleton (shimmer animation, no layout jump), empty state (Google Icon + guidance text).

### 2.3 Form & Input States

Empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, and error feedback.

### 2.4 Modal States

Opening, open, loading, success/error, closing (all CSS transitions). Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. Required Sections

Build these sections in order:

1. **Hero** — Centered Ledger Navy hero with Paper White Season VF 72px/515 headline at 73.44px line-height and -0.36px tracking. Place a 4px-radius Ledger Navy conversion control with Paper White Modern Era Mono 16px/500 uppercase text beneath it with a 20px gap, then overlap a Registry Blue verification console at the lower edge. Use a data-grid backdrop (low-contrast Registry Blue cross-grid over Ledger Navy, bounded by thin vertical rules, isolated Paper White plus signs, flat no shadow).

2. **Features** — Three cards (API Registry Card Trio style): one Carbon card with Paper White text, two Paper White cards with Ink Black text, 1px Steel Rule borders, 0px radius, 20px padding, 12px gaps. Use Capability Surface Link styling for large linked panels where applicable.

3. **How It Works** — Three steps with numbered Modern Era Mono labels, Uncut Sans copy, 1px Rule Gray dividers.

4. **Testimonials** — Customer Story Mosaic: square/rectangular cells without rounding — Paper White quote cells, photographic portrait crops, Mint Paper brand cells, Ink Black logo cells, 1px Rule Gray divisions, 20px padding for copy cells.

5. **Pricing** — Three tiers with Metric Tile styling (Mint Paper or Paper White, 20px padding, 0px radius, 1px Rule Gray division). Metric labels in Modern Era Mono 12px/500 uppercase, large values in Season VF with Ink Black text.

6. **FAQ** — Accordion-style with Underlined Mono Text Link styling for toggles, 1px Rule Gray dividers.

7. **Final CTA** — Centered Season VF statement over Ledger Navy with conversion button.

8. **Footer** — Dark navigation shell with secondary links, 1px Paper White divider at reduced opacity, Uncut Sans 15px/500 nav labels.

Also include: Dark Desktop Header (80px Ledger Navy bar, Paper White logo/nav, 1px Paper White divider at reduced opacity, Uncut Sans 15px/500 at 12px line-height) and Light Sticky Header (Paper White 80px bar, Ink Black nav, Registry Blue logo, 1px Rule Gray bottom rule). Include Customer Logo Rail (Paper White full-width field, Ink Black partner marks in one horizontal row, 1px Rule Gray lines, no rounded containers).

## 4. UX & Accessibility

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Sufficient contrast in both light and dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 5. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- BEM naming convention throughout.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where genuinely unspecified.

## 6. Edit Mode

If modifying existing markup, never introduce new HTML tags, components, or DOM nodes. Work only within existing element/class structure. Do not write JS for form validation, popups/modals, or utility functions — ask the user how they want it handled. If a style change requires new markup, stop and ask.

## 7. Dark Mode

Mandatory. Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Background and text variables switch seamlessly without HTML restructuring. Persist via `localStorage`, fallback to `prefers-color-scheme`. Visible toggle with correct `aria-pressed`/`aria-label`.

## 8. Google Fonts & Icons

Include Google Font links for Cormorant Garamond, DM Sans, IBM Plex Mono. Use Google Material Symbols for all icons. Forbid raw inline SVGs or local icon files.

Output only the finished prompt itself, no preamble or closing commentary. Mirror the structure above with numbered headers and bolded sub-rules. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause. Write all user-facing copy in English. Keep all CSS variable names, class names, and file names in English/ASCII.
