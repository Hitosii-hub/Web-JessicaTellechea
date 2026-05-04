# Estilos y tokens (`src/styles`)

## Punto de entrada

- `app.css` — Importa Inter (`@fontsource-variable/inter`), Tailwind (`@import "tailwindcss"`), `theme.css`, `base.css`, `components.css`, `utilities.css`.
- El layout global solo debe referenciar `app.css` (ver `src/layouts/BaseLayout.astro`).

## Tokens (`theme.css`)

- Colores de marca y semantic tokens (`--color-*`, `--spacing-*` para Tailwind, aliases `--space-*` para CSS legacy).
- **Sin hex fuera de `theme.css`** en páginas o primitivas (`src/components/ui/`): usar utilidades Tailwind que consuman `@theme` o variables `--*` definidas aquí.

## Capas de componentes (`components/`)

- Estilos de superficies verificadas (booking, cookies RGPD, legal, shell, hero/marketing) viven en parciales bajo `src/styles/components/` e important ordenados desde `components.css` dentro de `@layer components`.

## Primitivas UI

- Ver `src/components/ui/` para `Button`, `Link`, `Container`, etc., usando solo tokens/Tailwind.
- **`Field`:** enlazar el control (`input`, `textarea`) con `for`/`id`. Si hay `hint` u `error`, el caller debe añadir al control `aria-describedby` apuntando a los IDs `{fieldId}-hint` / `{fieldId}-err` cuando correspondan.
