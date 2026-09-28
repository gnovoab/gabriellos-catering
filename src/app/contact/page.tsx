"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      <header className="border-b border-border bg-secondary/10">
        <div className="max-w-2xl mx-auto px-6 py-14 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.5em] text-secondary font-medium">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-3 text-primary">
            Enquire About Catering
          </h1>
          <p className="text-muted-foreground mt-4">
            Tell us about your event and we&apos;ll get back to you with availability and pricing.
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        {status === "sent" ? (
          <p className="text-center text-green-700 bg-green-700/10 border border-green-700/30 rounded-lg px-4 py-6">
            Thanks! Your enquiry has been sent — we&apos;ll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Event date" name="eventDate" type="date" />
              <Field label="Guest count" name="guestCount" type="number" min="1" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium" htmlFor="message">
                Tell us about your event
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-border px-3 py-2 bg-card"
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
              className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground font-semibold px-8 py-3 shadow-sm hover:brightness-110 active:scale-[0.99] transition disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send enquiry"}
            </button>
          </form>
        )}
      </main>
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
      <label className="text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        min={min}
        className="w-full rounded-lg border border-border px-3 py-2 bg-card"
      />
    </div>
  );
}
