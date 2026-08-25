import Link from 'next/link';
import { site } from '@/lib/site';
import FadeUp from './FadeUp';
import { SectionHeading } from './Section';

/**
 * Reviews / testimonials section.
 *
 * GUARDRAIL: this component never renders star ratings, review counts, or a
 * "Google reviews" badge. The Google Business Profile is not set up yet and
 * no client-approved testimonials have been supplied.
 *
 * It has two states:
 *  1. site.testimonials is empty  → the placement is built but shows an honest
 *     "reviews coming soon" panel with no invented social proof.
 *  2. site.testimonials has real, client-approved quotes → they render as cards.
 *
 * The Google widget slot below activates only when site.googleBusinessProfile
 * .live is true. Do not add Review or AggregateRating schema until real,
 * verifiable reviews exist.
 */
export default function ReviewsSection({
  tone = 'tint',
}: {
  tone?: 'light' | 'tint';
}) {
  const testimonials = site.testimonials;
  const gbpLive = site.googleBusinessProfile.live;

  return (
    <section className={`${tone === 'tint' ? 'bg-accent-50' : 'bg-white'} py-16 md:py-24`}>
      <div className="container-x">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What it's like to work with us"
          intro="We'd rather let our clients describe the experience than describe it ourselves."
          align="center"
        />

        <div className="mt-12">
          {testimonials.length > 0 ? (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <FadeUp
                  as="li"
                  key={testimonial.author}
                  delay={index * 0.07}
                  className="flex flex-col rounded-xl border border-ink-900/10 bg-white p-7 shadow-card"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-accent"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.5 6C6.5 7.4 5 9.9 5 13.5V18h6v-6H8.2c.1-1.7.9-2.9 2.4-3.6L9.5 6Zm9 0c-3 1.4-4.5 3.9-4.5 7.5V18h6v-6h-2.8c.1-1.7.9-2.9 2.4-3.6L18.5 6Z" />
                  </svg>
                  <blockquote className="mt-5 flex-1 text-[1rem] leading-[1.7] text-ink-600">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-6 border-t border-ink-900/10 pt-5">
                    <p className="font-display text-[0.95rem] font-bold text-ink-900">
                      {testimonial.author}
                    </p>
                    {testimonial.context && (
                      <p className="mt-1 text-[0.85rem] text-ink-600">
                        {testimonial.context}
                      </p>
                    )}
                  </footer>
                </FadeUp>
              ))}
            </ul>
          ) : (
            <FadeUp className="mx-auto max-w-2xl rounded-2xl border border-dashed border-ink-900/20 bg-white p-9 text-center">
              <h3 className="text-[1.2rem]">Client testimonials are on the way</h3>
              <p className="mt-4 text-[0.98rem] leading-[1.75] text-ink-600">
                We&rsquo;re gathering feedback from the individuals and business
                owners we work with, and we&rsquo;ll publish it here as it comes
                in. In the meantime, the fastest way to find out whether
                we&rsquo;re the right fit is a free consultation — ask us
                anything.
              </p>
              <Link href="/contact" className="btn-primary mt-7">
                Get a Free Consultation
              </Link>
            </FadeUp>
          )}
        </div>

        {/*
          Google Business Profile reviews widget slot. Placement is built now;
          it renders only once the profile is live and the flag is flipped in
          src/lib/site.ts. Until then nothing is shown — no badge, no counts.
        */}
        {gbpLive && (
          <FadeUp delay={0.1} className="mt-10 text-center">
            <a
              href={site.googleBusinessProfile.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark"
            >
              Read our reviews on Google
            </a>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
