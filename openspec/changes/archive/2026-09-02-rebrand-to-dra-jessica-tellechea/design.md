# Design: Rebrand a Jessica Tellechea + Voz Singular

## Context

Rebrand editorial de "AJ / Clínica AJ / WebAJ" a "Jessica Tellechea" o "Dra. Jessica Tellechea" (según contexto) + migración de voz plural (nosotros / *we*) a **singular** en los 4 locales. Ver [`proposal.md`](./proposal.md) para intent y scope.

Este design **no** introduce ni modifica capabilities. La sección "Spec Phase" al final justifica por qué no se genera archivo bajo `specs/`.

---

## Architecture Decisions

### AD-1: Voz por defecto = 3ª persona editorial; 1ª persona permitida como recurso puntual

**Decisión.** El copy adopta **3ª persona editorial** ("Jessica Tellechea acompaña cada caso…", "La Dra. Tellechea prioriza el diagnóstico…") como voz por defecto en descripciones de servicios, procesos, criterios y pillars. La **1ª persona singular** ("Escucho antes de proponer.", "Priorizo el diagnóstico sobre el catálogo.") queda permitida **sólo** en momentos autorales — hero taglines, la sección de filosofía en `trust-page`, cierres de blog. Nunca voz plural.

**Rationale.**

- La 3ª persona proyecta profesionalismo y calma editorial, coherente con el tono "silent luxury" ya establecido en el sitio.
- La 1ª persona en dosis medidas humaniza y evita que el sitio suene institucional/frío, que sería la trampa opuesta al problema actual (voz plural corporativa).
- Nunca plural: es el problema que este cambio ataca. Una única profesional no es "nosotros".

**Alternativas descartadas.**

- **1ª persona total**: demasiado íntimo/blog personal; no funciona para descripción de servicios médicos ni para copy legal.
- **Mantener plural mayestático ("nos dedicamos…")**: contradice el intent — sigue sonando a clínica.

### AD-2: Tabla de reemplazos por locale

**Decisión.** Cada mención institucional se reemplaza según esta tabla. En ES/CA "Doctora" se abrevia como "Dra."; en EN "Doctor" es neutro y se abrevia "Dr."; en FR se usa "Dre" (forma feminizada moderna).

| Origen (cualquier locale) | ES | EN | CA | FR |
|---------------------------|----|----|----|-----|
| "AJ Clínica" / "Clínica AJ" | Dra. Jessica Tellechea | Dr. Jessica Tellechea | Dra. Jessica Tellechea | Dre Jessica Tellechea |
| "AJ Clinic" / "AJ Clinique" | Dra. Jessica Tellechea | Dr. Jessica Tellechea | Dra. Jessica Tellechea | Dre Jessica Tellechea |
| "AJ" (aislado como sujeto) | Jessica Tellechea | Jessica Tellechea | Jessica Tellechea | Jessica Tellechea |
| "AJ" (en frase institucional: "En AJ…") | En su práctica, Jessica Tellechea | In her practice, Jessica Tellechea | En la seva pràctica, Jessica Tellechea | Dans sa pratique, Jessica Tellechea |
| "WebAJ" (marca/producto) | Jessica Tellechea | Jessica Tellechea | Jessica Tellechea | Jessica Tellechea |
| "en clínica AJ" (locativo genérico) | eliminar frase o sustituir por "en la consulta" | replace with "at the practice" | substituir per "a la consulta" | remplacer par "au cabinet" |

**Regla de contexto para "Dra."** (aclara la edición del user en proposal L5):
- **Usar `Dra./Dr./Dre` cuando** el copy busca autoridad clínica: SEO titles, headings de pillars, hero de trust-page, referencias en copy legal, presentación institucional.
- **Usar "Jessica Tellechea" sin honorífico cuando** el tono es narrativo/personal: cuerpo de párrafos que ya establecieron el rol médico, cierres calmados de blog, imageAlt.

### AD-3: `imageAlt` — describe la imagen, no la marca

**Decisión.** Los `imageAlt` se reescriben para describir **lo que se ve** en la imagen, sin insertar la marca a menos que sea visible en el asset (logo, cartelería). "Tratamiento facial en clínica AJ" → "Tratamiento facial: manos aplicando producto sobre la piel"; no se convierte a "Tratamiento facial en la consulta de Jessica Tellechea" porque eso agrega ruido semántico irrelevante para un lector de pantalla.

**Rationale.** Alt text existe para accesibilidad. Su función es transmitir el contenido visual a usuarios que no lo ven, no reforzar marca. Nombres propios en alt sólo si aparecen en el asset.

**Excepción.** Fotos donde la doctora aparece literalmente: alt puede identificarla ("Jessica Tellechea en consulta" es válido si es su foto).

### AD-4: Contenido legal — cambio coordinado con `.env`

**Decisión.** `src/i18n/legal-content/{privacy,cookies,aviso}.ts` se reescriben junto al resto, con dos reglas específicas:

1. Toda mención al **responsable del tratamiento** que hoy diga "AJ Clínica" debe pasar a lo que el operador setee en `PUBLIC_LEGAL_CONTROLLER_NAME`. Si el archivo hoy tiene fallbacks hardcodeados con "AJ Clínica", esos fallbacks pasan a **cadena vacía o placeholder genérico** — no se hardcodea "Jessica Tellechea" para evitar que un deploy con env desactualizado siga sirviendo el nombre viejo o mezcle dos identidades.
2. El copy narrativo del texto legal (introducciones, párrafos explicativos) sí se reescribe a "Dra. Jessica Tellechea" siguiendo AD-2.

**Rationale.** El nombre del data controller es información legalmente vinculante. Debe venir del env, no de un default de código. Este cambio se merge sólo con sign-off editorial del operador y `.env` actualizado en el mismo deploy (dependency en proposal).

### AD-5: Estrategia de ejecución por batches

**Decisión.** Migración por dominio, un batch por PR-lógico (aunque se pueda mergear en un único PR físico):

1. **Copy pillars y home** — mayor volumen de tokens; primero.
2. **Copy contact / blog / cookies / componentes con hardcode.**
3. **Blog content** (markdown).
4. **Legal** — batch aislado con sign-off.
5. **Docs vivos + README + AGENTS.**

**Rationale.** Cada batch termina con `rg` acotado + `npm run check` para detectar regresiones antes de acumularlas. Legal aislado porque tiene revisor humano distinto.

### AD-6: Success criteria del proposal → grep de regresión

**Decisión.** El comando canónico de verificación es:

```bash
rg -i "AJ\s+Cl[íi]nica|Cl[íi]nica\s+AJ|AJ\s+Clinic|AJ\s+Clinique|WebAJ" \
   --glob '!openspec/changes/archive/**' \
   --glob '!node_modules/**' \
   --glob '!dist/**' \
   src/ docs/ README.md AGENTS.md
```

Debe devolver **0 matches** para declarar done. Idem el grep de voz plural (`nosotros|nuestr[oa]s?|somos|hacemos|ofrecemos`) sobre `src/i18n/`.

---

## Data / Contract Changes

- **Ninguna** en el sentido de código: sin nuevas exports, sin cambio de tipos, sin nuevos env vars.
- Copy: rewrite masivo — ver `tasks.md`.
- `.env` de producción: dependencia externa (el operador actualiza `PUBLIC_CLINIC_*` y `PUBLIC_LEGAL_*`).

## Rollout / Rollback

- **Rollout**: PR único con checkboxes de sign-off editorial (legal). Deploy coordinado con actualización de `.env` en IONOS.
- **Rollback**: `git revert <sha>` del PR. Sin migración; el `.env` viejo puede quedar (o revertirse por el operador). El copy vuelve al estado "AJ" en un `git revert`.

## Spec Phase — por qué no hay archivo `specs/`

Los specs vigentes (`web-booking-nubimed-client`, `web-localized-routing`, `web-design-tokens`, `web-motion-system`, `web-ui-primitives`, `web-facial-pillar-page`, `site-legal-compliance`) no fijan requisitos sobre **marca** ni **voz editorial**. Este cambio no altera comportamiento ni contrato — sólo texto. Por lo tanto no hay delta que documentar bajo `openspec/changes/rebrand-to-dra-jessica-tellechea/specs/`.

Si a futuro se decide que "voz editorial" o "identidad de marca" son capabilities auditables, se crearían específicamente entonces. Hoy sería inventar burocracia.

## Open Questions

Ninguna que bloquee `sdd-tasks`. Las dos que dejé abiertas en la propuesta quedaron resueltas:
- **Voz**: AD-1 fija 3ª persona editorial + 1ª persona puntual.
- **Tabla por locale**: AD-2.
- **imageAlt**: AD-3.
