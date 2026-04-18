import logo from "@/assets/ketsie-logo.jpg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Ketsie's Grooming Emporium"
      className={`object-contain ${className}`}
      loading="eager"
    />
  );
}
