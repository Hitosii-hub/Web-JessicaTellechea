import type { APIRoute } from 'astro';
import { locales } from '../i18n/config';
import { segmentFor } from '../i18n/route-registry';

/** Fallback when `site` is unset (local dev without `.env`). Mirrors `astro.config.mjs`. */
const PLACEHOLDER_ORIGIN = 'https://www.webaj.placeholder';

export const GET: APIRoute = ({ site }) => {
	const base = site ?? new URL(PLACEHOLDER_ORIGIN);
	const origin = base.origin.replace(/\/+$/, '');
	const lines = [
		'User-agent: *',
		'Allow: /',
		'',
		'# Ruta utilitaria de reserva: no indexar (ver meta robots en pagina).',
	];
	for (const locale of locales) {
		const seg = segmentFor(locale, 'booking');
		lines.push(`Disallow: /${locale}/${seg}/`);
	}
	lines.push('');
	lines.push(`Sitemap: ${origin}/sitemap-index.xml`);
	const body = `${lines.join('\n')}\n`;
	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
