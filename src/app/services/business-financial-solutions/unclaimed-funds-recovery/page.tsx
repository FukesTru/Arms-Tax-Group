import ServicePageTemplate from '@/components/ServicePageTemplate';
import { unclaimedFundsRecovery as content } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.href,
});

export default function UnclaimedFundsRecoveryPage() {
  return (
    <ServicePageTemplate
      content={content}
      crossLinks={[
        { label: 'Business & Financial Solutions', href: '/services/business-financial-solutions' },
        { label: 'Credit Solutions', href: '/services/business-financial-solutions/credit-solutions' },
        { label: 'Contact Us', href: '/contact' },
      ]}
    />
  );
}
