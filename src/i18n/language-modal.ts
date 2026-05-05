import type { Locale } from './config';

export type LanguageModalCopy = {
	modalTitle: string;
	tabLabel: string;
	suggestedHeading: string;
	allHeading: string;
	closeLabel: string;
};

export const languageModalCopy: Record<Locale, LanguageModalCopy> = {
	es: {
		modalTitle: 'Idioma y región',
		tabLabel: 'Idioma y región',
		suggestedHeading: 'Sugeridos',
		allHeading: 'Todos los idiomas',
		closeLabel: 'Cerrar',
	},
	en: {
		modalTitle: 'Language and region',
		tabLabel: 'Language and region',
		suggestedHeading: 'Suggested',
		allHeading: 'All languages',
		closeLabel: 'Close',
	},
	ca: {
		modalTitle: 'Idioma i regió',
		tabLabel: 'Idioma i regió',
		suggestedHeading: 'Sugerits',
		allHeading: 'Tots els idiomes',
		closeLabel: 'Tancar',
	},
	fr: {
		modalTitle: 'Langue et région',
		tabLabel: 'Langue et région',
		suggestedHeading: 'Suggérés',
		allHeading: 'Toutes les langues',
		closeLabel: 'Fermer',
	},
};
