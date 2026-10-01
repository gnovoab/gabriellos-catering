import type { Metadata } from "next";
import Link from "next/link";
import { getMenuConfig, type GabriellosMenuItem } from "@/lib/db/menuConfig";
import { getSettings } from "@/lib/db/settings";
import { getCategories } from "@/lib/db/categories";
import type { MenuCategoryDoc } from "@/lib/menuCategories";
import { BrandFooter } from "@/components/BrandFooter";

export const metadata: Metadata = {
  title: "Catering Menu — Gabriello's",
  description: "Catering menu for Gabriello's — choose your pizzas for your event.",
};

// Menu data comes from MongoDB (shared with pizzaiiolo/gabriellosui), so
// without this Next.js would statically cache the page at build time and
// never reflect admin edits.
export const dynamic = "force-dynamic";

export default async function CateringMenuPage() {
  const [menu, settings, categories] = await Promise.all([getMenuConfig(), getSettings(), getCategories()]);
  const pizzas = menu.filter((i) => i.cateringAvailable).sort((a, b) => a.number - b.number);
  const sortedCategories = [...categories].sort((a, b) => a.sortOrder - b.sortOrder);
  const knownIds = new Set(sortedCategories.map((c) => c.id));
  const orphanItems = pizzas.filter((p) => !knownIds.has(p.category));
  const sections: MenuCategoryDoc[] = [
    ...sortedCategories,
    ...(orphanItems.length ? [{ id: "__other__", label: "Other", sortOrder: Infinity }] : []),
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-[#2B2B2B] border-b border-[#F4A261]/20">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-10 py-10 sm:py-14 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.5em] text-[#F4A261]/80 font-medium">
            Handmade · Napoletana
          </p>
          <h1 className="font-script text-6xl sm:text-7xl xl:text-8xl mt-3 -rotate-2 inline-block text-[#F4A261] drop-shadow-md">
            Gabriello&apos;s
          </h1>
          <p className="text-[11px] sm:text-sm uppercase tracking-[0.4em] text-[#F4A261]/80 font-medium mt-6">
            Catering — Il Menù
          </p>
          <p className="text-white/70 text-lg sm:text-xl mt-3 italic">
            Choose from our authentic Neapolitan pizzas, made with premium ingredients, for your event.
            {!settings.showPrices && " Pricing provided on request."}
          </p>
        </div>
      </header>

      <main className="bg-[#FDFBF7] pb-16">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-10 py-12 space-y-10">
          {sections.map((c) => {
            const cItems = c.id === "__other__" ? orphanItems : pizzas.filter((p) => p.category === c.id);
            if (cItems.length === 0) return null;
            return (
              <section key={c.id} className="space-y-4">
                <div className="flex items-end justify-between gap-4 border-b-2 border-[#C84B31]/20 pb-3">
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">{c.label}</h2>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">{cItems.length} pizzas</span>
                </div>
                <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 xl:grid-cols-3">
                  {cItems.map((item) => (
                    <MenuCard key={item.id} item={item} showPrice={settings.showPrices} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <div className="sticky bottom-0 inset-x-0 z-30 bg-[#2B2B2B] border-t border-[#F4A261]/25">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-10 py-4 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-white font-medium">
            Ready to serve these pizzas at your event?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#C84B31] text-white font-bold px-6 py-2.5 shadow-md hover:bg-[#B83B1D] active:scale-[0.99] transition"
          >
            Enquire Now →
          </Link>
        </div>
      </div>

      <BrandFooter />
    </div>
  );
}

function MenuCard({ item, showPrice }: { item: GabriellosMenuItem; showPrice: boolean }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="relative w-full aspect-[4/3] bg-stone-100 border-b border-stone-200 flex items-center justify-center">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="text-6xl opacity-40" aria-hidden>
            🍕
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-baseline gap-2 flex-wrap justify-between">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-sm font-mono text-primary font-semibold">№ {item.number}</span>
            <h3 className="font-serif font-semibold text-xl sm:text-2xl leading-tight text-foreground">
              {item.name}
            </h3>
          </div>
          {showPrice && (
            <span className="text-lg sm:text-xl font-serif font-semibold text-primary shrink-0">
              £{item.price.toFixed(2)}
            </span>
          )}
        </div>
        {item.style && (
          <p className="text-sm sm:text-base text-secondary italic mt-1">{item.style}</p>
        )}
        <p className="text-sm sm:text-base text-muted-foreground mt-2 leading-snug">
          {item.description}
        </p>
      </div>
    </div>
  );
}
