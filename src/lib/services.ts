/**
 * Service taxonomy — drives the header mega-menu, footer columns, category
 * card grids, and the sitemap.
 *
 * The firm is an accounting practice, so there is one category. The type is
 * still a list rather than a bare object because the mega-menu, the footer,
 * and the sitemap all iterate it, and because a second category (advisory,
 * say) would otherwise mean touching every one of those again.
 */

export type ServiceLink = {
  title: string;
  shortTitle: string;
  href: string;
  blurb: string;
  icon: IconName;
};

export type ServiceCategory = {
  key: 'tax-accounting';
  title: string;
  shortTitle: string;
  href: string;
  blurb: string;
  services: ServiceLink[];
};

export type IconName =
  | 'receipt'
  | 'building'
  | 'shield'
  | 'ledger'
  | 'chart';

export const categories: ServiceCategory[] = [
  {
    key: 'tax-accounting',
    title: 'Tax & Accounting Services',
    shortTitle: 'Tax & Accounting',
    href: '/services/tax-accounting',
    blurb:
      'Filing, resolution, and record-keeping for individuals and businesses, handled accurately and explained in plain English.',
    services: [
      {
        title: 'Personal Tax Preparation',
        shortTitle: 'Personal Tax Prep',
        href: '/services/tax-accounting/personal-tax-preparation',
        blurb: 'Individual and family returns, filed accurately and on time.',
        icon: 'receipt',
      },
      {
        title: 'Business & Corporate Tax Services',
        shortTitle: 'Corporate Tax',
        href: '/services/tax-accounting/business-tax-preparation',
        blurb:
          'Corporate tax services for C-corps and S-corps, plus LLC and partnership returns.',
        icon: 'building',
      },
      {
        title: 'Tax Resolution & IRS Representation',
        shortTitle: 'Tax Resolution',
        href: '/services/tax-accounting/tax-resolution',
        blurb: 'Back taxes, IRS notices, payment plans, liens, and levies.',
        icon: 'shield',
      },
      {
        title: 'Bookkeeping & Accounting',
        shortTitle: 'Bookkeeping',
        href: '/services/tax-accounting/bookkeeping-accounting',
        blurb: 'Monthly books, reconciliation, and tax-ready financial reporting.',
        icon: 'ledger',
      },
      {
        title: 'Tax Planning & Consulting',
        shortTitle: 'Tax Planning',
        href: '/services/tax-accounting/tax-planning',
        blurb: 'Year-round strategy so filing season holds no surprises.',
        icon: 'chart',
      },
    ],
  },
];

export const allServices: ServiceLink[] = categories.flatMap((c) => c.services);

export function categoryFor(href: string): ServiceCategory | undefined {
  return categories.find((c) => href.startsWith(c.href));
}

export function serviceByHref(href: string): ServiceLink | undefined {
  return allServices.find((s) => s.href === href);
}

/** Sibling services within the same category, excluding the current one. */
export function siblingsOf(href: string): ServiceLink[] {
  const category = categoryFor(href);
  if (!category) return [];
  return category.services.filter((s) => s.href !== href);
}

/**
 * The practice is digital only, so there is no office page and no city pages.
 * Kept as a list because the header and footer iterate it, and because the
 * audience-based sections on /who-we-serve may earn pages of their own.
 */
export const whoWeServeLinks = [
  {
    title: 'Who We Serve',
    href: '/who-we-serve',
    blurb: 'Individuals, the self-employed, small businesses, and corporations.',
  },
];
