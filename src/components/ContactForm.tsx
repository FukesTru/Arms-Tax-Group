'use client';

import { useState, type FormEvent } from 'react';
import { allServices } from '@/lib/services';
import { site } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Consultation request form.
 *
 * Submits to /api/contact, which currently logs the payload server-side and
 * returns success — wire it to the client's real inbox or CRM before launch
 * (see the route handler for details).
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    // Capture the form before awaiting — React nulls out currentTarget once
    // the handler yields, so reading it after the fetch would throw.
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Request failed');

      const data = (await response.json()) as { message?: string };
      setMessage(
        data.message ??
          "Thanks — your request is in. We'll be in touch shortly."
      );
      setStatus('success');
      form.reset();
    } catch {
      setMessage(
        `Something went wrong sending your message. Please call ${site.phone.display} or email ${site.email} and we'll take it from there.`
      );
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent-50 p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
          <svg
            viewBox="0 0 20 20"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m4 10.5 4 4 8-8" />
          </svg>
        </span>
        <h3 className="mt-5 text-[1.25rem]">Request received</h3>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-600">{message}</p>
        <p className="mt-5 text-[0.92rem] text-ink-600">
          Need an answer sooner?{' '}
          <a href={site.phone.href} className="font-semibold text-accent">
            Call {site.phone.display}
          </a>{' '}
          or{' '}
          <a href={site.text.href} className="font-semibold text-accent">
            text {site.text.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-card sm:p-8"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
        <div className="sm:col-span-2">
          <Field label="Email" name="email" type="email" autoComplete="email" required />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="service"
            className="mb-2 block font-display text-[0.85rem] font-semibold text-ink-900"
          >
            Service you&rsquo;re interested in
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full rounded-lg border border-ink-900/15 bg-white px-4 py-3 text-[0.96rem] text-ink-900 transition-colors focus:border-accent"
          >
            <option value="">I&rsquo;m not sure yet — help me choose</option>
            {allServices.map((service) => (
              <option key={service.href} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block font-display text-[0.85rem] font-semibold text-ink-900"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us a bit about your situation — the more context, the more useful our first call will be."
            className="w-full rounded-lg border border-ink-900/15 bg-white px-4 py-3 text-[0.96rem] text-ink-900 transition-colors placeholder:text-ink-600/50 focus:border-accent"
          />
        </div>
      </div>

      {/* Honeypot — bots fill this, humans never see it. */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company-website">Leave this field empty</label>
        <input id="company-website" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-5 rounded-lg bg-accent-50 px-4 py-3 text-[0.9rem] text-accent-700">
          {message}
        </p>
      )}

      <button
        type="submit"
        className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Request My Free Consultation'}
      </button>

      <p className="mt-4 text-center text-[0.82rem] leading-relaxed text-ink-600">
        Your information is used only to respond to your request. Read our{' '}
        <a href="/privacy-policy" className="font-semibold text-accent underline-offset-2 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-display text-[0.85rem] font-semibold text-ink-900"
      >
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-ink-900/15 bg-white px-4 py-3 text-[0.96rem] text-ink-900 transition-colors focus:border-accent"
      />
    </div>
  );
}
