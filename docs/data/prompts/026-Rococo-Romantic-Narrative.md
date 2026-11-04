**ROLE & MISSION**

You are a Senior Frontend Engineer and Expert UI Designer. Build a **complete, production-quality landing page in a single first attempt** — output the full, final code for every file with no outlines, no partial builds, and no clarifying questions. The deliverable is a luxury-editorial landing page in the theme **"Rococo Romantic Narrative"**: elegant, dreamy, whimsical, ornate 18th-century romance in pastels and gold.

---

**CREATIVE BRIEF — THEME: "ROCOCO ROMANTIC NARRATIVE"**

**Narrative Concept:** The page belongs to a fictional luxury brand, **The Gilded Rose** — an 18th-century-style atelier that composes, embellishes, and delivers handcrafted romantic love letters and gift parcels. Every section must advance this single narrative with coherent, finished copy.

**Mood, Keywords & Category:** rococo, romantic, pastel, gold, floral, ornate, cherubs, soft, luxury, dreamy, whimsical; era: 18th century; output category: **Luxury & Editorial** (generous whitespace, editorial typography, chapter-style section labels, refined ornamental detail).

**Color Palette (Light Mode — the default):**
- Background `#FDF6F0` (warm cream — never pure white; use `#FEFEFE` where a near-white surface is required)
- Text `#6B4C40` (warm cocoa brown)
- Gold accent `#EBC97A`
- Pastels: Pale Pink `#FADADD`, Sky Blue `#C6E2FF`, Mint Green `#D0F0C0`

**Signature Visual Effects (CSS-only unless noted):**
- **Soft watercolor wash:** layered radial gradients — the hero must use the spec gradient `radial-gradient(circle, #FDF6F0 0%, #FADADD 100%)`; other sections receive subtle pastel washes at reduced opacity.
- **Flowing golden ribbons:** gradient hairline dividers and curved pseudo-element flourishes.
- **Ethereal glow:** soft gold/pink halo shadows behind display elements — never behind body text.
- **Cherubs & blooming roses:** render via remote placeholder images (e.g., `https://picsum.photos/...`) with descriptive `alt` text and a replacement comment, or pure-CSS ornamental medallions (gradient rings, petal shapes via `border-radius`). **Inline SVG and local image files are forbidden.**
- Ornate double-border frames, gentle floating ornament animations, and an optional editorial drop cap on the hero paragraph.

**Typography & Icons (Google Fonts mandatory):**
- `--font-display: 'Great Vibes', cursive` — per the source spec; the spec's global `font-family: 'Great Vibes'` is honored as the display face only: brand wordmark, hero headline, small ornamental accents. **Never for body copy, labels, buttons, or long text** (script fonts fail legibility at small sizes).
- `--font-heading: 'Cormorant Garamond', serif` — section headings, card titles, prices, pull quotes.
- `--font-base: 'Jost', sans-serif` — body copy, navigation, buttons (letter-spaced uppercase), forms.
- Icons: **Google Material Symbols (Rounded)** exclusively (`material-symbols-rounded` class). Inline SVGs, local icon files, and emoji-as-icons are forbidden.

**Copy Direction:** All user-facing copy in English, written in a romantic, whimsical, luxury-editorial voice — e.g., section eyebrows styled as chapters ("Chapter the First — The Art of Correspondence") and hero copy in the spirit of "An Atelier of Romantic Correspondence · Est. 1745" / "Where Love Is Written in Gold." Real, finished copy everywhere; lorem ipsum is forbidden.

---

**PAGE BLUEPRINT — REQUIRED SECTIONS, IN THIS ORDER**

**Sticky Header:** Brand wordmark (Great Vibes), anchor links (Features, How It Works, Testimonials, Pricing, FAQ), a gold `.btn--primary` "Reserve Your Letter" linking to the Final CTA, and the dark-mode toggle. Translucent cream `backdrop-blur` surface with a gold hairline bottom border. On mobile, links collapse behind a hamburger disclosure panel (ARIA-correct, Esc-to-close, layered with `--z-dropdown`).

**1. Hero:** ~90vh; watercolor radial-gradient backdrop with ethereal glow; ornate frame; eyebrow label; Great Vibes headline with fluid `clamp()` sizing (~3rem–6rem); Cormorant subheadline; primary gold CTA + ghost secondary CTA; scroll cue; floating cherub/rose ornaments (subtle loop, reduced-motion-safe).

**2. Features — 3 Cards:** Flexbox row → column on mobile; each card `flex: 1`. Gold-ringed Material Symbol medallion, Cormorant title, Jost body copy. Rotate pastel accents across the three cards: pink / sky blue / mint. Implement the full card state system (see 2.2).

**3. How It Works — 3 Steps:** Semantic `<ol>`; Roman numerals I · II · III inside gold medallions; a golden-ribbon connector (horizontal on desktop, vertical on mobile); step title + copy for Compose → Embellish → Deliver.

**4. Testimonials:** 3 quote cards; oversized gold quotation glyph; italic Cormorant pull quote; five-star rating using `star` icons (apply the `FILL` font-variation) with `aria-label="Rated 5 out of 5 stars"`; reviewer name and role; CSS initials medallion as avatar (no external avatar images).

**5. Pricing — 3 Tiers:** "The Love Letter" / "The Grand Declaration" (featured) / "The Royal Commission". Featured card: gold border, glow, slight elevation, and a text badge "Most Beloved" (state must never rely on color alone). Feature lists with `check` icons; per-tier CTAs (featured = solid gold, others = outline).

**6. FAQ — Accordion:** 5–6 items (delivery, customization, wax seals, letter privacy, returns). Button + panel pattern with `aria-expanded`/`aria-controls` and `role="region"`; `expand_more` icon rotating 180°; CSS-animated open/close (e.g., `grid-template-rows: 0fr → 1fr` — no JS height measuring); fully keyboard operable; Esc closes. **No modals or popups exist on this page — do not introduce any.**

**7. Final CTA:** Full-width watercolor panel with ethereal glow and ornamental frame; Great Vibes headline; email-capture form implementing the complete input and button state systems (see 2.1 and 2.3): client-side validation, loading spinner, inline success/error messages inside an `aria-live="polite"` region. No `alert()`.

**8. Footer:** Brand + short blurb + social presence as elegant text links (Material Symbols has no brand logos — do not fake them with SVG); three secondary-link columns (Atelier / Assistance / Legal); copyright bar. Secondary links may use `href="#"`.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
- Every design property, layout rule, and state is applied through class or ID selectors only.
- HTML stays clean, semantic, and style-agnostic: re-theming the page must require editing CSS only, never markup.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` and override them in the dark theme:
- **Colors:** `--primary: #EBC97A` (gold), `--secondary: #FADADD`, `--bg-primary: #FDF6F0`, `--bg-secondary: #FEFEFE`, `--text-primary: #6B4C40`, `--text-secondary` (muted brown, e.g., `#7D6157`), `--text-success: #3F7B53`, `--text-error: #B23A48`, `--border-default: #EAD9CD`, `--border-error`, `--border-success`. Theme extras: `--gold-deep: #D4AF6A`, `--pastel-pink: #FADADD`, `--pastel-blue: #C6E2FF`, `--pastel-mint: #D0F0C0`.
- **Contrast pairing:** every light background token pairs with a dark text token and every dark background with a light text token — enforced in both themes. Gold `#EBC97A` must never be used as a text color on light backgrounds; in light mode gold is reserved for borders, ornaments, icon medallions, and button fills paired with `--text-primary` text. Gold text is permitted only on dark backgrounds.
- Every text/background pair must pass WCAG AA (4.5:1 body, 3:1 large text); adjust token values if verification fails.
- **Shape & depth:** `--radius-sm` (4px), `--radius-md` (12px), `--radius-lg` (24px), `--shadow-sm`, `--shadow-md` (warm-tinted, derived from `#6B4C40`).
- **Motion & space:** `--spacing-gap` (1.5rem), `--transition-fast` (150ms), `--transition-normal` (300ms), `--ease-standard` (cubic-bezier(0.4, 0, 0.2, 1)).
- **Layering:** `--z-dropdown` (100), `--z-modal` (1000), `--z-toast` (1100); the sticky header and mobile nav panel use the dropdown layer.

**1.3 Mandatory Dark Mode Support**
- **Exception:** Although the source style spec marked dark mode unsupported, it is mandatory here — implement a "Midnight Salon" palette that extends the Rococo mood: deep plum backgrounds (`--bg-primary: #2B2130`, `--bg-secondary: #372B3D`), cream text (`--text-primary: #F5EAE0`, `--text-secondary: #CBB9B0`), preserved gold `#EBC97A` (gold text permitted on dark), pastels used only as low-alpha washes and glows.
- Provide dark tokens via `@media (prefers-color-scheme: dark)` **and** a `.dark` class on `<html>`; the class wins when applied.
- **Persistence:** store the user's choice in `localStorage`, falling back to `prefers-color-scheme` on first visit. The header toggle shows `light_mode`/`dark_mode` Material Symbols with correct `aria-pressed` and `aria-label` state.
- Theme switching must happen entirely through variable overrides — zero HTML restructuring.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
- Mobile-first: feature, step, testimonial, pricing, and footer columns collapse to single columns on small viewports; nav links collapse behind the disclosure panel. No horizontal scrolling at any width from 320px up. Anchor navigation uses CSS smooth scrolling with `scroll-margin-top` offsets for the sticky header (disabled under `prefers-reduced-motion`).

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (via CDN) or clean custom CSS organized with `@layer`/`@apply` conventions — the deliverable must run with zero build steps. All utility classes must map back to the CSS variables or to generic reusable component classes (`.btn`, `.card`, `.input-group`); never hard-code hex values in utilities.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load Great Vibes, Cormorant Garamond (400–700 + italics), and Jost via Google Fonts `<link>` tags; bind them to `--font-display`, `--font-heading`, `--font-base`.
- Load the official Google Material Symbols (Rounded) stylesheet; every icon is a `<span class="material-symbols-rounded">icon_name</span>`.
- Inline SVGs, local icon files, and emoji-as-icons are forbidden.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component Requirements** — all states as CSS classes:
- **Default:** `.btn` uses `display: flex; align-items: center; justify-content: center; gap: 0.5rem;`, minimum touch target 44×44px, Jost label in letter-spaced uppercase. Variants: `.btn--primary` (gold fill + brown text), `.btn--ghost` (gold hairline border, theme text color), `.btn--danger` (defined and distinct in both themes even though this page triggers no destructive action).
- **Hover:** brightness/shadow shift with `cursor: pointer`.
- **Focus:** distinct ring via `outline` using `--gold-deep`, 2px offset — visible in both themes.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** disables interaction, prevents double-clicks, and renders a CSS spinner (rotating `progress` Material Symbol or border spinner) without distorting button dimensions.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`.

**2.2 Card Component Requirements:**
- **Default:** `.card` — flexible Flexbox layout, `--bg-secondary` surface, `--border-default` hairline, `--radius-lg`, `--shadow-sm`.
- **Hover:** elevation shift + `transform: translateY(-2px)`.
- **Focus-within:** gold border highlight when a child link/button receives focus.
- **Loading (skeleton):** `.card--loading` shimmer animation defined in CSS to prevent layout jumps.
- **Empty state:** `.card--empty` fallback layout with a Material Symbol and guidance text, defined in CSS.
- **Featured:** `.card--featured` for the highlighted pricing tier.

**2.3 Form & Input Requirements:**
- **Structure:** `.input-group` — flex container wrapping a `<label>`, the input field, and a dedicated error-feedback element.
- **States:** empty, focused (gold ring), filled, valid (success border + `check` icon), invalid (error border, `--text-error` message, `error` icon, `aria-invalid="true"`, `aria-describedby`), disabled, read-only — all as CSS classes.
- The Final CTA email form implements every state live; validation runs in `script.js` with inline messages in an `aria-live="polite"` region.

**2.4 FAQ Accordion Requirements:**
- **Structure:** `<button class="faq__trigger" aria-expanded="false" aria-controls="…">` + `<div class="faq__panel" role="region" aria-labelledby="…">`.
- **States:** collapsed, hover, focus-visible ring, expanded (icon rotates 180°, panel animates via CSS).
- **Keyboard:** Enter/Space toggle; Esc closes the open item; arrow keys move between triggers.
- **No modals/popups in this build** — the accordion is the only disclosure component.

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` typography and flexible widths; zero horizontal overflow from 320px up.
- **Smooth animations:** every state change transitions with `var(--transition-normal)`; all decorative loops (floating ornaments, shimmer, glow pulse) and transitions respect `prefers-reduced-motion: reduce`.
- **Accessibility (a11y):** AA contrast in both light and dark modes; never rely on color alone to communicate state (pair icons with text); semantic HTML5 landmarks (`header`, `nav`, `main`, `section[aria-labelledby]`, `footer`); exactly one `h1` with a logical heading hierarchy; a visually hidden skip-to-content link; logical DOM/focus order; full keyboard operability; `aria-live` regions for all dynamic feedback.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** none on this page, but `.btn--danger` must still be defined and visually distinct in both themes.

## 4. DELIVERABLE & OUTPUT FORMAT

- **File structure:** separate `index.html`, `style.css`, and `script.js`. The only script reference is a single `<script src="script.js" defer></script>` — no inline script blocks. (Google Fonts/Material Symbols and, if used, the Tailwind CDN are external `<link>`/`<script src>` references and permitted.)
- **Naming convention:** BEM (`block__element--modifier`) across the entire deliverable — e.g., `.hero__title`, `.card--featured`, `.faq__trigger`. Never mix conventions.
- **Copy:** all user-facing copy in English, fully written in the romantic editorial voice; lorem ipsum is forbidden. Placeholder imagery is allowed only for genuinely unsourceable artwork (cherubs/roses), via remote URLs with descriptive `alt` text and replacement comments.
- **JavaScript scope:** theme toggle + `localStorage` persistence; mobile nav disclosure; FAQ accordion; Final CTA validation with loading/success/error states (simulated async); optional reduced-motion-safe scroll reveals — content must be fully visible without JS.
- **Acceptance check — verify before output:** zero inline styles; every color, spacing, and motion value token-driven; dark mode complete with working toggle and persistence; all button, input, card, and accordion states styled; both themes pass contrast; the full page is delivered complete on the first attempt.
