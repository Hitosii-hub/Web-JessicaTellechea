import type { Locale } from './config';

export type NavItem = { segment: string; label: Record<Locale, string> };

/** Primary nav: no reservar-cita (docs/site-architecture.md). */
export const primaryNavItems: NavItem[] = [
	{ segment: '', label: { es: 'Inicio', en: 'Home', ca: 'Inici', fr: 'Accueil' } },
	{ segment: 'facial', label: { es: 'Facial', en: 'Facial', ca: 'Facial', fr: 'Facial' } },
	{ segment: 'corporal', label: { es: 'Corporal', en: 'Body', ca: 'Corporal', fr: 'Corps' } },
	{ segment: 'capilar', label: { es: 'Capilar', en: 'Hair', ca: 'Capil.lar', fr: 'Capillaire' } },
	{
		segment: 'criterio-medico',
		label: { es: 'Criterio medico', en: 'Medical criteria', ca: 'Criteri medic', fr: 'Criteres' },
	},
	{ segment: 'blog', label: { es: 'Blog', en: 'Blog', ca: 'Blog', fr: 'Blog' } },
	{ segment: 'contacto', label: { es: 'Contacto', en: 'Contact', ca: 'Contacte', fr: 'Contact' } },
];
