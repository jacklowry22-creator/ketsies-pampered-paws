const reviews = [
  { text: "Ketsie's is a game changer! My dog used to hate grooming, but with Colette's one-on-one approach, he's so much calmer.", name: "Sarah P.", loc: "Pearl River" },
  { text: "Finally, a groomer who understands nervous dogs! Colette was patient and kind. The personalized toothbrush was a lovely touch!", name: "Mark T." },
  { text: "Highly recommend Ketsie's Dog Grooming! The stress-free environment is noticeable, and the ear plucking service is a huge plus for us.", name: "Jessica L." },
  { text: "The puppy intro groom was perfect for my 3-month-old lab! He even got a cute little bandana to take home. Ketsie's will be our regular groomer!", name: "Emily C." },
  { text: "Excellent service! My large doodle gets a full groom, and Colette handles him with such care. The hour to hour and a half timeframe is so convenient.", name: "Brian S." },
  { text: "So thankful for Ketsie's gentle approach with my senior dog. She can be anxious, but Colette was patient and gave her the individualized care she needed.", name: "Robert H." },
];

function Card({ text, name, loc }: { text: string; name: string; loc?: string }) {
  return (
    <div className="shrink-0 w-[340px] md:w-[420px] bg-charcoal/60 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 mx-3">
      <div className="flex gap-1 text-gold mb-3">
        {"★★★★★".split("").map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
      <p className="text-cream/90 text-sm leading-relaxed font-serif italic">"{text}"</p>
      <p className="mt-4 text-gold text-xs uppercase tracking-widest">
        — {name}{loc ? `, ${loc}` : ""}
      </p>
    </div>
  );
}

export function ReviewMarquee() {
  const doubled = [...reviews, ...reviews];
  return (
    <section className="bg-charcoal py-10 overflow-hidden border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center justify-between">
        <p className="text-gold uppercase tracking-[0.3em] text-xs">★★★★★ Google Reviews</p>
        <p className="text-cream/50 text-xs uppercase tracking-widest hidden md:block">Loved by Pearl River pups</p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee w-max">
          {doubled.map((r, i) => (
            <Card key={i} {...r} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-charcoal to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-charcoal to-transparent" />
      </div>
    </section>
  );
}
