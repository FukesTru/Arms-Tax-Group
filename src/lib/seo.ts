import type { Metadata } from 'next';
import { site } from './site';

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Set false on utility pages that should stay out of the index. */
  index?: boolean;
};

/**
 * Builds a full metadata block: title, 150–160 char description, canonical,
 * and Open Graph / Twitter tags. Every page uses this so no two pages share
 * a title or description.
 */
export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetaInput): Metadata {
  const url = `${site.url}${path === '/' ? '' : path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: site.brandName,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${site.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${site.brandName} — tax, accounting, and financial services`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${site.url}/og-image.png`],
    },
  };
}
