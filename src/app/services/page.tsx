import Link from 'next/link';
import CTABand from '@/components/CTABand';
import FAQ from '@/components/FAQ';
import FadeUp from '@/components/FadeUp';
import Hero from '@/components/Hero';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import ProcessSteps from '@/components/ProcessSteps';
import Section, { SectionHeading } from '@/components/Section';
import { houseProcess, servicesHubFaqs } from '@/content/general';
import { breadcrumbSchema, faqSchema, itemListSchema } from '@/lib/schema';
import { images } from '@/lib/images';
import SiteImage from '@/components/SiteImage';
import { pageMetadata } from '@/lib/seo';
import { categories } from '@/lib/services';

export const metadata = pageMetadata({
  title: 'All Services | Tax Preparation, IRS Resolution & Bookkeeping',
  description:
    'Every service in one place: personal and corporate tax preparation, IRS resolution and representation, monthly bookkeeping, and year-round tax planning.',
  path: '/services',
});

const trail = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          itemListSchema('Tax & Accounting Services'),
          faqSchema(servicesHubFaqs),
          breadcrumbSchema(trail),
        ]}
      />

      <Hero
        eyebrow="Services"
        title="Tax &amp; Accounting Services"
        subtitle="Everything you need to manage, protect, and grow your finances, under one roof."
        trustPoints={['5 Services', 'Individuals & Businesses', 'Nationwide']}
        breadcrumbs={trail}
      />

      {/* Two large category blocks */}
      <Section>
        <SectionHeading
          eyebrow="The Practice"
          title="Accurate now, and ready for next year"
          intro="Five services, one practice. Filing for individuals and businesses, representation when the IRS gets involved, books kept through the year, and planning so the next return holds no surprises."
        />

        <div className="mt-12 space-y-8">
          {categories.map((category, index) => (
            <FadeUp
              as="article"
              key={category.key}
              delay={index * 0.08}
              className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-card"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative overflow-hidden bg-ink-900 p-8 md:p-10">
                  <SiteImage
                    asset={images.taxAccounting}
                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-ink-900/90 via-ink-900/85 to-ink-900/60"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-accent">
                      {categories.length > 1 ? `0${index + 1}. Category` : 'What We Do'}
                    </p>
                    <h3 className="mt-4 !text-white text-[1.6rem] leading-snug">
                      {category.title}
                    </h3>
                    <p className="mt-4 text-[1rem] leading-relaxed text-white/65">
                      {category.blurb}
                    </p>
                    <Link href={category.href} className="btn-primary mt-8">
                      Explore {category.shortTitle}
                    </Link>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <p className="font-display text-[0.8rem] font-bold uppercase tracking-[0.14em] text-ink-600">
                    Services in this category
                  </p>
                  <ul className="mt-5 divide-y divide-ink-900/10">
                    {category.services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="group flex items-start gap-4 py-4 transition-colors"
                        >
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                            <Icon name={service.icon} className="h-4 w-4" />
                          </span>
                          <span className="flex-1">
                            <span className="block font-display text-[1rem] font-semibold text-ink-900 transition-colors group-hover:text-accent">
                              {service.title}
                            </span>
                            <span className="mt-1 block text-[0.9rem] leading-relaxed text-ink-600">
                              {service.blurb}
                            </span>
                          </span>
                          <span
                            className="mt-1 text-accent opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      <ProcessSteps
        steps={houseProcess}
        eyebrow="How We Work"
        title="The same four steps, whichever service you need"
        intro="You always know what happens next, what we need from you, and where things stand."
        tone="tint"
      />

      <CTABand
        title="Not sure where to start?"
        body="Describe the problem rather than the service, figuring out which one fits is our job. The consultation is free."
      />

      <FAQ
        faqs={servicesHubFaqs}
        title="Choosing the right service"
        intro="A few questions that tend to come up before a first conversation."
      />

      <CTABand
        tone="dark"
        title="One conversation, and you'll know where you stand"
        body="Call, text, or send us a note. We'll tell you what your situation actually involves."
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
