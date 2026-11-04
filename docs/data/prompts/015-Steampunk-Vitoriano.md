# SYSTEM PROMPT — CODING AGENT TASK: "VICTORIAN STEAMPUNK" LANDING PAGE

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality landing page on the first attempt. Theme: **Victorian Steampunk** — ornate, mechanical, adventurous; a 19th-century Industrial Revolution fantasy of brass, gears, leather, gaslight, and intricate machinery.

**Mandatory sections:** Header/Nav (with theme toggle), Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ (accordion), Final CTA (with email capture form), Footer with secondary link columns.

**Copy locale:** All user-facing copy must be written in **English**, in an authentic Victorian steampunk voice (e.g., "Forge your legend," "Gentlefolk, behold…"). Do not use lorem ipsum — author real, themed copy for every heading, paragraph, button label, testimonial, and FAQ entry.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives exclusively in `style.css`. **Forbidden:** `style="..."` attributes, `<style>` blocks in HTML, and presentational HTML attributes.
* Target every design property, layout rule, and state via class or ID selectors only.
* HTML must remain clean, semantic, and style-agnostic: reskinning the page requires editing CSS only, never markup.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Define all tokens in `:root` (light default) and override them for dark mode (see 1.3):

* **Core colors (Light mode — "Parchment & Brass"):** `--primary: #B5A642` (Brass); `--secondary: #5C0000` (Rich Mahogany); `--bg-primary: #F5DEB3` (Parchment); `--bg-secondary: #FFFFF0` (Ivory — card surfaces; **never use `#ffffff`**; if a whiter surface is ever required, use `#fefefe`); `--text-primary: #5C0000`; `--text-secondary: #704214` (Sepia); `--text-success: #006B6B` (darkened Deep Teal for contrast); `--text-error: #A62A1E` (Victorian crimson, visually distinct from mahogany body text); `--border-default: #B5A642`; `--border-success: #008080`; `--border-error: #A62A1E`.
* **Theme accents:** `--accent-copper: #B87333`; `--accent-teal: #008080`; `--accent-orange: #D46A00` (gas-lamp glow); `--accent-ivory: #FFFFF0`.
* **Contrast pairing (mandatory in every theme):** light background tokens pair with dark text tokens; dark background tokens pair with light text tokens. Verify ≥ 4.5:1 contrast for all body text in **both** modes; darken/brighten tokens as needed.
* **Radius & shadows:** `--radius-sm: 2px`; `--radius-md: 4px`; `--radius-lg: 8px` (Victorian design = sharp, ornate corners — avoid large radii); `--shadow-sm: 0 2px 6px rgba(60,30,10,0.35)`; `--shadow-md: 0 0 10px rgba(0,0,0,0.5)`.
* **Spacing & transitions:** `--spacing-gap: 1.5rem`; `--transition-fast: 150ms`; `--transition-normal: 300ms`; `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
* **Elevation/stacking:** `--z-dropdown: 100`; `--z-modal: 200`; `--z-toast: 300` — layered components must never conflict.

**1.3 Mandatory Dark Mode Support ("Gaslamp Night")**
* Define dark tokens under **both** `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>` (class takes precedence). Suggested dark palette: `--bg-primary: #1C110B` (sepia-charcoal); `--bg-secondary: #2A1A10` (raised leather/wood); `--text-primary: #F5DEB3`; `--text-secondary: #C9A96A` (aged brass); `--primary: #D9C766` (brightened brass); `--text-success: #3EC1C1`; `--text-error: #E5735F`; borders shift to brass/copper. Backgrounds and text must swap seamlessly with **zero HTML restructuring**.
* **Persistence:** Store the user's choice in `localStorage`; fall back to `prefers-color-scheme` on first visit. `script.js` (loaded with `defer`) must apply the theme as its **first synchronous task**, and `html { background-color: var(--bg-primary); }` must be set in both schemes to prevent flash-of-wrong-theme.
* **Toggle:** A visible header toggle using Material Symbols sun/moon icons with correct `aria-pressed` and `aria-label` ("Switch to dark mode" / "Switch to light mode").

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox.
* **Every flex container must default to `align-items: center`** unless an exception is explicitly justified in a CSS comment.
* Mobile-first: multi-column rows must collapse to single columns on small viewports; **no horizontal scrolling** at any width ≥ 320px.

**1.5 Framework Default**
* Use clean, hand-written custom CSS in `style.css` (chosen because this theme requires bespoke animations and textures). All reusable classes (`.btn`, `.card`, `.input-group`) must map back to the CSS variables above. Do not mix conventions.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* **Text:** Load **IM Fell English** (display/headings — vintage Victorian serif, per spec) and **Crimson Text** (body readability) via Google Fonts `<link>`. Optionally add **IM Fell English SC** for small-caps eyebrow labels. Bind them to `--font-display` and `--font-base`.
* **Icons:** Use **Google Material Symbols (Outlined)** exclusively. **Explicitly forbidden:** raw inline SVGs and local icon font/image files.
* **Texture exception clause:** The source spec references `url('parchment-texture.jpg')`; do **not** reference any local image files — synthesize parchment and leather textures purely in CSS using layered `radial-gradient` / `repeating-linear-gradient` / `repeating-conic-gradient` patterns so the deliverable is fully self-contained.

**1.7 Signature Steampunk Effects (CSS-only)**
* **Gears:** Build decorative gears from Material Symbols icons (`settings`, `cog`) or pure-CSS shapes (circles with `repeating-conic-gradient` teeth via pseudo-elements). Animate with `@keyframes gear-rotate { to { transform: rotate(360deg); } }` at `20s linear infinite`; meshed gears must counter-rotate (`animation-direction: reverse`).
* **Brass borders:** Ornate double frames via `border` + `outline` (with `outline-offset`) or inset `box-shadow`.
* **Gas lamp glows:** Warm halos via `box-shadow: 0 0 24px rgba(212,106,0,0.45)` and radial-gradient pools of light.
* **Schematic overlays:** Low-opacity blueprint grids on section backgrounds via `::before` with `repeating-linear-gradient` and `pointer-events: none`.
* **3D depth:** Hero stage uses `perspective: 1000px` and `transform-style: preserve-3d` with subtle layered `translateZ`/tilt on hover.
* **Vintage headline treatment:** `text-shadow: 1px 1px 0 var(--accent-ivory)` on light-mode display headings; invert/remove in dark mode.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--danger`)**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` with a minimum 44×44px touch target. Primary = brass fill with mahogany text; secondary = copper outline; danger = oxblood fill, visually distinct in both themes.
* **Hover:** Brightness/shadow shift with `cursor: pointer`.
* **Focus:** Distinct, visible focus ring built from CSS variables (`outline` + `box-shadow`) for keyboard navigation.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading:** Disables interaction, prevents double-clicks, and renders a CSS spinner (rotating brass ring or animated gear icon) **without changing button dimensions**.
* **Disabled:** `opacity: 0.5`, greyscale filter, `cursor: not-allowed`.
* **Success/Error:** Temporary feedback states styled via `--text-success` / `--text-error`, paired with an icon and text — never color alone.

**2.2 Card Component (`.card`)**
* **Default:** Flexible Flexbox layout, ivory/leather surface (`--bg-secondary`), subtle brass borders and elevation.
* **Hover:** `transform: translateY(-2px)` plus shadow elevation shift (optional gentle 3D tilt per 1.7).
* **Focus-within:** Card border highlights when any child link/button receives focus.
* **Loading (Skeleton):** Shimmer animation defined in CSS to prevent layout jumps.
* **Empty State:** Structured fallback with a Material Symbol icon and clear guidance text.

**2.3 Form & Input (`.input-group`)**
* **Structure:** Flex container wrapping a `<label>`, the input, and a dedicated error-feedback container.
* **States:** Empty, Focused (brass outline ring), Filled, Valid (teal border + check icon), Invalid (crimson border, error text + icon, `aria-invalid="true"`, message linked via `aria-describedby`), Disabled, Read-only.
* **Feedback:** Form submissions must announce results (loading/success/error) through an `aria-live="polite"` status region.

**2.4 FAQ Accordion**
* Button-based expand/collapse with `aria-expanded`, `aria-controls`, and panel IDs; full keyboard operability (Enter/Space).
* Animated open/close via CSS transitions (`grid-template-rows` or `max-height`); chevron Material icon rotates 180° on open.
* Only one panel open at a time; no focus loss after interaction.

**2.5 Modal / Popup (only if introduced, e.g., detailed plan comparison)**
* **States:** Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
* **UX:** Centered flex container (`align-items: center`), backdrop overlay, Material Icon close button, keyboard focus trapping, close via `Esc` and overlay click, layered at `--z-modal`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** Fluid `clamp()` typography scale, responsive breakpoints, zero horizontal overflow.
* **Smooth Animations:** `transition: var(--transition-normal)` on all state changes. **`prefers-reduced-motion: reduce` must disable** gear rotation, 3D tilts, shimmer, and glow pulsing (render them as static elements).
* **Accessibility (a11y):** Sufficient contrast in both Light and Dark modes; never rely on color alone to communicate state; semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`); a skip-to-content link; logical DOM/focus order; full keyboard operability (no mouse-only interactions); `aria-live` regions for dynamic feedback (form errors, loading, toasts).
* **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
* **Destructive/Danger Actions:** `.btn-danger` must be visually distinct in both light and dark themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **File Structure:** Separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single `<script src="script.js" defer></script>` entry point. No inline styles.
* **Naming Convention:** BEM (`block__element--modifier`) consistently across the entire deliverable — never mix conventions.
* **No Unrequested Placeholders:** Author real English steampunk copy everywhere; lorem ipsum is prohibited. The only external references permitted are Google Fonts and Google Material Symbols CDNs.

---

## 5. PAGE STRUCTURE & SECTION-BY-SECTION SPECIFICATIONS

**5.1 Header/Nav:** Sticky brass-bordered bar; text logo with a small gear icon; anchor links to all sections; theme toggle (per 1.3); mobile hamburger menu implemented as an accessible disclosure (`aria-expanded`, `aria-controls`, closes on `Esc` and link click).

**5.2 Hero:** Full-viewport stage with `perspective: 1000px`; layered animated gear cluster (counter-rotating, per 1.7); gas-lamp radial glow behind the headline; schematic grid overlay; IM Fell English headline with the vintage text-shadow treatment; one-paragraph adventuring hook; primary brass CTA + secondary copper outline CTA (both per 2.1).

**5.3 Features (3 cards):** Section eyebrow label, headline, intro copy. Three `.card` components, each with a gear-shaped icon medallion (Material Symbol in a CSS-crafted brass cog), a titled feature (e.g., precision engineering, imaginative craft, adventurous spirit), and supporting copy. All card states per 2.2.

**5.4 How It Works (3 steps):** Three numbered steps connected by a dashed brass "conveyor" line (horizontal on desktop, vertical on mobile). Each step: rotating gear medallion with step number, short title, one-sentence description.

**5.5 Testimonials:** Three quotes in ornate brass-framed cards on a sepia-tinted band. Each includes a CSS-only circular monogram medallion avatar (initials in IM Fell English — no image files), the quote, the person's name, and a title/role. Oversized decorative quotation mark styling.

**5.6 Pricing (3 tiers):** Three tier cards (suggested names: Apprentice, Artisan, Grand Artificer). Middle tier visually emphasized — elevated, brighter brass frame, and a "Most Distinguished" ribbon badge. Each tier: price, feature list with Material check icons, and a CTA button. Optional monthly/annual billing toggle — if included, it must be keyboard-accessible with `aria-pressed` and update prices with an `aria-live` announcement.

**5.7 FAQ:** Accordion per 2.4 with 5–6 authored questions about the product/service in steampunk voice.

**5.8 Final CTA:** Full-width band — mahogany background (light mode) / gaslamp-night background with orange lamp glow (dark mode). Headline, supporting sentence, and an email capture form per 2.3 with visible loading, success, and error states driven by `script.js` (simulated submission is acceptable; all feedback announced via `aria-live`).

**5.9 Footer:** Brass top border (double-rule). Three to four columns of secondary links (e.g., Product, Company, Resources, Legal), generic Material Symbol social/contact icons (`mail`, `public`, `share`) with `aria-label`s, and a small-print copyright line. Footer links must be real anchors to page sections or clearly themed `href="#"` placeholders with `:hover`/`:focus` feedback.

Build the entire page now, in one complete pass, following every rule above without omission.
