import { X } from "lucide-solid";
import {
	createEffect,
	createSignal,
	type JSX,
	onCleanup,
	Show,
} from "solid-js";
import { Portal } from "solid-js/web";

type ModalProps = {
	children: JSX.Element;
	onClose: () => void;
	open: boolean;
	title: string;
};

export default function Modal(props: ModalProps) {
	const [isMounted, setIsMounted] = createSignal(props.open);
	const [isVisible, setIsVisible] = createSignal(false);

	createEffect(() => {
		let frameId = 0;
		let timeoutId = 0;

		if (props.open) {
			setIsMounted(true);
			frameId = window.requestAnimationFrame(() => {
				setIsVisible(true);
			});
		} else {
			setIsVisible(false);
			timeoutId = window.setTimeout(() => {
				setIsMounted(false);
			}, 260);
		}

		onCleanup(() => {
			window.cancelAnimationFrame(frameId);
			window.clearTimeout(timeoutId);
		});
	});

	createEffect(() => {
		if (!isMounted()) {
			return;
		}

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				props.onClose();
			}
		};

		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKeyDown);

		onCleanup(() => {
			document.body.style.overflow = originalOverflow;
			window.removeEventListener("keydown", onKeyDown);
		});
	});

	return (
		<Show when={isMounted()}>
			<Portal>
				<div
					aria-labelledby="modal-title"
					aria-modal="true"
					class={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition duration-300 ease-out ${
						isVisible()
							? "bg-[rgba(28,18,12,0.72)] opacity-100"
							: "bg-[rgba(28,18,12,0)] opacity-0"
					}`}
					role="dialog"
				>
					<button
						aria-label="Close gallery preview"
						class="absolute inset-0"
						type="button"
						onClick={props.onClose}
					/>
					<div
						class={`relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-cream)] shadow-[0_30px_100px_rgba(0,0,0,0.35)] transition duration-300 ease-out ${
							isVisible()
								? "translate-y-0 scale-100 opacity-100"
								: "translate-y-4 scale-[0.97] opacity-0"
						}`}
					>
						<div class="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-4">
							<h3
								class="font-display text-3xl text-[var(--color-espresso)]"
								id="modal-title"
							>
								{props.title}
							</h3>
							<button
								aria-label="Close gallery preview"
								class="rounded-full border border-[var(--color-border)] p-2 text-[var(--color-espresso)] transition hover:bg-white"
								type="button"
								onClick={props.onClose}
							>
								<X class="size-5" />
							</button>
						</div>
						<div>{props.children}</div>
					</div>
				</div>
			</Portal>
		</Show>
	);
}
