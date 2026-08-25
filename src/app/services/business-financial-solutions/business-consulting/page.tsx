import ServicePageTemplate from '@/components/ServicePageTemplate';
import { businessConsulting as content } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.href,
});

export default function BusinessConsultingPage() {
  return (
    <ServicePageTemplate
      content={content}
      crossLinks={[
        { label: 'Business & Financial Solutions', href: '/services/business-financial-solutions' },
        { label: 'Tax Planning & Consulting', href: '/services/tax-accounting/tax-planning' },
        { label: 'Small Business Loans & Funding', href: '/services/business-financial-solutions/business-loans-funding' },
      ]}
    />
  );
}
