import { Reveal } from "@/components/Reveal";
import { Heart, Clock, Sparkles, Gift, Trees, PawPrint } from "lucide-react";

const items = [
  {
    icon: Heart,
    title: "True One-on-One Care",
    body: "Your dog is the star! We offer dedicated one-on-one sessions by request — perfect for nervous, anxious, or senior dogs. While we typically manage appointments to keep our studio quiet, these dedicated solo sessions ensure your pup is the only dog in the room during their groom. Please request this at the time of booking!",
  },
  {
    icon: Clock,
    title: "Efficient Turnaround",
    body: "Busy schedule? Most grooms are completed efficiently within an hour to an hour and a half, allowing you to get your furry friend back home quickly.",
  },
  {
    icon: Sparkles,
    title: "Unique, High-Quality Products",
    body: "We prioritize natural ingredients from trusted, exclusive brands. From a calming oatmeal bath to a tearless puppy clean to a nourishing treatment for dark coats — only the best.",
  },
  {
    icon: Gift,
    title: "Handmade Take-Home Goodies",
    body: "Every groomed pup gets a beautiful, handmade bandana or bowtie, lovingly crafted by Colette herself — a special keepsake from their visit!",
  },
  {
    icon: Trees,
    title: "Relaxing Backyard Cooldown",
    body: "Our fully fenced, private backyard provides a safe, gorgeous space for dogs to play and relax while they wait for pickup — koi pond, gardens, and all.",
  },
  {
    icon: PawPrint,
    title: "Our Grooming Philosophy",
    body: "We take immense pride in being different. Unlike high-volume salons that keep dogs in cages for hours, we prioritize efficiency, safety, and a calm atmosphere. Every groom is handled with the same dedication we'd give our own pets.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="bg-charcoal text-cream py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 25% 20%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 75% 80%, var(--gold) 0%, transparent 50%)",
      }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-5">The Difference</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Why families choose <em className="text-gradient-gold not-italic">Ketsie's</em>
          </h2>
          <div className="gold-divider w-32 mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={i * 0.05}
                className="group relative bg-cream/[0.03] backdrop-blur-sm border border-gold/15 rounded-3xl p-8 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-charcoal" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl mb-3 text-cream">{item.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{item.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
