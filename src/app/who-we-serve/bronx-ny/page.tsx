import Link from 'next/link';
import CTABand from '@/components/CTABand';
import FAQ from '@/components/FAQ';
import FadeUp from '@/components/FadeUp';
import Hero from '@/components/Hero';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import MapEmbed from '@/components/MapEmbed';
import Section, { SectionHeading } from '@/components/Section';
import { bronxFaqs } from '@/content/general';
import { breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { categories } from '@/lib/services';
import { mapsDirectionsUrl } from '@/lib/address';
import { site } from '@/lib/site';
import { areaGroups } from '@/lib/areas';
import OfficeAddress from '@/components/OfficeAddress';
import { AddressConflictFlag } from '@/components/ReviewFlag';

export const metadata = pageMetadata({
  title: 'Tax Preparation Office in Bronx, NY',
  description:
    'Tax preparation and accounting at our Bronx, NY office, serving Parkchester, Morris Park, Throgs Neck, Pelham Bay, and lower Westchester. Free consultation.',
  path: '/who-we-serve/bronx-ny',
});

const trail = [
  { name: 'Home', href: '/' },
  { name: 'Who We Serve', href: '/who-we-serve' },
  { name: 'Bronx, NY Office', href: '/who-we-serve/bronx-ny' },
];

export default function BronxOfficePage() {
  return (
    <>
      <JsonLd
        data={[localBusinessSchema(), faqSchema(bronxFaqs), breadcrumbSchema(trail)]}
      />

      <Hero
        eyebrow="Bronx, New York"
        title="Tax & Accounting Services in the Bronx"
        subtitle="Personal and business tax preparation, IRS resolution, bookkeeping, and year-round tax planning. In person at our East Bronx office, serving Parkchester, Morris Park, Throgs Neck, Pelham Bay and lower Westchester, or remotely if that is easier."
        trustPoints={['Walk-In Appointments', 'All 5 Services On Site', 'Free Consultation']}
        breadcrumbs={trail}
      />

      {/* Intro + contact block */}
      <Section>
        <AddressConflictFlag className="mb-12" />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The Office"
              title="A local firm, rooted in the community"
            />
            <FadeUp delay={0.06} className="prose-body mt-6 space-y-5">
              <p>
                Our office is where this practice started. Clients across the
                Bronx, and from Manhattan, Westchester, and the surrounding
                boroughs. Come in to have
                their returns prepared, hand over a year of receipts, work
                through an IRS letter that arrived unexpectedly, or sit down and
                talk about a business idea before committing money to it.
              </p>
              <p>
                Everything we offer is available here in person. Personal and
                business tax preparation. Tax resolution for back taxes and
                notices. Monthly bookkeeping and year-end close. Planning
                sessions before the year runs out. Bookkeeping catch-ups,
                entity questions, and planning conversations for owners
                deciding what to do next.
              </p>
              <p>
                If coming in is inconvenient, none of it is required. The same
                services run remotely and clients regularly mix the two,
                handling most of the year online and coming in when a
                conversation deserves a table. Call ahead either way so we can
                set aside proper time and tell you exactly what to bring.
              </p>
            </FadeUp>

            <FadeUp delay={0.12} className="mt-8 flex flex-wrap gap-3">
              <a href={site.phone.href} className="btn-primary">
                Call {site.phone.display}
              </a>
              {mapsDirectionsUrl && (
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark"
                >
                  Get Directions
                </a>
              )}
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className="rounded-2xl bg-ink-900 p-8">
              <h2 className="!text-white text-[1.25rem]">Visit or reach us</h2>
              <dl className="mt-6 space-y-5 text-[0.96rem]">
                <div>
                  <dt className="font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/45">
                    Address
                  </dt>
                  <dd className="mt-1.5">
                    {/* Suppressed while the address conflict is open, see lib/site.ts */}
                    <OfficeAddress className="text-white/85" tone="dark" />
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/45">
                    Phone
                  </dt>
                  <dd className="mt-1.5">
                    <a href={site.phone.href} className="text-white/85 transition-colors hover:text-accent">
                      {site.phone.display}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/45">
                    Email
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all text-white/85 transition-colors hover:text-accent"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  {/* UNCONFIRMED hours, see src/lib/site.ts */}
                  <dt className="font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/45">
                    Hours
                  </dt>
                  <dd className="mt-1.5 text-white/85">{site.hours}</dd>
                </div>
              </dl>
              <Link href="/contact" className="btn-primary mt-8 w-full">
                Book a Free Consultation
              </Link>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* Map */}
      <section className="pb-16 md:pb-24">
        <div className="container-x">
          <FadeUp>
            <MapEmbed />
          </FadeUp>
        </div>
      </section>

      {/* Services available at this location */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Available Here"
          title="Every service, in person or remotely"
          intro="All five services are available at the Bronx office. Nothing is remote-only."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {categories.map((category, index) => (
            <FadeUp
              key={category.key}
              delay={index * 0.08}
              className="rounded-2xl border border-ink-900/10 bg-white p-7 shadow-card md:p-8"
            >
              <Link
                href={category.href}
                className="font-display text-[0.8rem] font-bold uppercase tracking-[0.14em] text-accent hover:text-accent-600"
              >
                {category.title} →
              </Link>
              <ul className="mt-5 space-y-1">
                {category.services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group flex items-center gap-3 rounded-lg py-2.5 text-[0.98rem] font-medium text-ink-700 transition-colors hover:text-accent"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                        <Icon name={service.icon} className="h-4 w-4" />
                      </span>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* Areas served. One page naming the areas honestly, not a page per
          neighborhood: see the note in lib/areas.ts on doorway pages. */}
      <Section>
        <SectionHeading
          eyebrow="Areas We Serve"
          title="Bronx neighborhoods, lower Westchester, and the rest of the city"
          intro="One office, a wide catchment. Come to us in person from anywhere in the list below, or work with us entirely online from anywhere in the country."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {areaGroups.map((group, index) => (
            <FadeUp key={group.key} delay={index * 0.08}>
              <h3 className="text-[1.15rem] leading-snug">{group.label}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-600">
                {group.note}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.areas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-ink-900/10 bg-white px-3 py-1.5 text-[0.85rem] font-medium text-ink-700"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3} className="mt-10">
          <p className="text-[0.95rem] leading-relaxed text-ink-600">
            Not on the list? Every service is available remotely, so where you
            live does not decide whether we can work together.{' '}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Ask us
            </Link>
            .
          </p>
        </FadeUp>
      </Section>

      <FAQ
        faqs={bronxFaqs}
        title="Visiting the Bronx office"
        intro="A few practical questions before you come by."
      />

      <CTABand
        tone="dark"
        title="Stop by, or start online"
        body={`Call ${site.phone.display} to set up a time, or send us a note and we'll reach out.`}
        badges={[
          'Bronx, NY Based',
          'Nationwide Service',
          'Personal & Business Tax Experts',
          'Free Consultation',
        ]}
      />
    </>
  );
}
