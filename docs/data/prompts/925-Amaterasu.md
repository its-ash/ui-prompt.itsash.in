# Coding AI Prompt — Complete Landing Page (Amaterasu Style)

## 1. Project Overview
Build a complete, responsive landing page using the **Amaterasu** visual style: a cinematic dark teal sanctuary aesthetic. Invent a fictional brand name, product, and copy — never use "Amaterasu" or any real brand name, logo, trademark, or product name. All user-facing copy must be in English. Deliver three separate files: `index.html`, `style.css`, `script.js`.

## 2. Architecture & Styling Rules
- **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes in HTML. Target via classes/IDs only. HTML stays semantic and agnostic of visual styling.
- **CSS Variables:** Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`). Required tokens:
  - Colors: `--primary` (Cosmic Violet `#1b2978`), `--secondary` (Twilight Indigo `#19366c`), `--bg-primary` (deep dark canvas `#0a1a2a`), `--bg-secondary` (Polar White `#fefefe`), `--text-primary` (Polar White `#ffffff`), `--text-secondary` (Obsidian `#000000` on light), `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--color-aurora-teal` (`#75cdd6`), `--color-cyan-glow` (radial gradient), `--color-cosmic-violet-wash` (linear gradient), `--color-silver-slate` (`#7488a5`), `--color-cerulean-mist` (`#579dc0`), `--color-storm-shadow` (`#466187`).
  - Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text — enforce for every theme.
  - Light mode background: use `#fefefe` where white is needed, never `#ffffff` for page backgrounds.
  - Radius: `--radius-sm` (20px), `--radius-md` (20px), `--radius-lg` (20px).
  - Shadows: `--shadow-sm: none`, `--shadow-md: none` (this system uses zero box-shadows).
  - Spacing: `--spacing-gap` (20px), `--transition-fast` (0.15s), `--transition-normal` (0.3s), `--ease-standard` (ease).
  - Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
- **Dark Mode Mandatory:** Provide tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Persist user choice via `localStorage`, falling back to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox Layout:** All layout via `display: flex`. Every flex container defaults to `align-items: center`. Mobile-first responsive (rows → columns on small viewports). No horizontal scrolling.
- **Tailwind CSS:** Use Tailwind (or clean custom CSS via `@layer`/`@apply`) unless overridden. Utility classes map to CSS variables or generic classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts mandatory. Text: Inter (substitute for TWKLausanne) via `<link>`/`@import`, bound to `--font-base`. Icons: Google Material Symbols. No inline SVGs or local icon files. Font tokens: `--font-twklausanne-250` (Inter 400/700), `--font-twklausanne-200` (Inter Tight 200/400 light), `--font-neosanspro-medium` (Space Grotesk 500 uppercase). Type scale tokens: `--text-caption` (10px, lh 2, ls 3.2px), `--text-body` (16px, lh 1.4), `--text-subheading` (20px, lh 1.5, ls 3.2px), `--text-heading-sm` (26px, lh 1.2), `--text-heading` (40px, lh 1.13, ls -1px), `--text-display-sm` (50px, lh 1, ls -1.25px), `--text-display` (60px, lh 1, ls -2px), `--text-display-lg` (80px, lh 1, ls -3.2px).
- **Spacing Scale:** `--spacing-5` (5px), `--spacing-9` (9px), `--spacing-10` (10px), `--spacing-20` (20px), `--spacing-22` (22px), `--spacing-30` (30px), `--spacing-40` (40px), `--spacing-45` (45px), `--spacing-50` (50px), `--spacing-60` (60px), `--spacing-100` (100px), `--spacing-150` (150px), `--spacing-210` (210px). Density: spacious. Section gap 50–60px. Card padding 30–40px. Element gap 20px.

## 3. Visual Style (Amaterasu)
- Two-ink system: Polar White + Cosmic Violet. Teal appears only as atmospheric photographic light/gradient washes — never as UI surface, button, or text color.
- No box-shadows anywhere. Depth via full-bleed dark hero, atmospheric teal gradients, hairline Cosmic Violet borders.
- Border radius: 20px for tags, links, buttons (pill controls).
- Outlined CTA button: transparent bg, 1px solid Cosmic Violet border, 20px radius, 16px 24px padding, text 12px NeoSansPro-Medium uppercase 0.16em tracking, white fill. Never filled.
- Nav links: 10px NeoSansPro-Medium uppercase, 0.32em tracking, white, no underline. Hover shifts letter-spacing or color to Cosmic Violet.
- Brand wordmark: "AMATERASU" → invent fictional brand name, 10px NeoSansPro-Medium uppercase, 0.32em tracking, white, centered top, ~20px top padding.
- Scroll cue: "SCROLL TO EXPLORE" at 10px, 0.32em tracking, white, bottom-left of hero, paired with thin down-arrow icon.
- Hero: 100vh dark photographic background with deep teal-cyan key lighting. Centered headline 80px TWKLausanne-200 weight 400 white, -3.2px tracking. Optional right-aligned description 12px TWKLausanne-250 white. No card/panel/border — photograph is container.
- Atmospheric gradient panel: full-width section with `radial-gradient(at 5.62% 33.12%, #ffffff 30%, #84cdee 100%)`, 100–150px vertical padding, white or Cosmic Violet text.
- Content section (light): Polar White bg, 40–60px vertical padding, heading 40px TWKLausanne-250 weight 400 Cosmic Violet -0.025em tracking, body 16px TWKLausanne-250 weight 400 Obsidian. No card.

## 4. Component Requirements
- **Buttons:** Default (flex, align-items center, justify center, gap 0.5rem, min 44x44px), Hover (brightness/shadow shift, cursor pointer), Focus (distinct focus ring via CSS vars), Active (transform scale 0.97), Loading (disabled, CSS spinner, no dimension distortion), Disabled (opacity 0.5, greyscale, cursor not-allowed), Success/Error (temporary feedback via --text-success/--text-error).
- **Cards:** Default (flex, subtle borders, elevation via --bg-secondary), Hover (translateY -2px), Focus-within (border highlight), Loading (shimmer skeleton), Empty state (Google Icon + guidance text).
- **Forms/Inputs:** States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: flex container wrapping label, input, error feedback.
- **Modal:** States: Opening, Open, Loading, Success/Error, Closing (CSS transitions). Centered flex (align-items center), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc/overlay click.

## 5. Landing Page Sections
Build these sections in order:
1. **Hero** — full-bleed dark atmospheric, centered 80px headline, optional right-aligned description, outlined CTA button, brand wordmark top, scroll cue bottom-left.
2. **Features** — 3 cards with Google Icons, headings, descriptions. Use card component with hover/focus states.
3. **How It Works** — 3 steps with numbered markers, titles, descriptions.
4. **Testimonials** — quote cards with author info.
5. **Pricing** — 3 tiers with feature lists and CTA buttons.
6. **FAQ** — accordion-style questions/answers.
7. **Final CTA** — atmospheric gradient panel with headline and outlined button.
8. **Footer** — secondary links, brand wordmark, copyright.

## 6. UX & Accessibility
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never rely solely on color for state, semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 7. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point reference.
- Consistent class-naming convention (BEM) across entire deliverable — never mix conventions.
- No lorem-ipsum-only submissions; use invented fictional copy/labels.

## 8. Edit Mode
N/A — this is a from-scratch build.

## 9. Output
Output only the finished prompt itself. No preamble, no closing commentary. Mirror numbered headers and bolded sub-rules. All copy in English. All CSS variable names, class names, file names in English/ASCII. If any rule conflicts with user request, keep mandatory rule and add one-line explicit exception clause.
