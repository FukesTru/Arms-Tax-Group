import JsonLd from '@/components/JsonLd';
import LegalPage, { type LegalSection } from '@/components/LegalPage';
import { breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { legalContactLine, legalState } from '@/lib/address';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Terms of Service | The Arms Corporation',
  description:
    'The terms governing your use of The Arms Corporation website and services, including service descriptions, outcome disclaimers, and New York governing law.',
  path: '/terms',
});

/*
  PLACEHOLDER LEGAL CONTENT — NOT ATTORNEY REVIEWED.

  Written to cover the services this site offers, with particular attention to
  the no-guaranteed-outcome language required for tax resolution and credit
  services. Must be reviewed by the client and qualified legal counsel before
  publication.
*/

const trail = [
  { name: 'Home', href: '/' },
  { name: 'Terms of Service', href: '/terms' },
];

const sections: LegalSection[] = [
  {
    heading: 'Acceptance of Terms',
    paragraphs: [
      `By accessing or using this website, you agree to these Terms of Service. If you do not agree, please do not use the site. These terms apply to your use of the website itself; services we provide to you are additionally governed by the written engagement agreement covering that work.`,
      `We may update these terms from time to time. Continued use of the site after a change constitutes acceptance of the revised terms.`,
    ],
  },
  {
    heading: 'Services Description',
    paragraphs: [
      `${site.legalName}, operating as ${site.brandName}, provides tax preparation, tax resolution, bookkeeping and accounting, tax planning and consulting, business consulting, credit-related services, unclaimed funds recovery assistance, and referrals to third-party lending and funding partners.`,
      'The content on this website is general information, not advice for your particular situation. Reading this site does not create a client relationship. A client relationship begins only when we have both agreed in writing to an engagement and its scope.',
    ],
  },
  {
    heading: 'No Guarantee of Outcome',
    paragraphs: [
      'We do not guarantee any particular result from any service we provide. Outcomes depend on your individual facts, the accuracy and completeness of the information you supply, applicable law and agency procedure, and decisions made by third parties over which we have no control.',
    ],
    bullets: [
      'Tax resolution: we do not guarantee any reduction in what you owe, any settlement amount, the removal of any lien or levy, or any specific timeline. Available options depend on your circumstances and applicable IRS and state procedures.',
      'Credit services: we do not guarantee any credit score increase or the removal of any item from a credit report. Accurate and verifiable information generally cannot be removed. You have the right to dispute inaccurate information directly with the credit bureaus yourself, at no cost.',
      'Lending and funding: we are not a direct lender. Approvals, funding amounts, rates, and terms are determined solely by third-party funding partners under their own underwriting criteria. Submitting an application does not guarantee approval.',
      'Unclaimed funds recovery: we do not guarantee that a search will identify recoverable property, or that any claim filed will be approved by the holding agency.',
      'Tax preparation: returns are prepared based on the information and documentation you provide. We do not guarantee any particular refund amount or that a return will not be selected for examination.',
    ],
  },
  {
    heading: 'Your Responsibilities',
    paragraphs: [
      'The quality of our work depends on the quality of what you give us. You agree to provide accurate, complete, and timely information and documentation, to review any return or submission we prepare before it is filed, and to notify us promptly of anything that changes or of any notice you receive from a tax authority or other agency.',
      'You remain responsible for the accuracy of information you supply and for meeting your own filing and payment obligations.',
    ],
  },
  {
    heading: 'Fees & Payment',
    paragraphs: [
      'Fees are established in the engagement agreement for the specific work you have requested and are communicated before that work begins. Fees for professional services are earned as the work is performed and are not contingent on any particular outcome unless expressly stated otherwise in writing.',
    ],
  },
  {
    heading: 'Third-Party Partners & Links',
    paragraphs: [
      'Some services involve third-party providers, including lending and funding partners, credit-related service providers, and government agencies. We are not responsible for the acts, omissions, decisions, or terms of any third party, and their involvement is governed by their own agreements with you.',
      'This website may link to third-party sites. We do not control and are not responsible for their content or practices.',
    ],
  },
  {
    heading: 'Intellectual Property',
    paragraphs: [
      `The content, design, text, graphics, and materials on this website are the property of ${site.legalName} or its licensors and are protected by applicable intellectual property law. You may not reproduce, distribute, or create derivative works from this content without our prior written permission.`,
    ],
  },
  {
    heading: 'Limitation of Liability',
    paragraphs: [
      `To the fullest extent permitted by law, ${site.legalName} and its officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, or data, arising from your use of this website or from any services provided.`,
      'To the fullest extent permitted by law, our total liability arising out of or relating to any engagement shall not exceed the fees you paid us for the specific service giving rise to the claim.',
      'Nothing in these terms limits liability that cannot lawfully be limited.',
    ],
  },
  {
    heading: 'Disclaimer of Warranties',
    paragraphs: [
      'This website is provided on an "as is" and "as available" basis without warranties of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components, or that information on it is current or complete.',
    ],
  },
  {
    heading: 'Governing Law',
    paragraphs: [
      `These terms are governed by the laws of the State of ${legalState}, without regard to its conflict of law provisions. Any dispute arising out of or relating to these terms or your use of this website shall be subject to the exclusive jurisdiction of the state and federal courts located in ${legalState}.`,
    ],
  },
  {
    heading: 'Contact Information',
    paragraphs: [
      `Questions about these terms can be directed to ${site.email}, ${site.phone.display}, or ${legalContactLine}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <LegalPage
        title="Terms of Service"
        intro="The terms that govern your use of this website and the services we provide."
        lastUpdated="August 25, 2026"
        sections={sections}
        breadcrumbs={trail}
      />
    </>
  );
}
