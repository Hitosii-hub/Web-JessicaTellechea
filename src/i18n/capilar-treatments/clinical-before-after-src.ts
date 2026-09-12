import type { Locale } from '../config';

/** Shared clinical before/after pairs (meso folder; reused across capilar treatments). */
export const clinicalBeforeAfterSrc = [
	{
		before: '/images/capilar/meso/before-after-before.jpg',
		after: '/images/capilar/meso/before-after-after.jpg',
	},
	{
		before: '/images/capilar/meso/before-after-before-1.jpg',
		after: '/images/capilar/meso/before-after-after-1.jpg',
	},
	{
		before: '/images/capilar/meso/before-after-before-2.jpg',
		after: '/images/capilar/meso/before-after-after-2.jpg',
	},
] as const;

export const clinicalResultsDisclaimer: Record<Locale, string> = {
	es: 'Algunos resultados corresponden a protocolos capilares combinados.',
	en: 'Some results reflect combined capillary treatment protocols.',
	ca: 'Alguns resultats corresponen a protocols capil·lars combinats.',
	fr: 'Certains résultats correspondent à des protocoles capillaires combinés.',
};
