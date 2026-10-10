# CODING PROMPT — "CERRADO MINIMALISTA" LANDING PAGE (Nature & Organic)

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete Landing Page on the first attempt. Follow every rule in this specification without exception. Deliver the full, runnable code in a single response.

**Project Brief:** Build a single-page landing site themed **Cerrado Minimalista** — an organic, minimal, warm, natural aesthetic inspired by the Brazilian Cerrado savanna: golden grass, red earth, dry green vegetation, sparse organic forms, and a sustainable eco mood. Output category: **Nature & Organic**. Choose one coherent fictional brand concept (e.g., a sustainable lifestyle brand, conscious Cerrado tourism, or a savanna-restoration subscription) and write realistic English marketing copy for it.

**Required page structure, in this exact order:**
1. Global sticky header (brand mark, anchor nav, theme toggle, mobile menu button)
2. Hero
3. Features — exactly 3 cards
4. How It Works — exactly 3 steps
5. Testimonials
6. Pricing — exactly 3 tiers
7. FAQ — accordion
8. Final CTA — full-width conversion band
9. Footer — secondary link columns + newsletter signup

---

## DESIGN DIRECTION — CERRADO MINIMALISTA

**Palette (map to tokens):**

| Token | Name | Hex |
|---|---|---|
| `--primary` | Cerrado Gold | `#C8A951` |
| `--secondary` | Terracotta | `#CC5533` |
| `--accent-sand` | Sand Beige | `#E8D5B7` |
| `--accent-green` | Dry Green | `#7A8B5C` |
| `--text-primary` | Earth Brown | `#6B4226` |
| `--text-secondary` | Stone Gray | `#8B8680` |
| `--bg-primary` | Cotton White | `#FAF7F2` |
| `--accent-sky` | Dry Sky Blue | `#87CEEB` (sparingly, e.g., hero sky) |

**Typography:** Body — `'DM Sans', 'Nunito Sans', sans-serif` bound to `--font-base`. Accents/headings — `'Libre Baskerville', serif` bound to `--font-accent`. Load via Google Fonts `<link>` tags.

**Signature visual effects (all CSS-only, no external image files):**
- **Generous spacing:** `padding: 5rem 0` per section, evoking the vastness of the savanna; content container `max-width: 1100px`.
- **Organic irregular borders:** `border-radius: 8px 16px 8px 16px` (token: `--radius-organic`) on cards, buttons, inputs, images, and decorative shapes.
- **Soft earthy elevation:** `box-shadow: 0 4px 16px rgba(107,66,38,0.08)` as `--shadow-md`.
- **Recycled-paper texture:** subtle grain on `--bg-primary` generated in CSS (layered gradients or a data-URI noise filter embedded in the stylesheet — this background texture is the sole permitted non-icon SVG usage).
- **Dry grass elements:** decorative grass blades built from `div`s with organic border-radius and gradient fills, animated with `@keyframes sway` (`animation: sway 8s ease-in-out infinite`), staggered `animation-delay`, `transform-origin: bottom`.
- **Subtle asymmetry:** offset hero art, staggered card offsets (desktop only, via `nth-child` transforms) — never breaking reading order, focus order, or the alignment grid.
- **Breeze-like micro-animations:** gentle fade-up entrance reveals and sway motion throughout.

**Section-by-section specs:**
- **Hero:** asymmetric flex row — text column (~55%) beside a CSS-composed savanna illustration (~45%): Dry Sky Blue gradient sky disc, gold sun, layered red-earth mounds, and swaying `.grass` blades. Eyebrow badge, H1 with one serif accent word in Terracotta, supporting paragraph, primary CTA + ghost secondary CTA, trust microcopy.
- **Features:** heading + intro, then 3 `.card`s in a responsive grid (3 → 1 columns). Each card: Material Symbol inside an organic icon chip (sand background, green/gold icon), title, description. Staggered vertical offsets on desktop.
- **How It Works:** 3 steps with numbered organic badges (`01`/`02`/`03` in Libre Baskerville), a connecting dashed line on desktop (CSS pseudo-element, hidden on mobile), each step with icon, title, text.
- **Testimonials:** 3 `.card`s — quote Material Symbol, italic serif quote, avatar circle with CSS-gradient background and initials (no external images), name, role. Staggered offsets.
- **Pricing:** 3 tiers with organic names (e.g., Sprout / Bloom / Canopy); middle tier `.card--featured` with gold border, "Most Popular" badge, and elevated shadow; each tier: name, price, billing period, feature list with check Material Symbols, CTA button (featured = primary, others = secondary).
- **FAQ:** 5–6 realistic questions about the brand concept, built as an accessible accordion (see 2.4).
- **Final CTA:** full-width band using `--secondary` background with light text (correct contrast pairing); inverted CTA button (`--bg-primary` background, Earth Brown text).
- **Footer:** brand block + tagline, 2–3 secondary link columns (real labels; anchor to page sections where applicable, `href="#"` otherwise), newsletter signup (see 2.3), bottom bar with copyright and social icon links (Material Symbols).

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- **No Inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID Selectors Only:** all design properties, layout rules, and states live in `style.css`, targeted via class or ID selectors.
- **Minimal HTML Modifications:** markup stays clean, semantic (HTML5 landmarks: `header`, `nav`, `main`, `section`, `article`, `footer`), and agnostic of visual styling — changing the look must require editing only the CSS file.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Store all tokens in `:root`:
- **Colors:** `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary` (light: a sand tint such as `#F3E9D6`), `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, plus the palette extras from the Design Direction and `--text-on-primary` / `--text-on-secondary` for text placed on colored backgrounds.
- **Contrast Pairing:** every light background token pairs with dark Earth Brown text; every dark background token pairs with light Cotton/Sand text — enforced in every theme, not just the default. Choose success/error hues that pass WCAG AA in both modes and remain distinct from Terracotta.
- **Light Mode Background:** `#FAF7F2` (Cotton White) with the paper grain — never pure white; use `#fefefe` if a near-white panel is needed.
- **Border Radius & Shadows:** `--radius-sm: 8px`, `--radius-md: 16px`, `--radius-lg`, `--radius-organic: 8px 16px 8px 16px`, `--shadow-sm`, `--shadow-md: 0 4px 16px rgba(107,66,38,0.08)`.
- **Spacing & Transitions:** `--spacing-gap`, `--section-padding: 5rem 0`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- **Elevation/Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast` to prevent overlap conflicts (header, mobile menu, any overlay).

**1.3 Mandatory Dark Mode Support**
- **Exception clause:** the source specification requested light-mode-only; dark mode is nonetheless mandatory — implement it as a "Dry Night Savanna" variant: deep earth-brown backgrounds (`#241A12` primary, `#2E2118` secondary), light sand/cotton text, gold accents preserved, and Terracotta lightened (e.g., `#E07B57`) to maintain contrast.
- **Implementation:** dark tokens defined under both `@media (prefers-color-scheme: dark)` and a `.dark` class selector; background and text variables switch seamlessly with no HTML restructuring.
- **Persistence:** user choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit; a visible toggle (sun/moon Material Symbols) carries correct `aria-pressed` and `aria-label` state and announces the change via an `aria-live` region.

**1.4 Flexbox Layout & Mobile-First Alignment**
- **Default Alignment Rule:** every flex container defaults to `align-items: center` unless an explicitly justified exception exists.
- **Mobile-Friendly First:** all flex layouts are responsive out of the box — rows collapse to columns on smaller viewports; zero horizontal scrolling from 320px up.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS, or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives. All utility classes must map back to CSS variables or generic reusable class names: `.container`, `.section`, `.btn`, `.card`, `.input-group`, `.accordion`, `.grass`, `.badge`.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- **Text:** Google Fonts `<link>` tags for DM Sans (400/500/700), Nunito Sans (fallback), and Libre Baskerville (400/700 + italic), bound to `--font-base` and `--font-accent`.
- **Icons:** Google Material Symbols (Rounded style) only. Raw inline SVGs and local icon files are explicitly forbidden — the single exception is the CSS-embedded paper-grain texture noted in the Design Direction, which is a background, never an icon.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component Requirements**
Style all states via CSS classes (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.btn--danger`):
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, organic radius.
- **Hover:** brightness/shadow shift with `cursor: pointer`.
- **Focus:** distinct focus ring via `outline` / `box-shadow` using CSS variables, visible in both themes.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** `.is-loading` disables interaction, prevents double-clicks, and renders a CSS spinner (border-based) without distorting button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error` (e.g., newsletter submit).
- Primary CTA = Cerrado Gold background with deep-earth text; secondary = Terracotta; `.btn--danger` visually distinct in both themes.

**2.2 Card Component Requirements**
Applies to Features, Testimonials, and Pricing cards:
- **Default:** flexible flexbox layout with subtle borders and elevation using `--bg-secondary` and CSS variables.
- **Hover:** shadow shift to `--shadow-md` plus subtle `transform: translateY(-2px)`.
- **Focus-within:** card borders highlight when a child link/button receives focus.
- **Loading (Skeleton):** shimmer animation class defined in CSS, causing no layout jumps.
- **Empty State:** structured fallback pattern with a Google Icon and clear guidance text (define the CSS pattern even if unused).

**2.3 Form & Input Requirements**
Applies to the footer newsletter signup:
- **States:** empty, focused (outline ring), filled, valid (success border + check icon), invalid (error border, error text, error icon), disabled, read-only.
- **Structure:** flex `.input-group` wrapping a `<label>`, the `<input>`, and a dedicated error feedback element wired via `aria-describedby` and an `aria-live="polite"` region.
- **Behavior:** validate the email on submit; show inline errors; on success, show a success state with `aria-live` confirmation while the button passes through the loading state.

**2.4 FAQ Accordion (Disclosure Widget)**
- Build with styled native `<details>/<summary>` or a button + region pattern carrying `aria-expanded` / `aria-controls`.
- Fully keyboard operable with visible focus; animated open/close via CSS transitions; chevron Material Symbol rotates on toggle.
- State changes must be communicated by more than color (icon rotation + height change).

**2.5 Modal / Popup Requirements (conditional)**
Only if you introduce any overlay: opening, open, loading, success/error, and closing states animated via CSS transitions; centered flex container (`align-items: center`); backdrop overlay; Google Icon close button; keyboard focus trapping; close via `Esc` or overlay click; `role="dialog"` and `aria-modal="true"`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** fluid sizing (`clamp()` for type) and breakpoints with no horizontal overflow at any viewport width.
- **Smooth Animations:** `transition: var(--transition-normal)` on all state changes; grass sway at `8s ease-in-out infinite` with staggered delays; entrance reveals via fade-up. **Respect `prefers-reduced-motion`** — disable sway, transforms, and smooth scrolling; retain only color/opacity transitions.
- **Accessibility (a11y):** WCAG AA contrast in both Light and Dark modes; never rely solely on color to communicate state; semantic HTML5 elements; correct ARIA roles/labels on custom widgets (accordion, toggle, mobile menu); logical DOM/focus order; full keyboard operability; a skip-to-content link; `aria-live` regions for dynamic feedback (form errors, theme toggle, FAQ).
- **Mandatory Visual Feedback:** every click, hover, or submission triggers a visible state change.
- **Destructive Actions:** any destructive control uses `.btn--danger` and is visually distinct in both light and dark themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer></script>`). `script.js` handles only: theme toggle + persistence, mobile menu, accordion behavior, newsletter validation/submit simulation, and optional IntersectionObserver reveals.
- **Naming Convention:** BEM throughout (`.card`, `.card__title`, `.card--featured`) — never mix conventions.
- **Copy:** all user-facing copy written in **English** — realistic, on-theme marketing copy for the chosen brand concept (the brand name may retain a light Portuguese flavor as a proper noun, e.g., "Raiz do Cerrado"); no lorem ipsum anywhere.
- **No Unrequested Placeholders:** every heading, label, button, testimonial, FAQ entry, and pricing feature must be real, coherent copy; `href="#"` is acceptable only for links with no in-page target.
- **Visuals:** all imagery is CSS-composed (gradients, organic shapes, Material Symbols, initials avatars) — no external image files.
- **Output:** the complete, runnable code for all three files in one response, on the first attempt.
