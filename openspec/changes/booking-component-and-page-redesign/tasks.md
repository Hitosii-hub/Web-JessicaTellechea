# Tasks: Booking Component and Page Redesign

## Phase 1: Foundation (estado y contratos del stepper)

- [x] 1.1 Modificar `src/features/booking-nubimed/BookingFlow.tsx` para introducir estado de stepper explícito (`specialty`, `treatment`, `datetime`, `details`, `success`) y garantizar render de un único step visible.
- [x] 1.2 Ajustar en `src/features/booking-nubimed/BookingFlow.tsx` la separación de selección (`specialtyId`, `treatmentId`, `dayYmd`, `slotIso`, `professionalId`) para soportar autoavance por step.
- [x] 1.3 Actualizar `src/features/booking-nubimed/horizon.ts` (o util equivalente) para que el límite efectivo de calendario sea 91 días, respetando cap inferior de bootstrap.
- [x] 1.4 Incorporar lectura de `PUBLIC_CLINIC_ADDRESS` en `src/features/booking-nubimed/BookingFlow.tsx` para el summary (sin hardcode).

## Phase 2: Core Flow Implementation (autoavance y validaciones)

- [x] 2.1 Refactorizar `src/features/booking-nubimed/BookingFlow.tsx` para autoavance en Step 1 al seleccionar especialidad válida.
- [x] 2.2 Refactorizar `src/features/booking-nubimed/BookingFlow.tsx` para autoavance en Step 2 al seleccionar tratamiento/servicio válido.
- [x] 2.3 Refactorizar `src/features/booking-nubimed/BookingFlow.tsx` para autoavance en Step 3 al seleccionar hora válida (y profesional cuando aplique).
- [x] 2.4 Eliminar en `src/features/booking-nubimed/BookingFlow.tsx` los botones Continue de Specialty y Treatment; mantener progresión posterior de details/confirm.
- [x] 2.5 Reordenar Date & Time en `src/features/booking-nubimed/BookingFlow.tsx`: calendario primero, slots después de día válido, bloqueo de pasado/no disponibilidad.
- [x] 2.6 Forzar campos requeridos en Step 4 dentro de `src/features/booking-nubimed/BookingFlow.tsx`: New patient (campos actuales) y Returning patient (DNI + Fecha).
- [x] 2.7 Actualizar summary en `src/features/booking-nubimed/BookingFlow.tsx` para mostrar especialidad, tratamiento, fecha separada, hora separada y location por env pública.
- [x] 2.8 Preservar popup actual en `src/features/booking-nubimed/BookingFlow.tsx` (estructura `confirmOpen`) sin rediseño profundo ni cambios de flujo de submit.

## Phase 3: UI/UX Mobile-first (estilos y transiciones)

- [x] 3.1 Modificar `src/styles/components/booking-flow.css` para layout mobile-first por step, con jerarquía visual clara y sin romper tokens/radii/colors existentes.
- [x] 3.2 Añadir/ajustar en `src/styles/components/booking-flow.css` barra de progreso con bullets de step acorde al estado activo.
- [x] 3.3 Ajustar en `src/styles/components/booking-flow.css` estados visuales de calendario (no seleccionable, disponible, activo) usando variables del design system.
- [x] 3.4 Añadir micro-transiciones en `src/styles/components/booking-flow.css` usando `--duration-*`/`--ease-*` existentes y respetando `prefers-reduced-motion`.
- [x] 3.5 Actualizar copy de pasos/labels en `src/features/booking-nubimed/i18n.ts` para reflejar autoavance y estructura final del summary.

## Phase 4: Integration & Regression Verification

- [x] 4.1 Verificar en `src/features/booking-nubimed/BookingFlow.tsx` resets de contexto: cambio de especialidad limpia día/hora/profesional; cambio de día limpia hora/profesional.
- [x] 4.2 Verificar continuidad de contrato con `src/features/booking-nubimed/parse-new-booking-html.ts` y `src/features/booking-nubimed/booking-submit-merge.ts` sin regresiones de submit.
- [x] 4.3 Ejecutar `npm run check` y corregir issues de tipado introducidos por el refactor.
- [x] 4.4 Ejecutar `npm run build` y validar que booking route mantiene comportamiento estático esperado.
- [x] 4.5 Validar manualmente escenarios del spec delta: single-step visible, autoavance, 91 días, required fields, summary con `PUBLIC_CLINIC_ADDRESS`, popup preservado.

## Phase 5: Documentation & Closeout

- [x] 5.1 Actualizar `openspec/changes/booking-component-and-page-redesign/tasks.md` marcando tareas completadas durante implementación (`sdd-apply`).
- [x] 5.2 Registrar decisiones finales de preguntas abiertas (obligatoriedad `retEmail`, mecanismo de precarga de tratamiento) en `openspec/changes/booking-component-and-page-redesign/design.md` o delta spec si cambian requisitos.
