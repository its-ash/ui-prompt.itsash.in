# CODING PROMPT — "Accessible & Ethical" Landing Page (Complete Build, First Attempt)

**Your Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready landing page in a single response. Every rule below is mandatory — do not omit, simplify, or defer any requirement.

## 0. PROJECT BRIEF

* **Theme:** "Accessible & Ethical" — inclusive, high-contrast, semantic, keyboard-friendly design.
* **Design Keywords:** high contrast (7:1+), large text (16px+), keyboard navigation, screen reader friendly, WCAG AAA target, visible focus states (3–4px ring), semantic HTML, skip links, reduced motion support, 44×44px touch targets.
* **Page Sections (in this order):** Header/Navigation, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
* **Color Modes:** Full Light mode AND Full Dark mode — both fully designed and fully compliant.
* **Product Narrative:** Invent one coherent, realistic product consistent with the theme (e.g., an accessibility auditing or inclusive design platform). Write all user-facing copy in meaningful English — no lorem ipsum anywhere.

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
* **Minimal HTML Modifications:** HTML must remain clean, semantic, and agnostic of visual styling — changing the look must require editing only the CSS file.

### 1.2 CSS Variables (`var(--...)`) & Theme Tokens
* **Required Color Tokens:** `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
* **Contrast Pairing (WCAG AAA — this theme's core rule):** Every text/background pair must reach **7:1+ for body text** and never fall below 4.5:1 for large text, **in both Light and Dark modes**. Suggested starting palette (verify every pair before shipping; adjust any pair below 7:1):
  * *Light:* `--bg-primary: #f7f6f2`, `--bg-secondary: #fefefe`, `--text-primary: #1a1a1a`, `--text-secondary: #454545`, `--primary: #1e40af`, `--text-success: #166534`, `--text-error: #991b1b`.
  * *Dark:* `--bg-primary: #101216`, `--bg-secondary: #1a1e24`, `--text-primary: #f2f4f7`, `--text-secondary: #c6ccd6`, `--primary: #93c5fd`, `--text-success: #86efac`, `--text-error: #fca5a5`.
* **Light Mode Background:** Never pure white `#ffffff`; use `#fefefe` where a near-white is needed.
* **Border Radius & Shadows:** `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.
* **Spacing & Transitions:** `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
* **Elevation/Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.
* **Accessibility Tokens (mandatory for this theme):** `--focus-ring-width: 3px`, `--focus-ring-color` (must contrast ≥3:1 with page background in each mode), `--touch-target: 44px`, `--font-base`, `--font-size-base` (minimum `1rem` / 16px).

### 1.3 Mandatory Dark Mode Support
* **Implementation:** Define dark mode tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
* **Theme Switching:** Background and text variables must switch seamlessly with zero HTML restructuring.
* **Persistence:** Store the user's choice in `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed` and a dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode").
* **No Flash of Wrong Theme:** Apply the stored theme before first paint (see the permitted exception in Section 4).

### 1.4 Flexbox Layout & Mobile-First Alignment
* **Flexbox Only:** Build all layout structures with `display: flex`.
* **Default Alignment Rule:** Every flex container must default to `align-items: center` unless an exception is explicitly justified in a CSS comment.
* **Mobile-Friendly First:** All rows must convert to columns on small viewports; no horizontal scrolling at any width ≥320px.

### 1.5 Framework Default & Tailwind CSS Integration
* **Default Framework:** Use Tailwind CSS or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives.
* **Token Mapping:** All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text:** Load **Atkinson Hyperlegible** (or Lexend) from Google Fonts via `<link>` and bind it to `--font-base`. Base font size must be ≥16px (body copy of 17–18px is encouraged); body line-height ≥1.5.
* **Icons:** Use Google Material Symbols (Outlined or Rounded). Raw inline SVGs and local icon files are forbidden.
* **Icon Semantics:** Decorative icons get `aria-hidden="true"`; icons that convey information must have a text alternative (visible text or visually-hidden label).

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component Requirements
Style all states via CSS classes:
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` Minimum touch target 44×44px. `cursor: pointer`.
* **Hover:** Brightness/shadow shift.
* **Focus:** Distinct 3px focus ring via `:focus-visible` using `outline: var(--focus-ring-width) solid var(--focus-ring-color); outline-offset: 2px;` — never remove focus outlines without an equal or better replacement.
* **Active/Pressed:** `transform: scale(0.97)` (disabled under reduced motion).
* **Loading:** Disables interaction, prevents double-clicks, renders a CSS spinner or animated Google Icon without changing button dimensions.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** Temporary feedback styles driven by `--text-success` / `--text-error`, always paired with an icon or text — never color alone.

### 2.2 Card Component Requirements
* **Default:** Flexible flexbox layout with subtle borders and elevation using `--bg-secondary` and CSS variables.
* **Hover:** Elevation shift or `transform: translateY(-2px)` (respecting reduced motion).
* **Focus-within:** Card borders highlight when a child link/button receives focus.
* **Loading (Skeleton):** CSS shimmer animation that prevents layout jumps.
* **Empty State:** Fallback layout with a Google Icon and clear guidance text.

### 2.3 Form & Input Requirements
* **States:** Empty, Focused (outline ring), Filled, Valid (success border + icon), Invalid (error border, error text, error icon), Disabled, Read-only.
* **Structure:** Flex container wrapping a label, input field, and a dedicated error feedback container.
* **Announcement:** Errors link via `aria-describedby` and are announced through an `aria-live="polite"` region; validity is never communicated by color alone.

### 2.4 Modal / Popup Requirements
*If any dialog is used (e.g., pricing plan details):*
* **States:** Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
* **UX Features:** Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button (44×44px), keyboard focus trapping, closing via `Esc` or overlay click, `role="dialog"` + `aria-modal="true"`.

### 2.5 FAQ Accordion Requirements
* **Triggers:** Native `<button>` elements with `aria-expanded` and `aria-controls`; panels use `role="region"` + `aria-labelledby`.
* **Behavior:** Smooth CSS height transition; chevron Google Icon rotates; open/closed state must be communicated by `aria-expanded` and icon rotation, not color alone. All animation disabled under `prefers-reduced-motion`.
* **Targets:** Every trigger meets the 44×44px minimum.

### 2.6 Skip Link & Navigation Requirements
* **Skip Link:** First focusable element in the DOM — "Skip to main content", targeting `#main`; visually hidden until focused, then displayed with a 3px focus ring and 7:1+ contrast.
* **Primary Nav:** `aria-label` on `<nav>`; mobile menu toggled by a hamburger button with `aria-expanded` + `aria-controls`, closable via `Esc`; all links meet 44px touch targets.

### 2.7 Theme Toggle Requirements
Dedicated button with sun/moon Google Icons, `aria-pressed`, dynamic `aria-label`, 44×44px target, and a visible 3px focus ring in both themes.

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** Fluid sizing, no horizontal overflow at any viewport.
* **Smooth Animations:** `transition: var(--transition-normal)` on state changes; under `@media (prefers-reduced-motion: reduce)` disable all transforms, shimmer, and smooth scrolling.
* **Accessibility (a11y):** 7:1+ contrast in both modes; never rely on color alone; semantic HTML5 landmarks (`header`, `nav`, `main`, `footer`); every `<section>` labelled via `aria-labelledby`; single `<h1>` with logical h2→h3 order and no skipped levels; `lang="en"`, meta viewport, meta description; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
* **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
* **Destructive Actions:** `.btn-danger` must be visually distinct in both light and dark themes.
* **Anchors:** Use `scroll-behavior: smooth` only inside `@media (prefers-reduced-motion: no-preference)`; add `scroll-padding-top` to offset the sticky header.

## 4. DELIVERABLE & OUTPUT FORMAT

* **File Structure:** Separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. **Permitted exception:** a minimal (≤5 line) inline theme-bootstrap snippet in `<head>` is allowed solely to apply the stored theme class before first paint.
* **Naming Convention:** BEM (`.block__element--modifier`) consistently across HTML, CSS, and JS — never mix conventions.
* **No Unrequested Placeholders:** Write real, meaningful English copy for every section; placeholders are forbidden.
* **No External Images:** Build all visuals from Material Symbols, initials avatars, and CSS shapes; every visual must remain fully accessible.
* **JavaScript Scope:** Theme toggle + persistence, FAQ accordion, mobile nav, and smooth anchor handling only — no other behavior unless specified.

## 5. PAGE SECTION SPECIFICATIONS

* **5.1 Header:** Sticky header with text logo + icon, anchor nav links, theme toggle, and a primary CTA button; skip link placed before it.
* **5.2 Hero:** `<h1>` value proposition, supporting paragraph, primary CTA + secondary link, decorative icon composition; no autoplaying or looping motion.
* **5.3 Features:** Section with `<h2>`; exactly 3 cards, each with a Material icon, `<h3>`, and description; flex row wrapping to a single column on mobile.
* **5.4 How It Works:** Semantic `<ol>` with 3 steps; visible step numbers (not color-only), each with an icon, `<h3>`, and description.
* **5.5 Testimonials:** `<figure>` → `<blockquote>` → `<figcaption><cite>` structure; initials-based avatars; star ratings rendered as Material icons with visually-hidden text ("Rated 5 out of 5 stars").
* **5.6 Pricing:** Exactly 3 tier cards; the middle tier highlighted via border weight AND a visible "Most Popular" badge (never color alone); feature lists with `aria-hidden` check icons plus text; one CTA button per tier. If a billing toggle is added, it must use `role="switch"` + `aria-checked`.
* **5.7 FAQ:** Accordion per Section 2.5 with 5–6 real question/answer pairs.
* **5.8 Final CTA:** High-contrast band using `--primary` as background with its paired light text token (7:1+), `<h2>`, and one primary button.
* **5.9 Footer:** Secondary link groups in `<nav>` elements with distinct `aria-label`s ("Product", "Company", "Legal"), copyright line, and 44px touch targets on all links.

## 6. FINAL VERIFICATION CHECKLIST (self-verify before output)

Confirm all of the following before delivering the code: every text/background pair ≥7:1 in both modes; base font ≥16px; all focus states show a 3px ring via `:focus-visible`; all interactive elements ≥44×44px and keyboard operable; skip link present and functional; `prefers-reduced-motion` honored everywhere; no color-only state communication; no inline CSS; no inline SVGs; semantic landmarks and logical heading order present; dark mode persists via `localStorage`; zero horizontal scroll from 320px up. Output the complete `index.html`, `style.css`, and `script.js` in one response.
