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

interface FacialFaqItem {
	question: string;
	answer: string;
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
	faq: { title: string; items: FacialFaqItem[] };
	finalCta: { h2: string; primary: string; secondaryBooking: string; secondaryWhatsapp: string; note: string };
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
	faq: {
		title: 'Preguntas frecuentes',
		items: [
			{
				question: 'Cuanto tarda en verse el resultado?',
				answer: 'Depende del tratamiento, pero normalmente vemos mejoras progresivas desde las primeras semanas.',
			},
			{
				question: 'Perdere mi expresion natural?',
				answer: 'No. El plan se diseña para respetar la expresion y evitar resultados artificiales.',
			},
			{
				question: 'Necesitare tiempo de recuperacion?',
				answer: 'La mayoria de protocolos permiten retomar la actividad habitual rapidamente con pautas simples.',
			},
		],
	},
	finalCta: {
		h2: 'Empieza con una valoración facial.',
		primary: 'Solicitar valoracion',
		secondaryBooking: 'Reservar cita',
		secondaryWhatsapp: 'WhatsApp',
		note: 'CONSULTA PERSONALIZADA EN CALLE ARAGÓ, 245',
	},
};

const englishFacialPageContent: FacialPageContent = {
	...spanishFacialPageContent,
	seo: {
		title: 'Facial aesthetic medicine in Barcelona | AJ Clinic',
		description:
			'Medical treatments focused on skin quality and facial harmony with natural, progressive outcomes.',
	},
	hero: {
		...spanishFacialPageContent.hero,
		h1: 'Facial aesthetic medicine.',
		subtitle: 'Rejuvenate while staying yourself.',
		lead:
			'Medical treatments focused on skin quality and facial harmony with natural, progressive outcomes.',
		primaryCta: 'Request facial assessment',
		secondaryCta: 'See our medical criteria',
	},
	faq: {
		title: 'Frequently asked questions',
		items: [
			{
				question: 'How long until I notice results?',
				answer: 'It depends on the protocol, but improvements usually appear progressively from the first weeks.',
			},
			{
				question: 'Will I lose my natural expression?',
				answer: 'No. The plan is designed to preserve expression and avoid artificial results.',
			},
			{
				question: 'Will I need downtime?',
				answer: 'Most protocols allow you to resume normal activity quickly with simple care instructions.',
			},
		],
	},
	finalCta: {
		...spanishFacialPageContent.finalCta,
		h2: 'Start with a facial assessment.',
		primary: 'Request assessment',
		secondaryBooking: 'Book appointment',
		secondaryWhatsapp: 'WhatsApp',
	},
};

const catalanFacialPageContent: FacialPageContent = {
	...spanishFacialPageContent,
	seo: {
		title: 'Medicina estetica facial a Barcelona | AJ Clinica',
		description:
			'Tractaments medics orientats a millorar la qualitat de la pell i l harmonia facial de forma natural i progressiva.',
	},
	hero: {
		...spanishFacialPageContent.hero,
		h1: 'Medicina estetica facial.',
		subtitle: 'Rejoveneix sense deixar de ser tu.',
		lead:
			'Tractaments medics orientats a millorar la qualitat de la pell i l harmonia facial de forma natural i progressiva.',
		primaryCta: 'Sol licitar valoracio facial',
		secondaryCta: 'Coneix el nostre criteri medic',
	},
	faq: {
		title: 'Preguntes frequents',
		items: [
			{
				question: 'Quant tarda a veure s el resultat?',
				answer: 'Depen del tractament, pero normalment es veuen millores progressives des de les primeres setmanes.',
			},
			{
				question: 'Perdre l expressio natural?',
				answer: 'No. El pla es dissenya per respectar l expressio i evitar resultats artificials.',
			},
			{
				question: 'Necessitare temps de recuperacio?',
				answer: 'La majoria de protocols permeten reprendre l activitat habitual rapidament amb pautes simples.',
			},
		],
	},
	finalCta: {
		...spanishFacialPageContent.finalCta,
		primary: 'Sol licitar valoracio',
		secondaryBooking: 'Reservar cita',
	},
};

const frenchFacialPageContent: FacialPageContent = {
	...spanishFacialPageContent,
	seo: {
		title: 'Medecine esthetique du visage a Barcelone | AJ Clinique',
		description:
			'Des traitements medicaux axes sur la qualite de peau et l harmonie du visage, avec des resultats naturels et progressifs.',
	},
	hero: {
		...spanishFacialPageContent.hero,
		h1: 'Medecine esthetique du visage.',
		subtitle: 'Rajeunir sans cesser d etre vous.',
		lead:
			'Des traitements medicaux axes sur la qualite de peau et l harmonie du visage, avec des resultats naturels et progressifs.',
		primaryCta: 'Demander une evaluation faciale',
		secondaryCta: 'Voir notre critere medical',
	},
	faq: {
		title: 'Questions frequentes',
		items: [
			{
				question: 'Quand verrai je les resultats?',
				answer: 'Selon le protocole, les ameliorations apparaissent en general progressivement des les premieres semaines.',
			},
			{
				question: 'Vais je perdre mon expression naturelle?',
				answer: 'Non. Le plan est concu pour conserver l expression et eviter des resultats artificiels.',
			},
			{
				question: 'Y a t il un temps de recuperation?',
				answer: 'La plupart des protocoles permettent de reprendre rapidement l activite habituelle avec des consignes simples.',
			},
		],
	},
	finalCta: {
		...spanishFacialPageContent.finalCta,
		h2: 'Commencez par une evaluation faciale.',
		primary: 'Demander une evaluation',
		secondaryBooking: 'Prendre rendez-vous',
		secondaryWhatsapp: 'WhatsApp',
	},
};

export const facialPageContent: Record<Locale, FacialPageContent> = {
	es: spanishFacialPageContent,
	en: englishFacialPageContent,
	ca: catalanFacialPageContent,
	fr: frenchFacialPageContent,
};
