import Link from 'next/link';
import CTABand from '@/components/CTABand';
import LeadConnectorForm from '@/components/LeadConnectorForm';
import FAQ from '@/components/FAQ';
import FadeUp from '@/components/FadeUp';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import MapEmbed from '@/components/MapEmbed';
import Section, { SectionHeading } from '@/components/Section';
import { contactFaqs } from '@/content/general';
import {
  breadcrumbSchema,
  contactPageSchema,
  faqSchema,
  localBusinessSchema,
} from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { mapsDirectionsUrl } from '@/lib/address';
import { parseEstimateParams } from '@/lib/estimateSavings';
import { site } from '@/lib/site';
import OfficeAddress from '@/components/OfficeAddress';
import { AddressConflictFlag } from '@/components/ReviewFlag';

export const metadata = pageMetadata({
  title: 'Contact Us | Free Consultation',
  description:
    'Contact us for a free consultation on tax preparation, IRS resolution, bookkeeping, or tax planning. Bronx, NY office, serving clients nationwide. Call today.',
  path: '/contact',
});

const trail = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
];

const contactMethods = [
  {
    label: 'Call',
    value: site.phone.display,
    href: site.phone.href,
    detail: 'Fastest for anything time-sensitive.',
  },
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    detail: 'Please do not attach tax documents, we will send a secure link.',
  },
];

/**
 * `searchParams` carries the hero estimator's values when a visitor clicks
 * "Get your exact number", so the consultation form can open already knowing
 * what they told the sliders. Anything missing or unparseable yields null and
 * the page renders exactly as it does for a direct visit.
 */
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ income?: string | string[]; deductions?: string | string[] }>;
}) {
  const estimate = parseEstimateParams(await searchParams);

  return (
    <>
      <JsonLd
        data={[
          contactPageSchema(),
          localBusinessSchema(),
          faqSchema(contactFaqs),
          breadcrumbSchema(trail),
        ]}
      />

      <Hero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Free consultation. Real answers, no pressure."
        trustPoints={['Free Consultation', 'Nationwide', 'Bronx, NY Office']}
        breadcrumbs={trail}
        primaryCta={{ label: 'Jump to the form', href: '#consultation-form' }}
      />

      {/* Form + contact details */}
      <Section>
        <AddressConflictFlag className="mb-12" />

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div id="consultation-form" className="scroll-mt-28">
            <SectionHeading
              eyebrow="Request a Consultation"
              title="Tell us what's going on"
              intro="The more context you give us, the more useful the first conversation will be. Everything you send stays between us."
            />
            <FadeUp delay={0.08} className="mt-8">
              <LeadConnectorForm estimate={estimate} />
            </FadeUp>

            <p className="mt-4 text-[0.82rem] leading-relaxed text-ink-600">
              Your details are sent securely to our client management system so
              we can respond. See our{' '}
              <a
                href="/privacy-policy"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div>
            <FadeUp>
              <p className="eyebrow mb-3">Direct Contact</p>
              <h2 className="text-[1.6rem] leading-tight">
                Or reach us however you prefer
              </h2>
            </FadeUp>

            <FadeUp delay={0.08} className="mt-7">
              <ul className="divide-y divide-ink-900/10 border-y border-ink-900/10">
                {contactMethods.map((method) => {
                  const Tag = method.href ? 'a' : 'div';
                  return (
                  <li key={method.label}>
                    <Tag
                      {...(method.href ? { href: method.href } : {})}
                      className="group flex items-start justify-between gap-5 py-5"
                    >
                      <span>
                        <span className="block font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-ink-600">
                          {method.label}
                        </span>
                        <span className="mt-1.5 block break-all font-display text-[1.08rem] font-bold text-ink-900 transition-colors group-hover:text-accent">
                          {method.value}
                        </span>
                        <span className="mt-1 block text-[0.88rem] leading-relaxed text-ink-600">
                          {method.detail}
                        </span>
                      </span>
                      {method.href && (
                        <span
                          className="mt-6 shrink-0 text-accent transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      )}
                    </Tag>
                  </li>
                  );
                })}
              </ul>
            </FadeUp>

            <FadeUp delay={0.14} className="mt-8 rounded-2xl bg-ink-900 p-7">
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Visit Us
              </p>
              <div className="mt-4 text-[1.02rem] leading-relaxed text-white/85">
                {/* Suppressed while the address conflict is open, see lib/site.ts */}
                <OfficeAddress tone="dark" />
              </div>
              <div className="mt-5 border-t border-white/10 pt-5">
                {/* UNCONFIRMED hours, see src/lib/site.ts */}
                <p className="font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/45">
                  Hours
                </p>
                <p className="mt-1.5 text-[0.98rem] text-white/85">{site.hours}</p>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-white/50">
                  Please call ahead so we can set aside proper time and tell you
                  what to bring.
                </p>
              </div>
              {mapsDirectionsUrl && (
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light mt-6 w-full"
                >
                  Get Directions
                </a>
              )}
            </FadeUp>

            <FadeUp delay={0.18} className="mt-6">
              <p className="text-[0.92rem] leading-relaxed text-ink-600">
                Not sure which service you need?{' '}
                <Link href="/services" className="font-semibold text-accent hover:underline">
                  Browse all services
                </Link>{' '}
                or{' '}
                <Link href="/who-we-serve" className="font-semibold text-accent hover:underline">
                  see who we serve
                </Link>
                . You can also just describe the problem in the form and we will
                point you to the right place.
              </p>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* Map */}
      <section className="pb-16 md:pb-20">
        <div className="container-x">
          <FadeUp>
            <MapEmbed />
          </FadeUp>
        </div>
      </section>

      <FAQ
        faqs={contactFaqs}
        title="Before you reach out"
        intro="Three things people usually want to know first."
      />

      <CTABand
        tone="dark"
        title="One conversation is all it takes to know where you stand"
        body={`Call ${site.phone.display} or send the form above.`}
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
