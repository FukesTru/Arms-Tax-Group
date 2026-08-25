import { addressPendingCopy, officeAddress } from '@/lib/address';

/**
 * Renders the office address, or an honest placeholder while the address
 * conflict is unresolved. Never renders a guess.
 */
export default function OfficeAddress({
  className = '',
  tone = 'light',
}: {
  className?: string;
  tone?: 'light' | 'dark';
}) {
  if (!officeAddress) {
    return (
      <p
        className={`${className} ${
          tone === 'dark' ? 'text-white/60' : 'text-ink-600'
        } italic`}
      >
        {addressPendingCopy.short}
      </p>
    );
  }

  return (
    <address className={`not-italic leading-relaxed ${className}`}>
      {officeAddress.street}
      <br />
      {officeAddress.city}, {officeAddress.state} {officeAddress.zip}
    </address>
  );
}
