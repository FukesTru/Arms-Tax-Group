import ServicePageTemplate from '@/components/ServicePageTemplate';
import { taxAccountingCategory as content } from '@/content';
import { pageMetadata } from '@/lib/seo';
import { categories } from '@/lib/services';

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.href,
});

export default function TaxAccountingPage() {
  return (
    <ServicePageTemplate
      content={content}
      subServices={categories[0].services}
      crossLinks={[
        { label: 'Business & Financial Solutions', href: '/services/business-financial-solutions' },
        { label: 'About The Arms Corporation', href: '/about' },
        { label: 'Bronx, NY Office', href: '/who-we-serve/bronx-ny' },
      ]}
    />
  );
}
