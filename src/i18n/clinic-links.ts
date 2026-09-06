export const DEFAULT_CLINIC_INSTAGRAM = 'https://www.instagram.com/dra.jessicatellechea/';

/** Clinic Instagram profile — env override with product fallback. */
export function resolveClinicInstagram(): string {
	const fromEnv = import.meta.env.PUBLIC_CLINIC_INSTAGRAM?.trim();
	return fromEnv || DEFAULT_CLINIC_INSTAGRAM;
}
