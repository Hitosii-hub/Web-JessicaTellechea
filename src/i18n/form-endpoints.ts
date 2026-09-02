/** True when the env value is missing or still a placeholder. */
function isUnsetFormPostUrl(value: string | undefined): boolean {
	if (!value) return true;
	return value.includes('placeholder');
}

/**
 * Contact/valoración forms on static hosting POST to a third-party endpoint.
 * Uses `PUBLIC_FORM_POST_URL` when set; otherwise FormSubmit.co → `PUBLIC_CLINIC_EMAIL`.
 */
export function resolveContactFormPostUrl(clinicEmail: string): string | undefined {
	const configured = import.meta.env.PUBLIC_FORM_POST_URL?.trim();
	if (!isUnsetFormPostUrl(configured)) return configured;

	const email = clinicEmail.trim();
	if (!email.includes('@')) return undefined;

	return `https://formsubmit.co/${encodeURIComponent(email)}`;
}

export function contactFormUsesFormSubmitFallback(clinicEmail: string): boolean {
	const configured = import.meta.env.PUBLIC_FORM_POST_URL?.trim();
	return isUnsetFormPostUrl(configured) && clinicEmail.trim().includes('@');
}
