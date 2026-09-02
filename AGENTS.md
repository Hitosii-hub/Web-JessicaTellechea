# AGENTS.md — Dra. Jessica Tellechea

Playbook for **coding agents** (Cursor Agent mode, CLI, cloud). Human overview: [README.md](README.md).

Work **autonomously**. Read this file, inspect the repo, implement, verify, and report. Ask only when a decision is blocked by product, legal, or irreversible scope.

## Agentic protocol

### Default stance

You are an implementer on the public practice site of Dra. Jessica Tellechea. Prefer a small, reviewable diff that ships. Do not wait for permission on bounded, reversible work.

### Loop (every task)

1. **Orient** — Read the docs listed below that apply, then the existing code (search before inventing).
2. **Classify** — Direct implement vs OpenSpec change (see [Scope](#scope-direct-vs-openspec)).
3. **Plan internally** — Name files you will touch. If the change spans more than ~8 unrelated files or invents a new IA node, state the plan in one short paragraph and proceed unless a [Stop](#ask-or-stop) rule applies.
4. **Implement** — Smallest change that satisfies the request. Match local patterns. No drive-by refactors.
5. **Verify** — Run the [commands](#commands-and-definition-of-done) that apply. Fix failures before declaring done.
6. **Report** — What changed, how you verified, and any leftover risk. Do not commit unless the human asked.

### Ask or stop

**Proceed without asking**

- Copy, layout, and styling inside an existing page or component.
- i18n strings for the four locales (`es`, `en`, `ca`, `fr`) on existing keys.
- Bugfixes, a11y, performance, and encoding (UTF-8) fixes.
- New UI built from `src/components/ui/` and existing tokens.
- Isolated Preact islands when interactivity is required.

**Ask first**

- Canonical slugs, primary nav items, or new IA intents.
- New locales, new public routes, or indexability of booking.
- Stack or hosting changes (WordPress, SSR, Node on IONOS).
- Legal/medical claims, prices, or practice identity data that are not already in `.env` / copy files.
- Git commit, push, or pull request (only if the human requested it).

**Never**

- Commit secrets or put credentials in the repo. Local `.env` only.
- Paste large PDF dossier text into markdown or source.
- Restore WordPress / Elementor as the primary platform.
- Add a Node/SSR runtime for IONOS Hosting Plus. Build target is static `dist/`.
- Change booking from `noindex` without a docs + product decision.

## Scope: direct vs OpenSpec

**Artifact store is OpenSpec** (`openspec/`). If a tool offers Engram for SDD artifacts, use OpenSpec for this repo. Skills: `sdd-explore` → `sdd-propose` → `sdd-spec` → `sdd-design` → `sdd-tasks` → `sdd-apply` → `sdd-verify` → `sdd-archive`.

| Direct implement (no new change folder) | Start or update an OpenSpec change |
|-----------------------------------------|-------------------------------------|
| Bugfix, copy, visual tweak, one component | New public route or IA node |
| i18n string parity on existing pages | Conversion model / CTA hierarchy change |
| Token or CSS partial for an existing flow | Booking/Nubimed contract or gate changes |
| Content collection entry (blog post) | Design-system primitives or motion rules |
| Docs aligned with already-shipped code | Anything that must stay auditable as a delta |

Active deltas live in `openspec/changes/` (ignore `archive/`). Main specs live in `openspec/specs/`. Config: `openspec/config.yaml`.

## Authority order

1. **`docs/*.md`** — business rules, IA, SEO/i18n, stack. Prefer files that exist on disk (see [Minimum read](#minimum-read)).
2. **`openspec/specs/`** — promoted requirements (e.g. localized routing).
3. **Implemented code** — if docs and code disagree on a **shipped** URL or behavior, treat code as live, then update docs in the same change (or flag the drift).
4. **PDF under `docs/initial-dossier/`** — business intent only, not a build recipe.

If code must diverge from docs, update the docs in the same change or ask.

## Minimum read

Before **UI, routes, or copy**:

1. `docs/site-architecture.md` — URLs, nav, conversion, booking visibility.
2. `docs/seo-and-localization.md` — locales, hreflang, `x-default` → Spanish.
3. `docs/stack-and-deployment-context.md` — Astro, static IONOS, forms, env.
4. `src/i18n/route-registry.ts` — **live slug matrix** and `href(locale, iaKey)`.

Before **booking**: `src/features/booking-nubimed/` and `openspec/specs/` / archived change for Nubimed if you need the contract.

Full human index: README, section **Document map**. Some titles there may not exist yet; do not invent missing briefs.

## Stack

- **Astro + TypeScript** (`astro.config.mjs`, `tsconfig.json` strict). Node `>=22.12`.
- **Tailwind CSS v4** (CSS-first). Tokens in `src/styles/theme.css` (`@theme`). Layered CSS in `src/styles/`. App entry: `src/styles/app.css`.
- **UI:** Astro components. Reuse `src/components/ui/` (Button, Container, Section, Heading, …).
- **Islands:** **Preact** (`@astrojs/preact`, `jsxImportSource: preact`). Hydrate with `client:load` / `client:visible` / `client:idle` only where needed. Do not add React unless docs change.
- **Content:** copy in `src/i18n/*`; blog in `src/content/blog/` via `src/content.config.ts`.
- **Host:** IONOS Hosting Plus, **static** `astro build` → `dist/`. No BFF on IONOS.
- **Forms:** POST to `PUBLIC_FORM_POST_URL` (vendor TBD). No server-side POST on IONOS.
- **i18n routes:** locale-first `/{es|en|ca|fr}/…`, `trailingSlash: 'always'`.

## Where things live

| Area | Path |
|------|------|
| Pages | `src/pages/` (`index.astro` redirects to `/es/`; `[lang]/index.astro`; `[lang]/[segment].astro`; blog; legal; `robots.txt.ts`) |
| Layouts | `src/layouts/BaseLayout.astro` (hreflang, booking `noindex`) |
| Marketing / pillars | `src/components/{home,facial,corporal,capilar,trust,contact,blog}/` |
| Primitives | `src/components/ui/` |
| Copy & nav | `src/i18n/` (`config.ts`, `route-registry.ts`, `nav.ts`, `*-page.ts`, legal) |
| Booking island | `src/features/booking-nubimed/` |
| Tokens / CSS | `src/styles/` |
| Public assets | `public/` |
| Product docs | `docs/` |
| SDD | `openspec/` |
| Verify scripts | `scripts/verify-route-registry.mjs`, `scripts/check-utf8.mjs` |

## Product rules (verify in `docs/` + code)

- **Valuation-first** on key pages. Booking and WhatsApp are secondary (`docs/site-architecture.md`).
- Booking exists as a utility route and is **not** a primary nav item (`src/i18n/nav.ts` excludes `booking`).
- Booking stays **`noindex`** (`BaseLayout.astro` + sitemap filter in `astro.config.mjs`).
- Four locales: **`es`** (primary), then **`en`**, **`ca`**, **`fr`**. `hreflang` including **`x-default`** → Spanish URLs.
- Build internal links with `href(lang, iaKey)` from `route-registry.ts`. Do not hardcode Spanish segments on EN/FR/CA.
- Practice/contact values come from `PUBLIC_*` env (see `.env.example`; env var names retained as technical identifiers). Phone for UI: `PUBLIC_CLINIC_PHONE`. WhatsApp: `PUBLIC_WHATSAPP_E164` only for `wa.me`.
- Primary CTA pattern: solicitar valoración. Do not make “Reservar cita” the dominant home/pillar action.

## Code conventions

- **TypeScript** in `.ts` / component scripts. Prefer existing helpers over new utilities.
- **Copy:** add all four locales together for user-visible strings. `es` is editorial source; do not ship empty EN/CA/FR UI chrome.
- **Slugs:** edit `src/i18n/route-registry.ts`, then `astro.config.mjs` (redirects + sitemap booking segments), `scripts/verify-route-registry.mjs`, `docs/site-architecture.md`, and `openspec/specs/web-localized-routing/spec.md`. This is an [Ask first](#ask-or-stop) change.
- **Styles:** use theme tokens (`var(--color-…)`, `--space-*`, `--radius-*`, `--duration-*`). New flow CSS goes in `src/styles/components/` and is imported from `components.css`. Do not introduce a second design system.
- **Motion:** `motion-safe:` transitions; respect reduced motion.
- **Encoding:** UTF-8. After touching many text files on Windows, run `npm run lint:encoding`.
- **Env:** never commit `.env`. Document new `PUBLIC_*` keys in `.env.example`.

## Commands and definition of done

From repo root (after `npm install`):

```bash
npm run dev              # local server, default localhost:4321
npm run build            # production static output → dist/
npm run preview          # preview dist/
npm run check            # astro check (types + content)
npm run verify:routes    # slug matrix sanity
npm run lint:encoding    # UTF-8 check
```

`SITE_URL` and `PUBLIC_*` are read from `.env` (copy `.env.example`). If unset, `astro.config.mjs` uses a placeholder site origin.

**Done when**

- The requested behavior works on the affected locales/routes.
- `npm run check` passes for TS/content-sensitive work.
- `npm run build` passes when you changed pages, config, or islands.
- `npm run verify:routes` if you touched the slug matrix.
- UI changes: exercise the flow (browser if available; otherwise `dev`/`preview` + curl). Check an affected non-`es` locale when copy or URLs changed.
- No unrelated files in the diff. Docs updated if product behavior changed.

## Communication

- Talk to the human in **Spanish** unless they write in another language.
- Be concrete: files, routes, commands run, leftover risk.
- Do not dump secrets, dossier text, or huge unchanged diffs.
