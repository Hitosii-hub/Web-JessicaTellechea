// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(import.meta.env.MODE, process.cwd(), '');
const raw = env.SITE_URL || 'https://www.webaj.placeholder';
const site = raw.replace(/\/+$/, '') || 'https://www.webaj.placeholder';

/** Dev-only: same-origin prefix so fetch() avoids browser CORS to the portal. */
const nubimedVendorTarget =
	(env.PUBLIC_NUBIMED_VENDOR_ORIGIN || 'https://portal.clinicaenlanube.com').replace(/\/+$/, '');

const nubimedProxy = {
	target: nubimedVendorTarget,
	changeOrigin: true,
	secure: true,
	/** @param {string} path */
	rewrite: (path) => path.replace(/^\/__nubimed-proxy/, '') || '/',
	/** El navegador no puede fijar Referer en fetch; el portal a veces exige Referer del widget. */
	/** @param {*} proxy */
	configure: (proxy) => {
		proxy.on('proxyReq', (/** @type {*} */ proxyReq) => {
			const p = proxyReq.path || '';
			const m = p.match(/\/clinicas\/(\d+)\//);
			if (m?.[1]) {
				proxyReq.setHeader('Referer', `${nubimedVendorTarget}/clinicas/${m[1]}/cita_peticiones/widget`);
			}
		});
	},
};

/** Booking URL segments per locale (keep aligned with `src/i18n/route-registry.ts`). */
const bookingUrlSegments = ['reservar-cita', 'book-appointment', 'reserver-rendez-vous'];

/** Blog deferred at launch — set false when `blogPublic` is true in `src/i18n/site-features.ts`. */
const blogHiddenFromSitemap = true;

// SITE_URL in .env (see `.env.example`). Trailing slashes are stripped.
export default defineConfig({
	site,
	trailingSlash: 'always',
	vite: {
		plugins: [tailwindcss()],
		server: {
			proxy: {
				'/__nubimed-proxy': nubimedProxy,
			},
		},
		preview: {
			proxy: {
				'/__nubimed-proxy': nubimedProxy,
			},
		},
	},
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
		preact(),
		sitemap({
			filter: (page) => {
				if (bookingUrlSegments.some((seg) => page.includes(`/${seg}/`))) return false;
				if (blogHiddenFromSitemap && page.includes('/blog/')) return false;
				return true;
			},
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
