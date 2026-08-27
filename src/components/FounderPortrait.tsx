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
 * FORMAT: the panel behind this is dark (bg-ink-900). A cut-out PNG with a
 * transparent background composites onto it cleanly, which is what the
 * client's supplied portrait is styled for. A JPG with a white background
 * will render as a white block inside the dark panel instead, so prefer
 * .png if the photo is a cut-out.
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
      <span className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-accent font-display text-[2.4rem] font-extrabold text-white">
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
      className="relative h-full w-full object-cover object-top"
      priority={false}
    />
  );
}
