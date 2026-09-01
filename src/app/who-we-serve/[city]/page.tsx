import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTABand from '@/components/CTABand';
import FAQ from '@/components/FAQ';
import FadeUp from '@/components/FadeUp';
import Hero from '@/components/Hero';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Section, { SectionHeading } from '@/components/Section';
import { locationBySlug, locations } from '@/content/locations';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { categories } from '@/lib/services';
import { site } from '@/lib/site';

/**
 * One page per surrounding municipality.
 *
 * The static /who-we-serve/bronx-ny route takes precedence over this dynamic
 * segment for that path, which is why 'bronx-ny' is not in the content list.
 *
 * Every page is fully prerendered and `dynamicParams = false`, so an unknown
 * slug 404s rather than rendering an empty shell. A thin auto-generated page
 * for a city we have written nothing about is exactly the doorway page this
 * set is built to avoid.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((location) => ({ city: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = locationBySlug(city);
  if (!location) return {};

  return pageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/who-we-serve/${location.slug}`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = locationBySlug(city);
  if (!location) notFound();

  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Who We Serve', href: '/who-we-serve' },
    { name: location.cityState, href: `/who-we-serve/${location.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Tax & Accounting Services in ${location.cityState}`,
            description: location.metaDescription,
            path: `/who-we-serve/${location.slug}`,
          }),
          faqSchema(location.faqs),
          breadcrumbSchema(trail),
        ]}
      />

      <Hero
        eyebrow={`${location.county} · Served from the Bronx`}
        title={location.heroTitle}
        subtitle={location.heroSubtitle}
        trustPoints={location.trustPoints}
        breadcrumbs={trail}
      />

      {/* Why this place specifically */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <FadeUp>
            <p className="eyebrow mb-3">{location.cityState}</p>
            <h2 className="text-[1.75rem] leading-tight sm:text-[2.05rem]">
              {location.introHeading}
            </h2>
            <div className="prose-body mt-6 space-y-5">
              {location.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-2xl border border-ink-900/10 bg-white p-7 shadow-card md:p-8">
              <p className="font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-accent">
                Getting to us from {location.city}
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-600">
                {location.gettingHere}
              </p>

              <div className="mt-7 border-t border-ink-900/10 pt-6">
                <p className="font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-ink-600">
                  Areas we serve in {location.city}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {location.neighborhoods.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-ink-900/10 bg-white px-3 py-1.5 text-[0.85rem] font-medium text-ink-700"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Get a Free Consultation
                </Link>
                <a href={site.phone.href} className="btn-outline-dark">
                  Call {site.phone.display}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* The tax situation that is actually specific to here */}
      <Section tone="tint">
        <SectionHeading eyebrow="Local Detail" title={location.focusHeading} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {location.focus.map((item, index) => (
            <FadeUp
              as="article"
              key={item.title}
              delay={index * 0.08}
              className="rounded-2xl border border-ink-900/10 bg-white p-7 shadow-card"
            >
              <h3 className="text-[1.1rem] leading-snug">{item.title}</h3>
              <p className="mt-3 text-[0.96rem] leading-relaxed text-ink-600">
                {item.body}
              </p>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="Available Here"
          title={`Every service, for ${location.city} clients`}
          intro="Handled remotely wherever you are, or in person at the Bronx office if you would rather sit down."
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

      <FAQ
        faqs={location.faqs}
        title={`${location.city} tax questions`}
        intro={`What comes up most often from clients in ${location.city}.`}
      />

      {/* Neighbouring pages, so these are a network rather than dead ends */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Nearby"
          title="Other areas we serve"
          intro="One office in the Bronx, and clients across the county and the country."
        />
        <FadeUp delay={0.08} className="mt-10">
          <ul className="flex flex-wrap gap-3">
            <li>
              <Link
                href="/who-we-serve/bronx-ny"
                className="inline-flex rounded-full border border-ink-900/10 bg-white px-4 py-2 text-[0.9rem] font-medium text-ink-700 transition-colors hover:border-accent/40 hover:text-accent"
              >
                Bronx, NY
              </Link>
            </li>
            {locations
              .filter((other) => other.slug !== location.slug)
              .map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/who-we-serve/${other.slug}`}
                    className="inline-flex rounded-full border border-ink-900/10 bg-white px-4 py-2 text-[0.9rem] font-medium text-ink-700 transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {other.cityState}
                  </Link>
                </li>
              ))}
          </ul>
        </FadeUp>
      </Section>

      <CTABand
        title={`Talk to someone about your ${location.city} return`}
        body="Free consultation. We will tell you honestly what you need, including when the answer is nothing."
        badges={['Free Consultation', 'Remote or In Person', 'Year-Round']}
      />
    </>
  );
}
