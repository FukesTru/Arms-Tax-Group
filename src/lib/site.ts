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
   * UNCONFIRMED SPELLING: the intake form gives "Leval Moore". The client's
   * live site spells it "Laval Moore" inside a published testimonial (quoted
   * verbatim below). Confirm which is correct — the site currently shows both
   * spellings, ours in body copy and theirs inside the quote.
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

  analytics: {
    // Placeholder — swap in the real GA4 measurement ID at launch.
    ga4MeasurementId: 'G-XXXXXXXXXX',
  },
} as const;

export type Testimonial = {
  /** Quoted verbatim from the client's live site. Do not paraphrase. */
  quote: string;
  /** Null means the source attribution has not been recovered yet. */
  author: string | null;
  location?: string;
  /**
   * 'live' renders normally. 'pending-attribution' renders with a visible
   * build-review chip and is held back from the homepage rotation.
   */
  status: 'live' | 'pending-attribution';
  /** Shown to reviewers only, never to visitors. */
  reviewNote?: string;
};

/**
 * Real client testimonials, quoted verbatim from thearmscorp.co.
 *
 * GUARDRAIL: these are direct testimonials, not a Google Business Profile
 * feed. Never render star ratings or a review count alongside them, and do
 * not add Review/AggregateRating schema — see the note in lib/schema.ts.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I have been a loyal client of Laval Moore's tax company, Alpha Financial, for over 20 years, and I can confidently say they are the best in the business. Their exceptional accounting services have been instrumental in keeping my finances organized and running smoothly year after year. Their attention to detail, professionalism, and dedication have consistently exceeded my expectations.",
    author: 'Roger Swayze',
    location: 'Arkansas',
    status: 'live',
    reviewNote:
      'Quoted verbatim. Note it names "Alpha Financial" and spells the owner "Laval" — both differ from the branding used elsewhere on this site. Confirm with the client whether to publish as-is.',
  },
  {
    quote:
      'I highly recommend The Arms Corporation for its exceptional financial and tax services. Their professionalism, timeliness, and personalized approach have truly impressed my company. They cater to your needs and deliver outstanding results. Don’t hesitate to work with them!',
    author: 'Dr. Benjamin McGainey',
    location: 'New York',
    status: 'live',
  },
  {
    quote:
      'I have known Mr. Moore for the past 20 years, during which time he has consistently prepared my personal and business taxes. His work has always been highly professional, and I would highly recommend him for many more years to come.',
    author: null,
    status: 'pending-attribution',
    reviewNote:
      'Attribution could not be recovered — thearmscorp.co is unreachable from the build environment. Supply the name and location exactly as shown on the source site, then set status to "live".',
  },
];

/** Attributed testimonials, safe to display without a review chip. */
export const liveTestimonials = testimonials.filter((t) => t.status === 'live');

/** True while any content on the site is awaiting client confirmation. */
export const hasOpenReviewFlags =
  site.address.status === 'unconfirmed' ||
  testimonials.some((t) => t.status !== 'live');
