import { Reveal } from "@/components/Reveal";

const reviews = [
  { text: "Ketsie's is a game changer! My dog used to hate grooming, but with Colette's one-on-one approach, he's so much calmer.", name: "Sarah P.", loc: "Pearl River" },
  { text: "Finally, a groomer who understands nervous dogs! Colette was patient and kind. The personalized toothbrush was a lovely touch!", name: "Mark T." },
  { text: "Highly recommend Ketsie's Dog Grooming! The stress-free environment is noticeable, and the ear plucking service is a huge plus for us.", name: "Jessica L." },
  { text: "The puppy intro groom was perfect for my 3-month-old lab! He even got a cute little bandana to take home. Ketsie's will be our regular groomer!", name: "Emily C." },
  { text: "Excellent service! My large doodle gets a full groom, and Colette handles him with such care. The hour to hour and a half timeframe is so convenient.", name: "Brian S." },
  { text: "So thankful for Ketsie's gentle approach with my senior dog. She can be anxious, but Colette was patient and gave her the individualized care she needed.", name: "Robert H." },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-charcoal text-cream py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-5">★★★★★ Reviews</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            What Pearl River <em className="text-gradient-gold not-italic">is saying</em>
          </h2>
          <div className="gold-divider w-32 mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal
              key={i}
              as="figure"
              delay={i * 0.05}
              className="relative bg-cream/[0.03] border border-gold/15 rounded-3xl p-8 hover:border-gold/40 transition-colors"
            >
              <div className="flex gap-1 text-gold mb-4">
                {"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}
              </div>
              <blockquote className="font-serif italic text-cream/90 text-lg leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 text-gold uppercase tracking-widest text-xs">
                — {r.name}{r.loc ? `, ${r.loc}` : ""}
              </figcaption>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://share.google/SOSlKwz1AnW3fGiey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-gold text-charcoal px-8 py-4 rounded-full font-semibold tracking-wide shadow-gold hover:scale-105 transition-transform"
          >
            <span className="text-lg">★</span> See All 60+ Google Reviews
          </a>
          <a
            href="https://g.page/r/Ca_xXkKYc9T5EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gold/60 text-cream px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-gold/10 transition-colors"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}
