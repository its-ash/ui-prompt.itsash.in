# System Prompt: Chalkboard Lettering Landing Page — Build Specification

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready Landing Page on the first attempt. Theme: **Chalkboard Lettering** (café chalkboard signage, hand-lettered display type, matte slate grounds, chalk-dust texture).

**Deliverables:** Exactly three files — `index.html`, `style.css`, `script.js`. No inline `style="..."` attributes anywhere. No inline `<script>` blocks beyond one deferred entry-point reference to `script.js`. All user-facing copy in **English**.

---

## 1. ARCHITECTURE RULES

**1.1 CSS-First & Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target everything via class/ID selectors. HTML stays semantic and styling-agnostic.
- Use one consistent naming convention (BEM: `.btn--primary`, `.card__title`, `.faq__item`) across the entire deliverable — never mix conventions.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` exactly as provided in the reference CSS block, and additionally map to the canonical theme variables:

```css
:root {
  --primary: #f5f5f0;
  --secondary: #b8bdb4;
  --bg-primary: #1f2421;
  --bg-secondary: #262b27;
  --text-primary: #f5f5f0;
  --text-secondary: #b8bdb4;
  --text-success: #8fd9c4;
  --text-error: #f4a6c1;
  --border-default: #323830;
  --border-error: #f4a6c1;
  --border-success: #8fd9c4;
  --radius-sm: 3px; --radius-md: 8px; --radius-lg: 16px;
  --shadow-sm: 0 2px 6px rgba(0,0,0,0.40);
  --shadow-md: 0 0 8px rgba(245,245,240,0.18);
  --spacing-gap: 16px;
  --transition-fast: 0.15s;
  --transition-normal: 0.3s;
  --ease-standard: cubic-bezier(0.34, 1.2, 0.64, 1);
  --z-dropdown: 100; --z-modal: 200; --z-toast: 300;
  --font-base: 'Patrick Hand', 'Comic Neue', cursive;
  --font-display: 'Caveat', 'Kalam', cursive;
}
```

Keep the theme's extended tokens (`--color-surface-2`, `--color-accent: #f4a6c1`, `--color-chalk-teal: #8fd9c4`, `--color-chalk-yellow: #f5e08a`, `--chalk-texture`, `--wobble`, `--shadow-chalk-dust`, `--shadow-chalk-glow`, spacing scale) alongside them.

**1.3 Mandatory Dark Mode**
- The Chalkboard theme is natively dark (`--bg-primary: #1f2421`). Still, you MUST define a light-mode variant under `@media (prefers-color-scheme: light)` and a `.light` class override: light mode uses a warm near-white chalk-paper ground (`#fefefe` / `#f2f1ea` surfaces) with the slate `#1f2421` as text color. **Contrast pairing rule:** every light background token pairs with dark text, every dark background pairs with light text — in both modes.
- Provide a visible theme toggle button in the nav (Google Material Symbols icon: `dark_mode` / `light_mode`), with `aria-pressed` and `aria-label="Toggle dark mode"`.
- Persist choice in `localStorage`; fall back to `prefers-color-scheme` on first visit. Switching must not require HTML restructuring.

**1.4 Flexbox Layout, Mobile-First**
- Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- Mobile-first: hero, feature grid, pricing tiers, and footer link columns stack vertically on small viewports and expand to multi-column rows via `flex-wrap` / media queries. No horizontal scrolling at any width.

**1.5 Framework**
- Plain CSS driven by the provided design tokens (no Tailwind unless it maps utilities back to these variables). Reusable generic classes: `.btn`, `.btn--primary`, `.card`, `.input`, `.badge`, `.nav`.

**1.6 Typography & Icons — Google Fonts Only**
- Load via `<link>`: **Caveat** (display/headings), **Patrick Hand** (body), and Google Material Symbols (outlined) for all icons.
- Headings use `--font-display` at generous sizes (`--text-4xl`/`--text-5xl` hero). Body uses `--font-base`.
- **No inline SVGs, no local icon files.**

---

## 2. THEME DIRECTION — CHALKBOARD LETTERING

- **Ground:** matte near-black/slate (`#1f2421`) with the `--chalk-texture` radial-gradient dust grain layered on body and cards.
- **Lettering:** playful hand-drawn display type with varied stroke weight; headings get a slight `--wobble` rotation and chalk-white color; accents in `--color-chalk-teal`, `--color-chalk-yellow`, `--color-accent` (pink).
- **Doodled flourishes:** dashed/dotted borders (`2px dashed var(--color-text-muted)`) framing sections, underlines beneath headings (use `border-bottom` or a `::after` chalk-stroke line — CSS only, no new decorative markup beyond standard elements), and hand-drawn uneven edges via subtle per-element rotations (`rotate(-0.4deg)` / `rotate(0.6deg)` alternating).
- **Buttons:** transparent chalk-outline buttons; primary buttons are chalk-filled (white bg, dark text) with `--shadow-chalk-dust`.
- **Cards:** slate surface, dashed or solid uneven borders, `--radius-lg`, dust shadow.
- **Badges:** pill outlines in chalk-teal, rotated 1deg, display font.

---

## 3. REQUIRED SECTIONS

Build in order, all inside semantic HTML5 landmarks (`header`, `main`, `section`, `footer`):

1. **Nav/Header** — logo wordmark (display font), nav links, theme toggle, primary CTA button.
2. **Hero** — display-font headline (`--text-5xl`), subheadline, two CTAs (`.btn--primary` + `.btn`), doodled underline flourish under the headline, badge above the title.
3. **Features** — 3 `.card` components in a responsive flex row (stacks on mobile), each with a Google Material Symbol icon, title, description.
4. **How It Works** — 3 numbered steps; step numbers rendered as large rotated display-font numerals in chalk-yellow; connected by dashed border lines (CSS `::after` on step containers).
5. **Testimonials** — 2–3 quote cards with attribution, chalk-style quotation marks via display font.
6. **Pricing** — 3 tiers; middle tier highlighted (chalk-yellow dashed border, `--shadow-chalk-glow`, "Most Popular" `.badge`). Each tier: name, price, feature list (Material Symbols `check` icons), CTA button.
7. **FAQ** — accessible accordion using `<details>`/`<summary>` (no JS-required widgets), styled with chalk borders; summary shows Material Symbols `expand_more` icon.
8. **Final CTA** — full-width chalkboard panel with dashed doodle border, headline, primary button.
9. **Footer** — secondary link columns (Product, Company, Support), copyright line, social icons (Material Symbols).

---

## 4. COMPONENT STATES (ALL VIA CSS CLASSES)

**Buttons:** default (flex, centered, `gap: 0.5rem`, min 44×44px touch target); hover (chalk-glow shadow + slight counter-rotation lift); focus-visible (`outline: 2px solid var(--color-chalk-yellow); outline-offset: 3px`); active (`transform: scale(0.97)` combined with wobble); loading (`.is-loading` — disabled, CSS spinner, no dimension shift); disabled (`opacity: 0.4; cursor: not-allowed`); `.btn--danger` visually distinct (pink `--color-accent` border/text) in both modes.

**Cards:** default; hover (`translateY(-2px)` + shadow shift); `:focus-within` (chalk-yellow border highlight); skeleton (`.is-loading` shimmer keyframes).

**Forms/Inputs:** use `.input` — empty, focused (chalk-yellow underline), filled, valid (`--border-success` + `check` icon), invalid (`--border-error`, error text in `--text-error`, `error` icon), disabled, read-only. Wrap label + input + error container in a flex `.input-group`. Newsletter form in the footer or final CTA must validate with `aria-live="polite"` error feedback.

**FAQ/Modal-like interactions:** `<details>` accordions need no JS. If any overlay is used, trap focus, close on `Esc`, animate open/close via CSS transitions, respect `--z-modal`.

---

## 5. UX & ACCESSIBILITY (NON-NEGOTIABLE)

- Fluid responsive sizing; no horizontal overflow at any breakpoint.
- All state changes transition with `transition: var(--transition-normal) var(--ease-standard)`; wrap all motion in `@media (prefers-reduced-motion: reduce)` to disable transitions/animations.
- WCAG AA contrast in **both** light and dark modes — validate before finishing.
- Never rely on color alone: pair icons/text with state colors.
- Semantic HTML5, logical focus order, full keyboard operability, ARIA labels on the theme toggle and any custom widget, `aria-live` regions for dynamic feedback.
- Every click/hover triggers visible feedback. No lorem ipsum — write real, on-theme café-chalkboard copy in English.

---

## 6. OUTPUT

Produce the complete `index.html`, `style.css`, and `script.js` (theme toggle + localStorage persistence + form validation feedback only) in a single response. No placeholders, no TODOs, no inline styles.
