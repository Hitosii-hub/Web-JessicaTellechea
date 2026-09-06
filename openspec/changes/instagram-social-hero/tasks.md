# Tasks: Instagram social + hero banner editorial

## Phase 1: Assets & clinic link helper

- [x] 1.1 Copy `home-banner-doctor-desktop.png` and `home-banner-doctor-mobile.png` from `Downloads` (or session assets) to `public/images/home/`
- [x] 1.2 Create `src/i18n/clinic-links.ts` with `resolveClinicInstagram()` and fallback `https://www.instagram.com/dra.jessicatellechea/`
- [x] 1.3 Update `.env.example`: set `PUBLIC_CLINIC_INSTAGRAM` to the official profile URL

## Phase 2: Home hero

- [x] 2.1 Update `HomeHero.astro`: replace `background.webp` with responsive `<picture>` (desktop ≥900px, mobile <900px)
- [x] 2.2 Adjust `home-marketing.css`: hero media uses `<img>` cover, `object-position` right-center on desktop, gradient overlay for left-aligned copy legibility
- [x] 2.3 Add hero Instagram link in actions row (icon + label); wire `resolveClinicInstagram()`; `target="_blank"` + `rel="noopener noreferrer"`
- [x] 2.4 Add i18n strings in `home-content.ts` for Instagram label and accessible name (`es`, `en`, `ca`, `fr`)

## Phase 3: Footer social

- [x] 3.1 Add footer social nav in `BaseLayout.astro` with single Instagram icon link
- [x] 3.2 Add footer social aria-label strings (4 locales) in i18n module
- [x] 3.3 Style `site-footer__social` in `shell.css` (discrete, aligned with silent-luxury footer)

## Phase 4: Verification

- [x] 4.1 Run `npm run check`
- [x] 4.2 Run `npm run build`; confirm hero uses both banner paths in output HTML
- [x] 4.3 Smoke: footer Instagram on `/es/`; hero link opens profile; primary CTA still dominant; test mobile + desktop crop
