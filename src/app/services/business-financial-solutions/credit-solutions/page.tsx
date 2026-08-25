import ServicePageTemplate from '@/components/ServicePageTemplate';
import { creditSolutions as content } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.href,
});

export default function CreditSolutionsPage() {
  return (
    <ServicePageTemplate
      content={content}
      crossLinks={[
        { label: 'Business & Financial Solutions', href: '/services/business-financial-solutions' },
        { label: 'Small Business Loans & Funding', href: '/services/business-financial-solutions/business-loans-funding' },
        { label: 'Business Consulting', href: '/services/business-financial-solutions/business-consulting' },
      ]}
    />
  );
}
