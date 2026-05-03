import { buildNewUrl, type NewUrlSelection } from './build-new-url';
import { BookingFlowError } from './types';
import { normalizeDaysJson, normalizeSlotsJson } from './normalize-huecos';
import type { BootstrapSession, Slot } from './types';

export class GateBlockedError extends Error {
	readonly status: number;
	constructor(status: number, message = 'Gate blocked') {
		super(message);
		this.name = 'GateBlockedError';
		this.status = status;
	}
}

export interface NubimedClientOptions {
	readonly baseUrl: string;
	readonly getClinicaId: () => number;
	readonly getCsrf: () => string | undefined;
}

function joinUrl(base: string, path: string): string {
	const b = base.replace(/\/$/, '');
	const p = path.startsWith('/') ? path : `/${path}`;
	return `${b}${p}`;
}

function assertClinicaId(id: number): void {
	if (!id || Number.isNaN(id)) {
		throw new BookingFlowError('invalid_response', 'Missing clinica id');
	}
}

function commonHeaders(csrf: string | undefined): HeadersInit {
	const h: Record<string, string> = {
		Accept: 'application/json, text/javascript, */*; q=0.01',
		'X-Requested-With': 'XMLHttpRequest',
	};
	if (csrf) h['X-CSRF-Token'] = csrf;
	return h;
}

/** Respuestas habituales de sesión/WAF/antibot: degradar a enlace al portal. */
function throwOnGate(res: Response): void {
	if ([401, 403, 419, 429, 459].includes(res.status)) {
		throw new GateBlockedError(res.status);
	}
}

export function createNubimedClient(opts: NubimedClientOptions) {
	const base = opts.baseUrl.replace(/\/$/, '');

	async function fetchBootstrapHtml(signal: AbortSignal): Promise<string> {
		const id = opts.getClinicaId();
		assertClinicaId(id);
		const url = joinUrl(base, `/clinicas/${id}/cita_peticiones/widget`);
		const res = await fetch(url, {
			signal,
			credentials: 'include',
			headers: {
				Accept: 'text/html,application/xhtml+xml',
				'X-Requested-With': 'XMLHttpRequest',
			},
		});
		throwOnGate(res);
		if (!res.ok) {
			throw new BookingFlowError('network', `Widget HTTP ${res.status}`);
		}
		return res.text();
	}

	function huecosUrl(pathSuffix: string, search: URLSearchParams): string {
		const id = opts.getClinicaId();
		assertClinicaId(id);
		const path = `/clinicas/${id}/cita_peticiones/${pathSuffix}?${search.toString()}`;
		return joinUrl(base, path);
	}

	/** Query string alineada al portal (widget / huecos_agenda). */
	function buildHuecosAgendaParams(p: {
		locale: string;
		especialidadId: number;
		clinicaTratamientoId: number;
		diaSeleccionado: string;
		tipoHorario: string;
	}): URLSearchParams {
		const q = new URLSearchParams();
		q.set('locale', p.locale);
		q.set('role_id', 'undefined');
		q.set('especialidad_id', String(p.especialidadId));
		q.set('dia_seleccionado', p.diaSeleccionado);
		q.set('clinica_tratamiento_id', String(p.clinicaTratamientoId));
		q.set('clinica_mutua_id', '');
		q.set('area_id', '');
		q.set('tipo_horario', p.tipoHorario);
		return q;
	}

	function assertHuecosPayload(data: unknown): void {
		if (Array.isArray(data)) return;
		if (data && typeof data === 'object') {
			const msg = (data as Record<string, unknown>).message;
			if (typeof msg === 'string') {
				throw new BookingFlowError('invalid_response', msg);
			}
		}
	}

	/** Lista de dias: `dia_seleccionado` vacio. */
	async function fetchDaysJson(
		signal: AbortSignal,
		params: {
			locale: string;
			especialidadId: number;
			clinicaTratamientoId: number;
			tipoHorario: string;
		},
	): Promise<unknown> {
		const q = buildHuecosAgendaParams({
			locale: params.locale,
			especialidadId: params.especialidadId,
			clinicaTratamientoId: params.clinicaTratamientoId,
			diaSeleccionado: '',
			tipoHorario: params.tipoHorario,
		});
		const url = huecosUrl('huecos_agenda', q);
		const res = await fetch(url, {
			signal,
			credentials: 'include',
			headers: commonHeaders(opts.getCsrf()),
		});
		throwOnGate(res);
		if (!res.ok) {
			throw new BookingFlowError('network', `Huecos HTTP ${res.status}`);
		}
		const ct = res.headers.get('content-type') ?? '';
		let data: unknown;
		if (!ct.includes('json')) {
			const text = await res.text();
			if (text.length < 20) {
				throw new BookingFlowError('invalid_response', 'Non-JSON huecos response');
			}
			try {
				data = JSON.parse(text) as unknown;
			} catch {
				throw new BookingFlowError('invalid_response', 'Invalid JSON in huecos response');
			}
		} else {
			data = await res.json();
		}
		assertHuecosPayload(data);
		return data;
	}

	/** Franjas del dia (`dia_seleccionado` DD/MM/YYYY). */
	async function fetchSlotsJson(
		signal: AbortSignal,
		params: {
			locale: string;
			especialidadId: number;
			diaDDMMYYYY: string;
			clinicaTratamientoId: number;
			tipoHorario: string;
		},
	): Promise<unknown> {
		const q = buildHuecosAgendaParams({
			locale: params.locale,
			especialidadId: params.especialidadId,
			clinicaTratamientoId: params.clinicaTratamientoId,
			diaSeleccionado: params.diaDDMMYYYY,
			tipoHorario: params.tipoHorario,
		});
		const url = huecosUrl('huecos_agenda', q);
		const res = await fetch(url, {
			signal,
			credentials: 'include',
			headers: commonHeaders(opts.getCsrf()),
		});
		throwOnGate(res);
		if (!res.ok) {
			throw new BookingFlowError('network', `Huecos (slots) HTTP ${res.status}`);
		}
		const data = await res.json();
		assertHuecosPayload(data);
		return data;
	}

	return {
		fetchBootstrapHtml,
		async fetchDayStrings(
			signal: AbortSignal,
			p: { locale: string; especialidadId: number; clinicaTratamientoId: number; tipoHorario: string },
		): Promise<string[]> {
			const json = await fetchDaysJson(signal, p);
			return normalizeDaysJson(json);
		},
		async fetchSlots(
			signal: AbortSignal,
			p: {
				locale: string;
				especialidadId: number;
				diaDDMMYYYY: string;
				clinicaTratamientoId: number;
				tipoHorario: string;
			},
		): Promise<Slot[]> {
			const json = await fetchSlotsJson(signal, p);
			return normalizeSlotsJson(json);
		},

		async fetchNewBookingPageHtml(
			signal: AbortSignal,
			bootstrap: BootstrapSession,
			sel: NewUrlSelection,
		): Promise<string> {
			const url = buildNewUrl(base, bootstrap, sel);
			const res = await fetch(url, {
				signal,
				credentials: 'include',
				headers: {
					Accept: 'text/html,application/xhtml+xml',
					'X-Requested-With': 'XMLHttpRequest',
					...(opts.getCsrf() ? { 'X-CSRF-Token': opts.getCsrf()! } : {}),
				},
			});
			throwOnGate(res);
			if (!res.ok) {
				throw new BookingFlowError('network', `Pagina /new HTTP ${res.status}`);
			}
			return res.text();
		},

		async submitCitaPeticion(
			signal: AbortSignal,
			p: { actionPath: string; body: URLSearchParams },
		): Promise<Response> {
			const path = p.actionPath.startsWith('/') ? p.actionPath : `/${p.actionPath}`;
			const url = joinUrl(base, path);
			const token = p.body.get('authenticity_token') ?? undefined;
			const res = await fetch(url, {
				method: 'POST',
				signal,
				credentials: 'include',
				headers: {
					Accept: 'application/json, text/javascript, */*; q=0.01',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					...commonHeaders(token),
				},
				body: p.body.toString(),
			});
			throwOnGate(res);
			return res;
		},

		resolveBaseUrl(): string {
			return base;
		},
	};
}

export type NubimedClient = ReturnType<typeof createNubimedClient>;
