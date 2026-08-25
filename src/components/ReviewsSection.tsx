import Link from 'next/link';
import { liveTestimonials, type Testimonial } from '@/lib/site';
import FadeUp from './FadeUp';
import { SectionHeading } from './Section';

/**
 * Client testimonials.
 *
 * GUARDRAIL: these are direct testimonials quoted from the client's own site,
 * NOT a Google Business Profile feed. This component never renders star
 * ratings, review counts, or a Google badge, and no Review/AggregateRating
 * schema is emitted anywhere — the Business Profile is still not set up.
 *
 * A testimonial whose attribution has not been recovered renders with a
 * visible build-review chip and is excluded from the homepage rotation, so an
 * unattributed quote can never quietly read as a finished, published one.
 */
export default function ReviewsSection({
  tone = 'tint',
  /** Homepage rotates a subset; /testimonials shows everything. */
  items = liveTestimonials,
  heading = "What it's like to work with us",
  intro = "We'd rather let our clients describe the experience than describe it ourselves.",
  showViewAll = false,
}: {
  tone?: 'light' | 'tint';
  items?: Testimonial[];
  heading?: string;
  intro?: string;
  showViewAll?: boolean;
}) {
  return (
    <section className={`${tone === 'tint' ? 'bg-accent-50' : 'bg-white'} py-16 md:py-24`}>
      <div className="container-x">
        <SectionHeading
          eyebrow="Client Feedback"
          title={heading}
          intro={intro}
          align="center"
        />

        <div className="mt-12">
          {items.length > 0 ? (
            <ul
              className={`grid gap-6 ${
                items.length === 1
                  ? 'mx-auto max-w-2xl'
                  : items.length === 2
                    ? 'md:grid-cols-2'
                    : 'md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {items.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.quote.slice(0, 40)}
                  testimonial={testimonial}
                  delay={index * 0.07}
                />
              ))}
            </ul>
          ) : (
            <FadeUp className="mx-auto max-w-2xl rounded-2xl border border-dashed border-ink-900/20 bg-white p-9 text-center">
              <h3 className="text-[1.2rem]">Client testimonials are on the way</h3>
              <p className="mt-4 text-[0.98rem] leading-[1.75] text-ink-600">
                We&rsquo;re gathering feedback from the individuals and business
                owners we work with, and we&rsquo;ll publish it here as it comes
                in.
              </p>
              <Link href="/contact" className="btn-primary mt-7">
                Get a Free Consultation
              </Link>
            </FadeUp>
          )}
        </div>

        {showViewAll && (
          <FadeUp delay={0.16} className="mt-10 text-center">
            <Link href="/testimonials" className="btn-outline-dark">
              Read more client testimonials
            </Link>
          </FadeUp>
        )}
      </div>
    </section>
  );
}

export function TestimonialCard({
  testimonial,
  delay = 0,
}: {
  testimonial: Testimonial;
  delay?: number;
}) {
  const pending = testimonial.status === 'pending-attribution';

  return (
    <FadeUp
      as="li"
      delay={delay}
      className={`flex flex-col rounded-xl border bg-white p-7 shadow-card ${
        pending ? 'border-2 border-dashed border-amber-500/70' : 'border-ink-900/10'
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 shrink-0 text-accent"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.5 6C6.5 7.4 5 9.9 5 13.5V18h6v-6H8.2c.1-1.7.9-2.9 2.4-3.6L9.5 6Zm9 0c-3 1.4-4.5 3.9-4.5 7.5V18h6v-6h-2.8c.1-1.7.9-2.9 2.4-3.6L18.5 6Z" />
      </svg>

      <blockquote className="mt-5 flex-1 text-[1rem] leading-[1.7] text-ink-600">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <footer className="mt-6 border-t border-ink-900/10 pt-5">
        {testimonial.author ? (
          <>
            <p className="font-display text-[0.95rem] font-bold text-ink-900">
              {testimonial.author}
            </p>
            {testimonial.location && (
              <p className="mt-1 text-[0.85rem] text-ink-600">{testimonial.location}</p>
            )}
          </>
        ) : (
          <p className="font-display text-[0.9rem] font-bold uppercase tracking-[0.12em] text-amber-700">
            Attribution needed before launch
          </p>
        )}
      </footer>

      {/*
        Reviewer-facing note. Rendered so the client sees it during review and
        can act on it; it disappears the moment the item is marked 'live'.
      */}
      {pending && testimonial.reviewNote && (
        <p className="mt-4 rounded-lg bg-amber-50 p-3 text-[0.8rem] leading-relaxed text-amber-900">
          {testimonial.reviewNote}
        </p>
      )}
    </FadeUp>
  );
}
