# Web localized routing and primary navigation

**Status:** Main spec (promoted from change `localized-slugs-nav-conventions`, archived 2026-05-02).  
**Implementation:** `src/i18n/route-registry.ts`, `[lang]/[segment].astro`, nav components, `astro.config.mjs` redirects.

## Normative keywords

Requirements use RFC 2119 terms: **SHALL** (mandatory), **SHOULD** (recommended), **MAY** (optional).

---

## Requirements

### REQ-1 Locale prefix

The system SHALL serve all public core pages under exactly one of these prefixes: `/es/`, `/en/`, `/ca/`, `/fr/`. The first path segment after the host SHALL be the locale code; no other public locale prefix SHALL be valid for these routes.

### REQ-2 Core slug matrix (v1)

For each **IA intent** in the table below, the system SHALL expose exactly the path **prefix + segment** shown for that locale (trailing slash policy SHALL match existing site convention, typically trailing slash on directory-style URLs).

| IA intent | es | en | ca | fr |
|-----------|----|----|----|-----|
| Home | `/es/` | `/en/` | `/ca/` | `/fr/` |
| Pillar facial | `/es/facial/` | `/en/facial/` | `/ca/facial/` | `/fr/visage/` |
| Pillar corporal | `/es/corporal/` | `/en/body/` | `/ca/corporal/` | `/fr/corporel/` |
| Pillar capilar | `/es/capilar/` | `/en/hair/` | `/ca/capillar/` | `/fr/capillaire/` |
| Trust / medical criteria | `/es/criterio-medico/` | `/en/medical-criteria/` | `/ca/criteri-medic/` | `/fr/critere-medical/` |
| Blog index | `/es/blog/` | `/en/blog/` | `/ca/blog/` | `/fr/blog/` |
| Contact | `/es/contacto/` | `/en/contact/` | `/ca/contacte/` | `/fr/contact/` |
| Booking (utility) | `/es/reservar-cita/` | `/en/book-appointment/` | `/ca/reservar-cita/` | `/fr/reserver-rendez-vous/` |

**SHALL NOT:** A single URL path SHALL NOT mix natural-language tokens from different locales in one segment (e.g. no `criterio-medico` under `/en/` once this change is implemented).

### REQ-3 Semantic equivalence

For any two URLs that represent the same IA intent in different locales, the system SHALL treat them as **language alternates** of the same page for SEO purposes (hreflang group), once hreflang is implemented for that page class.

### REQ-4 Slug character set

Path segments for core pages SHALL use **ASCII** letters, digits, and hyphen as in the proposal table. **SHALL NOT** require accented characters in URLs for core pages in v1.

### REQ-5 Primary navigation labels

The primary navigation SHALL display exactly one label per item per locale, using the following strings (or a documented editorial update under the same change):

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

### REQ-6 Booking outside primary nav

The booking route (utility) SHALL NOT appear as an item in the primary navigation on any locale. Users MAY reach it via CTAs, footer, or other secondary surfaces.

### REQ-7 Home representation consistency

For each locale, the site SHALL use **either** logo-only home link **or** a visible home label (per REQ-5), **consistently** across all pages of that locale. The implementation SHALL NOT mix logo-only for one locale and text-only for another without an explicit documented exception in this change.

### REQ-8 hreflang for localized paths

For every core page in REQ-2 where the path segment differs between locales, the HTML head SHOULD include `link rel="alternate" hreflang="…"` entries linking all four locale URLs of that IA intent, plus `hreflang="x-default"` pointing to the **Spanish** URL for that intent, when `site` (or equivalent base URL) is configured.

### REQ-9 Canonical URLs

Each rendered core page SHALL declare a single canonical URL consistent with its locale and localized slug (implementation detail in archived `design.md`).

### REQ-10 Redirects from legacy shared slugs

Before or at production cutover where old URLs used a **shared** segment under non-Spanish locales (e.g. `/en/criterio-medico/`), the deployment SHOULD issue **HTTP 301** from each superseded URL to the corresponding URL in REQ-2. Exact redirect map SHALL be listed in `design.md` or `tasks.md`.

### REQ-11 Out of scope (v1)

The following NEED NOT be specified in implementation of this delta until a follow-up spec adds them:

- Per-locale slugs for **legal** pages (`privacidad`, `cookies`, `aviso-legal`, etc.).
- Per-locale URL segments for **individual blog posts** (content collection ids may remain `es/...` until extended).

### REQ-12 Language switcher targets

The language switcher SHALL navigate to the **equivalent** page in the target locale (same IA intent). When the target locale has a different path segment, the switcher link SHALL use the target localized path, not the source segment.

### REQ-13 Build

After full implementation of this change, `npm run build` SHALL exit with code 0.

---

## Scenarios

### S-1 English body pillar URL

Given the site with this change implemented, when a user requests `/en/body/`, then the response SHALL be 200 and the content SHALL correspond to the corporal pillar intent for English.

### S-2 French trust URL

Given the site, when a user requests `/fr/critere-medical/`, then the response SHALL be 200 and the content SHALL correspond to the medical-criteria / trust intent for French.

### S-3 Catalan capillar URL

Given the site, when a user requests `/ca/capillar/`, then the response SHALL be 200 and the content SHALL correspond to the capilar pillar intent for Catalan (slug per REQ-2 v1).

### S-4 Primary nav excludes booking

Given any locale home, when the primary navigation is rendered, then it SHALL NOT contain a link whose destination is the booking utility route for that locale.

### S-5 Switcher preserves intent across different slugs

Given a user on `/en/medical-criteria/`, when they select Catalan in the language switcher, then they SHALL navigate to `/ca/criteri-medic/` (or the configured canonical form with trailing slash), not to `/ca/criterio-medico/`.

### S-6 Obsolete shared slug (post-redirect)

Given 301 redirects are configured per REQ-10, when a client requests `/en/criterio-medico/`, then the response SHALL be 301 with `Location` pointing to `/en/medical-criteria/` (or equivalent with site policy on trailing slash).

### S-7 Blog label unchanged

Given the French home, when the primary navigation is rendered, then the blog item label SHALL be exactly `Blog`.

### S-8 Build

Given dependencies installed, when `npm run build` runs after implementation, then the process SHALL exit with code 0.

---

## Traceability

| Source | Spec coverage |
|--------|---------------|
| Slug taxonomy v1 | REQ-1, REQ-2, REQ-3, REQ-4 |
| Cross-language navigation labeling | REQ-5, REQ-6, REQ-7 |
| hreflang / canonical / 301 | REQ-8, REQ-9, REQ-10 |
| Legal / blog posts deferred | REQ-11 |
| Language switcher equivalence | REQ-12 |
