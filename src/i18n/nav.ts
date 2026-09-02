import type { IaKey } from './route-registry';

import type { Locale } from './config';
import { blogPublic } from './site-features';

export type PrimaryNavIaKey = Exclude<IaKey, 'booking'>;

export type NavItem = { iaKey: PrimaryNavIaKey; label: Record<Locale, string> };

const blogNavItem: NavItem = {
	iaKey: 'blog',
	label: { es: 'Blog', en: 'Blog', ca: 'Blog', fr: 'Blog' },
};

/** Primary nav: no booking route (docs/site-architecture.md). Blog gated by `blogPublic`. */
export const primaryNavItems: NavItem[] = [
	{ iaKey: 'home', label: { es: 'Inicio', en: 'Home', ca: 'Inici', fr: 'Accueil' } },
	{ iaKey: 'facial', label: { es: 'Facial', en: 'Facial', ca: 'Facial', fr: 'Visage' } },
	{ iaKey: 'corporal', label: { es: 'Corporal', en: 'Body', ca: 'Corporal', fr: 'Corporel' } },
	{ iaKey: 'capilar', label: { es: 'Capilar', en: 'Hair', ca: 'Capil·lar', fr: 'Capillaire' } },
	{
		iaKey: 'trust',
		label: {
			es: 'Criterio medico',
			en: 'Medical Criteria',
			ca: 'Criteri mèdic',
			fr: 'Critère médical',
		},
	},
	...(blogPublic ? [blogNavItem] : []),
	{ iaKey: 'contact', label: { es: 'Contacto', en: 'Contact', ca: 'Contacte', fr: 'Contact' } },
];

/** Header RESERVAR CITA — uppercase compact pattern per interview spec §1. */
export const headerBookingCta: Record<Locale, string> = {
	es: 'RESERVAR CITA',
	en: 'BOOK APPOINTMENT',
	ca: 'RESERVAR CITA',
	fr: 'PRENDRE RENDEZ-VOUS',
};
