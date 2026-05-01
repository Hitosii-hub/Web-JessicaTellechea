import type { Locale } from './config';

export type HomeStub = {
	title: string;
	heading: string;
	lead: string;
};

export const homeStubs: Record<Locale, HomeStub> = {
	es: {
		title: 'WebAJ - Inicio',
		heading: 'Clinica estetica y capilar',
		lead: 'Stub de inicio en espanol. Contenido definitivo vendra de docs/ y diseno.',
	},
	en: {
		title: 'WebAJ - Home',
		heading: 'Aesthetic and hair clinic',
		lead: 'English home stub. Final copy will follow docs/ and design.',
	},
	ca: {
		title: 'WebAJ - Inici',
		heading: 'Clinica estetica i capil.lar',
		lead: "Stub d'inici en catala. El contingut final vindra de docs/ i disseny.",
	},
	fr: {
		title: 'WebAJ - Accueil',
		heading: 'Clinique esthetique et capillaire',
		lead: 'Accueil stub en francais. Le contenu definitif suivra docs/ et la charte.',
	},
};
