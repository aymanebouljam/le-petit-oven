import { For } from "solid-js";
import SectionTitle from "~/components/ui/SectionTitle";
import { specialties } from "~/data/site";

export default function SignatureSpecialties() {
  return (
    <section class="section-spacing">
      <div class="section-shell">
        <div class="rounded-[2.5rem] bg-[linear-gradient(135deg,#f3e2cb_0%,#f7efe4_45%,#ead8c2_100%)] p-6 sm:p-8 lg:p-10">
          <div class="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div class="space-y-6" data-reveal>
              <SectionTitle
                description="A rotating edit of showpiece pastries and celebration-worthy centerpieces, presented with an editorial layout that lets each bake feel like an event."
                eyebrow="Signature Specialties"
                title="The pieces guests remember long after the last crumb."
              />
            </div>

            <div class="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
              <For each={specialties}>
                {(specialty, index) => (
                  <article
                    class={`texture-card overflow-hidden rounded-[2rem] ${
                      index() === 0 ? "lg:row-span-2" : ""
                    }`}
                    data-reveal
                    style={{ "--reveal-delay": `${index() * 120}ms` }}
                  >
                    <div class="overflow-hidden bg-[var(--color-sand)]">
                      <img
                        alt={specialty.name}
                        class={`w-full object-cover ${
                          index() === 0 ? "h-[360px] lg:h-[520px]" : "h-60"
                        }`}
                        src={specialty.image}
                      />
                    </div>
                    <div class="space-y-4 p-6">
                      <p class="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-caramel)]">
                        {specialty.accent}
                      </p>
                      <h3 class="font-display text-3xl text-[var(--color-espresso)] sm:text-4xl">
                        {specialty.name}
                      </h3>
                      <p class="text-sm leading-7 text-[var(--color-mocha)] sm:text-base">
                        {specialty.description}
                      </p>
                      <p class="border-t border-[var(--color-border)] pt-4 text-sm font-semibold text-[var(--color-espresso)]">
                        {specialty.note}
                      </p>
                    </div>
                  </article>
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
