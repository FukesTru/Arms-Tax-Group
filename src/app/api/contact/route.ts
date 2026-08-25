import { NextResponse } from 'next/server';

/**
 * Consultation request handler.
 *
 * PRE-LAUNCH TODO: this endpoint validates and logs the submission but does
 * not yet deliver it anywhere. Before go-live, wire it to the client's inbox
 * or CRM (e.g. Resend, SendGrid, or a webhook) using a server-side API key
 * from an environment variable — never a hard-coded credential.
 */

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  companyWebsite?: string;
};

const MAX_FIELD_LENGTH = 5000;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot: silently accept so bots do not learn they were caught.
  if (payload.companyWebsite) {
    return NextResponse.json({ message: 'Thanks — your request is in.' });
  }

  const name = payload.name?.trim() ?? '';
  const phone = payload.phone?.trim() ?? '';
  const email = payload.email?.trim() ?? '';

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: 'Please provide your name, phone, and email.' },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { error: 'Please provide a valid email address.' },
      { status: 400 }
    );
  }

  const oversized = [name, phone, email, payload.service, payload.message].some(
    (field) => (field?.length ?? 0) > MAX_FIELD_LENGTH
  );

  if (oversized) {
    return NextResponse.json({ error: 'Submission too large.' }, { status: 413 });
  }

  // Placeholder delivery. Replace with real email/CRM delivery before launch.
  console.info('[contact] consultation request received', {
    name,
    email,
    phone,
    service: payload.service || 'Not specified',
  });

  return NextResponse.json({
    message:
      "Thanks — your request is in. We'll follow up shortly to schedule your free consultation.",
  });
}
