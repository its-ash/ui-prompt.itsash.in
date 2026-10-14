
# Design: Layout (Structural Composition)

How content is arranged, independent of what it looks like. Apply this after the visual language (palette/type/materiality) is locked — layout rules here work with any theme.

## 1. Choose the mode from the surface, not the product

The mode names what the visitor's success looks like on *this specific surface* — a tool's landing page and its dashboard are different modes even in the same product:

- **Persuade** (landing pages, marketing, pricing): the visitor decides and acts. Design is the product. Earn attention.
- **Operate** (app UI, dashboards, editors, settings): the visitor completes a task. Scanability and native expectations outrank expression. Brand lives in precise details, not big gestures.
- **Read** (docs, articles, changelogs): structure for comprehension first, then make staying worthwhile.
- **Experience** (portfolios, galleries, showcases): the visitor is inside the work. Let the artifact lead from the first viewport.

## 2. Hero viewport discipline (hard rules)

- **The hero fits in the initial viewport.** Headline max 2 lines desktop, subtext max 20 words *and* max 3–4 lines, CTAs visible without scrolling. If copy is too long, cut it or reduce font scale — never let the hero force a scroll to find the CTA.
- **Plan font size and asset size together.** Large hero image + headline over 6 words → don't start at `text-7xl`. Sensible default: `text-4xl md:text-5xl lg:text-6xl` for most heroes, `text-6xl md:text-7xl` only for 3–5 word headlines. A 4-line hero headline is a font-size error, not a copy-length problem.
- **Top padding caps at `pt-24` (~6rem) desktop.** More and the hero content floats mid-viewport, reading as a layout bug. Need more breathing room? Increase font/asset scale, not top padding.
- **Max 4 text elements in the hero**, in this order: (1) eyebrow OR brand strip OR neither — never both, (2) headline, (3) subtext, (4) CTAs (1 primary + max 1 secondary). Banned in the hero: tiny taglines under CTAs, trust micro-strips ("Used by teams at..."), pricing teasers, feature bullet lists, social-proof avatar rows — all of those belong in a dedicated section directly below.
- **Logo walls live under the hero, never inside it.**
- **Hero needs a real visual.** Text + gradient blob is a placeholder, not a hero — see `website-design` §7 for image sourcing.

## 3. Navigation constraints

- Must render on a single line at desktop (`lg`, 1024px+). If items don't fit: condense labels, drop secondary items, or move to a hamburger — a two-line nav at desktop is broken, not a fallback.
- Height caps at 80px desktop, defaults to 64–72px. No oversized "agency" nav bars eating 15% of viewport height.

## 4. Section rhythm and variety

- **Layout-family repetition ban.** Once a section layout family (3-column cards, full-width quote, split text/image) is used, it can appear at most once more on the page. An 8-section landing page needs at least 4 distinct layout families — "Selected work" must not look identical to "What we do."
- **Zigzag alternation cap.** Alternating left-image/right-text then left-text/right-image is the single most banal AI-default rhythm. Max 2 consecutive sections in this pattern — the 3rd is a failure. Break it with a full-width section, a vertical stack, a bento grid, or a marquee.
- **Split-header ban (default off).** "Left big headline + right small explainer paragraph" as a section header is banned by default — sections should carry one focused message. If a headline and explainer are both genuinely needed, stack them vertically (headline on top, body below, `max-w-[65ch]`). Only use the split when the right column carries a real visual/interactive element, not filler text.
- **Eyebrow restraint (the most-violated rule in practice).** An eyebrow is the small uppercase wide-tracked label above a section headline. Max 1 eyebrow per 3 sections (hero counts as one). If section A has one, the next 2 sections cannot. Mechanical check: count `uppercase tracking` instances across sections; if it exceeds `ceil(sectionCount / 3)`, cut some. Default to no eyebrow — the section's position on the page already categorizes it.

## 5. Grid and bento mechanics

- **Cell count matches content count.** A bento grid has exactly as many cells as there is content for — 3 items get a 3-cell asymmetric split (1+2 or 2+1), 5 items get a 5-cell split (2+3, hero+4). An empty middle or trailing cell means the grid was planned wrong; reshape it, don't paste a blank tile.
- **Rhythm, not one-sided repetition.** Don't stack six identical left-image/right-text rows as a "bento" — vary composition with full-width rows, asymmetric tile sizes, vertical breaks.
- **Background diversity within a grid.** At least 2–3 cells in any multi-cell grid need real visual variation (an image, a brand-appropriate gradient, a tinted background) — an all-white-card grid with only typography inside reads as the AI default even when everything else is right.
- **Grid over flex-percentage math.** Never `w-[calc(33%-1rem)]` — use `grid grid-cols-1 md:grid-cols-3 gap-6`.
- **Contain page width** with `max-w-[1400px] mx-auto` or `max-w-7xl`.

## 6. Anti-center bias

Centered hero/H1 sections read as the safest, most default choice. Prefer split-screen (50/50), left-aligned content with a right-aligned asset, asymmetric whitespace, or scroll-pinned structures instead — unless the brief is a manifesto/launch-announcement where the message itself *is* the design, in which case centered is correct.

## 7. Data/form layout

Label above input, helper text present in markup, error text below input, consistent `gap-2` between input blocks. Never placeholder-as-label.

## 8. Responsive collapse — explicit, per section

Every multi-column layout declares its `<768px` fallback in the same component — never assume "Tailwind handles it."

- **Asymmetric bento** → single column (`grid-cols-1`), generous vertical gaps, all `col-span` overrides reset to 1.
- **Overlapping/rotated "Z-axis cascade" cards** → remove rotation and negative-margin overlap entirely below 768px; stack vertically with standard spacing (overlaps become touch-target conflicts on mobile).
- **Editorial split (headline + interactive content side by side)** → full-width vertical stack; typography block on top, content flows below (preserve horizontal scroll on the content block if that's how it degrades best).
- Universal floor: any asymmetric layout falls back to `w-full px-4 py-8` below 768px.

## 9. Pair with

- `website-design` — accessibility, motion, and content rules that apply to whatever layout is chosen here.
