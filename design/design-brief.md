# Design Brief for Demo Pages

Distilled from the `design` skill (~/.copilot/skills/design/SKILL.md) for single-file landing-page demos.
Precedence: the THEME SPEC decides aesthetics (palette, fonts, motifs, effects, radius, mood). This brief decides craft and quality. When they conflict on look, follow the theme spec; never break a quality rule.

## 1. Design read
Before building, decide silently: page kind, audience, vibe, and what makes THIS theme recognizable. Lean into the theme's signature motif; do not fall back to the generic AI landing page (purple glow, centered hero over mesh, three equal white cards, Inter + slate).

## 2. Layout discipline
- Hero fits the first viewport at 1280x800: headline max 2 lines, subtext max 20 words, CTAs visible without scrolling. Hero top padding max 6rem.
- Hero has max 4 text elements: optional eyebrow, headline, subtext, CTAs (1 primary + max 1 secondary). No feature bullets, trust strips or pricing teasers in the hero.
- Hero needs a real visual built from the theme's motif (CSS/SVG composition, pattern, mosaic, product preview made of real components). No empty halves, no empty boxes, no lone gradient blob.
- Headline and visual are composed together: split layout (text left, visual right) or a deliberate centered composition. The visual never pushes the headline below the fold.
- Navigation renders on one line at desktop, height 64-72px. Below 768px collapse to a menu button.
- At least 4 distinct layout families across the page (split, grid, stacked list, full-width band, bento, accordion). The same layout family appears at most twice.
- Section rhythm: consistent vertical padding (e.g. clamp(4rem, 8vw, 7rem)), one focused message per section, headline above body (no left-headline/right-paragraph split headers).
- Containers: max-width ~1200px, side gutters 1.25rem mobile / 2rem desktop. Every multi-column layout declares its <768px single-column fallback. No horizontal scroll at 360px.
- Eyebrows (small uppercase labels): max 1 per 3 sections.
- Use cards only when elevation means something; otherwise group with spacing or dividers. One corner-radius system for the whole page.

## 3. Typography
- Tracking by size: display -0.02em to -0.04em, body 0. Leading: display 1.0-1.15, body 1.5-1.65. Hierarchy from weight + size + leading together.
- Display size clamp(2.25rem, 5vw, 4rem) for 4-8 word headlines; body 1rem-1.125rem, max 65ch.
- Emphasis inside a headline uses italic/bold of the same family, never a second family.
- Body text is off-black/charcoal, never #000. Surfaces are off-white, never pure #fff.

## 4. Color
- One accent color, locked across the whole page (nav, hero, CTAs, footer). Neutrals from one temperature family.
- Define all colors as CSS variables on :root and a complete dark set under :root[data-theme="dark"]. Every surface, border, shadow, glass panel and icon adapts. Shadows are tinted to the background hue.
- Contrast WCAG AA: 4.5:1 body, 3:1 large text, in BOTH modes. Audit every button, ghost button, badge, input, placeholder and focus ring. No same-color-on-same-color buttons.

## 5. Theme toggle (mandatory, exact contract)
- One visible button in the nav: id="theme-toggle", type="button", aria-pressed, aria-label "Switch to dark mode"/"Switch to light mode", 44x44px min, sun/moon icon that swaps, visible in both modes.
- Inline <script> in <head>: theme = localStorage "theme" if "dark"/"light", else prefers-color-scheme; set document.documentElement.dataset.theme before first paint.
- Click flips data-theme, saves to localStorage "theme", updates aria-pressed, aria-label and icon. Declare each script variable once (all scripts share global scope).

## 6. Interaction and motion
- Full states: hover (gated by @media (hover: hover) and (pointer: fine)), :focus-visible ring, :active press (scale(0.98) or translateY(1px)), disabled.
- Animate only transform and opacity. UI transitions 120-300ms, ease-out for enter. Never scale(0) entrances; start at scale(0.95-0.97) + opacity 0.
- Lists and grids reveal with a 30-80ms stagger via IntersectionObserver, never scroll listeners. Content is visible without JS (reveal classes added by JS only).
- @media (prefers-reduced-motion: reduce): remove movement, keep short opacity fades.
- @media (prefers-reduced-transparency: reduce): solid surfaces, no backdrop blur.
- backdrop-filter only on sticky/fixed surfaces and a few cards, not on every element.

## 7. Content
- Plain, specific copy. Banned: "Elevate", "Seamless", "Unleash", "Next-gen", "Game-changer", "Revolutionize", "Delve", "Lorem ipsum", "John Doe", "Jane Doe", "Acme".
- Headlines <= 8 words, section sub-paragraphs <= 25 words.
- Testimonials: max 3 lines, attribution = realistic name + role + company. Use typographic quotes. No generic avatar icons; use initials monograms.
- One label per CTA intent across the page. CTA labels 1-3 words, never wrap.
- No em-dashes in visible copy, no emojis, no scroll cues, no version labels, no section-number eyebrows, no decorative status dots, no fake-precise stats.
- Forms: visible <label> above input, helper/error text below, no placeholder-as-label.

## 8. Pre-flight (check before output)
Hero in viewport with real visual / nav one line / 4+ layout families / one accent / one radius system / AA contrast both modes / toggle works and persists / no empty grid cells or blank boxes / mobile single-column at 390px, no horizontal scroll / reduced-motion handled / no banned copy / every script variable declared once / valid HTML from <!DOCTYPE html> to </html>.
