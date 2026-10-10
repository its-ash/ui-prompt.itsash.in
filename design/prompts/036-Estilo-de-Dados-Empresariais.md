# System Prompt — Landing Page Build: "Enterprise Data Style" (Autonomous Database SaaS)

**Your Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Generate the complete, production-ready landing page code in a single response — full `index.html`, `style.css`, and `script.js`. No clarifying questions, no partial output, no placeholder-only submissions.

---

## PROJECT BRIEF

- **Product:** An Autonomous Database platform — a self-driving, self-securing, self-repairing cloud database with built-in AI optimization, marketed to enterprise buyers.
- **Style Name:** Enterprise Data Style (translated from the source spec) — robust, secure, professional, structured. **Era:** 2026+ Data Intelligence. **Output category:** Corporate & SaaS.
- **Keywords:** database, cloud, enterprise, autonomous, AI, secure, scalable, reliable, professional, structured.
- **Visual Direction:** complex data visualizations, cloud architecture diagrams, subtle security glows, clean corporate typography, system status micro-interactions, modular elements, data flow animations, AI optimization features.
- **Theme Support:** Full light and dark mode — both are mandatory.
- **Copy:** Write ALL user-facing copy in English. Author realistic, specific marketing copy — no lorem ipsum.
- **Required sections, in order:** Sticky Header → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID Selectors Only:** every visual property, layout rule, and state is defined in `style.css` and applied via class or ID selectors.
- **Minimal HTML Modifications:** markup stays semantic and style-agnostic; retheming the site must require editing only `style.css`.

### 1.2 CSS Variables & Theme Tokens
Define all tokens in `:root` (light theme) and override for dark mode (see 1.3):

- **Colors (light):** `--primary: #F80000` (Corporate Red), `--secondary: #000080` (Dark Blue), `--bg-primary: #fefefe`, `--bg-secondary: #F8F8F8`, `--text-primary: #000080`, `--text-secondary: #666666`, `--text-success: #008000`, `--text-error: #F80000`, `--border-default: #CCCCCC`, `--border-error: #F80000`, `--border-success: #008000`.
- **Accent tokens:** `--accent-blue-light: #ADD8E6`, `--accent-orange: #FFA500`, `--accent-black: #000000`, `--primary-deep: #C40000` (use for small-size red text — raw `#F80000` fails WCAG AA at body sizes).
- **White Mapping:** the source palette's `#FFFFFF` must be rendered as `#fefefe` for all backgrounds and surfaces — pure `#ffffff` is prohibited.
- **Radius & Shadows:** `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 16px`, `--shadow-sm: 0 2px 5px rgba(0,0,0,0.05)`, `--shadow-md: 0 8px 24px rgba(0,0,0,0.12)`.
- **Spacing & Transitions:** `--spacing-gap: 1.5rem`, `--transition-fast: 150ms`, `--transition-normal: 300ms ease-in-out` (matches the spec's `transition: all 0.3s ease-in-out`), `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
- **Elevation/Stacking:** `--z-dropdown: 1000`, `--z-modal: 2000`, `--z-toast: 3000`.
- **Spec Surfaces:** the header uses `border-bottom: 1px solid var(--border-default)` with `box-shadow: var(--shadow-sm)`; soft gradient surfaces use `linear-gradient(to bottom, #F8F8F8, #fefefe)` — expose as `--gradient-surface` with a dark-mode equivalent.
- **Contrast Pairing:** every light background token pairs with a dark text token and every dark background token pairs with a light text token — enforced in both themes, no exceptions.

### 1.3 Mandatory Dark Mode Support
- Define dark tokens under BOTH `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`.
- **Dark palette:** `--bg-primary: #0A0A16`, `--bg-secondary: #12122A`, `--text-primary: #F2F2F7`, `--text-secondary: #A9B4C7`, `--primary: #FF3B3B` (brightened corporate red for dark-background contrast), `--secondary: #ADD8E6` (light blue replaces dark blue, which is invisible on dark surfaces), `--text-success: #4CAF50`, `--text-error: #FF6B6B`, `--border-default: #2A2A45`; deepen shadows accordingly.
- **Theme Switching:** background/text variables must swap seamlessly with zero HTML restructuring.
- **Persistence & Toggle:** a visible sun/moon toggle in the header using Material Symbols, with correct `aria-pressed` and `aria-label` states; persist the choice in `localStorage`, falling back to `prefers-color-scheme` on first visit.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build every layout container with Flexbox; **default to `align-items: center`** on all flex containers unless an exception is explicitly justified in a CSS comment.
- **Mobile-first:** the header nav collapses to an accessible hamburger menu; Features, Testimonials, and Pricing grids stack to a single column; How It Works connectors adapt vertically; horizontal scrolling is prohibited at any viewport width.

### 1.5 Framework & CSS Organization
- Use clean custom CSS in `style.css` organized around the tokens above and generic reusable component classes (`.btn`, `.card`, `.input-group`, `.section`, `.container`). If you opt for Tailwind, every utility must map back to these CSS variables and component classes — never mix conventions.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** Google Fonts — Inter (400/500/600/700/800) bound to `--font-base`, plus Roboto Mono (or JetBrains Mono) bound to `--font-mono` for metrics, status readouts, and data labels. Load via `<link>` in `<head>`.
- **Exception clause:** the source spec requests Helvetica/Arial; Google Fonts is mandatory, so use Inter as the closest corporate-grade equivalent — no local or system font stacks as the primary typeface.
- **Icons:** Google Material Symbols (Outlined) for every icon. Inline SVGs, icon fonts, and local icon files are forbidden.
- **Data Visuals:** build all charts, gauges, and architecture diagrams with pure CSS (flexbox node grids, `conic-gradient` gauges, animated bar charts, animated dashed connector lines) plus Material Symbols — no chart libraries, no SVG.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component Requirements
Style all states via classes (`.btn`, `.btn--primary`, `.btn--outline`, `.btn--ghost`, `.btn--danger`):
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` with a minimum 44×44px touch target. Primary buttons use the red background with bold white text ≥ 16px (AA large-text contrast).
- **Hover:** brightness/shadow shift with `cursor: pointer`.
- **Focus:** distinct visible ring built from CSS variables (`outline`/`box-shadow`) — never remove outlines without an accessible replacement.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** `.is-loading` — CSS spinner or animated Material Symbol (`progress_activity`); blocks pointer events, prevents double-clicks, and preserves button dimensions.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback classes driven by `--text-success` / `--text-error` (e.g., the email capture button flips to a check icon + "Subscribed").

### 2.2 Card Component Requirements
- **Default:** flex column layout on `--bg-secondary`, `1px solid var(--border-default)`, `--radius-md`, `--shadow-sm`.
- **Hover:** `transform: translateY(-2px)` plus `--shadow-md` (Features, Pricing, Testimonials cards).
- **Focus-within:** border highlight whenever a child link/button receives keyboard focus.
- **Loading (Skeleton):** `.skeleton` shimmer keyframes; apply to the hero metrics and testimonial cards on initial load and swap to real content on reveal to prevent layout jumps.
- **Empty State:** `.empty-state` layout (Material Symbol + clear guidance text) defined in CSS for any dynamic region that can render empty.

### 2.3 Form & Input Requirements
The Final CTA contains an email capture built as a flex input group (label + input + dedicated error feedback container):
- **States:** empty, focused (token-based ring), filled, valid (success border + check icon), invalid (error border + error icon + message announced via `aria-live="polite"`), disabled, read-only.
- Validate in JavaScript; never communicate state by color alone — always pair color with an icon and text.

### 2.4 Modal / Popup Requirements
A "Request a demo" modal opens from the Pricing Enterprise tier and the Final CTA secondary action:
- **States:** opening, open, loading, success, closing — all animated via CSS transitions.
- **UX:** centered flex overlay (`align-items: center`), backdrop, Material Symbol close button, keyboard focus trapping, close via `Esc` and overlay click, `role="dialog"` + `aria-modal="true"`, and focus restored to the trigger on close.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** fluid typography via `clamp()`, standard breakpoints, zero horizontal overflow.
- **Smooth Animations:** `transition: var(--transition-normal)` on all state changes; fully respect `prefers-reduced-motion` (disable pulses, data-flow dashes, counters, and reveals).
- **Accessibility (a11y):** WCAG AA contrast in both themes; semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`); a skip-to-content link; logical DOM/focus order; full keyboard operability (nav menu, FAQ accordion, pricing toggle, modal); `aria-live` regions for all dynamic feedback; never rely on color alone to communicate state.
- **Mandatory Visual Feedback:** every click, hover, and submission produces a visible state change.
- **Destructive/Distinct Actions:** `.btn--danger` must be visually distinct in both light and dark themes.
- **Theme Micro-Interactions (required):**
  - `.status-dot` — pulsing green dot with an "All systems operational" pill (Hero and Footer).
  - `.data-visualization-animation` — the Hero chart's bars grow / gauge sweeps on load.
  - `.cloud-architecture` — a modular node diagram (Ingest → AI Optimize → Store → Replicate) with animated dashed connectors simulating data flow.
  - Animated metric counters (uptime, latency, queries/sec) triggered by IntersectionObserver.
  - Subtle security glow (soft green/blue `box-shadow`) on the security feature card and shield icons — restrained in light mode, adapted so it does not overpower in dark mode.
  - Scroll-reveal fade/slide-in for sections.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** separate `index.html`, `style.css`, and `script.js`. A single deferred entry point (`<script src="script.js" defer></script>`); no inline scripts, no inline styles.
- **Naming Convention:** BEM (`block__element--modifier`) throughout the deliverable; the spec-mandated `.data-visualization-animation` and `.cloud-architecture` are the only permitted non-BEM class names (treated as named component classes).
- **No Unrequested Placeholders:** write real English copy — headlines, feature descriptions, three testimonial quotes (plausible names, roles, companies), three pricing tiers with feature lists, and 5–6 FAQ questions with answers.
- **Complete on First Attempt:** the deliverable must run as-is when opened in a browser.

---

## 5. SECTION-BY-SECTION SPECIFICATIONS

1. **Header (sticky):** logo (Material Symbol `database` + wordmark), anchor nav (Features, How It Works, Pricing, FAQ) with smooth scrolling and `scroll-margin-top` offsets, theme toggle, red "Get Started" button. Collapses to an accessible hamburger (`aria-expanded`, `aria-controls`, closes on `Esc` and link click).
2. **Hero:** status pill with pulsing dot, H1 + subheadline on autonomous data intelligence, red primary CTA + outline secondary CTA, animated stats row, and the `.data-visualization-animation` chart on a `--gradient-surface` background.
3. **Features (3 cards):** Autonomous Performance (AI tuning), Self-Securing (encryption, security glow), Elastic Scale (replication). Each with a Material Symbol icon, title, and description; hover lift and focus-within highlight.
4. **How It Works (3 steps):** 01 Connect → 02 AI Optimizes → 03 Monitor & Scale, joined by the `.cloud-architecture` diagram with animated data-flow connectors; stacks vertically on mobile.
5. **Testimonials (3 cards):** quote, star rating via Material Symbols, avatar (initials circle), name, role, and company.
6. **Pricing (3 tiers):** Standard / Professional (highlighted with a "Most Popular" badge and elevated border/shadow) / Enterprise; feature lists with check icons; per-tier CTAs; the Enterprise CTA opens the demo modal; include an accessible monthly/annual toggle that updates prices with an `aria-live` announcement.
7. **FAQ:** accessible accordion — `<button aria-expanded>` + region per item, chevron rotation, animated expand/collapse.
8. **Final CTA:** dark blue panel (`--secondary` background with light text; in dark mode, differentiate it from the page background with a border or elevated navy surface), subtle security glow, headline, and the email capture form per 2.3 with loading → success button states.
9. **Footer:** brand block, secondary link columns (Product, Company, Resources, Legal), status pill, social icons (Material Symbols), and copyright. Links use real labels; `href="#..."` anchors to page sections are acceptable.
