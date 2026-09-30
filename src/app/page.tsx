"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { BrandFooter } from "@/components/BrandFooter";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1763647836753-e06fe1f8707b?fm=jpg&q=70&w=2400&auto=format&fit=crop"
          alt="Gozney oven firing an authentic Neapolitan pizza"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a120b]/75" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-28 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.5em] text-[#F4A261] font-medium">
            Handmade · Napoletana · Premium Ingredients
          </p>
          <h1 className="text-5xl sm:text-6xl font-semibold mt-4 flex flex-wrap items-baseline justify-center gap-x-4">
            <span className="font-script text-6xl sm:text-7xl -rotate-2 inline-block text-[#F4A261]">
              Gabriello&apos;s
            </span>
            <span className="font-serif text-white">Catering</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Bring authentic Neapolitan pizza to your wedding, party, or corporate event.
            We travel to your venue — handmade dough, top-shelf ingredients,
            stretched and fired fresh on site.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-primary text-primary-foreground font-semibold px-8 py-3 shadow-sm hover:brightness-110 active:scale-[0.99] transition"
            >
              Enquire about your event
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {[
              "🔥 On-Site Gozney 500°C Oven",
              "🍕 20–200+ Guests",
              "⭐ 4.9 Rated Service",
            ].map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium px-4 py-2"
              >
                {badge}
              </span>
            ))}
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
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Fior di Latte",
                body: "Fresh cow's milk mozzarella, torn and layered by hand for a soft, creamy melt.",
                image:
                  "https://images.unsplash.com/photo-1754325287655-3f687f6e14d7?fm=jpg&q=70&w=1200&auto=format&fit=crop",
              },
              {
                title: "San Marzano DOP Tomatoes",
                body: "Hand-crushed for a naturally sweet, rich base.",
                image:
                  "https://images.unsplash.com/photo-1768676124519-5b997fe3de4a?fm=jpg&q=70&w=1200&auto=format&fit=crop",
              },
              {
                title: "Premium Cured Meats",
                body: "Artisanal cured meats, sourced for authentic flavour.",
                image:
                  "https://images.unsplash.com/photo-1631481038687-b2aac5a28130?fm=jpg&q=70&w=1200&auto=format&fit=crop",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative h-64 rounded-2xl overflow-hidden shadow-sm group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <h3 className="font-serif text-lg font-semibold text-white">{card.title}</h3>
                  <p className="text-white/85 mt-1 text-sm leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
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
            { step: "3", title: "We Arrive & Set Up", body: "Our team arrives with everything needed and sets up on site before your event starts." },
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
        <div className="max-w-2xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold">Ready to plan your event?</h2>
            <p className="text-muted-foreground mt-3">
              Tell us a bit about it and we&apos;ll get back to you with availability and pricing.
            </p>
          </div>
          <QuickEnquiryForm />
          <p className="text-center text-sm text-muted-foreground mt-6">
            Prefer to share more details?{" "}
            <Link href="/contact" className="text-stone-800 underline hover:text-[#C84B31]">
              Use the full enquiry form
            </Link>
            .
          </p>
        </div>
      </section>

      <BrandFooter />
    </div>
  );
}

function QuickEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [guestCount, setGuestCount] = useState(50);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const eventDate = String(data.get("eventDate") ?? "");

    const payload = {
      name,
      email,
      eventDate,
      guestCount: String(guestCount),
      message: `Quick quote request from the homepage. Guests: ${guestCount}${
        eventDate ? `, event date: ${eventDate}` : ""
      }.`,
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}) as { error?: string });
        throw new Error(body.error ?? `Could not send (${res.status})`);
      }
      setStatus("sent");
      form.reset();
      setGuestCount(50);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Could not send enquiry.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="mt-8 text-center text-green-700 bg-green-700/10 border border-green-700/30 rounded-2xl px-4 py-6">
        Thanks! Your enquiry has been sent — we&apos;ll be in touch soon with a quote.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-stone-800 font-semibold text-sm" htmlFor="qf-name">
            Full Name
          </label>
          <input
            id="qf-name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg bg-white text-stone-900 border border-stone-300 px-3 py-2 focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31] focus:outline-none"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-stone-800 font-semibold text-sm" htmlFor="qf-email">
            Email
          </label>
          <input
            id="qf-email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg bg-white text-stone-900 border border-stone-300 px-3 py-2 focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31] focus:outline-none"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="text-stone-800 font-semibold text-sm" htmlFor="qf-date">
          Event Date
        </label>
        <input
          id="qf-date"
          name="eventDate"
          type="date"
          className="w-full rounded-lg bg-white text-stone-900 border border-stone-300 px-3 py-2 focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31] focus:outline-none"
        />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-baseline justify-between">
          <label className="text-stone-800 font-semibold text-sm" htmlFor="qf-guests">
            Guest Count
          </label>
          <span className="text-sm font-semibold text-primary">{guestCount} guests</span>
        </div>
        <input
          id="qf-guests"
          name="guestCountRange"
          type="range"
          min={10}
          max={300}
          step={5}
          value={guestCount}
          onChange={(e) => setGuestCount(Number(e.target.value))}
          className="w-full accent-primary"
        />
      </div>

      {status === "error" && errorMessage && (
        <p className="text-sm text-destructive border border-destructive/30 bg-destructive/10 rounded-lg px-4 py-3">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-primary text-primary-foreground font-semibold px-8 py-3 shadow-sm hover:brightness-110 active:scale-[0.99] transition disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Get Instant Quote"}
      </button>
    </form>
  );
}
