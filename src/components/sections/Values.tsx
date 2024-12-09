import { For } from "solid-js";
import Card from "~/components/ui/Card";
import SectionTitle from "~/components/ui/SectionTitle";
import { values } from "~/data/site";

export default function Values() {
  return (
    <section class="section-spacing">
      <div class="section-shell space-y-10">
        <div data-reveal>
          <SectionTitle
            align="center"
            description="The bakery experience is shaped as much by process as by flavor. These principles guide how the menu is crafted, presented, and shared."
            eyebrow="Bakery Values"
            title="Quiet details that make the brand feel genuinely handcrafted."
          />
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <For each={values}>
            {(item, index) => (
              <Card class="group p-6 transition duration-500 hover:-translate-y-1 hover:bg-white/95">
                <article data-reveal style={{ "--reveal-delay": `${index() * 90}ms` }}>
                  <div class="flex items-start gap-4">
                    <div class="grid size-14 place-items-center rounded-2xl bg-[var(--color-espresso)] text-[var(--color-cream)] transition duration-300 group-hover:scale-105">
                      <item.icon class="size-6" />
                    </div>
                    <div class="space-y-3">
                      <h3 class="font-display text-3xl text-[var(--color-espresso)]">{item.title}</h3>
                      <p class="text-sm leading-7 text-[var(--color-mocha)] sm:text-base">
                        {item.description}
                      </p>
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
