# Landing Page Build Prompt — "Nile Postgres" Theme (Fictional Brand)

You are a senior front-end engineer. Build a complete, production-quality landing page as three separate files: `index.html`, `style.css`, and `script.js`. Do not write any other files. The page must be responsive, accessible, and follow every rule below.

## 1. CSS-First Architecture & Zero Inline CSS
- All styling lives in `style.css`. Never use `style="..."` attributes in HTML.
- Target all design properties via class or ID selectors only.
- Keep HTML semantic, clean, and agnostic of visual styling so the entire look can change by editing CSS alone.
- Use one consistent class-naming convention (BEM) across the whole deliverable; never mix conventions.

## 2. CSS Variables & Theme Tokens
Define all tokens in `:root` (light fallback) and override under `@media (prefers-color-scheme: dark)` and a `.dark` class. Required tokens:

Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--text-primary`, `--text-secondary`, `--text-muted`, `--text-success`, `--text-error`, `--border-default`, `--border-emphasis`, `--border-error`, `--border-success`.

Map the Nile theme to these tokens (dark-first):
- `--bg-primary`: #0e0e0e (Deep Void canvas)
- `--bg-secondary`: #1c1c1c (Carbon cards)
- `--bg-tertiary`: #2b2b2b (Graphite mid-elevation)
- `--text-primary`: #ffffff (Snow)
- `--text-secondary`: #d3d3d3 (Ash)
- `--text-muted`: #a1a1aa (Slate Mist)
- `--border-default`: #2f3336 (Charcoal Edge hairline)
- `--border-emphasis`: #3f3f3f (Smoke)
- `--primary`: #6fe2ff (Signal Cyan — filled actions only)
- `--secondary`: #ffba6a (Amber tile)
- Feature tile extras: `--tile-amber`: #ffba6a, `--tile-lavender`: #d8d3ff, `--tile-cyan`: #6fe2ff
- `--sunset-gradient`: linear-gradient(90deg, #f4c587 9%, #d6d3e9 52%, #99d2ec 94%)
- `--text-success`: #b5cea8, `--text-error`: #f48771

Contrast pairing: every light background token pairs with dark text; every dark background pairs with light text. Enforce for both themes.

Light mode: do not default to pure white; use #fefefe where a near-white surface is needed. Provide a complete light theme override that keeps the same token structure.

Border radius & shadows: `--radius-sm`: 6px, `--radius-md`: 10px, `--radius-lg`: 16px, `--radius-xl`: 20px, `--radius-pill`: 9999px. `--shadow-sm`, `--shadow-md` defined but set to none (this theme uses flat surfaces + hairline borders, no shadows).

Spacing & transitions: `--spacing-gap`: 8px base; provide `--space-8` through `--space-192` per the 8px scale. `--transition-fast`: 150ms ease, `--transition-normal`: 250ms ease, `--ease-standard`: cubic-bezier(0.4, 0, 0.2, 1).

Elevation/stacking: `--z-dropdown`: 100, `--z-modal`: 200, `--z-toast`: 300.

Typography: `--font-base`: 'Aeonik' (Google Fonts substitute: Inter) with weights 400/500/600/700. `--font-mono`: 'ui-monospace' (Google Fonts substitute: JetBrains Mono) weight 400. Bind all text to `--font-base` except code blocks which use `--font-mono`. Type scale tokens `--text-caption` (12px), `--text-body-sm` (14px), `--text-body` (16px), `--text-subheading` (18px), `--text-heading-sm` (20px), `--text-heading-lg` (32px), `--text-heading-xl` (40px), `--text-heading-2xl` (48px), `--text-display` (64px), `--text-display-lg` (96px) with the letter-spacing and line-height values from the spec.

## 3. Mandatory Dark Mode
- Implement dark mode via `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`.
- Variables switch seamlessly without HTML restructuring.
- Persist user choice in `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed` and `aria-label`.

## 4. Flexbox Layout & Mobile-First
- All layout structures use Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first: convert rows to columns on small viewports; prevent horizontal scrolling.
- Max content width 1200px centered; section gaps 80-96px; card padding 24px; card radius 20px (16px for small cards).

## 5. Tailwind CSS Integration
- Use Tailwind CSS (via CDN) plus custom CSS in `style.css` driven by `@layer` / `@apply` where helpful.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 6. Typography & Icons
- Google Fonts only: load Inter (substitute for Aeonik) and JetBrains Mono via `<link>` or `@import`; bind to `--font-base` and `--font-mono`.
- Icons: Google Material Symbols only. No raw inline SVGs or local icon files.

## 7. Component State Requirements
Buttons (`.btn`, `.btn-primary`, `.btn-ghost`, `.btn-danger`):
- Default: flex, align-items center, justify-content center, gap 0.5rem, min touch target 44x44px.
- Hover: brightness/shadow shift, cursor pointer.
- Focus: distinct focus ring via CSS variables.
- Active: transform scale(0.97).
- Loading: disabled interactions, CSS spinner, no dimension distortion.
- Disabled: opacity 0.5, greyscale, cursor not-allowed.
- Success/Error: temporary feedback via `--text-success` / `--text-error`.

Cards (`.card`, `.card-testimonial`, `.card-feature`, `.card-code`):
- Default: flex layout, subtle borders, elevation via `--bg-secondary` + variables.
- Hover: elevation/shadow shift or translateY(-2px).
- Focus-within: highlight borders when child receives focus.
- Loading (skeleton): shimmer animation in CSS.
- Empty state: Google Icon + guidance text.

Forms/inputs (`.input-group`, `.input`): Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Flex container wrapping label, input, and error feedback container.

Modal (if used): Opening/Open/Loading/Success/Error/Closing animated via CSS transitions; centered flex container (align-items center), backdrop overlay, Google Icon close button, focus trapping, close via Esc or overlay click.

## 8. Core UX & Micro-interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 9. Deliverables
- Files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- BEM naming throughout.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where content genuinely unspecified.

## 10. Brand & Copy Rule (Critical)
This spec describes the visual style of a real brand. Reuse the style only. Invent a fictional brand name, product, and copy. Never use the real brand name "Nile", its logo, trademarks, or product names anywhere in the page. All user-facing copy must be in English.

## 11. Page Sections to Build
Build these sections in order, each as a distinct `<section>`:

1. **Hero**: left-aligned text stack — announcement pill, 64-96px headline with one word highlighted by a dashed-border gradient box (sunset gradient), one-sentence subhead, cyan pill CTA. Top nav bar: brand (fictional) left, centered nav links, ghost outline button + cyan pill CTA right.

2. **Features**: 3 colored feature tiles (Amber, Lavender, Cyan) — solid pastel fills, Deep Void text, radius 20px, padding 24px, bold heading 18-20px weight 600, body 15px weight 400, "Learn more →" link. Arrange in a 3-column grid (stack on mobile).

3. **How It Works**: 3 steps. Each step: numbered badge, title, short description. Use a horizontal/vertical flex layout that stacks on mobile.

4. **Testimonials**: "What People Are Saying" heading + horizontally scrolling row of testimonial cards (background #1c1c1c, 1px border #2f3336, radius 20px, padding 20px). Each: 40px circular avatar, name weight 600 14px white, role #d3d3d3 13px, quote body white 400 14px line-height 1.5, "View on X" ghost link + close X icon.

5. **Pricing**: 3 tiers. Each card: tier name, price, feature list, CTA button. Highlight the recommended tier with a cyan border or badge. Use the surface stack and hairline borders; no shadows.

6. **FAQ**: accordion of 5-7 questions. Use `<details>`/`<summary>` or accessible custom accordion with ARIA. Smooth open/close transitions.

7. **Final CTA**: centered block with headline, subhead, and cyan pill button. Optional sunset gradient accent.

8. **Footer**: brand, secondary links in columns, social icons (Material Symbols), copyright. Dark canvas, hairline top border.

Additional components to include where natural: announcement pill at top of hero; code block card (monospace 14px, VS Code syntax colors #9cdcfe keywords, #dcdcaa strings/functions, #b5cea8 numbers, #4fc1ff types, default #d4d4d4) in a feature section; product icon tile (200x200 dark square, radius 24px, 1px border #3f3f3f) as visual anchor; info statement banner (full-width gradient container, radius 20px, padding 40-48px, logo + summary in Deep Void text).

## 12. Do's and Don'ts (enforce strictly)
Do: 9999px radius on all interactive elements (buttons, nav pills, announcement tags); Signal Cyan #6fe2ff exclusively for primary actions; pastel tiles as solid card fills with Deep Void text only; sunset gradient only as deliberate signature moment (full container fill or clipped text); body text 16px Aeonik weight 400 white, secondary Ash #d3d3d3; card padding 24px, card radius 20px; section gaps 80-96px; display headlines 64-96px with negative letter-spacing -0.01em.

Don't: chromatic colors for body text/borders/icons (surface fills and primary actions only); no box-shadows or drop-shadows; gradient not as button background/icon fill/text outside signature moments; never break pill shape; never use pure black #000000 (use #0e0e0e / #1c1c1c); no new accent colors beyond cyan/amber/lavender + neutrals; body text not below 14px, paragraph copy weight 400 only; spacing only from the 8px scale.

## 13. Imagery & Icons
No lifestyle photography or abstract decoration. Use a dark product icon tile with a geometric stroke-based icon (Material Symbols) as visual anchor. Code screenshots as dark terminal cards. Pastel tiles act as visual elements. Icons geometric, stroke-based, white or ash-gray, 16-20px, 1.5-2px stroke.

## 14. Output
Produce only the three files with complete, runnable code. No preamble, no commentary. Ensure the page renders correctly when opened directly in a browser. All copy in English. Fictional brand only.
