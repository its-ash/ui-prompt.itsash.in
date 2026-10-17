# Landing Page — Allfeat Style (Fictional Brand)

## 1. Project Overview & Architecture

Build a complete, responsive landing page for a **fictional music-infrastructure brand** invented by you. Reuse the visual style of the provided Allfeat reference only — never use the real brand name, logo, trademarks, or product names. Invent your own brand name, product, copy, and testimonials.

Deliverables: separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere in the HTML. All styling lives in `style.css` via class/ID selectors only. Use one consistent class-naming convention (BEM) across the entire deliverable.

## 2. Theme Tokens (CSS Variables)

Define all tokens in `:root` and a `.dark` class / `@media (prefers-color-scheme: dark)` block. Dark mode is the default and only resting state for this theme; still provide the toggle infrastructure (localStorage persistence, fallback to prefers-color-scheme, visible toggle with correct `aria-pressed`/`aria-label`).

Colors:
- `--color-charcoal-stage: #151515` (page canvas, primary surface)
- `--color-warm-cream: #fffbeb` (primary text, headings, nav links — never pure white)
- `--color-card-edge: #383835` (inset 1px card borders, separators)
- `--color-mute-cream: #b8b8b8` (secondary body text, subdued descriptions)
- `--color-ash-gray: #a6a6a6` (subdued heading text, inactive link borders)
- `--color-bronze-veil: #504f4a` (badge borders, low-emphasis outlines)
- `--color-signal-teal: #00b18c` (only chromatic CTA fill)
- `--color-ember-coral: #ff4a5f` (eyebrows, gradient accents, emotional emphasis only)

Map these to the generic token names required by the architecture: `--primary` = signal teal, `--secondary` = ember coral, `--bg-primary` = charcoal stage, `--bg-secondary` = charcoal stage (card surface is identical to canvas), `--text-primary` = warm cream, `--text-secondary` = mute cream, `--text-success` = signal teal, `--text-error` = ember coral, `--border-default` = card edge, `--border-error` = ember coral, `--border-success` = signal teal.

Contrast pairing: light text tokens always pair with dark backgrounds; no light backgrounds exist in this theme.

Border radius: `--radius-sm: 12px` (cards, images), `--radius-md: 12px`, `--radius-lg: 900px` (buttons, badges, nav capsules). Shadows: `--shadow-subtle: rgb(56,56,53) 0px 0px 0px 1px inset`, `--shadow-subtle-2: rgba(255,251,235,0.25) 0px 0px 0px 2px inset`. Spacing: `--spacing-gap: 16px`, transitions `--transition-fast`, `--transition-normal`, `--ease-standard`. Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

Typography: Google Font TASA Orbiter (weights 400, 500, 600) via `<link>`/`@import`, bound to `--font-base`. Substitute Inter/Manrope if unavailable. Type scale tokens: `--text-caption` (13px, lh 1.1, ls 0.2px), `--text-body` (16px, lh 1.2), `--text-body-lg` (18px, lh 1.2), `--text-subheading` (20px, lh 1.2), `--text-heading-sm` (24px, lh 1.1), `--text-heading-lg` (40px, lh 1), `--text-display` (56px, lh 0.95, ls -1.12px). Display tracking -0.02em; eyebrow/label tracking +0.02em.

## 3. Layout & Global Rules

- Page max-width 1200px centered; full-bleed dark canvas.
- Flexbox for all layouts; every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first, responsive, no horizontal scroll; convert rows to columns on small viewports.
- Section vertical gap 80px; card padding 24px; element gap 16px.
- Use Tailwind CSS or clean custom CSS driven by Tailwind `@layer`/`@apply`, mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).
- Google Material Symbols/Icons only; no raw inline SVGs or local icon files.
- Smooth CSS transitions on all state changes respecting `prefers-reduced-motion`.
- Accessibility: semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` regions for dynamic feedback, sufficient contrast in the dark theme, never rely solely on color for state.

## 4. Component States (Enforce All)

Buttons (pill, 900px radius, min 44x44px touch target): default (flex, gap 0.5rem), hover (brightness/shadow + cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (disabled, CSS spinner, no dimension distortion), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback via success/error tokens).

Cards (12px radius, inset 1px #383835 border, no drop shadow, fill identical to canvas): default flex layout, hover (translateY -2px), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance text).

Forms/inputs: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only; flex container wrapping label, input, error feedback.

Modals: opening/open/loading/success-error/closing animated via CSS; centered flex, backdrop overlay, Google Icon close button, focus trapping, close via Esc/overlay click.

## 5. Sections to Build

1. **Hero** — full-viewport radial teal wash (#00b18c ~25% opacity fading to transparent over ~70% viewport height) on #151515. Dead-centered: fictional triangular/constellation logo glyph in warm cream at 56px, display headline (56px, weight 600, #fffbeb, lh 0.95, ls -1.12px) with mixed-weight secondary clause in #504f4a weight 400, then a single Signal Teal pill button "Discover how" (900px radius, #00b18c fill, #fffbeb text 14px weight 500, padding 16px horizontal, 2px inset #fffbeb25 ring). Community nodes (circular 80-100px discs, #151515 fill, 1px #383835 border) orbit the center holding partner logos in #b8b8b8.

2. **Features** — 3 inset-border cards in a row (2-up/3-up responsive, stacked on mobile). Each: 12px radius, 1px inset #383835 border, 24px padding, image area top with 12px radius bleeding to edges, eyebrow label in #00b18c or #ff4a5f, heading, body text in #b8b8b8. One card may use the coral gradient edge trace (1px linear gradient #151515 → #ff4a5f → #151515) to signal featured content.

3. **How It Works** — 3 numbered steps, centered eyebrow + display headline above, then 2-up/3-up layout. Each step: number, heading, body.

4. **Testimonials** — 2-3 cards with quote, author name, role, circular avatar.

5. **Pricing** — 3 tiers in cards. Middle/featured tier uses coral gradient edge trace. Each: tier name, price, feature list, CTA button (teal filled for recommended, ghost pill for others).

6. **FAQ** — accordion-style questions with expand/collapse animated via CSS, using Google Icons for chevrons.

7. **Final CTA** — centered section with display headline and a single teal pill button, backed by teal radial wash.

8. **Footer** — compact, dark, text-only, secondary links, nav capsule style where applicable.

## 6. Navigation

Fixed top-left wordmark + top-right floating nav capsule (900px radius, #151515 fill, 1px #383835 border, padding 9px 16px) containing nav links (14px #fffbeb weight 500), thin dividers, a caret glyph, and a final "Get started" filled Signal Teal pill button. No full-width nav bar.

## 7. Do's and Don'ts (Enforce)

Do: use #00b18c as the only chromatic CTA fill; set all buttons/badges/nav capsules to 900px radius (only cards/images at 12px); pull display type to -0.02em tracking and lh 0.95-1.00; use the 1px inset #383835 border as the sole card depth treatment (no drop shadows); reserve #ff4a5f for eyebrows, gradient accents, and emotional emphasis runs inside headlines (never button fill or body text); anchor heroes/major sections in a soft teal radial wash; keep body text in TASA Orbiter weight 400 at 16-18px in #fffbeb or #b8b8b8, never below 13px.

Don't: introduce a new accent color; use 8px/16px radius on cards or images; use pure white #ffffff for text (always #fffbeb); apply drop shadows anywhere (elevation is inset-only); break the single-typeface rule; set headlines in light/thin weights (600 floor for display, 400-500 only as muted secondary clauses); fill buttons with #ff4a5f.

## 8. Gradient System

1. Teal Stage Wash — radial, centered, #00b18c at 20-35% opacity fading to transparent. Behind hero headlines and major section openings. Never on containers or text.
2. Coral Edge Trace — linear-gradient(90deg, #151515 0%, #ff4a5f 50%, #151515 100%), 1px border on select highlight cards. Low frequency.
3. Diagonal Ember — linear-gradient(185deg, #fffbeb 0px, #ff4a5f 40%, #151515 77%), sparingly as full-section emotional backdrop in the lower 30% of a page.

## 9. Imagery & Icons

Illustrated 3D isometric graphics in teal/coral/cream/charcoal with hard edges (no gradients on objects). Photography restricted to small circular partner portraits as soft black-and-white crops. Icons are monoline geometric marks in #b8b8b8. Use Google Material Symbols/Icons only.

## 10. Destructive Actions

Any `.btn-danger` or delete action must be visually distinct in both light and dark themes (use ember coral outline treatment, never as a filled button).

## 11. Output

Output only the three files (`index.html`, `style.css`, `script.js`) with the structure and rules above. No placeholders where real copy is expected; invent fictional brand name, product, and copy. Ensure all user-facing copy is in English. No preamble or commentary.
