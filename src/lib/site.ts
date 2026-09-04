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
   * NOT A PUBLIC-FACING ADDRESS.
   *
   * The firm is digital only: no walk-in traffic, no in-person appointments,
   * and it is deliberately not marketed as a Bronx business. This address is
   * kept for one reason, the contact lines in the Privacy Policy and Terms,
   * where a business address is normally expected. It is reachable only
   * through `legalContactLine` in lib/address.ts.
   *
   * Do not put it in the footer, on the contact page, in a map embed, or in
   * structured data. There is no LocalBusiness address any more, on purpose:
   * publishing one tells Google this is a place people visit, which is the
   * opposite of how the practice works.
   *
   * The client confirmed this address on 2026-08-28, over the stale
   * White Plains address on the old live site, and that is still the right one
   * for legal use.
   */
  legalAddress: {
    street: '1426 White Plains Road',
    city: 'Bronx',
    state: 'NY',
    stateName: 'New York',
    zip: '10462',
    country: 'US',
    full: '1426 White Plains Road, Bronx, NY 10462',
  },

  // UNCONFIRMED: working hours were not supplied in the intake. These are the
  // hours we respond and hold calls, not opening hours: nobody visits.
  // Replace with real hours, and add
  hours: 'Mon–Fri, by appointment',

  serviceArea: 'Nationwide, remote only, all 50 states',

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

/**
 * True while any content on the site is awaiting client confirmation. Nothing
 * is currently gated on this; it stays as the hook for the next open item.
 */
export const hasOpenReviewFlags = false;
