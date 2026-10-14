# BUILD SPECIFICATION FOR CODING AI — "Organic & Cozy Handcraft" Landing Page

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page described below in a single attempt — all sections, all states, both themes, fully functional.

---

## PROJECT BRIEF

- **Product:** A single-page marketing landing page for an online artisan craft store (handmade ceramics, textiles, woodwork, woven décor). Output category: **Nature & Organic**.
- **Theme:** "Organic & Cozy Handcraft" — organic, warm, authentic. Keywords: handmade, craft, artisan, organic, warm, authentic, unique, natural, cozy, friendly. Era: 2026+ Artisanal Value.
- **Visual direction:** A warm, hand-drawn-feeling page: natural textures (wood, fabric) simulated in CSS, calligraphy-style display typography, organic imperfect illustrations, hand-finished borders, "handmade touch" hover micro-interactions, smooth natural section transitions, olive green and burnt orange accents, an authentic and cozy feel.
- **Sections (in this order):**
  1. **Sticky Header** — store logo (calligraphy font), anchor navigation, theme toggle, mobile menu button (standard landing-page chrome; hosts the mandatory theme toggle).
  2. **Hero** — calligraphy headline, supporting copy, primary + secondary CTA buttons, CSS organic illustration, natural-texture background.
  3. **Features** — exactly 3 cards.
  4. **How It Works** — exactly 3 numbered steps.
  5. **Testimonials** — 3 quote cards with ratings.
  6. **Pricing** — 3 tiers, middle tier visually featured.
  7. **FAQ** — accessible accordion, 5–6 themed questions.
  8. **Final CTA** — warm accent band with newsletter signup form.
  9. **Footer** — Earth Brown background, secondary link columns, social icons, copyright.
- **Copy:** Write all user-facing copy in **English**. Invent a cozy artisan store name and write complete, authentic, themed copy for every section (no lorem ipsum, no placeholder text). Tone: warm, friendly, human — like a handwritten note from the maker.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID selectors only:** every design property, layout rule, and state is applied via classes/IDs defined in `style.css`.
- **Minimal HTML modifications:** markup stays clean, semantic, and styling-agnostic; re-theming the site must only require editing `style.css`.
- **No inline JavaScript:** no `onclick`-style handler attributes; all behavior lives in `script.js`, attached via `addEventListener`.

### 1.2 CSS Variables & Theme Tokens
Store every visual token in `:root` and override in `.dark`. Map the source spec's base values (`background: #F5F5DC`, `color: #333333`, `border: 1px solid #D2B48C`) into tokens — never hardcode them. Suggested starting values (fine-tune only if a contrast check fails):

**Light (default):**
- `--primary: #6B8E23` (Olive Green) · `--secondary: #CC5500` (Burnt Orange)
- `--bg-primary: #F5F5DC` (Beige — page background; never pure `#FFFFFF` for large surfaces) · `--bg-secondary: #FEFEFE` (cards/surfaces)
- `--text-primary: #333333` · `--text-secondary: #6B5B4E` (warm stone)
- `--text-success: #4E7A27` (deep olive) · `--text-error: #B3402A` (brick red — must stay distinguishable from Burnt Orange)
- `--border-default: #D2B48C` (tan) · `--border-error: #B3402A` · `--border-success: #4E7A27`
- Decorative accents: `--accent-sky: #87CEEB`, `--accent-rose: #E0BBE4`, `--accent-earth: #8B4513`, `--accent-stone: #A9A9A9` — Sky, Rose, and Stone are for illustration blobs, badges, and dividers only, never body text.
- Deep button fills: `--primary-deep: #55701C`, `--secondary-deep: #A64B00` — solid fills paired with `#FEFEFE` text to guarantee AA (bright `--primary`/`--secondary` remain for large display accents, borders, icons, and hovers).
- `--radius-sm: 10px` · `--radius-md: 18px` · `--radius-lg: 28px` · `--radius-handmade: 255px 15px 225px 15px / 15px 225px 15px 255px` (the signature hand-drawn wobble)
- `--shadow-sm: 0 2px 6px rgba(90,70,40,0.12)` · `--shadow-md: 0 10px 26px rgba(90,70,40,0.20)` — warm-tinted, never cold black
- `--spacing-gap: 1.5rem` · `--transition-fast: 0.25s ease-in-out` · `--transition-normal: 0.6s ease-in-out` (theme signature) · `--ease-standard: ease-in-out`
- `--z-dropdown: 100` · `--z-modal: 1000` · `--z-toast: 1100`
- `--font-display: "Dancing Script", cursive` · `--font-base: "Nunito", sans-serif`

**Dark (override under `.dark` and `@media (prefers-color-scheme: dark)`):**
- `--bg-primary: #241C14` (deep espresso) · `--bg-secondary: #33291E`
- `--text-primary: #F5EDDE` (warm cream) · `--text-secondary: #C9B9A3`
- `--primary: #A9C25E` · `--secondary: #F08A4B` (lightened for dark backgrounds; button fills flip to bright tokens paired with dark `--bg-primary` text)
- `--text-success: #9BC06A` · `--text-error: #E8836B` · `--border-default: #5C4A38`; deepen shadows and adjust decorative accents for dark surfaces.

**Contrast pairing (mandatory in both themes):** every light background token pairs with a dark text token and every dark background token with a light text token. Verify WCAG AA (≥4.5:1 body text, ≥3:1 large text and UI components) in Light and Dark; if a pair fails, adjust the token value — never ship a failing pair.

### 1.3 Mandatory Dark Mode Support
- Provide dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>` so switching never requires HTML restructuring.
- Persist the user's choice in `localStorage`; fall back to `prefers-color-scheme` on first visit.
- Include a visible toggle in the header: a button with a Material Symbols `light_mode`/`dark_mode` icon, `aria-pressed` reflecting the current state, and a dynamic `aria-label` ("Switch to dark theme" / "Switch to light theme").
- **Exception clause:** the source style spec marked dark mode as excluded (Light ✓ Full / Dark ✗ No), but dark mode is a mandatory architectural rule — implement it regardless, using warm dark-earth tones (espresso, cream, lightened olive/orange) so the cozy mood survives; cold blue-black palettes are forbidden.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build every layout structure with Flexbox.
- **Default alignment:** every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
- **Mobile-first:** single-column by default; multi-column rows only at ≥768px (and ≥1024px where useful). Use `flex-wrap` wherever content can overflow. No horizontal scrolling at any viewport width from 320px up.

### 1.5 Styling Approach — Vanilla CSS, No Framework
- The source spec's CSS technical block dictates hand-written custom CSS: do **not** add Tailwind, Bootstrap, or any framework.
- All styling lives in `style.css` as reusable component classes (`.btn`, `.card`, `.input-group`, `.handmade-border`, `.natural-texture-bg`, `.organic-illustration`) mapped to the CSS variables above.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- Load via Google Fonts `<link>` (with `preconnect`): **"Dancing Script"** (display) and **"Nunito"** (body), bound to `--font-display` and `--font-base`.
- **Hierarchy:** Dancing Script for the logo, hero headline, section titles, and badge/eyebrow accents; Nunito for all body copy, buttons, forms, and footer. Calligraphy type is never used for long body text — readability is mandatory. Generous line-height (1.6–1.7) and fluid sizes via `clamp()`.
- **Icons:** Google Material Symbols (**Rounded** variant) via the official `<link>`. Forbidden: raw inline SVGs, local icon files, emoji-as-icons.
- **Illustration rule:** the theme's "organic imperfect illustrations" must be built exclusively with CSS — uneven `border-radius` blobs (e.g., `60% 40% 30% 70% / 60% 30% 70% 40%`), leaf shapes (`border-radius: 0 70% 0 70%` + rotation), pseudo-elements, and layered gradients. No SVG illustration.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Buttons (`.btn` + variants)
All states styled via classes:
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px. Variants: `.btn--primary` (deep olive fill, `#FEFEFE` text), `.btn--secondary` (deep burnt-orange fill, `#FEFEFE` text), `.btn--ghost` (transparent, 2px dashed `--border-default`, `--text-primary` text). The hero primary CTA additionally uses the `.handmade-border` wobble for signature charm.
- **Hover:** the "handmade touch" — `translateY(-2px)` plus a tiny `rotate(-0.5deg)`, shadow shifts to `--shadow-md`, `cursor: pointer`. Apply this language consistently across all interactive elements.
- **Focus:** distinct visible ring (`outline: 2px solid var(--primary); outline-offset: 3px`) for keyboard navigation; never remove outlines without replacement.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** `.is-loading` — disables pointer events (prevents double submits), swaps the label for a CSS spinner or rotating Material Symbol without changing button dimensions; set `aria-busy="true"`.
- **Disabled:** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`.
- **Success/Error:** `.is-success` / `.is-error` temporary feedback states using `--text-success` / `--text-error`, always icon + text (never color alone).
- **Danger:** `.btn-danger` must be visually distinct from all other variants in both themes.

### 2.2 Cards (`.card`)
Used for Features, Testimonials, and Pricing tiers:
- **Default:** flex column layout, `--bg-secondary` surface, 1–2px solid `--border-default` (or the `.handmade-border` wobble, with a dashed "stitch" modifier for select cards), `--shadow-sm`, generous padding, `--radius-lg`.
- **Hover:** `translateY(-2px)` with `rotate(±0.5deg)` — alternate direction per card for the imperfect handmade feel — plus `--shadow-md`.
- **Focus-within:** border-color shifts to `--primary` when a child link/button receives focus.
- **Loading (skeleton):** define a shimmer animation (gradient sweep) for card content to prevent layout jumps.
- **Empty state:** structured fallback with a Material Symbol and guidance text — define the pattern even if unused.
- **Featured pricing tier:** `.card--featured` — Burnt Orange border, slight elevation/scale, and a Dancing Script badge (e.g., "Most Popular") overlapping the top edge.

### 2.3 Forms & Inputs (`.input-group`)
The Final CTA contains a newsletter signup:
- **Structure:** flex `.input-group` wrapping a `<label>`, the `<input type="email">`, and a dedicated error/success feedback container.
- **States (all styled):** empty, focused (visible ring using `--primary`), filled, valid (success border + `check_circle` icon), invalid (error border, `--text-error` message + error icon), disabled, read-only.
- **Feedback:** the message container has `aria-live="polite"`; messages are text + icon, never color alone. Submit runs through the button's loading state, then resolves to success ("You're on the list!") or error feedback.

### 2.4 Modal / Popup (conditional)
No modal is required by the section list. If — and only if — you add one that serves the brief, it must include: opening/open/closing CSS transitions, a centered flex overlay (`align-items: center`) with backdrop, a Material Symbol close button, keyboard focus trapping, closing via `Esc` and overlay clicks, and loading/success/error states. Otherwise omit entirely — do not add unrequested dialogs.

### 2.5 FAQ Accordion (custom widget)
- Semantic pattern: `<button aria-expanded aria-controls>` + associated panel (or native `<details>`/`<summary>` enhanced with CSS).
- Smooth open/close via CSS transition (e.g., the `grid-template-rows: 0fr → 1fr` technique); a Material Symbol `expand_more` rotates 180° on open.
- Fully keyboard operable, visible focus states, panels labeled with `role="region"`.
- 5–6 real themed questions (materials, shipping, custom orders, care, returns) with genuine answers.

### 2.6 Header, Navigation & Footer
- Sticky header on `--bg-primary` with a 1px solid `--border-default` bottom edge; logo in Dancing Script.
- Anchor links to all sections; `scroll-behavior: smooth` plus `scroll-margin-top` on sections; honor `prefers-reduced-motion` (no smooth scroll).
- Mobile: hamburger (Material Symbol `menu`) toggles a dropdown panel (`z-index: var(--z-dropdown)`); the button carries `aria-expanded`/`aria-controls`; the menu closes on `Esc` and on link selection.
- Include a skip-to-content link as the first focusable element.
- Footer: Earth Brown (`--accent-earth`) background in light mode (deepened espresso in dark mode), always paired with cream text; secondary link columns (Shop, Support, Company), social icons via Material Symbols, and copyright line.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` typography, flexible widths, breakpoints at ~480/768/1024px; zero horizontal overflow from 320px up.
- **Smooth animations:** every state change transitions with `var(--transition-normal)` (0.6s ease-in-out — the theme signature); prefer explicit properties (`transform`, `box-shadow`, `border-color`, `background-color`, `color`) over `transition: all` for performance. Section content reveals on scroll via `IntersectionObserver` adding an `.is-visible` class (gentle fade + 12px rise, staggered) — implemented in `script.js`.
- **`prefers-reduced-motion`:** disable transforms, scroll animation, and reveal motion; keep instant state changes; no parallax.
- **Natural section transitions:** no hard edges between sections — use CSS-only organic dividers (pseudo-elements with oversized uneven `border-radius` curves) or gradual warm tone shifts of `--bg-primary`.
- **Natural textures:** `.natural-texture-bg` simulates linen weave and wood grain purely with layered `repeating-linear-gradient`/`radial-gradient` at subtle opacity (≤6% effective tint) — no image files; text over textures must still pass AA contrast.
- **Handmade borders:** `.handmade-border` = 2px solid `--border-default` + `border-radius: var(--radius-handmade)`; a stitched modifier uses a dashed border to mimic hand stitching. `.organic-illustration` = the CSS blob/leaf composition described in 1.6, used in the hero and as decorative accents.
- **Accessibility (a11y):** semantic HTML5 landmarks (`header`/`nav`/`main`/`section`/`footer`), a single `h1`, logical heading order, AA contrast in both themes, state never communicated by color alone (pair with icons/text), full keyboard operability, logical focus order, and `aria-live` regions for dynamic feedback (form results, toasts).
- **Mandatory visual feedback:** every click, hover, focus, and submission produces a visible change.
- **Destructive actions:** any `.btn-danger` stays visually distinct in both themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` — three separate files. The only script reference is a single `<script src="script.js" defer></script>`; no inline `<script>` blocks, no inline handlers.
- **Naming convention:** BEM (`block__element--modifier`) for all components, with exactly one fixed utility set: `.natural-texture-bg`, `.organic-illustration`, `.handmade-border`. Never mix conventions.
- **Copy:** all user-facing copy in English, complete and themed — store name, hero, feature copy, 3 steps, testimonials with names and ratings, pricing tiers with real feature lists, FAQ answers, footer link labels. No lorem ipsum; no placeholders (none are needed here).
- **Definition of done:** all 9 sections present in order; every button/input/card state implemented; light and dark themes both pass AA; theme toggle persists via `localStorage`; FAQ accordion and mobile menu keyboard operable; newsletter form validates with loading/success/error feedback; no horizontal scroll at 320px+; zero inline CSS/JS; page works error-free on first run.
