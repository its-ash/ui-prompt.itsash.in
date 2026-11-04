# Generated Coding-AI Prompt — Free Podcast Hosting Landing Page

## 1. Project Overview & Architecture Rules

Build a complete, responsive landing page for a fictional podcast-hosting product. **Do not use the real brand name "Buzzsprout", its logo, trademarks, or product names anywhere in the page.** Invent a fictional brand name, product name, and all copy. The visual style must follow the "Botanical broadcast studio" design language described below.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."` forbidden). All styling lives in `style.css` via class/ID selectors only. Use one consistent naming convention (BEM) across the entire deliverable.

## 2. CSS-First Architecture & Theme Tokens

Store all visual tokens in `:root` using CSS variables. Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. User theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit; include a visible toggle control with correct `aria-pressed`/`aria-label`.

Required color tokens:
- `--color-forest-canopy: #214538` (primary brand action)
- `--color-studio-ink: #151e1b` (primary body/heading text)
- `--color-graphite-body: #4d4d4f` (secondary/helper text)
- `--color-ash-border: #e4e5e6` (default hairline border)
- `--color-fog-surface: #f4f4f4` (subtle alt background)
- `--color-moss-wash: #e5ede9` (brand-tinted card surface)
- `--color-paper-white: #fefefe` (page canvas — use #fefefe, not #ffffff, where near-white is needed)
- `--color-cast-iron: #000000` (icon fills, sparingly)
- `--color-citrus-note: #faefc3` (warm highlight card surface only)
- `--color-link-green: #208619` (link/tag accent)

Also define the standard meta-tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.

Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds with light text, in every theme.

Border radius tokens: buttons 4px, cards/inputs/images 8px, avatars 9999px, feature cards 12px.

Shadows: `--shadow-xl` (0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)) for product mockup cards; `--shadow-xl-2` (0px 10px 36px 0px rgba(0,0,0,0.16)) for rare spotlight cards. Cards otherwise rely on hairline borders, not elevation.

Spacing base unit 4px. Spacing scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 80, 96, 100, 128, 132, 156 (px). Page max-width 1200px. Section gap 80px. Card padding 24px. Element gap 16px.

## 3. Typography & Icons

Use Google Fonts only. Text: Inter (closest open-source match to Graphik) via `<link>`/`@import`, bound to `--font-base`. Display headline: Bebas Neue or Oswald (substitute for Girott) via Google Fonts, bound to `--font-display`. Icons: Google Material Symbols/Icons only — no inline SVGs or local icon files.

Type scale tokens:
- `--text-caption`: 12px, 1.5 lh, 0 tracking
- `--text-body-sm`: 14px, 1.5 lh, -0.042px tracking
- `--text-body`: 16px, 1.5 lh, -0.08px tracking
- `--text-subheading`: 18px, 1.43 lh, -0.108px tracking
- `--text-heading-sm`: 24px, 1.33 lh, -0.192px tracking
- `--text-heading`: 30px, 1.2 lh, -0.3px tracking
- `--text-heading-lg`: 48px, 1.1 lh, -0.576px tracking
- `--text-display`: 168px, 1.0 lh, 13.9px tracking (uppercase)

Negative letter-spacing pattern must be applied: -0.08px at 16px scaling to -0.96px at 60px. Display face (Bebas Neue/Oswald) used at 168px uppercase for the single hero headline only — never below 100px, never for section headings.

## 4. Layout & Flexbox Rules

Build all layouts with Flexbox. Every flex container must default to `align-items: center` unless explicitly justified. Mobile-first: convert rows to columns on small viewports, prevent horizontal scrolling. Max container width 1200px centered. Sections stacked vertically with 80px gaps. Alternating white and very-light-gray backgrounds. Single full-bleed dark band as the only inversion. Overall density comfortable — generous whitespace.

## 5. Component Specifications

### Top Navigation Bar
White background, no border-bottom (or hairline 1px #e4e5e6). Logo left (fictional wordmark in #214538 with a green leaf Material Icon). Nav links center: Inter 500 at 15px, #151e1b, 20-24px horizontal spacing. Right cluster: "Log In" ghost text link + Primary CTA Button (4px radius, 13px×17px padding). Total height ~64-72px. Flat, not sticky.

### Hero Section (two-column split)
Left (60%): Display headline at 168px Bebas Neue/Oswald weight 600, uppercase, #214538, letter-spacing 13.9px. Subtext at 18px Inter 400, #4d4d4f. Primary CTA: #214538 background, white text, Inter 500 16px, 4px radius, 13px×20px padding. Ghost text link beside it. Right (40%): Product mockup card with double-layer soft shadow (0px 20px 25px -5px rgba(0,0,0,0.1) + 0px 8px 10px -6px rgba(0,0,0,0.1)), 8px radius, white background, containing nested rounded panels (12-20px radius) representing device frames.

### Features Section (3 cards)
White background, 80px section gap above. Three equal columns. Each: 24px outlined line Material Icon in #214538 (stroke ~1.5px, never filled), Inter 600 at 18px heading in #151e1b below, Inter 400 at 15px description in #4d4d4f below, max-width ~200px. No card chrome — icon and text float directly on white. Feature cards use 12px radius where card chrome is used.

### How It Works (3 steps)
Three steps with numbered indicators, title, and description. Use Forest Canopy for step numbers. Hairline borders or subtle spacing to separate. Mobile: stack vertically.

### Testimonials (3 cards)
No card chrome — floats on white. Five 16px filled stars in #214538 with 4px gap (Material Icons). Quote heading: Inter 600 at 18px, #151e1b, centered. Body: Inter 400 at 14px, #4d4d4f, centered. Attribution: Inter 400 italic at 12px, #4d4d4f, centered. 3-column grid.

### Pricing (3 tiers)
Three pricing cards. White background, 8px radius, 1px border #e4e5e6, 24px padding. Highlighted tier uses Moss Wash #e5ede9 background or a Forest Canopy accent border. Tier name, price (Inter 700 at 48px, #214538), feature list, CTA button. Use hairline borders, no heavy shadows.

### FAQ
Accordion-style FAQ. Each item: question in Inter 600 at 16-18px #151e1b, answer in Inter 400 at 15px #4d4d4f. Expand/collapse via CSS transitions. Use Material Icons for chevron. Hairline dividers between items.

### Final CTA
Centered section with headline (Inter 700 at 30-48px, #151e1b), subtext, and Primary CTA button. Optional Citrus Note #faefc3 highlight card behind or around. White background.

### Footer
White background, hairline top border #e4e5e6. Secondary links in Inter 400 at 14px #4d4d4f. Logo in #214538. Multiple columns of links. Copyright line at bottom.

### Listing Status Card (if used)
White background, 8px radius, 1px border #e4e5e6. Logo area centered. Status badge: "Listed" = #208619 text with checkmark Material Icon; "Get Listed" = #151e1b text. Generous 24px top/bottom padding.

### Stat Highlight Card
Moss Wash #e5ede9 background, 8px radius, 24px padding. Number: Inter 700 at 48px, #214538, -0.576px tracking. Label: Inter 400 at 14px, #4d4d4f.

### Dark Band Section
Full-bleed photographic background at 30-40% opacity overlay over #151e1b. Section padding 80px vertical. Headline: Inter 700 at 35-48px, #ffffff, -0.4px tracking. Subtext: Inter 400 at 16px, #ffffff at 80% opacity. Only dark inversion on the page. Use a CSS background with a dark scrim (linear-gradient overlay) — no actual photo required; use a placeholder gradient or solid dark surface.

### Highlight Tip Card
Background #faefc3, 8px radius, 20px padding. Text: Inter 500 at 16px, #151e1b. Sticky-note feel.

### Input Field
1px border #e4e5e6, 8px radius, 12px vertical × 16px horizontal padding. Background #ffffff. Placeholder #4d4d4f at Inter 400 16px. Focus: border darkens to #214538. No shadow on focus.

### Tab Filter Pill
8px radius, 10px vertical × 20px horizontal padding. Default: 1px border #e4e5e6, text #151e1b, background #ffffff. Active: background #214538, text #ffffff, no border. Inactive hover: background #f4f4f4. Inter 500 at 14px.

### Button Component (all states)
Flex layout (display: flex; align-items: center; justify-content: center; gap: 0.5rem). Minimum touch target 44x44px. Hover: brightness/shadow shift, cursor pointer. Focus: distinct focus ring via CSS variables. Active/pressed: transform scale(0.97). Loading: disables interactions, CSS spinner or animated Material Icon, no dimension distortion. Disabled: opacity 0.5, greyscale, cursor not-allowed. Success/error: temporary feedback via --text-success/--text-error.

### Card Component (interactive, where applicable)
Default: flexible flexbox, subtle borders, elevation via --bg-secondary and CSS variables. Hover: elevation/shadow shift or translateY(-2px). Focus-within: highlight borders. Loading (skeleton): shimmer animation in CSS. Empty state: Material Icon + guidance text.

### Form & Input Requirements
States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: flex container wrapping label, input, and dedicated error feedback container.

### Modal / Popup Requirements
States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions). Centered flex container (align-items: center), backdrop overlay, Material Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 6. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (transition: var(--transition-normal)), respecting prefers-reduced-motion.
- Accessibility: sufficient contrast in both light/dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, aria-live regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- Forest Canopy #214538 used exclusively for primary filled CTA, active tab state, and 5-star rating — never as wide background block or decorative wash.
- Girott-substitute display face at 168px uppercase for single hero headline only.
- Border-radius: 4px buttons, 8px cards/inputs/images, 9999px avatars. No mixing outside this triad.
- Hairline #e4e5e6 borders as primary structural separator. Soft shadows only on product mockup images.
- Body text Studio Ink #151e1b, helper text Graphite Body #4d4d4f. Never pure #000 for body.
- Negative letter-spacing pattern applied.
- Single dark photographic band as one-time inversion. Page ~90% white.
- No additional chromatic colors beyond Link Green #208619 and Citrus Note #faefc3.
- No bold (700) for body or button text — Inter 500 is heaviest UI weight. Reserve 700 for section headings.
- No heavy drop shadows on cards/UI. Shadows only on product mockup images.
- No button border-radius above 4px.
- No display face below 100px.
- Citrus Note #faefc3 is card surface only — not CTA, badge, or status color.
- No stretch beyond 1200px max-width. No full-bleed content sections except dark band.

## 7. Imagery & Content

Imagery: documentary feel. Dark hero band uses a photographic overlay (use a CSS gradient scrim over a dark surface as placeholder). Product mockups as crisp UI screenshots on white with soft shadows. Platform logos in native brand colors as social proof (use placeholder text/icons). Feature icons: 24px outlined line icons in Forest Canopy, stroke ~1.5px, never filled. No decorative illustrations, abstract graphics, or 3D renders.

All copy must be invented for the fictional brand. No lorem-ipsum-only submissions where real copy is expected; placeholders allowed only where content genuinely unspecified.

## 8. Dark Mode

Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Switch background/text variables seamlessly. Persist user choice via localStorage, fallback to prefers-color-scheme. Include visible toggle with aria-pressed/aria-label. In dark mode, maintain contrast pairing and the overall editorial feel.

## 9. File Structure & Naming

- `index.html`, `style.css`, `script.js`
- BEM naming convention throughout
- No inline styles or scripts

## 10. Edit Mode (not applicable — this is a from-scratch build)

N/A — building from scratch.

---

Generate the complete landing page following all rules above. Invent a fictional brand name, product name, and all user-facing copy in English. Never reference the real brand. Output only the three files' contents as specified.
