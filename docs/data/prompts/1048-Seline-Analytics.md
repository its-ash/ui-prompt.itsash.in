# Coding AI Prompt — Seline Analytics Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a **fictional** analytics SaaS product. Do NOT use the real brand name "Seline", its logo, trademarks, or product names. Invent a fictional brand name, product name, and all copy. The visual style must follow the "Seline Analytics" style reference exactly (warm-stone canvas, single cyan accent, Roobert display + Inter body, pill buttons, flat cards with hairline borders, editorial pacing). Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline CSS. No inline `<script>` blocks beyond a single deferred entry-point reference.

## 2. Mandatory Architecture Rules

### 2.1 CSS-First, Zero Inline CSS
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors only. Keep HTML semantic, clean, and styling-agnostic.

### 2.2 CSS Variables & Theme Tokens
Define all tokens in `:root` using CSS variables. Required token groups:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, plus the full Seline palette as named tokens: `--color-stone-canvas` (#fafaf9), `--color-pure-white` (#ffffff), `--color-stone-border` (#e8e6e5), `--color-stone-muted` (#d6d3d1), `--color-ash-gray` (#a8a29e), `--color-warm-gray` (#78716c), `--color-ink-black` (#0c0a09), `--color-soot` (#1c1917), `--color-sky-wash` (#c1e1f7), `--color-cyan-signal` (#3ba6f1), `--color-cyan-edge` (#3398e1).
- Map semantic tokens: `--bg-primary: var(--color-stone-canvas)`, `--bg-secondary: var(--color-pure-white)`, `--text-primary: var(--color-ink-black)`, `--text-secondary: var(--color-warm-gray)`, `--primary: var(--color-cyan-signal)`, `--border-default: var(--color-stone-border)`.
- Contrast pairing: light backgrounds pair with dark text; dark backgrounds (inverted sections) pair with light text.
- Light mode background must be #fafaf9 (not pure white). Use #fefefe only where near-white is needed.
- Border radius: `--radius-sm` (4px), `--radius-md` (6px), `--radius-lg` (10px), `--radius-pill` (9999px).
- Shadows: `--shadow-subtle`, `--shadow-sm`, `--shadow-md`, `--shadow-xl` with the exact values from the spec.
- Spacing: `--spacing-4` through `--spacing-160` per the 4px scale.
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

### 2.3 Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Theme switching must swap background/text variables seamlessly without HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label`.

### 2.4 Flexbox & Mobile-First
- Use Flexbox (`display: flex`) for all layouts. Default `align-items: center` on every flex container unless explicitly justified.
- Mobile-first: convert rows to columns on small viewports. Prevent horizontal scrolling.

### 2.5 Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless another framework is requested. Utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons (Google Fonts Mandatory)
- Text: Google Fonts. Use Inter (substitute for Roobert where needed, but prefer "Inter Tight" or "Satoshi" via Google Fonts for display; if unavailable, use Inter with tight tracking). Bind to `--font-base` and `--font-display`.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files. (Exception: the mascot sticker is an outline-only SVG illustration as specified — this is the only permitted inline SVG, used once per section.)

## 3. Component Specifications

### 3.1 Button
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min touch target 44x44px.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disable interactions, prevent double-clicks, render CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.
- Primary CTA: pill (9999px), fill #3ba6f1, 1px border #3398e1, white text weight 500, padding 8px 16px. Only chromatic filled element per viewport.
- Secondary ghost: pill, transparent fill, 1px border #e8e6e5, text #0c0a09 weight 400, padding 8px 16px.

### 3.2 Card
- Flat content card: white fill, 10px radius, 1px border #e8e6e5, 24px padding, subtle shadow. Border IS the structure.
- Floating dashboard preview: 16px radius, white fill, deep shadow (rgba(17,12,46,0.12) 0px 12px 45px 0px), 8px internal padding, `filter: grayscale(1) contrast(0.94)`.
- Hover: elevation/shadow shift or `transform: translateY(-2px)` (where interactive).
- Focus-within: highlight borders when child link/button receives focus.
- Loading (skeleton): shimmer animation in CSS, no layout jumps.
- Empty state: Google Icon + guidance text.

### 3.3 Form & Input
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container.
- Text input: white fill, 6px radius, 1px border #d6d3d1, placeholder #78716c, padding 4px 12px, focus ring 2px #3ba6f1.

### 3.4 Modal / Popup
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 4. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes; never rely solely on color; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 5. Page Sections (in order)
1. **Nav**: minimal top bar — logo (spark glyph + wordmark in Inter 500 14px #0c0a09) left, centered nav links (Pricing, About, Platform, Resources) in 14px Inter #78716c with hover to #0c0a09, floating avatar cluster (4 overlapping 24px circles, 2px ring, -8px overlap) mid-nav as social proof, sign-in link + cyan CTA right.
2. **Hero**: two-row text block left-aligned. Headline 52px Roobert weight 400 #0c0a09, line-height 1.12, letter-spacing -1.092px, with exactly one highlighted span: phrase "simple & actionable" as #3398e1 text on #c1e1f7 pill background (padding ~2px 8px, radius 4px). Subheadline 16px Inter weight 400 #78716c line-height 1.69. Dual-CTA row: cyan pill + ghost pill. Row of grayscale partner logos. Star-rating trust line (5 ★ in #0c0a09 + platform name in 14px Inter #78716c). Full-width floating dashboard preview overlapping slightly into next section.
3. **Features**: 3 flat content cards in a grid. Each: white fill, 10px radius, 1px border #e8e6e5, 24px padding, subtle shadow. Heading 32px Roobert weight 400 #0c0a09, body 14px Inter #78716c. Include a mascot sticker (outline SVG, drop-shadow) once in this section.
4. **How It Works**: 3 steps, each with a numbered indicator, heading, and description. Use stone neutrals + cyan accent for step numbers.
5. **Testimonials**: alternating single-column rows in 2-column grid. No card chrome. Star row (5 ★ in #0c0a09), quote 16px Inter #0c0a09 line-height 1.69 with inline cyan highlight span on emphasized phrase, 32px circular avatar + name (14px Inter 500 #0c0a09) + role (14px Inter #78716c). Vertical gap 16px.
6. **Pricing**: 3 tiers. Flat content cards. Highlight the recommended tier with cyan border/accent. Pill buttons.
7. **FAQ**: accordion-style, hairline borders, expand/collapse with CSS transitions. Use Google Material Icons for chevrons.
8. **Final CTA**: centered text block with headline (with one highlight span), subheadline, cyan pill CTA. Inverted section (#1c1917) optional for contrast.
9. **Footer**: secondary links, logo, copyright. Stone neutrals.

## 6. Style Rules (Do/Don't)
- Use Roobert (or substitute) at weight 400 for all display/heading sizes — never 600/700; rely on size + cyan highlight span.
- Page background #fafaf9; card surfaces #ffffff only. Never invert.
- Exactly one cyan highlight span (#3398e1 text + #c1e1f7 pill bg) per headline.
- 1px #e8e6e5 borders as primary structural separator inside cards; reserve deep shadow for product-preview card only.
- Buttons pill-shaped (9999px) with 8px 16px padding; cyan filled CTA is the only chromatic filled element per screen.
- Body copy 14px Inter weight 400, line-height 1.64.
- Mascot sticker once per section, not animated.
- No new accent colors; no heavy drop shadows on content cards; no headlines in Inter; no #ffffff page background; no dark/neutral filled primary buttons; no gradients/glassmorphism; no multiple cyan highlight spans per headline.

## 7. Imagery
- Dashboard preview treated as photography with `filter: grayscale(1) contrast(0.94)`.
- Mascot: outline-only SVG sticker with drop-shadow, once per section.
- Logo: small black spark/flame glyph.
- All decorative icons: 1px-stroke outline style in #0c0a09 or #3ba6f1, never filled. Use Google Material Symbols.

## 8. Layout
- Max-width centered ~1200px. Section gaps 96px. Card padding 24px. Element gap 8px.
- Hero: left-aligned text, dual-CTA, partner logos, star rating, floating dashboard preview overlapping next section.
- Nav: logo left, centered links, avatar cluster mid-nav, sign-in + cyan CTA right.

## 9. Naming Convention
Enforce BEM (`.block__element--modifier`) consistently across all classes. No mixed conventions.

## 10. Deliverables
- `index.html`, `style.css`, `script.js` as separate files.
- No unrequested placeholders where real copy is implied; use realistic fictional copy for all sections.
- All user-facing copy in English.

## 11. Edit Mode Note
N/A — this is a from-scratch build.

## 12. Final Instruction
Generate only the three files. Do not include any preamble or commentary. Ensure every interactive element has all states defined, dark mode works, accessibility is complete, and the page is fully responsive. Use fictional brand/product names and copy throughout — never reference "Seline" or any real brand.
