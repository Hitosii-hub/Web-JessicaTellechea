# Proposal: Diferir pilar Corporal en producción

## Intent

La clínica sale a producción sin oferta corporal visible aún. El pilar **Corporal** debe permanecer en el repo (rutas, copy, componentes) pero oculto al usuario como **Blog** (`blogPublic`) y **Booking** (fuera de nav + `noindex` + sin sitemap): sin borrar contenido, reversible con un flag.

## Scope

### In Scope
- Flag `corporalPublic = false` en `src/i18n/site-features.ts`.
- Quitar Corporal del nav primario mientras el flag esté en `false`.
- `noindex,follow` en URLs corporal (4 locales) vía `BaseLayout.astro`.
- Excluir segmentos corporal del sitemap (`astro.config.mjs`).
- Ocultar tarjeta/enlace corporal en home (`HomeTreatmentAreas.astro` + alineación con `home-content`).
- Helper `isCorporalPath()` en `route-registry.ts` (segmentos por locale).
- Documentar en `docs/site-architecture.md`.

### Out of Scope
- Eliminar archivos del pilar (`corporal-page.ts`, `CorporalPillarPage.astro`, CSS).
- Cambiar slugs del registro de rutas.
- Redirect 301 corporal → home (URL directa sigue sirviendo preview).
- Ocultar menciones editoriales genéricas de “cuerpo” en copy legal u otros pilares.

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- `web-localized-routing`: nav primario y visibilidad SEO/sitemap pueden excluir el pilar Corporal cuando `corporalPublic` es `false` (patrón ya aplicado a Blog).

## Approach

Replicar el patrón **blog deferred**:
1. `site-features.ts` → `corporalPublic`.
2. `nav.ts` → item condicional (como `blogNavItem`).
3. `route-registry.ts` → `corporalSegments` + `isCorporalPath()`.
4. `BaseLayout.astro` → ampliar condición `robots`.
5. `astro.config.mjs` → filtrar URLs con segmentos corporal (lista alineada al registry).
6. Home → filtrar pilares visibles; no renderizar card corporal si diferido.

Rutas siguen en build (`getStaticPaths` sin cambios). Activación futura: `corporalPublic = true` + `corporalHiddenFromSitemap = false`.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/i18n/site-features.ts` | Modified | Nuevo flag |
| `src/i18n/nav.ts` | Modified | Nav condicional |
| `src/i18n/route-registry.ts` | Modified | `isCorporalPath` |
| `src/layouts/BaseLayout.astro` | Modified | `noindex` |
| `astro.config.mjs` | Modified | Filtro sitemap |
| `src/components/home/HomeTreatmentAreas.astro` | Modified | Sin card corporal |
| `docs/site-architecture.md` | Modified | Modelo de visibilidad |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Enlaces internos residuales a corporal | Low | Grep `corporal` en CTAs; home es el único enlace pillar conocido |
| hreflang incluye URL corporal en otras páginas | Med | Evaluar en spec si alternates deben omitir corporal cuando diferido |
| Grid home con 2 cards vs 3 | Low | Layout CSS ya responsive; probar 2 columnas |

## Rollback Plan

1. `corporalPublic = true` en `site-features.ts`.
2. Quitar filtro sitemap corporal en `astro.config.mjs`.
3. Redeploy. Sin migración de datos.

## Dependencies

- Ninguna externa. Misma convención que blog/booking.

## Success Criteria

- [ ] Corporal no aparece en nav ni sitemap con `corporalPublic = false`.
- [ ] Home muestra solo Facial + Capilar (sin card corporal).
- [ ] `/es/medicina-estetica-corporal-barcelona/` responde 200 con `noindex`.
- [ ] `npm run check` y `npm run build` pasan.
- [ ] Activar flag restaura nav, sitemap e indexación sin cambios de código adicionales.
