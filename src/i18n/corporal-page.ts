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
	text: string;
	primaryCta: string;
	secondaryCta: string;
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
	};
}

const spanishCorporalPageContent: CorporalPageContent = {
	seo: {
		title: 'Medicina estetica corporal en Barcelona y Tarragona | Dra. Jessica Tellechea',
		description:
			'Mejorar tu cuerpo con criterio, priorizando la salud del tejido y la armonía natural de las formas.',
	},
	hero: {
		eyebrow: 'MEDICINA CORPORAL',
		h1: 'Medicina estetica corporal',
		lead:
			'Mejorar tu cuerpo con criterio.',
		text: 'Tratamientos médicos orientados a mejorar firmeza, calidad de piel y definición corporal con un enfoque progresivo.',
		primaryCta: 'Solicitar valoración corporal',
		secondaryCta: 'Conoce el criterio médico',
		imageSrc: '/images/home/treatment-corporal.webp',
		imageAlt: 'Medicina estética corporal en Barcelona y Tarragona',
	},
	identification: {
		title: 'Buscas mejorar, con naturalidad y control.',
		body:
			'En la medicina estética corporal, la Dra. Jessica Tellechea busca acompañar cada cuerpo desde un enfoque médico, progresivo y personalizado, priorizando resultados naturales, equilibrados y coherentes con cada persona.',
	},
	evaluation: {
		title: 'Cada protocolo parte de una evaluación corporal.',
		body:
			'Cada cuerpo requiere una valoración propia. La evaluación parte del análisis de la calidad de la piel, la firmeza y el objetivo corporal, para construir un plan progresivo, natural y coherente con cada persona.',
		steps: [
			{
				label: '01 / Criterio médico',
				body: 'Las necesidades reales de cada cuerpo se priorizan antes de definir cualquier tratamiento.',
			},
			{
				label: '02 / Evolución Progresiva',
				body: 'Los protocolos se adaptan al ritmo y evolución de cada persona.',
			},
		],
		imageSrc: '/images/home/treatment-corporal.webp',
		imageAlt: 'Evaluación corporal en Barcelona y Tarragona',
	},
	benefits: {
		eyebrow: 'Beneficios',
		title: 'La excelencia en la calidad del tejido',
		items: [
			{
			  icon: 'ph-sparkle',
			  title: 'Piel más firme',
			  body: 'La firmeza y la calidad de la piel se trabajan de forma progresiva.',
			},
			{
			  icon: 'ph-target',
			  title: 'Definición natural',
			  body: 'Los protocolos de definición corporal se abordan desde un enfoque médico.',
			},
			{
			  icon: 'ph-waves',
			  title: 'Drenaje y alivio',
			  body: 'El drenaje y la recuperación de los tejidos se favorecen a lo largo del plan.',
			},
			{
			  icon: 'ph-sliders-horizontal',
			  title: 'Cada cuerpo, un plan',
			  body: 'Cada tratamiento se adapta al ritmo, objetivo y evolución de cada persona.',
			},
			{
			  icon: 'ph-seal-check',
			  title: 'Evolución visible',
			  body: 'Mejora gradual, natural y coherente con cada cuerpo.',
			},
		  ],
	},
	treatments: {
		title: 'Áreas de especialización',
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
				imageAlt: 'Tecnología de firmeza',
				variant: 'wide',
			},
			{
				eyebrow: 'Recuperación',
				title: 'Post-parto y Post-quirúrgico',
				body:
					'Programas integrales para recuperar la elasticidad y compactación del tejido tras cambios volumétricos.',
				imageSrc: '/images/home/clinic-secondary.webp',
				imageAlt: 'Proceso de recuperación',
			},
			{
				eyebrow: 'Estimulación',
				title: 'Estimulación Muscular de Alta Intensidad',
				body:
					'Mantenimiento de la masa muscular y definición de contornos mediante tecnología electromagnética focalizada.',
				imageSrc: '/images/home/clinic-primary.webp',
				imageAlt: 'Estimulación muscular',
				variant: 'dark',
			},
		],
	},
	process: {
		eyebrow: 'Metodología',
		title: 'El camino hacia una mejora progresiva',
		steps: [
			{
				marker: 'I',
				title: 'Valoración Corporal',
				body: 'Análisis de las necesidades del cuerpo y definición de las prioridades del tratamiento.',
			},
			{
				marker: 'II',
				title: 'Objetivo y priorización',
				body: 'Establecimiento de un enfoque progresivo y coherente con cada objetivo corporal.',
			},
			{
				marker: 'III',
				title: 'Plan personalizado',
				body: 'Diseño de un protocolo adaptado al ritmo, evolución y características de cada persona.',
			},
			{
				marker: 'IV',
				title: 'Seguimiento',
				body: 'Acompañamiento de la evolución del tratamiento para mantener resultados naturales y equilibrados.',
			},
		],
	},
	differentiation: [
		{
			index: '01',
			title: 'Protocolos Personalizados',
			body: 'Cada tratamiento se adapta a las necesidades, el ritmo y la evolución de cada cuerpo.',
		},
		{
			index: '02',
			title: 'Evolución Progresiva',
			body: 'Mejoras visibles, naturales y coherentes a través de un enfoque progresivo.',
		},
		{
			index: '03',
			title: 'Cuidado de la Piel y la Forma',
			body: 'La medicina estética corporal debe acompañar tanto la calidad de la piel como la armonía corporal.',
		},
	],
	finalCta: {
		h2: 'Solicita una valoración corporal',
		body: 'El primer paso es identificar la necesidad real y ordenar el tratamiento.',
		primary: 'Solicitar valoración corporal',
	},
};

const englishCorporalPageContent: CorporalPageContent = {
	...spanishCorporalPageContent,
	seo: {
		title: 'Body aesthetic medicine in Barcelona and Tarragona | Dr. Jessica Tellechea',
		description:
			'Improve your body with a thoughtful approach, prioritizing tissue health and the natural harmony of body shape.',
	},
	hero: {
		...spanishCorporalPageContent.hero,
		eyebrow: 'BODY MEDICINE',
		h1: 'Body aesthetic medicine',
		lead: 'Improve your body with a thoughtful approach.',
		text: 'Medical treatments focused on improving firmness, skin quality, and body definition with a progressive approach.',
		primaryCta: 'Request body assessment',
		secondaryCta: 'See the medical criteria',
		imageAlt: 'Body aesthetic medicine in Barcelona and Tarragona',
	},
	identification: {
		title: 'You want to improve with naturalness and control.',
		body:
			'In her practice, Dr. Jessica Tellechea supports each body through a medical, progressive and personalised approach, prioritising natural, balanced results aligned with each person.',
	},
	evaluation: {
		title: 'Every protocol starts with a body assessment.',
		body:
			'Each body needs an individual evaluation. The assessment starts from analysing skin quality, firmness and body goals to build a progressive, natural plan aligned with each person.',
		steps: [
			{
				label: '01 / Medical criteria',
				body: 'Each body\'s real needs are prioritised before defining any treatment.',
			},
			{
				label: '02 / Progressive evolution',
				body: 'Protocols are adapted to each person\'s pace and evolution.',
			},
		],
		imageSrc: spanishCorporalPageContent.evaluation.imageSrc,
		imageAlt: 'Body assessment in Barcelona and Tarragona',
	},
	benefits: {
		eyebrow: 'Benefits',
		title: 'Excellence in tissue quality',
		items: [
			{ icon: 'ph-sparkle', title: 'Firmer skin', body: 'Firmness and skin quality improve progressively.' },
			{ icon: 'ph-target', title: 'Natural definition', body: 'Body-definition protocols are approached with a medical lens.' },
			{ icon: 'ph-waves', title: 'Drainage and relief', body: 'Drainage and tissue recovery are encouraged along the plan.' },
			{ icon: 'ph-sliders-horizontal', title: 'Every body, one plan', body: 'Each protocol adapts to each person\'s pace, goals and evolution.' },
			{ icon: 'ph-seal-check', title: 'Visible evolution', body: 'Gradual, natural and coherent improvement.' },
		],
	},
	treatments: {
		title: 'Areas of specialisation',
		items: [
			{
				eyebrow: 'Firmness and tension',
				title: 'Redensification protocols',
				services: [
					'High-intensity medical radiofrequency',
					'Collagen biostimulation (Radiesse)',
					'Next-generation body tensor threads',
				],
				imageSrc: '/images/home/treatment-corporal.webp',
				imageAlt: 'Firmness technology',
				variant: 'wide',
			},
			{
				eyebrow: 'Recovery',
				title: 'Postpartum and post-surgical',
				body: 'Comprehensive programs to recover tissue elasticity and compaction after volumetric changes.',
				imageSrc: '/images/home/clinic-secondary.webp',
				imageAlt: 'Recovery process',
			},
			{
				eyebrow: 'Stimulation',
				title: 'High-intensity muscle stimulation',
				body: 'Maintenance of muscle mass and contour definition through focused electromagnetic technology.',
				imageSrc: '/images/home/clinic-primary.webp',
				imageAlt: 'Muscle stimulation',
				variant: 'dark',
			},
		],
	},
	process: {
		eyebrow: 'Methodology',
		title: 'The path to progressive improvement',
		steps: [
			{ marker: 'I', title: 'Body assessment', body: 'Analysis of body needs and definition of treatment priorities.' },
			{ marker: 'II', title: 'Goal and prioritisation', body: 'Establishing a progressive approach aligned with each body goal.' },
			{ marker: 'III', title: 'Personalised plan', body: 'Design of a protocol adapted to each person\'s pace, evolution and characteristics.' },
			{ marker: 'IV', title: 'Follow-up', body: 'Ongoing support during treatment evolution to preserve natural, balanced results.' },
		],
	},
	differentiation: [
		{
			index: '01',
			title: 'Personalised protocols',
			body: 'Each treatment adapts to each body\'s needs, pace and evolution.',
		},
		{
			index: '02',
			title: 'Progressive evolution',
			body: 'Visible, natural and coherent improvements through a progressive approach.',
		},
		{
			index: '03',
			title: 'Skin and shape care',
			body: 'Body aesthetic medicine should support both skin quality and body harmony.',
		},
	],
	finalCta: {
		h2: 'Request a body assessment',
		body: 'The first step is to identify the real need and prioritise treatment order.',
		primary: 'Request body assessment',
	},
};

const catalanCorporalPageContent: CorporalPageContent = {
	...spanishCorporalPageContent,
	seo: {
		title: 'Medicina estètica corporal a Barcelona i Tarragona | Dra. Jessica Tellechea',
		description:
			'Millorar el teu cos amb criteri, prioritzant la salut del teixit i l harmonia natural de les formes.',
	},
	hero: {
		...spanishCorporalPageContent.hero,
		eyebrow: 'MEDICINA CORPORAL',
		h1: 'Medicina estètica corporal',
		lead: 'Millorar el teu cos amb criteri.',
		text: 'Tractaments mèdics orientats a millorar fermesa, qualitat de la pell i definició corporal amb un enfocament progressiu.',
		primaryCta: 'Sol·licitar valoració corporal',
		secondaryCta: 'Coneix el criteri mèdic',
		imageAlt: 'Medicina estètica corporal a Barcelona i Tarragona',
	},
	identification: {
		title: 'Vols millorar, amb naturalitat i control.',
		body:
			'En la medicina estètica corporal, la Dra. Jessica Tellechea busca acompanyar cada cos des d\'un enfocament mèdic, progressiu i personalitzat, prioritzant resultats naturals, equilibrats i coherents amb cada persona.',
	},
	evaluation: {
		title: 'Cada protocol parteix d una valoració corporal.',
		body:
			'Cada cos requereix una valoració pròpia. La valoració parteix de l\'anàlisi de la qualitat de la pell, la fermesa i l\'objectiu corporal, per construir un pla progressiu, natural i coherent amb cada persona.',
		steps: [
			{
				label: '01 / Criteri mèdic',
				body: 'Les necessitats reals de cada cos es prioritzen abans de definir qualsevol tractament.',
			},
			{
				label: '02 / Evolució progressiva',
				body: 'Els protocols s adapten al ritme i a l evolució de cada persona.',
			},
		],
		imageSrc: spanishCorporalPageContent.evaluation.imageSrc,
		imageAlt: 'Valoració corporal a Barcelona i Tarragona',
	},
	benefits: {
		eyebrow: 'Beneficis',
		title: 'L excel·lència en la qualitat del teixit',
		items: [
			{ icon: 'ph-sparkle', title: 'Pell més ferma', body: 'La fermesa i la qualitat de la pell es treballen de manera progressiva.' },
			{ icon: 'ph-target', title: 'Definició natural', body: 'Els protocols de definició corporal s\'aborden des d\'un enfocament mèdic.' },
			{ icon: 'ph-waves', title: 'Drenatge i alleujament', body: 'El drenatge i la recuperació dels teixits es afavoreixen al llarg del pla.' },
			{ icon: 'ph-sliders-horizontal', title: 'Cada cos, un pla', body: 'Cada tractament s\'adapta al ritme, objectiu i evolució de cada persona.' },
			{ icon: 'ph-seal-check', title: 'Evolució visible', body: 'Millora gradual, natural i coherent amb cada cos.' },
		],
	},
	treatments: {
		title: 'Àrees d\'especialització',
		items: [
			{
				eyebrow: 'Fermesa i tensió',
				title: 'Protocols de redensificació',
				services: [
					'Radiofreqüència mèdica d alta intensitat',
					'Bioestimulació de col·lagen (Radiesse)',
					'Fils tensors corporals de nova generació',
				],
				imageSrc: '/images/home/treatment-corporal.webp',
				imageAlt: 'Tecnologia de fermesa',
				variant: 'wide',
			},
			{
				eyebrow: 'Recuperació',
				title: 'Postpart i postquirúrgic',
				body: 'Programes integrals per recuperar l elasticitat i la compactació del teixit després de canvis volumètrics.',
				imageSrc: '/images/home/clinic-secondary.webp',
				imageAlt: 'Procés de recuperació',
			},
			{
				eyebrow: 'Estimulació',
				title: 'Estimulació muscular d alta intensitat',
				body: 'Manteniment de la massa muscular i definició de contorns mitjançant tecnologia electromagnètica focalitzada.',
				imageSrc: '/images/home/clinic-primary.webp',
				imageAlt: 'Estimulació muscular',
				variant: 'dark',
			},
		],
	},
	process: {
		eyebrow: 'Metodologia',
		title: 'El camí cap a una millora progressiva',
		steps: [
			{ marker: 'I', title: 'Valoració corporal', body: 'Anàlisi de les necessitats del cos i definició de les prioritats del tractament.' },
			{ marker: 'II', title: 'Objectiu i priorització', body: 'Establiment d\'un enfocament progressiu i coherent amb cada objectiu corporal.' },
			{ marker: 'III', title: 'Pla personalitzat', body: 'Disseny d\'un protocol adaptat al ritme, evolució i característiques de cada persona.' },
			{ marker: 'IV', title: 'Seguiment', body: 'Acompanyament de l\'evolució del tractament per mantenir resultats naturals i equilibrats.' },
		],
	},
	differentiation: [
		{
			index: '01',
			title: 'Protocols personalitzats',
			body: 'Cada tractament s adapta a les necessitats, el ritme i l evolució de cada cos.',
		},
		{
			index: '02',
			title: 'Evolució progressiva',
			body: 'Millores visibles, naturals i coherents a través d un enfocament progressiu.',
		},
		{
			index: '03',
			title: 'Cura de la pell i de la forma',
			body: 'La medicina estètica corporal ha d acompanyar tant la qualitat de la pell com l harmonia corporal.',
		},
	],
	finalCta: {
		h2: 'Sol·licita una valoració corporal',
		body: 'El primer pas és identificar la necessitat real i ordenar el tractament.',
		primary: 'Sol·licitar valoració corporal',
	},
};

const frenchCorporalPageContent: CorporalPageContent = {
	...spanishCorporalPageContent,
	seo: {
		title: 'Medecine esthetique corporelle a Barcelone et Tarragone | Dre Jessica Tellechea',
		description:
			'Ameliorer votre corps avec rigueur, en priorisant la sante des tissus et l harmonie naturelle des formes.',
	},
	hero: {
		...spanishCorporalPageContent.hero,
		eyebrow: 'MEDECINE CORPORELLE',
		h1: 'Medecine esthetique corporelle',
		lead: 'Ameliorer votre corps avec rigueur.',
		text: 'Des traitements medicaux axes sur la fermete, la qualite de peau et la definition corporelle avec une approche progressive.',
		primaryCta: 'Demander une evaluation corporelle',
		secondaryCta: 'Voir le critere medical',
		imageAlt: 'Medecine esthetique corporelle a Barcelone et Tarragone',
	},
	identification: {
		title: 'Vous souhaitez ameliorer, avec naturel et controle.',
		body:
			'Dans sa pratique, la Dre Jessica Tellechea accompagne chaque corps avec une approche medicale, progressive et personnalisee, en priorisant des resultats naturels, equilibres et coherents avec chaque personne.',
	},
	evaluation: {
		title: 'Chaque protocole commence par une evaluation corporelle.',
		body:
			'Chaque corps demande une evaluation specifique. L\'evaluation part de l\'analyse de la qualite de la peau, de la fermete et de l\'objectif corporel, pour construire un plan progressif, naturel et coherent avec chaque personne.',
		steps: [
			{
				label: '01 / Critere medical',
				body: 'Les besoins reels de chaque corps sont priorises avant de definir tout traitement.',
			},
			{
				label: '02 / Evolution progressive',
				body: 'Les protocoles s adaptent au rythme et a l evolution de chaque personne.',
			},
		],
		imageSrc: spanishCorporalPageContent.evaluation.imageSrc,
		imageAlt: 'Evaluation corporelle a Barcelone et Tarragone',
	},
	benefits: {
		eyebrow: 'Benefices',
		title: 'L excellence de la qualite tissulaire',
		items: [
			{ icon: 'ph-sparkle', title: 'Peau plus ferme', body: 'La fermete et la qualite de peau s\'ameliorent de facon progressive.' },
			{ icon: 'ph-target', title: 'Definition naturelle', body: 'Les protocoles de definition corporelle sont abordes avec une approche medicale.' },
			{ icon: 'ph-waves', title: 'Drainage et soulagement', body: 'Le drainage et la recuperation des tissus sont favorises tout au long du plan.' },
			{ icon: 'ph-sliders-horizontal', title: 'Chaque corps, un plan', body: 'Chaque protocole s\'adapte au rythme, a l\'objectif et a l\'evolution de chaque personne.' },
			{ icon: 'ph-seal-check', title: 'Evolution visible', body: 'Amelioration progressive, naturelle et coherente avec chaque corps.' },
		],
	},
	treatments: {
		title: 'Domaines de specialisation',
		items: [
			{
				eyebrow: 'Fermete et tension',
				title: 'Protocoles de redensification',
				services: [
					'Radiofrequence medicale a haute intensite',
					'Biostimulation du collagene (Radiesse)',
					'Fils tenseurs corporels de nouvelle generation',
				],
				imageSrc: '/images/home/treatment-corporal.webp',
				imageAlt: 'Technologie de fermete',
				variant: 'wide',
			},
			{
				eyebrow: 'Recuperation',
				title: 'Post-partum et post-chirurgical',
				body: 'Programmes complets pour recuperer l elasticite et la compaction des tissus apres des changements volumiques.',
				imageSrc: '/images/home/clinic-secondary.webp',
				imageAlt: 'Processus de recuperation',
			},
			{
				eyebrow: 'Stimulation',
				title: 'Stimulation musculaire de haute intensite',
				body: 'Maintien de la masse musculaire et definition des contours par technologie electromagnetique focalisee.',
				imageSrc: '/images/home/clinic-primary.webp',
				imageAlt: 'Stimulation musculaire',
				variant: 'dark',
			},
		],
	},
	process: {
		eyebrow: 'Methodologie',
		title: 'Le chemin vers une amelioration progressive',
		steps: [
			{ marker: 'I', title: 'Evaluation corporelle', body: 'Analyse des besoins du corps et definition des priorites du traitement.' },
			{ marker: 'II', title: 'Objectif et priorisation', body: 'Etablissement d\'une approche progressive et coherente avec chaque objectif corporel.' },
			{ marker: 'III', title: 'Plan personnalise', body: 'Conception d\'un protocole adapte au rythme, a l\'evolution et aux caracteristiques de chaque personne.' },
			{ marker: 'IV', title: 'Suivi', body: 'Accompagnement de l\'evolution du traitement pour maintenir des resultats naturels et equilibres.' },
		],
	},
	differentiation: [
		{
			index: '01',
			title: 'Protocoles personnalises',
			body: 'Chaque traitement s adapte aux besoins, au rythme et a l evolution de chaque corps.',
		},
		{
			index: '02',
			title: 'Evolution progressive',
			body: 'Ameliorations visibles, naturelles et coherentes grace a une approche progressive.',
		},
		{
			index: '03',
			title: 'Soin de la peau et de la forme',
			body: 'La medecine esthetique corporelle doit accompagner la qualite de peau et l harmonie du corps.',
		},
	],
	finalCta: {
		h2: 'Demandez une evaluation corporelle',
		body: 'La premiere etape consiste a identifier le besoin reel et a ordonner le traitement.',
		primary: 'Demander une evaluation corporelle',
	},
};

export const corporalPageContent: Record<Locale, CorporalPageContent> = {
	es: spanishCorporalPageContent,
	en: englishCorporalPageContent,
	ca: catalanCorporalPageContent,
	fr: frenchCorporalPageContent,
};
