import { NextResponse, type NextRequest } from "next/server";
import { sendEnquiryEmail, type EnquiryData } from "@/lib/email";

// Sends a live email on every request — never prerender/cache this route.
export const dynamic = "force-dynamic";

function isValidEnquiry(body: unknown): body is EnquiryData {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    b.email.trim().length > 0 &&
    typeof b.message === "string" &&
    b.message.trim().length > 0 &&
    (b.phone === undefined || typeof b.phone === "string") &&
    (b.eventDate === undefined || typeof b.eventDate === "string") &&
    (b.guestCount === undefined || typeof b.guestCount === "string") &&
    (b.location === undefined || typeof b.location === "string") &&
    (b.eventType === undefined || typeof b.eventType === "string")
  );
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!isValidEnquiry(body)) {
    return NextResponse.json(
      { error: "Please provide your name, email, and a message." },
      { status: 400 }
    );
  }

  try {
    await sendEnquiryEmail(body);
    return NextResponse.json({ ok: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Could not send enquiry.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
