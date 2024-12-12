import { createSignal, onCleanup, onMount } from "solid-js";

type CountUpProps = {
	class?: string;
	durationMs?: number;
	value: string;
};

const parseValue = (value: string) => {
	const match = value.match(/^(\d+)(.*)$/);

	if (!match) {
		return null;
	}

	return {
		number: Number(match[1]),
		suffix: match[2],
	};
};

export default function CountUp(props: CountUpProps) {
	const parsed = parseValue(props.value);
	const [displayValue, setDisplayValue] = createSignal(
		parsed ? "0" : props.value,
	);
	let elementRef: HTMLSpanElement | undefined;

	onMount(() => {
		if (!parsed) {
			return;
		}

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setDisplayValue(props.value);
			return;
		}

		const durationMs = props.durationMs ?? 1400;
		let frameId = 0;
		let hasStarted = false;

		const startAnimation = () => {
			if (hasStarted) {
				return;
			}

			hasStarted = true;
			const startTime = performance.now();

			const tick = (currentTime: number) => {
				const progress = Math.min((currentTime - startTime) / durationMs, 1);
				const easedProgress = 1 - (1 - progress) ** 3;
				const currentValue = Math.round(parsed.number * easedProgress);

				setDisplayValue(`${currentValue}${parsed.suffix}`);

				if (progress < 1) {
					frameId = window.requestAnimationFrame(tick);
				}
			};

			frameId = window.requestAnimationFrame(tick);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];

				if (!entry?.isIntersecting) {
					return;
				}

				startAnimation();
				observer.disconnect();
			},
			{
				threshold: 0.35,
			},
		);

		if (elementRef) {
			const rect = elementRef.getBoundingClientRect();
			const isVisible =
				rect.top <= window.innerHeight * 0.92 &&
				rect.bottom >= window.innerHeight * 0.08;

			if (isVisible) {
				startAnimation();
			} else {
				observer.observe(elementRef);
			}
		}

		onCleanup(() => {
			observer.disconnect();
			window.cancelAnimationFrame(frameId);
		});
	});

	return (
		<span class={props.class} ref={elementRef}>
			{displayValue()}
		</span>
	);
}
