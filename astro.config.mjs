// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(import.meta.env.MODE, process.cwd(), '');
const raw = env.SITE_URL || 'https://www.webaj.placeholder';
const site = raw.replace(/\/+$/, '') || 'https://www.webaj.placeholder';

// SITE_URL in .env (see .env.example). Trailing slashes are stripped.
export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [
		sitemap({
			filter: (page) => !page.includes('/reservar-cita'),
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
