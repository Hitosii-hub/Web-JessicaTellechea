# SEO and Localization - Dra. Jessica Tellechea Public Website

## Local SEO Baseline

- Keep local relevance centered on Barcelona intent where commercially appropriate.
- Preserve one unique H1 per page.
- Keep metadata concise and page-specific (title/description by intent, not keyword stuffing).
- Use clean, readable URLs.
- Support local trust signals through consistent contact/location data and practitioner identity.
- Use blog content to expand topical authority around Facial, Body, Hair, and medical-criteria education.

## Multilingual Implications (Decided Direction)

- Supported languages (**priority order** for defaults, fallbacks, and phased translation when scope is tight):
  1. **Spanish (es)** — primary site language and editorial source of truth.
  2. **English (en)** — second priority (international / discovery).
  3. **Catalan (ca)** — third.
  4. **French (fr)** — fourth.
- Recommended URL model: language subdirectories (`/es/`, `/en/`, `/ca/`, `/fr/`). Default entry and `hreflang` **`x-default`** should point to **Spanish** URLs unless product explicitly changes this.
- Implement cross-language equivalence with hreflang across all translated core pages; `x-default` aligns with Spanish per priority above.

## Likely Localization Structure

- Core pages expected in all four languages (each under `/es/`, `/en/`, `/ca/`, `/fr/` with **localized path segments** per intent; see `openspec/specs/web-localized-routing/spec.md` REQ-2):
  - Home
  - Facial pillar
  - Corporal pillar
  - Capilar pillar
  - Trust / medical criteria
  - Contact (valuation capture)
  - Booking utility (`noindex`)
- Blog rollout assumption:
  - Spanish-first launch
  - selective translation of evergreen/high-performing content in later phases

## Translation Scope Assumptions

- Conversion-critical UI text must be fully localized (CTAs, form labels, validation/system messages).
- Legal/compliance pages require full localization parity in all 4 languages at launch.
- Medical phrasing should be terminology-reviewed to avoid drift across locales.
- SEO metadata should be localized, not mechanically copied.

### Legal/Compliance minimum scope at launch (4 languages)

- Privacy policy
- Cookies policy
- Legal notice
- Form consent language

## URL, Slug, and Metadata Guidance

- **Source of truth:** `openspec/specs/web-localized-routing/spec.md` (REQ-2 matrix). Spanish keeps legacy-shaped slugs where editorial (`contacto`, `criterio-medico`); EN/FR/CA use locale-appropriate segments (e.g. `/en/body/`, `/fr/visage/`, `/ca/contacte/`).
- Code: `src/i18n/route-registry.ts` (`segmentFor`, `href`, `iaKeyFromPath`) must stay aligned with that matrix.
- Maintain stable semantic equivalents per intent; avoid mixed-language slug sets under one locale prefix.
- Avoid accented characters in URL path segments for core pages (v1).
- **301:** Legacy shared Spanish-shaped paths under non-`es` locales are redirected in `astro.config.mjs` (see archived change checklist). Static build emits redirect stubs at those origins.
- Keep conversion route naming consistent across locales (localized labels, predictable URL pattern).

## Dossier-Implied SEO Rules To Retain

- Single H1 per page.
- Local-intent keyword alignment by core page type.
- Image optimization and performance as baseline.
- Blog used as authority engine, not as isolated content dump.

## Open SEO/Localization Decisions

- Exact locale-specific keyword maps by page.
- Canonical strategy for partially translated blog archives.
- Governance model for translation QA and medical-language approval.

## Decided SEO/Localization Items

- Booking route is a utility wrap over a third-party gateway and should be `noindex`.
- Canonical trust-page slug in source language remains `criterio-medico`.
- Core legal/compliance content must be available in all 4 languages from Day 1.
