You are an expert frontend engineer. Build a complete, responsive landing page for a fictional brand in the "Chat for impact" style — a warm, healthcare-optimistic visual system. Do NOT use the real brand name, logo, trademarks, or product names from the reference. Invent a fictional brand name, product, and copy.

## 1. Strict Architecture Rules

- **CSS-First & Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes. Use class/ID selectors only. Keep HTML semantic and styling-agnostic.
- **CSS Variables & Theme Tokens:** Define all tokens in `:root` using the exact values below. Light mode background must not be pure white; use `#fefefe` where near-white is needed.
- **Mandatory Dark Mode:** Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** Use Flexbox for layout. Every flex container defaults to `align-items: center`. Convert rows to columns on small viewports. No horizontal scrolling.
- **Framework:** Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). Map utilities to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts only. Text: DM Sans (weights 400, 500, 600, 700) via Google Fonts link, bound to `--font-base`. Enable `font-feature-settings: "ss03"` on every DM Sans instance. Icons: Google Material Symbols/Icons. No raw inline SVGs or local icon files.

## 2. Design Tokens (CSS Variables)

Colors:
- `--color-canopy-green: #0a3922`
- `--color-coral-pulse: #ff643b`
- `--color-indigo-bloom: #460095`
- `--color-leaf-bright: #1dbf73`
- `--color-deep-teal: #003642`
- `--color-orchid-tint: #f3b3fe`
- `--color-sky-signal: #00b4dc`
- `--color-aubergine: #47264c`
- `--color-ink-black: #000000`
- `--color-paper-white: #ffffff`
- `--color-ash: #a6a6a6`
- `--color-slate: #7a7a7a`
- `--color-graphite: #3d3d3d`
- `--color-charcoal: #333333`
- `--color-frost-gray: #e0e0e0`
- `--color-cloud-gray: #f2f2f2`
- `--color-lavender-mist: #eee2ff`
- `--color-mint-wash: #d2f2e3`
- `--color-sky-wash: #ccf0f8`
- `--color-sage-wash: #e4f7ee`
- `--color-lilac-wash: #fdf0ff`
- `--color-peach-wash: #ffede8`
- `--color-cream: #faf7e8`
- `--color-sand: #f4ece9`

Semantic aliases (required):
- `--primary: var(--color-coral-pulse)`
- `--secondary: var(--color-canopy-green)`
- `--bg-primary: var(--color-lavender-mist)`
- `--bg-secondary: var(--color-paper-white)`
- `--text-primary: var(--color-ink-black)`
- `--text-secondary: var(--color-graphite)`
- `--text-success: var(--color-leaf-bright)`
- `--text-error: var(--color-coral-pulse)`
- `--border-default: var(--color-frost-gray)`
- `--border-error: var(--color-coral-pulse)`
- `--border-success: var(--color-leaf-bright)`

Typography:
- `--font-base: "DM Sans", sans-serif`
- Type scale tokens: `--text-caption: 12px`, `--text-body-sm: 14px`, `--text-body: 16px`, `--text-body-lg: 18px`, `--text-subheading: 20px`, `--text-heading-sm: 24px`, `--text-heading: 32px`, `--text-heading-lg: 48px`, `--text-display: 72px`, `--text-display-xl: 116px`
- Letter spacing: `-0.028em` at display sizes (≥52px), `-0.019em` at 32–48px, normal at body sizes.

Spacing & shapes:
- `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-12: 12px`, `--spacing-16: 16px`, `--spacing-20: 20px`, `--spacing-24: 24px`, `--spacing-32: 32px`, `--spacing-40: 40px`, `--spacing-48: 48px`, `--spacing-56: 56px`, `--spacing-64: 64px`, `--spacing-80: 80px`, `--spacing-120: 120px`
- `--radius-sm: 8px`, `--radius-md: 16px`, `--radius-lg: 24px`, button radius 40px, tag radius 9999px
- `--shadow-sm: rgba(0,0,0,0.05) 0px 1px 1px 0px` (use sparingly, only for subtle form-field separation)
- `--spacing-gap: 8px`, `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: ease`
- `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`

Contrast pairing: every light background token pairs with dark text; every dark background pairs with light text. Enforce in both light and dark themes.

## 3. Dark Mode Tokens

Under `@media (prefers-color-scheme: dark)` and `.dark`:
- Invert page canvas to a deep dark surface (e.g., `#0a1a12` or `#1a1a2e`-ish dark), cards to `#1a2a1f`, text to `#f5f5f5`/`#e0e0e0`, borders to `#2a3a2f`. Keep coral CTA `#ff643b` and leaf bright `#1dbf73` readable. Ensure contrast in both modes.

## 4. Component Specifications

### Buttons
- **Coral Filled Button (primary CTA):** bg `#ff643b`, white text 16px DM Sans weight 600, padding 12px 24px, radius 40px, no border, no shadow. Flex layout, min touch target 44x44px. Hover: brightness/shadow shift + cursor pointer. Focus: distinct ring via CSS vars. Active: `transform: scale(0.97)`. Loading: disabled, CSS spinner, no dimension change. Disabled: opacity 0.5, greyscale, cursor not-allowed. Success/Error temporary states.
- **Ghost Outline Button (secondary):** transparent bg, 1px solid `#ffffff` on dark hero / 1px solid `#000000` on light sections, 16px weight 500, padding 12px 24px, radius 40px. Always paired beside coral button.
- **Outline Nav Button:** white bg, 1px solid `#000000`, 14px weight 500, padding 8px 20px, radius 40px.

### Cards
- **Pastel Feature Card:** tinted bg cycling through mint `#d2f2e3`, sage `#e4f7ee`, sky `#ccf0f8`, cream `#faf7e8`, lilac `#fdf0ff`, peach `#ffede8`. Padding 32px, radius 24px, no border, no shadow. Headline 32px weight 700 in `#0a3922` or `#003642`, body 16px in `#3d3d3d`. Hover: `translateY(-2px)`. Focus-within: border highlight. Skeleton loading shimmer. Empty state with Google Icon + guidance text.
- **White Product Card:** white bg, padding 24px, radius 16px, optional 1px `#e0e0e0` hairline.

### Other Components
- **Pill Tag Chip:** section pastel bg tint, 12px weight 600, padding 4px 12px, radius 9999px, text in section's dark heading color.
- **Top Navigation Bar:** white bg, full-width, horizontal flex: logo left, nav links center (Product, Community, Resources, Pricing), EN selector + Log in + outlined Book a Call right. 14px weight 500, `#0a3922` link color, 32px vertical padding, no shadow. Sticky.
- **Full-Bleed Dark Hero:** bg `#0a3922`, full viewport width, 80px+ vertical padding. Left: headline 69–80px weight 500 white with a highlighted word in `#1dbf73`, body 18px in `#d2f2e3`, coral CTA + ghost button. Right: overlapping phone mockup + portrait photo, no card chrome.
- **Sticky Bottom Notification:** fixed bottom-right, 24px from edges. bg `#0a3922`, padding 16px 20px, radius 16px. Title 16px weight 600 white, subtitle 14px weight 400 in `#d2f2e3`. Inline countdown blocks (24d/5h/1m/45s) in monospaced numbers. Filled mini-button in `#faf7e8` cream. Close X top-right.
- **Logo Strip:** centered monochrome partner logos at `#3d3d3d`, ~24px height, 48px horizontal gap. Label 12px weight 500 in `#a6a6a6` above.
- **Checklist Feature Item:** 24px filled brand icon left, 20px weight 500 label in `#0a3922`, 8px gap, 16px vertical spacing. Active item wrapped in `#eee2ff` bg block with 16px radius.

## 5. UX & Micro-Interaction Rules

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes; never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 6. Page Sections to Build

Build a single landing page with these sections in order:
1. **Top Navigation Bar** (sticky).
2. **Full-Bleed Dark Hero** with headline, body, coral CTA + ghost button, right-side phone mockup + portrait overlap.
3. **Logo Strip** partner band.
4. **Features** — 3 Pastel Feature Cards in a responsive grid.
5. **How It Works** — 3 steps using Checklist Feature Items or numbered cards.
6. **Testimonials** — cards with quote, name, role.
7. **Pricing** — 3 tiers with feature lists and CTA buttons.
8. **FAQ** — accordion-style questions.
9. **Final CTA** — dark band with headline + coral button.
10. **Footer** with secondary links.
11. **Sticky Bottom Notification** (fixed overlay).

## 7. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable.
- No lorem-ipsum-only submissions; invent realistic fictional copy and labels.
- All user-facing copy must be in English.

## 8. Do's and Don'ts

Do:
- Use DM Sans at every text size from 12px to 116px — single-family system.
- Apply `-0.028em` letter-spacing at display sizes (≥52px) and `-0.019em` at 32–48px; normal tracking at body sizes.
- Enable `font-feature-settings: "ss03"` on every DM Sans instance.
- Use pastel card rotation for feature cards — never raw white/gray for those cards.
- Use `#ff643b` exclusively for primary filled CTAs; pair every coral button with a ghost outline button beside it.
- Set border-radius: 40px buttons, 24px feature cards, 16px product/notification cards, 9999px tag chips.
- Push headline sizes to 69–116px for hero and section openers.

Don't:
- Do not use box-shadow for elevation — rely on color contrast and pastel surface changes.
- Do not introduce a second typeface.
- Do not use `#ff643b` for anything other than primary action buttons.
- Do not use `#000000` as a fill on dark green or lavender backgrounds — use white or pastel.
- Do not use sharp corners (0–2px) on feature cards or buttons.
- Do not use more than one vivid accent color per section.
- Do not set body text below 14px or use gray-on-gray contrast.

## 9. Imagery & Layout Notes

- Photography: warm, human, documentary portraits of healthcare workers; full-bleed or large rounded card crops; overlapping product mockups on hero/toolkit right side.
- Product visualizations: realistic WhatsApp phone-frame mockups with canonical chat-bubble colors (white incoming, `#dcf8c6` outgoing, `#1dbf73` sender names), layered floating cards.
- No abstract gradients, no 3D renders, no decorative illustrations.
- Iconography: monochrome outlined/flat-filled in `#0a3922` or `#000000` at 20–24px.
- Layout: full-bleed lavender `#eee2ff` canvas, alternating brand-color bands (dark green hero, white feature band, lavender toolkit band), 64px section gaps, ~1280px max-width centered, ~80px horizontal padding desktop. Persistent bottom-right notification overlays all sections.

## 10. Edit Mode

If modifying existing markup: do not introduce new HTML tags/components/DOM nodes; work within existing structure. Define CSS only for existing elements. Do not write JS for form validation, popups/modals, or utility helpers — ask the user how to handle instead. If a style change requires new markup, stop and ask before inserting.

Output only the finished prompt itself. No preamble, no closing commentary. Mirror the structure above. If a request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause. All copy in English.
