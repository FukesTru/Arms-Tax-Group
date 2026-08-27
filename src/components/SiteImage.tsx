import Image from 'next/image';
import type { SiteImageAsset } from '@/lib/images';

/**
 * Renders an image slot from the manifest.
 *
 * SVG artwork renders as a plain <img> — vector files need no resizing, and
 * this avoids turning on next/image's `dangerouslyAllowSVG` globally. Raster
 * files go through next/image, so dropping a real photo into a slot gets
 * resizing, modern formats and lazy loading with no code change.
 */
export default function SiteImage({
  asset,
  className = '',
  /** Set on above-the-fold images so they are not lazy-loaded. */
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
}: {
  asset: SiteImageAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const isSvg = asset.src.endsWith('.svg');

  if (isSvg) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={className}
      />
    );
  }

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
