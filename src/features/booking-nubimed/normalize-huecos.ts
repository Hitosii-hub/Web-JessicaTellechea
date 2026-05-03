import type { Slot } from './types';

function dedupeStrings(xs: string[]): string[] {
	return [...new Set(xs)];
}

function asString(x: unknown): string | undefined {
	return typeof x === 'string' && x.trim() ? x.trim() : undefined;
}

/**
 * Normalize vendor JSON for available days (strings DD/MM/YYYY or YYYY-MM-DD).
 */
export function normalizeDaysJson(data: unknown): string[] {
	const out: string[] = [];
	const push = (s: string | undefined) => {
		if (s) out.push(s);
	};
	if (Array.isArray(data)) {
		for (const item of data) {
			if (typeof item === 'string') push(item);
			else if (item && typeof item === 'object') {
				const o = item as Record<string, unknown>;
				push(asString(o.fecha) ?? asString(o.dia) ?? asString(o.date));
			}
		}
		return dedupeStrings(out);
	}
	if (data && typeof data === 'object') {
		const o = data as Record<string, unknown>;
		for (const key of ['dias_disponibles', 'dias', 'fechas', 'dates', 'dias_disponibles_json']) {
			const nested = o[key];
			if (nested !== undefined && nested !== data) {
				const inner = normalizeDaysJson(nested);
				if (inner.length) return inner;
			}
		}
	}
	return dedupeStrings(out);
}

function collectIds(o: Record<string, unknown>): number[] {
	const keys = [
		'professional_ids',
		'profesional_ids',
		'usuarios',
		'user_ids',
		'medico_ids',
		'medicos',
		'users',
	];
	for (const k of keys) {
		const v = o[k];
		if (Array.isArray(v)) {
			const nums = v.map((x) => (typeof x === 'number' ? x : parseInt(String(x), 10))).filter((n) => !Number.isNaN(n));
			if (nums.length) return nums;
		}
	}
	const single =
		(typeof o.medico_id === 'number' ? o.medico_id : undefined) ??
		(typeof o.user_id === 'number' ? o.user_id : undefined) ??
		(typeof o.profesional_id === 'number' ? o.profesional_id : undefined);
	if (single != null && !Number.isNaN(single)) return [single];
	return [];
}

function parseOneSlot(x: unknown): Slot | null {
	if (!x || typeof x !== 'object') return null;
	const o = x as Record<string, unknown>;
	const hora =
		asString(o.hora) ??
		asString(o.time) ??
		asString(o.start) ??
		asString(o.label) ??
		asString(o.texto);
	const iso = asString(o.iso) ?? asString(o.fecha_hora) ?? asString(o.datetime);
	const professionalIds = collectIds(o);
	const displayLabel = hora ?? iso;
	if (!displayLabel && !iso) return null;
	const primaryIso = iso ?? displayLabel ?? 'unknown';
	return {
		iso: primaryIso,
		professionalIds,
		displayLabel: displayLabel ?? iso,
	};
}

function slotLabelFromIso(iso: string): string {
	const m = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/.exec(iso.trim());
	if (m) return `${m[1]} ${m[2]}`;
	return iso;
}

function parseHuecosSlotTuple(row: unknown): Slot | null {
	if (!Array.isArray(row) || row.length < 2) return null;
	const iso = typeof row[0] === 'string' ? row[0].trim() : '';
	if (!iso) return null;
	const idsRaw = row[1];
	const professionalIds = Array.isArray(idsRaw)
		? idsRaw
				.map((x) => (typeof x === 'number' ? x : parseInt(String(x), 10)))
				.filter((n) => !Number.isNaN(n))
		: [];
	return {
		iso,
		professionalIds,
		displayLabel: slotLabelFromIso(iso),
	};
}

export function normalizeSlotsJson(data: unknown): Slot[] {
	if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0])) {
		return (data as unknown[]).map(parseHuecosSlotTuple).filter((s): s is Slot => s !== null);
	}
	if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'string') {
		return (data as string[])
			.filter((s) => typeof s === 'string' && s.length > 0)
			.map((iso) => ({
				iso,
				professionalIds: [] as number[],
				displayLabel: slotLabelFromIso(iso),
			}));
	}
	let raw: unknown[] = [];
	if (Array.isArray(data)) raw = data;
	else if (data && typeof data === 'object') {
		const o = data as Record<string, unknown>;
		for (const key of ['huecos', 'franjas', 'slots', 'horas', 'disponibilidades']) {
			if (Array.isArray(o[key])) {
				raw = o[key] as unknown[];
				break;
			}
		}
	}
	const slots = raw.map(parseOneSlot).filter((s): s is Slot => s !== null);
	return slots;
}
