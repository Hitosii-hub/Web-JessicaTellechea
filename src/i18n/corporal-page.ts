import type { Locale as AppLocale } from './config';

export type Locale = AppLocale;

interface CorporalSeoContent {
	title: string;
	description: string;
}

interface CorporalHeroContent {
	eyebrow: string;
	h1: string;
	lead: string;
	primaryCta: string;
	imageSrc: string;
	imageAlt: string;
}

interface CorporalEvaluationStep {
	label: string;
	body: string;
}

interface CorporalBenefit {
	icon: string;
	title: string;
	body: string;
}

interface CorporalTreatment {
	eyebrow: string;
	title: string;
	body?: string;
	services?: string[];
	imageSrc: string;
	imageAlt: string;
	variant?: 'wide' | 'dark';
}

interface CorporalProcessStep {
	marker: string;
	title: string;
	body: string;
}

interface CorporalDifferentiator {
	index: string;
	title: string;
	body: string;
}

export interface CorporalPageContent {
	seo: CorporalSeoContent;
	hero: CorporalHeroContent;
	identification: {
		title: string;
		body: string;
	};
	evaluation: {
		title: string;
		body: string;
		steps: CorporalEvaluationStep[];
		imageSrc: string;
		imageAlt: string;
	};
	benefits: {
		eyebrow: string;
		title: string;
		items: CorporalBenefit[];
	};
	treatments: {
		title: string;
		items: CorporalTreatment[];
	};
	process: {
		eyebrow: string;
		title: string;
		steps: CorporalProcessStep[];
	};
	differentiation: CorporalDifferentiator[];
	finalCta: {
		h2: string;
		body: string;
		primary: string;
		secondary: string;
	};
}

const spanishCorporalPageContent: CorporalPageContent = {
	seo: {
		title: 'Medicina estetica corporal en Barcelona | AJ Clinica',
		description:
			'Mejorar tu cuerpo con criterio, priorizando la salud del tejido y la armonía natural de las formas.',
	},
	hero: {
		eyebrow: 'Barcelona • Silent Luxury',
		h1: 'Medicina estetica corporal',
		lead:
			'Mejorar tu cuerpo con criterio, priorizando la salud del tejido y la armonía natural de las formas.',
		primaryCta: 'Solicitar valoración corporal',
		imageSrc: '/images/home/treatment-corporal.webp',
		imageAlt: 'Medicina Estetica Corporal',
	},
	identification: {
		title: 'Buscas mejorar, con naturalidad y control.',
		body:
			'Entendemos el cuerpo no como un molde que transformar, sino como una estructura orgánica que requiere precisión médica y un sentido estético sofisticado para revelar su mejor versión.',
	},
	evaluation: {
		title: 'Cada protocolo parte de una evaluación corporal.',
		body:
			'Analizamos la arquitectura de tu piel, la densidad del tejido adiposo y la calidad muscular. No existen soluciones universales; diseñamos un mapa de tratamiento que respeta tu fisiología única.',
		steps: [
			{
				label: '01 / Diagnóstico',
				body: 'Ecografía de tejido y análisis postural.',
			},
			{
				label: '02 / Plan',
				body: 'Cronograma de sesiones personalizado.',
			},
		],
		imageSrc: '/images/home/treatment-corporal.webp',
		imageAlt: 'Evaluación Corporal',
	},
	benefits: {
		eyebrow: 'Propósito',
		title: 'La excelencia en la calidad del tejido',
		items: [
			{
				icon: 'ph-shield-check',
				title: 'Firmeza Dérmica',
				body: 'Estimulación profunda de colágeno para recuperar la tensión natural.',
			},
			{
				icon: 'ph-vector-three',
				title: 'Remodelación',
				body: 'Suavizado de contornos y armonización de las curvas corporales.',
			},
			{
				icon: 'ph-leaf',
				title: 'Drenaje Activo',
				body: 'Eliminación de toxinas y mejora de la microcirculación linfática.',
			},
			{
				icon: 'ph-dots-nine',
				title: 'Textura',
				body: 'Piel visiblemente más suave, elástica y unificada.',
			},
			{
				icon: 'ph-flask',
				title: 'Precisión',
				body: 'Protocolos basados en evidencia médica y tecnología avanzada.',
			},
		],
	},
	treatments: {
		title: 'Nuestras áreas de especialización',
		items: [
			{
				eyebrow: 'Firmeza y Tensión',
				title: 'Protocolos de Redensificación',
				services: [
					'Radiofrecuencia Médica de alta intensidad',
					'Bioestimulación de colágeno (Radiesse)',
					'Hilos tensores corporales de nueva generación',
				],
				imageSrc: '/images/home/treatment-corporal.webp',
				imageAlt: 'Tecnología de Firmeza',
				variant: 'wide',
			},
			{
				eyebrow: 'Recuperación',
				title: 'Post-parto y Post-quirúrgico',
				body:
					'Programas integrales para recuperar la elasticidad y compactación del tejido tras cambios volumétricos.',
				imageSrc: '/images/home/clinic-secondary.webp',
				imageAlt: 'Proceso de Recuperación',
			},
			{
				eyebrow: 'Estimulación',
				title: 'Estimulación Muscular de Alta Intensidad',
				body:
					'Mantenimiento de la masa muscular y definición de contornos mediante tecnología electromagnética focalizada.',
				imageSrc: '/images/home/clinic-primary.webp',
				imageAlt: 'Estimulación Muscular',
				variant: 'dark',
			},
		],
	},
	process: {
		eyebrow: 'Metodología',
		title: 'El camino hacia tu mejor versión',
		steps: [
			{
				marker: 'I',
				title: 'Valoración',
				body: 'Entrevista clínica y diagnóstico ecográfico profundo.',
			},
			{
				marker: 'II',
				title: 'Personalización',
				body: 'Ajuste de parámetros tecnológicos según el tejido.',
			},
			{
				marker: 'III',
				title: 'Ejecución',
				body: 'Sesiones en cabina medicalizada de máximo confort.',
			},
			{
				marker: 'IV',
				title: 'Seguimiento',
				body: 'Revisión de resultados y plan de mantenimiento.',
			},
		],
	},
	differentiation: [
		{
			index: '01',
			title: 'Medicina Silenciosa',
			body: 'Buscamos resultados que se sientan, no que se anuncien. Elegancia y discreción absoluta.',
		},
		{
			index: '02',
			title: 'Tecnología de Vanguardia',
			body: 'Inversión constante en aparatología de grado médico certificada internacionalmente.',
		},
		{
			index: '03',
			title: 'Enfoque 360º',
			body: 'Integramos aparatología, inyectables y pautas de estilo de vida para un cambio real.',
		},
	],
	finalCta: {
		h2: '¿Comenzamos tu transformación?',
		body:
			'Reserva una consulta de valoración y descubre cómo la medicina estética corporal puede elevar tu bienestar.',
		primary: 'Pedir Cita Online',
		secondary: 'Contactar vía WhatsApp',
	},
};

export const corporalPageContent: Record<Locale, CorporalPageContent> = {
	es: spanishCorporalPageContent,
	en: spanishCorporalPageContent,
	ca: spanishCorporalPageContent,
	fr: spanishCorporalPageContent,
};
