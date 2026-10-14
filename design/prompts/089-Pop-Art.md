# BUILD SPECIFICATION — "POP ART" COMIC-STRIP LANDING PAGE

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready **Pop Art landing page** in a single first attempt. The design language is the 1950s–60s Pop Art movement: extremely saturated colors (Pop Red `#FF0000`, Pop Yellow `#FFFF00`, Pop Blue `#0000FF`, Hot Pink `#FF69B4`, Bright Orange `#FF8C00`, Lime Green `#32CD32`), thick black outlines (3–4px), hard offset shadows, Ben-Day/halftone dot patterns, comic speech bubbles, Warhol-style repetitive grids, sharp corners, and pop-in scale animations. The aesthetic is loud, iconic, and elevates everyday objects. All user-facing copy must be written in **English** with a punchy, comic-strip tone (exclamations like "POW!", "BAM!", "WOW!" are encouraged).

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No Inline CSS:** The `style="..."` attribute is **forbidden** anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
* **Minimal HTML Modifications:** HTML must remain clean, semantic, and style-agnostic. Re-theming the page must require editing only `style.css`, never the markup.

### 1.2 CSS Variables & Theme Tokens
Store **all** visual tokens in `:root` and theme overrides in `.dark`. Use exactly these tokens:

```css
:root {
  /* Brand palette */
  --primary: #FF0000;         /* Pop Red */
  --secondary: #FFFF00;       /* Pop Yellow */
  --accent-blue: #0000FF;     /* Pop Blue */
  --accent-pink: #FF69B4;     /* Hot Pink */
  --accent-orange: #FF8C00;   /* Bright Orange */
  --accent-lime: #32CD32;     /* Lime Green */
  --ink: #000000;             /* Black — outlines, shadows, text */

  /* Surfaces */
  --bg-primary: #FFFF00;      /* page base — always carries a Ben-Day dot overlay */
  --bg-secondary: #FEFEFE;    /* card / speech-bubble surfaces */
  --bg-band-red: #FF0000;     /* full-width alternating section bands */
  --bg-band-blue: #0000FF;
  --bg-band-dark: #000000;    /* footer band */

  /* Text */
  --text-primary: #000000;    /* on yellow / near-white surfaces */
  --text-secondary: #262626;
  --text-on-red: #FFFFFF;     /* large/bold display text ONLY (AA large-text) */
  --text-on-blue: #FFFF00;    /* display headings on blue; body on blue = #FFFFFF */
  --text-success: #1E7A1E;    /* darkened lime — AA on light surfaces */
  --text-error: #CC0000;      /* darkened red — AA on light surfaces */

  /* Borders */
  --border-default: #000000;
  --border-error: #FF0000;
  --border-success: #32CD32;
  --outline-weight: 4px;      /* bold comic outline width */

  /* Radius — Pop Art exception: sharp corners ONLY */
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;

  /* Hard offset comic shadows */
  --shadow-sm: 4px 4px 0 var(--ink);
  --shadow-md: 6px 6px 0 var(--ink);
  --shadow-lg: 8px 8px 0 var(--ink);

  /* Spacing / motion */
  --spacing-gap: 1.5rem;
  --transition-fast: 120ms;
  --transition-normal: 250ms;
  --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1); /* pop overshoot */

  /* Stacking */
  --z-dropdown: 1000;
  --z-modal: 2000;
  --z-toast: 3000;

  /* Type */
  --font-display: 'Bangers', cursive;
  --font-base: 'Archivo', sans-serif;
}
```

* **Contrast Pairing (mandatory, every theme):** Light background ↔ dark text, dark background ↔ light text. Explicit pairings: yellow/near-white surfaces ↔ `--text-primary`; red surfaces ↔ `--text-on-red` (display-size text only, never body copy); blue surfaces ↔ `--text-on-blue` headings + `#FFFFFF` body; black surfaces ↔ white/yellow text. Never place body text directly on red or blue.
* **Light Mode Background:** Do **not** default to pure white. The page base is Pop Yellow with a Ben-Day dot overlay; where a white surface is needed, use `#FEFEFE`, never `#FFFFFF`. **Exception clause:** `#FFFFFF` is reserved for text on red/blue and small solid fills (badges, icon chips) — never as a page or card background.
* **Radius Exception:** Pop Art mandates `border-radius: 0px` everywhere. The `--radius-*` tokens exist but must all resolve to `0px`. Speech-bubble tails must be built with pseudo-elements or `clip-path` polygons — never with border-radius.
* **Ben-Day Dots:** Implement dot patterns exclusively with `radial-gradient` + `background-size` (e.g., `radial-gradient(circle, rgba(255,0,0,.30) 2px, transparent 2.6px)` at `16px 16px`). Provide reusable classes: `.ben-day--red`, `.ben-day--blue`, `.ben-day--pink`, `.ben-day--black` (black dots on yellow), and `.ben-day--dark` (subtle white dots for dark-mode surfaces). **Legibility rule:** dots may appear only on section backgrounds or decorative strips; any text over a dotted area must sit inside a solid-fill container (card, speech bubble, band).

### 1.3 Mandatory Dark Mode Support
* **Implementation:** Define full dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`. Dark mode is a "neon on black" Pop Art variant: `--bg-primary: #0A0A0A`, `--bg-secondary: #1C1C1C`, `--text-primary: #FEFEFE`, `--text-secondary: #D9D9D9`, `--text-success: #32CD32`, `--text-error: #FF5252`, and `--border-default` plus all hard shadows flip to `#FEFEFE` (white outlines/shadows on black). Saturated accent tokens and the colored section bands (`--bg-band-*`) with their text pairings remain unchanged in both themes.
* **Theme Switching:** Background and text variables must switch seamlessly with zero HTML restructuring.
* **Persistence:** Store the user's choice in `localStorage` (e.g., key `popart-theme`), falling back to `prefers-color-scheme` on first visit. Render a visible comic-styled toggle button (`.theme-toggle`) with correct `aria-pressed` and `aria-label` states, using Material Symbols `dark_mode` / `light_mode` icons.

### 1.4 Flexbox Layout & Mobile-First Alignment
* Build all layout structures with **Flexbox** (`display: flex` / Tailwind flex utilities). Every flex container must default to `align-items: center` unless an exception is explicitly justified in CSS comments.
* **Mobile-first:** All rows convert to columns on small viewports; horizontal scrolling is forbidden at any width down to 320px.
* **Exception clause:** CSS Grid is permitted **only** for the Warhol-style repetitive mosaic in the Hero (Section 5.2). Everything else is Flexbox.

### 1.5 Framework Default & Tailwind CSS Integration
* Use **Tailwind CSS (Play CDN)** for structural utilities only (flex, gap, padding, responsive prefixes). Every color, border, shadow, radius, font, and effect must come from the CSS variables via generic reusable component classes (`.btn`, `.card`, `.input-group`, `.speech-bubble`, `.ben-day--*`). Hard-coded Tailwind color utilities (`bg-red-500`, etc.) are **forbidden**.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text:** Load **Bangers** (display: all headings, buttons, badges, nav, prices — uppercase, `font-weight: 700`, generous letter-spacing) and **Archivo** (body copy, bold weights, sentence case for readability) via Google Fonts `<link>` tags, bound to `--font-display` and `--font-base`. **Exception clause:** Bangers is display-only; body paragraphs use Archivo for accessibility — never set long-form copy in Bangers.
* **Icons:** Use **Google Material Symbols** only. Raw inline SVGs, local icon files, and emoji icons are **explicitly forbidden**. Comic starburst badges ("POW!", "MOST POPULAR!") must be built with `clip-path` polygons + Bangers text — no SVG.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component
Style all states via CSS classes on a `.btn` base (flex; `align-items: center`; `justify-content: center`; `gap: 0.5rem`; min touch target 44×44px; Bangers, uppercase; `border: var(--outline-weight) solid var(--border-default)`; `box-shadow: var(--shadow-md)`; `border-radius: 0`):
* **Variants:** `.btn--primary` (red bg / white text), `.btn--secondary` (yellow bg / black text), `.btn--blue` (blue bg / yellow text), `.btn--ghost` (transparent / black border), `.btn--danger` (visually distinct in both themes: black bg, red border, warning icon).
* **Hover:** Comic "lift" — `translate(-2px, -2px)` with shadow growing to `--shadow-lg`; `cursor: pointer`.
* **Focus:** Distinct `:focus-visible` ring: `3px dashed` outline with `3px` offset, `#0000FF` in light mode / `#FFFF00` in dark mode — visible over every band color.
* **Active/Pressed:** `transform: scale(0.97)` plus shadow collapsing to `2px 2px 0` (comic press).
* **Loading (`.is-loading`):** `aria-busy="true"`, pointer events disabled, double-click prevented; render a CSS border-spinner in a contrasting color (or animated Material Symbol) without changing button dimensions.
* **Disabled:** `opacity: 0.5`, `filter: grayscale(1)`, `cursor: not-allowed`, no hover/active effects.
* **Success/Error (`.is-success` / `.is-error`):** Temporary feedback states driven by `--text-success` / `--text-error` tokens.

### 2.2 Card Component
* **Default:** Flexible flexbox column, `--bg-secondary` surface, `--outline-weight` black border, `--shadow-md`, generous padding, `border-radius: 0`.
* **Hover (interactive cards):** `transform: translateY(-2px)` + shadow shift to `--shadow-lg`.
* **Focus-within:** Card border highlights (e.g., `--border-default` → `--primary`) when a child link/button receives focus.
* **Loading (`.card--skeleton`):** Shimmer sweep animation (gradient translate) over Ben-Day-tinted placeholder blocks; must not cause layout jumps.
* **Empty State (`.card--empty`):** Structured fallback with a Material Symbol icon inside a starburst plus clear guidance text.

### 2.3 Form & Input Requirements
Build the newsletter capture (Section 5.8) as an `.input-group`: flex column wrapping a bold Archivo `<label>`, the input, and a reserved-height error container.
* **Input base:** `--outline-weight` black border, `--bg-secondary` fill, `--font-base` bold, min-height 44px.
* **States:** Empty; Focused (3px offset ring, replacing not removing the default outline); Filled; Valid (`.is-valid` → `--border-success` + `check_circle` Material icon); Invalid (`.is-invalid` → `--border-error`, `--text-error` message, `error` icon, `aria-invalid="true"`); Disabled; Read-only.
* **Feedback:** Error/success messages render in an `aria-live="polite"` region wired via `aria-describedby`; never communicate state by color alone.

### 2.4 FAQ Accordion & Modal / Popup
* **FAQ Accordion (required):** Each item is a `<button class="faq__question">` with `aria-expanded` / `aria-controls`, a rotating Material Symbol `expand_more` chevron, and a panel animated via `grid-template-rows: 0fr → 1fr` (or equivalent) using `--transition-normal`. Fully keyboard operable; panels close independently.
* **Modal (if any popup is used, e.g., plan details):** States Opening / Open / Loading / Success / Error / Closing, all animated via CSS transitions; fixed overlay with flex-centered (`align-items: center`) backdrop; panel styled as a giant speech bubble; Material Symbol `close` button; keyboard focus trapping; close via `Esc` and overlay click; `role="dialog"` + `aria-modal="true"`; focus returns to the trigger on close; stacking via `--z-modal`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** Fluid `clamp()` typography, responsive breakpoints, zero horizontal overflow.
* **Smooth Animations:** All state changes transition with `var(--transition-normal)` and `var(--ease-standard)`. Implement a `pop-in` keyframe (`scale(0.6) → scale(1.05) → scale(1)` + fade) applied to hero elements (staggered on load) and to sections on scroll via an IntersectionObserver adding `.is-visible`. **`prefers-reduced-motion` must disable all transform/scale animations and the shimmer**, leaving simple fades or nothing.
* **Accessibility (a11y):** AA contrast in both Light and Dark modes per the pairing rules in 1.2. Never rely on color alone (icons + text for every state). Semantic HTML5 (`header`/`nav`/`main`/`section`/`footer`, one `h1`, logical heading order), a skip-to-content link, correct ARIA roles/labels on the theme toggle, mobile menu, accordion, and any custom widget, logical DOM/focus order, and full keyboard operability — no mouse-only interactions. `aria-live` regions for dynamic feedback (form errors, loading, success).
* **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change (comic lift, press, spinner, success flash).
* **Destructive Actions:** `.btn--danger` must be visually distinct in both themes.
* **Saturation Filter:** Apply `filter: saturate(1.5)` only to the hero visual/mosaic containers — never to text surfaces or the whole page.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **File Structure:** Three separate files — `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single `<script src="script.js" defer>` entry point. `<head>` contains Google Fonts, Material Symbols, and Tailwind links only.
* **Naming Convention:** **BEM only** (e.g., `.hero`, `.hero__title`, `.card--featured`, `.btn--primary`, `.faq__item`, `.speech-bubble__tail`) — never mix conventions.
* **Copy:** Author complete, real, comic-toned **English** copy for every section (invent a fitting brand name). Lorem ipsum, "Coming soon", and placeholder-only submissions are forbidden — the user specified all sections, so all content must be real.
* **JavaScript scope:** Vanilla JS only — theme toggle + persistence, mobile nav, accordion, form validation with loading/success/error states, IntersectionObserver reveals, smooth anchor scrolling with `scroll-margin-top`. No libraries.
* **First-attempt completeness:** Deliver finished, runnable code with no TODOs.

---

## 5. PAGE BUILD BRIEF — SECTION-BY-SECTION REQUIREMENTS

1. **Sticky Header:** Comic logo (Bangers in a bordered box or starburst), anchor nav (Features, How It Works, Testimonials, Pricing, FAQ), `.theme-toggle`, and a `.btn--primary` "GET STARTED" CTA. Bottom `--outline-weight` black border + hard shadow. Mobile: Material Symbol `menu` hamburger toggling a flex-column nav (`aria-expanded`), keyboard accessible.
2. **Hero:** Red band with Ben-Day dots; giant Bangers headline (fluid `clamp()` sizing, `--text-on-red`), "POW!" starburst badge, speech-bubble subheadline, dual CTAs (`.btn--primary` + `.btn--secondary`), and a **Warhol-style 2×2 repetitive mosaic** (the only permitted CSS Grid): four identical visual cells with color-rotated accents (red / blue / yellow / pink), each with 4px black borders, `saturate(1.5)` filter, and staggered `pop-in` on load.
3. **Features (3 cards):** Yellow band with black Ben-Day dots; Bangers section heading with thick black underline bar; three `.card` blocks (flex column, centered) each with a Material Symbol icon inside a color-rotated starburst, Bangers title, Archivo body, hover lift.
4. **How It Works (3 steps):** Blue band with white Ben-Day dots; three numbered comic panels — huge Bangers numerals in starbursts (1/2/3), speech-bubble descriptions (`--text-on-blue` headings, white body), connected by dashed lines on desktop that hide on mobile (vertical stack).
5. **Testimonials:** Yellow band with pink Ben-Day dots; three `.speech-bubble` quotes (4px border, hard shadow, pseudo-element tail), Archivo bold quote, Bangers name, initials avatar in a 4px-bordered colored circle, and star ratings via Material Symbol `star` **plus** a text rating ("5/5") — never color/icon alone.
6. **Pricing (3 tiers):** Near-white (`#FEFEFE`) band with red Ben-Day dots; three `.card--pricing` tiers with comic tier names, Bangers prices, feature lists using `check_circle` (lime) / `cancel` icons; the middle `.card--featured` is visually elevated (red bg, `--text-on-red` display text, larger shadow, `clip-path` starburst badge reading "MOST POPULAR!") with a `.btn--primary` CTA; other tiers use `.btn--secondary`/`.btn--ghost`.
7. **FAQ:** Yellow band; 5–6 real Q&A items built per Section 2.4 accordion spec.
8. **Final CTA:** Red band with white Ben-Day dots; giant Bangers headline, speech-bubble support line, and the newsletter `.input-group` (email + `.btn--primary` "SIGN ME UP!") implementing every state from Section 2.3, including a success flash ("You're on the list — BAM!") in an `aria-live` region.
9. **Footer:** Black band (both themes); logo, secondary link groups (Product / Company / Support), social icons as Material Symbol buttons (44×44px focus targets with `aria-label`), and copyright small print — white/yellow text per pairing rules.

**Definition of Done:** Zero inline styles; zero inline SVGs; zero lorem ipsum; both themes toggle and persist; the page is fully navigable by keyboard alone; no horizontal scroll at 320px; every component state in Section 2 is implemented; and all three files are complete and runnable as delivered.
