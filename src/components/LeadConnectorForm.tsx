import Script from 'next/script';
import { site } from '@/lib/site';

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
 */
export default function LeadConnectorForm() {
  const { contactFormId, contactFormName, contactFormHeight } =
    site.leadConnector;
  const iframeId = `inline-${contactFormId}`;

  return (
    <div
      className="overflow-hidden rounded-xl"
      style={{ minHeight: contactFormHeight }}
    >
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${contactFormId}`}
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
