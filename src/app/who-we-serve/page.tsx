import Link from 'next/link';
import CTABand from '@/components/CTABand';
import FAQ from '@/components/FAQ';
import FadeUp from '@/components/FadeUp';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import Section, { SectionHeading } from '@/components/Section';
import { whoWeServeFaqs } from '@/content/general';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Who We Serve | Remote Tax & Accounting Nationwide',
  description:
    'Tax preparation and accounting for individuals, the self-employed, small businesses, and corporations. Fully remote, in all 50 states, secure document sharing.',
  path: '/who-we-serve',
});

const trail = [
  { name: 'Home', href: '/' },
  { name: 'Who We Serve', href: '/who-we-serve' },
];

/*
  UNCONFIRMED: this client-type list is a reasonable default derived from the
  services offered, not from intake data. Confirm with the client before launch.
*/
const clientTypes = [
  {
    title: 'Individuals & Families',
    body: 'W-2 filers, households with dependents, education and family credits, and anyone whose return got more complicated than it used to be.',
    services: [
      { label: 'Personal Tax Preparation', href: '/services/tax-accounting/personal-tax-preparation' },
      { label: 'Tax Resolution', href: '/services/tax-accounting/tax-resolution' },
    ],
  },
  {
    title: 'Self-Employed & Gig Workers',
    body: '1099 contractors, freelancers, rideshare and delivery drivers, and anyone juggling untaxed income alongside a day job.',
    services: [
      { label: 'Personal Tax Preparation', href: '/services/tax-accounting/personal-tax-preparation' },
      { label: 'Tax Planning', href: '/services/tax-accounting/tax-planning' },
    ],
  },
  {
    title: 'Small Business Owners',
    body: 'LLCs, sole proprietors, and partnerships that need books kept, returns filed, and someone to ask before making a decision.',
    services: [
      { label: 'Business & Corporate Tax Services', href: '/services/tax-accounting/business-tax-preparation' },
      { label: 'Bookkeeping & Accounting', href: '/services/tax-accounting/bookkeeping-accounting' },
    ],
  },
  {
    title: 'Corporations & Startups',
    body: 'S-corps and C-corps with payroll, multi-state activity, entity questions, and books that have to hold up under review.',
    services: [
      { label: 'Business & Corporate Tax Services', href: '/services/tax-accounting/business-tax-preparation' },
    ],
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Nationwide Tax & Accounting Services',
            description:
              'Tax preparation and accounting delivered entirely remotely to clients in all 50 states.',
            path: '/who-we-serve',
          }),
          faqSchema(whoWeServeFaqs),
          breadcrumbSchema(trail),
        ]}
      />

      <Hero
        eyebrow="Who We Serve"
        title="A Fully Remote Practice, Wherever You File From"
        subtitle="Everything we do is handled online: documents shared securely, consultations by phone or video, returns e-filed federally and in every state you owe in. Where you live does not decide whether we can work together."
        trustPoints={['All 50 States', 'Secure Document Sharing', 'No Office Visit Needed']}
        breadcrumbs={trail}
      />

      {/* How the remote practice actually works */}
      <Section>
        <SectionHeading
          eyebrow="How It Works"
          title="Online, end to end"
          intro="This is a digital practice. Not a local firm that also takes remote clients, and not a call centre either. The same person handles your return from the first conversation to the e-file confirmation."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Share your documents',
              body: 'You get a secure link, not a request to email attachments. Upload from a phone or a desktop, whenever suits you. We tell you exactly what we need rather than sending a generic checklist.',
            },
            {
              step: '02',
              title: 'Talk it through',
              body: 'Consultations happen by phone or video, at a time you pick. We go through your return with you and explain what is on it, which is the part most people have never actually had.',
            },
            {
              step: '03',
              title: 'Filed and confirmed',
              body: 'Returns are e-filed federally and in whichever states you have an obligation in. You get copies and confirmation, and we stay reachable after April rather than closing up.',
            },
          ].map((item, index) => (
            <FadeUp
              as="article"
              key={item.step}
              delay={index * 0.08}
              className="rounded-2xl border border-ink-900/10 bg-white p-7 shadow-card"
            >
              <span className="font-display text-[0.8rem] font-bold uppercase tracking-[0.16em] text-accent">
                {item.step}
              </span>
              <h3 className="mt-4 text-[1.15rem] leading-snug">{item.title}</h3>
              <p className="mt-3 text-[0.96rem] leading-relaxed text-ink-600">
                {item.body}
              </p>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3} className="mt-10">
          <p className="text-[0.95rem] leading-relaxed text-ink-600">
            Every service we offer works this way, and the remote version is not
            a lesser version.{' '}
            <Link href="/services" className="font-semibold text-accent hover:underline">
              See all services
            </Link>
            .
          </p>
        </FadeUp>
      </Section>

      {/* Who We Help */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Who We Help"
          title="The people and businesses we work with most"
          intro="If you do not see yourself on this list, that does not mean we cannot help, it means the list is not exhaustive. Ask."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {clientTypes.map((type, index) => (
            <FadeUp
              as="li"
              key={type.title}
              delay={index * 0.07}
              className="flex h-full flex-col rounded-xl border border-ink-900/10 bg-white p-7 shadow-card"
            >
              <h3 className="font-display text-[1.15rem] font-bold leading-snug">
                {type.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.96rem] leading-relaxed text-ink-600">
                {type.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-ink-900/10 pt-5">
                {type.services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="rounded-full bg-accent-50 px-3.5 py-1.5 font-display text-[0.8rem] font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </FadeUp>
          ))}
        </ul>
      </Section>

      <CTABand
        title="Wherever you are, we can start today"
        body="A free consultation works exactly the same wherever you are. Documents move securely, and we talk it through by phone or video."
      />

      <FAQ
        faqs={whoWeServeFaqs}
        title="How remote service works"
        intro="The questions clients ask most before working with us from another state."
      />

      <CTABand
        tone="dark"
        title="Ready when you are"
        body="Call or send us a note and we'll get the first conversation on the calendar."
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
