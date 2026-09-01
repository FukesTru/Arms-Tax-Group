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
  /*
    ONE NUMBER ONLY. The site previously published an SMS number and a fax
    alongside the business line; the client asked for both to come off, so the
    business line above is the only number anywhere on the site or in its
    structured data. Do not reintroduce a personal mobile or the fax.
  */
  email: 'Lmoore@thearmscorp.com',

  /**
   * ADDRESS CONFLICT — RESOLVED 2026-08-28. The client confirmed the intake
   * form address:
   *
   *   1426 White Plains Road, Bronx, NY 10462
   *
   * The address on the client's current live site (50 Main St, Suite 1000,
   * White Plains, NY 10606) is stale and is kept below only as a record of
   * what was rejected. Do not publish it, and note that the live site will
   * still be showing it until the client updates or retires that site.
   *
   * With `status` set to 'confirmed', the street address publishes everywhere
   * it belongs — footer, Contact page, Bronx office page, LocalBusiness
   * schema, and the Google Maps embed — and the review banner is gone.
   *
   * The confirmed city is Bronx, which is what the site was already written
   * around: /who-we-serve/bronx-ny, the "tax preparation Bronx NY" SEO target,
   * and every "Bronx, NY" reference all stand as written. No copy rewrite was
   * needed. Had the answer been White Plains, all of that would have had to
   * change.
   */
  address: {
    status: 'confirmed' as 'unconfirmed' | 'confirmed',
    /** Which candidate is correct. Only read once status is 'confirmed'. */
    confirmed: 'intake' as null | 'intake' | 'liveSite',
    /**
     * The lat/long below are OUR estimate for the street, not surveyed values
     * and not supplied by the client, and no geocoder is reachable from this
     * build environment to check them. While this is false, `geo` is left out
     * of the LocalBusiness schema entirely: Google geocodes the postal address
     * on its own, whereas a wrong GeoCoordinates pin puts the business on the
     * wrong corner, which is worse than saying nothing.
     *
     * TO ENABLE: open the office in Google Maps, right-click the pin, copy the
     * coordinates into the candidate below, and set this to true.
     */
    geoVerified: false,
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
      /** REJECTED. Kept as a record of the conflict, never published. */
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

  /**
   * LeadConnector (HighLevel) integration. The chat widget loads sitewide and
   * the embedded form replaces the old custom contact form; both submit to the
   * client's LeadConnector inbox rather than to this app.
   *
   * NOTE: form submissions and chat messages leave this site and are processed
   * by a third party. The Privacy Policy discloses this — keep the two in sync
   * if either ID changes or the provider is swapped.
   */
  leadConnector: {
    chatWidgetId: '6a7f3a8fb7fff8e52956955c',
    contactFormId: 'AhRfkEtrL6TTzA61PYnA',
    contactFormName: 'Website Form (The Arms Corp)',
    /** Initial iframe height; form_embed.js resizes it after load. */
    contactFormHeight: 542,
    /**
     * Query-param names the LeadConnector form reads to pre-fill fields, used
     * when a visitor arrives from the hero estimator.
     *
     * ⚠️ UNCONFIRMED — LeadConnector matches on each custom field's own key,
     * which we cannot read from here (the domain is not reachable from the
     * build environment). These are the names we send; if they do not match
     * the keys on the real form the fields simply arrive blank, which is why
     * the contact page also shows the estimate in plain text. Confirm the
     * keys in the LeadConnector form builder and correct them here.
     */
    prefillKeys: {
      income: 'annual_income',
      deductions: 'missed_deductions',
      savings: 'estimated_savings',
    },
  },

  analytics: {
    // Placeholder — swap in the real GA4 measurement ID at launch.
    ga4MeasurementId: 'G-XXXXXXXXXX',
  },
} as const;

/** True while any content on the site is awaiting client confirmation. */
export const hasOpenReviewFlags = site.address.status === 'unconfirmed';
