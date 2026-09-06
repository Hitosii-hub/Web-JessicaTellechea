# Design: Instagram social + hero banner editorial

## Technical Approach

Introduce a single clinic-links helper for Instagram URL resolution, add responsive hero photography via `<picture>`, extend `HomeHero.astro` with a tertiary Instagram affordance, and add a minimal footer social nav in `BaseLayout.astro`. Reuse Phosphor icons (already loaded site-wide) and existing footer/hero token patterns—no new islands or env keys beyond `PUBLIC_CLINIC_INSTAGRAM`.

## Architecture Decisions

### Decision: Shared URL helper

**Choice:** `resolveClinicInstagram()` in `src/i18n/clinic-links.ts`  
**Alternatives considered:** Inline `import.meta.env` in each component; hardcode URL  
**Rationale:** Single source; matches `resolveBookingCta` / form-endpoints pattern; testable fallback

### Decision: `<picture>` for hero art direction

**Choice:** `<picture>` with `(min-width: 900px)` source swap in `HomeHero.astro`  
**Alternatives considered:** CSS-only dual backgrounds; single crop for all breakpoints  
**Rationale:** Matches spec 19:9 desktop / 4:3 mobile; better LCP control with `<img fetchpriority="high">`

### Decision: PNG assets in public (v1)

**Choice:** Copy provided PNGs to `public/images/home/home-banner-doctor-{desktop,mobile}.png`  
**Alternatives considered:** WebP conversion in apply; Astro asset pipeline only  
**Rationale:** User-supplied assets ready; optional WebP follow-up if build size warrants

### Decision: Hero Instagram as tertiary text link

**Choice:** Text + icon link styled like `home-hero__cta-secondary` variant (lighter weight)  
**Alternatives considered:** Icon-only; pill button equal to primary CTA  
**Rationale:** Silent luxury; preserves valuation-first hierarchy per product rules

### Decision: Footer icon button

**Choice:** Circular/low-contrast icon link in new `site-footer__social` nav above legal row  
**Alternatives considered:** Text label “Instagram”; footer column with handle  
**Rationale:** Discrete; scales when more networks added later

## Data Flow

```
PUBLIC_CLINIC_INSTAGRAM (.env)
        │
        └─→ clinic-links.ts → resolveClinicInstagram()
                    │
                    ├─→ BaseLayout.astro → footer social nav
                    └─→ HomeHero.astro → hero Instagram link

public/images/home/
  home-banner-doctor-desktop.png ──┐
  home-banner-doctor-mobile.png  ──┴─→ HomeHero <picture>
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `public/images/home/home-banner-doctor-desktop.png` | Create | 19:9 hero (from Downloads) |
| `public/images/home/home-banner-doctor-mobile.png` | Create | 4:3 hero (from Downloads) |
| `src/i18n/clinic-links.ts` | Create | `resolveClinicInstagram()` |
| `src/i18n/home-content.ts` | Modify | Hero Instagram label + a11y string (4 locales) |
| `src/i18n/legal-nav.ts` or `social-nav.ts` | Modify | Footer social aria-label (4 locales) |
| `src/components/home/HomeHero.astro` | Modify | `<picture>`, overlay tweak, Instagram link |
| `src/layouts/BaseLayout.astro` | Modify | Footer social nav |
| `src/styles/components/home-marketing.css` | Modify | Picture fill, position, Instagram link styles |
| `src/styles/components/shell.css` | Modify | Footer social styles |
| `.env.example` | Modify | Official Instagram URL example |

## Interfaces / Contracts

```ts
const DEFAULT_CLINIC_INSTAGRAM = 'https://www.instagram.com/dra.jessicatellechea/';

export function resolveClinicInstagram(): string;
```

Hero markup sketch:

```html
<picture class="home-hero__picture">
  <source media="(min-width: 900px)" srcset="/images/home/home-banner-doctor-desktop.png" />
  <img class="home-hero__image" src="/images/home/home-banner-doctor-mobile.png" alt="" fetchpriority="high" />
</picture>
```

## Testing Strategy

- `npm run check` — types for new helper and i18n keys
- `npm run build` — hero/footer HTML includes Instagram href
- Manual: desktop/mobile hero crop; footer icon; contrast on overlay; link opens profile

## Migration / Rollout

1. Copy banner PNGs into repo.  
2. Set `PUBLIC_CLINIC_INSTAGRAM=https://www.instagram.com/dra.jessicatellechea/` in Cloudflare.  
3. Deploy static build.
