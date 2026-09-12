import { useCallback, useRef, useState } from 'preact/hooks';

export interface CompareImage {
	alt: string;
	recraftPrompt?: string;
	src?: string;
}

export interface ComparePair {
	before: CompareImage;
	after: CompareImage;
}

export interface CompareSlide {
	pairs: (ComparePair | null)[];
}

interface Props {
	slides: CompareSlide[];
	beforeLabel: string;
	afterLabel: string;
	emptySlot: string;
	dragHint: string;
	prevLabel: string;
	nextLabel: string;
}

const DESKTOP_MAX_COLUMNS = 3;

function desktopWindowPairs(pairs: ComparePair[], startIndex: number): ComparePair[] {
	if (pairs.length <= DESKTOP_MAX_COLUMNS) return pairs;
	return Array.from(
		{ length: DESKTOP_MAX_COLUMNS },
		(_, column) => pairs[(startIndex + column) % pairs.length],
	);
}

function CompareCell({
	pair,
	beforeLabel,
	afterLabel,
	emptySlot,
	dragHint,
}: {
	pair: ComparePair | null;
	beforeLabel: string;
	afterLabel: string;
	emptySlot: string;
	dragHint: string;
}) {
	const [position, setPosition] = useState(50);
	const dragging = useRef(false);
	const stageRef = useRef<HTMLDivElement>(null);

	const updatePosition = useCallback((clientX: number) => {
		const stage = stageRef.current;
		if (!stage) return;
		const rect = stage.getBoundingClientRect();
		const next = ((clientX - rect.left) / rect.width) * 100;
		setPosition(Math.min(100, Math.max(0, next)));
	}, []);

	const onPointerDown = (event: PointerEvent) => {
		dragging.current = true;
		(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
		updatePosition(event.clientX);
	};

	const onPointerMove = (event: PointerEvent) => {
		if (!dragging.current) return;
		updatePosition(event.clientX);
	};

	const onPointerUp = (event: PointerEvent) => {
		dragging.current = false;
		try {
			(event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);
		} catch {
			/* ignore */
		}
	};

	if (!pair) {
		return (
			<div class="treatment-compare treatment-compare--empty">
				<span class="treatment-compare__empty-label">{emptySlot}</span>
			</div>
		);
	}

	const { before, after } = pair;

	return (
		<div class="treatment-compare">
			<div class="treatment-compare__labels">
				<span>{beforeLabel}</span>
				<span>{afterLabel}</span>
			</div>
			<div
				class="treatment-compare__stage"
				ref={stageRef}
				onPointerMove={onPointerMove}
				onPointerUp={onPointerUp}
				onPointerCancel={onPointerUp}
			>
				{after.src ? (
					<img class="treatment-compare__img treatment-compare__img--base" src={after.src} alt={after.alt} />
				) : (
					<div class="treatment-compare__placeholder" role="img" aria-label={after.alt} />
				)}
				<div class="treatment-compare__before" style={{ width: `${position}%` }}>
					<div
						class="treatment-compare__before-inner"
						style={{ width: `${(100 / Math.max(position, 1)) * 100}%` }}
					>
						{before.src ? (
							<img
								class="treatment-compare__img treatment-compare__img--before"
								src={before.src}
								alt={before.alt}
							/>
						) : (
							<div class="treatment-compare__placeholder" role="img" aria-label={before.alt} />
						)}
					</div>
				</div>
				<div
					class="treatment-compare__handle"
					style={{ left: `${position}%` }}
					onPointerDown={onPointerDown}
					role="slider"
					aria-valuemin={0}
					aria-valuemax={100}
					aria-valuenow={Math.round(position)}
					aria-label={dragHint}
					tabIndex={0}
				>
					<span class="treatment-compare__handle-grip" aria-hidden="true">
						‹ ›
					</span>
				</div>
			</div>
		</div>
	);
}

export default function BeforeAfterCarousel({
	slides,
	beforeLabel,
	afterLabel,
	emptySlot,
	dragHint,
	prevLabel,
	nextLabel,
}: Props) {
	const [slideIndex, setSlideIndex] = useState(0);
	const [pairIndex, setPairIndex] = useState(0);
	const [desktopStartIndex, setDesktopStartIndex] = useState(0);
	const safeSlides = slides.length > 0 ? slides : [{ pairs: [null, null, null] }];
	const slide = safeSlides[slideIndex] ?? safeSlides[0];
	const filledPairs = slide.pairs.filter((pair): pair is ComparePair => pair !== null);
	const safePairIndex = Math.min(pairIndex, Math.max(0, filledPairs.length - 1));
	const activePair = filledPairs[safePairIndex] ?? null;
	const desktopCarouselActive = filledPairs.length > DESKTOP_MAX_COLUMNS;
	const safeDesktopStartIndex =
		filledPairs.length > 0 ? ((desktopStartIndex % filledPairs.length) + filledPairs.length) % filledPairs.length : 0;
	const visibleDesktopPairs = desktopWindowPairs(filledPairs, safeDesktopStartIndex);
	const desktopVisibleCount = desktopCarouselActive
		? DESKTOP_MAX_COLUMNS
		: Math.max(1, visibleDesktopPairs.length);

	const advanceDesktop = (delta: number) => {
		if (filledPairs.length <= DESKTOP_MAX_COLUMNS) return;
		setDesktopStartIndex((value) => {
			const length = filledPairs.length;
			return (((value + delta) % length) + length) % length;
		});
	};

	return (
		<div class="treatment-carousel">
			<div class="treatment-carousel__mobile">
				<CompareCell
					key={safePairIndex}
					pair={activePair}
					beforeLabel={beforeLabel}
					afterLabel={afterLabel}
					emptySlot={emptySlot}
					dragHint={dragHint}
				/>
			</div>
			<div
				class="treatment-carousel__grid"
				data-visible-count={desktopVisibleCount}
				data-carousel-infinite={desktopCarouselActive ? 'true' : undefined}
			>
				{visibleDesktopPairs.length > 0 ? (
					visibleDesktopPairs.map((pair, cellIndex) => {
						const pairKey =
							filledPairs.length > 0
								? (safeDesktopStartIndex + cellIndex) % filledPairs.length
								: cellIndex;
						return (
						<CompareCell
							key={pairKey}
							pair={pair}
							beforeLabel={beforeLabel}
							afterLabel={afterLabel}
							emptySlot={emptySlot}
							dragHint={dragHint}
						/>
						);
					})
				) : (
					<CompareCell
						pair={null}
						beforeLabel={beforeLabel}
						afterLabel={afterLabel}
						emptySlot={emptySlot}
						dragHint={dragHint}
					/>
				)}
			</div>
			<p class="treatment-carousel__hint">{dragHint}</p>
			{filledPairs.length > 1 ? (
				<div class="treatment-carousel__controls treatment-carousel__controls--center treatment-carousel__controls--mobile">
					<button
						type="button"
						class="treatment-carousel__btn"
						disabled={safePairIndex === 0}
						onClick={() => setPairIndex((value) => Math.max(0, value - 1))}
					>
						{prevLabel}
					</button>
					<span class="treatment-carousel__counter" aria-live="polite">
						{safePairIndex + 1} / {filledPairs.length}
					</span>
					<button
						type="button"
						class="treatment-carousel__btn"
						disabled={safePairIndex >= filledPairs.length - 1}
						onClick={() => setPairIndex((value) => Math.min(filledPairs.length - 1, value + 1))}
					>
						{nextLabel}
					</button>
				</div>
			) : null}
			{desktopCarouselActive ? (
				<div class="treatment-carousel__controls treatment-carousel__controls--desktop">
					<button
						type="button"
						class="treatment-carousel__btn"
						onClick={() => advanceDesktop(-1)}
					>
						{prevLabel}
					</button>
					<button
						type="button"
						class="treatment-carousel__btn"
						onClick={() => advanceDesktop(1)}
					>
						{nextLabel}
					</button>
				</div>
			) : null}
			{safeSlides.length > 1 ? (
				<div class="treatment-carousel__controls treatment-carousel__controls--slides">
					<button
						type="button"
						class="treatment-carousel__btn"
						disabled={slideIndex === 0}
						onClick={() => {
							setSlideIndex((value) => Math.max(0, value - 1));
							setPairIndex(0);
							setDesktopStartIndex(0);
						}}
					>
						{prevLabel}
					</button>
					<button
						type="button"
						class="treatment-carousel__btn"
						disabled={slideIndex >= safeSlides.length - 1}
						onClick={() => {
							setSlideIndex((value) => Math.min(safeSlides.length - 1, value + 1));
							setPairIndex(0);
							setDesktopStartIndex(0);
						}}
					>
						{nextLabel}
					</button>
				</div>
			) : null}
		</div>
	);
}
