import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

/** Resend client. Null when no API key is configured. */
const resend = apiKey ? new Resend(apiKey) : null;

export function isEmailConfigured(): boolean {
  return Boolean(apiKey && process.env.ENQUIRY_FROM_EMAIL && process.env.ENQUIRY_NOTIFY_EMAIL);
}

export interface EnquiryData {
  name: string;
  email: string;
  phone?: string;
  eventDate?: string;
  guestCount?: string;
  message: string;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Sends a catering enquiry notification to the restaurant. Throws if sending
 * fails so the API route can surface an error to the submitter.
 */
export async function sendEnquiryEmail(data: EnquiryData): Promise<void> {
  const from = process.env.ENQUIRY_FROM_EMAIL;
  const to = process.env.ENQUIRY_NOTIFY_EMAIL;

  if (!resend || !from || !to) {
    console.warn(
      "Email not configured (RESEND_API_KEY / ENQUIRY_FROM_EMAIL / ENQUIRY_NOTIFY_EMAIL missing); skipping."
    );
    return;
  }

  const html = `
    <h2>New catering enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ""}
    ${data.eventDate ? `<p><strong>Event date:</strong> ${escapeHtml(data.eventDate)}</p>` : ""}
    ${data.guestCount ? `<p><strong>Guest count:</strong> ${escapeHtml(data.guestCount)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
  `;

  const result = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `Catering enquiry from ${data.name}`,
    html,
  });

  if (result.error) {
    throw new Error(`Failed to send enquiry email: ${result.error.message}`);
  }
}
