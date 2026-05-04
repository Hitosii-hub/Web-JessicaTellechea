# Delta for web-ui-primitives

## ADDED Requirements

### Requirement: Shared Astro primitives

The codebase SHALL provide reusable Astro presentation primitives with stable props covering at minimum: primary and secondary actions (button-like control), text links, width-constrained containers, padded sections, vertical stack and horizontal cluster layouts, responsive grids, hierarchical headings, eyebrow labels, elevated surfaces/cards, labeled fields (input and textarea with hints and errors), and dividers.

#### Scenario: Primary action affordance

- GIVEN a primary button primitive with default props
- WHEN rendered without extra markup hacks
- THEN it SHALL present as the visually dominant action relative to secondary controls on the same surface

### Requirement: Keyboard and focus

All interactive primitives SHALL be focusable or correctly omitted from tab order per HTML semantics, SHALL show a visible focus indicator on keyboard focus, and SHALL honor disabled state without activating actions.

#### Scenario: Keyboard traversal

- GIVEN a stack containing link and button primitives
- WHEN a keyboard user tabs forward through the stack
- THEN focus order SHALL follow DOM order and focused controls SHALL remain visibly indicated

### Requirement: External links

Link primitives used for off-site destinations SHALL include appropriate security-related attributes for external navigation without stripping caller-provided accessible names.

#### Scenario: External navigation hint

- GIVEN a link primitive targeting a different origin than the site
- WHEN rendered
- THEN it SHALL open in a new browsing context only when explicitly requested by the caller and SHALL include `rel` attributes consistent with project security guidance for external targets

### Requirement: Field labeling and errors

Field primitives SHALL associate labels with controls, expose validation errors to assistive technologies when present, and preserve hints without replacing error messaging.

#### Scenario: Error announcement

- GIVEN a field primitive in an error state with message text provided
- WHEN the control receives focus
- THEN the error SHALL be perceivable alongside the control (programmatic association)

### Requirement: Optional class extension

Primitives MAY accept an optional extension hook for additional classes where callers need layout composition, without breaking token-first styling defaults.

#### Scenario: Composer passes spacing utility extension

- GIVEN a caller supplies only spacing-related extension classes that do not redefine prohibited literals
- WHEN the primitive renders
- THEN default variant styling SHALL remain intact unless explicitly overridden by documented primitive props
