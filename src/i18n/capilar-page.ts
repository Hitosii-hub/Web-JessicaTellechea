import type { Locale as AppLocale } from './config';

export type Locale = AppLocale;

interface CapilarSeoContent {
	title: string;
	description: string;
}

interface CapilarHeroContent {
	eyebrow: string;
	h1: string;
	lead: string;
	primaryCta: string;
	imageSrc: string;
	imageAlt: string;
}

interface CapilarTextBlock {
	eyebrow: string;
	title: string;
	body: string[];
	imageSrc: string;
	imageAlt: string;
}

interface CapilarBenefit {
	title: string;
	body: string;
}

interface CapilarTreatment {
	title: string;
	body: string;
}

interface CapilarProcessStep {
	title: string;
	body: string;
}

interface CapilarAuthorityItem {
	icon: string;
	title: string;
	body: string;
}

export interface CapilarPageContent {
	seo: CapilarSeoContent;
	hero: CapilarHeroContent;
	identification: { quote: string; author: string };
	diagnosis: CapilarTextBlock;
	benefits: CapilarBenefit[];
	treatments: { title: string; items: CapilarTreatment[] };
	process: { title: string; steps: CapilarProcessStep[] };
	authority: { title: string; imageSrc: string; imageAlt: string; items: CapilarAuthorityItem[] };
	finalCta: { h2: string; body: string; primary: string };
}

const spanishCapilarPageContent: CapilarPageContent = {
	seo: {
		title: 'Tratamiento capilar en Barcelona | AJ Clínica',
		description:
			'Recuperar el control sobre tu cabello es el primer paso para reencontrarte con tu imagen más auténtica.',
	},
	hero: {
		eyebrow: 'Medicina de Vanguardia',
		h1: 'Tratamiento capilar médico.',
		lead:
			'Recuperar el control sobre tu cabello es el primer paso para reencontrarte con tu imagen más auténtica.',
		primaryCta: 'Solicitar diagnostico capilar',
		imageSrc: '/images/home/treatment-capilar.webp',
		imageAlt: 'Vista elegante de clínica capilar',
	},
	identification: {
		quote:
			'"El cabello forma parte de la identidad. Su cuidado no es solo estética, es una declaración de salud y equilibrio personal."',
		author: '— AJ Clínica Estética',
	},
	diagnosis: {
		eyebrow: 'Personalización Absoluta',
		title: 'Cada caso requiere diagnóstico y seguimiento.',
		body: [
			'En AJ Clínica, entendemos que la alopecia o el debilitamiento capilar no son procesos genéricos. Nuestro enfoque médico comienza con una tricoscopia digital avanzada para analizar el cuero cabelludo desde la raíz.',
			'Analizamos factores hormonales, nutricionales y ambientales para diseñar un plan de tratamiento que evolucione contigo. El seguimiento médico constante garantiza que los resultados sean visibles, naturales y duraderos.',
		],
		imageSrc: '/images/home/capillary.webp',
		imageAlt: 'Diagnóstico médico capilar detallado',
	},
	benefits: [
		{
			title: 'Control Caída',
			body: 'Frenamos la fase telógena de forma efectiva mediante protocolos médicos validados.',
		},
		{
			title: 'Densidad',
			body: 'Incrementamos el diámetro del tallo piloso para una apariencia más voluminosa.',
		},
		{
			title: 'Bioestimulación',
			body: 'Activamos los folículos en reposo potenciando la regeneración celular natural.',
		},
		{
			title: 'Salud Cuero',
			body: 'Equilibramos el ecosistema capilar eliminando inflamación y micro-irritaciones.',
		},
		{
			title: 'Confianza',
			body: 'Resultados medibles que impactan directamente en tu bienestar psicológico.',
		},
	],
	treatments: {
		title: 'Nuestros protocolos clínicos.',
		items: [
			{
				title: 'Mesoterapia Capilar Médica',
				body:
					'Infiltración directa de péptidos, vitaminas y fármacos antiandrógenos para nutrir el folículo desde el interior.',
			},
			{
				title: 'PRP Capilar (Plasma Rico en Plaquetas)',
				body:
					'Utilización de los factores de crecimiento propios del paciente para regenerar tejidos y potenciar la vascularización.',
			},
			{
				title: 'Carboxiterapia Foliar',
				body: 'Mejora de la microcirculación mediante la aplicación de CO2 medicinal, facilitando la llegada de nutrientes.',
			},
		],
	},
	process: {
		title: 'La Experiencia AJ',
		steps: [
			{
				title: 'Consulta Inicial',
				body: 'Análisis exhaustivo de historial y expectativas con nuestro equipo médico.',
			},
			{
				title: 'Diseño de Plan',
				body: 'Creación de una ruta terapéutica personalizada basada en evidencias.',
			},
			{
				title: 'Tratamiento',
				body: 'Sesiones clínicas realizadas en un entorno de máxima relajación y asepsia.',
			},
			{
				title: 'Seguimiento',
				body: 'Revisiones periódicas para ajustar el protocolo y documentar la evolución.',
			},
		],
	},
	authority: {
		title: 'Compromiso con la Excelencia',
		imageSrc: '/images/home/clinic-primary.webp',
		imageAlt: 'Profesional médico en entorno clínico premium',
		items: [
			{
				icon: 'ph-shield-check',
				title: 'Rigurosidad Científica',
				body: 'Solo empleamos fármacos y técnicas con respaldo de estudios clínicos internacionales.',
			},
			{
				icon: 'ph-first-aid-kit',
				title: 'Tecnología de Punta',
				body: 'Inversión constante en aparatología de última generación para diagnósticos precisos.',
			},
			{
				icon: 'ph-leaf',
				title: 'Atención Humana',
				body: 'Entendemos el impacto emocional del cabello y ofrecemos un acompañamiento empático.',
			},
		],
	},
	finalCta: {
		h2: 'Comienza hoy tu transformación.',
		body: 'Reserva tu primera consulta diagnóstica y descubre el potencial de tu salud capilar.',
		primary: 'Agendar Cita Médica',
	},
};

export const capilarPageContent: Record<Locale, CapilarPageContent> = {
	es: spanishCapilarPageContent,
	en: spanishCapilarPageContent,
	ca: spanishCapilarPageContent,
	fr: spanishCapilarPageContent,
};
