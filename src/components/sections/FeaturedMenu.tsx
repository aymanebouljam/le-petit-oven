import { ArrowUpRight } from "lucide-solid";
import { For, createMemo, createSignal } from "solid-js";
import Card from "~/components/ui/Card";
import FilterTabs from "~/components/ui/FilterTabs";
import SectionTitle from "~/components/ui/SectionTitle";
import { menuCategories, menuItems, type MenuCategory } from "~/data/site";

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = createSignal<MenuCategory>("All");

  const filteredItems = createMemo(() =>
    activeCategory() === "All"
      ? menuItems
      : menuItems.filter(item => item.category === activeCategory())
  );

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
            <FilterTabs active={activeCategory()} items={menuCategories} onChange={setActiveCategory} />
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <For each={filteredItems()}>
            {(item, index) => (
              <Card class="group overflow-hidden p-4 transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(76,55,38,0.16)]">
                <article data-reveal style={{ "--reveal-delay": `${index() * 90}ms` }}>
                  <div class="overflow-hidden rounded-[1.6rem] bg-[var(--color-sand)]">
                    <img
                      alt={item.name}
                      class="h-64 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      src={item.image}
                    />
                  </div>
                  <div class="space-y-4 px-2 pb-2 pt-5">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-caramel)]">
                          {item.category}
                        </p>
                        <h3 class="mt-2 font-display text-3xl text-[var(--color-espresso)]">
                          {item.name}
                        </h3>
                      </div>
                      <span class="rounded-full bg-[var(--color-espresso)] px-3 py-1 text-sm font-semibold text-[var(--color-cream)]">
                        {item.price}
                      </span>
                    </div>
                    <p class="text-sm leading-7 text-[var(--color-mocha)]">{item.description}</p>
                    <div class="flex items-center justify-between border-t border-[var(--color-border)] pt-4 text-sm font-semibold text-[var(--color-espresso)]">
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
