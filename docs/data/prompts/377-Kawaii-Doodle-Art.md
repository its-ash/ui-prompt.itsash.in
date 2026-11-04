# Build Specification — "Kawaii Doodle Art" Landing Page (Single-Attempt, Production-Ready)

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Generate the final, complete code for the landing page below in one attempt, immediately, without asking clarifying questions. Where anything is unspecified, make a reasonable decision that stays strictly on-theme.

---

## 1. Project Brief & Theme Direction

**1.1 Theme — Kawaii Doodle Art**
Cute, playful, hand-drawn Japanese pop aesthetic (1970s–present). Keywords: kawaii, cute, doodle, hand-drawn, pastel, Japanese pop, chibi, stickers, sparkles, rounded. Output category: Playful & Youth. Every pixel must feel cute, friendly, and hand-crafted — never corporate, never sterile.

**1.2 Product Concept & Copy**
Invent ONE coherent product concept fitting the theme (e.g., "a kawaii sticker & doodle studio app") and write all copy around it. All user-facing copy is in **English**, playful and bubbly in tone (sparkly, friendly, youthful) and grammatically clean. No lorem ipsum anywhere — write real headlines, subcopy, feature descriptions, testimonial quotes, pricing details, and FAQ answers.

**1.3 Page Structure (in this exact order)**
1. Sticky header — logo, anchor navigation, theme toggle (required to house the visible dark mode control)
2. Hero
3. Features — 3 cards
4. How It Works — 3 steps
5. Testimonials
6. Pricing — 3 tiers
7. FAQ — accordion
8. Final CTA (contains the email capture form)
9. Footer with secondary link columns

**1.4 Kawaii Visual Language (apply globally)**
- **Hand-drawn doodle borders:** `border: 3px solid var(--border-default)` combined with organic asymmetric radii, e.g. `border-radius: 255px 20px 225px 20px / 20px 225px 20px 255px;` plus a mirrored variant for variety.
- **Sticker look:** cards, badges, and buttons = pastel fill + 3px ink border + hard offset shadow `var(--shadow-sticker)`, reading as stickers peeled onto the page.
- **Sparkles & stars:** decorative Google Material Symbols (`auto_awesome`, `star`, `favorite`, `cloud`) as `aria-hidden="true"` spans or pseudo-elements, with gentle float/wobble animations.
- **Bouncy interactions:** hover = `transform: scale(1.05) rotate(2deg)` over `var(--transition-normal)` with `var(--ease-standard)`; active = `scale(0.97)`.
- **Subtle wobble:** decorative elements idle-wobble ±2° on a 3–4s loop with staggered delays:

```css
@keyframes wobble { 0%, 100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
@keyframes float  { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
```

- **Pastel gradients:** hero and final CTA panels use `var(--bg-gradient)`; the page base stays softly pastel-tinted.
- **Rounded everything:** 20–30px radii via `--radius-md` / `--radius-lg`; pill-shaped buttons.

**1.5 Mandatory Exception Clause (inline SVG)**
Exception: the source art direction requested chibi-style inline SVG illustrations and wavy SVG border filters; inline SVG is forbidden in this project — all illustration and doodle effects must be recreated with pure CSS (pseudo-elements, organic border-radius, gradients, clip-path shapes) and Google Material Symbols only.

---

## 2. Strict Rules & Architecture

**2.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
- All design properties, layout rules, and states are applied via class/ID selectors only.
- HTML stays semantic and styling-agnostic: re-theming the page must require edits to `style.css` only, never the markup.

**2.2 CSS Variables & Theme Tokens**
Define every token in `:root` and re-declare the dark set under `.dark`. Required baseline (extend as needed):

```css
:root {
  /* Palette */
  --primary: #FFB7C5;        /* Sakura Pink */
  --secondary: #89CFF0;      /* Baby Blue */
  --accent-mint: #98FB98;
  --accent-lavender: #E6E6FA;
  --accent-peach: #FFDAB9;
  --accent-lemon: #FFFACD;
  --accent-coral: #FF7F7F;
  --accent-lilac: #DDA0DD;

  /* Surfaces & text (light) */
  --bg-primary: #FFF8FB;     /* sakura-tinted page base — never #ffffff */
  --bg-secondary: #FEFEFE;  /* card/sticker surfaces */
  --text-primary: #4A3B52;   /* deep plum ink */
  --text-secondary: #7A6B85;
  --text-on-accent: #4A3B52; /* text on pastel fills — constant in BOTH themes */
  --text-success: #2E7D5B;
  --text-error: #C9384E;

  /* Borders */
  --border-default: #4A3B52; /* hand-drawn ink outline */
  --border-error: #FF7F7F;
  --border-success: #6FBF8F;

  /* Shape, depth, motion */
  --radius-sm: 14px; --radius-md: 20px; --radius-lg: 28px;
  --shadow-sm: 0 2px 6px rgba(74, 59, 82, 0.08);
  --shadow-md: 0 6px 18px rgba(74, 59, 82, 0.14);
  --shadow-sticker: 3px 3px 0 var(--border-default);
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms; --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1); /* bouncy back-out */
  --z-dropdown: 1000; --z-modal: 2000; --z-toast: 3000;

  /* Type */
  --font-base: 'Nunito', sans-serif;
  --font-display: 'Quicksand', sans-serif;

  /* Pastel gradients */
  --bg-gradient: linear-gradient(135deg, #FFD9E8 0%, #D9EEFF 50%, #DFF7E6 100%);
  --bg-gradient-soft: linear-gradient(180deg, #FFF3F7 0%, #F3F9FF 100%);
}
```

- **Contrast pairing (mandatory in every theme):** light background tokens pair with dark text tokens and vice versa. Pastel accent fills always carry `--text-on-accent` text in both themes. Verify WCAG AA: 4.5:1 for body text, 3:1 for large text and UI borders in both modes.
- Never use `#ffffff`; use `#FEFEFE` where a near-white is required.

**2.3 Mandatory Dark Mode — "Kawaii Night"**
- Dark tokens live under a `.dark` class on `<html>` (single source of truth):

```css
.dark {
  --bg-primary: #2B2337;    /* deep plum */
  --bg-secondary: #382E4A;
  --text-primary: #FFF0F6;
  --text-secondary: #C9BBD6;
  --text-success: #7FD9A2;
  --text-error: #FF9AA5;
  --border-default: #F2DCE8; /* light pastel ink = sticker outline on dark */
  --border-error: #FF9AA5;
  --border-success: #7FD9A2;
  --shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.35);
  --shadow-md: 0 6px 18px rgba(0, 0, 0, 0.45);
  --shadow-sticker: 3px 3px 0 #1C1528;
  --bg-gradient: linear-gradient(135deg, #352A4D 0%, #2B2337 50%, #2F2B45 100%);
  --bg-gradient-soft: linear-gradient(180deg, #2E2540 0%, #2B2337 100%);
}
```

- Pastel accents (`--primary`, `--secondary`, mint, lavender, etc.) stay light in dark mode so they pop; anything filled with them keeps `--text-on-accent` text.
- **Theme switching:** `script.js` applies `.dark` based on `localStorage('theme')`, falling back to `prefers-color-scheme` on first visit; run this logic in the first lines of the deferred entry script to avoid a flash of the wrong theme. The header contains a visible toggle button with correct `aria-pressed` and `aria-label` ("Switch to dark mode" / "Switch to light mode"), swapping Material Symbols `light_mode` / `dark_mode`. Switching must require zero HTML restructuring.

**2.4 Flexbox Layout & Mobile-First**
- Build all layout structures with Flexbox (Tailwind `flex` utilities or custom flex classes).
- Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
- Mobile-first: rows become columns on small viewports; no horizontal scrolling at any width; fluid typography via `clamp()`.

**2.5 Framework — Tailwind CSS**
- Include Tailwind via the CDN `<script src="https://cdn.tailwindcss.com"></script>` (external reference only — no inline Tailwind config script).
- Use Tailwind utilities strictly for structure: layout, spacing, and responsive breakpoints.
- Every kawaii visual property (colors, borders, radii, shadows, fonts, animations) comes from custom BEM classes in `style.css` driven by the CSS variables above. No raw hex values inside class attributes.

**2.6 Typography & Icons (Google Only)**
- Load Google Fonts **Quicksand** (500–700; display/headings) and **Nunito** (400–800; body) via `<link>`; bind to `--font-display` / `--font-base`. Headings are bubbly and rounded; eyebrow labels use uppercase with letter-spacing.
- Load Google Material Symbols (**Rounded** variant, prefer FILL 1 for extra cuteness where supported) via `<link>`. All icons come from Material Symbols. Inline SVGs, local icon files, and emoji-as-functional-icons are forbidden (see exception clause 1.5).

---

## 3. Component Design Specifications

**3.1 Buttons (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.btn--danger`)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, pill or `--radius-md` radius, 3px ink border, sticker shadow, bold `--font-base`. Primary = Sakura fill + `--text-on-accent`; Secondary = Baby Blue fill + `--text-on-accent`; Ghost = transparent + ink border; Danger = Coral treatment, visually distinct in both themes.
- **Hover:** bouncy `scale(1.05) rotate(2deg)` with the sticker shadow growing (e.g., 5px 5px 0), `cursor: pointer`.
- **Focus:** `:focus-visible` shows a dashed ink ring — `outline: 3px dashed var(--border-default); outline-offset: 3px;` — hand-drawn and keyboard-friendly.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** interactions disabled, double-clicks prevented, dimension-stable CSS spinner (rotating dashed circle) or pulsing Material Symbol; no layout shift.
- **Disabled:** `opacity: 0.5`, greyscale filter, `cursor: not-allowed`, hover transforms removed.
- **Success/Error (`.is-success`, `.is-error`):** temporary feedback styles using `--text-success` / `--text-error` with matching border and icon — never color alone.

**3.2 Cards (`.card` + modifiers)**
- **Default:** flex column, `align-items: center`, `--bg-secondary` surface, 3px ink border, doodle (organic) border-radius, sticker shadow, comfortable padding.
- **Hover (interactive cards):** `translateY(-2px)` combined with `scale(1.03) rotate(-1deg)` and a larger sticker shadow.
- **Focus-within:** border shifts to `--primary` and the shadow glows when a child link/button receives focus.
- **Loading (`.is-loading`):** shimmer skeleton overlay defined in CSS (`@keyframes shimmer`), preventing layout jumps.
- **Empty state:** centered Google Icon + short guidance text fallback pattern.

**3.3 Forms & Inputs (`.input-group`)**
- Used for the email capture in the Final CTA.
- **Structure:** flex container wrapping `<label>`, `<input>`, and a dedicated error/success message container with `aria-live="polite"`.
- **States:** empty; focused (dashed ink ring); filled; valid (success border + `check_circle` icon + message); invalid (error border, `--text-error` message, `error` icon — icon AND text, never color alone); disabled; read-only.
- Validate the email in `script.js`; on success show a success message and button success state. Never use blocking `alert()`.

**3.4 FAQ Accordion**
- Each item: `<button class="faq__question" aria-expanded="false" aria-controls="...">` plus an answer region; a plus Material icon rotates on open.
- Animated open/close via CSS (`grid-template-rows` or `max-height` transition) using `var(--transition-normal)`.
- Fully keyboard operable; choose one behavior (single-open or multi-open) and keep it consistent.
- **Modals:** none are required for this page. If any overlay/dialog is added, it must be a centered flex container (`align-items: center`) with a backdrop, focus trapping, Esc + overlay-click close, and CSS-animated opening/open/loading/success/closing states.

---

## 4. Page Section Specifications

**4.1 Header (sticky)**
- Translucent pastel surface with `backdrop-filter: blur`, ink bottom border; gains `--shadow-sm` after scroll. Stacking must not exceed `--z-dropdown`; the mobile nav panel uses `--z-dropdown`.
- Flex row: logo (sparkle Material icon + Quicksand wordmark), anchor nav links, theme toggle. Mobile: nav collapses behind a `menu` icon button (`aria-expanded`, `aria-controls`); links stack vertically; menu closes on link click.
- Include a visually hidden "Skip to main content" link as the first focusable element.

**4.2 Hero**
- Full-width `var(--bg-gradient)` background, floating sparkle/star/heart decorations (aria-hidden, staggered `float`/`wobble` animations), soft CSS cloud shapes.
- Eyebrow sticker label (small pill, lemon or lavender fill, ink border), giant bubbly `--font-display` headline with one word highlighted (pastel highlighter background or squiggle underline), friendly subcopy, two CTAs (`.btn--primary` + `.btn--ghost`), and a trust row (CSS avatar circles + star icons + short text).
- Centered flex column, `align-items: center`.

**4.3 Features — 3 cards**
- Section heading with a doodle underline (pseudo-element squiggle).
- Three `.card` stickers in a responsive flex row (column on mobile), equal heights. Each: Material icon inside a pastel blob (organic border-radius, alternating accent colors), bold title, 2–3 lines of copy. Bouncy hover per 3.2.

**4.4 How It Works — 3 steps**
- Desktop: three steps in a flex row connected by a dashed ink line (pseudo-element). Each step: numbered circle badge (ink border, sticker shadow, alternating pastel fill, `--text-on-accent` number), Material icon, title, copy.
- Mobile: vertical stack with a dashed rail on the left.

**4.5 Testimonials**
- Three quote cards with alternating tiny rotations (`rotate(-1deg)` / `rotate(1deg)`) for a hand-placed sticker feel.
- Each: oversized decorative quote mark (pseudo-element), quote copy, star rating (Material `star` icons + visually hidden "Rated 5 out of 5" text), CSS avatar (pastel circle + Material `face` icon or initials), name + role.

**4.6 Pricing — 3 tiers**
- Responsive flex row (column on mobile). Middle tier featured: slightly larger, thicker ink border or accent-filled header, rotated "Most Popular" sticker badge (coral/lilac tag).
- Each card: tier name, price (large `--font-display`, currency as `<sup>`), short description, feature list with `check_circle` icons, CTA (`.btn--primary` on featured, `.btn--ghost` elsewhere).

**4.7 FAQ**
- Five to six on-theme Q&As in the accordion pattern from 3.4, inside a doodle-bordered container.

**4.8 Final CTA**
- Large doodle-bordered panel with `var(--bg-gradient)`, sparkle decorations, headline, subcopy, and the email `.input-group` + `.btn--primary` submit.

**4.9 Footer**
- `--bg-secondary` surface (or deep plum with light text in light mode — either is acceptable as long as contrast pairing holds), ink top border.
- Flex/grid layout: mini logo + tagline, 2–3 secondary link columns (Product, Company, Support), social icon buttons (Material Symbols, 44px targets, `aria-label` per network), copyright line.
- All links are real in-page anchors or `href="#"` with visible `:hover` / `:focus-visible` feedback.

---

## 5. Core UX & Micro-Interaction Rules

- **Responsive by default:** fluid `clamp()` typography, breakpoints without horizontal overflow, `scroll-margin-top` on sections for the sticky header, `scroll-behavior: smooth`.
- **Smooth animations:** every state change transitions with `var(--transition-normal)`; hover micro-interactions use `var(--transition-fast)`.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables all animations, transforms, floats, and smooth scroll; content must never remain hidden due to an animation state.
- **Accessibility:** AA contrast in both themes; never color-only state communication; semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`); correct ARIA on the accordion, mobile nav, and theme toggle; logical DOM/focus order; full keyboard operability; `aria-live` regions for form feedback; decorative elements marked `aria-hidden`.
- **Mandatory visual feedback:** every click, hover, focus, and submission produces a visible state change.
- **Scroll reveal (optional):** IntersectionObserver adds `.is-visible`; hide-before-reveal styles must apply only when JS is active (gated behind an `html.js` class) so content is never lost without JavaScript.

---

## 6. Deliverable & Output Format

- **Files:** separate `index.html`, `style.css`, and `script.js`. The only JavaScript references are the Tailwind CDN and a single deferred `<script src="script.js" defer>` — no inline script code, no inline styles, anywhere.
- **Naming convention:** BEM for every custom class (`card__title`, `btn--primary`); Tailwind utilities restricted to layout/spacing/responsive structure. Never mix conventions.
- **JS scope (vanilla only, no libraries):** theme toggle with `localStorage` + `prefers-color-scheme` fallback; mobile nav; FAQ accordion; email validation with inline `aria-live` feedback; optional scroll reveal. No `alert()` / `confirm()`.
- **Quality bar:** valid semantic HTML, zero console errors, fully usable at 320px width, every interactive state implemented, and both light ("Sakura Day") and dark ("Kawaii Night") themes fully polished. Generate the final code immediately.
