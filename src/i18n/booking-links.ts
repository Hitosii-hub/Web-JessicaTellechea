import type { Locale } from './config';
import { href } from './route-registry';

/** Booking URL with specialty preset query (e.g. capilar hub). */
export function bookingUrlWithPreset(lang: Locale, preset: string): string {
	const base = href(lang, 'booking');
	const join = base.includes('?') ? '&' : '?';
	return `${base}${join}preset=${encodeURIComponent(preset)}`;
}
