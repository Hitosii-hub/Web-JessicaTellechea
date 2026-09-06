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
			<p class="treatment-compare__hint">{dragHint}</p>
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
	const [index, setIndex] = useState(0);
	const safeSlides = slides.length > 0 ? slides : [{ pairs: [null, null, null] }];
	const slide = safeSlides[index] ?? safeSlides[0];
	const pairs: (ComparePair | null)[] = [...slide.pairs];
	while (pairs.length < 3) pairs.push(null);

	return (
		<div class="treatment-carousel">
			<div class="treatment-carousel__grid">
				{pairs.slice(0, 3).map((pair, cellIndex) => (
					<CompareCell
						key={cellIndex}
						pair={pair}
						beforeLabel={beforeLabel}
						afterLabel={afterLabel}
						emptySlot={emptySlot}
						dragHint={dragHint}
					/>
				))}
			</div>
			{safeSlides.length > 1 ? (
				<div class="treatment-carousel__controls">
					<button
						type="button"
						class="treatment-carousel__btn"
						disabled={index === 0}
						onClick={() => setIndex((value) => Math.max(0, value - 1))}
					>
						{prevLabel}
					</button>
					<button
						type="button"
						class="treatment-carousel__btn"
						disabled={index >= safeSlides.length - 1}
						onClick={() => setIndex((value) => Math.min(safeSlides.length - 1, value + 1))}
					>
						{nextLabel}
					</button>
				</div>
			) : null}
		</div>
	);
}
