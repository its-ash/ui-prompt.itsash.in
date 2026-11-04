# BUILD PROMPT — COMPLETE LANDING PAGE: "SPACESHIP INSTRUCTION MANUAL" THEME

**Your role:** Senior Frontend Engineer & Expert UI Designer. Build the complete, production-ready landing page specified below **on the first attempt**. Every rule in this document is mandatory unless explicitly marked as an exception. All user-facing copy must be written in **English**.

---

## 0. PROJECT BRIEF & THEME DEFINITION

**0.1 Concept.** A single-page landing page styled as a spaceship instruction manual / engineering blueprint. The page must radiate "deep engineering credibility": monospace-only typography, a visible blueprint grid, thin cyan callout lines connecting technical labels to schematic illustrations, low-fi exploded-view drawings, technical-manual section numbering (`01.`, `02.`, `03.` …), dashed container borders, and status indicator dots.

**0.2 Style DNA.** Technical Blueprint · Monospace · Sci-Fi Engineering · Deconstructed · Callout Lines. Era: 2025–2026 Sci-Fi Technical. **Full light + dark theme support** — both themes must be completely designed.

**0.3 Color Palette (English names):**
- **Blueprint Blue** `#0A1628` — dark theme background
- **Technical White** `#E8ECF1` — light theme background / dark-theme text
- **Line Cyan** `#00D4FF` — callout lines, accents, primary action fill
- **Annotation Gray** `#6B7B8D` — secondary text (adjust per theme for WCAG AA, see 0.4)
- **Alert Yellow** `#FFB800` — warning / "recommended" status
- **Status Green** `#00E676` — active / nominal status
- **Critical Red** `#FF3D00` — critical / error status

**0.4 Canonical CSS Token Tables — define exactly:**

Light theme ("TECHNICAL PAPER" — a printed manual page):
```css
:root {
  --bg-primary: #E8ECF1;
  --bg-secondary: #fefefe;      /* never #ffffff */
  --text-primary: #0A1628;
  --text-secondary: #55677A;    /* darkened Annotation Gray for AA on light bg */
  --primary: #0069B0;            /* accessible cyan for text/links on light bg */
  --secondary: #8A5A00;          /* accessible Alert Yellow for text on light bg */
  --text-success: #00714A;
  --text-error: #C62800;
  --border-default: rgba(10, 22, 40, 0.35);
  --border-success: #00714A;
  --border-error: #C62800;
  --grid-line: rgba(10, 22, 40, 0.06);
  --callout: #0069B0;
  --primary-fill: #00D4FF;       /* fills/borders only — always pair with #0A1628 text on top */
  --shadow-sm: 0 2px 8px rgba(10, 22, 40, 0.12);
  --shadow-md: 0 8px 24px rgba(10, 22, 40, 0.16);
}
```

Dark theme ("BLUEPRINT" — the canonical showcase aesthetic):
```css
@media (prefers-color-scheme: dark) { /* duplicate these tokens here */ }
html.theme-dark {
  --bg-primary: #0A1628;
  --bg-secondary: #10233F;
  --text-primary: #E8ECF1;
  --text-secondary: #8FA0B5;    /* lightened Annotation Gray for AA on dark bg */
  --primary: #00D4FF;
  --secondary: #FFB800;
  --text-success: #00E676;
  --text-error: #FF3D00;
  --border-default: rgba(0, 212, 255, 0.30);
  --border-success: #00E676;
  --border-error: #FF3D00;
  --grid-line: rgba(0, 212, 255, 0.05);
  --callout: #00D4FF;
  --primary-fill: #00D4FF;
  --shadow-sm: 0 2px 8px rgba(0, 212, 255, 0.10);
  --shadow-md: 0 8px 24px rgba(0, 212, 255, 0.14);
}
html.theme-light { /* re-declare the :root light tokens here so the class overrides the media query */ }
```

Shared tokens (in `:root`): `--font-base: 'JetBrains Mono', 'Fira Code', 'Space Mono', monospace;` · `--radius-sm: 2px; --radius-md: 4px; --radius-lg: 6px;` (blueprints are sharp — minimal radius) · `--spacing-gap: 0.5rem;` (all larger gaps as multiples via `calc()`) · `--transition-fast: 120ms; --transition-normal: 240ms; --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);` · `--z-dropdown: 100; --z-modal: 200; --z-toast: 300;` · `--tracking-label: 0.15em; --tracking-wide: 0.2em;`

**0.5 Visual Language Requirements:**
- **Blueprint grid:** apply to `body` via `background-image: linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px); background-size: 32px 32px;` — subtle (~5–6% opacity), must never impair text contrast.
- **Callout lines:** thin decorative SVG paths (`stroke: var(--callout); stroke-width: 1; fill: none`) with small arrowhead markers, connecting uppercase data labels to schematic elements.
- **Labels:** `text-transform: uppercase; letter-spacing: var(--tracking-label);` — micro-annotations use `var(--tracking-wide)` and `font-size: 0.75rem`.
- **Section numbering:** every section header is prefixed with a manual-style index (`01.` … `08.`) plus an uppercase descriptive title.
- **Dashed borders:** containers/cards use `border: 1px dashed var(--border-default)`.
- **Status dots:** 8px circles (green = active/nominal, yellow = warning, red = critical) — **always paired with a text label** ("NOMINAL", "CALIBRATING", "CRITICAL").
- **Low-fi exploded-view schematics:** built from CSS borders, pseudo-elements, and geometric shapes, plus decorative SVG — no raster images.
- **Documentary garnish:** corner registration marks, `FIG.` captions, `REV.` / `DOC. NO.` colophon details — decorative, `aria-hidden="true"`.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **Forbidden:** `style="..."` attributes, inline `<style>` blocks, and presentation attributes in HTML.
- Target all design properties, layout rules, and states exclusively via class or ID selectors.
- HTML must remain clean, semantic, and style-agnostic: re-theming the page requires editing only `style.css`, never the markup.

**1.2 CSS Variables & Theme Tokens**
- Every color, radius, shadow, spacing, transition, and z-index value must reference the tokens in 0.4. **No hardcoded hex values outside the `:root` / theme blocks.**
- **Contrast pairing is mandatory in both themes:** light backgrounds pair with dark text, dark backgrounds pair with light text. The token tables in 0.4 are pre-verified for this — do not weaken them.
- Light mode must never default to pure white: use `#E8ECF1` for the page background and `#fefefe` for panels.

**1.3 Mandatory Dark Mode Support**
- Implement the mechanism in 0.4: `:root` light defaults, `@media (prefers-color-scheme: dark)` dark tokens, and `html.theme-dark` / `html.theme-light` classes that override the media query — so the page is fully themed even with JavaScript disabled.
- `script.js` must, as its **first operation**, read `localStorage` key `"ssm-theme"` and apply the matching class; on first visit, fall back to `prefers-color-scheme`.
- Provide a **visible theme toggle** in the header using Material Symbols (`dark_mode` / `light_mode`), with `aria-pressed="true"` when dark mode is active and a dynamically updated `aria-label` ("Activate light mode" / "Activate dark mode").
- Theme switching must require zero HTML restructuring — only variable swaps.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout structure with Flexbox. **Every flex container defaults to `align-items: center`** unless an exception is justified with a CSS comment (e.g., stacked card content using `stretch`).
- Mobile-first: single-column stacks on small viewports, expanding to rows at `≥768px` where appropriate. **Zero horizontal scrolling at any width ≥320px.**
- Decorative callout SVGs and schematics must live inside `overflow: hidden` wrappers, or be hidden below their design breakpoint, so they can never cause overflow.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS **or** clean custom CSS driven by Tailwind's `@layer` / `@apply` directives. Given the bespoke theming, the recommended path is custom CSS organized as `@layer tokens, base, layout, components, utilities`.
- If Tailwind is included, use it **only via `@apply` inside BEM component classes** — the HTML must carry a single, consistent naming convention, with reusable classes (`.btn`, `.card`, `.input-group`) mapping back to the CSS variables.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load **JetBrains Mono** (weights 400, 500, 700) from Google Fonts via `<link>` with `preconnect`; optionally add **Space Mono** 700 for display accents. Bind to `--font-base`. **All text on the page is monospace** — no secondary sans-serif.
- Icons: **Google Material Symbols (Outlined)** via the Google Fonts link. **Forbidden:** raw inline SVG icons, local icon files, icon fonts other than Material, and emoji used as icons.
- **Explicit exception clause:** inline SVG is permitted **exclusively** for decorative callout connector lines, arrowheads, crosshairs, and schematic geometry — always `aria-hidden="true"`, never serving an icon or semantic role. Every functional icon must remain a Material Symbol.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component (`.btn`, `.btn--primary`, `.btn--ghost`, `.btn--danger`)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target **44×44px**; uppercase label with `letter-spacing: var(--tracking-label)`; `border-radius: var(--radius-sm)`.
- **Primary:** background `var(--primary-fill)` with `#0A1628` text in both themes (verified ~10:1 contrast). **Ghost:** `1px dashed var(--border-default)`, transparent background, `var(--primary)` text.
- **Hover:** brightness/elevation shift (`var(--shadow-sm)`), `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring — `outline: 2px solid var(--primary); outline-offset: 2px;`.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** disables interaction and prevents double-clicks (`disabled` + `pointer-events: none` + `aria-busy="true"`); renders a CSS border-spinner that **does not change button dimensions** (fixed `min-width`).
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error (`.is-success` / `.is-error`):** temporary feedback states using `--text-success` / `--text-error`, always accompanied by an icon or text — never color alone.
- **`.btn--danger`:** visually distinct in both themes (red border/fill + explicit label).

**2.2 Card Component (`.card` — used for Features, Pricing, Testimonials)**
- **Default:** flex column layout, `background: var(--bg-secondary)`, `border: 1px dashed var(--border-default)`, `border-radius: var(--radius-md)`, consistent padding.
- **Hover:** `transform: translateY(-2px)`, dashed border solidifies to `var(--primary)`, `box-shadow: var(--shadow-md)`; `transition: var(--transition-normal) var(--ease-standard)`.
- **Focus-within:** border highlights when any child link/button receives focus.
- **Loading (`.card--skeleton`):** shimmer animation via a sweeping `linear-gradient`, defined in CSS. Demonstrate it on the hero schematic: it renders as a skeleton and is revealed by JS (reduced-motion safe) to prove zero layout jump.
- **Empty state (`.card--empty`):** structured fallback pattern — Material Symbol + short guidance text — defined in CSS.
- **Pricing variant:** featured tier gets a solid cyan border, an "Alert Yellow" `RECOMMENDED` badge with a yellow status dot, and slightly higher elevation.

**2.3 Form & Input Component (`.input-group`)**
- **Structure:** flex container wrapping `<label>`, `<input>`, and a dedicated `.input-group__error` feedback container with `aria-live="polite"`.
- **States (all via CSS classes/pseudo-classes):** empty, `:focus` (2px `var(--primary)` outline ring + subtle background shift), filled, `.is-valid` (success border + Material `check` icon), `.is-invalid` (error border, `--text-error` message + Material `error` icon), disabled, read-only.
- Used in the Final CTA email capture with client-side validation in `script.js`.

**2.4 FAQ Accordion & Modal/Overlay Rules**
- Build the FAQ as an accordion: each item is a `<button class="faq__trigger" aria-expanded="false" aria-controls="…">` plus `<div class="faq__panel" role="region">`.
- **States:** closed → opening → open → closing, all animated via CSS (`grid-template-rows: 0fr → 1fr` or equivalent) with `var(--transition-normal)`; trigger icon (Material `expand_more`) rotates; `aria-expanded` updates. Never indicate state by color alone.
- **Keyboard:** triggers are native buttons (fully operable); visible focus ring required; `Esc` may close the open item.
- **If any modal/dialog is introduced** (e.g., a pricing detail overlay), it must implement: centered flex overlay (`align-items: center`), backdrop, Material Symbol close button, keyboard **focus trap**, close via `Esc` and overlay click, animated opening/closing, loading/success/error states, and `z-index: var(--z-modal)`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` typography, responsive breakpoints, no horizontal overflow from 320px up.
- **Smooth animations:** every state change transitions with `var(--transition-normal)`; **respect `prefers-reduced-motion`** — disable callout draw-ins, dot pulses, shimmer, transforms, and scroll reveals; keep instant state changes.
- **Accessibility (a11y):** WCAG AA contrast in both themes (token tables are pre-verified — do not weaken them). Never rely on color alone. Semantic HTML5 landmarks (`header`, `nav`, `main`, `section[aria-labelledby]`, `footer`), a skip link, logical DOM/focus order, full keyboard operability, `aria-live` regions for form errors, toasts, and loading feedback. All decorative SVGs, schematics, and garnish are `aria-hidden="true"`.
- **Mandatory visual feedback:** every click, hover, focus, and submission produces a visible state change.
- **Theme-specific micro-interactions:** callout lines draw in on scroll (`IntersectionObserver` toggles `.is-visible` → `stroke-dashoffset` transition); status dots pulse subtly (green only); card borders shift dash → solid on hover; sections reveal on scroll (opacity/translate, reduced-motion safe).
- **Toast component (`.toast`):** `z-index: var(--z-toast)`, `aria-live="polite"`, used for form feedback (e.g., "TRANSMISSION RECEIVED — CHECK YOUR INBOX").
- **Destructive actions** (e.g., a "clear form" control, if any) must use `.btn--danger` and remain distinct in both themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, `script.js`. The HTML contains exactly **one** `<script src="script.js" defer>` reference — no other inline scripts, no inline styles.
- **Naming convention:** BEM (`block__element--modifier`) exclusively, consistent across all files. Never mix conventions.
- **No unrequested placeholders:** **lorem ipsum is forbidden.** Write real, coherent English copy per Section 6; invent the fictional product content in-theme.
- **First-attempt runnable:** opening `index.html` directly must render the complete page (fonts/icons via Google CDNs; no build step required).
- **Acceptance checklist (self-verify before finishing):** zero `style=` attributes; both themes pass AA; full keyboard walkthrough works (nav, toggle, FAQ, form); 320px renders with no horizontal scroll; `prefers-reduced-motion` respected; all functional icons are Material Symbols and all SVGs are decorative + `aria-hidden`; theme choice persists across reload.

---

## 5. PAGE ARCHITECTURE & SECTION-BY-SECTION SPECIFICATION

**Header — "Title Block":** sticky, `z-index: var(--z-dropdown)`, styled like a blueprint drawing title block: wordmark, `DOC. NO. SSM-2026-001 // REV. C`, anchor nav to all sections, theme toggle (1.3), and a compact primary CTA. Add a skip link as the first focusable element.

- **01. OVERVIEW (Hero):** two-column flex (stacks on mobile). Left: eyebrow label "OPERATIONS MANUAL — REV. 2026.1", H1 headline, supporting spec paragraph, dual CTAs (primary "INITIALIZE SYSTEM" → pricing; ghost "READ MANUAL" → how-it-works), and a status readout row of three labeled status dots (green NOMINAL, green NOMINAL, yellow CALIBRATING). Right: exploded-view spacecraft schematic (CSS shapes + decorative SVG, `aria-hidden`), with 3–4 callout lines linking labels ("THRUSTER ARRAY — FIG. 1A", "HULL INTEGRITY 100%", "CORE: ONLINE") to parts; corner registration marks.
- **02. SYSTEMS (Features — 3 cards):** responsive grid (1 col → 3 col). Each card: Material Symbol icon inside a dashed "port" square, `FIG.` number, title, description, and a spec footer line with a labeled status dot.
- **03. OPERATING PROCEDURE (How It Works — 3 steps):** numbered procedure entries (`STEP 01/02/03`) joined by a dashed connector rule; each step has number, title, description, and an optional small schematic.
- **04. FLIGHT LOGS (Testimonials — 3 cards):** log-entry styling: log ID, quote, author (name + role), and a green status dot labeled "VERIFIED FLIGHT LOG".
- **05. PROCUREMENT OPTIONS (Pricing — 3 tiers):** `MK-I SCOUT` (entry, ghost CTA), `MK-II VOYAGER` (featured — solid cyan border, `RECOMMENDED` badge, yellow dot, primary CTA), `MK-III FLAGSHIP` (enterprise, "CONTACT MISSION CONTROL" ghost CTA). Each tier: code name, price, billing note, spec list with Material `check` icons.
- **06. TROUBLESHOOTING (FAQ):** 5–6 accordion items per 2.4, written as realistic manual-voice Q&A.
- **07. IGNITION SEQUENCE (Final CTA):** centered dashed-border panel over an intensified grid backdrop: headline, subcopy, and the `.input-group` email capture with a primary "REQUEST LAUNCH CLEARANCE" button — validation, success state, and toast per 2.3/3.
- **08. APPENDIX (Footer):** multi-column flex: wordmark + document colophon (`DOC. NO. / REV. / SHEET 1 OF 1`), three groups of secondary links (Product, Company, Legal — real English labels), and a bottom bar with copyright, a green "ALL SYSTEMS NOMINAL" status line, and social links as labeled Material Symbols.

---

## 6. COPY & CONTENT DIRECTION (ENGLISH ONLY)

- **All user-facing copy must be written in English** — section names, labels, statuses, testimonials, FAQ answers, footer links, `aria-labels`, and toasts. No Portuguese or other-language strings anywhere.
- **Voice:** dry, precise, confident engineering documentation. Uppercase + wide letter-spacing for labels, eyebrows, badges, and CTAs; sentence case for body paragraphs to preserve readability.
- **Product concept:** invent one coherent fictional product (suggested: a deployment/infrastructure platform treated as a spacecraft, wordmark e.g. "ORBITAL") and keep every section consistent with it.
- **Anchor strings for tone:** eyebrow "OPERATIONS MANUAL — REV. 2026.1"; headline direction "EVERY DEPLOYMENT IS A LAUNCH."; statuses "ALL SYSTEMS NOMINAL" / "CALIBRATING"; CTA "INITIALIZE SYSTEM"; toast "TRANSMISSION RECEIVED — CHECK YOUR INBOX."
- **Decorative garnish** (`FIG. 01`, `SCALE 1:1`, `REV. C`, crosshairs, "DO NOT FOLD") is encouraged and must be `aria-hidden`.
