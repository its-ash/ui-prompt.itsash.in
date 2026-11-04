# CODING AGENT PROMPT — Landing Page: "CONSTRUCT/26" (Dynamic Events Constructivism)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a **complete, production-ready landing page on the first attempt** — no stubs, no TODOs, no partial sections.

**Project:** A landing page for a fictional design & innovation conference ("CONSTRUCT/26", Berlin, March 2026), styled as **Dynamic Events Constructivism** (Retro & Pop output category): energetic, innovative, structured. The visual language is constructivist poster design — angular geometric shapes, image/text collages with overlays, asymmetric layouts, hard offset shadows, impactful condensed sans-serif typography — executed with modern, accessible, fully responsive engineering.

**Required sections, in order:** Sticky Header/Nav, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Language:** Write ALL user-facing copy in English. All class names, CSS variables, file names, and code comments in English/ASCII.

**Mandatory exception clauses:**
- *Dark mode:* The source style spec requested light-mode-only output; dark mode is architecturally mandatory and must still be fully implemented as specified in Section 1.3.
- *White substitution:* Where the palette specifies `#FFFFFF` backgrounds, use `#fefefe` per token rules; reserve pure `#FFFFFF` for text on dark/saturated backgrounds only.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling must live in a dedicated `style.css` file. **Forbidden:** `style="..."` attributes, inline `<style>` blocks, and presentation attributes in HTML.
- All design properties, layout rules, and states must be targeted via class or ID selectors only.
- HTML must remain semantic and styling-agnostic: changing the site's look must require editing only `style.css`, never the markup.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` (and theme overrides per 1.3). Required tokens and values:

- **Colors:** `--primary: #FF5722` (vibrant orange); `--secondary: #1A237E` (navy); `--bg-primary: #fefefe`; `--bg-secondary: #F4F1EA` (warm paper neutral); `--text-primary: #424242`; `--text-secondary: #616161`; `--text-success: #187A2E` (darkened emerald, AA-compliant on light backgrounds); `--text-error: #C62828`; `--border-default: rgba(0,0,0,0.15)`; `--border-error: #C62828`; `--border-success: #2ECC40`.
- **Accent tokens (decorative only, never small body text):** `--accent-gold: #FFD700`; `--accent-purple: #673AB7`; `--accent-emerald: #2ECC40`; `--accent-black: #000000`.
- **Contrast pairing (mandatory in every theme):** light background ↔ dark text; dark background ↔ light text. Approved pairings: orange background ↔ black text (~6.6:1); navy background ↔ white text (~13:1); gold background ↔ black text (~14:1); purple background ↔ white text (~7:1). Never set white text on orange, and never use `#FF5722`, `#FFD700`, or `#2ECC40` as small-text colors on light backgrounds.
- **Radius (constructivist = sharp):** `--radius-sm: 0`; `--radius-md: 2px`; `--radius-lg: 4px`.
- **Shadows (hard offset, zero blur — Retro & Pop poster look):** `--shadow-sm: 4px 4px 0 var(--accent-black)`; `--shadow-md: 8px 8px 0 var(--accent-black)`.
- **Spacing & transitions:** `--spacing-gap: 1.5rem`; `--transition-fast: 0.2s ease-out`; `--transition-normal: 0.5s ease-in-out`; `--ease-standard: ease-in-out`.
- **Elevation/stacking:** `--z-dropdown: 1000`; `--z-modal: 1050`; `--z-toast: 1100`.
- **Typography tokens:** `--font-display: "Bebas Neue", sans-serif`; `--font-base: "Archivo", sans-serif`.

**1.3 Mandatory Dark Mode Support**
- Define dark mode tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`: `--bg-primary: #111111`; `--bg-secondary: #1C1C1C`; `--text-primary: #FAFAFA`; `--text-secondary: #B8B8B8`; `--border-default: rgba(255,255,255,0.18)`.
- **Dark-mode accent adjustments (contrast pairing enforced):** navy `--secondary` lightens to `#7986CB`; purple lightens to `#9575CD`; hard shadows switch to `rgba(0,0,0,0.6)` or accent-colored offsets (e.g., orange `--shadow-md`) for pop. Orange and gold remain viable on dark backgrounds.
- **Theme switching:** background/text variables must swap seamlessly with zero HTML restructuring. Persist user choice via `localStorage` (key: `construct-theme`), falling back to `prefers-color-scheme` on first visit. Provide a visible toggle button in the header (Material Symbols icon `dark_mode`/`light_mode`) with correct `aria-pressed` and dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode").

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with **Flexbox**. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a code comment (the single allowed exception: `align-items: stretch` for equal-height pricing cards).
- Achieve collage overlaps with flexbox + negative margins + `z-index` + absolutely positioned decorative elements — do not introduce CSS Grid.
- Mobile-first: all asymmetric multi-column compositions must collapse to a single column at ≤768px. No horizontal scrolling at any viewport ≥320px; sections containing decorative shapes must use `position: relative; overflow: hidden` to clip them.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS via CDN for structural/layout utilities only. All visual identity (colors, typography, effects) lives in `style.css` via CSS variables and semantic component classes (`.btn`, `.card`, `.input-group`) plus the three mandated thematic classes kept verbatim: `.collage-section`, `.angular-shape`, `.unfolding-transition`.
- Tailwind color utilities must reference variables (e.g., arbitrary values pointing at `var(--primary)`); **no raw hex values in the HTML markup**.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load via Google Fonts `<link>` (with `preconnect`): **Bebas Neue** (display: all headings, numerals, buttons, badges — uppercase) and **Archivo** (body: weights 400–800).
- Load **Google Material Symbols Outlined** for every icon. **Forbidden:** inline SVGs, local icon files, emoji used as icons.
- Type scale: `h1` uses `clamp(3rem, 8vw, 6.5rem)` Bebas Neue uppercase; section titles `clamp(2.25rem, 5vw, 4rem)`; body text 1rem–1.1rem Archivo, line-height 1.6.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component** (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`)
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem`; minimum touch target 44×44px; Bebas Neue uppercase label with letter-spacing; `border-radius: var(--radius-sm)`; hard offset shadow `var(--shadow-sm)`.
- **Variants:** `.btn--primary` = orange background + black text (approved pairing); `.btn--secondary` = navy background + white text; `.btn--ghost` = transparent, 2px navy border, fills navy on hover.
- **Hover:** shadow grows to `--shadow-md` and button translates `(-2px, -2px)`; `cursor: pointer`; leading Material icon rotates 15deg (constructivist rotation motif).
- **Focus:** distinct `:focus-visible` ring (3px solid `var(--secondary)`, 2px offset) visible in both themes.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** `.btn--loading` — `pointer-events: none`, `aria-busy="true"`, CSS spinner or rotating Material `progress` icon, fixed dimensions (no layout shift), double-submit prevented.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error:** `.btn--success` / `.btn--error` temporary feedback styles driven by `--text-success` / `--text-error` (used by the Final CTA form submit).

**2.2 Card Component** (`.card`, `.card--featured`, `.card--skeleton`, `.card--empty`)
- **Default:** flex column layout, `--bg-primary` or `--bg-secondary` surface, 2px `--border-default`, hard shadow, `--radius-md`.
- **Constructivist stagger:** feature and testimonial cards carry small base rotations via modifiers (e.g., −1.5deg, 1deg, −0.75deg); **hover** rotates to 0deg, lifts `translateY(-2px)`, and shifts the shadow — all via `transition: var(--transition-normal)`.
- **Focus-within:** border color shifts to `var(--primary)` when a child link/button receives focus.
- **Loading (skeleton):** define `.card--skeleton` shimmer keyframes in CSS to prevent layout jumps (define even if unused on the static page).
- **Empty state:** define a `.card--empty` pattern with a Material icon and clear guidance text.

**2.3 Form & Input Requirements** (`.input-group` — used in the Final CTA email capture)
- **Structure:** flex column wrapper containing `<label>`, `<input>`, and a dedicated error/feedback container wired to `aria-live="polite"`.
- **States (all styled via CSS classes):** empty; focused (outline ring `var(--primary)`); filled; valid (border `--border-success` + check icon + message in `--text-success`); invalid (border `--border-error` + error icon + message in `--text-error`, `aria-invalid="true"`, `aria-describedby`); disabled; read-only.
- Validate on blur and on submit in `script.js`. Never rely on color alone — always pair icon + text message.

**2.4 Modal / Popup (Conditional)**
- No modal is required for this page — all CTAs scroll to anchors. If any dialog is introduced, it must implement: backdrop overlay, centered flex container (`align-items: center`), CSS-animated open/close, Material `close` icon button, keyboard focus trapping, `Esc` and overlay-click closing, `aria-modal` + `aria-labelledby`, `z-index: var(--z-modal)`.

**2.5 FAQ Accordion** (`.faq-item`)
- Trigger is a `<button>` with `aria-expanded` + `aria-controls`; panel has `role="region"` + `aria-labelledby`; Material `expand_more` icon rotates 180deg on open (state communicated by icon rotation, not color alone).
- Open/close animated via CSS (e.g., `grid-template-rows: 0fr → 1fr`) — the "unfolding" motif at component scale. Fully keyboard operable (Tab, Enter, Space).

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid sizing, no horizontal overflow at any width ≥320px.
- **Smooth animations:** `transition: var(--transition-normal)` (0.5s ease-in-out, per the theme's technical spec) on section-level effects; `var(--transition-fast)` on hovers. All animation must respect `prefers-reduced-motion` — disable rotations, unfold transforms, and smooth scrolling; keep simple opacity fades only.
- **Accessibility (a11y):** semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), a single `h1`, logical heading order, skip-to-content link, visible focus rings on all interactive elements, AA contrast in both themes, state never communicated by color alone, `aria-live` regions for all dynamic feedback (form errors, success messages, loading).
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Constructivist micro-interactions (mandatory):**
  - **Hover rotation:** `.angular-shape` elements and decorative badges rotate 8–15deg when their parent card/section is hovered.
  - **Unfolding section transitions:** every `<section>` starts with class `unfolding-transition` — `opacity: 0; transform: perspective(1000px) rotateX(5deg) translateY(24px); transform-origin: top center`. An IntersectionObserver in `script.js` adds `.is-visible` → `opacity: 1; transform: perspective(1000px) rotateX(0)`, with staggered `transition-delay` on children.
  - **Section separators:** each major section uses `border-top: 4px solid var(--primary)` (alternate `var(--secondary)` / `var(--accent-gold)` for rhythm), per the technical CSS spec.
- **Decorative shapes:** all `.angular-shape` elements (clip-path triangles, bars, chevrons in palette colors) must be `aria-hidden="true"` and `pointer-events: none`.
- **Destructive actions:** if any destructive control exists, `.btn--danger` must be visually distinct in both themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File structure:** separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks — a single deferred `script.js` reference only. No inline styles anywhere.
- **Naming convention:** BEM (`block__element--modifier`) consistently across the entire deliverable, plus the three mandated thematic classes (`.collage-section`, `.angular-shape`, `.unfolding-transition`) kept verbatim. Never mix conventions.
- **Copy:** write real, specific English copy for the conference — no lorem ipsum. Placeholder images are allowed only via `https://picsum.photos/seed/<seed>/<width>/<height>`, unified with CSS duotone overlays (`mix-blend-mode`) tinted with palette colors.
- **Completeness:** all sections, all component states, both themes, and all JS behaviors must work on the first attempt.

---

## 5. PAGE ARCHITECTURE & SECTION-BY-SECTION SPECIFICATIONS

**5.0 Header (sticky)**
Flex row: two-tone Bebas Neue wordmark "CONSTRUCT/26"; anchor nav (Features, How It Works, Testimonials, Pricing, FAQ); theme toggle (per 1.3); "Get Tickets" `.btn--primary` linking to `#pricing`. Mobile ≤768px: Material `menu` hamburger toggles a dropdown panel (`z-index: var(--z-dropdown)`), `aria-expanded`, closes on `Esc`, links stack vertically.

**5.1 Hero (`.collage-section`)**
Asymmetric flex composition: ~60% text block, ~40% overlapping image collage (2–3 picsum images in angular clip-path frames, rotated −3deg/+2deg, duotone overlays), floating `.angular-shape` triangles/bars in gold/orange/purple. Content: kicker badge ("DESIGN & INNOVATION CONFERENCE — MARCH 2026 · BERLIN"), three-line Bebas Neue `h1` (e.g., "BUILD THE FUTURE IN BOLD."), supporting paragraph, dual CTAs (Get Tickets → `#pricing`; View Program → `#how-it-works` ghost), and a date/venue strip with Material `calendar_month` and `location_on` icons. Headline lines animate in with a staggered unfold on load.

**5.2 Features — 3 cards**
Section title with angular underline bar. Staggered asymmetric row (middle card offset downward), each card slightly rotated, color-coded by accent (orange / gold / purple): angular icon badge (Material `bolt`, `palette`, `groups`), Bebas Neue title, Archivo description. Hover: rotate to 0, lift, shadow shift. Focus-within border highlight.

**5.3 How It Works — 3 steps**
Zigzag alternating layout. Oversized outlined Bebas Neue numerals "01 / 02 / 03"; dashed angular connector line between steps (CSS borders or clip-path chevrons). Each step: Material icon, title, description. Hover: numeral badge rotates.

**5.4 Testimonials (`.collage-section`)**
Three quote cards in an overlapping collage arrangement: rotated photo frames (picsum avatars with duotone overlay), oversized gold Material `format_quote` glyph, quote in Archivo medium, name + role. Hover: rotate to 0 + lift.

**5.5 Pricing — 3 tiers**
Tiers: Early Bird $149 / Standard $299 (featured) / VIP $499, each with a real feature list (workshop access, session recordings, seating, networking perks) using Material `check` icons. Featured card: `.card--featured` — navy background + white text (approved pairing), gold angular "MOST POPULAR" ribbon (text badge, not color-only), `--shadow-md`, slight scale. Buttons: `.btn--primary` on featured, `.btn--secondary`/`.btn--ghost` elsewhere. Equal-height row via the documented `align-items: stretch` exception.

**5.6 FAQ**
Six real Q&As (tickets & refunds, venue access, workshop sign-up, recordings, accessibility accommodations, contact). Accordion behavior per 2.5.

**5.7 Final CTA**
Full-bleed navy block (white text pairing), giant Bebas Neue headline, email-capture `.input-group` ("Get ticket alerts") with all form states per 2.3 and a submit button demonstrating loading → success feedback via `aria-live`. Gold/orange `.angular-shape` elements clipped at the edges.

**5.8 Footer with secondary links**
Black background, light text (pairing enforced). Columns: brand blurb; secondary links (About, Speakers, Code of Conduct, Contact); legal (Privacy, Terms); social icon row (Material Symbols with `aria-label`s). Bottom bar: copyright with dynamically injected year and a "Back to top" link. Link hover: color shift to `var(--primary)`; icon hover: slight rotation.

**5.9 `script.js` scope (vanilla JS only, no console errors)**
Theme toggle + `localStorage` persistence; IntersectionObserver for `.unfolding-transition` reveals; FAQ accordion; mobile nav toggle; email form validation with `aria-live` feedback; smooth anchor scrolling (respecting reduced motion); dynamic footer year.
