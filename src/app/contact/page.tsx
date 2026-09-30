"use client";

import { useState, type FormEvent } from "react";
import { BrandFooter } from "@/components/BrandFooter";

const FAQS = [
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 3–4 weeks ahead, especially for weekend weddings and summer events. Smaller last-minute bookings may still be possible — just ask.",
  },
  {
    q: "Can you cater for dietary requirements?",
    a: "Yes — we offer vegetarian, vegan and gluten-free bases as standard. Let us know your guests' needs in the Special Notes field and we'll plan the menu around them.",
  },
  {
    q: "What space and power do you need on-site?",
    a: "A compact, clear area of roughly 2m x 2m for our Gozney oven and prep station. No power hookup is required — our high-heat gas setup is clean, smokeless and self-contained.",
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      eventDate: String(data.get("eventDate") ?? ""),
      location: String(data.get("location") ?? ""),
      eventType: String(data.get("eventType") ?? ""),
      guestCount: String(data.get("guestCount") ?? ""),
      message: String(data.get("message") ?? ""),
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
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Could not send enquiry.");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen">
      <header className="bg-[#2B2B2B] border-b border-[#F4A261]/20">
        <div className="max-w-5xl mx-auto px-6 py-14 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.5em] text-[#F4A261]/80 font-medium">
            Get In Touch
          </p>
          <h1 className="font-script text-6xl sm:text-7xl mt-3 -rotate-2 inline-block text-[#F4A261] drop-shadow-md">
            Gabriello&apos;s
          </h1>
          <p className="text-[11px] sm:text-sm uppercase tracking-[0.4em] text-[#F4A261]/80 font-medium mt-4">
            Enquire About Catering
          </p>
          <p className="text-white/70 mt-4 max-w-xl mx-auto">
            Tell us about your event and we&apos;ll get back to you with availability and pricing.
          </p>
        </div>
      </header>

      <main className="bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto px-6 py-12 grid gap-10 lg:grid-cols-2 items-start">
          {/* Left column: contact details, venue specs, FAQ */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">Contact Details</h2>
              <p className="text-muted-foreground mt-2">
                Prefer email? Reach us directly at{" "}
                <a href="mailto:hello@gabriellos.co.uk" className="text-primary underline underline-offset-2">
                  hello@gabriellos.co.uk
                </a>
                . We usually reply within one business day.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">On-Site Gozney Setup</h2>
              <ul className="mt-2 space-y-1.5 text-muted-foreground text-sm leading-relaxed list-disc list-inside">
                <li>Compact footprint: Clear area of roughly 2m x 2m for our Gozney oven and prep station.</li>
                <li>Clean &amp; Smokeless: High-heat gas setup allowing authentic Neapolitan cooking without heavy wood smoke.</li>
                <li>Self-contained: Quick setup and teardown for gardens, driveways, or event spaces.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">Frequently Asked Questions</h2>
              <div className="mt-2 divide-y divide-stone-200 border border-stone-200 rounded-2xl bg-white">
                {FAQS.map((item, i) => (
                  <div key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-medium text-foreground"
                    >
                      {item.q}
                      <span className="text-primary shrink-0">{openFaq === i ? "−" : "+"}</span>
                    </button>
                    {openFaq === i && (
                      <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: full enquiry form */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            {status === "sent" ? (
              <p className="text-center text-green-700 bg-green-700/10 border border-green-700/30 rounded-lg px-4 py-6">
                Thanks! Your enquiry has been sent — we&apos;ll be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Event Date" name="eventDate" type="date" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Location / Postcode" name="location" />
                  <div className="space-y-1.5">
                    <label className="text-stone-800 font-semibold text-sm" htmlFor="eventType">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      defaultValue=""
                      className="w-full rounded-xl bg-white text-stone-900 border border-stone-300 px-4 py-3 focus:outline-none focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31]"
                    >
                      <option value="" disabled>
                        Select an event type
                      </option>
                      <option value="Wedding">Wedding</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Private Party">Private Party</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <Field label="Guest Count" name="guestCount" type="number" min="1" />
                <div className="space-y-1.5">
                  <label className="text-stone-800 font-semibold text-sm" htmlFor="message">
                    Special Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Dietary requirements, venue details, anything else we should know…"
                    className="w-full rounded-xl bg-white text-stone-900 border border-stone-300 px-4 py-3 focus:outline-none focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31]"
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
                  className="w-full rounded-full bg-[#C84B31] text-white font-bold py-3.5 shadow-md hover:bg-[#B83B1D] active:scale-[0.99] transition disabled:opacity-50"
                >
                  {status === "sending" ? "Sending…" : "Submit Catering Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <BrandFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-stone-800 font-semibold text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        min={min}
        className="w-full rounded-xl bg-white text-stone-900 border border-stone-300 px-4 py-3 focus:outline-none focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31]"
      />
    </div>
  );
}
