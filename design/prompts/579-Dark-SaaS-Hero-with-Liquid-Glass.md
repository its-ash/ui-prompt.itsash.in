# CODING PROMPT — "APEX" Landing Page: Dark SaaS Hero with Liquid Glass

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a **complete, production-quality landing page on the first attempt** — fully functional, responsive, accessible, and visually polished. No drafts, no stubs, no TODOs.

**Project:** A single-page marketing site for **APEX**, a 2025–2026 era AI revenue-growth SaaS startup. Aesthetic: dark SaaS, liquid glass (glassmorphism), full-screen video background hero, infinite marquee social proof, bright green accent, backdrop blur, navbar pill, announcement badge, pill CTA buttons.

---

## 1. PROJECT BRIEF & DESIGN DIRECTION

**1.1 Theme Identity**
- **Name:** Dark SaaS Hero with Liquid Glass
- **Type:** Dark SaaS · Liquid Glass · Video Background · Marquee Social Proof
- **Keywords:** dark SaaS, liquid glass, video background, hero section, marquee, social proof, green accent, backdrop blur, glass morphism, navbar pill, announcement badge, CTA buttons
- **Era:** 2025–2026 SaaS/AI startup
- **Theme modes:** Dark only (see exception clause in 2.3)

**1.2 Color Palette → CSS Variable Tokens (define all in `:root`)**
- `--bg-primary: hsl(260, 87%, 3%)` — page background, near-black with a purple tint
- `--bg-secondary: hsl(240, 4%, 16%)` — raised surfaces / card fallback
- `--text-primary: hsl(40, 6%, 95%)` — warm off-white body text
- `--text-secondary: hsl(40, 6%, 82%)` — subheadings, muted text
- `--heading: hsl(40, 10%, 96%)` — hero and section headings
- `--primary: hsl(121, 95%, 76%)` (`#87FB89`) — bright green accent, primary buttons, highlights
- `--primary-foreground: hsl(0, 0%, 5%)` — text on green surfaces
- `--muted: hsl(240, 4%, 16%)`
- `--border-default: hsl(240, 4%, 20%)`
- `--text-success: hsl(121, 95%, 76%)` · `--text-error: hsl(0, 85%, 72%)` (light-tinted red, readable on dark)
- `--border-success: hsl(121, 95%, 76%)` · `--border-error: hsl(0, 85%, 60%)`
- Glass tokens: `--glass-bg: rgba(255, 255, 255, 0.01)`, `--glass-highlight: inset 0 1px 1px rgba(255, 255, 255, 0.1)`
- Shape/elevation/motion tokens: `--radius-sm: 0.5rem`, `--radius-md: 0.75rem`, `--radius-lg: 1.5rem` (matches `rounded-3xl`), `--radius-full: 9999px`, `--shadow-sm`, `--shadow-md` (deep black shadows suited to dark UI), `--spacing-gap: 1.5rem`, `--transition-fast: 200ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- Stacking: `--z-navbar: 100`, `--z-dropdown: 200`, `--z-modal: 300`, `--z-toast: 400`
- **Contrast pairing (mandatory):** dark backgrounds pair with light text tokens; the light green `--primary` pairs exclusively with dark `--primary-foreground`. Never place light text on `--primary` or dark text on `--bg-primary`.

**1.3 Signature Visual Effects — implement exactly**

Liquid glass (reusable utility class, verbatim from the design spec):
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  overflow: hidden;
  position: relative;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.15) 20%,
    rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.15) 80%, rgba(255, 255, 255, 0.45) 100%);
  border-radius: inherit;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```
- **Clipping warning:** `.liquid-glass` uses `overflow: hidden` — never nest dropdown menus, popovers, or toasts inside it. Render the mobile nav dropdown as a **sibling** panel, not a child.

Video background (hero only): full-screen video of the **Earth rotating as seen from space**, with `autoplay loop muted playsinline`, `object-fit: cover`, `position: absolute; inset: 0`, covering the entire hero. Source it from a royalty-free direct MP4 CDN link (Coverr, Pexels Videos, or Wikimedia Commons); always include a `poster` attribute and a CSS fallback layer (dark purple radial gradient) beneath the video so the hero degrades gracefully if the video fails.

Marquee (social proof):
```css
@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
.marquee-track { animation: marquee 20s linear infinite; }
```
Track is `display: flex; width: max-content;` with the brand list duplicated once for a seamless loop.

Hover feedback: all buttons and links transition smoothly in **200ms** (`var(--transition-fast)`).

**1.4 Typography & Iconography**
- Font: **Geist** (weights 400–700) loaded from Google Fonts; bind to `--font-base: 'Geist', 'Geist Sans', system-ui, sans-serif`.
- Icons: **Google Material Symbols (Rounded)** via Google Fonts CDN.

**1.5 Copy Rules**
- All user-facing copy in **English**. Write real, concise SaaS marketing copy for any text not specified below — **lorem ipsum is forbidden**.
- Use these strings **verbatim**: brand "APEX"; nav items "Features", "Solutions", "Plans", "Learning"; "Sign Up"; badge "Nova+ Launched!" with chip "Explore"; H1 "Accelerate Your Revenue Growth Now"; CTAs "Start Free Right Now" and "Schedule a Consult"; marquee brands "Vortex", "Nimbus", "Prysma", "Cirrus", "Kynder", "Halcyn".

---

## 2. STRICT RULES & ARCHITECTURE

**2.1 CSS-First Architecture & Zero Inline CSS**
- **No inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID selectors only:** all design properties, layout rules, and states are targeted via classes/IDs defined in `style.css`.
- **Minimal HTML modifications:** HTML stays clean, semantic, and styling-agnostic — changing the site's look must require editing only `style.css`, never the markup.

**2.2 CSS Variables & Theme Tokens**
- Every color, radius, shadow, spacing, transition, and z-index value must come from the tokens in 1.2. No hardcoded hex/hsl values in component rules.
- Sole exception: the literal `rgba()` stops inside the `.liquid-glass` gradient recipe, which is a fixed effect specification.

**2.3 Dark Mode**
- Dark mode is the site's only and default theme; the full palette in 1.2 is the dark palette and must be defined entirely through CSS variables so a future light theme could be added by editing `style.css` only.
- **Exception clause:** per the requested style ("Dark only — full"), ship a single dark theme; no light variant, no theme toggle, and no `localStorage` theme persistence are required for this project.

**2.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with **Flexbox**.
- **Every flex container defaults to `align-items: center`** unless there is an explicitly justified exception (e.g., `align-items: stretch` for equal-height pricing cards) — justify every exception with a CSS comment.
- Mobile-first: rows convert to columns on small viewports; **horizontal scrolling must never occur** on any breakpoint (pay special attention to the hero video and marquee).

**2.5 Framework & CSS Organization**
- Use clean, hand-written custom CSS organized in native cascade layers: `@layer tokens, base, layout, components, utilities`. Do not add Tailwind, Bootstrap, or any other framework.
- All styles map to CSS variables and reusable class names (`.btn`, `.card`, `.input-group`, `.liquid-glass`, `.marquee-track`).

**2.6 Typography & Icons (Google Fonts Mandatory)**
- Load Geist and Material Symbols Rounded via Google Fonts `<link>` tags (with `preconnect`) in `<head>`; bind the font to `--font-base`.
- Icons are Material Symbols only (e.g., `<span class="material-symbols-rounded">chevron_right</span>`), styled (size, fill, weight) via CSS classes. Raw inline SVGs and local icon files are forbidden.
- **Exception clause:** the APEX logo's crosshair mark may be a single inline SVG per the design direction; no other inline SVG is permitted anywhere in the project.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

**3.1 Button Component (`.btn` + variants)**
- **Base:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, `border-radius: var(--radius-full)` for this design, `cursor: pointer`, `transition: var(--transition-fast)`.
- **Variants:** `.btn--primary` (green `--primary` bg, `--primary-foreground` text), `.btn--glass` (`.liquid-glass` pill), `.btn--ghost` (transparent, border).
- **Hover:** brightness shift and/or shadow change.
- **Focus:** distinct `:focus-visible` ring using `--primary` (outline + offset) for keyboard navigation.
- **Active/pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading` + `aria-busy="true"`):** disables interaction, prevents double-clicks, renders a CSS spinner or animated Material Symbol (`progress`) **without changing button dimensions**.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success (`.is-success`):** temporary feedback driven by `--text-success` with a `check` icon.
- No destructive actions exist on this page; if one is ever added, it must use a visually distinct `.btn--danger` readable on dark backgrounds.

**3.2 Card Component (`.card`)**
- **Default:** flexible Flexbox column layout, `.liquid-glass` surface (or `--bg-secondary` + `--border-default` where glass is too heavy), `--radius-lg`, generous padding.
- **Hover:** `transform: translateY(-2px)` plus shadow/elevation shift and border brightening.
- **Focus-within:** card border highlights (`--primary`) when a child link/button receives focus.
- **Loading (skeleton):** define a `.skeleton` shimmer keyframe animation utility in CSS that preserves layout dimensions; apply it to any asynchronously loaded content.
- **Empty state:** not required (no dynamic lists), but any dynamically rendered list must ship a structured empty state with a Material Symbol and guidance text.

**3.3 Form & Input Component (`.input-group`)**
- **Structure:** flex column wrapping a `<label>`, the input field, and a dedicated error-feedback container (`aria-live="polite"`).
- **States (all styled via classes):** empty, focused (outline ring), filled, valid (success border + `check` icon), invalid (`--border-error`, `--text-error` message, `error` icon, `aria-invalid="true"`, message linked via `aria-describedby`), disabled, read-only.
- Validate on submit and on blur; never communicate errors by color alone — always icon + text.

**3.4 Modal / Popup (consult modal)**
- **States:** opening, open, loading, success/error, closing — all animated via CSS transitions (opacity + scale, ~250ms, reversible).
- **UX:** centered flex container (`align-items: center; justify-content: center`), dark blurred backdrop overlay, Material Symbol `close` button with `aria-label="Close dialog"`, keyboard **focus trapping** while open, focus returned to the trigger on close, close via `Esc` and overlay click, body scroll locked, `role="dialog"` `aria-modal="true"` `aria-labelledby`, z-index `--z-modal`. Submit runs the button loading state, then a success state with `check` icon and an `aria-live` confirmation before auto-closing. Using the native `<dialog>` element with `showModal()` is recommended (it provides focus trap and `Esc` for free) but all listed requirements must hold either way.

**3.5 Toast Notification**
- Fixed position (bottom-right), z-index `--z-toast`, glass or `--bg-secondary` surface, `role="status"` with `aria-live="polite"`, slide-up entrance animation, auto-dismiss after ~4s, optional `close` button. Used for pricing CTA feedback and newsletter success.

---

## 4. PAGE SECTIONS & CONTENT REQUIREMENTS

**4.1 Hero (`#hero`)**
- `<section>` with `position: relative; min-height: 100svh;` flex column, centered content, `overflow: hidden`.
- **Video background:** Earth rotating from space — `autoplay loop muted playsinline`, `object-fit: cover`, `absolute inset: 0`, `aria-hidden="true"`, `tabindex="-1"`, `disablepictureinpicture`. Add a non-interactive gradient overlay (`::after` or dedicated layer) darkening toward `--bg-primary` at the bottom to guarantee WCAG AA text contrast over the video.
- **Navbar (fixed `<header>` at top):** `.liquid-glass` pill, `border-radius: var(--radius-lg)`, `max-width: 850px`, centered, flex `align-items: center; justify-content: space-between`. Left: logo — a small gradient square (green gradient, `--radius-sm`) containing the crosshair mark, followed by the wordmark "APEX" (bold, tight letter-spacing). Nav links: Features / Solutions / Plans / Learning, anchoring to `#features` / `#how-it-works` / `#pricing` / `#faq` respectively, `--text-secondary` → `--text-primary` on hover (200ms). Right: "Sign Up" `.btn--primary` pill. **Mobile (<768px):** links hidden; hamburger button (Material Symbol `menu`, `aria-expanded`, `aria-controls`) toggles a `.liquid-glass` dropdown panel rendered as a **sibling** of the pill (not clipped by `overflow: hidden`), z-index `--z-dropdown`, flex column of links + Sign Up; closes on link click and `Esc`.
- **Announcement badge:** `.liquid-glass` `rounded-full` pill link → `#features`, flex `align-items: center`: text "Nova+ Launched!", a small "Explore" chip, and a `chevron_right` icon.
- **H1:** "Accelerate Your Revenue Growth Now" — `clamp(2.5rem, 6vw, 4.5rem)`, `font-weight: 600`, tight letter-spacing (`-0.02em`), color `--heading`, centered, `text-wrap: balance`.
- **Subheading:** one concise sentence (write real copy about AI-driven revenue growth), `~1.125rem`, `--text-secondary` at ~80% emphasis, max-width ~60ch, centered.
- **CTA row:** flex `align-items: center`, gap, wraps to full-width stacked buttons on small screens. "Start Free Right Now" → `.btn--primary`, smooth-scrolls to `#pricing`. "Schedule a Consult" → `.btn--glass`, opens the consult modal (3.4).
- **Social proof marquee (bottom of hero):** small muted label ("Trusted by high-growth teams at"), then `.marquee` (`overflow: hidden`, edge fade via `mask-image`) containing `.marquee-track` (flex, `align-items: center`, large gap, `width: max-content`, 20s linear infinite animation) with the six brand wordmarks **duplicated exactly once** — the duplicate list carries `aria-hidden="true"`. Wordmarks: bold, wide letter-spacing, `--text-secondary` at reduced opacity. Pause animation on hover/focus-within.

**4.2 Features (`#features`) — 3 cards**
- Section header (h2 + supporting subheading), then a flexbox row (wraps to column on mobile) of three `.liquid-glass` cards, flex column `align-items: center`, text centered: icon tile (44px+, green-tinted background, Material Symbol in `--primary`), h3 title, description, and a "Learn more" link with `arrow_forward` (demonstrates focus-within). Suggested features: AI Revenue Insights (`insights`), Pipeline Automation (`bolt`), Accurate Forecasting (`trending_up`). All card states per 3.2.

**4.3 How It Works (`#how-it-works`) — 3 steps**
- Three steps in a flex row on desktop (connected by a CSS pseudo-element line using `--border-default`), stacked column on mobile. Each step: numbered badge ("01"/"02"/"03"), Material Symbol icon, h3, description. Suggested flow: Connect your stack (`cable`) → Let AI find revenue (`auto_awesome`) → Close and scale (`rocket_launch`).

**4.4 Testimonials**
- Section header + three cards (flex row → column). Each card: five `star` Material Symbols (filled via `font-variation-settings`, `--primary`, with an `aria-label` such as "Rated 5 out of 5 stars" and icons `aria-hidden`), a realistic quote, and a footer with a CSS-only initials avatar (gradient circle), name, and role/company. Write real invented names, roles, and quotes — no placeholders.

**4.5 Pricing (`#pricing`) — 3 tiers**
- Section header + a **billing toggle**: glass segmented control with "Monthly" / "Annual" (plus a "Save 20%" chip), `role="group"` with `aria-label`, buttons using `aria-pressed`, active state highlighted in green; price changes announced via an `aria-live="polite"` region.
- Three tier cards in a flex row (`align-items: stretch` — commented exception for equal heights) → column on mobile. Middle tier ("Growth") is highlighted: `--primary` border or green glow, a "Most Popular" pill badge, slight scale on desktop. Each card: tier name, large price with per-month and billing-period note, feature list (`ul` with `check` icons in `--primary`), CTA button. Suggested tiers: Starter $29/$23, Growth $79/$63, Scale $199/$159 (monthly/annual).
- Tier CTA click behavior: trigger `.is-loading` (spinner, interactions blocked) for ~1.5s → `.is-success` with a `check` icon + a toast confirmation → reset. All button states per 3.1.

**4.6 FAQ (`#faq`)**
- 5–6 accordion items. Each: a `<button>` trigger with `aria-expanded` / `aria-controls`, flex `align-items: center; justify-content: space-between`, question text + `expand_more` icon that rotates 180° when open (200ms). Panel: `role="region"` + `aria-labelledby`, animated open/close via the `grid-template-rows: 0fr → 1fr` technique. Single-open behavior (opening one closes the others). Write real questions (free trial, cancellation, integrations, security, support, team size) with real answers.

**4.7 Final CTA**
- Centered flex column section with a subtle green radial glow background (CSS only): h2, subheading, and the same two CTA buttons as the hero ("Start Free Right Now" → `#pricing`; "Schedule a Consult" → modal). Reuse the exact hero button components.

**4.8 Footer**
- Top border `--border-default`. Upper area (flex, wraps): brand column (logo + one-line tagline) and three link columns (Product, Company, Resources — e.g., Features, Pricing, Integrations, Changelog / About, Careers, Blog, Contact / Documentation, API Reference, Community, Status). All links show 200ms hover/focus feedback.
- **Newsletter form:** `.input-group` with email input + "Subscribe" `.btn--primary` — full state suite per 3.3 (focus ring, invalid with icon + `aria-live` error, success toast + inline confirmation).
- Bottom bar (flex `align-items: center; justify-content: space-between`, wraps): "© 2025 Apex Inc. All rights reserved." + secondary links (Privacy Policy, Terms of Service, Security).

---

## 5. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** mobile-first with breakpoints (~480/768/1024px), fluid `clamp()` typography, no horizontal overflow anywhere, all touch targets ≥ 44×44px.
- **Smooth animations:** CSS transitions on every state change using the motion tokens; `prefers-reduced-motion: reduce` must disable the marquee animation, pause the hero video, and minimize transitions.
- **Accessibility (a11y):** skip-to-content link; semantic landmarks (`header`, `nav` with `aria-label`, `main`, `section` with `aria-labelledby`, `footer`); strict heading order h1 → h2 → h3; visible `:focus-visible` rings everywhere; WCAG AA contrast over the video (enforced by the overlay); never rely on color alone; full keyboard operability; `aria-live` regions for form errors, toasts, loading, and price changes.
- **Mandatory visual feedback:** every click, hover, and submission produces a visible state change.
- **Smooth anchor scrolling:** CSS `scroll-behavior: smooth` plus `scroll-padding-top` sized to the fixed navbar.

---

## 6. DELIVERABLES & OUTPUT FORMAT

- **File structure:** separate `index.html`, `style.css`, and `script.js`. Exactly one `<script src="script.js" defer></script>` reference — no inline `<script>` blocks, no inline styles, no `style` attributes.
- **Naming convention:** BEM (`.block__element--modifier`) throughout, with these reserved utility classes from the design spec: `.liquid-glass`, `.marquee-track`, `.skeleton`, `.visually-hidden`, `.container`, `.btn` variants. Never mix conventions.
- **JavaScript scope (`script.js`):** mobile nav toggle, FAQ accordion, billing toggle, modal open/close with focus management, form validation with `aria-live` feedback, button loading/success simulation, toast system, and reduced-motion video handling only.
- **No unrequested placeholders:** use the verbatim strings from 1.5; write real English marketing copy everywhere else. Lorem ipsum is forbidden.
- **Runs on first attempt:** valid HTML5, all external assets (Google Fonts, Material Symbols, stock video) loaded from public CDNs, no build step — the page must work by opening `index.html` in a browser.
