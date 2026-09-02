# Dra. Jessica Tellechea - Public Website

This repository holds **durable product and IA documentation** for the Dra. Jessica Tellechea public website, and hosts the **implementation** of the site as an **Astro + TypeScript** project (content and UI maintained from code, with optional interactive islands—for example React—where needed).

Deployment target is **IONOS Hosting Plus** (shared hosting): **static** Astro build output (`dist/`); see `docs/stack-and-deployment-context.md`.

Agent-assisted workflows (Cursor, Claude Code, etc.) are expected for implementation. **Coding-agent conventions:** see [AGENTS.md](AGENTS.md).

## Repository purpose

- Preserve durable project context before and during build work.
- Normalize business intent and information architecture from source materials.
- Provide a single source of truth for Spec-Driven Development (SDD) and implementation.
- Reduce ambiguity: **business rules live in `docs/`**; **presentation and copy live in the Astro codebase**.

## In scope

- Public-facing practice website context and documentation.
- Site goals, structure, messaging, conversion model, SEO/localization direction.
- Technical stack context: **Astro, TypeScript, IONOS deployment constraints** (`docs/stack-and-deployment-context.md`).

## Out of scope (for the documentation track)

- Full production launch checklist execution (DNS, final legal sign-off, live analytics).
- Final booking provider integration contract and credentials.

Implementation (Astro app, UI, content in repo) is **in scope** for the repository as a whole; the bullets above refer to what the **markdown briefs** do not replace by themselves.

## Document map

- `docs/project-brief.md` — business context, objectives, constraints, risks, assumptions, open questions.
- `docs/site-architecture.md` — sitemap, page responsibilities, navigation rules, conversion routing, naming normalization.
- `docs/content-and-messaging.md` — positioning, tone, copy rules, service framing, CTA behavior.
- `docs/seo-and-localization.md` — local SEO baseline, multilingual architecture assumptions, URL/meta guidance.
- `docs/stack-and-deployment-context.md` — Astro + TypeScript direction, IONOS hosting, content-in-repo, forms and multilingual implications.
- `docs/reference/source-materials.md` — source inventory, trust hierarchy, interpretation notes, inherited conflicts.

## Where to start

1. Read `docs/project-brief.md`.
2. Continue with `docs/site-architecture.md` and `docs/content-and-messaging.md`.
3. Use `docs/seo-and-localization.md` and `docs/stack-and-deployment-context.md` when writing implementation specs or Astro work.
4. Review `docs/reference/source-materials.md` for source traceability and conflict handling.

## Spec-Driven Development (OpenSpec)

- **Persistence:** SDD artifacts live under **`openspec/`** (changes, specs, `config.yaml`). Prefer **OpenSpec** over Engram when Gentle AI or other tools ask for artifact store mode.
- **Registry:** `.atl/skill-registry.md` (for delegators injecting compact rules).
- **Active changes:** consulta `openspec/changes/` (excluyendo `archive/`) para el estado real de deltas en curso; no asumir un unico cambio activo fijo en este README.
- **Spec (Nubimed reserva):** `openspec/specs/web-booking-nubimed-client/spec.md` — fuente de verdad. Cambio archivado: `openspec/changes/archive/2026-05-03-nubimed-booking-client-flow/`.

## Source material

- Primary dossier artifact: `docs/initial-dossier/Dossier Web AJ Clinica Estetica y capilar.pdf`.
- The dossier is retained as a reference input, not duplicated verbatim in markdown.

---

## Astro app (this repo)

Typical layout (see [Astro project structure](https://docs.astro.build/en/basics/project-structure/) for details):

```text
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Commands

Run from the project root (after `npm install`):

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server (default `localhost:4321`) |
| `npm run build`           | Production build to `./dist/`                    |
| `npm run preview`         | Preview the production build locally             |
| `npm run check`           | Astro + TypeScript diagnostics (`astro check`)   |
| `npm run astro ...`       | CLI: `astro add`, `astro check`, etc.            |
| `npm run astro -- --help` | Astro CLI help                                   |

### Locales and `/` redirect

- Homes live at **`/es/`**, **`/en/`**, **`/ca/`**, **`/fr/`** (see `src/pages/[lang]/` and `docs/seo-and-localization.md`).
- **`/`** uses `Astro.redirect` in dev; **static build** emits an HTML redirect (`meta refresh` + link) to `/es/`. For production, you MAY replace this with a host-level 302 rule.
- Set **`SITE_URL`** in a local `.env` (see `.env.example`); `astro.config.mjs` reads it via Vite `loadEnv` for Astro `site` (canonical and `hreflang`). If unset, a placeholder is used for local builds.
- **`/robots.txt`** is emitted at build from `src/pages/robots.txt.ts` (booking `Disallow` lines follow `src/i18n/route-registry.ts`; `Sitemap` uses the same origin as `site`).
- Public practice/contact values (`PUBLIC_CLINIC_ADDRESS`, `PUBLIC_CLINIC_PHONE`, `PUBLIC_CLINIC_EMAIL`, `PUBLIC_CLINIC_INSTAGRAM`, `PUBLIC_GOOGLE_MAPS_URL` — env var names retained as technical identifiers) and conversion values (`PUBLIC_NUBIMED_VENDOR_ORIGIN`, `PUBLIC_FORM_POST_URL`, `PUBLIC_WHATSAPP_E164`) live in `.env.example`; values are baked into the static build at build time where used. Use `PUBLIC_CLINIC_PHONE` for visible phone text and `PUBLIC_WHATSAPP_E164` only for `wa.me` links.

Official docs: [https://docs.astro.build](https://docs.astro.build) · Community: [https://astro.build/chat](https://astro.build/chat).

### Scaffolding note

If you recreate the site from the official basics template:

```sh
npm create astro@latest -- --template basics
```

merge project-specific files (this `README`, `docs/`) or init Astro in a subfolder and point deployment accordingly.