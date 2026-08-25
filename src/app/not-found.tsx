import Link from 'next/link';
import Hero from '@/components/Hero';
import Section, { SectionHeading } from '@/components/Section';
import { CategoryCards } from '@/components/ServiceCards';
import { categories } from '@/lib/services';

export const metadata = {
  title: 'Page Not Found | The Arms Corporation',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Hero
        eyebrow="404"
        title="We couldn't find that page"
        subtitle="The link may be out of date, or the page may have moved. Here's where most people are headed."
        primaryCta={{ label: 'Go to the homepage', href: '/' }}
      />

      <Section>
        <SectionHeading
          eyebrow="Our Services"
          title="Try one of these instead"
        />
        <div className="mt-11">
          <CategoryCards categories={categories} />
        </div>

        <p className="mt-10 text-[0.95rem] text-ink-600">
          Still stuck?{' '}
          <Link href="/contact" className="font-semibold text-accent hover:underline">
            Get in touch
          </Link>{' '}
          and we&rsquo;ll point you to the right place.
        </p>
      </Section>
    </>
  );
}
