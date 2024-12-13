import { Facebook, Instagram, MapPinned } from "lucide-solid";
import { For } from "solid-js";
import Logo from "~/components/ui/Logo";
import type { NavLink } from "~/data/site";

type FooterProps = {
	links: NavLink[];
};

export default function Footer(props: FooterProps) {
	return (
		<footer class="border-t border-border bg-[rgba(255,250,243,0.88)]">
			<div class="section-shell flex flex-col gap-10 py-12 lg:flex-row lg:items-end lg:justify-between">
				<div class="max-w-md space-y-4">
					<Logo href="#home" />
					<h2 class="font-display text-4xl text-espresso">
						Crafted for slow mornings and elegant celebrations.
					</h2>
					<p class="text-sm leading-7 text-mocha">
						A premium bakery showcase built as a polished SolidStart frontend
						with warm editorial styling, considered interactions, and reusable
						component architecture.
					</p>
				</div>

				<div class="grid gap-10 sm:grid-cols-3">
					<div class="space-y-3">
						<p class="text-sm font-semibold uppercase tracking-[0.22em] text-caramel">
							Navigate
						</p>
						<div class="space-y-2 text-sm text-mocha">
							<For each={props.links}>
								{(link) => (
									<a
										class="block transition hover:text-espresso"
										href={link.href}
									>
										{link.label}
									</a>
								)}
							</For>
						</div>
					</div>

					<div class="space-y-3">
						<p class="text-sm font-semibold uppercase tracking-[0.22em] text-caramel">
							Social
						</p>
						<div class="flex gap-3">
							<a
								aria-label="Instagram"
								class="grid size-10 place-items-center rounded-full border border-border text-espresso transition hover:bg-white"
								href="https://www.instagram.com/lepetitoven"
								rel="noreferrer"
								target="_blank"
							>
								<Instagram class="size-4" />
							</a>
							<a
								aria-label="Facebook"
								class="grid size-10 place-items-center rounded-full border border-border text-espresso transition hover:bg-white"
								href="https://www.facebook.com/lepetitoven"
								rel="noreferrer"
								target="_blank"
							>
								<Facebook class="size-4" />
							</a>
							<a
								aria-label="Location"
								class="grid size-10 place-items-center rounded-full border border-border text-espresso transition hover:bg-white"
								href="#visit"
							>
								<MapPinned class="size-4" />
							</a>
						</div>
					</div>

					<div class="space-y-3 text-sm text-mocha">
						<p class="font-semibold uppercase tracking-[0.22em] text-caramel">
							Hours
						</p>
						<p>Mon - Thu: 7:00 AM - 6:00 PM</p>
						<p>Fri - Sat: 7:00 AM - 8:00 PM</p>
						<p>Sun: 8:00 AM - 3:00 PM</p>
					</div>
				</div>
			</div>
			<div class="border-t border-border px-6 py-5 text-center text-sm text-mocha">
				© 2024 Le Petit Oven. All rights reserved.
			</div>
		</footer>
	);
}
