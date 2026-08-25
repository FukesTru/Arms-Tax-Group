import ServicePageTemplate from '@/components/ServicePageTemplate';
import { businessFinancialCategory as content } from '@/content';
import { pageMetadata } from '@/lib/seo';
import { categories } from '@/lib/services';

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.href,
});

export default function BusinessFinancialSolutionsPage() {
  return (
    <ServicePageTemplate
      content={content}
      subServices={categories[1].services}
      crossLinks={[
        { label: 'Tax & Accounting Services', href: '/services/tax-accounting' },
        { label: 'About The Arms Corporation', href: '/about' },
        { label: 'Who We Serve', href: '/who-we-serve' },
      ]}
    />
  );
}
