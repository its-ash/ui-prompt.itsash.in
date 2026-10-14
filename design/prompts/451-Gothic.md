You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready **Gothic-themed landing page** in a single attempt. Atmosphere: dark, mysterious, cathedral-inspired grandeur — obsidian black, blood red, stone grey, bone white, pointed arches, intricate tracery, fog, eerie glow. Required sections: **Sticky Header/Nav, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.** All user-facing copy must be written in English.

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is **forbidden anywhere in the HTML**, including inside SVG elements.
- Target everything via class/ID selectors only. HTML must remain semantic and style-agnostic — restyling the site must never require touching markup.
- Decorative SVGs may carry structural/presentation attributes (`viewBox`, `fill`, `stroke`) as artwork data, but all interactive or state-driven styling (hover glow, color shifts) must target them via CSS classes.

**1.2 CSS Variables & Theme Tokens**
Store every visual token in `:root` and bind all components to them:

```css
:root {
  /* Palette — Obsidian / Blood / Stone / Bone */
  --primary: #8B0000;         /* Blood Red — fills, key accents */
  --primary-hover: #A81818;
  --secondary: #8B7355;       /* Tarnished Gold — accents, focus rings */
  --bg-primary: #0B0B0B;      /* Obsidian Black */
  --bg-secondary: #1A0A1A;    /* Deep purple-black (fog gradient endpoint) */
  --bg-elevated: #141014;     /* Card surfaces */
  --bg-accent: #2D0A3E;       /* Deep Purple — featured tier / band tint */
  --bg-alt: #0D1B2A;          /* Midnight Blue — alternating section band */
  --text-primary: #E8E0D0;    /* Bone White */
  --text-secondary: #A8A08C;   /* Aged bone — passes 4.5:1 on obsidian */
  --text-success: #8FA876;    /* Lightened Moss (base #4A5A3A = borders only) */
  --text-error: #C65656;     /* Lightened Blood Red for text (base #8B0000 = fills only) */
  --border-default: #5A5A5A;  /* Stone Grey — borders, ornaments. NEVER body text (fails contrast) */
  --border-error: #8B0000;
  --border-success: #6E7F55;
  --font-display: 'UnifrakturMaguntia', serif;  /* Blackletter — headings ONLY */
  --font-base: 'Cinzel', serif;
  --radius-sm: 0; --radius-md: 2px; --radius-lg: 4px;  /* Gothic = sharp; shape comes from clip-path, not rounding */
  --shadow-sm: 0 2px 8px rgba(0,0,0,.6);
  --shadow-md: 0 8px 24px rgba(0,0,0,.7);
  --glow-red: 0 0 30px rgba(139,0,0,.2);
  --glow-red-strong: 0 0 42px rgba(139,0,0,.45);
  --glow-text: 0 0 10px rgba(139,0,0,.3);  /* Display headings only — never body text */
  --spacing-gap: 1.5rem;
  --transition-fast: 300ms ease;
  --transition-normal: 600ms ease;  /* Dramatic gothic pacing */
  --ease-standard: ease;
  --z-dropdown: 100; --z-modal: 200; --z-toast: 300;
}
```

- **Contrast pairing is mandatory:** every dark background pairs with Bone White text; every light/parchment surface pairs with Obsidian text. Blood Red fills always pair with Bone White text (≈7.7:1). Verify pairing in both themes.
- Light surfaces must never be `#ffffff`; use `#fefefe` if a near-white is unavoidable, otherwise parchment `#E8E0D0`.
- **clip-path gotcha:** `clip-path` clips `box-shadow`. Apply eerie glows on clipped arch elements via `filter: drop-shadow(...)` or an unclipped wrapper element.
- Cathedral window frames: since clip-path also clips real borders, build arch-following borders with **two nested clipped elements** (outer element filled with Stone Grey, inner panel inset ~3px filled with the surface color, same polygon).

**1.3 Mandatory Dark Mode Support (Dark-First Theme)**
- Gothic is a full-dark theme: the dark palette above is the **canonical default** in `:root`. Mirror the same tokens under a `.dark` class and `@media (prefers-color-scheme: dark)` so dark applies regardless of OS setting.
- Provide a **visible toggle in the header** using Material Symbols (`dark_mode`/`light_mode`) with correct `aria-pressed` and `aria-label`. Persist choice via `localStorage`; fall back to `prefers-color-scheme` on first visit. Switching themes must swap variables only — no HTML restructuring.
- The alternate "Candlelit" light theme: parchment `#E8E0D0` backgrounds, Obsidian `#0B0B0B` text, Blood Red and Tarnished Gold accents preserved, fog/glow softened — all contrast-paired, never pure white.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout container with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified (e.g., form `.input-group` uses `flex-direction: column; align-items: stretch` so inputs fill width).
- Mobile-first: multi-column rows (features, steps, testimonials, pricing) collapse to a single column below ~768px. **No horizontal scrolling at any viewport** — contain fog layers inside their sections and never animate elements past viewport bounds.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS for layout/spacing utilities; define all themed components as reusable classes (`.btn`, `.card`, `.input-group`, `.arch-frame`) in `@layer components` via `@apply` or raw CSS bound to the tokens above. Utility classes must never hardcode hex values — everything maps back to CSS variables.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load **UnifrakturMaguntia** (blackletter display) and **Cinzel** (serif body) via Google Fonts `<link>` in `<head>`; bind to `--font-display` and `--font-base`.
- Blackletter is decorative and illegible at small sizes: use it **only** for the hero `<h1>` and section `<h2>`s. Body copy, navigation, buttons, labels, and inputs use Cinzel (letter-spacing / small-caps for eyebrows and nav links).
- UI icons: **Google Material Symbols exclusively** — thematic choices include `church`, `castle`, `shield`, `key`, `auto_stories`, `nights_stay`, `candlelight`, `skull`, `expand_more`, `check`. No other icon fonts.
- **Exception clause:** raw inline SVGs remain forbidden for UI icons, but decorative architectural artwork — tracery patterns and gargoyle/ornament figures — is the single permitted inline-SVG exception; prefer tracery as CSS `background-image` SVG data-URIs so the HTML stays clean, and never place `style="..."` on any SVG.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
All states via CSS classes; base: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target, Cinzel uppercase, sharp corners, 2px solid border.
- **Variants:** `.btn--primary` (Blood Red fill, Bone White text), `.btn--ghost` (transparent, Stone Grey border → Tarnished Gold border on hover), `.btn--danger` (visually distinct in both themes).
- **Hover:** brightness shift + `--glow-red`, `cursor: pointer`.
- **Focus-visible:** distinct 2px Tarnished Gold ring with offset for keyboard navigation.
- **Active:** `transform: scale(0.97)`.
- **Loading:** `aria-busy="true"`, interactions blocked (no double submits), CSS spinner that does not change button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`.

**2.2 Card Component**
- **Default:** `.card` — `--bg-elevated` surface, 2px Stone Grey border, sharp corners, flex column, centered content.
- **Arch variant:** `.card--arch` — pointed-arch silhouette via `clip-path: polygon()`. Starting value (refine as needed, it scales by percentage):
  `clip-path: polygon(50% 0%, 60% 2%, 70% 5%, 79% 10%, 87% 16%, 93% 24%, 97% 33%, 100% 42%, 100% 100%, 0% 100%, 0% 42%, 3% 33%, 7% 24%, 13% 16%, 21% 10%, 30% 5%, 40% 2%)`
- **Hover:** `transform: translateY(-2px)` + eerie glow (`drop-shadow` on clipped elements).
- **Focus-within:** border shifts to Tarnished Gold when a child link/button receives focus.
- **Loading:** `.card--skeleton` shimmer animation defined in CSS; no layout jumps.
- **Empty state:** structured fallback with a Material Symbol icon and guidance text.

**2.3 Form & Input Requirements**
- `.input-group`: flex column (`align-items: stretch` — justified exception) wrapping label, input, and a dedicated error container with `aria-live="polite"`.
- **States:** empty, focused (Tarnished Gold ring), filled, valid (moss border + Material check icon), invalid (blood border, `--text-error` message + error icon — never color alone), disabled, read-only.
- Used for the Final CTA email capture: validate on submit, show inline errors, then a success state with confirmation copy.

**2.4 Accordion (FAQ)**
Each item: `<button aria-expanded aria-controls>` header + panel region; Material `expand_more` icon rotating over `var(--transition-normal)`; fully keyboard operable; smooth height transition; state never communicated by color alone.

**2.5 Modal / Popup (if any confirmation dialog is used, e.g., plan selection)**
Centered flex overlay (`align-items: center`), backdrop, Material Symbol close button, close via `Esc` and overlay click, keyboard focus trap, animated open/close (600ms), loading and success/error states, `z-index: var(--z-modal)`.

**2.6 Page Section Blueprint (Gothic Landing Page)**
1. **Header (sticky):** Obsidian bar, subtle Stone Grey bottom border with a thin tracery strip; brand name in blackletter; anchor links in Cinzel with gold underline on hover/focus; theme toggle; mobile hamburger (`aria-expanded`, animated dropdown panel, `--z-dropdown`). Add `scroll-margin-top` to sections for anchor offset.
2. **Hero:** ~100vh; background fog = `linear-gradient(to bottom, #0B0B0B, #1A0A1A)` plus layered radial-gradient fog pseudo-elements with a slow drift animation; cathedral window frame (nested clipped elements) wrapping the headline; blackletter `<h1>` with `--glow-text`; Cinzel subheading; primary + ghost CTAs; gargoyle ornaments flanking (inline-SVG exception, hidden or rescaled on mobile); scroll cue.
3. **Features:** eyebrow + blackletter `<h2>`; three `.card--arch` cards in a flex row (column on mobile); Material Symbol icon inside a Tarnished Gold–ringed medallion; hover glow + lift.
4. **How It Works:** Midnight Blue band (`--bg-alt`); three steps numbered with Roman numerals I / II / III in Tarnished Gold; tracery divider between steps (CSS background pattern).
5. **Testimonials:** three quotes set in cathedral window frames; gold quotation ornament; name + role attribution; static responsive grid.
6. **Pricing:** three tiers; middle tier `.card--featured` with Deep Purple tint (`--bg-accent`), Blood Red border, `--glow-red`, and a Tarnished Gold "Most Coveted" badge; Material `check` icons for feature lists; one CTA button per tier.
7. **FAQ:** 5–6 accordion items per 2.4.
8. **Final CTA:** arch-framed panel over fog and glow; email `.input-group` + `.btn--primary`; `aria-live` feedback; success state.
9. **Footer:** brand, secondary link columns (e.g., Product / Company / Legal), Material Symbol social icons, copyright; Stone Grey top border with tracery pattern.

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid type via `clamp()`; no horizontal overflow at any width; test arch clip-paths at mobile sizes.
- **Smooth animations:** every state change transitions with `var(--transition-normal)` (600ms dramatic pacing); transition explicit properties rather than `all`.
- **Reduced motion:** under `prefers-reduced-motion`, disable fog drift, glow pulses, lifts, spinner rotation, and smooth scrolling; keep instant state changes.
- **Accessibility:** maintain ≥4.5:1 contrast for body text and ≥3:1 for large text/UI in both themes (the token table above is pre-tuned for this); never rely on color alone; semantic landmarks (`header`, `nav`, `main`, `section`, `footer`); logical heading order h1→h2→h3; skip-to-content link; visible `:focus-visible` styles everywhere; full keyboard operability for nav, toggle, accordion, forms, and any modal; `aria-live` regions for all dynamic feedback.
- **Mandatory visual feedback:** every click, hover, focus, and submission triggers a visible state change.
- **Destructive actions:** `.btn-danger` must be visually distinct in both dark and light themes.
- **Glow discipline:** `text-shadow` glow only on display headings — never on body text, buttons, or inputs.

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, `script.js`. Only a single `<script src="script.js" defer>` reference — no inline script blocks, no inline styles.
- **Naming:** BEM consistently across the entire deliverable (`.hero__title`, `.card--arch`, `.pricing__tier`, `.faq__item`, `.input-group__error`). Never mix conventions.
- **Head:** Google Fonts links (UnifrakturMaguntia, Cinzel) and the Material Symbols stylesheet.
- **Copy:** write original, coherent English copy in a mysterious, grand gothic voice — invent a fitting brand name. No lorem ipsum; every section receives real content.
- **No unrequested placeholders:** deliver a complete, runnable page on the first attempt.
