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

/** Booking URL with specialty + treatment preselected. */
export function bookingUrlWithPresetAndTreatment(lang: Locale, preset: string, treatment: string): string {
	const withPreset = bookingUrlWithPreset(lang, preset);
	const join = withPreset.includes('?') ? '&' : '?';
	return `${withPreset}${join}treatment=${encodeURIComponent(treatment)}`;
}

/**
 * Release 1 CTA target: WhatsApp when `PUBLIC_WHATSAPP_E164` is set,
 * localised contact page otherwise. Replaces every site-wide link that
 * previously routed to the deferred `booking` IaKey. `external` is `true`
 * only for the WhatsApp resolution — internal fallbacks must stay same-tab.
 */
export function resolveBookingCta(lang: Locale): { href: string; external: boolean } {
	const whatsapp = import.meta.env.PUBLIC_WHATSAPP_E164?.trim();
	return whatsapp
		? { href: `https://wa.me/${whatsapp}`, external: true }
		: { href: href(lang, 'contact'), external: false };
}

