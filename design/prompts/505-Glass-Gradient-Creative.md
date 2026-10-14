**ROLE & MISSION**

You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready landing page in a single first attempt. The theme is **Glass Gradient Creative** (2020s Glassmorphism Creative era). All user-facing copy, labels, and content must be written in **English**. Do not ask clarifying questions — deliver the finished code.

---

## 0. PROJECT BRIEF & THEME SPECIFICATION

**0.1 Theme Definition**
- **Name:** Glass Gradient Creative
- **Type:** General-purpose landing page
- **Keywords (translated):** glassmorphism, vertical gradient, glass columns, magenta glow, elegant centered typography, minimal layout, fullscreen hero
- **Light/Dark:** The source theme is marked "Partial," but **full dark mode support is mandatory regardless** — implement complete light and dark token sets.

**0.2 Color Palette**
- **Primary:** Soft White `#FDFDFD`, Neon Magenta `#FF00C3`, Intense Purple `#7000FF`
- **Secondary:** Light Gray `#E3E3E3`, Pink `#FF0080`, Light Purple `#C38CFF`

**0.3 Visual Effects & Direction**
- Fullscreen hero with a vertical white-to-magenta gradient background; overlapping blurred triangular shapes in purple and pink; tall glass columns (blur + light border); soft shadows; magenta glow at the base; a refined serif headline and subheadline centered in white; a prominent CTA button over the glowing gradient base.
- Decorative triangles must be CSS-only (`clip-path` polygons with `filter: blur()`), absolutely positioned, `aria-hidden="true"`, `pointer-events: none`, and contained inside an `overflow: hidden` hero so they never cause horizontal scroll.
- Implement this baseline (via classes/tokens only — never inline styles): `border-radius: 18px; box-shadow: 0 28px 80px rgba(0,0,0,0.35); background: linear-gradient(to bottom, #FDFDFD 0%, #FF00C3 75%, #7000FF 100%); backdrop-filter: blur(30px); border: 1px solid rgba(255,255,255,0.45);`

**0.4 Required Sections (in this order)**
1. **Sticky glass nav** — brand wordmark (serif), anchor links, primary CTA, and the mandatory theme toggle.
2. **Hero** — fullscreen gradient, blurred triangles, three tall glass columns behind the content, centered serif headline + subheadline in white, prominent CTA, magenta glow at the base.
3. **Features** — 3 glass cards, each with a Google icon, title, and copy.
4. **How It Works** — 3 numbered steps with a CSS connector line between them.
5. **Testimonials** — 3 cards: quote, author name, role, and rating (Material star icons plus a text/ARIA rating — never color alone).
6. **Pricing** — 3 tiers; the middle tier is featured (badge + magenta glow border); each tier has a CTA button demonstrating full button states.
7. **FAQ** — accessible accordion with 5–6 Q/A items.
8. **Final CTA** — headline, subcopy, and an email capture form (full form-state spec).
9. **Footer** — secondary links (About, Privacy, Terms, Contact, socials as labeled Material icons), brand, copyright.

Invent one coherent fictional brand (e.g., a creative design platform) and write real, polished English marketing copy for every section. Lorem ipsum is prohibited.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
- **Minimal HTML Modifications:** Keep markup semantic and styling-agnostic — changing the site's look must require editing only `style.css`.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` and the `.dark` theme class. Required baseline values (you may fine-tune hues only if contrast pairing stays valid):

```css
:root {
  --primary: #FF00C3;  --secondary: #7000FF;
  --accent-pink: #FF0080;  --accent-purple-light: #C38CFF;
  --bg-primary: #FDFDFD;  --bg-secondary: #F5F1FB;
  --text-primary: #1A0B2E;  --text-secondary: #5D5470;
  --text-on-accent: #FDFDFD;  --text-success: #0E8A5F;  --text-error: #C4004F;
  --border-default: rgba(26,11,46,0.14);  --border-error: #C4004F;  --border-success: #0E8A5F;
  --hero-gradient: linear-gradient(to bottom, #FDFDFD 0%, #FF00C3 75%, #7000FF 100%);
  --glass-bg: rgba(255,255,255,0.16);  --glass-border: rgba(255,255,255,0.45);  --glass-blur: 30px;
  --glow: radial-gradient(ellipse at center, rgba(255,0,195,0.45), transparent 70%);
  --radius-sm: 10px; --radius-md: 14px; --radius-lg: 18px;
  --shadow-sm: 0 8px 24px rgba(0,0,0,0.12);  --shadow-md: 0 28px 80px rgba(0,0,0,0.35);
  --shadow-glow: 0 18px 60px rgba(255,0,195,0.35);
  --spacing-gap: clamp(1.25rem, 3vw, 2rem);
  --transition-fast: 150ms; --transition-normal: 300ms; --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;
}
```

- **Contrast Pairing:** Every light background token pairs with a dark text token and vice versa — enforce this in both themes.
- **Dark tokens (`.dark`):** `--bg-primary: #120722; --bg-secondary: #1D1035; --text-primary: #FDFDFD; --text-secondary: #BCA9DC; --secondary: #A66BFF; --text-success: #3DD68C; --text-error: #FF5C8A; --border-default: rgba(255,255,255,0.16); --border-error: #FF5C8A; --border-success: #3DD68C; --hero-gradient: linear-gradient(to bottom, #1A0B2E 0%, #5C0A57 70%, #7000FF 100%); --glass-bg: rgba(255,255,255,0.07); --glass-border: rgba(255,255,255,0.18); --shadow-md: 0 28px 80px rgba(0,0,0,0.55);` Keep `--primary: #FF00C3` (it passes on dark backgrounds).
- **Light backgrounds:** Never use pure `#ffffff`; the theme's soft white `#FDFDFD` is the light base.

**1.3 Mandatory Dark Mode Support**
- Define dark tokens under a `.dark` class **and** `@media (prefers-color-scheme: dark)` as the no-preference fallback; switching themes must require zero HTML restructuring.
- Provide a visible toggle (sun/moon Material icons) in the nav with correct `aria-pressed` and `aria-label` states.
- Persist the choice via `localStorage`; fall back to `prefers-color-scheme` on first visit. Theme initialization must be the first statements of the deferred `script.js`.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox; every flex container must default to `align-items: center` unless an exception is explicitly justified in a code comment.
- All flex layouts must be responsive out of the box: rows collapse to columns below ~768px, use `flex-wrap` where appropriate, and horizontal scrolling is forbidden (test at 320px).
- Center page content with a max-width (~1200px) flex container.

**1.5 Framework Default**
- Use clean custom CSS in `style.css`, organized with `@layer` (tokens, base, components, utilities) in the spirit of Tailwind's architecture. All reusable classes (`.btn`, `.card`, `.input-group`) must map back to the CSS variables above.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load **Playfair Display** (500–700) via Google Fonts for the serif display type, bound to `--font-display`; load **Inter** (400–700) bound to `--font-base`.
- Use **Google Material Symbols (Outlined)** for every icon. Inline SVGs, local icon files, and emoji-as-icons are forbidden.
- Hero headline/subheadline in white must sit over the saturated (magenta/purple) zone of the gradient; if the text area overlaps the pale zone, add a scoped scrim `rgba(26,11,46,0.3)` behind the hero text block. Headline ≥ 3rem, subheadline ≥ 1.25rem to satisfy large-text contrast (≥ 3:1); all body-size white text requires ≥ 4.5:1.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
Style all states via CSS classes. Default: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` with a minimum 44×44px touch target.
- **Variants:** `.btn--primary` (gradient `#FF0080 → #7000FF`, white label ≥ 1.125rem/700 for large-text contrast), `.btn--glass` (glass tokens + blur), `.btn--danger` (visually distinct in both themes).
- **Hover:** brightness/shadow shift plus `--shadow-glow`, `cursor: pointer`.
- **Focus:** distinct focus ring via `outline`/`box-shadow` using CSS variables, visible against the gradient.
- **Active:** `transform: scale(0.97)`.
- **Loading:** `.is-loading` class — disables interaction, sets `aria-busy="true"`, prevents double-clicks, and renders an animated (spinning) Google icon without changing button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`, `aria-disabled="true"`.
- **Success/Error:** temporary feedback styles driven by `--text-success`/`--text-error`, announced via an `aria-live` region. Pricing CTAs must demonstrate the loading state on click.

**2.2 Card Component**
- **Default:** Flexbox layout, glass styling via `--glass-bg`, `--glass-blur`, `--glass-border`, `--radius-lg`, `--shadow-md` on `--bg-secondary`-based surfaces.
- **Hover:** `transform: translateY(-2px)` and shadow/glow shift (mandatory on interactive cards such as pricing).
- **Focus-within:** card borders highlight (`--primary`) when a child link/button receives focus.
- **Loading (Skeleton):** define a `.card--skeleton` shimmer keyframe animation in CSS that preserves dimensions.
- **Empty State:** define a `.card--empty` fallback layout with a Google icon and guidance text.

**2.3 Form & Input Requirements**
The Final CTA email capture uses an `.input-group` flex container wrapping a `<label>`, the input, and a dedicated error container.
- **States:** empty, focused (outline ring via variables), filled, valid (`--border-success` + check icon), invalid (`--border-error`, red text via `--text-error`, error icon), disabled, read-only.
- **Behavior:** validate email format in `script.js`; on submit show a button success state plus inline confirmation text, both announced through `aria-live="polite"` and `aria-describedby`. Never rely on color alone — pair every state with an icon and/or text.

**2.4 Modal / Popup Requirements**
No modal is required for this page — the FAQ must be an accordion, not popups. If you introduce any modal for any reason, it must be: a centered fixed flex overlay with blurred backdrop, animated open/close via CSS transitions, a Material icon close button, closable via `Esc` and overlay click, focus-trapped with focus return, `role="dialog"` + `aria-modal`, and layered at `--z-modal`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** fluid `clamp()` typography, breakpoints without horizontal overflow; decorative shapes are fully contained.
- **Smooth Animations:** apply `transition: var(--transition-normal)` to all state changes; fully respect `prefers-reduced-motion` (disable triangle float, reveals, and scale transforms).
- **Accessibility (a11y):** semantic HTML5 landmarks (`header`, `main`, `section`, `footer`), a single `h1` with logical heading order, a skip-to-content link, full keyboard operability (nav menu, toggle, accordion, form), visible `:focus-visible` styles everywhere, `aria-expanded`/`aria-controls` on the accordion and mobile menu, sufficient AA contrast in both modes, and `aria-live` regions for dynamic feedback. Mobile menu toggles a glass dropdown at `--z-dropdown` with a Material hamburger icon.
- **Mandatory Visual Feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive Actions:** `.btn--danger` must remain visually distinct in both light and dark themes.
- **Progressive Enhancement:** content is fully visible without JavaScript; reveal-on-scroll (optional, via IntersectionObserver) must never permanently hide content.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** three separate files — `index.html`, `style.css`, `script.js`. Exactly one `<script>` tag (`<script src="script.js" defer></script>`); no inline `<script>` blocks beyond that entry point and no inline styles.
- **Naming Convention:** BEM exclusively (`hero__title`, `glass-card`, `glass-card--featured`, `btn--primary`, `input-group__error`); never mix conventions.
- **No Unrequested Placeholders:** all copy must be real, brand-appropriate English text; placeholders are allowed only where content was genuinely left unspecified.
- **First-Attempt Completeness:** ship all nine sections fully styled, both themes working, all component states implemented — nothing marked as TODO.
