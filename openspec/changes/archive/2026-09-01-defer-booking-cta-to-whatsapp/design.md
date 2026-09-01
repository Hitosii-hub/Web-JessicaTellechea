# Design: Defer Booking Route and Redirect CTAs to WhatsApp

## Context

Release 1 ships without the Nubimed self-booking flow. Every CTA that today opens the booking page must route to WhatsApp instead. The interactive `BookingFlow` island and its supporting modules stay in the repo so release 2 can restore the flow with a small, revertable diff.

## Architecture Decisions

### AD-1: The booking route renders a static placeholder (not a redirect)

**Decision.** Keep `/{lang}/{booking-segment}/` in `getStaticPaths` and render a lean placeholder that surfaces a WhatsApp CTA plus a secondary contact link. Do **not** use `Astro.redirect` and do **not** add entries to `astro.config.mjs` `redirects`.

**Rationale.**

- External links / print materials that already reference `/reservar-cita/` (or a locale equivalent) land on a coherent page that still converts to WhatsApp.
- The route stays `noindex` via the existing `bookingRoute` branch in `BaseLayout.astro` — no SEO risk.
- A meta-refresh redirect would trade UX (user sees the redirect flash) and analytics clarity for no real gain, since we still want that visitor to reach WhatsApp with one tap.

**Alternatives considered.**

- **Astro-level 301 redirect.** Cleaner in HTTP terms but loses the WhatsApp CTA presentation and forces us to pick a target (contact page vs WhatsApp `wa.me` URL, which most browsers won't 301 to safely).
- **404 the route.** Rejected: breaks inbound links and offers no conversion path.

### AD-2: A single helper resolves the release-1 booking CTA

**Decision.** Add `resolveBookingCtaHref(lang: Locale): string` to `src/i18n/booking-links.ts`. It reads `import.meta.env.PUBLIC_WHATSAPP_E164`, returns `https://wa.me/{trimmed}` if present, otherwise `href(lang, 'contact')`. Every affected CTA imports and calls this helper.

**Rationale.**

- Reuses the exact env pattern already used in `TrustPage.astro`, so we don't invent a second convention.
- Single symbol to swap when release 2 restores the flow: replace the body of `resolveBookingCtaHref` with `href(lang, 'booking')` (or delete it and revert callsites via `git`).
- Keeps `bookingUrlWithPreset` and `bookingUrlWithPresetAndTreatment` exports intact but unreferenced — release 2 wiring can call them again without re-adding code.

### AD-3: Placeholder copy lives next to the existing booking stub

**Decision.** Add a locale record `bookingPlaceholderCta` to `src/i18n/page-stubs.ts`, providing the WhatsApp CTA label and the secondary contact link label per locale. Reuse the existing `pageStubsBySegment['reservar-cita']` for `title`, `heading`, and `lead`.

**Rationale.**

- Colocated with the existing stub payload used by `[lang]/[segment].astro`.
- No new i18n file; matches AGENTS.md guidance ("prefer editing existing files").
- Reactivation in release 2 removes this export cleanly.

### AD-4: `[lang]/[segment].astro` no longer imports `BookingFlow` in release 1

**Decision.** Remove the `BookingFlow` import and its client-island mount from `src/pages/[lang]/[segment].astro`. Also drop the now-dead reads of `preset`, `treatment`, and `clinicAddress` search-params/env. The booking branch renders inline: `<h1>`, `<p>`, primary WhatsApp anchor, secondary contact anchor.

**Rationale.**

- Guarantees no vendor request leaves the browser for the placeholder route (matches REQ-1 delta).
- Keeps `src/features/booking-nubimed/BookingFlow.tsx` and every Nubimed helper on disk, untouched.
- Prevents a dangling unused import that would fail `astro check` under strict TypeScript.

### AD-5: Booking IaKey, slug matrix, sitemap and `noindex` stay

**Decision.** Do not touch `src/i18n/route-registry.ts`, `astro.config.mjs` `bookingUrlSegments`, or the `noindex` gate in `BaseLayout.astro`. The `booking` IaKey remains callable from `href(...)` for future release 2 rewiring, and the sitemap continues to exclude booking segments.

**Rationale.**

- Slug matrix is a spec-level surface (`web-localized-routing`); changing it would require touching `verify-route-registry.mjs`, redirects, and its own spec — out of scope for a release deferral.
- `isBookingPath` on the layout continues to add `noindex, follow`, so we don't accidentally index the placeholder.

## Data / Contract Changes

- `src/i18n/booking-links.ts`: **adds** `resolveBookingCtaHref`. Existing exports untouched.
- `src/i18n/page-stubs.ts`: **adds** `bookingPlaceholderCta: Record<Locale, {whatsapp: string; contact: string}>`.
- `src/pages/[lang]/[segment].astro`: **removes** `BookingFlow` import + mount and unused `preset`/`treatment`/`clinicAddress` reads for the booking branch; renders placeholder anchors instead.
- No changes to specs on disk under `openspec/specs/` (delta lives in this change folder until archive).

## Rollout / Rollback

- Rollout: single PR; static build.
- Rollback: `git revert <sha>` restores every CTA and remounts `BookingFlow`. No env vars added, no data migration.

## Open Questions

- None. Placeholder vs redirect resolved by AD-1.
