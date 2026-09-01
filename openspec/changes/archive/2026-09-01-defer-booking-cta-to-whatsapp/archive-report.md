# Archive Report — defer-booking-cta-to-whatsapp

**Fecha de archive**: 2026-09-01
**Change name**: `defer-booking-cta-to-whatsapp`
**Destino**: `openspec/changes/archive/2026-09-01-defer-booking-cta-to-whatsapp/`

## Estado del ciclo SDD

| Fase | Artefacto | Estado |
|------|-----------|--------|
| Propose | `proposal.md` | ✅ |
| Design | `design.md` | ✅ |
| Spec (delta) | `specs/web-booking-nubimed-client/spec.md` | ✅ |
| Tasks | `tasks.md` (14/14 completadas) | ✅ |
| Apply | (in-tree) | ✅ |
| Verify | `verify-report.md` — PASS | ✅ |
| Archive | (este documento) | ✅ |

## Merge realizado sobre el spec principal

**Archivo destino**: `openspec/specs/web-booking-nubimed-client/spec.md`

### Encoding fix (concern adicional, aceptado por el usuario)

El destino estaba encodeado en **UTF-16 LE sin BOM** (regresión preexistente al change; captada como W1 en el verify-report). Se convirtió a **UTF-8** antes del merge para no producir un archivo con encodings mezclados. Verificación post-write: `first 20 bytes = 23 20 57 65 62 20 62 6f 6f 6b 69 6e 67 20 4e 75 62 69 6d 65` (= `# Web booking Nubime` en ASCII/UTF-8 puro). Valid UTF-8 confirmado.

Se documenta explícitamente que este archive **mezcla dos concerns**: (a) los cambios funcionales de release-1 diferido; (b) fix de encoding del spec destino. El usuario aprobó explícitamente la mezcla ("hazlo dentro del mismo archive, aunque mezcle concerns").

### Deltas aplicadas

| Sección delta | Acción | Ubicación en el spec principal |
|---------------|--------|-------------------------------|
| `MODIFIED REQ-1 Booking route hosts the interactive flow (deferred for release 1)` | **REPLACED** REQ-1 completo (texto + 1 scenario original) por la versión diferida (texto + 2 scenarios nuevos + nota "Previously") | Bloque REQ-1 en `## Requirements` |
| `ADDED Site-wide booking CTAs resolve to WhatsApp during release 1` | **APPENDED** como **REQ-18** al final del bloque `## Requirements` | REQ-18 (nuevo) |
| `ADDED WhatsApp CTAs open in a new browser tab` | **APPENDED** como **REQ-19** al final del bloque `## Requirements` | REQ-19 (nuevo) |
| `REMOVED Requirements` | Ninguno (la delta lo declaró explícitamente) | — |

### Numeración post-merge

REQ-1 (modificado) + REQ-2..REQ-17 (preservados intactos) + REQ-18 y REQ-19 (nuevos). Se preservó el orden y numeración de todo REQ-2..REQ-17.

### Actualización de metadata

Se agregaron `booking-component-and-page-redesign` y `defer-booking-cta-to-whatsapp` a la lista de "merged from archived changes" en el encabezado del spec (fuente de verdad).

## Verificación post-merge

- ✅ `openspec/specs/web-booking-nubimed-client/spec.md` — valid UTF-8, 322 líneas, 15,419 bytes
- ✅ 19 REQs en total (1..19), sin duplicados
- ✅ Los REQs preservados (REQ-2..REQ-17) mantienen texto y scenarios idénticos a los del pre-merge
- ✅ La nota "(Previously: …)" documenta el cambio de contrato en REQ-1 para lectura futura
- ✅ El temp file `_main_spec_utf8.md` que usé como buffer intermedio se eliminó de la carpeta del change antes del move

## Movimiento a archive

- Source: `openspec/changes/defer-booking-cta-to-whatsapp/`
- Target: `openspec/changes/archive/2026-09-01-defer-booking-cta-to-whatsapp/`

Contiene:
- `proposal.md`
- `design.md`
- `specs/web-booking-nubimed-client/spec.md` (delta original — auditoría)
- `tasks.md`
- `verify-report.md`
- `archive-report.md` (este documento)

## Notas para futuros archives sobre el mismo capability

- **UTF-8 enforcement**: cualquier próximo cambio que toque `openspec/specs/web-booking-nubimed-client/spec.md` debe validar encoding antes de mergear. `AGENTS.md` ya lo pide (`Encoding: UTF-8` + `npm run lint:encoding`); el spec ahora cumple, mantengámoslo así.
- **Release 2 planning**: para restaurar el flujo interactivo, REQ-1 debe volver a su forma original (texto + scenario original) y REQ-18/REQ-19 deben eliminarse (o su alcance restringirse). `booking-links.ts` conserva `bookingUrlWithPreset*` y `BOOKING_PRESET_VENDOR_MEDICINA_ESTETICA` intactos para reactivación con diff mínima.

## Suggestions abiertos (no bloqueantes, no cerrados por este archive)

Del verify-report:
- **S1** — Estilos `.booking-placeholder__*` no implementados; el placeholder renderiza con anchors default del navegador.
- **S2** — Clase legacy `booking-page__title` remanente en `[lang]/[segment].astro:105`.
- **S3** — Fallbacks con marca `AJ` residual (`emailFallback: 'info@ajclinica.com'`, etc.) — capturado en proposal `rebrand-to-dra-jessica-tellechea`.
- **npm run build** no fue ejecutado por regla global del usuario ("Never build after changes"). El operador puede correrlo antes de deploy.

## SDD Cycle Complete

El change ha sido planeado, diseñado, especificado, implementado, verificado y archivado. Los REQs 1, 18 y 19 del spec `web-booking-nubimed-client` reflejan la realidad de release 1. Listo para el próximo change (`rebrand-to-dra-jessica-tellechea` ya tiene proposal).
