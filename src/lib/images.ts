/**
 * Image manifest.
 *
 * Every image slot on the site is declared here, so swapping artwork for real
 * photography is a one-line change per slot with no layout code touched.
 *
 * WHY THESE ARE ILLUSTRATIONS, NOT PHOTOS
 * The build environment has no reachable stock-photo source (Unsplash, Pexels,
 * Pixabay and Wikimedia are all blocked by the egress proxy), so rather than
 * embed photo URLs nobody could preview, these slots ship with brand artwork
 * drawn to match the logo and palette.
 *
 * TO USE REAL PHOTOS
 *   1. Drop the file in /public/images/ (JPG, PNG or WebP).
 *   2. Point `src` at it and rewrite `alt` to describe the actual photo.
 *   3. Nothing else changes — SiteImage switches to next/image automatically
 *      for raster files, so you get resizing, AVIF/WebP and lazy loading.
 *
 * Licensing note: if the photo comes from Unsplash it is free for commercial
 * use under the Unsplash License. Do NOT use photos of people in a way that
 * implies they are staff or clients of the firm.
 */

export type SiteImageAsset = {
  src: string;
  /** Describes the image for screen readers. Rewrite when swapping in a photo. */
  alt: string;
  width: number;
  height: number;
  /** True while this slot holds brand artwork rather than a real photograph. */
  isArtwork: boolean;
};

export const images = {
  /**
   * Superseded by HeroAperture, which the homepage now uses. Kept as the
   * fallback behind Hero's `image` prop: passing visual="image" with this
   * asset restores the static hero without touching any other code.
   */
  heroLanding: {
    src: '/images/hero-landing.svg',
    alt: 'Illustration of a prepared tax return, a confirmation card and a rising bar chart.',
    width: 780,
    height: 660,
    isArtwork: true,
  },
  taxAccounting: {
    src: '/images/tax-accounting.svg',
    alt: 'Illustration of a prepared tax return beside a rising bar chart.',
    width: 800,
    height: 500,
    isArtwork: true,
  },
  businessFinancial: {
    src: '/images/business-financial.svg',
    alt: 'Illustration of an upward growth curve with funding and protection motifs.',
    width: 800,
    height: 500,
    isArtwork: true,
  },
  ourStory: {
    src: '/images/our-story.svg',
    alt: 'Illustration of a roof over columns, echoing The Arms Corporation logo.',
    width: 800,
    height: 600,
    isArtwork: true,
  },
  nationwide: {
    src: '/images/nationwide.svg',
    alt: 'Illustration of a connected network radiating from a central point.',
    width: 800,
    height: 500,
    isArtwork: true,
  },
} satisfies Record<string, SiteImageAsset>;

export type ImageKey = keyof typeof images;
