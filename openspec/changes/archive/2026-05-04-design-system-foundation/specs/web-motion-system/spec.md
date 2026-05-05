# Delta for web-motion-system

## ADDED Requirements

### Requirement: Motion tokens

The presentation layer SHALL define named durations and easings for transitions and micro-interactions used across marketing surfaces.

#### Scenario: Consistent hover timing

- GIVEN two distinct interactive primitives using default hover transitions on the same page
- WHEN a pointer user hovers each control in sequence
- THEN motion timing SHALL feel consistent (same tokenized duration family unless a primitive documents an intentional exception)

### Requirement: Reduced motion

Where motion is not essential to comprehension, the system SHALL respect `prefers-reduced-motion: reduce` by disabling or substantially reducing non-essential animation.

#### Scenario: Reduced motion honored

- GIVEN a user agent reports reduced motion preference
- WHEN a page with decorative transitions loads
- THEN decorative transitions SHALL not play at full intensity (eliminated or strongly minimized)

### Requirement: No styling-only client runtime for baseline motion

Baseline presentation transitions SHALL NOT require additional JavaScript solely to drive decorative styling effects beyond what the framework already ships for routing transitions.

#### Scenario: Static build suitability

- GIVEN a production static build deployed without Node runtime
- WHEN baseline hover and route transitions run in supported browsers
- THEN decorative styling SHALL not depend on a new client-side styling engine bundle introduced solely for animation

### Requirement: Verified flows remain operable

Motion additions SHALL NOT obscure critical controls in booking, cookie consent, or legal flows; modal layering and focus traps SHALL remain discoverable.

#### Scenario: Booking modal visibility

- GIVEN the booking flow modal opens after an authenticated progression step in the widget
- WHEN modal finishes its entrance transition (if any)
- THEN primary actions inside the modal SHALL remain visible without requiring scroll unless content genuinely overflows

### Requirement: View transitions coexistence

Where client-side route transitions are enabled site-wide, motion tokens SHALL remain compatible with route transitions without forcing duplicate conflicting animations on the same elements by default.

#### Scenario: Navigation without double-flash

- GIVEN client-side navigation between two localized stubs sharing the same shell
- WHEN navigation completes
- THEN the user SHALL not perceive conflicting duplicated transitions on the main landmark container by default beyond documented exceptions
