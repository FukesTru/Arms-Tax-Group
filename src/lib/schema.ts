import { site } from './site';
import { allServices, categories } from './services';

const ORG_ID = `${site.url}/#organization`;
const BRONX_ID = `${site.url}/who-we-serve/bronx-ny#localbusiness`;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.state,
  postalCode: site.address.zip,
  addressCountry: site.address.country,
};

/**
 * Organization-level AccountingService. Rendered once, in the root layout.
 *
 * Deliberately omits aggregateRating / review — the Google Business Profile
 * is not live and no client-approved testimonials exist. Never add rating
 * markup without real, verifiable reviews.
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': ORG_ID,
    name: site.brandName,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    slogan: site.tagline,
    description:
      'Personal and business tax preparation, IRS resolution, bookkeeping, tax planning, business funding, credit solutions, and unclaimed funds recovery from a Bronx, NY firm serving clients nationwide.',
    address: postalAddress,
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'City', name: 'Bronx' },
    ],
    founder: { '@type': 'Person', name: site.owner },
    ...(site.social.length > 0
      ? { sameAs: site.social.map((s) => s.href) }
      : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tax, Accounting & Financial Services',
      itemListElement: categories.map((category) => ({
        '@type': 'OfferCatalog',
        name: category.title,
        itemListElement: category.services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            url: `${site.url}${service.href}`,
          },
        })),
      })),
    },
  };
}

/** LocalBusiness for the physical Bronx office page. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': BRONX_ID,
    name: `${site.brandName} — Bronx, NY Office`,
    parentOrganization: { '@id': ORG_ID },
    url: `${site.url}/who-we-serve/bronx-ny`,
    telephone: site.phone.e164,
    email: site.email,
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.address.latitude,
      longitude: site.address.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Bronx' },
      { '@type': 'Country', name: 'United States' },
    ],
    // NOTE: openingHoursSpecification is intentionally omitted until the
    // client confirms real business hours. Do not guess them here.
    priceRange: '$$',
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: name,
    provider: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'City', name: 'Bronx' },
    ],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${site.url}${crumb.href === '/' ? '' : crumb.href}`,
    })),
  };
}

export function itemListSchema(name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: allServices.map((service, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: service.title,
      url: `${site.url}${service.href}`,
    })),
  };
}

export function aboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${site.brandName}`,
    url: `${site.url}/about`,
    mainEntity: { '@id': ORG_ID },
  };
}

export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${site.brandName}`,
    url: `${site.url}/contact`,
    mainEntity: { '@id': ORG_ID },
  };
}
