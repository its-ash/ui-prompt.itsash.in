# BUILD PROMPT — "MIXED MEDIA" COLLAGE LANDING PAGE

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete, production-ready Landing Page on the first attempt. The visual theme is **"Mixed Media"** — a collage, multi-medium, layered, eclectic aesthetic inspired by 20th-century collage art translated to the modern web. Every rule in this document is mandatory. Where a stylistic impulse conflicts with a rule, the rule wins.

---

## 1. THEME DIRECTION — "MIXED MEDIA"

**1.1 Aesthetic Definition**
The page must feel like a physical collage artwork: overlapping paper scraps, torn edges, washi tape, push pins, painted swatches, and photographic fragments arranged in asymmetric but balanced compositions. Eclectic and textured, never chaotic or unreadable. Layering, juxtaposition, and slight rotation are the core visual language.

**1.2 Color System & Token Mapping**
Store the full palette as CSS variables. Never hardcode hex values in component rules.

Light mode (default) — `:root`:

```css
:root {
  /* Core tokens */
  --primary: #B5854B;          /* Kraft Brown — decorative layers, tape accents, borders, LARGE display type only */
  --secondary: #2C3E6B;        /* Ink Blue — primary button bg, links, secondary text */
  --bg-primary: #F5F0E8;       /* Off-White paper base (NEVER #ffffff) */
  --bg-secondary: #FAFAF5;     /* Torn Paper White — card/scrap surfaces */
  --text-primary: #2C2C2C;     /* Charcoal */
  --text-secondary: #2C3E6B;   /* Ink Blue — accessible on light surfaces */
  --text-success: #2E7D32;     /* darkened Marker Green, reserved for text */
  --text-error: #B03A3A;       /* darkened Accent Red, reserved for text */
  --border-default: #B5854B;
  --border-error: #D94F4F;
  --border-success: #4CAF50;

  /* Theme-specific decorative tokens */
  --accent-red: #D94F4F;
  --tape-yellow: #E8D5A0;
  --ink-blue: #2C3E6B;
  --torn-white: #FAFAF5;
  --marker-green: #4CAF50;

  /* Typography */
  --font-base: 'Inter', sans-serif;
  --font-serif: 'Libre Baskerville', serif;
  --font-hand: 'Caveat', cursive;

  /* Shape / depth / motion */
  --radius-sm: 2px;  --radius-md: 4px;  --radius-lg: 8px;   /* paper-like, minimal radii */
  --shadow-sm: 2px 2px 5px rgba(0, 0, 0, 0.1);
  --shadow-md: 4px 6px 14px rgba(0, 0, 0, 0.16);
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms; --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* Collage tilts (centralized so they can be neutralized for reduced motion) */
  --tilt-a: -2deg; --tilt-b: 1.5deg; --tilt-c: -0.75deg;

  /* Elevation — decorative collage layers must stay in the 1–10 range */
  --z-dropdown: 1000; --z-modal: 2000; --z-toast: 3000;
}
```

Dark mode tokens (applied via both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`):

```css
--primary: #D4A86A;        /* lightened Kraft Brown */
--secondary: #8FA3D9;      /* lightened Ink Blue */
--bg-primary: #211E1A;     /* warm charcoal "black paper" */
--bg-secondary: #2C2823;   /* elevated dark scrap surface */
--text-primary: #F5F0E8;
--text-secondary: #D9B98A;
--text-success: #81C98C;
--text-error: #F08A8A;
--border-default: #8A6F45;
--border-error: #E4686D;
--border-success: #66BB6A;
--accent-red: #E4686D;
--marker-green: #66BB6A;
/* --tape-yellow #E8D5A0 remains unchanged — it reads well on dark surfaces */
```

**Contrast pairing rules (mandatory, both themes):**
* Light backgrounds always pair with dark text; dark backgrounds always pair with light text. Verify every pairing.
* Kraft Brown `#B5854B` fails contrast for small text and small button labels — restrict it to decorative surfaces, tape, borders, and display type ≥ 24px. Body text and button labels use Charcoal / Ink Blue / Off-White pairings only.
* Primary action buttons: Ink Blue (`--secondary`) background with Off-White (`--bg-primary`) text in light mode; lightened Kraft `#D4A86A` background with `#211E1A` text in dark mode.
* Never use `#ffffff`. Near-white surfaces use `--torn-white: #FAFAF5` (or `#fefefe` only if a whiter surface is genuinely required).

**1.3 Signature Visual Effects (CSS-only)**
* **Torn paper edges:** `clip-path: polygon()` with irregular 8–14 point polygons on card and section edges. Create at least 3 distinct polygon variants so scraps don't look identical. Example: `clip-path: polygon(0 3%, 4% 0, 15% 2%, 30% 0, 52% 3%, 71% 0, 88% 2%, 100% 0, 99% 25%, 100% 55%, 98% 80%, 100% 100%, 82% 98%, 60% 100%, 38% 97%, 18% 100%, 0 96%, 2% 70%, 0 40%)`.
* **Washi tape strips:** a reusable `.tape` class built from pseudo-elements (`::before`/`::after`) — semi-transparent Tape Yellow (`rgba(232, 213, 160, 0.85)`), torn ends via `clip-path`, slight rotation, subtle fiber texture via `repeating-linear-gradient`, faint `--shadow-sm`.
* **Push pins:** a reusable `.pin` class — small circle with `radial-gradient` highlight and drop shadow.
* **Mixed textures (no image files):** paper grain, canvas weave, and photo-tint surfaces generated purely with layered CSS gradients (`repeating-linear-gradient`, `repeating-radial-gradient` at low opacity over the token background colors). Do not reference local or external image assets.
* **Layering & rotation:** overlapping elements stacked with low z-index values (1–10 for decoration); slight rotations via the `--tilt-*` tokens (`-2deg` to `3deg`).
* **Depth:** `box-shadow: var(--shadow-sm)` on paper layers; collage pieces use `border: none` — depth comes from shadow, tape, and pins, not outlines.

**1.4 Typography System**
Mix three Google Fonts with strict roles: `Libre Baskerville` (serif) for headlines and editorial moments; `Caveat` (handwritten) for annotations, eyebrow labels, taped notes, and signatures; `Inter` (sans) for all body copy, UI labels, buttons, and forms. Bind them to `--font-serif`, `--font-hand`, `--font-base` and never reference font families inline.

**1.5 Icon & Decoration Policy**
All icons must be Google Material Symbols (Outlined variant). Raw inline SVGs and local icon files are forbidden. **Exception clause:** the source style requests "tape/pin decorative SVG elements" — implement these as pure-CSS decorations (pseudo-elements, `clip-path`, gradients, `box-shadow`) as specified in 1.3; inline SVG markup remains prohibited.

---

## 2. STRICT RULES & ARCHITECTURE

**2.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
* All design properties, layout rules, and states are targeted via class or ID selectors.
* HTML stays clean, semantic, and style-agnostic — changing the site's look must require editing only the CSS file.

**2.2 CSS Variables & Theme Tokens**
Every color, font, radius, shadow, spacing, transition, easing, tilt, and z-index value must be consumed via `var(--...)` tokens defined in `:root` and the dark theme blocks (see 1.2). No magic numbers in component rules.

**2.3 Mandatory Dark Mode Support**
* Define dark tokens under both `@media (prefers-color-scheme: dark)` (guarded so an explicit `.light` class overrides it) and a `.dark` class selector on `<html>`.
* Background and text variables must switch seamlessly with no HTML restructuring. Add a short `background-color`/`color` transition (`var(--transition-fast)`) on major surfaces so the switch feels smooth.
* Persist the user's choice in `localStorage`; on first visit fall back to `prefers-color-scheme`.
* Include a visible theme toggle in the header using a Google Material Symbol (`dark_mode` / `light_mode`) with correct `aria-pressed` and `aria-label` ("Switch to dark mode" / "Switch to light mode"), updating icon and state on click.
* Dark mode must preserve the full collage aesthetic — tape, pins, and textures remain visible and legible against the charcoal paper base.

**2.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment (permitted exception: multi-line text stacks inside cards may use `align-items: flex-start`).
* All layouts are mobile-first and responsive: collage rows collapse to single columns below ~768px, decorative offsets and rotations reduce to ≤ 1deg or none on small viewports.
* No horizontal scrolling, ever. Set `overflow-x: clip` on `body` and wrap every collage composition in a `position: relative` container that contains its absolutely-positioned decorations.

**2.5 Framework Default**
Use Tailwind CSS, or clean custom CSS organized with Tailwind's `@layer`/`@apply` conventions. All utilities must map back to the CSS variables or generic reusable classes (`.btn`, `.card`, `.tape`, `.pin`, `.input-group`).

**2.6 Google Fonts & Icons (Mandatory)**
Load `Libre Baskerville`, `Caveat`, and `Inter` plus Google Material Symbols via `<link>` tags in `<head>`. No other font or icon sources.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

**3.1 Button Component**
Style all states via CSS classes (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--danger`, `.is-loading`, `.is-disabled`):
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px. May carry a subtle tilt or taped-label treatment, but never at the cost of the touch target or contrast.
* **Hover:** brightness/shadow shift with `cursor: pointer`.
* **Focus:** distinct focus ring built from CSS variables (`outline` + `box-shadow`) that renders above all collage layers — keyboard navigation must never be visually buried.
* **Active/Pressed:** `transform: scale(0.97)` feedback.
* **Loading:** disables interaction, prevents double-clicks, shows a CSS spinner or rotating Material Symbol without changing button dimensions (hide label via `visibility`, overlay spinner absolutely).
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`, communicated with an icon + text (never color alone).
* `.btn--danger` (Accent Red based) must be visually distinct in both light and dark themes.

**3.2 Card Component**
Feature cards, pricing tiers, and testimonial notes are all "torn paper scrap" cards:
* **Default:** flexible Flexbox layout, `--bg-secondary` surface, torn-edge `clip-path`, `--shadow-sm`, tape or pin decoration, slight tilt. `border: none` (depth via shadow/decoration).
* **Hover:** `transform: translateY(-2px)` plus shadow deepening; the tilt may straighten slightly toward 0deg for a "picked up" feel.
* **Focus-within:** card border/outline highlights when a child link or button receives focus.
* **Loading (Skeleton):** shimmer animation defined in CSS (respecting reduced motion) that preserves exact card dimensions — no layout jumps.
* **Empty State:** structured fallback with a Google Material Symbol and clear guidance text.

**3.3 Form & Input Component**
Used for the Final CTA newsletter signup:
* **States:** Empty, Focused (visible outline ring), Filled, Valid (success border + check icon), Invalid (error border, `--text-error` message, error icon), Disabled, Read-only.
* **Structure:** Flex container wrapping a `<label>`, the input, and a dedicated error feedback container with `aria-live="polite"`.
* **Collage treatment:** inputs may look like lined notebook paper (CSS repeating gradient rules) or taped form fields — but focus rings and error states must remain unmistakable.
* Use `novalidate` and validate in JS; the submit button implements the full 3.1 state suite including loading → success feedback.

**3.4 Accordion (FAQ) & Modal**
* **FAQ accordion:** each item is a `<button class="faq__question" aria-expanded="false" aria-controls="...">` paired with a region div. Expand/collapse animated via CSS (`grid-template-rows: 0fr → 1fr` or `max-height`), Material `expand_more` icon rotating on open, fully keyboard operable, paper-note styling with tape detail.
* **Modal (if any popup is used, e.g., plan details):** Opening, Open, Loading, Success/Error, and Closing states all animated via CSS transitions; centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, closable via `Esc` and overlay clicks, layered at `--z-modal`.

---

## 4. PAGE STRUCTURE — REQUIRED SECTIONS

**4.0 Product Concept & Copy**
Invent one coherent product concept consistent with the aesthetic — a digital mixed-media collage studio (an online tool for combining photos, paint textures, paper scraps, and typography). Choose a fitting product name and use it consistently in the nav, hero, and footer. Write all user-facing copy in English — real, specific, thematic copy. Lorem ipsum is prohibited.

**4.1 Header / Navigation**
Sticky slim bar on semi-transparent paper texture: serif wordmark with a Caveat accent, anchor links to all sections, the theme toggle (per 2.3), and a Material `menu` button on mobile opening a dropdown panel at `--z-dropdown`. Add a visually-hidden skip-link to `<main>`.

**4.2 Hero**
Full-viewport asymmetric collage: oversized serif headline on a torn paper scrap (slight tilt), a taped "photograph" fragment (CSS-generated photo-tint texture) overlapping the headline, a Caveat handwritten annotation with an arrow pointing at the primary CTA, and scattered tape/pin decorations. Two CTAs: primary ("Start Collaging") and secondary outline ("See How It Works"). All decorations `aria-hidden="true"` and `pointer-events: none`.

**4.3 Features — 3 Cards**
Three torn-paper scrap cards, each with a Material Symbol icon on a small taped or pinned chip, a serif title, and Inter body copy. Desktop: staggered vertical offsets and alternating tilts (`--tilt-a/b/c`) creating collage rhythm; mobile: clean single column. Full 3.2 card state suite.

**4.4 How It Works — 3 Steps**
Three steps connected by a dashed "marker" line (`border-top: 2px dashed var(--primary)`), horizontal on desktop, vertical on mobile. Step numbers ("01", "02", "03") in Caveat on taped chips; each step is a mini collage card with icon, title, and description.

**4.5 Testimonials**
Three quotes styled as taped notes / polaroid cards: a CSS-textured "photo" area, quote in serif or Inter, customer name signed in Caveat, star rating using filled Material `star` icons in Marker Green/Tape Yellow **plus** a visually-hidden "Rated 5 out of 5" text (never color-only). Alternating tilts ±2deg.

**4.6 Pricing — 3 Tiers**
Three scrap cards (e.g., starter, featured, pro). The middle tier is elevated: larger scale or offset, higher stacking (still below `--z-dropdown`), and a taped "Most Popular" label in Caveat. Feature lists use Material `check` icons in Marker Green; prices in serif; each tier has a CTA button implementing the full 3.1 state suite.

**4.7 FAQ**
Accessible accordion (per 3.4) with 5–6 real Q&As about the product, paper-note styling, smooth animated expansion.

**4.8 Final CTA**
Bold full-width collage banner (Ink Blue painted-swatch background with torn edges), serif headline with a Caveat accent, and the newsletter email form implementing the full 3.3 spec — validation, loading, success/error feedback announced via `aria-live`.

**4.9 Footer**
Charcoal (light mode) / deepened paper (dark mode) surface with a torn top edge via `clip-path`: brand wordmark, four secondary link groups (Product, Company, Resources, Legal), social icons (Material Symbols), and copyright. All links have visible hover and focus states.

Use a consistent section-heading pattern throughout: a small Caveat eyebrow label on a taped chip + a serif `<h2>` on a torn scrap. Each `<section>` is labeled via `aria-labelledby` pointing at its heading id, with `scroll-margin-top` set for the sticky header.

---

## 5. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid sizing, no horizontal overflow, collage compositions contained (see 2.4).
* **Smooth animations:** CSS transitions on all state changes using the motion tokens; under `@media (prefers-reduced-motion: reduce)` disable transitions, shimmer, and all tilts/transforms (set to `none`) while keeping color-state changes.
* **Accessibility:** sufficient contrast in both themes (per 1.2 pairing rules); never rely on color alone for state; semantic HTML5 landmarks; correct ARIA roles/labels on the accordion, toggle, and form widgets; logical DOM/focus order; full keyboard operability; `aria-live` regions for form errors, loading, and success feedback; text containers never rotated more than ±1deg (larger tilts are for decorative scraps only); focus rings always render above collage layers.
* **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
* **Destructive actions:** `.btn--danger` visually distinct in both themes.

---

## 6. DELIVERABLE & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks and no inline event handlers — a single `<script src="script.js" defer></script>` entry point; all behavior attached via `addEventListener`.
* **Naming:** one consistent BEM convention across the entire deliverable (`.card`, `.card__title`, `.card--featured`, `.tape`, `.pin`, `.faq__question`). Never mix conventions.
* **Copy:** real thematic English copy per 4.0 — no lorem ipsum.
* **Completeness:** deliver the full, working code for every section and state on the first attempt. The result must run correctly when the three files are opened directly in a browser.
