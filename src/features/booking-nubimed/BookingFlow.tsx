import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { catalogEntryBySlugOrId, labelFor, SPECIALTY_CATALOG } from './config';
import { vendorLocaleFromSite, t } from './i18n';
import type { NewUrlSelection } from './build-new-url';
import { GateBlockedError, createNubimedClient } from './client';
import {
	compareYmd,
	ddmmyyyyToYmd,
	effectiveHorizonDays,
	maxSelectableYmd,
	todayYmdMadrid,
	ymdToDdMmYyyy,
} from './horizon';
import { parseWidgetHtml } from './parse-widget';
import { parseNewBookingHtml } from './parse-new-booking-html';
import { buildBookingSubmitBody } from './booking-submit-merge'; // hiddens Nubimed: ./nubimed-portal-submit-fields.ts
import { executeRecaptchaForBooking } from './recaptcha';
import { BookingFlowError } from './types';
import type { BookingFlowProps, BootstrapSession, SiteLocale, Slot } from './types';
import type { SpecialtyCatalogEntry } from './config';

type Phase = 'pick' | 'details' | 'success';

function nubimedBaseUrl(): string {
	const proxy = import.meta.env.PUBLIC_NUBIMED_PROXY_URL?.trim();
	const vendor = import.meta.env.PUBLIC_NUBIMED_VENDOR_ORIGIN?.trim();
	const explicitProxy = (proxy || '').replace(/\/$/, '');
	if (explicitProxy) return explicitProxy;
	if (import.meta.env.DEV && vendor && typeof globalThis !== 'undefined' && 'location' in globalThis) {
		const origin = (globalThis as unknown as Window).location?.origin;
		if (origin?.startsWith('http')) {
			return `${origin}/__nubimed-proxy`.replace(/\/$/, '');
		}
	}
	return (vendor || '').replace(/\/$/, '');
}

function portalFallbackUrl(clinicaId: number): string {
	const custom = import.meta.env.PUBLIC_NUBIMED_PORTAL_NEW_URL?.trim();
	if (custom) return custom;
	const vendor = import.meta.env.PUBLIC_NUBIMED_VENDOR_ORIGIN?.trim().replace(/\/$/, '');
	if (!vendor) return '';
	return `${vendor}/clinicas/${clinicaId}/cita_peticiones/new`;
}

function clinicaIdFromEnv(): number {
	return parseInt(import.meta.env.PUBLIC_NUBIMED_CLINICA_ID ?? '0', 10);
}

function normalizeDayToYmd(s: string): string | undefined {
	const t = s.trim();
	if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return t;
	const iso = /^(\d{4}-\d{2}-\d{2})T/.exec(t);
	if (iso) return iso[1];
	return ddmmyyyyToYmd(t);
}

function dayButtonLabel(raw: string): string {
	const ymd = normalizeDayToYmd(raw);
	return ymd ?? raw;
}

function filterDaysByHorizon(days: string[], todayYmd: string, maxYmd: string): string[] {
	const ymds = days
		.map((d) => ({ raw: d, ymd: normalizeDayToYmd(d) }))
		.filter((x): x is { raw: string; ymd: string } => !!x.ymd)
		.filter((x) => compareYmd(x.ymd, todayYmd) >= 0 && compareYmd(x.ymd, maxYmd) <= 0)
		.sort((a, b) => compareYmd(a.ymd, b.ymd));
	return ymds.map((x) => x.raw);
}

function errMessage(e: unknown, lang: SiteLocale): string {
	if (e instanceof GateBlockedError) return t(lang).gateBlocked;
	if (e instanceof BookingFlowError) return e.message;
	if (e instanceof Error) return e.message;
	return t(lang).networkError;
}

function summaryDateTime(slot: Slot, dayRaw: string, lang: SiteLocale): string {
	const ymd = normalizeDayToYmd(dayRaw);
	const datePart = ymd
		? new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : lang, {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
			}).format(new Date(ymd + 'T12:00:00'))
		: dayRaw;
	const timePart = slot.displayLabel?.trim() || slot.iso;
	return `${datePart} — ${timePart}`;
}

export default function BookingFlow({ lang, presetSpecialtySlug }: BookingFlowProps) {
	const strings = t(lang);
	const vendorLoc = vendorLocaleFromSite(lang);
	const clinicaId = clinicaIdFromEnv();
	const baseUrl = nubimedBaseUrl();

	const presetEntry = useMemo(() => {
		if (presetSpecialtySlug == null || presetSpecialtySlug === '') return undefined;
		return catalogEntryBySlugOrId(presetSpecialtySlug);
	}, [presetSpecialtySlug]);

	const invalidPreset =
		presetSpecialtySlug != null && presetSpecialtySlug !== '' && presetEntry === undefined;

	const hasValidPreset =
		presetSpecialtySlug != null && presetSpecialtySlug !== '' && presetEntry !== undefined;
	const showSpecialtyPicker = !hasValidPreset || invalidPreset;

	const [bootstrap, setBootstrap] = useState<BootstrapSession | null>(null);
	const [gateUrl, setGateUrl] = useState<string | null>(null);
	const [bootErr, setBootErr] = useState<string | null>(null);
	const [bootLoading, setBootLoading] = useState(true);

	const [specialty, setSpecialty] = useState<SpecialtyCatalogEntry | null>(() => presetEntry ?? null);

	useEffect(() => {
		if (presetEntry) setSpecialty(presetEntry);
	}, [presetEntry]);
	const [days, setDays] = useState<string[]>([]);
	const [daysLoading, setDaysLoading] = useState(false);
	const [daysErr, setDaysErr] = useState<string | null>(null);

	const [selectedDayRaw, setSelectedDayRaw] = useState<string | null>(null);
	const [slots, setSlots] = useState<Slot[]>([]);
	const [slotsLoading, setSlotsLoading] = useState(false);
	const [slotsErr, setSlotsErr] = useState<string | null>(null);

	const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
	const [professionalId, setProfessionalId] = useState<number | null>(null);

	const [phase, setPhase] = useState<Phase>('pick');
	const [parsedNew, setParsedNew] = useState<ReturnType<typeof parseNewBookingHtml> | null>(null);
	const [detailsLoading, setDetailsLoading] = useState(false);
	const [detailsErr, setDetailsErr] = useState<string | null>(null);
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [patientMode, setPatientMode] = useState<'new' | 'returning'>('new');
	const [npNombre, setNpNombre] = useState('');
	const [npApellidos, setNpApellidos] = useState('');
	const [npPrefijo, setNpPrefijo] = useState('34');
	const [npTel, setNpTel] = useState('');
	const [npEmail, setNpEmail] = useState('');
	const [retDni, setRetDni] = useState('');
	const [retDob, setRetDob] = useState('');
	const [retEmail, setRetEmail] = useState('');
	const [privacyOk, setPrivacyOk] = useState(false);
	const [validationErr, setValidationErr] = useState<string | null>(null);
	const [submitErr, setSubmitErr] = useState<string | null>(null);
	const [submitting, setSubmitting] = useState(false);

	const csrfRef = useRef<string | undefined>(undefined);
	const client = useMemo(
		() =>
			createNubimedClient({
				baseUrl,
				getClinicaId: () => clinicaId,
				getCsrf: () => csrfRef.current,
			}),
		[baseUrl, clinicaId],
	);

	const newUrlSelection = useMemo((): NewUrlSelection | null => {
		if (!specialty || !selectedSlot || !selectedDayRaw) return null;
		if (specialty.clinicaTratamientoId == null) return null;
		const prefTratamientoId = specialty.clinicaTratamientoId;
		const prof =
			selectedSlot.professionalIds.length > 1 ? professionalId : (selectedSlot.professionalIds[0] ?? null);
		if (selectedSlot.professionalIds.length > 1 && professionalId == null) return null;
		return {
			specialtyVendorId: specialty.vendorId,
			prefTratamientoId,
			prefHoraIso: selectedSlot.iso,
			professionalId: prof,
			tipoHorario: specialty.tipoHorario ?? 'presencial',
		};
	}, [specialty, selectedSlot, selectedDayRaw, professionalId]);

	const runBootstrap = useCallback(
		async (signal: AbortSignal) => {
			if (!baseUrl || !clinicaId) {
				setBootErr(strings.networkError);
				setBootLoading(false);
				return;
			}
			setBootLoading(true);
			setBootErr(null);
			setGateUrl(null);
			try {
				const html = await client.fetchBootstrapHtml(signal);
				const session = parseWidgetHtml(html, clinicaId);
				csrfRef.current = session.csrfToken;
				setBootstrap(session);
			} catch (e) {
				if (signal.aborted) return;
				if (e instanceof GateBlockedError) {
					setGateUrl(portalFallbackUrl(clinicaId));
					setBootstrap(null);
				} else {
					setBootErr(errMessage(e, lang));
					setBootstrap(null);
				}
			} finally {
				if (!signal.aborted) setBootLoading(false);
			}
		},
		[baseUrl, clinicaId, client, lang, strings.networkError],
	);

	useEffect(() => {
		const ac = new AbortController();
		void runBootstrap(ac.signal);
		return () => ac.abort();
	}, [runBootstrap]);

	const loadDays = useCallback(
		async (spec: SpecialtyCatalogEntry, signal: AbortSignal) => {
			setDaysLoading(true);
			setDaysErr(null);
			setDays([]);
			setSelectedDayRaw(null);
			setSlots([]);
			setSelectedSlot(null);
			setProfessionalId(null);
			if (spec.clinicaTratamientoId == null) {
				setDaysErr(strings.missingVendorTreatmentId);
				setDaysLoading(false);
				return;
			}
			const tipoHorario = spec.tipoHorario ?? 'presencial';
			try {
				const list = await client.fetchDayStrings(signal, {
					locale: vendorLoc,
					especialidadId: spec.vendorId,
					clinicaTratamientoId: spec.clinicaTratamientoId,
					tipoHorario,
				});
				if (signal.aborted) return;
				if (!bootstrap) {
					setDaysErr(strings.invalidResponse);
					return;
				}
				const todayY = todayYmdMadrid();
				const horizon = effectiveHorizonDays(bootstrap.maxDias);
				const maxY = maxSelectableYmd(todayY, horizon);
				setDays(filterDaysByHorizon(list, todayY, maxY));
			} catch (e) {
				if (signal.aborted) return;
				if (e instanceof GateBlockedError) {
					setGateUrl(portalFallbackUrl(clinicaId));
				} else {
					setDaysErr(errMessage(e, lang));
				}
			} finally {
				if (!signal.aborted) setDaysLoading(false);
			}
		},
		[bootstrap, client, vendorLoc, lang, clinicaId, strings.invalidResponse, strings.missingVendorTreatmentId],
	);

	const daysAbortRef = useRef<AbortController | null>(null);
	useEffect(() => {
		if (!bootstrap || !specialty) return;
		daysAbortRef.current?.abort();
		const ac = new AbortController();
		daysAbortRef.current = ac;
		void loadDays(specialty, ac.signal);
		return () => ac.abort();
	}, [bootstrap, specialty, loadDays]);

	const loadSlots = useCallback(
		async (spec: SpecialtyCatalogEntry, dayRaw: string, signal: AbortSignal) => {
			setSlotsLoading(true);
			setSlotsErr(null);
			setSlots([]);
			setSelectedSlot(null);
			setProfessionalId(null);
			if (spec.clinicaTratamientoId == null) {
				setSlotsErr(strings.missingVendorTreatmentId);
				setSlotsLoading(false);
				return;
			}
			const tipoHorario = spec.tipoHorario ?? 'presencial';
			const ymd = normalizeDayToYmd(dayRaw);
			const diaParam = ymd ? ymdToDdMmYyyy(ymd) : dayRaw;
			try {
				const list = await client.fetchSlots(signal, {
					locale: vendorLoc,
					especialidadId: spec.vendorId,
					diaDDMMYYYY: diaParam,
					clinicaTratamientoId: spec.clinicaTratamientoId,
					tipoHorario,
				});
				if (!signal.aborted) setSlots(list);
			} catch (e) {
				if (signal.aborted) return;
				if (e instanceof GateBlockedError) {
					setGateUrl(portalFallbackUrl(clinicaId));
				} else {
					setSlotsErr(errMessage(e, lang));
				}
			} finally {
				if (!signal.aborted) setSlotsLoading(false);
			}
		},
		[client, vendorLoc, lang, clinicaId, strings.missingVendorTreatmentId],
	);

	const slotsAbortRef = useRef<AbortController | null>(null);
	useEffect(() => {
		if (!specialty || !selectedDayRaw) return;
		slotsAbortRef.current?.abort();
		const ac = new AbortController();
		slotsAbortRef.current = ac;
		void loadSlots(specialty, selectedDayRaw, ac.signal);
		return () => ac.abort();
	}, [specialty, selectedDayRaw, loadSlots]);

	const onSpecialtyChange = (spec: SpecialtyCatalogEntry) => {
		setSpecialty(spec);
		setSelectedDayRaw(null);
		setSlots([]);
		setSelectedSlot(null);
		setProfessionalId(null);
		setPhase('pick');
		setParsedNew(null);
		setConfirmOpen(false);
	};

	const onDayPick = (raw: string) => {
		setSelectedDayRaw(raw);
	};

	const onSlotPick = (slot: Slot) => {
		setSelectedSlot(slot);
		setProfessionalId(slot.professionalIds.length === 1 ? slot.professionalIds[0] : null);
	};

	const continueDisabled =
		phase !== 'pick' ||
		!bootstrap ||
		!specialty ||
		specialty.clinicaTratamientoId == null ||
		!selectedDayRaw ||
		!selectedSlot ||
		(selectedSlot.professionalIds.length > 1 && professionalId == null) ||
		detailsLoading;

	const resetAfterSuccess = () => {
		setPhase('pick');
		setParsedNew(null);
		setConfirmOpen(false);
		setSelectedDayRaw(null);
		setSelectedSlot(null);
		setProfessionalId(null);
		setPrivacyOk(false);
		setValidationErr(null);
		setSubmitErr(null);
		setNpNombre('');
		setNpApellidos('');
		setNpPrefijo('34');
		setNpTel('');
		setNpEmail('');
		setRetDni('');
		setRetDob('');
		setRetEmail('');
		setPatientMode('new');
	};

	const onContinueFromPick = async () => {
		const sel = newUrlSelection;
		if (!sel || !bootstrap) return;
		setDetailsLoading(true);
		setDetailsErr(null);
		const ac = new AbortController();
		try {
			const html = await client.fetchNewBookingPageHtml(ac.signal, bootstrap, sel);
			const parsed = parseNewBookingHtml(html, clinicaId);
			const tok = parsed.fieldDefaults.authenticity_token?.trim();
			if (tok) csrfRef.current = tok;
			setParsedNew(parsed);
			setPhase('details');
			setValidationErr(null);
			setSubmitErr(null);
		} catch (e) {
			if (ac.signal.aborted) return;
			if (e instanceof GateBlockedError) {
				setGateUrl(portalFallbackUrl(clinicaId));
			} else {
				setDetailsErr(errMessage(e, lang));
			}
		} finally {
			if (!ac.signal.aborted) setDetailsLoading(false);
		}
	};

	const onBackFromDetails = () => {
		setPhase('pick');
		setParsedNew(null);
		setConfirmOpen(false);
		setValidationErr(null);
		setSubmitErr(null);
	};

	const validatePatientFields = (): boolean => {
		if (patientMode === 'new') {
			if (!npNombre.trim() || !npApellidos.trim() || !npTel.trim() || !npEmail.trim()) {
				setValidationErr(strings.fieldsRequired);
				return false;
			}
		} else {
			if (!retDni.trim() || !retDob.trim()) {
				setValidationErr(strings.fieldsRequired);
				return false;
			}
		}
		setValidationErr(null);
		return true;
	};

	const onOpenConfirm = () => {
		if (!validatePatientFields()) return;
		setSubmitErr(null);
		setConfirmOpen(true);
	};

	const onFinalize = async () => {
		if (!privacyOk) {
			setSubmitErr(strings.privacyRequired);
			return;
		}
		if (!parsedNew || !newUrlSelection || !specialty || specialty.clinicaTratamientoId == null) return;
		if (!validatePatientFields()) {
			setConfirmOpen(false);
			return;
		}
		if (!parsedNew.recaptchaSiteKey) {
			setSubmitErr(strings.recaptchaFailed);
			return;
		}
		setSubmitting(true);
		setSubmitErr(null);
		const ac = new AbortController();
		try {
			const recaptchaToken = await executeRecaptchaForBooking(parsedNew.recaptchaSiteKey);
			const body = buildBookingSubmitBody({
				fieldDefaults: parsedNew.fieldDefaults,
				clinicaId,
				sel: newUrlSelection,
				vendorSpecialtyId: specialty.vendorId,
				clinicaTratamientoId: specialty.clinicaTratamientoId,
				locale: vendorLoc,
				mode: patientMode,
				newPatient:
					patientMode === 'new'
						? {
								nombre: npNombre,
								apellidos: npApellidos,
								telefonoPrefijo: npPrefijo,
								telefono: npTel,
								email: npEmail,
							}
						: undefined,
				returning:
					patientMode === 'returning'
						? { dni: retDni, fechaNacimiento: retDob, email: retEmail }
						: undefined,
				recaptchaToken,
			});
			const res = await client.submitCitaPeticion(ac.signal, {
				actionPath: parsedNew.actionPath,
				body,
			});
			if (res.status === 201) {
				setConfirmOpen(false);
				setPhase('success');
				return;
			}
			const text = await res.text();
			const lower = text.toLowerCase();
			if (
				lower.includes('check_condiciones') ||
				lower.includes('condiciones') ||
				lower.includes('privacidad') ||
				lower.includes('debe aceptar')
			) {
				setSubmitErr(strings.privacyRequired);
			} else if (lower.includes('requerido') || lower.includes('required') || lower.includes('no puede estar en blanco')) {
				setSubmitErr(strings.fieldsRequired);
			} else {
				setSubmitErr(strings.submitFailed);
			}
		} catch (e) {
			if (ac.signal.aborted) return;
			if (e instanceof GateBlockedError) {
				setGateUrl(portalFallbackUrl(clinicaId));
				setConfirmOpen(false);
			} else {
				setSubmitErr(errMessage(e, lang));
			}
		} finally {
			if (!ac.signal.aborted) setSubmitting(false);
		}
	};

	if (!baseUrl || !clinicaId) {
		return (
			<div class="booking-flow booking-flow--error" role="alert">
				<p>{strings.networkError}</p>
			</div>
		);
	}

	if (bootLoading) {
		return (
			<div class="booking-flow" aria-busy="true">
				<p>{strings.loadingBootstrap}</p>
			</div>
		);
	}

	if (gateUrl) {
		return (
			<div class="booking-flow booking-flow--gate" role="status">
				<p>{strings.gateBlocked}</p>
				<p>
					<a class="booking-flow__portal-link" href={gateUrl}>
						{strings.openPortal}
					</a>
				</p>
				<button type="button" class="booking-flow__retry" onClick={() => void runBootstrap(new AbortController().signal)}>
					{strings.retry}
				</button>
			</div>
		);
	}

	if (bootErr || !bootstrap) {
		return (
			<div class="booking-flow booking-flow--error" role="alert">
				<p>{bootErr ?? strings.parseError}</p>
				<button type="button" class="booking-flow__retry" onClick={() => void runBootstrap(new AbortController().signal)}>
					{strings.retry}
				</button>
			</div>
		);
	}

	if (phase === 'success') {
		return (
			<div class="booking-flow booking-flow--success" role="status">
				<p class="booking-flow__success-msg">{strings.submitSuccess}</p>
				<button type="button" class="booking-flow__continue" onClick={resetAfterSuccess}>
					{strings.backToSlots}
				</button>
			</div>
		);
	}

	return (
		<div class="booking-flow">
			{invalidPreset ? (
				<p class="booking-flow__banner" role="alert">
					{strings.invalidPreset}
				</p>
			) : null}

			{showSpecialtyPicker ? (
				<fieldset class="booking-flow__fieldset">
					<legend>{strings.selectSpecialty}</legend>
					<ul class="booking-flow__list">
						{SPECIALTY_CATALOG.map((e) => (
							<li key={e.vendorId}>
								<label class="booking-flow__choice">
									<input
										type="radio"
										name="spec"
										checked={specialty?.vendorId === e.vendorId}
										onChange={() => onSpecialtyChange(e)}
									/>
									{labelFor(e, lang)}
								</label>
							</li>
						))}
					</ul>
				</fieldset>
			) : null}

			{specialty && phase === 'pick' ? (
				<>
					<section class="booking-flow__section" aria-labelledby="booking-days-h">
						<h2 id="booking-days-h" class="booking-flow__h">
							{strings.selectDay}
						</h2>
						{daysLoading ? <p>{strings.loadingDays}</p> : null}
						{daysErr ? (
							<div role="alert">
								<p>{daysErr}</p>
								<button
									type="button"
									class="booking-flow__retry"
									onClick={() => {
										const ac = new AbortController();
										void loadDays(specialty, ac.signal);
									}}
								>
									{strings.retry}
								</button>
							</div>
						) : null}
						{!daysLoading && !daysErr && days.length === 0 ? <p>{strings.noDays}</p> : null}
						{!daysLoading && !daysErr && days.length > 0 ? (
							<ul class="booking-flow__days">
								{days.map((d) => (
									<li key={d}>
										<button
											type="button"
											class={selectedDayRaw === d ? 'booking-flow__day is-active' : 'booking-flow__day'}
											onClick={() => onDayPick(d)}
										>
											{dayButtonLabel(d)}
										</button>
									</li>
								))}
							</ul>
						) : null}
					</section>

					{selectedDayRaw ? (
						<section class="booking-flow__section" aria-labelledby="booking-slots-h">
							<h2 id="booking-slots-h" class="booking-flow__h">
								{strings.selectSlot}
							</h2>
							{slotsLoading ? <p>{strings.loadingSlots}</p> : null}
							{slotsErr ? (
								<div role="alert">
									<p>{slotsErr}</p>
									<button
										type="button"
										class="booking-flow__retry"
										onClick={() => {
											const ac = new AbortController();
											void loadSlots(specialty, selectedDayRaw, ac.signal);
										}}
									>
										{strings.retry}
									</button>
								</div>
							) : null}
							{!slotsLoading && !slotsErr && slots.length === 0 ? <p>{strings.noSlots}</p> : null}
							{!slotsLoading && !slotsErr && slots.length > 0 ? (
								<ul class="booking-flow__slots">
									{slots.map((s, i) => (
										<li key={`${s.iso}-${i}`}>
											<button
												type="button"
												class={
													selectedSlot?.iso === s.iso && selectedSlot?.displayLabel === s.displayLabel
														? 'booking-flow__slot is-active'
														: 'booking-flow__slot'
												}
												onClick={() => onSlotPick(s)}
											>
												{s.displayLabel ?? s.iso}
											</button>
										</li>
									))}
								</ul>
							) : null}

							{selectedSlot && selectedSlot.professionalIds.length > 1 ? (
								<fieldset class="booking-flow__fieldset">
									<legend>{strings.selectProfessional}</legend>
									<ul class="booking-flow__list">
										{selectedSlot.professionalIds.map((id) => (
											<li key={id}>
												<label class="booking-flow__choice">
													<input
														type="radio"
														name="prof"
														checked={professionalId === id}
														onChange={() => setProfessionalId(id)}
													/>
													{id}
												</label>
											</li>
										))}
									</ul>
								</fieldset>
							) : null}
						</section>
					) : null}

					<p class="booking-flow__notice">{strings.availabilityNotice}</p>
					{detailsErr ? (
						<p class="booking-flow__banner" role="alert">
							{detailsErr}
						</p>
					) : null}
					<div class="booking-flow__actions">
						<button
							type="button"
							class="booking-flow__continue"
							disabled={continueDisabled}
							onClick={() => void onContinueFromPick()}
						>
							{detailsLoading ? strings.loadingConfirmPage : strings.continue}
						</button>
					</div>
				</>
			) : null}

			{specialty && phase === 'details' && parsedNew && selectedSlot && selectedDayRaw ? (
				<section class="booking-flow__details" aria-labelledby="booking-details-h">
					<h2 id="booking-details-h" class="booking-flow__h">
						{strings.detailsHeading}
					</h2>

					<div class="booking-flow__summary booking-flow__panel">
						<h3 class="booking-flow__subh">{strings.summaryHeading}</h3>
						<p>
							<strong>{strings.serviceLabel}:</strong> {labelFor(specialty, lang)}
						</p>
						<p>
							<strong>{strings.dateTimeLabel}:</strong>{' '}
							{summaryDateTime(selectedSlot, selectedDayRaw, lang)}
						</p>
					</div>

					<p class="booking-flow__label">{strings.patientHadVisitBefore}</p>
					<div class="booking-flow__mode-row">
						<label class="booking-flow__choice">
							<input
								type="radio"
								name="pmode"
								checked={patientMode === 'returning'}
								onChange={() => setPatientMode('returning')}
							/>
							{strings.modeReturningPatient}
						</label>
						<label class="booking-flow__choice">
							<input type="radio" name="pmode" checked={patientMode === 'new'} onChange={() => setPatientMode('new')} />
							{strings.modeNewPatient}
						</label>
					</div>

					{patientMode === 'returning' ? (
						<div class="booking-flow__grid">
							<label class="booking-flow__field">
								<span>{strings.fieldDni}</span>
								<input class="booking-flow__input" value={retDni} onInput={(e) => setRetDni((e.target as HTMLInputElement).value)} autocomplete="off" />
							</label>
							<label class="booking-flow__field">
								<span>{strings.fieldBirthDate}</span>
								<input
									class="booking-flow__input"
									value={retDob}
									onInput={(e) => setRetDob((e.target as HTMLInputElement).value)}
									placeholder="dd/mm/aaaa"
									autocomplete="bday"
								/>
							</label>
							<label class="booking-flow__field booking-flow__field--full">
								<span>{strings.fieldEmail}</span>
								<input
									type="email"
									class="booking-flow__input"
									value={retEmail}
									onInput={(e) => setRetEmail((e.target as HTMLInputElement).value)}
									autocomplete="email"
								/>
							</label>
						</div>
					) : (
						<div class="booking-flow__grid">
							<label class="booking-flow__field">
								<span>{strings.fieldName}</span>
								<input class="booking-flow__input" value={npNombre} onInput={(e) => setNpNombre((e.target as HTMLInputElement).value)} autocomplete="given-name" />
							</label>
							<label class="booking-flow__field">
								<span>{strings.fieldSurname}</span>
								<input
									class="booking-flow__input"
									value={npApellidos}
									onInput={(e) => setNpApellidos((e.target as HTMLInputElement).value)}
									autocomplete="family-name"
								/>
							</label>
							<label class="booking-flow__field">
								<span>{strings.fieldPhonePrefix}</span>
								<input class="booking-flow__input" value={npPrefijo} onInput={(e) => setNpPrefijo((e.target as HTMLInputElement).value)} inputMode="numeric" />
							</label>
							<label class="booking-flow__field">
								<span>{strings.fieldPhone}</span>
								<input
									type="tel"
									class="booking-flow__input"
									value={npTel}
									onInput={(e) => setNpTel((e.target as HTMLInputElement).value)}
									autocomplete="tel-national"
								/>
							</label>
							<label class="booking-flow__field booking-flow__field--full">
								<span>{strings.fieldEmail}</span>
								<input
									type="email"
									class="booking-flow__input"
									value={npEmail}
									onInput={(e) => setNpEmail((e.target as HTMLInputElement).value)}
									autocomplete="email"
								/>
							</label>
						</div>
					)}

					<label class="booking-flow__choice booking-flow__privacy">
						<input type="checkbox" checked={privacyOk} onChange={(e) => setPrivacyOk((e.target as HTMLInputElement).checked)} />
						{strings.privacyCheckbox}
					</label>

					<p class="booking-flow__notice booking-flow__recaptcha-disclosure">
						{strings.recaptchaIntro}{' '}
						<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
							{strings.recaptchaPrivacyLink}
						</a>
						{' '}
						{strings.recaptchaAndTerms}{' '}
						<a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
							{strings.recaptchaTermsLink}
						</a>
						{strings.recaptchaLegalSuffix}
					</p>

					{validationErr ? (
						<p class="booking-flow__banner" role="alert">
							{validationErr}
						</p>
					) : null}

					<div class="booking-flow__actions booking-flow__actions--split">
						<button type="button" class="booking-flow__btn-secondary" onClick={onBackFromDetails}>
							{strings.previous}
						</button>
						<button type="button" class="booking-flow__continue" onClick={onOpenConfirm}>
							{strings.next}
						</button>
					</div>
				</section>
			) : null}

			{confirmOpen ? (
				<div
					class="booking-flow__modal-overlay"
					role="presentation"
					onMouseDown={(e) => {
						if (e.target === e.currentTarget && !submitting) setConfirmOpen(false);
					}}
				>
					<div class="booking-flow__modal" role="dialog" aria-modal="true" aria-labelledby="booking-confirm-h">
						<h2 id="booking-confirm-h" class="booking-flow__h">
							{strings.confirmTitle}
						</h2>
						<p>{strings.confirmIntro}</p>
						<p>{strings.confirmBackHint}</p>
						<p class="booking-flow__notice">{strings.confirmDisclaimer}</p>
						{submitErr ? (
							<p class="booking-flow__banner" role="alert">
								{submitErr}
							</p>
						) : null}
						<div class="booking-flow__actions booking-flow__actions--split">
							<button type="button" class="booking-flow__btn-secondary" disabled={submitting} onClick={() => setConfirmOpen(false)}>
								{strings.previous}
							</button>
							<button type="button" class="booking-flow__continue" disabled={submitting} onClick={() => void onFinalize()}>
								{submitting ? strings.submitting : strings.finalize}
							</button>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}
