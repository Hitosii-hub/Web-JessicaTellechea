/**
 * Datos identificativos del responsable (build-time, sin secretos).
 * Sustituir vía variables PUBLIC_* documentadas en `.env.example`.
 */
export type LegalControllerResolved = {
	legalName: string;
	legalNif: string;
	legalAddress: string;
	legalEmail: string;
	dpoEmail: string;
};

function envStr(key: string): string {
	const v = import.meta.env[key];
	return typeof v === 'string' ? v.trim() : '';
}

export function legalControllerResolved(): LegalControllerResolved {
	const legalEmail =
		envStr('PUBLIC_LEGAL_CONTROLLER_EMAIL') || '[correo-de-contacto@dominio]';
	return {
		legalName:
			envStr('PUBLIC_LEGAL_CONTROLLER_NAME') || '[Nombre comercial del responsable del tratamiento]',
		legalNif: envStr('PUBLIC_LEGAL_CONTROLLER_NIF') || '[NIF/CIF]',
		legalAddress: envStr('PUBLIC_LEGAL_CONTROLLER_ADDRESS') || '[Domicilio social completo]',
		legalEmail,
		dpoEmail: envStr('PUBLIC_LEGAL_DPO_EMAIL') || legalEmail,
	};
}
