# Archive Report — rebrand-to-dra-jessica-tellechea

**Fecha de archive**: 2026-09-02
**Change name**: `rebrand-to-dra-jessica-tellechea`
**Destino**: `openspec/changes/archive/2026-09-02-rebrand-to-dra-jessica-tellechea/`
**Verdict del verify**: PASS WITH WARNINGS (sin CRITICAL)

## Estado del ciclo SDD

| Fase | Artefacto | Estado |
|------|-----------|--------|
| Propose | `proposal.md` | ✅ |
| Design | `design.md` | ✅ 6 architecture decisions |
| Spec (delta) | — | ⏭️ **Skipped** por declaración explícita del proposal (`Capabilities: New = None, Modified = None`) — este change es copy/branding puro, no altera contratos de spec |
| Tasks | `tasks.md` (33/34 completadas) | ✅ |
| Apply | in-tree, 6 phases de trabajo (Phase 1–6) | ✅ |
| Verify | `verify-report.md` — PASS WITH WARNINGS | ✅ |
| Archive | (este documento) | ✅ |

## Merge de deltas al spec principal

**Ninguno.**

El proposal fue explícito: `New Capabilities: None. Modified Capabilities: None`. Los specs vigentes bajo `openspec/specs/` no fijan requisitos sobre marca ni voz editorial, y este cambio es puramente copy/branding sin alterar comportamiento. No se creó carpeta `specs/` bajo el change folder. No hay archivo destino que actualizar.

## Movimiento a archive

- Source: `openspec/changes/rebrand-to-dra-jessica-tellechea/`
- Target: `openspec/changes/archive/2026-09-02-rebrand-to-dra-jessica-tellechea/`

Contiene:
- `proposal.md`
- `design.md`
- `tasks.md`
- `verify-report.md`
- `archive-report.md` (este documento)

## Alcance real ejecutado

**~20 archivos migrados** en 7 phases:

- **i18n copy** (9 files): `home-content.ts`, `facial-page.ts`, `corporal-page.ts`, `capilar-page.ts`, `trust-page.ts`, `page-stubs.ts`, `contact-page.ts`, `blog-page.ts`, `cookie-consent-strings.ts`
- **Legal i18n** (2 modificados de 3): `privacy.ts`, `aviso.ts` (`cookies.ts` sin cambios)
- **Components/features** con copy hardcodeado (5): `ValoracionForm.astro`, `contact/ContactPage.astro`, `blog/BlogIndexPage.astro`, `layouts/BaseLayout.astro`, `PrimaryNav.astro`
- **Astro pages** con SEO title (6): `[lang]/index.astro`, `[lang]/{privacidad,cookies,aviso-legal}.astro`, `[lang]/blog/[slug].astro`
- **Blog content** (2 markdown): `rejuvenecimiento-progresivo.md`, `capilar-diagnostico.md`
- **Docs vivos** (4): `docs/site-architecture.md`, `docs/seo-and-localization.md`, `docs/stack-and-deployment-context.md`, `docs/reference/source-materials.md` (side-effect: UTF-16 LE → UTF-8)
- **Repo docs** (2): `README.md`, `AGENTS.md`

## Verificación post-archive

- ✅ `npm run check` — 0 errors, 0 warnings
- ✅ `npm run lint:encoding` — `check-utf8: OK`
- ✅ Grep de brand — 0 matches user-facing (residuales todos identificadores técnicos + dossier filename + docs meta)
- ✅ Grep de voz plural ES — 0 matches en `src/`

## Deviaciones aceptadas del usuario durante el flujo

1. **BaseLayout logo — patrón de accesibilidad mejor**: en vez del edit original (`alt="Dra. Jessica Tellechea"` sobre logo único), el usuario introdujo dos elementos separados — logo decorativo (`alt=""`) + wordmark identificable (`alt="Dra. Jessica Tellechea"`) con nuevo asset `/dra-jessica-tellechea.svg`. Mejor UX/a11y.
2. **imageAlt con "Barcelona y Tarragona"**: locative descriptor agregado en varios alt (home, pillars). Enriquece AD-3 sin romper la regla.
3. **Patrón `"En [dominio], la Dra. Jessica Tellechea busca acompañar…"`**: refinamiento editorial del user en `facial-page.ts` que se propagó a los otros pillars.
4. **Form endpoint refactor**: durante el flow el usuario introdujo `src/i18n/form-endpoints.ts` con helpers `resolveContactFormPostUrl` + `contactFormUsesFormSubmitFallback` en `ContactPage.astro` y `ValoracionForm.astro`. No es scope del rebrand pero se integró limpio con el trabajo de copy.
5. **Feature flag `blogPublic` en `site-features.ts`** (edit al doc `site-architecture.md`): blog diferido al launch con `noindex`, excluido de nav/sitemap. Es un cambio de scope adyacente hecho por el usuario en paralelo; no rompe el rebrand.

## Warnings pendientes (no bloqueantes del archive)

Del `verify-report.md`:

1. **Task 7.5 Smoke manual**: usuario debe ejecutar `npm run dev` y validar los 4 locales antes del merge/deploy.
2. **Task 5.4 Sign-off legal**: los 3 archivos legales ya no referencian "clínica" como entidad, pero requieren sign-off del operador antes del merge.
3. **`.env` de IONOS**: operador debe actualizar `PUBLIC_CLINIC_*` y `PUBLIC_LEGAL_CONTROLLER_*` en el mismo deploy, sino los placeholders `__LEGAL_*__` quedan visibles.

## Suggestions abiertas (para futuros changes)

Del `verify-report.md`:

1. Favicon aún referencia `/logo-aj.svg?v=2` en `BaseLayout.astro:106-107` mientras el header usa `/logo.svg`. Puede ser caché intencional; considerar actualizar.
2. Voz "we/our" en `privacy.ts`/`aviso.ts` EN preservada por convención legal. Sujeto a review del abogado.
3. Menciones de "la clínica" en `src/features/booking-nubimed/i18n.ts` (booking deferido) — actualizar cuando se reactive booking en release 2.
4. Segundo archivo UTF-16 LE encontrado (`docs/reference/source-materials.md`). Hay un editor externo convirtiendo encoding en Windows; vale investigar la causa raíz.

## Nota operativa

El movimiento con `mv`/`Move-Item` suele fallar en Windows por locks sobre carpetas activas del workspace. Se usó `robocopy /MOVE` (mismo patrón que en el archive de `defer-booking-cta-to-whatsapp` del 2026-09-01).

## SDD Cycle Complete

El change ha sido planeado, diseñado, especificado (declarado `None` intencionalmente), implementado, verificado y archivado. El sitio ya no representa "AJ Clínica" — todo el copy user-facing habla como Dra. Jessica Tellechea en voz singular. Listo para el próximo change.
