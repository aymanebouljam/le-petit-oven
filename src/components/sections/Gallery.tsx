import { ChevronLeft, ChevronRight, Expand } from "lucide-solid";
import { For } from "solid-js";
import Modal from "~/components/ui/Modal";
import SectionTitle from "~/components/ui/SectionTitle";
import type { GalleryItem } from "~/data/site";

type GalleryProps = {
  isOpen: boolean;
  items: GalleryItem[];
  onClose: () => void;
  onNext: () => void;
  onOpen: (index: number) => void;
  onPrevious: () => void;
  selectedIndex: number;
};

export default function Gallery(props: GalleryProps) {
  const selectedItem = () => props.items[props.selectedIndex];

  return (
    <section class="section-spacing" data-section="gallery" id="gallery">
      <div class="section-shell space-y-10">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div data-reveal>
            <SectionTitle
              description="A visual journal of laminated pastries, bread shelves, cafe moments, packaging, and the softly lit interior that defines the brand."
              eyebrow="Gallery"
              title="Textures, colors, and details from the bakery floor."
            />
          </div>
          <p
            class="max-w-md text-sm leading-7 text-[var(--color-mocha)]"
            data-reveal
            style={{ "--reveal-delay": "120ms" }}
          >
            Tap any image to open a lightbox preview. The gallery keeps interactions simple,
            keyboard-friendly, and fast.
          </p>
        </div>

        <div class="grid auto-rows-[240px] gap-5 md:grid-cols-2 xl:grid-cols-4">
          <For each={props.items}>
            {(item, index) => (
              <button
                aria-label={`Open gallery image ${item.category}`}
                class={`group relative overflow-hidden rounded-[2rem] text-left ${
                  index() === 0 || index() === 3 ? "md:row-span-2 md:min-h-[500px]" : ""
                }`}
                data-reveal
                style={{ "--reveal-delay": `${index() * 90}ms` }}
                type="button"
                onClick={() => props.onOpen(index())}
              >
                <img
                  alt={item.alt}
                  class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  src={item.image}
                />
                <div class="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(31,18,12,0.74)_100%)]" />
                <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-[var(--color-cream)]">
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(255,245,231,0.78)]">
                      {item.category}
                    </p>
                    <p class="mt-2 max-w-xs font-display text-3xl leading-tight">{item.caption}</p>
                  </div>
                  <span class="grid size-12 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
                    <Expand class="size-5" />
                  </span>
                </div>
              </button>
            )}
          </For>
        </div>
      </div>

      <Modal onClose={props.onClose} open={props.isOpen} title={selectedItem()?.category ?? "Gallery"}>
        <div class="grid gap-6 p-4 md:grid-cols-[1fr_auto] md:p-6">
          <div class="overflow-hidden rounded-[1.5rem] bg-[var(--color-sand)]">
            <img
              alt={selectedItem()?.alt}
              class="max-h-[72vh] w-full object-cover"
              src={selectedItem()?.image}
            />
          </div>
          <div class="flex flex-col justify-between gap-4 md:w-72">
            <div class="space-y-3">
              <p class="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-caramel)]">
                {selectedItem()?.category}
              </p>
              <p class="text-base leading-7 text-[var(--color-mocha)]">{selectedItem()?.caption}</p>
            </div>
            <div class="flex gap-3">
              <button
                aria-label="Previous image"
                class="grid size-12 place-items-center rounded-full border border-[var(--color-border)] transition hover:bg-white"
                type="button"
                onClick={props.onPrevious}
              >
                <ChevronLeft class="size-5" />
              </button>
              <button
                aria-label="Next image"
                class="grid size-12 place-items-center rounded-full border border-[var(--color-border)] transition hover:bg-white"
                type="button"
                onClick={props.onNext}
              >
                <ChevronRight class="size-5" />
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}
