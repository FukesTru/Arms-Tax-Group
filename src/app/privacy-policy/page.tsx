import JsonLd from '@/components/JsonLd';
import LegalPage, { type LegalSection } from '@/components/LegalPage';
import { breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { legalContactLine } from '@/lib/address';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How The Arms Corporation collects, uses, protects, and shares the personal and tax information you provide to us, your rights over it, and how to contact us.',
  path: '/privacy-policy',
});

/*
  PLACEHOLDER LEGAL CONTENT. NOT ATTORNEY REVIEWED.

  This is general accounting-practice privacy language written to cover the
  services this site offers: tax preparation, IRS resolution, bookkeeping, and
  planning. It must be reviewed by the client and qualified legal counsel, and
  adjusted for the client's actual data practices, before publication.
*/

const trail = [
  { name: 'Home', href: '/' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

const sections: LegalSection[] = [
  {
    heading: 'Information We Collect',
    paragraphs: [
      `${site.legalName}, operating as ${site.brandName} ("we," "us," or "our"), collects information you provide directly to us and information generated automatically when you use this website.`,
      'Information you provide directly includes what you submit through our contact and consultation forms, send by email, or share with us in the course of an engagement.',
    ],
    bullets: [
      'Contact details. Name, phone number, email address, and mailing address',
      'Anything you submit through the contact form or the live chat widget on this site, both of which are hosted by our client management provider and delivered to us through it',
      'Tax and financial documents you share with us, which may include Social Security numbers, taxpayer identification numbers, income records, and account information',
      'Business information, including entity documents, financial statements, and payroll records',
      'Correspondence between you and our team',
      'Website usage data collected automatically, such as pages visited, referring source, browser type, and general location derived from IP address',
    ],
  },
  {
    heading: 'How We Use Your Information',
    paragraphs: [
      'We use the information we collect to deliver the services you have requested and to operate our practice.',
    ],
    bullets: [
      'Preparing and filing tax returns and related submissions',
      'Communicating with tax authorities on your behalf where you have authorized us to do so',
      'Maintaining bookkeeping records and producing financial reports',
      'Preparing and filing returns, and corresponding with tax authorities at your direction',
      'Responding to your inquiries and scheduling consultations',
      'Meeting our own legal, regulatory, and record-retention obligations',
      'Improving this website and understanding how visitors use it',
    ],
  },
  {
    heading: 'Third-Party Sharing',
    paragraphs: [
      'We do not sell your personal information. We share it only as necessary to deliver the services you have requested, or where we are required to by law.',
      'Because some of our services involve outside providers, sharing may include the categories below. In each case we share only the information that provider requires in order to do its part of the work.',
    ],
    bullets: [
      'Tax authorities and government agencies, when filing on your behalf or responding to a notice you have authorized us to handle',
      'Our client management and communication provider (LeadConnector, operated by HighLevel), which processes contact form submissions and live chat messages on our behalf so we can respond to your enquiry',
      'Service providers who support our operations, such as secure document storage, e-filing systems, and communication tools, each bound to protect the information they handle',
      'Legal and regulatory authorities where disclosure is required by law, subpoena, or court order',
    ],
  },
  {
    heading: 'Data Security',
    paragraphs: [
      'We maintain administrative, technical, and physical safeguards designed to protect the information you share with us. Documents are transmitted through secure electronic sharing rather than ordinary email attachments, and access to client files is limited to team members who need it to perform the work.',
      'No method of transmission or storage is entirely secure. While we take the protection of your information seriously, we cannot guarantee absolute security, and you share information with us with that understanding.',
      'Please do not send sensitive documents. Anything containing a Social Security number, taxpayer identification number, or account number, as an unencrypted email attachment. Ask us for a secure upload link instead.',
    ],
  },
  {
    heading: 'Data Retention',
    paragraphs: [
      'We retain client records for as long as necessary to provide our services and to satisfy the legal, regulatory, and professional retention requirements that apply to tax and accounting records. Retention periods vary by document type and by the requirements that apply to the engagement.',
    ],
  },
  {
    heading: 'Your Rights',
    paragraphs: [
      'Depending on where you live, you may have rights regarding the personal information we hold about you. These commonly include the following, subject to the limits of applicable law and to our own record-retention obligations.',
    ],
    bullets: [
      'Requesting a copy of the personal information we hold about you',
      'Requesting correction of information that is inaccurate or incomplete',
      'Requesting deletion of information, where we are not required to retain it',
      'Opting out of marketing communications at any time',
      'Asking how your information has been shared with third parties',
    ],
  },
  {
    heading: 'Cookies & Analytics',
    paragraphs: [
      'This website may use cookies and similar technologies to understand how visitors navigate the site and to improve it. Analytics tools may collect general usage data such as pages viewed, time on page, and referring source. Most browsers allow you to refuse or delete cookies through their settings.',
      'The live chat widget and the embedded contact form on this site are provided by our client management platform and set their own cookies in order to function, for example to remember an in-progress conversation. Blocking cookies may stop the chat widget or the form from working correctly, in which case you can always reach us by phone, text, or email instead.',
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      'This website is not directed to children under 13, and we do not knowingly collect personal information from them through it. Information about dependents provided by a parent or guardian in the course of preparing a tax return is handled as part of that engagement and protected accordingly.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    paragraphs: [
      'We may update this policy from time to time. When we do, we will revise the date shown on this page. We encourage you to review it periodically.',
    ],
  },
  {
    heading: 'Contact Us',
    paragraphs: [
      `If you have questions about this policy or about how your information is handled, contact us at ${site.email} or call ${site.phone.display}. Postal address: ${legalContactLine}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <LegalPage
        title="Privacy Policy"
        intro="How we collect, use, protect, and share the information you entrust to us."
        lastUpdated="August 25, 2026"
        sections={sections}
        breadcrumbs={trail}
      />
    </>
  );
}
