# Arms Tax Group Inc — The Arms Corporation

Twenty-page marketing site for **Arms Tax Group Inc**, operating as **The Arms Corporation** —
a Bronx, NY tax, accounting, and financial services firm serving clients nationwide.

Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

---

## Project structure

```
src/
  app/                      # one directory per route (20 pages + API + sitemap/robots)
    api/contact/route.ts    # consultation form handler — NOT yet wired to a real inbox
    sitemap.ts robots.ts    # generated at /sitemap.xml and /robots.txt
  components/               # header, footer, hero, FAQ, CTA bands, cards, forms
  content/                  # all page copy, separated from layout
    tax-accounting.ts       # category + 5 service pages
    business-financial.ts   # category + 4 service pages
    general.ts              # home, who-we-serve, contact, hub FAQs and process steps
  lib/
    site.ts                 # single source of truth for business info
    services.ts             # service taxonomy — drives nav, footer, cards, sitemap
    seo.ts schema.ts        # metadata builder and JSON-LD builders
```

**Editing copy** — service page text lives in `src/content/`, not in the page components.
Business facts (phone, address, hours, domain) live only in `src/lib/site.ts`; changing a
value there updates it everywhere, including the structured data.

---

## Sitemap

| # | Page | Route |
|---|---|---|
| 1 | Homepage | `/` |
| 2 | About | `/about` |
| 3 | Services Hub | `/services` |
| 4 | Tax & Accounting (category) | `/services/tax-accounting` |
| 5 | Personal Tax Preparation | `/services/tax-accounting/personal-tax-preparation` |
| 6 | Business Tax Preparation | `/services/tax-accounting/business-tax-preparation` |
| 7 | Tax Resolution & IRS Representation | `/services/tax-accounting/tax-resolution` |
| 8 | Bookkeeping & Accounting | `/services/tax-accounting/bookkeeping-accounting` |
| 9 | Tax Planning & Consulting | `/services/tax-accounting/tax-planning` |
| 10 | Business & Financial Solutions (category) | `/services/business-financial-solutions` |
| 11 | Small Business Loans & Funding | `/services/business-financial-solutions/business-loans-funding` |
| 12 | Credit Solutions | `/services/business-financial-solutions/credit-solutions` |
| 13 | Unclaimed Funds & Overpayment Recovery | `/services/business-financial-solutions/unclaimed-funds-recovery` |
| 14 | Business Consulting | `/services/business-financial-solutions/business-consulting` |
| 15 | Who We Serve (hub) | `/who-we-serve` |
| 16 | Bronx, NY Office | `/who-we-serve/bronx-ny` |
| 17 | Testimonials | `/testimonials` |
| 18 | Contact | `/contact` |
| 19 | Privacy Policy | `/privacy-policy` |
| 20 | Terms of Service | `/terms` |

Plus a styled 404 at `not-found`.

---

## Design system

| Token | Value |
|---|---|
| Background (dark) | `#10060B` — Tailwind `ink` |
| Accent | `#FF6536` — Tailwind `accent` |
| White | `#FFFFFF` |
| Headings | Space Grotesk (`font-display`) |
| Body | Inter (`font-sans`) |

Every page uses a dark hero with an `#FF6536` accent underline beneath the H1,
scroll-triggered fade-up animations, breadcrumbs on inner pages, a sticky header that goes
transparent-over-hero → solid on scroll, and a floating "Text Us" bubble routed to the SMS
line. All animation respects `prefers-reduced-motion`.

---

## SEO

Every page has a unique title, a unique meta description of 150–160 characters, a canonical
URL, Open Graph and Twitter tags, exactly one `<h1>`, and 3+ in-body internal links.
Structured data: `AccountingService` site-wide, `Service` on each service page, `FAQPage`
wherever an FAQ block appears, `LocalBusiness` on the Bronx office and contact pages, and
`BreadcrumbList` on every inner page.

---

## ⚠️ Blocking: unresolved office address

**The client's intake form and current live site give different addresses, in two
different cities.** Nothing on the site guesses between them.

| Source | Address |
|---|---|
| Client intake form | 1426 White Plains Road, Bronx, NY 10462 |
| Current live site (thearmscorp.co) | 50 Main St, Suite 1000, White Plains, NY 10606 |

While `site.address.status` is `'unconfirmed'`, the street address is suppressed
everywhere it would otherwise appear — footer, Contact page, Bronx office page,
Who We Serve, `LocalBusiness` and organization schema (no `address`, no `geo`),
and the Google Maps embed — and a visible amber review flag is shown on the
Contact and office pages instead.

The raw values sit behind `site.address.candidates` and are only reachable through
`lib/address.ts`, so TypeScript makes it a compile error to render an address
without handling the unconfirmed case. Nothing here relies on remembering.

**To resolve:** in `src/lib/site.ts`, set `address.status` to `'confirmed'` and
`address.confirmed` to `'intake'` or `'liveSite'`. Every suppressed element,
the maps embed, and the schema restore themselves; the flags disappear.

**This is bigger than a street address.** The two candidates are in different
cities. If the answer is White Plains, the following also need rewriting, and none
of it is done automatically:

- `/who-we-serve/bronx-ny` — the slug, title, H1, body copy, and its
  "tax preparation Bronx NY" SEO target
- Every "Bronx, NY" reference sitewide — hero trust points, CTA trust badges,
  several meta descriptions and page titles, the footer link label, and the
  Who We Serve copy
- The homepage About preview and About page, which describe a Bronx practice

The build currently keeps the Bronx framing because that is what the client's own
intake form says. Confirm before launch.

## Content guardrails

These were applied deliberately. **Do not undo them without client sign-off** — several
carry legal exposure.

- **No star ratings, review counts, or Google review badges anywhere.** The Google Business
  Profile is still not set up. The testimonials on the site are direct client testimonials,
  not a Google feed, so no rating or count is shown beside them.
- **No `Review` or `AggregateRating` schema.** Direct testimonials are not verifiable
  reviews. Do not add rating markup until the Business Profile is live.
- **No fabricated testimonials.** The three on the site are quoted verbatim from
  thearmscorp.co and live in `testimonials` in `src/lib/site.ts`.
- **No invented attribution.** One testimonial is held at `status: 'pending-attribution'`
  because its attribution could not be recovered — thearmscorp.co is unreachable from the
  build environment (egress-blocked). It renders with a visible review chip and is excluded
  from the homepage rotation rather than being published as if finished.
- **No professional credentials** (CPA, EA, "IRS certified") anywhere on the site — none
  were confirmed in the intake.
- **No specific years-in-business claim.** Trust language is general until the client
  confirms a figure.
- **No guaranteed outcomes.** Tax resolution and credit solutions carry visible disclosures,
  and the Terms page states plainly that no result is guaranteed. Credit copy reflects the
  Credit Repair Organizations Act; funding copy states we are not a direct lender.
- **EIN is not displayed** anywhere on the site or in structured data.
- **Social icons** are a structured but empty slot — the footer row appears only once
  `site.social` has entries.

---

## Before launch — confirm with the client

Each item below maps to a `UNCONFIRMED` or `PRE-LAUNCH` comment in the code.

- [ ] **Domain** — keep `thearmscorp.co` or move to a new one? Set `site.url` in
      `src/lib/site.ts`; it feeds canonicals, Open Graph, sitemap, and schema.
- [ ] **Business hours** — not supplied in the intake. Currently the placeholder
      "Mon–Fri, by appointment". Update `site.hours`, and add
      `openingHoursSpecification` to `localBusinessSchema()` at the same time.
- [ ] **Years in business / experience claim** — publish a number only once confirmed.
- [ ] **Credentials** — is Leval Moore a CPA, Enrolled Agent, or licensed preparer? This
      determines what the site may legally claim, and what disclaimers it needs.
- [ ] **Office address** — see the blocking section above. Two conflicting addresses in two
      different cities; resolve in `src/lib/site.ts`.
- [ ] **Third testimonial's attribution** — supply the name and location exactly as shown on
      thearmscorp.co, then set its `status` to `'live'` in `src/lib/site.ts`.
- [ ] **Testimonial wording** — the Roger Swayze quote names "Alpha Financial" and spells the
      owner "Laval Moore", both of which differ from the branding used everywhere else on
      this site. It is published verbatim as it appears on the client's live site. Confirm
      that is intended.
- [ ] **Owner name spelling** — intake says "Leval Moore"; the live site's testimonial says
      "Laval". The site currently shows both. Confirm which is correct.
- [ ] **Google Business Profile** — once live, set `site.googleBusinessProfile.live = true`
      and fill in `reviewUrl`. That activates the widget slot and review CTA.
- [ ] **Written approval to republish testimonials** — confirm the client has the right to
      reuse these quotes on the new site.
- [ ] **Lending & credit** — confirm whether Arms Capital Partners and Arms Credit Solutions
      are direct providers or referral partners. The funding page currently states we are
      **not** a direct lender; correct it if that is wrong, as it changes required
      disclosures.
- [ ] **EIN** — confirm the client wants it kept off the public site (current behavior).
- [ ] **Logo** — the transparent PNG has not been received. `src/components/Logo.tsx` renders
      a placeholder wordmark; drop the file at `public/logo.png` and swap the component body.
- [ ] **Founder photo** — the About page uses an "LM" monogram placeholder.
- [ ] **Founder bio** — the About page bio is written copy; replace with the client's own.
- [ ] **Legal review** — Privacy Policy and Terms are general placeholder content and have
      **not** been reviewed by an attorney. Both display a notice saying so; remove it only
      after counsel has reviewed and approved the text.
- [ ] **Contact form delivery** — `src/app/api/contact/route.ts` validates and logs
      submissions but does not deliver them. Wire it to the client's inbox or CRM using a
      server-side key from an environment variable.
- [ ] **GA4** — replace the placeholder ID in `site.analytics.ga4MeasurementId`. The tag is
      suppressed while the placeholder value is present.
- [ ] **Open Graph image** — add `public/og-image.png` at 1200×630.
- [ ] **Photography** — the build uses no bitmap photography. Pull usable images from
      `thearmscorp.co` and supplement with professional stock where needed.
