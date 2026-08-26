/**
 * Single source of truth for business info.
 *
 * Values marked UNCONFIRMED come from reasonable defaults or from conflicting
 * sources, not from settled client input. Confirm each with the client before
 * launch (see the README launch checklist).
 */

export const site = {
  legalName: 'Arms Tax Group Inc',
  brandName: 'The Arms Corporation',

  /**
   * UNCONFIRMED SPELLING: the intake form gives "Leval Moore"; the client's
   * live site spells it "Laval Moore". This site uses the intake spelling
   * throughout. Confirm which is correct before launch.
   */
  owner: 'Leval Moore',

  /** Mission line the firm was built around. */
  tagline: "It's not what you make, it's what you keep.",

  /** The client's existing brand line, carried over from thearmscorp.co. */
  brandLine: 'Reaching out to embrace YOUR needs.',

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
  fax: {
    display: '(347) 293-6733',
    e164: '+1-347-293-6733',
  },
  email: 'Lmoore@thearmscorp.com',

  /**
   * ⚠️ ADDRESS CONFLICT — NOT RESOLVED. DO NOT PUBLISH EITHER ADDRESS.
   *
   * The client intake form and the client's current live site give different
   * addresses, in two different cities:
   *
   *   intake    1426 White Plains Road, Bronx, NY 10462
   *   live site 50 Main St, Suite 1000, White Plains, NY 10606
   *
   * While `status` is 'unconfirmed', the street address is suppressed
   * everywhere it would otherwise appear — footer, Contact page, Bronx office
   * page, LocalBusiness schema, and the Google Maps embed — and a visible
   * review banner is shown instead. Nothing guesses between the two.
   *
   * TO RESOLVE: set `status` to 'confirmed' and point `confirmed` at the
   * correct candidate. Everything above re-enables automatically.
   *
   * NOTE ON SCOPE: the two candidates are in different cities, so this is not
   * only a street-address swap. If the answer is White Plains, the
   * /who-we-serve/bronx-ny page (slug, title, H1, body copy, its "tax
   * preparation Bronx NY" SEO target) and every "Bronx, NY" reference across
   * the site need rewriting. See the README.
   */
  address: {
    status: 'unconfirmed' as 'unconfirmed' | 'confirmed',
    /** Which candidate is correct. Only read once status is 'confirmed'. */
    confirmed: null as null | 'intake' | 'liveSite',
    candidates: {
      intake: {
        source: 'Client intake form',
        street: '1426 White Plains Road',
        city: 'Bronx',
        state: 'NY',
        stateName: 'New York',
        zip: '10462',
        country: 'US',
        full: '1426 White Plains Road, Bronx, NY 10462',
        latitude: 40.8412,
        longitude: -73.8593,
      },
      liveSite: {
        source: 'Current live site (thearmscorp.co)',
        street: '50 Main St, Suite 1000',
        city: 'White Plains',
        state: 'NY',
        stateName: 'New York',
        zip: '10606',
        country: 'US',
        full: '50 Main St, Suite 1000, White Plains, NY 10606',
        latitude: 41.0339,
        longitude: -73.7629,
      },
    },
  },

  // UNCONFIRMED: business hours were not supplied in the intake. This
  // placeholder is intentionally vague — replace with real hours, and add
  // openingHoursSpecification to the LocalBusiness schema at the same time.
  hours: 'Mon–Fri, by appointment',

  serviceArea: 'Nationwide (remote), with a walk-in office in New York',

  /**
   * Social profiles are not set up yet. The footer renders a structured but
   * empty slot; add entries here to activate it (and to populate sameAs in
   * the organization schema).
   */
  social: [] as { label: string; href: string }[],

  analytics: {
    // Placeholder — swap in the real GA4 measurement ID at launch.
    ga4MeasurementId: 'G-XXXXXXXXXX',
  },
} as const;

/** True while any content on the site is awaiting client confirmation. */
export const hasOpenReviewFlags = site.address.status === 'unconfirmed';
