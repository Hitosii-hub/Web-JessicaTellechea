import type { Locale } from '../config';
import { locales } from '../config';
import {
	capilarTreatmentKeys,
	segmentFor,
	segmentForCapilarTreatment,
	type CapilarTreatmentKey,
} from '../route-registry';
import { carboxiterapiaCapilarContent } from './carboxiterapia-capilar';
import { mesoterapiaCapilarContent } from './mesoterapia-capilar';
import { prpCapilarContent } from './prp-capilar';
import { transplanteCapilarContent } from './transplante-capilar';
import type { CapilarTreatmentCatalog, TreatmentPageContent } from './types';

export const capilarTreatmentCatalog: CapilarTreatmentCatalog = {
	'mesoterapia-capilar': mesoterapiaCapilarContent,
	'prp-capilar': prpCapilarContent,
	'carboxiterapia-capilar': carboxiterapiaCapilarContent,
	'transplante-capilar': transplanteCapilarContent,
};

export function getCapilarTreatmentContent(
	key: CapilarTreatmentKey,
	locale: Locale,
): TreatmentPageContent {
	return capilarTreatmentCatalog[key][locale];
}

export function allCapilarTreatmentStaticPaths(): {
	lang: Locale;
	segment: string;
	treatment: string;
	key: CapilarTreatmentKey;
}[] {
	const paths: {
		lang: Locale;
		segment: string;
		treatment: string;
		key: CapilarTreatmentKey;
	}[] = [];

	for (const lang of locales) {
		const segment = segmentFor(lang, 'capilar');
		for (const key of capilarTreatmentKeys) {
			paths.push({
				lang,
				segment,
				treatment: segmentForCapilarTreatment(lang, key),
				key,
			});
		}
	}

	return paths;
}
