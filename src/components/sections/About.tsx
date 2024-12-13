import { For } from "solid-js";
import SectionTitle from "~/components/ui/SectionTitle";

const storyPoints = [
	"A bakery shaped around slow fermentation, cultured butter, and precise handwork.",
	"Seasonal menus that honor daily ritual while leaving space for discovery.",
	"A warm room designed for fresh bread, porcelain cups, and unhurried conversation.",
];

export default function About() {
	const aboutImage =
		"https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1100&q=80";

	return (
		<section class="section-spacing" data-section="about" id="about">
			<div class="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
				<div class="relative" data-reveal="left">
					<div class="absolute -left-4 top-10 h-32 w-32 rounded-full bg-[rgba(186,141,88,0.18)] blur-3xl" />
					<div class="texture-card group interactive-surface overflow-hidden rounded-[2.5rem] p-4 sm:p-5">
						<img
							alt="Bakery team preparing dough and pastries"
							class="image-zoom h-full min-h-[520px] w-full rounded-[2rem] object-cover"
							decoding="async"
							loading="lazy"
							src={aboutImage}
						/>
					</div>
				</div>

				<div class="space-y-8">
					<div data-reveal>
						<SectionTitle
							description="Le Petit Oven was imagined as a bakery where French-inspired discipline meets a soft, neighborhood warmth. Everything is made to feel intentional, tactile, and quietly luxurious."
							eyebrow="Our Story"
							title="Craftsmanship, tradition, and fresh ingredients at the center of every bake."
						/>
					</div>
					<div
						class="grid gap-4"
						data-reveal
						style={{ "--reveal-delay": "120ms" }}
					>
						<For each={storyPoints}>
							{(point) => (
								<div class="glass-panel rounded-[1.75rem] p-5 transition duration-300 ease-out hover:-translate-y-1 hover:bg-white/95 hover:shadow-[0_24px_60px_rgba(76,55,38,0.14)]">
									<p class="text-base leading-7 text-[var(--color-mocha)]">
										{point}
									</p>
								</div>
							)}
						</For>
					</div>
					<div
						class="grid gap-5 rounded-[2rem] border border-[var(--color-border)] bg-white/60 p-6 sm:grid-cols-2"
						data-reveal
						style={{ "--reveal-delay": "220ms" }}
					>
						<div>
							<p class="font-display text-4xl text-[var(--color-espresso)]">
								5 AM
							</p>
							<p class="mt-2 text-sm uppercase tracking-[0.25em] text-[var(--color-mocha)]">
								Ovens begin warming before sunrise.
							</p>
						</div>
						<div>
							<p class="font-display text-4xl text-[var(--color-espresso)]">
								100%
							</p>
							<p class="mt-2 text-sm uppercase tracking-[0.25em] text-[var(--color-mocha)]">
								Laminations and finishes completed in house.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
