# CODING-AI PROMPT — "SkillSpark" E-Learning Landing Page (Vibrant Educational Flat Design)

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce a complete, production-ready landing page in a single attempt. Do not ask clarifying questions — every requirement is specified below.

**Project Brief:** Build a landing page for **"SkillSpark"**, an e-learning platform. Theme: **Vibrant Educational Flat Design** — engaging, interactive, modern, clear, structured, accessible. Era: **2026+ Dynamic Learning**. Output category: **Playful & Youth** (friendly, energetic, rounded shapes, bold typography, sticker-like badges, lively micro-interactions).

**Visual Direction:** Flat UI elements with illustrative icons; vibrant primary and secondary colors used for categorization; legible sans-serif typography; animated vector-style illustrations; progress micro-interactions with visual feedback; smooth, functional element transitions; electric blue and sun yellow accents; clear and accessible feel.

**Color Palette:**
- Primary: Electric Blue `#007BFF`, Sun Yellow `#FFD700`, Emerald Green `#2ECC40`, White `#FFFFFF`
- Secondary: Vibrant Orange `#FF8C00`, Soft Purple `#9370DB`, Shock Pink `#FF00CC`, Light Gray `#F5F5F5`

**Sections to Build:** Header/Nav, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Copy Locale:** All user-facing copy must be written in **English**, in a playful, youth-oriented, encouraging tone. Write real, specific copy — lorem ipsum is prohibited.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
* **Minimal HTML Modifications:** HTML must remain clean, semantic, and styling-agnostic — changing the look must only require editing CSS.

### 1.2 CSS Variables (`var(--...)`) & Theme Tokens
All visual tokens must live in `:root` (and theme overrides). Required token set:

```css
:root {
  /* Colors — Light (default) */
  --primary: #007BFF;        /* Electric Blue — CTAs, links, active states */
  --primary-strong: #0066CC; /* Darkened blue for white-text button fills (contrast ≥ 4.5:1) */
  --secondary: #FFD700;       /* Sun Yellow — badges, highlights, accents (never white text on yellow) */
  --accent-green: #2ECC40;   /* Emerald — success, progress fills, borders */
  --accent-orange: #FF8C00;  /* Vibrant Orange — category color A */
  --accent-purple: #9370DB;  /* Soft Purple — category color B */
  --accent-pink: #FF00CC;    /* Shock Pink — category color C / playful accents */
  --bg-primary: #fefefe;     /* Page background */
  --bg-secondary: #F5F5F5;   /* Light Gray — alternating section bands, card surfaces */
  --text-primary: #333333;
  --text-secondary: #555555;
  --text-success: #1F8A3B;   /* Accessible darkened emerald for text; #2ECC40 reserved for borders/progress */
  --text-error: #D93025;
  --border-default: #E3E6EA;
  --border-success: #2ECC40;
  --border-error: #D93025;

  /* Shape, depth, motion */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --shadow-sm: 0 2px 0 0 rgba(51, 51, 51, 0.12); /* flat, hard-edged */
  --shadow-md: 4px 4px 0 0 var(--primary);        /* flat offset shadow for hover elevation */
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms;
  --transition-normal: 300ms;
  --ease-standard: ease-in-out;
  --z-dropdown: 100;
  --z-modal: 1000;
  --z-toast: 2000;
  --font-base: "Roboto", sans-serif;
}
```

* **Contrast Pairing:** Every light background token must pair with a dark text token and every dark background token with a light text token — in **every** theme, not only the default.
* **Near-White Rule:** Never use `#ffffff` as a background; use `#fefefe`. *Exception note: the source palette lists `#FFFFFF` as the background — substitute `#fefefe` per this rule.*
* **Flat Shadows:** *Exception note: the source spec declares `box-shadow: none`; shadows are therefore defined as hard-edged flat offset shadows (no blur) and used sparingly for hover/elevation feedback only.*
* **Flat Borders:** *Exception note: the source spec declares `border: none`; crisp 2px solid borders in palette colors are still required for card edges, inputs, and focus rings — do not omit borders.*
* **Transitions:** Use `transition: <specific-properties> var(--transition-normal) var(--ease-standard)` — never `transition: all`.

### 1.3 Mandatory Dark Mode Support
* **Implementation:** Define dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`. Suggested dark values (verify ≥ 4.5:1 text contrast, adjust as needed): `--primary: #4D9FFF; --secondary: #FFDE33; --accent-green: #3DDC5A; --accent-orange: #FFA340; --accent-purple: #B39DFF; --accent-pink: #FF5CD9; --bg-primary: #141821; --bg-secondary: #1E2430; --text-primary: #F5F5F5; --text-secondary: #B8C0CC; --text-success: #4CD96B; --text-error: #FF6B5E; --border-default: #2C3442;` with flat shadows re-derived for dark surfaces.
* **Theme Switching:** Background and text variables must flip seamlessly with zero HTML restructuring.
* **Persistence:** Store the choice in `localStorage` (e.g., key `skillspark-theme`), fall back to `prefers-color-scheme` on first visit, and provide a visible header toggle with correct `aria-pressed` and `aria-label` ("Switch to dark mode" / "Switch to light mode"), using Material Symbols `light_mode` / `dark_mode`.
* *Exception note: the source style spec requested light-mode-only output; per mandatory architecture, dark mode MUST still be fully implemented — do not skip it.*

### 1.4 Flexbox Layout & Mobile-First Alignment
* Build all layout structures with Flexbox (`display: flex` / Tailwind flex utilities).
* **Default Alignment Rule:** Every flex container must default to `align-items: center` (`items-center`) unless there is an explicitly justified exception.
* **Mobile-Friendly First:** All flex layouts must be responsive out of the box — multi-column rows collapse to columns below ~768px. No horizontal scrolling at any viewport width down to 320px.

### 1.5 Framework Default & Tailwind CSS Integration
* Use Tailwind CSS (CDN acceptable) for layout/spacing utilities, backed by a custom `style.css` that defines all design tokens and component classes (`.btn`, `.card`, `.input-group`, etc.) via `@layer`/`@apply` or plain CSS referencing the variables. Every utility must map back to a CSS variable or a generic reusable class — no hard-coded hex values outside `:root`/theme blocks.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text:** Load **Roboto** (weights 400, 500, 700, 900) via Google Fonts `<link>` and bind it to `--font-base`. Base size 16px, line-height 1.6. Headings use 700–900 weights for the playful, youthful voice.
* **Icons:** Use **Google Material Symbols** exclusively. Raw inline SVGs and local icon files are forbidden. *Exception note: the source spec calls for "animated vector illustrations"; build all illustrations from Material Symbols composed and animated with CSS — no inline SVGs.*

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component Requirements
Style all states via CSS classes (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.btn-danger`):
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` Minimum touch target 44×44px. Primary fill uses `--primary-strong` with white bold text; secondary uses `--secondary` with `--text-primary`.
* **Hover:** Brightness shift plus flat shadow (`--shadow-sm`), `cursor: pointer`.
* **Focus:** Distinct focus ring via `outline`/`box-shadow` using CSS variables, visible on keyboard navigation.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading:** Disables interaction, prevents double-clicks, renders a CSS spinner or animated Google Icon without changing button dimensions.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** Temporary feedback styles driven by `--text-success` / `--text-error`.

### 2.2 Card Component Requirements
Applies to feature cards (`.course-card-flat`), testimonial cards, and pricing cards:
* **Default:** Flexible flexbox layout, `--bg-secondary` or `--bg-primary` surface, crisp 2px solid border, `--radius-md`, flat aesthetic (no blur shadows).
* **Hover:** `transform: translateY(-2px)` plus flat offset shadow; category icon performs a playful wiggle/scale animation.
* **Focus-within:** Card border highlights when a child link/button receives focus.
* **Loading (Skeleton):** Define shimmer animation CSS to prevent layout jumps.
* **Empty State:** Structured fallback with a Google Icon and clear guidance text.

### 2.3 Form & Input Requirements
Used for the Final CTA email capture and Footer newsletter:
* **States:** Empty, Focused (outline ring), Filled, Valid (success border + check icon), Invalid (error border, `--text-error` message, error icon), Disabled, Read-only.
* **Structure:** Flex container wrapping a `<label>`, input field, and a dedicated error-feedback container wired to an `aria-live="polite"` region. Inline success confirmation on valid submit — never a silent action.

### 2.4 Modal / Popup Requirements
The Hero "Watch Demo" button opens a demo modal:
* **States:** Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
* **UX Features:** Centered flex container (`align-items: center`), backdrop overlay at `--z-modal`, Google Icon (`close`) close button, keyboard focus trapping, close via `Esc` and overlay click, `role="dialog"`, `aria-modal="true"`, labeled title. Content: a 16:9 flat placeholder frame with a `play_circle` icon and caption (video content is genuinely unspecified, so a styled placeholder is permitted here).

### 2.5 Accordion (FAQ) Requirements
* Accessible accordion using `<details>/<summary>` or button-based pattern with `aria-expanded`; chevron (`expand_more`) rotates on open; smooth CSS height/opacity transition; fully keyboard operable; only semantic HTML — no new widgets beyond this spec.

### 2.6 Progress Micro-Interaction Requirements (`.progress-bar-flat`)
* **Scroll progress:** A fixed top-of-page `.progress-bar-flat` in `--primary` whose width tracks scroll position.
* **Hero demo:** An animated `.progress-bar-flat` inside the hero illustration ("Course progress — 75%") that fills on load.
* **Steps:** How It Works step badges show a filled progress connection as the section scrolls into view. All progress fills must animate via CSS and pause under `prefers-reduced-motion`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** Fluid sizing, breakpoints without horizontal overflow; sticky header collapses nav into a hamburger (`menu` icon) dropdown at `--z-dropdown` on mobile.
* **Smooth Animations:** CSS transitions on all state changes using the motion tokens; wrap decorative keyframes in `@media (prefers-reduced-motion: no-preference)` and provide a reduced fallback.
* **Accessibility (a11y):** Contrast ≥ 4.5:1 for text and ≥ 3:1 for UI components in **both** light and dark modes. Never rely on color alone to communicate state. Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), logical heading hierarchy (one `h1`), ARIA roles/labels on custom widgets, visible skip link, logical focus order, full keyboard operability, and `aria-live` regions for dynamic feedback (form errors, price changes, toasts).
* **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
* **Destructive Actions:** Any `.btn-danger` variant must be visually distinct in both themes.
* **Reveal-on-scroll:** Subtle staggered entrance animations (fade/slide) via `IntersectionObserver`, disabled under reduced motion.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **File Structure:** Separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline event handlers — all behavior via `addEventListener` in `script.js`.
* **Naming Convention:** BEM (`block__element--modifier`) consistently across the entire deliverable — never mix conventions. The spec-mandated classes **`.course-card-flat`** (Features cards), **`.animated-illustration`** (Hero illustration), and **`.progress-bar-flat`** (progress bars) must exist and be used as BEM block names.
* **No Unrequested Placeholders:** All copy must be real, specific, English e-learning copy. Placeholders are permitted only for genuinely unspecified content (e.g., the demo video frame).
* **JS responsibilities (all in `script.js`):** theme toggle + persistence, mobile nav, FAQ accordion, modal open/close + focus trap, pricing billing toggle, form validation + live feedback, scroll progress bar, IntersectionObserver reveals.

---

## 5. SECTION-BY-SECTION BUILD SPECIFICATION

### 5.1 Header / Navigation
Sticky flex header: logo (`school` Material Symbol + "SkillSpark" wordmark), anchor links to all sections with smooth scrolling, theme toggle (1.3), primary CTA "Get Started", hamburger dropdown on mobile.

### 5.2 Hero
Two-column flex (stacks on mobile): left — eyebrow badge (`rocket_launch` icon + "New: 2026 Interactive Courses"), `h1` with a sun-yellow marker-highlight on a key word (e.g., "Learn Fast. Have Fun. **Level Up** Every Day."), benefit-driven subheadline, dual CTAs (`.btn-primary` "Start Learning Free" + outline "Watch Demo" opening the modal), trust row (5 `star` icons, "4.9/5 from 12,000+ learners", flat avatar stack of colored initial circles). Right — `.animated-illustration`: a flat CSS-composed scene of rounded shapes with Material Symbols (`menu_book`, `psychology`, `lightbulb`, `play_circle`) in palette colors, floating/pulsing keyframe animations, containing the animated `.progress-bar-flat` demo.

### 5.3 Features (3 cards)
Three `.course-card-flat` cards, each with a flat colored icon tile, title, 2–3 line description, and "Explore" link — colored by category: **Electric Blue** (`bolt`, "Learn by Doing" — interactive lessons and hands-on projects), **Vibrant Orange** (`emoji_events`, "Stay Motivated" — streaks, badges, XP), **Soft Purple** (`groups`, "Learn Together" — live sessions and community).

### 5.4 How It Works (3 steps)
Three steps with numbered flat badges (1 = Sun Yellow, 2 = Emerald, 3 = Shock Pink), icons (`person_add` → `play_circle` → `workspace_premium`), a connecting dashed progress line on desktop, staggered reveal animation. Copy: sign up free → learn with bite-sized interactive lessons → earn certificates and level up.

### 5.5 Testimonials
Three flat cards: colored initial-circle avatar, 5-star rating (filled `star` symbols), authentic-sounding quote, learner name + role (e.g., student, career switcher, teacher). Hover lift per 2.2.

### 5.6 Pricing (3 tiers)
Monthly/Annual toggle (annual shows a yellow "Save 20%" badge) with animated price swap announced via `aria-live`. Tiers: **Starter** (Free), **Pro** (highlighted: 2px `--secondary` border, "Most Popular" badge, `.btn-primary`), **Team**. Feature lists use `check_circle` (green) for included and `close` (gray) for excluded items; each tier has its own CTA with full button states per 2.1.

### 5.7 FAQ
Accordion per 2.5 with 5–6 real questions (certificates, refunds, offline access, canceling subscriptions, team plans) and genuine answers.

### 5.8 Final CTA
Full-width flat Electric Blue band (bold white text, yellow accents — verify contrast): `h2` headline, subcopy, and an inline email-capture form exercising all states from 2.3, with a success confirmation.

### 5.9 Footer
Flex/grid layout: brand column (logo, tagline, accessible social text links), "Platform", "Company", and "Support" secondary link columns, newsletter form (states per 2.3), bottom bar with copyright and legal links. All icon-only controls carry `aria-label`.

---

## 6. FINAL ACCEPTANCE CHECKLIST

Before delivering, verify: zero `style="..."` attributes; zero inline SVGs; zero inline scripts except the single deferred `script.js`; all colors via CSS variables; complete light **and** dark themes with persisted toggle; every interactive element has hover, focus, active, and (where applicable) loading/disabled/success/error states; full keyboard-only navigation pass; no horizontal scroll at 320px; all copy is real English; the classes `.course-card-flat`, `.animated-illustration`, and `.progress-bar-flat` are present and functional. Generate the final code now.
