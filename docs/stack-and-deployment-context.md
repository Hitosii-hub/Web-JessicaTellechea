# Stack and Deployment Context - Dra. Jessica Tellechea Public Website

## Target Stack Summary

- **Framework:** [Astro](https://astro.build/) with **TypeScript**.
- **UI:** Astro components + **Tailwind CSS v4 (CSS-first)** (`@import "tailwindcss"`), design tokens in `@theme` under `src/styles/theme.css`, verified flows styled via layered partials under `src/styles/components/`; **optional islands** (Preact via `@astrojs/preact`, or React) for high-interaction sections (motion, carousels, booking) with hydration directives (`client:visible`, `client:load`, etc.).
- **Content:** Prefer **content in the repository** (Markdown/MDX or Astro content collections) so copy and structure stay reviewable in Git and friendly to AI-assisted authoring.
- **Hosting context:** **IONOS Hosting Plus** (shared web hosting, not VPS or dedicated Node runtime). **Build target:** fully static Astro output (`astro build` → `dist/`).

This document defines platform context for future specs. It is not a step-by-step deployment tutorial.

## Why This Direction

- **Reproducibility:** Build from Git; same pipeline locally and in CI; no dependency on clicking together the majority of pages in a hosted CMS.
- **Maintainability:** Layout, design tokens (`@theme` + legacy `:root` aliases), reusable primitives under `src/components/ui/`, and default copy live in code; changes are PR-reviewable.
- **“Wow” UX:** Astro stays lean by default; heavy client effects are scoped to explicit islands and optimized assets.

## IONOS Context (High-Level)

- **Current contract:** **Hosting Plus** is treated as **classic shared hosting**: serve prebuilt static files only. The **default and recommended** approach for this project is a **fully static** Astro build and upload of **`dist/`** (no long-running Node process on IONOS for the public site).
- **SSR / Node on IONOS:** out of scope for this plan. If SSR or server-side form handling on the same host were ever required, that would imply a **different** IONOS product (e.g. managed Node) or another layer—not assumed here.
- Performance, caching, HTTPS, and backup/restore remain **validation items** against the live panel and docs for the subscribed product.

## Content and Editorial Model

- **Primary:** Developers (and agents) edit MDX/Markdown and components in Git.
- **Non-developer editing (optional later):** If the business needs a visual CMS without abandoning Astro, evaluate a **headless CMS** or git-based CMS in a later spec—**not assumed** in the current baseline.

## Cross-Cutting Concerns (For Future Specs)

| Concern | Direction |
|--------|-----------|
| **SEO** | Per-route metadata, sitemap, hreflang aligned with `docs/seo-and-localization.md`. |
| **Multilingual** | URL strategy from SEO doc; implement with Astro i18n routing or equivalent. |
| **Forms / valuation** | On Hosting Plus: **no** server-side POST on IONOS; use a **third-party form backend** or external endpoint (e.g. `PUBLIC_FORM_POST_URL`). Optional later: serverless/edge elsewhere if product requires it. |
| **Booking** | Utility route `/reservar-cita/`; `noindex` per project brief. Optional **first-party Nubimed flow**: Preact island (`src/features/booking-nubimed/`) calls vendor endpoints from the browser using `PUBLIC_NUBIMED_CLINICA_ID`, `PUBLIC_NUBIMED_VENDOR_ORIGIN`, optional `PUBLIC_NUBIMED_PROXY_URL` (same-origin proxy if CORS/cookies block direct access), optional `PUBLIC_NUBIMED_PORTAL_NEW_URL` for degradation. No BFF on IONOS; gate checklist under `openspec/changes/nubimed-booking-client-flow/gate-checklist.md`. |
| **Practice/contact data** | Public operational fields come from `.env`: `PUBLIC_CLINIC_ADDRESS`, `PUBLIC_CLINIC_PHONE`, `PUBLIC_CLINIC_EMAIL`, `PUBLIC_CLINIC_INSTAGRAM`, and `PUBLIC_GOOGLE_MAPS_URL` (env var names retained as technical identifiers). Use `PUBLIC_CLINIC_PHONE` for visible phone text; keep `PUBLIC_WHATSAPP_E164` for WhatsApp/`wa.me` links only. These values are public and baked into static HTML/JS at build time. |
| **Legal pages** | Static MDX per locale; legal review before launch. |
| **Images/media** | `public/` or remote CDN; lazy loading and format strategy in implementation spec. |

## Decided vs Undecided

### Decided

- Public site implementation stack: **Astro + TypeScript**.
- **Content-first-in-repo** bias for core pages and messaging structure.
- **IONOS Hosting Plus** (shared hosting) as deployment context; **static-only** build (`dist/` on web space)—not Node/SSR on IONOS for this site.
- Booking route exists in IA but is **not** a primary nav item by default (`docs/site-architecture.md`).

### Undecided

- Form submission and notification vendor (email API, serverless, third-party form SaaS, etc.).
- Booking provider integration pattern (iframe vs deep link vs API).
- CI/CD tool and preview environments.
- Optional headless CMS for non-technical editors.
- Analytics and observability tooling.

## Relationship to Source Dossier

The PDF dossier may describe a different historical execution path (e.g. visual page builders). **This repository’s implementation path is Astro from source**, per this document; dossier remains authoritative for **business intent and IA**, not for builder-specific steps.

## IONOS deployment (pipeline de referencia)

> **Producto contratado:** **IONOS Hosting Plus** (alojamiento compartido). Modelo de despliegue acordado para este repo: **solo estatico** — `astro build` → carpeta `dist/` subida al espacio web.

1. **Build local o en CI:** `npm ci` y `npm run build`.
2. **Artefacto:** subir el contenido de `dist/` al directorio publico del hosting (raiz del dominio o subcarpeta segun DNS).
3. **Metodos habituales en IONOS:** ZIP + File Manager, **FTP/SFTP**, o despliegue Git si el producto lo incluye.
4. **Raiz `/`:** el proyecto usa redireccion en `src/pages/index.astro` hacia el idioma por defecto (`/es/`). En hosting solo estatico suele bastar un `index.html` con meta refresh o regla equivalente; si el panel permite **reglas de redireccion 301**, preferir redireccion servidor a `/es/`.
5. **Formularios:** sin runtime Node en IONOS para este sitio; el formulario de valoracion POSTea a destino externo configurado con `PUBLIC_FORM_POST_URL` (ver `.env.example`). Un cambio futuro de plan o de proveedor podria replantear endpoints propios; no es el supuesto actual.

Actualizar `SITE_URL` en `.env` al dominio definitivo antes del go-live (canonical, sitemap y OG). El `robots.txt` se **genera en build** desde `src/pages/robots.txt.ts` (linea `Sitemap` y `Disallow` de reservas alineados con `SITE_URL` y `src/i18n/route-registry.ts`).

Los datos visibles de la consulta se configuran con variables publicas en `.env`: `PUBLIC_CLINIC_ADDRESS`, `PUBLIC_CLINIC_PHONE`, `PUBLIC_CLINIC_EMAIL`, `PUBLIC_CLINIC_INSTAGRAM` y `PUBLIC_GOOGLE_MAPS_URL` (nombres de env preservados como identificadores tecnicos). `PUBLIC_CLINIC_PHONE` es el formato humano para UI/tel links; `PUBLIC_WHATSAPP_E164` se reserva para enlaces `wa.me` sin simbolos.

## Variables legales opcionales (`PUBLIC_LEGAL_*`)

Para sustituir los marcadores del responsable en privacidad, cookies y aviso legal sin tocar el codigo, puede definir en `.env` (ver `.env.example`): `PUBLIC_LEGAL_CONTROLLER_NAME`, `PUBLIC_LEGAL_CONTROLLER_NIF`, `PUBLIC_LEGAL_CONTROLLER_ADDRESS`, `PUBLIC_LEGAL_CONTROLLER_EMAIL` y opcionalmente `PUBLIC_LEGAL_DPO_EMAIL`. Son valores **publicos** embebidos en el HTML estatico en build; no almacenar secretos. Si faltan, el sitio muestra textos marcador `[...]` hasta que el negocio los rellene; la revision juridica sigue siendo responsabilidad del titular.
