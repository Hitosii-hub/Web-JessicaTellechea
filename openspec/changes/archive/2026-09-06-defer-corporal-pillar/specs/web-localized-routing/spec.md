# Delta for web-localized-routing

## ADDED Requirements

### Requirement: Corporal pillar launch deferral

When `corporalPublic` in `src/i18n/site-features.ts` is `false`, the system **SHALL** treat the corporal IA intent as **deferred**: routes and page assets **SHALL** remain buildable, but the intent **SHALL NOT** be discoverable via primary navigation, sitemap, or indexable HTML metadata.

#### Scenario: Primary nav hides corporal while deferred

- GIVEN `corporalPublic` is `false`
- WHEN the primary navigation renders on any locale
- THEN the nav **SHALL NOT** include a link whose destination is the corporal pillar for that locale
- AND facial, capilar, trust, and contact items **SHALL** still render per REQ-5

#### Scenario: Corporal URLs stay reachable for preview

- GIVEN `corporalPublic` is `false` and the slug matrix in REQ-2 is unchanged
- WHEN a client requests a corporal pillar URL (e.g. `/es/medicina-estetica-corporal-barcelona/`)
- THEN the response **SHALL** be 200
- AND the page **SHALL** render existing corporal pillar content

#### Scenario: Corporal pages are noindex while deferred

- GIVEN `corporalPublic` is `false`
- WHEN a corporal pillar page is rendered
- THEN the HTML head **SHALL** include `<meta name="robots" content="noindex,follow">`

#### Scenario: Corporal excluded from sitemap while deferred

- GIVEN `corporalPublic` is `false` and a production build completes
- WHEN the generated sitemap is inspected
- THEN no URL **SHALL** contain a corporal segment from REQ-2 for any locale

#### Scenario: Home omits corporal entry point while deferred

- GIVEN `corporalPublic` is `false`
- WHEN the marketing home specialties section renders
- THEN **SHALL NOT** appear a card or link whose destination is the corporal pillar
- AND facial and capilar entry points **SHALL** remain

#### Scenario: Re-enabling corporal restores discoverability

- GIVEN `corporalPublic` is set to `true` and sitemap filter for corporal is disabled
- WHEN the site is rebuilt and deployed
- THEN corporal **SHALL** appear in primary nav, sitemap, and without `noindex` on corporal pages (same policy as facial/capilar)

## MODIFIED Requirements

### Requirement: Primary navigation labels

The primary navigation SHALL display exactly one label per **visible** item per locale, using the following strings when that IA intent is not deferred by launch flags (or a documented editorial update under the same change):

| Item (IA order) | es | en | ca | fr |
|-----------------|----|----|----|-----|
| Home | Inicio | Home | Inici | Accueil |
| Facial pillar | Facial | Facial | Facial | Visage |
| Corporal pillar | Corporal | Body | Corporal | Corporel |
| Capilar pillar | Capilar | Hair | Capil·lar | Capillaire |
| Trust | Criterio medico | Medical Criteria | Criteri mèdic | Critère médical |
| Blog | Blog | Blog | Blog | Blog |
| Contact | Contacto | Contact | Contacte | Contact |

The label **Blog** SHALL remain `Blog` in all four locales unless a separate product decision explicitly amends this spec.

When `blogPublic` is `false`, the Blog row **SHALL NOT** appear in primary navigation. When `corporalPublic` is `false`, the Corporal pillar row **SHALL NOT** appear in primary navigation. Booking remains excluded per REQ-6.

(Previously: nav table assumed all rows always visible except booking.)

#### Scenario: French home nav without deferred items

- GIVEN `blogPublic` is `false` and `corporalPublic` is `false`
- WHEN the French home primary navigation is rendered
- THEN items **SHALL** include Visage, Capillaire, Critère médical, and Contact
- AND items **SHALL NOT** include Blog, Corporel, or the booking utility route
