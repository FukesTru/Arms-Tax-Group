import type { FaqItem } from '@/components/FAQ';
import type { ProcessStep } from '@/components/ProcessSteps';

export type { FaqItem, ProcessStep };

/** Shared shape for the nine service pages and two category pages. */
export type ServicePageContent = {
  /** Path — also the key used to find siblings and build breadcrumbs. */
  href: string;
  h1: string;
  eyebrow: string;
  heroSubtitle: string;
  metaTitle: string;
  /** 150–160 characters. */
  metaDescription: string;
  /** Short trust points for the hero. Never ratings or review counts. */
  trustPoints: string[];
  introHeading: string;
  /** Roughly 200 words of unique, page-specific copy. */
  intro: string[];
  handleHeading: string;
  handleIntro: string;
  handles: string[];
  processHeading: string;
  processIntro: string;
  process: ProcessStep[];
  faqs: FaqItem[];
  /**
   * Visible compliance disclaimer, shown on regulated services. Keeps the
   * page clear that no outcome is guaranteed.
   */
  disclaimer?: string;
};
