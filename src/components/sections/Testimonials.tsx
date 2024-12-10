import { ChevronLeft, ChevronRight, Quote } from "lucide-solid";
import { createSignal, onCleanup, onMount, For } from "solid-js";
import Card from "~/components/ui/Card";
import SectionTitle from "~/components/ui/SectionTitle";
import { testimonials } from "~/data/site";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = createSignal(0);

  onMount(() => {
    const timer = window.setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5200);

    onCleanup(() => window.clearInterval(timer));
  });

  const activeTestimonial = () => testimonials[activeIndex()];

  return (
    <section class="section-spacing" data-section="testimonials" id="testimonials">
      <div class="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div data-reveal>
          <SectionTitle
            description="The bakery is designed to feel memorable in ways that go beyond the menu: atmosphere, generosity, packaging, and consistency all matter."
            eyebrow="Testimonials"
            title="Believable praise from guests who return for the details."
          />
        </div>

        <Card class="overflow-hidden p-8 sm:p-10">
          <div data-reveal="right">
            <div class="flex items-start justify-between gap-4">
              <Quote class="size-10 text-[var(--color-caramel)]" />
              <div class="flex gap-3">
                <button
                  aria-label="Previous testimonial"
                  class="grid size-11 place-items-center rounded-full border border-[var(--color-border)] transition hover:bg-white"
                  type="button"
                  onClick={() =>
                    setActiveIndex(current => (current - 1 + testimonials.length) % testimonials.length)
                  }
                >
                  <ChevronLeft class="size-5" />
                </button>
                <button
                  aria-label="Next testimonial"
                  class="grid size-11 place-items-center rounded-full border border-[var(--color-border)] transition hover:bg-white"
                  type="button"
                  onClick={() => setActiveIndex(current => (current + 1) % testimonials.length)}
                >
                  <ChevronRight class="size-5" />
                </button>
              </div>
            </div>

            <div class="mt-8 min-h-56 space-y-6">
              <p class="font-display text-3xl leading-tight text-[var(--color-espresso)] sm:text-4xl">
                “{activeTestimonial().feedback}”
              </p>
              <div>
                <p class="text-lg font-semibold text-[var(--color-espresso)]">{activeTestimonial().name}</p>
                <p class="text-sm uppercase tracking-[0.25em] text-[var(--color-mocha)]">
                  {activeTestimonial().title}
                </p>
              </div>
            </div>

            <div class="mt-8 flex gap-2">
              <For each={testimonials}>
                {(testimonial, index) => (
                  <button
                    aria-label={`Show testimonial from ${testimonial.name}`}
                    class={`h-2.5 rounded-full transition ${
                      activeIndex() === index()
                        ? "w-12 bg-[var(--color-espresso)]"
                        : "w-3 bg-[var(--color-oat)]"
                    }`}
                    type="button"
                    onClick={() => setActiveIndex(index())}
                  />
                )}
              </For>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
