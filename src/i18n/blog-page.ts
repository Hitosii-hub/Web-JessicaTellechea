import type { Locale } from './config';

interface BlogCategory {
	label: string;
	active?: boolean;
}

interface BlogArticle {
	category: string;
	title: string;
	description: string;
	imageSrc?: string;
	imageAlt?: string;
	href?: string;
}

interface BlogIndexContent {
	seo: {
		title: string;
		description: string;
	};
	hero: {
		h1: string;
		lead: string;
	};
	categories: BlogCategory[];
	featured: BlogArticle & {
		eyebrow: string;
		linkLabel: string;
	};
	articles: BlogArticle[];
	authority: {
		eyebrow: string;
		title: string;
		quote: string;
		stats: { value: string; label: string }[];
	};
	moreArticles: BlogArticle[];
	newsletter: {
		title: string;
		body: string;
		placeholder: string;
		button: string;
	};
	finalCta: {
		eyebrow: string;
		h2: string;
		cta: string;
	};
	labels: {
		readArticle: string;
	};
}

const spanishBlogIndexContent: BlogIndexContent = {
	seo: {
		title: 'Blog AJ Clínica',
		description:
			'Un espacio dedicado al rigor médico y la estética consciente. Exploramos la intersección entre la ciencia avanzada y la preservación de la armonía natural.',
	},
	hero: {
		h1: 'Blog AJ Clínica',
		lead:
			'Un espacio dedicado al rigor médico y la estética consciente. Exploramos la intersección entre la ciencia avanzada y la preservación de la armonía natural.',
	},
	categories: [
		{ label: 'Todos los artículos', active: true },
		{ label: 'Medicina estética facial' },
		{ label: 'Medicina estética corporal' },
		{ label: 'Salud Capilar' },
		{ label: 'Cuidado Dermatológico' },
	],
	featured: {
		eyebrow: 'Destacado',
		category: 'Destacado',
		title: 'Qué significa rejuvenecimiento natural',
		description:
			'La verdadera maestría en medicina estética no reside en el cambio drástico, sino en la restauración sutil de los volúmenes y la luminosidad perdida. Analizamos cómo el enfoque progresivo garantiza resultados imperceptibles pero transformadores.',
		imageSrc: '/images/home/clinic-primary.webp',
		imageAlt:
			'A macro, editorial photograph of high-end skincare serums on a microcement surface with natural, soft morning light casting gentle shadows. The composition is clean and minimalist, reflecting a luxurious clinical atmosphere with neutral beige and warm grey tones. The focus is sharp on the glass textures and liquid drops, conveying purity and medical precision.',
		href: '/blog/rejuvenecimiento-progresivo/',
		linkLabel: 'LEER ARTÍCULO',
	},
	articles: [
		{
			category: 'Guía Médica',
			title: 'Cómo elegir una clínica estética en Barcelona',
			description:
				'Criterios fundamentales para identificar un centro comprometido con la ética médica y la seguridad del paciente más allá del marketing.',
			imageSrc: '/images/home/clinic-secondary.webp',
			imageAlt:
				'Close-up of a professional medical consultation room in a luxury clinic in Barcelona. The aesthetic is warm and inviting, featuring minimalist wooden accents, a soft cream leather chair, and a large window providing diffuse natural light. The atmosphere is serene, focusing on the calm and private environment where medical assessments take place.',
		},
		{
			category: 'Salud Capilar',
			title: 'Mesoterapia capilar y PRP: cuándo se utilizan',
			description:
				'Diferencias técnicas y sinergias entre los bioestimuladores capilares para tratar el efluvio telógeno y la alopecia inicial.',
			imageSrc: '/images/home/capillary.webp',
			imageAlt:
				'An artistic, macro shot of clean skin texture under soft, focused medical lighting. The image emphasizes the health and detail of human skin in a non-clinical, editorial way, using warm lighting and high-end photographic techniques. The palette consists of soft flesh tones and neutral backgrounds, conveying a sense of care and advanced dermatological science.',
			href: '/blog/capilar-diagnostico/',
		},
		{
			category: 'Tratamientos',
			title: 'Bótox y bioestimuladores: diferencias básicas',
			description:
				'Entender la diferencia entre relajar el músculo y regenerar el colágeno propio es la clave para un plan de antienvejecimiento inteligente.',
			imageSrc: '/images/home/treatment-facial.webp',
			imageAlt:
				'A minimalist architectural detail of a high-end wellness space. Soft, indirect lighting illuminates a textured lime-wash wall, creating a soothing play of light and shadow. In the foreground, a single organic-shaped ceramic vase sits on a stone surface, embodying the philosophy of silent luxury and Mediterranean minimalism that defines the clinic aesthetic.',
		},
	],
	authority: {
		eyebrow: 'Nuestra Filosofía',
		title: 'Información para decidir con criterio',
		quote:
			'"En AJ Clínica, creemos que el paciente mejor informado es el que obtiene los mejores resultados. No seguimos tendencias; aplicamos medicina basada en la anatomía individual para potenciar la identidad única de cada rostro."',
		stats: [
			{ value: '98%', label: 'Satisfacción Médica' },
			{ value: '15+', label: 'Años de Especialidad' },
		],
	},
	moreArticles: [
		{
			category: 'Metodología',
			title: 'Cómo construir un plan estético progresivo',
			description:
				'El secreto del éxito reside en la planificación a largo plazo, evitando intervenciones súbitas.',
			imageSrc: '/images/home/clinic-primary.webp',
			imageAlt:
				'A sophisticated flat-lay photograph of medical-grade skincare products and a minimalist clinical agenda on a light stone table. The lighting is bright and clean, mimicking a professional workspace in a premium medical center. The color palette is dominated by whites, soft beiges, and subtle metallic accents, emphasizing organizational excellence and scientific focus.',
		},
		{
			category: 'Tendencias',
			title: 'La medicina regenerativa: el futuro de la estética',
			description:
				'Cómo los nuevos inductores de tejidos están cambiando el paradigma del relleno tradicional.',
		},
	],
	newsletter: {
		title: 'Suscríbase a nuestro boletín médico',
		body:
			'Reciba bimensualmente nuestras reflexiones sobre medicina estética, novedades en tratamientos y recomendaciones dermatológicas exclusivas.',
		placeholder: 'Correo electrónico',
		button: 'SUSCRIBIRSE',
	},
	finalCta: {
		eyebrow: 'Inicie su proceso',
		h2: 'Empieza con una valoración médica',
		cta: 'Solicitar Cita de Diagnóstico',
	},
	labels: {
		readArticle: 'Leer artículo',
	},
};

export const blogIndexContent: Record<Locale, BlogIndexContent> = {
	es: spanishBlogIndexContent,
	en: spanishBlogIndexContent,
	ca: spanishBlogIndexContent,
	fr: spanishBlogIndexContent,
};

export const blogIndexMeta: Record<Locale, { title: string; heading: string; intro: string }> = {
	es: {
		title: blogIndexContent.es.seo.title,
		heading: blogIndexContent.es.hero.h1,
		intro: blogIndexContent.es.seo.description,
	},
	en: {
		title: blogIndexContent.en.seo.title,
		heading: blogIndexContent.en.hero.h1,
		intro: blogIndexContent.en.seo.description,
	},
	ca: {
		title: blogIndexContent.ca.seo.title,
		heading: blogIndexContent.ca.hero.h1,
		intro: blogIndexContent.ca.seo.description,
	},
	fr: {
		title: blogIndexContent.fr.seo.title,
		heading: blogIndexContent.fr.hero.h1,
		intro: blogIndexContent.fr.seo.description,
	},
};
