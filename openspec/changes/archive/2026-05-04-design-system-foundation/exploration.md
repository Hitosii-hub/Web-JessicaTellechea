# Exploration: Stack de estilos para `design-system-foundation`

> Pregunta única: ¿Qué stack de estilos debe adoptar el design system fundacional de WebAJ para maximizar coherencia clínica + WOW UX, minimizando regresión en flujos verificados (booking, RGPD, legal) y respetando el deploy 100% estático en IONOS Hosting Plus?

## Current State

Hoy el sitio se estiliza con CSS plano + custom properties, sin framework utilitario.

- `src/styles/tokens.css` (19 líneas): un único `:root` con tokens de color (paleta verde provisional, `--color-accent: #2f5d4d` desalineado del brand champagne/oro `#c9ad7a`), tipografía (Inter Variable como sans único), 2 radios, 1 sombra, 5 espacios. No hay tokens de motion, z-index, opacidad, breakpoints ni estados (focus/disabled/danger).
- `src/styles/global.css` (690 líneas): clases BEM-ish agrupadas por feature. Inventario:
  - Shell base: `.site-header`, `.site-footer`, `.site-main`, `.site-header__placeholder`, `.site-footer__legal`, `.site-footer__note` (≈6 clases, ~50 líneas).
  - Marketing primitivas: `.hero*` (4), `.cta-stack*` (4), `.form-stack*` (6), `.blog-list*` (4) — total ≈18 clases, ~100 líneas.
  - **Verificadas / sensibles**:
    - `.booking-flow*` (~36 clases, ~290 líneas): root, fieldset, list/days/slots, choice, retry/continue/btn-secondary, banner, panel, summary, mode-row, grid, field, input, privacy, modal-overlay, modal, legal-block (con título y body), recaptcha-wrap, recaptcha-disclosure, success-msg. Spec cerrado: `openspec/specs/web-booking-nubimed-client/spec.md`.
    - `.cookie-consent*` (~12 clases, ~95 líneas): consent banner posicionado fixed, panel, categorías, botones primario/secundario, focus-visible. Spec cerrado: `openspec/specs/site-legal-compliance/spec.md`.
    - `.legal-prose*` (~6 clases, ~30 líneas): páginas legales (privacidad, cookies, aviso legal) bajo el mismo spec legal.
    - `body .grecaptcha-badge` con `!important` para ocultar la insignia, equivalente a aviso legal de reCAPTCHA (FAQ Google) — frágil, pero funcionalmente atado al spec de booking.
- `src/components/`: solo Astro components (`PrimaryNav`, `LanguageSwitcher`, `LegalDocArticle`, `Welcome`, `CTAStack`, `ValoracionForm`) + dos islands Preact (`CookieConsent.tsx`, `features/booking-nubimed/BookingFlow.tsx`) que escriben `class="..."` (no `className`) sobre las clases anteriores. **No existe `src/components/ui/`**.
- `src/layouts/BaseLayout.astro`: importa `../styles/global.css` una sola vez (carga global) y monta `<ClientRouter />` (view transitions de Astro ya activas).
- `astro.config.mjs`: integraciones `preact()` y `sitemap()`. **Bloque `vite:` ya presente** (proxy `/__nubimed-proxy` en dev). `trailingSlash: 'always'`, `redirects:` configurado para slugs locales. Añadir un plugin Vite es no invasivo.
- `package.json`: `astro@^6.2.1`, `@astrojs/preact@^5.1.2`, `preact@^10.29.1`, `@fontsource-variable/inter@^5.2.8`. Cero deps de utilidades CSS, cero PostCSS chain. Engines `node>=22.12`. Scripts: `dev`, `build`, `preview`, `check` (gate único).
- `docs/stack-and-deployment-context.md`: dirección documentada **"Astro components + CSS"** y mandato explícito **"Wow UX"**; build estático a `dist/` para IONOS, sin Node runtime.
- `AGENTS.md`: regla autoritativa "If code must diverge from docs, update the docs in the same change".

## Affected Areas

- `src/styles/tokens.css` — reescribir con paleta de marca (champagne/oro, microcemento, dark `#2f2e2b`) y ampliar a tokens semánticos (estados, motion, z-index, breakpoints). Cambia siempre, en cualquier opción.
- `src/styles/global.css` — reorganizar (split en partials) y reapuntar a tokens nuevos. Sus clases sensibles deben mantenerse 1:1 a nivel de selector y comportamiento.
- `src/components/ui/` — directorio nuevo (no existe) para primitivas Astro (`Button.astro`, `Container.astro`, `Section.astro`, `Stack.astro`, `Heading.astro`, `Field.astro`, `Surface.astro`).
- `astro.config.mjs` — solo si la opción elegida añade integración Vite (Tailwind v4 vía `@tailwindcss/vite`). El bloque `vite:` ya existe.
- `package.json` — solo si la opción añade deps. Hoy 5 deps en total.
- `docs/stack-and-deployment-context.md` — actualizar la línea "Astro components + CSS" si la opción diverge (regla de `AGENTS.md`).
- `src/layouts/BaseLayout.astro` — solo si cambia el punto de entrada de CSS (de `global.css` a `app.css` con `@import`).

No tocan en este change: `src/i18n/*`, `src/pages/[lang]/*`, `src/features/booking-nubimed/*` (lógica), `openspec/specs/*` (requirements). Sí cambia el **valor visual** consumido por las clases `.booking-flow*` y `.cookie-consent*`, pero no su superficie pública (selectores idénticos).

## Approaches

Comparativa contra los 8 criterios obligatorios.

### Resumen

| Criterio | A. CSS plano + tokens | B. Tailwind v4 CSS-first | C. Capa ligera (Open Props / UnoCSS preset) |
|---|---|---|---|
| 1. Coste migración booking/cookies/legal | **Mínimo**: solo se rebindean valores de tokens. 0 cambios de selector. | **Bajo si se aíslan**: las clases sensibles viven en `@layer components` con CSS escrito a mano consumiendo tokens del `@theme`. JSX intacto. Riesgo si se intenta reescribirlas a utilidades en este change. | **Bajo**: tokens compartidos vía custom properties; clases existentes se mantienen. |
| 2. Compat. Preact islands (`class` JSX, HMR, purge) | Sin fricción. | Sin fricción si se respeta `class=""`. Tailwind v4 escanea `.tsx`/`.astro`/`.ts` por defecto; HMR Vite-nativo. Las clases `.booking-flow*` no se purgan al estar en CSS escrito (no en JSX), por lo que entran como CSS opaco protegido. | Open Props: cero fricción. UnoCSS: scan via plugin Vite, similar a Tailwind v4. |
| 3. Expresividad de tokens (color, tipo fluida `clamp`, espaciado, sombras, motion, z-index) | Posible y limpia, pero **se construye todo a mano**. Sin escala automática, sin variantes media-query empaquetadas. | **Excelente**: `@theme { --color-*, --font-*, --text-*, --spacing-*, --radius-*, --shadow-*, --ease-*, --duration-*, --z-* }` se traduce en utilidades coherentes; `clamp` directo en el `@theme`. Soporte nativo de `@custom-variant`, `@utility`, container queries y `view-transition-name` como utilidades. | Open Props: tokens listos out-of-the-box, pero la semántica del brand (champagne, microcemento) hay que sobreescribirla. UnoCSS: similar a Tailwind con menos comunidad. |
| 4. Peso CSS/JS estático (IONOS, sin CDN) | CSS hoy ~690 líneas no minificado; tras minify ~12-15 KB. JS añadido: 0. **Más ligero hoy, pero crece linealmente con cada página**. | Tailwind v4 con `@theme` + `@source` purga agresivo: en sitios marketing tokenizados típicamente entre **8-25 KB** minificado (depende de variantes usadas) — con paridad de features suele bajar del CSS hand-rolled a media que el sitio crece. JS añadido: 0 (engine es build-time, Vite plugin). | Open Props: ~6 KB de tokens base + tu CSS. UnoCSS: similar a Tailwind. |
| 5. DX / velocidad agente para construir páginas | **Lenta**: cada sección nueva exige escribir CSS, nombrar clase, mantener consistencia manual. Los agentes se desvían fácilmente del sistema. | **Muy alta**: agentes (Cursor, Claude) tienen entrenamiento masivo en Tailwind; las utilidades imponen consistencia automática y reducen drift; iteración visual sin saltar de archivo. CSS-first v4 además permite definir tokens en el mismo archivo de utilidades. | Open Props: DX media (decoración manual sobre tokens). UnoCSS: parecido a Tailwind pero con menor familiaridad de los agentes. |
| 6. Encaje con WOW UX (ClientRouter, motion tokens, reduce-motion, jerarquía editorial) | Posible vía CSS ad-hoc. Anímate a `view-transition-name: section-X` por clase. Coste de mantener tokens motion sincronizados con utilidades **manual**. | **Mejor**: utilidades para `view-transition-name`, `[transition:style:motion-reduce:none]`, `data-state`, `@starting-style`. Tokens motion del `@theme` se reutilizan en utilidades arbitrarias. `prefers-reduced-motion` con variant `motion-reduce:` y `motion-safe:`. | Open Props: motion tokens incluidos pero sin variants. UnoCSS: equivalente a Tailwind. |
| 7. Coste documental (`docs/stack-and-deployment-context.md`) | **Cero divergencia**. | **Sí diverge**: actualizar la línea "Astro components + CSS" → "Astro components + Tailwind v4 (CSS-first) + tokens compartidos". 1-2 párrafos. | Diverge en menor grado: añadir mención a "tokens vía Open Props/UnoCSS". 1 párrafo. |
| 8. Reversibilidad a 2 meses | **Trivial**: no hay nada que deshacer. | **Media-Alta**: si se aíslan las clases sensibles en `@layer components` desde el principio, retirar Tailwind = quitar utilidades de páginas nuevas + dejar el CSS escrito intacto. La reversión cuesta proporcional a cuánto código de marketing se haya escrito en utilidades. | **Alta**: retirar Open Props = volver a tokens propios; clases existentes ya no dependen del paquete. |

### Detalle por opción

#### A. Mantener CSS plano + custom properties + componentes Astro

- **Pros**: cero deps nuevas, cero divergencia con docs, paridad funcional garantizada en booking/cookies/legal, control absoluto, build trivial.
- **Cons**: para alcanzar el "WOW UX" mandatado hay que reinventar a mano (a) un sistema de variantes responsive, (b) un sistema de pseudo-estados (`hover`, `focus-visible`, `motion-reduce`, `data-state`) coherente, (c) un harness de purge mental para evitar duplicación. Los agentes asistentes drifteam cuando construyen páginas nuevas porque cada sección invita a una clase BEM nueva. Con 6 páginas pendientes (Home + 4 pilares + Contacto + blog), el `global.css` crece a >2.000 líneas con duplicación previsible.
- **Effort**: bajo en este change, **alto acumulado** durante los 6-8 changes siguientes.

#### B. Adoptar Tailwind v4 (CSS-first, `@import "tailwindcss"` + `@theme`)

- **Pros**:
  - El `@theme` del brand **es** el sistema de tokens — un único archivo declara color, tipografía, espaciado, motion, z-index, y simultáneamente alimenta las utilidades. No hay desfase entre tokens y código.
  - Astro 6 + Tailwind v4 es integración Vite-nativa: `@tailwindcss/vite` en `astro.config.mjs` (ya hay bloque `vite:`). Sin PostCSS chain.
  - Build estático compatible (es solo CSS al final). Compatible con IONOS.
  - Las islands Preact ya usan `class="..."` (no `className=""`); funciona idéntico en Tailwind.
  - WOW UX: utilidades de view transitions, `motion-reduce:` variant, `@starting-style`, container queries, `view-transition-name`. Cero JS.
  - DX agente: el ecosistema más documentado para asistencia LLM. Reduce drift, acelera 6 páginas pendientes.
  - Tipografía editorial: añadir un serif (Cormorant, Fraunces) se declara en `@theme { --font-serif: ... }` y queda como utilidad `font-serif` en cualquier `<h1>`.
- **Cons**:
  - Diverge de la dirección documentada → exige actualizar `docs/stack-and-deployment-context.md` en este change (regla `AGENTS.md`).
  - Migración de clases verificadas requiere disciplina: en este change **no** se reescriben a utilidades; se mantienen como CSS escrito en `@layer components` y **solo** se rebindean a los nuevos tokens. El riesgo aparece si alguien intenta reescribir `.booking-flow__modal` como `class="fixed inset-0 z-80 ..."` ahora.
  - Reversibilidad cuesta proporcional al volumen de páginas escritas en utilidades.
  - Las primitivas Astro (`Button.astro`, `Field.astro`) deben absorber utilidades repetitivas para no contaminar las páginas con literales largos (`class="bg-primary text-on-primary px-4 py-2 ..."`).
- **Effort**: medio. La instalación es 1 archivo + 2 imports. La disciplina de aislamiento es lo que requiere atención.

#### C. Capa tokenizada ligera (Open Props o UnoCSS preset minimal)

- **Pros**: tokens out-of-the-box (Open Props), peso CSS pequeño, divergencia documental menor, fácil de retirar.
- **Cons**:
  - Open Props **no tiene utilidades**: hay que volver a escribir clases consumiendo `var(--*)`, igual que A pero con tokens prefabricados. Para WOW UX y velocidad agente sigue siendo lento.
  - UnoCSS: ecosistema fragmentado, menor familiaridad de los agentes asistentes, presets que cambian, menor garantía de longevidad. Aporta lo de Tailwind con más fricción y menos documentación accesible.
  - Para un proyecto que necesita 6 páginas tipográficamente complejas en plazo razonable y con asistencia masiva de agentes, queda en tierra de nadie.
- **Effort**: medio, con beneficio marginal sobre A.

## Recommendation

**Adoptar la opción B: Tailwind v4 CSS-first**, con un esquema de migración **deliberadamente conservador** que aísla las clases verificadas para no tocarlas en este change.

### Por qué B gana

1. **El `@theme` resuelve el problema central** del design system: declarar tokens del brand una sola vez y obtener simultáneamente sistema utilitario coherente. Hoy ya tenemos tokens en `tokens.css` desalineados; pasamos de "tokens sin utilidades" a "tokens con utilidades" sin duplicar el sistema.
2. **WOW UX silencioso es una propiedad emergente** de un sistema de motion bien tokenizado + variantes (`motion-reduce:`, `@starting-style`, `view-transition-name`). En A/C todo eso se construye a mano; en B viene como utilidades soportadas, lo que reduce el coste de cada microinteracción a una decisión, no a un fragmento CSS.
3. **El repo va a crecer 6+ páginas** (Home, Facial, Corporal, Capilar, Criterio Médico, Contacto, blog index, blog post) con asistencia de agentes en `/sdd-apply`. La diferencia de DX entre A/C y B se acumula como pendiente: B reduce drift y mantiene consistencia automáticamente.
4. **Las clases sensibles no se tocan**. Booking, RGPD y legal tienen specs cerrados; mantenerlas literalmente es trivial bajo Tailwind v4 porque permite escribir CSS escrito a mano dentro de `@layer components` consumiendo los mismos custom properties que las utilidades.
5. **Coste documental contenido**: una nota actualizada en `docs/stack-and-deployment-context.md`. Cumple `AGENTS.md` sin ambigüedad.
6. **Reversibilidad razonable** siempre que (a) las clases sensibles se mantengan como CSS escrito, no como utilidades inline en JSX, y (b) se documente el contrato de aislamiento.

### Esquema de migración propuesto (a desarrollar en `proposal.md` y `design.md`)

> Principio rector: **lo verificado no se reescribe. Lo nuevo es 100% Tailwind. Los tokens son el puente.**

#### Estructura de `src/styles/`

```
src/styles/
├── app.css              # punto de entrada único, importado por BaseLayout
├── theme.css            # @theme { --color-*, --font-*, --spacing-*, --shadow-*, --duration-*, --ease-*, --z-* }
├── base.css             # @layer base — reset Astro, html/body, focus-visible global, prefers-reduced-motion
├── components.css       # @layer components — orquesta los partials sensibles
├── components/
│   ├── booking-flow.css # idéntico a hoy en selectores; valores via var(--*) del @theme
│   ├── cookie-consent.css
│   ├── legal-prose.css
│   ├── hero.css         # las clases marketing antiguas (.hero, .cta-stack, .form-stack, .blog-list)
│   └── shell.css        # .site-header, .site-footer, .site-main
└── utilities.css        # @utility para casos no cubiertos por Tailwind (ej. tipografía editorial específica)
```

`app.css` como punto de entrada:

```css
@import "tailwindcss";
@import "./theme.css";
@import "./base.css";
@import "./components.css";
@import "./utilities.css";
```

`BaseLayout.astro` cambia una sola línea: `import '../styles/app.css';` en lugar de `global.css`.

#### Qué clases pasan a utilidades en este change

- **Ninguna**. Las primitivas nuevas (`Button.astro`, `Container.astro`, `Section.astro`, `Stack.astro`, `Heading.astro`, `Field.astro`, `Surface.astro`) sí se construyen 100% con utilidades Tailwind. Las páginas siguientes (changes posteriores) van 100% utilidades.

#### Qué clases quedan en `@layer components` sin reescribir

- `.booking-flow*` (todas) — protegidas por spec `web-booking-nubimed-client`. Solo se rebindean a custom properties del `@theme`.
- `.cookie-consent*` — protegidas por spec `site-legal-compliance`. Idem.
- `.legal-prose*` — idem.
- `body .grecaptcha-badge` con `!important` — se conserva idéntico (atado a aviso legal de reCAPTCHA).
- `.hero`, `.cta-stack*`, `.form-stack*`, `.blog-list*`, `.site-header*`, `.site-footer*`, `.site-main` — se mantienen en `@layer components` durante este change para evitar mezcla de paradigmas. Su reescritura a utilidades es **out-of-scope** y candidata a un change posterior si se desea limpiar. Cuando los nuevos componentes (`Button.astro`, `Section.astro`) los reemplazan en cada página, las clases antiguas se irán retirando de forma natural.

#### Orden seguro

1. Añadir `@tailwindcss/vite` a `astro.config.mjs` y `tailwindcss` + `@tailwindcss/vite` a deps.
2. Crear `src/styles/app.css`, `theme.css`, `base.css`, `components.css`, `utilities.css` y mover el contenido actual de `global.css` a partials por feature.
3. Reescribir `tokens.css` como `theme.css` con paleta de marca y tokens nuevos (motion, z-index, estados).
4. Cambiar el import de `BaseLayout.astro`.
5. Construir primitivas Astro en `src/components/ui/` con utilidades Tailwind.
6. Smoke test: `npm run check`, `npm run build`, navegar / → /es/ → booking → cookies → legal y verificar paridad visual.
7. Actualizar `docs/stack-and-deployment-context.md` ("Astro components + Tailwind v4 (CSS-first)").

## Risks

- **R1 — Regresión visual en booking** (`web-booking-nubimed-client`): si los tokens nuevos cambian semántica de `--color-accent` o `--color-border` sin compatibilidad, el modal/reCAPTCHA puede verse alterado. **Mitigación**: en `theme.css` mantener nombres de variables custom existentes (`--color-accent`, `--color-border`, `--color-surface`, etc.) como aliases del nuevo token semántico hasta migrar las clases de feature.
- **R2 — Regresión funcional en cookies** (`site-legal-compliance`): el CookieConsent.tsx usa `class="cookie-consent..."`; si se purga o renombra, se rompe el banner RGPD. **Mitigación**: las clases viven en `@layer components` (CSS escrito); Tailwind no las purga porque no provienen del scan de fuentes.
- **R3 — `body .grecaptcha-badge` con `!important`**: el aviso legal equivalente del booking depende de ocultar la insignia. **Mitigación**: copiar el bloque tal cual a `components/booking-flow.css`; ningún cambio.
- **R4 — Divergencia con `docs/stack-and-deployment-context.md`**: incumplir `AGENTS.md` si no se actualiza. **Mitigación**: actualización del doc es tarea explícita y bloqueante en `tasks.md`.
- **R5 — FOUT al añadir tipografía editorial** (si se decide en el proposal añadir un serif): el `@fontsource` self-hosted con `font-display: swap` produce FOUT. **Mitigación**: pre-cargar la subfamilia `display` con `<link rel="preload">` y mantener la decisión de añadir serif fuera de este change si su justificación no es sólida.
- **R6 — Bundle inflado por uso descuidado de utilidades arbitrarias**: agentes futuros pueden generar `class="..."` con valores literales (`text-[#5b594f]`). **Mitigación**: regla en `proposal.md` y `design.md` de "no valores literales; siempre tokens". Añadir lint posterior si el problema reaparece.
- **R7 — Reversibilidad si Tailwind no funciona**: 2 meses de páginas en utilidades crean bloqueo. **Mitigación**: las clases verificadas se quedan como CSS escrito; las primitivas (`Button.astro` etc.) absorben utilidades; si hay rollback, la salida es sustituir las primitivas y reescribir páginas, no tocar booking/cookies/legal.
- **R8 — `view-transition-name` único entre rutas**: con `<ClientRouter />` activo, varias páginas con la misma transición pueden colisionar. **Mitigación**: convención de naming por IA key (`facial`, `corporal`...) más allá del scope de este change.

## Ready for Proposal

**Yes.**

### Inputs concretos para `/sdd-proposal`

- Change name: `design-system-foundation`.
- Decisión de stack: **B — Tailwind v4 CSS-first** (esta exploración la cierra; el proposal la asume y construye scope alrededor).
- Capabilities a declarar:
  - `web-design-tokens` (nuevo): contrato de nombres de tokens en `@theme` (color semántico incluyendo estados, tipografía con fluida `clamp`, espaciado, sombras, motion, z-index). Mantener aliases de los tokens actuales para compatibilidad con clases verificadas.
  - `web-ui-primitives` (nuevo): primitivas Astro reutilizables en `src/components/ui/` (`Button`, `Container`, `Section`, `Stack`, `Heading`, `Eyebrow`, `Field`, `Surface`, `Divider`).
  - `web-motion-system` (nuevo, evaluable fusionar con tokens): durations, easings, política de view transitions, `prefers-reduced-motion`.
- Affected areas (rutas):
  - `src/styles/{app,theme,base,components,utilities}.css` y `src/styles/components/{booking-flow,cookie-consent,legal-prose,hero,shell}.css`.
  - `src/components/ui/` (nuevo).
  - `src/layouts/BaseLayout.astro` (cambio de import).
  - `astro.config.mjs` (añadir `@tailwindcss/vite`).
  - `package.json` (deps `tailwindcss` y `@tailwindcss/vite`).
  - `docs/stack-and-deployment-context.md` (actualización de dirección documentada).
- Restricciones a heredar al proposal: cero cambios en `src/i18n/*`, `src/pages/*`, `src/features/booking-nubimed/*` (lógica), `openspec/specs/*` (requirements). Mantener `<ClientRouter />` y trailing slash. Build estático IONOS sin nuevas dependencias runtime.
- Out-of-scope a heredar: implementación de páginas (Home, Facial, Corporal, Capilar, Criterio Médico, Contacto), copy editorial, fotografía clínica final, tema oscuro, Storybook, decisión definitiva de añadir serif editorial (puede ir en este change si se justifica con peso < 25 KB; si no, posponer).
- Success criteria a heredar: `npm run check` verde; `npm run build` produce `dist/` sin warnings nuevos; paridad visual y funcional verificada manualmente en `/`, `/es/`, una página de servicio stub, el flow de booking completo, el banner de cookies y las 3 páginas legales; `docs/stack-and-deployment-context.md` actualizado; tokens del brand (`#5b594f`, `#f7f6f3`, `#ecebe7`, `#2f2e2b`, `#c9ad7a`) presentes y consumibles como utilidades.
