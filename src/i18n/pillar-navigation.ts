import type { Locale } from './config';

/** Shared in-page anchor for pillar treatment / services sections. */
export const PILLAR_TREATMENTS_SECTION_ID = 'tratamientos-medicos';

export const pillarTreatmentsLinkLabel: Record<Locale, string> = {
	es: 'Ver tratamientos médicos',
	en: 'View medical treatments',
	ca: 'Veure tractaments mèdics',
	fr: 'Voir les traitements médicaux',
};

export const pillarJumpNavAriaLabel: Record<Locale, string> = {
	es: 'Secciones del pilar',
	en: 'Pillar sections',
	ca: 'Seccions del pilar',
	fr: 'Sections du pilier',
};

const jumpItemLabels = {
	approach: {
		es: 'Enfoque',
		en: 'Approach',
		ca: 'Enfocament',
		fr: 'Approche',
	},
	process: {
		es: 'Proceso',
		en: 'Process',
		ca: 'Procés',
		fr: 'Processus',
	},
} as const satisfies Record<string, Record<Locale, string>>;

export const pillarJumpSectionIds = {
	approach: 'enfoque',
	treatments: PILLAR_TREATMENTS_SECTION_ID,
	process: 'proceso',
	valuation: 'valoracion',
} as const;

export type PillarJumpLink = { id: string; label: string };

export function pillarJumpLinks(lang: Locale): PillarJumpLink[] {
	return [
		{ id: pillarJumpSectionIds.approach, label: jumpItemLabels.approach[lang] },
		{ id: pillarJumpSectionIds.treatments, label: pillarTreatmentsLinkLabel[lang] },
		{ id: pillarJumpSectionIds.process, label: jumpItemLabels.process[lang] },
	];
}
