**SYSTEM PROMPT — CODING TASK: "ARTISANAL & PERSONAL CREATIVITY" LANDING PAGE**

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page on the first attempt — no clarifying questions, no partial output. Every specification needed is contained below.

**Project Brief:**
- **Theme:** "Artisanal & Personal Creativity" — a landing page for a small-business creative consulting firm.
- **Mood:** Personal, Creative, Approachable, bespoke, authentic, friendly. Era: 2026+ "Digital Human Touch." Output category: Art & Illustration.
- **Visual language:** Hand-drawn icon illustrations, journal-style typography, crumpled-paper textures, pencil-effect borders, progressive "drawing" hover micro-interactions, and "sketch"-style section transitions.
- **Sections (in order):** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
- **Copy:** Write ALL user-facing copy in English. Tone: warm, first-person, jargon-free, like a note written by a trusted creative friend. No lorem ipsum anywhere — write real, finished copy.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **Forbidden:** any `style="..."` attribute in the HTML.
- Target everything via class/ID selectors only. HTML stays semantic and style-agnostic — a full re-theme must be possible by editing CSS alone.

**1.2 CSS Variables & Theme Tokens**
Store every token in `:root` (light theme) and override in `.dark`:

- **Colors:** `--primary: #40E0D0` (Turquoise Blue); `--secondary: #FFD700` (Mustard Yellow); `--accent-coral: #FF7F50` (Coral Rose); `--accent-mint: #98FB98` (Mint Green); `--accent-lavender: #E6E6FA` (Lavender); `--accent-tan: #D2B48C` (Light Brown — the "pencil" tone).
- **Backgrounds:** `--bg-primary: #FDFBF5` (warm paper white — **never `#ffffff`**; where the brief requests white, use `#fefefe`); `--bg-secondary: #F0F0F0` (Light Gray); `--bg-accent: #E6E6FA` (Lavender, for alternating sections).
- **Text:** `--text-primary: #333333`; `--text-secondary: #59544C` (warm gray, ≥4.5:1 on `--bg-primary`); `--text-success: #1F7A4D` (darkened mint — raw `#98FB98` is decorative fill only, never text); `--text-error: #B3261E` (darkened coral — raw `#FF7F50` is decorative fill only); `--text-on-fill: #26221C` (ink text used on turquoise/mustard fills in both themes).
- **Borders:** `--border-default: #D2B48C` (1px for subtle dividers, 2px for pencil-sketch card borders); `--border-success: #1F7A4D`; `--border-error: #B3261E`.
- **Radii:** `--radius-sm: 6px`, `--radius-md: 12px`, `--radius-lg: 24px`, plus the hand-drawn wobble tokens `--radius-sketch: 255px 15px 225px 15px / 15px 225px 15px 255px` and `--radius-sketch-alt` (mirrored values) — alternate them across adjacent cards for organic variety.
- **Shadows:** `--shadow-sm`, `--shadow-md`, plus `--shadow-sketch: 4px 4px 0 rgba(51,51,51,0.10)` (offset "pencil" shadow).
- **Spacing/Transitions:** `--spacing-gap: 1rem`, `--spacing-section: 4rem`, `--transition-fast: 0.25s`, `--transition-normal: 0.6s`, `--ease-standard: ease-in-out` (per brief). Transition specific properties rather than `all` where possible.
- **Elevation:** `--z-dropdown: 10`, `--z-modal: 50`, `--z-toast: 60` (define even if unused).
- **Fonts:** `--font-display: 'Indie Flower', cursive`; `--font-base: 'Nunito', sans-serif`.
- **Contrast pairing:** every light background token pairs with dark text tokens and every dark background token pairs with light text tokens — enforced in both themes.

**1.3 Mandatory Dark Mode Support**
- Define a full dark palette under both `@media (prefers-color-scheme: dark)` and a `.dark` class: `--bg-primary: #1E1B17` (dark kraft paper), `--bg-secondary: #292520`, `--bg-accent: #322E3A`, `--text-primary: #F7F3EA`, `--text-secondary: #CFC7B8`, `--border-default: #E3CDA4`, `--primary: #4DE5D4`, `--accent-coral: #FF8F66`, `--text-success: #6FD59A`, `--text-error: #FF8A7A`, dark shadows via `rgba(0,0,0,0.4)`. Accents stay bright; fills keep `--text-on-fill` ink text.
- Ship a visible theme toggle (sun/moon Material Symbols icon) with correct `aria-pressed`/`aria-label` states; persist choice in `localStorage`.
- **Exception:** the source brief requested a light-only presentation. Per mandatory standards, dark mode must still be fully built and toggleable — but **light mode is the default on first visit** (override `prefers-color-scheme` for the initial default); dark mode is opt-in via the toggle.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
- Mobile-first: rows collapse to columns below ~768px; nothing overflows horizontally at 320px; content sits in a centered `max-width: 72rem` container.

**1.5 Framework & Class Architecture**
- Use clean custom CSS organized with `@layer` (reset, tokens, base, layout, components, utilities) — no build step required. All styles map back to the tokens and to reusable component classes (`.btn`, `.card`, `.accordion__item`, etc.).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load **Google Fonts** via `<link>`: `Indie Flower` (identity font: h1–h3, buttons, step numbers, sticky notes, journal accents) and `Nunito` (body copy, 16–18px, `line-height: 1.6`, `max-width: 65ch` — pure cursive body text is forbidden for legibility).
- All icons are **Google Material Symbols (Rounded style)**. **Forbidden:** raw inline SVGs, local icon files, or any other icon set.
- **Exception:** the brief requests "hand-drawn icon illustrations." Deliver the hand-drawn look exclusively through CSS (wobbly radii, sketch shadows, doodle underlines, paper textures) wrapped around Material Symbols — never via inline SVGs or image files.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target, Indie Flower label, sketch radius.
- **Variants:** `.btn--primary` (turquoise fill, ink text), `.btn--secondary` (paper fill, 2px tan pencil border), `.btn--danger` (deep coral fill — visually distinct in both themes).
- **Hover:** progressive "drawing" effect — a pseudo-element underline/border scales from 0 → 100% (`transform-origin: left`) plus `--shadow-sketch` growth; `cursor: pointer`.
- **Focus:** distinct dashed 2px pencil ring in `--primary` (`outline` + `outline-offset`) in both themes.
- **Active:** `transform: scale(0.97)`.
- **Loading:** disables interaction, prevents double-clicks, shows a rotating Material Symbol spinner without changing button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback states driven by `--text-success` / `--text-error`.

**2.2 Cards** (Features, Testimonials, Pricing, Hero note)
- **Default:** `--bg-secondary` or paper fill, 2px `--border-default` pencil border with `--radius-sketch`, `--shadow-sketch`, flex column layout.
- **Hover:** `transform: translateY(-2px)` + border "draws" (pseudo-element animates in) + shadow deepens.
- **Focus-within:** border highlights when a child link/button receives focus.
- **Loading (skeleton):** define a shimmer animation class for future async content so layout never jumps.
- **Empty state:** define a fallback layout with a Material Symbol icon and guidance text.

**2.3 Form & Input (Final CTA email capture)**
- Flex container wrapping: `<label>`, `<input type="email">`, and a dedicated error-feedback element wired to an `aria-live="polite"` region.
- **States:** empty; focused (dashed pencil ring); filled; valid (mint border + check Material Symbol); invalid (error border, error icon, `--text-error` message — never color alone); disabled; read-only.
- Submit button shows loading → success feedback per 2.1.

**2.4 FAQ Accordion (custom widget)**
- Each item: `<button aria-expanded>` trigger + `aria-controls` panel (`role="region"`), chevron Material Symbol rotates on open, panel height animates via CSS transition.
- Fully keyboard operable (Enter/Space), visible focus rings, hover feedback. No modals are required; if any dialog is ever added it must trap focus, close on `Esc`/overlay click, and use `--z-modal`.

---

## 3. PAGE STRUCTURE & SECTION REQUIREMENTS

**3.0 Site Header (required for nav + theme toggle):** slim sticky header — Indie Flower wordmark ("The Sketchpad Studio" or similar), anchor links (Features, How It Works, Pricing, FAQ), theme toggle. Add a skip-to-content link.

**3.1 Hero:** kicker line, oversized Indie Flower H1 (e.g., "Big ideas for small businesses — drawn by hand, made to stick.") with a doodle underline that draws itself on load, warm subcopy, two CTAs ("Start a Project" primary, "See How It Works" anchor secondary), a slightly rotated crumpled sticky-note card with a journal-style quote, CSS doodle accents (squiggles/stars), crumpled-paper background.

**3.2 Features — 3 cards:** Brand Storytelling (`auto_stories`), Creative Direction (`brush`), Down-to-Earth Marketing (`storefront`). Each: Material Symbol in a sketch-circle, Indie Flower title, 2–3 friendly sentences, hover draw effect per 2.2.

**3.3 How It Works — 3 steps:** 01 "Let's Chat" (`local_cafe`), 02 "We Sketch the Plan" (`draw`), 03 "You Watch It Grow" (`trending_up`). Journal-style numbers, dashed pencil connector line (CSS) that hides/stacks vertically on mobile, staggered scroll reveal.

**3.4 Testimonials — 3 quotes:** named small-business owners (e.g., Mara — Flour & Fern Bakery; Diego — Terra Cotta Pottery Studio; June — Dog-Eared Books). Five `star` Material Symbols, hand-drawn quote mark, crumpled note-card styling with alternating ±1° rotations.

**3.5 Pricing — 3 tiers:** "The Sketch" ($290 one-time brand starter), "The Masterpiece" ($890/mo — featured, mustard "Most Popular" badge, elevated sketch border), "The Bespoke" (custom quote). Feature lists use `check` Material Symbols; each tier has a CTA button.

**3.6 FAQ — 5-question accordion** covering: who it's for, project timelines, remote work, existing brands, and how payments work.

**3.7 Final CTA:** journal sign-off headline ("P.S. — your business deserves a story worth telling."), email form per 2.3, success state with friendly confirmation copy.

**3.8 Footer:** secondary links (About, Services, Work, Privacy Policy, Terms), social Material Symbol icons, dynamic copyright year, warm one-line sign-off.

---

## 4. CORE UX & MICRO-INTERACTION RULES

- **Hand-drawn effects (CSS-only, no images):** crumpled paper = layered low-opacity radial/repeating-linear gradients; pencil borders = 2px `--border-default` + `--radius-sketch` (+ optional offset second border via `box-shadow`); progressive drawing = pseudo-elements transitioning `transform: scaleX(0→1)` or `clip-path` on hover/focus.
- **Sketch section transitions:** `IntersectionObserver` adds `.is-visible`; elements reveal with opacity + `translateY(12px)` + a tiny rotation, staggered via `transition-delay`.
- **Responsive by default:** fluid type/sizing, no horizontal overflow at 320px.
- **Motion:** all transitions use the tokens; `prefers-reduced-motion` disables transforms, rotations, and reveals (content stays fully visible).
- **Accessibility:** ≥4.5:1 body-text contrast in both themes; never color alone for state; semantic HTML5 landmarks; correct ARIA on toggle/accordion/form; logical focus order; full keyboard operability; `aria-live` for all dynamic feedback.
- **Mandatory feedback:** every click, hover, and submission produces a visible state change.

---

## 5. DELIVERABLES & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, `script.js`. Only one `<script defer src="script.js">` reference — no inline script blocks.
- **Naming:** strict BEM throughout (`.card__icon--sketch`, `.hero__note--crumpled`, `.accordion__panel`, etc.). Express the brief's suggested classes (`.hand-drawn-icon`, `.journal-text`, `.crumpled-paper-bg`) as BEM modifiers — never mix conventions.
- **Copy:** complete, real, English copy everywhere — zero lorem ipsum, zero TODO placeholders.
- **Quality bar before delivery:** verify keyboard-only navigation, theme toggle persistence after reload, 320px viewport with no horizontal scroll, and WCAG AA contrast in both themes. Output the finished code immediately.
