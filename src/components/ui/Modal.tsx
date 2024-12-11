import { X } from "lucide-solid";
import { createEffect, type JSX, onCleanup, Show } from "solid-js";
import { Portal } from "solid-js/web";

type ModalProps = {
	children: JSX.Element;
	onClose: () => void;
	open: boolean;
	title: string;
};

export default function Modal(props: ModalProps) {
	createEffect(() => {
		if (!props.open) {
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
		<Show when={props.open}>
			<Portal>
				<div
					aria-labelledby="modal-title"
					aria-modal="true"
					class="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(28,18,12,0.72)] p-4 backdrop-blur-sm"
					role="dialog"
				>
					<button
						aria-label="Close gallery preview"
						class="absolute inset-0"
						type="button"
						onClick={props.onClose}
					/>
					<div class="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-cream)] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
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
