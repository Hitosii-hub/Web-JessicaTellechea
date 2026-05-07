import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'preact/hooks';
import {
	catalogEntryBySlugOrId,
	labelFor,
	phonePrefixSelectOptions,
	SPECIALTY_CATALOG,
	type SpecialtyCatalogEntry,
} from './config';
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
type Phase = 'pick' | 'details' | 'success';
type PickStep = 'specialty' | 'treatment' | 'datetime';

interface TreatmentOption {
	readonly id: string;
	readonly specialtyVendorId: number;
	readonly clinicaTratamientoId: number;
	readonly label: string;
	readonly tipoHorario: string;
}

function isRuntimeLocalhost(): boolean {
	if (typeof globalThis === 'undefined' || !('location' in globalThis)) return false;
	const hostname = (globalThis as unknown as Window).location?.hostname?.toLowerCase();
	return hostname === 'localhost' || hostname === '127.0.0.1';
}

function nubimedBaseUrl(): string {
	const proxy = import.meta.env.PUBLIC_NUBIMED_PROXY_URL?.trim();
	const vendor = import.meta.env.PUBLIC_NUBIMED_VENDOR_ORIGIN?.trim();
	const explicitProxy = (proxy || '').replace(/\/$/, '');
	if (explicitProxy) {
		// En build/preview no debemos fijar localhost como base remota.
		// Si el proxy es local, solo se usa durante desarrollo.
		const isLocalProxy = /^https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?(?:\/|$)/i.test(explicitProxy);
		if (!isLocalProxy || import.meta.env.DEV || isRuntimeLocalhost()) return explicitProxy;
	}
	if ((import.meta.env.DEV || isRuntimeLocalhost()) && vendor && typeof globalThis !== 'undefined' && 'location' in globalThis) {
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

function monthStartYmd(ymd: string): string {
	const [y, m] = ymd.split('-');
	return `${y}-${m}-01`;
}

function addMonthsYmd(monthStart: string, delta: number): string {
	const [y, m] = monthStart.split('-').map((v) => parseInt(v, 10));
	const d = new Date(Date.UTC(y, m - 1 + delta, 1));
	return d.toISOString().slice(0, 10);
}

function weekdayMondayFirst(ymd: string): number {
	const [y, m, d] = ymd.split('-').map((v) => parseInt(v, 10));
	const js = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); // 0 domingo
	return (js + 6) % 7; // 0 lunes
}

function daysInMonth(monthStart: string): number {
	const [y, m] = monthStart.split('-').map((v) => parseInt(v, 10));
	return new Date(Date.UTC(y, m, 0)).getUTCDate();
}

function formatMonthYear(ymd: string, lang: SiteLocale): string {
	return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : lang, {
		month: 'long',
		year: 'numeric',
	}).format(new Date(`${ymd}T12:00:00`));
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

function summaryDateLabel(dayRaw: string, lang: SiteLocale): string {
	const ymd = normalizeDayToYmd(dayRaw);
	return ymd
		? new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : lang, {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
			}).format(new Date(ymd + 'T12:00:00'))
		: dayRaw;
}

function summaryTimeLabel(slot: Slot): string {
	const raw = (slot.displayLabel?.trim() || slot.iso || '').trim();
	if (!raw) return '';
	const ampm = /^(\d{1,2}):(\d{2})\s*([AaPp][Mm])$/.exec(raw);
	if (ampm) {
		let hour = parseInt(ampm[1], 10);
		const min = ampm[2];
		const mer = ampm[3].toLowerCase();
		if (mer === 'pm' && hour < 12) hour += 12;
		if (mer === 'am' && hour === 12) hour = 0;
		return `${String(hour).padStart(2, '0')}:${min}`;
	}
	const hhmm = /^(\d{1,2}):(\d{2})$/.exec(raw);
	if (hhmm) return `${String(parseInt(hhmm[1], 10)).padStart(2, '0')}:${hhmm[2]}`;
	const isoDate = new Date(raw);
	if (!Number.isNaN(isoDate.getTime())) {
		return new Intl.DateTimeFormat('es-ES', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		}).format(isoDate);
	}
	return raw;
}

function slotLabel24h(slot: Slot): string {
	return summaryTimeLabel(slot);
}

export default function BookingFlow({
	lang,
	presetSpecialtySlug,
	presetTreatmentId,
	clinicAddress: clinicAddressProp,
}: BookingFlowProps) {
	const strings = t(lang);
	const prefixOptions = useMemo(() => phonePrefixSelectOptions(lang), [lang]);
	const vendorLoc = vendorLocaleFromSite(lang);
	const clinicaId = clinicaIdFromEnv();
	const baseUrl = nubimedBaseUrl();
	const clinicAddress =
		(typeof clinicAddressProp === 'string' ? clinicAddressProp.trim() : '') ||
		import.meta.env.PUBLIC_CLINIC_ADDRESS?.trim() ||
		'';

	/** Prop from Astro is often empty on static builds; merge runtime `?preset=` from the browser URL. */
	const trimPreset = (v: string | null | undefined) => (typeof v === 'string' ? v.trim() : '');
	const [resolvedPresetSlug, setResolvedPresetSlug] = useState(() => trimPreset(presetSpecialtySlug));

	useLayoutEffect(() => {
		const fromProp = trimPreset(presetSpecialtySlug);
		if (fromProp) {
			setResolvedPresetSlug((prev) => (prev === fromProp ? prev : fromProp));
			return;
		}
		if (typeof window === 'undefined') return;
		const fromUrl = trimPreset(new URLSearchParams(window.location.search).get('preset'));
		if (fromUrl) setResolvedPresetSlug((prev) => (prev === fromUrl ? prev : fromUrl));
	}, [presetSpecialtySlug]);

	const presetEntry = useMemo(() => {
		if (resolvedPresetSlug === '') return undefined;
		return catalogEntryBySlugOrId(resolvedPresetSlug);
	}, [resolvedPresetSlug]);

	const invalidPreset = resolvedPresetSlug !== '' && presetEntry === undefined;

	const hasValidPreset = resolvedPresetSlug !== '' && presetEntry !== undefined;
	const showSpecialtyPicker = !hasValidPreset || invalidPreset;

	const [bootstrap, setBootstrap] = useState<BootstrapSession | null>(null);
	const [gateUrl, setGateUrl] = useState<string | null>(null);
	const [bootErr, setBootErr] = useState<string | null>(null);
	const [bootLoading, setBootLoading] = useState(true);

	const [specialty, setSpecialty] = useState<SpecialtyCatalogEntry | null>(() => presetEntry ?? null);
	const [pickStep, setPickStep] = useState<PickStep>(() => (showSpecialtyPicker ? 'specialty' : 'treatment'));
	const [selectedTreatment, setSelectedTreatment] = useState<TreatmentOption | null>(null);
	const [treatmentOptions, setTreatmentOptions] = useState<TreatmentOption[]>([]);
	const [treatmentsLoading, setTreatmentsLoading] = useState(false);
	const [treatmentsErr, setTreatmentsErr] = useState<string | null>(null);

	useEffect(() => {
		if (!presetEntry) return;
		setSpecialty(presetEntry);
		setSelectedTreatment(null);
		setPickStep(showSpecialtyPicker ? 'specialty' : 'treatment');
	}, [presetEntry, showSpecialtyPicker]);

	useEffect(() => {
		setPickStep(showSpecialtyPicker ? 'specialty' : 'treatment');
	}, [showSpecialtyPicker]);

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

	const loadTreatments = useCallback(
		async (spec: SpecialtyCatalogEntry, signal: AbortSignal) => {
			setTreatmentsLoading(true);
			setTreatmentsErr(null);
			setTreatmentOptions([]);
			try {
				const list = await client.fetchTreatmentsBySpecialty(signal, {
					locale: vendorLoc,
					especialidadId: spec.vendorId,
				});
				if (signal.aborted) return;
				setTreatmentOptions(
					list.map((option) => ({
						id: `${spec.vendorId}-${option.id}`,
						specialtyVendorId: spec.vendorId,
						clinicaTratamientoId: Number(option.id),
						label: option.label,
						tipoHorario: option.modalidad || spec.tipoHorario || 'presencial',
					})),
				);
			} catch (e) {
				if (signal.aborted) return;
				if (e instanceof GateBlockedError) {
					setGateUrl(portalFallbackUrl(clinicaId));
				} else {
					setTreatmentsErr(errMessage(e, lang));
				}
			} finally {
				if (!signal.aborted) setTreatmentsLoading(false);
			}
		},
		[client, vendorLoc, clinicaId, lang],
	);

	const treatmentsAbortRef = useRef<AbortController | null>(null);
	useEffect(() => {
		if (!specialty || pickStep !== 'treatment') return;
		treatmentsAbortRef.current?.abort();
		const ac = new AbortController();
		treatmentsAbortRef.current = ac;
		void loadTreatments(specialty, ac.signal);
		return () => ac.abort();
	}, [specialty, pickStep, loadTreatments]);

	useEffect(() => {
		if (pickStep !== 'treatment' || selectedTreatment || !presetTreatmentId) return;
		const normalized = presetTreatmentId.trim().toLowerCase();
		if (!normalized) return;
		const matched = treatmentOptions.find(
			(option) =>
				option.id.toLowerCase() === normalized ||
				String(option.clinicaTratamientoId) === normalized,
		);
		if (!matched) return;
		setSelectedTreatment(matched);
		setPickStep('datetime');
	}, [pickStep, selectedTreatment, presetTreatmentId, treatmentOptions]);
	const [days, setDays] = useState<string[]>([]);
	const [daysLoading, setDaysLoading] = useState(false);
	const [daysErr, setDaysErr] = useState<string | null>(null);

	const [selectedDayRaw, setSelectedDayRaw] = useState<string | null>(null);
	const [slots, setSlots] = useState<Slot[]>([]);
	const [slotsLoading, setSlotsLoading] = useState(false);
	const [slotsErr, setSlotsErr] = useState<string | null>(null);

	const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
	const [professionalId, setProfessionalId] = useState<number | null>(null);
	const [readyToAutoAdvance, setReadyToAutoAdvance] = useState(false);
	const [visibleMonthStart, setVisibleMonthStart] = useState<string | null>(null);

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
	const [privacyOk, setPrivacyOk] = useState(false);
	const [marketingOk, setMarketingOk] = useState(false);
	const [validationErr, setValidationErr] = useState<string | null>(null);
	const [submitErr, setSubmitErr] = useState<string | null>(null);
	const [submitting, setSubmitting] = useState(false);

	const newUrlSelection = useMemo((): NewUrlSelection | null => {
		if (!specialty || !selectedSlot || !selectedDayRaw) return null;
		const prefTratamientoId = selectedTreatment?.clinicaTratamientoId ?? specialty.clinicaTratamientoId;
		if (prefTratamientoId == null) return null;
		const prof =
			selectedSlot.professionalIds.length > 1 ? professionalId : (selectedSlot.professionalIds[0] ?? null);
		if (selectedSlot.professionalIds.length > 1 && professionalId == null) return null;
		return {
			specialtyVendorId: specialty.vendorId,
			prefTratamientoId,
			prefHoraIso: selectedSlot.iso,
			professionalId: prof,
			tipoHorario: selectedTreatment?.tipoHorario ?? specialty.tipoHorario ?? 'presencial',
		};
	}, [specialty, selectedSlot, selectedDayRaw, professionalId, selectedTreatment]);

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
		async (spec: SpecialtyCatalogEntry, treatmentId: number, treatmentTipoHorario: string, signal: AbortSignal) => {
			setDaysLoading(true);
			setDaysErr(null);
			setDays([]);
			setSelectedDayRaw(null);
			setSlots([]);
			setSelectedSlot(null);
			setProfessionalId(null);
			const tipoHorario = treatmentTipoHorario || spec.tipoHorario || 'presencial';
			try {
				const list = await client.fetchDayStrings(signal, {
					locale: vendorLoc,
					especialidadId: spec.vendorId,
					clinicaTratamientoId: treatmentId,
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
		[bootstrap, client, vendorLoc, lang, clinicaId, strings.invalidResponse],
	);

	const daysAbortRef = useRef<AbortController | null>(null);
	useEffect(() => {
		if (!bootstrap || !specialty || !selectedTreatment || pickStep !== 'datetime') return;
		daysAbortRef.current?.abort();
		const ac = new AbortController();
		daysAbortRef.current = ac;
		void loadDays(
			specialty,
			selectedTreatment.clinicaTratamientoId,
			selectedTreatment.tipoHorario,
			ac.signal,
		);
		return () => ac.abort();
	}, [bootstrap, specialty, selectedTreatment, pickStep, loadDays]);

	const slotsAbortRef = useRef<AbortController | null>(null);
	const slotsPaneRef = useRef<HTMLDivElement | null>(null);
	const datetimeBodyRef = useRef<HTMLDivElement | null>(null);
	const detailsScrollRef = useRef<HTMLDivElement | null>(null);
	const emailFieldWrapRef = useRef<HTMLLabelElement | null>(null);

	/** Píxeles de aire por encima del panel de horas dentro del scroll de `.datetime-body` (móvil). */
	const MOBILE_SLOTS_SCROLL_INSET_PX = 5;

	/** Píxeles de aire por encima del campo correo dentro de `.booking-flow__details-scroll` (móvil). */
	const MOBILE_EMAIL_SCROLL_INSET_PX = 8;

	const scrollMobileSlotsPaneIntoView = useCallback(() => {
		const win = typeof globalThis !== 'undefined' && 'window' in globalThis ? globalThis.window : undefined;
		if (!win?.matchMedia?.('(max-width: 899px)')?.matches) return;
		const pane = slotsPaneRef.current;
		const scrollRoot = datetimeBodyRef.current;
		if (!pane || !scrollRoot) return;
		const instant = win.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const rootRect = scrollRoot.getBoundingClientRect();
		const paneRect = pane.getBoundingClientRect();
		const delta = paneRect.top - rootRect.top;
		const rawTarget = scrollRoot.scrollTop + delta - MOBILE_SLOTS_SCROLL_INSET_PX;
		const maxScroll = Math.max(0, scrollRoot.scrollHeight - scrollRoot.clientHeight);
		const top = Math.min(Math.max(0, rawTarget), maxScroll);
		scrollRoot.scrollTo({ top, behavior: instant ? 'auto' : 'smooth' });
	}, []);

	const scrollMobileEmailFieldIntoView = useCallback(() => {
		const win = typeof globalThis !== 'undefined' && 'window' in globalThis ? globalThis.window : undefined;
		if (!win?.matchMedia?.('(max-width: 899px)')?.matches) return;
		const scrollRoot = detailsScrollRef.current;
		const target = emailFieldWrapRef.current;
		if (!scrollRoot || !target) return;
		const instant = win.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const rootRect = scrollRoot.getBoundingClientRect();
		const targetRect = target.getBoundingClientRect();
		const delta = targetRect.top - rootRect.top;
		const rawTarget = scrollRoot.scrollTop + delta - MOBILE_EMAIL_SCROLL_INSET_PX;
		const maxScroll = Math.max(0, scrollRoot.scrollHeight - scrollRoot.clientHeight);
		const top = Math.min(Math.max(0, rawTarget), maxScroll);
		scrollRoot.scrollTo({ top, behavior: instant ? 'auto' : 'smooth' });
	}, []);

	const loadSlots = useCallback(
		async (
			spec: SpecialtyCatalogEntry,
			treatmentId: number,
			treatmentTipoHorario: string,
			dayRaw: string,
			signal: AbortSignal,
		) => {
			setSlotsLoading(true);
			setSlotsErr(null);
			setSlots([]);
			setSelectedSlot(null);
			setProfessionalId(null);
			const tipoHorario = treatmentTipoHorario || spec.tipoHorario || 'presencial';
			const ymd = normalizeDayToYmd(dayRaw);
			const diaParam = ymd ? ymdToDdMmYyyy(ymd) : dayRaw;
			try {
				const list = await client.fetchSlots(signal, {
					locale: vendorLoc,
					especialidadId: spec.vendorId,
					diaDDMMYYYY: diaParam,
					clinicaTratamientoId: treatmentId,
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
				if (!signal.aborted) {
					queueMicrotask(() => {
						requestAnimationFrame(() => {
							requestAnimationFrame(scrollMobileSlotsPaneIntoView);
						});
					});
				}
			}
		},
		[client, vendorLoc, lang, clinicaId, scrollMobileSlotsPaneIntoView],
	);

	useEffect(() => {
		if (!specialty || !selectedTreatment || !selectedDayRaw || pickStep !== 'datetime') return;
		slotsAbortRef.current?.abort();
		const ac = new AbortController();
		slotsAbortRef.current = ac;
		void loadSlots(
			specialty,
			selectedTreatment.clinicaTratamientoId,
			selectedTreatment.tipoHorario,
			selectedDayRaw,
			ac.signal,
		);
		return () => ac.abort();
	}, [specialty, selectedTreatment, selectedDayRaw, pickStep, loadSlots]);

	const availableDayMap = useMemo(() => {
		const map = new Map<string, string>();
		for (const raw of days) {
			const ymd = normalizeDayToYmd(raw);
			if (!ymd) continue;
			map.set(ymd, raw);
		}
		return map;
	}, [days]);

	const availableYmds = useMemo(() => Array.from(availableDayMap.keys()).sort(compareYmd), [availableDayMap]);

	useEffect(() => {
		if (availableYmds.length === 0) {
			setVisibleMonthStart(null);
			return;
		}
		const selectedYmd = selectedDayRaw ? normalizeDayToYmd(selectedDayRaw) : undefined;
		const target = selectedYmd && availableDayMap.has(selectedYmd) ? selectedYmd : availableYmds[0];
		setVisibleMonthStart(monthStartYmd(target));
	}, [availableYmds, selectedDayRaw, availableDayMap]);

	const minMonthStart = availableYmds.length > 0 ? monthStartYmd(availableYmds[0]) : null;
	const maxMonthStart =
		availableYmds.length > 0 ? monthStartYmd(availableYmds[availableYmds.length - 1]) : null;

	const canPrevMonth =
		!!visibleMonthStart && !!minMonthStart && compareYmd(visibleMonthStart, minMonthStart) > 0;
	const canNextMonth =
		!!visibleMonthStart && !!maxMonthStart && compareYmd(visibleMonthStart, maxMonthStart) < 0;

	const calendarCells = useMemo(() => {
		if (!visibleMonthStart) return [] as Array<{ key: string; ymd: string | null }>;
		const firstOffset = weekdayMondayFirst(visibleMonthStart);
		const totalDays = daysInMonth(visibleMonthStart);
		const cells: Array<{ key: string; ymd: string | null }> = [];
		for (let i = 0; i < firstOffset; i += 1) {
			cells.push({ key: `blank-${i}`, ymd: null });
		}
		for (let d = 1; d <= totalDays; d += 1) {
			const ymd = `${visibleMonthStart.slice(0, 8)}${String(d).padStart(2, '0')}`;
			cells.push({ key: ymd, ymd });
		}
		return cells;
	}, [visibleMonthStart]);

	const onSpecialtyChange = (spec: SpecialtyCatalogEntry) => {
		setSpecialty(spec);
		setSelectedTreatment(null);
		setTreatmentOptions([]);
		setTreatmentsErr(null);
		setPickStep('treatment');
		setReadyToAutoAdvance(false);
		setSelectedDayRaw(null);
		setSlots([]);
		setSelectedSlot(null);
		setProfessionalId(null);
		setPhase('pick');
		setParsedNew(null);
		setConfirmOpen(false);
	};

	const onDayPick = (raw: string) => {
		setReadyToAutoAdvance(false);
		setSelectedDayRaw(raw);
	};

	const onSlotPick = (slot: Slot) => {
		setSelectedSlot(slot);
		setProfessionalId(slot.professionalIds.length === 1 ? slot.professionalIds[0] : null);
		setReadyToAutoAdvance(true);
	};

	const onTreatmentPick = (treatment: TreatmentOption) => {
		setSelectedTreatment(treatment);
		setReadyToAutoAdvance(false);
		setSelectedDayRaw(null);
		setSlots([]);
		setSelectedSlot(null);
		setProfessionalId(null);
		setPickStep('datetime');
	};

	const onBackToSpecialty = () => {
		setReadyToAutoAdvance(false);
		setSelectedTreatment(null);
		setSelectedDayRaw(null);
		setSlots([]);
		setSelectedSlot(null);
		setProfessionalId(null);
		setPickStep('specialty');
	};

	const onBackToTreatment = () => {
		setReadyToAutoAdvance(false);
		setSelectedDayRaw(null);
		setSlots([]);
		setSelectedSlot(null);
		setProfessionalId(null);
		setPickStep('treatment');
	};

	const canAutoAdvanceToDetails =
		phase === 'pick' &&
		pickStep === 'datetime' &&
		readyToAutoAdvance &&
		!!bootstrap &&
		!!specialty &&
		!!selectedTreatment &&
		!!selectedDayRaw &&
		!!selectedSlot &&
		(selectedSlot.professionalIds.length <= 1 || professionalId != null) &&
		!detailsLoading;

	const resetAfterSuccess = () => {
		setPhase('pick');
		setPickStep(showSpecialtyPicker ? 'specialty' : 'treatment');
		setParsedNew(null);
		setConfirmOpen(false);
		setReadyToAutoAdvance(false);
		setSelectedTreatment(null);
		setSelectedDayRaw(null);
		setSelectedSlot(null);
		setProfessionalId(null);
		setPrivacyOk(false);
		setMarketingOk(false);
		setValidationErr(null);
		setSubmitErr(null);
		setNpNombre('');
		setNpApellidos('');
		setNpPrefijo('34');
		setNpTel('');
		setNpEmail('');
		setRetDni('');
		setRetDob('');
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

	useEffect(() => {
		if (!canAutoAdvanceToDetails) return;
		setReadyToAutoAdvance(false);
		void onContinueFromPick();
	}, [canAutoAdvanceToDetails]);

	const onBackFromDetails = () => {
		setPhase('pick');
		setPickStep('datetime');
		setReadyToAutoAdvance(false);
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
		const effectiveTreatmentId = selectedTreatment?.clinicaTratamientoId ?? specialty?.clinicaTratamientoId;
		if (!parsedNew || !newUrlSelection || !specialty || effectiveTreatmentId == null) return;
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
				clinicaTratamientoId: effectiveTreatmentId,
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
						? { dni: retDni, fechaNacimiento: retDob, email: '' }
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

	const activeStepIndex =
		phase === 'details' ? 4 : pickStep === 'specialty' ? 1 : pickStep === 'treatment' ? 2 : 3;
	const stepLabel = (step: number) => `${strings.stepLabelPrefix} ${String(step).padStart(2, '0')}`;

	return (
		<div class="booking-flow-shell">
			<ol class="booking-flow__progress" aria-label="Booking steps">
				{[1, 2, 3, 4].map((step) => (
					<li class={step <= activeStepIndex ? 'is-active' : undefined} key={step}>
						<span aria-hidden="true" />
					</li>
				))}
			</ol>
			<div class="booking-flow">
				{invalidPreset ? (
					<p class="booking-flow__banner" role="alert">
						{strings.invalidPreset}
					</p>
				) : null}

				<div class="booking-flow__step-viewport">
				{phase === 'pick' && pickStep === 'specialty' && showSpecialtyPicker ? (
					<fieldset class="booking-flow__fieldset booking-flow__step-fill">
						<legend class="booking-flow__legend booking-flow__legend--split">
							<span class="booking-flow__step-kicker">{stepLabel(1)}</span>
							<div class="booking-flow__legend-row">
								<span class="booking-flow__h">{strings.selectSpecialty}</span>
								<span class="booking-flow__step-description booking-flow__step-description--legend">
									{strings.specialtyStepDescription}
								</span>
							</div>
						</legend>
						<div class="booking-flow__scroll-region">
							<ul class="booking-flow__list booking-flow__list--cards">
								{SPECIALTY_CATALOG.map((e) => (
									<li key={e.vendorId}>
										<button
											type="button"
											class={specialty?.vendorId === e.vendorId ? 'booking-flow__choice is-active' : 'booking-flow__choice'}
											onClick={() => onSpecialtyChange(e)}
										>
											{labelFor(e, lang)}
										</button>
									</li>
								))}
							</ul>
						</div>
					</fieldset>
				) : null}

			{specialty && phase === 'pick' && pickStep === 'treatment' ? (
				<section class="booking-flow__section booking-flow__step-fill" aria-labelledby="booking-treatment-h">
					<div class="booking-flow__section-head">
						<span class="booking-flow__step-kicker">{stepLabel(2)}</span>
						<div class="booking-flow__legend-row booking-flow__legend-row--split">
							<h2 id="booking-treatment-h" class="booking-flow__h">
								{strings.selectTreatment}
							</h2>
							<p class="booking-flow__step-description booking-flow__step-description--legend">
								{strings.treatmentStepDescription}
							</p>
						</div>
					</div>
					{treatmentsLoading ? <p>{strings.loadingSlots}</p> : null}
					{treatmentsErr ? (
						<div role="alert">
							<p>{treatmentsErr}</p>
							<button
								type="button"
								class="booking-flow__retry"
								onClick={() => {
									const ac = new AbortController();
									void loadTreatments(specialty, ac.signal);
								}}
							>
								{strings.retry}
							</button>
						</div>
					) : null}
					{!treatmentsLoading && !treatmentsErr && treatmentOptions.length === 0 ? (
						<p class="booking-flow__banner" role="alert">
							{strings.noSlots}
						</p>
					) : null}
					{!treatmentsLoading && !treatmentsErr && treatmentOptions.length > 0 ? (
						<div class="booking-flow__scroll-region">
							<ul class="booking-flow__list booking-flow__list--cards">
								{treatmentOptions.map((option) => (
									<li key={option.id}>
										<button
											type="button"
											class={selectedTreatment?.id === option.id ? 'booking-flow__slot is-active' : 'booking-flow__slot'}
											onClick={() => onTreatmentPick(option)}
										>
											{option.label}
										</button>
									</li>
								))}
							</ul>
						</div>
					) : null}
					{showSpecialtyPicker ? (
						<div class="booking-flow__actions">
							<button type="button" class="booking-flow__btn-secondary" onClick={onBackToSpecialty}>
								{strings.previous}
							</button>
						</div>
					) : null}
				</section>
			) : null}

			{specialty && phase === 'pick' && pickStep === 'datetime' ? (
				<div class="booking-flow__datetime-step booking-flow__step-fill">
					<section
						class="booking-flow__section booking-flow__section--datetime booking-flow__datetime-step-main"
						aria-labelledby="booking-days-h"
					>
						<span class="booking-flow__step-kicker">{stepLabel(3)}</span>
						<div class="booking-flow__datetime-body" ref={datetimeBodyRef}>
							{daysLoading ? <p>{strings.loadingDays}</p> : null}
							{daysErr ? (
								<div role="alert">
									<p>{daysErr}</p>
									<button
										type="button"
										class="booking-flow__retry"
										onClick={() => {
											const ac = new AbortController();
											if (!selectedTreatment) return;
											void loadDays(
												specialty,
												selectedTreatment.clinicaTratamientoId,
												selectedTreatment.tipoHorario,
												ac.signal,
											);
										}}
									>
										{strings.retry}
									</button>
								</div>
							) : null}
							{!daysLoading && !daysErr && days.length === 0 ? <p>{strings.noDays}</p> : null}
							{!daysLoading && !daysErr && days.length > 0 && visibleMonthStart ? (
								<div class="booking-flow__datetime-layout">
								<div class="booking-flow__calendar">
									<section class="booking-flow__calendar-section booking-flow__calendar-section--title">
										<h2 id="booking-days-h" class="booking-flow__h">
											{strings.selectDay}
										</h2>						
										<div class="booking-flow__calendar-section booking-flow__calendar-section--grid">
											<div class="booking-flow__calendar-header">
												<button
													type="button"
													class="booking-flow__btn-secondary"
													disabled={!canPrevMonth}
													onClick={() =>
														setVisibleMonthStart((prev) =>
															prev ? addMonthsYmd(prev, -1) : prev,
														)
													}
												>
													{`<`}
												</button>
												<span class="booking-flow__calendar-title">
													{formatMonthYear(visibleMonthStart, lang)}
												</span>
												<button
													type="button"
													class="booking-flow__btn-secondary"
													disabled={!canNextMonth}
													onClick={() =>
														setVisibleMonthStart((prev) =>
															prev ? addMonthsYmd(prev, 1) : prev,
														)
													}
												>
													{`>`}
												</button>
											</div>
											<div class="booking-flow__calendar-weekdays">
												{['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((w) => (
													<span key={w}>{w}</span>
												))}
											</div>
											<div class="booking-flow__calendar-grid">
												{calendarCells.map((cell) => {
													if (!cell.ymd) return <span key={cell.key} class="booking-flow__calendar-empty" />;
													const availableRaw = availableDayMap.get(cell.ymd);
													const isAvailable = !!availableRaw;
													const isSelected =
														selectedDayRaw != null && normalizeDayToYmd(selectedDayRaw) === cell.ymd;
													return (
														<button
															key={cell.key}
															type="button"
															disabled={!isAvailable}
															class={
																isSelected
																	? 'booking-flow__calendar-day is-active'
																	: isAvailable
																		? 'booking-flow__calendar-day is-available'
																		: 'booking-flow__calendar-day'
															}
															onClick={() => {
																if (!availableRaw) return;
																onDayPick(availableRaw);
															}}
														>
															{parseInt(cell.ymd.slice(-2), 10)}
														</button>
													);
												})}
											</div>
										</div>
									</section>
								</div>

								<div class="booking-flow__slots-pane" ref={slotsPaneRef}>
									<section class="booking-flow__section booking-flow__slots-section" aria-labelledby="booking-slots-h">
										<h2 id="booking-slots-h" class="booking-flow__h">
											{strings.selectSlot}
										</h2>
										<div class="booking-flow__slots-scroll">
											{selectedDayRaw ? (
												<>
													{slotsLoading ? <p>{strings.loadingSlots}</p> : null}
													{slotsErr ? (
														<div role="alert">
															<p>{slotsErr}</p>
															<button
																type="button"
																class="booking-flow__retry"
																onClick={() => {
																	const ac = new AbortController();
																	if (!selectedTreatment) return;
																	void loadSlots(
																		specialty,
																		selectedTreatment.clinicaTratamientoId,
																		selectedTreatment.tipoHorario,
																		selectedDayRaw,
																		ac.signal,
																	);
																}}
															>
																{strings.retry}
															</button>
														</div>
													) : null}
													{!slotsLoading && !slotsErr && slots.length === 0 ? <p>{strings.noSlots}</p> : null}
													{!slotsLoading && !slotsErr && slots.length > 0 ? (
														<ul class="booking-flow__slots booking-flow__slots--grid">
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
																		{slotLabel24h(s)}
																	</button>
																</li>
															))}
														</ul>
													) : null}
												</>
											) : null}
										</div>

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
																	onChange={() => {
																		setProfessionalId(id);
																		setReadyToAutoAdvance(true);
																	}}
																/>
																{id}
															</label>
														</li>
													))}
												</ul>
											</fieldset>
										) : null}
									</section>
								</div>
								</div>
							) : null}
						</div>
					</section>

					{detailsErr ? (
						<p class="booking-flow__banner" role="alert">
							{detailsErr}
						</p>
					) : null}
					<div class="booking-flow__actions">
						<button type="button" class="booking-flow__btn-secondary" onClick={onBackToTreatment}>
							{strings.previous}
						</button>
					</div>
					{detailsLoading ? <p class="booking-flow__notice">{strings.loadingConfirmPage}</p> : null}
				</div>
			) : null}

			{specialty && phase === 'details' && parsedNew && selectedSlot && selectedDayRaw ? (
				<section class="booking-flow__details booking-flow__step-fill" aria-labelledby="booking-details-h">
					<div class="booking-flow__section-head">
						<span class="booking-flow__step-kicker">{stepLabel(4)}</span>
						<h2 id="booking-details-h" class="booking-flow__h">
							{strings.detailsHeading}
						</h2>
					</div>

					<div class="booking-flow__details-scroll" ref={detailsScrollRef}>
					<div class="booking-flow__details-layout">
						<div>
							<div class="booking-flow__mode-row">
								<button
									type="button"
									class={patientMode === 'new' ? 'booking-flow__tab is-active' : 'booking-flow__tab'}
									onClick={() => setPatientMode('new')}
								>
									{strings.modeNewPatient}
								</button>
								<button
									type="button"
									class={patientMode === 'returning' ? 'booking-flow__tab is-active' : 'booking-flow__tab'}
									onClick={() => setPatientMode('returning')}
								>
									{strings.modeReturningPatient}
								</button>
							</div>

							{patientMode === 'returning' ? (
								<div class="booking-flow__grid booking-flow__grid--two-cols">
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
								</div>
							) : (
								<div class="booking-flow__grid booking-flow__grid--two-cols">
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
										<select
											class="booking-flow__input booking-flow__select"
											value={npPrefijo}
											onChange={(e) => setNpPrefijo((e.target as HTMLSelectElement).value)}
											autocomplete="tel-country-code"
										>
											{prefixOptions.map((opt) => (
												<option key={opt.value} value={opt.value}>
													{opt.label}
												</option>
											))}
										</select>
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
									<label ref={emailFieldWrapRef} class="booking-flow__field booking-flow__field--full">
										<span>{strings.fieldEmail}</span>
										<input
											type="email"
											class="booking-flow__input"
											value={npEmail}
											onFocus={scrollMobileEmailFieldIntoView}
											onInput={(e) => setNpEmail((e.target as HTMLInputElement).value)}
											autocomplete="email"
										/>
									</label>
								</div>
							)}

							{validationErr ? (
								<p class="booking-flow__banner" role="alert">
									{validationErr}
								</p>
							) : null}
						</div>

						<div class="booking-flow__summary booking-flow__panel">
							<h3 class="booking-flow__subh">{strings.summaryHeading}</h3>
							<div class="booking-flow__summary-lines">
								<p class="booking-flow__summary-row">
									<strong class="booking-flow__summary-label">{strings.serviceLabel}:</strong>
									<span class="booking-flow__summary-value">
										{labelFor(specialty, lang)}
										<br />
										<em>{selectedTreatment?.label ?? labelFor(specialty, lang)}</em>
									</span>
								</p>
								<p class="booking-flow__summary-row">
									<strong class="booking-flow__summary-label">{strings.dateLabel}:</strong>
									<span class="booking-flow__summary-value">{summaryDateLabel(selectedDayRaw, lang)}</span>
								</p>
								<p class="booking-flow__summary-row">
									<strong class="booking-flow__summary-label">{strings.timeLabel}:</strong>
									<span class="booking-flow__summary-value">{summaryTimeLabel(selectedSlot)}</span>
								</p>
								<p class="booking-flow__summary-row">
									<strong class="booking-flow__summary-label">{strings.locationLabel}:</strong>
									<span class="booking-flow__summary-value">{clinicAddress}</span>
								</p>
							</div>
							<div class="booking-flow__actions">
								<button type="button" class="booking-flow__continue" onClick={onOpenConfirm}>
									{strings.confirm}
								</button>
							</div>
						</div>
					</div>
					</div>
					<div class="booking-flow__actions">
						<button type="button" class="booking-flow__btn-secondary" onClick={onBackFromDetails}>
							{strings.previous}
						</button>
					</div>
				</section>
			) : null}
				</div>

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
						<div class="booking-flow__legal-block">
							<h3 class="booking-flow__legal-block-title">{strings.bookingLegalSummaryHeading}</h3>
							<p class="booking-flow__legal-summary-body">{strings.bookingLegalSummaryBody}</p>
							<p class="booking-flow__legal-policy-link">
								<a href={`/${lang}/privacidad/`} target="_blank" rel="noopener noreferrer">
									{strings.privacyPolicyLinkLabel}
								</a>
							</p>
						</div>
						<label class="booking-flow__choice booking-flow__privacy">
							<input type="checkbox" checked={privacyOk} onChange={(e) => setPrivacyOk((e.target as HTMLInputElement).checked)} />
							<span>{strings.privacyCheckbox}</span>
						</label>
						<label class="booking-flow__choice">
							<input type="checkbox" checked={marketingOk} onChange={(e) => setMarketingOk((e.target as HTMLInputElement).checked)} />
							<span>{strings.marketingCheckbox}</span>
						</label>
						{submitErr ? (
							<p class="booking-flow__banner booking-flow__banner--compact" role="alert">
								{submitErr}
							</p>
						) : null}
						<div class="booking-flow__recaptcha-wrap">
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
						</div>
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
		</div>
	);
}
