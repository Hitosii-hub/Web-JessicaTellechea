import type { Locale } from './config';

export const blogIndexMeta: Record<Locale, { title: string; heading: string; intro: string }> = {
	es: {
		title: 'WebAJ - Blog',
		heading: 'Blog',
		intro:
			'Educacion para pacientes, SEO local y autoridad clinica — tono mas formativo que promocional.',
	},
	en: {
		title: 'WebAJ - Blog',
		heading: 'Blog',
		intro: 'Patient education, local SEO, and clinical credibility—education-first tone.',
	},
	ca: {
		title: 'WebAJ - Blog',
		heading: 'Blog',
		intro: 'Contingut educatiu i support SEO local.',
	},
	fr: {
		title: 'WebAJ - Blog',
		heading: 'Blog',
		intro: 'Education patient et autorite locale — intention editoriale avant promotion.',
	},
};
