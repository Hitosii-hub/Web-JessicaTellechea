# Delta for web-design-tokens

## ADDED Requirements

### Requirement: Global presentation tokens

The public site SHALL expose a single coherent token set for color roles, typography scale, spacing, radii, shadows, and z-index layering, usable across all locales without locale-specific token forks.

#### Scenario: Baseline contrast

- GIVEN default theme presentation on a representative marketing stub page
- WHEN body text and interactive text render on their default surfaces
- THEN contrast SHALL meet WCAG 2.1 AA for normal text where tokens define default pairings

### Requirement: Semantic color roles

The token set SHALL include roles for primary text, muted text, page background, elevated surfaces, borders, primary accent, and distinct treatments for focus, disabled, danger, and success states.

#### Scenario: Disabled affordance

- GIVEN a disabled control styled via shared tokens
- WHEN it appears beside its enabled counterpart
- THEN users SHALL perceive non-interactivity without relying solely on color

### Requirement: Legacy variables for verified flows

The system SHALL preserve the CSS custom property names relied upon by existing booking, cookie-consent, and legal prose selectors until those selectors are explicitly migrated under a separate change.

#### Scenario: Booking continuity

- GIVEN the booking utility route with unchanged booking-related class strings on the island
- WHEN styles load in production build output
- THEN booking modal, controls, and notices SHALL remain visually coherent (no missing-variable fallback breaking layout)

### Requirement: Fluid readable typography

The typography tokens SHALL support fluid sizing suitable for editorial headings and long-form body copy.

#### Scenario: Legal prose readability

- GIVEN a legal document page at a narrow viewport
- WHEN body content renders with default typography tokens
- THEN reading SHALL not require horizontal scrolling for primary prose columns

### Requirement: No ad-hoc palette literals by default

Shared authoring surfaces (site primitives and new pages using them) SHALL NOT introduce hexadecimal color literals as the default styling mechanism.

#### Scenario: Primitive styling rule

- GIVEN a new primitive authored through the shared UI kit
- WHEN foreground or background color is applied in markup or styles bundled with that primitive
- THEN authors SHALL reference named tokens rather than raw hexadecimal values
