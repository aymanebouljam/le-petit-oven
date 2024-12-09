import { For, createSignal, onCleanup, onMount } from "solid-js";
import Footer from "~/components/layout/Footer";
import Navbar from "~/components/layout/Navbar";
import About from "~/components/sections/About";
import FeaturedMenu from "~/components/sections/FeaturedMenu";
import Gallery from "~/components/sections/Gallery";
import Hero from "~/components/sections/Hero";
import SignatureSpecialties from "~/components/sections/SignatureSpecialties";
import Testimonials from "~/components/sections/Testimonials";
import Values from "~/components/sections/Values";
import Visit from "~/components/sections/Visit";
import { galleryItems, sectionLinks } from "~/data/site";

export default function Home() {
  const [activeSection, setActiveSection] = createSignal("home");
  const [isGalleryOpen, setIsGalleryOpen] = createSignal(false);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = createSignal(0);

  onMount(() => {
    const observedSections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const sectionObserver = new IntersectionObserver(
      entries => {
        const visibleEntry = entries
          .filter(entry => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry?.target instanceof HTMLElement) {
          setActiveSection(visibleEntry.target.dataset.section ?? "home");
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.6]
      }
    );

    const revealObserver = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.target instanceof HTMLElement && entry.isIntersecting) {
            entry.target.dataset.revealed = "true";
            revealObserver.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.2
      }
    );

    for (const section of observedSections) {
      sectionObserver.observe(section);
    }

    for (const element of revealElements) {
      revealObserver.observe(element);
    }

    onCleanup(() => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    });
  });

  const openGalleryItem = (index: number) => {
    setSelectedGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const showPreviousGalleryItem = () => {
    setSelectedGalleryIndex(current => (current - 1 + galleryItems.length) % galleryItems.length);
  };

  const showNextGalleryItem = () => {
    setSelectedGalleryIndex(current => (current + 1) % galleryItems.length);
  };

  return (
    <div class="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <Navbar activeSection={activeSection()} links={sectionLinks} />
      <main>
        <Hero />
        <FeaturedMenu />
        <About />
        <SignatureSpecialties />
        <Values />
        <Gallery
          isOpen={isGalleryOpen()}
          items={galleryItems}
          selectedIndex={selectedGalleryIndex()}
          onClose={closeGallery}
          onNext={showNextGalleryItem}
          onOpen={openGalleryItem}
          onPrevious={showPreviousGalleryItem}
        />
        <Testimonials />
        <Visit />
      </main>
      <Footer links={sectionLinks} />
      <nav aria-label="Quick navigation" class="sr-only">
        <For each={sectionLinks}>
          {link => <a href={link.href}>{link.label}</a>}
        </For>
      </nav>
    </div>
  );
}
