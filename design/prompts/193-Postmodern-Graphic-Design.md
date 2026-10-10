# CODING AGENT PROMPT — "Overprint" Landing Page: Postmodern Graphic Design (1970s–1990s)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality, single-page landing page on the **first attempt**. The theme is **Postmodern Graphic Design** — the reaction against Modernism associated with Wolfgang Weingart, April Greiman, David Carson, Emigre magazine, the MTV-era identity, and Cranbrook work: layering, collage, historical pastiche, irony, mixed type, texture, decoration, expressive subjectivity, and solid offset "collage" shadows. The *aesthetic* rebels against the grid; the *engineering* must be disciplined, responsive, and accessible.

**Fictional Product:** Invent a coherent product to anchor the page (suggested: **"Overprint" — a design toolkit that breaks the grid**). All user-facing copy must be written in **English**, in an ironic, self-aware, pastiche-driven postmodern voice (e.g., nods to "the grid is dead," Magritte-style "this is not a website" footnotes, mock-manifesto numbering). No lorem ipsum.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** The `style="..."` attribute is **forbidden** anywhere in the HTML.
- **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
- **Minimal HTML Modifications:** HTML must remain clean, semantic, and styling-agnostic. Decorative effects (collage frames, overprint textures, offset blocks) must be achieved with **pseudo-elements and CSS variables**, not extra wrapper markup.
- **Layered CSS:** Organize `style.css` with `@layer tokens, base, components, layout, sections, utilities;` — clean custom CSS (no framework required). If you choose Tailwind instead, every utility must map back to the CSS variables below.

### 1.2 CSS Variables & Theme Tokens
All visual tokens live in `:root` (and the `.dark` theme class). The following token block is **canonical** — keep every provided value verbatim and add the mandatory extensions:

```css
@layer tokens {
:root {
  /* color: clashing, ironic, layered */
  --color-bg: #efe9df;
  --color-surface: #ffffff; /* Exception: source palette explicitly specifies #ffffff for surface; retain it. All other near-whites must use #fefefe. */
  --color-surface-strong: #fff2b8;
  --color-border: #17171a;
  --color-text: #17171a;
  --color-text-muted: #514f52;
  --color-primary: #e0247a;
  --color-accent: #2b6df0;
  --color-clash: #ffce00;
  /* radius: irregular, intentionally inconsistent */
  --radius-sm: 0px; --radius-md: 2px;
  --radius-lg: 999px 4px 999px 4px; --radius-pill: 999px;
  /* shadow: layered collage offset shadow (solid, no blur) */
  --shadow-sm: 3px 3px 0 var(--color-primary);
  --shadow-md: 6px 6px 0 var(--color-accent);
  --shadow-lg: 9px 9px 0 var(--color-clash);
  /* font: mixed, clashing type families (Google Fonts) */
  --font-sans: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'Gelasio', Georgia, 'Times New Roman', serif;
  --font-mono: 'Courier Prime', 'Courier New', ui-monospace, monospace;
  /* text scale, spacing, ease — exactly as specified in the reference tokens */
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem;
  --text-4xl: 3rem; --text-5xl: 4rem;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --ease-standard: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  /* signature extras */
  --collage-tilt: -1.2deg;
  --overprint-texture: repeating-linear-gradient(45deg, rgba(23,23,26,0.04) 0 2px, transparent 2px 6px);
  /* mandatory standard aliases & missing tokens */
  --primary: var(--color-primary);
  --secondary: var(--color-accent);
  --bg-primary: var(--color-bg);
  --bg-secondary: var(--color-surface);
  --text-primary: var(--color-text);
  --text-secondary: var(--color-text-muted);
  --text-success: #1a7f37;
  --text-error: #b3261e;
  --border-default: var(--color-border);
  --border-success: #1a7f37;
  --border-error: #b3261e;
  --spacing-gap: var(--space-4);
  --transition-fast: 120ms var(--ease-standard);
  --transition-normal: 240ms var(--ease-standard);
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;
}
}
```

- **Contrast Pairing:** Every light background token pairs with a dark text token and vice versa — enforce this in both themes. Body text is always `--color-text` on `--color-bg`.
- **Contrast Verification:** Before delivery, verify WCAG AA in both themes. If white text on `--color-primary` (`#e0247a`) falls below 4.5:1 at normal size, darken the *button background only* (e.g., `#c81e6a`) for `.btn--primary` while keeping `--color-primary` for decorative accents.
- **Solid Shadows:** All elevation is the signature solid offset collage shadow. **No blur shadows anywhere.**

### 1.3 Mandatory Dark Mode Support
Dark mode is **required** (the source specification does not declare modes — you must validate both light and dark before publishing):

- **Implementation:** Define dark tokens under **both** a `.dark` class and `@media (prefers-color-scheme: dark)` on `:root:not(.light)`, so the explicit class always wins:
```css
.dark {
  --color-bg: #17171a; --color-surface: #232328; --color-surface-strong: #3a3210;
  --color-border: #efe9df; --color-text: #efe9df; --color-text-muted: #a8a29a;
  --color-primary: #e0247a; --color-accent: #6b93f5; --color-clash: #ffce00;
  --text-success: #7ee29a; --text-error: #ff9d95;
  --border-success: #7ee29a; --border-error: #ff9d95;
  --overprint-texture: repeating-linear-gradient(45deg, rgba(239,233,223,0.05) 0 2px, transparent 2px 6px);
}
```
- **Theme Switching:** Background/text variables must flip with **zero HTML restructuring**. Set `color-scheme` appropriately for native controls.
- **Persistence:** Store the user's choice in `localStorage`; on first visit fall back to `prefers-color-scheme`. Provide a visible toggle in the nav using a Google Material Symbol (`dark_mode` / `light_mode`) with correct `aria-pressed` and `aria-label` ("Switch to dark theme" / "Switch to light theme").
- **Dark Validation:** Solid offset shadows, the clash-yellow badge (dark text on `#ffce00`), and dashed focus rings must all remain clearly visible on dark surfaces.

### 1.4 Flexbox Layout & Mobile-First Alignment
- **Default Alignment Rule:** Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
- **Aesthetic Rebellion ≠ Structural Rebellion:** The postmodern "rejection of the rigid grid" is expressed through **rotation (`--collage-tilt`, ≤ ~1.5deg), layered offset shadows, mixed type, and collage framing** — never through broken layout. The underlying structure is disciplined Flexbox.
- **Mobile-Friendly First:** All multi-column rows (features, steps, pricing, footer columns) collapse to a single column on small viewports. **No horizontal scrolling at any width down to 320px** — apply `overflow-x: clip` on `body` and verify tilted/rotated elements and the ticker strip never overflow the viewport.

### 1.5 Styling Strategy
- Clean custom CSS in `style.css` using `@layer` (per 1.1). Reusable component classes (`.btn`, `.card`, `.input`, `.badge`, `.nav`) are the styling contract — section-specific rules compose them; never restyle via one-off inline utilities.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** Load Google Fonts via `<link>` with `preconnect`: **Archivo** (400/700/900 — the grotesque), **Gelasio** (400/700 + italic — metric-compatible Georgia heir), **Courier Prime** (400/700 — the mono). Bind them to `--font-sans`, `--font-display`, `--font-mono`. *Exception clause: the source token block lists system-font stacks; substitute the Google Fonts above while retaining the original stacks as fallbacks.*
- **Mixed-Type Headline Treatment:** Headlines must deliberately mix the three families within a single line (e.g., a serif word, a heavy sans word, an italic mono word), with one word in `--color-primary` and one carrying a solid clash offset (`text-shadow: 3px 3px 0 var(--color-clash)`).
- **Icons:** Use **Google Material Symbols** (`material-symbols-rounded`) for every icon — feature icons, chevrons, checks, close buttons, social glyphs. **Raw inline SVGs and local icon files are forbidden.** Size icons via CSS classes only.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

Adopt the provided base component CSS (`.nav`, `.btn`, `.card`, `.input`, `.badge` from the reference tokens) verbatim as the baseline, then extend it to cover **every** state below. All states are class-driven — never inline.

### 2.1 Button Component
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` — minimum touch target **44×44px**.
- **Hover:** `transform: rotate(var(--collage-tilt)) translate(-2px, -2px); box-shadow: var(--shadow-md); cursor: pointer;` (the canonical collage lift).
- **Focus:** Distinct dashed ring — `outline: 2px dashed var(--color-primary); outline-offset: 3px;` on `:focus-visible`, visible in both themes.
- **Active/Pressed:** The canonical shadow-collapse (`transform: none; box-shadow: var(--shadow-sm);`) is the approved pressed feedback — the button "presses into" its collage shadow.
- **Loading (`.is-loading`):** Sets `aria-busy="true"` + `disabled`, blocks double-clicks, and renders a CSS spinner (rotating `::after` border ring or animated Material Symbol) **without changing button dimensions**.
- **Disabled:** `opacity: 0.5; cursor: not-allowed;` plus greyscale filter.
- **Success/Error (`.is-success` / `.is-error`):** Temporary feedback states tinted by `--text-success` / `--text-error`, each paired with a Material Symbol (`check` / `error`) — never color alone.
- **Danger (`.btn-danger`):** Visually distinct in both themes via `--text-error` / `--border-error`.

### 2.2 Card Component
- **Default:** Flexible Flexbox column, `--color-surface` background, 2px `--color-border`, `--shadow-md`, `--radius-md`, subtle `transform: rotate(-0.6deg)`. Sibling cards alternate tilts (`:nth-child` rotations between −1deg and +0.8deg) for the collage rhythm.
- **Hover:** `translateY(-2px)` plus shadow escalation to `--shadow-lg`.
- **Focus-within:** Border shifts to `--color-accent` when a child link/button receives focus.
- **Loading (`.card--skeleton`):** Shimmer keyframe animation defined in CSS (no layout jump) — part of the component contract even if unused on first render.
- **Empty State (`.card--empty`):** Structured fallback layout with a Google Icon and guidance text — defined in CSS as part of the contract.

### 2.3 Form & Input Requirements
- **States:** Empty, Focused (accent border + `--shadow-md`), Filled, Valid (`--border-success` + `check` icon), Invalid (`--border-error`, red text, `error` icon, `aria-invalid="true"`), Disabled, Read-only.
- **Structure:** Flex container wrapping a `<label>`, the `.input` field, and a dedicated error/success feedback `<p>` wired via `aria-describedby` and announced through an `aria-live="polite"` region.

### 2.4 Modal / Popup (Conditional)
This page requires no modal. If you add any overlay, it must use: centered flex container (`align-items: center`), backdrop, Material Symbol close button, CSS-transitioned open/close, keyboard focus trapping, and `Esc` / overlay-click closing, layered at `--z-modal`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** Fluid `clamp()` type scaling, breakpoints without horizontal overflow, validated at 320px.
- **Smooth Animations:** `transition: var(--transition-normal)` on all state changes; **globally respect `prefers-reduced-motion`** — disable tilts, rotations, the ticker, and transitions (extend the provided reduced-motion block beyond `.btn`).
- **Accessibility (a11y):** AA contrast in both themes; never color-only state; semantic HTML5 landmarks (`header`/`nav`/`main`/`section[aria-labelledby]`/`footer`); a skip link; one `<h1>` then logical heading order; full keyboard operability; `aria-live` regions for form feedback and loading states.
- **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change. No dead buttons — pricing CTAs scroll to and focus the CTA form; nav links smooth-scroll to real section IDs.
- **Destructive Actions:** `.btn-danger` distinct in both themes (not required by this page's content, but the class must exist per 2.1).

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks — a single `<script src="script.js" defer></script>` entry point. Google Fonts/Material Symbols `<link>` tags in `<head>` alongside viewport, title, and meta description.
- **Naming Convention:** **BEM** exclusively (`nav__link`, `card__title`, `pricing__card--featured`, `faq__icon`, `footer__link`) — consistent with the provided `btn--primary` pattern. Never mix conventions.
- **No Unrequested Placeholders:** Write real, themed English copy for every section. Placeholder text is permitted only where content is genuinely unspecified (e.g., `href="#"` social links, which still need discernible accessible names).

---

## 5. PAGE COMPOSITION & SECTION SPECIFICATIONS

### 5.1 Header / Nav
Sticky `.nav` (2px border, `--shadow-sm`): mixed-type wordmark, anchor links, theme toggle (per 1.3), and a mobile menu button (Material Symbol `menu`) toggling the link list with `aria-expanded`, `aria-controls`, `Esc` to close, layered at `--z-dropdown`.

### 5.2 Hero
`min-height: 80vh` centered flex column: clash-yellow `.badge` tagline; **mixed-type headline** (per 1.6) inside a rotated collage frame built from pseudo-elements (`--color-clash` offset block at `--collage-tilt`); mono subcopy in `--text-secondary`; primary CTA (`.btn--primary`) + secondary CTA scrolling to Features; an ironic mono footnote with asterisk.

### 5.3 Signature Ticker Strip
A full-width, slightly rotated marquee band between Hero and Features: duplicated track of mixed-type ironic phrases, CSS keyframe translation, `overflow: hidden` container, `aria-hidden="true"`, halted under reduced motion.

### 5.4 Features — 3 Cards
Mono section label ("01 / FEATURES"), mixed-type `<h2>`. Three `.card`s (row → column on mobile), each: Material Symbol icon in a rotated clash/primary shape, mixed-type `<h3>`, body copy, and a text link (driving `:focus-within`). Alternate tilts per 2.2.

### 5.5 How It Works — 3 Steps
Semantic `<ol>` of three steps: oversized `--font-display` numerals with solid clash `text-shadow` offset; mono step labels ("STEP 01 — IRONY"); dashed connector line on desktop only; each step on a tilted card.

### 5.6 Testimonials
Three cards: oversized `format_quote` Material Symbol in `--color-primary`; ironic, self-aware quotes; attribution with initials monogram in a rotated clash square, name in bold sans, role in mono `--text-secondary`.

### 5.7 Pricing — 3 Tiers
Three `.card`s; the middle tier featured: `--color-surface-strong` background, `--shadow-lg`, slight rotation, clash `.badge` ("MOST CHOSEN"). Price in large `--font-display` with mono period. Feature lists use `check` / `close` Material Symbols plus text (never color-only). Featured tier uses `.btn--primary`; all CTAs scroll to and focus the Final CTA input. Ironic mono small print beneath.

### 5.8 FAQ
Native `<details>` / `<summary>` accordion (free keyboard access): summary is a flex row of bold sans question + `expand_more` icon rotating 180deg on `[open]`; remove default markers; hover shift; dashed `:focus-visible` ring; 4–6 ironic Q&As.

### 5.9 Final CTA
Full-width band (`--color-surface-strong`, collage border): mixed-type headline, then an email capture form per 2.3 — `.input` + `.btn--primary` submit. On submit: validate (English error via `aria-live`), enter `.is-loading`, then `.is-success` with check icon and confirmation text. Simulate with `setTimeout`; no backend.

### 5.10 Footer
Flex-wrap footer: mixed-type brand mark, secondary link columns (Product / Company / Legal) pointing to real anchors where possible, social icon buttons (Material Symbols, `aria-label`s, 44px targets), mono copyright, and one ironic line of small print.

---

## 6. QUALITY GATES — VALIDATE BEFORE DELIVERY

- Zero `style="..."` attributes; zero inline `<script>` bodies; zero inline SVGs.
- Dark mode toggles, persists, and falls back to `prefers-color-scheme`; AA contrast verified in **both light and dark** (per the source note: modes were undeclared — validation is mandatory before publishing).
- No horizontal scroll at 320px, 768px, 1280px; all flex rows collapse cleanly.
- Every interactive element is keyboard-reachable with a visible dashed focus ring and produces visible feedback.
- `prefers-reduced-motion` disables all tilts, ticker motion, and transitions.
- BEM naming is consistent across all three files; all copy is real English in the postmodern voice.
