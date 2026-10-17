# Coding AI Prompt — Ameba-Themed Landing Page

You are a frontend coding agent. Build a complete, production-quality landing page for a fictional supply-chain intelligence SaaS brand. **Do not use the name "Ameba," its logo, trademarks, or product names anywhere in the page.** Invent a fictional brand name, product name, and all copy. Reuse only the visual style described below.

## 1. File Structure & Architecture
- Deliver three separate files: `index.html`, `style.css`, `script.js`.
- No inline `style="..."` attributes anywhere in the HTML. All styling lives in `style.css` via class/ID selectors.
- Keep HTML semantic and agnostic of visual styling. Use one consistent class-naming convention (BEM) throughout.
- No inline `<script>` blocks beyond a single deferred entry-point reference to `script.js`.

## 2. CSS Variables & Theme Tokens
Define all tokens in `:root` and under `@media (prefers-color-scheme: dark)` plus a `.dark` class selector. Required tokens:

**Colors:**
- `--color-midnight-ink: #00052e` (primary canvas, hero/feature backgrounds)
- `--color-signal-blue: #0428cb` (violet outline accent; CTA fill, active timeline bars, particle visualization only)
- `--color-arc-cyan: #34fcff` (atmospheric glow only; never text/buttons/borders)
- `--color-halo-violet: #afb4db` (radial gradient midtone)
- `--color-carbon: #222222` (dark-mode text on light surfaces)
- `--color-slate-body: #4f5166` (body text on light sections)
- `--color-fog: #6b6b83` (muted text, helper copy, ghost nav links)
- `--color-mist: #8185a0` (tertiary/disabled text)
- `--color-silver-border: #dbdcdf` (hairline dividers on light surfaces)
- `--color-paper: #fefefe` (product surfaces, light sections; use #fefefe not #ffffff where near-white needed; pure #ffffff allowed for product paper token)
- `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` mapped to the above.

Enforce contrast pairing: light backgrounds pair with dark text tokens; dark backgrounds pair with light text tokens in both themes.

**Radius & Shadows:** `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 8px`; `--shadow-sm`, `--shadow-md` (keep subtle; no heavy shadows).

**Spacing & Transitions:** `--spacing-gap: 10px`, `--transition-fast`, `--transition-normal`, `--ease-standard`.

**Elevation/Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.

## 3. Mandatory Dark Mode
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Theme switching must be seamless without HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label`.

## 4. Typography
Use Google Fonts only. Load F37 Bolton substitute (Inter or GT America) for display/headlines at weight 300 with negative tracking; Open Sauce Sans substitute (Inter) for body; IBM Plex Mono for micro-labels/data. Bind to `--font-base` and component-specific font variables. Type scale tokens: `--text-micro` (11px), `--text-caption` (14px), `--text-body-sm` (16px), `--text-body` (18px), `--text-subheading` (27px), `--text-heading-sm` (35px), `--text-heading` (40px), `--text-heading-lg` (54px), `--text-display` (59px). Apply letter-spacing: -0.019em at 54-59px, -0.014em at 35px, -0.012 to -0.015em at 27-33px, 0.05em for eyebrow labels, 0.077-0.091em for mono micro-labels.

## 5. Layout & Flexbox
- Use Flexbox for all layout structures. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first responsive; convert rows to columns on small viewports; prevent horizontal scrolling.
- Page max-width 1200px; section gap 80px; card padding 20px; element gap 10px.
- Full-bleed dark hero → dark feature section with gradient transition → light product showcase rhythm.

## 6. Component Requirements
Implement with all states via CSS classes:

**Buttons:** default (flex, min 44x44px touch target, gap 0.5rem), hover (brightness/shadow, cursor pointer), focus (distinct ring via CSS vars), active (transform scale 0.97), loading (disabled, spinner, no dimension distortion), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback via success/error tokens). Primary CTA: filled #0428cb, white text, 14px display font weight 400, 8px radius, 20px vertical/horizontal padding, no border. Ghost nav links: text only, uppercase, 13-14px, letter-spacing 0.05em, #6b6b83 → hover #ffffff on dark. Sign-in link: uppercase text, white, no chrome.

**Cards:** default (flex, subtle borders, elevation via vars), hover (translateY -2px), focus-within (border highlight), loading (shimmer skeleton), empty state (icon + guidance text). Floating notification card: #00052e fill, 1px #6b6b83 or #4f5166 border, 8px radius, 20px padding, no shadow. Status dot 8px (#34fcff success, amber delay). Label IBM Plex Mono 11-13px 0.08em tracking #6b6b83. Body Open Sauce Sans 13-14px white.

**Forms/Inputs:** empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

**Modal/Popup:** opening, open, loading, success/error, closing (CSS transitions). Centered flex, backdrop overlay, Google Icon close button, focus trapping, close via Esc/overlay click.

## 7. Page Sections
Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

- **Hero:** centered headline (59px display font weight 300, white, -1.12px tracking) over #00052e background; subtext 18px body #6b6b83; particle sphere (radial composition of cyan dots) behind headline with radial gradient #06105a → #00052e; floating notification cards scattered at edges. Top nav fixed: wordmark left, uppercase links center (PRODUCT, CUSTOMER TYPES, COMPANY, RESOURCES, SECURITY) in #6b6b83, right: language selector with chevron, SIGN IN, primary CTA.
- **Features:** 3 cards on dark or light band per rhythm; eyebrow label #0428cb (dark) or #34fcff (on dark) 14px 0.05em; headline 40px weight 300.
- **How It Works:** 3 steps with diamond markers #0428cb/#34fcff, timestamps mono, event text sans.
- **Testimonials:** cards with hairline borders, no shadows.
- **Pricing:** 3 tiers, status pills/tags where relevant (4px radius, IBM Plex Mono 11px 0.08em tracking, muted green/red/gray tints).
- **FAQ:** accordion with focus states.
- **Final CTA:** dark band with primary CTA.
- **Footer:** secondary links, minimal.

## 8. UX & Micro-interactions (Global)
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely on color alone for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No drop shadows on cards/panels; hairline borders + radial glow for separation.
- Arc Cyan (#34fcff) atmospheric only — never text/buttons/borders.
- No warm hues for brand identity; strictly cold palette.
- No corner radius above 8px; no pill buttons.
- No semi-transparent white fills on dark cards; solid #00052e with hairline border.
- No gradient fills on UI elements; gradients only for hero atmosphere and section transitions.

## 9. Icons
Use Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 10. Deliverable Notes
- Invent fictional brand name, product name, and all copy in English.
- No lorem-ipsum-only where real copy can be supplied; placeholders only where content genuinely unspecified.
- Ensure all component states are styled via CSS classes.

Output only the finished code files. No preamble or closing commentary.
