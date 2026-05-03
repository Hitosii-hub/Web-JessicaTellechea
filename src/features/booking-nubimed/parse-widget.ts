import { BookingFlowError } from './types';
import type { BootstrapSession } from './types';

function pickCsrf(doc: Document): string | undefined {
	const meta = doc.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
	if (meta?.trim()) return meta.trim();
	const input = doc.querySelector<HTMLInputElement>('input[name="authenticity_token"]');
	if (input?.value?.trim()) return input.value.trim();
	const m = /<meta\s+name=["']csrf-token["']\s+content=["']([^"']+)["']/i.exec(doc.documentElement?.outerHTML ?? '');
	return m?.[1]?.trim();
}

function pickMaxDias(html: string, fallback: number): number {
	const meta = /<meta[^>]+name=["']maximo[_-]?dias["'][^>]+content=["'](\d+)["']/i.exec(html);
	if (meta) return Math.max(1, parseInt(meta[1], 10));
	const data = /data-max(?:imo)?-dias=["'](\d+)["']/i.exec(html);
	if (data) return Math.max(1, parseInt(data[1], 10));
	const js = /maximo_dias["']?\s*[:=]\s*(\d+)/i.exec(html);
	if (js) return Math.max(1, parseInt(js[1], 10));
	return fallback;
}

function pickNewPath(html: string, clinicaId: number): string {
	const m = /(\/clinicas\/\d+\/cita_peticiones\/new[^\s"'<>]*)/.exec(html);
	if (m?.[1]) {
		const path = m[1].split('?')[0];
		if (path.startsWith('/')) return path;
	}
	return `/clinicas/${clinicaId}/cita_peticiones/new`;
}

/**
 * Parse vendor widget HTML into session fields (defensive; REQ-10).
 */
export function parseWidgetHtml(html: string, clinicaId: number): BootstrapSession {
	if (!html || html.length < 50) {
		throw new BookingFlowError('parse', 'Empty or truncated widget HTML');
	}
	let doc: Document;
	try {
		doc = new DOMParser().parseFromString(html, 'text/html');
	} catch {
		throw new BookingFlowError('parse', 'DOMParser failed');
	}
	const csrf = pickCsrf(doc);
	if (!csrf) {
		throw new BookingFlowError('parse', 'Missing CSRF token in widget HTML');
	}
	const maxDias = pickMaxDias(html, 61);
	const newEntryPath = pickNewPath(html, clinicaId);
	return {
		csrfToken: csrf,
		clinicaId,
		maxDias: Math.min(Math.max(maxDias, 1), 365),
		newEntryPath,
	};
}
