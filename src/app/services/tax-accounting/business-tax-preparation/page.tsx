import ServicePageTemplate from '@/components/ServicePageTemplate';
import { businessTaxPreparation as content } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.href,
});

export default function BusinessTaxPreparationPage() {
  return (
    <ServicePageTemplate
      content={content}
      crossLinks={[
        { label: 'Tax & Accounting Services', href: '/services/tax-accounting' },
        { label: 'Bookkeeping & Accounting', href: '/services/tax-accounting/bookkeeping-accounting' },
        { label: 'Tax Planning & Consulting', href: '/services/tax-accounting/tax-planning' },
      ]}
    />
  );
}
