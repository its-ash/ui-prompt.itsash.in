You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete Landing Page on the first attempt — produce the final, production-ready code immediately, in a single pass, following every rule in this specification.

## Project Brief

- **Theme:** Suprematism — Kazimir Malevich, 1913–1920s. Pure geometric abstraction floating in space: circles, rectangles, crosses, and tilted planes on a near-white ground. Limited palette (black, red, blue, ochre). Feeling over representation. Hard flat edges, zero rounding (circles are the only curve), zero shadows — forms float through position and tilt alone.
- **Signature Move:** a solid-color rectangle tilted 8deg (`--tilt-plane`) floating behind or beside an element — repeated on the nav, cards, the featured pricing tier, the Final CTA backdrop, and as the button's own hover tilt.
- **Sections (in order):** Sticky Nav, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ (accordion), Final CTA (email capture), Footer with secondary links.
- **Light/Dark:** the source specification does not declare modes; you must design and validate both light and dark modes before publishing.
- **Copy:** all user-facing copy in English. No product was specified — invent one coherent fictional product/brand that fits the Suprematist aesthetic (e.g., a geometric design/creative tool) and write real, final copy for every section. Lorem ipsum is prohibited.
- **Reference baseline:** the Suprematism token/component CSS supplied with the request is canonical. Extend it; do not contradict it. Migrate its `--color-*` names to the mandatory token names defined in §1.2.

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS

- **No Inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID Selectors Only:** every design property, layout rule, and state must be targeted via class or ID selectors in `style.css`.
- **Minimal HTML Modifications:** HTML must remain semantic and style-agnostic. The only presentational elements permitted are decorative geometric shapes: empty `<div>`s with dedicated classes and `aria-hidden="true"` (see §2.5).

### 1.2 CSS Variables & Theme Tokens

All visual tokens must live in `:root` (and the dark-mode scopes in §1.3) using these **mandatory names**. Light mode baseline:

```css
:root {
  /* backgrounds */
  --bg-primary: #f7f7f5;         /* page ground */
  --bg-secondary: #ffffff;      /* surface — theme-declared value, see exception below */
  --bg-surface-strong: #efefec; /* inset/raised surface */
  /* brand */
  --primary: #d21f1f;           /* Suprematist red */
  --secondary: #1c4fa0;         /* Suprematist blue */
  --color-black: #16161a;
  --color-ochre: #e0a415;
  /* text */
  --text-primary: #16161a;
  --text-secondary: #55555c;
  --text-success: #1c4fa0;      /* blue doubles as success within the limited palette */
  --text-error: #d21f1f;
  /* borders */
  --border-default: #16161a;
  --border-success: #1c4fa0;
  --border-error: #d21f1f;
  /* geometry — pure forms, no depth */
  --radius-sm: 0px; --radius-md: 0px; --radius-lg: 0px; --radius-pill: 999px;
  --shadow-sm: none; --shadow-md: none;
  /* motion & space */
  --spacing-gap: 1rem;
  --transition-fast: 150ms var(--ease-standard);
  --transition-normal: 300ms var(--ease-standard);
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* stacking */
  --z-dropdown: 100; --z-modal: 200; --z-toast: 300;
  /* type */
  --font-base: 'Jost', 'Futura', 'Helvetica Neue', system-ui, sans-serif;
  --font-display: 'Jost', 'Futura', 'Helvetica Neue', sans-serif;
  /* signature */
  --tilt-plane: 8deg;
  --focus-ring: var(--secondary);
}
```

- **Pure White Exception:** the theme explicitly declares `surface: #ffffff`; keep that exact value for `--bg-secondary`. Any near-white not explicitly declared by the theme must use `#fefefe`, never `#ffffff`.
- **Contrast Pairing:** every light background token must pair with a dark text token and every dark background token with a light text token — enforced in both themes, not just the default.
- **Success/Error Semantics:** within the limited four-color palette, blue (`--text-success`/`--border-success`) signals success and red (`--text-error`/`--border-error`) signals error. Because red is also the brand primary, error and success states must never rely on color alone — always pair with an icon and text message (§3).

### 1.3 Mandatory Dark Mode Support

Dark mode must always be defined. The source spec does not declare modes, so you design it: a dark ground with light geometric forms is equally authentic Suprematism.

- **Implementation:** define dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`. Suggested starting values — verify WCAG AA and adjust:

```css
--bg-primary: #131316;
--bg-secondary: #1d1d22;
--bg-surface-strong: #26262d;
--text-primary: #f7f7f5;
--text-secondary: #a8a8b0;
--border-default: #f7f7f5;   /* the hard 2px black borders invert to off-white */
--text-error: #ff7575;  --border-error: #ff7575;
--text-success: #8ab0f0; --border-success: #8ab0f0;
--focus-ring: #8ab0f0;
```

- **Hue Rule:** `--primary`, `--secondary`, and `--color-ochre` keep their original values for large planes and filled buttons (white text on `#d21f1f` passes AA). Any red/blue/ochre used as small text, icons, or thin borders on the dark ground must use the lightened variants above.
- **Theme Switching:** background and text variables must switch seamlessly with zero HTML restructuring.
- **Persistence:** store the user's choice in `localStorage`, fall back to `prefers-color-scheme` on first visit, and apply the `.dark` class as the very first operation in `script.js` to minimize flash. Provide a visible toggle in the nav with correct `aria-pressed` and `aria-label` ("Switch to dark theme" / "Switch to light theme") and a Material `dark_mode`/`light_mode` icon that swaps with the state.

### 1.4 Flexbox Layout & Mobile-First Alignment

- **Default Alignment Rule:** every flex container must default to `align-items: center` unless an exception is explicitly justified (e.g., card text columns may use `stretch` so paragraphs run full-width — state the exception in a CSS comment).
- **Mobile-Friendly First:** all flex rows must convert to columns at ≤768px. Build styles mobile-first, then enhance upward.
- **No Horizontal Scrolling:** the page must not scroll horizontally at any width down to 320px. Decorative tilted planes must be clipped by their relatively-positioned parent sections (`overflow: clip`); additionally set `overflow-x: hidden` on `body`.

### 1.5 Framework Default & Tailwind CSS Integration

- Use Tailwind CSS (CDN or build) with component styles written via `@layer components` / `@apply`, or clean custom CSS — but every utility must map back to the CSS variables above or to the generic reusable class names `.btn`, `.card`, `.input`, `.badge`, `.nav` supplied in the reference baseline. Keep and extend those base component styles; do not restyle from scratch.

### 1.6 Typography & Icons (Google Fonts Mandatory)

- **Text:** load Google Fonts `<link>` tags in `<head>`. **Exception:** Futura is not available on Google Fonts — load **Jost** (weights 400, 500, 700) as the geometric Futura-style primary for both `--font-base` and `--font-display`; keep `'Futura', 'Helvetica Neue'` only as local fallbacks in the stack.
- **Icons:** use Google Material Symbols (Outlined) via the Google Fonts link. Required ligature names include: `menu`, `close`, `dark_mode`, `light_mode`, `arrow_forward`, `check`, `expand_more`, `error`, `check_circle`, `progress`. Raw inline SVGs and local icon files are explicitly forbidden.
- **Icon Accessibility:** icons are `aria-hidden` when decorative; every icon-only button (e.g., theme toggle, social links) must carry an `aria-label`.

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component Requirements

Style all states via CSS classes on the `.btn` block:

- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` — bold uppercase Jost, 2px solid `--border-default` border, `--radius-md` (0px), no shadow, minimum touch target 44×44px.
- **Hover:** the signature tilt — `transform: rotate(-1.5deg)` — plus `cursor: pointer`.
- **Focus:** distinct keyboard ring — `:focus-visible { outline: 3px solid var(--focus-ring); outline-offset: 2px; }`.
- **Active/Pressed:** `transform: scale(0.97)` with the hover rotation resetting to 0deg.
- **Loading:** disables interaction, prevents double-clicks, and renders a CSS-only spinner — a small tilted square rotating on its axis (on-theme) or the Material `progress` icon with a spin animation — without distorting button dimensions (fix the button's width during loading) and with `aria-busy="true"`.
- **Disabled:** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`, no transforms.
- **Success/Error:** temporary feedback classes `.btn--success` / `.btn--error` driven by `--text-success` / `--text-error`, always paired with an icon or text change, never color alone.
- **Variants:** `.btn--primary` (red ground, white text), `.btn--secondary` (surface ground, black border), and `.btn--danger` if any destructive action appears — visually distinct in both themes.

### 2.2 Card Component Requirements

- **Default:** flexible flexbox layout, 2px solid `--border-default` border, 0px radius, no shadow, `--bg-secondary` ground, generous padding. Keep the theme's `.card::after` — the ochre tilted bar floating off the lower-left corner.
- **Hover:** `transform: translateY(-2px)` (an optional additional `rotate(-0.5deg)` is permitted), transitioned with `var(--transition-normal)`.
- **Focus-within:** when a child link or button receives focus, the card border shifts to `var(--secondary)`.
- **Loading (Skeleton):** define `.card--skeleton` with a CSS shimmer keyframe animation so future async content causes no layout jumps.
- **Empty State:** define `.card--empty` — a structured fallback with a large Material icon and clear guidance text.

### 2.3 Form & Input Requirements

The Final CTA contains an email capture form. Structure it as a flex column wrapping a `<label>`, the `.input` field, and a dedicated error feedback container (`<p>` with `aria-live="polite"`).

- **States:** Empty, Focused (accent ring: border `var(--secondary)` plus `box-shadow: 0 0 0 3px color-mix(in srgb, var(--secondary) 25%, transparent)`), Filled, Valid (`--border-success` + `check` icon), Invalid (`--border-error` + `error` icon + message text in the error container — never color alone), Disabled, Read-only.
- **Behavior:** on submit, validate the email in `script.js`; on failure set `aria-invalid="true"` and populate the live error container; on success show the button's loading state (simulated 600–900ms), then its success state plus a confirmation toast (§2.5).

### 2.4 Modal / Popup Requirements

No modal is required for this landing page — do not add one. If any overlay is ever introduced, it must follow: animated opening/closing via CSS transitions, centered flex container (`align-items: center`), backdrop overlay, Material `close` icon button, keyboard focus trapping, and closing via `Esc` or overlay click, layered at `--z-modal`.

### 2.5 Section-by-Section Requirements

- **Nav (sticky):** `.nav` per the baseline — flex, `align-items: center`, 2px border, surface ground, and its `::before` red tilted square. Contents: brand (a CSS-composed geometric mark — black square with a small red circle — `aria-hidden`, plus wordmark text), links to Features / How It Works / Testimonials / Pricing / FAQ, the theme toggle (§1.3), and a compact `.btn--primary` CTA. At ≤768px collapse links behind a `menu` icon button toggling an absolutely-positioned dropdown panel (`--z-dropdown`, surface ground, 2px border), with `aria-expanded`, `Esc` to close, and managed focus.
- **Hero:** two-column flex (column on mobile). Left: `.badge` kicker, `<h1>` in display Jost (uppercase, tight leading, `clamp()` sizing), subcopy, and a CTA row (`.btn--primary` + `.btn--secondary`). Right: the floating composition — a large tilted black square (homage to Malevich's "Black Square"), a red rectangle, a blue bar or cross, an ochre plane, and one circle — pure CSS shapes as empty `aria-hidden` classed divs (`.geo-square`, `.geo-circle`, etc.), gently floating via staggered translate/rotate keyframes (6–8s), `pointer-events: none`, clipped by the section, never overlapping text or buttons.
- **Features:** section header (kicker, `<h2>`, intro line) then 3 `.card` components in a wrapping flex row (equal `flex-basis`, column on mobile). Each card: a Material icon inside a geometric tile (alternating black square / red circle), `<h3>`, paragraph; ochre `::after` bar; hover lift.
- **How It Works:** 3 steps in a flex row (column on mobile). Each step: its numeral inside a tilted square (step 1 black, step 2 red, step 3 blue, rotated ±`--tilt-plane`), `<h3>`, text. An optional thin black connecting line on desktop is decorative and `aria-hidden`.
- **Testimonials:** 3 `.card` components, each with a `<blockquote>`, an initials avatar (colored circle — the only permitted curve — black/red/blue grounds with white initials), and name + role.
- **Pricing:** 3 tiers. The featured middle tier uses `.card--featured`: a red tilted plane floating behind it via `::before` (rotated `--tilt-plane`, `z-index: -1`) plus a `.badge` "Most Popular" (pill radius, blue ground, white text). Each tier: name, large display price, feature list (one Material `check` icon per line), and a CTA (featured: `.btn--primary`; others: `.btn`).
- **FAQ:** an accordion of 5–6 items. Each item: `<h3><button class="faq__trigger" aria-expanded="..." aria-controls="...">` with a rotating `expand_more` icon (180deg when open), and a matching panel animated via `grid-template-rows: 0fr → 1fr` (or `max-height`) with `var(--transition-normal)`. Fully keyboard operable via native buttons; if JS enforces one-open-at-a-time, keep all `aria-expanded` values in sync.
- **Final CTA:** full-width band with 2–3 large tilted planes (black/red/ochre) flanking — never sitting under — the text, clipped by the section. Contains `<h2>`, a supporting line, and the email capture form per §2.3. Success triggers a toast: fixed bottom, `--z-toast`, `role="status"`, `aria-live="polite"`, Material `check_circle` icon, auto-dismiss.
- **Footer:** inverted ground — light mode: `--color-black` ground with `--bg-primary` text; dark mode: `--bg-surface-strong` ground with `--text-primary` (it must remain distinct from the page background in both modes). Contents: brand block (geometric mark + one-line description), four columns of secondary links (Product / Company / Resources / Legal), social icon buttons (Material icons, each with `aria-label`, 44px targets), and a copyright line. Links show visible hover feedback (underline offset or color shift to `--primary`).
- **Decorative Geometry (global):** every shape is `aria-hidden="true"`, `pointer-events: none`, text-free, positioned inside a relatively-positioned, overflow-clipped parent, and never stacked above interactive elements.

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** fluid `clamp()` typography and flex wrapping from 320px to wide desktop with zero horizontal overflow.
- **Smooth Animations:** every state change transitions with `var(--transition-fast)` or `var(--transition-normal)`; under `prefers-reduced-motion: reduce`, disable float keyframes, rotations, and transitions while keeping instant state changes.
- **Accessibility (a11y):** a skip-to-content link; semantic landmarks (`header`, `nav`, `main`, `section`, `footer`); exactly one `<h1>` with logical heading order; visible `:focus-visible` rings everywhere; logical DOM/focus order; full keyboard operability with no mouse-only interactions; WCAG AA contrast in both modes (4.5:1 body text, 3:1 large text and UI boundaries); state never communicated by color alone; `aria-live` regions for form errors and toasts.
- **Mandatory Visual Feedback:** every hover, click, and submission triggers a visible state change (tilt, lift, ring, spinner, toast).
- **Destructive Actions:** any `.btn--danger` must be visually distinct in both light and dark themes.

## 4. DELIVERABLES & OUTPUT FORMAT

- **File Structure:** three separate files — `index.html`, `style.css`, `script.js`. The only script reference is a single `<script src="script.js" defer></script>` before `</body>`; no inline script blocks. Google Fonts (Jost) and Material Symbols `<link>` tags in `<head>`. No other local assets.
- **Naming Convention:** BEM only (`block__element--modifier`: `.btn--primary`, `.nav__link`, `.card--featured`, `.faq__trigger`, `.geo-square`). The baseline blocks `.btn`, `.card`, `.input`, `.badge`, `.nav` are the blocks. Never mix conventions.
- **Script Scope:** `script.js` contains only — theme init/toggle/persistence (§1.3), mobile menu, FAQ accordion, form validation with simulated async submit and toast, and smooth anchor scrolling that respects reduced motion. No libraries, no other behavior.
- **Copy:** final English copy for the invented coherent product across all sections; no lorem ipsum; no unrequested placeholders.
- **Definition of Done:** zero inline styles; zero inline SVGs; dark mode complete with persisted toggle; all button states (default, hover, focus, active, loading, disabled, success/error) implemented; card hover/focus-within/skeleton/empty styles defined; all form states implemented; keyboard pass over every interactive element; contrast verified in both modes; no horizontal scroll at 320px; reduced motion honored.

Generate the complete final code for all three files now, in one attempt.
