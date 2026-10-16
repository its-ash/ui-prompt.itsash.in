// Automated design-brief gates for generated demo pages (Playwright).
// Returns a list of human-readable issues; empty list = page passes.

const DESKTOP = { width: 1280, height: 800 };
const MOBILE = { width: 390, height: 844 };

export async function createQuality(browser) {
  const desk = await browser.newContext({ viewport: DESKTOP, colorScheme: 'light', reducedMotion: 'reduce' });
  const mob = await browser.newContext({ viewport: MOBILE, colorScheme: 'light', reducedMotion: 'reduce', hasTouch: true });

  async function inspect(file) {
    const issues = [];
    const dp = await desk.newPage();
    const errors = [];
    dp.on('pageerror', (e) => errors.push(e.message));
    try {
      await dp.goto(`file://${file}`, { waitUntil: 'networkidle', timeout: 20000 }).catch(() => {});
      await dp.waitForTimeout(800);
      const d = await dp.evaluate(() => {
        const vis = (el) => {
          const r = el.getBoundingClientRect();
          const s = getComputedStyle(el);
          return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05;
        };
        const main = document.querySelector('main') ?? document.body;
        const hero = main.querySelector('section, header + *') ?? main;
        const ctas = [...hero.querySelectorAll('a, button')].filter(
          (e) => vis(e) && !e.closest('header, nav') && e.id !== 'theme-toggle' && (e.textContent ?? '').trim().length > 1
        );
        const firstCta = ctas[0]?.getBoundingClientRect().bottom ?? null;
        const h1 = document.querySelector('h1');
        const usesSymbols = [...document.querySelectorAll('[class*="material-symbols"], [class*="material-icons"]')].map((e) =>
          [...e.classList].find((c) => c.startsWith('material-'))
        );
        const links = [...document.querySelectorAll('link[href*="fonts.googleapis.com"]')].map((l) => l.href.toLowerCase());
        const missingFonts = [...new Set(usesSymbols)].filter((c) => {
          const fam = c.replace(/-/g, '+').replace('material+symbols+', 'material+symbols+').toLowerCase();
          return !links.some((h) => h.includes(fam.replace('material+icons', 'material+icons')));
        });
        // An icon-font glyph renders ~1em wide; a raw ligature word in a fallback font is much wider.
        const rawIcons = [...document.querySelectorAll('[class*="material-symbols"], [class*="material-icons"]')]
          .filter((e) => {
            const t = (e.textContent ?? '').trim();
            const fs = parseFloat(getComputedStyle(e).fontSize) || 16;
            if (t.length < 4 || !/^[a-z0-9_]+$/.test(t)) return false;
            const r = document.createRange();
            r.selectNodeContents(e);
            return r.getBoundingClientRect().width > fs * 1.6;
          })
          .map((e) => e.textContent.trim());
        return {
          rawIcons: [...new Set(rawIcons)].slice(0, 4),
          firstCta,
          h1: !!h1,
          h1Height: h1 ? h1.getBoundingClientRect().height : 0,
          missingFonts,
          year: /20(1\d|2[0-5])\b/.test(document.querySelector('footer')?.innerText ?? ''),
          scrollCue: /\bscroll( down| to explore)?\b/i.test(document.body.innerText.slice(0, 1500)),
        };
      });
      if (!d.h1) issues.push('there is no <h1> in the hero');
      if (d.firstCta === null) issues.push('the hero has no visible CTA button');
      else if (d.firstCta > DESKTOP.height) issues.push(`the hero CTA ends at ${Math.round(d.firstCta)}px, below the 800px first viewport; shorten the hero (headline max 2-3 lines, smaller display size, less top padding)`);
      if (d.rawIcons.length) issues.push(`icon ligatures render as raw words (${d.rawIcons.join(', ')}); load the exact icon font family via <link> and use its class, or use inline SVG icons`);
      if (d.missingFonts.length) issues.push(`icon classes ${d.missingFonts.join(', ')} are used but their Google Fonts <link> is missing, so raw ligature words show`);
      if (d.year) issues.push('footer copyright year must be 2026');
      if (d.scrollCue) issues.push('remove the scroll cue in the hero');
    } finally {
      await dp.close();
    }

    const mp = await mob.newPage();
    mp.on('pageerror', (e) => errors.push(e.message));
    try {
      await mp.goto(`file://${file}`, { waitUntil: 'networkidle', timeout: 20000 }).catch(() => {});
      await mp.waitForTimeout(600);
      const m = await mp.evaluate(() => {
        const vis = (el) => {
          const r = el.getBoundingClientRect();
          const s = getComputedStyle(el);
          return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none';
        };
        const header = document.querySelector('header') ?? document.body;
        const navLinks = [...header.querySelectorAll('nav a')];
        const hiddenNav = navLinks.length > 0 && navLinks.every((a) => !vis(a));
        const menuBtn = [...header.querySelectorAll('button')].find((b) => vis(b) && b.hasAttribute('aria-expanded'));
        return { overflow: document.documentElement.scrollWidth - innerWidth, hiddenNav, menuBtn: !!menuBtn };
      });
      if (m.overflow > 2) issues.push(`horizontal scroll at 390px (page is ${m.overflow}px too wide); make every multi-column and absolute element collapse on mobile`);
      if (m.hiddenNav && !m.menuBtn) issues.push('at 390px the nav links are hidden and there is no visible menu button with aria-expanded to open them');
      if (m.hiddenNav && m.menuBtn) {
        const btn = mp.locator('header button[aria-expanded]').filter({ visible: true }).first();
        await btn.click({ timeout: 2000 }).catch(() => {});
        await mp.waitForTimeout(400);
        const ctrl = await btn.getAttribute('aria-controls').catch(() => null);
        const opened = await mp.evaluate((id) => {
          const shown = (a) => a.getBoundingClientRect().height > 0 && getComputedStyle(a).visibility !== 'hidden';
          const scope = id && document.getElementById(id);
          const links = scope ? [...scope.querySelectorAll('a')] : [...document.querySelectorAll('header a, nav a, [role="dialog"] a')];
          return links.filter(shown).length >= 2;
        }, ctrl);
        if (!opened) issues.push('the mobile menu button does not reveal the nav links');
      }
    } finally {
      await mp.close();
    }

    if (errors.length) issues.push(`JavaScript errors: ${[...new Set(errors)].slice(0, 2).join(' | ').slice(0, 200)} (declare each variable once; scripts share global scope)`);
    return issues;
  }

  return { inspect, close: () => Promise.all([desk.close(), mob.close()]) };
}

// Replace em-dashes in visible copy (models ignore the ban); keeps code/CSS untouched.
export function stripEmDashes(html) {
  const fix = (t) => t.replace(/\s*(—|&mdash;)\s*/g, (m, d, off, str) => (/\d/.test(str[off - 1] ?? '') && /\d/.test(str[off + m.length] ?? '') ? '-' : ', '));
  return html
    .replace(/<title>([^<]*)<\/title>/i, (m, t) => `<title>${t.replace(/\s*(—|&mdash;)\s*/g, ' - ')}</title>`)
    .replace(/>([^<>]*?)</g, (m, t) => (/(—|&mdash;)/.test(t) ? `>${fix(t)}<` : m))
    .replace(/(aria-label|alt|title|placeholder)="([^"]*)"/g, (m, a, v) => `${a}="${fix(v)}"`);
}
