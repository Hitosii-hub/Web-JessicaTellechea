# Delta for web-booking-nubimed-client

## MODIFIED Requirements

### REQ-1 Booking route hosts the interactive flow (deferred for release 1)

For each locale, the utility booking page **SHALL** render a static placeholder that surfaces the site's WhatsApp channel as the primary contact path. During release 1 the page **SHALL NOT** mount the client-side interactive module (`BookingFlow`) nor request availability from the vendor. The `noindex` policy and URL matrix requirements in `web-localized-routing` **SHALL** remain unchanged.

(Previously: the page always mounted the interactive booking module. Release 2 restores that behaviour by re-enabling the mount; no requirement of REQ-2..REQ-17 is removed by this delta.)

#### Scenario: User opens booking in a locale (release 1)

- GIVEN a valid booking URL for `es`, `en`, `ca`, or `fr`
- WHEN the page loads
- THEN the placeholder **SHALL** render with a WhatsApp CTA and a secondary contact link
- AND the `BookingFlow` module **SHALL NOT** be mounted
- AND no availability, slot or bootstrap request **SHALL** reach the Nubimed vendor

#### Scenario: Placeholder localisation

- GIVEN the booking URL for any supported locale
- WHEN the placeholder is rendered
- THEN heading, lead, WhatsApp CTA label and secondary link label **SHALL** be in that locale

## ADDED Requirements

### Requirement: Site-wide booking CTAs resolve to WhatsApp during release 1

Every user-facing CTA on the public site that previously linked to `/{lang}/{booking-segment}/` (or to any `bookingUrlWithPreset*` variant) **SHALL** resolve to the site's WhatsApp URL (`https://wa.me/{PUBLIC_WHATSAPP_E164}`) during release 1. When `PUBLIC_WHATSAPP_E164` is missing at build time, the CTA **SHALL** fall back to the localised contact page (`href(lang, 'contact')`). The site **SHALL NOT** generate URLs carrying Nubimed `preset` or `treatment` query parameters during release 1.

#### Scenario: WhatsApp env configured

- GIVEN `PUBLIC_WHATSAPP_E164` is set at build time
- WHEN any header, home or pillar CTA that formerly routed to booking is rendered
- THEN its `href` **SHALL** equal `https://wa.me/{PUBLIC_WHATSAPP_E164}`

#### Scenario: WhatsApp env missing

- GIVEN `PUBLIC_WHATSAPP_E164` is not set at build time
- WHEN any header, home or pillar CTA that formerly routed to booking is rendered
- THEN its `href` **SHALL** equal `href(lang, 'contact')` for the current locale

#### Scenario: No preset URLs in release 1

- GIVEN the static build for any locale
- WHEN outbound anchors on any pillar page are inspected
- THEN no `href` **SHALL** contain a `preset=` or `treatment=` query parameter

### Requirement: WhatsApp CTAs open in a new browser tab

Every anchor whose `href` resolves to `https://wa.me/{PUBLIC_WHATSAPP_E164}` **SHALL** carry `target="_blank"` and `rel="noopener noreferrer"`. Anchors that fall back to the localised contact page (internal route) **SHALL NOT** set `target` — they stay in the same tab.

#### Scenario: External WhatsApp anchor

- GIVEN `PUBLIC_WHATSAPP_E164` is set at build time
- WHEN a booking CTA is rendered
- THEN the anchor **SHALL** include `target="_blank"` and `rel="noopener noreferrer"`

#### Scenario: Internal contact fallback

- GIVEN `PUBLIC_WHATSAPP_E164` is not set at build time
- WHEN a booking CTA is rendered
- THEN the anchor **SHALL NOT** set `target` (opens in the same tab)

## REMOVED Requirements

- None. The interactive flow specification (REQ-2..REQ-17) remains authoritative for release 2. Only REQ-1's runtime binding is deferred for release 1.
