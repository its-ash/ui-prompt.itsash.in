# CODING-AGENT PROMPT — "TOGETHER PASTEL CLOUD" LANDING PAGE

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce the complete, production-ready landing page on the first attempt — full `index.html`, `style.css`, and `script.js`. Do not ask clarifying questions. Where copy is unspecified, write confident, on-theme **English** copy (never lorem ipsum, never placeholder Latin).

**Project:** Marketing landing page for "Together" — a fictional AI infrastructure cloud (deploy, scale, and serve frontier models).
**Design System:** "Together Pastel Cloud" — output category: **Glass & Soft UI**.
**Era / Mood:** 2024–2026 AI Infrastructure Cloud.

**Required sections, in this exact order:**
1. Sticky Header (nav + theme toggle)
2. Hero (with enterprise stats: **2x, 60%, 90%**)
3. Features — 3 cards
4. How It Works — 3 steps (dark section)
5. Testimonials
6. Pricing — 3 tiers (with billing toggle)
7. FAQ (accordion)
8. Final CTA (dark section, email capture)
9. Footer with secondary link columns

---

## 0. THEME DIRECTION — "TOGETHER PASTEL CLOUD"

**Visual pillars (non-negotiable):**

- **Pastel gradient canvas:** soft pink / blue / lavender radial gradients floating over a near-white canvas in light mode; the same hues glow at reduced opacity over midnight blue in dark mode.
- **Midnight blue, never gray-black:** every dark surface is `#010120` (or a lifted variant in dark mode). No `#111`, `#1a1a1a`, or neutral grays anywhere.
- **Sharp geometry:** 4px radius for badges, chips, and segmented-control thumbs; 8px radius for buttons, cards, inputs, and containers. Never exceed 8px radius on any UI control.
- **Monospace technical labels:** all eyebrows, micro-labels, stat labels, and footer meta use the mono font, uppercase, 11–12px, positive tracking (+0.08em to +0.12em).
- **Negative tracking display type:** all sans-serif text uses negative letter-spacing, scaling from −0.16px (small text) to −1.92px (64px display headlines).
- **Enterprise stats:** "2x", "60%", "90%" rendered as large, tight-tracked numerals with mono uppercase labels — visually prominent in the Hero.
- **Blue-tinted shadows:** all elevation uses the `rgba(1,1,32,0.1)` family — never neutral black shadows.
- **Magenta & orange are illustration-only:** `#ef2cc1` and `#fc4c02` may appear only inside gradient illustrations, decorative orbs, and accent shapes — never as text, link, border, or button colors.
- **Glass on dark:** glassmorphic fills `rgba(255,255,255,0.12)` + `backdrop-filter: blur()` for buttons, cards, and inputs sitting on midnight surfaces (in both themes).

**Source palette (translated from spec):** White `#ffffff`, Black `#000000`, Midnight Blue `#010120`, Magenta `#ef2cc1`, Orange `#fc4c02`, Lavender `#bdbbff`, Glass `rgba(255,255,255,0.12)`, Border `rgba(0,0,0,0.08)`.

**Reference hero gradient mesh (adapt as needed):**

```css
.hero__canvas {
  background:
    radial-gradient(40rem 40rem at 12% 8%, var(--pastel-pink), transparent 60%),
    radial-gradient(36rem 36rem at 88% 18%, var(--pastel-blue), transparent 60%),
    radial-gradient(44rem 44rem at 55% 95%, var(--pastel-lavender), transparent 65%);
}
```

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS

- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML. Zero exceptions.
- **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
- **Minimal HTML Modifications:** HTML must remain clean, semantic, and styling-agnostic. Changing the site's look must require editing only `style.css`, never the markup.

### 1.2 CSS Variables & Theme Tokens

Store every visual token in `:root` and theme overrides. All required tokens below **must** exist:

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--bg-primary` | `#fefefe` | `#010120` | Page canvas |
| `--bg-secondary` | `#f7f7fc` | `#06062e` | Alternate bands, soft card fills |
| `--bg-midnight` | `#010120` | `#06062e` | Inherently dark sections (Hero CTA band, How It Works, Final CTA, Footer) |
| `--text-primary` | `#010120` | `#ffffff` | Headings, body |
| `--text-secondary` | `rgba(1,1,32,0.64)` | `rgba(255,255,255,0.72)` | Supporting copy |
| `--text-on-dark` | `#ffffff` | `#ffffff` | Text on midnight sections |
| `--text-on-dark-secondary` | `rgba(255,255,255,0.72)` | `rgba(255,255,255,0.72)` | Supporting text on midnight sections |
| `--primary` | `#010120` | `#ffffff` | Primary button fill |
| `--on-primary` | `#ffffff` | `#010120` | Text on primary buttons |
| `--secondary` | `#bdbbff` | `#bdbbff` | Lavender accents, badges (decorative on light; readable text only on midnight) |
| `--text-success` | `#0f8a4d` | `#4ade80` | Success feedback |
| `--text-error` | `#d92d43` | `#ff8a9a` | Error feedback |
| `--border-default` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.12)` | Hairlines, card borders |
| `--border-success` | `rgba(15,138,77,0.4)` | `rgba(74,222,128,0.4)` | Valid input borders |
| `--border-error` | `rgba(217,45,67,0.4)` | `rgba(255,138,154,0.4)` | Invalid input borders |
| `--glass` | `rgba(255,255,255,0.12)` | `rgba(255,255,255,0.12)` | Glass fills (dark surfaces only) |
| `--glass-border` | `rgba(255,255,255,0.2)` | `rgba(255,255,255,0.2)` | Glass edges |
| `--accent-magenta` | `#ef2cc1` | `#ef2cc1` | **Illustrations only** |
| `--accent-orange` | `#fc4c02` | `#fc4c02` | **Illustrations only** |
| `--pastel-pink` | `#ffd7ec` | `#ffd7ec` | Gradient orbs |
| `--pastel-blue` | `#d7e6ff` | `#d7e6ff` | Gradient orbs |
| `--pastel-lavender` | `#e5e3ff` | `#e5e3ff` | Gradient orbs |
| `--focus-ring` | `#010120` | `#ffffff` | Keyboard focus outlines |

- **Geometry tokens:** `--radius-sm: 4px` (badges, chips, segmented thumbs), `--radius-md: 8px` (buttons, cards, inputs, containers), `--radius-lg: 16px` (decorative gradient orbs and illustration shapes only — never on UI controls).
- **Shadows (blue-tinted):** `--shadow-sm: 0 2px 6px rgba(1,1,32,0.06)`, `--shadow-md: 0 4px 10px rgba(1,1,32,0.1)`, `--shadow-lg: 0 12px 32px rgba(1,1,32,0.14)`. In dark mode, deepen to `rgba(0,0,0,0.4)`-family values.
- **Spacing & motion:** `--spacing-gap: 1.5rem`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
- **Stacking:** `--z-header: 900`, `--z-dropdown: 1000`, `--z-modal: 1100`, `--z-toast: 1200` (define all, even if unused, to prevent future overlap conflicts).
- **Typography tokens:** `--font-display`, `--font-base` (Space Grotesk), `--font-mono` (JetBrains Mono); tracking scale `--tracking-xs: -0.16px`, `--tracking-sm: -0.32px`, `--tracking-md: -0.64px`, `--tracking-lg: -1.28px`, `--tracking-xl: -1.92px`.
- **Contrast Pairing:** Every light background token pairs with a dark text token and every dark background token pairs with a light text token — enforced in both themes. Lavender `#bdbbff` is decorative-only on light backgrounds (insufficient contrast) but may be used as text/accent color on midnight surfaces.
- **No pure white backgrounds:** The light canvas is `#fefefe`, never `#ffffff`. `#ffffff` is permitted only as text color on dark surfaces.

### 1.3 Mandatory Dark Mode Support

- **Implementation:** Define light tokens in `:root`, then apply dark tokens via both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`. Use this exact cascade so explicit user choice always wins over system preference: `:root { light }` → `.dark { dark }` → `@media (prefers-color-scheme: dark) { :root:not(.light) { dark } }`. Also support a `.light` forcing class. Set `color-scheme: light dark` appropriately so native controls match.
- **Theme Switching:** Background and text variables must flip seamlessly with zero HTML restructuring. Inherently dark sections stay midnight in both themes — in dark mode they adopt `--bg-secondary` (`#06062e`) and/or a `rgba(255,255,255,0.08)` top border so they remain visually distinct from the page canvas. Pastel orbs remain in dark mode at reduced opacity (0.35–0.5) as glows.
- **Persistence:** Store the user's choice in `localStorage` (key `theme`), falling back to `prefers-color-scheme` on first visit. The header must contain a visible toggle button with correct `aria-pressed` state, a dynamic `aria-label` ("Switch to dark theme" / "Switch to light theme"), and Material Symbols `dark_mode` / `light_mode` icons.

### 1.4 Flexbox Layout & Mobile-First Alignment

- **Default Alignment Rule:** Every flex container defaults to `align-items: center` unless an explicitly justified exception is documented (the only permitted exceptions: card/accordion internal text columns use `align-items: flex-start` for editorial text alignment).
- **Mobile-Friendly First:** Author base styles for mobile, then enhance at `min-width: 640px / 768px / 1024px / 1280px`. Multi-column rows (hero, feature grid, pricing) collapse to single columns on small viewports. Prevent horizontal scrolling everywhere (`overflow-x: clip` on `body`; decorative orbs must never force overflow). Use a `.container` wrapper: `max-width: 1200px`, `margin-inline: auto`, `padding-inline: 1.5rem`.

### 1.5 Framework Default & CSS Strategy

- Use **clean custom CSS** (the permitted alternative to Tailwind for this fully token-driven design system), organized with native `@layer` cascade layers in this order: `tokens`, `base`, `layout`, `components`, `utilities`. Do not load Tailwind, Bootstrap, or any other CSS/JS framework or CDN — the only external resources allowed are Google Fonts and Google Material Symbols stylesheets.
- All utility/layout classes (`.container`, `.grid-3`, `.flex-center`, `.section`) must map back to CSS variables or generic reusable component names (`.btn`, `.card`, `.input-group`).

### 1.6 Typography & Icons (Google Fonts Mandatory)

- **Text:** Load Google Fonts via `<link>` with `preconnect`: **Space Grotesk** (400, 500, 600, 700) for display and body, bound to `--font-base` / `--font-display`; **JetBrains Mono** (400, 500, 600) bound to `--font-mono`.
- **Exception clause:** The spec fonts 'The Future' and 'PP Neue Montreal Mono' are not distributed on Google Fonts; per the mandatory Google Fonts rule, substitute the closest equivalents — Space Grotesk and JetBrains Mono — and apply the specified negative tracking scale to preserve the intended typographic character.
- **Tracking scale (mandatory):** body 16–18px → −0.32px; small 12–14px → −0.16px; H3 24–28px → −0.64px; H2 40–48px → −1.28px; H1/display 56–64px → −1.92px. Mono labels are uppercase with +0.08em to +0.12em tracking.
- **Icons:** Use Google Material Symbols (**Rounded** variant) via the Google Fonts stylesheet. Render as `<span class="material-symbols-rounded" aria-hidden="true">icon_name</span>` with `font-variation-settings` defined in CSS. **Raw inline SVGs, emoji icons, and local icon files are forbidden.**

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component Requirements

Style all states via CSS classes on a `.btn` base:

- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, `padding: 0.75rem 1.5rem`, `border-radius: var(--radius-md)`, `font-weight: 500`, `transition: var(--transition-normal)`.
- **Variants:** `.btn--primary` (fill `--primary`, text `--on-primary`), `.btn--ghost` (transparent, 1px `--border-default`, text `--text-primary`), `.btn--glass` (for dark/midnight surfaces: `--glass` fill, `--glass-border`, `backdrop-filter: blur(14px)`, white text).
- **Hover:** brightness/elevation shift with `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring using `--focus-ring` (2px outline, 2px offset) for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** disables pointer events to prevent double-clicks, sets `aria-busy="true"`, and renders a CSS spinner (animated border circle) or rotating Material `progress_activity` icon without changing button dimensions.
- **Disabled (`[disabled]`):** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error (`.is-success` / `.is-error`):** temporary feedback styling driven by `--text-success` / `--text-error`, paired with an icon and an `aria-live` announcement — never color alone.
- No destructive actions exist on this page; do not add any.

### 2.2 Card Component Requirements

- **Default:** flexible flexbox column (documented `align-items: flex-start` exception for text), `--bg-secondary` or `#fefefe` fill, 1px `--border-default`, `border-radius: var(--radius-md)`, `--shadow-sm`, generous padding.
- **Glass variant (`.card--glass`):** for midnight sections — `--glass` fill, `--glass-border`, `backdrop-filter: blur(14px)`. Include an `@supports not (backdrop-filter: blur(1px))` fallback that raises fill opacity to `rgba(255,255,255,0.18)`.
- **Hover (interactive cards):** `transform: translateY(-2px)` plus shift from `--shadow-sm` to `--shadow-md`.
- **Focus-within:** card border highlights (lavender on dark, midnight on light) when a child link/button receives focus.
- **Loading (Skeleton):** define a `.skeleton` class with a shimmer `@keyframes` animation in CSS (for future dynamic content); do not apply it to static content.
- **Empty State:** not applicable to this page — do not fabricate one.

### 2.3 Form & Input Requirements (Final CTA email capture)

- **Structure:** `.input-group` flex container wrapping a `<label>`, the input, and a dedicated error feedback element (`<p>` with `aria-live="polite"`).
- **States:** empty, focused (outline ring via `--focus-ring`), filled, valid (success border + check icon), invalid (error border, `--text-error` message + error icon), disabled. Style each via classes/attributes — never inline.
- **Glass variant (`.input--glass`):** on the midnight Final CTA — `--glass` fill, `--glass-border`, blur, white text, 8px radius, placeholder `rgba(255,255,255,0.5)`.
- **Validation:** client-side only (email regex, on blur and on submit); all messages in English.

### 2.4 FAQ Accordion Requirements (in place of a modal)

- **No modals, popups, or dialogs anywhere on this page — do not add them.**
- **Structure:** each item is `<h3><button class="faq-item__trigger" aria-expanded="false" aria-controls="faq-panel-N">Question <span class="material-symbols-rounded">expand_more</span></button></h3>` followed by `<div class="faq-item__panel" id="faq-panel-N" role="region">Answer</div>`.
- **States:** closed → open animated via CSS (`grid-template-rows: 0fr → 1fr` technique or equivalent); chevron rotates 180°; `aria-expanded` toggled by JS; items toggle independently.
- **Keyboard:** native `<button>` elements guarantee Enter/Space operability; full focus visibility required.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** fluid `clamp()` typography, defined breakpoints, zero horizontal overflow at 320px viewport width.
- **Smooth Animations:** CSS transitions on all state changes using `transition: var(--transition-normal) var(--ease-standard)`; fully respect `prefers-reduced-motion: reduce` (disable transforms, reveals, and smooth scrolling).
- **Accessibility (a11y):** sufficient contrast in both themes (verify `--text-secondary` pairs); never rely on color alone — pair every success/error state with an icon and text. Use semantic HTML5 (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`), logical heading hierarchy (one `h1`), logical DOM/focus order, full keyboard operability, a visually hidden skip-to-content link, `scroll-margin-top` on anchored sections, and `aria-live` regions for dynamic feedback (form errors/success, billing-toggle announcements).
- **Mandatory Visual Feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive Actions:** none exist on this page; keep it that way.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** three separate files — `index.html`, `style.css`, `script.js`. Exactly one `<script src="script.js" defer></script>` before `</body>`; no other script tags, no inline JS, no inline event handler attributes (all listeners via `addEventListener`).
- **Naming Convention:** BEM exclusively (e.g., `.hero`, `.hero__title`, `.card--glass`, `.btn--primary`, `.faq-item__trigger`). Never mix conventions.
- **No Unrequested Placeholders:** write real, specific English copy for the fictional "Together" AI infrastructure brand (model deployment, GPU clusters, serverless inference, global edge). Lorem ipsum is forbidden.
- **Self-contained visuals:** no external images. Avatars are CSS pastel-gradient circles with initials; all illustrations are CSS gradients/shapes; magenta/orange appear only inside them.
- **Definition of done:** zero inline styles/handlers, zero console errors, both themes fully styled and toggled, keyboard-only navigation pass, 44px minimum touch targets, no horizontal scroll at 320px.

---

## 5. PAGE SECTION BUILD SPECIFICATIONS

### 5.1 Sticky Header
Slim (64–72px) sticky header: CSS geometric logo mark (two overlapping pastel-gradient shapes) + "Together" wordmark in Space Grotesk with tight tracking; nav links (Features, How It Works, Pricing, FAQ) with smooth anchor scrolling; theme toggle (per 1.3); compact `.btn--primary` "Get Started". On scroll, add `.is-scrolled`: glass background (light: `rgba(254,254,254,0.75)` + blur + bottom hairline; dark equivalent). Mobile: hamburger (Material `menu`/`close`) toggling a collapsible menu with `aria-expanded`/`aria-controls`, closing on link click and `Escape`.

### 5.2 Hero
Near-white canvas with the pastel gradient mesh (reference snippet in Section 0; orbs `aria-hidden`, `pointer-events: none`). Two-column desktop layout (copy left, visual right; stacked on mobile). Copy column: mono uppercase eyebrow badge "AI INFRASTRUCTURE CLOUD" (4px radius, hairline border); H1 up to 64px with `--tracking-xl` (voice: "The cloud built for frontier AI."); supporting subcopy (`--text-secondary`, max ~52ch); CTA row — `.btn--primary` "Start Deploying" + `.btn--ghost` "View Documentation"; enterprise stats row — **2x / 60% / 90%** as large tight-tracked numerals with mono labels ("FASTER INFERENCE VS. BASELINE", "LOWER GPU COST AT SCALE", "LESS TIME ON INFRA OPS"), separated by hairline dividers. Visual column: an 8px-radius product panel with layered pastel gradients, a magenta→orange gradient accent shape (illustration-only usage), floating glass chips with mono readouts ("GPU CLUSTER — ONLINE", "LATENCY 12MS", "THROUGHPUT +2.1X"), and `--shadow-lg`.

### 5.3 Features — 3 Cards
`--bg-secondary` band. Section header (mono eyebrow "PLATFORM" + H2 with `--tracking-lg` + subcopy). Three `.card--feature` in a responsive grid: Material icon (`bolt`, `memory`, `public`) inside a 4px-radius pastel tile (pink/blue/lavender respectively, icon in midnight), mono micro-label ("INFERENCE", "COMPUTE", "EDGE"), H3, description. Full card state set per 2.2.

### 5.4 How It Works — 3 Steps (Dark Section)
`--bg-midnight` background, white text, subtle pastel glow. Section header (mono eyebrow + white H2). Three `.card--glass` steps in a row (column on mobile): mono step numerals "01 / 02 / 03" in lavender, white Material icon, white H3, `--text-on-dark-secondary` description. Steps: Connect (link your model/repo) → Configure (declarative scale manifest) → Deploy (global endpoints in minutes). Optional desktop hairline connector (`rgba(255,255,255,0.12)`, decorative).

### 5.5 Testimonials
Light section. Section header + three quote cards: Material `format_quote` icon in lavender, blockquote, then a flex footer row — CSS pastel-gradient avatar circle with initials, name (weight 600), role/company in mono uppercase 11px `--text-secondary`. Hover lift per 2.2.

### 5.6 Pricing — 3 Tiers
`--bg-secondary` band. Section header + billing toggle: a segmented control (`role="group"`, `aria-label="Billing period"`) with "Monthly" / "Annual" buttons (8px container, 4px sliding thumb), `aria-pressed` states, a lavender "SAVE 20%" badge (4px radius, midnight text) on Annual, and a polite `aria-live` announcement. Three `.card--pricing` tiers: **Build** ($0/mo), **Scale** ($249/mo → $199/mo annual, featured), **Enterprise** (Custom). Featured middle card: midnight fill, white text, lavender "MOST POPULAR" mono badge, `--shadow-lg`, slight desktop elevation; its CTA is `.btn--glass`, others `.btn--ghost`. Each card: mono tier label, large tight-tracked price with mono "/MONTH" caption, feature list with Material `check` icons (midnight on light cards, lavender on the featured card), CTA button.

### 5.7 FAQ
Light section, single centered column (max-width ~760px). Section header + six accordion items built exactly per 2.4 (topics: supported models, billing, data privacy, bring-your-own-cloud, SLA, scaling speed).

### 5.8 Final CTA (Dark Section)
`--bg-midnight` with pastel glow orbs behind (`aria-hidden`). Centered column: mono eyebrow "GET STARTED", white H2 with `--tracking-xl` (voice: "Ship frontier AI, together."), `--text-on-dark-secondary` subcopy, then the email capture — inline flex row: `.input--glass` email field (flex: 1) + `.btn--glass` submit "Request Access". On submit: validate (per 2.3) → `.is-loading` for ~1.2s → `.is-success` with check icon and a polite `aria-live` confirmation ("Thanks — we'll email your access details."). Below: secondary on-dark link "Talk to sales" with Material `arrow_forward`.

### 5.9 Footer (Dark Section)
Continues midnight, separated by a `rgba(255,255,255,0.12)` top hairline. Responsive grid: brand block (logo, one-line tagline, social links as mono uppercase text links — "X / GITHUB / LINKEDIN") plus four secondary link columns — **Product** (Inference, Clusters, Edge, Pricing, Changelog), **Company** (About, Careers, Blog, Press), **Resources** (Docs, API Reference, Status, Community), **Legal** (Privacy, Terms, Security, DPA). Links in `--text-on-dark-secondary`, hover to white with underline offset. Bottom bar (flex, space-between): "© 2025 Together. All rights reserved." and a mono status line "ALL SYSTEMS OPERATIONAL" with a small success-colored dot (dot paired with text, not color-only).

---

## 6. JAVASCRIPT BEHAVIOR SPECIFICATION (`script.js`)

Write clean, commented (English), strict-mode JavaScript — no libraries. Implement exactly:

1. **Theme manager:** read `localStorage('theme')`; apply `.dark`/`.light` on `<html>`; toggle button updates `aria-pressed`, `aria-label`, and swaps the `dark_mode`/`light_mode` icon; persists choice; falls back to `prefers-color-scheme`.
2. **Header scroll state:** toggle `.is-scrolled` past 8px scroll (passive listener).
3. **Mobile menu:** toggle `.is-open` + `aria-expanded`, icon swap, close on link click and `Escape`, reset on resize to desktop.
4. **FAQ accordion:** toggle `.is-open` + `aria-expanded` per item (independent items).
5. **Billing toggle:** swap `aria-pressed`, update price text from `data-monthly`/`data-annual` attributes, show/hide savings badge, announce via `aria-live`.
6. **Email form:** prevent default, validate, show inline error + `aria-live` message on invalid; on valid, run loading → success sequence per 5.8.
7. **Scroll reveals:** `IntersectionObserver` adding `.is-visible` to `[data-reveal]` elements; add a `js` class to `<html>` at startup and scope initial hidden reveal styles under `.js` so content is never hidden without JavaScript; disable entirely under `prefers-reduced-motion`.
8. **Smooth scrolling:** handled in CSS (`scroll-behavior: smooth` + `scroll-padding-top`), with `auto` under reduced motion.

Generate the complete final code now — all three files, fully styled for both light and dark themes, in one attempt.
