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
	finalCta: { h2: string; body: string; primary: string };
}

const spanishFacialPageContent: FacialPageContent = {
	seo: {
		title: 'Medicina estética facial en Barcelona y Tarragona | Dra. Jessica Tellechea',
		description:
			'Tratamientos médicos orientados a mejorar la calidad de la piel y la armonía facial de forma natural y progresiva.',
	},
	hero: {
		eyebrow: 'MEDICINA SILENCIOSA',
		h1: 'Medicina estética facial',
		subtitle: 'Rejuvenecer sin dejar de ser tú.',
		lead:
			'Tratamientos médicos orientados a mejorar la calidad de la piel y la armonía facial de forma natural y progresiva.',
		primaryCta: 'Solicitar valoración facial',
		secondaryCta: 'Conoce el criterio médico',
		imageSrc: '/images/home/treatment-facial.webp',
		imageAlt: 'Tratamiento facial en Barcelona y Tarragona',
	},
	insight: {
		title: 'Quieres verte mejor, manteniendo tu expresión.',
		body:
			'En la medicina estética facial, la Dra. Jessica Tellechea busca acompañar la armonía del rostro con resultados sutiles, progresivos y coherentes con tu identidad.',
	},
	medicalApproach: {
		eyebrow: 'ENFOQUE MÉDICO',
		title: 'Cada tratamiento se define a partir de una valoración.',
		body: [
			'La valoración parte del análisis de la estructura facial, la calidad de la piel y el objetivo estético, para construir un plan adaptado a cada caso.',
			'El enfoque acompaña la armonía del rostro con resultados naturales, progresivos y coherentes con cada identidad.',
			'El compromiso es doble: seguridad médica y elegancia estética. Se utilizan sólo materiales biocompatibles de la más alta gama, aplicados con técnicas de mínima invasión.',
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
				body: 'Mejora progresiva de la armonía facial.',
			},
			{
				icon: 'ph-star-four',
				title: 'Piel luminosa',
				body: 'Piel más luminosa, uniforme y cuidada.',
			},
			{
				icon: 'ph-smiley',
				title: 'Expresión natural',
				body: 'Suavización de signos de expresión.',
			},
			{
				icon: 'ph-leaf',
				title: 'Resultados naturales',
				body: 'Resultados naturales y coherentes con la identidad del paciente.',
			},
			{
				icon: 'ph-scales',
				title: 'Equilibrio facial',
				body: 'Mejora visible sin sensación de exceso.',
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
				body: 'Escucha activa de tus necesidades y realización de un estudio morfológico completo.',
			},
			{
				title: 'Diagnóstico',
				body: 'Identificación de las causas subyacentes del envejecimiento o desarmonía.',
			},
			{
				title: 'Plan',
				body: 'Diseño de un cronograma de tratamientos personalizado, priorizado y equilibrado.',
			},
			{
				title: 'Seguimiento',
				body: 'Acompañamiento de la evolución para asegurar resultados duraderos y naturales.',
			},
		],
	},
	trust: {
		points: [
			{
				title: 'Resultados naturales',
				body: 'Resultados frescos, equilibrados y coherentes con la identidad de cada paciente.',
			},
			{
				title: 'Seleccionados según el caso',
				body: 'Cada tratamiento se adapta estrictamente a tu estructura ósea y calidad de piel.',
			},
			{
				title: 'Evolución progresiva',
				body: 'Progresión controlada, con ajustes en sucesivas visitas si es necesario.',
			},
		],
	},
	finalCta: {
		h2: 'Empieza con una valoración facial',
		body: 'El objetivo es definir qué necesita tu rostro y en qué orden trabajarlo.',
		primary: 'Solicitar valoración facial',
	},
};

const englishFacialPageContent: FacialPageContent = {
	...spanishFacialPageContent,
	seo: {
		title: 'Facial aesthetic medicine in Barcelona and Tarragona | Dr. Jessica Tellechea',
		description:
			'Medical treatments focused on skin quality and facial harmony with natural, progressive outcomes.',
	},
	hero: {
		...spanishFacialPageContent.hero,
		eyebrow: 'FACIAL MEDICINE',
		h1: 'Facial aesthetic medicine',
		subtitle: 'Rejuvenate while staying yourself.',
		lead:
			'Medical treatments focused on skin quality and facial harmony with natural, progressive outcomes.',
		primaryCta: 'Request facial assessment',
		secondaryCta: 'See the medical criteria',
	},
	insight: {
		title: 'You want to look better while keeping your expression.',
		body:
			'In her practice, Dr. Jessica Tellechea supports facial harmony with subtle, progressive results aligned with who you are.',
	},
	medicalApproach: {
		eyebrow: 'MEDICAL APPROACH',
		title: 'Every treatment starts from an assessment.',
		body: [
			'The assessment starts from analysing facial structure, skin quality, and aesthetic goals to build a plan tailored to each case.',
			'The approach supports facial harmony with natural, progressive results that fit each person\'s identity.',
			'The commitment is medical safety and aesthetic elegance. Only top-tier biocompatible materials are used, applied with minimally invasive techniques.',
		],
		imageSrc: '/images/home/clinic-primary.webp',
		imageAlt: 'Clinical consultation for facial assessment',
	},
	benefits: {
		title: 'An approach focused on skin health',
		items: [
			{
				icon: 'ph-sparkle',
				title: 'Progressive improvement',
				body: 'Progressive improvement in facial harmony.',
			},
			{
				icon: 'ph-star-four',
				title: 'Radiant skin',
				body: 'Brighter, more even, well-cared-for skin.',
			},
			{
				icon: 'ph-smiley',
				title: 'Natural expression',
				body: 'Softening of expression lines.',
			},
			{
				icon: 'ph-leaf',
				title: 'Natural results',
				body: 'Natural outcomes aligned with each patient\'s identity.',
			},
			{
				icon: 'ph-scales',
				title: 'Facial balance',
				body: 'Visible improvement without a sense of excess.',
			},
		],
	},
	process: {
		eyebrow: 'THE PATH TO YOUR BEST VERSION',
		steps: [
			{
				title: 'Assessment',
				body: 'Active listening to your needs and a full morphological study.',
			},
			{
				title: 'Diagnosis',
				body: 'Identification of the underlying causes of ageing or loss of harmony.',
			},
			{
				title: 'Plan',
				body: 'Design of a personalised treatment timeline, prioritised and balanced.',
			},
			{
				title: 'Follow-up',
				body: 'Ongoing support during evolution to ensure lasting, natural results.',
			},
		],
	},
	trust: {
		points: [
			{
				title: 'Natural results',
				body: 'Fresh, balanced outcomes aligned with each patient\'s identity.',
			},
			{
				title: 'Selected for your case',
				body: 'Each treatment is tailored strictly to your bone structure and skin quality.',
			},
			{
				title: 'Progressive evolution',
				body: 'Controlled progression, with fine-tuning over follow-up visits when needed.',
			},
		],
	},
	finalCta: {
		h2: 'Start with a facial assessment',
		body: 'The goal is to define what your face needs and in what order to address it.',
		primary: 'Request facial assessment',
	},
};

const catalanFacialPageContent: FacialPageContent = {
	...spanishFacialPageContent,
	seo: {
		title: 'Medicina estetica facial a Barcelona i Tarragona | Dra. Jessica Tellechea',
		description:
			'Tractaments medics orientats a millorar la qualitat de la pell i l harmonia facial de forma natural i progressiva.',
	},
	hero: {
		...spanishFacialPageContent.hero,
		eyebrow: 'MEDICINA FACIAL',
		h1: 'Medicina estetica facial',
		subtitle: 'Rejoveneix sense deixar de ser tu.',
		lead:
			'Tractaments medics orientats a millorar la qualitat de la pell i l harmonia facial de forma natural i progressiva.',
		primaryCta: 'Sol licitar valoracio facial',
		secondaryCta: 'Coneix el criteri medic',
	},
	insight: {
		title: 'Vols veure t millor, mantenint la teva expressio.',
		body:
			'La medicina estètica facial de la Dra. Jessica Tellechea acompanya l\'harmonia del rostre amb resultats subtils, progressius i coherents amb la teva identitat.',
	},
	medicalApproach: {
		eyebrow: 'ENFOC MÈDIC',
		title: 'Cada tractament es defineix a partir d\'una valoració.',
		body: [
			'La valoració parteix de l\'anàlisi de l\'estructura facial, la qualitat de la pell i l\'objectiu estètic per construir un pla adaptat a cada cas.',
			'L\'enfoc acompanya l\'harmonia del rostre amb resultats naturals, progressius i coherents amb cada identitat.',
			'El compromís és doble: seguretat mèdica i elegància estètica. Només s\'utilitzen materials biocompatibles de la màxima gamma, aplicats amb tècniques de mínima invasió.',
		],
		imageSrc: '/images/home/clinic-primary.webp',
		imageAlt: 'Consulta clínica per a la valoració facial',
	},
	benefits: {
		title: 'Un enfoc centrat en la salut de la pell',
		items: [
			{
				icon: 'ph-sparkle',
				title: 'Millora progressiva',
				body: 'Millora progressiva de l\'harmonia facial.',
			},
			{
				icon: 'ph-star-four',
				title: 'Pell lluminosa',
				body: 'Pell més lluminosa, uniforme i cuidada.',
			},
			{
				icon: 'ph-smiley',
				title: 'Expressió natural',
				body: 'Suavització dels signes d\'expressió.',
			},
			{
				icon: 'ph-leaf',
				title: 'Resultats naturals',
				body: 'Resultats naturals i coherents amb la identitat del pacient.',
			},
			{
				icon: 'ph-scales',
				title: 'Equilibri facial',
				body: 'Millora visible sense sensació d\'excés.',
			},
		],
	},
	process: {
		eyebrow: 'EL CAMÍ CAP A LA TEVA MILLOR VERSIÓ',
		steps: [
			{
				title: 'Valoració',
				body: 'Escolta activa de les teves necessitats i estudi morfològic complet.',
			},
			{
				title: 'Diagnòstic',
				body: 'Identificació de les causes subjacents de l\'envelliment o la desarmonia.',
			},
			{
				title: 'Pla',
				body: 'Disseny d\'un cronograma de tractaments personalitzat, prioritzat i equilibrat.',
			},
			{
				title: 'Seguiment',
				body: 'Acompanyament de l\'evolució per assegurar resultats duradors i naturals.',
			},
		],
	},
	trust: {
		points: [
			{
				title: 'Resultats naturals',
				body: 'Resultats frescos, equilibrats i coherents amb la identitat de cada pacient.',
			},
			{
				title: 'Seleccionats segons el cas',
				body: 'Cada tractament s\'adapta estrictament a la teva estructura òssia i a la qualitat de la pell.',
			},
			{
				title: 'Evolució progressiva',
				body: 'Progressió controlada, amb ajustos en visites successives si cal.',
			},
		],
	},
	finalCta: {
		h2: 'Comença amb una valoració facial',
		body: 'L\'objectiu és definir què necessita el teu rostre i en quin ordre treballar-ho.',
		primary: 'Sol·licitar valoració facial',
	},
};

const frenchFacialPageContent: FacialPageContent = {
	...spanishFacialPageContent,
	seo: {
		title: 'Medecine esthetique du visage a Barcelone et Tarragona | Dre Jessica Tellechea',
		description:
			'Des traitements medicaux axes sur la qualite de peau et l harmonie du visage, avec des resultats naturels et progressifs.',
	},
	hero: {
		...spanishFacialPageContent.hero,
		eyebrow: 'MEDECINE DU VISAGE',
		h1: 'Medecine esthetique du visage.',
		subtitle: 'Rajeunir sans cesser d etre vous.',
		lead:
			'Des traitements medicaux axes sur la qualite de peau et l harmonie du visage, avec des resultats naturels et progressifs.',
		primaryCta: 'Demander une evaluation faciale',
		secondaryCta: 'Voir le critere medical',
	},
	insight: {
		title: 'Vous voulez vous voir au mieux tout en gardant votre expression.',
		body:
			'Dans sa pratique, Dr. Jessica Tellechea accompagne l\'harmonie du visage avec des resultats discrets, progressifs et coherents avec votre identite.',
	},
	medicalApproach: {
		eyebrow: 'APPROCHE MEDICALE',
		title: 'Chaque traitement decoule d\'une evaluation.',
		body: [
			'L\'evaluation part de l\'analyse de la structure du visage, de la qualite de la peau et de l\'objectif esthetique, pour concevoir un plan adapte a chaque cas.',
			'L\'approche accompagne l\'harmonie du visage avec des resultats naturels, progressifs et coherents avec chaque identite.',
			'L\'engagement est double : securite medicale et elegance esthetique. Seuls des materiaux biocompatibles haut de gamme sont utilises, avec des techniques de pose peu invasives.',
		],
		imageSrc: '/images/home/clinic-primary.webp',
		imageAlt: 'Consultation clinique pour evaluation faciale',
	},
	benefits: {
		title: 'Une approche centree sur la sante de la peau',
		items: [
			{
				icon: 'ph-sparkle',
				title: 'Amelioration progressive',
				body: 'Amelioration progressive de l harmonie du visage.',
			},
			{
				icon: 'ph-star-four',
				title: 'Peau lumineuse',
				body: 'Peau plus lumineuse, uniforme et soignee.',
			},
			{
				icon: 'ph-smiley',
				title: 'Expression naturelle',
				body: 'Attenuation des marques d expression.',
			},
			{
				icon: 'ph-leaf',
				title: 'Resultats naturels',
				body: 'Resultats naturels et coherents avec l identite du patient.',
			},
			{
				icon: 'ph-scales',
				title: 'Equilibre du visage',
				body: 'Amelioration visible sans sensation d exces.',
			},
		],
	},
	process: {
		eyebrow: 'LE CHEMIN VERS VOTRE MEILLEURE VERSION',
		steps: [
			{
				title: 'Evaluation',
				body: 'Ecoute active de vos besoins et etude morphologique complete.',
			},
			{
				title: 'Diagnostic',
				body: 'Identification des causes sous jacentes du vieillissement ou du desequilibre.',
			},
			{
				title: 'Plan',
				body: 'Conception d\'un calendrier de soins personnalise, priorise et equilibre.',
			},
			{
				title: 'Suivi',
				body: 'Accompagnement de l\'evolution pour des resultats durables et naturels.',
			},
		],
	},
	trust: {
		points: [
			{
				title: 'Resultats naturels',
				body: 'Resultats frais, equilibres et coherents avec l\'identite de chaque patient.',
			},
			{
				title: 'Selectionnes selon le cas',
				body: 'Chaque soin s\'adapte strictement a votre structure osseuse et a la qualite de votre peau.',
			},
			{
				title: 'Evolution progressive',
				body: 'Progression controlee, avec des ajustements lors des visites suivantes si necessaire.',
			},
		],
	},
	finalCta: {
		h2: 'Commencez par une evaluation faciale',
		body: 'L\'objectif est de definir ce dont votre visage a besoin et dans quel ordre intervenir.',
		primary: 'Demander une evaluation faciale',
	},
};

export const facialPageContent: Record<Locale, FacialPageContent> = {
	es: spanishFacialPageContent,
	en: englishFacialPageContent,
	ca: catalanFacialPageContent,
	fr: frenchFacialPageContent,
};
