import { site } from './site';
import { allServices, categories } from './services';

const ORG_ID = `${site.url}/#organization`;

/**
 * Organization-level AccountingService. Rendered once, in the root layout.
 *
 * ── NO ADDRESS, NO GEO, ON PURPOSE ───────────────────────────────────────
 * `AccountingService` is a LocalBusiness subtype, and a LocalBusiness with a
 * PostalAddress tells Google this is a place customers travel to. The firm is
 * digital only, so it publishes no address, no coordinates, no map and no
 * opening hours. What it publishes instead is `areaServed: United States`,
 * which is how a service-area business describes itself.
 *
 * The type stays `AccountingService` because it is the accurate description of
 * the work and it carries the industry signal. If a strictly non-local type is
 * ever wanted, `ProfessionalService` is the swap; the address must stay out
 * either way.
 *
 * Deliberately omits aggregateRating / review. The site carries no reviews or
 * testimonials at all, and the Google Business Profile is not live. Never add
 * rating markup without real, verifiable reviews behind it.
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
      'Personal and business tax preparation, IRS resolution, bookkeeping, and tax planning from a New York accounting firm serving clients nationwide.',
    areaServed: { '@type': 'Country', name: 'United States' },
    /* Remote-only delivery, stated rather than implied. */
    serviceType: 'Tax preparation and accounting',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${site.url}/contact`,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: site.phone.e164,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    },
    founder: { '@type': 'Person', name: site.owner },
    ...(site.social.length > 0
      ? { sameAs: site.social.map((s) => s.href) }
      : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tax & Accounting Services',
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
    areaServed: { '@type': 'Country', name: 'United States' },
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
