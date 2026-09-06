# Tasks: Base legal del sitio (RGPD / LSSI, cuatro idiomas)

**Change:** `legal-content-rgpd-i18n`  
**Refs:** [proposal.md](proposal.md), [design.md](design.md), [specs/site-legal-compliance/spec.md](specs/site-legal-compliance/spec.md), [specs/web-booking-nubimed-client/spec.md](specs/web-booking-nubimed-client/spec.md)

## Phase 1 Modelo de datos y placeholders

- [x] 1.1 Crear `src/i18n/legal-placeholders.ts` con titular, NIF, domicilio, email (placeholders texto; opcional lectura de `PUBLIC_*` no secretos documentados en `.env.example`).
- [x] 1.2 Definir tipos `LegalSection`, `LegalPageModel` (u equivalente) y export unificado por `LegalSlug` x `Locale` en `legal-copy.ts` (o `legal-pages.ts` si se separa para no romper imports sin plan).
- [x] 1.3 Implementar contenido **privacidad** en ES segun briefing (secciones 1-10); insertar placeholders desde 1.1; parrafo disclaimer no asesoramiento legal / DPO.
- [x] 1.4 Traducir / redactar **privacidad** EN, CA, FR al mismo nivel de cobertura que ES (revision humana marcada en comentario TODO si aplica).
- [x] 1.5 Mismo patron para **cookies** (que son, tipos, terceros Google, gestion, `localStorage` para preferencia banner) y **aviso legal** (identificacion, condiciones, PI, responsabilidad) en los cuatro idiomas.
- [x] 1.6 Anadir helper `legalCrossLinks(lang)` (o dentro de cada modelo) con `href` a `/${lang}/privacidad/`, `/${lang}/cookies/`, `/${lang}/aviso-legal/` para L-2.

## Phase 2 Paginas Astro legales

- [x] 2.1 Actualizar `src/pages/[lang]/privacidad.astro` para renderizar `title`, `sections` (h2 + parrafos), bloque disclaimer y nav cruzada.
- [x] 2.2 Actualizar `src/pages/[lang]/cookies.astro` y `src/pages/[lang]/aviso-legal.astro` igual que 2.1.
- [x] 2.3 Validar metadatos `title`/`description` por locale y que no se altere `noindex` de otras rutas (L-7).

## Phase 3 Banner cookies y layout

- [x] 3.1 Crear `src/components/CookieConsent.tsx` (Preact): copy primera capa (Aceptar / Rechazar / Configurar), i18n segun prop `lang`, persistencia `localStorage` clave versionada `webjt_cookie_consent_v1`, panel segunda capa o enlace ancla a politica.
- [x] 3.2 Registrar isla en `src/layouts/BaseLayout.astro` (`client:load`, prop `lang`); una sola instancia por pagina.
- [x] 3.3 Anadir estilos en `src/styles/global.css` (banner fijo/accesible, foco teclado, contraste, no bloquear interaccion legal obligatoria).
- [x] 3.4 Crear `src/i18n/legal-nav.ts` (o equivalente) con etiquetas footer; sustituir ternarios de enlaces legales en `BaseLayout`; actualizar o retirar `site-footer__note` de borrador segun criterio producto.

## Phase 4 Reserva Nubimed (REQ-13)

- [x] 4.1 Extender `src/features/booking-nubimed/i18n.ts`: bloque informativo (responsable, finalidad, legitimacion, Nubimed encargado), `privacyPolicyUrl(lang)` hacia `/${lang}/privacidad/`, checkbox marketing opcional, textos reCAPTCHA alineados con legal.
- [x] 4.2 En `BookingFlow.tsx`: render bloque informativo; enlace privacidad con `href` correcto; checkbox privacidad existente sin premarcar; **nuevo** checkbox marketing no premarcado; submit no exige marketing; validar REQ-13 antes de POST.

## Phase 5 Documentacion y verificacion

- [x] 5.1 Si aplica `AGENTS.md` / `docs/stack-and-deployment-context.md`: una seccion breve vars `PUBLIC_*` legales opcionales y disclaimer publicacion.
- [x] 5.2 Matriz manual: ES/EN/CA/FR x (privacidad, cookies, aviso) + enlaces cruzados + footer + banner (limpiar storage entre pruebas) + paso reserva (privacidad obligatoria, marketing opcional, reCAPTCHA visible).
- [x] 5.3 `npm run check` y `npm run build` sin errores.

## Optional

- [ ] O.1 Vitest o pruebas de snapshot para helper de enlaces legales si el equipo aprueba runner.
