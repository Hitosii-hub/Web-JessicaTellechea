# Tasks: Template tratamientos capilares

## Phase 1: Routing & content foundation

- [x] 1.1 Add `CapilarTreatmentKey`, slug matrix, `hrefCapilarTreatment()`, reverse lookup in `route-registry.ts`
- [x] 1.2 Extend `scripts/verify-route-registry.mjs` for four keys × four locales
- [x] 1.3 Create `src/i18n/capilar-treatments/` types + index exporting four treatments × `es/en/ca/fr`
- [x] 1.4 Author ES medical copy for all blocks (mesoterapia, PRP, carboxiterapia, transplante) + Recraft prompts per image slot
- [x] 1.5 Translate EN/CA/FR parity for all four treatments

## Phase 2: Template components & styles

- [x] 2.1 Create `TreatmentImagePlaceholder.astro` (neutral box + alt; dev comment for prompt)
- [x] 2.2 Create section Astro components: Hero, About, How, PostCare, Precautions (`details`), FAQ (`details`)
- [x] 2.3 Create `TreatmentPage.astro` orchestrator with block order + breadcrumb link to capilar
- [x] 2.4 Add `treatment-page.css` — split layouts C1–C3, centered C4–C6, silent luxury tokens
- [x] 2.5 Create `BeforeAfterCarousel.tsx` — 3 columns, drag compare, prev/next, empty slot placeholders; `client:visible`

## Phase 3: Pages & hub integration

- [x] 3.1 Create `src/pages/[lang]/[segment]/[treatment].astro` with `getStaticPaths` guard on capilar segment
- [x] 3.2 Wire `BaseLayout` title, description, hreflang via treatment key equivalence
- [x] 3.3 Add `treatmentKey` to `capilar-page.ts` hub items; link rows in `CapilarPillarPage.astro`
- [x] 3.4 Optional hub list visual refresh (desktop/mobile capilar CSS only if needed for linked cards)

## Phase 4: Docs & verification

- [x] 4.1 Update `docs/site-architecture.md` — capilar treatment nested URLs
- [x] 4.2 Run `npm run check`, `npm run verify:routes`, `npm run build` (expect 16 new HTML paths)
- [x] 4.3 Smoke: hub links × 4 locales; precautions + FAQ keyboard; compare drag on one slide
