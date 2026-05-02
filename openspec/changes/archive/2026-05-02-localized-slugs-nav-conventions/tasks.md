# Tasks: Slugs localizados y convenciones de navegación

**Change:** `localized-slugs-nav-conventions`  
**Referencias:** [proposal.md](./proposal.md), [specs/web-localized-routing/spec.md](./specs/web-localized-routing/spec.md), [design.md](./design.md).

---

## Phase 1: Registro de rutas (fundación)

- [x] 1.1 Crear `src/i18n/route-registry.ts` con tipo `IaKey`, tabla de segmentos por locale alineada a REQ-2 del spec (matriz del proposal), sin colisiones por locale.
- [x] 1.2 Implementar `segmentFor(locale, key)`, `iaKeyFromPath(locale, segment)` (resolución inversa única) y `href(locale, key)` con política de barra final coherente con el sitio.
- [x] 1.3 Añadir prueba o script (`node`/`vitest`) que aserte todos los pares (locale, iaKey) del núcleo y que `iaKeyFromPath` sea inversa de `segmentFor` para segmentos definidos.

## Phase 2: Rutas dinámicas y páginas

- [x] 2.1 Ampliar `src/pages/[lang]/[segment].astro`: `getStaticPaths` debe enumerar solo segmentos devueltos por el registry para pilares, trust, contact y booking (todos los locales).
- [x] 2.2 En el mismo archivo, tras resolver `iaKey`, renderizar stubs existentes (`pageStubsBySegment`), página de contacto (contenido actual de contacto) o booking según `iaKey`; devolver 404 si el segmento no mapea.
- [x] 2.3 Eliminar `src/pages/[lang]/contacto.astro` y comprobar que `/es/contacto/`, `/en/contact/`, etc. sirven vía `[segment].astro`.
- [x] 2.4 Ajustar `src/pages/[lang]/blog/index.astro` (y `[slug].astro` si aplica) para que enlaces internos a núcleo usen `href()` del registry, sin asumir segmentos españoles en otros idiomas. *(Solo enlaces a posts bajo `/blog/`; sin enlaces a pilares en plantillas actuales.)*
- [x] 2.5 Revisar CTA/footer (`BaseLayout`, `CTAStack`, enlaces en legal si los hay) para reserva y contacto usando `href(lang, 'booking'|'contact')`.

## Phase 3: Navegación y switcher

- [x] 3.1 Actualizar `src/i18n/nav.ts`: etiquetas REQ-5/spec; cada ítem referencia `iaKey` o segmento vía registry (no strings fijos `criterio-medico` para todos los idiomas).
- [x] 3.2 Actualizar `src/components/PrimaryNav.astro`: construir `href` con `href(lang, iaKey)`; asegurar que **no** existe ítem de booking (REQ-6 / S-4).
- [x] 3.3 Actualizar `src/components/LanguageSwitcher.astro`: pasar `currentIaKey` (o equivalente) y generar URL destino con registry para mantener equivalencia (REQ-12 / S-5).

## Phase 4: SEO en layout y redirects

- [x] 4.1 Extender `src/layouts/BaseLayout.astro` (o módulo usado por OG/hreflang): alternates `hreflang` para pares de página con mismo `iaKey` cuando `Astro.site` esté configurado; `x-default` al español (REQ-8, docs SEO).
- [x] 4.2 Canonical por página alineado con URL localizada (REQ-9).
- [x] 4.3 Configurar lista 301 en `astro.config.mjs` → `redirects` **o** documentar `public/_redirects` / reglas IONOS según lo soportado el build (mapa mínimo del design + cualquier URL legacy adicional publicada).
- [x] 4.4 Validar `bookingRoute` / `noindex` en layout: rutas nuevas de booking por locale siguen siendo detectadas para `robots` si aplica la misma lógica que hoy.

## Phase 5: Verificación y documentación durable

- [x] 5.1 `npm run lint:encoding` y `npm run build` (REQ-13).
- [x] 5.2 Verificación manual de escenarios S-1 a S-8 del spec (rutas clave, nav, switcher, 301 si están activos). *Confirmado manualmente tras archivo: OK (rutas, nav, switcher, 301).*
- [x] 5.3 Escribir `verify-report.md` con resultados y limitaciones (p. ej. redirects solo en hosting).
- [x] 5.4 Actualizar `docs/seo-and-localization.md` y `docs/site-architecture.md` con la taxonomía v1 y convenciones de nav; **sdd-archive** en curso.

---

## Checklist rápido de redirects 301 (completar en 4.3 si aplica)

| Origen | Destino |
|--------|---------|
| `/en/corporal/` | `/en/body/` |
| `/en/capilar/` | `/en/hair/` |
| `/en/criterio-medico/` | `/en/medical-criteria/` |
| `/en/contacto/` | `/en/contact/` |
| `/en/reservar-cita/` | `/en/book-appointment/` |
| `/fr/facial/` | `/fr/visage/` |
| `/fr/corporal/` | `/fr/corporel/` |
| `/fr/capilar/` | `/fr/capillaire/` |
| `/fr/criterio-medico/` | `/fr/critere-medical/` |
| `/fr/contacto/` | `/fr/contact/` |
| `/fr/reservar-cita/` | `/fr/reserver-rendez-vous/` |
| `/ca/capilar/` | `/ca/capillar/` |
| `/ca/criterio-medico/` | `/ca/criteri-medic/` |

Añadir aquí cualquier URL indexada o enlazada externamente no listada.
