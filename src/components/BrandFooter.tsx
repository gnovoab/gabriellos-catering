// Shared brand footer: dark charcoal backdrop with the hand-gesture photo,
// warm amber script "Gabriello's" title, and white subtext. Mirrors the
// footer used on gabriellosui's /menu page for visual consistency.
export function BrandFooter() {
  return (
    <footer className="relative w-full h-64 sm:h-80 lg:h-[26rem] overflow-hidden border-t border-[#F4A261]/25 bg-[#2B2B2B]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/bg.jpeg"
        alt="Gabriello's — chef's kiss"
        className="absolute inset-0 w-full h-full object-cover object-[30%_30%]"
      />
      <div className="absolute left-[6%] sm:left-[12%] top-[8%] sm:top-[10%] -rotate-6">
        <p className="font-script text-[#F4A261] text-5xl sm:text-7xl lg:text-8xl leading-none [text-shadow:0_4px_10px_rgba(0,0,0,0.5)]">
          Gabriello&apos;s
        </p>
        <p className="font-script text-white text-2xl sm:text-4xl lg:text-5xl leading-tight mt-1 [text-shadow:0_2px_8px_rgba(0,0,0,0.55)]">
          Authentic Napoletana Catering
        </p>
      </div>
    </footer>
  );
}
