import ServicePageTemplate from '@/components/ServicePageTemplate';
import { personalTaxPreparation as content } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.href,
});

export default function PersonalTaxPreparationPage() {
  return (
    <ServicePageTemplate
      content={content}
      crossLinks={[
        { label: 'Tax & Accounting Services', href: '/services/tax-accounting' },
        { label: 'Business & Corporate Tax Services', href: '/services/tax-accounting/business-tax-preparation' },
        { label: 'Tax Resolution & IRS Representation', href: '/services/tax-accounting/tax-resolution' },
      ]}
    />
  );
}
