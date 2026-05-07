import type { Locale as AppLocale } from './config';

export type Locale = AppLocale;

interface FacialSeoContent {
	title: string;
	description: string;
}

interface FacialHeroContent {
	eyebrow: string;
	h1: string;
	subtitle: string;
	lead: string;
	primaryCta: string;
	secondaryCta: string;
	imageSrc: string;
	imageAlt: string;
}

interface FacialInsightContent {
	title: string;
	body: string;
}

interface FacialMedicalApproachContent {
	eyebrow: string;
	title: string;
	body: string[];
	imageSrc: string;
	imageAlt: string;
}

interface FacialBenefitItem {
	icon: string;
	title: string;
	body: string;
}

interface FacialServiceGroup {
	subtitle: string;
	services: string[];
}

interface FacialServiceImage {
	src: string;
	alt: string;
}

interface FacialProcessStep {
	title: string;
	body: string;
}

interface FacialTrustPoint {
	title: string;
	body: string;
}

export interface FacialPageContent {
	seo: FacialSeoContent;
	hero: FacialHeroContent;
	insight: FacialInsightContent;
	medicalApproach: FacialMedicalApproachContent;
	benefits: { title: string; items: FacialBenefitItem[] };
	services: { groups: FacialServiceGroup[]; images: FacialServiceImage[] };
	process: { eyebrow: string; steps: FacialProcessStep[] };
	trust: { points: FacialTrustPoint[] };
	finalCta: { h2: string; primary: string; note: string };
}

const spanishFacialPageContent: FacialPageContent = {
	seo: {
		title: 'Medicina estetica facial en Barcelona | AJ Clinica',
		description:
			'Tratamientos médicos orientados a mejorar la calidad de la piel y la armonía facial de forma natural y progresiva.',
	},
	hero: {
		eyebrow: 'MEDICINA SILENCIOSA',
		h1: 'Medicina estetica facial.',
		subtitle: 'Rejuvenecer sin dejar de ser tu.',
		lead:
			'Tratamientos médicos orientados a mejorar la calidad de la piel y la armonía facial de forma natural y progresiva.',
		primaryCta: 'Solicitar valoración facial',
		secondaryCta: 'Conoce nuestro criterio médico',
		imageSrc: '/images/home/treatment-facial.webp',
		imageAlt: 'Tratamiento facial en AJ Clínica',
	},
	insight: {
		title: 'Quieres verte mejor, manteniendo tu expresión.',
		body:
			'La medicina estética facial en AJ busca acompañar la armonía del rostro con resultados sutiles, progresivos y coherentes con tu identidad. No transformamos, revelamos el mejor estado de tu piel y estructura.',
	},
	medicalApproach: {
		eyebrow: 'RIGOR CIENTÍFICO',
		title: 'Cada tratamiento se define a partir de una valoración.',
		body: [
			'Entendemos el rostro como una unidad dinámica. Por ello, nuestra metodología comienza siempre con una consulta diagnóstica profunda donde evaluamos la calidad tisular, la pérdida de volúmenes y la mímica facial.',
			'Nuestro compromiso es la seguridad médica y la elegancia estética. Utilizamos solo materiales biocompatibles de la más alta gama, aplicados con técnicas de mínima invasión.',
		],
		imageSrc: '/images/home/clinic-primary.webp',
		imageAlt: 'Consulta clínica para valoración facial',
	},
	benefits: {
		title: 'Un enfoque centrado en la salud dérmica',
		items: [
			{
				icon: 'ph-sparkle',
				title: 'Mejora progresiva',
				body: 'Resultados que se asientan suavemente en el tejido.',
			},
			{
				icon: 'ph-star-four',
				title: 'Piel luminosa',
				body: 'Recuperación de la vitalidad y textura natural.',
			},
			{
				icon: 'ph-brain',
				title: 'Criterio médico',
				body: 'Decisiones basadas en la anatomía y ciencia.',
			},
			{
				icon: 'ph-heart',
				title: 'Biocompatibilidad',
				body: 'Materiales seguros y reabsorbibles.',
			},
			{
				icon: 'ph-seal-check',
				title: 'Acompañamiento',
				body: 'Seguimiento constante tras cada sesión.',
			},
		],
	},
	services: {
		groups: [
			{
				subtitle: 'Armonización',
				services: ['Reposición de volúmenes', 'Definición mandibular', 'Proyección de pómulos'],
			},
			{
				subtitle: 'Expresión',
				services: ['Tratamiento de arrugas dinámicas', 'Apertura de la mirada', 'Elevación de cejas'],
			},
			{
				subtitle: 'Calidad de piel',
				services: ['Revitalización celular', 'Hidratación profunda', 'Bioestimulación de colágeno'],
			},
		],
		images: [
			{
				src: '/images/home/treatment-facial.webp',
				alt: 'Facial treatment detail',
			},
			{
				src: '/images/home/clinic-secondary.webp',
				alt: 'Skin texture analysis',
			},
			{
				src: '/images/home/clinic-primary.webp',
				alt: 'Medical aesthetic product',
			},
		],
	},
	process: {
		eyebrow: 'EL CAMINO HACIA TU MEJOR VERSIÓN',
		steps: [
			{
				title: 'Valoración',
				body: 'Escuchamos tus necesidades y realizamos un estudio morfológico completo.',
			},
			{
				title: 'Diagnóstico',
				body: 'Identificamos las causas subyacentes del envejecimiento o desarmonía.',
			},
			{
				title: 'Plan',
				body: 'Diseñamos un cronograma de tratamientos personalizado y equilibrado.',
			},
			{
				title: 'Seguimiento',
				body: 'Acompañamos la evolución para asegurar resultados duraderos y naturales.',
			},
		],
	},
	trust: {
		points: [
			{
				title: 'Resultados naturales',
				body: 'Huimos del aspecto "operado". Buscamos frescura, no cambios radicales.',
			},
			{
				title: 'Seleccionados según el caso',
				body: 'Cada técnica se adapta estrictamente a tu estructura ósea y calidad de piel.',
			},
			{
				title: 'Evolución controlada',
				body: 'Preferimos el "menos es más" y ajustar en sucesivas visitas si es necesario.',
			},
		],
	},
	finalCta: {
		h2: 'Empieza con una valoración facial.',
		primary: 'AGENDAR CITA EN BARCELONA',
		note: 'CONSULTA PERSONALIZADA EN CALLE ARAGÓ, 245',
	},
};

export const facialPageContent: Record<Locale, FacialPageContent> = {
	es: spanishFacialPageContent,
	en: spanishFacialPageContent,
	ca: spanishFacialPageContent,
	fr: spanishFacialPageContent,
};
