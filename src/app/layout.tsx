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
    default: `Online Tax Preparation & Accounting | Nationwide | ${site.brandName}`,
    template: `%s | ${site.brandName}`,
  },
  description:
    'Personal and business tax preparation, IRS resolution, bookkeeping, and tax planning, handled entirely online for clients in all 50 states.',
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
        {/*
          Without JavaScript the IntersectionObserver in FadeUp never runs, so
          every revealed section would stay at opacity 0. Content first.
        */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: '.fade-up{opacity:1!important;transform:none!important}',
            }}
          />
        </noscript>
      </head>
      <body>
        <JsonLd data={organizationSchema()} />

        {/*
          LeadConnector chat widget. It renders its own bottom-right launcher
          and is the only floating element on the page.

          strategy="lazyOnload", not "afterInteractive". A third-party chat
          bundle is the heaviest thing this site loads and nobody needs it in
          the first seconds of a visit, so it waits for browser idle after
          everything else has settled rather than competing with hydration for
          a throttled mobile main thread. The launcher appears a beat later;
          that is the trade, and it is the right way round.
        */}
        <Script
          id="leadconnector-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id={site.leadConnector.chatWidgetId}
          strategy="lazyOnload"
        />

        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
