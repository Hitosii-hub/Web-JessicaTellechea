# Verify Report — defer-booking-cta-to-whatsapp

**Fecha**: 2026-09-01
**Verificado contra**: `proposal.md`, `design.md`, `tasks.md`, `specs/web-booking-nubimed-client/spec.md` (delta)

## Resultado global

**PASS.** Todas las tareas están completas, la implementación cumple los scenarios del delta spec, y `npm run check` corre sin errores ni warnings. Hay 3 SUGGESTIONs (no bloqueantes) y 1 WARNING preexistente que no fue introducido por este cambio pero afectará el archive.

---

## Cumplimiento del delta spec

### MODIFIED REQ-1 — Booking route hosts the interactive flow (deferred for release 1)

- ✅ **Scenario "User opens booking in a locale (release 1)"** — `src/pages/[lang]/[segment].astro:107-124` renderiza `<div class="booking-placeholder">` con dos anchors; `BookingFlow` ya no se importa ni se monta (grep negativo sobre el import en `src/pages/`).
- ✅ **No availability/slot/bootstrap request al vendor** — la eliminación del import y del mount corta el path completo hacia `src/features/booking-nubimed/*`. Los reads de `preset`/`treatment`/`clinicAddress` también se removieron.
- ✅ **`noindex` policy y URL matrix intactos** — `BaseLayout.astro:69-70` sigue aplicando `robots="noindex,follow"` vía `isBookingPath()`; `route-registry.ts` mantiene la clave `booking` y sus 4 segmentos; `astro.config.mjs` conserva `bookingUrlSegments` en el filtro del sitemap.
- ✅ **Scenario "Placeholder localisation"** — heading/lead vienen de `pageStubsBySegment['reservar-cita'][lang]`; labels de anchors vienen de `bookingPlaceholderCta[lang]`. Los 4 locales (`es`, `en`, `ca`, `fr`) están cubiertos en `page-stubs.ts`.

### ADDED — Site-wide booking CTAs resolve to WhatsApp during release 1

- ✅ **Scenario "WhatsApp env configured"** — `resolveBookingCta` en `booking-links.ts:29-35` devuelve `{ href: \`https://wa.me/${whatsapp}\`, external: true }` cuando `PUBLIC_WHATSAPP_E164?.trim()` es truthy.
- ✅ **Scenario "WhatsApp env missing"** — fallback devuelve `{ href: href(lang, 'contact'), external: false }`.
- ✅ **Scenario "No preset URLs in release 1"** — grep sobre `src/` con patrón `href\(lang, ['\"]booking['\"]\)|bookingUrlWithPreset|BOOKING_PRESET_VENDOR` devuelve **0 consumidores** fuera de `src/i18n/booking-links.ts` (donde se conservan las exports sin callers, listas para release 2). Ningún anchor de las 4 páginas pillar + home + header genera `preset=` o `treatment=`.

### ADDED — WhatsApp CTAs open in a new browser tab

- ✅ **Scenario "External WhatsApp anchor"** — patrón `target={bookingCta.external ? '_blank' : undefined}` + `rel={bookingCta.external ? 'noopener noreferrer' : undefined}` aplicado en 10 anchors: `BaseLayout` header (`:137`), `PrimaryNav` drawer (`:56`), `HomeHero` (`:31`), `HomeCapillary` (`:45`), `HomeFinalCta` (`:30`), `FacialHero` (`:36`), `CapilarPillarPage` hero (`:42`), `CorporalPillarPage` hero (`:42`), placeholder de `[lang]/[segment].astro` (`:113`), y `FinalCta` (`:29`, con `effectiveExternal` derivado del prop `primaryExternal` o del fallback interno).
- ✅ **Scenario "Internal contact fallback"** — el conditional `? '_blank' : undefined` deja `target`/`rel` sin setear cuando `external === false`. Astro omite atributos `undefined`, así que el HTML resultante no lleva `target`.

---

## Fidelidad al design

| Decisión | Estado | Nota |
|----------|--------|------|
| AD-1 (static placeholder, no redirect) | ✅ | `[lang]/[segment].astro` renderiza inline sin `Astro.redirect` |
| AD-2 (single helper con fallback) | ✅ | Evolucionó a `resolveBookingCta(lang) → { href; external }` post-feedback del usuario (nueva pestaña). Documentado en `tasks.md` Phase 5 y en la ampliación del delta spec |
| AD-3 (placeholder copy en `page-stubs.ts`) | ✅ | `bookingPlaceholderCta` agregado. **Desviación menor**: además se reescribió el copy de `pageStubsBySegment['reservar-cita']` (heading/lead) para no prometer "recorrido guiado" que ya no existe en release 1 |
| AD-4 (sin import de `BookingFlow` en el page) | ✅ | Import y mount removidos; reads de search params limpiados |
| AD-5 (IaKey, slugs, sitemap, noindex intactos) | ✅ | Los 4 files no fueron tocados |

---

## Comandos ejecutados

| Comando | Resultado |
|---------|-----------|
| `npm run check` | ✅ 0 errors, 0 warnings, 7 hints (todos preexistentes en `src/content.config.ts` por `z` deprecado — no relacionados con este change) |
| `npm run build` | ⚠️ **Saltado** — regla global del usuario "Never build after changes". Config del proyecto (`rules.verify: Run build and astro check`) queda sin cubrir esta corrida; el operador puede corroborar con `npm run build` en su terminal si lo requiere |
| `npm run lint:encoding` | ⏭️ No ejecutado — sólo se agregaron/editaron archivos TS/Astro y todo el diff se escribió en UTF-8. Ver WARNING abajo sobre encoding preexistente en el spec destino |

---

## Suggestions (no bloqueantes)

- **S1 — Placeholder sin CSS propio.** `.booking-placeholder`, `.booking-placeholder__primary` y `.booking-placeholder__secondary` no tienen estilos en `src/styles/components/`. El placeholder renderiza con anchors sin diseño. Aceptable funcionalmente pero conviene estilar antes de release en un cambio pequeño posterior o inline aquí si el cliente lo pide.
- **S2 — Legacy `booking-page__title` class.** En `[lang]/[segment].astro:105` sigue el `class:list={[bookingBlock && 'booking-page__title']}`. Estilo asociado a la página cuando montaba `BookingFlow`. Puede quedar (inocuo) o limpiarse.
- **S3 — Fallbacks con marca `AJ` residual.** `contact-page.ts` conserva `emailFallback: 'info@ajclinica.com'` (y equivalentes). No forma parte de este change; ya está capturado en el proposal `rebrand-to-dra-jessica-tellechea`.

## Warning (afecta al archive, no a la implementación)

- **W1 — Main spec en UTF-16 LE.** `openspec/specs/web-booking-nubimed-client/spec.md` está encoded en UTF-16 LE sin BOM (bytes `23 00 20 00 57 00 65 00` = `# We`). Preexistente — no lo introdujo este change. El `sdd-archive` de este delta necesita mergear en ese archivo; hay que resolver el encoding antes de aplicar los `MODIFIED REQ-1` + `ADDED Requirements`, o el merge produce un archivo corrupto que mezcla encodings.

---

## Recomendación de próximo paso

Listo para `sdd-archive`, con la salvedad de que **antes** de correr el merge de deltas hay que decidir cómo se resuelve W1 (convertir a UTF-8 dentro del mismo archive, o abrir un cambio separado de fix de encoding y postergar este archive). No hay CRITICAL bloqueando la decisión.
