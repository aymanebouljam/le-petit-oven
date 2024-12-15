import { ArrowUpRight } from "lucide-solid";
import { createEffect, createMemo, createSignal, For } from "solid-js";
import Card from "~/components/ui/Card";
import FilterTabs from "~/components/ui/FilterTabs";
import SectionTitle from "~/components/ui/SectionTitle";
import { type MenuCategory, menuCategories, menuItems } from "~/data/site";

export default function FeaturedMenu() {
	const [activeCategory, setActiveCategory] = createSignal<MenuCategory>("All");
	let cardsGridRef: HTMLDivElement | undefined;
	let hasInitializedFilterReveal = false;

	const filteredItems = createMemo(() =>
		activeCategory() === "All"
			? menuItems
			: menuItems.filter((item) => item.category === activeCategory()),
	);

	createEffect(() => {
		activeCategory();

		if (!hasInitializedFilterReveal) {
			hasInitializedFilterReveal = true;
			return;
		}

		queueMicrotask(() => {
			cardsGridRef
				?.querySelectorAll<HTMLElement>("[data-reveal]")
				.forEach((element) => {
					element.dataset.revealed = "true";
				});
		});
	});

	return (
		<section class="section-spacing" data-section="menu" id="menu">
			<div class="section-shell space-y-10">
				<div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
					<div data-reveal>
						<SectionTitle
							description="A curated menu of breads, pastries, cakes, and plated sweets built for elegant mornings, afternoon pauses, and celebratory tables."
							eyebrow="Featured Menu"
							title="Signature bakes with a refined daily rhythm."
						/>
					</div>
					<div data-reveal style={{ "--reveal-delay": "120ms" }}>
						<FilterTabs
							active={activeCategory()}
							items={menuCategories}
							onChange={setActiveCategory}
						/>
					</div>
				</div>

				<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3" ref={cardsGridRef}>
					<For each={filteredItems()}>
						{(item, index) => (
							<Card class="group interactive-surface overflow-hidden p-4">
								<article
									data-reveal
									style={{ "--reveal-delay": `${index() * 90}ms` }}
								>
									<div class="overflow-hidden rounded-[1.6rem] bg-sand">
										<img
											alt={item.name}
											class="image-zoom h-64 w-full object-cover"
											loading="eager"
											src={item.image}
										/>
									</div>
									<div class="space-y-4 px-2 pb-2 pt-5">
										<div class="flex items-start justify-between gap-4">
											<div>
												<p class="text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
													{item.category}
												</p>
												<h3 class="mt-2 font-display text-3xl text-espresso">
													{item.name}
												</h3>
											</div>
											<span class="rounded-full bg-espresso px-3 py-1 text-sm font-semibold text-cream">
												{item.price}
											</span>
										</div>
										<p class="text-sm leading-7 text-mocha">
											{item.description}
										</p>
										<div class="flex items-center justify-between border-t border-border pt-4 text-sm font-semibold text-espresso">
											<span>Curated in small batches</span>
											<ArrowUpRight class="size-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
										</div>
									</div>
								</article>
							</Card>
						)}
					</For>
				</div>
			</div>
		</section>
	);
}
