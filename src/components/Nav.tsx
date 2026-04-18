import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/90 backdrop-blur-md py-2 shadow-luxe"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="text-3xl md:text-4xl" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-[0.2em] text-cream/90 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:8455586870"
            className="inline-flex items-center gap-2 bg-gradient-gold text-charcoal px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-gold hover:scale-105 transition-transform"
          >
            <Phone className="w-4 h-4" /> 845-558-6870
          </a>
        </nav>

        <button
          aria-label="Menu"
          className="lg:hidden text-cream"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-charcoal/95 backdrop-blur-lg mt-2 mx-4 rounded-2xl border border-gold/20 p-6 animate-fade-up">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-cream uppercase tracking-widest text-sm py-2 border-b border-gold/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:8455586870"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-gold text-charcoal px-5 py-3 rounded-full font-semibold"
            >
              <Phone className="w-4 h-4" /> Call 845-558-6870
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
