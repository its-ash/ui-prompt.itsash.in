**ROLE:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page specified below **in a single attempt**. Output final, runnable code — no TODOs, no stubs, no follow-up questions. Write **all user-facing copy in English**.

---

## 1. PROJECT BRIEF & THEME DIRECTION

**1.1 Product & Voice** — The page promotes **GRAVITY**, a type specimen instrument: a browser-based tool that lets designers load typefaces, tune variable-font axes, inspect kerning, and export specimen proofs. Write original copy in the product's voice: confident, technical, utilitarian — short declarative sentences using typographic vocabulary (glyphs, axes, proofs, kerning, optical size).

**1.2 Aesthetic Definition** — Style: **2010s Web Brutalism**. Keywords: *type, specimen, tool, brutalism, gradient, grid-layout*. The page must feel like a printed specimen sheet rendered on the web: exposed structural grids, 2px ink borders, oversized display typography, monospace metadata labels, hard offset shadows, visible section dividers, raw numeric indices (01, 02, 03…), and a high-contrast paper-and-ink palette. Decoration must be structural, never ornamental.

**1.3 Required CSS Techniques** — Every item must appear at least once in `style.css`: CSS Grid, Flexbox, Transitions, Transforms, Gradients, Text Shadows, Border Radius, Aspect Ratio.

**1.4 Theme Modes** — Light mode is the visual default per the source spec ("✓ Light / ○ Dark"). **Exception clause:** although Dark is marked secondary in the source, full Dark Mode support remains mandatory (see 2.3); Light is merely the first-visit default.

---

## 2. STRICT RULES & ARCHITECTURE

**2.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **The `style="..."` attribute is forbidden.**
- Target all design properties, layout rules, and states via class or ID selectors only.
- HTML must remain semantic and clean (header, nav, main, section, article, footer); re-theming the site must require CSS edits only, never markup changes.

**2.2 CSS Variables & Theme Tokens**
Define the full token set in `:root` (light/default) and override under `.dark`:

- **Light (default):** `--primary: #191713` · `--secondary: #6b665c` · `--bg-primary: #EFEBE3` · `--bg-secondary: #EAE5DB` · `--text-primary: #191713` · `--text-secondary: #6b665c` · `--text-success: #3E5635` · `--text-error: #B0301F` · `--border-default: #191713` · `--border-subtle: #a39d8f` · `--border-success: #3E5635` · `--border-error: #B0301F` · `--accent: #D23C28` · `--accent-contrast: #EFEBE3`
- **Dark:** `--primary: #EFEBE3` · `--secondary: #a39d8f` · `--bg-primary: #191713` · `--bg-secondary: #26221C` · `--text-primary: #EFEBE3` · `--text-secondary: #a39d8f` · `--text-success: #9DB58A` · `--text-error: #E8604C` · `--border-default: #EFEBE3` · `--border-subtle: #6b665c` · `--border-success: #9DB58A` · `--border-error: #E8604C` · `--accent: #D23C28` · `--accent-contrast: #EFEBE3`
- **Gradients (define as tokens):** `--gradient-paper` (#EFEBE3 → #EAE5DB, subtle surface wash) · `--gradient-ink` (#191713 → #34302A, dark blocks) · `--gradient-accent` (#D23C28 → #191713, 135deg, emphasis fills).
- **Brutalist extras:** `--shadow-text: 4px 4px 0 var(--accent)` (hard vermilion text offset) · `--shadow-hard: 6px 6px 0 var(--primary)` (hard offset elevation).
- **Type:** `--font-display: "Archivo Black"` · `--font-base: "Archivo"` (400/500/700) · `--font-mono: "Space Mono"` (400/700).
- **Geometry & elevation:** `--radius-sm: 2px` · `--radius-md: 4px` · `--radius-lg: 9999px` · `--shadow-sm` · `--shadow-md` (soft, ink-tinted).
- **Motion & space:** `--spacing-gap: clamp(1rem, 3vw, 1.5rem)` · `--transition-fast: 120ms` · `--transition-normal: 250ms` · `--ease-standard: cubic-bezier(0.2, 0, 0.2, 1)`.
- **Stacking:** `--z-dropdown: 100` · `--z-modal: 1000` · `--z-toast: 1100` (define all three even if unused).
- **Contrast pairing:** every light background token must pair with a dark text token and vice versa, in **both** themes. Never use `#ffffff`; if a brighter surface than `--bg-primary` is genuinely required in light mode, use `#fefefe`. Derived intermediate neutrals (e.g., `#26221C`, `#34302A`) are permitted only between existing palette values and must stay in the warm-gray family.

**2.3 Mandatory Dark Mode Support**
- Provide dark tokens via both a `.dark` class on `<html>` and `@media (prefers-color-scheme: dark)`.
- Persist the user's choice in `localStorage`; on first visit fall back to `prefers-color-scheme`.
- Include a **visible toggle** in the header: a Material Symbol button whose icon swaps (`light_mode`/`dark_mode`), with correct `aria-pressed` and a dynamic `aria-label` ("Switch to dark theme" / "Switch to light theme").
- Background/text tokens must switch seamlessly via CSS transitions (`var(--transition-normal)`) with **no HTML restructuring**.

**2.4 Layout Standards: CSS Grid (Macro) + Flexbox (Components)**
The theme explicitly mandates `grid-layout`. **Exception clause:** CSS Grid is required for all macro/section structure; Flexbox remains mandatory for all component internals.
- **Macro:** page scaffold is a 12-column CSS Grid container (max-width ~1200px, centered, gutters `var(--spacing-gap)`). Features, How It Works, Testimonials, Pricing, and footer link columns are Grid layouts using `repeat(auto-fit, minmax(...))` that collapse 3 → 1 below 768px.
- **Micro:** every flex container **must default to `align-items: center`** unless an exception is explicitly justified (e.g., stacked text inside cards uses `flex-start`; justify each exception in a CSS comment).
- **Mobile-first:** use `min-width` media queries only. Zero horizontal overflow at 320px.

**2.5 Styling Approach**
Hand-authored custom CSS in `style.css` is the default (Tailwind CSS is permitted; if used, define reusable component classes via `@layer`/`@apply` mapped to the variables). No preprocessors, no CSS-in-JS, one stylesheet.

**2.6 Typography & Icons (Google Fonts Mandatory)**
- Load Google Fonts via `<link>`: **Archivo Black** (display), **Archivo** (base), **Space Mono** (mono metadata). Bind them to `--font-display`, `--font-base`, `--font-mono`.
- Icons: **Google Material Symbols (Outlined)** via the Google Fonts link, rendered as ligature spans. **Raw inline SVGs, other icon libraries, and local icon files are forbidden.**
- Use fluid sizing via `clamp()` — the hero display heading should scale to ~10–12vw.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

**3.1 Buttons (`.btn`)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; 2px solid `var(--border-default)`; square corners; `Space Mono` 700 uppercase with wide letter-spacing. Variants: `.btn--primary` (ink fill, paper text, `--shadow-hard`), `.btn--ghost` (transparent, ink border), `.btn--accent` (fill `var(--gradient-accent)`, color `var(--accent-contrast)`), `.btn--danger`.
- **Hover:** visual shift — the hard shadow collapses (6px → 3px) or brightness changes; `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring — 3px outline `var(--accent)`, 2px offset, visible in both themes.
- **Active/Pressed:** `transform: scale(0.97)` (may combine with `translate(2px, 2px)` to collapse the hard shadow).
- **Loading (`.btn--loading`):** disables interaction, prevents double-clicks, renders a CSS spinner or rotating Material icon **without changing button dimensions**; set `aria-busy="true"`.
- **Disabled:** `opacity: 0.5`, greyscale filter, `cursor: not-allowed`, no shadow.
- **Success/Error:** `.btn--success` / `.btn--error` temporary feedback styles driven by `--text-success` / `--text-error`.
- **Danger:** `.btn--danger` must be visually distinct in **both** themes (error border + accent fill).

**3.2 Cards (`.card`)**
- **Default:** flex column layout, 2px `var(--border-default)` border, `var(--bg-secondary)` background, generous padding, square corners.
- **Hover:** `transform: translateY(-2px)` plus `--shadow-md` or `--shadow-hard`; transition `var(--transition-normal)`.
- **Focus-within:** border shifts to `var(--accent)` when any child link/button receives focus.
- **Loading (`.card--skeleton`):** shimmer keyframe sweeping `--gradient-paper`; fixed min-heights so no layout jump occurs.
- **Empty (`.card--empty`):** centered fallback — Material icon inside a bordered tile plus one clear guidance sentence.
- **Variants:** `.card--feature`, `.card--pricing`, `.card--pricing--featured`, `.card--testimonial`.

**3.3 Forms & Inputs (`.input-group`)**
- **Structure:** flex column wrapper → label (mono, uppercase) → input → dedicated error feedback container. Associate label via `for`/`id`; error container uses `aria-live="polite"` and `aria-describedby`.
- **States:** empty; focused (2px `var(--accent)` outline ring); filled; valid (`.input-group--valid`: `--border-success` + Material "check" icon); invalid (`.input-group--invalid`: `--border-error`, error icon, error copy in `var(--text-error)`); disabled; read-only.
- **Never rely on color alone** — pair color changes with icons and text. Inputs: 2px border, min-height 44px, `--radius-sm`.

**3.4 Overlay / Modal (conditional)**
No modal is required for this build. If you include one (e.g., a demo preview), it must be a centered flex overlay (`align-items: center; justify-content: center`) with an ink backdrop at `--z-modal`, animated opening/closing states, loading and success/error states, close on `Esc` and backdrop click, keyboard focus trapping, and a Material icon close button with `aria-label="Close"`. Otherwise omit it entirely — never ship a non-functional modal shell.

---

## 4. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` sizing, `min-width` breakpoints, grids collapse gracefully, no horizontal overflow at 320px.
- **Smooth animations:** `transition: var(--transition-normal) var(--ease-standard)` on all state changes (color, border, shadow, transform). Honor `prefers-reduced-motion: reduce` — disable transforms, spinners, and shimmer; keep instant state changes.
- **Accessibility (a11y):** WCAG AA contrast in both themes; semantic landmarks; exactly one `<h1>`; ordered headings; a skip-to-content link; full keyboard operability with visible `:focus-visible` everywhere; correct ARIA on custom widgets (menu button: `aria-expanded`/`aria-controls`; toggle: `aria-pressed`; `aria-live` regions for form feedback); decorative watermark text marked `aria-hidden`.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** `.btn--danger` must be unmistakable in light and dark modes.

---

## 5. PAGE COMPOSITION — SECTION-BY-SECTION SPEC

Use a shared section header pattern: 2px top rule, mono index label ("01 — FEATURES"), `<h2>` in `--font-display`. All sections get ids matching nav anchors.

**5.1 Site Header (sticky)** — Flex row (`align-items: center`, `justify-content: space-between`): wordmark "GRAVITY" (display font) + small mono descriptor; nav links in mono uppercase with hover underline effects; theme toggle button. Below 768px the nav collapses into a disclosure menu: button with `aria-expanded`/`aria-controls` at `--z-dropdown`, `Esc` closes, link clicks close it.

**5.2 Hero (`#hero`)** — Full-bleed, ~90vh grid; background uses `--gradient-paper` plus an optional decorative fine-line grid overlay (`repeating-linear-gradient`, `aria-hidden`). Content: mono eyebrow "TYPE SPECIMEN INSTRUMENT — Nº 001"; `<h1>` "GRAVITY" in `clamp(3.5rem, 12vw, 9rem)` display type, solid `var(--text-primary)` with hard vermilion `text-shadow: var(--shadow-text)`; a 1–2 sentence subhead; CTA pair — `.btn--primary` "Start typesetting" (anchors to `#pricing`) and `.btn--ghost` "See how it works" (`#how-it-works`). Below: a **specimen strip** — an auto-fit grid of glyph tiles ("Aa", "Gg", "Rr", "Ag", "&", "№"), each `aspect-ratio: 1/1`, 2px border, glyph centered in flex; hover inverts the tile (ink background, paper glyph); one tile filled with `--gradient-accent`.

**5.3 Features (`#features`)** — Index "01 — FEATURES", 3× `.card--feature` in a 3→1 grid: mono index (F.01/F.02/F.03), Material icon, `<h3>`, 2–3 sentences of real copy: (1) **Live variable axes** — drag weight, width, and optical size in real time; (2) **Kerning inspection** — pair overlays marked in vermilion; (3) **Instant proofs** — waterfalls, pangrams, full character sets on demand.

**5.4 How It Works (`#how-it-works`)** — Index "02 — PROCESS", 3 steps joined by 2px rules on desktop: oversized display numeral with gradient text fill (`background: var(--gradient-ink); background-clip: text;` with an `@supports` fallback to solid color), step title, copy — (1) **Load a face** (drag-drop TTF/OTF/WOFF2 or pick from the library), (2) **Set the axes** (sliders with live preview), (3) **Export the proof** (PDF, PNG, or CSS tokens). Hover: numeral nudges via transform or gains an accent rule.

**5.5 Testimonials (`#testimonials`)** — Index "03 — FIELD NOTES", 3× `.card--testimonial`: oversized vermilion quote mark (or Material "format_quote" icon), a 1–3 sentence designer quote, and a **monogram avatar tile** (`aspect-ratio: 1/1`, `border-radius: 50%`, `--gradient-ink` fill, paper initials — no external images), name in bold plus role/studio in mono `--text-secondary`. Card hover per 3.2.

**5.6 Pricing (`#pricing`)** — Index "04 — PRICING", 3× `.card--pricing`: **Specimen** ($0 — hobbyists, 3 typefaces, watermarked proofs), **Studio** ($19/mo — featured), **Foundry** ($79/mo — teams, unlimited faces, API, white-label). Featured card: `.card--pricing--featured` with accent 2px border, `--shadow-hard`, a mono pill tag "MOST USED" using `--radius-lg`, and elevated visual weight without breaking hover states. Feature lists use Material "check" icons in `var(--text-success)`. CTAs: featured tier uses `.btn--accent`; others use `.btn--primary`/`.btn--ghost`.

**5.7 FAQ (`#faq`)** — Index "05 — FAQ", 5–6 native `<details class="faq__item">` + `<summary>` (flex, `align-items: center`, `justify-content: space-between`, mono question, Material "add" icon that rotates 45° on `[open]` via CSS transform). Divider borders between items; opening transitions respect reduced motion. Write real Q&A copy (supported formats, variable fonts, licensing, exports, refunds).

**5.8 Final CTA (`#cta`)** — Full-bleed block: `var(--gradient-ink)` background, inverted text; `<h2>` with gradient text (`#EFEBE3` → `#a39d8f`, `background-clip: text`, `@supports` fallback to `var(--text-primary)`); supporting sentence; email capture form — `.input-group` (visible "Work email" label, `type="email"`, required) + submit `.btn--accent` "Get early access". `script.js` validates: invalid → `.input-group--invalid` with inline error text announced via `aria-live`; valid → button loading state → success feedback (`.btn--success` + "Proof queued. Check your inbox."). Prevent default and simulate with a timeout; no backend.

**5.9 Footer (`<footer>`)** — 2px top rule; grid layout: brand block (wordmark, one-line description, social icon buttons with `aria-label`s) + **three secondary link columns** (Product: Features, Pricing, Changelog · Resources: Specimens, Kerning guide, API docs · Company: About, Contact, Legal). Links point to in-page anchors where matching sections exist, otherwise `href="#"` with descriptive text; mono, small, hover accent underline. Bottom bar: "© [current year via script.js] GRAVITY Type Specimen Instrument" plus a colophon line ("Set in Archivo & Space Mono"). Optional decorative giant "GRAVITY" watermark, clipped, `aria-hidden="true"`.

---

## 6. DELIVERABLES & OUTPUT FORMAT

**6.1 File Structure** — Separate `index.html`, `style.css`, `script.js`. The only script reference is a single deferred entry point (`<script src="script.js" defer>`). No inline styles, no inline event handlers — use `addEventListener` only.

**6.2 Naming Convention** — BEM exclusively (`block__element--modifier`), never mixed with other conventions. Semantic block names (`.header`, `.hero`, `.features`, `.card`, `.btn`, `.input-group`, `.faq`, `.footer`).

**6.3 Copy & Placeholders** — Write original, thematic English copy for every section. **Lorem ipsum is forbidden.** `href="#"` is acceptable only for links without real destinations, and every link must carry descriptive accessible text.

**6.4 `script.js` Scope** — Theme toggle + persistence, mobile menu toggle, CTA form validation with `aria-live` announcements and simulated submission, dynamic copyright year. Vanilla ES only; no libraries.

**6.5 Self-Check Before Output** — Verify: every technique in 1.3 appears at least once; all tokens in 2.2 are defined; both themes pass AA contrast; a full keyboard-only pass works (nav, menu, FAQ, form, footer); no horizontal scroll at 320px; reduced motion honored; every interactive element has visible hover, focus, and active feedback. Then output the three complete files.
