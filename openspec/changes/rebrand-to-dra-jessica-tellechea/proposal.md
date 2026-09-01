# Proposal: Rebrand "AJ / Clínica AJ" → "Dra. Jessica Tellechea" + voz singular

## Intent

El sitio deja de representar una clínica y pasa a ser el de una **profesional particular**. Toda mención textual a "AJ", "Clínica AJ", "AJ Clínica" o "WebAJ" que **no** venga de un env var ni sea imagen debe cambiar a "Jessica Tellechea", o "Dra. Jessica Tellechea" (según contexto, si requiere más formalidad o elegancia). En paralelo, el copy migra de voz plural (nosotros / *we*) a **singular** coherente con una única profesional.

## Scope

### In Scope (se cambia)
- Copy user-facing en `src/i18n/*.ts`: `home-content`, `contact-page`, `facial-page`, `capilar-page`, `corporal-page`, `trust-page`, `blog-page`, `page-stubs`, `cookie-consent-strings`.
- Contenido legal en `src/i18n/legal-content/{privacy,cookies,aviso}.ts` (con revisión editorial extra).
- Copy hardcodeado en componentes: `ValoracionForm.astro`, `ContactPage.astro`, `BlogIndexPage.astro`, `BookingFlow.tsx` + `booking-nubimed/{i18n,types,config,client}.ts`.
- `imageAlt` (texto accesible), aunque el `imageSrc` no.
- Blog: `src/content/blog/es/rejuvenecimiento-progresivo.md`.
- Docs vivos: `docs/site-architecture.md`, `docs/seo-and-localization.md`, `docs/stack-and-deployment-context.md`, `docs/reference/source-materials.md`.
- `README.md` y `AGENTS.md` (menciones de marca visibles, no rutas técnicas).
- Reescritura de voz plural → singular en todos los locales (`es`, `en`, `ca`, `fr`).

### Out of Scope (NO se cambia)
- Valores provistos por env vars (`PUBLIC_CLINIC_*`, `PUBLIC_LEGAL_*`, `PUBLIC_WHATSAPP_*`). El operador actualiza `.env` fuera de este PR.
- **Nombres** de las env vars (`PUBLIC_CLINIC_NAME`, etc.) — son identificadores técnicos.
- Imágenes (`public/`, `src/assets/`) y sus paths `imageSrc`.
- Documentos SDD archivados (`openspec/changes/archive/**`).
- Specs vigentes (`openspec/specs/**`) — no mencionan marca ni voz.
- Nombre técnico del repo/package (`webaj`), remote git, project id.
- Fallbacks de defaults como `emailFallback: 'info@ajclinica.com'` — el prod correcto viene del env.

## Capabilities

### New Capabilities
- None. Cambio de copy/branding sin nuevo comportamiento.

### Modified Capabilities
- None. Los specs actuales no fijan requisitos de marca ni voz editorial.

## Approach

Design resuelve la voz (1ª persona "yo" vs 3ª persona "la Dra. Tellechea") y la tabla de reemplazos por locale. Implementación por batches por dominio (home, pillars, trust, contact, blog, legal, docs) con `rg` post-batch para verificar 0 ocurrencias residuales.

## Affected Areas

| Area | Impact |
|------|--------|
| `src/i18n/*.ts` (9 archivos) | Modified |
| `src/i18n/legal-content/*.ts` (3 archivos) | Modified — revisión legal |
| `src/content/blog/es/*.md` | Modified |
| `src/components/**/*.astro`, `src/features/booking-nubimed/*` | Modified — copy hardcodeado |
| `docs/*.md` (4 archivos) | Modified |
| `README.md`, `AGENTS.md` | Modified — sólo menciones de marca |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Copy legal apunta a un responsable de tratamiento que ya no coincide con el env → inconsistencia RGPD | Med | Coordinar update de `.env` en el mismo deploy; documentar en `design.md` |
| Voz singular genera ambigüedad en textos escritos para colectivo ("nuestro equipo") | Med | `design.md` fija regla; ES es fuente editorial |
| Miss de ocurrencias en 4 locales × N archivos | Med | Verify con `rg -i` acotado a `src/`, `docs/`, `README.md`, `AGENTS.md` |

## Rollback Plan

`git revert <sha>`. Sin migración de datos, esquema ni env vars nuevas.

## Dependencies

- Operador actualiza `.env` (`PUBLIC_CLINIC_*`, `PUBLIC_LEGAL_*`) en el mismo despliegue.
- Sign-off editorial sobre copy legal antes de merge.

## Success Criteria

- [ ] `rg -i "AJ Clínica|AJ Clinic|AJ Clinique|Clínica AJ|WebAJ"` en `src/` + `docs/` + `README.md` + `AGENTS.md` (excluye `openspec/changes/archive/`, `node_modules/`, `dist/`) devuelve **0** matches.
- [ ] `rg -i "nosotros|nuestr[oa]s?|somos|hacemos|ofrecemos"` en `src/i18n/` devuelve 0 matches semánticos.
- [ ] `npm run check` y `npm run lint:encoding` pasan.
- [ ] Smoke manual en `dev`: home + 3 pillars + trust + contact + booking placeholder + legal, en `es` y `en`.
