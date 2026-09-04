import Link from 'next/link';
import CTABand from '@/components/CTABand';
import FAQ from '@/components/FAQ';
import FadeUp from '@/components/FadeUp';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import NationwideNetwork from '@/components/NationwideNetwork';
import ProcessSteps from '@/components/ProcessSteps';
import Section, { SectionHeading } from '@/components/Section';
import { CategoryCards } from '@/components/ServiceCards';
import { homeFaqs, houseProcess } from '@/content/general';
import { faqSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { categories } from '@/lib/services';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title:
    'Online Tax Preparation & Accounting | Nationwide | The Arms Corporation',
  description:
    'Personal and business tax preparation, IRS resolution, bookkeeping, and tax planning, handled entirely online for clients in all 50 states. Free consultation.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      {/* AccountingService schema is emitted org-wide from the root layout. */}
      <JsonLd data={faqSchema(homeFaqs)} />

      {/*
        The H1 is a hook, not a service label. It used to be a list of
        services and places, which described the firm accurately and landed on
        nobody.

        An H1 is still a ranking signal, so the keywords it gave up did not
        just disappear: they moved to the eyebrow directly above it, and they
        remain in the subheadline, the page title, and the schema. The hook
        earns the reader; the eyebrow and subhead tell search engines and
        skimmers what this is.
      */}
      <Hero
        size="large"
        visual="estimator"
        eyebrow="Online Tax & Accounting · All 50 States"
        title={
          <>
            Taxes are complicated.{' '}
            <span className="text-accent-bright">
              Knowing where you stand shouldn&rsquo;t be.
            </span>
          </>
        }
        subtitle="Reaching out to embrace YOUR needs. Personal and business tax preparation, IRS resolution, bookkeeping, and year-round planning, handled entirely online for clients across the country."
        trustPoints={[
          'Fully Remote, All 50 States',
          'Secure Document Sharing',
          'Personal & Business Tax Experts',
        ]}
      />

      {/* What We Do */}
      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Everything the tax side of your year asks for"
          intro="Filing, resolution, and record-keeping handled by one team. Whether you are an individual with a return that got complicated or a business that needs books, payroll questions, and a corporate filing, it is the same practice from start to finish."
        />
        <div className="mt-12">
          <CategoryCards categories={categories} />
        </div>
      </Section>

      <CTABand
        title="Not sure which service fits your situation?"
        body="Talk to our team. It's a free consultation, and we'll tell you honestly what you need, including when the answer is nothing."
      />

      {/* About preview */}
      <Section tone="tint">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="text-[1.75rem] leading-tight sm:text-[2.1rem]">
              Built to empower entrepreneurs
            </h2>
            <div className="prose-body mt-6 space-y-5">
              <p>
                {site.brandName} was founded by {site.owner} to close a
                specific gap. Most people building something are not short on
                drive. They are short on access: to competent financial
                advice, to books that hold up, and to someone who has already
                done it and will tell them the truth.
              </p>
              <p>
                So we work on both sides of that. We train and develop
                independent business owners through real-world instruction and
                mentor partnerships, and we run a full accounting practice:
                tax preparation, IRS resolution, bookkeeping, and year-round
                planning, for the people coming up through that network and for
                clients who simply need the work done well.
              </p>
              <p>
                The two halves reinforce each other. An entrepreneur we train
                needs books that hold up and a return filed correctly. A client
                who came for a return often turns out to be building something
                and to need guidance more than paperwork.
              </p>
            </div>

            <blockquote className="mt-8 border-l-[3px] border-accent pl-5">
              <p className="font-display text-[1.15rem] font-bold italic leading-snug text-ink-900">
                &ldquo;{site.tagline}&rdquo;
              </p>
              <footer className="mt-2 text-[0.88rem] text-ink-600">
                {site.owner}, Founder
              </footer>
            </blockquote>

            <Link href="/about" className="btn-outline-dark mt-8">
              More About Us
            </Link>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  stat: '5',
                  label: 'Services under one roof',
                  detail: 'Filing, corporate returns, resolution, books, and planning.',
                },
                {
                  // Deliberately not a number. The intake confirms a nationwide
                  // remote service area; it does NOT confirm clients served in
                  // any specific count of states. Do not restore "50" unless
                  // the client can stand behind it.
                  stat: 'Nationwide',
                  label: 'Remote',
                  detail: 'Every service handled online or by phone.',
                },
                {
                  stat: '1',
                  label: 'Network and practice',
                  detail: 'Training and accounting work, run as one thing.',
                },
                {
                  stat: '12',
                  label: 'Months a year',
                  detail: 'We are reachable after April, not just before it.',
                },
              ].map((item, index) => (
                <FadeUp
                  key={item.label}
                  delay={0.12 + index * 0.06}
                  className="rounded-xl border border-ink-900/10 bg-white p-6 shadow-card"
                >
                  <p
                    className={`font-display font-extrabold leading-none text-accent ${
                      item.stat.length > 3 ? 'text-[1.6rem]' : 'text-[2.4rem]'
                    }`}
                  >
                    {item.stat}
                  </p>
                  <p className="mt-3 font-display text-[0.98rem] font-bold text-ink-900">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-600">
                    {item.detail}
                  </p>
                </FadeUp>
              ))}
            </div>
          </FadeUp>
        </div>
      </Section>

      <ProcessSteps
        steps={houseProcess}
        eyebrow="How We Work"
        title="Four steps, and you always know which one you're on"
        intro="No mystery about what happens next, what we need from you, or where things stand."
        tone="light"
      />

      {/* Who We Serve preview */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Who We Serve"
          title="A practice without borders"
          intro="A digital practice, not a local firm that also takes remote clients. The same person handles your return from the first conversation to the e-file confirmation, wherever you happen to live."
          tone="dark"
        />

        <FadeUp delay={0.06} className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          <NationwideNetwork className="block h-[220px] w-full md:h-[300px]" />
        </FadeUp>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {[
            {
              title: 'Anywhere in the country',
              href: '/who-we-serve',
              body: 'Every service is delivered online. Documents are shared through a secure link, consultations happen by phone or video, and returns are e-filed federally and in whichever states you owe in.',
              meta: 'All 50 states, no office visit needed',
              cta: 'How it works',
            },
            {
              title: 'Whatever your return looks like',
              href: '/services',
              body: 'Individuals with a return that got complicated, self-employed people juggling 1099 income, small business owners, and corporations with payroll and multi-state activity.',
              meta: 'Individuals, self-employed, and businesses',
              cta: 'See all services',
            },
          ].map((block, index) => (
            <FadeUp
              as="article"
              key={block.href}
              delay={index * 0.1}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-accent/40"
            >
              <h3 className="!text-white text-[1.3rem]">{block.title}</h3>
              <p className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-white/65">
                {block.body}
              </p>
              <p className="mt-5 font-display text-[0.85rem] font-semibold text-accent">
                {block.meta}
              </p>
              <Link
                href={block.href}
                className="mt-6 inline-flex items-center gap-2 font-display text-[0.92rem] font-bold text-white transition-colors hover:text-accent"
              >
                {block.cta}
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2} className="mt-10">
          <p className="text-[0.95rem] text-white/55">
            Who we work with:{' '}
            <span className="text-white/80">
              individuals and families, self-employed and gig workers, small
              business owners, and corporations and startups.
            </span>{' '}
            <Link
              href="/who-we-serve"
              className="font-semibold text-accent hover:text-accent-600"
            >
              See who we serve →
            </Link>
          </p>
        </FadeUp>
      </Section>

      <FAQ
        faqs={homeFaqs}
        title="Questions people ask before they call"
        intro="If yours is not here, ask us directly. The consultation is free and there is no obligation attached to it."
      />

      <CTABand
        tone="dark"
        title="Ready to keep more of what you make?"
        body="Start with a free consultation. Call, text, or send us a note, whichever is easiest."
        badges={[
          'Fully Remote',
          'Nationwide Service',
          'Personal & Business Tax Experts',
          'Free Consultation',
        ]}
      />
    </>
  );
}
