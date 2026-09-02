# Tasks: Rebrand a Jessica Tellechea + Voz Singular

Referencias: [`proposal.md`](./proposal.md), [`design.md`](./design.md).
Regla vinculante para toda tarea: aplicar AD-1 (voz), AD-2 (tabla de reemplazos), AD-3 (imageAlt) del design. Cada archivo se toca en los 4 locales (`es`, `en`, `ca`, `fr`) donde aplique.

## Phase 1: Preparación

- [x] 1.1 Confirmar con el operador que actualizará `PUBLIC_CLINIC_NAME`, `PUBLIC_CLINIC_EMAIL`, `PUBLIC_LEGAL_CONTROLLER_NAME`, `PUBLIC_LEGAL_CONTROLLER_NIF` (y demás `PUBLIC_LEGAL_*`) en el `.env` de IONOS en el mismo deploy. **Confirmado por el usuario 2026-09-02**: actualiza `.env` a mano.
- [x] 1.2 Inventory de cobertura ejecutado (grep sobre `src/`, `docs/`, `README.md`, `AGENTS.md`). Resultados relevantes documentados en el reporte de apply-progress. La tabla AD-2 cubre todos los patterns observados; se detectaron **4 áreas nuevas** no listadas en Phases 2-6 que requieren extensión del plan (ver reporte).

## Phase 2: Copy — pillars y home

- [x] 2.1 `src/i18n/home-content.ts`: reemplazado. Manifest en 1ª persona (signature moment). El usuario pulió agregando "Barcelona y Tarragona" en imageAlt y SEO patterns.
- [x] 2.2 `src/i18n/facial-page.ts`: reemplazado. El usuario pulió el `insight.body` al patrón "En [dominio], la Dra. Jessica Tellechea busca…" y agregó "Barcelona y Tarragona" al SEO title + hero alt.
- [x] 2.3 `src/i18n/corporal-page.ts`: reemplazado aplicando el patrón "En [dominio], la Dra. Jessica Tellechea busca acompañar…" y "Barcelona y Tarragona" en SEO+alt para consistencia con los edits del usuario en 2.1/2.2.
- [x] 2.4 `src/i18n/capilar-page.ts`: reemplazado — hero, identification, diagnosis, benefits, treatments, process, authority. Voz nominal en process/authority; patrón "En [dominio], la Dra. Jessica Tellechea aborda…" en identification body.
- [x] 2.5 `src/i18n/trust-page.ts`: reemplazado — 1ª persona en subtitle + meaning.text[1] (signature moments per AD-1), nominal en valuation/consultation steps, `PILARES` sin sufijo AJ.
- [x] 2.6 `src/i18n/page-stubs.ts`: `WebAJ - X` → `Dra. Jessica Tellechea - X` (con `Dr.`/`Dre` según locale) en `pageStubsHome` + `pageStubsBySegment`. Fix también de plurales en `bookingPlaceholderCta` EN/CA/FR ("Message me", "Escriu-me", "M\'écrire") — el `reservar-cita` stub también corregido de plural ("Coordina" no "Coordinamos").
- [x] 2.7 Batch check ejecutado. Archivos Phase 2 = 0 matches reales (falsos positivos del regex `a\s+AJ` matchando "para ajustar" con `-i`). Hits residuales en `blog-page.ts`, `contact-page.ts`, `legal-content/cookies.ts` son de Phase 3/5 (esperados). `npm run check` PASS.

## Phase 3: Copy — contact, blog, cookies, componentes con hardcode, booking-nubimed

- [x] 3.1 `src/i18n/contact-page.ts`: reemplazado — SEO/hero/imageAlt con "consulta de la Dra. Jessica Tellechea" en 4 locales. `emailFallback` conservado (Out of Scope).
- [x] 3.2 `src/i18n/blog-page.ts`: reemplazado — "Blog Dra. Jessica Tellechea", quote en 1ª persona, imageAlt en ES descriptivo, "Filosofía" sin "Nuestra", newsletter sin plural.
- [x] 3.3 `src/i18n/cookie-consent-strings.ts`: banner + panel measurement de 1ª plural → impersonal en 4 locales ("Se utiliza sólo...", "Only what is strictly necessary is used...", etc.).
- [x] 3.4 `src/components/ValoracionForm.astro`: `privacyNote` ES/CA en singular impersonal; email `_subject` `[WebAJ]` → `[Dra. Jessica Tellechea]`.
- [x] 3.5 `src/components/contact/ContactPage.astro`: email `_subject` `[AJ Clinica]` → `[Dra. Jessica Tellechea]`.
- [x] 3.6 `src/components/blog/BlogIndexPage.astro`: monograma decorativo (aria-hidden) `AJ` → `JT`.
- [x] 3.7 `src/features/booking-nubimed/**`: 0 mentions de "AJ" en strings user-facing. `getClinicaId`/`assertClinicaId` son identifiers técnicos del vendor Nubimed (out of scope). Menciones de "la clínica" en RGPD legal del booking flow → flagged para release 2 (booking está deferido, no rendered).
- [x] 3.8 `src/layouts/BaseLayout.astro`: `alt="WebAJ"` → `alt="Dra. Jessica Tellechea"` en el logo del header.
- [x] 3.9 `src/pages/[lang]/index.astro`: `WebAJ | ${hero.h1}` → `Dra. Jessica Tellechea | ${hero.h1}`.
- [x] 3.10 `src/pages/[lang]/{privacidad,cookies,aviso-legal}.astro`: `WebAJ — ${page.title}` → `Dra. Jessica Tellechea — ${page.title}` en los 3 archivos.
- [x] 3.11 `src/pages/[lang]/blog/[slug].astro`: `${post.data.title} | WebAJ` → `${post.data.title} | Dra. Jessica Tellechea`.
- [x] 3.12 Batch check + `npm run check` PASS. 5 hits residuales son technical identifiers Out of Scope (`webaj.placeholder`, `webaj_cookie_consent_v1`).

## Phase 4: Blog content

- [x] 4.1 `src/content/blog/es/rejuvenecimiento-progresivo.md`: "En AJ priorizamos" → "En mi practica priorizo" (1ª persona, signature moment de blog).
- [x] 4.2 Confirmado: sólo hay `.md` en `es/`. Además migrado `capilar-diagnostico.md` (no estaba en task 4.1 pero tenía "evitamos" plural → "no presento" singular).

## Phase 5: Legal (batch aislado, requiere sign-off)

- [x] 5.1 `src/i18n/legal-content/privacy.ts`: sin hardcode de "AJ Clínica" (ya usa placeholders `__LEGAL_*__` interpolados desde env). Cambiadas 4 menciones de "la clínica" / "the clinic" / "l'activitat de la clínica" / "l'activité de la clinique" (sustantivo) → "actividad profesional del responsable" / "controller's professional practice" / "l'activitat professional del responsable" / "l'activité professionnelle du responsable". "clinic diary" → "professional diary" / "agenda profesional" en los 4 locales.
- [x] 5.2 `src/i18n/legal-content/cookies.ts`: sin cambios necesarios. No hay menciones de "la clínica" como sustantivo. `webaj_cookie_consent_v1` conservado (identificador técnico Out of Scope).
- [x] 5.3 `src/i18n/legal-content/aviso.ts`: cambiadas 6 menciones (2 por locale ES/EN/CA/FR) — "actividad de la clínica" → "actividad profesional del responsable", "acordado con la clínica" → "acordado directamente con el responsable". "relación clínica" (adjetivo = clinical relationship) preservado.
- [x] 5.4 Sign-off pendiente del operador. Textos rewriteados para que **no** se refieran a una clínica como entidad. Placeholders `__LEGAL_*__` siguen intactos — el operador debe setear `PUBLIC_LEGAL_CONTROLLER_*` en `.env` en el mismo deploy (dependency del proposal). **Voz formal legal "nosotros/we/nous" NO tocada** — es convención estándar en textos RGPD y el sujeto real es `__LEGAL_NAME__` interpolado; cambiarla requiere review con abogado.

## Phase 6: Documentación

- [x] 6.1 `docs/site-architecture.md`: title rebrand + eliminadas reglas obsoletas de normalización "Clinica ≡ Home" (concept moot post-rebrand).
- [x] 6.2 `docs/seo-and-localization.md`: title rebrand + "clinic identity" → "practitioner identity".
- [x] 6.3 `docs/stack-and-deployment-context.md`: title rebrand + "Clinic/contact data" → "Practice/contact data"; nota "env var names retained as technical identifiers" agregada; "clinica" → "consulta" en sección ES.
- [x] 6.4 `docs/reference/source-materials.md`: convertido de UTF-16 LE → UTF-8; agregado contexto histórico del rebrand; eliminada regla obsoleta "Clinica ≡ Home"; filename del dossier conservado con nota "historical dossier filename retained as-is".
- [x] 6.5 `README.md`: title `WebAJ - AJ Clinica Estetica y Capilar` → `Dra. Jessica Tellechea - Public Website`; "AJ public clinic website" → "Dra. Jessica Tellechea public website"; "clinic website context" → "practice website context"; "Public clinic/contact values" → "Public practice/contact values". Filename dossier conservado.
- [x] 6.6 `AGENTS.md`: title `AGENTS.md — WebAJ` → `AGENTS.md — Dra. Jessica Tellechea`; "public clinic site" → "public practice site of Dra. Jessica Tellechea"; "clinic identity data" → "practice identity data"; "Clinic/contact values" → "Practice/contact values".

> Nota Phase 6: la regla de "voz singular" (AD-1) aplica sólo a copy user-facing. Los docs son referencia técnica; su voz plural (docs escritos en "we ship / definimos") es una convención distinta y no se toca en este change.

## Phase 7: Verification

- [x] 7.1 Grep de regresión de marca ejecutado. Residuales legítimos:
    - `README.md:54` + `docs/reference/source-materials.md:5,7,19` — filename del dossier PDF (Out of Scope decidido) + quotes históricas explicando rebrand
    - `src/i18n/legal-content/cookies.ts:41,112,183,254` — `webaj_cookie_consent_v1` en texto de cookie policy (identificador técnico, Out of Scope)
    - `src/pages/robots.txt.ts:6` + `src/components/CookieConsent.tsx:5` — identificadores técnicos (`webaj.placeholder`, storage key)
    - `openspec/changes/rebrand-to-dra-jessica-tellechea/**` — docs de la propia propuesta (meta)
    - `openspec/changes/archive/**` — archivados (Out of Scope por proposal)
- [x] 7.2 Grep de voz plural en `src/i18n/` — **0 matches semánticos**.
- [x] 7.3 `npm run check` — 0 errors, 0 warnings (7 hints preexistentes en `content.config.ts` por `z` deprecado, no relacionados).
- [x] 7.4 `npm run lint:encoding` — `check-utf8: OK`. `docs/reference/source-materials.md` convertido de UTF-16 LE a UTF-8 como side-effect de Phase 6.
- [ ] 7.5 Smoke manual en `npm run dev` — **pendiente del usuario** (no ejecutable por regla global "Never build after changes"; el usuario puede correr `npm run dev` y validar home + pillars + trust + contact + booking placeholder + legal en `es` y `en`).
- [x] 7.6 Todas las tareas de Phases 1-6 marcadas `[x]`.

## Notas operativas

- Reemplazo mecánico + revisión humana. No usar `sd`/`sed` a ciegas — la voz plural requiere reescritura, no substitución 1:1.
- Concordancias verbales: "Jessica Tellechea entiende" (singular) — cuidado con conjugaciones que quedaron en plural post-reemplazo.
- Locales ES/CA son fuente editorial cercana; EN/FR pueden requerir revisión de matices adicionales.
