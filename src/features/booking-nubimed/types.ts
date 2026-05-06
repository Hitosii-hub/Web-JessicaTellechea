import type { Locale } from '../../i18n/config';

/** Site locale (same as routing); vendor `locale` maps 1:1 per design. */
export type SiteLocale = Locale;

export interface BookingFlowProps {
	lang: SiteLocale;
	/** Query `preset`: slug or numeric vendor id string. */
	presetSpecialtySlug?: string | null;
	/** Optional query preset for future treatment preload (id or key). */
	presetTreatmentId?: string | null;
	/** Dirección textual de la clínica (build-time; preferible pasarla desde Astro para la isla). */
	clinicAddress?: string | null;
}

export interface BootstrapSession {
	csrfToken: string;
	clinicaId: number;
	maxDias: number;
	/** Path starting with `/` for `/new` handoff (relative to vendor origin). */
	newEntryPath: string;
}

export interface Slot {
	/** ISO 8601 when parseable; otherwise vendor time string for display only. */
	iso: string;
	professionalIds: number[];
	/** Human label when `iso` is not a full instant. */
	displayLabel?: string;
}

export type BookingFlowErrorKind =
	| 'network'
	| 'parse'
	| 'invalid_response'
	| 'invalid_preset'
	| 'gate_blocked';

export class BookingFlowError extends Error {
	readonly kind: BookingFlowErrorKind;
	constructor(kind: BookingFlowErrorKind, message: string) {
		super(message);
		this.name = 'BookingFlowError';
		this.kind = kind;
	}
}

export interface SpecialtySelection {
	vendorId: number;
	clinicaTratamientoId?: number;
}
