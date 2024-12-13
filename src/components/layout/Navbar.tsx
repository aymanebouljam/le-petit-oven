import { Menu, X } from "lucide-solid";
import {
	createEffect,
	createSignal,
	For,
	onCleanup,
	onMount,
	Show,
} from "solid-js";
import Button from "~/components/ui/Button";
import Logo from "~/components/ui/Logo";
import type { NavLink } from "~/data/site";

type NavbarProps = {
	activeSection: string;
	links: NavLink[];
};

export default function Navbar(props: NavbarProps) {
	const [isOpen, setIsOpen] = createSignal(false);
	const [isScrolled, setIsScrolled] = createSignal(false);

	onMount(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 24);
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		onCleanup(() => window.removeEventListener("scroll", handleScroll));
	});

	createEffect(() => {
		document.body.style.overflow = isOpen() ? "hidden" : "";
		onCleanup(() => {
			document.body.style.overflow = "";
		});
	});

	return (
		<header class="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
			<div
				class={`mx-auto max-w-7xl rounded-full px-4 py-3 transition duration-300 sm:px-6 ${
					isScrolled()
						? "glass-panel shadow-[0_18px_40px_rgba(52,34,22,0.14)]"
						: "bg-white/40 backdrop-blur-sm"
				}`}
			>
				<div class="flex items-center justify-between gap-6">
					<Logo href="#home" />

					<nav aria-label="Primary" class="hidden items-center gap-1 lg:flex">
						<For each={props.links}>
							{(link) => (
								<a
									class={`rounded-full px-4 py-2 text-sm font-semibold transition ${
										props.activeSection === link.id
											? "bg-[var(--color-espresso)] text-[var(--color-cream)]"
											: "text-[var(--color-mocha)] hover:bg-white/70 hover:text-[var(--color-espresso)]"
									}`}
									href={link.href}
								>
									{link.label}
								</a>
							)}
						</For>
					</nav>

					<div class="hidden lg:block">
						<Button as="a" href="#visit" variant="secondary">
							Preorder & Visit
						</Button>
					</div>

					<button
						aria-expanded={isOpen()}
						aria-label="Toggle navigation menu"
						class="grid size-11 place-items-center rounded-full border border-[var(--color-border)] bg-white/70 text-[var(--color-espresso)] transition hover:bg-white lg:hidden"
						type="button"
						onClick={() => setIsOpen((open) => !open)}
					>
						<Show when={isOpen()} fallback={<Menu class="size-5" />}>
							<X class="size-5" />
						</Show>
					</button>
				</div>
			</div>

			<Show when={isOpen()}>
				<div class="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-[var(--color-border)] bg-[rgba(255,250,244,0.96)] p-4 shadow-[0_20px_50px_rgba(58,39,25,0.18)] backdrop-blur">
					<nav aria-label="Mobile" class="flex flex-col gap-2">
						<For each={props.links}>
							{(link) => (
								<a
									class={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
										props.activeSection === link.id
											? "bg-[var(--color-espresso)] text-[var(--color-cream)]"
											: "text-[var(--color-espresso)] hover:bg-white"
									}`}
									href={link.href}
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</a>
							)}
						</For>
						<Button
							as="a"
							class="mt-2 w-full"
							href="#visit"
							onClick={() => setIsOpen(false)}
						>
							Plan Your Visit
						</Button>
					</nav>
				</div>
			</Show>
		</header>
	);
}
