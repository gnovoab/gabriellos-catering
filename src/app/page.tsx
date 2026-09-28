import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-secondary/10">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.5em] text-secondary font-medium">
            Handmade · Napoletana · Premium Ingredients
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold mt-4 text-primary">
            Gabriello&apos;s Catering
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Bring authentic Neapolitan pizza to your wedding, party, or corporate event.
            Our pizzaiolo travels to you — handmade dough, top-shelf ingredients,
            stretched and fired fresh in front of your guests.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-primary text-primary-foreground font-semibold px-8 py-3 shadow-sm hover:brightness-110 active:scale-[0.99] transition"
            >
              Enquire about your event
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-3 text-center">
        <div>
          <h2 className="font-serif text-xl font-semibold">Fresh, On Site</h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Dough proofed for 48 hours, stretched and fired fresh in front of your guests.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-xl font-semibold">Any Occasion</h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Weddings, birthdays, corporate events — we scale from 20 to 200+ guests.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-xl font-semibold">Full Menu Available</h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Choose from our classic and innovative pizzas — see the{" "}
            <Link href="/menu" className="text-primary underline underline-offset-2">
              full catering menu
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/10">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary">
              Prime Ingredients, No Shortcuts
            </h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              What sets our pizza apart is what goes on it — carefully sourced, top-quality ingredients in every bite.
            </p>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3 text-center">
            <div>
              <h3 className="font-serif text-lg font-semibold text-primary">Fior di Latte</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Fresh cow&apos;s milk mozzarella, torn and layered by hand for a soft, creamy melt.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-primary">San Marzano DOP Tomatoes</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Hand-crushed for a naturally sweet, rich base.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-primary">Premium Cured Meats</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Artisanal cured meats, sourced for authentic flavour.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mt-10 text-center max-w-2xl mx-auto leading-relaxed">
            Every ingredient is chosen for quality first, so every pizza tastes the way it should.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary">
            How It Works
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            From enquiry to the last slice — simple, and handled for you.
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "1", title: "You Enquire", body: "Tell us your date, guest count and venue — we'll confirm availability and pricing." },
            { step: "2", title: "Choose Your Menu", body: "Pick pizzas from our catering menu, or let us recommend a spread for your guests." },
            { step: "3", title: "We Arrive & Set Up", body: "Our pizzaiolo arrives with everything needed and sets up on site before your event starts." },
            { step: "4", title: "Fresh, To Order", body: "Each pizza is stretched, topped and fired fresh, then served hot straight to your guests." },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary text-primary-foreground font-serif font-semibold text-lg flex items-center justify-center">
                {s.step}
              </div>
              <h3 className="font-serif text-lg font-semibold mt-4">{s.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/10">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-3xl font-semibold">Ready to plan your event?</h2>
          <p className="text-muted-foreground mt-3">
            Tell us a bit about it and we&apos;ll get back to you with availability and pricing.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-primary text-primary-foreground font-semibold px-8 py-3 shadow-sm hover:brightness-110 active:scale-[0.99] transition"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
