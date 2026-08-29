import Link from 'next/link';
import CTABand from '@/components/CTABand';
import CheckList from '@/components/CheckList';
import FadeUp from '@/components/FadeUp';
import FounderPortrait from '@/components/FounderPortrait';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import Section, { SectionHeading } from '@/components/Section';
import { aboutPageSchema, breadcrumbSchema } from '@/lib/schema';
import { images } from '@/lib/images';
import SiteImage from '@/components/SiteImage';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'About Our Bronx, NY Tax & Accounting Team',
  description:
    'Meet the team behind The Arms Corporation. Bronx, NY-based tax preparation, accounting, IRS resolution, and planning for individuals and businesses nationwide.',
  path: '/about',
});

const trail = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[aboutPageSchema(), breadcrumbSchema(trail)]} />

      <Hero
        eyebrow="About Us"
        title="About The Arms Corporation"
        subtitle="A Bronx-based team helping individuals and businesses keep more of what they earn."
        trustPoints={['Bronx, NY Office', 'Nationwide Service', 'Year-Round Availability']}
        breadcrumbs={trail}
      />

      {/* Our Story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Our Story" title="Why this practice exists" />
            <FadeUp delay={0.06} className="prose-body mt-6 space-y-5">
              <p>
                {site.legalName} (operating as {site.brandName}) exists to
                empower entrepreneurs. That word gets used loosely, so here is
                what it means in practice: most people who set out to build
                something are not short on drive. They are short on access
                to competent financial advice, to books and filings that hold
                up, and to someone who has already walked the path and will
                tell them the truth about it.
              </p>
              <p>
                Closing that gap is the work. We do it two ways, and they
                reinforce each other. The first is education: we train and
                develop independent business owners through real-world
                instruction rather than theory, pairing each of them with
                mentors who have built businesses themselves. The second is
                the accounting practice: tax preparation, IRS resolution,
                bookkeeping, and year-round planning, delivered by a team that
                understands what a growing business actually runs into.
              </p>
              <p>
                The two halves are not separate offerings that happen to share
                a name. An entrepreneur we train needs books that hold up and a
                return filed correctly. A client who comes to us for a return
                often turns out to be building something and to need guidance
                more than paperwork. Because the network and the practice sit
                under one roof, neither group has to go looking elsewhere for
                the other half.
              </p>
              <p>
                We work with individuals, families, self-employed people, and
                business owners from our New York office and remotely with
                clients across the country, reaching out, as we have always
                put it, to embrace your needs.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.12}>
            <div className="overflow-hidden rounded-2xl border border-ink-900/10 shadow-card">
              <SiteImage
                asset={images.ourStory}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>

            <div className="mt-6 rounded-2xl bg-ink-900 p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Our Mission
              </p>
              <blockquote className="mt-5">
                <p className="font-display text-[1.6rem] font-bold italic leading-snug text-white">
                  &ldquo;{site.tagline}&rdquo;
                </p>
              </blockquote>
              <p className="mt-6 text-[0.96rem] leading-relaxed text-white/65">
                It is the sentence the firm was built around, and the test we
                apply to every recommendation we make: does this actually leave
                our client better off?
              </p>
              <p className="mt-6 border-t border-white/15 pt-6 font-display text-[1.05rem] font-bold text-accent">
                {site.brandLine}
              </p>
              <Link href="/contact" className="btn-primary mt-8 w-full">
                Get a Free Consultation
              </Link>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section tone="tint">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="What Makes Us Different"
            title="A network and a practice, not a storefront"
            intro="Most people assemble this from four separate providers who never speak to each other, and none of them teach you anything. We put it under one roof on purpose."
          />
          <div className="lg:pt-2">
            <CheckList
              items={[
                'A training network that develops independent business owners, not just a client list',
                'Real-world instruction and mentor partnerships, rather than theory and a handbook',
                'Access to competent financial advice, in plain language rather than jargon',
                'Personal and business tax handled together, so the two returns agree',
                'IRS resolution in-house. Back taxes and notices are not somebody else’s problem',
                'Bookkeeping that feeds directly into your return instead of arriving as a surprise',
                'Tax planning through the year, so decisions get made before the deadline',
                'Nationwide remote service backed by a real local office',
                'Year-round availability, not a storefront that closes on April 16',
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Meet the Team */}
      <Section>
        <SectionHeading
          eyebrow="Meet the Team"
          title="The person behind the practice"
          intro="Our practice is led by its founder, and clients work with the team directly rather than through a call center."
        />

        <FadeUp delay={0.08} className="mt-11">
          <article className="grid gap-8 overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-card md:grid-cols-[280px_1fr] md:gap-0">
            <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-zinc-100 ring-1 ring-inset ring-ink-900/10">
              {/* Renders the photograph when one is on disk, initials otherwise. */}
              <FounderPortrait />
            </div>

            <div className="p-8 md:p-9">
              <h3 className="text-[1.4rem]">{site.owner}</h3>
              <p className="mt-1.5 font-display text-[0.9rem] font-bold uppercase tracking-[0.12em] text-accent">
                Founder &amp; Principal
              </p>
              {/*
                PRE-LAUNCH: replace this bio with the founder's own copy, and
                add professional credentials only once the client confirms them.
              */}
              <div className="prose-body mt-5 space-y-4">
                <p>
                  {site.owner} founded {site.brandName} to give entrepreneurs
                  something that is genuinely hard to find: access to competent
                  financial advice, and the training to eventually not need to
                  ask for it. The firm reflects that: an accounting practice and
                  a development network for independent business owners, run as
                  one thing.
                </p>
                <p>
                  He leads the practice directly, working with clients on tax
                  preparation, resolution, and the planning questions that
                  follow, and with the owners coming up through the network.
                  Clients describe the same thing consistently: that he explains
                  the numbers rather than just delivering them.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={site.phone.href} className="btn-outline-dark !py-2.5 !text-sm">
                  Call {site.phone.display}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="btn-outline-dark !py-2.5 !text-sm"
                >
                  Email {site.owner.split(' ')[0]}
                </a>
              </div>
            </div>
          </article>
        </FadeUp>
      </Section>

      {/* Where to go next */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Keep Exploring"
          title="Where to go from here"
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
          {[
            {
              title: 'Our Services',
              body: 'All five tax and accounting services, in one place.',
              href: '/services',
            },
            {
              title: 'Who We Serve',
              body: 'How nationwide remote service works, and what the Bronx office offers.',
              href: '/who-we-serve',
            },
            {
              title: 'Contact',
              body: 'A free consultation is the fastest way to judge whether we fit.',
              href: '/contact',
            },
          ].map((card, index) => (
            <FadeUp key={card.href} delay={index * 0.07}>
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-xl border border-ink-900/10 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card-hover"
              >
                <h3 className="font-display text-[1.05rem] font-bold">
                  {card.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-ink-600">
                  {card.body}
                </p>
                <span className="mt-5 font-display text-[0.88rem] font-bold text-accent">
                  Visit page →
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </Section>

      <CTABand
        tone="dark"
        title="Ready to work with us?"
        body="Get a free consultation. We'll tell you what your situation involves, honestly, and before you commit to anything."
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
