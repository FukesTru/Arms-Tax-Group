import {
  addressPendingCopy,
  mapsDirectionsUrl,
  mapsEmbedSrc,
  officeAddress,
} from '@/lib/address';
import { site } from '@/lib/site';
import { AddressConflictFlag } from './ReviewFlag';

/**
 * Google Maps embed for the office.
 *
 * While the address conflict is unresolved there is nothing correct to point
 * the map at, so the embed is replaced by a placeholder rather than dropping
 * a pin on a guess.
 *
 * `showFlag` controls whether the full review flag is repeated here. Pages
 * that already render AddressConflictFlag near the top pass false, so the
 * explanation appears once per page instead of twice.
 */
export default function MapEmbed({
  className = '',
  showFlag = false,
}: {
  className?: string;
  showFlag?: boolean;
}) {
  if (!officeAddress || !mapsEmbedSrc) {
    return (
      <div
        className={`rounded-2xl border border-dashed border-ink-900/20 bg-ink-900/[0.02] p-8 text-center ${className}`}
      >
        {showFlag && <AddressConflictFlag className="mb-6 text-left" />}
        <p className="font-display text-[0.95rem] font-bold text-ink-900">
          {addressPendingCopy.short}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-[0.92rem] leading-relaxed text-ink-600">
          {addressPendingCopy.long}{' '}
          <a href={site.phone.href} className="font-semibold text-accent hover:underline">
            Call {site.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-ink-900/10 shadow-card ${className}`}
    >
      <iframe
        src={mapsEmbedSrc}
        title={`Map showing ${site.brandName} at ${officeAddress.full}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-[340px] w-full border-0 md:h-full md:min-h-[420px]"
      />
      {mapsDirectionsUrl && (
        <a href={mapsDirectionsUrl} className="sr-only" target="_blank" rel="noopener noreferrer">
          Get directions to {officeAddress.full}
        </a>
      )}
    </div>
  );
}
