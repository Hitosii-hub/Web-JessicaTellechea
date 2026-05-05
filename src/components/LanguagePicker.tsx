import { useEffect, useRef, useState } from 'preact/hooks';

export type LangItem = {
	locale: string;
	label: string;
	/** Second line: region / scope (e.g. Spain, International). */
	region: string;
	href: string;
	suggested?: boolean;
};

export type LanguagePickerCopy = {
	modalTitle: string;
	tabLabel: string;
	suggestedHeading: string;
	allHeading: string;
	closeLabel: string;
};

type Props = {
	current: string;
	items: LangItem[];
	copy: LanguagePickerCopy;
};

function GlobeIcon() {
	return (
		<svg
			class="language-picker__globe-svg"
			width="22"
			height="22"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1" />
			<path d="M3 12h18" stroke="currentColor" stroke-width="1" stroke-linecap="round" />
			<path
				d="M12 3c2.2 2.8 3.5 6.2 3.5 9s-1.3 6.2-3.5 9"
				stroke="currentColor"
				stroke-width="1"
				stroke-linecap="round"
			/>
			<path
				d="M12 3c-2.2 2.8-3.5 6.2-3.5 9s1.3 6.2 3.5 9"
				stroke="currentColor"
				stroke-width="1"
				stroke-linecap="round"
			/>
		</svg>
	);
}

export default function LanguagePicker({ current, items, copy }: Props) {
	const [open, setOpen] = useState(false);
	const btnRef = useRef<HTMLButtonElement>(null);
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const d = dialogRef.current;
		if (!d) return;
		const onDialogClose = () => {
			setOpen(false);
			queueMicrotask(() => btnRef.current?.focus());
		};
		d.addEventListener('close', onDialogClose);
		return () => d.removeEventListener('close', onDialogClose);
	}, []);

	useEffect(() => {
		const d = dialogRef.current;
		if (!d) return;
		if (open) {
			if (!d.open) d.showModal();
			queueMicrotask(() => {
				const first = d.querySelector<HTMLElement>('a[href]');
				first?.focus();
			});
		} else if (d.open) {
			d.close();
		}
	}, [open]);

	const suggested = items.filter((i) => i.suggested);

	function closeDialog() {
		dialogRef.current?.close();
	}

	return (
		<div class="language-picker">
			<button
				ref={btnRef}
				type="button"
				class="language-picker__trigger"
				aria-haspopup="dialog"
				aria-expanded={open}
				onClick={() => setOpen((v) => !v)}
			>
				<span class="language-picker__globe" aria-hidden="true">
					<GlobeIcon />
				</span>
				<span class="language-picker__trigger-label">{copy.tabLabel}</span>
			</button>

			<dialog
				ref={dialogRef}
				class="language-picker__modal"
				aria-label={copy.modalTitle}
				onClick={(ev) => {
					if (ev.target === ev.currentTarget) closeDialog();
				}}
			>
				<div class="language-picker__surface" onClick={(ev) => ev.stopPropagation()}>
					<div class="language-picker__tabs" role="tablist">
						<button type="button" class="language-picker__tab language-picker__tab--active">
							{copy.tabLabel}
						</button>
					</div>

					<p class="language-picker__section">{copy.suggestedHeading}</p>
					<ul class="language-picker__list">
						{suggested.map((item) => (
							<li key={item.locale}>
								<a
									class={
										item.locale === current
											? 'language-picker__link language-picker__link--current'
											: 'language-picker__link'
									}
									href={item.href}
									hreflang={item.locale}
									lang={item.locale}
								>
									<span class="language-picker__primary">{item.label}</span>
									<span class="language-picker__secondary">{item.region}</span>
								</a>
							</li>
						))}
					</ul>

					<p class="language-picker__section">{copy.allHeading}</p>
					<ul class="language-picker__list">
						{items.map((item) => (
							<li key={`all-${item.locale}`}>
								<a
									class={
										item.locale === current
											? 'language-picker__link language-picker__link--current'
											: 'language-picker__link'
									}
									href={item.href}
									hreflang={item.locale}
									lang={item.locale}
								>
									<span class="language-picker__primary">{item.label}</span>
									<span class="language-picker__secondary">{item.region}</span>
								</a>
							</li>
						))}
					</ul>

					<button type="button" class="language-picker__close" onClick={() => closeDialog()}>
						{copy.closeLabel}
					</button>
				</div>
			</dialog>
		</div>
	);
}
