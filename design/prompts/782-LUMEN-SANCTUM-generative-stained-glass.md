# CODING AGENT SYSTEM PROMPT — BUILD THE "LUMEN SANCTUM" LANDING PAGE

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete landing page defined below in a single attempt. Every rule in this document is mandatory. Read the entire specification before writing any code.

---

## 0. PROJECT BRIEF & DESIGN DIRECTION

**0.1 Theme Identity**
- **Product/Brand:** LUMEN SANCTUM — a generative stained-glass art studio (the landing page sells a tool that algorithmically composes cathedral-style stained-glass artwork).
- **Aesthetic:** Glassmorphism reimagined as leaded cathedral glass. Keywords: *stained, glass, cathedral, glassmorphism, animated*. Era: 2020s digital.
- **Mood:** Luminous parchment light, gilded amber accents, ink-dark depth; slow, perpetual "living light" motion, as if sun were passing through glass panes.

**0.2 Canonical Palette (source tokens — derive all others from these)**
- Primary: `#14121a` (cathedral ink), `#d8d0c0` (bone parchment), `#e8d8b0` (gilded amber)
- Secondary: `#7a7060` (stone taupe), `#3a3630` (olive shadow), `#5a5448` (umber)
- **Mode note:** The design spec marks **Light mode as the primary presentation**. Dark Mode remains fully mandatory (Section 1.3) and must be a first-class, complete theme — never an afterthought.

**0.3 Required Sections (in this order)**
1. Sticky header / navigation (with visible theme toggle + mobile menu)
2. Hero
3. Features (exactly 3 glass cards)
4. How It Works (exactly 3 steps)
5. Testimonials (3 quotes)
6. Pricing (exactly 3 tiers, middle tier featured)
7. FAQ (accessible accordion, 5–6 items)
8. Final CTA (email capture form)
9. Footer with secondary link groups

**0.4 Visual Language — How the Glass Must Be Built (CSS only, no images)**
- **Glass panel recipe:** every card/panel uses a translucent token background (e.g., `rgba()` of bone or ink at 0.40–0.60 alpha), `backdrop-filter: blur(12px–18px) saturate(1.2–1.5)`, a 1px semi-transparent border, and a soft colored shadow. Provide an `@supports not (backdrop-filter: ...)` fallback with a more opaque background.
- **Stained-glass backdrop:** Behind the Hero (and subtly behind the Final CTA), build a generative "cathedral window" from layered, absolutely-positioned decorative panes using `conic-gradient` / `radial-gradient` that interpolate **only** the canonical palette hues and their alpha variants. Panes drift and rotate via slow keyframes (20–60s cycles); the hue shifts gently via an animated `filter: hue-rotate(0deg → 40deg)`. Decorative panes may use `mix-blend-mode: soft-light` or `overlay`.
- **Light shafts:** One or two large blurred (`filter: blur(30px–80px)`) amber/bone "light orbs" drifting slowly behind glass panels.
- **Hard constraint:** Blend modes, filters, and animation layers are decorative only. They must never sit above content or reduce text contrast below WCAG AA in either theme. Text always lives on glass panels with sufficient opacity.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML. Inline `<style>` blocks are also forbidden.
- **Class/ID Selectors Only:** All design properties, layout rules, states, and animations are defined in `style.css` and targeted via class/ID selectors.
- **Minimal HTML Modifications:** HTML must remain semantic and style-agnostic (landmarks, headings, lists, buttons, labels). Re-theming the page must require editing `style.css` only, never the markup.

**1.2 CSS Variables & Theme Tokens**
Store every visual token in `:root` (Light defaults) and override under `.dark`. Required tokens and required values:

- **Light theme (default):** `--primary: #14121a`; `--secondary: #e8d8b0`; `--bg-primary: #ece7da` (parchment — never pure white); `--bg-secondary: #d8d0c0`; `--bg-glass: rgba(216, 208, 192, 0.55)`; `--text-primary: #14121a`; `--text-secondary: #5a5448`; `--text-success: #2e6b4f`; `--text-error: #8a2b2b`; `--border-default: rgba(58, 54, 48, 0.25)`; `--border-success` / `--border-error` derived from the success/error tokens.
- **Dark theme (`.dark`):** `--bg-primary: #14121a`; `--bg-secondary: #3a3630`; `--bg-glass: rgba(58, 54, 48, 0.45)`; `--primary: #d8d0c0`; `--secondary: #e8d8b0`; `--text-primary: #d8d0c0`; `--text-secondary: rgba(216, 208, 192, 0.72)`; `--text-success: #7bc79a`; `--text-error: #e58a8a`; `--border-default: rgba(216, 208, 192, 0.22)`.
- **Contrast Pairing (enforced in both themes):** every light background token pairs with dark text tokens; every dark background token pairs with light text tokens. Amber `#e8d8b0` is **never** used as text color on light backgrounds — it is an accent/border/fill only, and when used as a fill it must contain `#14121a` text.
- **Backgrounds:** Never default to pure white. If a near-white is genuinely required, use `#fefefe`. `#ffffff` is forbidden as a background value.
- **Radius & Shadows:** `--radius-sm: 6px`; `--radius-md: 12px`; `--radius-lg: 20px`; `--shadow-sm` / `--shadow-md` — soft, tinted glass shadows (e.g., `rgba(20, 18, 26, 0.12)` in Light, deeper in Dark), plus a subtle inset rim highlight on glass panels.
- **Spacing & Transitions:** `--spacing-gap`; `--transition-fast: 150ms`; `--transition-normal: 300ms`; `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
- **Elevation/Stacking:** `--z-dropdown: 1000`; `--z-modal: 2000`; `--z-toast: 3000`; additionally define `--z-header: 900` (sticky header must sit below dropdowns).

**1.3 Mandatory Dark Mode Support**
- **Implementation:** Dark tokens live under a `.dark` class on `<html>`, applied by JS. Set the `color-scheme` property per theme so native controls match. All backgrounds and text switch purely via CSS variables — zero HTML restructuring.
- **Persistence & Switching:** Store the user's choice in `localStorage` (e.g., key `lumen-sanctum-theme`). First visit: honor `prefers-color-scheme` if the user has expressed a preference; otherwise default to **Light** (explicit exception: the design spec marks Light as the primary mode). A visible theme-toggle button must live in the header, using Material Symbols sun/moon icons, with correct `aria-pressed` state and an `aria-label` that switches between "Activate dark mode" / "Activate light mode".
- Theme transitions (background, text) must be seamless, animated with `var(--transition-normal)`, with no flash of the wrong theme on load.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout scaffolding with **Flexbox**. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment (the single allowed default exception: equal-height Pricing cards may use `stretch`).
- Mobile-first: base styles are single-column; enhance at `min-width: 768px` and `1024px`. Rows convert to columns on small viewports. No horizontal scrolling at any viewport ≥ 320px.

**1.5 Styling Approach & Naming**
- Use hand-written, clean custom CSS in `style.css`, organized with a comment banner per section. All component classes map back to the CSS variables in 1.2.
- Enforce one naming convention (BEM, Section 4.2). Do not mix in utility-framework class names.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- **Text:** Google Fonts only — **Cinzel** (600/700) for display headings, bound to `--font-display`; **Outfit** (300–600) for body/UI, bound to `--font-base`. Load via `<link>` with `preconnect`. No other font sources.
- **Icons:** Google **Material Symbols Rounded**, loaded via `<link>` and used as `<span class="material-symbols-rounded">icon_name</span>`. **Raw inline SVGs and local icon files are forbidden.**
- Fluid type scale with `clamp()`; the Hero `h1` is roughly `clamp(2.5rem, 6vw, 4.5rem)`.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component (`.btn`, `.btn--primary`, `.btn--ghost`, `.btn--danger`)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px. `.btn--primary` = gilded amber fill with ink text; `.btn--ghost` = glass panel with token border.
- **Hover:** brightness lift and/or shadow growth, `cursor: pointer`.
- **Focus:** distinct visible ring via `outline`/`box-shadow` built from `--secondary`/`--border-default` tokens (never `outline: none` without replacement).
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** `aria-busy="true"`, pointer events blocked to prevent double-clicks, and a spinner rendered as a rotating Material Symbol or CSS border spinner — button dimensions must not change.
- **Disabled:** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`.
- **Success/Error:** transient styles driven by `--text-success` / `--text-error` and matching border tokens (used by the newsletter submit flow).
- **Danger:** define `.btn--danger` visually distinct in both Light and Dark themes, even though this page may not use it.

**2.2 Card Component (glass cards for Features, How It Works, Testimonials, Pricing)**
- **Default:** glass recipe from 0.4, `--radius-lg`, `--shadow-sm`, Flexbox column layout using `--bg-secondary`/`--bg-glass` tokens.
- **Hover:** `transform: translateY(-2px)` plus elevation and border-brightening shift via `--shadow-md`.
- **Focus-within:** border highlight when any child link/button receives focus.
- **Loading (Skeleton):** define a shimmer `@keyframes` and `.card--skeleton` in CSS (available for reuse, no layout jump).
- **Empty State:** define `.card--empty` — a Material Symbol plus short guidance text — as a structured fallback pattern in CSS.

**2.3 Form & Input (Final CTA email capture)**
- **Structure:** `.input-group` — a flex container wrapping a `<label>`, the `<input>`, and a dedicated error-feedback element.
- **States (all styled via CSS classes/pseudo-classes):** empty, focused (outline ring), filled, valid (success border + Material Symbol check), invalid (error border, error text, error icon — never color-only), disabled, read-only.
- **Behavior:** validate the email on submit; on failure, set `aria-invalid="true"`, show the message in an `aria-live="polite"` region; on success, the button enters loading → success state and a confirmation is announced in the live region.

**2.4 Modal / Popup (conditional)**
- No modal is required by the section list. If you introduce any overlay (e.g., plan detail), it must use a real dialog pattern: `role="dialog"`, `aria-modal`, focus trapping, closing via `Esc` and overlay click, a centered flex container (`align-items: center`), a blurred backdrop, a Material Symbol close button, and animated open/close via CSS transitions at `var(--z-modal)`.
- The mobile navigation drawer follows dropdown rules: `--z-dropdown`, `aria-expanded` on its trigger, CSS-animated.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** fluid sizing and breakpoints; no horizontal overflow at any width ≥ 320px.
- **Smooth Animations:** every state change transitions with `var(--transition-normal)`; ambient stained-glass keyframes are slow (20–60s). `@media (prefers-reduced-motion: reduce)` must disable transforms and keyframe animation (opacity-only changes permitted) and smooth scrolling.
- **Accessibility (a11y):** WCAG AA contrast in both themes; semantic HTML5 landmarks (`header`, `main`, `section`, `footer`), exactly one `h1` with logical heading order; full keyboard operability for nav, accordion, toggle, and form with always-visible focus; ARIA roles/labels on all custom widgets; `aria-live` regions for dynamic feedback. Never rely on color alone to communicate state.
- **Mandatory Visual Feedback:** every click, hover, focus, and submission triggers a visible state change.
- **Destructive Actions:** `.btn--danger` must be visually distinct in both themes (defined even if unused).

---

## 4. DELIVERABLE & OUTPUT FORMAT

**4.1 File Structure**
- `index.html` — semantic markup, Google Fonts links, exactly one `<script src="script.js" defer></script>`, zero inline styles/scripts.
- `style.css` — all tokens, components, section styles, keyframes, `@supports` and `@media` blocks.
- `script.js` — vanilla JS only (no libraries): theme toggle + persistence, mobile nav, FAQ accordion, newsletter validation, button loading states. Runs by simply opening `index.html`.

**4.2 Naming Convention**
- BEM only: `block__element--modifier` (e.g., `.hero__title`, `.features__card`, `.pricing__tier--featured`, `.btn--primary`). Never mix conventions.

**4.3 Copy Requirements**
- All user-facing copy in **English**. Write real, on-theme copy — no lorem ipsum: concrete feature names, step titles, testimonial names/roles, plan names with prices, and 5–6 FAQ questions with genuine answers. Brand voice: reverent, luminous, precise.

**4.4 Section-by-Section Build Spec**
1. **Header:** sticky glass bar — Cinzel wordmark "LUMEN SANCTUM", anchor nav links, theme toggle, primary CTA; hamburger menu below 768px.
2. **Hero:** animated stained-glass backdrop per 0.4; `h1`, subcopy, two CTAs (primary + ghost that scrolls to Features); a small trust row.
3. **Features:** 3 glass cards, each with an amber-tiled Material Symbol icon, title, 2–3 sentence description; hover lift per 2.2.
4. **How It Works:** 3 numbered steps with Material Symbol icons and a connecting line (CSS pseudo-element); stacks vertically on mobile.
5. **Testimonials:** 3 cards — quote, CSS monogram avatar circle (initials), name, role.
6. **Pricing:** 3 tiers; middle tier `--featured` (elevated, amber accent border, "Most Illuminated" badge); each has price, check-icon feature list, and a CTA (primary for featured, ghost for others).
7. **FAQ:** accordion of `<button aria-expanded>` + content regions; rotating chevron icon; CSS height animation; keyboard operable.
8. **Final CTA:** large glass panel over light-shaft ambience; headline; the `.input-group` email form per 2.3 with a `.btn--primary` submit.
9. **Footer:** grouped secondary links (Product / Studio / Legal), social row using Material Symbols, copyright, small print; stacked on mobile.

**4.5 Pre-Delivery QA Checklist**
- Zero `style=` attributes · both themes fully tokenized and AA-contrast verified · toggle persists via `localStorage` · full keyboard pass · `prefers-reduced-motion` honored · no horizontal scroll at 320px+ · every icon is a Material Symbol · BEM consistent throughout · real copy everywhere.
