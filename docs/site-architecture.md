# Site Architecture - Dra. Jessica Tellechea Public Website

## Recommended Sitemap (Normalized)

Public routes are **locale-first**: `/{es|en|ca|fr}/…` with a **per-locale segment** for each IA intent (trailing slash on directory URLs). Examples:

- `/{lang}/` — Home.
- Facial pillar: `/es/facial/`, `/en/facial/`, `/ca/facial/`, `/fr/visage/`.
- Corporal pillar: `/es/medicina-estetica-corporal-barcelona/`, … (deferred at launch: `noindex`, excluded from primary nav and sitemap; enable via `src/i18n/site-features.ts`).
- Capilar pillar: `/es/capilar/`, `/en/hair/`, `/ca/capillar/`, `/fr/capillaire/`.
- Trust: `/es/criterio-medico/`, `/en/medical-criteria/`, `/ca/criteri-medic/`, `/fr/critere-medical/`.
- Blog index: `/{lang}/blog/` (deferred at launch: `noindex`, excluded from primary nav and sitemap; enable via `src/i18n/site-features.ts`).
- Contact: `/es/contacto/`, `/en/contact/`, `/ca/contacte/`, `/fr/contact/`.
- Booking (utility, not in primary nav): `/es/reservar-cita/`, `/en/book-appointment/`, `/ca/reservar-cita/`, `/fr/reserver-rendez-vous/`.

**Normative matrix:** `openspec/specs/web-localized-routing/spec.md` (REQ-2). **SEO / hreflang / canonical:** `docs/seo-and-localization.md` and `src/layouts/BaseLayout.astro`.

## Page Responsibilities

- Home: positioning, trust framing, orientation to 3 pillars, primary conversion to valuation.
- Facial/Corporal/Capilar: explain each pillar, reinforce medical criteria, route users to conversion actions.
- Criterio medico: explain approach, valuation logic, and trust model before conversion.
- Blog: authority and search visibility support.
- Contacto: clear capture page for valuation requests and direct contact methods.
- Reservar cita: utility path for users ready to schedule directly.

## Navigation Rules

- Primary navigation: one item per IA intent, **labels per locale** (REQ-5 in `openspec/specs/web-localized-routing/spec.md`); URLs built with `href(lang, iaKey)` from `route-registry.ts` (not Spanish segments on EN/FR).
- Booking is **not** a primary menu item (REQ-6); reachable via CTAs / secondary surfaces.
- Footer can include operational links to reservation/contact/legal pages.

## Conversion Routing Logic

### CTA hierarchy (decided)

- Primary CTA: `Solicitar valoracion`.
- Secondary CTA 1: `Reservar cita`.
- Secondary CTA 2: `WhatsApp`.

### Application by page type

- Home + service pillars: dominant valuation CTA; reservation and WhatsApp available as secondary actions.
- Criterio medico: valuation as primary; reservation and WhatsApp at lower visual prominence.
- Contacto: valuation-first form, with direct alternatives (phone, WhatsApp, reservation link).
- Reservar cita: direct booking-focused utility experience.

### Route visibility model

- Booking route must be reachable from CTA surfaces and operational flows.
- Booking route is intentionally excluded from main navigation to keep trust-first structure clean.
- Blog routes remain built in the repo but are excluded from primary nav and sitemap until `blogPublic` is enabled (`src/i18n/site-features.ts`); pages use `noindex` while deferred.
- Corporal pillar routes remain built but are excluded from primary nav and sitemap until `corporalPublic` is enabled (`src/i18n/site-features.ts`); pages use `noindex` while deferred. Home specialties omit the corporal card when deferred.

## Naming Normalization Decisions

- Canonical public trust page name: `Criterio medico`.
- Canonical slug: `criterio-medico`.
- "Filosofia medica" may appear as in-page wording, not as separate IA node.

## Relationship Between Main Pages and Conversion Routes

- Main pages build trust and context; they do not overexpose procedural booking complexity.
- Conversion routes (valuation form, WhatsApp, booking flow) are distributed consistently to avoid dead ends.
- Users can move from informational depth to action without losing page-level intent.

## Current Decisions vs Pending

### Decided

- Core IA and page intent.
- Hidden booking route requirement.
- Naming normalization for trust page.
- CTA hierarchy with valuation-first dominance.
- Final slug taxonomy v1 per language (REQ-2); registry + redirects in repo.

### Pending

- Booking route indexability beyond `noindex` utility (if product changes).
- Per-locale slugs for legal pages and blog post URLs (REQ-11 follow-ups).
