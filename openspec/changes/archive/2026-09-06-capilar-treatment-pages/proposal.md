# Proposal: Template de páginas de tratamiento + 4 capilares

## Intent

El pilar capilar lista cuatro tratamientos sin destino propio; el usuario no puede profundizar ni convertir desde cada protocolo. Necesitamos un **template reutilizable** (referencia editorial: [Santé — relleno labios](https://santeclinics.com/es/treatment/lip-filling-and-hydration)) y las **cuatro primeras páginas** enlazadas desde el bloque «Tratamientos médicos» de capilar.

## Scope

### In Scope
- Template con 7 bloques: **hero** (CTA valoración + criterio médico) + componentes 1–6 del brief (about, cómo es, post-tratamiento, precauciones desplegable, antes/después carousel 3 cols, FAQ acordeón).
- Rutas estáticas i18n para: Mesoterapia capilar, PRP capilar, Carboxiterapia capilar, Transplante capilar.
- Copy médico en `es/en/ca/fr`; **sin assets finales** — placeholders + **prompt Recraft** por slot de imagen en i18n.
- Hub capilar: cada ítem de `treatments.items` enlaza a su página; refresh visual del listado si encaja silent luxury.
- Slider antes/después interactivo (Preact island); FAQ y precauciones accesibles (`details` o island según diseño).
- SEO: indexables, hreflang entre locales, breadcrumb capilar → tratamiento.

### Out of Scope
- Tratamientos faciales/corporales (reuso del template en cambio futuro).
- Precios, packs, vídeos clínica, equipo, relacionados (Santé).
- Fotos reales de pacientes / casos clínicos publicados.
- Nav primario nuevo; booking sigue utility `noindex`.

## Capabilities

### New Capabilities
- `web-treatment-page-template`: composición, CTAs, bloques 1–6, placeholders Recraft, islas interactivas.
- `web-capilar-treatment-routes`: matriz de slugs anidados bajo segmento capilar + `getStaticPaths` + verify script.

### Modified Capabilities
- `web-localized-routing`: nueva clase URL «tratamiento capilar» (hijo del pilar); hreflang y helpers en `route-registry.ts`.
- `web-ui-primitives`: acordeón FAQ / disclosure precauciones (si no bastan `<details>` estilizados).

## Approach

1. **URLs (propuesta v1, validar en spec):** `/{lang}/{capilar-segment}/{treatment-slug}/` — p. ej. `/es/tratamiento-capilar-barcelona/mesoterapia-capilar-medica/`.
2. **Routing:** `src/pages/[lang]/[segment]/[treatment].astro`; registry `capilarTreatmentSlugs` (4 keys × 4 locales); guard: `segment` = capilar del locale.
3. **Contenido:** `src/i18n/capilar-treatments/` (tipo compartido + 4 entradas × 4 idiomas); extender `CapilarTreatment` en hub con `treatmentKey` + `href()`.
4. **UI:** `src/components/treatment/*` + `TreatmentPage.astro`; CSS `treatment-page.css` (tokens, alternancia izq/der como Santé).
5. **Imágenes:** componente `TreatmentImagePlaceholder` con `prompt` visible solo en dev o comentario HTML; sin `<img>` productivo hasta assets.
6. **Antes/después:** carousel 3 columnas, 1 comparador activo por slide; celdas vacías permitidas; controles bajo fila.
7. **Verificación:** `npm run check`, `npm run build`, extender `verify:routes` para slugs tratamiento.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/[lang]/[segment]/[treatment].astro` | New | Ruta anidada |
| `src/i18n/route-registry.ts` | Modified | Slugs + `hrefCapilarTreatment()` |
| `src/i18n/capilar-treatments/` | New | Copy 4 tratamientos × 4 locales |
| `src/i18n/capilar-page.ts` | Modified | Links hub |
| `src/components/treatment/` | New | Template + islas |
| `src/components/capilar/CapilarPillarPage.astro` | Modified | Cards enlazadas |
| `src/styles/components/treatment-page.css` | New | Layout silent luxury |
| `scripts/verify-route-registry.mjs` | Modified | Matriz slugs |
| `docs/site-architecture.md` | Modified | IA tratamientos capilar |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Slugs IA requieren sign-off | Med | Tabla en spec; no implementar slugs alternativos sin acuerdo |
| Claims médicos / precauciones | Med | Copy conservador; revisión humana; listas exhaustivas en i18n |
| Peso isla compare | Low | `client:visible`; una instancia activa |
| 4×4 contenido extenso | Med | Tipos estrictos; ES fuente; EN/CA/FR paralelos en apply |

## Rollback Plan

1. Eliminar ruta `[treatment].astro`, registry de slugs y carpeta `capilar-treatments/`.
2. Revertir hub capilar a listado sin enlaces.
3. Quitar CSS/islas tratamiento. Redeploy estático.

## Dependencies

- Aprobación matriz slugs (spec).
- Fase design: wire de composición + contrato datos por bloque.
- Recraft prompts en copy (no bloquean ship).

## Success Criteria

- [ ] Cuatro URLs indexables por locale; hreflang correcto.
- [ ] Hub capilar enlaza cada tratamiento.
- [ ] Template renderiza 7 bloques según brief; mobile/desktop coherentes.
- [ ] Precauciones desplegables con secciones descripción / antes / después.
- [ ] Carousel 3 cols + slider funcional; FAQ acordeón accesible.
- [ ] Cada slot imagen documenta prompt Recraft; sin imágenes rotas.
- [ ] `npm run check`, `npm run build`, `npm run verify:routes` pasan.
