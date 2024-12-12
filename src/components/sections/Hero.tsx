import { ArrowRight, MapPin, Sparkles } from "lucide-solid";
import { For } from "solid-js";
import Button from "~/components/ui/Button";
import CountUp from "~/components/ui/CountUp";
import { bakeryStats, heroHighlights } from "~/data/site";

export default function Hero() {
	const heroImage =
		"https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1200&q=80";
	const pastryImage =
		"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80";

	return (
		<section
			class="page-shell overflow-hidden pt-28 sm:pt-32"
			data-section="home"
			id="home"
		>
			<div class="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top_left,rgba(246,226,195,0.82),transparent_36%),radial-gradient(circle_at_80%_18%,rgba(186,141,88,0.24),transparent_18%)]" />
			<div class="section-shell section-spacing grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
				<div class="space-y-10">
					<div class="space-y-6" data-reveal>
						<p class="eyebrow">Casablanca's French-Inspired Artisan Bakery</p>
						<h1 class="display-title max-w-3xl text-[clamp(3.8rem,9vw,6.6rem)]">
							Warm laminations, quiet luxury, and breads baked before sunrise.
						</h1>
						<p class="max-w-2xl text-lg leading-8 text-[var(--color-mocha)] sm:text-xl">
							Le Petit Oven blends French pastry discipline with a cozy
							neighborhood rhythm, serving handcrafted viennoiserie, seasonal
							cakes, and naturally leavened breads in a refined, welcoming
							setting.
						</p>
					</div>

					<div
						class="flex flex-col gap-4 sm:flex-row"
						data-reveal
						style={{ "--reveal-delay": "120ms" }}
					>
						<Button as="a" href="#menu">
							Explore Menu
							<ArrowRight class="size-4" />
						</Button>
						<Button as="a" href="#visit" variant="secondary">
							<MapPin class="size-4" />
							Visit Us
						</Button>
					</div>

					<div
						class="grid gap-4 rounded-[2rem] border border-[var(--color-border)] bg-white/55 p-6 backdrop-blur-sm sm:grid-cols-3"
						data-reveal
						style={{ "--reveal-delay": "220ms" }}
					>
						<For each={bakeryStats}>
							{(stat) => (
								<div class="space-y-1">
									<p class="font-display text-4xl text-[var(--color-espresso)]">
										<CountUp value={stat.value} />
									</p>
									<p class="text-sm uppercase tracking-[0.24em] text-[var(--color-mocha)]">
										{stat.label}
									</p>
								</div>
							)}
						</For>
					</div>
				</div>

				<div class="relative" data-reveal="right">
					<div class="editorial-grid absolute inset-4 -z-10 rounded-[2.5rem] opacity-40" />
					<div class="texture-card relative overflow-hidden rounded-[2.5rem] p-4 sm:p-6">
						<div class="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
							<div class="group interactive-surface overflow-hidden rounded-[2rem] bg-[#f0e2d0]">
								<img
									alt="Bakery counter with bread and pastries"
									class="image-zoom h-full min-h-[420px] w-full object-cover"
									decoding="async"
									fetchpriority="high"
									loading="eager"
									src={heroImage}
								/>
							</div>
							<div class="flex flex-col gap-4">
								<div class="group interactive-surface overflow-hidden rounded-[2rem] bg-[#f6e9d7]">
									<img
										alt="A pair of artisan pastries on a serving plate"
										class="image-zoom h-52 w-full object-cover"
										decoding="async"
										loading="lazy"
										src={pastryImage}
									/>
								</div>
								<div class="glass-panel rounded-[2rem] p-6">
									<div class="flex items-center gap-3 text-[var(--color-caramel)]">
										<Sparkles class="size-5" />
										<p class="text-sm font-semibold uppercase tracking-[0.3em]">
											Today's Ritual
										</p>
									</div>
									<ul class="mt-5 space-y-4 text-sm leading-7 text-[var(--color-mocha)] sm:text-base">
										<For each={heroHighlights}>
											{(highlight) => (
												<li class="flex gap-3">
													<span class="mt-2 size-2 rounded-full bg-[var(--color-caramel)]" />
													<span>{highlight}</span>
												</li>
											)}
										</For>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
