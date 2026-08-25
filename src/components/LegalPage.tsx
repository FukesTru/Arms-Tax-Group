import Link from 'next/link';
import FadeUp from './FadeUp';
import Hero from './Hero';
import type { Crumb } from './Breadcrumbs';

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

/**
 * Shared layout for Privacy Policy and Terms of Service.
 *
 * The content passed in is placeholder legal copy — general and not reviewed
 * by an attorney. It must be reviewed by the client and their counsel before
 * publication.
 */
export default function LegalPage({
  title,
  intro,
  lastUpdated,
  sections,
  breadcrumbs,
}: {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
  breadcrumbs: Crumb[];
}) {
  const currentPath = breadcrumbs[breadcrumbs.length - 1]?.href ?? '';

  return (
    <>
      <Hero title={title} subtitle={intro} breadcrumbs={breadcrumbs} />

      <section className="bg-white py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:gap-14">
            {/* Contents */}
            <FadeUp>
              <div className="lg:sticky lg:top-28">
                <p className="font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-ink-600">
                  Last updated
                </p>
                <p className="mt-1.5 font-display text-[0.95rem] font-semibold text-ink-900">
                  {lastUpdated}
                </p>

                <nav aria-label="On this page" className="mt-8 border-t border-ink-900/10 pt-6">
                  <p className="font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-ink-600">
                    On this page
                  </p>
                  <ol className="mt-4 space-y-2.5">
                    {sections.map((section) => (
                      <li key={section.heading}>
                        <a
                          href={`#${slugify(section.heading)}`}
                          className="text-[0.9rem] leading-snug text-ink-600 transition-colors hover:text-accent"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </FadeUp>

            {/* Body */}
            <div>
              <FadeUp className="rounded-xl border border-accent/25 bg-accent-50 p-6">
                <p className="text-[0.92rem] leading-[1.7] text-ink-700">
                  <strong className="font-display font-bold text-ink-900">
                    Please note:
                  </strong>{' '}
                  This document is provided for general informational purposes
                  and has not been reviewed by an attorney. It should be
                  reviewed and adapted by qualified legal counsel before being
                  relied upon.
                </p>
              </FadeUp>

              <div className="mt-10 space-y-11">
                {sections.map((section, index) => (
                  <FadeUp
                    as="section"
                    key={section.heading}
                    delay={Math.min(index * 0.04, 0.25)}
                    className="scroll-mt-28"
                  >
                    <h2
                      id={slugify(section.heading)}
                      className="scroll-mt-28 text-[1.3rem] leading-snug"
                    >
                      {section.heading}
                    </h2>

                    {section.paragraphs?.map((paragraph, i) => (
                      <p
                        key={i}
                        className="mt-4 text-[1rem] leading-[1.75] text-ink-600"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && (
                      <ul className="mt-4 space-y-2.5">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-[1rem] leading-[1.7] text-ink-600"
                          >
                            <span
                              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                              aria-hidden="true"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </FadeUp>
                ))}
              </div>

              <FadeUp className="mt-14 border-t border-ink-900/10 pt-8">
                <p className="text-[0.95rem] leading-relaxed text-ink-600">
                  Questions about this document?{' '}
                  <Link href="/contact" className="font-semibold text-accent hover:underline">
                    Get in touch
                  </Link>
                  .
                </p>

                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {relatedLinks
                    .filter((link) => link.href !== currentPath)
                    .map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="font-display text-[0.9rem] font-semibold text-accent transition-colors hover:text-accent-600"
                        >
                          {link.label} &rarr;
                        </Link>
                      </li>
                    ))}
                </ul>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const relatedLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Our Services', href: '/services' },
  { label: 'About Us', href: '/about' },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
