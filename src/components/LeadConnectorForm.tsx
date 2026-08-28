import Script from 'next/script';
import { site } from '@/lib/site';
import {
  estimateSavings,
  formatUsd,
  type EstimateInput,
} from '@/lib/estimateSavings';

/**
 * LeadConnector (HighLevel) embedded consultation form.
 *
 * Replaces the previous in-app form. Submissions go directly to the client's
 * LeadConnector inbox — this app neither receives nor stores them, which is
 * why the old /api/contact route was removed rather than left dangling.
 *
 * `form_embed.js` listens for a postMessage from the iframe and resizes it to
 * fit. The iframe is given an explicit starting height rather than the
 * `height:100%` in the vendor snippet: percentage height against an
 * auto-height parent collapses to zero, so if the script is slow, blocked by
 * an ad blocker, or fails outright, the form would render as an invisible
 * strip. Starting at its natural height means the worst case is a form that
 * does not auto-resize, not one that disappears.
 *
 * `estimate` carries the hero estimator's slider values through to the form.
 * They are appended to the iframe URL under the keys in
 * site.leadConnector.prefillKeys, which are unconfirmed — so the estimate is
 * also rendered above the form as plain text. If prefill silently fails the
 * visitor can still read their numbers back, rather than the context being
 * lost between the two pages.
 */
export default function LeadConnectorForm({
  estimate,
}: {
  estimate?: EstimateInput | null;
}) {
  const { contactFormId, contactFormName, contactFormHeight, prefillKeys } =
    site.leadConnector;
  const iframeId = `inline-${contactFormId}`;

  const base = `https://api.leadconnectorhq.com/widget/form/${contactFormId}`;
  let src = base;
  let summary: string | null = null;

  if (estimate) {
    const { savings } = estimateSavings(estimate);
    const params = new URLSearchParams({
      [prefillKeys.income]: String(estimate.income),
      [prefillKeys.deductions]: String(estimate.deductions),
      [prefillKeys.savings]: String(savings),
    });
    src = `${base}?${params.toString()}`;
    summary = `${formatUsd(estimate.income)} annual income, ${estimate.deductions} ${
      estimate.deductions === 1 ? 'deduction' : 'deductions'
    } possibly missed. Estimated saving: ${formatUsd(savings)} a year.`;
  }

  return (
    <div
      className="overflow-hidden rounded-xl"
      style={{ minHeight: contactFormHeight }}
    >
      {summary && (
        <div className="mb-5 rounded-xl border border-accent/25 bg-accent-50 p-4">
          <p className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-accent">
            From your estimate
          </p>
          <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-700">
            {summary}
          </p>
          <p className="mt-2 text-[0.8rem] leading-relaxed text-ink-600">
            An estimate only, not a quote. We will work out your real number on
            the call.
          </p>
        </div>
      )}

      <iframe
        src={src}
        style={{
          width: '100%',
          height: contactFormHeight,
          border: 'none',
          borderRadius: 10,
        }}
        id={iframeId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={contactFormName}
        data-height={contactFormHeight}
        data-layout-iframe-id={iframeId}
        data-form-id={contactFormId}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title={contactFormName}
      />

      <Script
        id="leadconnector-form-embed"
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
