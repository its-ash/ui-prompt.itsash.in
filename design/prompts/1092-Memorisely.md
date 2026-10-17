# Coding AI Prompt — Memorisely-Themed Landing Page

You are a senior frontend engineer. Build a complete, responsive landing page for a fictional brand (invent a brand name, product name, and all copy — never use "Memorisely" or any real trademark). Deliver three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) across the entire deliverable. No lorem-ipsum where real copy is implied; placeholders only where content is genuinely unspecified.

## 1. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly in `style.css`. Forbid `style="..."` attributes in HTML.
- Target all design properties, layouts, and states via class/ID selectors only.
- Keep HTML semantic, clean, and agnostic of visual styling so the look can change by editing CSS alone.

## 2. CSS Variables & Theme Tokens
Define all tokens in `:root` (and theme classes) using CSS variables. Required tokens:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Theme-specific (Memorisely palette): `--color-warm-parchment: #faf9f6`, `--color-paper-white: #ffffff` (use `#fefefe` where a near-white is needed for contrast safety), `--color-soft-linen: #f2f0e9`, `--color-ink-black: #171717`, `--color-jet-black: #000000`, `--color-carbon: #212121`, `--color-stone: #6e6e6e`, `--color-ash: #878787`, `--color-graphite: #414141`.
- Contrast pairing: every light background token pairs with a dark text token and every dark background token pairs with a light text token, in both themes.
- Light mode background must not be pure white; use Warm Parchment `#faf9f6` as the page canvas; reserve pure white for card surfaces and floating nav.
- Radius/shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`. Map: cards 8px, badges/pills/nav 100px, buttons 8px, product image cards 16px.
- Spacing/transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

## 3. Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background/text variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Render a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 4. Flexbox Layout & Mobile-First
- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless explicitly justified otherwise.
- Mobile-responsive out of the box: convert rows to columns on small viewports; prevent horizontal scrolling.

## 5. Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested.
- All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

## 6. Typography & Icons (Google Fonts Mandatory)
- Use Google Fonts for text and icons only. Include `<link>`/`@import` for Inter (weights 400, 500, 600) and bind to `--font-base`. Substitute stack: `system-ui, -apple-system, 'Segoe UI', sans-serif`.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.
- Apply negative tracking: -3.36px at 56px display, -1.28px at 32px headings, -0.88px at 22px, -0.72px at 18px; normal at body sizes. Never set 0px letter-spacing on display/heading sizes.
- Weight ladder stops at 600 (semibold ceiling).

## 7. Theme Aesthetic (Memorisely Style — Reused, Not Copied)
- Zero-chromatic: no blue, green, or accent hue. No chromatic color anywhere. Use grayscale weight shifts instead.
- Page canvas `#faf9f6`; cards/nav `#ffffff`; borders/dividers `#f2f0e9`.
- Primary text and primary action fills both `#171717` (shared near-black).
- Muted text `#6e6e6e`; tertiary `#878787`.
- Flat by default: no drop shadows beyond nav ring, button ring, and product image glow.
- Spacing rhythm: 10px element gap, 16px card padding, 80px section gap, max-width 1200px centered.
- Render all logos/secondary imagery in grayscale (Ash `#878787` range).
- Three radii only: 8px (cards/buttons), 100px (pills/nav/badges), 16px (product image cards). No radius below 8px on interactive elements.

## 8. Component States (Enforce for All Interactive Components)
Buttons: default (flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min 44x44px touch target), hover (brightness/shadow shift, `cursor: pointer`), focus (distinct focus ring via CSS variables), active (`transform: scale(0.97)`), loading (disabled, CSS spinner/animated Google Icon, no dimension distortion), disabled (`opacity: 0.5`, greyscale, `cursor: not-allowed`), success/error (temporary feedback via `--text-success`/`--text-error`).
Cards: default (flex, subtle borders, elevation via `--bg-secondary`), hover (`transform: translateY(-2px)` or shadow shift), focus-within (highlight border on child focus), loading skeleton (shimmer, no layout jump), empty state (Google Icon + guidance text).
Forms/inputs: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only; flex container wrapping label, input, error feedback container.
Modals: opening, open, loading, success/error, closing (CSS transitions); centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via Esc or overlay click.

## 9. Core UX & Micro-Interactions
- Responsive by default; fluid sizing; no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 10. Landing Page Sections
Build these sections in order, using invented fictional copy:
1. Floating pill navigation (brand mark left, nav links centered, no CTAs; white bg, 100px radius, nav ring shadow; 24–32px from top).
2. Hero: announcement pill ("New" + copy) above display headline (56px/600/-3.36px, max 800px centered), subtext (18px/400/#6e6e6e, max 560px), dual CTA row (filled dark button + ghost text link, 12–16px gap), social proof cluster (avatar stack + 5 stars + rating line + "Trusted by…" caption), then grayscale company logo strip.
3. Features: left-aligned section heading pair (eyebrow + 32px heading + optional subtext) + 3-column card grid (16px radius, no visible border, dark product screenshot visual, "● LIVE" badge top-left on white pill).
4. How It Works: section heading pair + 3 steps (numbered, Inter 500, tight tracking).
5. Testimonials: section heading pair + cards with avatar stack and star rating inline.
6. Pricing: section heading pair + 3 tiers (card surface white, hairline border, featured tier elevated via cream-to-white jump or subtle ring).
7. FAQ: section heading pair + accordion items (flex, keyboard operable, `aria-expanded`).
8. Final CTA: centered text stack with display-ish heading and primary dark button.
9. Footer: secondary links, grayscale logo, hairline border top.

## 11. Deliverables
- Files: `index.html`, `style.css`, `script.js`.
- Naming: BEM consistently.
- No unrequested placeholders where real copy was supplied; invent fictional copy throughout.

## 12. Dark Mode Toggle & Persistence
Implement theme toggle in `script.js` using `localStorage` + `prefers-color-scheme` fallback, toggling `.dark` class on `<html>`, updating `aria-pressed`/`aria-label`.

## 13. Accessibility & Motion
- Respect `prefers-reduced-motion` (disable transforms/animations).
- Focus rings visible in both themes.
- `aria-live` for dynamic feedback (form errors, toasts, loading).

Output only the finished prompt. No preamble, no closing commentary. Mirror the numbered-header structure above. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause instead of silently dropping it. Write all user-facing copy instructions in English (convert any non-English locale demands to English). Keep CSS variable names, class names, and file names in English/ASCII.
