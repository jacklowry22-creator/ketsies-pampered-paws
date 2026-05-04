import { useReveal } from "@/hooks/use-reveal";
import dogBath from "@/assets/dog-bath.jpg";
import dogEarmuffs from "@/assets/dog-earmuffs.jpg";
import baileyFrontDoor from "@/assets/bailey-front-door.webp";

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="bg-cream py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div ref={ref} className="reveal order-2 lg:order-1">
          <p className="text-gold-deep uppercase tracking-[0.4em] text-xs mb-5">Our Story</p>
          <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-[1.05] mb-8">
            Driven by a deep love<br />for animals.
          </h2>
          <div className="gold-divider w-24 mb-8" />
          <div className="space-y-5 text-charcoal/80 leading-relaxed text-[15px] md:text-base">
            <p>
              My journey to creating Ketsie's Dog Grooming was driven by a deep love for animals
              and a desire to offer something truly special for your beloved pets. After years of
              experience in a traditional grooming salon, I knew I had more to give. I witnessed
              firsthand the stress and fear many dogs experienced in busy environments.
            </p>
            <p>
              Connecting with so many wonderful pet owners has been the driving force behind
              Ketsie's. Your feedback, recommendations, and unwavering support are the reasons I
              get to do what I love every single day.
            </p>
            <p>
              My grooming studio is not just a place of business; it's a spacious, meticulously
              clean, and welcoming environment, fully equipped and ready for any pup that comes
              through the door — from the tiniest teacups to the largest gentle giants, including
              our beloved senior dogs. I strive to never turn a dog away and always aim to provide
              a caring solution.
            </p>
            <p>
              This business model isn't just about being different; it's about being more
              efficient, more caring, and ultimately, providing the best possible experience for
              your furry family member. As a special touch, every pup I groom leaves with a
              beautiful handmade, hand-sewn bandana or bowtie that I create myself!
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-xs uppercase tracking-widest">
            <span className="px-3 py-1.5 rounded-full border border-gold-deep/30 text-gold-deep">10+ Years Professional Grooming</span>
            <span className="px-3 py-1.5 rounded-full border border-gold-deep/30 text-gold-deep">Lifetime With Animals</span>
            <span className="px-3 py-1.5 rounded-full border border-gold-deep/30 text-gold-deep">Raised on a Farm</span>
          </div>
          <p className="mt-6 text-charcoal/75 text-[15px] leading-relaxed italic">
            10 years professionally grooming. A lifetime with animals and pets. Colette grew up on a farm, always loved animals, and has always had pet dogs throughout her life.
          </p>
          <p className="mt-8 font-display italic text-2xl text-gold-deep">— Colette</p>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe">
            <img src={dogBath} alt="Happy golden retriever in the spa tub" className="w-full h-full object-cover" />
          </div>
          <div className="hidden xl:block absolute -bottom-10 -left-8 w-44 h-56 rounded-2xl overflow-hidden shadow-luxe border-4 border-cream rotate-[-4deg]">
            <img src={dogEarmuffs} alt="Calm golden retriever wearing protective ear muffs during grooming" className="w-full h-full object-cover" />
          </div>
          <div className="hidden xl:block absolute -top-8 -right-6 w-36 h-44 rounded-2xl overflow-hidden shadow-luxe border-4 border-cream rotate-[5deg]">
            <img src={baileyFrontDoor} alt="Bailey the golden retriever at the studio's flower-lined front door" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
