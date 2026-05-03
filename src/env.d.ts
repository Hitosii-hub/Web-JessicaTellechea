/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_NUBIMED_CLINICA_ID?: string;
	readonly PUBLIC_NUBIMED_VENDOR_ORIGIN?: string;
	readonly PUBLIC_NUBIMED_PROXY_URL?: string;
	readonly PUBLIC_NUBIMED_PORTAL_NEW_URL?: string;
	readonly PUBLIC_BOOKING_URL?: string;
	readonly PUBLIC_LEGAL_CONTROLLER_NAME?: string;
	readonly PUBLIC_LEGAL_CONTROLLER_NIF?: string;
	readonly PUBLIC_LEGAL_CONTROLLER_ADDRESS?: string;
	readonly PUBLIC_LEGAL_CONTROLLER_EMAIL?: string;
	readonly PUBLIC_LEGAL_DPO_EMAIL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
