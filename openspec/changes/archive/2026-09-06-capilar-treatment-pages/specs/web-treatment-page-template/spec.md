# Web treatment page template

## Purpose

Template reutilizable para fichas de tratamiento (v1: capilar), composición editorial silent luxury, conversión valoración-first.

## Requirements

### Requirement: Treatment page block order

The system SHALL render treatment detail pages in order: hero (dual CTA), about (C1), how-it-works (C2), post-care (C3), precautions disclosure (C4), before/after carousel (C5), FAQ accordion (C6).

#### Scenario: Full template on capilar mesotherapy ES

- GIVEN `/es/tratamiento-capilar-barcelona/mesoterapia-capilar-medica/`
- WHEN the page renders
- THEN all seven blocks SHALL appear in order
- AND primary CTA SHALL dominate over secondary trust CTA in hero

### Requirement: Split layouts C1–C3

C1 SHALL place copy+CTA left, image right. C2 SHALL place image left, copy+benefit bullets right. C3 SHALL place copy+essential guides left, image right. Mobile SHALL stack copy before image unless design specifies otherwise.

#### Scenario: Desktop C2 mirror layout

- GIVEN viewport ≥900px on any treatment page
- WHEN C2 renders
- THEN the visual column SHALL appear left of text

### Requirement: Precautions disclosure content

C4 SHALL be centered. One disclosure SHALL expand to three sections: description, exhaustive before list, exhaustive after list (numbered badges 1/2 for before/after).

#### Scenario: Precautions expanded

- GIVEN user activates the precautions trigger
- WHEN content opens
- THEN description, before bullets, and after bullets SHALL all be visible

### Requirement: Before/after carousel

C5 SHALL show up to three compare slots per slide; empty slots MAY render as placeholders. One draggable compare control per populated slot. Prev/next controls below row. Labels ANTES/DESPUÉS per reference.

#### Scenario: Partial gallery

- GIVEN a treatment with one before/after pair
- WHEN C5 renders
- THEN one interactive compare SHALL work
- AND remaining slots MAY show empty placeholder without broken layout

### Requirement: FAQ accordion

C6 SHALL use expandable Q&A; one or more items MAY be open; keyboard operable; heading eyebrow AYUDA + title PREGUNTAS FRECUENTES (localized).

#### Scenario: FAQ keyboard

- GIVEN keyboard focus on a question control
- WHEN user activates it
- THEN answer content SHALL toggle and focus SHALL remain manageable

### Requirement: Image placeholders

Image slots SHALL NOT use missing `src`. Each slot SHALL carry a Recraft prompt in i18n until assets ship; UI SHALL render neutral placeholder with optional dev-only prompt hint.

#### Scenario: No broken images

- GIVEN production build without treatment photos
- WHEN any treatment page builds
- THEN HTML SHALL NOT reference 404 image URLs

### Requirement: Locale parity

All user-visible strings for the template SHALL exist for `es`, `en`, `ca`, `fr`; `es` is editorial source.

#### Scenario: French treatment page

- GIVEN `/fr/traitement-capillaire-barcelona/greffe-capillaire/`
- WHEN rendered
- THEN no empty UI chrome keys SHALL appear
