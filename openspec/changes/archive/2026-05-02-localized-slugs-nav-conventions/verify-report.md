# Verificación: localized-slugs-nav-conventions

**Fecha:** 2026-05-02

## Automatizado

| Comando | Resultado |
|---------|-----------|
| `npm run verify:routes` | OK: matriz segmentFor / iaKeyFromPath sin colisiones por locale |
| `npm run lint:encoding` | OK |
| `npm run build` | OK: 47 páginas estáticas |
| `npm run check` | OK (0 errores; avisos deprecación Zod en content.config.ts, preexistentes) |

## Redirects 301 (Astro redirects)

Configurados en `astro.config.mjs` según la tabla del tasks.md (EN/FR/CA segmentos legacy hacia canonical). En salida estática, Astro genera HTML en rutas origen que redirigen al destino.

## Sitemap

El filtro del integration excluye URLs que contienen segmentos de reserva: reservar-cita, book-appointment, reserver-rendez-vous (alineado con route-registry; CA comparte reservar-cita con ES).

## Verificación manual (S-1 a S-8)

- **Estado:** OK — confirmado por prueba manual en entorno real tras el archivo (rutas, nav, switcher, redirects según lo esperado).

## Limitaciones

- En Windows, algunos archivos .astro/.ts guardados con ciertas herramientas pueden quedar en UTF-16; si el build falla con Unexpected x00, reconvertir a UTF-8.

## Archivo (2026-05-02)

- Spec principal: `openspec/specs/web-localized-routing/spec.md` (promoción del delta).
- Documentación: `docs/seo-and-localization.md`, `docs/site-architecture.md` sincronizados con REQ-2 y navegación.
- Carpeta del cambio movida a `openspec/changes/archive/2026-05-02-localized-slugs-nav-conventions/`.
