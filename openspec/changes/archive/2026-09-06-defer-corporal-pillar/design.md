# Design: Diferir pilar Corporal en producción

## Technical Approach

Mirror the shipped **blog deferred** pattern: a boolean in `site-features.ts` gates nav, robots meta, sitemap filter, and home specialty cards. Slug matrix and `[segment].astro` static paths stay unchanged so content remains previewable at direct URLs.

## Architecture Decisions

### Decision: Feature flag over route removal

**Choice:** `corporalPublic = false` in `site-features.ts`  
**Alternatives considered:** Remove corporal from `getStaticPaths`; 301 to home  
**Rationale:** Matches blog/booking product model; one-flag rollback; no content loss

### Decision: Path detection via registry segments

**Choice:** `corporalSegments` + `isCorporalPath()` derived from `segmentFor(locale, 'corporal')`  
**Alternatives considered:** Hardcoded slug list only in `astro.config.mjs`  
**Rationale:** Single source of truth; sitemap filter duplicates list with sync comment

### Decision: Home cards driven by visible pillar list

**Choice:** Filter `pillars: IaKey[]` before mapping `homeContent` cards  
**Alternatives considered:** Remove corporal card from i18n copy  
**Rationale:** Keeps copy intact; index alignment via filtered array + `pillars[index]`

### Decision: hreflang unchanged on deferred pages

**Choice:** Keep alternate links on corporal pages when visited directly  
**Alternatives considered:** Strip hreflang when deferred  
**Rationale:** Pages are `noindex`; alternates on preview URLs are low risk; avoids layout special-cases

## Data Flow

```
site-features.ts (corporalPublic)
        │
        ├─→ nav.ts ──────────────→ PrimaryNav (omit corporal item)
        ├─→ BaseLayout.astro ────→ robots noindex if isCorporalPath
        ├─→ astro.config.mjs ────→ sitemap filter excludes corporal segments
        └─→ HomeTreatmentAreas ──→ pillars filter → 2 cards (facial, capilar)

route-registry.ts
        └─→ isCorporalPath(pathname) ← corporalSegments[]
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/i18n/site-features.ts` | Modify | Add `corporalPublic = false` |
| `src/i18n/route-registry.ts` | Modify | `corporalSegments`, `isCorporalPath()` |
| `src/i18n/nav.ts` | Modify | Conditional `corporalNavItem` |
| `src/layouts/BaseLayout.astro` | Modify | Import flag + extend `robots` |
| `astro.config.mjs` | Modify | `corporalHiddenFromSitemap` + filter |
| `src/components/home/HomeTreatmentAreas.astro` | Modify | Filter pillars/cards |
| `docs/site-architecture.md` | Modify | Document deferral |

## Interfaces / Contracts

```ts
export const corporalPublic = false;
export const corporalSegments: string[];
export function isCorporalPath(pathname: string): boolean;
```

Sitemap sync: set `corporalHiddenFromSitemap = false` when enabling `corporalPublic`.

## Testing Strategy

- `npm run check` — types
- `npm run build` — corporal HTML in `dist/`; sitemap excludes corporal URLs
- Manual: nav without Corporal; home 2 cards; corporal URL shows `noindex`

## Migration / Rollout

1. Ship with `corporalPublic = false`.  
2. To launch corporal: `corporalPublic = true`, `corporalHiddenFromSitemap = false`, redeploy.
