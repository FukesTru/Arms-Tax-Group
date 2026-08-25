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

## Content guardrails

These were applied deliberately. **Do not undo them without client sign-off** — several
carry legal exposure.

- **No star ratings, review counts, or Google review badges anywhere.** The Google Business
  Profile is not set up yet. `ReviewsSection` renders an honest "coming soon" panel while
  `site.testimonials` is empty.
- **No `Review` or `AggregateRating` schema.** Do not add it until real, verifiable reviews
  exist.
- **No fabricated testimonials.** Real, client-approved quotes go in `site.testimonials`.
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
- [ ] **Google Business Profile** — once live, set `site.googleBusinessProfile.live = true`
      and fill in `reviewUrl`. That activates the widget slot and review CTA.
- [ ] **Testimonials** — need written approval to reuse quotes from `thearmscorp.co`, or new
      ones. Add to `site.testimonials`.
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
