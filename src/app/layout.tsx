import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import { organizationSchema } from '@/lib/schema';
import { site } from '@/lib/site';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Tax Preparation & Financial Services | Bronx, NY & Nationwide | ${site.brandName}`,
    template: `%s | ${site.brandName}`,
  },
  description:
    'Personal and business tax prep, IRS resolution, bookkeeping, funding, and credit solutions from The Arms Corporation. Bronx, NY office, serving nationwide.',
  applicationName: site.brandName,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: true, address: true, email: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#0D0B0D',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const ga4Id = site.analytics.ga4MeasurementId;

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        {/*
          GA4 placeholder. Swap the measurement ID in src/lib/site.ts at
          launch; the guard below keeps the placeholder ID from firing.
        */}
        {ga4Id && !ga4Id.includes('XXXX') && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga4Id}');`}
            </Script>
          </>
        )}
      </head>
      <body>
        <JsonLd data={organizationSchema()} />

        {/*
          LeadConnector chat widget. Loaded after hydration so it never blocks
          first paint. It renders its own bottom-right launcher and is now the
          only floating element on the page.
        */}
        <Script
          id="leadconnector-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id={site.leadConnector.chatWidgetId}
          strategy="afterInteractive"
        />

        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
