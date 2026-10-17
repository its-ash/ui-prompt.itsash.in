# Coding AI Prompt: Build a Landing Page in the "Midnight Terminal with Violet Beacons" Style

## 1. Project Overview

Build a complete, responsive landing page for a **fictional brand** (invent the name, product, and copy — never use "dope.security", its logo, trademarks, or product names). The visual language is a midnight terminal aesthetic: near-black canvas, a single vivid violet signal flare, and typography borrowing from luxury travel editorial. The result should read as confident, expensive, and slightly secretive, like a premium lounge at 2am with a single neon sign.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS anywhere.

## 2. Strict Architecture Rules

**2.1 CSS-First, Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target via class/ID selectors only. Keep HTML semantic and styling-agnostic.

**2.2 CSS Variables & Theme Tokens**
Store all tokens in `:root` and theme classes. Required tokens:
- Colors: `--color-near-black: #090909`, `--color-almost-white: #f7f9fa`, `--color-soft-white: #f0f0f0`, `--color-steel: #828384`, `--color-graphite: #474747`, `--color-iron: #423738`, `--color-ash: #6b6b6b`, `--color-signal-violet: #af50ff`, `--color-lavender-mist: #e1bdff`, `--color-nav-bg: rgba(51,50,72,0.7)`.
- Also expose generic aliases: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Contrast pairing: light backgrounds pair with dark text, dark backgrounds with light text — enforce for every theme.
- Light mode background (if a light variant is added): do not use pure white; use `#fefefe` where near-white is needed.
- Border radius: `--radius-sm: 6px`, `--radius-md: 8px`, `--radius-lg: 19.2px`, `--radius-pill: 1584px`.
- Shadows: `--shadow-subtle: rgba(16,24,40,0.05) 0px 1px 2px 0px`. Shadows are otherwise forbidden.
- Spacing: `--spacing-4: 4px` through `--spacing-160: 160px` (4px base unit).
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

**2.3 Mandatory Dark Mode**
- Dark mode is the default theme. Provide tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class.
- Theme switching via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Visible toggle control with correct `aria-pressed` and `aria-label`.

**2.4 Flexbox, Mobile-First**
- All layouts use Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box; no horizontal scrolling.

**2.5 Tailwind Integration**
- Use Tailwind CSS (or clean custom CSS via `@layer`/`@apply`). Utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).

**2.6 Typography & Icons (Google Fonts Mandatory)**
- Text: Google Fonts. Primary `--font-whyte-inktrap` substitutes: Inter or General Sans. Mono `--font-whyte-inktrap-mono` substitutes: JetBrains Mono or IBM Plex Mono. Display serif `--font-grandslang` substitutes: Lora Italic or Tiempos Headline. Bind to `--font-base`.
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

## 3. Design Tokens & Visual Language

- **Canvas:** `#090909` full-bleed. No pure white backgrounds; use `#fefefe` if needed.
- **Text:** `#f7f9fa` primary, `#f0f0f0` soft white for stamped labels, `#828384` muted, `#474747` graphite for card-internal, `#6b6b6b` ash for helper text.
- **Accent:** `#af50ff` Signal Violet — rationed. Only one feature card glow, one filled action, one accent stroke per page. Never for borders, text, or body backgrounds.
- **Lavender Mist:** `#e1bdff` for contrast-safe text on violet surfaces.
- **Surfaces:** Void canvas (0), translucent nav panel (1), iron wash (2), violet bloom (3). No shadows beyond the nav's single hairline.
- **Borders:** 1px or 0.5px solid `#f7f9fa` at 10–20% opacity. Hairline dividers replace shadows.
- **Radius:** cards 19.2px, pills 1584px, buttons 8px, small controls 6px. No 0px or 4px button radii.
- **Max width:** 1200px centered. Section gap ~120px. Card padding 40px. Element gap 16px.
- **Imagery:** One dramatic full-viewport hero photograph (twilight sky). After hero, iconographic only. Icons are minimal line glyphs in `#f7f9fa`.

## 4. Typography Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing |
|------|--------|--------|------|-------------|----------------|
| caption | Whyte Inktrap | 400 | 10px | 1 | 0.18em (uppercase labels) |
| body-sm | Whyte Inktrap | 300 | 14px | 1.5 | 0 |
| body | Whyte Inktrap | 300 | 16px | 1.5 | 0 |
| subheading | Whyte Inktrap | 400 | 20px | 1 | -0.01em |
| heading-sm | Whyte Inktrap | 400 | 32px | 1.2 | -0.03em |
| heading | Whyte Inktrap | 400 | 48px | 1.2 | -0.03em |
| heading-lg | Whyte Inktrap | 400 | 64px | 1.2 | -0.03em |
| section-stamp | Whyte Inktrap Mono | 400 | 74px | 0.9 | 0.2em (uppercase) |
| display | GrandSlang italic | 300 | 88–146px | 0.8 | -0.03em |

GrandSlang italic: only for the 2–3 largest display moments. Never for body or nav. Never below 32px.

## 5. Component Requirements

**Buttons (all states via CSS classes):**
- Default: flex, `align-items: center`, `justify-content: center`, gap 0.5rem, min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled interactions, CSS spinner or animated Material Icon, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary styles via `--text-success`/`--text-error`.

Button variants:
- Filled Action: `#090909` bg, 1px solid `#f7f9fa` border, 8px radius, 16px padding, white text, Whyte Inktrap 16px weight 400.
- Ghost Pill: `rgba(237,195,196,0.05)` bg, no border, 1584px radius, 20px 32px padding, `#f7f9fa` text.
- Compact Outlined: `rgba(247,249,250,0.08)` bg, 1px solid `#f7f9fa` border, 6px radius, 9px 15px padding.

**Cards:**
- Default: flex layout, subtle borders, elevation via `--bg-secondary` and CSS vars.
- Hover: shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight borders when child receives focus.
- Loading (Skeleton): shimmer animation in CSS.
- Empty state: Google Icon + guidance text.

Card variants:
- Hero Boarding Pass: 19.2px radius, `rgba(237,195,196,0.05)` fill, 1px white border, 40px padding. Contains "Boarding Pass" label, origin→destination line, heading, two pill CTAs.
- Comparison Card: 19.2px radius, gradient/violet bloom bg, 40px padding, no border/shadow. Oversized faint number (01–04) behind label, "vs. Competitor →" link. Connected by horizontal route line with circular nodes.
- Feature Row Card: transparent bg, 19.2px radius, no padding. Left: "Learn More" link. Right: Whyte Inktrap 18px weight 400 body copy.
- Violet Bloom Card: `#af50ff` fill, 19.2px radius, 40px padding. One per page max.

**Forms/Inputs:** States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Structure: flex container with label, input, error feedback.

**Modal/Popup:** States: opening, open, loading, success/error, closing (CSS transitions). Centered flex, backdrop overlay, Material Icon close button, focus trapping, close via Esc or overlay click.

**Nav Bar (Frosted):** Fixed top, `rgba(51,50,72,0.7)` bg, `backdrop-filter: blur(10px)`, 1px bottom border `#6b6b6b`. Brand wordmark left (Whyte Inktrap weight 500). Nav items center (Whyte Inktrap 12px uppercase, 0.07em tracking). Two buttons right.

**Footer (Coordinate):** Full-bleed dark band, no fill, 0 padding. Left: "+" icon, "Fly Direct" and product labels in Whyte Inktrap 14px. Right: live GPS coordinate + heart icon.

## 6. Landing Page Sections

1. **Hero:** Full-viewport dark hero. Left column: GrandSlang italic 146px "Your new", Whyte Inktrap 400 64px "Secure Web Gateway", GrandSlang italic "with AI DLP". Body subhead 20px weight 300 muted. Right column: Hero Boarding Pass card. Two pill CTAs inside.
2. **Features:** 3 cards. Stamped section heading (Whyte Inktrap Mono 74px uppercase, 0.2em tracking) above. Feature Row Cards with "Learn More" links.
3. **How It Works:** 3 steps. Stamped heading. Numbered steps with description.
4. **Testimonials:** Quote cards in the dark aesthetic.
5. **Pricing:** 3 tiers. Cards with feature lists and CTA buttons.
6. **FAQ:** Accordion-style Q&A with hairline dividers.
7. **Final CTA:** Violet Bloom Card with headline and CTA button.
8. **Footer:** Coordinate footer with secondary links.

## 7. Core UX Rules

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, never color-only state communication, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- No box-shadows beyond nav hairline. No multi-column body text. No centered body copy.

## 8. Naming & Output

- Consistent class naming (BEM). No mixed conventions.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where content genuinely unspecified.
- Invent all brand names, product names, and copy. Never reference the source brand.

## 9. Copy Locale

All user-facing copy must be written in English.
