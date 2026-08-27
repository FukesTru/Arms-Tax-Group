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
import { site } from '@/lib/site';
import OfficeAddress from '@/components/OfficeAddress';

export const metadata = pageMetadata({
  title: 'Nationwide Tax & Financial Services | The Arms Corporation',
  description:
    'Tax, accounting, and financial services for clients nationwide, backed by a real office in Bronx, NY. The Arms Corporation, remote or in person, your choice.',
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
    body: 'LLCs, sole proprietors, and partnerships that need books kept, returns filed, capital accessed, and someone to ask before making a decision.',
    services: [
      { label: 'Business & Corporate Tax Services', href: '/services/tax-accounting/business-tax-preparation' },
      { label: 'Bookkeeping & Accounting', href: '/services/tax-accounting/bookkeeping-accounting' },
    ],
  },
  {
    title: 'Corporations & Startups',
    body: 'S-corps and C-corps with payroll, multi-state activity, entity questions, and growth plans that need funding behind them.',
    services: [
      { label: 'Business & Corporate Tax Services', href: '/services/tax-accounting/business-tax-preparation' },
      { label: 'Small Business Loans & Funding', href: '/services/business-financial-solutions/business-loans-funding' },
    ],
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Nationwide Tax & Financial Services',
            description:
              'Tax, accounting, and financial services delivered remotely to clients nationwide, backed by a physical office in Bronx, NY.',
            path: '/who-we-serve',
          }),
          faqSchema(whoWeServeFaqs),
          breadcrumbSchema(trail),
        ]}
      />

      <Hero
        eyebrow="Who We Serve"
        title="Nationwide Tax & Financial Services, With a Real Local Office"
        subtitle="Work with us entirely online from anywhere in the country, or sit down with us in the Bronx. Same team, same standard, your choice."
        trustPoints={['All 50 States', 'Secure Document Sharing', 'Bronx, NY Walk-Ins']}
        breadcrumbs={trail}
      />

      {/* Two-block layout */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeUp as="article" className="flex flex-col rounded-2xl border border-ink-900/10 bg-white p-8 shadow-card md:p-10">
            <p className="eyebrow">Anywhere in the U.S.</p>
            <h2 className="mt-3 text-[1.5rem] leading-snug">
              Nationwide Remote Services
            </h2>
            <div className="prose-body mt-5 flex-1 space-y-4">
              <p>
                Every service we offer is available remotely, and the remote
                version is not a lesser version: tax preparation, IRS
                resolution, bookkeeping, planning, funding applications, credit
                work, and unclaimed funds recovery are all handled for clients
                across the country.
              </p>
              <p>
                Documents move through secure electronic sharing rather than
                email attachments. Consultations happen by phone or video, and
                we review your return with you the same way we would across a
                desk. Returns are e-filed federally and in whichever states you
                have an obligation in.
              </p>
              <p>
                Practically speaking, the only thing distance changes is that
                you do not have to find parking.
              </p>
            </div>
            <Link href="/services" className="btn-outline-dark mt-7 self-start">
              See all services
            </Link>
          </FadeUp>

          <FadeUp as="article" delay={0.1} className="flex flex-col rounded-2xl bg-ink-900 p-8 md:p-10">
            <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Bronx, New York
            </p>
            <h2 className="mt-3 !text-white text-[1.5rem] leading-snug">
              Our Bronx, NY Office
            </h2>
            <div className="mt-5 flex-1 space-y-4 text-[1.02rem] leading-[1.7] text-white/65">
              <p>
                For clients who would rather hand over a folder and talk it
                through in person, our New York office is open for
                appointments. In-person tax preparation, document drop-off, and
                face-to-face consultations across every service we offer.
              </p>
              <p>
                It also means something for our remote clients: there is a real
                address, a real office, and real people behind this practice.
              </p>
            </div>

            <dl className="mt-7 space-y-4 border-t border-white/10 pt-6 text-[0.95rem]">
              <div>
                <dt className="font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/45">
                  Address
                </dt>
                <dd className="mt-1 text-white/85">
                  {/* Suppressed while the address conflict is open */}
                  <OfficeAddress tone="dark" />
                </dd>
              </div>
              <div>
                <dt className="font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/45">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a href={site.phone.href} className="text-white/85 hover:text-accent">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                {/* UNCONFIRMED hours, see src/lib/site.ts */}
                <dt className="font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/45">
                  Hours
                </dt>
                <dd className="mt-1 text-white/85">{site.hours}</dd>
              </div>
            </dl>

            <Link href="/who-we-serve/bronx-ny" className="btn-primary mt-8 self-start">
              Visit the Bronx office page
            </Link>
          </FadeUp>
        </div>
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
        body="A free consultation works exactly the same whether you're in the Bronx or three time zones away."
      />

      <FAQ
        faqs={whoWeServeFaqs}
        title="How remote service works"
        intro="The questions clients ask most before working with us from another state."
      />

      <CTABand
        tone="dark"
        title="Ready when you are"
        body="Call, text, or send us a note and we'll get the first conversation on the calendar."
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
