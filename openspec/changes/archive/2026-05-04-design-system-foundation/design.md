# Design: Design system foundation

## Technical Approach

**Tailwind v4 CSS-first:** `src/styles/app.css` = `@import "tailwindcss"` + `theme.css` (`@theme`) + `base.css` + `components.css` (imports `components/*.css`) + slim `utilities.css`. **`BaseLayout.astro`** imports only `app.css`. **`astro.config.mjs`:** add `@tailwindcss/vite` next to existing **`vite.server.proxy`** (`plugins` sibling — proxy untouched).

**Verified selectors unchanged:** `.booking-flow*`, `.cookie-consent*`, `.legal-prose*`, `body .grecaptcha-badge`. Styles in **`@layer components`** partials via **`var(--*)`**. **`theme.css`:** `@theme` plus **`:root` aliases** (`--color-*`, `--space-*`, `--font-sans`, …) so **`BookingFlow.tsx` / `CookieConsent.tsx`** literal **`class="..."`** keeps working.

**New surfaces:** `src/components/ui/` = Astro primitives built from **token utilities only** (no arbitrary hex). **Inter** only; serif **deferred** (Open Questions). **Motion:** `--duration-*`/`--ease-*` in `@theme`; **`prefers-reduced-motion`** in `base`; **`motion-reduce:`** / **`motion-safe:`**. **`<ClientRouter />`** retained; transition naming convention deferred beyond noting collision risk. **Scoped `<style>`** (e.g. **`PrimaryNav.astro`**) coexists with Tailwind; tune later if specificity clashes.

## Architecture Decisions

| Decision | Choice | Alternatives | Rationale |
|----------|--------|--------------|-----------|
| Stack | Tailwind v4 + Vite plugin | Plain CSS; Open Props/Uno | Proposal **B**; `@theme`↔utilities; static `dist/` |
| Verified CSS | Same selectors in `@layer components` | Utilities in JSX | Spec-bound; lowest regression |
| Bridge | `@theme` + legacy `:root` `--*` aliases | Rename vars | Keeps island `var()` contracts |
| Entry | Single `app.css` tree | Multi-import layout | One chokepoint |
| DX | `ui/` primitives | Raw utilities everywhere | Token discipline |

## Data Flow

```
vite plugin ← astro.config
app.css → tailwind + theme/base/components/utilities
Build scans .astro/.tsx/.ts → utilities | Browser: partials match island classes | ui/* → utilities only
ClientRouter → UA transitions + motion-reduce CSS
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `package.json` | Modify | `tailwindcss`, `@tailwindcss/vite` (pin in apply). |
| `astro.config.mjs` | Modify | `tailwindcss()` in `vite.plugins`; keep proxy/redirects/integrations. |
| `src/layouts/BaseLayout.astro` | Modify | Import `app.css`. |
| `src/styles/app.css` | Create | Entry imports (order per exploration). |
| `src/styles/theme.css` | Create | `@theme` + `:root` legacy aliases. |
| `src/styles/base.css` | Create | Base layer: continuity + focus-visible + **motion reduce**. |
| `src/styles/components.css` | Create | `@import` partials. |
| `src/styles/components/{booking-flow,cookie-consent,legal-prose,shell,hero-marketing}.css` | Create | Split from `global.css`; booking includes **grecaptcha-badge**. |
| `src/styles/utilities.css` | Create | Minimal `@utility` only if needed. |
| `src/styles/global.css`, `tokens.css` | Delete | After migration into split/theme. |
| `src/components/ui/*.astro` | Create | Button, Link, Container, Section, Stack, Cluster, Grid, Heading, Eyebrow, Surface/Card, Field, Divider. |
| `README.md` or `src/styles/README.md` | Create/Modify | Index: `app.css` entry + `ui/` purpose. |
| `docs/stack-and-deployment-context.md` | Modify | See § Docs touchpoints. |

## Interfaces / Contracts

- **Tokens:** Semantic colors + brand neutrals/champagne; fluid `clamp` in `@theme`; spacing, radii, shadows, **`--duration-*`**, **`--ease-*`**, **`--z-*`**. Hex only inside `@theme`.
- **Primitives:** Optional **`class`** merge; **Button** `variant`/`size`/`disabled`; **Link** `href` + external attrs; layout props on **Container/Section/Stack/Cluster/Grid**; **Heading** `level`; **Field** label/for/errors; **Surface** variant; tokenized **focus-visible**.

## Testing Strategy

| Layer | What | Approach |
|-------|------|----------|
| Types/build | Astro+TS, static | `npm run check`, `npm run build` |
| Regression | Booking/cookies/legal | Manual: modal, keyboard, RGPD banner, legal prose |
| Motion | a11y | OS **prefers-reduced-motion** dulls/disables CSS motion |

## Migration / Rollout

Deps + plugin → **`theme.css`** (aliases) → partials from **`global.css`** → **`app.css`** + layout → delete **`global.css`/`tokens.css`** → add **`ui/`** → smoke verified flows. Rollback: proposal path (restore CSS entry + strip Tailwind).

## Docs touchpoints (`docs/stack-and-deployment-context.md`)

**§ Target Stack Summary**, bullet **UI:** (~**L6–7**): add **Tailwind v4 CSS-first** (`@import "tailwindcss"`, `@theme` under `src/styles/`). Optional: **§ Why / Maintainability** (~**L15**) — half-sentence that tokens live in `@theme` partials.

## Open Questions

- [ ] Serif editorial + FOUT/weight if ever in scope.
- [ ] **`view-transition-name`** naming per IA key when pages ship (exploration R8).
- [ ] Lint/block arbitrary palette literals post-adoption.
