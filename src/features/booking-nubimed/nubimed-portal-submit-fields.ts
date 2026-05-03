/**
 * Campos del POST a cita_peticiones que el HTML del portal suele enviar como hidden
 * y que el widget oficial incluye. Si Nubimed cambia defaults, edita solo
 * NUBIMED_PORTAL_SUBMIT_FIXED_FIELDS (y si hace falta resolveNubimedUrlPortalCitaForPost).
 *
 * Referencia: POST 201 del widget oficial (portal.clinicaenlanube.com), mayo 2026.
 */

/** Inputs con name del wizard que no deben ir en el body (botones del asistente). */
export const NUBIMED_SUBMIT_EXCLUDED_INPUT_NAMES: readonly string[] = ['next', 'finish', 'previous'];

/**
 * Valores fijos copiados del payload del widget oficial (mas clinica y url_portal_cita en runtime).
 */
export const NUBIMED_PORTAL_SUBMIT_FIXED_FIELDS: Readonly<Record<string, string>> = {
	maximo_dias: '91',
	clinica_tratamiento_obligatorio: 'false',
	hay_tratamientos: 'true',
	hay_areas: 'false',
	area_seleccionada: '',
	mutua_seleccionada: '',
	hay_mutuas: 'false',
	pmc: '',
	clinica_promocion_id: '',
	mutua_forzada: '',
	hay_mas_de_una_especialidad: 'false',
	lanzar_busqueda_al_iniciar: 'false',
};

/** URL absoluta del GET cita_peticiones/new para el hidden url_portal_cita. */
export function resolveNubimedUrlPortalCitaForPost(clinicaId: number): string {
	const custom = import.meta.env.PUBLIC_NUBIMED_PORTAL_NEW_URL?.trim();
	if (custom) return custom.replace(/\/$/, '');
	const vendor = import.meta.env.PUBLIC_NUBIMED_VENDOR_ORIGIN?.trim().replace(/\/$/, '');
	if (!vendor) return '';
	return `${vendor}/clinicas/${clinicaId}/cita_peticiones/new`;
}

export function nubimedPortalSubmitRuntimeFields(clinicaId: number): Record<string, string> {
	return {
		clinica: String(clinicaId),
		url_portal_cita: resolveNubimedUrlPortalCitaForPost(clinicaId),
	};
}