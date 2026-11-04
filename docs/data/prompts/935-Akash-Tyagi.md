You are an Expert UI/UX Coding Agent. Build a complete, production-ready landing page themed "Akash Tyagi" — a dark editorial portfolio aesthetic — following every rule below. Do NOT use the real brand name "Akash Tyagi", its logo, trademarks, or product names anywhere in the page; invent a fictional brand name, product, and copy.

## 1. Architecture & CSS-First Rules
- Keep all styling in a dedicated `style.css`. Zero inline `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors only. HTML must remain clean, semantic, and visually agnostic.
- Store all visual tokens in `:root` (and theme classes) using CSS variables. Contrast pairing: light backgrounds pair with dark text, dark backgrounds pair with light text, for every theme.
- Light-mode background: use `#fefefe` where a near-white is needed, never pure `#ffffff`. (This theme is dark-only; dark mode is the default canvas.)
- Mandatory dark mode: define dark tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class. Switch variables seamlessly. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle with correct `aria-pressed`/`aria-label`.
- Flexbox layout: every flex container defaults to `align-items: center` unless explicitly justified. Mobile-first, responsive, no horizontal scrolling.
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). All utility classes map to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).
- Google Fonts mandatory: include Google Font `<link>`/`@import` for text (Inter, Satoshi, Space Mono, JetBrains Mono substitutes) and Google Material Symbols/Icons for icons. No raw inline SVGs or local icon files.

## 2. Theme Tokens (Akash Tyagi)
Define these CSS variables in `:root`:

Colors:
- `--color-obsidian-canvas: #000000` (page background, card surfaces, inverted text on pink)
- `--color-parchment: #efe6d8` (primary body/heading text)
- `--color-bone: #aca69c` (secondary text, button borders, metadata)
- `--color-ash: #736e68` (muted body, subtle link borders, inactive labels)
- `--color-charcoal: #605c56` (hairline dividers, low-emphasis borders)
- `--color-neon-petal: #ffa1f7` (primary action buttons, active nav, selected markers — single chromatic punctuation)
- `--color-acid-lime: #4dff00` (green wash for highlight backgrounds, decorative bands; supporting accent only, never status color except availability dot)

Typography (Google Font substitutes):
- `--font-sans-serif` (sans-serif, weight 400, 12px, lh 1.2)
- `--font-geist` (Inter/Satoshi, weights 500/600, sizes 13/14/15px, lh 1.14/1.23/1.33, tracking -0.031em/-0.029em/-0.013em, OpenType `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`)
- `--font-geist-pixel-triangle` (Space Mono Bold/Departure Mono, weight 400, 30px, lh 1.33, tracking -0.033em, same OpenType features)
- `--font-geist-mono` (JetBrains Mono/IBM Plex Mono, weights 400/500, 13px, lh 1.23/1.54, tracking -0.031em, same OpenType features)

Type scale:
- `--text-caption`: 12px, lh 1.2
- `--text-body-lg`: 15px, lh 1.4, tracking -0.2px
- `--text-display`: 30px, lh 1.33, tracking -1px

Spacing & shapes:
- Base unit 8px. Spacing: `--spacing-8: 8px`, `--spacing-16: 16px`, `--spacing-24: 24px`, `--spacing-104: 104px`, `--spacing-200: 200px`.
- Radii: pills 1000px, buttons 40px, indicators 1000px.
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md` (shadows defined but unused — flatness is deliberate).
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.

Layout:
- Page max-width 1400px, centered. Section gap 200px. Card padding 0px. Element gap 16px.

## 3. Component Requirements
Enforce these state designs via CSS classes:

**Pill CTA Button** (`.btn-pill`): filled pill, `#ffa1f7` bg, `#000000` text, 40px radius, 12px×24px padding, Geist 500 13px. Flex layout, min touch target 44×44px. States: hover (brightness/shadow shift, cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (disabled, spinner/animated Google Icon, no dimension distortion), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).

**Ghost Text Link** (`.link-ghost`): no bg, Parchment text, 1px Ash/Bone border-bottom underline. Geist 500 13–14px. Underline appears only on hover.

**Status Availability Indicator** (`.status-dot`): 8px Acid Lime circle, 1000px radius, paired with Parchment "Available for work" 13px Geist 500, 8px gap.

**Section Header with Date Range** (`.section-header`): two-part label — section name left, date range right. Geist Pixel Triangle 400 30px, Parchment label, Ash date range, tracking -0.033em. 104px vertical space below.

**Project Showcase Card** (`.project-card`): full-width image edge-to-edge on Obsidian canvas, no border/shadow/radius. Caption below in Geist 500 14px Parchment. States: hover (elevation/shadow shift or translateY -2px), focus-within (border highlight), loading (skeleton shimmer), empty (Google Icon + guidance text).

**Minimal Header Bar** (`.header-bar`): single row — designer name left (Geist 600 Parchment), current time + email right (Geist Mono 400 Ash). No logo/nav/hamburger.

**Two-Column Intro Block** (`.intro-block`): asymmetric two-column — left bio (2–3 short paragraphs), right empty or CTA + status. Gap 24–48px. Body Geist 500 14px Parchment, 16px paragraph spacing.

**Footer Social Link** (`.footer-link`): plain text links (e.g., "X.com", "LinkedIn", "Dribbble") in Geist Mono 400 13px Ash, 24px gaps, left-aligned. No icons/badges.

**Form & Input** (`.input-group`): states empty/focused/filled/valid/invalid/disabled/readonly. Flex container wrapping label, input, error feedback container.

**Modal/Popup** (`.modal`): states opening/open/loading/success-error/closing (CSS transitions). Centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via Esc/overlay click.

## 4. UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, never color-only state communication, semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions (`.btn-danger`) visually distinct in both themes.

## 5. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point reference.
- One consistent class-naming convention (BEM or fixed utility set) across entire deliverable — never mix.
- No lorem-ipsum-only submissions where real copy/labels supplied; placeholders only where content genuinely unspecified.

## 6. Theme-Specific Do's & Don'ts
Do:
- Use `#000000` as universal background for every screen — never lighter/colored canvas.
- Apply `#ffa1f7` only to single primary action per view — system's only chromatic voice.
- Set section labels in Geist Pixel Triangle 30px with -0.033em tracking for editorial weight.
- Maintain 200px vertical gaps between major sections for gallery-wall rhythm.
- Use warm neutrals (`#efe6d8` → `#aca69c` → `#736e68` → `#605c56`) in descending tonal order for text hierarchy.
- Use green dot (`#4dff00`) exclusively for live status/availability — never generic accent/button.
- Render all project imagery edge-to-edge with no card chrome, radius, or shadow.

Don't:
- Never introduce box-shadows, gradients, or glow effects — flatness is the point.
- Never use `#ffa1f7` for body text, backgrounds, or decoration — action color only.
- Never round image corners on project showcases — images meet canvas edge.
- Never add more than one filled CTA per screen — single-action system.
- Never use cool blue-grays or pure whites for text — warm sepia palette is identity.
- Never use icons in header or footer — plain text links only.
- Never reduce section gaps below 104px — generous whitespace is structural.

## 7. Page Structure (Landing Page)
Build these sections in order, inventing fictional brand/product/copy:
1. **Hero**: Minimal header bar (name left, time+email right). Two-column intro block (bio left, CTA+status right). Single pill CTA. Status availability indicator. No hero image.
2. **Features**: 3 cards (project showcase style — edge-to-edge imagery, caption below). Section header "SELECTED WORK" with date range.
3. **How It Works**: 3 steps, text-driven, generous spacing.
4. **Testimonials**: text-only, warm parchment quotes.
5. **Pricing**: 3 tiers, flat cards, single highlighted tier using Neon Petal accent on CTA only.
6. **FAQ**: accordion-style, accessible.
7. **Final CTA**: single pill CTA, generous whitespace.
8. **Footer**: social links (plain text), secondary links, no icons.

## 8. Imagery & Layout Notes
- Product photography dominates: large high-fidelity device mockups, full-bleed, edge-to-edge, no rounded corners/masks/frames.
- Visual rhythm: text block → silence → massive photograph → silence → text block.
- No illustration/iconography beyond single green status dot.
- Full-bleed dark canvas, max-width 1400px centered content. Alternating text and image bands with extreme vertical breathing (200px between sections). No sidebar/sticky nav/mega-menu. Header is single static line.

## 9. Edit/Clarification Rules
- If a requested style change cannot be achieved without adding markup (missing wrapper/icon), stop and ask the user instead of silently inserting HTML.
- No behavioral JS for form validation/popups/utility helpers unless requested; if requested, ask how to handle.

Output only the finished coding-AI prompt. No preamble or closing commentary. Mirror numbered headers and bolded sub-rules. Translate all copy guidance to English; if source demands non-English user-facing copy, instruct coding AI to write all user-facing copy in English. Keep CSS vars, class names, file names in English/ASCII.
