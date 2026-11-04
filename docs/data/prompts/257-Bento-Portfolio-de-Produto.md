# SYSTEM PROMPT — CODING AGENT BRIEF: "BENTO PRODUCT PORTFOLIO" LANDING PAGE

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready landing page on the first attempt. The governing aesthetic is **Minimalism & Swiss**: rigorous grid discipline, generous whitespace, restrained color, precise typographic hierarchy, and zero decorative noise — expressed through a modern **Bento grid** composition for a product designer's portfolio.

---

## 0. PROJECT BRIEF & VISUAL DIRECTION

**0.1 Theme Identity**
- **Theme:** Bento Product Portfolio
- **Style:** Visual, Organized, Modern
- **Keywords:** product design, portfolio, visual, organized, modern, clean, intuitive, detailed, curated, professional
- **Era:** 2026+ User-Centered Design
- **Output Category:** Minimalism & Swiss

**0.2 Visual Direction (mandatory)**
Design a visual, organized Bento-style landing page for a product designer's portfolio. Use: Bento grid layouts for project presentation; cards with project thumbnails and concise descriptions; clean sans-serif typography; minimalist process icons; project-preview hover micro-interactions; smooth, focused element transitions; light grey and medium blue accents; a detailed, professional, curated feel. Emphasis on organization and project detail throughout.

**0.3 Copy Language Rule**
All user-facing copy must be written in **English** — concise, curated, professional tone. Write real, specific copy (project names, testimonial authors with roles/companies, pricing tier names and prices, FAQ questions and answers, process step titles). Lorem ipsum is prohibited.

**0.4 Page Structure (sections in this exact order)**
1. **Sticky Header:** Text logo mark, anchor nav links (Features, Process, Testimonials, Pricing, FAQ), theme toggle, mobile hamburger (Material Symbol) opening a keyboard-accessible slide-down panel with `aria-expanded`.
2. **Hero:** Eyebrow tag, large H1, supporting subheadline, primary CTA button + secondary link, and a Bento mosaic of 4–5 project tiles (`.bento-project-card` with `.project-thumbnail`) in asymmetric spans (e.g., one 2×2, others 1×1/1×2). On mobile, stack text above a single-column mosaic.
3. **Features (3 cards):** Section header (eyebrow + H2 + description), then 3 cards in a Bento arrangement (one wide tile + two standard, or equal thirds). Each card: minimalist Material Symbol icon inside a pastel-tinted rounded square (rotate mint/peach/lavender tints), title, concise description.
4. **How It Works (3 steps):** Three numbered steps (01/02/03) with minimalist process icons (e.g., `search` → `edit`/`design_services` → `rocket_launch`), connected by a subtle horizontal line on desktop, stacked on mobile. Each step: number, icon, title, short description.
5. **Testimonials:** 3 quote cards with quote icon, quote text, author name, role/company, and a circular avatar (seeded placeholder or CSS initials).
6. **Pricing (3 tiers):** Three tiers (e.g., Essential / Professional / Studio). Middle tier visually elevated: `--primary` border, "Most Popular" badge, stronger shadow. Each tier: name, price + period, short description, feature list with Material Symbol check icons, CTA button (primary on middle tier, secondary/outline on others).
7. **FAQ:** Accessible accordion with 5–6 items; first item open by default; chevron icon rotates on expand; smooth CSS height transition.
8. **Final CTA:** Full-width Bento-style panel with headline, supporting line, and an **email capture form** (input + button) demonstrating all form states. If the panel uses a `--primary` (#6495ED) background, all text on it must be `#1B2A4A` (verified ≥4.5:1) — never white or `#333333` body text on the blue.
9. **Footer with secondary links:** Brand blurb, grouped link columns (Work, Company, Resources), social links as text labels or generic Material Symbols (`mail`, `alternate_email`, `public` — no brand logos, no inline SVG), copyright line, back-to-top link.

**0.5 Color Palette → CSS Variable Token Map**

Light mode (default), defined in `:root`:
- `--bg-primary: #F0F2F5` (Light Grey — page background; never pure white)
- `--bg-secondary: #fefefe` (card/tile background — **explicit substitution for the palette's #FFFFFF per architecture rule 1.2**)
- `--text-primary: #333333` · `--text-secondary: #6C757D`
- `--primary: #6495ED` (Medium Blue — interactive accent) · `--secondary: #98FB98` (Mint Green — secondary accent, used on tags/success accents, never as text on light backgrounds)
- Pastel tile tints: `--accent-mint: #98FB98`, `--accent-peach: #FFDAB9`, `--accent-lavender: #E6E6FA` — always paired with `--text-primary` (dark text on light pastel)
- `--text-success: #1F7A4D` (darkened Mint for AA contrast) · `--text-error: #C0392B` (accessible red; the palette contains no red, but error tokens are architecturally required)
- `--border-default: #E2E5EA` · `--border-error: #C0392B` · `--border-success: #1F7A4D`
- `--radius-sm: 6px` · `--radius-md: 10px` (per spec) · `--radius-lg: 16px`
- `--shadow-sm: 0 2px 6px rgba(0,0,0,0.04)` (per spec) · `--shadow-md: 0 10px 30px rgba(0,0,0,0.08)`
- `--spacing-gap: 1.5rem` (Bento gutter) · `--transition-fast: 150ms ease-in-out` · `--transition-normal: 300ms ease-in-out` (per spec) · `--ease-standard: ease-in-out`
- `--z-dropdown: 10` · `--z-modal: 100` · `--z-toast: 200`
- `--font-base: 'Inter', sans-serif`

Dark mode tokens (mandatory, under `.dark` and/or `@media (prefers-color-scheme: dark)`):
- `--bg-primary: #17191D` · `--bg-secondary: #21252B` · `--text-primary: #F0F2F5` · `--text-secondary: #A6AEB8`
- `--primary: #7FA8F0` (lightened Medium Blue for dark-mode contrast) · `--secondary: #98FB98`
- Pastel tile tints become dark, desaturated surfaces paired with light text: `--accent-mint: #24463C`, `--accent-peach: #4A382A`, `--accent-lavender: #3A3653`; the original pastels may still be used as small accent colors (icons, tags) on dark backgrounds
- `--text-success: #7FD9A4` · `--text-error: #F08A7A` · `--border-default: #343941` · `--border-error: #F08A7A` · `--border-success: #7FD9A4`
- Shadows deepen: `--shadow-sm: 0 2px 6px rgba(0,0,0,0.4)` · `--shadow-md: 0 10px 30px rgba(0,0,0,0.5)`

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is **forbidden** anywhere in the HTML.
- All design properties, layout rules, and states are targeted exclusively via class or ID selectors.
- HTML remains clean, semantic, and style-agnostic: changing the site's look must require editing only `style.css`, never the markup.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
- Every visual token must be stored as a CSS variable per the token map in Section 0.5 — no hardcoded hex values, radii, shadows, or durations in component rules.
- **Contrast Pairing:** Every light background token pairs with a dark text token and every dark background token pairs with a light text token — enforced in both themes, including pastel tile tints.
- **Light Mode Background:** The page background is `#F0F2F5`, never pure white; wherever the palette's white is needed (cards, tiles), use `#fefefe` instead of `#ffffff`.
- Apply transitions to specific properties (`transform`, `box-shadow`, `background-color`, `color`, `border-color`) using `var(--transition-normal)` rather than blanket `transition: all`.

**1.3 Mandatory Dark Mode Support**
- Dark mode tokens must be defined under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector; background and text variables must switch seamlessly with zero HTML restructuring.
- Provide a visible theme toggle in the sticky header using Material Symbols (`dark_mode` / `light_mode`) with correct `aria-pressed` and `aria-label` state.
- Persist the user's choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- **Exception clause:** The source style specification lists Dark Mode as excluded; per mandatory architecture, full dark mode support is nonetheless required and must be implemented exactly as defined in this section.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox (`display: flex` / Tailwind flex utilities). Every flex container defaults to `align-items: center` (`items-center`) unless an explicitly justified exception exists (e.g., `align-items: flex-start` for multi-line text blocks).
- **Exception clause:** The Bento mosaics (`.bento-grid`, hero and feature arrangements) may use CSS Grid (`display: grid`) to achieve variable tile spans; every non-mosaic layout structure must use Flexbox with the `align-items: center` default.
- Mobile-first: all layouts are responsive out of the box — Bento mosaics collapse to a single column, rows convert to columns on small viewports, and horizontal scrolling is impossible at any width.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (Play CDN acceptable) unless another framework is requested; define a theme config mapping Tailwind colors/fonts to the CSS variables from Section 0.5.
- All utility usage must map back to CSS variables or generic reusable component classes: `.btn`, `.card`, `.input-group`, plus the spec-mandated `.bento-project-card`, `.project-thumbnail`, `.preview-hover`.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load **Inter** from Google Fonts (weights 400/500/600/700) via `<link>` and bind it to `--font-base`. Establish clear hierarchy: large tight-tracking H1, section H2s, small uppercase letter-spaced eyebrows — Swiss typographic discipline.
- Use **Google Material Symbols** (Rounded or Outlined) for every icon: process icons, feature icons, pricing check marks, FAQ chevrons, quote marks, theme toggle, hamburger, button arrows.
- Raw inline SVGs, local icon files, and emoji are **explicitly forbidden**.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component Requirements**
Style all states via CSS classes (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger`):
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; Inter 600.
- **Hover:** brightness/shadow shift with `cursor: pointer`.
- **Focus:** distinct focus ring via `outline`/`box-shadow` using `--primary` for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)` feedback.
- **Loading (`.is-loading`):** disables interactions, prevents double-clicks, renders a CSS border spinner or animated Google Icon without distorting button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error` (e.g., CTA email form submission feedback).

**2.2 Card Component Requirements (Bento Project Card)**
- **Default:** `.bento-project-card` — tile with `--bg-secondary`, 1px `--border-default` border, `border-radius: var(--radius-md)` (10px), `box-shadow: var(--shadow-sm)`, consistent internal padding; `.project-thumbnail` uses a fixed aspect ratio (16/10), `object-fit: cover`, rounded top corners, `overflow: hidden`.
- **Hover (`.preview-hover`):** on hover and `:focus-within` — thumbnail scales to `1.05`, a gradient overlay fades in with a "View Project" label + arrow icon, and the card lifts (`translateY(-2px)`) with `--shadow-md`; all via `var(--transition-normal)`.
- **Focus-within:** card border highlights with `--primary` when a child link/button receives focus.
- **Loading (Skeleton):** define a shimmer keyframe animation in CSS applied to `.project-thumbnail` until the image loads (script toggles a class on the `load` event) to prevent layout jumps.
- **Empty State:** structured fallback layout with a Google Icon and clear guidance text.
- Feature, step, testimonial, and pricing cards reuse the `.card` base with the same state discipline.

**2.3 Form & Input Requirements**
Used by the Final CTA email capture:
- **States:** Empty, Focused (outline ring in `--primary`), Filled, Valid (success border + check icon), Invalid (error border, `--text-error` message, error icon), Disabled, Read-only.
- **Structure:** flex `.input-group` wrapping a label, input field, and a dedicated error feedback container.
- Errors are announced via `aria-live="polite"` and never communicated by color alone (always icon + text).

**2.4 Modal / Popup Requirements**
- No modals are required for this page; the FAQ must use the accordion pattern, not popups.
- If you optionally add a project preview dialog triggered from a Bento tile, it must implement: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via `Esc` and overlay click, CSS-animated opening/closing, and defined Loading and Success/Error states.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** fluid sizing and breakpoints (~640/768/1024px) with zero horizontal overflow; Bento mosaics reflow from multi-span tiles to a single column; use `clamp()` for fluid typography.
- **Smooth Animations:** `transition: var(--transition-normal)` on all state changes (hovers, lifts, chevron rotations, accordion expansion, menu slide); fully respect `prefers-reduced-motion` by disabling transforms and shimmer.
- **Swiss Discipline:** strict alignment, a consistent spacing scale, a max-width content container (~1200px), generous whitespace, and restrained color — Medium Blue used purposefully, never decoratively.
- **Accessibility (a11y):** AA contrast in both Light and Dark modes; semantic HTML5 (`header`/`nav`/`main`/`section`/`footer`, strict h1–h3 hierarchy); correct ARIA on the accordion (`aria-expanded`, `aria-controls`), theme toggle (`aria-pressed`), and mobile menu (`aria-expanded`); logical DOM/focus order; full keyboard operability for every interactive element; `aria-live` regions for form feedback; a skip-link to main content; smooth anchor scrolling with `scroll-margin-top` offset for the sticky header.
- **Mandatory Visual Feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive Actions:** define `.btn-danger` as visually distinct in both themes, even if lightly used.
- **Bento Micro-Interactions:** hover previews on project tiles, icon nudges, button press transforms, chevron rotation, and shadow elevation shifts — all smooth, focused, and subtle.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** separate `index.html`, `style.css`, and `script.js`. No inline `<style>` blocks and no inline `<script>` blocks beyond a single deferred `script.js` reference.
- **Naming Convention:** one consistent convention — flat, hyphenated, descriptive class names (e.g., `.bento-project-card`, `.project-thumbnail`, `.preview-hover`, `.hero-grid`, `.feature-card`, `.step-card`, `.pricing-card`, `.faq-item`, `.footer-link`). Never mix conventions. The three spec-mandated selectors `.bento-project-card`, `.project-thumbnail`, and `.preview-hover` must exist verbatim.
- **Copy:** all English, real, and specific to a senior product designer's portfolio — no lorem ipsum.
- **Images:** project thumbnails and avatars via seeded placeholders (`https://picsum.photos/seed/<name>/800/500`) since no real assets were provided; style them with `.project-thumbnail`.
- **JavaScript Scope:** only theme toggle persistence, mobile menu, FAQ accordion, thumbnail load/skeleton handling, and CTA form validation/feedback — no other behavioral code.
- Deliver complete, runnable code on the first attempt.
