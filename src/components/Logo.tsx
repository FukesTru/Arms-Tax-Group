import Image from 'next/image';
import { site } from '@/lib/site';

/**
 * Brand logo.
 *
 * The client's logo is a SQUARE lockup — a house/roof mark above "THE
 * A.R.M.S. CORP." — drawn in black and crimson. Two consequences drive this
 * component:
 *
 * 1. The lettering is black, and most of our surfaces (header, footer) are
 *    near-black. On those, the logo is placed on a white rounded chip so it
 *    stays legible. This also works if the supplied PNG has a white rather
 *    than transparent background — the chip simply rounds its corners.
 *
 * 2. It is square, not a horizontal wordmark, so it cannot be sized by height
 *    alone the way a wordmark can. Sizes here are deliberate: large enough
 *    that "A.R.M.S." and "CORP." stay readable in a slim sticky header.
 *
 * Expects the logo at /public/logo.png.
 */

export const LOGO_SRC = '/logo.png';

type LogoProps = {
  /** 'onDark' adds the white chip; 'onLight' renders the logo bare. */
  variant?: 'onDark' | 'onLight';
  /** Rendered edge length in pixels. */
  size?: number;
  /** Set on the header instance so the logo is not lazy-loaded. */
  priority?: boolean;
  className?: string;
};

export default function Logo({
  variant = 'onDark',
  size = 56,
  priority = false,
  className = '',
}: LogoProps) {
  const image = (
    <Image
      src={LOGO_SRC}
      alt={`${site.brandName} logo`}
      width={512}
      height={512}
      priority={priority}
      className="h-full w-full object-contain"
    />
  );

  if (variant === 'onLight') {
    return (
      <span
        className={`block shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        {image}
      </span>
    );
  }

  return (
    <span
      className={`block shrink-0 rounded-lg bg-white p-1 ${className}`}
      style={{ width: size, height: size }}
    >
      {image}
    </span>
  );
}
