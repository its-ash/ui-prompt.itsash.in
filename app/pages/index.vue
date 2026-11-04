<script setup lang="ts">
import type { LocationQueryRaw } from 'vue-router';
import type { Facet } from '~/components/FilterPanel.vue';
import type { Hit, Row, Sort } from '~/utils/search';

const PAGE = 36;
const AUTO_MAX = 144;

const library = await useLibrary();
const route = useRoute();
const router = useRouter();
const { siteUrl, siteName, siteDescription } = useRuntimeConfig().public;

const fmt = (n: number) => n.toLocaleString('en-US');
const one = (v: unknown) => (typeof v === 'string' ? v : Array.isArray(v) && typeof v[0] === 'string' ? v[0] : '');

const rows = computed(() => library.value.index.map(toRow));
const total = computed(() => rows.value.length);
const cats = computed(() => library.value.categories.map((label) => ({ slug: slug(label), label })));
const eraList = computed(() => [...new Set(rows.value.map((r) => r.era))].sort((a, b) => eraRank(b) - eraRank(a)));
const tagTotals = computed(() => {
  const m = new Map<string, number>();
  for (const r of rows.value) for (const t of r.tags) m.set(t, (m.get(t) ?? 0) + 1);
  return m;
});
const popular = computed(() => [...tagTotals.value].sort((a, b) => b[1] - a[1]).slice(0, 18).map(([t]) => t));

const span = computed(() => {
  const ds = library.value.index.map((i) => decadeOf(i.era)).filter(Boolean);
  return ds.length ? `${Math.min(...ds)}s to ${Math.max(...ds)}s` : '';
});
const updated = computed(() => {
  const d = new Date(library.value.generatedAt);
  return Number.isNaN(d.getTime())
    ? ''
    : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
});

const live = ref(false);
const query = computed(() => (live.value ? route.query : {}));
const cat = computed(() => {
  const v = one(query.value.cat);
  return cats.value.some((c) => c.slug === v) ? v : '';
});
const era = computed(() => {
  const v = one(query.value.era);
  return eraList.value.includes(v) ? v : '';
});
const tags = computed(() => [...new Set(one(query.value.tag).split(',').filter((t) => tagTotals.value.has(t)))]);
const text = ref('');
const ts = computed(() => tokens(text.value));
const sort = computed<Sort>(() => {
  const v = one(query.value.sort) as Sort;
  return v in sorters && (v !== 'match' || ts.value.length) ? v : ts.value.length ? 'match' : 'num';
});
const sortOptions = computed(() => SORTS.filter((o) => o.value !== 'match' || ts.value.length));

const build = (patch: Record<string, string | undefined>): LocationQueryRaw => {
  const next: Record<string, string | undefined> = {
    q: text.value.trim() || undefined,
    cat: cat.value || undefined,
    era: era.value || undefined,
    tag: tags.value.join(',') || undefined,
    sort: one(query.value.sort) || undefined,
    ...patch,
  };
  return Object.fromEntries(Object.entries(next).filter(([, v]) => v));
};
const to = (patch: Record<string, string | undefined>) => ({ path: '/', query: build(patch) });
const go = (patch: Record<string, string | undefined>, replace = false) =>
  replace ? router.replace(to(patch)) : router.push(to(patch));

let qTimer: ReturnType<typeof setTimeout> | undefined;
watch(text, (v) => {
  if (!live.value) return;
  clearTimeout(qTimer);
  qTimer = setTimeout(() => {
    qTimer = undefined;
    const q = v.trim();
    if (q !== one(route.query.q)) go({ q: q || undefined }, true);
  }, 250);
});
watch(
  () => one(query.value.q),
  (v) => {
    if (!qTimer && v !== text.value.trim()) text.value = v;
  },
);

const setSort = (v: string) => go({ sort: v === (ts.value.length ? 'match' : 'num') ? undefined : v });

const scored = computed<Hit[]>(() => {
  const t = ts.value;
  if (!t.length) return rows.value.map((r) => ({ r, s: 0 }));
  const out: Hit[] = [];
  for (const r of rows.value) {
    const s = score(r, t);
    if (s) out.push({ r, s });
  }
  return out;
});
const keep = (h: Hit, skip?: 'cat' | 'era') =>
  (skip === 'cat' || !cat.value || h.r.cat === cat.value) &&
  (skip === 'era' || !era.value || h.r.era === era.value) &&
  tags.value.every((t) => h.r.tags.includes(t));
const results = computed(() => scored.value.filter((h) => keep(h)).sort(sorters[sort.value]));
const tally = (skip: 'cat' | 'era' | undefined, key: (r: Row) => string[]) => {
  const m = new Map<string, number>();
  for (const h of scored.value) if (keep(h, skip)) for (const k of key(h.r)) m.set(k, (m.get(k) ?? 0) + 1);
  return m;
};
const catCount = computed(() => tally('cat', (r) => [r.cat]));
const eraCount = computed(() => tally('era', (r) => [r.era]));
const tagCount = computed(() => tally(undefined, (r) => r.tags));

const facets = computed(() => {
  const all: Facet = {
    slug: 'all',
    label: 'All styles',
    count: [...catCount.value.values()].reduce((a, b) => a + b, 0),
    on: !cat.value,
    to: to({ cat: undefined }),
  };
  const catF: Facet[] = cats.value.map((c) => ({
    ...c,
    count: catCount.value.get(c.slug) ?? 0,
    on: cat.value === c.slug,
    to: to({ cat: cat.value === c.slug ? undefined : c.slug }),
  }));
  const eraF: Facet[] = eraList.value.map((e) => ({
    slug: e,
    label: eraLabel(e),
    count: eraCount.value.get(e) ?? 0,
    on: era.value === e,
    to: to({ era: era.value === e ? undefined : e }),
  }));
  const tagF: Facet[] = [...new Set([...tags.value, ...popular.value])].map((t) => {
    const on = tags.value.includes(t);
    const next = on ? tags.value.filter((x) => x !== t) : [...tags.value, t];
    return { slug: t, label: tagLabel(t), count: tagCount.value.get(t) ?? 0, on, to: to({ tag: next.join(',') || undefined }) };
  });
  return { all, cats: catF, eras: eraF, tags: tagF };
});

const active = computed(() => [
  ...(text.value.trim() ? [{ key: 'q', label: `"${text.value.trim()}"`, to: to({ q: undefined }) }] : []),
  ...(cat.value ? [{ key: 'cat', label: cats.value.find((c) => c.slug === cat.value)?.label ?? cat.value, to: to({ cat: undefined }) }] : []),
  ...(era.value ? [{ key: 'era', label: eraLabel(era.value), to: to({ era: undefined }) }] : []),
  ...tags.value.map((t) => ({ key: `tag-${t}`, label: tagLabel(t), to: to({ tag: tags.value.filter((x) => x !== t).join(',') || undefined }) })),
]);
const filterCount = computed(() => (cat.value ? 1 : 0) + (era.value ? 1 : 0) + tags.value.length);

const limit = ref(PAGE);
const shown = computed(() => results.value.slice(0, limit.value));
const rest = computed(() => results.value.length - shown.value.length);
const sentinel = useTemplateRef<HTMLElement>('sentinel');
let io: IntersectionObserver | undefined;

const recheck = () =>
  nextTick(() => {
    if (io && sentinel.value) {
      io.unobserve(sentinel.value);
      io.observe(sentinel.value);
    }
  });
const more = () => {
  if (limit.value >= Math.min(AUTO_MAX, results.value.length)) return;
  limit.value += PAGE;
  recheck();
};
const showMore = () => (limit.value += PAGE);

watch([text, cat, era, () => tags.value.join(), sort], () => {
  limit.value = PAGE;
  recheck();
});

const announce = ref('');
let aTimer: ReturnType<typeof setTimeout> | undefined;
watch(
  () => results.value.length,
  (n) => {
    clearTimeout(aTimer);
    aTimer = setTimeout(() => (announce.value = `${fmt(n)} ${n === 1 ? 'style' : 'styles'} found`), 600);
  },
);

const field = useTemplateRef<HTMLInputElement>('field');
const typing = (t: EventTarget | null) =>
  t instanceof HTMLElement && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
const onKey = (e: KeyboardEvent) => {
  if ((e.key === '/' && !typing(e.target)) || (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey))) {
    e.preventDefault();
    field.value?.focus();
    field.value?.select();
  }
};
const onEsc = () => {
  if (text.value) text.value = '';
  else field.value?.blur();
};
const clear = () => {
  text.value = '';
  field.value?.focus();
};

const sheet = useTemplateRef<HTMLDialogElement>('sheet');
const sheetOpen = ref(false);
const openSheet = () => {
  sheetOpen.value = true;
  sheet.value?.showModal();
};
const closeSheet = () => sheet.value?.close();
const onSheetClick = (e: MouseEvent) => {
  if (e.target === sheet.value) closeSheet();
};

const toast = ref('');
let tTimer: ReturnType<typeof setTimeout> | undefined;
const onCopied = (name: string, ok: boolean) => {
  toast.value = ok ? `Prompt copied: ${name}` : `Could not copy. Open ${name} to copy the prompt.`;
  clearTimeout(tTimer);
  tTimer = setTimeout(() => (toast.value = ''), 2600);
};

const directory = computed(() =>
  cats.value.map((c) => ({
    label: c.label,
    items: rows.value
      .filter((r) => r.cat === c.slug)
      .map((r) => ({ id: r.item.id, name: r.item.name, num: r.item.id.split('-')[0] ?? '' })),
  })),
);

onMounted(() => {
  io = new IntersectionObserver(([e]) => e?.isIntersecting && more(), { rootMargin: '800px 0px' });
  if (sentinel.value) io.observe(sentinel.value);
  window.addEventListener('keydown', onKey);
  live.value = true;
});

onBeforeUnmount(() => {
  io?.disconnect();
  window.removeEventListener('keydown', onKey);
  [qTimer, aTimer, tTimer].forEach(clearTimeout);
});

const pageTitle = `${siteName} - ${fmt(total.value)} UI Theme Prompts with Live Demos`;

useSeoMeta({
  title: pageTitle,
  description: siteDescription,
  ogTitle: pageTitle,
  ogDescription: siteDescription,
  ogType: 'website',
  ogUrl: `${siteUrl}/`,
  ogImage: `${siteUrl}/og.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${siteName} library of UI theme previews`,
  twitterTitle: pageTitle,
  twitterDescription: siteDescription,
  twitterImage: `${siteUrl}/og.png`,
});

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: siteName, description: siteDescription, inLanguage: 'en' },
          {
            '@type': 'CollectionPage',
            '@id': `${siteUrl}/#collection`,
            url: `${siteUrl}/`,
            name: pageTitle,
            description: siteDescription,
            isPartOf: { '@id': `${siteUrl}/#website` },
            about: cats.value.map((c) => ({ '@type': 'Thing', name: c.label })),
            mainEntity: { '@type': 'ItemList', numberOfItems: total.value },
          },
        ],
      }),
    },
  ],
});
</script>

<template>
  <div class="pg">
    <SiteHeader :search="false" />

    <main class="pg__main">
      <section class="mast" aria-labelledby="mast-title">
        <div class="mast__lede">
          <p class="mast__eyebrow mono">Interface style index</p>
          <h1 id="mast-title" class="mast__title">
            A field guide to <em>{{ fmt(total) }}</em> interface styles
          </h1>
          <p class="mast__sub">
            Each style comes with a live demo and a build prompt. Find one you like, copy the prompt, and paste it into
            your coding agent.
          </p>
        </div>
        <dl class="mast__facts mono">
          <div>
            <dt>Styles</dt>
            <dd>{{ fmt(total) }}</dd>
          </div>
          <div>
            <dt>Categories</dt>
            <dd>{{ cats.length }}</dd>
          </div>
          <div v-if="span">
            <dt>Eras</dt>
            <dd>{{ span }}</dd>
          </div>
          <div v-if="updated">
            <dt>Updated</dt>
            <dd>
              <time :datetime="library.generatedAt">{{ updated }}</time>
            </dd>
          </div>
        </dl>
      </section>

      <div class="tb">
        <div class="tb__row">
          <form class="tb__search" role="search" @submit.prevent="field?.blur()">
            <label for="q" class="sr-only">Search styles</label>
            <span class="material-symbols-rounded tb__icon" aria-hidden="true">search</span>
            <input
              id="q"
              ref="field"
              v-model="text"
              class="tb__input"
              type="search"
              placeholder="Search name, mood, era, keyword"
              autocomplete="off"
              spellcheck="false"
              maxlength="80"
              enterkeyhint="search"
              aria-describedby="q-hint"
              @keydown.esc.prevent="onEsc"
            />
            <span id="q-hint" class="sr-only">Press slash or Control K to jump here.</span>
            <button v-if="text" type="button" class="tb__clear" aria-label="Clear search" @click="clear">
              <span class="material-symbols-rounded" aria-hidden="true">close</span>
            </button>
            <kbd v-else class="tb__kbd mono" aria-hidden="true">/</kbd>
          </form>

          <p class="tb__count mono">
            <strong>{{ fmt(results.length) }}</strong>
            <span class="tb__of"> of {{ fmt(total) }}</span>
          </p>

          <label class="tb__sort">
            <span class="tb__sortlabel mono">Sort</span>
            <select class="tb__select" :value="sort" @change="setSort(($event.target as HTMLSelectElement).value)">
              <option v-for="o in sortOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
            </select>
            <span class="material-symbols-rounded tb__caret" aria-hidden="true">expand_more</span>
          </label>

          <button type="button" class="tb__filters" aria-haspopup="dialog" @click="openSheet">
            <span class="material-symbols-rounded" aria-hidden="true">tune</span>
            Filters
            <span v-if="filterCount" class="tb__badge mono">{{ filterCount }}</span>
          </button>
        </div>

        <nav class="tb__cats" aria-label="Categories">
          <NuxtLink
            v-for="c in [facets.all, ...facets.cats]"
            :key="c.slug"
            :to="c.to"
            class="tb__cat"
            :class="{ 'tb__cat--on': c.on }"
            :aria-current="c.on ? 'true' : undefined"
            :prefetch="false"
          >
            {{ c.label }} <span class="mono">{{ c.count }}</span>
          </NuxtLink>
        </nav>
      </div>

      <div class="lib">
        <aside class="lib__side" aria-label="Filters">
          <FilterPanel idp="side" v-bind="facets" />
        </aside>

        <section class="lib__main" aria-labelledby="res-h">
          <h2 id="res-h" class="lib__h mono">
            <strong>{{ fmt(results.length) }}</strong> {{ results.length === 1 ? 'style' : 'styles' }}
          </h2>

          <ul v-if="active.length" class="lib__active" aria-label="Active filters">
            <li v-for="a in active" :key="a.key">
              <NuxtLink :to="a.to" class="lib__pill" :aria-label="`Remove filter ${a.label}`" :prefetch="false">
                {{ a.label }}
                <span class="material-symbols-rounded" aria-hidden="true">close</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="lib__reset" :prefetch="false">Clear all</NuxtLink>
            </li>
          </ul>

          <ul v-if="shown.length" class="grid">
            <li v-for="(h, i) in shown" :key="h.r.item.id" class="grid__cell">
              <DesignCard :item="h.r.item" :eager="i < 4" @copied="onCopied" />
            </li>
          </ul>

          <div v-else class="empty">
            <p class="empty__mark mono" aria-hidden="true">0</p>
            <h3 class="empty__title">No styles match that.</h3>
            <p class="empty__text">
              Try a broader word, check the spelling, or remove a filter. Searches cover names, moods, eras and
              descriptions.
            </p>
            <div class="empty__acts">
              <NuxtLink to="/" class="btn btn--ink" :prefetch="false">Clear search and filters</NuxtLink>
              <NuxtLink
                v-for="s in ['brutalist', 'glass', 'editorial', 'retro']"
                :key="s"
                :to="{ path: '/', query: { q: s } }"
                class="btn"
                :prefetch="false"
              >
                {{ s }}
              </NuxtLink>
            </div>
          </div>

          <div ref="sentinel" class="lib__sentinel" aria-hidden="true"></div>

          <div v-if="rest > 0" class="lib__more">
            <button type="button" class="btn btn--ink" @click="showMore">
              Show {{ Math.min(PAGE, rest) }} more
            </button>
            <span class="lib__progress mono">{{ fmt(shown.length) }} of {{ fmt(results.length) }} shown</span>
          </div>
        </section>
      </div>

      <LazyThemeDirectory hydrate-never :total="fmt(total)" :groups="directory" />
    </main>

    <footer class="ft">
      <p class="ft__brand">UI<em>-Prompt</em></p>
      <p class="ft__note">Demos are generated from each prompt. Review the output before you ship it.</p>
      <a href="#mast-title" class="ft__top">Back to top</a>
    </footer>

    <p class="sr-only" role="status">{{ announce }}</p>
    <div class="toast" role="status" aria-live="polite">
      <p v-if="toast" class="toast__msg">{{ toast }}</p>
    </div>

    <dialog ref="sheet" class="sheet" aria-labelledby="sheet-h" @close="sheetOpen = false" @click="onSheetClick">
      <div class="sheet__in">
        <div class="sheet__head">
          <h2 id="sheet-h" class="sheet__title">Filters</h2>
          <button type="button" class="sheet__x" aria-label="Close filters" @click="closeSheet">
            <span class="material-symbols-rounded" aria-hidden="true">close</span>
          </button>
        </div>
        <div class="sheet__body">
          <label class="sheet__sort">
            <span class="tb__sortlabel mono">Sort</span>
            <span class="sheet__selwrap">
              <select class="tb__select" :value="sort" @change="setSort(($event.target as HTMLSelectElement).value)">
                <option v-for="o in sortOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
              </select>
              <span class="material-symbols-rounded tb__caret" aria-hidden="true">expand_more</span>
            </span>
          </label>
          <FilterPanel v-if="sheetOpen" idp="sheet" v-bind="facets" />
        </div>
        <div class="sheet__foot">
          <NuxtLink v-if="filterCount" :to="to({ cat: undefined, era: undefined, tag: undefined })" class="btn" :prefetch="false">
            Reset
          </NuxtLink>
          <button type="button" class="btn btn--ink sheet__done" @click="closeSheet">
            Show {{ fmt(results.length) }} {{ results.length === 1 ? 'style' : 'styles' }}
          </button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
.pg {
  --pad: clamp(1rem, 3vw, 2rem);
  --tb-h: 72px;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.pg__main {
  flex: 1;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 var(--pad) 3rem;
}

.mast {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.75rem;
  padding: clamp(2rem, 5vw, 4rem) 0 clamp(1.5rem, 3vw, 2.5rem);
}

.mast__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-faint);
}

.mast__eyebrow::before {
  content: '';
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 2px;
  background: var(--accent);
}

.mast__title {
  margin-top: 0.875rem;
  max-width: 15ch;
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 7.2vw, 6.25rem);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.mast__title em {
  color: var(--accent);
  font-variant-numeric: lining-nums;
}

.mast__sub {
  margin-top: 1.25rem;
  max-width: 52ch;
  font-size: clamp(1rem, 1.3vw, 1.125rem);
  color: var(--text-dim);
}

.mast__facts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--text);
  align-self: end;
}

.mast__facts > div {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);
}

.mast__facts dt {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-faint);
}

.mast__facts dd {
  font-size: 0.9375rem;
  color: var(--text);
}

.tb {
  position: sticky;
  top: 0;
  z-index: 20;
  margin: 0 calc(var(--pad) * -1);
  padding: 0.75rem var(--pad);
  border-block: 1px solid var(--border);
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

@media (prefers-reduced-transparency: reduce) {
  .tb {
    background: var(--bg);
    backdrop-filter: none;
  }
}

.tb__row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-areas: 'search filters';
  align-items: center;
  gap: 0.5rem 0.75rem;
}

.tb__search {
  grid-area: search;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 48px;
  padding: 0 0.375rem 0 0.875rem;
  border: 1px solid var(--border-ui);
  border-radius: var(--radius-md);
  background: var(--bg-raised);
  transition: border-color var(--transition-fast);
}

.tb__search:focus-within {
  border-color: var(--text);
  outline: 2px solid var(--accent);
  outline-offset: 1px;
}

.tb__icon {
  font-size: 22px;
  color: var(--text-faint);
}

.tb__input {
  flex: 1;
  min-width: 0;
  height: 100%;
  border: 0;
  background: none;
  font-size: 1rem;
}

.tb__input:focus {
  outline: none;
}

.tb__input::placeholder {
  color: var(--text-faint);
}

.tb__input::-webkit-search-cancel-button {
  appearance: none;
}

.tb__kbd {
  display: grid;
  place-items: center;
  min-width: 1.75rem;
  height: 1.75rem;
  margin-right: 0.375rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  font-size: 0.8125rem;
  color: var(--text-faint);
}

.tb__clear {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  color: var(--text-dim);
}

.tb__clear .material-symbols-rounded {
  font-size: 20px;
}

@media (hover: hover) and (pointer: fine) {
  .tb__clear:hover {
    background: var(--bg-hover);
    color: var(--text);
  }
}

.tb__count {
  display: none;
  font-size: 0.8125rem;
  color: var(--text-faint);
  white-space: nowrap;
}

.tb__count strong {
  font-weight: 500;
  color: var(--text);
}

.tb__sort {
  grid-area: sort;
  position: relative;
  display: none;
  align-items: center;
  gap: 0.5rem;
}

.tb__sortlabel {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-faint);
}

.tb__select {
  appearance: none;
  height: 44px;
  padding: 0 2.25rem 0 0.75rem;
  border: 1px solid var(--border-ui);
  border-radius: var(--radius-md);
  background: var(--bg-raised);
  font-size: 0.875rem;
  cursor: pointer;
}

.tb__caret {
  position: absolute;
  right: 0.5rem;
  font-size: 20px;
  color: var(--text-dim);
  pointer-events: none;
}

.tb__filters {
  grid-area: filters;
  justify-self: start;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  height: 44px;
  padding: 0 0.875rem;
  border: 1px solid var(--border-ui);
  border-radius: var(--radius-md);
  background: var(--bg-raised);
  font-size: 0.875rem;
  font-weight: 600;
}

.tb__filters .material-symbols-rounded {
  font-size: 20px;
}

.tb__badge {
  display: grid;
  place-items: center;
  min-width: 1.375rem;
  height: 1.375rem;
  padding: 0 0.25rem;
  border-radius: var(--radius-sm);
  background: var(--accent);
  color: var(--accent-ink);
  font-size: 0.75rem;
}

.tb__cats {
  display: flex;
  gap: 0.375rem;
  margin: 0.625rem calc(var(--pad) * -1) 0;
  padding: 0 var(--pad) 0.125rem;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-padding-inline: var(--pad);
  mask-image: linear-gradient(90deg, #000 85%, transparent);
}

.tb__cats::-webkit-scrollbar {
  display: none;
}

.tb__cat {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  min-height: 40px;
  padding: 0 0.75rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  font-size: 0.8438rem;
  white-space: nowrap;
  text-decoration: none;
}

.tb__cat .mono {
  font-size: 0.75rem;
  color: var(--text-faint);
}

.tb__cat--on {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--ink-on);
  font-weight: 600;
}

.tb__cat--on .mono {
  color: inherit;
}

.lib {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2rem;
  padding-top: 1.25rem;
}

.lib__side {
  display: none;
}

.lib__main {
  min-width: 0;
}

.lib__h {
  margin-bottom: 0.75rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--text-faint);
}

.lib__h strong {
  font-weight: 500;
  color: var(--text);
}

.lib__active {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.375rem;
  margin-bottom: 1rem;
}

.lib__pill {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 36px;
  max-width: 100%;
  padding: 0 0.5rem 0 0.75rem;
  border-radius: var(--radius-md);
  background: var(--accent-soft);
  color: var(--text);
  font-size: 0.875rem;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.lib__pill .material-symbols-rounded {
  font-size: 18px;
  color: var(--accent);
}

.lib__reset {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 0.5rem;
  font-size: 0.875rem;
  color: var(--text-dim);
  text-underline-offset: 3px;
}

.grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 158px), 1fr));
  gap: 0.75rem;
}

.grid__cell {
  min-width: 0;
}

.lib__sentinel {
  height: 1px;
}

.lib__more {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem 1.25rem;
  padding: 2rem 0 1rem;
}

.lib__progress {
  font-size: 0.8125rem;
  color: var(--text-faint);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 44px;
  padding: 0 1.125rem;
  border: 1px solid var(--border-ui);
  border-radius: var(--radius-md);
  background: var(--bg-raised);
  color: var(--text);
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast),
    scale var(--transition-fast);
}

.btn--ink {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--ink-on);
}

.btn:active {
  scale: 0.97;
}

@media (hover: hover) and (pointer: fine) {
  .btn:hover {
    background: var(--bg-hover);
  }

  .btn--ink:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--accent-ink);
  }

  .tb__cat:not(.tb__cat--on):hover,
  .tb__filters:hover,
  .tb__select:hover {
    background: var(--bg-hover);
  }

  .lib__reset:hover {
    color: var(--text);
  }
}

.empty {
  display: grid;
  justify-items: start;
  gap: 0.75rem;
  max-width: 40rem;
  padding: clamp(2rem, 6vw, 4rem) 0;
}

.empty__mark {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  background: var(--accent);
  color: var(--accent-ink);
}

.empty__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  line-height: 1;
}

.empty__text {
  color: var(--text-dim);
}

.empty__acts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.ft {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.5rem;
  padding: 1.5rem var(--pad) 6rem;
  border-top: 1px solid var(--border);
  font-size: 0.875rem;
  color: var(--text-dim);
}

.ft__brand {
  font-family: var(--font-display);
  font-size: 1.375rem;
  color: var(--text);
}

.ft__brand em {
  color: var(--accent);
}

.ft__note {
  flex: 1 1 18rem;
}

.ft__top {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--text);
  text-underline-offset: 3px;
}

.toast {
  position: fixed;
  left: 50%;
  bottom: max(1rem, env(safe-area-inset-bottom));
  z-index: 50;
  translate: -50% 0;
  width: max-content;
  max-width: calc(100vw - 2rem);
  pointer-events: none;
}

.toast__msg {
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  background: var(--ink);
  color: var(--ink-on);
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 12px 30px -12px var(--shadow);
  transition:
    opacity 200ms var(--ease-standard),
    translate 200ms var(--ease-standard);
}

@starting-style {
  .toast__msg {
    opacity: 0;
    translate: 0 8px;
  }
}

.sheet {
  width: 100%;
  max-width: 100%;
  max-height: min(88dvh, 44rem);
  margin: auto 0 0;
  padding: 0;
  border: 0;
  border-radius: 12px 12px 0 0;
  background: var(--bg);
  color: var(--text);
  transition:
    translate 260ms var(--ease-standard),
    overlay 260ms allow-discrete,
    display 260ms allow-discrete;
  translate: 0 100%;
}

.sheet[open] {
  translate: 0 0;
}

@starting-style {
  .sheet[open] {
    translate: 0 100%;
  }
}

.sheet::backdrop {
  background: rgb(10 9 7 / 0.5);
  opacity: 0;
  transition:
    opacity 260ms var(--ease-standard),
    overlay 260ms allow-discrete,
    display 260ms allow-discrete;
}

.sheet[open]::backdrop {
  opacity: 1;
}

@starting-style {
  .sheet[open]::backdrop {
    opacity: 0;
  }
}

.sheet__in {
  display: flex;
  flex-direction: column;
  max-height: inherit;
}

.sheet__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0.75rem 0.75rem 1.25rem;
  border-bottom: 1px solid var(--border);
}

.sheet__title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1;
}

.sheet__x {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
}

.sheet__body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 1.25rem;
}

.sheet__foot {
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem max(0.75rem, env(safe-area-inset-bottom));
  border-top: 1px solid var(--border);
}

.sheet__done {
  flex: 1;
}

.sheet__sort {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.sheet__selwrap {
  position: relative;
  display: flex;
  align-items: center;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 232px), 1fr));
    gap: 1rem;
  }

  .tb__row {
    grid-template-columns: minmax(0, 1fr) auto auto auto;
    grid-template-areas: 'search count filters sort';
  }

  .tb__count {
    display: block;
    grid-area: count;
  }

  .tb__sort {
    display: flex;
  }

  .lib__h {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .sheet__sort {
    display: none;
  }

  .mast__facts {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .mast {
    grid-template-columns: minmax(0, 1fr) minmax(16rem, 22rem);
    align-items: end;
    gap: 3rem;
  }

  .mast__facts {
    grid-template-columns: minmax(0, 1fr);
  }

  .mast__facts > div {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }

  .tb__row {
    grid-template-columns: minmax(0, 40rem) 1fr auto;
    grid-template-areas: 'search count sort';
  }

  .tb__count {
    justify-self: start;
  }

  .tb__filters,
  .tb__cats {
    display: none;
  }

  .lib {
    grid-template-columns: 15.5rem minmax(0, 1fr);
    gap: 2.5rem;
    padding-top: 1.5rem;
  }

  .lib__side {
    display: block;
    position: sticky;
    top: calc(var(--tb-h) + 1rem);
    align-self: start;
    max-height: calc(100dvh - var(--tb-h) - 2rem);
    overflow-y: auto;
    overscroll-behavior: contain;
    padding-right: 0.25rem;
    scrollbar-width: thin;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sheet,
  .sheet[open],
  .toast__msg {
    translate: none;
  }

  .sheet {
    transition:
      opacity 200ms ease-out,
      overlay 200ms allow-discrete,
      display 200ms allow-discrete;
    opacity: 0;
  }

  .sheet[open] {
    opacity: 1;
  }

  @starting-style {
    .sheet[open] {
      translate: none;
      opacity: 0;
    }

    .toast__msg {
      translate: none;
    }
  }

  .btn:active {
    scale: none;
  }
}
</style>
