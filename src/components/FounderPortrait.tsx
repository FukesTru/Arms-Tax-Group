import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import { site } from '@/lib/site';

/**
 * Portrait of the founder.
 *
 * The photograph is checked for on disk at build time. Drop the file at
 * /public/images/leval-moore.jpg (or .png/.webp) and it appears; with no file
 * present the initials fall back in, so the page never renders a broken image
 * and there is no flag to remember to flip.
 *
 * A real person's photograph is the only acceptable content for this slot.
 * Never substitute a stock photo of someone else.
 *
 * FORMAT: a cut-out PNG with a transparent background, composited onto a
 * LIGHT panel. The panel is light on purpose: the subject wears a dark navy
 * suit whose outer edges measure around rgb(15,15,25), so against any dark
 * background the silhouette disappears (1.0-1.2:1 edge contrast, measured).
 * On the light panel the same edges measure about 12:1. Do not move this
 * panel back to a dark surface without a portrait shot for one.
 *
 * FIT: object-contain, not object-cover. Cover fills the panel by cropping
 * whatever does not fit, which cut the subject's arm at the left edge and his
 * waist at the bottom. Contain scales the whole figure to fit, so nothing is
 * cropped; object-bottom seats him on the base of the panel rather than
 * floating him in the middle.
 */

const CANDIDATES = ['leval-moore.jpg', 'leval-moore.jpeg', 'leval-moore.png', 'leval-moore.webp'];

function findPortrait(): string | null {
  for (const name of CANDIDATES) {
    if (fs.existsSync(path.join(process.cwd(), 'public', 'images', name))) {
      return `/images/${name}`;
    }
  }
  return null;
}

export default function FounderPortrait() {
  const src = findPortrait();

  if (!src) {
    const initials = site.owner
      .split(' ')
      .map((part) => part[0])
      .join('');
    return (
      <span className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-accent font-display text-[2.4rem] font-extrabold text-ink-900">
        {initials}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={`${site.owner}, Founder and Principal of ${site.brandName}`}
      width={407}
      height={600}
      sizes="(min-width: 768px) 280px, 100vw"
      className="relative h-full w-full object-contain object-bottom"
      priority={false}
    />
  );
}
