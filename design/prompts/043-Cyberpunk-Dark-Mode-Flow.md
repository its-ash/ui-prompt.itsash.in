Act as a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality Landing Page on the first attempt. Output the full, final code in a single response — no clarifying questions, no partial deliverables.

**Theme: "Cyberpunk Dark Mode Flow"** — Futuristic, Analytical, Sophisticated. Keywords: cyberpunk, dark mode, flow, neon, circuit, glow, tech, sleek. Era: Sleek Future. Dark-native theme (Light: ✗ No / Dark: ✓ Full).

**Product concept (anchor for all copy):** Invent the fictional product **"Flow"** — a real-time data-pipeline and analytics platform ("route, monitor, and optimize live data streams"). All user-facing copy must be real, on-theme English marketing copy. No lorem ipsum anywhere.

**Palette (exact values):** Background `#080a12` · Panels `#1a1d26` (Dark Grey) · Text `#ffffff` · Primary Accent `#00c4fa` (Neon Blue) · Neon Green `#00ff9d` · Soft Purple `#bd00ff`.

**Visual effects to implement:** glowing borders (1px neon strokes + box-shadow glow), rounded rectangular containers, faint circuit-board background patterns (CSS gradients only), smooth digital matte surfaces (flat, low-sheen panel fills — glows live on strokes and borders, not large fills), self-emitting neon strokes. Seed CSS (extend, never contradict): `background-color: #080a12; color: #ffffff; font-family: 'Sora', sans-serif; border: 1px solid #00c4fa; box-shadow: 0 0 8px #00c4fa;` — apply this exact combination to emphasis surfaces (primary buttons, featured pricing card, Final CTA panel); resting panels use the dimmer `--border-default`.

**Page map (exact order):** sticky Header (logo, anchor nav, CTA) → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute and `<style>` blocks in `index.html` are **forbidden**.
- Target everything via class/ID selectors. HTML stays semantic and style-agnostic — retheming must require edits to `style.css` only.
- `index.html` may reference only: Google Fonts `<link>` tags, the Tailwind Play CDN `<script src>`, `style.css`, and one `<script src="script.js" defer>`. No inline JavaScript of any kind.

**1.2 CSS Variables & Theme Tokens**
Define all visual tokens in `:root` inside `style.css` — exactly these names and values:

```css
:root {
  /* color */
  --primary: #00c4fa;        /* neon blue */
  --secondary: #bd00ff;      /* soft purple */
  --bg-primary: #080a12;     /* deep space background */
  --bg-secondary: #1a1d26;   /* dark grey panels */
  --text-primary: #ffffff;
  --text-secondary: #9aa8c7; /* cool steel, AA on --bg-primary */
  --text-success: #00ff9d;   /* neon green */
  --text-error: #ff2e63;     /* neon magenta-red */
  --border-default: rgba(0, 196, 250, 0.28);
  --border-success: #00ff9d;
  --border-error: #ff2e63;
  /* glow */
  --glow-primary: 0 0 8px #00c4fa;
  --glow-primary-strong: 0 0 8px #00c4fa, 0 0 28px rgba(0, 196, 250, 0.35);
  --glow-secondary: 0 0 8px #bd00ff;
  --glow-success: 0 0 8px #00ff9d;
  --glow-error: 0 0 8px #ff2e63;
  /* shape & depth */
  --radius-sm: 8px; --radius-md: 14px; --radius-lg: 24px;
  --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.45);
  --shadow-md: 0 10px 30px rgba(0, 0, 0, 0.55);
  /* motion & space */
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms; --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* elevation */
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;
  /* type */
  --font-base: 'Sora', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

- **Contrast pairing (mandatory):** dark backgrounds (`--bg-primary`, `--bg-secondary`) pair only with light text (`--text-primary`, `--text-secondary`); neon-filled surfaces (solid/gradient `#00c4fa` or `#00ff9d`) must use `#080a12` as their text color — never white-on-neon. `--secondary` (#bd00ff) is reserved for borders, glows, gradients, and large display type — never small body text.
- No hardcoded hex values outside `:root`. Every color, glow, radius, shadow, and transition resolves through a variable.
- The `#fefefe`-over-`#ffffff` light-background rule is N/A — see the exception in 1.3.

**1.3 Mandatory Dark Mode Support (Dark-Native Theme)**
- Dark mode is the default and only theme. Define the full token set in `:root` and mirror it under a `.dark` class and `@media (prefers-color-scheme: dark)` so the architecture remains theme-switch-ready without any HTML restructuring.
- `script.js` must apply `.dark` to `<html>` on load and persist the theme key (e.g., `flow-theme`) in `localStorage`, falling back to `prefers-color-scheme`, preserving the persistence architecture.
- **Exception (per theme spec — Light: ✗ No / Dark: ✓ Full):** this is a dark-only deliverable — do not define a light palette and omit the visible light/dark toggle; the dark token set above is the single mandatory theme.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout structure with Flexbox (Tailwind flex utilities or `.flex` classes). Every flex container defaults to `align-items: center` unless a CSS comment justifies an exception.
- Mobile-first: single-column stacks on small viewports; multi-column rows (Features, Pricing, Testimonials, Footer) collapse to columns at their breakpoints. Zero horizontal scrolling at any width ≥ 320px.
- Wrap all sections in a centered container with a max width (e.g., `72rem`) and vertical rhythm built from `--spacing-gap` multiples.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS via the Play CDN (`https://cdn.tailwindcss.com`) for structural utilities only: flex, gaps, padding, responsive prefixes. No inline `tailwind.config` script.
- All colors, fonts, glows, radii, shadows, and transitions come from `style.css` — via reusable component classes (`.btn`, `.card`, `.input-group`, `.pricing-card`, `.step`, `.faq-item`) or `var()` arbitrary utilities. Utilities compose with component classes; they never replace them.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- **Text:** Google Fonts — `Sora` (400/600/700/800) bound to `--font-base`; `JetBrains Mono` (400/600) bound to `--font-mono` for eyebrow labels, stats, prices, and step numerals. Include via `<link>` tags.
- **Icons:** Google Material Symbols (Rounded) loaded from Google Fonts. Raw inline SVGs, local icon files, and emoji-as-icons are **forbidden**.
- Fluid type via `clamp()`; body text ≥ 16px with line-height ≥ 1.5; exactly one `<h1>` (Hero), logical h2 → h3 order per section.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component Requirements** (`.btn`, `.btn--primary`, `.btn--ghost`, `.btn--danger`)
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, `--radius-sm`, Sora 600. `.btn--primary`: neon-blue fill with `#080a12` text + `--glow-primary`. `.btn--ghost`: transparent background, `--border-default`, `--primary` text.
- **Hover:** glow intensifies (`--glow-primary-strong`), slight brightness lift, `cursor: pointer`.
- **Focus:** visible ring via `:focus-visible` — `outline: 2px solid var(--primary); outline-offset: 2px;` plus glow.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** pointer-events disabled, double-clicks prevented, CSS spinner (border animation) or pulsing Material Symbol; button dimensions must not change.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback states styled with `--text-success`/`--text-error` (+ matching glow), announced through an `aria-live` region.

**2.2 Card Component Requirements** (`.card`)
- **Default:** flexbox layout, `--bg-secondary` surface with a subtle matte top highlight (`rgba(255,255,255,0.03)` inset — no glossy fills), 1px `--border-default`, `--radius-md`, `--shadow-sm`.
- **Hover (interactive cards):** border brightens toward `--primary`, glow to `--glow-primary`, `transform: translateY(-2px)`.
- **Focus-within:** card border highlights when a child link/button receives focus.
- **Loading (skeleton):** shimmer sweep animation (animated gradient) with fixed dimensions — no layout shift.
- **Empty state:** centered flex column with a Material Symbol and clear guidance text.

**2.3 Form & Input Requirements** (`.input-group`)
- **States:** empty, focused (neon ring: `box-shadow: 0 0 0 3px rgba(0,196,250,0.35)`; border shifts to `--primary`), filled, valid (`--border-success` + `check_circle` icon), invalid (`--border-error`, error text, `error` icon), disabled, read-only.
- **Structure:** flex-column wrapper containing `<label>`, `<input>`, and a dedicated error `<p>` wired via `aria-describedby` inside an `aria-live="polite"` region. Errors are never communicated by color alone.
- **Used by:** the Final CTA email capture and the signup modal form.

**2.4 Modal / Popup Requirements** (`.modal`)
- **Trigger:** the Hero "Get Started" CTA and every Pricing tier CTA open a "Join the Flow" signup modal (name + email + submit).
- **States:** opening (fade + scale-in via CSS transition), open, loading (submit spinner), success (check icon + confirmation), error (inline error message), closing (reverse transition).
- **UX:** centered flex overlay (`align-items: center`), backdrop `rgba(8,10,18,0.8)` with blur, Material Symbol close button (`aria-label="Close"`), keyboard focus trap, `Esc` closes, overlay click closes, focus returns to the trigger, z-index `--z-modal`.

**2.5 Page Section & Content Requirements**
- **Header (sticky chrome):** fixed, `rgba(8,10,18,0.7)` + backdrop blur, bottom border `--border-default`. Text logo + Material Symbol (e.g., `hub`), anchor links (Features, How It Works, Testimonials, Pricing, FAQ), CTA button. Mobile: Material Symbol `menu` toggles a flex-column dropdown panel (`--z-dropdown`, `aria-expanded`, keyboard operable).
- **Hero:** `min-height: 90vh`, centered flex column. Mono eyebrow (e.g., `// REAL-TIME DATA FLOW`), `<h1>` with one keyword in a `#00c4fa → #bd00ff` gradient text-clip + glow, subheadline in `--text-secondary`, primary CTA (opens modal) + ghost CTA (scrolls to Features), stats row (3 items, mono numerals: e.g., 99.99% uptime · sub-8ms latency · 12,000+ teams). Background: faint circuit grid via layered CSS gradients only, e.g. `repeating-linear-gradient(0deg, rgba(0,196,250,0.05) 0 1px, transparent 1px 48px)` plus the 90deg variant and radial node dots, plus one self-emitting neon stroke accent (animated glowing line).
- **Features (3 cards):** reusable section header pattern (mono eyebrow + h2 + support line). Three `.card`s, flex row → column on mobile; each has a neon-ringed Material Symbol chip (rotate blue/green/purple: e.g., `bolt`, `shield`, `insights`), h3, description, "Learn more" link. Hover: glow + lift.
- **How It Works (3 steps):** three `.step` blocks, flex row → column; each with mono numeral chip (01/02/03), Material Symbol, h3, text. Connect the steps with a glowing circuit-trace line (CSS pseudo-element gradient with a traveling pulse animation). Copy angle: connect sources → route & transform → monitor & optimize.
- **Testimonials:** three quote `.card`s, flex row → column; quote text, star rating via Material Symbol `star`, avatar as initials inside a neon-gradient ring (no external images), name + role. Hover: subtle glow.
- **Pricing (3 tiers):** three `.pricing-card`s, flex row → column. Tiers: **Initiate** ($0), **Flow Pro** ($29/mo — featured), **Enterprise** (Custom). Featured card: "Most Popular" badge, `--glow-primary-strong`, slight elevation. Each card: tier name, large mono price, billing note, feature list with green `check_circle` icons, CTA (featured = `.btn--primary`, others = `.btn--ghost`; all open the modal).
- **FAQ:** 5–6 accessible accordion items — `<button aria-expanded="false">` + panel, CSS-animated expansion, rotating `expand_more` chevron, keyboard operable. Topics: what Flow does, security/encryption, latency, integrations, free-tier limits, cancellation.
- **Final CTA:** large glowing `.card--cta` panel, centered flex column: h2, support line, inline email capture (`.input-group` + `.btn--primary`, flex row → column on mobile) with full validation states; on success show a toast (top-right, `--z-toast`, `aria-live="polite"`, auto-dismiss, Material Symbol close button).
- **Footer with secondary links:** top border `--border-default`; brand blurb + 3–4 link columns (Product, Company, Resources, Legal), social row using Material Symbols (e.g., `mail`, `forum`, `code`, `public`) with `aria-label`s, bottom bar with © line and small legal links. Link hover: neon text + underline glow; visible focus rings.

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` sizing, breakpoints ≈ 640/768/1024px, no horizontal overflow from 320px up.
- **Smooth animations:** every state change transitions with `var(--transition-fast)`/`var(--transition-normal)` and `--ease-standard`. Add scroll-reveal (IntersectionObserver adds `.is-visible`; staggered translateY + opacity) and the circuit pulse animations. **All motion must be disabled under `prefers-reduced-motion`** (near-zero durations), and content must remain fully visible when JavaScript is unavailable (progressive enhancement — never hide content by default).
- **Accessibility (a11y):** WCAG AA contrast throughout the dark theme; never rely on color alone to communicate state; semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`); correct ARIA roles/labels on the mobile menu, accordion, modal, and toasts; logical DOM/focus order; full keyboard operability (no mouse-only interactions); `aria-live` regions for form errors, loading, and toasts; a skip-to-content link.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** any `.btn-danger`/delete control must be visually distinct in the dark theme (`--text-error`/`--border-error` + `--glow-error`) and never confused with primary actions.
- **Polish:** `::selection` in `--primary` with `#080a12` text; custom dark scrollbar; smooth anchor scrolling guarded by the reduced-motion media query.

## 4. DELIVERABLE & OUTPUT FORMAT

- **File structure:** three separate files — `index.html`, `style.css`, `script.js`. `index.html` references only the Google Fonts links, the Tailwind Play CDN, `style.css`, and one deferred `script.js`. No inline `<script>` code, no `<style>` blocks, no `style="..."` attributes.
- **Naming convention:** BEM for every custom class (`.btn`, `.btn--primary`, `.card`, `.card--featured`, `.pricing-card__price`, `.input-group__error`); Tailwind utilities for layout only. One convention across the entire deliverable — never mix.
- **Copy & assets:** all user-facing copy in English, real and on-theme (no lorem ipsum, no placeholder images); avatars are CSS initials; all visuals are CSS gradients, glows, or Material Symbols — no external image files.
- **`script.js` scope:** theme bootstrap + localStorage persistence (`.dark`), mobile menu, accordion, modal (open/close/focus trap/Esc), form validation + loading/success/error states, toast, IntersectionObserver reveals, smooth scrolling. No JS libraries beyond the Tailwind CDN.
- **Final output:** complete, runnable code for all three files in this single response — first attempt, every state above implemented, no placeholders, no follow-up questions.
