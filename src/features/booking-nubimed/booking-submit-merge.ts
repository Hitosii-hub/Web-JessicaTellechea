import type { NewUrlSelection } from './build-new-url';
import { buildTrackingInnerQuery } from './build-new-url';
import {
	NUBIMED_PORTAL_SUBMIT_FIXED_FIELDS,
	NUBIMED_SUBMIT_EXCLUDED_INPUT_NAMES,
	nubimedPortalSubmitRuntimeFields,
} from './nubimed-portal-submit-fields';

export type BookingPatientMode = 'new' | 'returning';

export interface NewPatientPayload {
	readonly nombre: string;
	readonly apellidos: string;
	readonly telefonoPrefijo: string;
	readonly telefono: string;
	readonly email: string;
}

export interface ReturningPatientPayload {
	readonly dni: string;
	readonly fechaNacimiento: string;
	readonly email: string;
}

export function buildBookingSubmitBody(params: {
	readonly fieldDefaults: Record<string, string>;
	readonly clinicaId: number;
	readonly sel: NewUrlSelection;
	readonly vendorSpecialtyId: number;
	readonly clinicaTratamientoId: number;
	readonly locale: string;
	readonly mode: BookingPatientMode;
	readonly newPatient?: NewPatientPayload;
	readonly returning?: ReturningPatientPayload;
	readonly recaptchaToken: string;
}): URLSearchParams {
	const {
		fieldDefaults,
		clinicaId,
		sel,
		vendorSpecialtyId,
		clinicaTratamientoId,
		locale,
		mode,
		newPatient,
		returning,
		recaptchaToken,
	} = params;
	const profId = sel.professionalId != null ? String(sel.professionalId) : '';
	const merged: Record<string, string> = { ...fieldDefaults };
	for (const k of NUBIMED_SUBMIT_EXCLUDED_INPUT_NAMES) {
		delete merged[k];
	}

	merged.authenticity_token = fieldDefaults.authenticity_token ?? '';
	merged.paciente_id = fieldDefaults.paciente_id ?? '';
	merged.origen = 'cita_online';
	merged.es_widget = 'false';
	merged.prepago_total = 'false';
	/** Valor sin codificar: `URLSearchParams` aplica el percent-encoding una sola vez. */
	merged.params_tracking = buildTrackingInnerQuery(sel);
	merged.origen_widget = 'true';
	merged.cargar_paso_detalles = 'true';
	merged.pref_hora = sel.prefHoraIso;
	merged.pref_tratamiento = String(sel.prefTratamientoId);
	merged.pref_users_dispo = profId;
	merged.pref_tipo_horario = sel.tipoHorario;
	merged.pref_conceptos = merged.pref_conceptos ?? '';
	merged.pref_fecha_hora_cita = sel.prefHoraIso;
	merged.users_disponibilidad = profId;
	merged.usuario_seleccionado = '';
	merged.clinica_especialidad_id = String(vendorSpecialtyId);
	merged.clinica_tratamiento_id = String(clinicaTratamientoId);
	merged.locale = locale;
	merged.motivo = '';
	merged.motivo_obligatorio = merged.motivo_obligatorio || 'false';
	merged.email_obligatorio = merged.email_obligatorio || 'true';
	merged.dni_obligatorio = merged.dni_obligatorio || 'false';
	merged.fecha_nacimiento_obligatorio = merged.fecha_nacimiento_obligatorio || 'false';
	merged.direccion_obligatoria = merged.direccion_obligatoria || 'false';
	merged.check_condiciones = 'on';
	merged.recaptcha_token = recaptchaToken;

	if (mode === 'new' && newPatient) {
		merged.paciente_nombre = newPatient.nombre.trim();
		merged.paciente_apellidos = newPatient.apellidos.trim();
		merged.paciente_telefono_prefijo = newPatient.telefonoPrefijo.trim();
		merged.paciente_telefono = newPatient.telefono.trim();
		merged.paciente_email = newPatient.email.trim();
		merged.paciente_dni_busqueda = '';
		merged.paciente_fecha_nacimiento_busqueda = '';
	} else if (mode === 'returning' && returning) {
		merged.paciente_dni_busqueda = returning.dni.trim();
		merged.paciente_fecha_nacimiento_busqueda = returning.fechaNacimiento.trim();
		merged.paciente_email = returning.email.trim();
		merged.paciente_nombre = '';
		merged.paciente_apellidos = '';
		merged.paciente_telefono_prefijo = '';
		merged.paciente_telefono = '';
	}

	Object.assign(merged, NUBIMED_PORTAL_SUBMIT_FIXED_FIELDS, nubimedPortalSubmitRuntimeFields(clinicaId));

	const q = new URLSearchParams();
	for (const [k, v] of Object.entries(merged)) {
		q.set(k, v ?? '');
	}
	return q;
}
