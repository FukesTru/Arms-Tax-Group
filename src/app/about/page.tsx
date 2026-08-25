import Link from 'next/link';
import CTABand from '@/components/CTABand';
import CheckList from '@/components/CheckList';
import FadeUp from '@/components/FadeUp';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import Section, { SectionHeading } from '@/components/Section';
import { aboutPageSchema, breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'About The Arms Corporation | Bronx, NY Tax & Financial Experts',
  description:
    'Meet the team behind The Arms Corporation — Bronx, NY-based tax, accounting, IRS resolution, and financial services for individuals and businesses nationwide.',
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
                {site.legalName} — operating as {site.brandName} — was founded by{' '}
                {site.owner} around a single observation: the people who get
                ahead financially are rarely the ones who earn the most. They
                are the ones who understand what happens to the money after it
                arrives.
              </p>
              <p>
                That principle shaped how the firm was built. Rather than
                offering tax preparation and stopping there, we assembled a
                practice that follows the money the whole way through. We
                prepare personal and business returns. We take on the years that
                got away from people and the IRS notices that came with them. We
                keep books current so business owners can see what is actually
                happening. We help owners access capital when growth is on the
                table, work on the credit profiles that gate it, and recover
                funds that clients did not know were sitting unclaimed in a
                state treasury.
              </p>
              <p>
                Our team brings deep roots in tax and financial services, and
                the practice is deliberately structured so those disciplines sit
                together rather than in separate silos. The bookkeeper knows
                what the tax preparer needs. The person preparing your return
                understands why the funding application matters. Nothing gets
                lost in a handoff, because there is no handoff.
              </p>
              <p>
                We work from our office at {site.address.full} and remotely with
                clients across the country. What has not changed as the practice
                has grown is how we talk to people: plainly, without jargon, and
                without pretending a situation is simpler or more dire than it
                actually is.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.12}>
            <div className="rounded-2xl bg-ink-900 p-8 lg:sticky lg:top-28">
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
            title="One team, the whole financial picture"
            intro="Most people assemble this from four separate providers who never speak to each other. We put it under one roof on purpose."
          />
          <div className="lg:pt-2">
            <CheckList
              items={[
                'Personal and business tax handled together, so the two returns agree',
                'IRS resolution in-house — back taxes and notices are not somebody else’s problem',
                'Bookkeeping that feeds directly into your return instead of arriving as a surprise',
                'Funding and credit support for when compliance is not the constraint, capital is',
                'Unclaimed funds recovery — money you are already owed, found and claimed',
                'Nationwide remote service backed by a real, physical local office',
                'Year-round availability, not a storefront that closes on April 16',
                'Plain-language explanations of every number before anything is filed',
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
            <div className="relative flex min-h-[240px] items-center justify-center bg-ink-900 p-8">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse 80% 80% at 50% 20%, rgba(255,101,54,0.3), transparent 65%)',
                }}
                aria-hidden="true"
              />
              {/*
                Placeholder monogram — swap for the founder's photo once the
                client supplies one (see the launch checklist in the README).
              */}
              <span className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-accent font-display text-[2.4rem] font-extrabold text-white">
                LM
              </span>
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
                  {site.owner} founded {site.brandName} to give individuals and
                  business owners something that is genuinely hard to find: one
                  team that understands the entire financial picture, from the
                  return you file in April to the capital you need in September.
                </p>
                <p>
                  He leads the practice from its Bronx office, working directly
                  with clients on tax preparation, resolution, and the funding
                  and credit questions that follow. Clients describe the same
                  thing consistently — that he explains the numbers rather than
                  just delivering them.
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
              body: 'All nine services, grouped into the two sides of the practice.',
              href: '/services',
            },
            {
              title: 'Who We Serve',
              body: 'How nationwide remote service works, and what the Bronx office offers.',
              href: '/who-we-serve',
            },
            {
              title: 'Testimonials',
              body: 'What working with us is like, in our clients’ own words.',
              href: '/testimonials',
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
        body="Get a free consultation. We'll tell you what your situation involves — honestly, and before you commit to anything."
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
