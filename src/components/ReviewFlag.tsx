import { site } from '@/lib/site';
import { isAddressConfirmed } from '@/lib/address';

/**
 * Visible pre-launch review flag.
 *
 * Marks content that is deliberately unfinished because it is waiting on a
 * client decision — rather than guessing and shipping something wrong. These
 * are meant to be seen during client review.
 *
 * Every flag disappears on its own once the underlying value is confirmed in
 * lib/site.ts; there is nothing to remember to delete.
 */
export default function ReviewFlag({
  title,
  children,
  className = '',
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="note"
      className={`rounded-xl border-2 border-dashed border-amber-500/70 bg-amber-50 p-5 ${className}`}
    >
      <p className="flex items-center gap-2 font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-amber-700">
        <svg
          viewBox="0 0 16 16"
          className="h-4 w-4 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 1.8 15 14H1L8 1.8ZM8 6.5v3.2M8 11.8h.01" />
        </svg>
        Needs client confirmation — {title}
      </p>
      <div className="mt-2.5 text-[0.9rem] leading-[1.7] text-amber-900">
        {children}
      </div>
    </div>
  );
}

/** The address conflict flag, reused on every page that would show an address. */
export function AddressConflictFlag({ className = '' }: { className?: string }) {
  if (isAddressConfirmed) return null;

  const { intake, liveSite } = site.address.candidates;

  return (
    <ReviewFlag title="office address" className={className}>
      <p>
        Two different addresses are on record, in two different cities. The
        street address is suppressed sitewide — footer, Contact page, office
        page, Google Maps embed, and <code>LocalBusiness</code> schema — until
        the client confirms which is current.
      </p>
      <ul className="mt-3 space-y-1.5">
        <li>
          <strong className="font-semibold">{intake.source}:</strong>{' '}
          {intake.full}
        </li>
        <li>
          <strong className="font-semibold">{liveSite.source}:</strong>{' '}
          {liveSite.full}
        </li>
      </ul>
      <p className="mt-3">
        Because the candidates sit in different cities, confirming
        &ldquo;White Plains&rdquo; would also require rewriting the Bronx
        office page and every &ldquo;Bronx, NY&rdquo; reference on the site.
        Resolve in <code>src/lib/site.ts</code>.
      </p>
    </ReviewFlag>
  );
}
