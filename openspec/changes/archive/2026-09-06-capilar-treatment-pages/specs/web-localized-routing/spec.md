# Delta for Web localized routing

## ADDED Requirements

### Requirement: Capilar treatment nested routes

The system SHALL expose capilar treatment pages as nested paths under the capilar pillar segment per locale (see `web-capilar-treatment-routes` slug matrix). These URLs SHALL NOT appear in primary navigation (REQ-6). They SHALL be reachable from capilar pillar treatment list and internal links.

#### Scenario: Primary nav unchanged

- GIVEN primary navigation on `/es/`
- WHEN rendered
- THEN nav SHALL include Capilar pillar only
- AND SHALL NOT include individual treatment slugs as top-level items

#### Scenario: Language switcher equivalence

- GIVEN user on `/en/hair-treatment-barcelona/capillary-prp/`
- WHEN switching to `ca`
- THEN target SHALL be `/ca/tractament-capillar-barcelona/prp-capilar/`

### Requirement: Treatment href builder

`route-registry.ts` SHALL provide `hrefCapilarTreatment(locale, treatmentKey)` and reverse lookup helpers for static path generation and language switcher.

#### Scenario: Internal link construction

- GIVEN `hrefCapilarTreatment('fr', 'transplante-capilar')`
- WHEN called
- THEN result SHALL be `/fr/traitement-capillaire-barcelona/greffe-capillaire/`

## MODIFIED Requirements

None.

## REMOVED Requirements

None.
