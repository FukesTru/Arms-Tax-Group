import ServicePageTemplate from '@/components/ServicePageTemplate';
import { taxResolution as content } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.href,
});

export default function TaxResolutionPage() {
  return (
    <ServicePageTemplate
      content={content}
      crossLinks={[
        { label: 'Tax & Accounting Services', href: '/services/tax-accounting' },
        { label: 'Personal Tax Preparation', href: '/services/tax-accounting/personal-tax-preparation' },
        { label: 'Business & Corporate Tax Services', href: '/services/tax-accounting/business-tax-preparation' },
      ]}
    />
  );
}
