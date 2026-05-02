# AGENTS.md - WebAJ

Instructions for **coding agents and implementers**. Human overview and doc index: [README.md](README.md).

## SDD (Gentle AI / Cursor)

- **Artifact store:** **OpenSpec** — specs and change deltas live under `openspec/` (see `openspec/config.yaml`). If Gentle AI install or TUI asks for persistence mode, choose **OpenSpec**, not Engram, for this repo.
- Phase skills (`sdd-explore`, `sdd-propose`, …) read/write those paths per OpenSpec convention.

## Role

Ship the public clinic site **aligned with `docs/`**. Prefer small, reviewable changes. If product intent changes, update the relevant markdown first (or in the same PR), then code.

## Authority order

1. **`docs/*.md`** - business rules, IA, messaging, SEO/i18n.
2. **`docs/stack-and-deployment-context.md`** - Astro + TypeScript, IONOS Hosting Plus, static `dist/` deployment.
3. **PDF dossier** under `docs/initial-dossier/` - business intent only; not a build recipe (may describe legacy workflows).

## Minimum read before UI, routes, or copy

1. `docs/site-architecture.md` - URLs, nav, conversion, booking visibility.
2. `docs/content-and-messaging.md` - tone, CTAs, service framing.
3. `docs/stack-and-deployment-context.md` - stack, hosting (static on IONOS), form vendor TBD.
4. `docs/project-brief.md` - legal scope, booking `noindex`, owner decisions.

Full index: README, section **Document map**.

## Stack (unless docs change)

- **Astro + TypeScript**; optional **client islands** (e.g. React) only where needed; keep pages lean by default.
- **Do not** bring back **WordPress / Elementor** as the primary platform unless the owner updates `docs/stack-and-deployment-context.md` and `docs/project-brief.md`.

## Product rules in code (verify in `docs/`)

- **Valuation-first** on key pages; booking and WhatsApp as secondary paths (`docs/content-and-messaging.md`, `docs/site-architecture.md`).
- **`/reservar-cita/`** exists but is **not** a primary nav item by default.
- Booking route stays **`noindex`** (`docs/project-brief.md`).

## Where things live

- **IA, tone, SEO/i18n, legal:** `docs/`.
- **Layouts, components, MDX/content collections:** `src/` (when present) and `public/`.

If code must diverge from docs, **update the docs** in the same change or ask the human.

## Commands (when `package.json` exists at repo root)

```bash
npm install
npm run dev
npm run build
npm run preview
```

Use **`npx astro check`** when TS/content integration matters (add an npm script if missing).

## Do not

- Change **canonical slugs** or **primary nav** without updating `docs/site-architecture.md` (and SEO doc if URLs change).
- Commit **secrets** (local `.env` only; keep ignored).
- Paste large **dossier** text into the repo.

## Localization

Four locales: **`es`** (primary), then **`en`**, **`ca`**, **`fr`**; URLs and hreflang (including **`x-default`** → Spanish): **`docs/seo-and-localization.md`**. Keep routes and metadata consistent when adding locales.
