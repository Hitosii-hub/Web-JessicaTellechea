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
		title: 'Blog Dra. Jessica Tellechea',
		description:
			'Un espacio dedicado al rigor médico y la estética consciente. La intersección entre la ciencia avanzada y la preservación de la armonía natural.',
	},
	hero: {
		h1: 'Blog Dra. Jessica Tellechea',
		lead:
			'Un espacio dedicado al rigor médico y la estética consciente. La intersección entre la ciencia avanzada y la preservación de la armonía natural.',
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
			'La verdadera maestría en medicina estética no reside en el cambio drástico, sino en la restauración sutil de los volúmenes y la luminosidad perdida. Un enfoque progresivo que garantiza resultados imperceptibles pero transformadores.',
		imageSrc: '/images/home/clinic-primary.webp',
		imageAlt:
			'Fotografía macro editorial de sérums de skincare de alta gama sobre una superficie de microcemento con luz natural suave, sombras delicadas y una atmósfera clínica minimalista en tonos beige y gris cálido.',
		href: '/blog/rejuvenecimiento-progresivo/',
		linkLabel: 'LEER ARTÍCULO',
	},
	articles: [
		{
			category: 'Guía Médica',
			title: 'Cómo elegir una consulta médica estética en Barcelona o Tarragona',
			description:
				'Criterios fundamentales para identificar una práctica comprometida con la ética médica y la seguridad del paciente más allá del marketing.',
			imageSrc: '/images/home/clinic-secondary.webp',
			imageAlt:
				'Sala de consulta médica premium con acentos minimalistas de madera, sillón crema de piel y luz natural difusa. Ambiente sereno pensado para valoraciones médicas privadas.',
		},
		{
			category: 'Salud Capilar',
			title: 'Mesoterapia capilar y PRP: cuándo se utilizan',
			description:
				'Diferencias técnicas y sinergias entre los bioestimuladores capilares para tratar el efluvio telógeno y la alopecia inicial.',
			imageSrc: '/images/home/capillary.webp',
			imageAlt:
				'Macro artístico de textura de piel bajo luz médica focalizada, con tonos cálidos y técnica fotográfica editorial que destaca la salud y el detalle dermatológico.',
			href: '/blog/capilar-diagnostico/',
		},
		{
			category: 'Tratamientos',
			title: 'Bótox y bioestimuladores: diferencias básicas',
			description:
				'Entender la diferencia entre relajar el músculo y regenerar el colágeno propio es la clave para un plan de antienvejecimiento inteligente.',
			imageSrc: '/images/home/treatment-facial.webp',
			imageAlt:
				'Detalle arquitectónico de un espacio wellness de alta gama con iluminación indirecta suave sobre pared texturizada de cal y un jarrón cerámico orgánico. Estética de lujo silencioso y minimalismo mediterráneo.',
		},
	],
	authority: {
		eyebrow: 'Filosofía',
		title: 'Información para decidir con criterio',
		quote:
			'"En medicina estética, creo que el paciente mejor informado es el que obtiene los mejores resultados. No sigo tendencias; aplico medicina basada en la anatomía individual para potenciar la identidad única de cada rostro."',
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
				'Flat-lay sofisticado de productos de skincare de grado médico y una agenda clínica minimalista sobre mesa de piedra clara, con iluminación limpia que evoca excelencia organizativa y foco científico.',
		},
		{
			category: 'Tendencias',
			title: 'La medicina regenerativa: el futuro de la estética',
			description:
				'Cómo los nuevos inductores de tejidos están cambiando el paradigma del relleno tradicional.',
		},
	],
	newsletter: {
		title: 'Suscríbase al boletín médico',
		body:
			'Reciba bimensualmente reflexiones sobre medicina estética, novedades en tratamientos y recomendaciones dermatológicas exclusivas.',
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
