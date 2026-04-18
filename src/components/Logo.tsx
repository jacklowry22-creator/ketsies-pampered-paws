export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-gradient-gold leading-none tracking-tight ${className}`}
      style={{ fontStyle: "italic", fontWeight: 500 }}
      aria-label="Ketsie's Dog Grooming"
    >
      Ketsie's
    </span>
  );
}
