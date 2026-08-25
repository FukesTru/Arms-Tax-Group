import Link from 'next/link';
import CTABand from '@/components/CTABand';
import FadeUp from '@/components/FadeUp';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import ReviewsSection from '@/components/ReviewsSection';
import Section, { SectionHeading } from '@/components/Section';
import { breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Client Testimonials | The Arms Corporation',
  description:
    'See what clients say about working with The Arms Corporation for tax preparation, accounting, IRS resolution, and financial services in Bronx, NY and beyond.',
  path: '/testimonials',
});

/*
  GUARDRAIL — do not modify without client sign-off:

  This page contains NO fabricated reviews, star ratings, or review counts, and
  emits NO Review or AggregateRating schema. The Google Business Profile is not
  set up yet and no client-approved testimonials have been supplied.

  To populate it:
    1. Add real, client-approved quotes to site.testimonials in src/lib/site.ts
       — these render automatically in the cards below.
    2. Once the Google Business Profile is live, set
       site.googleBusinessProfile.live = true and fill in reviewUrl. That
       activates the widget slot and the "leave a review" call to action.
    3. Only after real, verifiable reviews exist should Review/AggregateRating
       schema be considered.
*/

const trail = [
  { name: 'Home', href: '/' },
  { name: 'Testimonials', href: '/testimonials' },
];

export default function TestimonialsPage() {
  const gbpLive = site.googleBusinessProfile.live;

  return (
    <>
      {/* No Review or AggregateRating schema — see guardrail note above. */}
      <JsonLd data={breadcrumbSchema(trail)} />

      <Hero
        eyebrow="Testimonials"
        title="What Our Clients Say"
        subtitle="The most useful thing we can tell you about working with us is what it has been like for the people who already do."
        breadcrumbs={trail}
      />

      <ReviewsSection tone="light" />

      {/* Google Business Profile widget slot */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Reviews"
          title="Find us on Google"
          intro="Our Google Business Profile is being set up. Once it is live, client reviews will appear here directly."
          align="center"
        />

        <FadeUp delay={0.08} className="mx-auto mt-10 max-w-2xl">
          {gbpLive ? (
            <div className="rounded-2xl border border-ink-900/10 bg-white p-8 text-center shadow-card">
              <p className="text-[0.98rem] leading-relaxed text-ink-600">
                Read what clients have said about working with us, and leave
                your own review if we have worked together.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={site.googleBusinessProfile.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Read Reviews on Google
                </a>
                <a
                  href={site.googleBusinessProfile.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark"
                >
                  Leave a Review
                </a>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-ink-900/20 bg-white p-8 text-center">
              <p className="text-[0.98rem] leading-[1.75] text-ink-600">
                Our Google Business Profile is not live yet, so there is nothing
                to show here — and we would rather leave the space honest than
                fill it with numbers we cannot stand behind. When the profile is
                published, reviews will appear in this spot and you will be able
                to leave one of your own.
              </p>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-600">
                Worked with us already?{' '}
                <a href={`mailto:${site.email}`} className="font-semibold text-accent hover:underline">
                  Email us
                </a>{' '}
                or{' '}
                <a href={site.text.href} className="font-semibold text-accent hover:underline">
                  text {site.text.display}
                </a>{' '}
                and we will let you know the moment it goes live.
              </p>
            </div>
          )}
        </FadeUp>
      </Section>

      {/* Where to go next */}
      <Section>
        <SectionHeading
          eyebrow="Keep Exploring"
          title="Decide for yourself"
          intro="Reviews are one input. Here are the others."
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
          {[
            {
              title: 'About Us',
              body: 'Who we are, how the practice was built, and what we stand on.',
              href: '/about',
            },
            {
              title: 'Our Services',
              body: 'All nine services, and exactly what each one involves.',
              href: '/services',
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
                <h3 className="font-display text-[1.05rem] font-bold">{card.title}</h3>
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
        title="The best way to find out is to ask us something hard"
        body="Bring us your actual situation. The consultation is free, and we'll tell you honestly what it involves."
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
