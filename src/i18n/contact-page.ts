import type { Locale } from './config';

export const contactPageMeta: Record<
	Locale,
	{ title: string; heading: string; intro: string }
> = {
	es: {
		title: 'WebAJ - Solicitar valoracion',
		heading: 'Solicitar valoracion',
		intro:
			'Cuéntanos tu caso de forma breve. Respondemos en horario comercial según capacidad del equipo (MVP).',
	},
	en: {
		title: 'WebAJ - Request an assessment',
		heading: 'Request an assessment',
		intro: 'Tell us briefly what you need. We reply during business hours (MVP).',
	},
	ca: {
		title: 'WebAJ - Sol·licitar valoracio',
		heading: 'Sol·licitar valoracio',
		intro: 'Expliqueu el cas amb brevetat. Respuesta en horari comercial (MVP).',
	},
	fr: {
		title: 'WebAJ - Demander une evaluation',
		heading: 'Demander une evaluation',
		intro:
			'Decrivez votre demande en quelques lignes. Reponse aux heures ouvrables (MVP).',
	},
};
