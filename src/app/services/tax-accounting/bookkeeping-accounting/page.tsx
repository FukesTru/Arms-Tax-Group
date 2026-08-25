import ServicePageTemplate from '@/components/ServicePageTemplate';
import { bookkeepingAccounting as content } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.href,
});

export default function BookkeepingAccountingPage() {
  return (
    <ServicePageTemplate
      content={content}
      crossLinks={[
        { label: 'Tax & Accounting Services', href: '/services/tax-accounting' },
        { label: 'Business & Corporate Tax Services', href: '/services/tax-accounting/business-tax-preparation' },
        { label: 'Tax Planning & Consulting', href: '/services/tax-accounting/tax-planning' },
      ]}
    />
  );
}
