import { useReveal } from "@/hooks/use-reveal";
import { Reveal } from "@/components/Reveal";
import dogBackyard from "@/assets/dog-backyard.jpg";
import dogBath from "@/assets/dog-bath.jpg";
import dogAussie from "@/assets/dog-aussie.jpg";
import dogDachshund from "@/assets/dog-dachshund.jpg";

const photos = [
  { src: dogBackyard, alt: "Golden retriever in the lush backyard with fresh-caught trout", span: "md:row-span-2" },
  { src: dogDachshund, alt: "Long-haired dachshund being groomed", span: "" },
  { src: dogAussie, alt: "Australian shepherd lounging in the sunlit studio", span: "md:col-span-2" },
  { src: dogBath, alt: "Golden retriever in the stainless spa tub", span: "" },
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

        <div className="grid md:grid-cols-3 md:auto-rows-[300px] gap-4">
          {photos.map((p, i) => (
            <Reveal
              key={i}
              className={`relative overflow-hidden rounded-3xl group ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
