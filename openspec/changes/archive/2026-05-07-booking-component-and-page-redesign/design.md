# Design: Booking Component and Page Redesign

## Technical Approach

Implementar un refactor incremental sobre `BookingFlow.tsx` manteniendo contratos Nubimed y popup actual. El cambio separa el flujo en steps explícitos (`specialty`, `treatment`, `datetime`, `details`, `success`) con render condicional de un único step visible, avance automático por selección válida y presentación mobile-first en `booking-flow.css` usando tokens existentes.

Referencia de specs: delta `web-booking-nubimed-client` (single-step, auto-advance, horizonte 91 días, summary con `PUBLIC_CLINIC_ADDRESS`).

## Architecture Decisions

| Decisión | Opciones evaluadas | Elección | Rationale |
|---|---|---|---|
| Modelado de pasos | Mantener `phase: pick/details/success` vs stepper explícito | Stepper explícito con subpasos en estado | Evita ramas ambiguas y garantiza “1 step visible” verificable |
| Autoavance | Botón Continue actual vs avance por eventos de selección | Autoavance en specialty/treatment/time | Cumple nuevo UX sin tocar submit/finalización |
| Tratamiento de calendario | Reutilizar utilidades de horizonte vs lógica nueva | Reutilizar `horizon.ts` y ajustar límite a 91 | Menor riesgo funcional y cambio localizado |
| Popup confirmación | Reemplazar modal vs preservar modal actual | Preservar `confirmOpen` + estructura actual | Requisito explícito de alcance y menor riesgo legal/submit |
| Location en summary | Texto hardcodeado vs env pública | `PUBLIC_CLINIC_ADDRESS` desde `import.meta.env` | Contrato estable para contenido y despliegues |

## Data Flow

`BookingFlow` (estado UI)
→ bootstrap Nubimed (`fetchBootstrapHtml`)
→ especialidad seleccionada
→ cargar días (`fetchDayStrings`, horizonte filtrado)
→ seleccionar día
→ cargar slots (`fetchSlots`)
→ seleccionar hora/profesional (autoavance)
→ detalles paciente (validación required)
→ popup confirmación existente
→ submit (`buildBookingSubmitBody` + `submitCitaPeticion`)
→ success

Reglas de reset:
- Cambio de specialty limpia day/slot/professional.
- Cambio de day limpia slot/professional.
- Requests obsoletas se abortan con `AbortController`.

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/features/booking-nubimed/BookingFlow.tsx` | Modify | Introducir estado de stepper explícito, autoavance, summary separado (especialidad/tratamiento/fecha/hora/location) y uso de `PUBLIC_CLINIC_ADDRESS` |
| `src/styles/components/booking-flow.css` | Modify | Reestructuración mobile-first por step, bullets de progreso, estados visuales de disponibilidad y transiciones tokenizadas |
| `src/features/booking-nubimed/horizon.ts` | Modify | Ajustar tope efectivo de 61→91 días (si no está centralizado por config) |
| `src/features/booking-nubimed/i18n.ts` | Modify | Strings para labels de steps, summary y mensajes sin “Continue” en steps 1-2 |
| `src/features/booking-nubimed/booking-submit-merge.ts` | Optional Modify | Verificar required de Returning patient según nuevos campos obligatorios |
| `src/features/booking-nubimed/parse-new-booking-html.ts` | No change | Mantener parser actual para compatibilidad con portal |

## Interfaces / Contracts

```ts
type StepId = 'specialty' | 'treatment' | 'datetime' | 'details' | 'success';

interface BookingSelectionState {
  specialtyId: number | null;
  treatmentId: number | null;
  dayYmd: string | null;
  slotIso: string | null;
  professionalId: number | null;
}
```

```ts
interface BookingSummaryViewModel {
  specialtyLabel: string;
  treatmentLabel: string;
  dateLabel: string;
  timeLabel: string;
  location: string; // PUBLIC_CLINIC_ADDRESS
}
```

Contrato funcional:
- Nunca más de un step renderizado.
- Step 1/2/3 sin botón Continue para progresión.
- Popup de confirmación actual intacto.

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | Transiciones de step y guards required | Tests de funciones puras (selectors/validators) extraídas de `BookingFlow` |
| Integration | Flujo completo con autoavance y reset por cambios de contexto | Pruebas en componente (testing-library preact) con mocks de Nubimed |
| E2E (manual en este repo) | Mobile-first visual + submit con popup preservado | Checklist manual: stepper, 91 días, campos required, summary y submit |

## Migration / Rollout

No migration required. Cambio en feature branch con despliegue estándar. Rollback: revert de archivos de booking y estilos.

## Open Questions

- None.

## Resolved Decisions

- `retEmail` se mantiene opcional en Returning patient para este change; los requeridos normativos siguen siendo DNI + Fecha.
- La precarga futura de tratamiento se implementa vía query param `treatment` desde host page (`[lang]/[segment].astro`) y prop `presetTreatmentId` hacia `BookingFlow`.
