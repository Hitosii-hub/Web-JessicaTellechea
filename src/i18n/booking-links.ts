import type { Locale } from './config';
import { href } from './route-registry';

/**
 * Query `preset` value for Nubimed vendor specialty id 3 (Medicina estética).
 * @see SPECIALTY_CATALOG in `src/features/booking-nubimed/config.ts`
 */
export const BOOKING_PRESET_VENDOR_MEDICINA_ESTETICA = '3';

/** Booking URL with specialty preset query (e.g. capilar hub). */
export function bookingUrlWithPreset(lang: Locale, preset: string): string {
	const base = href(lang, 'booking');
	const join = base.includes('?') ? '&' : '?';
	return `${base}${join}preset=${encodeURIComponent(preset)}`;
}
