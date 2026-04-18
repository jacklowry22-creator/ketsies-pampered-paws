import { useReveal } from "@/hooks/use-reveal";
import { Reveal } from "@/components/Reveal";
import dogBackyard from "@/assets/dog-backyard.jpg";
import dogDachshund from "@/assets/dog-dachshund.jpg";
import dogCavapoo from "@/assets/dog-cavapoo.jpg";
import dogBernese from "@/assets/dog-bernese.jpg";
import puppyHaircut from "@/assets/puppy-first-haircut.jpg";
import dogBandanaDeck from "@/assets/dog-bandana-deck.jpg";

// 3-col grid, 2 rows. Bottom-left replaced with the new puppy first-haircut photo.
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
              className="relative overflow-hidden rounded-3xl group aspect-square shadow-luxe"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
