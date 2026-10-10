# Coding Prompt — "Framelix 3D Studios" Cinematic 3D Landing Page

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page for **Framelix 3D Studios** — a cinematic 3D motion-design studio — on the first attempt. Output the final code in full: no truncation, no TODOs, no stubs beyond the explicitly permitted video sources.

---

## 1. Project Overview & Design System

**1.1 Theme Identity**
- **Name:** Framelix 3D Studios
- **Type:** Creative · 3D · Cinematic · Marquee Banner · Multi-Video Sections
- **Era:** 2024–2026 creative-studio aesthetic
- **Keywords (translated from source):** 3D, cinematic, motion studio, marquee banner, multiple videos, pure black, lavender accent, ticket icon, video sections, Inter font
- **Modes:** Full light **and** full dark support — **pure black dark mode is the default look**

**1.2 Page Map (build in this exact order)**
1. **Navbar** — sticky; ticket-icon logo, 3 columns of stacked links, theme toggle, "Buy Now" button; mobile hamburger dropdown.
2. **Hero** — full-width cinematic showreel video (`width:100%; height:auto; object-fit:cover`) with absolute text overlays animated fade+slide (0.8s); "Explore Our Work" + "Buy Now" CTAs.
3. **Marquee Banner** — lavender `#A6A4FF` strip, black uppercase text, infinite `translateX` loop, 20s linear, 60px gap.
4. **Features** — 3 cards: 3D Motion Design / Cinematic CGI Renders / VFX & Compositing.
5. **How It Works** — 3 numbered steps: 01 Brief & Concept / 02 Design & Animation / 03 Render & Delivery.
6. **Showcase ("Shipping") Section** — fixed light-grey `#EAEAEA` stage, `border-radius: 0 0 40px 40px`, centered square 800×800 looping 3D product-demo video, "Buy Now" CTA.
7. **Testimonials** — 3 quote cards with star ratings and initials avatars.
8. **Pricing** — 3 tiers (Starter / Studio / Enterprise), middle tier featured.
9. **FAQ** — 5-item accessible accordion.
10. **Final CTA** — large closing panel with "Buy Now" + "Explore" buttons.
11. **Footer** — secondary link columns, social icons, copyright.

**1.3 Color Tokens (define exactly)**
```css
:root, html.dark {
  --primary: #A6A4FF;                 /* lavender accent */
  --secondary: #EAEAEA;               /* light grey */
  --bg-primary: #000000;              /* pure black */
  --bg-secondary: #0D0D0D;            /* card surface on black */
  --text-primary: #FFFFFF;
  --text-secondary: rgba(255,255,255,0.6);
  --text-success: #4ADE80;  --text-error: #F87171;
  --border-default: rgba(255,255,255,0.14);
  --border-success: #4ADE80; --border-error: #F87171;
  --btn-primary-bg: #A6A4FF; --btn-primary-text: #000000;
  --radius-sm: 8px; --radius-md: 16px; --radius-lg: 24px;
  --shadow-sm: 0 2px 10px rgba(0,0,0,0.4); --shadow-md: 0 10px 30px rgba(0,0,0,0.5);
  --spacing-gap: 60px; --spacing-md: 24px; --spacing-sm: 12px;
  --transition-fast: 150ms; --transition-normal: 300ms; --transition-slow: 800ms;
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;
  --font-base: 'Inter', 'Segoe UI', system-ui, sans-serif;
}
html.light {
  --bg-primary: #EAEAEA;
  --bg-secondary: #FEFEFE;            /* never #ffffff */
  --text-primary: #000000;
  --text-secondary: #6B7280;          /* darken to #4B5563 for body-size text to hold AA */
  --text-success: #16A34A;  --text-error: #DC2626;
  --border-default: rgba(0,0,0,0.14);
  --btn-primary-bg: #000000; --btn-primary-text: #FFFFFF;
  --shadow-sm: 0 2px 10px rgba(0,0,0,0.08); --shadow-md: 0 10px 30px rgba(0,0,0,0.12);
}
```
- **Theme-invariant surfaces (never switch):** marquee (`#A6A4FF` bg / `#000000` text) and the showcase stage (`#EAEAEA` bg / `#000000` text). These stay light in both themes and always pair with black text.
- **Contrast pairing rule:** every light background token pairs with dark text and every dark background token with light text — in both themes, no exceptions. Set `color-scheme: dark` on `:root`/`html.dark` and `color-scheme: light` on `html.light`.

---

## 2. Architecture & Coding Standards

**2.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
- All design properties, layout rules, and states are targeted via class/ID selectors only.
- HTML stays semantic and style-agnostic: retheming the site must require editing `style.css` only, never the markup.

**2.2 CSS Variables & Theme Tokens**
- Every color, radius, shadow, spacing, transition, easing, and z-index value must come from the tokens in 1.3 — no magic numbers in component rules (the spec-mandated literals `20s`, `60px`, `40px`, and `0.8s` are the only permitted exceptions, each with a CSS comment).

**2.3 Mandatory Light/Dark Theming**
- Dark is the default. Provide a visible navbar toggle using Material Symbols `dark_mode`/`light_mode` with `aria-pressed` (true = dark active) and `aria-label="Toggle dark mode"`.
- First visit: consult `prefers-color-scheme`; if `light`, add `.light` to `<html>`. Persist the user's explicit choice in `localStorage` (key `framelix-theme`); a stored choice always wins over the media query.
- Theme switching swaps CSS variables only — no HTML restructuring, no reload. Announce changes through an `aria-live="polite"` region.

**2.4 Flexbox Layout & Mobile-First**
- Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless an exception is justified in a CSS comment (permitted here: vertical link stacks and card content columns may use `align-items: flex-start` so text left-aligns).
- Mobile-first: rows collapse to columns below 768px; fluid `clamp()` typography; content container `max-width: 1200px` centered; sections get generous block padding (~96px desktop / 64px mobile); **zero horizontal scrolling at any width** — the marquee track is the only element allowed to exceed the viewport, inside an `overflow: hidden` wrapper.

**2.5 Framework & Animation Exceptions**
- **Exception (Tailwind utilities):** the source spec's utility names (`w-full`, `h-auto`, `object-cover`, `brightness-0`, `invert`) are descriptive shorthand — implement them as equivalent custom CSS rules; do not load any CSS framework or CDN library.
- **Exception (Framer Motion):** Framer Motion is React-only and incompatible with the mandated vanilla file structure — replicate its fade+slide 0.8s entrance animations exactly: elements start `opacity: 0; transform: translateY(28px)` and transition to visible over **0.8s** with `--ease-standard`, staggered ~0.12s, triggered on load (hero) and via `IntersectionObserver` (all other sections).

**2.6 Typography & Icons (Google Fonts Mandatory)**
- Load **Inter** (weights 400–800) from Google Fonts via `<link>`; bind to `--font-base` and apply globally. Headlines: Inter 700–800, tight letter-spacing, fluid `clamp()` sizes.
- Icons: **Google Material Symbols (Rounded)** via `<link>`. Raw inline `<svg>` elements and local icon files are forbidden.
- **Exception (ticket icon):** the source spec asks for a "ticket SVG icon" — render it as the Google Material Symbol `confirmation_number` with the mandated filter treatment via a `.logo__mark` class: `filter: brightness(0) invert(1)` in dark mode (renders pure white) and `filter: brightness(0)` in light mode (renders pure black). The filter technique is mandatory — do not substitute a plain `color`.

---

## 3. Component Specifications

**3.1 Buttons**
- Base `.btn`: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target, Inter 600, `border-radius: var(--radius-md)`, `transition: var(--transition-fast) var(--ease-standard)`.
- Variants: `.btn--primary` (uses `--btn-primary-bg`/`--btn-primary-text`), `.btn--secondary` (ghost: transparent bg, 1px `--border-default`, `--text-primary` text), `.btn--danger` (visually distinct in both themes; defined even though unused).
- **Hover:** brightness shift + `--shadow-sm`, `cursor: pointer`. **Focus-visible:** 2px `--primary` outline, 2px offset — never remove. **Active:** `transform: scale(0.97)`. **Loading (`.is-loading`):** `pointer-events: none`, CSS border spinner or rotating Material `progress_activity` icon — button dimensions must not change; double-clicks blocked. **Disabled:** `opacity: 0.5; filter: grayscale(1); cursor: not-allowed`. **Success/Error (`.is-success`/`.is-error`):** feedback via `--text-success`/`--text-error` plus check/error Material icons.
- Wire every "Buy Now" button: click → `.is-loading` (~1.2s) → `.is-success` (check icon + "Added" label) announced via `aria-live="polite"` → auto-reset after ~2.5s.

**3.2 Cards**
- Base `.card`: `--bg-secondary` surface, 1px `--border-default`, `border-radius: var(--radius-lg)`, flex column, comfortable padding.
- **Hover:** `transform: translateY(-2px)` + `--shadow-md`. **Focus-within:** border turns `--primary` when a child control is focused. **Loading:** define a `.skeleton` shimmer keyframe utility and apply it to each video wrapper until the video fires `canplay` (reserve space with `aspect-ratio` so nothing shifts). **Empty state:** not applicable — no async data-driven cards; do not invent one.
- Feature cards: lavender icon tile (Material `view_in_ar` / `movie` / `auto_awesome`), title, description. Testimonial cards: Material `format_quote`, 5-star row (Material `star`, rating also stated in text — never color-only), initials avatar (lavender circle, black initials), name + role. Pricing cards: tier name, price, check-icon feature list, CTA; the middle `.card--featured` gets a 2px lavender border, a "MOST POPULAR" badge (lavender bg, black text), and higher elevation.

**3.3 Video Sections (two distinct videos)**
- **Hero showreel:** `<video class="hero__video" autoplay muted loop playsinline preload="auto">` — CSS: `width: 100%; height: auto; object-fit: cover; display: block;`. Use a publicly hosted sample MP4 (e.g., Google's gtv-videos-bucket samples) as the source with an HTML comment `<!-- REPLACE with studio showreel -->` so the page plays on first load.
- **Showcase ("shipping") demo:** square 800×800 — CSS: `width: min(800px, 100%); aspect-ratio: 1 / 1; object-fit: cover; border-radius: var(--radius-lg);` centered on the fixed `#EAEAEA` stage. Same autoplay/muted/loop attributes and a commented sample source.
- Hero container is `position: relative`; add a legibility gradient via `.hero::after` (bottom fade to `rgba(0,0,0,0.75)`, `pointer-events: none`).

**3.4 Marquee Banner**
- `.marquee`: `background: #A6A4FF; color: #000000;` (fixed in both themes), `overflow: hidden`, vertical padding.
- `.marquee__track`: `display: flex; width: max-content;` containing **two identical** `.marquee__group` elements (the second `aria-hidden="true"`). Each group: `display: flex; gap: 60px; padding-inline-end: 60px;` so the loop seam is seamless.
- Animation: `@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }` applied as `marquee 20s linear infinite`.
- Items: uppercase Inter 700, letter-spacing ~0.08em, black text, separated by a small Material Symbol (`asterisk` or the ticket `confirmation_number`). Content: "3D MOTION DESIGN · CINEMATIC RENDERS · VFX & COMPOSITING · PRODUCT VISUALIZATION · FRAMELIX STUDIOS".
- `prefers-reduced-motion`: `animation: none` (static, non-overflowing row).

**3.5 Navbar**
- `position: sticky; top: 0;` translucent backdrop (`backdrop-filter: blur(12px)` + rgba bg per theme), z-index just below `--z-dropdown`.
- Flex row, `align-items: center`, `justify-content: space-between`: left = logo (ticket mark with the mandated filter + "FRAMELIX" wordmark, Inter 800, uppercase, letter-spaced); center = `.nav__columns` — **exactly 3 columns of stacked links** (a flex row of three `.nav__column` flex-columns, 2 anchors each, mapping to page sections: Features/Process, Pricing/FAQ, Testimonials/Showcase); right = theme toggle + `.btn--primary` "Buy Now".
- Links: `--text-secondary` → `--text-primary` on hover with an animated underline.
- **Mobile (<768px):** hide the columns; show a hamburger (Material `menu`, `aria-expanded`, `aria-controls`) toggling `.nav__dropdown` — an absolutely positioned panel at `--z-dropdown` with links stacked; closes on `Esc`, outside click, and link click; focus returns to the hamburger.

**3.6 Hero Text Overlays**
- `.hero__overlay`: absolutely positioned over the video (bottom-aligned, generous padding), flex column, `gap: var(--spacing-md)`.
- Content: eyebrow ("FRAMELIX 3D STUDIOS — MOTION · CGI · VFX"), H1 (e.g., "We craft cinematic 3D worlds."), subline, CTA row: `.btn--primary` "Explore Our Work" (smooth-scrolls to `#features`) + `.btn--secondary` "Buy Now".
- Entrance: each child animates fade+slide (0.8s, `--ease-standard`) with 0.12s stagger on page load, per 2.5.

**3.7 FAQ Accordion**
- 5 realistic questions (turnaround time, revision rounds, deliverable formats, pricing model, licensing/rights). Build with native `<details class="faq__item">` / `<summary>` for free keyboard and screen-reader support; style the summary with a rotating Material `expand_more` icon (`[open]` → 180°), clear hover/focus-visible states, and an animated open/close (grid-rows or height technique).

**3.8 Forms & Modals — Out of Scope**
- Do not add contact forms, newsletter inputs, or modals; they were not requested. (If one ever becomes necessary, it must follow the full label + input + dedicated error-container structure with empty/focused/filled/valid/invalid/disabled/read-only states and `aria-live` error feedback.)

---

## 4. UX, Accessibility & Micro-Interaction Rules

- **Responsive by default:** fluid `clamp()` type, 768px/1024px breakpoints, `scroll-margin-top` on all anchored sections (sticky navbar offset), no horizontal overflow.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; respect `prefers-reduced-motion` — disable the marquee, entrance transforms, and smooth scrolling, and pause both videos via a `matchMedia` check in JS.
- **Accessibility:** AA contrast in both themes (darken light-mode `--text-secondary` to `#4B5563` for body-size text); never communicate state by color alone; semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), a single `h1`, logical heading order; a visually hidden "Skip to content" link; correct ARIA on the theme toggle, hamburger, and accordion; an `aria-live="polite"` region for button feedback and theme announcements; full keyboard operability with visible focus rings on every interactive element.
- **Mandatory visual feedback:** every click, hover, and focus produces a visible state change.
- **Anchors:** in-page links smooth-scroll (`scroll-behavior: smooth`; `auto` under reduced motion).

---

## 5. Deliverables & Output Requirements

- **Files:** `index.html`, `style.css`, `script.js` — three separate files. The HTML contains exactly one `<script src="script.js" defer>` and zero inline script blocks, zero inline styles, zero inline SVGs.
- **Naming:** strict BEM (`block__element--modifier`) everywhere; never mix conventions.
- **JS scope (vanilla only, no frameworks, no build step):** theme init/persistence/toggle, mobile nav, IntersectionObserver reveals, hero stagger, Buy Now loading→success simulation, skeleton removal on video `canplay`, reduced-motion video pausing.
- **Copy:** all user-facing copy in **English**, realistic and specific to a 3D motion studio — no lorem ipsum. Only the video `src` values (and footer legal link `href`s) are placeholders; each video source must be a working public sample URL clearly commented for replacement.
- **Document head:** `lang="en"`, viewport meta, `<title>` "Framelix 3D Studios — Cinematic 3D Motion Design", meta description.
- **Completeness:** deliver the entire page in one response — every section fully coded and styled on the first attempt, nothing omitted.
