import type { Locale as AppLocale } from './config';

export type Locale = AppLocale;

interface TrustSeoContent {
	title: string;
	description: string;
}

interface TrustHeroContent {
	eyebrow: string;
	h1: string;
	lead: string;
	imageSrc: string;
	imageAlt: string;
}

interface TrustMeaningContent {
	title: string;
	body: string[];
}

interface TrustProtocolStep {
	title: string;
	body: string;
}

interface TrustConsultationPillar {
	icon: string;
	title: string;
	body: string;
}

export interface TrustPageContent {
	seo: TrustSeoContent;
	hero: TrustHeroContent;
	meaning: TrustMeaningContent;
	valuation: {
		title: string;
		body: string;
		eyebrow: string;
		steps: TrustProtocolStep[];
	};
	consultation: {
		title: string;
		imageSrc: string;
		imageAlt: string;
		badge: string;
		pillars: TrustConsultationPillar[];
	};
	finalCta: {
		eyebrow: string;
		h2: string;
		primary: string;
		secondary: string;
	};
}

const spanishTrustPageContent: TrustPageContent = {
	seo: {
		title: 'Criterio médico | AJ Clínica',
		description:
			'Entendemos la estética como una extensión de la salud. Cada intervención nace de un análisis riguroso y una visión artística equilibrada.',
	},
	hero: {
		eyebrow: 'Excelencia Médica',
		h1: 'Criterio médico para cuidar, preservar y mejorar.',
		lead:
			'Entendemos la estética como una extensión de la salud. Cada intervención nace de un análisis riguroso y una visión artística equilibrada.',
		imageSrc: '/images/home/clinic-primary.webp',
		imageAlt:
			'Vista interior de una clínica de medicina estética de lujo con acabados de microcemento, iluminación indirecta cálida y un ambiente sereno que invita a la calma y la confianza profesional.',
	},
	meaning: {
		title: '"Qué significa tratar con criterio médico"',
		body: [
			'No se trata solo de aplicar una técnica, sino de saber cuándo no aplicarla. El criterio médico es el filtro invisible que separa la tendencia del bienestar a largo plazo.',
			'En AJ Clínica, cada paciente es un caso clínico único que requiere una mirada integradora, honesta y fundamentada en la evidencia científica.',
		],
	},
	valuation: {
		title: 'El camino hacia su mejor versión',
		body:
			'Nuestro protocolo de valoración está diseñado para garantizar resultados naturales y, sobre todo, seguros.',
		eyebrow: 'PROTOCOLO AJ',
		steps: [
			{
				title: 'Escucha',
				body: 'Dedicamos el tiempo necesario para comprender sus inquietudes y expectativas reales.',
			},
			{
				title: 'Valoración',
				body: 'Examen clínico detallado de la arquitectura facial, calidad de piel o salud capilar.',
			},
			{
				title: 'Priorización',
				body: 'Definimos qué intervenciones aportarán mayor impacto con la mínima invasión.',
			},
			{
				title: 'Plan',
				body: 'Hoja de ruta personalizada con tiempos, resultados esperados y cuidados post-tratamiento.',
			},
		],
	},
	consultation: {
		title: 'Nuestros pilares de confianza',
		imageSrc: '/images/home/clinic-secondary.webp',
		imageAlt:
			'Retrato en primer plano de un profesional médico transmitiendo serenidad y confianza, con un fondo de consultorio minimalista y luz suave lateral, enfatizando la cercanía y la honestidad profesional.',
		badge: 'COMPROMISO DE HONESTIDAD MÉDICA',
		pillars: [
			{
				icon: 'ph-clock',
				title: 'Tiempo de Calidad',
				body:
					'No creemos en las consultas rápidas. Cada paciente recibe la dedicación necesaria para resolver dudas y sentirse en calma.',
			},
			{
				icon: 'ph-eye',
				title: 'Claridad Absoluta',
				body:
					'Explicamos detalladamente cada tratamiento, sus beneficios y sus limitaciones. La información es el primer paso del cuidado.',
			},
			{
				icon: 'ph-first-aid-kit',
				title: 'Ética Profesional',
				body:
					'Solo recomendamos tratamientos que realmente benefician al paciente, priorizando siempre la salud frente a la comercialización.',
			},
		],
	},
	finalCta: {
		eyebrow: 'PRIMER PASO',
		h2: 'Comience hoy su transformación con una valoración honesta.',
		primary: 'Solicitar valoración',
		secondary: 'Nuestros Tratamientos',
	},
};

export const trustPageContent: Record<Locale, TrustPageContent> = {
	es: spanishTrustPageContent,
	en: spanishTrustPageContent,
	ca: spanishTrustPageContent,
	fr: spanishTrustPageContent,
};
