# Coding Agent Prompt — Complete Landing Page (Aira Style Reference)

You are building a complete, production-ready landing page. The visual language is the "Aira" style reference: an editorial-monochrome, Sunday-broadsheet-at-midnight aesthetic. **You must invent a fictional brand name, product, and all copy. Never use the real brand name "Aira", its logo, trademarks, or product names anywhere in the deliverable.** All user-facing copy must be written in English.

## 1. Architecture & Styling Rules (Mandatory)

**1.1 CSS-First, Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors. HTML stays semantic and styling-agnostic so the look can change by editing CSS only.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` (and theme classes) using CSS variables:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Light-mode background must not be pure white; use `#fafafb` (bone white) as the canvas. Where a near-white is needed, use `#fefefe`.
- Contrast pairing: every light background token pairs with a dark text token and vice versa, in both light and dark themes.
- Border radius & shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.
- Spacing & transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode**
- Provide dark-mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text variables switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit; provide a visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox Layout & Mobile-First**
- Build all layouts with Flexbox (`display: flex`).
- Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- Mobile-responsive out of the box: rows collapse to columns on small viewports; no horizontal scrolling.

**1.5 Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). Utility classes map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: Google Fonts only. Use Fraunces (substitute for Gestura) for display headlines and Inter for all functional UI. Bind to `--font-base`/`--font-display`.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 2. Theme Token Specification (Aira Style)

Apply these exact values:

Colors:
- `--color-bone-white`: #fafafb (canvas, card surfaces, button text, input fills)
- `--color-graphite-ink`: #2c2c2b (primary borders, hairlines, link underlines, heading accents)
- `--color-deep-coal`: #1f1f1f (high-contrast neutral action fill)
- `--color-obsidian`: #111111 (body/heading text max weight, dark hero overlays, icon strokes)
- `--color-press-black`: #080808 (hardest text/button fills)
- `--color-stone`: #70706f (secondary body text, helper copy, muted icons)
- `--color-fog`: #cbcbcb (disabled borders, low-emphasis outlines)
- `--color-ash-gray`: #e3e3e3 (badge fills, input borders, tag backgrounds)
- `--color-cloud`: #ededed (elevated card backgrounds)
- `--color-slate`: #444444 (mid-weight button borders)

Typography:
- Display: Fraunces, weights 400/600, sizes 36/48/56/66px, line-height 1.00–1.20, letter-spacing -0.020em at 66px → -0.007em at 14px (always negative, tighter as size grows).
- Functional: Inter, weights 400/500/600/700, sizes 10/12/13/14/15/16/18/72px, line-height 1.20–1.50 body / 0.80–1.00 oversized utility, letter-spacing -0.060em at 72px → -0.009em at 16px, +0.140em for uppercase eyebrows.
- Type scale tokens: caption 12px/1.4/0.14px; body-sm 14px/1.4/-0.01px; body 16px/1.5/-0.009px; subheading 20px/1.4/-0.015px; heading-sm 30px/1.2/-0.02px; heading 36px/1.2/-0.02px; heading-lg 48px/1.15/-0.015px; display 66px/1.0/-0.02px.

Spacing & shapes:
- Base unit 4px. Spacing scale: 4,8,12,16,20,24,32,36,40,56,64,80,120,192px.
- Border radius: cards 16px, badges 999px, images 8px, inputs 8px, buttons 999px.
- Shadows: lg `rgba(0,0,0,0.08) 0px 1px 20px 3px`; xl `rgba(0,0,0,0.18) 0px 20px 60px 0px, rgba(0,0,0,0.08) 0px 4px 16px 0px`.
- Layout: max-width 1200px, section gap 80px, card padding 24px, element gap 8px.

Surfaces: bone white canvas #fafafb (level 0), cloud #ededed (level 1), ash #e3e3e3 (level 2), obsidian #111111 (level 3).

## 3. Component Specifications (Mandatory States)

**Buttons (all pill, 999px radius):**
- Filled pill: bg #111111, text #fafafb, Inter 14-16px weight 500, padding 10px 20px, no shadow/border.
- Outlined pill: transparent bg, 1px border #cbcbcb (light) or #fafafb (on dark hero), text matches border, Inter 14-16px weight 500, padding 10px 20px.
- Dark inverted pill: bg #1f1f1f, text #fafafb, padding 12px 24px.
- All states: default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px touch target), hover (brightness/shadow shift, cursor pointer), focus (distinct ring via CSS vars), active (transform scale 0.97), loading (disabled, CSS spinner/animated icon, no dimension change), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary --text-success/--text-error feedback).

**Cards:** default (flex, subtle borders, elevation via --bg-secondary + vars), hover (elevation/shadow shift or translateY(-2px)), focus-within (border highlight), loading skeleton (shimmer CSS, no layout jump), empty state (Google Icon + guidance text).

**Forms/Inputs:** states empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Structure: flex container wrapping label, input, dedicated error feedback container.

**Modals:** opening/open/loading/success-error/closing animated via CSS transitions; centered flex (align-items center), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 4. UX & Micro-Interaction Rules (Mandatory)

- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes; never rely on color alone; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 5. Landing Page Sections to Build

1. **Hero** — Full-bleed warm photograph background with dark overlay. Left column ~40%: eyebrow 12px Inter weight 500, +0.14em tracking, uppercase, #70706f; headline 66px Fraunces weight 400, #fafafb, letter-spacing -0.02em, line-height 1.00; body 18px Inter weight 400, #fafafb, line-height 1.50; two buttons horizontally with 8px gap (filled pill + outlined pill). Right column ~50%: phone mockup with soft shadow 0 20px 60px rgba(0,0,0,0.18). Nav bar transparent over hero, becomes #fafafb with 1px bottom border #ededed on scroll; logo left, nav links centered 14px Inter weight 500 #fafafb/#1f1f1f 32px gap, right cluster outlined 'Sign in' + filled 'Try Aira' pill 8px apart.
2. **Features** — 3 cards. Dark inverted feature cards on light canvas: bg #111111, radius 22px, padding 48px; inside centered white phone mockup card radius 16px, 60px internal padding, layered shadow. Eyebrow + serif headline + body per card.
3. **How It Works** — 3 steps. Centered stack: eyebrow → serif headline → body → single input, 80-120px vertical breathing room. Each step numbered with Google Material Icon.
4. **Testimonials** — Light section, elevated cards #ededed, hairline borders #2c2c2b, serif quote headline, Inter attribution.
5. **Pricing** — 3 tiers. Pill buttons for CTAs; dark inverted card for featured tier; hairline borders; no chromatic accents.
6. **FAQ** — Accordion using Flexbox, hairline dividers, expand/collapse via CSS transitions, keyboard accessible.
7. **Final CTA** — Dark inverted section, serif headline, filled pill button.
8. **Footer** — Secondary links, Inter 14-16px, 1px underline #2c2c2b on hover, no blue links.

## 6. Do's and Don'ts (Enforce)

Do: use Fraunces for all display headlines 36-66px with negative letter-spacing; pair every serif headline with 12px Inter eyebrow +0.14em Stone #70706f; all buttons pills (999px); #1f1f1f/#111111 fills with #fafafb text; invert surface contrast for major blocks; Inter 14-16px weight 400-500 for body/nav/inputs; let photography carry warmth, UI stays paper-quiet.

Don't: no blue/green/red/chromatic accents; no Inter headlines >24px; no shadows to separate same-surface cards (use hairlines or inversion); no square/4-8px radius on buttons/badges; no bright/saturated hovers (underline or 1-shade border darken only); no light-on-light or dark-on-dark without 15:1+ contrast; no gradients/glows/colored blurs; only phone-mockup soft shadow allowed.

## 7. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM or fixed utility set) throughout; never mix.
- No lorem-ipsum-only where real copy/labels are implied; placeholders only where genuinely unspecified.
- Use a fictional brand name and product; never reference "Aira".

## 8. Edit Mode (N/A — from-scratch build)

This is a from-scratch build, not an edit of existing markup. If any requested style change cannot be achieved without adding markup, stop and ask the user rather than silently inserting HTML.

## 9. Output

Output only the finished prompt itself — no preamble, no closing commentary. Mirror the numbered-header structure above. All copy in English. Keep CSS variable names, class names, and file names in English/ASCII.
