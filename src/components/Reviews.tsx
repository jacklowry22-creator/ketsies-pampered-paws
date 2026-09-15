import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    text: "I cannot thank this groomer enough for her help with my bulldog. He was sprayed by a skunk and I called Ketsie — she got me in that day, made my dog so comfortable, and helped get the smell out of him. She also told me what to do to help the smell in my house and my car. She was incredibly helpful and most importantly my dog trusted her and remained calm through the process. I highly recommend using this business and will be back for sure.",
    name: "Meaghan McKenna",
    loc: "Bulldog mom",
    date: "Google review",
  },
  {
    text: "Collette is such a gem of a Groomer. Her place is spotless, not to mention walking in from the outside is a sanctuary! She was great with my dog and so helpful with sharing pet resources. I highly recommend this private business!",
    name: "Janet O'Shea",
    loc: "Google review",
    date: "10 weeks ago",
  },
  {
    text: "Immaculate service and features, owner is knowledgeable and walked us through every step of the service, as well as gave us product recommendations to keep our puppy's skin and paws healthy. Phenomenal place and will be returning ♥",
    name: "Drea M.",
    loc: "Puppy parent",
    date: "Google review",
  },
  {
    text: "I can't recommend Collette and Ketsie's Dog Grooming enough! She runs everything out of her beautiful home, and it's the cleanest, freshest, most state-of-the-art grooming setup I've ever seen. You can tell she really cares about what she does. It's so much more than just great grooming. Collette has been there for me and my dog through some really tough times in my life. No matter what was going on, I always felt like my dog was safe, loved, and in the best hands. She's given me advice, gone way above and beyond, and just made me feel so welcomed and accepted every single time. She's honestly become a real friend to me and my family. I trust her completely. If you're looking for someone who will treat your dog like their own and actually care about you too, stop searching. Go to Collette. I tell everyone I know about her! Thank you Collette for everything — you're the best!!",
    name: "Nicole Duffy",
    loc: "Cafe Diem Owner, Local Resident",
    date: "21 weeks ago",
  },
  {
    text: "I cannot recommend Ms. Colette enough as a dog groomer. She is truly one of the most patient, skilled, and compassionate groomers I have ever trusted with my dog. My dog Zucc is a large, fluffy dog — Colette always handles it with kindness, patience, and professionalism. Zucc is always relaxed with her, which says everything.",
    name: "Mary Russo",
    loc: "Pearl River",
    date: "3 months ago",
  },
  {
    text: "From the moment I spoke with Colette, I felt completely at ease. She grooms out of her home and only takes one dog at a time, which is incredibly comforting for anxious dogs. When I picked her up, she looked absolutely perfect! I knew I'd found someone I can truly trust.",
    name: "Cassandra Steidl",
    loc: "Dachshund mom",
    date: "5 months ago",
  },
  {
    text: "I've been bringing my dog to Ketsie's for a couple of years now, and Colette is truly amazing. My dog, who is usually anxious around new people, is always calm and comfortable with her. The grooming space is always clean and organized, and Colette works efficiently without ever compromising the quality.",
    name: "Jennifer Dalceredo",
    loc: "Pearl River",
    date: "1 year ago",
  },
  {
    text: "I highly recommend Ketsie's Grooming! When we arrive at the house, Whiskey gets so excited — she pulls me to the door. This is very comforting because I know she is happy to be there. Colette always listens to concerns and also has great advice. 5 stars all the way!",
    name: "Kathleen Toal",
    loc: "Golden/Labradoodle mom",
    date: "1 year ago",
  },
  {
    text: "Colette is so amazing with my dog. He gets nervous when I try to touch and clip nails and she does it so perfectly! You can tell she really cares about animals. We are customers for life. I wholeheartedly recommend her!!!",
    name: "Colleen Mannion",
    loc: "Pearl River",
    date: "6 months ago",
  },
  {
    text: "Colette is amazing — our 2-year-old Cavapoo Finley looks so cute! He hadn't had a groom since December so he was overdue. We're so happy he looks so cute and clean!",
    name: "Paula Siciliano",
    loc: "Cavapoo mom",
    date: "3 months ago",
  },
  {
    text: "Highly recommend Ketsie's Dog Grooming! I recently took my anxious dog Morgan here and couldn't be more pleased. Morgan is usually very nervous around strangers and grooming tools, but Colette was incredibly patient and gentle. I could tell she wasn't as stressed as she usually is after grooming.",
    name: "Mikayla Cunney",
    loc: "Pearl River",
    date: "1 year ago",
  },
  {
    text: "Colette is absolutely amazing. This is the best experience ever at a groomer. She's so gentle and the pup loved her. The grooming area is spotless — such an amazing find. We will be back very soon.",
    name: "Donna Griffith-Holm",
    loc: "Pearl River",
    date: "5 months ago",
  },
  {
    text: "We take our XL labradoodle Ziggy here and we couldn't be happier with the results! Colette is an expert groomer and has a natural gift — so attentive and professional, and goes the extra mile. The environment is very clean and welcoming and we know our baby is in good hands.",
    name: "Katherine Morris",
    loc: "XL Labradoodle mom",
    date: "1 year ago",
  },
  {
    text: "Colette is an absolute gem. She not only provided top-notch grooming for my dog but also ensured a calm and friendly environment. My dog has never looked better, and the personal attention Colette gives to each pet is unmatched. Highly recommend Ketsie's Grooming to all pet owners!",
    name: "Julio Cotto",
    loc: "Pearl River",
    date: "1 year ago",
  },
  {
    text: "Not only was the price significantly better than our old mobile groomer, but Colette's work is absolutely outstanding. Our golden doodle received the most beautiful cut and looks happier and fluffier than ever. Colette is the kindest person you'll ever meet. Ketsie's Dog Grooming is now our go-to!",
    name: "Marianne Forgione",
    loc: "Goldendoodle mom",
    date: "1 year ago",
  },
  {
    text: "Colette really knows how to handle dogs — even my nervous pup felt at ease with her. The grooming was done in just an hour, and my dog came out looking and smelling amazing. It's clear she genuinely cares about every dog she works with. I'll definitely be coming back!",
    name: "John",
    loc: "Pearl River",
    date: "1 year ago",
  },
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
              <figcaption className="mt-6">
                <span className="block text-gold uppercase tracking-widest text-xs">
                  — {r.name}{r.loc ? `, ${r.loc}` : ""}
                </span>
                <span className="block text-gold/50 text-[10px] uppercase tracking-widest mt-1">
                  {r.date}
                </span>
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
            <span className="text-lg">★</span> See All 67+ Google Reviews
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
