import { BookingFlowError } from './types';

declare global {
	interface Window {
		grecaptcha?: {
			ready: (cb: () => void) => void;
			execute: (siteKey: string, opts: { action: string }) => Promise<string>;
		};
	}
}

function loadRecaptchaScript(siteKey: string): Promise<void> {
	const marker = `data-nubimed-recaptcha="${siteKey}"`;
	if (document.querySelector(`script[${marker}]`)) return Promise.resolve();
	return new Promise((resolve, reject) => {
		const s = document.createElement('script');
		s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
		s.async = true;
		s.setAttribute('data-nubimed-recaptcha', siteKey);
		s.onload = () => resolve();
		s.onerror = () => reject(new BookingFlowError('network', 'No se pudo cargar reCAPTCHA'));
		document.head.appendChild(s);
	});
}

/**
 * reCAPTCHA v3 token for Nubimed (site key comes from /new HTML).
 * El dominio actual debe estar autorizado en la clave del portal o la peticion fallara.
 */
export async function executeRecaptchaForBooking(siteKey: string): Promise<string> {
	if (typeof window === 'undefined' || typeof document === 'undefined') {
		throw new BookingFlowError('parse', 'reCAPTCHA solo en navegador');
	}
	await loadRecaptchaScript(siteKey);
	const g = window.grecaptcha;
	if (!g) {
		throw new BookingFlowError('parse', 'API reCAPTCHA no disponible');
	}
	const runExecute = async (): Promise<string> => {
		if (typeof g.execute !== 'function') {
			throw new BookingFlowError('parse', 'API reCAPTCHA no disponible');
		}
		try {
			return await g.execute(siteKey, { action: 'cita_peticiones' });
		} catch {
			return await g.execute(siteKey, { action: 'submit' });
		}
	};
	return new Promise((resolve, reject) => {
		const start = () => {
			void runExecute().then(resolve, reject);
		};
		if (typeof g.ready === 'function') {
			g.ready(start);
		} else {
			start();
		}
	});
}
