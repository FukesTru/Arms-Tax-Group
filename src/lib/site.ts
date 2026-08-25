/**
 * Single source of truth for business info.
 *
 * Values marked UNCONFIRMED come from reasonable defaults, not from the client
 * intake. Confirm with the client before launch (see README launch checklist).
 */

export const site = {
  legalName: 'Arms Tax Group Inc',
  brandName: 'The Arms Corporation',
  owner: 'Leval Moore',
  tagline: "It's not what you make, it's what you keep.",

  // UNCONFIRMED: client has not confirmed whether to keep thearmscorp.co or
  // move to a new domain. Update this before generating the final sitemap.
  url: 'https://www.thearmscorp.co',

  phone: {
    display: '(718) 518-0110',
    href: 'tel:+17185180110',
    e164: '+1-718-518-0110',
  },
  text: {
    display: '(347) 805-8290',
    href: 'sms:+13478058290',
    e164: '+1-347-805-8290',
  },
  email: 'Lmoore@thearmscorp.com',

  address: {
    street: '1426 White Plains Road',
    city: 'Bronx',
    state: 'NY',
    stateName: 'New York',
    zip: '10462',
    country: 'US',
    full: '1426 White Plains Road, Bronx, NY 10462',
    // Approximate coordinates for 1426 White Plains Road, Bronx, NY 10462.
    latitude: 40.8412,
    longitude: -73.8593,
  },

  // UNCONFIRMED: business hours were not supplied in the intake. This
  // placeholder is intentionally vague — replace with real hours, and add
  // openingHoursSpecification to the LocalBusiness schema at the same time.
  hours: 'Mon–Fri, by appointment',

  serviceArea: 'Nationwide (remote), with a walk-in office in Bronx, NY',

  /**
   * Social profiles are not set up yet. The footer renders a structured but
   * empty slot; add entries here to activate it (and to populate sameAs in
   * the organization schema).
   */
  social: [] as { label: string; href: string }[],

  /**
   * Google Business Profile is not set up yet. Leave false until it is live —
   * this gates the reviews widget placement and any review CTA sitewide.
   * Never enable alongside fabricated ratings or review counts.
   */
  googleBusinessProfile: {
    live: false,
    reviewUrl: '',
    placeId: '',
  },

  /**
   * Client-approved testimonials. Intentionally empty: the intake supplied
   * none, and reviews must never be fabricated. Adding entries here activates
   * the testimonial cards on /testimonials and the homepage reviews section.
   */
  testimonials: [] as { quote: string; author: string; context?: string }[],

  analytics: {
    // Placeholder — swap in the real GA4 measurement ID at launch.
    ga4MeasurementId: 'G-XXXXXXXXXX',
  },
} as const;

export const mapsEmbedSrc =
  'https://www.google.com/maps?q=' +
  encodeURIComponent(`${site.address.full}`) +
  '&output=embed';

export const mapsDirectionsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(site.address.full);
