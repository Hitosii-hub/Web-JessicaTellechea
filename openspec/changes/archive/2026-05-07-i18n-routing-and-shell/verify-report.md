# Verify report: i18n routing and site shell

## Automated

- npm run build: OK (/, /es/, /en/, /ca/, /fr/).
- npm run check: OK (0 errors).

## Manual

- Open / and /es/ etc. in browser after npm run preview; confirm language switcher and hreflang in view source.

## Follow-up

- Set astro.config.mjs `site` to production URL before launch.
