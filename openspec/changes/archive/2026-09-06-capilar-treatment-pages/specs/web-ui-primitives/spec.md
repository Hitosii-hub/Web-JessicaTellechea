# Delta for Web UI primitives

## ADDED Requirements

### Requirement: Accessible disclosure blocks for treatment pages

Treatment FAQ and precautions sections SHALL use native `<details>`/`<summary>` or equivalent accessible disclosure with visible focus, keyboard activation, and `aria-expanded` semantics if implemented via island.

#### Scenario: Precautions disclosure a11y

- GIVEN collapsed precautions block
- WHEN keyboard user activates summary
- THEN panel SHALL open
- AND summary SHALL remain operable to collapse

## MODIFIED Requirements

None.

## REMOVED Requirements

None.
