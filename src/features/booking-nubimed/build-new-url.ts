import type { BootstrapSession } from './types';

/** Query for GET .../cita_peticiones/new (Nubimed portal, widget handoff). */
export interface NewUrlSelection {
	readonly specialtyVendorId: number;
	readonly prefTratamientoId: number;
	/** Full ISO instant (same as huecos_agenda slot). */
	readonly prefHoraIso: string;
	readonly professionalId: number | null;
	readonly tipoHorario: string;
}

/**
 * Build full URL for .../cita_peticiones/new handoff (REQ-9, REQ-12; no secrets).
 * Matches live query: especialidad, pref_tratamiento, literal undefined params, etc.
 */
export function buildNewUrl(
	baseUrl: string,
	bootstrap: BootstrapSession,
	sel: NewUrlSelection,
): string {
	const b = baseUrl.replace(/\/$/, '');
	const path = bootstrap.newEntryPath.startsWith('/') ? bootstrap.newEntryPath : `/${bootstrap.newEntryPath}`;
	/** No usar `new URL(path absoluto, base)` con base que lleva prefijo (p. ej. `/__nubimed-proxy`): el path absoluto borra el prefijo y la peticion iria al origen sin proxy. */
	const u = new URL(`${b}${path}`);
	u.searchParams.set('origen', 'widget');
	u.searchParams.set('pref_hora', sel.prefHoraIso);
	if (sel.professionalId != null) {
		u.searchParams.set('pref_users_dispo', String(sel.professionalId));
	}
	u.searchParams.set('especialidad', String(sel.specialtyVendorId));
	u.searchParams.set('area', 'undefined');
	u.searchParams.set('pref_tratamiento', String(sel.prefTratamientoId));
	u.searchParams.set('agenda', 'undefined');
	u.searchParams.set('mutua', 'undefined');
	u.searchParams.set('pref_tipo_horario', sel.tipoHorario);
	u.searchParams.set('prepago_total', 'false');
	u.searchParams.set('pref_conceptos', '');
	return u.href;
}

/** Inner query string for `params_tracking` (unencoded `&` between pairs). */
export function buildTrackingInnerQuery(sel: NewUrlSelection): string {
	const parts: string[] = ['origen=widget', `pref_hora=${sel.prefHoraIso}`];
	if (sel.professionalId != null) {
		parts.push(`pref_users_dispo=${String(sel.professionalId)}`);
	}
	parts.push(`especialidad=${String(sel.specialtyVendorId)}`);
	parts.push('area=undefined');
	parts.push(`pref_tratamiento=${String(sel.prefTratamientoId)}`);
	parts.push('agenda=undefined');
	parts.push('mutua=undefined');
	parts.push(`pref_tipo_horario=${sel.tipoHorario}`);
	parts.push('prepago_total=false');
	parts.push('pref_conceptos=');
	return parts.join('&');
}

/** Value for hidden `params_tracking` (portal encodes the whole inner query once). */
export function buildParamsTrackingValue(sel: NewUrlSelection): string {
	return encodeURIComponent(buildTrackingInnerQuery(sel));
}
