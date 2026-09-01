# Proposal: Diferir la ruta de reserva y redirigir CTAs a WhatsApp (release 1)

## Intent

Para la primera release, la clínica sale sin el flujo de auto-reserva Nubimed. La ruta `reservar-cita` (y sus equivalentes por locale) debe quedar **inhabilitada** — sin borrar el código de `BookingFlow`, `booking-links.ts` ni la clave `booking` del route-registry, para poder reactivarlo en la próxima release. Todo CTA que hoy apunta a booking debe llevar al usuario a **WhatsApp** (patrón `wa.me/{PUBLIC_WHATSAPP_E164}` con fallback a `contacto` si el env no está).

## Scope

### In Scope
- Página `/{lang}/{booking-segment}/` deja de montar `BookingFlow` en release 1 y muestra un placeholder mínimo con CTA a WhatsApp (o redirige — se decide en design).
- Reemplazo de CTAs que hoy resuelven a `href(lang, 'booking')` o `bookingUrlWithPreset*` por un helper único que devuelve la URL de WhatsApp.
- Sitios afectados: header (`BaseLayout`), `HomeHero`, `HomeCapillary`, `HomeFinalCta`, `FinalCta`, `FacialHero`, `FacialPillarPage`, `CapilarPillarPage`, `CorporalPillarPage`.
- Delta al spec `web-booking-nubimed-client` documentando el estado diferido para release 1.

### Out of Scope
- Borrar `src/features/booking-nubimed/`, `booking-links.ts` o la clave `booking` en `route-registry.ts`.
- Cambiar la matriz de slugs, redirecciones i18n, filtros del sitemap o el `noindex` de booking.
- Copy legal, catálogo de especialidades Nubimed o proxy de vendor.

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- `web-booking-nubimed-client`: agregar comportamiento diferido de release 1 — la ruta booking no monta el módulo interactivo y los CTAs del sitio no linkean a esa ruta; el usuario se deriva a WhatsApp.

## Approach

- Introducir un helper en `src/i18n/booking-links.ts` (`resolveBookingCtaHref(lang)`) que devuelva la URL de WhatsApp con fallback a `href(lang, 'contact')`. Los presets Nubimed (`preset`, `treatment`) dejan de generarse en release 1.
- Sustituir cada CTA identificado por este helper (o por el patrón WhatsApp inline ya usado en `TrustPage`).
- En `src/pages/[lang]/[segment].astro`, en la rama `booking`, no montar `BookingFlow`: renderizar un placeholder con el CTA de WhatsApp o `Astro.redirect` — resolución exacta en design.
- Mantener el resto de la infra Nubimed intacta para reactivar en release 2 revirtiendo el helper.

## Affected Areas

| Area | Impact | Descripción |
|------|--------|-------------|
| `src/i18n/booking-links.ts` | Modified | Nuevo helper `resolveBookingCtaHref` |
| `src/layouts/BaseLayout.astro` | Modified | Header CTA apunta a WhatsApp |
| `src/components/home/*.astro` | Modified | Hero, Capillary y FinalCta |
| `src/components/facial/*.astro` | Modified | Hero y PillarPage |
| `src/components/capilar/CapilarPillarPage.astro` | Modified | FinalCta |
| `src/components/corporal/CorporalPillarPage.astro` | Modified | Hero |
| `src/components/FinalCta.astro` | Modified | Default `primaryHref` |
| `src/pages/[lang]/[segment].astro` | Modified | Rama booking sin `BookingFlow` |
| `openspec/specs/web-booking-nubimed-client/spec.md` | Modified (via delta) | Estado diferido release 1 |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| `PUBLIC_WHATSAPP_E164` no configurado en IONOS → CTAs caen al contacto | Low | Reutilizar el patrón con fallback a `href(lang, 'contact')` |
| Enlaces externos previos a `/reservar-cita/` llegan al placeholder | Med | Placeholder con CTA claro a WhatsApp y a `contacto` |
| Regresión visual en pillar pages al cambiar el `href` del botón primario | Low | Los estilos se aplican por clase, no por URL; smoke test manual |

## Rollback Plan

Revertir el commit del cambio (`git revert <sha>`): repone `href(lang, 'booking')` y `bookingUrlWithPreset*` en cada CTA y vuelve a montar `BookingFlow` en la ruta. No hay migración de datos ni env-vars nuevas que desarmar.

## Dependencies

- `PUBLIC_WHATSAPP_E164` en `.env` de IONOS (ya documentado en `.env.example`).

## Success Criteria

- [ ] Ningún CTA en header, home o pillars resuelve a `/{lang}/{booking-segment}/`.
- [ ] Cada CTA sustituido apunta a `wa.me/{PUBLIC_WHATSAPP_E164}` (o a `contacto` como fallback).
- [ ] `/{lang}/{booking-segment}/` no monta `BookingFlow` en release 1.
- [ ] `BookingFlow`, `booking-links.ts` y la clave `booking` de `route-registry.ts` siguen en el repo, listos para reactivarse.
- [ ] `npm run build` y `npm run check` pasan.
