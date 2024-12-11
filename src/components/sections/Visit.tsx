import { Clock3, Mail, MapPin, Phone } from "lucide-solid";
import { For } from "solid-js";
import Button from "~/components/ui/Button";
import SectionTitle from "~/components/ui/SectionTitle";
import { visitDetails } from "~/data/site";

export default function Visit() {
	return (
		<section class="section-spacing pb-24" data-section="visit" id="visit">
			<div class="section-shell">
				<div class="grid gap-8 rounded-[2.5rem] bg-[linear-gradient(135deg,#3b2417_0%,#5a3a28_50%,#7a573e_100%)] p-6 text-[var(--color-cream)] shadow-[0_28px_80px_rgba(59,36,23,0.22)] sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
					<div class="space-y-8" data-reveal>
						<SectionTitle
							description="Drop in for warm pastries and coffee, reserve a celebration cake, or arrange a curated pastry box for your next gathering."
							eyebrow="Visit Us"
							tone="light"
							title="Plan a bakery visit that feels as polished as the menu."
						/>
						<div class="grid gap-4 sm:grid-cols-2">
							<div class="rounded-[1.75rem] bg-white/10 p-5">
								<div class="flex items-center gap-3">
									<MapPin class="size-5 text-[var(--color-caramel)]" />
									<p class="text-sm font-semibold uppercase tracking-[0.25em] text-[rgba(255,244,230,0.78)]">
										Address
									</p>
								</div>
								<p class="mt-4 text-lg leading-8">{visitDetails.address}</p>
							</div>
							<div class="rounded-[1.75rem] bg-white/10 p-5">
								<div class="flex items-center gap-3">
									<Clock3 class="size-5 text-[var(--color-caramel)]" />
									<p class="text-sm font-semibold uppercase tracking-[0.25em] text-[rgba(255,244,230,0.78)]">
										Opening Hours
									</p>
								</div>
								<div class="mt-4 space-y-2 text-sm leading-7 sm:text-base">
									<For each={visitDetails.hours}>{(hour) => <p>{hour}</p>}</For>
								</div>
							</div>
							<div class="rounded-[1.75rem] bg-white/10 p-5">
								<div class="flex items-center gap-3">
									<Phone class="size-5 text-[var(--color-caramel)]" />
									<p class="text-sm font-semibold uppercase tracking-[0.25em] text-[rgba(255,244,230,0.78)]">
										Phone
									</p>
								</div>
								<a
									class="mt-4 block text-lg leading-8 transition hover:text-white"
									href={`tel:${visitDetails.phone}`}
								>
									{visitDetails.phone}
								</a>
							</div>
							<div class="rounded-[1.75rem] bg-white/10 p-5">
								<div class="flex items-center gap-3">
									<Mail class="size-5 text-[var(--color-caramel)]" />
									<p class="text-sm font-semibold uppercase tracking-[0.25em] text-[rgba(255,244,230,0.78)]">
										Email
									</p>
								</div>
								<a
									class="mt-4 block text-lg leading-8 transition hover:text-white"
									href={`mailto:${visitDetails.email}`}
								>
									{visitDetails.email}
								</a>
							</div>
						</div>
						<div class="flex flex-col gap-4 sm:flex-row">
							<Button
								as="a"
								class="bg-[var(--color-cream)] text-[var(--color-espresso)] hover:bg-white"
								href="mailto:bonjour@lepetitoven.com"
							>
								Preorder by Email
							</Button>
							<Button
								as="a"
								class="border-white/18 bg-white/10 text-[var(--color-cream)] hover:bg-white/18"
								href="tel:+212522481890"
								variant="secondary"
							>
								Call the Bakery
							</Button>
						</div>
					</div>

					<div class="flex flex-col gap-5" data-reveal="right">
						<div class="overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,246,236,0.08)] p-3">
							<img
								alt="Map showing the bakery location in Casablanca"
								class="h-[320px] w-full rounded-[1.4rem] object-cover"
								src="https://staticmap.openstreetmap.de/staticmap.php?center=33.5731,-7.5898&zoom=14&size=1200x800&markers=33.5731,-7.5898,lightblue1"
							/>
						</div>
						<div class="grid gap-4 sm:grid-cols-2">
							<div class="rounded-[1.75rem] bg-white/10 p-5">
								<p class="text-sm font-semibold uppercase tracking-[0.24em] text-[rgba(255,244,230,0.78)]">
									Best Time to Visit
								</p>
								<p class="mt-3 text-base leading-7">
									Arrive before 9:30 AM for the fullest pastry selection and
									warm bread straight from the oven.
								</p>
							</div>
							<div class="rounded-[1.75rem] bg-white/10 p-5">
								<p class="text-sm font-semibold uppercase tracking-[0.24em] text-[rgba(255,244,230,0.78)]">
									Preorder Note
								</p>
								<p class="mt-3 text-base leading-7">
									Celebration cakes and pastry boxes are best reserved 48 hours
									in advance.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
