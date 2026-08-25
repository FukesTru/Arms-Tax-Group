import Link from 'next/link';
import { site } from '@/lib/site';
import FadeUp from './FadeUp';

type CTABandProps = {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** 'accent' for the mid-page band, 'dark' for the closing band. */
  tone?: 'accent' | 'dark';
  /** Verified trust claims only — never ratings or review counts. */
  badges?: string[];
};

export default function CTABand({
  title = 'Not sure which service you need?',
  body = "Talk to our team — it's a free consultation, and there's no pressure to commit.",
  ctaLabel = 'Get a Free Consultation',
  ctaHref = '/contact',
  tone = 'accent',
  badges,
}: CTABandProps) {
  const isAccent = tone === 'accent';

  return (
    <section
      className={`on-dark py-14 md:py-16 ${isAccent ? 'bg-accent' : 'bg-ink-900'}`}
    >
      <div className="container-x">
        <FadeUp className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="!text-white text-[1.55rem] leading-tight sm:text-[1.9rem]">
              {title}
            </h2>
            <p
              className={`mt-3.5 text-[1.02rem] leading-relaxed ${
                isAccent ? 'text-white/90' : 'text-white/65'
              }`}
            >
              {body}
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={ctaHref}
              className={
                isAccent
                  ? 'btn bg-white text-ink-900 hover:bg-white/90'
                  : 'btn-primary'
              }
            >
              {ctaLabel}
            </Link>
            <a
              href={site.phone.href}
              className={
                isAccent
                  ? 'btn border border-white/40 text-white hover:bg-white/10'
                  : 'btn-outline-light'
              }
            >
              Call {site.phone.display}
            </a>
          </div>
        </FadeUp>

        {badges && badges.length > 0 && (
          <FadeUp
            delay={0.08}
            className={`mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t pt-8 ${
              isAccent ? 'border-white/25' : 'border-white/10'
            }`}
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-2.5 font-display text-[0.88rem] font-semibold text-white"
              >
                <svg
                  viewBox="0 0 16 16"
                  className={`h-4 w-4 shrink-0 ${isAccent ? 'text-white' : 'text-accent'}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8 1.5 9.9 5.4l4.3.6-3.1 3 .7 4.3L8 11.3l-3.8 2 .7-4.3-3.1-3 4.3-.6L8 1.5Z" />
                </svg>
                {badge}
              </span>
            ))}
          </FadeUp>
        )}
      </div>
    </section>
  );
}
