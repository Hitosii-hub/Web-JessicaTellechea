/**
 * Localized URL segments and href builders (OpenSpec: localized-slugs-nav-conventions).
 * @see openspec/changes/localized-slugs-nav-conventions/specs/web-localized-routing/spec.md
 */
import { locales, type Locale } from './config';

export type IaKey =
	| 'home'
	| 'facial'
	| 'corporal'
	| 'capilar'
	| 'trust'
	| 'blog'
	| 'contact'
	| 'booking';

const segmentMatrix: Record<Exclude<IaKey, 'home'>, Record<Locale, string>> = {
	facial: {
		es: 'medicina-estetica-facial-barcelona',
		en: 'facial-aesthetic-medicine-barcelona',
		ca: 'medicina-estetica-facial-barcelona',
		fr: 'medecine-esthetique-faciale-barcelona',
	},
	corporal: {
		es: 'medicina-estetica-corporal-barcelona',
		en: 'body-aesthetic-medicine-barcelona',
		ca: 'medicina-estetica-corporal-barcelona',
		fr: 'medecine-esthetique-corporelle-barcelona',
	},
	capilar: {
		es: 'tratamiento-capilar-barcelona',
		en: 'hair-treatment-barcelona',
		ca: 'tractament-capillar-barcelona',
		fr: 'traitement-capillaire-barcelona',
	},
	trust: {
		es: 'filosofia-medica',
		en: 'medical-philosophy',
		ca: 'filosofia-medica',
		fr: 'philosophie-medicale',
	},
	blog: { es: 'blog', en: 'blog', ca: 'blog', fr: 'blog' },
	contact: { es: 'contacto', en: 'contact', ca: 'contacte', fr: 'contact' },
	booking: { es: 'reservar-cita', en: 'book-appointment', ca: 'reservar-cita', fr: 'reserver-rendez-vous' },
};

function buildReverse(): Record<Locale, Map<string, IaKey>> {
	const out = {} as Record<Locale, Map<string, IaKey>>;
	for (const loc of locales) {
		const m = new Map<string, IaKey>();
		for (const key of Object.keys(segmentMatrix) as Exclude<IaKey, 'home'>[]) {
			m.set(segmentMatrix[key][loc], key);
		}
		out[loc] = m;
	}
	return out;
}

const reverseByLocale = buildReverse();

export function segmentFor(locale: Locale, key: Exclude<IaKey, 'home'>): string {
	return segmentMatrix[key][locale];
}

export function iaKeyFromPath(locale: Locale, segment: string): IaKey | undefined {
	return reverseByLocale[locale].get(segment);
}

/** Trailing slash matches site `trailingSlash: 'always'`. */
export function href(locale: Locale, key: IaKey): string {
	if (key === 'home') return `/${locale}/`;
	return `/${locale}/${segmentFor(locale, key)}/`;
}

/** Internal stub record keys in page-stubs.ts (Spanish-shaped). */
export type StubRecordKey = 'facial' | 'corporal' | 'capilar' | 'criterio-medico' | 'reservar-cita';

export function stubRecordKeyFromIaKey(key: IaKey): StubRecordKey | null {
	switch (key) {
		case 'facial':
		case 'corporal':
		case 'capilar':
			return key;
		case 'trust':
			return 'criterio-medico';
		case 'booking':
			return 'reservar-cita';
		default:
			return null;
	}
}

export const bookingSegments: string[] = locales.map((l) => segmentFor(l, 'booking'));

export function isBookingPath(pathname: string): boolean {
	const norm = pathname.replace(/\/+$/, '') || '/';
	return bookingSegments.some((seg) => norm.includes(`/${seg}`));
}

/** Blog index and posts live under `/{lang}/blog/…`. */
export function isBlogPath(pathname: string): boolean {
	return /\/blog(\/|$)/.test(pathname.replace(/\/+$/, '') || '/');
}

export const corporalSegments: string[] = locales.map((l) => segmentFor(l, 'corporal'));

export function isCorporalPath(pathname: string): boolean {
	const norm = pathname.replace(/\/+$/, '') || '/';
	return corporalSegments.some((seg) => norm.includes(`/${seg}`));
}

export type CapilarTreatmentKey =
	| 'mesoterapia-capilar'
	| 'prp-capilar'
	| 'carboxiterapia-capilar'
	| 'transplante-capilar';

export const capilarTreatmentKeys: CapilarTreatmentKey[] = [
	'mesoterapia-capilar',
	'prp-capilar',
	'carboxiterapia-capilar',
	'transplante-capilar',
];

const capilarTreatmentSegmentMatrix: Record<CapilarTreatmentKey, Record<Locale, string>> = {
	'mesoterapia-capilar': {
		es: 'mesoterapia-capilar-medica',
		en: 'capillary-mesotherapy',
		ca: 'mesoterapia-capilar-medica',
		fr: 'mesotherapie-capillaire',
	},
	'prp-capilar': {
		es: 'prp-capilar',
		en: 'capillary-prp',
		ca: 'prp-capilar',
		fr: 'prp-capillaire',
	},
	'carboxiterapia-capilar': {
		es: 'carboxiterapia-capilar',
		en: 'capillary-carboxytherapy',
		ca: 'carboxiterapia-capilar',
		fr: 'carboxitherapie-capillaire',
	},
	'transplante-capilar': {
		es: 'transplante-capilar',
		en: 'capillary-hair-transplant',
		ca: 'transplante-capilar',
		fr: 'greffe-capillaire',
	},
};

function buildCapilarTreatmentReverse(): Record<Locale, Map<string, CapilarTreatmentKey>> {
	const out = {} as Record<Locale, Map<string, CapilarTreatmentKey>>;
	for (const loc of locales) {
		const m = new Map<string, CapilarTreatmentKey>();
		for (const key of capilarTreatmentKeys) {
			m.set(capilarTreatmentSegmentMatrix[key][loc], key);
		}
		out[loc] = m;
	}
	return out;
}

const capilarTreatmentReverseByLocale = buildCapilarTreatmentReverse();

export function segmentForCapilarTreatment(locale: Locale, key: CapilarTreatmentKey): string {
	return capilarTreatmentSegmentMatrix[key][locale];
}

export function capilarTreatmentKeyFromSegment(
	locale: Locale,
	segment: string,
): CapilarTreatmentKey | undefined {
	return capilarTreatmentReverseByLocale[locale].get(segment);
}

/** Trailing slash matches site `trailingSlash: 'always'`. */
export function hrefCapilarTreatment(locale: Locale, key: CapilarTreatmentKey): string {
	return `/${locale}/${segmentFor(locale, 'capilar')}/${segmentForCapilarTreatment(locale, key)}/`;
}

export function isCapilarTreatmentPath(pathname: string): CapilarTreatmentKey | undefined {
	const norm = pathname.replace(/\/+$/, '') || '/';
	const parts = norm.split('/').filter(Boolean);
	if (parts.length !== 3) return undefined;
	const locale = parts[0] as Locale;
	if (!locales.includes(locale)) return undefined;
	if (iaKeyFromPath(locale, parts[1]) !== 'capilar') return undefined;
	return capilarTreatmentKeyFromSegment(locale, parts[2]);
}
