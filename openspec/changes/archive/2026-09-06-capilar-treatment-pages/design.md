# Design: Template tratamientos capilares

## Technical Approach

Nested static route `[lang]/[segment]/[treatment].astro` gated on capilar segment; content in `src/i18n/capilar-treatments/` keyed by four stable IDs; composable Astro sections + one Preact island for before/after compare. Mirror Santé block rhythm with existing tokens and pillar patterns (`CapilarPillarPage`, `FacialPillarPage` split sections).

## Architecture Decisions

| Decision | Choice | Alternatives | Rationale |
|----------|--------|--------------|-----------|
| URL nesting | Under capilar segment | Flat `/es/mesoterapia-…/` | IA clara; SEO agrupa capilar |
| Compare UI | Preact `TreatmentCompare.tsx` `client:visible` | CSS-only | Drag handle requerido |
| FAQ / precauciones | Styled `<details>` | Preact accordion | Static-first, a11y nativa |
| Imágenes | `TreatmentImagePlaceholder.astro` | Recraft en build | Sin assets v1; prompt en i18n |
| Hub cards | `<a>` wrapping treatment row | Botón separado | Toda la fila clicable |

## Data Flow

```
capilar-treatments/index.ts (4 keys × 4 locales)
        │
        ├─→ getStaticPaths → [lang]/[segment]/[treatment].astro
        ├─→ TreatmentPage.astro → section components
        └─→ capilar-page.ts items[].treatmentKey → hrefCapilarTreatment()

TreatmentBeforeAfterCarousel.tsx ← slides[{ before, after | null }] from i18n
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/pages/[lang]/[segment]/[treatment].astro` | Create | Static paths + layout |
| `src/i18n/route-registry.ts` | Modify | Keys, matrix, `hrefCapilarTreatment`, reverse map |
| `src/i18n/capilar-treatments/` | Create | Types + 4 treatment records × locales |
| `src/i18n/capilar-page.ts` | Modify | `treatmentKey` on hub items |
| `src/components/treatment/TreatmentPage.astro` | Create | Orchestrator |
| `src/components/treatment/Treatment*.astro` | Create | Hero, About, How, PostCare, Precautions, FAQ |
| `src/components/treatment/TreatmentImagePlaceholder.astro` | Create | Prompt slot |
| `src/features/treatment/BeforeAfterCarousel.tsx` | Create | 3-col carousel + slider |
| `src/styles/components/treatment-page.css` | Create | Layouts + disclosures |
| `src/components/capilar/CapilarPillarPage.astro` | Modify | Linked cards |
| `scripts/verify-route-registry.mjs` | Modify | Treatment slug checks |
| `docs/site-architecture.md` | Modify | Capilar treatments IA |

## Interfaces / Contracts

```ts
export type CapilarTreatmentKey =
  | 'mesoterapia-capilar'
  | 'prp-capilar'
  | 'carboxiterapia-capilar'
  | 'transplante-capilar';

export interface TreatmentPageContent {
  seo: { title: string; description: string };
  hero: { h1: string; primaryCta: string; secondaryCta: string };
  about: { eyebrow: string; title: string; body: string[]; cta: string; image: ImageSlot };
  how: { title: string; body: string[]; benefits: string[]; image: ImageSlot };
  postCare: { title: string; body: string[]; essentials: string[]; image: ImageSlot };
  precautions: {
    eyebrow: string; title: string; trigger: string;
    description: string; before: string[]; after: string[];
  };
  results: { eyebrow: string; title: string; slides: BeforeAfterSlide[] };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
}

interface ImageSlot { alt: string; recraftPrompt: string; src?: string }
interface BeforeAfterSlide { pairs: (BeforeAfterPair | null)[] } // length 3
interface BeforeAfterPair { before: ImageSlot; after: ImageSlot }
```

## Testing Strategy

| Layer | What | How |
|-------|------|-----|
| Types | Content completeness | `npm run check` |
| Routes | 16 pages build | `npm run build` + `verify:routes` |
| Manual | Compare drag, details, hub links | `/es/` capilar → treatment |

## Migration / Rollout

No migration. Ship placeholders; swap `src` on `ImageSlot` when Recraft assets ready.

## Open Questions

- [ ] Human review of medical precaution lists before production (content task in apply).
- [ ] Breadcrumb component vs inline link only (default: inline link in hero).
