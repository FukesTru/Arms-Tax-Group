import Link from 'next/link';
import type { ServicePageContent } from '@/content/types';
import { categoryFor, siblingsOf, type ServiceLink } from '@/lib/services';
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/schema';
import CTABand from './CTABand';
import CheckList from './CheckList';
import FAQ from './FAQ';
import FadeUp from './FadeUp';
import Hero from './Hero';
import JsonLd from './JsonLd';
import ProcessSteps from './ProcessSteps';
import Section, { SectionHeading } from './Section';
import { RelatedServices, SubServiceGrid } from './ServiceCards';

type ServicePageTemplateProps = {
  content: ServicePageContent;
  /** Category pages pass their sub-services; leaf pages leave this unset. */
  subServices?: ServiceLink[];
  /** Extra internal links rendered under the intro. */
  crossLinks?: { label: string; href: string }[];
};

export default function ServicePageTemplate({
  content,
  subServices,
  crossLinks,
}: ServicePageTemplateProps) {
  const category = categoryFor(content.href);
  const isCategoryPage = category?.href === content.href;

  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    ...(isCategoryPage || !category
      ? []
      : [{ name: category.title, href: category.href }]),
    { name: content.h1, href: content.href },
  ];

  const related = isCategoryPage ? [] : siblingsOf(content.href);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: content.h1,
            description: content.metaDescription,
            path: content.href,
          }),
          faqSchema(content.faqs),
          breadcrumbSchema(trail),
        ]}
      />

      <Hero
        eyebrow={content.eyebrow}
        title={content.h1}
        subtitle={content.heroSubtitle}
        trustPoints={content.trustPoints}
        breadcrumbs={trail}
      />

      {/* Intro */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <SectionHeading title={content.introHeading} />
            <FadeUp delay={0.06} className="prose-body mt-6 space-y-5">
              {content.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </FadeUp>
          </div>

          <FadeUp delay={0.12}>
            <div className="rounded-2xl border border-ink-900/10 bg-accent-50 p-7 lg:sticky lg:top-28">
              <p className="eyebrow">Start Here</p>
              <h3 className="mt-3 text-[1.25rem] leading-snug">
                Free consultation, no obligation
              </h3>
              <p className="mt-4 text-[0.96rem] leading-relaxed text-ink-600">
                Tell us what is going on and we will tell you what it involves —
                honestly, including when the answer is that you do not need us.
              </p>
              <Link href="/contact" className="btn-primary mt-6 w-full">
                Get a Free Consultation
              </Link>

              {(crossLinks?.length ?? 0) > 0 && (
                <div className="mt-7 border-t border-ink-900/10 pt-6">
                  <p className="font-display text-[0.8rem] font-bold uppercase tracking-[0.14em] text-ink-600">
                    Related
                  </p>
                  <ul className="mt-3 space-y-2">
                    {crossLinks!.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[0.94rem] font-medium text-accent transition-colors hover:text-accent-600"
                        >
                          {link.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* Sub-service grid — category pages only */}
      {subServices && subServices.length > 0 && (
        <Section tone="tint">
          <SectionHeading
            eyebrow="Explore"
            title={`Services within ${content.h1}`}
            intro="Choose the one that fits your situation, or start with a consultation and we will point you to the right place."
          />
          <div className="mt-11">
            <SubServiceGrid services={subServices} />
          </div>
        </Section>
      )}

      {/* What We Handle */}
      <Section tone={subServices ? 'light' : 'tint'}>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Capabilities"
            title={content.handleHeading}
            intro={content.handleIntro}
          />
          <div className="lg:pt-2">
            <CheckList items={content.handles} />
          </div>
        </div>
      </Section>

      <CTABand />

      <ProcessSteps
        steps={content.process}
        eyebrow="The Process"
        title={content.processHeading}
        intro={content.processIntro}
        tone="light"
      />

      <FAQ
        faqs={content.faqs}
        intro={`Questions we hear often about ${content.h1.toLowerCase()}. If yours is not here, ask us directly — the consultation is free.`}
      />

      {/* Compliance disclaimer, where the service is regulated */}
      {content.disclaimer && (
        <section className="bg-white pb-16 md:pb-20">
          <div className="container-x">
            <FadeUp className="rounded-xl border border-ink-900/12 bg-ink-900/[0.02] p-6 md:p-7">
              <h2 className="font-display text-[0.82rem] font-bold uppercase tracking-[0.14em] text-ink-600">
                Important Disclosure
              </h2>
              <p className="mt-3 text-[0.92rem] leading-[1.7] text-ink-600">
                {content.disclaimer}
              </p>
            </FadeUp>
          </div>
        </section>
      )}

      {related.length > 0 && <RelatedServices services={related} />}

      <CTABand
        tone="dark"
        title="Let's start with a conversation"
        body="A free consultation costs you nothing and usually shortens the list of things you are worried about."
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
