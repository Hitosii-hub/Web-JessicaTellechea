import type { SiteLocale } from './types';

export interface SpecialtyCatalogEntry {
	readonly vendorId: 3 | 4 | 5;
	readonly slug: string;
	/** Lowercase tokens for preset matching (slug, aliases, string id). */
	readonly matchKeys: readonly string[];
	/** Obligatorio para `huecos_agenda` (panel Nubimed por clinica). */
	readonly clinicaTratamientoId?: number;
	/** Por defecto `presencial` si el portal lo exige. */
	readonly tipoHorario?: string;
	readonly labels: Record<SiteLocale, string>;
}

/**
 * Single source of truth for vendor specialty ids (REQ-3).
 * Do not duplicate these ids elsewhere as authority.
 */
export const SPECIALTY_CATALOG: readonly SpecialtyCatalogEntry[] = [
	{
		vendorId: 3,
		slug: 'medicina-estetica',
		matchKeys: ['medicina-estetica', 'estetica', 'med-estetica', '3'],
		clinicaTratamientoId: 244529,
		tipoHorario: 'presencial',
		labels: {
			es: 'Medicina estetica',
			en: 'Aesthetic medicine',
			ca: 'Medicina estetica',
			fr: 'Medecine esthetique',
		},
	},
	{
		vendorId: 4,
		slug: 'medicina-capilar',
		matchKeys: ['medicina-capilar', 'capilar', 'hair', '4'],
		// clinica_tratamiento_id: rellenar desde el panel Nubimed (huecos_agenda lo exige).
		tipoHorario: 'presencial',
		labels: {
			es: 'Medicina capilar',
			en: 'Hair medicine',
			ca: 'Medicina capil·lar',
			fr: 'Medecine capillaire',
		},
	},
	{
		vendorId: 5,
		slug: 'medicina-regenerativa',
		matchKeys: ['medicina-regenerativa', 'regenerativa', '5'],
		// clinica_tratamiento_id: rellenar desde el panel Nubimed (huecos_agenda lo exige).
		tipoHorario: 'presencial',
		labels: {
			es: 'Medicina regenerativa',
			en: 'Regenerative medicine',
			ca: 'Medicina regenerativa',
			fr: 'Medecine regenerative',
		},
	},
] as const;

export function catalogEntryBySlugOrId(preset: string): SpecialtyCatalogEntry | undefined {
	const key = preset.trim().toLowerCase();
	if (!key) return undefined;
	const n = Number(key);
	for (const e of SPECIALTY_CATALOG) {
		if (!Number.isNaN(n) && e.vendorId === n) return e;
		if (e.slug === key) return e;
		if (e.matchKeys.includes(key)) return e;
	}
	return undefined;
}

export function labelFor(entry: SpecialtyCatalogEntry, lang: SiteLocale): string {
	return entry.labels[lang];
}

/** Numeric dial codes without +; ISO region for Intl.DisplayNames. */
const PHONE_PREFIX_REGIONS: ReadonlyArray<{ readonly code: string; readonly region: string }> = [
	{ code: '34', region: 'ES' },
	{ code: '33', region: 'FR' },
	{ code: '351', region: 'PT' },
	{ code: '39', region: 'IT' },
	{ code: '44', region: 'GB' },
	{ code: '49', region: 'DE' },
	{ code: '31', region: 'NL' },
	{ code: '32', region: 'BE' },
	{ code: '41', region: 'CH' },
	{ code: '43', region: 'AT' },
	{ code: '30', region: 'GR' },
	{ code: '353', region: 'IE' },
	{ code: '376', region: 'AD' },
	{ code: '212', region: 'MA' },
	{ code: '1', region: 'US' },
	{ code: '52', region: 'MX' },
	{ code: '54', region: 'AR' },
	{ code: '56', region: 'CL' },
	{ code: '57', region: 'CO' },
	{ code: '51', region: 'PE' },
];

function phonePrefixIntlLocale(lang: SiteLocale): string {
	return lang === 'en' ? 'en-GB' : lang;
}

export function phonePrefixSelectOptions(lang: SiteLocale): ReadonlyArray<{ value: string; label: string }> {
	const dn = new Intl.DisplayNames([phonePrefixIntlLocale(lang)], { type: 'region' });
	const mapped = PHONE_PREFIX_REGIONS.map(({ code, region }) => ({
		value: code,
		label: `+${code} \u2014 ${dn.of(region) ?? region}`,
	}));
	return [...mapped].sort((a, b) => {
		if (a.value === '34') return -1;
		if (b.value === '34') return 1;
		return parseInt(a.value, 10) - parseInt(b.value, 10);
	});
}
