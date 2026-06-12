import { useState, useEffect, useCallback } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Reveal } from "@/components/Reveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import dogBackyard from "@/assets/dog-backyard.jpg";
import dogDachshund from "@/assets/dog-dachshund.jpg";
import dogCavapoo from "@/assets/dog-cavapoo.jpg";
import dogBernese from "@/assets/dog-bernese.jpg";
import puppyHaircut from "@/assets/puppy-first-haircut.jpg";
import dogBandanaDeck from "@/assets/dog-bandana-deck.jpg";

const photos = [
  { src: dogBackyard, alt: "Golden retriever enjoying the lush, private backyard" },
  { src: dogCavapoo, alt: "Cavapoo posing on the grooming table with a handmade floral bandana" },
  { src: dogBernese, alt: "Bernese mountain dog dressed up with a handmade pink bow" },
  { src: puppyHaircut, alt: "Cavapoo puppy after a gentle first haircut at Ketsie's" },
  { src: dogBandanaDeck, alt: "Freshly groomed pup wearing a handmade red polka-dot bandana on the deck" },
  { src: dogDachshund, alt: "Long-haired dachshund freshly groomed" },
];

export function Gallery() {
  const ref = useReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [],
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, next, prev]);

  return (
    <section id="gallery" className="bg-cream py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-16">
          <p className="text-gold-deep uppercase tracking-[0.4em] text-xs mb-5">The Gallery</p>
          <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-tight">
            Happy pups, every visit.
          </h2>
          <div className="gold-divider w-32 mx-auto mt-8" />
          <p className="mt-6 text-charcoal/70 max-w-xl mx-auto">
            Our home studio sits on a private property surrounded by gardens, a koi pond, and a fully fenced backyard — clients say it feels more like a resort than a salon.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((p, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 0.05}
              className="relative overflow-hidden rounded-3xl group aspect-square shadow-luxe cursor-pointer"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open ${p.alt}`}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            className="absolute top-6 right-6 text-gold hover:scale-110 transition-transform z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-4 md:left-8 text-gold hover:scale-110 transition-transform z-10"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <img
            src={photos[openIndex].src}
            alt={photos[openIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[88vh] object-contain rounded-2xl shadow-luxe"
          />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-4 md:right-8 text-gold hover:scale-110 transition-transform z-10"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
}
