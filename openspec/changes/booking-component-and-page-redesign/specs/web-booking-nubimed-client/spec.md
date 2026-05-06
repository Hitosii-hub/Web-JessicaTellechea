# Delta for web-booking-nubimed-client

## ADDED Requirements

### Requirement: Single-step stepper and automatic progression

The booking module **SHALL** behave as a stepper with exactly one visible step at any time. In Specialty and Treatment steps, the module **SHALL NOT** render “Continue” buttons and **SHALL** advance automatically on valid selection. In Date & Time step, selecting a valid time (and professional when required) **SHALL** advance automatically to Personal Details.

#### Scenario: Specialty to treatment

- GIVEN Specialty step is visible
- WHEN the user selects a valid specialty
- THEN Treatment step **SHALL** become the only visible step

#### Scenario: Time to personal details

- GIVEN Date & Time step with valid day and slots
- WHEN the user selects a valid slot (and professional if required)
- THEN Personal Details step **SHALL** become the only visible step

### Requirement: Date-time interaction and selection rules

Date & Time step **SHALL** show calendar first and times only after valid day selection. Past days and days without availability **SHALL NOT** be selectable. Days with availability **SHOULD** be visually emphasized using existing design-system tokens.

#### Scenario: Disable invalid dates

- GIVEN a past day or no-availability day
- WHEN the user attempts selection
- THEN the day **SHALL NOT** be selectable and no slot list **SHALL** load

#### Scenario: Show slots after day selection

- GIVEN Date & Time step is visible
- WHEN the user selects a valid available day
- THEN time slots for that day **SHALL** be shown

### Requirement: Personal details variants and summary contract

Personal Details **SHALL** provide “New patient” (default) and “Returning patient”. All active-variant fields **SHALL** be required. Returning patient **SHALL** require DNI and Fecha. Appointment summary **SHALL** include specialty, treatment/service, date, time, and location from `PUBLIC_CLINIC_ADDRESS`.

#### Scenario: Returning patient required fields

- GIVEN Returning patient is selected
- WHEN DNI or Fecha is missing
- THEN final submission eligibility **SHALL** remain blocked

#### Scenario: Summary content

- GIVEN a valid booking flow reaches summary
- WHEN summary is rendered
- THEN specialty, treatment, date, time and `PUBLIC_CLINIC_ADDRESS` **SHALL** be displayed

### Requirement: Confirmation popup continuity

The existing confirmation popup **SHALL** be preserved and **SHALL** remain compatible with the current design system in this change.

#### Scenario: Popup remains active

- GIVEN user reaches confirmation stage
- WHEN confirmation is triggered
- THEN the existing popup **SHALL** appear with functional parity

## MODIFIED Requirements

### REQ-6 Time horizon

Selectable future days **SHALL NOT** exceed **91** calendar days from the reference date (e.g. today in clinic timezone, typically `Europe/Madrid`). If vendor bootstrap exposes a smaller maximum, the effective horizon **SHALL** be the **minimum** of 91 and that maximum.  
(Previously: horizon was capped at 61 days.)

#### Scenario: Vendor caps at 30 days

- GIVEN bootstrap indicates 30-day maximum
- WHEN the calendar is built
- THEN the user **SHALL NOT** select a day beyond 30 days from the reference date

### REQ-9 Continue, vendor entry, and final submission

Specialty, Treatment, and Time selection **SHALL** progress automatically on valid choice and **SHALL NOT** require “Continue” buttons for those steps. The system **SHALL NOT** navigate directly to a final vendor URL solely on selection.

After a valid booking context is assembled, the module **SHALL** load vendor booking entry (`GET …/cita_peticiones/new` with selection-consistent query parameters) via configured transport; the user **SHALL** complete required patient and legal steps in the first-party module before final submission. Final booking **SHALL** use **`POST …/cita_peticiones`** with `application/x-www-form-urlencoded` body consistent with vendor form and session.  
(Previously: progression depended on explicit Continue after selection.)

#### Scenario: Happy path completion

- GIVEN valid booking context and required patient/legal data
- WHEN final submission is confirmed
- THEN vendor **SHALL** receive a submission consistent with the selected context

## REMOVED Requirements

- None.
