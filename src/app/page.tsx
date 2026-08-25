import Link from 'next/link';
import CTABand from '@/components/CTABand';
import FAQ from '@/components/FAQ';
import FadeUp from '@/components/FadeUp';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import ProcessSteps from '@/components/ProcessSteps';
import ReviewsSection from '@/components/ReviewsSection';
import Section, { SectionHeading } from '@/components/Section';
import { CategoryCards } from '@/components/ServiceCards';
import { homeFaqs, houseProcess } from '@/content/general';
import { faqSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { categories } from '@/lib/services';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title:
    'Tax Preparation & Financial Services | Bronx, NY & Nationwide | The Arms Corporation',
  description:
    'Personal and business tax prep, IRS resolution, bookkeeping, funding, and credit solutions from The Arms Corporation. Bronx, NY office, serving nationwide.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      {/* AccountingService schema is emitted org-wide from the root layout. */}
      <JsonLd data={faqSchema(homeFaqs)} />

      <Hero
        size="large"
        title={
          <>
            Tax &amp; Financial Solutions for Individuals and Businesses —{' '}
            <span className="text-accent">Bronx, NY &amp; Nationwide</span>
          </>
        }
        subtitle="Personal and business tax preparation, IRS resolution, bookkeeping, funding, and credit solutions — from a Bronx-based team serving clients nationwide."
        trustPoints={[
          'Nationwide Remote Service',
          'Bronx, NY Office',
          'Personal & Business Tax Experts',
        ]}
      />

      {/* What We Do */}
      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Two sides of the same financial picture"
          intro="Tax and accounting work keeps you compliant and accurate. Funding, credit, and recovery work helps you grow and reclaim. Most clients need something from both."
        />
        <div className="mt-12">
          <CategoryCards categories={categories} />
        </div>
      </Section>

      <CTABand
        title="Not sure which service fits your situation?"
        body="Talk to our team — it's a free consultation, and we'll tell you honestly what you need, including when the answer is nothing."
      />

      {/* About preview */}
      <Section tone="tint">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="text-[1.75rem] leading-tight sm:text-[2.1rem]">
              Built on a single idea about money
            </h2>
            <div className="prose-body mt-6 space-y-5">
              <p>
                {site.brandName} was founded by {site.owner} on a conviction
                that shows up in every engagement we take: earning more matters
                far less than keeping more. Plenty of people raise their income
                and end up no further ahead, because nobody was paying attention
                to what happened to it along the way.
              </p>
              <p>
                So we built a practice that covers the whole picture. Personal
                and business tax preparation. IRS resolution for the years that
                got away from you. Bookkeeping that keeps the numbers honest.
                Funding and credit work for when you are ready to grow, and
                recovery work for money you are already owed and did not know
                about.
              </p>
              <p>
                We work with individuals, families, self-employed people, and
                business owners from our office at {site.address.street} in the
                Bronx — and remotely with clients across the country. Same team,
                same standard, whether you are down the block or three time
                zones away.
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
                  stat: '9',
                  label: 'Services under one roof',
                  detail: 'Tax, accounting, funding, credit, and recovery.',
                },
                {
                  stat: '50',
                  label: 'States served',
                  detail: 'Remote filing and support nationwide.',
                },
                {
                  stat: '1',
                  label: 'Team, start to finish',
                  detail: 'No handoffs between disconnected providers.',
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
                  <p className="font-display text-[2.4rem] font-extrabold leading-none text-accent">
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
          title="A real local office, and a practice without borders"
          intro="Come sit down with us in the Bronx, or work with us entirely online from anywhere in the country. The work is the same either way."
          tone="dark"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[
            {
              title: 'Bronx, NY Office',
              href: '/who-we-serve/bronx-ny',
              body: `Walk-in appointments at ${site.address.street}. In-person tax preparation, document drop-off, and face-to-face consultations for clients who prefer them.`,
              meta: site.address.full,
              cta: 'Visit the Bronx office',
            },
            {
              title: 'Nationwide Remote Service',
              href: '/who-we-serve',
              body: 'Every service we offer is available remotely. Documents are shared securely online, consultations happen by phone or video, and returns are e-filed wherever you live.',
              meta: 'Serving clients in all 50 states',
              cta: 'How remote service works',
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

      <ReviewsSection />

      <FAQ
        faqs={homeFaqs}
        title="Questions people ask before they call"
        intro="If yours is not here, ask us directly — the consultation is free and there is no obligation attached to it."
      />

      <CTABand
        tone="dark"
        title="Ready to keep more of what you make?"
        body="Start with a free consultation. Call, text, or send us a note — whichever is easiest."
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
