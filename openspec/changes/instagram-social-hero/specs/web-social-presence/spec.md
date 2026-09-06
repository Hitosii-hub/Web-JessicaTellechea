# Web social presence

**Status:** New capability (change `instagram-social-hero`).  
**Implementation:** `src/i18n/clinic-links.ts`, `BaseLayout.astro`, `HomeHero.astro`, footer/hero CSS.

## Normative keywords

Requirements use RFC 2119 terms: **SHALL** (mandatory), **SHOULD** (recommended), **MAY** (optional).

---

## Requirements

### Requirement: Instagram URL resolution

The system SHALL resolve the clinic Instagram profile URL at build time from `PUBLIC_CLINIC_INSTAGRAM` when set and non-empty. When unset or empty, the system SHALL fall back to `https://www.instagram.com/dra.jessicatellechea/`.

#### Scenario: Env configured

- GIVEN `PUBLIC_CLINIC_INSTAGRAM` is set to a valid HTTPS URL at build time
- WHEN any Instagram link is rendered
- THEN the anchor `href` SHALL equal that URL

#### Scenario: Env missing

- GIVEN `PUBLIC_CLINIC_INSTAGRAM` is unset or empty at build time
- WHEN any Instagram link is rendered
- THEN the anchor `href` SHALL equal `https://www.instagram.com/dra.jessicatellechea/`

### Requirement: Footer social link (Instagram only)

The site footer on every locale SHALL include exactly one social link: Instagram. The link SHALL be an accessible anchor with visible or iconographic affordance, styled consistently with silent-luxury footer typography (discrete, not competing with legal links or studio credit).

#### Scenario: Footer on Spanish home

- GIVEN any page using `BaseLayout`
- WHEN the footer renders for locale `es`
- THEN exactly one Instagram link SHALL appear in a social navigation region
- AND the link SHALL open the resolved Instagram URL in a new browsing context with `rel="noopener noreferrer"`

#### Scenario: Footer parity across locales

- GIVEN pages in `en`, `ca`, and `fr`
- WHEN the footer renders
- THEN the Instagram link SHALL be present with locale-appropriate accessible name (may display “Instagram” in all locales)

### Requirement: Home hero banner imagery

The marketing home hero SHALL use responsive banner photography of the doctor: a **19:9** asset for viewports ≥900px and a **4:3** asset for viewports below 900px. Images SHALL be served from static assets under `public/images/home/` (or equivalent Astro static pipeline).

#### Scenario: Desktop viewport

- GIVEN viewport width ≥900px
- WHEN the home hero renders
- THEN the hero media SHALL use the desktop (19:9) banner asset

#### Scenario: Mobile viewport

- GIVEN viewport width <900px
- WHEN the home hero renders
- THEN the hero media SHALL use the mobile (4:3) banner asset

### Requirement: Home hero Instagram affordance

The home hero SHALL include an editorial Instagram link below the primary and secondary CTAs. It SHALL NOT replace or visually dominate the valuation/booking primary CTA. The affordance SHALL use project tokens, Phosphor iconography where icons are used, and maintain text legibility over photography via overlay/positioning.

#### Scenario: Hero Instagram link

- GIVEN the home page in any locale
- WHEN the hero section renders
- THEN an Instagram link SHALL appear in the hero actions area
- AND it SHALL target the resolved Instagram URL with `target="_blank"` and `rel="noopener noreferrer"`

#### Scenario: Conversion hierarchy preserved

- GIVEN the home hero
- WHEN rendered
- THEN the primary CTA (valuation/booking path per site policy) SHALL remain visually dominant relative to the Instagram affordance

### Requirement: External social link security

All Instagram anchors pointing off-site SHALL include `target="_blank"` and `rel="noopener noreferrer"`.

#### Scenario: New tab for Instagram

- GIVEN any Instagram anchor on the public site
- WHEN inspected in static HTML
- THEN `target="_blank"` and `rel="noopener noreferrer"` SHALL be present

### Requirement: Build integrity

After implementation, `npm run check` and `npm run build` SHALL exit with code 0.

#### Scenario: CI gates

- GIVEN dependencies installed
- WHEN `npm run check` and `npm run build` run
- THEN both SHALL succeed
