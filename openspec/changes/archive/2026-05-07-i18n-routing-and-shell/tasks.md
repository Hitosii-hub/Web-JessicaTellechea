# Tasks: i18n routing and site shell

## Phase 1 Configuration

- [x] 1.1 Add src/i18n/config.ts with allowlisted locales es, en, ca, fr, defaultLocale es, switcher labels.
- [x] 1.2 Set site in astro.config.mjs to placeholder or real domain for absolute hreflang; comment if dev-only.

## Phase 2 Routing

- [x] 2.1 Add src/pages/[lang]/index.astro validating lang and 404 for unknown.
- [x] 2.2 Stub distinct title and visible heading per locale on home.
- [x] 2.3 Root src/pages/index.astro redirects to /es/ per static or SSR constraints.

## Phase 3 Layout and SEO

- [x] 3.1 Layout with html lang, meta, placeholder header/footer, content slot.
- [x] 3.2 Language switcher from config.
- [x] 3.3 hreflang plus x-default on each locale home per spec.

## Phase 4 Verification

- [x] 4.1 Manual smoke: /, /es/, /en/, /ca/, /fr/, invalid locale.
- [x] 4.2 npm run build clean.

## Optional

- [x] O.1 If static export blocks redirect, document host-level or index.html workaround in README.
