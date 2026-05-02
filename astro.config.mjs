// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(import.meta.env.MODE, process.cwd(), '');
const raw = env.SITE_URL || 'https://www.webaj.placeholder';
const site = raw.replace(/\/+$/, '') || 'https://www.webaj.placeholder';

/** Booking URL segments per locale (keep aligned with `src/i18n/route-registry.ts`). */
const bookingUrlSegments = ['reservar-cita', 'book-appointment', 'reserver-rendez-vous'];

// SITE_URL in .env (see .env.example). Trailing slashes are stripped.
export default defineConfig({
	site,
	trailingSlash: 'always',
	redirects: {
		'/en/corporal/': '/en/body/',
		'/en/capilar/': '/en/hair/',
		'/en/criterio-medico/': '/en/medical-criteria/',
		'/en/contacto/': '/en/contact/',
		'/en/reservar-cita/': '/en/book-appointment/',
		'/fr/facial/': '/fr/visage/',
		'/fr/corporal/': '/fr/corporel/',
		'/fr/capilar/': '/fr/capillaire/',
		'/fr/criterio-medico/': '/fr/critere-medical/',
		'/fr/contacto/': '/fr/contact/',
		'/fr/reservar-cita/': '/fr/reserver-rendez-vous/',
		'/ca/capilar/': '/ca/capillar/',
		'/ca/criterio-medico/': '/ca/criteri-medic/',
	},
	integrations: [
		sitemap({
			filter: (page) => !bookingUrlSegments.some((seg) => page.includes(`/${seg}/`)),
			i18n: {
				defaultLocale: 'es',
				locales: {
					es: 'es',
					en: 'en',
					ca: 'ca',
					fr: 'fr',
				},
			},
		}),
	],
});
