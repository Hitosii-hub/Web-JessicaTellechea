# Proposal: Booking Component and Page Redesign

## Intent

Rediseñar el booking para mejorar claridad visual, ritmo de interacción y experiencia mobile-first, manteniendo funcionalidad actual, design system y popup de confirmación existente.

## Scope

### In Scope
- Rediseño visual del stepper (estilos y transiciones).
- Avance automático en Step 1, Step 2 y al elegir hora en Step 3.
- Validación estricta de campos requeridos en Step 4 (New/Returning patient).
- Summary con especialidad, tratamiento, fecha, hora y `PUBLIC_CLINIC_ADDRESS`.
- Parametrización para precarga futura de especialidad y servicio.

### Out of Scope
- Cambios en design tokens o componentes base del design system.
- Rediseño profundo del popup de confirmación.
- Cambios funcionales no descritos (pagos, nuevos endpoints, etc.).
- Renderizado simultáneo de varios steps.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `web-booking-nubimed-client`: UX stepper single-step, auto-advance, calendario hasta 91 días, reglas visuales/selección de disponibilidad y estructura del summary.

## Approach

Refactor incremental del booking island: estado de flujo por step + presentación mobile-first + transiciones con tokens existentes y respeto a `prefers-reduced-motion`. Se conserva contrato con Nubimed y popup actual.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/components/booking/*` | Modified | Stepper, auto-advance y validaciones por paso |
| `src/pages/*/reservar-cita*` | Modified | Integración del rediseño sin cambiar ruta/SEO |
| `src/styles/components/*booking*` | Modified | Estilos y transiciones sin alterar design system |
| `openspec/changes/booking-component-and-page-redesign/specs/*` | New | Delta specs de comportamiento |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Regresiones de flujo | Med | Checklist por paso y pruebas de regresión manual |
| Fricción mobile/desktop | Med | Mobile-first + QA en breakpoints clave |
| Edge-cases de disponibilidad | Low/Med | Mantener contratos y estados de error actuales |

## Rollback Plan

Rollback de los cambios de booking (componentes/estilos) en un único revert de PR/commit, preservando rutas, SEO y popup actual.

## Dependencies

- APIs/contratos actuales de Nubimed.
- `PUBLIC_CLINIC_ADDRESS` definida en todos los entornos.

## Success Criteria

- [ ] El booking renderiza un único step visible en todo momento.
- [ ] Step 1/2 avanzan automáticamente tras selección válida; sin botón Continue.
- [ ] Step 3 avanza automáticamente al seleccionar hora válida.
- [ ] Calendario muestra máximo 91 días; pasado y sin disponibilidad no seleccionables.
- [ ] Step 4 exige campos requeridos para ambos tipos de paciente.
- [ ] El popup actual se mantiene funcional y coherente con design system.
- [ ] Summary incluye especialidad, tratamiento, fecha, hora y `PUBLIC_CLINIC_ADDRESS`.
