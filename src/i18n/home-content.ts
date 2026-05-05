import type { Locale } from './config';

export type HomeContent = {
	hero: {
		h1: string;
		subtitle: string;
		supporting: string;
		ctaPrimary: string;
		ctaSecondary: string;
	};
	manifest: { h2: string; body: string };
	process: {
		h2: string;
		steps: { title: string; body: string }[];
	};
	specialties: {
		h2: string;
		linkCta: string;
		cards: { tag: string; title: string; imageSrc: string; imageAlt: string }[];
	};
	capillary: { h2: string; lead: string; bullets: string[]; cta: string; imageSrc: string; imageAlt: string };
	clinic: {
		h2: string;
		lead: string;
		quote: string;
		imagePrimarySrc: string;
		imagePrimaryAlt: string;
		imageSecondarySrc: string;
		imageSecondaryAlt: string;
	};
	authority: { statements: string[] };
	finalCta: { h2: string; body: string; cta: string };
};

const es: HomeContent = {
	hero: {
		h1: 'Tu mejor versión, con criterio médico',
		subtitle: 'Medicina estética que respeta tu identidad',
		supporting: 'Resultados naturales. Diagnóstico honesto. Seguimiento real.',
		ctaPrimary: 'SOLICITAR VALORACIÓN',
		ctaSecondary: 'CONOCE NUESTRO CRITERIO MÉDICO',
	},
	manifest: {
		h2: 'Cuidamos la armonía. Respetamos la identidad.',
		body: 'AJ entiende la medicina estética como una forma de preservar, mejorar y acompañar con criterio médico.',
	},
	process: {
		h2: 'Todo empieza con una valoración médica',
		steps: [
			{
				title: 'Diagnóstico médico',
				body: 'Análisis exhaustivo de la estructura facial y capilar mediante tecnología de diagnóstico de imagen avanzada.',
			},
			{
				title: 'Plan personalizado',
				body: 'Diseño de protocolos exclusivos que buscan la mejora sutil, respetando siempre las proporciones originales.',
			},
			{
				title: 'Seguimiento real',
				body: 'Acompañamiento médico continuo tras el tratamiento para garantizar resultados duraderos y seguros.',
			},
		],
	},
	specialties: {
		h2: 'Especialidades',
		linkCta: 'Ver tratamientos →',
		cards: [
			{
				tag: 'FACIAL',
				title: 'Rejuvenecimiento natural',
				imageSrc: '/images/home/treatment-facial.webp',
				imageAlt: 'Tratamiento de medicina estética facial en clínica AJ',
			},
			{
				tag: 'CORPORAL',
				title: 'Cuerpo definido',
				imageSrc: '/images/home/treatment-corporal.webp',
				imageAlt: 'Tratamiento de medicina estética corporal en clínica AJ',
			},
			{
				tag: 'CAPILAR',
				title: 'Tratamiento capilar',
				imageSrc: '/images/home/treatment-capilar.webp',
				imageAlt: 'Tratamiento de salud capilar en clínica AJ',
			},
		],
	},
	capillary: {
		h2: 'La salud capilar requiere diagnóstico y seguimiento',
		lead: 'AJ aborda el tratamiento capilar desde un enfoque médico, progresivo y personalizado.',
		bullets: [
			'Valoración previa y criterio antes de recomendar',
			'Técnica y protocolos alineados con evidencia',
			'Seguimiento tras el tratamiento',
		],
		cta: 'SOLICITAR DIAGNÓSTICO CAPILAR',
		imageSrc: '/images/home/capillary.webp',
		imageAlt: 'Evaluación y tratamiento de salud capilar en clínica AJ',
	},
	clinic: {
		h2: 'Un espacio pensado para la calma',
		lead: 'Privacidad, tiempo, luz cálida y una experiencia coherente con el cuidado médico',
		quote: 'Privacidad absoluta. Trato humano. Resultados honestos.',
		imagePrimarySrc: '/images/home/clinic-primary.webp',
		imagePrimaryAlt: 'Sala de espera de la clínica AJ, ambiente luminoso y calmado',
		imageSecondarySrc: '/images/home/clinic-secondary.webp',
		imageSecondaryAlt: 'Detalle del espacio de consulta en clínica AJ',
	},
	authority: {
		statements: [
			'Tratamientos definidos con criterio médico',
			'Resultados naturales y progresivos',
			'Planes pensados para cada caso',
		],
	},
	finalCta: {
		h2: 'Empieza con una valoración',
		body: 'El primer paso es entender tu caso y definir el camino adecuado.',
		cta: 'SOLICITAR VALORACIÓN',
	},
};

const en: HomeContent = {
	hero: {
		h1: 'Your best version, with medical judgement',
		subtitle: 'Aesthetic medicine that respects who you are',
		supporting: 'Natural outcomes. Honest diagnosis. Real follow-up.',
		ctaPrimary: 'SOLICITAR VALORACIÓN',
		ctaSecondary: 'EXPLORE OUR MEDICAL CRITERIA',
	},
	manifest: {
		h2: 'We preserve harmony. We respect identity.',
		body: 'AJ sees aesthetic medicine as a way to preserve, refine and support you with medical judgement.',
	},
	process: {
		h2: 'Everything starts with a medical assessment',
		steps: [
			{
				title: 'Medical diagnosis',
				body: 'Detailed analysis of facial and hair structure using advanced imaging diagnostics.',
			},
			{
				title: 'Personalised plan',
				body: 'Protocols designed for subtle improvement while respecting your natural proportions.',
			},
			{
				title: 'Real follow-up',
				body: 'Continuous medical support after treatment for safer, longer-lasting results.',
			},
		],
	},
	specialties: {
		h2: 'Specialties',
		linkCta: 'View treatments →',
		cards: [
			{
				tag: 'FACIAL',
				title: 'Natural rejuvenation',
				imageSrc: '/images/home/treatment-facial.webp',
				imageAlt: 'Facial aesthetic medicine treatment at AJ clinic',
			},
			{
				tag: 'BODY',
				title: 'Defined body',
				imageSrc: '/images/home/treatment-corporal.webp',
				imageAlt: 'Body aesthetic medicine treatment at AJ clinic',
			},
			{
				tag: 'HAIR',
				title: 'Hair treatment',
				imageSrc: '/images/home/treatment-capilar.webp',
				imageAlt: 'Hair health treatment at AJ clinic',
			},
		],
	},
	capillary: {
		h2: 'Hair health requires diagnosis and follow-up',
		lead: 'AJ approaches hair treatment from a medical, progressive, personalized perspective.',
		bullets: [
			'Assessment first and clinical judgement before recommending care',
			'Techniques and protocols aligned with evidence',
			'Follow-up after treatment',
		],
		cta: 'REQUEST A HAIR DIAGNOSIS',
		imageSrc: '/images/home/capillary.webp',
		imageAlt: 'Medical assessment and hair health treatment at AJ clinic',
	},
	clinic: {
		h2: 'A space designed for calm',
		lead: 'Privacy, time, warm light, and an experience aligned with medical care.',
		quote: 'Absolute privacy. Human care. Honest outcomes.',
		imagePrimarySrc: '/images/home/clinic-primary.webp',
		imagePrimaryAlt: 'AJ clinic waiting area, bright and calm atmosphere',
		imageSecondarySrc: '/images/home/clinic-secondary.webp',
		imageSecondaryAlt: 'Consultation space detail at AJ clinic',
	},
	authority: {
		statements: [
			'Treatments defined with medical judgement',
			'Natural, progressive results',
			'Plans designed for each case',
		],
	},
	finalCta: {
		h2: 'Start with an assessment',
		body: 'The first step is understanding your case and defining the right path.',
		cta: 'SOLICITAR VALORACIÓN',
	},
};

const ca: HomeContent = {
	...es,
	hero: {
		...es.hero,
		h1: 'La teva millor versió, amb criteri mèdic',
		subtitle: 'Medicina estètica que respecta la teva identitat',
		supporting: 'Resultats naturals. Diagnòstic honest. Seguiment real.',
		ctaSecondary: 'CONEIX EL NOSTRE CRITERI MÈDIC',
	},
	manifest: {
		h2: 'Cuidem l’harmonia. Respectem la identitat.',
		body: 'AJ entén la medicina estètica com una forma de preservar, millorar i acompanyar amb criteri mèdic.',
	},
	process: {
		h2: 'Tot comença amb una valoració mèdica',
		steps: [
			{
				title: 'Diagnòstic mèdic',
				body: 'Anàlisi exhaustiva de l’estructura facial i capil·lar amb tecnologia de diagnòstic per imatge avançada.',
			},
			{
				title: 'Pla personalitzat',
				body: 'Disseny de protocols exclusius que busquen la millora subtil, respectant sempre les proporcions originals.',
			},
			{
				title: 'Seguiment real',
				body: 'Acompanyament mèdic continu després del tractament per garantir resultats duradors i segurs.',
			},
		],
	},
	specialties: {
		h2: 'Especialitats',
		linkCta: 'Veure tractaments →',
		cards: [
			{
				tag: 'FACIAL',
				title: 'Rejuveniment natural',
				imageSrc: '/images/home/treatment-facial.webp',
				imageAlt: 'Tractament de medicina estètica facial a la clínica AJ',
			},
			{
				tag: 'CORPORAL',
				title: 'Cos definit',
				imageSrc: '/images/home/treatment-corporal.webp',
				imageAlt: 'Tractament de medicina estètica corporal a la clínica AJ',
			},
			{
				tag: 'CAPIL·LAR',
				title: 'Tractament capil·lar',
				imageSrc: '/images/home/treatment-capilar.webp',
				imageAlt: 'Tractament de salut capil·lar a la clínica AJ',
			},
		],
	},
	capillary: {
		h2: 'La salut capil·lar requereix diagnòstic i seguiment',
		lead: 'AJ aborda el tractament capil·lar des d’un enfoc mèdic, progressiu i personalitzat.',
		bullets: [
			'Valoració prèvia i criteri abans de recomanar',
			'Tècnica i protocols alineats amb l’evidència',
			'Seguiment després del tractament',
		],
		cta: 'SOL·LICITAR DIAGNÒSTIC CAPIL·LAR',
		imageSrc: '/images/home/capillary.webp',
		imageAlt: 'Avaluació i tractament de salut capil·lar a la clínica AJ',
	},
	clinic: {
		h2: 'Un espai pensat per a la calma',
		lead: 'Privacitat, temps, llum càlida i una experiència coherent amb la cura mèdica',
		quote: 'Privacitat absoluta. Tracte humà. Resultats honestos.',
		imagePrimarySrc: '/images/home/clinic-primary.webp',
		imagePrimaryAlt: 'Sala d\'espera de la clínica AJ, ambient lluminós i calm',
		imageSecondarySrc: '/images/home/clinic-secondary.webp',
		imageSecondaryAlt: 'Detall de l\'espai de consulta a la clínica AJ',
	},
	authority: {
		statements: [
			'Tractaments definits amb criteri mèdic',
			'Resultats naturals i progressius',
			'Plans pensats per a cada cas',
		],
	},
	finalCta: {
		h2: 'Comença amb una valoració',
		body: 'El primer pas és entendre el teu cas i definir el camí adequat.',
		cta: 'SOLICITAR VALORACIÓN',
	},
};

const fr: HomeContent = {
	...es,
	hero: {
		...es.hero,
		h1: 'Votre meilleure version, avec un critère médical',
		subtitle: 'Une médecine esthétique qui respecte votre identité',
		supporting: 'Des résultats naturels. Un diagnostic honnête. Un suivi réel.',
		ctaSecondary: 'DÉCOUVREZ NOTRE CRITÈRE MÉDICAL',
	},
	manifest: {
		h2: 'Nous préservons l’harmonie. Nous respectons l’identité.',
		body: 'AJ conçoit la médecine esthétique comme un moyen de préserver, d’améliorer et d’accompagner avec un critère médical.',
	},
	process: {
		h2: 'Tout commence par une évaluation médicale',
		steps: [
			{
				title: 'Diagnostic médical',
				body: 'Analyse approfondie de la structure du visage et du cuir chevelu grâce à l’imagerie avancée.',
			},
			{
				title: 'Plan personnalisé',
				body: 'Protocoles exclusifs visant une amélioration subtile tout en respectant vos proportions d’origine.',
			},
			{
				title: 'Suivi réel',
				body: 'Accompagnement médical continu après le traitement pour des résultats durables et sûrs.',
			},
		],
	},
	specialties: {
		h2: 'Spécialités',
		linkCta: 'Voir les soins →',
		cards: [
			{
				tag: 'VISAGE',
				title: 'Rajeunissement naturel',
				imageSrc: '/images/home/treatment-facial.webp',
				imageAlt: 'Traitement de médecine esthétique du visage à la clinique AJ',
			},
			{
				tag: 'CORPS',
				title: 'Corps défini',
				imageSrc: '/images/home/treatment-corporal.webp',
				imageAlt: 'Traitement de médecine esthétique du corps à la clinique AJ',
			},
			{
				tag: 'CAPILLAIRE',
				title: 'Soins capillaires',
				imageSrc: '/images/home/treatment-capilar.webp',
				imageAlt: 'Traitement de santé capillaire à la clinique AJ',
			},
		],
	},
	capillary: {
		h2: 'La santé capillaire exige diagnostic et suivi',
		lead: 'AJ aborde les soins capillaires avec une approche médicale, progressive et personnalisée.',
		bullets: [
			'Évaluation préalable et critère médical avant toute recommandation',
			'Techniques et protocoles alignés sur la littérature',
			'Suivi après le traitement',
		],
		cta: 'DEMANDER UN DIAGNOSTIC CAPILLAIRE',
		imageSrc: '/images/home/capillary.webp',
		imageAlt: 'Évaluation et traitement de santé capillaire à la clinique AJ',
	},
	clinic: {
		h2: 'Un lieu pensé pour le calme',
		lead: 'Intimité, temps, lumière chaude et une expérience alignée sur les soins médicaux.',
		quote: 'Confidentialité absolue. Approche humaine. Résultats honnêtes.',
		imagePrimarySrc: '/images/home/clinic-primary.webp',
		imagePrimaryAlt: 'Salle d\'attente de la clinique AJ, ambiance lumineuse et apaisante',
		imageSecondarySrc: '/images/home/clinic-secondary.webp',
		imageSecondaryAlt: 'Détail de l\'espace de consultation à la clinique AJ',
	},
	authority: {
		statements: [
			'Soins définis selon le jugement médical',
			'Résultats naturels et progressifs',
			'Des plans pensés pour chaque situation',
		],
	},
	finalCta: {
		h2: 'Commencez par une évaluation',
		body: 'La première étape consiste à comprendre votre situation et à définir la bonne voie.',
		cta: 'SOLICITAR VALORACIÓN',
	},
};

export const homeContent: Record<Locale, HomeContent> = {
	es,
	en,
	ca,
	fr,
};
