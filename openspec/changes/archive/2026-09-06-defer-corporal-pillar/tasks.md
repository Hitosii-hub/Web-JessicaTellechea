# Tasks: Diferir pilar Corporal en producción

## Phase 1: Launch gate foundation

- [x] 1.1 Add `corporalPublic = false` to `src/i18n/site-features.ts` with doc comment pointing to `docs/site-architecture.md`
- [x] 1.2 Add `corporalSegments` (all locales via `segmentFor`) and `isCorporalPath()` to `src/i18n/route-registry.ts`

## Phase 2: Visibility surfaces

- [x] 2.1 Update `src/i18n/nav.ts`: extract `corporalNavItem`; include only when `corporalPublic` is true (mirror `blogNavItem`)
- [x] 2.2 Update `src/layouts/BaseLayout.astro`: import `corporalPublic` + `isCorporalPath`; extend `robots` to `noindex` when deferred corporal route
- [x] 2.3 Update `astro.config.mjs`: add `corporalHiddenFromSitemap = true` and filter pages matching any corporal segment
- [x] 2.4 Update `src/components/home/HomeTreatmentAreas.astro`: build visible `pillars` from flags; map cards only for visible pillars (facial + capilar when corporal deferred)

## Phase 3: Documentation

- [x] 3.1 Update `docs/site-architecture.md`: corporal deferred model (nav, sitemap, noindex, enable via `corporalPublic`)

## Phase 4: Verification

- [x] 4.1 Run `npm run check`
- [x] 4.2 Run `npm run build`; confirm corporal HTML exists in `dist/` but sitemap has no corporal segment URLs
- [x] 4.3 Manual smoke: home nav (no Corporal), home specialties (2 cards), `/es/medicina-estetica-corporal-barcelona/` returns 200 with `noindex`
- [x] 4.4 Grep `href(lang, 'corporal')` in components for stray public links (fix if any)
