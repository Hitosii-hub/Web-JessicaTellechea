# Web capilar treatment routes

**Status:** Main spec (promoted from change `capilar-treatment-pages`, archived 2026-09-06).  
**Implementation:** `src/i18n/route-registry.ts`, `src/pages/[lang]/[segment]/[treatment].astro`, `src/i18n/capilar-page.ts`.

## Purpose

Rutas estáticas anidadas bajo el pilar capilar para cuatro tratamientos iniciales.

## Requirements

### Requirement: Four treatment keys

The system SHALL support exactly these stable keys: `mesoterapia-capilar`, `prp-capilar`, `carboxiterapia-capilar`, `transplante-capilar`.

#### Scenario: Registry completeness

- GIVEN `capilarTreatmentSlugs` in route registry
- WHEN inspected
- THEN each key SHALL map to one segment per locale in `es`, `en`, `ca`, `fr`

### Requirement: Nested URL shape

Treatment URLs SHALL be `/{lang}/{capilar-segment}/{treatment-segment}/` with trailing slash, where `capilar-segment` matches `segmentFor(lang, 'capilar')`.

#### Scenario: ES mesotherapy URL

- GIVEN locale `es`
- WHEN building href for `mesoterapia-capilar`
- THEN path SHALL be `/es/tratamiento-capilar-barcelona/mesoterapia-capilar-medica/`

### Requirement: Slug matrix v1

| Key | es | en | ca | fr |
|-----|----|----|----|-----|
| mesoterapia-capilar | mesoterapia-capilar-medica | capillary-mesotherapy | mesoterapia-capilar-medica | mesotherapie-capillaire |
| prp-capilar | prp-capilar | capillary-prp | prp-capilar | prp-capillaire |
| carboxiterapia-capilar | carboxiterapia-capilar | capillary-carboxytherapy | carboxiterapia-capilar | carboxitherapie-capillaire |
| transplante-capilar | transplante-capilar | capillary-hair-transplant | transplante-capilar | greffe-capillaire |

#### Scenario: Invalid nested segment

- GIVEN `/es/tratamiento-capilar-barcelona/unknown-slug/`
- WHEN built statically
- THEN that path SHALL NOT be generated

### Requirement: Hub linkage

Capilar pillar `treatments.items` SHALL link each listed treatment to its localized treatment URL via stable key.

#### Scenario: Hub card navigation

- GIVEN capilar pillar in any locale
- WHEN user activates Mesoterapia item
- THEN destination SHALL be the mesotherapy treatment URL for that locale

### Requirement: SEO indexability

Treatment pages SHALL be indexable (not booking/blog deferred pattern). Canonical and hreflang SHALL group the four locale URLs per treatment key.

#### Scenario: hreflang group

- GIVEN mesotherapy pages in four locales
- WHEN head metadata renders
- THEN alternates SHALL reference all four localized URLs plus `x-default` → Spanish

### Requirement: Breadcrumb

Treatment pages SHOULD expose wayfinding: capilar pillar → treatment title (visible or structured data).

#### Scenario: User orientation

- GIVEN any treatment page
- WHEN rendered
- THEN a link to the capilar pillar for that locale SHALL be present near the hero or breadcrumb row
