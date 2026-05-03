import { useCallback, useEffect, useState } from 'preact/hooks';
import type { Locale } from '../i18n/config';
import { cookieConsentByLocale } from '../i18n/cookie-consent-strings';

export const COOKIE_CONSENT_STORAGE_KEY = 'webaj_cookie_consent_v1';

type ConsentDecision = 'accepted' | 'rejected' | 'configured';

type StoredConsent = {
	v: 1;
	decision: ConsentDecision;
	/** Reservado si en el futuro se añade analitica opcional. */
	analyticsOptIn?: boolean;
};

function parseStored(raw: string | null): StoredConsent | null {
	if (!raw) return null;
	try {
		const j = JSON.parse(raw) as unknown;
		if (!j || typeof j !== 'object') return null;
		const o = j as Record<string, unknown>;
		if (o.v !== 1) return null;
		if (o.decision !== 'accepted' && o.decision !== 'rejected' && o.decision !== 'configured') return null;
		return {
			v: 1,
			decision: o.decision,
			analyticsOptIn: typeof o.analyticsOptIn === 'boolean' ? o.analyticsOptIn : undefined,
		};
	} catch {
		return null;
	}
}

export interface CookieConsentProps {
	lang: Locale;
}

export default function CookieConsent({ lang }: CookieConsentProps) {
	const copy = cookieConsentByLocale[lang];
	const [mounted, setMounted] = useState(false);
	const [visible, setVisible] = useState(false);
	const [panelOpen, setPanelOpen] = useState(false);

	useEffect(() => {
		setMounted(true);
		const existing = parseStored(localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY));
		setVisible(!existing);
	}, []);

	const persist = useCallback((decision: ConsentDecision, analyticsOptIn?: boolean) => {
		const payload: StoredConsent = { v: 1, decision, analyticsOptIn };
		localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(payload));
		setVisible(false);
		setPanelOpen(false);
	}, []);

	if (!mounted || !visible) return null;

	const policyHref = `/${lang}/cookies/#tipos`;

	return (
		<div class="cookie-consent" role="dialog" aria-label={copy.bannerTitle} aria-modal="false">
			<div class="cookie-consent__inner">
				<div class="cookie-consent__text">
					<p class="cookie-consent__title">{copy.bannerTitle}</p>
					<p class="cookie-consent__body">{copy.bannerBody}</p>
				</div>
				<div class="cookie-consent__actions">
					<button type="button" class="cookie-consent__btn cookie-consent__btn--primary" onClick={() => persist('accepted')}>
						{copy.accept}
					</button>
					<button type="button" class="cookie-consent__btn" onClick={() => persist('rejected')}>
						{copy.reject}
					</button>
					<button
						type="button"
						class="cookie-consent__btn"
						onClick={() => setPanelOpen((o) => !o)}
						aria-expanded={panelOpen}
					>
						{copy.configure}
					</button>
				</div>
				{panelOpen ? (
					<div class="cookie-consent__panel" id="cookie-consent-panel">
						<h3 class="cookie-consent__panel-title">{copy.panelTitle}</h3>
						<section class="cookie-consent__cat">
							<h4>{copy.panelNecessaryTitle}</h4>
							<p>{copy.panelNecessaryBody}</p>
						</section>
						<section class="cookie-consent__cat">
							<h4>{copy.panelSecurityTitle}</h4>
							<p>{copy.panelSecurityBody}</p>
						</section>
						<section class="cookie-consent__cat">
							<h4>{copy.panelMeasurementTitle}</h4>
							<p>{copy.panelMeasurementBody}</p>
						</section>
						<p class="cookie-consent__policy-link">
							<a href={policyHref}>{copy.policyLink}</a>
						</p>
						<div class="cookie-consent__panel-actions">
							<button type="button" class="cookie-consent__btn cookie-consent__btn--primary" onClick={() => persist('configured', false)}>
								{copy.savePrefs}
							</button>
							<button type="button" class="cookie-consent__btn" onClick={() => setPanelOpen(false)}>
								{copy.closePanel}
							</button>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}
