# Tasks: Defer Booking Route and Redirect CTAs to WhatsApp

## Phase 1: Foundation

- [x] 1.1 Añadir `resolveBookingCtaHref(lang: Locale): string` en `src/i18n/booking-links.ts` (lee `PUBLIC_WHATSAPP_E164`, fallback `href(lang, 'contact')`).
- [x] 1.2 Añadir `bookingPlaceholderCta: Record<Locale, { whatsapp: string; contact: string }>` en `src/i18n/page-stubs.ts` con labels ES / EN / CA / FR.

## Phase 2: Booking route placeholder

- [x] 2.1 En `src/pages/[lang]/[segment].astro`, eliminar el import de `BookingFlow` y las lecturas de `preset`, `treatment`, `clinicAddress` que sólo servían al mount.
- [x] 2.2 En `src/pages/[lang]/[segment].astro`, en la rama `booking`, renderizar el placeholder: `<h1>` + `<p>` desde `pageStubsBySegment['reservar-cita']` y dos anchors (WhatsApp primary vía `resolveBookingCtaHref`, contacto secundario vía `href(lang, 'contact')`) con los labels de `bookingPlaceholderCta`.

## Phase 3: Reemplazar CTAs sitewide

- [x] 3.1 `src/layouts/BaseLayout.astro`: sustituir `const bookingHref = href(lang, 'booking')` por `resolveBookingCtaHref(lang)`.
- [x] 3.2 `src/components/home/HomeHero.astro`: cambiar el `href` del CTA primario por `resolveBookingCtaHref(lang)`.
- [x] 3.3 `src/components/home/HomeCapillary.astro`: reemplazar `bookingUrlWithPreset(lang, 'medicina-capilar')` por `resolveBookingCtaHref(lang)`; eliminar el import de `bookingUrlWithPreset`.
- [x] 3.4 `src/components/home/HomeFinalCta.astro`: cambiar `href(lang, 'booking')` por `resolveBookingCtaHref(lang)`.
- [x] 3.5 `src/components/FinalCta.astro`: cambiar el default de `primaryHref ?? href(lang, 'booking')` por `primaryHref ?? resolveBookingCtaHref(lang)`.
- [x] 3.6 `src/components/facial/FacialHero.astro`: reemplazar `bookingUrlWithPreset(...)` por `resolveBookingCtaHref(lang)`; limpiar imports de preset.
- [x] 3.7 `src/components/facial/FacialPillarPage.astro`: reemplazar `bookingUrlWithPreset(...)` por `resolveBookingCtaHref(lang)`; limpiar imports.
- [x] 3.8 `src/components/capilar/CapilarPillarPage.astro`: reemplazar `bookingUrlWithPresetAndTreatment(...)` (línea 18) y `href(lang, 'booking')` (línea 180) por `resolveBookingCtaHref(lang)`; limpiar imports.
- [x] 3.9 `src/components/corporal/CorporalPillarPage.astro`: reemplazar `bookingUrlWithPreset(...)` en hero (línea 39) y en `bookingCorporalPrimary` (línea 15) por `resolveBookingCtaHref(lang)`; limpiar imports.

## Phase 4: Verification

- [x] 4.1 Ejecutar `npm run check` (tipos + content). Resultado: 0 errors, 0 warnings, 7 hints preexistentes de `z` deprecado en `content.config.ts` (no relacionados con este cambio).
- [x] 4.2 Grep manual: `href(lang, 'booking')` y `bookingUrlWithPreset*` ya no aparecen fuera de `src/i18n/booking-links.ts` (donde se conservan las utilidades sin consumidores, listas para release 2).
- [x] 4.3 Marcar todas las tareas de Phases 1-3 como `[x]` en este `tasks.md`.

## Phase 5: External-tab UX (post-review)

- [x] 5.1 Reemplazar `resolveBookingCtaHref(lang): string` por `resolveBookingCta(lang): { href; external }` en `src/i18n/booking-links.ts` (el sugar `resolveBookingCtaHref` se eliminó por dead-code).
- [x] 5.2 Añadir `target="_blank"` + `rel="noopener noreferrer"` condicional (sólo cuando `external === true`) en cada CTA WhatsApp: `BaseLayout.astro` header + `PrimaryNav.astro` mobile drawer, `HomeHero`, `HomeCapillary`, `HomeFinalCta`, `FacialHero`, `CapilarPillarPage` hero, `CorporalPillarPage` hero, y el placeholder de `[lang]/[segment].astro`.
- [x] 5.3 `FinalCta.astro`: extender API con `primaryExternal?: boolean`; los 3 pillar pages ahora pasan `primaryHref={bookingCta.href} primaryExternal={bookingCta.external}`.
- [x] 5.4 `PrimaryNav.astro`: cambiar prop `bookingHref: string` por `bookingCta: { href; external }` para propagar el flag.
- [x] 5.5 Re-ejecutar `npm run check`. Resultado: 0 errors, 0 warnings.
