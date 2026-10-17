# UI/UX Coding Prompt — Arcadia-Themed Landing Page

## 1. Strict Architecture Rules

**1.1 CSS-First & Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors only. Keep HTML semantic, clean, and styling-agnostic.
- Changing the look must require editing only `style.css`.

**1.2 CSS Variables & Theme Tokens**
Store every token in `:root` (and dark-mode overrides) using CSS variables. Required tokens:
- Colors: `--primary` (#104336 Canopy), `--secondary` (#0fff87 Mint Pulse), `--bg-primary` (#f3f1ec Cream Paper), `--bg-secondary` (#ffffff Sheet White), `--text-primary` (#101f1e Bark), `--text-secondary` (#535e5d Slate), `--text-success`, `--text-error`, `--border-default` (#afc4bf Sage Mist), `--border-error`, `--border-success`, plus `--color-canopy`, `--color-mint-pulse`, `--color-orb-violet` (#7c18d3), `--color-ink` (#000000), `--color-charcoal` (#333333), `--color-muted-slate` (#798281), `--color-pale-sage` (#c2cec8), `--color-hero-wash` (linear-gradient(212.12deg, #afc4bf 14.83%, #e8e7f5 52.99%, #f1eee9 79.47%)).
- Contrast pairing enforced in every theme.
- Light-mode background uses #f3f1ec (not pure white); where near-white is needed use #fefefe.
- Radius/shadows: `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (16px), `--shadow-sm`, `--shadow-md` (keep shadows minimal/unused per theme).
- Spacing/transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode**
- Provide dark-mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background/text variables switch seamlessly without HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit; include a visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox & Mobile-First**
- Use Flexbox for all layouts. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box (rows → columns on small viewports). No horizontal scrolling.

**1.5 Framework**
- Use Tailwind CSS (or clean custom CSS via `@layer`/`@apply`). Utility classes map to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: DM Sans via Google Fonts (`--font-dm-sans`), weights 300/400/500/700, OpenType `"ss01" on`. Substitute Inter if unavailable.
- Icons: Google Material Symbols/Icons only. No inline SVGs or local icon files.

## 2. Component Specifications

**2.1 Buttons**
- Default: flex, align-items center, justify-content center, gap 0.5rem, min touch target 44x44px.
- Hover: brightness/shadow shift, cursor pointer.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disables interactions, CSS spinner/animated Google Icon, no dimension distortion.
- Disabled: opacity 0.5, greyscale, cursor not-allowed.
- Success/Error: temporary styles via `--text-success`/`--text-error`.
- Variants: Primary CTA (Canopy fill, white text, 8px radius, 15-16px vertical / 24px horizontal padding, DM Sans 14-15px weight 500, no gradient/shadow); Mint Accent Button (Mint Pulse fill, Bark text, same padding — reserved for single most important action per screen); Ghost/Outlined (transparent, 1px Canopy or Sheet White border, brand text, 8px radius).

**2.2 Cards**
- Default: flex layout, subtle borders, elevation via `--bg-secondary` + CSS variables, 16px radius, 1px Sage Mist border (no shadow), padding 24-40px.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight border when child link/button focused.
- Loading (Skeleton): shimmer animation in CSS, no layout jumps.
- Empty State: Google Icon + guidance text.

**2.3 Forms & Inputs**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container. Input radius 4px.

**2.4 Modal/Popup**
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- UX: centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via Esc or overlay click.

## 3. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth CSS transitions on state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 4. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM or fixed utility set) throughout.
- No lorem-ipsum where real copy is supplied; placeholders only where content genuinely unspecified.
- Invent a fictional brand name, product, and copy. Never use the real brand name "Arcadia", its logo, trademarks, or product names anywhere in the page.

## 5. Landing Page Sections Required
Build a complete landing page with these sections in order:

1. **Announcement Bar** — full-bleed Canopy band, 8-12px vertical padding, centered white DM Sans 13-14px weight 400, optional right-arrow link.
2. **Top Navigation** — Sheet White, 64-72px height, fictional wordmark left in Canopy, DM Sans 14-15px weight 400 nav items with caret dropdowns, ghost "Sign in" button, filled Canopy "Request demo" CTA (8px radius). Sticky on scroll.
3. **Hero** — Cream Paper base with diagonal gradient wash (212deg, #afc4bf → #e8e7f5 → #f1eee9). Centered headline 48-56px DM Sans weight 300, -0.02em tracking, in Ink. Supporting copy 16-18px weight 400 in Slate. Primary CTA below (Canopy fill). Optional product dashboard mockup centered ~80% width.
4. **Logo Strip** — 6-8 monochrome dark partner logos (Bark), evenly distributed, 40-80px column gap, no captions.
5. **Features** — 3 cards. Sheet White, 16px radius, 1px Sage Mist border, no shadow. Each: eyebrow label (13px DM Sans weight 700 uppercase 0.07em), heading, body copy, icon (Material Symbols). Internal padding 24-40px.
6. **How It Works** — 3 steps. Centered headline + 3 numbered steps with icons, titles, descriptions. Flex row → column on mobile.
7. **Network Diagram Section** — Cream Paper background. Centered eyebrow + 48px weight 300 headline. Floating 3D-style orbs (16-24px radius) in Orb Violet, Mint Pulse, pale lavender, connected by thin 1px dotted Sage Mist lines. Each orb pairs with a white pill label (DM Sans 13px weight 700 uppercase 0.07em, 4px 12px padding, 9999px radius).
8. **Isometric Feature Section** — 2-column split: 3D illustration left (mint-tinted gradient #e8f0ec → #f1eee9 background), text block right. No card borders.
9. **Testimonials** — 3 testimonial cards. Sheet White, 16px radius, 1px Sage Mist border. Quote, author name, role, avatar placeholder (Material Symbols). No shadows.
10. **Pricing** — 3 tiers. Sheet White cards, 16px radius, 1px Sage Mist border. Tier name, price (36px weight 500), feature list with check icons, CTA button. Middle tier highlighted with Mint Accent Button for its CTA.
11. **FAQ** — Accordion-style. Questions in Bark, answers in Slate. Expand/collapse via CSS transitions. Keyboard accessible.
12. **Final CTA** — Centered headline + supporting copy + Mint Accent Button (single most important action). Cream Paper or gradient background.
13. **Footer** — Canopy background, white DM Sans 13-15px text, multi-column link lists, fictional wordmark in white, social icons (Material Symbols) in white outline. 80-120px vertical padding.

## 6. Theme-Specific Styling Rules
- Display headlines: 48-56px DM Sans weight 300, -0.02em tracking, in Ink (#000000).
- Eyebrow labels: 13px DM Sans weight 700, 0.07em tracking, uppercase, in Mint Pulse / Canopy / Orb Violet.
- Sub-headlines: 18-24px DM Sans weight 500, 0.01em tracking.
- Body: 16px DM Sans weight 400, line-height 1.5, in Bark/Slate.
- Section vertical gaps: 80-120px.
- Card radius 16px; button radius 8px; input radius 4px; pill radius 9999px only for network-diagram labels.
- No drop shadows on cards or buttons. Separation via color step + 1px Sage Mist borders.
- Hero gradient: linear-gradient(212.12deg, #afc4bf 14.83%, #e8e7f5 52.99%, #f1eee9 79.47%).
- Isometric section gradient: #e8f0ec → #f1eee9.
- Page max-width 1200px centered; hero and announcement bar full-bleed.
- Decorative gradients only on hero/isometric sections — never on buttons, cards, or text backgrounds.
- No photography; visual language is diagrammatic/illustrative with violet orb accents.

## 7. Dark Mode Overrides
- Dark canvas: shift Cream Paper to a deep forest-adjacent dark (e.g., #0d1a17), cards to #162420, text to light cream, borders to muted sage.
- Maintain contrast pairing for every token.
- Mint Pulse and Orb Violet remain accent colors; ensure legibility on dark surfaces.

## 8. Accessibility & Motion
- Respect `prefers-reduced-motion`: disable shimmer, transforms, and transitions.
- Focus rings visible in both themes.
- All interactive elements keyboard-operable.
- `aria-live` regions for FAQ expand, form errors, loading states.
- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`.

Output only the three files: `index.html`, `style.css`, `script.js`. No preamble.
