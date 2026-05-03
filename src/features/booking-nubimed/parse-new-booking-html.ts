import { BookingFlowError } from './types';

export interface ParsedNewBookingPage {
	readonly actionPath: string;
	/** Name/value from form inputs (checkboxes only if checked in server HTML). */
	readonly fieldDefaults: Record<string, string>;
	readonly recaptchaSiteKey: string | null;
}

function pickRecaptchaSiteKey(html: string): string | null {
	const m = /recaptcha\/api\.js\?render=([^&"'>\s]+)/.exec(html);
	return m?.[1] ? decodeURIComponent(m[1]) : null;
}

/**
 * Parse `GET .../cita_peticiones/new` HTML: form action, defaults, optional reCAPTCHA v3 site key.
 */
export function parseNewBookingHtml(html: string, clinicaId: number): ParsedNewBookingPage {
	if (!html || html.length < 200) {
		throw new BookingFlowError('parse', 'Empty or truncated /new booking HTML');
	}
	let doc: Document;
	try {
		doc = new DOMParser().parseFromString(html, 'text/html');
	} catch {
		throw new BookingFlowError('parse', 'DOMParser failed on /new HTML');
	}
	const form = doc.querySelector('form#wizard-citas-form');
	if (!form) {
		throw new BookingFlowError('parse', 'Missing #wizard-citas-form on /new page');
	}
	let action = form.getAttribute('action')?.trim() || '';
	if (!action.startsWith('/')) action = `/${action}`;
	if (!action.includes('cita_peticiones')) {
		action = `/clinicas/${clinicaId}/cita_peticiones`;
	}
	const fieldDefaults: Record<string, string> = {};
	const elements = form.querySelectorAll('input, textarea, select');
	for (const el of elements) {
		const input = el as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
		const name = input.name?.trim();
		if (!name) continue;
		if (input instanceof HTMLInputElement) {
			const type = (input.type || 'text').toLowerCase();
			if (type === 'checkbox' || type === 'radio') {
				if (input.checked) fieldDefaults[name] = input.value || 'on';
				continue;
			}
		}
		fieldDefaults[name] = input.value ?? '';
	}
	return {
		actionPath: action,
		fieldDefaults,
		recaptchaSiteKey: pickRecaptchaSiteKey(html),
	};
}
