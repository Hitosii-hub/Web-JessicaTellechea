/** Reference timezone for calendar horizon (design). */
export const CLINIC_TIMEZONE = 'Europe/Madrid';

/** Calendar day in Madrid as `YYYY-MM-DD` (for comparisons). */
export function todayYmdMadrid(d = new Date()): string {
	return d.toLocaleDateString('en-CA', { timeZone: CLINIC_TIMEZONE });
}

export function addDaysYmd(ymd: string, days: number): string {
	const [y, m, dd] = ymd.split('-').map((x) => parseInt(x, 10));
	const d = new Date(Date.UTC(y, m - 1, dd));
	d.setUTCDate(d.getUTCDate() + days);
	return d.toISOString().slice(0, 10);
}

export function compareYmd(a: string, b: string): number {
	return a < b ? -1 : a > b ? 1 : 0;
}

/** Convert DD/MM/YYYY to YYYY-MM-DD if parseable. */
export function ddmmyyyyToYmd(s: string): string | undefined {
	const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s.trim());
	if (!m) return undefined;
	const day = parseInt(m[1], 10);
	const month = parseInt(m[2], 10);
	const year = parseInt(m[3], 10);
	if (month < 1 || month > 12 || day < 1 || day > 31) return undefined;
	const iso = `${year.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
	return iso;
}

export function ymdToDdMmYyyy(ymd: string): string {
	const [y, m, d] = ymd.split('-');
	if (!y || !m || !d) return ymd;
	return `${parseInt(d, 10)}/${parseInt(m, 10)}/${y}`;
}

/**
 * Effective horizon in days: min(61, vendor max), from today Madrid (REQ-6).
 */
export function effectiveHorizonDays(vendorMaxDias: number): number {
	return Math.min(61, Math.max(1, vendorMaxDias));
}

export function maxSelectableYmd(todayYmd: string, horizonDays: number): string {
	return addDaysYmd(todayYmd, horizonDays - 1);
}
