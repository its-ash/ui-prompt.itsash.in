
# Design: Common Foundation

Rules every interface must follow no matter which aesthetic or layout it ends up wearing. This skill is the floor, not the ceiling — pair it with `website-layout` for structural composition.

## 1. Read the brief before generating

State a one-line "design read" before writing code: **"Reading this as: \<page kind> for \<audience>, with a \<vibe> language."** Page kind, vibe words, reference URLs/screenshots, and audience decide the aesthetic — not your own taste. Quiet constraints (accessibility-first, public-sector, regulated industries, kids' products) override aesthetic preference every time.

If the brief is genuinely ambiguous, ask exactly **one** clarifying question. If you can confidently infer, don't ask — declare the read and proceed.

**Refinement preserves; redesign replaces.** Refinement keeps the incumbent identity, behavior, copy, and everything outside scope — ask before replacing factual copy or adding claims. Redesign keeps product truth and function but treats the old look as anti-reference. Never split the difference into polish-on-the-discarded-look.

## 2. Anti-slop content discipline

- **No AI copywriting clichés:** "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer", "Delve", "Revolutionize". Write plain, specific language.
- **No generic placeholders:** "John Doe", "Acme Corp", "Lorem Ipsum". Use realistic, contextual content.
- **No emojis** in code, markup, or UI text by default. Override only when the user explicitly asks for a playful/social-native vibe, and use sparingly even then.
- **One label per intent.** Two CTAs meaning the same thing ("Get in touch" / "Contact us" / "Let's talk") is a failure — pick one label, use it everywhere on the page.
- **CTA text fits one line at desktop.** If a button label wraps to 2–3 lines, shorten it (3 words max for primary CTAs) or widen the button — never shrink `max-width` to force a wrap.
- **Dependency verification is mandatory.** Before importing any third-party library, check it's actually installed/available. Never assume a package exists.

## 3. Accessibility is not optional

- **Contrast:** WCAG AA minimum — 4.5:1 for body text, 3:1 for large text (18px+/bold 14px+). Audit every button, especially white-on-white, transparent-on-photo, and ghost buttons — add a scrim, stroke, or backdrop when text sits over imagery.
- **Forms:** label above input, helper text present, error text below input. No placeholder-as-label, ever. Placeholder and helper text must also pass AA contrast.
- **Reduced motion (`prefers-reduced-motion: reduce`):** replace slides/springs/parallax with short opacity cross-fades. Drop elastic/overshoot. This means *gentler*, not *zero* — keep transitions that aid comprehension.
- **Reduced transparency (`prefers-reduced-transparency: reduce`):** raise translucent-surface background opacity and drop blur.
- **Reduced contrast preference (`prefers-contrast: more`):** near-solid backgrounds with a defined border.
- Respect the user's text-size setting: layout spacing in `rem`/`em`, not fixed `px`, so scaled text doesn't break layout.
- Avoid full-viewport moving backgrounds and slow looping oscillations near 0.2Hz (one cycle per 5s) — both are known vestibular triggers.

```css
@media (prefers-reduced-motion: reduce) {
  .element { transition: opacity 200ms ease; transform: none !important; }
}
@media (prefers-reduced-transparency: reduce) {
  .surface { background: white; backdrop-filter: none; }
}
```

## 4. Motion mechanics (applies to every theme and layout)

- **Animate only `transform` and `opacity`.** They skip layout/paint and run on the compositor. Never animate `width`, `height`, `top`, `left`, `margin`, `padding` (accordions tolerate `height` only because there's no transform equivalent).
- **Never `scale(0)` on entrance.** Start from `scale(0.9–0.97)` + `opacity: 0` — nothing in the real world appears from nothing.
- **Never `ease-in` on UI.** It delays the exact moment being watched. Use `ease-out` for enter/exit, `ease-in-out` for on-screen movement, `linear` only for constant motion (marquees, progress bars).
- **UI animations stay under 300ms.** Button feedback 100–160ms, tooltips/popovers 125–200ms, dropdowns 150–250ms, modals/drawers 200–500ms. Marketing/explanatory motion can run longer.
- **Springs for anything gesture-driven or interruptible** (drag, momentum, reversible transitions) — they carry velocity through interruption; CSS keyframes restart from zero and can't be smoothly grabbed mid-flight.
- **Always animate from the current on-screen value**, never the target value, when interrupting — read the live transform, don't jump.
- **Symmetric enter/exit paths.** Something that slides in from the right dismisses to the right. `transform-origin` anchors to the trigger element for popovers/menus/tooltips (modals are exempt — they're not trigger-anchored).
- **Stagger, don't mass-mount.** Lists and grids enter with a 30–80ms cascade delay, never all at once.
- **Gate hover on real pointers:** `@media (hover: hover) and (pointer: fine)` — touch fires false hover states on tap otherwise.
- **Frequency gates whether it animates at all:** 100+ times/day actions (keyboard shortcuts, command-palette toggles) get zero animation; occasional actions (modals, toasts) get standard animation; rare/first-time moments (onboarding, success) are where a delight budget is spent.

## 5. Performance guardrails

- `backdrop-blur` only on fixed/sticky elements (navbars, overlays) — never on scrolling containers or large content areas; it forces continuous GPU repaints.
- Scroll-driven reveals use `IntersectionObserver`, never `window.addEventListener('scroll')`.
- `will-change: transform` sparingly, only on elements actively animating.
- No arbitrary `z-[9999]` — reserve z-index tiers strictly for sticky nav, modals, overlays, tooltips.
- `min-h-[100dvh]`, never `h-screen`, for full-height sections — prevents iOS Safari address-bar layout jumps.

## 6. Typography mechanics

- **Tracking is size-specific.** Large display text wants negative letter-spacing (`-0.02em` to `-0.04em` as it grows); body text stays near `0` or slightly positive at small sizes. One fixed `letter-spacing` value across all sizes is wrong somewhere.
- **Leading tracks size inversely.** Tight leading (`1.0–1.1`) on large display headings, looser (`1.5–1.6`) on body copy.
- **Build hierarchy from weight + size + leading together**, not size alone.
- **Italic descender clearance:** when a display headline uses italic and the word has a descender (`y g j p q`), `leading-none`/`leading-[1]` clips it. Use `leading-[1.1]` minimum plus a `pb-1`/`mb-1` reserve.
- **Emphasize with italic/bold of the same font family**, never a different family mixed into a headline — mixed-family emphasis mid-sentence reads as amateur.
- Never absolute black (`#000`) for body text — use off-black/charcoal for legibility and warmth.

## 7. Image and asset strategy

Priority order, don't skip steps:

1. **Image-generation tool** if available in the environment — generate section-specific assets (hero, product shots, textures) at the right aspect ratio.
2. **Real image sources** — `https://picsum.photos/seed/{descriptive-seed}/{w}/{h}` for placeholders (seed should describe the section), real stock/brand URLs when provided, or licensed sources when explicitly allowed.
3. **Last resort:** leave a clearly labeled placeholder (`<!-- TODO: hero product photo, 1600x1200 -->`) and tell the user exactly what's missing and where.

- **Div-based fake screenshots are banned.** Fake dashboards, fake terminal windows, fake task lists built from `<div>` rectangles are an obvious tell — use a real screenshot, a generated image, or an actual mini-component preview instead.
- **Real logos for social proof.** Use actual SVG marks (Simple Icons CDN, devicon) instead of styled `<span>` wordmarks. For invented brand names, generate a simple monogram SVG rather than plain text.
- **Hand-rolled decorative SVG illustrations are discouraged** except for simple geometric marks the user explicitly requested.
- Text-only pages are incomplete work, even for minimalist briefs — a restrained aesthetic still needs 2–3 real images, just quieter ones.

## 8. Interactive states — implement the full cycle

LLMs default to shipping only the static success state. Always implement:

- **Loading:** skeletal loaders matching the final layout's shape, not generic spinners.
- **Empty:** composed intentionally, shows how to populate.
- **Error:** inline for forms, contextual toast only for transient system errors.
- **Tactile feedback:** `:active` state (`scale-[0.98]` or `-translate-y-[1px]`) simulating a physical press, triggered on pointer-down, not on release.

## 9. Pair with

- `website-layout` — structural composition rules (hero discipline, section rhythm, grid mechanics) once the visual language is set.
